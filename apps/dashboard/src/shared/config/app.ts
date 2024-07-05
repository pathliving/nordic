import { env } from '@/shared/config/env';
import { PAGE_HOME } from '@/shared/constants/url';
import type { Metadata } from 'next';

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
    favicon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
      sizes: 'any',
    },
    apple: {
      url: '/icons/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
    tiny: {
      url: '/icons/16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    small: {
      url: '/icons/32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    medium: {
      url: '/icons/144x144.png',
      type: 'image/png',
      sizes: '144x144',
    },
    large: {
      url: '/icons/192x192.png',
      type: 'image/png',
      sizes: '192x192',
    },
    huge: {
      url: '/icons/512x512.png',
      type: 'image/png',
      sizes: '512x512',
    },
  },
  manifest: '/manifest.webmanifest',
  keywords: ['application', 'dashboard', 'nextjs'],
  referrer: 'origin',
  robots: 'index, follow',
};

type AppConfig = Omit<Metadata, 'icons'> & {
  title: string;
  description: string;
  applicationName: string;
  url: URL;
  rootUrl: URL | string;
  icons: {
    tiny: {
      url: string;
      type?: string;
      sizes?: string;
    };
    small: {
      url: string;
      type?: string;
      sizes?: string;
    };
    medium: {
      url: string;
      type?: string;
      sizes?: string;
    };
    large: {
      url: string;
      type?: string;
      sizes?: string;
    };
    huge: {
      url: string;
      type?: string;
      sizes?: string;
    };
    favicon: {
      url: string;
      type?: string;
      sizes?: string;
    };
    apple: {
      url: string;
      type?: string;
      sizes?: string;
    };
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
