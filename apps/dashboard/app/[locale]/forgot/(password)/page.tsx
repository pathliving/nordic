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
  const t = await getTranslations();

  return (
    <Box>
      <Container>
        <Text>{t('Page.forgot')}</Text>
      </Container>
    </Box>
  );
}
