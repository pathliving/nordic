'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { i18n, type Locale } from '../../../i18n-config';
import langPath from '@/shared/lib/url/langPath';
import { i18n } from '../../../i18n-config';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  // const redirectedPathname = (locale: Locale) => {
  //   if (!pathname) return '/';
  //   const segments = pathname.split('/');
  //   segments[1] = locale;
  //   return segments.join('/');
  // };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              {/* <div>{redirectedPathname(locale)}</div> */}
              {/* <Link href={redirectedPathname(locale)}>{locale}</Link> */}
              <Link href={langPath(locale, pathname)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
