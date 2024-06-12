import { defaultLocale, locales, pathnames } from '@locales/lib/config';
import {
  COOKIE_LOCALE,
  LOCALE_DEFAULT,
  LOCALE_DEFAULT_LENGTH,
  LOCALE_PREFIX,
  LOCALE_WITHOUT_DEFAULT_PREFIX,
} from '@locales/lib/constants';
import { Locale } from '@locales/lib/types';
import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /*
   * `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
   * If you have one
   */
  const isFileInPublicDir = [
    '/favicon.ico',
    // Other files in `public`
  ].includes(pathname);
  if (isFileInPublicDir) return;

  const [, locale, ...segments] = pathname.split('/');
  const urlLocale =
    locale.length === LOCALE_DEFAULT_LENGTH ? locale : LOCALE_DEFAULT;
  const isUrlLocaleNotExist = !locales.includes(urlLocale as Locale);

  if (isUrlLocaleNotExist) {
    const cookieLocale =
      request.cookies.get(COOKIE_LOCALE)?.value ?? LOCALE_DEFAULT;
    const cookieLocaleExceptDefault =
      LOCALE_PREFIX === LOCALE_WITHOUT_DEFAULT_PREFIX &&
      cookieLocale !== LOCALE_DEFAULT
        ? cookieLocale
        : '';
    const newPathname = segments
      .toSpliced(0, 0, cookieLocaleExceptDefault)
      .join('/');

    return NextResponse.redirect(new URL(newPathname, request.nextUrl.origin));
  }

  const handleI18nRouting = createMiddleware({
    pathnames,
    locales,
    defaultLocale,
    localePrefix: LOCALE_PREFIX,
  });

  return handleI18nRouting(request);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    /*
     * Enable a redirect to a matching locale at the root
     */
    '/',

    /*
     * Set a cookie to remember the previous locale for
     * all requests that have a locale prefix
     */
    '/(en|uk)/:path*',

    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
