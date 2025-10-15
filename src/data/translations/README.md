# Story Translations

## Structure

Each story has separate translation files:

- `story-[id]_en.json` - English (source)
- `story-[id]_es.json` - Spanish
- `story-[id]_fr.json` - French
- `story-[id]_de.json` - German
- etc.

## File Format

```json
{
  "meta": {
    "storyId": "story-1",
    "language": "en",
    "version": "1.0",
    "lastUpdated": "2025-10-15T00:00:00.000Z"
  },
  "story": {
    "title": "Story Title",
    "author": "Author Name",
    "description": "Story description...",
    "genre": ["fantasy", "adventure"],
    "difficulty": "easy",
    "estimatedDuration": 15
  },
  "nodes": [
    {
      "id": "node-1",
      "type": "start",
      "title": "Node Title",
      "narration": "Full narration text...",
      "choices": [
        {
          "id": "choice-1",
          "text": "Choice text",
          "description": "Optional description"
        }
      ]
    }
  ]
}
```

## How to Translate

### 1. Copy the English file

```bash
cp story-1_en.json story-1_es.json
```

### 2. Update the meta section

```json
{
  "meta": {
    "storyId": "story-1",
    "language": "es", // Change this
    "version": "1.0",
    "lastUpdated": "2025-10-15T00:00:00.000Z" // Update this
  }
}
```

### 3. Translate the content

- `story.title` - Story title
- `story.author` - Usually keep original
- `story.description` - Story description
- `nodes[].title` - Node/scene titles
- `nodes[].narration` - Full narrative text
- `nodes[].choices[].text` - Choice button text
- `nodes[].choices[].description` - Choice descriptions

### 4. Keep unchanged

- All `id` fields
- `type` fields
- `genre` array (or translate genre names if needed)
- `difficulty` (or translate: easy/medium/hard)
- `estimatedDuration` (number)

## Available Stories

Check `index.json` for the complete list of stories and their IDs.

## Integration

Translation files are automatically loaded based on the user's language preference.

```typescript
import storyEn from './translations/story-1_en.json';
import storyEs from './translations/story-1_es.json';

const translations = {
  en: storyEn,
  es: storyEs,
};

const story = translations[userLanguage] || translations.en;
```

## Quality Checklist

- [ ] All text fields translated
- [ ] JSON syntax valid
- [ ] IDs unchanged
- [ ] Line breaks preserved (`\n`)
- [ ] Special characters handled
- [ ] Tone matches original
- [ ] Native speaker reviewed
