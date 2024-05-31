import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames } from './config';

export const localePrefix = undefined;

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
