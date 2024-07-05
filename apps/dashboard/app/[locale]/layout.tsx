import App from '@/app/App';
import { locales } from '@/shared/i18n/config';
import type { Locale } from '@/shared/i18n/types';
import { ReactNode } from 'react';

export { metadata } from '@/app/metadata';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  return <App locale={locale}>{children}</App>;
}
