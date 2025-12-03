'use client';

import { motion } from 'framer-motion';

type AccentKey = 'limePulse' | 'neonBlue' | 'hotPink';

const accentColorMap: Record<AccentKey, { solid: string; muted: string }> = {
  limePulse: { solid: 'bg-limePulse', muted: 'bg-limePulse/20' },
  neonBlue: { solid: 'bg-neonBlue', muted: 'bg-neonBlue/20' },
  hotPink: { solid: 'bg-hotPink', muted: 'bg-hotPink/20' }
};

const features: { title: string; description: string; accent: AccentKey }[] = [
  {
    title: 'Daily Updated',
    description: 'Fresh drops, reviewed nightly for gamers who refuse to settle.',
    accent: 'limePulse'
  },
  {
    title: 'Trending Now',
    description: 'Real-time hype scores fueled by social buzz and creator picks.',
    accent: 'neonBlue'
  },
  {
    title: 'Affiliate Ready',
    description: 'Amazon-ready links with glowing CTAs to convert clicks into wins.',
    accent: 'hotPink'
  }
];

export function FeatureHighlights() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, idx) => {
        const accent = accentColorMap[feature.accent];
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.08 } }}
            viewport={{ once: true }}
            className="glass-panel relative overflow-hidden rounded-2xl p-5 shadow-glow"
          >
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent.muted} blur-3xl`} aria-hidden />
            <div className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${accent.solid}`} aria-hidden />
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">Power-up</p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-white">{feature.title}</h3>
            <p className="mt-1 text-sm text-white/70">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
