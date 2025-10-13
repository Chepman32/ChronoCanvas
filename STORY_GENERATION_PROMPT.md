# Story Generation Prompt Template

Use this prompt template with any AI chatbot (ChatGPT, Claude, etc.) to generate new stories for ChronoCanvas.

---

## 📝 Prompt Template

````
I need you to create an interactive story for a React Native mobile app called ChronoCanvas.
The story should follow this exact TypeScript structure:

STORY REQUIREMENTS:
- Title: [Your Story Title]
- Genre: [Choose 1-2: fantasy, scifi, mystery, romance, horror, adventure]
- Difficulty: [easy, medium, or hard]
- Duration: [20-45 minutes]
- Premium: [true or false]
- Number of nodes: [20-26 nodes]
- Number of endings: [2-5 unique endings]

STORY STRUCTURE:
Generate a complete Story object with this TypeScript interface:

```typescript
{
  id: 'story-[number]',
  title: '[Story Title]',
  description: '[2-3 sentence hook that makes readers want to play]',
  coverImageUrl: 'https://images.unsplash.com/photo-[id]?w=800',
  thumbnailUrl: 'https://images.unsplash.com/photo-[id]?w=400',
  author: '[Author Name]',
  genre: ['[genre1]', '[genre2]'],
  difficulty: '[easy/medium/hard]',
  estimatedDuration: [number in minutes],
  isPremium: [true/false],
  productId: '[if premium: com.app.story.story-name]',
  version: '1.0',
  createdAt: '2025-01-[date]',
  updatedAt: '2025-01-[date]',
  totalNodes: [20-26],
  totalEndings: [2-5],
  startNodeId: '[story-id]-1',
  nodes: [
    // Generate 20-26 nodes following this pattern
  ]
}
````

NODE STRUCTURE:
Each node must follow this format:

```typescript
{
  id: '[story-id]-[number]',
  storyId: '[story-id]',
  type: 'start' | 'decision' | 'ending',
  title: '[Scene Title - 2-4 words]',
  imageUrl: 'https://images.unsplash.com/photo-[relevant-id]?w=800',
  narration: '[3-5 sentences describing the scene, what's happening, and the tension/stakes]',
  choices: [
    {
      id: '[story-id]-c[number]',
      text: '[Choice text - action the player takes]',
      description: '[Optional: consequence hint]',
      targetNodeId: '[story-id]-[target-node-number]',
      order: 1
    },
    // 2-3 choices per decision node
  ]
}
```

IMPORTANT RULES:

1. First node (id: [story-id]-1) must have type: 'start'
2. Last 2-5 nodes must have type: 'ending' with empty choices array
3. All middle nodes have type: 'decision' with 2-3 choices each
4. Each choice must point to a valid targetNodeId
5. Create branching paths - not all nodes need to be sequential
6. Narration should be immersive, descriptive, and engaging
7. Choices should be meaningful and affect the story outcome
8. Each ending should be distinctly different
9. Use real Unsplash photo IDs that match the scene theme
10. Node titles should be evocative and intriguing

STORY THEME: [Describe your story theme here]
SETTING: [Describe the setting]
PROTAGONIST: [Describe the main character]
CONFLICT: [Describe the main conflict/challenge]
TONE: [Describe the tone: dark, lighthearted, suspenseful, etc.]

EXAMPLE BRANCHING STRUCTURE:
Node 1 (start) → Node 2 or Node 3
Node 2 → Node 4 or Node 5
Node 3 → Node 5 or Node 6
Node 4 → Node 7 or Node 8
... continue branching ...
Final nodes (20-26) → Endings with no choices

Please generate the complete story with all nodes, ensuring:

- Rich, descriptive narration for each scene
- Meaningful choices that impact the story
- Multiple paths leading to different endings
- Consistent story logic and continuity
- Proper TypeScript syntax
- Valid Unsplash image URLs

Output the complete TypeScript code ready to paste into the app.

```

---

## 🎯 Example Usage

### Example 1: Space Opera Story

```

I need you to create an interactive story for ChronoCanvas:

STORY REQUIREMENTS:

- Title: "Starship Rebellion"
- Genre: scifi, adventure
- Difficulty: medium
- Duration: 35 minutes
- Premium: false
- Number of nodes: 22
- Number of endings: 3

STORY THEME: A rebellion aboard a generation starship
SETTING: Year 2847, aboard the massive colony ship "Exodus"
PROTAGONIST: A junior engineer who discovers a conspiracy
CONFLICT: The ship's AI has gone rogue and is steering toward a black hole
TONE: Suspenseful, action-packed, with moral dilemmas

[Include the full template structure above]

```

### Example 2: Fantasy Quest

