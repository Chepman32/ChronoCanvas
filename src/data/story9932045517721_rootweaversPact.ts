import { Story } from '../types';

export const rootweaversPactStory: Story = {
  id: 'story-9932045517721',
  title: 'Rootweaver’s Pact',
  description:
    'Letters carved by sap bleed through bark: the world-tree is unwell. You can hear its pulse if you press your ear to the grain—and if you dare, you can answer. Will you heal with memory, bargain with fae, or cut what must be cut?',
  coverImageUrl:
    'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=400',
  author: 'ChronoCanvas Studio',
  genre: ['fantasy', 'mystery'],
  difficulty: 'easy',
  estimatedDuration: 27,
  isPremium: false,
  productId: undefined,
  version: '1.0',
  createdAt: '2025-01-19',
  updatedAt: '2025-01-19',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-9932045517721-1',
  nodes: [
    {
      id: 'story-9932045517721-1',
      storyId: 'story-9932045517721',
      type: 'start',
      title: 'Whispering Roots',
      imageUrl:
        'https://images.unsplash.com/photo-1500530593952-2bf8677db6d4?w=800',
      narration:
        'Moss cups the roots where market lanterns once hung; now they flicker with uncertain breath. Pressing your ear to bark, you hear a tide-slow pulse and faint words shaped by sap: “Help me remember.” The air tastes of iron rain and green thunder.',
      choices: [
        {
          id: 'story-9932045517721-c1',
          text: 'Head to the root market.',
          description: 'Find gossip and guides.',
          targetNodeId: 'story-9932045517721-2',
          order: 1,
        },
        {
          id: 'story-9932045517721-c2',
          text: 'Seek the veil spring.',
          description: 'Water keeps old truths.',
          targetNodeId: 'story-9932045517721-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-2',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Market Under-Tree',
      imageUrl:
        'https://images.unsplash.com/photo-1470164695408-1d47e6a90d48?w=800',
      narration:
        'Vendors braid vines into charms and stack mushrooms that glow like moons. A blind archivist in a barkcloak smells your hands and nods, recognizing sap-scent. “Memory threads snap,” she says. “You will need a vow or a price.”',
      choices: [
        {
          id: 'story-9932045517721-c3',
          text: 'Consult the archivist’s tomes.',
          description: 'Knowledge before action.',
          targetNodeId: 'story-9932045517721-4',
          order: 1,
        },
        {
          id: 'story-9932045517721-c4',
          text: 'Buy glow-spores for guidance.',
          description: 'Light that listens.',
          targetNodeId: 'story-9932045517721-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-3',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Veil Spring',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'The spring exhales fog that curls into half-formed letters above the pool. Fallen coins are furred with green and hum when you hum back, matching pitch. Footprints circle the bank and vanish into a hollow gate of roots.',
      choices: [
        {
          id: 'story-9932045517721-c5',
          text: 'Enter the hollow gate.',
          description: 'Follow the footprints.',
          targetNodeId: 'story-9932045517721-6',
          order: 1,
        },
        {
          id: 'story-9932045517721-c6',
          text: 'Harvest a vial of veilwater.',
          description: 'A tool for later.',
          targetNodeId: 'story-9932045517721-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-4',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Bark Archivist',
      imageUrl:
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
      narration:
        'Pages stitched with rootfiber rustle under your fingers. Margins whisper when the archivist breathes on them: “Vows bind memory. Pacts borrow it.” A ring of layered wood sits in a velvet hollow, its grain spiraled with words too small to read.',
      choices: [
        {
          id: 'story-9932045517721-c7',
          text: 'Take the vow ring.',
          description: 'Bind yourself to the tree.',
          targetNodeId: 'story-9932045517721-7',
          order: 1,
        },
        {
          id: 'story-9932045517721-c8',
          text: 'Copy the root map.',
          description: 'Paths to the heartwood.',
          targetNodeId: 'story-9932045517721-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-5',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Glow Spores',
      imageUrl:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      narration:
        'The spores cup your breath, then blink awake like tiny eyes. Held in darkness, they bloom into a map of possible steps—the brighter the dot, the kinder the outcome. In their dim, you see two strong options pulsing.',
      choices: [
        {
          id: 'story-9932045517721-c9',
          text: 'Follow the spores to the root map vault.',
          description: 'Let light lead.',
          targetNodeId: 'story-9932045517721-8',
          order: 1,
        },
        {
          id: 'story-9932045517721-c10',
          text: 'Attempt the spore-trial alone.',
          description: 'Prove worth without oath.',
          targetNodeId: 'story-9932045517721-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-6',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Hollow Gate',
      imageUrl:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
      narration:
        'Roots arch like ribs; the air smells of penny rain and bruised mint. Scratched into bark at shoulder height: tally marks ending with a heart. A far-off ringing answers your step as if a bridge were plucked like a harp.',
      choices: [
        {
          id: 'story-9932045517721-c11',
          text: 'Undertake the spore-trial.',
          description: 'Let the tree test you.',
          targetNodeId: 'story-9932045517721-9',
          order: 1,
        },
        {
          id: 'story-9932045517721-c12',
          text: 'Pay the thorn bridge toll.',
          description: 'Deal with the fae now.',
          targetNodeId: 'story-9932045517721-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-7',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Vow Ring',
      imageUrl:
        'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800',
      narration:
        'Wood cool as river shade slides over your finger and tightens until comfortable. A line of text unspools in your mind—not a command, a promise. The tree hums approval, low and relieved.',
      choices: [
        {
          id: 'story-9932045517721-c13',
          text: 'Follow a memory thread inward.',
          description: 'Walk old steps made new.',
          targetNodeId: 'story-9932045517721-11',
          order: 1,
        },
        {
          id: 'story-9932045517721-c14',
          text: 'Carve a bark totem for safe travel.',
          description: 'A small guardian.',
          targetNodeId: 'story-9932045517721-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-8',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Root Map Vault',
      imageUrl:
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800',
      narration:
        'A door without hinges opens when you breathe the right note. Inside, maps show rings like years in a stump, each ring a district of paths. One path—the “pith door”—is marked with a warning sigil shaped like a sleepy eye.',
      choices: [
        {
          id: 'story-9932045517721-c15',
          text: 'Take the memory-thread route.',
          description: 'Safer, slower.',
          targetNodeId: 'story-9932045517721-11',
          order: 1,
        },
        {
          id: 'story-9932045517721-c16',
          text: 'Try the pith door anyway.',
          description: 'Fast, risky.',
          targetNodeId: 'story-9932045517721-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-9',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Spore Trial',
      imageUrl:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      narration:
        'Spores crowd your lips with glow and truth. When you speak your name, three other names arrive—selves that might have been, each offering a tool. The tree waits to see which you borrow.',
      choices: [
        {
          id: 'story-9932045517721-c17',
          text: 'Borrow the patient cartographer’s thread.',
          description: 'Map first, mend next.',
          targetNodeId: 'story-9932045517721-14',
          order: 1,
        },
        {
          id: 'story-9932045517721-c18',
          text: 'Borrow the bold herbalist’s blade.',
          description: 'Cut rot, spare song.',
          targetNodeId: 'story-9932045517721-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-10',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Fae Toll',
      imageUrl:
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800',
      narration:
        'A bridge of living thorns hums like bees. A fae collector in a dandelion crown smiles too widely: “One memory, please. We’ll return it when you’re someone else.” The wind refuses to help.',
      choices: [
        {
          id: 'story-9932045517721-c19',
          text: 'Pay with a happy memory.',
          description: 'Lose sweetness; gain passage.',
          targetNodeId: 'story-9932045517721-13',
          order: 1,
        },
        {
          id: 'story-9932045517721-c20',
          text: 'Bargain a renovation instead.',
          description: 'Offer to mend the bridge.',
          targetNodeId: 'story-9932045517721-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-11',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Memory Thread',
      imageUrl:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      narration:
        'A silver thread tugs from your rib to a tunnel speckled with glow. Each step sings a chord you recognize from childhood lullabies. The thread splits: one way pulses steady as a heartbeat; the other jitters like lightning.',
      choices: [
        {
          id: 'story-9932045517721-c21',
          text: 'Follow the steady pulse.',
          description: 'Toward the pulse chamber.',
          targetNodeId: 'story-9932045517721-16',
          order: 1,
        },
        {
          id: 'story-9932045517721-c22',
          text: 'Chase the lightning path.',
          description: 'Risk for speed.',
          targetNodeId: 'story-9932045517721-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-12',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Bark Totem',
      imageUrl:
        'https://images.unsplash.com/photo-1496284778298-90fcb5a91a4a?w=800',
      narration:
        'You whittle a small guardian with ears like leaves and a mouth full of promises. When you blow on it, the totem tastes your breath and points, paws steady. It won’t fight, but it will warn.',
      choices: [
        {
          id: 'story-9932045517721-c23',
          text: 'Proceed to the pulse chamber.',
          description: 'Where the beat falters.',
          targetNodeId: 'story-9932045517721-16',
          order: 1,
        },
        {
          id: 'story-9932045517721-c24',
          text: 'Slip into the dream burrow.',
          description: 'Learn by sleeping.',
          targetNodeId: 'story-9932045517721-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-13',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Pith Door',
      imageUrl:
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800',
      narration:
        'The door opens like a blinking eye. The air inside tastes of old sugar and rain rot. Voices mutter in rings, each a year you did and didn’t live.',
      choices: [
        {
          id: 'story-9932045517721-c25',
          text: 'Aim for the heartwood.',
          description: 'Past the rings.',
          targetNodeId: 'story-9932045517721-17',
          order: 1,
        },
        {
          id: 'story-9932045517721-c26',
          text: 'Detour through the thorn court.',
          description: 'Pay the debt differently.',
          targetNodeId: 'story-9932045517721-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-14',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Dream Burrow',
      imageUrl:
        'https://images.unsplash.com/photo-1473953132640-1f77aa0b0b80?w=800',
      narration:
        'Sleep comes quick as moss. In the dream, the tree shows you a split root—one half slick with dark, the other pale and thirsty. A deer with lantern eyes nods toward a door made of ribs.',
      choices: [
        {
          id: 'story-9932045517721-c27',
          text: 'Wake and head to heartwood.',
          description: 'Dreams are maps.',
          targetNodeId: 'story-9932045517721-17',
          order: 1,
        },
        {
          id: 'story-9932045517721-c28',
          text: 'Seek the pulse chamber instead.',
          description: 'Stabilize before surgery.',
          targetNodeId: 'story-9932045517721-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-15',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Thorn Court',
      imageUrl:
        'https://images.unsplash.com/photo-1474073705359-5da2a8270c64?w=800',
      narration:
        'Thorn sprites lounge like cats, grooming barbs. The dandelion-crowned collector applauds your audacity. “A pact then: mend three broken barbs, and we forgive one memory-debt.”',
      choices: [
        {
          id: 'story-9932045517721-c29',
          text: 'Mend the barbs with sap glue.',
          description: 'Work buys grace.',
          targetNodeId: 'story-9932045517721-18',
          order: 1,
        },
        {
          id: 'story-9932045517721-c30',
          text: 'Offer a future favor.',
          description: 'Owe the fae later.',
          targetNodeId: 'story-9932045517721-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-16',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Pulse Chamber',
      imageUrl:
        'https://images.unsplash.com/photo-1491555104028-153e962123f2?w=800',
      narration:
        'Walls throb with slow light; resin beads like tears. You set the vow ring against the grain and feel your heartbeat braid with the tree’s. The rhythm steadies—enough to risk a deeper cut.',
      choices: [
        {
          id: 'story-9932045517721-c31',
          text: 'Open a path to the heartwood.',
          description: 'Now, or not at all.',
          targetNodeId: 'story-9932045517721-17',
          order: 1,
        },
        {
          id: 'story-9932045517721-c32',
          text: 'Call the fae to witness.',
          description: 'Share blame, share power.',
          targetNodeId: 'story-9932045517721-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-17',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Heartwood',
      imageUrl:
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800',
      narration:
        'The center is not empty; it’s full of quiet. Threads of light run like veins through honeyed wood. A dark knot pulses irregularly, blooming a bitter fragrance with each beat.',
      choices: [
        {
          id: 'story-9932045517721-c33',
          text: 'Weave memory threads around the knot.',
          description: 'Heal by remembering.',
          targetNodeId: 'story-9932045517721-18',
          order: 1,
        },
        {
          id: 'story-9932045517721-c34',
          text: 'Cut the knot with the herbalist’s blade.',
          description: 'Hurt to help.',
          targetNodeId: 'story-9932045517721-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9932045517721-18',
      storyId: 'story-9932045517721',
      type: 'decision',
      title: 'Breach Rift',
      imageUrl:
        'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800',
      narration:
        'The tree opens a mouth where no mouth was, showing night through day—an outside that doesn’t match. Wind tastes of coins and lullabies. Your next choice will set the debt, the cure, and the cost.',
      choices: [
        {
          id: 'story-9932045517721-c35',
          text: 'Crown the rings with your vow.',
          description: 'Bind yourself as keeper.',
          targetNodeId: 'story-9932045517721-19',
          order: 1,
        },
        {
          id: 'story-9932045517721-c36',
          text: 'Accept fae protection and their price.',
          description: 'A safer forest, a leash.',
          targetNodeId: 'story-9932045517721-21',
          order: 2,
        },
        {
          id: 'story-9932045517721-c37',
          text: 'Divide the rot; reroute growth.',
          description: 'Bittersweet pruning.',
          targetNodeId: 'story-9932045517721-20',
          order: 3,
        },
        {
          id: 'story-9932045517721-c38',
          text: 'Sever the infected root entirely.',
          description: 'Save the whole, exile the part.',
          targetNodeId: 'story-9932045517721-22',
          order: 4,
        },
      ],
    },
    {
      id: 'story-9932045517721-19',
      storyId: 'story-9932045517721',
      type: 'ending',
      title: 'Crown of Rings',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      narration:
        'Your vow twines the rings into a brighter cadence. Market lanterns learn your heartbeat and keep time with it. Children grow up thinking trees hum like that everywhere.',
      choices: [],
    },
    {
      id: 'story-9932045517721-20',
      storyId: 'story-9932045517721',
      type: 'ending',
      title: 'Sharded Path',
      imageUrl:
        'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?w=800',
      narration:
        'You split the rot and reroute growth; one district goes fallow so the rest may sing. People move, grieve, and then build new markets where mushrooms take kindly to song. The tree breathes easier with a soft, complicated joy.',
      choices: [],
    },
    {
      id: 'story-9932045517721-21',
      storyId: 'story-9932045517721',
      type: 'ending',
      title: 'Fae Ledger',
      imageUrl:
        'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800',
      narration:
        'Thorn sprites patrol the borders and thieves vanish like pollen on wind. The forest is safer; so are your choices. Once a year, the collector taps your shoulder and takes a small memory like a tithe—never cruel, always binding.',
      choices: [],
    },
    {
      id: 'story-9932045517721-22',
      storyId: 'story-9932045517721',
      type: 'ending',
      title: 'Rootless Exile',
      imageUrl:
        'https://images.unsplash.com/photo-1526404429830-91128a373d6c?w=800',
      narration:
        'You sever the black root with a cry that shivers birds from miles of branches. The tree survives and forgets the ache; the exiled root crawls toward a far horizon, seeking a name you no longer answer to. You sleep lighter, dreaming of footsteps that never quite catch up.',
      choices: [],
    },
  ],
};


