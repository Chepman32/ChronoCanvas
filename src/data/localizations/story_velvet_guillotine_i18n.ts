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

export const velvetGuillotineTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English (Original)
  en: {
    title: 'The Velvet Guillotine',
    description: 'A noir mystery set in 1920s Paris. Amidst a masquerade ball, a murder occurs that unravels a conspiracy of occultism and political blackmail.',
    author: 'AI Story Generator',
    nodes: {
      'node-1': {
        title: 'The Midnight Masquerade',
        narration: 'The rain in Paris does not wash the streets clean; it merely makes the grime slicker. You stand before the wrought-iron gates of the Chateau de Valois, invitation dampened in your gloved hand. Inside, the masquerade ball is in full swing. You are Detective Henri Thorne, and you were not invited for the champagne. An anonymous tip suggested that tonight, the festive masks would hide a brutal crime.',
        choices: {
          'choice-1': { text: 'Burst through the main doors into the grand ballroom' },
          'choice-2': { text: 'Draw your revolver and circle toward the garden terrace' },
        },
      },
      'node-2': {
        title: 'The Grand Ballroom',
        narration: 'You throw open the mahogany doors. The scene is a frozen tableau of panic. Hundreds of masked aristocrats press against the walls. There, sprawled amidst shattered crystal, lies the host, Duke Valois. His chest is a ruin of crimson. You flash your badge, shouting for order. The crowd parts, revealing the Duke\'s weeping fiancée and a suspicious man in a raven mask.',
        choices: {
          'choice-3': { text: 'Kneel to examine the body and interrogate the fiancée' },
          'choice-4': { text: 'Intercept the man in the raven mask before he vanishes' },
        },
      },
    },
  },

  // Russian (Русский)
  ru: {
    title: 'Бархатная Гильотина',
    description: 'Нуарная тайна в Париже 1920-х. Среди бала-маскарада происходит убийство, раскрывающее заговор оккультизма и политического шантажа.',
    author: 'ИИ Генератор Историй',
    nodes: {
      'node-1': {
        title: 'Полуночный Маскарад',
        narration: 'Парижский дождь не моет улицы чище; он лишь делает грязь скользкой. Вы стоите перед коваными воротами Шато де Валуа, приглашение намокает в перчатке. Внутри бал-маскарад в разгаре. Вы — детектив Анри Торн, и вас пригласили не за шампанским. Анонимный наводчик намекнул, что сегодня праздничные маски скроют жестокое преступление.',
        choices: {
          'choice-1': { text: 'Ворваться через главные двери в бальный зал' },
          'choice-2': { text: 'Обнажить револьвер и обойти к садовой террасе' },
        },
      },
      'node-2': {
        title: 'Большой Бальный Зал',
        narration: 'Вы распахиваете махагоновые двери. Сцена — застывшая паника паники. Сотни аристократов в масках прижимаются к стенам. Там, среди осколков хрусталя, лежит хозяин, герцог Валуа. Его грудь — руина багрового цвета. Вы показываете значок, крича о порядке. Толпа расступается, открывая плачущую невесту герцога и подозрительного человека в маске ворона.',
        choices: {
          'choice-3': { text: 'Осмотреть тело и допросить невесту' },
          'choice-4': { text: 'Перехватить человека в маске ворона' },
        },
      },
    },
  },

  // Spanish (Español)
  es: {
    title: 'La Guillotina de Terciopelo',
    description: 'Un misterio noir ambientado en el París de los años 20. Durante un baile de máscaras, ocurre un asesinato que desentraña una conspiración de ocultismo y chantaje político.',
    author: 'Generador de Historias IA',
    nodes: {
      'node-1': {
        title: 'El Mascarada de Medianoche',
        narration: 'La lluvia en París no limpia las calles; simplemente hace que la mugre sea más resbaladiza. Estás ante las puertas de hierro forjado del Chateau de Valois, la invitación húmeda en tu mano enguantada. Dentro, el baile de máscaras está en pleno apogeo. Eres el Detective Henri Thorne, y no te invitaron por el champán. Una pista anónima sugirió que esta noche, las máscaras festivas ocultarían un crimen brutal.',
        choices: {
          'choice-1': { text: 'Irrumpir por la puerta principal al gran salón' },
          'choice-2': { text: 'Desenfundar el revólver y rodear hacia la terraza del jardín' },
        },
      },
      'node-2': {
        title: 'El Gran Salón de Baile',
        narration: 'Abres las puertas de caoba. La escena es una tabla congelada de pánico. Cientos de aristócratas enmascarados se aprietan contra las paredes. Allí, tendido entre cristales rotos, yace el anfitrión, el Duque Valois. Su pecho es una ruina carmesí. Muestras tu placa, gritando orden. La multitud se parte, revelando a la prometida llorosa del Duque y a un hombre sospechoso con máscara de cuervo.',
        choices: {
          'choice-3': { text: 'Arrodillarte para examinar el cuerpo e interrogar a la prometida' },
          'choice-4': { text: 'Interceptar al hombre de la máscara de cuervo antes de que desaparezca' },
        },
      },
    },
  },

  // German (Deutsch)
  de: {
    title: 'Die Samt-Guillotine',
    description: 'Ein Noir-Mystery im Paris der 1920er Jahre. Bei einem Maskenball geschieht ein Mord, der eine Verschwörung aus Okkultismus und politischer Erpressung aufdeckt.',
    author: 'KI Geschichtengenerator',
    nodes: {
      'node-1': {
        title: 'Die Mitternachtsmaskerade',
        narration: 'Der Regen in Paris wäscht die Straßen nicht sauber; er macht den Schmutz nur rutschiger. Du stehst vor dem schmiedeeisernen Tor des Chateau de Valois, Einladung in deiner behandschuhten Hand durchnässt. Drinnen ist der Maskenball in vollem Gange. Du bist Detektiv Henri Thorne, und du wurdest nicht für den Champagner eingeladen. Ein anonymer Tipp deutete darauf hin, dass heute Nacht die festlichen Masken ein brutales Verbrechen verbergen würden.',
        choices: {
          'choice-1': { text: 'Durch die Haustür in den großen Ballsaal stürmen' },
          'choice-2': { text: 'Den Revolver ziehen und zur Gartenterrasse umgehen' },
        },
      },
      'node-2': {
        title: 'Der Große Ballsaal',
        narration: 'Du wirfst die Mahagonitüren auf. Die Szene ist ein erstarrtes Tableau der Panik. Hunderte maskierter Aristokraten drücken sich gegen die Wände. Dort, ausgestreckt zwischen zerbrochenem Kristall, liegt der Gastgeber, Herzog Valois. Seine Brust ist eine purpurfarbene Ruine. Du zeigst dein Abzeichen und schreist nach Ordnung. Die Menge teilt sich und enthüllt die weinende Verlobte des Herzogs und einen verdächtigen Mann in einer Rabenmaske.',
        choices: {
          'choice-3': { text: 'Knien, um den Körper zu untersuchen und die Verlobte zu verhören' },
          'choice-4': { text: 'Den Mann in der Rabenmaske abfangen, bevor er verschwindet' },
        },
      },
    },
  },

  // French (Français)
  fr: {
    title: 'La Guilotine de Velours',
    description: 'Un mystère noir dans le Paris des années 1920. Au milieu d\'un bal masqué, un meurtre dévoile une conspiration d\'occultisme et de chantage politique.',
    author: 'Générateur de Histoires IA',
    nodes: {
      'node-1': {
        title: 'Le Bal Masqué de Minuit',
        narration: 'La pluie à Paris ne nettoie pas les rues; elle rend simplement la saleté plus glissante. Tu te tiens devant les grilles en fer forgé du Chateau de Valois, l\'invitation humide dans ta main gantée. À l\'intérieur, le bal masqué bat son plein. Tu es le Détective Henri Thorne, et on ne t\'a pas invité pour le champagne. Un tuyau anonyme suggérait que ce soir, les masques festifs cacheraient un crime brutal.',
        choices: {
          'choice-1': { text: 'Faire irruption par la porte principale dans la grande salle de bal' },
          'choice-2': { text: 'Dégainer le revolver et contourner vers la terrasse du jardin' },
        },
      },
      'node-2': {
        title: 'La Grande Salle de Bal',
        narration: 'Tu ouvres les portes en acajou. La scène est un tableau figé de panique. Des centaines d\'aristocrates masqués se pressent contre les murs. Là, étendu parmi les cristaux brisés, gît l\'hôte, le Duc de Valois. Sa poitrine est une ruine cramoisie. Tu montres ton badge, criant l\'ordre. La foule s\'écarte, révélant la fiancée en larmes du Duc et un homme suspect portant un masque de corbeau.',
        choices: {
          'choice-3': { text: 'S\'agenouiller pour examiner le corps et interroger la fiancée' },
          'choice-4': { text: 'Intercepter l\'homme au masque de corbeau avant qu\'il ne disparaisse' },
        },
      },
    },
  },

  // Portuguese (Português)
  pt: {
    title: 'A Guilhotina de Veludo',
    description: 'Um mistério noir ambientado no Paris dos anos 1920. Durante um baile de máscaras, ocorre um assassinato que desvenda uma conspiração de ocultismo e chantagem política.',
    author: 'Gerador de Histórias IA',
    nodes: {
      'node-1': {
        title: 'O Baile de Máscaras da Meia-Noite',
        narration: 'A chuva em Paris não lava as ruas; apenas torna a sujeira mais escorregadia. Você está diante dos portões de ferro forjado do Chateau de Valois, convite encharcado na mão enluvada. Dentro, o baile de máscaras está em pleno andamento. Você é o Detetive Henri Thorne, e não foi convidado pelo champanhe. Uma dica anônima sugeriu que esta noite, as máscaras festivas esconderiam um crime brutal.',
        choices: {
          'choice-1': { text: 'Arrombar pelas portas principais para o grande salão de baile' },
          'choice-2': { text: 'Desembainhar o revólver e contornar em direção à varanda do jardim' },
        },
      },
      'node-2': {
        title: 'O Grande Salão de Baile',
        narration: 'Você abre as portas de mogno. A cena é uma tabela congelada de pânico. Centenas de aristocratas mascarados se pressionam contra as paredes. Ali, estendido entre cristais quebrados, jaz o anfitrião, o Duque de Valois. Seu peito é uma ruína carmesim. Você mostra sua insígnia, gritando por ordem. A multidão se separa, revelando a noiva chorosa do Duque e um homem suspeito com máscara de corvo.',
        choices: {
          'choice-3': { text: 'Ajoelhar-se para examinar o corpo e interrogar a noiva' },
          'choice-4': { text: 'Interceptar o homem de máscara de corvo antes que ele desapareça' },
        },
      },
    },
  },

  // Japanese (日本語)
  ja: {
    title: 'ベルベット・ギロチン',
    description: '1920年代のパリを舞台にしたノワール・ミステリー。仮面舞踏会で起きた殺人事件が、神秘主義と政治的恐喝の陰謀を暴く。',
    author: 'AIストーリージェネレーター',
    nodes: {
      'node-1': {
        title: '真夜中の仮面舞踏会',
        narration: 'パリの雨は通りをきれいに洗い流さない；ただ汚れを滑りやすくするだけだ。手袋をした手に濡れた招待状を持ち、ヴァロワ城の鉄製の門の前に立つ。中では仮面舞踏会が盛り上がっている。あなたはアンリ・ソーン刑事で、シャンパンのために招かれたわけではない。匿名の情報提供者は、今夜、祭りの仮面が残酷な犯罪を隠すだろうと示唆していた。',
        choices: {
          'choice-1': { text: '正面玄関から大舞踏室へ突入する' },
          'choice-2': { text: 'リボルバーを抜き、庭のテラスへ回り込む' },
        },
      },
      'node-2': {
        title: '大舞踏室',
        narration: 'マホガニーの扉を開く。シーンは凍りついたパニックのテーブルだ。何百人もの仮面をつけた貴族が壁に押し寄せている。そこに、砕けた水晶の間に倒れているのは、主人のヴァロワ公爵だ。彼の胸は深紅の廃墟となっている。バッジを見せ、秩序を求めて叫ぶ。群衆が割れ、公爵の泣き叫ぶ婚約者と、烏の仮面をかぶった怪しい男が現れる。',
        choices: {
          'choice-3': { text: 'ひざまずいて遺体を調べ、婚約者を尋問する' },
          'choice-4': { text: '烏の仮面の男が消える前に止める' },
        },
      },
    },
  },

  // Chinese (简体中文)
  zh: {
    title: '天鹅绒断头台',
    description: '一部以1920年代巴黎为背景的黑色悬疑剧。在一场化装舞会上发生了一起谋杀案，揭开了神秘主义和政治勒索的阴谋。',
    author: 'AI故事生成器',
    nodes: {
      'node-1': {
        title: '午夜化装舞会',
        narration: '巴黎的雨不会把街道冲洗干净；它只是让污垢变得更滑。你站在瓦卢瓦庄园的锻铁大门前，邀请函在你戴手套的手中湿透。里面，化装舞会正在如火如荼地进行。你是亨利·索恩侦探，你不是被邀请来喝香槟的。匿名线人暗示，今晚节日的面具将隐藏一起残酷的罪行。',
        choices: {
          'choice-1': { text: '从正门冲入大舞厅' },
          'choice-2': { text: '拔出左轮手枪，绕向花园露台' },
        },
      },
      'node-2': {
        title: '大舞厅',
        narration: '你推开桃花心木门。场景是一幅冻结的恐慌画面。数百名戴面具的贵族挤在墙边。在那里，散落在破碎的水晶中，躺着主人瓦卢瓦公爵。他的胸口是一片猩红的废墟。你亮出徽章，大喊维持秩序。人群分开，露出公爵哭泣的未婚妻和一个戴着乌鸦面具的可疑男子。',
        choices: {
          'choice-3': { text: '跪下检查尸体并审问未婚妻' },
          'choice-4': { text: '在戴乌鸦面具的男子消失前拦截他' },
        },
      },
    },
  },

  // Korean (한국어)
  ko: {
    title: '벨벳 기요틴',
    description: '1920년대 파리를 배경으로 한 누와르 미스터리. 가장 물의 가면 묏회에서 살인 사건이 발생하며 신비주의와 정치적 협박의 음모가 드러난다.',
    author: 'AI 스토리 생성기',
    nodes: {
      'node-1': {
        title: '자정의 가면 묏회',
        narration: '파리의 비는 거리를 깨끗이 씻어내지 않는다. 그저 때를 미끄럽게 만들 뿐이다. 당신은 발루아 성의 단철 문 앞에 서 있고, 장갑 낀 손에는 젖은 초대장이 들려 있다. 안에서는 가장 물의 가면 묏회가 한창이다. 당신은 앙리 토른 형사이며, 샴페인 때문에 초대된 것은 아니다. 익명의 제보자는 오늘 밤 축제의 가면이 잔인한 범죄를 숨길 것이라고 암시했다.',
        choices: {
          'choice-1': { text: '정문을 뚫고 그랜드 볼룸으로 돌진한다' },
          'choice-2': { text: '리볼버를 꺼내 정원 테라스로 돌아간다' },
        },
      },
      'node-2': {
        title: '그랜드 볼룸',
        narration: '마호가니 문을 활짝 열자. 장면은 얼어붙은 공포의 도화지다. 수백 명의 가면 쓴 귀족들이 벽에 바짝 붙어 있다. 그곳, 산산조각 난 수정 사이에 주인인 발루아 공작이 드러누워 있다. 그의 가슴은 진홍색의 잔해가 되어 있다. 당신은 배지를 보이며 질서를 외친다. 군중이 갈라지며 공작의 울고 있는 약혼녀와 까마귀 가면을 쓴 수상한 남자가 드러난다.',
        choices: {
          'choice-3': { text: '무릎을 꿇고 시신을 조사하며 약혼녀를 심문한다' },
          'choice-4': { text: '까마귀 가면의 남자가 사라지기 전에 저지한다' },
        },
      },
    },
  },

  // Ukrainian (Українська)
  uk: {
    title: 'Оксамитова Гільйотина',
    description: 'Нуарна загадка у Парижі 1920-х. Серед маскарадного балу відбувається вбивство, яке розкриває змову окультизму та політичного шантажу.',
    author: 'AI Генератор Історій',
    nodes: {
      'node-1': {
        title: 'Північний Маскарад',
        narration: 'Паризька злива не миє вулиці чистіше; вона лише робить бруд слизьким. Ви стоїте перед кованими воротами Шато де Валуа, запрошення намокає в рукавичці. Всередині маскарадний бал у розпалі. Ви — детектив Анрі Торн, і вас запросили не за шампанським. Анонімний інформатор натякнув, що сьогодні святкові маски приховають жорстокий злочин.',
        choices: {
          'choice-1': { text: 'Увірватися через головні двері до бального залу' },
          'choice-2': { text: 'Оголити револьвер і обійти до садової тераси' },
        },
      },
      'node-2': {
        title: 'Великий Бальний Зал',
        narration: 'Ви розпахуєте махагонові двері. Сцена — застигла панорама паніки. Сотні аристократів у масках притискаються до стін. Там, серед уламків кришталю, лежить господар, герцог Валуа. Його груди — руїна багряного кольору. Ви показуєте значок, кричите про порядок. Натовп розступається, відкриваючи плачучу наречену герцога і підозрілу людину в масці ворона.',
        choices: {
          'choice-3': { text: 'Оглянути тіло і допитати наречену' },
          'choice-4': { text: 'Перехопити людину в масці ворона' },
        },
      },
    },
  },

  // Italian (Italiano)
  it: {
    title: 'La Ghigliottina di Velluto',
    description: 'Un mystery noir ambientato nella Parigi degli anni \'20. Durante un ballo in maschera, avviene un omicidio che svela una cospirazione di occultismo e ricatto politico.',
    author: 'Generatore di Storie AI',
    nodes: {
      'node-1': {
        title: 'Il Ballo di Mezzanotte',
        narration: 'La pioggia a Parigi non lava le strade; rende semplicemente lo sporco più scivoloso. Ti trovi davanti ai cancelli in ferro battuto del Chateau de Valois, l\'invito inzuppato nella mano guantata. Dentro, il ballo in maschera è in pieno fermento. Sei il Detective Henri Thorne, e non sei stato invitato per lo champagne. Una soffiata anonima suggeriva che stanotte, le maschere festive nasconderebbero un brutale crimine.',
        choices: {
          'choice-1': { text: 'Irrumpere dalla porta principale nella grande sala da ballo' },
          'choice-2': { text: 'Sguainare il rivoltella e aggirare verso la terrazza del giardino' },
        },
      },
      'node-2': {
        title: 'La Grande Sala da Ballo',
        narration: 'Spalanci le porte in mogano. La scena è un tableau congelato di panico. Centinaia di aristocratici mascherati si stringono contro le pareti. Lì, disteso tra i cristalli infranti, giace l\'ospite, il Duca di Valois. Il suo petto è una rovina cremisi. Mostri il distintivo, gridando ordine. La folla si divide, rivelando la fidanzata in lacrime del Duca e un uomo sospettoso con una maschera da corvo.',
        choices: {
          'choice-3': { text: 'Inginocchiarsi per esaminare il corpo e interrogare la fidanzata' },
          'choice-4': { text: 'Intercettare l\'uomo con la maschera da corvo prima che scompaia' },
        },
      },
    },
  },

  // Arabic (العربية)
  ar: {
    title: 'المقصلة المخملية',
    description: 'لغز noir يدور في باريس عشرينيات القرن الماضي. وسط حفلة تنكرية، يحدث قتل يكشف مؤامرة من التنجيم والابتزاز السياسي.',
    author: 'مولد القصص الذكاء الاصطناعي',
    nodes: {
      'node-1': {
        title: 'الحفل التنكري في منتصف الليل',
        narration: 'المطر في باريس لا يغسل الشوارع نظيفة؛ إنه يجعل الأوساخ أكثر انزلاقاً فقط. تقف أمام بوابات شاتو دي فالوا المزخرفة بالحديد، والدعوة مبتلة في يدك المغطاة بالقفازات. في الداخل، الحفل التنكري في أوجه. أنت المحقق هنري ثورن، ولم تُدعَ من أجل الشمبانيا. أشار مصدر مجهول إلى أنه الليلة، ستخفي الأقنعة الاحتفالية جريمة وحشية.',
        choices: {
          'choice-1': { text: 'اقتحام الأبواب الرئيسية إلى قاعة الرقص الكبرى' },
          'choice-2': { text: 'سحب المسدس والتحرك نحو شرفة الحديقة' },
        },
      },
      'node-2': {
        title: 'قاعة الرقص الكبرى',
        narration: 'تفتح أبواب الخشب الداكن. المشهد هو لوحة متجمدة من الذعر. مئات الأرستقراطيين المتنكرين يضغطون على الجدران. هناك، ممدداً بين الكريستال المحطم، يكمن المضيف، الدوق فالوا. صدره هو خراب قرمزي. تُبرز شارتك، صارخاً بالنظام. ينفرق الحشد، كاشفاً عن خطيبة الدوق الباكية ورجل مشبوه يرتدي قناع الغراب.',
        choices: {
          'choice-3': { text: 'الركوع لفحص الجثة واستجواب الخطيبة' },
          'choice-4': { text: 'اعتراض الرجل ذي قناع الغراب قبل أن يختفي' },
        },
      },
    },
  },

  // Hindi (हिन्दी)
  hi: {
    title: 'मखमली गिलोटीन',
    description: '1920 के दशक के पेरिस में सेट किया गया एक न्वार रहस्य। एक मास्करेड बॉल के बीच, एक हत्या होती है जो गूढ़वाद और राजनीतिक ब्लैकमेल की साजिश को उजागर करती है।',
    author: 'AI कहानी जनरेटर',
    nodes: {
      'node-1': {
        title: 'आधी रात का मास्करेड',
        narration: 'पेरिस में बारिश सड़कों को साफ नहीं करती; यह केवल गंदगी को फिसलन भरा बना देती है। आप शातो डे वाल्वा के लोहे के बने दरवाजों के सामने खड़े हैं, दस्ताने पहने हाथ में निमंत्रण भीगा हुआ है। अंदर, मास्करेड बॉल जोरों पर है। आप जाँच अधिकारी हेनरी थॉर्न हैं, और आपको शैंपेन के लिए नहीं बुलाया गया था। एक गुमनाम सूत्र ने संकेत दिया कि आज रात, उत्सव के मुखौटे एक बर्बर अपराध को छिपाएंगे।',
        choices: {
          'choice-1': { text: 'मुख्य दरवाजों से भव्य नृत्य हॉल में घुसें' },
          'choice-2': { text: 'रिवाल्वर निकालें और बगीचे के बरामदे की ओर घूमें' },
        },
      },
      'node-2': {
        title: 'भव्य नृत्य हॉल',
        narration: 'आप लाल पेड़ के दरवाज़े खोलते हैं। दृश्य घबराहट की एक जमी हुई तस्वीर है। सैकड़ों नकाबपोश अभिजात वर्ग दीवारों से सटे हैं। वहाँ, टूटे हुए क्रिस्टल के बीच पड़ा हुआ है मेज़बान, ड्यूक वाल्वा। उका छाती गहरे लाल रंग का खंडहर है। आप अपना बैज दिखाते हैं, व्यवस्था के लिए चिल्लाते हैं। भीड़ बँट जाती है, ड्यूक की रोती हुई मंगेतर और एक कौवे के मुखौटे वाले संदिग्ध आदमी को प्रकट करती है।',
        choices: {
          'choice-3': { text: 'शव की जांच और मंगेतर से पूछताछ के लिए घुटने टेकें' },
          'choice-4': { text: 'कौवे के मुखौटे वाले आदमी को गायब होने से पहले रोकें' },
        },
      },
    },
  },

  // Dutch (Nederlands)
  nl: {
    title: 'Het Fluweelen Guillotine',
    description: 'Een noir mysterie dat zich afspeelt in het Parijs van de jaren 1920. Tijdens een maskeradebal vindt er een moord plaats die een samenzwering van occultisme en politieke chantage onthult.',
    author: 'AI Verhalengenerator',
    nodes: {
      'node-1': {
        title: 'De Middernachtse Maskerade',
        narration: 'De regen in Parijs wast de straten niet schoon; het maakt het vuil alleen maar gladder. Je staat voor de smeedijzeren poorten van het Chateau de Valois, de uitnodiging doordrenkt in je gehandschoende hand. Binnen is het maskeradebal in volle gang. Je bent Detective Henri Thorne, en je bent niet uitgenodigd voor de champagne. Een anonieme tip suggereerde dat vanavond de feestelijke maskers een brute misdaad zouden verbergen.',
        choices: {
          'choice-1': { text: 'Door de hoofddeuren naar de grote balzaal barsten' },
          'choice-2': { text: 'Je revolver trekken en naar de tuinterras omlopen' },
        },
      },
      'node-2': {
        title: 'De Grote Balzaal',
        narration: 'Je gooit de mahonie deuren open. Het tafereel is een bevroren tableau van paniek. Honderden gemaskerde aristocraten drukken zich tegen de muren. Daar, uitgestrekt tussen gebroken kristal, ligt de gastheer, Hertog Valois. Zijn borst is een karmozijnrode ruïne. Je toont je badge, schreeuwend om orde. De menigte splitst zich, onthullend de huilende verloofde van de Hertog en een verdachte man in een raafmasker.',
        choices: {
          'choice-3': { text: 'Knielen om het lichaam te onderzoeken en de verloofde te ondervragen' },
          'choice-4': { text: 'De man in het raafmasker onderscheppen voordat hij verdwijnt' },
        },
      },
    },
  },

  // Polish (Polski)
  pl: {
    title: 'Aksamitna Gilotyna',
    description: 'Mroczna zagadka noir w Paryżu lat 20. XX wieku. W trakcie balu maskowego dochodzi do morderstwa, które ujawnia spisek okultyzmu i politycznego szantażu.',
    author: 'Generator Historii AI',
    nodes: {
      'node-1': {
        title: 'Północny Bal Maskowy',
        narration: 'Paryski deszcz nie zmywa ulic; czyni jedynie brud bardziej śliskim. Stoisz przed kutymi na żelazo bramami Chateau de Valois, zaproszenie przemoczone w rękawiczce. Wewnątrz bal maskowy trwa w najlepsze. Jesteś Detektywem Henri Thorne, i nie zostałeś zaproszony na szampana. Anonimowy informator sugerował, że dziś wieczorem świąteczne maski ukryją brutalną zbrodnię.',
        choices: {
          'choice-1': { text: 'Wpaść przez główne drzwi do wielkiej sali balowej' },
          'choice-2': { text: 'Wyciągnąć rewolwer i obejść w stronę tarasu ogrodowego' },
        },
      },
      'node-2': {
        title: 'Wielka Sala Balowa',
        narration: 'Otwierasz drzwi z mahoniu. Scena to zamrożony obraz paniki. Setki zamaskowanych arystokratów przyciskają się do ścian. Tam, rozciągnięty pośród potłuczonego kryształu, leży gospodarz, Książę Valois. Jego pierś to szkarłatna ruina. Pokazujesz odznakę, krzycząc o porządek. Tłum rozstępuje się, odsłaniając płaczącą narzeczoną Księcia i podejrzanego mężczyznę w masce kruka.',
        choices: {
          'choice-3': { text: 'Uklęknąć, by zbadać ciało i przesłuchać narzeczoną' },
          'choice-4': { text: 'Przechwycić mężczyznę w masce kruka, zanim zniknie' },
        },
      },
    },
  },

  // Turkish (Türkçe)
  tr: {
    title: 'Kadife Giyotin',
    description: '1920\'lerin Paris\'inde geçen bir noir gizem. Bir maskeli balo sırasında işlenen bir cinayet, gizemcilik ve siyasi şantajın komplosunu ortaya çıkarır.',
    author: 'AI Hikaye Oluşturucu',
    nodes: {
      'node-1': {
        title: 'Gece Yarısı Maskeli Balo',
        narration: 'Paris\'teki yağmur sokakları temizlemez; sadece kiri daha kaygan yapar. Eldivenli elinizde ıslak davetiye, Chateau de Valois\'nin dövme demir kapıları önünde duruyorsunuz. İçeride maskeli balo tüm hızıyla devam ediyor. Siz Dedektif Henri Thorne\'sunuz ve şampanya için davet edilmediniz. Anonim bir ipucu, bu gece şenlik maskelerinin vahşi bir suçu gizleyeceğini ima etmişti.',
        choices: {
          'choice-1': { text: 'Ana kapılardan büyük balo salonuna daldır' },
          'choice-2': { text: 'Tabancayı çek ve bahçe terasına doğru dolaş' },
        },
      },
      'node-2': {
        title: 'Büyük Balo Salonu',
        narration: 'Maun kapıları açıyorsun. Sahne, donmuş bir panik tablosu. Yüzlerce maskeli aristokrat duvarlara baskı yapıyor. İşte, kırık kristallerin arasına serilmiş, ev sahibi Dük Valois yatıyor. Göğsü koyu kırmızı bir harabe. Rozetini göstererek düzen için bağırıyorsun. Kalabalık ayrılıyor, Dük\'ün ağlayan nişanlısını ve karga maskeli şüpheli bir adamı ortaya çıkarıyor.',
        choices: {
          'choice-3': { text: 'Diz çöküp cesedi incele ve nişanlıyı sorgula' },
          'choice-4': { text: 'Karga maskeli adam kaybolmadan önce onu durdur' },
        },
      },
    },
  },
};
