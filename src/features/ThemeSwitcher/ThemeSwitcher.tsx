'use client';

import { setCookie } from '@/shared/lib/cookie/setCookie';
import { updateThemeAppearanceClass, useThemeContext } from '@radix-ui/themes';
import { useState } from 'react';

type TTheme = 'light' | 'dark';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<TTheme>('dark');
  const { appearance, onAppearanceChange, ...rest } = useThemeContext();
  /* const defaultTheme = 
  (typeof window !== 'undefined' && (getCookie('theme') as TTheme)) ||
    (process.env.NEXT_PUBLIC_DEFAULT_THEME as TTheme) ||
    'dark' */

  //   useEffect(() => {
  //     if (theme) {
  //       onAppearanceChange(theme);
  //     }
  //   }, [theme]);

  const handleTheme = () => {
    const selectedTheme = theme === 'dark' ? 'light' : 'dark';
    // event: MouseEvent
    // window.localStorage.setItem('theme', event.target.innerText);
    // window.localStorage.setItem('theme', theme);
    setCookie('theme', theme, { 'max-age': '31536000', path: '/' });
    setTheme(selectedTheme);
    if (theme) {
      onAppearanceChange(theme);
      updateThemeAppearanceClass(theme);
    }

    return { appearance, rest };
  };

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
