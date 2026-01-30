# Translation System - Final Structure

## ✅ Folder-Per-Story Approach

Each story now has its own folder with language files inside. This keeps everything organized and clean!

## 📁 Structure

```
src/data/translations/
├── index.json                      # Index of all stories
├── README.md                       # Quick reference
│
├── story-3/                        # Story folder
│   ├── en.json                    # English
│   ├── es.json                    # Spanish
│   ├── fr.json                    # French
│   └── de.json                    # German
│
├── story-847362910/               # Another story
│   ├── en.json                    # English
│   └── es.json                    # Spanish
│
├── story-9123457712345/           # Another story
│   ├── en.json                    # English
│   ├── es.json                    # Spanish
│   └── fr.json                    # French
│
└── ...                             # More stories
```

## 🎯 Benefits

### ✅ Clean Organization

- Each story in its own folder
- Easy to find translations
- No clutter in main translations folder

### ✅ Easy to Manage

- See all languages for a story at a glance
- Add new languages easily
- Delete/update per story

### ✅ Better Version Control

- Changes isolated to story folders
- No merge conflicts between stories
- Clear git history

### ✅ Scalable

- Add 100+ languages without mess
- Each folder stays small
- Easy to navigate

## 🚀 How to Translate

### Step 1: Go to Story Folder

```bash
cd src/data/translations/story-3
```

### Step 2: Copy English File

```bash
cp en.json es.json
```

### Step 3: Update Language Code

```json
{
  "meta": {
    "language": "es" // Change from "en"
  }
}
```

### Step 4: Translate Content

- Keep all IDs unchanged
- Translate titles, narrations, choices
- Validate JSON syntax

## 📊 Current Status

### Stories with Translations

- **story-3**: English ✅, Spanish ✅
- **story-4**: English ✅
- **story-847362910**: English ✅
- **story-745829103**: English ✅
- ... (14 total stories with English)

### Total

- **14 story folders** created
- **14 English translations** ready
- **1 Spanish translation** (example)
- **Ready for more languages!**

## 📖 File Format

Each language file (en.json, es.json, etc.) contains:

```json
{
  "meta": {
    "storyId": "story-3",
    "language": "en",
    "version": "1.0",
    "lastUpdated": "2025-10-15T00:00:00.000Z"
  },
  "story": {
    "title": "Story Title",
    "author": "Author Name",
    "description": "Description...",
    "genre": ["genre1", "genre2"],
    "difficulty": "easy|medium|hard",
    "estimatedDuration": 30
  },
  "nodes": [
    {
      "id": "node-1",
      "type": "start|decision|ending",
      "title": "Node Title",
      "narration": "Full narration...",
      "choices": [
        {
          "id": "choice-1",
          "text": "Choice text",
          "description": "Optional"
        }
      ]
    }
  ]
}
```

## 🔧 Integration

### Loading Translations

```typescript
// Import translations for a story
import enTranslation from './translations/story-3/en.json';
import esTranslation from './translations/story-3/es.json';
import frTranslation from './translations/story-3/fr.json';

const translations = {
  en: enTranslation,
  es: esTranslation,
  fr: frTranslation,
};

// Get translation for user's language
const story = translations[userLanguage] || translations.en;
```

### Dynamic Loading

```typescript
// Load translation dynamically
async function loadStoryTranslation(storyId: string, language: string) {
  try {
    const translation = await import(
      `./translations/${storyId}/${language}.json`
    );
    return translation.default;
  } catch (error) {
    // Fallback to English
    const fallback = await import(`./translations/${storyId}/en.json`);
    return fallback.default;
  }
}

// Usage
const story = await loadStoryTranslation('story-3', 'es');
```

### Check Available Languages

```typescript
import fs from 'fs';
import path from 'path';

function getAvailableLanguages(storyId: string): string[] {
  const storyPath = path.join('src/data/translations', storyId);
  const files = fs.readdirSync(storyPath);
  return files
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));
}

// Usage
const languages = getAvailableLanguages('story-3');
// Returns: ['en', 'es']
```

## 📝 Quick Commands

```bash
# List all stories
ls src/data/translations/

# Go to a story
cd src/data/translations/story-3

# See available languages
ls

# Copy for new language
cp en.json pt.json

# Validate JSON
cat pt.json | jq . > /dev/null

# Count words
cat en.json | jq -r '.nodes[].narration' | wc -w

# Find stories missing Spanish translation
for dir in src/data/translations/story-*/; do
  [ ! -f "$dir/es.json" ] && echo "Missing Spanish: $(basename $dir)"
done
```

## 📚 Documentation

### Quick Start

**TRANSLATION_QUICKSTART.md** - 5-minute guide to start translating

### Full Guide

**TRANSLATION_PER_STORY_GUIDE.md** - Comprehensive instructions

### Examples

- `src/data/translations/story-3/en.json` - English example
- `src/data/translations/story-3/es.json` - Spanish example

### Index

- `src/data/translations/index.json` - All stories listed

## ✨ Comparison

### Before (Flat Structure)

```
translations/
├── story-1_en.json
├── story-1_es.json
├── story-1_fr.json
├── story-2_en.json
├── story-2_es.json
├── story-2_fr.json
└── ... (100+ files in one folder!)
```

### After (Folder Structure) ✅

```
translations/
├── story-1/
│   ├── en.json
│   ├── es.json
│   └── fr.json
├── story-2/
│   ├── en.json
│   ├── es.json
│   └── fr.json
└── ... (organized!)
```

## 🎯 Next Steps

### For Translators

1. **Read**: `TRANSLATION_QUICKSTART.md`
2. **Choose**: Pick a story from `index.json`
3. **Navigate**: `cd src/data/translations/story-3`
4. **Copy**: `cp en.json es.json`
5. **Translate**: Edit es.json
6. **Validate**: `cat es.json | jq .`
7. **Done!** ✅

### For Developers

1. **Import**: Load translations from story folders
2. **Fallback**: Always fallback to English
3. **Dynamic**: Load on-demand for better performance
4. **Check**: Verify language files exist before loading

## 🌍 Language Support

Add any language by creating a new file:

```bash
cd src/data/translations/story-3
cp en.json [language-code].json
```

Common language codes:

- `es` - Spanish
- `fr` - French
- `de` - German
- `it` - Italian
- `pt` - Portuguese
- `ru` - Russian
- `ja` - Japanese
- `ko` - Korean
- `zh` - Chinese
- `ar` - Arabic

## 📊 Statistics

- **Total Stories**: 18
- **Stories with English**: 14
- **Stories with Spanish**: 1 (example)
- **Total Nodes**: ~338
- **Total Words**: ~50,000+
- **Folder Structure**: ✅ Implemented
- **Ready for Translation**: ✅ Yes!

## 🎉 Summary

✅ **Clean folder structure** - Each story in its own folder
✅ **Simple file naming** - Just language code (en.json, es.json)
✅ **Easy to navigate** - Find everything quickly
✅ **Scalable** - Add unlimited languages
✅ **Well documented** - Complete guides provided
✅ **Examples included** - English and Spanish
✅ **Ready to use** - Start translating now!

---

**Start translating: Read `TRANSLATION_QUICKSTART.md`** 🚀
