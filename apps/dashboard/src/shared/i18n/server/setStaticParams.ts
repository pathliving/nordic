import { unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '../types';

export const setStaticParams = (locale: Locale) =>
  unstable_setRequestLocale(locale);
