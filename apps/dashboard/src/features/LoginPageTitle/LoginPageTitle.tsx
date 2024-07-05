import { getTranslations } from '@/shared/i18n/server/getTranslations';
import Text from '@/shared/ui/Text/Text';

export default async function LoginPageTitle() {
  const t = await getTranslations();

  return <Text>{t('Page.login')}</Text>;
}
