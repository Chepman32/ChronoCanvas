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

export const story_4StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Abyssal Secrets',
    description: 'Dive into the deepest ocean trench where an ancient civilization awaits discovery.',
    author: 'Captain Marina Torres',
    nodes: {
      'ds-2': {
        title: 'Ancient Ruins',
        narration: 'Massive stone pillars covered in bioluminescent algae rise from the ocean floor. They form a perfect circle around what appears to be a temple entrance.',
        choices: {
          'ds-c3': {
            text: 'Enter the temple',
          },
          'ds-c4': {
            text: 'Circle around',
          },
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Тайны бездны',
    description: 'Погрузитесь в глубочайшую океанскую впадину, где ждёт открытия древняя цивилизация.',
    author: 'Капитан Марина Торрес',
    nodes: {
      'ds-2': {
        title: 'Древние руины',
        narration: 'Массивные каменные колонны, покрытые биолюминесцентными водорослями, возвышаются со дна океана. Они образуют идеальный круг вокруг того, что выглядит как вход в храм.',
        choices: {
          'ds-c3': {
            text: 'Войти в храм',
          },
          'ds-c4': {
            text: 'Обойти вокруг',
          },
        },
      },
    },
  },

  // Español
  es: {
    title: 'La Paradoja del Bucle Temporal',
    description: 'Atrapado en un día que se repite, debes descubrir el misterio y liberarte de la prisión temporal.',
    author: 'Dr. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Mañana Otra Vez',
        narration: 'Tu alarma suena a las 7:00 AM. Otra vez. Esta es la vez número 47 que despiertas en este momento exacto. La misma luz del sol, el mismo pájaro cantando afuera, la misma mancha de café en tu techo.',
        choices: {
          'tl-c1': {
            text: 'Revisar tu diario',
          },
          'tl-c2': {
            text: 'Correr al laboratorio inmediatamente',
          },
        },
      },
      'tl-2': {
        title: 'El Diario',
        narration: 'Tu diario está lleno de notas de bucles anteriores. "Día 47: El estabilizador cuántico falla a las 3:47 PM. La Dra. Martínez siempre derrama café a las 10:23 AM. El código de seguridad cambia diariamente pero sigue un patrón."',
        choices: {
          'tl-c3': {
            text: 'Estudiar el patrón',
          },
          'tl-c4': {
            text: 'Ir a buscar a la Dra. Martínez',
          },
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Geheimnisse der Tiefe',
    description: 'Tauchen Sie in den tiefsten Ozeangraben, wo eine alte Zivilisation auf ihre Entdeckung wartet.',
    author: 'Kapitän Marina Torres',
    nodes: {
      'ds-2': {
        title: 'Alte Ruinen',
        narration: 'Massive Steinsäulen, bedeckt mit biolumineszierenden Algen, ragen vom Meeresboden empor. Sie bilden einen perfekten Kreis um das, was wie ein Tempeleingang aussieht.',
        choices: {
          'ds-c3': {
            text: 'Den Tempel betreten',
          },
          'ds-c4': {
            text: 'Herumgehen',
          },
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Secrets abyssaux',
    description: 'Plongez dans la fosse océanique la plus profonde où une civilisation ancienne attend d\'être découverte.',
    author: 'Capitaine Marina Torres',
    nodes: {
      'ds-2': {
        title: 'Ruines anciennes',
        narration: 'D\'immenses piliers de pierre couverts d\'algues bioluminescentes s\'élèvent du fond de l\'océan. Ils forment un cercle parfait autour de ce qui semble être l\'entrée d\'un temple.',
        choices: {
          'ds-c3': {
            text: 'Entrer dans le temple',
          },
          'ds-c4': {
            text: 'Faire le tour',
          },
        },
      },
    },
  },

  // Português
  pt: {
    title: 'Segredos Abissais',
    description: 'Mergulhe na fossa oceânica mais profunda onde uma civilização antiga aguarda descoberta.',
    author: 'Capitã Marina Torres',
    nodes: {
      'ds-2': {
        title: 'Ruínas Antigas',
        narration: 'Pilares de pedra maciços cobertos com algas bioluminescentes erguem-se do fundo do oceano. Eles formam um círculo perfeito ao redor do que parece ser uma entrada de templo.',
        choices: {
          'ds-c3': {
            text: 'Entrar no templo',
          },
          'ds-c4': {
            text: 'Dar a volta',
          },
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '深淵の秘密',
    description: '古代文明の発見を待つ、最深の海溝に潜りましょう。',
    author: 'マリナ・トーレス船長',
    nodes: {
      'ds-2': {
        title: '古代遺跡',
        narration: '生物発光藻類に覆われた巨大な石柱が海底から立ち上がっている。それらは神殿の入り口と思われるものの周りに完璧な円を形成している。',
        choices: {
          'ds-c3': {
            text: '神殿に入る',
          },
          'ds-c4': {
            text: '周りを回る',
          },
        },
      },
    },
  },

  // 中文
  zh: {
    title: '深渊秘密',
    description: '潜入最深的海沟,那里有一个古老文明等待被发现。',
    author: '玛丽娜·托雷斯船长',
    nodes: {
      'ds-2': {
        title: '古代遗迹',
        narration: '覆盖着生物发光藻类的巨大石柱从海底升起。它们围绕着看起来像是神庙入口的地方形成了一个完美的圆圈。',
        choices: {
          'ds-c3': {
            text: '进入神庙',
          },
          'ds-c4': {
            text: '绕圈',
          },
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '심연의 비밀',
    description: '고대 문명이 발견을 기다리는 가장 깊은 해구로 잠수하세요.',
    author: '마리나 토레스 선장',
    nodes: {
      'ds-2': {
        title: '고대 유적',
        narration: '생물 발광 조류로 덮인 거대한 돌기둥이 해저에서 솟아올라 있습니다. 그것들은 신전 입구로 보이는 것 주위에 완벽한 원을 형성하고 있습니다.',
        choices: {
          'ds-c3': {
            text: '신전에 들어간다',
          },
          'ds-c4': {
            text: '주위를 돈다',
          },
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
