'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { isNewFromLastRefresh, type Gadget } from '@/data/gadgets';
import { SocialShare } from './SocialShare';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } })
};

type Props = {
  gadgets: Gadget[];
};

export function TrendingGrid({ gadgets }: Props) {
  return (
    <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {gadgets.map((gadget, index) => {
        const isNew = isNewFromLastRefresh(gadget);

        return (
          <motion.article
            key={gadget.id}
            layout
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg transition hover:border-neonBlue/50"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/5 bg-night/80">
              <div className="flex items-center justify-between px-4 pt-4 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">{gadget.category}</span>
                {isNew ? (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70">Added this refresh</span>
                ) : null}
              </div>

              <div className="relative mt-2 aspect-[4/3] overflow-hidden">
                <Image
                  src={gadget.image}
                  alt={gadget.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="relative mt-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white line-clamp-2">{gadget.name}</h3>
                </div>
                <p className="flex-shrink-0 rounded-full bg-night/60 px-3 py-1 text-sm font-semibold text-neonBlue">{gadget.price}</p>
              </div>
              <p className="text-xs text-white/45">Listed price is a snapshot. Confirm on Amazon.</p>

              <p className="text-sm text-white/70 line-clamp-2">{gadget.description}</p>

              <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                {gadget.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={gadget.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-hotPink underline decoration-hotPink/60 decoration-2 underline-offset-4 hover:text-hotPink/80 transition"
                >
                  View on Amazon
                </a>
                <a
                  href={gadget.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-full border border-neonBlue/60 bg-gradient-to-r from-neonBlue/60 via-cyberPurple/70 to-hotPink/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-night"
                >
                  Check price
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <SocialShare product={gadget} />
              </div>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
