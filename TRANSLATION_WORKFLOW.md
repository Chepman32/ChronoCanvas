# Translation Workflow Guide

## Overview

This guide explains how to translate story content for the ChronoCanvas app using external translation services.

## Current Status

✅ **TRANSLATION_SOURCE.json** has been generated with 3 detective stories:

- Midnight Missing (21 nodes, story-7481296)
- Shadows of the Vanished Star (22 nodes, story-8273910265)
- The Midnight Caller (22 nodes, story-847362910)

**Total content**: 65 nodes, 96 choices

## Step-by-Step Process

### Step 1: Review Source File

Open `TRANSLATION_SOURCE.json` and review the content structure:

```json
{
  "_instructions": { ... },
  "stories": [
    {
      "storyId": "story-7481296",
      "title": "Midnight Missing",
      "description": "...",
      "author": "Morgan Steele",
      "genres": ["detective", "mystery"],
      "nodes": [
        {
          "nodeId": "story-7481296-1",
          "title": "Missing at Midnight",
          "narration": "...",
          "choices": [
            {
              "choiceId": "story-7481296-c1",
              "text": "Search Emily's apartment",
              "description": "Her home may hide evidence"
            }
          ]
        }
      ]
    }
  ]
}
```

### Step 2: Translate Content

Use one of these translation services:

#### Option A: Professional Translation Service

- **DeepL API** (recommended for quality): https://www.deepl.com/pro-api
- **Google Cloud Translation**: https://cloud.google.com/translate
- **Microsoft Translator**: https://azure.microsoft.com/en-us/services/cognitive-services/translator/

#### Option B: Manual Translation

- Copy the JSON structure
- Translate each text field manually
- Keep all IDs and structure intact

### Step 3: Create Translation Files

For each target language, create a file named `TRANSLATIONS_[LANG].json`:

**Target Languages:**

- `TRANSLATIONS_ru.json` - Russian (Русский)
- `TRANSLATIONS_es.json` - Spanish (Español)
- `TRANSLATIONS_de.json` - German (Deutsch)
- `TRANSLATIONS_fr.json` - French (Français)
- `TRANSLATIONS_pt.json` - Portuguese (Português)
- `TRANSLATIONS_ja.json` - Japanese (日本語)
- `TRANSLATIONS_zh.json` - Chinese (中文)
- `TRANSLATIONS_ko.json` - Korean (한국어)
- `TRANSLATIONS_uk.json` - Ukrainian (Українська)

### Step 4: Translation Rules

**✅ DO TRANSLATE:**

- `title` - Story and node titles
- `description` - Story descriptions
- `author` - Author names (if appropriate)
- `genres` - Genre names (array values)
- `narration` - All story text
- `text` - Choice button text
- `description` (in choices) - Choice descriptions

**❌ DO NOT TRANSLATE:**

- `storyId` - Keep as-is
- `nodeId` - Keep as-is
- `choiceId` - Keep as-is
- Any field ending with "Id"
- JSON structure/keys

**⚠️ IMPORTANT:**

- Maintain **bold text** markers: `**text**` stays as `**translated text**`
- Keep line breaks and formatting
- Preserve special characters and punctuation where appropriate
- Maintain the same JSON structure

### Step 5: Example Translation

**English (source):**

```json
{
  "title": "Midnight Missing",
  "description": "When a young woman vanishes...",
  "genres": ["detective", "mystery"]
}
```

**Russian (TRANSLATIONS_ru.json):**

```json
{
  "title": "Пропавшая в полночь",
  "description": "Когда молодая женщина исчезает...",
  "genres": ["детектив", "мистика"]
}
```

### Step 6: Import Translations

Once you have the translated files, run:

```bash
node scripts/import-translations.js
```

This will:

1. Read all `TRANSLATIONS_*.json` files
2. Generate TypeScript localization files in `src/data/localizations/`
3. Create properly formatted translation modules

### Step 7: Register Translations

Update `src/data/localizations/index.ts` to import and register the new translations:

```typescript
import { midnightMissingStoryTranslations } from './story7481296_midnightMissing_i18n';

export const storyTranslationsRegistry = {
  // ... existing translations
  'story-7481296': midnightMissingStoryTranslations,
  // ... add more
};
```

### Step 8: Test

1. Run the app
2. Change language in settings
3. Verify all text is translated correctly
4. Check that genres, buttons, and narration all display in the selected language

## File Locations

```
ChronoCanvas/
├── TRANSLATION_SOURCE.json          # Source English text (generated)
├── TRANSLATIONS_ru.json             # Russian translations (you create)
├── TRANSLATIONS_es.json             # Spanish translations (you create)
├── ... (other language files)
├── scripts/
│   ├── create-translation-template.js   # Generates source file
│   └── import-translations.js           # Imports translated files
└── src/data/localizations/
    ├── index.ts                         # Translation registry
    └── story*_i18n.ts                   # Generated translation files
```

## Tips for Quality Translations

1. **Context Matters**: Read the full story to understand context
2. **Consistency**: Use consistent terminology throughout
3. **Cultural Adaptation**: Adapt idioms and expressions appropriately
4. **Character Names**: Usually keep names in English unless culturally appropriate to translate
5. **Tone**: Maintain the noir/detective tone in translations
6. **Length**: Try to keep similar length to avoid UI issues

## Troubleshooting

**Problem**: Import script fails

- **Solution**: Check JSON syntax in translation files
- **Tool**: Use https://jsonlint.com/ to validate

**Problem**: Missing translations in app

- **Solution**: Verify story ID matches in translation registry

**Problem**: Text appears in English

- **Solution**: Check that the language code matches exactly (ru, es, de, etc.)

## Adding More Stories

To add more stories to the translation source:

1. Edit `scripts/create-translation-template.js`
2. Add story filenames to the `storyFiles` array
3. Run: `node scripts/create-translation-template.js`
4. Follow the translation workflow again

## Questions?

If you encounter issues or need clarification, check:

- The `_instructions` section in TRANSLATION_SOURCE.json
- Example translations in `src/data/localizations/story4_deepsea_i18n.ts`
- This guide

---

**Ready to translate?** Open `TRANSLATION_SOURCE.json` and start translating! 🌍
