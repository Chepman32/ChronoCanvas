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

export const story_9932045517721StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Rootweaver’s Pact',
    description: 'Letters carved by sap bleed through bark: the world-tree is unwell. You can hear its pulse if you press your ear to the grain—and if you dare, you can answer. Will you heal with memory, bargain with fae, or cut what must be cut?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9932045517721-1': {
        title: 'Whispering Roots',
        narration: 'Moss cups the roots where market lanterns once hung; now they flicker with uncertain breath. Pressing your ear to bark, you hear a tide-slow pulse and faint words shaped by sap: “Help me remember.” The air tastes of iron rain and green thunder.',
        choices: {
          'story-9932045517721-c1': {
            text: 'Head to the root market.',
            description: 'Find gossip and guides.',
          },
          'story-9932045517721-c2': {
            text: 'Seek the veil spring.',
            description: 'Water keeps old truths.',
          },
        },
      },
      'story-9932045517721-2': {
        title: 'Market Under-Tree',
        narration: 'Vendors braid vines into charms and stack mushrooms that glow like moons. A blind archivist in a barkcloak smells your hands and nods, recognizing sap-scent. “Memory threads snap,” she says. “You will need a vow or a price.”',
        choices: {
          'story-9932045517721-c3': {
            text: 'Consult the archivist’s tomes.',
            description: 'Knowledge before action.',
          },
          'story-9932045517721-c4': {
            text: 'Buy glow-spores for guidance.',
            description: 'Light that listens.',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'Veil Spring',
        narration: 'The spring exhales fog that curls into half-formed letters above the pool. Fallen coins are furred with green and hum when you hum back, matching pitch. Footprints circle the bank and vanish into a hollow gate of roots.',
        choices: {
          'story-9932045517721-c5': {
            text: 'Enter the hollow gate.',
            description: 'Follow the footprints.',
          },
          'story-9932045517721-c6': {
            text: 'Harvest a vial of veilwater.',
            description: 'A tool for later.',
          },
        },
      },
      'story-9932045517721-4': {
        title: 'Bark Archivist',
        narration: 'Pages stitched with rootfiber rustle under your fingers. Margins whisper when the archivist breathes on them: “Vows bind memory. Pacts borrow it.” A ring of layered wood sits in a velvet hollow, its grain spiraled with words too small to read.',
        choices: {
          'story-9932045517721-c7': {
            text: 'Take the vow ring.',
            description: 'Bind yourself to the tree.',
          },
          'story-9932045517721-c8': {
            text: 'Copy the root map.',
            description: 'Paths to the heartwood.',
          },
        },
      },
      'story-9932045517721-5': {
        title: 'Glow Spores',
        narration: 'The spores cup your breath, then blink awake like tiny eyes. Held in darkness, they bloom into a map of possible steps—the brighter the dot, the kinder the outcome. In their dim, you see two strong options pulsing.',
        choices: {
          'story-9932045517721-c9': {
            text: 'Follow the spores to the root map vault.',
            description: 'Let light lead.',
          },
          'story-9932045517721-c10': {
            text: 'Attempt the spore-trial alone.',
            description: 'Prove worth without oath.',
          },
        },
      },
      'story-9932045517721-6': {
        title: 'Hollow Gate',
        narration: 'Roots arch like ribs; the air smells of penny rain and bruised mint. Scratched into bark at shoulder height: tally marks ending with a heart. A far-off ringing answers your step as if a bridge were plucked like a harp.',
        choices: {
          'story-9932045517721-c11': {
            text: 'Undertake the spore-trial.',
            description: 'Let the tree test you.',
          },
          'story-9932045517721-c12': {
            text: 'Pay the thorn bridge toll.',
            description: 'Deal with the fae now.',
          },
        },
      },
      'story-9932045517721-7': {
        title: 'Vow Ring',
        narration: 'Wood cool as river shade slides over your finger and tightens until comfortable. A line of text unspools in your mind—not a command, a promise. The tree hums approval, low and relieved.',
        choices: {
          'story-9932045517721-c13': {
            text: 'Follow a memory thread inward.',
            description: 'Walk old steps made new.',
          },
          'story-9932045517721-c14': {
            text: 'Carve a bark totem for safe travel.',
            description: 'A small guardian.',
          },
        },
      },
      'story-9932045517721-8': {
        title: 'Root Map Vault',
        narration: 'A door without hinges opens when you breathe the right note. Inside, maps show rings like years in a stump, each ring a district of paths. One path—the “pith door”—is marked with a warning sigil shaped like a sleepy eye.',
        choices: {
          'story-9932045517721-c15': {
            text: 'Take the memory-thread route.',
            description: 'Safer, slower.',
          },
          'story-9932045517721-c16': {
            text: 'Try the pith door anyway.',
            description: 'Fast, risky.',
          },
        },
      },
      'story-9932045517721-9': {
        title: 'Spore Trial',
        narration: 'Spores crowd your lips with glow and truth. When you speak your name, three other names arrive—selves that might have been, each offering a tool. The tree waits to see which you borrow.',
        choices: {
          'story-9932045517721-c17': {
            text: 'Borrow the patient cartographer’s thread.',
            description: 'Map first, mend next.',
          },
          'story-9932045517721-c18': {
            text: 'Borrow the bold herbalist’s blade.',
            description: 'Cut rot, spare song.',
          },
        },
      },
      'story-9932045517721-10': {
        title: 'Fae Toll',
        narration: 'A bridge of living thorns hums like bees. A fae collector in a dandelion crown smiles too widely: “One memory, please. We’ll return it when you’re someone else.” The wind refuses to help.',
        choices: {
          'story-9932045517721-c19': {
            text: 'Pay with a happy memory.',
            description: 'Lose sweetness; gain passage.',
          },
          'story-9932045517721-c20': {
            text: 'Bargain a renovation instead.',
            description: 'Offer to mend the bridge.',
          },
        },
      },
      'story-9932045517721-11': {
        title: 'Memory Thread',
        narration: 'A silver thread tugs from your rib to a tunnel speckled with glow. Each step sings a chord you recognize from childhood lullabies. The thread splits: one way pulses steady as a heartbeat; the other jitters like lightning.',
        choices: {
          'story-9932045517721-c21': {
            text: 'Follow the steady pulse.',
            description: 'Toward the pulse chamber.',
          },
          'story-9932045517721-c22': {
            text: 'Chase the lightning path.',
            description: 'Risk for speed.',
          },
        },
      },
      'story-9932045517721-12': {
        title: 'Bark Totem',
        narration: 'You whittle a small guardian with ears like leaves and a mouth full of promises. When you blow on it, the totem tastes your breath and points, paws steady. It won’t fight, but it will warn.',
        choices: {
          'story-9932045517721-c23': {
            text: 'Proceed to the pulse chamber.',
            description: 'Where the beat falters.',
          },
          'story-9932045517721-c24': {
            text: 'Slip into the dream burrow.',
            description: 'Learn by sleeping.',
          },
        },
      },
      'story-9932045517721-13': {
        title: 'Pith Door',
        narration: 'The door opens like a blinking eye. The air inside tastes of old sugar and rain rot. Voices mutter in rings, each a year you did and didn’t live.',
        choices: {
          'story-9932045517721-c25': {
            text: 'Aim for the heartwood.',
            description: 'Past the rings.',
          },
          'story-9932045517721-c26': {
            text: 'Detour through the thorn court.',
            description: 'Pay the debt differently.',
          },
        },
      },
      'story-9932045517721-14': {
        title: 'Dream Burrow',
        narration: 'Sleep comes quick as moss. In the dream, the tree shows you a split root—one half slick with dark, the other pale and thirsty. A deer with lantern eyes nods toward a door made of ribs.',
        choices: {
          'story-9932045517721-c27': {
            text: 'Wake and head to heartwood.',
            description: 'Dreams are maps.',
          },
          'story-9932045517721-c28': {
            text: 'Seek the pulse chamber instead.',
            description: 'Stabilize before surgery.',
          },
        },
      },
      'story-9932045517721-15': {
        title: 'Thorn Court',
        narration: 'Thorn sprites lounge like cats, grooming barbs. The dandelion-crowned collector applauds your audacity. “A pact then: mend three broken barbs, and we forgive one memory-debt.”',
        choices: {
          'story-9932045517721-c29': {
            text: 'Mend the barbs with sap glue.',
            description: 'Work buys grace.',
          },
          'story-9932045517721-c30': {
            text: 'Offer a future favor.',
            description: 'Owe the fae later.',
          },
        },
      },
      'story-9932045517721-16': {
        title: 'Pulse Chamber',
        narration: 'Walls throb with slow light; resin beads like tears. You set the vow ring against the grain and feel your heartbeat braid with the tree’s. The rhythm steadies—enough to risk a deeper cut.',
        choices: {
          'story-9932045517721-c31': {
            text: 'Open a path to the heartwood.',
            description: 'Now, or not at all.',
          },
          'story-9932045517721-c32': {
            text: 'Call the fae to witness.',
            description: 'Share blame, share power.',
          },
        },
      },
      'story-9932045517721-17': {
        title: 'Heartwood',
        narration: 'The center is not empty; it’s full of quiet. Threads of light run like veins through honeyed wood. A dark knot pulses irregularly, blooming a bitter fragrance with each beat.',
        choices: {
          'story-9932045517721-c33': {
            text: 'Weave memory threads around the knot.',
            description: 'Heal by remembering.',
          },
          'story-9932045517721-c34': {
            text: 'Cut the knot with the herbalist’s blade.',
            description: 'Hurt to help.',
          },
        },
      },
      'story-9932045517721-18': {
        title: 'Breach Rift',
        narration: 'The tree opens a mouth where no mouth was, showing night through day—an outside that doesn’t match. Wind tastes of coins and lullabies. Your next choice will set the debt, the cure, and the cost.',
        choices: {
          'story-9932045517721-c35': {
            text: 'Crown the rings with your vow.',
            description: 'Bind yourself as keeper.',
          },
          'story-9932045517721-c36': {
            text: 'Accept fae protection and their price.',
            description: 'A safer forest, a leash.',
          },
          'story-9932045517721-c37': {
            text: 'Divide the rot; reroute growth.',
            description: 'Bittersweet pruning.',
          },
          'story-9932045517721-c38': {
            text: 'Sever the infected root entirely.',
            description: 'Save the whole, exile the part.',
          },
        },
      },
      'story-9932045517721-19': {
        title: 'Crown of Rings',
        narration: 'Your vow twines the rings into a brighter cadence. Market lanterns learn your heartbeat and keep time with it. Children grow up thinking trees hum like that everywhere.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: 'Sharded Path',
        narration: 'You split the rot and reroute growth; one district goes fallow so the rest may sing. People move, grieve, and then build new markets where mushrooms take kindly to song. The tree breathes easier with a soft, complicated joy.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: 'Fae Ledger',
        narration: 'Thorn sprites patrol the borders and thieves vanish like pollen on wind. The forest is safer; so are your choices. Once a year, the collector taps your shoulder and takes a small memory like a tithe—never cruel, always binding.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: 'Rootless Exile',
        narration: 'You sever the black root with a cry that shivers birds from miles of branches. The tree survives and forgets the ache; the exiled root crawls toward a far horizon, seeking a name you no longer answer to. You sleep lighter, dreaming of footsteps that never quite catch up.',
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
