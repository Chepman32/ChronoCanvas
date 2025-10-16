import { Story } from '../types';

export const cosmicCastawayStory: Story = {
  id: 'story-10012001',
  title: 'Cosmic Castaway',
  description:
    `Awakened in a dying spacecraft, you must decide whether to gamble on emergency repairs or risk an uncharted planet below. Every choice pulls you deeper into a fight for survival far from home.`,
  coverImageUrl:
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&w=400&q=80',
  author: 'Commander Lyra Hayes',
  genre: ['scifi', 'adventure'],
  difficulty: 'medium',
  estimatedDuration: 20,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-21',
  updatedAt: '2025-01-21',
  totalNodes: 7,
  totalEndings: 4,
  startNodeId: 'story-10012001-1',
  nodes: [
    {
      id: 'story-10012001-1',
      storyId: 'story-10012001',
      type: 'start',
      title: 'Catastrophic Wake-Up',
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      narration:
        `You jolt awake to alarms blaring and lights flickering. Your spacecraft has been struck by debris, leaving you adrift in the void. The hull is breached and oxygen is low. Through the cockpit window, you see a desolate planet below and the endless expanse of stars. With communications down and systems failing, you must act quickly if you hope to survive.`,
      choices: [
        {
          id: 'story-10012001-c1',
          text: `Try to repair the ship's systems and signal for help`,
          targetNodeId: 'story-10012001-2',
          order: 1,
        },
        {
          id: 'story-10012001-c2',
          text: 'Abandon ship in an escape pod toward the planet',
          targetNodeId: 'story-10012001-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-2',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Critical Repairs',
      imageUrl: 'https://images.unsplash.com/photo-1564053489984-317bbd824340',
      narration:
        `You stay aboard, heart pounding as you float through the crippled cabin. The oxygen meter is dropping. Sparks fly from a damaged console. You have limited time and tools. You stabilize your breathing and consider your options. The communication array is offline and the life support is failing. If you can fix one, it might make the difference between life and death.`,
      choices: [
        {
          id: 'story-10012001-c3',
          text: 'Repair the communications array to call for rescue',
          targetNodeId: 'story-10012001-4',
          order: 1,
        },
        {
          id: 'story-10012001-c4',
          text: 'Focus on the life support system to buy more time',
          targetNodeId: 'story-10012001-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-3',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Escape Pod Descent',
      imageUrl: 'https://images.unsplash.com/photo-1580706483913-92eb8ca5da69',
      narration:
        `Deciding the ship is beyond saving, you seal your helmet and climb into the one-person escape pod. With a whoosh, it ejects. Through a small porthole, you watch your ruined ship recede. The pod hurtles toward the planet's surface, rattling violently. You brace yourself and moments later, crash-land on a barren, rocky plain under an alien sky. Staggering out, you survey endless red deserts and jagged mountains. The pod's systems are intact but resources are scant. As night approaches rapidly, you must determine your next move on this hostile world.`,
      choices: [
        {
          id: 'story-10012001-c5',
          text: `Climb a ridge and activate the pod's beacon, hoping someone hears it`,
          targetNodeId: 'story-10012001-6',
          order: 1,
        },
        {
          id: 'story-10012001-c6',
          text: 'Gather supplies and search for water and shelter in the valley',
          targetNodeId: 'story-10012001-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-4',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Signal Received',
      imageUrl: 'https://images.unsplash.com/photo-1564053489984-317bbd824340',
      narration:
        `Ignoring the thinning air, you reroute power to the communications array and send out a mayday. For agonizing minutes, there is no response. Just as darkness edges your vision, a crackling voice answers--a patrol ship picked up your distress signal! You collapse with relief as they home in on your beacon. Sometime later, you open your eyes aboard a rescue craft, an oxygen mask on your face. Through the window, you see your shattered ship being left behind. You are safe, saved by the signal you managed to send in time.`,
      choices: [],
    },
    {
      id: 'story-10012001-5',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Silent Drift',
      imageUrl: 'https://images.unsplash.com/photo-1614314266357-7bb1169e0396',
      narration:
        `You devote precious energy to repairing life support--patching leaks and swapping in emergency oxygen canisters. The air stabilizes, buying you hours... but without communication, no one knows you are stranded. You drift alone in the silent darkness of space as time stretches on. Eventually, the oxygen runs out and the cold creeps in. Gazing at distant stars, you make peace with your fate. Your ship becomes your tomb, endlessly orbiting--a lone voyager gone silent in the void.`,
      choices: [],
    },
    {
      id: 'story-10012001-6',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Beacon Tragedy',
      imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
      narration:
        `Determined to call for help, you climb the tallest nearby rise and activate the escape pod's distress beacon. A weak signal flickers out. Hours pass with no reply. As you descend, the rocky ground gives way--you slip and tumble down a ravine, badly injuring yourself. Night falls, and with it, sub-zero cold. In the morning light, the beacon still blinks dutifully beside you, but you never stir again. Your last gamble ends in tragedy, your story lost on a lonely world.`,
      choices: [],
    },
    {
      id: 'story-10012001-7',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Red World Survivor',
      imageUrl: 'https://images.unsplash.com/photo-1593923416234-c99746aff9c8',
      narration:
        `Accepting that rescue may never come, you salvage what you can from the pod--a water filter, a knife, a thermal blanket--and set off into the unknown. After days of hardship, you discover a sheltered canyon with a trickle of fresh water and edible fungi. It is not paradise, but it is life. As months pass, you learn to hunt the small rock-creatures and endure the crimson planet's brutal conditions. Each night, you stare at the stars, wondering if anyone out there wonders what became of you--the cosmic castaway who now calls this alien world home.`,
      choices: [],
    },
  ],
};
