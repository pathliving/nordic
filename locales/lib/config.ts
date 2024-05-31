import { Pathnames } from 'next-intl/navigation';
import { LOCALE_EN, LOCALE_UK } from './constants';

export const locales = [LOCALE_EN, LOCALE_UK] as const;
export const defaultLocale = LOCALE_EN;

export const pathnames = {
  '/': '/',
  '/404': {
    en: '/404',
    uk: '/404',
  },
  '/dashboard': {
    en: '/dashboard',
    uk: '/dashboard',
  },
  '/forgot': {
    en: '/forgot',
    uk: '/forgot',
  },
  '/profile': {
    en: '/profile',
    uk: '/profile',
  },
  '/profile/settings': {
    en: '/profile/settings',
    uk: '/profile/settings',
  },
  '/registration': {
    en: '/registration',
    uk: '/registration',
  },
  '/login': {
    en: '/login',
    uk: '/login',
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
