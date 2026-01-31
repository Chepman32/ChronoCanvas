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

export const glassKeyProtocolTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English (Original)
  en: {
    title: 'The Glass Key Protocol',
    description: 'A high-noir mystery where you hunt the truth through rain-slick streets, encrypted archives, and a locked-room death that keeps rewriting itself.',
    author: 'AI Story Generator',
    nodes: {
      'node-1': {
        title: 'Rain on Glass',
        narration: 'You stand under the awning of the Glassward Hotel while rain needles the street and turns neon into bleeding watercolor. Inside, someone important is dead, and the building is already trying to pretend it never happened. The concierge told dispatch it was a heart attack; the coroner called it a locked-room anomaly; your chief called it a favor you cannot refuse. You taste ozone from a nearby transformer and the bitter coffee you should not have skipped.',
        choices: {
          'choice-1': { text: 'Enter through the humming service corridor' },
          'choice-2': { text: 'Walk in openly, badge bright in hand' },
        },
      },
      'node-2': {
        title: 'Back-of-House Whispers',
        narration: 'The service corridor smells of bleach, wet wool, and fried oil seeping from the kitchen vents. Your shoes squeak on tile as you pass carts draped with white sheets. A dishwasher pauses, hands red and raw, and watches you without blinking. Above you, pipes tick like a slow metronome. A door marked STAFF ONLY is propped open with a fire extinguisher.',
        choices: {
          'choice-3': { text: 'Question the porter about the keypad closet' },
          'choice-4': { text: 'Slip upstairs before anyone can rehearse' },
        },
      },
    },
  },

  // Russian (Русский)
  ru: {
    title: 'Протокол Стеклянного Ключа',
    description: 'Нуарная тайна высшего класса, где вы охотитесь за правдой по мокрым от дождя улицам, среди зашифрованных архивов и смерти в запертой комнате, которая постоянно переписывает сама себя.',
    author: 'ИИ Генератор Историй',
    nodes: {
      'node-1': {
        title: 'Дождь по Стеклу',
        narration: 'Вы стоите под навесом отеля Глассворд, пока дождь иглами стучит по улице, превращая неон в кровоточащую акварель. Внутри кто-то важный мёртв, и здание уже пытается притвориться, что ничего не случилось. Консьерж сказал диспетчеру, что это сердечный приступ; коронер назвал это аномалией запертой комнаты; ваш начальник назвал это одолжением, которое вы не можете отказаться.',
        choices: {
          'choice-1': { text: 'Войти через гудящий служебный коридор' },
          'choice-2': { text: 'Войти открыто, с ярким значком в руке' },
        },
      },
      'node-2': {
        title: 'Шёпоты Закулисья',
        narration: 'Служебный коридор пахнет отбеливателем, мокрой шерстью и жареным маслом, сочащимся из кухонных вентиляционных отверстий. Ваши туфли скрипят на плитке, когда вы проходите мимо тележек, драпированных белыми простынями. Посудомойщик останавливается, руки красные и сырые, и смотрит на вас, не моргая. Над вами трубы тикают как медленный метроном.',
        choices: {
          'choice-3': { text: 'Расспросить портье о шкафу с кодовой панелью' },
          'choice-4': { text: 'Проскользнуть наверх, пока никто не заметил' },
        },
      },
    },
  },

  // Spanish (Español)
  es: {
    title: 'El Protocolo de la Llave de Cristal',
    description: 'Un misterio noir de alto nivel donde cazas la verdad a través de calles resbaladizas por la lluvia, archivos encriptados y una muerte en habitación cerrada que sigue reescribiéndose.',
    author: 'Generador de Historias IA',
    nodes: {
      'node-1': {
        title: 'Lluvia sobre Cristal',
        narration: 'Estás bajo el toldo del Hotel Glassward mientras la lluvia aguja la calle y convierte el neón en acuarela sangrante. Dentro, alguien importante está muerto, y el edificio ya intenta fingir que nunca pasó. El conserje le dijo a central que fue un ataque cardíaco; el forense lo llamó una anomalía de cuarto cerrado; tu jefe lo llamó un favor que no puedes rechazar.',
        choices: {
          'choice-1': { text: 'Entrar por el corredor de servicio zumbante' },
          'choice-2': { text: 'Entrar abiertamente, placa brillante en mano' },
        },
      },
      'node-2': {
        title: 'Susurros Tras Bambalinas',
        narration: 'El corredor de servicio huele a blanqueador, lana mojada y aceite frito que se filtra de las ventilaciones de la cocina. Tus zapatos chirrian en el azulejo mientras pasas carros cubiertos con sábanas blancas. Un lavaplatos se detiene, manos rojas y en carne viva, y te mira sin parpadear. Sobre ti, las tuberías tictacan como un metrónomo lento.',
        choices: {
          'choice-3': { text: 'Cuestionar al portero sobre el closet con teclado' },
          'choice-4': { text: 'Deslizarte arriba antes de que nadie pueda ensayar' },
        },
      },
    },
  },

  // German (Deutsch)
  de: {
    title: 'Das Glas-Schlüssel-Protokoll',
    description: 'Ein High-Noir-Mystery, bei dem du die Wahrheit durch regennasse Straßen, verschlüsselte Archive und einen Tod in verschlossenem Raum jagst, der sich ständig neu schreibt.',
    author: 'KI Geschichtengenerator',
    nodes: {
      'node-1': {
        title: 'Regen auf Glas',
        narration: 'Du stehst unter der Markise des Glassward Hotels, während der Regen die Straße nadelsticht und Neon zu blutender Aquarellfarbe macht. Drinnen ist jemand Wichtiges tot, und das Gebäude versucht bereits so zu tun, als wäre es nie passiert. Der Concierge sagte der Zentrale, es sei ein Herzinfarkt gewesen; der Gerichtsmediziner nannte es eine verschlossene Raum-Anomalie; dein Chef nannte es einen Gefallen, den du nicht ablehnen kannst.',
        choices: {
          'choice-1': { text: 'Durch den summenden Servicekorridor eintreten' },
          'choice-2': { text: 'Offen eintreten, Abzeichen hell in der Hand' },
        },
      },
      'node-2': {
        title: 'Geflüster hinter den Kulissen',
        narration: 'Der Servicekorridor riecht nach Bleichmittel, nasser Wolle und Bratöl, das aus den Küchenlüftungen sickert. Deine Schuhe quietschen auf den Fliesen, als du an Wägen vorbeikommst, die mit weißen Laken drapiert sind. Ein Spüler hält inne, Hände rot und rau, und beobachtet dich, ohne zu blinken. Über dir ticken Rohre wie ein langsames Metronom.',
        choices: {
          'choice-3': { text: 'Den Portier über den Schrank mit Tastenfeld befragen' },
          'choice-4': { text: 'Nach oben schlüpfen, bevor jemand üben kann' },
        },
      },
    },
  },

  // French (Français)
  fr: {
    title: 'Le Protocole de la Clé de Verre',
    description: 'Un mystère noir de haut niveau où tu chasses la vérité à travers des rues glissantes de pluie, des archives cryptées et une mort en chambre close qui se réécrit constamment.',
    author: 'Générateur de Histoires IA',
    nodes: {
      'node-1': {
        title: 'Pluie sur Verre',
        narration: 'Tu te tiens sous l\'auvent de l\'Hôtel Glassward tandis que la pluie aiguille la rue et transforme le néon en aquarelle saignante. À l\'intérieur, quelqu\'un d\'important est mort, et le bâtiment essaie déjà de prétendre que cela n\'est jamais arrivé. Le concierge a dit au dispatch que c\'était une crise cardiaque; le coroner a appelé cela une anomalie de chambre close; ton chef l\'a appelé une faveur que tu ne peux pas refuser.',
        choices: {
          'choice-1': { text: 'Entrer par le couloir de service bourdonnant' },
          'choice-2': { text: 'Entrer ouvertement, insigne brillant à la main' },
        },
      },
      'node-2': {
        title: 'Murmures en Coulisses',
        narration: 'Le couloir de service sent l\'eau de Javel, la laine mouillée et l\'huile frite qui suinte des ventilations de cuisine. Tes chaussures grincent sur le carrelage alors que tu passes des chariots drapés de draps blancs. Un plongeur s\'arrête, mains rouges et à vif, et te regarde sans ciller. Au-dessus de toi, les tuyaux tictaquent comme un métronome lent.',
        choices: {
          'choice-3': { text: 'Questionner le portier sur le placard à clavier' },
          'choice-4': { text: 'Se glisser à l\'étage avant que quiconque puisse répéter' },
        },
      },
    },
  },

  // Portuguese (Português)
  pt: {
    title: 'O Protocolo da Chave de Vidro',
    description: 'Um mistério noir de alto nível onde você caça a verdade através de ruas escorregadias de chuva, arquivos criptografados e uma morte em quarto fechado que continua se reescrevendo.',
    author: 'Gerador de Histórias IA',
    nodes: {
      'node-1': {
        title: 'Chuva no Vidro',
        narration: 'Você está sob o toldo do Hotel Glassward enquanto a chuva agulha a rua e transforma o neon em aquarela sangrante. Dentro, alguém importante está morto, e o prédio já tenta fingir que nunca aconteceu. O concierge disse ao despacho que foi um ataque cardíaco; o legista chamou de anomalia de quarto fechado; seu chefe chamou de favor que você não pode recusar.',
        choices: {
          'choice-1': { text: 'Entrar pelo corredor de serviço zumbindo' },
          'choice-2': { text: 'Entrar abertamente, distintivo brilhante na mão' },
        },
      },
      'node-2': {
        title: 'Sussurros nos Bastidores',
        narration: 'O corredor de serviço cheira a água sanitária, lã molhada e óleo frito vazando das ventilações da cozinha. Seus sapatos rangem no azulejo enquanto você passa carros cobertos com lençóis brancos. Um lavador de pratos para, mãos vermelhas e cruas, e o observa sem piscar. Acima de você, tubos fazem tique-taque como um metrônomo lento.',
        choices: {
          'choice-3': { text: 'Questionar o porteiro sobre o armário com teclado' },
          'choice-4': { text: 'Esgueirar-se para cima antes que alguém possa ensaiar' },
        },
      },
    },
  },

  // Japanese (日本語)
  ja: {
    title: 'ガラスの鍵のプロトコル',
    description: '雨に濡れた通り、暗号化されたアーカイブ、そして自分自身を書き換え続ける密室の死を通して真実を追うハイ・ノワール・ミステリー。',
    author: 'AIストーリージェネレーター',
    nodes: {
      'node-1': {
        title: 'ガラスに降る雨',
        narration: '雨が通りを針のように突き刺し、ネオンを出血する水彩画に変えながら、グラスワード・ホテルの軒下に立つ。中では重要な誰かが死んでおり、建物はすでに何も起こらなかったふりをしようとしている。コンシェルジュは派遣に心臓発作だと言った；検死官は密室の異常と呼んだ；上司は断れないお願いだと言った。',
        choices: {
          'choice-1': { text: 'うなり声を上げるサービス廊下から入る' },
          'choice-2': { text: 'バッジを手に、堂々と入る' },
        },
      },
      'node-2': {
        title: '舞台裏の囁き',
        narration: 'サービス廊下は漂白剤、濡れた羊毛、キッチンの換気口からしみ出る揚げ油の匂いがする。白いシーツを被ったカートを通り過ぎると、靴がタイル床でキーキー鳴る。皿洗いが止まり、赤く荒れた手で、まばたきもせずにあなたを見つめる。頭上では、パイプが遅いメトロノームのようにカチカチと音を立てる。',
        choices: {
          'choice-3': { text: 'キーパッド付きクローゼットについてポーターに尋ねる' },
          'choice-4': { text: '誰かに気づかれる前に上へ忍び込む' },
        },
      },
    },
  },

  // Chinese (简体中文)
  zh: {
    title: '玻璃钥匙协议',
    description: '一部高级黑色悬疑剧，你在雨滑的街道、加密的档案和不断自我改写的密室死亡中追寻真相。',
    author: 'AI故事生成器',
    nodes: {
      'node-1': {
        title: '玻璃上的雨',
        narration: '你站在格拉斯沃德酒店的遮阳篷下，雨像针一样刺向街道，将霓虹灯变成流血的水彩画。里面，某个重要的人死了，而建筑物已经在试图假装这从未发生过。门房告诉调度这是心脏病发作；验尸官称之为密室异常；你的上司称之为你无法拒绝的人情。',
        choices: {
          'choice-1': { text: '从嗡嗡作响的服务走廊进入' },
          'choice-2': { text: '手持闪亮的徽章，公开走入' },
        },
      },
      'node-2': {
        title: '后台的低语',
        narration: '服务走廊闻起来有漂白剂、湿羊毛和从厨房通风口渗出的煎炸油的味道。当你经过覆盖着白布的推车时，鞋子在瓷砖上发出吱吱声。一个洗碗工停下来，双手红肿粗糙，一眨不眨地看着你。在你上方，管道像缓慢节拍器一样滴答作响。',
        choices: {
          'choice-3': { text: '询问门房关于密码柜的事' },
          'choice-4': { text: '在任何人反应过来之前溜上楼' },
        },
      },
    },
  },

  // Korean (한국어)
  ko: {
    title: '유리 열쇠 프로토콜',
    description: '비에 젖은 거리, 암호화된 기록 보관소, 그리고 계속해서 자신을 다시 쓰는 밀실의 죽음을 통해 진실을 추적하는 하이 누아르 미스터리.',
    author: 'AI 스토리 생성기',
    nodes: {
      'node-1': {
        title: '유리 위의 비',
        narration: '당신은 글래스워드 호텔의 어닝 아래 서 있고, 비가 거리를 바늘처럼 찌륾며 네온을 출혈하는 수채화로 만든다. 안에는 중요한 누군가가 죽어 있고, 건축물은 이미 일어나지 않은 척하려 한다. concierge는 dispatch에게 심장 마비라고 말했고; 검시관은 밀실 이상현상이라고 불렀고; 당신의 상사는 거절할 수 없는 부탁이라고 불렀다. 근처 변압기에서 오존 맛과 걸러야 했던 쓴 커피 맛이 난다.',
        choices: {
          'choice-1': { text: '윙윙거리는 서비스 복도로 들어간다' },
          'choice-2': { text: '배지를 손에 들고 공공연하게 걸어 들어간다' },
        },
      },
      'node-2': {
        title: '묵후의 속삭임',
        narration: '서비스 복도는 표백제, 젖은 양털, 주방 환기구에서 샘솟는 기름 냄새가 난다. 흰 시트로 덮인 카트를 지나갈 때 신발이 타일에서 삐걱인다. 설거지 담당이 멈춰 서서, 손은 붉고 거칠며, 눈도 깜빡이지 않고 당신을 본다. 머리 위에서 파이프가 느린 메트로놈처럼 딱딱 소리를 낸다. "직원 전용"이라고 표시된 문이 소화기로 받쳐져 열린 상태다.',
        choices: {
          'choice-3': { text: '키패드가 있는 옷장에 대해 문지기에게 묻는다' },
          'choice-4': { text: '누구도 반응할 수 없기 전에 위로 빠져나간다' },
        },
      },
    },
  },

  // Ukrainian (Українська)
  uk: {
    title: 'Протокол Скляного Ключа',
    description: 'Нуарна загадка вищого класу, де ви полюєте на правду крізь мокрі від дощу вулиці, зашифровані архіви та смерть у зачиненій кімнаті, яка постійно переписує сама себе.',
    author: 'AI Генератор Історій',
    nodes: {
      'node-1': {
        title: 'Дощ по Склу',
        narration: 'Ви стоїте під навісом готелю Ґлассворд, поки дощ голками стукає по вулиці, перетворюючи неон на кровоточиву акварель. Всередині хтось важливий мертвий, і будівля вже намагається вдати, що нічого не сталося. Консьєрж сказав диспетчеру, що це серцевий напад; коронер назвав це аномалією зачиненої кімнати; ваш начальник назвав це послугою, яку ви не можете відмовитися.',
        choices: {
          'choice-1': { text: 'Увійти через гудячий службовий коридор' },
          'choice-2': { text: 'Увійти відкрито, з яскравим значком у руці' },
        },
      },
      'node-2': {
        title: 'Шепіт Закулісся',
        narration: 'Службовий коридор пахне відбілювачем, мокрою вовною та смаженою олією, що сочиться з кухонних вентиляційних отворів. Ваші туфлі скриплять на плитці, коли ви проходите повз візки, задрапіровані білими простирадлами. Посудомийник зупиняється, руки червоні і сирі, і дивиться на вас, не моргаючи. Над вами труби тикають як повільний метроном.',
        choices: {
          'choice-3': { text: 'Розпитати портьє про шафу з кодовою панеллю' },
          'choice-4': { text: 'Проскочити нагору, поки ніхто не помітив' },
        },
      },
    },
  },

  // Italian (Italiano)
  it: {
    title: 'Il Protocollo della Chiave di Vetro',
    description: 'Un mystery noir di alto livello dove cacci la verità attraverso strade scivolose di pioggia, archivi criptati e una morte in camera chiusa che continua a riscriversi.',
    author: 'Generatore di Storie AI',
    nodes: {
      'node-1': {
        title: 'Pioggia sul Vetro',
        narration: 'Ti trovi sotto la pensilina dell\'Hotel Glassward mentre la pioggia punge la strada e trasforma il neon in acquerello sanguinante. Dentro, qualcuno di importante è morto, e l\'edificio sta già cercando di fingere che non sia mai successo. Il concierge ha detto alla centrale che era un attacco cardiaco; il coroner lo ha chiamato un\'anomalia di camera chiusa; il tuo capo lo ha chiamato un favore che non puoi rifiutare.',
        choices: {
          'choice-1': { text: 'Entrare attraverso il corridoio di servizio ronzante' },
          'choice-2': { text: 'Entrare apertamente, distintivo luminoso in mano' },
        },
      },
      'node-2': {
        title: 'Sussurri Dietro le Quinte',
        narration: 'Il corridoio di servizio puzza di candeggina, lana bagnata e olio fritto che cola dalle ventilazioni della cucina. Le tue scarpe scricchiolano sulle piastrelle mentre passi carrelli drappeggiati con lenzuola bianche. Un lavapiatti si ferma, mani rosse e screpolate, e ti guarda senza battere ciglio. Sopra di te, le tubature ticchettano come un metronomo lento.',
        choices: {
          'choice-3': { text: 'Interrogare il portiere sull\'armadio con tastierino' },
          'choice-4': { text: 'Sgusciare di sopra prima che qualcuno possa reagire' },
        },
      },
    },
  },

  // Arabic (العربية)
  ar: {
    title: 'بروتوكول المفتاح الزجاجي',
    description: 'لغز noir راقٍ حيث تطارد الحقيقة عبر شوارع زلقة بالمطر، ومحفوظات مشفرة، وموت في غرفة مغلقة يعيد كتابة نفسه باستمرار.',
    author: 'مولد القصص الذكاء الاصطناعي',
    nodes: {
      'node-1': {
        title: 'مطر على الزجاج',
        narration: 'تقف تحت مظلة فندق غلاسوارد بينما المطر يغرز الإبر في الشارع ويحول النيون إلى لوحة مائية نازفة. بالداخل، شخص مهم ميت، والمبنى يحاول بالفعل التظاهر بأنه لم يحدث أبداً. أخبر البواب غرفة التحكم أنها نوبة قلبية؛ أسمى الطبيب الشرعيها "شذوذ غرفة مغلقة"؛ أسمى رئيسك "معروفاً لا يمكنك رفضه".',
        choices: {
          'choice-1': { text: 'الدخول عبر ممر الخدمة الطنين' },
          'choice-2': { text: 'الدخول علناً، الشارة لامعة في اليد' },
        },
      },
      'node-2': {
        title: 'همسات خلف الكواليس',
        narration: 'ممر الخدمة تنبعث منه رائحة المبيض، والصوف الرطب، والزيت المقلي المتسرب من تهوية المطبخ. حذاؤك يصفق على البلاط بينما تمر بعربات مغطاة بأشرطة بيضاء. غسّال صحون يتوقف، يداه حمراء وخشنة، ويراقبك دون رمشة. فوقك، الأنابيب تُقر كمترونوم بطيء.',
        choices: {
          'choice-3': { text: 'الاستجواب عن خزانة لوحة المفاتيح' },
          'choice-4': { text: 'التسلل إلى الأعلى قبل أن يتمكن أحد من الاستعداد' },
        },
      },
    },
  },

  // Hindi (हिन्दी)
  hi: {
    title: 'कांच की चाबी का प्रोटोकॉल',
    description: 'एक उच्च-स्तरीय न्वार रहस्य जहाँ आप बारिश से फिसलन भरी सड़कों, एन्क्रिप्टेड अभिलेखागार, और एक बंद कमरे की मौत के माध्यम से सच्चाई का शिकार करते हैं जो खुद को बार-बार फिर से लिखती है।',
    author: 'AI कहानी जनरेटर',
    nodes: {
      'node-1': {
        title: 'कांच पर बारिश',
        narration: 'आप ग्लासवर्ड होटल की छतरी के नीचे खड़े हैं जबकि बारिश सड़क को सुइयों से चुभो रही है और नियॉन को खून बहते हुए वॉटरकलर में बदल रही है। अंदर, कोई महत्वपूर्ण व्यक्ति मर चुका है, और इमारत पहले से ही यह दिखाने की कोशिश कर रही है कि यह कभी नहीं हुआ। कंसीयर्ज ने डिस्पैच को बताया कि यह दिल का दौरा था; मेडिकल जांचकर्ता ने इसे एक बंद कमरे की असामान्यता कहा; आपके मुखिया ने इसे एक एहसान कहा जिसे आप मना नहीं कर सकते।',
        choices: {
          'choice-1': { text: 'गूंजते हुए सेवा गलियारे से प्रवेश करें' },
          'choice-2': { text: 'खुले तौर पर प्रवेश करें, हाथ में चमकता बैज' },
        },
      },
      'node-2': {
        title: 'पर्दे के पीछे की फुसफुसाहट',
        narration: 'सेवा गलियारे में ब्लीच, गीली ऊन, और रसोई के वेंटिलेशन से रिसते तले हुए तेल की गंध आती है। जब आप सफेद चादरों से ढके ठेलों के पास से गुजरते हैं तो आपके जूते टाइलों पर चरमराते हैं। एक बर्तन मांजने वाला रुकता है, हाथ लाल और खुरदुरे हैं, और आपको बिना पलक झपकाए देखता है। आपके ऊपर, पाइप एक धीमे मेट्रोनोम की तरह टिकटिक करते हैं।',
        choices: {
          'choice-3': { text: 'कीपैड वाले क्लोजेट के बारे में पोर्टर से पूछताछ करें' },
          'choice-4': { text: 'किसी के तैयार होने से पहले ऊपर फिसल जाएँ' },
        },
      },
    },
  },

  // Dutch (Nederlands)
  nl: {
    title: 'Het Glas-Sleutel Protocol',
    description: 'Een hoogstaand noir mysterie waarin je de waarheid jaagt door regengladdige straten, versleutelde archieven en een gesloten-kamer dood die zichzelf blijft herschrijven.',
    author: 'AI Verhalengenerator',
    nodes: {
      'node-1': {
        title: 'Regen op Glas',
        narration: 'Je staat onder het afdak van het Glassward Hotel terwijl de regen de straat als naalden prikt en neon in bloedende aquarel verandert. Binnen is iemand belangrijk dood, en het gebouw probeert al te doen alsof het nooit is gebeurd. De concierge vertelde de meldkamer dat het een hartaanval was; de lijkschouwer noemde het een gesloten-kamer anomalie; je baas noemde het een gunst die je niet kunt weigeren.',
        choices: {
          'choice-1': { text: 'Binnenkomen via het zoemende servicepad' },
          'choice-2': { text: 'Openlijk binnenkomen, badge fel in de hand' },
        },
      },
      'node-2': {
        title: 'Achter-de-Schermen Geflüster',
        narration: 'Het servicepad ruikt naar bleekmiddel, natte wol en gebakken olie die uit de keukenventilaties sijpelt. Je schoenen piepen op de tegels terwijl je karren passeert die gedrapeerd zijn met witte lakens. Een afwasser stopt, handen rood en rauw, en kijkt naar je zonder te knipperen. Boven je tikken de pijpen als een langzame metronoom.',
        choices: {
          'choice-3': { text: 'De portier ondervragen over de kast met toetsenpaneel' },
          'choice-4': { text: 'Naar boven glippen voordat iemand kan reageren' },
        },
      },
    },
  },

  // Polish (Polski)
  pl: {
    title: 'Protokół Szklanego Klucza',
    description: 'Mroczna zagadka noir, w której polujesz na prawdę przez zalane deszczem ulice, zaszyfrowane archiwa i śmierć w zamkniętym pokoju, która ciągle się przepisuje.',
    author: 'Generator Historii AI',
    nodes: {
      'node-1': {
        title: 'Deszcz na Szkło',
        narration: 'Stoisz pod daszkiem hotelu Glassward, podczas gdy deszcz igłami wbija się w ulicę, zamieniając neon w krwawiącą akwarelę. Wewnątrz ktoś ważny nie żyje, a budynek już próbuje udawać, że nigdy się nie stało. Konsjerż powiedział dyspozytorni, że to był zawał; koroner nazwał to anomalią zamkniętego pokoju; twój szef nazwał to przysługą, której nie możesz odmówić.',
        choices: {
          'choice-1': { text: 'Wejść przez brzęczący korytarz serwisowy' },
          'choice-2': { text: 'Wejść otwarcie, odznaka jasno w ręku' },
        },
      },
      'node-2': {
        title: 'Szepty za Kulisami',
        narration: 'Korytarz serwisowy pachnie wybielaczem, mokrą wełną i smażonym olejem wyciekającym z kuchennych wentylacji. Twoje buty skrzypią na kafelkach, gdy mijasz wózki przykryte białymi prześcieradłami. Zmywarka przerywa pracę, ręce czerwone i szorstkie, i patrzy na ciebie bez mrugnięcia. Nad tobą rury tykają jak powolny metronom.',
        choices: {
          'choice-3': { text: 'Przesłuchać portiera o szafce z klawiaturą' },
          'choice-4': { text: 'Przemknąć na górę, zanim ktoś zdąży zareagować' },
        },
      },
    },
  },

  // Turkish (Türkçe)
  tr: {
    title: 'Cam Anahtar Protokolü',
    description: 'Yağmur kaygan sokaklarda, şifreli arşivlerde ve kendini sürekli yeniden yazan bir kapalı oda ölümünde gerçeği avladığın yüksek sınıf bir noir gizem.',
    author: 'AI Hikaye Oluşturucu',
    nodes: {
      'node-1': {
        title: 'Camın Üzerine Yağmur',
        narration: 'Yağmur, sokağı iğnelerken ve neonu kanayan suluboyaya çevirirken Glassward Otel\'in tentesi altında duruyorsun. İçerde, önemli biri ölü, ve bina şimdiden hiç yaşanmamış gibi davranmaya çalışıyor. Kapıcı, dispatça kalp krizi olduğunu söyledi; adli tıp uzmanı buna kapalı oda anomalisi dedi; patronun reddedemeyeceğin bir iyilik olarak adlandırdı. Yakındaki bir transformatörden ozon tadı ve içmemen gereken acı kahve tadı alıyorsun.',
        choices: {
          'choice-1': { text: 'Vızıldayan servis koridorundan gir' },
          'choice-2': { text: 'Rozet elinde parlak bir şekilde açıkça gir' },
        },
      },
      'node-2': {
        title: 'Kulisin Ardındaki Fısıltılar',
        narration: 'Servis koridoru, çamaşır suyu, ıslak yün ve mutfak havalandırmalarından sızan kızartma yağı kokuyor. Beyaz çarşaflarla örtülü arabaların yanından geçerken ayakkabıların fayanslarda gıcırdıyor. Bir bulaşıkçı duruyor, elleri kırmızı ve çiğ, ve göz kırpmadan seni izliyor. Üzerinde, borular yavaş bir metronom gibi tik tak yapıyor. Sadece personel için işaretli bir kapı yangın söndürücüsüyle desteklenmiş olarak açık duruyor.',
        choices: {
          'choice-3': { text: 'Tuş takımlı dolap hakkında kapıcıyı sorgula' },
          'choice-4': { text: 'Kimse prova yapamadan üste kay' },
        },
      },
    },
  },
};
