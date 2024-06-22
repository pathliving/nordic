import Todo from '@/pages/todo';
import { setStaticParams } from '@/shared/i18n/server/setStaticParams';
import { Locale } from '@/shared/i18n/types';

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setStaticParams(locale);

  return <Todo />;
}
