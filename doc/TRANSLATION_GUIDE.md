# Story Translation Guide

## Overview

This guide explains how to use the `STORY_TRANSLATIONS_EN.json` file to translate all story content into other languages.

## File Structure

The JSON file contains:

```json
{
  "meta": {
    "version": "1.0",
    "language": "en",
    "description": "English source translations for all interactive stories",
    "generatedAt": "2025-10-15T15:29:11.496Z",
    "totalStories": 18
  },
  "stories": {
    "story-id": {
      "fileName": "story_file_name",
      "metadata": {
        "id": "story-id",
        "title": "Story Title",
        "author": "Author Name",
        "description": "Story description"
      },
      "nodes": [
        {
          "id": "node-id",
          "type": "start|decision|ending",
          "title": "Node Title",
          "narration": "Full narration text...",
          "choices": [
            {
              "id": "choice-id",
              "text": "Choice text",
              "description": "Optional choice description"
            }
          ]
        }
      ]
    }
  }
}
```

## Translation Process

### Step 1: Generate the English Source File

Run the extraction script to create the latest English translations:

```bash
node scripts/extract_all_translations.js
```

This creates `STORY_TRANSLATIONS_EN.json` with all current story content.

### Step 2: Create Language-Specific Files

Copy the English file for each target language:

```bash
cp STORY_TRANSLATIONS_EN.json STORY_TRANSLATIONS_ES.json  # Spanish
cp STORY_TRANSLATIONS_EN.json STORY_TRANSLATIONS_FR.json  # French
cp STORY_TRANSLATIONS_EN.json STORY_TRANSLATIONS_DE.json  # German
# etc.
```

### Step 3: Translate Content

For each language file, translate:

1. **Story Metadata**

   - `title`: Story title
   - `author`: Author name (usually keep original)
   - `description`: Story description

2. **Node Content**

   - `title`: Node/scene title
   - `narration`: Full narrative text (preserve line breaks with `\n`)

3. **Choice Content**
   - `text`: Choice button text
   - `description`: Optional choice description

### Step 4: Translation Guidelines

#### Preserve Formatting

- Keep `\n` for line breaks
- Maintain quotation marks and punctuation style appropriate for target language
- Preserve special characters and symbols

#### Context Matters

- Read the full narration to understand context
- Consider the story's tone (romantic, mysterious, adventurous, etc.)
- Maintain consistency in character names and terminology

#### Choice Text

- Keep choice text concise (fits on buttons)
- Ensure descriptions provide helpful context

#### Cultural Adaptation

- Adapt idioms and cultural references when necessary
- Maintain the story's emotional impact
- Consider regional variations (e.g., Spanish for Spain vs. Latin America)

## Example Translation

### English (Source)

```json
{
  "id": "node-1",
  "title": "The Forest Entrance",
  "narration": "You stand at the edge of an ancient forest. The trees tower above you...",
  "choices": [
    {
      "text": "Follow the worn path",
      "description": "The path looks well-traveled"
    }
  ]
}
```

### Spanish (Translated)

```json
{
  "id": "node-1",
  "title": "La Entrada del Bosque",
  "narration": "Te encuentras al borde de un bosque ancestral. Los árboles se elevan sobre ti...",
  "choices": [
    {
      "text": "Seguir el camino gastado",
      "description": "El camino parece muy transitado"
    }
  ]
}
```

## Quality Assurance

### Before Submitting Translations

1. **Completeness Check**

   - Verify all fields are translated
   - No English text remains (except proper nouns if appropriate)

2. **Consistency Check**

   - Character names are consistent
   - Terminology is consistent throughout
   - Tone matches the original

3. **Technical Check**

   - JSON syntax is valid
   - Special characters are properly escaped
   - Line breaks (`\n`) are preserved

4. **Review**
   - Have a native speaker review
   - Test in the app if possible
   - Check that text fits in UI elements

## Integration

Once translations are complete:

1. Place translated JSON files in `src/data/localizations/`
2. Update the app's language selector to include new languages
3. Test all stories in the new language
4. Verify text rendering and layout

## Statistics

Current English source file contains:

- **18 stories**
- **338 nodes** (scenes)
- **355 titles** (story + node titles)
- **~8,000 lines** of content

## Tools and Resources

### Recommended Translation Tools

- **DeepL**: High-quality machine translation for initial draft
- **Google Translate**: Quick reference
- **Context.reverso.net**: For idiomatic expressions
- **Native speakers**: Essential for final review

### JSON Validators

- [JSONLint](https://jsonlint.com/)
- VS Code with JSON extension
- `jq` command-line tool

### Character Limits

- Story titles: ~50 characters
- Node titles: ~40 characters
- Choice text: ~30 characters
- Descriptions: ~60 characters
- Narrations: No strict limit, but consider readability

## Maintenance

### Updating Translations

When new stories are added or existing ones are modified:

1. Re-run the extraction script
2. Compare with existing translation files
3. Translate only new/changed content
4. Maintain version numbers in meta section

### Version Control

- Keep translation files in version control
- Document major changes in commit messages
- Tag releases with language versions

## Support

For questions or issues:

- Check existing translations for reference
- Consult the main story files in `src/data/`
- Review the app's localization implementation

## License

Translations should maintain the same license as the original content.
