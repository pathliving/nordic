import Sidebar from '@/entities/Sidebar/Sidebar';
import { locales } from '@locales/lib/config';
import { getMessages, getTimeZone, setStaticParams } from '@locales/lib/server';
import type { Locale } from '@locales/lib/types';
import { Theme, ThemePanel } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import LocaleProvider from './LocaleProvider';
import StoreProvider from './StoreProvider';
import './globalStyle.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nordic',
  description: 'Experimental project',
  // image: '/image.jpg',
  metadataBase: new URL(process.env.HOST_URL || 'https://nordic.io'),
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
  // return getStaticParams();
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  setStaticParams(locale);
  const messages = await getMessages();
  const timeZone = await getTimeZone();

  return (
    <html
      lang={locale}
      className="dark"
      style={{ colorScheme: 'dark' }}
    >
      <body className={inter.className}>
        <StoreProvider>
          <LocaleProvider
            messages={messages}
            locale={locale}
            timeZone={timeZone}
          >
            <Theme appearance="dark">
              <Sidebar />
              {children}
              <ThemePanel />
            </Theme>
          </LocaleProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
