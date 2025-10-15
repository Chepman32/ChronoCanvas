# Per-Story Translation System

## Overview

This system uses **separate translation files for each story**, making it easy to:

- Translate stories independently
- Update individual stories without affecting others
- Manage translations by different translators
- Version control per story
- Load only needed translations

## File Structure

```
src/data/translations/
├── README.md                    # This guide
├── index.json                   # Index of all stories
├── story-1_en.json             # Story 1 - English
├── story-1_es.json             # Story 1 - Spanish
├── story-1_fr.json             # Story 1 - French
├── story-2_en.json             # Story 2 - English
├── story-2_es.json             # Story 2 - Spanish
└── ...
```

## Translation File Format

Each file follows this structure:

```json
{
  "meta": {
    "storyId": "story-3",
    "language": "es",
    "version": "1.0",
    "lastUpdated": "2025-10-15T00:00:00.000Z",
    "translator": "Translator Name (optional)"
  },
  "story": {
    "title": "Story Title",
    "author": "Author Name",
    "description": "Story description...",
    "genre": ["genre1", "genre2"],
    "difficulty": "easy|medium|hard",
    "estimatedDuration": 30
  },
  "nodes": [
    {
      "id": "node-1",
      "type": "start|decision|ending",
      "title": "Node Title",
      "narration": "Full narration text with\nline breaks preserved.",
      "choices": [
        {
          "id": "choice-1",
          "text": "Choice button text",
          "description": "Optional description"
        }
      ]
    }
  ]
}
```

## How to Translate a Story

### Step 1: Choose a Story

Check `index.json` to see all available stories:

```json
{
  "stories": [
    {
      "id": "story-1",
      "title": "The Enchanted Forest",
      "fileName": "story-1_en.json",
      "nodes": 5
    }
  ]
}
```

### Step 2: Copy the English File

```bash
# For Spanish
cp src/data/translations/story-1_en.json src/data/translations/story-1_es.json

# For French
cp src/data/translations/story-1_en.json src/data/translations/story-1_fr.json

# For German
cp src/data/translations/story-1_en.json src/data/translations/story-1_de.json
```

### Step 3: Update Meta Section

```json
{
  "meta": {
    "storyId": "story-1",
    "language": "es", // ← Change this to your language code
    "version": "1.0",
    "lastUpdated": "2025-10-15T16:00:00.000Z", // ← Update timestamp
    "translator": "Your Name" // ← Add your name (optional)
  }
}
```

### Step 4: Translate Content

#### Story Metadata

```json
{
  "story": {
    "title": "El Bosque Encantado", // ← Translate
    "author": "Elena Rivers", // ← Usually keep original
    "description": "Un viaje místico...", // ← Translate
    "genre": ["fantasy", "adventure"], // ← Keep or translate
    "difficulty": "easy", // ← Keep or translate (fácil)
    "estimatedDuration": 15 // ← Keep number
  }
}
```

#### Node Content

```json
{
  "nodes": [
    {
      "id": "node-1", // ← NEVER change IDs
      "type": "start", // ← NEVER change type
      "title": "La Entrada del Bosque", // ← Translate
      "narration": "Te encuentras al borde...", // ← Translate
      "choices": [
        {
          "id": "choice-1", // ← NEVER change IDs
          "text": "Seguir el camino", // ← Translate
          "description": "El camino parece..." // ← Translate
        }
      ]
    }
  ]
}
```

### Step 5: Validate

```bash
# Check JSON syntax
cat story-1_es.json | jq . > /dev/null && echo "Valid JSON" || echo "Invalid JSON"

# Or use online validator
# https://jsonlint.com/
```

### Step 6: Test

Load the translation in your app and verify:

- Text displays correctly
- Special characters render properly
- Text fits in UI elements
- Line breaks work as expected
- Tone matches the original

## Translation Guidelines

### DO ✅

- **Preserve formatting**: Keep `\n` for line breaks
- **Maintain tone**: Match the emotional feel of the original
- **Keep IDs unchanged**: All `id` fields must stay exactly the same
- **Adapt culturally**: Change idioms/references when needed
- **Be consistent**: Use same terms throughout the story
- **Preserve structure**: Keep JSON structure intact
- **Add translator name**: Credit yourself in meta section

### DON'T ❌

- **Don't change IDs**: Never modify any `id` field
- **Don't change types**: Keep `type` fields as-is
- **Don't break JSON**: Validate syntax before saving
- **Don't translate names**: Usually keep character names original
- **Don't skip review**: Always have a native speaker check
- **Don't ignore context**: Read full narration for context

## Language Codes

Use ISO 639-1 two-letter codes:

| Language             | Code | Example File    |
| -------------------- | ---- | --------------- |
| English              | en   | story-1_en.json |
| Spanish              | es   | story-1_es.json |
| French               | fr   | story-1_fr.json |
| German               | de   | story-1_de.json |
| Italian              | it   | story-1_it.json |
| Portuguese           | pt   | story-1_pt.json |
| Russian              | ru   | story-1_ru.json |
| Japanese             | ja   | story-1_ja.json |
| Korean               | ko   | story-1_ko.json |
| Chinese (Simplified) | zh   | story-1_zh.json |
| Arabic               | ar   | story-1_ar.json |
| Hindi                | hi   | story-1_hi.json |

