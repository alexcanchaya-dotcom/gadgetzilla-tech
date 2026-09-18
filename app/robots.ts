import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// GA4 / AdSense stay env-gated in TrackingScripts. Do not invent IDs here.
// Before AdSense go-live: real public/ads.txt + real NEXT_PUBLIC_GA_MEASUREMENT_ID.
// Do not ship fake ads.txt lines.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
