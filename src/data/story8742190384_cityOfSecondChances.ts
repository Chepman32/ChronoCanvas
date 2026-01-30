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
  'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
  'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800',
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
  'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=800',
  'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800',
  'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
  'https://images.unsplash.com/photo-1475727946784-2890c8fdb9e7?w=800',
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
  genre: 'romance',
  involvement: 'medium',
  estimatedDuration: 45,
  isPremium: false,
  productId: 'com.chronocanvas.story.city-of-second-chances',
  version: '2.0',
  createdAt: '2025-01-07',
  updatedAt: '2026-01-30',
  totalNodes: 24,
  totalEndings: 4,
  startNodeId: 'story-8742190384-1',
  nodes: [
    // LAYER 0: START
    {
      id: 'story-8742190384-1',
      storyId: 'story-8742190384',
      type: 'start',
      title: 'Rain Arrival',
      imageUrl: getCityImage(0),
      narration:
        'Night rain slicks the avenue into a mirror, neon smeared like brushstrokes across the asphalt. Your suitcase is heavier than it should be, full of things you did not say last time. A gust pushes you beneath an awning; the city smells like coffee and thunder. Somewhere a train bell clatters. You tell yourself it is only one night—enough to decide if you will knock on Riley\'s door.',
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
          targetNodeId: 'story-8742190384-2',
          order: 2,
        },
      ],
    },
    // LAYER 1: First Shelter (Decision 1)
    {
      id: 'story-8742190384-2',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Warm Refuge',
      imageUrl: getCityImage(1),
      narration:
        'Milk spirals into a small galaxy atop your latte while the windows bead with rain. The barista chats about a late-night reading at the bookshop down the block. Your phone vibrates on the saucer, Riley\'s name still pinned to the top of your messages like a promise you never kept. The cup warms your hands; your courage is slower to simmer. You must decide your next step carefully.',
      choices: [
        {
          id: 'story-8742190384-c3',
          text: 'Ask about the bookshop reading.',
          description: 'Stories might open doorways.',
          targetNodeId: 'story-8742190384-3',
          order: 1,
        },
        {
          id: 'story-8742190384-c4',
          text: 'Check the message from Riley.',
          description: 'See what words await you.',
          targetNodeId: 'story-8742190384-3',
          order: 2,
        },
      ],
    },
    // LAYER 2: Information Gathering (Decision 2)
    {
      id: 'story-8742190384-3',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Fragments of Hope',
      imageUrl: getCityImage(2),
      narration:
        'The barista mentions someone who sounds like Riley was asking about you yesterday. Your phone shows a simple text: "In town?" The coincidence prickles your skin. The rain drums harder against the glass, as if urging you toward a decision. You could pursue this lead at the bookshop, or you could reply directly and change everything.',
      choices: [
        {
          id: 'story-8742190384-c5',
          text: 'Walk to the bookshop to investigate.',
          description: 'Let the trail guide your feet.',
          targetNodeId: 'story-8742190384-4',
          order: 1,
        },
        {
          id: 'story-8742190384-c6',
          text: 'Send Riley a careful reply.',
          description: '"Still here. Could we talk?"',
          targetNodeId: 'story-8742190384-4',
          order: 2,
        },
      ],
    },
    // LAYER 3: The Connection Attempt (Decision 3)
    {
      id: 'story-8742190384-4',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Reaching Out',
      imageUrl: getCityImage(3),
      narration:
        'Your message hovers in the digital ether, a small flag of truce raised in the night. The bookshop awaits three blocks east, its windows glowing like a lantern in the rain. Either path leads toward the same uncertainty. Your heart pounds with the weight of words unsaid for too long. You must choose how to bridge the silence between you.',
      choices: [
        {
          id: 'story-8742190384-c7',
          text: 'Wait for Riley\'s response.',
          description: 'Let them set the terms.',
          targetNodeId: 'story-8742190384-5',
          order: 1,
        },
        {
          id: 'story-8742190384-c8',
          text: 'Go to the bookshop regardless.',
          description: 'Movement beats waiting.',
          targetNodeId: 'story-8742190384-5',
          order: 2,
        },
      ],
    },
    // LAYER 4: The Response (Decision 4)
    {
      id: 'story-8742190384-5',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Words Arrive',
      imageUrl: getCityImage(4),
      narration:
        'Your phone lights up: "Station. Ten minutes." The words are sparse, but they are an opening. You gather your coat, heart hammering against your ribs like a bird against glass. The rain has not stopped, but you no longer notice it. Every step toward the station feels like crossing a threshold you cannot uncross. Time compresses; the moment expands.',
      choices: [
        {
          id: 'story-8742190384-c9',
          text: 'Walk quickly to the station.',
          description: 'Do not keep them waiting.',
          targetNodeId: 'story-8742190384-6',
          order: 1,
        },
        {
          id: 'story-8742190384-c10',
          text: 'Take a moment to compose yourself.',
          description: 'Breathe before the reckoning.',
          targetNodeId: 'story-8742190384-6',
          order: 2,
        },
      ],
    },
    // LAYER 5: The Approach (Decision 5)
    {
      id: 'story-8742190384-6',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Station Arrival',
      imageUrl: getCityImage(5),
      narration:
        'The station hums with departures, boards flicking letters like restless eyelids. A laugh you know drifts from the mezzanine—familiar as a favorite song. You freeze halfway up the steps, suitcase thudding on the stair. There, by the coffee kiosk, stands Riley with rain-dotted hair and an expression you cannot quite read. Your breath catches.',
      choices: [
        {
          id: 'story-8742190384-c11',
          text: 'Call out their name.',
          description: 'Let the station witness this.',
          targetNodeId: 'story-8742190384-7',
          order: 1,
        },
        {
          id: 'story-8742190384-c12',
          text: 'Approach slowly, letting them see you.',
          description: 'Give them time to adjust.',
          targetNodeId: 'story-8742190384-7',
          order: 2,
        },
      ],
    },
    // LAYER 6: The First Words (Decision 6)
    {
      id: 'story-8742190384-7',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Recognition',
      imageUrl: getCityImage(6),
      narration:
        'Riley turns, and time stutters. Their eyes widen, then soften with something complicated—hurt, hope, hesitation. "You came," they say, and it sounds like an accusation and a relief braided together. The station noise fades to a murmur. You have rehearsed this moment a thousand times in your head, but now all your speeches dissolve. You must choose what truth to speak first.',
      choices: [
        {
          id: 'story-8742190384-c13',
          text: 'Apologize for leaving.',
          description: 'Start with the hardest truth.',
          targetNodeId: 'story-8742190384-8',
          order: 1,
        },
        {
          id: 'story-8742190384-c14',
          text: 'Ask how they have been.',
          description: 'Begin gently, bridge the gap.',
          targetNodeId: 'story-8742190384-8',
          order: 2,
        },
      ],
    },
    // LAYER 7: The Reconnection (Decision 7)
    {
      id: 'story-8742190384-8',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Tentative Bridge',
      imageUrl: getCityImage(7),
      narration:
        'Riley listens, really listens, in a way you had forgotten people could. Their coffee goes cold between their hands as you speak. The station crowds flow around you like water around stones. Something fragile begins to form in the space between your words—a possibility, a maybe, a door cracking open. You need to suggest where this conversation can continue.',
      choices: [
        {
          id: 'story-8742190384-c15',
          text: 'Suggest walking to the park.',
          description: 'Movement might ease the tension.',
          targetNodeId: 'story-8742190384-9',
          order: 1,
        },
        {
          id: 'story-8742190384-c16',
          text: 'Propose the rooftop you both loved.',
          description: 'Shared memory as foundation.',
          targetNodeId: 'story-8742190384-9',
          order: 2,
        },
      ],
    },
    // LAYER 8: The Walk (Decision 8)
    {
      id: 'story-8742190384-9',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Shared Steps',
      imageUrl: getCityImage(8),
      narration:
        'You walk together through streets that remember your footsteps. The rain has softened to a mist that clings to your hair like memories. Riley walks close enough that your shoulders brush, far enough that you cannot read their thoughts. You pass the old gallery where you had your first date, the bakery where you fought and made up. Each landmark is a ghost you must decide whether to acknowledge.',
      choices: [
        {
          id: 'story-8742190384-c17',
          text: 'Mention the gallery as you pass.',
          description: 'Honor the history between you.',
          targetNodeId: 'story-8742190384-10',
          order: 1,
        },
        {
          id: 'story-8742190384-c18',
          text: 'Focus on the present moment.',
          description: 'Let the past rest for now.',
          targetNodeId: 'story-8742190384-10',
          order: 2,
        },
      ],
    },
    // LAYER 9: The Destination (Decision 9)
    {
      id: 'story-8742190384-10',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Arrival Point',
      imageUrl: getCityImage(9),
      narration:
        'You reach the old bench in the riverside park where you once talked until dawn. The wood is worn smooth by countless conversations, countless confessions. Riley sits, leaving space that could be invitation or distance. The city lights dance on the water like scattered stars. You are here, together, after everything. The moment feels suspended, waiting for you to breathe life into what comes next.',
      choices: [
        {
          id: 'story-8742190384-c19',
          text: 'Sit close and begin to explain.',
          description: 'Offer the full truth at last.',
          targetNodeId: 'story-8742190384-11',
          order: 1,
        },
        {
          id: 'story-8742190384-c20',
          text: 'Ask what they need from you.',
          description: 'Let them guide the healing.',
          targetNodeId: 'story-8742190384-11',
          order: 2,
        },
      ],
    },
    // LAYER 10: The Deepening (Decision 10) - MINIMUM 10 CHOICES REACHED
    {
      id: 'story-8742190384-11',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Honest Ground',
      imageUrl: getCityImage(10),
      narration:
        'Words flow like the river beside you—sometimes gentle, sometimes torrential. You speak of fear and pride, of the silence that grew between you like ivy, of the nights you almost called. Riley meets your eyes, and you see your own longing reflected there. The bench holds you both as the truth settles, heavy and necessary. You have arrived at the threshold of decision. This is where paths truly diverge.',
      choices: [
        {
          id: 'story-8742190384-c21',
          text: 'Suggest a ferry ride together.',
          description: 'Let the water carry you forward.',
          targetNodeId: 'story-8742190384-12',
          order: 1,
        },
        {
          id: 'story-8742190384-c22',
          text: 'Propose starting fresh, here and now.',
          description: 'A new chapter on familiar soil.',
          targetNodeId: 'story-8742190384-13',
          order: 2,
        },
      ],
    },
    // LAYER 11: The Commitment Path (Decision 11)
    {
      id: 'story-8742190384-12',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Water\'s Edge',
      imageUrl: getCityImage(11),
      narration:
        'The ferry terminal glows against the dark water, a promise of departure and return. Riley\'s hand finds yours, tentative but warm. "I\'m scared," they admit, and you squeeze their fingers in acknowledgment. Fear is the price of hope, you realize. The boat horn sounds, low and patient. You stand at the edge of something vast—an ocean of possibility, or the deep water of old patterns.',
      choices: [
        {
          id: 'story-8742190384-c23',
          text: 'Board the ferry together.',
          description: 'Commit to the journey.',
          targetNodeId: 'story-8742190384-14',
          order: 1,
        },
        {
          id: 'story-8742190384-c24',
          text: 'Suggest watching from the pier instead.',
          description: 'Stay anchored, stay safe.',
          targetNodeId: 'story-8742190384-15',
          order: 2,
        },
      ],
    },
    // LAYER 11 ALT: The New Beginning Path (Decision 11)
    {
      id: 'story-8742190384-13',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Fresh Soil',
      imageUrl: getCityImage(12),
      narration:
        'You speak of starting over—not where you left off, but where you are now, two changed people with shared history and separate growth. Riley nods slowly, considering. "That means letting some things go," they say, and you know they are right. The past is a garden you cannot unplant, but you can choose what to tend now. The city around you breathes with possibility.',
      choices: [
        {
          id: 'story-8742190384-c25',
          text: 'Walk to the waterfront festival.',
          description: 'Celebrate this fragile new start.',
          targetNodeId: 'story-8742190384-16',
          order: 1,
        },
        {
          id: 'story-8742190384-c26',
          text: 'Find a quiet place to plan tomorrow.',
          description: 'Build the foundation carefully.',
          targetNodeId: 'story-8742190384-17',
          order: 2,
        },
      ],
    },
    // LAYER 12: Ferry Journey (Decision 12)
    {
      id: 'story-8742190384-14',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Crossing Waters',
      imageUrl: getCityImage(13),
      narration:
        'The ferry peels away from the dock, city lights loosening into a necklace on the dark water. You lean against the rail with Riley beside you, shoulders touching. The conversation has gentled into comfortable silence, broken occasionally by small observations—a constellation, a passing boat, a memory sparked by the salt air. You are moving, literally and figuratively, toward an unknown shore.',
      choices: [
        {
          id: 'story-8742190384-c27',
          text: 'Speak of practical tomorrows.',
          description: 'Make plans, build structure.',
          targetNodeId: 'story-8742190384-18',
          order: 1,
        },
        {
          id: 'story-8742190384-c28',
          text: 'Simply hold the moment.',
          description: 'Let the water carry you both.',
          targetNodeId: 'story-8742190384-19',
          order: 2,
        },
      ],
    },
    // LAYER 12 ALT: Pier Reflection (Decision 12)
    {
      id: 'story-8742190384-15',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Anchored View',
      imageUrl: getCityImage(14),
      narration:
        'You remain on the pier, watching the ferry dissolve into the dark horizon. Riley stands close, wrapped in thought as much as in coat. "We are good at almost," they say quietly, and the words sting with truth. Almost talking, almost staying, almost loving fully. You feel the weight of all your almosts pressing down. But standing here, you sense something shifting.',
      choices: [
        {
          id: 'story-8742190384-c29',
          text: 'Promise to stop almost-ing.',
          description: 'Commit to fullness, finally.',
          targetNodeId: 'story-8742190384-20',
          order: 1,
        },
        {
          id: 'story-8742190384-c30',
          text: 'Acknowledge the pattern honestly.',
          description: 'See clearly before you leap.',
          targetNodeId: 'story-8742190384-21',
          order: 2,
        },
      ],
    },
    // LAYER 12 ALT: Festival Joy (Decision 12)
    {
      id: 'story-8742190384-16',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Lights and Music',
      imageUrl: getCityImage(15),
      narration:
        'The waterfront festival lifts sparks into the dark sky, fireworks blooming like giant flowers of light. Music threads through the crowd, and you find yourselves dancing without meaning to, bodies remembering each other\'s rhythms. Riley laughs, really laughs, and the sound loosens something tight in your chest. Around you, strangers celebrate their own stories, their own second chances.',
      choices: [
        {
          id: 'story-8742190384-c31',
          text: 'Kiss them as the fireworks peak.',
          description: 'Let joy decide for you.',
          targetNodeId: 'story-8742190384-19',
          order: 1,
        },
        {
          id: 'story-8742190384-c32',
          text: 'Whisper your hopes for the future.',
          description: 'Speak your dreams aloud.',
          targetNodeId: 'story-8742190384-20',
          order: 2,
        },
      ],
    },
    // LAYER 12 ALT: Quiet Planning (Decision 12)
    {
      id: 'story-8742190384-17',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Intimate Maps',
      imageUrl: getCityImage(16),
      narration:
        'You find a twenty-four-hour diner glowing like a lighthouse on the quiet street. Over pie and coffee, you sketch the outlines of a shared future—not grand declarations, but small practicalities. Who will call whom, how often, what you both need to feel safe. Riley draws circles on the napkin, connecting your lives with careful ink. It is undramatic, unromantic, and more precious than any gesture.',
      choices: [
        {
          id: 'story-8742190384-c33',
          text: 'Exchange keys as a symbol.',
          description: 'Physical trust, tangible promise.',
          targetNodeId: 'story-8742190384-20',
          order: 1,
        },
        {
          id: 'story-8742190384-c34',
          text: 'Agree to meet again tomorrow.',
          description: 'One step, then another.',
          targetNodeId: 'story-8742190384-21',
          order: 2,
        },
      ],
    },
    // LAYER 13: Resolution Points (Decision 13) - Final branches before endings
    {
      id: 'story-8742190384-18',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Building Together',
      imageUrl: getCityImage(17),
      narration:
        'You speak of apartments and schedules, of the logistics of love that outlasts infatuation. Riley meets your practical with their own, and together you construct a scaffold sturdy enough to hold real life. The ferry continues its crossing, but you have already reached a shore—solid ground after stormy seas. Tomorrow waits with all its ordinary challenges.',
      choices: [
        {
          id: 'story-8742190384-c35',
          text: 'Commit to the work of us.',
          description: 'Choose the path of partnership.',
          targetNodeId: 'story-8742190384-22',
          order: 1,
        },
      ],
    },
    {
      id: 'story-8742190384-19',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Perfect Moment',
      imageUrl: getCityImage(18),
      narration:
        'The world holds its breath. Fireworks paint Riley\'s face in gold and rose, and you kiss them as the sky blooms overhead. It is not a perfect love—you have seen each other\'s flaws too clearly for that—but it is a perfect moment, and you choose to trust that more moments will follow. The crowd cheers around you, celebrating your private joy with their public noise.',
      choices: [
        {
          id: 'story-8742190384-c36',
          text: 'Let this joy carry you forward.',
          description: 'Trust the feeling, trust them.',
          targetNodeId: 'story-8742190384-23',
          order: 1,
        },
      ],
    },
    {
      id: 'story-8742190384-20',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Solid Ground',
      imageUrl: getCityImage(19),
      narration:
        'You make promises you intend to keep, spoken simply without flourish. Riley receives them with nodding gravity, understanding the weight of words after so much silence. The diner\'s neon buzzes softly as the night deepens around you. You have chosen not passion\'s flame but love\'s steady burn, and it feels like coming home to a place you have never quite allowed yourself to inhabit.',
      choices: [
        {
          id: 'story-8742190384-c37',
          text: 'Begin again, differently.',
          description: 'A new chapter, better written.',
          targetNodeId: 'story-8742190384-24',
          order: 1,
        },
      ],
    },
    {
      id: 'story-8742190384-21',
      storyId: 'story-8742190384',
      type: 'decision',
      title: 'Gentle Separation',
      imageUrl: getCityImage(20),
      narration:
        'You part with honesty rather than hope, acknowledging that some love stories are beautiful without being permanent. Riley\'s eyes glisten but they nod, understanding. "Thank you for tonight," they say, and you know they mean the closure, not just the company. You walk in opposite directions, lighter for having spoken truth, sad for what cannot be salvaged.',
      choices: [
        {
          id: 'story-8742190384-c38',
          text: 'Carry the lesson forward.',
          description: 'Some endings are also gifts.',
          targetNodeId: 'story-8742190384-25',
          order: 1,
        },
      ],
    },
    // ENDINGS - After minimum 10+ choices
    {
      id: 'story-8742190384-22',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'Across the Water',
      imageUrl: getCityImage(21),
      narration:
        'The ferry docks at the far shore, city lights twinkling across the water like memories. You disembark together, Riley\'s hand steady in yours. You talk about ordinary things—what to cook, which plant you keep forgetting to water, whose turn it is to make coffee. Promises arrive without ceremony, woven into the fabric of practical tomorrow. The wake writes a new line behind you, erasing nothing but carrying you forward into the life you choose to build, choice by choice, day by day.',
      choices: [],
    },
    {
      id: 'story-8742190384-23',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'City of Sparks',
      imageUrl: getCityImage(22),
      narration:
        'Fireworks stitch the skyline, bright and brief and true. You and Riley speak the hard parts cleanly, then laugh at how human you both are—fumbling, hopeful, stubborn in your love. When the last bloom fades, the dark feels friendly again, a blanket rather than a void. You walk home together through streets silver with rain, no rush, enough time stretching ahead like a gift you finally feel worthy of receiving. The city that once held your goodbye now witnesses your hello.',
      choices: [],
    },
    {
      id: 'story-8742190384-24',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'Another Beginning',
      imageUrl: getCityImage(23),
      narration:
        'Morning finds you at a corner café, sunlight streaming through windows that once reflected your goodbye. You and Riley sit across from each other with notebooks and coffee, sketching the architecture of a relationship rebuilt on stronger foundations. Not the same love as before—something wiser, more honest, more resilient. You do not promise forever; you promise to keep showing up, to keep choosing, to keep building. Some loves return; some loves teach you how to love better. Yours, perhaps, is both.',
      choices: [],
    },
    {
      id: 'story-8742190384-25',
      storyId: 'story-8742190384',
      type: 'ending',
      title: 'Quiet Apartment',
      imageUrl: getCityImage(24),
      narration:
        'Back in your rented room, the neon sign\'s blue glow softens at the edges. You brew tea, open the window, and let the rain finish its sentence. Not tonight, you decide—but not never. You send Riley one final message, a wish for their happiness expressed with the sincerity only closure can bring. The city will still be here when you are ready to say more, to someone new or perhaps to yourself. For now, you let the rain sing you to sleep, grateful for second chances even when they lead to different doors than you hoped.',
      choices: [],
    },
  ],
};
