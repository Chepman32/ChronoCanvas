import { Language } from '../../localization/translations';

interface StoryTranslations {
  title: string;
  description: string;
  author: string;
  nodes: {
    [nodeId: string]: {
      title: string;
      narration: string;
      choices: { [choiceId: string]: { text: string; description?: string } };
    };
  };
}

export const neonNightsStoryTranslations: Record<Language, StoryTranslations> =
  {
    en: {
      title: 'Neon Nights',
      description:
        'Navigate the cyberpunk streets of Neo Tokyo in this thrilling sci-fi adventure.',
      author: 'Marcus Chen',
      nodes: {},
    },

    ru: {
      title: 'Неоновые ночи',
      description:
        'Путешествуйте по киберпанк-улицам Нео-Токио в этом захватывающем научно-фантастическом приключении.',
      author: 'Маркус Чен',
      nodes: {},
    },

    es: {
      title: 'Noches de neón',
      description:
        'Navega por las calles cyberpunk de Neo Tokio en esta emocionante aventura de ciencia ficción.',
      author: 'Marcus Chen',
      nodes: {},
    },

    de: {
      title: 'Neon-Nächte',
      description:
        'Navigiere durch die Cyberpunk-Straßen von Neo-Tokio in diesem spannenden Science-Fiction-Abenteuer.',
      author: 'Marcus Chen',
      nodes: {},
    },

    fr: {
      title: 'Nuits néon',
      description:
        'Naviguez dans les rues cyberpunk de Neo Tokyo dans cette aventure de science-fiction palpitante.',
      author: 'Marcus Chen',
      nodes: {},
    },

    pt: {
      title: 'Noites de néon',
      description:
        'Navegue pelas ruas cyberpunk de Neo Tóquio nesta emocionante aventura de ficção científica.',
      author: 'Marcus Chen',
      nodes: {},
    },

    ja: {
      title: 'ネオンナイト',
      description:
        'ネオ東京のサイバーパンクな街を舞台にしたスリリングなSFアドベンチャー。',
      author: 'マーカス・チェン',
      nodes: {},
    },

    zh: {
      title: '霓虹之夜',
      description: '在这个激动人心的科幻冒险中穿越新东京的赛博朋克街道。',
      author: '马库斯·陈',
      nodes: {},
    },

    ko: {
      title: '네온 나이트',
      description:
        '이 스릴 넘치는 SF 어드벤처에서 네오 도쿄의 사이버펑크 거리를 탐험하세요.',
      author: '마커스 첸',
      nodes: {},
    },

    uk: {
      title: 'Неонові ночі',
      description:
        'Мандруйте кіберпанк-вулицями Нео-Токіо в цій захопливій науково-фантастичній пригоді.',
      author: 'Маркус Чен',
      nodes: {},
    },
  };
