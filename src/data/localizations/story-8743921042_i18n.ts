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

export const story_8743921042StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Echoes of the Moonlit Grove',
    description: 'When the moon rises full over Blackbriar Forest, an old bargain wakes. You carry a shard of a broken sigil that hums near the trees, calling you toward a forgotten crown and a debt the grove intends to collect. Choose allies, honor, or power—but the grove always takes its due.',
    author: 'Daria Voronova',
    nodes: {
      'story-8743921042-1': {
        title: 'Moonlit Omen',
        narration: 'A blue-white moon climbs above Blackbriar’s tangled crowns, and the shard in your pocket warms as if it remembers a promise. Owls fall silent. Between the pines, a narrow path gleams like wet ink, pulling at your boots. The shard thrums again, answering something old that stirs in the roots.',
        choices: {
          'story-8743921042-c1': {
            text: 'Follow the moonlit path into the grove',
            description: 'The shard wants you deeper.',
          },
          'story-8743921042-c2': {
            text: 'Study the sigil shard and search for markings nearby',
            description: 'Knowledge before risk.',
          },
        },
      },
      'story-8743921042-2': {
        title: 'Whispering Path',
        narration: 'Mist coils at your knees, whispering your name in voices you almost know. Pale moths drift ahead, forming arrows that point deeper. A smell of wet iron rides the air. Somewhere distant, a bell rings once.',
        choices: {
          'story-8743921042-c3': {
            text: 'Answer the whispers',
            description: 'Risk letting them in.',
          },
          'story-8743921042-c4': {
            text: 'Ignore them and push toward the sound of the bell',
            description: 'Trust your feet, not your ears.',
          },
        },
      },
      'story-8743921042-3': {
        title: 'Shattered Sigil',
        narration: 'The shard is a crescent of dark glass etched with thorny runes. When you breathe across it, frost halos the markings and a second pattern blooms—a crown without a wearer. The wood answers with a low groan, as if turning in sleep.',
        choices: {
          'story-8743921042-c5': {
            text: 'Press the shard to the earth and listen',
            description: 'Speak in the old way.',
          },
          'story-8743921042-c6': {
            text: 'Break a splinter from the shard to draw blood-runes',
            description: 'Power courts a price.',
          },
        },
      },
      'story-8743921042-4': {
        title: 'Elder Yew',
        narration: 'A yew older than any temple arches over a slow, clear rill. Red berries gleam like droplets of warning. When you touch the bark, the tree remembers you—your grandmother’s voice, a cradle-song about a debt to the grove. The water brightens, showing your face crowned in thorns.',
        choices: {
          'story-8743921042-c7': {
            text: 'Drink from the rill',
            description: 'Accept a memory not your own.',
          },
          'story-8743921042-c8': {
            text: 'Take yew bark for a protective charm',
            description: 'Ward first, then walk.',
          },
        },
      },
      'story-8743921042-5': {
        title: 'Fogbound Bridge',
        narration: 'A rope-and-plank bridge sags over a gorge you cannot see. Down below, something breathes like surf against bone. A bell hangs from the first post, wrapped in spider-silk, as if the forest itself muzzled it.',
        choices: {
          'story-8743921042-c9': {
            text: 'Ring the bell',
            description: 'Wake what sleeps to parley.',
          },
          'story-8743921042-c10': {
            text: 'Cross in silence',
            description: 'Trust your balance.',
          },
        },
      },
      'story-8743921042-6': {
        title: 'Market of Shadows',
        narration: 'Lanterns bloom along a crooked lane where no city should be. Stalls sell bottled rain, thimble-moons, and names sewn into ribbon. A mask-maker gestures you closer, offering a face woven from briar and bright thread.',
        choices: {
          'story-8743921042-c11': {
            text: 'Buy the briar mask with a drop of blood',
            description: 'Masks deceive, but protect.',
          },
          'story-8743921042-c12': {
            text: 'Trade the shard for a guide',
            description: 'Information over artifacts.',
          },
        },
      },
      'story-8743921042-7': {
        title: 'Spirit Lanterns',
        narration: 'Light beads rise from the stream and spiral around you, curious as fox kits. They nudge at your chest, your hands, the shard. When one passes through your palm, your skin sings with a thin, silver ache—the grove judges you and finds a debt unpaid.',
        choices: {
          'story-8743921042-c13': {
            text: 'Ask the spirits to share what they know',
            description: 'Humble questions earn answers.',
          },
          'story-8743921042-c14': {
            text: 'Command the spirits with the yew’s memory',
            description: 'Authority can bruise.',
          },
        },
      },
      'story-8743921042-9': {
        title: 'Undercroft Gate',
        narration: 'Carved steps descend into red stone where cold air spills like water. At the bottom yawns a door of ribbed rock and moon-metal studs. The shard in your pocket trembles, eager to be whole.',
        choices: {
          'story-8743921042-c17': {
            text: 'Fit the shard to the moon-metal seam',
            description: 'Complete what was broken.',
          },
          'story-8743921042-c18': {
            text: 'Refuse the pull and take the higher stair',
            description: 'Seek another path upward.',
          },
        },
      },
      'story-8743921042-10': {
        title: 'Scribe of Echoes',
        narration: 'Your guide leads you to a stone terrace where wind writes on slate. The Scribe is a hooded woman whose hair moves like ink in water. She listens to your shard, then draws three sigils that smell of rain and iron.',
        choices: {
          'story-8743921042-c19': {
            text: 'Ask for a path to the crown',
            description: 'Direct is dangerous.',
          },
          'story-8743921042-c20': {
            text: 'Ask how to break the grove’s claim',
            description: 'Undo the bargain.',
          },
        },
      },
      'story-8743921042-11': {
        title: 'River of Glass',
        narration: 'The river looks still, but its surface is a skin of knives reflecting a second moon. A ferry with no ferryman waits, tied by a rope of woven hair. You can cross by trust—or test the edge and bleed a toll.',
        choices: {
          'story-8743921042-c21': {
            text: 'Board the waiting ferry',
            description: 'Trust the grove’s ritual.',
          },
          'story-8743921042-c22': {
            text: 'Cut your palm and paint the shard',
            description: 'Purchase safe passage.',
          },
        },
      },
      'story-8743921042-12': {
        title: 'Thorn Pact',
        narration: 'A hollow tree opens like a chapel, candles guttering in sap-lit niches. Whispered names drift through—lineage, debts, vows. The shard warms until it hurts, and you understand: taking the crown means wearing the grove’s hunger.',
        choices: {
          'story-8743921042-c23': {
            text: 'Accept the pact openly',
            description: 'Power with a price, paid in daylight.',
          },
          'story-8743921042-c24': {
            text: 'Refuse and seek a loophole',
            description: 'There is always wording.',
          },
        },
      },
      'story-8743921042-13': {
        title: 'Crownless King',
        narration: 'A figure of roots and wind sits upon a stone chair, his brow raw where a diadem once rested. When he turns, you see your own cheekbones, your family’s eyes—your line once held the crown. The grove hums, waiting to see what you will make of truth.',
        choices: {
          'story-8743921042-c25': {
            text: 'Kneel and vow to mend what your line broke',
            description: 'Atonement binds strongly.',
          },
          'story-8743921042-c26': {
            text: 'Challenge the King to pass the burden',
            description: 'Win freedom or worse weight.',
          },
        },
      },
      'story-8743921042-14': {
        title: 'Moonspire Stairs',
        narration: 'Stairs chipped from bone-white stone zigzag into fog. Each turn shows the moon larger until it fills the sky with a cold face. Your breath feathers; your resolve hardens to match the climb.',
        choices: {
          'story-8743921042-c27': {
            text: 'Climb faster to reach the spire first',
            description: 'Seize initiative.',
          },
          'story-8743921042-c28': {
            text: 'Pause to etch a ward into the step',
            description: 'Protection over haste.',
          },
        },
      },
      'story-8743921042-15': {
        title: 'Hall of Seeds',
        narration: 'A cavern opens beneath a painted sky where thousands of seeds hang in cobweb silk. Each seed beats like a tiny heart, each a future forest waiting for a promise. The crown sits upon a pedestal of woven roots, pulsing in time with your own pulse.',
        choices: {
          'story-8743921042-c29': {
            text: 'Place the shard into the crown',
            description: 'Complete the instrument of rule.',
          },
          'story-8743921042-c30': {
            text: 'Scatter the seeds and smother the crown',
            description: 'Break the cycle forever.',
          },
        },
      },
      'story-8743921042-16': {
        title: 'Mirror Duel',
        narration: 'On a frozen ridge, the wind hardens into a shape that mirrors you blow for blow. Each strike rings, shaking snow from black pines. The grove watches without breath, judging which self will serve it best.',
        choices: {
          'story-8743921042-c31': {
            text: 'Yield and accept your reflection’s crown',
            description: 'Let the other you rule.',
          },
          'story-8743921042-c32': {
            text: 'Shatter the mirror with the shard',
            description: 'Break the test to set your terms.',
          },
        },
      },
      'story-8743921042-17': {
        title: 'Price of Magic',
        narration: 'Fog folds into a circle of standing stones, every surface carved with offerings—hair, teeth, rings, lullabies written in ash. The grove does not bargain without coin. You can buy a path, but you must name your loss.',
        choices: {
          'story-8743921042-c33': {
            text: 'Offer your voice for a season',
            description: 'Silence buys guidance.',
          },
          'story-8743921042-c34': {
            text: 'Offer a year from your shadow',
            description: 'You will walk thinner.',
          },
        },
      },
      'story-8743921042-18': {
        title: 'Dawn Restored',
        narration: 'The crown accepts the shard, and the grove exhales a spring-scented breath. Birds wake as the first gold spills through the trees. You walk out wearing no metal, only a garland of fresh shoots—steward, not sovereign. The forest hums a quiet yes.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: 'Forest Devours',
        narration: 'Seeds burst in a rush of roots that crack stone and swallow halls. The crown smothers under a green tide that does not care for kings. Years later, travelers whisper of a new wood that grows too quickly, hungry as a storm. Your name is lost beneath leaves.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: 'Queen of Thorns',
        narration: 'You bow to your reflection, and it steps forward, wearing your face and a crown of living vine. The aurora ripples in the antlers of the watching stag as roots rise to form a throne. You will rule by listening, no blade needed—yet the crown drinks a little from your sleep each night.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: 'Lost Between Worlds',
        narration: 'The mirror shatters, but so does the path home. You learn the side-trails of the grove, guiding wanderers to safe clearings with a lantern of your own making. Some nights you almost remember a different name. The moon is your only clock.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: 'The Silver Oath',
        narration: 'On a shore where roots drink the tide, you swear to carry the grove’s law beyond its trees. The crown dissolves to light that threads your veins, cold and clean. You leave footprints that sprout grass behind you, an oath walking on two legs. The debt becomes a promise kept.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Тени Исчезнувшей Звезды',
    description: 'Когда наследница технологической компании исчезает, оставив лишь загадочный орнамент, частный детектив Сэм Мерсер втягивается в лабиринт залитых дождём переулков, секретных библиотек и тенистых доков. Каждая улика порождает новые вопросы, а каждое решение затягивает его глубже в заговор, достигающий вершины города.',
    author: 'Дафна Сойер',
    nodes: {
      'story-8273910265-1': {
        title: 'Полуночный клиент',
        narration: 'Дождь барабанит по окну вашего офиса, пока вы смотрите на мигающий неон снаружи. Тень пересекает порог, и женщина в промокшем плаще входит внутрь, её глаза умоляющие, когда она достаёт украшение в форме звезды и шепчет о пропавшей наследнице. Запах влажного асфальта и старой бумаги наполняет комнату, пока вы взвешиваете опасность в её словах. Город гудит секретами, и вы чувствуете, что это только начало.',
        choices: {
          'story-8273910265-c1': {
            text: 'Взяться за дело и отправиться на место преступления',
            description: 'Долг зовёт, даже под дождём.',
          },
          'story-8273910265-c2': {
            text: 'Отказаться и наблюдать из окна',
            description: 'Держаться в стороне, наблюдать за развитием событий.',
          },
        },
      },
      'story-8273910265-3': {
        title: 'Неохотное наблюдение',
        narration: 'Вы отправляете женщину прочь, но любопытство гложет вас. Сквозь исполосованное дождём стекло вы замечаете фигуру, прячущуюся на другой стороне улицы, с камерой в руках, снимающую ваш офис. Переулок блестит под уличными фонарями, город дышит, как зверь. Вы можете броситься под дождь за ним или держать дистанцию.',
        choices: {
          'story-8273910265-c5': {
            text: 'Следовать за тенью вниз по улице',
            description: 'Подобраться ближе, рискнуть разоблачением.',
          },
          'story-8273910265-c6': {
            text: 'Остаться в тени и наблюдать',
            description: 'Терпение может окупиться.',
          },
        },
      },
      'story-8273910265-5': {
        title: 'Нервный свидетель',
        narration: 'Нервный прохожий прислоняется к забрызганному дождём окну, телефон прижат к уху. Бегающие глаза, они плотнее запахивают пальто, когда вы приближаетесь. Гул города словно затихает, пока вы решаете, выманить ли правду мягко или смазать колёса наличными.',
        choices: {
          'story-8273910265-c9': {
            text: 'Спокойно спросить, что они видели',
            description: 'Завоевать доверие через эмпатию.',
          },
          'story-8273910265-c10': {
            text: 'Подсунуть им денег за ответы',
            description: 'Деньги говорят, когда страх молчит.',
          },
        },
      },
      'story-8273910265-6': {
        title: 'Наблюдение под дождём',
        narration: 'Вы сливаетесь с ливнем, позволяя подозреваемому вести вас через залитые неоном переулки. Каждая лужа отражает расколотый мир. Под пальто вы чувствуете вес собственных технологий; ноутбук тихо гудит, умоляя взломать зашифрованные сообщения. Взломать их связь или продолжить личную слежку?',
        choices: {
          'story-8273910265-c11': {
            text: 'Взломать их канал связи',
            description: 'Цифровые секреты часто самые сочные.',
          },
          'story-8273910265-c12': {
            text: 'Продолжать слежку из тени',
            description: 'Оставаться на земле.',
          },
        },
      },
      'story-8273910265-7': {
        title: 'Послание красным',
        narration: 'В конверте вы находите фотографию кулона в форме звезды и закодированное сообщение, написанное красными чернилами. Бумага кажется скользкой под вашими мокрыми пальцами. Символы намекают на библиотечные каталоги и старые секреты. Вы должны решить, где его расшифровать.',
        choices: {
          'story-8273910265-c13': {
            text: 'Отправиться в городскую библиотеку',
            description: 'Исследование в пыльных стеллажах.',
          },
          'story-8273910265-c14': {
            text: 'Позвонить другу-хакеру',
            description: 'Расшифровать с цифровой помощью.',
          },
        },
      },
      'story-8273910265-8': {
        title: 'Криминалистический отчёт',
        narration: 'Вернувшись в собственную лабораторию, мерцающие мониторы освещают ваше лицо. Вы сканируете конверт на отпечатки и анализируете чернила под ослепительным светом. Отпечаток совпадает с подпольным посредником, а GPS-метка указывает на доки. Вы можете пойти по цифровому следу или действовать по информации.',
        choices: {
          'story-8273910265-c15': {
            text: 'Проверить отпечатки по базе данных',
            description: 'Информация — это сила.',
          },
          'story-8273910265-c16': {
            text: 'Отправиться на доки, чтобы выследить их',
            description: 'Противостоять подозреваемому лично.',
          },
        },
      },
      'story-8273910265-9': {
        title: 'Разведка склада',
        narration: 'Ваши усилия окупаются: прошептанное признание или взломанное сообщение раскрывает встречу на заброшенном складе, помеченном граффити. Здание возвышается как тёмный монумент на фоне горизонта. Вы можете ворваться и рискнуть всем или потратить время на планирование.',
        choices: {
          'story-8273910265-c17': {
            text: 'Проникнуть на склад сейчас',
            description: 'Время решает всё.',
          },
          'story-8273910265-c18': {
            text: 'Сначала собрать больше разведданных',
            description: 'Осторожный подход может окупиться.',
          },
        },
      },
      'story-8273910265-10': {
        title: 'Последний поезд',
        narration: 'Подозреваемый проскальзывает в полуночный поезд, и вы спешите на станцию, пар шипит из спящих локомотивов. Тьма окутывает пути, пока последний вызов эхом отдаётся из динамиков. Вы можете сесть в поезд сейчас или попытаться перехитрить их на следующей остановке.',
        choices: {
          'story-8273910265-c19': {
            text: 'Запрыгнуть в поезд',
            description: 'Оставаться рядом с целью.',
          },
          'story-8273910265-c20': {
            text: 'Перехватить на следующей станции',
            description: 'Спланировать засаду заранее.',
          },
        },
      },
      'story-8273910265-11': {
        title: 'Стопки секретов',
        narration: 'Пылинки танцуют в лучах света, пока вы блуждаете по бесконечным стопкам книг. Запах старой бумаги окружает вас. Вы отслеживаете неясные каталожные номера, пока ваши пальцы не останавливаются на томе, описывающем звёздный орнамент, который открывает секреты в банковских хранилищах. Проверить ключ или копнуть глубже в архивах?',
        choices: {
          'story-8273910265-c21': {
            text: 'Пойти в банк с орнаментом',
            description: 'Хранилище может содержать истину.',
          },
          'story-8273910265-c22': {
            text: 'Искать дальше в архивах',
            description: 'Может быть ещё что-то обнаружить.',
          },
        },
      },
      'story-8273910265-13': {
        title: 'Тени на доках',
        narration: 'Запах соли и дизеля висит тяжело, пока вы крадётесь между ящиками на доках. Одинокая лодка мягко покачивается у изношенных свай, голоса бормочут над плеском волн. Остаться скрытым, чтобы собрать улики, или выйти на свет, чтобы противостоять главарю банды?',
        choices: {
          'story-8273910265-c25': {
            text: 'Тихо собирать улики',
            description: 'Терпение может принести доказательства.',
          },
          'story-8273910265-c26': {
            text: 'Противостоять главарю банды',
            description: 'Форсировать ситуацию сейчас.',
          },
        },
      },
      'story-8273910265-14': {
        title: 'Схватка на крыше',
        narration: 'Ветер хлещет по крыше, пока вы загоняете подозреваемого в угол на фоне возвышающихся небоскрёбов, окна которых мерцают, как звёзды. Пот выступает под воротником, несмотря на холод. Некуда бежать, ваша добыча смотрит на промежуток между зданиями. Ваш следующий шаг решит обе судьбы.',
        choices: {
          'story-8273910265-c27': {
            text: 'Уговорить и договориться',
            description: 'Слова могут быть оружием.',
          },
          'story-8273910265-c28': {
            text: 'Повалить на землю',
            description: 'Использовать силу, чтобы закончить погоню.',
          },
        },
      },
      'story-8273910265-15': {
        title: 'Засада на станции',
        narration: 'Поезд уезжает, и вы оказываетесь в безлюдном коридоре станции, флуоресцентные лампы мерцают наверху. Шаги эхом отдаются вдали, затем исчезают. Ваша цель ускользнула в темноту. Подождать, пока они вернутся, или позвонить контакту, который вам должен?',
        choices: {
          'story-8273910265-c29': {
            text: 'Ждать в тени',
            description: 'Терпение может их поймать.',
          },
          'story-8273910265-c30': {
            text: 'Попросить об одолжении',
            description: 'Задействовать свою сеть.',
          },
        },
      },
      'story-8273910265-17': {
        title: 'Полуночный причал',
        narration: 'Лунный свет окрашивает причал в серебро, пока волны облизывают его изношенные доски. Одинокая фигура ждёт под фонарём, лицо скрыто под капюшоном. Они предлагают вам выбор — присоединиться к ним и разделить прибыль от заговора или отказаться и разоблачить всю операцию. Доверие и предательство висят в солёном воздухе.',
        choices: {
          'story-8273910265-c33': {
            text: 'Принять их сделку',
            description: 'Присоединиться к теневой сети.',
          },
          'story-8273910265-c34': {
            text: 'Отказаться и разоблачить всё',
            description: 'Поднять тревогу.',
          },
        },
      },
      'story-8273910265-18': {
        title: 'Взлом',
        narration: 'С союзниками рядом вы открываете дверь в длинный тёмный коридор. Шаги эхом отдаются, пока вы приближаетесь к продолжающейся встрече, голоса низкие и заговорщические. Ворваться и арестовать или остаться, чтобы записать разговор для всего мира?',
        choices: {
          'story-8273910265-c35': {
            text: 'Вмешаться и арестовать их',
            description: 'Привести их к правосудию.',
          },
          'story-8273910265-c36': {
            text: 'Записать всё для утечки',
            description: 'Публично разоблачить заговор.',
          },
        },
      },
      'story-8273910265-19': {
        title: 'Дело ускользает',
        narration: 'Вы бросаетесь в схватку, и банда рассеивается, как тени под дождём. Раздаётся выстрел, двигатель лодки ревёт, и заговорщик исчезает в ночи. Недели спустя вы смотрите на свою пробковую доску, нити пряжи соединяют фотографии, которые никуда не ведут. Дело остывает, и город забывает, но вы не можете.',
        choices: {
        },
      },
      'story-8273910265-21': {
        title: 'Сделка с дьяволом',
        narration: 'Искушение побеждает. Вы кладёте файлы в карман и входите во внутренний круг. Лестница, по которой вы взбираетесь, может быть позолоченной, но каждая ступень скользкая от вины. Богатство и связи текут к вам, но в тихие моменты вы задаётесь вопросом, что стало с молодой женщиной, чей орнамент открыл ваше состояние.',
        choices: {
        },
      },
      'story-8273910265-22': {
        title: 'Информатор',
        narration: 'Вы выбираете разоблачение вместо безопасности. Спрятавшись за светящимися мониторами, вы собираете записи и документы и сливаете их прессе. Заголовки взрываются, влиятельные фигуры падают, и город содрогается. Вы становитесь одновременно героем и мишенью, исчезая в цифровых тенях, зная, что поступили правильно.',
        choices: {
        },
      },
    },
  },

  // Español
  es: {
    title: 'Ecos de la Arboleda Lunar',
    description: 'Cuando la luna llena se alza sobre el Bosque Espinegro, un viejo pacto despierta. Llevas un fragmento de un sello roto que vibra cerca de los árboles, llamándote hacia una corona olvidada y una deuda que la arboleda pretende cobrar. Elige aliados, honor o poder, pero la arboleda siempre cobra su tributo.',
    author: 'Daria Voronova',
    nodes: {
      'story-8743921042-1': {
        title: 'Presagio Lunar',
        narration: 'Una luna azul-blanca asciende sobre las copas enmarañadas de Espinegro, y el fragmento en tu bolsillo se calienta como si recordara una promesa. Los búhos enmudecen. Entre los pinos, un sendero estrecho brilla como tinta mojada, tirando de tus botas. El fragmento vibra de nuevo, respondiendo a algo antiguo que se agita en las raíces.',
        choices: {
          'story-8743921042-c1': {
            text: 'Sigue el sendero iluminado por la luna hacia la arboleda',
            description: 'El fragmento te quiere más adentro.',
          },
          'story-8743921042-c2': {
            text: 'Estudia el fragmento del sello y busca marcas cercanas',
            description: 'Conocimiento antes que riesgo.',
          },
        },
      },
      'story-8743921042-2': {
        title: 'Sendero Susurrante',
        narration: 'La niebla se enrosca a la altura de tus rodillas, susurrando tu nombre con voces que casi conoces. Polillas pálidas flotan adelante, formando flechas que apuntan más profundo. Un olor a hierro húmedo cabalga en el aire. En algún lugar distante, una campana suena una vez.',
        choices: {
          'story-8743921042-c3': {
            text: 'Responde a los susurros',
            description: 'Arriesga dejarlos entrar.',
          },
          'story-8743921042-c4': {
            text: 'Ignóralos y avanza hacia el sonido de la campana',
            description: 'Confía en tus pies, no en tus oídos.',
          },
        },
      },
      'story-8743921042-3': {
        title: 'Sello Fragmentado',
        narration: 'El fragmento es una media luna de vidrio oscuro grabada con runas espinosas. Cuando respiras sobre él, la escarcha aureola las marcas y florece un segundo patrón: una corona sin portador. El bosque responde con un gemido grave, como si se diera vuelta en sueños.',
        choices: {
          'story-8743921042-c5': {
            text: 'Presiona el fragmento contra la tierra y escucha',
            description: 'Habla a la antigua usanza.',
          },
          'story-8743921042-c6': {
            text: 'Rompe una astilla del fragmento para dibujar runas de sangre',
            description: 'El poder corteja un precio.',
          },
        },
      },
      'story-8743921042-4': {
        title: 'Tejo Ancestral',
        narration: 'Un tejo más viejo que cualquier templo se arquea sobre un arroyo lento y claro. Bayas rojas relucen como gotas de advertencia. Cuando tocas la corteza, el árbol te recuerda: la voz de tu abuela, una canción de cuna sobre una deuda con la arboleda. El agua se ilumina, mostrando tu rostro coronado de espinas.',
        choices: {
          'story-8743921042-c7': {
            text: 'Bebe del arroyo',
            description: 'Acepta una memoria que no es tuya.',
          },
          'story-8743921042-c8': {
            text: 'Toma corteza de tejo para un amuleto protector',
            description: 'Protección primero, luego camina.',
          },
        },
      },
      'story-8743921042-5': {
        title: 'Puente Envuelto en Niebla',
        narration: 'Un puente de cuerda y tablones se hunde sobre un barranco que no puedes ver. Abajo, algo respira como oleaje contra hueso. Una campana cuelga del primer poste, envuelta en seda de araña, como si el bosque mismo la hubiera amordazado.',
        choices: {
          'story-8743921042-c9': {
            text: 'Toca la campana',
            description: 'Despierta lo que duerme para parlamentar.',
          },
          'story-8743921042-c10': {
            text: 'Cruza en silencio',
            description: 'Confía en tu equilibrio.',
          },
        },
      },
      'story-8743921042-6': {
        title: 'Mercado de Sombras',
        narration: 'Linternas florecen a lo largo de un callejón torcido donde no debería haber ciudad. Los puestos venden lluvia embotellada, lunas de dedal y nombres cosidos en cintas. Un fabricante de máscaras te hace señas más cerca, ofreciendo un rostro tejido de zarza e hilo brillante.',
        choices: {
          'story-8743921042-c11': {
            text: 'Compra la máscara de zarza con una gota de sangre',
            description: 'Las máscaras engañan, pero protegen.',
          },
          'story-8743921042-c12': {
            text: 'Intercambia el fragmento por un guía',
            description: 'Información sobre artefactos.',
          },
        },
      },
      'story-8743921042-7': {
        title: 'Linternas Espirituales',
        narration: 'Cuentas de luz se elevan del arroyo y giran a tu alrededor, curiosas como cachorros de zorro. Empujan tu pecho, tus manos, el fragmento. Cuando una pasa a través de tu palma, tu piel canta con un dolor fino y plateado: la arboleda te juzga y encuentra una deuda impaga.',
        choices: {
          'story-8743921042-c13': {
            text: 'Pide a los espíritus que compartan lo que saben',
            description: 'Las preguntas humildes obtienen respuestas.',
          },
          'story-8743921042-c14': {
            text: 'Comanda a los espíritus con la memoria del tejo',
            description: 'La autoridad puede herir.',
          },
        },
      },
      'story-8743921042-9': {
        title: 'Puerta de la Cripta',
        narration: 'Escalones tallados descienden en piedra roja donde el aire frío se derrama como agua. En el fondo bosteza una puerta de roca acanalada y tachuelas de metal lunar. El fragmento en tu bolsillo tiembla, ansioso por estar completo.',
        choices: {
          'story-8743921042-c17': {
            text: 'Ajusta el fragmento a la costura de metal lunar',
            description: 'Completa lo que se rompió.',
          },
          'story-8743921042-c18': {
            text: 'Resiste el tirón y toma la escalera más alta',
            description: 'Busca otro camino hacia arriba.',
          },
        },
      },
      'story-8743921042-10': {
        title: 'Escriba de los Ecos',
        narration: 'Tu guía te lleva a una terraza de piedra donde el viento escribe sobre pizarra. La Escriba es una mujer encapuchada cuyo cabello se mueve como tinta en agua. Escucha tu fragmento, luego dibuja tres sellos que huelen a lluvia y hierro.',
        choices: {
          'story-8743921042-c19': {
            text: 'Pregunta por un camino a la corona',
            description: 'Lo directo es peligroso.',
          },
          'story-8743921042-c20': {
            text: 'Pregunta cómo romper el reclamo de la arboleda',
            description: 'Deshaz el pacto.',
          },
        },
      },
      'story-8743921042-11': {
        title: 'Río de Cristal',
        narration: 'El río parece quieto, pero su superficie es una piel de cuchillos que reflejan una segunda luna. Un transbordador sin barquero espera, atado por una cuerda de cabello trenzado. Puedes cruzar por confianza, o probar el filo y sangrar un tributo.',
        choices: {
          'story-8743921042-c21': {
            text: 'Aborda el transbordador en espera',
            description: 'Confía en el ritual de la arboleda.',
          },
          'story-8743921042-c22': {
            text: 'Corta tu palma y pinta el fragmento',
            description: 'Compra paso seguro.',
          },
        },
      },
      'story-8743921042-12': {
        title: 'Pacto de Espinas',
        narration: 'Un árbol hueco se abre como una capilla, velas parpadeando en nichos iluminados por savia. Nombres susurrados flotan a través: linaje, deudas, votos. El fragmento se calienta hasta doler, y comprendes: tomar la corona significa llevar el hambre de la arboleda.',
        choices: {
          'story-8743921042-c23': {
            text: 'Acepta el pacto abiertamente',
            description: 'Poder con un precio, pagado a la luz del día.',
          },
          'story-8743921042-c24': {
            text: 'Niégate y busca una laguna legal',
            description: 'Siempre hay redacción.',
          },
        },
      },
      'story-8743921042-13': {
        title: 'Rey sin Corona',
        narration: 'Una figura de raíces y viento se sienta sobre una silla de piedra, su frente en carne viva donde una diadema alguna vez descansó. Cuando se gira, ves tus propios pómulos, los ojos de tu familia: tu linaje una vez sostuvo la corona. La arboleda zumba, esperando ver qué harás con la verdad.',
        choices: {
          'story-8743921042-c25': {
            text: 'Arrodíllate y jura reparar lo que tu linaje rompió',
            description: 'La expiación ata fuertemente.',
          },
          'story-8743921042-c26': {
            text: 'Desafía al Rey a pasar la carga',
            description: 'Gana libertad o peor peso.',
          },
        },
      },
      'story-8743921042-14': {
        title: 'Escaleras de la Aguja Lunar',
        narration: 'Escaleras talladas en piedra blanca como hueso zigzaguean en la niebla. Cada giro muestra la luna más grande hasta que llena el cielo con un rostro frío. Tu aliento se empluma; tu resolución se endurece para igualar la escalada.',
        choices: {
          'story-8743921042-c27': {
            text: 'Sube más rápido para alcanzar la aguja primero',
            description: 'Toma la iniciativa.',
          },
          'story-8743921042-c28': {
            text: 'Haz una pausa para grabar un sello protector en el escalón',
            description: 'Protección sobre prisa.',
          },
        },
      },
      'story-8743921042-15': {
        title: 'Salón de las Semillas',
        narration: 'Una caverna se abre bajo un cielo pintado donde miles de semillas cuelgan en seda de telaraña. Cada semilla late como un corazón diminuto, cada una un bosque futuro esperando una promesa. La corona descansa sobre un pedestal de raíces entrelazadas, pulsando al ritmo de tu propio pulso.',
        choices: {
          'story-8743921042-c29': {
            text: 'Coloca el fragmento en la corona',
            description: 'Completa el instrumento del gobierno.',
          },
          'story-8743921042-c30': {
            text: 'Esparce las semillas y sofoca la corona',
            description: 'Rompe el ciclo para siempre.',
          },
        },
      },
      'story-8743921042-16': {
        title: 'Duelo del Espejo',
        narration: 'En una cresta helada, el viento se endurece en una forma que te refleja golpe por golpe. Cada golpe resuena, sacudiendo nieve de pinos negros. La arboleda observa sin aliento, juzgando qué yo la servirá mejor.',
        choices: {
          'story-8743921042-c31': {
            text: 'Cede y acepta la corona de tu reflejo',
            description: 'Deja que el otro tú gobierne.',
          },
          'story-8743921042-c32': {
            text: 'Rompe el espejo con el fragmento',
            description: 'Rompe la prueba para establecer tus términos.',
          },
        },
      },
      'story-8743921042-17': {
        title: 'Precio de la Magia',
        narration: 'La niebla se pliega en un círculo de piedras erguidas, cada superficie tallada con ofrendas: cabello, dientes, anillos, canciones de cuna escritas en ceniza. La arboleda no negocia sin moneda. Puedes comprar un camino, pero debes nombrar tu pérdida.',
        choices: {
          'story-8743921042-c33': {
            text: 'Ofrece tu voz por una temporada',
            description: 'El silencio compra guía.',
          },
          'story-8743921042-c34': {
            text: 'Ofrece un año de tu sombra',
            description: 'Caminarás más delgado.',
          },
        },
      },
      'story-8743921042-18': {
        title: 'Amanecer Restaurado',
        narration: 'La corona acepta el fragmento, y la arboleda exhala un aliento con aroma a primavera. Los pájaros despiertan mientras el primer oro se derrama entre los árboles. Sales sin llevar metal, solo una guirnalda de brotes frescos: administrador, no soberano. El bosque zumba un sí tranquilo.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: 'El Bosque Devora',
        narration: 'Las semillas estallan en una oleada de raíces que agrietan piedra y tragan salones. La corona se sofoca bajo una marea verde que no se preocupa por los reyes. Años después, los viajeros susurran de un nuevo bosque que crece demasiado rápido, hambriento como una tormenta. Tu nombre se pierde bajo las hojas.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: 'Reina de Espinas',
        narration: 'Te inclinas ante tu reflejo, y este avanza, llevando tu rostro y una corona de vid viviente. La aurora ondula en las astas del ciervo vigilante mientras las raíces se elevan para formar un trono. Gobernarás escuchando, sin necesidad de espada, pero la corona bebe un poco de tu sueño cada noche.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: 'Perdido entre Mundos',
        narration: 'El espejo se rompe, pero también el camino a casa. Aprendes los senderos laterales de la arboleda, guiando a los errantes a claros seguros con una linterna de tu propia creación. Algunas noches casi recuerdas un nombre diferente. La luna es tu único reloj.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: 'El Juramento de Plata',
        narration: 'En una orilla donde las raíces beben la marea, juras llevar la ley de la arboleda más allá de sus árboles. La corona se disuelve en luz que enhebra tus venas, fría y limpia. Dejas huellas que brotan hierba detrás de ti, un juramento que camina sobre dos piernas. La deuda se convierte en una promesa cumplida.',
        choices: {
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Echos des Mondhains',
    description: 'Wenn der Vollmond über dem Schwarzdornwald aufgeht, erwacht ein alter Pakt. Du trägst ein Bruchstück eines zerbrochenen Siegels, das in der Nähe der Bäume summt und dich zu einer vergessenen Krone und einer Schuld ruft, die der Hain einzufordern gedenkt. Wähle Verbündete, Ehre oder Macht – aber der Hain fordert immer seinen Tribut.',
    author: 'Daria Voronova',
    nodes: {
      'story-8743921042-1': {
        title: 'Mondlicht-Omen',
        narration: 'Ein blauweißer Mond steigt über Schwarzdorns verworrene Kronen, und das Bruchstück in deiner Tasche erwärmt sich, als erinnere es sich an ein Versprechen. Eulen verstummen. Zwischen den Kiefern schimmert ein schmaler Pfad wie nasse Tinte und zieht an deinen Stiefeln. Das Bruchstück pulsiert erneut und antwortet etwas Altem, das sich in den Wurzeln regt.',
        choices: {
          'story-8743921042-c1': {
            text: 'Folge dem mondbeleuchteten Pfad in den Hain',
            description: 'Das Bruchstück will dich tiefer hinein.',
          },
          'story-8743921042-c2': {
            text: 'Untersuche das Siegelbruchstück und suche nach Markierungen in der Nähe',
            description: 'Wissen vor Risiko.',
          },
        },
      },
      'story-8743921042-2': {
        title: 'Flüsternder Pfad',
        narration: 'Nebel ringelt sich um deine Knie und flüstert deinen Namen mit Stimmen, die du fast kennst. Blasse Motten treiben voraus und formen Pfeile, die tiefer zeigen. Ein Geruch nach nassem Eisen liegt in der Luft. Irgendwo in der Ferne läutet eine Glocke einmal.',
        choices: {
          'story-8743921042-c3': {
            text: 'Antworte auf das Flüstern',
            description: 'Riskiere, sie hereinzulassen.',
          },
          'story-8743921042-c4': {
            text: 'Ignoriere sie und dränge zum Klang der Glocke',
            description: 'Vertraue deinen Füßen, nicht deinen Ohren.',
          },
        },
      },
      'story-8743921042-3': {
        title: 'Zerbrochenes Siegel',
        narration: 'Das Bruchstück ist ein Halbmond aus dunklem Glas, eingraviert mit dornigen Runen. Als du darüber hauchst, umsäumt Frost die Markierungen und ein zweites Muster erblüht – eine Krone ohne Träger. Der Wald antwortet mit einem tiefen Stöhnen, als würde er sich im Schlaf umdrehen.',
        choices: {
          'story-8743921042-c5': {
            text: 'Drücke das Bruchstück auf die Erde und lausche',
            description: 'Sprich auf die alte Weise.',
          },
          'story-8743921042-c6': {
            text: 'Breche einen Splitter vom Bruchstück ab, um Blutrunen zu zeichnen',
            description: 'Macht wirbt um einen Preis.',
          },
        },
      },
      'story-8743921042-4': {
        title: 'Uralte Eibe',
        narration: 'Eine Eibe, älter als jeder Tempel, wölbt sich über einen langsamen, klaren Rinnsal. Rote Beeren leuchten wie Tropfen der Warnung. Als du die Rinde berührst, erinnert sich der Baum an dich – die Stimme deiner Großmutter, ein Wiegenlied über eine Schuld gegenüber dem Hain. Das Wasser erhellt sich und zeigt dein Gesicht, gekrönt mit Dornen.',
        choices: {
          'story-8743921042-c7': {
            text: 'Trinke aus dem Rinnsal',
            description: 'Akzeptiere eine Erinnerung, die nicht deine eigene ist.',
          },
          'story-8743921042-c8': {
            text: 'Nimm Eibenrinde für einen Schutzcharme',
            description: 'Erst schützen, dann gehen.',
          },
        },
      },
      'story-8743921042-5': {
        title: 'Nebelumhüllte Brücke',
        narration: 'Eine Seil- und Plankenbrücke hängt über einer Schlucht, die du nicht sehen kannst. Tief unten atmet etwas wie Brandung gegen Knochen. Eine Glocke hängt am ersten Pfosten, in Spinnenseide gewickelt, als hätte der Wald selbst sie geknebelt.',
        choices: {
          'story-8743921042-c9': {
            text: 'Läute die Glocke',
            description: 'Wecke, was schläft, um zu verhandeln.',
          },
          'story-8743921042-c10': {
            text: 'Überquere sie in Stille',
            description: 'Vertraue auf dein Gleichgewicht.',
          },
        },
      },
      'story-8743921042-6': {
        title: 'Markt der Schatten',
        narration: 'Laternen erblühen entlang einer krummen Gasse, wo keine Stadt sein sollte. Stände verkaufen abgefüllten Regen, Fingerhut-Monde und Namen, die in Bänder genäht sind. Ein Maskenmacher winkt dich näher und bietet ein Gesicht aus Dornen und hellem Faden an.',
        choices: {
          'story-8743921042-c11': {
            text: 'Kaufe die Dornenmaske mit einem Tropfen Blut',
            description: 'Masken täuschen, aber schützen.',
          },
          'story-8743921042-c12': {
            text: 'Tausche das Bruchstück gegen einen Führer',
            description: 'Information über Artefakte.',
          },
        },
      },
      'story-8743921042-7': {
        title: 'Geisterlaternen',
        narration: 'Lichtperlen steigen aus dem Bach und wirbeln um dich herum, neugierig wie Fuchsjunge. Sie stupsen an deine Brust, deine Hände, das Bruchstück. Als eine durch deine Handfläche gleitet, singt deine Haut mit einem dünnen, silbernen Schmerz – der Hain richtet über dich und findet eine unbezahlte Schuld.',
        choices: {
          'story-8743921042-c13': {
            text: 'Bitte die Geister, zu teilen, was sie wissen',
            description: 'Bescheidene Fragen verdienen Antworten.',
          },
          'story-8743921042-c14': {
            text: 'Befehlige die Geister mit der Erinnerung der Eibe',
            description: 'Autorität kann verletzen.',
          },
        },
      },
      'story-8743921042-9': {
        title: 'Grufttor',
        narration: 'Geschnitzte Stufen steigen hinab in roten Stein, wo kalte Luft wie Wasser strömt. Am Boden gähnt eine Tür aus geripptem Fels und Mondmetall-Nieten. Das Bruchstück in deiner Tasche zittert, begierig, wieder ganz zu werden.',
        choices: {
          'story-8743921042-c17': {
            text: 'Füge das Bruchstück in die Mondmetall-Naht',
            description: 'Vervollständige, was zerbrochen war.',
          },
          'story-8743921042-c18': {
            text: 'Widerstehe dem Sog und nimm die höhere Treppe',
            description: 'Suche einen anderen Weg nach oben.',
          },
        },
      },
      'story-8743921042-10': {
        title: 'Schreiberin der Echos',
        narration: 'Dein Führer bringt dich zu einer steinernen Terrasse, wo der Wind auf Schiefer schreibt. Die Schreiberin ist eine verhüllte Frau, deren Haar sich wie Tinte im Wasser bewegt. Sie lauscht deinem Bruchstück, dann zeichnet sie drei Siegel, die nach Regen und Eisen duften.',
        choices: {
          'story-8743921042-c19': {
            text: 'Frage nach einem Pfad zur Krone',
            description: 'Direkt ist gefährlich.',
          },
          'story-8743921042-c20': {
            text: 'Frage, wie man den Anspruch des Hains brechen kann',
            description: 'Löse den Pakt auf.',
          },
        },
      },
      'story-8743921042-11': {
        title: 'Fluss aus Glas',
        narration: 'Der Fluss scheint still, aber seine Oberfläche ist eine Haut aus Messern, die einen zweiten Mond reflektieren. Eine Fähre ohne Fährmann wartet, gebunden durch ein Seil aus geflochtenem Haar. Du kannst durch Vertrauen übersetzen – oder die Schneide testen und einen Tribut bluten.',
        choices: {
          'story-8743921042-c21': {
            text: 'Betrete die wartende Fähre',
            description: 'Vertraue dem Ritual des Hains.',
          },
          'story-8743921042-c22': {
            text: 'Schneide in deine Handfläche und bemale das Bruchstück',
            description: 'Erkaufe sichere Überfahrt.',
          },
        },
      },
      'story-8743921042-12': {
        title: 'Dornenpakt',
        narration: 'Ein hohler Baum öffnet sich wie eine Kapelle, Kerzen flackern in saftbeleuchteten Nischen. Geflüsterte Namen treiben hindurch – Abstammung, Schulden, Gelübde. Das Bruchstück erwärmt sich, bis es schmerzt, und du verstehst: die Krone zu nehmen bedeutet, den Hunger des Hains zu tragen.',
        choices: {
          'story-8743921042-c23': {
            text: 'Akzeptiere den Pakt offen',
            description: 'Macht mit einem Preis, bezahlt im Tageslicht.',
          },
          'story-8743921042-c24': {
            text: 'Lehne ab und suche ein Schlupfloch',
            description: 'Es gibt immer eine Formulierung.',
          },
        },
      },
      'story-8743921042-13': {
        title: 'Kronenloser König',
        narration: 'Eine Gestalt aus Wurzeln und Wind sitzt auf einem steinernen Stuhl, seine Stirn roh dort, wo einst ein Diadem ruhte. Als er sich umdreht, siehst du deine eigenen Wangenknochen, die Augen deiner Familie – deine Linie hielt einst die Krone. Der Hain summt und wartet darauf zu sehen, was du aus der Wahrheit machst.',
        choices: {
          'story-8743921042-c25': {
            text: 'Knie nieder und gelobe, zu heilen, was deine Linie zerbrach',
            description: 'Sühne bindet stark.',
          },
          'story-8743921042-c26': {
            text: 'Fordere den König heraus, die Last weiterzugeben',
            description: 'Gewinne Freiheit oder schlimmeres Gewicht.',
          },
        },
      },
      'story-8743921042-14': {
        title: 'Mondspiralen-Treppen',
        narration: 'Stufen, aus knochenweißem Stein gemeißelt, zickzacken in den Nebel. Jede Wendung zeigt den Mond größer, bis er den Himmel mit einem kalten Gesicht füllt. Dein Atem federt; deine Entschlossenheit härtet sich, um dem Aufstieg zu entsprechen.',
        choices: {
          'story-8743921042-c27': {
            text: 'Steige schneller, um zuerst die Spitze zu erreichen',
            description: 'Ergreife die Initiative.',
          },
          'story-8743921042-c28': {
            text: 'Halte inne, um einen Schutz in die Stufe zu ritzen',
            description: 'Schutz vor Eile.',
          },
        },
      },
      'story-8743921042-15': {
        title: 'Halle der Samen',
        narration: 'Eine Höhle öffnet sich unter einem bemalten Himmel, wo Tausende von Samen in Spinnenseidenfäden hängen. Jeder Samen schlägt wie ein winziges Herz, jeder ein zukünftiger Wald, der auf ein Versprechen wartet. Die Krone sitzt auf einem Sockel aus geflochtenen Wurzeln und pulsiert im Takt mit deinem eigenen Puls.',
        choices: {
          'story-8743921042-c29': {
            text: 'Setze das Bruchstück in die Krone',
            description: 'Vervollständige das Instrument der Herrschaft.',
          },
          'story-8743921042-c30': {
            text: 'Verstreue die Samen und ersticke die Krone',
            description: 'Breche den Kreislauf für immer.',
          },
        },
      },
      'story-8743921042-16': {
        title: 'Spiegelduell',
        narration: 'Auf einem gefrorenen Grat verhärtet sich der Wind zu einer Gestalt, die dich Schlag für Schlag spiegelt. Jeder Treffer klingelt und schüttelt Schnee von schwarzen Kiefern. Der Hain beobachtet atemlos und urteilt, welches Selbst ihm am besten dienen wird.',
        choices: {
          'story-8743921042-c31': {
            text: 'Gib nach und akzeptiere die Krone deines Spiegelbildes',
            description: 'Lass das andere Ich herrschen.',
          },
          'story-8743921042-c32': {
            text: 'Zerschmettere den Spiegel mit dem Bruchstück',
            description: 'Breche die Prüfung, um deine Bedingungen zu setzen.',
          },
        },
      },
      'story-8743921042-17': {
        title: 'Preis der Magie',
        narration: 'Nebel faltet sich zu einem Kreis aus Stehsteinen, jede Oberfläche geschnitzt mit Opfergaben – Haare, Zähne, Ringe, Wiegenlieder in Asche geschrieben. Der Hain handelt nicht ohne Münze. Du kannst einen Pfad kaufen, aber du musst deinen Verlust benennen.',
        choices: {
          'story-8743921042-c33': {
            text: 'Biete deine Stimme für eine Jahreszeit',
            description: 'Stille kauft Führung.',
          },
          'story-8743921042-c34': {
            text: 'Biete ein Jahr von deinem Schatten',
            description: 'Du wirst dünner gehen.',
          },
        },
      },
      'story-8743921042-18': {
        title: 'Wiederhergestellte Morgendämmerung',
        narration: 'Die Krone nimmt das Bruchstück an, und der Hain atmet einen frühlingsduftenden Atemzug aus. Vögel erwachen, als das erste Gold durch die Bäume sickert. Du gehst hinaus, trägst kein Metall, nur eine Girlande aus frischen Trieben – Verwalter, nicht Herrscher. Der Wald summt ein leises Ja.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: 'Der Wald verschlingt',
        narration: 'Samen bersten in einem Ansturm von Wurzeln, die Stein zerbrechen und Hallen verschlingen. Die Krone erstickt unter einer grünen Flut, die sich nicht um Könige schert. Jahre später flüstern Reisende von einem neuen Wald, der zu schnell wächst, hungrig wie ein Sturm. Dein Name ist verloren unter Blättern.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: 'Königin der Dornen',
        narration: 'Du verbeugst dich vor deinem Spiegelbild, und es tritt vor, trägt dein Gesicht und eine Krone aus lebendigem Wein. Das Polarlicht kräuselt sich in den Geweihen des wachenden Hirsches, während Wurzeln aufsteigen, um einen Thron zu formen. Du wirst durch Zuhören herrschen, keine Klinge nötig – doch die Krone trinkt jede Nacht ein wenig von deinem Schlaf.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: 'Verloren zwischen den Welten',
        narration: 'Der Spiegel zerbricht, aber auch der Weg nach Hause. Du lernst die Seitenpfade des Hains, führst Wanderer mit einer selbstgemachten Laterne zu sicheren Lichtungen. Manche Nächte erinnerst du dich fast an einen anderen Namen. Der Mond ist deine einzige Uhr.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: 'Der Silberschwur',
        narration: 'An einem Ufer, wo Wurzeln die Flut trinken, schwörst du, das Gesetz des Hains über seine Bäume hinaus zu tragen. Die Krone löst sich zu Licht auf, das deine Adern durchzieht, kalt und rein. Du hinterlässt Fußabdrücke, die hinter dir Gras sprießen lassen, ein Schwur, der auf zwei Beinen geht. Die Schuld wird zu einem gehaltenen Versprechen.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Ombres de l\'Étoile Disparue',
    description: 'Quand une héritière de la tech disparaît et qu\'il ne reste qu\'un ornement cryptique, le détective privé Sam Mercer est entraîné dans un labyrinthe de ruelles détrempées, de bibliothèques secrètes et de quais ombragés. Chaque indice soulève de nouvelles questions et chaque décision l\'enfonce plus profondément dans un complot qui atteint les sommets de la ville.',
    author: 'Daphne Sawyer',
    nodes: {
      'story-8273910265-1': {
        title: 'Cliente de Minuit',
        narration: 'La pluie bat contre la fenêtre de votre bureau tandis que vous fixez le néon clignotant dehors. Une ombre franchit le seuil et une femme en imperméable trempé entre, ses yeux implorants alors qu\'elle sort un ornement en forme d\'étoile et murmure au sujet d\'une héritière disparue. L\'odeur de l\'asphalte humide et du vieux papier emplit la pièce pendant que vous pesez le danger dans ses mots. La ville bourdonne de secrets et vous sentez que ce n\'est que le début.',
        choices: {
          'story-8273910265-c1': {
            text: 'Accepter l\'affaire et se rendre sur la scène de crime',
            description: 'Le devoir appelle, même sous la pluie.',
          },
          'story-8273910265-c2': {
            text: 'Refuser et observer depuis votre fenêtre',
            description: 'Rester détaché, observer ce qui se déroule.',
          },
        },
      },
      'story-8273910265-3': {
        title: 'Surveillance Réticente',
        narration: 'Vous renvoyez la femme mais la curiosité vous ronge. À travers la vitre striée de pluie, vous repérez une silhouette qui rôde de l\'autre côté de la rue, appareil photo en main, prenant des clichés de votre bureau. La ruelle scintille sous les lampadaires, la ville respire comme une bête. Vous pouvez soit plonger dans la pluie à sa poursuite, soit garder vos distances.',
        choices: {
          'story-8273910265-c5': {
            text: 'Suivre l\'ombre dans la rue',
            description: 'Se rapprocher, risquer l\'exposition.',
          },
          'story-8273910265-c6': {
            text: 'Rester dans l\'ombre et observer',
            description: 'La patience pourrait payer.',
          },
        },
      },
      'story-8273910265-5': {
        title: 'Témoin Nerveux',
        narration: 'Un passant nerveux s\'appuie contre une fenêtre tachetée de pluie, téléphone collé à l\'oreille. Les yeux fuyants, ils serrent leur manteau plus fort alors que vous approchez. Le bourdonnement de la ville semble s\'estomper pendant que vous décidez si vous devez obtenir la vérité en douceur ou graisser les rouages avec de l\'argent.',
        choices: {
          'story-8273910265-c9': {
            text: 'Demander calmement ce qu\'ils ont vu',
            description: 'Gagner la confiance par l\'empathie.',
          },
          'story-8273910265-c10': {
            text: 'Leur glisser de l\'argent pour des réponses',
            description: 'L\'argent parle quand la peur fait taire.',
          },
        },
      },
      'story-8273910265-6': {
        title: 'Surveillance Sous la Pluie',
        narration: 'Vous vous fondez dans l\'averse, laissant le suspect vous guider à travers des ruelles baignées de néon. Chaque flaque reflète un monde fracturé. Sous votre manteau, vous sentez le poids de votre propre technologie ; un ordinateur portable bourdonne faiblement, suppliant de percer des messages cryptés. Piratez-vous leur flux de communication ou continuez-vous à les suivre en personne ?',
        choices: {
          'story-8273910265-c11': {
            text: 'Pirater leur flux de communications',
            description: 'Les secrets numériques sont souvent les plus juteux.',
          },
          'story-8273910265-c12': {
            text: 'Continuer à filer depuis l\'ombre',
            description: 'Rester sur le terrain.',
          },
        },
      },
      'story-8273910265-7': {
        title: 'Message en Rouge',
        narration: 'Dans l\'enveloppe, vous trouvez une photographie d\'un pendentif en forme d\'étoile et un message codé écrit à l\'encre rouge. Le papier est glissant sous vos doigts mouillés. Les symboles évoquent des catalogues de bibliothèque et de vieux secrets. Vous devez décider où le déchiffrer.',
        choices: {
          'story-8273910265-c13': {
            text: 'Se rendre à la bibliothèque municipale',
            description: 'Recherche dans les rayons poussiéreux.',
          },
          'story-8273910265-c14': {
            text: 'Appeler votre ami hacker',
            description: 'Décoder avec l\'aide numérique.',
          },
        },
      },
      'story-8273910265-8': {
        title: 'Rapport Médico-légal',
        narration: 'De retour dans votre propre laboratoire, des moniteurs vacillants illuminent votre visage. Vous scannez l\'enveloppe pour les empreintes et analysez l\'encre sous une lumière éblouissante. Une empreinte correspond à un intermédiaire du milieu, et une balise GPS pointe vers les quais. Vous pouvez suivre la piste numérique ou agir sur les renseignements.',
        choices: {
          'story-8273910265-c15': {
            text: 'Vérifier les empreintes dans la base de données',
            description: 'L\'information, c\'est le pouvoir.',
          },
          'story-8273910265-c16': {
            text: 'Se rendre aux quais pour les traquer',
            description: 'Confronter le suspect en personne.',
          },
        },
      },
      'story-8273910265-9': {
        title: 'Renseignements sur l\'Entrepôt',
        narration: 'Vos efforts portent leurs fruits : un aveu murmuré ou un message piraté révèle un rendez-vous dans un entrepôt abandonné tagué de graffitis. Le bâtiment se dresse comme un monument sombre contre l\'horizon. Vous pouvez faire irruption et tout risquer ou prendre le temps de planifier.',
        choices: {
          'story-8273910265-c17': {
            text: 'Infiltrer l\'entrepôt maintenant',
            description: 'Le temps est essentiel.',
          },
          'story-8273910265-c18': {
            text: 'Rassembler plus de renseignements d\'abord',
            description: 'Une approche prudente pourrait payer.',
          },
        },
      },
      'story-8273910265-10': {
        title: 'Dernier Train',
        narration: 'Le suspect se glisse dans un train de minuit et vous vous précipitez vers la gare, la vapeur sifflant des locomotives endormies. L\'obscurité enveloppe les voies alors que le dernier appel résonne dans les haut-parleurs. Vous pouvez monter dans le train maintenant ou essayer de les déjouer au prochain arrêt.',
        choices: {
          'story-8273910265-c19': {
            text: 'Sauter à bord du train',
            description: 'Rester proche de votre cible.',
          },
          'story-8273910265-c20': {
            text: 'Intercepter à la prochaine gare',
            description: 'Planifier une embuscade à l\'avance.',
          },
        },
      },
      'story-8273910265-11': {
        title: 'Piles de Secrets',
        narration: 'Des particules de poussière dansent dans les rayons de lumière pendant que vous errez dans des piles infinies de livres. L\'odeur du vieux papier vous entoure. Vous tracez des numéros de catalogue obscurs jusqu\'à ce que vos doigts se posent sur un tome décrivant un ornement en forme d\'étoile qui déverrouille des secrets dans les coffres bancaires. Testez-vous la clé ou creusez-vous plus profondément dans les archives ?',
        choices: {
          'story-8273910265-c21': {
            text: 'Aller à la banque avec l\'ornement',
            description: 'Le coffre pourrait contenir la vérité.',
          },
          'story-8273910265-c22': {
            text: 'Chercher plus loin dans les archives',
            description: 'Il pourrait y avoir plus à découvrir.',
          },
        },
      },
      'story-8273910265-13': {
        title: 'Ombres sur les Quais',
        narration: 'L\'odeur de sel et de diesel est lourde pendant que vous vous faufilez entre les caisses sur les quais. Un bateau solitaire se balance doucement contre des piliers usés, des voix murmurent au-dessus du clapotis des vagues. Restez-vous caché pour recueillir des preuves ou sortez-vous dans la lumière pour affronter le chef de gang ?',
        choices: {
          'story-8273910265-c25': {
            text: 'Recueillir des preuves discrètement',
            description: 'La patience pourrait apporter des preuves.',
          },
          'story-8273910265-c26': {
            text: 'Affronter le chef de gang',
            description: 'Forcer la situation maintenant.',
          },
        },
      },
      'story-8273910265-14': {
        title: 'Confrontation sur le Toit',
        narration: 'Le vent fouette le toit pendant que vous acculez le suspect sur fond de gratte-ciels imposants, leurs fenêtres scintillant comme des étoiles. La sueur perle sous votre col malgré le froid. Sans nulle part où fuir, votre proie regarde l\'écart entre les bâtiments. Votre prochain mouvement décidera de vos deux destins.',
        choices: {
          'story-8273910265-c27': {
            text: 'Les raisonner et négocier',
            description: 'Les mots peuvent être des armes.',
          },
          'story-8273910265-c28': {
            text: 'Les plaquer au sol',
            description: 'Utiliser la force pour finir la poursuite.',
          },
        },
      },
      'story-8273910265-15': {
        title: 'Embuscade à la Gare',
        narration: 'Le train s\'éloigne et vous vous retrouvez dans un couloir de gare désert, les lumières fluorescentes vacillant au-dessus. Des pas résonnent au loin, puis disparaissent. Votre cible s\'est glissée dans l\'obscurité. Attendez-vous qu\'ils reviennent sur leurs pas ou appelez-vous un contact qui vous doit une faveur ?',
        choices: {
          'story-8273910265-c29': {
            text: 'Attendre dans l\'ombre',
            description: 'La patience pourrait les attraper.',
          },
          'story-8273910265-c30': {
            text: 'Appeler pour une faveur',
            description: 'Utiliser votre réseau.',
          },
        },
      },
      'story-8273910265-17': {
        title: 'Jetée de Minuit',
        narration: 'Le clair de lune peint la jetée en argent tandis que les vagues lèchent ses planches usées. Une silhouette solitaire attend sous une lampe, le visage caché sous une capuche. Ils vous offrent un choix – les rejoindre et partager les profits du complot, ou refuser et exposer toute l\'opération. La confiance et la trahison flottent dans l\'air salé.',
        choices: {
          'story-8273910265-c33': {
            text: 'Accepter leur accord',
            description: 'Rejoindre le réseau de l\'ombre.',
          },
          'story-8273910265-c34': {
            text: 'Refuser et tout exposer',
            description: 'Sonner l\'alarme.',
          },
        },
      },
      'story-8273910265-18': {
        title: 'Effraction',
        narration: 'Avec des alliés à vos côtés, vous poussez une porte vers un long couloir sombre. Les pas résonnent pendant que vous approchez d\'une réunion en cours, les voix basses et conspiratoires. Faites-vous irruption et procédez aux arrestations ou restez-vous en retrait pour enregistrer l\'échange pour que le monde le voie ?',
        choices: {
          'story-8273910265-c35': {
            text: 'Intervenir et les arrêter',
            description: 'Les traduire en justice.',
          },
          'story-8273910265-c36': {
            text: 'Tout enregistrer pour une fuite',
            description: 'Exposer le complot publiquement.',
          },
        },
      },
      'story-8273910265-19': {
        title: 'L\'Affaire Échappe',
        narration: 'Vous vous précipitez dans la mêlée et le gang se disperse comme des ombres dans la pluie. Un coup de feu retentit, un moteur de bateau rugit, et le cerveau disparaît dans la nuit. Des semaines plus tard, vous fixez votre tableau de liège, des fils de laine reliant des photos qui ne mènent nulle part. L\'affaire refroidit et la ville oublie, mais vous ne le pouvez pas.',
        choices: {
        },
      },
      'story-8273910265-21': {
        title: 'Pacte avec le Diable',
        narration: 'La tentation l\'emporte. Vous empoche les dossiers et entrez dans le cercle intérieur. L\'échelle que vous grimpez peut être dorée, mais chaque barreau est glissant de culpabilité. La richesse et les connexions affluent vers vous, mais dans les moments tranquilles, vous vous demandez ce qu\'est devenue la jeune femme dont l\'ornement a déverrouillé votre fortune.',
        choices: {
        },
      },
      'story-8273910265-22': {
        title: 'Lanceur d\'Alerte',
        narration: 'Vous choisissez l\'exposition plutôt que la sécurité. Caché derrière des moniteurs lumineux, vous compilez enregistrements et documents et les divulguez à la presse. Les gros titres explosent, les personnalités puissantes tombent, et la ville convulse. Vous devenez à la fois héros et cible, disparaissant dans les ombres numériques tout en sachant que vous avez fait ce qu\'il fallait.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'Sombras da Estrela Desaparecida',
    description: 'Quando uma herdeira da tecnologia desaparece e apenas um ornamento críptico permanece, o detetive particular Sam Mercer é arrastado para um labirinto de becos encharcados de chuva, bibliotecas secretas e docas sombrias. Cada pista levanta novas questões e cada decisão o puxa mais profundamente para uma conspiração que alcança o topo da cidade.',
    author: 'Daphne Sawyer',
    nodes: {
      'story-8273910265-1': {
        title: 'Cliente da Meia-Noite',
        narration: 'A chuva bate contra a janela do seu escritório enquanto você olha fixamente para o néon piscando lá fora. Uma sombra cruza o limiar e uma mulher com sobretudo encharcado entra, seus olhos suplicantes enquanto ela produz um ornamento em forma de estrela e sussurra sobre uma herdeira desaparecida. O cheiro de pavimento úmido e papel velho enche a sala enquanto você pondera o perigo em suas palavras. A cidade zumbe com segredos e você sente que isso é apenas o começo.',
        choices: {
          'story-8273910265-c1': {
            text: 'Aceitar o caso e ir para a cena do crime',
            description: 'O dever chama, mesmo na chuva.',
          },
          'story-8273910265-c2': {
            text: 'Recusar e observar da sua janela',
            description: 'Manter-se distante, observar o que se desenrola.',
          },
        },
      },
      'story-8273910265-3': {
        title: 'Vigilância Relutante',
        narration: 'Você manda a mulher embora, mas a curiosidade o corrói. Através do vidro riscado pela chuva, você avista uma figura espreitando do outro lado da rua, câmera na mão, tirando fotos do seu escritório. O beco brilha sob os postes de luz, a cidade respirando como uma besta. Você pode mergulhar na chuva atrás dele ou manter sua distância.',
        choices: {
          'story-8273910265-c5': {
            text: 'Seguir a sombra pela rua abaixo',
            description: 'Aproximar-se, arriscar exposição.',
          },
          'story-8273910265-c6': {
            text: 'Ficar nas sombras e observar',
            description: 'A paciência pode compensar.',
          },
        },
      },
      'story-8273910265-5': {
        title: 'Testemunha Nervosa',
        narration: 'Um transeunte nervoso se apoia contra uma janela salpicada de chuva, telefone pressionado contra o ouvido. Olhos inquietos, eles apertam o casaco mais forte enquanto você se aproxima. O zumbido da cidade parece desaparecer enquanto você decide se deve arrancar a verdade gentilmente ou lubrificar as engrenagens com dinheiro.',
        choices: {
          'story-8273910265-c9': {
            text: 'Perguntar calmamente o que eles viram',
            description: 'Ganhar confiança através da empatia.',
          },
          'story-8273910265-c10': {
            text: 'Dar-lhes algum dinheiro por respostas',
            description: 'O dinheiro fala quando o medo cala.',
          },
        },
      },
      'story-8273910265-6': {
        title: 'Observando na Chuva',
        narration: 'Você se funde com o aguaceiro, deixando o suspeito guiá-lo por becos banhados em néon. Cada poça reflete um mundo fraturado. Sob seu casaco, você sente o peso de sua própria tecnologia; um laptop zumbe fracamente, implorando para decifrar mensagens criptografadas. Você hackeia o fluxo de comunicações deles ou continua seguindo-os pessoalmente?',
        choices: {
          'story-8273910265-c11': {
            text: 'Hackear o fluxo de comunicações deles',
            description: 'Segredos digitais são geralmente os mais suculentos.',
          },
          'story-8273910265-c12': {
            text: 'Continuar seguindo das sombras',
            description: 'Permanecer no terreno.',
          },
        },
      },
      'story-8273910265-7': {
        title: 'Mensagem em Vermelho',
        narration: 'Dentro do envelope você encontra uma fotografia de um pingente em forma de estrela e uma mensagem codificada escrita em tinta vermelha. O papel parece escorregadio sob seus dedos molhados. Os símbolos sugerem catálogos de bibliotecas e segredos antigos. Você deve decidir onde decifrá-lo.',
        choices: {
          'story-8273910265-c13': {
            text: 'Ir para a biblioteca municipal',
            description: 'Pesquisa em prateleiras empoeiradas.',
          },
          'story-8273910265-c14': {
            text: 'Ligar para seu amigo hacker',
            description: 'Decodificar com ajuda digital.',
          },
        },
      },
      'story-8273910265-8': {
        title: 'Relatório Forense',
        narration: 'De volta ao seu próprio laboratório, monitores piscando iluminam seu rosto. Você escaneia o envelope em busca de impressões digitais e analisa a tinta sob luz ofuscante. Uma impressão digital corresponde a um intermediário do submundo, e uma etiqueta GPS aponta para as docas. Você pode seguir o rastro de dados ou agir com base na informação.',
        choices: {
          'story-8273910265-c15': {
            text: 'Verificar impressões digitais no banco de dados',
            description: 'Informação é poder.',
          },
          'story-8273910265-c16': {
            text: 'Ir para as docas para rastreá-los',
            description: 'Confrontar o suspeito pessoalmente.',
          },
        },
      },
      'story-8273910265-9': {
        title: 'Inteligência do Armazém',
        narration: 'Seus esforços compensam: uma confissão sussurrada ou mensagem hackeada revela um encontro em um armazém abandonado marcado com grafite. O edifício se ergue como um monumento escuro contra o horizonte. Você pode invadir e arriscar tudo ou levar tempo para planejar.',
        choices: {
          'story-8273910265-c17': {
            text: 'Infiltrar o armazém agora',
            description: 'O tempo é essencial.',
          },
          'story-8273910265-c18': {
            text: 'Reunir mais inteligência primeiro',
            description: 'Uma abordagem cautelosa pode compensar.',
          },
        },
      },
      'story-8273910265-10': {
        title: 'Último Trem',
        narration: 'O suspeito escorrega para um trem da meia-noite e você se apressa para o pátio, vapor sibilando de locomotivas adormecidas. A escuridão envolve os trilhos enquanto a última chamada ecoa pelos alto-falantes. Você pode embarcar no trem agora ou tentar enganá-los na próxima parada.',
        choices: {
          'story-8273910265-c19': {
            text: 'Pular a bordo do trem',
            description: 'Ficar perto do seu alvo.',
          },
          'story-8273910265-c20': {
            text: 'Interceptar na próxima estação',
            description: 'Planejar uma emboscada com antecedência.',
          },
        },
      },
      'story-8273910265-11': {
        title: 'Pilhas de Segredos',
        narration: 'Partículas de poeira dançam em feixes de luz enquanto você vaga por pilhas infinitas de livros. O cheiro de papel velho o cerca. Você rastreia números de catálogo obscuros até que seus dedos pousam em um tomo descrevendo um ornamento em forma de estrela que desbloqueia segredos em cofres bancários. Você testa a chave ou cava mais fundo nos arquivos?',
        choices: {
          'story-8273910265-c21': {
            text: 'Ir ao banco com o ornamento',
            description: 'O cofre pode conter a verdade.',
          },
          'story-8273910265-c22': {
            text: 'Pesquisar mais nos arquivos',
            description: 'Pode haver mais para descobrir.',
          },
        },
      },
      'story-8273910265-13': {
        title: 'Sombras nas Docas',
        narration: 'O cheiro de sal e diesel paira pesado enquanto você se arrasta entre caixotes nas docas. Um barco solitário balança suavemente contra estacas desgastadas, vozes murmurando acima do respingo de ondas. Você permanece escondido para reunir evidências ou sai para a luz para confrontar o líder da gangue?',
        choices: {
          'story-8273910265-c25': {
            text: 'Reunir evidências silenciosamente',
            description: 'A paciência pode trazer prova.',
          },
          'story-8273910265-c26': {
            text: 'Confrontar o líder da gangue',
            description: 'Forçar a questão agora.',
          },
        },
      },
      'story-8273910265-14': {
        title: 'Confronto no Telhado',
        narration: 'O vento açoita o telhado enquanto você encurrala o suspeito contra um pano de fundo de arranha-céus imponentes, suas janelas cintilando como estrelas. O suor se acumula sob seu colarinho apesar do frio. Sem lugar para fugir, sua presa olha para o vão entre os edifícios. Seu próximo movimento decidirá o destino de ambos.',
        choices: {
          'story-8273910265-c27': {
            text: 'Convencê-los e negociar',
            description: 'Palavras podem ser armas.',
          },
          'story-8273910265-c28': {
            text: 'Derrubá-los ao chão',
            description: 'Usar força para terminar a perseguição.',
          },
        },
      },
      'story-8273910265-15': {
        title: 'Emboscada na Estação',
        narration: 'O trem se afasta e você se encontra em um corredor de estação deserto, luzes fluorescentes piscando acima. Passos ecoam à distância, depois desaparecem. Seu alvo escorregou para a escuridão. Você espera que eles voltem ou liga para um contato que lhe deve um favor?',
        choices: {
          'story-8273910265-c29': {
            text: 'Esperar nas sombras',
            description: 'A paciência pode pegá-los.',
          },
          'story-8273910265-c30': {
            text: 'Cobrar um favor',
            description: 'Alavancar sua rede.',
          },
        },
      },
      'story-8273910265-17': {
        title: 'Píer da Meia-Noite',
        narration: 'O luar pinta o píer de prata enquanto as ondas lambem suas tábuas desgastadas. Uma figura solitária espera sob uma lâmpada, rosto escondido sob um capuz. Eles lhe oferecem uma escolha – junte-se a eles e compartilhe os lucros da conspiração, ou recuse e exponha toda a operação. Confiança e traição pairam no ar salgado.',
        choices: {
          'story-8273910265-c33': {
            text: 'Aceitar o acordo deles',
            description: 'Juntar-se à rede de sombras.',
          },
          'story-8273910265-c34': {
            text: 'Recusar e expor tudo',
            description: 'Soprar o apito.',
          },
        },
      },
      'story-8273910265-18': {
        title: 'Invasão',
        narration: 'Com aliados ao seu lado, você empurra uma porta para um longo corredor escuro. Passos ecoam enquanto você se aproxima de uma reunião em andamento, vozes baixas e conspiratórias. Você invade e faz prisões ou fica para trás para gravar a troca para o mundo ver?',
        choices: {
          'story-8273910265-c35': {
            text: 'Intervir e prendê-los',
            description: 'Levá-los à justiça.',
          },
          'story-8273910265-c36': {
            text: 'Gravar tudo para um vazamento',
            description: 'Expor a conspiração publicamente.',
          },
        },
      },
      'story-8273910265-19': {
        title: 'O Caso Escapa',
        narration: 'Você se lança na refrega e a gangue se dispersa como sombras na chuva. Um tiro ressoa, um motor de barco ruge, e o mentor desaparece na noite. Semanas depois você olha fixamente para seu quadro de cortiça, fios de lã conectando fotos que não levam a lugar nenhum. O caso esfria e a cidade esquece, mas você não consegue.',
        choices: {
        },
      },
      'story-8273910265-21': {
        title: 'Acordo com o Diabo',
        narration: 'A tentação vence. Você embolsa os arquivos e entra no círculo interno. A escada que você sobe pode ser dourada, mas cada degrau está escorregadio de culpa. Riqueza e conexões fluem para você, mas em momentos tranquilos você se pergunta o que aconteceu com a jovem mulher cujo ornamento desbloqueou sua fortuna.',
        choices: {
        },
      },
      'story-8273910265-22': {
        title: 'Denunciante',
        narration: 'Você escolhe exposição em vez de segurança. Escondido atrás de monitores brilhantes, você compila gravações e documentos e os vaza para a imprensa. Manchetes explodem, figuras poderosas caem, e a cidade convulsiona. Você se torna tanto herói quanto alvo, desaparecendo em sombras digitais sabendo que fez a coisa certa.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '消えた星の影',
    description: 'テック企業の相続人が姿を消し、謎めいた装飾品だけが残されたとき、私立探偵サム・マーサーは雨に濡れた路地、秘密の図書館、そして影の落ちる埠頭の迷宮へと引き込まれる。すべての手がかりは新たな疑問を生み、すべての決断が彼を街の頂点にまで達する陰謀の奥深くへと引きずり込んでいく。',
    author: 'ダフネ・ソーヤー',
    nodes: {
      'story-8273910265-1': {
        title: '真夜中の依頼人',
        narration: '雨があなたの事務所の窓を叩く中、外で点滅するネオンを見つめている。影が敷居を横切り、ずぶ濡れのトレンチコートを着た女性が入ってくる。彼女は懇願するような目で星型の装飾品を取り出し、行方不明の相続人について囁く。湿ったアスファルトと古い紙の匂いが部屋を満たし、あなたは彼女の言葉に潜む危険を考える。街は秘密で満ちており、これは始まりに過ぎないと感じる。',
        choices: {
          'story-8273910265-c1': {
            text: '事件を引き受けて現場に向かう',
            description: '雨の中でも、義務が呼んでいる。',
          },
          'story-8273910265-c2': {
            text: '断って窓から様子を見る',
            description: '距離を保ち、展開を観察する。',
          },
        },
      },
      'story-8273910265-3': {
        title: '気の進まない監視',
        narration: '女性を追い返したが、好奇心があなたを蝕む。雨の筋が走るガラス越しに、通りの向こう側で潜んでいる人影を見つける。カメラを手に、あなたの事務所の写真を撮っている。路地は街灯の下で輝き、街は獣のように呼吸している。雨の中を彼の後を追うか、距離を保つか、どちらかだ。',
        choices: {
          'story-8273910265-c5': {
            text: '影を追って通りを下る',
            description: '近づき、暴露のリスクを冒す。',
          },
          'story-8273910265-c6': {
            text: '影に留まり観察する',
            description: '忍耐が報われるかもしれない。',
          },
        },
      },
      'story-8273910265-5': {
        title: '神経質な目撃者',
        narration: '神経質な通行人が雨の斑点のある窓にもたれかかり、電話を耳に押し当てている。目を逸らしながら、あなたが近づくとコートをきつく引き寄せる。あなたが優しく真実を引き出すか、現金で車輪に油を差すかを決めると、街の喧騒が消えていくようだ。',
        choices: {
          'story-8273910265-c9': {
            text: '冷静に何を見たか尋ねる',
            description: '共感を通じて信頼を得る。',
          },
          'story-8273910265-c10': {
            text: '答えのために金を渡す',
            description: '恐怖が黙るとき、金が語る。',
          },
        },
      },
      'story-8273910265-6': {
        title: '雨の中の監視',
        narration: '土砂降りに溶け込み、容疑者がネオンに浸された路地を通ってあなたを導くのを許す。すべての水たまりが砕けた世界を映し出す。コートの下で、自分の技術の重さを感じる。ラップトップがかすかに鳴り、暗号化されたメッセージを破るよう懇願している。彼らの通信をハッキングするか、それとも直接追跡を続けるか？',
        choices: {
          'story-8273910265-c11': {
            text: '通信フィードをハッキングする',
            description: 'デジタルの秘密は最もジューシーなことが多い。',
          },
          'story-8273910265-c12': {
            text: '影から追跡を続ける',
            description: '現場に留まる。',
          },
        },
      },
      'story-8273910265-7': {
        title: '赤いメッセージ',
        narration: '封筒の中に、星型のペンダントの写真と赤いインクで書かれた暗号化されたメッセージを見つける。濡れた指の下で紙が滑りやすく感じる。記号は図書館のカタログと古い秘密を示唆している。どこで解読するか決めなければならない。',
        choices: {
          'story-8273910265-c13': {
            text: '市立図書館に向かう',
            description: '埃っぽい書架での研究。',
          },
          'story-8273910265-c14': {
            text: 'ハッカーの友人に電話する',
            description: 'デジタルの助けで解読する。',
          },
        },
      },
      'story-8273910265-8': {
        title: '法医学報告書',
        narration: '自分のラボに戻ると、点滅するモニターがあなたの顔を照らす。封筒を指紋のためにスキャンし、眩しい光の下でインクを分析する。指紋は裏社会の仲介者と一致し、GPSタグは埠頭を指している。データの痕跡を追うか、情報に基づいて行動するか、どちらかだ。',
        choices: {
          'story-8273910265-c15': {
            text: 'データベースで指紋を照合する',
            description: '情報は力だ。',
          },
          'story-8273910265-c16': {
            text: '埠頭に向かって追跡する',
            description: '容疑者と直接対決する。',
          },
        },
      },
      'story-8273910265-9': {
        title: '倉庫の情報',
        narration: 'あなたの努力が実を結ぶ。囁かれた告白またはハッキングされたメッセージが、落書きでタグ付けされた廃倉庫でのランデブーを明らかにする。建物はスカイラインに対して暗い記念碑のようにそびえ立っている。突入してすべてを賭けるか、計画を立てる時間を取るか、どちらかだ。',
        choices: {
          'story-8273910265-c17': {
            text: '今すぐ倉庫に潜入する',
            description: '時間が決定的だ。',
          },
          'story-8273910265-c18': {
            text: 'まずもっと情報を集める',
            description: '慎重なアプローチが報われるかもしれない。',
          },
        },
      },
      'story-8273910265-10': {
        title: '最終列車',
        narration: '容疑者が真夜中の列車に滑り込み、あなたは操車場に急ぐ。眠っている機関車から蒸気がシューシュー音を立てる。最終呼び出しがスピーカーを通して響く中、闇が線路を包む。今列車に乗るか、次の停車駅で出し抜くか、どちらかだ。',
        choices: {
          'story-8273910265-c19': {
            text: '列車に飛び乗る',
            description: 'ターゲットの近くに留まる。',
          },
          'story-8273910265-c20': {
            text: '次の駅で迎撃する',
            description: '事前に待ち伏せを計画する。',
          },
        },
      },
      'story-8273910265-11': {
        title: '秘密の山',
        narration: '光の筋の中で埃の粒子が踊る中、あなたは無限の本の山をさまよう。古い紙の匂いがあなたを包む。不明瞭なカタログ番号を辿り、銀行の金庫の秘密を解き明かす星型の装飾品を説明する本に指が止まる。鍵を試すか、アーカイブをもっと深く掘るか？',
        choices: {
          'story-8273910265-c21': {
            text: '装飾品を持って銀行に行く',
            description: '金庫が真実を持っているかもしれない。',
          },
          'story-8273910265-c22': {
            text: 'アーカイブをさらに探す',
            description: 'もっと発見すべきことがあるかもしれない。',
          },
        },
      },
      'story-8273910265-13': {
        title: '埠頭の影',
        narration: '埠頭の箱の間を忍び寄る間、塩とディーゼルの匂いが重くのしかかる。風化した杭に対して孤独なボートが静かに揺れ、波のしぶきの上で声がささやいている。証拠を集めるために隠れたままでいるか、ギャングのリーダーと対決するために光の中に出るか？',
        choices: {
          'story-8273910265-c25': {
            text: '静かに証拠を集める',
            description: '忍耐が証拠をもたらすかもしれない。',
          },
          'story-8273910265-c26': {
            text: 'ギャングのリーダーと対決する',
            description: '今すぐ問題を強制する。',
          },
        },
      },
      'story-8273910265-14': {
        title: '屋上での対決',
        narration: '風が屋上を吹き抜ける中、そびえ立つ超高層ビルを背景に容疑者を追い詰める。その窓は星のように輝いている。寒さにもかかわらず、襟の下に汗が玉を作る。逃げ場がなく、獲物は建物の間のギャップを見つめる。あなたの次の動きが両者の運命を決める。',
        choices: {
          'story-8273910265-c27': {
            text: '説得して交渉する',
            description: '言葉は武器になり得る。',
          },
          'story-8273910265-c28': {
            text: '地面にタックルする',
            description: '力を使って追跡を終わらせる。',
          },
        },
      },
      'story-8273910265-15': {
        title: '駅での待ち伏せ',
        narration: '列車が去り、あなたは蛍光灯が頭上でちらつく人けのない駅の廊下にいる。足音が遠くで響き、そして消える。ターゲットは闇に滑り込んだ。彼らが引き返すのを待つか、恩のある連絡先に電話するか？',
        choices: {
          'story-8273910265-c29': {
            text: '影の中で待つ',
            description: '忍耐が彼らを捕まえるかもしれない。',
          },
          'story-8273910265-c30': {
            text: '恩を呼び出す',
            description: 'ネットワークを活用する。',
          },
        },
      },
      'story-8273910265-17': {
        title: '真夜中の桟橋',
        narration: '月光が桟橋を銀色に染める中、波がその風化した板を舐める。ランプの下で孤独な人影が待っている。フードの下に顔が隠されている。彼らはあなたに選択を提供する。彼らと一緒に陰謀の利益を共有するか、拒否してすべての作戦を暴露するか。塩辛い空気の中に信頼と裏切りが漂う。',
        choices: {
          'story-8273910265-c33': {
            text: '彼らの取引を受け入れる',
            description: '影のネットワークに参加する。',
          },
          'story-8273910265-c34': {
            text: '拒否してすべてを暴露する',
            description: '警笛を鳴らす。',
          },
        },
      },
      'story-8273910265-18': {
        title: '侵入',
        narration: '味方を味方に、長く暗い廊下へのドアを押し開ける。進行中の会議に近づくにつれて足音が響く。声は低く陰謀めいている。突入して逮捕するか、世界が見るために交換を記録するために待機するか？',
        choices: {
          'story-8273910265-c35': {
            text: '介入して逮捕する',
            description: '正義の前に連れて行く。',
          },
          'story-8273910265-c36': {
            text: 'リークのためにすべてを記録する',
            description: '陰謀を公に暴露する。',
          },
        },
      },
      'story-8273910265-19': {
        title: '事件は逃げる',
        narration: '戦闘に突入すると、ギャングは雨の中の影のように散らばる。銃声が鳴り響き、ボートのエンジンが轟き、首謀者は夜に消える。数週間後、あなたはコルクボードを見つめる。毛糸の糸がどこにも通じない写真をつないでいる。事件は冷え込み、街は忘れるが、あなたにはできない。',
        choices: {
        },
      },
      'story-8273910265-21': {
        title: '悪魔との契約',
        narration: '誘惑が勝つ。ファイルをポケットに入れ、内部サークルに足を踏み入れる。登る梯子は金メッキかもしれないが、すべての段が罪悪感で滑りやすい。富とつながりがあなたに流れ込むが、静かな瞬間に、装飾品があなたの財産を解き明かした若い女性はどうなったのかと思う。',
        choices: {
        },
      },
      'story-8273910265-22': {
        title: '内部告発者',
        narration: '安全よりも暴露を選ぶ。輝くモニターの後ろに隠れて、録音と文書をまとめ、報道機関にリークする。見出しが爆発し、強力な人物が倒れ、街が痙攣する。あなたは英雄でもあり標的でもあり、正しいことをしたと知りながらデジタルの影に消える。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '消失之星的阴影',
    description: '当一位科技女继承人消失，只留下一个神秘的装饰品时，私家侦探萨姆·默瑟被卷入了一个由雨水浸透的小巷、秘密图书馆和阴暗码头组成的迷宫。每一条线索都会引发新的问题，每一个决定都将他更深地拉进一个延伸到城市顶端的阴谋之中。',
    author: '达芙妮·索耶',
    nodes: {
      'story-8273910265-1': {
        title: '午夜委托人',
        narration: '雨水敲打着你办公室的窗户，你凝视着外面闪烁的霓虹灯。一个影子跨过门槛，一个穿着湿透风衣的女人走了进来，她眼神恳求地拿出一个星形装饰品，低声诉说着一位失踪的女继承人。潮湿的路面和旧纸的气味充满了房间，你权衡着她话语中的危险。这座城市充满了秘密的嗡嗡声，你感觉这只是开始。',
        choices: {
          'story-8273910265-c1': {
            text: '接受案件并前往犯罪现场',
            description: '即使在雨中，职责也在召唤。',
          },
          'story-8273910265-c2': {
            text: '拒绝并从窗口观察',
            description: '保持距离，观察事态发展。',
          },
        },
      },
      'story-8273910265-3': {
        title: '不情愿的监视',
        narration: '你打发女人离开，但好奇心啃噬着你。透过被雨水划过的玻璃，你看到一个人影潜伏在街对面，手里拿着相机，正在拍摄你的办公室。小巷在街灯下闪闪发光，城市像野兽一样呼吸。你可以冲进雨中追赶他，也可以保持距离。',
        choices: {
          'story-8273910265-c5': {
            text: '沿着街道追踪那个影子',
            description: '靠近，冒着暴露的风险。',
          },
          'story-8273910265-c6': {
            text: '留在阴影中观察',
            description: '耐心可能会有回报。',
          },
        },
      },
      'story-8273910265-5': {
        title: '紧张的证人',
        narration: '一个紧张的路人靠在雨点斑驳的窗户上，电话贴在耳边。眼神闪躲，当你靠近时，他们把外套裹得更紧。城市的嗡嗡声似乎消退了，你在决定是温和地引出真相还是用现金润滑车轮。',
        choices: {
          'story-8273910265-c9': {
            text: '平静地询问他们看到了什么',
            description: '通过同理心赢得信任。',
          },
          'story-8273910265-c10': {
            text: '给他们一些钱换取答案',
            description: '当恐惧沉默时，金钱会说话。',
          },
        },
      },
      'story-8273910265-6': {
        title: '雨中监视',
        narration: '你融入倾盆大雨，让嫌疑人带领你穿过霓虹浸染的小巷。每个水坑都映出一个破碎的世界。在外套下，你感受到自己技术装备的重量；一台笔记本电脑轻声嗡嗡作响，恳求破解加密消息。你是黑进他们的通信系统还是继续亲自跟踪？',
        choices: {
          'story-8273910265-c11': {
            text: '黑进他们的通信系统',
            description: '数字秘密往往最丰富多汁。',
          },
          'story-8273910265-c12': {
            text: '继续从阴影中跟踪',
            description: '保持在现场。',
          },
        },
      },
      'story-8273910265-7': {
        title: '红色信息',
        narration: '在信封里，你发现了一张星形吊坠的照片和一条用红墨水写的加密信息。纸张在你湿润的手指下感觉很滑。这些符号暗示着图书馆目录和古老的秘密。你必须决定在哪里解密它。',
        choices: {
          'story-8273910265-c13': {
            text: '前往市立图书馆',
            description: '在尘封的书架中研究。',
          },
          'story-8273910265-c14': {
            text: '打电话给你的黑客朋友',
            description: '用数字帮助解码。',
          },
        },
      },
      'story-8273910265-8': {
        title: '法医报告',
        narration: '回到自己的实验室，闪烁的显示器照亮了你的脸。你扫描信封寻找指纹，在刺眼的光线下分析墨水。一个指纹与地下世界的中间人匹配，GPS标签指向码头。你可以追踪数据线索或根据情报行动。',
        choices: {
          'story-8273910265-c15': {
            text: '在数据库中比对指纹',
            description: '信息就是力量。',
          },
          'story-8273910265-c16': {
            text: '前往码头追踪他们',
            description: '亲自对质嫌疑人。',
          },
        },
      },
      'story-8273910265-9': {
        title: '仓库情报',
        narration: '你的努力得到了回报：一个低声的坦白或被黑的消息透露了在一个标有涂鸦的废弃仓库的会面。建筑物像一座黑暗的纪念碑矗立在天际线上。你可以冲进去冒一切风险，或者花时间计划。',
        choices: {
          'story-8273910265-c17': {
            text: '现在渗透仓库',
            description: '时间至关重要。',
          },
          'story-8273910265-c18': {
            text: '先收集更多情报',
            description: '谨慎的方法可能会有回报。',
          },
        },
      },
      'story-8273910265-10': {
        title: '最后一班火车',
        narration: '嫌疑人溜进午夜火车，你急忙赶往车场，蒸汽从沉睡的机车中嘶嘶作响。最后的呼叫声在扬声器中回荡时，黑暗笼罩着轨道。你可以现在登上火车，或者试图在下一站智胜他们。',
        choices: {
          'story-8273910265-c19': {
            text: '跳上火车',
            description: '靠近你的目标。',
          },
          'story-8273910265-c20': {
            text: '在下一站拦截',
            description: '提前计划伏击。',
          },
        },
      },
      'story-8273910265-11': {
        title: '秘密堆积',
        narration: '灰尘颗粒在光束中跳舞，你游荡在无尽的书堆中。旧纸的气味环绕着你。你追踪模糊的目录号码，直到你的手指落在一本描述星形装饰品的书上，它可以解锁银行保险库中的秘密。你是测试钥匙还是在档案中挖得更深？',
        choices: {
          'story-8273910265-c21': {
            text: '带着装饰品去银行',
            description: '保险库可能藏有真相。',
          },
          'story-8273910265-c22': {
            text: '在档案中进一步搜索',
            description: '可能有更多可发现的东西。',
          },
        },
      },
      'story-8273910265-13': {
        title: '码头的阴影',
        narration: '当你在码头的箱子之间爬行时，盐和柴油的气味沉重地悬挂着。一艘孤独的船在风化的桩柱旁轻轻摇晃，声音在波浪的拍打声上低语。你是隐藏起来收集证据，还是走进光明对抗帮派头目？',
        choices: {
          'story-8273910265-c25': {
            text: '悄悄收集证据',
            description: '耐心可能会带来证据。',
          },
          'story-8273910265-c26': {
            text: '对抗帮派头目',
            description: '现在强制解决问题。',
          },
        },
      },
      'story-8273910265-14': {
        title: '屋顶对决',
        narration: '风吹过屋顶，你在高耸的摩天大楼背景下将嫌疑人逼入困境，窗户像星星一样闪烁。尽管天气寒冷，汗水在你的衣领下聚集。无处可逃，你的猎物盯着建筑物之间的间隙。你的下一步将决定你们俩的命运。',
        choices: {
          'story-8273910265-c27': {
            text: '说服他们并谈判',
            description: '话语可以成为武器。',
          },
          'story-8273910265-c28': {
            text: '将他们摔倒在地',
            description: '使用武力结束追逐。',
          },
        },
      },
      'story-8273910265-15': {
        title: '车站伏击',
        narration: '火车驶离，你发现自己在一个荒凉的车站走廊里，头顶的荧光灯闪烁着。脚步声在远处回荡，然后消失。你的目标已经滑入黑暗。你是等待他们折返，还是打电话给欠你人情的联系人？',
        choices: {
          'story-8273910265-c29': {
            text: '在阴影中等待',
            description: '耐心可能会抓住他们。',
          },
          'story-8273910265-c30': {
            text: '请求帮忙',
            description: '利用你的网络。',
          },
        },
      },
      'story-8273910265-17': {
        title: '午夜码头',
        narration: '月光将码头涂成银色，波浪舔着它风化的木板。一个孤独的身影在灯下等待，脸藏在兜帽下。他们给你一个选择——加入他们并分享阴谋的利润，或拒绝并揭露整个行动。信任和背叛悬浮在咸咸的空气中。',
        choices: {
          'story-8273910265-c33': {
            text: '接受他们的交易',
            description: '加入影子网络。',
          },
          'story-8273910265-c34': {
            text: '拒绝并揭露一切',
            description: '吹哨。',
          },
        },
      },
      'story-8273910265-18': {
        title: '闯入',
        narration: '盟友在你身边，你推开一扇通往长长黑暗走廊的门。当你接近正在进行的会议时，脚步声回荡，声音低沉而阴谋。你是冲进去逮捕他们，还是留下来记录交流让世界看到？',
        choices: {
          'story-8273910265-c35': {
            text: '介入并逮捕他们',
            description: '将他们绳之以法。',
          },
          'story-8273910265-c36': {
            text: '记录一切以便泄露',
            description: '公开揭露阴谋。',
          },
        },
      },
      'story-8273910265-19': {
        title: '案件溜走',
        narration: '你冲进混战，帮派像雨中的影子一样四散。一声枪响，船引擎怒吼，主谋消失在夜色中。几周后，你盯着软木板，毛线线连接着不通向任何地方的照片。案件冷却，城市遗忘，但你不能。',
        choices: {
        },
      },
      'story-8273910265-21': {
        title: '与魔鬼交易',
        narration: '诱惑获胜。你把文件装进口袋，进入内圈。你攀登的梯子可能是镀金的，但每一级都因内疚而滑腻。财富和关系流向你，但在安静的时刻，你想知道那个装饰品解锁了你财富的年轻女人怎么样了。',
        choices: {
        },
      },
      'story-8273910265-22': {
        title: '告密者',
        narration: '你选择曝光而不是安全。隐藏在发光的显示器后面，你汇编录音和文件并泄露给媒体。头条新闻爆炸，权势人物倒下，城市抽搐。你既是英雄又是目标，消失在数字阴影中，知道你做了正确的事。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '사라진 별의 그림자',
    description: '기술 재벌 상속녀가 사라지고 수수께끼의 장식품만 남았을 때, 사립탐정 샘 머서는 비에 젖은 골목길, 비밀 도서관, 그리고 그림자진 부두의 미로 속으로 끌려들어간다. 모든 단서는 새로운 질문을 낳고, 모든 결정은 그를 도시의 정점까지 닿는 음모의 깊은 곳으로 끌어당긴다.',
    author: '대프니 소여',
    nodes: {
      'story-8273910265-1': {
        title: '한밤의 의뢰인',
        narration: '빗방울이 사무실 창문을 두드리는 동안 당신은 밖의 깜빡이는 네온사인을 응시한다. 그림자가 문턱을 넘고 흠뻑 젖은 트렌치코트를 입은 여자가 들어온다. 그녀는 간청하는 눈으로 별 모양의 장식품을 꺼내며 실종된 상속녀에 대해 속삭인다. 젖은 아스팔트와 오래된 종이 냄새가 방을 채우고, 당신은 그녀의 말 속에 담긴 위험을 가늠한다. 도시는 비밀로 가득 차 윙윙거리고, 당신은 이것이 시작에 불과하다는 것을 느낀다.',
        choices: {
          'story-8273910265-c1': {
            text: '사건을 맡고 범죄 현장으로 가다',
            description: '비 속에서도 의무가 부른다.',
          },
          'story-8273910265-c2': {
            text: '거절하고 창문에서 지켜보다',
            description: '거리를 유지하고 전개되는 것을 관찰한다.',
          },
        },
      },
      'story-8273910265-3': {
        title: '마지못한 감시',
        narration: '여자를 돌려보냈지만 호기심이 당신을 갉아먹는다. 빗줄기가 그어진 유리창 너머로 길 건너편에서 숨어있는 인물을 발견한다. 카메라를 손에 들고 당신의 사무실 사진을 찍고 있다. 골목은 가로등 아래에서 반짝이고, 도시는 짐승처럼 숨을 쉰다. 빗속으로 뛰어들어 그를 쫓을 수도 있고 거리를 유지할 수도 있다.',
        choices: {
          'story-8273910265-c5': {
            text: '그림자를 따라 거리를 내려가다',
            description: '가까이 다가가고, 노출의 위험을 감수한다.',
          },
          'story-8273910265-c6': {
            text: '그림자 속에 머물며 관찰하다',
            description: '인내심이 보상을 받을 수도 있다.',
          },
        },
      },
      'story-8273910265-5': {
        title: '긴장한 목격자',
        narration: '신경질적인 행인이 빗방울이 튄 창문에 기대어 전화기를 귀에 대고 있다. 눈을 피하며, 당신이 다가가자 코트를 더 꽉 당긴다. 진실을 부드럽게 끌어낼지 아니면 현금으로 바퀴에 기름을 칠지 결정하는 동안 도시의 소음이 사라지는 것 같다.',
        choices: {
          'story-8273910265-c9': {
            text: '차분하게 무엇을 봤는지 묻다',
            description: '공감을 통해 신뢰를 얻는다.',
          },
          'story-8273910265-c10': {
            text: '대답을 위해 돈을 건네다',
            description: '두려움이 침묵할 때, 돈이 말한다.',
          },
        },
      },
      'story-8273910265-6': {
        title: '빗속의 감시',
        narration: '폭우 속으로 녹아들며, 용의자가 네온에 물든 골목을 통해 당신을 이끌도록 놔둔다. 모든 웅덩이가 부서진 세계를 반사한다. 코트 아래에서 자신의 기술의 무게를 느낀다. 노트북이 희미하게 윙윙거리며 암호화된 메시지를 뚫어달라고 애원한다. 그들의 통신을 해킹할 것인가, 아니면 계속 직접 미행할 것인가?',
        choices: {
          'story-8273910265-c11': {
            text: '그들의 통신 피드를 해킹하다',
            description: '디지털 비밀이 가장 흥미진진한 경우가 많다.',
          },
          'story-8273910265-c12': {
            text: '그림자에서 계속 미행하다',
            description: '현장에 머문다.',
          },
        },
      },
      'story-8273910265-7': {
        title: '붉은 메시지',
        narration: '봉투 안에서 별 모양의 펜던트 사진과 빨간 잉크로 쓰인 암호화된 메시지를 발견한다. 젖은 손가락 아래에서 종이가 미끄럽게 느껴진다. 기호들은 도서관 목록과 오래된 비밀을 암시한다. 어디서 해독할지 결정해야 한다.',
        choices: {
          'story-8273910265-c13': {
            text: '시립 도서관으로 가다',
            description: '먼지 쌓인 서가에서 연구한다.',
          },
          'story-8273910265-c14': {
            text: '해커 친구에게 전화하다',
            description: '디지털 도움으로 해독한다.',
          },
        },
      },
      'story-8273910265-8': {
        title: '법의학 보고서',
        narration: '자신의 실험실로 돌아와 깜빡이는 모니터가 당신의 얼굴을 비춘다. 지문을 찾기 위해 봉투를 스캔하고 눈부신 빛 아래에서 잉크를 분석한다. 지문은 암흑가 중개인과 일치하고, GPS 태그는 부두를 가리킨다. 데이터 흔적을 따르거나 정보에 따라 행동할 수 있다.',
        choices: {
          'story-8273910265-c15': {
            text: '데이터베이스에서 지문을 대조하다',
            description: '정보는 힘이다.',
          },
          'story-8273910265-c16': {
            text: '부두로 가서 추적하다',
            description: '용의자와 직접 대면한다.',
          },
        },
      },
      'story-8273910265-9': {
        title: '창고 정보',
        narration: '당신의 노력이 결실을 맺는다. 속삭인 자백이나 해킹한 메시지가 낙서로 표시된 버려진 창고에서의 만남을 드러낸다. 건물은 스카이라인을 배경으로 어두운 기념비처럼 우뚝 솟아있다. 돌진해서 모든 것을 걸거나 계획을 세울 시간을 가질 수 있다.',
        choices: {
          'story-8273910265-c17': {
            text: '지금 창고에 침투하다',
            description: '시간이 핵심이다.',
          },
          'story-8273910265-c18': {
            text: '먼저 더 많은 정보를 수집하다',
            description: '신중한 접근이 보상받을 수 있다.',
          },
        },
      },
      'story-8273910265-10': {
        title: '마지막 열차',
        narration: '용의자가 자정 열차에 몰래 타고, 당신은 조차장으로 서두른다. 잠든 기관차에서 증기가 쉿쉿 소리를 낸다. 최종 호출이 스피커를 통해 울려퍼지는 동안 어둠이 선로를 감싼다. 지금 열차에 탈 수도 있고 다음 정거장에서 그들을 속일 수도 있다.',
        choices: {
          'story-8273910265-c19': {
            text: '열차에 뛰어오르다',
            description: '목표물에 가까이 머문다.',
          },
          'story-8273910265-c20': {
            text: '다음 역에서 가로막다',
            description: '미리 매복을 계획한다.',
          },
        },
      },
      'story-8273910265-11': {
        title: '비밀의 더미',
        narration: '빛줄기 속에서 먼지 입자들이 춤추는 동안 당신은 끝없는 책더미를 헤매고 다닌다. 오래된 종이 냄새가 당신을 둘러싼다. 모호한 목록 번호를 추적하다가 은행 금고의 비밀을 여는 별 모양 장식품을 설명하는 책에 손가락이 닿는다. 열쇠를 시험할 것인가, 아니면 기록 보관소를 더 깊이 파헤칠 것인가?',
        choices: {
          'story-8273910265-c21': {
            text: '장식품을 가지고 은행으로 가다',
            description: '금고가 진실을 담고 있을 수 있다.',
          },
          'story-8273910265-c22': {
            text: '기록 보관소를 더 찾다',
            description: '발견할 것이 더 있을 수 있다.',
          },
        },
      },
      'story-8273910265-13': {
        title: '부두의 그림자',
        narration: '부두의 상자들 사이를 기어가는 동안 소금과 디젤 냄새가 무겁게 드리운다. 외로운 보트가 낡은 말뚝에 부드럽게 흔들리고, 파도 소리 위로 목소리가 속삭인다. 증거를 수집하기 위해 숨어있을 것인가, 아니면 갱단 두목과 대면하기 위해 빛 속으로 나올 것인가?',
        choices: {
          'story-8273910265-c25': {
            text: '조용히 증거를 수집하다',
            description: '인내심이 증거를 가져올 수 있다.',
          },
          'story-8273910265-c26': {
            text: '갱단 두목과 대면하다',
            description: '지금 문제를 강제한다.',
          },
        },
      },
      'story-8273910265-14': {
        title: '옥상 대결',
        narration: '바람이 옥상을 휘몰아치는 동안 당신은 우뚝 솟은 고층 빌딩을 배경으로 용의자를 궁지에 몬다. 창문들이 별처럼 반짝인다. 추위에도 불구하고 칼라 아래에서 땀이 맺힌다. 도망갈 곳이 없어진 먹잇감은 건물 사이의 틈을 바라본다. 당신의 다음 행동이 두 사람 모두의 운명을 결정할 것이다.',
        choices: {
          'story-8273910265-c27': {
            text: '설득하고 협상하다',
            description: '말이 무기가 될 수 있다.',
          },
          'story-8273910265-c28': {
            text: '땅으로 태클하다',
            description: '힘을 사용해 추적을 끝낸다.',
          },
        },
      },
      'story-8273910265-15': {
        title: '역에서의 매복',
        narration: '열차가 떠나고 당신은 형광등이 머리 위에서 깜빡이는 황량한 역 복도에 있다. 발소리가 멀리서 울리다가 사라진다. 목표물은 어둠 속으로 미끄러졌다. 그들이 되돌아오기를 기다릴 것인가, 아니면 빚진 연락처에게 전화할 것인가?',
        choices: {
          'story-8273910265-c29': {
            text: '그림자 속에서 기다리다',
            description: '인내심이 그들을 잡을 수 있다.',
          },
          'story-8273910265-c30': {
            text: '호의를 요청하다',
            description: '네트워크를 활용한다.',
          },
        },
      },
      'story-8273910265-17': {
        title: '한밤의 부두',
        narration: '달빛이 부두를 은빛으로 칠하는 동안 파도가 낡은 판자를 핥는다. 외로운 인물이 램프 아래에서 기다리고, 후드 아래에 얼굴을 숨기고 있다. 그들은 당신에게 선택을 제안한다. 그들과 합류하여 음모의 이익을 공유하거나, 거절하고 모든 작전을 폭로하거나. 신뢰와 배신이 짠 공기에 떠 있다.',
        choices: {
          'story-8273910265-c33': {
            text: '그들의 거래를 수락하다',
            description: '그림자 네트워크에 합류한다.',
          },
          'story-8273910265-c34': {
            text: '거절하고 모든 것을 폭로하다',
            description: '휘슬을 불다.',
          },
        },
      },
      'story-8273910265-18': {
        title: '침입',
        narration: '동료들과 함께 길고 어두운 복도로 향하는 문을 민다. 진행 중인 회의에 접근하면서 발소리가 울려 퍼진다. 목소리는 낮고 음모적이다. 돌진해서 체포할 것인가, 아니면 세상이 보도록 교환을 녹화하기 위해 뒤에 머물 것인가?',
        choices: {
          'story-8273910265-c35': {
            text: '개입하여 체포하다',
            description: '정의 앞에 데려온다.',
          },
          'story-8273910265-c36': {
            text: '유출을 위해 모든 것을 녹화하다',
            description: '음모를 공개적으로 폭로한다.',
          },
        },
      },
      'story-8273910265-19': {
        title: '사건은 빠져나가다',
        narration: '전투에 돌진하자 갱단은 빗속의 그림자처럼 흩어진다. 총소리가 울리고, 보트 엔진이 포효하고, 주모자는 밤 속으로 사라진다. 몇 주 후 당신은 코르크 보드를 응시한다. 털실 가닥이 아무 데도 이어지지 않는 사진들을 연결한다. 사건은 냉각되고 도시는 잊지만, 당신은 잊을 수 없다.',
        choices: {
        },
      },
      'story-8273910265-21': {
        title: '악마와의 거래',
        narration: '유혹이 승리한다. 파일을 주머니에 넣고 내부 서클로 들어간다. 오르는 사다리는 도금되어 있을지 모르지만, 모든 발판은 죄책감으로 미끄럽다. 부와 인맥이 당신에게 흘러들지만, 조용한 순간에 당신은 장식품이 당신의 재산을 풀어준 젊은 여성이 어떻게 되었는지 궁금해한다.',
        choices: {
        },
      },
      'story-8273910265-22': {
        title: '내부 고발자',
        narration: '안전보다 폭로를 선택한다. 빛나는 모니터 뒤에 숨어 녹음과 문서를 편집하여 언론에 유출한다. 헤드라인이 폭발하고, 권력자들이 쓰러지고, 도시가 경련한다. 당신은 영웅이자 표적이 되어, 옳은 일을 했다는 것을 알면서 디지털 그림자 속으로 사라진다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
