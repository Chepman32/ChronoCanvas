import { create } from 'zustand';
import { ThemeName, themes, Theme } from '../theme/colors';
import { Language } from '../localization/translations';
import {
  getStoredLanguage,
  setStoredLanguage,
  getStoredTheme,
  setStoredTheme,
  getStoredFontSize,
  setStoredFontSize,
  getStoredHapticsEnabled,
  setStoredHapticsEnabled,
  hasLaunchedBefore,
  setHasLaunchedBefore,
} from '../services/settingsStorageService';
import { detectDeviceLanguage } from '../utils/languageDetection';

interface SettingsStore {
  themeName: ThemeName;
  theme: Theme;
  language: Language;
  fontSize: number;
  hapticsEnabled: boolean;
  setTheme: (themeName: ThemeName) => void;
  setLanguage: (language: Language) => void;
  setFontSize: (size: number) => void;
  toggleHaptics: () => void;
}

// Determine initial language
function getInitialLanguage(): Language {
  // Check if there's a stored language
  const storedLanguage = getStoredLanguage();
  if (storedLanguage) {
    return storedLanguage;
  }

  // Check if this is the first launch
  if (!hasLaunchedBefore()) {
    // Detect device language
    const detectedLanguage = detectDeviceLanguage();
    // Store it immediately
    setStoredLanguage(detectedLanguage);
    setHasLaunchedBefore();
    return detectedLanguage;
  }

  // Fallback (should not reach here normally)
  return 'en';
}

// Determine initial theme
function getInitialTheme(): ThemeName {
  return getStoredTheme() ?? 'light';
}

// Determine initial font size
function getInitialFontSize(): number {
  return getStoredFontSize() ?? 1.0;
}

// Determine initial haptics setting
function getInitialHaptics(): boolean {
  return getStoredHapticsEnabled() ?? true;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  themeName: getInitialTheme(),
  theme: themes[getInitialTheme()],
  language: getInitialLanguage(),
  fontSize: getInitialFontSize(),
  hapticsEnabled: getInitialHaptics(),

  setTheme: (themeName) => {
    setStoredTheme(themeName); // Persist
    set({ themeName, theme: themes[themeName] });
  },

  setLanguage: (language) => {
    setStoredLanguage(language); // Persist
    set({ language });
    // Refresh localized stories when language changes
    // Import is done dynamically to avoid circular dependency
    import('../store/storyStore').then(({ useStoryStore }) => {
      useStoryStore.getState().refreshLocalizedStories();
    });
  },

  setFontSize: (fontSize) => {
    const clampedSize = Math.max(0.8, Math.min(2.0, fontSize));
    setStoredFontSize(clampedSize); // Persist
    set({ fontSize: clampedSize });
  },

  toggleHaptics: () =>
    set((state) => {
      const newValue = !state.hapticsEnabled;
      setStoredHapticsEnabled(newValue); // Persist
      return { hapticsEnabled: newValue };
    }),
}));
