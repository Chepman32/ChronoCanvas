import { Story } from '../types';
import { timeLoopStory } from './story3_timeloop';
import { paradoxPaletteStory } from './story8923745610923_paradoxPalette';
import { newStories } from './newStories';
import { theLastLetterStory } from './story892746531_theLastLetter';
import { heartlineRewindStory } from './story9123457712345_heartlineRewind';
import { midnightGardenStory } from './story745829103_midnightGarden';
import { timekeepersHeartStory } from './story583921467_timekeepersHeart';
import { emberCrownOathStory } from './story9845237719284_emberCrownOath';
import { rootweaversPactStory } from './story9932045517721_rootweaversPact';
import { echoesMoonlitGroveStory } from './story8743921042_echoesMoonlitGrove';
import { cityOfSecondChancesStory } from './story8742190384_cityOfSecondChances';
import { midnightCuratorStory } from './story_midnight_curator';
import { midnightMissingStory } from './story7481296_midnightMissing';
import { shadowsVanishedStarStory } from './story8273910265_shadowsVanishedStar';
import { midnightCallerStory } from './story847362910_midnightCaller';
import { cosmicCastawayStory } from './story10012001_cosmicCastaway';

const originalStories: Story[] = [
  {
    id: 'story-1',
    title: 'The Enchanted Forest',
    description:
      'A mystical journey through an ancient forest where every choice shapes your destiny.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
    author: 'Elena Rivers',
    genre: ['fantasy', 'adventure'],
    difficulty: 'easy',
    estimatedDuration: 15,
    isPremium: false,
    version: '1.0',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    totalNodes: 5,
    totalEndings: 2,
    startNodeId: 'node-1',
    nodes: [
      {
        id: 'node-1',
        storyId: 'story-1',
        type: 'start',
        title: 'The Forest Entrance',
        imageUrl:
          'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration:
          'You stand at the edge of an ancient forest. The trees tower above you, their branches forming a canopy that filters the sunlight into dancing patterns on the forest floor. A worn path leads deeper into the woods, while a stream glistens to your right.',
        choices: [
          {
            id: 'choice-1',
            text: 'Follow the worn path',
            description: 'The path looks well-traveled',
            targetNodeId: 'node-2',
            order: 1,
          },
          {
            id: 'choice-2',
            text: 'Follow the stream',
            description: 'The water sparkles invitingly',
            targetNodeId: 'node-3',
            order: 2,
          },
        ],
      },
      {
        id: 'node-2',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Ancient Oak',
        imageUrl:
          'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
        narration:
          'The path leads you to a massive oak tree, its trunk wider than a house. Strange symbols are carved into its bark, glowing faintly with an ethereal light. You hear whispers in the wind.',
        choices: [
          {
            id: 'choice-3',
            text: 'Touch the glowing symbols',
            targetNodeId: 'node-4',
            order: 1,
          },
          {
            id: 'choice-4',
            text: 'Continue past the tree',
            targetNodeId: 'node-5',
            order: 2,
          },
        ],
      },
      {
        id: 'node-3',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Crystal Pool',
        imageUrl:
          'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
        narration:
          'Following the stream, you discover a crystal-clear pool. The water is so transparent you can see colorful fish swimming below. In the center of the pool, a small island holds a single white flower.',
        choices: [
          {
            id: 'choice-5',
            text: 'Wade to the island',
            targetNodeId: 'node-4',
            order: 1,
          },
          {
            id: 'choice-6',
            text: 'Rest by the pool',
            targetNodeId: 'node-5',
            order: 2,
          },
        ],
      },
      {
        id: 'node-4',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Forest Guardian',
        imageUrl:
          'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        narration:
          'Your choice awakens the forest guardian, a majestic spirit of light and nature. She thanks you for your courage and grants you the gift of understanding all living things. You leave the forest forever changed, able to hear the whispers of nature.',
        choices: [],
      },
      {
        id: 'node-5',
        storyId: 'story-1',
        type: 'ending',
        title: 'Peaceful Journey',
        imageUrl:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration:
          'You continue your journey through the forest, enjoying its beauty and tranquility. As you emerge on the other side, you feel refreshed and at peace. The forest has given you a gift of serenity that will stay with you always.',
        choices: [],
      },
    ],
  },
  {
    id: 'story-2',
    title: 'Neon Nights',
    description:
      'Navigate the cyberpunk streets of Neo Tokyo in this thrilling sci-fi adventure.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400',
    author: 'Marcus Chen',
    genre: ['scifi', 'mystery'],
    difficulty: 'medium',
    estimatedDuration: 20,
    isPremium: true,
    productId: 'com.app.story.neon-nights',
    version: '1.0',
    createdAt: '2025-01-05',
    updatedAt: '2025-01-05',
    totalNodes: 3,
    totalEndings: 1,
    startNodeId: 'node-6',
    nodes: [
      {
        id: 'node-6',
        storyId: 'story-2',
        type: 'start',
        title: 'Downtown Neo Tokyo',
        imageUrl:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
        narration:
          'Rain falls on the neon-lit streets of Neo Tokyo. Your neural implant buzzes with an encrypted message. Someone needs your help, but can you trust them?',
        choices: [
          {
            id: 'choice-7',
            text: 'Accept the mission',
            targetNodeId: 'node-7',
            order: 1,
          },
          {
            id: 'choice-8',
            text: 'Ignore and walk away',
            targetNodeId: 'node-8',
            order: 2,
          },
        ],
      },
      {
        id: 'node-7',
        storyId: 'story-2',
        type: 'ending',
        title: 'The Conspiracy',
        imageUrl:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        narration:
          'You uncover a massive conspiracy that reaches the highest levels of power. Your choice to investigate has changed everything.',
        choices: [],
      },
      {
        id: 'node-8',
        storyId: 'story-2',
        type: 'ending',
        title: 'Another Night',
        imageUrl:
          'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800',
        narration:
          'You walk away into the neon night. Sometimes the best choice is to stay out of trouble.',
        choices: [],
      },
    ],
  },
];

export const sampleStories: Story[] = [
  ...originalStories,
  timeLoopStory,
  ...newStories,
  paradoxPaletteStory,
  theLastLetterStory,
  heartlineRewindStory,
  midnightGardenStory,
  timekeepersHeartStory,
  emberCrownOathStory,
  rootweaversPactStory,
  echoesMoonlitGroveStory,
  cityOfSecondChancesStory,
  midnightCuratorStory,
  midnightMissingStory,
  shadowsVanishedStarStory,
  midnightCallerStory,
  cosmicCastawayStory,
];
