import { createI18nClient } from 'next-international/client';
import { config, dictionaries } from './config';

const client = createI18nClient(dictionaries, config);

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = client;
