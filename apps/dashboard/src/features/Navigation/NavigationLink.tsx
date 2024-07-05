'use client';

import { PAGE_HOME } from '@/shared/constants/url';
import { Link } from '@/shared/i18n/navigation';
import type { AppPathnames } from '@/shared/i18n/types';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment
    ? `/${selectedLayoutSegment}`
    : PAGE_HOME;
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      // className={clsx(
      //   'inline-block px-2 py-3 transition-colors',
      //   isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
      // )}
      href={href}
      {...rest}
    />
  );
}
