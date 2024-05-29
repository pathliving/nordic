import LocaleSwitcher from '@/features/LocaleSwitcher/LocaleSwitcher';
import Timer from '@/features/Timer/Timer';
import Text from '@/shared/ui/Text/Text';
import { getI18n, getScopedI18n } from '@locales/lib/server';
import { Box, Container } from '@radix-ui/themes';

export default async function Page() {
  const t = await getI18n();
  const ts = await getScopedI18n('page');

  return (
    <Box>
      <Container>
        <LocaleSwitcher />
        <Text>{ts('notFound')}</Text>
        <Timer>{t('description')}</Timer>
      </Container>
    </Box>
  );
}
