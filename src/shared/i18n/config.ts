import {
  PAGE_DASHBOARD,
  PAGE_FORGOT,
  PAGE_HOME,
  PAGE_LOGIN,
  PAGE_NOT_FOUND,
  PAGE_PROFILE,
  PAGE_REGISTRATION,
  PAGE_SETTINGS,
} from '@/shared/constants/url';
import {
  LOCALE_EN,
  LOCALE_UK,
  LOCALE_WITHOUT_DEFAULT_PREFIX,
} from '@/shared/i18n/constants/locales';
import { getLocaleFile } from '@/shared/i18n/server/getLocaleFile';
import { getRequestConfig } from '@/shared/i18n/server/getRequestConfig';
import { Locale, Pathnames } from '@/shared/i18n/types';
import { renderNotFound } from '@/shared/lib/render/renderNotFound';

export const locales = [LOCALE_EN, LOCALE_UK] as const;
export const defaultLocale = LOCALE_EN;
export const localePrefix = LOCALE_WITHOUT_DEFAULT_PREFIX;

export const pathnames = {
  [PAGE_HOME]: PAGE_HOME,
  [PAGE_LOGIN]: {
    en: PAGE_LOGIN,
    uk: PAGE_LOGIN,
  },
  [PAGE_DASHBOARD]: {
    en: PAGE_DASHBOARD,
    uk: PAGE_DASHBOARD,
  },
  [PAGE_FORGOT]: {
    en: PAGE_FORGOT,
    uk: PAGE_FORGOT,
  },
  [PAGE_PROFILE]: {
    en: PAGE_PROFILE,
    uk: PAGE_PROFILE,
  },
  [PAGE_SETTINGS]: {
    en: PAGE_SETTINGS,
    uk: PAGE_SETTINGS,
  },
  [PAGE_REGISTRATION]: {
    en: PAGE_REGISTRATION,
    uk: PAGE_REGISTRATION,
  },
  [PAGE_NOT_FOUND]: {
    en: PAGE_NOT_FOUND,
    uk: PAGE_NOT_FOUND,
  },
} satisfies Pathnames<typeof locales>;

export default getRequestConfig(async ({ locale }) => {
  const requestLocale = locale as Locale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(requestLocale)) renderNotFound();

  const messages = (
    await (locale === LOCALE_EN
      ? // When using Turbopack, this will enable HMR for `en`
        getLocaleFile(defaultLocale)
      : getLocaleFile(requestLocale))
  ).default as unknown as IntlMessages;

  return {
    messages,
  };
});
