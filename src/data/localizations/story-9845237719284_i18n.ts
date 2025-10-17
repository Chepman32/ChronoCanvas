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

export const story_9845237719284StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Ember Crown Oath',
    description: 'When a mapmaker’s sketch warms to living ember, forgotten waylines flare across the coast. A warlord moves to rekindle the mountain and seize the Crown that now answers your hand. Will you share its fire, break it, or wear it?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9845237719284-1': {
        title: 'Cinder Omen',
        narration: 'Dawn breathes mist through pines as your charcoal map glows from within, lines pulsing like sleeping embers. A circlet of blackened gold, warm to the touch, lies where no crown should—inside your satchel, between pressed leaves. Whispered rumors speak of an Ash Warlord marching inland, gathering fuel and fear. The crown’s heat rises, urging a path before the first village wakes.',
        choices: {
          'story-9845237719284-c1': {
            text: 'Head for the relic market.',
            description: 'Seek lore and allies.',
          },
          'story-9845237719284-c2': {
            text: 'Scout the ridge lookout.',
            description: 'Read the land’s intent.',
          },
        },
      },
      'story-9845237719284-2': {
        title: 'Relic Market',
        narration: 'Tents ripple like scales; charms clink on strings against the sea breeze. A toothless broker eyes the ember crown’s glow bleeding through your satchel and gestures you closer. “Maps burn truer near the river crossing,” she rasps, “but the Firebrand scouts watch it now.”',
        choices: {
          'story-9845237719284-c3': {
            text: 'Buy an arcane map overlay.',
            description: 'Let lines reveal lines.',
          },
          'story-9845237719284-c4': {
            text: 'Shadow a Firebrand scout.',
            description: 'Information at a cost.',
          },
        },
      },
      'story-9845237719284-3': {
        title: 'Ridge Lookout',
        narration: 'Black sand ribbons the coast; smoke fingers rise from a far caldera. On the wind: marching drums and the iron-salt smell of quenched blades. A glint moves below—Firebrand scouts skirting the road toward the river.',
        choices: {
          'story-9845237719284-c5': {
            text: 'Trail the scouts unseen.',
            description: 'Use height and hush.',
          },
          'story-9845237719284-c6': {
            text: 'Drop into the cavern mouth shortcut.',
            description: 'Old maps show a hollow under the ridge.',
          },
        },
      },
      'story-9845237719284-4': {
        title: 'Arcane Overlay',
        narration: 'Transparent vellum drinks a drop of crown-heat and blooms with hidden paths. A faint sigil points not only to the river but to a “secret passage” etched beneath the cliffs. The broker smiles, gums shining: “Every shortcut is a kind of promise.”',
        choices: {
          'story-9845237719284-c7': {
            text: 'Take the river crossing',
            description: 'Open, watched, but swift.',
          },
          'story-9845237719284-c8': {
            text: 'Seek the secret passage.',
            description: 'Risk for stealth.',
          },
        },
      },
      'story-9845237719284-5': {
        title: 'Firebrand Scout',
        narration: 'A lone scout pauses beneath a wind-bent pine, checking a charcoal schedule. Ash-marks stripe their jaw—loyalty lines to the Warlord. When the crown warms, the scout’s eyes lift, sensing a lord’s presence where none stands.',
        choices: {
          'story-9845237719284-c9': {
            text: 'Ambush and question them.',
            description: 'Quick, quiet, decisive.',
          },
          'story-9845237719284-c10': {
            text: 'Slip past toward the river.',
            description: 'Trade answers for time.',
          },
        },
      },
      'story-9845237719284-6': {
        title: 'Cavern Mouth',
        narration: 'Basalt arches drink the surf in hollow gulps; lichen glitters like small constellations. Old chisels lie rusting near a narrow stair spiraling down. The crown hums at the threshold, half warning, half welcome.',
        choices: {
          'story-9845237719284-c11': {
            text: 'Take the secret passage.',
            description: 'Trust the old cut.',
          },
          'story-9845237719284-c12': {
            text: 'Cross the echo bridge inside.',
            description: 'Speed over stealth.',
          },
        },
      },
      'story-9845237719284-7': {
        title: 'River Crossing',
        narration: 'Boats rock against tarred ropes; ferrymen mutter about “oathfire” and “sky shrines.” A chalk-boarded post lists tithe rates from the Warlord’s quartermaster. Villagers watch you as one might watch approaching weather.',
        choices: {
          'story-9845237719284-c13': {
            text: 'Parley with the village head.',
            description: 'Win trust, win time.',
          },
          'story-9845237719284-c14': {
            text: 'Test the crown at the ford.',
            description: 'Power invites risk.',
          },
        },
      },
      'story-9845237719284-8': {
        title: 'Secret Passage',
        narration: 'You trace a sigil on stone; the seam accepts you with a sigh. Candles that no one lit gutter to life, revealing chalk tallies—many passes, few returns. The corridor slopes toward a crystalline hum.',
        choices: {
          'story-9845237719284-c15': {
            text: 'Head to the ember test chamber.',
            description: 'Prove worth, or pay.',
          },
          'story-9845237719284-c16': {
            text: 'Cross the echo bridge.',
            description: 'Shorten the path.',
          },
        },
      },
      'story-9845237719284-9': {
        title: 'Scout’s Confession',
        narration: 'Pinned against basalt, the scout yields quickly when the crown’s heat prickles the air. “The Warlord feeds a kiln under the mountain,” they whisper, eyes wet with smoke. “When it roars, your villages will kneel.”',
        choices: {
          'story-9845237719284-c17': {
            text: 'Spare them and seek village allies.',
            description: 'Mercy buys messengers.',
          },
          'story-9845237719284-c18': {
            text: 'Hurry to study the Warlord’s plan.',
            description: 'Knowledge is leverage.',
          },
        },
      },
      'story-9845237719284-10': {
        title: 'Echo Bridge',
        narration: 'A narrow span sings with every step; your breath returns to you in other voices. In the drop below, crystals chime like rain on glass. The crown’s glow threads thin paths over the void, as if offering footholds only you can see.',
        choices: {
          'story-9845237719284-c19': {
            text: 'Follow the crystal path to the span.',
            description: 'Toward the sky shrine.',
          },
          'story-9845237719284-c20': {
            text: 'Detour to the ember test.',
            description: 'Prove your claim first.',
          },
        },
      },
      'story-9845237719284-11': {
        title: 'Village Parley',
        narration: 'Elders sit with hands like driftwood and eyes like tidepools. They speak of oathfire—flame that binds without burning—and a shrine that chooses bearers by breath, not birth. Children circle at a distance, daring each other to whisper “queen.”',
        choices: {
          'story-9845237719284-c21': {
            text: 'Swear the oathfire publicly.',
            description: 'Win hearts, gain weight.',
          },
          'story-9845237719284-c22': {
            text: 'Slip out via the smuggler path.',
            description: 'Allies later; time now.',
          },
        },
      },
      'story-9845237719284-12': {
        title: 'Ember Test',
        narration: 'A brazier sleeps, rimmed with ash sigils. When you lower the crown, the brazier flares white-gold without consuming. Every heartbeat writes a line of light in the air, a ledger of intent that cannot lie.',
        choices: {
          'story-9845237719284-c23': {
            text: 'Bind yourself to protect the villages.',
            description: 'Duty over power.',
          },
          'story-9845237719284-c24': {
            text: 'Claim right to confront the sky shrine.',
            description: 'Authority before action.',
          },
        },
      },
      'story-9845237719284-13': {
        title: 'Warlord’s Plan',
        narration: 'Maps pinned to a stolen ledger show fuel depots feeding a subterranean kiln. A marked date looms: “Ignition.” A note in a different hand reads: “The Crown bows to breath—steal the bearer’s voice.”',
        choices: {
          'story-9845237719284-c25': {
            text: 'Sabotage the kiln tunnels.',
            description: 'Cut the throat of the plan.',
          },
          'story-9845237719284-c26': {
            text: 'Slip to the smuggler path.',
            description: 'Flank and warn the shrine.',
          },
        },
      },
      'story-9845237719284-14': {
        title: 'Crystal Span',
        narration: 'Stars comb the sky; the span hums a scale you feel in your teeth. Wind threads the crown with thin, cold fingers, asking questions without language. Footprints lead upward—others came, or will.',
        choices: {
          'story-9845237719284-c27': {
            text: 'Climb to the sky shrine.',
            description: 'Seek sanction.',
          },
          'story-9845237719284-c28': {
            text: 'Cut away to the kiln route.',
            description: 'Stop ignition first.',
          },
        },
      },
      'story-9845237719284-15': {
        title: 'Oathfire',
        narration: 'Flame climbs your wrist like a tame vine and leaves a warm cuff of light. Villagers exhale—a sound like surf relieving itself against shore. The crown softens, less heavy, as if pleased by shared weight.',
        choices: {
          'story-9845237719284-c29': {
            text: 'Petition the sky shrine.',
            description: 'Carry communal breath upward.',
          },
          'story-9845237719284-c30': {
            text: 'Seek counsel on the crown’s whispers.',
            description: 'Understand before acting.',
          },
        },
      },
      'story-9845237719284-16': {
        title: 'Smuggler Path',
        narration: 'A door appears where a door shouldn’t and opens into salt-stale dark. Crates whisper of quiet defiance: rope, oil, old charts with honest corrections. Footfalls echo—friends or foes learning to be both.',
        choices: {
          'story-9845237719284-c31': {
            text: 'From here, strike the kiln.',
            description: 'Straight to the throat.',
          },
          'story-9845237719284-c32': {
            text: 'Listen to the crown’s counsel.',
            description: 'Risk the whisper.',
          },
        },
      },
      'story-9845237719284-17': {
        title: 'Volcanic Kiln',
        narration: 'Stone lungs heave heat; chains rattle like winter bones. Workers feed timber and fear into a throat of red. A single valve groans—one twist from scream or silence.',
        choices: {
          'story-9845237719284-c33': {
            text: 'Jam the valve and flee.',
            description: 'Sabotage beats speeches.',
          },
          'story-9845237719284-c34': {
            text: 'Divert the pressure toward the sky vents.',
            description: 'Buy time for the shrine.',
          },
        },
      },
      'story-9845237719284-18': {
        title: 'Sky Shrine',
        narration: 'High above stormbanks, bells made of clouded glass ring without hands. A voice like weather asks nothing and knows everything. The crown cools as if in the presence of a parent, waiting to see what you have become.',
        choices: {
          'story-9845237719284-c35': {
            text: 'Ask to share the crown’s fire.',
            description: 'Many hands, lighter load.',
          },
          'story-9845237719284-c36': {
            text: 'Ask for strength to break it.',
            description: 'No tyrant, no tool.',
          },
        },
      },
      'story-9845237719284-19': {
        title: 'Crown Whispers',
        narration: 'When you listen, a chorus answers—past bearers singing through tooth and tongue. They warn of a simpler path: wear the crown deeply, let others orbit your certainty. The warmth tastes like honey; the aftertaste like ash.',
        choices: {
          'story-9845237719284-c37': {
            text: 'Reject the lure; seek the shrine.',
            description: 'You are not a furnace.',
          },
          'story-9845237719284-c38': {
            text: 'Lean into sovereignty.',
            description: 'Rule ends arguments.',
          },
        },
      },
      'story-9845237719284-20': {
        title: 'Final Approach',
        narration: 'The mountain holds its breath; the villages hold theirs with it. Your next stroke will decide the shape of heat tomorrow. In your palm, the crown weighs like promise and warning.',
        choices: {
          'story-9845237719284-c39': {
            text: 'Claim the crown as sovereign.',
            description: 'Bend the fire to your will.',
          },
          'story-9845237719284-c40': {
            text: 'Share the flame with the villages.',
            description: 'Many bearers, no tyrant.',
          },
          'story-9845237719284-c41': {
            text: 'Walk away into quiet exile.',
            description: 'Refuse both throne and war.',
          },
          'story-9845237719284-c42': {
            text: 'Break the crown at the shrine’s word.',
            description: 'End the question forever.',
          },
        },
      },
      'story-9845237719284-21': {
        title: 'Ash Sovereign',
        narration: 'The crown roots through your voice and the mountain kneels. Villages bow—and flinch. Peace arrives quickly, like a storm’s eye: calm and watched. Your maps go out of date; your name does not.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: 'Shared Flame',
        narration: 'You lift the crown and it divides like bread, embers taking root in many hands. The kiln cools; the Warlord’s plans die choked on community. Festivals bloom where garrisons would have stood, and maps are drawn by chorus.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: 'Quiet Exile',
        narration: 'You leave the crown where bells remember you fondly. The mountain dozes uneasily, but never wakes angry. Years later, children follow a traveling mapmaker who draws safe paths through ash fields by listening to wind.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: 'Broken Crown',
        narration: 'Gold screams like glass when you strike it on stone; embers leap, then settle as soft, ordinary warmth. The shrine sighs with relief, and history loses a tyrant it might have met. Your hands keep a faint glow on winter nights—enough to boil tea.',
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
    title: 'El Juramento de la Corona de Brasas',
    description: 'Cuando el boceto de un cartógrafo se calienta hasta convertirse en brasa viviente, líneas olvidadas arden a lo largo de la costa. Un señor de la guerra marcha para reavivar la montaña y apoderarse de la Corona que ahora responde a tu mano. ¿Compartirás su fuego, la romperás o la llevarás?',
    author: 'Estudio ChronoCanvas',
    nodes: {
      'story-9845237719284-1': {
        title: 'Presagio de Ceniza',
        narration: 'El alba exhala niebla entre los pinos mientras tu mapa de carbón brilla desde dentro, sus líneas palpitan como brasas dormidas. Un aro de oro ennegrecido, cálido al tacto, yace donde ninguna corona debería estar—dentro de tu zurrón, entre hojas prensadas. Rumores susurrados hablan de un Señor de la Guerra de las Cenizas que marcha tierra adentro, reuniendo combustible y miedo. El calor de la corona aumenta, instando un camino antes de que despierte la primera aldea.',
        choices: {
          'story-9845237719284-c1': {
            text: 'Dirigirse al mercado de reliquias.',
            description: 'Buscar conocimiento y aliados.',
          },
          'story-9845237719284-c2': {
            text: 'Explorar el mirador de la cresta.',
            description: 'Leer la intención de la tierra.',
          },
        },
      },
      'story-9845237719284-2': {
        title: 'Mercado de Reliquias',
        narration: 'Las tiendas ondean como escamas; amuletos tintinean en cuerdas contra la brisa marina. Una tratante sin dientes observa el resplandor de la corona de brasas que sangra a través de tu zurrón y te hace un gesto para que te acerques. "Los mapas arden más verdaderos cerca del cruce del río", dice ronca, "pero los exploradores de la Marca de Fuego lo vigilan ahora".',
        choices: {
          'story-9845237719284-c3': {
            text: 'Comprar una superposición de mapa arcano.',
            description: 'Dejar que las líneas revelen líneas.',
          },
          'story-9845237719284-c4': {
            text: 'Seguir a un explorador de la Marca de Fuego.',
            description: 'Información a un costo.',
          },
        },
      },
      'story-9845237719284-3': {
        title: 'Mirador de la Cresta',
        narration: 'Arena negra serpentea por la costa; dedos de humo se alzan desde una caldera distante. En el viento: tambores marchando y el olor a hierro y sal de hojas templadas. Un destello se mueve abajo—exploradores de la Marca de Fuego bordeando el camino hacia el río.',
        choices: {
          'story-9845237719284-c5': {
            text: 'Seguir a los exploradores sin ser visto.',
            description: 'Usar altura y silencio.',
          },
          'story-9845237719284-c6': {
            text: 'Descender por la boca de la caverna como atajo.',
            description: 'Los mapas antiguos muestran un hueco bajo la cresta.',
          },
        },
      },
      'story-9845237719284-4': {
        title: 'Superposición Arcana',
        narration: 'La vitela transparente bebe una gota del calor de la corona y florece con senderos ocultos. Un sello tenue señala no solo al río, sino a un "pasaje secreto" grabado bajo los acantilados. La tratante sonríe, encías brillantes: "Cada atajo es una especie de promesa".',
        choices: {
          'story-9845237719284-c7': {
            text: 'Tomar el cruce del río.',
            description: 'Abierto, vigilado, pero rápido.',
          },
          'story-9845237719284-c8': {
            text: 'Buscar el pasaje secreto.',
            description: 'Riesgo por sigilo.',
          },
        },
      },
      'story-9845237719284-5': {
        title: 'Explorador de la Marca de Fuego',
        narration: 'Un explorador solitario se detiene bajo un pino doblado por el viento, revisando un horario de carbón. Marcas de ceniza recorren su mandíbula—líneas de lealtad al Señor de la Guerra. Cuando la corona se calienta, los ojos del explorador se alzan, sintiendo una presencia señorial donde no hay nadie.',
        choices: {
          'story-9845237719284-c9': {
            text: 'Emboscar y interrogar.',
            description: 'Rápido, silencioso, decisivo.',
          },
          'story-9845237719284-c10': {
            text: 'Escabullirse hacia el río.',
            description: 'Intercambiar respuestas por tiempo.',
          },
        },
      },
      'story-9845237719284-6': {
        title: 'Boca de la Caverna',
        narration: 'Arcos de basalto beben las olas en tragos huecos; líquenes brillan como pequeñas constelaciones. Cinceles viejos yacen oxidándose cerca de una escalera estrecha que baja en espiral. La corona zumba en el umbral, medio advertencia, medio bienvenida.',
        choices: {
          'story-9845237719284-c11': {
            text: 'Tomar el pasaje secreto.',
            description: 'Confiar en el corte antiguo.',
          },
          'story-9845237719284-c12': {
            text: 'Cruzar el puente de eco dentro.',
            description: 'Velocidad sobre sigilo.',
          },
        },
      },
      'story-9845237719284-7': {
        title: 'Cruce del Río',
        narration: 'Los botes se mecen contra cuerdas alquitranadas; los barqueros murmuran sobre "fuego de juramento" y "santuarios del cielo". Una pizarra con tiza lista tarifas de diezmo del intendente del Señor de la Guerra. Los aldeanos te observan como se observa al clima que se aproxima.',
        choices: {
          'story-9845237719284-c13': {
            text: 'Parlamentar con el jefe de la aldea.',
            description: 'Ganar confianza, ganar tiempo.',
          },
          'story-9845237719284-c14': {
            text: 'Probar la corona en el vado.',
            description: 'El poder invita al riesgo.',
          },
        },
      },
      'story-9845237719284-8': {
        title: 'Pasaje Secreto',
        narration: 'Trazas un sello en la piedra; la costura te acepta con un suspiro. Velas que nadie encendió cobran vida, revelando marcas de tiza—muchos pasos, pocos retornos. El corredor se inclina hacia un zumbido cristalino.',
        choices: {
          'story-9845237719284-c15': {
            text: 'Dirigirse a la cámara de prueba de brasas.',
            description: 'Probar valía, o pagar.',
          },
          'story-9845237719284-c16': {
            text: 'Cruzar el puente de eco.',
            description: 'Acortar el camino.',
          },
        },
      },
      'story-9845237719284-9': {
        title: 'Confesión del Explorador',
        narration: 'Inmovilizado contra el basalto, el explorador cede rápidamente cuando el calor de la corona pincha el aire. "El Señor de la Guerra alimenta un horno bajo la montaña", susurran, ojos húmedos de humo. "Cuando ruja, vuestras aldeas se arrodillarán".',
        choices: {
          'story-9845237719284-c17': {
            text: 'Perdonar y buscar aliados en la aldea.',
            description: 'La misericordia compra mensajeros.',
          },
          'story-9845237719284-c18': {
            text: 'Apresurarse a estudiar el plan del Señor de la Guerra.',
            description: 'El conocimiento es influencia.',
          },
        },
      },
      'story-9845237719284-10': {
        title: 'Puente de Eco',
        narration: 'Un tramo estrecho canta con cada paso; tu aliento regresa a ti en otras voces. En la caída debajo, los cristales repican como lluvia sobre vidrio. El resplandor de la corona teje senderos delgados sobre el vacío, como si ofreciera apoyos que solo tú puedes ver.',
        choices: {
          'story-9845237719284-c19': {
            text: 'Seguir el sendero de cristal hacia el tramo.',
            description: 'Hacia el santuario del cielo.',
          },
          'story-9845237719284-c20': {
            text: 'Desviarse a la prueba de brasas.',
            description: 'Probar tu derecho primero.',
          },
        },
      },
      'story-9845237719284-11': {
        title: 'Parlamento de la Aldea',
        narration: 'Los ancianos se sientan con manos como madera flotante y ojos como pozas de marea. Hablan de fuego de juramento—llama que ata sin quemar—y un santuario que elige portadores por aliento, no por nacimiento. Los niños circulan a distancia, retándose mutuamente a susurrar "reina".',
        choices: {
          'story-9845237719284-c21': {
            text: 'Jurar el fuego de juramento públicamente.',
            description: 'Ganar corazones, ganar peso.',
          },
          'story-9845237719284-c22': {
            text: 'Escabullirse por el sendero de contrabandistas.',
            description: 'Aliados después; tiempo ahora.',
          },
        },
      },
      'story-9845237719284-12': {
        title: 'Prueba de Brasas',
        narration: 'Un brasero duerme, bordeado de sellos de ceniza. Cuando bajas la corona, el brasero arde con llamas blanco-doradas sin consumir. Cada latido escribe una línea de luz en el aire, un registro de intenciones que no puede mentir.',
        choices: {
          'story-9845237719284-c23': {
            text: 'Vincularse a proteger las aldeas.',
            description: 'Deber sobre poder.',
          },
          'story-9845237719284-c24': {
            text: 'Reclamar el derecho a enfrentar el santuario del cielo.',
            description: 'Autoridad antes de acción.',
          },
        },
      },
      'story-9845237719284-13': {
        title: 'Plan del Señor de la Guerra',
        narration: 'Mapas clavados a un registro robado muestran depósitos de combustible alimentando un horno subterráneo. Una fecha marcada amenaza: "Ignición". Una nota con diferente caligrafía dice: "La Corona se inclina ante el aliento—roba la voz del portador".',
        choices: {
          'story-9845237719284-c25': {
            text: 'Sabotear los túneles del horno.',
            description: 'Cortar la garganta del plan.',
          },
          'story-9845237719284-c26': {
            text: 'Escabullirse al sendero de contrabandistas.',
            description: 'Flanquear y advertir al santuario.',
          },
        },
      },
      'story-9845237719284-14': {
        title: 'Tramo de Cristal',
        narration: 'Las estrellas peinan el cielo; el tramo zumba una escala que sientes en tus dientes. El viento enhebra la corona con dedos delgados y fríos, haciendo preguntas sin lenguaje. Huellas conducen hacia arriba—otros vinieron, o vendrán.',
        choices: {
          'story-9845237719284-c27': {
            text: 'Escalar al santuario del cielo.',
            description: 'Buscar sanción.',
          },
          'story-9845237719284-c28': {
            text: 'Desviarse a la ruta del horno.',
            description: 'Detener la ignición primero.',
          },
        },
      },
      'story-9845237719284-15': {
        title: 'Fuego de Juramento',
        narration: 'La llama trepa por tu muñeca como una enredadera domesticada y deja un brazalete cálido de luz. Los aldeanos exhalan—un sonido como el oleaje aliviándose contra la orilla. La corona se suaviza, menos pesada, como si estuviera complacida por el peso compartido.',
        choices: {
          'story-9845237719284-c29': {
            text: 'Solicitar al santuario del cielo.',
            description: 'Llevar aliento comunal hacia arriba.',
          },
          'story-9845237719284-c30': {
            text: 'Buscar consejo sobre los susurros de la corona.',
            description: 'Comprender antes de actuar.',
          },
        },
      },
      'story-9845237719284-16': {
        title: 'Sendero de Contrabandistas',
        narration: 'Una puerta aparece donde no debería haber una y se abre hacia la oscuridad viciada de sal. Cajas susurran de desafío silencioso: cuerda, aceite, mapas viejos con correcciones honestas. Pisadas hacen eco—amigos o enemigos aprendiendo a ser ambos.',
        choices: {
          'story-9845237719284-c31': {
            text: 'Desde aquí, atacar el horno.',
            description: 'Directo a la garganta.',
          },
          'story-9845237719284-c32': {
            text: 'Escuchar el consejo de la corona.',
            description: 'Arriesgar el susurro.',
          },
        },
      },
      'story-9845237719284-17': {
        title: 'Horno Volcánico',
        narration: 'Pulmones de piedra jadean calor; cadenas repiquetean como huesos de invierno. Los trabajadores alimentan madera y miedo en una garganta de rojo. Una sola válvula gime—un giro del grito o del silencio.',
        choices: {
          'story-9845237719284-c33': {
            text: 'Atascar la válvula y huir.',
            description: 'El sabotaje supera los discursos.',
          },
          'story-9845237719284-c34': {
            text: 'Desviar la presión hacia los respiraderos del cielo.',
            description: 'Comprar tiempo para el santuario.',
          },
        },
      },
      'story-9845237719284-18': {
        title: 'Santuario del Cielo',
        narration: 'Alto sobre bancos de tormenta, campanas hechas de vidrio nublado repican sin manos. Una voz como el clima no pregunta nada y lo sabe todo. La corona se enfría como si estuviera en presencia de un padre, esperando ver en qué te has convertido.',
        choices: {
          'story-9845237719284-c35': {
            text: 'Pedir compartir el fuego de la corona.',
            description: 'Muchas manos, carga más ligera.',
          },
          'story-9845237719284-c36': {
            text: 'Pedir fuerza para romperla.',
            description: 'Ni tirano, ni herramienta.',
          },
        },
      },
      'story-9845237719284-19': {
        title: 'Susurros de la Corona',
        narration: 'Cuando escuchas, un coro responde—portadores pasados cantando a través de diente y lengua. Advierten de un camino más simple: llevar la corona profundamente, dejar que otros orbiten tu certeza. La calidez sabe a miel; el regusto a ceniza.',
        choices: {
          'story-9845237719284-c37': {
            text: 'Rechazar el señuelo; buscar el santuario.',
            description: 'No eres un horno.',
          },
          'story-9845237719284-c38': {
            text: 'Inclinarse hacia la soberanía.',
            description: 'Gobernar termina los argumentos.',
          },
        },
      },
      'story-9845237719284-20': {
        title: 'Aproximación Final',
        narration: 'La montaña contiene su aliento; las aldeas contienen el suyo con ella. Tu próximo movimiento decidirá la forma del calor de mañana. En tu palma, la corona pesa como promesa y advertencia.',
        choices: {
          'story-9845237719284-c39': {
            text: 'Reclamar la corona como soberano.',
            description: 'Doblar el fuego a tu voluntad.',
          },
          'story-9845237719284-c40': {
            text: 'Compartir la llama con las aldeas.',
            description: 'Muchos portadores, ningún tirano.',
          },
          'story-9845237719284-c41': {
            text: 'Marcharse hacia un exilio silencioso.',
            description: 'Rechazar tanto el trono como la guerra.',
          },
          'story-9845237719284-c42': {
            text: 'Romper la corona a la palabra del santuario.',
            description: 'Terminar la pregunta para siempre.',
          },
        },
      },
      'story-9845237719284-21': {
        title: 'Soberano de Cenizas',
        narration: 'La corona arraiga a través de tu voz y la montaña se arrodilla. Las aldeas se inclinan—y se estremecen. La paz llega rápidamente, como el ojo de una tormenta: calma y vigilada. Tus mapas quedan obsoletos; tu nombre no.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: 'Llama Compartida',
        narration: 'Levantas la corona y se divide como pan, las brasas echan raíces en muchas manos. El horno se enfría; los planes del Señor de la Guerra mueren ahogados por la comunidad. Los festivales florecen donde habrían estado las guarniciones, y los mapas se dibujan en coro.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: 'Exilio Silencioso',
        narration: 'Dejas la corona donde las campanas te recuerdan con cariño. La montaña dormita inquieta, pero nunca despierta enfadada. Años después, los niños siguen a un cartógrafo viajero que dibuja caminos seguros a través de campos de ceniza escuchando al viento.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: 'Corona Rota',
        narration: 'El oro grita como vidrio cuando lo golpeas contra la piedra; las brasas saltan, luego se asientan como calidez suave y ordinaria. El santuario suspira con alivio, y la historia pierde un tirano que podría haber conocido. Tus manos mantienen un brillo tenue en noches de invierno—suficiente para hervir té.',
        choices: {
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Der Glutkronen-Eid',
    description: 'Als die Skizze eines Kartographen zu lebendiger Glut erwärmt, flammen vergessene Weglinien entlang der Küste auf. Ein Kriegsherr zieht los, um den Berg neu zu entfachen und die Krone zu ergreifen, die nun deiner Hand antwortet. Wirst du ihr Feuer teilen, sie zerbrechen oder sie tragen?',
    author: 'ChronoCanvas Atelier',
    nodes: {
      'story-9845237719284-1': {
        title: 'Aschenomen',
        narration: 'Die Morgendämmerung haucht Nebel durch Kiefern, als deine Kohlekarte von innen zu glühen beginnt, ihre Linien pulsieren wie schlafende Glut. Ein Reif aus geschwärztem Gold, warm bei Berührung, liegt dort, wo keine Krone sein sollte – in deiner Tasche, zwischen gepressten Blättern. Geflüsterte Gerüchte sprechen von einem Aschenkriegsherrn, der ins Landesinnere marschiert und Brennstoff und Furcht sammelt. Die Hitze der Krone steigt, drängt auf einen Pfad, bevor das erste Dorf erwacht.',
        choices: {
          'story-9845237719284-c1': {
            text: 'Zum Reliktmarkt gehen.',
            description: 'Wissen und Verbündete suchen.',
          },
          'story-9845237719284-c2': {
            text: 'Den Kamm-Aussichtspunkt erkunden.',
            description: 'Die Absicht des Landes lesen.',
          },
        },
      },
      'story-9845237719284-2': {
        title: 'Reliktmarkt',
        narration: 'Zelte wogen wie Schuppen; Amulette klimpern an Schnüren gegen die Meeresbrise. Eine zahnlose Händlerin beäugt das Glühen der Glutkrone, das durch deine Tasche blutet, und winkt dich näher. "Karten brennen wahrer nahe der Flussüberquerung", krächzt sie, "aber die Feuerbrand-Kundschafter bewachen sie jetzt."',
        choices: {
          'story-9845237719284-c3': {
            text: 'Eine arkane Kartenüberlagerung kaufen.',
            description: 'Linien offenbaren Linien.',
          },
          'story-9845237719284-c4': {
            text: 'Einem Feuerbrand-Kundschafter folgen.',
            description: 'Information um einen Preis.',
          },
        },
      },
      'story-9845237719284-3': {
        title: 'Kamm-Aussichtspunkt',
        narration: 'Schwarzer Sand durchzieht die Küste; Rauchfinger steigen von einer fernen Caldera auf. Im Wind: marschierende Trommeln und der Eisen-Salz-Geruch gelöschter Klingen. Ein Glitzern bewegt sich unten – Feuerbrand-Kundschafter umgehen die Straße zum Fluss hin.',
        choices: {
          'story-9845237719284-c5': {
            text: 'Den Kundschaftern ungesehen folgen.',
            description: 'Höhe und Stille nutzen.',
          },
          'story-9845237719284-c6': {
            text: 'In die Höhlenmündung als Abkürzung absteigen.',
            description: 'Alte Karten zeigen eine Höhlung unter dem Kamm.',
          },
        },
      },
      'story-9845237719284-4': {
        title: 'Arkane Überlagerung',
        narration: 'Transparentes Pergament trinkt einen Tropfen Kronenhitze und erblüht mit verborgenen Pfaden. Ein schwaches Siegel weist nicht nur zum Fluss, sondern zu einer "geheimen Passage", die unter die Klippen gemeißelt ist. Die Händlerin lächelt, Zahnfleisch glänzend: "Jede Abkürzung ist eine Art Versprechen."',
        choices: {
          'story-9845237719284-c7': {
            text: 'Die Flussüberquerung nehmen.',
            description: 'Offen, bewacht, aber schnell.',
          },
          'story-9845237719284-c8': {
            text: 'Die geheime Passage suchen.',
            description: 'Risiko für Heimlichkeit.',
          },
        },
      },
      'story-9845237719284-5': {
        title: 'Feuerbrand-Kundschafter',
        narration: 'Ein einzelner Kundschafter hält unter einer windgebogenen Kiefer inne und prüft einen Kohlezeitplan. Aschenmarkierungen streifen ihren Kiefer – Loyalitätslinien zum Kriegsherrn. Als die Krone sich erwärmt, heben sich die Augen des Kundschafters und spüren eine Herrscherpräsenz, wo keine steht.',
        choices: {
          'story-9845237719284-c9': {
            text: 'Überfallen und verhören.',
            description: 'Schnell, leise, entschieden.',
          },
          'story-9845237719284-c10': {
            text: 'Vorbeischleichen zum Fluss.',
            description: 'Antworten gegen Zeit tauschen.',
          },
        },
      },
      'story-9845237719284-6': {
        title: 'Höhlenmündung',
        narration: 'Basaltbögen trinken die Brandung in hohlen Schlucken; Flechten glitzern wie kleine Sternbilder. Alte Meißel liegen rostend nahe einer schmalen Treppe, die nach unten spiralt. Die Krone summt an der Schwelle, halb Warnung, halb Willkommen.',
        choices: {
          'story-9845237719284-c11': {
            text: 'Die geheime Passage nehmen.',
            description: 'Dem alten Schnitt vertrauen.',
          },
          'story-9845237719284-c12': {
            text: 'Die Echobrücke im Inneren überqueren.',
            description: 'Geschwindigkeit über Heimlichkeit.',
          },
        },
      },
      'story-9845237719284-7': {
        title: 'Flussüberquerung',
        narration: 'Boote schaukeln an geteerten Seilen; Fährleute murmeln über "Eidfeuer" und "Himmelsschreine". Eine Kreidetafel listet Zehnsätze vom Quartiermeister des Kriegsherrn auf. Dorfbewohner beobachten dich, wie man herannahendes Wetter beobachtet.',
        choices: {
          'story-9845237719284-c13': {
            text: 'Mit dem Dorfoberhaupt verhandeln.',
            description: 'Vertrauen gewinnen, Zeit gewinnen.',
          },
          'story-9845237719284-c14': {
            text: 'Die Krone an der Furt testen.',
            description: 'Macht lädt Risiko ein.',
          },
        },
      },
      'story-9845237719284-8': {
        title: 'Geheime Passage',
        narration: 'Du zeichnest ein Siegel auf Stein; die Naht nimmt dich mit einem Seufzen auf. Kerzen, die niemand entzündete, flackern zum Leben und enthüllen Kreidestrichlisten – viele Durchgänge, wenige Rückkehren. Der Korridor neigt sich zu einem kristallinen Summen hin.',
        choices: {
          'story-9845237719284-c15': {
            text: 'Zur Glutprüfungskammer gehen.',
            description: 'Wert beweisen oder zahlen.',
          },
          'story-9845237719284-c16': {
            text: 'Die Echobrücke überqueren.',
            description: 'Den Pfad verkürzen.',
          },
        },
      },
      'story-9845237719284-9': {
        title: 'Geständnis des Kundschafters',
        narration: 'Gegen Basalt gepresst, gibt der Kundschafter schnell nach, als die Hitze der Krone die Luft prickelt. "Der Kriegsherr speist einen Ofen unter dem Berg", flüstern sie, Augen feucht vor Rauch. "Wenn er brüllt, werden eure Dörfer knien."',
        choices: {
          'story-9845237719284-c17': {
            text: 'Verschonen und Dorfverbündete suchen.',
            description: 'Gnade kauft Boten.',
          },
          'story-9845237719284-c18': {
            text: 'Eilen, um den Plan des Kriegsherrn zu studieren.',
            description: 'Wissen ist Druckmittel.',
          },
        },
      },
      'story-9845237719284-10': {
        title: 'Echobrücke',
        narration: 'Eine schmale Spanne singt mit jedem Schritt; dein Atem kehrt zu dir in anderen Stimmen zurück. Im Abgrund darunter läuten Kristalle wie Regen auf Glas. Das Glühen der Krone fädelt dünne Pfade über die Leere, als würde sie Tritte anbieten, die nur du sehen kannst.',
        choices: {
          'story-9845237719284-c19': {
            text: 'Dem Kristallpfad zur Spanne folgen.',
            description: 'Zum Himmelsschrein.',
          },
          'story-9845237719284-c20': {
            text: 'Zur Glutprüfung umleiten.',
            description: 'Zuerst deinen Anspruch beweisen.',
          },
        },
      },
      'story-9845237719284-11': {
        title: 'Dorfverhandlung',
        narration: 'Älteste sitzen mit Händen wie Treibholz und Augen wie Gezeitentümpel. Sie sprechen von Eidfeuer – Flamme, die bindet, ohne zu brennen – und einem Schrein, der Träger nach Atem wählt, nicht nach Geburt. Kinder kreisen in Distanz, wagen es, einander "Königin" zuzuflüstern.',
        choices: {
          'story-9845237719284-c21': {
            text: 'Das Eidfeuer öffentlich schwören.',
            description: 'Herzen gewinnen, Gewicht gewinnen.',
          },
          'story-9845237719284-c22': {
            text: 'Über den Schmugglerpfad hinausschleichen.',
            description: 'Verbündete später; Zeit jetzt.',
          },
        },
      },
      'story-9845237719284-12': {
        title: 'Glutprüfung',
        narration: 'Ein Kohlenbecken schläft, gesäumt von Aschensiegeln. Als du die Krone senkst, flammt das Becken weißgold auf, ohne zu verzehren. Jeder Herzschlag schreibt eine Lichtlinie in die Luft, ein Buch der Absicht, das nicht lügen kann.',
        choices: {
          'story-9845237719284-c23': {
            text: 'Dich verpflichten, die Dörfer zu schützen.',
            description: 'Pflicht über Macht.',
          },
          'story-9845237719284-c24': {
            text: 'Das Recht beanspruchen, dem Himmelsschrein zu begegnen.',
            description: 'Autorität vor Handlung.',
          },
        },
      },
      'story-9845237719284-13': {
        title: 'Plan des Kriegsherrn',
        narration: 'Karten an ein gestohlenes Register geheftet zeigen Brennstoffdepots, die einen unterirdischen Ofen speisen. Ein markiertes Datum droht: "Zündung." Eine Notiz in anderer Handschrift liest: "Die Krone beugt sich dem Atem – stiehl die Stimme des Trägers."',
        choices: {
          'story-9845237719284-c25': {
            text: 'Die Ofentunnel sabotieren.',
            description: 'Die Kehle des Plans durchschneiden.',
          },
          'story-9845237719284-c26': {
            text: 'Zum Schmugglerpfad schleichen.',
            description: 'Flanke und warne den Schrein.',
          },
        },
      },
      'story-9845237719284-14': {
        title: 'Kristallspanne',
        narration: 'Sterne kämmen den Himmel; die Spanne summt eine Tonleiter, die du in deinen Zähnen fühlst. Wind fädelt die Krone mit dünnen, kalten Fingern und stellt Fragen ohne Sprache. Fußabdrücke führen aufwärts – andere kamen, oder werden kommen.',
        choices: {
          'story-9845237719284-c27': {
            text: 'Zum Himmelsschrein aufsteigen.',
            description: 'Sanktion suchen.',
          },
          'story-9845237719284-c28': {
            text: 'Zur Ofenroute abzweigen.',
            description: 'Zuerst Zündung stoppen.',
          },
        },
      },
      'story-9845237719284-15': {
        title: 'Eidfeuer',
        narration: 'Flamme klettert dein Handgelenk hinauf wie eine zahme Rebe und hinterlässt eine warme Lichtmanschette. Dorfbewohner atmen aus – ein Klang wie Brandung, die sich gegen das Ufer entlastet. Die Krone wird weicher, weniger schwer, als ob erfreut über geteiltes Gewicht.',
        choices: {
          'story-9845237719284-c29': {
            text: 'Den Himmelsschrein ersuchen.',
            description: 'Gemeinschaftlichen Atem aufwärts tragen.',
          },
          'story-9845237719284-c30': {
            text: 'Rat über die Flüstern der Krone suchen.',
            description: 'Verstehen vor Handeln.',
          },
        },
      },
      'story-9845237719284-16': {
        title: 'Schmugglerpfad',
        narration: 'Eine Tür erscheint, wo keine sein sollte, und öffnet sich in salzabgestandene Dunkelheit. Kisten flüstern von stiller Trotzigkeit: Seil, Öl, alte Karten mit ehrlichen Korrekturen. Schritte hallen wider – Freunde oder Feinde lernen, beides zu sein.',
        choices: {
          'story-9845237719284-c31': {
            text: 'Von hier aus den Ofen angreifen.',
            description: 'Direkt zur Kehle.',
          },
          'story-9845237719284-c32': {
            text: 'Auf den Rat der Krone hören.',
            description: 'Das Flüstern riskieren.',
          },
        },
      },
      'story-9845237719284-17': {
        title: 'Vulkanischer Ofen',
        narration: 'Steinerne Lungen heben Hitze; Ketten rasseln wie Winterknochen. Arbeiter füttern Holz und Furcht in einen Schlund aus Rot. Ein einzelnes Ventil ächzt – eine Drehung vom Schrei oder Schweigen entfernt.',
        choices: {
          'story-9845237719284-c33': {
            text: 'Das Ventil blockieren und fliehen.',
            description: 'Sabotage schlägt Reden.',
          },
          'story-9845237719284-c34': {
            text: 'Den Druck zu den Himmelsöffnungen umleiten.',
            description: 'Zeit für den Schrein kaufen.',
          },
        },
      },
      'story-9845237719284-18': {
        title: 'Himmelsschrein',
        narration: 'Hoch über Sturmbänken läuten Glocken aus getrübtem Glas ohne Hände. Eine Stimme wie Wetter fragt nichts und weiß alles. Die Krone kühlt ab, als ob in Anwesenheit eines Elternteils, wartend zu sehen, was du geworden bist.',
        choices: {
          'story-9845237719284-c35': {
            text: 'Bitten, das Feuer der Krone zu teilen.',
            description: 'Viele Hände, leichtere Last.',
          },
          'story-9845237719284-c36': {
            text: 'Um Kraft bitten, sie zu zerbrechen.',
            description: 'Kein Tyrann, kein Werkzeug.',
          },
        },
      },
      'story-9845237719284-19': {
        title: 'Kronenflüstern',
        narration: 'Wenn du lauschst, antwortet ein Chor – vergangene Träger singen durch Zahn und Zunge. Sie warnen vor einem einfacheren Pfad: trage die Krone tief, lass andere um deine Gewissheit kreisen. Die Wärme schmeckt wie Honig; der Nachgeschmack wie Asche.',
        choices: {
          'story-9845237719284-c37': {
            text: 'Die Verlockung ablehnen; den Schrein suchen.',
            description: 'Du bist kein Hochofen.',
          },
          'story-9845237719284-c38': {
            text: 'Sich zur Souveränität neigen.',
            description: 'Herrschaft beendet Argumente.',
          },
        },
      },
      'story-9845237719284-20': {
        title: 'Letzte Annäherung',
        narration: 'Der Berg hält seinen Atem an; die Dörfer halten ihren mit ihm. Dein nächster Streich wird die Form der Hitze von morgen entscheiden. In deiner Handfläche wiegt die Krone wie Versprechen und Warnung.',
        choices: {
          'story-9845237719284-c39': {
            text: 'Die Krone als Souverän beanspruchen.',
            description: 'Das Feuer deinem Willen beugen.',
          },
          'story-9845237719284-c40': {
            text: 'Die Flamme mit den Dörfern teilen.',
            description: 'Viele Träger, kein Tyrann.',
          },
          'story-9845237719284-c41': {
            text: 'In stilles Exil fortgehen.',
            description: 'Sowohl Thron als auch Krieg ablehnen.',
          },
          'story-9845237719284-c42': {
            text: 'Die Krone auf das Wort des Schreins zerbrechen.',
            description: 'Die Frage für immer beenden.',
          },
        },
      },
      'story-9845237719284-21': {
        title: 'Aschensouverän',
        narration: 'Die Krone wurzelt durch deine Stimme und der Berg kniet. Dörfer verneigen sich – und zucken zusammen. Frieden kommt schnell, wie das Auge eines Sturms: ruhig und beobachtet. Deine Karten veralten; dein Name nicht.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: 'Geteilte Flamme',
        narration: 'Du hebst die Krone und sie teilt sich wie Brot, Glut nimmt Wurzel in vielen Händen. Der Ofen kühlt ab; die Pläne des Kriegsherrn sterben erstickt an Gemeinschaft. Feste blühen, wo Garnisonen gestanden hätten, und Karten werden im Chor gezeichnet.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: 'Stilles Exil',
        narration: 'Du lässt die Krone dort, wo Glocken sich liebevoll an dich erinnern. Der Berg döst unruhig, aber erwacht nie zornig. Jahre später folgen Kinder einem reisenden Kartographen, der sichere Pfade durch Aschenfelder zeichnet, indem er dem Wind lauscht.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: 'Zerbrochene Krone',
        narration: 'Gold schreit wie Glas, wenn du es auf Stein schlägst; Glut springt, dann setzt sich als weiche, gewöhnliche Wärme. Der Schrein seufzt vor Erleichterung, und die Geschichte verliert einen Tyrannen, dem sie hätte begegnen können. Deine Hände behalten ein schwaches Glühen in Winternächten – genug, um Tee zu kochen.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Le Serment de la Couronne de Braises',
    description: 'Quand l\'esquisse d\'un cartographe se réchauffe en braise vivante, des lignes oubliées s\'enflamment le long de la côte. Un seigneur de guerre marche pour raviver la montagne et s\'emparer de la Couronne qui répond maintenant à votre main. Partagerez-vous son feu, la briserez-vous ou la porterez-vous?',
    author: 'Studio ChronoCanvas',
    nodes: {
      'story-9845237719284-1': {
        title: 'Présage de Cendre',
        narration: 'L\'aube exhale la brume à travers les pins tandis que votre carte au fusain brille de l\'intérieur, ses lignes pulsant comme des braises endormies. Un cercle d\'or noirci, chaud au toucher, repose là où aucune couronne ne devrait être—dans votre sacoche, entre des feuilles pressées. Des rumeurs murmurent d\'un Seigneur de Guerre des Cendres marchant vers l\'intérieur, rassemblant combustible et peur. La chaleur de la couronne monte, pressant un chemin avant que le premier village ne s\'éveille.',
        choices: {
          'story-9845237719284-c1': {
            text: 'Se diriger vers le marché aux reliques.',
            description: 'Chercher savoir et alliés.',
          },
          'story-9845237719284-c2': {
            text: 'Explorer le point de vue de la crête.',
            description: 'Lire l\'intention de la terre.',
          },
        },
      },
      'story-9845237719284-2': {
        title: 'Marché aux Reliques',
        narration: 'Les tentes ondulent comme des écailles; des charmes tintent sur des ficelles contre la brise marine. Une marchande édentée observe la lueur de la couronne de braises saignant à travers votre sacoche et vous fait signe de vous approcher. «Les cartes brûlent plus véritablement près du gué», râpe-t-elle, «mais les éclaireurs de la Marque de Feu le surveillent maintenant.»',
        choices: {
          'story-9845237719284-c3': {
            text: 'Acheter une superposition de carte arcanique.',
            description: 'Laisser les lignes révéler les lignes.',
          },
          'story-9845237719284-c4': {
            text: 'Suivre un éclaireur de la Marque de Feu.',
            description: 'L\'information a un prix.',
          },
        },
      },
      'story-9845237719284-3': {
        title: 'Point de Vue de la Crête',
        narration: 'Le sable noir serpente sur la côte; des doigts de fumée s\'élèvent d\'une caldeira lointaine. Dans le vent: des tambours marchant et l\'odeur de fer et de sel de lames trempées. Un éclat bouge en bas—des éclaireurs de la Marque de Feu contournant la route vers la rivière.',
        choices: {
          'story-9845237719284-c5': {
            text: 'Pister les éclaireurs sans être vu.',
            description: 'Utiliser hauteur et silence.',
          },
          'story-9845237719284-c6': {
            text: 'Descendre par la bouche de la caverne en raccourci.',
            description: 'Les vieilles cartes montrent un creux sous la crête.',
          },
        },
      },
      'story-9845237719284-4': {
        title: 'Superposition Arcanique',
        narration: 'Le vélin transparent boit une goutte de chaleur de la couronne et s\'épanouit avec des chemins cachés. Un signe faible pointe non seulement vers la rivière, mais vers un «passage secret» gravé sous les falaises. La marchande sourit, gencives luisant: «Chaque raccourci est une sorte de promesse.»',
        choices: {
          'story-9845237719284-c7': {
            text: 'Prendre la traversée de la rivière.',
            description: 'Ouvert, surveillé, mais rapide.',
          },
          'story-9845237719284-c8': {
            text: 'Chercher le passage secret.',
            description: 'Risque pour la furtivité.',
          },
        },
      },
      'story-9845237719284-5': {
        title: 'Éclaireur de la Marque de Feu',
        narration: 'Un éclaireur solitaire s\'arrête sous un pin courbé par le vent, vérifiant un horaire au fusain. Des marques de cendre strient leur mâchoire—lignes de loyauté au Seigneur de Guerre. Quand la couronne se réchauffe, les yeux de l\'éclaireur se lèvent, sentant une présence seigneuriale là où personne ne se tient.',
        choices: {
          'story-9845237719284-c9': {
            text: 'Tendre une embuscade et interroger.',
            description: 'Rapide, silencieux, décisif.',
          },
          'story-9845237719284-c10': {
            text: 'Se faufiler vers la rivière.',
            description: 'Échanger réponses contre temps.',
          },
        },
      },
      'story-9845237719284-6': {
        title: 'Bouche de la Caverne',
        narration: 'Des arches de basalte boivent le ressac en gorgées creuses; des lichens scintillent comme de petites constellations. De vieux burins gisent en train de rouiller près d\'un escalier étroit descendant en spirale. La couronne bourdonne au seuil, mi-avertissement, mi-bienvenue.',
        choices: {
          'story-9845237719284-c11': {
            text: 'Prendre le passage secret.',
            description: 'Faire confiance à l\'ancienne coupe.',
          },
          'story-9845237719284-c12': {
            text: 'Traverser le pont d\'écho à l\'intérieur.',
            description: 'Vitesse plutôt que furtivité.',
          },
        },
      },
      'story-9845237719284-7': {
        title: 'Traversée de la Rivière',
        narration: 'Les bateaux se balancent contre des cordes goudronnées; les passeurs murmurent à propos du «feu de serment» et des «sanctuaires du ciel». Un panneau à la craie liste les taux de dîme de l\'intendant du Seigneur de Guerre. Les villageois vous observent comme on observe le temps qui approche.',
        choices: {
          'story-9845237719284-c13': {
            text: 'Parlementer avec le chef du village.',
            description: 'Gagner confiance, gagner temps.',
          },
          'story-9845237719284-c14': {
            text: 'Tester la couronne au gué.',
            description: 'Le pouvoir invite le risque.',
          },
        },
      },
      'story-9845237719284-8': {
        title: 'Passage Secret',
        narration: 'Vous tracez un sceau sur la pierre; la couture vous accepte avec un soupir. Des bougies que personne n\'a allumées s\'animent, révélant des comptes à la craie—nombreux passages, peu de retours. Le couloir s\'incline vers un bourdonnement cristallin.',
        choices: {
          'story-9845237719284-c15': {
            text: 'Se diriger vers la chambre d\'épreuve des braises.',
            description: 'Prouver sa valeur, ou payer.',
          },
          'story-9845237719284-c16': {
            text: 'Traverser le pont d\'écho.',
            description: 'Raccourcir le chemin.',
          },
        },
      },
      'story-9845237719284-9': {
        title: 'Confession de l\'Éclaireur',
        narration: 'Plaqué contre le basalte, l\'éclaireur cède rapidement quand la chaleur de la couronne pique l\'air. «Le Seigneur de Guerre alimente un four sous la montagne», murmurent-ils, yeux humides de fumée. «Quand il rugira, vos villages s\'agenouilleront.»',
        choices: {
          'story-9845237719284-c17': {
            text: 'L\'épargner et chercher des alliés au village.',
            description: 'La miséricorde achète des messagers.',
          },
          'story-9845237719284-c18': {
            text: 'Se presser d\'étudier le plan du Seigneur de Guerre.',
            description: 'Le savoir est un levier.',
          },
        },
      },
      'story-9845237719284-10': {
        title: 'Pont d\'Écho',
        narration: 'Une portée étroite chante à chaque pas; votre souffle vous revient en d\'autres voix. Dans la chute en dessous, les cristaux tintent comme la pluie sur le verre. La lueur de la couronne tisse des chemins minces sur le vide, comme si elle offrait des prises que vous seul pouvez voir.',
        choices: {
          'story-9845237719284-c19': {
            text: 'Suivre le chemin de cristal vers la portée.',
            description: 'Vers le sanctuaire du ciel.',
          },
          'story-9845237719284-c20': {
            text: 'Faire un détour vers l\'épreuve des braises.',
            description: 'Prouver votre droit d\'abord.',
          },
        },
      },
      'story-9845237719284-11': {
        title: 'Pourparlers du Village',
        narration: 'Les anciens siègent avec des mains comme du bois flotté et des yeux comme des mares de marée. Ils parlent du feu de serment—flamme qui lie sans brûler—et d\'un sanctuaire qui choisit les porteurs par le souffle, non par la naissance. Les enfants tournent à distance, s\'osant mutuellement à chuchoter «reine».',
        choices: {
          'story-9845237719284-c21': {
            text: 'Prêter le serment du feu publiquement.',
            description: 'Gagner les cœurs, gagner du poids.',
          },
          'story-9845237719284-c22': {
            text: 'Se faufiler par le chemin des contrebandiers.',
            description: 'Alliés plus tard; temps maintenant.',
          },
        },
      },
      'story-9845237719284-12': {
        title: 'Épreuve des Braises',
        narration: 'Un brasier dort, bordé de sceaux de cendre. Quand vous abaissez la couronne, le brasier flamboie blanc-doré sans consumer. Chaque battement de cœur écrit une ligne de lumière dans l\'air, un registre d\'intention qui ne peut mentir.',
        choices: {
          'story-9845237719284-c23': {
            text: 'Se lier à protéger les villages.',
            description: 'Devoir avant pouvoir.',
          },
          'story-9845237719284-c24': {
            text: 'Revendiquer le droit d\'affronter le sanctuaire du ciel.',
            description: 'Autorité avant action.',
          },
        },
      },
      'story-9845237719284-13': {
        title: 'Plan du Seigneur de Guerre',
        narration: 'Des cartes épinglées à un registre volé montrent des dépôts de combustible alimentant un four souterrain. Une date marquée menace: «Ignition». Une note d\'une main différente dit: «La Couronne s\'incline devant le souffle—volez la voix du porteur.»',
        choices: {
          'story-9845237719284-c25': {
            text: 'Saboter les tunnels du four.',
            description: 'Trancher la gorge du plan.',
          },
          'story-9845237719284-c26': {
            text: 'Se glisser vers le chemin des contrebandiers.',
            description: 'Flanquer et avertir le sanctuaire.',
          },
        },
      },
      'story-9845237719284-14': {
        title: 'Portée de Cristal',
        narration: 'Les étoiles peignent le ciel; la portée bourdonne une gamme que vous sentez dans vos dents. Le vent enfile la couronne de doigts minces et froids, posant des questions sans langage. Des empreintes mènent vers le haut—d\'autres sont venus, ou viendront.',
        choices: {
          'story-9845237719284-c27': {
            text: 'Grimper au sanctuaire du ciel.',
            description: 'Chercher la sanction.',
          },
          'story-9845237719284-c28': {
            text: 'Bifurquer vers la route du four.',
            description: 'Arrêter l\'ignition d\'abord.',
          },
        },
      },
      'story-9845237719284-15': {
        title: 'Feu de Serment',
        narration: 'La flamme grimpe votre poignet comme une vigne apprivoisée et laisse un bracelet chaud de lumière. Les villageois exhalent—un son comme le ressac se soulageant contre le rivage. La couronne s\'adoucit, moins lourde, comme si elle était satisfaite du poids partagé.',
        choices: {
          'story-9845237719284-c29': {
            text: 'Solliciter le sanctuaire du ciel.',
            description: 'Porter le souffle communal vers le haut.',
          },
          'story-9845237719284-c30': {
            text: 'Chercher conseil sur les murmures de la couronne.',
            description: 'Comprendre avant d\'agir.',
          },
        },
      },
      'story-9845237719284-16': {
        title: 'Chemin des Contrebandiers',
        narration: 'Une porte apparaît là où il ne devrait pas y en avoir et s\'ouvre sur l\'obscurité rance de sel. Des caisses murmurent de défiance tranquille: corde, huile, vieilles cartes avec des corrections honnêtes. Des pas résonnent—amis ou ennemis apprenant à être les deux.',
        choices: {
          'story-9845237719284-c31': {
            text: 'D\'ici, frapper le four.',
            description: 'Droit à la gorge.',
          },
          'story-9845237719284-c32': {
            text: 'Écouter le conseil de la couronne.',
            description: 'Risquer le murmure.',
          },
        },
      },
      'story-9845237719284-17': {
        title: 'Four Volcanique',
        narration: 'Des poumons de pierre halètent la chaleur; des chaînes cliquètent comme des os d\'hiver. Les ouvriers nourrissent bois et peur dans une gorge de rouge. Une seule valve gémit—un tour du cri ou du silence.',
        choices: {
          'story-9845237719284-c33': {
            text: 'Coincer la valve et fuir.',
            description: 'Le sabotage bat les discours.',
          },
          'story-9845237719284-c34': {
            text: 'Dévier la pression vers les évents du ciel.',
            description: 'Gagner du temps pour le sanctuaire.',
          },
        },
      },
      'story-9845237719284-18': {
        title: 'Sanctuaire du Ciel',
        narration: 'Haut au-dessus des bancs de tempête, des cloches faites de verre trouble sonnent sans mains. Une voix comme le temps ne demande rien et sait tout. La couronne se refroidit comme si elle était en présence d\'un parent, attendant de voir ce que vous êtes devenu.',
        choices: {
          'story-9845237719284-c35': {
            text: 'Demander à partager le feu de la couronne.',
            description: 'Plusieurs mains, charge plus légère.',
          },
          'story-9845237719284-c36': {
            text: 'Demander la force de la briser.',
            description: 'Ni tyran, ni outil.',
          },
        },
      },
      'story-9845237719284-19': {
        title: 'Murmures de la Couronne',
        narration: 'Quand vous écoutez, un chœur répond—les porteurs passés chantant à travers dent et langue. Ils avertissent d\'un chemin plus simple: porter la couronne profondément, laisser les autres orbiter autour de votre certitude. La chaleur goûte comme le miel; l\'arrière-goût comme la cendre.',
        choices: {
          'story-9845237719284-c37': {
            text: 'Rejeter l\'appât; chercher le sanctuaire.',
            description: 'Vous n\'êtes pas une fournaise.',
          },
          'story-9845237719284-c38': {
            text: 'S\'incliner vers la souveraineté.',
            description: 'Régner termine les arguments.',
          },
        },
      },
      'story-9845237719284-20': {
        title: 'Approche Finale',
        narration: 'La montagne retient son souffle; les villages retiennent le leur avec elle. Votre prochain coup décidera de la forme de la chaleur de demain. Dans votre paume, la couronne pèse comme promesse et avertissement.',
        choices: {
          'story-9845237719284-c39': {
            text: 'Revendiquer la couronne en tant que souverain.',
            description: 'Plier le feu à votre volonté.',
          },
          'story-9845237719284-c40': {
            text: 'Partager la flamme avec les villages.',
            description: 'Plusieurs porteurs, aucun tyran.',
          },
          'story-9845237719284-c41': {
            text: 'Partir vers un exil silencieux.',
            description: 'Refuser à la fois trône et guerre.',
          },
          'story-9845237719284-c42': {
            text: 'Briser la couronne sur la parole du sanctuaire.',
            description: 'Terminer la question pour toujours.',
          },
        },
      },
      'story-9845237719284-21': {
        title: 'Souverain de Cendres',
        narration: 'La couronne s\'enracine à travers votre voix et la montagne s\'agenouille. Les villages s\'inclinent—et tressaillent. La paix arrive rapidement, comme l\'œil d\'une tempête: calme et surveillée. Vos cartes deviennent obsolètes; votre nom ne l\'est pas.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: 'Flamme Partagée',
        narration: 'Vous levez la couronne et elle se divise comme du pain, les braises prenant racine dans de nombreuses mains. Le four se refroidit; les plans du Seigneur de Guerre meurent étouffés par la communauté. Les festivals fleurissent là où des garnisons auraient été, et les cartes sont dessinées en chœur.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: 'Exil Silencieux',
        narration: 'Vous laissez la couronne là où les cloches se souviennent de vous avec tendresse. La montagne somnole avec inquiétude, mais ne se réveille jamais en colère. Des années plus tard, des enfants suivent un cartographe itinérant qui trace des chemins sûrs à travers les champs de cendres en écoutant le vent.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: 'Couronne Brisée',
        narration: 'L\'or crie comme du verre quand vous le frappez sur la pierre; les braises bondissent, puis se déposent en chaleur douce et ordinaire. Le sanctuaire soupire de soulagement, et l\'histoire perd un tyran qu\'elle aurait pu rencontrer. Vos mains gardent une lueur faible les nuits d\'hiver—assez pour faire bouillir du thé.',
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
    title: '燼火の冠の誓い',
    description: '地図製作者の素描が生きた燼火へと温まると、忘れられた道筋が海岸沿いに燃え上がる。戦の君主が山を再点火し、今あなたの手に応える冠を奪取するために進軍する。その火を分かち合うか、砕くか、それとも戴くか?',
    author: 'クロノキャンバス・スタジオ',
    nodes: {
      'story-9845237719284-1': {
        title: '灰の前兆',
        narration: '夜明けが松林に霧を吹き込む中、あなたの炭で描いた地図が内側から輝き始め、その線が眠る燼火のように脈打つ。黒ずんだ金の環、触れると温かく、冠があるべきでない場所に横たわっている—あなたの袋の中、押し花の間に。囁かれる噂は、灰の戦君が内陸へ進軍し、燃料と恐怖を集めていると語る。冠の熱が高まり、最初の村が目覚める前に道を促す。',
        choices: {
          'story-9845237719284-c1': {
            text: '遺物市場へ向かう。',
            description: '知識と味方を求める。',
          },
          'story-9845237719284-c2': {
            text: '尾根の展望台を偵察する。',
            description: '大地の意図を読み取る。',
          },
        },
      },
      'story-9845237719284-2': {
        title: '遺物市場',
        narration: '天幕が鱗のように波打ち、護符が海風に揺れて糸に沿って鳴る。歯のない仲買人があなたの袋から滲み出る燼火の冠の輝きを見つめ、あなたを近くに手招きする。「地図は川の渡し場の近くでより真実に燃える」と彼女はしわがれた声で言う。「だが今は火印の偵察隊がそれを監視している。」',
        choices: {
          'story-9845237719284-c3': {
            text: '秘術の地図重ね合わせを購入する。',
            description: '線が線を明らかにする。',
          },
          'story-9845237719284-c4': {
            text: '火印の偵察隊を尾行する。',
            description: '情報には代価が必要。',
          },
        },
      },
      'story-9845237719284-3': {
        title: '尾根の展望台',
        narration: '黒い砂が海岸を帯状に走り、遠くのカルデラから煙の指が立ち昇る。風の中に行進する太鼓の音と、焼き入れされた刃の鉄と塩の匂い。下で何かが光る—火印の偵察隊が川へ向かう道を迂回している。',
        choices: {
          'story-9845237719284-c5': {
            text: '偵察隊を見つからずに追跡する。',
            description: '高さと静けさを利用する。',
          },
          'story-9845237719284-c6': {
            text: '洞窟の入り口へ近道で降りる。',
            description: '古い地図は尾根の下に空洞を示す。',
          },
        },
      },
      'story-9845237719284-4': {
        title: '秘術の重ね合わせ',
        narration: '透明な羊皮紙が冠の熱の一滴を吸い、隠された道で花開く。かすかな印章は川だけでなく、崖の下に刻まれた「秘密の通路」を指し示す。仲買人は歯茎を光らせて微笑む。「すべての近道は一種の約束だ。」',
        choices: {
          'story-9845237719284-c7': {
            text: '川の渡し場を取る。',
            description: '開けており、監視されているが速い。',
          },
          'story-9845237719284-c8': {
            text: '秘密の通路を探す。',
            description: '隠密のためのリスク。',
          },
        },
      },
      'story-9845237719284-5': {
        title: '火印の偵察兵',
        narration: '一人の偵察兵が風に曲がった松の下で立ち止まり、炭で書かれた予定表を確認している。灰の印がその顎を横切る—戦君への忠誠の線。冠が温まると、偵察兵の目が上がり、誰もいない場所に君主の存在を感じ取る。',
        choices: {
          'story-9845237719284-c9': {
            text: '奇襲して尋問する。',
            description: '迅速、静粛、断固として。',
          },
          'story-9845237719284-c10': {
            text: '川へ向かって忍び寄る。',
            description: '答えを時間と交換する。',
          },
        },
      },
      'story-9845237719284-6': {
        title: '洞窟の入り口',
        narration: '玄武岩のアーチが空洞の飲み込みで波を飲み、地衣類が小さな星座のように輝く。古い鑿が錆びながら、下へ螺旋を描く狭い階段の近くに横たわる。冠が敷居で唸る、半分は警告、半分は歓迎。',
        choices: {
          'story-9845237719284-c11': {
            text: '秘密の通路を取る。',
            description: '古い切り込みを信じる。',
          },
          'story-9845237719284-c12': {
            text: '内部の反響橋を渡る。',
            description: '隠密より速度。',
          },
        },
      },
      'story-9845237719284-7': {
        title: '川の渡し場',
        narration: '舟がタールを塗った縄に揺られ、渡し守が「誓いの火」と「天空の祠」について呟く。白墨で書かれた掲示板が戦君の需品係からの什一税率を列挙する。村人たちはあなたを近づく天候を見るように見つめる。',
        choices: {
          'story-9845237719284-c13': {
            text: '村長と交渉する。',
            description: '信頼を得て、時間を得る。',
          },
          'story-9845237719284-c14': {
            text: '浅瀬で冠を試す。',
            description: '力はリスクを招く。',
          },
        },
      },
      'story-9845237719284-8': {
        title: '秘密の通路',
        narration: 'あなたは石に印章を描き、継ぎ目があなたを溜息とともに受け入れる。誰も灯さなかった蝋燭が命を得て、白墨の集計を明らかにする—多くの通過、少ない帰還。廊下は水晶の唸りへと傾斜する。',
        choices: {
          'story-9845237719284-c15': {
            text: '燼火試練の間へ向かう。',
            description: '価値を証明するか、代価を払う。',
          },
          'story-9845237719284-c16': {
            text: '反響橋を渡る。',
            description: '道を短縮する。',
          },
        },
      },
      'story-9845237719284-9': {
        title: '偵察兵の告白',
        narration: '玄武岩に押さえつけられた偵察兵は、冠の熱が空気を刺すと素早く屈服する。「戦君は山の下の窯に燃料を送っている」と彼らは煙で濡れた目で囁く。「それが咆哮すれば、あなた方の村は跪くだろう。」',
        choices: {
          'story-9845237719284-c17': {
            text: '彼らを許し、村の味方を探す。',
            description: '慈悲は伝令を買う。',
          },
          'story-9845237719284-c18': {
            text: '戦君の計画を研究するために急ぐ。',
            description: '知識は梃子である。',
          },
        },
      },
      'story-9845237719284-10': {
        title: '反響橋',
        narration: '狭い橋げたが一歩ごとに歌い、あなたの息が他の声となって戻ってくる。下の落下の中で、水晶がガラスに降る雨のように鳴る。冠の輝きが虚空の上に細い道を紡ぎ、あなただけが見える足場を提供するかのよう。',
        choices: {
          'story-9845237719284-c19': {
            text: '水晶の道を橋げたへ辿る。',
            description: '天空の祠へ。',
          },
          'story-9845237719284-c20': {
            text: '燼火試練へ迂回する。',
            description: 'まず主張を証明する。',
          },
        },
      },
      'story-9845237719284-11': {
        title: '村の交渉',
        narration: '長老たちは流木のような手と潮だまりのような目で座る。彼らは誓いの火—燃やさずに縛る炎—と、誕生ではなく息で担い手を選ぶ祠について語る。子供たちは距離を置いて回り、互いに「女王」と囁くことを敢えてする。',
        choices: {
          'story-9845237719284-c21': {
            text: '公に誓いの火を誓う。',
            description: '心を勝ち取り、重みを得る。',
          },
          'story-9845237719284-c22': {
            text: '密輸の道から抜け出す。',
            description: '味方は後で、時間は今。',
          },
        },
      },
      'story-9845237719284-12': {
        title: '燼火試練',
        narration: '火鉢が眠り、灰の印章に縁取られている。冠を下ろすと、火鉢が消費せずに白金色に燃え上がる。心臓の鼓動ごとに空中に光の線を書き、嘘をつけない意図の帳簿。',
        choices: {
          'story-9845237719284-c23': {
            text: '村を守ることに自分を縛る。',
            description: '力より義務。',
          },
          'story-9845237719284-c24': {
            text: '天空の祠に対峙する権利を主張する。',
            description: '行動の前に権威。',
          },
        },
      },
      'story-9845237719284-13': {
        title: '戦君の計画',
        narration: '盗まれた台帳に留められた地図が、地下の窯に燃料を送る貯蔵庫を示す。印された日付が迫る。「点火」。別の手書きのメモが読める。「冠は息に従う—担い手の声を盗め。」',
        choices: {
          'story-9845237719284-c25': {
            text: '窯のトンネルを破壊する。',
            description: '計画の喉を切る。',
          },
          'story-9845237719284-c26': {
            text: '密輸の道へ忍び込む。',
            description: '側面から祠に警告する。',
          },
        },
      },
      'story-9845237719284-14': {
        title: '水晶の橋げた',
        narration: '星が空を梳き、橋げたがあなたの歯で感じる音階を唸る。風が細く冷たい指で冠を貫き、言語なしに問いを投げかける。足跡が上方へ続く—他の者が来た、あるいは来るだろう。',
        choices: {
          'story-9845237719284-c27': {
            text: '天空の祠へ登る。',
            description: '認可を求める。',
          },
          'story-9845237719284-c28': {
            text: '窯ルートへ切り離す。',
            description: 'まず点火を止める。',
          },
        },
      },
      'story-9845237719284-15': {
        title: '誓いの火',
        narration: '炎が飼い慣らされた蔓のようにあなたの手首を登り、温かい光の腕輪を残す。村人たちが息を吐く—岸に対して自らを解放する波のような音。冠が柔らかくなり、重さが減り、共有された重みに喜んでいるかのよう。',
        choices: {
          'story-9845237719284-c29': {
            text: '天空の祠に嘆願する。',
            description: '共同体の息を上へ運ぶ。',
          },
          'story-9845237719284-c30': {
            text: '冠の囁きについて助言を求める。',
            description: '行動の前に理解する。',
          },
        },
      },
      'story-9845237719284-16': {
        title: '密輸の道',
        narration: '扉があるべきでない場所に現れ、塩気の古い暗闇へと開く。木箱が静かな反抗を囁く。縄、油、正直な訂正のある古い地図。足音が響く—友か敵か、両方になることを学ぶ者たち。',
        choices: {
          'story-9845237719284-c31': {
            text: 'ここから窯を攻撃する。',
            description: '喉へ直行。',
          },
          'story-9845237719284-c32': {
            text: '冠の助言を聞く。',
            description: '囁きを危険に晒す。',
          },
        },
      },
      'story-9845237719284-17': {
        title: '火山窯',
        narration: '石の肺が熱を喘ぎ、鎖が冬の骨のように鳴る。労働者たちが木材と恐怖を赤い喉に送り込む。一つの弁が呻く—叫びか沈黙かの一回転。',
        choices: {
          'story-9845237719284-c33': {
            text: '弁を詰まらせて逃げる。',
            description: '破壊は演説に勝る。',
          },
          'story-9845237719284-c34': {
            text: '圧力を天空の通気口へ迂回させる。',
            description: '祠のために時間を買う。',
          },
        },
      },
      'story-9845237719284-18': {
        title: '天空の祠',
        narration: '嵐の堤の高く上で、曇ったガラスで作られた鐘が手なしに鳴る。天候のような声が何も尋ねず、すべてを知る。冠が冷えていく、親の前にいるかのように、あなたが何になったかを見るために待っている。',
        choices: {
          'story-9845237719284-c35': {
            text: '冠の火を分かち合うことを求める。',
            description: '多くの手、軽い荷。',
          },
          'story-9845237719284-c36': {
            text: 'それを砕く力を求める。',
            description: '暴君もなく、道具もなく。',
          },
        },
      },
      'story-9845237719284-19': {
        title: '冠の囁き',
        narration: '耳を傾けると、合唱が答える—過去の担い手が歯と舌を通して歌う。彼らはより単純な道を警告する。冠を深く戴き、他者をあなたの確信の周りに軌道させよ。温かさは蜂蜜のような味、後味は灰のよう。',
        choices: {
          'story-9845237719284-c37': {
            text: '誘惑を拒否し、祠を探す。',
            description: 'あなたは炉ではない。',
          },
          'story-9845237719284-c38': {
            text: '主権へ傾く。',
            description: '統治は議論を終わらせる。',
          },
        },
      },
      'story-9845237719284-20': {
        title: '最終接近',
        narration: '山が息を止め、村々もそれとともに息を止める。あなたの次の一手が明日の熱の形を決める。掌の中で、冠が約束と警告のように重い。',
        choices: {
          'story-9845237719284-c39': {
            text: '主権者として冠を主張する。',
            description: '火をあなたの意志に曲げる。',
          },
          'story-9845237719284-c40': {
            text: '村々と炎を分かち合う。',
            description: '多くの担い手、暴君なし。',
          },
          'story-9845237719284-c41': {
            text: '静かな追放へ立ち去る。',
            description: '玉座も戦争も拒否する。',
          },
          'story-9845237719284-c42': {
            text: '祠の言葉で冠を砕く。',
            description: '問いを永遠に終わらせる。',
          },
        },
      },
      'story-9845237719284-21': {
        title: '灰の主権者',
        narration: '冠があなたの声を通して根を張り、山が跪く。村々が頭を下げる—そして怯える。平和が嵐の目のように素早く訪れる。穏やかで、監視されて。あなたの地図は時代遅れになる。あなたの名はそうならない。',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: '分かち合われた炎',
        narration: 'あなたは冠を持ち上げ、それはパンのように分割され、燼火が多くの手に根を下ろす。窯が冷え、戦君の計画は共同体に窒息して死ぬ。祭りが駐屯地があったであろう場所に咲き、地図は合唱で描かれる。',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: '静かな追放',
        narration: 'あなたは鐘があなたを優しく覚えている場所に冠を残す。山は不安げにまどろむが、決して怒って目覚めない。何年も後、子供たちは風を聞いて灰の野原を通る安全な道を描く旅する地図製作者を追う。',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: '砕けた冠',
        narration: '石に打ちつけると金がガラスのように叫び、燼火が跳ね、それから柔らかく普通の温かさとして落ち着く。祠が安堵の溜息をつき、歴史は出会ったかもしれない暴君を失う。あなたの手は冬の夜にかすかな輝きを保つ—茶を沸かすのに十分な。',
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
