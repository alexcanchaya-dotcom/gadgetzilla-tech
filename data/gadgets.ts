import catalog from './catalog.json';

export type GadgetCategory = 'Gaming Gear' | 'Smart Home' | 'Audio' | 'Wearables' | 'PC Components';

export type GadgetBadge = 'TRENDING' | 'HOT' | 'DEAL' | 'NEW';

export type CatalogFilter = GadgetCategory | 'All' | 'New';

export type Gadget = {
  id: string;
  name: string;
  category: GadgetCategory;
  price: string;
  originalPrice?: string;
  score: number;
  badge: GadgetBadge;
  description: string;
  image: string;
  amazonUrl: string;
  tags: string[];
  dealEndsAt?: string;
  asin?: string;
  addedAt?: string;
  lastRefreshedAt?: string;
};

export type GadgetCatalog = {
  version: number;
  updatedAt: string;
  affiliateTag: string;
  products: Gadget[];
};

export const gadgetCatalog = catalog as GadgetCatalog;
export const catalogUpdatedAt = gadgetCatalog.updatedAt;
export const affiliateTag = gadgetCatalog.affiliateTag || 'gadgetzilla07-20';
export const gadgets: Gadget[] = gadgetCatalog.products;

export function formatCatalogUpdatedAt(iso: string = catalogUpdatedAt): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso));
}

export function isNewFromLastRefresh(gadget: Gadget): boolean {
  if (gadget.badge === 'NEW') return true;
  if (!gadget.addedAt) return false;
  return gadget.addedAt.slice(0, 10) === catalogUpdatedAt.slice(0, 10);
}

export const getDealProducts = (): Gadget[] => {
  return gadgets.filter((g) => g.badge === 'DEAL' || Boolean(g.originalPrice));
};

export const getProductsByCategory = (category: GadgetCategory): Gadget[] => {
  return gadgets.filter((g) => g.category === category);
};

export const getTopRatedProducts = (limit: number = 10): Gadget[] => {
  return [...gadgets].sort((a, b) => b.score - a.score).slice(0, limit);
};

export const getNewProducts = (): Gadget[] => {
  return gadgets.filter(isNewFromLastRefresh);
};
