# Story Translations

## Folder Structure

Each story has its own folder with translation files:

```
translations/
├── index.json                  # Index of all stories
├── story-3/                    # Story folder
│   ├── en.json                # English (source)
│   ├── es.json                # Spanish
│   ├── fr.json                # French
│   └── de.json                # German
├── story-847362910/           # Another story
│   ├── en.json
│   └── es.json
└── ...
```

## File Format

Each translation file (e.g., `en.json`, `es.json`) contains:

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

### 1. Choose a story folder

```bash
cd src/data/translations/story-3
```

### 2. Copy the English file

```bash
# For Spanish
cp en.json es.json

# For French
cp en.json fr.json

# For German
cp en.json de.json
```

### 3. Update the language code

```json
{
  "meta": {
    "language": "es" // Change from "en" to your language
  }
}
```

### 4. Translate the content

- `story.title` - Story title
- `story.author` - Usually keep original
- `story.description` - Story description
- `nodes[].title` - Node/scene titles
- `nodes[].narration` - Full narrative text
- `nodes[].choices[].text` - Choice button text
- `nodes[].choices[].description` - Choice descriptions

### 5. Keep unchanged

- All `id` fields
- `type` fields
- `genre` array (or translate genre names if needed)
- `difficulty` (or translate: easy/medium/hard)
- `estimatedDuration` (number)

## Available Stories

Check `index.json` in the parent folder for the complete list of stories.

## Integration

Translation files are automatically loaded based on the user's language preference:

```typescript
// Load translation for a specific story and language
import storyEn from './translations/story-3/en.json';
import storyEs from './translations/story-3/es.json';

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
