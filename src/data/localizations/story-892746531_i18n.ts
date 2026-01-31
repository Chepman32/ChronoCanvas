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

export const story_892746531StoryTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English
  en: {
    title: 'The Last Letter',
    description: 'When you discover a mysterious love letter in your late grandmother',
    author: 'Elena Rousseau',
    nodes: {
      'story-892746531-3': {
        title: 'Family Secrets',
        narration: 'Your aunt goes pale when you mention the letter. She pours tea with shaking hands and admits that your grandmother spent a year in Paris before meeting your grandfather. She came home suddenly, never explained why, and forbade anyone from mentioning it. Your aunt produces a small photograph: your grandmother at 23, radiant in a sundress, standing next to a young man whose face is turned away.',
        choices: {
          'story-892746531-c5': {
            text: 'Take the photo and go to Paris immediately',
            description: 'The mystery deepens',
          },
          'story-892746531-c6': {
            text: 'Press your aunt for more details about the man',
            description: 'Learn everything first',
          },
        },
      },
    },
  },

  // Русский - Not yet translated

  // Español - Not yet translated

  // Deutsch - Not yet translated

  // Français - Not yet translated

  // Português - Not yet translated

  // 日本語 - Not yet translated

  // 中文 - Not yet translated

  // 한국어 - Not yet translated

  // Українська - Not yet translated

};
