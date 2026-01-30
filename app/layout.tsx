import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';
import { HomePageJsonLd } from '@/components/JsonLd';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-rajdhani' });

export const metadata: Metadata = {
  title: 'GadgetZilla | Legendary Gadgets for Gamers & Tech Enthusiasts',
  description: 'Discover the best gaming gear, smart home devices, and trending tech gadgets. Daily updated with expert reviews, RGB setups, and exclusive deals for gamers and tech lovers.',
  keywords: ['gaming gadgets', 'tech gear', 'gaming accessories', 'RGB gaming', 'smart home', 'gaming peripherals', 'mechanical keyboards', 'gaming mice', 'gaming headsets', 'PC components', 'tech deals', 'gadget reviews', 'best gaming gear 2026', 'gaming setup', 'streamer gear'],
  authors: [{ name: 'GadgetZilla Team' }],
  creator: 'GadgetZilla',
  publisher: 'GadgetZilla',
  metadataBase: new URL('https://gadgetzilla.tech'),
  alternates: {
    canonical: 'https://gadgetzilla.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gadgetzilla.tech',
    title: 'GadgetZilla | Legendary Gadgets for Gamers',
    description: 'Level up your tech game with legendary gadgets, trending deals, and neon-infused content for gamers.',
    siteName: 'GadgetZilla',
    images: [
      {
        url: 'https://gadgetzilla.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GadgetZilla - Legendary Gaming Gadgets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GadgetZilla | Legendary Gadgets for Gamers',
    description: 'Discover trending gaming gear, RGB setups, and exclusive tech deals.',
    images: ['https://gadgetzilla.tech/og-image.jpg'],
    creator: '@gadgetzilla',
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rajdhani.variable}`}>
      <head>
        {/* Google AdSense - Replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />

        {/* Google Analytics - Replace G-XXXXXXXXXX with your tracking ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.amazon.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className="font-body antialiased">
        {/* JSON-LD Structured Data for SEO */}
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
