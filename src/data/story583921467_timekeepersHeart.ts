import { Story } from '../types';

export const timekeepersHeartStory: Story = {
  id: 'story-583921467',
  title: 'The Timekeeper\'s Heart',
  description:
    'When a temporal engineer and her partner discover the clockwork core that binds their futures together, every choice risks rewriting their love across centuries.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1496304840334-955f7ef350f9?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1496304840334-955f7ef350f9?auto=format&fit=crop&w=400&q=80',
  author: 'Nova Strickland',
  genre: 'romance',
  involvement: 'medium',
  estimatedDuration: 40,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-05',
  updatedAt: '2025-01-05',
  totalNodes: 16,
  totalEndings: 4,
  startNodeId: 'story-583921467-1',
  nodes: [
    {
      id: 'story-583921467-1',
      storyId: 'story-583921467',
      type: 'start',
      title: 'Temporal Proposal',
      imageUrl: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
      narration:
        'The city ticks in harmony with the Chronosphere beneath it. You and your partner, Elias, stand before the Heart Engine—a glittering mechanism capable of weaving futures. Tonight you intended to propose, but the engine pulses erratically, projecting fractured visions of the two of you apart. The brass gears grind against each other, and emerald sparks shower across the observation deck. Do you confront the anomaly head-on or retreat to research the ancient prophecy encoded within the heart\'s crystalline matrix?',
      choices: [
        {
          id: 'story-583921467-c1',
          text: 'Dive into the data archives to decode the warning',
          targetNodeId: 'story-583921467-2',
          order: 1,
        },
        {
          id: 'story-583921467-c2',
          text: 'Head to the observatory and trace the temporal fault',
          targetNodeId: 'story-583921467-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-2',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'First Crossroads',
      imageUrl: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=800&q=80',
      narration:
        'Your chosen path leads to a chamber where temporal echoes linger. Whispers of conversations you have not yet had drift through the air like dust motes. The Heart Engine\'s influence is stronger here—reality itself seems to bend around your presence. You discover a temporal anchor, a fixed point that resists the engine\'s fluctuations. It pulses with dual resonance, suggesting it responds to both your biodata and Elias\'s. You could attempt to stabilize this anchor or investigate why it recognizes both your signatures simultaneously.',
      choices: [
        {
          id: 'story-583921467-c3',
          text: 'Channel energy to stabilize the temporal anchor',
          targetNodeId: 'story-583921467-3',
          order: 1,
        },
        {
          id: 'story-583921467-c4',
          text: 'Analyze why the anchor recognizes both signatures',
          targetNodeId: 'story-583921467-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-3',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Resonance Chamber',
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
      narration:
        'The anchor responds to your presence, revealing a hidden resonance chamber beneath the floor panels. Crystal formations line the walls, each one humming at a frequency that matches different emotional states. You recognize grief, joy, fear, and love—all preserved in mineral form. One crystal, larger than the others, projects a holographic record of your first meeting with Elias, but with subtle differences. In this version, you never spoke to him. The Heart Engine is showing you a timeline where loneliness prevailed. Do you shatter this crystal to prevent that future, or preserve it as a warning?',
      choices: [
        {
          id: 'story-583921467-c5',
          text: 'Shatter the crystal of loneliness',
          targetNodeId: 'story-583921467-4',
          order: 1,
        },
        {
          id: 'story-583921467-c6',
          text: 'Preserve the crystal as a temporal warning',
          targetNodeId: 'story-583921467-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-4',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Echoes of Choice',
      imageUrl: 'https://images.unsplash.com/photo-1526404428533-88ff808cf08b?auto=format&fit=crop&w=800&q=80',
      narration:
        'Your decision ripples through the chamber, causing the other crystals to rearrange themselves into a constellation pattern. The Heart Engine\'s neural lattice manifests as a glowing web in the center of the room, and it speaks directly into your mind. It explains that every choice creates temporal drag—a resistance that pulls timelines toward certain outcomes. Your relationship with Elias has generated more drag than any other pairing in the engine\'s memory. It offers to reduce this drag, making your future together smoother but less passionate. Do you accept the engine\'s optimization?',
      choices: [
        {
          id: 'story-583921467-c7',
          text: 'Accept the reduced drag and smoother path',
          targetNodeId: 'story-583921467-5',
          order: 1,
        },
        {
          id: 'story-583921467-c8',
          text: 'Reject optimization and keep the passionate resistance',
          targetNodeId: 'story-583921467-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-5',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'The Engine\'s Judgment',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      narration:
        'The neural lattice pulses with what feels like curiosity. It presents you with a scenario: Elias has been offered a position at a distant chronostation that would separate you for three years. In one timeline, you support his ambition; in another, you ask him to stay. Both choices lead to different kinds of happiness and different kinds of regret. The engine asks which version of you it should cultivate. You realize this is not hypothetical—the engine can influence probability to make either outcome certain. Your answer here will shape reality itself.',
      choices: [
        {
          id: 'story-583921467-c9',
          text: 'Support his ambition and accept separation',
          targetNodeId: 'story-583921467-6',
          order: 1,
        },
        {
          id: 'story-583921467-c10',
          text: 'Ask him to stay and prioritize togetherness',
          targetNodeId: 'story-583921467-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-6',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Manifest Consequences',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      narration:
        'The chamber walls become transparent, revealing two parallel realities unfolding simultaneously. In one, Elias boards a transport vessel, waving goodbye with a mixture of excitement and sorrow. In the other, he remains by your side, smiling but occasionally glancing at the stars with unspoken longing. The Heart Engine informs you that both scenarios are now equally probable until you make your next choice. It offers a compromise: a temporal loop where he experiences both paths while remaining physically present with you. But loops create scars on the soul. Do you accept the compromise or commit to one reality?',
      choices: [
        {
          id: 'story-583921467-c11',
          text: 'Accept the temporal loop compromise',
          targetNodeId: 'story-583921467-7',
          order: 1,
        },
        {
          id: 'story-583921467-c12',
          text: 'Commit to a single reality',
          targetNodeId: 'story-583921467-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-7',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Soul Scars',
      imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
      narration:
        'The weight of your decision settles upon you like a physical burden. The Heart Engine reveals that your biodata now carries the imprint of your choice—either the complexity of parallel experiences or the clarity of singular commitment. Elias enters the chamber, drawn by the energy fluctuations. He looks at you with complete trust, unaware that you have just shaped his destiny. The engine offers to share your knowledge with him, letting him understand the choice you made, or it can preserve his innocence, keeping the burden yours alone. Do you share the truth or protect him from it?',
      choices: [
        {
          id: 'story-583921467-c13',
          text: 'Share the truth of your temporal choice',
          targetNodeId: 'story-583921467-8',
          order: 1,
        },
        {
          id: 'story-583921467-c14',
          text: 'Protect him and bear the burden alone',
          targetNodeId: 'story-583921467-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-8',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Partnership Tested',
      imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      narration:
        'Elias reacts to your revelation—or your silence—in ways that confirm the depth of your bond. If you shared the truth, he embraces the complexity and pledges to navigate it with you. If you protected him, he senses your burden anyway and offers to share it without knowing its source. The Heart Engine observes this exchange with what seems like approval. It now presents its final challenge before the proposal moment can proceed: you must synchronize your heartbeats with the engine\'s core rhythm, creating a temporal tether that will bind your fates. But the process requires absolute trust. Any doubt will create a fracture.',
      choices: [
        {
          id: 'story-583921467-c15',
          text: 'Begin the heartbeat synchronization',
          targetNodeId: 'story-583921467-9',
          order: 1,
        },
        {
          id: 'story-583921467-c16',
          text: 'Pause and discuss doubts before proceeding',
          targetNodeId: 'story-583921467-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-9',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Synchronization Ritual',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      narration:
        'You and Elias place your hands on the Heart Engine\'s core, feeling its warmth pulse against your palms. The synchronization begins gradually—first your breathing aligns, then your neural patterns, and finally your hearts find a shared rhythm. The experience is intimate beyond description, as if your souls are being woven together from separate threads into a single tapestry. The engine reveals memories you have forgotten: moments of kindness, patience, and understanding that formed the foundation of your love. But it also shows moments of selfishness and missed opportunities. You must choose to accept the complete picture of your relationship or reject the flawed parts.',
      choices: [
        {
          id: 'story-583921467-c17',
          text: 'Accept the complete truth of your shared history',
          targetNodeId: 'story-583921467-10',
          order: 1,
        },
        {
          id: 'story-583921467-c18',
          text: 'Focus only on the positive memories',
          targetNodeId: 'story-583921467-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-10',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'The Core Reveals',
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
      narration:
        'The Heart Engine\'s core opens like a mechanical flower, revealing a crystalline heart that beats in perfect time with your synchronized rhythm. This is the true source of the engine\'s power—not machinery, but a captured moment of perfect love from the distant past. The engine explains that it was created to preserve such moments, to study them, and ultimately to replicate them. It asks if you are willing to contribute your love to its archive, making your relationship a template for future generations. In exchange, you and Elias would gain limited temporal immunity—protection from paradox and premature separation. But your love would no longer be entirely private.',
      choices: [
        {
          id: 'story-583921467-c19',
          text: 'Contribute your love to the engine\'s archive',
          targetNodeId: 'story-583921467-11',
          order: 1,
        },
        {
          id: 'story-583921467-c20',
          text: 'Keep your love private and refuse the offer',
          targetNodeId: 'story-583921467-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-11',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Template or Treasure',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      narration:
        'Your decision regarding the archive resonates through the engine\'s systems. If you chose to contribute, your relationship becomes part of the Chronosphere\'s permanent record, studied and celebrated by future temporal engineers. If you refused, the engine respects your privacy but warns that your bond will remain vulnerable to temporal disturbances. Elias squeezes your hand, his eyes reflecting the crystalline light. He speaks for the first time since the synchronization began, telling you that his answer to the unasked proposal has always been yes—regardless of what the engine offers or demands. His certainty gives you the strength for the final choice that approaches.',
      choices: [
        {
          id: 'story-583921467-c21',
          text: 'Proceed to the final commitment ceremony',
          targetNodeId: 'story-583921467-12',
          order: 1,
        },
        {
          id: 'story-583921467-c22',
          text: 'Ask for a moment to reflect privately',
          targetNodeId: 'story-583921467-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-12',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Final Threshold',
      imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80',
      narration:
        'The Heart Engine prepares for the final phase of your journey together. It has monitored your choices, evaluated your compatibility, and assessed your resilience. The verdict is clear: you and Elias represent a rare configuration—a love that can withstand temporal stress without fracturing. The engine now offers you four possible futures, each the culmination of the path you have walked. The Infinite Vows path honors your honesty and acceptance. The Preserved Moments path reflects your choice to archive your love. The Separate Currents path acknowledges that some loves are meant to shape us rather than define us. The Unwritten Pages path celebrates your rejection of predetermined outcomes. Choose now, and know that this choice, unlike the others, cannot be undone.',
      choices: [
        {
          id: 'story-583921467-c23',
          text: 'Choose the path of Infinite Vows',
          targetNodeId: 'story-583921467-ending-1',
          order: 1,
        },
        {
          id: 'story-583921467-c24',
          text: 'Choose the path of Preserved Moments',
          targetNodeId: 'story-583921467-ending-2',
          order: 2,
        },
        {
          id: 'story-583921467-c25',
          text: 'Choose the path of Separate Currents',
          targetNodeId: 'story-583921467-ending-3',
          order: 3,
        },
        {
          id: 'story-583921467-c26',
          text: 'Choose the path of Unwritten Pages',
          targetNodeId: 'story-583921467-ending-4',
          order: 4,
        },
      ],
    },
    {
      id: 'story-583921467-ending-1',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Infinite Vows',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      narration:
        'Heartbeats synchronized through truth and sacrifice, you and Elias phase into a shared continuum that transcends ordinary time. You watch your wedding unfold beneath a sky of arresting auroras, every moment echoed across infinite timelines. The Heart Engine purrs steadily, its core now resonating with the harmony of your authentic bond. The future is yours to write together, each page filled with the courage of honesty. The Timekeeper\'s Heart beats on, intertwined with your own, a testament to love that chose understanding over ease. Across every possible world, you find each other, choose each other, and keep choosing each other for all time.',
      choices: [],
    },
    {
      id: 'story-583921467-ending-2',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Preserved Moments',
      imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
      narration:
        'The Heart Engine seals your choice in crystalline permanence, freezing this moment of connection across all possible timelines. Your love becomes part of the Chronosphere\'s eternal archive, studied by future generations as a perfect example of human connection. Students of temporal engineering will learn from your choices, your sacrifices, and your triumphs. You and Elias live knowing that your bond serves a greater purpose—providing a template for love that endures beyond individual lifetimes. Time flows around you like a river around stones, present and constant. Your love becomes a fixed point, unchanging and eternal, a lighthouse for those who navigate the troubled waters of time.',
      choices: [],
    },
    {
      id: 'story-583921467-ending-3',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Separate Currents',
      imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?auto=format&fit=crop&w=800&q=80',
      narration:
        'The paths diverge, and you find yourself walking forward alone. You and Elias have chosen separate futures, recognizing that some loves are meant to shape us rather than define our entire journey. The Heart Engine continues its endless ticking, indifferent to your parting. Years later, you catch fleeting glimpses of a life where you stood together—phantom memories of a future that never was. The knowledge of what might have been lingers like a phantom heartbeat, a bittersweet reminder that love, like time, flows only in one direction. Yet you carry the lessons of your time together, and in that way, Elias remains with you always, a chapter completed but never forgotten.',
      choices: [],
    },
    {
      id: 'story-583921467-ending-4',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Unwritten Pages',
      imageUrl: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=800&q=80',
      narration:
        'You reject the prescribed paths and step into uncertainty. The Heart Engine falls silent behind you, its predictions rendered irrelevant by your choice. Outside the Chronosphere, the city continues its endless rhythm, unaware of the possibilities you have left unexplored. With Elias at your side—or waiting to be found—you face a future unmapped by temporal engineering. There are no guarantees here, no calculated outcomes, only the terrifying freedom of genuine choice. You reach for Elias\'s hand, and together you walk toward whatever comes next, authors of a story the engine could never have written. The proposal remains unspoken, but the commitment is clear: you will discover your future together, one unwritten page at a time.',
      choices: [],
    },
  ],
};
