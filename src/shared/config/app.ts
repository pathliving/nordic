import { env } from '@/shared/config/env';
import {
  appleIcon,
  favicon,
  manifestIcons,
  metadataIcons,
} from '@/shared/config/icons';
import { PAGE_HOME } from '@/shared/constants/url';
import type { Metadata, MetadataRoute } from 'next';

type AppConfig = Omit<Metadata, 'icons'> & {
  title: string;
  description: string;
  applicationName: string;
  url: URL;
  rootUrl: URL | string;
  icons: {
    metadata: Array<{
      url: string | URL;
      type?: string;
      sizes?: string;
    }>;
    manifest: MetadataRoute.Manifest['icons'];
    favicon: string | URL;
    appleIcon: string | URL;
  };
  api?: string;
  socialImagePath: string;
  pwaImagePath: {
    wide: string;
    narrow: string;
  };
  theme: {
    default: string;
    dark: 'dark';
    light: 'light';
    color: string;
  };
};

export const app: AppConfig = {
  title: 'Nordic',
  description: 'Experimental project',
  applicationName: 'Nordic app',
  url: new URL(env.HOST_URL || 'https://nordic-example-template.io'),
  rootUrl: PAGE_HOME,
  api: env.NEXT_PUBLIC_API_URL,
  socialImagePath: '/images/social-media-cover.jpg',
  pwaImagePath: {
    wide: '/images/pwa-screenshot-wide-1280x720.jpg',
    narrow: '/images/pwa-screenshot-narrow-720x1280.jpg',
  },
  theme: {
    default: env.NEXT_PUBLIC_DEFAULT_THEME || 'dark', // TODO: reuse dark value
    dark: 'dark',
    light: 'light',
    color: '#fff',
  },
  icons: {
    metadata: metadataIcons,
    manifest: manifestIcons,
    favicon,
    appleIcon,
  },
  manifest: '/manifest.webmanifest',
  keywords: ['application', 'dashboard', 'nextjs'],
  referrer: 'origin',
  robots: 'index, follow',
};
