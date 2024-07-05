import { Locale } from '@/shared/i18n/types';

export const getLocaleFile = async (
  locale: Locale
): Promise<{ default: IntlMessages }> =>
  await import(`../locales/${locale}.json`);
