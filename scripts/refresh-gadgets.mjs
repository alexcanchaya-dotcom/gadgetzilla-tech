#!/usr/bin/env node
/**
 * Refresh the versioned gadget catalog without scraping Amazon in a browser.
 *
 * Sources, in order:
 *  1. Amazon Product Advertising API (PA-API 5) when AWS_ACCESS_KEY / AWS_SECRET / PARTNER_TAG exist
 *  2. data/gadgets.input.json merge (manual ASINs Al already has)
 *  3. RSS / YouTube playlist RSS — collect ASINs already present in the feed
 *
 * Never invents ASINs. Exits 0 when there is nothing to do.
 */
import { createHash, createHmac } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const catalogPath = join(root, 'data', 'catalog.json');
const inputPath = join(root, 'data', 'gadgets.input.json');
const discoveredPath = join(root, 'data', 'discovered-asins.json');

const AFFILIATE_TAG = process.env.PARTNER_TAG || process.env.AMAZON_PARTNER_TAG || 'gadgetzilla07-20';
const ACCESS_KEY = process.env.AWS_ACCESS_KEY || process.env.AWS_ACCESS_KEY_ID || '';
const SECRET_KEY = process.env.AWS_SECRET || process.env.AWS_SECRET_ACCESS_KEY || '';
const RSS_URL = process.env.GADGETS_RSS_URL || process.env.YOUTUBE_PLAYLIST_RSS || '';
const MARKETPLACE = process.env.AMAZON_MARKETPLACE || 'www.amazon.com';
const PAAPI_HOST = process.env.PAAPI_HOST || 'webservices.amazon.com';
const PAAPI_REGION = process.env.PAAPI_REGION || 'us-east-1';

const ASIN_PATTERN = /^[A-Z0-9]{10}$/;
const PLACEHOLDER_ASIN = /X{4,}|EXAMPLE|REPLACE|YOURASIN|XXXXXXXX|0000000000/i;

function log(message) {
  console.log(`[refresh-gadgets] ${message}`);
}

function isRealAsin(value) {
  const asin = String(value || '').trim().toUpperCase();
  return ASIN_PATTERN.test(asin) && !PLACEHOLDER_ASIN.test(asin);
}

function extractAsin(value) {
  const text = String(value || '');
  const fromUrl = text.match(/\/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})/i);
  if (fromUrl && isRealAsin(fromUrl[1])) return fromUrl[1].toUpperCase();
  const bare = text.trim().toUpperCase();
  return isRealAsin(bare) ? bare : undefined;
}

function withAffiliateTag(url, tag = AFFILIATE_TAG) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set('tag', tag);
    return parsed.toString();
  } catch {
    const asin = extractAsin(url);
    if (asin) return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
    return url;
  }
}

function amazonUrlForAsin(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;
}

function amazonImageForAsin(asin) {
  return isRealAsin(asin) ? `https://m.media-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg` : '';
}

function catalogImage(product, asin) {
  const current = String(product.image || '').trim();
  if (current.includes('unsplash.com')) return amazonImageForAsin(asin);
  return current;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
}

function hmac(key, data) {
  return createHmac('sha256', key).update(data, 'utf8').digest();
}

function sha256Hex(data) {
  return createHash('sha256').update(data, 'utf8').digest('hex');
}

function toAmzDate(date) {
  return date.toISOString().replace(/[:-]|\.\d{3}/g, '');
}

