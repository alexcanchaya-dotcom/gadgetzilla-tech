import { gadgets, type Gadget, type GadgetCategory } from '@/data/gadgets';
import { parseCatalogPrice } from '@/lib/cost-per-use';

export type ResultPickCategory = GadgetCategory | 'All';

export function pickCatalogForResult(options: {
  category?: ResultPickCategory;
  price?: number;
  limit?: number;
  excludeId?: string;
  source?: Gadget[];
}): Gadget[] {
  const { category = 'All', price, limit = 3, excludeId, source = gadgets } = options;

  const pool = source.filter((gadget) => {
    if (excludeId && gadget.id === excludeId) return false;
    if (category !== 'All' && gadget.category !== category) return false;
    return Boolean(parseCatalogPrice(gadget.price));
  });

  const ranked = [...pool].sort((a, b) => {
    if (price == null) return 0;
    const aPrice = parseCatalogPrice(a.price) ?? Number.POSITIVE_INFINITY;
    const bPrice = parseCatalogPrice(b.price) ?? Number.POSITIVE_INFINITY;
    return Math.abs(aPrice - price) - Math.abs(bPrice - price);
  });

  return ranked.slice(0, limit);
}