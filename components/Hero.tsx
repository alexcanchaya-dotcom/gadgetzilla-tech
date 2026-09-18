'use client';

import { motion } from 'framer-motion';

const heroVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-night/80 via-midnight/80 to-night/60 px-6 py-16 shadow-neon sm:px-10 lg:px-16">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cyberPurple blur-3xl" />
        <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-neonBlue blur-3xl" />
      </div>
      <div className="relative max-w-2xl space-y-6">
        <motion.div variants={heroVariants} initial="initial" animate="animate" className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neonBlue">
            Independent catalog · Amazon Associate
          </p>
          <h1 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            Curated gadgets for gamers
          </h1>
          <p className="text-lg text-slate-200/80 sm:text-xl">
            A short list of gaming gear, audio, wearables, smart home, and PC parts. Prices are snapshots. Check Amazon for what you actually pay. We may earn a commission if you buy through our links.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#catalog"
              className="rounded-full bg-gradient-to-r from-cyberPurple to-neonBlue px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night"
            >
              Browse the catalog
            </a>
            <a href="/cost-per-use" className="text-sm font-semibold text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white">
              Cost per use
            </a>
            <a href="/affiliate-disclosure" className="text-sm font-semibold text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white">
              Affiliate disclosure
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
