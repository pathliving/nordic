import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/404/',
    },
    sitemap: `${process.env.HOST_URL}/sitemap.xml`,
  };
}