function signPaapi({ host, path, body, accessKey, secretKey, region, amzTarget }) {
  const now = new Date();
  const amzDate = toAmzDate(now);
  const dateStamp = amzDate.slice(0, 8);
  const service = 'ProductAdvertisingAPI';
  const payloadHash = sha256Hex(body);
  const canonicalHeaders = [
    'content-encoding:amz-1.0',
    'content-type:application/json; charset=utf-8',
    `host:${host}`,
    `x-amz-date:${amzDate}`,
    `x-amz-target:${amzTarget}`,
    '',
  ].join('\n');
  const signedHeaders = 'content-encoding;content-type;host;x-amz-date;x-amz-target';
  const canonicalRequest = ['POST', path, '', canonicalHeaders, signedHeaders, payloadHash].join('\n');
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = ['AWS4-HMAC-SHA256', amzDate, credentialScope, sha256Hex(canonicalRequest)].join('\n');
  const kDate = hmac(`AWS4${secretKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  const kSigning = hmac(kService, 'aws4_request');
  const signature = createHmac('sha256', kSigning).update(stringToSign, 'utf8').digest('hex');
  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
  return { amzDate, authorization };
}

async function paapiGetItems(asins) {
  const unique = [...new Set(asins.filter(isRealAsin))];
  const items = new Map();
  if (!ACCESS_KEY || !SECRET_KEY) return { items, skipped: true, error: null };

  const path = '/paapi5/getitems';
  const amzTarget = 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems';

  for (let i = 0; i < unique.length; i += 10) {
    const batch = unique.slice(i, i + 10);
    const payload = {
      PartnerTag: AFFILIATE_TAG,
      PartnerType: 'Associates',
      Marketplace: MARKETPLACE,
      ItemIds: batch,
      Resources: [
        'ItemInfo.Title',
        'ItemInfo.Features',
        'ItemInfo.Classifications.Binding',
        'Images.Primary.Large',
        'Offers.Listings.Price',
        'Offers.Listings.SavingBasis',
      ],
    };
    const body = JSON.stringify(payload);
    const { amzDate, authorization } = signPaapi({
      host: PAAPI_HOST,
      path,
      body,
      accessKey: ACCESS_KEY,
      secretKey: SECRET_KEY,
      region: PAAPI_REGION,
      amzTarget,
    });

    const response = await fetch(`https://${PAAPI_HOST}${path}`, {
      method: 'POST',
      headers: {
        'content-encoding': 'amz-1.0',
        'content-type': 'application/json; charset=utf-8',
        host: PAAPI_HOST,
        'x-amz-date': amzDate,
        'x-amz-target': amzTarget,
        authorization,
        accept: 'application/json',
      },
      body,
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return { items, skipped: false, error: `PA-API returned non-JSON (${response.status})` };
    }

    if (!response.ok) {
      const message = data?.Errors?.[0]?.Message || data?.message || text.slice(0, 300);
      return { items, skipped: false, error: `PA-API ${response.status}: ${message}` };
    }

    for (const item of data.ItemsResult?.Items || []) {
      const asin = item.ASIN;
      if (!isRealAsin(asin)) continue;
      const listing = item.Offers?.Listings?.[0];
      const price = listing?.Price?.DisplayAmount;
      const originalPrice = listing?.SavingBasis?.DisplayAmount;
      items.set(asin, {
        asin,
        name: item.ItemInfo?.Title?.DisplayValue,
        description: item.ItemInfo?.Features?.DisplayValues?.[0],
        image: item.Images?.Primary?.Large?.URL,
        price,
        originalPrice: originalPrice && originalPrice !== price ? originalPrice : undefined,
      });
    }

    if (i + 10 < unique.length) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }

  return { items, skipped: false, error: null };
}

