import en from './locales/en.json';

type Locales = typeof en;

declare global {
  interface IntlMessages extends Locales {}
}
