import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-rajdhani' });

export const metadata: Metadata = {
  title: 'GadgetZilla | Legendary Gadgets for Gamers',
  description: 'Level up your tech game with legendary gadgets, trending deals, and neon-infused discovery.',
  metadataBase: new URL('https://gadgetzilla.tech')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rajdhani.variable}`}>
      <body className="font-body antialiased">
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
