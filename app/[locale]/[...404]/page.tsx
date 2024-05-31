import LocaleSwitcher from '@/features/LocaleSwitcher/LocaleSwitcher';
import Timer from '@/features/Timer/Timer';
import Text from '@/shared/ui/Text/Text';
import { getTranslations, setStaticParams } from '@locales/lib/server';
import { Locale } from '@locales/lib/types';
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
