'use client';

import { useMemo, useState } from 'react';
import { Hero } from '@/components/Hero';
import { CategoryFilters } from '@/components/CategoryFilters';
import { TrendingGrid } from '@/components/TrendingGrid';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { NativeAdCard } from '@/components/AdBanner';
import { SiteHeader } from '@/components/SiteHeader';
import {
  gadgets as allGadgets,
  formatCatalogUpdatedAt,
  getNewProducts,
  type CatalogFilter,
  type Gadget,
} from '@/data/gadgets';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CatalogFilter>('All');
  const newGadgets = useMemo(() => getNewProducts(), []);

  const filtered: Gadget[] = useMemo(() => {
    if (activeCategory === 'All') return allGadgets;
    if (activeCategory === 'New') return newGadgets;
    return allGadgets.filter((g) => g.category === activeCategory);
  }, [activeCategory, newGadgets]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allGadgets.length, New: newGadgets.length };
    allGadgets.forEach((g) => {
      counts[g.category] = (counts[g.category] || 0) + 1;
    });
    return counts;
  }, [newGadgets]);

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Hero />

        <section className="flex justify-center">
          <SearchBar />
        </section>

        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 sm:p-8" id="catalog">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Catalog</p>
              <h2 className="text-2xl font-bold text-white">Picks on this site</h2>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">Updated {formatCatalogUpdatedAt()}</p>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <CategoryFilters active={activeCategory} onSelect={setActiveCategory} counts={categoryCounts} />
            <TrendingGrid gadgets={filtered} />
          </div>
        </section>

        <NativeAdCard />

        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 sm:p-8">
          <div className="flex flex-col gap-2 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Before you click</p>
            <h2 className="text-2xl font-bold text-white">Privacy, terms, and how we are paid</h2>
          </div>
          <FeatureHighlights />
        </section>

        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">{allGadgets.length}</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Catalog items</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">5</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Categories</span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
