import Text from '@/shared/ui/Text/Text';
import { getTranslations, setStaticParams } from '@locales/lib/server';
import { Locale } from '@locales/lib/types';
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
        <Flex>
          <LazyLoginForm />
        </Flex>
      </Container>
    </Box>
  );
}
