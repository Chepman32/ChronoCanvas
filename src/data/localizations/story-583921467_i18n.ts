import { Language } from '../../localization/translations';

interface StoryTranslations {
  title: string;
  description: string;
  author: string;
  nodes: {
    [nodeId: string]: {
      title: string;
      narration: string;
      choices: {
        [choiceId: string]: {
          text: string;
          description?: string;
        };
      };
    };
  };
}

export const story_583921467StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Timekeeper\'s Heart',
    description: 'When a temporal engineer and her partner discover the clockwork core that binds their futures together, every choice risks rewriting their love across centuries.',
    author: 'Nova Strickland',
    nodes: {
      'story-583921467-1': {
        title: 'Temporal Proposal',
        narration: 'The city ticks in harmony with the Chronosphere beneath it. You and your partner, Elias, stand before the Heart Engine--a glittering mechanism capable of weaving futures. Tonight you intended to propose, but the engine pulses erratically, projecting fractured visions of the two of you apart. Do you confront the anomaly head-on or research the prophecy encoded in the heart?',
        choices: {
          'story-583921467-c1': {
            text: 'Dive into the data archives to decode the warning',
          },
          'story-583921467-c2': {
            text: 'Head to the observatory and trace the temporal fault',
          },
        },
      },
      'story-583921467-2': {
        title: 'Chronolocked Library',
        narration: 'Shelves of shimmering glyph-stacks rotate around you. A pulse from the Heart Engine burns through the catalogue, highlighting an encoded declaration from your future selves. It speaks of a choice that preserves love but fractures time. You can attempt to reconstruct the lost line of the declaration or analyze the engine\'s signal waveform.',
        choices: {
          'story-583921467-c3': {
            text: 'Recreate the missing line of the declaration',
          },
          'story-583921467-c4': {
            text: 'Model the waveform to predict the paradox peak',
          },
        },
      },
      'story-583921467-3': {
        title: 'Clockwork Observatory',
        narration: 'The observatory dome hums as starlight refracts through chrono-lenses. You align the Heart Engine\'s signal with shimmering constellations, revealing a timeline where Elias disappears. The only anchor is a temporal tether bound to your pulse. Do you answer the call of that tether or re-engineer the device to share the burden?',
        choices: {
          'story-583921467-c5': {
            text: 'Follow the tether to meet the future version of yourself',
          },
          'story-583921467-c6': {
            text: 'Modify the device so Elias shares the temporal load',
          },
        },
      },
      'story-583921467-4': {
        title: 'Heart of the Engine',
        narration: 'Your reconstruction stabilizes the Heart Engine briefly. A projection of you and Elias exchanging vows across centuries flickers into the air. The engine offers a choice: synchronize your heartbeats to permanently link timelines, or reroute the surplus energy into a backup lattice.',
        choices: {
          'story-583921467-c7': {
            text: 'Sync heartbeats and harmonize the core',
          },
          'story-583921467-c8': {
            text: 'Channel the energy into a failsafe lattice',
          },
        },
      },
      'story-583921467-5': {
        title: 'Future Echoes',
        narration: 'The tether draws you into a luminous corridor of overlapping moments. A future version of Elias appears, holding the completed Heart Engine core. He warns that your love endures only if you accept a shared destiny--one where both of you surrender certain freedoms. Do you embrace that shared fate or break the tether to forge a different path?',
        choices: {
          'story-583921467-c9': {
            text: 'Embrace the shared destiny and merge timelines',
          },
          'story-583921467-c10': {
            text: 'Break the tether and search for an alternate route',
          },
        },
      },
      'story-583921467-6': {
        title: 'Risky Experiment',
        narration: 'You and Elias connect wrist-mounted chronocasters, sharing the surge. The Heart Engine stabilizes, but a timer appears--five minutes before a paradox collapse. One option is to launch immediately into the harmonized timeline; the other is to abort, accepting that the engine may fail permanently.',
        choices: {
          'story-583921467-c11': {
            text: 'Initiate the harmonized launch together',
          },
          'story-583921467-c12': {
            text: 'Abort and shut down the Heart Engine',
          },
        },
      },
      'story-583921467-7': {
        title: 'Infinite Vows',
        narration: 'Heartbeats synchronized, you and Elias phase into a shared continuum. You watch your wedding unfold beneath a sky of arresting auroras, every moment echoed across timelines. The Heart Engine purrs steadily; the future is yours to write together. The Timekeeper\'s Heart beats on, intertwined with your own.',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'Paradox Negotiation',
        narration: 'The failsafe lattice blossoms into a shimmering bridge. Three future versions of you and Elias reach across it, each representing a different life you might share. One urges trust, another insists on independence, and the last offers a compromise with safeguards. Which path will you lock into the Heart Engine?',
        choices: {
          'story-583921467-c13': {
            text: 'Trust the future completely and step through together',
          },
          'story-583921467-c14': {
            text: 'Keep a failsafe and partition the engine just in case',
          },
        },
      },
      'story-583921467-9': {
        title: 'Lonely Timeline',
        narration: 'You sever the tether and the Heart Engine steadies into silence. The city continues, unaware of what was almost lost. Years later, you catch fleeting glimpses of a life where you and Elias stood together. The knowledge of what might have been lingers like a phantom heartbeat.',
        choices: {
        },
      },
      'story-583921467-10': {
        title: 'Shattered Timeline',
        narration: 'You power down the Heart Engine. The paradox bubble collapses unevenly, splintering fragments of your shared memories. You and Elias remain together but feel the distance of things forgotten--inside jokes, late-night ambitions, a proposal never made. Love survives, but the engine\'s promise of unending connection is gone.',
        choices: {
        },
      },
      'story-583921467-11': {
        title: 'Merged Horizon',
        narration: 'You clasp Elias\'s hand and step through the luminous arch. Multiple futures merge into a tapestry of shared milestones--scientific breakthroughs, quiet anniversaries, and long-awaited vows. You feel every version of your love coalesce, anchored by trust.',
        choices: {
        },
      },
      'story-583921467-12': {
        title: 'Reset Alone',
        narration: 'You partition the Heart Engine, programming a failsafe that keeps each future at arm\'s length. The paradox collapses safely, but in every resulting timeline you and Elias choose duty over devotion. The city is saved, yet you walk separate paths, knowing safety came at the cost of shared destiny.',
        choices: {
        },
      },
    },
  },

  // Русский - Not yet translated
  ru: { title: '', description: '', author: '', nodes: {} },

  // Español - Not yet translated
  es: { title: '', description: '', author: '', nodes: {} },

  // Deutsch - Not yet translated
  de: { title: '', description: '', author: '', nodes: {} },

  // Français - Not yet translated
  fr: { title: '', description: '', author: '', nodes: {} },

  // Português - Not yet translated
  pt: { title: '', description: '', author: '', nodes: {} },

  // 日本語 - Not yet translated
  ja: { title: '', description: '', author: '', nodes: {} },

  // 中文 - Not yet translated
  zh: { title: '', description: '', author: '', nodes: {} },

  // 한국어 - Not yet translated
  ko: { title: '', description: '', author: '', nodes: {} },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
