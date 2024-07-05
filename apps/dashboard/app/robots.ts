import { app } from '@/shared/config/app';
import { PAGE_HOME, PAGE_NOT_FOUND } from '@/shared/constants/url';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: PAGE_HOME,
      disallow: PAGE_NOT_FOUND,
    },
    sitemap: `${app.url.href}sitemap.xml`,
  };
}
