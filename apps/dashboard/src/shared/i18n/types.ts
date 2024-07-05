import { locales, pathnames } from './config';

export type Locale = (typeof locales)[number];

export type AppPathnames = keyof typeof pathnames;

export type { AbstractIntlMessages } from 'next-intl';

export type { Pathnames } from 'next-intl/routing';
