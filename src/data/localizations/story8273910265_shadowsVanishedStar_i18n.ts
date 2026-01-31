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

export const story8273910265Translations: Partial<Record<Language, StoryTranslations>> = {
  en: {
    title: 'Shadows of the Vanished Star',
    description:
      'A noir mystery in a rain-soaked city where a missing starlet, a cryptic clue, and shadowy conspirators converge. Navigate betrayal, corruption, and elusive hope to uncover the truth.',
    author: 'Detective Jack Reynolds',
    nodes: {
      'story-8273910265-1': {
        title: 'The Missing Starlet',
        narration:
          'The rain beats against your office window as you stare at the blinking neon outside. A shadow crosses the threshold and a woman in a soaked trench coat steps in, her eyes pleading as she produces a star-shaped ornament and whispers about a missing heiress. The scent of damp pavement and old paper fills the room as you weigh the danger in her words. The city hums with secrets and you sense this is only the beginning.',
        choices: {
          'story-8273910265-c1': {
            text: 'Take the case and head to the crime scene',
            description: 'Duty calls, even in the rain.',
          },
          'story-8273910265-c2': {
            text: 'Decline and watch from your window',
            description: 'Stay detached, observe what unfolds.',
          },
        },
      },
      'story-8273910265-20': {
        title: 'Justice Served',
        narration:
          'You choose the lawful path. With solid evidence in hand and back-up at your side, you watch as the conspirators are hauled before a judge. The courtroom\'s wooden benches creak as verdicts are read and justice reverberates through marble halls. The heiress is found alive, and you feel a rare sense of closure.',
        choices: {},
      },
    },
  },
};

export default story8273910265Translations;
