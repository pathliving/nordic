'use client';

import { updateThemeAppearanceClass, useThemeContext } from '@radix-ui/themes';
import { useState } from 'react';

type TTheme = 'light' | 'dark';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<TTheme>(
    ((typeof window !== 'undefined' &&
      (window.localStorage.getItem('theme') as TTheme)) as TTheme) ?? 'dark'
  );
  const { appearance, onAppearanceChange, ...rest } = useThemeContext();

  //   useEffect(() => {
  //     if (theme) {
  //       onAppearanceChange(theme);
  //     }
  //   }, [theme]);

  const handleTheme = () => {
    const selectedTheme = theme === 'dark' ? 'light' : 'dark';
    // event: MouseEvent
    // window.localStorage.setItem('theme', event.target.innerText);
    window.localStorage.setItem('theme', theme);
    setTheme(selectedTheme);
    if (theme) {
      onAppearanceChange(theme);
      updateThemeAppearanceClass(theme);
    }

    // console.log({ appearance, rest, selectedTheme, theme });
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
