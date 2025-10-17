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
    title: 'Отголоски Лунной Рощи',
    description: 'Когда полная луна поднимается над Лесом Черного Терна, древний договор пробуждается. Ты несешь осколок разбитой печати, который гудит возле деревьев, зовя тебя к забытой короне и долгу, который роща намерена взыскать. Выбирай союзников, честь или власть—но роща всегда берет свое.',
    author: 'Дарья Воронова',
    nodes: {
      'story-8743921042-1': {
        title: 'Лунное Знамение',
        narration: 'Сине-белая луна поднимается над спутанными вершинами Черного Терна, и осколок в твоем кармане теплеет, словно вспоминая обещание. Совы замолкают. Между соснами узкая тропа блестит, как мокрые чернила, притягивая твои сапоги. Осколок снова вибрирует, отвечая чему-то древнему, что шевелится в корнях.',
        choices: {
          'story-8743921042-c1': {
            text: 'Следуй по лунной тропе в рощу',
            description: 'Осколок хочет завести тебя глубже.',
          },
          'story-8743921042-c2': {
            text: 'Изучи осколок печати и поищи метки поблизости',
            description: 'Знание прежде риска.',
          },
        },
      },
      'story-8743921042-2': {
        title: 'Шепчущая Тропа',
        narration: 'Туман клубится по колено, шепча твое имя голосами, которые ты почти узнаешь. Бледные мотыльки плывут впереди, образуя стрелы, указывающие глубже. Запах мокрого железа плывет в воздухе. Где-то вдали колокол звонит один раз.',
        choices: {
          'story-8743921042-c3': {
            text: 'Ответь на шепот',
            description: 'Рискни впустить их.',
          },
          'story-8743921042-c4': {
            text: 'Игнорируй их и двигайся к звуку колокола',
            description: 'Доверяй ногам, а не ушам.',
          },
        },
      },
      'story-8743921042-3': {
        title: 'Разбитая Печать',
        narration: 'Осколок—это полумесяц темного стекла с выгравированными шипастыми рунами. Когда ты дышишь на него, иней обрамляет метки, и расцветает второй узор—корона без владельца. Лес отвечает низким стоном, словно поворачивается во сне.',
        choices: {
          'story-8743921042-c5': {
            text: 'Прижми осколок к земле и слушай',
            description: 'Говори по-старому.',
          },
          'story-8743921042-c6': {
            text: 'Отломи щепку от осколка, чтобы начертить кровавые руны',
            description: 'Власть требует цены.',
          },
        },
      },
      'story-8743921042-4': {
        title: 'Древний Тис',
        narration: 'Тис старше любого храма арками склоняется над медленным, чистым ручьем. Красные ягоды светятся каплями предупреждения. Когда ты касаешься коры, дерево вспоминает тебя—голос твоей бабушки, колыбельная о долге перед рощей. Вода светлеет, показывая твое лицо, увенчанное шипами.',
        choices: {
          'story-8743921042-c7': {
            text: 'Выпей из ручья',
            description: 'Прими память не твою.',
          },
          'story-8743921042-c8': {
            text: 'Возьми кору тиса для защитного амулета',
            description: 'Сначала защита, потом путь.',
          },
        },
      },
      'story-8743921042-5': {
        title: 'Туманный Мост',
        narration: 'Веревочно-досчатый мост провисает над ущельем, которое ты не видишь. Внизу что-то дышит, как прибой о кость. Колокол висит на первом столбе, обмотанный паутиной, словно сам лес заткнул ему рот.',
        choices: {
          'story-8743921042-c9': {
            text: 'Позвони в колокол',
            description: 'Разбуди спящее для переговоров.',
          },
          'story-8743921042-c10': {
            text: 'Перейди в тишине',
            description: 'Доверься своему равновесию.',
          },
        },
      },
      'story-8743921042-6': {
        title: 'Рынок Теней',
        narration: 'Фонари расцветают вдоль кривого переулка, где не должно быть города. Лавки продают разлитый дождь, наперсточные луны и имена, вшитые в ленты. Мастер масок машет тебе подойти ближе, предлагая лицо, сплетенное из терна и яркой нити.',
        choices: {
          'story-8743921042-c11': {
            text: 'Купи терновую маску за каплю крови',
            description: 'Маски обманывают, но защищают.',
          },
          'story-8743921042-c12': {
            text: 'Обменяй осколок на проводника',
            description: 'Информация важнее артефактов.',
          },
        },
      },
      'story-8743921042-7': {
        title: 'Духовные Фонари',
        narration: 'Светящиеся бусины поднимаются из ручья и кружатся вокруг тебя, любопытные, как лисята. Они толкаются в твою грудь, руки, осколок. Когда один проходит сквозь твою ладонь, твоя кожа поет тонкой серебряной болью—роща судит тебя и находит неоплаченный долг.',
        choices: {
          'story-8743921042-c13': {
            text: 'Попроси духов поделиться тем, что они знают',
            description: 'Скромные вопросы заслуживают ответов.',
          },
          'story-8743921042-c14': {
            text: 'Прикажи духам памятью тиса',
            description: 'Власть может ранить.',
          },
        },
      },
      'story-8743921042-9': {
        title: 'Врата Склепа',
        narration: 'Вырезанные ступени спускаются в красный камень, где холодный воздух льется, как вода. Внизу зияет дверь из ребристой скалы и лунных металлических заклепок. Осколок в твоем кармане дрожит, жаждая стать целым.',
        choices: {
          'story-8743921042-c17': {
            text: 'Вставь осколок в лунный металлический шов',
            description: 'Завершить разбитое.',
          },
          'story-8743921042-c18': {
            text: 'Откажись от притяжения и выбери верхнюю лестницу',
            description: 'Ищи другой путь наверх.',
          },
        },
      },
      'story-8743921042-10': {
        title: 'Писец Отголосков',
        narration: 'Твой проводник ведет тебя на каменную террасу, где ветер пишет на сланце. Писец—это женщина в капюшоне, чьи волосы движутся, как чернила в воде. Она слушает твой осколок, затем рисует три печати, пахнущие дождем и железом.',
        choices: {
          'story-8743921042-c19': {
            text: 'Спроси о пути к короне',
            description: 'Прямота опасна.',
          },
          'story-8743921042-c20': {
            text: 'Спроси, как сломать притязания рощи',
            description: 'Разрушь договор.',
          },
        },
      },
      'story-8743921042-11': {
        title: 'Стеклянная Река',
        narration: 'Река кажется неподвижной, но ее поверхность—это кожа из ножей, отражающих вторую луну. Паром без паромщика ждет, привязанный веревкой из сплетенных волос. Ты можешь переправиться доверием—или испытать лезвие и кровью заплатить дань.',
        choices: {
          'story-8743921042-c21': {
            text: 'Взойди на ожидающий паром',
            description: 'Доверься ритуалу рощи.',
          },
          'story-8743921042-c22': {
            text: 'Порежь ладонь и раскрась осколок',
            description: 'Купи безопасный проход.',
          },
        },
      },
      'story-8743921042-12': {
        title: 'Терновый Договор',
        narration: 'Полое дерево открывается, как часовня, свечи мерцают в нишах, освещенных соком. Прошептанные имена плывут—род, долги, клятвы. Осколок греется до боли, и ты понимаешь: взять корону означает носить голод рощи.',
        choices: {
          'story-8743921042-c23': {
            text: 'Прими договор открыто',
            description: 'Власть с ценой, заплаченной при свете дня.',
          },
          'story-8743921042-c24': {
            text: 'Откажись и ищи лазейку',
            description: 'Всегда есть формулировка.',
          },
        },
      },
      'story-8743921042-13': {
        title: 'Король Без Короны',
        narration: 'Фигура из корней и ветра сидит на каменном кресле, его лоб изранен там, где когда-то покоился венец. Когда он поворачивается, ты видишь свои скулы, глаза своей семьи—твой род когда-то держал корону. Роща гудит, ожидая увидеть, что ты сделаешь с правдой.',
        choices: {
          'story-8743921042-c25': {
            text: 'Преклони колено и поклянись исправить то, что сломал твой род',
            description: 'Искупление связывает крепко.',
          },
          'story-8743921042-c26': {
            text: 'Брось вызов Королю передать бремя',
            description: 'Выиграй свободу или худшую тяжесть.',
          },
        },
      },
      'story-8743921042-14': {
        title: 'Лунные Шпилевые Ступени',
        narration: 'Ступени, высеченные из костяно-белого камня, зигзагом уходят в туман. Каждый поворот показывает луну больше, пока она не заполнит небо холодным ликом. Твое дыхание оперяется; твоя решимость твердеет, чтобы соответствовать подъему.',
        choices: {
          'story-8743921042-c27': {
            text: 'Взбирайся быстрее, чтобы первым достичь шпиля',
            description: 'Захвати инициативу.',
          },
          'story-8743921042-c28': {
            text: 'Останови и вырежи защиту на ступени',
            description: 'Защита важнее спешки.',
          },
        },
      },
      'story-8743921042-15': {
        title: 'Зал Семян',
        narration: 'Пещера открывается под расписным небом, где тысячи семян висят в паутинном шелке. Каждое семя бьется, как крошечное сердце, каждое—будущий лес, ждущий обещания. Корона покоится на пьедестале из сплетенных корней, пульсируя в такт твоему собственному пульсу.',
        choices: {
          'story-8743921042-c29': {
            text: 'Помести осколок в корону',
            description: 'Завершить инструмент власти.',
          },
          'story-8743921042-c30': {
            text: 'Рассыпь семена и задуши корону',
            description: 'Сломай цикл навсегда.',
          },
        },
      },
      'story-8743921042-16': {
        title: 'Зеркальная Дуэль',
        narration: 'На замерзшем хребте ветер затвердевает в форму, которая отражает тебя удар за ударом. Каждый удар звенит, стряхивая снег с черных сосен. Роща наблюдает затаив дыхание, судя, какое я лучше послужит ей.',
        choices: {
          'story-8743921042-c31': {
            text: 'Уступи и прими корону своего отражения',
            description: 'Пусть другое ты правит.',
          },
          'story-8743921042-c32': {
            text: 'Разбей зеркало осколком',
            description: 'Сломай испытание, чтобы установить свои условия.',
          },
        },
      },
      'story-8743921042-17': {
        title: 'Цена Магии',
        narration: 'Туман складывается в круг стоячих камней, каждая поверхность вырезана с жертвоприношениями—волосы, зубы, кольца, колыбельные, написанные пеплом. Роща не торгуется без монеты. Ты можешь купить путь, но должен назвать свою потерю.',
        choices: {
          'story-8743921042-c33': {
            text: 'Предложи свой голос на сезон',
            description: 'Тишина покупает руководство.',
          },
          'story-8743921042-c34': {
            text: 'Предложи год из своей тени',
            description: 'Ты будешь ходить тоньше.',
          },
        },
      },
      'story-8743921042-18': {
        title: 'Восстановленная Заря',
        narration: 'Корона принимает осколок, и роща выдыхает весенне-пахнущее дыхание. Птицы просыпаются, когда первое золото струится сквозь деревья. Ты выходишь, не нося металла, только гирлянду свежих побегов—хранитель, не властитель. Лес гудит тихое да.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: 'Лес Пожирает',
        narration: 'Семена взрываются в буйстве корней, которые раскалывают камень и поглощают залы. Корона задыхается под зеленой волной, которой нет дела до королей. Годы спустя путешественники шепчут о новом лесе, который растет слишком быстро, голодный, как буря. Твое имя потеряно под листьями.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: 'Королева Шипов',
        narration: 'Ты кланяешься своему отражению, и оно выступает вперед, нося твое лицо и корону из живой лозы. Аврора колышется в рогах наблюдающего оленя, пока корни поднимаются, чтобы сформировать трон. Ты будешь править, слушая, лезвие не нужно—но корона пьет немного от твоего сна каждую ночь.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: 'Потерянный Между Мирами',
        narration: 'Зеркало разбивается, но и путь домой тоже. Ты изучаешь боковые тропы рощи, направляя странников к безопасным полянам с фонарем собственного изготовления. Некоторыми ночами ты почти вспоминаешь другое имя. Луна—твои единственные часы.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: 'Серебряная Клятва',
        narration: 'На берегу, где корни пьют прилив, ты клянешься нести закон рощи за пределы ее деревьев. Корона растворяется в свет, пронизывающий твои вены, холодный и чистый. Ты оставляешь следы, за которыми прорастает трава, клятва, идущая на двух ногах. Долг становится сдержанным обещанием.',
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
    title: 'Échos du Bosquet Lunaire',
    description: 'Quand la pleine lune se lève sur la Forêt de Roncenoire, un ancien pacte s\'éveille. Tu portes un éclat d\'un sceau brisé qui vibre près des arbres, t\'appelant vers une couronne oubliée et une dette que le bosquet entend percevoir. Choisis des alliés, l\'honneur ou le pouvoir—mais le bosquet prend toujours son dû.',
    author: 'Daria Voronova',
    nodes: {
      'story-8743921042-1': {
        title: 'Présage Lunaire',
        narration: 'Une lune bleu-blanc grimpe au-dessus des cimes enchevêtrées de Roncenoire, et l\'éclat dans ta poche se réchauffe comme s\'il se souvenait d\'une promesse. Les hiboux se taisent. Entre les pins, un sentier étroit brille comme de l\'encre mouillée, tirant sur tes bottes. L\'éclat vibre à nouveau, répondant à quelque chose d\'ancien qui s\'agite dans les racines.',
        choices: {
          'story-8743921042-c1': {
            text: 'Suis le sentier éclairé par la lune dans le bosquet',
            description: 'L\'éclat te veut plus profond.',
          },
          'story-8743921042-c2': {
            text: 'Étudie l\'éclat du sceau et cherche des marques à proximité',
            description: 'La connaissance avant le risque.',
          },
        },
      },
      'story-8743921042-2': {
        title: 'Sentier Murmurant',
        narration: 'La brume s\'enroule à hauteur de genoux, murmurant ton nom avec des voix que tu reconnais presque. Des phalènes pâles dérivent en avant, formant des flèches qui pointent plus profond. Une odeur de fer mouillé chevauche l\'air. Quelque part au loin, une cloche sonne une fois.',
        choices: {
          'story-8743921042-c3': {
            text: 'Réponds aux murmures',
            description: 'Risque de les laisser entrer.',
          },
          'story-8743921042-c4': {
            text: 'Ignore-les et pousse vers le son de la cloche',
            description: 'Fais confiance à tes pieds, pas à tes oreilles.',
          },
        },
      },
      'story-8743921042-3': {
        title: 'Sceau Brisé',
        narration: 'L\'éclat est un croissant de verre sombre gravé de runes épineuses. Quand tu souffles dessus, le givre auréole les marques et un second motif s\'épanouit—une couronne sans porteur. Le bois répond par un grondement grave, comme s\'il se retournait dans son sommeil.',
        choices: {
          'story-8743921042-c5': {
            text: 'Presse l\'éclat contre la terre et écoute',
            description: 'Parle à l\'ancienne manière.',
          },
          'story-8743921042-c6': {
            text: 'Brise un éclat pour tracer des runes de sang',
            description: 'Le pouvoir courtise un prix.',
          },
        },
      },
      'story-8743921042-4': {
        title: 'If Ancien',
        narration: 'Un if plus vieux que tout temple s\'arque au-dessus d\'un ruisseau lent et clair. Des baies rouges luisent comme des gouttes d\'avertissement. Quand tu touches l\'écorce, l\'arbre se souvient de toi—la voix de ta grand-mère, une berceuse sur une dette envers le bosquet. L\'eau s\'éclaircit, montrant ton visage couronné d\'épines.',
        choices: {
          'story-8743921042-c7': {
            text: 'Bois du ruisseau',
            description: 'Accepte un souvenir qui n\'est pas le tien.',
          },
          'story-8743921042-c8': {
            text: 'Prends de l\'écorce d\'if pour un charme protecteur',
            description: 'Protection d\'abord, puis marche.',
          },
        },
      },
      'story-8743921042-5': {
        title: 'Pont Enveloppé de Brume',
        narration: 'Un pont de corde et de planches s\'affaisse au-dessus d\'une gorge que tu ne peux voir. En bas, quelque chose respire comme des vagues contre l\'os. Une cloche pend au premier poteau, enveloppée de soie d\'araignée, comme si la forêt elle-même l\'avait bâillonnée.',
        choices: {
          'story-8743921042-c9': {
            text: 'Sonne la cloche',
            description: 'Réveille ce qui dort pour parlementer.',
          },
          'story-8743921042-c10': {
            text: 'Traverse en silence',
            description: 'Fais confiance à ton équilibre.',
          },
        },
      },
      'story-8743921042-6': {
        title: 'Marché des Ombres',
        narration: 'Des lanternes fleurissent le long d\'une ruelle tordue où aucune ville ne devrait être. Les étals vendent de la pluie en bouteille, des lunes à dé et des noms cousus dans du ruban. Un fabricant de masques te fait signe de t\'approcher, offrant un visage tissé de ronces et de fil brillant.',
        choices: {
          'story-8743921042-c11': {
            text: 'Achète le masque de ronces avec une goutte de sang',
            description: 'Les masques trompent, mais protègent.',
          },
          'story-8743921042-c12': {
            text: 'Échange l\'éclat contre un guide',
            description: 'L\'information plutôt que les artefacts.',
          },
        },
      },
      'story-8743921042-7': {
        title: 'Lanternes Spirituelles',
        narration: 'Des perles de lumière s\'élèvent du ruisseau et spiralent autour de toi, curieuses comme des renardeaux. Elles poussent ta poitrine, tes mains, l\'éclat. Quand l\'une traverse ta paume, ta peau chante avec une douleur fine et argentée—le bosquet te juge et trouve une dette impayée.',
        choices: {
          'story-8743921042-c13': {
            text: 'Demande aux esprits de partager ce qu\'ils savent',
            description: 'Les questions humbles méritent des réponses.',
          },
          'story-8743921042-c14': {
            text: 'Commande les esprits avec la mémoire de l\'if',
            description: 'L\'autorité peut blesser.',
          },
        },
      },
      'story-8743921042-9': {
        title: 'Porte de la Crypte',
        narration: 'Des marches sculptées descendent dans la pierre rouge où l\'air froid se déverse comme de l\'eau. Au fond bâille une porte de roche nervurée et de clous de métal lunaire. L\'éclat dans ta poche tremble, impatient d\'être entier.',
        choices: {
          'story-8743921042-c17': {
            text: 'Ajuste l\'éclat à la couture de métal lunaire',
            description: 'Complète ce qui fut brisé.',
          },
          'story-8743921042-c18': {
            text: 'Refuse l\'attraction et prends l\'escalier supérieur',
            description: 'Cherche un autre chemin vers le haut.',
          },
        },
      },
      'story-8743921042-10': {
        title: 'Scribe des Échos',
        narration: 'Ton guide te mène à une terrasse de pierre où le vent écrit sur l\'ardoise. La Scribe est une femme encapuchonnée dont les cheveux bougent comme de l\'encre dans l\'eau. Elle écoute ton éclat, puis trace trois sceaux qui sentent la pluie et le fer.',
        choices: {
          'story-8743921042-c19': {
            text: 'Demande un chemin vers la couronne',
            description: 'Direct est dangereux.',
          },
          'story-8743921042-c20': {
            text: 'Demande comment briser la revendication du bosquet',
            description: 'Défais le pacte.',
          },
        },
      },
      'story-8743921042-11': {
        title: 'Rivière de Verre',
        narration: 'La rivière semble immobile, mais sa surface est une peau de couteaux reflétant une seconde lune. Un bac sans passeur attend, attaché par une corde de cheveux tressés. Tu peux traverser par confiance—ou tester le fil et saigner un tribut.',
        choices: {
          'story-8743921042-c21': {
            text: 'Monte sur le bac en attente',
            description: 'Fais confiance au rituel du bosquet.',
          },
          'story-8743921042-c22': {
            text: 'Coupe ta paume et peins l\'éclat',
            description: 'Achète un passage sûr.',
          },
        },
      },
      'story-8743921042-12': {
        title: 'Pacte d\'Épines',
        narration: 'Un arbre creux s\'ouvre comme une chapelle, des bougies vacillant dans des niches éclairées de sève. Des noms chuchotés dérivent—lignée, dettes, vœux. L\'éclat se réchauffe jusqu\'à faire mal, et tu comprends : prendre la couronne signifie porter la faim du bosquet.',
        choices: {
          'story-8743921042-c23': {
            text: 'Accepte le pacte ouvertement',
            description: 'Pouvoir avec un prix, payé en plein jour.',
          },
          'story-8743921042-c24': {
            text: 'Refuse et cherche une échappatoire',
            description: 'Il y a toujours une formulation.',
          },
        },
      },
      'story-8743921042-13': {
        title: 'Roi sans Couronne',
        narration: 'Une silhouette de racines et de vent est assise sur une chaise de pierre, son front à vif où un diadème reposait autrefois. Quand il se tourne, tu vois tes propres pommettes, les yeux de ta famille—ta lignée tenait autrefois la couronne. Le bosquet bourdonne, attendant de voir ce que tu feras de la vérité.',
        choices: {
          'story-8743921042-c25': {
            text: 'Agenouille-toi et jure de réparer ce que ta lignée a brisé',
            description: 'L\'expiation lie fortement.',
          },
          'story-8743921042-c26': {
            text: 'Défie le Roi pour transmettre le fardeau',
            description: 'Gagne la liberté ou un poids pire.',
          },
        },
      },
      'story-8743921042-14': {
        title: 'Escaliers de la Flèche Lunaire',
        narration: 'Des escaliers taillés dans la pierre blanche comme l\'os zigzaguent dans le brouillard. Chaque tournant montre la lune plus grande jusqu\'à ce qu\'elle remplisse le ciel d\'un visage froid. Ton souffle s\'emplume ; ta résolution se durcit pour égaler la montée.',
        choices: {
          'story-8743921042-c27': {
            text: 'Grimpe plus vite pour atteindre la flèche en premier',
            description: 'Saisis l\'initiative.',
          },
          'story-8743921042-c28': {
            text: 'Fais une pause pour graver une protection dans la marche',
            description: 'Protection plutôt que hâte.',
          },
        },
      },
      'story-8743921042-15': {
        title: 'Salle des Graines',
        narration: 'Une caverne s\'ouvre sous un ciel peint où des milliers de graines pendent dans de la soie d\'araignée. Chaque graine bat comme un petit cœur, chacune une forêt future attendant une promesse. La couronne repose sur un piédestal de racines tressées, pulsant au rythme de ton propre pouls.',
        choices: {
          'story-8743921042-c29': {
            text: 'Place l\'éclat dans la couronne',
            description: 'Complète l\'instrument de règne.',
          },
          'story-8743921042-c30': {
            text: 'Disperse les graines et étouffe la couronne',
            description: 'Brise le cycle pour toujours.',
          },
        },
      },
      'story-8743921042-16': {
        title: 'Duel du Miroir',
        narration: 'Sur une crête gelée, le vent se durcit en une forme qui te reflète coup pour coup. Chaque frappe résonne, secouant la neige des pins noirs. Le bosquet observe sans respirer, jugeant quel soi le servira le mieux.',
        choices: {
          'story-8743921042-c31': {
            text: 'Cède et accepte la couronne de ton reflet',
            description: 'Laisse l\'autre toi régner.',
          },
          'story-8743921042-c32': {
            text: 'Brise le miroir avec l\'éclat',
            description: 'Brise le test pour fixer tes conditions.',
          },
        },
      },
      'story-8743921042-17': {
        title: 'Prix de la Magie',
        narration: 'Le brouillard se plie en un cercle de pierres levées, chaque surface sculptée d\'offrandes—cheveux, dents, anneaux, berceuses écrites en cendres. Le bosquet ne négocie pas sans monnaie. Tu peux acheter un chemin, mais tu dois nommer ta perte.',
        choices: {
          'story-8743921042-c33': {
            text: 'Offre ta voix pour une saison',
            description: 'Le silence achète la guidance.',
          },
          'story-8743921042-c34': {
            text: 'Offre une année de ton ombre',
            description: 'Tu marcheras plus mince.',
          },
        },
      },
      'story-8743921042-18': {
        title: 'Aube Restaurée',
        narration: 'La couronne accepte l\'éclat, et le bosquet exhale un souffle parfumé de printemps. Les oiseaux s\'éveillent alors que le premier or se déverse à travers les arbres. Tu sors sans porter de métal, seulement une guirlande de pousses fraîches—intendant, pas souverain. La forêt bourdonne un oui tranquille.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: 'La Forêt Dévore',
        narration: 'Les graines éclatent dans une ruée de racines qui brisent la pierre et avalent les halls. La couronne étouffe sous une marée verte qui ne se soucie pas des rois. Des années plus tard, les voyageurs murmurent d\'un nouveau bois qui grandit trop vite, affamé comme une tempête. Ton nom est perdu sous les feuilles.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: 'Reine des Épines',
        narration: 'Tu te prosternes devant ton reflet, et il s\'avance, portant ton visage et une couronne de vigne vivante. L\'aurore ondule dans les bois du cerf observateur tandis que les racines s\'élèvent pour former un trône. Tu régneras en écoutant, pas besoin de lame—pourtant la couronne boit un peu de ton sommeil chaque nuit.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: 'Perdu Entre les Mondes',
        narration: 'Le miroir se brise, mais aussi le chemin du retour. Tu apprends les sentiers latéraux du bosquet, guidant les vagabonds vers des clairières sûres avec une lanterne de ta propre fabrication. Certaines nuits, tu te souviens presque d\'un nom différent. La lune est ta seule horloge.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: 'Le Serment d\'Argent',
        narration: 'Sur un rivage où les racines boivent la marée, tu jures de porter la loi du bosquet au-delà de ses arbres. La couronne se dissout en lumière qui enfle tes veines, froide et pure. Tu laisses des empreintes qui font pousser de l\'herbe derrière toi, un serment marchant sur deux jambes. La dette devient une promesse tenue.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'Ecos do Bosque Lunar',
    description: 'Quando a lua cheia se ergue sobre a Floresta de Espinegro, um pacto antigo desperta. Você carrega um fragmento de um selo quebrado que vibra perto das árvores, chamando-o em direção a uma coroa esquecida e uma dívida que o bosque pretende cobrar. Escolha aliados, honra ou poder—mas o bosque sempre cobra seu tributo.',
    author: 'Daria Voronova',
    nodes: {
      'story-8743921042-1': {
        title: 'Presságio Lunar',
        narration: 'Uma lua azul-branca sobe acima das copas emaranhadas de Espinegro, e o fragmento em seu bolso aquece como se lembrasse de uma promessa. As corujas silenciam. Entre os pinheiros, um caminho estreito brilha como tinta molhada, puxando suas botas. O fragmento vibra novamente, respondendo a algo antigo que se agita nas raízes.',
        choices: {
          'story-8743921042-c1': {
            text: 'Siga o caminho iluminado pela lua para o bosque',
            description: 'O fragmento quer você mais fundo.',
          },
          'story-8743921042-c2': {
            text: 'Estude o fragmento do selo e procure marcas próximas',
            description: 'Conhecimento antes do risco.',
          },
        },
      },
      'story-8743921042-2': {
        title: 'Caminho Sussurrante',
        narration: 'A névoa enrola-se na altura dos joelhos, sussurrando seu nome com vozes que você quase reconhece. Mariposas pálidas flutuam à frente, formando flechas que apontam mais fundo. Um cheiro de ferro molhado cavalga o ar. Em algum lugar distante, um sino toca uma vez.',
        choices: {
          'story-8743921042-c3': {
            text: 'Responda aos sussurros',
            description: 'Arrisque deixá-los entrar.',
          },
          'story-8743921042-c4': {
            text: 'Ignore-os e avance em direção ao som do sino',
            description: 'Confie em seus pés, não em seus ouvidos.',
          },
        },
      },
      'story-8743921042-3': {
        title: 'Selo Estilhaçado',
        narration: 'O fragmento é um crescente de vidro escuro gravado com runas espinhosas. Quando você sopra sobre ele, a geada auréola as marcas e um segundo padrão floresce—uma coroa sem portador. A floresta responde com um gemido grave, como se virasse no sono.',
        choices: {
          'story-8743921042-c5': {
            text: 'Pressione o fragmento contra a terra e escute',
            description: 'Fale à maneira antiga.',
          },
          'story-8743921042-c6': {
            text: 'Quebre uma lasca do fragmento para desenhar runas de sangue',
            description: 'O poder corteja um preço.',
          },
        },
      },
      'story-8743921042-4': {
        title: 'Teixo Ancião',
        narration: 'Um teixo mais velho que qualquer templo arqueia-se sobre um riacho lento e claro. Bagas vermelhas brilham como gotas de advertência. Quando você toca a casca, a árvore se lembra de você—a voz de sua avó, uma canção de ninar sobre uma dívida ao bosque. A água clareia, mostrando seu rosto coroado com espinhos.',
        choices: {
          'story-8743921042-c7': {
            text: 'Beba do riacho',
            description: 'Aceite uma memória que não é sua.',
          },
          'story-8743921042-c8': {
            text: 'Pegue casca de teixo para um amuleto protetor',
            description: 'Proteção primeiro, depois caminhe.',
          },
        },
      },
      'story-8743921042-5': {
        title: 'Ponte Envolta em Névoa',
        narration: 'Uma ponte de corda e tábuas pende sobre um desfiladeiro que você não consegue ver. Lá embaixo, algo respira como ondas contra osso. Um sino pende do primeiro poste, envolto em seda de aranha, como se a floresta mesma o tivesse amordaçado.',
        choices: {
          'story-8743921042-c9': {
            text: 'Toque o sino',
            description: 'Acorde o que dorme para parlamentar.',
          },
          'story-8743921042-c10': {
            text: 'Atravesse em silêncio',
            description: 'Confie em seu equilíbrio.',
          },
        },
      },
      'story-8743921042-6': {
        title: 'Mercado das Sombras',
        narration: 'Lanternas florescem ao longo de uma viela tortuosa onde nenhuma cidade deveria estar. Barracas vendem chuva engarrafada, luas de dedal e nomes costurados em fitas. Um fabricante de máscaras acena para você se aproximar, oferecendo um rosto tecido de sarças e fio brilhante.',
        choices: {
          'story-8743921042-c11': {
            text: 'Compre a máscara de sarças com uma gota de sangue',
            description: 'Máscaras enganam, mas protegem.',
          },
          'story-8743921042-c12': {
            text: 'Troque o fragmento por um guia',
            description: 'Informação sobre artefatos.',
          },
        },
      },
      'story-8743921042-7': {
        title: 'Lanternas Espirituais',
        narration: 'Contas de luz sobem do riacho e espiralam ao seu redor, curiosas como filhotes de raposa. Elas empurram seu peito, suas mãos, o fragmento. Quando uma passa através de sua palma, sua pele canta com uma dor fina e prateada—o bosque julga você e encontra uma dívida não paga.',
        choices: {
          'story-8743921042-c13': {
            text: 'Peça aos espíritos para compartilhar o que sabem',
            description: 'Perguntas humildes merecem respostas.',
          },
          'story-8743921042-c14': {
            text: 'Comande os espíritos com a memória do teixo',
            description: 'Autoridade pode machucar.',
          },
        },
      },
      'story-8743921042-9': {
        title: 'Portão da Cripta',
        narration: 'Degraus esculpidos descem em pedra vermelha onde ar frio derrama como água. No fundo boceja uma porta de rocha nervurada e pregos de metal lunar. O fragmento em seu bolso treme, ansioso para estar inteiro.',
        choices: {
          'story-8743921042-c17': {
            text: 'Encaixe o fragmento na costura de metal lunar',
            description: 'Complete o que foi quebrado.',
          },
          'story-8743921042-c18': {
            text: 'Recuse o chamado e pegue a escada superior',
            description: 'Procure outro caminho para cima.',
          },
        },
      },
      'story-8743921042-10': {
        title: 'Escriba dos Ecos',
        narration: 'Seu guia leva você a um terraço de pedra onde o vento escreve na ardósia. A Escriba é uma mulher encapuzada cujo cabelo se move como tinta na água. Ela ouve seu fragmento, então desenha três selos que cheiram a chuva e ferro.',
        choices: {
          'story-8743921042-c19': {
            text: 'Pergunte sobre um caminho para a coroa',
            description: 'Direto é perigoso.',
          },
          'story-8743921042-c20': {
            text: 'Pergunte como quebrar a reivindicação do bosque',
            description: 'Desfaça o pacto.',
          },
        },
      },
      'story-8743921042-11': {
        title: 'Rio de Vidro',
        narration: 'O rio parece imóvel, mas sua superfície é uma pele de facas refletindo uma segunda lua. Uma balsa sem balseiro espera, amarrada por uma corda de cabelos trançados. Você pode atravessar por confiança—ou testar o fio e sangrar um tributo.',
        choices: {
          'story-8743921042-c21': {
            text: 'Embarque na balsa em espera',
            description: 'Confie no ritual do bosque.',
          },
          'story-8743921042-c22': {
            text: 'Corte sua palma e pinte o fragmento',
            description: 'Compre passagem segura.',
          },
        },
      },
      'story-8743921042-12': {
        title: 'Pacto de Espinhos',
        narration: 'Uma árvore oca abre-se como uma capela, velas tremulando em nichos iluminados por seiva. Nomes sussurrados flutuam—linhagem, dívidas, votos. O fragmento aquece até doer, e você compreende: tomar a coroa significa vestir a fome do bosque.',
        choices: {
          'story-8743921042-c23': {
            text: 'Aceite o pacto abertamente',
            description: 'Poder com um preço, pago à luz do dia.',
          },
          'story-8743921042-c24': {
            text: 'Recuse e procure uma brecha',
            description: 'Sempre há uma formulação.',
          },
        },
      },
      'story-8743921042-13': {
        title: 'Rei sem Coroa',
        narration: 'Uma figura de raízes e vento senta-se sobre uma cadeira de pedra, sua testa em carne viva onde um diadema outrora repousou. Quando ele se vira, você vê suas próprias maçãs do rosto, os olhos de sua família—sua linhagem uma vez deteve a coroa. O bosque zumbe, esperando ver o que você fará da verdade.',
        choices: {
          'story-8743921042-c25': {
            text: 'Ajoelhe e jure consertar o que sua linhagem quebrou',
            description: 'Expiação liga fortemente.',
          },
          'story-8743921042-c26': {
            text: 'Desafie o Rei a passar o fardo',
            description: 'Ganhe liberdade ou peso pior.',
          },
        },
      },
      'story-8743921042-14': {
        title: 'Escadas da Agulha Lunar',
        narration: 'Escadas esculpidas em pedra branca como osso ziguezagueiam na névoa. Cada curva mostra a lua maior até que ela preencha o céu com um rosto frio. Sua respiração empluma; sua resolução endurece para igualar a subida.',
        choices: {
          'story-8743921042-c27': {
            text: 'Suba mais rápido para alcançar a agulha primeiro',
            description: 'Tome a iniciativa.',
          },
          'story-8743921042-c28': {
            text: 'Pause para gravar uma proteção no degrau',
            description: 'Proteção sobre pressa.',
          },
        },
      },
      'story-8743921042-15': {
        title: 'Salão das Sementes',
        narration: 'Uma caverna abre-se sob um céu pintado onde milhares de sementes pendem em seda de teia de aranha. Cada semente bate como um pequeno coração, cada uma uma floresta futura esperando por uma promessa. A coroa repousa sobre um pedestal de raízes entrelaçadas, pulsando em sincronia com seu próprio pulso.',
        choices: {
          'story-8743921042-c29': {
            text: 'Coloque o fragmento na coroa',
            description: 'Complete o instrumento de governo.',
          },
          'story-8743921042-c30': {
            text: 'Espalhe as sementes e sufoque a coroa',
            description: 'Quebre o ciclo para sempre.',
          },
        },
      },
      'story-8743921042-16': {
        title: 'Duelo do Espelho',
        narration: 'Em um cume congelado, o vento endurece em uma forma que o espelha golpe por golpe. Cada golpe ressoa, sacudindo neve de pinheiros negros. O bosque observa sem respirar, julgando qual eu o servirá melhor.',
        choices: {
          'story-8743921042-c31': {
            text: 'Ceda e aceite a coroa de seu reflexo',
            description: 'Deixe o outro você governar.',
          },
          'story-8743921042-c32': {
            text: 'Despedace o espelho com o fragmento',
            description: 'Quebre o teste para definir seus termos.',
          },
        },
      },
      'story-8743921042-17': {
        title: 'Preço da Magia',
        narration: 'A névoa dobra-se em um círculo de pedras erguidas, cada superfície esculpida com oferendas—cabelos, dentes, anéis, canções de ninar escritas em cinzas. O bosque não negocia sem moeda. Você pode comprar um caminho, mas deve nomear sua perda.',
        choices: {
          'story-8743921042-c33': {
            text: 'Ofereça sua voz por uma estação',
            description: 'Silêncio compra orientação.',
          },
          'story-8743921042-c34': {
            text: 'Ofereça um ano de sua sombra',
            description: 'Você caminhará mais fino.',
          },
        },
      },
      'story-8743921042-18': {
        title: 'Amanhecer Restaurado',
        narration: 'A coroa aceita o fragmento, e o bosque exala uma respiração perfumada de primavera. Pássaros despertam quando o primeiro ouro derrama através das árvores. Você sai sem vestir metal, apenas uma guirlanda de brotos frescos—administrador, não soberano. A floresta murmura um sim tranquilo.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: 'Floresta Devora',
        narration: 'Sementes estouram em uma enxurrada de raízes que racham pedra e engolem salões. A coroa sufoca sob uma maré verde que não se importa com reis. Anos depois, viajantes sussurram de uma nova floresta que cresce rápido demais, faminta como uma tempestade. Seu nome está perdido sob as folhas.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: 'Rainha dos Espinhos',
        narration: 'Você se curva ao seu reflexo, e ele avança, vestindo seu rosto e uma coroa de videira viva. A aurora ondula nos chifres do veado observador enquanto raízes sobem para formar um trono. Você governará ouvindo, nenhuma lâmina necessária—mas a coroa bebe um pouco de seu sono a cada noite.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: 'Perdido Entre Mundos',
        narration: 'O espelho se despedaça, mas também o caminho de casa. Você aprende as trilhas laterais do bosque, guiando errantes para clareiras seguras com uma lanterna de sua própria criação. Algumas noites você quase se lembra de um nome diferente. A lua é seu único relógio.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: 'O Juramento de Prata',
        narration: 'Em uma praia onde raízes bebem a maré, você jura carregar a lei do bosque além de suas árvores. A coroa dissolve-se em luz que permeia suas veias, fria e limpa. Você deixa pegadas que brotam grama atrás de você, um juramento caminhando sobre duas pernas. A dívida torna-se uma promessa cumprida.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '月光の森の残響',
    description: '満月がブラックブライアの森に昇る時、古い契約が目覚める。あなたは壊れた印章の欠片を持っており、それは木々の近くで振動し、忘れられた王冠と森が回収しようとする負債へとあなたを呼んでいる。同盟者、名誉、または力を選べ――だが森は常にその報いを取る。',
    author: 'ダリア・ヴォロノワ',
    nodes: {
      'story-8743921042-1': {
        title: '月光の前兆',
        narration: '青白い月がブラックブライアの絡み合った梢の上に昇り、ポケットの中の欠片が約束を思い出すかのように温まる。フクロウたちは沈黙する。松の木の間に、濡れたインクのように光る細い道が現れ、あなたのブーツを引っ張る。欠片が再び震え、根に眠る古いものに応答する。',
        choices: {
          'story-8743921042-c1': {
            text: '月明かりに照らされた道を森へ進む',
            description: '欠片はあなたをより深くへ望んでいる。',
          },
          'story-8743921042-c2': {
            text: '印章の欠片を調べ、近くの印を探す',
            description: 'リスクの前に知識を。',
          },
        },
      },
      'story-8743921042-2': {
        title: '囁く道',
        narration: '霧が膝の高さで渦を巻き、ほとんど知っているような声であなたの名前を囁く。淡い蛾が前方に漂い、より深くを指す矢を形成する。湿った鉄の匂いが空気に乗る。遠くのどこかで、鐘が一度鳴る。',
        choices: {
          'story-8743921042-c3': {
            text: '囁きに答える',
            description: 'それらを中に入れるリスクを冒す。',
          },
          'story-8743921042-c4': {
            text: '無視して鐘の音へ向かう',
            description: '耳ではなく足を信じる。',
          },
        },
      },
      'story-8743921042-3': {
        title: '砕けた印章',
        narration: '欠片は棘のあるルーン文字が刻まれた暗いガラスの三日月である。息を吹きかけると、霜が印を縁取り、第二の模様が花開く――持ち主のいない王冠。森が低いうめき声で応答し、眠りの中で寝返りを打つかのよう。',
        choices: {
          'story-8743921042-c5': {
            text: '欠片を大地に押し付けて聞く',
            description: '古い方法で語りかける。',
          },
          'story-8743921042-c6': {
            text: '欠片から破片を割って血のルーン文字を描く',
            description: '力は代償を求める。',
          },
        },
      },
      'story-8743921042-4': {
        title: '古いイチイの木',
        narration: 'どの寺院よりも古いイチイの木が、ゆっくりと澄んだ小川の上にアーチを描く。赤い実が警告の滴のように輝く。樹皮に触れると、木があなたを思い出す――祖母の声、森への負債についての子守唄。水が明るくなり、棘で冠されたあなたの顔を映す。',
        choices: {
          'story-8743921042-c7': {
            text: '小川から水を飲む',
            description: '自分のものではない記憶を受け入れる。',
          },
          'story-8743921042-c8': {
            text: 'イチイの樹皮を取って守りの護符にする',
            description: 'まず守り、それから歩く。',
          },
        },
      },
      'story-8743921042-5': {
        title: '霧に包まれた橋',
        narration: 'ロープと板の橋が、見えない峡谷の上にたるんでいる。下では、何かが骨に打ち寄せる波のように呼吸している。最初の柱に鐘がかかり、クモの糸に包まれている。まるで森自体がそれを縛り上げたかのよう。',
        choices: {
          'story-8743921042-c9': {
            text: '鐘を鳴らす',
            description: '眠るものを起こして交渉する。',
          },
          'story-8743921042-c10': {
            text: '沈黙のまま渡る',
            description: 'バランス感覚を信じる。',
          },
        },
      },
      'story-8743921042-6': {
        title: '影の市場',
        narration: '都市があるはずのない曲がった小道に沿って提灯が花開く。露店は瓶詰めの雨、指ぬきほどの月、リボンに縫い付けられた名前を売っている。仮面職人がより近くへと手招きし、茨と輝く糸で織られた顔を提供する。',
        choices: {
          'story-8743921042-c11': {
            text: '血の一滴で茨の仮面を買う',
            description: '仮面は欺くが、守る。',
          },
          'story-8743921042-c12': {
            text: '欠片を案内人と交換する',
            description: '遺物より情報を。',
          },
        },
      },
      'story-8743921042-7': {
        title: '霊の提灯',
        narration: '光の玉が小川から立ち上り、子狐のように好奇心旺盛にあなたの周りを渦巻く。それらはあなたの胸、手、欠片を突く。一つがあなたの手のひらを通過すると、あなたの肌は細く銀色の痛みで歌う――森があなたを裁き、未払いの負債を見つける。',
        choices: {
          'story-8743921042-c13': {
            text: '霊たちに知っていることを共有するよう頼む',
            description: '謙虚な質問は答えを得る。',
          },
          'story-8743921042-c14': {
            text: 'イチイの記憶で霊たちに命令する',
            description: '権威は傷つけることがある。',
          },
        },
      },
      'story-8743921042-9': {
        title: '地下墓地の門',
        narration: '彫られた階段が赤い石へと下り、冷たい空気が水のように流れ出る。底には肋骨状の岩と月の金属の鋲がある扉が口を開けている。ポケットの欠片が震え、完全になることを切望している。',
        choices: {
          'story-8743921042-c17': {
            text: '欠片を月の金属の継ぎ目に合わせる',
            description: '壊れたものを完成させる。',
          },
          'story-8743921042-c18': {
            text: '引力を拒み、上の階段を取る',
            description: '上への別の道を探す。',
          },
        },
      },
      'story-8743921042-10': {
        title: '反響の書記',
        narration: '案内人があなたを石のテラスへ連れて行き、そこでは風がスレートに文字を書く。書記はフードをかぶった女性で、その髪は水中のインクのように動く。彼女はあなたの欠片に耳を傾け、雨と鉄の香りがする三つの印章を描く。',
        choices: {
          'story-8743921042-c19': {
            text: '王冠への道を尋ねる',
            description: '直接的なのは危険。',
          },
          'story-8743921042-c20': {
            text: '森の要求を破る方法を尋ねる',
            description: '契約を解く。',
          },
        },
      },
      'story-8743921042-11': {
        title: 'ガラスの川',
        narration: '川は静かに見えるが、その表面は第二の月を映すナイフの皮膚である。船頭のいない渡し船が待っており、編まれた髪のロープで縛られている。信頼して渡るか――それとも刃を試して貢物を流血するか。',
        choices: {
          'story-8743921042-c21': {
            text: '待っている渡し船に乗る',
            description: '森の儀式を信じる。',
          },
          'story-8743921042-c22': {
            text: '手のひらを切って欠片を塗る',
            description: '安全な通行を購入する。',
          },
        },
      },
      'story-8743921042-12': {
        title: '棘の契約',
        narration: '空洞の木が礼拝堂のように開き、樹液で照らされた壁龕でろうそくが揺れる。囁かれた名前が漂う――血統、負債、誓い。欠片が痛むほど温まり、あなたは理解する。王冠を取ることは森の飢えを身に着けることを意味する。',
        choices: {
          'story-8743921042-c23': {
            text: '契約を公然と受け入れる',
            description: '代償を伴う力、日の光の下で支払われる。',
          },
          'story-8743921042-c24': {
            text: '拒否して抜け穴を探す',
            description: '常に言葉遣いがある。',
          },
        },
      },
      'story-8743921042-13': {
        title: '冠なき王',
        narration: '根と風の姿が石の椅子に座っており、かつて王冠があった額は生々しい。彼が振り向くと、あなた自身の頬骨、家族の目が見える――あなたの血統はかつて王冠を持っていた。森が唸り、あなたが真実で何をするかを待っている。',
        choices: {
          'story-8743921042-c25': {
            text: '跪いて血統が壊したものを修復すると誓う',
            description: '贖罪は強く結びつく。',
          },
          'story-8743921042-c26': {
            text: '王に挑戦して負担を渡す',
            description: '自由またはより重い重荷を勝ち取る。',
          },
        },
      },
      'story-8743921042-14': {
        title: '月の尖塔の階段',
        narration: '骨のように白い石から削り出された階段が霧の中をジグザグに進む。曲がるたびに月が大きくなり、冷たい顔で空を満たすまで。あなたの息は羽毛のよう。決意は登りに合わせて硬くなる。',
        choices: {
          'story-8743921042-c27': {
            text: 'より速く登って尖塔に最初に到達する',
            description: '主導権を握る。',
          },
          'story-8743921042-c28': {
            text: '一時停止して段に護りを刻む',
            description: '急ぐより保護を。',
          },
        },
      },
      'story-8743921042-15': {
        title: '種子の間',
        narration: '描かれた空の下に洞窟が開き、何千もの種子がクモの糸に吊るされている。それぞれの種子は小さな心臓のように鼓動し、それぞれが約束を待つ未来の森。王冠は編まれた根の台座の上にあり、あなた自身の脈拍と同じリズムで脈打つ。',
        choices: {
          'story-8743921042-c29': {
            text: '欠片を王冠に入れる',
            description: '統治の道具を完成させる。',
          },
          'story-8743921042-c30': {
            text: '種子を散らして王冠を窒息させる',
            description: '永遠にサイクルを破る。',
          },
        },
      },
      'story-8743921042-16': {
        title: '鏡の決闘',
        narration: '凍った尾根で、風があなたを一撃一撃鏡のように映す形に硬化する。一撃ごとに響き、黒い松から雪を振り落とす。森は息をせずに見守り、どちらの自己が最もよく仕えるかを判断する。',
        choices: {
          'story-8743921042-c31': {
            text: '屈して映像の王冠を受け入れる',
            description: 'もう一人の自分に統治させる。',
          },
          'story-8743921042-c32': {
            text: '欠片で鏡を砕く',
            description: '試練を破って自分の条件を設定する。',
          },
        },
      },
      'story-8743921042-17': {
        title: '魔法の代償',
        narration: '霧が立石の円に折り畳まれ、すべての表面に供物が彫られている――髪、歯、指輪、灰で書かれた子守唄。森は硬貨なしで交渉しない。道を買うことはできるが、あなたの損失を名付けなければならない。',
        choices: {
          'story-8743921042-c33': {
            text: '一季節の間、声を差し出す',
            description: '沈黙が導きを買う。',
          },
          'story-8743921042-c34': {
            text: '影から一年を差し出す',
            description: 'あなたはより薄く歩くだろう。',
          },
        },
      },
      'story-8743921042-18': {
        title: '夜明けの回復',
        narration: '王冠が欠片を受け入れ、森が春の香りの息を吐く。最初の金色が木々を通って流れ出ると、鳥たちが目覚める。あなたは金属を身に着けず、新鮮な芽の花輪だけを付けて外に出る――統治者ではなく管理者。森は静かなイエスを唸る。',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: '森は飲み込む',
        narration: '種子が石を砕き広間を飲み込む根の突進の中で破裂する。王冠は王を気にしない緑の波の下で窒息する。数年後、旅人たちは嵐のように飢えた、速すぎる成長の新しい森について囁く。あなたの名前は葉の下に失われた。',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: '棘の女王',
        narration: 'あなたは映像に頭を下げ、それが前進し、あなたの顔と生きた蔓の王冠を身に着ける。見守る鹿の角にオーロラが波打ち、根が上昇して玉座を形成する。あなたは聞くことで統治する、刃は不要――しかし王冠は毎晩あなたの眠りから少しずつ飲む。',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: '世界の間に迷う',
        narration: '鏡が砕けるが、家への道も砕ける。あなたは森の脇道を学び、自作の提灯で放浪者を安全な空き地へ導く。いくつかの夜、あなたはほとんど別の名前を思い出す。月があなたの唯一の時計。',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: '銀の誓い',
        narration: '根が潮を飲む岸辺で、あなたは森の法を木々を越えて運ぶと誓う。王冠が冷たく純粋な光に溶けてあなたの静脈を通る。あなたはあなたの後ろに草が芽生える足跡を残す、二本の足で歩く誓い。負債は守られた約束となる。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '月光林地的回响',
    description: '当满月升起在黑荆森林之上时，一个古老的契约苏醒了。你携带着一块破碎印章的碎片，它在树木附近嗡鸣，呼唤你走向一顶被遗忘的王冠和一笔林地打算收取的债务。选择盟友、荣誉或权力——但林地总会索取它的代价。',
    author: '达里亚·沃罗诺娃',
    nodes: {
      'story-8743921042-1': {
        title: '月光预兆',
        narration: '蓝白色的月亮升起在黑荆交织的树冠之上，你口袋里的碎片变暖，仿佛记起了一个承诺。猫头鹰们沉默了。松树之间，一条狭窄的小径像湿墨水一样闪闪发光，拉扯着你的靴子。碎片再次震动，回应着在根部搅动的古老事物。',
        choices: {
          'story-8743921042-c1': {
            text: '沿着月光照耀的小径进入林地',
            description: '碎片想让你走得更深。',
          },
          'story-8743921042-c2': {
            text: '研究印章碎片并寻找附近的标记',
            description: '风险之前先获取知识。',
          },
        },
      },
      'story-8743921042-2': {
        title: '低语之路',
        narration: '雾气在膝盖高度盘旋，用你几乎认识的声音低语着你的名字。苍白的飞蛾在前方飘浮，形成指向更深处的箭头。潮湿铁的气味飘荡在空气中。在遥远的某处，钟声响了一次。',
        choices: {
          'story-8743921042-c3': {
            text: '回应低语',
            description: '冒险让它们进入。',
          },
          'story-8743921042-c4': {
            text: '忽视它们，向钟声前进',
            description: '相信你的脚，而不是你的耳朵。',
          },
        },
      },
      'story-8743921042-3': {
        title: '破碎的印章',
        narration: '碎片是一块刻有荆棘符文的深色玻璃新月。当你对它呼气时，霜冻环绕着标记，第二个图案绽放——一顶无人佩戴的王冠。树林以低沉的呻吟回应，仿佛在睡梦中翻身。',
        choices: {
          'story-8743921042-c5': {
            text: '将碎片压在地上并倾听',
            description: '用古老的方式说话。',
          },
          'story-8743921042-c6': {
            text: '从碎片上折断一片碎屑来绘制血符文',
            description: '力量需要代价。',
          },
        },
      },
      'story-8743921042-4': {
        title: '古老的紫杉',
        narration: '一棵比任何寺庙都古老的紫杉树拱形地横跨一条缓慢清澈的小溪。红色的浆果像警告的水滴一样闪闪发光。当你触摸树皮时，树记起了你——你祖母的声音，一首关于对林地欠债的摇篮曲。水变得明亮，显示出你戴着荆棘王冠的脸。',
        choices: {
          'story-8743921042-c7': {
            text: '从小溪中饮水',
            description: '接受不属于你的记忆。',
          },
          'story-8743921042-c8': {
            text: '取紫杉树皮做护身符',
            description: '先防护，然后行走。',
          },
        },
      },
      'story-8743921042-5': {
        title: '雾锁之桥',
        narration: '一座绳索和木板桥悬挂在你看不见的峡谷上方。下面，有什么东西像海浪拍打骨头一样呼吸。一个钟挂在第一根柱子上，用蜘蛛丝包裹着，仿佛森林本身堵住了它的嘴。',
        choices: {
          'story-8743921042-c9': {
            text: '敲响钟声',
            description: '唤醒沉睡者以谈判。',
          },
          'story-8743921042-c10': {
            text: '静默地穿越',
            description: '相信你的平衡感。',
          },
        },
      },
      'story-8743921042-6': {
        title: '影子市场',
        narration: '灯笼沿着不应该有城市的弯曲小巷绽放。摊位出售瓶装雨水、顶针般的月亮和缝在丝带上的名字。一位面具制作者向你招手靠近，提供用荆棘和明亮丝线编织的面孔。',
        choices: {
          'story-8743921042-c11': {
            text: '用一滴血购买荆棘面具',
            description: '面具欺骗，但保护。',
          },
          'story-8743921042-c12': {
            text: '用碎片交换向导',
            description: '信息胜过文物。',
          },
        },
      },
      'story-8743921042-7': {
        title: '灵魂灯笼',
        narration: '光珠从溪流中升起，像小狐狸一样好奇地在你周围盘旋。它们推着你的胸膛、你的手、碎片。当一个穿过你的手掌时，你的皮肤用细薄的银色疼痛歌唱——林地审判你并发现了未偿还的债务。',
        choices: {
          'story-8743921042-c13': {
            text: '请求灵魂分享它们所知道的',
            description: '谦卑的问题值得回答。',
          },
          'story-8743921042-c14': {
            text: '用紫杉的记忆命令灵魂',
            description: '权威可能会伤害。',
          },
        },
      },
      'story-8743921042-9': {
        title: '地下室之门',
        narration: '雕刻的台阶下降到红色石头中，冷空气像水一样倾泻而出。底部张开一扇肋状岩石和月金属铆钉的门。你口袋里的碎片颤抖着，渴望变得完整。',
        choices: {
          'story-8743921042-c17': {
            text: '将碎片嵌入月金属接缝',
            description: '完成破碎之物。',
          },
          'story-8743921042-c18': {
            text: '拒绝拉力并走上层楼梯',
            description: '寻找另一条向上的路。',
          },
        },
      },
      'story-8743921042-10': {
        title: '回响书记员',
        narration: '你的向导带你到一个石制露台，风在石板上书写。书记员是一位戴头巾的女人，她的头发像水中的墨水一样移动。她倾听你的碎片，然后画出三个闻起来像雨和铁的印章。',
        choices: {
          'story-8743921042-c19': {
            text: '询问通往王冠的路径',
            description: '直接是危险的。',
          },
          'story-8743921042-c20': {
            text: '询问如何打破林地的索求',
            description: '撤销契约。',
          },
        },
      },
      'story-8743921042-11': {
        title: '玻璃之河',
        narration: '河流看起来静止不动，但它的表面是反射第二个月亮的刀刃之皮。一艘无船夫的渡船在等待，用编织的头发绳索绑着。你可以通过信任过河——或者测试刀刃并流血作为贡品。',
        choices: {
          'story-8743921042-c21': {
            text: '登上等待的渡船',
            description: '相信林地的仪式。',
          },
          'story-8743921042-c22': {
            text: '割开手掌并涂抹碎片',
            description: '购买安全通行。',
          },
        },
      },
      'story-8743921042-12': {
        title: '荆棘契约',
        narration: '一棵空心树像教堂一样打开，蜡烛在树汁照明的壁龛中摇曳。低语的名字飘过——血统、债务、誓言。碎片变热到疼痛，你明白了：拿走王冠意味着穿上林地的饥饿。',
        choices: {
          'story-8743921042-c23': {
            text: '公开接受契约',
            description: '付出代价的权力，在光天化日下支付。',
          },
          'story-8743921042-c24': {
            text: '拒绝并寻找漏洞',
            description: '总有措辞。',
          },
        },
      },
      'story-8743921042-13': {
        title: '无冠之王',
        narration: '一个由根和风组成的身影坐在石椅上，他的额头在曾经戴着王冠的地方鲜血淋漓。当他转身时，你看到了自己的颧骨，家族的眼睛——你的血统曾经持有王冠。林地嗡嗡作响，等待看你如何对待真相。',
        choices: {
          'story-8743921042-c25': {
            text: '跪下并发誓修复你血统打破的东西',
            description: '赎罪紧紧束缚。',
          },
          'story-8743921042-c26': {
            text: '挑战国王传递负担',
            description: '赢得自由或更重的负担。',
          },
        },
      },
      'story-8743921042-14': {
        title: '月尖塔阶梯',
        narration: '从骨白石头凿出的阶梯在雾中曲折而上。每一个转弯都显示月亮更大，直到它用冷面孔填满天空。你的呼吸羽化；你的决心变硬以匹配攀登。',
        choices: {
          'story-8743921042-c27': {
            text: '爬得更快以首先到达尖塔',
            description: '抓住主动权。',
          },
          'story-8743921042-c28': {
            text: '暂停在台阶上刻护身符',
            description: '保护胜过匆忙。',
          },
        },
      },
      'story-8743921042-15': {
        title: '种子大厅',
        narration: '一个洞穴在彩绘的天空下打开，数千颗种子悬挂在蜘蛛丝中。每颗种子都像一颗小心脏一样跳动，每一颗都是等待承诺的未来森林。王冠放在编织根的基座上，与你自己的脉搏同步跳动。',
        choices: {
          'story-8743921042-c29': {
            text: '将碎片放入王冠',
            description: '完成统治的工具。',
          },
          'story-8743921042-c30': {
            text: '撒播种子并窒息王冠',
            description: '永远打破循环。',
          },
        },
      },
      'story-8743921042-16': {
        title: '镜中决斗',
        narration: '在冰冻的山脊上，风硬化成一个一击接一击地映照你的形状。每一击都响起，震落黑松的雪。林地屏住呼吸观看，判断哪个自我最能为它服务。',
        choices: {
          'story-8743921042-c31': {
            text: '屈服并接受你倒影的王冠',
            description: '让另一个你统治。',
          },
          'story-8743921042-c32': {
            text: '用碎片打碎镜子',
            description: '打破测试以设定你的条件。',
          },
        },
      },
      'story-8743921042-17': {
        title: '魔法的代价',
        narration: '雾折叠成一圈立石，每个表面都刻有祭品——头发、牙齿、戒指、用灰烬写的摇篮曲。林地不会在没有硬币的情况下交易。你可以购买一条路，但你必须说出你的损失。',
        choices: {
          'story-8743921042-c33': {
            text: '提供你一个季节的声音',
            description: '沉默购买指引。',
          },
          'story-8743921042-c34': {
            text: '从你的影子中提供一年',
            description: '你会走得更瘦。',
          },
        },
      },
      'story-8743921042-18': {
        title: '黎明重现',
        narration: '王冠接受了碎片，林地呼出带有春天香气的呼吸。当第一缕金光穿过树木时，鸟儿醒来。你走出去时没有戴金属，只有新鲜嫩芽的花环——管家，而非君主。森林低声说着平静的是。',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: '森林吞噬',
        narration: '种子在根的冲击中爆裂，它们破碎石头并吞没大厅。王冠在不在乎国王的绿色潮水下窒息。多年后，旅行者低语着一个生长得太快的新森林，像风暴一样饥饿。你的名字在树叶下丢失了。',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: '荆棘女王',
        narration: '你向你的倒影鞠躬，它走上前来，戴着你的脸和活藤蔓的王冠。极光在守望鹿的鹿角中波动，而根升起形成王座。你将通过倾听来统治，不需要刀刃——但王冠每晚都会从你的睡眠中喝一点。',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: '迷失于世界之间',
        narration: '镜子破碎了，但回家的路也破碎了。你学习林地的小径，用自己制作的灯笼引导流浪者到安全的空地。有些夜晚你几乎记起一个不同的名字。月亮是你唯一的时钟。',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: '银色誓言',
        narration: '在根喝潮水的岸边，你发誓要将林地的法则带到树木之外。王冠溶解成贯穿你血管的光，寒冷而纯净。你留下脚印，身后长出草，一个用两条腿行走的誓言。债务变成了守信的承诺。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '달빛 숲의 메아리',
    description: '블랙브라이어 숲 위로 보름달이 떠오를 때, 오래된 계약이 깨어난다. 당신은 나무 근처에서 울리는 부서진 인장의 조각을 지니고 있으며, 그것은 잊혀진 왕관과 숲이 거두려는 빚을 향해 당신을 부른다. 동맹, 명예 또는 힘을 선택하라—하지만 숲은 항상 그 대가를 받아간다.',
    author: '다리아 보로노바',
    nodes: {
      'story-8743921042-1': {
        title: '달빛의 전조',
        narration: '푸른빛 흰 달이 블랙브라이어의 얽힌 나무 꼭대기 위로 오르고, 주머니 속 조각이 약속을 기억하듯 따뜻해진다. 부엉이들이 침묵한다. 소나무 사이로 젖은 잉크처럼 빛나는 좁은 길이 나타나 당신의 부츠를 끌어당긴다. 조각이 다시 떨리며 뿌리 속에서 꿈틀거리는 오래된 무언가에 응답한다.',
        choices: {
          'story-8743921042-c1': {
            text: '달빛에 비친 길을 따라 숲으로 들어간다',
            description: '조각이 당신을 더 깊이 원한다.',
          },
          'story-8743921042-c2': {
            text: '인장 조각을 조사하고 근처의 표시를 찾는다',
            description: '위험보다 지식을 먼저.',
          },
        },
      },
      'story-8743921042-2': {
        title: '속삭이는 길',
        narration: '안개가 무릎 높이로 소용돌이치며 거의 알 것 같은 목소리로 당신의 이름을 속삭인다. 창백한 나방들이 앞으로 떠다니며 더 깊은 곳을 가리키는 화살을 형성한다. 젖은 철의 냄새가 공기를 타고 온다. 저 멀리 어딘가에서 종이 한 번 울린다.',
        choices: {
          'story-8743921042-c3': {
            text: '속삭임에 대답한다',
            description: '그것들을 들여보내는 위험을 감수한다.',
          },
          'story-8743921042-c4': {
            text: '무시하고 종소리를 향해 나아간다',
            description: '귀가 아닌 발을 믿는다.',
          },
        },
      },
      'story-8743921042-3': {
        title: '부서진 인장',
        narration: '조각은 가시 같은 룬 문자가 새겨진 어두운 유리의 초승달이다. 그 위로 숨을 불면 서리가 표시를 테두리 짓고 두 번째 패턴이 피어난다—주인 없는 왕관. 숲이 낮은 신음 소리로 응답하며, 마치 잠 속에서 몸을 뒤척이는 것 같다.',
        choices: {
          'story-8743921042-c5': {
            text: '조각을 땅에 누르고 듣는다',
            description: '옛 방식으로 말한다.',
          },
          'story-8743921042-c6': {
            text: '조각에서 파편을 떼어 피의 룬 문자를 그린다',
            description: '힘은 대가를 요구한다.',
          },
        },
      },
      'story-8743921042-4': {
        title: '고대의 주목나무',
        narration: '어떤 사원보다 오래된 주목나무가 느리고 맑은 시냇물 위로 아치를 그린다. 붉은 열매들이 경고의 물방울처럼 빛난다. 나무껍질을 만지자 나무가 당신을 기억한다—할머니의 목소리, 숲에 대한 빚에 관한 자장가. 물이 밝아지며 가시로 왕관을 쓴 당신의 얼굴을 보여준다.',
        choices: {
          'story-8743921042-c7': {
            text: '시냇물에서 물을 마신다',
            description: '자신의 것이 아닌 기억을 받아들인다.',
          },
          'story-8743921042-c8': {
            text: '주목나무 껍질을 가져다 보호 부적을 만든다',
            description: '먼저 방어하고, 그 다음 걷는다.',
          },
        },
      },
      'story-8743921042-5': {
        title: '안개에 싸인 다리',
        narration: '밧줄과 판자로 된 다리가 볼 수 없는 협곡 위로 처진다. 아래에서 무언가가 뼈에 부딪히는 파도처럼 숨을 쉰다. 첫 번째 기둥에 거미줄에 감싼 종이 매달려 있다. 마치 숲 자체가 그것을 재갈 물린 것처럼.',
        choices: {
          'story-8743921042-c9': {
            text: '종을 울린다',
            description: '잠든 것을 깨워 협상한다.',
          },
          'story-8743921042-c10': {
            text: '침묵 속에 건넌다',
            description: '균형 감각을 믿는다.',
          },
        },
      },
      'story-8743921042-6': {
        title: '그림자의 시장',
        narration: '도시가 있어서는 안 될 구불구불한 골목을 따라 등불이 피어난다. 가판대들은 병에 담긴 비, 골무만 한 달, 리본에 꿰맨 이름을 판다. 가면 제작자가 당신에게 더 가까이 오라고 손짓하며 가시와 빛나는 실로 짠 얼굴을 제공한다.',
        choices: {
          'story-8743921042-c11': {
            text: '피 한 방울로 가시 가면을 산다',
            description: '가면은 속이지만 보호한다.',
          },
          'story-8743921042-c12': {
            text: '조각을 안내인과 교환한다',
            description: '유물보다 정보를.',
          },
        },
      },
      'story-8743921042-7': {
        title: '영혼의 등불',
        narration: '빛의 구슬들이 시냇물에서 올라와 여우 새끼처럼 호기심 어린 채 당신 주위를 소용돌이친다. 그들은 당신의 가슴, 손, 조각을 밀친다. 하나가 손바닥을 통과할 때 당신의 피부가 가늘고 은빛 통증으로 노래한다—숲이 당신을 심판하고 갚지 않은 빚을 발견한다.',
        choices: {
          'story-8743921042-c13': {
            text: '영혼들에게 그들이 아는 것을 나누도록 부탁한다',
            description: '겸손한 질문이 답을 얻는다.',
          },
          'story-8743921042-c14': {
            text: '주목나무의 기억으로 영혼들에게 명령한다',
            description: '권위는 상처를 줄 수 있다.',
          },
        },
      },
      'story-8743921042-9': {
        title: '지하묘지의 문',
        narration: '조각된 계단이 붉은 돌 속으로 내려가고 차가운 공기가 물처럼 쏟아진다. 바닥에는 갈비뼈 모양의 바위와 달 금속 못이 박힌 문이 벌어져 있다. 주머니 속 조각이 떨리며 완전해지기를 열망한다.',
        choices: {
          'story-8743921042-c17': {
            text: '조각을 달 금속 이음새에 맞춘다',
            description: '부서진 것을 완성한다.',
          },
          'story-8743921042-c18': {
            text: '끌림을 거부하고 위쪽 계단을 택한다',
            description: '위로 가는 다른 길을 찾는다.',
          },
        },
      },
      'story-8743921042-10': {
        title: '메아리의 서기관',
        narration: '안내인이 당신을 바람이 석판에 글을 쓰는 돌 테라스로 데려간다. 서기관은 머리카락이 물속의 잉크처럼 움직이는 두건을 쓴 여자다. 그녀는 당신의 조각을 듣고, 비와 철 냄새가 나는 세 개의 인장을 그린다.',
        choices: {
          'story-8743921042-c19': {
            text: '왕관으로 가는 길을 묻는다',
            description: '직접적인 것은 위험하다.',
          },
          'story-8743921042-c20': {
            text: '숲의 요구를 깨는 방법을 묻는다',
            description: '계약을 취소한다.',
          },
        },
      },
      'story-8743921042-11': {
        title: '유리의 강',
        narration: '강은 고요해 보이지만 그 표면은 두 번째 달을 비추는 칼날의 껍질이다. 뱃사공 없는 나룻배가 기다리고 있으며, 땋은 머리카락 밧줄로 묶여 있다. 신뢰로 건널 수 있다—아니면 날을 시험하고 공물을 피로 흘릴 수 있다.',
        choices: {
          'story-8743921042-c21': {
            text: '기다리는 나룻배에 탄다',
            description: '숲의 의식을 믿는다.',
          },
          'story-8743921042-c22': {
            text: '손바닥을 베고 조각을 칠한다',
            description: '안전한 통행을 구매한다.',
          },
        },
      },
      'story-8743921042-12': {
        title: '가시의 계약',
        narration: '속이 빈 나무가 예배당처럼 열리고 수액으로 빛나는 틈새에서 촛불이 흔들린다. 속삭이는 이름들이 떠다닌다—혈통, 빚, 서약. 조각이 아플 정도로 뜨거워지고 당신은 이해한다. 왕관을 취하는 것은 숲의 굶주림을 입는 것을 의미한다.',
        choices: {
          'story-8743921042-c23': {
            text: '계약을 공개적으로 받아들인다',
            description: '대가가 따르는 힘, 대낮에 지불된다.',
          },
          'story-8743921042-c24': {
            text: '거절하고 허점을 찾는다',
            description: '항상 문구가 있다.',
          },
        },
      },
      'story-8743921042-13': {
        title: '왕관 없는 왕',
        narration: '뿌리와 바람의 형상이 돌 의자에 앉아 있고, 한때 왕관이 있던 그의 이마는 생살이 드러나 있다. 그가 돌아설 때 당신 자신의 광대뼈, 가족의 눈이 보인다—당신의 혈통이 한때 왕관을 소유했다. 숲이 윙윙거리며 당신이 진실로 무엇을 할지 기다린다.',
        choices: {
          'story-8743921042-c25': {
            text: '무릎을 꿇고 혈통이 깨뜨린 것을 고치겠다고 맹세한다',
            description: '속죄는 강하게 묶는다.',
          },
          'story-8743921042-c26': {
            text: '왕에게 도전하여 짐을 넘긴다',
            description: '자유 또는 더 무거운 무게를 얻는다.',
          },
        },
      },
      'story-8743921042-14': {
        title: '달 첨탑의 계단',
        narration: '뼛속처럼 하얀 돌에서 깎아낸 계단이 안개 속을 지그재그로 오른다. 매 굽이마다 달이 더 커 보이며 차가운 얼굴로 하늘을 채울 때까지. 당신의 숨결이 깃털처럼 흩어진다. 결의가 등반에 맞춰 단단해진다.',
        choices: {
          'story-8743921042-c27': {
            text: '더 빨리 올라 첨탑에 먼저 도착한다',
            description: '주도권을 잡는다.',
          },
          'story-8743921042-c28': {
            text: '멈춰서 계단에 보호 부적을 새긴다',
            description: '서두름보다 보호를.',
          },
        },
      },
      'story-8743921042-15': {
        title: '씨앗의 방',
        narration: '그려진 하늘 아래 동굴이 열리고 수천 개의 씨앗이 거미줄 실크에 매달려 있다. 각 씨앗은 작은 심장처럼 뛰고, 각각은 약속을 기다리는 미래의 숲이다. 왕관이 짜인 뿌리의 받침대 위에 놓여 있으며 당신 자신의 맥박과 같은 리듬으로 고동친다.',
        choices: {
          'story-8743921042-c29': {
            text: '조각을 왕관에 넣는다',
            description: '통치의 도구를 완성한다.',
          },
          'story-8743921042-c30': {
            text: '씨앗을 흩뿌리고 왕관을 질식시킨다',
            description: '영원히 순환을 깨뜨린다.',
          },
        },
      },
      'story-8743921042-16': {
        title: '거울 결투',
        narration: '얼어붙은 능선에서 바람이 당신을 일격일격 비추는 형상으로 굳어진다. 각 타격이 울리며 검은 소나무에서 눈을 떨어뜨린다. 숲이 숨도 쉬지 않고 지켜보며 어느 자아가 가장 잘 섬길지 판단한다.',
        choices: {
          'story-8743921042-c31': {
            text: '굴복하고 거울상의 왕관을 받아들인다',
            description: '다른 당신이 통치하게 한다.',
          },
          'story-8743921042-c32': {
            text: '조각으로 거울을 산산조각 낸다',
            description: '시험을 깨고 조건을 설정한다.',
          },
        },
      },
      'story-8743921042-17': {
        title: '마법의 대가',
        narration: '안개가 선돌의 원으로 접히고 모든 표면에 제물이 새겨져 있다—머리카락, 이빨, 반지, 재로 쓴 자장가. 숲은 화폐 없이는 거래하지 않는다. 당신은 길을 살 수 있지만 당신의 상실을 명명해야 한다.',
        choices: {
          'story-8743921042-c33': {
            text: '한 계절 동안 목소리를 바친다',
            description: '침묵이 인도를 산다.',
          },
          'story-8743921042-c34': {
            text: '그림자에서 1년을 바친다',
            description: '당신은 더 얇게 걸을 것이다.',
          },
        },
      },
      'story-8743921042-18': {
        title: '회복된 새벽',
        narration: '왕관이 조각을 받아들이고 숲이 봄 향기의 숨을 내쉰다. 첫 금빛이 나무 사이로 쏟아지자 새들이 깨어난다. 당신은 금속을 두르지 않고 신선한 새싹의 화환만 두르고 나간다—통치자가 아닌 관리자. 숲이 조용한 예라고 윙윙거린다.',
        choices: {
        },
      },
      'story-8743921042-19': {
        title: '숲이 집어삼키다',
        narration: '씨앗들이 돌을 부수고 홀을 삼키는 뿌리의 쇄도 속에서 터진다. 왕관이 왕들을 신경 쓰지 않는 녹색 물결 아래 질식한다. 몇 년 후 여행자들은 폭풍처럼 굶주려 너무 빨리 자라는 새로운 숲에 대해 속삭인다. 당신의 이름은 나뭇잎 아래 사라졌다.',
        choices: {
        },
      },
      'story-8743921042-20': {
        title: '가시의 여왕',
        narration: '당신은 거울상에게 절하고, 그것이 앞으로 나서며 당신의 얼굴과 살아있는 덩굴의 왕관을 쓴다. 오로라가 지켜보는 사슴의 뿔에서 물결치고 뿌리가 올라와 왕좌를 만든다. 당신은 듣는 것으로 통치할 것이다. 칼은 필요 없다—하지만 왕관은 매일 밤 당신의 잠에서 조금씩 마신다.',
        choices: {
        },
      },
      'story-8743921042-21': {
        title: '세계 사이에서 길을 잃다',
        narration: '거울이 부서지지만 집으로 가는 길도 부서진다. 당신은 숲의 옆길을 배우고 자신이 만든 등불로 방랑자들을 안전한 빈터로 안내한다. 어떤 밤에는 다른 이름을 거의 기억한다. 달이 당신의 유일한 시계다.',
        choices: {
        },
      },
      'story-8743921042-22': {
        title: '은빛 맹세',
        narration: '뿌리가 조수를 마시는 해안에서 당신은 숲의 법을 나무 너머로 전하겠다고 맹세한다. 왕관이 차갑고 순수한 빛으로 녹아 당신의 정맥을 통한다. 당신은 뒤에 풀이 돋아나는 발자국을 남기며, 두 다리로 걷는 맹세. 빚은 지켜진 약속이 된다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
