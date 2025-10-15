import { Story } from './types';

/**
 * EXAMPLE: This shows how a story file looks AFTER image migration
 * Notice the require() statements instead of URL strings
 */

export const exampleStory: Story = {
  id: 'story-example',
  title: 'Example Story',
  description: 'This is how your story will look after migration',

  // BEFORE: coverImageUrl: 'https://images.unsplash.com/photo-123456?w=800',
  // AFTER:
  coverImageUrl: require('../assets/images/covers/cover-story-example.jpg'),

  // BEFORE: thumbnailUrl: 'https://images.unsplash.com/photo-123456?w=400',
  // AFTER:
  thumbnailUrl: require('../assets/images/thumbnails/thumb-story-example.jpg'),

  author: 'Example Author',
  genre: ['adventure'],
  difficulty: 'easy',
  estimatedDuration: 15,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-15',
  updatedAt: '2025-01-15',
  totalNodes: 2,
  totalEndings: 1,
  startNodeId: 'ex-1',
  nodes: [
    {
      id: 'ex-1',
      storyId: 'story-example',
      type: 'start',
      title: 'The Beginning',

      // BEFORE: imageUrl: 'https://images.unsplash.com/photo-789012?w=800',
      // AFTER:
      imageUrl: require('../assets/images/nodes/story-example-ex-1.jpg'),

      narration: 'Your journey begins here...',
      choices: [
        {
          id: 'ex-c1',
          text: 'Continue',
          targetNodeId: 'ex-2',
          order: 1,
        },
      ],
    },
    {
      id: 'ex-2',
      storyId: 'story-example',
      type: 'ending',
      title: 'The End',
      imageUrl: require('../assets/images/nodes/story-example-ex-2.jpg'),
      narration: 'And so your story concludes.',
      choices: [],
    },
  ],
};

/**
 * Benefits of local images:
 * - Load time: <100ms vs 1-2 seconds
 * - Works offline
 * - No external dependencies
 * - Consistent performance
 *
 * Trade-offs:
 * - Larger app bundle (~50-100MB)
 * - Need to generate images upfront
 * - Can't change images without app update
 */
