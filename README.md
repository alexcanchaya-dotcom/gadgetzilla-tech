# gadgetzilla-tech

GadgetZilla is a curated gadget catalog at [gadgetzilla.tech](https://gadgetzilla.tech). Products live in a versioned file, not a scrape from the shopper's browser.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- Catalog: `data/catalog.json` (source of truth) + `data/gadgets.ts` (types and helpers)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Trust pages

These routes ship first and are linked in the header:

- `/about`
- `/privacy`
- `/terms`
- `/affiliate-disclosure`
- `/contact`

Canonical host is the apex `https://gadgetzilla.tech`. `www.gadgetzilla.tech` redirects there.

## Optional environment variables

Copy `.env.example`. Leave IDs blank until they are real — the site will not inject `G-XXXXXXXXXX`, `ca-pub-XXXXXXXX`, or a fake Google verification code.

| Variable | Where | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Vercel | Loads Google Analytics |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Vercel | Loads AdSense |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Vercel | Search Console meta tag |
| `NEWSLETTER_WEBHOOK_URL` | Vercel | Forwards newsletter signups |
| `CONTACT_WEBHOOK_URL` | Vercel | Forwards contact form posts |
| `AWS_ACCESS_KEY` | GitHub Actions (and local) | PA-API access key |
| `AWS_SECRET` | GitHub Actions (and local) | PA-API secret |
| `PARTNER_TAG` | GitHub Actions (and local) | Amazon Associate tag. Default `gadgetzilla07-20` |
| `GADGETS_RSS_URL` or `YOUTUBE_PLAYLIST_RSS` | GitHub Actions (and local) | Feed Al owns that already contains Amazon links |

Without the form webhooks, contact and newsletter open a mailto to `hello@gadgetzilla.tech` instead of faking success.

## Refresh the gadget catalog

Do not scrape Amazon from the browser. Use the catalog file.

```bash
npm run refresh-gadgets
```

The script updates `data/catalog.json` from the first sources that exist:

1. **Amazon Product Advertising API** — if `AWS_ACCESS_KEY`, `AWS_SECRET`, and `PARTNER_TAG` are set, it looks up existing catalog ASINs (and any new ASINs from RSS) and writes live titles/prices. It does not invent ASINs.
2. **Manual merge** — copy `data/gadgets.input.example.json` to `data/gadgets.input.json` and add products that already have a real 10-character ASIN. Placeholder ASINs are skipped.
3. **RSS / YouTube playlist** — if `GADGETS_RSS_URL` or `YOUTUBE_PLAYLIST_RSS` is set, the script collects Amazon ASINs already in the feed. With PA-API keys it can add those products. Without keys it writes `data/discovered-asins.json` for a manual pass.

If none of those sources exist, the script prints a skip message and exits 0. Product links always keep tag `gadgetzilla07-20`.

### What Al must add for full auto

GitHub → repo → Settings → Secrets and variables → Actions:

- `AWS_ACCESS_KEY`
- `AWS_SECRET`
- `PARTNER_TAG` = `gadgetzilla07-20`

Optional: `GADGETS_RSS_URL` or `YOUTUBE_PLAYLIST_RSS` for a review feed Al owns.

Amazon has started steering new integrations to the Creators API. If PA-API returns AccessDenied, keep using `gadgets.input.json` and ask Associates Central for current API credentials. Do not paste keys into the repo.

### Weekly GitHub Action

`.github/workflows/refresh-gadgets.yml` runs every Monday (and on demand).

- No secrets and no `gadgets.input.json`: no-op, green check.
- Secrets or an input file produce a catalog diff: the workflow opens a PR.

After you merge a refresh, the homepage badge reads **Updated {date}** from `catalog.json`. The **New** filter shows items from that refresh (badge `NEW` or `addedAt` on the refresh day).
