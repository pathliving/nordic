import { app } from '@/shared/config/app';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ReactNode } from 'react';

export default function ThemeProvider({
  children,
  theme = app.theme?.dark,
}: {
  children: ReactNode;
  theme?: 'dark' | 'light';
}) {
  return <Theme appearance={theme}>{children}</Theme>;
}
