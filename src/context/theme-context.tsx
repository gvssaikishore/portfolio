'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeName, themes, getCSSVariables } from '@/lib/themes';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      try {
        const savedTheme = localStorage.getItem('theme') as ThemeName | null;
        const initialTheme = (savedTheme && themes[savedTheme]) ? savedTheme : 'light';
        setThemeState(initialTheme);
        applyTheme(initialTheme);
      } catch (e) {
        console.warn('Failed to load theme from localStorage', e);
      }
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        console.warn('Failed to save theme to localStorage', e);
      }
    }
    applyTheme(newTheme);
  };

  const applyTheme = (themeName: ThemeName) => {
    const themeConfig = themes[themeName];
    const variables = getCSSVariables(themeConfig);
    const root = document.documentElement;
    
    // Set HTML attribute for CSS selectors
    root.setAttribute('data-theme', themeName);
    
    // Also set CSS variables for direct access
    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
