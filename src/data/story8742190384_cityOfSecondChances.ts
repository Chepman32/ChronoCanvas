import { Story } from '../types';

const cityImageUrls = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
  'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800',
  'https://images.unsplash.com/photo-1486308510493-aa64833637b8?w=800',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
  'https://images.unsplash.com/photo-1506127945924-79543b2fe646?w=800',
  'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
  'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800',
  'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800',
  'https://images.unsplash.com/photo-1531089073312-92e530b95b7e?w=800',
  'https://images.unsplash.com/photo-1488740304459-45c16bd31289?w=800',
];

const formatWidth = (url: string, width: number) => {
  if (url.includes('w=')) {
    return url.replace(/w=\d+/g, `w=${width}`);
  }

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}w=${width}`;
};

const getCityImage = (index: number, width: number = 800) =>
  formatWidth(cityImageUrls[index % cityImageUrls.length], width);

export const cityOfSecondChancesStory: Story = {
  id: 'story-8742190384',
  title: 'City of Second Chances',
  description:
    'A sudden downpour strands you in a city you once called home—and where you left a love unfinished. One night becomes a chain of small, brave choices: a café, a bookshop, a rooftop, a ferry. Find your way back to the truth—or toward something entirely new.',
  coverImageUrl: getCityImage(0),
  thumbnailUrl: getCityImage(0, 400),
  author: 'A. Marin',
  genre: ['romance'],
  difficulty: 'medium',
  estimatedDuration: 30,
  isPremium: false,
  productId: 'com.chronocanvas.story.city-of-second-chances',
  version: '1.0',
  createdAt: '2025-01-07',
  updatedAt: '2025-01-12',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-8742190384-1',
  nodes: [
    {
      id: 'story-8742190384-1',
      storyId: 'story-8742190384',
      type: 'start',
      title: 'Rain Arrival',
      imageUrl: getCityImage(0),
      narration:
        'Night rain slicks the avenue into a mirror, neon smeared like brushstrokes across the asphalt. Your suitcase is heavier than it should be, full of things you didn’t say last time. A gust pushes you beneath an awning; the city smells like coffee and thunder. Somewhere a train bell clatters. You tell yourself it’s only one night—enough to decide if you’ll knock on Riley’s door.',
      choices: [
        {
          id: 'story-8742190384-c1',
          text: 'Duck into the café for warmth.',
          description: 'You might gather your thoughts—and courage.',
          targetNodeId: 'story-8742190384-2',
          order: 1,
        },
        {
          id: 'story-8742190384-c2',
          text: 'Head for the station instead.',
          description: 'Trains mean exits—and arrivals.',
          targetNodeId: 'story-8742190384-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-2',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Warm Refuge',
      imageUrl: getCityImage(1),
      narration:
        'Milk spirals into a small galaxy atop your latte while the windows bead with rain. The barista chats about a late-night reading at the bookshop down the block. Your phone vibrates on the saucer, Riley’s name still pinned to the top of your messages like a promise you never kept. The cup warms your hands; your courage is slower to simmer.',
      choices: [
        {
          id: 'story-8742190384-c3',
          text: 'Ask about the bookshop reading.',
          description: 'Stories might open doorways.',
          targetNodeId: 'story-8742190384-4',
          order: 1,
        },
        {
          id: 'story-8742190384-c4',
          text: 'Send Riley a careful text.',
          description: '“In town tonight. Could we talk?”',
          targetNodeId: 'story-8742190384-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-3',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Crossed Tracks',
      imageUrl: getCityImage(2),
      narration:
        'The station hums with departures, boards flicking letters like restless eyelids. A laugh you know drifts from the mezzanine—familiar as a favorite song. You freeze halfway up the steps, suitcase thudding on the stair. The next train is in four minutes. Your heart is already late.',
      choices: [
        {
          id: 'story-8742190384-c5',
          text: 'Board the next train home.',
          description: 'Leaving is simpler than returning.',
          targetNodeId: 'story-8742190384-8',
          order: 1,
        },
        {
          id: 'story-8742190384-c6',
          text: 'Follow the familiar laugh.',
          description: 'If it is Riley, you can’t miss them twice.',
          targetNodeId: 'story-8742190384-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-4',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Stacks & Chance',
      imageUrl: getCityImage(3),
      narration:
        'The bookshop breathes paper and raincoats, quiet as a secret. A ladder asks to be climbed; you don’t. Between biographies you hear a voice that tightens your chest. You could step forward, or let a note speak where you couldn’t before.',
      choices: [
        {
          id: 'story-8742190384-c7',
          text: 'Approach Riley between the shelves.',
          description: 'Say what you swallowed last spring.',
          targetNodeId: 'story-8742190384-6',
          order: 1,
        },
        {
          id: 'story-8742190384-c8',
          text: 'Leave a handwritten note at the counter.',
          description: 'Ink steadies a shaking hand.',
          targetNodeId: 'story-8742190384-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-5',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Half-Second Glimpse',
      imageUrl: getCityImage(4),
      narration:
        'You catch a flash of their coat along the platform, a color you used to borrow. The tunnel coughs wind; the clock scolds. You could call their name and let the station listen, or let the departures board make the choice for you.',
      choices: [
        {
          id: 'story-8742190384-c9',
          text: 'Call out to Riley.',
          description: 'Better to be seen than almost seen.',
          targetNodeId: 'story-8742190384-6',
          order: 1,
        },
        {
          id: 'story-8742190384-c10',
          text: 'Hold back and watch the board.',
          description: 'Silence is a kind of answer.',
          targetNodeId: 'story-8742190384-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-6',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Bench Reunion',
      imageUrl: getCityImage(5),
      narration:
        'The park bench remembers your shape. Riley arrives with rain-dotted hair and a smile you don’t quite deserve yet. The first minutes are careful, like stepping on stones across a stream. You trade small truths—the kind that point toward larger ones.',
      choices: [
        {
          id: 'story-8742190384-c11',
          text: 'Invite them to a rooftop to talk.',
          description: 'A view might make room for honesty.',
          targetNodeId: 'story-8742190384-9',
          order: 1,
        },
        {
          id: 'story-8742190384-c12',
          text: 'Suggest a nearby gallery opening.',
          description: 'Walk as you speak.',
          targetNodeId: 'story-8742190384-10',
          order: 2,
        },
        {
          id: 'story-8742190384-c13',
          text: 'Say you’ll write what you can’t say now.',
          description: 'Words work better on paper.',
          targetNodeId: 'story-8742190384-11',
          order: 3,
        },
      ],
    },
    {
      id: 'story-8742190384-7',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Ink & Nerves',
      imageUrl: getCityImage(6),
      narration:
        'You fold the note twice, then again, as if smaller will be safer. The bell over the door chirps at strangers; none of them are Riley. You could wait in the aisle with the travel books, or walk back into the weather and try to steady your breath.',
      choices: [
        {
          id: 'story-8742190384-c14',
          text: 'Wait a while and then send a message.',
          description: 'Let ink and pixels agree.',
          targetNodeId: 'story-8742190384-11',
          order: 1,
        },
        {
          id: 'story-8742190384-c15',
          text: 'Leave and think on the bridge.',
          description: 'Some truths need wind.',
          targetNodeId: 'story-8742190384-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-8',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Quiet Room',
      imageUrl: getCityImage(7),
      narration:
        'Your rented room glows blue from a sign outside, a halo that doesn’t fit. The suitcase sits unopened like a loaded sentence. You pour your heart into a draft you may never send—or you swipe through strangers as if one could erase a name that matters.',
      choices: [
        {
          id: 'story-8742190384-c16',
          text: 'Draft an honest letter.',
          description: 'Say the thing you owe.',
          targetNodeId: 'story-8742190384-11',
          order: 1,
        },
        {
          id: 'story-8742190384-c17',
          text: 'Try to move on—open the app.',
          description: 'Maybe a new story wants you.',
          targetNodeId: 'story-8742190384-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-9',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Skyline Confession',
      imageUrl: getCityImage(8),
      narration:
        'From the rooftop, the city looks like it forgives easily. Riley wraps both hands around a paper cup and waits. The breeze lifts the edge of your sentence. It’s time to choose between the neat half-truth and the messy whole.',
      choices: [
        {
          id: 'story-8742190384-c18',
          text: 'Be fully honest about the past.',
          description: 'Risk the stumble for the truth.',
          targetNodeId: 'story-8742190384-14',
          order: 1,
        },
        {
          id: 'story-8742190384-c19',
          text: 'Keep it light, avoid the heavy parts.',
          description: 'Maybe laughter can carry this.',
          targetNodeId: 'story-8742190384-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-10',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Gallery Echo',
      imageUrl: getCityImage(9),
      narration:
        'White walls, soft shoes, and the hush of strangers pretending not to feel things. You and Riley stand before a canvas that looks like a storm remembering itself. Your reflection wavers in the glass, two outlines almost touching. The question waits between frames.',
      choices: [
        {
          id: 'story-8742190384-c20',
          text: 'Ask what they wanted back then.',
          description: 'Invite a difficult memory in.',
          targetNodeId: 'story-8742190384-14',
          order: 1,
        },
        {
          id: 'story-8742190384-c21',
          text: 'Share how this moment feels now.',
          description: 'Anchor in the present.',
          targetNodeId: 'story-8742190384-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-11',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'The Letter',
      imageUrl: getCityImage(10),
      narration:
        'You read the message aloud to an empty room, and it sounds like a beginning pretending to be an apology. Your thumb hovers over “send.” Outside, the rain slackens, like the city is listening.',
      choices: [
        {
          id: 'story-8742190384-c22',
          text: 'Send it—ask to meet.',
          description: 'Let the night answer.',
          targetNodeId: 'story-8742190384-16',
          order: 1,
        },
        {
          id: 'story-8742190384-c23',
          text: 'Keep it unsent and walk.',
          description: 'Give doubt the last word.',
          targetNodeId: 'story-8742190384-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-12',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Night Bridge',
      imageUrl: getCityImage(11),
      narration:
        'Cables hum like cello strings; the river braids light beneath you. Your reflection blurs with the city’s. If you call now, you can still change the ending. Or you can let the water carry this elsewhere.',
      choices: [
        {
          id: 'story-8742190384-c24',
          text: 'Call Riley from the span.',
          description: 'Your voice might steady theirs.',
          targetNodeId: 'story-8742190384-16',
          order: 1,
        },
        {
          id: 'story-8742190384-c25',
          text: 'Delete the number, keep walking.',
          description: 'Some doors close quietly.',
          targetNodeId: 'story-8742190384-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-13',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Other Paths',
      imageUrl: getCityImage(12),
      narration:
        'City lights turn faces into stories you haven’t read. A stranger on your screen smiles like they know the same ache. Somewhere nearby, music tests the night for soft spots. You can try a new beginning—or admit the old one still holds you.',
      choices: [
        {
          id: 'story-8742190384-c26',
          text: 'Meet at the waterfront festival.',
          description: 'Maybe the right person is new.',
          targetNodeId: 'story-8742190384-17',
          order: 1,
        },
        {
          id: 'story-8742190384-c27',
          text: 'Close the app and find Riley.',
          description: 'The heart is not finished speaking.',
          targetNodeId: 'story-8742190384-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-14',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Open Umbrellas',
      imageUrl: getCityImage(13),
      narration:
        'You tell the whole thing—the flinch, the fear, the flight. Riley listens with their umbrella tilted toward you, shoulders brushing. The rain has questions; your answers feel like keys finally finding their locks.',
      choices: [
        {
          id: 'story-8742190384-c28',
          text: 'Suggest a ferry ride tomorrow.',
          description: 'Let the water carry a vow.',
          targetNodeId: 'story-8742190384-18',
          order: 1,
        },
        {
          id: 'story-8742190384-c29',
          text: 'Ask to take it slow.',
          description: 'Small rituals, steady steps.',
          targetNodeId: 'story-8742190384-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-15',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Street Music',
      imageUrl: getCityImage(14),
      narration:
        'A busker threads violin through the damp air, and conversation finally breathes. You and Riley walk without hurrying, letting the city set the pace. You don’t promise forever. You promise the next corner.',
      choices: [
        {
          id: 'story-8742190384-c30',
          text: 'Stroll the waterfront together.',
          description: 'Let the tide decide the words.',
          targetNodeId: 'story-8742190384-18',
          order: 1,
        },
        {
          id: 'story-8742190384-c31',
          text: 'Say goodnight—for now.',
          description: 'Leave room to want more.',
          targetNodeId: 'story-8742190384-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-16',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Reply Received',
      imageUrl: getCityImage(15),
      narration:
        'Your phone lights: “I’m here too. Pier at sunset?” The words steady you like a hand on your back. It’s not forgiveness yet, but it is forward.',
      choices: [
        {
          id: 'story-8742190384-c32',
          text: 'Meet on the pier at sunset.',
          description: 'Let the skyline witness this.',
          targetNodeId: 'story-8742190384-18',
          order: 1,
        },
        {
          id: 'story-8742190384-c33',
          text: 'Meet back at the café first.',
          description: 'Begin where the night began.',
          targetNodeId: 'story-8742190384-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-17',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Sky Blooms',
      imageUrl: getCityImage(16),
      narration:
        'The festival lifts sparks into the dark, each bloom a heartbeat. The person beside you laughs easily, kind without asking for too much. You could stay and let a new story unfold—or slip away toward the one that still calls your name.',
      choices: [
        {
          id: 'story-8742190384-c34',
          text: 'Stay and see where this leads.',
          description: 'A gentle door opens.',
          targetNodeId: 'story-8742190384-21',
          order: 1,
        },
        {
          id: 'story-8742190384-c35',
          text: 'Slip away to find Riley.',
          description: 'Fireworks can wait.',
          targetNodeId: 'story-8742190384-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8742190384-18',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Turning Point',
      imageUrl: getCityImage(17),
      narration:
        'Wind off the water carries the taste of salt and possibility. The ferry horn moans, low and patient. Riley’s shoulder finds yours. The night is ready to be decided.',
      choices: [
        {
          id: 'story-8742190384-c36',
          text: 'Board the ferry together.',
          description: 'Move, and let the city blur.',
          targetNodeId: 'story-8742190384-19',
          order: 1,
        },
        {
          id: 'story-8742190384-c37',
          text: 'Stay for the fireworks and talk.',
          description: 'Stand still, choose clearly.',
          targetNodeId: 'story-8742190384-20',
          order: 2,
        },
        {
          id: 'story-8742190384-c38',
          text: 'Hesitate—let the moment pass.',
          description: 'Silence writes its own ending.',
          targetNodeId: 'story-8742190384-22',
          order: 3,
        },
      ],
    },
    {
      id: 'story-8742190384-19',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'Across the Water',
      imageUrl: getCityImage(18),
      narration:
        'The ferry peels away from the dock, city lights loosening into a necklace on the dark. You lean into Riley and talk about ordinary things—what to cook, which plant you keep forgetting to water. Promises arrive without ceremony. The wake writes a new line behind you.',
      choices: [],
    },
    {
      id: 'story-8742190384-20',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'City of Sparks',
      imageUrl: getCityImage(19),
      narration:
        'Fireworks stitch the skyline, bright and brief and true. You and Riley speak the hard parts cleanly, then laugh at how human you both are. When the last bloom fades, the dark feels friendly again. You walk home together, no rush, enough time.',
      choices: [],
    },
    {
      id: 'story-8742190384-21',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'Another Beginning',
      imageUrl: getCityImage(20),
      narration:
        'On the pier, the stranger’s stories fit the shape of the night. You don’t compare; you simply listen. Later, you send Riley a kind message and mean it. Some loves return; some loves teach you how.',
      choices: [],
    },
    {
      id: 'story-8742190384-22',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'Quiet Apartment',
      imageUrl: getCityImage(21),
      narration:
        'Back in the room, the sign’s blue glow softens at the edges. You brew tea, open the window, and let the rain finish its sentence. Not tonight, you decide—but not never. The city will still be here when you’re ready to say more.',
      choices: [],
    },
  ],
};

