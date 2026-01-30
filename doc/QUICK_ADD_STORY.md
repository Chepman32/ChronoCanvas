# Quick Add Story Guide

## 🚀 Fastest Way (30 seconds)

### Step 1: Run the command

```bash
npm run add-story pirates
```

Replace `pirates` with your story name (one word, lowercase).

### Step 2: Edit the generated file

The script creates: `src/data/story14_pirates.ts`

Open it and replace the template with your story content.

### Step 3: Run the app

```bash
npm run ios
```

**Done!** Your story appears on the home screen.

---

## 📋 What the Script Does

1. ✅ Creates a new story file with proper template
2. ✅ Generates unique story ID automatically
3. ✅ Adds import to `sampleStories.ts`
4. ✅ Adds story to the story array
5. ✅ Sets up proper TypeScript structure

---

## 💡 Examples

### Create a pirate adventure:

```bash
npm run add-story pirates
```

Creates: `src/data/story14_pirates.ts` with `piratesStory` export

### Create a vampire story:

```bash
npm run add-story vampire
```

Creates: `src/data/story15_vampire.ts` with `vampireStory` export

### Create a western story:

```bash
npm run add-story western
```

Creates: `src/data/story16_western.ts` with `westernStory` export

---

## 📝 After Running the Script

You'll see output like:

```
Creating new story: pirates
Story number: 14
File: src/data/story14_pirates.ts
✓ Created story file
✓ Added import to sampleStories.ts
✓ Added story to array

✓ Story setup complete!

Next steps:
1. Edit src/data/story14_pirates.ts
2. Replace the template with your story content
3. Run: npm run ios

File location: src/data/story14_pirates.ts
```

---

## 🎨 Template Structure

The generated file looks like this:

```typescript
import { Story } from '../types';

export const piratesStory: Story = {
  id: 'story-14',
  title: 'Your Story Title',
  description: 'Your story description here.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400',
  author: 'Your Name',
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
      title: 'The Beginning',
      imageUrl:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration:
        'Your story starts here. Replace this with your actual story content.',
      choices: [
        {
          id: 'story-14-c1',
          text: 'Choice 1',
          targetNodeId: 'story-14-2',
          order: 1,
        },
        {
          id: 'story-14-c2',
          text: 'Choice 2',
          targetNodeId: 'story-14-3',
          order: 2,
        },
      ],
    },
    // Add more nodes here
    {
      id: 'story-14-20',
      storyId: 'story-14',
      type: 'ending',
      title: 'The End',
      imageUrl:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration: 'Your story concludes here.',
      choices: [],
    },
  ],
};
```

Just replace the placeholder content with your actual story!

---

## 🔄 Workflow

### Option 1: Write Your Own Story

1. Run: `npm run add-story mystory`
2. Edit the generated file
3. Write your nodes and choices
4. Test: `npm run ios`

### Option 2: Use AI to Generate

1. Use the prompt from `STORY_GENERATION_PROMPT.md`
2. Get story from ChatGPT/Claude
3. Run: `npm run add-story mystory`
4. Paste AI-generated content into the file
5. Test: `npm run ios`

---

## ⚠️ Important Notes

- **Story name**: Use one word, lowercase (e.g., `pirates`, `vampire`, `western`)
- **Story ID**: Automatically generated as `story-14`, `story-15`, etc.
- **File name**: Automatically generated as `story14_pirates.ts`
- **Export name**: Automatically generated as `piratesStory`

---

## 🐛 Troubleshooting

### Script doesn't run

```bash
# Make sure you're in the project root
cd ChronoCanvas

# Try with node directly
node scripts/add-story.js pirates
```

### Story doesn't appear

- Check `src/data/sampleStories.ts` - is your story imported and in the array?
- Run `npm run ios` to rebuild

### TypeScript errors

- Make sure all node IDs are unique
- Verify all `targetNodeId` values point to existing nodes
- Check that first node has `type: 'start'`
- Ensure ending nodes have empty `choices: []`

---

## 📚 More Resources

- **[HOW_TO_ADD_STORY.md](HOW_TO_ADD_STORY.md)** - Detailed manual process
- **[STORY_GENERATION_PROMPT.md](STORY_GENERATION_PROMPT.md)** - AI generation guide
- **[STORY_CATALOG.md](STORY_CATALOG.md)** - See all existing stories

---

## 🎯 Pro Tips

1. **Start small**: Create a 10-node story first to test the process
2. **Use AI**: Generate stories with ChatGPT using our prompt template
3. **Test often**: Run `npm run ios` after adding each story
4. **Reuse images**: Use the same Unsplash URLs across similar scenes
5. **Plan branches**: Sketch your story tree before coding

---

**Time to add a story**: 30 seconds (setup) + your writing time  
**Difficulty**: Super Easy  
**Automation**: Full
