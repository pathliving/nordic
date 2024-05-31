import { defaultLocale, locales, pathnames } from '@locales/lib/config';
import { getPathname } from '@locales/lib/navigation';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number]
  ) {
    const pathname = getPathname({ locale, href: key });
    return `${process.env.HOST_URL}/${locale}${pathname === '/' ? '' : pathname}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale)])
      ),
    },
  }));
}
