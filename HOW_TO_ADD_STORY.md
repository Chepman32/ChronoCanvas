# How to Add a New Story to ChronoCanvas

## Quick 3-Step Process

### Step 1: Create the Story File

Create a new file in `src/data/` folder:

```
src/data/story14_yourname.ts
```

**Naming convention**: `story[number]_[shortname].ts`

Example: `story14_pirates.ts`, `story15_vampire.ts`

### Step 2: Paste Your Story Code

Open the new file and paste this template:

```typescript
import { Story } from '../types';

export const yourStoryName: Story = {
  // Paste your generated story here
  id: 'story-14',
  title: 'Your Story Title',
  description: 'Your story description',
  // ... rest of your story
};
```

**Important**:

- Change `yourStoryName` to match your story (e.g., `piratesStory`, `vampireStory`)
- Make sure the `id` is unique (e.g., 'story-14', 'story-15')

### Step 3: Add to Story List

Open `src/data/sampleStories.ts` and add two lines:

**At the top** (with other imports):

```typescript
import { yourStoryName } from './story14_yourname';
```

**At the bottom** (in the array):

```typescript
export const sampleStories: Story[] = [
  ...originalStories,
  timeLoopStory,
  ...newStories,
  yourStoryName, // ← Add this line
];
```

**Done!** Run the app and your story will appear on the home screen.

---

## Complete Example

Let's say you generated a pirate adventure story. Here's exactly what to do:

### 1. Create File: `src/data/story14_pirates.ts`

```typescript
import { Story } from '../types';

export const piratesStory: Story = {
  id: 'story-14',
  title: 'Treasure of the Seven Seas',
  description:
    'Sail the high seas as a pirate captain seeking legendary treasure.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
  author: 'Captain Blackbeard',
  genre: ['adventure'],
  difficulty: 'medium',
  estimatedDuration: 30,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-20',
  updatedAt: '2025-01-20',
  totalNodes: 20,
  totalEndings: 3,
  startNodeId: 'story-14-1',
  nodes: [
    {
      id: 'story-14-1',
      storyId: 'story-14',
      type: 'start',
      title: 'The Tavern',
      imageUrl:
        'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800',
      narration:
        'You sit in a smoky tavern when an old sailor approaches with a map...',
      choices: [
        {
          id: 'story-14-c1',
          text: 'Listen to his tale',
          targetNodeId: 'story-14-2',
          order: 1,
        },
        {
          id: 'story-14-c2',
          text: 'Ignore him',
          targetNodeId: 'story-14-3',
          order: 2,
        },
      ],
    },
    // ... rest of your nodes
  ],
};
```

### 2. Open `src/data/sampleStories.ts`

Find the imports at the top and add:

```typescript
import { piratesStory } from './story14_pirates';
```

Find the export at the bottom and add:

```typescript
export const sampleStories: Story[] = [
  ...originalStories,
  timeLoopStory,
  ...newStories,
  piratesStory, // ← Your new story
];
```

### 3. Test It

```bash
npm run ios
```

Your story will appear on the home screen! 🎉

---

## Troubleshooting

### ❌ Story doesn't appear

- Check that you imported it in `sampleStories.ts`
- Check that you added it to the array
- Make sure the file name matches the import

### ❌ TypeScript errors

- Make sure all required fields are present
- Check that `id` format is correct: 'story-[number]'
- Verify all node IDs are unique
- Ensure all `targetNodeId` values point to existing nodes

### ❌ Images don't load

- Use valid Unsplash URLs
- Format: `https://images.unsplash.com/photo-[id]?w=800`
- Test URLs in browser first

### ❌ App crashes

- Check for syntax errors (missing commas, brackets)
- Verify all choices have valid `targetNodeId`
- Make sure first node has `type: 'start'`
- Ensure ending nodes have empty `choices: []`

---

## Quick Checklist

Before running the app, verify:

- [ ] Created new file in `src/data/`
- [ ] Pasted story code with proper format
- [ ] Unique story ID (e.g., 'story-14')
- [ ] Exported story with unique name
- [ ] Imported in `sampleStories.ts`
- [ ] Added to sampleStories array
- [ ] All nodes have unique IDs
- [ ] First node is type 'start'
- [ ] Ending nodes have empty choices
- [ ] All targetNodeIds are valid

---

## Advanced: Premium Stories

To make your story premium:

1. Set `isPremium: true`
2. Add `productId: 'com.app.story.your-story-name'`
3. Story will show with gold badge and lock icon

Example:

```typescript
{
  isPremium: true,
  productId: 'com.app.story.pirates-treasure',
  // ... rest of story
}
```

---

## Multiple Stories at Once

Adding several stories? Do this:

### Create all story files:

```
src/data/story14_pirates.ts
src/data/story15_vampire.ts
src/data/story16_western.ts
```

### Import all at once:

```typescript
import { piratesStory } from './story14_pirates';
import { vampireStory } from './story15_vampire';
import { westernStory } from './story16_western';
```

### Add all to array:

```typescript
export const sampleStories: Story[] = [
  ...originalStories,
  timeLoopStory,
  ...newStories,
  piratesStory,
  vampireStory,
  westernStory,
];
```

---

## File Structure Reference

```
src/
├── data/
│   ├── sampleStories.ts          ← Edit this (add imports and array item)
│   ├── story3_timeloop.ts         ← Existing stories
│   ├── newStories.ts              ← Existing stories
│   └── story14_yourname.ts        ← Your new story (create this)
├── screens/
├── store/
└── types/
```

---

## Need Help?

1. Check `STORY_GENERATION_PROMPT.md` for story format
2. Look at existing stories in `src/data/` for examples
3. Use TypeScript errors to find issues
4. Test in simulator frequently

---

**Pro Tip**: Start with a small story (10-15 nodes) to test the process, then create larger ones once you're comfortable!

---

**Last Updated**: October 2025  
**Difficulty**: Easy  
**Time Required**: 2-5 minutes per story
