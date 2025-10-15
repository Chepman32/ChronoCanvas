# Translation Progress Tracker

## Overview

This document tracks the translation status for all 9 target languages in the story localization project.

## Translation Files Status

| Language   | Code | File                 | Status      | Notes                               |
| ---------- | ---- | -------------------- | ----------- | ----------------------------------- |
| Russian    | ru   | TRANSLATIONS_ru.json | ✅ COMPLETE | Fully translated                    |
| Spanish    | es   | TRANSLATIONS_es.json | ⏳ PENDING  | Template created, needs translation |
| German     | de   | TRANSLATIONS_de.json | ⏳ PENDING  | Template created, needs translation |
| French     | fr   | TRANSLATIONS_fr.json | ⏳ PENDING  | Template created, needs translation |
| Portuguese | pt   | TRANSLATIONS_pt.json | ⏳ PENDING  | Template created, needs translation |
| Japanese   | ja   | TRANSLATIONS_ja.json | ⏳ PENDING  | Template created, needs translation |
| Chinese    | zh   | TRANSLATIONS_zh.json | ⏳ PENDING  | Template created, needs translation |
| Korean     | ko   | TRANSLATIONS_ko.json | ⏳ PENDING  | Template created, needs translation |
| Ukrainian  | uk   | TRANSLATIONS_uk.json | ⏳ PENDING  | Template created, needs translation |

## Source Material

- **TRANSLATION_SOURCE.json** - Contains all English text that needs translation
- Total stories to translate: 3 detective/mystery stories
- Total nodes: ~65 story nodes
- Total choices: ~96 choice options

## Next Steps

### For Translation Service/Team:

1. Use TRANSLATION_SOURCE.json as the base
2. For each language, copy the entire JSON structure
3. Translate ONLY the text values (not keys or IDs)
4. Maintain exact JSON structure and formatting
5. Save as TRANSLATIONS\_[LANG_CODE].json

### Fields to Translate:

- ✅ `title` - Story and node titles
- ✅ `description` - Story descriptions
- ✅ `author` - Author names (optional, can keep English)
- ✅ `genres` - Genre labels
- ✅ `narration` - Full narrative text
- ✅ `text` - Choice text
- ✅ Choice `description` - Choice descriptions

### Fields to NEVER Translate:

- ❌ `storyId` - Keep as-is
- ❌ `nodeId` - Keep as-is
- ❌ `choiceId` - Keep as-is
- ❌ Any field ending in "Id"
- ❌ JSON keys/property names

## Translation Quality Guidelines

1. **Maintain tone and atmosphere** - These are detective/mystery stories with suspense
2. **Preserve formatting** - Keep markdown bold (**text**) and italics where present
3. **Cultural adaptation** - Adapt idioms and expressions appropriately
4. **Character consistency** - Keep character names consistent throughout
5. **Choice clarity** - Ensure player choices remain clear and distinct

## Integration Status

Once translations are complete:

- [ ] Import translations into app localization system
- [ ] Test each language in the app
- [ ] Verify all story nodes display correctly
- [ ] Check for text overflow issues in UI
- [ ] Validate choice selections work properly

## Contact

For questions about translation requirements or technical integration, refer to:

- TRANSLATION_WORKFLOW.md - Detailed workflow documentation
- LOCALIZATION.md - App localization architecture
