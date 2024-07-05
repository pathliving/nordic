import en from '@/shared/i18n/locales/en.json';

type Locales = typeof en;

declare global {
  type IntlMessages = Locales;
}
