import { Language } from '../../localization/translations';

interface StoryTranslations {
  title: string;
  description: string;
  author: string;
  nodes: {
    [nodeId: string]: {
      title: string;
      narration: string;
      choices: { [choiceId: string]: { text: string; description?: string } };
    };
  };
}

export const enchantedForestStoryTranslations: Partial<Record<
  Language,
  StoryTranslations
>> = {
  en: {
    title: 'The Enchanted Forest',
    description:
      'A mystical journey through an ancient forest where every choice shapes your destiny.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'The Forest Entrance',
        narration:
          'You stand at the edge of an ancient forest. The trees tower above you, their branches forming a canopy that filters the sunlight into dancing patterns on the forest floor. A worn path leads deeper into the woods, while a stream glistens to your right.',
        choices: {
          'choice-1': {
            text: 'Follow the worn path',
            description: 'The path looks well-traveled',
          },
          'choice-2': {
            text: 'Follow the stream',
            description: 'The water sparkles invitingly',
          },
        },
      },
      'node-2': {
        title: 'The Ancient Oak',
        narration:
          'The path leads you to a massive oak tree, its trunk wider than a house. Strange symbols are carved into its bark, glowing faintly with an ethereal light. You hear whispers in the wind, and the air feels charged with ancient magic.',
        choices: {
          'choice-3': {
            text: 'Touch the glowing symbols',
            description: 'The symbols pulse with energy',
          },
          'choice-4': {
            text: 'Continue past the tree',
            description: 'Better not disturb ancient magic',
          },
        },
      },
      'node-3': {
        title: 'The Crystal Pool',
        narration:
          'Following the stream, you discover a crystal-clear pool. The water is so transparent you can see colorful fish swimming below. In the center of the pool, a small island holds a single white flower that seems to glow with its own light.',
        choices: {
          'choice-5': {
            text: 'Wade to the island',
            description: 'The flower calls to you',
          },
          'choice-6': {
            text: 'Rest by the pool',
            description: 'Take a moment to reflect',
          },
        },
      },
      'node-4': {
        title: 'The Awakening',
        narration:
          'As your fingers touch the symbols, the oak shimmers and a spectral figure emerges from the trunk. It is an ancient forest spirit, its form made of light and leaves. "You have awakened me, traveler," it whispers. "What do you seek in this sacred place?"',
        choices: {
          'choice-7': {
            text: 'Ask for wisdom',
            description: 'Knowledge is the greatest treasure',
          },
          'choice-8': {
            text: 'Ask for protection',
            description: 'Safety in a dangerous world',
          },
        },
      },
      'node-5': {
        title: 'The Dark Hollow',
        narration:
          'You walk past the oak and find yourself in a darker part of the forest. The trees here are twisted, and shadows move in the corner of your vision. You notice a cave entrance partially hidden by vines, and a faint light coming from deeper in the woods.',
        choices: {
          'choice-9': {
            text: 'Enter the cave',
            description: 'Discover what lies within',
          },
          'choice-10': {
            text: 'Follow the light',
            description: 'Light usually means safety',
          },
        },
      },
      'node-6': {
        title: 'The Island of Whispers',
        narration:
          'The water is surprisingly warm as you wade to the island. The white flower trembles as you approach, and you realize it is not a flower at all, but a crystalline formation that hums with energy. Touching it might change everything.',
        choices: {
          'choice-11': {
            text: 'Touch the crystal flower',
            description: 'Embrace the unknown',
          },
          'choice-12': {
            text: 'Study it from afar',
            description: 'Caution before curiosity',
          },
        },
      },
      'node-7': {
        title: 'Dreams by the Water',
        narration:
          'You sit by the pool, and drowsiness washes over you. In your half-dream state, you see visions of the forest past: ancient civilizations, magical creatures, and a great tree at the heart of everything. A voice asks if you wish to understand these visions.',
        choices: {
          'choice-13': {
            text: 'Embrace the vision',
            description: 'Dive deeper into the dream',
          },
          'choice-14': {
            text: 'Wake yourself',
            description: 'Some dreams are too deep',
          },
        },
      },
      'node-8': {
        title: "The Spirit's Trial",
        narration:
          '"Wisdom must be earned," the spirit says. The forest around you transforms into a labyrinth of living wood. "Find your way to the Heart Tree, and I shall grant you the wisdom of ages. But beware—the forest tests all who seek its secrets."',
        choices: {
          'choice-15': {
            text: 'Navigate by instinct',
            description: 'Trust your inner compass',
          },
          'choice-16': {
            text: 'Follow the fireflies',
            description: 'Nature often guides the way',
          },
        },
      },
      'node-9': {
        title: "The Guardian's Blessing",
        narration:
          'The spirit smiles and weaves a protective charm around you. "You shall be shielded from harm, but protection comes with responsibility. Will you use this gift to defend the forest, or to shield yourself as you walk your own path?"',
        choices: {
          'choice-17': {
            text: 'Defend the forest',
            description: 'Become its guardian',
          },
          'choice-18': {
            text: 'Walk your own path',
            description: 'Protection for your journey',
          },
        },
      },
      'node-10': {
        title: 'The Crystal Cavern',
        narration:
          'Inside the cave, you find walls covered in luminescent crystals that pulse like a heartbeat. In the center, a pool of liquid silver reflects not your face, but possible futures. You sense great power here, but also great danger.',
        choices: {
          'choice-19': {
            text: 'Drink from the pool',
            description: 'See your destiny',
          },
          'choice-20': {
            text: 'Take a crystal',
            description: 'A piece of magic to keep',
          },
        },
      },
      'node-11': {
        title: 'The Fairy Ring',
        narration:
          'The light leads you to a clearing where mushrooms grow in a perfect circle. Tiny lights dance within the ring, and you hear laughter like chiming bells. The fairies invite you to join their dance, but warn that time moves differently in their circle.',
        choices: {
          'choice-21': {
            text: 'Join the dance',
            description: 'Dance with the fae',
          },
          'choice-22': {
            text: 'Politely decline',
            description: 'Respectfully watch instead',
          },
        },
      },
      'node-12': {
        title: 'The Transformation',
        narration:
          'The moment you touch the crystal, energy surges through you. You feel your senses sharpen—you can hear the trees breathing, feel the roots beneath the earth, and sense the heartbeat of the forest itself. You are becoming something more than human.',
        choices: {
          'choice-23': {
            text: 'Embrace the change',
            description: 'Become one with nature',
          },
          'choice-24': {
            text: 'Resist and withdraw',
            description: 'Remain who you are',
          },
        },
      },
      'node-13': {
        title: 'The Prophecy Revealed',
        narration:
          'Your visions coalesce into a clear message: the forest is dying, and you are the key to its survival. An ancient blight is spreading from the north, and only someone who has walked the enchanted paths can stop it. The choice before you is clear.',
        choices: {
          'choice-25': {
            text: 'Accept your destiny',
            description: 'Save the forest',
          },
          'choice-26': {
            text: 'The burden is too great',
            description: 'Choose another way',
          },
        },
      },
      'node-14': {
        title: 'The Crossroads',
        narration:
          'You find yourself at a crossroads where three paths meet. Each path glows with a different color: gold for wealth, green for growth, and blue for knowledge. The forest waits for your decision, its fate hanging in the balance.',
        choices: {
          'choice-27': {
            text: 'The golden path',
            description: 'Seek treasure',
          },
          'choice-28': {
            text: 'The green path',
            description: 'Seek harmony',
          },
          'choice-29': {
            text: 'The blue path',
            description: 'Seek understanding',
          },
        },
      },
      'node-15': {
        title: 'The Heart Tree Found',
        narration:
          'Your instincts guide you true, and you emerge into a grove where the Heart Tree stands—a massive tree with bark of gold and leaves that shimmer like emeralds. The spirit appears and bestows upon you the ancient wisdom of the forest. You become the first human in centuries to truly understand the language of nature, and you vow to be its voice in the human world.',
        choices: {},
      },
      'node-16': {
        title: "The Firefly's Gift",
        narration:
          'The fireflies lead you not to the Heart Tree, but to a hidden grove where the last dragons of the forest sleep. They awaken at your approach and grant you their eternal friendship. With dragon allies, you become a legend—the Dragon Friend who bridges the world of humans and the ancient wyrms.',
        choices: {},
      },
      'node-17': {
        title: 'The Eternal Guardian',
        narration:
          'You accept the responsibility of protecting the forest, and the spirit transforms you into an Eternal Guardian—neither fully human nor fully spirit, but something in between. You will watch over these woods for centuries, guiding lost travelers and keeping the ancient magic safe from those who would exploit it.',
        choices: {},
      },
      'node-18': {
        title: 'The Protected Traveler',
        narration:
          "With the spirit's blessing upon you, you leave the forest protected from all harm. You live a long and fortunate life, shielded from accidents and illness. But sometimes, in your dreams, you hear the forest calling, wondering if you made the right choice.",
        choices: {},
      },
      'node-19': {
        title: "The Oracle's Vision",
        narration:
          "The silver liquid shows you all possible futures, and you gain the gift of prophecy. You leave the forest as an oracle, able to guide others through their destinies. But knowing the future is a heavy burden—you see both joys and sorrows that are yet to come.",
        choices: {},
      },
      'node-20': {
        title: 'The Crystal Keeper',
        narration:
          'The crystal you take becomes your constant companion, humming with magic and lighting your way through darkness. You become known as the Crystal Keeper, using its power to heal the sick and ward off evil. The forest stays with you always, a piece of its magic in your pocket.',
        choices: {},
      },
      'node-21': {
        title: 'The Fairy Friend',
        narration:
          "You dance with the fairies until dawn, though decades pass in the human world. When you return, you are unchanged, but you carry the fairies' blessing. You can see through glamour, speak with the little folk, and you will never age. You become a bridge between the human world and the fairy realm.",
        choices: {},
      },
      'node-22': {
        title: 'The Respectful Observer',
        narration:
          'You watch the fairy dance from outside the circle, showing wisdom and restraint. The fairies notice your respect and gift you a seed from their sacred tree. When planted, it grows into a tree that bears fruit of pure knowledge. You become a wise sage, sharing the fruit\'s wisdom with those who seek truth.',
        choices: {},
      },
      'ending-1': {
        title: 'The Nature Bond',
        narration:
          'You fully embrace your transformation, becoming a guardian of the forest with the power to speak with animals and command the growth of plants. You leave behind your human life to become one with the enchanted woods, finding a peace you never knew existed.',
        choices: {},
      },
      'ending-2': {
        title: 'The Forest Savior',
        narration:
          'You accept your destiny and become the Forest Savior. With your newfound powers, you journey north to confront the blight. The battle is fierce, but your courage prevails. You save not just this forest, but all forests connected to it through the ancient root network.',
        choices: {},
      },
      'ending-3': {
        title: 'The Humble Path',
        narration:
          'You choose not to accept the burden of destiny, and the forest respects your honesty. Instead of power, you are granted a simple blessing: the ability to always find your way home. You leave the forest with your life unchanged, but with the knowledge that sometimes the bravest choice is to know your own limits.',
        choices: {},
      },
      'ending-4': {
        title: 'The Golden Bounty',
        narration:
          'The golden path leads you to a treasure beyond imagination—gold, jewels, and artifacts of ancient magic. You leave the forest wealthy beyond your dreams, but the treasure comes with a warning: use it wisely, or it will use you.',
        choices: {},
      },
      'ending-5': {
        title: 'The Harmony Seeker',
        narration:
          'The green path teaches you the secret of living in harmony with all things. You gain the ability to grow any plant and communicate with the earth itself. You become a druid, traveling the world to heal damaged lands and teach others to respect nature.',
        choices: {},
      },
      'ending-6': {
        title: 'The Seeker of Truth',
        narration:
          "The blue path reveals the hidden truths of existence—why we are here, where we go, and what connects all living things. You become a philosopher and teacher, sharing your insights with those who seek understanding. The forest has given you the greatest gift: the answer to life's deepest questions.",
        choices: {},
      },
    },
  },

  ru: {
    title: 'Зачарованный лес',
    description:
      'Мистическое путешествие по древнему лесу, где каждый выбор определяет вашу судьбу.',
    author: 'Елена Риверс',
    nodes: {
      'node-1': {
        title: 'Вход в лес',
        narration:
          'Вы стоите на краю древнего леса. Деревья возвышаются над вами, их ветви образуют навес, который фильтрует солнечный свет в танцующие узоры на лесной подстилке. Протоптанная тропа ведёт глубже в лес, а справа блестит ручей.',
        choices: {
          'choice-1': {
            text: 'Следовать по протоптанной тропе',
            description: 'Тропа выглядит хорошо утоптанной',
          },
          'choice-2': {
            text: 'Следовать вдоль ручья',
            description: 'Вода искрится заманчиво',
          },
        },
      },
      'node-2': {
        title: 'Древний дуб',
        narration:
          'Тропа приводит вас к массивному дубу, ствол которого шире дома. Странные символы вырезаны на его коре, слабо светясь эфирным светом. Вы слышите шёпот на ветру, и воздух наполнен древней магией.',
        choices: {
          'choice-3': {
            text: 'Прикоснуться к светящимся символам',
            description: 'Символы пульсируют энергией',
          },
          'choice-4': {
            text: 'Пройти мимо дерева',
            description: 'Лучше не тревожить древнюю магию',
          },
        },
      },
      'node-3': {
        title: 'Кристальный пруд',
        narration:
          'Следуя вдоль ручья, вы обнаруживаете кристально чистый пруд. Вода настолько прозрачна, что вы можете видеть разноцветных рыб, плавающих внизу. В центре пруда небольшой остров с единственным белым цветком, который кажется светящимся.',
        choices: {
          'choice-5': {
            text: 'Пройти вброд к острову',
            description: 'Цветок зовёт вас',
          },
          'choice-6': {
            text: 'Отдохнуть у пруда',
            description: 'Сделать паузу для размышлений',
          },
        },
      },
      'node-4': {
        title: 'Пробуждение',
        narration:
          'Когда ваши пальцы касаются символов, дуб мерцает, и из ствола появляется призрачная фигура. Это древний дух леса, его форма состоит из света и листьев. «Ты разбудил меня, путник,» — шепчет он. «Что ты ищешь в этом священном месте?»',
        choices: {
          'choice-7': {
            text: 'Попросить мудрости',
            description: 'Знание — величайшее сокровище',
          },
          'choice-8': {
            text: 'Попросить защиты',
            description: 'Безопасность в опасном мире',
          },
        },
      },
      'node-5': {
        title: 'Тёмная поляна',
        narration:
          'Вы проходите мимо дуба и оказываетесь в более тёмной части леса. Деревья здесь искажены, и тени движутся в углу вашего зрения. Вы замечаете вход в пещеру, частично скрытый лианами, и слабый свет, идущий из глубины леса.',
        choices: {
          'choice-9': {
            text: 'Войти в пещеру',
            description: 'Открыть то, что скрыто внутри',
          },
          'choice-10': {
            text: 'Следовать за светом',
            description: 'Свет обычно означает безопасность',
          },
        },
      },
      'node-6': {
        title: 'Остров Шёпотов',
        narration:
          'Вода удивительно тёплая, когда вы идёте вброд к острову. Белый цветок дрожит при вашем приближении, и вы понимаете, что это вовсе не цветок, а кристаллическое образование, издающее гул. Прикосновение к нему может изменить всё.',
        choices: {
          'choice-11': {
            text: 'Прикоснуться к кристальному цветку',
            description: 'Примите неизвестность',
          },
          'choice-12': {
            text: 'Изучить издалека',
            description: 'Осторожность прежде любопытства',
          },
        },
      },
      'node-7': {
        title: 'Сны у воды',
        narration:
          'Вы садитесь у пруда, и сонливость овладевает вами. В полусне вы видите видения прошлого леса: древние цивилизации, магических существ и великое дерево в центре всего. Голос спрашивает, хотите ли вы понять эти видения.',
        choices: {
          'choice-13': {
            text: 'Принять видение',
            description: 'Погрузиться глубже в сон',
          },
          'choice-14': {
            text: 'Разбудить себя',
            description: 'Некоторые сны слишком глубоки',
          },
        },
      },
      'node-8': {
        title: 'Испытание духа',
        narration:
          '«Мудрость должна быть заслужена,» — говорит дух. Лес вокруг вас превращается в лабиринт из живого дерева. «Найди путь к Древу Сердца, и я дарую тебе мудрость веков. Но остерегайся — лес испытывает всех, кто ищет его секреты.»',
        choices: {
          'choice-15': {
            text: 'Ориентироваться по инстинкту',
            description: 'Доверьтесь внутреннему компасу',
          },
          'choice-16': {
            text: 'Следовать за светлячками',
            description: 'Природа часто указывает путь',
          },
        },
      },
      'node-9': {
        title: 'Благословение хранителя',
        narration:
          'Дух улыбается и оплетается защитным чаром вокруг вас. «Ты будешь защищён от вреда, но защита влечёт ответственность. Будешь ли ты использовать этот дар для защиты леса или для защиты себя на своём пути?»',
        choices: {
          'choice-17': {
            text: 'Защищать лес',
            description: 'Стать его хранителем',
          },
          'choice-18': {
            text: 'Идти своим путём',
            description: 'Защита для вашего путешествия',
          },
        },
      },
      'node-10': {
        title: 'Кристальный грот',
        narration:
          'Внутри пещеры вы находите стены, покрытые светящимися кристаллами, пульсирующими как сердцебиение. В центре бассейн из жидкого серебра отражает не ваше лицо, а возможные будущие. Вы чувствуете здесь великую силу, но и великую опасность.',
        choices: {
          'choice-19': {
            text: 'Выпить из бассейна',
            description: 'Увидеть свою судьбу',
          },
          'choice-20': {
            text: 'Взять кристалл',
            description: 'Кусочек магии на память',
          },
        },
      },
      'node-11': {
        title: 'Круг фей',
        narration:
          'Свет ведёт вас к поляне, где грибы растут идеальным кругом. Крошечные огоньки танцуют внутри круга, и вы слышите смех, похожий на звон колокольчиков. Феи приглашают вас присоединиться к их танцу, но предупреждают, что время движется иначе в их кругу.',
        choices: {
          'choice-21': {
            text: 'Присоединиться к танцу',
            description: 'Танцевать с феями',
          },
          'choice-22': {
            text: 'Вежливо отказаться',
            description: 'Уважительно наблюдать',
          },
        },
      },
      'node-12': {
        title: 'Трансформация',
        narration:
          'В момент прикосновения к кристаллу через вас проносится энергия. Вы чувствуете, как ваши чувства обостряются — вы слышите дыхание деревьев, чувствуете корни под землёй и ощущаете сердцебиение самого леса. Вы становитесь чем-то большим, чем человек.',
        choices: {
          'choice-23': {
            text: 'Принять изменения',
            description: 'Слиться с природой',
          },
          'choice-24': {
            text: 'Сопротивляться и отступить',
            description: 'Остаться собой',
          },
        },
      },
      'node-13': {
        title: 'Откровение пророчества',
        narration:
          'Ваши видения сливаются в ясное послание: лес умирает, и вы — ключ к его спасению. Древняя чума распространяется с севера, и только тот, кто прошёл по заколдованным тропам, может остановить её. Выбор перед вами ясен.',
        choices: {
          'choice-25': {
            text: 'Принять свою судьбу',
            description: 'Спасти лес',
          },
          'choice-26': {
            text: 'Бремя слишком велико',
            description: 'Выбрать другой путь',
          },
        },
      },
      'node-14': {
        title: 'Перекрёсток',
        narration:
          'Вы оказываетесь на перекрёстке, где сходятся три тропы. Каждая тропа светится своим цветом: золотой для богатства, зелёный для роста и синий для знания. Лес ждёт вашего решения, его судьба висит на волоске.',
        choices: {
          'choice-27': {
            text: 'Золотая тропа',
            description: 'Искать сокровища',
          },
          'choice-28': {
            text: 'Зелёная тропа',
            description: 'Искать гармонию',
          },
          'choice-29': {
            text: 'Синяя тропа',
            description: 'Искать понимание',
          },
        },
      },
      'node-15': {
        title: 'Древо Сердца найдено',
        narration:
          'Ваши инстинкты ведут вас верно, и вы выходите к роще, где стоит Древо Сердца — массивное дерево с корой из золота и листьями, мерцающими как изумруды. Дух появляется и дарует вам древнюю мудрость леса. Вы становитесь первым человеком за столетия, кто по-настоящему понимает язык природы, и даёте обет быть её голосом в мире людей.',
        choices: {},
      },
      'node-16': {
        title: 'Дар светлячков',
        narration:
          'Светлячки ведут вас не к Древу Сердца, а к скрытой роще, где спят последние драконы леса. Они пробуждаются при вашем приближении и даруют вам свою вечную дружбу. С союзниками-драконами вы становитесь легендой — Другом Драконов, который соединяет мир людей и древних змеев.',
        choices: {},
      },
      'node-17': {
        title: 'Вечный хранитель',
        narration:
          'Вы принимаете ответственность защищать лес, и дух превращает вас в Вечного Хранителя — ни полностью человека, ни полностью духа, но нечто среднее. Вы будете охранять эти леса веками, направлять заблудших путников и хранить древнюю магию в безопасности от тех, кто хотел бы её эксплуатировать.',
        choices: {},
      },
      'node-18': {
        title: 'Защищённый путник',
        narration:
          'С благословением духа вы покидаете лес, защищённый ото всех бед. Вы живёте долгую и счастливую жизнь, ограждённая от несчастий и болезней. Но иногда, во сне, вы слышите зов леса, размышляя, сделали ли вы правильный выбор.',
        choices: {},
      },
      'node-19': {
        title: 'Видение оракула',
        narration:
          'Жидкое серебро показывает вам все возможные будущие, и вы получаете дар пророчества. Вы покидаете лес как оракул, способный направлять других через их судьбы. Но знание будущего — тяжёлое бремя — вы видите и радости, и печали, которые ещё предстоят.',
        choices: {},
      },
      'node-20': {
        title: 'Хранитель кристалла',
        narration:
          'Кристалл, который вы берёте, становится вашим постоянным спутником, издавая гул и освещая путь во тьме. Вы становитесь известны как Хранитель Кристалла, используя его силу для исцеления больных и отвращения зла. Лес всегда остаётся с вами, кусочек его магии в вашем кармане.',
        choices: {},
      },
      'node-21': {
        title: 'Друг фей',
        narration:
          'Вы танцуете с феями до рассвета, хотя в мире людей проходят десятилетия. Когда вы возвращаетесь, вы не изменились, но несёте благословение фей. Вы видите сквозь глэмур, разговариваете с маленьким народцем и никогда не состаритесь. Вы становитесь мостом между миром людей и царством фей.',
        choices: {},
      },
      'node-22': {
        title: 'Уважительный наблюдатель',
        narration:
          'Вы наблюдаете за танцем фей извне круга, проявляя мудрость и сдержанность. Феи замечают ваше уважение и дарят вам семя их священного дерева. Когда оно посажено, оно растёт в дерево, приносящее плоды чистого знания. Вы становитесь мудрым мудрецом, делясь мудростью плодов с теми, кто ищет истину.',
        choices: {},
      },
      'ending-1': {
        title: 'Связь с природой',
        narration:
          'Вы полностью принимаете своё превращение, становясь хранителем леса с силой разговаривать с животными и управлять ростом растений. Вы оставляете свою человеческую жизнь, чтобы слиться с заколдованными лесами, находя покой, о котором никогда не знали.',
        choices: {},
      },
      'ending-2': {
        title: 'Спаситель леса',
        narration:
          'Вы принимаете свою судьбу и становитесь Спасителем Леса. С новыми силами вы отправляетесь на север противостоять чуме. Битва жестока, но ваша храбрость побеждает. Вы спасаете не только этот лес, но и все леса, связанные с ним через древнюю корневую сеть.',
        choices: {},
      },
      'ending-3': {
        title: 'Скромный путь',
        narration:
          'Вы выбираете не принимать бремя судьбы, и лес уважает вашу честность. Вместо силы вам даруется простое благословение: способность всегда находить путь домой. Вы покидаете лес с неизменной жизнью, но с знанием, что иногда самый храбрый выбор — знать свои пределы.',
        choices: {},
      },
      'ending-4': {
        title: 'Золотая награда',
        narration:
          'Золотая тропа ведёт вас к сокровищу за пределами воображения — золоту, драгоценностям и артефактам древней магии. Вы покидаете лес, богатые за пределами мечтаний, но сокровище несёт предупреждение: используйте его мудро, или оно использует вас.',
        choices: {},
      },
      'ending-5': {
        title: 'Искатель гармонии',
        narration:
          'Зелёная тропа учит вас секрету жизни в гармонии со всем сущим. Вы получаете способность выращивать любое растение и общаться с самой землёй. Вы становитесь друидом, путешествуя по миру, чтобы исцелять повреждённые земли и учить других уважать природу.',
        choices: {},
      },
      'ending-6': {
        title: 'Искатель истины',
        narration:
          'Синяя тропа открывает скрытые истины существования — зачем мы здесь, куда мы идём и что связывает все живые существа. Вы становитесь философом и учителем, делясь своими прозрениями с теми, кто ищет понимания. Лес даровал вам величайший дар: ответ на самые глубокие вопросы жизни.',
        choices: {},
      },
    },
  },

  pl: {
    title: 'Zaczarowany Las',
    description:
      'Mistyczna podróż przez starożytny las, w której każdy wybór kształtuje twoje przeznaczenie.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'Wejście do lasu',
        narration:
          'Stoisz na skraju starożytnego lasu. Drzewa wznoszą się ponad tobą, a ich gałęzie tworzą baldachim, który filtruje światło słoneczne w tańczące wzory na lesistej posadzce. Wydeptana ścieżka prowadzi głębiej w lasy, a po twojej prawej stronie błyszczy strumień.',
        choices: {
          'choice-1': {
            text: 'Podążaj wydeptaną ścieżką',
            description: 'Ścieżka wygląda na dobrze uczęszczaną',
          },
          'choice-2': {
            text: 'Podążaj za strumieniem',
            description: 'Woda lśni zachęcająco',
          },
        },
      },
      'node-2': {
        title: 'Starożytny dąb',
        narration:
          'Ścieżka prowadzi cię do potężnego dębu, którego pień jest szerszy niż dom. Na jego korze wyryto dziwne symbole, które słabo świecą eterycznym blaskiem. Słyszysz szepty na wietrze, a powietrze jest naładowane starożytną magią.',
        choices: {
          'choice-3': {
            text: 'Dotknij świecących symboli',
            description: 'Symbole pulsuje energią',
          },
          'choice-4': {
            text: 'Przejdź obok drzewa',
            description: 'Lepiej nie zakłócać starożytnej magii',
          },
        },
      },
      'node-3': {
        title: 'Kryształowy staw',
        narration:
          'Podążając za strumieniem, odkrywasz krystalicznie czysty staw. Woda jest tak przezroczysta, że widać pływające poniżej kolorowe ryby. W centrum stawu znajduje się mała wyspa, na której rośnie pojedynczy biały kwiat, który wydaje się świecić własnym światłem.',
        choices: {
          'choice-5': {
            text: 'Przejdź brzegiem na wyspę',
            description: 'Kwiat cię woła',
          },
          'choice-6': {
            text: 'Odpocznij przy stawie',
            description: 'Zrób chwilę przerwy na refleksję',
          },
        },
      },
      'node-4': {
        title: 'Przebudzenie',
        narration:
          'Gdy twoje palce dotykają symboli, dąb mieni się, a z pnia wyłania się widmowa postać. To starożytny duch lasu, którego forma składa się ze światła i liści. „Obudziłeś mnie, wędrowcze” — szepcze. „Czego szukasz w tym świętym miejscu?”',
        choices: {
          'choice-7': {
            text: 'Poproś o mądrość',
            description: 'Wiedza jest największym skarbem',
          },
          'choice-8': {
            text: 'Poproś o ochronę',
            description: 'Bezpieczeństwo w niebezpiecznym świecie',
          },
        },
      },
      'node-5': {
        title: 'Mroczna polana',
        narration:
          'Przechodzisz obok dębu i znajdujesz się w ciemniejszej części lasu. Drzewa tutaj są skrzywione, a cienie poruszają się w kącie twego wzroku. Zauważasz wejście do jaskini częściowo ukryte pnączami oraz słabe światło dochodzące z głębi lasu.',
        choices: {
          'choice-9': {
            text: 'Wejdź do jaskini',
            description: 'Odkryj, co się w niej kryje',
          },
          'choice-10': {
            text: 'Podążaj za światłem',
            description: 'Światło zazwyczaj oznacza bezpieczeństwo',
          },
        },
      },
      'node-6': {
        title: 'Wyspa Szeptów',
        narration:
          'Woda jest zaskakująco ciepła, gdy przechodzisz brzegiem na wyspę. Biały kwiat drży, gdy się zbliżasz, i zdajesz sobie sprawę, że wcale nie jest to kwiat, lecz krystaliczne formowanie, które brzmi energią. Dotknięcie go może wszystko zmienić.',
        choices: {
          'choice-11': {
            text: 'Dotknij kryształowego kwiatu',
            description: 'Przyjmij nieznane',
          },
          'choice-12': {
            text: 'Przyjrzyj się z daleka',
            description: 'Ostrożność przed ciekawością',
          },
        },
      },
      'node-7': {
        title: 'Sny nad wodą',
        narration:
          'Siedzisz przy stawie, a senność cię ogarnia. W półśnie widzisz wizje przeszłości lasu: starożytne cywilizacje, magiczne istoty i wielkie drzewo w centrum wszystkiego. Głos pyta, czy chcesz zrozumieć te wizje.',
        choices: {
          'choice-13': {
            text: 'Przyjmij wizję',
            description: 'Zanurz się głębiej we śnie',
          },
          'choice-14': {
            text: 'Obudź się',
            description: 'Niektóre sny są zbyt głębokie',
          },
        },
      },
      'node-8': {
        title: 'Próba ducha',
        narration:
          '„Mądrość musi zostać zasłużona” — mówi duch. Las wokół ciebie zamienia się w labirynt z żywego drewna. „Znajdź drogę do Drzewa Serca, a obdarzę cię mądrością wieków. Ale uważaj — las wystawia na próbę wszystkich, którzy szukają jego tajemnic.”',
        choices: {
          'choice-15': {
            text: 'Nawiguj według instynktu',
            description: 'Zaufaj wewnętrznemu kompasowi',
          },
          'choice-16': {
            text: 'Podążaj za świetlikami',
            description: 'Przyroda często wskazuje drogę',
          },
        },
      },
      'node-9': {
        title: 'Błogosławieństwo strażnika',
        narration:
          'Duch uśmiecha się i splata wokół ciebie ochronne zaklęcie. „Będziesz chroniony przed krzywdą, ale ochrona wiąże się z odpowiedzialnością. Czy użyjesz tego daru, by bronić lasu, czy by chronić siebie na własnej ścieżce?”',
        choices: {
          'choice-17': {
            text: 'Broń lasu',
            description: 'Zostań jego strażnikiem',
          },
          'choice-18': {
            text: 'Idź własną ścieżką',
            description: 'Ochrona dla twojej podróży',
          },
        },
      },
      'node-10': {
        title: 'Kryształowa grota',
        narration:
          'Wewnątrz jaskini znajdujesz ściany pokryte luminescencyjnymi kryształami, które pulsują jak bicie serca. W centrum basen z płynnego srebra odbija nie twoją twarz, lecz możliwe przyszłości. Wyczuwasz tutaj wielką moc, ale także wielkie niebezpieczeństwo.',
        choices: {
          'choice-19': {
            text: 'Napij się z basenu',
            description: 'Zobacz swoje przeznaczenie',
          },
          'choice-20': {
            text: 'Weź kryształ',
            description: 'Kawałek magii do zatrzymania',
          },
        },
      },
      'node-11': {
        title: 'Krąg wróżek',
        narration:
          'Światło prowadzi cię do polany, gdzie grzyby rosną w idealnym kole. Wewnątrz kręgu tańczą maleńkie światełka, a słyszysz śmiech przypominający dzwonienie dzwonków. Wróżki zapraszają cię do tańca, ale ostrzegają, że czas płynie inaczej w ich kręgu.',
        choices: {
          'choice-21': {
            text: 'Dołącz do tańca',
            description: 'Tańcz z wróżkami',
          },
          'choice-22': {
            text: 'Grzecznie odmów',
            description: 'Z szacunkiem obserwuj',
          },
        },
      },
      'node-12': {
        title: 'Transformacja',
        narration:
          'W momencie dotknięcia kryształu przez ciebie przepływa energia. Czujesz, jak twoje zmysły stają się ostrzejsze — słyszysz oddech drzew, czujesz korzenie pod ziemią i wyczuwasz bicie serca samego lasu. Stajesz się czymś więcej niż człowiekiem.',
        choices: {
          'choice-23': {
            text: 'Przyjmij zmianę',
            description: 'Stań się jednością z naturą',
          },
          'choice-24': {
            text: 'Stawiaj opór i cofnij się',
            description: 'Pozostań sobą',
          },
        },
      },
      'node-13': {
        title: 'Objawienie przepowiedni',
        narration:
          'Twoje wizje łączą się w jasną wiadomość: las umiera, a ty jesteś kluczem do jego przetrwania. Starożytna zaraza rozprzestrzenia się z północy, a tylko ktoś, kto przeszedł po zaczarowanych ścieżkach, może ją powstrzymać. Wybór przed tobą jest jasny.',
        choices: {
          'choice-25': {
            text: 'Przyjmij swoje przeznaczenie',
            description: 'Ocal las',
          },
          'choice-26': {
            text: 'Brzemię jest zbyt wielkie',
            description: 'Wybierz inną drogę',
          },
        },
      },
      'node-14': {
        title: 'Rozdroże',
        narration:
          'Znajdujesz się na rozdrożu, gdzie spotykają się trzy ścieżki. Każda ścieżka świeci innym kolorem: złotym dla bogactwa, zielonym dla wzrostu i niebieskim dla wiedzy. Las czeka na twoją decyzję, a jego los wisi na włosku.',
        choices: {
          'choice-27': {
            text: 'Złota ścieżka',
            description: 'Szukaj skarbów',
          },
          'choice-28': {
            text: 'Zielona ścieżka',
            description: 'Szukaj harmonii',
          },
          'choice-29': {
            text: 'Niebieska ścieżka',
            description: 'Szukaj zrozumienia',
          },
        },
      },
      'node-15': {
        title: 'Drzewo Serca odnalezione',
        narration:
          'Twój instynkt prowadzi cię właściwie i wychodzisz do zagajnika, gdzie stoi Drzewo Serca — potężne drzewo ze złotą korą i liśćmi mieniącymi się jak szmaragdy. Duch pojawia się i obdarza cię starożytną mądrością lasu. Stajesz się pierwszym człowiekiem od wieków, który naprawdę rozumie język natury, i ślubujesz być jej głosem w świecie ludzi.',
        choices: {},
      },
      'node-16': {
        title: 'Dar świetlików',
        narration:
          'Świetliki prowadzą cię nie do Drzewa Serca, lecz do ukrytego zagajnika, gdzie śpią ostatnie smoki lasu. Budzą się na twój widok i obdarzają cię swoją wieczną przyjaźnią. Sojuszników-smoków stajesz się legendą — Przyjacielem Smoków, który łączy świat ludzi i starożytnych węży.',
        choices: {},
      },
      'node-17': {
        title: 'Wieczny strażnik',
        narration:
          'Przyjmujesz odpowiedzialność za ochronę lasu, a duch przemienia cię w Wiecznego Strażnika — ani w pełni człowieka, ani w pełni ducha, ale coś pośredniego. Będziesz strzegł tych lasów przez wieki, prowadząc zagubionych wędrowców i chroniąc starożytną magię przed tymi, którzy chcieliby ją wykorzystać.',
        choices: {},
      },
      'node-18': {
        title: 'Chroniony wędrowiec',
        narration:
          'Z błogosławieństwem ducha opuszczasz las, chroniony przed wszelkimi krzywdami. Żyjesz długim i szczęśliwym życiem, osłonięty przed wypadkami i chorobami. Ale czasem we śnie słyszysz wołanie lasu, zastanawiając się, czy dokonałeś właściwego wyboru.',
        choices: {},
      },
      'node-19': {
        title: 'Wizja wyroczni',
        narration:
          'Płynne srebro pokazuje ci wszystkie możliwe przyszłości, a zyskujesz dar proroctwa. Opuszczasz las jako wyrocznia, zdolna prowadzić innych przez ich przeznaczenia. Ale znajomość przyszłości jest ciężkim brzemieniem — widzisz zarówno radości, jak i smutki, które dopiero nadejdą.',
        choices: {},
      },
      'node-20': {
        title: 'Strażnik kryształu',
        narration:
          'Kryształ, który bierzesz, staje się twoim stałym towarzyszem, wydając dźwięki i oświetlając ci drogę przez ciemność. Znany jesteś jako Strażnik Kryształu, używając jego mocy do leczenia chorych i odganiania zła. Las zawsze pozostaje z tobą, kawałek jego magii w twojej kieszeni.',
        choices: {},
      },
      'node-21': {
        title: 'Przyjaciel wróżek',
        narration:
          'Tanczysz z wróżkami do świtu, choć w świecie ludzi mijają dekady. Gdy wracasz, nie zmieniłeś się, ale nosisz błogosławieństwo wróżek. Możesz widzieć przez złudzenia, rozmawiać z małym ludem i nigdy nie zestarzejesz się. Stajesz się mostem między światem ludzi a krainą wróżek.',
        choices: {},
      },
      'node-22': {
        title: 'Szacunkowy obserwator',
        narration:
          'Obserwujesz taniec wróżek z zewnątrz kręgu, okazując mądrość i powściągliwość. Wróżki zauważają twój szacunek i darują ci nasionko ze swojego świętego drzewa. Gdy zostanie zasadzone, rośnie w drzewo rodzące owoce czystej wiedzy. Stajesz się mędrym mędrcem, dzieląc się mądrością owoców z tymi, którzy szukają prawdy.',
        choices: {},
      },
      'ending-1': {
        title: 'Więź z naturą',
        narration:
          'W pełni przyjmujesz swoją przemianę, stając się strażnikiem lasu z mocą rozmawiania ze zwierzętami i dowodzenia wzrostem roślin. Zostawiasz za sobą swoje ludzkie życie, by stać się jednością z zaczarowanymi lasami, znajdując spokój, o jakim nigdy nie wiedziałeś.',
        choices: {},
      },
      'ending-2': {
        title: 'Zbawca lasu',
        narration:
          'Przyjmujesz swoje przeznaczenie i stajesz się Zbawcą Lasu. Z nowymi mocami wyruszasz na północ, by stawić czoła zarazie. Bitwa jest zacięta, ale twoja odwaga zwycięża. Ratujesz nie tylko ten las, ale wszystkie lasy połączone z nim przez starożytną sieć korzeni.',
        choices: {},
      },
      'ending-3': {
        title: 'Skromna ścieżka',
        narration:
          'Wybierasz nieprzyjęcie brzemienia przeznaczenia, a las szanuje twoją szczerość. Zamiast mocy otrzymujesz proste błogosławieństwo: zdolność zawsze znajdowania drogi do domu. Opuszczasz las z niezmienionym życiem, ale z wiedzą, że czasem najodważniejszym wyborem jest znać własne ograniczenia.',
        choices: {},
      },
      'ending-4': {
        title: 'Złota nagroda',
        narration:
          'Złota ścieżka prowadzi cię do skarbu poza wyobraźnią — złota, klejnotów i artefaktów starożytnej magii. Opuszczasz las bogatszy niż w snach, ale skarb niesie ostrzeżenie: używaj go mądrze, albo on użyje ciebie.',
        choices: {},
      },
      'ending-5': {
        title: 'Poszukiwacz harmonii',
        narration:
          'Zielona ścieżka uczy cię sekretu życia w harmonii ze wszystkim. Zyskujesz zdolność uprawy każdej rośliny i komunikacji z samą ziemią. Stajesz się druidem, podróżując po świecie, by leczyć zniszczone ziemie i uczyć innych szacunku do natury.',
        choices: {},
      },
      'ending-6': {
        title: 'Poszukiwacz prawdy',
        narration:
          'Niebieska ścieżka odsłania ukryte prawdy istnienia — po co tu jesteśmy, dokąd idziemy i co łączy wszystkie żywe istoty. Stajesz się filozofem i nauczycielem, dzieląc się swoimi spostrzeżeniami z tymi, którzy szukają zrozumienia. Las obdarzył cię największym darem: odpowiedzią na najgłębsze pytania życia.',
        choices: {},
      },
    },
  },

  tr: {
    title: 'Büyülü Orman',
    description:
      'Her seçimin kaderinizi şekillendiren kadim bir ormanda mistik bir yolculuk.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'Orman Girişi',
        narration:
          'Kadim bir ormanın kenarında duruyorsunuz. Ağaçlar üzerinize yükseliyor, dalları güneş ışığını orman zemininde dans eden desenlere süzüyor. Eski bir patika ormanın derinliklerine doğru ilerliyor, sağınızda ise bir dere parıldıyor.',
        choices: {
          'choice-1': {
            text: 'Eski patikayı takip et',
            description: 'Patika iyi yürütülmüş görünüyor',
          },
          'choice-2': {
            text: 'Derenin yanından git',
            description: 'Su davetkar bir şekilde parıldıyor',
          },
        },
      },
      'node-2': {
        title: 'Kadim Meşe',
        narration:
          'Patika sizi bir evden daha geniş bir gövdeye sahip devasa bir meşe ağacına götürüyor. Kabuğuna oymalı garip semboller, tuhaf bir ışıkla soluk soluk parlıyor. Rüzgarda fısıltılar duyuyorsun ve hava kadim büyüyle yüklü.',
        choices: {
          'choice-3': {
            text: 'Parlayan sembollere dokun',
            description: 'Semboller enerjiyle atıyor',
          },
          'choice-4': {
            text: 'Ağacın yanından geç',
            description: 'Kadim büyüyü rahatsız etmemek daha iyi',
          },
        },
      },
      'node-3': {
        title: 'Kristal Havuz',
        narration:
          'Dereyi takip ederek kristal berraklığında bir havuz keşfediyorsunuz. Su öyle şeffaf ki, altta yüzen renkli balıkları görebiliyorsunuz. Havuzun ortasındaki küçük adacıkta, kendi ışığıyla parıldıyor gibi görünen tek bir beyaz çiçek var.',
        choices: {
          'choice-5': {
            text: 'Adacığa doğru yürü',
            description: 'Çiçek seni çağırıyor',
          },
          'choice-6': {
            text: 'Havuzun kenarında dinlen',
            description: 'Bir an için düşünmek için dur',
          },
        },
      },
      'node-4': {
        title: 'Uyanış',
        narration:
          'Parmakların sembollere değdiğinde, meşe titriyor ve gövdeden görünmez bir figür beliriyor. Işık ve yapraklardan oluşan kadim bir orman ruhu bu. "Beni uyandırdın, gezgin," diye fısıldıyor. "Bu kutsal yerde ne arıyorsun?"',
        choices: {
          'choice-7': {
            text: 'Bilgelik iste',
            description: 'Bilgi en büyük hazine',
          },
          'choice-8': {
            text: 'Koruma iste',
            description: 'Tehlikeli bir dünyada güvenlik',
          },
        },
      },
      'node-5': {
        title: 'Karanlık Koy',
        narration:
          'Meşenin yanından geçip kendini ormanın daha karanlık bir bölümünde bulursunuz. Buradaki ağaçlar kıvrılmış, köşe bucağa gölgeler hareket ediyor. Asmalarla kısmen gizlenmiş bir mağara girişi ve ormanın derinliklerinden gelen soluk bir ışık fark ediyorsunuz.',
        choices: {
          'choice-9': {
            text: 'Mağaraya gir',
            description: 'İçinde ne olduğunu keşfet',
          },
          'choice-10': {
            text: 'Işığı takip et',
            description: 'Işık genellikle güvenlik demektir',
          },
        },
      },
      'node-6': {
        title: 'Fısıltılar Adası',
        narration:
          'Adacığa doğru yürürken su şaşırtıcı derecede ılık. Beyaz çiçek yaklaştıkça titriyor ve bunun aslında bir çiçek değil, enerjiyle vızıldayan kristal bir yapı olduğunu fark ediyorsunuz. Ona dokunmak her şeyi değiştirebilir.',
        choices: {
          'choice-11': {
            text: 'Kristal çiçeğe dokun',
            description: 'Bilinemezi kucakla',
          },
          'choice-12': {
            text: 'Uzakta incele',
            description: 'Meraktan önce tedbir',
          },
        },
      },
      'node-7': {
        title: 'Su Başındaki Düşler',
        narration:
          'Havuzun kenarına oturuyorsunuz ve uyuşukluk sizi kaplıyor. Yarı uyku halinde, ormanın geçmişinin vizyonlarını görüyorsunuz: kadim uygarlıklar, büyülü yaratıklar ve her şeyin kalbinde büyük bir ağaç. Bir ses, bu vizyonları anlamak isteyip istemediğinizi soruyor.',
        choices: {
          'choice-13': {
            text: 'Vizyonu kucakla',
            description: 'Düşün derinliklerine dal',
          },
          'choice-14': {
            text: 'Kendini uyandır',
            description: 'Bazı rüyalar çok derin',
          },
        },
      },
      'node-8': {
        title: 'Ruhun Sınavı',
        narration:
          '"Bilgelik hak edilmelidir," diyor ruh. Çevrenizdeki orman canlı ahşaptan bir labirente dönüşüyor. "Kalp Ağacına giden yolu bul, ve sana asırların bilgeliğini bahşedeceğim. Ama dikkat et — orman, sırlarını arayan herkesi sınar."',
        choices: {
          'choice-15': {
            text: 'İçgüdüyle yön bul',
            description: 'İç pusulana güven',
          },
          'choice-16': {
            text: 'Ateşböceklerini takip et',
            description: 'Doğa genellikle yol gösterir',
          },
        },
      },
      'node-9': {
        title: 'Muhafızın Kutsaması',
        narration:
          'Ruh gülümsüyor ve etrafınızda koruyucu bir büyü dokuyor. "Zarardan korunacaksın, ama koruma sorumluluk getirir. Bu hediyeyi ormanı korumak için mi, yoksa kendi yolunda kendini korumak için mi kullanacaksın?"',
        choices: {
          'choice-17': {
            text: 'Ormanı koru',
            description: 'Onun muhafızı ol',
          },
          'choice-18': {
            text: 'Kendi yolunda yürü',
            description: 'Yolculuğun için koruma',
          },
        },
      },
      'node-10': {
        title: 'Kristal Mağara',
        narration:
          'Mağaranın içinde, kalp atışı gibi atan ışıltılı kristallerle kaplı duvarlar buluyorsunuz. Ortada, sıvı gümüşten bir havuz yüzünüzü değil, olası gelecekleri yansıtıyor. Burada büyük bir güç hissediyorsunuz, ama aynı zamanda büyük bir tehlike de.',
        choices: {
          'choice-19': {
            text: 'Havuzdan iç',
            description: 'Kaderini gör',
          },
          'choice-20': {
            text: 'Bir kristal al',
            description: 'Saklamak için bir parça büyü',
          },
        },
      },
      'node-11': {
        title: 'Peri Halkası',
        narration:
          'Işık sizi, mantarların mükemmel bir daire içinde büyüdüğü bir açıklığa götürüyor. Halkanın içinde küçük ışıklar dans ediyor ve çan sesine benzer bir kahkaha duyuyorsunuz. Periler sizi dansa davet ediyor, ama dairelerinde zamanın farklı aktığını uyarıyorlar.',
        choices: {
          'choice-21': {
            text: 'Dansa katıl',
            description: 'Perilerle dans et',
          },
          'choice-22': {
            text: 'Kibarca reddet',
            description: 'Saygıyla izle',
          },
        },
      },
      'node-12': {
        title: 'Dönüşüm',
        narration:
          'Kristale dokunduğunuz an, enerji içinizden akıyor. Duyularınızın keskinleştiğini hissediyorsunuz — ağaçların nefes alışını duyabiliyor, yer altındaki kökleri hissedebiliyor ve ormanın kendisinin kalp atışını algılayabiliyorsunuz. İnsandan daha fazla bir şey oluyorsunuz.',
        choices: {
          'choice-23': {
            text: 'Değişimi kucakla',
            description: 'Doğayla bir ol',
          },
          'choice-24': {
            text: 'Diren ve çekil',
            description: 'Kim olduğun olarak kal',
          },
        },
      },
      'node-13': {
        title: 'Kehanetin Açıklanması',
        narration:
          'Vizyonlarınız net bir mesaja dönüşüyor: orman ölüyor ve siz onun hayatta kalmasının anahtarısınız. Kuzeyden yayılan kadim bir hastalık var, ve sadece büyülü patikalardan geçen biri onu durdurabilir. Önünüzdeki seçim açık.',
        choices: {
          'choice-25': {
            text: 'Kaderini kabul et',
            description: 'Ormanı kurtar',
          },
          'choice-26': {
            text: 'Yük çok ağır',
            description: 'Başka bir yol seç',
          },
        },
      },
      'node-14': {
        title: 'Yol Ayrımı',
        narration:
          'Kendinizi üç yolun kesiştiği bir yol ayrımında buluyorsunuz. Her patika farklı bir renkte parlıyor: zenginlik için altın, büyüme için yeşil, ve bilgi için mavi. Orman kararınızı bekliyor, kaderi bir ipin ucunda sallanıyor.',
        choices: {
          'choice-27': {
            text: 'Altın patika',
            description: 'Hazine ara',
          },
          'choice-28': {
            text: 'Yeşil patika',
            description: 'Uyum ara',
          },
          'choice-29': {
            text: 'Mavi patika',
            description: 'Anlayış ara',
          },
        },
      },
      'node-15': {
        title: 'Kalp Ağacı Bulundu',
        narration:
          'İçgüdüleriniz sizi doğru bir şekilde yönlendiriyor ve Kalp Ağacının durduğu bir koruya çıkıyorsunuz — altın kabuklu ve zümrüt gibi parlayan yapraklı devasa bir ağaç. Ruh beliriyor ve size ormanın kadim bilgeliğini bahşediyor. Yüzyıllardır doğanın dilini gerçekten anlayan ilk insan oluyorsunuz, ve insan dünyasında onun sesi olma sözü veriyorsunuz.',
        choices: {},
      },
      'node-16': {
        title: 'Ateşböceği Hediyesi',
        narration:
          'Ateşböcekleri sizi Kalp Ağacına değil, ormanın son ejderhalarının uyuduğu gizli bir koruya götürüyor. Yaklaşmanızla uyanıyorlar ve size sonsuz dostluklarını bahşediyorlar. Ejderha müttefikleriyle, insanlar ve kadim ejderhalar dünyasını birleştiren Ejderha Dostu efsanesi oluyorsunuz.',
        choices: {},
      },
      'node-17': {
        title: 'Ebedi Muhafız',
        narration:
          'Ormanı koruma sorumluluğunu kabul ediyorsunuz ve ruh sizi Ebedi Muhafız haline getiriyor — tamamen insan değil, tamamen ruh değil, ama arada bir şey. Bu ormanları yüzyıllarca gözetecek, kaybolmuş gezginlere rehberlik edecek ve kadim büyüyü onu sömürmek isteyenlerden koruyacaksınız.',
        choices: {},
      },
      'node-18': {
        title: 'Korunmuş Gezgin',
        narration:
          'Ruhun kutsamasıyla ormandan ayrılıyorsunuz, tüm zararlardan korunmuş. Uzun ve şanslı bir yaşam sürüyorsunuz, kazalardan ve hastalıklardan korunmuş. Ama bazen rüyalarında ormanın çağrısını duyuyorsunuz, doğru seçimi yapıp yapmadığınızı merak ediyorsunuz.',
        choices: {},
      },
      'node-19': {
        title: 'Kâhin Vizyonu',
        narration:
          'Sıvı gümüş size tüm olası gelecekleri gösteriyor ve kehanet hediyesini kazanıyorsunuz. Ormandan diğerlerinin kaderlerinden geçmelerine yardımcı olabilecek bir kâhin olarak ayrılıyorsunuz. Ama geleceği bilmek ağır bir yük — henüz gelmemiş hem sevinçleri hem de üzüntüleri görüyorsunuz.',
        choices: {},
      },
      'node-20': {
        title: 'Kristal Bekçi',
        narration:
          'Aldığınız kristal vızıldayan ve karanlıkta yolunuzu aydınlatan sabit bir yoldaşınız oluyor. Kristal Bekçisi olarak biliniyorsunuz, hastaları iyileştirmek ve kötülüğü uzak tutmak için gücünü kullanıyorsunuz. Orman her zaman sizinle kalıyor, cebinizde onun büyüsünden bir parça.',
        choices: {},
      },
      'node-21': {
        title: 'Peri Dostu',
        narration:
          'Perilerle şafağa kadar dans ediyorsunuz, ama insan dünyasında onlarca yıl geçiyor. Döndüğünüzde değişmemişsiniz, ama perilerin kutsamasını taşıyorsunuz. Göz boyamayı görebilir, küçük halkla konuşabilir ve asla yaşlanmayacaksınız. İnsanlar dünyası ile peri diyarı arasında bir köprü oluyorsunuz.',
        choices: {},
      },
      'node-22': {
        title: 'Saygılı Gözlemci',
        narration:
          'Dairenin dışından peri dansını izliyorsunuz, bilgelik ve kısıtlama gösteriyorsunuz. Periler saygınızı fark ediyor ve size kutsal ağaçlarından bir tohum hediye ediyorlar. Ekilince, saf bilginin meyvelerini veren bir ağaç haline geliyor. Gerçeği arayanlarla meyvenin bilgeliğini paylaşan bilge bir alim oluyorsunuz.',
        choices: {},
      },
      'ending-1': {
        title: 'Doğa Bağı',
        narration:
          'Dönüşümünüzü tamamen kucaklıyorsunuz, hayvanlarla konuşma ve bitkilerin büyümesini yönetme gücüyle ormanın bekçisi haline geliyorsunuz. Büyülü ormanlarla bir olmak için insan yaşamınızı geride bırakıyorsunuz, daha önce bilmediğiniz bir huzur buluyorsunuz.',
        choices: {},
      },
      'ending-2': {
        title: 'Orman Kurtarıcı',
        narration:
          'Kaderinizi kabul ediyor ve Orman Kurtarıcısı oluyorsunuz. Yeni güçlerle kuzeye hastalıkla yüzleşmeye gidiyorsunuz. Savaş şiddetli, ama cesaretiniz galip geliyor. Sadece bu ormanı değil, kadim kök ağı üzerinden ona bağlı tüm ormanları kurtarıyorsunuz.',
        choices: {},
      },
      'ending-3': {
        title: 'Mütevazı Yol',
        narration:
          'Kader yükünü kabul etmemeyi seçiyorsunuz ve orman dürüstlüğünüze saygı duyuyor. Güç yerine basit bir kutsama alıyorsunuz: eve yolu her zaman bulma yeteneği. Yaşamınız değişmeden ormandan ayrılıyorsunuz, ama bazen en cesur seçimin kendi sınırlarını bilmek olduğunu bilerek.',
        choices: {},
      },
      'ending-4': {
        title: 'Altın Hazine',
        narration:
          'Altın patika sizi hayal edemeyeceğiniz bir hazineye götürüyor — altın, mücevherler ve kadim büyü yapıtları. Ormandan hayallerinizin ötesinde zengin olarak ayrılıyorsunuz, ama hazine bir uyarı getiriyor: onu bilgece kullan, yoksa o seni kullanır.',
        choices: {},
      },
      'ending-5': {
        title: 'Uyum Arayan',
        narration:
          'Yeşil patika size her şeyle uyum içinde yaşamanın sırrını öğretiyor. Herhangi bir bitki yetiştirme ve dünyanın kendisiyle iletişim kurma yeteneği kazanıyorsunuz. Bir druid oluyorsunuz, hasar görmüş toprakları iyileştirmek ve başkalarına doğaya saygı öğretmek için dünyayı dolaşıyorsunuz.',
        choices: {},
      },
      'ending-6': {
        title: 'Gerçek Arayan',
        narration:
          'Mavi patika varoluşun gizli gerçeklerini açığa çıkarıyor — neden buradayız, nereye gidiyoruz, ve tüm canlıları ne bağlıyor. Bir filozof ve öğretmen oluyorsunuz, anlayış arayanlarla içgörülerinizi paylaşıyorsunuz. Orman size en büyük hediyeyi verdi: yaşamın en derin sorularına cevap.',
        choices: {},
      },
      'path-1': {
        title: '[TR] The Mossy Stone',
        narration: '[TR] You pass a large stone covered in thick, velvet-like moss. It feels warm to the touch.',
        choices: {
          'choice-path-1-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-1-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-2': {
        title: '[TR] The Twisted Roots',
        narration: '[TR] Huge roots snake across the path, requiring you to step carefully. They seem to pulse with life.',
        choices: {
          'choice-path-2-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-2-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-3': {
        title: '[TR] The Sunbeam',
        narration: '[TR] A single beam of sunlight pierces the canopy, illuminating a patch of wildflowers.',
        choices: {
          'choice-path-3-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-3-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-4': {
        title: '[TR] The Blue Butterfly',
        narration: '[TR] A brilliant blue butterfly flutters ahead of you, as if guiding the way.',
        choices: {
          'choice-path-4-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-4-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-5': {
        title: '[TR] The Old Bridge',
        narration: '[TR] You cross a small, creaky wooden bridge over a dry creek bed.',
        choices: {
          'choice-path-5-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-5-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-6': {
        title: '[TR] The Whispering Wind',
        narration: '[TR] The wind picks up, carrying faint whispers that you can\'t quite make out.',
        choices: {
          'choice-path-6-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-6-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-7': {
        title: '[TR] The Stone Circle',
        narration: '[TR] You pass a small circle of stones. Someone—or something—arranged them long ago.',
        choices: {
          'choice-path-7-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-7-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-8': {
        title: '[TR] The Hollow Log',
        narration: '[TR] A massive fallen log blocks the way. You climb over it, smelling damp wood and earth.',
        choices: {
          'choice-path-8-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-8-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-9': {
        title: '[TR] The Deer\'s Trail',
        narration: '[TR] You spot fresh deer tracks crossing your path. The forest is alive around you.',
        choices: {
          'choice-path-9-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-9-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-10': {
        title: '[TR] The Silent Grove',
        narration: '[TR] The bird song suddenly stops as you enter a grove of silver-barked trees.',
        choices: {
          'choice-path-10-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-10-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-11': {
        title: '[TR] The Babbling Brook',
        narration: '[TR] A small brook crosses the path. The water is cool and refreshing.',
        choices: {
          'choice-path-11-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-11-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-12': {
        title: '[TR] The Fern Gully',
        narration: '[TR] You walk through a sea of waist-high ferns that brush against your legs.',
        choices: {
          'choice-path-12-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-12-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-13': {
        title: '[TR] The Owl\'s Perch',
        narration: '[TR] An owl watches you from a high branch, its yellow eyes unblinking.',
        choices: {
          'choice-path-13-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-13-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-14': {
        title: '[TR] The Misty Hollow',
        narration: '[TR] A low mist clings to the ground here, swirling around your boots.',
        choices: {
          'choice-path-14-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-14-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-15': {
        title: '[TR] The Ancient Marker',
        narration: '[TR] An old stone marker stands by the path, its inscriptions worn away by time.',
        choices: {
          'choice-path-15-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-15-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'path-16': {
        title: '[TR] The Edge of the Deep Woods',
        narration: '[TR] The trees grow larger and older. You sense you are approaching the heart of the forest.',
        choices: {
          'choice-path-16-next': {
            text: '[TR] Continue',
            description: '[TR] Press onward',
          },
          'choice-path-16-fast': {
            text: '[TR] Hurry',
            description: '[TR] Move quickly',
          },
        },
      },

      'stream-1': {
        title: '[TR] The Pebbled Shore',
        narration: '[TR] The stream flows over smooth, colorful pebbles. The sound is soothing.',
        choices: {
          'choice-stream-1-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-1-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-2': {
        title: '[TR] The Dragonflies',
        narration: '[TR] Jewel-toned dragonflies dart over the water\'s surface, chasing invisible prey.',
        choices: {
          'choice-stream-2-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-2-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-3': {
        title: '[TR] The Willow Tree',
        narration: '[TR] A weeping willow dips its branches into the stream, creating ripples.',
        choices: {
          'choice-stream-3-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-3-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-4': {
        title: '[TR] The Jumping Fish',
        narration: '[TR] A silver fish leaps from the water to catch a fly, splashing back down.',
        choices: {
          'choice-stream-4-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-4-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-5': {
        title: '[TR] The Narrow Gorge',
        narration: '[TR] The stream cuts through a narrow rocky gorge. You carefully walk along the edge.',
        choices: {
          'choice-stream-5-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-5-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-6': {
        title: '[TR] The Slippery Rocks',
        narration: '[TR] The path becomes rocky and slick with spray. You tread with caution.',
        choices: {
          'choice-stream-6-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-6-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-7': {
        title: '[TR] The Calm Pool',
        narration: '[TR] The stream widens into a small, calm pool before continuing its journey.',
        choices: {
          'choice-stream-7-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-7-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-8': {
        title: '[TR] The River Bend',
        narration: '[TR] The stream takes a sharp turn. You can\'t see what lies around the bend.',
        choices: {
          'choice-stream-8-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-8-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-9': {
        title: '[TR] The Otter\'s Den',
        narration: '[TR] You spot an otter slipping into the water from its den in the bank.',
        choices: {
          'choice-stream-9-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-9-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-10': {
        title: '[TR] The Floating Leaves',
        narration: '[TR] Golden leaves float downstream, like tiny boats on a journey.',
        choices: {
          'choice-stream-10-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-10-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-11': {
        title: '[TR] The Distant Waterfall',
        narration: '[TR] You hear the roar of a waterfall somewhere ahead.',
        choices: {
          'choice-stream-11-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-11-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-12': {
        title: '[TR] The Mist Spray',
        narration: '[TR] The air grows damp with cool mist from the turbulent water.',
        choices: {
          'choice-stream-12-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-12-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-13': {
        title: '[TR] The Rainbow Arch',
        narration: '[TR] Sunlight hits the mist, creating a faint rainbow over the stream.',
        choices: {
          'choice-stream-13-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-13-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-14': {
        title: '[TR] The Spirit\'s Song',
        narration: '[TR] For a moment, the sound of the water sounds like a melodic song.',
        choices: {
          'choice-stream-14-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-14-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-15': {
        title: '[TR] The Golden Sand',
        narration: '[TR] Patches of golden sand line the banks, sparkling in the light.',
        choices: {
          'choice-stream-15-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-15-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },

      'stream-16': {
        title: '[TR] The Widening Stream',
        narration: '[TR] The stream grows wider and deeper. You feel a magical presence ahead.',
        choices: {
          'choice-stream-16-next': {
            text: '[TR] Continue',
            description: '[TR] Follow the stream',
          },
          'choice-stream-16-fast': {
            text: '[TR] Rush',
            description: '[TR] Swim faster',
          },
        },
      },
    },
  },

  es: {
    title: 'El Bosque Encantado',
    description:
      'Un viaje místico a través de un bosque antiguo donde cada elección determina tu destino.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'La Entrada del Bosque',
        narration:
          'Te encuentras al borde de un bosque antiguo. Los árboles se alzan sobre ti, sus ramas formando un dosel que filtra la luz solar en patrones danzantes sobre el suelo del bosque. Un sendero desgastado conduce más profundo en el bosque, mientras que un arroyo brilla a tu derecha.',
        choices: {
          'choice-1': {
            text: 'Seguir el sendero desgastado',
            description: 'El sendero parece bien transitado',
          },
          'choice-2': {
            text: 'Seguir el arroyo',
            description: 'El agua brilla de manera acogedora',
          },
        },
      },
      'node-2': {
        title: 'El Roble Antiguo',
        narration:
          'El sendero te lleva a un roble masivo, su tronco más ancho que una casa. Símbolos extraños están tallados en su corteza, brillando débilmente con una luz etérea. Oyes susurros en el viento, y el aire se siente cargado de magia antigua.',
        choices: {
          'choice-3': {
            text: 'Tocar los símbolos brillantes',
            description: 'Los símbolos pulsan con energía',
          },
          'choice-4': {
            text: 'Continuar más allá del árbol',
            description: 'Mejor no perturbar la magia antigua',
          },
        },
      },
      'node-3': {
        title: 'La Piscina de Cristal',
        narration:
          'Siguiendo el arroyo, descubres una piscina cristalina. El agua es tan transparente que puedes ver peces coloridos nadando abajo. En el centro de la piscina, una pequeña isla sostiene una única flor blanca que parece brillar con su propia luz.',
        choices: {
          'choice-5': {
            text: 'Vadear hacia la isla',
            description: 'La flor te llama',
          },
          'choice-6': {
            text: 'Descansar junto a la piscina',
            description: 'Tomar un momento para reflexionar',
          },
        },
      },
      'node-4': {
        title: 'El Despertar',
        narration:
          'Cuando tus dedos tocan los símbolos, el roble brilla y una figura espectral emerge del tronco. Es un antiguo espíritu del bosque, su forma hecha de luz y hojas. "Me has despertado, viajero," susurra. "¿Qué buscas en este lugar sagrado?"',
        choices: {
          'choice-7': {
            text: 'Pedir sabiduría',
            description: 'El conocimiento es el mayor tesoro',
          },
          'choice-8': {
            text: 'Pedir protección',
            description: 'Seguridad en un mundo peligroso',
          },
        },
      },
      'node-5': {
        title: 'La Hondonada Oscura',
        narration:
          'Caminas más allá del roble y te encuentras en una parte más oscura del bosque. Los árboles aquí están retorcidos, y las sombras se mueven en la esquina de tu visión. Notas una entrada de cueva parcialmente oculta por enredaderas, y una luz tenue que viene de más profundo en el bosque.',
        choices: {
          'choice-9': {
            text: 'Entrar en la cueva',
            description: 'Descubrir lo que yace dentro',
          },
          'choice-10': {
            text: 'Seguir la luz',
            description: 'La luz usualmente significa seguridad',
          },
        },
      },
      'node-6': {
        title: 'La Isla de los Susurros',
        narration:
          'El agua es sorprendentemente cálida mientras vadeas hacia la isla. La flor blanca tiembla al acercarte, y te das cuenta de que no es una flor en absoluto, sino una formación cristalina que zumba con energía. Tocarla podría cambiarlo todo.',
        choices: {
          'choice-11': {
            text: 'Tocar la flor de cristal',
            description: 'Acepta lo desconocido',
          },
          'choice-12': {
            text: 'Estudiarla desde lejos',
            description: 'La cautela antes que la curiosidad',
          },
        },
      },
      'node-7': {
        title: 'Sueños junto al Agua',
        narration:
          'Te sientas junto a la piscina, y el sueño te invade. En tu estado de semi-sueño, ves visiones del pasado del bosque: civilizaciones antiguas, criaturas mágicas y un gran árbol en el corazón de todo. Una voz pregunta si deseas entender estas visiones.',
        choices: {
          'choice-13': {
            text: 'Aceptar la visión',
            description: 'Sumérgete más profundo en el sueño',
          },
          'choice-14': {
            text: 'Despertarte',
            description: 'Algunos sueños son demasiado profundos',
          },
        },
      },
      'node-8': {
        title: 'La Prueba del Espíritu',
        narration:
          '"La sabiduría debe ser ganada," dice el espíritu. El bosque a tu alrededor se transforma en un laberinto de madera viva. "Encuentra tu camino al Árbol del Corazón, y te concederé la sabiduría de las eras. Pero cuidado: el bosque prueba a todos los que buscan sus secretos."',
        choices: {
          'choice-15': {
            text: 'Navegar por instinto',
            description: 'Confía en tu brújula interior',
          },
          'choice-16': {
            text: 'Seguir las luciérnagas',
            description: 'La naturaleza a menudo guía el camino',
          },
        },
      },
      'node-9': {
        title: 'La Bendición del Guardián',
        narration:
          'El espíritu sonríe y teje un encantamiento protector a tu alrededor. "Estarás protegido del daño, pero la protección viene con responsabilidad. ¿Usarás este don para defender el bosque, o para protegerte mientras sigues tu propio camino?"',
        choices: {
          'choice-17': {
            text: 'Defender el bosque',
            description: 'Conviértete en su guardián',
          },
          'choice-18': {
            text: 'Seguir tu propio camino',
            description: 'Protección para tu viaje',
          },
        },
      },
      'node-10': {
        title: 'La Caverna de Cristal',
        narration:
          'Dentro de la cueva, encuentras paredes cubiertas de cristales luminosos que pulsan como un latido del corazón. En el centro, una piscina de plata líquida refleja no tu rostro, sino futuros posibles. Sientes un gran poder aquí, pero también un gran peligro.',
        choices: {
          'choice-19': {
            text: 'Beber de la piscina',
            description: 'Ve tu destino',
          },
          'choice-20': {
            text: 'Tomar un cristal',
            description: 'Un pedazo de magia para guardar',
          },
        },
      },
      'node-11': {
        title: 'El Círculo de Hadas',
        narration:
          'La luz te lleva a un claro donde los hongos crecen en un círculo perfecto. Pequeñas luces bailan dentro del círculo, y oyes risas como campanadas de campanas. Las hadas te invitan a unirte a su danza, pero advierten que el tiempo se mueve diferente en su círculo.',
        choices: {
          'choice-21': {
            text: 'Unirse a la danza',
            description: 'Bailar con las hadas',
          },
          'choice-22': {
            text: 'Declinar educadamente',
            description: 'Observar respetuosamente en su lugar',
          },
        },
      },
      'node-12': {
        title: 'La Transformación',
        narration:
          'El momento en que tocas el cristal, la energía surge a través de ti. Sientes tus sentidos agudizarse: puedes oír a los árboles respirar, sentir las raíces bajo la tierra y percibir el latido del corazón del bosque mismo. Te estás convirtiendo en algo más que humano.',
        choices: {
          'choice-23': {
            text: 'Aceptar el cambio',
            description: 'Conviértete en uno con la naturaleza',
          },
          'choice-24': {
            text: 'Resistir y retirarte',
            description: 'Permanece quien eres',
          },
        },
      },
      'node-13': {
        title: 'La Profecía Revelada',
        narration:
          'Tus visiones se fusionan en un mensaje claro: el bosque está muriendo, y tú eres la clave para su supervivencia. Una plaga antigua se extiende desde el norte, y solo alguien que ha caminado los senderos encantados puede detenerla. La elección ante ti es clara.',
        choices: {
          'choice-25': {
            text: 'Aceptar tu destino',
            description: 'Salva el bosque',
          },
          'choice-26': {
            text: 'La carga es demasiado grande',
            description: 'Elige otro camino',
          },
        },
      },
      'node-14': {
        title: 'La Encrucijada',
        narration:
          'Te encuentras en una encrucijada donde se encuentran tres caminos. Cada camino brilla con un color diferente: dorado para la riqueza, verde para el crecimiento y azul para el conocimiento. El bosque espera tu decisión, su destino pende de un hilo.',
        choices: {
          'choice-27': {
            text: 'El camino dorado',
            description: 'Busca tesoros',
          },
          'choice-28': {
            text: 'El camino verde',
            description: 'Busca armonía',
          },
          'choice-29': {
            text: 'El camino azul',
            description: 'Busca comprensión',
          },
        },
      },
      'node-15': {
        title: 'El Árbol del Corazón Encontrado',
        narration:
          'Tus instintos te guían verdaderamente, y emerges en una arboleda donde se alza el Árbol del Corazón: un árbol masivo con corteza de oro y hojas que brillan como esmeraldas. El espíritu aparece y te concede la antigua sabiduría del bosque. Te conviertes en el primer humano en siglos en entender verdaderamente el lenguaje de la naturaleza, y haces el voto de ser su voz en el mundo humano.',
        choices: {},
      },
      'node-16': {
        title: 'El Regalo de la Luciérnaga',
        narration:
          'Las luciérnagas te llevan no al Árbol del Corazón, sino a una arboleda oculta donde duermen los últimos dragones del bosque. Despiertan a tu acercamiento y te conceden su amistad eterna. Con aliados dragones, te conviertes en una leyenda: el Amigo del Dragón que une el mundo de los humanos y las antiguas serpientes.',
        choices: {},
      },
      'node-17': {
        title: 'El Guardián Eterno',
        narration:
          'Aceptas la responsabilidad de proteger el bosque, y el espíritu te transforma en un Guardián Eterno: ni completamente humano ni completamente espíritu, sino algo intermedio. Velarás por estos bosques durante siglos, guiando a los viajeros perdidos y manteniendo segura la magia antigua de quienes querrían explotarla.',
        choices: {},
      },
      'node-18': {
        title: 'El Viajero Protegido',
        narration:
          'Con la bendición del espíritu sobre ti, dejas el bosque protegido de todo daño. Vives una vida larga y afortunada, protegido de accidentes y enfermedades. Pero a veces, en tus sueños, oyes al bosque llamando, preguntándote si hiciste la elección correcta.',
        choices: {},
      },
      'node-19': {
        title: 'La Visión del Oráculo',
        narration:
          'El líquido plateado te muestra todos los futuros posibles, y ganas el don de la profecía. Dejas el bosque como un oráculo, capaz de guiar a otros a través de sus destinos. Pero conocer el futuro es una carga pesada: ves tanto alegrías como penas que aún están por venir.',
        choices: {},
      },
      'node-20': {
        title: 'El Guardián del Cristal',
        narration:
          'El cristal que tomas se convierte en tu compañero constante, zumbando con magia e iluminando tu camino a través de la oscuridad. Te vuelves conocido como el Guardián del Cristal, usando su poder para curar a los enfermos y alejar el mal. El bosque permanece contigo siempre, un pedazo de su magia en tu bolsillo.',
        choices: {},
      },
      'node-21': {
        title: 'El Amigo de las Hadas',
        narration:
          'Bailas con las hadas hasta el amanecer, aunque pasan décadas en el mundo humano. Cuando regresas, no has cambiado, pero llevas la bendición de las hadas. Puedes ver a través del glamour, hablar con el pequeño pueblo, y nunca envejecerás. Te conviertes en un puente entre el mundo humano y el reino de las hadas.',
        choices: {},
      },
      'node-22': {
        title: 'El Observador Respetuoso',
        narration:
          'Observas la danza de las hadas desde fuera del círculo, mostrando sabiduría y restricción. Las hadas notan tu respeto y te regalan una semilla de su árbol sagrado. Cuando se planta, crece en un árbol que da frutos de conocimiento puro. Te conviertes en un sabio sabio, compartiendo la sabiduría de los frutos con quienes buscan la verdad.',
        choices: {},
      },
      'ending-1': {
        title: 'El Vínculo con la Naturaleza',
        narration:
          'Aceptas plenamente tu transformación, convirtiéndote en un guardián del bosque con el poder de hablar con los animales y comandar el crecimiento de las plantas. Dejas atrás tu vida humana para convertirte en uno con los bosques encantados, encontrando una paz que nunca supiste que existía.',
        choices: {},
      },
      'ending-2': {
        title: 'El Salvador del Bosque',
        narration:
          'Aceptas tu destino y te conviertes en el Salvador del Bosque. Con tus nuevos poderes, viajas al norte para confrontar la plaga. La batalla es feroz, pero tu coraje prevalece. Salvas no solo este bosque, sino todos los bosques conectados a él a través de la antigua red de raíces.',
        choices: {},
      },
      'ending-3': {
        title: 'El Camino Humilde',
        narration:
          'Eliges no aceptar la carga del destino, y el bosque respeta tu honestidad. En lugar de poder, se te concede una simple bendición: la capacidad de siempre encontrar tu camino a casa. Dejas el bosque con tu vida sin cambios, pero con el conocimiento de que a veces la elección más valiente es conocer tus propios límites.',
        choices: {},
      },
      'ending-4': {
        title: 'La Recompensa Dorada',
        narration:
          'El camino dorado te lleva a un tesoro más allá de la imaginación: oro, joyas y artefactos de magia antigua. Dejas el bosque rico más allá de tus sueños, pero el tesoro viene con una advertencia: úsalo sabiamente, o te usará a ti.',
        choices: {},
      },
      'ending-5': {
        title: 'El Buscador de Armonía',
        narration:
          'El camino verde te enseña el secreto de vivir en armonía con todas las cosas. Ganas la habilidad de cultivar cualquier planta y comunicarte con la tierra misma. Te conviertes en un druida, viajando por el mundo para sanar tierras dañadas y enseñar a otros a respetar la naturaleza.',
        choices: {},
      },
      'ending-6': {
        title: 'El Buscador de la Verdad',
        narration:
          'El camino azul revela las verdades ocultas de la existencia: por qué estamos aquí, a dónde vamos y qué conecta a todos los seres vivos. Te conviertes en un filósofo y maestro, compartiendo tus conocimientos con quienes buscan comprensión. El bosque te ha dado el mayor regalo: la respuesta a las preguntas más profundas de la vida.',
        choices: {},
      },
      'path-1': {
        title: '[ES] The Mossy Stone',
        narration: '[ES] You pass a large stone covered in thick, velvet-like moss. It feels warm to the touch.',
        choices: {
          'choice-path-1-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-1-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-2': {
        title: '[ES] The Twisted Roots',
        narration: '[ES] Huge roots snake across the path, requiring you to step carefully. They seem to pulse with life.',
        choices: {
          'choice-path-2-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-2-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-3': {
        title: '[ES] The Sunbeam',
        narration: '[ES] A single beam of sunlight pierces the canopy, illuminating a patch of wildflowers.',
        choices: {
          'choice-path-3-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-3-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-4': {
        title: '[ES] The Blue Butterfly',
        narration: '[ES] A brilliant blue butterfly flutters ahead of you, as if guiding the way.',
        choices: {
          'choice-path-4-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-4-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-5': {
        title: '[ES] The Old Bridge',
        narration: '[ES] You cross a small, creaky wooden bridge over a dry creek bed.',
        choices: {
          'choice-path-5-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-5-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-6': {
        title: '[ES] The Whispering Wind',
        narration: '[ES] The wind picks up, carrying faint whispers that you can\'t quite make out.',
        choices: {
          'choice-path-6-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-6-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-7': {
        title: '[ES] The Stone Circle',
        narration: '[ES] You pass a small circle of stones. Someone—or something—arranged them long ago.',
        choices: {
          'choice-path-7-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-7-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-8': {
        title: '[ES] The Hollow Log',
        narration: '[ES] A massive fallen log blocks the way. You climb over it, smelling damp wood and earth.',
        choices: {
          'choice-path-8-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-8-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-9': {
        title: '[ES] The Deer\'s Trail',
        narration: '[ES] You spot fresh deer tracks crossing your path. The forest is alive around you.',
        choices: {
          'choice-path-9-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-9-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-10': {
        title: '[ES] The Silent Grove',
        narration: '[ES] The bird song suddenly stops as you enter a grove of silver-barked trees.',
        choices: {
          'choice-path-10-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-10-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-11': {
        title: '[ES] The Babbling Brook',
        narration: '[ES] A small brook crosses the path. The water is cool and refreshing.',
        choices: {
          'choice-path-11-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-11-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-12': {
        title: '[ES] The Fern Gully',
        narration: '[ES] You walk through a sea of waist-high ferns that brush against your legs.',
        choices: {
          'choice-path-12-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-12-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-13': {
        title: '[ES] The Owl\'s Perch',
        narration: '[ES] An owl watches you from a high branch, its yellow eyes unblinking.',
        choices: {
          'choice-path-13-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-13-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-14': {
        title: '[ES] The Misty Hollow',
        narration: '[ES] A low mist clings to the ground here, swirling around your boots.',
        choices: {
          'choice-path-14-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-14-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-15': {
        title: '[ES] The Ancient Marker',
        narration: '[ES] An old stone marker stands by the path, its inscriptions worn away by time.',
        choices: {
          'choice-path-15-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-15-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'path-16': {
        title: '[ES] The Edge of the Deep Woods',
        narration: '[ES] The trees grow larger and older. You sense you are approaching the heart of the forest.',
        choices: {
          'choice-path-16-next': {
            text: '[ES] Continue',
            description: '[ES] Press onward',
          },
          'choice-path-16-fast': {
            text: '[ES] Hurry',
            description: '[ES] Move quickly',
          },
        },
      },

      'stream-1': {
        title: '[ES] The Pebbled Shore',
        narration: '[ES] The stream flows over smooth, colorful pebbles. The sound is soothing.',
        choices: {
          'choice-stream-1-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-1-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-2': {
        title: '[ES] The Dragonflies',
        narration: '[ES] Jewel-toned dragonflies dart over the water\'s surface, chasing invisible prey.',
        choices: {
          'choice-stream-2-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-2-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-3': {
        title: '[ES] The Willow Tree',
        narration: '[ES] A weeping willow dips its branches into the stream, creating ripples.',
        choices: {
          'choice-stream-3-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-3-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-4': {
        title: '[ES] The Jumping Fish',
        narration: '[ES] A silver fish leaps from the water to catch a fly, splashing back down.',
        choices: {
          'choice-stream-4-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-4-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-5': {
        title: '[ES] The Narrow Gorge',
        narration: '[ES] The stream cuts through a narrow rocky gorge. You carefully walk along the edge.',
        choices: {
          'choice-stream-5-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-5-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-6': {
        title: '[ES] The Slippery Rocks',
        narration: '[ES] The path becomes rocky and slick with spray. You tread with caution.',
        choices: {
          'choice-stream-6-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-6-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-7': {
        title: '[ES] The Calm Pool',
        narration: '[ES] The stream widens into a small, calm pool before continuing its journey.',
        choices: {
          'choice-stream-7-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-7-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-8': {
        title: '[ES] The River Bend',
        narration: '[ES] The stream takes a sharp turn. You can\'t see what lies around the bend.',
        choices: {
          'choice-stream-8-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-8-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-9': {
        title: '[ES] The Otter\'s Den',
        narration: '[ES] You spot an otter slipping into the water from its den in the bank.',
        choices: {
          'choice-stream-9-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-9-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-10': {
        title: '[ES] The Floating Leaves',
        narration: '[ES] Golden leaves float downstream, like tiny boats on a journey.',
        choices: {
          'choice-stream-10-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-10-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-11': {
        title: '[ES] The Distant Waterfall',
        narration: '[ES] You hear the roar of a waterfall somewhere ahead.',
        choices: {
          'choice-stream-11-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-11-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-12': {
        title: '[ES] The Mist Spray',
        narration: '[ES] The air grows damp with cool mist from the turbulent water.',
        choices: {
          'choice-stream-12-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-12-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-13': {
        title: '[ES] The Rainbow Arch',
        narration: '[ES] Sunlight hits the mist, creating a faint rainbow over the stream.',
        choices: {
          'choice-stream-13-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-13-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-14': {
        title: '[ES] The Spirit\'s Song',
        narration: '[ES] For a moment, the sound of the water sounds like a melodic song.',
        choices: {
          'choice-stream-14-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-14-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-15': {
        title: '[ES] The Golden Sand',
        narration: '[ES] Patches of golden sand line the banks, sparkling in the light.',
        choices: {
          'choice-stream-15-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-15-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },

      'stream-16': {
        title: '[ES] The Widening Stream',
        narration: '[ES] The stream grows wider and deeper. You feel a magical presence ahead.',
        choices: {
          'choice-stream-16-next': {
            text: '[ES] Continue',
            description: '[ES] Follow the stream',
          },
          'choice-stream-16-fast': {
            text: '[ES] Rush',
            description: '[ES] Swim faster',
          },
        },
      },
    },
  },

  de: {
    title: 'Der Verzauberte Wald',
    description:
      'Eine mystische Reise durch einen uralten Wald, wo jede Entscheidung dein Schicksal bestimmt.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'Der Waldeingang',
        narration:
          'Du stehst am Rand eines uralten Waldes. Die Bäume ragen über dir auf, ihre Äste bilden ein Blätterdach, das das Sonnenlicht in tanzende Muster auf dem Waldboden filtert. Ein abgetretener Pfad führt tiefer in den Wald, während ein Bach zu deiner Rechten schimmert.',
        choices: {
          'choice-1': {
            text: 'Dem abgetretenen Pfad folgen',
            description: 'Der Pfad sieht vielbegangen aus',
          },
          'choice-2': {
            text: 'Dem Bach folgen',
            description: 'Das Wasser funkeln einladend',
          },
        },
      },
      'node-2': {
        title: 'Die Alte Eiche',
        narration:
          'Der Pfad führt dich zu einer massiven Eiche, deren Stamm breiter ist als ein Haus. Seltsame Symbole sind in ihre Rinde geschnitzt und leuchten schwach mit einem ätherischen Licht. Du hörst Flüstern im Wind, und die Luft fühlt sich geladen mit uralter Magie an.',
        choices: {
          'choice-3': {
            text: 'Die leuchtenden Symbole berühren',
            description: 'Die Symbole pulsieren mit Energie',
          },
          'choice-4': {
            text: 'Am Baum vorbeigehen',
            description: 'Besser die uralte Magie nicht stören',
          },
        },
      },
      'node-3': {
        title: 'Der Kristallteich',
        narration:
          'Dem Bach folgend entdeckst du einen kristallklaren Teich. Das Wasser ist so durchsichtig, dass du bunte Fische darunter schwimmen sehen kannst. In der Mitte des Teiches hält eine kleine Insel eine einzelne weiße Blume, die mit eigenem Licht zu leuchten scheint.',
        choices: {
          'choice-5': {
            text: 'Zur Insel waten',
            description: 'Die Blume ruft dich',
          },
          'choice-6': {
            text: 'Am Teich ausruhen',
            description: 'Einen Moment der Reflexion nehmen',
          },
        },
      },
      'node-4': {
        title: 'Das Erwachen',
        narration:
          'Als deine Finger die Symbole berühren, schimmert die Eiche und eine gespenstische Gestalt tritt aus dem Stamm hervor. Es ist ein uralter Waldgeist, seine Form besteht aus Licht und Blättern. "Du hast mich geweckt, Wanderer," flüstert er. "Was suchst du an diesem heiligen Ort?"',
        choices: {
          'choice-7': {
            text: 'Um Weisheit bitten',
            description: 'Wissen ist der größte Schatz',
          },
          'choice-8': {
            text: 'Um Schutz bitten',
            description: 'Sicherheit in einer gefährlichen Welt',
          },
        },
      },
      'node-5': {
        title: 'Die Dunkle Senke',
        narration:
          'Du gehst an der Eiche vorbei und findest dich in einem dunkleren Teil des Waldes wieder. Die Bäume hier sind verdreht, und Schatten bewegen sich am Rand deiner Sicht. Du bemerkst eine Höhleneingang, teilweise versteckt von Ranken, und ein schwaches Licht, das aus der Tiefe des Waldes kommt.',
        choices: {
          'choice-9': {
            text: 'In die Höhle eintreten',
            description: 'Entdecke was darin liegt',
          },
          'choice-10': {
            text: 'Dem Licht folgen',
            description: 'Licht bedeutet normalerweise Sicherheit',
          },
        },
      },
      'node-6': {
        title: 'Die Insel der Flüsterer',
        narration:
          'Das Wasser ist überraschend warm, während du zur Insel watetest. Die weiße Blume zittert, als du dich näherst, und du erkennst, dass es gar keine Blume ist, sondern eine kristalline Formation, die mit Energie summt. Sie zu berühren könnte alles verändern.',
        choices: {
          'choice-11': {
            text: 'Die Kristallblume berühren',
            description: 'Das Unbekannte umarmen',
          },
          'choice-12': {
            text: 'Sie aus der Ferne studieren',
            description: 'Vorsicht vor Neugier',
          },
        },
      },
      'node-7': {
        title: 'Träume am Wasser',
        narration:
          'Du setzt dich an den Teich, und Schläfrigkeit überkommt dich. In deinem Halbschlaf siehst du Visionen der Waldvergangenheit: uralte Zivilisationen, magische Kreaturen und einen großen Baum im Herzen von allem. Eine Stimme fragt, ob du diese Visionen verstehen möchtest.',
        choices: {
          'choice-13': {
            text: 'Die Vision annehmen',
            description: 'Tiefer in den Traum eintauchen',
          },
          'choice-14': {
            text: 'Dich wecken',
            description: 'Manche Träume sind zu tief',
          },
        },
      },
      'node-8': {
        title: 'Die Prüfung des Geistes',
        narration:
          '"Weisheit muss verdient werden," sagt der Geist. Der Wald um dich herum verwandelt sich in ein Labyrinth aus lebendem Holz. "Finde deinen Weg zum Herzensbaum, und ich werde dir die Weisheit der Zeitalter gewähren. Aber sei gewarnt: der Wald prüft alle, die seine Geheimnisse suchen."',
        choices: {
          'choice-15': {
            text: 'Dem Instinkt folgen',
            description: 'Vertraue deinem inneren Kompass',
          },
          'choice-16': {
            text: 'Den Glühwürmchen folgen',
            description: 'Die Natur zeigt oft den Weg',
          },
        },
      },
      'node-9': {
        title: 'Der Segen des Wächters',
        narration:
          'Der Geist lächelt und webt einen Schutzzauber um dich. "Du wirst vor Schaden geschützt sein, aber Schutz kommt mit Verantwortung. Wirst du dieses Geschenk nutzen, um den Wald zu verteidigen, oder um dich selbst zu schützen, während du deinen eigenen Weg gehst?"',
        choices: {
          'choice-17': {
            text: 'Den Wald verteidigen',
            description: 'Werde sein Wächter',
          },
          'choice-18': {
            text: 'Deinen eigenen Weg gehen',
            description: 'Schutz für deine Reise',
          },
        },
      },
      'node-10': {
        title: 'Die Kristallhöhle',
        narration:
          'Innerhalb der Höhle findest du Wände bedeckt mit leuchtenden Kristallen, die wie ein Herzschlag pulsieren. In der Mitte spiegelt ein Pool aus flüssigem Silber nicht dein Gesicht, sondern mögliche Zukünfte. Du spürst große Macht hier, aber auch große Gefahr.',
        choices: {
          'choice-19': {
            text: 'Aus dem Pool trinken',
            description: 'Siehe dein Schicksal',
          },
          'choice-20': {
            text: 'Einen Kristall nehmen',
            description: 'Ein Stück Magie zum Behalten',
          },
        },
      },
      'node-11': {
        title: 'Der Feenring',
        narration:
          'Das Licht führt dich zu einer Lichtung, wo Pilze in einem perfekten Kreis wachsen. Winzige Lichter tanzen innerhalb des Rings, und du hörst Gelächter wie klingelnde Glocken. Die Feen laden dich ein, ihrem Tanz beizutreten, warnen aber, dass sich die Zeit in ihrem Kreis anders bewegt.',
        choices: {
          'choice-21': {
            text: 'Dem Tanz beitreten',
            description: 'Mit den Feen tanzen',
          },
          'choice-22': {
            text: 'Höflich ablehnen',
            description: 'Stattdessen respektvoll zuschauen',
          },
        },
      },
      'node-12': {
        title: 'Die Verwandlung',
        narration:
          'In dem Moment, als du den Kristall berührst, durchströmt dich Energie. Du spürst, wie sich deine Sinne schärfen: du kannst die Bäume atmen hören, die Wurzeln unter der Erde spüren und den Herzschlag des Waldes selbst wahrnehmen. Du wirst zu etwas mehr als menschlich.',
        choices: {
          'choice-23': {
            text: 'Die Veränderung annehmen',
            description: 'Eins mit der Natur werden',
          },
          'choice-24': {
            text: 'Widerstehen und zurückziehen',
            description: 'Bleibe wer du bist',
          },
        },
      },
      'node-13': {
        title: 'Die Offenbarung der Prophezeiung',
        narration:
          'Deine Visionen verschmelzen zu einer klaren Botschaft: der Wald stirbt, und du bist der Schlüssel zu seinem Überleben. Eine uralte Seuche breitet sich vom Norden aus, und nur jemand, der die verzauberten Pfade gewandelt ist, kann sie aufhalten. Die Wahl vor dir ist klar.',
        choices: {
          'choice-25': {
            text: 'Dein Schicksal annehmen',
            description: 'Rette den Wald',
          },
          'choice-26': {
            text: 'Die Bürde ist zu groß',
            description: 'Wähle einen anderen Weg',
          },
        },
      },
      'node-14': {
        title: 'Die Kreuzung',
        narration:
          'Du findest dich an einer Kreuzung wieder, wo drei Pfade zusammentreffen. Jeder Pfad leuchtet in einer anderen Farbe: Gold für Reichtum, Grün für Wachstum und Blau für Wissen. Der Wald wartet auf deine Entscheidung, sein Schicksal hängt in der Schwebe.',
        choices: {
          'choice-27': {
            text: 'Der goldene Pfad',
            description: 'Schatz suchen',
          },
          'choice-28': {
            text: 'Der grüne Pfad',
            description: 'Harmonie suchen',
          },
          'choice-29': {
            text: 'Der blaue Pfad',
            description: 'Verständnis suchen',
          },
        },
      },
      'node-15': {
        title: 'Der Herzensbaum Gefunden',
        narration:
          'Deine Instinkte führen dich wahrhaftig, und du trittst in eine Lichtung hervor, wo der Herzensbaum steht: ein massiver Baum mit Rinde aus Gold und Blättern, die wie Smaragde schimmern. Der Geist erscheint und verleiht dir die uralte Weisheit des Waldes. Du wirst der erste Mensch in Jahrhunderten, der wahrhaftig die Sprache der Natur versteht, und du schwörst, ihre Stimme in der menschlichen Welt zu sein.',
        choices: {},
      },
      'node-16': {
        title: 'Das Geschenk des Glühwürmchens',
        narration:
          'Die Glühwürmchen führen dich nicht zum Herzensbaum, sondern zu einer verborgenen Lichtung, wo die letzten Drachen des Waldes schlafen. Sie erwachen bei deiner Annäherung und gewähren dir ihre ewige Freundschaft. Mit Drachenverbündeten wirst du zur Legende: der Drachenfreund, der die Welt der Menschen und die uralten Würmer verbindet.',
        choices: {},
      },
      'node-17': {
        title: 'Der Ewige Wächter',
        narration:
          'Du nimmst die Verantwortung an, den Wald zu schützen, und der Geist verwandelt dich in einen Ewigen Wächter: weder vollständig menschlich noch vollständig Geist, sondern etwas dazwischen. Du wirst diese Wälder für Jahrhunderte bewachen, verlorene Wanderer führen und die uralte Magie vor denen schützen, die sie ausbeuten würden.',
        choices: {},
      },
      'node-18': {
        title: 'Der Geschützte Wanderer',
        narration:
          'Mit dem Segen des Geistes verlässt du den Wald, geschützt vor allem Schaden. Du lebst ein langes und glückliches Leben, beschützt vor Unfällen und Krankheiten. Aber manchmal hörst du im Traum den Wald rufen und fragst dich, ob du die richtige Wahl getroffen hast.',
        choices: {},
      },
      'node-19': {
        title: 'Die Vision des Orakels',
        narration:
          'Die flüssige Silber zeigt dir alle möglichen Zukünfte, und du erhältst das Geschenk der Prophezeiung. Du verlässt den Wald als Orakel, fähig andere durch ihre Schicksale zu führen. Aber die Zukunft zu kennen ist eine schwere Bürde: du siehst sowohl Freuden als auch Schmerzen, die noch kommen werden.',
        choices: {},
      },
      'node-20': {
        title: 'Der Kristallhüter',
        narration:
          'Der Kristall, den du nimmst, wird dein ständiger Begleiter, summend mit Magie und deinen Weg durch die Dunkelheit erleuchtend. Du wirst bekannt als der Kristallhüter, seine Kraft nutzend, um die Kranken zu heilen und das Böse abzuwehren. Der Wald bleibt immer bei dir, ein Stück seiner Magie in deiner Tasche.',
        choices: {},
      },
      'node-21': {
        title: 'Der Feenfreund',
        narration:
          'Du tanzt mit den Feen bis zum Morgengrauen, obwohl Jahrzehnte in der menschlichen Welt vergehen. Wenn du zurückkehrst, bist du unverändert, aber du trägst den Segen der Feen. Du kannst durch Glamour sehen, mit dem kleinen Volk sprechen und wirst niemals altern. Du wirst eine Brücke zwischen der menschlichen Welt und dem Feenreich.',
        choices: {},
      },
      'node-22': {
        title: 'Der Respektvolle Beobachter',
        narration:
          'Du beobachtest den Feentanz von außerhalb des Kreises, Weisheit und Zurückhaltung zeigend. Die Feen bemerken deinen Respekt und schenken dir einen Samen ihres heiligen Baumes. Wenn gepflanzt, wächst er zu einem Baum, der Früchte reinen Wissens trägt. Du wirst ein weiser Weiser, die Weisheit der Früchte mit denen teilend, die die Wahrheit suchen.',
        choices: {},
      },
      'ending-1': {
        title: 'Die Naturverbundenheit',
        narration:
          'Du nimmst deine Verwandlung vollständig an und wirst zu einem Wächter des Waldes mit der Macht, mit Tieren zu sprechen und das Wachstum von Pflanzen zu befehligen. Du lässt dein menschliches Leben hinter dir, um eins mit den verzauberten Wäldern zu werden, einen Frieden findend, von dem du nie wusstest, dass er existierte.',
        choices: {},
      },
      'ending-2': {
        title: 'Der Waldretter',
        narration:
          'Du nimmst dein Schicksal an und wirst zum Waldretter. Mit deinen neuen Kräften reist du nach Norden, um der Seuche zu begegnen. Die Schlacht ist heftig, aber dein Mut siegt. Du rettest nicht nur diesen Wald, sondern alle Wälder, die durch das uralte Wurzelnetzwerk mit ihm verbunden sind.',
        choices: {},
      },
      'ending-3': {
        title: 'Der Bescheidene Weg',
        narration:
          'Du entscheidest dich, die Bürde des Schicksals nicht anzunehmen, und der Wald respektiert deine Ehrlichkeit. Anstelle von Macht wird dir ein einfacher Segen gewährt: die Fähigkeit, immer den Weg nach Hause zu finden. Du verlässt den Wald mit unverändertem Leben, aber mit dem Wissen, dass manchmal die mutigste Wahl darin besteht, deine eigenen Grenzen zu kennen.',
        choices: {},
      },
      'ending-4': {
        title: 'Die Goldene Belohnung',
        narration:
          'Der goldene Pfad führt dich zu einem Schatz jenseits der Vorstellungskraft: Gold, Juwelen und Artefakte uralter Magie. Du verlässt den Wald reich jenseits deiner Träume, aber der Schatz kommt mit einer Warnung: nutze ihn weise, oder er wird dich nutzen.',
        choices: {},
      },
      'ending-5': {
        title: 'Der Harmoniesucher',
        narration:
          'Der grüne Pfad lehrt dich das Geheimnis, in Harmonie mit allen Dingen zu leben. Du erhältst die Fähigkeit, jede Pflanze zu züchten und mit der Erde selbst zu kommunizieren. Du wirst ein Druide, die Welt bereisend, um beschädigte Länder zu heilen und andere zu lehren, die Natur zu respektieren.',
        choices: {},
      },
      'ending-6': {
        title: 'Der Wahrheitssucher',
        narration:
          'Der blaue Pfad enthüllt die verborgenen Wahrheiten der Existenz: warum wir hier sind, wohin wir gehen und was alle lebenden Wesen verbindet. Du wirst ein Philosoph und Lehrer, deine Erkenntnisse mit denen teilend, die Verständnis suchen. Der Wald hat dir das größte Geschenk gegeben: die Antwort auf die tiefsten Fragen des Lebens.',
        choices: {},
      },
    },
  },

  fr: {
    title: 'La Forêt Enchantée',
    description:
      "Un voyage mystique à travers une forêt ancienne où chaque choix détermine votre destin.",
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: "L'Entrée de la Forêt",
        narration:
          "Vous vous tenez au bord d'une forêt ancienne. Les arbres se dressent au-dessus de vous, leurs branches formant une canopée qui filtre la lumière du soleil en motifs dansants sur le sol de la forêt. Un sentier usé mène plus profondément dans les bois, tandis qu'un ruisseau scintille à votre droite.",
        choices: {
          'choice-1': {
            text: "Suivre le sentier usé",
            description: "Le sentier semble bien fréquenté",
          },
          'choice-2': {
            text: "Suivre le ruisseau",
            description: "L'eau scintille de manière invitante",
          },
        },
      },
      'node-2': {
        title: "Le Chêne Ancien",
        narration:
          "Le sentier vous mène à un chêne massif, dont le tronc est plus large qu'une maison. D'étranges symboles sont gravés dans son écorce, brillant faiblement d'une lumière éthérée. Vous entendez des murmures dans le vent, et l'air semble chargé d'une magie ancienne.",
        choices: {
          'choice-3': {
            text: "Toucher les symboles lumineux",
            description: "Les symboles pulsent d'énergie",
          },
          'choice-4': {
            text: "Continuer au-delà de l'arbre",
            description: "Mieux vaut ne pas déranger la magie ancienne",
          },
        },
      },
      'node-3': {
        title: "La Piscine de Cristal",
        narration:
          "En suivant le ruisseau, vous découvrez une piscine d'eau cristalline. L'eau est si transparente que vous pouvez voir des poissons colorés nager en dessous. Au centre de la piscine, une petite île abrite une seule fleur blanche qui semble briller de sa propre lumière.",
        choices: {
          'choice-5': {
            text: "Gagner l'île à gué",
            description: "La fleur vous appelle",
          },
          'choice-6': {
            text: "Se reposer au bord de la piscine",
            description: "Prendre un moment pour réfléchir",
          },
        },
      },
      'node-4': {
        title: "L'Éveil",
        narration:
          "Lorsque vos doigts touchent les symboles, le chêne scintille et une figure spectrale émerge du tronc. C'est un ancien esprit de la forêt, sa forme faite de lumière et de feuilles. «Vous m'avez réveillé, voyageur,» murmure-t-il. «Que cherchez-vous en ce lieu sacré?»",
        choices: {
          'choice-7': {
            text: "Demander la sagesse",
            description: "La connaissance est le plus grand trésor",
          },
          'choice-8': {
            text: "Demander la protection",
            description: "La sécurité dans un monde dangereux",
          },
        },
      },
      'node-5': {
        title: "Le Creux Obscur",
        narration:
          "Vous passez le chêne et vous retrouvez dans une partie plus sombre de la forêt. Les arbres ici sont tordus, et des ombres se déplacent au coin de votre vision. Vous remarquez une entrée de grotte partiellement cachée par des lianes, et une faible lumière provenant des profondeurs de la forêt.",
        choices: {
          'choice-9': {
            text: "Entrer dans la grotte",
            description: "Découvrir ce qui se cache à l'intérieur",
          },
          'choice-10': {
            text: "Suivre la lumière",
            description: "La lumière signifie généralement la sécurité",
          },
        },
      },
      'node-6': {
        title: "L'Île des Murmures",
        narration:
          "L'eau est étonnamment chaude alors que vous gagnez l'île à gué. La fleur blanche tremble à votre approche, et vous réalisez que ce n'est pas du tout une fleur, mais une formation cristalline qui bourdonne d'énergie. La toucher pourrait tout changer.",
        choices: {
          'choice-11': {
            text: "Toucher la fleur de cristal",
            description: "Embrassez l'inconnu",
          },
          'choice-12': {
            text: "L'étudier de loin",
            description: "La prudence avant la curiosité",
          },
        },
      },
      'node-7': {
        title: "Les Rêves au Bord de l'Eau",
        narration:
          "Vous vous asseyez au bord de la piscine, et la somnolence vous envahit. Dans votre état de demi-sommeil, vous voyez des visions du passé de la forêt: des civilisations anciennes, des créatures magiques et un grand arbre au cœur de tout. Une voix demande si vous souhaitez comprendre ces visions.",
        choices: {
          'choice-13': {
            text: "Embrasser la vision",
            description: "Plonger plus profondément dans le rêve",
          },
          'choice-14': {
            text: "Vous réveiller",
            description: "Certains rêves sont trop profonds",
          },
        },
      },
      'node-8': {
        title: "L'Épreuve de l'Esprit",
        narration:
          "«La sagesse doit être méritée,» dit l'esprit. La forêt autour de vous se transforme en un labyrinthe de bois vivant. «Trouvez votre chemin vers l'Arbre du Cœur, et je vous accorderai la sagesse des âges. Mais méfiez-vous: la forêt éprouve tous ceux qui cherchent ses secrets.»",
        choices: {
          'choice-15': {
            text: "Naviguer par instinct",
            description: "Faites confiance à votre boussole intérieure",
          },
          'choice-16': {
            text: "Suivre les lucioles",
            description: "La nature montre souvent le chemin",
          },
        },
      },
      'node-9': {
        title: "La Bénédiction du Gardien",
        narration:
          "L'esprit sourit et tisse un charme protecteur autour de vous. «Vous serez protégé du mal, mais la protection vient avec des responsabilités. Utiliserez-vous ce don pour défendre la forêt, ou pour vous protéger tout en suivant votre propre chemin?»",
        choices: {
          'choice-17': {
            text: "Défendre la forêt",
            description: "Devenez son gardien",
          },
          'choice-18': {
            text: "Suivre votre propre chemin",
            description: "Protection pour votre voyage",
          },
        },
      },
      'node-10': {
        title: "La Caverne de Cristal",
        narration:
          "À l'intérieur de la grotte, vous trouvez des murs couverts de cristaux lumineux qui pulsent comme un battement de cœur. Au centre, une piscine d'argent liquide reflète non pas votre visage, mais des futurs possibles. Vous sentez un grand pouvoir ici, mais aussi un grand danger.",
        choices: {
          'choice-19': {
            text: "Boire de la piscine",
            description: "Voyez votre destin",
          },
          'choice-20': {
            text: "Prendre un cristal",
            description: "Un morceau de magie à garder",
          },
        },
      },
      'node-11': {
        title: "Le Cercle des Fées",
        narration:
          "La lumière vous mène à une clairière où des champignons poussent en cercle parfait. De minuscules lumières dansent à l'intérieur du cercle, et vous entendez des rires comme des cloches qui tintent. Les fées vous invitent à rejoindre leur danse, mais avertissent que le temps s'écoule différemment dans leur cercle.",
        choices: {
          'choice-21': {
            text: "Rejoindre la danse",
            description: "Danser avec les fées",
          },
          'choice-22': {
            text: "Décliner poliment",
            description: "Observer respectueusement à la place",
          },
        },
      },
      'node-12': {
        title: "La Transformation",
        narration:
          "Au moment où vous touchez le cristal, l'énergie traverse votre corps. Vous sentez vos sens s'aiguiser: vous pouvez entendre les arbres respirer, sentir les racines sous la terre et percevoir le battement de cœur de la forêt elle-même. Vous devenez quelque chose de plus qu'humain.",
        choices: {
          'choice-23': {
            text: "Accepter le changement",
            description: "Devenir un avec la nature",
          },
          'choice-24': {
            text: "Résister et se retirer",
            description: "Rester qui vous êtes",
          },
        },
      },
      'node-13': {
        title: "La Prophétie Révélée",
        narration:
          "Vos visions se fondent en un message clair: la forêt meurt, et vous êtes la clé de sa survie. Un fléau ancien se propage du nord, et seul quelqu'un qui a parcouru les chemins enchantés peut l'arrêter. Le choix qui s'offre à vous est clair.",
        choices: {
          'choice-25': {
            text: "Accepter votre destin",
            description: "Sauver la forêt",
          },
          'choice-26': {
            text: "Le fardeau est trop lourd",
            description: "Choisir une autre voie",
          },
        },
      },
      'node-14': {
        title: "La Croisée des Chemins",
        narration:
          "Vous vous retrouvez à une croisée des chemins où trois sentiers se rencontrent. Chaque chemin brille d'une couleur différente: or pour la richesse, vert pour la croissance et bleu pour la connaissance. La forêt attend votre décision, son destin est suspendu.",
        choices: {
          'choice-27': {
            text: "Le chemin doré",
            description: "Chercher le trésor",
          },
          'choice-28': {
            text: "Le chemin vert",
            description: "Chercher l'harmonie",
          },
          'choice-29': {
            text: "Le chemin bleu",
            description: "Chercher la compréhension",
          },
        },
      },
      'node-15': {
        title: "L'Arbre du Cœur Trouvé",
        narration:
          "Vos instincts vous guident véritablement, et vous émergez dans une clairière où se dresse l'Arbre du Cœur: un arbre massif avec une écorce d'or et des feuilles qui scintillent comme des émeraudes. L'esprit apparaît et vous accorde la sagesse ancienne de la forêt. Vous devenez le premier humain depuis des siècles à comprendre véritablement le langage de la nature, et vous faites le vœu d'être sa voix dans le monde humain.",
        choices: {},
      },
      'node-16': {
        title: "Le Cadeau de la Luciole",
        narration:
          "Les lucioles vous mènent non pas à l'Arbre du Cœur, mais à une clairière cachée où dorment les derniers dragons de la forêt. Ils s'éveillent à votre approche et vous accordent leur amitié éternelle. Avec des alliés dragons, vous devenez une légende: l'Ami du Dragon qui relie le monde des humains et des anciens wyrms.",
        choices: {},
      },
      'node-17': {
        title: "Le Gardien Éternel",
        narration:
          "Vous acceptez la responsabilité de protéger la forêt, et l'esprit vous transforme en Gardien Éternel: ni pleinement humain ni pleinement esprit, mais quelque chose entre les deux. Vous veillerez sur ces bois pendant des siècles, guidant les voyageurs perdus et gardant la magie ancienne à l'abri de ceux qui voudraient l'exploiter.",
        choices: {},
      },
      'node-18': {
        title: "Le Voyageur Protégé",
        narration:
          "Avec la bénédiction de l'esprit sur vous, vous quittez la forêt protégé de tout mal. Vous vivez une vie longue et heureuse, à l'abri des accidents et des maladies. Mais parfois, dans vos rêves, vous entendez la forêt appeler, vous demandant si vous avez fait le bon choix.",
        choices: {},
      },
      'node-19': {
        title: "La Vision de l'Oracle",
        narration:
          "L'argent liquide vous montre tous les futurs possibles, et vous gagnez le don de la prophétie. Vous quittez la forêt en tant qu'oracle, capable de guider les autres à travers leurs destins. Mais connaître l'avenir est un lourd fardeau: vous voyez à la fois les joies et les peines qui sont encore à venir.",
        choices: {},
      },
      'node-20': {
        title: "Le Gardien du Cristal",
        narration:
          "Le cristal que vous prenez devient votre compagnon constant, bourdonnant de magie et éclairant votre chemin dans l'obscurité. Vous devenez connu comme le Gardien du Cristal, utilisant son pouvoir pour guérir les malades et repousser le mal. La forêt reste toujours avec vous, un morceau de sa magie dans votre poche.",
        choices: {},
      },
      'node-21': {
        title: "L'Ami des Fées",
        narration:
          "Vous dansez avec les fées jusqu'à l'aube, bien que des décennies passent dans le monde humain. Quand vous revenez, vous n'avez pas changé, mais vous portez la bénédiction des fées. Vous pouvez voir à travers le glamour, parler avec le petit peuple, et vous ne vieillirez jamais. Vous devenez un pont entre le monde humain et le royaume des fées.",
        choices: {},
      },
      'node-22': {
        title: "L'Observateur Respectueux",
        narration:
          "Vous observez la danse des fées depuis l'extérieur du cercle, montrant sagesse et retenue. Les fées remarquent votre respect et vous offrent une graine de leur arbre sacré. Quand elle est plantée, elle devient un arbre qui porte des fruits de connaissance pure. Vous devenez un sage sage, partageant la sagesse des fruits avec ceux qui cherchent la vérité.",
        choices: {},
      },
      'ending-1': {
        title: "Le Lien avec la Nature",
        narration:
          "Vous acceptez pleinement votre transformation, devenant un gardien de la forêt avec le pouvoir de parler avec les animaux et de commander la croissance des plantes. Vous laissez derrière vous votre vie humaine pour devenir un avec les bois enchantés, trouvant une paix dont vous ne saviez pas qu'elle existait.",
        choices: {},
      },
      'ending-2': {
        title: "Le Sauveur de la Forêt",
        narration:
          "Vous acceptez votre destin et devenez le Sauveur de la Forêt. Avec vos nouveaux pouvoirs, vous voyagez au nord pour affronter le fléau. La bataille est féroce, mais votre courage prévaut. Vous sauvez non seulement cette forêt, mais toutes les forêts qui y sont connectées à travers le réseau de racines anciennes.",
        choices: {},
      },
      'ending-3': {
        title: "Le Chemin de l'Humilité",
        narration:
          "Vous choisissez de ne pas accepter le fardeau du destin, et la forêt respecte votre honnêteté. Au lieu du pouvoir, on vous accorde une simple bénédiction: la capacité de toujours trouver votre chemin vers la maison. Vous quittez la forêt avec votre vie inchangée, mais avec la connaissance que parfois le choix le plus courageux est de connaître vos propres limites.",
        choices: {},
      },
      'ending-4': {
        title: "La Récompense d'Or",
        narration:
          "Le chemin doré vous mène à un trésor au-delà de l'imagination: de l'or, des joyaux et des artefacts de magie ancienne. Vous quittez la forêt riche au-delà de vos rêves, mais le trésor vient avec un avertissement: utilisez-le sagement, ou il vous utilisera.",
        choices: {},
      },
      'ending-5': {
        title: "Le Chercheur d'Harmonie",
        narration:
          "Le chemin vert vous enseigne le secret de vivre en harmonie avec toutes choses. Vous gagnez la capacité de cultiver toute plante et de communiquer avec la terre elle-même. Vous devenez un druide, parcourant le monde pour guérir les terres endommagées et enseigner aux autres à respecter la nature.",
        choices: {},
      },
      'ending-6': {
        title: "Le Chercheur de Vérité",
        narration:
          "Le chemin bleu révèle les vérités cachées de l'existence: pourquoi nous sommes ici, où nous allons et ce qui relie tous les êtres vivants. Vous devenez un philosophe et un enseignant, partageant vos connaissances avec ceux qui cherchent la compréhension. La forêt vous a donné le plus grand cadeau: la réponse aux questions les plus profondes de la vie.",
        choices: {},
      },
      'path-1': {
        title: '[FR] The Mossy Stone',
        narration: '[FR] You pass a large stone covered in thick, velvet-like moss. It feels warm to the touch.',
        choices: {
          'choice-path-1-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-1-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-2': {
        title: '[FR] The Twisted Roots',
        narration: '[FR] Huge roots snake across the path, requiring you to step carefully. They seem to pulse with life.',
        choices: {
          'choice-path-2-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-2-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-3': {
        title: '[FR] The Sunbeam',
        narration: '[FR] A single beam of sunlight pierces the canopy, illuminating a patch of wildflowers.',
        choices: {
          'choice-path-3-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-3-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-4': {
        title: '[FR] The Blue Butterfly',
        narration: '[FR] A brilliant blue butterfly flutters ahead of you, as if guiding the way.',
        choices: {
          'choice-path-4-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-4-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-5': {
        title: '[FR] The Old Bridge',
        narration: '[FR] You cross a small, creaky wooden bridge over a dry creek bed.',
        choices: {
          'choice-path-5-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-5-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-6': {
        title: '[FR] The Whispering Wind',
        narration: '[FR] The wind picks up, carrying faint whispers that you can\'t quite make out.',
        choices: {
          'choice-path-6-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-6-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-7': {
        title: '[FR] The Stone Circle',
        narration: '[FR] You pass a small circle of stones. Someone—or something—arranged them long ago.',
        choices: {
          'choice-path-7-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-7-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-8': {
        title: '[FR] The Hollow Log',
        narration: '[FR] A massive fallen log blocks the way. You climb over it, smelling damp wood and earth.',
        choices: {
          'choice-path-8-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-8-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-9': {
        title: '[FR] The Deer\'s Trail',
        narration: '[FR] You spot fresh deer tracks crossing your path. The forest is alive around you.',
        choices: {
          'choice-path-9-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-9-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-10': {
        title: '[FR] The Silent Grove',
        narration: '[FR] The bird song suddenly stops as you enter a grove of silver-barked trees.',
        choices: {
          'choice-path-10-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-10-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-11': {
        title: '[FR] The Babbling Brook',
        narration: '[FR] A small brook crosses the path. The water is cool and refreshing.',
        choices: {
          'choice-path-11-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-11-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-12': {
        title: '[FR] The Fern Gully',
        narration: '[FR] You walk through a sea of waist-high ferns that brush against your legs.',
        choices: {
          'choice-path-12-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-12-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-13': {
        title: '[FR] The Owl\'s Perch',
        narration: '[FR] An owl watches you from a high branch, its yellow eyes unblinking.',
        choices: {
          'choice-path-13-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-13-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-14': {
        title: '[FR] The Misty Hollow',
        narration: '[FR] A low mist clings to the ground here, swirling around your boots.',
        choices: {
          'choice-path-14-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-14-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-15': {
        title: '[FR] The Ancient Marker',
        narration: '[FR] An old stone marker stands by the path, its inscriptions worn away by time.',
        choices: {
          'choice-path-15-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-15-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'path-16': {
        title: '[FR] The Edge of the Deep Woods',
        narration: '[FR] The trees grow larger and older. You sense you are approaching the heart of the forest.',
        choices: {
          'choice-path-16-next': {
            text: '[FR] Continue',
            description: '[FR] Press onward',
          },
          'choice-path-16-fast': {
            text: '[FR] Hurry',
            description: '[FR] Move quickly',
          },
        },
      },

      'stream-1': {
        title: '[FR] The Pebbled Shore',
        narration: '[FR] The stream flows over smooth, colorful pebbles. The sound is soothing.',
        choices: {
          'choice-stream-1-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-1-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-2': {
        title: '[FR] The Dragonflies',
        narration: '[FR] Jewel-toned dragonflies dart over the water\'s surface, chasing invisible prey.',
        choices: {
          'choice-stream-2-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-2-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-3': {
        title: '[FR] The Willow Tree',
        narration: '[FR] A weeping willow dips its branches into the stream, creating ripples.',
        choices: {
          'choice-stream-3-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-3-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-4': {
        title: '[FR] The Jumping Fish',
        narration: '[FR] A silver fish leaps from the water to catch a fly, splashing back down.',
        choices: {
          'choice-stream-4-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-4-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-5': {
        title: '[FR] The Narrow Gorge',
        narration: '[FR] The stream cuts through a narrow rocky gorge. You carefully walk along the edge.',
        choices: {
          'choice-stream-5-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-5-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-6': {
        title: '[FR] The Slippery Rocks',
        narration: '[FR] The path becomes rocky and slick with spray. You tread with caution.',
        choices: {
          'choice-stream-6-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-6-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-7': {
        title: '[FR] The Calm Pool',
        narration: '[FR] The stream widens into a small, calm pool before continuing its journey.',
        choices: {
          'choice-stream-7-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-7-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-8': {
        title: '[FR] The River Bend',
        narration: '[FR] The stream takes a sharp turn. You can\'t see what lies around the bend.',
        choices: {
          'choice-stream-8-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-8-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-9': {
        title: '[FR] The Otter\'s Den',
        narration: '[FR] You spot an otter slipping into the water from its den in the bank.',
        choices: {
          'choice-stream-9-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-9-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-10': {
        title: '[FR] The Floating Leaves',
        narration: '[FR] Golden leaves float downstream, like tiny boats on a journey.',
        choices: {
          'choice-stream-10-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-10-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-11': {
        title: '[FR] The Distant Waterfall',
        narration: '[FR] You hear the roar of a waterfall somewhere ahead.',
        choices: {
          'choice-stream-11-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-11-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-12': {
        title: '[FR] The Mist Spray',
        narration: '[FR] The air grows damp with cool mist from the turbulent water.',
        choices: {
          'choice-stream-12-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-12-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-13': {
        title: '[FR] The Rainbow Arch',
        narration: '[FR] Sunlight hits the mist, creating a faint rainbow over the stream.',
        choices: {
          'choice-stream-13-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-13-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-14': {
        title: '[FR] The Spirit\'s Song',
        narration: '[FR] For a moment, the sound of the water sounds like a melodic song.',
        choices: {
          'choice-stream-14-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-14-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-15': {
        title: '[FR] The Golden Sand',
        narration: '[FR] Patches of golden sand line the banks, sparkling in the light.',
        choices: {
          'choice-stream-15-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-15-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },

      'stream-16': {
        title: '[FR] The Widening Stream',
        narration: '[FR] The stream grows wider and deeper. You feel a magical presence ahead.',
        choices: {
          'choice-stream-16-next': {
            text: '[FR] Continue',
            description: '[FR] Follow the stream',
          },
          'choice-stream-16-fast': {
            text: '[FR] Rush',
            description: '[FR] Swim faster',
          },
        },
      },
    },
  },
};
