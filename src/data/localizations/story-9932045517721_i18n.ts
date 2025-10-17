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

export const story_9932045517721StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Rootweaver’s Pact',
    description: 'Letters carved by sap bleed through bark: the world-tree is unwell. You can hear its pulse if you press your ear to the grain—and if you dare, you can answer. Will you heal with memory, bargain with fae, or cut what must be cut?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9932045517721-1': {
        title: 'Whispering Roots',
        narration: 'Moss cups the roots where market lanterns once hung; now they flicker with uncertain breath. Pressing your ear to bark, you hear a tide-slow pulse and faint words shaped by sap: “Help me remember.” The air tastes of iron rain and green thunder.',
        choices: {
          'story-9932045517721-c1': {
            text: 'Head to the root market.',
            description: 'Find gossip and guides.',
          },
          'story-9932045517721-c2': {
            text: 'Seek the veil spring.',
            description: 'Water keeps old truths.',
          },
        },
      },
      'story-9932045517721-2': {
        title: 'Market Under-Tree',
        narration: 'Vendors braid vines into charms and stack mushrooms that glow like moons. A blind archivist in a barkcloak smells your hands and nods, recognizing sap-scent. “Memory threads snap,” she says. “You will need a vow or a price.”',
        choices: {
          'story-9932045517721-c3': {
            text: 'Consult the archivist’s tomes.',
            description: 'Knowledge before action.',
          },
          'story-9932045517721-c4': {
            text: 'Buy glow-spores for guidance.',
            description: 'Light that listens.',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'Veil Spring',
        narration: 'The spring exhales fog that curls into half-formed letters above the pool. Fallen coins are furred with green and hum when you hum back, matching pitch. Footprints circle the bank and vanish into a hollow gate of roots.',
        choices: {
          'story-9932045517721-c5': {
            text: 'Enter the hollow gate.',
            description: 'Follow the footprints.',
          },
          'story-9932045517721-c6': {
            text: 'Harvest a vial of veilwater.',
            description: 'A tool for later.',
          },
        },
      },
      'story-9932045517721-4': {
        title: 'Bark Archivist',
        narration: 'Pages stitched with rootfiber rustle under your fingers. Margins whisper when the archivist breathes on them: “Vows bind memory. Pacts borrow it.” A ring of layered wood sits in a velvet hollow, its grain spiraled with words too small to read.',
        choices: {
          'story-9932045517721-c7': {
            text: 'Take the vow ring.',
            description: 'Bind yourself to the tree.',
          },
          'story-9932045517721-c8': {
            text: 'Copy the root map.',
            description: 'Paths to the heartwood.',
          },
        },
      },
      'story-9932045517721-5': {
        title: 'Glow Spores',
        narration: 'The spores cup your breath, then blink awake like tiny eyes. Held in darkness, they bloom into a map of possible steps—the brighter the dot, the kinder the outcome. In their dim, you see two strong options pulsing.',
        choices: {
          'story-9932045517721-c9': {
            text: 'Follow the spores to the root map vault.',
            description: 'Let light lead.',
          },
          'story-9932045517721-c10': {
            text: 'Attempt the spore-trial alone.',
            description: 'Prove worth without oath.',
          },
        },
      },
      'story-9932045517721-6': {
        title: 'Hollow Gate',
        narration: 'Roots arch like ribs; the air smells of penny rain and bruised mint. Scratched into bark at shoulder height: tally marks ending with a heart. A far-off ringing answers your step as if a bridge were plucked like a harp.',
        choices: {
          'story-9932045517721-c11': {
            text: 'Undertake the spore-trial.',
            description: 'Let the tree test you.',
          },
          'story-9932045517721-c12': {
            text: 'Pay the thorn bridge toll.',
            description: 'Deal with the fae now.',
          },
        },
      },
      'story-9932045517721-7': {
        title: 'Vow Ring',
        narration: 'Wood cool as river shade slides over your finger and tightens until comfortable. A line of text unspools in your mind—not a command, a promise. The tree hums approval, low and relieved.',
        choices: {
          'story-9932045517721-c13': {
            text: 'Follow a memory thread inward.',
            description: 'Walk old steps made new.',
          },
          'story-9932045517721-c14': {
            text: 'Carve a bark totem for safe travel.',
            description: 'A small guardian.',
          },
        },
      },
      'story-9932045517721-8': {
        title: 'Root Map Vault',
        narration: 'A door without hinges opens when you breathe the right note. Inside, maps show rings like years in a stump, each ring a district of paths. One path—the “pith door”—is marked with a warning sigil shaped like a sleepy eye.',
        choices: {
          'story-9932045517721-c15': {
            text: 'Take the memory-thread route.',
            description: 'Safer, slower.',
          },
          'story-9932045517721-c16': {
            text: 'Try the pith door anyway.',
            description: 'Fast, risky.',
          },
        },
      },
      'story-9932045517721-9': {
        title: 'Spore Trial',
        narration: 'Spores crowd your lips with glow and truth. When you speak your name, three other names arrive—selves that might have been, each offering a tool. The tree waits to see which you borrow.',
        choices: {
          'story-9932045517721-c17': {
            text: 'Borrow the patient cartographer’s thread.',
            description: 'Map first, mend next.',
          },
          'story-9932045517721-c18': {
            text: 'Borrow the bold herbalist’s blade.',
            description: 'Cut rot, spare song.',
          },
        },
      },
      'story-9932045517721-10': {
        title: 'Fae Toll',
        narration: 'A bridge of living thorns hums like bees. A fae collector in a dandelion crown smiles too widely: “One memory, please. We’ll return it when you’re someone else.” The wind refuses to help.',
        choices: {
          'story-9932045517721-c19': {
            text: 'Pay with a happy memory.',
            description: 'Lose sweetness; gain passage.',
          },
          'story-9932045517721-c20': {
            text: 'Bargain a renovation instead.',
            description: 'Offer to mend the bridge.',
          },
        },
      },
      'story-9932045517721-11': {
        title: 'Memory Thread',
        narration: 'A silver thread tugs from your rib to a tunnel speckled with glow. Each step sings a chord you recognize from childhood lullabies. The thread splits: one way pulses steady as a heartbeat; the other jitters like lightning.',
        choices: {
          'story-9932045517721-c21': {
            text: 'Follow the steady pulse.',
            description: 'Toward the pulse chamber.',
          },
          'story-9932045517721-c22': {
            text: 'Chase the lightning path.',
            description: 'Risk for speed.',
          },
        },
      },
      'story-9932045517721-12': {
        title: 'Bark Totem',
        narration: 'You whittle a small guardian with ears like leaves and a mouth full of promises. When you blow on it, the totem tastes your breath and points, paws steady. It won’t fight, but it will warn.',
        choices: {
          'story-9932045517721-c23': {
            text: 'Proceed to the pulse chamber.',
            description: 'Where the beat falters.',
          },
          'story-9932045517721-c24': {
            text: 'Slip into the dream burrow.',
            description: 'Learn by sleeping.',
          },
        },
      },
      'story-9932045517721-13': {
        title: 'Pith Door',
        narration: 'The door opens like a blinking eye. The air inside tastes of old sugar and rain rot. Voices mutter in rings, each a year you did and didn’t live.',
        choices: {
          'story-9932045517721-c25': {
            text: 'Aim for the heartwood.',
            description: 'Past the rings.',
          },
          'story-9932045517721-c26': {
            text: 'Detour through the thorn court.',
            description: 'Pay the debt differently.',
          },
        },
      },
      'story-9932045517721-14': {
        title: 'Dream Burrow',
        narration: 'Sleep comes quick as moss. In the dream, the tree shows you a split root—one half slick with dark, the other pale and thirsty. A deer with lantern eyes nods toward a door made of ribs.',
        choices: {
          'story-9932045517721-c27': {
            text: 'Wake and head to heartwood.',
            description: 'Dreams are maps.',
          },
          'story-9932045517721-c28': {
            text: 'Seek the pulse chamber instead.',
            description: 'Stabilize before surgery.',
          },
        },
      },
      'story-9932045517721-15': {
        title: 'Thorn Court',
        narration: 'Thorn sprites lounge like cats, grooming barbs. The dandelion-crowned collector applauds your audacity. “A pact then: mend three broken barbs, and we forgive one memory-debt.”',
        choices: {
          'story-9932045517721-c29': {
            text: 'Mend the barbs with sap glue.',
            description: 'Work buys grace.',
          },
          'story-9932045517721-c30': {
            text: 'Offer a future favor.',
            description: 'Owe the fae later.',
          },
        },
      },
      'story-9932045517721-16': {
        title: 'Pulse Chamber',
        narration: 'Walls throb with slow light; resin beads like tears. You set the vow ring against the grain and feel your heartbeat braid with the tree’s. The rhythm steadies—enough to risk a deeper cut.',
        choices: {
          'story-9932045517721-c31': {
            text: 'Open a path to the heartwood.',
            description: 'Now, or not at all.',
          },
          'story-9932045517721-c32': {
            text: 'Call the fae to witness.',
            description: 'Share blame, share power.',
          },
        },
      },
      'story-9932045517721-17': {
        title: 'Heartwood',
        narration: 'The center is not empty; it’s full of quiet. Threads of light run like veins through honeyed wood. A dark knot pulses irregularly, blooming a bitter fragrance with each beat.',
        choices: {
          'story-9932045517721-c33': {
            text: 'Weave memory threads around the knot.',
            description: 'Heal by remembering.',
          },
          'story-9932045517721-c34': {
            text: 'Cut the knot with the herbalist’s blade.',
            description: 'Hurt to help.',
          },
        },
      },
      'story-9932045517721-18': {
        title: 'Breach Rift',
        narration: 'The tree opens a mouth where no mouth was, showing night through day—an outside that doesn’t match. Wind tastes of coins and lullabies. Your next choice will set the debt, the cure, and the cost.',
        choices: {
          'story-9932045517721-c35': {
            text: 'Crown the rings with your vow.',
            description: 'Bind yourself as keeper.',
          },
          'story-9932045517721-c36': {
            text: 'Accept fae protection and their price.',
            description: 'A safer forest, a leash.',
          },
          'story-9932045517721-c37': {
            text: 'Divide the rot; reroute growth.',
            description: 'Bittersweet pruning.',
          },
          'story-9932045517721-c38': {
            text: 'Sever the infected root entirely.',
            description: 'Save the whole, exile the part.',
          },
        },
      },
      'story-9932045517721-19': {
        title: 'Crown of Rings',
        narration: 'Your vow twines the rings into a brighter cadence. Market lanterns learn your heartbeat and keep time with it. Children grow up thinking trees hum like that everywhere.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: 'Sharded Path',
        narration: 'You split the rot and reroute growth; one district goes fallow so the rest may sing. People move, grieve, and then build new markets where mushrooms take kindly to song. The tree breathes easier with a soft, complicated joy.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: 'Fae Ledger',
        narration: 'Thorn sprites patrol the borders and thieves vanish like pollen on wind. The forest is safer; so are your choices. Once a year, the collector taps your shoulder and takes a small memory like a tithe—never cruel, always binding.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: 'Rootless Exile',
        narration: 'You sever the black root with a cry that shivers birds from miles of branches. The tree survives and forgets the ache; the exiled root crawls toward a far horizon, seeking a name you no longer answer to. You sleep lighter, dreaming of footsteps that never quite catch up.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Договор Плетельщика Корней',
    description: 'Буквы, вырезанные соком, просачиваются сквозь кору: мировое древо болеет. Ты можешь услышать его пульс, если приложишь ухо к волокнам — и если осмелишься, можешь ответить. Исцелишь ли ты памятью, заключишь ли сделку с феями или отрежешь то, что должно быть отрезано?',
    author: 'Студия ХроноКанвас',
    nodes: {
      'story-9932045517721-1': {
        title: 'Шепчущие Корни',
        narration: 'Мох обволакивает корни, где когда-то висели рыночные фонари; теперь они мерцают неверным дыханием. Приложив ухо к коре, ты слышишь медленный, как прилив, пульс и слабые слова, сформированные соком: «Помоги мне вспомнить». Воздух имеет вкус железного дождя и зелёного грома.',
        choices: {
          'story-9932045517721-c1': {
            text: 'Отправиться на корневой рынок.',
            description: 'Найти сплетни и проводников.',
          },
          'story-9932045517721-c2': {
            text: 'Найти родник завесы.',
            description: 'Вода хранит старые истины.',
          },
        },
      },
      'story-9932045517721-2': {
        title: 'Рынок Под Деревом',
        narration: 'Торговцы плетут лианы в амулеты и складывают грибы, светящиеся, как луны. Слепая архивариус в плаще из коры нюхает твои руки и кивает, узнавая запах сока. «Нити памяти рвутся», — говорит она. «Тебе понадобится обет или цена».',
        choices: {
          'story-9932045517721-c3': {
            text: 'Изучить фолианты архивариус.',
            description: 'Знание перед действием.',
          },
          'story-9932045517721-c4': {
            text: 'Купить светящиеся споры для ориентира.',
            description: 'Свет, который слушает.',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'Родник Завесы',
        narration: 'Родник выдыхает туман, который закручивается полуформированными буквами над водоёмом. Упавшие монеты покрыты зелёным мхом и гудят, когда ты подпеваешь им, подбирая тон. Следы кружат по берегу и исчезают в полой двери из корней.',
        choices: {
          'story-9932045517721-c5': {
            text: 'Войти в полую дверь.',
            description: 'Пойти по следам.',
          },
          'story-9932045517721-c6': {
            text: 'Собрать флакон воды завесы.',
            description: 'Инструмент на потом.',
          },
        },
      },
      'story-9932045517721-4': {
        title: 'Коровая Архивариус',
        narration: 'Страницы, сшитые корневым волокном, шелестят под твоими пальцами. Поля шепчут, когда архивариус дышит на них: «Обеты связывают память. Договоры одалживают её». Кольцо из слоистой древесины лежит в бархатной впадине, его волокна закручены словами, слишком мелкими для чтения.',
        choices: {
          'story-9932045517721-c7': {
            text: 'Взять кольцо обета.',
            description: 'Связать себя с деревом.',
          },
          'story-9932045517721-c8': {
            text: 'Скопировать карту корней.',
            description: 'Пути к сердцевине.',
          },
        },
      },
      'story-9932045517721-5': {
        title: 'Светящиеся Споры',
        narration: 'Споры улавливают твоё дыхание, затем мигают, просыпаясь, как крошечные глаза. Удерживаемые в темноте, они расцветают в карту возможных шагов — чем ярче точка, тем добрее исход. В их сумраке ты видишь две сильные пульсирующие возможности.',
        choices: {
          'story-9932045517721-c9': {
            text: 'Следовать за спорами к хранилищу карты корней.',
            description: 'Пусть свет ведёт.',
          },
          'story-9932045517721-c10': {
            text: 'Попробовать споровое испытание в одиночку.',
            description: 'Доказать ценность без клятвы.',
          },
        },
      },
      'story-9932045517721-6': {
        title: 'Полая Дверь',
        narration: 'Корни изгибаются, как рёбра; воздух пахнет грошовым дождём и мятой битой. На коре на уровне плеча выцарапано: засечки, заканчивающиеся сердцем. Далёкий звон отвечает на твой шаг, словно мост защипали, как арфу.',
        choices: {
          'story-9932045517721-c11': {
            text: 'Пройти споровое испытание.',
            description: 'Позволить дереву испытать тебя.',
          },
          'story-9932045517721-c12': {
            text: 'Заплатить пошлину терновому мосту.',
            description: 'Иметь дело с феями сейчас.',
          },
        },
      },
      'story-9932045517721-7': {
        title: 'Кольцо Обета',
        narration: 'Древесина, прохладная, как речная тень, скользит по твоему пальцу и сжимается, пока не станет удобной. Строка текста разворачивается в твоём сознании — не приказ, а обещание. Дерево гудит одобрительно, низко и с облегчением.',
        choices: {
          'story-9932045517721-c13': {
            text: 'Следовать нити памяти вглубь.',
            description: 'Пройти старыми шагами, ставшими новыми.',
          },
          'story-9932045517721-c14': {
            text: 'Вырезать коровый тотем для безопасного путешествия.',
            description: 'Маленький страж.',
          },
        },
      },
      'story-9932045517721-8': {
        title: 'Хранилище Карты Корней',
        narration: 'Дверь без петель открывается, когда ты выдыхаешь правильную ноту. Внутри карты показывают кольца, как годы на пне, каждое кольцо — район путей. Один путь — «сердцевинная дверь» — помечен предупреждающим знаком в форме сонного глаза.',
        choices: {
          'story-9932045517721-c15': {
            text: 'Выбрать путь нити памяти.',
            description: 'Безопаснее, медленнее.',
          },
          'story-9932045517721-c16': {
            text: 'Всё равно попробовать сердцевинную дверь.',
            description: 'Быстро, рискованно.',
          },
        },
      },
      'story-9932045517721-9': {
        title: 'Споровое Испытание',
        narration: 'Споры наполняют твои губы светом и истиной. Когда ты произносишь своё имя, приходят три других имени — личности, которыми ты мог бы быть, каждая предлагает инструмент. Дерево ждёт, чтобы увидеть, какой ты возьмёшь взаймы.',
        choices: {
          'story-9932045517721-c17': {
            text: 'Взять взаймы нить терпеливого картографа.',
            description: 'Сначала карта, потом починка.',
          },
          'story-9932045517721-c18': {
            text: 'Взять взаймы клинок смелого травника.',
            description: 'Вырезать гниль, сохранить песнь.',
          },
        },
      },
      'story-9932045517721-10': {
        title: 'Феина Пошлина',
        narration: 'Мост из живых шипов гудит, как пчёлы. Фейный коллекционер в одуванчиковой короне улыбается слишком широко: «Одно воспоминание, пожалуйста. Мы вернём его, когда ты станешь кем-то другим». Ветер отказывается помогать.',
        choices: {
          'story-9932045517721-c19': {
            text: 'Заплатить счастливым воспоминанием.',
            description: 'Потерять сладость; получить проход.',
          },
          'story-9932045517721-c20': {
            text: 'Вместо этого договориться о ремонте.',
            description: 'Предложить починить мост.',
          },
        },
      },
      'story-9932045517721-11': {
        title: 'Нить Памяти',
        narration: 'Серебряная нить тянется от твоего ребра к туннелю, усеянному светом. Каждый шаг поёт аккорд, который ты узнаёшь из детских колыбельных. Нить раздваивается: один путь пульсирует ровно, как сердцебиение; другой дрожит, как молния.',
        choices: {
          'story-9932045517721-c21': {
            text: 'Следовать за ровным пульсом.',
            description: 'К пульсовой камере.',
          },
          'story-9932045517721-c22': {
            text: 'Погнаться за молниеносным путём.',
            description: 'Риск ради скорости.',
          },
        },
      },
      'story-9932045517721-12': {
        title: 'Коровый Тотем',
        narration: 'Ты вырезаешь маленького стража с ушами, как листья, и ртом, полным обещаний. Когда ты дуешь на него, тотем пробует твоё дыхание и указывает, лапы твёрдые. Он не будет сражаться, но предупредит.',
        choices: {
          'story-9932045517721-c23': {
            text: 'Двигаться к пульсовой камере.',
            description: 'Где биение спотыкается.',
          },
          'story-9932045517721-c24': {
            text: 'Проскользнуть в сонную нору.',
            description: 'Учиться, засыпая.',
          },
        },
      },
      'story-9932045517721-13': {
        title: 'Сердцевинная Дверь',
        narration: 'Дверь открывается, как моргающий глаз. Воздух внутри имеет вкус старого сахара и дождевой гнили. Голоса бормочут в кольцах, каждое — год, который ты прожил и не прожил.',
        choices: {
          'story-9932045517721-c25': {
            text: 'Стремиться к сердцевине.',
            description: 'Мимо колец.',
          },
          'story-9932045517721-c26': {
            text: 'Отклониться через терновый двор.',
            description: 'Заплатить долг по-другому.',
          },
        },
      },
      'story-9932045517721-14': {
        title: 'Сонная Нора',
        narration: 'Сон приходит быстро, как мох. Во сне дерево показывает тебе расщеплённый корень — одна половина скользкая от тьмы, другая бледная и жаждущая. Олень с фонарными глазами кивает в сторону двери из рёбер.',
        choices: {
          'story-9932045517721-c27': {
            text: 'Проснуться и направиться к сердцевине.',
            description: 'Сны — это карты.',
          },
          'story-9932045517721-c28': {
            text: 'Вместо этого найти пульсовую камеру.',
            description: 'Стабилизировать перед операцией.',
          },
        },
      },
      'story-9932045517721-15': {
        title: 'Терновый Двор',
        narration: 'Терновые духи нежатся, как кошки, ухаживая за шипами. Коллекционер в одуванчиковой короне аплодирует твоей смелости. «Тогда договор: почини три сломанных шипа, и мы простим один долг памяти».',
        choices: {
          'story-9932045517721-c29': {
            text: 'Починить шипы соковым клеем.',
            description: 'Работа покупает милость.',
          },
          'story-9932045517721-c30': {
            text: 'Предложить будущую услугу.',
            description: 'Быть должным феям позже.',
          },
        },
      },
      'story-9932045517721-16': {
        title: 'Пульсовая Камера',
        narration: 'Стены пульсируют медленным светом; смола капает, как слёзы. Ты прикладываешь кольцо обета к волокнам и чувствуешь, как твоё сердцебиение переплетается с сердцебиением дерева. Ритм стабилизируется — достаточно, чтобы рискнуть более глубоким надрезом.',
        choices: {
          'story-9932045517721-c31': {
            text: 'Открыть путь к сердцевине.',
            description: 'Сейчас или никогда.',
          },
          'story-9932045517721-c32': {
            text: 'Призвать фей свидетелями.',
            description: 'Разделить вину, разделить силу.',
          },
        },
      },
      'story-9932045517721-17': {
        title: 'Сердцевина',
        narration: 'Центр не пуст; он полон тишины. Нити света бегут, как вены, сквозь медовую древесину. Тёмный узел пульсирует неравномерно, источая горький аромат с каждым ударом.',
        choices: {
          'story-9932045517721-c33': {
            text: 'Сплести нити памяти вокруг узла.',
            description: 'Исцелить воспоминанием.',
          },
          'story-9932045517721-c34': {
            text: 'Вырезать узел клинком травника.',
            description: 'Причинить боль, чтобы помочь.',
          },
        },
      },
      'story-9932045517721-18': {
        title: 'Пролом Разрыва',
        narration: 'Дерево открывает рот там, где рта не было, показывая ночь сквозь день — внешнее, которое не совпадает. Ветер имеет вкус монет и колыбельных. Твой следующий выбор установит долг, лечение и цену.',
        choices: {
          'story-9932045517721-c35': {
            text: 'Короновать кольца своим обетом.',
            description: 'Связать себя как хранителя.',
          },
          'story-9932045517721-c36': {
            text: 'Принять защиту фей и их цену.',
            description: 'Безопаснее лес, поводок.',
          },
          'story-9932045517721-c37': {
            text: 'Разделить гниль; перенаправить рост.',
            description: 'Горько-сладкая обрезка.',
          },
          'story-9932045517721-c38': {
            text: 'Отрезать заражённый корень полностью.',
            description: 'Спасти целое, изгнать часть.',
          },
        },
      },
      'story-9932045517721-19': {
        title: 'Корона Колец',
        narration: 'Твой обет переплетает кольца в более яркую каденцию. Рыночные фонари учат твоё сердцебиение и держат с ним время. Дети вырастают, думая, что деревья везде так гудят.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: 'Расколотый Путь',
        narration: 'Ты делишь гниль и перенаправляешь рост; один район оставляешь под паром, чтобы остальные могли петь. Люди переезжают, скорбят, а затем строят новые рынки, где грибы благосклонно откликаются на песни. Дерево дышит легче с мягкой, сложной радостью.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: 'Феин Гроссбух',
        narration: 'Терновые духи патрулируют границы, и воры исчезают, как пыльца на ветру. Лес безопаснее; твои выборы тоже. Раз в год коллекционер касается твоего плеча и берёт маленькое воспоминание, как десятину — никогда жестоко, всегда обязывающе.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: 'Безкорневое Изгнание',
        narration: 'Ты отрезаешь чёрный корень с криком, который сотрясает птиц с миль ветвей. Дерево выживает и забывает боль; изгнанный корень ползёт к далёкому горизонту, ища имя, на которое ты больше не отзываешься. Ты спишь легче, видя во сне шаги, которые никогда полностью не догоняют.',
        choices: {
        },
      },
    },
  },

  // Español
  es: {
    title: 'El Pacto del Tejedor de Raíces',
    description: 'Letras talladas por savia sangran a través de la corteza: el árbol del mundo está enfermo. Puedes escuchar su pulso si presionas tu oído contra la veta, y si te atreves, puedes responder. ¿Sanarás con memoria, negociarás con hadas, o cortarás lo que debe ser cortado?',
    author: 'Estudio ChronoCanvas',
    nodes: {
      'story-9932045517721-1': {
        title: 'Raíces Susurrantes',
        narration: 'El musgo acuna las raíces donde antes colgaban faroles del mercado; ahora parpadean con aliento incierto. Al presionar tu oído contra la corteza, escuchas un pulso lento como la marea y palabras tenues formadas por savia: "Ayúdame a recordar". El aire sabe a lluvia de hierro y trueno verde.',
        choices: {
          'story-9932045517721-c1': {
            text: 'Dirígete al mercado de raíces.',
            description: 'Encuentra chismes y guías.',
          },
          'story-9932045517721-c2': {
            text: 'Busca el manantial del velo.',
            description: 'El agua guarda verdades antiguas.',
          },
        },
      },
      'story-9932045517721-2': {
        title: 'Mercado Bajo el Árbol',
        narration: 'Los vendedores trenzan enredaderas en amuletos y apilan hongos que brillan como lunas. Una archivista ciega con capa de corteza huele tus manos y asiente, reconociendo el olor a savia. "Los hilos de memoria se rompen", dice. "Necesitarás un voto o un precio".',
        choices: {
          'story-9932045517721-c3': {
            text: 'Consulta los tomos de la archivista.',
            description: 'Conocimiento antes de acción.',
          },
          'story-9932045517721-c4': {
            text: 'Compra esporas luminosas para guía.',
            description: 'Luz que escucha.',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'Manantial del Velo',
        narration: 'El manantial exhala niebla que se enrosca en letras medio formadas sobre el estanque. Las monedas caídas están cubiertas de verde y tararean cuando tú tarareas de vuelta, igualando el tono. Huellas rodean la orilla y desaparecen en una puerta hueca de raíces.',
        choices: {
          'story-9932045517721-c5': {
            text: 'Entra por la puerta hueca.',
            description: 'Sigue las huellas.',
          },
          'story-9932045517721-c6': {
            text: 'Recoge un frasco de agua del velo.',
            description: 'Una herramienta para después.',
          },
        },
      },
      'story-9932045517721-4': {
        title: 'Archivista de Corteza',
        narration: 'Páginas cosidas con fibra de raíz susurran bajo tus dedos. Los márgenes susurran cuando la archivista sopla sobre ellos: "Los votos atan memoria. Los pactos la prestan". Un anillo de madera en capas descansa en un hueco de terciopelo, su veta espiral con palabras demasiado pequeñas para leer.',
        choices: {
          'story-9932045517721-c7': {
            text: 'Toma el anillo de voto.',
            description: 'Átate al árbol.',
          },
          'story-9932045517721-c8': {
            text: 'Copia el mapa de raíces.',
            description: 'Caminos al corazón de madera.',
          },
        },
      },
      'story-9932045517721-5': {
        title: 'Esporas Luminosas',
        narration: 'Las esporas capturan tu aliento, luego parpadean despiertas como ojos diminutos. Sostenidas en la oscuridad, florecen en un mapa de pasos posibles: cuanto más brillante el punto, más amable el resultado. En su penumbra, ves dos opciones fuertes pulsando.',
        choices: {
          'story-9932045517721-c9': {
            text: 'Sigue las esporas a la bóveda del mapa de raíces.',
            description: 'Deja que la luz guíe.',
          },
          'story-9932045517721-c10': {
            text: 'Intenta la prueba de esporas solo.',
            description: 'Demuestra valor sin juramento.',
          },
        },
      },
      'story-9932045517721-6': {
        title: 'Puerta Hueca',
        narration: 'Las raíces se arquean como costillas; el aire huele a lluvia de centavos y menta magullada. Grabado en la corteza a la altura del hombro: marcas de conteo que terminan con un corazón. Un repique lejano responde a tu paso como si un puente fuera pulsado como un arpa.',
        choices: {
          'story-9932045517721-c11': {
            text: 'Emprende la prueba de esporas.',
            description: 'Deja que el árbol te pruebe.',
          },
          'story-9932045517721-c12': {
            text: 'Paga el peaje del puente de espinas.',
            description: 'Trata con las hadas ahora.',
          },
        },
      },
      'story-9932045517721-7': {
        title: 'Anillo de Voto',
        narration: 'Madera fresca como sombra de río se desliza sobre tu dedo y se ajusta hasta estar cómoda. Una línea de texto se despliega en tu mente, no una orden, una promesa. El árbol tararea aprobación, bajo y aliviado.',
        choices: {
          'story-9932045517721-c13': {
            text: 'Sigue un hilo de memoria hacia dentro.',
            description: 'Camina pasos antiguos hechos nuevos.',
          },
          'story-9932045517721-c14': {
            text: 'Talla un tótem de corteza para viaje seguro.',
            description: 'Un pequeño guardián.',
          },
        },
      },
      'story-9932045517721-8': {
        title: 'Bóveda del Mapa de Raíces',
        narration: 'Una puerta sin bisagras se abre cuando respiras la nota correcta. Adentro, los mapas muestran anillos como años en un tocón, cada anillo un distrito de caminos. Un camino, la "puerta de médula", está marcado con un sigilo de advertencia con forma de ojo somnoliento.',
        choices: {
          'story-9932045517721-c15': {
            text: 'Toma la ruta del hilo de memoria.',
            description: 'Más segura, más lenta.',
          },
          'story-9932045517721-c16': {
            text: 'Prueba la puerta de médula de todos modos.',
            description: 'Rápida, arriesgada.',
          },
        },
      },
      'story-9932045517721-9': {
        title: 'Prueba de Esporas',
        narration: 'Las esporas llenan tus labios con brillo y verdad. Cuando pronuncias tu nombre, llegan tres nombres más: yos que podrían haber sido, cada uno ofreciendo una herramienta. El árbol espera para ver cuál tomas prestada.',
        choices: {
          'story-9932045517721-c17': {
            text: 'Toma prestado el hilo del cartógrafo paciente.',
            description: 'Primero mapea, luego repara.',
          },
          'story-9932045517721-c18': {
            text: 'Toma prestada la cuchilla del herbolario audaz.',
            description: 'Corta la podredumbre, salva el canto.',
          },
        },
      },
      'story-9932045517721-10': {
        title: 'Peaje de Hada',
        narration: 'Un puente de espinas vivientes zumba como abejas. Un coleccionista de hadas con corona de diente de león sonríe demasiado ampliamente: "Un recuerdo, por favor. Te lo devolveremos cuando seas alguien más". El viento se niega a ayudar.',
        choices: {
          'story-9932045517721-c19': {
            text: 'Paga con un recuerdo feliz.',
            description: 'Pierde dulzura; gana paso.',
          },
          'story-9932045517721-c20': {
            text: 'Negocia una renovación en su lugar.',
            description: 'Ofrece reparar el puente.',
          },
        },
      },
      'story-9932045517721-11': {
        title: 'Hilo de Memoria',
        narration: 'Un hilo plateado tira desde tu costilla hacia un túnel salpicado de brillo. Cada paso canta un acorde que reconoces de canciones de cuna de la infancia. El hilo se divide: un camino pulsa constante como un latido; el otro tiembla como un rayo.',
        choices: {
          'story-9932045517721-c21': {
            text: 'Sigue el pulso constante.',
            description: 'Hacia la cámara de pulso.',
          },
          'story-9932045517721-c22': {
            text: 'Persigue el camino del rayo.',
            description: 'Arriesga por velocidad.',
          },
        },
      },
      'story-9932045517721-12': {
        title: 'Tótem de Corteza',
        narration: 'Tallas un pequeño guardián con orejas como hojas y una boca llena de promesas. Cuando soplas sobre él, el tótem prueba tu aliento y señala, patas firmes. No luchará, pero advertirá.',
        choices: {
          'story-9932045517721-c23': {
            text: 'Procede a la cámara de pulso.',
            description: 'Donde el latido vacila.',
          },
          'story-9932045517721-c24': {
            text: 'Deslízate en la madriguera de sueños.',
            description: 'Aprende durmiendo.',
          },
        },
      },
      'story-9932045517721-13': {
        title: 'Puerta de Médula',
        narration: 'La puerta se abre como un ojo que parpadea. El aire adentro sabe a azúcar viejo y podredumbre de lluvia. Las voces murmuran en anillos, cada uno un año que viviste y no viviste.',
        choices: {
          'story-9932045517721-c25': {
            text: 'Apunta al corazón de madera.',
            description: 'Más allá de los anillos.',
          },
          'story-9932045517721-c26': {
            text: 'Desvía por la corte de espinas.',
            description: 'Paga la deuda de otra manera.',
          },
        },
      },
      'story-9932045517721-14': {
        title: 'Madriguera de Sueños',
        narration: 'El sueño llega rápido como musgo. En el sueño, el árbol te muestra una raíz dividida: una mitad resbaladiza con oscuridad, la otra pálida y sedienta. Un ciervo con ojos de linterna asiente hacia una puerta hecha de costillas.',
        choices: {
          'story-9932045517721-c27': {
            text: 'Despierta y dirígete al corazón de madera.',
            description: 'Los sueños son mapas.',
          },
          'story-9932045517721-c28': {
            text: 'Busca la cámara de pulso en su lugar.',
            description: 'Estabiliza antes de cirugía.',
          },
        },
      },
      'story-9932045517721-15': {
        title: 'Corte de Espinas',
        narration: 'Los duendes de espinas descansan como gatos, acicalando púas. El coleccionista con corona de diente de león aplaude tu audacia. "Un pacto entonces: repara tres púas rotas, y perdonamos una deuda de memoria".',
        choices: {
          'story-9932045517721-c29': {
            text: 'Repara las púas con pegamento de savia.',
            description: 'El trabajo compra gracia.',
          },
          'story-9932045517721-c30': {
            text: 'Ofrece un favor futuro.',
            description: 'Debes a las hadas después.',
          },
        },
      },
      'story-9932045517721-16': {
        title: 'Cámara de Pulso',
        narration: 'Las paredes pulsan con luz lenta; la resina gotea como lágrimas. Colocas el anillo de voto contra la veta y sientes tu latido trenzarse con el del árbol. El ritmo se estabiliza, suficiente para arriesgar un corte más profundo.',
        choices: {
          'story-9932045517721-c31': {
            text: 'Abre un camino al corazón de madera.',
            description: 'Ahora, o nunca.',
          },
          'story-9932045517721-c32': {
            text: 'Llama a las hadas para testificar.',
            description: 'Comparte culpa, comparte poder.',
          },
        },
      },
      'story-9932045517721-17': {
        title: 'Corazón de Madera',
        narration: 'El centro no está vacío; está lleno de quietud. Hilos de luz corren como venas a través de madera color miel. Un nudo oscuro pulsa irregularmente, floreciendo una fragancia amarga con cada latido.',
        choices: {
          'story-9932045517721-c33': {
            text: 'Teje hilos de memoria alrededor del nudo.',
            description: 'Sana recordando.',
          },
          'story-9932045517721-c34': {
            text: 'Corta el nudo con la cuchilla del herbolario.',
            description: 'Duele para ayudar.',
          },
        },
      },
      'story-9932045517721-18': {
        title: 'Grieta de Ruptura',
        narration: 'El árbol abre una boca donde no había boca, mostrando noche a través del día, un afuera que no encaja. El viento sabe a monedas y canciones de cuna. Tu próxima elección establecerá la deuda, la cura y el costo.',
        choices: {
          'story-9932045517721-c35': {
            text: 'Corona los anillos con tu voto.',
            description: 'Átate como guardián.',
          },
          'story-9932045517721-c36': {
            text: 'Acepta la protección de hadas y su precio.',
            description: 'Un bosque más seguro, una correa.',
          },
          'story-9932045517721-c37': {
            text: 'Divide la podredumbre; redirige el crecimiento.',
            description: 'Poda agridulce.',
          },
          'story-9932045517721-c38': {
            text: 'Separa la raíz infectada completamente.',
            description: 'Salva el todo, exilia la parte.',
          },
        },
      },
      'story-9932045517721-19': {
        title: 'Corona de Anillos',
        narration: 'Tu voto entrelaza los anillos en una cadencia más brillante. Los faroles del mercado aprenden tu latido y marcan el tiempo con él. Los niños crecen pensando que los árboles tararean así en todas partes.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: 'Camino Fragmentado',
        narration: 'Divides la podredumbre y rediriges el crecimiento; un distrito queda en barbecho para que el resto pueda cantar. La gente se muda, llora, y luego construye nuevos mercados donde los hongos responden amablemente al canto. El árbol respira más fácil con una alegría suave y complicada.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: 'Libro Mayor de Hadas',
        narration: 'Los duendes de espinas patrullan las fronteras y los ladrones desaparecen como polen en el viento. El bosque es más seguro; también lo son tus elecciones. Una vez al año, el coleccionista toca tu hombro y toma un pequeño recuerdo como un diezmo, nunca cruel, siempre vinculante.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: 'Exilio sin Raíces',
        narration: 'Separas la raíz negra con un grito que sacude pájaros de millas de ramas. El árbol sobrevive y olvida el dolor; la raíz exiliada se arrastra hacia un horizonte lejano, buscando un nombre que ya no respondes. Duermes más ligero, soñando con pasos que nunca terminan de alcanzarte.',
        choices: {
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Der Pakt des Wurzelwebers',
    description: 'In Saft geschnitzte Buchstaben bluten durch die Rinde: Der Weltenbaum ist krank. Du kannst seinen Puls hören, wenn du dein Ohr an die Maserung drückst – und wenn du es wagst, kannst du antworten. Wirst du mit Erinnerung heilen, mit Feen verhandeln oder schneiden, was geschnitten werden muss?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9932045517721-1': {
        title: 'Flüsternde Wurzeln',
        narration: 'Moos umschließt die Wurzeln, wo einst Marktlaternen hingen; jetzt flackern sie mit unsicherem Atem. Wenn du dein Ohr an die Rinde drückst, hörst du einen gezeitenlangsamen Puls und schwache, von Saft geformte Worte: "Hilf mir zu erinnern." Die Luft schmeckt nach Eisenregen und grünem Donner.',
        choices: {
          'story-9932045517721-c1': {
            text: 'Gehe zum Wurzelmarkt.',
            description: 'Finde Klatsch und Führer.',
          },
          'story-9932045517721-c2': {
            text: 'Suche die Schleierquelle.',
            description: 'Wasser bewahrt alte Wahrheiten.',
          },
        },
      },
      'story-9932045517721-2': {
        title: 'Markt unter dem Baum',
        narration: 'Händler flechten Ranken zu Amuletten und stapeln Pilze, die wie Monde leuchten. Eine blinde Archivarin im Rindenmantel riecht an deinen Händen und nickt, den Saftgeruch erkennend. "Erinnerungsfäden reißen", sagt sie. "Du wirst ein Gelübde oder einen Preis brauchen."',
        choices: {
          'story-9932045517721-c3': {
            text: 'Befrage die Folianten der Archivarin.',
            description: 'Wissen vor Handlung.',
          },
          'story-9932045517721-c4': {
            text: 'Kaufe Leuchtsporen zur Führung.',
            description: 'Licht, das zuhört.',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'Schleierquelle',
        narration: 'Die Quelle atmet Nebel aus, der sich über dem Teich zu halbgeformten Buchstaben kräuselt. Gefallene Münzen sind grün bepelzt und summen, wenn du zurücksummst und den Ton triffst. Fußspuren umkreisen das Ufer und verschwinden in einem hohlen Tor aus Wurzeln.',
        choices: {
          'story-9932045517721-c5': {
            text: 'Betrete das hohle Tor.',
            description: 'Folge den Fußspuren.',
          },
          'story-9932045517721-c6': {
            text: 'Sammle eine Phiole Schleierwasser.',
            description: 'Ein Werkzeug für später.',
          },
        },
      },
      'story-9932045517721-4': {
        title: 'Rindenarchivarin',
        narration: 'Mit Wurzelfasern genähte Seiten rascheln unter deinen Fingern. Ränder flüstern, wenn die Archivarin sie anhaucht: "Gelübde binden Erinnerung. Pakte leihen sie." Ein Ring aus geschichtetem Holz liegt in einer samtenen Mulde, seine Maserung spiralförmig mit zu kleinen Worten beschrieben.',
        choices: {
          'story-9932045517721-c7': {
            text: 'Nimm den Gelübdering.',
            description: 'Binde dich an den Baum.',
          },
          'story-9932045517721-c8': {
            text: 'Kopiere die Wurzelkarte.',
            description: 'Pfade zum Kernholz.',
          },
        },
      },
      'story-9932045517721-5': {
        title: 'Leuchtsporen',
        narration: 'Die Sporen fangen deinen Atem ein, dann blinken sie wach wie winzige Augen. In der Dunkelheit gehalten, erblühen sie zu einer Karte möglicher Schritte – je heller der Punkt, desto freundlicher das Ergebnis. In ihrem Dämmerlicht siehst du zwei starke Optionen pulsieren.',
        choices: {
          'story-9932045517721-c9': {
            text: 'Folge den Sporen zum Wurzelkarten-Gewölbe.',
            description: 'Lass Licht führen.',
          },
          'story-9932045517721-c10': {
            text: 'Versuche die Sporenprüfung allein.',
            description: 'Beweise Wert ohne Eid.',
          },
        },
      },
      'story-9932045517721-6': {
        title: 'Hohles Tor',
        narration: 'Wurzeln wölben sich wie Rippen; die Luft riecht nach Pfennigregen und gequetschter Minze. In die Rinde auf Schulterhöhe geritzt: Strichlisten, die mit einem Herz enden. Ein fernes Klingeln antwortet auf deinen Schritt, als würde eine Brücke wie eine Harfe gezupft.',
        choices: {
          'story-9932045517721-c11': {
            text: 'Unternimm die Sporenprüfung.',
            description: 'Lass den Baum dich prüfen.',
          },
          'story-9932045517721-c12': {
            text: 'Zahle den Zoll der Dornenbrücke.',
            description: 'Handle jetzt mit den Feen.',
          },
        },
      },
      'story-9932045517721-7': {
        title: 'Gelübdering',
        narration: 'Holz, kühl wie Flussschatten, gleitet über deinen Finger und zieht sich fest, bis es bequem sitzt. Eine Textzeile entrollt sich in deinem Geist – kein Befehl, ein Versprechen. Der Baum summt zustimmend, tief und erleichtert.',
        choices: {
          'story-9932045517721-c13': {
            text: 'Folge einem Erinnerungsfaden nach innen.',
            description: 'Wandle alte Schritte neu gemacht.',
          },
          'story-9932045517721-c14': {
            text: 'Schnitze ein Rindentotem für sichere Reise.',
            description: 'Ein kleiner Wächter.',
          },
        },
      },
      'story-9932045517721-8': {
        title: 'Wurzelkarten-Gewölbe',
        narration: 'Eine Tür ohne Scharniere öffnet sich, wenn du die richtige Note atmest. Drinnen zeigen Karten Ringe wie Jahre in einem Baumstumpf, jeder Ring ein Bezirk von Pfaden. Ein Pfad – die "Marktür" – ist mit einem Warnsigil markiert, geformt wie ein schläfriges Auge.',
        choices: {
          'story-9932045517721-c15': {
            text: 'Nimm die Erinnerungsfaden-Route.',
            description: 'Sicherer, langsamer.',
          },
          'story-9932045517721-c16': {
            text: 'Versuche trotzdem die Marktür.',
            description: 'Schnell, riskant.',
          },
        },
      },
      'story-9932045517721-9': {
        title: 'Sporenprüfung',
        narration: 'Sporen füllen deine Lippen mit Leuchten und Wahrheit. Wenn du deinen Namen sprichst, kommen drei andere Namen – Selbste, die hätten sein können, jedes bietet ein Werkzeug. Der Baum wartet darauf zu sehen, welches du leihst.',
        choices: {
          'story-9932045517721-c17': {
            text: 'Leihe den Faden des geduldigen Kartographen.',
            description: 'Zuerst kartieren, dann heilen.',
          },
          'story-9932045517721-c18': {
            text: 'Leihe die Klinge des mutigen Kräuterkundlers.',
            description: 'Fäulnis schneiden, Lied bewahren.',
          },
        },
      },
      'story-9932045517721-10': {
        title: 'Feenzoll',
        narration: 'Eine Brücke aus lebenden Dornen summt wie Bienen. Ein Feensammler mit Löwenzahnkrone lächelt zu breit: "Eine Erinnerung, bitte. Wir geben sie zurück, wenn du jemand anderes bist." Der Wind weigert sich zu helfen.',
        choices: {
          'story-9932045517721-c19': {
            text: 'Zahle mit einer glücklichen Erinnerung.',
            description: 'Verliere Süße; gewinne Durchgang.',
          },
          'story-9932045517721-c20': {
            text: 'Handle stattdessen eine Renovierung aus.',
            description: 'Biete an, die Brücke zu reparieren.',
          },
        },
      },
      'story-9932045517721-11': {
        title: 'Erinnerungsfaden',
        narration: 'Ein silberner Faden zieht von deiner Rippe zu einem mit Leuchten gesprenkelten Tunnel. Jeder Schritt singt einen Akkord, den du aus Kindheitswiegenliedern erkennst. Der Faden teilt sich: Ein Weg pulsiert stetig wie ein Herzschlag; der andere zuckt wie Blitz.',
        choices: {
          'story-9932045517721-c21': {
            text: 'Folge dem stetigen Puls.',
            description: 'Zur Pulskammer.',
          },
          'story-9932045517721-c22': {
            text: 'Jage den Blitzpfad.',
            description: 'Risiko für Geschwindigkeit.',
          },
        },
      },
      'story-9932045517721-12': {
        title: 'Rindentotem',
        narration: 'Du schnitzt einen kleinen Wächter mit Ohren wie Blätter und einem Mund voller Versprechen. Wenn du darauf bläst, kostet das Totem deinen Atem und zeigt, Pfoten standhaft. Es wird nicht kämpfen, aber es wird warnen.',
        choices: {
          'story-9932045517721-c23': {
            text: 'Gehe zur Pulskammer.',
            description: 'Wo der Schlag stockt.',
          },
          'story-9932045517721-c24': {
            text: 'Schlüpfe in den Traumbau.',
            description: 'Lerne durch Schlafen.',
          },
        },
      },
      'story-9932045517721-13': {
        title: 'Marktür',
        narration: 'Die Tür öffnet sich wie ein blinzelndes Auge. Die Luft drinnen schmeckt nach altem Zucker und Regenfäulnis. Stimmen murmeln in Ringen, jeder ein Jahr, das du gelebt hast und nicht gelebt hast.',
        choices: {
          'story-9932045517721-c25': {
            text: 'Ziele auf das Kernholz.',
            description: 'Vorbei an den Ringen.',
          },
          'story-9932045517721-c26': {
            text: 'Umweg durch den Dornenhof.',
            description: 'Zahle die Schuld anders.',
          },
        },
      },
      'story-9932045517721-14': {
        title: 'Traumbau',
        narration: 'Schlaf kommt schnell wie Moos. Im Traum zeigt dir der Baum eine gespaltene Wurzel – eine Hälfte glitschig mit Dunkelheit, die andere bleich und durstig. Ein Reh mit Laternenaugen nickt zu einer Tür aus Rippen.',
        choices: {
          'story-9932045517721-c27': {
            text: 'Erwache und gehe zum Kernholz.',
            description: 'Träume sind Karten.',
          },
          'story-9932045517721-c28': {
            text: 'Suche stattdessen die Pulskammer.',
            description: 'Stabilisiere vor Operation.',
          },
        },
      },
      'story-9932045517721-15': {
        title: 'Dornenhof',
        narration: 'Dornenkobolde fläzen sich wie Katzen und pflegen Widerhaken. Der löwenzahngekrönte Sammler applaudiert deiner Kühnheit. "Ein Pakt also: Repariere drei zerbrochene Widerhaken, und wir vergeben eine Erinnerungsschuld."',
        choices: {
          'story-9932045517721-c29': {
            text: 'Repariere die Widerhaken mit Saftleim.',
            description: 'Arbeit erkauft Gnade.',
          },
          'story-9932045517721-c30': {
            text: 'Biete einen zukünftigen Gefallen.',
            description: 'Schulde den Feen später.',
          },
        },
      },
      'story-9932045517721-16': {
        title: 'Pulskammer',
        narration: 'Wände pulsieren mit langsamem Licht; Harz perlt wie Tränen. Du legst den Gelübdering gegen die Maserung und fühlst, wie dein Herzschlag sich mit dem des Baumes verflicht. Der Rhythmus stabilisiert sich – genug, um einen tieferen Schnitt zu riskieren.',
        choices: {
          'story-9932045517721-c31': {
            text: 'Öffne einen Pfad zum Kernholz.',
            description: 'Jetzt, oder gar nicht.',
          },
          'story-9932045517721-c32': {
            text: 'Rufe die Feen als Zeugen.',
            description: 'Teile Schuld, teile Macht.',
          },
        },
      },
      'story-9932045517721-17': {
        title: 'Kernholz',
        narration: 'Das Zentrum ist nicht leer; es ist voll von Stille. Lichtfäden laufen wie Adern durch honigfarbenes Holz. Ein dunkler Knoten pulsiert unregelmäßig und verströmt bei jedem Schlag einen bitteren Duft.',
        choices: {
          'story-9932045517721-c33': {
            text: 'Webe Erinnerungsfäden um den Knoten.',
            description: 'Heile durch Erinnern.',
          },
          'story-9932045517721-c34': {
            text: 'Schneide den Knoten mit der Klinge des Kräuterkundlers.',
            description: 'Verletze um zu helfen.',
          },
        },
      },
      'story-9932045517721-18': {
        title: 'Bruchriss',
        narration: 'Der Baum öffnet einen Mund, wo kein Mund war, zeigt Nacht durch Tag – ein Draußen, das nicht passt. Wind schmeckt nach Münzen und Wiegenliedern. Deine nächste Wahl wird die Schuld, die Heilung und den Preis festlegen.',
        choices: {
          'story-9932045517721-c35': {
            text: 'Kröne die Ringe mit deinem Gelübde.',
            description: 'Binde dich als Hüter.',
          },
          'story-9932045517721-c36': {
            text: 'Akzeptiere Feenschutz und ihren Preis.',
            description: 'Ein sicherer Wald, eine Leine.',
          },
          'story-9932045517721-c37': {
            text: 'Teile die Fäulnis; leite Wachstum um.',
            description: 'Bittersüßes Beschneiden.',
          },
          'story-9932045517721-c38': {
            text: 'Trenne die infizierte Wurzel ganz ab.',
            description: 'Rette das Ganze, verbannen den Teil.',
          },
        },
      },
      'story-9932045517721-19': {
        title: 'Krone der Ringe',
        narration: 'Dein Gelübde verwindet die Ringe zu einer helleren Kadenz. Marktlaternen lernen deinen Herzschlag und halten damit Takt. Kinder wachsen auf und denken, Bäume summen überall so.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: 'Zersplitterter Pfad',
        narration: 'Du spaltest die Fäulnis und leitest das Wachstum um; ein Bezirk liegt brach, damit der Rest singen kann. Menschen ziehen um, trauern und bauen dann neue Märkte, wo Pilze freundlich auf Lied reagieren. Der Baum atmet leichter mit sanfter, komplizierter Freude.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: 'Feenhauptbuch',
        narration: 'Dornenkobolde patrouillieren die Grenzen und Diebe verschwinden wie Pollen im Wind. Der Wald ist sicherer; so sind deine Entscheidungen. Einmal im Jahr tippt der Sammler auf deine Schulter und nimmt eine kleine Erinnerung wie einen Zehnten – niemals grausam, immer bindend.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: 'Wurzelloses Exil',
        narration: 'Du trennst die schwarze Wurzel mit einem Schrei ab, der Vögel aus meilenweiten Ästen erschüttert. Der Baum überlebt und vergisst den Schmerz; die verbannte Wurzel kriecht zu einem fernen Horizont und sucht einen Namen, den du nicht mehr beantwortest. Du schläfst leichter und träumst von Schritten, die niemals ganz aufholen.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Le Pacte du Tisseur de Racines',
    description: 'Des lettres gravées par la sève saignent à travers l\'écorce : l\'arbre-monde est malade. Tu peux entendre son pouls si tu colles ton oreille contre le grain, et si tu oses, tu peux répondre. Guériras-tu avec la mémoire, négocieras-tu avec les fées, ou couperas-tu ce qui doit être coupé ?',
    author: 'Studio ChronoCanvas',
    nodes: {
      'story-9932045517721-1': {
        title: 'Racines Chuchotantes',
        narration: 'La mousse enveloppe les racines où pendaient autrefois les lanternes du marché ; maintenant elles vacillent d\'un souffle incertain. En pressant ton oreille contre l\'écorce, tu entends un pouls lent comme la marée et de faibles mots façonnés par la sève : « Aide-moi à me souvenir ». L\'air a le goût de pluie de fer et de tonnerre vert.',
        choices: {
          'story-9932045517721-c1': {
            text: 'Va au marché des racines.',
            description: 'Trouve des ragots et des guides.',
          },
          'story-9932045517721-c2': {
            text: 'Cherche la source du voile.',
            description: 'L\'eau garde les vieilles vérités.',
          },
        },
      },
      'story-9932045517721-2': {
        title: 'Marché Sous l\'Arbre',
        narration: 'Les vendeurs tressent des lianes en amulettes et empilent des champignons qui brillent comme des lunes. Une archiviste aveugle en manteau d\'écorce sent tes mains et hoche la tête, reconnaissant l\'odeur de sève. « Les fils de mémoire se brisent », dit-elle. « Tu auras besoin d\'un vœu ou d\'un prix ».',
        choices: {
          'story-9932045517721-c3': {
            text: 'Consulte les tomes de l\'archiviste.',
            description: 'Connaissance avant action.',
          },
          'story-9932045517721-c4': {
            text: 'Achète des spores lumineuses pour guidance.',
            description: 'Lumière qui écoute.',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'Source du Voile',
        narration: 'La source exhale un brouillard qui se courbe en lettres à demi formées au-dessus du bassin. Les pièces tombées sont couvertes de vert et bourdonnent quand tu bourdonnes en retour, accordant le ton. Des empreintes de pas encerclent la berge et disparaissent dans une porte creuse de racines.',
        choices: {
          'story-9932045517721-c5': {
            text: 'Entre par la porte creuse.',
            description: 'Suis les empreintes.',
          },
          'story-9932045517721-c6': {
            text: 'Récolte un flacon d\'eau du voile.',
            description: 'Un outil pour plus tard.',
          },
        },
      },
      'story-9932045517721-4': {
        title: 'Archiviste d\'Écorce',
        narration: 'Des pages cousues de fibre de racine bruissent sous tes doigts. Les marges chuchotent quand l\'archiviste souffle dessus : « Les vœux lient la mémoire. Les pactes l\'empruntent ». Un anneau de bois stratifié repose dans un creux de velours, son grain en spirale avec des mots trop petits pour être lus.',
        choices: {
          'story-9932045517721-c7': {
            text: 'Prends l\'anneau de vœu.',
            description: 'Lie-toi à l\'arbre.',
          },
          'story-9932045517721-c8': {
            text: 'Copie la carte des racines.',
            description: 'Chemins vers le cœur du bois.',
          },
        },
      },
      'story-9932045517721-5': {
        title: 'Spores Lumineuses',
        narration: 'Les spores capturent ton souffle, puis clignotent éveillées comme de minuscules yeux. Tenues dans l\'obscurité, elles s\'épanouissent en une carte de pas possibles – plus le point est brillant, plus le résultat est bienveillant. Dans leur pénombre, tu vois deux options fortes pulser.',
        choices: {
          'story-9932045517721-c9': {
            text: 'Suis les spores vers la voûte de la carte des racines.',
            description: 'Laisse la lumière guider.',
          },
          'story-9932045517721-c10': {
            text: 'Tente l\'épreuve des spores seul.',
            description: 'Prouve ta valeur sans serment.',
          },
        },
      },
      'story-9932045517721-6': {
        title: 'Porte Creuse',
        narration: 'Les racines s\'arquent comme des côtes ; l\'air sent la pluie de sous et la menthe meurtrie. Gravé dans l\'écorce à hauteur d\'épaule : des marques de comptage se terminant par un cœur. Un tintement lointain répond à ton pas comme si un pont était pincé comme une harpe.',
        choices: {
          'story-9932045517721-c11': {
            text: 'Entreprends l\'épreuve des spores.',
            description: 'Laisse l\'arbre te tester.',
          },
          'story-9932045517721-c12': {
            text: 'Paie le péage du pont d\'épines.',
            description: 'Traite avec les fées maintenant.',
          },
        },
      },
      'story-9932045517721-7': {
        title: 'Anneau de Vœu',
        narration: 'Du bois frais comme l\'ombre de rivière glisse sur ton doigt et se resserre jusqu\'à être confortable. Une ligne de texte se déroule dans ton esprit – pas un commandement, une promesse. L\'arbre bourdonne d\'approbation, bas et soulagé.',
        choices: {
          'story-9932045517721-c13': {
            text: 'Suis un fil de mémoire vers l\'intérieur.',
            description: 'Marche sur d\'anciens pas rendus nouveaux.',
          },
          'story-9932045517721-c14': {
            text: 'Sculpte un totem d\'écorce pour un voyage sûr.',
            description: 'Un petit gardien.',
          },
        },
      },
      'story-9932045517721-8': {
        title: 'Voûte de la Carte des Racines',
        narration: 'Une porte sans charnières s\'ouvre quand tu respires la bonne note. À l\'intérieur, les cartes montrent des anneaux comme des années dans une souche, chaque anneau un quartier de chemins. Un chemin – la « porte de moelle » – est marqué d\'un sceau d\'avertissement en forme d\'œil endormi.',
        choices: {
          'story-9932045517721-c15': {
            text: 'Prends la route du fil de mémoire.',
            description: 'Plus sûre, plus lente.',
          },
          'story-9932045517721-c16': {
            text: 'Essaie quand même la porte de moelle.',
            description: 'Rapide, risquée.',
          },
        },
      },
      'story-9932045517721-9': {
        title: 'Épreuve des Spores',
        narration: 'Les spores remplissent tes lèvres de lumière et de vérité. Quand tu prononces ton nom, trois autres noms arrivent – des soi qui auraient pu être, chacun offrant un outil. L\'arbre attend de voir lequel tu empruntes.',
        choices: {
          'story-9932045517721-c17': {
            text: 'Emprunte le fil du cartographe patient.',
            description: 'Cartographie d\'abord, répare ensuite.',
          },
          'story-9932045517721-c18': {
            text: 'Emprunte la lame de l\'herboriste audacieux.',
            description: 'Coupe la pourriture, épargne le chant.',
          },
        },
      },
      'story-9932045517721-10': {
        title: 'Péage des Fées',
        narration: 'Un pont d\'épines vivantes bourdonne comme des abeilles. Un collecteur de fées avec une couronne de pissenlit sourit trop largement : « Un souvenir, s\'il te plaît. Nous te le rendrons quand tu seras quelqu\'un d\'autre ». Le vent refuse d\'aider.',
        choices: {
          'story-9932045517721-c19': {
            text: 'Paie avec un souvenir heureux.',
            description: 'Perds la douceur ; gagne le passage.',
          },
          'story-9932045517721-c20': {
            text: 'Négocie plutôt une rénovation.',
            description: 'Propose de réparer le pont.',
          },
        },
      },
      'story-9932045517721-11': {
        title: 'Fil de Mémoire',
        narration: 'Un fil argenté tire de ta côte vers un tunnel parsemé de lumière. Chaque pas chante un accord que tu reconnais des berceuses de l\'enfance. Le fil se divise : un chemin pulse régulier comme un battement de cœur ; l\'autre tremble comme la foudre.',
        choices: {
          'story-9932045517721-c21': {
            text: 'Suis le pouls régulier.',
            description: 'Vers la chambre du pouls.',
          },
          'story-9932045517721-c22': {
            text: 'Poursuis le chemin de la foudre.',
            description: 'Risque pour la vitesse.',
          },
        },
      },
      'story-9932045517721-12': {
        title: 'Totem d\'Écorce',
        narration: 'Tu sculpes un petit gardien avec des oreilles comme des feuilles et une bouche pleine de promesses. Quand tu souffles dessus, le totem goûte ton souffle et pointe, pattes fermes. Il ne se battra pas, mais il avertira.',
        choices: {
          'story-9932045517721-c23': {
            text: 'Procède à la chambre du pouls.',
            description: 'Où le battement hésite.',
          },
          'story-9932045517721-c24': {
            text: 'Glisse-toi dans le terrier des rêves.',
            description: 'Apprends en dormant.',
          },
        },
      },
      'story-9932045517721-13': {
        title: 'Porte de Moelle',
        narration: 'La porte s\'ouvre comme un œil qui cligne. L\'air à l\'intérieur a le goût de vieux sucre et de pourriture de pluie. Des voix murmurent dans les anneaux, chacun une année que tu as vécue et que tu n\'as pas vécue.',
        choices: {
          'story-9932045517721-c25': {
            text: 'Vise le cœur du bois.',
            description: 'Au-delà des anneaux.',
          },
          'story-9932045517721-c26': {
            text: 'Détour par la cour des épines.',
            description: 'Paie la dette différemment.',
          },
        },
      },
      'story-9932045517721-14': {
        title: 'Terrier des Rêves',
        narration: 'Le sommeil vient vite comme la mousse. Dans le rêve, l\'arbre te montre une racine fendue – une moitié glissante avec l\'obscurité, l\'autre pâle et assoiffée. Un cerf aux yeux de lanterne hoche la tête vers une porte faite de côtes.',
        choices: {
          'story-9932045517721-c27': {
            text: 'Réveille-toi et dirige-toi vers le cœur du bois.',
            description: 'Les rêves sont des cartes.',
          },
          'story-9932045517721-c28': {
            text: 'Cherche plutôt la chambre du pouls.',
            description: 'Stabilise avant la chirurgie.',
          },
        },
      },
      'story-9932045517721-15': {
        title: 'Cour des Épines',
        narration: 'Les lutins d\'épines se prélassent comme des chats, toilettant des barbelés. Le collecteur à couronne de pissenlit applaudit ton audace. « Un pacte alors : répare trois barbelés cassés, et nous pardonnons une dette de mémoire ».',
        choices: {
          'story-9932045517721-c29': {
            text: 'Répare les barbelés avec de la colle de sève.',
            description: 'Le travail achète la grâce.',
          },
          'story-9932045517721-c30': {
            text: 'Offre une faveur future.',
            description: 'Dois aux fées plus tard.',
          },
        },
      },
      'story-9932045517721-16': {
        title: 'Chambre du Pouls',
        narration: 'Les murs pulsent d\'une lumière lente ; la résine perle comme des larmes. Tu places l\'anneau de vœu contre le grain et sens ton battement de cœur se tresser avec celui de l\'arbre. Le rythme se stabilise – assez pour risquer une coupe plus profonde.',
        choices: {
          'story-9932045517721-c31': {
            text: 'Ouvre un chemin vers le cœur du bois.',
            description: 'Maintenant, ou jamais.',
          },
          'story-9932045517721-c32': {
            text: 'Appelle les fées pour témoigner.',
            description: 'Partage le blâme, partage le pouvoir.',
          },
        },
      },
      'story-9932045517721-17': {
        title: 'Cœur du Bois',
        narration: 'Le centre n\'est pas vide ; il est plein de calme. Des fils de lumière courent comme des veines à travers le bois couleur miel. Un nœud sombre pulse irrégulièrement, épanouissant un parfum amer à chaque battement.',
        choices: {
          'story-9932045517721-c33': {
            text: 'Tisse des fils de mémoire autour du nœud.',
            description: 'Guéris en te souvenant.',
          },
          'story-9932045517721-c34': {
            text: 'Coupe le nœud avec la lame de l\'herboriste.',
            description: 'Blesse pour aider.',
          },
        },
      },
      'story-9932045517721-18': {
        title: 'Faille de Rupture',
        narration: 'L\'arbre ouvre une bouche là où il n\'y avait pas de bouche, montrant la nuit à travers le jour – un dehors qui ne correspond pas. Le vent a le goût de pièces et de berceuses. Ton prochain choix fixera la dette, le remède et le coût.',
        choices: {
          'story-9932045517721-c35': {
            text: 'Couronne les anneaux de ton vœu.',
            description: 'Lie-toi comme gardien.',
          },
          'story-9932045517721-c36': {
            text: 'Accepte la protection des fées et leur prix.',
            description: 'Une forêt plus sûre, une laisse.',
          },
          'story-9932045517721-c37': {
            text: 'Divise la pourriture ; redirige la croissance.',
            description: 'Taille douce-amère.',
          },
          'story-9932045517721-c38': {
            text: 'Sépare entièrement la racine infectée.',
            description: 'Sauve le tout, exile la partie.',
          },
        },
      },
      'story-9932045517721-19': {
        title: 'Couronne d\'Anneaux',
        narration: 'Ton vœu entrelace les anneaux en une cadence plus lumineuse. Les lanternes du marché apprennent ton battement de cœur et gardent le temps avec lui. Les enfants grandissent en pensant que les arbres bourdonnent comme ça partout.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: 'Chemin Fragmenté',
        narration: 'Tu divises la pourriture et rediriges la croissance ; un quartier reste en jachère pour que le reste puisse chanter. Les gens déménagent, pleurent, puis construisent de nouveaux marchés où les champignons répondent gentiment au chant. L\'arbre respire plus facilement avec une joie douce et compliquée.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: 'Registre des Fées',
        narration: 'Les lutins d\'épines patrouillent les frontières et les voleurs disparaissent comme du pollen dans le vent. La forêt est plus sûre ; tes choix aussi. Une fois par an, le collecteur tape sur ton épaule et prend un petit souvenir comme une dîme – jamais cruel, toujours contraignant.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: 'Exil sans Racines',
        narration: 'Tu sépares la racine noire avec un cri qui secoue les oiseaux de miles de branches. L\'arbre survit et oublie la douleur ; la racine exilée rampe vers un horizon lointain, cherchant un nom auquel tu ne réponds plus. Tu dors plus légèrement, rêvant de pas qui ne rattrapent jamais tout à fait.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'O Pacto do Tecelão de Raízes',
    description: 'Letras esculpidas pela seiva sangram através da casca: a árvore-mundo está doente. Podes ouvir o seu pulso se encostares o ouvido ao grão, e se ousares, podes responder. Irás curar com memória, negociar com fadas, ou cortar o que deve ser cortado?',
    author: 'Estúdio ChronoCanvas',
    nodes: {
      'story-9932045517721-1': {
        title: 'Raízes Sussurrantes',
        narration: 'O musgo envolve as raízes onde outrora pendiam lanternas do mercado; agora elas tremulam com respiração incerta. Ao pressionares o ouvido contra a casca, ouves um pulso lento como a maré e palavras tênues moldadas pela seiva: "Ajuda-me a recordar". O ar tem sabor de chuva de ferro e trovão verde.',
        choices: {
          'story-9932045517721-c1': {
            text: 'Dirige-te ao mercado das raízes.',
            description: 'Encontra mexericos e guias.',
          },
          'story-9932045517721-c2': {
            text: 'Procura a nascente do véu.',
            description: 'A água guarda verdades antigas.',
          },
        },
      },
      'story-9932045517721-2': {
        title: 'Mercado Sob a Árvore',
        narration: 'Os vendedores entrelaçam vinhas em amuletos e empilham cogumelos que brilham como luas. Uma arquivista cega com capa de casca cheira as tuas mãos e acena, reconhecendo o cheiro de seiva. "Os fios de memória estão a partir-se", diz ela. "Vais precisar de um voto ou de um preço".',
        choices: {
          'story-9932045517721-c3': {
            text: 'Consulta os tomos da arquivista.',
            description: 'Conhecimento antes da ação.',
          },
          'story-9932045517721-c4': {
            text: 'Compra esporos luminosos para orientação.',
            description: 'Luz que escuta.',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'Nascente do Véu',
        narration: 'A nascente exala névoa que se enrola em letras meio formadas sobre o charco. As moedas caídas estão cobertas de verde e zumbem quando tu zumbas de volta, igualando o tom. Pegadas circulam a margem e desaparecem numa porta oca de raízes.',
        choices: {
          'story-9932045517721-c5': {
            text: 'Entra pela porta oca.',
            description: 'Segue as pegadas.',
          },
          'story-9932045517721-c6': {
            text: 'Colhe um frasco de água do véu.',
            description: 'Uma ferramenta para depois.',
          },
        },
      },
      'story-9932045517721-4': {
        title: 'Arquivista de Casca',
        narration: 'Páginas cosidas com fibra de raiz sussurram sob os teus dedos. As margens murmuram quando a arquivista sopra sobre elas: "Os votos prendem a memória. Os pactos emprestam-na". Um anel de madeira em camadas repousa num recanto de veludo, o seu grão em espiral com palavras demasiado pequenas para ler.',
        choices: {
          'story-9932045517721-c7': {
            text: 'Pega no anel de voto.',
            description: 'Liga-te à árvore.',
          },
          'story-9932045517721-c8': {
            text: 'Copia o mapa das raízes.',
            description: 'Caminhos para o cerne.',
          },
        },
      },
      'story-9932045517721-5': {
        title: 'Esporos Luminosos',
        narration: 'Os esporos capturam a tua respiração, depois piscam acordados como olhos minúsculos. Segurados na escuridão, florescem num mapa de passos possíveis - quanto mais brilhante o ponto, mais gentil o resultado. Na sua penumbra, vês duas opções fortes a pulsar.',
        choices: {
          'story-9932045517721-c9': {
            text: 'Segue os esporos até à abóbada do mapa das raízes.',
            description: 'Deixa a luz guiar.',
          },
          'story-9932045517721-c10': {
            text: 'Tenta a prova dos esporos sozinho.',
            description: 'Prova o valor sem juramento.',
          },
        },
      },
      'story-9932045517721-6': {
        title: 'Porta Oca',
        narration: 'As raízes arqueiam-se como costelas; o ar cheira a chuva de cêntimos e hortelã pisada. Gravado na casca à altura do ombro: marcas de contagem que terminam com um coração. Um tinido distante responde ao teu passo como se uma ponte fosse dedilhada como uma harpa.',
        choices: {
          'story-9932045517721-c11': {
            text: 'Empreende a prova dos esporos.',
            description: 'Deixa a árvore testar-te.',
          },
          'story-9932045517721-c12': {
            text: 'Paga a portagem da ponte de espinhos.',
            description: 'Trata com as fadas agora.',
          },
        },
      },
      'story-9932045517721-7': {
        title: 'Anel de Voto',
        narration: 'Madeira fresca como sombra de rio desliza sobre o teu dedo e aperta até ficar confortável. Uma linha de texto desenrola-se na tua mente - não um comando, uma promessa. A árvore murmura aprovação, baixa e aliviada.',
        choices: {
          'story-9932045517721-c13': {
            text: 'Segue um fio de memória para dentro.',
            description: 'Caminha passos antigos tornados novos.',
          },
          'story-9932045517721-c14': {
            text: 'Esculpe um totem de casca para viagem segura.',
            description: 'Um pequeno guardião.',
          },
        },
      },
      'story-9932045517721-8': {
        title: 'Abóbada do Mapa das Raízes',
        narration: 'Uma porta sem dobradiças abre-se quando respiras a nota certa. Lá dentro, os mapas mostram anéis como anos num toco, cada anel um distrito de caminhos. Um caminho - a "porta de medula" - está marcado com um sigilo de aviso em forma de olho sonolento.',
        choices: {
          'story-9932045517721-c15': {
            text: 'Pega na rota do fio de memória.',
            description: 'Mais segura, mais lenta.',
          },
          'story-9932045517721-c16': {
            text: 'Tenta a porta de medula de qualquer forma.',
            description: 'Rápida, arriscada.',
          },
        },
      },
      'story-9932045517721-9': {
        title: 'Prova dos Esporos',
        narration: 'Os esporos enchem os teus lábios com brilho e verdade. Quando pronuncias o teu nome, três outros nomes chegam - eus que poderiam ter sido, cada um oferecendo uma ferramenta. A árvore espera para ver qual pegas emprestado.',
        choices: {
          'story-9932045517721-c17': {
            text: 'Pede emprestado o fio do cartógrafo paciente.',
            description: 'Mapeia primeiro, repara depois.',
          },
          'story-9932045517721-c18': {
            text: 'Pede emprestada a lâmina do herborista audaz.',
            description: 'Corta a podridão, poupa o canto.',
          },
        },
      },
      'story-9932045517721-10': {
        title: 'Portagem das Fadas',
        narration: 'Uma ponte de espinhos vivos zumbe como abelhas. Um colecionador de fadas com coroa de dente-de-leão sorri demasiado amplamente: "Uma memória, por favor. Devolvê-la-emos quando fores alguém diferente". O vento recusa-se a ajudar.',
        choices: {
          'story-9932045517721-c19': {
            text: 'Paga com uma memória feliz.',
            description: 'Perde doçura; ganha passagem.',
          },
          'story-9932045517721-c20': {
            text: 'Negoceia uma renovação em vez disso.',
            description: 'Oferece reparar a ponte.',
          },
        },
      },
      'story-9932045517721-11': {
        title: 'Fio de Memória',
        narration: 'Um fio prateado puxa da tua costela para um túnel salpicado de brilho. Cada passo canta um acorde que reconheces de canções de embalar da infância. O fio divide-se: um caminho pulsa firme como um batimento cardíaco; o outro treme como relâmpago.',
        choices: {
          'story-9932045517721-c21': {
            text: 'Segue o pulso firme.',
            description: 'Rumo à câmara do pulso.',
          },
          'story-9932045517721-c22': {
            text: 'Persegue o caminho do relâmpago.',
            description: 'Arrisca por velocidade.',
          },
        },
      },
      'story-9932045517721-12': {
        title: 'Totem de Casca',
        narration: 'Esculpes um pequeno guardião com orelhas como folhas e uma boca cheia de promessas. Quando sopras sobre ele, o totem prova a tua respiração e aponta, patas firmes. Não lutará, mas avisará.',
        choices: {
          'story-9932045517721-c23': {
            text: 'Prossegue para a câmara do pulso.',
            description: 'Onde a batida vacila.',
          },
          'story-9932045517721-c24': {
            text: 'Desliza para a toca dos sonhos.',
            description: 'Aprende dormindo.',
          },
        },
      },
      'story-9932045517721-13': {
        title: 'Porta de Medula',
        narration: 'A porta abre-se como um olho que pisca. O ar lá dentro tem sabor de açúcar velho e podridão de chuva. Vozes murmuram em anéis, cada um um ano que viveste e não viveste.',
        choices: {
          'story-9932045517721-c25': {
            text: 'Aponta para o cerne.',
            description: 'Para além dos anéis.',
          },
          'story-9932045517721-c26': {
            text: 'Desvia pela corte dos espinhos.',
            description: 'Paga a dívida de forma diferente.',
          },
        },
      },
      'story-9932045517721-14': {
        title: 'Toca dos Sonhos',
        narration: 'O sono chega rápido como musgo. No sonho, a árvore mostra-te uma raiz dividida - metade escorregadia com escuridão, a outra pálida e sedenta. Um veado com olhos de lanterna acena para uma porta feita de costelas.',
        choices: {
          'story-9932045517721-c27': {
            text: 'Acorda e dirige-te ao cerne.',
            description: 'Os sonhos são mapas.',
          },
          'story-9932045517721-c28': {
            text: 'Procura a câmara do pulso em vez disso.',
            description: 'Estabiliza antes da cirurgia.',
          },
        },
      },
      'story-9932045517721-15': {
        title: 'Corte dos Espinhos',
        narration: 'Duendes de espinhos espreguiçam-se como gatos, a limpar farpas. O colecionador com coroa de dente-de-leão aplaude a tua audácia. "Um pacto então: repara três farpas partidas, e perdoamos uma dívida de memória".',
        choices: {
          'story-9932045517721-c29': {
            text: 'Repara as farpas com cola de seiva.',
            description: 'O trabalho compra graça.',
          },
          'story-9932045517721-c30': {
            text: 'Oferece um favor futuro.',
            description: 'Deve às fadas mais tarde.',
          },
        },
      },
      'story-9932045517721-16': {
        title: 'Câmara do Pulso',
        narration: 'As paredes pulsam com luz lenta; resina pinga como lágrimas. Colocas o anel de voto contra o grão e sentes o teu batimento cardíaco entrelaçar-se com o da árvore. O ritmo estabiliza - o suficiente para arriscar um corte mais profundo.',
        choices: {
          'story-9932045517721-c31': {
            text: 'Abre um caminho para o cerne.',
            description: 'Agora, ou nunca.',
          },
          'story-9932045517721-c32': {
            text: 'Chama as fadas para testemunhar.',
            description: 'Partilha culpa, partilha poder.',
          },
        },
      },
      'story-9932045517721-17': {
        title: 'Cerne',
        narration: 'O centro não está vazio; está cheio de quietude. Fios de luz correm como veias através de madeira cor de mel. Um nó escuro pulsa irregularmente, florescendo uma fragrância amarga a cada batida.',
        choices: {
          'story-9932045517721-c33': {
            text: 'Tece fios de memória em torno do nó.',
            description: 'Cura recordando.',
          },
          'story-9932045517721-c34': {
            text: 'Corta o nó com a lâmina do herborista.',
            description: 'Dói para ajudar.',
          },
        },
      },
      'story-9932045517721-18': {
        title: 'Fenda da Ruptura',
        narration: 'A árvore abre uma boca onde não havia boca, mostrando noite através do dia - um exterior que não encaixa. O vento tem sabor de moedas e canções de embalar. A tua próxima escolha estabelecerá a dívida, a cura e o custo.',
        choices: {
          'story-9932045517721-c35': {
            text: 'Coroa os anéis com o teu voto.',
            description: 'Liga-te como guardião.',
          },
          'story-9932045517721-c36': {
            text: 'Aceita a proteção das fadas e o seu preço.',
            description: 'Uma floresta mais segura, uma trela.',
          },
          'story-9932045517721-c37': {
            text: 'Divide a podridão; redireciona o crescimento.',
            description: 'Poda agridoce.',
          },
          'story-9932045517721-c38': {
            text: 'Separa a raiz infectada completamente.',
            description: 'Salva o todo, exila a parte.',
          },
        },
      },
      'story-9932045517721-19': {
        title: 'Coroa de Anéis',
        narration: 'O teu voto entrelaça os anéis numa cadência mais brilhante. As lanternas do mercado aprendem o teu batimento cardíaco e mantêm o tempo com ele. As crianças crescem pensando que as árvores murmuram assim em todo o lado.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: 'Caminho Fragmentado',
        narration: 'Divides a podridão e redirecionas o crescimento; um distrito fica em pousio para que o resto possa cantar. As pessoas mudam-se, lamentam, e depois constroem novos mercados onde os cogumelos respondem gentilmente ao canto. A árvore respira mais facilmente com uma alegria suave e complicada.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: 'Livro-Razão das Fadas',
        narration: 'Duendes de espinhos patrulham as fronteiras e ladrões desaparecem como pólen no vento. A floresta está mais segura; as tuas escolhas também. Uma vez por ano, o colecionador toca o teu ombro e leva uma pequena memória como um dízimo - nunca cruel, sempre vinculativo.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: 'Exílio Sem Raízes',
        narration: 'Separas a raiz negra com um grito que estremece pássaros de milhas de ramos. A árvore sobrevive e esquece a dor; a raiz exilada rasteja para um horizonte distante, procurando um nome a que já não respondes. Dormes mais leve, sonhando com passos que nunca chegam a alcançar-te.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '根織り師の契約',
    description: '樹液によって刻まれた文字が樹皮から滲み出る:世界樹は病んでいる。木目に耳を当てれば、その鼓動が聞こえる――そして、勇気があれば答えることができる。記憶で癒すのか、妖精と取引するのか、それとも切らねばならぬものを切るのか?',
    author: 'クロノキャンバス・スタジオ',
    nodes: {
      'story-9932045517721-1': {
        title: '囁く根',
        narration: 'かつて市場の灯籠が吊るされていた根を苔が包み込む。今や灯籠は不確かな息で明滅する。樹皮に耳を押し当てると、潮の満ち引きのような緩やかな鼓動と、樹液によって形作られたかすかな言葉が聞こえる:「思い出すのを手伝って」。空気は鉄の雨と緑の雷の味がする。',
        choices: {
          'story-9932045517721-c1': {
            text: '根の市場へ向かう。',
            description: '噂話と案内人を見つける。',
          },
          'story-9932045517721-c2': {
            text: 'ヴェールの泉を探す。',
            description: '水は古い真実を守る。',
          },
        },
      },
      'story-9932045517721-2': {
        title: '樹下の市場',
        narration: '商人たちは蔓を編んでお守りを作り、月のように輝くキノコを積み上げている。樹皮のマントを纏った盲目の記録係が、あなたの手の匂いを嗅いで頷く――樹液の香りを認識したのだ。「記憶の糸が切れている」と彼女は言う。「誓いか代償が必要になるでしょう」。',
        choices: {
          'story-9932045517721-c3': {
            text: '記録係の書物を調べる。',
            description: '行動の前に知識を。',
          },
          'story-9932045517721-c4': {
            text: '導きのために光る胞子を買う。',
            description: '耳を傾ける光。',
          },
        },
      },
      'story-9932045517721-3': {
        title: 'ヴェールの泉',
        narration: '泉は霧を吐き出し、それが池の上で半ば形成された文字に渦を巻く。落ちた硬貨は緑の苔に覆われ、あなたが音程を合わせて鼻歌を返すと共鳴する。足跡が岸を巡り、根でできた空洞の門の中に消えている。',
        choices: {
          'story-9932045517721-c5': {
            text: '空洞の門に入る。',
            description: '足跡を追う。',
          },
          'story-9932045517721-c6': {
            text: 'ヴェールの水を瓶に集める。',
            description: '後のための道具。',
          },
        },
      },
      'story-9932045517721-4': {
        title: '樹皮の記録係',
        narration: '根の繊維で綴じられたページがあなたの指の下でカサカサと音を立てる。記録係が息を吹きかけると、余白が囁く:「誓いは記憶を縛る。契約はそれを借りる」。ビロードの窪みに重なった木の指輪が置かれ、その木目は読むには小さすぎる文字で螺旋を描いている。',
        choices: {
          'story-9932045517721-c7': {
            text: '誓いの指輪を取る。',
            description: '自分を木に縛る。',
          },
          'story-9932045517721-c8': {
            text: '根の地図を写す。',
            description: '心材への道。',
          },
        },
      },
      'story-9932045517721-5': {
        title: '光る胞子',
        narration: '胞子があなたの息を捉え、小さな目のように瞬いて目覚める。暗闇に抱かれると、可能な歩みの地図へと開花する――点が明るいほど、結果は優しい。その薄明かりの中で、二つの強い選択肢が脈打っているのが見える。',
        choices: {
          'story-9932045517721-c9': {
            text: '胞子に従って根の地図の保管庫へ。',
            description: '光に導かせる。',
          },
          'story-9932045517721-c10': {
            text: '一人で胞子の試練に挑む。',
            description: '誓いなしで価値を証明する。',
          },
        },
      },
      'story-9932045517721-6': {
        title: '空洞の門',
        narration: '根が肋骨のように弧を描く。空気は硬貨の雨と潰されたミントの匂いがする。肩の高さの樹皮に刻まれている:ハートで終わる集計の印。遠くから鳴り響く音があなたの一歩に応え、まるで橋がハープのように弾かれたかのよう。',
        choices: {
          'story-9932045517721-c11': {
            text: '胞子の試練を受ける。',
            description: '木にあなたを試させる。',
          },
          'story-9932045517721-c12': {
            text: '棘の橋の通行料を払う。',
            description: '今、妖精と取引する。',
          },
        },
      },
      'story-9932045517721-7': {
        title: '誓いの指輪',
        narration: '川の影のように冷たい木があなたの指を滑り、心地よくなるまで締まる。あなたの心の中で一行のテキストが展開される――命令ではなく、約束だ。木は低く安堵したように承認の音を鳴らす。',
        choices: {
          'story-9932045517721-c13': {
            text: '記憶の糸を内側へと辿る。',
            description: '新たに作られた古い歩みを歩く。',
          },
          'story-9932045517721-c14': {
            text: '安全な旅のために樹皮のトーテムを彫る。',
            description: '小さな守護者。',
          },
        },
      },
      'story-9932045517721-8': {
        title: '根の地図の保管庫',
        narration: '蝶番のない扉が、正しい音階を呼吸すると開く。内部では、地図が切り株の年輪のような輪を示し、各輪が道の区域となっている。一つの道――「髄の扉」――は、眠そうな目の形をした警告の印で印されている。',
        choices: {
          'story-9932045517721-c15': {
            text: '記憶の糸のルートを取る。',
            description: 'より安全で、より遅い。',
          },
          'story-9932045517721-c16': {
            text: 'とにかく髄の扉を試す。',
            description: '速いが、危険。',
          },
        },
      },
      'story-9932045517721-9': {
        title: '胞子の試練',
        narration: '胞子があなたの唇を輝きと真実で満たす。あなたが名前を口にすると、三つの別の名前が現れる――そうであったかもしれない自己たちで、それぞれが道具を提供する。木はあなたがどれを借りるかを見るために待っている。',
        choices: {
          'story-9932045517721-c17': {
            text: '忍耐強い地図製作者の糸を借りる。',
            description: 'まず地図を作り、次に修復する。',
          },
          'story-9932045517721-c18': {
            text: '大胆な薬草師の刃を借りる。',
            description: '腐敗を切り、歌を残す。',
          },
        },
      },
      'story-9932045517721-10': {
        title: '妖精の通行料',
        narration: '生きた棘の橋が蜂のように唸る。タンポポの冠を被った妖精の収集家が広すぎる笑みを浮かべる:「記憶を一つ、お願いします。あなたが別の誰かになったときに返しますから」。風は助けを拒む。',
        choices: {
          'story-9932045517721-c19': {
            text: '幸せな記憶で支払う。',
            description: '甘さを失い、通行を得る。',
          },
          'story-9932045517721-c20': {
            text: '代わりに修復を交渉する。',
            description: '橋を直すことを申し出る。',
          },
        },
      },
      'story-9932045517721-11': {
        title: '記憶の糸',
        narration: '銀色の糸があなたの肋骨から輝きに斑点を持つトンネルへと引っ張る。一歩ごとに、子供時代の子守唄から認識する和音を歌う。糸は分かれる:一つの道は心臓の鼓動のように安定して脈打ち、もう一つは稲妻のように震える。',
        choices: {
          'story-9932045517721-c21': {
            text: '安定した脈動を追う。',
            description: '鼓動の部屋へ。',
          },
          'story-9932045517721-c22': {
            text: '稲妻の道を追いかける。',
            description: '速度のためにリスクを取る。',
          },
        },
      },
      'story-9932045517721-12': {
        title: '樹皮のトーテム',
        narration: 'あなたは葉のような耳と約束でいっぱいの口を持つ小さな守護者を彫る。それに息を吹きかけると、トーテムはあなたの息を味わい、しっかりとした足で指し示す。戦わないが、警告する。',
        choices: {
          'story-9932045517721-c23': {
            text: '鼓動の部屋へ進む。',
            description: '拍動がつまずく場所。',
          },
          'story-9932045517721-c24': {
            text: '夢の穴に滑り込む。',
            description: '眠ることで学ぶ。',
          },
        },
      },
      'story-9932045517721-13': {
        title: '髄の扉',
        narration: '扉は瞬きする目のように開く。内部の空気は古い砂糖と雨の腐敗の味がする。声が輪の中でつぶやく――それぞれが、あなたが生きた年とそうでなかった年。',
        choices: {
          'story-9932045517721-c25': {
            text: '心材を目指す。',
            description: '輪を越えて。',
          },
          'story-9932045517721-c26': {
            text: '棘の宮廷を迂回する。',
            description: '別の方法で負債を払う。',
          },
        },
      },
      'story-9932045517721-14': {
        title: '夢の穴',
        narration: '眠りは苔のように速く訪れる。夢の中で、木はあなたに裂けた根を見せる――片方は暗闇で滑りやすく、もう片方は青白く渇いている。ランタンの目を持つ鹿が、肋骨でできた扉に向かって頷く。',
        choices: {
          'story-9932045517721-c27': {
            text: '目覚めて心材へ向かう。',
            description: '夢は地図である。',
          },
          'story-9932045517721-c28': {
            text: '代わりに鼓動の部屋を探す。',
            description: '手術の前に安定させる。',
          },
        },
      },
      'story-9932045517721-15': {
        title: '棘の宮廷',
        narration: '棘の妖精たちが猫のようにくつろぎ、棘を手入れしている。タンポポの冠を被った収集家があなたの大胆さに拍手を送る。「では契約を:三つの折れた棘を直せば、記憶の負債を一つ許しましょう」。',
        choices: {
          'story-9932045517721-c29': {
            text: '樹液の糊で棘を直す。',
            description: '働きが恩恵を買う。',
          },
          'story-9932045517721-c30': {
            text: '未来の好意を申し出る。',
            description: '妖精に後で借りができる。',
          },
        },
      },
      'story-9932045517721-16': {
        title: '鼓動の部屋',
        narration: '壁が遅い光で脈打ち、樹脂が涙のように滴る。あなたは誓いの指輪を木目に押し当て、自分の心拍が木の心拍と編み込まれるのを感じる。リズムが安定する――より深い切り込みを冒険するのに十分だ。',
        choices: {
          'story-9932045517721-c31': {
            text: '心材への道を開く。',
            description: '今か、決してか。',
          },
          'story-9932045517721-c32': {
            text: '妖精を証人として呼ぶ。',
            description: '責めを分かち、力を分かつ。',
          },
        },
      },
      'story-9932045517721-17': {
        title: '心材',
        narration: '中心は空ではない。静寂で満ちている。光の糸が蜂蜜色の木を通って静脈のように走る。暗い結び目が不規則に脈打ち、一拍ごとに苦い香りを放つ。',
        choices: {
          'story-9932045517721-c33': {
            text: '記憶の糸を結び目の周りに織る。',
            description: '思い出すことで癒す。',
          },
          'story-9932045517721-c34': {
            text: '薬草師の刃で結び目を切る。',
            description: '助けるために傷つける。',
          },
        },
      },
      'story-9932045517721-18': {
        title: '裂け目の亀裂',
        narration: '木が口のなかったところに口を開け、昼間を通して夜を見せる――合わない外側。風は硬貨と子守唄の味がする。あなたの次の選択が負債、治療、代償を決定する。',
        choices: {
          'story-9932045517721-c35': {
            text: '誓いで輪を戴冠させる。',
            description: '守護者として自分を縛る。',
          },
          'story-9932045517721-c36': {
            text: '妖精の保護とその代償を受け入れる。',
            description: 'より安全な森、鎖。',
          },
          'story-9932045517721-c37': {
            text: '腐敗を分割し、成長を迂回させる。',
            description: 'ほろ苦い剪定。',
          },
          'story-9932045517721-c38': {
            text: '感染した根を完全に切断する。',
            description: '全体を救い、部分を追放する。',
          },
        },
      },
      'story-9932045517721-19': {
        title: '輪の冠',
        narration: 'あなたの誓いが輪をより明るい拍子へと絡める。市場の灯籠があなたの心拍を学び、それに合わせて時を刻む。子供たちは木がどこでもそのように唸ると思って育つ。',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: '破片の道',
        narration: 'あなたは腐敗を分割し、成長を迂回させる。一つの区域が休閑地となり、残りが歌えるようにする。人々は移動し、悲しみ、そして歌に優しく応えるキノコが育つ場所に新しい市場を建てる。木は柔らかく複雑な喜びとともにより楽に呼吸する。',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: '妖精の台帳',
        narration: '棘の妖精たちが境界を巡回し、泥棒は風の中の花粉のように消える。森はより安全になる。あなたの選択もそうだ。年に一度、収集家があなたの肩を叩き、十分の一税のように小さな記憶を取る――決して残酷ではなく、常に拘束力がある。',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: '根なき追放',
        narration: 'あなたは黒い根を叫びとともに切り離し、何マイルもの枝から鳥を震わせる。木は生き延び、痛みを忘れる。追放された根は遠い地平線に向かって這い、もはやあなたが答えない名前を探す。あなたはより軽く眠り、決して追いつかない足音の夢を見る。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '织根者之约',
    description: '树液刻成的字母渗透树皮:世界树病了。如果你把耳朵贴在木纹上,就能听到它的脉搏——如果你敢,就能回应。你会用记忆治愈,与仙灵交易,还是切除必须切除之物?',
    author: '时光画布工作室',
    nodes: {
      'story-9932045517721-1': {
        title: '低语之根',
        narration: '苔藓包裹着曾经挂着集市灯笼的树根;现在它们以不确定的呼吸闪烁。将耳朵贴在树皮上,你听到如潮汐般缓慢的脉搏和树液塑造的微弱话语:「帮我记起来。」空气有铁雨和绿雷的味道。',
        choices: {
          'story-9932045517721-c1': {
            text: '前往根市场。',
            description: '寻找闲话和向导。',
          },
          'story-9932045517721-c2': {
            text: '寻找面纱之泉。',
            description: '水保存着古老真相。',
          },
        },
      },
      'story-9932045517721-2': {
        title: '树下市场',
        narration: '商贩将藤蔓编成护身符,堆起如月般发光的蘑菇。一位穿树皮斗篷的盲眼档案员嗅闻你的手并点头,认出树液的气味。「记忆之丝在断裂,」她说。「你需要誓言或代价。」',
        choices: {
          'story-9932045517721-c3': {
            text: '查阅档案员的典籍。',
            description: '行动前先求知。',
          },
          'story-9932045517721-c4': {
            text: '购买发光孢子作向导。',
            description: '倾听的光。',
          },
        },
      },
      'story-9932045517721-3': {
        title: '面纱之泉',
        narration: '泉水呼出雾气,在池面上卷成半成形的字母。落下的硬币覆着绿毛,当你和声回应、匹配音调时会嗡嗡作响。足迹环绕岸边,消失在树根构成的空心门中。',
        choices: {
          'story-9932045517721-c5': {
            text: '进入空心门。',
            description: '跟随足迹。',
          },
          'story-9932045517721-c6': {
            text: '收集一瓶面纱之水。',
            description: '留作后用的工具。',
          },
        },
      },
      'story-9932045517721-4': {
        title: '树皮档案员',
        narration: '用根纤维缝制的书页在你指下沙沙作响。当档案员向它们吹气时,页边低语:「誓言束缚记忆。契约借用记忆。」一枚层叠木质戒指躺在天鹅绒凹槽中,纹理盘旋着太小无法阅读的文字。',
        choices: {
          'story-9932045517721-c7': {
            text: '拿起誓言之戒。',
            description: '将自己绑定于树。',
          },
          'story-9932045517721-c8': {
            text: '抄录根地图。',
            description: '通往心材的路径。',
          },
        },
      },
      'story-9932045517721-5': {
        title: '发光孢子',
        narration: '孢子捕获你的呼吸,然后像微小眼睛般眨眼醒来。握在黑暗中,它们绽放成可能步骤的地图——点越亮,结果越仁慈。在它们的微光中,你看到两个强烈脉动的选项。',
        choices: {
          'story-9932045517721-c9': {
            text: '跟随孢子到根地图密室。',
            description: '让光引路。',
          },
          'story-9932045517721-c10': {
            text: '独自尝试孢子试炼。',
            description: '无誓证明价值。',
          },
        },
      },
      'story-9932045517721-6': {
        title: '空心门',
        narration: '树根如肋骨般拱起;空气有便士雨和压碎薄荷的气味。肩高的树皮上刻着:以心形结尾的计数标记。远处的铃响回应你的脚步,仿佛桥梁被当作竖琴拨弄。',
        choices: {
          'story-9932045517721-c11': {
            text: '进行孢子试炼。',
            description: '让树考验你。',
          },
          'story-9932045517721-c12': {
            text: '支付荆棘桥通行费。',
            description: '现在与仙灵交易。',
          },
        },
      },
      'story-9932045517721-7': {
        title: '誓言之戒',
        narration: '木质清凉如河影,滑过你的手指并收紧至舒适。一行文字在你脑海展开——不是命令,是承诺。树发出低沉释然的认可声。',
        choices: {
          'story-9932045517721-c13': {
            text: '沿记忆丝线向内。',
            description: '走旧步新行。',
          },
          'story-9932045517721-c14': {
            text: '雕刻树皮图腾以保旅途平安。',
            description: '小小守护者。',
          },
        },
      },
      'story-9932045517721-8': {
        title: '根地图密室',
        narration: '无铰链的门在你呼出正确音符时开启。内部,地图显示如树桩年轮般的环,每环是一个路径区域。一条路——「髓门」——标有形似睡眼的警告符号。',
        choices: {
          'story-9932045517721-c15': {
            text: '选择记忆丝线路线。',
            description: '更安全,更慢。',
          },
          'story-9932045517721-c16': {
            text: '仍然尝试髓门。',
            description: '快速,冒险。',
          },
        },
      },
      'story-9932045517721-9': {
        title: '孢子试炼',
        narration: '孢子以光与真理填满你的嘴唇。当你说出名字,三个其他名字到来——可能成为的自我,各自提供工具。树等待看你借用哪个。',
        choices: {
          'story-9932045517721-c17': {
            text: '借用耐心制图师的线。',
            description: '先绘图,再修补。',
          },
          'story-9932045517721-c18': {
            text: '借用大胆草药师的刃。',
            description: '切腐留歌。',
          },
        },
      },
      'story-9932045517721-10': {
        title: '仙灵通行费',
        narration: '活荆棘桥如蜂般嗡嗡作响。戴蒲公英冠的仙灵收藏者笑得太宽:「请给一段记忆。当你成为别人时我们会还你。」风拒绝帮助。',
        choices: {
          'story-9932045517721-c19': {
            text: '用快乐记忆支付。',
            description: '失甜蜜;得通行。',
          },
          'story-9932045517721-c20': {
            text: '改为协商翻新。',
            description: '提议修桥。',
          },
        },
      },
      'story-9932045517721-11': {
        title: '记忆丝线',
        narration: '银线从你肋骨牵引至点缀光辉的隧道。每步唱出你从童年摇篮曲认出的和弦。丝线分叉:一条如心跳般稳定脉动;另一条如闪电般颤抖。',
        choices: {
          'story-9932045517721-c21': {
            text: '跟随稳定脉搏。',
            description: '前往脉搏室。',
          },
          'story-9932045517721-c22': {
            text: '追逐闪电路径。',
            description: '冒险求速。',
          },
        },
      },
      'story-9932045517721-12': {
        title: '树皮图腾',
        narration: '你雕刻小守护者,叶耳承诺口。当你向它吹气,图腾尝你呼吸并指引,爪稳。它不会战斗,但会警告。',
        choices: {
          'story-9932045517721-c23': {
            text: '前往脉搏室。',
            description: '跳动踌躇之处。',
          },
          'story-9932045517721-c24': {
            text: '溜进梦穴。',
            description: '以眠学习。',
          },
        },
      },
      'story-9932045517721-13': {
        title: '髓门',
        narration: '门如眨眼般开启。内部空气有陈糖和雨腐的味道。声音在环中喃喃,每环是你活过与未活过的一年。',
        choices: {
          'story-9932045517721-c25': {
            text: '瞄准心材。',
            description: '越过诸环。',
          },
          'story-9932045517721-c26': {
            text: '绕道荆棘庭。',
            description: '换种方式还债。',
          },
        },
      },
      'story-9932045517721-14': {
        title: '梦穴',
        narration: '睡眠如苔藓般快速降临。梦中,树向你展示分裂的根——一半暗滑,另一半苍白饥渴。灯眼鹿朝肋骨门点头。',
        choices: {
          'story-9932045517721-c27': {
            text: '醒来前往心材。',
            description: '梦是地图。',
          },
          'story-9932045517721-c28': {
            text: '改找脉搏室。',
            description: '手术前先稳定。',
          },
        },
      },
      'story-9932045517721-15': {
        title: '荆棘庭',
        narration: '荆棘精灵如猫般懒散,梳理倒刺。蒲公英冠收藏者为你的大胆鼓掌。「那么契约:修三根断刺,我们免一笔记忆债。」',
        choices: {
          'story-9932045517721-c29': {
            text: '用树液胶修刺。',
            description: '工作购恩典。',
          },
          'story-9932045517721-c30': {
            text: '提议未来人情。',
            description: '日后欠仙灵。',
          },
        },
      },
      'story-9932045517721-16': {
        title: '脉搏室',
        narration: '墙壁以缓光搏动;树脂如泪珠滴落。你将誓言之戒贴于木纹,感觉心跳与树交织。节奏稳定——足以冒更深切口之险。',
        choices: {
          'story-9932045517721-c31': {
            text: '开辟心材之路。',
            description: '此刻,或永不。',
          },
          'story-9932045517721-c32': {
            text: '召仙灵作证。',
            description: '共担罪责,共享力量。',
          },
        },
      },
      'story-9932045517721-17': {
        title: '心材',
        narration: '中心非空;满是静谧。光线如脉络穿蜜色木。暗结不规则搏动,每击开苦香。',
        choices: {
          'story-9932045517721-c33': {
            text: '将记忆丝线编绕结。',
            description: '以记忆治愈。',
          },
          'story-9932045517721-c34': {
            text: '用草药师刃切结。',
            description: '痛以助人。',
          },
        },
      },
      'story-9932045517721-18': {
        title: '破裂之隙',
        narration: '树在无口处开口,透日显夜——不配外界。风有硬币和摇篮曲的味道。你的下一选择将定债务、疗愈与代价。',
        choices: {
          'story-9932045517721-c35': {
            text: '以誓冠环。',
            description: '绑自己为守护者。',
          },
          'story-9932045517721-c36': {
            text: '接受仙灵庇护与其价。',
            description: '更安全的森林,一条绳索。',
          },
          'story-9932045517721-c37': {
            text: '分腐;改道生长。',
            description: '苦甜修剪。',
          },
          'story-9932045517721-c38': {
            text: '彻底切断染根。',
            description: '救全体,逐局部。',
          },
        },
      },
      'story-9932045517721-19': {
        title: '环之冠',
        narration: '你的誓言将环编成更明亮的节奏。集市灯笼学会你的心跳并随之计时。孩子们长大认为树处处如此嗡鸣。',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: '碎裂之径',
        narration: '你分裂腐败并改道生长;一区休耕以让余者能歌。人们迁移、哀悼,然后在蘑菇善应歌声之处建新市场。树以柔软复杂的喜悦呼吸更轻。',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: '仙灵总账',
        narration: '荆棘精灵巡边,盗贼如风中花粉消散。森林更安全;你的选择亦然。一年一度,收藏者拍你肩取小记忆作什一税——从不残忍,始终束缚。',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: '无根放逐',
        narration: '你以呼喊切断黑根,震落数里枝头鸟雀。树幸存并忘痛;放逐根爬向远方地平线,寻你不再应答的名字。你眠更轻,梦永不完全追及的脚步。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '뿌리짜는자의 계약',
    description: '수액으로 새겨진 글자들이 나무껍질을 통해 스며든다: 세계수가 아프다. 나뭇결에 귀를 대면 그 맥박을 들을 수 있고, 용기가 있다면 답할 수 있다. 기억으로 치유할 것인가, 요정과 거래할 것인가, 아니면 잘라내야 할 것을 자를 것인가?',
    author: '크로노캔버스 스튜디오',
    nodes: {
      'story-9932045517721-1': {
        title: '속삭이는 뿌리',
        narration: '이끼가 한때 시장 등불이 걸려있던 뿌리를 감싸고 있다. 이제 등불들은 불확실한 숨결로 깜빡인다. 나무껍질에 귀를 대면 조수처럼 느린 맥박과 수액으로 만들어진 희미한 말을 듣게 된다: "기억하는 것을 도와줘." 공기는 철의 비와 초록 천둥의 맛이 난다.',
        choices: {
          'story-9932045517721-c1': {
            text: '뿌리 시장으로 간다.',
            description: '소문과 안내자를 찾는다.',
          },
          'story-9932045517721-c2': {
            text: '베일 샘을 찾는다.',
            description: '물은 오래된 진실을 지킨다.',
          },
        },
      },
      'story-9932045517721-2': {
        title: '나무 아래 시장',
        narration: '상인들은 덩굴을 땋아 부적을 만들고 달처럼 빛나는 버섯을 쌓아올린다. 나무껍질 망토를 입은 맹인 기록관이 당신의 손 냄새를 맡고 고개를 끄덕인다 - 수액 냄새를 알아본 것이다. "기억의 실이 끊어지고 있어요." 그녀가 말한다. "서약이나 대가가 필요할 거예요."',
        choices: {
          'story-9932045517721-c3': {
            text: '기록관의 서책을 살펴본다.',
            description: '행동보다 지식이 먼저.',
          },
          'story-9932045517721-c4': {
            text: '안내를 위해 빛나는 포자를 산다.',
            description: '귀 기울이는 빛.',
          },
        },
      },
      'story-9932045517721-3': {
        title: '베일 샘',
        narration: '샘이 안개를 내뿜고, 안개는 연못 위에서 반쯤 형성된 글자로 소용돌이친다. 떨어진 동전들은 초록색 털로 덮여 있고, 당신이 음정을 맞춰 콧노래로 응답하면 함께 울린다. 발자국이 둑을 돌다가 뿌리로 된 속이 빈 문 안으로 사라진다.',
        choices: {
          'story-9932045517721-c5': {
            text: '속이 빈 문으로 들어간다.',
            description: '발자국을 따라간다.',
          },
          'story-9932045517721-c6': {
            text: '베일의 물을 병에 담는다.',
            description: '나중을 위한 도구.',
          },
        },
      },
      'story-9932045517721-4': {
        title: '나무껍질 기록관',
        narration: '뿌리 섬유로 꿰맨 페이지들이 당신의 손가락 아래에서 바스락거린다. 기록관이 숨을 불어넣으면 여백이 속삭인다: "서약은 기억을 묶는다. 계약은 기억을 빌린다." 벨벳 움푹한 곳에 겹겹이 쌓인 나무 반지가 놓여 있고, 그 나뭇결은 읽기엔 너무 작은 글자들로 소용돌이친다.',
        choices: {
          'story-9932045517721-c7': {
            text: '서약의 반지를 가져간다.',
            description: '나무에 자신을 묶는다.',
          },
          'story-9932045517721-c8': {
            text: '뿌리 지도를 베낀다.',
            description: '심재로 가는 길.',
          },
        },
      },
      'story-9932045517721-5': {
        title: '빛나는 포자',
        narration: '포자들이 당신의 숨결을 담아내고, 작은 눈처럼 깜빡이며 깨어난다. 어둠 속에서 들고 있으면 가능한 걸음들의 지도로 피어난다 - 점이 밝을수록 결과는 더 친절하다. 그 희미한 빛 속에서 두 개의 강한 선택지가 맥동하는 것이 보인다.',
        choices: {
          'story-9932045517721-c9': {
            text: '포자를 따라 뿌리 지도 보관소로 간다.',
            description: '빛이 이끌게 한다.',
          },
          'story-9932045517721-c10': {
            text: '혼자서 포자 시련에 도전한다.',
            description: '맹세 없이 가치를 증명한다.',
          },
        },
      },
      'story-9932045517721-6': {
        title: '속이 빈 문',
        narration: '뿌리들이 갈비뼈처럼 아치를 그린다. 공기는 동전 비와 으깨진 박하 냄새가 난다. 어깨 높이의 나무껍질에 새겨진 것: 하트로 끝나는 계수 표시들. 먼 곳에서 울리는 소리가 당신의 발걸음에 응답하며, 마치 다리가 하프처럼 튕겨진 것 같다.',
        choices: {
          'story-9932045517721-c11': {
            text: '포자 시련을 받는다.',
            description: '나무가 당신을 시험하게 한다.',
          },
          'story-9932045517721-c12': {
            text: '가시 다리의 통행료를 낸다.',
            description: '지금 요정과 거래한다.',
          },
        },
      },
      'story-9932045517721-7': {
        title: '서약의 반지',
        narration: '강의 그늘처럼 차가운 나무가 당신의 손가락 위로 미끄러져 편안해질 때까지 조인다. 한 줄의 텍스트가 당신의 마음속에 펼쳐진다 - 명령이 아니라 약속이다. 나무는 낮고 안도하며 승인의 소리를 낸다.',
        choices: {
          'story-9932045517721-c13': {
            text: '기억의 실을 따라 안쪽으로 간다.',
            description: '새롭게 만들어진 오래된 발걸음을 걷는다.',
          },
          'story-9932045517721-c14': {
            text: '안전한 여행을 위해 나무껍질 토템을 새긴다.',
            description: '작은 수호자.',
          },
        },
      },
      'story-9932045517721-8': {
        title: '뿌리 지도 보관소',
        narration: '경첩 없는 문이 올바른 음을 숨쉴 때 열린다. 안쪽에는 지도들이 그루터기의 나이테 같은 고리들을 보여주고, 각 고리는 길들의 구역이다. 한 길 - "수심문" - 은 졸린 눈 모양의 경고 인장으로 표시되어 있다.',
        choices: {
          'story-9932045517721-c15': {
            text: '기억의 실 경로를 택한다.',
            description: '더 안전하지만, 더 느리다.',
          },
          'story-9932045517721-c16': {
            text: '그래도 수심문을 시도한다.',
            description: '빠르지만, 위험하다.',
          },
        },
      },
      'story-9932045517721-9': {
        title: '포자 시련',
        narration: '포자들이 빛과 진실로 당신의 입술을 가득 채운다. 당신이 이름을 말하면 세 개의 다른 이름들이 도착한다 - 될 수도 있었던 자아들로, 각각이 도구를 제공한다. 나무는 당신이 어느 것을 빌릴지 보기 위해 기다린다.',
        choices: {
          'story-9932045517721-c17': {
            text: '인내심 있는 지도제작자의 실을 빌린다.',
            description: '먼저 지도를 그리고, 다음에 고친다.',
          },
          'story-9932045517721-c18': {
            text: '대담한 약초학자의 칼을 빌린다.',
            description: '썩은 것을 자르고, 노래를 남긴다.',
          },
        },
      },
      'story-9932045517721-10': {
        title: '요정의 통행료',
        narration: '살아있는 가시로 된 다리가 벌처럼 윙윙거린다. 민들레 왕관을 쓴 요정 수집가가 너무 넓게 미소 짓는다: "기억 하나만 주세요. 당신이 다른 누군가가 되면 돌려드리겠습니다." 바람은 도우기를 거부한다.',
        choices: {
          'story-9932045517721-c19': {
            text: '행복한 기억으로 지불한다.',
            description: '달콤함을 잃고, 통행을 얻는다.',
          },
          'story-9932045517721-c20': {
            text: '대신 보수를 협상한다.',
            description: '다리를 고치겠다고 제안한다.',
          },
        },
      },
      'story-9932045517721-11': {
        title: '기억의 실',
        narration: '은색 실이 당신의 갈비뼈에서 빛으로 얼룩진 터널로 당긴다. 매 걸음마다 어린 시절 자장가에서 알아볼 수 있는 화음을 노래한다. 실이 갈라진다: 한 길은 심장 박동처럼 꾸준히 맥박치고, 다른 하나는 번개처럼 떨린다.',
        choices: {
          'story-9932045517721-c21': {
            text: '꾸준한 맥박을 따라간다.',
            description: '맥박 방으로.',
          },
          'story-9932045517721-c22': {
            text: '번개 길을 쫓는다.',
            description: '속도를 위해 위험을 감수한다.',
          },
        },
      },
      'story-9932045517721-12': {
        title: '나무껍질 토템',
        narration: '당신은 나뭇잎 같은 귀와 약속으로 가득한 입을 가진 작은 수호자를 깎는다. 그것에 숨을 불면 토템이 당신의 숨결을 맛보고 가리키며, 발은 확고하다. 싸우지는 않지만, 경고할 것이다.',
        choices: {
          'story-9932045517721-c23': {
            text: '맥박 방으로 나아간다.',
            description: '박동이 흔들리는 곳.',
          },
          'story-9932045517721-c24': {
            text: '꿈 굴로 미끄러져 들어간다.',
            description: '잠으로 배운다.',
          },
        },
      },
      'story-9932045517721-13': {
        title: '수심문',
        narration: '문이 깜빡이는 눈처럼 열린다. 안쪽 공기는 오래된 설탕과 빗물 썩음의 맛이 난다. 목소리들이 고리 속에서 중얼거리고, 각각은 당신이 살았고 살지 않았던 한 해다.',
        choices: {
          'story-9932045517721-c25': {
            text: '심재를 향한다.',
            description: '고리들을 지나서.',
          },
          'story-9932045517721-c26': {
            text: '가시 궁정을 우회한다.',
            description: '빚을 다르게 갚는다.',
          },
        },
      },
      'story-9932045517721-14': {
        title: '꿈 굴',
        narration: '잠이 이끼처럼 빠르게 온다. 꿈에서 나무는 당신에게 갈라진 뿌리를 보여준다 - 한쪽 절반은 어둠으로 미끄럽고, 다른 쪽은 창백하고 목마르다. 등불 눈을 가진 사슴이 갈비뼈로 만들어진 문을 향해 고개를 끄덕인다.',
        choices: {
          'story-9932045517721-c27': {
            text: '깨어나서 심재로 향한다.',
            description: '꿈은 지도다.',
          },
          'story-9932045517721-c28': {
            text: '대신 맥박 방을 찾는다.',
            description: '수술 전에 안정시킨다.',
          },
        },
      },
      'story-9932045517721-15': {
        title: '가시 궁정',
        narration: '가시 정령들이 고양이처럼 느긋하게 누워 가시를 손질한다. 민들레 왕관을 쓴 수집가가 당신의 대담함에 박수를 보낸다. "그렇다면 계약을: 세 개의 부러진 가시를 고치면, 우리는 하나의 기억 빚을 용서하겠습니다."',
        choices: {
          'story-9932045517721-c29': {
            text: '수액 풀로 가시들을 고친다.',
            description: '일이 은혜를 산다.',
          },
          'story-9932045517721-c30': {
            text: '미래의 호의를 제안한다.',
            description: '나중에 요정에게 빚을 진다.',
          },
        },
      },
      'story-9932045517721-16': {
        title: '맥박 방',
        narration: '벽들이 느린 빛으로 고동치고, 수지가 눈물처럼 맺힌다. 당신은 서약의 반지를 나뭇결에 대고 당신의 심장 박동이 나무의 심장 박동과 엮이는 것을 느낀다. 리듬이 안정된다 - 더 깊은 절개를 감행할 만큼 충분히.',
        choices: {
          'story-9932045517721-c31': {
            text: '심재로 가는 길을 연다.',
            description: '지금, 아니면 절대.',
          },
          'story-9932045517721-c32': {
            text: '요정을 증인으로 부른다.',
            description: '비난을 나누고, 힘을 나눈다.',
          },
        },
      },
      'story-9932045517721-17': {
        title: '심재',
        narration: '중심은 비어있지 않다. 고요함으로 가득하다. 빛의 실들이 꿀색 나무를 통해 정맥처럼 달린다. 어두운 매듭이 불규칙하게 맥동하며, 매 박동마다 쓴 향기를 피운다.',
        choices: {
          'story-9932045517721-c33': {
            text: '매듭 주위에 기억의 실을 짠다.',
            description: '기억함으로써 치유한다.',
          },
          'story-9932045517721-c34': {
            text: '약초학자의 칼로 매듭을 자른다.',
            description: '돕기 위해 아프게 한다.',
          },
        },
      },
      'story-9932045517721-18': {
        title: '균열 틈',
        narration: '나무가 입이 없던 곳에 입을 열어 낮을 통해 밤을 보여준다 - 맞지 않는 바깥쪽. 바람은 동전과 자장가의 맛이 난다. 당신의 다음 선택이 빚, 치료, 대가를 정할 것이다.',
        choices: {
          'story-9932045517721-c35': {
            text: '당신의 서약으로 고리들에 왕관을 씌운다.',
            description: '수호자로서 자신을 묶는다.',
          },
          'story-9932045517721-c36': {
            text: '요정의 보호와 그 대가를 받아들인다.',
            description: '더 안전한 숲, 목줄.',
          },
          'story-9932045517721-c37': {
            text: '썩음을 나누고, 성장을 우회시킨다.',
            description: '씁쓸하고 달콤한 가지치기.',
          },
          'story-9932045517721-c38': {
            text: '감염된 뿌리를 완전히 절단한다.',
            description: '전체를 구하고, 부분을 추방한다.',
          },
        },
      },
      'story-9932045517721-19': {
        title: '고리의 왕관',
        narration: '당신의 서약이 고리들을 더 밝은 박자로 꼬아낸다. 시장 등불들이 당신의 심장 박동을 배우고 그것과 함께 시간을 맞춘다. 아이들은 나무가 어디서나 그렇게 윙윙거린다고 생각하며 자란다.',
        choices: {
        },
      },
      'story-9932045517721-20': {
        title: '조각난 길',
        narration: '당신은 썩음을 나누고 성장을 우회시킨다. 한 구역이 휴경지가 되어 나머지가 노래할 수 있게 한다. 사람들은 이사하고, 슬퍼하고, 그런 다음 버섯들이 노래에 친절하게 반응하는 곳에 새 시장을 건설한다. 나무는 부드럽고 복잡한 기쁨으로 더 편하게 숨 쉰다.',
        choices: {
        },
      },
      'story-9932045517721-21': {
        title: '요정의 장부',
        narration: '가시 정령들이 경계를 순찰하고 도둑들은 바람 속의 꽃가루처럼 사라진다. 숲은 더 안전해진다. 당신의 선택들도 그렇다. 일 년에 한 번, 수집가가 당신의 어깨를 톡 치고 십일조처럼 작은 기억을 가져간다 - 결코 잔인하지 않지만, 항상 구속력이 있다.',
        choices: {
        },
      },
      'story-9932045517721-22': {
        title: '뿌리 없는 추방',
        narration: '당신은 울부짖음과 함께 검은 뿌리를 절단하고, 수 마일의 가지에서 새들을 떨게 한다. 나무는 살아남고 고통을 잊는다. 추방된 뿌리는 먼 지평선을 향해 기어가며, 당신이 더 이상 대답하지 않는 이름을 찾는다. 당신은 더 가볍게 잠들고, 결코 완전히 따라잡지 못하는 발자국 소리를 꿈꾼다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
