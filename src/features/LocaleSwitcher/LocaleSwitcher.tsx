import { locales } from '@locales/lib/config';
import { getLocale, getTranslations } from '@locales/lib/server';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default async function LocaleSwitcher() {
  const t = await getTranslations('LocaleSwitcher');
  const locale = await getLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t('label')}
    >
      {locales.map((cur) => (
        <option
          key={cur}
          value={cur}
        >
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
