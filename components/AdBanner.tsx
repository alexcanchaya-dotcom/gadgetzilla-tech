'use client';

import { useEffect } from 'react';

type AdBannerProps = {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
};

// Google AdSense Component for Display Ads
export function AdBanner({ slot, format = 'auto', className = '' }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - adsbygoogle is added by the script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container my-6 ${className}`}>
      <div className="text-center text-[10px] uppercase tracking-widest text-white/40 mb-2">
        Advertisement
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Native Ad Component styled to match the site theme
export function NativeAdCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neonBlue/30 bg-gradient-to-br from-night/90 via-midnight/80 to-cyberPurple/20 p-6 shadow-neon">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyberPurple/20 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-neonBlue/20 blur-3xl" />

      <div className="relative">
        <span className="inline-block rounded-full border border-blazeOrange/50 bg-blazeOrange/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blazeOrange mb-4">
          Sponsored
        </span>

        <h3 className="text-xl font-bold text-white mb-2">
          Level Up Your Setup
        </h3>
        <p className="text-sm text-white/70 mb-4">
          Get exclusive deals on premium gaming gear. Limited time offers for GadgetZilla readers.
        </p>

        <a
          href="https://www.amazon.com/gaming-accessories/b?ie=UTF8&node=402053011&tag=gadgetzilla07-20"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neonBlue to-cyberPurple px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-night transition hover:shadow-neon"
        >
          <span className="h-2 w-2 rounded-full bg-limePulse animate-pulse" />
          Shop Now
        </a>
      </div>
    </div>
  );
}

// In-feed Ad placeholder for between product cards
export function InFeedAd() {
  return (
    <div className="col-span-1 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Advertisement</p>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
        />
      </div>
    </div>
  );
}
