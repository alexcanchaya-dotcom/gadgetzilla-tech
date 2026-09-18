export const WEEKS_PER_MONTH = 52 / 12;

export type CostPerUseInput = {
  price: number;
  usesPerWeek: number;
  monthsKept: number;
};

export type CostPerUseResult = {
  costPerUse: number;
  totalUses: number;
  price: number;
  usesPerWeek: number;
  monthsKept: number;
};

export type CostPerUseError = {
  error: string;
};

export function parseMoney(raw: string): number | null {
  const cleaned = raw.replace(/[^0-9.]/g, '');
  if (!cleaned) return null;
  const value = Number.parseFloat(cleaned);
  if (!Number.isFinite(value)) return null;
  return value;
}

export function parseCatalogPrice(price: string): number | null {
  return parseMoney(price);
}

export function calculateCostPerUse(input: CostPerUseInput): CostPerUseResult | CostPerUseError {
  const { price, usesPerWeek, monthsKept } = input;

  if (!Number.isFinite(price) || price <= 0) {
    return { error: 'Enter a price greater than zero.' };
  }
  if (!Number.isFinite(usesPerWeek) || usesPerWeek <= 0) {
    return { error: 'Enter how many times you will use it each week.' };
  }
  if (!Number.isFinite(monthsKept) || monthsKept <= 0) {
    return { error: 'Enter how many months you expect to keep using it.' };
  }

  const totalUses = usesPerWeek * monthsKept * WEEKS_PER_MONTH;
  if (totalUses < 1) {
    return { error: 'That works out to less than one use. Raise uses per week or months kept.' };
  }

  return {
    costPerUse: price / totalUses,
    totalUses,
    price,
    usesPerWeek,
    monthsKept,
  };
}

export function isCostPerUseResult(
  value: CostPerUseResult | CostPerUseError,
): value is CostPerUseResult {
  return 'costPerUse' in value;
}

export function formatUsd(amount: number): string {
  if (!Number.isFinite(amount)) return '—';
  if (amount > 0 && amount < 0.01) return 'less than $0.01';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatUses(totalUses: number): string {
  if (totalUses >= 10) return Math.round(totalUses).toLocaleString('en-US');
  return totalUses.toLocaleString('en-US', { maximumFractionDigits: 1 });
}

/**
 * After a catalog/prefill change, never keep a prior decision number.
 * Recalculate when the new price and remaining inputs are valid; otherwise clear.
 */
export function resultAfterCatalogPrefill(input: {
  price: number | null;
  usesPerWeek: number | null;
  monthsKept: number | null;
}): CostPerUseResult | null {
  if (input.price == null || input.usesPerWeek == null || input.monthsKept == null) {
    return null;
  }

  const next = calculateCostPerUse({
    price: input.price,
    usesPerWeek: input.usesPerWeek,
    monthsKept: input.monthsKept,
  });

  return isCostPerUseResult(next) ? next : null;
}
