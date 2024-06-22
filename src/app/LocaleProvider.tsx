'use client';

import { NextIntlClientProvider } from '@/shared/i18n/client/NextIntlClientProvider';
import { AbstractIntlMessages, Locale } from '@/shared/i18n/types';
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
