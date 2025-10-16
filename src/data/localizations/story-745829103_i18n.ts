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

export const story_745829103StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Midnight Garden',
    description: 'You inherit a Victorian mansion with a garden that only blooms at midnight. When you meet the enigmatic gardener who tends it, you discover he',
    author: 'Isabella Crane',
    nodes: {
      'story-745829103-1': {
        title: 'The Inheritance',
        narration: 'The letter from the estate lawyer arrived on your thirtieth birthday. A great-aunt you never knew existed has left you Thornewood Manor—a crumbling Victorian mansion on the edge of a forgotten town. The condition is strange: you must live there for one full moon cycle before deciding whether to keep it. As you arrive at midnight, the iron gates creak open on their own, and you smell flowers blooming impossibly in the winter air.',
        choices: {
          'story-745829103-c1': {
            text: 'Follow the scent of flowers into the garden',
            description: 'Investigate the mysterious fragrance',
          },
          'story-745829103-c2': {
            text: 'Enter the mansion first to explore',
            description: 'Take things in order',
          },
        },
      },
      'story-745829103-3': {
        title: 'Echoing Halls',
        narration: 'The mansion swallows you in velvet darkness. Oil portraits watch from the walls, and the air hums with a note you feel more than hear. Moonlight leaks through fractured stained glass, painting the floor in sapphire patterns.',
        choices: {
          'story-745829103-c5': {
            text: 'Follow the humming through the corridor',
            description: 'Let the sound guide you',
          },
          'story-745829103-c6': {
            text: 'Force the sealed study door open',
            description: 'Seek answers in the manor',
          },
        },
      },
      'story-745829103-5': {
        title: 'Glimmering Vision',
        narration: 'As your fingers brush the bloom, liquid light pours through you. Your pulse syncs with the garden and you glimpse memories that are not yours—moonlit dances, whispered vows, a lonely gardener tending petals that outlive every season.',
        choices: {
          'story-745829103-c9': {
            text: 'Let the vision pull you deeper',
            description: 'Surrender to the memory',
          },
          'story-745829103-c10': {
            text: 'Break contact and steady yourself',
            description: 'Reclaim control',
          },
        },
      },
      'story-745829103-6': {
        title: 'Moonbound Conservatory',
        narration: 'A domed conservatory waits beyond a curtain of ivy. Inside, instruments of brass and crystal hang like constellations, each tremor of the humming note setting them aglow. A hidden door is edged with frost, exhaling midnight air.',
        choices: {
          'story-745829103-c11': {
            text: 'Follow the humming toward the hidden door',
            description: 'Discover what the sound protects',
          },
          'story-745829103-c12': {
            text: 'Clip a glowing bloom to show Elias',
            description: 'Carry proof back to the garden',
          },
        },
      },
      'story-745829103-7': {
        title: 'Ancestral Study',
        narration: 'Dust billows as the sealed study yields. Ledgers, maps, and a portrait of a woman who shares your eyes crowd the shelves. A silver key shaped like a crescent rests atop a velvet journal, waiting for someone to claim it.',
        choices: {
          'story-745829103-c13': {
            text: 'Open the velvet-bound journal',
            description: 'Learn what your ancestor recorded',
          },
          'story-745829103-c14': {
            text: 'Pocket the silver crescent key',
            description: 'Take the talisman for later',
          },
        },
      },
      'story-745829103-10': {
        title: 'Pulse of Starlight',
        narration: 'The energy you pulled back coils inside your chest like a captured comet. Every heartbeat sends sparks down your arms, and the flowers nearest you bloom brighter, bending toward your warmth.',
        choices: {
          'story-745829103-c19': {
            text: 'Channel the power into the mansion\\',
          },
          'story-745829103-c20': {
            text: 'Hold the power within and return to Elias',
            description: 'Test whether you can bridge both worlds',
          },
        },
      },
      'story-745829103-11': {
        title: 'Oath of Thornewood',
        narration: 'The journal reveals a pact struck a century ago: the first heir able to see the midnight blooms must choose to keep the garden between worlds or seal it forever. Elias remains bound until that choice is made with a willing heart.',
        choices: {
          'story-745829103-c21': {
            text: 'Swear to uphold the ancient vow',
            description: 'Accept the duty as written',
          },
          'story-745829103-c22': {
            text: 'Decide to rewrite the pact entirely',
            description: 'Challenge the legacy',
          },
        },
      },
      'story-745829103-12': {
        title: 'Resonant Promise',
        narration: 'Standing within the circle of moonlight, you feel the garden attune to both your breaths. Elias speaks of dawns he has never witnessed and futures he no longer dares imagine.',
        choices: {
          'story-745829103-c23': {
            text: 'Step fully into the circle beside him',
            description: 'Bind your rhythm to the garden',
          },
          'story-745829103-c24': {
            text: 'Keep one foot in the mortal world',
            description: 'Hold space for a shared dawn',
          },
        },
      },
      'story-745829103-13': {
        title: 'Lunar Talisman',
        narration: 'The crescent key warms in your palm, unfolding into a talisman etched with constellations. You sense it can disrupt the enchantment—or redirect it—depending on whose name you speak.',
        choices: {
          'story-745829103-c25': {
            text: 'Use the talisman on the wrought-iron gate',
            description: 'Test whether you can open a new doorway',
          },
          'story-745829103-c26': {
            text: 'Reveal the talisman to Elias',
            description: 'Invite him into the decision',
          },
        },
      },
      'story-745829103-14': {
        title: 'Temporal Lantern',
        narration: 'Behind the humming door you find a lantern suspended in midair, its crystal core shattered into hovering fragments. Each shard holds a memory of the garden at different moons, suspended in time.',
        choices: {
          'story-745829103-c27': {
            text: 'Reforge the crystal with your new energy',
            description: 'Stabilize the magic together',
          },
          'story-745829103-c28': {
            text: 'Scatter the shards to break the loop',
            description: 'Set the trapped moments free',
          },
        },
      },
      'story-745829103-16': {
        title: 'Breaking the Pact',
        narration: 'You challenge the oath, weaving new words into the air. The blooms flicker between fear and exhilaration while Elias steadies you, ready to follow wherever you lead.',
        choices: {
          'story-745829103-c31': {
            text: 'Shatter the binding to free you both',
            description: 'Risk the garden for freedom',
          },
          'story-745829103-c32': {
            text: 'Draw the magic into yourself alone',
            description: 'Carry the cost so Elias can leave',
          },
        },
      },
      'story-745829103-17': {
        title: 'Aligned Heartbeats',
        narration: 'With the lantern restored, the garden hums in harmony. Moonlight and heartbeat blend until you cannot tell where you end and Elias begins.',
        choices: {
          'story-745829103-c33': {
            text: 'Stay in the midnight bloom with him',
            description: 'Choose a life woven from starlight',
          },
          'story-745829103-c34': {
            text: 'Guide the garden toward the coming dawn',
            description: 'Share its magic with the waking world',
          },
        },
      },
      'story-745829103-18': {
        title: 'Threshold of Dawn',
        narration: 'You hold the surge of magic without surrendering to it. The manor groans as the boundary between worlds thins, offering a path back to sunlight if you dare step through together.',
        choices: {
          'story-745829103-c35': {
            text: 'Lead Elias toward the waking world',
            description: 'Promise him a sunrise',
          },
          'story-745829103-c36': {
            text: 'Let the magic anchor you beside him',
            description: 'Accept a twilight existence',
          },
        },
      },
      'story-745829103-19': {
        title: 'Unbound Time',
        narration: 'As the talisman flares and shards scatter, time stutters around the garden. Petals freeze mid-fall while distant church bells ring backward. You have seconds to decide what this new freedom will cost.',
        choices: {
          'story-745829103-c37': {
            text: 'Release the captured hours into the night',
            description: 'Let the garden choose its fate',
          },
          'story-745829103-c38': {
            text: 'Lock the garden away from time forever',
            description: 'Seal the magic even if it wilts',
          },
        },
      },
      'story-745829103-21': {
        title: 'Shared Sunrise',
        narration: 'You guide Elias beyond the gates as dawn breaks, carrying a single luminous bloom as proof the magic can survive the sun. The manor awakens to laughter, music, and a garden that finally welcomes daylight. Love and legacy take root in the open air.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: 'Shattered Spell',
        narration: 'You release the trapped hours, breaking the oath that bound Elias. The garden erupts in a final blaze of light before the blooms dissolve into stardust. Freedom is yours, but the midnight wonder becomes a memory you both carry into unknown futures.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: 'Fading Petals',
        narration: 'You seal the garden away to spare Elias the curse, but the magic withers without the moon. The manor grows quiet, the blooms preserved only in portraits and dreams. Every night you wonder if another choice might have saved the beauty you sacrificed.',
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
