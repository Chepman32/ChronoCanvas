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

export const story_10012007StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Sands of Fate',
    description: 'Scorching dunes and ancient secrets stand between you and a legendary desert tomb. Choose your routes wisely or become another story swallowed by the sands.',
    author: 'Professor Leila Farouk',
    nodes: {
      'story-10012007-1': {
        title: 'Dune Decision',
        narration: 'The sun beats down mercilessly on the endless dunes around you. You are an archaeologist-adventurer on the trail of a fabled lost tomb hidden somewhere in this desert. At a small oasis, your local guide spreads a map on the sand and points out two possible routes to the site: one loops around high dunes following an old caravan trail, and the other cuts straight across the open desert. You sip warm water from your canteen--either way, the journey will be arduous and the day\'s heat is rising. Time to choose your path.',
        choices: {
          'story-10012007-c1': {
            text: 'Stick to the known caravan trail around the dunes',
          },
          'story-10012007-c2': {
            text: 'Strike out directly across the open dunes',
          },
        },
      },
      'story-10012007-2': {
        title: 'Tomb Entrance',
        narration: 'You and your guide follow the gentle slope of an established route. Though longer, it spares you the worst of the dunes. After many hot hours, you arrive near sundown at the site marked on your map: a rocky mound partially buried in sand. Brushing aside dunes, you uncover a stone doorway leading into the ground--the entrance to an ancient tomb. The main door is sealed shut by centuries of debris. However, your guide finds what might be an air shaft or hidden tunnel off to one side, partially uncovered by the wind.',
        choices: {
          'story-10012007-c3': {
            text: 'Clear and force open the main stone door',
          },
          'story-10012007-c4': {
            text: 'Crawl through the narrow hidden tunnel',
          },
        },
      },
      'story-10012007-3': {
        title: 'Sandstorm Wall',
        narration: 'You bid your cautious guide farewell and venture out alone across the vast dunes to save time. The sun blazes overhead, reflecting off waves of sand. By mid-day, your water is low. Then, on the horizon, you see a wall of darkness--a sandstorm roaring toward you. It hits before you can find shelter. Sand stings your skin and you can barely see your own hands. Your camel panics and flees, leaving you on foot. As the storm howls, you have to make a life-or-death decision.',
        choices: {
          'story-10012007-c5': {
            text: 'Hunker down behind a dune and wait out the sandstorm',
          },
          'story-10012007-c6': {
            text: 'Push forward blindly, trying to reach rocky shelter you glimpsed earlier',
          },
        },
      },
      'story-10012007-4': {
        title: 'Triggered Trap',
        narration: 'Using crowbars and grit, you pry open the ancient stone door. Stale air rushes out. Torch in hand, you step into a descending corridor lined with hieroglyphs. As you test your footing, a hidden pressure plate sinks beneath your boot. Spears dart from hidden slits and the ceiling rumbles. You sprint for the exit as stones crash down. Outside, you dive clear just as the entrance seals beneath tons of rock. Coughing and trembling, you realize the tomb is now unreachable--and the artifacts you sought remain buried forever.',
        choices: {
        },
      },
      'story-10012007-5': {
        title: 'Lost Pharaoh\'s Legacy',
        narration: 'You and your guide squeeze through the narrow tunnel, crawling through dust and cobwebs. It opens into a hidden antechamber of the tomb, bypassing the sealed main door. Inside, by flickering torchlight, you discover the Pharaoh\'s burial chamber untouched by looters--piles of gold and the ornate sarcophagus glisten before you. Your heart races with triumph. It takes days to document and carefully remove the artifacts, but eventually, you emerge from the desert with history in your hands. The "treasure of the sands" is yours, and your name will be remembered alongside its discovery.',
        choices: {
        },
      },
      'story-10012007-6': {
        title: 'Retreat to Live',
        narration: 'You drop to the leeward side of a dune, wrapping a cloth around your face and huddling as the storm rages. Sand piles over you, and it is nearly impossible to breathe, but you endure. By morning, the storm is gone. You shake off a layer of sand and stand to survey the now-alien landscape. Every direction looks the same; the landmarks on your map are gone. With water almost out, you realize pressing on would be suicide. You eventually backtrack to the distant oasis, battered but alive. The lost tomb remains lost, and you leave the desert with the hard lesson that sometimes retreat is the wisest choice.',
        choices: {
        },
      },
      'story-10012007-7': {
        title: 'Buried by the Storm',
        narration: 'Refusing to give up, you stagger onward in the storm, sand lashing your body. Disoriented, you climb dune after dune, searching for the rock formation you thought you saw. Hours pass and your strength wanes. At last, the storm abates and stars emerge--but you collapse, your lungs clogged with sand, body dehydrated and exhausted. In the pale light of dawn, the only movement is the gentle curve of sand settling over an unmoving figure. The desert claimed you as one of its many secrets, your bones to lie beneath shifting dunes for eternity.',
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
