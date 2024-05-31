import { useTranslations } from '@locales/lib/client';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <ul>
          <li>
            <NavigationLink href="/">{t('home')}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/login">{t('login')}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/404">{t('404')}</NavigationLink>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
