import type { Gadget } from '@/data/gadgets';

export type CostPerUseInput = {
  price: number;
  usesPerWeek: number;
  months: number;
};

export type CostPerUseResult = {
  costPerUse: number;
  totalUses: number;
  monthlyCost: number;
  weeks: number;
};

export type CostPerUseError = {
  error: string;
};

const WEEKS_PER_YEAR = 52;

export function parseUsdAmount(value: string | number | null | undefined): number | null {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null;
  }
  if (!value) return null;
  const cleaned = String(value).replace(/[^0-9.]/g, '');
  if (!cleaned) return null;
  const amount = Number.parseFloat(cleaned);
  return Number.isFinite(amount) ? amount : null;
}

export function calculateCostPerUse(input: CostPerUseInput): CostPerUseResult | CostPerUseError {
  const { price, usesPerWeek, months } = input;

  if (!Number.isFinite(price) || price <= 0) {
    return { error: 'Enter a price above 0.' };
  }
  if (!Number.isFinite(usesPerWeek) || usesPerWeek <= 0) {
    return { error: 'Enter how many times you will use it each week.' };
  }
  if (!Number.isFinite(months) || months <= 0) {
    return { error: 'Enter how many months you will keep it.' };
  }

  const weeks = (months / 12) * WEEKS_PER_YEAR;
  const totalUses = usesPerWeek * weeks;
  if (totalUses <= 0) {
    return { error: 'Those numbers add up to zero uses.' };
  }

  return {
    costPerUse: price / totalUses,
    totalUses,
    monthlyCost: price / months,
    weeks,
  };
}

export function formatUsd(amount: number): string {
  if (amount > 0 && amount < 0.01) return '<$0.01';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatCount(amount: number): string {
  if (amount >= 100) {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(amount);
  }
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(amount);
}

export function nearbyCatalogPicks(price: number, items: Gadget[], limit = 3): Gadget[] {
  if (!Number.isFinite(price) || price <= 0) return [];

  return [...items]
    .map((gadget) => {
      const gadgetPrice = parseUsdAmount(gadget.price);
      return {
        gadget,
        delta: gadgetPrice == null ? Number.POSITIVE_INFINITY : Math.abs(gadgetPrice - price),
      };
    })
    .filter((entry) => Number.isFinite(entry.delta))
    .sort((a, b) => a.delta - b.delta || a.gadget.name.localeCompare(b.gadget.name))
    .slice(0, limit)
    .map((entry) => entry.gadget);
}

export function isCostPerUseResult(
  value: CostPerUseResult | CostPerUseError,
): value is CostPerUseResult {
  return !('error' in value);
}
