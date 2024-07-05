'use client';

import { app } from '@/shared/config/app';
import { PAGE_HOME } from '@/shared/constants/url';
import { setCookie } from '@/shared/lib/cookie/setCookie';
import { updateThemeAppearanceClass, useThemeContext } from '@radix-ui/themes';
import { useState } from 'react';

type TTheme = 'light' | 'dark';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<TTheme>(app.theme?.dark);
  const { appearance, onAppearanceChange, ...rest } = useThemeContext();
  /* const defaultTheme = 
  (typeof window !== 'undefined' && (getCookie('theme') as TTheme)) ||
    (app.theme.default as TTheme) ||
    'dark' */

  //   useEffect(() => {
  //     if (theme) {
  //       onAppearanceChange(theme);
  //     }
  //   }, [theme]);

  const handleTheme = () => {
    const selectedTheme =
      theme === app.theme?.dark ? app.theme?.light : app.theme?.dark;
    // event: MouseEvent
    // window.localStorage.setItem('theme', event.target.innerText);
    // window.localStorage.setItem('theme', theme);
    setCookie('theme', theme, { 'max-age': '31536000', path: PAGE_HOME });
    setTheme(selectedTheme);
    if (theme) {
      onAppearanceChange(theme);
      updateThemeAppearanceClass(theme);
    }

    return { appearance, rest };
  };

  return theme === 'light' ? (
    <button type="button" onClick={handleTheme}>
      dark
    </button>
  ) : (
    <button type="button" onClick={handleTheme}>
      light
    </button>
  );
};

export default ThemeSwitcher;
