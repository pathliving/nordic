import LoginPageTitle from '@/features/LoginPageTitle/LoginPageTitle';
import { getTranslations } from '@/shared/i18n/server/getTranslations';
import { setStaticParams } from '@/shared/i18n/server/setStaticParams';
import { Locale } from '@/shared/i18n/types';
import Text from '@/shared/ui/Text/Text';
import { Box, Container, Flex } from '@radix-ui/themes';
import dynamic from 'next/dynamic';

const LazyLoginForm = dynamic(() => import('@/features/LoginForm/LoginForm'), {
  loading: () => <p>Loading...</p>,
});

export default async function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setStaticParams(locale);

  const t = await getTranslations('Page');

  return (
    <Box>
      <Container>
        <Text>{t('login')}</Text>
        <LoginPageTitle />
        <Flex>
          <LazyLoginForm />
        </Flex>
      </Container>
    </Box>
  );
}
