# Translation Folder Structure

## Current Structure

```
src/data/translations/
│
├── index.json                          # Index of all stories
├── README.md                           # Quick reference guide
│
├── story-3/                            # The Time Loop Paradox
│   ├── en.json                        # English ✅
│   └── es.json                        # Spanish ✅
│
├── story-4/                            # Abyssal Secrets
│   └── en.json                        # English ✅
│
├── story-745829103/                    # The Midnight Garden
│   └── en.json                        # English ✅
│
├── story-7481296/                      # Midnight Missing
│   └── en.json                        # English ✅
│
├── story-8273910265/                   # Shadows of the Vanished Star
│   └── en.json                        # English ✅
│
├── story-847362910/                    # The Midnight Caller
│   └── en.json                        # English ✅
│
├── story-847362951/                    # The Midnight Curator
│   └── en.json                        # English ✅
│
├── story-8743921042/                   # Echoes of the Moonlit Grove
│   └── en.json                        # English ✅
│
├── story-8923745610923/                # Paradox Palette
│   └── en.json                        # English ✅
│
├── story-892746531/                    # The Last Letter
│   └── en.json                        # English ✅
│
├── story-9123457712345/                # Heartline Rewind
│   └── en.json                        # English ✅
│
├── story-9328745634021/                # Letters on the Wind
│   └── en.json                        # English ✅
│
├── story-9845237719284/                # Ember Crown Oath
│   └── en.json                        # English ✅
│
└── story-9932045517721/                # Rootweaver's Pact
    └── en.json                        # English ✅
```

## After Adding More Languages

```
src/data/translations/
│
├── story-3/                            # The Time Loop Paradox
│   ├── en.json                        # English ✅
│   ├── es.json                        # Spanish ✅
│   ├── fr.json                        # French (add this)
│   ├── de.json                        # German (add this)
│   ├── pt.json                        # Portuguese (add this)
│   └── ru.json                        # Russian (add this)
│
├── story-847362910/                    # The Midnight Caller
│   ├── en.json                        # English ✅
│   ├── es.json                        # Spanish (add this)
│   ├── fr.json                        # French (add this)
│   └── ja.json                        # Japanese (add this)
│
└── ...
```

## How to Add a Translation

### Example: Adding French to Story 3

```bash
# 1. Navigate to story folder
cd src/data/translations/story-3

# 2. Copy English file
cp en.json fr.json

# 3. Edit fr.json and change language code
# "language": "fr"

# 4. Translate all content

# 5. Validate
cat fr.json | jq . > /dev/null
```

### Result

```
story-3/
├── en.json     # English (original)
├── es.json     # Spanish (done)
└── fr.json     # French (new!) ✨
```

## File Naming Convention

| Language   | File Name | Example Path    |
| ---------- | --------- | --------------- |
| English    | en.json   | story-3/en.json |
| Spanish    | es.json   | story-3/es.json |
| French     | fr.json   | story-3/fr.json |
| German     | de.json   | story-3/de.json |
| Italian    | it.json   | story-3/it.json |
| Portuguese | pt.json   | story-3/pt.json |
| Russian    | ru.json   | story-3/ru.json |
| Japanese   | ja.json   | story-3/ja.json |
| Korean     | ko.json   | story-3/ko.json |
| Chinese    | zh.json   | story-3/zh.json |

## Benefits of This Structure

### ✅ Organized

- Each story in its own folder
- All languages for a story together
- Easy to find what you need

### ✅ Scalable

- Add 100+ languages without clutter
- Each folder stays manageable
- Clear separation between stories

### ✅ Maintainable

- Update one story without affecting others
- See all translations at a glance
- Easy to track progress

### ✅ Developer-Friendly

```typescript
// Simple import path
import en from './translations/story-3/en.json';
import es from './translations/story-3/es.json';
```

## Quick Commands

```bash
# List all stories
ls src/data/translations/

# See translations for a story
ls src/data/translations/story-3/

# Add Spanish to all stories
for dir in src/data/translations/story-*/; do
  cd "$dir"
  [ -f en.json ] && [ ! -f es.json ] && cp en.json es.json
  cd -
done

# Find stories missing French
for dir in src/data/translations/story-*/; do
  [ ! -f "$dir/fr.json" ] && echo "Missing French: $(basename $dir)"
done

# Count total translation files
find src/data/translations -name "*.json" -not -name "index.json" | wc -l
```

## Progress Tracking

Track which stories have which languages:

```bash
# Create a progress report
echo "Story | EN | ES | FR | DE"
echo "------|----|----|----|----|"
for dir in src/data/translations/story-*/; do
  story=$(basename "$dir")
  en=$([ -f "$dir/en.json" ] && echo "✅" || echo "❌")
  es=$([ -f "$dir/es.json" ] && echo "✅" || echo "❌")
  fr=$([ -f "$dir/fr.json" ] && echo "✅" || echo "❌")
  de=$([ -f "$dir/de.json" ] && echo "✅" || echo "❌")
  echo "$story | $en | $es | $fr | $de"
done
```

## Next Steps

1. **Choose a story** from the list above
2. **Navigate** to its folder
3. **Copy** en.json to your language
4. **Translate** the content
5. **Validate** the JSON
6. **Done!** ✅

---

**See `TRANSLATION_QUICKSTART.md` for detailed instructions** 🚀
