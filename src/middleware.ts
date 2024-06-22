import { app } from '@/shared/config/app';
import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from '@/shared/i18n/config';
import {
  COOKIE_LOCALE,
  LOCALE_WITHOUT_DEFAULT_PREFIX,
} from '@/shared/i18n/constants/locales';
import { Locale } from '@/shared/i18n/types';
import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';

export default function middlewareI18n(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /*
   * `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
   * If you have one
   */
  const isFileInPublicDir = [
    '/favicon.ico',
    '/icons/16x16.png',
    '/icons/32x32.png',
    '/icons/144x144.png',
    '/icons/192x192.png',
    '/icons/512x512.png',
    '/icons/apple-touch-icon.png',
    '/images/social-media-cover.jpg',
    '/images/pwa-screenshot-wide-1280x720.jpg',
    'images/pwa-screenshot-narrow-720x1280.jpg',
    app.socialImagePath,
    // Other files in `public`
  ].includes(pathname);
  if (isFileInPublicDir) return;

  const [, locale, ...segments] = pathname.split('/');
  const urlLocale =
    locale.length === defaultLocale.length ? locale : defaultLocale;
  const isUrlLocaleNotExist = !locales.includes(urlLocale as Locale);

  if (isUrlLocaleNotExist) {
    const cookieLocale =
      request.cookies.get(COOKIE_LOCALE)?.value ?? defaultLocale;
    const cookieLocaleExceptDefault =
      localePrefix === LOCALE_WITHOUT_DEFAULT_PREFIX &&
      cookieLocale !== defaultLocale
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
    localePrefix,
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
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.[json,webmanifest]|.*\\.[png, jpg]).*)',
  ],
};
