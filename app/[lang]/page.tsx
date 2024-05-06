import Home from '@/_pages/home';
import { getDictionary } from '../../getDictionary';
import { Locale } from '../../i18n-config';
// import LocaleSwitcher from "./components/locale-switcher";

// async function fetchTodos() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   return response.json();
// }

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const todos = await fetchTodos();
  const dictionary = await getDictionary(lang);

  return <Home dictionary={dictionary} />;
}
