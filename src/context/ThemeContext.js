'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Vérifie les préférences système au chargement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialTheme = mediaQuery.matches ? 'dark' : 'light';
    setTheme(initialTheme);
    document.body.dataset.theme = initialTheme;

    // Met à jour le thème quand les préférences système changent
    const handler = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.body.dataset.theme = newTheme;
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.dataset.theme = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 