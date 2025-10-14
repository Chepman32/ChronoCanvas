import { create } from 'zustand';
import { ThemeName, themes, Theme } from '../theme/colors';

interface SettingsStore {
  themeName: ThemeName;
  theme: Theme;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  setTheme: (themeName: ThemeName) => void;
  toggleSound: () => void;
  toggleHaptics: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  themeName: 'light',
  theme: themes.light,
  soundEnabled: true,
  hapticsEnabled: true,

  setTheme: (themeName) =>
    set({ themeName, theme: themes[themeName] }),

  toggleSound: () =>
    set((state) => ({ soundEnabled: !state.soundEnabled })),

  toggleHaptics: () =>
    set((state) => ({ hapticsEnabled: !state.hapticsEnabled })),
}));
