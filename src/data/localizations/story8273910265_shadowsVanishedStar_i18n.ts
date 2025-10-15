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

export const shadowsVanishedStarStoryTranslations: Record<
  Language,
  StoryTranslations
> = {
  // English (Original)
  en: {
    title: 'Shadows of the Vanished Star',
    description:
      'When a tech heiress vanishes and only a cryptic ornament remains, private detective Sam Mercer is drawn into a labyrinth of rain-soaked alleys, secret libraries and shadowed docks. Every clue raises new questions and every decision pulls him deeper into a conspiracy that reaches the city\'s highest towers. Your choices will determine whether justice shines through or the truth disappears into darkness.',
    author: 'Daphne Sawyer',
    nodes: {
      'story-8273910265-1': {
        title: 'Midnight Client',
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
