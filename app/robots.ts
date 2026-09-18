import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// GA4 / AdSense stay env-gated in TrackingScripts. When a real publisher ID exists,
// put ads.txt in public/ads.txt (served at /ads.txt). Do not invent a publisher line.

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
