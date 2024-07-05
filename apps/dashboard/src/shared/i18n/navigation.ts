import { localePrefix } from '@/shared/i18n/config';
import { locales, pathnames } from './config';
import { createLocalizedPathnamesNavigation } from './server/createLocalizedPathnamesNavigation';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
