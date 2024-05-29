import Text from '@/shared/ui/Text/Text';
import { getI18n } from '@locales/lib/server';
import { Box, Container } from '@radix-ui/themes';

export default async function Page() {
  const t = await getI18n();

  return (
    <Box>
      <Container>
        <Text>{t('page.dashboard')}</Text>
      </Container>
    </Box>
  );
}
