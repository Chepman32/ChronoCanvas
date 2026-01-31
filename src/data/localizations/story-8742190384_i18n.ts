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

export const cityOfSecondChancesTranslations: Partial<Record<Language, StoryTranslations>> = {
  // English
  en: {
    title: 'City of Second Chances',
    description: 'A sudden downpour strands you in a city you once called home--and where you left a love unfinished. One night becomes a chain of small, brave choices: a cafe, a bookshop, a rooftop, a ferry. Find your way back to the truth--or toward something entirely new.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Rain Arrival',
        narration: 'Night rain slicks the avenue into a mirror, neon smeared like brushstrokes across the asphalt. Your suitcase is heavier than it should be, full of things you did not say last time. A gust pushes you beneath an awning; the city smells like coffee and thunder. Somewhere a train bell clatters. You tell yourself it is only one night--enough to decide if you will knock on Riley\'s door.',
        choices: {
          'story-8742190384-c1': {
            text: 'Duck into the cafe for warmth.',
            description: 'You might gather your thoughts--and courage.',
          },
          'story-8742190384-c2': {
            text: 'Head for the station instead.',
            description: 'Trains mean exits--and arrivals.',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Warm Refuge',
        narration: 'Milk spirals into a small galaxy atop your latte while the windows bead with rain. The barista chats about a late-night reading at the bookshop down the block. Your phone vibrates on the saucer, Riley\'s name still pinned to the top of your messages like a promise you never kept. The cup warms your hands; your courage is slower to simmer. You must decide your next step carefully.',
        choices: {
          'story-8742190384-c3': {
            text: 'Ask about the bookshop reading.',
            description: 'Stories might open doorways.',
          },
          'story-8742190384-c4': {
            text: 'Check the message from Riley.',
            description: 'See what words await you.',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Fragments of Hope',
        narration: 'The barista mentions someone who sounds like Riley was asking about you yesterday. Your phone shows a simple text: "In town?" The coincidence prickles your skin. The rain drums harder against the glass, as if urging you toward a decision. You could pursue this lead at the bookshop, or you could reply directly and change everything.',
        choices: {
          'story-8742190384-c5': {
            text: 'Walk to the bookshop to investigate.',
            description: 'Let the trail guide your feet.',
          },
          'story-8742190384-c6': {
            text: 'Send Riley a careful reply.',
            description: '"Still here. Could we talk?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Reaching Out',
        narration: 'Your message hovers in the digital ether, a small flag of truce raised in the night. The bookshop awaits three blocks east, its windows glowing like a lantern in the rain. Either path leads toward the same uncertainty. Your heart pounds with the weight of words unsaid for too long. You must choose how to bridge the silence between you.',
        choices: {
          'story-8742190384-c7': {
            text: 'Wait for Riley\'s response.',
            description: 'Let them set the terms.',
          },
          'story-8742190384-c8': {
            text: 'Go to the bookshop regardless.',
            description: 'Movement beats waiting.',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Words Arrive',
        narration: 'Your phone lights up: "Station. Ten minutes." The words are sparse, but they are an opening. You gather your coat, heart hammering against your ribs like a bird against glass. The rain has not stopped, but you no longer notice it. Every step toward the station feels like crossing a threshold you cannot uncross. Time compresses; the moment expands.',
        choices: {
          'story-8742190384-c9': {
            text: 'Walk quickly to the station.',
            description: 'Do not keep them waiting.',
          },
          'story-8742190384-c10': {
            text: 'Take a moment to compose yourself.',
            description: 'Breathe before the reckoning.',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Station Arrival',
        narration: 'The station hums with departures, boards flicking letters like restless eyelids. A laugh you know drifts from the mezzanine--familiar as a favorite song. You freeze halfway up the steps, suitcase thudding on the stair. There, by the coffee kiosk, stands Riley with rain-dotted hair and an expression you cannot quite read. Your breath catches.',
        choices: {
          'story-8742190384-c11': {
            text: 'Call out their name.',
            description: 'Let the station witness this.',
          },
          'story-8742190384-c12': {
            text: 'Approach slowly, letting them see you.',
            description: 'Give them time to adjust.',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Recognition',
        narration: 'Riley turns, and time stutters. Their eyes widen, then soften with something complicated--hurt, hope, hesitation. "You came," they say, and it sounds like an accusation and a relief braided together. The station noise fades to a murmur. You have rehearsed this moment a thousand times in your head, but now all your speeches dissolve. You must choose what truth to speak first.',
        choices: {
          'story-8742190384-c13': {
            text: 'Apologize for leaving.',
            description: 'Start with the hardest truth.',
          },
          'story-8742190384-c14': {
            text: 'Ask how they have been.',
            description: 'Begin gently, bridge the gap.',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Tentative Bridge',
        narration: 'Riley listens, really listens, in a way you had forgotten people could. Their coffee goes cold between their hands as you speak. The station crowds flow around you like water around stones. Something fragile begins to form in the space between your words--a possibility, a maybe, a door cracking open. You need to suggest where this conversation can continue.',
        choices: {
          'story-8742190384-c15': {
            text: 'Suggest walking to the park.',
            description: 'Movement might ease the tension.',
          },
          'story-8742190384-c16': {
            text: 'Propose the rooftop you both loved.',
            description: 'Shared memory as foundation.',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Shared Steps',
        narration: 'You walk together through streets that remember your footsteps. The rain has softened to a mist that clings to your hair like memories. Riley walks close enough that your shoulders brush, far enough that you cannot read their thoughts. You pass the old gallery where you had your first date, the bakery where you fought and made up. Each landmark is a ghost you must decide whether to acknowledge.',
        choices: {
          'story-8742190384-c17': {
            text: 'Mention the gallery as you pass.',
            description: 'Honor the history between you.',
          },
          'story-8742190384-c18': {
            text: 'Focus on the present moment.',
            description: 'Let the past rest for now.',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Arrival Point',
        narration: 'You reach the old bench in the riverside park where you once talked until dawn. The wood is worn smooth by countless conversations, countless confessions. Riley sits, leaving space that could be invitation or distance. The city lights dance on the water like scattered stars. You are here, together, after everything. The moment feels suspended, waiting for you to breathe life into what comes next.',
        choices: {
          'story-8742190384-c19': {
            text: 'Sit close and begin to explain.',
            description: 'Offer the full truth at last.',
          },
          'story-8742190384-c20': {
            text: 'Ask what they need from you.',
            description: 'Let them guide the healing.',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Honest Ground',
        narration: 'Words flow like the river beside you--sometimes gentle, sometimes torrential. You speak of fear and pride, of the silence that grew between you like ivy, of the nights you almost called. Riley meets your eyes, and you see your own longing reflected there. The bench holds you both as the truth settles, heavy and necessary. You have arrived at the threshold of decision. This is where paths truly diverge.',
        choices: {
          'story-8742190384-c21': {
            text: 'Suggest a ferry ride together.',
            description: 'Let the water carry you forward.',
          },
          'story-8742190384-c22': {
            text: 'Propose starting fresh, here and now.',
            description: 'A new chapter on familiar soil.',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Water\'s Edge',
        narration: 'The ferry terminal glows against the dark water, a promise of departure and return. Riley\'s hand finds yours, tentative but warm. "I\'m scared," they admit, and you squeeze their fingers in acknowledgment. Fear is the price of hope, you realize. The boat horn sounds, low and patient. You stand at the edge of something vast--an ocean of possibility, or the deep water of old patterns.',
        choices: {
          'story-8742190384-c23': {
            text: 'Board the ferry together.',
            description: 'Commit to the journey.',
          },
          'story-8742190384-c24': {
            text: 'Suggest watching from the pier instead.',
            description: 'Stay anchored, stay safe.',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Fresh Soil',
        narration: 'You speak of starting over--not where you left off, but where you are now, two changed people with shared history and separate growth. Riley nods slowly, considering. "That means letting some things go," they say, and you know they are right. The past is a garden you cannot unplant, but you can choose what to tend now. The city around you breathes with possibility.',
        choices: {
          'story-8742190384-c25': {
            text: 'Walk to the waterfront festival.',
            description: 'Celebrate this fragile new start.',
          },
          'story-8742190384-c26': {
            text: 'Find a quiet place to plan tomorrow.',
            description: 'Build the foundation carefully.',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Crossing Waters',
        narration: 'The ferry peels away from the dock, city lights loosening into a necklace on the dark water. You lean against the rail with Riley beside you, shoulders touching. The conversation has gentled into comfortable silence, broken occasionally by small observations--a constellation, a passing boat, a memory sparked by the salt air. You are moving, literally and figuratively, toward an unknown shore.',
        choices: {
          'story-8742190384-c27': {
            text: 'Speak of practical tomorrows.',
            description: 'Make plans, build structure.',
          },
          'story-8742190384-c28': {
            text: 'Simply hold the moment.',
            description: 'Let the water carry you both.',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Anchored View',
        narration: 'You remain on the pier, watching the ferry dissolve into the dark horizon. Riley stands close, wrapped in thought as much as in coat. "We are good at almost," they say quietly, and the words sting with truth. Almost talking, almost staying, almost loving fully. You feel the weight of all your almosts pressing down. But standing here, you sense something shifting.',
        choices: {
          'story-8742190384-c29': {
            text: 'Promise to stop almost-ing.',
            description: 'Commit to fullness, finally.',
          },
          'story-8742190384-c30': {
            text: 'Acknowledge the pattern honestly.',
            description: 'See clearly before you leap.',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Lights and Music',
        narration: 'The waterfront festival lifts sparks into the dark sky, fireworks blooming like giant flowers of light. Music threads through the crowd, and you find yourselves dancing without meaning to, bodies remembering each other\'s rhythms. Riley laughs, really laughs, and the sound loosens something tight in your chest. Around you, strangers celebrate their own stories, their own second chances.',
        choices: {
          'story-8742190384-c31': {
            text: 'Kiss them as the fireworks peak.',
            description: 'Let joy decide for you.',
          },
          'story-8742190384-c32': {
            text: 'Whisper your hopes for the future.',
            description: 'Speak your dreams aloud.',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Intimate Maps',
        narration: 'You find a twenty-four-hour diner glowing like a lighthouse on the quiet street. Over pie and coffee, you sketch the outlines of a shared future--not grand declarations, but small practicalities. Who will call whom, how often, what you both need to feel safe. Riley draws circles on the napkin, connecting your lives with careful ink. It is undramatic, unromantic, and more precious than any gesture.',
        choices: {
          'story-8742190384-c33': {
            text: 'Exchange keys as a symbol.',
            description: 'Physical trust, tangible promise.',
          },
          'story-8742190384-c34': {
            text: 'Agree to meet again tomorrow.',
            description: 'One step, then another.',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Building Together',
        narration: 'You speak of apartments and schedules, of the logistics of love that outlasts infatuation. Riley meets your practical with their own, and together you construct a scaffold sturdy enough to hold real life. The ferry continues its crossing, but you have already reached a shore--solid ground after stormy seas. Tomorrow waits with all its ordinary challenges.',
        choices: {
          'story-8742190384-c35': {
            text: 'Commit to the work of us.',
            description: 'Choose the path of partnership.',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Perfect Moment',
        narration: 'The world holds its breath. Fireworks paint Riley\'s face in gold and rose, and you kiss them as the sky blooms overhead. It is not a perfect love--you have seen each other\'s flaws too clearly for that--but it is a perfect moment, and you choose to trust that more moments will follow. The crowd cheers around you, celebrating your private joy with their public noise.',
        choices: {
          'story-8742190384-c36': {
            text: 'Let this joy carry you forward.',
            description: 'Trust the feeling, trust them.',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Solid Ground',
        narration: 'You make promises you intend to keep, spoken simply without flourish. Riley receives them with nodding gravity, understanding the weight of words after so much silence. The diner\'s neon buzzes softly as the night deepens around you. You have chosen not passion\'s flame but love\'s steady burn, and it feels like coming home to a place you have never quite allowed yourself to inhabit.',
        choices: {
          'story-8742190384-c37': {
            text: 'Begin again, differently.',
            description: 'A new chapter, better written.',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Gentle Separation',
        narration: 'You part with honesty rather than hope, acknowledging that some love stories are beautiful without being permanent. Riley\'s eyes glisten but they nod, understanding. "Thank you for tonight," they say, and you know they mean the closure, not just the company. You walk in opposite directions, lighter for having spoken truth, sad for what cannot be salvaged.',
        choices: {
          'story-8742190384-c38': {
            text: 'Carry the lesson forward.',
            description: 'Some endings are also gifts.',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Across the Water',
        narration: 'The ferry docks at the far shore, city lights twinkling across the water like memories. You disembark together, Riley\'s hand steady in yours. You talk about ordinary things--what to cook, which plant you keep forgetting to water, whose turn it is to make coffee. Promises arrive without ceremony, woven into the fabric of practical tomorrow. The wake writes a new line behind you, erasing nothing but carrying you forward into the life you choose to build, choice by choice, day by day.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'City of Sparks',
        narration: 'Fireworks stitch the skyline, bright and brief and true. You and Riley speak the hard parts cleanly, then laugh at how human you both are--fumbling, hopeful, stubborn in your love. When the last bloom fades, the dark feels friendly again, a blanket rather than a void. You walk home together through streets silver with rain, no rush, enough time stretching ahead like a gift you finally feel worthy of receiving. The city that once held your goodbye now witnesses your hello.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Another Beginning',
        narration: 'Morning finds you at a corner cafe, sunlight streaming through windows that once reflected your goodbye. You and Riley sit across from each other with notebooks and coffee, sketching the architecture of a relationship rebuilt on stronger foundations. Not the same love as before--something wiser, more honest, more resilient. You do not promise forever; you promise to keep showing up, to keep choosing, to keep building. Some loves return; some loves teach you how to love better. Yours, perhaps, is both.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Quiet Apartment',
        narration: 'Back in your rented room, the neon sign\'s blue glow softens at the edges. You brew tea, open the window, and let the rain finish its sentence. Not tonight, you decide--but not never. You send Riley one final message, a wish for their happiness expressed with the sincerity only closure can bring. The city will still be here when you are ready to say more, to someone new or perhaps to yourself. For now, you let the rain sing you to sleep, grateful for second chances even when they lead to different doors than you hoped.',
        choices: {},
      },
    },
  },

  // Russian
  ru: {
    title: 'Город Вторых Шансов',
    description: 'Внезапный ливень задерживает вас в городе, который вы когда-то называли домом, и где оставили любовь незавершенной. Одна ночь превращается в цепочку маленьких, смелых выборов: кафе, книжный магазин, крыша, паром. Найдите путь обратно к правде--или к чему-то совершенно новому.',
    author: 'А. Марин',
    nodes: {
      'story-8742190384-1': {
        title: 'Прибытие под Дождем',
        narration: 'Ночной дождь превращает проспект в зеркало, неон размазан по асфальту мазками кисти. Ваш чемодан тяжелее, чем должен быть, полный вещей, которые вы не сказали в прошлый раз. Порыв ветра толкает вас под навес; город пахнет кофе и грозой. Где-то звенит колокол поезда. Вы говорите себе, что это всего одна ночь--достаточно, чтобы решить, постучитесь ли вы в дверь Райли.',
        choices: {
          'story-8742190384-c1': {
            text: 'Скрыться в кафе ради тепла.',
            description: 'Вы сможете собрать мысли--и смелость.',
          },
          'story-8742190384-c2': {
            text: 'Вместо этого направиться к вокзалу.',
            description: 'Поезда означают выходы--и прибытия.',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Теплое Убежище',
        narration: 'Молоко закручивается в маленькую галактику на вашем латте, пока окна покрываются каплями дождя. Бариста болтает о позднем чтении в книжном магазине через квартал. Ваш телефон вибрирует на блюдце, имя Райли все еще закреплено вверху сообщений, как обещание, которое вы никогда не сдержали. Чашка согревает ваши руки; ваша смелость медленно нагревается. Вы должны тщательно решить следующий шаг.',
        choices: {
          'story-8742190384-c3': {
            text: 'Спросить о чтении в книжном магазине.',
            description: 'Истории могут открыть двери.',
          },
          'story-8742190384-c4': {
            text: 'Проверить сообщение от Райли.',
            description: 'Посмотрите, какие слова ждут вас.',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Осколки Надежды',
        narration: 'Бариста упоминает, что кто-то, похожий на Райли, спрашивал о вас вчера. На вашем телефоне простое сообщение: "В городе?" Совпадение вызывает мурашки на коже. Дождь стучит сильнее по стеклу, словно подгоняя вас к решению. Вы могли бы проследить эту зацепку в книжном магазине, или ответить напрямую и изменить все.',
        choices: {
          'story-8742190384-c5': {
            text: 'Пойти в книжный магазин, чтобы расследовать.',
            description: 'Пусть след ведет ваши ноги.',
          },
          'story-8742190384-c6': {
            text: 'Отправить Райли осторожный ответ.',
            description: '"Еще здесь. Можем поговорить?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Рука Помощи',
        narration: 'Ваше сообщение парит в цифровом эфире, маленький флаг перемирия, поднятый ночью. Книжный магазин ждет тремя кварталами на восток, его окна светятся, как фонарь под дождем. Любой путь ведет к той же неопределенности. Ваше сердце стучит от тяжести слов, невысказанных слишком долго. Вы должны выбрать, как преодолеть молчание между вами.',
        choices: {
          'story-8742190384-c7': {
            text: 'Ждать ответа Райли.',
            description: 'Пусть они задают условия.',
          },
          'story-8742190384-c8': {
            text: 'Все равно пойти в книжный магазин.',
            description: 'Движение лучше ожидания.',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Слова Приходят',
        narration: 'Ваш телефон загорается: "Вокзал. Десять минут." Слова немногочисленны, но это открытие. Вы хватаете пальто, сердце стучит о ребра, как птица о стекло. Дождь не прекратился, но вы больше не замечаете его. Каждый шаг к вокзалу кажется пересечением порога, который нельзя отменить. Время сжимается; момент расширяется.',
        choices: {
          'story-8742190384-c9': {
            text: 'Быстро идти к вокзалу.',
            description: 'Не заставляйте их ждать.',
          },
          'story-8742190384-c10': {
            text: 'Взять момент, чтобы собраться.',
            description: 'Дышите перед разбором.',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Прибытие на Вокзал',
        narration: 'Вокзал гудит от отправлений, табло переключают буквы, как беспокойные веки. Знакомый смех доносится с мезонина--знакомый, как любимая песня. Вы замираете на полпути по ступеням, чемодан стучит по ступеньке. Там, у кофейного киоска, стоит Райли с волосами, усыпанными дождем, и выражением, которое вы не можете прочитать. У вас перехватывает дыхание.',
        choices: {
          'story-8742190384-c11': {
            text: 'Позвать их по имени.',
            description: 'Пусть вокзал станет свидетелем.',
          },
          'story-8742190384-c12': {
            text: 'Подойти медленно, дав увидеть себя.',
            description: 'Дайте им время привыкнуть.',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Узнавание',
        narration: 'Райли поворачивается, и время запинается. Их глаза расширяются, затем смягчаются чем-то сложным--болью, надеждой, нерешительностью. "Ты пришел," говорят они, и это звучит как обвинение и облегчение, сплетенные вместе. Шум вокзала тихнет до шепота. Вы репетировали этот момент тысячу раз в голове, но теперь все ваши речи рассыпаются. Вы должны выбрать, какую правду сказать первой.',
        choices: {
          'story-8742190384-c13': {
            text: 'Извиниться за уход.',
            description: 'Начните с самой трудной правды.',
          },
          'story-8742190384-c14': {
            text: 'Спросить, как они поживают.',
            description: 'Начните мягко, постройте мост.',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Нерешительный Мост',
        narration: 'Райли слушает, действительно слушает, так, как вы забыли, что люди могут. Их кофе остывает в руках, пока вы говорите. Толпы на вокзале текут вокруг вас, как вода вокруг камней. Что-то хрупкое начинает формироваться в пространстве между вашими словами--возможность, может быть, приоткрытая дверь. Вам нужно предложить, где можно продолжить этот разговор.',
        choices: {
          'story-8742190384-c15': {
            text: 'Предложить прогулку в парк.',
            description: 'Движение может облегчить напряжение.',
          },
          'story-8742190384-c16': {
            text: 'Предложить крышу, которую вы оба любили.',
            description: 'Общая память как фундамент.',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Общие Шаги',
        narration: 'Вы идете вместе по улицам, которые помнят ваши шаги. Дождь смягчился до тумана, который цепляется к вашим волосам, как воспоминания. Райли идет достаточно близко, чтобы ваши плечи соприкасались, достаточно далеко, чтобы вы не могли прочитать их мысли. Вы проходите мимо старой галереи, где у вас было первое свидание, пекарни, где вы ссорились и мирились. Каждая достопримечательность--призрак, которого вы должны решить, признавать ли.',
        choices: {
          'story-8742190384-c17': {
            text: 'Упомянуть галерею, проходя мимо.',
            description: 'Почтите историю между вами.',
          },
          'story-8742190384-c18': {
            text: 'Сосредоточиться на настоящем моменте.',
            description: 'Пусть прошлое покоится сейчас.',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Точка Прибытия',
        narration: 'Вы достигаете старой скамейки в прибрежном парке, где вы когда-то разговаривали до рассвета. Дерево отполировано бесчисленными разговорами, бесчисленными признаниями. Райли садится, оставляя пространство, которое может быть приглашением или дистанцией. Огни города танцуют на воде, как рассыпанные звезды. Вы здесь, вместе, после всего. Момент кажется приостановленным, ожидая, когда вы вдохнете жизнь в то, что будет дальше.',
        choices: {
          'story-8742190384-c19': {
            text: 'Сесть близко и начать объяснять.',
            description: 'Наконец предложите полную правду.',
          },
          'story-8742190384-c20': {
            text: 'Спросить, что им нужно от вас.',
            description: 'Пусть они направляют исцеление.',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Честная Земля',
        narration: 'Слова текут, как река рядом с вами--иногда мягко, иногда бурно. Вы говорите о страхе и гордости, о тишине, которая росла между вами, как плющ, о ночах, когда вы почти звонили. Райли встречается с вами взглядом, и вы видите свое собственное тоскование, отраженное там. Скамейка держит вас обоих, пока правда оседает, тяжелая и необходимая. Вы пришли к порогу решения. Здесь пути действительно расходятся.',
        choices: {
          'story-8742190384-c21': {
            text: 'Предложить совместную поездку на пароме.',
            description: 'Пусть вода несет вас вперед.',
          },
          'story-8742190384-c22': {
            text: 'Предложить начать заново, здесь и сейчас.',
            description: 'Новая глава на знакомой почве.',
          },
        },
      },
      'story-8742190384-12': {
        title: 'У Воды',
        narration: 'Паромный терминал светится на фоне темной воды, обещание отправления и возвращения. Рука Райли находит вашу, нерешительная, но теплая. "Мне страшно," признаются они, и вы сжимаете их пальцы в знак признания. Страх--цена надежды, понимаете вы. Звучит горн судна, низкий и терпеливый. Вы стоите на краю чего-то огромного--океана возможностей, или глубоких вод старых паттернов.',
        choices: {
          'story-8742190384-c23': {
            text: 'Сесть на паром вместе.',
            description: 'Верьте в путешествие.',
          },
          'story-8742190384-c24': {
            text: 'Предложить смотреть с пирса вместо этого.',
            description: 'Оставайтесь на якоре, оставайтесь в безопасности.',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Свежая Почва',
        narration: 'Вы говорите о начале заново--не с того места, где остановились, а с того, где вы сейчас, двое изменившихся людей с общей историей и отдельным ростом. Райли медленно кивает, обдумывая. "Это значит отпустить некоторые вещи," говорят они, и вы знаете, что они правы. Прошлое--сад, который вы не можете распахать, но вы можете выбрать, что ухаживать сейчас. Город вокруг вас дышит возможностями.',
        choices: {
          'story-8742190384-c25': {
            text: 'Пойти на фестиваль на набережной.',
            description: 'Отпразднуйте этот хрупкий новый старт.',
          },
          'story-8742190384-c26': {
            text: 'Найти тихое место, чтобы спланировать завтра.',
            description: 'Стройте фундамент осторожно.',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Пересечение Вод',
        narration: 'Паром отчаливает от пристани, огни города размываются в ожерелье на темной воде. Вы прислоняетесь к поручню с Райли рядом, плечи соприкасаются. Разговор смягчился в удобное молчание, нарушаемое изредка маленькими замечаниями--созвездие, проходящая лодка, воспоминание, вызванное соленым воздухом. Вы движетесь, буквально и фигурально, к неизвестному берегу.',
        choices: {
          'story-8742190384-c27': {
            text: 'Говорить о практичных завтрашних днях.',
            description: 'Стройте планы, создавайте структуру.',
          },
          'story-8742190384-c28': {
            text: 'Просто удержать момент.',
            description: 'Пусть вода несет вас обоих.',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Вид с Якоря',
        narration: 'Вы остаетесь на пирсе, наблюдая, как паром растворяется в темном горизонте. Райли стоит близко, закутанная в мысли не меньше, чем в пальто. "Мы хороши в почти," тихо говорят они, и слова жгут правдой. Почти разговариваем, почти остаемся, почти любим полностью. Вы чувствуете тяжесть всех ваших почти, давящую на вас. Но стоя здесь, вы чувствуете что-то сдвигающееся.',
        choices: {
          'story-8742190384-c29': {
            text: 'Пообещать перестать почти-нить.',
            description: 'Наконец верьте в полноту.',
          },
          'story-8742190384-c30': {
            text: 'Честно признать паттерн.',
            description: 'Смотрите ясно, прежде чем прыгать.',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Огни и Музыка',
        narration: 'Фестиваль на набережной поднимает искры в темное небо, фейерверки расцветают, как гигантские цветы света. Музыка пронизывает толпу, и вы оказываетесь танцующими, не желая того, тела помнящие ритмы друг друга. Райли смеется, действительно смеется, и звук развязывает что-то тугое в вашей груди. Вокруг вас незнакомцы празднуют свои собственные истории, свои собственные вторые шансы.',
        choices: {
          'story-8742190384-c31': {
            text: 'Поцеловать их, когда фейерверк на пике.',
            description: 'Пусть радость решает за вас.',
          },
          'story-8742190384-c32': {
            text: 'Прошептать свои надежды на будущее.',
            description: 'Произнесите свои мечты вслух.',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Интимные Карты',
        narration: 'Вы находите круглосуточную закусочную, светящуюся, как маяк на тихой улице. Над пирогом и кофе вы набрасываете очертания общего будущего--не громкие декларации, а мелкие практичности. Кто кому позвонит, как часто, что вам обоим нужно, чтобы чувствовать себя в безопасности. Райли рисует круги на салфетке, соединяя ваши жизни тщательными чернилами. Это недраматично, неромантично, и драгоценнее любого жеста.',
        choices: {
          'story-8742190384-c33': {
            text: 'Обменяться ключами как символом.',
            description: 'Физическое доверие, осязаемое обещание.',
          },
          'story-8742190384-c34': {
            text: 'Договориться встретиться снова завтра.',
            description: 'Один шаг, затем другой.',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Строительство Вместе',
        narration: 'Вы говорите о квартирах и расписаниях, о логистике любви, которая переживает увлечение. Райли встречает вашу практичность своей, и вместе вы строите леса, достаточно прочные, чтобы выдержать реальную жизнь. Паром продолжает свой переход, но вы уже достигли берега--твердой почвы после бурного моря. Завтра ждет со всеми своими обычными вызовами.',
        choices: {
          'story-8742190384-c35': {
            text: 'Верить в работу "нас".',
            description: 'Выберите путь партнерства.',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Идеальный Момент',
        narration: 'Мир замирает, затаив дыхание. Фейерверки раскрашивают лицо Райли в золото и розу, и вы целуете их, пока небо цветет над головой. Это не идеальная любовь--вы слишком ясно видели недостатки друг друга для этого--но это идеальный момент, и вы выбираете верить, что за ним последуют другие. Толпа аплодирует вокруг вас, празднуя вашу личную радость своим публичным шумом.',
        choices: {
          'story-8742190384-c36': {
            text: 'Пусть эта радость несет вас вперед.',
            description: 'Верьте чувству, верьте им.',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Твердая Почва',
        narration: 'Вы даете обещания, которые намерены сдержать, сказанные просто, без украшательств. Райли принимает их с кивающей серьезностью, понимая вес слов после столького молчания. Неон закусочной тихо жужжит, пока ночь глубокеет вокруг вас. Вы выбрали не пламя страсти, а устойчивое горение любви, и это похоже на возвращение домой в место, в котором вы никогда не позволяли себе жить.',
        choices: {
          'story-8742190384-c37': {
            text: 'Начать снова, по-другому.',
            description: 'Новая глава, лучше написанная.',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Мягкое Расставание',
        narration: 'Вы расстаетесь с честностью, а не надеждой, признавая, что некоторые истории любви прекрасны, не будучи вечными. Глаза Райли блестят, но они кивают, понимая. "Спасибо за эту ночь," говорят они, и вы знаете, что они имеют в виду завершение, а не просто компанию. Вы идете в противоположных направлениях, легче от произнесенной правды, грустно за то, что нельзя спасти.',
        choices: {
          'story-8742190384-c38': {
            text: 'Нести урок вперед.',
            description: 'Некоторые концы также являются подарками.',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Через Воду',
        narration: 'Паром причаливает к дальнему берегу, огни города мерцают по воде, как воспоминания. Вы сходите вместе, рука Райли тверда в вашей. Вы говорите о обычных вещах--что готовить, какое растение вы постоянно забываете поливать, чья очередь заваривать кофе. Обещания приходят без церемоний, вплетенные в ткань практичного завтра. След пишет новую линию позади вас, ничего не стирая, но неся вас вперед в жизнь, которую вы выбираете строить, выбор за выбором, день за днем.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Город Искр',
        narration: 'Фейерверки сшивают горизонт, яркие, кратковременные и истинные. Вы и Райли чисто произносите трудные части, затем смеетесь над тем, какие вы оба человечные--неуклюжие, надеющиеся, упрямые в своей любви. Когда последний цветок угасает, темнота снова кажется дружелюбной, одеялом, а не пустотой. Вы идете домой вместе по улицам, серебряным от дождя, не спеша, достаточно времени растяжется впереди, как подарок, который вы наконец чувствуете достойными получить. Город, который однажды держал ваше прощание, теперь свидетельствует о вашем приветствии.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Еще Одно Начало',
        narration: 'Утро находит вас в угловом кафе, солнечный свет струится через окна, которые когда-то отражали ваше прощание. Вы и Райли сидите друг напротив друга с блокнотами и кофе, набрасывая архитектуру отношений, перестроенных на более прочных фундаментах. Не та же любовь, что раньше--что-то более мудрое, более честное, более устойчивое. Вы не обещаете вечность; вы обещаете продолжать появляться, продолжать выбирать, продолжать строить. Некоторые любви возвращаются; некоторые любви учат вас любить лучше. Ваша, возможно, и то, и другое.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Тихая Квартира',
        narration: 'Вернувшись в свою съемную комнату, синее свечение неоновой вывески смягчается по краям. Вы завариваете чай, открываете окно и позволяете дождю закончить свое предложение. Не сегодня вечером, решаете вы--но не никогда. Вы отправляете Райли последнее сообщение, пожелание их счастья, выраженное с искренностью, которую может принести только завершение. Город все еще будет здесь, когда вы будете готовы сказать больше, кому-то новому или, возможно, себе. Пока что вы позволяете дождю укачать вас в сон, благодарные за вторые шансы, даже когда они ведут к другим дверям, чем вы надеялись.',
        choices: {},
      },
    },
  },

  // Spanish
  es: {
    title: 'Ciudad de Segundas Oportunidades',
    description: 'Un aguacero repentino te atrapa en una ciudad que alguna vez llamaste hogar--y donde dejaste un amor inconcluso. Una noche se convierte en una cadena de pequenas, valientes decisiones: un cafe, una libreria, una azotea, un ferry. Encuentra tu camino de regreso a la verdad--o hacia algo completamente nuevo.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Llegada bajo la Lluvia',
        narration: 'La lluvia nocturna convierte la avenida en un espejo, el neon difuminado como pinceladas sobre el asfalto. Tu maleta es mas pesada de lo que deberia, llena de cosas que no dijiste la ultima vez. Una rafaga te empuja bajo un toldo; la ciudad huele a cafe y truenos. En algun lugar suena una campana de tren. Te dices que es solo una noche--suficiente para decidir si llamaras a la puerta de Riley.',
        choices: {
          'story-8742190384-c1': {
            text: 'Refugiarse en el cafe para calentarse.',
            description: 'Podrias reunir tus pensamientos--y valor.',
          },
          'story-8742190384-c2': {
            text: 'Dirigirse a la estacion en su lugar.',
            description: 'Los trenes significan salidas--y llegadas.',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Refugio Calido',
        narration: 'La leche se arremolina en una pequena galaxia sobre tu latte mientras las ventanas se cubren de gotas de lluvia. El barista charla sobre una lectura nocturna en la libreria de la cuadra. Tu telefono vibra en el platillo, el nombre de Riley aun fijado en la parte superior de tus mensajes como una promesa que nunca cumpliste. La taza calienta tus manos; tu valor tarda mas en hervir. Debes decidir tu proximo paso con cuidado.',
        choices: {
          'story-8742190384-c3': {
            text: 'Preguntar sobre la lectura en la libreria.',
            description: 'Las historias podrian abrir puertas.',
          },
          'story-8742190384-c4': {
            text: 'Revisar el mensaje de Riley.',
            description: 'Mira que palabras te esperan.',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Fragmentos de Esperanza',
        narration: 'El barista menciona que alguien que parece Riley estuvo preguntando por ti ayer. Tu telefono muestra un simple mensaje: "En la ciudad?" La coincidencia eriza tu piel. La lluvia golpea mas fuerte contra el cristal, como instandote a una decision. Podrias seguir esta pista en la libreria, o responder directamente y cambiar todo.',
        choices: {
          'story-8742190384-c5': {
            text: 'Caminar a la libreria para investigar.',
            description: 'Deja que el rastro guie tus pies.',
          },
          'story-8742190384-c6': {
            text: 'Enviar a Riley una respuesta cuidadosa.',
            description: '"Todavia aqui. Podemos hablar?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Extender la Mano',
        narration: 'Tu mensaje flota en el eter digital, una pequena bandera de tregua izada en la noche. La libreria espera tres cuadras al este, sus ventanas brillando como un farol bajo la lluvia. Cualquier camino conduce hacia la misma incertidumbre. Tu corazon late con el peso de las palabras no dichas durante demasiado tiempo. Debes elegir como tender un puente sobre el silencio entre vosotros.',
        choices: {
          'story-8742190384-c7': {
            text: 'Esperar la respuesta de Riley.',
            description: 'Deja que ellos establezcan los terminos.',
          },
          'story-8742190384-c8': {
            text: 'Ir a la libreria de todos modos.',
            description: 'El movimiento vence a la espera.',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Las Palabras Llegan',
        narration: 'Tu telefono se ilumina: "Estacion. Diez minutos." Las palabras son escasas, pero son una apertura. Recoges tu abrigo, el corazon golpeando contra tus costillas como un pajaro contra el cristal. La lluvia no ha cesado, pero ya no la notas. Cada paso hacia la estacion se siente como cruzar un umbral que no puedes deshacer. El tiempo se comprime; el momento se expande.',
        choices: {
          'story-8742190384-c9': {
            text: 'Caminar rapidamente a la estacion.',
            description: 'No los hagas esperar.',
          },
          'story-8742190384-c10': {
            text: 'Tomar un momento para componerte.',
            description: 'Respira antes del ajuste de cuentas.',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Llegada a la Estacion',
        narration: 'La estacion zumba con salidas, los tableros cambiando letras como parpados inquietos. Una risa que conoces flota desde el entresuelo--familiar como una cancion favorita. Te congelas a mitad de camino por las escaleras, la maleta golpeando en el escalon. Alli, junto al quiosco de cafe, esta Riley con el pelo salpicado de lluvia y una expresion que no puedes leer del todo. Se te corta la respiracion.',
        choices: {
          'story-8742190384-c11': {
            text: 'Llamar su nombre.',
            description: 'Deja que la estacion sea testigo.',
          },
          'story-8742190384-c12': {
            text: 'Acercarse lentamente, dejandote ver.',
            description: 'Dales tiempo para ajustarse.',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Reconocimiento',
        narration: 'Riley se gira, y el tiempo tartamudea. Sus ojos se ensanchan, luego se suavizan con algo complicado--dolor, esperanza, vacilacion. "Viniste," dicen, y suena como una acusacion y un alivio entrelazados. El ruido de la estacion se desvanece a un murmullo. Has ensayado este momento mil veces en tu cabeza, pero ahora todos tus discursos se disuelven. Debes elegir que verdad decir primero.',
        choices: {
          'story-8742190384-c13': {
            text: 'Disculparse por irse.',
            description: 'Comienza con la verdad mas dificil.',
          },
          'story-8742190384-c14': {
            text: 'Preguntar como han estado.',
            description: 'Comienza suavemente, construye el puente.',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Puente Tentativo',
        narration: 'Riley escucha, realmente escucha, de una manera que habias olvidado que la gente podia. Su cafe se enfria entre sus manos mientras hablas. Las multitudes de la estacion fluyen a tu alrededor como agua alrededor de piedras. Algo fragil comienza a formarse en el espacio entre tus palabras--una posibilidad, un quiza, una puerta entreabierta. Necesitas sugerir donde puede continuar esta conversacion.',
        choices: {
          'story-8742190384-c15': {
            text: 'Sugerir caminar al parque.',
            description: 'El movimiento podria aliviar la tension.',
          },
          'story-8742190384-c16': {
            text: 'Proponer la azotea que ambos amaban.',
            description: 'Memoria compartida como fundamento.',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Pasos Compartidos',
        narration: 'Caminan juntos por calles que recuerdan sus pasos. La lluvia se ha suavizado a una neblina que se adhiere a tu pelo como recuerdos. Riley camina lo suficientemente cerca como para que sus hombros rocen, lo suficientemente lejos como para que no puedas leer sus pensamientos. Pasas por la antigua galeria donde tuvieron su primera cita, la panaderia donde pelearon y se reconciliaron. Cada hito es un fantasma que debes decidir si reconocer.',
        choices: {
          'story-8742190384-c17': {
            text: 'Mencionar la galeria al pasar.',
            description: 'Honra la historia entre vosotros.',
          },
          'story-8742190384-c18': {
            text: 'Centrarse en el momento presente.',
            description: 'Deja que el pasado descanse por ahora.',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Punto de Llegada',
        narration: 'Llegais al viejo banco del parque junto al rio donde una vez hablasteis hasta el amanecer. La madera esta desgastada por innumerables conversaciones, innumerables confesiones. Riley se sienta, dejando un espacio que podria ser invitacion o distancia. Las luces de la ciudad bailan en el agua como estrellas dispersas. Estais aqui, juntos, despues de todo. El momento se siente suspendido, esperando que insufles vida a lo que viene despues.',
        choices: {
          'story-8742190384-c19': {
            text: 'Sentarse cerca y empezar a explicar.',
            description: 'Ofrece toda la verdad por fin.',
          },
          'story-8742190384-c20': {
            text: 'Preguntar que necesitan de ti.',
            description: 'Deja que ellos guien la curacion.',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Suelo Honesto',
        narration: 'Las palabras fluyen como el rio a tu lado--a veces suaves, a veces torrenciales. Hablas de miedo y orgullo, del silencio que crecio entre vosotros como hiedra, de las noches en las que casi llamaste. Riley encuentra tus ojos, y ves tu propia anoranza reflejada alli. El banco os sostiene a ambos mientras la verdad se asienta, pesada y necesaria. Has llegado al umbral de la decision. Aqui es donde los caminos realmente divergen.',
        choices: {
          'story-8742190384-c21': {
            text: 'Sugerir un paseo en ferry juntos.',
            description: 'Deja que el agua os lleve hacia adelante.',
          },
          'story-8742190384-c22': {
            text: 'Proponer empezar de nuevo, aqui y ahora.',
            description: 'Un nuevo capitulo en suelo familiar.',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Al Borde del Agua',
        narration: 'La terminal del ferry brilla contra el agua oscura, una promesa de salida y regreso. La mano de Riley encuentra la tuya, vacilante pero calida. "Tengo miedo," admiten, y tu aprietas sus dedos en reconocimiento. El miedo es el precio de la esperanza, te das cuenta. Suena la bocina del barco, baja y paciente. Estais al borde de algo vasto--un oceano de posibilidades, o las aguas profundas de viejos patrones.',
        choices: {
          'story-8742190384-c23': {
            text: 'Subir al ferry juntos.',
            description: 'Comprometerse con el viaje.',
          },
          'story-8742190384-c24': {
            text: 'Sugerir mirar desde el muelle en su lugar.',
            description: 'Permanecer anclados, permanecer seguros.',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Tierra Nueva',
        narration: 'Hablas de empezar de nuevo--no donde lo dejasteis, sino donde estais ahora, dos personas cambiadas con historia compartida y crecimiento separado. Riley asiente lentamente, considerando. "Eso significa dejar ir algunas cosas," dicen, y sabes que tienen razon. El pasado es un jardin que no puedes desplantar, pero puedes elegir que cuidar ahora. La ciudad a tu alrededor respira con posibilidades.',
        choices: {
          'story-8742190384-c25': {
            text: 'Caminar al festival en el muelle.',
            description: 'Celebrar este fragil nuevo comienzo.',
          },
          'story-8742190384-c26': {
            text: 'Encontrar un lugar tranquilo para planificar el manana.',
            description: 'Construye el fundamento con cuidado.',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Cruzando Aguas',
        narration: 'El ferry se aleja del muelle, las luces de la ciudad aflojandose en un collar sobre el agua oscura. Te apoyas en la barandilla con Riley a tu lado, los hombros tocandose. La conversacion se ha suavizado en un silencio comodo, roto ocasionalmente por pequenas observaciones--una constelacion, un barco pasajero, un recuerdo encendido por el aire salado. Te estas moviendo, literal y figuradamente, hacia una orilla desconocida.',
        choices: {
          'story-8742190384-c27': {
            text: 'Hablar de mananas practicos.',
            description: 'Haz planes, construye estructura.',
          },
          'story-8742190384-c28': {
            text: 'Simplemente mantener el momento.',
            description: 'Deja que el agua os lleve a ambos.',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Vista Anclada',
        narration: 'Permaneces en el muelle, observando como el ferry se disuelve en el horizonte oscuro. Riley esta cerca, envuelto en pensamientos tanto como en abrigo. "Somos buenos en el casi," dicen en voz baja, y las palabras pinchan con verdad. Casi hablando, casi quedandose, casi amando plenamente. Sientes el peso de todos tus casis presionando. Pero estando aqui, sientes algo cambiando.',
        choices: {
          'story-8742190384-c29': {
            text: 'Prometer dejar de casi-hacerlo.',
            description: 'Comprometerse con la plenitud, finalmente.',
          },
          'story-8742190384-c30': {
            text: 'Reconocer el patron honestamente.',
            description: 'Mira claramente antes de saltar.',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Luces y Musica',
        narration: 'El festival en el muelle eleva chispas al cielo oscuro, los fuegos artificiales floreciendo como flores gigantes de luz. La musica se cuela entre la multitud, y os encontrais bailando sin querer, los cuerpos recordando los ritmos del otro. Riley se rie, realmente se rie, y el suelta algo tenso en tu pecho. A tu alrededor, extranos celebran sus propias historias, sus propias segundas oportunidades.',
        choices: {
          'story-8742190384-c31': {
            text: 'Besarlos cuando los fuegos artificiales alcancen su punto maximo.',
            description: 'Deja que la alegria decida por ti.',
          },
          'story-8742190384-c32': {
            text: 'Susurrar tus esperanzas para el futuro.',
            description: 'Di tus suenos en voz alta.',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Mapas Intimos',
        narration: 'Encuentras una cafeteria de veinticuatro horas brillando como un faro en la calle tranquila. Sobre tarta y cafe, bosquejais los contornos de un futuro compartido--no grandes declaraciones, sino pequenas practicalidades. Quien llamara a quien, con que frecuencia, que necesitais ambos para sentiros seguros. Riley dibuja circulos en la servilleta, conectando vuestras vidas con tinta cuidadosa. Es poco dramatico, poco romantico, y mas precioso que cualquier gesto.',
        choices: {
          'story-8742190384-c33': {
            text: 'Intercambiar llaves como simbolo.',
            description: 'Confianza fisica, promesa tangible.',
          },
          'story-8742190384-c34': {
            text: 'Acordar encontrarse de nuevo manana.',
            description: 'Un paso, luego otro.',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Construyendo Juntos',
        narration: 'Hablas de apartamentos y horarios, de la logistica del amor que sobrevive al encaprichamiento. Riley encuentra tu practicidad con la suya, y juntos construis un andamio lo suficientemente robusto para sostener la vida real. El ferry continua su cruce, pero ya habeis llegado a una orilla--tierra firme despues de mares tempestuosos. El manana espera con todos sus desafios ordinarios.',
        choices: {
          'story-8742190384-c35': {
            text: 'Comprometerse con el trabajo del "nosotros".',
            description: 'Elige el camino de la pareja.',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Momento Perfecto',
        narration: 'El mundo contiene la respiracion. Los fuegos artificiales pintan el rostro de Riley en oro y rosa, y los besas mientras el cielo florece sobre vuestras cabezas. No es un amor perfecto--habeis visto los defectos del otro demasiado claramente para eso--pero es un momento perfecto, y eliges confiar en que seguiran mas momentos. La multitud vitorea a vuestro alrededor, celebrando vuestra alegria privada con su ruido publico.',
        choices: {
          'story-8742190384-c36': {
            text: 'Deja que esta alegria te lleve hacia adelante.',
            description: 'Confia en el sentimiento, confia en ellos.',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Suelo Firme',
        narration: 'Haces promesas que tienes intencion de cumplir, dichas simplemente sin florituras. Riley las recibe con asentimiento grave, entendiendo el peso de las palabras despues de tanto silencio. El neon de la cafeteria zumba suavemente mientras la noche se profundiza a vuestro alrededor. Habéis elegido no la llama de la pasion sino la ardiente constancia del amor, y se siente como volver a casa a un lugar en el que nunca te permitiste habitar del todo.',
        choices: {
          'story-8742190384-c37': {
            text: 'Empezar de nuevo, de manera diferente.',
            description: 'Un nuevo capitulo, mejor escrito.',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Separacion Amable',
        narration: 'Os separais con honestidad mas que con esperanza, reconociendo que algunas historias de amor son hermosas sin ser permanentes. Los ojos de Riley brillan pero asienten, entendiendo. "Gracias por esta noche," dicen, y sabes que se refieren al cierre, no solo a la compania. Caminas en direcciones opuestas, mas ligero por haber dicho la verdad, triste por lo que no se puede salvar.',
        choices: {
          'story-8742190384-c38': {
            text: 'Llevar la leccion hacia adelante.',
            description: 'Algunos finales tambien son regalos.',
          },
        },
      },
      'story-8742190384-22': {
        title: 'A Traves del Agua',
        narration: 'El ferry atraca en la orilla lejana, las luces de la ciudad titilando sobre el agua como recuerdos. Desembarcais juntos, la mano de Riley firme en la tuya. Hablais de cosas ordinarias--que cocinar, que planta sigues olvidando regar, a quien le toca hacer el cafe. Las promesas llegan sin ceremonia, entretejidas en la tela del practico manana. La estela escribe una nueva linea detras de ti, sin borrar nada pero llevandote hacia adelante a la vida que eliges construir, eleccion tras eleccion, dia tras dia.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Ciudad de Chispas',
        narration: 'Los fuegos artificiales cosen el horizonte, brillantes, breves y verdaderos. Riley y tu hablais las partes duras limpiamente, luego os reis de lo humanos que sois ambos--torpes, esperanzados, tercos en vuestro amor. Cuando la ultima flor se desvanece, la oscuridad se siente amigable de nuevo, una manta mas que un vacio. Caminas a casa juntos por calles plateadas de lluvia, sin prisa, con suficiente tiempo extendiendose por delante como un regalo que finalmente sientes merecer recibir. La ciudad que una vez guardo tu despedida ahora es testigo de tu saludo.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Otro Comienzo',
        narration: 'La manana os encuentra en una cafeteria de esquina, la luz del sol fluyendo a traves de ventanas que una vez reflejaron tu despedida. Riley y tu os sentais el uno frente al otro con cuadernos y cafe, bosquejando la arquitectura de una relacion reconstruida sobre cimientos mas fuertes. No el mismo amor de antes--algo mas sabio, mas honesto, mas resiliente. No prometeis para siempre; prometeis seguir apareciendo, seguir eligiendo, seguir construyendo. Algunos amores vuelven; algunos amores te ensenan a amar mejor. El vuestro, quizas, es ambos.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Apartamento Tranquilo',
        narration: 'De vuelta en tu habitacion alquilada, el brillo azul del letrero de neon se suaviza en los bordes. Preparas te, abres la ventana y dejas que la lluvia termine su frase. No esta noche, decides--pero no nunca. Le envias a Riley un ultimo mensaje, un deseo de su felicidad expresado con la sinceridad que solo puede traer el cierre. La ciudad seguira aqui cuando estes listo para decir mas, a alguien nuevo o quizas a ti mismo. Por ahora, dejas que la lluvia te arrulle para dormir, agradecido por las segundas oportunidades incluso cuando conducen a puertas diferentes de las que esperabas.',
        choices: {},
      },
    },
  },

  // German
  de: {
    title: 'Stadt der Zweiten Chancen',
    description: 'Ein ploetzlicher Platzregen strandet dich in einer Stadt, die du einmal Zuhause nanntest--und wo du eine Liebe unvollendet zuruckliess. Eine Nacht wird zu einer Kette kleiner, mutiger Entscheidungen: ein Cafe, eine Buchhandlung, eine Dachterrasse, eine Faehre. Finde deinen Weg zurueck zur Wahrheit--oder zu etwas voellig Neuem.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Ankunft im Regen',
        narration: 'Nachtregen glaettet die Allee zu einem Spiegel, Neon verschmiert wie Pinselstriche ueber dem Asphalt. Dein Koffer ist schwerer, als er sein sollte, voll von Dingen, die du letztes Mal nicht gesagt hast. Eine Boehe schiebt dich unter eine Markise; die Stadt riecht nach Kaffee und Donner. Irgendwo klappert eine Zugglocke. Du sagst dir, es ist nur eine Nacht--genug, um zu entscheiden, ob du an Rileys Tuer klopfen wirst.',
        choices: {
          'story-8742190384-c1': {
            text: 'Im Cafe Schutz suchen.',
            description: 'Du koenntest deine Gedanken--und Mut--sammeln.',
          },
          'story-8742190384-c2': {
            text: 'Stattdessen zum Bahnhof gehen.',
            description: 'Zuege bedeuten Ausgaenge--und Ankuenfte.',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Warme Zuflucht',
        narration: 'Milch wirbelt zu einer kleinen Galaxie auf deinem Latte, waehrend die Fenster vom Regen uebersaeht werden. Der Barista plaudert ueber eine Lesung in der Buchhandlung um die Ecke. Dein Telefon vibriert auf der Untertasse, Rileys Name noch immer oben in deinen Nachrichten fixiert wie ein Versprechen, das du nie gehalten hast. Die Tasse waermt deine Haende; dein Mut braucht laenger zum Broedeln. Du musst deinen naechsten Schritt sorgfaeltig entscheiden.',
        choices: {
          'story-8742190384-c3': {
            text: 'Nach der Lesung in der Buchhandlung fragen.',
            description: 'Geschichten koennten Tueren oeffnen.',
          },
          'story-8742190384-c4': {
            text: 'Die Nachricht von Riley pruefen.',
            description: 'Sieh, welche Worte auf dich warten.',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Fragmente der Hoffnung',
        narration: 'Der Barista erwaehnt jemanden, der wie Riley klingt, der gestern nach dir gefragt hat. Dein Telefon zeigt eine einfache Nachricht: "In der Stadt?" Das Zufall rieselt dir ueber die Haut. Der Regen trommelt härter gegen das Glas, als wuerde er dich zu einer Entscheidung draengen. Du koenntest dieser Spur in der Buchhandlung folgen, oder du koenntest direkt antworten und alles aendern.',
        choices: {
          'story-8742190384-c5': {
            text: 'Zur Buchhandlung gehen, um zu ermitteln.',
            description: 'Lass die Spur deine Fuesse fuehren.',
          },
          'story-8742190384-c6': {
            text: 'Riley eine vorsichtige Antwort senden.',
            description: '"Noch hier. Koennten wir reden?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Ausstrecken',
        narration: 'Deine Nachricht schwebt im digitalen Aether, eine kleine Waffenruhenfahne in der Nacht erhoben. Die Buchhandlung wartet drei Bloecke oestlich, ihre Fenster leuchtend wie eine Laterne im Regen. Jeder Weg fuehrt zur gleichen Ungewissheit. Dein Herz pocht vor dem Gewicht der Worte, die zu lange ungesagt blieben. Du musst waehlen, wie du die Stille zwischen euch ueberbrueckst.',
        choices: {
          'story-8742190384-c7': {
            text: 'Auf Rileys Antwort warten.',
            description: 'Lass sie die Bedingungen setzen.',
          },
          'story-8742190384-c8': {
            text: 'Trotzdem zur Buchhandlung gehen.',
            description: 'Bewegung schlaegt Warten.',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Worte Treffen Ein',
        narration: 'Dein Telefon leuchtet auf: "Bahnhof. Zehn Minuten." Die Worte sind karg, aber sie sind eine Oeffnung. Du schnappst dir deinen Mantel, Herz haemmert gegen deine Rippen wie ein Vogel gegen Glas. Der Regen hat nicht aufgehoert, aber du bemerkst ihn nicht mehr. Jeder Schritt zum Bahnhof fuehlt sich an wie das Ueberschreiten einer Schwelle, die du nicht zuruecknehmen kannst. Zeit komprimiert sich; der Moment dehnt sich.',
        choices: {
          'story-8742190384-c9': {
            text: 'Schnell zum Bahnhof gehen.',
            description: 'Lass sie nicht warten.',
          },
          'story-8742190384-c10': {
            text: 'Einen Moment nehmen, um dich zu sammeln.',
            description: 'Atme vor der Abrechnung.',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Ankunft am Bahnhof',
        narration: 'Der Bahnhof summt vor Abfahrten, Tafeln flackern mit Buchstaben wie unruhige Augenlider. Ein Lachen, das du kennst, schwebt von der Zwischenebene herab--vertraut wie ein Lieblingslied. Du erstarbst auf halber Treppe, Koffer poltert auf der Stufe. Dort, beim Kiosk, steht Riley mit regenbesetzten Haaren und einem Ausdruck, den du nicht ganz lesen kannst. Dir stockt der Atem.',
        choices: {
          'story-8742190384-c11': {
            text: 'Ihren Namen rufen.',
            description: 'Lass den Bahnhof Zeuge werden.',
          },
          'story-8742190384-c12': {
            text: 'Langsam naehern, dich sehen lassen.',
            description: 'Gib ihnen Zeit zur Anpassung.',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Erkennung',
        narration: 'Riley dreht sich um, und die Zeit stottert. Ihre Augen weiten sich, dann weichen sie mit etwas Kompliziertem--Verletzung, Hoffnung, Zoegern. "Du bist gekommen," sagen sie, und es klingt wie eine Anschuldigung und Erleichterung ineinander geflochten. Der Bahnhofslarm verstummt zu einem Murmeln. Du hast diesen Moment tausendmal in deinem Kopf geprobt, aber jetzt loesen sich alle deine Reden auf. Du musst waehlen, welche Wahrheit du zuerst sprichst.',
        choices: {
          'story-8742190384-c13': {
            text: 'Dich fuer das Gehen entschuldigen.',
            description: 'Beginne mit der haertesten Wahrheit.',
          },
          'story-8742190384-c14': {
            text: 'Fragen, wie es ihnen geht.',
            description: 'Beginne sanft, baue die Luecke.',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Zoegernde Bruecke',
        narration: 'Riley hoert zu, wirklich zu, so wie du vergessen hast, dass Menschen koennen. Ihr Kaffee wird kalt zwischen ihren Haenden, waehrend du sprichst. Die Bahnhofsmassen stroemen um dich herum wie Wasser um Steine. Etwas Zerbrechliches beginnt sich im Raum zwischen euren Worten zu formen--eine Moeglichkeit, ein Vielleicht, eine sich oeffnende Tuer. Du musst vorschlagen, wo dieses Gespraech fortgesetzt werden kann.',
        choices: {
          'story-8742190384-c15': {
            text: 'Einen Spaziergang zum Park vorschlagen.',
            description: 'Bewegung koennte die Spannung lockern.',
          },
          'story-8742190384-c16': {
            text: 'Die Dachterrasse vorschlagen, die ihr beide liebtet.',
            description: 'Geteilte Erinnerung als Fundament.',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Geteilte Schritte',
        narration: 'Ihr geht zusammen durch Strassen, die sich an eure Schritte erinnern. Der Regen hat sich zu einem Nebel gemildert, der sich wie Erinnerungen an eure Haare klammert. Riley geht nah genug, dass eure Schultern streifen, weit genug, dass du ihre Gedanken nicht lesen kannst. Du gehst an der alten Galerie vorbei, wo ihr euer erstes Date hattet, der Baeckerei, wo ihr euch strittet und versöhntet. Jedes Wahrzeichen ist ein Geist, den du entscheiden musst, ob du ihn anerkennst.',
        choices: {
          'story-8742190384-c17': {
            text: 'Die Galerie beim Vorbeigehen erwaehnen.',
            description: 'Ehre die Geschichte zwischen euch.',
          },
          'story-8742190384-c18': {
            text: 'Auf den gegenwaertigen Moment fokussieren.',
            description: 'Lass die Vergangenheit vorerst ruhen.',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Ankunftspunkt',
        narration: 'Du erreichst die alte Bank im Flusspark, wo ihr einst bis zum Morgengrauen gesprochen habt. Das Holz ist glatt getragen von unzaehligen Gespraechen, unzaehligen Gestaendnissen. Riley setzt sich, laesst Platz, der Einladung oder Distanz sein koennte. Die Lichter der Stadt tanzen auf dem Wasser wie verstreute Sterne. Du bist hier, zusammen, nach allem. Der Moment fuehlt sich ausgesetzt an, wartend, dass du Leben einhauchst in das, was als naechstes kommt.',
        choices: {
          'story-8742190384-c19': {
            text: 'Nah sitzen und anfangen zu erklaeren.',
            description: 'Biete endlich die volle Wahrheit.',
          },
          'story-8742190384-c20': {
            text: 'Fragen, was sie von dir brauchen.',
            description: 'Lass sie die Heilung fuehren.',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Ehrlicher Boden',
        narration: 'Worte fliessen wie der Fluss neben dir--manchmal sanft, manchmal stuermisch. Du sprichst von Angst und Stolz, von der Stille, die zwischen euch wuchs wie Efeu, von den Naechten, als du fast anriefst. Riley begegnet deinen Augen, und du siehst deine eigene Sehnsucht dort reflektiert. Die Bank haelt euch beide, waehrend die Wahrheit sich setzt, schwer und notwendig. Du bist an die Schwelle der Entscheidung gekommen. Hier spalten sich die Wege wirklich.',
        choices: {
          'story-8742190384-c21': {
            text: 'Eine Faehrenfahrt zusammen vorschlagen.',
            description: 'Lass das Wasser dich vorwaertstragen.',
          },
          'story-8742190384-c22': {
            text: 'Vorschlagen, hier und jetzt neu anzufangen.',
            description: 'Ein neues Kapitel auf vertrautem Boden.',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Am Wasserrand',
        narration: 'Das Faehrterminal leuchtet gegen das dunkle Wasser, ein Versprechen von Abfahrt und Rueckkehr. Rileys Hand findet deine, zoegernd aber warm. "Ich habe Angst," geben sie zu, und du drueckst ihre Finger zur Anerkennung. Angst ist der Preis der Hoffnung, erkennst du. Das Schiffshorn ertoent, tief und geduldig. Du stehst am Rand von etwas Gewaltigem--ein Ozean der Moeglichkeiten, oder das tiefe Wasser alter Muster.',
        choices: {
          'story-8742190384-c23': {
            text: 'Gemeinsam an Bord der Faehre gehen.',
            description: 'Verpflichte dich auf die Reise.',
          },
          'story-8742190384-c24': {
            text: 'Stattdessen vom Kai zuschauen vorschlagen.',
            description: 'Bleib verankert, bleib sicher.',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Frischer Boden',
        narration: 'Du sprichst davon, neu anzufangen--nicht wo ihr aufgehoert habt, sondern wo ihr jetzt seid, zwei veraenderte Menschen mit geteilter Geschichte und getrenntem Wachstum. Riley nickt langsam, ueberlegend. "Das bedeutet, manche Dinge loszulassen," sagen sie, und du weisst, dass sie recht haben. Die Vergangenheit ist ein Garten, den du nicht umpfluegen kannst, aber du kannst waehlen, worum du dich jetzt kuemmerst. Die Stadt um dich herum atmet mit Moeglichkeiten.',
        choices: {
          'story-8742190384-c25': {
            text: 'Zum Uferfestival gehen.',
            description: 'Feiere diesen zerbrechlichen neuen Anfang.',
          },
          'story-8742190384-c26': {
            text: 'Einen ruhigen Ort finden, um morgen zu planen.',
            description: 'Baue das Fundament sorgfaeltig.',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Gewaesser Ueberqueren',
        narration: 'Die Faehre loest sich vom Kai, Stadtlichter loesen sich zu einer Kette auf dem dunklen Wasser. Du lehnst dich an die Reling mit Riley neben dir, Schultern beruehrend. Das Gespraech ist sanft zu angenehmer Stille geworden, gelegentlich unterbrochen von kleinen Beobachtungen--ein Sternbild, ein vorbeifahrendes Boot, eine Erinnerung, entfacht von der salzigen Luft. Du bewegst dich, woertlich und uebertragen, auf ein unbekanntes Ufer zu.',
        choices: {
          'story-8742190384-c27': {
            text: 'Von praktischen Morgen sprechen.',
            description: 'Plane, baue Struktur.',
          },
          'story-8742190384-c28': {
            text: 'Einfach den Moment halten.',
            description: 'Lass das Wasser euch beide tragen.',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Verankerter Blick',
        narration: 'Du bleibst auf dem Kai, beobachtest, wie die Faehre im dunklen Horizont verschwindet. Riley steht nah, eingehuellt in Gedanken so sehr wie in Mantel. "Wir sind gut im Fast," sagen sie leise, und die Worte stechen mit Wahrheit. Fast reden, fast bleiben, fast vollstaendig lieben. Du fuehlst das Gewicht all deiner Fasts druecken. Aber hier stehend, spuerst du etwas Sich-Verschiebendes.',
        choices: {
          'story-8742190384-c29': {
            text: 'Versprechen, aufzuhoeren mit dem Fast.',
            description: 'Verpflichte dich endlich zur Fuellung.',
          },
          'story-8742190384-c30': {
            text: 'Das Muster ehrlich anerkennen.',
            description: 'Sieh klar, bevor du springst.',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Lichter und Musik',
        narration: 'Das Uferfestival hebt Funken in den dunklen Himmel, Feuerwerke bluehen wie riesige Blumen des Lichts. Musik zieht sich durch die Menge, und ihr findet euch tanzend, ohne es zu wollen, Koerper, die sich an die Rhythmen des anderen erinnern. Riley lacht, wirklich lacht, und der Klang lockert etwas Enges in deiner Brust. Um dich herum feiern Fremde ihre eigenen Geschichten, ihre eigenen zweiten Chancen.',
        choices: {
          'story-8742190384-c31': {
            text: 'Sie kuessen, wenn das Feuerwerk seinen Hoehepunkt erreicht.',
            description: 'Lass die Freude fuer dich entscheiden.',
          },
          'story-8742190384-c32': {
            text: 'Deine Hoffnungen fuer die Zukunft fluestern.',
            description: 'Sprich deine Traeume laut aus.',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Intime Karten',
        narration: 'Du findest ein vierundzwanzig Stunden geoeffnetes Lokal, leuchtend wie ein Leuchtturm auf der ruhigen Strasse. Ueber Kuchen und Kaffee skizziert ihr die Umrisse einer gemeinsamen Zukunft--keine grossen Erklaerungen, sondern kleine Praktikalitaeten. Wer ruft wen an, wie oft, was ihr beide braucht, um euch sicher zu fuehlen. Riley zeichnet Kreise auf die Serviette, verbindet eure Leben mit sorgfaeltiger Tinte. Es ist undramatisch, unromantisch, und kostbarer als jede Geste.',
        choices: {
          'story-8742190384-c33': {
            text: 'Schluessel als Symbol austauschen.',
            description: 'Koerperliches Vertrauen, greifbares Versprechen.',
          },
          'story-8742190384-c34': {
            text: 'Vereinbaren, sich morgen wiederzusehen.',
            description: 'Ein Schritt, dann ein anderer.',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Zusammen Bauen',
        narration: 'Du sprichst von Wohnungen und Zeitplaenen, von der Logistik der Liebe, die laenger haelt als Verliebtheit. Riley begegnet deiner Praktikalitaet mit ihrer eigenen, und zusammen baut ihr ein Gerauest, robust genug, um das wirkliche Leben zu halten. Die Faehre setzt ihre Ueberfahrt fort, aber ihr habt schon ein Ufer erreicht--fester Boden nach stuermischen Meeren. Morgen wartet mit all seinen gewoehnlichen Herausforderungen.',
        choices: {
          'story-8742190384-c35': {
            text: 'Dem Werk des "Wir" verpflichten.',
            description: 'Waehle den Weg der Partnerschaft.',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Perfekter Moment',
        narration: 'Die Welt haelt den Atem an. Feuerwerke malen Rileys Gesicht in Gold und Rose, und du kuesst sie, waehrend der Himmel ueber euch blueht. Es ist keine perfekte Liebe--ihr habt die Fehler des anderen zu klar gesehen dafuer--aber es ist ein perfekter Moment, und du waehlst zu vertrauen, dass mehr Momente folgen werden. Die Menge jubelt um dich herum, feiert deine private Freude mit ihrem oeffentlichen Laerm.',
        choices: {
          'story-8742190384-c36': {
            text: 'Lass diese Freude dich vorwaertstragen.',
            description: 'Vertraue dem Gefuehl, vertraue ihnen.',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Fester Boden',
        narration: 'Du gibst Versprechen, die du zu halten beabsichtigst, einfach gesprochen ohne Schnoerkel. Riley empfaengt sie mit nickendem Ernst, versteht das Gewicht der Worte nach so viel Stille. Das Neon des Lokals summt leise, waehrend die Nacht um dich herum vertieft. Du hast nicht die Flamme der Leidenschaft gewaehlt, sondern das stete Brennen der Liebe, und es fuehlt sich an wie Heimkommen an einen Ort, den du dir nie ganz erlaubt hast zu bewohnen.',
        choices: {
          'story-8742190384-c37': {
            text: 'Anders neu anfangen.',
            description: 'Ein neues Kapitel, besser geschrieben.',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Sanfte Trennung',
        narration: 'Ihr trennt euch mit Ehrlichkeit eher als Hoffnung, anerkennend, dass manche Liebesgeschichten schoen sind, ohne dauerhaft zu sein. Rileys Augen glitzern, aber sie nicken, verstehend. "Danke fuer diese Nacht," sagen sie, und du weisst, sie meinen den Abschluss, nicht nur die Gesellschaft. Du gehst in entgegengesetzte Richtungen, leichter fuer die gesprochene Wahrheit, traurig fuer das, was nicht gerettet werden kann.',
        choices: {
          'story-8742190384-c38': {
            text: 'Die Lektion vorwaertstragen.',
            description: 'Manche Enden sind auch Geschenke.',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Ueber das Wasser',
        narration: 'Die Faehre dockt am fernen Ufer an, Stadtlichter funkeln ueber dem Wasser wie Erinnerungen. Ihr steigt zusammen aus, Rileys Hand fest in deiner. Ihr redet ueber Gewoehnliches--was zu kochen, welche Pflanze du staendig vergisst zu giessen, wer an der Reihe ist, Kaffee zu machen. Versprechen kommen ohne Zeremonie, eingewoben in den Stoff des praktischen Morgen. Die Kielwasser schreibt eine neue Linie hinter dir, loescht nichts, aber traegt dich vorwaerts in das Leben, das du waehlst zu bauen, Entscheidung fuer Entscheidung, Tag fuer Tag.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Stadt der Funken',
        narration: 'Feuerwerke naehen die Skyline zusammen, hell und kurz und wahr. Du und Riley sprecht die harten Teile sauber, dann lacht ihr darueber, wie menschlich ihr beide seid--tappend, hoffnungsvoll, stur in eurer Liebe. Wenn die letzte Bluehe verblasst, fuehlt sich die Dunkelheit wieder freundlich an, eine Decke eher als eine Leere. Du gehst mit ihnen nach Hause durch regensilberne Strassen, keine Eile, genug Zeit erstreckt sich vor dir wie ein Geschenk, das du dich endlich wuerdig fuehlst zu empfangen. Die Stadt, die einst deinen Abschied hielt, ist jetzt Zeuge deines Grusses.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Ein Anderer Anfang',
        narration: 'Der Morgen findet dich in einem Eckcafe, Sonnenlicht stroemt durch Fenster, die einst deinen Abschied widerspiegelten. Du und Riley sitzt einander gegenueber mit Notizbuechern und Kaffee, skizziert die Architektur einer Beziehung, die auf staerkeren Fundamenten wiederaufgebaut wurde. Nicht dieselbe Liebe wie zuvor--etwas Weiseres, Ehrlicheres, Widerstandsfaehigeres. Du versprichst nicht fuer immer; du versprichst, weiterhin zu erscheinen, weiterhin zu waehlen, weiterhin zu bauen. Manche Lieben kehren zurueck; manche Lieben lehren dich, besser zu lieben. Deine, vielleicht, ist beides.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Ruhige Wohnung',
        narration: 'Zurueck in deinem gemieteten Zimmer, das blaue Gluehen des Leuchtschilds weicht an den Raendern. Du braust Tee, oeffnest das Fenster und laesst den Regen seinen Satz beenden. Nicht heute Nacht, entscheidest du--aber nicht nie. Du sendest Riley eine letzte Nachricht, einen Wunsch fuer ihr Glueck ausgedrueckt mit der Aufrichtigkeit, die nur Abschluss bringen kann. Die Stadt wird immer noch hier sein, wenn du bereit bist, mehr zu sagen, zu jemand Neuem oder vielleicht zu dir selbst. Fuer jetzt laesst du dich vom Regen in den Schlaf wiegen, dankbar fuer zweite Chancen, selbst wenn sie zu anderen Tueren fuehren, als du gehofft hast.',
        choices: {},
      },
    },
  },


  // French
  fr: {
    title: 'Ville des Deuxiemes Chances',
    description: 'Une averse soudaine vous coince dans une ville que vous appeliez autrefois chez vous--et ou vous avez laisse un amour inacheve. Une nuit devient une chaine de petits choix courageux: un cafe, une librairie, un toit, un ferry. Trouvez votre chemin vers la verite--ou vers quelque chose de completement nouveau.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Arrivee sous la Pluie',
        narration: 'La pluie nocturne glisse l\'avenue en miroir, le neon barbouille comme des coups de pinceau sur l\'asphalte. Votre valise est plus lourde qu\'elle ne devrait, pleine de choses que vous n\'avez pas dites la derniere fois. Une rafale vous pousse sous un auvent; la ville sent le cafe et le tonnerre. Quelque part, une cloche de train cliquette. Vous vous dites que ce n\'est qu\'une nuit--suffisamment pour decider si vous frapperez a la porte de Riley.',
        choices: {
          'story-8742190384-c1': {
            text: 'Se refugier au cafe pour se rechauffer.',
            description: 'Vous pourriez rassembler vos pensees--et votre courage.',
          },
          'story-8742190384-c2': {
            text: 'Se diriger vers la gare a la place.',
            description: 'Les trains signifient des departs--et des arrivees.',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Refuge Chaud',
        narration: 'Le lait tourbillonne en une petite galaxie sur votre latte tandis que les fenetres se couvrent de perles de pluie. Le barista bavarde d\'une lecture de nuit a la librairie au coin de la rue. Votre telephone vibre sur la soucoupe, le nom de Riley toujours epingle en haut de vos messages comme une promesse que vous n\'avez jamais tenue. La tasse rechauffe vos mains; votre courage met plus de temps a mijoter. Vous devez decider de votre prochaine etape avec soin.',
        choices: {
          'story-8742190384-c3': {
            text: 'Demander des nouvelles de la lecture a la librairie.',
            description: 'Les histoires pourraient ouvrir des portes.',
          },
          'story-8742190384-c4': {
            text: 'Verifier le message de Riley.',
            description: 'Voyez quels mots vous attendent.',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Fragments d\'Espoir',
        narration: 'Le barista mentionne quelqu\'un qui ressemble a Riley qui vous cherchait hier. Votre telephone montre un simple message: "En ville?" La coincidence herisse votre peau. La pluie tambourine plus fort contre la vitre, comme vous poussant vers une decision. Vous pourriez suivre cette piste a la librairie, ou repondre directement et tout changer.',
        choices: {
          'story-8742190384-c5': {
            text: 'Marcher jusqu\'a la librairie pour enqueter.',
            description: 'Laissez la piste guider vos pas.',
          },
          'story-8742190384-c6': {
            text: 'Envoyer a Riley une reponse prudente.',
            description: '"Toujours ici. Pourrions-nous parler?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Tendre la Main',
        narration: 'Votre message flotte dans l\'ether numerique, un petit drapeau de treve leve dans la nuit. La librairie attend trois rues a l\'est, ses fenetres brillant comme une lanterne sous la pluie. Chaque chemin mene vers la meme incertitude. Votre coeur bat au poids des mots non dits depuis trop longtemps. Vous devez choisir comment combler le silence entre vous.',
        choices: {
          'story-8742190384-c7': {
            text: 'Attendre la reponse de Riley.',
            description: 'Laissez-les etablir les termes.',
          },
          'story-8742190384-c8': {
            text: 'Aller a la librairie quand meme.',
            description: 'Le mouvement bat l\'attente.',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Les Mots Arrivent',
        narration: 'Votre telephone s\'allume: "Gare. Dix minutes." Les mots sont rares, mais ils sont une ouverture. Vous rassemblez votre manteau, le coeur martelant contre vos cotes comme un oiseau contre le verre. La pluie n\'a pas cesse, mais vous ne la remarquez plus. Chaque pas vers la gare semble comme franchir un seuil que vous ne pouvez pas defaire. Le temps se compresse; le moment s\'etend.',
        choices: {
          'story-8742190384-c9': {
            text: 'Marcher rapidement vers la gare.',
            description: 'Ne les faites pas attendre.',
          },
          'story-8742190384-c10': {
            text: 'Prendre un moment pour se composer.',
            description: 'Respirez avant le jugement.',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Arrivee a la Gare',
        narration: 'La gare bourdonne de departs, les tableaux cliquetant des lettres comme des paupieres agitees. Un rire que vous connaissez flotte depuis l\'entresol--familier comme une chanson preferee. Vous vous figez a mi-chemin des marches, la valise cognant sur la marche. La, presque du kiosque a cafe, se tient Riley avec des cheveux parsemes de pluie et une expression que vous ne pouvez pas tout a fait lire. Vous en avez le souffle coupe.',
        choices: {
          'story-8742190384-c11': {
            text: 'Crier leur nom.',
            description: 'Laissez la gare temoigner.',
          },
          'story-8742190384-c12': {
            text: 'Approcher lentement, se laissant voir.',
            description: 'Donnez-leur le temps de s\'adapter.',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Reconnaissance',
        narration: 'Riley se retourne, et le temps begaie. Leurs yeux s\'elargissent, puis s\'adoucissent avec quelque chose de complique--de la blessure, de l\'espoir, de l\'hesitation. "Tu es venu," disent-ils, et cela sonne comme une accusation et un soulagement tresses ensemble. Le bruit de la gare s\'estompe en murmure. Vous avez repet\'e ce moment mille fois dans votre tete, mais maintenant tous vos discours se dissolvent. Vous devez choisir quelle verite dire en premier.',
        choices: {
          'story-8742190384-c13': {
            text: 'S\'excuser d\'etre parti.',
            description: 'Commencez par la verite la plus dure.',
          },
          'story-8742190384-c14': {
            text: 'Demander comment ils vont.',
            description: 'Commencez doucement, construisez le pont.',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Pont Tentaif',
        narration: 'Riley ecoute, vraiment ecoute, d\'une maniere dont vous aviez oublie que les gens pouvaient. Leur cafe refroidit entre leurs mains pendant que vous parlez. Les foules de la gare coulent autour de vous comme de l\'eau autour de pierres. Quelque chose de fragile commence a se former dans l\'espace entre vos mots--une possibilite, un peut-etre, une porte s\'entrouvrant. Vous devez suggerer ou cette conversation peut continuer.',
        choices: {
          'story-8742190384-c15': {
            text: 'Suggerer de marcher jusqu\'au parc.',
            description: 'Le mouvement pourrait soulager la tension.',
          },
          'story-8742190384-c16': {
            text: 'Proposer le toit que vous aimiez tous les deux.',
            description: 'Souvenir partage comme fondation.',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Pas Partages',
        narration: 'Vous marchez ensemble dans des rues qui se souviennent de vos pas. La pluie s\'est adoucie en brume qui s\'accroche a vos cheveux comme des souvenirs. Riley marche assez pres pour que vos epaules se touchent, assez loin pour que vous ne puissiez pas lire leurs pensees. Vous passez devant l\'ancienne galerie ou vous avez eu votre premier rendez-vous, la boulangerie ou vous vous etes disputes et reconcilies. Chaque point de repere est un fantome que vous devez decider de reconnaitre.',
        choices: {
          'story-8742190384-c17': {
            text: 'Mentionner la galerie en passant.',
            description: 'Honorez l\'histoire entre vous.',
          },
          'story-8742190384-c18': {
            text: 'Se concentrer sur le moment present.',
            description: 'Laissez le passe reposer pour l\'instant.',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Point d\'Arrivee',
        narration: 'Vous atteignez le vieux banc dans le parc au bord de la riviere ou vous avez parle jusqu\'a l\'aube. Le bois est lisse par d\'innombrables conversations, d\'innombrables confessions. Riley s\'assoit, laissant un espace qui pourrait etre une invitation ou une distance. Les lumieres de la ville dansent sur l\'eau comme des etoiles eparpillees. Vous etes ici, ensemble, apres tout. Le moment semble suspendu, attendant que vous insuffliez de la vie a ce qui vient ensuite.',
        choices: {
          'story-8742190384-c19': {
            text: 'S\'asseoir pres et commencer a expliquer.',
            description: 'Offrez enfin la pleine verite.',
          },
          'story-8742190384-c20': {
            text: 'Demander ce dont ils ont besoin de vous.',
            description: 'Laissez-les guerir la guerison.',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Terrain Honnete',
        narration: 'Les mots coulent comme la riviere a cote de vous--parfois doux, parfois torrentiels. Vous parlez de peur et de fierte, du silence qui a grandi entre vous comme du lierre, des nuits ou vous avez failli appeler. Riley rencontre vos yeux, et vous voyez votre propre desir reflete la. Le banc vous tient tous les deux pendant que la verite s\'installe, lourde et necessaire. Vous etes arrive au seuil de la decision. C\'est ici que les chemins divergent vraiment.',
        choices: {
          'story-8742190384-c21': {
            text: 'Suggerer une promenade en ferry ensemble.',
            description: 'Laissez l\'eau vous porter en avant.',
          },
          'story-8742190384-c22': {
            text: 'Proposer de repartir a zero, ici et maintenant.',
            description: 'Un nouveau chapitre sur un sol familier.',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Au Bord de l\'Eau',
        narration: 'Le terminal du ferry brille contre l\'eau sombre, une promesse de depart et de retour. La main de Riley trouve la votre, hesitante mais chaude. "J\'ai peur," admettent-ils, et vous serrez leurs doigts en reconnaissance. La peur est le prix de l\'espoir, vous realisez. Le corne du bateau retentit, bas et patient. Vous vous tenez au bord de quelque chose de vaste--un ocean de possibilites, ou les profondeurs des vieux schemas.',
        choices: {
          'story-8742190384-c23': {
            text: 'Monter a bord du ferry ensemble.',
            description: 'S\'engager dans le voyage.',
          },
          'story-8742190384-c24': {
            text: 'Suggerer de regarder depuis la jetee a la place.',
            description: 'Restez ancre, restez en securite.',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Nouveau Sol',
        narration: 'Vous parlez de recommencer a zero--pas la ou vous vous etes arretes, mais la ou vous etes maintenant, deux personnes changees avec une histoire partagee et une croissance separee. Riley hoche lentement la tete, considerant. "Cela signifie laisser partir certaines choses," disent-ils, et vous savez qu\'ils ont raison. Le passe est un jardin que vous ne pouvez pas deplanter, mais vous pouvez choisir ce dont vous vous occupez maintenant. La ville autour de vous respire de possibilites.',
        choices: {
          'story-8742190384-c25': {
            text: 'Marcher jusqu\'au festival du quai.',
            description: 'Celebrez ce fragile nouveau depart.',
          },
          'story-8742190384-c26': {
            text: 'Trouver un endroit calme pour planifier demain.',
            description: 'Construisez le fondement avec soin.',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Traverser les Eaux',
        narration: 'Le ferry s\'eloigne du quai, les lumieres de la ville se defaisant en collier sur l\'eau sombre. Vous vous appuyez contre le bastingage avec Riley a cote de vous, les epaules se touchant. La conversation s\'est adoucie en un silence confortable, casse occasionnellement par de petites observations--une constellation, un bateau passant, un souvenir suscite par l\'air sale. Vous bougez, litteralement et figurativement, vers une rive inconnue.',
        choices: {
          'story-8742190384-c27': {
            text: 'Parler des lendemains pratiques.',
            description: 'Faites des plans, construisez la structure.',
          },
          'story-8742190384-c28': {
            text: 'Simplement tenir le moment.',
            description: 'Laissez l\'eau vous porter tous les deux.',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Vue Ancree',
        narration: 'Vous restez sur la jetee, regardant le ferry se dissoudre dans l\'horizon sombre. Riley se tient pres, enveloppe dans la pensee autant que dans le manteau. "Nous sommes bons dans le presque," disent-ils doucement, et les mots piquent de verite. Presque parler, presque rester, presque aimer pleinement. Vous sentez le poids de tous vos presques peser. Mais debout ici, vous sentez quelque chose changer.',
        choices: {
          'story-8742190384-c29': {
            text: 'Promettre d\'arreter le presque.',
            description: 'S\'engager enfin dans la plenitude.',
          },
          'story-8742190384-c30': {
            text: 'Reconnaitre honnetement le schema.',
            description: 'Voyez clairement avant de sauter.',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Lumieres et Musique',
        narration: 'Le festival du quai lance des etincelles dans le ciel sombre, les feux d\'artifice fleurissant comme des fleurs geantes de lumiere. La musique se faufile dans la foule, et vous vous retrouvez a danser sans le vouloir, les corps se souvenant des rythmes de l\'autre. Riley rit, vraiment rit, et le son detend quelque chose de tendu dans votre poitrine. Autour de vous, des etrangers celebrent leurs propres histoires, leurs propres deuxiemes chances.',
        choices: {
          'story-8742190384-c31': {
            text: 'Les embrasser quand les feux d\'artifice atteignent leur apogee.',
            description: 'Laissez la joie decider pour vous.',
          },
          'story-8742190384-c32': {
            text: 'Chuchoter vos espoirs pour l\'avenir.',
            description: 'Dites vos reves a haute voix.',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Cartes Intimes',
        narration: 'Vous trouvez un restaurant ouvert vingt-quatre heures brillant comme un phare dans la rue tranquille. Sur une tarte et un cafe, vous esquissez les contours d\'un avenir partage--pas de grandes declarations, mais de petites practicalites. Qui appellera qui, a quelle frequence, dont vous avez tous les deux besoin pour vous sentir en securite. Riley dessine des cercles sur la serviette, connectant vos vies avec de l\'encre soigneuse. C\'est peu dramatique, peu romantique, et plus precieux que n\'importe quel geste.',
        choices: {
          'story-8742190384-c33': {
            text: 'Echanger des cles comme symbole.',
            description: 'Confiance physique, promesse tangible.',
          },
          'story-8742190384-c34': {
            text: 'Accepter de se revoir demain.',
            description: 'Un pas, puis un autre.',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Construire Ensemble',
        narration: 'Vous parlez d\'appartements et d\'horaires, de la logistique de l\'amour qui surpasse l\'engouement. Riley rencontre votre praticite avec la sienne, et ensemble vous construisez un echafaudage assez robuste pour tenir la vraie vie. Le ferry continue sa traversee, mais vous avez deja atteint une rive--sol ferme apres des mers orageuses. Demain attend avec tous ses defis ordinaires.',
        choices: {
          'story-8742190384-c35': {
            text: 'S\'engager dans le travail du "nous".',
            description: 'Choisissez le chemin du partenariat.',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Moment Parfait',
        narration: 'Le monde retient son souffle. Les feux d\'artifice peignent le visage de Riley en or et rose, et vous les embrassez pendant que le ciel fleurit au-dessus de vous. Ce n\'est pas un amour parfait--vous avez vu les defauts de l\'autre trop clairement pour cela--mais c\'est un moment parfait, et vous choisissez de faire confiance que d\'autres moments suivront. La foule applaudit autour de vous, celebrant votre joie privee avec leur bruit public.',
        choices: {
          'story-8742190384-c36': {
            text: 'Laissez cette joie vous porter en avant.',
            description: 'Faites confiance au sentiment, faites-leur confiance.',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Solide',
        narration: 'Vous faites des promesses que vous avez l\'intention de tenir, prononcees simplement sans fioritures. Riley les recoit avec une gravite hochante, comprenant le poids des mots apres tant de silence. Le neon du restaurant bourdonne doucement tandis que la nuit s\'approfondit autour de vous. Vous avez choisi non pas la flamme de la passion mais la brulure constante de l\'amour, et cela ressemble a rentrer chez soi dans un endroit ou vous ne vous etes jamais tout a fait permis d\'habiter.',
        choices: {
          'story-8742190384-c37': {
            text: 'Recommencer, differemment.',
            description: 'Un nouveau chapitre, mieux ecrit.',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Separation Douce',
        narration: 'Vous vous separez avec honnetete plutot qu\'espoir, reconnaissant que certaines histoires d\'amour sont belles sans etre permanentes. Les yeux de Riley brillent mais ils hochent la tete, comprenant. "Merci pour ce soir," disent-ils, et vous savez qu\'ils veulent dire la cloture, pas seulement la compagnie. Vous marchez dans des directions opposees, plus leger d\'avoir dit la verite, triste pour ce qui ne peut etre sauve.',
        choices: {
          'story-8742190384-c38': {
            text: 'Porter la lecon en avant.',
            description: 'Certaines fins sont aussi des cadeaux.',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Au-dela de l\'Eau',
        narration: 'Le ferry accoste sur la rive lointaine, les lumieres de la ville clignotant sur l\'eau comme des souvenirs. Vous debarquez ensemble, la main de Riley ferme dans la votre. Vous parlez de choses ordinaires--quoi cuisiner, quelle plante vous oubliez constamment d\'arroser, a qui le tour de faire le cafe. Les promesses arrivent sans ceremonie, tissees dans le tissu du demain pratique. Le sillage ecrit une nouvelle ligne derriere vous, n\'effacant rien mais vous portant en avant dans la vie que vous choisissez de construire, choix par choix, jour par jour.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Ville d\'Etincelles',
        narration: 'Les feux d\'artifice cousent l\'horizon, brillants, brefs et vrais. Vous et Riley parlez des parties difficiles proprement, puis riez de l\'humain que vous etes tous les deux--maladroit, plein d\'espoir, tetu dans votre amour. Quand la derniere fleur s\'efface, l\'obscurite se sent a nouveau amicale, une couverture plutot qu\'un vide. Vous rentrez ensemble a la maison a travers des rues d\'argent sous la pluie, pas de hate, assez de temps s\'etendant devant comme un cadeau que vous vous sentez enfin digne de recevoir. La ville qui detenait autrefois votre au revoir temoigne maintenant de votre bonjour.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Un Autre Commencement',
        narration: 'Le matin vous trouve dans un cafe de coin, la lumiere du soleil coulant a travers des fenetres qui refletaient autrefois votre au revoir. Vous et Riley vous asseyez l\'un en face de l\'autre avec des cahiers et du cafe, esquissant l\'architecture d\'une relation reconstruite sur des fondations plus solides. Pas le meme amour qu\'avant--quelque chose de plus sage, plus honnete, plus resilient. Vous ne promettez pas pour toujours; vous promettez de continuer a apparaitre, de continuer a choisir, de continuer a construire. Certains amours reviennent; certains amours vous apprennent a mieux aimer. Le votre, peut-etre, est les deux.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Appartement Tranquille',
        narration: 'De retour dans votre chambre louee, la lueur bleue de l\'enseigne au neon s\'adoucit sur les bords. Vous faites infuser du the, ouvrez la fenetre et laissez la pluie terminer sa phrase. Pas ce soir, vous decidez--mais pas jamais. Vous envoyez a Riley un dernier message, un souhait pour leur bonheur exprime avec la sincerite que seule la cloture peut apporter. La ville sera toujours la quand vous serez pret a dire plus, a quelqu\'un de nouveau ou peut-etre a vous-meme. Pour l\'instant, vous laissez la pluie vous bercer pour dormir, reconnaissant pour les deuxiemes chances meme quand elles menent a des portes differentes de celles que vous esperiez.',
        choices: {},
      },
    },
  },

  // Portuguese
  pt: {
    title: 'Cidade das Segundas Chances',
    description: 'Uma chuva repentina o deixa em uma cidade que outrora chamou de lar--e onde deixou um amor inacabado. Uma noite se torna uma cadeia de pequenas escolhas corajosas: um cafe, uma livraria, um terraco, uma balsa. Encontre seu caminho de volta a verdade--ou para algo completamente novo.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Chegada na Chuva',
        narration: 'A chuva noturna alisa a avenida em um espelho, neon espalhado como pinceladas sobre o asfalto. Sua mala e mais pesada do que deveria, cheia de coisas que voce nao disse da ultima vez. Uma rajada o empurra para debaixo de uma marquise; a cidade cheira a cafe e trovao. Em algum lugar, um sino de trem tilinta. Voce diz a si mesmo que e apenas uma noite--o suficiente para decidir se vai bater na porta de Riley.',
        choices: {
          'story-8742190384-c1': {
            text: 'Entrar no cafe para se aquecer.',
            description: 'Voce pode reunir seus pensamentos--e coragem.',
          },
          'story-8742190384-c2': {
            text: 'Ir para a estacao em vez disso.',
            description: 'Trens significam saidas--e chegadas.',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Refugio Quente',
        narration: 'O leite espirala em uma pequena galaxia sobre seu latte enquanto as janelas se cobrem de gotas de chuva. O barista conversa sobre uma leitura noturna na livraria da quadra. Seu telefone vibra no pires, o nome de Riley ainda fixado no topo das suas mensagens como uma promessa que voce nunca cumpriu. A xicara aquece suas maos; sua coragem demora mais para ferver. Voce deve decidir seu proximo passo com cuidado.',
        choices: {
          'story-8742190384-c3': {
            text: 'Perguntar sobre a leitura na livraria.',
            description: 'Historias podem abrir portas.',
          },
          'story-8742190384-c4': {
            text: 'Verificar a mensagem de Riley.',
            description: 'Veja quais palavras o esperam.',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Fragmentos de Esperanca',
        narration: 'O barista menciona alguem que parece Riley perguntando sobre voce ontem. Seu telefone mostra uma mensagem simples: "Na cidade?" A coincidencia faz sua pele formigar. A chuva tamborila mais forte contra o vidro, como se o empurrasse para uma decisao. Voce poderia seguir essa pista na livraria, ou responder diretamente e mudar tudo.',
        choices: {
          'story-8742190384-c5': {
            text: 'Ir a pe para a livraria investigar.',
            description: 'Deixe a trilha guiar seus pes.',
          },
          'story-8742190384-c6': {
            text: 'Enviar a Riley uma resposta cuidadosa.',
            description: '"Ainda aqui. Podemos conversar?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Estendendo a Mao',
        narration: 'Sua mensagem paira no eter digital, uma pequena bandeira de tregua erguida na noite. A livraria espera tres quarteiroes ao leste, suas janelas brilhando como uma lanterna na chuva. Qualquer caminho leva para a mesma incerteza. Seu coracao bate com o peso das palavras nao ditas por muito tempo. Voce deve escolher como construir uma ponte sobre o silencio entre voces.',
        choices: {
          'story-8742190384-c7': {
            text: 'Esperar a resposta de Riley.',
            description: 'Deixe-os estabelecer os termos.',
          },
          'story-8742190384-c8': {
            text: 'Ir a livraria de qualquer maneira.',
            description: 'Movimento vence espera.',
          },
        },
      },
      'story-8742190384-5': {
        title: 'As Palavras Chegam',
        narration: 'Seu telefone acende: "Estacao. Dez minutos." As palavras sao escassas, mas sao uma abertura. Voce pega seu casaco, coracao martelando contra suas costelas como um passaro contra o vidro. A chuva nao parou, mas voce nao percebe mais. Cada passo em direcao a estacao parece como cruzar um limiar que nao pode ser desfeito. O tempo comprime; o momento expande.',
        choices: {
          'story-8742190384-c9': {
            text: 'Andar rapidamente ate a estacao.',
            description: 'Nao os faca esperar.',
          },
          'story-8742190384-c10': {
            text: 'Tomar um momento para se compor.',
            description: 'Respire antes do acerto de contas.',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Chegada a Estacao',
        narration: 'A estacao zumbe com partidas, placas piscando letras como palpebras inquietas. Uma risada que voce conhece flutua do mezanino--familiar como uma musica favorita. Voce congela no meio da escada, mala batendo no degrau. La, pelo quiosque de cafe, esta Riley com cabelo salpicado de chuva e uma expressao que voce nao consegue ler bem. Sua respiracao falha.',
        choices: {
          'story-8742190384-c11': {
            text: 'Chamar o nome deles.',
            description: 'Deixe a estacao testemunhar.',
          },
          'story-8742190384-c12': {
            text: 'Aproximar-se lentamente, deixando-se ver.',
            description: 'De a eles tempo para se ajustar.',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Reconhecimento',
        narration: 'Riley se vira, e o tempo gagueja. Os olhos deles se arregalam, depois suavizam com algo complicado--dor, esperanca, hesitacao. "Voce veio," dizem, e soa como uma acusacao e um alivio trancados juntos. O barulho da estacao desaparece em um murmurio. Voce ensaiou este momento mil vezes na cabeca, mas agora todos os seus discursos se dissolvem. Voce deve escolher qual verdade falar primeiro.',
        choices: {
          'story-8742190384-c13': {
            text: 'Pedir desculpas por ir embora.',
            description: 'Comece com a verdade mais dificil.',
          },
          'story-8742190384-c14': {
            text: 'Perguntar como eles estao.',
            description: 'Comece suavemente, construa a ponte.',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Ponte Tentativa',
        narration: 'Riley escuta, realmente escuta, de um jeito que voce tinha esquecido que as pessoas podiam. O cafe deles esfria entre as maos enquanto voce fala. As multidoes da estacao fluem ao seu redor como agua ao redor de pedras. Algo fragil comeca a se formar no espaco entre suas palavras--uma possibilidade, um talvez, uma porta se abrindo. Voce precisa sugerir onde esta conversa pode continuar.',
        choices: {
          'story-8742190384-c15': {
            text: 'Sugerir caminhar ate o parque.',
            description: 'Movimento pode aliviar a tensao.',
          },
          'story-8742190384-c16': {
            text: 'Propor o terraco que ambos amavam.',
            description: 'Memoria compartilhada como fundacao.',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Passos Compartilhados',
        narration: 'Voce caminha junto com Riley por ruas que lembram seus passos. A chuva suavizou em uma neblina que se agarra ao seu cabelo como memorias. Riley caminha perto o suficiente para seus ombros se esfregarem, longe o suficiente para voce nao ler seus pensamentos. Voce passa pela antiga galeria onde teve seu primeiro encontro, a padaria onde brigaram e fizeram as pazes. Cada marco e um fantasma que voce deve decidir reconhecer.',
        choices: {
          'story-8742190384-c17': {
            text: 'Mencionar a galeria ao passar.',
            description: 'Honre a historia entre voces.',
          },
          'story-8742190384-c18': {
            text: 'Focar no momento presente.',
            description: 'Deixe o passado descansar por enquanto.',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Ponto de Chegada',
        narration: 'Voce alcanca o velho banco no parque a beira do rio onde uma vez conversaram ate o amanhecer. A madeira esta lisa por inumeras conversas, inumeras confissoes. Riley senta, deixando espaco que pode ser convite ou distancia. As luzes da cidade dancam na agua como estrelas espalhadas. Voce esta aqui, juntos, depois de tudo. O momento parece suspenso, esperando que voce insufle vida no que vem depois.',
        choices: {
          'story-8742190384-c19': {
            text: 'Sentar perto e comecar a explicar.',
            description: 'Ofereca a verdade completa finalmente.',
          },
          'story-8742190384-c20': {
            text: 'Perguntar o que eles precisam de voce.',
            description: 'Deixe-os guiar a cura.',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Terreno Honesto',
        narration: 'As palavras fluem como o rio ao seu lado--as vezes suaves, as vezes torrenciais. Voce fala de medo e orgulho, do silencio que cresceu entre voces como hera, das noites em que quase ligou. Riley encontra seus olhos, e voce ve seu proprio anseio refletido la. O banco segura voces dois enquanto a verdade se assenta, pesada e necessaria. Voce chegou ao limiar da decisao. E aqui que os caminhos realmente divergem.',
        choices: {
          'story-8742190384-c21': {
            text: 'Sugerir um passeio de balsa juntos.',
            description: 'Deixe a agua leva-los em frente.',
          },
          'story-8742190384-c22': {
            text: 'Propor comecar de novo, aqui e agora.',
            description: 'Um novo capitulo em solo familiar.',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Beira d\'Agua',
        narration: 'O terminal da balsa brilha contra a agua escura, uma promessa de partida e retorno. A mao de Riley encontra a sua, hesitante mas quente. "Estou com medo," admitem, e voce aperta os dedos deles em reconhecimento. O medo e o preco da esperanca, voce percebe. A buzina do barco soa, baixa e paciente. Voce esta na beira de algo vasto--um oceano de possibilidades, ou as aguas profundas de padroes antigos.',
        choices: {
          'story-8742190384-c23': {
            text: 'Embarcar na balsa juntos.',
            description: 'Comprometa-se com a jornada.',
          },
          'story-8742190384-c24': {
            text: 'Sugerir observar do cais em vez disso.',
            description: 'Fique ancorado, fique seguro.',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Solo Novo',
        narration: 'Voce fala de comecar de novo--nao onde pararam, mas onde estao agora, duas pessoas mudadas com historia compartilhada e crescimento separado. Riley acena lentamente, considerando. "Isso significa deixar algumas coisas irem," dizem, e voce sabe que estao certos. O passado e um jardim que voce nao pode desplantar, mas pode escolher o que cuidar agora. A cidade ao seu redor respira com possibilidades.',
        choices: {
          'story-8742190384-c25': {
            text: 'Caminhar ate o festival a beira da agua.',
            description: 'Celebre este fragil novo comeco.',
          },
          'story-8742190384-c26': {
            text: 'Encontrar um lugar quieto para planejar amanha.',
            description: 'Construa a fundacao cuidadosamente.',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Atravessando Aguas',
        narration: 'A balsa se afasta do cais, as luzes da cidade se soltando em um color sobre a agua escura. Voce se inclina contra o corrimao com Riley ao seu lado, ombros se tocando. A conversa suavizou em um silencio confortavel, quebrado ocasionalmente por pequenas observacoes--uma constelacao, um barco passando, uma memoria despertada pelo ar salgado. Voce esta se movendo, literal e figurativamente, em direcao a uma costa desconhecida.',
        choices: {
          'story-8742190384-c27': {
            text: 'Falar dos amanhãs praticos.',
            description: 'Faca planos, construa estrutura.',
          },
          'story-8742190384-c28': {
            text: 'Simplesmente segurar o momento.',
            description: 'Deixe a agua levar voces dois.',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Vista Ancorada',
        narration: 'Voce permanece no cais, observando a balsa se dissolver no horizonte escuro. Riley fica perto, envolvido em pensamento tanto quanto em casaco. "Somos bons em quase," dizem baixinho, e as palavras picam com verdade. Quase conversando, quase ficando, quase amando plenamente. Voce sente o peso de todos os seus quases pressionando. Mas estando aqui, voce sente algo mudando.',
        choices: {
          'story-8742190384-c29': {
            text: 'Prometer parar de quase-fazer.',
            description: 'Comprometa-se com a plenitude, finalmente.',
          },
          'story-8742190384-c30': {
            text: 'Reconhecer o padrao honestamente.',
            description: 'Veja claramente antes de pular.',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Luzes e Musica',
        narration: 'O festival a beira da agua lanca faiscas no ceu escuro, fogos de artificio florescendo como flores gigantes de luz. Musica se entrelaca pela multidao, e voces se encontram dancando sem querer, corpos lembrando os ritmos um do outro. Riley ri, realmente ri, e o som afrouxa algo apertado no seu peito. Ao seu redor, estranhos celebram suas proprias historias, suas proprias segundas chances.',
        choices: {
          'story-8742190384-c31': {
            text: 'Beija-los quando os fogos de artificio atingirem o pico.',
            description: 'Deixe a alegria decidir por voce.',
          },
          'story-8742190384-c32': {
            text: 'Sussurrar suas esperancas para o futuro.',
            description: 'Fale seus sonhos em voz alta.',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Mapas Intimos',
        narration: 'Voce encontra um restaurante aberto vinte e quatro horas brilhando como um farol na rua tranquila. Sobre torta e cafe, voces esbocam os contornos de um futuro compartilhado--nao grandes declaracoes, mas pequenas praticidades. Quem ligara para quem, com que frequencia, do que ambos precisam para se sentir seguros. Riley desenha circulos no guardanapo, conectando suas vidas com tinta cuidadosa. E pouco dramatico, pouco romantico, e mais precioso que qualquer gesto.',
        choices: {
          'story-8742190384-c33': {
            text: 'Trocar chaves como simbolo.',
            description: 'Confianca fisica, promessa tangivel.',
          },
          'story-8742190384-c34': {
            text: 'Concordar em se encontrar novamente amanha.',
            description: 'Um passo, depois outro.',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Construindo Juntos',
        narration: 'Voce fala de apartamentos e horarios, da logistica do amor que supera a paixao. Riley encontra sua praticidade com a deles, e juntos voces constroem um andaime robusto o suficiente para segurar a vida real. A balsa continua sua travessia, mas voce ja alcancou uma costa--solo firme apos mares tempestuosos. Amanha espera com todos os seus desafios comuns.',
        choices: {
          'story-8742190384-c35': {
            text: 'Comprometer-se com o trabalho do "nos".',
            description: 'Escolha o caminho da parceria.',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Momento Perfeito',
        narration: 'O mundo segura a respiracao. Fogos de artificio pintam o rosto de Riley em ouro e rosa, e voce os beija enquanto o ceu floresce sobre voces. Nao e um amor perfeito--voces viram as falhas um do outro com muita clareza para isso--mas e um momento perfeito, e voce escolhe confiar que mais momentos seguirao. A multidao aplaude ao seu redor, celebrando sua alegria privada com seu ruido publico.',
        choices: {
          'story-8742190384-c36': {
            text: 'Deixe esta alegria leva-lo em frente.',
            description: 'Confie no sentimento, confie neles.',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Solo Firme',
        narration: 'Voce faz promessas que pretende cumprir, ditas simplesmente sem floreios. Riley as recebe com gravidade acenante, entendendo o peso das palavras depois de tanto silencio. O neon do restaurante zumbi suavemente enquanto a noite se aprofunda ao seu redor. Voce escolheu nao a chama da paixao mas a queima constante do amor, e parece como voltar para casa em um lugar onde voce nunca se permitiu habitar completamente.',
        choices: {
          'story-8742190384-c37': {
            text: 'Comecar de novo, diferentemente.',
            description: 'Um novo capitulo, melhor escrito.',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Separacao Suave',
        narration: 'Voce se separa com honestidade em vez de esperanca, reconhecendo que algumas historias de amor sao bonitas sem serem permanentes. Os olhos de Riley brilham mas eles acenam, entendendo. "Obrigado por esta noite," dizem, e voce sabe que significam o encerramento, nao apenas a companhia. Voce caminha em direcoes opostas, mais leve por ter dito a verdade, triste pelo que nao pode ser salvo.',
        choices: {
          'story-8742190384-c38': {
            text: 'Levar a licao em frente.',
            description: 'Alguns finais tambem sao presentes.',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Alem da Agua',
        narration: 'A balsa atraca na costa distante, luzes da cidade cintilando sobre a agua como memorias. Voce desembarca junto com Riley, mao deles firme na sua. Voce fala de coisas comuns--o que cozinhar, qual planta voce continua esquecendo de regar, de quem e a vez de fazer cafe. Promessas chegam sem cerimonia, entretecidas no tecido do amanha pratico. O rastro escreve uma nova linha atras de voce, nao apagando nada mas carregando voce em frente para a vida que escolhe construir, escolha por escolha, dia por dia.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Cidade de Faiscas',
        narration: 'Fogos de artificio costuram o horizonte, brilhantes, breves e verdadeiros. Voce e Riley falam as partes dificeis limpamente, depois riem do quao humanos voces sao--tropecando, esperancosos, teimosos no amor. Quando a ultima flor desvanece, a escuridao parece amigavel novamente, um cobertor em vez de um vazio. Voce vai para casa junto com eles por ruas prateadas de chuva, sem pressa, tempo suficiente se estendendo a frente como um presente que voce finalmente se sente digno de receber. A cidade que uma vez segurou sua despedida agora testemunha sua saudacao.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Outro Comeco',
        narration: 'A manha o encontra em um cafe de esquina, luz do sol fluindo atraves de janelas que uma vez refletiram sua despedida. Voce e Riley sentam frente a frente com cadernos e cafe, esbocando a arquitetura de um relacionamento reconstruido sobre fundacoes mais fortes. Nao o mesmo amor de antes--algo mais sabio, mais honesto, mais resiliente. Voce nao promete para sempre; voce promete continuar aparecendo, continuar escolhendo, continuar construindo. Alguns amores retornam; alguns amores ensinam voce a amar melhor. O seu, talvez, seja ambos.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Apartamento Tranquilo',
        narration: 'De volta ao seu quarto alugado, o brilho azul da placa de neon suaviza nas bordas. Voce prepara cha, abre a janela e deixa a chuva terminar sua frase. Nao esta noite, voce decide--mas nao nunca. Voce envia a Riley uma mensagem final, um desejo pela felicidade deles expresso com a sinceridade que apenas o encerramento pode trazer. A cidade ainda estara aqui quando voce estiver pronto para dizer mais, para alguem novo ou talvez para si mesmo. Por enquanto, voce deixa a chuva embalar voce para dormir, grato pelas segundas chances mesmo quando levam a portas diferentes das que voce esperava.',
        choices: {},
      },
    },
  },


  // Japanese
  ja: {
    title: 'セカンドチャンスの街',
    description: '突然の土砂降りが、かつて家と呼んだ街--そして未完の恋を置き去りにした街--にあなたを取り残す。一夜が小さな勇敢な選択の連鎖に変わる：カフェ、書店、屋上、フェリー。真実への道を見つけるか--あるいは全く新しい何かへ。',
    author: 'A.マリン',
    nodes: {
      'story-8742190384-1': {
        title: '雨の到着',
        narration: '夜の雨が大通りを鏡に変え、ネオンがアスファルトに筆致のように滲む。スーツケースは重すぎる、前回言えなかった言葉でいっぱいだ。突風が軒下に押し込む。街はコーヒーと雷の匂いがする。どこかで列車のベルが鳴る。自分に言い聞かせる、たった一夜だ--ライリーのドアをノックするか決めるには十分な時間。',
        choices: {
          'story-8742190384-c1': {
            text: '暖を取るためにカフェに入る',
            description: '考えと勇気を蓄えるかもしれない',
          },
          'story-8742190384-c2': {
            text: '代わりに駅へ向かう',
            description: '列車は出口を意味し--そして到着も',
          },
        },
      },
      'story-8742190384-2': {
        title: '温かい避難所',
        narration: '窓に雨粒がつく中、ミルクがラテの上で小さな銀河を描く。バリスタは通りの向こうの書店での夜の朗読会について話している。受話器の上でスマホが震える、ライリーの名前が未だにメッセージのトップにピン留めされている、果たされなかった約束のように。カップが手を温める。勇気はゆっくりと沸いてくる。次の一歩を慎重に決めなければならない。',
        choices: {
          'story-8742190384-c3': {
            text: '書店の朗読会について尋ねる',
            description: '物語が扉を開くかもしれない',
          },
          'story-8742190384-c4': {
            text: 'ライリーからのメッセージを確認する',
            description: 'どんな言葉が待っているか見てみよう',
          },
        },
      },
      'story-8742190384-3': {
        title: '希望の断片',
        narration: 'バリスタは、ライリーに似た誰かが昨日あなたを尋ねていたと言う。スマホにはシンプルなメッセージが表示される：「街にいる？」偶然が肌を粟立たせる。雨がガラスを強く叩き、決断を急かすように。書店でこの手がかりを追うか、あるいは直接返信して全てを変えるか。',
        choices: {
          'story-8742190384-c5': {
            text: '調べるために書店へ歩く',
            description: '手がかりに足を任せよう',
          },
          'story-8742190384-c6': {
            text: 'ライリーに慎重に返信する',
            description: '"まだここ。話せる？"',
          },
        },
      },
      'story-8742190384-4': {
        title: '手を伸ばす',
        narration: 'あなたのメッセージがデジタルの世界に浮かぶ、夜に掲げられた小さな停戦の旗。書店は東へ3ブロック先で待ち、窓が雨の中で提灯のように光っている。どちらの道も同じ不確実性へ。心臓が長く言えなかった言葉の重さで打つ。二人の間の沈黙をどう橋渡しするか選ばなければならない。',
        choices: {
          'story-8742190384-c7': {
            text: 'ライリーの返事を待つ',
            description: '彼らに条件を決めさせよう',
          },
          'story-8742190384-c8': {
            text: 'とにかく書店へ行く',
            description: '待つより動こう',
          },
        },
      },
      'story-8742190384-5': {
        title: '言葉が届く',
        narration: 'スマホが光る：「駅。10分。」言葉は少ないが、それは突破口だ。コートをまとう、心臓が肋骨にガラスにぶつかる鳥のように打つ。雨は止んでいないが、もう気づかない。駅へ向かう一歩一歩が、取り消せない閾値を越えるように感じられる。時間が圧縮され、瞬間が拡がる。',
        choices: {
          'story-8742190384-c9': {
            text: '急いで駅へ歩く',
            description: '待たせてはいけない',
          },
          'story-8742190384-c10': {
            text: '気持ちを落ち着ける時間を取る',
            description: '清算の前に呼吸しよう',
          },
        },
      },
      'story-8742190384-6': {
        title: '駅への到着',
        narration: '駅は出発で賑わい、掲示板が落ち着かないまぶたのように文字を切り替える。知っている笑い声が中二階から流れる--お気に入りの歌のように馴染み深い。階段の途中で凍りつく、スーツケースが段に落ちる音を立てる。そこに、コーヒースタンドのそばに、雨に濡れた髪のライリーが立っている、あなたには読めない表情で。息が止まる。',
        choices: {
          'story-8742190384-c11': {
            text: '名前を呼ぶ',
            description: '駅にこの瞬間を見届けさせよう',
          },
          'story-8742190384-c12': {
            text: 'ゆっくり近づき、自分を見せる',
            description: '彼らに慣れる時間を与えよう',
          },
        },
      },
      'story-8742190384-7': {
        title: '再会',
        narration: 'ライリーが振り向くと、時間が途切れる。目が見開かれ、そして何か複雑なもの--傷、希望、躊躇--で柔らかくなる。「来たのね」と彼らは言う、それは告発と安堵が絡み合ったように聞こえる。駅の喧騒がぼんやりとした低语になる。この瞬間を頭の中で千回リハーサルしたが、今すべてのスピーチが溶けていく。最初にどの真実を話すか選ばなければならない。',
        choices: {
          'story-8742190384-c13': {
            text: '去ったことを謝る',
            description: '最も難しい真実から始めよう',
          },
          'story-8742190384-c14': {
            text: '彼らがどうしていたか尋ねる',
            description: '優しく始め、溝を埋めよう',
          },
        },
      },
      'story-8742190384-8': {
        title: 'ためらいの橋',
        narration: 'ライリーは聞く、本当に聞く、人ができることを忘れていたような仕方で。あなたが話す間、彼らのコーヒーが手の中で冷たくなる。駅の群衆が石の周りの水のように周りを流れる。言葉の間の空間に何か壊れやすいものが形作られ始める--可能性、もしかしたら、開き始めた扉。この会話をどこで続けるか提案する必要がある。',
        choices: {
          'story-8742190384-c15': {
            text: '公園まで歩くことを提案する',
            description: '動きが緊張を和らげるかもしれない',
          },
          'story-8742190384-c16': {
            text: '二人で愛した屋上を提案する',
            description: '共有の記憶を基盤として',
          },
        },
      },
      'story-8742190384-9': {
        title: '共に歩む',
        narration: '足跡を覚えている通りを一緒に歩く。雨は霧にやわらぎ、思い出のように髪にまとわりつく。ライリーは肩が触れ合うほど近く、彼らの考えを読めないほど遠くを歩く。最初のデートをした古いギャラリー、喧嘩して仲直りしたパン屋を通り過ぎる。それぞれのランドマークは、認めるかどうか決めなければならない幽霊だ。',
        choices: {
          'story-8742190384-c17': {
            text: '通り過ぎるときにギャラリーに言及する',
            description: '二人の間の歴史を尊重しよう',
          },
          'story-8742190384-c18': {
            text: '現在の瞬間に集中する',
            description: '今は過去を休ませよう',
          },
        },
      },
      'story-8742190384-10': {
        title: '到着点',
        narration: 'かつて夜明けまで話した川沿いの公園の古いベンチにたどり着く。木は数え切れない会話と告白でなめらかに磨かれている。ライリーは座る、招待か距離か分からない空間を残して。街の灯が散らばった星のように水面で踊る。すべての後で、ここに一緒にいる。瞬間は浮遊しているように感じられ、次に何が来るかに命を吹き込むのを待っている。',
        choices: {
          'story-8742190384-c19': {
            text: '近くに座って説明し始める',
            description: 'ついに全ての真実を捧げよう',
          },
          'story-8742190384-c20': {
            text: '彼らに何が必要か尋ねる',
            description: '癒しを彼らに導かせよう',
          },
        },
      },
      'story-8742190384-11': {
        title: '誠実な地',
        narration: '言葉は横の川のように流れる--時に優しく、時に激流のように。恐怖と誇り、蔦のように二人の間に広がった沈黙、電話しそうになった夜について話す。ライリーと目が合い、そこに自分の渇望が映っているのを見る。ベンチは二人を支え、真実が重く、必要として沈んでいく。決断の閾値にたどり着いた。ここで道は本当に分かれる。',
        choices: {
          'story-8742190384-c21': {
            text: '一緒にフェリーに乗ることを提案する',
            description: '水が前に運んでくれるように',
          },
          'story-8742190384-c22': {
            text: 'ここで今、新しく始めることを提案する',
            description: '馴染みの土壌で新しい章を',
          },
        },
      },
      'story-8742190384-12': {
        title: '水辺',
        narration: 'フェリーターミナルが暗い水に対して光り、出発と帰還の約束。ライリーの手があなたの手を見つける、ためらいながらも温かく。「怖い」と彼らは認め、あなたは指を握りしめて応える。恐怖は希望の代償だと気づく。船の汽笛が低く、辛抱強く鳴る。何か巨大なものの縁に立っている--可能性の海か、あるいは古いパターンの深い水。',
        choices: {
          'story-8742190384-c23': {
            text: '一緒にフェリーに乗る',
            description: '旅に専念しよう',
          },
          'story-8742190384-c24': {
            text: '代わりに桟橋から見ることを提案する',
            description: '錨を下ろし、安全を保とう',
          },
        },
      },
      'story-8742190384-13': {
        title: '新しい土壌',
        narration: 'やり直すことについて話す--去った場所からではなく、今いる場所から、変わった二人の人間が共有の歴史と別々の成長を持って。ライリーはゆっくりと頷き、考える。「それはいくつかのものを手放すことだね」と彼らは言い、あなたは彼らが正しいことを知る。過去は植え替えられない庭だが、今手入れするものを選べる。周りの街は可能性に満ちて息づいている。',
        choices: {
          'story-8742190384-c25': {
            text: 'ウォーターフロントの祭りへ歩く',
            description: 'この壊れやすい新しい始まりを祝おう',
          },
          'story-8742190384-c26': {
            text: '明日を計画する静かな場所を見つける',
            description: '基盤を慎重に築こう',
          },
        },
      },
      'story-8742190384-14': {
        title: '水を渡る',
        narration: 'フェリーが岸を離れ、街の灯が暗い水面で首飾りに緩む。ライリーが隣にいる、肩が触れ合うように手すりにもたれる。会話は心地よい沈黙にやわらぎ、時折小さな観察で破られる--星座、通り過ぎる船、潮風で呼び起こされた記憶。文字通り、そして比喩的に、未知の岸へ向かって動いている。',
        choices: {
          'story-8742190384-c27': {
            text: '実際的な明日について話す',
            description: '計画を立て、構造を築こう',
          },
          'story-8742190384-c28': {
            text: '単にこの瞬間を保つ',
            description: '水が二人を運ぶままに',
          },
        },
      },
      'story-8742190384-15': {
        title: '錨を下ろした眺め',
        narration: '桟橋に残り、フェリーが暗い水平線に溶けていくのを見る。ライリーは近くに立ち、コートと同じくらい考えに包まれている。「私たちは"ほとんど"が得意だね」と彼らは静かに言い、言葉が真実で刺す。ほとんど話す、ほとんど留まる、ほとんど完全に愛する。すべての"ほとんど"の重みが押し寄せるのを感じる。しかしここに立って、何かが変わるのを感じる。',
        choices: {
          'story-8742190384-c29': {
            text: '"ほとんど"をやめると約束する',
            description: 'ついに完全さに専念しよう',
          },
          'story-8742190384-c30': {
            text: 'パターンを正直に認める',
            description: '飛び込む前に明確に見よう',
          },
        },
      },
      'story-8742190384-16': {
        title: '光と音楽',
        narration: 'ウォーターフロントの祭りが暗い空に火花を上げ、花火が巨大な光の花として咲く。音楽が群衆を貫き、意図せず踊っている自分たちを見つける、体が互いのリズムを覚えている。ライリーが笑う、本当に笑い、その音が胸の締め付けを緩める。周りで見知らぬ人たちが自分たちの物語、自分たちのセカンドチャンスを祝っている。',
        choices: {
          'story-8742190384-c31': {
            text: '花火がピークに達したときに彼らにキスする',
            description: '喜びに決めさせよう',
          },
          'story-8742190384-c32': {
            text: '未来への希望を囁く',
            description: '夢を声に出そう',
          },
        },
      },
      'story-8742190384-17': {
        title: '親密な地図',
        narration: '静かな通りに灯台のように光る24時間営業のダイナーを見つける。パイとコーヒーを片手に、共有の未来の輪郭をスケッチする--壮大な宣言ではなく、小さな実用的なこと。誰が誰に電話するか、どのくらいの頻度で、二人が安全を感じるために何が必要か。ライリーがナプキンに円を描き、注意深いインクで人生を繋ぐ。劇的でもロマンチックでもなく、どんな仕草よりも尊い。',
        choices: {
          'story-8742190384-c33': {
            text: '象徴として鍵を交換する',
            description: '物理的な信頼、有形の約束',
          },
          'story-8742190384-c34': {
            text: '明日また会うことに合意する',
            description: '一歩、そしてもう一歩',
          },
        },
      },
      'story-8742190384-18': {
        title: '共に築く',
        narration: 'アパートとスケジュール、夢中を超えて続く愛のロジスティクスについて話す。ライリーはあなたの実用性に彼らの実用性で応え、一緒に現実の人生を支えるのに十分な丈夫な足場を構築する。フェリーは横断を続けるが、あなたはすでに岸にたどり着いている--荒れた海の後の固い地面。明日はすべての普通の挑戦と共に待っている。',
        choices: {
          'story-8742190384-c35': {
            text: '"私たち"の仕事に専念する',
            description: 'パートナーシップの道を選ぼう',
          },
        },
      },
      'story-8742190384-19': {
        title: '完璧な瞬間',
        narration: '世界が息を止める。花火がライリーの顔を金とバラ色に彩り、空が頭上で咲くときに彼らにキスする。完璧な愛ではない--あまりにも明確にお互いの欠点を見てしまった--しかし完璧な瞬間であり、より多くの瞬間が続くことを信じることを選ぶ。周りの群衆が喝采し、彼らの公的な騒音であなたの私的な喜びを祝う。',
        choices: {
          'story-8742190384-c36': {
            text: 'この喜びが前に運んでくれるように',
            description: '感情を信じ、彼らを信じよう',
          },
        },
      },
      'story-8742190384-20': {
        title: '固い地面',
        narration: '守るつもりの約束を、飾り気なくシンプルに話す。ライリーは頷く厳粛さで受け取り、長い沈黙の後の言葉の重さを理解する。ダイナーのネオンが静かにブンと鳴り、周りの夜が深まっていく。情熱の炎ではなく愛の安定した燃焼を選び、自分に住むことを完全に許さなかった場所に帰ってきたように感じる。',
        choices: {
          'story-8742190384-c37': {
            text: '違う形でもう一度始める',
            description: 'より良く書かれた新しい章',
          },
        },
      },
      'story-8742190384-21': {
        title: '穏やかな別れ',
        narration: '希望より誠実さで別れ、いくつかの恋愛物語は永遠でなくても美しいことを認める。ライリーの目が潤むが彼らは頷き、理解する。「今夜はありがとう」と彼らは言い、単なる付き添いではなく終結を意味していることをあなたは知る。反対の方向へ歩き、真実を話して軽くなり、救えないものに悲しむ。',
        choices: {
          'story-8742190384-c38': {
            text: '教訓を先に進む',
            description: 'いくつかの終わりもまた贈り物だ',
          },
        },
      },
      'story-8742190384-22': {
        title: '水の向こう',
        narration: 'フェリーが遠い岸に着岸し、街の灯が思い出のように水面でまたたく。一緒に降りる、ライリーの手があなたの手の中でしっかりしている。何を料理するか、どの植物を水やりし忘れているか、コーヒーを淹れるのは誰の番かといった普通のことを話す。約束は儀式なしに届き、実用的な明日の構造に織り込まれる。航跡が後ろに新しい線を描き、何も消さずに、選択を重ね、日を重ねて築く人生へとあなたを運ぶ。',
        choices: {},
      },
      'story-8742190384-23': {
        title: '火花の街',
        narration: '花火が地平線を縫い、明るく、短く、そして真実。あなたとライリーは難しい部分を素直に話し、それから二人ともどれだけ人間的か--つまずき、希望を持ち、愛に頑固か--笑う。最後の咲きが消えると、暗闇は再び親しげに感じられ、虚無ではなく毛布のように。急ぐことなく、雨で銀色の通りを一緒に家へ歩き、ついに受け取るに値すると感じる贈り物のように十分な時間が先に広がっている。かつて別れを見た街が今、あいさつを見ている。',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'もう一つの始まり',
        narration: '朝があなたを角のカフェで見つける、かつて別れを映した窓を通して太陽の光が流れる。あなたとライリーはノートとコーヒーを持って向かい合い、より強い基盤の上に再建された関係の構造をスケッチする。以前と同じ愛ではない--より賢く、より誠実で、より回復力のある何か。永遠を約束しない。現れ続け、選び続け、築き続けることを約束する。いくつかの愛は戻る。いくつかの愛はより上手く愛する方法を教えてくれる。あなたの愛は、多分、両方だ。',
        choices: {},
      },
      'story-8742190384-25': {
        title: '静かなアパート',
        narration: '借りた部屋に戻ると、ネオンサインの青い光が端で柔らかくなる。お茶を淹れ、窓を開け、雨に言葉を終わらせる。今夜はない、と決める--しかし決してないわけでもない。最後のメッセージをライリーに送る、終結だけがもたらす誠実さで表現された彼らの幸せへの願い。もっと話す準備ができたとき、新しい誰かに、あるいは自分自身に、街はまだここにある。今は、雨が眠りへと揺り動かすのに任せ、望んだ扉とは違う扉に導かれても、セカンドチャンスに感謝する。',
        choices: {},
      },
    },
  },

  // Chinese
  zh: {
    title: '第二次机会之城',
    description: '一场突如其来的暴雨让你被困在一座曾经称之为家的城市--也是一段未完成的恋情所在之地。一夜变成一连串小而勇敢的选择：咖啡馆、书店、屋顶、渡轮。找到回到真相的路--或是通往全新事物的路。',
    author: 'A.马林',
    nodes: {
      'story-8742190384-1': {
        title: '雨中抵达',
        narration: '夜雨将大道变成镜子，霓虹灯像笔触一样涂抹在柏油路上。你的行李箱比应该的还要重，装满了上次没有说出口的话。一阵风把你推到檐下；城市闻起来像咖啡和雷声。某处传来火车铃声。你告诉自己这只是一夜--足够决定是否去敲莱利的门。',
        choices: {
          'story-8742190384-c1': {
            text: '躲进咖啡馆取暖',
            description: '你可以整理思绪--还有勇气',
          },
          'story-8742190384-c2': {
            text: '改去车站',
            description: '火车意味着离开--也意味着抵达',
          },
        },
      },
      'story-8742190384-2': {
        title: '温暖的避难所',
        narration: '牛奶在你的拿铁上旋成一个小银河，窗户上挂满雨珠。咖啡师聊着街角书店今晚的朗读会。手机在杯碟上震动，莱利的名字仍然固定在消息顶部，像一个从未兑现的承诺。杯子温暖你的双手；你的勇气慢慢沸腾。你必须谨慎决定下一步。',
        choices: {
          'story-8742190384-c3': {
            text: '询问书店的朗读会',
            description: '故事可能会打开门道',
          },
          'story-8742190384-c4': {
            text: '查看莱利的消息',
            description: '看看有什么话在等着你',
          },
        },
      },
      'story-8742190384-3': {
        title: '希望的碎片',
        narration: '咖啡师提到一个听起来像莱利的人昨天在打听你。手机显示一条简单的短信："在城里？"这种巧合让你皮肤发麻。雨更用力地敲打着玻璃，好像在催促你做出决定。你可以去书店追踪这条线索，或者直接回复改变一切。',
        choices: {
          'story-8742190384-c5': {
            text: '走到书店去调查',
            description: '让线索指引你的脚步',
          },
          'story-8742190384-c6': {
            text: '给莱利一个谨慎的回复',
            description: '"还在这里。我们能谈谈吗？"',
          },
        },
      },
      'story-8742190384-4': {
        title: '伸出手',
        narration: '你的消息在数字世界中悬浮，像一面在黑夜中升起的停战小旗。书店在东边三个街区外等候，窗户在雨中像灯笼一样发光。两条路都通向同样的不确定。你的心跳因太久未说出口的话而沉重。你必须选择如何弥合你们之间的沉默。',
        choices: {
          'story-8742190384-c7': {
            text: '等待莱利的回应',
            description: '让他们定下条件',
          },
          'story-8742190384-c8': {
            text: '不管怎样去书店',
            description: '行动胜过等待',
          },
        },
      },
      'story-8742190384-5': {
        title: '话语抵达',
        narration: '你的手机亮起："车站。十分钟。"话语稀少，但这是一个开端。你拿起外套，心脏像鸟撞玻璃一样敲打着肋骨。雨还没有停，但你已经不再注意。走向车站的每一步都像是跨过一道无法撤销的门槛。时间压缩；瞬间膨胀。',
        choices: {
          'story-8742190384-c9': {
            text: '快步走向车站',
            description: '不要让他们等待',
          },
          'story-8742190384-c10': {
            text: '花点时间镇定下来',
            description: '在清算之前深呼吸',
          },
        },
      },
      'story-8742190384-6': {
        title: '车站抵达',
        narration: '车站因离别而嗡嗡作响，公告牌像不安的眼睑一样翻动着字母。你熟悉的笑声从夹楼飘下来--像最喜欢的歌一样熟悉。你在楼梯中途僵住，行李箱砰地撞在台阶上。那里，在咖啡亭旁边，站着莱利，头发沾满雨点，表情让你无法完全读懂。你的呼吸一滞。',
        choices: {
          'story-8742190384-c11': {
            text: '喊出他们的名字',
            description: '让车站见证这一刻',
          },
          'story-8742190384-c12': {
            text: '慢慢走近，让他们看到你',
            description: '给他们时间适应',
          },
        },
      },
      'story-8742190384-7': {
        title: '重逢',
        narration: '莱利转身，时间卡住了。他们的眼睛睁大，然后因某种复杂的东西而柔和--伤害、希望、犹豫。"你来了，"他们说，听起来像是指控和解脱交织在一起。车站的噪音淡化为低语。你在脑海中排练这一刻一千次，但现在你所有的演讲都消散了。你必须选择先说出什么真相。',
        choices: {
          'story-8742190384-c13': {
            text: '为离开道歉',
            description: '从最难的真相开始',
          },
          'story-8742190384-c14': {
            text: '问问他们过得怎么样',
            description: '温柔地开始，架起桥梁',
          },
        },
      },
      'story-8742190384-8': {
        title: '试探的桥梁',
        narration: '莱利倾听，真正地倾听，以你忘记人们能做到的方式。当你说话时，他们的咖啡在双手之间变凉。车站的人群像水绕过石头一样绕过你们。你们的话语之间的空隙开始形成某种脆弱的东西--一个可能性、一个也许、一扇正在裂开的门。你需要建议在哪里继续这场对话。',
        choices: {
          'story-8742190384-c15': {
            text: '建议走到公园',
            description: '行动可能会缓解紧张',
          },
          'story-8742190384-c16': {
            text: '提议去你们都喜欢的屋顶',
            description: '以共同记忆为基础',
          },
        },
      },
      'story-8742190384-9': {
        title: '共同的脚步',
        narration: '你们一起走过记得你们脚步的街道。雨已减弱为像记忆一样缠在你头发上的薄雾。莱利走得够近让你们的肩膀擦碰，又够远让你无法读懂他们的想法。你们经过第一次约会的旧画廊、吵架和和解的面包店。每个地标都是你必须决定是否承认的幽灵。',
        choices: {
          'story-8742190384-c17': {
            text: '经过时提到画廊',
            description: '尊重你们之间的历史',
          },
          'story-8742190384-c18': {
            text: '专注于当下',
            description: '让过去暂时休息',
          },
        },
      },
      'story-8742190384-10': {
        title: '到达点',
        narration: '你们到达河边公园的老长椅，你们曾经在那里聊到黎明。木头被无数次对话、无数次告白磨得光滑。莱利坐下，留下的空间可能是邀请也可能是距离。城市的灯光像散落的星星一样在水面上跳舞。毕竟一切之后，你们在这里，在一起。这一刻感觉被悬置，等待你给接下来的一切注入生命。',
        choices: {
          'story-8742190384-c19': {
            text: '坐近些开始解释',
            description: '最终说出全部真相',
          },
          'story-8742190384-c20': {
            text: '问他们需要你什么',
            description: '让他们引导愈合',
          },
        },
      },
      'story-8742190384-11': {
        title: '诚实的土地',
        narration: '话语像身边的河流一样流动--有时温柔，有时湍急。你谈论恐惧和骄傲、像常春藤一样在你们之间生长的沉默、那些几乎打电话的夜晚。莱利迎上你的眼睛，你在那里看到自己渴望的倒影。长椅承载着你们两人，真相沉重而必要地沉淀。你已到达决定的门槛。这才是道路真正分岔的地方。',
        choices: {
          'story-8742190384-c21': {
            text: '建议一起乘渡轮',
            description: '让水带你们前进',
          },
          'story-8742190384-c22': {
            text: '提议在这里现在开始新的',
            description: '熟悉的土壤上的新篇章',
          },
        },
      },
      'story-8742190384-12': {
        title: '水边',
        narration: '渡轮码头在黑暗的水面上发光，一个出发和返回的承诺。莱利的手找到你的手，犹豫但温暖。"我害怕，"他们承认，你握紧他们的手指表示理解。你意识到恐惧是希望的代价。船笛响起，低沉而耐心。你站在某种巨大事物的边缘--可能性的海洋，或是旧模式的深水。',
        choices: {
          'story-8742190384-c23': {
            text: '一起登上渡轮',
            description: '致力于旅程',
          },
          'story-8742190384-c24': {
            text: '建议改从码头观看',
            description: '保持锚定，保持安全',
          },
        },
      },
      'story-8742190384-13': {
        title: '新鲜的土壤',
        narration: '你谈论重新开始--不是从你们离开的地方，而是从你们现在所在的地方，两个带着共同历史和分别成长的人。莱利慢慢点头，思考着。"那意味着放下一些东西，"他们说，你知道他们是对的。过去是你无法拔除的花园，但你可以选择现在照料什么。你周围的城市充满了可能性的呼吸。',
        choices: {
          'story-8742190384-c25': {
            text: '走到滨水节日',
            description: '庆祝这个脆弱的新开始',
          },
          'story-8742190384-c26': {
            text: '找个安静的地方计划明天',
            description: '小心地建立基础',
          },
        },
      },
      'story-8742190384-14': {
        title: '穿越水域',
        narration: '渡轮驶离码头，城市的灯光在黑暗的水面上松解成一串项链。你靠在栏杆上，莱利在身边，肩膀相触。对话已温柔化为舒适的沉默，偶尔被小小的观察打破--一个星座、一艘经过的船、盐空气唤起的记忆。你在移动，字面地和比喻地，朝向未知的岸。',
        choices: {
          'story-8742190384-c27': {
            text: '谈论实际的明天',
            description: '制定计划，建立结构',
          },
          'story-8742190384-c28': {
            text: '简单地把握这一刻',
            description: '让水带你们俩',
          },
        },
      },
      'story-8742190384-15': {
        title: '锚定的视角',
        narration: '你留在码头上，看着渡轮在黑暗的地平线上消散。莱利站得很近，被思想和大衣同时包裹着。"我们擅长几乎，"他们轻声说，话语刺痛着真相。几乎说话、几乎留下、几乎完全爱。你感到所有几乎的重量压迫下来。但站在这里，你感到某种东西在转变。',
        choices: {
          'story-8742190384-c29': {
            text: '承诺停止几乎',
            description: '终于致力于完整',
          },
          'story-8742190384-c30': {
            text: '诚实地承认这个模式',
            description: '跳之前看清楚',
          },
        },
      },
      'story-8742190384-16': {
        title: '灯光与音乐',
        narration: '滨水节日向黑暗的天空升起火花，烟花像巨大的光之花绽放。音乐穿过人群，你们发现自己不由自主地跳舞，身体记得彼此的韵律。莱利笑了，真正地笑了，那声音松开了你胸中紧绷的某物。你们周围，陌生人在庆祝他们自己的故事、他们自己的第二次机会。',
        choices: {
          'story-8742190384-c31': {
            text: '烟花顶峰时亲吻他们',
            description: '让快乐为你决定',
          },
          'story-8742190384-c32': {
            text: '低语对未来的希望',
            description: '大声说出你的梦想',
          },
        },
      },
      'story-8742190384-17': {
        title: '亲密的地图',
        narration: '你们找到一家二十四小时营业的餐厅，在安静的街道上像灯塔一样发光。在派和咖啡上，你们勾勒出共同未来的轮廓--不是宏大的宣言，而是小的实用性。谁给谁打电话、多频繁、你们俩都需要什么才能感到安全。莱利在餐巾纸上画圆圈，用仔细的墨水连接你们的生活。它不戏剧化、不浪漫，却比任何姿态都珍贵。',
        choices: {
          'story-8742190384-c33': {
            text: '交换钥匙作为象征',
            description: '物理信任，有形的承诺',
          },
          'story-8742190384-c34': {
            text: '同意明天再见',
            description: '一步，再一步',
          },
        },
      },
      'story-8742190384-18': {
        title: '共同建设',
        narration: '你们谈论公寓和日程、超越迷恋的爱情的后勤。莱利用他们自己的实用性回应你的实用性，你们一起构建足够坚固的脚手架来支撑真正的生活。渡轮继续它的横渡，但你们已经到达一片岸--暴风雨后的坚实地面。明天带着它所有普通的挑战等待着。',
        choices: {
          'story-8742190384-c35': {
            text: '致力于"我们"的工作',
            description: '选择伙伴关系之路',
          },
        },
      },
      'story-8742190384-19': {
        title: '完美的时刻',
        narration: '世界屏住呼吸。烟花将莱利的脸涂成金色和玫瑰色，当天空在你们头顶绽放时你亲吻他们。这不是完美的爱情--你们太清楚地看到彼此的缺陷了--但这是一个完美的时刻，你选择相信会有更多时刻随之而来。人群在你们周围欢呼，用他们的公共噪音庆祝你们的私人喜悦。',
        choices: {
          'story-8742190384-c36': {
            text: '让这种喜悦带你前进',
            description: '相信感觉，相信他们',
          },
        },
      },
      'story-8742190384-20': {
        title: '坚实的地面',
        narration: '你做出打算遵守的承诺，简单地没有华丽地讲述。莱利点头认真地接受，理解在这么多沉默之后话语的重量。随着夜深，餐厅的霓虹灯柔和地嗡嗡作响。你选择的不是激情的火焰而是爱的稳定燃烧，这感觉像是回到一个你从未完全允许自己居住的家。',
        choices: {
          'story-8742190384-c37': {
            text: '不同地重新开始',
            description: '新篇章，写得更好',
          },
        },
      },
      'story-8742190384-21': {
        title: '温柔的分离',
        narration: '你们带着诚实而非希望分别，承认有些爱情故事虽然美丽却不永恒。莱利的眼睛闪闪发光但他们点头，理解。"感谢今晚，"他们说，你知道他们指的是结束，不仅仅是陪伴。你们朝相反的方向走去，因说出真相而轻松，为无法挽救的东西而悲伤。',
        choices: {
          'story-8742190384-c38': {
            text: '带着教训前进',
            description: '有些结束也是礼物',
          },
        },
      },
      'story-8742190384-22': {
        title: '水的彼岸',
        narration: '渡轮在对岸停靠，城市的灯光像记忆一样在水面上闪烁。你们一起下船，莱利的手稳稳地在你的手中。你们谈论普通的事情--做什么饭、哪株植物你一直忘记浇水、轮到谁煮咖啡。承诺没有仪式地到来，编织进实用明天的结构中。尾迹在你们身后写下一条新线，什么都不抹去，但将你们带进你们选择建立的生活，一个选择接一个选择，一天接一天。',
        choices: {},
      },
      'story-8742190384-23': {
        title: '火花之城',
        narration: '烟花缝合天际线，明亮、短暂而真实。你和莱利干净地说出困难的部分，然后笑你们俩有多人性化--笨拙、充满希望、固执地爱着。当最后一朵烟花消逝，黑暗再次感觉友好，一条毯子而不是虚空。你们不着急地一起走过雨银色的街道回家，足够的时间在前面伸展，像一个你终于觉得值得接受的礼物。曾经承载你告别的城市现在见证你的问候。',
        choices: {},
      },
      'story-8742190384-24': {
        title: '另一个开始',
        narration: '早晨在街角咖啡馆找到你们，阳光透过曾经映出你告别的窗户流进来。你和莱利拿着笔记本和咖啡相对而坐，勾勒在更强基础上重建的关系架构。不是以前同样的爱--更明智、更诚实、更有韧性的东西。你们不承诺永远；你们承诺继续出现、继续选择、继续建设。有些爱回来；有些爱教你如何更好地爱。你们的，也许，两者都是。',
        choices: {},
      },
      'story-8742190384-25': {
        title: '安静的公寓',
        narration: '回到你租的房间，霓虹灯牌的蓝色光晕在边缘变得柔和。你泡茶，打开窗户，让雨完成它的句子。不是今晚，你决定--但也不是永远不。你给莱利发最后一条消息，一个对他们幸福的祝愿，用只有结束才能带来的真诚表达。当你准备好说得更多的时候，城市还会在这里，对新的人或也许对你自己。现在，你让雨唱着送你入睡，感激第二次机会，即使它们通向与你希望的不同的门。',
        choices: {},
      },
    },
  },


  // Korean
  ko: {
    title: '두 번째 기회의 도시',
    description: '갑작스러운 폭우가 당신을 한때 집이라 부륍던 도시--그리고 끝내지 못한 사랑을 남긴 곳--에 고립시킨다. 한 밤이 작고 용감한 선택의 연쇄로 변한다: 카페, 서점, 옥상, 페리. 진실로 돌아가는 길을 찾거나--또는 완전히 새로운 무언가를 향해.',
    author: 'A. 마린',
    nodes: {
      'story-8742190384-1': {
        title: '비 속 도착',
        narration: '밤비가 대로를 거울처럼 미끄럽게 만들고, 네온이 아스팔트에 붓질처럼 번진다. 당신의 여행가방은 너무 무겁다, 지난번에 하지 못한 말들로 가득 차 있다. 돌풍이 당신을 어닝 아래로 밀어넣는다; 도시는 커피와 천둥 냄새가 난다. 어딘가에서 기차 종이 울린다. 당신은 스스로에게 말한다, 단 하루일 뿐이라고--라일리의 문을 두드릴지 결정하기에 충분한 시간.',
        choices: {
          'story-8742190384-c1': {
            text: '따뜻함을 위해 카페로 들어간다',
            description: '생각과 용기를 모을 수 있다',
          },
          'story-8742190384-c2': {
            text: '대신 역으로 향한다',
            description: '기차는 출구를 의미하고--도착도 의미한다',
          },
        },
      },
      'story-8742190384-2': {
        title: '따뜻한 피난처',
        narration: '창문에 빗방울이 맺히는 동안 우유가 라테 위로 작은 은하처럼 소용돌이친다. 바리스타는 한 블록 아래 서점의 심야 낭독회에 대해 이야기한다. 당신의 전화가 받침 위에서 진동한다, 라일리의 이름이 여전히 메시지 상단에 고정되어 있다, 지키지 못한 약속처럼. 컵이 손을 따뜻하게 한다; 당신의 용기는 더디게 끓어오른다. 다음 단계를 신중하게 결정해야 한다.',
        choices: {
          'story-8742190384-c3': {
            text: '서점 낭독회에 대해 묻는다',
            description: '이야기가 문을 열 수도 있다',
          },
          'story-8742190384-c4': {
            text: '라일리의 메시지를 확인한다',
            description: '어떤 말이 기다리는지 본다',
          },
        },
      },
      'story-8742190384-3': {
        title: '희망의 파편',
        narration: '바리스타는 라일리처럼 들리는 누군가가 어제 당신을 물었다고 언급한다. 당신의 전화에는 간단한 문자가 보인다: "도시에 있어?" 우연이 피부를 소름 끼치게 한다. 비가 유리를 더 세게 두드리며 결정을 재촉하는 것 같다. 서점에서 이 단서를 추적하거나, 직접 답장하여 모든 것을 바꿀 수 있다.',
        choices: {
          'story-8742190384-c5': {
            text: '조사하기 위해 서점으로 걸어간다',
            description: '단서가 발을 인도하도록 하라',
          },
          'story-8742190384-c6': {
            text: '라일리에게 신중한 답장을 볂는다',
            description: '"아직 여기 있어. 우리 이야기할 수 있을까?"',
          },
        },
      },
      'story-8742190384-4': {
        title: '손 남기기',
        narration: '당신의 메시지는 디지털 에테르에 떠 있다, 밤에 올린 작은 휴전기. 서점은 동쪽 세 블록 밖에서 기다리고 있고, 창문은 비 속에서 등불처럼 빛난다. 어느 길이든 같은 불확실성으로 향한다. 당신의 심장은 너무 오동안 말하지 않은 말의 무게로 두근거린다. 당신들 사이의 침묵을 어떻게 메울지 선택해야 한다.',
        choices: {
          'story-8742190384-c7': {
            text: '라일리의 답장을 기다린다',
            description: '그들이 조건을 정하도록 하라',
          },
          'story-8742190384-c8': {
            text: '어쨌든 서점으로 간다',
            description: '움직임이 기다리기를 이긴다',
          },
        },
      },
      'story-8742190384-5': {
        title: '말이 도착하다',
        narration: '당신의 전화가 켜진다: "역. 십 분." 말은 적지만, 그것은 시작이다. 당신은 외투를 집어 들고, 심장이 새가 유리에 부딪히듯 갈비뼈를 두드린다. 비는 그치지 않았지만, 당신은 더 이상 알아채지 못한다. 역을 향하는 매 걸음이 되돌릴 수 없는 문턱을 넘는 것처럼 느껴진다. 시간이 압축되고; 순간이 확장된다.',
        choices: {
          'story-8742190384-c9': {
            text: '빨리 역으로 걸어간다',
            description: '그들을 기다리게 하지 마라',
          },
          'story-8742190384-c10': {
            text: '진정할 시간을 갖는다',
            description: '정산 전에 숨을 쉰다',
          },
        },
      },
      'story-8742190384-6': {
        title: '역 도착',
        narration: '역은 출발로 웅웅거리고, 전광판은 안절부절못하는 눈꺼풀처럼 글자를 깜빡인다. 당신이 아는 웃음이 중2층에서 흘러나온다--좋아하는 노래처럼 익숙하다. 당신은 계단 중간에 굳어버리고, 여행가방이 계단에 쿵 소리를 낸다. 거기, 커피 키오스크 옆에, 비에 젖은 머리를 한 라일리가 서 있다, 당신이 완전히 읽을 수 없는 표정으로. 숨이 멎는다.',
        choices: {
          'story-8742190384-c11': {
            text: '그들의 이름을 부른다',
            description: '역이 이 순간을 목격하게 하라',
          },
          'story-8742190384-c12': {
            text: '천천히 다가가 당신을 보게 한다',
            description: '적응할 시간을 주어라',
          },
        },
      },
      'story-8742190384-7': {
        title: '재회',
        narration: '라일리가 돌아서자 시간이 더듬는다. 그들의 눈이 커졌다가 무언가 복잡한 것--상처, 희망, 망설임--으로 부드러워진다. "왔구나," 그들이 말하고, 그것은 고발과 안도가 뒤엉킨 것처럼 들린다. 역의 소음이 속삭임으로 사라진다. 당신은 머리 속에서 이 순간을 천 번이나 리허설했지만, 지금 모든 연설이 녹아버린다. 무엇을 먼저 말할지 선택해야 한다.',
        choices: {
          'story-8742190384-c13': {
            text: '떠난 것에 대해 사과한다',
            description: '가장 어려운 진실부터 시작하라',
          },
          'story-8742190384-c14': {
            text: '그들이 어떻게 지냈는지 묻는다',
            description: '부드럽게 시작하고, 간극을 메워라',
          },
        },
      },
      'story-8742190384-8': {
        title: '조심스러운 다리',
        narration: '라일리는 듣는다, 정말로 듣는다, 당신이 사람들이 할 수 있는 것을 잊어버린 방식으로. 당신이 말하는 동안 그들의 커피가 손 사이에서 식는다. 역의 인파가 돌 주위의 물처럼 당신 주위로 흐른다. 당신의 말 사이 공간에 무언가 깨지기 쉬운 것이 형성되기 시작한다--가능성, 아마도, 열리기 시작하는 문. 이 대화를 어디서 계속할지 제안해야 한다.',
        choices: {
          'story-8742190384-c15': {
            text: '공원까지 걷자고 제안한다',
            description: '움직임이 긴장을 풀 수 있다',
          },
          'story-8742190384-c16': {
            text: '둘 다 좋아했던 옥상을 제안한다',
            description: '공유된 기억을 기반으로',
          },
        },
      },
      'story-8742190384-9': {
        title: '함께하는 발걸음',
        narration: '당신은 당신의 발걸음을 기억하는 거리를 함께 걷는다. 비는 기억처럼 머리에 달라붙는 안개로 약해졌다. 라일리는 어깨가 스칠 만큼 가까이 걷고, 그들의 생각을 읽을 수 없을 만큼 멀리 걷는다. 첫 데이트를 했던 옛 갤러리, 싸우고 화해했던 빵집을 지나간다. 각 랜드마크는 인정할지 결정해야 하는 유령이다.',
        choices: {
          'story-8742190384-c17': {
            text: '지나갈 때 갤러리를 언급한다',
            description: '당신들 사이의 역사를 존중하라',
          },
          'story-8742190384-c18': {
            text: '현재 순간에 집중한다',
            description: '지금은 과거를 쉬게 하라',
          },
        },
      },
      'story-8742190384-10': {
        title: '도착 지점',
        narration: '당신은 한때 새벽까지 이야기했던 강변 공원의 오래된 벤치에 도착한다. 나무는 셀 수 없는 대화, 셀 수 없는 고백으로 매끄럽게 닳았다. 라일리가 앉고, 초대일 수도 거리일 수도 있는 공간을 남긴다. 도시의 불빛이 흩어진 별처럼 물 위에서 춤을 춘다. 모든 것 끝에, 당신은 여기에 함께 있다. 순간은 매달린 것처럼 느껴지고, 다음에 무엇이 올지에 생명을 불어넣기를 기다린다.',
        choices: {
          'story-8742190384-c19': {
            text: '가까이 앉아 설명하기 시작한다',
            description: '마침내 완전한 진실을 제공하라',
          },
          'story-8742190384-c20': {
            text: '그들이 당신에게 무엇이 필요한지 묻는다',
            description: '치유를 그들이 인도하게 하라',
          },
        },
      },
      'story-8742190384-11': {
        title: '정직한 땅',
        narration: '말은 옆의 강처럼 흐른다--때로는 부드럽게, 때로는 급류처럼. 당신은 두려움과 자존심, 담쟁이처럼 당신들 사이에 자란 침묵, 거의 전화했던 밤들에 대해 말한다. 라일리가 당신의 눈을 마주치고, 당신은 거기에 반영된 당신 자신의 갈망을 본다. 벤치는 진실이 무겁고 필요하게 가라앉는 동안 당신들 둘을 붙든다. 당신은 결정의 문턱에 도달했다. 여기가 길이 진정으로 갈라지는 곳이다.',
        choices: {
          'story-8742190384-c21': {
            text: '함께 페리를 타자고 제안한다',
            description: '물이 당신을 앞으로 운반하게 하라',
          },
          'story-8742190384-c22': {
            text: '여기 지금 새로 시작하자고 제안한다',
            description: '익숙한 토양에서 새로운 장',
          },
        },
      },
      'story-8742190384-12': {
        title: '물가',
        narration: '페리 터미널이 어두운 물 위로 빛나고, 출발과 귀환의 약속이다. 라일리의 손이 당신의 손을 찾는다, 망설이지만 따뜻하다. "무서워," 그들이 인정하고, 당신은 인정의 의미로 그들의 손가락을 쥔다. 두려움은 희망의 대가라는 것을 깨닫는다. 배의 경적이 울리고, 낮고 인내심 있게. 당신은 거대한 무언가의 가장자리에 서 있다--가능성의 바다, 또는 옛 패턴의 깊은 물.',
        choices: {
          'story-8742190384-c23': {
            text: '함께 페리에 탄다',
            description: '여정에 전념하라',
          },
          'story-8742190384-c24': {
            text: '대신 부두에서 지켜보자고 제안한다',
            description: '닻을 내리고, 안전을 지켜라',
          },
        },
      },
      'story-8742190384-13': {
        title: '새로운 토양',
        narration: '당신은 다시 시작하는 것에 대해 이야기한다--떠난 곳에서가 아니라 지금 있는 곳에서, 공유된 역사와 별개의 성장을 가진 변화된 두 사람으로. 라일리가 천천히 고개를 끄덕이며 생각한다. "그건 몇 가지를 놓아주는 것을 의미해," 그들이 말하고, 당신은 그들이 맞다는 것을 안다. 과거는 뽑을 수 없는 정원이지만, 지금 무엇을 돌볼지 선택할 수 있다. 당신 주위의 도시는 가능성으로 숨 쉰다.',
        choices: {
          'story-8742190384-c25': {
            text: '워터프론트 축제로 걸어간다',
            description: '이 깨지기 쉬운 새로운 시작을 축하하라',
          },
          'story-8742190384-c26': {
            text: '내일을 계획할 조용한 곳을 찾는다',
            description: '기반을 신중하게 구축하라',
          },
        },
      },
      'story-8742190384-14': {
        title: '물을 건너며',
        narration: '페리가 부두에서 떠나고, 도시의 불빛이 어두운 물 위로 목걸이로 풀어진다. 당신은 라일리가 옆에 있고 어깨가 닿는 상태로 난간에 기댄다. 대화는 편안한 침묵으로 부드러워졌고, 가끔 작은 관찰로 깨어진다--별자리, 지나가는 배, 짠 공기에 의해 불러일으켜진 기억. 당신은 문자 그대로, 그리고 비유적으로, 알 수 없는 해안을 향해 움직이고 있다.',
        choices: {
          'story-8742190384-c27': {
            text: '실제적인 내일에 대해 말한다',
            description: '계획을 세우고, 구조를 구축하라',
          },
          'story-8742190384-c28': {
            text: '단순히 순간을 붙잡는다',
            description: '물이 당신들 둘을 운반하게 하라',
          },
        },
      },
      'story-8742190384-15': {
        title: '닻 내린 전망',
        narration: '당신은 부두에 남아, 페리가 어두운 수평선으로 사라지는 것을 지켜본다. 라일리는 코트만큼이나 생각에 싸여 가까이 서 있다. "우리는 거의에 능숙해," 그들이 조용히 말하고, 말이 진실로 쏜다. 거의 이야기하고, 거의 머물고, 거의 완전히 사랑하는. 모든 거의의 무게가 눌러오는 것을 느낀다. 하지만 여기 서서, 무언가 변하는 것을 느낀다.',
        choices: {
          'story-8742190384-c29': {
            text: '거의 그만두겠다고 약속한다',
            description: '마침내 완전함에 전념하라',
          },
          'story-8742190384-c30': {
            text: '패턴을 정직하게 인정한다',
            description: '뛰어들기 전에 분명히 보라',
          },
        },
      },
      'story-8742190384-16': {
        title: '빛과 음악',
        narration: '워터프론트 축제가 어두운 하늘로 불꽃을 올리고, 불꽃놀이가 거대한 빛의 꽃으로 피어난다. 음악이 군중을 관통하고, 당신은 의도하지 않게 춤을 추는 자신을 발견한다, 몸이 서로의 리듬을 기억한다. 라일리가 웃는다, 정말로 웃고, 그 소리가 가슴의 답답함을 푼다. 당신 주위에서 낯선 사람들이 그들 자신의 이야기, 그들 자신의 두 번째 기회를 축하한다.',
        choices: {
          'story-8742190384-c31': {
            text: '불꽃놀이가 절정에 달했을 때 그들에게 키스한다',
            description: '기쁨이 당신을 위해 결정하게 하라',
          },
          'story-8742190384-c32': {
            text: '미래에 대한 희망을 속삭인다',
            description: '당신의 꿈을 소리 내어 말하라',
          },
        },
      },
      'story-8742190384-17': {
        title: '친밀한 지도',
        narration: '당신은 조용한 거리에서 등대처럼 빛나는 24시간 식당을 찾는다. 파이와 커피 위에서, 당신은 공유된 미래의 윤곽을 스케치한다--거창한 선언이 아니라 작은 실용성들. 누가 누구에게 전화할지, 얼마나 자주, 둘 다 안전함을 느끼기 위해 무엇이 필요한지. 라일리가 냅킨에 원을 그리며, 주의 깊은 잉크로 당신들의 삶을 연결한다. 극적이지도 로맨틱하지도 않고, 어떤 제스처보다 소중하다.',
        choices: {
          'story-8742190384-c33': {
            text: '상징으로 열쇠를 교환한다',
            description: '물리적 신뢰, 유형적인 약속',
          },
          'story-8742190384-c34': {
            text: '내일 다시 만나기로 동의한다',
            description: '한 걸음, 그리고 또 한 걸음',
          },
        },
      },
      'story-8742190384-18': {
        title: '함께 건설하며',
        narration: '당신은 아파트와 일정, 짝사랑을 넘어서는 사랑의 물류에 대해 이야기한다. 라일리는 당신의 실용성에 그들의 것으로 응하고, 함께 진짜 삶을 견딜 만큼 튼튼한 비계를 구축한다. 페리는 횡단을 계속하지만, 당신은 이미 해안에 도달했다--거친 바다 후의 튼튼한 땅. 내일은 모든 보통의 도전과 함께 기다린다.',
        choices: {
          'story-8742190384-c35': {
            text: '"우리"의 일에 전념한다',
            description: '동반자 관계의 길을 선택하라',
          },
        },
      },
      'story-8742190384-19': {
        title: '완벽한 순간',
        narration: '세상이 숨을 참는다. 불꽃놀이가 라일리의 얼굴을 금과 장미색으로 칠하고, 하늘이 당신 머리 위로 피어날 때 당신은 그들에게 키스한다. 완벽한 사랑은 아니다--서로의 결함을 너무 분명하게 보아왔기 때문에--하지만 완벽한 순간이고, 더 많은 순간이 뒤따를 것을 믿기로 선택한다. 군중이 당신 주위에서 환호하고, 그들의 공적인 소음으로 당신의 사적인 기쁨을 축하한다.',
        choices: {
          'story-8742190384-c36': {
            text: '이 기쁨이 당신을 앞으로 운반하게 하라',
            description: '감정을 믿고, 그들을 믿어라',
          },
        },
      },
      'story-8742190384-20': {
        title: '굳건한 땅',
        narration: '당신은 지킬 의도가 있는 약속을, 화려함 없이 단순하게 말한다. 라일리는 끄덕이는 진지함으로 받아들이고, 오랜 침묵 후 말의 무게를 이해한다. 주위의 밤이 깊어지는 동안 식당의 네온이 부드럽게 윙윙거린다. 당신은 열정의 불꽃이 아닌 사랑의 꾸준한 연소를 선택했고, 당신이 결코 완전히 거주하도록 허락하지 않았던 곳으로 집에 돌아온 것처럼 느껴진다.',
        choices: {
          'story-8742190384-c37': {
            text: '다르게 다시 시작한다',
            description: '더 잘 쓰여진 새로운 장',
          },
        },
      },
      'story-8742190384-21': {
        title: '온화한 이별',
        narration: '당신은 희망보다 정직함으로 헤어지고, 어떤 사랑 이야기는 영원하지 않아도 아름답다는 것을 인정한다. 라일리의 눈이 반짝이지만 그들은 고개를 끄덕이고, 이해한다. "오늘 밤 고마워," 그들이 말하고, 당신은 그들이 단순한 동행이 아닌 종결을 의미하는 것을 안다. 반대 방향으로 걸어가며, 진실을 말하여 가볍고, 구할 수 없는 것에 슬프다.',
        choices: {
          'story-8742190384-c38': {
            text: '교훈을 앞으로 가져간다',
            description: '어떤 끝도 선물이다',
          },
        },
      },
      'story-8742190384-22': {
        title: '물 건너',
        narration: '페리가 먼 해안에 도착하고, 도시의 불빛이 기억처럼 물 위로 반짝인다. 당신들은 함께 내리고, 라일리의 손이 당신의 손 안에서 굳건하다. 무엇을 요리할지, 어떤 화분을 계속 물 주는 것을 잊는지, 누구 차례인지 커피를 만들어야 하는지 같은 평범한 것들에 대해 이야기한다. 약속은 의식 없이 도착하고, 실용적인 내일의 구조에 짜여진다. 뒷물결은 당신 뒤에 새로운 선을 쓰고, 아무것도 지우지 않으면서 선택을 거듭하고 날을 거듭하여 당신이 구축하기로 선택한 삶으로 당신을 운반한다.',
        choices: {},
      },
      'story-8742190384-23': {
        title: '불꽃의 도시',
        narration: '불꽃놀이가 스카이라인을 꿰매고, 밝고, 짧고, 참되게. 당신과 라일리는 어려운 부분을 깔끔하게 말하고, 그리고 둘 다 얼마나 인간적인지--서투르고, 희망에 차고, 사랑에 완고한지--웃는다. 마지막 불꽃이 사라지면, 어둠이 다시 친근하게 느껴지고, 공허가 아닌 담요처럼. 당신은 서두르지 않고 비로 은빛이 된 거리를 함께 집으로 걷고, 마침내 받을 가치가 있다고 느끼는 선물처럼 앞으로 충분한 시간이 펼쳐진다. 한때 당신의 작별을 지켜보던 도시가 이제 당신의 인사를 목격한다.',
        choices: {},
      },
      'story-8742190384-24': {
        title: '또 다른 시작',
        narration: '아침이 모퉁이 카페에서 당신을 찾고, 햇빛이 한때 당신의 작별을 비추던 창문을 통해 흘러든다. 당신과 라일리는 공책과 커피를 들고 마주 앉아, 더 강한 기반 위에 재건된 관계의 구조를 스케치한다. 이전과 같은 사랑이 아니다--더 현명하고, 더 정직하고, 더 회복력 있는 무언가. 영원을 약속하지 않는다; 계속 나타나고, 계속 선택하고, 계속 건설하기를 약속한다. 어떤 사랑은 돌아온다; 어떤 사랑은 더 잘 사랑하는 법을 가르친다. 당신의 것은, 아마도, 둘 다이다.',
        choices: {},
      },
      'story-8742190384-25': {
        title: '조용한 아파트',
        narration: '임대한 방으로 돌아오자, 네온사인의 푸른 빛이 가장자리에서 부드러워진다. 차를 끓이고, 창문을 열고, 비가 문장을 끝내게 한다. 오늘 밤은 아니라고 결정한다--하지만 결코 아니라는 것도 아니다. 라일리에게 마지막 메시지를 보낸다, 그들의 행복에 대한 소망을 종결만이 가져올 수 있는 진심으로 표현한다. 당신이 더 많이 말할 준비가 되었을 때, 새로운 누군가에게 또는 아마도 당신 자신에게, 도시는 여전히 여기에 있을 것이다. 지금은, 비가 당신을 재우는 노래를 부르게 하고, 희망했던 것과 다른 문으로 이끌더라도 두 번째 기회에 감사한다.',
        choices: {},
      },
    },
  },

  // Ukrainian
  uk: {
    title: 'Місто Других Шансів',
    description: 'Раптовий злива застає вас у місті, яке колись називали домом,--і де залишили кохання незавершеним. Одна ніч перетворюється на ланцюжок маленьких, сміливих виборів: кафе, книгарня, дах, пором. Знайдіть шлях назад до правди--або до чогось цілком нового.',
    author: 'А. Марін',
    nodes: {
      'story-8742190384-1': {
        title: 'Прибуття під Дощем',
        narration: 'Нічний дощ перетворює проспект на дзеркало, неон розмазаний мазками пензля по асфальту. Ваша валіза важча, ніж повинна бути, повна речей, яких ви не сказали минулого разу. Порив вітру штовхає вас під навіс; місто пахне кавою і грозою. Десь дзвенить дзвінок поїзда. Ви кажете собі, що це лише одна ніч--достатньо, щоб вирішити, чи постукаєте в двері Райлі.',
        choices: {
          'story-8742190384-c1': {
            text: 'Сховатися в кафе для тепла',
            description: 'Ви можете зібрати думки--і сміливість',
          },
          'story-8742190384-c2': {
            text: 'Натомість прямувати до вокзалу',
            description: 'Поїзди означають виходи--і прибуття',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Теплий Притулок',
        narration: 'Молоко закручується в маленьку галактику на вашому латте, поки вікна покриваються краплями дощу. Бариста балакає про пізнє читання в книгарні через квартал. Ваш телефон вібрує на блюдці, ім\'я Райлі досі закріплене нагорі ваших повідомлень, як обіцянка, якої ви ніколи не дотримали. Чашка зігріває ваші руки; ваша сміливість повільно нагрівається. Ви повинні ретельно вирішити наступний крок.',
        choices: {
          'story-8742190384-c3': {
            text: 'Запитати про читання в книгарні',
            description: 'Історії можуть відкрити двері',
          },
          'story-8742190384-c4': {
            text: 'Перевірити повідомлення від Райлі',
            description: 'Подивіться, які слова чекають на вас',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Уламки Надії',
        narration: 'Бариста згадує, що хтось, схожий на Райлі, питав про вас учора. Ваш телефон показує просте повідомлення: "У місті?" Збіг викликає мурашки на шкірі. Дощ стукає сильніше по склу, ніби підганяючи вас до рішення. Ви могли б прослідкувати цей слід у книгарні, або відповісти безпосередньо і змінити все.',
        choices: {
          'story-8742190384-c5': {
            text: 'Піти до книгарні, щоб розслідувати',
            description: 'Нехай слід веде ваші ноги',
          },
          'story-8742190384-c6': {
            text: 'Надіслати Райлі обережну відповідь',
            description: '"Ще тут. Можемо поговорити?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Витягнути Руку',
        narration: 'Ваше повідомлення пливе в цифровому етері, маленький прапор перемир\'я, піднятий вночі. Книгарня чекає трьома кварталами на схід, її вікна сяють, як ліхтар у дощі. Будь-який шлях веде до тієї ж невизначеності. Ваше серце б\'ється від ваги слів, невимовлених занадто довго. Ви повинні вибрати, як подолати мовчання між вами.',
        choices: {
          'story-8742190384-c7': {
            text: 'Чекати відповіді Райлі',
            description: 'Нехай вони встановлюють умови',
          },
          'story-8742190384-c8': {
            text: 'Все одно піти до книгарні',
            description: 'Рух перемагає очікування',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Слова Прибувають',
        narration: 'Ваш телефон спалахує: "Вокзал. Десять хвилин." Слів мало, але це відкриття. Ви хапаєте пальто, серце стукає в ребра, як птах у скло. Дощ не припинився, але ви більше не помічаєте його. Кожен крок до вокзалу відчувається як перетин порога, який не можна скасувати. Час стискається; момент розширюється.',
        choices: {
          'story-8742190384-c9': {
            text: 'Швидко йти до вокзалу',
            description: 'Не змушуйте їх чекати',
          },
          'story-8742190384-c10': {
            text: 'Взяти момент, щоб опанувати себе',
            description: 'Дихайте перед розплатою',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Прибуття на Вокзал',
        narration: 'Вокзал гуде від відправлень, табло перемикають літери, як неспокійні повіки. Знайомий сміх долинає з мезоніну--знайомий, як улюблена пісня. Ви завмираєте на півдорозі сходами, валіза гупає по сходинці. Там, біля кіоску з кавою, стоїть Райлі з волоссям, усипаним дощем, і виразом, який ви не можете прочитати. У вас перехоплює подих.',
        choices: {
          'story-8742190384-c11': {
            text: 'Гукнути їхнє ім\'я',
            description: 'Нехай вокзал стане свідком',
          },
          'story-8742190384-c12': {
            text: 'Підійти повільно, даючи себе побачити',
            description: 'Дайте їм час звикнути',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Пізнання',
        narration: 'Райлі повертається, і час запинається. Їхні очі розширюються, потім пом\'якшуються чимось складним--болем, надією, ваганням. "Ти прийшов," кажуть вони, і це звучить як звинувачення і полегшення, переплетені разом. Шум вокзалу згасає до шепоту. Ви репетирували цей момент тисячу разів у голові, але тепер всі ваші промови розчиняються. Ви повинні вибрати, яку правду сказати першою.',
        choices: {
          'story-8742190384-c13': {
            text: 'Вибачитися за від\'їзд',
            description: 'Почніть з найважчої правди',
          },
          'story-8742190384-c14': {
            text: 'Запитати, як вони поживають',
            description: 'Почніть м\'яко, збудуйте міст',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Нерішучий Міст',
        narration: 'Райлі слухає, справді слухає, так, як ви забули, що люди можуть. Їхня кава холоне в руках, поки ви говорите. Натовпи вокзалу пливуть навколо вас, як вода навколо каменів. Щось крихке починає формуватися в просторі між вашими словами--можливість, можливо, двері, що відкриваються. Вам потрібно запропонувати, де можна продовжити цю розмову.',
        choices: {
          'story-8742190384-c15': {
            text: 'Запропонувати прогулянку до парку',
            description: 'Рух може полегшити напруження',
          },
          'story-8742190384-c16': {
            text: 'Запропонувати дах, який ви обидва любили',
            description: 'Спільна пам\'ять як фундамент',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Спільні Кроки',
        narration: 'Ви йдете разом вулицями, які пам\'ятають ваші кроки. Дощ пом\'якшився до туману, який чіпляється до вашого волосся, як спогади. Райлі йде достатньо близько, щоб ваші плечі торкалися, достатньо далеко, щоб ви не могли прочитати їхні думки. Ви проходите повз стару галерею, де у вас було перше побачення, пекарню, де ви сварилися і мирилися. Кожна визначна пам\'ятка--привид, якого ви повинні вирішити, чи визнавати.',
        choices: {
          'story-8742190384-c17': {
            text: 'Згадати галерею, проходячи повз',
            description: 'Шануйте історію між вами',
          },
          'story-8742190384-c18': {
            text: 'Зосередитися на теперішньому моменті',
            description: 'Нехай минуле відпочине зараз',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Точка Прибуття',
        narration: 'Ви досягаєте старої лавки в прибережному парку, де колись розмовляли до світанку. Дерево згладжене безліччю розмов, безліччю зізнань. Райлі сідає, залишаючи простір, який може бути запрошенням чи відстанню. Вогні міста танцюють на воді, як розсіяні зірки. Ви тут, разом, після всього. Момент відчувається призупиненим, чекаючи, поки ви вдихнете життя в те, що буде далі.',
        choices: {
          'story-8742190384-c19': {
            text: 'Сісти близько і почати пояснювати',
            description: 'Нарешті запропонуйте повну правду',
          },
          'story-8742190384-c20': {
            text: 'Запитати, що їм потрібно від вас',
            description: 'Нехай вони керують зціленням',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Чесний Ґрунт',
        narration: 'Слова течуть, як річка поруч з вами--іноді м\'яко, іноді бурхливо. Ви говорите про страх і гордість, про мовчання, що росло між вами, як плющ, про ночі, коли ви ледь не телефонували. Райлі зустрічаються з вами поглядом, і ви бачите своє власне прагнення, відображене там. Лавка тримає вас обох, поки правда осідає, важка і необхідна. Ви дійшли до порогу рішення. Тут шляхи справді розходяться.',
        choices: {
          'story-8742190384-c21': {
            text: 'Запропонувати спільну поїздку на поромі',
            description: 'Нехай вода несе вас уперед',
          },
          'story-8742190384-c22': {
            text: 'Запропонувати почати спочатку, тут і зараз',
            description: 'Новий розділ на знайомому ґрунті',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Біля Води',
        narration: 'Поромний термінал світиться на тлі темної води, обіцянка відправлення і повернення. Рука Райлі знаходить вашу, нерішуча, але тепла. "Мені страшно," зізнаються вони, і ви стискаєте їхні пальці на знак визнання. Страх--ціна надії, усвідомлюєте ви. Лунає гудок судна, низький і терплячий. Ви стоїте на краю чогось величезного--океану можливостей або глибоких вод старих патернів.',
        choices: {
          'story-8742190384-c23': {
            text: 'Сісти на пором разом',
            description: 'Зобов\'яжіться до подорожі',
          },
          'story-8742190384-c24': {
            text: 'Запропонувати дивитися з молу натомість',
            description: 'Залишайтеся на якорі, залишайтеся в безпеці',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Свіжий Ґрунт',
        narration: 'Ви говорите про початок спочатку--не з того місця, де зупинилися, а з того, де ви зараз, дві змінені людини зі спільною історією та окремим зростанням. Райлі повільно киває, розмірковуючи. "Це означає відпустити деякі речі," кажуть вони, і ви знаєте, що вони мають рацію. Минуле--сад, який ви не можете викопати, але ви можете вибрати, про що дбати зараз. Місто навколо вас дихає можливостями.',
        choices: {
          'story-8742190384-c25': {
            text: 'Піти на фестиваль на набережній',
            description: 'Святкуйте цей крихкий новий початок',
          },
          'story-8742190384-c26': {
            text: 'Знайти тихе місце, щоб спланувати завтра',
            description: 'Будуйте фундамент обережно',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Перетин Вод',
        narration: 'Пором відчалює від молу, вогні міста розпливаються в намисто на темній воді. Ви спираєтеся на поручні з Райлі поруч, плечі торкаються. Розмова пом\'якшилася до зручної тиші, зрідка переривалася маленькими спостереженнями--сузір\'я, пропливаючий човен, спогад, розпалений солоним повітрям. Ви рухаєтеся, буквально і образно, до невідомого берега.',
        choices: {
          'story-8742190384-c27': {
            text: 'Говорити про практичні завтрашні дні',
            description: 'Робіть плани, будуйте структуру',
          },
          'story-8742190384-c28': {
            text: 'Просто тримати момент',
            description: 'Нехай вода несе вас обох',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Якорний Вигляд',
        narration: 'Ви залишаєтеся на молу, спостерігаючи, як пором розчиняється в темному горизонті. Райлі стоїть поруч, загорнутий у думки не менше, ніж у пальто. "Ми добрі в майже," кажуть вони тихо, і слова печуть правдою. Майже говорячи, майже залишаючись, майже повністю люблячи. Ви відчуваєте вагу всіх ваших майже, що тисне. Але стоячи тут, ви відчуваєте щось, що змінюється.',
        choices: {
          'story-8742190384-c29': {
            text: 'Пообіцяти припинити майже-робити',
            description: 'Нарешті зобов\'яжіться до повноти',
          },
          'story-8742190384-c30': {
            text: 'Чесно визнати патерн',
            description: 'Дивіться ясно, перш ніж стрибати',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Вогні та Музика',
        narration: 'Фестиваль на набережній підкидає іскри в темне небо, феєрверки розцвітають, як гігантські квіти світла. Музика пронизує натовп, і ви виявляєте, що танцюєте ненавмисно, тіла пам\'ятають ритми один одного. Райлі сміється, справді сміється, і звук розв\'язує щось туге у вашій грудях. Навколо вас незнайомці святкують власні історії, власні другі шанси.',
        choices: {
          'story-8742190384-c31': {
            text: 'Поцілувати їх, коли феєрверки досягають піку',
            description: 'Нехай радість вирішить за вас',
          },
          'story-8742190384-c32': {
            text: 'Шепотіти свої надії на майбутнє',
            description: 'Промовляйте свої мрії вголос',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Інтимні Карти',
        narration: 'Ви знаходите заклад, що працює цілодобово, що сяє, як маяк на тихій вулиці. За пирогом і кавою ви накидаєте контури спільного майбутнього--не грандіозні декларації, а маленькі практичності. Хто кому телефонуватиме, як часто, у чому ви обидва потребуєте, щоб почуватися в безпеці. Райлі малює кола на серветці, з\'єднуючи ваші життя ретельним чорнилом. Це недраматично, неромантично, і дорожче за будь-який жест.',
        choices: {
          'story-8742190384-c33': {
            text: 'Обмінятися ключами як символ',
            description: 'Фізична довіра, осяжна обіцянка',
          },
          'story-8742190384-c34': {
            text: 'Погодитися зустрітися знову завтра',
            description: 'Один крок, потім інший',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Будівництво Разом',
        narration: 'Ви говорите про квартири та розклад, про логістику кохання, що переживає закоханість. Райлі зустрічає вашу практичність своєю, і разом ви будуєте риштування, достатньо міцне, щоб втримати справжнє життя. Пором продовжує свій перехід, але ви вже досягли берега--твердого ґрунту після бурхливого моря. Завтра чекає з усіма своїми звичайними викликами.',
        choices: {
          'story-8742190384-c35': {
            text: 'Зобов\'язатися до роботи "нас"',
            description: 'Виберіть шлях партнерства',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Ідеальний Момент',
        narration: 'Світ затримує подих. Феєрверки розфарбовують обличчя Райлі в золото і троянду, і ви цілуєте їх, поки небо цвіте над вами. Це не ідеальне кохання--ви надто чітко бачили вади один одного для цього--але це ідеальний момент, і ви обираєте вірити, що за ним послідують інші. Натовп аплодує навколо вас, святкуючи вашу приватну радість своїм публічним шумом.',
        choices: {
          'story-8742190384-c36': {
            text: 'Нехай ця радість несе вас уперед',
            description: 'Довіряйте почуттю, довіряйте їм',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Твердий Ґрунт',
        narration: 'Ви даєте обіцянки, які маєте намір дотримати, сказані просто без прикрас. Райлі приймає їх з киваючою серйозністю, розуміючи вагу слів після стільки мовчання. Неон закладу дзижчить тихо, поки ніч поглиблюється навколо вас. Ви обрали не полум\'я пристрасті, а сталеве палання кохання, і це відчувається як повернення додому до місця, в якому ви ніколи не дозволяли собі повноцінно жити.',
        choices: {
          'story-8742190384-c37': {
            text: 'Почати спочатку, інакше',
            description: 'Новий розділ, краще написаний',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Лагідне Розлучення',
        narration: 'Ви розходитеся з чесністю, а не надією, визнаючи, що деякі історії кохання прекрасні, не будучи вічними. Очі Райлі блищать, але вони кивають, розуміючи. "Дякую за цю ніч," кажуть вони, і ви знаєте, що вони мають на увазі завершення, а не просто компанію. Ви йдете в протилежних напрямках, легші за сказану правду, сумні за те, що не можна врятувати.',
        choices: {
          'story-8742190384-c38': {
            text: 'Нести урок уперед',
            description: 'Деякі кінці також є подарунками',
          },
        },
      },
      'story-8742190384-22': {
        title: 'За Водою',
        narration: 'Пором пришвартовується на далекому березі, вогні міста мерехтять на воді, як спогади. Ви висаджуєтеся разом, рука Райлі міцна у вашій. Ви говорите про звичайні речі--що готувати, яку рослину ви постійно забуваєте полити, чия черга робити каву. Обіцянки приходять без церемонії, вплетені в тканину практичного завтра. Слід пише нову лінію позаду вас, нічого не стираючи, але несе вас уперед у життя, яке ви обираєте будувати, вибір за вибором, день за днем.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Місто Іскор',
        narration: 'Феєрверки зшивають горизонт, яскраві, короткі й справжні. Ви і Райлі чисто промовляєте важкі частини, потім смієтеся з того, наскільки ви обидва людські--незграбні, сповнені надії, вперті у своєму коханні. Коли останній цвіт згасає, темрява знову відчувається дружньою, ковдрою, а не порожнечею. Ви йдете додому разом вулицями, сріблястими від дощу, не поспішаючи, достатньо часу простягається попереду, як подарунок, який ви нарешті відчуваєте гідними отримати. Місто, що колись тримало ваше прощання, тепер є свідком вашого привітання.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Інший Початок',
        narration: 'Ранок знаходить вас у кутовій кав\'ярні, сонячне світло струменить крізь вікна, які колись відображали ваше прощання. Ви і Райлі сидите один навпроти одного з блокнотами і кавою, накидаючи архітектуру стосунків, відбудованих на міцніших фундаментах. Не те саме кохання, що раніше--щось мудріше, чесніше, стійкіше. Ви не обіцяєте назавжди; ви обіцяєте продовжувати з\'являтися, продовжувати обирати, продовжувати будувати. Деякі кохання повертаються; деякі кохання вчать вас краще любити. Ваше, можливо, і те, і інше.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Тиха Квартира',
        narration: 'Повернувшись до своєї кімнати, блакитне світіння неонової вивіски пом\'якшується по краях. Ви заварюєте чай, відкриваєте вікно і даєте дощу закінчити своє речення. Не сьогодні ввечері, вирішуєте ви--але не ніколи. Ви надсилаєте Райлі останнє повідомлення, побажання їхнього щастя, висловлене з щирістю, яку може принести лише завершення. Місто все ще буде тут, коли ви будете готові сказати більше, комусь новому або, можливо, собі. Поки що ви даєте дощу заколисати вас до сну, вдячні за другі шанси, навіть коли вони ведуть до інших дверей, ніж ви сподівалися.',
        choices: {},
      },
    },
  },


  // Italian
  it: {
    title: 'Citta delle Seconde Possibilita',
    description: 'Un improvviso acquazzone ti blocca in una citta che una volta chiamavi casa--e dove hai lasciato un amore incompiuto. Una notte diventa una catena di piccole scelte coraggiose: un caffe, una libreria, un tetto, un traghetto. Trova la strada per tornare alla verita--o verso qualcosa di completamente nuovo.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Arrivo sotto la Pioggia',
        narration: 'La pioggia notturna rende liscio il viale come uno specchio, il neon sbavato come pennellate sull\'asfalto. La tua valigia e piu pesante di quanto dovrebbe, piena di cose che non hai detto l\'ultima volta. Una folata ti spinge sotto una pensilina; la citta puzza di caffe e tuono. Da qualche parte una campana del treno tintinna. Ti dici che e solo una notte--abbastanza per decidere se busserai alla porta di Riley.',
        choices: {
          'story-8742190384-c1': {
            text: 'Rifugiarsi nel caffe per il calore',
            description: 'Potresti raccogliere i tuoi pensieri--e il coraggio',
          },
          'story-8742190384-c2': {
            text: 'Dirigersi invece verso la stazione',
            description: 'I treni significano uscite--e arrivi',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Rifugio Caldo',
        narration: 'Il latte si trasforma in una piccola galassia sopra il tuo latte mentre le finestre si riempiono di gocce di pioggia. Il barista chiacchiera di una lettura serale alla libreria all\'angolo. Il tuo telefono vibra sul piattino, il nome di Riley ancora fissato in cima ai tuoi messaggi come una promessa che non hai mai mantenuto. La tazza scalda le tue mani; il tuo coraggio impiega piu tempo a bollire. Devi decidere attentamente il tuo prossimo passo.',
        choices: {
          'story-8742190384-c3': {
            text: 'Chiedere della lettura in libreria',
            description: 'Le storie potrebbero aprire porte',
          },
          'story-8742190384-c4': {
            text: 'Controllare il messaggio di Riley',
            description: 'Vedi quali parole ti aspettano',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Frammenti di Speranza',
        narration: 'Il barista menziona qualcuno che sembra Riley che ti ha cercato ieri. Il tuo telefono mostra un semplice messaggio: "In citta?" La coincidenza ti fa venire la pelle d\'oca. La pioggia tamburella piu forte contro il vetro, come spingendoti verso una decisione. Potresti seguire questa pista in libreria, o rispondere direttamente e cambiare tutto.',
        choices: {
          'story-8742190384-c5': {
            text: 'Andare in libreria per indagare',
            description: 'Lascia che la pista guidi i tuoi passi',
          },
          'story-8742190384-c6': {
            text: 'Inviare a Riley una risposta cauta',
            description: '"Ancora qui. Possiamo parlare?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Tendere la Mano',
        narration: 'Il tuo messaggio fluttua nell\'etere digitale, una piccola bandiera di tregua issata nella notte. La libreria attende tre isolati a est, le sue finestre brillano come una lanterna sotto la pioggia. Entrambi i sentieri portano alla stessa incertezza. Il tuo cuore batte per il peso delle parole non dette da troppo tempo. Devi scegliere come colmare il silenzio tra voi.',
        choices: {
          'story-8742190384-c7': {
            text: 'Aspettare la risposta di Riley',
            description: 'Lascia che stabiliscano i termini',
          },
          'story-8742190384-c8': {
            text: 'Andare in libreria comunque',
            description: 'Il movimento batte l\'attesa',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Le Parole Arrivano',
        narration: 'Il tuo telefono si illumina: "Stazione. Dieci minuti." Le parole sono scarse, ma sono un\'apertura. Afferrai il cappotto, il cuore che batte contro le costole come un uccello contro il vetro. La pioggia non e cessata, ma non la noti piu. Ogni passo verso la stazione sembra attraversare una soglia che non puoi annullare. Il tempo si comprime; il momento si espande.',
        choices: {
          'story-8742190384-c9': {
            text: 'Camminare velocemente verso la stazione',
            description: 'Non farli aspettare',
          },
          'story-8742190384-c10': {
            text: 'Prendere un momento per ricomporsi',
            description: 'Respira prima del confronto',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Arrivo alla Stazione',
        narration: 'La stazione brulica di partenze, i tabelloni scattano lettere come palpebre irrequiete. Una risata che conosci fluttua dal mezzanino--familiare come una canzone preferita. Ti blocchi a meta scala, la valigia che sbatte sul gradino. La, dal chiosco del caffe, c\'e Riley con i capelli punteggiati di pioggia e un\'espressione che non riesci a leggere bene. Il respiro ti si mozza.',
        choices: {
          'story-8742190384-c11': {
            text: 'Chiamare il loro nome',
            description: 'Lascia che la stazione sia testimone',
          },
          'story-8742190384-c12': {
            text: 'Avvicinarsi lentamente, lasciandoti vedere',
            description: 'Dagli tempo di adattarsi',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Riconoscimento',
        narration: 'Riley si gira, e il tempo balbetta. I loro occhi si spalancano, poi si addolciscono con qualcosa di complicato--dolore, speranza, esitazione. "Sei venuto," dicono, e suona come un\'accusa e un sollievo intrecciati insieme. Il rumore della stazione si attenua in un mormorio. Hai provato questo momento mille volte nella testa, ma ora tutti i tuoi discorsi si dissolvono. Devi scegliere quale verita dire per prima.',
        choices: {
          'story-8742190384-c13': {
            text: 'Scusarsi per essersene andato',
            description: 'Inizia con la verita piu difficile',
          },
          'story-8742190384-c14': {
            text: 'Chiedere come stanno',
            description: 'Inizia dolcemente, costruisci il ponte',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Ponte Tentativo',
        narration: 'Riley ascolta, davvero ascolta, in un modo che avevi dimenticato che le persone potessero. Il loro caffe si raffredda tra le mani mentre parli. Le folle della stazione scorrono intorno a voi come acqua intorno ai sassi. Qualcosa di fragile inizia a formarsi nello spazio tra le tue parole--una possibilita, un forse, una porta che si spalanca. Devi suggerire dove questa conversazione puo continuare.',
        choices: {
          'story-8742190384-c15': {
            text: 'Suggerire di camminare fino al parco',
            description: 'Il movimento potrebbe alleviare la tensione',
          },
          'story-8742190384-c16': {
            text: 'Proporre il tetto che amavate entrambi',
            description: 'Ricordo condiviso come fondazione',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Passi Condivisi',
        narration: 'Camminate insieme per strade che ricordano i vostri passi. La pioggia si e attenuata in una nebbia che si attacca ai tuoi capelli come ricordi. Riley cammina abbastanza vicino perche le vostre spalle si sfiorino, abbastanza lontano da non poter leggere i loro pensieri. Passate davanti alla vecchia galleria dove avete avuto il primo appuntamento, la panetteria dove avete litigato e fatto pace. Ogni punto di riferimento e un fantasma che devi decidere se riconoscere.',
        choices: {
          'story-8742190384-c17': {
            text: 'Menzionare la galleria passando',
            description: 'Onora la storia tra voi',
          },
          'story-8742190384-c18': {
            text: 'Concentrarsi sul momento presente',
            description: 'Lascia che il passato riposi per ora',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Punto di Arrivo',
        narration: 'Raggiungete la vecchia panchina nel parco lungo il fiume dove una volta avete parlato fino all\'alba. Il legno e liscio per innumerevoli conversazioni, innumerevoli confessioni. Riley si siede, lasciando uno spazio che potrebbe essere un invito o una distanza. Le luci della città danzano sull\'acqua come stelle sparse. Sei qui, insieme, dopo tutto. Il momento sembra sospeso, in attesa che tu infonda vita a cio che verra dopo.',
        choices: {
          'story-8742190384-c19': {
            text: 'Sederti vicino e iniziare a spiegare',
            description: 'Offri finalmente la verita completa',
          },
          'story-8742190384-c20': {
            text: 'Chiedere cosa hanno bisogno da te',
            description: 'Lascia che guidino la guarigione',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Terreno Onesto',
        narration: 'Le parole scorrono come il fiume accanto a te--a volte dolci, a volte torrenziali. Parli di paura e orgoglio, del silenzio che e cresciuto tra voi come edera, delle notti in cui hai quasi chiamato. Riley incontra i tuoi occhi, e vedi il tuo stesso desiderio riflesso li. La panchina vi tiene entrambi mentre la verita si deposita, pesante e necessaria. Sei arrivato alla soglia della decisione. E qui che i sentieri divergono davvero.',
        choices: {
          'story-8742190384-c21': {
            text: 'Suggerire una gita in traghetto insieme',
            description: 'Lascia che l\'acqua ti porti avanti',
          },
          'story-8742190384-c22': {
            text: 'Proporre di ricominciare da capo, qui e ora',
            description: 'Un nuovo capitolo su suolo familiare',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Sul Bordo dell\'Acqua',
        narration: 'Il terminal del traghetto brilla contro l\'acqua scura, una promessa di partenza e ritorno. La mano di Riley trova la tua, esitante ma calda. "Ho paura," ammettono, e tu stringi le loro dita in riconoscimento. La paura e il prezzo della speranza, ti rendi conto. Il clacson della barca suona, basso e paziente. Sei sul bordo di qualcosa di vasto--un oceano di possibilita, o le acque profonde dei vecchi schemi.',
        choices: {
          'story-8742190384-c23': {
            text: 'Salire sul traghetto insieme',
            description: 'Impegnati nel viaggio',
          },
          'story-8742190384-c24': {
            text: 'Suggerire di guardare dal molo invece',
            description: 'Resta ancorato, resta al sicuro',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Terreno Fresco',
        narration: 'Parli di ricominciare--non da dove vi siete lasciati, ma da dove siete ora, due persone cambiate con storia condivisa e crescita separata. Riley annuisce lentamente, considerando. "Questo significa lasciare andare alcune cose," dicono, e sai che hanno ragione. Il passato e un giardino che non puoi sradicare, ma puoi scegliere cosa coltivare ora. La citta intorno a te respira di possibilita.',
        choices: {
          'story-8742190384-c25': {
            text: 'Camminare fino al festival sul lungomare',
            description: 'Celebra questo fragile nuovo inizio',
          },
          'story-8742190384-c26': {
            text: 'Trovare un posto tranquillo per pianificare domani',
            description: 'Costruisci le fondamenta attentamente',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Attraversando le Acque',
        narration: 'Il traghetto si allontana dal molo, le luci della città si sciolgono in una collana sull\'acqua scura. Ti appoggi alla ringhiera con Riley accanto, le spalle che si toccano. La conversazione si e addolcita in un silenzio confortevole, rotto occasionalmente da piccole osservazioni--una costellazione, una barca che passa, un ricordo suscitato dall\'aria salata. Ti stai muovendo, letteralmente e figurativamente, verso una riva sconosciuta.',
        choices: {
          'story-8742190384-c27': {
            text: 'Parlare dei domani pratici',
            description: 'Fai piani, costruisci struttura',
          },
          'story-8742190384-c28': {
            text: 'Semplicemente trattenere il momento',
            description: 'Lascia che l\'acqua vi porti entrambi',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Vista Ancorata',
        narration: 'Rimani sul molo, guardando il traghetto dissolversi nell\'orizzonte scuro. Riley sta vicino, avvolto nei pensieri quanto nel cappotto. "Siamo bravi nel quasi," dicono piano, e le parole pungono di verita. Quasi parlare, quasi restare, quasi amare pienamente. Senti il peso di tutti i tuoi quasi che premono. Ma stando qui, senti qualcosa che si sposta.',
        choices: {
          'story-8742190384-c29': {
            text: 'Promettere di smettere di quasi-fare',
            description: 'Impegnati nella pienezza, finalmente',
          },
          'story-8742190384-c30': {
            text: 'Riconoscere onestamente lo schema',
            description: 'Guarda chiaro prima di saltare',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Luci e Musica',
        narration: 'Il festival sul lungomare solleva scintille nel cielo scuro, i fuochi d\'artificio sbocciano come giganti fiori di luce. La musica si intreccia nella folla, e vi ritrovate a ballare senza volerlo, i corpi che ricordano i ritmi l\'uno dell\'altro. Riley ride, davvero ride, e il suono allenta qualcosa di stretto nel tuo petto. Intorno a voi, sconosciuti celebrano le proprie storie, le proprie seconde possibilita.',
        choices: {
          'story-8742190384-c31': {
            text: 'Baciali mentre i fuochi d\'artificio raggiungono l\'apice',
            description: 'Lascia che la gioia decida per te',
          },
          'story-8742190384-c32': {
            text: 'Sussurrare le tue speranze per il futuro',
            description: 'Pronuncia i tuoi sogni ad alta voce',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Mappe Intime',
        narration: 'Trovate una tavola calda aperta ventiquattro ore che brilla come un faro sulla strada tranquilla. Sopra la torta e il caffe, abbozzate i contorni di un futuro condiviso--non grandi dichiarazioni, ma piccole praticita. Chi chiamera chi, quanto spesso, di cosa avete entrambi bisogno per sentirvi al sicuro. Riley disegna cerchi sul tovagliolo, collegando le vostre vite con inchiostro attento. E poco drammatico, poco romantico, e piu prezioso di qualsiasi gesto.',
        choices: {
          'story-8742190384-c33': {
            text: 'Scambiarsi le chiavi come simbolo',
            description: 'Fiducia fisica, promessa tangibile',
          },
          'story-8742190384-c34': {
            text: 'Accordarsi di rivedersi domani',
            description: 'Un passo, poi un altro',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Costruire Insieme',
        narration: 'Parli di appartamenti e orari, della logistica dell\'amore che supera l\'infatuazione. Riley incontra la tua praticita con la loro, e insieme costruite un\'impalcatura abbastanza robusta per reggere la vita reale. Il traghetto continua la sua traversata, ma avete gia raggiunto una riva--terraferma dopo mari tempestosi. Domani attende con tutte le sue sfide ordinarie.',
        choices: {
          'story-8742190384-c35': {
            text: 'Impegnarti nel lavoro del "noi"',
            description: 'Scegli il sentiero della partnership',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Momento Perfetto',
        narration: 'Il mondo trattiene il respiro. I fuochi d\'artificio dipingono il viso di Riley in oro e rosa, e li baci mentre il cielo sboccia sopra di voi. Non e un amore perfetto--avete visto troppo chiaramente i difetti l\'uno dell\'altro per questo--ma e un momento perfetto, e scegli di fidarti che altri momenti seguiranno. La folla applaude intorno a te, celebrando la tua gioia privata con il loro rumore pubblico.',
        choices: {
          'story-8742190384-c36': {
            text: 'Lascia che questa gioia ti porti avanti',
            description: 'Fidati del sentimento, fidati di loro',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Terreno Solido',
        narration: 'Fai promesse che intendi mantenere, pronunciate semplicemente senza fronzoli. Riley le riceve con solennita annuente, comprendendo il peso delle parole dopo tanto silenzio. Il neon della tavola calda ronza dolcemente mentre la notte si approfonda intorno a voi. Hai scelto non la fiamma della passione ma la bruciante costanza dell\'amore, e sembra come tornare a casa in un luogo in cui non ti sei mai permesso di abitare del tutto.',
        choices: {
          'story-8742190384-c37': {
            text: 'Ricominciare, diversamente',
            description: 'Un nuovo capitolo, meglio scritto',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Separazione Gentile',
        narration: 'Vi separate con onesta piuttosto che speranza, riconoscendo che alcune storie d\'amore sono belle senza essere permanenti. Gli occhi di Riley brillano ma annuiscono, comprendendo. "Grazie per questa sera," dicono, e sai che intendono la chiusura, non solo la compagnia. Camminate in direzioni opposte, piu leggeri per aver detto la verita, tristi per cio che non puo essere salvato.',
        choices: {
          'story-8742190384-c38': {
            text: 'Portare la lezione avanti',
            description: 'Alcune fini sono anche doni',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Oltre l\'Acqua',
        narration: 'Il traghetto attracca sulla riva lontana, le luci della città scintillano sull\'acqua come ricordi. Sbarcate insieme, la mano di Riley ferma nella tua. Parlate di cose ordinarie--cosa cucinare, quale pianta continui a dimenticare di annaffiare, a chi tocca fare il caffe. Le promesse arrivano senza cerimonia, intrecciate nel tessuto del domani pratico. La scia scrive una nuova linea dietro di te, non cancellando nulla ma portandoti avanti nella vita che scegli di costruire, scelta dopo scelta, giorno dopo giorno.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Citta delle Scintille',
        narration: 'I fuochi d\'artificio ricuciono lo skyline, luminosi, brevi e veri. Tu e Riley parlate chiaramente delle parti difficili, poi ridete di quanto siete entrambi umani--impacciati, pieni di speranza, testardi nel vostro amore. Quando l\'ultimo fiore svanisce, l\'oscurita si sente di nuovo amichevole, una coperta piuttosto che un vuoto. Andate a casa insieme per strade d\'argento di pioggia, senza fretta, abbastanza tempo che si estende davanti come un dono che finalmente sentite di meritare di ricevere. La citta che un tempo custodiva il tuo addio ora e testimone del tuo saluto.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Un Altro Inizio',
        narration: 'Il mattino vi trova in un caffe d\'angolo, la luce del sole che filtra attraverso finestre che una volta riflettevano il tuo addio. Tu e Riley sedete uno di fronte all\'altro con taccuini e caffe, abbozzando l\'architettura di una relazione ricostruita su fondamenta piu solide. Non lo stesso amore di prima--qualcosa di piu saggio, piu onesto, piu resiliente. Non promettete per sempre; promettete di continuare a presentarvi, di continuare a scegliere, di continuare a costruire. Alcuni amori ritornano; alcuni amori ti insegnano ad amare meglio. Il vostro, forse, e entrambi.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Appartamento Tranquillo',
        narration: 'Tornato nella tua stanza in affitto, il bagliore blu dell\'insegna al neon si addolcisce ai bordi. Prepari il te, apri la finestra e lasci che la pioggia finisca la sua frase. Non stasera, decidi--ma non mai. Invii a Riley un ultimo messaggio, un augurio per la loro felicita espresso con la sincerita che solo la chiusura puo portare. La citta sara ancora qui quando sarai pronto a dire di piu, a qualcuno di nuovo o forse a te stesso. Per ora, lasci che la pioggia ti canti per addormentarti, grato per le seconde possibilita anche quando portano a porte diverse da quelle che speravi.',
        choices: {},
      },
    },
  },

  // Arabic
  ar: {
    title: 'مدينة الفرص الثانية',
    description: 'يحبسك مطر مفاجئ في مدينة كنت تسميها ذات يوم وطنا--وحيث تركت حبا غير مكتمل. تتحول ليلة واحدة إلى سلسلة من الاختيارات الصغيرة الشجاعة: مقهى، مكتبة، سطح، عبّارة. اعثر على طريقك للعودة إلى الحقيقة--أو نحو شيء جديد تماما.',
    author: 'أ. مارين',
    nodes: {
      'story-8742190384-1': {
        title: 'الوصول تحت المطر',
        narration: 'المطر الليلي يحول الشارع إلى مرآة، النيون متلطخ كأنها فرشاة على الأسفلت. حقيبتك أثقل مما ينبغي، مليئة بأشياء لم تقلها المرة الماضية. رياح تدفعك تحت المظلة؛ المدينة تفوح برائحة القهوة والرعد. في مكان ما يدق جرس القطار. تقول لنفسك إنها ليلة واحدة فقط--ما يكفي لتقرر ما إذا ستطرق باب رايلي.',
        choices: {
          'story-8742190384-c1': {
            text: 'الاختباء في المقهى للدفء',
            description: 'قد تجمع أفكارك--وشجاعتك',
          },
          'story-8742190384-c2': {
            text: 'الذهاب إلى المحطة بدلا من ذلك',
            description: 'القطارات تعني المغادرات--والوصولات',
          },
        },
      },
      'story-8742190384-2': {
        title: 'ملجأ دافئ',
        narration: 'الحليب يدور في مجرة صغيرة فوق اللاتيه بينما تتشكل قطرات المطر على النوافذ. الباريستا يتحدث عن قراءة ليلية في المكتبة في نهاية الشارع. هاتفك يهتز على الصحن، اسم رايلي ما زال مثبتا في أعلى رسائلك كوعد لم تحققه. الكوب يدفئ يديك؛ شجاعتك تستغرق وقتا أطول لتغلي. يجب أن تقرر خطوتك التالية بعناية.',
        choices: {
          'story-8742190384-c3': {
            text: 'السؤال عن القراءة في المكتبة',
            description: 'القصص قد تفتح أبوابا',
          },
          'story-8742190384-c4': {
            text: 'التحقق من رسالة رايلي',
            description: 'انظر ما الكلمات التي تنتظرك',
          },
        },
      },
      'story-8742190384-3': {
        title: 'شظايا الأمل',
        narration: 'الباريستا يذكر شخصا يبدو أنه رايلي كان يسأل عنك بالأمس. هاتفك يظهر رسالة بسيطة: "في المدينة؟" الصدفة تجعل جلدك يقشعر. المطر يقرع الزجاج بقوة أكبر، كأنه يدفعك نحو قرار. يمكنك متابعة هذا الخيط في المكتبة، أو الرد مباشرة وتغيير كل شيء.',
        choices: {
          'story-8742190384-c5': {
            text: 'المشي إلى المكتبة للتحقيق',
            description: 'دع الخيط يوجه قدميك',
          },
          'story-8742190384-c6': {
            text: 'إرسال رد حذر إلى رايلي',
            description: '"ما زلت هنا. هل يمكننا التحدث؟"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'التمدد',
        narration: 'رسالتك تطفو في الفضاء الرقمي، علم هدنة صغير يرفع في الليل. المكتبة تنتظر على بعد ثلعة شرقا، نوافذها تتوهج كمصباح في المطر. كل طريق يؤدي إلى نفس عدم اليقين. قلبك ينبض بوزن الكلمات غير المقولة لفترة طويلة. يجب أن تختار كيف تجسر الصمت بينكما.',
        choices: {
          'story-8742190384-c7': {
            text: 'انتظار رد رايلي',
            description: 'دعهم يحددون الشروط',
          },
          'story-8742190384-c8': {
            text: 'الذهاب إلى المكتبة على أي حال',
            description: 'الحركة تغلب الانتظار',
          },
        },
      },
      'story-8742190384-5': {
        title: 'تصل الكلمات',
        narration: 'هاتفك يضيء: "المحطة. عشر دقائق." الكلمات قليلة، لكنها بداية. تجمع معطفك، قلبك يخبط ضد ضلوعك كطائر ضد الزجاج. المطر لم يتوقف، لكنك لم تعد تلاحظه. كل خطوة نحو المحطة تشعر وكأنها عبور عتبة لا يمكنك التراجع عنها. الوقت ينضغط؛ اللحظة تتمدد.',
        choices: {
          'story-8742190384-c9': {
            text: 'المشي بسرعة إلى المحطة',
            description: 'لا تجعلهم ينتظرون',
          },
          'story-8742190384-c10': {
            text: 'أخذ لحظة للتزامن',
            description: 'تنفس قبل المواجهة',
          },
        },
      },
      'story-8742190384-6': {
        title: 'الوصول إلى المحطة',
        narration: 'المحطة ت humming بالمغادرات، اللوحات تومض بالحروف كجفون قلقة. ضحكة تعرفها تطفو من الدور المتوسط--مألوفة كأغنية مفضلة. تتجمد في منتصف الدرج، الحقيبة تخبط على الدرجة. هناك، عند كشك القهوة، يقف رايلي بشعر مرصع بالمطر وتعبير لا يمكنك قراءته تماما. ينقطع أنفاسك.',
        choices: {
          'story-8742190384-c11': {
            text: 'نادِ باسمهم',
            description: 'دع المحطة تشهد',
          },
          'story-8742190384-c12': {
            text: 'الاقتراب ببطء، السماح لهم برؤيتك',
            description: 'أعطهم وقتا للتكيف',
          },
        },
      },
      'story-8742190384-7': {
        title: 'التعرف',
        narration: 'رايلي يدور، والوقت يتعثر. عيونهم تتسع، ثم تلين بشيء معقد--ألم، أمل، تردد. "لقد أتيت،" يقولون، ويبدو وكأنه اتهام وارتياح متشابكين معا. ضجيج المحطة يتلاشى إلى همس. لقد تدربت على هذه اللحظة ألف مرة في رأسك، لكن الآن كل خطاباتك تتبدد. يجب أن تختار أي حقيقة تقولها أولا.',
        choices: {
          'story-8742190384-c13': {
            text: 'الاعتذار عن المغادرة',
            description: 'ابدأ بالحقيقة الأصعب',
          },
          'story-8742190384-c14': {
            text: 'السؤال عن كيف كان حالهم',
            description: 'ابدأ بلطف، ابنِ الجسر',
          },
        },
      },
      'story-8742190384-8': {
        title: 'جسر متردد',
        narration: 'رايلي يستمع، حقا يستمع، بطريقة نسيت أن الناس يستطيعونها. قهوتهم تبرد بين أيديهم بينما تتحدث. حشود المحطة تتدفق حولك مثل الماء حول الحجارة. شيء هش يبدأ في التشكل في الفضاء بين كلماتك--إمكانية، ربما، باب ينفتح. تحتاج إلى اقتراح أين يمكن أن تستمر هذه المحادثة.',
        choices: {
          'story-8742190384-c15': {
            text: 'اقتراح المشي إلى الحديقة',
            description: 'الحركة قد تخفف التوتر',
          },
          'story-8742190384-c16': {
            text: 'اقتراح السطح الذي أحببتموه كلاهما',
            description: 'ذاكرة مشتركة كأساس',
          },
        },
      },
      'story-8742190384-9': {
        title: 'خطوات مشتركة',
        narration: 'تمشيان معا في شوارع تتذكر خطواتك. المطر قد خف إلى ضباب يلتصق بشعرك مثل الذكريات. رايلي يمشي قريبا بما يكفي لتلامس أكتافك، بعيدا بما يكفي لعدم قراءة أفكارهم. تمر بالمعرض القديم حيث كان موعدكما الأول، المخبز حيث تخاصمتما وصالحتما. كل معلم هو شبح يجب أن تقرر ما إذا كنت ستعترف به.',
        choices: {
          'story-8742190384-c17': {
            text: 'الإشارة إلى المعرض وأنت تمر',
            description: 'أكرم التاريخ بينكما',
          },
          'story-8742190384-c18': {
            text: 'التركيز على اللحظة الحاضرة',
            description: 'دع الماضي يرتاح للآن',
          },
        },
      },
      'story-8742190384-10': {
        title: 'نقطة الوصول',
        narration: 'تصل إلى المقعد القديم في حديقة النهر حيث تحدثتما ذات مرة حتى الفجر. الخشب أملس بسبب محادثات لا حصر لها، اعترافات لا حصر لها. رايلي يجلس، تاركا مساحة قد تكون دعوة أو مسافة. أضواء المدينة ترقص على الماء مثل نجوم متناثرة. أنت هنا، معا، بعد كل شيء. اللحظة تشعر بالتعليق، تنتظر أن تنفخ الحياة في ما يأتي بعد.',
        choices: {
          'story-8742190384-c19': {
            text: 'الجلوس بالقرب والبدء في الشرح',
            description: 'قدم الحقيقة الكاملة أخيرا',
          },
          'story-8742190384-c20': {
            text: 'السؤال عما يحتاجونه منك',
            description: 'دعهم يوجهون الشفاء',
          },
        },
      },
      'story-8742190384-11': {
        title: 'أرض صادقة',
        narration: 'الكلمات تتدفق مثل النهر بجانبك--أحيانا لطيفة، أحيانا سيول. تتحدث عن الخوف والكبرياء، عن الصمت الذي نما بينكما مثل اللبلاب، عن الليالي التي كدت تتصل فيها. رايلي يلتقي بنظرك، وترى شوقك الخاص منعكسا هناك. المقعد يحملكما كلاهما بينما تستقر الحقيقة، ثقيلة وضرورية. لقد وصلت إلى عتبة القرار. هنا حيث تتفرق الطرق حقا.',
        choices: {
          'story-8742190384-c21': {
            text: 'اقتراح رحلة عبّارة معا',
            description: 'دع الماء يحملكما للأمام',
          },
          'story-8742190384-c22': {
            text: 'اقتراح البدء من جديد، هنا والآن',
            description: 'فصل جديد على أرض مألوفة',
          },
        },
      },
      'story-8742190384-12': {
        title: 'عند حافة الماء',
        narration: 'محطة العبّارة تتوهج ضد الماء الداكن، وعد بالمغادرة والعودة. يد رايلي تجد يدك، مترددة لكن دافئة. "أخاف،" يعترفون، وتحشر أصابعهم تقديرا. الخوف هو ثمن الأمل، تدرك. بوق القارب يبدو، منخفض وصبور. تقف على حافة شيء واسع--محيط من الإمكانيات، أو الماء العميق للأنماط القديمة.',
        choices: {
          'story-8742190384-c23': {
            text: 'الصعود إلى العبّارة معا',
            description: 'التزم بالرحلة',
          },
          'story-8742190384-c24': {
            text: 'اقتراح المشاهدة من الرصيف بدلا من ذلك',
            description: 'ابقَ مرساة، ابقَ آمنا',
          },
        },
      },
      'story-8742190384-13': {
        title: 'تربة جديدة',
        narration: 'تتحدث عن البدء من جديد--ليس من حيث توقفتما، بل من حيث أنتما الآن، شخصان تغيرا بتاريخ مشترك ونمو منفصل. رايلي يهز برأسه ببطء، متأملا. "هذا يعني ترك بعض الأشياء،" يقولون، وتعرف أنهم على حق. الماضي هو حديقة لا يمكنك أن تقلعها، لكنك تستطيع اختيار ما ترعاه الآن. المدينة من حولك تنفس بالإمكانيات.',
        choices: {
          'story-8742190384-c25': {
            text: 'المشي إلى مهرجان الواجهة البحرية',
            description: 'احتفل بهذا البداية الهشة الجديدة',
          },
          'story-8742190384-c26': {
            text: 'إيجاد مكان هادئ للتخطيط لغد',
            description: 'ابنِ الأساس بعناية',
          },
        },
      },
      'story-8742190384-14': {
        title: 'عبور المياه',
        narration: 'العبّارة تنزلق عن الرصيف، أضواء المدينة تتفكك في عقدة على الماء الداكن. تستند إلى الدرابزين مع رايلي بجانبك، أكتاف تلمس. تحولت المحادثة إلى صمت مريح، تنكسر أحيانا بملاحظات صغيرة--كوكبة، قارب عابر، ذكرى أثارها الهواء المالح. تتحرك، حرفيا ومجازيا، نحو شاطئ مجهول.',
        choices: {
          'story-8742190384-c27': {
            text: 'التحدث عن الغد العملي',
            description: 'ضع خططا، ابنِ هيكلا',
          },
          'story-8742190384-c28': {
            text: 'ببساطة احتفظ باللحظة',
            description: 'دع الماء يحملكما كليهما',
          },
        },
      },
      'story-8742190384-15': {
        title: 'منظور مرسوى',
        narration: 'تبقى على الرصيف، تشاهد العبّارة تتلاشى في الأفق الداكن. رايلي يقف بالقرب، ملفوف في التفكير بقدر ما هو ملفوف في المعطف. "نحن جيدون في شبه،" يقولون بهدوء، والكلمات توجع بالحقيقة. شبه التحدث، شبه البقاء، شبه الحب بشكل كامل. تشعر بوزن كل أشباهك يضغط. لكن واقفا هنا، تشعر بشيء يتغير.',
        choices: {
          'story-8742190384-c29': {
            text: 'الوعد بالتوقف عن شبه-الفعل',
            description: 'التزم بالكمال أخيرا',
          },
          'story-8742190384-c30': {
            text: 'الاعتراف بالنمط بصدق',
            description: 'انظر بوضوح قبل القفز',
          },
        },
      },
      'story-8742190384-16': {
        title: 'أضواء وموسيقى',
        narration: 'مهرجان الواجهة البحرية يرفع الشرر في السماء الداكنة، الألعاب النارية تتفتح مثل زهور ضوئية عملاقة. الموسيقى تتشعب من خلال الحشد، وتجد نفسكما ترقصان دون قصد، الأجساد تتذكر إيقاعات بعضها البعض. رايلي يضحك، حقا يضحك، والصوت يفك شيئا ضاغطا في صدرك. من حولك، غرباء يحتفلون بقصصهم الخاصة، بفرصهم الثانية الخاصة.',
        choices: {
          'story-8742190384-c31': {
            text: 'قبّلهم عندما تبلغ الألعاب النارية ذروتها',
            description: 'دع الفرح يقرر لك',
          },
          'story-8742190384-c32': {
            text: 'همس آمالك للمستقبل',
            description: 'تكلم بأحلامك بصوت عالٍ',
          },
        },
      },
      'story-8742190384-17': {
        title: 'خرائط حميمة',
        narration: 'تجد مطعما مفتوحا على مدار الساعة يتوهج كمنارة في الشارع الهادئ. فوق فطيرة وقهوة، ترسم ملامح مستقبل مشترك--ليست إعلانات عظيمة، بل عمليات صغيرة عملية. من سيتصل بمن، كم مرة، ما تحتاجانهما كلاهما لتشعرا بالأمان. رايلي يرسم دوائر على المناديل، يربط حياتكما بحبر متأنٍ. إنه غير درامي، غير رومانسي، وأكثر قيمة من أي إيماءة.',
        choices: {
          'story-8742190384-c33': {
            text: 'تبادل المفاتيح كرمز',
            description: 'ثقة جسدية، وعد ملموس',
          },
          'story-8742190384-c34': {
            text: 'الاتفاق على اللقاء غدا مرة أخرى',
            description: 'خطوة، ثم أخرى',
          },
        },
      },
      'story-8742190384-18': {
        title: 'البناء معا',
        narration: 'تتحدث عن الشقق والجداول، عن لوجستيات الحب التي تدوم أطول من الإعجاب. رايلي يلاقي عمليتك بعمليتهم، وتبنيان معا سقالة متينة بما يكفي لتحمل الحياة الحقيقية. العبّارة تستمر في عبورها، لكنكما وصلتما بالفعل إلى شاطئ--أرض صلبة بعد بحار عاصفة. الغد ينتظر بكل تحدياته العادية.',
        choices: {
          'story-8742190384-c35': {
            text: 'التزم بعمل "نحن"',
            description: 'اختر طريق الشراكة',
          },
        },
      },
      'story-8742190384-19': {
        title: 'لحظة مثالية',
        narration: 'العالم يحتفظ بأنفاسه. الألعاب النارية ترسم وجه رايلي بالذهب والورد، وتقبّلهما بينما السماء تتفوق فوق رأسكما. إنه ليس حبا مثاليا--لقد رأيتما عيوب بعضكما البعض بوضوح شديد لذلك--لكنها لحظة مثالية، وتختار أن تثق بأن المزيد من اللحظات ستتبع. الحشود تهتف من حولكما، تحتفل بفرحكما الخاص بضجيجهم العام.',
        choices: {
          'story-8742190384-c36': {
            text: 'دع هذه الفرحة تحملك للأمام',
            description: 'ثق بالشعور، ثق بهم',
          },
        },
      },
      'story-8742190384-20': {
        title: 'أرض صلبة',
        narration: 'تقدم وعودا تعتزم الوفاء بها، منطوقة ببساطة دون زخرفة. رايلي يستلمها بجدية مؤيدة، متفهما وزن الكلمات بعد كل هذا الصمت. نيون المطعم يزنر بهدوء بينما يتعمق الليل من حولكما. لقد اخترتَ لهب العاطفة ولكن الحرق الثابت للحب، ويشعر وكأنك تعود إلى منزل في مكان لم تسمح لنفسك أبدا بالإقامة فيه تماما.',
        choices: {
          'story-8742190384-c37': {
            text: 'البدء من جديد، بشكل مختلف',
            description: 'فصل جديد، مكتوب بشكل أفضل',
          },
        },
      },
      'story-8742190384-21': {
        title: 'فراق لطيف',
        narration: 'تفترقان بصدق بدلا من أمل، معترفين بأن بعض قصص الحب جميلة دون أن تكون دائمة. عيون رايلي تلمع لكنهما ينظران بالإيجاب، متفهمين. "شكرا على هذه الليلة،" يقولون، وتعرف أنهما يعنيان الختام، ليس فقط الصحبة. تمشيان في اتجاهين معاكسين، أخف لوصفك للحقيقة، حزينين لما لا يمكن إنقاذه.',
        choices: {
          'story-8742190384-c38': {
            text: 'حمل الدرس للأمام',
            description: 'بعض النهايات هي أيضا هدايا',
          },
        },
      },
      'story-8742190384-22': {
        title: 'عبر الماء',
        narration: 'ترسو العبّارة على الشاطئ البعيد، أضواء المدينة تومض على الماء كذكريات. تنزلان معا، يد رايلي ثابتة في يدك. تتحدثان عن أشياء عادية--ماذا تطبخ، أي نبات تنسى ريه باستمرار، من دوره لتحضير القهوة. تصل الوعود بلا مراسم، منسوجة في نسيج الغد العملي. المؤخرة ترسم خطا جديدا خلفك، لا تمحو شيئا ولكنها تحملك للأمام في الحياة التي تختار بناءها، خيارا بعد خيار، يوما بعد يوم.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'مدينة الشرر',
        narration: 'الألعاب النارية تخيط خط الأفق، ساطعة وقصيرة وحقيقية. أنت ورايلي تتكلم الأجزاء الصعبة بوضوح، ثم تضحكان على مدى إنسانيتكما--التواء، مملوء بالأمل، عنيد في حبكما. عندما يتلاشى آخر زهرة، يشعر الظلام بالود مرة أخرى، لحاف بدلا من فراغ. تمشيان للمنزل معا في شوارع فضية بالمطر، بلا عجلة، وقت كافٍ يمتد أمامكما مثل هدية تشعر أخيرا أنك تستحق تلقيها. المدينة التي احتوت وداعكما ذات مرة تشهد الآن على تحيتكما.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'بداية أخرى',
        narration: 'يجدكما الصباح في مقهى الزاوية، ضوء الشمس يتدفق عبر نوافذ عكست ذات مرة وداعكما. أنت ورايلي تجلسان متقابلتين مع دفاتر الملاحظات والقهوة، ترسمان بنية علاقة أعيد بناؤها على أسس أقوى. ليس نفس الحب السابق--شيء أكثر حكمة، أكثر صدقا، أكثر مرونة. لا تعدان بالأبد؛ تعدان بالاستمرار في الظهور، بالاستمرار في الاختيار، بالاستمرار في البناء. بعض الأحباب يعودون؛ بعض الأحباب يعلمونك كيف تحب بشكل أفضل. حبكما، ربما، هو الاثنان.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'شقة هادئة',
        narration: 'عودة إلى غرفتك المستأجرة، الوهج الأزرق للوحة النيون ينعم عند الحواف. تصنع الشاي، تفتح النافذة، وتدع المطر ينهي جملته. ليس الليلة، تقرر--ولكن ليس أبدا أبدا. ترسل إلى رايلي رسالة أخيرة، أمنية بسعادتهم معبرا عنها بالصدق الذي يمكن أن يجلبه الختام فقط. المدينة ستظل هنا عندما تكون مستعدا لقول المزيد، لشخص جديد أو ربما لنفسك. للآن، تدع المطر ينعمك للنوم، ممتنا للفرص الثانية حتى عندما تقود إلى أبواب مختلفة مما كنت تأمل.',
        choices: {},
      },
    },
  },


  // Hindi
  hi: {
    title: 'Dusre Mauke Ka Shahar',
    description: 'Achanaak barsaat aapko ek aise sheher mein rok leti hai jise aap kabhi ghar kehte the--aur jahan aapne ek adhura pyaar chhoda tha. Ek raat chhoti, bahadur chunaavon ki shrenkhalaa ban jaati hai: ek cafe, ek kitaab ki dukaan, ek chhat, ek ferry. Sachchaai ki ore waapas jaane ka raasta dhoondhen--ya kuch bilkul naye ki ore.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Barish Mein Aagman',
        narration: 'Raat ki baarish sadak ko aaina bana deti hai, neon rang asphalt par phente ki tarah phaila hua hai. Aapka suitcase usse bhaari hai jitna hona chahiye, un cheezon se bhara hai jo aapne pichhli baar nahi kahi thi. Ek jhonka aapko chhatar ke neeche dhakel deta hai; sheher se coffee aur garaj ki boo aati hai. Kahin se train ki ghanti bajti hai. Aap apne aap se kehte hain ki yah keval ek raat hai--kaafi hai tay karne ke liye ki kya aap Riley ke darwaze par dastak denge.',
        choices: {
          'story-8742190384-c1': {
            text: 'Garmi ke liye cafe mein ghus jaao',
            description: 'Aap apne vichaaron--aur saahas--ko ikattha kar sakte hain',
          },
          'story-8742190384-c2': {
            text: 'Bajaye station ki ore badhen',
            description: 'Train se nikalne ka raasta aur aane ka raasta donon milta hai',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Garam Panah',
        narration: 'Doodh aapke latte ke upar ek chhoti si aakashganga mein ghoomta hai, jabki khidkiyan baarish se bhar jaati hain. Barista ek block neeche kitab ki dukaan mein raat ki padhai ke baare mein baat kar raha hai. Aapka phone pyaale par vibrate hota hai, Riley ka naam ab bhi aapke sandeshon ke sabase upar chipka hua hai, ek vaade ki tarah jo aapne kabhi poora nahi kiya. Pyala aapke haathon ko garam karta hai; aapka saahas dheere-dheere ubalata hai. Aapko apna agala kadam soch-samajh kar tay karna hoga.',
        choices: {
          'story-8742190384-c3': {
            text: 'Kitab ki dukaan ki padhai ke baare mein poochhen',
            description: 'Kahaniyaan daravaaze khol sakati hain',
          },
          'story-8742190384-c4': {
            text: 'Riley ke sandesh ko jaanchein',
            description: 'Dekhen kaun se shabd aapaka intazaar kar rahe hain',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Aasha Ke Tukade',
        narration: 'Barista kisi aise vyakti ka zikr karata hai jo Riley jaisa lagata hai, jo kal aapake baare mein poochh raha tha. Aapake phone par ek saadha sa sandesh dikhata hai: "Sheher mein?" Ittefaq aapaki twacha ko kaanpaa deta hai. Baarish kaanch par aur zor se thappad maarati hai, jaise aapako faisale ki ore dhakel rahi ho. Aap is suraag ka peecha kitab ki dukaan mein kar sakate hain, ya sidhe jawaab dekar sab kuch badal sakate hain.',
        choices: {
          'story-8742190384-c5': {
            text: 'Jaanch ke liye kitab ki dukaan par chalen',
            description: 'Suraag ko aapake pairon ko margadarshan dene den',
          },
          'story-8742190384-c6': {
            text: 'Riley ko ek saavadhaan jawaab bhejen',
            description: '"Ab bhi yahin hoon. Kya ham baat kar sakate hain?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Haath Badhaana',
        narration: 'Aapaka sandesh digital aakaash mein tairata hai, raat mein uthaaya gaya ek chhota yuddhviraam ka jhanda. Kitab ki dukaan teen block poorab mein intazaar kar rahi hai, usaki khidkiyaan baarish mein ek fanus ki tarah chamak rahi hain. Koee bhi raasta usi asmaanata ki ore jaata hai. Aapaka dil bahut dinon se kahe bina shabdon ke bhaar se dhadakata hai. Aapako yah chunana hoga ki aapake beech khamoshi ko kaise paar kiya jaaye.',
        choices: {
          'story-8742190384-c7': {
            text: 'Riley ke jawaab ka intazaar karen',
            description: 'Unhen sharten tay karane den',
          },
          'story-8742190384-c8': {
            text: 'Phir bhi kitab ki dukaan par jaaen',
            description: 'Chaal intezaar se behtar hai',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Shabd Aate Hain',
        narration: 'Aapaka phone chamakata hai: "Station. Das minute." Shabd kam hain, lekin yah ek shuruaat hai. Aap apana coat jama karen, dil kaanch par panchhi ki tarah dhadakata hai. Baarish ruki nahi hai, lekin ab aap use mahasoos nahi karate. Station ki ore har kadam aise daravaaze ko paar karane jaisa lagata hai jise aap pichhe nahi kar sakate. Samay sankuchit hota hai; kshan vistaarit hota hai.',
        choices: {
          'story-8742190384-c9': {
            text: 'Jaldi se station ki ore chalen',
            description: 'Unhen intezaar mat karavao',
          },
          'story-8742190384-c10': {
            text: 'Apane aap ko sambhaalane ke liye ek kshan len',
            description: 'Hisab se pehle saans len',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Station Par Aagman',
        narration: 'Station ravaanagi se gunjata hai, board baijchain palakon ki tarah aksharon ko palakate hain. Aapaki pehachaani hasi mezzanine se bahati hai--pasandida geet ki tarah jaani-maani. Aap seedhiyon ke aadhe raaste mein jam jaate hain, suitcase seedhi par dhamaaka karata hai. Vahan, coffee kiosk ke paas, Riley baarish se chhinte baalon ke saath khade hain aur ek aise bhaav ke saath jo aap poori tarah se padh nahi sakate. Aapaki saans ruk jaati hai.',
        choices: {
          'story-8742190384-c11': {
            text: 'Unaka naam pukaaren',
            description: 'Station ko is pal ko dekhane den',
          },
          'story-8742190384-c12': {
            text: 'Dheere se paas jaao, apane aap ko dekhane den',
            description: 'Unhen samay dene den jhulane ke liye',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Pehchaan',
        narration: 'Riley murtata hai, aur samay atak jaata hai. Unakee aankhen chaud ho jaati hain, phir kuch jatil cheej se naram ho jaati hain--dard, aasha, jhijhak. "Tum aaye," ve kehate hain, aur yah ek aarop aur raahat ke bundhe hue saath sunaee deta hai. Station ke shor ko gunagunaane mein badal jaate hain. Aapane is pal ki hajaar baar abhyaas apane mastishk mein kiya hai, lekin ab aapake sabhee bhaashan ghul jaate hain. Aapako yah chunana hoga ki sabase pahale kaun see sachchaai kaha jaaye.',
        choices: {
          'story-8742190384-c13': {
            text: 'Jaane ke liye maafi maango',
            description: 'Sabase kathin sachchaai se shuru karo',
          },
          'story-8742190384-c14': {
            text: 'Poochhen ki ve kaise hain',
            description: 'Dhire se shuru karo, pul baanao',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Sahaara Pul',
        narration: 'Riley sunata hai, sach mein sunata hai, ek aise tareeke se jo aap bhool gaye the ki log kar sakate hain. Jab aap bol rahe hote hain to unake haathon ke beech coffee thandi ho jaati hai. Station ki bheed aapake chaaron ore pattharon ke chaaron ore paani ki tarah bahati hai. Aapake shabdon ke beech ke aakaash mein kuchh naajuk banana shuroo ho jaata hai--ek sambhaavanaa, ek shaayad, ek daravaaza khul raha hai. Aapako yah sujhaav dena hoga ki yah baatacheet kahaan jaaree ho sakati hai.',
        choices: {
          'story-8742190384-c15': {
            text: 'Park tak paidal chalane ka sujhaav den',
            description: 'Chaal tanav ko kuchh kum kar sakati hai',
          },
          'story-8742190384-c16': {
            text: 'Una chhat ka sujhaav den jo aap donon ko pasand thi',
            description: 'Saajha smruti aadhaar ke roop mein',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Saajha Kadam',
        narration: 'Aap saath mein un sadakon se gujarate hain jo aapake kadamon ko yaad karati hain. Baarish yaadon ki tarah aapake baalon se chipakee dhundh mein kam ho gayi hai. Riley itane paas chalata hai ki aapake kandhe chhoo jaate hain, itane door ki aap unake vichaaron ko nahi padh sakate. Aap us puraane gallery ke paas se gujare jahan aapaki pehali taareekh thi, us bakery jahan aap lade aur phir sulah ki. Har nishaan ek bhoot hai jise aapako tai karna hoga ki sweekaar karen ya na karen.',
        choices: {
          'story-8742190384-c17': {
            text: 'Gujarate samay gallery ka zikr karen',
            description: 'Aapake beech ke itihaas ka aadar karen',
          },
          'story-8742190384-c18': {
            text: 'Vartamaan kshan par dhyaan kendrit karen',
            description: 'Ab ke liye ateet ko aaram dene den',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Aagaman Bindu',
        narration: 'Aap nadi ke kinaare park mein us puraane bench tak pahunchate hain jahan aap kabhi savera tak baat karate the. Lakadi anaginat baaton, anaginat ikraar naam se chikana ho gaya hai. Riley baith jaata hai, jagah chhodakar jo aamantran ho sakata hai ya doori. Shahar ke diye paani par bikhare taaron ki tarah naachate hain. Aap sab kuchh ke baad, yahan, saath hain. Yah pal ruka hua lagata hai, aapake aane vaale ko jeevan dene ke intazaar mein hai.',
        choices: {
          'story-8742190384-c19': {
            text: 'Paas baithakar samajhaana shuroo karen',
            description: 'Aakhirakaar pooree sachchaai pesh karen',
          },
          'story-8742190384-c20': {
            text: 'Poochhen ki unhen aapase kya chaahie',
            description: 'Changaaee ko ve margadarshit karen',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Imaanadaar Zameen',
        narration: 'Shabd aapake paas ke nadi ki tarah bahate hain--kabhee shaant, kabhee jharna kee tarah. Aap dar aur gaurav ke baare mein bolate hain, us khamoshi ke baare mein jo aapake beech sehumariyaan kee tarah badhi, un raaton ke baare mein jab aap lagabhag phone karate. Riley aapakee aankhon se milti hai, aur aap vahan apane khud ke taras ko pratibimbhit dekhen. Bench aap donon ko pakade hue hai jab sachchaai bhaari aur zaroori ho kar baithatee hai. Aap faisale ke daravaaze par pahunch gaye hain. Yahin par raastein vaastav mein alag hoti hain.',
        choices: {
          'story-8742190384-c21': {
            text: 'Saath mein ferry ki yaatra ka sujhaav den',
            description: 'Paani ko aapako aage le jaane den',
          },
          'story-8742190384-c22': {
            text: 'Yahin aur ab shuroo karane ka prastaav den',
            description: 'Pehchaane zameen par ek naya adhyaay',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Paani Ke Kinaare',
        narration: 'Ferry terminal andhere paani ke saamane chamakata hai, ravaanagi aur vaapasi ka vaada. Riley ka haath aapaka haath dhoondhata hai, jhijhakata lekin garam. "Mujhe dar lag raha hai," ve sweekaar karate hain, aur aap unakee ungaliyon ko sveekaar mein dabate hain. Aapako ehasaas hota hai ki dar aasha kee keemat hai. Jahaj ke haarn bajata hai, nicha aur dhairy poorvak. Aap kuchh vishaal ke kinaare khade hain--sambhaavanaon ka saagar, ya puraane pattern ke gahare paani.',
        choices: {
          'story-8742190384-c23': {
            text: 'Saath mein ferry mein chadhen',
            description: 'Yaatra ke prati pratibaddh hain',
          },
          'story-8742190384-c24': {
            text: 'Bajaye pier se dekhane ka sujhaav den',
            description: 'Langar rakhain, surakshit rahen',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Nayi Zameen',
        narration: 'Aap dobaara shuroo karane ke baare mein bolate hain--jahan aapane chhoda tha vahan se nahin, balki jahan aap ab hain, saajha itihaas aur alag vrddhi vaale do badale hue insaan. Riley dhire se sir hilaata hai, sochata hai. "Isaka matlab kuchh cheezon ko jaane dena hai," ve kehate hain, aur aap jaanate hain ki ve sahee hain. Ateet ek aisa baag hai jise aap ukhaad nahi sakate, lekin aap ab yah chun sakate hain ki kya dekhabhaal karen. Aapake chaaron ore ka shehar sambhaavanaon ke saath saans leta hai.',
        choices: {
          'story-8742190384-c25': {
            text: 'Waterfront tyohaar tak chalen',
            description: 'Is naazuk naye aaghaaz ka jashan manaen',
          },
          'story-8742190384-c26': {
            text: 'Kal ki yojana ke liye ek shaant jagah dhoondhen',
            description: 'Buniyaad soch-samajh kar banaen',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Paar Kar Paani',
        narration: 'Ferry ghaat se alag ho jaati hai, shehar ke diye andhere paani par ek haar ban mein dheel ho jaate hain. Aap Riley ke paas rail ke sahaare tez hain, kandhe chhoote hue. Baatacheet aaraam se khaamoshee mein naram ho gayi hai, kabhee-kabhaar chhote jagnon se tooti hai--ek nakshatr, ek gujarta jahaaj, namakeen hava ke kaaran ek yaad. Aap shabdaashah aur ruupaakaatmak roop se, ek anjaane kinaare ki ore badh rahe hain.',
        choices: {
          'story-8742190384-c27': {
            text: 'Vyaavahaarik kal ke baare mein baat karen',
            description: 'Yojana banaen, sanrachana banaen',
          },
          'story-8742190384-c28': {
            text: 'Bas is pal ko thaame rakhain',
            description: 'Paani ko aap donon ko le jaane den',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Langarit Drshya',
        narration: 'Aap pier par rahe hain, ferry ko andhere kshitij mein ghulte hue dekhte hain. Riley paas khada hai, coat ke baraabar soch mein lipta hua. "Ham lagabhag mein achchhe hain," ve dheere se kehate hain, aur shabd sachchaee se chubhate hain. Lagabhag baat karana, lagabhag rukana, lagabhag pooree tarah se pyaar karana. Aap apane sabhee lagabhagon ke bhaar ko dabate hue mahasoos karate hain. Lekin yahan khade hokar, aap kuchh badalata mahasoos karate hain.',
        choices: {
          'story-8742190384-c29': {
            text: 'Lagabhag karana band karane ka vaada karen',
            description: 'Aakhirakaar pooreepan ke prati pratibaddh hain',
          },
          'story-8742190384-c30': {
            text: 'Imaanadaaree se pattern ko sweekaar karen',
            description: 'Koodane se pehle saaf dekhen',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Roshani Aur Sangeet',
        narration: 'Waterfront utsav andhere aakaash mein chingaariyaan uthaata hai, pataakhe prakaash ke vishaal phoolon ki tarah khilate hain. Sangeet bheed mein ghusata hai, aur aap anajaane mein naachate hue paate hain, shareer ek doosare ke taal ko yaad karate hain. Riley hansata hai, sach mein hansata hai, aur yah aavaaj aapaki chhaatee mein kuchh kase hue ko dheela kar detee hai. Aapake chaaron ore, ajanabee apane apane kisse, apane apane dusre maukon ka jashan mana rahe hain.',
        choices: {
          'story-8742190384-c31': {
            text: 'Jab pataakhe charam par hon to unhen choomen',
            description: 'Khushi ko aapake liye faisala karane den',
          },
          'story-8742190384-c32': {
            text: 'Bhavishya ke liye apane aashaon ko phusaphusaen',
            description: 'Apane sapane zor se bolo',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Antarang Naksha',
        narration: 'Aap shaant sadak par ek prakaash stambh kee tarah chamakata chaubees ghante ka dhaaba paate hain. Paai aur coffee ke upar, aap saajha bhavishya ke aakaar ko banate hain--bade elaan nahin, balki chhoti vyavahaarikataen. Kaun kise phone karega, kitni baar, aap donon ko surakshit mahasoos karane ke liye kya chaahie. Riley napkin par gole banata hai, saavadhaan syaahee se aapake jeevanon ko jodata hai. Yah anaatakeey nahin hai, romaanshpoorn nahin hai, aur kisee bhi bhaavana se zyaada anamol hai.',
        choices: {
          'story-8742190384-c33': {
            text: 'Pratik ke roop mein chaabiyaan aadaan-pradaan karen',
            description: 'Shaareerik vishvaas, saakaaratmak vaada',
          },
          'story-8742190384-c34': {
            text: 'Kal phir milane par sahamat hain',
            description: 'Ek kadam, phir ek aur',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Saath Mein Nirmaan',
        narration: 'Aap apaartament aur schedule ke baare mein bolte hain, us pyaar ke taarkik ke baare mein jo infatuation se aage tikata hai. Riley aapake vyavahaarik ko apane saath milaata hai, aur saath mein aap vaastavik jeevan ko paane ke liye kaaphi majaboot ek mejbaanee banaate hain. Ferry apana paar karna jaaree rakhti hai, lekin aap pahale hee ek kinare par pahunch chuke hain--toofaani samudra ke baad thos zameen. Kal apane sabhee saamaanya chunautiyon ke saath intazaar kar raha hai.',
        choices: {
          'story-8742190384-c35': {
            text: '"Ham" ke kaam ke prati pratibaddh hain',
            description: 'Bhoomika ke maarg ko chunen',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Sampoorna Kshan',
        narration: 'Duniya saans thaam leti hai. Pataakhe Riley ke chehare ko sone aur gulaabee rang mein rachate hain, aur aap aakaash ko aapake sir ke upar khilata hai to unhen choomate hain. Yah sampoorna prem nahin hai--aap ek doosare ke dosh ko usake liye bahut spasht roop se dekh chuke hain--lekin yah ek sampoorna kshan hai, aur aap yah vishvaas karane ka chunaav karate hain ki aur kshan aayenge. Bheed aapake chaaron ore utsaah se gaaje, apane saarvajanik shor se aapake nijee aanand ka jashn mana rahee hai.',
        choices: {
          'story-8742190384-c36': {
            text: 'Is aanand ko aapako aage le jaane den',
            description: 'Bhaavana par bharosa karen, un par bharosa karen',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Thos Zameen',
        narration: 'Aap vaade karate hain jinhen aap nibhaane ka iraada rakhate hain, saadha tareeke se arthaat bina alankar ke bolate hue. Riley unhen sir hilata gaurav ke saath praapt karata hai, itani khaamoshee ke baad shabdon ke bhaar ko samajhata hai. Dhaabe ka neon dheere se gunagunaata hai jabaki raat aapake chaaron ore gaharaatee hai. Aapane josh ke shole ko nahin balki prem ke sthir jalaane ko chuna hai, aur yah aise ghar lautane jaise hai jahan aapane kabhee apane aap ko poori tarah se rahane ke liye anumati nahin di.',
        choices: {
          'story-8742190384-c37': {
            text: 'Alag tareeke se dobaara shuroo karen',
            description: 'Ek naya adhyaay, behatar likha hua',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Kooml Vidaai',
        narration: 'Aap aasha ke bajaae imaandaaree se alag hote hain, yah maanate hue ki kuchh prem kahaaniyaan hamesha ke lie nahin hone par bhee khoobasoorat hain. Riley kee aankhen chamakatee hain lekin ve sir hilaate hain, samajhate hue. "Is raat ke lie dhanyavaad," ve kehate hain, aur aap jaanate hain ki ve smapiti ka matlab hain, siraph saatha nahin. Aap vipareet dishaon mein chalate hain, sachchaee kahane se halka, jisakee raksha nahin ho sakati use lekar udaas.',
        choices: {
          'story-8742190384-c38': {
            text: 'Seekh ko aage le jaao',
            description: 'Kuchh ant bhee upahaar hain',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Paani Ke Paar',
        narration: 'Ferry door ke kinare par bandaragaah karata hai, shehar ke diye yaadon kee tarah paani par timtimaate hain. Aap saath mein utarate hain, Riley ka haath aapake haath mein mazaboot hai. Aap saamaany cheezon ke baare mein baat karate hain--kya pakaaen, kaun sa paudha aap lagaataar paani dena bhool jaate hain, coffee banaane ke lie kisakee baaree hai. Vaade rasm ke bina pahunchate hain, vyavahaarik kal ke kaapade mein bune hue. Ghaat aapake peechhe ek nayi lakeer likhata hai, kuchh mitaa nahin raha hai lekin aapako aage le ja raha hai us jeevan mein jo aap chunana banaane ke lie, chunaav dar chunaav, din dar din.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Chingaariyon Ka Shahar',
        narration: 'Pataakhe kshitij ko seenate hain, roshan, chhote aur sachche. Aap aur Riley kathin bhaagon ko saaf-saaf bolata hai, phir hansata hai ki aap donon kitane maanavee hain--phisalana, aasha se bhara, apane pyaar mein jiddi. Jab aakharee phool muraja jaata hai, to andhera phir se maitr Poorna lagata hai, shoonyata ke bajaae ek kambal. Aap jaldee nahin karate hue, baarish se chaandee ki sadakon se saath mein ghar jaate hain, aage badhane ke lie kaaphee samay ek upahaar kee tarah failaa hua hai jise aap aakhirakaar praapt karane ke yogya mahasoos karate hain. Vah shehar jo ek baar aapake alavida ko rakhata tha ab aapake svaagat ko gavaah hai.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Ek Aur Shuruaat',
        narration: 'Subah aapako ek kone ke cafe mein paati hai, dhoop roshani un khidakiyon se bahati hai jo ek baar aapake alavida ko pratibimbhit karatee thi. Aap aur Riley kopee aur coffee ke saath aamane-saamane baithate hain, majaboot aadhaaron par punh nirmit sambandh ke vaastukaala ko banate hain. Pehale jaisa pyaar nahin--kuchh adhik buddhimaan, adhik imaandaar, adhik leechad. Aap hamesha ke lie vaada nahin karate; aap lagaataar dikhaane, lagaataar chunane, lagaataar nirmaan karane ka vaada karate hain. Kuchh prem laut aate hain; kuchh prem aapako behtar tareeke se pyaar karana sikhaate hain. Aapaka, shaayad, donon hai.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Shaant Apartments',
        narration: 'Aapake kiraaye ke kamare mein waapas, neon sanket ka neela prakaash kinaaron par naram ho jaata hai. Aap chaay banaate hain, khidakee kholate hain, aur baarish ko apana vaakya samaapt karane dete hain. Aaj raat nahin, aap faisala karate hain--lekin kabhee nahin bhee nahin. Aap Riley ko ek aakhiree sandesh bhejate hain, unakee khushhee ke lie ek kaamana jo keval samaapti laa sakati hai imaandaaree se vyakt kee jaati hai. Jab aap aur kahane ke lie tayaar honge, kisee naye ya shaayad apane aap ke lie, shehar ab bhee yahin hoga. Ab ke lie, aap baarish ko aapako sulaane ke lie gaane dete hain, dusare maukon ke lie aabhari hai chahe ve aapakee aasha se alag daravaazon ki ore le jaayein.',
        choices: {},
      },
    },
  },

  // Dutch
  nl: {
    title: 'Stad van Tweede Kansen',
    description: 'Een plotselinge stortbui zet je vast in een stad die je ooit thuis noemde--en waar je een onvoltooide liefde achterliet. Een nacht wordt een keten van kleine, moedige keuzes: een cafe, een boekwinkel, een dak, een veerboot. Vind je weg terug naar de waarheid--of naar iets geheel nieuws.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Aankomst in de Regen',
        narration: 'Nachtregen maakt de laan glad als een spiegel, neon gesmeerd als penseelstreken over het asfalt. Je koffer is zwaarder dan hij zou moeten zijn, vol met dingen die je de vorige keer niet zei. Een windvlaag duwt je onder een luifel; de stad ruikt naar koffie en donder. Ergens rinkelt een treinbel. Je zegt tegen jezelf dat het maar een nacht is--genoeg om te beslissen of je bij Riley zult aankloppen.',
        choices: {
          'story-8742190384-c1': {
            text: 'Het cafe in duiken voor warmte',
            description: 'Je kunt je gedachten--en moed--verzamelen',
          },
          'story-8742190384-c2': {
            text: 'In plaats daarvan naar het station gaan',
            description: 'Treinen betekenen uitgangen--en aankomsten',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Warme Schuilplaats',
        narration: 'Melk draait in een kleine melkweg bovenop je latte terwijl de ramen druppelen van de regen. De barista praat over een laatavondlezing in de boekwinkel verderop in de straat. Je telefoon trilt op het schoteltje, Rileys naam nog steeds vastgepind bovenaan je berichten als een belofte die je nooit hield. De kop warmt je handen; je moed borrelt langzamer op. Je moet je volgende stap zorgvuldig beslissen.',
        choices: {
          'story-8742190384-c3': {
            text: 'Vragen naar de lezing in de boekwinkel',
            description: 'Verhalen kunnen deuren openen',
          },
          'story-8742190384-c4': {
            text: 'Het bericht van Riley controleren',
            description: 'Zie welke woorden op je wachten',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Fragmenten van Hoop',
        narration: 'De barista noemt iemand die op Riley lijkt die gisteren naar je vroeg. Je telefoon toont een simpel berichtje: "In de stad?" De toeval maakt je huid kriebelen. De regen roffelt harder tegen het glas, alsof ze je naar een beslissing duwt. Je kunt dit spoor volgen in de boekwinkel, of direct antwoorden en alles veranderen.',
        choices: {
          'story-8742190384-c5': {
            text: 'Naar de boekwinkel lopen om te onderzoeken',
            description: 'Laat het spoor je voeten leiden',
          },
          'story-8742190384-c6': {
            text: 'Riley een voorzichtig antwoord sturen',
            description: '"Nog hier. Kunnen we praten?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Uitsteken',
        narration: 'Je bericht zweeft in de digitale ether, een kleine vlag van wapenstilstand opgehesen in de nacht. De boekwinkel wacht drie blokken naar het oosten, haar ramen gloeiend als een lantaarn in de regen. Elk pad leidt naar dezelfde onzekerheid. Je hart klopt van het gewicht van woorden die te lang onuitgesproken zijn gebleven. Je moet kiezen hoe je de stilte tussen jullie overbrugt.',
        choices: {
          'story-8742190384-c7': {
            text: 'Wachten op Rileys reactie',
            description: 'Laat hen de voorwaarden bepalen',
          },
          'story-8742190384-c8': {
            text: 'Toch naar de boekwinkel gaan',
            description: 'Beweging verslaat wachten',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Woorden Komen Aan',
        narration: 'Je telefoon licht op: "Station. Tien minuten." De woorden zijn spaarzaam, maar het is een opening. Je pakt je jas, hart kloppend tegen je ribben als een vogel tegen glas. De regen is niet gestopt, maar je merkt het niet meer. Elke stap naar het station voelt als het oversteken van een drempel die je niet ongedaan kunt maken. Tijd comprimeert; het moment breidt zich uit.',
        choices: {
          'story-8742190384-c9': {
            text: 'Snel naar het station lopen',
            description: 'Laat hen niet wachten',
          },
          'story-8742190384-c10': {
            text: 'Even de tijd nemen om te bezinnen',
            description: 'Adem voor de afrekening',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Aankomst op het Station',
        narration: 'Het station zoemt van vertrekken, borden flikkeren letters als rusteloze oogleden. Een lach die je kent drijft vanaf de tussenverdieping--vertrouwd als een favoriet lied. Je bevriest halverwege de trap, koffer bonkend op de trede. Daar, bij de koffiekiosk, staat Riley met regen-bespatte haren en een uitdrukking die je niet helemaal kunt lezen. Je adem stokt.',
        choices: {
          'story-8742190384-c11': {
            text: 'Hun naam roepen',
            description: 'Laat het station dit getuigen',
          },
          'story-8742190384-c12': {
            text: 'Langzaam naderen, jezelf laten zien',
            description: 'Geef hen tijd om te wennen',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Herkenning',
        narration: 'Riley draait zich om, en de tijd hakkelt. Hun ogen worden wijd, dan zachter met iets gecompliceerds--pijn, hoop, aarzeling. "Je bent gekomen," zeggen ze, en het klinkt als een beschuldiging en verlichting verstrengeld. Het lawaai van het station vervaagt tot een gefluister. Je hebt dit moment duizend keer gerepeteerd in je hoofd, maar nu lost al je speeches op. Je moet kiezen welke waarheid je eerst spreekt.',
        choices: {
          'story-8742190384-c13': {
            text: 'Excuses aanbieden voor weggaan',
            description: 'Begin met het moeilijkste feit',
          },
          'story-8742190384-c14': {
            text: 'Vragen hoe het met hen gaat',
            description: 'Begin zachtjes, bouw de brug',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Voorzichtige Brug',
        narration: 'Riley luistert, echt luistert, op een manier die je was vergeten dat mensen konden. Hun koffie wordt koud tussen hun handen terwijl je spreekt. De menigten op het station stromen om je heen als water om stenen. Iets fragiels begint te vormen in de ruimte tussen je woorden--een mogelijkheid, een misschien, een deur die opengaat. Je moet voorstellen waar dit gesprek kan doorgaan.',
        choices: {
          'story-8742190384-c15': {
            text: 'Voorstellen om naar het park te wandelen',
            description: 'Beweging kan spanning verlichten',
          },
          'story-8742190384-c16': {
            text: 'Het dak voorstellen dat jullie allebei leuk vonden',
            description: 'Gedeeld geheugen als fundament',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Gedeelde Stappen',
        narration: 'Je loopt samen door straten die zich je voetstappen herinneren. De regen is verzacht tot een mist die zich aan je haar vastklampt als herinneringen. Riley loopt dicht genoeg dat jullie schouders elkaar raken, ver genoeg dat je hun gedachten niet kunt lezen. Je passeert de oude galerie waar jullie eerste afspraakje was, de bakkerij waar jullie ruzie maakten en het weer goedmaakten. Elk herkenningspunt is een geest die je moet beslissen te erkennen.',
        choices: {
          'story-8742190384-c17': {
            text: 'De galerie noemen terwijl je passeert',
            description: 'Eer de geschiedenis tussen jullie',
          },
          'story-8742190384-c18': {
            text: 'Focus op het huidige moment',
            description: 'Laat het verleden nu rusten',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Aankomstpunt',
        narration: 'Je bereikt de oude bank in het rivierpark waar je ooit praatte tot het ochtendgloren. Het hout is gladgesleten door talloze gesprekken, talloze bekentenissen. Riley gaat zitten, ruimte latend die uitnodiging of afstand zou kunnen zijn. De stadslampen dansen op het water als verspreide sterren. Je bent hier, samen, na alles. Het moment voelt als in de lucht hangend, wachtend tot je leven inademt in wat er vervolgens komt.',
        choices: {
          'story-8742190384-c19': {
            text: 'Dichtbij zitten en beginnen uit te leggen',
            description: 'Bied eindelijk de volle waarheid aan',
          },
          'story-8742190384-c20': {
            text: 'Vragen wat ze van je nodig hebben',
            description: 'Laat hen de genezing leiden',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Eerlijke Grond',
        narration: 'Woorden stromen als de rivier naast je--soms zacht, soms stortvloedig. Je spreekt over angst en trots, over de stilte die tussen jullie groeide als klimop, over de nachten dat je bijna belde. Riley ontmoet je ogen, en je ziet je eigen verlangen daar weerspiegeld. De bank houdt jullie beiden terwijl de waarheid neerslaat, zwaar en nodig. Je bent aangekomen bij de drempel van beslissing. Hier splitsen de paden echt.',
        choices: {
          'story-8742190384-c21': {
            text: 'Voorstellen om samen met de veerboot te varen',
            description: 'Laat het water je vooruit dragen',
          },
          'story-8742190384-c22': {
            text: 'Voorstellen om hier en nu opnieuw te beginnen',
            description: 'Een nieuw hoofdstuk op bekende bodem',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Aan de Waterkant',
        narration: 'Het veerbootstation gloeit tegen het donkere water, een belofte van vertrek en terugkeer. Rileys hand vindt de jouwe, aarzelend maar warm. "Ik ben bang," geven ze toe, en je knijpt in hun vingers in erkenning. Angst is de prijs van hoop, besef je. De boottoeter klinkt, laag en geduldig. Je staat aan de rand van iets groots--een oceaan van mogelijkheden, of het diepe water van oude patronen.',
        choices: {
          'story-8742190384-c23': {
            text: 'Samen aan boord van de veerboot gaan',
            description: 'Zet je in voor de reis',
          },
          'story-8742190384-c24': {
            text: 'Voorstellen om in plaats daarvan vanaf de pier te kijken',
            description: 'Blijf verankerd, blijf veilig',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Nieuwe Bodem',
        narration: 'Je spreekt over opnieuw beginnen--niet waar je bent gebleven, maar waar je nu bent, twee veranderde mensen met gedeelde geschiedenis en afzonderlijke groei. Riley knikt langzaam, nadenkend. "Dat betekent sommige dingen loslaten," zeggen ze, en je weet dat ze gelijk hebben. Het verleden is een tuin die je niet kunt ontbloten, maar je kunt nu kiezen wat je verzorgt. De stad om je heen ademt met mogelijkheden.',
        choices: {
          'story-8742190384-c25': {
            text: 'Naar het waterfront festival wandelen',
            description: 'Vier dit fragiele nieuwe begin',
          },
          'story-8742190384-c26': {
            text: 'Een rustige plek vinden om morgen te plannen',
            description: 'Bouw het fundament zorgvuldig',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Wateren Oversteken',
        narration: 'De veerboot vaart weg van de pier, stadslampen lossen op in een ketting op het donkere water. Je leunt tegen de reling met Riley naast je, schouders elkaar rakend. Het gesprek is verzacht tot comfortabele stilte, af en toe onderbroken door kleine observaties--een sterrenbeeld, een passerend bootje, een herinnering aangewakkerd door de zoute lucht. Je beweegt, letterlijk en figuurlijk, naar een onbekende oever.',
        choices: {
          'story-8742190384-c27': {
            text: 'Spreken over praktische morgens',
            description: 'Maak plannen, bouw structuur',
          },
          'story-8742190384-c28': {
            text: 'Houd simpelweg het moment vast',
            description: 'Laat het water jullie beiden dragen',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Verankerd Uitzicht',
        narration: 'Je blijft op de pier, kijkend hoe de veerboot oplost in de donkere horizon. Riley staat dichtbij, gehuld in gedachten evenzeer als in jas. "We zijn goed in bijna," zeggen ze zacht, en de woorden prikken met waarheid. Bijna praten, bijna blijven, bijna volledig liefhebben. Je voelt het gewicht van al je bijna\'s neerdrukken. Maar hier staand, voel je iets verschuiven.',
        choices: {
          'story-8742190384-c29': {
            text: 'Beloven om te stoppen met bijna-doen',
            description: 'Zet je eindelijk in voor volheid',
          },
          'story-8742190384-c30': {
            text: 'Het patroon eerlijk erkennen',
            description: 'Kijk helder voordat je springt',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Lichten en Muziek',
        narration: 'Het waterfront festival tilt vonken in de donkere lucht, vuurwerk bloeiend als reusachtige bloemen van licht. Muziek weeft zich door de menigte, en je vindt jezelf dansen zonder het te willen, lichamen die elkaars ritmes herinneren. Riley lacht, echt lacht, en het geluid maakt iets strak in je borst los. Om je heen vieren vreemden hun eigen verhalen, hun eigen tweede kansen.',
        choices: {
          'story-8742190384-c31': {
            text: 'Ze kussen als het vuurwerk zijn hoogtepunt bereikt',
            description: 'Laat vreugde voor je beslissen',
          },
          'story-8742190384-c32': {
            text: 'Je hoop voor de toekomst fluisteren',
            description: 'Spreek je dromen hardop uit',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Intieme Kaarten',
        narration: 'Je vindt een vierentwintiguurs eetcafe dat gloeit als een vuurtoren op de rustige straat. Over taart en koffie schets je de contouren van een gedeelde toekomst--geen grote verklaringen, maar kleine praktische zaken. Wie wie belt, hoe vaak, wat jullie allebei nodig hebben om je veilig te voelen. Riley tekent cirkels op het servet, je levens verbindend met zorgvuldige inkt. Het is ondramatisch, onromantisch, en kostbaarder dan enig gebaar.',
        choices: {
          'story-8742190384-c33': {
            text: 'Sleutels uitwisselen als symbool',
            description: 'Fysiek vertrouwen, tastbare belofte',
          },
          'story-8742190384-c34': {
            text: 'Eens worden om morgen weer af te spreken',
            description: 'Een stap, dan nog een',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Samen Bouwen',
        narration: 'Je spreekt over appartementen en schema\'s, over de logistiek van liefde die langer meegaat dan verliefdheid. Riley ontmoet je praktische instelling met die van hen, en samen bouwen jullie een steiger stevig genoeg om echt leven te houden. De veerboot zet haar overtocht voort, maar je hebt al een oever bereikt--vaste grond na stormachtige zeeen. Morgen wacht met al zijn gewone uitdagingen.',
        choices: {
          'story-8742190384-c35': {
            text: 'Zet je in voor het werk van "ons"',
            description: 'Kies het pad van partnerschap',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Perfect Moment',
        narration: 'De wereld houdt zijn adem in. Vuurwerk verft Rileys gezicht in goud en roze, en je kust hen terwijl de lucht boven je opbloeit. Het is geen perfecte liefde--je hebt elkaars gebreken te duidelijk gezien daarvoor--maar het is een perfect moment, en je kiest ervoor te vertrouwen dat er meer momenten zullen volgen. De menigte juicht om je heen, viert je privé vreugde met hun publieke lawaai.',
        choices: {
          'story-8742190384-c36': {
            text: 'Laat deze vreugde je vooruit dragen',
            description: 'Vertrouw op het gevoel, vertrouw op hen',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Vaste Grond',
        narration: 'Je doet beloften die je van plan bent te houden, eenvoudig gesproken zonder opsmuk. Riley ontvangt ze met knikkende ernst, begrijpend het gewicht van woorden na zoveel stilte. Het neon van het eetcafe zoemt zacht terwijl de nacht rond jullie verdiept. Je hebt niet de vlam van passie gekozen maar de steady burn van liefde, en het voelt als thuiskomen in een plek waar je jezelf nooit helemaal hebt toegestaan te wonen.',
        choices: {
          'story-8742190384-c37': {
            text: 'Opnieuw beginnen, anders',
            description: 'Een nieuw hoofdstuk, beter geschreven',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Zachte Scheiding',
        narration: 'Je scheidt met eerlijkheid in plaats van hoop, erkennend dat sommige liefdesverhalen mooi zijn zonder permanent te zijn. Rileys ogen glinsteren maar ze knikken, begrijpend. "Bedankt voor vanavond," zeggen ze, en je weet dat ze de afsluiting bedoelen, niet alleen het gezelschap. Je loopt in tegengestelde richtingen, lichter door de gesproken waarheid, verdrietig over wat niet gered kan worden.',
        choices: {
          'story-8742190384-c38': {
            text: 'Neem de les mee vooruit',
            description: 'Sommige eindes zijn ook geschenken',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Over het Water',
        narration: 'De veerboot merert aan aan de overkant, stadslampen twinkelend over het water als herinneringen. Je stapt samen uit, Rileys hand stevig in de jouwe. Je praat over gewone dingen--wat te koken, welke plant je steeds vergeet water te geven, wie aan de beurt is om koffie te zetten. Beloften arriveren zonder ceremonie, geweven in de stof van praktische morgen. Het kielzog schrijft een nieuwe lijn achter je, wist niets maar draagt je vooruit in het leven dat je kiest te bouwen, keuze na keuze, dag na dag.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Stad van Vonken',
        narration: 'Vuurwerk steekt de skyline in elkaar, helder en kort en waar. Jij en Riley spreken de moeilijke delen schoon, dan lachen om hoe menselijk jullie allebei zijn--houterig, hoopvol, koppig in jullie liefde. Wanneer de laatste bloei vervaagt, voelt het donker weer vriendelijk aan, een deken in plaats van een leegte. Je loopt samen naar huis door regen-zilveren straten, geen haast, genoeg tijd dat zich uitstrekt als een cadeau dat je je eindelijk waardig voelt om te ontvangen. De stad die ooit je afscheid bewaarde, getuigt nu van je begroeting.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Nog Een Begin',
        narration: 'De ochtend vindt je in een hoekcafe, zonlicht stromend door ramen die ooit je afscheid weerspiegelden. Jij en Riley zitten tegenover elkaar met notitieboeken en koffie, schetsend de architectuur van een relatie herbouwd op sterkere fundamenten. Niet dezelfde liefde als voorheen--iets wijzers, eerlijkers, veerkrachtigers. Je belooft niet voor altijd; je belooft om blijven opdagen, blijven kiezen, blijven bouwen. Sommige liefdes keren terug; sommige liefdes leren je beter liefhebben. De jouwe, misschien, is beide.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Rustig Appartement',
        narration: 'Terug in je gehuurde kamer, het blauwe gloed van het neonbord zacht aan de randen. Je zet thee, opent het raam, en laat de regen haar zin afmaken. Niet vanavond, beslis je--maar niet nooit. Je stuurt Riley een laatste bericht, een wens voor hun geluk uitgedrukt met de oprechtheid die alleen afsluiting kan brengen. De stad zal er nog zijn wanneer je klaar bent om meer te zeggen, tegen iemand nieuw of misschien tegen jezelf. Voor nu laat je de regen je in slaap zingen, dankbaar voor tweede kansen zelfs wanneer ze leiden naar andere deuren dan je hoopte.',
        choices: {},
      },
    },
  },

  // Polish
  pl: {
    title: 'Miasto Drugich Szans',
    description: 'Nagla ulewa zatrzymuje cie w miescie, ktore kiedys nazywales domem--i gdzie zostawiles niedokonczona milosc. Jedna noc staje sie lancuchem malych, odwaznych wyborow: kawiarnia, ksiegarnia, dach, prom. Znajdz droge powrotna do prawdy--lub ku czemus calkowicie nowemu.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Przyjazd w Deszczu',
        narration: 'Nocny deszcz sprawia, ze aleja staje sie lustrzana, neon rozmazany jak pociagniecia pedzlem po asfalcie. Twoja walizka jest ciezsza, niz powinna byc, pelna rzeczy, ktorych nie powiedziales ostatnim razem. Podmuch wiatru pcha cie pod zadaszenie; miasto pachnie kawa i grzmotem. Gdzies dzwoni dzwonek pociagu. Mowisz sobie, ze to tylko jedna noc--wystarczajaco dlugo, aby zdecydowac, czy zapukasz do drzwi Riley.',
        choices: {
          'story-8742190384-c1': {
            text: 'Schowac sie do kawiarni dla ciepla',
            description: 'Mozesz zebrac mysli--i odwage',
          },
          'story-8742190384-c2': {
            text: 'Zamiast tego udac sie na dworzec',
            description: 'Pociagi oznaczaja wyjscia--i przyjazdy',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Cieple Schronienie',
        narration: 'Mleko wiruje w mala galaktyke na twoim latte, podczas gdy okna pokrywaja sie kroplami deszczu. Barman rozmawia o poznajej lekturze w ksiegarni na drugim koncu ulicy. Twoj telefon wibruje na spodeczku, imie Riley nadal przypiete na gorze twoich wiadomosci jak obietnica, ktorej nigdy nie dotrzymales. Filiżanka ogrzewa twoje dlonie; twoja odwaga wolniej sie gotuje. Musisz rozwaznie zdecydowac o nastepnym kroku.',
        choices: {
          'story-8742190384-c3': {
            text: 'Zapytac o lekture w ksiegarni',
            description: 'Historie moga otwierac drzwi',
          },
          'story-8742190384-c4': {
            text: 'Sprawdzic wiadomosc od Riley',
            description: 'Zobacz, jakie slowa na ciebie czekaja',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Fragmenty Nadziei',
        narration: 'Barman wspomina o kims, kto brzmi jak Riley, kto wczoraj o ciebie pytal. Twoj telefon pokazuje prosta wiadomosc: "W miescie?" Zbieg okolicznosci sprawia, ze twoja skora cierpnie. Deszcz uderza mocniej w szybe, jakby zmuszajac cie do decyzji. Mozesz podazyc tym tropem do ksiegarni, lub odpowiedziec bezposrednio i wszystko zmienic.',
        choices: {
          'story-8742190384-c5': {
            text: 'Pojsc do ksiegarni, aby zbadac',
            description: 'Niech trop prowadzi twoje stopy',
          },
          'story-8742190384-c6': {
            text: 'Wyslac Riley ostrozna odpowiedz',
            description: '"Wciaz tu jestem. Mozemy porozmawiac?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Wyciagniecie Reki',
        narration: 'Twoja wiadomosc unosi sie w eterze cyfrowym, mala flaga rozejmu wzniesiona w nocy. Ksiegarnia czeka trzy przecznice na wschod, jej okna zaswiecaja sie jak latarnia w deszczu. Kazda sciezka prowadzi do tej samej niepewnosci. Twoje serce bije z ciezarem slow niewypowiedzianych zbyt dlugo. Musisz wybrac, jak mostkowac cisze miedzy wami.',
        choices: {
          'story-8742190384-c7': {
            text: 'Poczekac na odpowiedz Riley',
            description: 'Niech oni ustalaja warunki',
          },
          'story-8742190384-c8': {
            text: 'Pojsc do ksiegarni mimo wszystko',
            description: 'Ruch pokonuje czekanie',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Slowa Przychodza',
        narration: 'Twoj telefon sie rozswietla: "Dworzec. Dziesiec minut." Slowa sa skape, ale to otwarcie. Zbierasz plaszcz, serce walac w zebra jak ptak o szybe. Deszcz nie ustal, ale juz go nie zauwazasz. Kazdy krok w strone dworca jest jak przekroczenie progu, ktorego nie mozesz cofnac. Czas sie kompresuje; chwila rozszerza sie.',
        choices: {
          'story-8742190384-c9': {
            text: 'Szybko isc na dworzec',
            description: 'Nie kaz im czekac',
          },
          'story-8742190384-c10': {
            text: 'Chwile zebrac sie w sobie',
            description: 'Oddychaj przed rozliczeniem',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Przyjazd na Dworzec',
        narration: 'Dworzec brzeczy od odjazdow, tablice migaja literami jak niespokojne powieki. Smiech, ktory znasz, unosi sie z antresoli--znajomy jak ulubiona piosenka. Zamierasz w polowie schodow, walizka lomoczac o stopien. Tam, przy kiosku z kawa, stoi Riley z wlosami nakrapianymi deszczem i wyrazem twarzy, ktorego nie potrafisz do konca odczytac. Odbiera ci dech.',
        choices: {
          'story-8742190384-c11': {
            text: 'Zawolac ich imie',
            description: 'Niech dworzec bedzie swiadkiem',
          },
          'story-8742190384-c12': {
            text: 'Podejsc powoli, dajac sie zobaczyc',
            description: 'Daj im czas na przystosowanie sie',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Rozpoznanie',
        narration: 'Riley odwraca sie, a czas sie zacina. Ich oczy sie poszerzaja, potem zmniejszaja z czymś skomplikowanym--bol, nadzieja, wahanie. "Przyszedles," mowia, i brzmi to jak oskarzenie i ulga splecione razem. Halas dworca cichnie do szmeru. Probujesz ten moment tysiac razy w glowie, ale teraz wszystkie twoje przemowy sie rozpuszczaja. Musisz wybrac, ktora prawde powiedziec pierwsza.',
        choices: {
          'story-8742190384-c13': {
            text: 'Przeprosic za wyjazd',
            description: 'Zacznij od najtrudniejszej prawdy',
          },
          'story-8742190384-c14': {
            text: 'Zapytac, jak sie miewaja',
            description: 'Zacznij lagodnie, zbuduj most',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Niepewny Most',
        narration: 'Riley slucha, naprawde slucha, w sposob, o ktorym zapomniales, ze ludzie potrafia. Ich kawa stygnie miedzy dlonmi, gdy mowisz. Thumy na dworcu plyna wokol ciebie jak woda wokol kamieni. Cos kruchego zaczyna sie formowac w przestrzeni miedzy twoimi slowami--mozliwosc, moze, otwierajace sie drzwi. Musisz zasugerowac, gdzie moze byc kontynuowana ta rozmowa.',
        choices: {
          'story-8742190384-c15': {
            text: 'Zasugerowac spacer do parku',
            description: 'Ruch moze zluzowac napiecie',
          },
          'story-8742190384-c16': {
            text: 'Zaproponowac dach, ktory oboje kochaliscie',
            description: 'Wspolne wspomnienie jako fundament',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Wspolne Kroki',
        narration: 'Idziecie razem ulicami, ktore pamietaja wasze kroki. Deszcz zlagodzil sie do mgly, ktora przylega do twoich wlosow jak wspomnienia. Riley idzie na tyle blisko, ze wasze ramiona sie ocieraja, na tyle daleko, ze nie mozesz odczytac ich mysli. Mijacie stara galerie, gdzie mieliscie pierwsza randke, piekarnie, gdzie sie poklocaliscie i pogodziliscie. Kazdy punkt orientacyjny to duch, ktorego musisz zdecydowac sie uznac.',
        choices: {
          'story-8742190384-c17': {
            text: 'Wspomniec o galerii, mijajac ja',
            description: 'Uhonoruj historie miedzy wami',
          },
          'story-8742190384-c18': {
            text: 'Skupic sie na chwili obecnej',
            description: 'Pozwol przeszlosci odpoczac na razie',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Punkt Przyjazdu',
        narration: 'Docierasz do starej lawki w parku nad rzeka, gdzie kiedys rozmawialiscie do switu. Drewno jest wygladzone przez niezliczone rozmowy, niezliczone wyznania. Riley siada, zostawiajac przestrzen, ktora moze byc zaproszeniem lub dystansem. Swiatla miasta tancza na wodzie jak rozrzucone gwiazdy. Jestescie tu, razem, po wszystkim. Chwila wydaje sie zawieszona, czekajac, az tchniesz zycie w to, co nadchodzi.',
        choices: {
          'story-8742190384-c19': {
            text: 'Usiasc blisko i zaczac tlumaczyc',
            description: 'W koncu podaj pelna prawde',
          },
          'story-8742190384-c20': {
            text: 'Zapytac, czego od ciebie potrzebuja',
            description: 'Pozwol im prowadzic uzdrowienie',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Uczciwa Ziemia',
        narration: 'Slowa plyna jak rzeka obok ciebie--czasem lagodnie, czasem rwaco. Mowisz o strachu i dumie, o ciszy, ktora rosla miedzy wami jak bluszcz, o nocach, gdy prawie dzwoniles. Riley spotyka twoje oczy, i widzisz tam odbite wlasne tesknoty. Lawka trzyma was oboje, gdy prawda osiada, ciezka i konieczna. Dotarles do progu decyzji. To tutaj sciezki naprawde sie rozchodza.',
        choices: {
          'story-8742190384-c21': {
            text: 'Zasugerowac przejazd promem razem',
            description: 'Pozwol wodzie niesc cie naprzod',
          },
          'story-8742190384-c22': {
            text: 'Zaproponowac zaczecie od nowa, tu i teraz',
            description: 'Nowy rozdzial na znajomej ziemi',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Nad Brzegiem Wody',
        narration: 'Terminal promowy swieci na tle ciemnej wody, obietnica wyjazdu i powrotu. Dlon Riley odnajduje twoja, niepewna ale ciepla. "Boje sie," przyznaja, a ty sciskasz ich palce w uznaniu. Strach jest cena nadziei, zdajesz sobie sprawe. Syrena statku brzmi, nisko i cierpliwie. Stoisz na skraju czegos ogromnego--oceanu mozliwosci, lub glebokich wod starych wzorow.',
        choices: {
          'story-8742190384-c23': {
            text: 'Wsiasc na prom razem',
            description: 'Zobowiaz sie do podrozy',
          },
          'story-8742190384-c24': {
            text: 'Zasugerowac ogladanie z mola zamiast tego',
            description: 'Zostan zacumowany, zostan bezpieczny',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Swieza Ziemia',
        narration: 'Mowisz o zaczynaniu od nowa--nie od miejsca, w ktorym skonczyliscie, ale od miejsca, w ktorym jestescie teraz, dwoje zmienionych ludzi ze wspolna historia i odrebnym wzrostem. Riley powoli kiwa glowa, zastanawiajac sie. "To oznacza puscic niektore rzeczy," mowia, i wiesz, ze maja racje. Przeszlosc jest ogrodem, ktorego nie mozesz wykorzenic, ale mozesz wybrac, o co teraz dbac. Miasto wokol ciebie oddycha mozliwosciami.',
        choices: {
          'story-8742190384-c25': {
            text: 'Pojsc na festival nabrzeza',
            description: 'Swietuj ten kruchy nowy poczatek',
          },
          'story-8742190384-c26': {
            text: 'Znac ciche miejsce, aby zaplanowac jutro',
            description: 'Buduj fundament ostroznie',
          },
        },
      },
      'story-8742190384-14':
      {
        title: 'Przekraczanie Wod',
        narration: 'Prom odbija od nabrzeza, swiatla miasta rozwiazuja sie w naszyjnik na ciemnej wodzie. Opierasz sie o balustrade z Riley obok, ramiona sie dotykaja. Rozmowa zlagodniala do wygodnej ciszy, przerywanej od czasu do czasu malymi spostrzezeniami--konstelacja, przeplywajaca lodz, wspomnienie rozniecone slona powietrzem. Poruszasz sie, doslownie i w przenosni, w strone nieznanej brzegu.',
        choices: {
          'story-8742190384-c27': {
            text: 'Mowic o praktycznych jutrach',
            description: 'Rob plany, buduj strukture',
          },
          'story-8742190384-c28': {
            text: 'Po prostu zatrzymac chwile',
            description: 'Pozwol wodzie niesc was oboje',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Zacumowany Widok',
        narration: 'Zostajesz na molu, obserwujac, jak prom rozpuscia sie w ciemnym horyzoncie. Riley stoi blisko, owinity myslami tak samo jak plaszczem. "Jestesmy dobrzy w prawie," mowia cicho, a slowa pikna prawda. Prawie rozmawiac, prawie zostac, prawie kochac w pelni. Czujesz ciezar wszystkich swoich prawie cisnac. Ale stojac tutaj, czujesz cos sie zmieniajacego.',
        choices: {
          'story-8742190384-c29': {
            text: 'Obiecac przestac prawie-robic',
            description: 'Zobowiaz sie do pelni, wreszcie',
          },
          'story-8742190384-c30': {
            text: 'Uczciwie uznac wzorzec',
            description: 'Patrz jasno, zanim skoczysz',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Swiatla i Muzyka',
        narration: 'Festiwal nabrzeza wznosi iskry w ciemne niebo, fajerwerki kwitna jak olbrzymie kwiaty swiatla. Muzyka przenika przez thum, i znajdujecie sie tanczacy niechcac, ciala pamietajace rytmy siebie nawzajem. Riley smieje sie, naprawde smieje, a dzwiek rozluznia cos napisanego w twojej piersi. Wokol ciebie obcy swietuja wlasne historie, wlasne drugie szanse.',
        choices: {
          'story-8742190384-c31': {
            text: 'Pocalowac ich, gdy fajerwerki osiagaja szczyt',
            description: 'Pozwol radosci zdecydowac za ciebie',
          },
          'story-8742190384-c32': {
            text: 'Szeptac swoje nadzieje na przyszlosc',
            description: 'Mow swoje marzenia na glos',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Intymne Mapy',
        narration: 'Znajdujecie dwudziestoczterogodzinna restauracje, swiecaca jak latarnia na cichej ulicy. Nad ciastem i kawa szkicujecie zarysy wspolnej przyszlosci--nie wielkie deklaracje, ale male praktycznosci. Kto do kogo zadzwoni, jak czesto, czego oboje potrzebujecie, aby czuc sie bezpiecznie. Riley rysuje kolka na serwetce, laczac wasze zycia staranna atramentem. To jest niedramatyczne, nieromantyczne, i cenniejsze niz jakikolwiek gest.',
        choices: {
          'story-8742190384-c33': {
            text: 'Wymienic sie kluczami jako symbolem',
            description: 'Fizyczne zaufanie, namacalna obietnica',
          },
          'story-8742190384-c34': {
            text: 'Zgodzic sie spotkac jutro ponownie',
            description: 'Jeden krok, potem nastepny',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Budowanie Razem',
        narration: 'Mowisz o mieszkaniach i grafikach, o logistyce milosci, ktora przetrwa zauroczenie. Riley spotyka twoja praktycznosc swoja, i razem budujecie rusztowanie wystarczajaco mocne, by utrzymac prawdziwe zycie. Prom kontynuuje swoje przeplyniecie, ale juz dotarles do brzegu--twardej ziemi po burzliwych morzach. Jutro czeka ze wszystkimi swoimi zwyczajnymi wyzwaniami.',
        choices: {
          'story-8742190384-c35': {
            text: 'Zobowiazac sie do pracy "nas"',
            description: 'Wybierz sciezke partnerstwa',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Idealna Chwila',
        narration: 'Swiat wstrzymuje oddech. Fajerwerki maluja twarz Riley na zloto i roze, i calujesz ich, gdy niebo kwitnie nad toba. To nie jest idealna milosc--widziales wady siebie nawzajem zbyt wyraznie, aby to bylo--ale to idealna chwila, i wybierasz zaufac, ze wiecej chwil bedzie nastepowac. Thum wiwatuje wokol ciebie, swietujac twoja prywatna radosc ich publicznym halasem.',
        choices: {
          'story-8742190384-c36': {
            text: 'Pozwol tej radosci niesc cie naprzod',
            description: 'Zaufaj uczuciu, zaufaj im',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Twarda Ziemia',
        narration: 'Skladasz obietnice, ktore zamierzasz dotrzymac, wypowiedziane po prostu bez ozdobnikow. Riley przyjmuje je z kiwajaca powaga, rozumiejac ciezar slow po tylu ciszy. Neon restauracji brzeczy cicho, gdy noc glebieje wokol was. Wybrales nie plomien namietnosci, ale stateczne ploniecie milosci, i czuje sie to jak powrot do domu w miejsce, w ktorym nigdy nie pozwoliles sobie w pelni zamieszkac.',
        choices: {
          'story-8742190384-c37': {
            text: 'Zaczac od nowa, inaczej',
            description: 'Nowy rozdzial, lepiej napisany',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Lagodne Rozstanie',
        narration: 'Rozstajecie sie z uczciwoscia zamiast nadzieja, uznajac, ze niektore historie milosne sa piekne bez bycia trwalymi. Oczy Riley blyszcza, ale kiwaja glowa, rozumiejac. "Dziekuje za te noc," mowia, i wiesz, ze maja na mysli zamkniecie, nie tylko towarzystwo. Idziecie w przeciwnych kierunkach, lzejsi od wypowiedzenia prawdy, smutni za tym, czego nie mozna uratowac.',
        choices: {
          'story-8742190384-c38': {
            text: 'Niesc lekcje naprzod',
            description: 'Niektore konce sa rowniez darami',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Przez Wode',
        narration: 'Prom cumuje przy dalekim brzegu, swiatla miasta migocza na wodzie jak wspomnienia. Wysiadacie razem, dlon Riley pewna w twojej. Mowicie o zwyczajnych rzeczach--co ugotowac, ktora rosline ciagle zapominasz podlac, czyja kolej, aby zrobic kawe. Obietnice przychodza bez ceremonii, utkane w tkanine praktycznego jutra. Slad pisze nowa linie za toba, nie wymazujac niczego, ale niosac cie naprzod w zycie, ktore wybierasz budowac, wybor po wyborze, dzien po dniu.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Miasto Iskier',
        narration: 'Fajerwerki zszywaja panorame, jasne, krotkie i prawdziwe. Ty i Riley mowicie trudne czesci czysto, potem smiejecie sie z tego, jak bardzo jestescie ludzcy--niezdarni, pelni nadziei, uparci w swojej milosci. Gdy ostatni kwiat zanika, ciemnosc znowu wydaje sie przyjazna, koc zamiast pustki. Idziecie razem do domu przez deszczowo-srebrne ulice, bez pospiechu, dosc czasu rozciaga sie przed toba jak dar, ktory w koncu czujesz sie godny otrzymania. Miasto, ktore kiedys trzymalo twoje pozegnanie, teraz jest swiadkiem twojego powitania.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Kolejny Poczatek',
        narration: 'Poranek znajduje was w naroznej kawiarni, swiatlo sloneczne przeplywajac przez okna, ktore kiedys odbijaly twoje pozegnanie. Ty i Riley siedzicie naprzeciw siebie z notatnikami i kawa, szkicujac architekture relacji odbudowanej na mocniejszych fundamentach. Nie ta sama milosc co wczesniej--cos madrzejszego, uczciwszego, bardziej odporniejszego. Nie obiecujecie na zawsze; obiecujecie, ze bedziecie nadal sie pojawiac, nadal wybierac, nadal budowac. Niektore milosci wracaja; niektore milosci ucza cie, jak lepiej kochac. Wasza, moze, jest obiema.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Ciche Mieszkanie',
        narration: 'Z powrotem w twoim wynajetym pokoju, blekitne swiecenie neonu zlagadnia sie na brzegach. Parzysz herbate, otwierasz okno i pozwalasz deszczowi dokonczyc swoje zdanie. Nie dzis wieczorem, decydujesz--ale nie nigdy. Wysylasz Riley ostatnia wiadomosc, zyczenie ich szczescia wyrazone szczeroscia, ktora moze przyniesc tylko zamkniecie. Miasto bedzie wciaz tu, gdy bedziesz gotow powiedziec wiecej, do kogos nowego lub moze do siebie. Na razie pozwalasz deszczowi spiewac cie do snu, wdzieczny za drugie szanse, nawet gdy prowadza do innych drzwi, niz miales nadzieje.',
        choices: {},
      },
    },
  },

  // Turkish
  tr: {
    title: 'Ikinci Sanslar Sehri',
    description: 'Ani bir yagmur sizi bir zamanlar ev olarak adlandirdiginiz bir sehirde--ve tamamlanmamis bir ask biraktiginiz yerde--mahsur birakir. Bir gece kucuk, cesur secimlerin bir zincirine donusur: bir kafe, bir kitapci, bir cati, bir feribot. Gercege geri donus yolunu bulun--ya da tamamen yeni bir seye dogru.',
    author: 'A. Marin',
    nodes: {
      'story-8742190384-1': {
        title: 'Yagmurda Varis',
        narration: 'Gece yagmuru bulvari bir aynaya donusturuyor, neon asfalt uzerine firca darbeleri gibi bulandi. Bavulunuz olmasi gerektiginden daha agir, son sefer soylemediginiz seylerle dolu. Bir yel sizi bir tentenin altina iter; sehir kahve ve gok gurultusu gibi kokuyor. Bir yerde bir tren cani caliyor. Kendinize sadece bir gece oldugunu soyluyorsunuz--Riley\'nin kapisini calip calmayacaginiza karar vermek icin yeterli zaman.',
        choices: {
          'story-8742190384-c1': {
            text: 'Isinmak icin kafeye sigin',
            description: 'Dusuncelerinizi--ve cesaretinizi--toplayabilirsiniz',
          },
          'story-8742190384-c2': {
            text: 'Bunun yerine istasyona git',
            description: 'Trenler cikislari--ve gelisleri--kastediyor',
          },
        },
      },
      'story-8742190384-2': {
        title: 'Sicak Siginak',
        narration: 'Sut latte-nizin uzerinde kucuk bir galaksi gibi donerken, camlar yagmur taneleriyle boncuklaniyor. Barista bir blok asagidaki kitapcinin gece okumasi hakkinda sohbet ediyor. Telefonunuz tabakcik uzerinde titriyor, Riley\'nin ismi hala mesajlarinizin en ustunde sabitlenmis, hic tutmadiginiz bir soz gibi. Fincan ellerinizi isitiyor; cesaretinizin kaynamasi daha yavas. Siradaki adiminizi dikkatlice kararlastirmalisiniz.',
        choices: {
          'story-8742190384-c3': {
            text: 'Kitapcinin okumasi hakkinda sor',
            description: 'Hikayeler kapi acabilir',
          },
          'story-8742190384-c4': {
            text: 'Riley\'den gelen mesaji kontrol et',
            description: 'Sizi bekleyen kelimelere bakin',
          },
        },
      },
      'story-8742190384-3': {
        title: 'Umut Parcalari',
        narration: 'Barista, Riley gibi gorunen ve dun sizi soran biri hakkinda bahsediyor. Telefonunuz basit bir mesaj gosteriyor: "Sehirde misin?" Tesaduf derinizi urpertiyor. Yagmur cami daha sert dovuyor, sanki sizi bir karara zorluyor. Bu izi kitapcida takip edebilir veya dogrudan yanit vererek her seyi degistirebilirsiniz.',
        choices: {
          'story-8742190384-c5': {
            text: 'Arastirmak icin kitapciya yuruyun',
            description: 'Iz ayaklarinizi yonlendirsin',
          },
          'story-8742190384-c6': {
            text: 'Riley\'ye dikkatli bir yanit gonderin',
            description: '"Hala buradayim. Konusabilir miyiz?"',
          },
        },
      },
      'story-8742190384-4': {
        title: 'Uzatmak',
        narration: 'Mesajiniz dijital eterde dalgalaniyor, gecede kaldirilan kucuk bir ateskes bayragi. Kitapci doguda uc blok otede bekliyor, pencereleri yagmurda bir fener gibi parliyor. Her iki yol da ayni belirsizlige goturuyor. Kalbiniz cok uzun sure soylenmemis kelimelerin agirligiyla carpiyor. Aranizdaki sessizligi nasil kopruleyeceginizi secmelisiniz.',
        choices: {
          'story-8742190384-c7': {
            text: 'Riley\'nin yanitini bekle',
            description: 'Sartlari onlar belirlesin',
          },
          'story-8742190384-c8': {
            text: 'Yine de kitapciya git',
            description: 'Hareket beklemeyi yener',
          },
        },
      },
      'story-8742190384-5': {
        title: 'Kelimeler Gelir',
        narration: 'Telefonunuz aydinlaniyor: "Istasyon. On dakika." Kelimeler kisadir, ama bir acilis. Paltonuzu topluyorsunuz, kalbiniz camdaki kus gibi kaburgalariniza carpiyor. Yagmur durmadi, ama artik fark etmiyor. Istasyona dogru her adim, geri alamayacaginiz bir esigi gecmek gibi hissettiriyor. Zaman sikisir; an genisler.',
        choices: {
          'story-8742190384-c9': {
            text: 'Hizla istasyona yuru',
            description: 'Onlari bekletme',
          },
          'story-8742190384-c10': {
            text: 'Kendini toparlamak icin bir an ayir',
            description: 'Hesaplasmadan once nefes al',
          },
        },
      },
      'story-8742190384-6': {
        title: 'Istasyona Varis',
        narration: 'Istasyon kalkislarla ugulduyor, panolar huzursuz goz kapaklari gibi harfleri tikliyor. Bildiginiz bir kahkaha ara kattan yukseliyor--favori bir sarki kadar tandik. Merdivenin yarida donakaliyorsunuz, bavul basamaga carpiyor. Iste, kahve kiosku yaninda, yagmur benekli saclari ve tam olarak okuyamadiginiz bir ifadeyle Riley duruyor. Nefesiniz kesiliyor.',
        choices: {
          'story-8742190384-c11': {
            text: 'Isimlerini seslen',
            description: 'Istasyonun sahit olmasina izin ver',
          },
          'story-8742190384-c12': {
            text: 'Yavas yaklas, kendini gormelerine izin ver',
            description: 'Onlara uyum saglamalari icin zaman ver',
          },
        },
      },
      'story-8742190384-7': {
        title: 'Tanima',
        narration: 'Riley donuyor ve zaman takiliyor. Gozleri buyuyor, sonra bir seylerle yumusuyor--aci, umut, tereddut. "Geldin," diyorlar ve bu bir suclama ve bir rahatlama gibi birlikte isitiliyor. Istasyon gurultusu fisiltiya donusuyor. Bu ani kafanizda bin kez prova ettiniz, ama simdi tum konusmalariniz cozuluyor. Once hangi gercegi soyleyeceginizi secmelisiniz.',
        choices: {
          'story-8742190384-c13': {
            text: 'Ayrildigin icin ozur dile',
            description: 'En zor gercekle basla',
          },
          'story-8742190384-c14': {
            text: 'Nasil olduklarini sor',
            description: 'Yumusak basla, kopruyu kur',
          },
        },
      },
      'story-8742190384-8': {
        title: 'Tereddutlu Kopru',
        narration: 'Riley dinliyor, gercekten dinliyor, insanlarin yapabilecegini unuttugunuz bir sekilde. Siz konusurken ellerinin arasindaki kahvesi soguyor. Istasyon kalabaliklari tastan etrafinda su gibi akiyor. Kelimeleriniz arasindaki boslukta kirilgan bir sey sekillenmeye basliyor--bir olasilik, belki, catlayan bir kapi. Bu konusmanin nerede devam edebilecegini onermeniz gerekiyor.',
        choices: {
          'story-8742190384-c15': {
            text: 'Parka yurumeyi oner',
            description: 'Hareket gerilimi hafifletebilir',
          },
          'story-8742190384-c16': {
            text: 'Ikinizin de sevdigi catiyi oner',
            description: 'Paylasilan hafiza temel olarak',
          },
        },
      },
      'story-8742190384-9': {
        title: 'Paylasilan Adimlar',
        narration: 'Birlikte adimlarinizi hatirlayan sokaklarda yuruyorsunuz. Yagmur, hafizalar gibi saclariniza yapisan bir sise yumusadi. Riley omuzlarinizin birbirine degmesi icin yeterince yakin, dusuncelerini okuyamayacak kadar uzak yuruyor. Ilk bulusmanizin oldugu eski galerinin yanindan geciyorsunuz, kavga edip baristiginiz firin. Her bir yer isareti, sahiplenip sahiplenmeyeceginize karar vermeniz gereken bir hayalet.',
        choices: {
          'story-8742190384-c17': {
            text: 'Gecerken galeriden bahset',
            description: 'Aranizdaki tarihe saygi goster',
          },
          'story-8742190384-c18': {
            text: 'Simdiki ana odaklan',
            description: 'Gecmisi simdilik dinlendirmeye birak',
          },
        },
      },
      'story-8742190384-10': {
        title: 'Varis Noktasi',
        narration: 'Bir zamanlar safaga kadar konustugunuz nehir kenari parktaki eski banka ulasiyorsunuz. Agac, sayisiz konusma, sayisiz itiraf tarafindan puruzsuz hale getirildi. Riley oturuyor, davet veya mesafe olabilecek bosluk birakiyor. Sehir isiklari su uzerinde sacilmis yildizlar gibi dans ediyor. Her seyden sonra burdasiniz, birlikte. An askiya alinmis gibi hissettiriyor, sonraki gelene hayat vermenizi bekliyor.',
        choices: {
          'story-8742190384-c19': {
            text: 'Yakina otur ve aciklamaya basla',
            description: 'Sonunda tam gercegi sun',
          },
          'story-8742190384-c20': {
            text: 'Senden ne istediklerini sor',
            description: 'Iyilesmeyi onlar yonlendirsin',
          },
        },
      },
      'story-8742190384-11': {
        title: 'Durust Zemin',
        narration: 'Kelimeler yaninizdaki nehir gibi akiyor--bazen yumusak, bazen sel gibi. Korku ve gururdan, aranizda sarmaşık gibi buyuyen sessizlikten, neredeyse aradiginiz gecelerden bahsediyorsunuz. Riley gozlerinizle bulusuyor ve siz orada kendi ozleminizin yansimasini goruyorsunuz. Bank sizi ikisini de tutuyor, gercek agir ve gerekli olarak yerlesirken. Kararin esigine geldiniz. Iste burasi yollarin gercekten ayrildigi yer.',
        choices: {
          'story-8742190384-c21': {
            text: 'Birlikte feribot yolculugu oner',
            description: 'Suyu sizi ileriye tasimasina izin ver',
          },
          'story-8742190384-c22': {
            text: 'Burada ve simdi yeniden baslamayi oner',
            description: 'Tandik bir zeminde yeni bir bolum',
          },
        },
      },
      'story-8742190384-12': {
        title: 'Suyun Kenarinda',
        narration: 'Feribot terminali karanlik suya karsi parliyor, kalkis ve donus sozu. Riley\'nin eli sizinkini buluyor, tereddutlu ama sicak. "Korkuyorum," diyorlar itiraf ediyorlar ve siz kabul olarak parmaklarini sikiyorsunuz. Korkunun umudun bedeli oldugunu fark ediyorsunuz. Bot kornasi caliyor, alcak ve sabirli. Dev bir seyin esiginde duruyorsunuz--olasiliklar okyanusu veya eski kalıpların derin sulari.',
        choices: {
          'story-8742190384-c23': {
            text: 'Birlikte feribota bin',
            description: 'Yolculuga adan',
          },
          'story-8742190384-c24': {
            text: 'Bunun yerine iskeleden izlemeyi oner',
            description: 'Demirli kal, guvende kal',
          },
        },
      },
      'story-8742190384-13': {
        title: 'Taze Toprak',
        narration: 'Yeniden baslamaktan bahsediyorsunuz--biraktiginiz yerden degil, simdi oldugunuz yerden, paylasilan tarih ve ayri buyume ile degismis iki insan olarak. Riley yavas yavas basin salliyor, dusunuyor. "Bu bazı seyleri birakmak demek," diyorlar ve hakli olduklarini biliyorsunuz. Gecmis, sokup atamayacaginiz bir bahce, ama simdi neye bakacaginizi secebilirsiniz. Cevrenizdeki sehir olanaklarla nefes aliyor.',
        choices: {
          'story-8742190384-c25': {
            text: 'Sahil festivaline yuru',
            description: 'Bu kirilgan yeni baslangici kutla',
          },
          'story-8742190384-c26': {
            text: 'Yarini planlamak icin sakin bir yer bul',
            description: 'Temeeli dikkatlice insa et',
          },
        },
      },
      'story-8742190384-14': {
        title: 'Sulari Gecmek',
        narration: 'Feribot iskeleden ayriliyor, sehir isiklari karanlik su uzerinde bir kolyeye gevseyiyor. Riley yaninizdayken korkuluga yaslaniyorsunuz, omuzlar degiyor. Konusma rahat sessizlige yumusadi, arada kucuk gozlemlerle bozuluyor--bir takim yildiz, gecen bir tekne, tuzlu havanin alevlendirdigi bir hafiza. Kelimenin tam anlamiyla ve mecazi olarak bilinmeyen bir kiyiya dogru ilerliyorsunuz.',
        choices: {
          'story-8742190384-c27': {
            text: 'Pratik yarinlardan bahset',
            description: 'Plan yap, yapi insa et',
          },
          'story-8742190384-c28': {
            text: 'Sadece ani tut',
            description: 'Suyu ikinizi de tasinmasina izin ver',
          },
        },
      },
      'story-8742190384-15': {
        title: 'Demirli Manzara',
        narration: 'Iskelede kaliyorsunuz, feribotun karanlik ufukta eriyip gitmesini izliyorsunuz. Riley dusunceyle mont kadar sarmalanmis olarak yakin duruyor. "Nerdeyse de iyi olurduk," diye sessizce soyluyorlar ve kelimeler gercekle batiyor. Nerdeyse konusmak, nerdeyse kalmak, nerdeyse tamamen sevmek. Tum nerdeyse lerinizin agirligini basiniza cokerken hissediyorsunuz. Ama burada dururken, bir seylerin degistigini hissediyorsunuz.',
        choices: {
          'story-8742190384-c29': {
            text: 'Nerdeyse yapmayi birakma sozu ver',
            description: 'Sonunda butunluge adan',
          },
          'story-8742190384-c30': {
            text: 'Oruntuyu durustce kabul et',
            description: 'Atlamadan once net gor',
          },
        },
      },
      'story-8742190384-16': {
        title: 'Isiklar ve Muzik',
        narration: 'Sahil festivali karanlik gokyuzune kivilcimlar kaldiriyor, havai fisekler devasa isik cicekleri gibi aciliyor. Muzik kalabaligin icinden geciyor ve istemeden dans ettiginizi goruyorsunuz, bedenler birbirlerinin ritimlerini hatirliyor. Riley guluyor, gercekten guluyor ve ses gogsunuzdeki sikici bir seyi gevsetiyor. Etrafinizda yabancilar kendi hikayelerini, kendi ikinci sanslarini kutluyor.',
        choices: {
          'story-8742190384-c31': {
            text: 'Havai fisekler doruga ciktiginda onlari op',
            description: 'Sevincin sizin icin karar vermesine izin ver',
          },
          'story-8742190384-c32': {
            text: 'Gelecege dair umutlarini fisildayin',
            description: 'Hayallerini sesli soyle',
          },
        },
      },
      'story-8742190384-17': {
        title: 'Samimi Haritalar',
        narration: 'Sakin sokakta bir deniz feneri gibi parlayan yirmi dort saatlik bir lokanta buluyorsunuz. Turta ve kahve uzerinde, paylasilan bir gelecegin hatlarini ciziyorsunuz--buyuk beyanlar degil, kucuk pratiklikler. Kim kimi arayacak, ne siklikla, ikinizin de guvende hissetmek icin neye ihtiyaci var. Riley pecete uzerine daireler ciziyor, dikkatli murekkeple hayatlarinizi birlestiriyor. Dramatik degil, romantik degil ve herhangi bir jestten daha degerli.',
        choices: {
          'story-8742190384-c33': {
            text: 'Bir sembol olarak anahtar takasi yap',
            description: 'Fiziksel guven, somut soz',
          },
          'story-8742190384-c34': {
            text: 'Yarin tekrar bulusmaya anlas',
            description: 'Bir adim, sonra bir baska',
          },
        },
      },
      'story-8742190384-18': {
        title: 'Birlikte Insa Etmek',
        narration: 'Daireler ve programlar, asik olmanin asan sevginin lojistiginden bahsediyorsunuz. Riley sizin pratikliginizi kendi pratikliginizle karsiliyor ve birlikte gercek hayati tasiyacak kadar saglam bir iskele insa ediyorsunuz. Feribot gecisine devam ediyor, ama siz zaten bir kiyiya ulastiniz--firtinali denizlerden sonra saglam zemin. Yarin tum sradan zorluklariyla bekliyor.',
        choices: {
          'story-8742190384-c35': {
            text: '"Biz" isine adan',
            description: 'Ortaklik yolunu sec',
          },
        },
      },
      'story-8742190384-19': {
        title: 'Mukemmel An',
        narration: 'Dunya nefesini tutuyor. Havai fisekler Riley\'nin yuzunu altin ve gul rengine boyuyor ve gokyuzu basinizin uzerinde acilirken onlari opuyorsunuz. Bu mukemmel bir ask degil--birbirinizin kusurlarini bunun icin cok net gordunuz--ama bu mukemmel bir an ve daha fazla anin gelecegine guvenmeyi seciyorsunuz. Kalabalik cevrenizde tezahurat yapıyor, ozel sevincinizi kamusal gurultuleriyle kutluyor.',
        choices: {
          'story-8742190384-c36': {
            text: 'Bu sevincin seni ileriye tasimasina izin ver',
            description: 'Duyguya guven, onlara guven',
          },
        },
      },
      'story-8742190384-20': {
        title: 'Saglam Zemin',
        narration: 'Tutmaya niyetli sozler veriyorsunuz, susleme olmadan sade soyleniyor. Riley onlari bas sallayan ciddiyetle karsiliyor, bu kadar sessizlikten sonra kelimelerin agirligini anliyor. Lokantanin neonu gece etrafinizda derinlesirken yumusak bir sekilde vızıldıyor. Tutkunun alevini degil ama askin sabit yanisini sectiniz ve hicbir zaman tam olarak ikamet etmenize izin vermediginiz bir yere donmek gibi hissettiriyor.',
        choices: {
          'story-8742190384-c37': {
            text: 'Farkli sekilde yeniden basla',
            description: 'Daha iyi yazilmis yeni bir bolum',
          },
        },
      },
      'story-8742190384-21': {
        title: 'Nazik Ayrilik',
        narration: 'Umut yerine durustlukle ayriliyorsunuz, bazı ask hikayelerinin kalici olmadan guzel oldugunu kabul ederek. Riley\'nin gozleri parliyor ama kafa salliyorlar, anliyorlar. "Bu gece icin tesekkurler," diyorlar ve siz sadece sirket degil kapanis kastettiklerini biliyorsunuz. Zit yonlerde yuruyorsunuz, gercegi soyleyerek hafifleyerek, kurtarilamayacak sey icin uzulerek.',
        choices: {
          'story-8742190384-c38': {
            text: 'Dersi ileri tasiyin',
            description: 'Bazi sonlar da hediyedir',
          },
        },
      },
      'story-8742190384-22': {
        title: 'Suyun Otesinde',
        narration: 'Feribot uzak kyiya demirliyor, sehir isiklari hafizalar gibi su uzerinde parliyor. Birlikte iniyorsunuz, Riley\'nin eli sizinkinde saglam. Ne pisireceginiz, hangi bitkiyi sulamayi unuttugunuz, kahve yapmak icin kimin sirasi gibi sradan seylerden bahsediyorsunuz. Sozler toren olmadan geliyor, pratik yarinin kumasina dokunuyor. Kic izi arkanizda yeni bir cizgi yazıyor, hicbir seyi silmiyor ama secim secim, gun gun insa etmeyi sectiginiz hayata sizi tasıyor.',
        choices: {},
      },
      'story-8742190384-23': {
        title: 'Kivilcimlar Sehri',
        narration: 'Havai fisekler gokyuzunu dikisliyor, parlak ve kisa ve gercek. Siz ve Riley zor parcalari temizce konusuyorsunuz, sonra ikinizin de ne kadar insani oldugunuzdan--sakar, umutlu, askinizda inatci--guluyorsunuz. Son cicek soldugunda, karanlik tekrar dostca hissettiriyor, bosluk yerine bir battaniye. Yagmurla gumus rengi sokaklardan acele etmeden birlikte eve yuruyorsunuz, sonunda almaya layik hissettiginiz bir hediye gibi ileride yeterince zaman uzanıyor. Bir zamanlar vedanizi tutan sehir simdi selaminiza sahitlik ediyor.',
        choices: {},
      },
      'story-8742190384-24': {
        title: 'Baska Bir Baslangic',
        narration: 'Sabah sizi kosedeki bir kafede buluyor, gunes isigi bir zamanlar vedanizi yansitan pencerelerden dokuluyor. Siz ve Riley defterler ve kahveyle karsi karsiya oturuyorsunuz, daha saglam temeller uzerinde yeniden insa edilmis bir iliskinin mimarisini ciziyorsunuz. Eskisiyle ayni ask degil--daha bilge, daha durust, daha dayanikli bir sey. Sonsuza dek soz vermiyorsunuz; ortaya cikmaya, secmeye, insa etmeye devam etmeyi soz veriyorsunuz. Bazi asklar geri doner; bazi asklar daha iyi sevmeyi ogretir. Sizinki, belki, ikisi de.',
        choices: {},
      },
      'story-8742190384-25': {
        title: 'Sessiz Daire',
        narration: 'Kiraladiginiz odaya geri donunce, neon tabelanin mavi pariltisi kenarlarda yumusuyor. Cay demliyorsunuz, pencereyi aciyorsunuz ve yagmur cumlesini bitirmesine izin veriyorsunuz. Bu gece degil, karar veriyorsunuz--ama asla da degil. Riley\'ye son bir mesaj gonderiyorsunuz, sadece kapanisin getirebilecegi samimiyetle ifade edilen mutluluklari dilegi. Daha fazla soylemeye hazir oldugunuzda, yeni birine veya belki kendinize, sehir hala burada olacak. Simdilik, yagmurun seni uyutmasina izin veriyorsun, umdugundan farkli kapilara yoneltse bile ikinci sanslar icin minnettar.',
        choices: {},
      },
    },
  },
};
