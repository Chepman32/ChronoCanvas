import { MMKV } from 'react-native-mmkv';
import { Language } from '../localization/translations';
import { ThemeName } from '../theme/colors';

// Create a dedicated MMKV instance for settings
const storage = new MMKV({ id: 'app-settings' });

const SETTINGS_KEYS = {
  LANGUAGE: 'user_language',
  THEME: 'user_theme',
  FONT_SIZE: 'user_font_size',
  HAPTICS_ENABLED: 'user_haptics_enabled',
  HAS_LAUNCHED_BEFORE: 'has_launched_before',
} as const;

// Language
export function getStoredLanguage(): Language | null {
  const value = storage.getString(SETTINGS_KEYS.LANGUAGE);
  return value ? (value as Language) : null;
}

export function setStoredLanguage(language: Language): void {
  storage.set(SETTINGS_KEYS.LANGUAGE, language);
}

// Theme
export function getStoredTheme(): ThemeName | null {
  const value = storage.getString(SETTINGS_KEYS.THEME);
  return value ? (value as ThemeName) : null;
}

export function setStoredTheme(theme: ThemeName): void {
  storage.set(SETTINGS_KEYS.THEME, theme);
}

// Font Size
export function getStoredFontSize(): number | null {
  const value = storage.getString(SETTINGS_KEYS.FONT_SIZE);
  return value ? parseFloat(value) : null;
}

export function setStoredFontSize(size: number): void {
  storage.set(SETTINGS_KEYS.FONT_SIZE, size.toString());
}

// Haptics
export function getStoredHapticsEnabled(): boolean | null {
  const value = storage.getString(SETTINGS_KEYS.HAPTICS_ENABLED);
  if (value === null || value === undefined) return null;
  return value === 'true';
}

export function setStoredHapticsEnabled(enabled: boolean): void {
  storage.set(SETTINGS_KEYS.HAPTICS_ENABLED, enabled.toString());
}

// First Launch Detection
export function hasLaunchedBefore(): boolean {
  return storage.getBoolean(SETTINGS_KEYS.HAS_LAUNCHED_BEFORE) ?? false;
}

export function setHasLaunchedBefore(): void {
  storage.set(SETTINGS_KEYS.HAS_LAUNCHED_BEFORE, true);
}
