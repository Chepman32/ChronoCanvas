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

export const deepSeaStoryTranslations: Record<Language, StoryTranslations> = {
  // English (Original)
  en: {
    title: 'Abyssal Secrets',
    description:
      'Dive into the deepest ocean trench where an ancient civilization awaits discovery.',
    author: 'Captain Marina Torres',
    nodes: {
      'ds-1': {
        title: 'The Descent',
        narration:
          "Your submarine descends into the Mariana Trench. At 10,000 meters, your sonar detects something impossible - geometric structures that shouldn't exist.",
        choices: {
          'ds-c1': {
            text: 'Investigate the structures',
          },
          'ds-c2': {
            text: 'Report to surface first',
          },
        },
      },
      'ds-2': {
        title: 'Ancient Ruins',
        narration:
          'Massive stone pillars covered in bioluminescent algae rise from the ocean floor. They form a perfect circle around what appears to be a temple entrance.',
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

  // Russian (Русский)
  ru: {
    title: 'Тайны бездны',
    description:
      'Погрузитесь в глубочайшую океанскую впадину, где вас ждёт открытие древней цивилизации.',
    author: 'Капитан Марина Торрес',
    nodes: {
      'ds-1': {
        title: 'Погружение',
        narration:
          'Ваша подводная лодка опускается в Марианскую впадину. На глубине 10 000 метров сонар обнаруживает нечто невозможное — геометрические структуры, которых не должно существовать.',
        choices: {
          'ds-c1': {
            text: 'Исследовать структуры',
          },
          'ds-c2': {
            text: 'Сначала доложить на поверхность',
          },
        },
      },
      'ds-2': {
        title: 'Древние руины',
        narration:
          'Массивные каменные колонны, покрытые биолюминесцентными водорослями, возвышаются со дна океана. Они образуют идеальный круг вокруг того, что похоже на вход в храм.',
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

  // Spanish (Español)
  es: {
    title: 'Secretos abisales',
    description:
      'Sumérgete en la fosa oceánica más profunda donde una civilización antigua aguarda ser descubierta.',
    author: 'Capitana Marina Torres',
    nodes: {
      'ds-1': {
        title: 'El descenso',
        narration:
          'Tu submarino desciende hacia la Fosa de las Marianas. A 10.000 metros, tu sonar detecta algo imposible: estructuras geométricas que no deberían existir.',
        choices: {
          'ds-c1': {
            text: 'Investigar las estructuras',
          },
          'ds-c2': {
            text: 'Informar primero a la superficie',
          },
        },
      },
      'ds-2': {
        title: 'Ruinas antiguas',
        narration:
          'Enormes pilares de piedra cubiertos de algas bioluminiscentes se elevan desde el fondo del océano. Forman un círculo perfecto alrededor de lo que parece ser la entrada de un templo.',
        choices: {
          'ds-c3': {
            text: 'Entrar al templo',
          },
          'ds-c4': {
            text: 'Rodear el perímetro',
          },
        },
      },
    },
  },

  // German (Deutsch)
  de: {
    title: 'Geheimnisse der Tiefe',
    description:
      'Tauche in den tiefsten Ozeangraben, wo eine uralte Zivilisation auf ihre Entdeckung wartet.',
    author: 'Kapitänin Marina Torres',
    nodes: {
      'ds-1': {
        title: 'Der Abstieg',
        narration:
          'Dein U-Boot sinkt in den Marianengraben hinab. In 10.000 Metern Tiefe entdeckt dein Sonar etwas Unmögliches – geometrische Strukturen, die nicht existieren sollten.',
        choices: {
          'ds-c1': {
            text: 'Die Strukturen untersuchen',
          },
          'ds-c2': {
            text: 'Zuerst an die Oberfläche melden',
          },
        },
      },
      'ds-2': {
        title: 'Antike Ruinen',
        narration:
          'Massive Steinsäulen, bedeckt mit biolumineszierenden Algen, erheben sich vom Meeresboden. Sie bilden einen perfekten Kreis um das, was wie ein Tempeleingang aussieht.',
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

  // French (Français)
  fr: {
    title: 'Secrets abyssaux',
    description:
      "Plongez dans la fosse océanique la plus profonde où une civilisation ancienne attend d'être découverte.",
    author: 'Capitaine Marina Torres',
    nodes: {
      'ds-1': {
        title: 'La descente',
        narration:
          "Votre sous-marin descend dans la fosse des Mariannes. À 10 000 mètres, votre sonar détecte quelque chose d'impossible - des structures géométriques qui ne devraient pas exister.",
        choices: {
          'ds-c1': {
            text: 'Enquêter sur les structures',
          },
          'ds-c2': {
            text: "Faire d'abord un rapport en surface",
          },
        },
      },
      'ds-2': {
        title: 'Ruines antiques',
        narration:
          "D'énormes piliers de pierre couverts d'algues bioluminescentes s'élèvent du fond de l'océan. Ils forment un cercle parfait autour de ce qui semble être l'entrée d'un temple.",
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

  // Portuguese (Português)
  pt: {
    title: 'Segredos abissais',
    description:
      'Mergulhe na fossa oceânica mais profunda onde uma civilização antiga aguarda ser descoberta.',
    author: 'Capitã Marina Torres',
    nodes: {
      'ds-1': {
        title: 'A descida',
        narration:
          'Seu submarino desce para a Fossa das Marianas. A 10.000 metros, seu sonar detecta algo impossível - estruturas geométricas que não deveriam existir.',
        choices: {
          'ds-c1': {
            text: 'Investigar as estruturas',
          },
          'ds-c2': {
            text: 'Reportar à superfície primeiro',
          },
        },
      },
      'ds-2': {
        title: 'Ruínas antigas',
        narration:
          'Pilares de pedra massivos cobertos de algas bioluminescentes erguem-se do fundo do oceano. Eles formam um círculo perfeito ao redor do que parece ser a entrada de um templo.',
        choices: {
          'ds-c3': {
            text: 'Entrar no templo',
          },
          'ds-c4': {
            text: 'Circular ao redor',
          },
        },
      },
    },
  },

  // Japanese (日本語)
  ja: {
    title: '深淵の秘密',
    description: '古代文明が発見を待つ、最も深い海溝に潜りましょう。',
    author: 'マリナ・トーレス船長',
    nodes: {
      'ds-1': {
        title: '降下',
        narration:
          'あなたの潜水艦はマリアナ海溝に降下しています。深度10,000メートルで、ソナーが不可能なものを検出します——存在するはずのない幾何学的構造物です。',
        choices: {
          'ds-c1': {
            text: '構造物を調査する',
          },
          'ds-c2': {
            text: '先に水面に報告する',
          },
        },
      },
      'ds-2': {
        title: '古代遺跡',
        narration:
          '生物発光する藻類に覆われた巨大な石柱が海底から立ち上がっています。それらは神殿の入口のように見えるものの周りに完璧な円を形成しています。',
        choices: {
          'ds-c3': {
            text: '神殿に入る',
          },
          'ds-c4': {
            text: '周囲を回る',
          },
        },
      },
    },
  },

  // Chinese (中文)
  zh: {
    title: '深渊秘密',
    description: '潜入最深的海沟，那里有一个古老文明等待被发现。',
    author: '玛丽娜·托雷斯船长',
    nodes: {
      'ds-1': {
        title: '下潜',
        narration:
          '你的潜艇正在下潜到马里亚纳海沟。在10,000米深处，你的声纳探测到了不可能存在的东西——不应该存在的几何结构。',
        choices: {
          'ds-c1': {
            text: '调查这些结构',
          },
          'ds-c2': {
            text: '先向水面报告',
          },
        },
      },
      'ds-2': {
        title: '古代遗迹',
        narration:
          '覆盖着生物发光藻类的巨大石柱从海底升起。它们在看似神庙入口的周围形成了一个完美的圆圈。',
        choices: {
          'ds-c3': {
            text: '进入神庙',
          },
          'ds-c4': {
            text: '绕圈查看',
          },
        },
      },
    },
  },

  // Korean (한국어)
  ko: {
    title: '심연의 비밀',
    description: '고대 문명이 발견을 기다리는 가장 깊은 해구로 잠수하세요.',
    author: '마리나 토레스 선장',
    nodes: {
      'ds-1': {
        title: '하강',
        narration:
          '당신의 잠수함이 마리아나 해구로 하강하고 있습니다. 10,000미터 깊이에서 소나가 불가능한 것을 감지합니다 - 존재해서는 안 되는 기하학적 구조물입니다.',
        choices: {
          'ds-c1': {
            text: '구조물 조사하기',
          },
          'ds-c2': {
            text: '먼저 수면에 보고하기',
          },
        },
      },
      'ds-2': {
        title: '고대 유적',
        narration:
          '생물발광 조류로 덮인 거대한 돌기둥이 해저에서 솟아오릅니다. 그것들은 신전 입구로 보이는 것 주위에 완벽한 원을 형성하고 있습니다.',
        choices: {
          'ds-c3': {
            text: '신전에 들어가기',
          },
          'ds-c4': {
            text: '주위를 돌아보기',
          },
        },
      },
    },
  },

  // Ukrainian (Українська)
  uk: {
    title: 'Таємниці безодні',
    description:
      'Зануртеся в найглибшу океанську западину, де на відкриття чекає стародавня цивілізація.',
    author: 'Капітан Марина Торрес',
    nodes: {
      'ds-1': {
        title: 'Занурення',
        narration:
          'Ваш підводний човен опускається в Маріанську западину. На глибині 10 000 метрів сонар виявляє щось неможливе — геометричні структури, яких не повинно існувати.',
        choices: {
          'ds-c1': {
            text: 'Дослідити структури',
          },
          'ds-c2': {
            text: 'Спочатку доповісти на поверхню',
          },
        },
      },
      'ds-2': {
        title: 'Стародавні руїни',
        narration:
          "Масивні кам'яні колони, вкриті біолюмінесцентними водоростями, піднімаються з дна океану. Вони утворюють ідеальне коло навколо того, що схоже на вхід до храму.",
        choices: {
          'ds-c3': {
            text: 'Увійти до храму',
          },
          'ds-c4': {
            text: 'Обійти навколо',
          },
        },
      },
    },
  },
};
