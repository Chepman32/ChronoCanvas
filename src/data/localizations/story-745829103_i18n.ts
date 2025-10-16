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

export const story_745829103StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Midnight Garden',
    description: 'You inherit a Victorian mansion with a garden that only blooms at midnight. When you meet the enigmatic gardener who tends it, you discover he',
    author: 'Isabella Crane',
    nodes: {
      'story-745829103-1': {
        title: 'The Inheritance',
        narration: 'The letter from the estate lawyer arrived on your thirtieth birthday. A great-aunt you never knew existed has left you Thornewood Manor—a crumbling Victorian mansion on the edge of a forgotten town. The condition is strange: you must live there for one full moon cycle before deciding whether to keep it. As you arrive at midnight, the iron gates creak open on their own, and you smell flowers blooming impossibly in the winter air.',
        choices: {
          'story-745829103-c1': {
            text: 'Follow the scent of flowers into the garden',
            description: 'Investigate the mysterious fragrance',
          },
          'story-745829103-c2': {
            text: 'Enter the mansion first to explore',
            description: 'Take things in order',
          },
        },
      },
      'story-745829103-3': {
        title: 'Echoing Halls',
        narration: 'The mansion swallows you in velvet darkness. Oil portraits watch from the walls, and the air hums with a note you feel more than hear. Moonlight leaks through fractured stained glass, painting the floor in sapphire patterns.',
        choices: {
          'story-745829103-c5': {
            text: 'Follow the humming through the corridor',
            description: 'Let the sound guide you',
          },
          'story-745829103-c6': {
            text: 'Force the sealed study door open',
            description: 'Seek answers in the manor',
          },
        },
      },
      'story-745829103-5': {
        title: 'Glimmering Vision',
        narration: 'As your fingers brush the bloom, liquid light pours through you. Your pulse syncs with the garden and you glimpse memories that are not yours—moonlit dances, whispered vows, a lonely gardener tending petals that outlive every season.',
        choices: {
          'story-745829103-c9': {
            text: 'Let the vision pull you deeper',
            description: 'Surrender to the memory',
          },
          'story-745829103-c10': {
            text: 'Break contact and steady yourself',
            description: 'Reclaim control',
          },
        },
      },
      'story-745829103-6': {
        title: 'Moonbound Conservatory',
        narration: 'A domed conservatory waits beyond a curtain of ivy. Inside, instruments of brass and crystal hang like constellations, each tremor of the humming note setting them aglow. A hidden door is edged with frost, exhaling midnight air.',
        choices: {
          'story-745829103-c11': {
            text: 'Follow the humming toward the hidden door',
            description: 'Discover what the sound protects',
          },
          'story-745829103-c12': {
            text: 'Clip a glowing bloom to show Elias',
            description: 'Carry proof back to the garden',
          },
        },
      },
      'story-745829103-7': {
        title: 'Ancestral Study',
        narration: 'Dust billows as the sealed study yields. Ledgers, maps, and a portrait of a woman who shares your eyes crowd the shelves. A silver key shaped like a crescent rests atop a velvet journal, waiting for someone to claim it.',
        choices: {
          'story-745829103-c13': {
            text: 'Open the velvet-bound journal',
            description: 'Learn what your ancestor recorded',
          },
          'story-745829103-c14': {
            text: 'Pocket the silver crescent key',
            description: 'Take the talisman for later',
          },
        },
      },
      'story-745829103-10': {
        title: 'Pulse of Starlight',
        narration: 'The energy you pulled back coils inside your chest like a captured comet. Every heartbeat sends sparks down your arms, and the flowers nearest you bloom brighter, bending toward your warmth.',
        choices: {
          'story-745829103-c19': {
            text: 'Channel the power into the mansion\\',
          },
          'story-745829103-c20': {
            text: 'Hold the power within and return to Elias',
            description: 'Test whether you can bridge both worlds',
          },
        },
      },
      'story-745829103-11': {
        title: 'Oath of Thornewood',
        narration: 'The journal reveals a pact struck a century ago: the first heir able to see the midnight blooms must choose to keep the garden between worlds or seal it forever. Elias remains bound until that choice is made with a willing heart.',
        choices: {
          'story-745829103-c21': {
            text: 'Swear to uphold the ancient vow',
            description: 'Accept the duty as written',
          },
          'story-745829103-c22': {
            text: 'Decide to rewrite the pact entirely',
            description: 'Challenge the legacy',
          },
        },
      },
      'story-745829103-12': {
        title: 'Resonant Promise',
        narration: 'Standing within the circle of moonlight, you feel the garden attune to both your breaths. Elias speaks of dawns he has never witnessed and futures he no longer dares imagine.',
        choices: {
          'story-745829103-c23': {
            text: 'Step fully into the circle beside him',
            description: 'Bind your rhythm to the garden',
          },
          'story-745829103-c24': {
            text: 'Keep one foot in the mortal world',
            description: 'Hold space for a shared dawn',
          },
        },
      },
      'story-745829103-13': {
        title: 'Lunar Talisman',
        narration: 'The crescent key warms in your palm, unfolding into a talisman etched with constellations. You sense it can disrupt the enchantment—or redirect it—depending on whose name you speak.',
        choices: {
          'story-745829103-c25': {
            text: 'Use the talisman on the wrought-iron gate',
            description: 'Test whether you can open a new doorway',
          },
          'story-745829103-c26': {
            text: 'Reveal the talisman to Elias',
            description: 'Invite him into the decision',
          },
        },
      },
      'story-745829103-14': {
        title: 'Temporal Lantern',
        narration: 'Behind the humming door you find a lantern suspended in midair, its crystal core shattered into hovering fragments. Each shard holds a memory of the garden at different moons, suspended in time.',
        choices: {
          'story-745829103-c27': {
            text: 'Reforge the crystal with your new energy',
            description: 'Stabilize the magic together',
          },
          'story-745829103-c28': {
            text: 'Scatter the shards to break the loop',
            description: 'Set the trapped moments free',
          },
        },
      },
      'story-745829103-16': {
        title: 'Breaking the Pact',
        narration: 'You challenge the oath, weaving new words into the air. The blooms flicker between fear and exhilaration while Elias steadies you, ready to follow wherever you lead.',
        choices: {
          'story-745829103-c31': {
            text: 'Shatter the binding to free you both',
            description: 'Risk the garden for freedom',
          },
          'story-745829103-c32': {
            text: 'Draw the magic into yourself alone',
            description: 'Carry the cost so Elias can leave',
          },
        },
      },
      'story-745829103-17': {
        title: 'Aligned Heartbeats',
        narration: 'With the lantern restored, the garden hums in harmony. Moonlight and heartbeat blend until you cannot tell where you end and Elias begins.',
        choices: {
          'story-745829103-c33': {
            text: 'Stay in the midnight bloom with him',
            description: 'Choose a life woven from starlight',
          },
          'story-745829103-c34': {
            text: 'Guide the garden toward the coming dawn',
            description: 'Share its magic with the waking world',
          },
        },
      },
      'story-745829103-18': {
        title: 'Threshold of Dawn',
        narration: 'You hold the surge of magic without surrendering to it. The manor groans as the boundary between worlds thins, offering a path back to sunlight if you dare step through together.',
        choices: {
          'story-745829103-c35': {
            text: 'Lead Elias toward the waking world',
            description: 'Promise him a sunrise',
          },
          'story-745829103-c36': {
            text: 'Let the magic anchor you beside him',
            description: 'Accept a twilight existence',
          },
        },
      },
      'story-745829103-19': {
        title: 'Unbound Time',
        narration: 'As the talisman flares and shards scatter, time stutters around the garden. Petals freeze mid-fall while distant church bells ring backward. You have seconds to decide what this new freedom will cost.',
        choices: {
          'story-745829103-c37': {
            text: 'Release the captured hours into the night',
            description: 'Let the garden choose its fate',
          },
          'story-745829103-c38': {
            text: 'Lock the garden away from time forever',
            description: 'Seal the magic even if it wilts',
          },
        },
      },
      'story-745829103-21': {
        title: 'Shared Sunrise',
        narration: 'You guide Elias beyond the gates as dawn breaks, carrying a single luminous bloom as proof the magic can survive the sun. The manor awakens to laughter, music, and a garden that finally welcomes daylight. Love and legacy take root in the open air.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: 'Shattered Spell',
        narration: 'You release the trapped hours, breaking the oath that bound Elias. The garden erupts in a final blaze of light before the blooms dissolve into stardust. Freedom is yours, but the midnight wonder becomes a memory you both carry into unknown futures.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: 'Fading Petals',
        narration: 'You seal the garden away to spare Elias the curse, but the magic withers without the moon. The manor grows quiet, the blooms preserved only in portraits and dreams. Every night you wonder if another choice might have saved the beauty you sacrificed.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Полуночный Сад',
    description: 'Вы наследуете викторианскую усадьбу с садом, который расцветает только в полночь. Когда вы встречаете загадочного садовника, который ухаживает за ним, вы обнаруживаете, что он',
    author: 'Изабелла Крейн',
    nodes: {
      'story-745829103-1': {
        title: 'Наследство',
        narration: 'Письмо от адвоката по наследственным делам пришло в день вашего тридцатилетия. Двоюродная бабушка, о существовании которой вы никогда не знали, оставила вам Поместье Торнвуд - разрушающуюся викторианскую усадьбу на краю забытого города. Условие странное: вы должны прожить там один полный лунный цикл, прежде чем решите, оставить ли её себе. Когда вы приезжаете в полночь, железные ворота открываются сами собой, и вы чувствуете запах цветов, невозможно цветущих в зимнем воздухе.',
        choices: {
          'story-745829103-c1': {
            text: 'Следуйте за ароматом цветов в сад',
            description: 'Исследуйте таинственный аромат',
          },
          'story-745829103-c2': {
            text: 'Сначала войдите в особняк, чтобы исследовать',
            description: 'Действуйте по порядку',
          },
        },
      },
      'story-745829103-3': {
        title: 'Отражающиеся Коридоры',
        narration: 'Особняк поглощает вас бархатной тьмой. Масляные портреты наблюдают со стен, а воздух гудит нотой, которую вы скорее чувствуете, чем слышите. Лунный свет просачивается сквозь разбитые витражи, расписывая пол сапфировыми узорами.',
        choices: {
          'story-745829103-c5': {
            text: 'Следуйте за гудением по коридору',
            description: 'Позвольте звуку вести вас',
          },
          'story-745829103-c6': {
            text: 'Силой откройте запечатанную дверь кабинета',
            description: 'Ищите ответы в особняке',
          },
        },
      },
      'story-745829103-5': {
        title: 'Мерцающее Видение',
        narration: 'Когда ваши пальцы касаются цветка, жидкий свет проливается сквозь вас. Ваш пульс синхронизируется с садом, и вы видите воспоминания, которые не принадлежат вам - танцы при лунном свете, шёпотом произнесённые клятвы, одинокий садовник, ухаживающий за лепестками, которые переживают каждый сезон.',
        choices: {
          'story-745829103-c9': {
            text: 'Позвольте видению затянуть вас глубже',
            description: 'Отдайтесь воспоминанию',
          },
          'story-745829103-c10': {
            text: 'Прервите контакт и стабилизируйтесь',
            description: 'Восстановите контроль',
          },
        },
      },
      'story-745829103-6': {
        title: 'Лунная Оранжерея',
        narration: 'Купольная оранжерея ждёт за завесой плюща. Внутри инструменты из латуни и хрусталя висят, словно созвездия, каждая дрожь гудящей ноты заставляет их сиять. Скрытая дверь окаймлена инеем, выдыхая полуночный воздух.',
        choices: {
          'story-745829103-c11': {
            text: 'Следуйте за гудением к скрытой двери',
            description: 'Узнайте, что защищает звук',
          },
          'story-745829103-c12': {
            text: 'Срежьте светящийся цветок, чтобы показать Элиасу',
            description: 'Принесите доказательство обратно в сад',
          },
        },
      },
      'story-745829103-7': {
        title: 'Родовой Кабинет',
        narration: 'Пыль взлетает, когда запечатанный кабинет поддаётся. Гроссбухи, карты и портрет женщины, у которой ваши глаза, заполняют полки. Серебряный ключ в форме полумесяца покоится на бархатном дневнике, ожидая, когда кто-то заберёт его.',
        choices: {
          'story-745829103-c13': {
            text: 'Откройте бархатный дневник',
            description: 'Узнайте, что записал ваш предок',
          },
          'story-745829103-c14': {
            text: 'Положите серебряный ключ-полумесяц в карман',
            description: 'Возьмите талисман на потом',
          },
        },
      },
      'story-745829103-10': {
        title: 'Пульс Звёздного Света',
        narration: 'Энергия, которую вы оттянули назад, сворачивается внутри вашей груди, как пойманная комета. Каждое сердцебиение посылает искры вдоль ваших рук, а ближайшие к вам цветы расцветают ярче, склоняясь к вашему теплу.',
        choices: {
          'story-745829103-c19': {
            text: 'Направьте силу в особняк',
          },
          'story-745829103-c20': {
            text: 'Удержите силу внутри и вернитесь к Элиасу',
            description: 'Проверьте, можете ли вы соединить оба мира',
          },
        },
      },
      'story-745829103-11': {
        title: 'Клятва Торнвуда',
        narration: 'Дневник раскрывает договор, заключённый век назад: первый наследник, способный видеть полуночные цветы, должен выбрать - сохранить сад между мирами или запечатать его навсегда. Элиас остаётся связанным, пока этот выбор не будет сделан с готовым сердцем.',
        choices: {
          'story-745829103-c21': {
            text: 'Поклянитесь поддерживать древнюю клятву',
            description: 'Примите обязанность как написано',
          },
          'story-745829103-c22': {
            text: 'Решите полностью переписать договор',
            description: 'Бросьте вызов наследию',
          },
        },
      },
      'story-745829103-12': {
        title: 'Резонирующее Обещание',
        narration: 'Стоя в круге лунного света, вы чувствуете, как сад настраивается на оба ваших дыхания. Элиас говорит о рассветах, которые он никогда не видел, и будущем, которое больше не смеет представить.',
        choices: {
          'story-745829103-c23': {
            text: 'Полностью войдите в круг рядом с ним',
            description: 'Свяжите свой ритм с садом',
          },
          'story-745829103-c24': {
            text: 'Держите одну ногу в смертном мире',
            description: 'Сохраните место для общего рассвета',
          },
        },
      },
      'story-745829103-13': {
        title: 'Лунный Талисман',
        narration: 'Ключ-полумесяц нагревается в вашей ладони, разворачиваясь в талисман с выгравированными созвездиями. Вы чувствуете, что он может нарушить чары - или перенаправить их - в зависимости от того, чьё имя вы произнесёте.',
        choices: {
          'story-745829103-c25': {
            text: 'Используйте талисман на кованых воротах',
            description: 'Проверьте, можете ли вы открыть новый проход',
          },
          'story-745829103-c26': {
            text: 'Покажите талисман Элиасу',
            description: 'Пригласите его к решению',
          },
        },
      },
      'story-745829103-14': {
        title: 'Временной Фонарь',
        narration: 'За гудящей дверью вы находите фонарь, подвешенный в воздухе, его хрустальное ядро разбито на парящие фрагменты. Каждый осколок содержит память о саде при разных лунах, застывшую во времени.',
        choices: {
          'story-745829103-c27': {
            text: 'Перекуйте хрусталь своей новой энергией',
            description: 'Стабилизируйте магию вместе',
          },
          'story-745829103-c28': {
            text: 'Рассейте осколки, чтобы разорвать петлю',
            description: 'Освободите пойманные моменты',
          },
        },
      },
      'story-745829103-16': {
        title: 'Нарушение Договора',
        narration: 'Вы бросаете вызов клятве, вплетая новые слова в воздух. Цветы мерцают между страхом и ликованием, пока Элиас поддерживает вас, готовый следовать, куда бы вы ни повели.',
        choices: {
          'story-745829103-c31': {
            text: 'Разрушьте узы, чтобы освободить вас обоих',
            description: 'Рискните садом ради свободы',
          },
          'story-745829103-c32': {
            text: 'Притяните магию только в себя',
            description: 'Понесите цену, чтобы Элиас мог уйти',
          },
        },
      },
      'story-745829103-17': {
        title: 'Выровненные Сердцебиения',
        narration: 'С восстановленным фонарём сад гудит в гармонии. Лунный свет и сердцебиение смешиваются, пока вы не можете сказать, где заканчиваетесь вы и начинается Элиас.',
        choices: {
          'story-745829103-c33': {
            text: 'Останьтесь в полуночном цветении с ним',
            description: 'Выберите жизнь, сотканную из звёздного света',
          },
          'story-745829103-c34': {
            text: 'Направьте сад к грядущему рассвету',
            description: 'Поделитесь его магией с пробуждающимся миром',
          },
        },
      },
      'story-745829103-18': {
        title: 'Порог Рассвета',
        narration: 'Вы удерживаете всплеск магии, не поддаваясь ему. Особняк стонет, пока граница между мирами истончается, предлагая путь обратно к солнечному свету, если вы осмелитесь пройти его вместе.',
        choices: {
          'story-745829103-c35': {
            text: 'Ведите Элиаса к пробуждающемуся миру',
            description: 'Пообещайте ему восход солнца',
          },
          'story-745829103-c36': {
            text: 'Позвольте магии закрепить вас рядом с ним',
            description: 'Примите сумеречное существование',
          },
        },
      },
      'story-745829103-19': {
        title: 'Освобождённое Время',
        narration: 'Когда талисман вспыхивает и осколки рассеиваются, время спотыкается вокруг сада. Лепестки замерзают в середине падения, пока далёкие церковные колокола звонят в обратном направлении. У вас есть секунды, чтобы решить, что будет стоить эта новая свобода.',
        choices: {
          'story-745829103-c37': {
            text: 'Освободите пойманные часы в ночь',
            description: 'Позвольте саду выбрать свою судьбу',
          },
          'story-745829103-c38': {
            text: 'Заприте сад вдали от времени навсегда',
            description: 'Запечатайте магию, даже если она завянет',
          },
        },
      },
      'story-745829103-21': {
        title: 'Общий Восход',
        narration: 'Вы ведёте Элиаса за ворота, когда наступает рассвет, неся единственный светящийся цветок как доказательство того, что магия может пережить солнце. Особняк пробуждается к смеху, музыке и саду, который наконец приветствует дневной свет. Любовь и наследие пускают корни на открытом воздухе.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: 'Разрушенное Заклинание',
        narration: 'Вы освобождаете пойманные часы, разрывая клятву, которая связывала Элиаса. Сад взрывается в последней вспышке света, прежде чем цветы растворяются в звёздной пыли. Свобода ваша, но полуночное чудо становится воспоминанием, которое вы оба несёте в неизвестное будущее.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: 'Увядающие Лепестки',
        narration: 'Вы запечатываете сад, чтобы избавить Элиаса от проклятия, но магия увядает без луны. Особняк становится тихим, цветы сохраняются только в портретах и снах. Каждую ночь вы задаётесь вопросом, мог ли другой выбор спасти красоту, которой вы пожертвовали.',
        choices: {
        },
      },
    },
  },

  // Español
  es: {
    title: 'El Jardín de Medianoche',
    description: 'Heredas una mansión victoriana con un jardín que solo florece a medianoche. Cuando conoces al enigmático jardinero que lo cuida, descubres que él',
    author: 'Isabella Crane',
    nodes: {
      'story-745829103-1': {
        title: 'La Herencia',
        narration: 'La carta del abogado de sucesiones llegó el día de tu trigésimo cumpleaños. Una tía abuela de cuya existencia nunca supiste te ha dejado la Mansión Thornewood, una casa señorial victoriana en ruinas al borde de un pueblo olvidado. La condición es extraña: debes vivir allí durante un ciclo lunar completo antes de decidir si quedártela. Cuando llegas a medianoche, las puertas de hierro se abren solas, y hueles flores floreciendo imposiblemente en el aire invernal.',
        choices: {
          'story-745829103-c1': {
            text: 'Sigue el aroma de las flores hacia el jardín',
            description: 'Investiga la fragancia misteriosa',
          },
          'story-745829103-c2': {
            text: 'Entra primero a la mansión para explorar',
            description: 'Haz las cosas en orden',
          },
        },
      },
      'story-745829103-3': {
        title: 'Pasillos Resonantes',
        narration: 'La mansión te envuelve en oscuridad aterciopelada. Retratos al óleo observan desde las paredes, y el aire zumba con una nota que sientes más que oyes. La luz de la luna se filtra a través de vitrales fracturados, pintando el suelo con patrones de zafiro.',
        choices: {
          'story-745829103-c5': {
            text: 'Sigue el zumbido a través del corredor',
            description: 'Deja que el sonido te guíe',
          },
          'story-745829103-c6': {
            text: 'Fuerza la puerta sellada del estudio',
            description: 'Busca respuestas en la mansión',
          },
        },
      },
      'story-745829103-5': {
        title: 'Visión Resplandeciente',
        narration: 'Cuando tus dedos rozan la flor, luz líquida fluye a través de ti. Tu pulso se sincroniza con el jardín y vislumbras recuerdos que no son tuyos: bailes iluminados por la luna, votos susurrados, un jardinero solitario cuidando pétalos que sobreviven a cada estación.',
        choices: {
          'story-745829103-c9': {
            text: 'Deja que la visión te arrastre más profundo',
            description: 'Ríndete al recuerdo',
          },
          'story-745829103-c10': {
            text: 'Rompe el contacto y estabilízate',
            description: 'Recupera el control',
          },
        },
      },
      'story-745829103-6': {
        title: 'Conservatorio Lunar',
        narration: 'Un conservatorio abovedado aguarda más allá de una cortina de hiedra. En el interior, instrumentos de latón y cristal cuelgan como constelaciones, cada temblor de la nota zumbante los hace brillar. Una puerta oculta está bordeada de escarcha, exhalando aire de medianoche.',
        choices: {
          'story-745829103-c11': {
            text: 'Sigue el zumbido hacia la puerta oculta',
            description: 'Descubre qué protege el sonido',
          },
          'story-745829103-c12': {
            text: 'Corta una flor resplandeciente para mostrársela a Elias',
            description: 'Lleva una prueba de vuelta al jardín',
          },
        },
      },
      'story-745829103-7': {
        title: 'Estudio Ancestral',
        narration: 'El polvo se arremolina cuando el estudio sellado cede. Libros de cuentas, mapas y un retrato de una mujer que comparte tus ojos llenan los estantes. Una llave plateada con forma de media luna descansa sobre un diario de terciopelo, esperando que alguien la reclame.',
        choices: {
          'story-745829103-c13': {
            text: 'Abre el diario forrado en terciopelo',
            description: 'Aprende lo que registró tu antepasada',
          },
          'story-745829103-c14': {
            text: 'Guarda la llave de media luna plateada',
            description: 'Toma el talismán para más tarde',
          },
        },
      },
      'story-745829103-10': {
        title: 'Pulso de Luz Estelar',
        narration: 'La energía que retiraste se enrolla dentro de tu pecho como un cometa capturado. Cada latido envía chispas por tus brazos, y las flores más cercanas a ti florecen más brillantes, inclinándose hacia tu calor.',
        choices: {
          'story-745829103-c19': {
            text: 'Canaliza el poder hacia la mansión',
          },
          'story-745829103-c20': {
            text: 'Mantén el poder dentro y regresa con Elias',
            description: 'Prueba si puedes unir ambos mundos',
          },
        },
      },
      'story-745829103-11': {
        title: 'Juramento de Thornewood',
        narration: 'El diario revela un pacto sellado hace un siglo: el primer heredero capaz de ver las flores de medianoche debe elegir mantener el jardín entre mundos o sellarlo para siempre. Elias permanece atado hasta que esa elección se haga con corazón dispuesto.',
        choices: {
          'story-745829103-c21': {
            text: 'Jura mantener el antiguo voto',
            description: 'Acepta el deber como está escrito',
          },
          'story-745829103-c22': {
            text: 'Decide reescribir el pacto por completo',
            description: 'Desafía el legado',
          },
        },
      },
      'story-745829103-12': {
        title: 'Promesa Resonante',
        narration: 'De pie dentro del círculo de luz lunar, sientes que el jardín se sintoniza con ambas respiraciones. Elias habla de amaneceres que nunca ha presenciado y futuros que ya no se atreve a imaginar.',
        choices: {
          'story-745829103-c23': {
            text: 'Entra completamente en el círculo junto a él',
            description: 'Vincula tu ritmo al jardín',
          },
          'story-745829103-c24': {
            text: 'Mantén un pie en el mundo mortal',
            description: 'Reserva espacio para un amanecer compartido',
          },
        },
      },
      'story-745829103-13': {
        title: 'Talismán Lunar',
        narration: 'La llave de media luna se calienta en tu palma, desplegándose en un talismán grabado con constelaciones. Percibes que puede interrumpir el encantamiento, o redirigirlo, dependiendo de qué nombre pronuncies.',
        choices: {
          'story-745829103-c25': {
            text: 'Usa el talismán en la puerta de hierro forjado',
            description: 'Prueba si puedes abrir una nueva puerta',
          },
          'story-745829103-c26': {
            text: 'Revela el talismán a Elias',
            description: 'Invítalo a la decisión',
          },
        },
      },
      'story-745829103-14': {
        title: 'Linterna Temporal',
        narration: 'Detrás de la puerta zumbante encuentras una linterna suspendida en el aire, su núcleo de cristal fragmentado en pedazos flotantes. Cada fragmento contiene un recuerdo del jardín en diferentes lunas, suspendido en el tiempo.',
        choices: {
          'story-745829103-c27': {
            text: 'Reforja el cristal con tu nueva energía',
            description: 'Estabilicen la magia juntos',
          },
          'story-745829103-c28': {
            text: 'Dispersa los fragmentos para romper el ciclo',
            description: 'Libera los momentos atrapados',
          },
        },
      },
      'story-745829103-16': {
        title: 'Rompiendo el Pacto',
        narration: 'Desafías el juramento, tejiendo nuevas palabras en el aire. Las flores parpadean entre miedo y júbilo mientras Elias te sostiene, listo para seguirte adonde sea que lleves.',
        choices: {
          'story-745829103-c31': {
            text: 'Destruye el vínculo para liberarlos a ambos',
            description: 'Arriesga el jardín por la libertad',
          },
          'story-745829103-c32': {
            text: 'Atrae la magia solo hacia ti',
            description: 'Carga con el costo para que Elias pueda irse',
          },
        },
      },
      'story-745829103-17': {
        title: 'Latidos Alineados',
        narration: 'Con la linterna restaurada, el jardín zumba en armonía. Luz lunar y latido se mezclan hasta que no puedes distinguir dónde terminas tú y dónde comienza Elias.',
        choices: {
          'story-745829103-c33': {
            text: 'Quédate en la floración de medianoche con él',
            description: 'Elige una vida tejida de luz estelar',
          },
          'story-745829103-c34': {
            text: 'Guía el jardín hacia el amanecer que viene',
            description: 'Comparte su magia con el mundo despierto',
          },
        },
      },
      'story-745829103-18': {
        title: 'Umbral del Amanecer',
        narration: 'Sostienes la oleada de magia sin rendirte a ella. La mansión gime mientras el límite entre mundos se adelgaza, ofreciendo un camino de regreso a la luz del sol si se atreven a cruzarlo juntos.',
        choices: {
          'story-745829103-c35': {
            text: 'Guía a Elias hacia el mundo despierto',
            description: 'Prométele un amanecer',
          },
          'story-745829103-c36': {
            text: 'Deja que la magia te ancle junto a él',
            description: 'Acepta una existencia crepuscular',
          },
        },
      },
      'story-745829103-19': {
        title: 'Tiempo Liberado',
        narration: 'Cuando el talismán brilla y los fragmentos se dispersan, el tiempo titubea alrededor del jardín. Los pétalos se congelan a mitad de caída mientras campanas de iglesia distantes suenan hacia atrás. Tienes segundos para decidir qué costará esta nueva libertad.',
        choices: {
          'story-745829103-c37': {
            text: 'Libera las horas capturadas en la noche',
            description: 'Deja que el jardín elija su destino',
          },
          'story-745829103-c38': {
            text: 'Encierra el jardín lejos del tiempo para siempre',
            description: 'Sella la magia aunque se marchite',
          },
        },
      },
      'story-745829103-21': {
        title: 'Amanecer Compartido',
        narration: 'Guías a Elias más allá de las puertas mientras el amanecer rompe, llevando una única flor luminosa como prueba de que la magia puede sobrevivir al sol. La mansión despierta con risas, música y un jardín que finalmente da la bienvenida a la luz del día. El amor y el legado echan raíces al aire libre.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: 'Hechizo Destrozado',
        narration: 'Liberas las horas atrapadas, rompiendo el juramento que ataba a Elias. El jardín estalla en un resplandor final de luz antes de que las flores se disuelvan en polvo de estrellas. La libertad es vuestra, pero la maravilla de medianoche se convierte en un recuerdo que ambos llevan hacia futuros desconocidos.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: 'Pétalos Desvaneciéndose',
        narration: 'Sellas el jardín para librar a Elias de la maldición, pero la magia se marchita sin la luna. La mansión se vuelve silenciosa, las flores preservadas solo en retratos y sueños. Cada noche te preguntas si otra elección podría haber salvado la belleza que sacrificaste.',
        choices: {
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Der Mitternachtsgarten',
    description: 'Du erbst ein viktorianisches Herrenhaus mit einem Garten, der nur um Mitternacht blüht. Als du den rätselhaften Gärtner triffst, der ihn pflegt, entdeckst du, dass er',
    author: 'Isabella Crane',
    nodes: {
      'story-745829103-1': {
        title: 'Das Erbe',
        narration: 'Der Brief vom Nachlassanwalt traf an deinem dreißigsten Geburtstag ein. Eine Großtante, von deren Existenz du nie wusstest, hat dir Thornewood Manor vererbt – ein verfallenes viktorianisches Herrenhaus am Rande einer vergessenen Stadt. Die Bedingung ist seltsam: Du musst einen vollständigen Mondzyklus dort leben, bevor du entscheidest, ob du es behalten willst. Als du um Mitternacht ankommst, öffnen sich die schmiedeeisernen Tore wie von selbst, und du riechst Blumen, die unmöglich in der Winterluft blühen.',
        choices: {
          'story-745829103-c1': {
            text: 'Folge dem Duft der Blumen in den Garten',
            description: 'Untersuche den geheimnisvollen Duft',
          },
          'story-745829103-c2': {
            text: 'Betrete zuerst das Herrenhaus zum Erkunden',
            description: 'Gehe der Reihe nach vor',
          },
        },
      },
      'story-745829103-3': {
        title: 'Hallende Flure',
        narration: 'Das Herrenhaus verschluckt dich in samtiger Dunkelheit. Ölporträts beobachten von den Wänden, und die Luft summt mit einem Ton, den du mehr fühlst als hörst. Mondlicht sickert durch zerbrochenes Buntglas und malt den Boden in Saphirmustern.',
        choices: {
          'story-745829103-c5': {
            text: 'Folge dem Summen durch den Korridor',
            description: 'Lass dich vom Klang leiten',
          },
          'story-745829103-c6': {
            text: 'Öffne die versiegelte Studierzimmertür mit Gewalt',
            description: 'Suche nach Antworten im Herrenhaus',
          },
        },
      },
      'story-745829103-5': {
        title: 'Schimmernde Vision',
        narration: 'Als deine Finger die Blüte berühren, strömt flüssiges Licht durch dich hindurch. Dein Puls synchronisiert sich mit dem Garten und du erblickst Erinnerungen, die nicht deine sind – mondbeleuchtete Tänze, geflüsterte Schwüre, ein einsamer Gärtner, der Blütenblätter pflegt, die jede Jahreszeit überdauern.',
        choices: {
          'story-745829103-c9': {
            text: 'Lass die Vision dich tiefer ziehen',
            description: 'Ergib dich der Erinnerung',
          },
          'story-745829103-c10': {
            text: 'Löse den Kontakt und stabilisiere dich',
            description: 'Erlange die Kontrolle zurück',
          },
        },
      },
      'story-745829103-6': {
        title: 'Mondgebundenes Wintergartenzimmer',
        narration: 'Ein kuppelförmiges Wintergartenzimmer wartet hinter einem Vorhang aus Efeu. Im Inneren hängen Instrumente aus Messing und Kristall wie Sternbilder, jedes Zittern des summenden Tons lässt sie erglühen. Eine verborgene Tür ist mit Frost gesäumt und atmet Mitternachtsluft aus.',
        choices: {
          'story-745829103-c11': {
            text: 'Folge dem Summen zur verborgenen Tür',
            description: 'Entdecke, was der Klang beschützt',
          },
          'story-745829103-c12': {
            text: 'Schneide eine leuchtende Blüte ab, um sie Elias zu zeigen',
            description: 'Trage einen Beweis zurück in den Garten',
          },
        },
      },
      'story-745829103-7': {
        title: 'Ahnenstudierstube',
        narration: 'Staub wirbelt auf, als das versiegelte Arbeitszimmer nachgibt. Kassenbücher, Karten und ein Porträt einer Frau, die deine Augen teilt, füllen die Regale. Ein silberner Schlüssel in Form einer Mondsichel ruht auf einem Samtjournal und wartet darauf, dass jemand ihn beansprucht.',
        choices: {
          'story-745829103-c13': {
            text: 'Öffne das samtgebundene Journal',
            description: 'Erfahre, was deine Vorfahrin aufgezeichnet hat',
          },
          'story-745829103-c14': {
            text: 'Stecke den silbernen Mondsichelschlüssel ein',
            description: 'Nimm das Amulett für später',
          },
        },
      },
      'story-745829103-10': {
        title: 'Puls des Sternenlichts',
        narration: 'Die Energie, die du zurückgezogen hast, wickelt sich wie ein eingefangener Komet in deiner Brust zusammen. Jeder Herzschlag sendet Funken durch deine Arme, und die Blumen in deiner Nähe blühen heller und biegen sich deiner Wärme entgegen.',
        choices: {
          'story-745829103-c19': {
            text: 'Lenke die Kraft ins Herrenhaus',
          },
          'story-745829103-c20': {
            text: 'Halte die Kraft in dir und kehre zu Elias zurück',
            description: 'Teste, ob du beide Welten verbinden kannst',
          },
        },
      },
      'story-745829103-11': {
        title: 'Schwur von Thornewood',
        narration: 'Das Journal offenbart einen Pakt, der vor einem Jahrhundert geschlossen wurde: Der erste Erbe, der die Mitternachtsblüten sehen kann, muss wählen, ob er den Garten zwischen den Welten bewahrt oder ihn für immer versiegelt. Elias bleibt gebunden, bis diese Wahl aus freiem Herzen getroffen wird.',
        choices: {
          'story-745829103-c21': {
            text: 'Schwöre, den alten Eid zu wahren',
            description: 'Akzeptiere die Pflicht wie geschrieben',
          },
          'story-745829103-c22': {
            text: 'Entscheide dich, den Pakt völlig neu zu schreiben',
            description: 'Stelle das Vermächtnis infrage',
          },
        },
      },
      'story-745829103-12': {
        title: 'Resonantes Versprechen',
        narration: 'Im Kreis des Mondlichts stehend, spürst du, wie der Garten sich auf beide eurer Atemzüge einstimmt. Elias spricht von Morgendämmerungen, die er nie gesehen hat, und Zukünften, die er nicht mehr zu erträumen wagt.',
        choices: {
          'story-745829103-c23': {
            text: 'Tritt vollständig neben ihn in den Kreis',
            description: 'Verbinde deinen Rhythmus mit dem Garten',
          },
          'story-745829103-c24': {
            text: 'Behalte einen Fuß in der sterblichen Welt',
            description: 'Schaffe Raum für eine gemeinsame Morgendämmerung',
          },
        },
      },
      'story-745829103-13': {
        title: 'Mond-Talisman',
        narration: 'Der Mondsichelschlüssel erwärmt sich in deiner Handfläche und entfaltet sich zu einem Talisman, der mit Sternbildern eingraviert ist. Du spürst, dass er die Verzauberung stören kann – oder umlenken – je nachdem, wessen Namen du aussprichst.',
        choices: {
          'story-745829103-c25': {
            text: 'Benutze den Talisman am schmiedeeisernen Tor',
            description: 'Teste, ob du eine neue Türöffnung schaffen kannst',
          },
          'story-745829103-c26': {
            text: 'Offenbare Elias den Talisman',
            description: 'Lade ihn in die Entscheidung ein',
          },
        },
      },
      'story-745829103-14': {
        title: 'Zeitliche Laterne',
        narration: 'Hinter der summenden Tür findest du eine Laterne, die in der Luft schwebt, ihr Kristallkern in schwebende Fragmente zerbrochen. Jede Scherbe hält eine Erinnerung an den Garten bei verschiedenen Monden, in der Zeit eingefroren.',
        choices: {
          'story-745829103-c27': {
            text: 'Schmieде den Kristall mit deiner neuen Energie neu',
            description: 'Stabilisiere die Magie gemeinsam',
          },
          'story-745829103-c28': {
            text: 'Verstreue die Scherben, um die Schleife zu brechen',
            description: 'Befreie die gefangenen Momente',
          },
        },
      },
      'story-745829103-16': {
        title: 'Den Pakt brechen',
        narration: 'Du stellst den Eid infrage und webst neue Worte in die Luft. Die Blüten flackern zwischen Angst und Freude, während Elias dich stützt, bereit, dir zu folgen, wohin auch immer du führst.',
        choices: {
          'story-745829103-c31': {
            text: 'Zerschmettere die Bindung, um euch beide zu befreien',
            description: 'Riskiere den Garten für die Freiheit',
          },
          'story-745829103-c32': {
            text: 'Ziehe die Magie allein in dich',
            description: 'Trage die Kosten, damit Elias gehen kann',
          },
        },
      },
      'story-745829103-17': {
        title: 'Ausgerichtete Herzschläge',
        narration: 'Mit der wiederhergestellten Laterne summt der Garten in Harmonie. Mondlicht und Herzschlag verschmelzen, bis du nicht mehr sagen kannst, wo du endest und Elias beginnt.',
        choices: {
          'story-745829103-c33': {
            text: 'Bleibe mit ihm in der Mitternachtsblüte',
            description: 'Wähle ein Leben aus Sternenlicht gewoben',
          },
          'story-745829103-c34': {
            text: 'Führe den Garten zur kommenden Morgendämmerung',
            description: 'Teile seine Magie mit der erwachenden Welt',
          },
        },
      },
      'story-745829103-18': {
        title: 'Schwelle der Morgendämmerung',
        narration: 'Du hältst die Woge der Magie, ohne dich ihr hinzugeben. Das Herrenhaus ächzt, als die Grenze zwischen den Welten sich verdünnt und einen Weg zurück ins Sonnenlicht bietet, wenn ihr es wagt, ihn gemeinsam zu beschreiten.',
        choices: {
          'story-745829103-c35': {
            text: 'Führe Elias in die erwachende Welt',
            description: 'Versprich ihm einen Sonnenaufgang',
          },
          'story-745829103-c36': {
            text: 'Lass die Magie dich neben ihm verankern',
            description: 'Akzeptiere eine Zwielichtexistenz',
          },
        },
      },
      'story-745829103-19': {
        title: 'Entfesselte Zeit',
        narration: 'Als der Talisman aufleuchtet und die Scherben sich verstreuen, stolpert die Zeit um den Garten herum. Blütenblätter frieren mitten im Fallen ein, während entfernte Kirchenglocken rückwärts läuten. Du hast Sekunden, um zu entscheiden, was diese neue Freiheit kosten wird.',
        choices: {
          'story-745829103-c37': {
            text: 'Entlasse die gefangenen Stunden in die Nacht',
            description: 'Lass den Garten sein Schicksal wählen',
          },
          'story-745829103-c38': {
            text: 'Schließe den Garten für immer von der Zeit ab',
            description: 'Versiegle die Magie, selbst wenn sie verwelkt',
          },
        },
      },
      'story-745829103-21': {
        title: 'Gemeinsamer Sonnenaufgang',
        narration: 'Du führst Elias über die Tore hinaus, während die Morgendämmerung anbricht, und trägst eine einzelne leuchtende Blüte als Beweis dafür, dass die Magie die Sonne überleben kann. Das Herrenhaus erwacht zu Lachen, Musik und einem Garten, der endlich das Tageslicht willkommen heißt. Liebe und Vermächtnis schlagen Wurzeln unter freiem Himmel.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: 'Zerbrochener Zauber',
        narration: 'Du entlässt die gefangenen Stunden und brichst den Eid, der Elias band. Der Garten bricht in einem letzten Lichtblitz aus, bevor die Blüten sich in Sternenstaub auflösen. Die Freiheit gehört euch, aber das Mitternachtswunder wird zu einer Erinnerung, die ihr beide in unbekannte Zukünfte tragt.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: 'Verblassende Blütenblätter',
        narration: 'Du versiegelst den Garten, um Elias vom Fluch zu verschonen, aber die Magie verwelkt ohne den Mond. Das Herrenhaus wird still, die Blüten nur in Porträts und Träumen bewahrt. Jede Nacht fragst du dich, ob eine andere Wahl die Schönheit hätte retten können, die du geopfert hast.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Le Jardin de Minuit',
    description: 'Vous héritez d\'un manoir victorien avec un jardin qui ne fleurit qu\'à minuit. Lorsque vous rencontrez l\'énigmatique jardinier qui en prend soin, vous découvrez qu\'il',
    author: 'Isabella Crane',
    nodes: {
      'story-745829103-1': {
        title: 'L\'Héritage',
        narration: 'La lettre de l\'avocat successoral est arrivée le jour de votre trentième anniversaire. Une grand-tante dont vous ignoriez l\'existence vous a légué le Manoir de Thornewood, un manoir victorien en ruine à la lisière d\'une ville oubliée. La condition est étrange : vous devez y vivre pendant un cycle lunaire complet avant de décider si vous le gardez. Lorsque vous arrivez à minuit, les grilles de fer s\'ouvrent d\'elles-mêmes, et vous sentez des fleurs fleurir impossiblement dans l\'air hivernal.',
        choices: {
          'story-745829103-c1': {
            text: 'Suivez le parfum des fleurs dans le jardin',
            description: 'Enquêtez sur la fragrance mystérieuse',
          },
          'story-745829103-c2': {
            text: 'Entrez d\'abord dans le manoir pour explorer',
            description: 'Procédez dans l\'ordre',
          },
        },
      },
      'story-745829103-3': {
        title: 'Couloirs Résonnants',
        narration: 'Le manoir vous engloutit dans une obscurité veloutée. Des portraits à l\'huile observent depuis les murs, et l\'air bourdonne d\'une note que vous ressentez plus que vous n\'entendez. Le clair de lune s\'infiltre à travers des vitraux fracturés, peignant le sol de motifs saphir.',
        choices: {
          'story-745829103-c5': {
            text: 'Suivez le bourdonnement à travers le couloir',
            description: 'Laissez le son vous guider',
          },
          'story-745829103-c6': {
            text: 'Forcez la porte scellée du bureau',
            description: 'Cherchez des réponses dans le manoir',
          },
        },
      },
      'story-745829103-5': {
        title: 'Vision Scintillante',
        narration: 'Lorsque vos doigts effleurent la fleur, une lumière liquide traverse votre être. Votre pouls se synchronise avec le jardin et vous apercevez des souvenirs qui ne sont pas les vôtres : des danses éclairées par la lune, des vœux murmurés, un jardinier solitaire cultivant des pétales qui survivent à chaque saison.',
        choices: {
          'story-745829103-c9': {
            text: 'Laissez la vision vous entraîner plus profondément',
            description: 'Abandonnez-vous au souvenir',
          },
          'story-745829103-c10': {
            text: 'Rompez le contact et stabilisez-vous',
            description: 'Reprenez le contrôle',
          },
        },
      },
      'story-745829103-6': {
        title: 'Conservatoire Lunaire',
        narration: 'Un conservatoire en forme de dôme attend au-delà d\'un rideau de lierre. À l\'intérieur, des instruments de laiton et de cristal pendent comme des constellations, chaque vibration de la note bourdonnante les fait briller. Une porte cachée est bordée de givre, exhalant l\'air de minuit.',
        choices: {
          'story-745829103-c11': {
            text: 'Suivez le bourdonnement vers la porte cachée',
            description: 'Découvrez ce que le son protège',
          },
          'story-745829103-c12': {
            text: 'Coupez une fleur lumineuse pour la montrer à Elias',
            description: 'Rapportez une preuve au jardin',
          },
        },
      },
      'story-745829103-7': {
        title: 'Bureau Ancestral',
        narration: 'La poussière tourbillonne lorsque le bureau scellé cède. Des registres, des cartes et un portrait d\'une femme qui partage vos yeux remplissent les étagères. Une clé d\'argent en forme de croissant repose sur un journal de velours, attendant que quelqu\'un la réclame.',
        choices: {
          'story-745829103-c13': {
            text: 'Ouvrez le journal relié de velours',
            description: 'Apprenez ce que votre ancêtre a enregistré',
          },
          'story-745829103-c14': {
            text: 'Empochez la clé en croissant d\'argent',
            description: 'Prenez le talisman pour plus tard',
          },
        },
      },
      'story-745829103-10': {
        title: 'Pulsation de Lumière Stellaire',
        narration: 'L\'énergie que vous avez retirée se love dans votre poitrine comme une comète capturée. Chaque battement de cœur envoie des étincelles dans vos bras, et les fleurs les plus proches de vous fleurissent plus brillamment, se penchant vers votre chaleur.',
        choices: {
          'story-745829103-c19': {
            text: 'Canalisez le pouvoir vers le manoir',
          },
          'story-745829103-c20': {
            text: 'Gardez le pouvoir en vous et retournez vers Elias',
            description: 'Testez si vous pouvez relier les deux mondes',
          },
        },
      },
      'story-745829103-11': {
        title: 'Serment de Thornewood',
        narration: 'Le journal révèle un pacte conclu il y a un siècle : le premier héritier capable de voir les fleurs de minuit doit choisir de préserver le jardin entre les mondes ou de le sceller à jamais. Elias reste lié jusqu\'à ce que ce choix soit fait d\'un cœur consentant.',
        choices: {
          'story-745829103-c21': {
            text: 'Jurez de maintenir le vœu ancien',
            description: 'Acceptez le devoir tel qu\'il est écrit',
          },
          'story-745829103-c22': {
            text: 'Décidez de réécrire entièrement le pacte',
            description: 'Défiez l\'héritage',
          },
        },
      },
      'story-745829103-12': {
        title: 'Promesse Résonnante',
        narration: 'Debout dans le cercle de clair de lune, vous sentez le jardin s\'accorder à vos deux respirations. Elias parle d\'aubes qu\'il n\'a jamais vues et de futurs qu\'il n\'ose plus imaginer.',
        choices: {
          'story-745829103-c23': {
            text: 'Entrez complètement dans le cercle à ses côtés',
            description: 'Liez votre rythme au jardin',
          },
          'story-745829103-c24': {
            text: 'Gardez un pied dans le monde mortel',
            description: 'Réservez l\'espace pour une aube partagée',
          },
        },
      },
      'story-745829103-13': {
        title: 'Talisman Lunaire',
        narration: 'La clé en croissant se réchauffe dans votre paume, se dépliant en un talisman gravé de constellations. Vous sentez qu\'il peut perturber l\'enchantement, ou le rediriger, selon le nom que vous prononcez.',
        choices: {
          'story-745829103-c25': {
            text: 'Utilisez le talisman sur la grille en fer forgé',
            description: 'Testez si vous pouvez ouvrir un nouveau passage',
          },
          'story-745829103-c26': {
            text: 'Révélez le talisman à Elias',
            description: 'Invitez-le dans la décision',
          },
        },
      },
      'story-745829103-14': {
        title: 'Lanterne Temporelle',
        narration: 'Derrière la porte bourdonnante, vous trouvez une lanterne suspendue dans les airs, son noyau de cristal brisé en fragments flottants. Chaque éclat contient un souvenir du jardin à différentes lunes, suspendu dans le temps.',
        choices: {
          'story-745829103-c27': {
            text: 'Reforgez le cristal avec votre nouvelle énergie',
            description: 'Stabilisez la magie ensemble',
          },
          'story-745829103-c28': {
            text: 'Dispersez les éclats pour briser la boucle',
            description: 'Libérez les moments piégés',
          },
        },
      },
      'story-745829103-16': {
        title: 'Briser le Pacte',
        narration: 'Vous défiez le serment, tissant de nouveaux mots dans l\'air. Les fleurs vacillent entre peur et exaltation tandis qu\'Elias vous soutient, prêt à vous suivre où que vous meniez.',
        choices: {
          'story-745829103-c31': {
            text: 'Brisez le lien pour vous libérer tous les deux',
            description: 'Risquez le jardin pour la liberté',
          },
          'story-745829103-c32': {
            text: 'Attirez la magie en vous seul',
            description: 'Portez le fardeau pour qu\'Elias puisse partir',
          },
        },
      },
      'story-745829103-17': {
        title: 'Battements de Cœur Alignés',
        narration: 'Avec la lanterne restaurée, le jardin bourdonne en harmonie. Clair de lune et battement de cœur se mélangent jusqu\'à ce que vous ne puissiez plus dire où vous finissez et où Elias commence.',
        choices: {
          'story-745829103-c33': {
            text: 'Restez dans la floraison de minuit avec lui',
            description: 'Choisissez une vie tissée de lumière stellaire',
          },
          'story-745829103-c34': {
            text: 'Guidez le jardin vers l\'aube à venir',
            description: 'Partagez sa magie avec le monde éveillé',
          },
        },
      },
      'story-745829103-18': {
        title: 'Seuil de l\'Aube',
        narration: 'Vous maintenez la vague de magie sans vous y abandonner. Le manoir gémit tandis que la frontière entre les mondes s\'amincit, offrant un chemin de retour vers la lumière du soleil si vous osez le franchir ensemble.',
        choices: {
          'story-745829103-c35': {
            text: 'Conduisez Elias vers le monde éveillé',
            description: 'Promettez-lui un lever de soleil',
          },
          'story-745829103-c36': {
            text: 'Laissez la magie vous ancrer à ses côtés',
            description: 'Acceptez une existence crépusculaire',
          },
        },
      },
      'story-745829103-19': {
        title: 'Temps Libéré',
        narration: 'Lorsque le talisman flamboie et que les éclats se dispersent, le temps trébuche autour du jardin. Les pétales se figent en pleine chute tandis que des cloches d\'église lointaines sonnent à l\'envers. Vous avez quelques secondes pour décider ce que cette nouvelle liberté coûtera.',
        choices: {
          'story-745829103-c37': {
            text: 'Libérez les heures capturées dans la nuit',
            description: 'Laissez le jardin choisir son destin',
          },
          'story-745829103-c38': {
            text: 'Enfermez le jardin hors du temps pour toujours',
            description: 'Scellez la magie même si elle se flétrit',
          },
        },
      },
      'story-745829103-21': {
        title: 'Lever de Soleil Partagé',
        narration: 'Vous guidez Elias au-delà des grilles tandis que l\'aube se lève, portant une seule fleur lumineuse comme preuve que la magie peut survivre au soleil. Le manoir s\'éveille aux rires, à la musique et à un jardin qui accueille enfin la lumière du jour. L\'amour et l\'héritage prennent racine en plein air.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: 'Sort Brisé',
        narration: 'Vous libérez les heures piégées, brisant le serment qui liait Elias. Le jardin éclate dans un ultime flamboiement de lumière avant que les fleurs ne se dissolvent en poussière d\'étoiles. La liberté est vôtre, mais la merveille de minuit devient un souvenir que vous portez tous deux vers des avenirs inconnus.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: 'Pétales Fanés',
        narration: 'Vous scellez le jardin pour épargner à Elias la malédiction, mais la magie se flétrit sans la lune. Le manoir devient silencieux, les fleurs ne sont préservées que dans les portraits et les rêves. Chaque nuit, vous vous demandez si un autre choix aurait pu sauver la beauté que vous avez sacrifiée.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'O Jardim da Meia-Noite',
    description: 'Você herda uma mansão vitoriana com um jardim que só floresce à meia-noite. Quando você conhece o enigmático jardineiro que cuida dele, você descobre que ele',
    author: 'Isabella Crane',
    nodes: {
      'story-745829103-1': {
        title: 'A Herança',
        narration: 'A carta do advogado de sucessões chegou no dia do seu trigésimo aniversário. Uma tia-avó cuja existência você nunca soube deixou para você a Mansão Thornewood - uma mansão vitoriana em ruínas na beira de uma cidade esquecida. A condição é estranha: você deve viver lá por um ciclo lunar completo antes de decidir se fica com ela. Quando você chega à meia-noite, os portões de ferro se abrem sozinhos, e você sente o perfume de flores florescendo impossivelmente no ar invernal.',
        choices: {
          'story-745829103-c1': {
            text: 'Siga o perfume das flores até o jardim',
            description: 'Investigue a fragrância misteriosa',
          },
          'story-745829103-c2': {
            text: 'Entre primeiro na mansão para explorar',
            description: 'Proceda em ordem',
          },
        },
      },
      'story-745829103-3': {
        title: 'Corredores Ecoantes',
        narration: 'A mansão te engole em escuridão aveludada. Retratos a óleo observam das paredes, e o ar zumbe com uma nota que você sente mais do que ouve. O luar vaza através de vitrais fraturados, pintando o chão com padrões de safira.',
        choices: {
          'story-745829103-c5': {
            text: 'Siga o zumbido pelo corredor',
            description: 'Deixe o som guiá-lo',
          },
          'story-745829103-c6': {
            text: 'Force a porta selada do escritório',
            description: 'Busque respostas na mansão',
          },
        },
      },
      'story-745829103-5': {
        title: 'Visão Cintilante',
        narration: 'Quando seus dedos roçam a flor, luz líquida flui através de você. Seu pulso sincroniza com o jardim e você vislumbra memórias que não são suas - danças iluminadas pela lua, votos sussurrados, um jardineiro solitário cuidando de pétalas que sobrevivem a cada estação.',
        choices: {
          'story-745829103-c9': {
            text: 'Deixe a visão te puxar mais fundo',
            description: 'Entregue-se à memória',
          },
          'story-745829103-c10': {
            text: 'Rompa o contato e se estabilize',
            description: 'Recupere o controle',
          },
        },
      },
      'story-745829103-6': {
        title: 'Conservatório Lunar',
        narration: 'Um conservatório em cúpula espera além de uma cortina de hera. Dentro, instrumentos de latão e cristal pendem como constelações, cada tremor da nota zumbindo os faz brilhar. Uma porta oculta é bordada com geada, exalando ar da meia-noite.',
        choices: {
          'story-745829103-c11': {
            text: 'Siga o zumbido em direção à porta oculta',
            description: 'Descubra o que o som protege',
          },
          'story-745829103-c12': {
            text: 'Corte uma flor brilhante para mostrar a Elias',
            description: 'Leve uma prova de volta ao jardim',
          },
        },
      },
      'story-745829103-7': {
        title: 'Escritório Ancestral',
        narration: 'A poeira se levanta quando o escritório selado cede. Livros-razão, mapas e um retrato de uma mulher que compartilha seus olhos enchem as prateleiras. Uma chave de prata em forma de crescente repousa sobre um diário de veludo, esperando que alguém a reivindique.',
        choices: {
          'story-745829103-c13': {
            text: 'Abra o diário encadernado em veludo',
            description: 'Aprenda o que seu ancestral registrou',
          },
          'story-745829103-c14': {
            text: 'Guarde a chave crescente de prata no bolso',
            description: 'Pegue o talismã para depois',
          },
        },
      },
      'story-745829103-10': {
        title: 'Pulso de Luz Estelar',
        narration: 'A energia que você puxou de volta se enrola dentro do seu peito como um cometa capturado. Cada batida cardíaca envia faíscas pelos seus braços, e as flores mais próximas de você florescem mais brilhantes, curvando-se em direção ao seu calor.',
        choices: {
          'story-745829103-c19': {
            text: 'Canalize o poder para a mansão',
          },
          'story-745829103-c20': {
            text: 'Mantenha o poder dentro e retorne para Elias',
            description: 'Teste se você pode unir ambos os mundos',
          },
        },
      },
      'story-745829103-11': {
        title: 'Juramento de Thornewood',
        narration: 'O diário revela um pacto feito há um século: o primeiro herdeiro capaz de ver as flores da meia-noite deve escolher manter o jardim entre mundos ou selá-lo para sempre. Elias permanece preso até que essa escolha seja feita com um coração disposto.',
        choices: {
          'story-745829103-c21': {
            text: 'Jure manter o voto antigo',
            description: 'Aceite o dever como está escrito',
          },
          'story-745829103-c22': {
            text: 'Decida reescrever o pacto inteiramente',
            description: 'Desafie o legado',
          },
        },
      },
      'story-745829103-12': {
        title: 'Promessa Ressonante',
        narration: 'De pé dentro do círculo de luar, você sente o jardim se sintonizar com ambas as suas respirações. Elias fala de amanheceres que nunca testemunhou e futuros que não ousa mais imaginar.',
        choices: {
          'story-745829103-c23': {
            text: 'Entre completamente no círculo ao lado dele',
            description: 'Vincule seu ritmo ao jardim',
          },
          'story-745829103-c24': {
            text: 'Mantenha um pé no mundo mortal',
            description: 'Reserve espaço para um amanhecer compartilhado',
          },
        },
      },
      'story-745829103-13': {
        title: 'Talismã Lunar',
        narration: 'A chave crescente aquece na sua palma, desdobrando-se em um talismã gravado com constelações. Você sente que pode perturbar o encantamento - ou redirecioná-lo - dependendo de qual nome você pronuncia.',
        choices: {
          'story-745829103-c25': {
            text: 'Use o talismã no portão de ferro forjado',
            description: 'Teste se você pode abrir uma nova passagem',
          },
          'story-745829103-c26': {
            text: 'Revele o talismã para Elias',
            description: 'Convide-o para a decisão',
          },
        },
      },
      'story-745829103-14': {
        title: 'Lanterna Temporal',
        narration: 'Atrás da porta zumbindo você encontra uma lanterna suspensa no ar, seu núcleo de cristal estilhaçado em fragmentos flutuantes. Cada fragmento contém uma memória do jardim em diferentes luas, suspensa no tempo.',
        choices: {
          'story-745829103-c27': {
            text: 'Reforje o cristal com sua nova energia',
            description: 'Estabilize a magia juntos',
          },
          'story-745829103-c28': {
            text: 'Espalhe os fragmentos para quebrar o ciclo',
            description: 'Liberte os momentos presos',
          },
        },
      },
      'story-745829103-16': {
        title: 'Quebrando o Pacto',
        narration: 'Você desafia o juramento, tecendo novas palavras no ar. As flores tremulam entre medo e exultação enquanto Elias te apoia, pronto para seguir para onde você liderar.',
        choices: {
          'story-745829103-c31': {
            text: 'Despedace o vínculo para libertar vocês dois',
            description: 'Arrisque o jardim pela liberdade',
          },
          'story-745829103-c32': {
            text: 'Puxe a magia para você sozinho',
            description: 'Carregue o custo para que Elias possa partir',
          },
        },
      },
      'story-745829103-17': {
        title: 'Batimentos Cardíacos Alinhados',
        narration: 'Com a lanterna restaurada, o jardim zumbe em harmonia. Luar e batida cardíaca se misturam até que você não consegue dizer onde você termina e Elias começa.',
        choices: {
          'story-745829103-c33': {
            text: 'Fique na floração da meia-noite com ele',
            description: 'Escolha uma vida tecida de luz estelar',
          },
          'story-745829103-c34': {
            text: 'Guie o jardim em direção ao amanhecer vindouro',
            description: 'Compartilhe sua magia com o mundo desperto',
          },
        },
      },
      'story-745829103-18': {
        title: 'Limiar do Amanhecer',
        narration: 'Você segura a onda de magia sem se render a ela. A mansão geme enquanto a fronteira entre mundos se afina, oferecendo um caminho de volta à luz do sol se vocês ousarem atravessá-lo juntos.',
        choices: {
          'story-745829103-c35': {
            text: 'Conduza Elias em direção ao mundo desperto',
            description: 'Prometa a ele um nascer do sol',
          },
          'story-745829103-c36': {
            text: 'Deixe a magia ancorá-lo ao lado dele',
            description: 'Aceite uma existência crepuscular',
          },
        },
      },
      'story-745829103-19': {
        title: 'Tempo Desatado',
        narration: 'Quando o talismã brilha e os fragmentos se espalham, o tempo tropeça ao redor do jardim. Pétalas congelam no meio da queda enquanto sinos de igreja distantes tocam ao contrário. Você tem segundos para decidir o que essa nova liberdade custará.',
        choices: {
          'story-745829103-c37': {
            text: 'Liberte as horas capturadas na noite',
            description: 'Deixe o jardim escolher seu destino',
          },
          'story-745829103-c38': {
            text: 'Tranque o jardim longe do tempo para sempre',
            description: 'Sele a magia mesmo que ela murche',
          },
        },
      },
      'story-745829103-21': {
        title: 'Nascer do Sol Compartilhado',
        narration: 'Você guia Elias além dos portões enquanto o amanhecer desponta, carregando uma única flor luminosa como prova de que a magia pode sobreviver ao sol. A mansão desperta para risos, música e um jardim que finalmente acolhe a luz do dia. Amor e legado criam raízes ao ar livre.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: 'Feitiço Despedaçado',
        narration: 'Você liberta as horas presas, quebrando o juramento que prendia Elias. O jardim irrompe em uma explosão final de luz antes que as flores se dissolvam em poeira estelar. A liberdade é sua, mas a maravilha da meia-noite se torna uma memória que vocês dois carregam para futuros desconhecidos.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: 'Pétalas Murchando',
        narration: 'Você sela o jardim para poupar Elias da maldição, mas a magia murcha sem a lua. A mansão fica silenciosa, as flores preservadas apenas em retratos e sonhos. Toda noite você se pergunta se outra escolha poderia ter salvado a beleza que você sacrificou.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '真夜中の庭園',
    description: '真夜中にしか花が咲かない庭園を持つヴィクトリア朝の邸宅を相続したあなた。庭園の世話をする謎めいた庭師に出会ったとき、彼が',
    author: 'イザベラ・クレイン',
    nodes: {
      'story-745829103-1': {
        title: '相続',
        narration: '遺産弁護士からの手紙は、あなたの30歳の誕生日に届いた。存在すら知らなかった大伯母が、ソーンウッド・マナーをあなたに遺した。忘れ去られた町の端にある、崩れかけたヴィクトリア朝の邸宅だ。条件は奇妙なものだった。それを保持するかどうかを決める前に、一つの満月の周期の間そこに住まなければならない。真夜中に到着すると、鉄の門がひとりでに開き、冬の空気の中で不可能なほどに咲く花々の香りがした。',
        choices: {
          'story-745829103-c1': {
            text: '花の香りを追って庭園へ向かう',
            description: '謎めいた香りを調べる',
          },
          'story-745829103-c2': {
            text: 'まず邸宅に入って探索する',
            description: '順序立てて行動する',
          },
        },
      },
      'story-745829103-3': {
        title: '反響する廊下',
        narration: '邸宅はあなたをビロードのような闇で包み込む。油彩の肖像画が壁から見つめ、空気は聞こえるというより感じる音で満たされている。月光が割れたステンドグラスから漏れ、床にサファイアの模様を描いている。',
        choices: {
          'story-745829103-c5': {
            text: '廊下を通って音を追う',
            description: '音に導かれる',
          },
          'story-745829103-c6': {
            text: '封印された書斎の扉を無理やり開ける',
            description: '邸宅で答えを探す',
          },
        },
      },
      'story-745829103-5': {
        title: 'きらめく幻影',
        narration: 'あなたの指が花に触れると、液体の光があなたを貫く。あなたの脈拍は庭園と同期し、自分のものではない記憶を垣間見る。月明かりに照らされた舞踏会、ささやかれた誓い、あらゆる季節を超えて生き延びる花びらを世話する孤独な庭師。',
        choices: {
          'story-745829103-c9': {
            text: '幻影にさらに深く引き込まれる',
            description: '記憶に身を委ねる',
          },
          'story-745829103-c10': {
            text: '接触を断ち、自分を落ち着かせる',
            description: 'コントロールを取り戻す',
          },
        },
      },
      'story-745829103-6': {
        title: '月に縛られた温室',
        narration: '蔦のカーテンの向こうに、ドーム型の温室が待っている。内部では、真鍮と水晶の楽器が星座のように吊るされ、うなる音の震えごとに輝きを放つ。隠された扉は霜で縁取られ、真夜中の空気を吐き出している。',
        choices: {
          'story-745829103-c11': {
            text: '音を追って隠された扉へ向かう',
            description: '音が何を守っているのかを発見する',
          },
          'story-745829103-c12': {
            text: '光る花を摘んでイライアスに見せる',
            description: '証拠を庭園に持ち帰る',
          },
        },
      },
      'story-745829103-7': {
        title: '先祖代々の書斎',
        narration: '封印された書斎が開くと、埃が舞い上がる。台帳、地図、そしてあなたと同じ目をした女性の肖像画が棚を埋め尽くしている。三日月の形をした銀の鍵がビロードの日記の上に置かれ、誰かが手にするのを待っている。',
        choices: {
          'story-745829103-c13': {
            text: 'ビロード装丁の日記を開く',
            description: '先祖が記録したことを学ぶ',
          },
          'story-745829103-c14': {
            text: '銀の三日月の鍵をポケットに入れる',
            description: 'お守りを後のために取っておく',
          },
        },
      },
      'story-745829103-10': {
        title: '星明かりの鼓動',
        narration: '引き戻したエネルギーが、捕らえた彗星のようにあなたの胸の中で渦を巻く。心拍ごとに火花が腕を伝わり、あなたに最も近い花々がより明るく咲き、あなたの温もりに向かって曲がっていく。',
        choices: {
          'story-745829103-c19': {
            text: '力を邸宅に向ける',
          },
          'story-745829103-c20': {
            text: '力を内に保ちイライアスのもとに戻る',
            description: '両方の世界を繋げられるか試す',
          },
        },
      },
      'story-745829103-11': {
        title: 'ソーンウッドの誓い',
        narration: '日記は一世紀前に交わされた契約を明かす。真夜中の花を見ることができる最初の相続人は、世界の間に庭園を保つか、永遠に封印するかを選ばなければならない。イライアスは、その選択が喜んで行われるまで縛られたままだ。',
        choices: {
          'story-745829103-c21': {
            text: '古い誓いを守ることを誓う',
            description: '書かれた通りの義務を受け入れる',
          },
          'story-745829103-c22': {
            text: '契約を完全に書き換えることにする',
            description: '遺産に挑戦する',
          },
        },
      },
      'story-745829103-12': {
        title: '共鳴する約束',
        narration: '月明かりの円の中に立つと、庭園が二人の呼吸に調和していくのを感じる。イライアスは一度も見たことのない夜明けと、もはや想像する勇気のない未来について語る。',
        choices: {
          'story-745829103-c23': {
            text: '彼の隣の円の中に完全に入る',
            description: 'あなたのリズムを庭園に結びつける',
          },
          'story-745829103-c24': {
            text: '片足を死すべき世界に残す',
            description: '共有する夜明けのために場所を確保する',
          },
        },
      },
      'story-745829103-13': {
        title: '月のお守り',
        narration: '三日月の鍵があなたの手のひらで温まり、星座が刻まれたお守りに展開する。それは魔法を乱すこともできるし、方向を変えることもできる。どちらになるかは、あなたが誰の名前を口にするかによる。',
        choices: {
          'story-745829103-c25': {
            text: '錬鉄の門にお守りを使う',
            description: '新しい出入り口を開けられるか試す',
          },
          'story-745829103-c26': {
            text: 'イライアスにお守りを見せる',
            description: '彼を決断に招き入れる',
          },
        },
      },
      'story-745829103-14': {
        title: '時間のランタン',
        narration: 'うなる扉の向こうで、空中に浮かぶランタンを見つける。その水晶の核は浮遊する断片に砕けている。それぞれの破片は、異なる月の庭園の記憶を保持し、時間の中に凍結されている。',
        choices: {
          'story-745829103-c27': {
            text: '新しいエネルギーで水晶を再鍛造する',
            description: '一緒に魔法を安定させる',
          },
          'story-745829103-c28': {
            text: '破片を散らして輪を断ち切る',
            description: '閉じ込められた瞬間を解放する',
          },
        },
      },
      'story-745829103-16': {
        title: '契約を破る',
        narration: 'あなたは誓いに挑戦し、新しい言葉を空気に織り込む。花々は恐怖と歓喜の間で揺らぎ、イライアスはあなたを支え、あなたがどこへ導こうとも従う準備ができている。',
        choices: {
          'story-745829103-c31': {
            text: '二人を解放するために束縛を砕く',
            description: '自由のために庭園を危険にさらす',
          },
          'story-745829103-c32': {
            text: '魔法を自分だけに引き込む',
            description: 'イライアスが去れるように代償を背負う',
          },
        },
      },
      'story-745829103-17': {
        title: '調和する鼓動',
        narration: 'ランタンが復元されると、庭園は調和して響く。月明かりと鼓動が混ざり合い、あなたがどこで終わりイライアスがどこで始まるのかわからなくなる。',
        choices: {
          'story-745829103-c33': {
            text: '彼と真夜中の開花の中に留まる',
            description: '星明かりから織られた人生を選ぶ',
          },
          'story-745829103-c34': {
            text: '庭園を来る夜明けへと導く',
            description: 'その魔法を目覚める世界と共有する',
          },
        },
      },
      'story-745829103-18': {
        title: '夜明けの境界',
        narration: 'あなたは魔法の高まりを、それに屈することなく保持する。世界間の境界が薄くなり、邸宅がうめく。一緒に歩む勇気があれば、日光への道が開かれている。',
        choices: {
          'story-745829103-c35': {
            text: 'イライアスを目覚める世界へ導く',
            description: '彼に日の出を約束する',
          },
          'story-745829103-c36': {
            text: '魔法にあなたを彼の隣に留めさせる',
            description: '黄昏の存在を受け入れる',
          },
        },
      },
      'story-745829103-19': {
        title: '解放された時間',
        narration: 'お守りが輝き破片が散らばると、時間が庭園の周りでつまずく。花びらは落下の途中で凍りつき、遠くの教会の鐘が逆に鳴る。この新しい自由が何を代償とするかを決めるのに数秒しかない。',
        choices: {
          'story-745829103-c37': {
            text: '捕らえられた時間を夜に解放する',
            description: '庭園に運命を選ばせる',
          },
          'story-745829103-c38': {
            text: '庭園を永遠に時間から閉ざす',
            description: '枯れても魔法を封印する',
          },
        },
      },
      'story-745829103-21': {
        title: '共有する日の出',
        narration: '夜明けが訪れる中、あなたはイライアスを門の向こうへと導き、魔法が太陽に耐えられる証として一輪の輝く花を運ぶ。邸宅は笑い声、音楽、そしてついに日光を歓迎する庭園とともに目覚める。愛と遺産が開かれた空気の中に根を下ろす。',
        choices: {
        },
      },
      'story-745829103-22': {
        title: '砕けた呪文',
        narration: 'あなたは捕らえられた時間を解放し、イライアスを縛っていた誓いを破る。庭園は最後の光の爆発とともに花開き、花々が星屑に溶ける。自由はあなたたちのものだが、真夜中の驚異は、二人が未知の未来へと運ぶ記憶となる。',
        choices: {
        },
      },
      'story-745829103-23': {
        title: '色褪せる花びら',
        narration: 'あなたはイライアスを呪いから救うために庭園を封印するが、魔法は月なしでは枯れてしまう。邸宅は静かになり、花々は肖像画と夢の中にのみ保存される。毎晩、別の選択があなたが犠牲にした美しさを救えたかもしれないと思いを巡らせる。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '午夜花园',
    description: '你继承了一座维多利亚时代的庄园，园中有一座只在午夜时分盛开的花园。当你遇见照料花园的神秘园丁时，你发现他',
    author: '伊莎贝拉·克莱恩',
    nodes: {
      'story-745829103-1': {
        title: '遗产',
        narration: '遗产律师的信在你三十岁生日那天到达。一位你从不知道存在的叔祖母给你留下了索恩伍德庄园——一座位于被遗忘小镇边缘的破败维多利亚式宅邸。条件很奇怪：在决定是否保留之前，你必须在那里住满一个完整的月相周期。当你午夜抵达时，铁门自行打开，你闻到了在冬日空气中不可思议地盛开的花香。',
        choices: {
          'story-745829103-c1': {
            text: '循着花香走进花园',
            description: '调查神秘的香气',
          },
          'story-745829103-c2': {
            text: '先进入庄园探索',
            description: '按顺序行事',
          },
        },
      },
      'story-745829103-3': {
        title: '回响的走廊',
        narration: '庄园将你吞没在天鹅绒般的黑暗中。油画肖像从墙上注视着，空气中嗡嗡作响着一个你感觉多于听见的音符。月光从破碎的彩色玻璃中渗入，在地板上绘出蓝宝石般的图案。',
        choices: {
          'story-745829103-c5': {
            text: '沿着走廊追随嗡嗡声',
            description: '让声音引导你',
          },
          'story-745829103-c6': {
            text: '强行打开封闭的书房门',
            description: '在庄园中寻找答案',
          },
        },
      },
      'story-745829103-5': {
        title: '闪烁的幻象',
        narration: '当你的手指触碰花朵时，液态的光芒流淌过你的身体。你的脉搏与花园同步，你瞥见了不属于你的记忆——月光下的舞蹈、低语的誓言、照料着超越每个季节的花瓣的孤独园丁。',
        choices: {
          'story-745829103-c9': {
            text: '让幻象将你拉得更深',
            description: '臣服于记忆',
          },
          'story-745829103-c10': {
            text: '断开接触并稳住自己',
            description: '重新控制',
          },
        },
      },
      'story-745829103-6': {
        title: '月光温室',
        narration: '一座圆顶温室在常春藤帘幕后等待。内部，黄铜和水晶的乐器像星座般悬挂，嗡嗡音符的每次颤动都让它们发光。一扇隐藏的门边缘结着霜，呼出午夜的空气。',
        choices: {
          'story-745829103-c11': {
            text: '追随嗡嗡声走向隐藏的门',
            description: '发现声音保护着什么',
          },
          'story-745829103-c12': {
            text: '摘一朵发光的花给伊莱亚斯看',
            description: '把证据带回花园',
          },
        },
      },
      'story-745829103-7': {
        title: '祖传书房',
        narration: '当封闭的书房打开时，尘埃飞扬。账本、地图和一幅与你有着相同眼睛的女人肖像挤满了书架。一把月牙形的银钥匙放在天鹅绒日记本上，等待有人来认领。',
        choices: {
          'story-745829103-c13': {
            text: '打开天鹅绒装订的日记',
            description: '了解你的祖先记录了什么',
          },
          'story-745829103-c14': {
            text: '把银色月牙钥匙放进口袋',
            description: '拿走护身符留待以后',
          },
        },
      },
      'story-745829103-10': {
        title: '星光的脉动',
        narration: '你拉回的能量像被捕获的彗星般在你胸中盘旋。每次心跳都会沿着你的手臂发送火花，离你最近的花朵开得更亮，向你的温暖弯曲。',
        choices: {
          'story-745829103-c19': {
            text: '将力量引导进庄园',
          },
          'story-745829103-c20': {
            text: '将力量保持在体内并返回伊莱亚斯身边',
            description: '测试你是否能连接两个世界',
          },
        },
      },
      'story-745829103-11': {
        title: '索恩伍德的誓言',
        narration: '日记揭示了一个世纪前达成的契约：第一个能看见午夜之花的继承人必须选择保持花园处于世界之间，或永远封印它。伊莱亚斯将保持束缚，直到这个选择出于自愿的心做出。',
        choices: {
          'story-745829103-c21': {
            text: '发誓维护古老的誓言',
            description: '按照记载接受职责',
          },
          'story-745829103-c22': {
            text: '决定完全重写契约',
            description: '挑战遗产',
          },
        },
      },
      'story-745829103-12': {
        title: '共鸣的承诺',
        narration: '站在月光的圆圈中，你感觉花园与你们两人的呼吸调谐。伊莱亚斯说起他从未见过的黎明和他不再敢想象的未来。',
        choices: {
          'story-745829103-c23': {
            text: '完全踏入他身旁的圆圈',
            description: '将你的节奏与花园绑定',
          },
          'story-745829103-c24': {
            text: '保持一只脚在凡人世界',
            description: '为共享的黎明留出空间',
          },
        },
      },
      'story-745829103-13': {
        title: '月亮护身符',
        narration: '月牙钥匙在你掌心变暖，展开成一个刻有星座的护身符。你感觉它可以扰乱魔法——或重新引导它——取决于你说出谁的名字。',
        choices: {
          'story-745829103-c25': {
            text: '在锻铁大门上使用护身符',
            description: '测试你是否能打开新的通道',
          },
          'story-745829103-c26': {
            text: '向伊莱亚斯展示护身符',
            description: '邀请他参与决定',
          },
        },
      },
      'story-745829103-14': {
        title: '时间灯笼',
        narration: '在嗡嗡作响的门后，你发现一盏悬浮在空中的灯笼，它的水晶核心破碎成漂浮的碎片。每个碎片都包含着花园在不同月相下的记忆，悬浮在时间中。',
        choices: {
          'story-745829103-c27': {
            text: '用你的新能量重新锻造水晶',
            description: '一起稳定魔法',
          },
          'story-745829103-c28': {
            text: '散布碎片以打破循环',
            description: '释放被困的时刻',
          },
        },
      },
      'story-745829103-16': {
        title: '打破契约',
        narration: '你挑战誓言，在空中编织新的话语。花朵在恐惧和欣喜之间闪烁，而伊莱亚斯支撑着你，准备跟随你前往任何地方。',
        choices: {
          'story-745829103-c31': {
            text: '粉碎束缚以释放你们两人',
            description: '为了自由冒险牺牲花园',
          },
          'story-745829103-c32': {
            text: '将魔法只吸入你自己体内',
            description: '承担代价让伊莱亚斯离开',
          },
        },
      },
      'story-745829103-17': {
        title: '对齐的心跳',
        narration: '随着灯笼的修复，花园在和谐中嗡嗡作响。月光和心跳混合，直到你无法分辨你在哪里结束，伊莱亚斯在哪里开始。',
        choices: {
          'story-745829103-c33': {
            text: '与他留在午夜的花丛中',
            description: '选择由星光编织的生活',
          },
          'story-745829103-c34': {
            text: '引导花园走向即将到来的黎明',
            description: '与苏醒的世界分享它的魔法',
          },
        },
      },
      'story-745829103-18': {
        title: '黎明的门槛',
        narration: '你保持着魔法的涌动而不屈服于它。庄园呻吟着，世界之间的边界变薄，如果你们敢一起穿越，它提供了一条回到阳光的路径。',
        choices: {
          'story-745829103-c35': {
            text: '引导伊莱亚斯走向苏醒的世界',
            description: '向他承诺日出',
          },
          'story-745829103-c36': {
            text: '让魔法将你固定在他身旁',
            description: '接受黄昏的存在',
          },
        },
      },
      'story-745829103-19': {
        title: '解放的时间',
        narration: '当护身符闪耀，碎片散开时，时间在花园周围蹒跚。花瓣在半空中冻结，远处的教堂钟声倒着响起。你只有几秒钟来决定这种新自由将付出什么代价。',
        choices: {
          'story-745829103-c37': {
            text: '将被捕获的时光释放入夜晚',
            description: '让花园选择自己的命运',
          },
          'story-745829103-c38': {
            text: '将花园永远锁在时间之外',
            description: '封印魔法即使它会枯萎',
          },
        },
      },
      'story-745829103-21': {
        title: '共享的日出',
        narration: '当黎明破晓时，你引导伊莱亚斯越过大门，带着一朵发光的花作为魔法能在阳光下存活的证明。庄园在笑声、音乐和终于欢迎日光的花园中苏醒。爱与遗产在开放的空气中扎根。',
        choices: {
        },
      },
      'story-745829103-22': {
        title: '破碎的咒语',
        narration: '你释放被困的时光，打破了束缚伊莱亚斯的誓言。花园在最后的光芒爆发中绽放，然后花朵溶解成星尘。自由属于你们，但午夜的奇迹成为你们两人带入未知未来的记忆。',
        choices: {
        },
      },
      'story-745829103-23': {
        title: '凋零的花瓣',
        narration: '你封印花园以使伊莱亚斯免受诅咒，但魔法没有月亮就枯萎了。庄园变得安静，花朵只保存在肖像和梦中。每个夜晚你都在想，另一个选择是否能拯救你牺牲的美丽。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '한밤의 정원',
    description: '자정에만 꽃이 피는 정원이 있는 빅토리아 시대 저택을 상속받게 됩니다. 정원을 돌보는 수수께끼의 정원사를 만났을 때, 당신은 그가',
    author: '이사벨라 크레인',
    nodes: {
      'story-745829103-1': {
        title: '상속',
        narration: '유산 변호사의 편지가 당신의 서른 번째 생일에 도착했습니다. 존재조차 몰랐던 대고모가 당신에게 손우드 저택을 남겼습니다. 잊혀진 마을 가장자리에 있는 무너져가는 빅토리아 시대 저택입니다. 조건은 이상했습니다. 보유 여부를 결정하기 전에 한 달의 주기 동안 그곳에서 살아야 합니다. 자정에 도착하자 철제 대문이 저절로 열리고, 겨울 공기 속에서 불가능하게 피어나는 꽃 향기가 납니다.',
        choices: {
          'story-745829103-c1': {
            text: '꽃 향기를 따라 정원으로 간다',
            description: '신비로운 향기를 조사한다',
          },
          'story-745829103-c2': {
            text: '먼저 저택에 들어가 탐험한다',
            description: '순서대로 진행한다',
          },
        },
      },
      'story-745829103-3': {
        title: '울려 퍼지는 복도',
        narration: '저택이 당신을 벨벳 같은 어둠으로 삼킵니다. 유화 초상화들이 벽에서 지켜보고, 공기는 듣는다기보다 느껴지는 음으로 윙윙거립니다. 달빛이 깨진 스테인드글라스를 통해 새어 들어와 바닥에 사파이어 무늬를 그립니다.',
        choices: {
          'story-745829103-c5': {
            text: '복도를 통해 윙윙거리는 소리를 따라간다',
            description: '소리가 인도하도록 한다',
          },
          'story-745829103-c6': {
            text: '봉인된 서재 문을 강제로 연다',
            description: '저택에서 답을 찾는다',
          },
        },
      },
      'story-745829103-5': {
        title: '반짝이는 환영',
        narration: '당신의 손가락이 꽃을 스치자 액체 빛이 당신을 관통합니다. 맥박이 정원과 동기화되고 당신의 것이 아닌 기억들을 엿봅니다. 달빛 아래의 춤, 속삭이는 맹세, 모든 계절을 견디는 꽃잎을 돌보는 외로운 정원사.',
        choices: {
          'story-745829103-c9': {
            text: '환영이 더 깊이 끌어당기게 한다',
            description: '기억에 몸을 맡긴다',
          },
          'story-745829103-c10': {
            text: '접촉을 끊고 안정을 되찾는다',
            description: '통제력을 되찾는다',
          },
        },
      },
      'story-745829103-6': {
        title: '달에 묶인 온실',
        narration: '담쟁이 커튼 너머에 돔 형태의 온실이 기다리고 있습니다. 내부에는 황동과 수정으로 만든 악기들이 별자리처럼 매달려 있고, 윙윙거리는 음의 떨림마다 빛을 발합니다. 숨겨진 문은 서리로 테두리가 장식되어 있고 한밤의 공기를 내뿜고 있습니다.',
        choices: {
          'story-745829103-c11': {
            text: '윙윙거리는 소리를 따라 숨겨진 문으로 간다',
            description: '소리가 무엇을 보호하는지 발견한다',
          },
          'story-745829103-c12': {
            text: '빛나는 꽃을 잘라 엘리아스에게 보여준다',
            description: '증거를 정원으로 가져간다',
          },
        },
      },
      'story-745829103-7': {
        title: '조상의 서재',
        narration: '봉인된 서재가 열리자 먼지가 휘날립니다. 원장, 지도, 그리고 당신과 같은 눈을 가진 여성의 초상화가 선반을 가득 채우고 있습니다. 초승달 모양의 은 열쇠가 벨벳 일기장 위에 놓여 있고, 누군가가 그것을 차지하기를 기다리고 있습니다.',
        choices: {
          'story-745829103-c13': {
            text: '벨벳으로 장정된 일기장을 연다',
            description: '조상이 기록한 것을 배운다',
          },
          'story-745829103-c14': {
            text: '은 초승달 열쇠를 주머니에 넣는다',
            description: '나중을 위해 부적을 가져간다',
          },
        },
      },
      'story-745829103-10': {
        title: '별빛의 맥동',
        narration: '당신이 되돌린 에너지가 포획된 혜성처럼 가슴 속에서 감깁니다. 심장 박동마다 팔을 따라 불꽃이 흐르고, 가장 가까운 꽃들이 더 밝게 피어나며 당신의 온기를 향해 구부러집니다.',
        choices: {
          'story-745829103-c19': {
            text: '힘을 저택으로 전달한다',
          },
          'story-745829103-c20': {
            text: '힘을 내부에 유지하고 엘리아스에게 돌아간다',
            description: '두 세계를 연결할 수 있는지 시험한다',
          },
        },
      },
      'story-745829103-11': {
        title: '손우드의 맹세',
        narration: '일기장은 한 세기 전에 맺어진 계약을 드러냅니다. 한밤의 꽃을 볼 수 있는 첫 번째 상속인은 세계 사이에 정원을 유지할지 영원히 봉인할지 선택해야 합니다. 엘리아스는 그 선택이 기꺼운 마음으로 이루어질 때까지 묶여 있습니다.',
        choices: {
          'story-745829103-c21': {
            text: '고대의 맹세를 지키겠다고 맹세한다',
            description: '쓰여진 대로 의무를 받아들인다',
          },
          'story-745829103-c22': {
            text: '계약을 완전히 다시 쓰기로 결정한다',
            description: '유산에 도전한다',
          },
        },
      },
      'story-745829103-12': {
        title: '공명하는 약속',
        narration: '달빛의 원 안에 서 있으면 정원이 두 사람의 숨결에 맞춰지는 것을 느낍니다. 엘리아스는 한 번도 본 적 없는 새벽과 더 이상 감히 상상하지 못하는 미래에 대해 이야기합니다.',
        choices: {
          'story-745829103-c23': {
            text: '그의 옆 원 안으로 완전히 들어간다',
            description: '당신의 리듬을 정원에 묶는다',
          },
          'story-745829103-c24': {
            text: '한 발을 필멸의 세계에 둔다',
            description: '공유하는 새벽을 위한 공간을 확보한다',
          },
        },
      },
      'story-745829103-13': {
        title: '달의 부적',
        narration: '초승달 열쇠가 손바닥에서 따뜻해지며 별자리가 새겨진 부적으로 펼쳐집니다. 어떤 이름을 말하느냐에 따라 마법을 방해하거나 방향을 바꿀 수 있다는 것을 느낍니다.',
        choices: {
          'story-745829103-c25': {
            text: '단조 철제 문에 부적을 사용한다',
            description: '새로운 통로를 열 수 있는지 시험한다',
          },
          'story-745829103-c26': {
            text: '엘리아스에게 부적을 보여준다',
            description: '그를 결정에 초대한다',
          },
        },
      },
      'story-745829103-14': {
        title: '시간의 등불',
        narration: '윙윙거리는 문 뒤에서 공중에 떠 있는 등불을 발견합니다. 수정 핵이 떠다니는 조각들로 산산이 부서져 있습니다. 각 파편은 다른 달의 정원 기억을 담고 있으며 시간 속에 정지되어 있습니다.',
        choices: {
          'story-745829103-c27': {
            text: '새로운 에너지로 수정을 다시 벼린다',
            description: '함께 마법을 안정시킨다',
          },
          'story-745829103-c28': {
            text: '파편을 흩뿌려 순환을 깬다',
            description: '갇힌 순간들을 해방시킨다',
          },
        },
      },
      'story-745829103-16': {
        title: '계약 깨기',
        narration: '당신은 맹세에 도전하며 새로운 말들을 공기 중에 엮어냅니다. 꽃들이 두려움과 환희 사이에서 깜박이는 동안 엘리아스가 당신을 지탱하며, 당신이 이끄는 곳이면 어디든 따를 준비가 되어 있습니다.',
        choices: {
          'story-745829103-c31': {
            text: '둘 다 자유롭게 하기 위해 속박을 부순다',
            description: '자유를 위해 정원을 위험에 빠뜨린다',
          },
          'story-745829103-c32': {
            text: '마법을 자신에게만 끌어당긴다',
            description: '엘리아스가 떠날 수 있도록 대가를 짊어진다',
          },
        },
      },
      'story-745829103-17': {
        title: '정렬된 심장 박동',
        narration: '등불이 복원되자 정원이 조화롭게 윙윙거립니다. 달빛과 심장 박동이 섞여 당신이 어디서 끝나고 엘리아스가 어디서 시작하는지 알 수 없게 됩니다.',
        choices: {
          'story-745829103-c33': {
            text: '그와 함께 한밤의 개화 속에 머문다',
            description: '별빛으로 짜여진 삶을 선택한다',
          },
          'story-745829103-c34': {
            text: '정원을 다가오는 새벽으로 이끈다',
            description: '깨어나는 세상과 마법을 공유한다',
          },
        },
      },
      'story-745829103-18': {
        title: '새벽의 문턱',
        narration: '당신은 마법의 파도를 그것에 굴복하지 않고 붙잡습니다. 세계 사이의 경계가 얇아지면서 저택이 신음하며, 감히 함께 걸어갈 용기가 있다면 햇빛으로 돌아가는 길을 제공합니다.',
        choices: {
          'story-745829103-c35': {
            text: '엘리아스를 깨어나는 세상으로 이끈다',
            description: '그에게 일출을 약속한다',
          },
          'story-745829103-c36': {
            text: '마법이 당신을 그의 곁에 고정시키게 한다',
            description: '황혼의 존재를 받아들인다',
          },
        },
      },
      'story-745829103-19': {
        title: '해방된 시간',
        narration: '부적이 빛나고 파편들이 흩어지자 정원 주변에서 시간이 비틀거립니다. 꽃잎들이 낙하 도중에 얼어붙고 먼 교회 종소리가 거꾸로 울립니다. 이 새로운 자유가 무엇을 대가로 할지 결정하는 데 몇 초밖에 없습니다.',
        choices: {
          'story-745829103-c37': {
            text: '갇힌 시간들을 밤으로 해방시킨다',
            description: '정원이 운명을 선택하게 한다',
          },
          'story-745829103-c38': {
            text: '정원을 영원히 시간으로부터 가둔다',
            description: '시들더라도 마법을 봉인한다',
          },
        },
      },
      'story-745829103-21': {
        title: '공유하는 일출',
        narration: '새벽이 밝아올 때 당신은 엘리아스를 대문 너머로 인도하며, 마법이 태양을 견딜 수 있다는 증거로 하나의 빛나는 꽃을 가져갑니다. 저택은 웃음, 음악, 그리고 마침내 햇빛을 환영하는 정원과 함께 깨어납니다. 사랑과 유산이 열린 공기 속에 뿌리를 내립니다.',
        choices: {
        },
      },
      'story-745829103-22': {
        title: '산산이 부서진 주문',
        narration: '당신은 갇힌 시간들을 해방시키며 엘리아스를 묶었던 맹세를 깨뜨립니다. 정원이 마지막 빛의 폭발과 함께 터지고 꽃들이 별먼지로 녹아듭니다. 자유는 당신들의 것이지만, 한밤의 경이는 두 사람이 미지의 미래로 가져가는 기억이 됩니다.',
        choices: {
        },
      },
      'story-745829103-23': {
        title: '바래는 꽃잎들',
        narration: '당신은 엘리아스를 저주에서 구하기 위해 정원을 봉인하지만, 마법은 달 없이는 시들어버립니다. 저택은 조용해지고, 꽃들은 초상화와 꿈 속에서만 보존됩니다. 매일 밤 다른 선택이 당신이 희생한 아름다움을 구할 수 있었을지 궁금해합니다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
