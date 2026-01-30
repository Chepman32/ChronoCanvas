# Story Content Localization

## Overview

ChronoCanvas now supports full story content localization in 10 languages. Story titles, descriptions, narration, and choices are all translated manually for an authentic experience.

## Supported Languages

All story content translations are manually created (no automated translation) for:

- 🇬🇧 **English** (en) - Original
- 🇷🇺 **Russian** (ru) - Русский
- 🇪🇸 **Spanish** (es) - Español
- 🇩🇪 **German** (de) - Deutsch
- 🇫🇷 **French** (fr) - Français
- 🇵🇹 **Portuguese** (pt) - Português
- 🇯🇵 **Japanese** (ja) - 日本語
- 🇨🇳 **Chinese** (zh) - 中文
- 🇰🇷 **Korean** (ko) - 한국어
- 🇺🇦 **Ukrainian** (uk) - Українська

## Currently Localized Stories

### ✅ Abyssal Secrets (story-4)

- **Genre**: Mystery, Adventure
- **Status**: Fully translated in all 10 languages
- **Nodes**: 2 nodes with complete translations
- **File**: `src/data/localizations/story4_deepsea_i18n.ts`

## How It Works

### Automatic Language Switching

When a user changes their language in Settings, all story content automatically updates:

1. User selects a new language in Settings
2. Settings store triggers story refresh
3. Story store applies translations to all stories
4. UI immediately reflects the new language

### Translation Structure

Each story has a translation file with this structure:

```typescript
{
  title: "Story Title",
  description: "Story description",
  author: "Author Name",
  nodes: {
    'node-id': {
      title: "Node Title",
      narration: "Full narration text...",
      choices: {
        'choice-id': {
          text: "Choice text",
          description: "Optional choice description"
        }
      }
    }
  }
}
```

## Adding Translations for a New Story

### Step 1: Create Translation File

Create a new file in `src/data/localizations/`:

```typescript
// src/data/localizations/story1_timeloop_i18n.ts
import { Language } from '../../localization/translations';

export const timeloopStoryTranslations: Record<Language, StoryTranslations> = {
  en: {
    title: "The Timekeeper's Loop",
    description: 'Break free from an endless cycle...',
    author: 'Dr. Elena Chronos',
    nodes: {
      'tl-1': {
        title: 'The First Morning',
        narration: 'You wake up to the same alarm...',
        choices: {
          'tl-c1': { text: 'Hit snooze' },
          'tl-c2': { text: 'Get up immediately' },
        },
      },
    },
  },
  ru: {
    title: 'Петля Хранителя времени',
    description: 'Вырвитесь из бесконечного цикла...',
    author: 'Доктор Елена Хронос',
    nodes: {
      'tl-1': {
        title: 'Первое утро',
        narration: 'Вы просыпаетесь от того же будильника...',
        choices: {
          'tl-c1': { text: 'Отложить будильник' },
          'tl-c2': { text: 'Встать немедленно' },
        },
      },
    },
  },
  // ... add all 10 languages
};
```

### Step 2: Register in Index

Add to `src/data/localizations/index.ts`:

```typescript
import { timeloopStoryTranslations } from './story1_timeloop_i18n';

export const storyTranslationsRegistry = {
  'story-1': timeloopStoryTranslations,
  'story-4': deepSeaStoryTranslations,
  // ... other stories
};
```

### Step 3: Test

The story will automatically be localized when loaded!

## Translation Guidelines

### Quality Standards

All translations must be:

1. **Manually created** - No automated translation tools
2. **Contextually accurate** - Understand the story's tone and setting
3. **Culturally appropriate** - Adapt idioms and references
4. **Grammatically correct** - Native-level quality
5. **Consistent** - Use the same terminology throughout

### Tone and Style

- **Narration**: Maintain the atmospheric, immersive tone
- **Choices**: Keep them concise but clear
- **Character names**: Generally keep original, but adapt titles (Captain, Dr., etc.)
- **Technical terms**: Translate appropriately for the genre

### Examples of Good Translation

**English**: "Your submarine descends into the Mariana Trench."

**Russian** (Good): "Ваша подводная лодка опускается в Марианскую впадину."

- Natural word order
- Proper terminology
- Maintains tone

**Russian** (Bad): "Твоя подлодка идёт вниз в Марианский жёлоб."

- Too casual ("твоя" instead of "ваша")
- Informal terminology
- Loses atmosphere

### Character Limits

Be mindful of text length in different languages:

- **German**: Often 20-30% longer than English
- **Chinese/Japanese**: Often 30-40% shorter than English
- **Russian**: Similar to English, sometimes longer

Test UI with longer translations to ensure proper display.

## Translation Status

### Completed Stories

- ✅ Abyssal Secrets (story-4) - 10/10 languages

### Pending Translation

- ⏳ The Timekeeper's Loop (story-3)
- ⏳ Midnight Curator (story-midnight)
- ⏳ City of Second Chances (story-8742190384)
- ⏳ Echoes of the Moonlit Grove (story-8743921042)
- ⏳ The Paradox Palette (story-8923745610923)
- ⏳ The Last Letter (story-892746531)
- ⏳ Heartline Rewind (story-9123457712345)
- ⏳ Letters on the Wind (story-9328745634021)
- ⏳ The Ember Crown Oath (story-9845237719284)
- ⏳ The Rootweaver's Pact (story-9932045517721)
- ⏳ The Timekeeper's Heart (story-583921467)
- ⏳ The Midnight Garden (story-745829103)

## Technical Details

### Files Structure

```
src/
├── data/
│   └── localizations/
│       ├── index.ts                    # Translation registry
│       ├── story4_deepsea_i18n.ts     # Deep Sea translations
│       └── [other story translations]
├── utils/
│   └── storyLocalization.ts           # Localization utilities
└── store/
    └── storyStore.ts                  # Auto-applies translations
```

### How Localization is Applied

1. **On App Start**: Stories loaded with default language (English)
2. **On Language Change**:
   - Settings store updates language
   - Triggers `refreshLocalizedStories()` in story store
   - Story store applies translations to all base stories
   - UI re-renders with new content
3. **On Story Load**: Already localized stories are used

### Performance

- Translations are applied in-memory (no API calls)
- Minimal performance impact
- Stories are re-localized only on language change
- Original stories preserved in `baseStories`

## Future Enhancements

- [ ] Add translation progress tracking
- [ ] Create translation validation tools
- [ ] Add fallback language support (e.g., Spanish → English)
- [ ] Support for regional variants (pt-BR vs pt-PT)
- [ ] Translation memory for consistency
- [ ] Community translation contributions
- [ ] A/B testing for translation quality

## Contributing Translations

If you're a native speaker and want to contribute translations:

1. Choose an untranslated story
2. Create a translation file following the structure
3. Ensure all nodes and choices are translated
4. Test in the app
5. Submit for review

Quality over speed - we want authentic, engaging translations!
