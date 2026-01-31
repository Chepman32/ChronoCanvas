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
};
