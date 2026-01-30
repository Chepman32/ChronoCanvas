# Localization Guide

## Overview

ChronoCanvas now supports 10 languages with complete UI translations:

- 🇬🇧 English (en)
- 🇷🇺 Russian (ru)
- 🇪🇸 Spanish (es)
- 🇩🇪 German (de)
- 🇫🇷 French (fr)
- 🇵🇹 Portuguese (pt)
- 🇯🇵 Japanese (ja)
- 🇨🇳 Chinese (zh)
- 🇰🇷 Korean (ko)
- 🇺🇦 Ukrainian (uk)

## How It Works

### Translation Files

All translations are stored in `src/localization/translations.ts`. Each language has a complete set of translations for:

- App branding and metadata
- Navigation and actions
- Screen-specific UI text
- Settings options
- Genre labels
- Difficulty levels

### Using Translations in Components

Import the `useTranslation` hook in any component:

```typescript
import { useTranslation } from '../localization/useTranslation';

function MyComponent() {
  const t = useTranslation();

  return <Text>{t.appName}</Text>;
}
```

### Changing Language

Users can change the language in the Settings screen. The language preference is stored in the settings store and persists across app sessions.

Programmatically:

```typescript
import { useSettingsStore } from '../store/settingsStore';

const setLanguage = useSettingsStore(state => state.setLanguage);
setLanguage('es'); // Switch to Spanish
```

## Adding New Translations

To add a new language:

1. Add the language code to the `Language` type in `src/localization/translations.ts`
2. Add the language name to `languageNames` object
3. Create a complete translation object following the `Translations` interface
4. Add the language to the `languageOptions` array in `src/screens/SettingsScreen.tsx`

## Translation Keys

All available translation keys are defined in the `Translations` interface:

- **App Info**: `appName`, `appTagline`, `appVersion`, `appDescription`
- **Actions**: `back`, `close`, `exit`, `continue`, `start`, `finish`, `loading`
- **Home Screen**: `chooseYourAdventure`, `featuredStories`, `premium`, `minutes`, `difficulty`
- **Story Detail**: `by`, `endings`, `yourProgress`, `scenesVisited`, `of`, `story`, `startAdventure`, `continueStory`
- **Story Play**: `loadingStory`, `theEnd`, `finishStory`
- **Settings**: `settings`, `theme`, `language`, `audio`, `soundEffects`, `soundEffectsDescription`, `feedback`, `hapticFeedback`, `hapticFeedbackDescription`
- **Themes**: `themeLight`, `themeDark`, `themeSolar`, `themeMono`
- **Genres**: `genreFantasy`, `genreSciFi`, `genreMystery`, `genreRomance`, `genreHorror`, `genreAdventure`, `genreDetective`
- **Difficulty**: `difficultyEasy`, `difficultyMedium`, `difficultyHard`

## Translation Quality

All translations have been manually created to ensure:

- **Authenticity**: Native-level translations that sound natural
- **Context awareness**: Translations consider the app's interactive story context
- **Cultural appropriateness**: Terminology adapted for each language's culture
- **Consistency**: Uniform terminology across all screens

## Future Enhancements

Potential improvements for the localization system:

- Story content translations (titles, descriptions, narration)
- Date/time formatting per locale
- Number formatting per locale
- Right-to-left (RTL) language support
- Pluralization rules
- Dynamic translation loading
- Translation fallbacks
