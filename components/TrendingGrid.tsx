'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Gadget } from '@/data/gadgets';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } })
};

type Props = {
  gadgets: Gadget[];
};

export function TrendingGrid({ gadgets }: Props) {
  return (
    <motion.div
      layout
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {gadgets.map((gadget, index) => (
        <motion.article
          key={gadget.id}
          layout
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg transition hover:border-neonBlue/50 hover:shadow-neon"
        >
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/15 via-cyberPurple/20 to-hotPink/20" />
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/5 bg-night/80">
            <div className="flex items-center justify-between px-4 pt-4 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className={`rounded-full px-3 py-1 ${
                gadget.badge === 'TRENDING'
                  ? 'bg-limePulse/20 text-limePulse border border-limePulse/40'
                  : 'bg-blazeOrange/20 text-blazeOrange border border-blazeOrange/50'
              }`}> {gadget.badge === 'TRENDING' ? '🔥 Trending' : '⚡ Hot Deal'}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">{gadget.score}% hype</span>
            </div>
            <div className="relative mt-2 aspect-[4/3] overflow-hidden">
              <Image
                src={gadget.image}
                alt={gadget.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-transparent group-hover:border-neonBlue/30" />
            </div>
          </div>
          <div className="relative mt-4 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">{gadget.category}</p>
                <h3 className="text-lg font-bold text-white">{gadget.name}</h3>
              </div>
              <p className="rounded-full bg-night/60 px-3 py-1 text-sm font-semibold text-neonBlue">{gadget.price}</p>
            </div>
            <p className="text-sm text-white/70">{gadget.description}</p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
              {gadget.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{tag}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <a
                href={gadget.amazonUrl}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-hotPink underline decoration-hotPink/60 decoration-2 underline-offset-4"
              >
                Amazon Affiliate Link
              </a>
<a href={gadget.amazonUrl}>
                            <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 0 25px rgba(0, 217, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-neonBlue/60 bg-gradient-to-r from-neonBlue/60 via-cyberPurple/70 to-hotPink/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-night"
              >
                <span className="h-2 w-2 rounded-full bg-limePulse" aria-hidden />
                Get Yours
              </motion.button>
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
