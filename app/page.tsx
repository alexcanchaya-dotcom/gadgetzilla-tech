'use client';

import { useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { CategoryFilters } from '@/components/CategoryFilters';
import { TrendingGrid } from '@/components/TrendingGrid';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { Footer } from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import { gadgets as allGadgets, type Gadget, type GadgetCategory } from '@/data/gadgets';

const counterData = {
  trending: 24,
  updated: 'Tonight 11:00 PM PST'
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<GadgetCategory | 'All'>('All');
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.25], [0, -80]);

  const filtered: Gadget[] = useMemo(() => {
    if (activeCategory === 'All') return allGadgets;
    return allGadgets.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <motion.div style={{ y: heroParallax }}>
        <Hero />
      </motion.div>

      <section className="rounded-3xl border border-white/10 bg-night/70 p-6 shadow-glow sm:p-8" id="trending">

              {/* YouTube Video Section */}
      <VideoSection />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Trending gear</p>
            <h2 className="text-2xl font-bold text-white">Legendary gadgets. Neon energy.</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="flex items-center gap-2 rounded-full border border-limePulse/50 bg-limePulse/20 px-4 py-2 text-limePulse">
              <span className="h-2 w-2 rounded-full bg-limePulse animate-ping" aria-hidden />
              {counterData.trending} trending now
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70">Updated {counterData.updated}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <CategoryFilters active={activeCategory} onSelect={setActiveCategory} />
          <TrendingGrid gadgets={filtered} />
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-night/70 p-6 shadow-glow sm:p-8">
        <div className="flex flex-col gap-2 pb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Why GadgetZilla?</p>
          <h2 className="text-2xl font-bold text-white">Built to convert clicks into epic upgrades</h2>
          <p className="text-sm text-white/70">Social proof, urgency, and neon-dripped UI tuned for gamers and tech-obsessed shoppers.</p>
        </div>
        <FeatureHighlights />
      </section>

      <Footer />
    </main>
  );
}
