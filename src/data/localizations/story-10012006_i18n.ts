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

export const story_10012006StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Temple of Secrets',
    description: 'Deep in the Amazon, every decision can mean glory or doom. Navigate treacherous terrain, outwit ancient traps, and decide what price you are willing to pay for a legendary idol.',
    author: 'Dr. Maya Castillo',
    nodes: {
      'story-10012006-1': {
        title: 'Rainforest Dawn',
        narration: 'Deep in the Amazonian rainforest, you stand at the edge of an expedition camp at dawn. Birds call out from the dense canopy. Your mission: find the lost Temple of Secrets, rumored to hold untold treasures. The map spread in your hands offers two routes--one following a winding river known to local guides, and another cutting through uncharted jungle terrain. Time and resources are limited. You adjust your machete at your side, wipe sweat from your brow, and make your choice as the jungle\'s morning mist curls around you.',
        choices: {
          'story-10012006-c1': {
            text: 'Trek along the known river path as indicated by the map',
          },
          'story-10012006-c2': {
            text: 'Forge straight through the dense jungle for a direct route',
          },
        },
      },
      'story-10012006-2': {
        title: 'Broken Bridge',
        narration: 'Following the river\'s gentle curves, you make steady progress. The air is thick and humid, but the trail is clear. By midday, you reach a wide, rushing river crossing. A rickety rope bridge once spanned it, but now it hangs broken and swaying. The waters below churn with unseen dangers--perhaps crocodiles lurking. The temple lies somewhere on the far side.',
        choices: {
          'story-10012006-c3': {
            text: 'Attempt to ford the river directly, braving the strong current',
          },
          'story-10012006-c4': {
            text: 'Search upstream for a safer place to cross, even if it takes time',
          },
        },
      },
      'story-10012006-3': {
        title: 'Jungle Fork',
        narration: 'You turn off the mapped route and hack into the thick jungle. The forest is alive with the buzz of insects and distant calls of monkeys. Hours pass and the terrain grows harsher--thorny vines and uneven ground. Eventually, you come upon a fork: a steep hill to your left offers a vantage point above the treeline, while a shadowy valley to your right seems to lead forward but could get you lost.',
        choices: {
          'story-10012006-c5': {
            text: 'Climb the hill and scale a tall tree to survey the land',
          },
          'story-10012006-c6': {
            text: 'Stay on the ground path through the valley and push onward',
          },
        },
      },
      'story-10012006-4': {
        title: 'Temple Inner Chamber',
        narration: 'Your risky shortcut pays off. From the hilltop, you spotted the temple\'s vine-covered stone peaks jutting from the jungle. You arrive at the Temple of Secrets by late afternoon--an ancient stepped pyramid consumed by greenery. In the central chamber, sunlight beams onto a golden idol on an altar. You step closer, noticing mossy floor tiles and suspicious holes in the walls--likely traps. The treasure is within reach, but one wrong move could be deadly.',
        choices: {
          'story-10012006-c7': {
            text: 'Snatch the golden idol quickly and run',
          },
          'story-10012006-c8': {
            text: 'Examine the altar and surroundings carefully for traps before touching anything',
          },
        },
      },
      'story-10012006-5': {
        title: 'Claimed by the River',
        narration: 'Determined not to lose time, you secure your pack and step into the river. The current is far stronger than it looked. Halfway across, a hidden eddy tugs at your legs, sweeping them out from under you. You struggle, water filling your lungs. In the turmoil, you glimpse a pair of yellow reptilian eyes--a crocodile! Your scream is cut short as powerful jaws clamp down. The river runs red for a moment, then all is still. Your quest ends here, claimed by the untamed jungle waters.',
        choices: {
        },
      },
      'story-10012006-6': {
        title: 'Too Late to Claim',
        narration: 'You resist the river\'s temptation and trek upstream until you find a fallen tree sturdy enough to cross. By the time your boots touch the far bank, the sun is dipping low. You hurry through the jungle and finally break into a clearing--the Temple of Secrets stands before you, silent and ancient. But something is wrong: the entrance has fresh footprints. Rushing inside, you find the golden idol\'s altar empty. Recently lit torches flicker on the walls. It seems another expedition beat you here by mere hours, claiming the treasure. Exhausted and disappointed, you know when you are too late. You leave the temple behind, its secrets taken by someone else.',
        choices: {
        },
      },
      'story-10012006-7': {
        title: 'Quicksand Descent',
        narration: 'Foregoing the vantage point, you push into the valley\'s depths. The undergrowth is thick and visibility poor. Suddenly, your foot sinks and the ground gives way--quicksand! You thrash, but each movement pulls you deeper into the wet, sucking earth. Panic surges as the mire reaches your chest. You toss away your gear in a futile attempt to lighten yourself, but nothing stops the inexorable pull. In final desperation, you stretch for an overhanging vine that is just out of reach... and then you are gone. The jungle floor goes silent, your footprints ending where the earth swallowed you whole.',
        choices: {
        },
      },
      'story-10012006-8': {
        title: 'Temple Collapse',
        narration: 'Throwing caution aside, you leap onto the altar and grab the idol. For a moment, it is in your hands--but then the floor begins to rumble. You have only seconds to react as hidden spears shoot from the walls and the temple starts collapsing. You sprint back through the corridors as stones crash down. You dive outside just as the entire entrance caves in. Panting and alive, you unclench your hands--they are empty. The idol fell into the depths of the collapsing temple. You have survived, but the treasure is lost forever.',
        choices: {
        },
      },
      'story-10012006-9': {
        title: 'Treasure Secured',
        narration: 'Your adventurer\'s instincts take over--something is not right. Studying the floor, you spot faint outlines of pressure plates around the altar. You carefully wedge a stone where the idol sits, swapping it out without disturbing the mechanism. Holding your breath, you lift the idol gently--nothing happens. The temple remains silent except for the flutter of distant bats. You exit the temple triumphantly with the priceless artifact secured in your pack. You navigate back through the jungle, the idol\'s gleam a testament to your success. This adventure ends with victory--the Temple of Secrets has given up its prize to you.',
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
