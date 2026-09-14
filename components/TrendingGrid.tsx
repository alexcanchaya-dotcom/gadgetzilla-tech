'use client';

import { ProductImage } from '@/components/ProductImage';
import type { Gadget } from '@/data/gadgets';

type Props = {
  gadgets: Gadget[];
};

export function TrendingGrid({ gadgets }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {gadgets.map((gadget) => (
        <article
          key={gadget.id}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <div className="overflow-hidden rounded-xl border border-white/5 bg-white">
            <div className="relative aspect-[4/3]">
              <ProductImage src={gadget.image} alt={gadget.name} className="h-full w-full" />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">{gadget.category}</p>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-white">{gadget.name}</h3>
              <p className="flex-shrink-0 text-sm font-semibold text-white">{gadget.price}</p>
            </div>
            <p className="text-sm text-white/70 line-clamp-2">{gadget.description}</p>
            <p className="text-xs text-white/40">Snapshot price. Confirm on Amazon.</p>
            <a
              href={gadget.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block pt-1 text-sm font-semibold text-neonBlue underline underline-offset-4"
            >
              View on Amazon
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
