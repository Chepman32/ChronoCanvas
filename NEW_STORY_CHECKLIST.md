# New Story Checklist

Use this checklist when adding new stories to FableFlow to ensure they meet all requirements.

---

## 1. STRUCTURE REQUIREMENTS

### Depth (CRITICAL)
- [ ] **Minimum 10 decision layers** before ANY ending
- [ ] No shortcuts to endings - all paths must traverse full depth
- [ ] Endings can ONLY exist at layer 11 or deeper
- [ ] Use diamond structure: paths branch then converge at each layer

### Node Count
- [ ] Total nodes: 20-45 (start + decision + ending nodes)
- [ ] Decision nodes: 15-30
- [ ] Ending nodes: 4-8 (minimum 4 different endings)
- [ ] No orphaned nodes (all nodes reachable from start)
- [ ] No dead-end decision nodes (all decision nodes have 2+ choices)

### Choice Structure
- [ ] Each decision node has exactly 2 choices
- [ ] All choice `targetNodeId` values must point to existing nodes
- [ ] Layer N nodes only connect to Layer N+1 nodes (no skipping)
- [ ] Choice IDs unique within story (format: `choice-{number}`)

---

## 2. CONTENT REQUIREMENTS

### Narration Length
- [ ] Each narration: 300-600 characters
- [ ] Start node: can be longer (400-700 characters)
- [ ] Ending nodes: 250-500 characters

### Story Quality
- [ ] Engaging narrative with clear stakes
- [ ] Meaningful choices that affect the story
- [ ] Logical progression between scenes
- [ ] Genre-appropriate tone and atmosphere
- [ ] No plot holes or inconsistent logic

### ASCII Only (CRITICAL)
- [ ] No curly double quotes: `"` or `"` → use `"`
- [ ] No curly single quotes: `'` or `'` → use `'`
- [ ] No em-dashes: `—` → use `--` or `-`
- [ ] No ellipsis: `…` → use `...`
- [ ] No other Unicode special characters

**Characters to search/replace:**
```
" → "
" → "
' → '
' → '
— → --
… → ...
```

---

## 3. TYPE-SCRIPT FORMAT

### File Structure
```typescript
import { Story } from '../types';

export const storyIdCamelCase: Story = {
  id: 'story-unique-id',
  title: 'Story Title',
  description: 'Compelling description...',
  coverImageUrl: 'https://images.unsplash.com/photo-XXX?w=800',
  thumbnailUrl: 'https://images.unsplash.com/photo-XXX?w=400',
  author: 'AI Story Generator',
  genre: 'mystery' | 'romance' | 'fantasy' | 'sci-fi' | 'thriller',
  involvement: 'low' | 'medium' | 'high',
  estimatedDuration: 30-60,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  totalNodes: 39,
  totalEndings: 4,
  startNodeId: 'node-1',
  nodes: [
    // nodes here
  ]
};
```

### Node Format
```typescript
{
  id: 'node-1',
  storyId: 'story-unique-id',
  type: 'start' | 'decision' | 'ending',
  title: 'Scene Title',
  imageUrl: 'https://images.unsplash.com/photo-XXX?w=800',
  narration: 'Scene narration text...',
  choices: [
    {
      id: 'choice-1',
      text: 'Choice description...',
      targetNodeId: 'node-2',
      order: 1
    }
  ]
}
```

### String Requirements
- [ ] Use single quotes ONLY for all strings (no double quotes)
- [ ] Escape single quotes in text: `it\'s`, `don\'t`, `Thorne\'s`
- [ ] No template literals for story content

---

## 4. IMAGE REQUIREMENTS

### Image Sources
- [ ] Use only `images.unsplash.com` URLs
- [ ] All images must return HTTP 200 (verified with curl)
- [ ] Image format: `https://images.unsplash.com/photo-{ID}?w=800`
- [ ] Thumbnail format: `https://images.unsplash.com/photo-{ID}?w=400`

### Image Verification
Test each URL:
```bash
curl -sI "URL" | head -1
# Should return: HTTP/2 200
```

### Image Relevance
- [ ] Images match the scene content and mood
- [ ] Consistent visual style across story
- [ ] Cover image represents the story genre

