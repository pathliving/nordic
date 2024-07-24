'use client';

import { app } from '@/shared/config/app';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () =>
    setTheme(theme == app.theme?.light ? app.theme?.dark : app.theme?.light);

  return theme === 'light' ? (
    <button
      type="button"
      onClick={handleTheme}
    >
      dark
    </button>
  ) : (
    <button
      type="button"
      onClick={handleTheme}
    >
      light
    </button>
  );
};

export default ThemeSwitcher;
