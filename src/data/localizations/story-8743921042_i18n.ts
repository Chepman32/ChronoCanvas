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

export const story_8743921042StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Echoes of the Moonlit Grove',
    description: 'When the moon rises full over Blackbriar Forest, an old bargain wakes. You carry a shard of a broken sigil that hums near the trees, calling you toward a forgotten crown and a debt the grove intends to collect. Choose allies, honor, or power—but the grove always takes its due.',
    author: 'Daria Voronova',
    nodes: {
      'story-8743921042-1': {
        title: 'Moonlit Omen',
        narration: 'A blue-white moon climbs above Blackbriar’s tangled crowns, and the shard in your pocket warms as if it remembers a promise. Owls fall silent. Between the pines, a narrow path gleams like wet ink, pulling at your boots. The shard thrums again, answering something old that stirs in the roots.',
        choices: {
          'story-8743921042-c1': {
            text: 'Follow the moonlit path into the grove',
            description: 'The shard wants you deeper.',
          },
          'story-8743921042-c2': {
            text: 'Study the sigil shard and search for markings nearby',
            description: 'Knowledge before risk.',
          },
        },
      },
      'story-8743921042-2': {
        title: 'Whispering Path',
        narration: 'Mist coils at your knees, whispering your name in voices you almost know. Pale moths drift ahead, forming arrows that point deeper. A smell of wet iron rides the air. Somewhere distant, a bell rings once.',
        choices: {
          'story-8743921042-c3': {
            text: 'Answer the whispers',
            description: 'Risk letting them in.',
          },
          'story-8743921042-c4': {
            text: 'Ignore them and push toward the sound of the bell',
            description: 'Trust your feet, not your ears.',
          },
        },
      },
      'story-8743921042-3': {
        title: 'Shattered Sigil',
        narration: 'The shard is a crescent of dark glass etched with thorny runes. When you breathe across it, frost halos the markings and a second pattern blooms—a crown without a wearer. The wood answers with a low groan, as if turning in sleep.',
        choices: {
          'story-8743921042-c5': {
            text: 'Press the shard to the earth and listen',
            description: 'Speak in the old way.',
          },
          'story-8743921042-c6': {
            text: 'Break a splinter from the shard to draw blood-runes',
            description: 'Power courts a price.',
          },
        },
      },
      'story-8743921042-4': {
        title: 'Elder Yew',
        narration: 'A yew older than any temple arches over a slow, clear rill. Red berries gleam like droplets of warning. When you touch the bark, the tree remembers you—your grandmother’s voice, a cradle-song about a debt to the grove. The water brightens, showing your face crowned in thorns.',
        choices: {
          'story-8743921042-c7': {
            text: 'Drink from the rill',
            description: 'Accept a memory not your own.',
          },
          'story-8743921042-c8': {
            text: 'Take yew bark for a protective charm',
            description: 'Ward first, then walk.',
          },
        },
      },
      'story-8743921042-5': {
        title: 'Fogbound Bridge',
        narration: 'A rope-and-plank bridge sags over a gorge you cannot see. Down below, something breathes like surf against bone. A bell hangs from the first post, wrapped in spider-silk, as if the forest itself muzzled it.',
        choices: {
          'story-8743921042-c9': {
            text: 'Ring the bell',
            description: 'Wake what sleeps to parley.',
          },
          'story-8743921042-c10': {
            text: 'Cross in silence',
            description: 'Trust your balance.',
          },
        },
      },
      'story-8743921042-6': {
        title: 'Market of Shadows',
        narration: 'Lanterns bloom along a crooked lane where no city should be. Stalls sell bottled rain, thimble-moons, and names sewn into ribbon. A mask-maker gestures you closer, offering a face woven from briar and bright thread.',
        choices: {
          'story-8743921042-c11': {
            text: 'Buy the briar mask with a drop of blood',
            description: 'Masks deceive, but protect.',
          },
          'story-8743921042-c12': {
            text: 'Trade the shard for a guide',
            description: 'Information over artifacts.',
          },
        },
      },
      'story-8743921042-7': {
        title: 'Spirit Lanterns',
        narration: 'Light beads rise from the stream and spiral around you, curious as fox kits. They nudge at your chest, your hands, the shard. When one passes through your palm, your skin sings with a thin, silver ache—the grove judges you and finds a debt unpaid.',
        choices: {
          'story-8743921042-c13': {
            text: 'Ask the spirits to share what they know',
            description: 'Humble questions earn answers.',
          },
          'story-8743921042-c14': {
            text: 'Command the spirits with the yew’s memory',
            description: 'Authority can bruise.',
          },
        },
      },
      'story-8743921042-9': {
        title: 'Undercroft Gate',
        narration: 'Carved steps descend into red stone where cold air spills like water. At the bottom yawns a door of ribbed rock and moon-metal studs. The shard in your pocket trembles, eager to be whole.',
        choices: {
          'story-8743921042-c17': {
            text: 'Fit the shard to the moon-metal seam',
            description: 'Complete what was broken.',
          },
          'story-8743921042-c18': {
            text: 'Refuse the pull and take the higher stair',
            description: 'Seek another path upward.',
          },
        },
      },
      'story-8743921042-10': {
        title: 'Scribe of Echoes',
        narration: 'Your guide leads you to a stone terrace where wind writes on slate. The Scribe is a hooded woman whose hair moves like ink in water. She listens to your shard, then draws three sigils that smell of rain and iron.',
        choices: {
          'story-8743921042-c19': {
            text: 'Ask for a path to the crown',
            description: 'Direct is dangerous.',
          },
          'story-8743921042-c20': {
            text: 'Ask how to break the grove’s claim',
            description: 'Undo the bargain.',
          },
        },
      },
      'story-8743921042-11': {
        title: 'River of Glass',
        narration: 'The river looks still, but its surface is a skin of knives reflecting a second moon. A ferry with no ferryman waits, tied by a rope of woven hair. You can cross by trust—or test the edge and bleed a toll.',
        choices: {
          'story-8743921042-c21': {
            text: 'Board the waiting ferry',
            description: 'Trust the grove’s ritual.',
          },
          'story-8743921042-c22': {
            text: 'Cut your palm and paint the shard',
            description: 'Purchase safe passage.',
          },
        },
      },
      'story-8743921042-12': {
        title: 'Thorn Pact',
        narration: 'A hollow tree opens like a chapel, candles guttering in sap-lit niches. Whispered names drift through—lineage, debts, vows. The shard warms until it hurts, and you understand: taking the crown means wearing the grove’s hunger.',
        choices: {
          'story-8743921042-c23': {
            text: 'Accept the pact openly',
            description: 'Power with a price, paid in daylight.',
          },
          'story-8743921042-c24': {
            text: 'Refuse and seek a loophole',
            description: 'There is always wording.',
          },
        },
      },
      'story-8743921042-13': {
        title: 'Crownless King',
        narration: 'A figure of roots and wind sits upon a stone chair, his brow raw where a diadem once rested. When he turns, you see your own cheekbones, your family’s eyes—your line once held the crown. The grove hums, waiting to see what you will make of truth.',
        choices: {
          'story-8743921042-c25': {
            text: 'Kneel and vow to mend what your line broke',
            description: 'Atonement binds strongly.',
          },
          'story-8743921042-c26': {
            text: 'Challenge the King to pass the burden',
            description: 'Win freedom or worse weight.',
          },
        },
      },
      'story-8743921042-14': {
        title: 'Moonspire Stairs',
        narration: 'Stairs chipped from bone-white stone zigzag into fog. Each turn shows the moon larger until it fills the sky with a cold face. Your breath feathers; your resolve hardens to match the climb.',
        choices: {
          'story-8743921042-c27': {
            text: 'Climb faster to reach the spire first',
            description: 'Seize initiative.',
          },
          'story-8743921042-c28': {
            text: 'Pause to etch a ward into the step',
            description: 'Protection over haste.',
          },
        },
      },
      'story-8743921042-15': {
        title: 'Hall of Seeds',
        narration: 'A cavern opens beneath a painted sky where thousands of seeds hang in cobweb silk. Each seed beats like a tiny heart, each a future forest waiting for a promise. The crown sits upon a pedestal of woven roots, pulsing in time with your own pulse.',
        choices: {
          'story-8743921042-c29': {
            text: 'Place the shard into the crown',
            description: 'Complete the instrument of rule.',
          },
          'story-8743921042-c30': {
            text: 'Scatter the seeds and smother the crown',
            description: 'Break the cycle forever.',
          },
        },
      },
      'story-8743921042-16': {
        title: 'Mirror Duel',
        narration: 'On a frozen ridge, the wind hardens into a shape that mirrors you blow for blow. Each strike rings, shaking snow from black pines. The grove watches without breath, judging which self will serve it best.',
        choices: {
          'story-8743921042-c31': {
            text: 'Yield and accept your reflection’s crown',
            description: 'Let the other you rule.',
          },
          'story-8743921042-c32': {
            text: 'Shatter the mirror with the shard',
            description: 'Break the test to set your terms.',
          },
        },
      },
      'story-8743921042-17': {
        title: 'Price of Magic',
        narration: 'Fog folds into a circle of standing stones, every surface carved with offerings—hair, teeth, rings, lullabies written in ash. The grove does not bargain without coin. You can buy a path, but you must name your loss.',
        choices: {
          'story-8743921042-c33': {
            text: 'Offer your voice for a season',
            description: 'Silence buys guidance.',
          },
          'story-8743921042-c34': {
            text: 'Offer a year from your shadow',
            description: 'You will walk thinner.',
          },
        },
      },
      'story-8743921042-18': {
        title: 'Dawn Restored',
        narration: 'The crown accepts the shard, and the grove exhales a spring-scented breath. Birds wake as the first gold spills through the trees. You walk out wearing no metal, only a garland of fresh shoots—steward, not sovereign. The forest hums a quiet yes.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: 'Forest Devours',
        narration: 'Seeds burst in a rush of roots that crack stone and swallow halls. The crown smothers under a green tide that does not care for kings. Years later, travelers whisper of a new wood that grows too quickly, hungry as a storm. Your name is lost beneath leaves.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: 'Queen of Thorns',
        narration: 'You bow to your reflection, and it steps forward, wearing your face and a crown of living vine. The aurora ripples in the antlers of the watching stag as roots rise to form a throne. You will rule by listening, no blade needed—yet the crown drinks a little from your sleep each night.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: 'Lost Between Worlds',
        narration: 'The mirror shatters, but so does the path home. You learn the side-trails of the grove, guiding wanderers to safe clearings with a lantern of your own making. Some nights you almost remember a different name. The moon is your only clock.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: 'The Silver Oath',
        narration: 'On a shore where roots drink the tide, you swear to carry the grove’s law beyond its trees. The crown dissolves to light that threads your veins, cold and clean. You leave footprints that sprout grass behind you, an oath walking on two legs. The debt becomes a promise kept.',
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
