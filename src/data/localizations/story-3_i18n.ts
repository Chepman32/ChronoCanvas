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

export const story_3StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Time Loop Paradox',
    description: 'Trapped in a repeating day, you must uncover the mystery and break free from the temporal prison.',
    author: 'Dr. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Morning Again',
        narration: 'Your alarm rings at 7:00 AM. Again. This is the 47th time you\'ve woken up to this exact moment. The same sunlight, the same bird chirping outside, the same coffee stain on your ceiling.',
        choices: {
          'tl-c1': {
            text: 'Check your journal',
          },
          'tl-c2': {
            text: 'Rush to the lab immediately',
          },
        },
      },
      'tl-2': {
        title: 'The Journal',
        narration: 'Your journal is filled with notes from previous loops. "Day 47: The quantum stabilizer malfunctions at 3:47 PM. Dr. Martinez always spills coffee at 10:23 AM. The security code changes daily but follows a pattern."',
        choices: {
          'tl-c3': {
            text: 'Study the pattern',
          },
          'tl-c4': {
            text: 'Go find Dr. Martinez',
          },
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Парадокс временной петли',
    description: 'Оказавшись в ловушке повторяющегося дня, вы должны разгадать тайну и вырваться из темпоральной тюрьмы.',
    author: 'Доктор Сара Чен',
    nodes: {
      'tl-1': {
        title: 'Снова утро',
        narration: 'Ваш будильник звонит в 7:00 утра. Снова. Это уже 47-й раз, когда вы просыпаетесь в этот самый момент. Тот же солнечный свет, та же птица чирикает за окном, то же кофейное пятно на вашем потолке.',
        choices: {
          'tl-c1': {
            text: 'Проверить свой дневник',
          },
          'tl-c2': {
            text: 'Немедленно поспешить в лабораторию',
          },
        },
      },
      'tl-2': {
        title: 'Дневник',
        narration: 'Ваш дневник заполнен записями из предыдущих циклов. "День 47: Квантовый стабилизатор выходит из строя в 15:47. Доктор Мартинес всегда проливает кофе в 10:23 утра. Код безопасности меняется ежедневно, но следует определенной закономерности."',
        choices: {
          'tl-c3': {
            text: 'Изучить закономерность',
          },
          'tl-c4': {
            text: 'Пойти найти доктора Мартинеса',
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
    title: 'Das Zeitschleifen-Paradoxon',
    description: 'Gefangen in einem sich wiederholenden Tag müssen Sie das Geheimnis aufdecken und sich aus dem temporalen Gefängnis befreien.',
    author: 'Dr. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Wieder Morgen',
        narration: 'Ihr Wecker klingelt um 7:00 Uhr. Wieder. Dies ist das 47. Mal, dass Sie zu genau diesem Moment aufwachen. Dasselbe Sonnenlicht, derselbe Vogel, der draußen zwitschert, derselbe Kaffeefleck an Ihrer Decke.',
        choices: {
          'tl-c1': {
            text: 'Tagebuch überprüfen',
          },
          'tl-c2': {
            text: 'Sofort zum Labor eilen',
          },
        },
      },
      'tl-2': {
        title: 'Das Tagebuch',
        narration: 'Ihr Tagebuch ist gefüllt mit Notizen aus früheren Schleifen. "Tag 47: Der Quantenstabilisator funktioniert um 15:47 Uhr nicht mehr. Dr. Martinez verschüttet immer um 10:23 Uhr Kaffee. Der Sicherheitscode ändert sich täglich, folgt aber einem Muster."',
        choices: {
          'tl-c3': {
            text: 'Das Muster studieren',
          },
          'tl-c4': {
            text: 'Dr. Martinez finden',
          },
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Le Paradoxe de la boucle temporelle',
    description: 'Piégé dans une journée qui se répète, vous devez découvrir le mystère et vous libérer de cette prison temporelle.',
    author: 'Dr. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Encore le matin',
        narration: 'Votre réveil sonne à 7h00. Encore. C\'est la 47ème fois que vous vous réveillez à ce moment précis. La même lumière du soleil, le même oiseau qui gazouille dehors, la même tache de café sur votre plafond.',
        choices: {
          'tl-c1': {
            text: 'Consulter votre journal',
          },
          'tl-c2': {
            text: 'Se précipiter immédiatement au laboratoire',
          },
        },
      },
      'tl-2': {
        title: 'Le Journal',
        narration: 'Votre journal est rempli de notes des boucles précédentes. "Jour 47 : Le stabilisateur quantique dysfonctionne à 15h47. Le Dr Martinez renverse toujours son café à 10h23. Le code de sécurité change chaque jour mais suit un schéma."',
        choices: {
          'tl-c3': {
            text: 'Étudier le schéma',
          },
          'tl-c4': {
            text: 'Aller trouver le Dr Martinez',
          },
        },
      },
    },
  },

  // Português
  pt: {
    title: 'O Paradoxo do Loop Temporal',
    description: 'Preso em um dia que se repete, você deve descobrir o mistério e se libertar da prisão temporal.',
    author: 'Dra. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Manhã Novamente',
        narration: 'Seu despertador toca às 7h00. Novamente. Esta é a 47ª vez que você acorda exatamente neste momento. A mesma luz do sol, o mesmo pássaro cantando lá fora, a mesma mancha de café no seu teto.',
        choices: {
          'tl-c1': {
            text: 'Verificar seu diário',
          },
          'tl-c2': {
            text: 'Correr para o laboratório imediatamente',
          },
        },
      },
      'tl-2': {
        title: 'O Diário',
        narration: 'Seu diário está cheio de anotações dos loops anteriores. "Dia 47: O estabilizador quântico apresenta falha às 15h47. Dr. Martinez sempre derrama café às 10h23. O código de segurança muda diariamente, mas segue um padrão."',
        choices: {
          'tl-c3': {
            text: 'Estudar o padrão',
          },
          'tl-c4': {
            text: 'Ir encontrar o Dr. Martinez',
          },
        },
      },
    },
  },

  // 日本語
  ja: {
    title: 'タイムループパラドックス',
    description: '繰り返す一日に閉じ込められたあなたは、謎を解き明かし、時間の牢獄から脱出しなければならない。',
    author: 'サラ・チェン博士',
    nodes: {
      'tl-1': {
        title: 'また朝',
        narration: '午前7時00分に目覚まし時計が鳴る。また。これで47回目だ。まったく同じ瞬間に目を覚ます。同じ日光、同じ鳥のさえずり、天井の同じコーヒーのシミ。',
        choices: {
          'tl-c1': {
            text: '日記を確認する',
          },
          'tl-c2': {
            text: 'すぐに研究室に急ぐ',
          },
        },
      },
      'tl-2': {
        title: '日記',
        narration: '日記には以前のループからのメモでいっぱいだ。「47日目:量子安定装置が午後3時47分に故障する。マルティネス博士は午前10時23分に必ずコーヒーをこぼす。セキュリティコードは毎日変わるがパターンに従っている。」',
        choices: {
          'tl-c3': {
            text: 'パターンを研究する',
          },
          'tl-c4': {
            text: 'マルティネス博士を探しに行く',
          },
        },
      },
    },
  },

  // 中文
  zh: {
    title: '时间循环悖论',
    description: '困在重复的一天中,你必须揭开谜团并从时间牢笼中逃脱。',
    author: '陈莎拉博士',
    nodes: {
      'tl-1': {
        title: '又是早晨',
        narration: '你的闹钟在早上7点响起。又一次。这是你第47次在这个确切的时刻醒来。同样的阳光,同样的鸟鸣,天花板上同样的咖啡渍。',
        choices: {
          'tl-c1': {
            text: '查看日记',
          },
          'tl-c2': {
            text: '立即赶往实验室',
          },
        },
      },
      'tl-2': {
        title: '日记',
        narration: '你的日记里满是之前循环的笔记。"第47天:量子稳定器在下午3点47分发生故障。马丁内斯博士总是在上午10点23分洒咖啡。安全密码每天都在变化,但遵循某种规律。"',
        choices: {
          'tl-c3': {
            text: '研究规律',
          },
          'tl-c4': {
            text: '去找马丁内斯博士',
          },
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '타임 루프 패러독스',
    description: '반복되는 하루에 갇힌 당신은 미스터리를 풀고 시간의 감옥에서 탈출해야 합니다.',
    author: '사라 첸 박사',
    nodes: {
      'tl-1': {
        title: '또다시 아침',
        narration: '오전 7시에 알람이 울립니다. 또. 이 정확한 순간에 깨어난 것이 47번째입니다. 똑같은 햇빛, 똑같이 지저귀는 새, 천장의 똑같은 커피 얼룩.',
        choices: {
          'tl-c1': {
            text: '일기를 확인한다',
          },
          'tl-c2': {
            text: '즉시 연구실로 서둘러 간다',
          },
        },
      },
      'tl-2': {
        title: '일기',
        narration: '당신의 일기는 이전 루프의 메모로 가득 차 있습니다. "47일차: 양자 안정기가 오후 3시 47분에 오작동합니다. 마르티네스 박사는 항상 오전 10시 23분에 커피를 쏟습니다. 보안 코드는 매일 바뀌지만 패턴을 따릅니다."',
        choices: {
          'tl-c3': {
            text: '패턴을 연구한다',
          },
          'tl-c4': {
            text: '마르티네스 박사를 찾으러 간다',
          },
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
