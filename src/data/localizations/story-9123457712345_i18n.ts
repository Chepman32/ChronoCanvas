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

export const story_9123457712345StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Heartline Rewind',
    description: 'A city is trapped in a 59-minute loop, and your sketches can splice the hours back together. But every repair ripples the past--especially the night you lost Maya. Will you restore the timeline or redraw your fate?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9123457712345-1': {
        title: 'Looped Midnight',
        narration: 'Rain stitches silver dashes across the street as a clock tower stutters: 11:01--again. Your ChronoCanvas hums in your palm like a caged metronome, the line you draw echoing through puddles and neon signs. Somewhere nearby, Maya waits at the observatory, unaware that this hour has already happened a dozen times.',
        choices: {
          'story-9123457712345-c1': {
            text: 'Hurry to the museum clock hall.',
            description: 'Stabilize the city\\',
          },
          'story-9123457712345-c2': {
            text: 'Go straight to the rooftop observatory.',
            description: 'Find Maya before the loop resets.',
          },
        },
      },
      'story-9123457712345-2': {
        title: 'Rooftop Signal',
        narration: 'Wind chimes the guy wires around the telescope dome. Maya stands beneath a sky cleaved by clouds, studying a faint anomaly like a thumbprint in the stars. She glances toward the stairwell as if expecting someone--then your phone buzzes with a warning: loop integrity failing.',
        choices: {
          'story-9123457712345-c3': {
            text: 'Tell Maya the truth about the loop.',
            description: 'Honesty may bind you to this timeline.',
          },
          'story-9123457712345-c4': {
            text: 'Keep it light; invite her for coffee.',
            description: 'Anchor normalcy; buy time.',
          },
        },
      },
      'story-9123457712345-3': {
        title: 'Rain Cafe',
        narration: 'Steam ghosts the cafe windows as raindrops march backwards along the glass--time snagging, then resuming. Maya laughs at a memory you should not know yet, and the laugh thins when the lights flutter twice. The ChronoCanvas warms, impatient.',
        choices: {
          'story-9123457712345-c5': {
            text: 'Confess the loop now.',
            description: 'Risk disbelief to build trust.',
          },
          'story-9123457712345-c6': {
            text: 'Excuse yourself and sprint to the clock hall.',
            description: 'Patch time, then return.',
          },
        },
      },
      'story-9123457712345-5': {
        title: 'Hall of Clocks',
        narration: 'A cathedral of pendulums debates the present in overlapping ticks. One massive regulator argues loudly--its seconds hand double-steps, then sulks. You can feel the loop snag on its teeth.',
        choices: {
          'story-9123457712345-c9': {
            text: 'Repair the regulator with a fine stroke.',
            description: 'Precision first.',
          },
          'story-9123457712345-c10': {
            text: 'Draw a doorway on the clock face.',
            description: 'Shortcut to the source.',
          },
          'story-9123457712345-c11': {
            text: 'Trail the suspicious curator.',
            description: 'Someone is meddling too.',
          },
        },
      },
      'story-9123457712345-6': {
        title: 'Rift Alley',
        narration: 'A seam in the rain hangs like a cut in film; beyond it, stars glitter like screws. The air tastes of static and wet stone, tugging at your sleeves both forward and back. One bold line could anchor the tear--or widen it.',
        choices: {
          'story-9123457712345-c12': {
            text: 'Stabilize with a lattice of lines.',
            description: 'Engineer the breach.',
          },
          'story-9123457712345-c13': {
            text: 'Step away and regroup at the hall.',
            description: 'Do not tempt collapse.',
          },
        },
      },
      'story-9123457712345-9': {
        title: 'Clockwork Calm',
        narration: 'Your stroke bridges a missing tooth, and the seconds hand exhales to true pace. A hidden panel unlocks with a polite click. Inside: the torn vellum fragment and a key shaped like a question mark.',
        choices: {
          'story-9123457712345-c18': {
            text: 'Take fragment to the vault.',
            description: 'Original beats imitation.',
          },
          'story-9123457712345-c19': {
            text: 'Use the door trick to the temple.',
            description: 'Skip the stairs.',
          },
        },
      },
      'story-9123457712345-10': {
        title: 'Sketched Threshold',
        narration: 'Ink takes to brass like dew to dawn. The clock face softens, accepting a drawn door that opens on dry, singing sand. Cold air with a scent of sun on stone brushes your cheeks.',
        choices: {
          'story-9123457712345-c20': {
            text: 'Step through to the temple chamber.',
            description: 'Meet the source.',
          },
          'story-9123457712345-c21': {
            text: 'Return to gather the missing fragment.',
            description: 'Do not risk a guess.',
          },
        },
      },
      'story-9123457712345-12': {
        title: 'Archive Room',
        narration: 'Dust motes drift like lost seconds in lamplight. In a conservation folder, the torn vellum fragment waits with an inked looped-nine--an eye and a spiral in one. It warms the air when your fingers brush it.',
        choices: {
          'story-9123457712345-c24': {
            text: 'Slot the fragment into the vault lock.',
            description: 'Complete the circuit.',
          },
          'story-9123457712345-c25': {
            text: 'Sketch a backup surrogate just in case.',
            description: 'Belt and suspenders.',
          },
        },
      },
      'story-9123457712345-14': {
        title: 'Hidden Vault',
        narration: 'Behind stacked crates, a circular seam exhales a desert draft. The vellum fragment seats into a lock that unfurls like a blooming spiral. Stairs sink toward a chamber where sand waits like a patient page.',
        choices: {
          'story-9123457712345-c28': {
            text: 'Seal the paradox equation here.',
            description: 'Stability over desire.',
          },
          'story-9123457712345-c29': {
            text: 'Step through to the temple\\',
          },
          'story-9123457712345-c30': {
            text: 'Call Maya to join you.',
            description: 'Choose together.',
          },
        },
      },
      'story-9123457712345-16': {
        title: 'Temple Dais',
        narration: 'Moonlight gathers in a roofless chamber; sand whispers in little avalanches. Murals show artists painting with comet tails, looping days into gentler shapes. Two sets of footprints circle the dais--yours, and the version of you that keeps trying.',
        choices: {
          'story-9123457712345-c33': {
            text: 'Study the murals for instruction.',
            description: 'Learn the cost before paying.',
          },
          'story-9123457712345-c34': {
            text: 'Begin the sealing stroke.',
            description: 'Close the loop now.',
          },
        },
      },
      'story-9123457712345-20': {
        title: 'Paper Sacrifice',
        narration: 'The Canvas drinks its own ink until only the scent of rain remains. Time smooths like fresh paint drying, and clocks across the city breathe easier. You and Maya walk out under honest weather, empty-handed and free.',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: 'Faithless Edit',
        narration: 'A perfect rewrite erases the hurt--and the truth that shaped it. The timeline refuses the lie and frays into bright threads that sing like wire. You spend long nights re-braiding possibilities, and sometimes, in a new dawn, Maya finds you.',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: 'Scar Together',
        narration: 'You paint a careful scar across your days, a looped nine resting under the skin of memory. The city moves on, loopless; you and Maya learn the rhythm of imperfect time. Some mornings you wake already finishing a laugh you have not started.',
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
