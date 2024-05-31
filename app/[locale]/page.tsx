import Home from '@/_pages/home';
import { setStaticParams } from '@locales/lib/server';
import { Locale } from '@locales/lib/types';

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setStaticParams(locale);

  return <Home />;
}