function collectAsinsFromRss(xml) {
  const found = new Set();
  const urlMatches = xml.matchAll(/https?:\/\/(?:www\.)?amazon\.[^"'<\s]+/gi);
  for (const match of urlMatches) {
    const asin = extractAsin(match[0]);
    if (asin) found.add(asin);
  }
  return [...found];
}

async function fetchRssAsins(url) {
  if (!url) return [];
  const response = await fetch(url, { headers: { 'user-agent': 'GadgetZillaCatalogRefresh/1.0' } });
  if (!response.ok) {
    log(`RSS fetch failed (${response.status}). Skipping feed.`);
    return [];
  }
  return collectAsinsFromRss(await response.text());
}

function loadCatalog() {
  return JSON.parse(readFileSync(catalogPath, 'utf8'));
}

function normalizeIncoming(product, nowIso) {
  const asin = extractAsin(product.asin || product.amazonUrl);
  if (!asin) return null;
  const name = String(product.name || '').trim();
  if (!name) return null;
  const category = product.category || 'Gaming Gear';
  return {
    id: product.id || slugify(name) || asin.toLowerCase(),
    name,
    category,
    price: product.price || 'See Amazon',
    originalPrice: product.originalPrice,
    score: Number(product.score) || 90,
    badge: product.badge || 'NEW',
    description: product.description || `${name} — added from the catalog refresh.`,
    image: catalogImage(product, asin),
    amazonUrl: amazonUrlForAsin(asin),
    tags: Array.isArray(product.tags) ? product.tags : [],
    dealEndsAt: product.dealEndsAt,
    asin,
    addedAt: nowIso,
    lastRefreshedAt: nowIso,
  };
}

function applyPaapiItem(existing, live, nowIso) {
  const next = { ...existing };
  if (live.price) next.price = live.price;
  if (live.originalPrice) next.originalPrice = live.originalPrice;
  else if (live.price && existing.originalPrice === live.price) delete next.originalPrice;
  if (live.image) {
    next.image = live.image;
  } else if (!existing.image || String(existing.image).includes('unsplash.com')) {
    next.image = amazonImageForAsin(live.asin);
  }
  next.amazonUrl = amazonUrlForAsin(live.asin);
  next.asin = live.asin;
  next.lastRefreshedAt = nowIso;
  return next;
}

async function main() {
  const hasPaapi = Boolean(ACCESS_KEY && SECRET_KEY);
  const hasInput = existsSync(inputPath);
  const hasRss = Boolean(RSS_URL);

  if (!hasPaapi && !hasInput && !hasRss) {
    log('No refresh source configured. Skipping.');
    log('Add AWS_ACCESS_KEY, AWS_SECRET, and PARTNER_TAG for PA-API, or commit data/gadgets.input.json, or set GADGETS_RSS_URL / YOUTUBE_PLAYLIST_RSS.');
    log('REFRESH_CHANGED=false');
    return;
  }

  const catalog = loadCatalog();
  const nowIso = new Date().toISOString();
  const products = Array.isArray(catalog.products) ? [...catalog.products] : [];
  const byAsin = new Map();
  const byId = new Map();
  for (const product of products) {
    if (product.asin) byAsin.set(product.asin, product);
    byId.set(product.id, product);
  }

  let changed = false;
  const discovered = [];

  if (hasInput) {
    const incoming = JSON.parse(readFileSync(inputPath, 'utf8'));
    const list = Array.isArray(incoming.products) ? incoming.products : Array.isArray(incoming) ? incoming : [];
    let merged = 0;
    let skipped = 0;
    for (const raw of list) {
      const product = normalizeIncoming(raw, nowIso);
      if (!product) {
        skipped += 1;
        log(`Skipped input row without a real ASIN or name: ${raw.id || raw.name || '(unknown)'}`);
        continue;
      }
      const existing = byAsin.get(product.asin) || byId.get(product.id);
      if (existing) {
        Object.assign(existing, {
          ...product,
          addedAt: existing.addedAt || nowIso,
          badge: existing.badge === 'NEW' ? existing.badge : product.badge,
        });
      } else {
        product.badge = 'NEW';
        products.push(product);
        byAsin.set(product.asin, product);
        byId.set(product.id, product);
      }
      merged += 1;
      changed = true;
    }
    log(`Merged gadgets.input.json: ${merged} usable, ${skipped} skipped.`);
  }

  if (hasRss) {
    const asins = await fetchRssAsins(RSS_URL);
    for (const asin of asins) {
      if (!byAsin.has(asin)) discovered.push(asin);
    }
    log(`RSS contained ${asins.length} Amazon ASIN(s); ${discovered.length} not already in the catalog.`);
  }

  const asinsToLookup = [
    ...products.map((product) => product.asin).filter(isRealAsin),
    ...discovered,
  ];

  if (hasPaapi && asinsToLookup.length) {
    const result = await paapiGetItems(asinsToLookup);
    if (result.error) {
      log(result.error);
      log('PA-API did not update prices. Catalog merge (if any) is still kept. Amazon may require Creators API credentials instead of PA-API 5.');
    } else {
      for (const [asin, live] of result.items) {
        const existing = byAsin.get(asin);
        if (existing) {
          const next = applyPaapiItem(existing, live, nowIso);
          Object.assign(existing, next);
          changed = true;
        } else if (discovered.includes(asin) && live.name) {
          const created = normalizeIncoming(
            {
              asin,
              name: live.name,
              description: live.description,
              image: live.image,
              price: live.price,
              originalPrice: live.originalPrice,
              badge: 'NEW',
            },
            nowIso
          );
          if (created) {
            products.push(created);
            byAsin.set(asin, created);
            changed = true;
          }
        }
      }
      log(`PA-API looked up ${result.items.size} item(s).`);
    }
  } else if (discovered.length) {
    writeFileSync(
      discoveredPath,
      `${JSON.stringify({ updatedAt: nowIso, asins: discovered, note: 'Real ASINs found in RSS. Add them via gadgets.input.json or PA-API — do not invent details.' }, null, 2)}\n`
    );
    log(`Wrote ${discovered.length} discovered ASIN(s) to data/discovered-asins.json. Not adding products without PA-API or a manual input row.`);
    changed = true;
  }

  for (const product of products) {
    if (product.asin) product.amazonUrl = amazonUrlForAsin(product.asin);
    else product.amazonUrl = withAffiliateTag(product.amazonUrl);
    const nextImage = catalogImage(product, product.asin);
    if (nextImage !== product.image) {
      product.image = nextImage;
      changed = true;
    }
  }

  if (!changed) {
    log('Sources ran, but the catalog did not change.');
    log('REFRESH_CHANGED=false');
    return;
  }

  const nextCatalog = {
    version: 1,
    updatedAt: nowIso,
    affiliateTag: AFFILIATE_TAG,
    products,
  };
  writeFileSync(catalogPath, `${JSON.stringify(nextCatalog, null, 2)}\n`);
  log(`Wrote data/catalog.json with ${products.length} products. Updated ${nowIso}`);
  log('REFRESH_CHANGED=true');
}

main().catch((error) => {
  console.error(`[refresh-gadgets] ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
});
