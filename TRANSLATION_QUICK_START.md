# Translation Quick Start Guide

## For Translators: How to Complete Your Translation

### Step 1: Get Your Files

You need two files:

1. **TRANSLATION_SOURCE.json** - The English source text
2. **TRANSLATIONS\_[YOUR_LANG].json** - Your target language file

### Step 2: Copy the Structure

1. Open TRANSLATION_SOURCE.json
2. Copy the ENTIRE contents
3. Paste into your TRANSLATIONS\_[LANG].json file (replacing the placeholder)

### Step 3: Translate

Go through the file and translate these fields:

```json
{
  "title": "Translate this",
  "description": "Translate this",
  "author": "Translate this (or keep English)",
  "genres": ["Translate", "these"],
  "narration": "Translate this long text...",
  "text": "Translate this",
  "choices": [
    {
      "text": "Translate this",
      "description": "Translate this"
    }
  ]
}
```

### Step 4: DO NOT Translate

Keep these EXACTLY as they are:

```json
{
  "storyId": "story-7481296", // ❌ DON'T CHANGE
  "nodeId": "story-7481296-1", // ❌ DON'T CHANGE
  "choiceId": "story-7481296-c1" // ❌ DON'T CHANGE
}
```

### Step 5: Special Formatting

Keep markdown formatting:

- `**bold text**` → `**translated bold text**`
- Keep line breaks and paragraph structure
- Preserve any special characters or symbols

### Step 6: Validate

Before submitting:

- ✅ Check JSON is valid (use a JSON validator)
- ✅ All IDs remain unchanged
- ✅ No missing translations
- ✅ Formatting preserved

## Language Assignments

| Language        | File                 | Translator  |
| --------------- | -------------------- | ----------- |
| Russian (ru)    | TRANSLATIONS_ru.json | ✅ Complete |
| Spanish (es)    | TRANSLATIONS_es.json | Pending     |
| German (de)     | TRANSLATIONS_de.json | Pending     |
| French (fr)     | TRANSLATIONS_fr.json | Pending     |
| Portuguese (pt) | TRANSLATIONS_pt.json | Pending     |
| Japanese (ja)   | TRANSLATIONS_ja.json | Pending     |
| Chinese (zh)    | TRANSLATIONS_zh.json | Pending     |
| Korean (ko)     | TRANSLATIONS_ko.json | Pending     |
| Ukrainian (uk)  | TRANSLATIONS_uk.json | Pending     |

## Example Translation

### Before (English):

```json
{
  "nodeId": "story-7481296-1",
  "title": "Missing at Midnight",
  "narration": "A neon-lit clock strikes midnight as you sit in your cramped office..."
}
```

### After (Spanish):

```json
{
  "nodeId": "story-7481296-1",
  "title": "Desaparecida a Medianoche",
  "narration": "Un reloj iluminado con neón marca la medianoche mientras te sientas en tu oficina estrecha..."
}
```

## Questions?

Refer to TRANSLATION_WORKFLOW.md for detailed technical information.
