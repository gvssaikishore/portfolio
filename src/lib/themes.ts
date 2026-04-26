export type ThemeName = 'light' | 'dark' | 'minimal' | 'tech' | 'nature' | 'sunset';

export interface ThemeConfig {
  name: ThemeName;
  label: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    card: string;
    cardForeground: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const themes: Record<ThemeName, ThemeConfig> = {
  light: {
    name: 'light',
    label: 'Light',
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      background: '#ffffff',
      foreground: '#1f2937',
      muted: '#f3f4f6',
      mutedForeground: '#6b7280',
      border: '#e5e7eb',
      card: '#f9fafb',
      cardForeground: '#111827',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      secondary: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      accent: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
    },
  },
  dark: {
    name: 'dark',
    label: 'Dark',
    colors: {
      primary: '#60a5fa',
      secondary: '#a78bfa',
      accent: '#f472b6',
      background: '#0f172a',
      foreground: '#f1f5f9',
      muted: '#1e293b',
      mutedForeground: '#cbd5e1',
      border: '#334155',
      card: '#1e293b',
      cardForeground: '#f1f5f9',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
      secondary: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
      accent: 'linear-gradient(135deg, #f472b6 0%, #fb923c 100%)',
    },
  },
  minimal: {
    name: 'minimal',
    label: 'Minimal',
    colors: {
      primary: '#000000',
      secondary: '#404040',
      accent: '#262626',
      background: '#ffffff',
      foreground: '#000000',
      muted: '#f5f5f5',
      mutedForeground: '#737373',
      border: '#e5e5e5',
      card: '#fafafa',
      cardForeground: '#000000',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #000000 0%, #404040 100%)',
      secondary: 'linear-gradient(135deg, #404040 0%, #262626 100%)',
      accent: 'linear-gradient(135deg, #262626 0%, #171717 100%)',
    },
  },
  tech: {
    name: 'tech',
    label: 'Tech',
    colors: {
      primary: '#00d9ff',
      secondary: '#0099ff',
      accent: '#ff006e',
      background: '#0a0e27',
      foreground: '#e0f7ff',
      muted: '#1a1f3a',
      mutedForeground: '#7dd3fc',
      border: '#0099ff',
      card: '#1a1f3a',
      cardForeground: '#e0f7ff',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)',
      secondary: 'linear-gradient(135deg, #0099ff 0%, #ff006e 100%)',
      accent: 'linear-gradient(135deg, #ff006e 0%, #ffd60a 100%)',
    },
  },
  nature: {
    name: 'nature',
    label: 'Nature',
    colors: {
      primary: '#16a34a',
      secondary: '#ea580c',
      accent: '#0891b2',
      background: '#f5f3ff',
      foreground: '#1b4332',
      muted: '#e8f5e9',
      mutedForeground: '#558b2f',
      border: '#c8e6c9',
      card: '#f1f8f5',
      cardForeground: '#1b4332',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #16a34a 0%, #ea580c 100%)',
      secondary: 'linear-gradient(135deg, #ea580c 0%, #0891b2 100%)',
      accent: 'linear-gradient(135deg, #0891b2 0%, #16a34a 100%)',
    },
  },
  sunset: {
    name: 'sunset',
    label: 'Sunset',
    colors: {
      primary: '#f97316',
      secondary: '#dc2626',
      accent: '#7c3aed',
      background: '#1f0f0f',
      foreground: '#fef3c7',
      muted: '#42251b',
      mutedForeground: '#fed7aa',
      border: '#ea580c',
      card: '#3a2415',
      cardForeground: '#fef3c7',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
      secondary: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
      accent: 'linear-gradient(135deg, #7c3aed 0%, #f97316 100%)',
    },
  },
};

export function getCSSVariables(theme: ThemeConfig): Record<string, string> {
  return {
    '--primary': theme.colors.primary,
    '--secondary': theme.colors.secondary,
    '--accent': theme.colors.accent,
    '--background': theme.colors.background,
    '--foreground': theme.colors.foreground,
    '--muted': theme.colors.muted,
    '--muted-foreground': theme.colors.mutedForeground,
    '--border': theme.colors.border,
    '--card': theme.colors.card,
    '--card-foreground': theme.colors.cardForeground,
  };
}
