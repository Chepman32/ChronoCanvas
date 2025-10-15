# Translation Quick Start

## 🚀 Start Translating in 5 Minutes

### Step 1: Choose a Story (1 min)

Check what's available:

```bash
cat src/data/translations/index.json
```

Or just look at the files:

```bash
ls src/data/translations/*_en.json
```

### Step 2: Copy the File (30 seconds)

```bash
# For Spanish
cp src/data/translations/story-3_en.json src/data/translations/story-3_es.json

# For French
cp src/data/translations/story-3_en.json src/data/translations/story-3_fr.json

# For German
cp src/data/translations/story-3_en.json src/data/translations/story-3_de.json
```

### Step 3: Update Language Code (30 seconds)

Open your new file and change:

```json
{
  "meta": {
    "language": "es" // ← Change this (was "en")
  }
}
```

### Step 4: Translate! (Rest of the time)

Translate these fields:

- `story.title`
- `story.description`
- `nodes[].title`
- `nodes[].narration`
- `choices[].text`
- `choices[].description`

**DON'T change any `id` fields!**

### Step 5: Validate (1 min)

```bash
cat src/data/translations/story-3_es.json | jq . > /dev/null
```

If it says nothing = ✅ Valid!
If it shows error = ❌ Fix JSON syntax

## 📖 Example

### Before (English)

```json
{
  "meta": {
    "storyId": "story-3",
    "language": "en"
  },
  "story": {
    "title": "The Time Loop Paradox",
    "description": "Trapped in a repeating day..."
  },
  "nodes": [
    {
      "id": "tl-1",
      "title": "Morning Again",
      "narration": "Your alarm rings at 7:00 AM. Again...",
      "choices": [
        {
          "id": "tl-c1",
          "text": "Check your journal"
        }
      ]
    }
  ]
}
```

### After (Spanish)

```json
{
  "meta": {
    "storyId": "story-3",
    "language": "es" // ← Changed
  },
  "story": {
    "title": "La Paradoja del Bucle Temporal", // ← Translated
    "description": "Atrapado en un día que se repite..." // ← Translated
  },
  "nodes": [
    {
      "id": "tl-1", // ← NOT changed
      "title": "Mañana Otra Vez", // ← Translated
      "narration": "Tu alarma suena a las 7:00 AM. Otra vez...", // ← Translated
      "choices": [
        {
          "id": "tl-c1", // ← NOT changed
          "text": "Revisar tu diario" // ← Translated
        }
      ]
    }
  ]
}
```

## ✅ Checklist

- [ ] Copied English file
- [ ] Changed language code in meta
- [ ] Translated story title
- [ ] Translated story description
- [ ] Translated all node titles
- [ ] Translated all narrations
- [ ] Translated all choice text
- [ ] Kept all IDs unchanged
- [ ] Validated JSON syntax
- [ ] Tested in app (if possible)

## 🎯 Language Codes

| Language   | Code |
| ---------- | ---- |
| Spanish    | es   |
| French     | fr   |
| German     | de   |
| Italian    | it   |
| Portuguese | pt   |
| Russian    | ru   |
| Japanese   | ja   |
| Korean     | ko   |
| Chinese    | zh   |

## 📚 Need More Help?

- **Full Guide**: `TRANSLATION_PER_STORY_GUIDE.md`
- **Examples**: `story-3_en.json` and `story-3_es.json`
- **Summary**: `TRANSLATION_SYSTEM_SUMMARY.md`

## 🔧 Useful Commands

```bash
# Validate JSON
cat story-3_es.json | jq . > /dev/null

# Count words to translate
cat story-3_en.json | jq -r '.nodes[].narration' | wc -w

# Pretty print
cat story-3_es.json | jq .

# Check if translation exists
ls story-3_es.json 2>/dev/null && echo "Exists" || echo "Not found"
```

## 💡 Pro Tips

1. **Start small**: Begin with shorter stories (5-10 nodes)
2. **Use tools**: DeepL or Google Translate for first draft
3. **Review carefully**: Always have a native speaker check
4. **Keep consistent**: Use same terms throughout
5. **Preserve tone**: Match the emotional feel
6. **Test early**: Load in app to check formatting

## ⚠️ Common Mistakes

❌ Changing IDs
❌ Breaking JSON syntax
❌ Forgetting to update language code
❌ Not preserving line breaks (`\n`)
❌ Translating character names unnecessarily

## 🎉 That's It!

You're ready to translate. Start with one story and go from there!

**Happy translating!** 🌍📖✨
