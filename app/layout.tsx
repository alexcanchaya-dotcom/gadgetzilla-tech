import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';
import { HomePageJsonLd } from '@/components/JsonLd';
import { TrackingScripts } from '@/components/TrackingScripts';
import { SITE_URL } from '@/lib/site';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-rajdhani' });

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: 'GadgetZilla | Curated gadgets for gamers',
    template: '%s | GadgetZilla',
  },
  description: 'Independent catalog of gaming gear, audio, wearables, smart home, and PC parts. Amazon Associate links. Prices are snapshots — confirm on Amazon.',
  keywords: ['gaming gadgets', 'tech gear', 'gaming accessories', 'RGB gaming', 'smart home', 'gaming peripherals', 'mechanical keyboards', 'gaming mice', 'gaming headsets', 'PC components', 'tech deals', 'gadget reviews', 'best gaming gear 2026', 'gaming setup', 'streamer gear'],
  authors: [{ name: 'GadgetZilla Team' }],
  creator: 'GadgetZilla',
  publisher: 'GadgetZilla',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'GadgetZilla | Curated gadgets for gamers',
    description: 'Independent gadget catalog with Amazon Associate links. Confirm prices on Amazon.',
    siteName: 'GadgetZilla',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GadgetZilla | Curated gadgets for gamers',
    description: 'Independent gadget catalog with Amazon Associate links.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
  category: 'technology',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/icon' }],
    apple: [{ url: '/apple-icon' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="en" className={`${rajdhani.variable}`}>
      <head>
        <TrackingScripts />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.amazon.com" />
        {adsenseClient ? <link rel="preconnect" href="https://pagead2.googlesyndication.com" /> : null}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className="font-body antialiased">
        <HomePageJsonLd />
        <div className="fixed inset-0 pointer-events-none opacity-70" aria-hidden>
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-glow bg-[length:80px_80px]" />
        </div>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
