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

export const story_847362951StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Midnight Curator',
    description: 'A renowned art curator is found dead in a locked gallery on the eve of the biggest exhibition of her career. As the lead detective, you have until dawn to solve the murder before the press descends and the killer disappears forever.',
    author: 'Detective Marcus Reed',
    nodes: {
      'story-847362951-4': {
        title: 'Sealed Chamber',
        narration: 'The main entrance deadbolt is engaged from inside, the security chain still latched. Every window remains locked, their sensors undisturbed according to the security system. The only other exit leads to a fire escape, but its alarm is armed and shows no sign of being triggered. This should be impossible. Then you notice something odd: fresh scratches around the ventilation grate near the ceiling, and a single black thread caught on its edge.',
        choices: {
          'story-847362951-c8': {
            text: 'Climb up to examine the ventilation system',
            description: 'Could someone have used the vents?',
          },
          'story-847362951-c9': {
            text: 'Review the security camera footage',
            description: 'Technology doesn',
          },
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Полуночный куратор',
    description: 'Известный арт-куратор найден мертвым в запертой галерее накануне крупнейшей выставки в её карьере. Как главный детектив, у вас есть время до рассвета, чтобы раскрыть убийство, прежде чем прибудет пресса, а убийца исчезнет навсегда.',
    author: 'Детектив Маркус Рид',
    nodes: {
      'story-847362951-4': {
        title: 'Запечатанная камера',
        narration: 'Засов главного входа задвинут изнутри, цепочка безопасности всё ещё на крючке. Каждое окно остаётся запертым, их датчики не тревожились согласно системе безопасности. Единственный другой выход ведёт к пожарной лестнице, но её сигнализация взведена и не показывает признаков срабатывания. Это должно быть невозможно. Затем вы замечаете что-то странное: свежие царапины вокруг вентиляционной решётки у потолка и одна чёрная нить, зацепившаяся за её край.',
        choices: {
          'story-847362951-c8': {
            text: 'Забраться и осмотреть вентиляционную систему',
            description: 'Мог ли кто-то воспользоваться вентиляцией?',
          },
          'story-847362951-c9': {
            text: 'Просмотреть записи камер видеонаблюдения',
            description: 'Технология не лжёт',
          },
        },
      },
    },
  },

  // Español
  es: {
    title: 'La Curadora de Medianoche',
    description: 'Una renombrada curadora de arte es encontrada muerta en una galería cerrada en la víspera de la mayor exposición de su carrera. Como detective principal, tienes hasta el amanecer para resolver el asesinato antes de que la prensa llegue y el asesino desaparezca para siempre.',
    author: 'Detective Marcus Reed',
    nodes: {
      'story-847362951-4': {
        title: 'Cámara Sellada',
        narration: 'El cerrojo de la entrada principal está activado desde el interior, la cadena de seguridad aún enganchada. Cada ventana permanece cerrada, sus sensores sin perturbaciones según el sistema de seguridad. La única otra salida conduce a una escalera de incendios, pero su alarma está armada y no muestra señales de haber sido activada. Esto debería ser imposible. Entonces notas algo extraño: rasguños frescos alrededor de la rejilla de ventilación cerca del techo, y un solo hilo negro atrapado en su borde.',
        choices: {
          'story-847362951-c8': {
            text: 'Subir para examinar el sistema de ventilación',
            description: '¿Podría alguien haber usado los conductos?',
          },
          'story-847362951-c9': {
            text: 'Revisar las grabaciones de las cámaras de seguridad',
            description: 'La tecnología no miente',
          },
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Der Mitternachtskurator',
    description: 'Eine renommierte Kunstkuratorin wird am Vorabend der größten Ausstellung ihrer Karriere tot in einer verschlossenen Galerie aufgefunden. Als leitender Ermittler haben Sie bis zum Morgengrauen Zeit, den Mord aufzuklären, bevor die Presse eintrifft und der Mörder für immer verschwindet.',
    author: 'Detective Marcus Reed',
    nodes: {
      'story-847362951-4': {
        title: 'Versiegelte Kammer',
        narration: 'Der Haupteingangsriegel ist von innen verriegelt, die Sicherheitskette noch eingehakt. Jedes Fenster bleibt verschlossen, ihre Sensoren laut Sicherheitssystem ungestört. Der einzige andere Ausgang führt zu einer Feuertreppe, aber deren Alarm ist scharf und zeigt keine Anzeichen einer Auslösung. Das sollte unmöglich sein. Dann bemerken Sie etwas Seltsames: frische Kratzer um das Lüftungsgitter nahe der Decke, und ein einzelner schwarzer Faden, der sich an dessen Kante verfangen hat.',
        choices: {
          'story-847362951-c8': {
            text: 'Hochklettern, um das Lüftungssystem zu untersuchen',
            description: 'Könnte jemand die Lüftungsschächte benutzt haben?',
          },
          'story-847362951-c9': {
            text: 'Die Sicherheitskamera-Aufnahmen überprüfen',
            description: 'Technologie lügt nicht',
          },
        },
      },
    },
  },

  // Français
  fr: {
    title: 'La Conservatrice de Minuit',
    description: 'Une conservatrice d\'art renommée est retrouvée morte dans une galerie verrouillée à la veille de la plus grande exposition de sa carrière. En tant que détective principal, vous avez jusqu\'à l\'aube pour résoudre le meurtre avant que la presse ne débarque et que le tueur ne disparaisse à jamais.',
    author: 'Détective Marcus Reed',
    nodes: {
      'story-847362951-4': {
        title: 'Chambre Scellée',
        narration: 'Le verrou de l\'entrée principale est engagé de l\'intérieur, la chaîne de sécurité encore accrochée. Chaque fenêtre reste verrouillée, leurs capteurs non perturbés selon le système de sécurité. La seule autre sortie mène à un escalier de secours, mais son alarme est armée et ne montre aucun signe d\'avoir été déclenchée. Cela devrait être impossible. Puis vous remarquez quelque chose d\'étrange : des rayures fraîches autour de la grille de ventilation près du plafond, et un seul fil noir pris sur son bord.',
        choices: {
          'story-847362951-c8': {
            text: 'Grimper pour examiner le système de ventilation',
            description: 'Quelqu\'un aurait-il pu utiliser les conduits ?',
          },
          'story-847362951-c9': {
            text: 'Examiner les enregistrements des caméras de sécurité',
            description: 'La technologie ne ment pas',
          },
        },
      },
    },
  },

  // Português
  pt: {
    title: 'A Curadora da Meia-Noite',
    description: 'Uma renomada curadora de arte é encontrada morta em uma galeria trancada na véspera da maior exposição de sua carreira. Como detetive principal, você tem até o amanhecer para resolver o assassinato antes que a imprensa chegue e o assassino desapareça para sempre.',
    author: 'Detetive Marcus Reed',
    nodes: {
      'story-847362951-4': {
        title: 'Câmara Selada',
        narration: 'O ferrolho da entrada principal está acionado por dentro, a corrente de segurança ainda presa. Cada janela permanece trancada, seus sensores não perturbados de acordo com o sistema de segurança. A única outra saída leva a uma escada de incêndio, mas seu alarme está armado e não mostra sinais de ter sido acionado. Isso deveria ser impossível. Então você nota algo estranho: arranhões frescos ao redor da grade de ventilação perto do teto, e um único fio preto preso em sua borda.',
        choices: {
          'story-847362951-c8': {
            text: 'Subir para examinar o sistema de ventilação',
            description: 'Alguém poderia ter usado os dutos?',
          },
          'story-847362951-c9': {
            text: 'Revisar as gravações das câmeras de segurança',
            description: 'A tecnologia não minte',
          },
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '真夜中の学芸員',
    description: '著名な美術館学芸員が、彼女のキャリア最大の展覧会の前夜に、施錠されたギャラリーで死体で発見される。主任刑事として、報道陣が押し寄せ、殺人犯が永遠に消える前に、夜明けまでに殺人事件を解決しなければならない。',
    author: '刑事マーカス・リード',
    nodes: {
      'story-847362951-4': {
        title: '密室',
        narration: '正面玄関のデッドボルトは内側から施錠されており、セキュリティチェーンもまだかかっている。すべての窓は施錠されたままで、セキュリティシステムによればセンサーは乱されていない。唯一の別の出口は非常階段につながっているが、その警報は作動しており、作動した形跡はない。これは不可能なはずだ。そのとき、奇妙なことに気づく。天井近くの換気グリルの周りに新しい引っかき傷があり、その縁に一本の黒い糸が引っかかっている。',
        choices: {
          'story-847362951-c8': {
            text: '登って換気システムを調べる',
            description: '誰かがダクトを使ったのだろうか？',
          },
          'story-847362951-c9': {
            text: '防犯カメラの映像を確認する',
            description: 'テクノロジーは嘘をつかない',
          },
        },
      },
    },
  },

  // 中文
  zh: {
    title: '午夜馆长',
    description: '一位著名的艺术策展人在她职业生涯最大展览的前夜，在一个上锁的画廊中被发现死亡。作为首席侦探，你必须在黎明前破案，否则媒体将蜂拥而至，凶手将永远消失。',
    author: '侦探马库斯·里德',
    nodes: {
      'story-847362951-4': {
        title: '密室',
        narration: '主入口的门闩从内侧锁上，安全链仍然挂着。根据安保系统，每扇窗户都锁着，它们的传感器没有受到干扰。唯一的另一个出口通向消防通道，但它的警报已启动，没有被触发的迹象。这应该是不可能的。然后你注意到一些奇怪的事情：天花板附近通风格栅周围有新鲜的划痕，边缘上挂着一根黑色的线。',
        choices: {
          'story-847362951-c8': {
            text: '爬上去检查通风系统',
            description: '有人可能使用了通风管道吗？',
          },
          'story-847362951-c9': {
            text: '查看安保摄像头录像',
            description: '技术不会说谎',
          },
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '한밤중의 큐레이터',
    description: '저명한 미술관 큐레이터가 그녀의 경력 최대 전시회 전날 밤 잠긴 갤러리에서 죽은 채 발견된다. 주임 형사로서, 언론이 몰려들고 살인범이 영원히 사라지기 전에 새벽까지 살인 사건을 해결해야 한다.',
    author: '형사 마커스 리드',
    nodes: {
      'story-847362951-4': {
        title: '밀실',
        narration: '정문의 데드볼트는 안쪽에서 잠겨 있고, 보안 체인도 여전히 걸려 있다. 모든 창문은 잠긴 채로 있으며, 보안 시스템에 따르면 센서는 교란되지 않았다. 유일한 다른 출구는 비상계단으로 이어지지만, 그 경보는 작동 중이며 작동된 흔적이 없다. 이것은 불가능한 일이어야 한다. 그때 이상한 것을 알아챈다. 천장 근처의 환기 그릴 주변에 새로운 긁힌 자국이 있고, 그 가장자리에 검은 실 한 가닥이 걸려 있다.',
        choices: {
          'story-847362951-c8': {
            text: '올라가서 환기 시스템을 조사한다',
            description: '누군가가 덕트를 사용했을까?',
          },
          'story-847362951-c9': {
            text: '보안 카메라 영상을 검토한다',
            description: '기술은 거짓말하지 않는다',
          },
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
