import Todo from '@/_pages/todo';
import { setStaticParams } from '@locales/lib/server';
import { Locale } from '@locales/lib/types';

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setStaticParams(locale);

  return <Todo />;
}
