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

export const timeLoopStoryTranslations: Record<Language, StoryTranslations> = {
  // English (Original)
  en: {
    title: 'The Time Loop Paradox',
    description:
      'Trapped in a repeating day, you must uncover the mystery and break free from the temporal prison.',
    author: 'Dr. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Morning Again',
        narration:
          "Your alarm rings at 7:00 AM. Again. This is the 47th time you've woken up to this exact moment. The same sunlight, the same bird chirping outside, the same coffee stain on your ceiling.",
        choices: {
          'tl-c1': { text: 'Check your journal' },
          'tl-c2': { text: 'Rush to the lab immediately' },
        },
      },
      'tl-2': {
        title: 'The Journal',
        narration:
          'Your journal is filled with notes from previous loops. "Day 47: The quantum stabilizer malfunctions at 3:47 PM. Dr. Martinez always spills coffee at 10:23 AM. The security code changes daily but follows a pattern."',
        choices: {
          'tl-c3': { text: 'Study the pattern' },
          'tl-c4': { text: 'Go find Dr. Martinez' },
        },
      },
    },
  },

  // Russian (Русский)
  ru: {
    title: 'Парадокс временной петли',
    description:
      'Оказавшись в ловушке повторяющегося дня, вы должны разгадать тайну и вырваться из темпоральной тюрьмы.',
    author: 'Доктор Сара Чен',
    nodes: {
      'tl-1': {
        title: 'Снова утро',
        narration:
          'Ваш будильник звонит в 7:00 утра. Снова. Это уже 47-й раз, когда вы просыпаетесь в этот самый момент. Тот же солнечный свет, та же птица чирикает за окном, то же кофейное пятно на вашем потолке.',
        choices: {
          'tl-c1': { text: 'Проверить свой дневник' },
          'tl-c2': { text: 'Немедленно поспешить в лабораторию' },
        },
      },
      'tl-2': {
        title: 'Дневник',
        narration:
          'Ваш дневник заполнен записями из предыдущих циклов. "День 47: Квантовый стабилизатор выходит из строя в 15:47. Доктор Мартинес всегда проливает кофе в 10:23 утра. Код безопасности меняется ежедневно, но следует определенной закономерности."',
        choices: {
          'tl-c3': { text: 'Изучить закономерность' },
          'tl-c4': { text: 'Пойти найти доктора Мартинеса' },
        },
      },
    },
  },

  // French (Français)
  fr: {
    title: 'Le Paradoxe de la boucle temporelle',
    description:
      'Piégé dans une journée qui se répète, vous devez découvrir le mystère et vous libérer de cette prison temporelle.',
    author: 'Dr. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Encore le matin',
        narration:
          "Votre réveil sonne à 7h00. Encore. C'est la 47ème fois que vous vous réveillez à ce moment précis. La même lumière du soleil, le même oiseau qui gazouille dehors, la même tache de café sur votre plafond.",
        choices: {
          'tl-c1': { text: 'Consulter votre journal' },
          'tl-c2': { text: 'Se précipiter immédiatement au laboratoire' },
        },
      },
      'tl-2': {
        title: 'Le Journal',
        narration:
          'Votre journal est rempli de notes des boucles précédentes. "Jour 47 : Le stabilisateur quantique dysfonctionne à 15h47. Le Dr Martinez renverse toujours son café à 10h23. Le code de sécurité change chaque jour mais suit un schéma."',
        choices: {
          'tl-c3': { text: 'Étudier le schéma' },
          'tl-c4': { text: 'Aller trouver le Dr Martinez' },
        },
      },
    },
  },

  // Placeholder for other languages
  es: { title: '', description: '', author: '', nodes: {} },
  de: { title: '', description: '', author: '', nodes: {} },
  pt: { title: '', description: '', author: '', nodes: {} },
  ja: { title: '', description: '', author: '', nodes: {} },
  zh: { title: '', description: '', author: '', nodes: {} },
  ko: { title: '', description: '', author: '', nodes: {} },
  uk: { title: '', description: '', author: '', nodes: {} },
};
