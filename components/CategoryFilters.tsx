'use client';

import { motion } from 'framer-motion';
import type { GadgetCategory } from '@/data/gadgets';

type Props = {
  active: GadgetCategory | 'All';
  onSelect: (category: GadgetCategory | 'All') => void;
};

const categories: (GadgetCategory | 'All')[] = ['All', 'Gaming Gear', 'Smart Home', 'Audio', 'Wearables', 'PC Components'];

export function CategoryFilters({ active, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = active === category;
        return (
          <motion.button
            key={category}
            whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(0, 217, 255, 0.45)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(category)}
            className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition ${
              isActive
                ? 'border-neonBlue bg-gradient-to-r from-cyberPurple/80 via-neonBlue/80 to-hotPink/70 text-white'
                : 'border-white/20 bg-white/5 text-white/70 hover:border-neonBlue/60 hover:text-white'
            }`}
          >
            {isActive && <span className="absolute inset-0 bg-white/10" aria-hidden />}
            <span className="relative">{category}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
