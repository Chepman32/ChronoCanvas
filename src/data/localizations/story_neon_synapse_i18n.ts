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

export const neonSynapseTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English (Original)
  en: {
    title: 'Neon Synapse',
    description: 'In a cyberpunk metropolis where minds can be hacked, you wake up with missing memories and a mysterious implant. Uncover the truth before your time runs out.',
    author: 'AI Story Generator',
    nodes: {
      'node-1': {
        title: 'Waking Up',
        narration: 'You wake up in a cramped apartment that smells of ozone and synthetic noodles. Your head pounds with a rhythm that feels electronic rather than organic. A message blinks on your neural HUD: "SYNAPSE PROTOCOL INITIATED. 24:00:00 REMAINING." You don\'t remember installing anything. Your reflection in the cracked mirror shows a port behind your ear that wasn\'t there yesterday. The city outside your window pulses with neon advertisements in a dozen languages you barely understand. Someone knocks at your door — three sharp raps, then silence.',
        choices: {
          'choice-1': { text: 'Answer the door cautiously' },
          'choice-2': { text: 'Climb out the fire escape window' },
        },
      },
      'node-2': {
        title: 'Unexpected Visitor',
        narration: 'You crack the door open to find a woman in a worn leather jacket, her eyes hidden behind mirrored AR lenses. "You\'re the one with the new implant," she states flatly. "I can help you, but we need to move. Now." She glances down the hallway nervously. "The corps know someone activated a rogue synapse. They\'re sending cleaners." You could trust her and follow, or slam the door and run alone.',
        choices: {
          'choice-3': { text: 'Follow the woman trustingly' },
          'choice-4': { text: 'Slam the door and run the other way' },
        },
      },
    },
  },

  // Russian (Русский)
  ru: {
    title: 'Неоновый Синапс',
    description: 'В киберпанковом мегаполисе, где разумы можно взломать, вы просыпаетесь с потерянными воспоминаниями и загадочным имплантом. Раскройте правду, пока не кончилось время.',
    author: 'ИИ Генератор Историй',
    nodes: {
      'node-1': {
        title: 'Пробуждение',
        narration: 'Вы просыпаетесь в тесной квартире, пахнущей озоном и синтетической лапшой. Голова стучит ритмом, который кажется электронным, а не органическим. Сообщение мигает на нейро-HUD: «ПРОТОКОЛ СИНАПСА ИНИЦИИРОВАН. ОСТАЛОСЬ 24:00:00». Вы не помните установки ничего. В отражении в треснувшем зеркале виден порт за ухом, которого вчера не было. Город за окном пульсирует неоновой рекламой на дюжине языков, которые вы едва понимаете. Кто-то стучит в дверь — три резких удара, затем тишина.',
        choices: {
          'choice-1': { text: 'Осторожно открыть дверь' },
          'choice-2': { text: 'Вылезти через окно пожарного выхода' },
        },
      },
      'node-2': {
        title: 'Неожиданная Гостья',
        narration: 'Вы приоткрываете дверь и видите женщину в поношенной кожаной куртке, её глаза скрыты зеркальными AR-линзами. «Ты тот, с новым имплантом», — ровно заявляет она. «Я могу помочь, но нам нужно двигаться. Сейчас». Она нервно смотрит в конец коридора. «Корпы знают, что кто-то активировал бунтарский синапс. Они шлют клинеров». Вы можете довериться ей и последовать, или хлопнуть дверью и бежать в одиночку.',
        choices: {
          'choice-3': { text: 'Доверчиво последовать за женщиной' },
          'choice-4': { text: 'Хлопнуть дверью и бежать в другую сторону' },
        },
      },
    },
  },

  // Spanish (Español)
  es: {
    title: 'Synapse Neón',
    description: 'En una metrópoli cyberpunk donde las mentes pueden ser hackeadas, despiertas con memorias perdidas y un implante misterioso. Descubre la verdad antes de que se acabe el tiempo.',
    author: 'Generador de Historias IA',
    nodes: {
      'node-1': {
        title: 'Despertar',
        narration: 'Despiertas en un apartamento estrecho que huele a ozono y fideos sintéticos. Tu cabeza late con un ritmo que parece electrónico en lugar de orgánico. Un mensaje parpadea en tu HUD neural: "PROTOCOLO SYNAPSE INICIADO. 24:00:00 RESTANTES". No recuerdas haber instalado nada. Tu reflejo en el espejo roto muestra un puerto detrás de tu oreja que no estaba allí ayer. La ciudad fuera de tu ventana pulsa con anuncios de neón en una docena de idiomas que apenas entiendes. Alguien toca tu puerta — tres golpes fuertes, luego silencio.',
        choices: {
          'choice-1': { text: 'Abrir la puerta con cautela' },
          'choice-2': { text: 'Salir por la ventana de la escalera de emergencia' },
        },
      },
      'node-2': {
        title: 'Visitante Inesperada',
        narration: 'Entreabres la puerta y encuentras a una mujer en una chaqueta de cuero gastada, sus ojos ocultos tras lentes AR espejadas. "Eres quien tiene el nuevo implante", declara planamente. "Puedo ayudarte, pero tenemos que movernos. Ahora". Mira nerviosamente hacia el pasillo. "Las corporaciones saben que alguien activó un synapse rebelde. Están enviando limpiadores". Podrías confiar en ella y seguir, o cerrar la puerta y correr solo.',
        choices: {
          'choice-3': { text: 'Seguir a la mujer confiadamente' },
          'choice-4': { text: 'Cerrar la puerta y correr al otro lado' },
        },
      },
    },
  },

  // German (Deutsch)
  de: {
    title: 'Neon-Synapse',
    description: 'In einer Cyberpunk-Metropole, in der Gedanken gehackt werden können, wachst du mit fehlenden Erinnerungen und einem mysteriösen Implantat auf. Entdecke die Wahrheit, bevor deine Zeit abläuft.',
    author: 'KI Geschichtengenerator',
    nodes: {
      'node-1': {
        title: 'Erwachen',
        narration: 'Du wachst in einer beengten Wohnung auf, die nach Ozon und synthetischen Nudeln riecht. Dein Kopf hämmert im Rhythmus, der eher elektronisch als organisch wirkt. Eine Nachricht blinkt auf deinem neuralen HUD: "SYNAPSE-PROTOKOLL INITIALISIERT. 24:00:00 VERBLEIBEND." Du erinnerst dich nicht daran, etwas installiert zu haben. Dein Spiegelbild im zersprungenen Spiegel zeigt einen Port hinter deinem Ohr, der gestern noch nicht da war. Die Stadt vor deinem Fenster pulsiert mit Neonwerbung in einem Dutzend Sprachen, die du kaum verstehst. Jemand klopft an deine Tür — drei scharfe Schläge, dann Stille.',
        choices: {
          'choice-1': { text: 'Die Tür vorsichtig öffnen' },
          'choice-2': { text: 'Aus dem Feuerleiterfenster klettern' },
        },
      },
      'node-2': {
        title: 'Unerwarteter Besucher',
        narration: 'Du öffnest die Tür einen Spalt und findest eine Frau in einer abgetragenen Lederjacke, ihre Augen versteckt hinter verspiegelten AR-Linsen. "Du bist der mit dem neuen Implantat", erklärt sie flach. "Ich kann dir helfen, aber wir müssen uns bewegen. Jetzt." Sie blickt nervös den Flur hinunter. "Die Konzerne wissen, dass jemand eine abtrünnige Synapse aktiviert hat. Sie schicken Cleaner." Du könntest ihr vertrauen und folgen, oder die Tür zuschlagen und alleine rennen.',
        choices: {
          'choice-3': { text: 'Der Frau vertrauensvoll folgen' },
          'choice-4': { text: 'Die Tür zuschlagen und in die andere Richtung rennen' },
        },
      },
    },
  },

  // French (Français)
  fr: {
    title: 'Synapse Néon',
    description: 'Dans une métropole cyberpunk où les esprits peuvent être piratés, tu te réveilles avec des souvenirs manquants et un implant mystérieux. Découvre la vérité avant que ton temps ne s\'écoule.',
    author: 'Générateur de Histoires IA',
    nodes: {
      'node-1': {
        title: 'Réveil',
        narration: 'Tu te réveilles dans un appartement exigu qui sent l\'ozone et les nouilles synthétiques. Ta tête bat au rythme qui semble électronique plutôt qu\'organique. Un message clignote sur ton HUD neural : "PROTOCOLE SYNAPSE INITIÉ. 24:00:00 RESTANTS." Tu ne te souviens pas d\'avoir installé quoi que ce soit. Ton reflet dans le miroir fissuré montre un port derrière ton oreille qui n\'était pas là hier. La ville à ta fenêtre pulse de publicités au néon dans une douzaine de langues que tu comprends à peine. Quelqu\'un frappe à ta porte — trois coups secs, puis le silence.',
        choices: {
          'choice-1': { text: 'Ouvrir la porte avec prudence' },
          'choice-2': { text: 'Sortir par la fenêtre de l\'échelle de secours' },
        },
      },
      'node-2': {
        title: 'Visiteur Inattendu',
        narration: 'Tu entrouvres la porte pour trouver une femme en veste en cuir usée, ses yeux cachés derrière des lentilles AR miroitantes. «Tu es celui avec le nouvel implant», déclare-t-elle platement. «Je peux t\'aider, mais nous devons bouger. Maintenant." Elle jette un coup d\'œil nerveux dans le couloir. "Les corporations savent que quelqu\'un a activé une synapse rebelle. Ils envoient des nettoyeurs." Tu pourrais lui faire confiance et suivre, ou claquer la porte et courir seul.',
        choices: {
          'choice-3': { text: 'Suivre la femme avec confiance' },
          'choice-4': { text: 'Claquer la porte et courir de l\'autre côté' },
        },
      },
    },
  },

  // Portuguese (Português)
  pt: {
    title: 'Sinapse Neon',
    description: 'Em uma metrópole cyberpunk onde mentes podem ser hackeadas, você acorda com memórias perdidas e um implante misterioso. Descubra a verdade antes que seu tempo acabe.',
    author: 'Gerador de Histórias IA',
    nodes: {
      'node-1': {
        title: 'Despertar',
        narration: 'Você acorda em um apartamento apertado que cheira a ozônio e macarrão sintético. Sua cabeça pulsa num ritmo que parece eletrônico em vez de orgânico. Uma mensagem pisca no seu HUD neural: "PROTOCOLO SINAPSE INICIADO. 24:00:00 RESTANTES." Você não se lembra de instalar nada. Seu reflexo no espelho quebrado mostra uma porta atrás da orelha que não estava ali ontem. A cidade fora da janela pulsa com anúncios de neon em uma dúzia de idiomas que você mal entende. Alguém bate na sua porta — três batidas fortes, depois silêncio.',
        choices: {
          'choice-1': { text: 'Abrir a porta com cautela' },
          'choice-2': { text: 'Sair pela janela da escada de incêndio' },
        },
      },
      'node-2': {
        title: 'Visitante Inesperada',
        narration: 'Você entreabre a porta e encontra uma mulher em uma jaqueta de couro desgastada, seus olhos escondidos atrás de lentes AR espelhadas. "Você é quem tem o novo implante", declara ela planamente. "Posso te ajudar, mas precisamos nos mover. Agora." Ela olha nervosamente pelo corredor. "As corporações sabem que alguém ativou uma sinapse rebelde. Estão enviando limpadores." Você poderia confiar nela e seguir, ou bater a porta e correr sozinho.',
        choices: {
          'choice-3': { text: 'Seguir a mulher confiadamente' },
          'choice-4': { text: 'Bater a porta e correr para o outro lado' },
        },
      },
    },
  },

  // Japanese (日本語)
  ja: {
    title: 'ネオン・シナプス',
    description: '精神がハッキングできるサイバーパンクの大都市で、記憶を失い謎のインプラントと共に目覚める。時間が尽きる前に真実を解き明かせ。',
    author: 'AIストーリージェネレーター',
    nodes: {
      'node-1': {
        title: '目覚め',
        narration: 'オゾンと合成ラーメンの匂いがする狭いアパートで目覚める。頭が脈打つリズムは有機的というより電子的だ。神経HUDにメッセージが点滅している：「シナプス・プロトコル開始。残り24:00:00」。何もインストールした記憶がない。割れた鏡の反射には、昨日までなかった耳の後ろのポートが見える。窓の外の都市は、あなたがほとんど理解できない十数カ国語のネオン広告で脈打っている。誰かがドアをノックする——三度の鋭い音、そして沈黙。',
        choices: {
          'choice-1': { text: '慎重にドアを開ける' },
          'choice-2': { text: '避難階段の窓から出る' },
        },
      },
      'node-2': {
        title: '予期せぬ訪問者',
        narration: 'ドアを少し開けると、擦り切れたレザージャケットを着た女性が立っていた。目はミラーのARレンズで隠されている。「新しいインプラントを持っているのはあなたね」と彼女は平坦に言う。「助けてあげられる。でも今すぐ動く必要がある」。彼女は廊下を不安そうに見る。「企業は反逆的シナプスを起動したことを知っている。掃除屋を送っているわ」。信じて従うか、ドアを閉めて一人で逃げるか。',
        choices: {
          'choice-3': { text: '信じて女性について行く' },
          'choice-4': { text: 'ドアを閉めて逆方向に逃げる' },
        },
      },
    },
  },

  // Chinese (简体中文)
  zh: {
    title: '霓虹突触',
    description: '在一个思想可以被黑客攻击的赛博朋克大都市中，你带着缺失的记忆和神秘的植入物醒来。在时间耗尽之前揭开真相。',
    author: 'AI故事生成器',
    nodes: {
      'node-1': {
        title: '醒来',
        narration: '你在一间狭窄的公寓中醒来，空气中弥漫着臭氧和合成面条的气味。你的头部随着一种节奏抽痛，那感觉更像是电子的而非有机的。一条消息在你的神经HUD上闪烁："突触协议已启动。剩余24:00:00。"你不记得安装过任何东西。你在破裂的镜子中的倒影显示，耳后有一个昨天还没有的接口。窗外的城市闪烁着霓虹广告，使用着十几种你几乎不懂的语言。有人敲你的门——三下重击，然后是寂静。',
        choices: {
          'choice-1': { text: '谨慎地开门' },
          'choice-2': { text: '从消防梯窗户爬出去' },
        },
      },
      'node-2': {
        title: '意外的访客',
        narration: '你微微打开房门，发现一个穿着破旧皮夹克的女人，她的眼睛隐藏在镜面AR镜片后面。"你就是那个有新植入物的人，"她平淡地说。"我可以帮你，但我们需要现在就走。"她紧张地看向走廊。"公司知道有人激活了 rogue 突触。他们正在派清道夫。"你可以选择信任她跟随，或者关上门独自逃跑。',
        choices: {
          'choice-3': { text: '信任地跟随女人' },
          'choice-4': { text: '关上门往反方向跑' },
        },
      },
    },
  },

  // Korean (한국어)
  ko: {
    title: '네온 시냅스',
    description: '정신을 해킹할 수 있는 사이버펑크 대도시에서 잃어버린 기억과 신비한 임플란트를 가진 채 깨어난다. 시간이 다하기 전에 진실을 밝혀라.',
    author: 'AI 스토리 생성기',
    nodes: {
      'node-1': {
        title: '깨어남',
        narration: '오존과 합성 라면 냄새가 나는 비좁은 아파트에서 깨어난다. 머리가 두근거리는 리듬은 유기적이라기보다 전자적이다. 신경 HUD에 메시지가 깜빡인다: "시냅스 프로토콜 시작됨. 남은 시간 24:00:00." 당신은 아무것도 설치한 기억이 없다. 금 간 거울의 반영에는 어제까지 없었던 귀 뒤 포트가 보인다. 창밖의 도시는 당신이 거의 이해하지 못하는 수십 개 언어의 네온 광고로 고동친다. 누군가 문을 두드린다——세 번의 날카로운 소리, 그리고 침묵.',
        choices: {
          'choice-1': { text: '조심스럽게 문을 연다' },
          'choice-2': { text: '비상 계단 창문으로 기어오른다' },
        },
      },
      'node-2': {
        title: '예상치 못한 방문자',
        narration: '문을 살짝 열어 젖히자 낡은 가죽 재킷을 입은 여자가 서 있다. 그녀의 눈은 거울 AR 렌즈 뒤에 숨겨져 있다. "새 임플란트 가진 사람이 네가 맞아," 그녀가 단조롭게 말한다. "도와줄 수 있어. 하지만 지금 당장 움직여야 해." 그녀는 복도를 불안하게 쳐다본다. "기업들이 누군가 배반자 시냅스를 활성화한 걸 알아. 청소부들을 볂고 있어." 그녀를 믿고 따라가거나, 문을 닫고 혼자 도망칠 수 있다.',
        choices: {
          'choice-3': { text: '믿고 여자를 따라간다' },
          'choice-4': { text: '문을 닫고 반대 방향으로 도망친다' },
        },
      },
    },
  },

  // Ukrainian (Українська)
  uk: {
    title: 'Неоновий Синапс',
    description: 'У кіберпанковому мегаполісі, де розуми можна зламати, ви прокидаєтеся з втраченими спогадами та загадковим імплантом. Розкрийте правду, поки не закінчиться час.',
    author: 'AI Генератор Історій',
    nodes: {
      'node-1': {
        title: 'Пробудження',
        narration: 'Ви прокидаєтеся в тісній квартирі, що пахне озоном і синтетичною локшиною. Голова стукає ритмом, який здається електронним, а не органічним. Повідомлення блимає на нейро-HUD: «ПРОТОКОЛ СИНАПСА ІНІЦІЙОВАНО. ЗАЛИШИЛОСЬ 24:00:00». Ви не пам\'ятаєте встановлення нічого. У відображенні в тріснутому дзеркалі видно порт за вухом, якого вчора не було. Місто за вікном пульсує неоновою рекламою на десятках мов, які ви ледь розумієте. Хтось стукає в двері — три різкі удари, потім тиша.',
        choices: {
          'choice-1': { text: 'Обережно відкрити двері' },
          'choice-2': { text: 'Вилізти через вікно пожежного виходу' },
        },
      },
      'node-2': {
        title: 'Несподівана Гостя',
        narration: 'Ви привідкриваєте двері і бачите жінку в поношеній шкіряній куртці, її очі приховані дзеркальними AR-лінзами. «Ти той, з новим імплантом», — рівно заявляє вона. «Я можу допомогти, але нам потрібно рухатися. Зараз». Вона нервово дивиться в кінець коридору. «Корпорації знають, що хтось активував бунтарський синапс. Вони шлють клінерів». Ви можете довіритися їй і піти, або хлопнути дверима й тікати самотужки.',
        choices: {
          'choice-3': { text: 'Довірливо піти за жінкою' },
          'choice-4': { text: 'Хлопнути дверима й бігти в інший бік' },
        },
      },
    },
  },

  // Italian (Italiano)
  it: {
    title: 'Sinapse al Neon',
    description: 'In una metropoli cyberpunk dove le menti possono essere hackerate, ti svegli con ricordi mancanti e un impianto misterioso. Scopri la verità prima che il tempo scada.',
    author: 'Generatore di Storie AI',
    nodes: {
      'node-1': {
        title: 'Risveglio',
        narration: 'Ti svegli in un appartamento angusto che odora di ozono e noodles sintetici. La testa pulsa con un ritmo che sembra elettronico piuttosto che organico. Un messaggio lampeggia sul tuo HUD neurale: "PROTOCOLLO SINAPSE INIZIATO. 24:00:00 RIMANENTI." Non ricordi di aver installato nulla. Il tuo riflesso nello specchio scheggiato mostra una porta dietro l\'orecchio che non c\'era ieri. La città fuori dalla finestra pulsa di pubblicità al neon in una dozzina di lingue che capisci a malapena. Qualcuno bussa alla tua porta — tre colpi decisi, poi silenzio.',
        choices: {
          'choice-1': { text: 'Aprire la porta con cautela' },
          'choice-2': { text: 'Uscire dalla finestra della scala antincendio' },
        },
      },
      'node-2': {
        title: 'Visitatrice Inaspettata',
        narration: 'Spalanci la porta per trovare una donna in una giacca di cuoio consumata, i suoi occhi nascosti dietro lenti AR a specchio. «Sei tu quello con il nuovo impianto», dichiara piattamente. «Posso aiutarti, ma dobbiamo muoverci. Ora.» Getta un\'occhiata nervosa lungo il corridoio. «Le corporazioni sanno che qualcuno ha attivato una sinapse ribelle. Stanno mandando i cleaner.» Potresti fidarti di lei e seguirla, o sbattere la porta e correre da solo.',
        choices: {
          'choice-3': { text: 'Seguire la donna fidandosi' },
          'choice-4': { text: 'Sbattere la porta e correre dall\'altra parte' },
        },
      },
    },
  },

  // Arabic (العربية)
  ar: {
    title: 'الوصلة النيونية',
    description: 'في حضارة سايبربنك حيث يمكن اختراق العقول، تستيقظ مع ذكريات مفقودة وزرع غامض. اكتشف الحقيقة قبل نفاد وقتك.',
    author: 'مولد القصص الذكاء الاصطناعي',
    nodes: {
      'node-1': {
        title: 'الاستيقاظ',
        narration: 'تستيقظ في شقة ضيقة تنبعث منها رائحة الأوزون والنودلز الصناعية. رأسك يخفق بإيقاع يبدو إلكترونيًا أكثر من كونه عضويًا. رسالة تومض على شاشتك العصبية: "تم بدء بروتوكول الوصلة. متبقي 24:00:00." لا تتذكر تثبيت أي شيء. انعكاسك في المرآة المتصدعة يظهر منفذًا خلف أذنك لم يكن هناك بالأمس. المدينة خارج نافذتك تتلألأ بإعلانات النيون بعشرات اللغات التي بالكاد تفهمها. شخص ما يطرق بابك — ثلاث طرقات حادة، ثم صمت.',
        choices: {
          'choice-1': { text: 'افتح الباب بحذر' },
          'choice-2': { text: 'اخرج من نافذة سلم الإنذار' },
        },
      },
      'node-2': {
        title: 'زائرة غير متوقعة',
        narration: 'تفتح الباب قليلاً لتجد امرأة ترتدي سترة جلدية بالية، عيناها مخبأتان خلف عدسات معززة واقعية عاكسة. "أنت من لديه الزرع الجديد"، تعلن بشكل مسطح. "أستطيع مساعدتك، لكن علينا التحرك. الآن." تنظر بقلق نحو الممر. "الشركات تعلم أن شخصًا ما فعّل وصلة متمردة. إنهم يرسلون المنظفين." يمكنك أن تثق بها وتتبعها، أو تُغلق الباب وتفرّ وحدك.',
        choices: {
          'choice-3': { text: 'اتبع المرأة بثقة' },
          'choice-4': { text: 'أغلق الباب واركض في الاتجاه الآخر' },
        },
      },
    },
  },

  // Hindi (हिन्दी)
  hi: {
    title: 'नियॉन सिनेप्स',
    description: 'एक साइबरपंक महानगर में जहाँ मनों को हैक किया जा सकता है, आप गुम हुई यादों और एक रहस्यमय इम्प्लांट के साथ जागते हैं। समय समाप्त होने से पहले सच्चाई का पता लगाएं।',
    author: 'AI कहानी जनरेटर',
    nodes: {
      'node-1': {
        title: 'जागृति',
        narration: 'आप एक तंग अपार्टमेंट में जागते हैं जिसमें ओजोन और सिंथेटिक नूडल्स की गंध है। आपका सिर एक लय में धड़कता है जो कार्बनिक के बजाय इलेक्ट्रॉनिक लगता है। आपके न्यूरल HUD पर एक संदेश टिमटिमाता है: "सिनेप्स प्रोटोकॉल शुरू हुआ। 24:00:00 शेष।" आपको कुछ भी इंस्टॉल करने की याद नहीं है। टूटे हुए आईने में आपका प्रतिबिंब आपके कान के पीछे एक पोर्ट दिखाता है जो कल तक नहीं था। खिड़की के बाहर शहर उन दर्जनों भाषाओं में नियॉन विज्ञापनों के साथ धड़कता है जिन्हें आप शायद ही समझते हैं। कोई आपके दरवाजे पर दस्तक देता है — तीन तेज़ ठोकरें, फिर खामोशी।',
        choices: {
          'choice-1': { text: 'सावधानी से दरवाज़ा खोलें' },
          'choice-2': { text: 'फायर एस्केप खिड़की से बाहर निकलें' },
        },
      },
      'node-2': {
        title: 'अप्रत्याशित आगंतुक',
        narration: 'आप दरवाज़ा थोड़ा खोलते हैं और एक घिसी हुई लेदर जैकेट में एक महिला को पाते हैं, उसकी आँखें आरआर लेंस के पीछे छिपी हैं। "तुम्हीं हो नए इम्प्लांट वाले," वह सपाट ढंग से कहती है। "मैं तुम्हारी मदद कर सकती हूँ, लेकिन हमें चलना होगा। अभी।" वह घबराहट में गलियारे की ओर देखती है। "कॉर्पोरेशनों को पता है कि किसी ने एक बगावती सिनेप्स सक्रिय किया है। वे सफाई कर्मचारी भेज रहे हैं।" आप उस पर विश्वास करके उसके साथ जा सकते हैं, या दरवाज़ा बंद करके अकेले भाग सकते हैं।',
        choices: {
          'choice-3': { text: 'विश्वास करके महिला के साथ जाएँ' },
          'choice-4': { text: 'दरवाज़ा बंद करें और दूसरी तरफ भागें' },
        },
      },
    },
  },

  // Dutch (Nederlands)
  nl: {
    title: 'Neon Synaps',
    description: 'In een cyberpunk-metropool waar gedachten kunnen worden gehackt, word je wakker met ontbrekende herinneringen en een mysterieus implantaat. Ontdek de waarheid voordat je tijd om is.',
    author: 'AI Verhalengenerator',
    nodes: {
      'node-1': {
        title: 'Ontwaken',
        narration: 'Je wordt wakker in een krap appartement dat ruikt naar ozon en synthetische noodles. Je hoofd bonst in een ritme dat elektronisch lijkt in plaats van organisch. Een bericht knippert op je neurale HUD: "SYNAPS PROTOCOL GEÏNITIEERD. 24:00:00 RESTEREND." Je herinnert je niet dat je iets hebt geïnstalleerd. Je weerspiegeling in de gebarsten spiegel toont een poort achter je oor die er gisteren niet was. De stad buiten je raars pulseert met neonadvertenties in een dozijn talen die je nauwelijks begrijpt. Iemand klopt op je deur — drie harde kloppen, dan stilte.',
        choices: {
          'choice-1': { text: 'Open de deur voorzichtig' },
          'choice-2': { text: 'Klim uit het brandtrapraam' },
        },
      },
      'node-2': {
        title: 'Onverwachte Bezoeker',
        narration: 'Je doet de deur op een kiertje en vindt een vrouw in een versleten leren jas, haar ogen verborgen achter gespiegelde AR-lenzen. "Jij bent degene met het nieuwe implantaat," verklaart ze vlak. "Ik kan je helpen, maar we moeten bewegen. Nu." Ze kijkt nerveus de gang in. "De corporaties weten dat iemand een rebelse synaps heeft geactiveerd. Ze sturen cleaners." Je zou haar kunnen vertrouwen en volgen, of de deur dichtslaan en alleen rennen.',
        choices: {
          'choice-3': { text: 'Volg de vrouw vertrouwend' },
          'choice-4': { text: 'Slam de deur en ren de andere kant op' },
        },
      },
    },
  },

  // Polish (Polski)
  pl: {
    title: 'Neonowa Synapsa',
    description: 'W cyberpunkowej metropolii, gdzie umysły można zhakować, budzisz się z brakującymi wspomnieniami i tajemniczym implantem. Odkryj prawdę, zanim skończy się twój czas.',
    author: 'Generator Historii AI',
    nodes: {
      'node-1': {
        title: 'Przebudzenie',
        narration: 'Budzisz się w ciasnym mieszkaniu, które pachnie ozonem i syntetycznym makaronem. Twoja głowa bije rytmem, który wydaje się elektroniczny, a nie organiczny. Wiadomość miga na twoim neuralnym HUD: "PROTOKÓŁ SYNAPSY ZAINICJOWANY. 24:00:00 POZOSTAŁO." Nie pamiętasz instalacji czegokolwiek. Twoje odbicie w popękanym lustrze pokazuje port za uchem, którego wczoraj nie było. Miasto za oknem pulsuje neonowymi reklamami w tuzinie języków, których ledwo rozumiesz. Ktoś puka do twoich drzwi — trzy ostre uderzenia, potem cisza.',
        choices: {
          'choice-1': { text: 'Ostrożnie otworzyć drzwi' },
          'choice-2': { text: 'Wyjść przez okno straży pożarowej' },
        },
      },
      'node-2': {
        title: 'Nieoczekiwany Gość',
        narration: 'Uchylasz drzwi i widzisz kobietę w znoszonej skórzanej kurtce, jej oczy ukryte za lustrzanymi soczewkami AR. «Ty jesteś ten z nowym implantem», oznajmia płasko. «Mogę ci pomóc, ale musimy się ruszyć. Teraz». Nerwowo spogląda na korytarz. «Korporacje wiedzą, że ktoś aktywował buntowniczą synapsę. Wysyłają czyścicieli». Możesz jej zaufać i iść, lub trzasnąć drzwiami i uciekać samemu.',
        choices: {
          'choice-3': { text: 'Zaufać i iść za kobietą' },
          'choice-4': { text: 'Trzasnąć drzwiami i uciekać w drugą stronę' },
        },
      },
    },
  },

  // Turkish (Türkçe)
  tr: {
    title: 'Neon Sinaps',
    description: 'Zihinlerin hacklenebildiği bir siberpunk metropolde, eksik anılar ve gizemli bir implantla uyanıyorsun. Zamanın tükenmeden önce gerçeği ortaya çıkar.',
    author: 'AI Hikaye Oluşturucu',
    nodes: {
      'node-1': {
        title: 'Uyanış',
        narration: 'Ozon ve sentetik erişte kokan dar bir apartmanda uyanıyorsun. Kafan, organik yerine elektronikmiş gibi duran bir ritimle çarpıyor. Sinirsel HUD\'unda bir mesaj yanıp sönüyor: "SİNAPS PROTOKOLÜ BAŞLATILDI. KALAN 24:00:00." Hiçbir şey yüklediğini hatırlamıyorsun. Çatlamış aynadaki yansıman, dün orada olmayan kulağının arkasında bir port gösteriyor. Pencerenin dışındaki şehir, zar zor anladığın düzinelerce dilde neon reklamlarla nabız atıyor. Biri kapını çalıyor — üç kesik vuruş, ardından sessizlik.',
        choices: {
          'choice-1': { text: 'Kapıyı dikkatlice aç' },
          'choice-2': { text: 'Yangın merdiveni penceresinden dışarı tırman' },
        },
      },
      'node-2': {
        title: 'Beklenmedik Ziyaretçi',
        narration: 'Kapıyı aralayıp yıpranmış bir deri ceket giyen bir kadın buluyorsun, gözleri aynalı AR lenslerin arkasında gizli. "Yeni implanta sahip olan sensin," diye düz bir şekilde bildiriyor. "Sana yardım edebilirim, ama hareket etmemiz lazım. Şimdi." Gergin bir şekilde koridora bakıyor. "Şirketler birinin asi bir sinapsı aktive ettiğini biliyor. Temizlikçiler gönderiyorlar." Ona güvenip takip edebilir veya kapıyı çarpıp tek başına kaçabilirsin.',
        choices: {
          'choice-3': { text: 'Güvenerek kadını takip et' },
          'choice-4': { text: 'Kapıyı çarp ve diğer tarafa koş' },
        },
      },
    },
  },
};
