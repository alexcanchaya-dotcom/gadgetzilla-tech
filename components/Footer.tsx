'use client';

import Link from 'next/link';
import { NewsletterForm } from '@/components/NewsletterForm';
import { AFFILIATE_TAG, SITE_NAME } from '@/lib/site';

const footerLegal = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
  { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
] as const;

export function Footer() {
  return (
    <footer className="mt-16 rounded-3xl border border-white/10 bg-night/80 p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <h4 className="text-2xl font-bold text-white">{SITE_NAME}</h4>
          <p className="mt-2 text-sm text-white/70">
            As an Amazon Associate we earn from qualifying purchases. Links use tag {AFFILIATE_TAG}.
          </p>
          <nav aria-label="Legal" className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/80">
            {footerLegal.map((link) => (
              <Link key={link.href} href={link.href} className="underline decoration-white/25 underline-offset-4 hover:text-white">
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
