import LocaleSwitcher from '@/features/LocaleSwitcher/LocaleSwitcher';
import Timer from '@/features/Timer/Timer';
import { getTranslations } from '@/shared/i18n/server/getTranslations';
import { setStaticParams } from '@/shared/i18n/server/setStaticParams';
import { Locale } from '@/shared/i18n/types';
import Text from '@/shared/ui/Text/Text';
import { Box, Container } from '@radix-ui/themes';

export default async function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setStaticParams(locale);
  const t = await getTranslations('Page');
  const t2 = await getTranslations('Content');

  return (
    <Box>
      <Container>
        <LocaleSwitcher />
        <Text>{t('notFound')}</Text>
        <Timer>{t2('description')}</Timer>
      </Container>
    </Box>
  );
}
