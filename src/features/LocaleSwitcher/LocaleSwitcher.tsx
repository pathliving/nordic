'use client';

import { setCookie } from '@/shared/lib/cookie/setCookie';
import Text from '@/shared/ui/Text/Text';
import { useChangeLocale, useCurrentLocale } from '@locales/lib/client';
import { i18n } from '@locales/lib/config';
import { Locale } from '@locales/lib/types';
import dynamic from 'next/dynamic';

const LazyText = dynamic(() => import('@/shared/ui/Text/Text'), {
  loading: () => <p>Loading...</p>,
});

export default function LocaleSwitcher() {
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);
  const locale = useCurrentLocale();
  const { locales } = i18n;

  const handleChangeLocale = (locale: Locale) => {
    changeLocale(locale);
    setCookie('Next-Locale', locale, { 'max-age': '31536000', path: '/' });
  };

  return (
    <div>
      <Text>
        current locale: <span style={{ color: 'green' }}>{locale}</span>
      </Text>
      <LazyText>Locale switcher:</LazyText>
      <ul>
        {locales.map((locale) => {
          return (
            <li key={locale}>
              <button
                type="button"
                onClick={() => handleChangeLocale(locale)}
              >
                {locale}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
