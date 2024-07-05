/**
 * @deprecated helper, use hook insted to get the current locale
 */
export default function langPath(locale: string, pathname: string) {
  if (!pathname) return '/';
  const segments = pathname.split('/');
  segments[1] = locale;
  return segments.join('/');
}
