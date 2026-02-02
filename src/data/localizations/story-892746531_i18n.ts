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

export const story_892746531StoryTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English
  en: {
    title: 'The Last Letter',
    description: "When you discover a mysterious love letter in your late grandmother's attic, it leads you to Paris and a decades-old romance that was never resolved. Can you find the author and finish what your grandmother started, while navigating your own unexpected connection with her grandson?",
    author: 'Elena Rousseau',
    nodes: {
      'story-892746531': {
        title: 'The Attic Discovery',
        narration: "Dust particles dance in the afternoon light streaming through the attic window. You are sorting through your grandmother's belongings when a faded envelope slips from an old book. The letter inside is written in French, dated 1962, and signed only with a 'J.' Your grandmother never mentioned a romance in Paris, never spoke of anyone named J. But the words are unmistakably passionate, promising to wait forever at Café de Flore.",
        choices: {
          'story-892746531-c1': { text: 'Research the café and book a flight to Paris', description: 'Follow the mystery to its source' },
          'story-892746531-c2': { text: "Ask your family about grandmother's past first", description: 'Gather information before acting' },
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Последнее письмо',
    description: 'Когда вы находите загадочное любовное письмо на чердаке покойной бабушки, оно ведет вас в Париж и к роману десятилетней давности, который так и не получил развязки. Сможете ли вы найти автора и завершить то, что начала ваша бабушка, одновременно справляясь с неожиданной связью с ее внуком?',
    author: 'Елена Руссо',
    nodes: {
      'story-892746531': {
        title: 'Открытие на чердаке',
        narration: 'Частицы пыли танцуют в лучах полуденного солнца, проникающего через чердачное окно. Вы разбираете вещи бабушки, когда из старой книги выскальзывает выцветший конверт. Письмо внутри написано по-французски, датировано 1962 годом и подписано лишь буквой «Ж». Бабушка никогда не упоминала о романе в Париже, никогда не говорила о ком-то по имени Ж. Но слова несомненно страстные, обещание ждать вечно в кафе «Де Флор».',
        choices: {
          'story-892746531-c1': { text: 'Исследовать кафе и забронировать перелет в Париж', description: 'Следовать за тайной к её источнику' },
          'story-892746531-c2': { text: 'Сначала расспросить семью о прошлом бабушки', description: 'Собрать информацию перед действием' },
        },
      },
    },
  },

  // Español
  es: {
    title: 'La Última Carta',
    description: 'Cuando descubres una misteriosa carta de amor en el desván de tu difunta abuela, ésta te lleva a París y a un romance de décadas atrás que nunca se resolvió. ¿Podrás encontrar al autor y terminar lo que tu abuela comenzó, mientras navegas tu propia conexión inesperada con su nieto?',
    author: 'Elena Rousseau',
    nodes: {
      'story-892746531': {
        title: 'El Descubrimiento en el Desván',
        narration: 'Las partículas de polvo bailan en la luz de la tarde que se cuela por la ventana del desván. Estás ordenando las pertenencias de tu abuela cuando un sobre descolorido resbala de un viejo libro. La carta interior está escrita en francés, fechada en 1962, y firmada solo con una "J". Tu abuela nunca mencionó un romance en París, nunca habló de nadie llamado J.',
        choices: {
          'story-892746531-c1': { text: 'Investigar el café y reservar un vuelo a París', description: 'Seguir el misterio hasta su origen' },
          'story-892746531-c2': { text: 'Preguntar a tu familia sobre el pasado de la abuela primero', description: 'Reunir información antes de actuar' },
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Der Letzte Brief',
    description: 'Als du einen mysteriösen Liebesbrief auf dem Dachboden deiner verstorbenen Großmutter entdeckst, führt er dich nach Paris und zu einer jahrzehntealten Romanze, die nie aufgelöst wurde. Kannst du den Autor finden und beenden, was deine Großmutter begonnen hat?',
    author: 'Elena Rousseau',
    nodes: {
      'story-892746531': {
        title: 'Die Dachbodenentdeckung',
        narration: 'Staubteilchen tanzen im Nachmittagslicht, das durch das Dachfenster fällt. Du sortierst die Habseligkeiten deiner Großmutter, als ein verblasster Umschlag aus einem alten Buch rutscht. Der Brief darin ist auf Französisch verfasst, datiert auf 1962, und nur mit einem »J.« unterschrieben.',
        choices: {
          'story-892746531-c1': { text: 'Das Café recherchieren und einen Flug nach Paris buchen', description: 'Dem Geheimnis bis zur Quelle folgen' },
          'story-892746531-c2': { text: 'Zuerst deine Familie nach Großmutters Vergangenheit fragen', description: 'Informationen sammeln, bevor du handelst' },
        },
      },
    },
  },

  // Français
  fr: {
    title: 'La Dernière Lettre',
    description: "Lorsque vous découvrez une mystérieuse lettre d'amour dans le grenier de votre défunte grand-mère, elle vous conduit à Paris et vers une romance de plusieurs décennies qui n'a jamais été résolue. Pourrez-vous trouver l'auteur et terminer ce que votre grand-mère a commencé?",
    author: 'Elena Rousseau',
    nodes: {
      'story-892746531': {
        title: 'La Découverte au Grenier',
        narration: "Les particules de poussière dansent dans la lumière de l'après-midi qui filtre par la fenêtre du grenier. Vous triez les affaires de votre grand-mère quand une enveloppe décolorée glisse d'un vieux livre. La lettre à l'intérieur est écrite en français, datée de 1962, et signée seulement d'un « J ».",
        choices: {
          'story-892746531-c1': { text: 'Rechercher le café et réserver un vol pour Paris', description: "Suivre le mystère jusqu'à sa source" },
          'story-892746531-c2': { text: "Demander à votre famille le passé de grand-mère d'abord", description: 'Rassembler des informations avant de agir' },
        },
      },
    },
  },

  // Português
  pt: {
    title: 'A Última Carta',
    description: 'Quando você descobre uma misteriosa carta de amor no sótão de sua falecida avó, ela a leva a Paris e a um romance de décadas que nunca foi resolvido. Você consegue encontrar o autor e terminar o que sua avó começou?',
    author: 'Elena Rousseau',
    nodes: {
      'story-892746531': {
        title: 'A Descoberta no Sótão',
        narration: "Partículas de poeira dançam na luz da tarde que entra pela janela do sótão. Você está organizando as pertences de sua avó quando um envelope desbotado escorrega de um livro antigo. A carta dentro está escrita em francês, datada de 1962, e assinada apenas com um 'J'.",
        choices: {
          'story-892746531-c1': { text: 'Pesquisar o café e reservar um voo para Paris', description: 'Seguir o mistério até a fonte' },
          'story-892746531-c2': { text: 'Perguntar à sua família sobre o passado da avó primeiro', description: 'Reunir informações antes de agir' },
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '最後の手紙',
    description: '亡き祖母の屋根裏部屋で見つけた謎のラブレターが、あなたをパリへと導く。それは60年以上も決着のつかなかった恋物語だった。手紙の作者を見つけ、祖母が始めたことを終わらせることができるだろうか？',
    author: 'エレナ・ルソー',
    nodes: {
      'story-892746531': {
        title: '屋根裏での発見',
        narration: '午後の光が屋根裏の窓から差し込み、舞う埃の粒子が輝いている。祖母の遺品を整理していると、古い本から色あせた封筒が落ちてくる。中の手紙はフランス語で書かれており、日付は1962年、署名は「J」のみ。',
        choices: {
          'story-892746531-c1': { text: 'カフェを調べてパリ行きの飛行機を予約する', description: '謎の根源を追う' },
          'story-892746531-c2': { text: 'まず家族に祖母の過去を尋ねる', description: '行動する前に情報を集める' },
        },
      },
    },
  },

  // 中文
  zh: {
    title: '最后一封信',
    description: '当你在已故祖母的阁楼上发现一封神秘的情书时，它将你带到巴黎，引向一段从未了结的数十年前的爱情。你能否找到信的主人，完成祖母未竟的故事？',
    author: '埃琳娜·卢梭',
    nodes: {
      'story-892746531': {
        title: '阁楼上的发现',
        narration: '午后的阳光透过阁楼的窗户洒落，灰尘颗粒在光束中翩翩起舞。你正在整理祖母的遗物，一个褪色的信封从一本旧书中滑落。信是用法语写的，日期是1962年，署名只有一个「J」。',
        choices: {
          'story-892746531-c1': { text: '研究这家咖啡馆并预订飞往巴黎的机票', description: '追踪谜题至源头' },
          'story-892746531-c2': { text: '先向家人询问祖母的过去', description: '行动前收集信息' },
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '마지막 편지',
    description: '돌아가신 할머니의 다락방에서 발견한 신비로운 러브레터가 나를 파리로 인도한다. 60년이 넘도록 끝맺지 못한 사랑 이야기. 편지의 주인을 찾아 할머니가 시작한 것을 끝낼 수 있을까?',
    author: '엘레나 루소',
    nodes: {
      'story-892746531': {
        title: '다락방 발견',
        narration: '오후의 햇살이 다락방 창문으로 스며들어 먼지 입자들이 춤을 춘다. 할머니의 유품을 정리하던 중, 낡은 책에서 빛바랜 봉투 하나가 떨어진다. 안의 편지는 프랑스어로 쓰여 있었고, 날짜는 1962년, 서명은 J 하나뿐.',
        choices: {
          'story-892746531-c1': { text: '카페를 조사하고 파리행 비행기를 예약한다', description: '수수께끼의 근원을 쫓는다' },
          'story-892746531-c2': { text: '먼저 가족에게 할머니의 과거를 묻는다', description: '행동하기 전 정보를 수집한다' },
        },
      },
    },
  },

  // Українська
  uk: {
    title: 'Останній лист',
    description: 'Коли ви знаходите загадковий любовний лист на горищі померлої бабусі, він веде вас до Парижа та до роману десятилітньої давнини, який так і не отримав розв\'язки. Чи зможете ви знайти автора та завершити те, що розпочала ваша бабуся?',
    author: 'Елена Руссо',
    nodes: {
      'story-892746531': {
        title: 'Відкриття на горищі',
        narration: 'Частинки пилу танцюють у променях полуденного сонця, що проникає через горищне вікно. Ви розбираєте речі бабусі, коли зі старої книги вислизає вицвілий конверт. Лист всередині написано французькою, датовано 1962 роком і підписано лише літерою «Ж».',
        choices: {
          'story-892746531-c1': { text: 'Дослідити кафе та забронювати переліт до Парижа', description: 'Слідувати за таємницею до її джерела' },
          'story-892746531-c2': { text: 'Спочатку розпитати родину про минуле бабусі', description: 'Зібрати інформацію перед дією' },
        },
      },
    },
  },

};
