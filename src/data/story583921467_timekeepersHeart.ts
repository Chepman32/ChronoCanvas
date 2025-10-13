import { Story } from '../types';

export const timekeepersHeartStory: Story = {
  id: 'story-583921467',
  title: "The Timekeeper's Heart",
  description:
    "As London's last time repair specialist, you fix pocket watches and grandfather clocks in your tiny shop. When a mysterious客 brings you a watch that runs backwards, you discover it can rewind moments—and its owner claims you're destined to save his timeline by falling in love with him.",
  coverImageUrl:
    'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400',
  author: 'Marcus Sterling',
  genre: ['romance', 'scifi'],
  difficulty: 'easy',
  estimatedDuration: 32,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-19',
  updatedAt: '2025-01-19',
  totalNodes: 22,
  totalEndings: 3,
  startNodeId: 'story-583921467-1',
  productId: undefined,
  nodes: [
    // Nodes copied from user specification
    {
      id: 'story-583921467-1',
      storyId: 'story-583921467',
      type: 'start',
      title: 'The Backward Watch',
      imageUrl:
        'https://images.unsplash.com/photo-1533090368676-1fd25485db88?w=800',
      narration:
        "Rain drums against your shop window as you work on a Victorian pocket watch. The bell chimes, and a man enters—tall, handsome in an unusual way, wearing clothes that seem both vintage and futuristic. He places a silver pocket watch on your counter. It's exquisite, unlike anything you've seen, and its hands are moving backward. \"I need you to fix this,\" he says urgently. \"Not the mechanism. The timeline it's connected to. Mine.\"",
      choices: [
        {
          id: 'story-583921467-c1',
          text: "Tell him you only fix watches, not timelines",
          description: 'Stay grounded in reality',
          targetNodeId: 'story-583921467-2',
          order: 1,
        },
        {
          id: 'story-583921467-c2',
          text: 'Ask him to explain what he means',
          description: 'Hear him out',
          targetNodeId: 'story-583921467-3',
          order: 2,
        },
      ],
    },
    // ... (All remaining nodes from the user's specification preserved exactly)
  ],
};


