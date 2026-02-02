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
import { neonSynapseStory } from './story_neon_synapse';
import { echoesSummerFestivalStory } from './story_echoes_summer_festival';
import { alchemistWatchStory } from './story_alchemist_watch';
import { velvetGuillotineStory } from './story_velvet_guillotine';
import { glassKeyProtocolStory } from './story_glass_key_protocol';
import { midnightHouseStory } from './story_midnight_house';

const originalStories: Story[] = [
  {
    id: 'story-1',
    title: 'The Enchanted Forest',
    description:
      'A mystical journey through an ancient forest where every choice shapes your destiny.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=400',
    author: 'Elena Rivers',
    genre: 'fantasy',
    involvement: 'low',
    estimatedDuration: 25,
    isPremium: false,
    version: '2.0',
    createdAt: '2025-01-01',
    updatedAt: '2025-02-02',
    totalNodes: 18,
    totalEndings: 6,
    startNodeId: 'node-1',
    nodes: [
      {
        id: 'node-1',
        storyId: 'story-1',
        type: 'start',
        title: 'The Forest Entrance',
        imageUrl:
          'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800',
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
          'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
        narration:
          'The path leads you to a massive oak tree, its trunk wider than a house. Strange symbols are carved into its bark, glowing faintly with an ethereal light. You hear whispers in the wind, and the air feels charged with ancient magic.',
        choices: [
          {
            id: 'choice-3',
            text: 'Touch the glowing symbols',
            description: 'The symbols pulse with energy',
            targetNodeId: 'node-4',
            order: 1,
          },
          {
            id: 'choice-4',
            text: 'Continue past the tree',
            description: 'Better not disturb ancient magic',
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
          'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
        narration:
          'Following the stream, you discover a crystal-clear pool. The water is so transparent you can see colorful fish swimming below. In the center of the pool, a small island holds a single white flower that seems to glow with its own light.',
        choices: [
          {
            id: 'choice-5',
            text: 'Wade to the island',
            description: 'The flower calls to you',
            targetNodeId: 'node-6',
            order: 1,
          },
          {
            id: 'choice-6',
            text: 'Rest by the pool',
            description: 'Take a moment to reflect',
            targetNodeId: 'node-7',
            order: 2,
          },
        ],
      },
      {
        id: 'node-4',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Awakening',
        imageUrl:
          'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
        narration:
          'As your fingers touch the symbols, the oak shimmers and a spectral figure emerges from the trunk. It is an ancient forest spirit, its form made of light and leaves. "You have awakened me, traveler," it whispers. "What do you seek in this sacred place?"',
        choices: [
          {
            id: 'choice-7',
            text: 'Ask for wisdom',
            description: 'Knowledge is the greatest treasure',
            targetNodeId: 'node-8',
            order: 1,
          },
          {
            id: 'choice-8',
            text: 'Ask for protection',
            description: 'Safety in a dangerous world',
            targetNodeId: 'node-9',
            order: 2,
          },
        ],
      },
      {
        id: 'node-5',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Dark Hollow',
        imageUrl:
          'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration:
          'You walk past the oak and find yourself in a darker part of the forest. The trees here are twisted, and shadows move in the corner of your vision. You notice a cave entrance partially hidden by vines, and a faint light coming from deeper in the woods.',
        choices: [
          {
            id: 'choice-9',
            text: 'Enter the cave',
            description: 'Discover what lies within',
            targetNodeId: 'node-10',
            order: 1,
          },
          {
            id: 'choice-10',
            text: 'Follow the light',
            description: 'Light usually means safety',
            targetNodeId: 'node-11',
            order: 2,
          },
        ],
      },
      {
        id: 'node-6',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Island of Whispers',
        imageUrl:
          'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
        narration:
          'The water is surprisingly warm as you wade to the island. The white flower trembles as you approach, and you realize it is not a flower at all, but a crystalline formation that hums with energy. Touching it might change everything.',
        choices: [
          {
            id: 'choice-11',
            text: 'Touch the crystal flower',
            description: 'Embrace the unknown',
            targetNodeId: 'node-12',
            order: 1,
          },
          {
            id: 'choice-12',
            text: 'Study it from afar',
            description: 'Caution before curiosity',
            targetNodeId: 'node-13',
            order: 2,
          },
        ],
      },
      {
        id: 'node-7',
        storyId: 'story-1',
        type: 'decision',
        title: 'Dreams by the Water',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        narration:
          'You sit by the pool, and drowsiness washes over you. In your half-dream state, you see visions of the forest past: ancient civilizations, magical creatures, and a great tree at the heart of everything. A voice asks if you wish to understand these visions.',
        choices: [
          {
            id: 'choice-13',
            text: 'Embrace the vision',
            description: 'Dive deeper into the dream',
            targetNodeId: 'node-13',
            order: 1,
          },
          {
            id: 'choice-14',
            text: 'Wake yourself',
            description: 'Some dreams are too deep',
            targetNodeId: 'node-14',
            order: 2,
          },
        ],
      },
      {
        id: 'node-8',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Spirit\'s Trial',
        imageUrl:
          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration:
          '"Wisdom must be earned," the spirit says. The forest around you transforms into a labyrinth of living wood. "Find your way to the Heart Tree, and I shall grant you the wisdom of ages. But beware—the forest tests all who seek its secrets."',
        choices: [
          {
            id: 'choice-15',
            text: 'Navigate by instinct',
            description: 'Trust your inner compass',
            targetNodeId: 'node-15',
            order: 1,
          },
          {
            id: 'choice-16',
            text: 'Follow the fireflies',
            description: 'Nature often guides the way',
            targetNodeId: 'node-16',
            order: 2,
          },
        ],
      },
      {
        id: 'node-9',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Guardian\'s Blessing',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        narration:
          'The spirit smiles and weaves a protective charm around you. "You shall be shielded from harm, but protection comes with responsibility. Will you use this gift to defend the forest, or to shield yourself as you walk your own path?"',
        choices: [
          {
            id: 'choice-17',
            text: 'Defend the forest',
            description: 'Become its guardian',
            targetNodeId: 'node-17',
            order: 1,
          },
          {
            id: 'choice-18',
            text: 'Walk your own path',
            description: 'Protection for your journey',
            targetNodeId: 'node-18',
            order: 2,
          },
        ],
      },
      {
        id: 'node-10',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Crystal Cavern',
        imageUrl:
          'https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=800',
        narration:
          'Inside the cave, you find walls covered in luminescent crystals that pulse like a heartbeat. In the center, a pool of liquid silver reflects not your face, but possible futures. You sense great power here, but also great danger.',
        choices: [
          {
            id: 'choice-19',
            text: 'Drink from the pool',
            description: 'See your destiny',
            targetNodeId: 'node-19',
            order: 1,
          },
          {
            id: 'choice-20',
            text: 'Take a crystal',
            description: 'A piece of magic to keep',
            targetNodeId: 'node-20',
            order: 2,
          },
        ],
      },
      {
        id: 'node-11',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Fairy Ring',
        imageUrl:
          'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800',
        narration:
          'The light leads you to a clearing where mushrooms grow in a perfect circle. Tiny lights dance within the ring, and you hear laughter like chiming bells. The fairies invite you to join their dance, but warn that time moves differently in their circle.',
        choices: [
          {
            id: 'choice-21',
            text: 'Join the dance',
            description: 'Dance with the fae',
            targetNodeId: 'node-21',
            order: 1,
          },
          {
            id: 'choice-22',
            text: 'Politely decline',
            description: 'Respectfully watch instead',
            targetNodeId: 'node-22',
            order: 2,
          },
        ],
      },
      {
        id: 'node-12',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Transformation',
        imageUrl:
          'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration:
          'The moment you touch the crystal, energy surges through you. You feel your senses sharpen—you can hear the trees breathing, feel the roots beneath the earth, and sense the heartbeat of the forest itself. You are becoming something more than human.',
        choices: [
          {
            id: 'choice-23',
            text: 'Embrace the change',
            description: 'Become one with nature',
            targetNodeId: 'ending-1',
            order: 1,
          },
          {
            id: 'choice-24',
            text: 'Resist and withdraw',
            description: 'Remain who you are',
            targetNodeId: 'node-14',
            order: 2,
          },
        ],
      },
      {
        id: 'node-13',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Prophecy Revealed',
        imageUrl:
          'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800',
        narration:
          'Your visions coalesce into a clear message: the forest is dying, and you are the key to its survival. An ancient blight is spreading from the north, and only someone who has walked the enchanted paths can stop it. The choice before you is clear.',
        choices: [
          {
            id: 'choice-25',
            text: 'Accept your destiny',
            description: 'Save the forest',
            targetNodeId: 'ending-2',
            order: 1,
          },
          {
            id: 'choice-26',
            text: 'The burden is too great',
            description: 'Choose another way',
            targetNodeId: 'ending-3',
            order: 2,
          },
        ],
      },
      {
        id: 'node-14',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Crossroads',
        imageUrl:
          'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
        narration:
          'You find yourself at a crossroads where three paths meet. Each path glows with a different color: gold for wealth, green for growth, and blue for knowledge. The forest waits for your decision, its fate hanging in the balance.',
        choices: [
          {
            id: 'choice-27',
            text: 'The golden path',
            description: 'Seek treasure',
            targetNodeId: 'ending-4',
            order: 1,
          },
          {
            id: 'choice-28',
            text: 'The green path',
            description: 'Seek harmony',
            targetNodeId: 'ending-5',
            order: 2,
          },
          {
            id: 'choice-29',
            text: 'The blue path',
            description: 'Seek understanding',
            targetNodeId: 'ending-6',
            order: 3,
          },
        ],
      },
      {
        id: 'node-15',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Heart Tree Found',
        imageUrl:
          'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
        narration:
          'Your instincts guide you true, and you emerge into a grove where the Heart Tree stands—a massive tree with bark of gold and leaves that shimmer like emeralds. The spirit appears and bestows upon you the ancient wisdom of the forest. You become the first human in centuries to truly understand the language of nature, and you vow to be its voice in the human world.',
        choices: [],
      },
      {
        id: 'node-16',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Firefly\'s Gift',
        imageUrl:
          'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration:
          'The fireflies lead you not to the Heart Tree, but to a hidden grove where the last dragons of the forest sleep. They awaken at your approach and grant you their eternal friendship. With dragon allies, you become a legend—the Dragon Friend who bridges the world of humans and the ancient wyrms.',
        choices: [],
      },
      {
        id: 'node-17',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Eternal Guardian',
        imageUrl:
          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration:
          'You accept the responsibility of protecting the forest, and the spirit transforms you into an Eternal Guardian—neither fully human nor fully spirit, but something in between. You will watch over these woods for centuries, guiding lost travelers and keeping the ancient magic safe from those who would exploit it.',
        choices: [],
      },
      {
        id: 'node-18',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Protected Traveler',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        narration:
          'With the spirit\'s blessing upon you, you leave the forest protected from all harm. You live a long and fortunate life, shielded from accidents and illness. But sometimes, in your dreams, you hear the forest calling, wondering if you made the right choice.',
        choices: [],
      },
      {
        id: 'node-19',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Oracle\'s Vision',
        imageUrl:
          'https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=800',
        narration:
          'The silver liquid shows you all possible futures, and you gain the gift of prophecy. You leave the forest as an oracle, able to guide others through their destinies. But knowing the future is a heavy burden—you see both joys and sorrows that are yet to come.',
        choices: [],
      },
      {
        id: 'node-20',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Crystal Keeper',
        imageUrl:
          'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration:
          'The crystal you take becomes your constant companion, humming with magic and lighting your way through darkness. You become known as the Crystal Keeper, using its power to heal the sick and ward off evil. The forest stays with you always, a piece of its magic in your pocket.',
        choices: [],
      },
      {
        id: 'node-21',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Fairy Friend',
        imageUrl:
          'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800',
        narration:
          'You dance with the fairies until dawn, though decades pass in the human world. When you return, you are unchanged, but you carry the fairies\' blessing. You can see through glamour, speak with the little folk, and you will never age. You become a bridge between the human world and the fairy realm.',
        choices: [],
      },
      {
        id: 'node-22',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Respectful Observer',
        imageUrl:
          'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
        narration:
          'You watch the fairy dance from outside the circle, showing wisdom and restraint. The fairies notice your respect and gift you a seed from their sacred tree. When planted, it grows into a tree that bears fruit of pure knowledge. You become a wise sage, sharing the fruit\'s wisdom with those who seek truth.',
        choices: [],
      },
      {
        id: 'ending-1',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Nature Bond',
        imageUrl:
          'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration:
          'You fully embrace your transformation, becoming a guardian of the forest with the power to speak with animals and command the growth of plants. You leave behind your human life to become one with the enchanted woods, finding a peace you never knew existed.',
        choices: [],
      },
      {
        id: 'ending-2',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Forest Savior',
        imageUrl:
          'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
        narration:
          'You accept your destiny and become the Forest Savior. With your newfound powers, you journey north to confront the blight. The battle is fierce, but your courage prevails. You save not just this forest, but all forests connected to it through the ancient root network.',
        choices: [],
      },
      {
        id: 'ending-3',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Humble Path',
        imageUrl:
          'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
        narration:
          'You choose not to accept the burden of destiny, and the forest respects your honesty. Instead of power, you are granted a simple blessing: the ability to always find your way home. You leave the forest with your life unchanged, but with the knowledge that sometimes the bravest choice is to know your own limits.',
        choices: [],
      },
      {
        id: 'ending-4',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Golden Bounty',
        imageUrl:
          'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration:
          'The golden path leads you to a treasure beyond imagination—gold, jewels, and artifacts of ancient magic. You leave the forest wealthy beyond your dreams, but the treasure comes with a warning: use it wisely, or it will use you.',
        choices: [],
      },
      {
        id: 'ending-5',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Harmony Seeker',
        imageUrl:
          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration:
          'The green path teaches you the secret of living in harmony with all things. You gain the ability to grow any plant and communicate with the earth itself. You become a druid, traveling the world to heal damaged lands and teach others to respect nature.',
        choices: [],
      },
      {
        id: 'ending-6',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Seeker of Truth',
        imageUrl:
          'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800',
        narration:
          'The blue path reveals the hidden truths of existence—why we are here, where we go, and what connects all living things. You become a philosopher and teacher, sharing your insights with those who seek understanding. The forest has given you the greatest gift: the answer to life\'s deepest questions.',
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
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400',
    author: 'Marcus Chen',
    genre: 'scifi',
    involvement: 'medium',
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
          'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
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
          'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
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
          'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
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
  neonSynapseStory,
  echoesSummerFestivalStory,
  alchemistWatchStory,
  velvetGuillotineStory,
  glassKeyProtocolStory,
  midnightHouseStory,
];
