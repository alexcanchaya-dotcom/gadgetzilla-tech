'use client';

import { useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { CategoryFilters } from '@/components/CategoryFilters';
import { TrendingGrid } from '@/components/TrendingGrid';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { Footer } from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import { DealOfTheDay } from '@/components/DealOfTheDay';
import { SearchBar } from '@/components/SearchBar';
import { NewsletterPopup } from '@/components/NewsletterPopup';
import { CompareProducts } from '@/components/CompareProducts';
import { NativeAdCard } from '@/components/AdBanner';
import { gadgets as allGadgets, type Gadget, type GadgetCategory } from '@/data/gadgets';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<GadgetCategory | 'All'>('All');
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.25], [0, -80]);

  const filtered: Gadget[] = useMemo(() => {
    if (activeCategory === 'All') return allGadgets;
    return allGadgets.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  // Get counts for category badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allGadgets.length };
    allGadgets.forEach(g => {
      counts[g.category] = (counts[g.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <>
      {/* Newsletter Popup */}
      <NewsletterPopup />

      {/* Product Comparison */}
      <CompareProducts />

      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div style={{ y: heroParallax }}>
          <Hero />
        </motion.div>

        {/* Search Bar */}
        <section className="flex justify-center">
          <SearchBar />
        </section>

        {/* Deal of the Day */}
        <DealOfTheDay />

        {/* Main Trending Section */}
        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 shadow-glow sm:p-8" id="trending">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Trending gear</p>
              <h2 className="text-2xl font-bold text-white">Legendary gadgets. Neon energy.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="flex items-center gap-2 rounded-full border border-limePulse/50 bg-limePulse/20 px-4 py-2 text-limePulse">
                <span className="h-2 w-2 rounded-full bg-limePulse animate-ping" aria-hidden />
                {allGadgets.length} trending now
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70">Updated Tonight 11:00 PM PST</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <CategoryFilters active={activeCategory} onSelect={setActiveCategory} counts={categoryCounts} />
            <TrendingGrid gadgets={filtered} />
          </div>
        </section>

        {/* Native Ad Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <NativeAdCard />
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-night/80 via-cyberPurple/10 to-night/60 p-6 flex flex-col justify-center">
            <span className="inline-block rounded-full border border-neonBlue/50 bg-neonBlue/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-neonBlue mb-4 w-fit">
              Pro Tip
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Set Price Alerts</h3>
            <p className="text-sm text-white/70 mb-4">
              Never miss a deal! Set price alerts on any product and we'll notify you when it drops.
            </p>
            <a href="#trending" className="text-sm font-semibold text-neonBlue hover:underline">
              Browse products and set alerts →
            </a>
          </div>
        </div>

        {/* Video Section */}
        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 shadow-glow sm:p-8">
          <VideoSection />
        </section>

        {/* Why GadgetZilla Section */}
        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 shadow-glow sm:p-8">
          <div className="flex flex-col gap-2 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Why GadgetZilla?</p>
            <h2 className="text-2xl font-bold text-white">Built to convert clicks into epic upgrades</h2>
            <p className="text-sm text-white/70">Social proof, urgency, and neon-dripped UI tuned for gamers and tech-obsessed shoppers.</p>
          </div>
          <FeatureHighlights />
        </section>

        {/* Trust Badges */}
        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-neonBlue">{allGadgets.length}+</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Curated Products</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-limePulse">50K+</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Happy Gamers</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-hotPink">Daily</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Deal Updates</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-cyberPurple">5</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Categories</span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
