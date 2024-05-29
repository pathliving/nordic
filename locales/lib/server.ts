import {
  createI18nServer,
  setStaticParamsLocale,
} from 'next-international/server';
import { config, dictionaries } from './config';
import { Locale } from './types';

const server = createI18nServer(dictionaries, config);

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  server;

export const setStaticParams = (locale: Locale) =>
  setStaticParamsLocale(locale);
