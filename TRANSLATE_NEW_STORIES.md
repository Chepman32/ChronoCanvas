# Translate New Stories (Stories 5-13)

## Current Status
Stories 5-13 currently have:
- ✅ English: Complete (all nodes)
- ⚠️ Russian: Partial (only 4-8 nodes out of 20-26)
- ❌ All other languages: Missing

## Quick Translation Process

### Step 1: Install Dependencies
```bash
cd /Users/antonchepur/Documents/FableFlow
pip install openai
export OPENAI_API_KEY=your_api_key_here
```

### Step 2: Generate Translations
```bash
python3 translate_new_stories_batch.py
```

This will:
- Translate all stories 5-13 to 15 languages (Russian, Spanish, German, French, Portuguese, Japanese, Chinese, Korean, Ukrainian, Italian, Arabic, Hindi, Dutch, Polish, Turkish)
- Save translations to `translations_story-5.ts` through `translations_story-13.ts`
- Cost: ~$10-15 (using GPT-4o-mini)
- Time: ~10-15 minutes

### Step 3: Merge Translations
```bash
node scripts/merge-translations.js
```

This merges all generated translations back into `src/data/localizations/newStories_i18n.ts`.

### Step 4: Validate
```bash
npx tsc --noEmit src/data/localizations/newStories_i18n.ts
```

## Stories to Translate

| Story | Title | Nodes | Status |
|-------|-------|-------|--------|
| 5 | Station Omega | 22 | Needs 14 more languages |
| 6 | Crown of Thorns | 25 | Needs 14 more languages |
| 7 | After the Fall | 23 | Needs 14 more languages |
| 8 | City of Shadows | 24 | Needs 14 more languages |
| 9 | Blackwood Manor | 21 | Needs 14 more languages |
| 10 | Into the Wild | 20 | Needs 14 more languages |
| 11 | Digital Heist | 26 | Needs 14 more languages |
| 12 | Curse of the Pharaoh | 23 | Needs 14 more languages |
| 13 | Dead Rising | 25 | Needs 14 more languages |

## Files Created
- `extracted_stories_new.json` - English content for stories 5-13
- `translate_new_stories_batch.py` - Translation script
- `scripts/merge-translations.js` - Merge script

## Alternative: Manual Translation
If you prefer to translate manually, the English content is in `extracted_stories_new.json`. Translate it and provide the JSON files for each language.
