'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ProductImage } from '@/components/ProductImage';
import { gadgets, type Gadget } from '@/data/gadgets';
import { AFFILIATE_TAG } from '@/lib/site';
import {
  calculateCostPerUse,
  formatCount,
  formatUsd,
  isCostPerUseResult,
  nearbyCatalogPicks,
  parseUsdAmount,
} from '@/lib/costPerUse';

const OWN_PRICE = '';

type CalculatorState = {
  catalogId: string;
  price: string;
  usesPerWeek: string;
  months: string;
};

const exampleState: CalculatorState = {
  catalogId: OWN_PRICE,
  price: '119',
  usesPerWeek: '4',
  months: '24',
};

function readNumber(value: string): number {
  return parseUsdAmount(value) ?? Number.NaN;
}

export function CostPerUseCalculator() {
  const [draft, setDraft] = useState<CalculatorState>(exampleState);
  const [submitted, setSubmitted] = useState<CalculatorState | null>(null);

  const selectedGadget = useMemo(
    () => gadgets.find((gadget) => gadget.id === submitted?.catalogId) ?? null,
    [submitted],
  );

  const result = useMemo(() => {
    if (!submitted) return null;
    return calculateCostPerUse({
      price: readNumber(submitted.price),
      usesPerWeek: readNumber(submitted.usesPerWeek),
      months: readNumber(submitted.months),
    });
  }, [submitted]);

  const picks = useMemo(() => {
    if (!result || !isCostPerUseResult(result)) return [];
    return nearbyCatalogPicks(readNumber(submitted?.price ?? ''), gadgets, 3);
  }, [result, submitted]);

  const handleCatalogChange = (catalogId: string) => {
    const gadget = gadgets.find((item) => item.id === catalogId);
    setDraft((current) => ({
      ...current,
      catalogId,
      price: gadget ? String(parseUsdAmount(gadget.price) ?? '') : current.price,
    }));
  };

  useEffect(() => {
    if (!submitted) return;
    const target =
      document.getElementById('cost-per-use-result') ?? document.getElementById('cost-per-use-error');
    target?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [submitted]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: CalculatorState = {
      catalogId: String(form.get('catalogId') ?? draft.catalogId),
      price: String(form.get('price') ?? draft.price),
      usesPerWeek: String(form.get('usesPerWeek') ?? draft.usesPerWeek),
      months: String(form.get('months') ?? draft.months),
    };
    setDraft(next);
    setSubmitted(next);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-white">Optional catalog snapshot</span>
          <select
            name="catalogId"
            value={draft.catalogId}
            onChange={(event) => handleCatalogChange(event.target.value)}
            className="w-full rounded-2xl border border-white/15 bg-night/80 px-4 py-3 text-sm text-white outline-none focus:border-neonBlue"
          >
            <option value={OWN_PRICE}>Type my own price</option>
            {gadgets.map((gadget) => (
              <option key={gadget.id} value={gadget.id}>
                {gadget.name} — {gadget.price}
              </option>
            ))}
          </select>
          <span className="mt-2 block text-xs text-white/50">
            Catalog prices are snapshots, not a live Amazon quote.
          </span>
        </label>

        <label>
          <span className="mb-2 block text-sm font-semibold text-white">What it costs</span>
          <span className="relative block">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
            <input
              name="price"
              type="number"
              inputMode="decimal"
              min="0.01"
              step="0.01"
              required
              value={draft.price}
              onChange={(event) => setDraft((current) => ({ ...current, price: event.target.value }))}
              className="w-full rounded-2xl border border-white/15 bg-white/5 py-3 pl-8 pr-4 text-white outline-none focus:border-neonBlue"
            />
          </span>
        </label>

        <label>
          <span className="mb-2 block text-sm font-semibold text-white">Uses per week</span>
          <input
            name="usesPerWeek"
            type="number"
            inputMode="decimal"
            min="0.1"
            step="0.1"
            required
            value={draft.usesPerWeek}
            onChange={(event) => setDraft((current) => ({ ...current, usesPerWeek: event.target.value }))}
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-neonBlue"
          />
        </label>

        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-white">Months you will keep it</span>
          <input
            name="months"
            type="number"
            inputMode="decimal"
            min="1"
            step="1"
            required
            value={draft.months}
            onChange={(event) => setDraft((current) => ({ ...current, months: event.target.value }))}
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-neonBlue"
          />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-cyberPurple to-neonBlue px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night"
          >
            See cost per use
          </button>
          <p className="mt-3 text-xs text-white/50">
            Example numbers are filled in so you can click once. Change them if you want. Free. No email. The
            number is arithmetic from those inputs, not a review.
          </p>
        </div>
      </form>

      {result && !isCostPerUseResult(result) ? (
        <p id="cost-per-use-error" className="rounded-2xl border border-hotPink/30 bg-hotPink/10 px-4 py-3 text-sm text-white" role="alert">
          {result.error}
        </p>
      ) : null}

      {result && isCostPerUseResult(result) ? (
        <div className="space-y-6" id="cost-per-use-result" aria-live="polite">
          <div className="rounded-2xl border border-neonBlue/30 bg-white/5 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Decision number</p>
            <h3 className="mt-2 text-lg font-semibold text-white/80">Cost per use</h3>
            <p className="mt-3 text-5xl font-bold tabular-nums text-white sm:text-6xl">{formatUsd(result.costPerUse)}</p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              {selectedGadget &&
              parseUsdAmount(selectedGadget.price) === readNumber(submitted?.price ?? '')
                ? `Using the snapshot price for ${selectedGadget.name}. `
                : null}
              About {formatCount(result.totalUses)} uses over {formatCount(readNumber(submitted?.months ?? ''))} months
              if you use it {formatCount(readNumber(submitted?.usesPerWeek ?? ''))} times a week. That is roughly{' '}
              {formatUsd(result.monthlyCost)} a month if you spread the price evenly.
            </p>
            <p className="mt-3 text-xs text-white/50">
              This is price divided by expected uses. It does not say the gadget is worth it, and it does not include
              tax, shipping, or accessories.
            </p>
          </div>

          <AffiliatePicks priceLabel={submitted?.price ?? ''} picks={picks} />
        </div>
      ) : null}
    </div>
  );
}

function AffiliatePicks({ priceLabel, picks }: { priceLabel: string; picks: Gadget[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-night/40 p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Affiliate</p>
      <h3 className="mt-2 text-xl font-bold text-white">Catalog items near that price</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
        As an Amazon Associate we earn from qualifying purchases. Tag {AFFILIATE_TAG}. These are editorial catalog
        items close to ${priceLabel || 'your number'}, not a ranked “best of” list and not an expert pick. Snapshot
        prices — confirm on Amazon.
      </p>

      {picks.length > 0 ? (
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {picks.map((gadget) => (
            <li key={gadget.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="overflow-hidden rounded-xl border border-white/5 bg-white">
                <div className="relative aspect-[4/3]">
                  <ProductImage src={gadget.image} alt={gadget.name} className="h-full w-full" />
                </div>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/50">{gadget.category}</p>
              <p className="mt-1 text-sm font-semibold text-white">{gadget.name}</p>
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
      ) : (
        <p className="mt-4 text-sm text-white/60">No catalog item sat near that price.</p>
      )}

      <p className="mt-5 text-xs text-white/50">
        <Link href="/affiliate-disclosure" className="text-neonBlue underline underline-offset-4">
          Affiliate disclosure
        </Link>
        . Ads and analytics stay off until real IDs are configured.
      </p>
    </div>
  );
}
