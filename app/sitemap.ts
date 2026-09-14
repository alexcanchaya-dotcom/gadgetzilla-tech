import { MetadataRoute } from 'next';
import { catalogUpdatedAt } from '@/data/gadgets';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const catalogDate = new Date(catalogUpdatedAt);

  return [
    {
      url: SITE_URL,
      lastModified: catalogDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: catalogDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: catalogDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: catalogDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/affiliate-disclosure`,
      lastModified: catalogDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
