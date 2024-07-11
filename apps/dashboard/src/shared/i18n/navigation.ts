import { localePrefix, locales, pathnames } from '@/shared/i18n/config';
import { createLocalizedPathnamesNavigation } from '@/shared/i18n/server/createLocalizedPathnamesNavigation';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
