'use client';

import { useChangeLocale } from '@dictionaries/lib/client';
import { i18n } from '@dictionaries/lib/constants';

export default function LocaleSwitcher() {
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

  return (
    <div>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <button
                type="button"
                onClick={() => changeLocale(locale)}
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
