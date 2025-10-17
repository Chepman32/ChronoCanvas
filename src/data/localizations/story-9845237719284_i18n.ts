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
    title: 'Клятва Тлеющей Короны',
    description: 'Когда набросок картографа разогревается до живых угольков, забытые путевые линии вспыхивают вдоль побережья. Военачальник выступает, чтобы вновь разжечь гору и захватить Корону, которая теперь отвечает вашей руке. Разделите ли вы её огонь, сломаете её или наденете?',
    author: 'Студия ХроноКанвас',
    nodes: {
      'story-9845237719284-1': {
        title: 'Пепельное Предзнаменование',
        narration: 'Рассвет вдыхает туман сквозь сосны, пока ваша угольная карта светится изнутри, её линии пульсируют как спящие угли. Кольцо почерневшего золота, тёплое на ощупь, лежит там, где не должно быть короны—в вашей сумке, между прессованными листьями. Прошептанные слухи говорят о Пепельном Военачальнике, марширующем вглубь земли, собирающем топливо и страх. Жар короны поднимается, торопя путь, прежде чем проснётся первая деревня.',
        choices: {
          'story-9845237719284-c1': {
            text: 'Отправиться на рынок реликвий.',
            description: 'Искать знания и союзников.',
          },
          'story-9845237719284-c2': {
            text: 'Разведать смотровую площадку на гребне.',
            description: 'Прочитать намерение земли.',
          },
        },
      },
      'story-9845237719284-2': {
        title: 'Рынок Реликвий',
        narration: 'Палатки колышутся как чешуя; амулеты позвякивают на верёвках против морского бриза. Беззубая торговка замечает свечение тлеющей короны, просачивающееся сквозь вашу сумку, и манит вас ближе. «Карты горят вернее у речной переправы», хрипит она, «но теперь её сторожат разведчики Огненного Клейма».',
        choices: {
          'story-9845237719284-c3': {
            text: 'Купить арканное наложение карты.',
            description: 'Пусть линии раскроют линии.',
          },
          'story-9845237719284-c4': {
            text: 'Выследить разведчика Огненного Клейма.',
            description: 'Информация за цену.',
          },
        },
      },
      'story-9845237719284-3': {
        title: 'Смотровая Площадка на Гребне',
        narration: 'Чёрный песок лентой тянется вдоль берега; дымные пальцы поднимаются из дальней кальдеры. На ветру: марширующие барабаны и железно-солёный запах закалённых клинков. Блеск движется внизу—разведчики Огненного Клейма обходят дорогу к реке.',
        choices: {
          'story-9845237719284-c5': {
            text: 'Следовать за разведчиками незамеченным.',
            description: 'Использовать высоту и тишину.',
          },
          'story-9845237719284-c6': {
            text: 'Спуститься в пещерный проход как короткий путь.',
            description: 'Старые карты показывают полость под гребнем.',
          },
        },
      },
      'story-9845237719284-4': {
        title: 'Арканное Наложение',
        narration: 'Прозрачный пергамент впитывает каплю тепла короны и расцветает скрытыми тропами. Слабая печать указывает не только на реку, но и на «тайный проход», высеченный под утёсами. Торговка улыбается, дёсны блестят: «Каждый короткий путь—это своего рода обещание».',
        choices: {
          'story-9845237719284-c7': {
            text: 'Взять речную переправу.',
            description: 'Открыто, под наблюдением, но быстро.',
          },
          'story-9845237719284-c8': {
            text: 'Найти тайный проход.',
            description: 'Риск ради скрытности.',
          },
        },
      },
      'story-9845237719284-5': {
        title: 'Разведчик Огненного Клейма',
        narration: 'Одинокий разведчик останавливается под согнутой ветром сосной, проверяя угольное расписание. Пепельные отметины полосами пересекают его челюсть—линии верности Военачальнику. Когда корона теплеет, глаза разведчика поднимаются, чувствуя господское присутствие там, где никого нет.',
        choices: {
          'story-9845237719284-c9': {
            text: 'Устроить засаду и допросить.',
            description: 'Быстро, тихо, решительно.',
          },
          'story-9845237719284-c10': {
            text: 'Проскользнуть мимо к реке.',
            description: 'Обменять ответы на время.',
          },
        },
      },
      'story-9845237719284-6': {
        title: 'Устье Пещеры',
        narration: 'Базальтовые арки пьют прибой полыми глотками; лишайники мерцают как маленькие созвездия. Старые зубила лежат ржавея у узкой лестницы, спиралью уходящей вниз. Корона гудит на пороге, наполовину предупреждение, наполовину приветствие.',
        choices: {
          'story-9845237719284-c11': {
            text: 'Пойти по тайному проходу.',
            description: 'Довериться старой прорубке.',
          },
          'story-9845237719284-c12': {
            text: 'Пересечь эхомост внутри.',
            description: 'Скорость вместо скрытности.',
          },
        },
      },
      'story-9845237719284-7': {
        title: 'Речная Переправа',
        narration: 'Лодки качаются у просмолённых канатов; паромщики бормочут о «клятвенном огне» и «небесных святилищах». Меловая доска перечисляет ставки десятины от интенданта Военачальника. Деревенские жители смотрят на вас, как смотрят на приближающуюся погоду.',
        choices: {
          'story-9845237719284-c13': {
            text: 'Договориться со старостой деревни.',
            description: 'Завоевать доверие, выиграть время.',
          },
          'story-9845237719284-c14': {
            text: 'Испытать корону у брода.',
            description: 'Сила приглашает риск.',
          },
        },
      },
      'story-9845237719284-8': {
        title: 'Тайный Проход',
        narration: 'Вы начертываете печать на камне; шов принимает вас со вздохом. Свечи, которых никто не зажигал, оживают, открывая меловые подсчёты—много проходов, мало возвратов. Коридор наклоняется к кристальному гудению.',
        choices: {
          'story-9845237719284-c15': {
            text: 'Направиться в комнату испытания углями.',
            description: 'Доказать ценность или заплатить.',
          },
          'story-9845237719284-c16': {
            text: 'Пересечь эхомост.',
            description: 'Сократить путь.',
          },
        },
      },
      'story-9845237719284-9': {
        title: 'Признание Разведчика',
        narration: 'Прижатый к базальту, разведчик быстро сдаётся, когда жар короны колет воздух. «Военачальник питает печь под горой», шепчут они, глаза влажные от дыма. «Когда она зарычит, ваши деревни преклонят колени».',
        choices: {
          'story-9845237719284-c17': {
            text: 'Пощадить и искать деревенских союзников.',
            description: 'Милосердие покупает гонцов.',
          },
          'story-9845237719284-c18': {
            text: 'Спешить изучить план Военачальника.',
            description: 'Знание—это рычаг.',
          },
        },
      },
      'story-9845237719284-10': {
        title: 'Эхомост',
        narration: 'Узкий пролёт поёт с каждым шагом; ваше дыхание возвращается к вам в других голосах. В падении внизу кристаллы звенят как дождь по стеклу. Свечение короны сплетает тонкие пути над пустотой, словно предлагая опоры, которые видите только вы.',
        choices: {
          'story-9845237719284-c19': {
            text: 'Следовать по кристальной тропе к пролёту.',
            description: 'К небесному святилищу.',
          },
          'story-9845237719284-c20': {
            text: 'Свернуть к испытанию углями.',
            description: 'Сначала доказать своё право.',
          },
        },
      },
      'story-9845237719284-11': {
        title: 'Деревенские Переговоры',
        narration: 'Старейшины сидят с руками как плавник и глазами как приливные лужи. Они говорят о клятвенном огне—пламени, связывающем без сжигания—и святилище, выбирающем носителей по дыханию, а не по рождению. Дети кружат на расстоянии, осмеливаясь прошептать друг другу «королева».',
        choices: {
          'story-9845237719284-c21': {
            text: 'Поклясться клятвенным огнём публично.',
            description: 'Завоевать сердца, обрести вес.',
          },
          'story-9845237719284-c22': {
            text: 'Ускользнуть по контрабандному пути.',
            description: 'Союзники потом; время сейчас.',
          },
        },
      },
      'story-9845237719284-12': {
        title: 'Испытание Углями',
        narration: 'Жаровня спит, окаймлённая пепельными печатями. Когда вы опускаете корону, жаровня вспыхивает бело-золотым без поглощения. Каждое биение сердца пишет линию света в воздухе, книгу намерений, которая не может лгать.',
        choices: {
          'story-9845237719284-c23': {
            text: 'Связать себя защитой деревень.',
            description: 'Долг превыше силы.',
          },
          'story-9845237719284-c24': {
            text: 'Заявить право предстать перед небесным святилищем.',
            description: 'Власть перед действием.',
          },
        },
      },
      'story-9845237719284-13': {
        title: 'План Военачальника',
        narration: 'Карты, приколотые к краденому реестру, показывают топливные склады, питающие подземную печь. Отмеченная дата грозит: «Воспламенение». Записка другим почерком гласит: «Корона склоняется перед дыханием—укради голос носителя».',
        choices: {
          'story-9845237719284-c25': {
            text: 'Саботировать печные тоннели.',
            description: 'Перерезать горло плану.',
          },
          'story-9845237719284-c26': {
            text: 'Проскользнуть к контрабандному пути.',
            description: 'Обойти с фланга и предупредить святилище.',
          },
        },
      },
      'story-9845237719284-14': {
        title: 'Кристальный Пролёт',
        narration: 'Звёзды расчёсывают небо; пролёт гудит гаммой, которую вы чувствуете в зубах. Ветер продевает корону тонкими холодными пальцами, задавая вопросы без языка. Следы ведут вверх—другие приходили или придут.',
        choices: {
          'story-9845237719284-c27': {
            text: 'Подняться к небесному святилищу.',
            description: 'Искать санкцию.',
          },
          'story-9845237719284-c28': {
            text: 'Свернуть к печному маршруту.',
            description: 'Сначала остановить воспламенение.',
          },
        },
      },
      'story-9845237719284-15': {
        title: 'Клятвенный Огонь',
        narration: 'Пламя взбирается по вашему запястью, как приручённая лоза, и оставляет тёплый браслет света. Жители деревни выдыхают—звук как прибой, облегчающийся о берег. Корона смягчается, становится менее тяжёлой, словно довольная разделённым весом.',
        choices: {
          'story-9845237719284-c29': {
            text: 'Обратиться к небесному святилищу.',
            description: 'Нести общее дыхание вверх.',
          },
          'story-9845237719284-c30': {
            text: 'Искать совета о шёпотах короны.',
            description: 'Понять перед действием.',
          },
        },
      },
      'story-9845237719284-16': {
        title: 'Контрабандный Путь',
        narration: 'Дверь появляется там, где её не должно быть, и открывается в солёную затхлую тьму. Ящики шепчут о тихом неповиновении: верёвка, масло, старые карты с честными исправлениями. Шаги эхом отдаются—друзья или враги, учащиеся быть и теми, и другими.',
        choices: {
          'story-9845237719284-c31': {
            text: 'Отсюда ударить по печи.',
            description: 'Прямо в горло.',
          },
          'story-9845237719284-c32': {
            text: 'Послушать совета короны.',
            description: 'Рискнуть шёпотом.',
          },
        },
      },
      'story-9845237719284-17': {
        title: 'Вулканическая Печь',
        narration: 'Каменные лёгкие вздымают жар; цепи гремят как зимние кости. Работники кормят древесину и страх в глотку красного цвета. Один клапан стонет—один поворот от крика или тишины.',
        choices: {
          'story-9845237719284-c33': {
            text: 'Заклинить клапан и бежать.',
            description: 'Саботаж побеждает речи.',
          },
          'story-9845237719284-c34': {
            text: 'Перенаправить давление к небесным отверстиям.',
            description: 'Купить время для святилища.',
          },
        },
      },
      'story-9845237719284-18': {
        title: 'Небесное Святилище',
        narration: 'Высоко над штормовыми берегами колокола из мутного стекла звонят без рук. Голос, как погода, ничего не спрашивает и всё знает. Корона остывает, словно в присутствии родителя, ожидая увидеть, кем вы стали.',
        choices: {
          'story-9845237719284-c35': {
            text: 'Попросить разделить огонь короны.',
            description: 'Много рук, легче ноша.',
          },
          'story-9845237719284-c36': {
            text: 'Попросить силы сломать её.',
            description: 'Ни тиран, ни инструмент.',
          },
        },
      },
      'story-9845237719284-19': {
        title: 'Шёпоты Короны',
        narration: 'Когда вы слушаете, отвечает хор—прошлые носители поют сквозь зуб и язык. Они предупреждают о более простом пути: носить корону глубоко, позволить другим вращаться вокруг вашей уверенности. Тепло на вкус как мёд; послевкусие как пепел.',
        choices: {
          'story-9845237719284-c37': {
            text: 'Отвергнуть приманку; искать святилище.',
            description: 'Вы не плавильная печь.',
          },
          'story-9845237719284-c38': {
            text: 'Склониться к суверенитету.',
            description: 'Правление прекращает споры.',
          },
        },
      },
      'story-9845237719284-20': {
        title: 'Финальное Приближение',
        narration: 'Гора задерживает дыхание; деревни задерживают своё вместе с ней. Ваш следующий удар решит форму завтрашнего жара. На вашей ладони корона весит как обещание и предупреждение.',
        choices: {
          'story-9845237719284-c39': {
            text: 'Заявить корону как суверен.',
            description: 'Подчинить огонь своей воле.',
          },
          'story-9845237719284-c40': {
            text: 'Разделить пламя с деревнями.',
            description: 'Много носителей, никакого тирана.',
          },
          'story-9845237719284-c41': {
            text: 'Уйти в тихое изгнание.',
            description: 'Отказаться и от трона, и от войны.',
          },
          'story-9845237719284-c42': {
            text: 'Разбить корону по слову святилища.',
            description: 'Прекратить вопрос навсегда.',
          },
        },
      },
      'story-9845237719284-21': {
        title: 'Пепельный Суверен',
        narration: 'Корона укореняется сквозь ваш голос, и гора преклоняет колени. Деревни кланяются—и вздрагивают. Мир приходит быстро, как око бури: спокойный и наблюдаемый. Ваши карты устаревают; ваше имя—нет.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: 'Разделённое Пламя',
        narration: 'Вы поднимаете корону, и она делится, как хлеб, угли пускают корни во многих руках. Печь остывает; планы Военачальника умирают, задушенные общиной. Фестивали расцветают там, где стояли бы гарнизоны, и карты рисуются хором.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: 'Тихое Изгнание',
        narration: 'Вы оставляете корону там, где колокола вспоминают вас с любовью. Гора дремлет беспокойно, но никогда не просыпается в гневе. Годы спустя дети следуют за странствующим картографом, который рисует безопасные пути через пепельные поля, слушая ветер.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: 'Разбитая Корона',
        narration: 'Золото кричит, как стекло, когда вы ударяете его о камень; угли подскакивают, затем оседают как мягкое, обычное тепло. Святилище вздыхает с облегчением, и история теряет тирана, которого могла бы встретить. Ваши руки сохраняют слабое свечение в зимние ночи—достаточное, чтобы вскипятить чай.',
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
    title: 'O Juramento da Coroa de Brasas',
    description: 'Quando o esboço de um cartógrafo aquece até se tornar brasa viva, linhas esquecidas flamejam ao longo da costa. Um senhor da guerra marcha para reacender a montanha e tomar a Coroa que agora responde à sua mão. Você compartilhará seu fogo, a quebrará ou a usará?',
    author: 'Estúdio ChronoCanvas',
    nodes: {
      'story-9845237719284-1': {
        title: 'Presságio de Cinzas',
        narration: 'A aurora exala névoa através dos pinheiros enquanto seu mapa de carvão brilha por dentro, suas linhas pulsando como brasas adormecidas. Um aro de ouro enegrecido, quente ao toque, repousa onde nenhuma coroa deveria estar—dentro de sua sacola, entre folhas prensadas. Rumores sussurrados falam de um Senhor da Guerra das Cinzas marchando para o interior, reunindo combustível e medo. O calor da coroa aumenta, instando um caminho antes que a primeira aldeia desperte.',
        choices: {
          'story-9845237719284-c1': {
            text: 'Dirigir-se ao mercado de relíquias.',
            description: 'Buscar conhecimento e aliados.',
          },
          'story-9845237719284-c2': {
            text: 'Explorar o mirante da crista.',
            description: 'Ler a intenção da terra.',
          },
        },
      },
      'story-9845237719284-2': {
        title: 'Mercado de Relíquias',
        narration: 'Tendas ondulam como escamas; amuletos tilintar em cordas contra a brisa marinha. Uma negociante desdentada observa o brilho da coroa de brasas sangrando através de sua sacola e acena para você se aproximar. "Mapas queimam mais verdadeiros perto da travessia do rio", ela raspa, "mas os batedores da Marca de Fogo a vigiam agora."',
        choices: {
          'story-9845237719284-c3': {
            text: 'Comprar uma sobreposição de mapa arcano.',
            description: 'Deixar linhas revelarem linhas.',
          },
          'story-9845237719284-c4': {
            text: 'Seguir um batedor da Marca de Fogo.',
            description: 'Informação a um custo.',
          },
        },
      },
      'story-9845237719284-3': {
        title: 'Mirante da Crista',
        narration: 'Areia negra serpenteia pela costa; dedos de fumaça sobem de uma caldeira distante. No vento: tambores marchando e o cheiro de ferro e sal de lâminas temperadas. Um brilho se move abaixo—batedores da Marca de Fogo contornando a estrada em direção ao rio.',
        choices: {
          'story-9845237719284-c5': {
            text: 'Seguir os batedores sem ser visto.',
            description: 'Usar altura e silêncio.',
          },
          'story-9845237719284-c6': {
            text: 'Descer pela boca da caverna como atalho.',
            description: 'Mapas antigos mostram uma cavidade sob a crista.',
          },
        },
      },
      'story-9845237719284-4': {
        title: 'Sobreposição Arcana',
        narration: 'Velino transparente bebe uma gota do calor da coroa e floresce com caminhos ocultos. Um selo tênue aponta não apenas para o rio, mas para uma "passagem secreta" gravada sob os penhascos. A negociante sorri, gengivas brilhando: "Cada atalho é uma espécie de promessa."',
        choices: {
          'story-9845237719284-c7': {
            text: 'Tomar a travessia do rio.',
            description: 'Aberta, vigiada, mas rápida.',
          },
          'story-9845237719284-c8': {
            text: 'Procurar a passagem secreta.',
            description: 'Risco por discrição.',
          },
        },
      },
      'story-9845237719284-5': {
        title: 'Batedor da Marca de Fogo',
        narration: 'Um batedor solitário pausa sob um pinheiro curvado pelo vento, verificando um cronograma de carvão. Marcas de cinza listram sua mandíbula—linhas de lealdade ao Senhor da Guerra. Quando a coroa esquenta, os olhos do batedor se erguem, sentindo uma presença senhorial onde ninguém está.',
        choices: {
          'story-9845237719284-c9': {
            text: 'Emboscar e interrogar.',
            description: 'Rápido, silencioso, decisivo.',
          },
          'story-9845237719284-c10': {
            text: 'Esgueirar-se em direção ao rio.',
            description: 'Trocar respostas por tempo.',
          },
        },
      },
      'story-9845237719284-6': {
        title: 'Boca da Caverna',
        narration: 'Arcos de basalto bebem a ressaca em goles ocos; líquenes brilham como pequenas constelações. Cinzéis velhos jazem enferrujando perto de uma escada estreita espiralando para baixo. A coroa zumbe no limiar, meio aviso, meio boas-vindas.',
        choices: {
          'story-9845237719284-c11': {
            text: 'Tomar a passagem secreta.',
            description: 'Confiar no corte antigo.',
          },
          'story-9845237719284-c12': {
            text: 'Atravessar a ponte de eco por dentro.',
            description: 'Velocidade sobre discrição.',
          },
        },
      },
      'story-9845237719284-7': {
        title: 'Travessia do Rio',
        narration: 'Barcos balançam contra cordas alcatroadas; barqueiros murmuram sobre "fogo de juramento" e "santuários do céu". Um quadro de giz lista taxas de dízimo do intendente do Senhor da Guerra. Aldeões observam você como se observa o tempo que se aproxima.',
        choices: {
          'story-9845237719284-c13': {
            text: 'Parlamentar com o chefe da aldeia.',
            description: 'Ganhar confiança, ganhar tempo.',
          },
          'story-9845237719284-c14': {
            text: 'Testar a coroa no vau.',
            description: 'Poder convida risco.',
          },
        },
      },
      'story-9845237719284-8': {
        title: 'Passagem Secreta',
        narration: 'Você traça um selo na pedra; a costura aceita você com um suspiro. Velas que ninguém acendeu ganham vida, revelando contagens de giz—muitas passagens, poucos retornos. O corredor inclina-se em direção a um zumbido cristalino.',
        choices: {
          'story-9845237719284-c15': {
            text: 'Dirigir-se à câmara de teste de brasas.',
            description: 'Provar valor, ou pagar.',
          },
          'story-9845237719284-c16': {
            text: 'Atravessar a ponte de eco.',
            description: 'Encurtar o caminho.',
          },
        },
      },
      'story-9845237719284-9': {
        title: 'Confissão do Batedor',
        narration: 'Preso contra basalto, o batedor cede rapidamente quando o calor da coroa espeta o ar. "O Senhor da Guerra alimenta uma fornalha sob a montanha", eles sussurram, olhos úmidos de fumaça. "Quando rugir, suas aldeias ajoelharão."',
        choices: {
          'story-9845237719284-c17': {
            text: 'Poupá-los e buscar aliados na aldeia.',
            description: 'Misericórdia compra mensageiros.',
          },
          'story-9845237719284-c18': {
            text: 'Apressar-se para estudar o plano do Senhor da Guerra.',
            description: 'Conhecimento é alavancagem.',
          },
        },
      },
      'story-9845237719284-10': {
        title: 'Ponte de Eco',
        narration: 'Um vão estreito canta a cada passo; seu fôlego retorna a você em outras vozes. Na queda abaixo, cristais tilintam como chuva no vidro. O brilho da coroa tece caminhos finos sobre o vazio, como se oferecesse apoios que só você pode ver.',
        choices: {
          'story-9845237719284-c19': {
            text: 'Seguir o caminho de cristal até o vão.',
            description: 'Em direção ao santuário do céu.',
          },
          'story-9845237719284-c20': {
            text: 'Desviar para o teste de brasas.',
            description: 'Provar sua reivindicação primeiro.',
          },
        },
      },
      'story-9845237719284-11': {
        title: 'Parlamento da Aldeia',
        narration: 'Anciãos sentam-se com mãos como madeira flutuante e olhos como poças de maré. Eles falam de fogo de juramento—chama que liga sem queimar—e um santuário que escolhe portadores pela respiração, não pelo nascimento. Crianças circulam à distância, desafiando-se a sussurrar "rainha".',
        choices: {
          'story-9845237719284-c21': {
            text: 'Jurar o fogo de juramento publicamente.',
            description: 'Ganhar corações, ganhar peso.',
          },
          'story-9845237719284-c22': {
            text: 'Escapar pelo caminho dos contrabandistas.',
            description: 'Aliados depois; tempo agora.',
          },
        },
      },
      'story-9845237719284-12': {
        title: 'Teste de Brasas',
        narration: 'Um braseiro dorme, contornado por selos de cinza. Quando você abaixa a coroa, o braseiro inflama branco-dourado sem consumir. Cada batida cardíaca escreve uma linha de luz no ar, um registro de intenção que não pode mentir.',
        choices: {
          'story-9845237719284-c23': {
            text: 'Vincular-se a proteger as aldeias.',
            description: 'Dever sobre poder.',
          },
          'story-9845237719284-c24': {
            text: 'Reivindicar o direito de confrontar o santuário do céu.',
            description: 'Autoridade antes da ação.',
          },
        },
      },
      'story-9845237719284-13': {
        title: 'Plano do Senhor da Guerra',
        narration: 'Mapas presos a um livro-razão roubado mostram depósitos de combustível alimentando uma fornalha subterrânea. Uma data marcada ameaça: "Ignição". Uma nota em uma caligrafia diferente diz: "A Coroa se curva à respiração—roube a voz do portador."',
        choices: {
          'story-9845237719284-c25': {
            text: 'Sabotar os túneis da fornalha.',
            description: 'Cortar a garganta do plano.',
          },
          'story-9845237719284-c26': {
            text: 'Esgueirar-se para o caminho dos contrabandistas.',
            description: 'Flanquear e avisar o santuário.',
          },
        },
      },
      'story-9845237719284-14': {
        title: 'Vão de Cristal',
        narration: 'Estrelas penteiam o céu; o vão zumbe uma escala que você sente em seus dentes. O vento enfia a coroa com dedos finos e frios, fazendo perguntas sem linguagem. Pegadas levam para cima—outros vieram, ou virão.',
        choices: {
          'story-9845237719284-c27': {
            text: 'Subir ao santuário do céu.',
            description: 'Buscar sanção.',
          },
          'story-9845237719284-c28': {
            text: 'Desviar para a rota da fornalha.',
            description: 'Parar a ignição primeiro.',
          },
        },
      },
      'story-9845237719284-15': {
        title: 'Fogo de Juramento',
        narration: 'A chama sobe seu pulso como uma videira domesticada e deixa um bracelete quente de luz. Aldeões exalam—um som como ressaca aliviando-se contra a costa. A coroa amacia, menos pesada, como se estivesse satisfeita com o peso compartilhado.',
        choices: {
          'story-9845237719284-c29': {
            text: 'Solicitar ao santuário do céu.',
            description: 'Carregar a respiração comunal para cima.',
          },
          'story-9845237719284-c30': {
            text: 'Buscar conselho sobre os sussurros da coroa.',
            description: 'Compreender antes de agir.',
          },
        },
      },
      'story-9845237719284-16': {
        title: 'Caminho dos Contrabandistas',
        narration: 'Uma porta aparece onde não deveria haver uma e se abre para a escuridão rançosa de sal. Caixotes sussurram desafio silencioso: corda, óleo, mapas velhos com correções honestas. Passos ecoam—amigos ou inimigos aprendendo a ser ambos.',
        choices: {
          'story-9845237719284-c31': {
            text: 'Daqui, atacar a fornalha.',
            description: 'Direto para a garganta.',
          },
          'story-9845237719284-c32': {
            text: 'Ouvir o conselho da coroa.',
            description: 'Arriscar o sussurro.',
          },
        },
      },
      'story-9845237719284-17': {
        title: 'Fornalha Vulcânica',
        narration: 'Pulmões de pedra ofegam calor; correntes chacoalham como ossos de inverno. Trabalhadores alimentam madeira e medo em uma garganta de vermelho. Uma única válvula geme—uma volta do grito ou do silêncio.',
        choices: {
          'story-9845237719284-c33': {
            text: 'Travar a válvula e fugir.',
            description: 'Sabotagem supera discursos.',
          },
          'story-9845237719284-c34': {
            text: 'Desviar a pressão para as saídas do céu.',
            description: 'Comprar tempo para o santuário.',
          },
        },
      },
      'story-9845237719284-18': {
        title: 'Santuário do Céu',
        narration: 'Alto acima de bancos de tempestade, sinos feitos de vidro turvo tocam sem mãos. Uma voz como o clima não pergunta nada e sabe tudo. A coroa esfria como se estivesse na presença de um pai, esperando para ver o que você se tornou.',
        choices: {
          'story-9845237719284-c35': {
            text: 'Pedir para compartilhar o fogo da coroa.',
            description: 'Muitas mãos, carga mais leve.',
          },
          'story-9845237719284-c36': {
            text: 'Pedir força para quebrá-la.',
            description: 'Nem tirano, nem ferramenta.',
          },
        },
      },
      'story-9845237719284-19': {
        title: 'Sussurros da Coroa',
        narration: 'Quando você escuta, um coro responde—portadores passados cantando através de dente e língua. Eles advertem de um caminho mais simples: usar a coroa profundamente, deixar outros orbitarem sua certeza. O calor sabe como mel; o gosto residual como cinza.',
        choices: {
          'story-9845237719284-c37': {
            text: 'Rejeitar a atração; buscar o santuário.',
            description: 'Você não é uma fornalha.',
          },
          'story-9845237719284-c38': {
            text: 'Inclinar-se para a soberania.',
            description: 'Governar termina argumentos.',
          },
        },
      },
      'story-9845237719284-20': {
        title: 'Aproximação Final',
        narration: 'A montanha prende a respiração; as aldeias prendem a delas com ela. Seu próximo movimento decidirá a forma do calor de amanhã. Em sua palma, a coroa pesa como promessa e aviso.',
        choices: {
          'story-9845237719284-c39': {
            text: 'Reivindicar a coroa como soberano.',
            description: 'Dobrar o fogo à sua vontade.',
          },
          'story-9845237719284-c40': {
            text: 'Compartilhar a chama com as aldeias.',
            description: 'Muitos portadores, nenhum tirano.',
          },
          'story-9845237719284-c41': {
            text: 'Partir para o exílio silencioso.',
            description: 'Recusar tanto trono quanto guerra.',
          },
          'story-9845237719284-c42': {
            text: 'Quebrar a coroa pela palavra do santuário.',
            description: 'Terminar a questão para sempre.',
          },
        },
      },
      'story-9845237719284-21': {
        title: 'Soberano das Cinzas',
        narration: 'A coroa enraíza através de sua voz e a montanha se ajoelha. Aldeias se curvam—e estremecem. A paz chega rapidamente, como o olho de uma tempestade: calma e vigiada. Seus mapas ficam desatualizados; seu nome não.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: 'Chama Compartilhada',
        narration: 'Você ergue a coroa e ela se divide como pão, brasas criando raízes em muitas mãos. A fornalha esfria; os planos do Senhor da Guerra morrem sufocados pela comunidade. Festivais florescem onde guarnições teriam estado, e mapas são desenhados em coro.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: 'Exílio Silencioso',
        narration: 'Você deixa a coroa onde os sinos lembram de você carinhosamente. A montanha cochila inquieta, mas nunca desperta com raiva. Anos depois, crianças seguem um cartógrafo viajante que desenha caminhos seguros através de campos de cinza ouvindo o vento.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: 'Coroa Quebrada',
        narration: 'O ouro grita como vidro quando você o golpeia na pedra; brasas saltam, depois se assentam como calor suave e comum. O santuário suspira de alívio, e a história perde um tirano que poderia ter encontrado. Suas mãos mantêm um brilho fraco nas noites de inverno—suficiente para ferver chá.',
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
    title: '余烬王冠的誓言',
    description: '当制图师的草图温热成活生生的余烬,被遗忘的路径沿着海岸燃烧起来。一位战争领主进军重新点燃山峰,并夺取现在回应你之手的王冠。你会分享它的火焰,打碎它,还是戴上它?',
    author: '时光画布工作室',
    nodes: {
      'story-9845237719284-1': {
        title: '灰烬征兆',
        narration: '黎明在松树间呼出薄雾,而你的炭笔地图从内部发光,线条像沉睡的余烬般跳动。一枚熏黑的金环,触之温暖,躺在不该有王冠的地方——在你的袋子里,在压制的叶片之间。耳语的传言说,灰烬战争领主正向内陆进军,收集燃料和恐惧。王冠的热度上升,催促着一条道路,趁第一个村庄醒来之前。',
        choices: {
          'story-9845237719284-c1': {
            text: '前往遗物市场。',
            description: '寻求知识和盟友。',
          },
          'story-9845237719284-c2': {
            text: '侦察山脊瞭望台。',
            description: '读取大地的意图。',
          },
        },
      },
      'story-9845237719284-2': {
        title: '遗物市场',
        narration: '帐篷如鳞片般起伏;护身符在海风中沿着绳索叮当作响。一位无牙的商贩注视着从你袋子里渗出的余烬王冠的光芒,向你招手示意靠近。「地图在河渡口附近燃烧得更真实」,她嘶哑地说,「但现在火印侦察兵正在监视那里。」',
        choices: {
          'story-9845237719284-c3': {
            text: '购买奥术地图叠加。',
            description: '让线条显露线条。',
          },
          'story-9845237719284-c4': {
            text: '跟踪火印侦察兵。',
            description: '以代价换取信息。',
          },
        },
      },
      'story-9845237719284-3': {
        title: '山脊瞭望台',
        narration: '黑沙如带状盘绕海岸;烟柱从远处的破火山口升起。风中传来:行进的鼓声和淬火刀刃的铁盐气味。下方有闪光移动——火印侦察兵绕道向河流前进。',
        choices: {
          'story-9845237719284-c5': {
            text: '不被发现地追踪侦察兵。',
            description: '利用高度和静默。',
          },
          'story-9845237719284-c6': {
            text: '从洞穴入口走捷径下降。',
            description: '古老的地图显示山脊下有空洞。',
          },
        },
      },
      'story-9845237719284-4': {
        title: '奥术叠加',
        narration: '透明羊皮纸吸收了一滴王冠的热量,绽放出隐藏的路径。一个微弱的印记不仅指向河流,还指向刻在悬崖下的「秘密通道」。商贩微笑,牙龈闪亮:「每条捷径都是一种承诺。」',
        choices: {
          'story-9845237719284-c7': {
            text: '走河渡口。',
            description: '开放,被监视,但快速。',
          },
          'story-9845237719284-c8': {
            text: '寻找秘密通道。',
            description: '以风险换取隐秘。',
          },
        },
      },
      'story-9845237719284-5': {
        title: '火印侦察兵',
        narration: '一名孤独的侦察兵在被风吹弯的松树下停顿,检查着炭笔时间表。灰烬印记条纹般横过他们的下巴——对战争领主的忠诚之线。当王冠变暖时,侦察兵的眼睛抬起,感觉到一种领主的存在,尽管那里空无一人。',
        choices: {
          'story-9845237719284-c9': {
            text: '伏击并审问。',
            description: '快速,安静,果断。',
          },
          'story-9845237719284-c10': {
            text: '悄悄溜过去朝河流前进。',
            description: '用答案交换时间。',
          },
        },
      },
      'story-9845237719284-6': {
        title: '洞穴入口',
        narration: '玄武岩拱门以空洞的吞咽饮下浪涛;地衣像小星座般闪烁。古老的凿子在通往下方螺旋的狭窄楼梯旁生锈。王冠在门槛处嗡嗡作响,半是警告,半是欢迎。',
        choices: {
          'story-9845237719284-c11': {
            text: '走秘密通道。',
            description: '信任古老的切口。',
          },
          'story-9845237719284-c12': {
            text: '穿过内部的回声桥。',
            description: '速度胜过隐秘。',
          },
        },
      },
      'story-9845237719284-7': {
        title: '河渡口',
        narration: '船只在焦油绳索上摇晃;摆渡人低语着「誓言之火」和「天空圣殿」。一块粉笔板列出战争领主军需官的什一税率。村民们像观察即将到来的天气一样注视着你。',
        choices: {
          'story-9845237719284-c13': {
            text: '与村长谈判。',
            description: '赢得信任,赢得时间。',
          },
          'story-9845237719284-c14': {
            text: '在浅滩测试王冠。',
            description: '力量招致风险。',
          },
        },
      },
      'story-9845237719284-8': {
        title: '秘密通道',
        narration: '你在石头上描绘印记;缝隙以叹息接纳了你。没有人点燃的蜡烛复活了,显露出粉笔记录——许多通过,少数返回。走廊倾斜向水晶般的嗡鸣。',
        choices: {
          'story-9845237719284-c15': {
            text: '前往余烬试炼室。',
            description: '证明价值,或付出代价。',
          },
          'story-9845237719284-c16': {
            text: '穿过回声桥。',
            description: '缩短路径。',
          },
        },
      },
      'story-9845237719284-9': {
        title: '侦察兵的坦白',
        narration: '被压在玄武岩上,当王冠的热量刺穿空气时,侦察兵迅速屈服。「战争领主在山下喂养一座熔炉」,他们低语,眼睛因烟雾而湿润。「当它咆哮时,你们的村庄将下跪。」',
        choices: {
          'story-9845237719284-c17': {
            text: '饶恕他们并寻找村庄盟友。',
            description: '仁慈购买信使。',
          },
          'story-9845237719284-c18': {
            text: '赶紧研究战争领主的计划。',
            description: '知识就是筹码。',
          },
        },
      },
      'story-9845237719284-10': {
        title: '回声桥',
        narration: '狭窄的跨度每一步都在歌唱;你的呼吸以其他声音回到你身边。在下方的坠落中,水晶像玻璃上的雨般鸣响。王冠的光芒在虚空上编织细细的路径,仿佛提供只有你能看见的立足点。',
        choices: {
          'story-9845237719284-c19': {
            text: '沿着水晶路径到跨度。',
            description: '朝向天空圣殿。',
          },
          'story-9845237719284-c20': {
            text: '绕道余烬试炼。',
            description: '先证明你的主张。',
          },
        },
      },
      'story-9845237719284-11': {
        title: '村庄谈判',
        narration: '长老们坐着,双手如浮木,眼睛如潮池。他们谈论誓言之火——不燃烧而束缚的火焰——以及一座通过呼吸而非出生选择承载者的圣殿。孩子们在远处盘旋,彼此大胆地低语「女王」。',
        choices: {
          'story-9845237719284-c21': {
            text: '公开发誓誓言之火。',
            description: '赢得人心,获得分量。',
          },
          'story-9845237719284-c22': {
            text: '通过走私者之路溜走。',
            description: '盟友稍后;时间现在。',
          },
        },
      },
      'story-9845237719284-12': {
        title: '余烬试炼',
        narration: '火盆沉睡着,被灰烬印记环绕。当你放下王冠时,火盆燃起白金色而不消耗。每次心跳都在空中写下一条光线,一本不会撒谎的意图账簿。',
        choices: {
          'story-9845237719284-c23': {
            text: '束缚自己保护村庄。',
            description: '责任胜过力量。',
          },
          'story-9845237719284-c24': {
            text: '声称有权面对天空圣殿。',
            description: '权威先于行动。',
          },
        },
      },
      'story-9845237719284-13': {
        title: '战争领主的计划',
        narration: '钉在被盗账簿上的地图显示燃料仓库正在供养地下熔炉。标记的日期逼近:「点火」。另一笔迹的笔记写道:「王冠向呼吸低头——偷走承载者的声音。」',
        choices: {
          'story-9845237719284-c25': {
            text: '破坏熔炉隧道。',
            description: '切断计划的喉咙。',
          },
          'story-9845237719284-c26': {
            text: '溜向走私者之路。',
            description: '侧翼并警告圣殿。',
          },
        },
      },
      'story-9845237719284-14': {
        title: '水晶跨度',
        narration: '星辰梳理天空;跨度嗡鸣一个你在牙齿中感受到的音阶。风用纤细冰冷的手指穿过王冠,提出没有语言的问题。脚印向上延伸——其他人来过,或将会来。',
        choices: {
          'story-9845237719284-c27': {
            text: '攀登到天空圣殿。',
            description: '寻求批准。',
          },
          'story-9845237719284-c28': {
            text: '转向熔炉路线。',
            description: '先停止点火。',
          },
        },
      },
      'story-9845237719284-15': {
        title: '誓言之火',
        narration: '火焰像驯服的藤蔓般爬上你的手腕,留下温暖的光环。村民呼气——如同浪涛在岸边释放的声音。王冠变得柔软,不那么沉重,仿佛因分担的重量而感到满意。',
        choices: {
          'story-9845237719284-c29': {
            text: '向天空圣殿请愿。',
            description: '将共同的呼吸向上携带。',
          },
          'story-9845237719284-c30': {
            text: '寻求关于王冠低语的建议。',
            description: '在行动前理解。',
          },
        },
      },
      'story-9845237719284-16': {
        title: '走私者之路',
        narration: '一扇门出现在不该有门的地方,向盐渍陈腐的黑暗敞开。箱子低语着安静的反抗:绳索,油,带有诚实修正的旧地图。脚步声回响——朋友或敌人正在学习成为两者。',
        choices: {
          'story-9845237719284-c31': {
            text: '从这里打击熔炉。',
            description: '直捣喉咙。',
          },
          'story-9845237719284-c32': {
            text: '听取王冠的建议。',
            description: '冒低语的风险。',
          },
        },
      },
      'story-9845237719284-17': {
        title: '火山熔炉',
        narration: '石肺喘息着热量;链条像冬天的骨头般叮当作响。工人将木材和恐惧送入红色的喉咙。一个阀门呻吟着——离尖叫或沉默只有一次转动。',
        choices: {
          'story-9845237719284-c33': {
            text: '卡住阀门并逃跑。',
            description: '破坏胜过演讲。',
          },
          'story-9845237719284-c34': {
            text: '将压力转向天空通风口。',
            description: '为圣殿争取时间。',
          },
        },
      },
      'story-9845237719284-18': {
        title: '天空圣殿',
        narration: '在风暴堤岸之上,由浑浊玻璃制成的钟在无手的情况下鸣响。一个如天气般的声音什么都不问却无所不知。王冠冷却下来,仿佛在父母的面前,等待看你成为了什么。',
        choices: {
          'story-9845237719284-c35': {
            text: '请求分享王冠的火焰。',
            description: '许多双手,更轻的负担。',
          },
          'story-9845237719284-c36': {
            text: '请求力量打碎它。',
            description: '既非暴君,亦非工具。',
          },
        },
      },
      'story-9845237719284-19': {
        title: '王冠的低语',
        narration: '当你倾听时,合唱回应了——过去的承载者通过牙齿和舌头歌唱。他们警告一条更简单的道路:深深地戴上王冠,让其他人围绕你的确信运转。温暖尝起来像蜂蜜;回味像灰烬。',
        choices: {
          'story-9845237719284-c37': {
            text: '拒绝诱惑;寻找圣殿。',
            description: '你不是熔炉。',
          },
          'story-9845237719284-c38': {
            text: '倾向主权。',
            description: '统治结束争论。',
          },
        },
      },
      'story-9845237719284-20': {
        title: '最后的接近',
        narration: '山峰屏住呼吸;村庄与它一起屏住呼吸。你的下一个举动将决定明天热量的形态。在你的手掌中,王冠既像承诺又像警告般沉重。',
        choices: {
          'story-9845237719284-c39': {
            text: '以君主身份宣称王冠。',
            description: '使火焰屈服于你的意志。',
          },
          'story-9845237719284-c40': {
            text: '与村庄分享火焰。',
            description: '许多承载者,没有暴君。',
          },
          'story-9845237719284-c41': {
            text: '走向安静的流放。',
            description: '拒绝王位和战争。',
          },
          'story-9845237719284-c42': {
            text: '按圣殿的话打碎王冠。',
            description: '永远结束这个问题。',
          },
        },
      },
      'story-9845237719284-21': {
        title: '灰烬君主',
        narration: '王冠通过你的声音扎根,山峰跪下。村庄鞠躬——并畏缩。和平迅速到来,就像风暴之眼:平静而被监视。你的地图过时了;你的名字没有。',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: '共享的火焰',
        narration: '你举起王冠,它像面包一样分裂,余烬在许多手中扎根。熔炉冷却;战争领主的计划被社区窒息而死。节日在本应驻扎军队的地方绽放,地图以合唱的方式绘制。',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: '安静的流放',
        narration: '你将王冠留在钟声深情记住你的地方。山峰不安地打盹,但从未愤怒地醒来。多年后,孩子们跟随着一位旅行制图师,他通过倾听风声在灰烬田野中绘制安全的路径。',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: '破碎的王冠',
        narration: '当你将金子撞击在石头上时,它像玻璃一样尖叫;余烬跳跃,然后沉淀成柔和、普通的温暖。圣殿如释重负地叹息,历史失去了它本可能遇到的暴君。你的手在冬夜保持着微弱的光芒——足够煮茶。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '잔불 왕관의 맹세',
    description: '지도 제작자의 스케치가 살아있는 잔불로 따뜻해지면, 잊혀진 길들이 해안을 따라 타오른다. 전쟁군주가 산을 다시 점화하고 이제 당신의 손에 응답하는 왕관을 탈취하기 위해 진군한다. 그 불을 나눌 것인가, 부술 것인가, 아니면 쓸 것인가?',
    author: '크로노캔버스 스튜디오',
    nodes: {
      'story-9845237719284-1': {
        title: '재의 징조',
        narration: '새벽이 소나무 사이로 안개를 내뿜는 동안 당신의 숯 지도가 안쪽에서 빛나기 시작하고, 그 선들이 잠든 잔불처럼 맥박친다. 검게 그을린 금 고리, 만지면 따뜻한 것이 왕관이 있어서는 안 될 곳에 놓여있다—당신의 가방 안, 눌린 잎사귀들 사이에. 속삭이는 소문들은 재의 전쟁군주가 내륙으로 진군하며 연료와 공포를 모으고 있다고 말한다. 왕관의 열기가 올라가며, 첫 마을이 깨어나기 전에 길을 재촉한다.',
        choices: {
          'story-9845237719284-c1': {
            text: '유물 시장으로 향한다.',
            description: '지식과 동맹을 찾는다.',
          },
          'story-9845237719284-c2': {
            text: '능선 전망대를 정찰한다.',
            description: '대지의 의도를 읽는다.',
          },
        },
      },
      'story-9845237719284-2': {
        title: '유물 시장',
        narration: '천막들이 비늘처럼 물결치고, 부적들이 바닷바람에 줄을 따라 쨍그랑거린다. 이빨 없는 중개인이 당신의 가방을 통해 스며나오는 잔불 왕관의 빛을 바라보며 당신을 가까이 오라고 손짓한다. "지도는 강 건너편 근처에서 더 진실되게 탄다"고 그녀가 쉰 목소리로 말한다. "하지만 불의 낙인 정찰병들이 지금 그곳을 감시하고 있지."',
        choices: {
          'story-9845237719284-c3': {
            text: '비술 지도 중첩을 구매한다.',
            description: '선이 선을 드러내게 한다.',
          },
          'story-9845237719284-c4': {
            text: '불의 낙인 정찰병을 미행한다.',
            description: '정보에는 대가가 따른다.',
          },
        },
      },
      'story-9845237719284-3': {
        title: '능선 전망대',
        narration: '검은 모래가 해안을 띠처럼 두르고, 연기 손가락들이 먼 칼데라에서 솟아오른다. 바람 속에서: 행진하는 북소리와 담금질된 칼날의 철과 소금 냄새. 아래에서 무언가 반짝인다—불의 낙인 정찰병들이 강을 향해 도로를 우회하고 있다.',
        choices: {
          'story-9845237719284-c5': {
            text: '정찰병들을 들키지 않고 추적한다.',
            description: '높이와 침묵을 이용한다.',
          },
          'story-9845237719284-c6': {
            text: '동굴 입구로 지름길로 내려간다.',
            description: '오래된 지도는 능선 아래 공동을 보여준다.',
          },
        },
      },
      'story-9845237719284-4': {
        title: '비술 중첩',
        narration: '투명한 양피지가 왕관 열기의 한 방울을 마시고 숨겨진 길들로 꽃핀다. 희미한 인장이 강뿐만 아니라 절벽 아래에 새겨진 "비밀 통로"를 가리킨다. 중개인이 잇몸을 빛내며 미소 짓는다. "모든 지름길은 일종의 약속이지."',
        choices: {
          'story-9845237719284-c7': {
            text: '강 건너편을 택한다.',
            description: '개방되고 감시되지만 빠르다.',
          },
          'story-9845237719284-c8': {
            text: '비밀 통로를 찾는다.',
            description: '은밀함을 위한 위험.',
          },
        },
      },
      'story-9845237719284-5': {
        title: '불의 낙인 정찰병',
        narration: '외로운 정찰병이 바람에 휘어진 소나무 아래서 멈춰 서서 숯으로 쓴 일정표를 확인한다. 재 표시가 그들의 턱을 가로지른다—전쟁군주에 대한 충성의 선. 왕관이 따뜻해지자 정찰병의 눈이 올라가며, 아무도 서있지 않은 곳에서 군주의 존재를 감지한다.',
        choices: {
          'story-9845237719284-c9': {
            text: '매복하고 심문한다.',
            description: '빠르고, 조용하고, 단호하게.',
          },
          'story-9845237719284-c10': {
            text: '강을 향해 몰래 지나간다.',
            description: '답을 시간과 거래한다.',
          },
        },
      },
      'story-9845237719284-6': {
        title: '동굴 입구',
        narration: '현무암 아치들이 텅 빈 삼킴으로 파도를 마시고, 지의류가 작은 별자리처럼 반짝인다. 오래된 끌들이 아래로 나선을 그리는 좁은 계단 근처에서 녹슬며 놓여있다. 왕관이 문턱에서 윙윙거린다, 반은 경고, 반은 환영.',
        choices: {
          'story-9845237719284-c11': {
            text: '비밀 통로를 택한다.',
            description: '오래된 절단을 신뢰한다.',
          },
          'story-9845237719284-c12': {
            text: '안쪽의 메아리 다리를 건넌다.',
            description: '은밀함보다 속도.',
          },
        },
      },
      'story-9845237719284-7': {
        title: '강 건너편',
        narration: '배들이 타르 칠한 밧줄에 흔들리고, 뱃사공들이 "맹세의 불"과 "하늘 성소"에 대해 중얼거린다. 분필로 쓴 게시판이 전쟁군주의 병참관의 십일조 요율을 나열한다. 마을 사람들이 다가오는 날씨를 보듯 당신을 바라본다.',
        choices: {
          'story-9845237719284-c13': {
            text: '마을 우두머리와 협상한다.',
            description: '신뢰를 얻고, 시간을 얻는다.',
          },
          'story-9845237719284-c14': {
            text: '여울에서 왕관을 시험한다.',
            description: '힘은 위험을 초대한다.',
          },
        },
      },
      'story-9845237719284-8': {
        title: '비밀 통로',
        narration: '당신이 돌에 인장을 그리자, 이음새가 한숨과 함께 당신을 받아들인다. 아무도 켜지 않은 촛불들이 살아나며 분필 집계를 드러낸다—많은 통과, 적은 귀환. 복도가 수정의 윙윙거림을 향해 기울어진다.',
        choices: {
          'story-9845237719284-c15': {
            text: '잔불 시험 방으로 향한다.',
            description: '가치를 증명하거나 대가를 치른다.',
          },
          'story-9845237719284-c16': {
            text: '메아리 다리를 건넌다.',
            description: '길을 단축한다.',
          },
        },
      },
      'story-9845237719284-9': {
        title: '정찰병의 고백',
        narration: '현무암에 붙잡힌 정찰병은 왕관의 열기가 공기를 찌를 때 빠르게 굴복한다. "전쟁군주가 산 아래 가마에 연료를 공급하고 있다"고 그들이 연기로 젖은 눈으로 속삭인다. "그것이 포효하면, 당신들의 마을은 무릎 꿇을 것이다."',
        choices: {
          'story-9845237719284-c17': {
            text: '그들을 용서하고 마을 동맹을 찾는다.',
            description: '자비는 전령을 산다.',
          },
          'story-9845237719284-c18': {
            text: '전쟁군주의 계획을 연구하기 위해 서둔다.',
            description: '지식은 지렛대다.',
          },
        },
      },
      'story-9845237719284-10': {
        title: '메아리 다리',
        narration: '좁은 경간이 걸음마다 노래하고, 당신의 숨결이 다른 목소리로 당신에게 돌아온다. 아래 낙하 속에서 수정들이 유리 위의 비처럼 울린다. 왕관의 빛이 공허 위로 가는 길들을 엮으며, 당신만이 볼 수 있는 발판을 제공하는 것처럼.',
        choices: {
          'story-9845237719284-c19': {
            text: '경간으로 가는 수정 길을 따른다.',
            description: '하늘 성소를 향해.',
          },
          'story-9845237719284-c20': {
            text: '잔불 시험으로 우회한다.',
            description: '먼저 주장을 증명한다.',
          },
        },
      },
      'story-9845237719284-11': {
        title: '마을 협상',
        narration: '장로들이 유목처럼 손과 조수 웅덩이처럼 눈으로 앉아있다. 그들은 맹세의 불—태우지 않고 묶는 불꽃—과 출생이 아닌 호흡으로 담지자를 선택하는 성소에 대해 말한다. 아이들이 거리를 두고 돌며, 서로에게 "여왕"이라고 속삭이기를 감히 한다.',
        choices: {
          'story-9845237719284-c21': {
            text: '공개적으로 맹세의 불을 맹세한다.',
            description: '마음을 얻고, 무게를 얻는다.',
          },
          'story-9845237719284-c22': {
            text: '밀수꾼 길로 빠져나간다.',
            description: '동맹은 나중에; 시간은 지금.',
          },
        },
      },
      'story-9845237719284-12': {
        title: '잔불 시험',
        narration: '화로가 잠들어 있고, 재 인장으로 둘러싸여 있다. 왕관을 내리면 화로가 소비하지 않고 백금빛으로 타오른다. 심장 박동마다 공중에 빛의 선을 쓰며, 거짓말할 수 없는 의도의 장부.',
        choices: {
          'story-9845237719284-c23': {
            text: '마을을 보호하기 위해 자신을 묶는다.',
            description: '힘보다 의무.',
          },
          'story-9845237719284-c24': {
            text: '하늘 성소에 맞설 권리를 주장한다.',
            description: '행동 전 권위.',
          },
        },
      },
      'story-9845237719284-13': {
        title: '전쟁군주의 계획',
        narration: '도난당한 원장에 고정된 지도들이 지하 가마에 연료를 공급하는 저장소들을 보여준다. 표시된 날짜가 다가온다: "점화". 다른 필체의 메모가 읽힌다: "왕관은 호흡에 굽힌다—담지자의 목소리를 훔쳐라."',
        choices: {
          'story-9845237719284-c25': {
            text: '가마 터널을 파괴한다.',
            description: '계획의 목을 자른다.',
          },
          'story-9845237719284-c26': {
            text: '밀수꾼 길로 미끄러진다.',
            description: '측면에서 성소에 경고한다.',
          },
        },
      },
      'story-9845237719284-14': {
        title: '수정 경간',
        narration: '별들이 하늘을 빗질하고, 경간이 당신의 이빨에서 느껴지는 음계를 윙윙거린다. 바람이 가늘고 차가운 손가락으로 왕관을 꿰며, 언어 없는 질문을 던진다. 발자국이 위로 이어진다—다른 이들이 왔거나, 올 것이다.',
        choices: {
          'story-9845237719284-c27': {
            text: '하늘 성소로 올라간다.',
            description: '승인을 구한다.',
          },
          'story-9845237719284-c28': {
            text: '가마 경로로 벗어난다.',
            description: '먼저 점화를 멈춘다.',
          },
        },
      },
      'story-9845237719284-15': {
        title: '맹세의 불',
        narration: '불꽃이 길들여진 덩굴처럼 당신의 손목을 타고 올라가며 따뜻한 빛의 팔찌를 남긴다. 마을 사람들이 숨을 내쉰다—해안에 대해 스스로를 덜어내는 파도 같은 소리. 왕관이 부드러워지고 덜 무거워지며, 공유된 무게에 기뻐하는 것처럼.',
        choices: {
          'story-9845237719284-c29': {
            text: '하늘 성소에 청원한다.',
            description: '공동체의 호흡을 위로 나른다.',
          },
          'story-9845237719284-c30': {
            text: '왕관의 속삭임에 대한 조언을 구한다.',
            description: '행동하기 전에 이해한다.',
          },
        },
      },
      'story-9845237719284-16': {
        title: '밀수꾼 길',
        narration: '문이 있어서는 안 될 곳에 나타나고 소금 오래된 어둠 속으로 열린다. 상자들이 조용한 반항을 속삭인다: 밧줄, 기름, 정직한 수정이 있는 오래된 지도들. 발소리가 울린다—친구인지 적인지, 둘 다 되는 법을 배우는 자들.',
        choices: {
          'story-9845237719284-c31': {
            text: '여기서 가마를 공격한다.',
            description: '목으로 바로.',
          },
          'story-9845237719284-c32': {
            text: '왕관의 조언을 듣는다.',
            description: '속삭임을 위험에 빠뜨린다.',
          },
        },
      },
      'story-9845237719284-17': {
        title: '화산 가마',
        narration: '돌 폐가 열기를 헐떡이고, 사슬이 겨울 뼈처럼 딸그락거린다. 노동자들이 나무와 공포를 붉은 목구멍에 공급한다. 하나의 밸브가 신음한다—비명이나 침묵에서 한 번의 회전.',
        choices: {
          'story-9845237719284-c33': {
            text: '밸브를 막고 도망친다.',
            description: '파괴는 연설을 이긴다.',
          },
          'story-9845237719284-c34': {
            text: '압력을 하늘 통풍구로 돌린다.',
            description: '성소를 위한 시간을 산다.',
          },
        },
      },
      'story-9845237719284-18': {
        title: '하늘 성소',
        narration: '폭풍 둑 위 높은 곳에서, 흐린 유리로 만들어진 종들이 손 없이 울린다. 날씨 같은 목소리가 아무것도 묻지 않고 모든 것을 안다. 왕관이 부모의 존재 앞에 있는 것처럼 식으며, 당신이 무엇이 되었는지 보기 위해 기다린다.',
        choices: {
          'story-9845237719284-c35': {
            text: '왕관의 불을 나누기를 요청한다.',
            description: '많은 손, 가벼운 짐.',
          },
          'story-9845237719284-c36': {
            text: '그것을 부술 힘을 요청한다.',
            description: '폭군도, 도구도 아닌.',
          },
        },
      },
      'story-9845237719284-19': {
        title: '왕관의 속삭임',
        narration: '귀를 기울이면 합창이 답한다—과거의 담지자들이 이빨과 혀를 통해 노래한다. 그들은 더 단순한 길을 경고한다: 왕관을 깊이 쓰고, 다른 이들이 당신의 확신 주위를 공전하게 하라. 따뜻함은 꿀 맛이고, 뒷맛은 재 같다.',
        choices: {
          'story-9845237719284-c37': {
            text: '유혹을 거부하고 성소를 찾는다.',
            description: '당신은 용광로가 아니다.',
          },
          'story-9845237719284-c38': {
            text: '주권으로 기운다.',
            description: '통치는 논쟁을 끝낸다.',
          },
        },
      },
      'story-9845237719284-20': {
        title: '최후의 접근',
        narration: '산이 숨을 참고, 마을들도 그와 함께 숨을 참는다. 당신의 다음 행동이 내일의 열기의 형태를 결정할 것이다. 당신의 손바닥에서 왕관이 약속과 경고처럼 무겁다.',
        choices: {
          'story-9845237719284-c39': {
            text: '주권자로서 왕관을 주장한다.',
            description: '불을 당신의 의지에 굽힌다.',
          },
          'story-9845237719284-c40': {
            text: '마을들과 불꽃을 나눈다.',
            description: '많은 담지자, 폭군은 없다.',
          },
          'story-9845237719284-c41': {
            text: '조용한 추방으로 떠난다.',
            description: '왕좌와 전쟁 둘 다 거부한다.',
          },
          'story-9845237719284-c42': {
            text: '성소의 말에 왕관을 부순다.',
            description: '영원히 질문을 끝낸다.',
          },
        },
      },
      'story-9845237719284-21': {
        title: '재의 주권자',
        narration: '왕관이 당신의 목소리를 통해 뿌리내리고 산이 무릎 꿇는다. 마을들이 고개를 숙인다—그리고 움찔한다. 평화가 폭풍의 눈처럼 빠르게 찾아온다: 고요하고 감시된다. 당신의 지도는 구식이 된다. 당신의 이름은 그렇지 않다.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: '나눈 불꽃',
        narration: '당신이 왕관을 들어올리면 그것이 빵처럼 나뉘고, 잔불이 많은 손에 뿌리를 내린다. 가마가 식고, 전쟁군주의 계획은 공동체에 질식되어 죽는다. 축제가 수비대가 있었을 곳에 피어나고, 지도는 합창으로 그려진다.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: '조용한 추방',
        narration: '당신은 종들이 당신을 다정하게 기억하는 곳에 왕관을 남긴다. 산은 불안하게 졸지만 결코 화나서 깨어나지 않는다. 몇 년 후, 아이들이 바람을 들으며 재 들판을 가로질러 안전한 길을 그리는 여행하는 지도 제작자를 따른다.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: '부서진 왕관',
        narration: '돌 위에 치면 금이 유리처럼 비명을 지르고, 잔불이 뛰어오른 다음 부드럽고 평범한 따뜻함으로 가라앉는다. 성소가 안도의 한숨을 쉬고, 역사는 만났을지도 모르는 폭군을 잃는다. 당신의 손은 겨울밤에 희미한 빛을 유지한다—차를 끓이기에 충분하다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
