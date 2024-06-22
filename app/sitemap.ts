import { app } from '@/shared/config/app';
import { PAGE_HOME } from '@/shared/constants/url';
import { defaultLocale, locales, pathnames } from '@/shared/i18n/config';
import { getPathname } from '@/shared/i18n/navigation';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number]
  ) {
    const pathname = getPathname({ locale, href: key });
    return `${app.url.href}${locale}${pathname === PAGE_HOME ? '' : pathname}`;
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
