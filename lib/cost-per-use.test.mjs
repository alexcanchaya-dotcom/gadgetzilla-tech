import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  calculateCostPerUse,
  formatUsd,
  formatUses,
  isCostPerUseResult,
  parseMoney,
  resultAfterCatalogPrefill,
  WEEKS_PER_MONTH,
} from './cost-per-use.ts';

describe('cost per use', () => {
  it('names the decision number as price divided by expected uses', () => {
    const result = calculateCostPerUse({ price: 119, usesPerWeek: 3, monthsKept: 24 });
    assert.equal(isCostPerUseResult(result), true);
    if (!isCostPerUseResult(result)) return;
    assert.equal(result.totalUses, 3 * 24 * WEEKS_PER_MONTH);
    assert.equal(result.costPerUse, 119 / result.totalUses);
    assert.equal(formatUsd(result.costPerUse), '$0.38');
    assert.equal(formatUses(result.totalUses), '312');
  });

  it('rejects missing inputs in plain English', () => {
    assert.equal(calculateCostPerUse({ price: 0, usesPerWeek: 3, monthsKept: 12 }).error, 'Enter a price greater than zero.');
    assert.equal(
      calculateCostPerUse({ price: 50, usesPerWeek: 0, monthsKept: 12 }).error,
      'Enter how many times you will use it each week.',
    );
  });

  it('parses catalog-style money', () => {
    assert.equal(parseMoney('$119'), 119);
    assert.equal(parseMoney('1,299.50'), 1299.5);
    assert.equal(parseMoney(''), null);
  });

  it('recalculates the named number on catalog prefill when uses and months are already set', () => {
    const next = resultAfterCatalogPrefill({ price: 249, usesPerWeek: 3, monthsKept: 24 });
    assert.equal(isCostPerUseResult(next), true);
    if (!isCostPerUseResult(next)) return;
    assert.equal(next.price, 249);
    assert.equal(formatUsd(next.costPerUse), '$0.80');
  });

  it('clears the previous number when a catalog prefill does not have enough inputs', () => {
    assert.equal(resultAfterCatalogPrefill({ price: 249, usesPerWeek: 3, monthsKept: null }), null);
    assert.equal(resultAfterCatalogPrefill({ price: null, usesPerWeek: 3, monthsKept: 24 }), null);
  });
});
