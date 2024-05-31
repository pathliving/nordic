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
  const t = await getTranslations();

  return (
    <Box>
      <Container>
        <Text>{t('Page.profileSettings')}</Text>
      </Container>
    </Box>
  );
}
