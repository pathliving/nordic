import { match as matchLocale } from '@formatjs/intl-localematcher';
import { i18n } from '@locales/lib/config';
import { LOCALE_DEFAULT } from '@locales/lib/constants';
import { Locale } from '@locales/lib/types';
import Negotiator from 'negotiator';
import { createI18nMiddleware } from 'next-international/middleware';
import { type NextRequest } from 'next/server';

function getLocale(request: NextRequest): Locale {
  const { locales } = i18n;
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    // @ts-expect-error locales are readonly
    locales
  );

  const cookieLang = (request.cookies.get('lang')?.value ||
    LOCALE_DEFAULT) as Locale;

  if (matchLocale([cookieLang], locales, LOCALE_DEFAULT)) {
    return cookieLang;
  }

  return matchLocale(languages, locales, LOCALE_DEFAULT) as Locale;
}

const I18nMiddleware = createI18nMiddleware({
  ...i18n,
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest: (request) => {
    return getLocale(request) ?? LOCALE_DEFAULT;
  },
});

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  const isFileInPublicDir = [
    '/favicon.ico',
    // Other files in `public`
  ].includes(pathname);
  if (isFileInPublicDir) return;

  return I18nMiddleware(request);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
