import { locales } from '@/shared/i18n/config';
import { getLocale } from '@/shared/i18n/server/getLocale';
import { getTranslations } from '@/shared/i18n/server/getTranslations';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default async function LocaleSwitcher() {
  const t = await getTranslations('LocaleSwitcher');
  const locale = await getLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
