'use client';

import { NextIntlClientProvider } from '@locales/lib/client';
import { AbstractIntlMessages, Locale } from '@locales/lib/types';
import type { ReactNode } from 'react';

export default function LocaleProvider({
  messages,
  locale,
  timeZone,
  children,
  ...rest
}: {
  messages: AbstractIntlMessages;
  locale: Locale;
  timeZone: string;
  children: ReactNode;
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone={timeZone}
      {...rest}
    >
      {children}
    </NextIntlClientProvider>
  );
}
