import { notFound } from 'next/navigation';
import { locales } from './config';
import { LOCALE_DEFAULT } from './constants';
import { getRequestConfig } from './server';
import { Locale } from './types';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  const messages = (
    await ((
      locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import(`../${LOCALE_DEFAULT}.json`)
        : import(`../${locale}.json`)
    ) as Promise<IntlMessages>)
  ).default as unknown as IntlMessages;

  return {
    messages,
  };
});
