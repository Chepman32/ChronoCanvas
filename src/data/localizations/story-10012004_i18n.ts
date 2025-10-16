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

export const story_10012004StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Hearts Divided',
    description: 'In a gilded world of duty and expectations, you must choose between eloping with your true love Samuel or honoring an arranged marriage. Every decision tests the bounds of courage, loyalty, and the cost of a broken heart.',
    author: 'Amelia Thornton',
    nodes: {
      'story-10012004-1': {
        title: 'Letter by Candlelight',
        narration: 'By candlelight in your family\'s grand estate, you re-read the love letter clutched in your hand. It is from Samuel--the one your heart belongs to--pleading that you run away with him. But your father, the Duke, has arranged your marriage to Lord Kensington in two days. The weight of duty and the call of true love tear at you. In this gilded cage of 19th-century expectations, you face an impossible choice: follow your heart with Samuel or honor your family\'s command.',
        choices: {
          'story-10012004-c1': {
            text: 'Defy your family and elope with your true love tonight',
          },
          'story-10012004-c2': {
            text: 'Obey your father\'s will and prepare to marry Lord Kensington',
          },
        },
      },
      'story-10012004-2': {
        title: 'Midnight Rendezvous',
        narration: 'Late that night, you meet Samuel by the old oak tree behind the manor, your heart racing. The plan: slip out and board a northbound train by dawn. In the darkness, Samuel squeezes your hand. "Are you sure about this?" he whispers. You glance back at the only home you have known, then at the open road ahead. It is now or never. Should you leave immediately under night\'s cover, or wait for a safer moment when the household is busy tomorrow?',
        choices: {
          'story-10012004-c3': {
            text: 'Run away with Samuel right now, before anyone notices',
          },
          'story-10012004-c4': {
            text: 'Wait for a better chance at dawn, when it is less risky',
          },
        },
      },
      'story-10012004-3': {
        title: 'Wedding Aisle',
        narration: 'Heartbreaking as it is, you tell Samuel goodbye and resolve to do your duty. The day of the wedding arrives. You stand in a lavish church, adorned in silk and diamonds, Lord Kensington waiting at the altar. As the organ plays, you catch your breath--at the back of the church stands Samuel, dusty from travel, eyes locked on yours. Gasps ripple through the pews. Your cheeks flush; your mind races. Will you abandon everything at the last second or go through with the wedding?',
        choices: {
          'story-10012004-c5': {
            text: 'Flee the altar and run into Samuel\'s arms',
          },
          'story-10012004-c6': {
            text: 'Steady yourself and marry Lord Kensington as planned',
          },
        },
      },
      'story-10012004-4': {
        title: 'Cottage of Our Own',
        narration: 'You squeeze Samuel\'s hand. "Let\'s go." Under the cloak of darkness, you both mount a waiting horse and ride hard through the night. By dawn, you are well beyond the reach of your father\'s men. Eventually, in a small village chapel, you and Samuel marry with only the trees as witnesses. Your family disowns you, but in a cozy cottage far away, you wake each morning in the arms of the one you love. Penniless but happy, you build a humble life together--proof that love was worth every risk.',
        choices: {
        },
      },
      'story-10012004-5': {
        title: 'Separated by Dawn',
        narration: 'You whisper to Samuel to wait until dawn--it feels safer. Reluctantly, he agrees. But by morning, your absence has been noticed. Guards swarm Samuel\'s hiding spot and he is dragged away as you watch in horror from your window. Your father\'s eyes are cold as he forces you into the carriage to the church. You later learn Samuel was sent abroad, pressed into military service. You marry Lord Kensington as commanded, tears glistening behind your veil. In a lonely mansion, you live out years with a courteous but distant husband, your heart forever aching for the love that was torn from you.',
        choices: {
        },
      },
      'story-10012004-6': {
        title: 'Defiant Escape',
        narration: 'Your throat tightens. As the minister asks for your vows, you lock eyes with Samuel. In that moment, you make your choice. Lifting your skirts, you turn and run down the aisle. The congregation erupts in scandalized gasps. Samuel meets you halfway and grasps your hand. Together, you dash from the church, leaving Lord Kensington and your stunned family behind. You flee on horseback and eventually marry in a quiet seaside town. Though society shuns you, you live simply and happily with Samuel, the love in your hearts richer than any title or fortune left behind.',
        choices: {
        },
      },
      'story-10012004-7': {
        title: 'The Duchess\'s Regret',
        narration: 'You bite back your tears and force a smile as you utter the words that bind you to Lord Kensington. Samuel\'s anguished face fades from view as you commit to a life not of your choosing. In the years that follow, you become a perfect duchess--hosting lavish parties, managing estates--but each night you retreat to your bed alone, longing for a gentle laugh and warm embrace you will never feel again. You keep Samuel\'s old letters in a hidden box and sometimes reread them by candlelight, tears staining the yellowed pages, wondering what joy might have been if you had chosen differently.',
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
