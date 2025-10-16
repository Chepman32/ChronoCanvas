import { Story } from '../types';

export const sandsOfFateStory: Story = {
  id: 'story-10012007',
  title: 'Sands of Fate',
  description:
    `Scorching dunes and ancient secrets stand between you and a legendary desert tomb. Choose your routes wisely or become another story swallowed by the sands.`,
  coverImageUrl:
    'https://images.unsplash.com/photo-1594808846629-d8db69293d63?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1594808846629-d8db69293d63?auto=format&fit=crop&w=400&q=80',
  author: 'Professor Leila Farouk',
  genre: ['adventure'],
  difficulty: 'easy',
  estimatedDuration: 15,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-21',
  updatedAt: '2025-01-21',
  totalNodes: 7,
  totalEndings: 4,
  startNodeId: 'story-10012007-1',
  nodes: [
    {
      id: 'story-10012007-1',
      storyId: 'story-10012007',
      type: 'start',
      title: 'Dune Decision',
      imageUrl: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63',
      narration:
        `The sun beats down mercilessly on the endless dunes around you. You are an archaeologist-adventurer on the trail of a fabled lost tomb hidden somewhere in this desert. At a small oasis, your local guide spreads a map on the sand and points out two possible routes to the site: one loops around high dunes following an old caravan trail, and the other cuts straight across the open desert. You sip warm water from your canteen--either way, the journey will be arduous and the day's heat is rising. Time to choose your path.`,
      choices: [
        {
          id: 'story-10012007-c1',
          text: 'Stick to the known caravan trail around the dunes',
          targetNodeId: 'story-10012007-2',
          order: 1,
        },
        {
          id: 'story-10012007-c2',
          text: 'Strike out directly across the open dunes',
          targetNodeId: 'story-10012007-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012007-2',
      storyId: 'story-10012007',
      type: 'decision',
      title: 'Tomb Entrance',
      imageUrl: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63',
      narration:
        `You and your guide follow the gentle slope of an established route. Though longer, it spares you the worst of the dunes. After many hot hours, you arrive near sundown at the site marked on your map: a rocky mound partially buried in sand. Brushing aside dunes, you uncover a stone doorway leading into the ground--the entrance to an ancient tomb. The main door is sealed shut by centuries of debris. However, your guide finds what might be an air shaft or hidden tunnel off to one side, partially uncovered by the wind.`,
      choices: [
        {
          id: 'story-10012007-c3',
          text: 'Clear and force open the main stone door',
          targetNodeId: 'story-10012007-4',
          order: 1,
        },
        {
          id: 'story-10012007-c4',
          text: 'Crawl through the narrow hidden tunnel',
          targetNodeId: 'story-10012007-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012007-3',
      storyId: 'story-10012007',
      type: 'decision',
      title: 'Sandstorm Wall',
      imageUrl: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63',
      narration:
        `You bid your cautious guide farewell and venture out alone across the vast dunes to save time. The sun blazes overhead, reflecting off waves of sand. By mid-day, your water is low. Then, on the horizon, you see a wall of darkness--a sandstorm roaring toward you. It hits before you can find shelter. Sand stings your skin and you can barely see your own hands. Your camel panics and flees, leaving you on foot. As the storm howls, you have to make a life-or-death decision.`,
      choices: [
        {
          id: 'story-10012007-c5',
          text: 'Hunker down behind a dune and wait out the sandstorm',
          targetNodeId: 'story-10012007-6',
          order: 1,
        },
        {
          id: 'story-10012007-c6',
          text: 'Push forward blindly, trying to reach rocky shelter you glimpsed earlier',
          targetNodeId: 'story-10012007-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012007-4',
      storyId: 'story-10012007',
      type: 'ending',
      title: 'Triggered Trap',
      imageUrl: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63',
      narration:
        `Using crowbars and grit, you pry open the ancient stone door. Stale air rushes out. Torch in hand, you step into a descending corridor lined with hieroglyphs. As you test your footing, a hidden pressure plate sinks beneath your boot. Spears dart from hidden slits and the ceiling rumbles. You sprint for the exit as stones crash down. Outside, you dive clear just as the entrance seals beneath tons of rock. Coughing and trembling, you realize the tomb is now unreachable--and the artifacts you sought remain buried forever.`,
      choices: [],
    },
    {
      id: 'story-10012007-5',
      storyId: 'story-10012007',
      type: 'ending',
      title: `Lost Pharaoh's Legacy`,
      imageUrl: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63',
      narration:
        `You and your guide squeeze through the narrow tunnel, crawling through dust and cobwebs. It opens into a hidden antechamber of the tomb, bypassing the sealed main door. Inside, by flickering torchlight, you discover the Pharaoh's burial chamber untouched by looters--piles of gold and the ornate sarcophagus glisten before you. Your heart races with triumph. It takes days to document and carefully remove the artifacts, but eventually, you emerge from the desert with history in your hands. The "treasure of the sands" is yours, and your name will be remembered alongside its discovery.`,
      choices: [],
    },
    {
      id: 'story-10012007-6',
      storyId: 'story-10012007',
      type: 'ending',
      title: 'Retreat to Live',
      imageUrl: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63',
      narration:
        `You drop to the leeward side of a dune, wrapping a cloth around your face and huddling as the storm rages. Sand piles over you, and it is nearly impossible to breathe, but you endure. By morning, the storm is gone. You shake off a layer of sand and stand to survey the now-alien landscape. Every direction looks the same; the landmarks on your map are gone. With water almost out, you realize pressing on would be suicide. You eventually backtrack to the distant oasis, battered but alive. The lost tomb remains lost, and you leave the desert with the hard lesson that sometimes retreat is the wisest choice.`,
      choices: [],
    },
    {
      id: 'story-10012007-7',
      storyId: 'story-10012007',
      type: 'ending',
      title: 'Buried by the Storm',
      imageUrl: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63',
      narration:
        `Refusing to give up, you stagger onward in the storm, sand lashing your body. Disoriented, you climb dune after dune, searching for the rock formation you thought you saw. Hours pass and your strength wanes. At last, the storm abates and stars emerge--but you collapse, your lungs clogged with sand, body dehydrated and exhausted. In the pale light of dawn, the only movement is the gentle curve of sand settling over an unmoving figure. The desert claimed you as one of its many secrets, your bones to lie beneath shifting dunes for eternity.`,
      choices: [],
    },
  ],
};