## Examples

### English (Original)

```json
{
  "id": "node-1",
  "title": "The Forest Entrance",
  "narration": "You stand at the edge of an ancient forest. The trees tower above you, their branches forming a canopy that filters the sunlight into dancing patterns on the forest floor.",
  "choices": [
    {
      "text": "Follow the worn path",
      "description": "The path looks well-traveled"
    }
  ]
}
```

### Spanish Translation

```json
{
  "id": "node-1",
  "title": "La Entrada del Bosque",
  "narration": "Te encuentras al borde de un bosque ancestral. Los árboles se elevan sobre ti, sus ramas formando un dosel que filtra la luz del sol en patrones danzantes sobre el suelo del bosque.",
  "choices": [
    {
      "text": "Seguir el camino gastado",
      "description": "El camino parece muy transitado"
    }
  ]
}
```

### French Translation

```json
{
  "id": "node-1",
  "title": "L'Entrée de la Forêt",
  "narration": "Vous vous tenez au bord d'une forêt ancienne. Les arbres s'élèvent au-dessus de vous, leurs branches formant une canopée qui filtre la lumière du soleil en motifs dansants sur le sol de la forêt.",
  "choices": [
    {
      "text": "Suivre le sentier usé",
      "description": "Le sentier semble bien fréquenté"
    }
  ]
}
```

## Integration in App

### Loading Translations

```typescript
// Import translations
import storyEn from './translations/story-1_en.json';
import storyEs from './translations/story-1_es.json';
import storyFr from './translations/story-1_fr.json';

// Create translation map
const translations = {
  'story-1': {
    en: storyEn,
    es: storyEs,
    fr: storyFr,
  },
};

// Get story in user's language
function getStory(storyId: string, language: string) {
  const storyTranslations = translations[storyId];
  return storyTranslations[language] || storyTranslations.en;
}

// Usage
const story = getStory('story-1', userLanguage);
```

### Dynamic Loading

```typescript
// Load translation dynamically
async function loadStoryTranslation(storyId: string, language: string) {
  try {
    const translation = await import(
      `./translations/${storyId}_${language}.json`
    );
    return translation.default;
  } catch (error) {
    // Fallback to English
    const fallback = await import(`./translations/${storyId}_en.json`);
    return fallback.default;
  }
}
```

## Quality Checklist

Before submitting a translation:

- [ ] All text fields translated
- [ ] JSON syntax is valid
- [ ] All IDs unchanged
- [ ] Meta section updated (language, date, translator)
- [ ] Line breaks preserved (`\n`)
- [ ] Special characters handled correctly
- [ ] Tone matches original story
- [ ] Terminology consistent throughout
- [ ] Native speaker reviewed
- [ ] Tested in app
- [ ] Text fits in UI elements

## Benefits of Per-Story Approach

### ✅ Advantages

1. **Independent Translation**: Translate stories one at a time
2. **Easy Updates**: Update one story without affecting others
3. **Multiple Translators**: Different people can work on different stories
4. **Smaller Files**: Easier to work with and version control
5. **Faster Loading**: Load only the stories you need
6. **Clear Organization**: Easy to find and manage translations
7. **Flexible Deployment**: Deploy translations as they're completed

### 📊 Comparison

| Aspect            | Per-Story Files     | Single Large File      |
| ----------------- | ------------------- | ---------------------- |
| File Size         | Small (~5-50 KB)    | Large (300+ KB)        |
| Translation Speed | Fast (one story)    | Slow (all stories)     |
| Collaboration     | Easy (no conflicts) | Hard (merge conflicts) |
| Updates           | Simple              | Complex                |
| Loading           | Fast (on-demand)    | Slow (all at once)     |
| Organization      | Clear               | Cluttered              |

## Maintenance

### Adding a New Story

1. Create English translation file: `story-X_en.json`
2. Add entry to `index.json`
3. Translate to other languages as needed

### Updating a Story

1. Update the English file: `story-X_en.json`
2. Increment version number in meta
3. Update `lastUpdated` timestamp
4. Update translations in other languages
5. Increment version in translated files

### Version Control

```bash
# Track changes
git add src/data/translations/story-1_es.json
git commit -m "feat: Add Spanish translation for Story 1"

# Tag releases
git tag -a v1.0-es -m "Spanish translations v1.0"
```

## Tools & Resources

### Recommended Tools

- **VS Code**: JSON editing with validation
- **DeepL**: High-quality machine translation
- **JSONLint**: Online JSON validator
- **Diff tools**: Compare translations

### Helpful Commands

```bash
# Count words in a story
cat story-1_en.json | jq -r '.nodes[].narration' | wc -w

# List all stories
ls src/data/translations/*_en.json

# Find untranslated stories
for story in src/data/translations/*_en.json; do
  base=$(basename "$story" _en.json)
  if [ ! -f "src/data/translations/${base}_es.json" ]; then
    echo "Missing Spanish: $base"
  fi
done
```

## Support

For questions or issues:

- Check `index.json` for story list
- Review example files: `story-3_en.json` and `story-3_es.json`
- Validate JSON syntax before asking for help
- Include story ID and language code in questions

---

**Ready to translate!** 🌍📖✨

See `story-3_en.json` and `story-3_es.json` for complete examples.
