import { Story } from '../types';

export const timekeepersHeartStory: Story = {
  id: 'story-583921467',
  title: `The Timekeeper's Heart`,
  description:
    `When a temporal engineer and her partner discover the clockwork core that binds their futures together, every choice risks rewriting their love across centuries.`,
  coverImageUrl:
    'https://images.unsplash.com/photo-1496304840334-955f7ef350f9?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1496304840334-955f7ef350f9?auto=format&fit=crop&w=400&q=80',
  author: 'Nova Strickland',
  genre: ['romance', 'scifi'],
  difficulty: 'medium',
  estimatedDuration: 22,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-05',
  updatedAt: '2025-01-05',
  totalNodes: 12,
  totalEndings: 5,
  startNodeId: 'story-583921467-1',
  nodes: [
    {
      id: 'story-583921467-1',
      storyId: 'story-583921467',
      type: 'start',
      title: 'Temporal Proposal',
      imageUrl: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef',
      narration:
        `The city ticks in harmony with the Chronosphere beneath it. You and your partner, Elias, stand before the Heart Engine--a glittering mechanism capable of weaving futures. Tonight you intended to propose, but the engine pulses erratically, projecting fractured visions of the two of you apart. Do you confront the anomaly head-on or research the prophecy encoded in the heart?`,
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
          targetNodeId: 'story-583921467-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-2',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Chronolocked Library',
      imageUrl: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd',
      narration:
        `Shelves of shimmering glyph-stacks rotate around you. A pulse from the Heart Engine burns through the catalogue, highlighting an encoded declaration from your future selves. It speaks of a choice that preserves love but fractures time. You can attempt to reconstruct the lost line of the declaration or analyze the engine's signal waveform.`,
      choices: [
        {
          id: 'story-583921467-c3',
          text: `Recreate the missing line of the declaration`,
          targetNodeId: 'story-583921467-4',
          order: 1,
        },
        {
          id: 'story-583921467-c4',
          text: 'Model the waveform to predict the paradox peak',
          targetNodeId: 'story-583921467-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-3',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Clockwork Observatory',
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d',
      narration:
        `The observatory dome hums as starlight refracts through chrono-lenses. You align the Heart Engine's signal with shimmering constellations, revealing a timeline where Elias disappears. The only anchor is a temporal tether bound to your pulse. Do you answer the call of that tether or re-engineer the device to share the burden?`,
      choices: [
        {
          id: 'story-583921467-c5',
          text: 'Follow the tether to meet the future version of yourself',
          targetNodeId: 'story-583921467-5',
          order: 1,
        },
        {
          id: 'story-583921467-c6',
          text: 'Modify the device so Elias shares the temporal load',
          targetNodeId: 'story-583921467-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-4',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Heart of the Engine',
      imageUrl: 'https://images.unsplash.com/photo-1526404428533-88ff808cf08b',
      narration:
        `Your reconstruction stabilizes the Heart Engine briefly. A projection of you and Elias exchanging vows across centuries flickers into the air. The engine offers a choice: synchronize your heartbeats to permanently link timelines, or reroute the surplus energy into a backup lattice.`,
      choices: [
        {
          id: 'story-583921467-c7',
          text: 'Sync heartbeats and harmonize the core',
          targetNodeId: 'story-583921467-7',
          order: 1,
        },
        {
          id: 'story-583921467-c8',
          text: 'Channel the energy into a failsafe lattice',
          targetNodeId: 'story-583921467-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-5',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Future Echoes',
      imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518',
      narration:
        `The tether draws you into a luminous corridor of overlapping moments. A future version of Elias appears, holding the completed Heart Engine core. He warns that your love endures only if you accept a shared destiny--one where both of you surrender certain freedoms. Do you embrace that shared fate or break the tether to forge a different path?`,
      choices: [
        {
          id: 'story-583921467-c9',
          text: 'Embrace the shared destiny and merge timelines',
          targetNodeId: 'story-583921467-8',
          order: 1,
        },
        {
          id: 'story-583921467-c10',
          text: 'Break the tether and search for an alternate route',
          targetNodeId: 'story-583921467-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-6',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Risky Experiment',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      narration:
        `You and Elias connect wrist-mounted chronocasters, sharing the surge. The Heart Engine stabilizes, but a timer appears--five minutes before a paradox collapse. One option is to launch immediately into the harmonized timeline; the other is to abort, accepting that the engine may fail permanently.`,
      choices: [
        {
          id: 'story-583921467-c11',
          text: 'Initiate the harmonized launch together',
          targetNodeId: 'story-583921467-7',
          order: 1,
        },
        {
          id: 'story-583921467-c12',
          text: 'Abort and shut down the Heart Engine',
          targetNodeId: 'story-583921467-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-7',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Infinite Vows',
      imageUrl: 'https://images.unsplash.com/photo-1520848315518-b991dd16a6cf',
      narration:
        `Heartbeats synchronized, you and Elias phase into a shared continuum. You watch your wedding unfold beneath a sky of arresting auroras, every moment echoed across timelines. The Heart Engine purrs steadily; the future is yours to write together. The Timekeeper's Heart beats on, intertwined with your own.`,
      choices: [],
    },
    {
      id: 'story-583921467-8',
      storyId: 'story-583921467',
      type: 'decision',
      title: 'Paradox Negotiation',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      narration:
        `The failsafe lattice blossoms into a shimmering bridge. Three future versions of you and Elias reach across it, each representing a different life you might share. One urges trust, another insists on independence, and the last offers a compromise with safeguards. Which path will you lock into the Heart Engine?`,
      choices: [
        {
          id: 'story-583921467-c13',
          text: 'Trust the future completely and step through together',
          targetNodeId: 'story-583921467-11',
          order: 1,
        },
        {
          id: 'story-583921467-c14',
          text: 'Keep a failsafe and partition the engine just in case',
          targetNodeId: 'story-583921467-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-583921467-9',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Lonely Timeline',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      narration:
        `You sever the tether and the Heart Engine steadies into silence. The city continues, unaware of what was almost lost. Years later, you catch fleeting glimpses of a life where you and Elias stood together. The knowledge of what might have been lingers like a phantom heartbeat.`,
      choices: [],
    },
    {
      id: 'story-583921467-10',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Shattered Timeline',
      imageUrl: 'https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0',
      narration:
        `You power down the Heart Engine. The paradox bubble collapses unevenly, splintering fragments of your shared memories. You and Elias remain together but feel the distance of things forgotten--inside jokes, late-night ambitions, a proposal never made. Love survives, but the engine's promise of unending connection is gone.`,
      choices: [],
    },
    {
      id: 'story-583921467-11',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Merged Horizon',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      narration:
        `You clasp Elias's hand and step through the luminous arch. Multiple futures merge into a tapestry of shared milestones--scientific breakthroughs, quiet anniversaries, and long-awaited vows. You feel every version of your love coalesce, anchored by trust.`,
      choices: [],
    },
    {
      id: 'story-583921467-12',
      storyId: 'story-583921467',
      type: 'ending',
      title: 'Reset Alone',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      narration:
        `You partition the Heart Engine, programming a failsafe that keeps each future at arm's length. The paradox collapses safely, but in every resulting timeline you and Elias choose duty over devotion. The city is saved, yet you walk separate paths, knowing safety came at the cost of shared destiny.`,
      choices: [],
    },
  ],
};
