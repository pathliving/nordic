import Navigation from '@/features/Navigation/Navigation';
import { getLocale } from '@/shared/i18n/server/getLocale';

export default async function Sidebar() {
  const locale = await getLocale();

  return (
    <aside>
      <div>current locale: {locale}</div>
      <Navigation />
    </aside>
  );
}
