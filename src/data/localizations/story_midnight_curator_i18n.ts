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

export const midnightCuratorStoryTranslations: Record<
  Language,
  StoryTranslations
> = {
  en: {
    title: 'The Midnight Curator',
    description:
      'A renowned art curator is found dead in a locked gallery on the eve of the biggest exhibition of her career. As the lead detective, you have until dawn to solve the murder before the press descends and the killer disappears forever.',
    author: 'Detective Marcus Reed',
    nodes: {},
  },

  ru: {
    title: 'Полуночный куратор',
    description:
      'Известный куратор найдена мёртвой в запертой галерее накануне самой важной выставки в её карьере. Как главный детектив, у вас есть время до рассвета, чтобы раскрыть убийство, прежде чем пресса нагрянет, а убийца исчезнет навсегда.',
    author: 'Детектив Маркус Рид',
    nodes: {},
  },

  es: {
    title: 'El curador de medianoche',
    description:
      'Una renombrada curadora de arte es encontrada muerta en una galería cerrada en la víspera de la mayor exposición de su carrera. Como detective principal, tienes hasta el amanecer para resolver el asesinato antes de que llegue la prensa y el asesino desaparezca para siempre.',
    author: 'Detective Marcus Reed',
    nodes: {},
  },

  de: {
    title: 'Der Mitternachtskurator',
    description:
      'Eine renommierte Kunstkuratorin wird tot in einer verschlossenen Galerie am Vorabend der größten Ausstellung ihrer Karriere gefunden. Als leitender Ermittler haben Sie bis zum Morgengrauen Zeit, den Mord aufzuklären, bevor die Presse eintrifft und der Mörder für immer verschwindet.',
    author: 'Detektiv Marcus Reed',
    nodes: {},
  },

  fr: {
    title: 'Le conservateur de minuit',
    description:
      "Une conservatrice d'art renommée est retrouvée morte dans une galerie verrouillée à la veille de la plus grande exposition de sa carrière. En tant que détective principal, vous avez jusqu'à l'aube pour résoudre le meurtre avant que la presse ne débarque et que le tueur ne disparaisse à jamais.",
    author: 'Détective Marcus Reed',
    nodes: {},
  },

  pt: {
    title: 'O curador da meia-noite',
    description:
      'Uma renomada curadora de arte é encontrada morta em uma galeria trancada na véspera da maior exposição de sua carreira. Como detetive principal, você tem até o amanhecer para resolver o assassinato antes que a imprensa chegue e o assassino desapareça para sempre.',
    author: 'Detetive Marcus Reed',
    nodes: {},
  },

  ja: {
    title: '真夜中のキュレーター',
    description:
      '著名なアートキュレーターが、キャリア最大の展覧会の前夜に施錠されたギャラリーで死体で発見される。主任刑事として、報道陣が押し寄せ、殺人犯が永遠に姿を消す前に、夜明けまでに殺人事件を解決しなければならない。',
    author: 'マーカス・リード刑事',
    nodes: {},
  },

  zh: {
    title: '午夜策展人',
    description:
      '一位著名的艺术策展人在其职业生涯最大展览前夕被发现死在一个上锁的画廊里。作为首席侦探，你必须在黎明前破案，否则媒体将蜂拥而至，凶手将永远消失。',
    author: '马库斯·里德侦探',
    nodes: {},
  },

  ko: {
    title: '자정의 큐레이터',
    description:
      '저명한 미술 큐레이터가 경력 최대 전시회 전날 밤 잠긴 갤러리에서 시체로 발견됩니다. 수석 형사로서 언론이 몰려들고 살인범이 영원히 사라지기 전에 새벽까지 살인 사건을 해결해야 합니다.',
    author: '마커스 리드 형사',
    nodes: {},
  },

  uk: {
    title: 'Опівнічний куратор',
    description:
      "Відома кураторка мистецтва знайдена мертвою в зачиненій галереї напередодні найбільшої виставки в її кар'єрі. Як головний детектив, у вас є час до світанку, щоб розкрити вбивство, перш ніж з'явиться преса, а вбивця зникне назавжди.",
    author: 'Детектив Маркус Рід',
    nodes: {},
  },
};
