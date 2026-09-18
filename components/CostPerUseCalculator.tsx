'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ProductImage } from '@/components/ProductImage';
import { gadgets, type Gadget } from '@/data/gadgets';
import { AFFILIATE_TAG } from '@/lib/site';
import { pickCatalogForResult, type ResultPickCategory } from '@/lib/catalog-picks';
import {
  calculateCostPerUse,
  formatUsd,
  formatUses,
  isCostPerUseResult,
  parseCatalogPrice,
  parseMoney,
  type CostPerUseResult,
} from '@/lib/cost-per-use';

const categories: ResultPickCategory[] = [
  'All',
  'Gaming Gear',
  'Audio',
  'Wearables',
  'Smart Home',
  'PC Components',
];

const fieldClass =
  'w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-neonBlue';

export function CostPerUseCalculator() {
  const [priceInput, setPriceInput] = useState('');
  const [usesPerWeekInput, setUsesPerWeekInput] = useState('');
  const [monthsKeptInput, setMonthsKeptInput] = useState('');
  const [category, setCategory] = useState<ResultPickCategory>('All');
  const [catalogId, setCatalogId] = useState('');
  const [result, setResult] = useState<CostPerUseResult | null>(null);
  const [error, setError] = useState('');

  const catalogOptions = useMemo(
    () =>
      [...gadgets].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  const applyCatalogItem = (gadget: Gadget | undefined) => {
    if (!gadget) {
      setCatalogId('');
      return;
    }
    const parsed = parseCatalogPrice(gadget.price);
    setCatalogId(gadget.id);
    setCategory(gadget.category);
    if (parsed != null) setPriceInput(String(parsed));
  };

  const handleCatalogChange = (id: string) => {
    if (!id) {
      setCatalogId('');
      return;
    }
    applyCatalogItem(gadgets.find((gadget) => gadget.id === id));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const price = parseMoney(priceInput);
    const usesPerWeek = parseMoney(usesPerWeekInput);
    const monthsKept = parseMoney(monthsKeptInput);

    const next = calculateCostPerUse({
      price: price ?? Number.NaN,
      usesPerWeek: usesPerWeek ?? Number.NaN,
      monthsKept: monthsKept ?? Number.NaN,
    });

    if (!isCostPerUseResult(next)) {
      setResult(null);
      setError(next.error);
      return;
    }

    setError('');
    setResult(next);
  };

  const picks = result
    ? pickCatalogForResult({
        category,
        price: result.price,
        excludeId: catalogId || undefined,
      })
    : [];

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block space-y-2 sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.16em] text-white/50">
              Start from a catalog item (optional)
            </span>
            <select
              value={catalogId}
              onChange={(event) => handleCatalogChange(event.target.value)}
              className={fieldClass}
            >
              <option value="">Type your own price</option>
              {catalogOptions.map((gadget) => (
                <option key={gadget.id} value={gadget.id}>
                  {gadget.name} — {gadget.price}
                </option>
              ))}
            </select>
          </label>

          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.16em] text-white/50">What it costs</span>
            <input
              type="text"
              inputMode="decimal"
              value={priceInput}
              onChange={(event) => setPriceInput(event.target.value)}
              placeholder="119"
              className={fieldClass}
              aria-describedby="price-hint"
            />
            <span id="price-hint" className="block text-xs text-white/40">
              Dollars you paid, or would pay. Catalog prices are snapshots.
            </span>
          </label>

          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.16em] text-white/50">Uses per week</span>
            <input
              type="text"
              inputMode="decimal"
              value={usesPerWeekInput}
              onChange={(event) => setUsesPerWeekInput(event.target.value)}
              placeholder="3"
              className={fieldClass}
            />
          </label>

          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.16em] text-white/50">Months you will keep it</span>
            <input
              type="text"
              inputMode="decimal"
              value={monthsKeptInput}
              onChange={(event) => setMonthsKeptInput(event.target.value)}
              placeholder="24"
              className={fieldClass}
            />
          </label>

          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.16em] text-white/50">Category (for picks after the number)</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as ResultPickCategory)}
              className={fieldClass}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === 'All' ? 'Any category' : item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-cyberPurple to-neonBlue px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night"
        >
          See cost per use
        </button>
      </form>

      {error ? (
        <p className="text-sm text-hotPink" role="alert">
          {error}
        </p>
      ) : null}

      {result ? (
        <section
          className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
          aria-live="polite"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Decision number</p>
            <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Cost per use
            </h2>
            <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">{formatUsd(result.costPerUse)}</p>
            <p className="mt-4 max-w-2xl text-sm text-white/70">
              {formatUsd(result.price)} over {formatUses(result.totalUses)} uses (
              {result.usesPerWeek} time{result.usesPerWeek === 1 ? '' : 's'} a week for {result.monthsKept} month
              {result.monthsKept === 1 ? '' : 's'}).
            </p>
            <p className="mt-3 max-w-2xl text-sm text-white/55">
              This is division, not a recommendation to buy, keep, or upgrade. To compare an upgrade, run the
              same number on the new price. The lower cost per use is the cheaper way to keep using the gadget.
            </p>
          </div>

          <ResultAffiliatePicks picks={picks} category={category} />
        </section>
      ) : null}
    </div>
  );
}

function ResultAffiliatePicks({
  picks,
  category,
}: {
  picks: Gadget[];
  category: ResultPickCategory;
}) {
  const heading =
    category === 'All' ? 'Catalog picks if you are shopping' : `Catalog picks in ${category}`;

  return (
    <div className="space-y-4 border-t border-white/10 pt-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">After the number</p>
        <h3 className="mt-2 text-xl font-bold text-white">{heading}</h3>
        <p className="mt-2 text-sm text-white/65">
          Items from our public catalog file — not a ranked “best of” list and not an expert verdict. Snapshot
          prices. Confirm price and stock on Amazon.
        </p>
      </div>

      {picks.length === 0 ? (
        <p className="text-sm text-white/60">
          No catalog items matched that filter.{' '}
          <Link href="/" className="text-neonBlue underline underline-offset-4">
            Browse the full catalog
          </Link>
          .
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-3">
          {picks.map((gadget) => (
            <li key={gadget.id} className="overflow-hidden rounded-2xl border border-white/10 bg-night/60 p-4">
              <div className="overflow-hidden rounded-xl border border-white/5 bg-white">
                <div className="relative aspect-[4/3]">
                  <ProductImage src={gadget.image} alt={gadget.name} className="h-full w-full" />
                </div>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/50">{gadget.category}</p>
              <p className="mt-1 text-sm font-bold text-white">{gadget.name}</p>
              <p className="mt-1 text-sm text-white/70">{gadget.price}</p>
              <a
                href={gadget.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-3 inline-block text-sm font-semibold text-neonBlue underline underline-offset-4"
              >
                View on Amazon
              </a>
            </li>
          ))}
        </ul>
      )}

      <p className="text-xs leading-6 text-white/50">
        As an Amazon Associate we earn from qualifying purchases. Links use tag {AFFILIATE_TAG}. We may earn a
        commission if you buy through these links, at no extra cost to you.{' '}
        <Link href="/affiliate-disclosure" className="text-white/70 underline underline-offset-4 hover:text-white">
          Affiliate disclosure
        </Link>
        .
      </p>
    </div>
  );
}
