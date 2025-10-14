export type ThemeName = 'light' | 'dark' | 'solar' | 'mono';

export interface Theme {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  gold: string;
  goldLight: string;
}

export const themes: Record<ThemeName, Theme> = {
  light: {
    primary: '#667eea',
    primaryDark: '#5568d3',
    primaryLight: '#7e94f5',
    secondary: '#764ba2',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    background: '#F0F0F0',
    surface: '#E8E8E8',
    textPrimary: '#212121',
    textSecondary: '#757575',
    border: '#D0D0D0',
    gold: '#FFD700',
    goldLight: '#FFA500',
  },
  dark: {
    primary: '#667eea',
    primaryDark: '#5568d3',
    primaryLight: '#7e94f5',
    secondary: '#764ba2',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    background: '#0D0D0D',
    surface: '#1A1A1A',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#2A2A2A',
    gold: '#FFD700',
    goldLight: '#FFA500',
  },
  solar: {
    primary: '#F59E0B',
    primaryDark: '#D97706',
    primaryLight: '#FBBF24',
    secondary: '#F97316',
    success: '#84CC16',
    warning: '#EAB308',
    error: '#EF4444',
    info: '#06B6D4',
    background: '#F5E6B3',
    surface: '#F0D98F',
    textPrimary: '#78350F',
    textSecondary: '#92400E',
    border: '#E8C870',
    gold: '#F59E0B',
    goldLight: '#FBBF24',
  },
  mono: {
    primary: '#6B7280',
    primaryDark: '#4B5563',
    primaryLight: '#9CA3AF',
    secondary: '#374151',
    success: '#6B7280',
    warning: '#9CA3AF',
    error: '#4B5563',
    info: '#6B7280',
    background: '#2D3748',
    surface: '#4A5568',
    textPrimary: '#F7FAFC',
    textSecondary: '#CBD5E0',
    border: '#718096',
    gold: '#9CA3AF',
    goldLight: '#D1D5DB',
  },
};

// Backwards compatibility - default to light theme
export const colors = themes.light;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 24,
  pill: 999,
};
