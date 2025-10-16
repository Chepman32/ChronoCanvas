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

export const story_10012008StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Frozen Pass',
    description: 'After a crash in a remote mountain range, survival hinges on quick thinking and brutal choices. Brave the elements or await rescue--the mountains remember every decision.',
    author: 'Everett Cole',
    nodes: {
      'story-10012008-1': {
        title: 'Crash in the Peaks',
        narration: 'Your small plane has crashed in a remote mountain range. It\'s mid-winter; icy wind stings your face. You salvage a few supplies from the wreckage--some food, a flare, a blanket. No one knows you are here. As nightfall looms, you face a critical choice: stay with the plane hoping for rescue, or venture down the treacherous slopes to find help yourself.',
        choices: {
          'story-10012008-c1': {
            text: 'Stay at the crash site, build a camp, and wait for rescue',
          },
          'story-10012008-c2': {
            text: 'Leave now and trek downhill in search of civilization',
          },
        },
      },
      'story-10012008-2': {
        title: 'Shelter or Signal',
        narration: 'You decide to stay near the plane, reasoning that it\'s more visible to potential rescuers. As darkness falls, you gather whatever you can--seat cushions, bits of insulation--and huddle in a partially intact section of the fuselage. The wind howls outside. You have a few matches and the flare (but nothing to launch it). You consider how to signal your location and survive the freezing night ahead.',
        choices: {
          'story-10012008-c3': {
            text: 'Build a large signal fire using plane debris to attract attention',
          },
          'story-10012008-c4': {
            text: 'Conserve energy and stay sheltered inside the wreck',
          },
        },
      },
      'story-10012008-3': {
        title: 'Icy Descent',
        narration: 'You strap on your boots, shoulder the small pack of supplies, and set off through knee-deep snow. After an hour of arduous descent, you reach a sheer icy drop. A frozen waterfall creates a slick 30-foot cliff in your path. You could climb down here (risky), or detour through a dense pine forest on a gentler slope (safer but longer). Light is fading fast and the cold intensifies.',
        choices: {
          'story-10012008-c5': {
            text: 'Carefully climb down the icy cliff to save time',
          },
          'story-10012008-c6': {
            text: 'Take the longer path through the forest below',
          },
        },
      },
      'story-10012008-4': {
        title: 'Rescue on the Wing',
        narration: 'Determined to be found, you pile up broken seat pieces and tree branches and set them ablaze as darkness falls. Huddling near the flames, you fight off sleep despite the numbing cold. In the gray light of dawn, you hear the distant thump of helicopter blades. Climbing onto the plane\'s wing, you frantically wave the still-smoking blanket. A search-and-rescue chopper appears between the peaks! They spotted your fire\'s smoke. Relief floods you as help arrives--you\'ve survived the frozen night and are safely lifted away from the icy wilderness.',
        choices: {
        },
      },
      'story-10012008-5': {
        title: 'Frozen Silence',
        narration: 'You decide against building a fire, fearing it will burn out too quickly or go unnoticed. Curling up under pieces of fuselage and wrapping the blanket tight, you try to conserve heat. The night drags on in darkness and sub-zero cold. Without a fire or movement, your body temperature plummets. Sometime before dawn, shivering gives way to numb stillness. The next day, rescue helicopters spot the wreck--and find you inside, cold and peacefully still. You succumbed to the unforgiving cold mere hours before help arrived.',
        choices: {
        },
      },
      'story-10012008-6': {
        title: 'Fatal Fall',
        narration: 'Trusting your climbing skills, you tie your blanket into a makeshift rope and begin descending the icy wall. Halfway down, your foot slips. You dangle for a heartbeat before your frozen grip fails--then you are tumbling. You crash through brittle ice into a ravine below. The world goes dark. Days later, a search party finds the ravine. Among the rocks and ice they discover your pack and realize tragically that your bid for survival ended in a fatal fall.',
        choices: {
        },
      },
      'story-10012008-7': {
        title: 'Road to Safety',
        narration: 'You opt for caution, winding your way through the snow-laden forest. It\'s slow going, and night forces you to shelter under pine boughs, but your steady progress continues at first light. By midday, you stumble onto a snow-covered road at the forest\'s edge. Not long after, a rumbling snowplow appears. The driver is astonished to find you. Wrapped in a warm blanket in the truck\'s cabin, you know you\'ve made it out alive. It was not heroic or quick, but your careful choices have led you safely off the Frozen Pass and back to the world of the living.',
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
