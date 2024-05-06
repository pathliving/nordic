import { Theme, ThemePanel } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { i18n, type Locale } from '../../i18n-config';
import StoreProvider from './StoreProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nordic App',
  description: 'Experimental project',
  // image: '/image.jpg',
  metadataBase: new URL('https://nordic-app.com'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        url: '/favicon.svg',
        type: 'image/svg',
      },
      {
        url: '/16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: '/32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  },
  openGraph: {
    title: 'Nordic App',
    description: 'Experimental project',
    images: '/image.jpg',
  },
  twitter: {
    title: 'Nordic App',
    description: 'Experimental project',
    images: '/image.jpg',
    card: 'summary_large_image',
  },
  // themeColor: '#eeeeee',
  // manifest: '/manifest.json',
  referrer: 'no-referrer-when-downgrade',
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  // },
  appleWebApp: {
    capable: true,
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <StoreProvider>
          <Theme appearance="dark">
            {children}
            <ThemePanel />
          </Theme>
        </StoreProvider>
      </body>
    </html>
  );
}
