import * as RNLocalize from 'react-native-localize';
import { Language } from '../localization/translations';

// All supported languages in the app
const SUPPORTED_LANGUAGES: Language[] = [
  'en', 'ru', 'es', 'de', 'fr', 'pt', 'ja', 'zh', 'ko', 'uk',
  'it', 'ar', 'hi', 'nl', 'pl', 'tr',
];

/**
 * Maps device locale codes to supported app languages.
 * Handles both full locales (e.g., 'en-US', 'pt-BR') and base languages (e.g., 'en', 'pt').
 *
 * Examples:
 * - 'en-US' -> 'en'
 * - 'pt-BR' -> 'pt'
 * - 'zh-Hans' -> 'zh'
 * - 'zh-Hant' -> 'zh'
 * - 'de-AT' -> 'de'
 */
function mapLocaleToLanguage(locale: string): Language | null {
  // First, try exact match (for base language codes)
  if (SUPPORTED_LANGUAGES.includes(locale as Language)) {
    return locale as Language;
  }

  // Extract base language from locale (e.g., 'en-US' -> 'en', 'pt-BR' -> 'pt')
  const baseLanguage = locale.split('-')[0].toLowerCase();

  if (SUPPORTED_LANGUAGES.includes(baseLanguage as Language)) {
    return baseLanguage as Language;
  }

  return null;
}

/**
 * Detects the device's preferred language and returns a supported app language.
 * Falls back to English ('en') if the device language is not supported.
 */
export function detectDeviceLanguage(): Language {
  const locales = RNLocalize.getLocales();

  // Iterate through user's preferred locales in order of preference
  for (const locale of locales) {
    const mappedLanguage = mapLocaleToLanguage(locale.languageCode);
    if (mappedLanguage) {
      return mappedLanguage;
    }

    // Also try the full locale tag (e.g., 'en-US')
    const fullLocale = locale.languageTag;
    const mappedFromTag = mapLocaleToLanguage(fullLocale);
    if (mappedFromTag) {
      return mappedFromTag;
    }
  }

  // Default to English if no supported language found
  return 'en';
}
