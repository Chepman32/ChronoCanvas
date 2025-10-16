# Translation Workflow

## How to Add Translations

### 1. Add JSON Translation Files

Create translation files in the story folder:

```
src/data/translations/story-3/
  ├── en.json  (English - required)
  ├── ru.json  (Russian)
  ├── fr.json  (French)
  ├── es.json  (Spanish)
  └── ...
```

### 2. JSON File Structure

Each translation file should follow this structure:

```json
{
  "meta": {
    "storyId": "story-3",
    "language": "ru",
    "version": "1.0",
    "lastUpdated": "2025-10-15T16:45:00.000Z"
  },
  "story": {
    "title": "Story Title",
    "author": "Author Name",
    "description": "Story description",
    "genre": ["genre1", "genre2"],
    "difficulty": "easy|medium|hard",
    "estimatedDuration": 35
  },
  "nodes": [
    {
      "id": "node-1",
      "type": "start|decision|ending",
      "title": "Node Title",
      "narration": "Node narration text",
      "choices": [
        {
          "id": "choice-1",
          "text": "Choice text",
          "description": null
        }
      ]
    }
  ]
}
```

### 3. Generate TypeScript Files

After adding or updating JSON translations, run:

```bash
npm run generate-translations
```

This will:

- ✅ Convert all JSON files to TypeScript
- ✅ Generate translation files in `src/data/localizations/`
- ✅ Update the registry in `src/data/localizations/index.ts`
- ✅ Add placeholders for missing languages

### 4. Supported Languages

The system supports these languages:

- `en` - English
- `ru` - Русский (Russian)
- `es` - Español (Spanish)
- `de` - Deutsch (German)
- `fr` - Français (French)
- `pt` - Português (Portuguese)
- `ja` - 日本語 (Japanese)
- `zh` - 中文 (Chinese)
- `ko` - 한국어 (Korean)
- `uk` - Українська (Ukrainian)

### 5. Testing Translations

1. Run `npm run generate-translations`
2. Restart your app
3. Change language in settings
4. Open the story to verify translations

## Tips

- **Always start with English** (`en.json`) as the base translation
- **Run the generator** after any JSON changes
- **Commit both** JSON and generated TypeScript files
- **Use the same node IDs** across all language files
- **Keep translations consistent** with the original story structure

## Example Workflow

```bash
# 1. Add Russian translation
# Create: src/data/translations/story-3/ru.json

# 2. Generate TypeScript files
npm run generate-translations

# 3. Restart app and test
npm start

# 4. Add more languages and repeat
```

## Troubleshooting

**Problem:** Translations not showing

- ✅ Run `npm run generate-translations`
- ✅ Restart the app
- ✅ Check that JSON file names match language codes (e.g., `ru.json`, not `russian.json`)

**Problem:** Script errors

- ✅ Verify JSON syntax is valid
- ✅ Check that all required fields are present
- ✅ Ensure node IDs match across all translations

**Problem:** Missing translations

- ✅ The system will use English as fallback
- ✅ Add the missing language JSON file
- ✅ Run the generator again