### Working Unsplash Photo IDs by Theme

**Mystery/Noir:**
- Rainy streets: `1514315384763-ba401779410f`
- Foggy alleys: `1478436127897-769e1b3f0f36`
- Detective/office: `1497215728101-856f4ea42174`
- Noir city: `1494587351196-bbf5f29cff42`
- Dark interior: `1510520434124-5bc7e6423c78`

**Steampunk/Victorian:**
- Gears: `1505664194779-8beaceb93744`
- Pocket watch: `1509048191080-d2984bad6ae5`
- Steam train: `1470167290877-7d5d3446de4c`
- Library: `1481627834876-b7833e8f5570`
- Workshop: `1535535112387-56ffe8db21ff`

**Fantasy:**
- Forest: `1441974231531-c6227db76b6e`
- Castle: `1518709268805-4e9042af9f23`
- Magic: `1518065896238-e3a3a0832fff`

**Sci-Fi:**
- Space: `1451187580459-43490279c0fa`
- Future city: `1485827404703-89b55fcc595e`
- Technology: `1518770660439-4636190af475`

---

## 5. AGGREGATION

### Add to sampleStories.ts
- [ ] Import the story: `import { storyName } from './story_filename'`
- [ ] Add to `sampleStories` array
- [ ] Place in appropriate position (alphabetical or by genre)

### Import Pattern
```typescript
import { velvetGuillotineStory } from './story_velvet_guillotine';

export const sampleStories: Story[] = [
  // ... other stories
  velvetGuillotineStory,
];
```

---

## 6. VERIFICATION STEPS

### 1. TypeScript Compilation
```bash
npx tsc --noEmit --skipLibCheck src/data/story_filename.ts
```
Expected: No errors

### 2. Depth Verification
```bash
node -e "
const story = require('./src/data/story_filename');
// BFS to find minimum depth to any ending
// Should be >= 10
"
```

### 3. Image URL Verification
```bash
curl -sI \"URL\" | head -1 | grep \"200\"
```

### 4. ASCII Check
```bash
grep -n $'[\u201c\u201d\u2018\u2019\u2014]' src/data/story_filename.ts
```
Expected: No matches

---

## 7. COMMON MISTAKES TO AVOID

### Structure Mistakes
- ❌ Ending at layer 5 (only 4 choices)
- ❌ Choice leading from layer 2 to layer 8 (skipping)
- ❌ Node with no incoming choices (orphan)
- ❌ Decision node with only 1 choice

### Content Mistakes
- ❌ Narration too short (< 250 chars) or too long (> 700 chars)
- ❌ Curly quotes in text
- ❌ Em-dashes instead of double hyphens
- ❌ Unicode ellipsis instead of three dots

### Technical Mistakes
- ❌ Double quotes in strings
- ❌ Unescaped single quotes (apostrophes)
- ❌ Broken image URLs (404 errors)
- ❌ Missing storyId in nodes
- ❌ Duplicate choice IDs

---

## 8. EXAMPLE: PROPER LAYER STRUCTURE

```
Layer 0: node-1 (start)
Layer 1: node-2, node-3
Layer 2: node-4, node-5, node-6, node-7
Layer 3: node-8, node-9 (from 4,5) + node-10, node-11 (from 6,7)
Layer 4: node-12, node-13 (from 8,9) + node-14, node-15 (from 10,11)
Layer 5: node-16, node-17 (from 12,14) + node-18, node-19 (from 13,15)
...continue until...
Layer 10: ENDINGS node-XX, node-YY, node-ZZ, node-WW
```

---

## Quick Reference: Validation Commands

```bash
# Compile TypeScript
npx tsc --noEmit --skipLibCheck src/data/story_*.ts

# Check for curly quotes
grep -n $'[\u201c\u201d\u2018\u2019]' src/data/story_filename.ts

# Check for em-dashes
grep -n $'\u2014' src/data/story_filename.ts

# Test image URL
curl -sI "URL" | head -1

# Count nodes
grep -c "id: 'node-" src/data/story_filename.ts
```

---

**Last Updated:** 2025-01-30
