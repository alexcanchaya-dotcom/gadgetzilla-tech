import Link from 'next/link';
import { legalLinks, navLinks, SITE_NAME } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 pt-6 sm:px-6 lg:px-8">
      <Link href="/" className="text-lg font-bold uppercase tracking-[0.18em] text-white">
        {SITE_NAME}
      </Link>
      <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:border-neonBlue/50 hover:text-white">
            {link.label}
          </Link>
        ))}
        <Link href={legalLinks[3].href} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:border-neonBlue/50 hover:text-white">
          Disclosure
        </Link>
      </nav>
    </header>
  );
}
