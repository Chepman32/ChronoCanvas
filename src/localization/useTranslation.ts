import { useSettingsStore } from '../store/settingsStore';
import { translations } from './translations';

export const useTranslation = () => {
  const language = useSettingsStore(state => state.language);
  return translations[language];
};
