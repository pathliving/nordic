'use client';

import { I18nProviderClient } from '@locales/lib/client';
import { Locale } from '@locales/lib/types';
import type { ReactNode } from 'react';

export default function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <I18nProviderClient
      locale={locale}
      fallback={<p>Loading...</p>}
    >
      {children}
    </I18nProviderClient>
  );
}
