'use client';

import { useState } from 'react';
import { HiMoon } from 'react-icons/hi';

import { Typography } from '@/components/atoms/Typography/Typography.component';

import styles from './Navigation.module.scss';

type Theme = 'light' | 'dark';

export const Navigation: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = (themeToSet: Theme) => {
    const htmlElement = document.querySelector('html');
    htmlElement?.setAttribute('data-theme', themeToSet);
    setTheme(themeToSet);
  };

  return (
    <nav className={styles.nav} role='navigation'>
      <div className={styles.flex}>
        <Typography>K</Typography>
        <div
          role='button'
          className={styles.iconContainer}
          onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <HiMoon className={styles.icon} role='img' />
        </div>
      </div>
    </nav>
  );
};
