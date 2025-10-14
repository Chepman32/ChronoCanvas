import { create } from 'zustand';
import { ThemeName, themes, Theme } from '../theme/colors';
import { Language } from '../localization/translations';

interface SettingsStore {
  themeName: ThemeName;
  theme: Theme;
  language: Language;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  setTheme: (themeName: ThemeName) => void;
  setLanguage: (language: Language) => void;
  toggleSound: () => void;
  toggleHaptics: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  themeName: 'light',
  theme: themes.light,
  language: 'en',
  soundEnabled: true,
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

  toggleSound: () =>
    set((state) => ({ soundEnabled: !state.soundEnabled })),

  toggleHaptics: () =>
    set((state) => ({ hapticsEnabled: !state.hapticsEnabled })),
}));
