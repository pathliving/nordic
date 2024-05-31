// import { match as matchLocale } from '@formatjs/intl-localematcher';
import { defaultLocale, locales } from '@locales/lib/config';
// import { LOCALE_DEFAULT } from '@locales/lib/constants';
// import { Locale } from '@locales/lib/types';
// import Negotiator from 'negotiator';
import createMiddleware from 'next-intl/middleware';
// import { NextResponse, type NextRequest } from 'next/server';
import { type NextRequest } from 'next/server';

/* function getLocale(request: NextRequest): Locale {
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
} */

export function middleware(request: NextRequest) {
  // const pathname = request.nextUrl.pathname;

  /*
   * `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
   * If you have one
   */
  const isFileInPublicDir = [
    '/favicon.ico',
    // Other files in `public`
  ].includes(request.nextUrl.pathname);
  if (isFileInPublicDir) return;

  const handleI18nRouting = createMiddleware({
    // ...i18n,
    locales,
    defaultLocale,
    localePrefix: 'as-needed',
  });

  return handleI18nRouting(request);

  /* // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  } */
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
