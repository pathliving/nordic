'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function LinkUI({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  return <Link href={`/${lang}${href}`}>{children}</Link>;
}
