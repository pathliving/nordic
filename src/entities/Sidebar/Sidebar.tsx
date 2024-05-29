import { getCurrentLocale } from '@locales/lib/server';
import Link from 'next/link';

export default function Sidebar() {
  const locale = getCurrentLocale();

  return (
    <nav>
      <ul>
        <li>current locale: {locale}</li>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/404">404</Link>
        </li>
      </ul>
    </nav>
  );
}
