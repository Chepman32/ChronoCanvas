# Translation Quick Start

## 🚀 Start Translating in 5 Minutes

### Step 1: Choose a Story (1 min)

Check what's available:

```bash
ls src/data/translations/
```

You'll see folders like:

- `story-3/`
- `story-847362910/`
- `story-9123457712345/`
- etc.

### Step 2: Go to the Story Folder (30 seconds)

```bash
cd src/data/translations/story-3
```

### Step 3: Copy the English File (30 seconds)

```bash
# For Spanish
cp en.json es.json

# For French
cp en.json fr.json

# For German
cp en.json de.json
```

### Step 4: Update Language Code (30 seconds)

Open your new file and change:

```json
{
  "meta": {
    "language": "es" // ← Change this (was "en")
  }
}
```

### Step 5: Translate! (Rest of the time)

Translate these fields:

- `story.title`
- `story.description`
- `nodes[].title`
- `nodes[].narration`
- `choices[].text`
- `choices[].description`

**DON'T change any `id` fields!**

### Step 6: Validate (1 min)

```bash
cat es.json | jq . > /dev/null
```

If it says nothing = ✅ Valid!
If it shows error = ❌ Fix JSON syntax

## 📁 Folder Structure

```
translations/
├── story-3/
│   ├── en.json     ← English (source)
│   ├── es.json     ← Spanish (you create this)
│   └── fr.json     ← French (you create this)
├── story-847362910/
│   ├── en.json
│   └── es.json
└── ...
```

## 📖 Example

### Before (English - en.json)

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

### After (Spanish - es.json)

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

- [ ] Chose a story folder
- [ ] Copied en.json to [language].json
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

| Language   | Code | File Name |
| ---------- | ---- | --------- |
| Spanish    | es   | es.json   |
| French     | fr   | fr.json   |
| German     | de   | de.json   |
| Italian    | it   | it.json   |
| Portuguese | pt   | pt.json   |
| Russian    | ru   | ru.json   |
| Japanese   | ja   | ja.json   |
| Korean     | ko   | ko.json   |
| Chinese    | zh   | zh.json   |

## 📚 Need More Help?

- **Full Guide**: `TRANSLATION_PER_STORY_GUIDE.md`
- **Examples**: `src/data/translations/story-3/en.json` and `es.json`
- **Summary**: `TRANSLATION_SYSTEM_SUMMARY.md`

## 🔧 Useful Commands

```bash
# Navigate to story folder
cd src/data/translations/story-3

# Copy for translation
cp en.json es.json

# Validate JSON
cat es.json | jq . > /dev/null

# Count words to translate
cat en.json | jq -r '.nodes[].narration' | wc -w

# Pretty print
cat es.json | jq .

# List all translations for this story
ls -la
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
❌ Putting file in wrong folder

## 🎉 That's It!

You're ready to translate. Start with one story and go from there!

**Happy translating!** 🌍📖✨

---

## Quick Command Reference

```bash
# List all stories
ls src/data/translations/

# Go to a story
cd src/data/translations/story-3

# Copy for Spanish
cp en.json es.json

# Validate
cat es.json | jq . > /dev/null && echo "✅ Valid" || echo "❌ Invalid"

# Go back to root
cd ../../../../
```
