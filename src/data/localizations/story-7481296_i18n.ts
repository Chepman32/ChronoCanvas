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

export const story_7481296StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Midnight Missing',
    description: 'When a young woman vanishes without a trace, a determined detective must navigate city shadows and unravel a web of clues before time runs out. Every decision could mean a life saved or a trail gone cold.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-19': {
        title: 'Pyrrhic Victory',
        narration: 'Time slows as you squeeze the trigger. The gunshot echoes through the cavernous warehouse. **Alan** staggers backward, the knife dropping from his hand. Your shot strikes true, incapacitating him before he could harm **Emily**. Officers swarm in and Emily runs toward you, but not before a stray piece of shrapnel from the concrete grazes her side. She winces in pain, bleeding lightly – hurt but alive. Alan lies on the floor, wounded and moaning. As medics are called, you wrap Emily in a blanket. **The kidnapper is stopped permanently, and Emily is saved, but the violent end leaves you with a hollow feeling as dawn breaks.**',
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
