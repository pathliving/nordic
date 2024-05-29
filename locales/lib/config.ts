import { LOCALE_EN, LOCALE_FROM_SEGMENT_DIR, LOCALE_UK } from './constants';

const enFile = {
  [LOCALE_EN]: () => import('../en'),
};
const ukFile = {
  [LOCALE_UK]: () => import('../uk'),
};

export const config = {
  segmentName: LOCALE_FROM_SEGMENT_DIR,
  fallbackLocale: enFile,
};

export const dictionaries = {
  ...enFile,
  ...ukFile,
};

export const i18n = {
  locales: [LOCALE_EN, LOCALE_UK],
  defaultLocale: LOCALE_EN,
} as const;
