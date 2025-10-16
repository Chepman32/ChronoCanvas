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

export const story_10012005StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Murder at the Mansion',
    description: 'A storm-trapped manor, a dead aristocrat, and a house full of secrets. As Detective Inspector Grey, you must unravel betrayal before the killer walks free.',
    author: 'Inspector Greyson Ward',
    nodes: {
      'story-10012005-1': {
        title: 'Stormbound Arrival',
        narration: 'The storm rages outside as you step into the opulent entry hall of Blackwood Manor. Lord Blackwood lies dead in his study, and the household is in an uproar. You are Detective Inspector Grey, called to investigate. Lightning flashes, illuminating stern family portraits on the walls. You have two leads to begin with: examine the crime scene for physical clues, or gather the family and staff for initial questioning.',
        choices: {
          'story-10012005-c1': {
            text: 'Inspect Lord Blackwood\'s study for clues',
          },
          'story-10012005-c2': {
            text: 'Interview the widow and servants first',
          },
        },
      },
      'story-10012005-2': {
        title: 'Clues in the Study',
        narration: 'You enter the dimly lit study, the smell of spilt brandy in the air. Lord Blackwood\'s body slumps over his desk. Scanning the scene, you note a shattered glass and a faint scent of bitter almonds--cyanide, perhaps. On the floor by his hand, a monogrammed handkerchief with an ornate "C". Lady Blackwood\'s initial. The wall safe behind a painting is ajar, some contents missing. Each clue paints a suspect: Lady Catherine Blackwood or John the groundskeeper (who has access to gardening poisons). It is time to act on your deductions.',
        choices: {
          'story-10012005-c3': {
            text: 'Accuse Lady Blackwood, confronting her with the evidence',
          },
          'story-10012005-c4': {
            text: 'Arrest Groundskeeper John, suspecting he used poison from the greenhouse',
          },
        },
      },
      'story-10012005-3': {
        title: 'Parlor Questioning',
        narration: 'You gather everyone in the parlor--Lady Blackwood pale and composed in black lace, and the anxious staff. Lady Blackwood claims she retired early and heard nothing, though her hands tremble. The butler interjects that he overheard Lord Blackwood quarreling with Groundskeeper John that afternoon about unpaid wages. John protests his innocence, saying he was tending the greenhouse all evening. Two narratives emerge: one implicating John\'s anger, another hinting at Lady Blackwood\'s nervous demeanor.',
        choices: {
          'story-10012005-c5': {
            text: 'Trust the butler\'s testimony and accuse Groundskeeper John',
          },
          'story-10012005-c6': {
            text: 'Press Lady Blackwood, suspecting her despite her alibi',
          },
        },
      },
      'story-10012005-4': {
        title: 'Justice Served',
        narration: 'After gathering everyone in the grand hall, you announce your conclusion: Lady Blackwood is the murderer. She scoffs at first, but you methodically lay out the evidence--her handkerchief in the study, her access to cyanide (from treating Lord Blackwood\'s "illness"), the fact that only she could have opened the wall safe without signs of forced entry. Under the weight of proof, Lady Blackwood\'s composure cracks. She tearfully confesses: years of cruelty from her husband drove her to it. You escort her into custody. Justice is served, and as the storm passes, you depart the manor knowing you solved the case correctly.',
        choices: {
        },
      },
      'story-10012005-5': {
        title: 'Wrongful Arrest',
        narration: 'Convinced the groundskeeper\'s dispute and access to poisons mark him as the killer, you have John arrested. The relieved Lady Blackwood thanks you with a trembling smile. The case seems neatly closed. But weeks later, back in London, you receive a letter--the new detective assigned to Blackwood\'s estate found evidence of cyanide purchase traced to Lady Blackwood. By the time authorities went to question her, she had vanished overseas with her late husband\'s jewels. You realize with dread that you jailed an innocent man while the true murderer walked free. The mistake haunts your reputation and conscience.',
        choices: {
        },
      },
      'story-10012005-6': {
        title: 'Murderer Escapes',
        narration: 'You place Groundskeeper John in handcuffs, persuaded by the butler\'s account of his anger. John protests vehemently as he is led away. Lady Blackwood lets out a long sigh of relief. The case seems closed. However, in the following days, doubts niggle at you--there was scant hard evidence. Some time later, you hear Lady Blackwood sold the manor and left the country abruptly. It dawns on you that the real culprit may have escaped justice. You realize too late that the widow\'s act fooled everyone, and an innocent man paid the price. It is a failure that will haunt you for years.',
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
