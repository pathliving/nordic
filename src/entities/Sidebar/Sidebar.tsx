// import { getCurrentLocale } from '@locales/lib/server';
import Navigation from '@/features/Navigation/Navigation';
import { getLocale } from '@locales/lib/server';

export default async function Sidebar() {
  const locale = await getLocale();

  return (
    <aside>
      <div>current locale: {locale}</div>
      <Navigation />
    </aside>
  );
}
