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

export const story_847362951StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Midnight Curator',
    description: 'A renowned art curator is found dead in a locked gallery on the eve of the biggest exhibition of her career. As the lead detective, you have until dawn to solve the murder before the press descends and the killer disappears forever.',
    author: 'Detective Marcus Reed',
    nodes: {
      'story-847362951-4': {
        title: 'Sealed Chamber',
        narration: 'The main entrance deadbolt is engaged from inside, the security chain still latched. Every window remains locked, their sensors undisturbed according to the security system. The only other exit leads to a fire escape, but its alarm is armed and shows no sign of being triggered. This should be impossible. Then you notice something odd: fresh scratches around the ventilation grate near the ceiling, and a single black thread caught on its edge.',
        choices: {
          'story-847362951-c8': {
            text: 'Climb up to examine the ventilation system',
            description: 'Could someone have used the vents?',
          },
          'story-847362951-c9': {
            text: 'Review the security camera footage',
            description: 'Technology doesn',
          },
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
