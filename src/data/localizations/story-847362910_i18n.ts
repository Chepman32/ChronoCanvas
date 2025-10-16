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

export const story_847362910StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Midnight Caller',
    description: 'Someone knows what you did last summer. The phone rings at 3 AM with a voice from your past, and now you have 48 hours to find them before they find you. Every choice could be your last.',
    author: 'Elena Blackwood',
    nodes: {
      'story-847362910-2': {
        title: 'Buried Evidence',
        narration: 'The file box sits in your closet where you left it three years ago, covered in dust and regret. Inside, crime scene photos show the park at dawn, yellow tape cordoning off the gazebo. The victim, Marcus Dalton, stares up from glossy paper with lifeless eyes. Your notes mention a witness who never came forward—someone saw everything but disappeared. Then you notice it: a photo is missing from the sequence. Someone has been in your apartment.',
        choices: {
          'story-847362910-c4': {
            text: 'Check your apartment for signs of a break-in',
            description: 'They were here. They might still be close.',
          },
          'story-847362910-c5': {
            text: 'Focus on finding the missing witness',
            description: 'The caller might be the witness from three years ago',
          },
        },
      },
      'story-847362910-7': {
        title: 'The Empty Cannery',
        narration: 'The cannery looms against the pre-dawn sky like a rusted cathedral. You slip through a broken fence and enter through a side door hanging off its hinges. Inside, machinery sits frozen in time, covered in layers of dust and pigeon droppings. Your flashlight cuts through the darkness, revealing footprints in the dust—fresh ones, leading deeper into the building. Then you hear it: music playing somewhere above you, a scratchy recording of an old jazz standard. The same song that was playing when Marcus Dalton died.',
        choices: {
          'story-847362910-c15': {
            text: 'Follow the music upstairs',
            description: 'Someone wants you to find them',
          },
          'story-847362910-c16': {
            text: 'Search the ground floor first',
            description: 'Clear each room methodically and safely',
          },
        },
      },
      'story-847362910-17': {
        title: 'Ground Floor Secrets',
        narration: 'You methodically search each room on the ground floor—old offices, a break room with moldy coffee cups, storage closets full of rusted equipment. In the last office, you find something that makes your heart race: recent activity. Someone has been living here. Sleeping bag, food wrappers, and a wall covered in newspaper clippings about police corruption. Photos of you are mixed in with images of your former partner, Captain Morrison, the one who closed the Dalton case. Then you see it: a whiteboard with a timeline connecting Morrison to the Dalton family business, with arrows pointing to offshore accounts. The music stops upstairs. Footsteps descend toward you.',
        choices: {
          'story-847362910-c35': {
            text: 'Hide and ambush whoever is coming',
            description: 'Attack from the shadows',
          },
          'story-847362910-c36': {
            text: 'Announce yourself and ask to talk',
            description: 'Maybe violence isn',
          },
        },
      },
      'story-847362910-18': {
        title: 'Bureaucratic Justice',
        narration: 'You wait for backup, and when they arrive, the cannery is empty. Sarah Chen is found safe at home—the text was a bluff. Rebecca Dalton is arrested trying to board a plane to Mexico. In custody, she confesses everything: Marcus was laundering drug money, Captain Morrison was on the payroll, and when Rebecca confronted her brother, Morrison killed him to silence them both. But without the evidence Rebecca gathered—now destroyed in her panic—nothing sticks. Morrison retires with full pension. Rebecca goes to prison for stalking and breaking and entering. The case officially closes, but you know the truth. Sometimes the system protects the guilty, and sometimes justice is nothing more than paperwork and compromises. You hand in your badge three months later.',
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
