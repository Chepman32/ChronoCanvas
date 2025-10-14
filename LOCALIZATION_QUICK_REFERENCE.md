# Localization Quick Reference

## What's Localized

### ✅ UI Text (All Screens)

- App name and branding
- Navigation buttons
- Settings options
- Genre labels
- Difficulty levels
- All button text
- Status messages

**Languages**: 10 (en, ru, es, de, fr, pt, ja, zh, ko, uk)
**Status**: ✅ Complete

### ✅ Story Content

- Story titles
- Story descriptions
- Author names
- Node titles
- Narration text
- Choice text

**Languages**: 10 (en, ru, es, de, fr, pt, ja, zh, ko, uk)
**Status**: ✅ 1 story complete ("Abyssal Secrets"), 11 pending

## How to Use

### For Users

1. Tap Settings (⚙️)
2. Scroll to "Language" section
3. Select your language
4. Everything updates instantly!

### For Developers

#### Get UI translations:

```typescript
import { useTranslation } from '../localization/useTranslation';

const t = useTranslation();
console.log(t.appName); // "ChronoCanvas" or localized version
```

#### Add story translations:

```typescript
// 1. Create translation file
// src/data/localizations/story_xyz_i18n.ts

export const xyzStoryTranslations = {
  en: { title: "...", description: "...", ... },
  ru: { title: "...", description: "...", ... },
  // ... all 10 languages
};

// 2. Register in index.ts
import { xyzStoryTranslations } from './story_xyz_i18n';

export const storyTranslationsRegistry = {
  'story-xyz': xyzStoryTranslations,
  // ...
};

// 3. Done! Story auto-localizes
```

## File Locations

### UI Translations

- **Translations**: `src/localization/translations.ts`
- **Hook**: `src/localization/useTranslation.ts`
- **Language names**: `src/localization/translations.ts` (languageNames)

### Story Translations

- **Registry**: `src/data/localizations/index.ts`
- **Individual stories**: `src/data/localizations/story*_i18n.ts`
- **Utilities**: `src/utils/storyLocalization.ts`

### State Management

- **Settings**: `src/store/settingsStore.ts` (language preference)
- **Stories**: `src/store/storyStore.ts` (applies translations)

## Supported Languages

| Code | Language   | Native Name | Status      |
| ---- | ---------- | ----------- | ----------- |
| en   | English    | English     | ✅ Complete |
| ru   | Russian    | Русский     | ✅ Complete |
| es   | Spanish    | Español     | ✅ Complete |
| de   | German     | Deutsch     | ✅ Complete |
| fr   | French     | Français    | ✅ Complete |
| pt   | Portuguese | Português   | ✅ Complete |
| ja   | Japanese   | 日本語      | ✅ Complete |
| zh   | Chinese    | 中文        | ✅ Complete |
| ko   | Korean     | 한국어      | ✅ Complete |
| uk   | Ukrainian  | Українська  | ✅ Complete |

## Translation Status

### UI Text: 100% ✅

All screens, buttons, labels, and messages translated in all 10 languages.

### Story Content: 8% ✅

- ✅ Abyssal Secrets (story-4)
- ⏳ 11 other stories pending

## Key Features

- 🌍 **10 languages** supported
- 🔄 **Instant switching** - no reload needed
- 📝 **Manual translations** - authentic and accurate
- 🎯 **Complete coverage** - UI + story content
- 🚀 **Zero performance impact** - in-memory translations
- 🔧 **Easy to extend** - add new languages or stories easily

## Common Tasks

### Change app language:

```typescript
import { useSettingsStore } from './store/settingsStore';

const setLanguage = useSettingsStore(state => state.setLanguage);
setLanguage('ja'); // Switch to Japanese
```

### Get current language:

```typescript
import { useSettingsStore } from './store/settingsStore';

const language = useSettingsStore(state => state.language);
console.log(language); // 'en', 'ru', etc.
```

### Check if story has translations:

```typescript
import { hasStoryTranslations } from './data/localizations';

if (hasStoryTranslations('story-4')) {
  console.log('Story is localized!');
}
```

## Documentation

- **UI Localization**: `LOCALIZATION.md`
- **Story Localization**: `STORY_LOCALIZATION.md`
- **UI Implementation**: `LOCALIZATION_IMPLEMENTATION_SUMMARY.md`
- **Story Implementation**: `STORY_CONTENT_LOCALIZATION_SUMMARY.md`
- **This Guide**: `LOCALIZATION_QUICK_REFERENCE.md`

## Need Help?

1. Check the relevant documentation file above
2. Look at existing translations for examples
3. Test in the app to see how it works
4. All translations are manual - no scripts or automation!
