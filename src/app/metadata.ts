import { app } from '@/shared/config/app';
import { metadataIcons } from '@/shared/config/icons';
import { social } from '@/shared/config/social';
import { PAGE_HOME, PAGE_HOME_WITH_LOCALE } from '@/shared/constants/url';
import { defaultLocale } from '@/shared/i18n/config';
import { LOCALE_UK } from '@/shared/i18n/constants/locales';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: app.title,
  description: app.description,
  applicationName: app.applicationName,
  metadataBase: app.url,
  keywords: app.keywords,
  referrer: app.referrer,
  robots: app.robots,
  alternates: {
    canonical: app.url,
    languages: {
      [defaultLocale]: PAGE_HOME,
      [LOCALE_UK]: PAGE_HOME_WITH_LOCALE,
    },
  },
  icons: {
    icon: app.icons?.favicon,
    apple: app.icons?.apple,
    other: metadataIcons,
  },
  manifest: app.manifest,
  appleWebApp: {
    capable: true,
    title: app.title,
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    siteName: app.applicationName,
    url: app.url,
    ...social,
  },
  twitter: {
    card: 'summary_large_image',
    ...social,
  },
};
