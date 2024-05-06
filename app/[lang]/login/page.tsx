import LoginForm from '@/features/LoginForm/LoginForm';
import { Box, Container, Flex } from '@radix-ui/themes';
import { getDictionary } from '../../../getDictionary';
import { Locale } from '../../../i18n-config';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <Box>
      <Container>
        <div>login page {dictionary.textWelcome.welcome}</div>
        <Flex>
          <LoginForm />
        </Flex>
      </Container>
    </Box>
  );
}
