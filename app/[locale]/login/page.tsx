import LoginForm from '@/features/LoginForm/LoginForm';
import Text from '@/shared/ui/Text/Text';
import { getI18n } from '@locales/lib/server';
import { Box, Container, Flex } from '@radix-ui/themes';

export default async function Page() {
  const t = await getI18n();

  return (
    <Box>
      <Container>
        <Text>{t('page.login')}</Text>
        <Flex>
          <LoginForm />
        </Flex>
      </Container>
    </Box>
  );
}