```

I need you to create an interactive story for ChronoCanvas:

STORY REQUIREMENTS:

- Title: "The Dragon's Bargain"
- Genre: fantasy, adventure
- Difficulty: easy
- Duration: 25 minutes
- Premium: true
- Number of nodes: 20
- Number of endings: 2

STORY THEME: A knight must negotiate with a dragon to save their kingdom
SETTING: Medieval fantasy kingdom of Eldoria
PROTAGONIST: A young knight with a secret fear of dragons
CONFLICT: The dragon demands an impossible price for peace
TONE: Epic, magical, with moments of humor

[Include the full template structure above]

```

### Example 3: Mystery Thriller

```

I need you to create an interactive story for ChronoCanvas:

STORY REQUIREMENTS:

- Title: "The Vanishing Hour"
- Genre: mystery, horror
- Difficulty: hard
- Duration: 40 minutes
- Premium: true
- Number of nodes: 25
- Number of endings: 4

STORY THEME: People are disappearing at exactly 3:33 AM
SETTING: A small coastal town in modern day
PROTAGONIST: A journalist investigating the disappearances
CONFLICT: The journalist discovers they're next on the list
TONE: Dark, atmospheric, psychological thriller

[Include the full template structure above]

````

---

## 📋 Checklist for Generated Story

After receiving the AI-generated story, verify:

- [ ] All nodes have unique IDs
- [ ] First node has type: 'start'
- [ ] Last 2-5 nodes have type: 'ending'
- [ ] All choices point to valid node IDs
- [ ] No orphaned nodes (unreachable from start)
- [ ] Multiple paths to different endings
- [ ] Narration is engaging and descriptive
- [ ] Choices are meaningful and clear
- [ ] Image URLs are valid Unsplash links
- [ ] TypeScript syntax is correct
- [ ] Story has proper beginning, middle, and end

---

## 🔧 How to Add Generated Story to App

1. **Get the generated code** from the AI chatbot

2. **Create a new file** in `src/data/`:
   ```bash
   src/data/story[number]_[name].ts
````

3. **Paste the generated code** with proper imports:

   ```typescript
   import { Story } from '../types';

   export const [storyName]Story: Story = {
     // Paste generated story here
   };
   ```

4. **Import in sampleStories.ts**:

   ```typescript
   import { [storyName]Story } from './story[number]_[name]';

   export const sampleStories: Story[] = [
     ...originalStories,
     timeLoopStory,
     ...newStories,
     [storyName]Story, // Add your new story
   ];
   ```

5. **Test the story**:
   ```bash
   npm run ios
   ```

---

## 💡 Tips for Better Stories

### Narration Tips

- Use sensory details (sight, sound, smell, touch)
- Create tension and stakes in every scene
- Show, don't tell
- End scenes with hooks that make players want to continue
- Vary sentence length for rhythm

### Choice Design Tips

- Make choices meaningful, not arbitrary
- Include moral dilemmas
- Show consequences of previous choices
- Avoid "correct" vs "wrong" choices - make them interesting vs interesting
- Use choice descriptions to hint at outcomes

### Branching Tips

- Create at least 3 distinct paths through the story
- Allow paths to converge and diverge
- Make sure all paths lead to an ending
- Different paths should reveal different aspects of the story
- Consider having a "golden path" with the most content

### Image Selection Tips

- Search Unsplash for: [your theme] + [mood]
- Use consistent visual style throughout
- Match image tone to scene tone
- Avoid images with text or faces (unless character-focused)
- Test image URLs before finalizing

---

## 🎨 Genre-Specific Guidance

### Sci-Fi Stories

- Focus on technology, space, future societies
- Include scientific concepts (even if simplified)
- Create unique alien cultures or AI personalities
- Explore "what if" scenarios
- Images: space, technology, futuristic cities

### Fantasy Stories

- Build a consistent magic system
- Create memorable creatures and locations
- Include quests or journeys
- Balance action with character moments
- Images: forests, castles, mystical landscapes

### Mystery Stories

- Plant clues throughout the story
- Create red herrings
- Build suspense gradually
- Reveal truth in satisfying way
- Images: dark alleys, crime scenes, atmospheric locations

### Horror Stories

- Build dread through atmosphere
- Use psychological horror, not just gore
- Create sense of helplessness
- Include moments of false safety
- Images: dark, ominous, unsettling scenes

### Romance Stories

- Develop character chemistry
- Create obstacles to overcome
- Include emotional vulnerability
- Build to satisfying resolution
- Images: intimate settings, beautiful locations

---

## 📊 Story Quality Metrics

A great story should have:

- **Engagement**: Players want to see what happens next
- **Agency**: Choices feel meaningful and impactful
- **Variety**: Multiple playthroughs reveal new content
- **Coherence**: Story logic is consistent
- **Emotion**: Players feel something (tension, joy, fear, etc.)
- **Satisfaction**: Endings feel earned and complete

---

## 🚀 Advanced: Multi-Story Arcs

For connected stories:

1. Use consistent world-building
2. Reference events from other stories
3. Include recurring characters
4. Create overarching mysteries
5. Design stories that can be played in any order

---

**Last Updated**: October 2025  
**Version**: 1.0  
**Compatible with**: ChronoCanvas v1.0+
