import { Story } from '../types';

export const deepSeaStory: Story = {
  id: 'story-4',
  title: 'Abyssal Secrets',
  description:
    'Dive into the deepest ocean trench where an ancient civilization awaits discovery.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
  author: 'Captain Marina Torres',
  genre: ['mystery', 'adventure'],
  difficulty: 'medium',
  estimatedDuration: 30,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-11',
  updatedAt: '2025-01-11',
  totalNodes: 20,
  totalEndings: 3,
  startNodeId: 'ds-1',
  nodes: [
    {
      id: 'ds-1',
      storyId: 'story-4',
      type: 'start',
      title: 'The Descent',
      imageUrl:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      narration:
        "Your submarine descends into the Mariana Trench. At 10,000 meters, your sonar detects something impossible - geometric structures that shouldn't exist.",
      choices: [
        {
          id: 'ds-c1',
          text: 'Investigate the structures',
          targetNodeId: 'ds-2',
          order: 1,
        },
        {
          id: 'ds-c2',
          text: 'Report to surface first',
          targetNodeId: 'ds-3',
          order: 2,
        },
      ],
    },
    {
      id: 'ds-2',
      storyId: 'story-4',
      type: 'decision',
      title: 'Ancient Ruins',
      imageUrl:
        'https://images.unsplash.com/photo-1682687220742-aba13b6e50c5?w=800',
      narration:
        'Massive stone pillars covered in bioluminescent algae rise from the ocean floor. They form a perfect circle around what appears to be a temple entrance.',
      choices: [
        {
          id: 'ds-c3',
          text: 'Enter the temple',
          targetNodeId: 'ds-4',
          order: 1,
        },
        { id: 'ds-c4', text: 'Circle around', targetNodeId: 'ds-5', order: 2 },
      ],
    },
  ],
};
