import Sidebar from '@/entities/Sidebar/Sidebar';
import ThemePanel from '@/features/ThemePanel/ThemePanel';
import { app } from '@/shared/config/app';
import { getMessages } from '@/shared/i18n/server/getMessages';
import { getTimeZone } from '@/shared/i18n/server/getTimeZone';
import { setStaticParams } from '@/shared/i18n/server/setStaticParams';
import type { Locale } from '@/shared/i18n/types';
import { font } from '@/shared/lib/font/font';
import { ReactNode } from 'react';
import LocaleProvider from './LocaleProvider';
import ThemeProvider from './ThemeProvider';
import './globalStyle.css';

export default async function Root({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  setStaticParams(locale);
  const messages = await getMessages();
  const timeZone = await getTimeZone();

  return (
    <html
      lang={locale}
      className="dark"
      style={{ colorScheme: app.theme?.dark }}
    >
      <body className={font.className}>
        <LocaleProvider
          messages={messages}
          locale={locale}
          timeZone={timeZone}
        >
          <ThemeProvider theme={app.theme?.dark}>
            <Sidebar />
            {children}
            <ThemePanel />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
