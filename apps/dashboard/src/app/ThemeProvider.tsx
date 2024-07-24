import { app } from '@/shared/config/app';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function ThemeProvider({
  children,
  theme = app.theme?.dark,
}: {
  children: ReactNode;
  theme?: 'dark' | 'light';
}) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <Theme appearance={theme}>{children}</Theme>
    </NextThemeProvider>
  );
}
