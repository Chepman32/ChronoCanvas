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

export const echoesSummerFestivalTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English (Original)
  en: {
    title: 'Echoes of the Summer Festival',
    description: 'You return to your hometown\'s summer festival and reconnect with an old friend, discovering how one evening can change everything.',
    author: 'AI Story Generator',
    nodes: {
      'node-1': {
        title: 'Return to Lantern Hill',
        narration: 'The train pulls into the station just as the sun begins to dip below the horizon, painting the sky in strokes of amber and violet. You step onto the platform, the familiar scent of pine and jasmine washing over you. It has been three years since you left Millbrook, three years since you ran from the mess you made of things. The Summer Festival of Lanterns is in full swing tonight, and the whole town will be gathered by the river. You know Alex will be there too. Your heart pounds at the thought.',
        choices: {
          'choice-1': { text: 'Walk directly to the festival grounds' },
          'choice-2': { text: 'Take the quiet riverside path first' },
        },
      },
      'node-2': {
        title: 'Festival Gate Reunion',
        narration: 'Paper lanterns sway in the gentle evening breeze as you pass beneath the wooden archway. The grounds are alive with music and laughter, stalls selling grilled corn and cotton candy. And then you see her — your cousin Lena, waving enthusiastically. She pulls you into a tight hug. \'I can\'t believe you actually came back,\' she whispers. \'Alex is here. By the river. Do you want to go now, or take a moment?\'',
        choices: {
          'choice-3': { text: 'Push through the crowd toward the river now' },
          'choice-4': { text: 'Pause at a quiet stall to compose yourself' },
        },
      },
    },
  },

  // Russian (Русский)
  ru: {
    title: 'Эхо Летнего Фестиваля',
    description: 'Вы возвращаетесь на летний фестиваль в родной город и встречаетесь со старым другом, открывая, как один вечер может изменить всё.',
    author: 'ИИ Генератор Историй',
    nodes: {
      'node-1': {
        title: 'Возвращение на Холм Фонарей',
        narration: 'Поезд въезжает на станцию как раз когда солнце начинает клониться к горизонту, рисуя небо мазками янтаря и фиолета. Вы выходите на платформу, и знакомый запах сосны и жасмина обволакивает вас. Прошло три года с тех пор как вы покинули Милбрук, три года с тех пор как вы сбежали от того беспорядка, который устроили. Сегодня вечером Фестиваль Фонарей в полном разгаре, и весь город соберётся у реки. Вы знаете, что Алекс тоже будет там. Сердце колотится при мысли об этом.',
        choices: {
          'choice-1': { text: 'Напрямик к площади фестиваля' },
          'choice-2': { text: 'Сначала пройтись по тихой набережной' },
        },
      },
      'node-2': {
        title: 'Встреча у Входа',
        narration: 'Бумажные фонари качаются в лёгком вечернем бризе, когда вы проходите под деревянной аркой. Площадь наполнена музыкой и смехом, лавки продают жареную кукурузу и сахарную вату. И вот вы видите её — вашу кузину Лену, энергично машет. Она заключает вас в крепкие объятия. «Не могу поверить, что ты вернулся», — шепчет она. «Алекс здесь. У реки. Хочешь пойти сейчас или сначала передохнуть?»',
        choices: {
          'choice-3': { text: 'Пробраться сквозь толпу к реке сейчас' },
          'choice-4': { text: 'Остановиться у тихой лавки, чтобы собраться с мыслями' },
        },
      },
    },
  },

  // Spanish (Español)
  es: {
    title: 'Ecos del Festival de Verano',
    description: 'Regresas al festival de verano de tu ciudad natal y te reconectas con un viejo amigo, descubriendo cómo una sola tarde puede cambiarlo todo.',
    author: 'Generador de Historias IA',
    nodes: {
      'node-1': {
        title: 'Regreso a la Colina de los Faroles',
        narration: 'El tren llega a la estación justo cuando el sol comienza a hundirse bajo el horizonte, pintando el cielo con trazos de ámbar y violeta. Bajas a la plataforma y el familiar aroma de pino y jazmín te envuelve. Han pasado tres años desde que dejaste Millbrook, tres años desde que huiste del desorden que causaste. El Festival de Verano de los Faroles está en pleno apogeo esta noche, y todo el pueblo se reunirá junto al río. Sabes que Alex también estará allí. Tu corazón late con fuerza ante la idea.',
        choices: {
          'choice-1': { text: 'Caminar directamente al recinto del festival' },
          'choice-2': { text: 'Primero tomar el tranquilo camino junto al río' },
        },
      },
      'node-2': {
        title: 'Reunión en la Puerta',
        narration: 'Los faroles de papel se mecen en la suave brisa de la tarde mientras pasas bajo el arco de madera. El recinto está vivo con música y risas, puestos vendiendo maíz asado y algodón de azúcar. Y entonces la ves — tu prima Lena, saludando con entusiasmo. Te atrae hacia un abrazo fuerte. «No puedo creer que realmente hayas vuelto», susurra. «Alex está aquí. Junto al río. ¿Quieres ir ahora, o tomarte un momento?»',
        choices: {
          'choice-3': { text: 'Abrirte paso entre la multitud hacia el río ahora' },
          'choice-4': { text: 'Detenerte en un puesto tranquilo para componerte' },
        },
      },
    },
  },

  // German (Deutsch)
  de: {
    title: 'Echos des Sommerfestes',
    description: 'Du kehrst zum Sommerfest deiner Heimatstadt zurück und findest zu einem alten Freund zurück, entdeckst, wie ein einziger Abend alles verändern kann.',
    author: 'KI Geschichtengenerator',
    nodes: {
      'node-1': {
        title: 'Rückkehr zum Laternenhügel',
        narration: 'Der Zug fährt gerade ein, als die Sonne unter den Horizont sinkt und den Himmel mit Strichen aus Bernstein und Violett malt. Du trittst auf den Bahnsteig, der vertraute Duft von Kiefer und Jasmin umhüllt dich. Es ist drei Jahre her, seit du Millbrook verlassen hast, drei Jahre seit du vor dem Chaos davongelaufen bist, das du angerichtet hast. Das Sommerfest der Laternen ist heute Abend in vollem Gange, und die ganze Stadt wird sich am Fluss versammeln. Du weißt, dass Alex auch dort sein wird. Dein Herz hämmert bei dem Gedanken.',
        choices: {
          'choice-1': { text: 'Direkt zum Festgelände gehen' },
          'choice-2': { text: 'Zuerst den ruhigen Weg am Fluss entlang nehmen' },
        },
      },
      'node-2': {
        title: 'Wiedersehen am Tor',
        narration: 'Papierlaternen schaukeln in der sanften Abendbrise, als du unter dem hölzernen Torbogen hindurchgehst. Das Gelände ist voller Musik und Lachen, Stände verkaufen gegrillten Mais und Zuckerwatte. Und dann siehst du sie — deine Cousine Lena, begeistert winkend. Sie zieht dich in eine feste Umarmung. «Ich kann nicht glauben, dass du wirklich zurückgekommen bist», flüstert sie. «Alex ist hier. Am Fluss. Willst du jetzt gehen oder einen Moment pausieren?»',
        choices: {
          'choice-3': { text: 'Durch die Menge zum Fluss vordringen' },
          'choice-4': { text: 'An einem ruhigen Stand innehalten, um dich zu sammeln' },
        },
      },
    },
  },

  // French (Français)
  fr: {
    title: 'Les Échos du Festival d\'Été',
    description: 'Tu retournes au festival d\'été de ta ville natale et retrouves un vieil ami, découvrant comment une seule soirée peut tout changer.',
    author: 'Générateur de Histoires IA',
    nodes: {
      'node-1': {
        title: 'Retour à la Colline des Lanternes',
        narration: 'Le train entre en gare juste alors que le soleil commence à sombrer sous l\'horizon, peignant le ciel de coups de pinceau d\'ambre et de violet. Tu descends sur le quai, l\'odeur familière de pin et de jasmin t\'envahissant. Cela fait trois ans que tu as quitté Millbrook, trois ans que tu as fui le désordre que tu avais créé. Le Festival d\'Été des Lanternes est en pleine effervescence ce soir, et toute la ville se réunira au bord de la rivière. Tu sais qu\'Alex sera là aussi. Ton cœur bat la chamade à cette pensée.',
        choices: {
          'choice-1': { text: 'Marcher directement vers le festival' },
          'choice-2': { text: 'Prendre d\'abord le chemin tranquille au bord de la rivière' },
        },
      },
      'node-2': {
        title: 'Retrouvailles à l\'Entrée',
        narration: 'Les lanternes en papier se balancent dans la douce brise du soir alors que tu passes sous l\'arche en bois. Le site est animé par la musique et les rires, des stands vendent du maïs grillé et de la barbe à papa. Et puis tu la vois — ta cousine Lena, saluant avec enthousiasme. Elle t\'attire dans une étreinte serrée. «Je n\'arrive pas à croire que tu sois vraiment revenu», chuchote-t-elle. «Alex est là. Au bord de la rivière. Tu veux y aller maintenant, ou prendre un moment?»',
        choices: {
          'choice-3': { text: 'Se frayer un chemin vers la rivière maintenant' },
          'choice-4': { text: 'S\'arrêter à un stand tranquille pour se ressaisir' },
        },
      },
    },
  },

  // Portuguese (Português)
  pt: {
    title: 'Ecos do Festival de Verão',
    description: 'Você retorna ao festival de verão da sua cidade natal e se reconecta com um velho amigo, descobrindo como uma única noite pode mudar tudo.',
    author: 'Gerador de Histórias IA',
    nodes: {
      'node-1': {
        title: 'Retorno à Colina dos Lanterns',
        narration: 'O trem entra na estação quando o sol começa a mergulhar abaixo do horizonte, pintando o céu com traços de âmbar e violeta. Você desce na plataforma, o aroma familiar de pinho e jasmim envolvendo você. Faz três anos desde que deixou Millbrook, três anos desde que fugiu da bagunça que fez. O Festival de Verão dos Lanterns está em pleno andar esta noite, e a cidade toda se reunirá à beira do rio. Você sabe que Alex também estará lá. Seu coração dispara só de pensar.',
        choices: {
          'choice-1': { text: 'Caminhar diretamente para o recinto do festival' },
          'choice-2': { text: 'Primeiro pegar o caminho tranquilo à beira do rio' },
        },
      },
      'node-2': {
        title: 'Reencontro no Portão',
        narration: 'Lanternas de papel balançam na suave brisa da tarde enquanto você passa sob o arco de madeira. O recinto está vivo com música e risadas, barracas vendendo milho grelhado e algodão doce. E então você a vê — sua prima Lena, acenando entusiasmada. Ela te puxa para um abraço apertado. «Não acredito que você realmente voltou», sussurra ela. «Alex está aqui. À beira do rio. Quer ir agora, ou quer um momento?»',
        choices: {
          'choice-3': { text: 'Abrir caminho pela multidão até o rio agora' },
          'choice-4': { text: 'Parar em uma barraca tranquila para se recompor' },
        },
      },
    },
  },

  // Japanese (日本語)
  ja: {
    title: '夏祭りの残響',
    description: '故郷の夏祭りに戻り、昔の友と再会し、一晩ですべてが変わることを発見する。',
    author: 'AIストーリージェネレーター',
    nodes: {
      'node-1': {
        title: '灯籠の丘への帰還',
        narration: '電車が駅に到着すると、太陽が水平線に沈み始め、空を琥珀と紫の筆致で彩っている。ホームに降り立つと、松とジャスミンの懐かしい香りがあなたを包む。ミルブルックを去って三年、自分が引き起こした混乱から逃げ出して三年。今夜、灯籠の夏祭りは真っ盛りで、町中の人々が川辺に集まるだろう。アレックスもそこにいるはずだ。そう思うと心臓が高鳴る。',
        choices: {
          'choice-1': { text: '祭り会場へまっすぐ歩く' },
          'choice-2': { text: '最初に静かな川沿いの道を歩く' },
        },
      },
      'node-2': {
        title: '門での再会',
        narration: '木製の門の下をくぐると、紙の灯籠がそよ風に揺れている。会場は音楽と笑い声に満ち、屋台では焼きトウモロコシや綿菓子が売られている。そしてあなたは彼女に気づく——いとこのリナが、熱心に手を振っている。彼女はあなたを力強く抱きしめる。「本当に帰ってきたなんて信じられない」と彼女は囁く。「アレックスがいるの。川辺に。今行く？それとも少し休む？」',
        choices: {
          'choice-3': { text: '人込みを抜けて今すぐ川辺へ向かう' },
          'choice-4': { text: '静かな屋台で立ち止まり心を落ち着かせる' },
        },
      },
    },
  },

  // Chinese (简体中文)
  zh: {
    title: '夏之祭的回响',
    description: '你回到家乡的夏日祭典，与一位老友重逢，发现一个夜晚如何改变一切。',
    author: 'AI故事生成器',
    nodes: {
      'node-1': {
        title: '重返灯笼山',
        narration: '火车驶入车站时，太阳正开始沉入地平线，用琥珀色和紫色的笔触描绘天空。你踏上站台，松树和茉莉花的熟悉香气扑面而来。离开米尔布鲁克已经三年了，从你逃离自己造成的混乱已经三年了。今晚灯笼夏日祭正值高潮，全镇的人都会聚集在河边。你知道亚历克斯也会在那里。一想到这点，你的心就怦怦直跳。',
        choices: {
          'choice-1': { text: '直接走向祭典会场' },
          'choice-2': { text: '先走安静的河边小路' },
        },
      },
      'node-2': {
        title: '门口的重逢',
        narration: '当你穿过木制拱门时，纸灯笼在轻柔的晚风中摇曳。会场充满音乐和笑声，摊位售卖烤玉米和棉花糖。然后你看到了她——你的表妹莉娜，热情地挥手。她把你拉进紧紧的拥抱。「不敢相信你真的回来了，」她低语。「亚历克斯在这里。在河边。你想现在去，还是先休息一下？」',
        choices: {
          'choice-3': { text: '穿过人群向河边走去' },
          'choice-4': { text: '在安静的摊位停下来整理思绪' },
        },
      },
    },
  },

  // Korean (한국어)
  ko: {
    title: '여름 축제의 메아리',
    description: '고향의 여름 축제로 돌아가 오랜 친구와 재회하며, 어떻게 하룻밤이 모든 것을 바꿀 수 있는지 발견한다.',
    author: 'AI 스토리 생성기',
    nodes: {
      'node-1': {
        title: '등불의 언덕으로의 귀환',
        narration: '기차가 역에 들어오자 해가 지평선 아래로 지기 시작하며 하늘을 호박색과 볼색으로 칠한다. 당신은 플랫폼에 날아서, 소나무와 자스민의 익숙한 향기가 밀려온다. 밀브룩을 떠난 지 삼 년, 당신이 저지른 엉망으로부터 도망친 지 삼 년이 되었다. 오늘 밤 등불 여름 축제가 한창이며, 온 마을 사람들이 강가에 모일 것이다. 당신은 알렉스도 거기 있을 것을 안다. 그 생각에 가슴이 뛴다.',
        choices: {
          'choice-1': { text: '축제장으로 곧장 걸어간다' },
          'choice-2': { text: '먼저 조용한 강가 길을 걷는다' },
        },
      },
      'node-2': {
        title: '축제 문에서의 재회',
        narration: '나무 아치 아래를 지나자 종이 등불이 부드러운 저녁 바람에 흔들린다. 축제장은 음악과 웃음소리로 활기차고, 구운 옥수수와 솜사탕을 파는 노점이 있다. 그리고 당신은 그녀를 본다——사촌 레나가 열정적으로 손을 흔든다. 그녀는 당신을 꼭 끌어안는다. "정말 돌아왔다니 믿을 수 없어," 그녀가 속삭인다. "알렉스가 여기 있어. 강가에. 지금 갈래, 아니면 잠깐 쉴래?"',
        choices: {
          'choice-3': { text: '지금 당장 군중을 뚫고 강가로 간다' },
          'choice-4': { text: '마음을 가라앉히기 위해 조용한 노점에서 멈춘다' },
        },
      },
    },
  },

  // Ukrainian (Українська)
  uk: {
    title: 'Літній Фестиваль: Відлуння',
    description: 'Ви повертаєтеся на літній фестиваль у рідне місто та зустрічаєтеся зі старим другом, відкриваючи, як один вечір може змінити все.',
    author: 'AI Генератор Історій',
    nodes: {
      'node-1': {
        title: 'Повернення на Пагорб Ліхтарів',
        narration: 'Поїзд в\'їжджає на станцію якраз коли сонце починає схилятися до горизонту, розфарбовуючи небо в бурштинові та фіолетові відтінки. Ви виходите на платформу, і знайомий запах сосни та жасмину огортає вас. Минуло три роки відтоді, як ви покинули Мілбрук, три роки відтоді, як ви втекли від безладу, який створили. Сьогодні ввечері Фестиваль Ліхтарів у повному розпалі, і весь місто збереться біля річки. Ви знаєте, що Алекс теж буде там. Серце калатає при думці про це.',
        choices: {
          'choice-1': { text: 'Прямо до площі фестивалю' },
          'choice-2': { text: 'Спочатку пройтися тихою набережною' },
        },
      },
      'node-2': {
        title: 'Зустріч у Вході',
        narration: 'Паперові ліхтарі гойдаються в легкому вечірньому бризі, коли ви проходите під дерев\'яною аркою. Площа наповнена музикою та сміхом, лавки продають смажену кукурудзу та цукрову вату. І ось ви бачите її — вашу кузину Лену, енергійно махає. Вона затягує вас у міцні обійми. «Не можу повірити, що ти повернувся», — шепоче вона. «Алекс тут. Біля річки. Хочеш піти зараз чи спочатку відпочити?»',
        choices: {
          'choice-3': { text: 'Пробратися крізь натовп до річки зараз' },
          'choice-4': { text: 'Зупинитися у тихій лавці, щоб зібратися з думками' },
        },
      },
    },
  },

  // Italian (Italiano)
  it: {
    title: 'Echi del Festival Estivo',
    description: 'Torni al festival estivo della tua città natale e riconnetterti con un vecchio amico, scoprendo come una sola sera può cambiare tutto.',
    author: 'Generatore di Storie AI',
    nodes: {
      'node-1': {
        title: 'Ritorno alla Collina delle Lanterne',
        narration: 'Il treno arriva in stazione proprio mentre il sole inizia a calare sotto l\'orizzonte, dipingendo il cielo con pennellate d\'ambra e viola. Scendi sul marciapiede, il profumo familiare di pino e gelsomino ti avvolge. Sono passati tre anni da quando hai lasciato Millbrook, tre anni da quando sei scappato dal casino che avevi combinato. Il Festival Estivo delle Lanterne è in pieno fermento stasera, e tutta la città si riunirà lungo il fiume. Sai che anche Alex sarà lì. Il cuore ti batte forte al pensiero.',
        choices: {
          'choice-1': { text: 'Camminare direttamente verso il festival' },
          'choice-2': { text: 'Prendere prima il sentiero tranquillo lungo il fiume' },
        },
      },
      'node-2': {
        title: 'Riunione all\'Ingresso',
        narration: 'Le lanterne di carta dondolano nella dolce brezza della sera mentre passi sotto l\'arco di legno. Il luogo è vivo di musica e risate, bancarelle vendono mais alla griglia e zucchero filato. E poi la vedi — tua cugina Lena, che saluta entusiasta. Ti attira in un abbraccio stretto. «Non riesco a credere che tu sia davvero tornato», sussurra. «Alex è qui. Lungo il fiume. Vuoi andare ora o prenderti un momento?»',
        choices: {
          'choice-3': { text: 'Farsi strada tra la folla verso il fiume ora' },
          'choice-4': { text: 'Fermarsi a una bancarella tranquilla per riprendersi' },
        },
      },
    },
  },

  // Arabic (العربية)
  ar: {
    title: 'صدى مهرجان الصيف',
    description: 'تعود إلى مهرجان الصيف في مسقط رأسك وتتواصل مع صديق قديم، لاكتشاف كيف يمكن لمساء واحد أن يغير كل شيء.',
    author: 'مولد القصص الذكاء الاصطناعي',
    nodes: {
      'node-1': {
        title: 'العودة إلى تل الفوانيس',
        narration: 'يدخل القطار المحطة تمامًا عندما تبدأ الشمس في الغروب تحت الأفق، لتلون السماء بلمسات من الكهرمان والبنفسج. تنزل على الرصيف، فيفاجئك العبير المألوف للصنوبر والياسمين. مرت ثلاث سنوات منذ أن غادرت ميلبروك، ثلاث سنوات منذ أن هربت من الفوضى التي أحدثتها. مهرجان فوانيس الصيف في أوجه الليلة، وستجتمع المدينة بأكملها عند النهر. تعلم أن أليكس سيكون هناك أيضًا. يدق قلبك بقوة عند التفكير في ذلك.',
        choices: {
          'choice-1': { text: 'المشي مباشرة إلى أرض المهرجان' },
          'choice-2': { text: 'سلك طريق النهر الهادئ أولاً' },
        },
      },
      'node-2': {
        title: 'لقاء عند البوابة',
        narration: 'تتأرجح الفوانيس الورقية في نسيم المساء اللطيف بينما تمر تحت القوس الخشبي. ت throbs المنطقة بالموسيقى والضحك، وتبيع الأكشاك الذرة المشوية وغزل البنات. وعندها تراها — ابنة عمتك لينا، تلوح بحماس. تجرك إلى عناق محكم. «لا أصدق أنك عدت حقًا،» تهمس. «أليكس هنا. عند النهر. هل تريد الذهاب الآن، أو أخذ لحظة؟»',
        choices: {
          'choice-3': { text: 'الانطلاق عبر الحشد نحو النهر الآن' },
          'choice-4': { text: 'التوقف عند كشك هادئ لتجميع نفسك' },
        },
      },
    },
  },

  // Hindi (हिन्दी)
  hi: {
    title: 'ग्रीष्मोत्सव की गूंज',
    description: 'आप अपने गृहनगर के ग्रीष्मोत्सव में लौटते हैं और एक पुराने दोस्त से पुनः जुड़ते हैं, यह discovering कि कैसे एक शाम सब कुछ बदल सकती है।',
    author: 'AI कहानी जनरेटर',
    nodes: {
      'node-1': {
        title: 'लालटेन हिल पर वापसी',
        narration: 'ट्रेन स्टेशन पर पहुंचती है ठीक उसी समय जब सूरज क्षितिज के नीचे डूबने लगता है, आकाश को अंबर और बैंगनी रंगों से रंगता हुआ। आप प्लेटफॉर्म पर उतरते हैं, और चीड़ और चमेली की परिचित सुगंध आपको घेर लेती है। मिलब्रुक छोड़े हुए तीन साल हो गए हैं, उस गड़बड़ी से भागे हुए जो आपने की थी। आज रात लालटेन ग्रीष्मोत्सव अपने चरम पर है, और पूरी कस्बा नदी के किनारे इकट्ठा होगी। आप जानते हैं कि एलेक्स भी वहां होगा। इस विचार से आपका दिल धड़कता है।',
        choices: {
          'choice-1': { text: 'सीधे उत्सव स्थल की ओर चलें' },
          'choice-2': { text: 'पहले शांत नदी किनारे का रास्ता लें' },
        },
      },
      'node-2': {
        title: 'प्रवेश द्वार पर मुलाकात',
        narration: 'जैसे ही आप लकड़ी के मेहराब से गुजरते हैं, कागज़ी लालटेनें शाम की हल्की हवा में झूलती हैं। मैदान संगीत और हंसी से जीवंत है, स्टॉल भुने मक्के और कैंडी फ्लॉस बेच रहे हैं। और फिर आप उसे देखते हैं — आपकी कज़िन लीना, उत्साह से हाथ हिला रही है। वह आपको कसकर गले लगाती है। «मुझे विश्वास नहीं हो रहा कि तुम सच में वापस आ गए,» वह फुसफुसाती है। «एलेक्स यहाँ है। नदी के किनारे। अभी जाना चाहोगे, या एक पल लेना चाहोगे?»',
        choices: {
          'choice-3': { text: 'अभी भीड़ से होकर नदी की ओर जाएं' },
          'choice-4': { text: 'खुद को संभालने के लिए एक शांत स्टॉल पर रुकें' },
        },
      },
    },
  },

  // Dutch (Nederlands)
  nl: {
    title: 'Echo\'s van het Zomerfestival',
    description: 'Je keert terug naar het zomerfestival van je geboortestad en herenigt met een oude vriend, waarbij je ontdekt hoe één avond alles kan veranderen.',
    author: 'AI Verhalengenerator',
    nodes: {
      'node-1': {
        title: 'Terugkeer naar Lantaarnheuvel',
        narration: 'De trein arriveert op het station net als de zon onder de horizon begint te zakken, de lucht beschilderend met strepen van barnsteen en violet. Je stapt op het perron, de vertrouwde geur van dennen en jasmijn omhult je. Het is drie jaar geleden sinds je Millbrook verliet, drie jaar sinds je vluchtte voor de rotzooi die je had gemaakt. Het Zomerfestival van de Lantaarns is vanavond in volle gang, en de hele stad zal zich bij de rivier verzamelen. Je weet dat Alex er ook zal zijn. Je hart klopt bij de gedachte.',
        choices: {
          'choice-1': { text: 'Direct naar het festivalterrein lopen' },
          'choice-2': { text: 'Eerst het rustige pad langs de rivier nemen' },
        },
      },
      'node-2': {
        title: 'Hereniging bij de Poort',
        narration: 'Papieren lantaarns zwaaien in de zachte avondbries terwijl je onder de houten boog door loopt. Het terrein is levendig met muziek en gelach, kraampjes verkopen gegrilde maïs en suikerspin. En dan zie je haar — je nicht Lena, enthousiast zwaaiend. Ze trekt je in een stevige omhelzing. «Ik kan niet geloven dat je echt terug bent gekomen,» fluistert ze. «Alex is hier. Bij de rivier. Wil je nu gaan, of wil je even pauzeren?»',
        choices: {
          'choice-3': { text: 'Door de menigte naar de rivier dringen' },
          'choice-4': { text: 'Bij een rustig kraampje stoppen om jezelf te verzamelen' },
        },
      },
    },
  },

  // Polish (Polski)
  pl: {
    title: 'Echa Letniego Festiwalu',
    description: 'Wracasz na letni festiwal w swoim rodzinnym mieście i ponownie łączysz się ze starym przyjacielem, odkrywając, jak jeden wieczór może zmienić wszystko.',
    author: 'Generator Historii AI',
    nodes: {
      'node-1': {
        title: 'Powrót na Wzgórze Latarni',
        narration: 'Pociąg wjeżdża na stację właśnie gdy słońce zaczyna zachodzić za horyzont, malując niebo pociągnięciami bursztynu i fioletu. Wysiadasz na peron, znajomy zapach sosny i jaśminu otula cię. Minęły trzy lata od kiedy opuściłeś Millbrook, trzy lata od kiedy uciekłeś od bałaganu, który narobiłeś. Letni Festiwal Latarni jest dziś wieczorem w pełnym rozkwicie, i całe miasto zbierze się nad rzeką. Wiesz, że Alex też tam będzie. Serce bije ci na myśl o tym.',
        choices: {
          'choice-1': { text: 'Pójść bezpośrednio na teren festiwalu' },
          'choice-2': { text: 'Najpierw wziąć spokojną ścieżkę nad rzeką' },
        },
      },
      'node-2': {
        title: 'Spotkanie przy Bramie',
        narration: 'Papierowe latarnie kołyszą się w delikatnym wieczornym powietrzu, gdy przechodzisz pod drewnianym łukiem. Teren tętni muzyką i śmiechem, stoiska sprzedają grillowaną kukurydzę i watę cukrową. I wtedy ją widzisz — swoją kuzynkę Lenę, energicznie machającą. Przytula cię mocno. «Nie mogę uwierzyć, że naprawdę wróciłeś», szepcze. «Alex jest tutaj. Nad rzeką. Chcesz iść teraz, czy chcesz chwilę odpocząć?»',
        choices: {
          'choice-3': { text: 'Przepchnąć się przez tłum do rzeki teraz' },
          'choice-4': { text: 'Zatrzymać się przy cichym stoisku, by się ogarnąć' },
        },
      },
    },
  },

  // Turkish (Türkçe)
  tr: {
    title: 'Yaz Festivali Yankıları',
    description: 'Doğum yerinin yaz festivaline dönüyorsun ve eski bir arkadaşınla yeniden bağlantı kurarak, tek bir akşamın her şeyi nasıl değiştirebileceğini keşfediyorsun.',
    author: 'AI Hikaye Oluşturucu',
    nodes: {
      'node-1': {
        title: 'Fener Tepesi\'ne Dönüş',
        narration: 'Tren, güneş ufuğun altına batmaya başlarken istasyona giriyor, gökyüzünü kehribar ve menekşe dokunuşlarıyla boyuyor. Perona adım atıyorsun, çam ve yasemin tanıdık kokusu seni sarıyor. Millbrook\'tan ayrılalı üç yıl oldu, yarattığın karmasadan kaçalı üç yıl oldu. Fenerler Yaz Festivali bu gece tam gaz devam ediyor ve tüm kasaba nehir kenarında toplanacak. Alex\'in de orada olacağını biliyorsun. Bu düşünce kalbini hızla çarptırıyor.',
        choices: {
          'choice-1': { text: 'Doğrudan festival alanına yürü' },
          'choice-2': { text: 'Önce nehir kenarındaki sessiz yolu al' },
        },
      },
      'node-2': {
        title: 'Kapıda Buluşma',
        narration: 'Ahşap kemerin altından geçerken kağıt fenerler hafif akşam rüzgarında sallanıyor. Alan müzik ve kahkaha ile canlı, tezgahlar ızgara mısır ve pamuk şeker satıyor. Ve sonra onu görüyorsun — kuzenin Lena, coşkuyla el sallıyor. Seni sıkı bir kucaklamaya çekiyor. «Gerçekten döndüğüne inanamıyorum,» diye fısıldıyor. «Alex burada. Nehir kenarında. Şimdi gitmek ister misin, yoksa biraz mola vermek ister misin?»',
        choices: {
          'choice-3': { text: 'Şimdi kalabalığın arasından nehre doğru ilerle' },
          'choice-4': { text: 'Kendini toparlamak için sessiz bir tezgahta dur' },
        },
      },
    },
  },
};
