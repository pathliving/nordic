import { locales } from './config';

export type Locale = (typeof locales)[number];

export type { AbstractIntlMessages } from 'next-intl';
