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
    estimatedDuration: 62,
    isPremium: false,
    version: '2.0',
    createdAt: '2025-01-01',
    updatedAt: '2025-02-02',
    totalNodes: 62,
    totalEndings: 12,
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
          'You stand at the edge of an ancient forest. The trees tower above you, their branches forming a canopy that filters the sunlight into dancing patterns on the forest floor. A worn path leads deeper into the woods, while a stream glistens to your right. The air smells of pine and earth, and you feel a strange pull from within the woods—as if the forest itself is watching, waiting for you to make your choice.',
        choices: [
          {
            id: 'choice-1',
            text: 'Follow the worn path',
            description: 'The path looks well-traveled and safe',
            targetNodeId: 'node-2a',
            order: 1,
          },
          {
            id: 'choice-2',
            text: 'Follow the stream',
            description: 'The water sparkles with an otherworldly light',
            targetNodeId: 'node-2b',
            order: 2,
          },
          {
            id: 'choice-3',
            text: 'Explore the forest edge',
            description: 'Search for another way in',
            targetNodeId: 'node-2c',
            order: 3,
          },
        ],
      },
      {
        id: 'node-2a',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Winding Trail',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration: 'The path winds through ancient trees, their roots forming natural steps. You notice strange mushrooms glowing faintly in the shadows. A small wooden sign points ahead, but the writing is in a language you do not recognize. The path splits ahead—one way leads deeper into darkness, the other toward a distant light.',
        choices: [
          {
            id: 'choice-1a',
            text: 'Head toward the light',
            description: 'Light usually means safety',
            targetNodeId: 'node-3a',
            order: 1,
          },
          {
            id: 'choice-1b',
            text: 'Enter the darkness',
            description: 'Face the unknown head-on',
            targetNodeId: 'node-3b',
            order: 2,
          },
        ],
      },
      {
        id: 'node-2b',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Singing Waters',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
        narration: 'The stream sings a melody that seems to call your name. Silver fish leap from the water, creating ripples that reflect rainbow patterns on the rocks. You spot a small boat tied to a willow tree, and a path continues alongside the water.',
        choices: [
          {
            id: 'choice-2a',
            text: 'Take the boat',
            description: 'Let the current guide you',
            targetNodeId: 'node-3c',
            order: 1,
          },
          {
            id: 'choice-2b',
            text: 'Walk along the shore',
            description: 'Keep your feet on solid ground',
            targetNodeId: 'node-3d',
            order: 2,
          },
        ],
      },
      {
        id: 'node-2c',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Hidden Grove',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'Beyond the main entrance, you discover a hidden grove where wildflowers bloom in impossible colors. A family of deer watches you from the shadows, their eyes unusually intelligent. One approaches and drops something at your feet—a silver acorn that pulses with warmth.',
        choices: [
          {
            id: 'choice-3a',
            text: 'Pick up the acorn',
            description: 'Accept this mysterious gift',
            targetNodeId: 'node-3e',
            order: 1,
          },
          {
            id: 'choice-3b',
            text: 'Back away slowly',
            description: 'Do not interfere with magic',
            targetNodeId: 'node-3f',
            order: 2,
          },
        ],
      },
      {
        id: 'node-3a',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Lantern Grove',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration: 'You emerge into a grove lit by hundreds of floating lanterns. An old woman tends a fire in the center, stirring a cauldron that smells of cinnamon and starlight. She looks up and smiles, revealing eyes that swirl like galaxies.',
        choices: [
          {
            id: 'choice-4a',
            text: 'Approach the old woman',
            description: 'Seek her wisdom',
            targetNodeId: 'node-2',
            order: 1,
          },
          {
            id: 'choice-4b',
            text: 'Sneak past quietly',
            description: 'Avoid disturbing her',
            targetNodeId: 'node-4',
            order: 2,
          },
        ],
      },
      {
        id: 'node-3b',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Shadow Path',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'In the darkness, your other senses sharpen. You hear breathing that is not your own, and feel eyes watching from every shadow. A pair of golden orbs appears before you, then another, and another. The shadow creatures mean you no harm—they seem curious.',
        choices: [
          {
            id: 'choice-5a',
            text: 'Reach out to them',
            description: 'Show you mean no harm',
            targetNodeId: 'node-5',
            order: 1,
          },
          {
            id: 'choice-5b',
            text: 'Light a torch',
            description: 'Drive away the darkness',
            targetNodeId: 'node-10',
            order: 2,
          },
        ],
      },
      {
        id: 'node-3c',
        storyId: 'story-1',
        type: 'decision',
        title: 'The River Journey',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
        narration: 'The boat drifts silently downstream. Water sprites dance alongside, playing games with the ripples. You pass under ancient stone bridges carved with runes, and through curtains of weeping willows. The river seems to be taking you somewhere important.',
        choices: [
          {
            id: 'choice-6a',
            text: 'Let the river guide you',
            description: 'Trust the current',
            targetNodeId: 'node-3',
            order: 1,
          },
          {
            id: 'choice-6b',
            text: 'Paddle to the shore',
            description: 'Take control of your journey',
            targetNodeId: 'node-6',
            order: 2,
          },
        ],
      },
      {
        id: 'node-3d',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Fisherman\'s Rest',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
        narration: 'You find an old fisherman sitting by a campfire, mending his nets. He offers you a cup of tea that smells of memory and honey. "Few travelers walk this path anymore," he says. "The forest has been waiting for someone like you."',
        choices: [
          {
            id: 'choice-7a',
            text: 'Drink the tea',
            description: 'Accept his hospitality',
            targetNodeId: 'node-7',
            order: 1,
          },
          {
            id: 'choice-7b',
            text: 'Ask about the forest',
            description: 'Learn what awaits you',
            targetNodeId: 'node-8',
            order: 2,
          },
        ],
      },
      {
        id: 'node-3e',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Acorn\'s Secret',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration: 'As you touch the silver acorn, visions flood your mind—the forest as it was centuries ago, a great kingdom of nature ruled by benevolent spirits. You see a blight spreading from the north, corrupting everything it touches. The vision fades, leaving you with a sense of purpose.',
        choices: [
          {
            id: 'choice-8a',
            text: 'Seek the Heart Tree',
            description: 'The vision showed you the way',
            targetNodeId: 'node-13',
            order: 1,
          },
          {
            id: 'choice-8b',
            text: 'Find the source of the blight',
            description: 'Stop the corruption',
            targetNodeId: 'node-14',
            order: 2,
          },
        ],
      },
      {
        id: 'node-3f',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Deer\'s Warning',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'The deer block your path, their eyes filled with concern. One stamps its hoof three times, pointing with its antlers toward a hidden trail you had not noticed. They want you to follow—but are they leading you to safety or danger?',
        choices: [
          {
            id: 'choice-9a',
            text: 'Follow the deer',
            description: 'Trust their guidance',
            targetNodeId: 'node-11',
            order: 1,
          },
          {
            id: 'choice-9b',
            text: 'Go your own way',
            description: 'Make your own path',
            targetNodeId: 'node-12',
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
        type: 'decision',
        title: 'The Respectful Observer',
        imageUrl:
          'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
        narration:
          'You watch the fairy dance from outside the circle, showing wisdom and restraint. The fairies notice your respect and gift you a seed from their sacred tree. As you accept it, the fairies whisper of greater mysteries deeper in the forest.',
        choices: [
          {
            id: 'choice-30',
            text: 'Plant the seed immediately',
            description: 'Let it grow in this sacred place',
            targetNodeId: 'node-23',
            order: 1,
          },
          {
            id: 'choice-31',
            text: 'Keep it and explore deeper',
            description: 'Seek more knowledge first',
            targetNodeId: 'node-24',
            order: 2,
          },
        ],
      },
      {
        id: 'node-23',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Growing Sapling',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration: 'The seed sprouts instantly, growing into a small sapling that hums with energy. The fairies clap with delight and invite you to a feast in their hidden village.',
        choices: [
          {
            id: 'choice-32',
            text: 'Join the feast',
            description: 'Become one with the fairy realm',
            targetNodeId: 'ending-6',
            order: 1,
          },
          {
            id: 'choice-33',
            text: 'Politely decline',
            description: 'Continue your human journey',
            targetNodeId: 'node-25',
            order: 2,
          },
        ],
      },
      {
        id: 'node-24',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Temporal Glade',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration: 'Deeper in the forest, you find a glade where flowers bloom and wither in seconds. A figure steps out—a future version of yourself, older and wiser.',
        choices: [
          {
            id: 'choice-34',
            text: 'Speak to your future self',
            description: 'Learn what awaits you',
            targetNodeId: 'node-26',
            order: 1,
          },
          {
            id: 'choice-35',
            text: 'Turn away',
            description: 'Some knowledge is dangerous',
            targetNodeId: 'node-27',
            order: 2,
          },
        ],
      },
      {
        id: 'node-25',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Winding Descent',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'You follow a path that spirals downward into the earth. Ancient paintings depict humans and forest spirits living as one. You hear distant drums.',
        choices: [
          {
            id: 'choice-36',
            text: 'Follow the drums',
            description: 'Find who is playing them',
            targetNodeId: 'node-28',
            order: 1,
          },
          {
            id: 'choice-37',
            text: 'Examine the paintings',
            description: 'Learn the ancient history',
            targetNodeId: 'node-29',
            order: 2,
          },
        ],
      },
      {
        id: 'node-26',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Conversation Across Time',
        imageUrl: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
        narration: 'Your future self speaks of choices yet to come. "The forest tests all who enter. Not everyone is meant to be a hero. Some are witnesses, others teachers, still others guardians."',
        choices: [
          {
            id: 'choice-38',
            text: 'See the path of power',
            description: 'What if you become mighty?',
            targetNodeId: 'node-30',
            order: 1,
          },
          {
            id: 'choice-39',
            text: 'See the path of peace',
            description: 'What if you find harmony?',
            targetNodeId: 'node-31',
            order: 2,
          },
        ],
      },
      {
        id: 'node-27',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Hidden Temple',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration: 'You discover a hidden temple overgrown with vines. At the altar lies a book bound in bark, filled with names of everyone who walked these woods.',
        choices: [
          {
            id: 'choice-40',
            text: 'Open the book',
            description: 'Read the names and choices',
            targetNodeId: 'node-32',
            order: 1,
          },
          {
            id: 'choice-41',
            text: 'Leave it be',
            description: 'Make your own path unknown',
            targetNodeId: 'node-33',
            order: 2,
          },
        ],
      },
      {
        id: 'node-28',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Root Dwellers',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration: 'You find a community of gnome-like beings living within the roots of great trees. Their leader, ancient beyond counting, offers to teach you their ways.',
        choices: [
          {
            id: 'choice-42',
            text: 'Accept their teachings',
            description: 'Become a forest steward',
            targetNodeId: 'ending-5',
            order: 1,
          },
          {
            id: 'choice-43',
            text: 'Ask about the blight',
            description: 'Learn of the northern threat',
            targetNodeId: 'node-34',
            order: 2,
          },
        ],
      },
      {
        id: 'node-29',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Ancient Alliance',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration: 'The paintings tell of an ancient alliance broken by betrayal. You realize the blight is a curse from that ancient sin. To heal the forest, someone must renew the broken pact.',
        choices: [
          {
            id: 'choice-44',
            text: 'Vow to renew the pact',
            description: 'Heal the ancient wound',
            targetNodeId: 'node-35',
            order: 1,
          },
          {
            id: 'choice-45',
            text: 'Seek another way',
            description: 'Find a different solution',
            targetNodeId: 'node-36',
            order: 2,
          },
        ],
      },
      {
        id: 'node-30',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Vision of Power',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration: 'You see yourself wielding incredible magic, commanding the elements. But power demands sacrifice—you stand alone, feared rather than loved.',
        choices: [
          {
            id: 'choice-46',
            text: 'Accept this future',
            description: 'Power has its own rewards',
            targetNodeId: 'ending-4',
            order: 1,
          },
          {
            id: 'choice-47',
            text: 'Reject this path',
            description: 'Choose connection over control',
            targetNodeId: 'node-37',
            order: 2,
          },
        ],
      },
      {
        id: 'node-31',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Vision of Peace',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration: 'You see yourself living simply, at one with all creatures. You are happy, surrounded by friends, but the great threats continue unchecked.',
        choices: [
          {
            id: 'choice-48',
            text: 'Accept this future',
            description: 'Peace is worth any price',
            targetNodeId: 'ending-3',
            order: 1,
          },
          {
            id: 'choice-49',
            text: 'Seek a middle way',
            description: 'Balance peace with action',
            targetNodeId: 'node-38',
            order: 2,
          },
        ],
      },
      {
        id: 'node-32',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Page of Heroes',
        imageUrl: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
        narration: 'You find a page with empty space—waiting for your name. The book shows you that every hero had doubts. This is the nature of choosing.',
        choices: [
          {
            id: 'choice-50',
            text: 'Write your name',
            description: 'Commit to your journey',
            targetNodeId: 'node-39',
            order: 1,
          },
          {
            id: 'choice-51',
            text: 'Close the book',
            description: 'Live undefined by prophecy',
            targetNodeId: 'node-40',
            order: 2,
          },
        ],
      },
      {
        id: 'node-33',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Unwritten Path',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration: 'By refusing the book, you feel a weight lift. No prophecy guides you. You are entirely free—and entirely responsible for what comes next.',
        choices: [
          {
            id: 'choice-52',
            text: 'Head north to the blight',
            description: 'Face the danger directly',
            targetNodeId: 'ending-2',
            order: 1,
          },
          {
            id: 'choice-53',
            text: 'Return to the entrance',
            description: 'Leave while you still can',
            targetNodeId: 'ending-3',
            order: 2,
          },
        ],
      },
      {
        id: 'node-34',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Northern Warning',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'The root dwellers speak of the blight with fear. It spreads from an ancient tower where a forgotten mage worked terrible magic. They give you a charm for protection.',
        choices: [
          {
            id: 'choice-54',
            text: 'Accept the charm',
            description: 'Their trust honors you',
            targetNodeId: 'node-41',
            order: 1,
          },
          {
            id: 'choice-55',
            text: 'Refuse the charm',
            description: 'Face the danger unaided',
            targetNodeId: 'node-42',
            order: 2,
          },
        ],
      },
      {
        id: 'node-35',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Ritual of Renewal',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration: 'To renew the pact, you must perform a ritual at the Heart Tree. First, gather three components: water from the source, a feather from the oldest owl, and soil from the sacred grove.',
        choices: [
          {
            id: 'choice-56',
            text: 'Begin the quest',
            description: 'Gather the components',
            targetNodeId: 'node-43',
            order: 1,
          },
          {
            id: 'choice-57',
            text: 'Seek help',
            description: 'You cannot do this alone',
            targetNodeId: 'node-44',
            order: 2,
          },
        ],
      },
      {
        id: 'node-36',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Alternative Path',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration: 'You refuse to be bound by ancient history. A wanderer appears who claims to know of a healing spring in the eastern woods that can cure any corruption.',
        choices: [
          {
            id: 'choice-58',
            text: 'Trust the wanderer',
            description: 'Follow them east',
            targetNodeId: 'node-45',
            order: 1,
          },
          {
            id: 'choice-59',
            text: 'Stay your course',
            description: 'Find your own solution',
            targetNodeId: 'node-46',
            order: 2,
          },
        ],
      },
      {
        id: 'node-37',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Middle Way Found',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration: 'Rejecting absolute power, you seek balance. The forest responds, showing you a path of partnership—strong enough to protect, gentle enough to heal.',
        choices: [
          {
            id: 'choice-60',
            text: 'Embrace balance',
            description: 'Walk the middle path',
            targetNodeId: 'ending-5',
            order: 1,
          },
          {
            id: 'choice-61',
            text: 'Seek the Heart Tree',
            description: 'Learn more before deciding',
            targetNodeId: 'node-15',
            order: 2,
          },
        ],
      },
      {
        id: 'node-38',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Warrior Gardener',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration: 'You envision a new path—neither pure peace nor domination, but righteous action in service of harmony. You will fight when necessary, nurture when possible.',
        choices: [
          {
            id: 'choice-62',
            text: 'Accept this role',
            description: 'Become the warrior gardener',
            targetNodeId: 'ending-2',
            order: 1,
          },
          {
            id: 'choice-63',
            text: 'Continue exploring',
            description: 'Gather more wisdom first',
            targetNodeId: 'node-47',
            order: 2,
          },
        ],
      },
      {
        id: 'node-39',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Named Hero',
        imageUrl: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
        narration: 'As you write your name, the book glows with acceptance. You feel the weight of legacy and the strength of all who came before. The Heart Tree calls to you directly.',
        choices: [
          {
            id: 'choice-64',
            text: 'Answer the call',
            description: 'Go to the Heart Tree',
            targetNodeId: 'node-15',
            order: 1,
          },
          {
            id: 'choice-65',
            text: 'Visit the blight first',
            description: 'Face the danger while prepared',
            targetNodeId: 'ending-8',
            order: 2,
          },
        ],
      },
      {
        id: 'node-40',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Free Wanderer',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration: 'Without a name in the book, you remain undefined, unpredictable—a free agent. You can go anywhere, be anything, bound only by your own choices.',
        choices: [
          {
            id: 'choice-66',
            text: 'Stay in the forest',
            description: 'Find your place here',
            targetNodeId: 'ending-1',
            order: 1,
          },
          {
            id: 'choice-67',
            text: 'Return to the world',
            description: 'Share what you learned',
            targetNodeId: 'ending-6',
            order: 2,
          },
        ],
      },
      {
        id: 'node-41',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Journey North',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'With the root charm in hand, you set out toward the blighted lands. The forest grows darker, the trees twisted. The tower looms in the distance.',
        choices: [
          {
            id: 'choice-68',
            text: 'Approach the tower',
            description: 'Face the source directly',
            targetNodeId: 'node-48',
            order: 1,
          },
          {
            id: 'choice-69',
            text: 'Help the suffering creatures',
            description: 'Heal what you can along the way',
            targetNodeId: 'node-49',
            order: 2,
          },
        ],
      },
      {
        id: 'node-42',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Pure Heart',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'Without the charm, you must rely on your own inner strength. The blight tests you immediately, but your heart is true. You push through, feeling the forest\'s gratitude.',
        choices: [
          {
            id: 'choice-70',
            text: 'Confront the mage spirit',
            description: 'End the curse at its source',
            targetNodeId: 'ending-8',
            order: 1,
          },
          {
            id: 'choice-71',
            text: 'Purify the land',
            description: 'Become a living ward',
            targetNodeId: 'ending-7',
            order: 2,
          },
        ],
      },
      {
        id: 'node-43',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Quest Begins',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        narration: 'You set out to gather the ritual components. The oldest owl lives in the highest branches of the grandfather tree, the source water flows from a crystal spring, and the sacred soil rests in the grove of whispers.',
        choices: [
          {
            id: 'choice-72',
            text: 'Climb for the feather',
            description: 'Start with the owl',
            targetNodeId: 'node-50',
            order: 1,
          },
          {
            id: 'choice-73',
            text: 'Seek the spring first',
            description: 'Water is life',
            targetNodeId: 'node-3',
            order: 2,
          },
        ],
      },
      {
        id: 'node-44',
        storyId: 'story-1',
        type: 'decision',
        title: 'Calling Allies',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration: 'You realize this quest is too great for one person. You call upon the fairies, the root dwellers, and even the shadow creatures to aid you. Together, you might succeed where alone you would fail.',
        choices: [
          {
            id: 'choice-74',
            text: 'Lead the alliance',
            description: 'Unite the forest beings',
            targetNodeId: 'ending-2',
            order: 1,
          },
          {
            id: 'choice-75',
            text: 'Let them lead',
            description: 'They know the forest better',
            targetNodeId: 'ending-5',
            order: 2,
          },
        ],
      },
      {
        id: 'node-45',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Eastern Journey',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
        narration: 'You follow the wanderer east through marshes and mist. They speak little, but seem to know exactly where they are going. After days of travel, you smell something miraculous—water that smells of healing and hope.',
        choices: [
          {
            id: 'choice-76',
            text: 'Drink from the spring',
            description: 'Gain its healing power',
            targetNodeId: 'ending-10',
            order: 1,
          },
          {
            id: 'choice-77',
            text: 'Bottle it for the forest',
            description: 'Save the healing for others',
            targetNodeId: 'ending-8',
            order: 2,
          },
        ],
      },
      {
        id: 'node-46',
        storyId: 'story-1',
        type: 'decision',
        title: 'Your Own Wisdom',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'You trust your own instincts over the guidance of others. The forest has shown you much, and you begin to piece together a solution no one else has considered—using your own life force to heal the land.',
        choices: [
          {
            id: 'choice-78',
            text: 'Make the sacrifice',
            description: 'Give yourself to save the forest',
            targetNodeId: 'ending-7',
            order: 1,
          },
          {
            id: 'choice-79',
            text: 'Find another way',
            description: 'There must be an alternative',
            targetNodeId: 'ending-3',
            order: 2,
          },
        ],
      },
      {
        id: 'node-47',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Final Lesson',
        imageUrl: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
        narration: 'Before committing to your path, you seek one last piece of wisdom. An ancient tortoise, older than the forest itself, speaks slowly of cycles—how death brings life, how endings are beginnings, how the forest has always healed itself.',
        choices: [
          {
            id: 'choice-80',
            text: 'Trust the cycle',
            description: 'Let nature heal itself',
            targetNodeId: 'ending-5',
            order: 1,
          },
          {
            id: 'choice-81',
            text: 'Act as catalyst',
            description: 'Speed the healing along',
            targetNodeId: 'ending-2',
            order: 2,
          },
        ],
      },
      {
        id: 'node-48',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Dark Tower',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration: 'The tower rises before you, black stone that seems to absorb light. Corruption seeps from every crack. At its base, you feel the presence of the forgotten mage—a spirit bound by its own dark magic, desperate for release.',
        choices: [
          {
            id: 'choice-82',
            text: 'Destroy the tower',
            description: 'End the curse permanently',
            targetNodeId: 'ending-8',
            order: 1,
          },
          {
            id: 'choice-83',
            text: 'Free the mage spirit',
            description: 'Show mercy to the tormented',
            targetNodeId: 'ending-9',
            order: 2,
          },
        ],
      },
      {
        id: 'node-49',
        storyId: 'story-1',
        type: 'decision',
        title: 'Healing Hands',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        narration: 'As you travel, you stop to heal every suffering creature you find—a rabbit with corrupted paws, a bird with darkened wings, a fawn lost from its mother. Each healing takes a piece of your energy, but fills your heart.',
        choices: [
          {
            id: 'choice-84',
            text: 'Continue healing',
            description: 'Save who you can',
            targetNodeId: 'ending-11',
            order: 1,
          },
          {
            id: 'choice-85',
            text: 'Push on to the tower',
            description: 'End the source first',
            targetNodeId: 'node-48',
            order: 2,
          },
        ],
      },
      {
        id: 'node-50',
        storyId: 'story-1',
        type: 'decision',
        title: 'The Grandfather Tree',
        imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
        narration: 'You climb the ancient tree, higher than you thought possible. Near the top, you find the oldest owl, its eyes holding centuries of wisdom. It offers you a single feather willingly, but warns that the ritual will change you forever.',
        choices: [
          {
            id: 'choice-86',
            text: 'Accept the feather',
            description: 'Continue the ritual',
            targetNodeId: 'node-43',
            order: 1,
          },
          {
            id: 'choice-87',
            text: 'Ask the owl more',
            description: 'Learn what change awaits',
            targetNodeId: 'ending-6',
            order: 2,
          },
        ],
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
      {
        id: 'ending-7',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Silver Guardian',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration:
          'The silver acorn you carried blooms into a magnificent tree that becomes a sanctuary for all magical creatures. You become its eternal guardian, watching over the forest for centuries. Travelers speak of the Silver Tree and its mysterious protector who appears only to those in true need.',
        choices: [],
      },
      {
        id: 'ending-8',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Blight Slayer',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration:
          'Your journey to the north succeeds beyond imagination. Not only do you stop the blight, but you discover its source—a forgotten artifact of dark magic. By destroying it, you become known throughout the land as the Blight Slayer, and forests everywhere flourish in your name.',
        choices: [],
      },
      {
        id: 'ending-9',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Shadow Walker',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration:
          'The shadow creatures adopt you as one of their own. You learn to move between light and darkness, becoming a mediator between the seen and unseen worlds. You help lost souls find their way and protect the innocent from things that dwell in the dark.',
        choices: [],
      },
      {
        id: 'ending-10',
        storyId: 'story-1',
        type: 'ending',
        title: 'The River Spirit',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
        narration:
          'The water sprites welcome you into their realm. You become a river spirit yourself, flowing through all the waters of the world. You guide boats to safety, bless fishermen with abundant catches, and ensure the waters remain pure for generations.',
        choices: [],
      },
      {
        id: 'ending-11',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Memory Keeper',
        imageUrl: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
        narration:
          'The fisherman\'s tea awakens a latent gift—you can now see the memories of places and objects. You document the history of the enchanted forest, preserving its stories for future generations. Your books become legendary, studied by scholars and dreamers alike.',
        choices: [],
      },
      {
        id: 'ending-12',
        storyId: 'story-1',
        type: 'ending',
        title: 'The Deer Whisperer',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        narration:
          'By following the deer, you learn their ancient ways and become able to speak with all forest creatures. You mediate disputes between animals and humans, ensuring the forest remains a place where all can coexist in harmony. The deer consider you family.',
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
