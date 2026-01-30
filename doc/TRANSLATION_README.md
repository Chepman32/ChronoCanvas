# Story Translation System

## 📚 Overview

This translation system provides a complete, structured approach to translating all interactive story content into multiple languages.

## 🎯 What's Included

### Core Files

1. **`STORY_TRANSLATIONS_EN.json`** (315 KB)

   - Complete English source text for all 18 stories
   - 338 story nodes with full narrations
   - All titles, descriptions, and choice text
   - Ready for translation

2. **`scripts/extract_all_translations.js`**

   - Automated extraction script
   - Regenerates translation file from source
   - Run when stories are updated

3. **`TRANSLATION_GUIDE.md`**

   - Complete translation instructions
   - Best practices and guidelines
   - Quality assurance checklist

4. **`TRANSLATION_SUMMARY.md`**

   - Quick overview and statistics
   - Translation workflow
   - Time estimates

5. **`STORY_TRANSLATIONS_ES_SAMPLE.json`**
   - Example Spanish translation
   - Shows proper structure and format
   - Reference for translators

## 🚀 Quick Start

### For Translators

1. **Get the source file**

   ```bash
   # The English source is ready to use
   STORY_TRANSLATIONS_EN.json
   ```

2. **Create your language file**

   ```bash
   cp STORY_TRANSLATIONS_EN.json STORY_TRANSLATIONS_[LANG].json
   # Example: STORY_TRANSLATIONS_ES.json for Spanish
   ```

3. **Translate the content**

   - Open in your preferred editor
   - Translate all text fields
   - Keep JSON structure intact
   - See `STORY_TRANSLATIONS_ES_SAMPLE.json` for reference

4. **Validate and review**
   - Check JSON syntax
   - Review with native speaker
   - Test in app if possible

### For Developers

1. **Generate/Update source file**

   ```bash
   node scripts/extract_all_translations.js
   ```

2. **Add new language support**

   - Create translation file
   - Import in app
   - Add to language selector

3. **Integrate translations**
   ```javascript
   import enTranslations from './STORY_TRANSLATIONS_EN.json';
   import esTranslations from './STORY_TRANSLATIONS_ES.json';
   // etc.
   ```

## 📊 Content Statistics

- **Stories**: 18 complete interactive stories
- **Nodes**: 338 story scenes/chapters
- **Words**: ~50,000+ words to translate
- **Genres**: Fantasy, Sci-Fi, Romance, Mystery, Detective, Adventure
- **File Size**: 315 KB (English source)

## 🌍 Supported Languages

Ready to translate into:

- 🇪🇸 Spanish (ES)
- 🇫🇷 French (FR)
- 🇩🇪 German (DE)
- 🇯🇵 Japanese (JA)
- 🇰🇷 Korean (KO)
- 🇵🇹 Portuguese (PT)
- 🇷🇺 Russian (RU)
- 🇺🇦 Ukrainian (UK)
- 🇨🇳 Chinese (ZH)
- And more!

## 📖 Story List

1. **The Enchanted Forest** - Fantasy/Adventure
2. **Neon Nights** - Sci-Fi/Mystery
3. **The Time Loop Paradox** - Sci-Fi/Mystery
4. **Abyssal Secrets** - Mystery/Adventure
5. **The Midnight Curator** - Detective/Mystery
6. **Midnight Missing** - Detective/Mystery
7. **Shadows of the Vanished Star** - Detective/Mystery
8. **The Midnight Caller** - Detective/Mystery
9. **The Timekeeper's Heart** - Romance/Sci-Fi
10. **The Midnight Garden** - Romance/Fantasy
11. **The Last Letter** - Romance/Mystery
12. **Heartline Rewind** - Romance/Sci-Fi
13. **Letters on the Wind** - Romance/Adventure
14. **City of Second Chances** - Romance
15. **Echoes of the Moonlit Grove** - Fantasy/Adventure
16. **Paradox Palette** - Sci-Fi/Mystery
17. **Ember Crown Oath** - Fantasy/Adventure
18. **Rootweaver's Pact** - Fantasy/Mystery

## 🔧 File Structure

```
STORY_TRANSLATIONS_[LANG].json
├── meta
│   ├── version
│   ├── language
│   ├── description
│   └── totalStories
└── stories
    └── [story-id]
        ├── metadata
        │   ├── title
        │   ├── author
        │   └── description
        └── nodes[]
            ├── id
            ├── type
            ├── title
            ├── narration
            └── choices[]
                ├── text
                └── description
```

## ⏱️ Translation Time Estimates

Per language (professional translation):

- **Story metadata**: 2-3 hours
- **Node titles**: 2-3 hours
- **Narrations**: 20-30 hours
- **Choice text**: 3-4 hours
- **Review & polish**: 5-10 hours

**Total**: 30-50 hours per language

## ✅ Quality Checklist

Before submitting translations:

- [ ] All text translated (no English remains)
- [ ] JSON syntax is valid
- [ ] Character names consistent
- [ ] Tone matches original
- [ ] Native speaker reviewed
- [ ] Tested in app
- [ ] Special characters preserved
- [ ] Line breaks maintained

## 🛠️ Tools & Resources

### Translation Tools

- **DeepL**: High-quality machine translation
- **Google Translate**: Quick reference
- **Context.reverso.net**: Idiomatic expressions

### Validation Tools

- **JSONLint**: Validate JSON syntax
- **VS Code**: JSON editing with validation
- **jq**: Command-line JSON processor

### Testing

- Test in app with actual UI
- Check text fits in buttons/cards
- Verify special characters render correctly

## 📝 Translation Guidelines

### Do's

✅ Maintain the story's emotional tone
✅ Adapt cultural references appropriately
✅ Keep character names consistent
✅ Preserve formatting (line breaks, etc.)
✅ Consider regional language variations

### Don'ts

❌ Don't translate proper nouns unnecessarily
❌ Don't change the story's meaning
❌ Don't break JSON syntax
❌ Don't ignore context
❌ Don't skip quality review

## 🔄 Maintenance

### When Stories Update

1. Run extraction script:

   ```bash
   node scripts/extract_all_translations.js
   ```

2. Compare with existing translations:

   ```bash
   # Use diff tools to find changes
   diff STORY_TRANSLATIONS_EN.json STORY_TRANSLATIONS_EN_OLD.json
   ```

3. Update only changed content in translation files

4. Increment version numbers

## 📞 Support

### Documentation

- `TRANSLATION_GUIDE.md` - Detailed instructions
- `TRANSLATION_SUMMARY.md` - Quick overview
- `STORY_TRANSLATIONS_ES_SAMPLE.json` - Example translation

### Questions?

- Check existing translations for reference
- Review source story files in `src/data/`
- Consult the localization implementation

## 🎨 Example

### English

```json
{
  "title": "The Forest Entrance",
  "narration": "You stand at the edge of an ancient forest...",
  "choices": [
    {
      "text": "Follow the worn path",
      "description": "The path looks well-traveled"
    }
  ]
}
```

### Spanish

```json
{
  "title": "La Entrada del Bosque",
  "narration": "Te encuentras al borde de un bosque ancestral...",
  "choices": [
    {
      "text": "Seguir el camino gastado",
      "description": "El camino parece muy transitado"
    }
  ]
}
```

## 🚢 Deployment

Once translations are complete:

1. Place files in `src/data/localizations/`
2. Import in app configuration
3. Add to language selector
4. Test thoroughly
5. Deploy with app update

## 📄 License

Translations should maintain the same license as the original content.

---

**Ready to bring these stories to the world!** 🌍✨📖

For detailed instructions, see `TRANSLATION_GUIDE.md`
