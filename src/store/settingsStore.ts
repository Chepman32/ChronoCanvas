import { create } from 'zustand';
import { ThemeName, themes, Theme } from '../theme/colors';
import { Language } from '../localization/translations';

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

export const useSettingsStore = create<SettingsStore>((set) => ({
  themeName: 'light',
  theme: themes.light,
  language: 'en',
  fontSize: 1.0,
  hapticsEnabled: true,

  setTheme: (themeName) =>
    set({ themeName, theme: themes[themeName] }),

  setLanguage: (language) => {
    set({ language });
    // Refresh localized stories when language changes
    // Import is done dynamically to avoid circular dependency
    import('../store/storyStore').then(({ useStoryStore }) => {
      useStoryStore.getState().refreshLocalizedStories();
    });
  },

  setFontSize: (fontSize) => {
    const clampedSize = Math.max(0.8, Math.min(1.4, fontSize));
    set({ fontSize: clampedSize });
  },

  toggleHaptics: () =>
    set((state) => ({ hapticsEnabled: !state.hapticsEnabled })),
}));
