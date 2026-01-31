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

export const alchemistWatchTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English (Original)
  en: {
    title: "The Alchemist's Watch",
    description: "A high-stakes noir mystery in a steam-powered city. You must traverse a deep web of conspiracy, solving the murder of a man who claimed to have invented immortality.",
    author: 'AI Story Generator',
    nodes: {
      'node-1': {
        title: 'The Silent Laboratory',
        narration: "The rain batters the skylight of Doctor Aris Thorne's laboratory, keeping time with the headache pulsing behind your eyes. Thorne is dead. The city's most controversial alchemist lies slumped over his mahogany desk, a brass syringe embedded in his neck. The room smells of ozone and bitter almonds. Inspector Graves is outside holding back the press, giving you exactly ten minutes to find something the police won't understand. The lab is cluttered: bubbling vats to your left, and a wall covered in frantic chalk equations to your right. You must choose your starting point carefully; the killer might still be in the building, or worse, they might have left a trap.",
        choices: {
          'choice-1': { text: 'Examine the chalk equations for a hidden message' },
          'choice-2': { text: 'Inspect the body and the strange syringe closer' },
        },
      },
      'node-2': {
        title: 'The Writing on the Wall',
        narration: "You step closer to the chalkboard. It looks like nonsense to the untrained eye—chemical compounds mixed with astrological symbols. But you notice a smudge pattern. Someone tried to erase a specific section near the bottom right. Using your UV lamp, you reveal a faint residue: a map coordinate pointing to the Docks District, specifically Warehouse 42, and a name: 'Project Aion'. Just then, you hear a creak from the ventilation shaft above you. Someone is watching.",
        choices: {
          'choice-3': { text: 'Fire your warning shot into the ventilation shaft' },
          'choice-4': { text: 'Quietly copy the coordinates and slip out the back' },
        },
      },
      'node-3': {
        title: 'The Body Evidence',
        narration: "You approach Thorne's corpse. The syringe is intricate, etched with a serpent eating its own tail. Strange—there's no blood. The skin around the wound is turned to gold. It's not murder; it's transmutation. You check his pockets and find a heavy iron key with a ticket stub for the 'Midnight Express' train leaving in one hour. Suddenly, the body twitches.",
        choices: {
          'choice-5': { text: 'Grab the iron key and flee via the fire escape' },
          'choice-6': { text: 'Hide in the closet to eavesdrop on the Inspector' },
        },
      },
    },
  },

  // Russian (Русский)
  ru: {
    title: 'Часы Алхимика',
    description: 'Детективный нуар в городе паровых машин. Распутайте сложную сеть заговора, расследуя убийство человека, который утверждал, что изобрёл бессмертие.',
    author: 'ИИ Генератор Историй',
    nodes: {
      'node-1': {
        title: 'Тихая Лаборатория',
        narration: 'Дождь бьётся о стеклянную крышу лаборатории доктора Ариса Торна, отсчитывая время в такт пульсирующей головной боли. Торн мёртв. Самый скандальный алхимик города лежит на красном деревянном столе, латунный шприц торчит из его шеи. В комнате пахнет озоном и горьким миндалём. Инспектор Грейвс сдерживает толпу журналистов, давая вам ровно десять минут. Лаборатория завалена: слева бурлят чаны, справа — стена в меловых формулах. Убийца может быть ещё в здании.',
        choices: {
          'choice-1': { text: 'Изучить меловые уравнения на стене' },
          'choice-2': { text: 'Осмотреть тело и странный шприц' },
        },
      },
      'node-2': {
        title: 'Надпись на Стене',
        narration: 'Вы подходите к доске. Для невежды это бессмыслица — химические соединения перемешаны с астрологическими символами. Но вы замечаете следы стирания. Кто-то пытался стереть участок справа внизу. УФ-лампа обнаруживает координаты: доки, склад 42, и имя — «Проект Айон». В этот момент вы слышите скрип в вентиляционной шахте. За вами наблюдают.',
        choices: {
          'choice-3': { text: 'Выстрелить предупредительно в вентиляцию' },
          'choice-4': { text: 'Тихо скопировать координаты и уйти' },
        },
      },
      'node-3': {
        title: 'Доказательства на Теле',
        narration: 'Вы подходите к трупу Торна. Шприц украшен — змей, поедающий собственный хвост. Странно — нет крови. Кожа вокруг раны превратилась в золото. Это не убийство, это трансмутация. В кармане вы находите тяжёлый железный ключ и билет на «Полуночный экспресс», отправляющийся через час. Внезапно тело дёргается.',
        choices: {
          'choice-5': { text: 'Схватить ключ и бежать по пожарной лестнице' },
          'choice-6': { text: 'Спрятаться в шкафу и подслушать инспектора' },
        },
      },
    },
  },

  // Spanish (Español)
  es: {
    title: 'El Reloj del Alquimista',
    description: 'Un misterio noir de alto riesgo en una ciudad de vapor. Debes atravesar una red de conspiración profunda, resolviendo el asesinato de un hombre que afirmó haber inventado la inmortalidad.',
    author: 'Generador de Historias IA',
    nodes: {
      'node-1': {
        title: 'El Laboratorio Silencioso',
        narration: 'La lluvia golpea el tragaluz del laboratorio del Doctor Aris Thorne, marcando el tiempo al compás del dolor de cabeza. Thorne está muerto. El alquimista más controversial de la ciudad yace sobre su escritorio de caoba, una jeringa de latón clavada en el cuello. El cuarto huele a ozono y almendras amargas. El Inspector Graves afuera contiene a la prensa, dándote exactamente diez minutos. El laboratorio está lleno: calderos burbujeantes a tu izquierda, ecuaciones de tiza a tu derecha.',
        choices: {
          'choice-1': { text: 'Examinar las ecuaciones de tiza buscando mensajes ocultos' },
          'choice-2': { text: 'Inspeccionar el cuerpo y la extraña jeringa' },
        },
      },
      'node-2': {
        title: 'La Escritura en la Pared',
        narration: 'Te acercas a la pizarra. Parece un sinsentido — compuestos químicos mezclados con símbolos astrológicos. Pero notas un patrón de borrones. Alguien intentó borrar una sección. Con tu lámpara UV revelas residuos: coordenadas del Distrito de Muelles, Almacén 42, y un nombre: «Proyecto Aión». Entonces escuchas un crujido en la ventilación. Alguien te observa.',
        choices: {
          'choice-3': { text: 'Disparar una advertencia a la ventilación' },
          'choice-4': { text: 'Copiar silenciosamente las coordenadas y escapar' },
        },
      },
      'node-3': {
        title: 'Evidencia en el Cuerpo',
        narration: 'Te acercas al cadáver de Thorne. La jeringa está grabada con una serpiente devorando su propia cola. Extraño — no hay sangre. La piel alrededor de la herida se volvió dorada. No es asesinato, es transmutación. En sus bolsillos encuentras una llave de hierro y un boleto para el «Expreso de Medianoche». De repente, el cuerpo se estremece.',
        choices: {
          'choice-5': { text: 'Agarrar la llave y huir por la escalera de emergencia' },
          'choice-6': { text: 'Esconderse en el armario para espiar al Inspector' },
        },
      },
    },
  },

  // German (Deutsch)
  de: {
    title: 'Die Uhr des Alchemisten',
    description: 'Ein noir Mystery in einer dampfbetriebenen Stadt. Entwirre ein tiefes Verschwörungsnetz und löse den Mord an einem Mann, der behauptete, die Unsterblichkeit erfunden zu haben.',
    author: 'KI Geschichtengenerator',
    nodes: {
      'node-1': {
        title: 'Das Stille Labor',
        narration: 'Der Regen prasselt gegen die Dachfenster von Doktor Aris Thornes Labor, im Takt der Kopfschmerzen hinter deinen Augen. Thorne ist tot. Der umstrittenste Alchemist der Stadt liegt über seinem Mahagonitisch, eine Messingspritze im Nacken. Der Raum riecht nach Ozon und bitteren Mandeln. Inspektor Graves hält draußen die Presse zurück und gibt dir genau zehn Minuten. Das Labor ist vollgestopft: blubbernde Kessel links, Kreidegleichungen rechts.',
        choices: {
          'choice-1': { text: 'Die Kreidegleichungen auf versteckte Nachrichten prüfen' },
          'choice-2': { text: 'Den Körper und die seltsame Spritze untersuchen' },
        },
      },
      'node-2': {
        title: 'Die Schrift an der Wand',
        narration: 'Du trittst näher an die Tafel. Für das ungeschulte Auge wirkt es wie Unsinn — chemische Verbindungen vermischt mit astrologischen Symbolen. Aber du bemerkst ein Schmiermuster. Jemand versuchte, einen Bereich zu löschen. Mit der UV-Lampe deckst du Rückstände auf: Koordinaten zum Hafenviertel, Lagerhaus 42, und ein Name: «Projekt Aion». Dann hörst du ein Knarren im Lüftungsschacht. Jemand beobachtet dich.',
        choices: {
          'choice-3': { text: 'Einen Warnschuss in die Lüftung abfeuern' },
          'choice-4': { text: 'Die Koordinaten leise kopieren und verschwinden' },
        },
      },
      'node-3': {
        title: 'Beweise am Körper',
        narration: 'Du näherst dich Thornes Leiche. Die Spritze ist kunstvoll graviert — eine Schlange, die sich in den eigenen Schwanz beißt. Seltsam — kein Blut. Die Haut um die Wunde ist zu Gold geworden. Es ist kein Mord, es ist Transmutation. In seiner Tasche findest du einen schweren Eisenchlüssel und eine Fahrkarte für den «Mitternachtsexpress». Plötzlich zuckt der Körper.',
        choices: {
          'choice-5': { text: 'Den Schlüssel greifen und über die Feuerleiter fliehen' },
          'choice-6': { text: 'Im Schrank verstecken und den Inspektor belauschen' },
        },
      },
    },
  },

  // French (Français)
  fr: {
    title: "La Montre de l'Alchimiste",
    description: "Un mystère noir à haut risque dans une ville à vapeur. Traverse une toile de conspiration profonde pour résoudre le meurtre d'un homme qui prétendait avoir inventé l'immortalité.",
    author: 'Générateur de Histoires IA',
    nodes: {
      'node-1': {
        title: 'Le Laboratoire Silencieux',
        narration: "La pluie tambourine contre le puits de lumière du laboratoire du Docteur Aris Thorne, cadencée par le mal de crâne derrière tes yeux. Thorne est mort. L'alchimiste le plus controversé de la ville gît sur son bureau d'acajou, une seringue de laiton fichée dans le cou. La pièce sent l'ozone et les amandes amères. L'Inspecteur Graves retient la presse dehors, te donnant exactement dix minutes. Le labo est encombré : cuves bouillonnantes à gauche, équations à la craie à droite.",
        choices: {
          'choice-1': { text: 'Examiner les équations pour un message caché' },
          'choice-2': { text: 'Inspecter le corps et la seringue étrange' },
        },
      },
      'node-2': {
        title: "L'Écriture sur le Mur",
        narration: "Tu t'approches du tableau. Cela ressemble à des absurdités — composés chimiques mélangés à des symboles astrologiques. Mais tu remarques un motif de frottement. Quelqu'un a essayé d'effacer une section. Avec ta lampe UV, tu révèles des résidus : coordonnées vers le Quartier des Docks, Entrepôt 42, et un nom : « Projet Aion ». Alors tu entends un grincement dans la ventilation. Quelqu'un te regarde.",
        choices: {
          'choice-3': { text: 'Tirer un coup de semonce dans la ventilation' },
          'choice-4': { text: 'Copier discrètement les coordonnées et sortir' },
        },
      },
      'node-3': {
        title: 'Les Preuves sur le Corps',
        narration: "Tu t'approches du cadavre de Thorne. La seringue est gravée d'un serpent se mordant la queue. Étrange — pas de sang. La peau autour de la blessure s'est transformée en or. Ce n'est pas un meurtre, c'est une transmutation. Dans sa poche, tu trouves une lourde clé en fer et un ticket pour l'« Express de Minuit ». Soudain, le corps tressaute.",
        choices: {
          'choice-5': { text: "Saisir la clé et fuir par l'échelle de secours" },
          'choice-6': { text: "Se cacher dans le placard pour espionner l'Inspecteur" },
        },
      },
    },
  },

  // Portuguese (Português)
  pt: {
    title: 'O Relógio do Alquimista',
    description: 'Um mistério noir de alto risco em uma cidade a vapor. Percorra uma rede profunda de conspiração, resolvendo o assassinato de um homem que afirmou ter inventado a imortalidade.',
    author: 'Gerador de Histórias IA',
    nodes: {
      'node-1': {
        title: 'O Laboratório Silencioso',
        narration: 'A chuva bate no claraboia do laboratório do Doutor Aris Thorne, marcando o tempo ao compasso da dor de cabeça. Thorne está morto. O alquimista mais controverso da cidade jaz sobre sua mesa de mogno, uma seringa de latão cravada no pescoço. O quarto cheira a ozônio e amêndoas amargas. O Inspetor Graves segura a imprensa lá fora, dando exatamente dez minutos. O laboratório está lotado: caldeiros borbulhantes à esquerda, equações de giz à direita.',
        choices: {
          'choice-1': { text: 'Examinar as equações de giz por mensagens ocultas' },
          'choice-2': { text: 'Inspecionar o corpo e a seringa estranha' },
        },
      },
      'node-2': {
        title: 'A Escrita na Parede',
        narration: 'Você se aproxima do quadro. Parece absurdo — compostos químicos misturados com símbolos astrológicos. Mas você nota um padrão de borrão. Alguém tentou apagar uma seção. Com a lâmpada UV, você revela resíduos: coordenadas para o Distrito dos Docks, Armazém 42, e um nome: «Projeto Aion». Então você ouve um rangido na ventilação. Alguém está observando.',
        choices: {
          'choice-3': { text: 'Disparar um tiro de advertência na ventilação' },
          'choice-4': { text: 'Copiar silenciosamente as coordenadas e sair' },
        },
      },
      'node-3': {
        title: 'Evidências no Corpo',
        narration: 'Você se aproxima do cadáver de Thorne. A seringa está gravada com uma serpente devorando sua própria cauda. Estranho — sem sangue. A pele ao redor da ferida transformou-se em ouro. Não é assassinato, é transmutação. No bolso você encontra uma pesada chave de ferro e uma passagem para o «Expresso da Meia-Noite». De repente, o corpo se contrai.',
        choices: {
          'choice-5': { text: 'Pegar a chave e fugir pela escada de incêndio' },
          'choice-6': { text: 'Esconder-se no armário para espionar o Inspetor' },
        },
      },
    },
  },

  // Japanese (日本語)
  ja: {
    title: '錬金術師の時計',
    description: '蒸気機関の都市を舞台にしたハイリスクなノワールミステリー。不老不死を発明したと主張した男の殺人事件を解き明かし、深い陰謀の網を解きほぐせ。',
    author: 'AIストーリージェネレーター',
    nodes: {
      'node-1': {
        title: '静かな実験室',
        narration: '雨がアリス・ソーン博士の実験室の天窓を打ち、頭痛の鼓動に合わせて時間を刻む。ソーンは死んでいる。町でもっとも物議を醸す錬金術師が、マホガニーの机に突っ伏し、首には真鍮の注射器が刺さっている。部屋にはオゾンと苦いアーモンドの匂いが漂う。グレイブス警部が外で報道陣を押さえ、ちょうど10分の時間をくれている。実験室は散らかっている：左には泡立つタンク、右には黒板に書かれた式。',
        choices: {
          'choice-1': { text: '黒板の式に隠されたメッセージを調べる' },
          'choice-2': { text: '遺体と奇妙な注射器を調べる' },
        },
      },
      'node-2': {
        title: '壁の文字',
        narration: '黒板に近づく。素人には意味不明だ — 化学化合物と占星術の記号が混ざっている。しかし、消した跡のパターンに気づく。誰かが右下の部分を消そうとした。UVランプで調べると、薄い残りが現れる：ドック地区の倉庫42の座標、そして名前：「プロジェクト・アイオン」。その時、換気口からきしむ音が聞こえる。誰かが見ている。',
        choices: {
          'choice-3': { text: '換気口に警告の射撃をする' },
          'choice-4': { text: '静かに座標を写し裏口から出る' },
        },
      },
      'node-3': {
        title: '遺体の証拠',
        narration: 'ソーンの遺体に近づく。注射器には精巧な彫刻がある — 自らの尾を食う蛇。奇妙だ — 血がない。傷口周りの皮膚が金に変わっている。これは殺人ではない、変成だ。ポケットを調べると、重い鉄の鍵と「ミッドナイト・エクスプレス」の切符が出てきた。1時間後の発車だ。突然、遺体が痙攣する。',
        choices: {
          'choice-5': { text: '鍵を掴み避難階段で逃げる' },
          'choice-6': { text: '戸棚に隠れ警部の話を盗み聞く' },
        },
      },
    },
  },

  // Chinese (简体中文)
  zh: {
    title: '炼金术士的怀表',
    description: '蒸汽动力城市中的高风险黑色悬疑。你必须穿越深层的阴谋网络，解开一个声称发明了永生之人的谋杀案。',
    author: 'AI故事生成器',
    nodes: {
      'node-1': {
        title: '寂静的实验室',
        narration: '雨水拍打着阿里斯·索恩博士实验室的天窗，与眼后跳动的头痛保持同步。索恩死了。这座城市最具争议的炼金术士瘫倒在桃花心木书桌上，颈部插着一根黄铜注射器。房间里弥漫着臭氧和苦杏仁的气味。格雷夫斯督察在外面挡住记者，只给你十分钟。实验室杂乱无章：左边是冒泡的大缸，右边是写满疯狂粉笔公式的墙壁。',
        choices: {
          'choice-1': { text: '检查粉笔方程式寻找隐藏信息' },
          'choice-2': { text: '仔细检查尸体和奇怪的注射器' },
        },
      },
      'node-2': {
        title: '墙上的字迹',
        narration: '你走近黑板。对未经训练的眼睛来说，这像是胡言乱语——化学化合物与占星符号混杂。但你注意到擦拭的痕迹。有人试图擦除右下角的特定部分。用紫外线灯，你发现了 faint 残留物：指向码头区42号仓库的地图坐标，以及一个名字：「永恒计划」。就在这时，你听到上方通风管道的嘎吱声。有人在监视。',
        choices: {
          'choice-3': { text: '向通风管道鸣枪示警' },
          'choice-4': { text: '悄悄抄下坐标从后门溜走' },
        },
      },
      'node-3': {
        title: '尸体上的证据',
        narration: '你走近索恩的尸体。注射器上刻着精美的图案——一条吞食自己尾巴的蛇。奇怪——没有血。伤口周围的皮肤变成了金色。这不是谋杀，是嬗变。你检查他的口袋，发现一把沉重的铁钥匙和一张「午夜快车」的车票，一小时后发车。突然，尸体抽搐了一下。',
        choices: {
          'choice-5': { text: '抓起钥匙从消防梯逃跑' },
          'choice-6': { text: '躲在壁橱里偷听督察说话' },
        },
      },
    },
  },

  // Korean (한국어)
  ko: {
    title: '연금술사의 시계',
    description: '증기 도시를 배경으로 한 고위험 누와르 미스터리. 불로부를 발명했다고 주장한 남의 살인사를 해결하며 깊은 반란의 망을 허물어나가야 합니다.',
    author: 'AI 스토리 생성기',
    nodes: {
      'node-1': {
        title: '조용한 실험실',
        narration: '비가 아리스 토윈 박사의 실험실 천장을 두드리며 눈 뒤에 용동갈이치는 두통과 시나를 맞추어 간다. 토윈은 죽었다. 도시의 가장 물의를 발생시킨 연금술사가 마호갠 책상에 엎서있고, 목에는 노동 주사기가 박혀 있다. 방에는 오존과 쌍두의 향기가 난다. 그레이브스 검색이 발길에서 언론을 지켜낼 때 나에겐 딱 십분이 주어졌다. 실험실은 어지럽다. 왼쪽에는 끓어오르는 탱크가 있고, 오른쪽에는 칠판에 쓰인 미친 분필 공식으로 가득한 벽이 있다. 살인범이 아직 건축물 안에 있을 수 있다.',
        choices: {
          'choice-1': { text: '분필 공식을 조사하여 숨겨진 메시지를 찾는다' },
          'choice-2': { text: '시신과 이상한 주사기를 자세히 조사한다' },
        },
      },
      'node-2': {
        title: '벽의 글씨',
        narration: '칠판에 가까워진다. 훈련되지 않은 눈에는 무의미해 보인다 — 화학 화합물과 점성 기호가 섞여 있다. 하지만 지워진 자국을 발견한다. 누군가 오른쪽 아래를 지우려 했다. UV램프로 살펴 보니 희미한 자국이 보인다: 독 지구의 창고 42의 좌표, 그리고 이름: "프로젝트 아이온". 그 순간 환기구에서 낡은 소리가 들린다. 누군가 당신을 지켜보고 있다.',
        choices: {
          'choice-3': { text: '환기구에 경고 사격을 한다' },
          'choice-4': { text: '조용히 좌표를 베끼고 뒷문으로 빠져나간다' },
        },
      },
      'node-3': {
        title: '시신의 증거',
        narration: '토윈의 시신에 가까이 다가간다. 주사기에는 뱀이 자신의 꼬리를 물고 있는 조각이 새겨져 있다. 이상하다 — 피가 없다. 상처 주변의 피부가 금으로 변했다. 이것은 살인이 아니라 변환이다. 포켓을 뒤져 무거운 쇠 열쇠와 한 시간 후에 출발하는 "미드나잇 익스프레스"의 승차권이 나온다. 갑자기 시신이 경련한다.',
        choices: {
          'choice-5': { text: '열쇠를 집어 데리고 비상계단으로 도망친다' },
          'choice-6': { text: '옷장에 숨어 검사의 이야기를 엿듣는다' },
        },
      },
    },
  },

  // Ukrainian (Українська)
  uk: {
    title: 'Годинник Алхіміка',
    description: 'Загадковий нуар у місті, що працює на парі. Розплутайте глибоку мережу змов, розслідуючи вбивство чоловіка, який стверджував, що вигадав безсмертя.',
    author: 'AI Генератор Історій',
    nodes: {
      'node-1': {
        title: 'Тиха Лабораторія',
        narration: 'Дощ б\'є про скляне дах лабораторії доктора Аріса Торна, відстукує в такт головного болю за очима. Торн мертвий. Найскандальніший алхімік міста лежить на червоному дерев\'яному столі, латунний шприц торчить з шиї. Кімната пахне озоном і гірким мигдалем. Інспектор Грейвс стримує журналістів, даючи вам рівно десять хвилин. Лабораторія завалена: зліва бурлять чани, справа — стіна в крейдових формулах. Вбивця може бути ще в будівлі.',
        choices: {
          'choice-1': { text: 'Вивчити крейдові рівняння на приховане повідомлення' },
          'choice-2': { text: 'Оглянути тіло і дивний шприц' },
        },
      },
      'node-2': {
        title: 'Напис на Стіні',
        narration: 'Ви підходите до дошки. Для неспеціаліста це дурниця — хімічні сполуки змішані з астрологічними символами. Але ви помічаєте слід стирання. Хтось намагався стерти розділ у правому низу. UV-лампа виявляє легкий слід: координати району доків, склад 42, і ім\'я: «Проєкт Айон». У цей момент ви чуєте скрип у вентиляційній шахті. За вами спостерігають.',
        choices: {
          'choice-3': { text: 'Зробити попереджувальний постріл у вентиляцію' },
          'choice-4': { text: 'Тихо списати координати і вийти через тил' },
        },
      },
      'node-3': {
        title: 'Докази на Тілі',
        narration: 'Ви наближаєтесь до трупа Торна. Шприц різьблений — змій, що доїдає власний хвіст. Дивно — крові немає. Шкіра навколо рани перетворилася на золото. Це не вбивство, це трансмутація. У кишені ви знаходите важкий залізний ключ і квиток на «Північний експрес», що відправляється за годину. Раптом тіло здригається.',
        choices: {
          'choice-5': { text: 'Схопити ключ і втекти через пожежну драбину' },
          'choice-6': { text: 'Сховатися в шафі, щоб підслухати Інспектора' },
        },
      },
    },
  },

  // Italian (Italiano)
  it: {
    title: 'L\'Orologio dell\'Alchimista',
    description: 'Un noir mystery ad alto rischio in una città a vapore. Devi attraversare una fitta rete di cospirazioni per risolvere l\'omicidio di un uomo che sosteneva di aver inventato l\'immortalità.',
    author: 'Generatore di Storie AI',
    nodes: {
      'node-1': {
        title: 'Il Laboratorio Silenzioso',
        narration: 'La pioggia batte sul lucernario del laboratorio del Dottor Aris Thorne, scandendo il tempo al ritmo del mal di testa che pulsa dietro i tuoi occhi. Thorne è morto. L\'alchimista più controverso della città giace sulla scrivania di mogano, una siringa d\'ottone conficcata nel collo. La stanza odora di ozono e mandorle amare. L\'Ispettore Graves trattiene la stampa fuori, dandoti esattamente dieci minuti. Il laboratorio è ingombro: vasche gorgoglianti a sinistra, equazioni gesso sulla parete di destra. L\'assassino potrebbe essere ancora nell\'edificio.',
        choices: {
          'choice-1': { text: 'Esaminare le equazioni per un messaggio nascosto' },
          'choice-2': { text: 'Ispezionare il corpo e la strana siringa più da vicino' },
        },
      },
      'node-2': {
        title: 'La Scrittura sul Muro',
        narration: 'Ti avvicini alla lavagna. Agli occhi inesperti sembra un nonsenso: composti chimici mescolati a simboli astrologici. Ma noti un pattern di sbavature. Qualcuno ha cercato di cancellare una sezione in basso a destra. Con la lampada UV riveli un residuo debole: coordinate al Distretto dei Moli, Magazzino 42, e un nome: «Progetto Aion». Proprio allora senti uno scricchiolio dalla condotta d\'aria. Qualcuno ti sta osservando.',
        choices: {
          'choice-3': { text: 'Sparare un colpo di avvertimento nella condotta' },
          'choice-4': { text: 'Copiare silenziosamente le coordinate e uscire dal retro' },
        },
      },
      'node-3': {
        title: 'Le Prove sul Corpo',
        narration: 'Ti avvicini al cadavere di Thorne. La siringa è incisa con un serpente che si morde la coda. Strano: non c\'è sangue. La pelle attorno alla ferita si è trasformata in oro. Non è omicidio, è trasmutazione. Nelle tasche trovi una pesante chiave di ferro e un biglietto per l\'«Espresso di Mezzanotte» che parte tra un\'ora. Improvvisamente il corpo sussulta.',
        choices: {
          'choice-5': { text: 'Afferrare la chiave e fuggire dalla scala antincendio' },
          'choice-6': { text: 'Nascondersi nell\'armadio per origliare l\'Ispettore' },
        },
      },
    },
  },

  // Arabic (العربية)
  ar: {
    title: 'ساعة الكيميائي',
    description: 'غموض أسود عالي الخطورة في مدينة تعمل بالبخار. يجب أن تخترق شبكة مؤامرات عميقة لحل جريمة قتل رجل ادعى أنه اخترع الخلود.',
    author: 'مولد القصص الذكاء الاصطناعي',
    nodes: {
      'node-1': {
        title: 'المعمل الصامت',
        narration: 'المطر يقصف زجاج سقف معمل الدكتور أريس ثورن، مواكباً نبض الصداع خلف عينيك. ثورن ميت. الخيميائي الأكثر إثارة للجدل في المدينة منهك على مكتبه المحني، ومحاصر برنين نحاسي في رقبته. الغرفة تنبعث منها رائحة الأوزون واللوز المر. المفتش غريفز في الخارج يكبح الصحافة، مما يمنحك عشر دقائق بالضبط. المعمل مزدحم: أحواض فقاعية على اليسار، جدار مغطى بمعادلات الطباشير المجنونة على اليمين. القاتل قد يكون في المبنى.',
        choices: {
          'choice-1': { text: 'فحص معادلات الطباشير بحثاً عن رسالة خفية' },
          'choice-2': { text: 'فحص الجثة والإبرة الغريبة بعناية أكبر' },
        },
      },
      'node-2': {
        title: 'الكتابة على الجدار',
        narration: 'تقترب من اللوح. يبدو هراءً للعين غير المتدربة — مركبات كيميائية مختلطة برموز فلكية. لكنك تلاحظ نمط التلطيخ. حاول شخص ما مسح قسم محدد في الأسفل الأيمن. باستخدام مصباحك فوق البنفسجي، تكشف عن بقايا خافتة: إحداثيات تشير إلى منطقة الأرصفة، المستودع 42، واسم: «مشروع أيون». في هذه اللحظة، تسمع صريراً من قناة التهوية أعلاك. هناك من يراقبك.',
        choices: {
          'choice-3': { text: 'إطلاق النار التحذيري في قناة التهوية' },
          'choice-4': { text: 'نسخ الإحداثيات بهدوء والخروج من الباب الخلفي' },
        },
      },
      'node-3': {
        title: 'الأدلة على الجثة',
        narration: 'تقترب من جثة ثورن. الإبرة محفورة بأفعى تأكل ذيلها. غريب — لا يوجد دم. تحول الجلد حول الجرح إلى ذهب. إنه ليس قتل، بل تحول. تتفحص جيوبه وتجد مفتاحاً حديدياً ثقيلاً وقسيمة لـ «القطار الليلي» المغادر خلال ساعة. فجأة، تتشنج الجثة.',
        choices: {
          'choice-5': { text: 'الامساك بالمفتاح والهروب عبر سلم الإنذار' },
          'choice-6': { text: 'الاختباء في الخزانة لتجسس على المفتش' },
        },
      },
    },
  },

  // Hindi (हिन्दी)
  hi: {
    title: 'रसायनशास्त्री की घड़ी',
    description: 'भाप शक्ति से चलने वाले शहर में एक उच्च-जोखिम न्वार रहस्य। एक आदमी की हत्या का रहस्य सुलझाएं जिसने दावा किया था कि उसने अमरत्व का आविष्कार किया है, और गहरे षड्यंत्र के जाल से गुजरें।',
    author: 'AI कहानी जनरेटर',
    nodes: {
      'node-1': {
        title: 'शांत प्रयोगशाला',
        narration: 'डॉक्टर एरिस थॉर्न की प्रयोगशाला के स्काइलाइट पर बारिश गिर रही है, आपकी आंखों के पीछे की धड़कन के साथ समय को चिह्नित करते हुए। थॉर्न मर चुका है। शहर का सबसे विवादास्पद रसायनज्ञ अपनी महोगनी डेस्क पर पड़ा है, उसकी गर्दन में एक पीतल की सुई धंसी हुई है। कमरे में ओजोन और कड़वे बादाम की गंध है। इंस्पेक्टर ग्रेव्स बाहर प्रेस को रोक रहा है, आपको ठीक दस मिनट दे रहा है। प्रयोगशाला भरी हुई है: बाईं ओर बुलबुले उठाते बड़े बर्तन, दाईं ओर पागल चॉक समीकरणों से ढकी दीवार। हत्यारा अभी भी इमारत में हो सकता है।',
        choices: {
          'choice-1': { text: 'छिपे संदेश के लिए चॉक समीकरणों की जाँच करें' },
          'choice-2': { text: 'शव और अजीब सुई की बारीकी से जांच करें' },
        },
      },
      'node-2': {
        title: 'दीवार पर लिखावट',
        narration: 'आप ब्लैकबोर्ड के करीब जाते हैं। अनप्रशिक्षित आंखों के लिए यह बकवास लगती है — ज्योतिषीय प्रतीकों के साथ मिश्रित रसायन यौगिक। लेकिन आप एक मिटाने का पैटर्न देखते हैं। किसी ने नीचे दाईं ओर एक विशिष्ट अनुभाग को मिटाने की कोशिश की थी। अपनी यूवी लैंप का उपयोग करके, आप एक हल्का अवशेष प्रकट करते हैं: डॉक जिले के गोदाम 42 के निर्देशांक, और एक नाम: «प्रोजेक्ट ऐन»। तभी, आप अपने ऊपर वेंटिलेशन शाफ्ट से एक चरमराहट सुनते हैं। कोई आपको देख रहा है।',
        choices: {
          'choice-3': { text: 'वेंटिलेशन शाफ्ट में चेतावनी गोली चलाएं' },
          'choice-4': { text: 'चुपचाप निर्देशांक लिखें और पीछे से निकल जाएं' },
        },
      },
      'node-3': {
        title: 'शव पर सबूत',
        narration: 'आप थॉर्न के शव के करीब जाते हैं। सुई पर एक नक्काशी है — एक सांप जो अपनी पूंछ खा रहा है। अजीब — कोई खून नहीं है। घाव के आसपास की त्वचा सोने में बदल गई है। यह हत्या नहीं है, यह रूपांतरण है। आप उसकी जेबें टटोलते हैं और एक भारी लोहे की चाबी और «मिडनाइट एक्सप्रेस» की टिकट निकलती है, जो एक घंटे में रवाना हो रही है। अचानक, शव में झटका लगता है।',
        choices: {
          'choice-5': { text: 'चाबी पकड़ो और आग बुझाने की सीढ़ी से भागो' },
          'choice-6': { text: 'इंस्पेक्टर की बातचीत सुनने के लिए अलमारी में छिपो' },
        },
      },
    },
  },

  // Dutch (Nederlands)
  nl: {
    title: 'Het Horloge van de Alchemist',
    description: 'Een noir mystery met hoge inzet in een stoomaangedreven stad. Je moet een diep web van samenzweringen doorkruisen om de moord op een man op te lossen die beweerde onsterfelijkheid te hebben uitgevonden.',
    author: 'AI Verhalengenerator',
    nodes: {
      'node-1': {
        title: 'Het Stille Laboratorium',
        narration: 'De regen slaat tegen het dakraam van het laboratorium van dokter Aris Thorne, in de maat van de hoofdpijn die achter je ogen pulseert. Thorne is dood. De meest omstreden alchemist van de stad ligt over zijn mahonie bureau, een messing spuit in zijn nek. De kamer ruikt naar ozon en bittere amandelen. Inspecteur Graves houdt buiten de pers tegen en geeft je precies tien minuten. Het lab is overvol: borrelende vaten links, een muur vol kalkformules rechts. De moordenaar is misschien nog in het gebouw.',
        choices: {
          'choice-1': { text: 'Onderzoek de kalkformules op een verborgen boodschap' },
          'choice-2': { text: 'Inspecteer het lichaam en de vreemde spuit naderbij' },
        },
      },
      'node-2': {
        title: 'De Schrift op de Muur',
        narration: 'Je loopt naar het bord toe. Het lijkt onzin voor het ongetrainde oog: chemische verbindingen gemengd met astrologische symbolen. Maar je ziet een veegpatroon. Iemand probeerde een gedeelte rechtsonder te wissen. Met je UV-lamp onthul je een zwak residu: coördinaten naar het Dokken District, Magazijn 42, en een naam: «Project Aion». Dan hoor je een piep uit het ventilatiekanaal boven je. Iemand houdt je in de gaten.',
        choices: {
          'choice-3': { text: 'Vuur een waarschuwingsschot in het ventilatiekanaal' },
          'choice-4': { text: 'Kopieer stilletjes de coördinaten en glijp weg via de achterdeur' },
        },
      },
      'node-3': {
        title: 'Het Bewijs op het Lichaam',
        narration: 'Je nadert Thorns lijk. De spuit is bewerkt met een slang die in zijn eigen staart bijt. Vreemd: er is geen bloed. De huid rond de wond is veranderd in goud. Het is geen moord, het is transmutatie. Je checkt zijn zakken en vindt een zware ijzeren sleutel met een kaartje voor de «Midnight Express» die over een uur vertrekt. Opeens trapt het lichaam.',
        choices: {
          'choice-5': { text: 'Grijp de sleutel en vlucht via de brandtrap' },
          'choice-6': { text: 'Verstop je in de kast om de Inspecteur af te luisteren' },
        },
      },
    },
  },

  // Polish (Polski)
  pl: {
    title: 'Zegar Alchemika',
    description: 'Mroczna zagadka noir o wysokiej stawce w mieście napędzanym parą. Musisz przebyć głęboką sieć spisków, rozwiązując zabójstwo człowieka, który twierdził, że wynalazł nieśmiertelność.',
    author: 'Generator Historii AI',
    nodes: {
      'node-1': {
        title: 'Cicha Pracownia',
        narration: 'Deszcz uderza w świetlik laboratorium doktora Arisa Thornea, w rytmie bólu głowy pulsującego za twoimi oczami. Thorne nie żyje. Najbardziej kontrowersyjny alchemik miasta leży na swoim mahoniowym biurku, z mosiężną strzykawką wbitą w szyję. W pomieszczeniu unosi się zapach ozonu i gorzkich migdałów. Inspektor Graves na zewnątrz powstrzymuje prasę, dając ci dokładnie dziesięć minut. Laboratorium jest zagracone: bulgoczące kadzie po lewej, ściana w kredowych wzorach po prawej. Zabójca może wciąż być w budynku.',
        choices: {
          'choice-1': { text: 'Zbadaj kredowe wzory w poszukiwaniu ukrytej wiadomości' },
          'choice-2': { text: 'Zbliż się, by obejrzeć ciało i dziwną strzykawkę' },
        },
      },
      'node-2': {
        title: 'Pismo na Ścianie',
        narration: 'Podchodzisz bliżej tablicy. Dla niewprawnego oka to nonsens: związki chemiczne zmieszane z symbolami astrologicznymi. Ale dostrzegasz ślady smug. Ktoś próbował zetrzeć fragment na dole po prawej. UV lampą odsłaniasz słaby ślad: współrzędne do Dzielnicy Doków, Magazyn 42, i nazwa: «Projekt Aion». Wtedy słyszysz skrzypnięcie z kanału wentylacyjnego nad sobą. Ktoś cię obserwuje.',
        choices: {
          'choice-3': { text: 'Wystrzel ostrzegawczo w kanał wentylacyjny' },
          'choice-4': { text: 'Cicho spisz współrzędne i wyślizgnij się tylnym wyjściem' },
        },
      },
      'node-3': {
        title: 'Dowody na Ciele',
        narration: 'Podchodzisz do zwłok Thornea. Strzykawka zdobiona jest wizerunkiem węża pośladającego własny ogon. Dziwne: nie ma krwi. Skóra wokół rany zmieniła się w złoto. To nie morderstwo, to transmutacja. Sprawdzasz kieszenie i znajdujesz ciężki żelazny klucz oraz bilet na «Północny Ekspres», który odjeżdża za godzinę. Nagle ciało drga.',
        choices: {
          'choice-5': { text: 'Chwyć klucz i uciekaj przez straż pożarową' },
          'choice-6': { text: 'Schowaj się w szafie, by podsłuchać Inspektora' },
        },
      },
    },
  },

  // Turkish (Türkçe)
  tr: {
    title: 'Simyacının Saati',
    description: 'Buharla çalışan bir şehirde yüksek bahisli bir noir gizem. Ölümsüzlüğü icat ettiğini iddia eden bir adamın cinayetini çözerek derin bir komplo ağından geçmelisin.',
    author: 'AI Hikaye Oluşturucu',
    nodes: {
      'node-1': {
        title: 'Sessiz Laboratuvar',
        narration: 'Yağmur, Doktor Aris Thorne\'un laboratuvarının gök penceresine vuruyor, gözlerinin arkalarında atan baş ağrısının ritmiyle zamanı tutuyor. Thorne ölü. Şehrin en tartışmalı simyacısı, maun masasının üzerine yığılmış, boynuna pirinç bir şiringe saplanmış durumda. Oda ozon ve acı badem kokuyor. Müfettiş Graves dışarıda basını geri tutuyor, sana tam olarak on dakika veriyor. Laboratuvar dağınık: solda kazanlar küpürüyor, sağda tebeşir denklemleriyle kaplı bir duvar. Katil hala binada olabilir.',
        choices: {
          'choice-1': { text: 'Gizli mesaj için tebeşir denklemlerini incele' },
          'choice-2': { text: 'Cesedi ve garip şiringeyi yakından incele' },
        },
      },
      'node-2': {
        title: 'Duvar Yazısı',
        narration: 'Tahtaya yaklaşıyorsun. Eğitimsiz göze saçmalık gibi görünüyor: astrolojik sembollerle karışmış kimyasal bileşikler. Ama bir silme deseni fark ediyorsun. Biri sağ alttaki bölümü silmeye çalışmış. UV lambanla soluk bir kalıntı ortaya çıkarıyorsun: Rıhtım Bölgesi\'ne, özellikle 42. Depo\'ya koordinatlar, ve bir isim: «Aion Projesi». Tam o sırada, üstteki havalandırma kanalından bir gıcırtı duyuyorsun. Biri seni izliyor.',
        choices: {
          'choice-3': { text: 'Havalandırma kanalına uyarı ateşi aç' },
          'choice-4': { text: 'Sessizce koordinatları kopyala ve arka taraftan sız' },
        },
      },
      'node-3': {
        title: 'Cesetteki Kanıt',
        narration: 'Thorne\'un cesedine yaklaşıyorsun. Şiringe, kendi kuyruğunu yiyen bir yılanla işlenmiş. Garip: kan yok. Yarın etrafındaki deri altına dönüşmüş. Bu cinayet değil, transmutasyon. Cebini kontrol ediyorsun ve bir saat içinde kalkacak «Geceyarı Ekspresi»nin ağır bir demir anahtarı ve bileti buluyorsun. Aniden, ceset seziriyor.',
        choices: {
          'choice-5': { text: 'Anahtarı kap ve yangın merdiveninden kaç' },
          'choice-6': { text: 'Müfettişi dinlemek için dolaba saklan' },
        },
      },
    },
  },
};
