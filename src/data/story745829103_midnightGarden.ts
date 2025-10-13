import { Story } from '../types';

export const midnightGardenStory: Story = {
  id: 'story-745829103',
  title: 'The Midnight Garden',
  description:
    "You inherit a Victorian mansion with a garden that only blooms at midnight. When you meet the enigmatic gardener who tends it, you discover he's been waiting a century for someone who can see the flowers. As magic intertwines with romance, you must choose between your world and his.",
  coverImageUrl:
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400',
  author: 'Isabella Crane',
  genre: ['romance', 'fantasy'],
  difficulty: 'medium',
  estimatedDuration: 38,
  isPremium: true,
  productId: 'com.app.story.midnight-garden',
  version: '1.0',
  createdAt: '2025-01-18',
  updatedAt: '2025-01-18',
  totalNodes: 23,
  totalEndings: 4,
  startNodeId: 'story-745829103-1',
  nodes: [
    // Nodes copied from user specification
    {
      id: 'story-745829103-1',
      storyId: 'story-745829103',
      type: 'start',
      title: 'The Inheritance',
      imageUrl:
        'https://images.unsplash.com/photo-1605283176568-9b41fde0f4d7?w=800',
      narration:
        'The letter from the estate lawyer arrived on your thirtieth birthday. A great-aunt you never knew existed has left you Thornewood Manor—a crumbling Victorian mansion on the edge of a forgotten town. The condition is strange: you must live there for one full moon cycle before deciding whether to keep it. As you arrive at midnight, the iron gates creak open on their own, and you smell flowers blooming impossibly in the winter air.',
      choices: [
        {
          id: 'story-745829103-c1',
          text: 'Follow the scent of flowers into the garden',
          description: 'Investigate the mysterious fragrance',
          targetNodeId: 'story-745829103-2',
          order: 1,
        },
        {
          id: 'story-745829103-c2',
          text: 'Enter the mansion first to explore',
          description: 'Take things in order',
          targetNodeId: 'story-745829103-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-2',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Luminescent Blooms',
      imageUrl:
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      narration:
        "The garden glows with otherworldly light. Flowers you've never seen—petals like stained glass, stems that pulse with silver luminescence—bloom in impossible arrangements. At the garden's heart stands a man in a worn coat, tending the flowers with careful devotion. He looks up, and his eyes widen in shock. \"You can see them,\" he breathes. \"You can actually see the flowers.\" His face is beautiful and ageless, touched by moonlight and something more.",
      choices: [
        {
          id: 'story-745829103-c3',
          text: "Ask who he is and why he's here",
          description: 'Demand answers',
          targetNodeId: 'story-745829103-4',
          order: 1,
        },
        {
          id: 'story-745829103-c4',
          text: 'Reach out to touch one of the glowing flowers',
          description: 'Let wonder guide you',
          targetNodeId: 'story-745829103-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-3',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Echoing Halls',
      imageUrl:
        'https://images.unsplash.com/photo-1529429617124-aee711fa2be8?w=800',
      narration:
        'The mansion swallows you in velvet darkness. Oil portraits watch from the walls, and the air hums with a note you feel more than hear. Moonlight leaks through fractured stained glass, painting the floor in sapphire patterns.',
      choices: [
        {
          id: 'story-745829103-c5',
          text: 'Follow the humming through the corridor',
          description: 'Let the sound guide you',
          targetNodeId: 'story-745829103-6',
          order: 1,
        },
        {
          id: 'story-745829103-c6',
          text: 'Force the sealed study door open',
          description: 'Seek answers in the manor',
          targetNodeId: 'story-745829103-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-4',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Moonlit Confession',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'The gardener straightens, eyes glinting like silvered leaves. His voice trembles between relief and dread as he says, "My name is Elias Thorne, bound to this garden until the right heir arrives." The petals around you pulse, echoing his heartbeat.',
      choices: [
        {
          id: 'story-745829103-c7',
          text: 'Demand the truth behind the blooms',
          description: 'Press for every secret',
          targetNodeId: 'story-745829103-8',
          order: 1,
        },
        {
          id: 'story-745829103-c8',
          text: 'Promise to listen with an open heart',
          description: 'Offer trust before judgment',
          targetNodeId: 'story-745829103-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-5',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Glimmering Vision',
      imageUrl:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      narration:
        'As your fingers brush the bloom, liquid light pours through you. Your pulse syncs with the garden and you glimpse memories that are not yours—moonlit dances, whispered vows, a lonely gardener tending petals that outlive every season.',
      choices: [
        {
          id: 'story-745829103-c9',
          text: 'Let the vision pull you deeper',
          description: 'Surrender to the memory',
          targetNodeId: 'story-745829103-9',
          order: 1,
        },
        {
          id: 'story-745829103-c10',
          text: 'Break contact and steady yourself',
          description: 'Reclaim control',
          targetNodeId: 'story-745829103-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-6',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Moonbound Conservatory',
      imageUrl:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800',
      narration:
        'A domed conservatory waits beyond a curtain of ivy. Inside, instruments of brass and crystal hang like constellations, each tremor of the humming note setting them aglow. A hidden door is edged with frost, exhaling midnight air.',
      choices: [
        {
          id: 'story-745829103-c11',
          text: 'Follow the humming toward the hidden door',
          description: 'Discover what the sound protects',
          targetNodeId: 'story-745829103-14',
          order: 1,
        },
        {
          id: 'story-745829103-c12',
          text: 'Clip a glowing bloom to show Elias',
          description: 'Carry proof back to the garden',
          targetNodeId: 'story-745829103-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-7',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Ancestral Study',
      imageUrl:
        'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800',
      narration:
        'Dust billows as the sealed study yields. Ledgers, maps, and a portrait of a woman who shares your eyes crowd the shelves. A silver key shaped like a crescent rests atop a velvet journal, waiting for someone to claim it.',
      choices: [
        {
          id: 'story-745829103-c13',
          text: 'Open the velvet-bound journal',
          description: 'Learn what your ancestor recorded',
          targetNodeId: 'story-745829103-11',
          order: 1,
        },
        {
          id: 'story-745829103-c14',
          text: 'Pocket the silver crescent key',
          description: 'Take the talisman for later',
          targetNodeId: 'story-745829103-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-8',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Cursed Wakefulness',
      imageUrl:
        'https://images.unsplash.com/photo-1529088672371-4e9923770c70?w=800',
      narration:
        'Elias exhales, revealing that the garden blooms only for the Thorne bloodline. He explains how he pledged himself to guard the liminal gate until an heir could see the midnight blossoms and decide the manor\'s fate. The weight of generations hangs between you.',
      choices: [
        {
          id: 'story-745829103-c15',
          text: 'Press him about the gate\'s power',
          description: 'Understand the rules of the binding',
          targetNodeId: 'story-745829103-11',
          order: 1,
        },
        {
          id: 'story-745829103-c16',
          text: 'Ask how you can free him',
          description: 'Offer to shoulder part of the burden',
          targetNodeId: 'story-745829103-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-9',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Shared Memory',
      imageUrl:
        'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800',
      narration:
        'Your vision synchronizes with Elias\'s past—decades of solitude, tending blooms for heirs who never saw them. He watches you gently, offering his hand as the garden\'s glow wraps around you both like a slow tide.',
      choices: [
        {
          id: 'story-745829103-c17',
          text: 'Take his hand and join the resonance',
          description: 'Let the garden link your heartbeats',
          targetNodeId: 'story-745829103-12',
          order: 1,
        },
        {
          id: 'story-745829103-c18',
          text: 'Release his hand and study the magic',
          description: 'Keep your mind clear for strategy',
          targetNodeId: 'story-745829103-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-10',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Pulse of Starlight',
      imageUrl:
        'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=800',
      narration:
        'The energy you pulled back coils inside your chest like a captured comet. Every heartbeat sends sparks down your arms, and the flowers nearest you bloom brighter, bending toward your warmth.',
      choices: [
        {
          id: 'story-745829103-c19',
          text: 'Channel the power into the mansion\'s heart',
          description: 'Seek the source that craves reinforcement',
          targetNodeId: 'story-745829103-14',
          order: 1,
        },
        {
          id: 'story-745829103-c20',
          text: 'Hold the power within and return to Elias',
          description: 'Test whether you can bridge both worlds',
          targetNodeId: 'story-745829103-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-11',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Oath of Thornewood',
      imageUrl:
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800',
      narration:
        'The journal reveals a pact struck a century ago: the first heir able to see the midnight blooms must choose to keep the garden between worlds or seal it forever. Elias remains bound until that choice is made with a willing heart.',
      choices: [
        {
          id: 'story-745829103-c21',
          text: 'Swear to uphold the ancient vow',
          description: 'Accept the duty as written',
          targetNodeId: 'story-745829103-15',
          order: 1,
        },
        {
          id: 'story-745829103-c22',
          text: 'Decide to rewrite the pact entirely',
          description: 'Challenge the legacy',
          targetNodeId: 'story-745829103-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-12',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Resonant Promise',
      imageUrl:
        'https://images.unsplash.com/photo-1529338296731-c4280a44fcbe?w=800',
      narration:
        'Standing within the circle of moonlight, you feel the garden attune to both your breaths. Elias speaks of dawns he has never witnessed and futures he no longer dares imagine.',
      choices: [
        {
          id: 'story-745829103-c23',
          text: 'Step fully into the circle beside him',
          description: 'Bind your rhythm to the garden',
          targetNodeId: 'story-745829103-17',
          order: 1,
        },
        {
          id: 'story-745829103-c24',
          text: 'Keep one foot in the mortal world',
          description: 'Hold space for a shared dawn',
          targetNodeId: 'story-745829103-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-13',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Lunar Talisman',
      imageUrl:
        'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800',
      narration:
        'The crescent key warms in your palm, unfolding into a talisman etched with constellations. You sense it can disrupt the enchantment—or redirect it—depending on whose name you speak.',
      choices: [
        {
          id: 'story-745829103-c25',
          text: 'Use the talisman on the wrought-iron gate',
          description: 'Test whether you can open a new doorway',
          targetNodeId: 'story-745829103-19',
          order: 1,
        },
        {
          id: 'story-745829103-c26',
          text: 'Reveal the talisman to Elias',
          description: 'Invite him into the decision',
          targetNodeId: 'story-745829103-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-14',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Temporal Lantern',
      imageUrl:
        'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=800',
      narration:
        'Behind the humming door you find a lantern suspended in midair, its crystal core shattered into hovering fragments. Each shard holds a memory of the garden at different moons, suspended in time.',
      choices: [
        {
          id: 'story-745829103-c27',
          text: 'Reforge the crystal with your new energy',
          description: 'Stabilize the magic together',
          targetNodeId: 'story-745829103-17',
          order: 1,
        },
        {
          id: 'story-745829103-c28',
          text: 'Scatter the shards to break the loop',
          description: 'Set the trapped moments free',
          targetNodeId: 'story-745829103-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-15',
      storyId: 'story-745829103',
      type: 'decision',
      title: "Keeper's Burden",
      imageUrl:
        'https://images.unsplash.com/photo-1526481280695-3c469b3b6b34?w=800',
      narration:
        'Accepting the vow floods you with lineage—faces of keepers who chose duty over daylight. Elias watches, an unreadable tenderness in his gaze, as the garden recognizes you as its next guardian.',
      choices: [
        {
          id: 'story-745829103-c29',
          text: "Remain as the garden's eternal keeper",
          description: 'Stay with Elias beneath midnight blooms',
          targetNodeId: 'story-745829103-20',
          order: 1,
        },
        {
          id: 'story-745829103-c30',
          text: 'Invite Elias to share the role equally',
          description: 'Reshape the vow for two hearts',
          targetNodeId: 'story-745829103-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-16',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Breaking the Pact',
      imageUrl:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
      narration:
        'You challenge the oath, weaving new words into the air. The blooms flicker between fear and exhilaration while Elias steadies you, ready to follow wherever you lead.',
      choices: [
        {
          id: 'story-745829103-c31',
          text: 'Shatter the binding to free you both',
          description: 'Risk the garden for freedom',
          targetNodeId: 'story-745829103-22',
          order: 1,
        },
        {
          id: 'story-745829103-c32',
          text: 'Draw the magic into yourself alone',
          description: 'Carry the cost so Elias can leave',
          targetNodeId: 'story-745829103-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-17',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Aligned Heartbeats',
      imageUrl:
        'https://images.unsplash.com/photo-1530023367847-a683933f4177?w=800',
      narration:
        'With the lantern restored, the garden hums in harmony. Moonlight and heartbeat blend until you cannot tell where you end and Elias begins.',
      choices: [
        {
          id: 'story-745829103-c33',
          text: 'Stay in the midnight bloom with him',
          description: 'Choose a life woven from starlight',
          targetNodeId: 'story-745829103-20',
          order: 1,
        },
        {
          id: 'story-745829103-c34',
          text: 'Guide the garden toward the coming dawn',
          description: 'Share its magic with the waking world',
          targetNodeId: 'story-745829103-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-18',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Threshold of Dawn',
      imageUrl:
        'https://images.unsplash.com/photo-1521133573890-067a75c0e731?w=800',
      narration:
        'You hold the surge of magic without surrendering to it. The manor groans as the boundary between worlds thins, offering a path back to sunlight if you dare step through together.',
      choices: [
        {
          id: 'story-745829103-c35',
          text: 'Lead Elias toward the waking world',
          description: 'Promise him a sunrise',
          targetNodeId: 'story-745829103-21',
          order: 1,
        },
        {
          id: 'story-745829103-c36',
          text: 'Let the magic anchor you beside him',
          description: 'Accept a twilight existence',
          targetNodeId: 'story-745829103-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-19',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Unbound Time',
      imageUrl:
        'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800',
      narration:
        'As the talisman flares and shards scatter, time stutters around the garden. Petals freeze mid-fall while distant church bells ring backward. You have seconds to decide what this new freedom will cost.',
      choices: [
        {
          id: 'story-745829103-c37',
          text: 'Release the captured hours into the night',
          description: 'Let the garden choose its fate',
          targetNodeId: 'story-745829103-22',
          order: 1,
        },
        {
          id: 'story-745829103-c38',
          text: 'Lock the garden away from time forever',
          description: 'Seal the magic even if it wilts',
          targetNodeId: 'story-745829103-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-20',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Midnight Keeper',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'You choose the moonlit path, remaining with Elias as the garden\'s new heart. Together you tend the blooms that bridge worlds, greeting each night with shared laughter and whispered promises. The outside world fades, but the midnight garden thrives under your combined care.',
      choices: [],
    },
    {
      id: 'story-745829103-21',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Shared Sunrise',
      imageUrl:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      narration:
        'You guide Elias beyond the gates as dawn breaks, carrying a single luminous bloom as proof the magic can survive the sun. The manor awakens to laughter, music, and a garden that finally welcomes daylight. Love and legacy take root in the open air.',
      choices: [],
    },
    {
      id: 'story-745829103-22',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Shattered Spell',
      imageUrl:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
      narration:
        'You release the trapped hours, breaking the oath that bound Elias. The garden erupts in a final blaze of light before the blooms dissolve into stardust. Freedom is yours, but the midnight wonder becomes a memory you both carry into unknown futures.',
      choices: [],
    },
    {
      id: 'story-745829103-23',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Fading Petals',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'You seal the garden away to spare Elias the curse, but the magic withers without the moon. The manor grows quiet, the blooms preserved only in portraits and dreams. Every night you wonder if another choice might have saved the beauty you sacrificed.',
      choices: [],
    },
  ],
};

