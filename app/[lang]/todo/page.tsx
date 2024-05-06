import Todo from '@/_pages/todo';
import { getDictionary } from '../../../getDictionary';
import { Locale } from '../../../i18n-config';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <Todo dictionary={dictionary} />;
}
