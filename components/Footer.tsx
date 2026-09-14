'use client';

import Link from 'next/link';
import { NewsletterForm } from '@/components/NewsletterForm';
import { AFFILIATE_TAG, legalLinks, SITE_NAME } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-16 rounded-3xl border border-white/10 bg-night/80 p-8 shadow-neon">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <h4 className="text-2xl font-bold text-white">{SITE_NAME}</h4>
          <p className="mt-2 text-sm text-white/70">
            Amazon Associate disclosure: as an Amazon Associate we earn from qualifying purchases. Links use tag {AFFILIATE_TAG}.
          </p>
          <nav aria-label="Legal" className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-neonBlue">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <NewsletterForm source="footer" />
      </div>
    </footer>
  );
}
