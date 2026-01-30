# ✅ Translation System Ready!

## What I've Created

### 1. Translation Source File

**File**: `TRANSLATION_SOURCE.json` (62.65 KB)

Contains all English text from 3 detective stories:

- ✅ Midnight Missing - 21 nodes
- ✅ Shadows of the Vanished Star - 22 nodes
- ✅ The Midnight Caller - 22 nodes

**Total**: 65 nodes, 96 choices, ready for translation

### 2. Scripts

#### `scripts/create-translation-template.js`

- Extracts English text from story files
- Creates clean JSON structure
- Run: `node scripts/create-translation-template.js`

#### `scripts/import-translations.js`

- Imports translated JSON files
- Generates TypeScript localization files
- Run: `node scripts/import-translations.js`

### 3. Documentation

- **TRANSLATION_WORKFLOW.md** - Complete step-by-step guide
- **TRANSLATION_READY.md** - This file (quick reference)

## Quick Start

### For You (Now):

1. Open `TRANSLATION_SOURCE.json`
2. Send to translation service (DeepL, Google Translate, etc.)
3. Request translations for 9 languages:
   - Russian (ru)
   - Spanish (es)
   - German (de)
   - French (fr)
   - Portuguese (pt)
   - Japanese (ja)
   - Chinese (zh)
   - Korean (ko)
   - Ukrainian (uk)

### Translation Service Instructions:

```
Please translate this JSON file to [LANGUAGE].
- Translate: title, description, author, genres, narration, text, descriptions
- DO NOT translate: storyId, nodeId, choiceId, or any IDs
- Keep the same JSON structure
- Maintain **bold** markers and formatting
- Save as: TRANSLATIONS_[LANG_CODE].json
```

### For Me (After You Get Translations):

1. You provide the translated JSON files
2. I run: `node scripts/import-translations.js`
3. I update the translation registry
4. Done! ✅

## What Gets Translated

### Story Level:

- ✅ Title: "Midnight Missing" → "Пропавшая в полночь"
- ✅ Description: Full story description
- ✅ Author: "Morgan Steele" (usually keep as-is)
- ✅ Genres: ["detective", "mystery"] → ["детектив", "мистика"]

### Node Level (for each scene):

- ✅ Title: "Missing at Midnight"
- ✅ Narration: Full story text (can be long)
- ✅ Choice text: "Search Emily's apartment"
- ✅ Choice description: "Her home may hide evidence"

## File Structure

```
TRANSLATION_SOURCE.json (English - provided by me)
├── Story 1: Midnight Missing
│   ├── Title, description, author, genres
│   └── 21 nodes
│       ├── Node titles
│       ├── Narrations
│       └── Choice texts + descriptions
├── Story 2: Shadows of the Vanished Star
│   └── 22 nodes...
└── Story 3: The Midnight Caller
    └── 22 nodes...
```

## Expected Output Files

After translation, you should have:

```
TRANSLATIONS_ru.json  (Russian)
TRANSLATIONS_es.json  (Spanish)
TRANSLATIONS_de.json  (German)
TRANSLATIONS_fr.json  (French)
TRANSLATIONS_pt.json  (Portuguese)
TRANSLATIONS_ja.json  (Japanese)
TRANSLATIONS_zh.json  (Chinese)
TRANSLATIONS_ko.json  (Korean)
TRANSLATIONS_uk.json  (Ukrainian)
```

Each file should have the EXACT same structure as `TRANSLATION_SOURCE.json`, just with translated text.

## Translation Quality Tips

1. **Context**: These are noir detective stories - maintain the tone
2. **Names**: Character names usually stay in English (Emily Parker, Alan Ridge, etc.)
3. **Bold text**: Keep `**text**` markers for emphasis
4. **Length**: Try to keep similar length for UI consistency
5. **Idioms**: Adapt culturally where needed

## Cost Estimate (if using paid service)

**DeepL API**:

- ~62 KB × 9 languages = ~558 KB
- Cost: ~$25-30 USD (approximate)

**Google Translate API**:

- Similar pricing
- Slightly lower quality than DeepL

**Manual Translation**:

- Time: ~8-12 hours per language
- Cost: Varies by translator

## Next Steps

1. **You**: Send `TRANSLATION_SOURCE.json` to translation service
2. **Service**: Returns 9 translated JSON files
3. **You**: Give me the translated files
4. **Me**: Run import script and integrate
5. **Done**: All 3 detective stories fully localized! 🎉

## Questions?

- Read `TRANSLATION_WORKFLOW.md` for detailed instructions
- Check `TRANSLATION_SOURCE.json` structure
- Look at existing translations in `src/data/localizations/story4_deepsea_i18n.ts`

---

**Status**: ✅ Ready for translation
**Next Action**: Send TRANSLATION_SOURCE.json to translation service
