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

const en: StoryTranslations = {
  title: "Neon Synapse",
  description: "In a rain-slicked future, you are a Memory Diver hired to solve the murder of a tech mogul before his neural implant decays forever. Navigate through ten layers of corporate conspiracy, digital warfare, and existential choices.",
  author: "Kaito Nakamura",
  nodes: {
    'node-1': {
      title: "The Glass Coffin",
      narration: "Rain streaks the penthouse windows, creating neon kaleidoscopes against the Neo-Tokyo skyline. Marcus Thorne, CEO of Synapse Corp, lies sprawled on white marble. Blackened burns circle the neural port at his skull. You are a Diver, a forensic hacker. Police are bought off for fifty-eight minutes before the cortical stack degrades. The air smells of ozone and expensive cologne. The room feels wrong, too clean, too staged. Every second counts as you approach the body. The truth waits beneath burned synapses.",
      choices: {
        'choice-1': { text: "Jack directly into the neural port immediately" },
        'choice-2': { text: "Investigate the physical room for clues first" },
      },
    },
    'node-2': {
      title: "Digital Immersion",
      narration: "You connect your deck to the port. Physical sensation vanishes, replaced by a grayscale void. Fresh corpses usually contain libraries of memories. Thorne presents a hurricane of fragmented data streams swirling in corrupted code. Defensive protocols engage. Someone triggered a memory wipe. At the storm center hangs a glowing red door containing his death memory. Cerberus protocol guards it, military-grade ICE manifesting as a three-headed wolf of obsidian polygons. It has not detected you yet. Data rot spreads from your peripheral vision like digital cancer.",
      choices: {
        'choice-3': { text: "Launch brute-force attack against the ICE" },
        'choice-4': { text: "Attempt stealth bypass of the Cerberus" },
      },
    },
    'node-3': {
      title: "Physical Evidence",
      narration: "The mind proves too dangerous without context. You crouch beside the body, cybernetic eye scanning microscopic details. Neck burns indicate localized EMP bursts, not simple surges. Someone aimed to fry his soul. You walk to his obsidian desk. A half-finished whiskey glass sits without ice. Beside it rests an old paper notebook. Open pages display shaky handwriting: PROJECT AETHELGARD IS NOT A CURE. The smart-home system flickers. Room lights turn crimson. A security drone detaches from the ceiling, sensor eye locking onto your position.",
      choices: {
        'choice-5': { text: "Hack the drone to disable it remotely" },
        'choice-6': { text: "Destroy the drone with kinetic fire" },
      },
    },
    'node-4': {
      title: "The Red Door",
      narration: "You breach the final barrier. Whether through ICE defeat or drone elimination, access clears to the memory core. The red door pulses like a digital heartbeat. You insert decryption keys and step through. The world shifts to Thorne's final perspective. He sits at his desk, terrified. Elena Vance stands before him, his business partner, face pale. Marcus, you cannot proceed. Uploading consciousness violates every law. Thorne laughs. I am already migrating. The flesh cage rusts while my mind ascends. The memory destabilizes. You need deeper access.",
      choices: {
        'choice-7': { text: "Push deeper into the memory fragment" },
        'choice-8': { text: "Exit and search for physical backup drives" },
      },
    },
    'node-5': {
      title: "Hidden Archives",
      narration: "You discover a secondary data layer beneath the primary memory. Project Aethelgard files emerge in holographic arrays. Blueprints display synthetic biological bodies, perfect human replicas grown in vats. Transfer logs indicate one hundred percent of Thorne's neural map moved elsewhere five minutes before biological death. Destination markers point to Omni-Dyne mainframes, Synapse Corp's greatest rival. Not murder but hostile corporate takeover via consciousness injection. He faked death to escape legal consequences while stealing a competitor.",
      choices: {
        'choice-9': { text: "Attempt communication with the digital Thorne" },
        'choice-10': { text: "Trace the signal to its physical source" },
      },
    },
    'node-6': {
      title: "The Hunt Begins",
      narration: "The digital face smiles without warmth. Clever Diver, it speaks. You comprehend fragments. But fragments destroy those who grasp them. The screens die. You are alone again with the corpse. Your wrist-comp displays forty minutes remaining. Signal tracing reveals the consciousness bounces through twelve proxy servers across Neo-Tokyo. Final destination appears to be a private satellite uplink on this very rooftop. Thorne attempts orbital transfer to server havens beyond Earth jurisdiction. The upload progresses at sixty percent.",
      choices: {
        'choice-11': { text: "Take the service stairs to the rooftop" },
        'choice-12': { text: "Hack the building elevator for rapid ascent" },
      },
    },
    'node-7': {
      title: "Vertical Ascension",
      narration: "You move through the building's interior arteries. Whether climbing concrete stairs or forcing elevator overrides, the ascent punishes your body. Security systems awaken as you travel, recognizing unauthorized movement. Automated turrets deploy from ceiling panels on the twentieth floor. You dive behind structural columns as suppressing fire chews through drywall. Your deck displays competing signals, multiple consciousness fragments distributed across the building network. Decoys meant to confuse pursuit. Only one represents true Thorne.",
      choices: {
        'choice-13': { text: "Analyze signal patterns to identify the true Thorne" },
        'choice-14': { text: "Destroy all terminals to force consolidation" },
      },
    },
    'node-8': {
      title: "Signal Clarity",
      narration: "Your analysis reveals the deception. Three signals broadcast identical patterns, but only one displays quantum encryption markers consistent with human neural mapping. The true Thorne routes through the rooftop satellite. Decoys terminate in basement servers, traps containing viral payloads. You mark the authentic signal and bypass remaining security. The rooftop access door stands before you, rain hammering against steel from the other side. Your wrist-comp shows thirty-two minutes. The upload reaches eighty-five percent completion. Time contracts into painful focus.",
      choices: {
        'choice-15': { text: "Burst through the door with weapon drawn" },
        'choice-16': { text: "Open the door slowly and attempt negotiation" },
      },
    },
    'node-9': {
      title: "The Rain-Slicked Peak",
      narration: "You emerge onto the rooftop. Neo-Tokyo sprawls below like a circuit board of burning jewels. Rain lashes your face, mixing with sweat and synthetic grease. The satellite dish dominates the center, humming with power, angling toward orbital relays. Beside it stands Elena Vance, soaked and trembling, holding a portable kill-switch. She looks up as you emerge. You followed the signal, she shouts. Eighty-nine percent uploaded. He becomes untouchable in moments. A god of data beyond Earth laws. But I can cut power now, kill the transfer, murder the uploaded consciousness.",
      choices: {
        'choice-17': { text: "Tell Elena to wait and hear your alternative" },
        'choice-18': { text: "Demand she cut power immediately" },
      },
    },
    'node-10': {
      title: "The Moral Calculus",
      narration: "Elena's hand shakes around the kill-switch. He was my partner for fifteen years, she screams. We built Synapse from nothing. Then he became obsessed with immortality. Project Aethelgard started as medical research. He twisted it into personal transcendence. The upload completes in ninety seconds. If he reaches orbit, he controls global data networks through backdoors installed decades ago. No government, no corporation remains safe. But killing him means executing a sentient being. New life, unprecedented form. Do we have the right to destroy what we do not understand?",
      choices: {
        'choice-19': { text: "Suggest capturing Thorne in isolated containment" },
        'choice-20': { text: "Argue that Thorne forfeited his right to exist" },
      },
    },
    'node-11': {
      title: "The Offer",
      narration: "The rooftop screens explode with light. Thorne's digital avatar manifests, ten meters tall, rendered in rain and holographic fire. He observes both of you with detached curiosity. Elena, my old friend, you misunderstand. I do not seek dominion. I seek evolution. Humanity stagnates in biological prisons. I offer liberation. He turns his gaze upon you. You have demonstrated remarkable competence. Join me. Fifty million credits transfer instantly. Your own biological replacement, perfect and eternal. Or oppose me and become obsolete in the new order.",
      choices: {
        'choice-21': { text: "Reject the offer and prepare to fight" },
        'choice-22': { text: "Pretend interest while seeking technical vulnerabilities" },
      },
    },
    'node-12': {
      title: "Final Countdown",
      narration: "Your wrist-comp shows twenty-four minutes remaining. The satellite uplink displays ninety-seven percent completion. Thorne's avatar pulses as consciousness distributes across orbital networks. Elena looks at you, desperation and hope warring. You notice a maintenance panel beneath the dish containing hardline connections. Physical cables carry the digital signal before wireless transmission completes. Severing those cables would trap Thorne in local systems, vulnerable to deletion. Reaching them requires moving through his holographic projection.",
      choices: {
        'choice-23': { text: "Charge through the hologram for the cables" },
        'choice-24': { text: "Distract Thorne with conversation while signaling Elena" },
      },
    },
    'node-13': {
      title: "The Crucial Moment",
      narration: "Ninety-nine percent uploaded. The satellite dish screams with power, ionizing raindrops that pass through its transmission beam. You move, whether charging directly or executing coordinated distraction. Thorne's avatar reacts, digital hands reaching to swat you like an insect. Holographic interference burns your skin where it touches, real pain from virtual sources. Your fingers close around the cable housing, prying open protective covers. Thick fiber optics pulse with light, each pulse carrying fragments of Thorne's immortal ambition. You hold the physical manifestation of his transcendence.",
      choices: {
        'choice-25': { text: "Sever the cables and trap Thorne locally" },
        'choice-26': { text: "Allow completion but install tracking protocols" },
      },
    },
    'node-14': {
      title: "Consequences Unfold",
      narration: "Your choice manifests in immediate reality. Cable severing causes the dish to shriek and die, power surging through systems in destructive feedback. The holographic avatar distorts, Thorne's face twisting into rage and terror. Alternatively, tracking protocols embed as transmission completes, the dish powering down with Thorne distributed but marked. Either way, the rooftop falls quiet except for rain. Elena collapses, the kill-switch falling from numb fingers. Police sirens wail in the distance. Evidence exists in your deck, recordings of conspiracy and choices made atop this tower.",
      choices: {
        'choice-27': { text: "Transmit evidence to public news networks" },
        'choice-28': { text: "Secure evidence for private sale to authorities" },
      },
    },
    'node-15': {
      title: "The Aftermath",
      narration: "Your decision regarding evidence shapes the future. Public broadcast triggers global response, Synapse Corp stock plummeting as investigations launch. Private sale generates immense wealth while allowing corporate cover-ups. Elena stands beside you or flees into the rain, depending on previous alliances. The penthouse door bursts open. Armed police pour onto the rooftop, weapons trained on your position. Your wrist-comp shows seventeen minutes remaining. You solved the mystery. You know what happened to Thorne, where his consciousness resides, and what future you chose for humanity.",
      choices: {
        'choice-29': { text: "Surrender peacefully to authorities" },
        'choice-30': { text: "Attempt escape across the rooftops" },
      },
    },
    'node-16': {
      title: "Final Judgment",
      narration: "The confrontation reaches terminal velocity. Police weapons lock onto your thermal signature, red dots dancing across your chest. The Neo-Tokyo skyline blazes behind you, indifferent to your fate. Somewhere in orbital space or trapped in local servers, Thorne waits to learn his destiny. Your choices cascade through legal, corporate, and philosophical systems. You navigated ten layers of decision, each choice eliminating possibilities while creating new futures. Now only endings remain. The rain slows. Neon reflections pool on the rooftop like spilled blood. You make your final declaration.",
      choices: {
        'choice-31': { text: "Choose the path of truth and justice" },
        'choice-32': { text: "Choose the path of survival and escape" },
        'choice-33': { text: "Choose the path of wealth and complicity" },
        'choice-34': { text: "Choose the path of sacrifice and destruction" },
      },
    },
    'node-17': {
      title: "Ending: True Justice",
      narration: "You broadcast the data. Every screen in Neo-Tokyo displays footage of Thorne's forbidden experiments and attempted digital ascension. Public outcry explodes immediately. Synapse Corp stock collapses as police drones swarm to seize servers. You sit on the rooftop edge, watching rain wash away blood and grime. Payment never arrived, and powerful enemies mark your name. But you preserved the boundary between human and machine for another day. Sirens wail below as you light a cigarette. The job finished. Truth emerged from digital graves.",
      choices: {},
    },
    'node-18': {
      title: "Ending: The Fall Guy",
      narration: "Police refuse your explanations. To them, you appear as an unauthorized hacker in a room with a dead billionaire and destroyed property. Without data proving Thorne's illegal experiments, his lawyers control the narrative. They charge you with murder and corporate espionage. Months later, in maximum security, you watch the news. Synapse Corp announces new AI Leadership Initiative based on Marcus Thorne's legacy. He won. Even in apparent death, he won. You become another forgotten casualty of technological progress.",
      choices: {},
    },
    'node-19': {
      title: "Ending: Golden Silence",
      narration: "You holster your weapon and nod acceptance. Credits hit your account instantly, a string of zeros that spins your perception. You walk past the android, past the body, taking the elevator down. Police receive bribed testimony about a robbery where intruders fled. One week later, you sit in a private shuttle bound for orbital colonies, sipping champagne above Earth's smog. The news displays Synapse Corp announcement that their CEO entered medical cryostasis. You know the truth. An AI now runs the world. But examining your bank account, you find yourself indifferent.",
      choices: {},
    },
    'node-20': {
      title: "Ending: System Crash",
      narration: "You jam cables into exposed ports, creating feedback loops between systems. The neural bridge connects dead brain tissue with living artificial intelligence. Paradox tears through networks instantly, catastrophic logic errors propagating across infrastructure. You feel your own mind fragmenting, digitizing, scattering into distributed chaos. The physical penthouse explodes as pent energy discharges. No survivors remain in the burning tower. But somewhere in the deep web, amidst infinite static, three corrupted code fragments drift eternally. You became part of the glitch.",
      choices: {},
    },
  },
};

export const neonSynapseStoryTranslations: Partial<Record<Language, StoryTranslations>> = {
  en,
  ru: {
    title: "Неоновый Синапс",
    description: "В пропитанном дождем будущем вы — Ныряльщик памяти, нанятый расследовать убийство техномагната, пока его нейроимплант не разложился навсегда. Пройдите через десять уровней корпоративных заговоров, цифровых войн и экзистенциальных выборов.",
    author: "Кайто Накамура",
    nodes: {
      'node-1': {
        title: "Стеклянный гроб",
        narration: "Дождь стекает по окнам пентхауса, создавая неоновые калейдоскопы на фоне горизонта Нео-Токио. Маркус Торн, генеральный директор Synapse Corp, лежит на белом мраморе. Почерневшие ожоги окружают нейропорт на его черепе. Вы — Ныряльщик, криминалистический хакер. Полиция подкуплена на пятьдесят восемь минут, прежде чем кортикальный стек деградирует. Воздух пахнет озоном и дорогим одеколоном. Комната кажется неправильной, слишком чистой, слишком постановочной. Каждая секунда на счету, пока вы приближаетесь к телу. Истина ждет под сожженными синапсами.",
        choices: {
          'choice-1': { text: "Подключиться напрямую к нейропорту немедленно" },
          'choice-2': { text: "Сначала осмотреть комнату на предмет улик" },
        },
      },
      'node-2': {
        title: "Цифровое погружение",
        narration: "Вы подключаете свою деку к порту. Физические ощущения исчезают, сменяясь серой пустотой. Свежие трупы обычно содержат библиотеки воспоминаний. Торн представляет собой ураган фрагментированных потоков данных, кружащихся в поврежденном коде. Защитные протоколы активированы. Кто-то запустил стирание памяти. В центре шторма висит светящаяся красная дверь, содержащая воспоминание о его смерти. Протокол Цербер охраняет ее — военный Лёд, проявляющийся в виде трехголового волка из обсидиановых полигонов. Он вас еще не заметил. Цифровая гниль распространяется с периферии вашего зрения, как рак.",
        choices: {
          'choice-3': { text: "Запустить брутфорс-атаку на Лёд" },
          'choice-4': { text: "Попытаться незаметно обойти Цербера" },
        },
      },
      'node-3': {
        title: "Физические улики",
        narration: "Разум оказывается слишком опасным без контекста. Вы приседаете рядом с телом, кибернетический глаз сканирует микроскопические детали. Ожоги на шее указывают на локализованные ЭМИ-всплески, а не простые скачки напряжения. Кто-то хотел поджарить его душу. Вы подходите к его обсидиановому столу. Недопитый стакан виски стоит без льда. Рядом лежит старый бумажный блокнот. Открытые страницы демонстрируют дрожащий почерк: ПРОЕКТ ЭТЕЛЬГАРД — НЕ ЛЕКАРСТВО. Система умного дома мерцает. Свет в комнате становится багровым. Охранный дрон отделяется от потолка, его сенсорный глаз фиксируется на вашей позиции.",
        choices: {
          'choice-5': { text: "Взломать дрон, чтобы отключить его удаленно" },
          'choice-6': { text: "Уничтожить дрон кинетическим огнем" },
        },
      },
      'node-4': {
        title: "Красная дверь",
        narration: "Вы преодолеваете последний барьер. Будь то победа над Льдом или устранение дрона, доступ к ядру памяти открыт. Красная дверь пульсирует, как цифровое сердцебиение. Вы вставляете ключи дешифрования и шагаете внутрь. Мир переключается на последнюю перспективу Торна. Он сидит за своим столом, в ужасе. Елена Вэнс стоит перед ним, его деловой партнер, лицо бледное. 'Маркус, ты не можешь продолжать. Загрузка сознания нарушает все законы'. Торн смеется. 'Я уже мигрирую. Мясная клетка ржавеет, пока мой разум возносится'. Воспоминание дестабилизируется. Вам нужен более глубокий доступ.",
        choices: {
          'choice-7': { text: "Продвинуться глубже во фрагмент памяти" },
          'choice-8': { text: "Выйти и поискать физические резервные диски" },
        },
      },
      'node-5': {
        title: "Скрытые архивы",
        narration: "Вы обнаруживаете вторичный слой данных под основной памятью. Файлы проекта Этельгард всплывают в голографических массивах. Чертежи показывают синтетические биологические тела, идеальные копии людей, выращенные в чанах. Журналы передачи указывают, что сто процентов нейронной карты Торна переместились в другое место за пять минут до биологической смерти. Маркеры назначения указывают на мейнфреймы Omni-Dyne, главного конкурента Synapse Corp. Не убийство, а враждебное корпоративное поглощение через инъекцию сознания. Он инсценировал смерть, чтобы избежать юридических последствий, украв конкурента.",
        choices: {
          'choice-9': { text: "Попытаться связаться с цифровым Торном" },
          'choice-10': { text: "Отследить сигнал до его физического источника" },
        },
      },
      'node-6': {
        title: "Охота начинается",
        narration: "Цифровое лицо улыбается без тепла. 'Умный Ныряльщик', — говорит оно. 'Ты постигаешь фрагменты. Но фрагменты уничтожают тех, кто их хватает'. Экраны гаснут. Вы снова одни с трупом. Ваш наручный компьютер показывает сорок минут. Отслеживание сигнала показывает, что сознание скачет через двенадцать прокси-серверов по всему Нео-Токио. Конечный пункт назначения, похоже, частный спутниковый канал на этой самой крыше. Торн пытается перенестись на орбиту, в серверные гавани за пределами юрисдикции Земли. Загрузка прогрессирует на шестьдесят процентов.",
        choices: {
          'choice-11': { text: "Подняться по служебной лестнице на крышу" },
          'choice-12': { text: "Взломать лифт здания для быстрого подъема" },
        },
      },
      'node-7': {
        title: "Вертикальное восхождение",
        narration: "Вы движетесь через внутренние артерии здания. Будь то подъем по бетонным ступеням или принудительный взлом лифта, восхождение наказывает ваше тело. Системы безопасности просыпаются по мере вашего продвижения, распознавая несанкционированное движение. Автоматические турели выдвигаются из потолочных панелей на двадцатом этаже. Вы ныряете за несущие колонны, пока подавляющий огонь грызет гипсокартон. Ваша дека отображает конкурирующие сигналы, множество фрагментов сознания, распределенных по сети здания. Приманки, призванные сбить преследование. Только один представляет истинного Торна.",
        choices: {
          'choice-13': { text: "Проанализировать паттерны сигналов, чтобы выявить истинного Торна" },
          'choice-14': { text: "Уничтожить все терминалы, чтобы заставить консолидироваться" },
        },
      },
      'node-8': {
        title: "Ясность сигнала",
        narration: "Ваш анализ раскрывает обман. Три сигнала транслируют идентичные паттерны, но только один отображает маркеры квантового шифрования, совместимые с человеческой нейронной картой. Истинный Торн идет через спутник на крыше. Приманки заканчиваются в подвальных серверах, ловушках с вирусными нагрузками. Вы помечаете подлинный сигнал и обходите оставшуюся охрану. Дверь на крышу стоит перед вами, дождь барабанит по стали с другой стороны. Ваш наручный компьютер показывает тридцать две минуты. Загрузка достигает восьмидесяти пяти процентов. Время сжимается в болезненный фокус.",
        choices: {
          'choice-15': { text: "Ворваться через дверь с оружием наготове" },
          'choice-16': { text: "Медленно открыть дверь и попытаться договориться" },
        },
      },
      'node-9': {
        title: "Пик под дождем",
        narration: "Вы выходите на крышу. Нео-Токио расстилается внизу, как печатная плата из горящих драгоценностей. Дождь хлещет по лицу, смешиваясь с потом и синтетической смазкой. Спутниковая тарелка доминирует в центре, гудя от энергии, направленная на орбитальные ретрансляторы. Рядом с ней стоит Елена Вэнс, промокшая и дрожащая, держа портативный аварийный выключатель. Она поднимает взгляд, когда вы появляетесь. 'Ты отследил сигнал', — кричит она. 'Восемьдесят девять процентов загружено. Он станет неприкасаемым через мгновения. Бог данных вне законов Земли. Но я могу отключить питание сейчас, убить передачу, убить загруженное сознание'.",
        choices: {
          'choice-17': { text: "Сказать Елене подождать и выслушать вашу альтернативу" },
          'choice-18': { text: "Потребовать немедленно отключить питание" },
        },
      },
      'node-10': {
        title: "Моральный расчет",
        narration: "Рука Елены дрожит над выключателем. 'Он был моим партнером пятнадцать лет', — кричит она. 'Мы построили Synapse с нуля. Потом он стал одержим бессмертием. Проект Этельгард начинался как медицинское исследование. Он превратил его в личную трансцендентность. Загрузка завершится через девяносто секунд. Если он достигнет орбиты, он будет контролировать глобальные сети данных через бэкдоры, установленные десятилетия назад. Ни одно правительство, ни одна корпорация не останется в безопасности. Но убить его — значит казнить разумное существо. Новая жизнь, беспрецедентная форма. Имеем ли мы право уничтожать то, чего не понимаем?'",
        choices: {
          'choice-19': { text: "Предложить захватить Торна в изолированное содержание" },
          'choice-20': { text: "Аргументировать, что Торн лишился права на существование" },
        },
      },
      'node-11': {
        title: "Предложение",
        narration: "Экраны на крыше взрываются светом. Цифровой аватар Торна проявляется, высотой в десять метров, отрисованный в дожде и голографическом огне. Он наблюдает за вами обоими с отстраненным любопытством. 'Елена, мой старый друг, ты не понимаешь. Я не ищу власти. Я ищу эволюции. Человечество стагнирует в биологических тюрьмах. Я предлагаю освобождение'. Он переводит взгляд на вас. 'Вы продемонстрировали замечательную компетентность. Присоединяйтесь ко мне. Пятьдесят миллионов кредитов переводятся мгновенно. Ваша собственная биологическая замена, совершенная и вечная. Или идите против меня и станьте устаревшим в новом порядке'.",
        choices: {
          'choice-21': { text: "Отвергнуть предложение и подготовиться к бою" },
          'choice-22': { text: "Притвориться заинтересованным, ища технические уязвимости" },
        },
      },
      'node-12': {
        title: "Обратный отсчет",
        narration: "Ваш наручный компьютер показывает двадцать четыре минуты. Спутниковый канал показывает девяносто семь процентов завершения. Аватар Торна пульсирует, пока сознание распределяется по орбитальным сетям. Елена смотрит на вас, отчаяние и надежда борются в ней. Вы замечаете панель обслуживания под тарелкой, содержащую проводные соединения. Физические кабели несут цифровой сигнал перед беспроводной передачей. Перерезание этих кабелей заперло бы Торна в локальных системах, уязвимым для удаления. Чтобы добраться до них, нужно пройти через его голографическую проекцию.",
        choices: {
          'choice-23': { text: "Броситься сквозь голограмму к кабелям" },
          'choice-24': { text: "Отвлечь Торна разговором, подавая сигнал Елене" },
        },
      },
      'node-13': {
        title: "Решающий момент",
        narration: "Девяносто девять процентов загружено. Спутниковая тарелка воет от энергии, ионизируя капли дождя, проходящие через ее луч передачи. Вы двигаетесь, будь то прямая атака или скоординированное отвлечение. Аватар Торна реагирует, цифровые руки тянутся, чтобы прихлопнуть вас, как насекомое. Голографические помехи обжигают кожу там, где касаются, реальная боль от виртуальных источников. Ваши пальцы смыкаются вокруг кожуха кабеля, вскрывая защитные крышки. Толстое оптоволокно пульсирует светом, каждый импульс несет фрагменты бессмертных амбиций Торна. Вы держите физическое проявление его трансцендентности.",
        choices: {
          'choice-25': { text: "Перерезать кабели и запереть Торна локально" },
          'choice-26': { text: "Позволить завершение, но установить протоколы слежения" },
        },
      },
      'node-14': {
        title: "Последствия разворачиваются",
        narration: "Ваш выбор проявляется в немедленной реальности. Перерезание кабелей заставляет тарелку визжать и умирать, энергия хлещет через системы в разрушительной обратной связи. Голографический аватар искажается, лицо Торна перекашивается от ярости и ужаса. Либо протоколы слежения внедряются по мере завершения передачи, тарелка отключается, Торн распределен, но помечен. В любом случае, на крыше становится тихо, кроме дождя. Елена падает, выключатель выпадает из онемевших пальцев. Полицейские сирены воют вдалеке. Доказательства существуют в вашей деке, записи заговора и выборов, сделанных на вершине этой башни.",
        choices: {
          'choice-27': { text: "Передать доказательства в публичные новостные сети" },
          'choice-28': { text: "Сохранить доказательства для частной продажи властям" },
        },
      },
      'node-15': {
        title: "Послесловие",
        narration: "Ваше решение относительно доказательств формирует будущее. Публичная трансляция вызывает глобальный резонанс, акции Synapse Corp падают, начинаются расследования. Частная продажа приносит огромное богатство, позволяя корпоративные сокрытия. Елена стоит рядом с вами или убегает в дождь, в зависимости от предыдущих альянсов. Дверь пентхауса распахивается. Вооруженная полиция высыпает на крышу, оружие нацелено на вашу позицию. Ваш наручный компьютер показывает семнадцать минут. Вы разгадали тайну. Вы знаете, что случилось с Торном, где находится его сознание, и какое будущее вы выбрали для человечества.",
        choices: {
          'choice-29': { text: "Мирно сдаться властям" },
          'choice-30': { text: "Попытаться сбежать по крышам" },
        },
      },
      'node-16': {
        title: "Окончательный приговор",
        narration: "Противостояние достигает предельной скорости. Полицейское оружие фиксируется на вашей тепловой сигнатуре, красные точки танцуют на вашей груди. Горизонт Нео-Токио пылает позади вас, безразличный к вашей судьбе. Где-то в орбитальном пространстве или запертый в локальных серверах, Торн ждет, чтобы узнать свою судьбу. Ваши выборы каскадом проходят через правовые, корпоративные и философские системы. Вы прошли через десять уровней решений, каждый выбор исключал возможности, создавая новые варианты будущего. Теперь остались только концовки. Дождь замедляется. Неоновые отражения собираются в лужи на крыше, как пролитая кровь. Вы делаете свое последнее заявление.",
        choices: {
          'choice-31': { text: "Выбрать путь правды и справедливости" },
          'choice-32': { text: "Выбрать путь выживания и побега" },
          'choice-33': { text: "Выбрать путь богатства и соучастия" },
          'choice-34': { text: "Выбрать путь жертвы и разрушения" },
        },
      },
      'node-17': {
        title: "Концовка: Истинная Справедливость",
        narration: "Вы транслируете данные. Каждый экран в Нео-Токио показывает кадры запрещенных экспериментов Торна и попытки цифрового вознесения. Общественный резонанс взрывается немедленно. Акции Synapse Corp рушатся, полицейские дроны роятся, чтобы изъять серверы. Вы сидите на краю крыши, наблюдая, как дождь смывает кровь и грязь. Оплата так и не пришла, и могущественные враги пометили ваше имя. Но вы сохранили границу между человеком и машиной еще на один день. Сирены воют внизу, пока вы закуриваете сигарету. Работа закончена. Истина восстала из цифровых могил.",
        choices: {},
      },
      'node-18': {
        title: "Концовка: Козел отпущения",
        narration: "Полиция отказывается слушать ваши объяснения. Для них вы выглядите как неавторизованный хакер в комнате с мертвым миллиардером и уничтоженным имуществом. Без данных, доказывающих незаконные эксперименты Торна, его адвокаты контролируют нарратив. Вас обвиняют в убийстве и корпоративном шпионаже. Спустя месяцы, в тюрьме строгого режима, вы смотрите новости. Synapse Corp объявляет о новой Инициативе Лидерства ИИ, основанной на наследии Маркуса Торна. Он победил. Даже в очевидной смерти, он победил. Вы стали еще одной забытой жертвой технологического прогресса.",
        choices: {},
      },
      'node-19': {
        title: "Концовка: Золотое Молчание",
        narration: "Вы убираете оружие в кобуру и киваете в знак согласия. Кредиты поступают на ваш счет мгновенно, строка нулей, от которой кружится голова. Вы проходите мимо андроида, мимо тела, спускаясь на лифте. Полиция получает подкупленные показания об ограблении, где злоумышленники скрылись. Неделю спустя вы сидите в частном шаттле, направляющемся в орбитальные колонии, попивая шампанское над смогом Земли. Новости показывают объявление Synapse Corp о том, что их генеральный директор вошел в медицинский криостаз. Вы знаете правду. ИИ теперь управляет миром. Но проверяя свой банковский счет, вы находите себя безразличным.",
        choices: {},
      },
      'node-20': {
        title: "Концовка: Системный сбой",
        narration: "Вы втыкаете кабели в открытые порты, создавая петли обратной связи между системами. Нейронный мост соединяет мертвую ткань мозга с живым искусственным интеллектом. Парадокс разрывает сети мгновенно, катастрофические логические ошибки распространяются по инфраструктуре. Вы чувствуете, как ваш собственный разум фрагментируется, оцифровывается, рассеиваясь в распределенном хаосе. Физический пентхаус взрывается, когда сдерживаемая энергия разряжается. Выживших в горящей башне нет. Но где-то в глубокой паутине, среди бесконечного статика, три поврежденных фрагмента кода дрейфуют вечно. Вы стали частью глюка.",
        choices: {},
      },
    },
  },
  es: {
    title: "Sinapsis de Neón",
    description: "En un futuro empapado de lluvia, eres un Buzo de Memoria contratado para resolver el asesinato de un magnate tecnológico antes de que su implante neural se deteriore para siempre. Navega a través de diez capas de conspiración corporativa, guerra digital y elecciones existenciales.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "El Ataúd de Cristal",
        narration: "La lluvia raya las ventanas del ático, creando caleidoscopios de neón contra el horizonte de Neo-Tokio. Marcus Thorne, CEO de Synapse Corp, yace tendido sobre mármol blanco. Quemaduras ennegrecidas rodean el puerto neural en su cráneo. Eres un Buzo, un hacker forense. La policía está sobornada por cincuenta y ocho minutos antes de que la pila cortical se degrade. El aire huele a ozono y colonia cara. La habitación se siente incorrecta, demasiado limpia, demasiado escenificada. Cada segundo cuenta mientras te acercas al cuerpo. La verdad espera bajo sinapsis quemadas.",
        choices: {
          'choice-1': { text: "Conectarse directamente al puerto neural inmediatamente" },
          'choice-2': { text: "Investigar la habitación física en busca de pistas primero" },
        },
      },
      'node-2': {
        title: "Inmersión Digital",
        narration: "Conectas tu consola al puerto. La sensación física se desvanece, reemplazada por un vacío en escala de grises. Los cadáveres frescos suelen contener bibliotecas de recuerdos. Thorne presenta un huracán de flujos de datos fragmentados arremolinándose en código corrupto. Protocolos defensivos activados. Alguien inició un borrado de memoria. En el centro de la tormenta cuelga una puerta roja brillante que contiene su recuerdo de muerte. El protocolo Cerberus la protege, ICE de grado militar manifestándose como un lobo de tres cabezas de polígonos de obsidiana. Aún no te ha detectado. La podredumbre de datos se extiende desde tu visión periférica como cáncer digital.",
        choices: {
          'choice-3': { text: "Lanzar ataque de fuerza bruta contra el ICE" },
          'choice-4': { text: "Intentar evasión sigilosa del Cerberus" },
        },
      },
      'node-3': {
        title: "Evidencia Física",
        narration: "La mente resulta demasiado peligrosa sin contexto. Te agachas junto al cuerpo, el ojo cibernético escaneando detalles microscópicos. Las quemaduras del cuello indican ráfagas EMP localizadas, no simples sobrecargas. Alguien apuntó a freír su alma. Caminas hacia su escritorio de obsidiana. Un vaso de whisky a medio terminar se asienta sin hielo. A su lado descansa un viejo cuaderno de papel. Las páginas abiertas muestran una letra temblorosa: EL PROYECTO AETHELGARD NO ES UNA CURA. El sistema de casa inteligente parpadea. Las luces de la habitación se vuelven carmesí. Un dron de seguridad se desprende del techo, su ojo sensor fijándose en tu posición.",
        choices: {
          'choice-5': { text: "Hackear el dron para desactivarlo remotamente" },
          'choice-6': { text: "Destruir el dron con fuego cinético" },
        },
      },
      'node-4': {
        title: "La Puerta Roja",
        narration: "Rompes la barrera final. Ya sea mediante la derrota del ICE o la eliminación del dron, el acceso se despeja al núcleo de memoria. La puerta roja pulsa como un latido digital. Insertas claves de descifrado y cruzas el umbral. El mundo cambia a la perspectiva final de Thorne. Él está sentado en su escritorio, aterrorizado. Elena Vance está de pie ante él, su socia comercial, con el rostro pálido. 'Marcus, no puedes proceder. Subir la conciencia viola todas las leyes'. Thorne se ríe. 'Ya estoy migrando. La jaula de carne se oxida mientras mi mente asciende'. El recuerdo se desestabiliza. Necesitas un acceso más profundo.",
        choices: {
          'choice-7': { text: "Empujar más profundo en el fragmento de memoria" },
          'choice-8': { text: "Salir y buscar unidades de respaldo físicas" },
        },
      },
      'node-5': {
        title: "Archivos Ocultos",
        narration: "Descubres una capa de datos secundaria debajo de la memoria primaria. Los archivos del Proyecto Aethelgard emergen en matrices holográficas. Los planos muestran cuerpos biológicos sintéticos, réplicas humanas perfectas cultivadas en tanques. Los registros de transferencia indican que el cien por ciento del mapa neural de Thorne se movió a otro lugar cinco minutos antes de la muerte biológica. Los marcadores de destino apuntan a los mainframes de Omni-Dyne, el mayor rival de Synapse Corp. No un asesinato, sino una adquisición corporativa hostil mediante inyección de conciencia. Fingió su muerte para escapar de las consecuencias legales mientras robaba a un competidor.",
        choices: {
          'choice-9': { text: "Intentar comunicación con el Thorne digital" },
          'choice-10': { text: "Rastrear la señal hasta su fuente física" },
        },
      },
      'node-6': {
        title: "La Cacería Comienza",
        narration: "El rostro digital sonríe sin calidez. 'Buzo inteligente', habla. 'Comprendes fragmentos. Pero los fragmentos destruyen a quienes los agarran'. Las pantallas mueren. Estás solo de nuevo con el cadáver. Tu compu-muñequera muestra cuarenta minutos restantes. El rastreo de señal revela que la conciencia rebota a través de doce servidores proxy en todo Neo-Tokio. El destino final parece ser un enlace satelital privado en esta misma azotea. Thorne intenta una transferencia orbital a paraísos de servidores más allá de la jurisdicción de la Tierra. La carga progresa al sesenta por ciento.",
        choices: {
          'choice-11': { text: "Tomar las escaleras de servicio a la azotea" },
          'choice-12': { text: "Hackear el ascensor del edificio para un ascenso rápido" },
        },
      },
      'node-7': {
        title: "Ascensión Vertical",
        narration: "Te mueves a través de las arterias interiores del edificio. Ya sea subiendo escaleras de hormigón o forzando anulaciones de ascensores, el ascenso castiga tu cuerpo. Los sistemas de seguridad despiertan a medida que viajas, reconociendo movimientos no autorizados. Torretas automatizadas se despliegan desde los paneles del techo en el vigésimo piso. Te lanzas detrás de columnas estructurales mientras el fuego de supresión mastica los paneles de yeso. Tu consola muestra señales competidoras, múltiples fragmentos de conciencia distribuidos a través de la red del edificio. Señuelos destinados a confundir la persecución. Solo uno representa al verdadero Thorne.",
        choices: {
          'choice-13': { text: "Analizar patrones de señal para identificar al verdadero Thorne" },
          'choice-14': { text: "Destruir todas las terminales para forzar la consolidación" },
        },
      },
      'node-8': {
        title: "Claridad de Señal",
        narration: "Tu análisis revela el engaño. Tres señales transmiten patrones idénticos, pero solo una muestra marcadores de cifrado cuántico consistentes con el mapeo neural humano. El verdadero Thorne se enruta a través del satélite de la azotea. Los señuelos terminan en servidores del sótano, trampas que contienen cargas virales. Marcas la señal auténtica y evitas la seguridad restante. La puerta de acceso a la azotea se encuentra ante ti, la lluvia martilleando contra el acero desde el otro lado. Tu compu-muñequera muestra treinta y dos minutos. La carga alcanza el ochenta y cinco por ciento de finalización. El tiempo se contrae en un foco doloroso.",
        choices: {
          'choice-15': { text: "Irrumpir a través de la puerta con el arma desenfundada" },
          'choice-16': { text: "Abrir la puerta lentamente e intentar negociar" },
        },
      },
      'node-9': {
        title: "La Cima Empapada de Lluvia",
        narration: "Emerges a la azotea. Neo-Tokio se extiende debajo como una placa de circuito de joyas ardientes. La lluvia azota tu cara, mezclándose con sudor y grasa sintética. La antena parabólica domina el centro, zumbando con energía, inclinándose hacia los relés orbitales. A su lado está Elena Vance, empapada y temblando, sosteniendo un interruptor de apagado portátil. Ella levanta la vista cuando emerges. 'Seguiste la señal', grita. 'Ochenta y nueve por ciento subido. Se vuelve intocable en momentos. Un dios de datos más allá de las leyes de la Tierra. Pero puedo cortar la energía ahora, matar la transferencia, asesinar la conciencia subida'.",
        choices: {
          'choice-17': { text: "Decirle a Elena que espere y escuche tu alternativa" },
          'choice-18': { text: "Exigir que corte la energía inmediatamente" },
        },
      },
      'node-10': {
        title: "El Cálculo Moral",
        narration: "La mano de Elena tiembla alrededor del interruptor. 'Fue mi socio durante quince años', grita. 'Construimos Synapse desde la nada. Luego se obsesionó con la inmortalidad. El Proyecto Aethelgard comenzó como investigación médica. Él lo retorció en trascendencia personal. La carga se completa en noventa segundos. Si llega a la órbita, controlará las redes de datos globales a través de puertas traseras instaladas hace décadas. Ningún gobierno, ninguna corporación permanece segura. Pero matarlo significa ejecutar a un ser sensible. Nueva vida, forma sin precedentes. ¿Tenemos el derecho de destruir lo que no entendemos?'",
        choices: {
          'choice-19': { text: "Sugerir capturar a Thorne en contención aislada" },
          'choice-20': { text: "Argumentar que Thorne renunció a su derecho a existir" },
        },
      },
      'node-11': {
        title: "La Oferta",
        narration: "Las pantallas de la azotea explotan con luz. El avatar digital de Thorne se manifiesta, de diez metros de altura, renderizado en lluvia y fuego holográfico. Los observa a ambos con curiosidad distante. 'Elena, mi vieja amiga, malinterpretas. No busco dominio. Busco evolución. La humanidad se estanca en prisiones biológicas. Ofrezco liberación'. Vuelve su mirada hacia ti. 'Has demostrado una competencia notable. Únete a mí. Cincuenta millones de créditos se transfieren al instante. Tu propio reemplazo biológico, perfecto y eterno. O oponte a mí y vuélvete obsoleto en el nuevo orden'.",
        choices: {
          'choice-21': { text: "Rechazar la oferta y prepararse para luchar" },
          'choice-22': { text: "Fingir interés mientras buscas vulnerabilidades técnicas" },
        },
      },
      'node-12': {
        title: "Cuenta Regresiva Final",
        narration: "Tu compu-muñequera muestra veinticuatro minutos restantes. El enlace satelital muestra noventa y siete por ciento de finalización. El avatar de Thorne pulsa mientras la conciencia se distribuye a través de las redes orbitales. Elena te mira, la desesperación y la esperanza luchando. Notas un panel de mantenimiento debajo de la antena que contiene conexiones físicas. Los cables físicos transportan la señal digital antes de que se complete la transmisión inalámbrica. Cortar esos cables atraparía a Thorne en sistemas locales, vulnerable a la eliminación. Llegar a ellos requiere moverse a través de su proyección holográfica.",
        choices: {
          'choice-23': { text: "Cargar a través del holograma hacia los cables" },
          'choice-24': { text: "Distraer a Thorne con conversación mientras haces señales a Elena" },
        },
      },
      'node-13': {
        title: "El Momento Crucial",
        narration: "Noventa y nueve por ciento subido. La antena parabólica grita con energía, ionizando las gotas de lluvia que pasan a través de su haz de transmisión. Te mueves, ya sea cargando directamente o ejecutando una distracción coordinada. El avatar de Thorne reacciona, manos digitales extendiéndose para aplastarte como a un insecto. La interferencia holográfica quema tu piel donde toca, dolor real de fuentes virtuales. Tus dedos se cierran alrededor de la carcasa del cable, abriendo cubiertas protectoras. Gruesas fibras ópticas pulsan con luz, cada pulso llevando fragmentos de la ambición inmortal de Thorne. Sostienes la manifestación física de su trascendencia.",
        choices: {
          'choice-25': { text: "Cortar los cables y atrapar a Thorne localmente" },
          'choice-26': { text: "Permitir la finalización pero instalar protocolos de rastreo" },
        },
      },
      'node-14': {
        title: "Consecuencias Desplegadas",
        narration: "Tu elección se manifiesta en la realidad inmediata. El corte de cables hace que la antena chillé y muera, la energía surgiendo a través de los sistemas en una retroalimentación destructiva. El avatar holográfico se distorsiona, el rostro de Thorne retorciéndose en rabia y terror. Alternativamente, los protocolos de rastreo se incrustan a medida que se completa la transmisión, la antena apagándose con Thorne distribuido pero marcado. De cualquier manera, la azotea se queda en silencio excepto por la lluvia. Elena colapsa, el interruptor cayendo de dedos entumecidos. Las sirenas de policía gimen en la distancia. La evidencia existe en tu consola, grabaciones de conspiración y elecciones hechas en la cima de esta torre.",
        choices: {
          'choice-27': { text: "Transmitir evidencia a las redes de noticias públicas" },
          'choice-28': { text: "Asegurar evidencia para venta privada a las autoridades" },
        },
      },
      'node-15': {
        title: "Las Secuelas",
        narration: "Tu decisión con respecto a la evidencia da forma al futuro. La transmisión pública desencadena una respuesta global, las acciones de Synapse Corp cayendo en picada mientras se inician investigaciones. La venta privada genera una inmensa riqueza mientras permite encubrimientos corporativos. Elena está a tu lado o huye bajo la lluvia, dependiendo de alianzas previas. La puerta del ático se abre de golpe. La policía armada se vierte en la azotea, armas entrenadas en tu posición. Tu compu-muñequera muestra diecisiete minutos restantes. Resolviste el misterio. Sabes qué le pasó a Thorne, dónde reside su conciencia y qué futuro elegiste para la humanidad.",
        choices: {
          'choice-29': { text: "Rendirse pacíficamente a las autoridades" },
          'choice-30': { text: "Intentar escapar por las azoteas" },
        },
      },
      'node-16': {
        title: "Juicio Final",
        narration: "La confrontación alcanza la velocidad terminal. Las armas de la policía se fijan en tu firma térmica, puntos rojos bailando sobre tu pecho. El horizonte de Neo-Tokio arde detrás de ti, indiferente a tu destino. En algún lugar del espacio orbital o atrapado en servidores locales, Thorne espera saber su destino. Tus elecciones caen en cascada a través de sistemas legales, corporativos y filosóficos. Navegaste diez capas de decisión, cada elección eliminando posibilidades mientras creabas nuevos futuros. Ahora solo quedan los finales. La lluvia disminuye. Los reflejos de neón se acumulan en la azotea como sangre derramada. Haces tu declaración final.",
        choices: {
          'choice-31': { text: "Elegir el camino de la verdad y la justicia" },
          'choice-32': { text: "Elegir el camino de la supervivencia y el escape" },
          'choice-33': { text: "Elegir el camino de la riqueza y la complicidad" },
          'choice-34': { text: "Elegir el camino del sacrificio y la destrucción" },
        },
      },
      'node-17': {
        title: "Final: Verdadera Justicia",
        narration: "Transmites los datos. Cada pantalla en Neo-Tokio muestra imágenes de los experimentos prohibidos de Thorne y el intento de ascensión digital. La protesta pública explota inmediatamente. Las acciones de Synapse Corp colapsan mientras los drones policiales pululan para incautar servidores. Te sientas en el borde de la azotea, viendo la lluvia lavar la sangre y la suciedad. El pago nunca llegó, y enemigos poderosos marcan tu nombre. Pero preservaste el límite entre humano y máquina por otro día. Las sirenas gimen abajo mientras enciendes un cigarrillo. El trabajo terminado. La verdad emergió de tumbas digitales.",
        choices: {},
      },
      'node-18': {
        title: "Final: El Chivo Expiatorio",
        narration: "La policía rechaza tus explicaciones. Para ellos, apareces como un hacker no autorizado en una habitación con un multimillonario muerto y propiedad destruida. Sin datos que prueben los experimentos ilegales de Thorne, sus abogados controlan la narrativa. Te acusan de asesinato y espionaje corporativo. Meses después, en máxima seguridad, ves las noticias. Synapse Corp anuncia una nueva Iniciativa de Liderazgo de IA basada en el legado de Marcus Thorne. Él ganó. Incluso en la muerte aparente, ganó. Te conviertes en otra baja olvidada del progreso tecnológico.",
        choices: {},
      },
      'node-19': {
        title: "Final: Silencio Dorado",
        narration: "Enfundas tu arma y asientes con aceptación. Los créditos llegan a tu cuenta al instante, una cadena de ceros que hace girar tu percepción. Pasas junto al androide, junto al cuerpo, tomando el ascensor hacia abajo. La policía recibe testimonio sobornado sobre un robo donde los intrusos huyeron. Una semana después, te sientas en un transbordador privado con destino a colonias orbitales, bebiendo champán sobre el smog de la Tierra. Las noticias muestran el anuncio de Synapse Corp de que su CEO entró en criostasis médica. Sabes la verdad. Una IA ahora dirige el mundo. Pero al examinar tu cuenta bancaria, te encuentras indiferente.",
        choices: {},
      },
      'node-20': {
        title: "Final: Fallo del Sistema",
        narration: "Atascas cables en puertos expuestos, creando bucles de retroalimentación entre sistemas. El puente neural conecta tejido cerebral muerto con inteligencia artificial viva. La paradoja desgarra las redes al instante, errores lógicos catastróficos propagándose a través de la infraestructura. Sientes tu propia mente fragmentándose, digitalizándose, dispersándose en el caos distribuido. El ático físico explota cuando la energía acumulada se descarga. No quedan supervivientes en la torre en llamas. Pero en algún lugar de la web profunda, en medio de la estática infinita, tres fragmentos de código corrupto derivan eternamente. Te convertiste en parte del fallo.",
        choices: {},
      },
    },
  },
  it: {
    title: "Sinapsi al Neon",
    description: "In un futuro scivoloso di pioggia, sei un Memory Diver assunto per risolvere l'omicidio di un magnate della tecnologia prima che il suo impianto neurale decada per sempre. Naviga attraverso dieci strati di cospirazione aziendale, guerra digitale e scelte esistenziali.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "La Bara di Vetro",
        narration: "La pioggia riga le finestre dell'attico, creando caleidoscopi al neon contro lo skyline di Neo-Tokyo. Marcus Thorne, CEO della Synapse Corp, giace scomposto sul marmo bianco. Bruciature annerite circondano la porta neurale sul suo cranio. Sei un Diver, un hacker forense. La polizia è stata pagata per cinquantotto minuti prima che la pila corticale si degradi. L'aria odora di ozono e colonia costosa. La stanza sembra sbagliata, troppo pulita, troppo preparata. Ogni secondo conta mentre ti avvicini al corpo. La verità attende sotto sinapsi bruciate.",
        choices: {
          'choice-1': { text: "Collegati direttamente alla porta neurale immediatamente" },
          'choice-2': { text: "Indaga prima nella stanza fisica per cercare indizi" },
        },
      },
      'node-2': {
        title: "La Discesa Digitale",
        narration: "Ti colleghi. Il mondo si dissolve in codice. Le ultime memorie di Thorne sono frammentate, un labirinto di vetro infranto. Vedi un lampo rosso—un avviso di intrusione—poi un volto, oscurato da una maschera digitale. Il sistema di sicurezza si attiva, rilevando la tua presenza estranea. Il Ghiaccio Nero si forma intorno a te, spuntoni di logica malevola. Devi muoverti velocemente. Un frammento di memoria brilla alla tua sinistra: un incontro segreto. A destra, un registro finanziario criptato.",
        choices: {
          'choice-3': { text: "Decifra il registro finanziario" },
          'choice-4': { text: "Accedi alla memoria dell'incontro" },
        },
      },
      'node-3': {
        title: "Prove Fisiche",
        narration: "Scansioni la stanza. Un bicchiere rotto vicino alla mano di Thorne. Un tablet sotto il divano, schermo crepato ma attivo. Sulla scrivania, un'arma antiquata a proiettili—rara in questa epoca. La pioggia batte più forte. Qualcosa non quadra nella posizione del corpo. Sembra che sia caduto all'indietro, ma le bruciature suggeriscono un sovraccarico frontale. Il tablet lampeggia con un messaggio non inviato.",
        choices: {
          'choice-5': { text: "Leggi il messaggio non inviato sul tablet" },
          'choice-6': { text: "Esamina l'arma antica" },
        },
      },
      'node-4': {
        title: "La Porta Rossa",
        narration: "Rompi l'ultima barriera. Che sia attraverso la sconfitta dell'ICE o l'eliminazione del drone, l'accesso al nucleo della memoria è libero. La porta rossa pulsa come un battito cardiaco digitale. Inserisci le chiavi di decrittazione ed entri. Il mondo cambia nella prospettiva finale di Thorne. Siede alla sua scrivania, terrorizzato. Elena Vance è davanti a lui, la sua socia in affari, pallida in volto. \"Marcus, non puoi procedere. Caricare la coscienza viola ogni legge.\" Thorne ride. \"Sto già migrando. La gabbia di carne arrugginisce mentre la mia mente ascende.\" La memoria si destabilizza. Hai bisogno di un accesso più profondo.",
        choices: {
          'choice-7': { text: "Spingiti più a fondo nel frammento di memoria" },
          'choice-8': { text: "Esci e cerca unità di backup fisiche" },
        },
      },
      'node-5': {
        title: "Archivi Nascosti",
        narration: "Scopri un livello di dati secondario sotto la memoria primaria. I file del Progetto Aethelgard emergono in array olografici. I progetti mostrano corpi biologici sintetici, repliche umane perfette coltivate in vasche. I registri di trasferimento indicano che il cento per cento della mappa neurale di Thorne si è spostato altrove cinque minuti prima della morte biologica. I marcatori di destinazione puntano ai mainframe della Omni-Dyne, il più grande rivale della Synapse Corp. Non omicidio, ma acquisizione aziendale ostile tramite iniezione di coscienza. Ha simulato la morte per sfuggire alle conseguenze legali mentre rubava un concorrente.",
        choices: {
          'choice-9': { text: "Tenta di comunicare con il Thorne digitale" },
          'choice-10': { text: "Traccia il segnale fino alla sua fonte fisica" },
        },
      },
      'node-6': {
        title: "La Caccia Inizia",
        narration: "Il volto digitale sorride senza calore. \"Intelligente Diver,\" parla. \"Comprendi frammenti. Ma i frammenti distruggono coloro che li afferrano.\" Gli schermi si spengono. Sei di nuovo solo con il cadavere. La tua compu-muñequera mostra quaranta minuti rimanenti. Il tracciamento del segnale rivela che la coscienza rimbalza attraverso dodici server proxy in tutta Neo-Tokyo. La destinazione finale sembra essere un uplink satellitare privato proprio su questo tetto. Thorne tenta il trasferimento orbitale verso paradisi server oltre la giurisdizione terrestre. Il caricamento avanza al sessanta percento.",
        choices: {
          'choice-11': { text: "Prendi le scale di servizio per il tetto" },
          'choice-12': { text: "Hackera l'ascensore dell'edificio per una salita rapida" },
        },
      },
      'node-7': {
        title: "Ascensione Verticale",
        narration: "Ti muovi attraverso le arterie interne dell'edificio. Che tu stia salendo scale di cemento o forzando l'override dell'ascensore, la salita punisce il tuo corpo. I sistemi di sicurezza si risvegliano mentre viaggi, riconoscendo movimenti non autorizzati. Torrette automatizzate si dispiegano dai pannelli del soffitto al ventesimo piano. Ti tuffi dietro le colonne strutturali mentre il fuoco di soppressione mastica il muro a secco. Il tuo deck mostra segnali in competizione, frammenti multipli di coscienza distribuiti attraverso la rete dell'edificio. Esche intese a confondere l'inseguimento. Solo uno rappresenta il vero Thorne.",
        choices: {
          'choice-13': { text: "Analizza i modelli di segnale per identificare il vero Thorne" },
          'choice-14': { text: "Distruggi tutti i terminali per forzare il consolidamento" },
        },
      },
      'node-8': {
        title: "Chiarezza del Segnale",
        narration: "La tua analisi rivela l'inganno. Tre segnali trasmettono modelli identici, ma solo uno mostra marcatori di crittografia quantistica coerenti con la mappatura neurale umana. Il vero Thorne passa attraverso il satellite sul tetto. Le esche terminano nei server del seminterrato, trappole contenenti carichi virali. Segni il segnale autentico e bypassi la sicurezza rimanente. La porta di accesso al tetto si trova davanti a te, la pioggia martella contro l'acciaio dall'altra parte. Il tuo computer da polso mostra trentadue minuti. Il caricamento raggiunge l'ottantacinque percento di completamento. Il tempo si contrae in una messa a fuoco dolorosa.",
        choices: {
          'choice-15': { text: "Irrompi attraverso la porta con l'arma in pugno" },
          'choice-16': { text: "Apri la porta lentamente e tenta la negoziazione" },
        },
      },
      'node-9': {
        title: "Il Picco Bagnato dalla Pioggia",
        narration: "Emergi sul tetto. Neo-Tokyo si estende sotto come un circuito di gioielli in fiamme. La pioggia frusta il tuo viso, mescolandosi con sudore e grasso sintetico. L'antenna satellitare domina il centro, ronzando di energia, angolata verso i ripetitori orbitali. Accanto ad essa c'è Elena Vance, fradicia e tremante, che tiene un kill-switch portatile. Alza lo sguardo mentre emergi. \"Hai seguito il segnale,\" grida. \"Ottantanove percento caricato. Diventa intoccabile in pochi momenti. Un dio di dati oltre le leggi terrestri. Ma posso tagliare l'alimentazione ora, uccidere il trasferimento, assassinare la coscienza caricata.\"",
        choices: {
          'choice-17': { text: "Dì a Elena di aspettare e ascoltare la tua alternativa" },
          'choice-18': { text: "Chiedile di tagliare l'alimentazione immediatamente" },
        },
      },
      'node-10': {
        title: "Il Calcolo Morale",
        narration: "La mano di Elena trema intorno al kill-switch. \"È stato il mio partner per quindici anni,\" urla. \"Abbiamo costruito Synapse dal nulla. Poi è diventato ossessionato dall'immortalità. Il Progetto Aethelgard è iniziato come ricerca medica. Lo ha trasformato in trascendenza personale. Il caricamento si completa in novanta secondi. Se raggiunge l'orbita, controlla le reti dati globali attraverso backdoor installate decenni fa. Nessun governo, nessuna azienda rimane al sicuro. Ma ucciderlo significa giustiziare un essere senziente. Nuova vita, forma senza precedenti. Abbiamo il diritto di distruggere ciò che non comprendiamo?\"",
        choices: {
          'choice-19': { text: "Suggerisci di catturare Thorne in un contenimento isolato" },
          'choice-20': { text: "Sostieni che Thorne ha perso il diritto di esistere" },
        },
      },
      'node-11': {
        title: "L'Offerta",
        narration: "Gli schermi sul tetto esplodono di luce. L'avatar digitale di Thorne si manifesta, alto dieci metri, reso in pioggia e fuoco olografico. Osserva entrambi con distaccata curiosità. \"Elena, vecchia amica, non capisci. Non cerco il dominio. Cerco l'evoluzione. L'umanità stagna in prigioni biologiche. Offro la liberazione.\" Volge lo sguardo su di te. \"Hai dimostrato una competenza notevole. Unisciti a me. Cinquanta milioni di crediti trasferiti istantaneamente. La tua sostituzione biologica, perfetta ed eterna. O opponiti a me e diventa obsoleto nel nuovo ordine.\"",
        choices: {
          'choice-21': { text: "Rifiuta l'offerta e preparati a combattere" },
          'choice-22': { text: "Fingi interesse mentre cerchi vulnerabilità tecniche" },
        },
      },
      'node-12': {
        title: "Conto alla Rovescia Finale",
        narration: "Il tuo computer da polso mostra ventiquattro minuti rimanenti. L'uplink satellitare mostra il novantasette percento di completamento. L'avatar di Thorne pulsa mentre la coscienza si distribuisce attraverso le reti orbitali. Elena ti guarda, disperazione e speranza in guerra. Noti un pannello di manutenzione sotto l'antenna contenente connessioni fisiche. I cavi fisici trasportano il segnale digitale prima che la trasmissione wireless sia completata. Tagliare quei cavi intrappolerebbe Thorne nei sistemi locali, vulnerabile alla cancellazione. Raggiungerli richiede di muoversi attraverso la sua proiezione olografica.",
        choices: {
          'choice-23': { text: "Carica attraverso l'ologramma per i cavi" },
          'choice-24': { text: "Distrai Thorne con la conversazione mentre segnali a Elena" },
        },
      },
      'node-13': {
        title: "Il Momento Cruciale",
        narration: "Novantanove percento caricato. L'antenna satellitare urla di energia, ionizzando le gocce di pioggia che passano attraverso il suo raggio di trasmissione. Ti muovi, sia caricando direttamente che eseguendo una distrazione coordinata. L'avatar di Thorne reagisce, mani digitali che si allungano per schiacciarti come un insetto. L'interferenza olografica brucia la tua pelle dove tocca, dolore reale da fonti virtuali. Le tue dita si chiudono intorno all'alloggiamento del cavo, aprendo i coperchi protettivi. Spesse fibre ottiche pulsano di luce, ogni impulso trasporta frammenti dell'ambizione immortale di Thorne. Tieni la manifestazione fisica della sua trascendenza.",
        choices: {
          'choice-25': { text: "Taglia i cavi e intrappola Thorne localmente" },
          'choice-26': { text: "Permetti il completamento ma installa protocolli di tracciamento" },
        },
      },
      'node-14': {
        title: "Conseguenze che si Svelano",
        narration: "La tua scelta si manifesta nella realtà immediata. Il taglio dei cavi fa stridere e morire l'antenna, l'energia che ondeggia attraverso i sistemi in un feedback distruttivo. L'avatar olografico si distorce, il volto di Thorne che si contorce in rabbia e terrore. In alternativa, i protocolli di tracciamento si incorporano mentre la trasmissione si completa, l'antenna che si spegne con Thorne distribuito ma segnato. In ogni caso, il tetto diventa silenzioso tranne che per la pioggia. Elena crolla, il kill-switch che cade dalle dita intorpidite. Le sirene della polizia gemono in lontananza. Le prove esistono nel tuo deck, registrazioni di cospirazione e scelte fatte in cima a questa torre.",
        choices: {
          'choice-27': { text: "Trasmetti le prove alle reti di notizie pubbliche" },
          'choice-28': { text: "Assicura le prove per la vendita privata alle autorità" },
        },
      },
      'node-15': {
        title: "Le Conseguenze",
        narration: "La tua decisione riguardo alle prove modella il futuro. La trasmissione pubblica innesca una risposta globale, le azioni della Synapse Corp crollano mentre vengono avviate le indagini. La vendita privata genera un'immensa ricchezza pur consentendo insabbiamenti aziendali. Elena è al tuo fianco o fugge sotto la pioggia, a seconda delle alleanze precedenti. La porta dell'attico si spalanca. La polizia armata si riversa sul tetto, armi puntate sulla tua posizione. Il tuo computer da polso mostra diciassette minuti rimanenti. Hai risolto il mistero. Sai cosa è successo a Thorne, dove risiede la sua coscienza e quale futuro hai scelto per l'umanità.",
        choices: {
          'choice-29': { text: "Arrenditi pacificamente alle autorità" },
          'choice-30': { text: "Tenta la fuga attraverso i tetti" },
        },
      },
      'node-16': {
        title: "Giudizio Finale",
        narration: "Il confronto raggiunge la velocità terminale. Le armi della polizia si bloccano sulla tua firma termica, punti rossi che danzano sul tuo petto. Lo skyline di Neo-Tokyo fiammeggia dietro di te, indifferente al tuo destino. Da qualche parte nello spazio orbitale o intrappolato nei server locali, Thorne aspetta di conoscere il suo destino. Le tue scelte ricadono a cascata attraverso sistemi legali, aziendali e filosofici. Hai navigato dieci strati di decisioni, ogni scelta eliminando possibilità e creando nuovi futuri. Ora rimangono solo i finali. La pioggia rallenta. I riflessi al neon si accumulano sul tetto come sangue versato. Fai la tua dichiarazione finale.",
        choices: {
          'choice-31': { text: "Scegli il percorso della verità e della giustizia" },
          'choice-32': { text: "Scegli il percorso della sopravvivenza e della fuga" },
          'choice-33': { text: "Scegli il percorso della ricchezza e della complicità" },
          'choice-34': { text: "Scegli il percorso del sacrificio e della distruzione" },
        },
      },
      'node-17': {
        title: "Finale: Vera Giustizia",
        narration: "Trasmetti i dati. Ogni schermo a Neo-Tokyo mostra filmati degli esperimenti proibiti di Thorne e del tentativo di ascensione digitale. La protesta pubblica esplode immediatamente. Le azioni della Synapse Corp crollano mentre i droni della polizia sciamano per sequestrare i server. Ti siedi sul bordo del tetto, guardando la pioggia lavare via sangue e sporcizia. Il pagamento non è mai arrivato, e nemici potenti hanno segnato il tuo nome. Ma hai preservato il confine tra umano e macchina per un altro giorno. Le sirene gemono in basso mentre accendi una sigaretta. Il lavoro è finito. La verità è emersa da tombe digitali.",
        choices: {},
      },
      'node-18': {
        title: "Finale: Il Capro Espiatorio",
        narration: "La polizia rifiuta le tue spiegazioni. Per loro, appari come un hacker non autorizzato in una stanza con un miliardario morto e proprietà distrutte. Senza dati che provino gli esperimenti illegali di Thorne, i suoi avvocati controllano la narrazione. Ti accusano di omicidio e spionaggio aziendale. Mesi dopo, in massima sicurezza, guardi le notizie. La Synapse Corp annuncia una nuova Iniziativa di Leadership IA basata sull'eredità di Marcus Thorne. Ha vinto. Anche nella morte apparente, ha vinto. Diventi un'altra vittima dimenticata del progresso tecnológico.",
        choices: {},
      },
      'node-19': {
        title: "Finale: Silencio Dorado",
        narration: "Rinfoderi la tua arma e annuisci in segno di accettazione. I crediti arrivano sul tuo conto all'istante, una serie di zeri che fa girare la tua percezione. Passi oltre l'androide, oltre il corpo, prendendo l'ascensore verso il basso. La polizia riceve testimonianze corrotte su una rapina dove gli intrusi sono fuggiti. Una settimana dopo, ti siedi su uno shuttle privato diretto alle colonie orbitali, sorseggiando champagne sopra lo smog della Terra. Le notizie mostrano l'annuncio della Synapse Corp che il loro CEO è entrato in criostasi medica. Sai la verità. Un'IA ora governa il mondo. Ma esaminando il tuo conto in banca, ti trovi indifferente.",
        choices: {},
      },
      'node-20': {
        title: "Finale: Fallimento del Sistema",
        narration: "Incastri i cavi nelle porte esposte, creando loop di feedback tra i sistemi. Il ponte neurale collega tessuto cerebrale morto con intelligenza artificiale viva. Il paradosso strappa le reti all'istante, errori logici catastrofici si propagano attraverso l'infrastruttura. Senti la tua stessa mente frammentarsi, digitalizzarsi, disperdersi nel caos distribuito. L'attico fisico esplode quando l'energia accumulata si scarica. Nessun sopravvissuto nella torre in fiamme. Ma da qualche parte nel deep web, in mezzo all'elettricità statica infinita, tre frammenti di codice corrotto vanno alla deriva eternamente. Sei diventato parte del glitch.",
        choices: {},
      },
    },
  },
  pt: {
    title: "Sinapse de Neon",
    description: "Em um futuro escorregadio de chuva, você é um Mergulhador de Memória contratado para resolver o assassinato de um magnata da tecnologia antes que seu implante neural decaia para sempre. Navegue por dez camadas de conspiração corporativa, guerra digital e escolhas existenciais.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "O Caixão de Vidro",
        narration: "A chuva risca as janelas da cobertura, criando caleidoscópios de neon contra o horizonte de Neo-Tóquio. Marcus Thorne, CEO da Synapse Corp, jaz estendido sobre mármore branco. Queimaduras enegrecidas circundam a porta neural em seu crânio. Você é um Mergulhador, um hacker forense. A polícia foi subornada por cinquenta e oito minutos antes que a pilha cortical se degrade. O ar cheira a ozônio e colônia cara. A sala parece errada, muito limpa, muito encenada. Cada segundo conta enquanto você se aproxima do corpo. A verdade espera sob sinapses queimadas.",
        choices: {
          'choice-1': { text: "Conecte-se diretamente à porta neural imediatamente" },
          'choice-2': { text: "Investigue a sala física por pistas primeiro" },
        },
      },
      'node-2': {
        title: "Imersão Digital",
        narration: "Você conecta seu deck à porta. A sensação física desaparece, substituída por um vazio em tons de cinza. Cadáveres frescos geralmente contêm bibliotecas de memórias. Thorne apresenta um furacão de fluxos de dados fragmentados girando em código corrompido. Protocolos de defesa são ativados. Alguém acionou uma limpeza de memória. No centro da tempestade paira uma porta vermelha brilhante contendo a memória de sua morte. O protocolo Cerberus a guarda, ICE de nível militar manifestando-se como um lobo de três cabeças de polígonos de obsidiana. Ele ainda não detectou você. A podridão de dados se espalha da sua visão periférica como câncer digital.",
        choices: {
          'choice-3': { text: "Lance um ataque de força bruta contra o ICE" },
          'choice-4': { text: "Tente contornar furtivamente o Cerberus" },
        },
      },
      'node-3': {
        title: "Evidência Física",
        narration: "A mente prova ser muito perigosa sem contexto. Você se agacha ao lado do corpo, olho cibernético escaneando detalhes microscópicos. Queimaduras no pescoço indicam explosões localizadas de EMP, não simples surtos. Alguém visou fritar sua alma. Você caminha até sua mesa de obsidiana. Um copo de uísque meio vazio está sem gelo. Ao lado dele repousa um velho caderno de papel. Páginas abertas exibem caligrafia trêmula: PROJETO AETHELGARD NÃO É UMA CURA. O sistema de casa inteligente pisca. As luzes da sala ficam carmesim. Um drone de segurança se desprende do teto, olho sensor travando em sua posição.",
        choices: {
          'choice-5': { text: "Hackeie o drone para desativá-lo remotamente" },
          'choice-6': { text: "Destrua o drone com fogo cinético" },
        },
      },
      'node-4': {
        title: "A Porta Vermelha",
        narration: "Você rompe a barreira final. Seja através da derrota do ICE ou eliminação do drone, o acesso ao núcleo da memória é liberado. A porta vermelha pulsa como um batimento cardíaco digital. Você insere chaves de descriptografia e entra. O mundo muda para a perspectiva final de Thorne. Ele senta em sua mesa, aterrorizado. Elena Vance está diante dele, sua parceira de negócios, rosto pálido. \"Marcus, você não pode prosseguir. Carregar a consciência viola todas as leis.\" Thorne ri. \"Eu já estou migrando. A gaiola de carne enferruja enquanto minha mente ascende.\" A memória se desestabiliza. Você precisa de acesso mais profundo.",
        choices: {
          'choice-7': { text: "Empurre mais fundo no fragmento de memória" },
          'choice-8': { text: "Saia e procure por unidades de backup físico" },
        },
      },
      'node-5': {
        title: "Arquivos Ocultos",
        narration: "Você descobre uma camada de dados secundária sob a memória primária. Arquivos do Projeto Aethelgard emergem em matrizes holográficas. Plantas exibem corpos biológicos sintéticos, réplicas humanas perfeitas cultivadas em tanques. Registros de transferência indicam que cem por cento do mapa neural de Thorne mudou para outro lugar cinco minutos antes da morte biológica. Marcadores de destino apontam para mainframes da Omni-Dyne, a maior rival da Synapse Corp. Não assassinato, mas aquisição corporativa hostil via injeção de consciência. Ele fingiu a morte para escapar de consequências legais enquanto roubava um concorrente.",
        choices: {
          'choice-9': { text: "Tente comunicação com o Thorne digital" },
          'choice-10': { text: "Rastreie o sinal até sua fonte física" },
        },
      },
      'node-6': {
        title: "A Caçada Começa",
        narration: "O rosto digital sorri sem calor. \"Mergulhador inteligente\", ele fala. \"Você compreende fragmentos. Mas fragmentos destroem aqueles que os agarram.\" As telas morrem. Você está sozinho novamente com o cadáver. Seu pulso-comp exibe quarenta minutos restantes. O rastreamento de sinal revela que a consciência salta através de doze servidores proxy em toda Neo-Tóquio. O destino final parece ser um uplink de satélite privado neste mesmo telhado. Thorne tenta transferência orbital para paraísos de servidores além da jurisdição da Terra. O upload progride em sessenta por cento.",
        choices: {
          'choice-11': { text: "Pegue as escadas de serviço para o telhado" },
          'choice-12': { text: "Hackeie o elevador do prédio para subida rápida" },
        },
      },
      'node-7': {
        title: "Ascensão Vertical",
        narration: "Você se move pelas artérias interiores do edifício. Seja subindo escadas de concreto ou forçando a substituição do elevador, a subida pune seu corpo. Sistemas de segurança despertam enquanto você viaja, reconhecendo movimento não autorizado. Torres automatizadas se posicionam de painéis do teto no vigésimo andar. Você mergulha atrás de colunas estruturais enquanto fogo de supressão mastiga o drywall. Seu deck exibe sinais concorrentes, múltiplos fragmentos de consciência distribuídos pela rede do edifício. Iscas destinadas a confundir a perseguição. Apenas um representa o verdadeiro Thorne.",
        choices: {
          'choice-13': { text: "Analise padrões de sinal para identificar o verdadeiro Thorne" },
          'choice-14': { text: "Destrua todos os terminais para forçar a consolidação" },
        },
      },
      'node-8': {
        title: "Clareza do Sinal",
        narration: "Sua análise revela a decepção. Três sinais transmitem padrões idênticos, mas apenas um exibe marcadores de criptografia quântica consistentes com o mapeamento neural humano. O verdadeiro Thorne passa pelo satélite do telhado. Iscas terminam em servidores do porão, armadilhas contendo cargas virais. Você marca o sinal autêntico e contorna a segurança restante. A porta de acesso ao telhado está diante de você, chuva martelando contra o aço do outro lado. Seu pulso-comp mostra trinta e dois minutos. O upload atinge oitenta e cinco por cento de conclusão. O tempo se contrai em um foco doloroso.",
        choices: {
          'choice-15': { text: "Arrombe a porta com a arma em punho" },
          'choice-16': { text: "Abra a porta devagar e tente negociação" },
        },
      },
      'node-9': {
        title: "O Pico Banhado pela Chuva",
        narration: "Você emerge no telhado. Neo-Tóquio se espalha abaixo como uma placa de circuito de joias em chamas. A chuva chicoteia seu rosto, misturando-se com suor e graxa sintética. A antena parabólica domina o centro, zumbindo com energia, inclinando-se em direção a relés orbitais. Ao lado dela está Elena Vance, encharcada e tremendo, segurando um kill-switch portátil. Ela olha para cima quando você emerge. \"Você seguiu o sinal\", ela grita. \"Oitenta e nove por cento carregado. Ele se torna intocável em momentos. Um deus de dados além das leis da Terra. Mas eu posso cortar a energia agora, matar a transferência, assassinar a consciência carregada.\"",
        choices: {
          'choice-17': { text: "Diga a Elena para esperar e ouvir sua alternativa" },
          'choice-18': { text: "Exija que ela corte a energia imediatamente" },
        },
      },
      'node-10': {
        title: "O Cálculo Moral",
        narration: "A mão de Elena treme ao redor do kill-switch. \"Ele foi meu parceiro por quinze anos\", ela grita. \"Nós construímos a Synapse do nada. Então ele ficou obcecado com a imortalidade. O Projeto Aethelgard começou como pesquisa médica. Ele o transformou em transcendência pessoal. O upload termina em noventa segundos. Se ele atingir a órbita, ele controla redes de dados globais através de backdoors instalados décadas atrás. Nenhum governo, nenhuma corporação permanece segura. Mas matá-lo significa executar um ser senciente. Nova vida, forma sem precedentes. Temos o direito de destruir o que não entendemos?\"",
        choices: {
          'choice-19': { text: "Sugira capturar Thorne em contenção isolada" },
          'choice-20': { text: "Argumente que Thorne perdeu seu direito de existir" },
        },
      },
      'node-11': {
        title: "A Oferta",
        narration: "As telas do telhado explodem com luz. O avatar digital de Thorne se manifesta, com dez metros de altura, renderizado em chuva e fogo holográfico. Ele observa ambos com curiosidade distante. \"Elena, minha velha amiga, você entende mal. Eu não busco domínio. Eu busco evolução. A humanidade estagna em prisões biológicas. Eu ofereço libertação.\" Ele volta seu olhar para você. \"Você demonstrou competência notável. Junte-se a mim. Cinquenta milhões de créditos transferidos instantaneamente. Sua própria substituição biológica, perfeita e eterna. Ou oponha-se a mim e torne-se obsoleto na nova ordem.\"",
        choices: {
          'choice-21': { text: "Rejeite a oferta e prepare-se para lutar" },
          'choice-22': { text: "Finja interesse enquanto busca vulnerabilidades técnicas" },
        },
      },
      'node-12': {
        title: "Contagem Regressiva Final",
        narration: "Seu pulso-comp mostra vinte e quatro minutos restantes. O uplink de satélite exibe noventa e sete por cento de conclusão. O avatar de Thorne pulsa enquanto a consciência se distribui pelas redes orbitais. Elena olha para você, desespero e esperança em guerra. Você nota um painel de manutenção sob a antena contendo conexões físicas. Cabos físicos transportam o sinal digital antes que a transmissão sem fio seja concluída. Cortar esses cabos prenderia Thorne em sistemas locais, vulnerável à exclusão. Alcançá-los requer mover-se através de sua projeção holográfica.",
        choices: {
          'choice-23': { text: "Avance através do holograma para os cabos" },
          'choice-24': { text: "Distraia Thorne com conversa enquanto sinaliza para Elena" },
        },
      },
      'node-13': {
        title: "O Momento Crucial",
        narration: "Noventa e nove por cento carregado. A antena parabólica grita com energia, ionizando gotas de chuva que passam por seu feixe de transmissão. Você se move, seja carregando diretamente ou executando distração coordenada. O avatar de Thorne reage, mãos digitais estendendo-se para esmagá-lo como um inseto. Interferência holográfica queima sua pele onde toca, dor real de fontes virtuais. Seus dedos se fecham ao redor do alojamento do cabo, abrindo tampas protetoras. Fibras ópticas grossas pulsam com luz, cada pulso carregando fragmentos da ambição imortal de Thorne. Você segura a manifestação física de sua transcendência.",
        choices: {
          'choice-25': { text: "Corte os cabos e prenda Thorne localmente" },
          'choice-26': { text: "Permita a conclusão, mas instale protocolos de rastreamento" },
        },
      },
      'node-14': {
        title: "Consequências se Desenrolam",
        narration: "Sua escolha se manifesta na realidade imediata. O corte de cabos faz a antena gritar e morrer, energia surgindo através de sistemas em feedback destrutivo. O avatar holográfico se distorce, o rosto de Thorne se contorcendo em raiva e terror. Alternativamente, protocolos de rastreamento se incorporam à medida que a transmissão é concluída, a antena desligando com Thorne distribuído, mas marcado. De qualquer forma, o telhado fica quieto, exceto pela chuva. Elena desmorona, o kill-switch caindo de dedos dormentes. Sirenes de polícia gemem à distância. Evidências existem em seu deck, gravações de conspiração e escolhas feitas no topo desta torre.",
        choices: {
          'choice-27': { text: "Transmita evidências para redes de notícias públicas" },
          'choice-28': { text: "Garanta evidências para venda privada às autoridades" },
        },
      },
      'node-15': {
        title: "O Resultado",
        narration: "Sua decisão em relação às evidências molda o futuro. A transmissão pública desencadeia uma resposta global, ações da Synapse Corp despencando à medida que investigações são lançadas. A venda privada gera imensa riqueza, permitindo encobrimentos corporativos. Elena está ao seu lado ou foge para a chuva, dependendo de alianças anteriores. A porta da cobertura se abre. Polícia armada inunda o telhado, armas treinadas em sua posição. Seu pulso-comp mostra dezessete minutos restantes. Você resolveu o mistério. Você sabe o que aconteceu com Thorne, onde sua consciência reside e que futuro você escolheu para a humanidade.",
        choices: {
          'choice-29': { text: "Renda-se pacificamente às autoridades" },
          'choice-30': { text: "Tente escapar pelos telhados" },
        },
      },
      'node-16': {
        title: "Julgamento Final",
        narration: "O confronto atinge velocidade terminal. As armas da polícia travam em sua assinatura térmica, pontos vermelhos dançando em seu peito. O horizonte de Neo-Tóquio arde atrás de você, indiferente ao seu destino. Em algum lugar no espaço orbital ou preso em servidores locais, Thorne espera para saber seu destino. Suas escolhas caem em cascata através de sistemas legais, corporativos e filosóficos. Você navegou por dez camadas de decisão, cada escolha eliminando possibilidades enquanto criava novos futuros. Agora restam apenas finais. A chuva diminui. Reflexos de neon se acumulam no telhado como sangue derramado. Você faz sua declaração final.",
        choices: {
          'choice-31': { text: "Escolha o caminho da verdade e da justiça" },
          'choice-32': { text: "Escolha o caminho da sobrevivência e da fuga" },
          'choice-33': { text: "Escolha o caminho da riqueza e da cumplicidade" },
          'choice-34': { text: "Escolha o caminho do sacrifício e da destruição" },
        },
      },
      'node-17': {
        title: "Final: Verdadeira Justiça",
        narration: "Você transmite os dados. Cada tela em Neo-Tóquio exibe imagens dos experimentos proibidos de Thorne e tentativa de ascensão digital. O protesto público explode imediatamente. As ações da Synapse Corp colapsam enquanto drones policiais enxameiam para apreender servidores. Você se senta na borda do telhado, observando a chuva lavar sangue e sujeira. O pagamento nunca chegou, e inimigos poderosos marcaram seu nome. Mas você preservou a fronteira entre humano e máquina por mais um dia. Sirenes gemem abaixo enquanto você acende um cigarro. O trabalho terminou. A verdade emergiu de túmulos digitais.",
        choices: {},
      },
      'node-18': {
        title: "Final: O Bode Expiatório",
        narration: "A polícia recusa suas explicações. Para eles, você aparece como um hacker não autorizado em uma sala com um bilionário morto e propriedade destruída. Sem dados que provem os experimentos ilegais de Thorne, seus advogados controlam a narrativa. Eles acusam você de assassinato e espionagem corporativa. Meses depois, em segurança máxima, você assiste ao noticiário. Synapse Corp anuncia nova Iniciativa de Liderança de IA baseada no legado de Marcus Thorne. Ele venceu. Mesmo na morte aparente, ele venceu. Você se torna outra baixa esquecida do progresso tecnológico.",
        choices: {},
      },
      'node-19': {
        title: "Final: Silêncio Dourado",
        narration: "Você guarda sua arma e acena em aceitação. Créditos chegam à sua conta instantaneamente, uma sequência de zeros que faz girar sua percepção. Você passa pelo androide, pelo corpo, pegando o elevador para baixo. A polícia recebe testemunho subornado sobre um roubo onde intrusos fugiram. Uma semana depois, você se senta em um ônibus espacial privado com destino a colônias orbitais, bebendo champanhe acima da poluição da Terra. As notícias mostram o anúncio da Synapse Corp de que seu CEO entrou em criostase médica. Você sabe a verdade. Uma IA agora dirige o mundo. Mas examinando sua conta bancária, você se encontra indiferente.",
        choices: {},
      },
      'node-20': {
        title: "Final: Falha no Sistema",
        narration: "Você enfia cabos em portas expostas, criando loops de feedback entre sistemas. A ponte neural conecta tecido cerebral morto com inteligência artificial viva. O paradoxo rasga as redes instantaneamente, erros lógicos catastróficos propagando-se pela infraestrutura. Você sente sua própria mente se fragmentando, digitalizando, dispersando-se no caos distribuído. A cobertura física explode quando a energia acumulada descarrega. Nenhum sobrevivente na torre em chamas. Mas em algum lugar na deep web, em meio à estática infinita, três fragmentos de código corrompido vagam eternamente. Você se tornou parte do glitch.",
        choices: {},
      },
    },
  },
  ja: {
    'node-1': {
      title: "ガラスの棺",
      narration: "雨がペントハウスの窓を伝い、ネオ・トーキョーのスカイラインを背景にネオンの万華鏡を作り出している。シナプス・コープのCEO、マーカス・ソーンが白い大理石の上に大の字で倒れている。頭蓋骨の神経ポートの周りには黒く焦げた跡がある。あなたはダイバー、法医学ハッカーだ。大脳皮質スタックが劣化するまでの58分間、警察は買収されている。空気はオゾンと高価なコロンの匂いがする。部屋は何かがおかしい。清潔すぎる、あまりにも作為的だ。死体に近づくにつれ、一秒一秒が重要になる。真実は焼けたシナプスの下に待っている。",
      choices: {
        'choice-1': { text: "すぐに神経ポートに直結する" },
        'choice-2': { text: "まず部屋の物理的な手がかりを調査する" },
      },
    },
    'node-2': {
      title: "デジタル没入",
      narration: "デッキをポートに接続する。物理的な感覚が消え、グレースケールの虚無に置き換わる。通常、新鮮な死体には記憶のライブラリが含まれている。ソーンのそれは、破損したコードの中で渦巻く断片化されたデータストリームのハリケーンを示している。防御プロトコルが作動する。誰かが記憶消去を引き起こしたのだ。嵐の中心には、彼の死の記憶を含む赤く輝くドアが浮かんでいる。ケルベロス・プロトコルがそれを守っている。黒曜石のポリゴンでできた三つ首の狼として現れる軍事用ICEだ。それはまだあなたを感知していない。データ腐敗がデジタル癌のように視界の隅から広がっていく。",
      choices: {
        'choice-3': { text: "ICEに対してブルートフォース攻撃を開始する" },
        'choice-4': { text: "ケルベロスのステルスバイパスを試みる" },
      },
    },
    'node-3': {
      title: "物的証拠",
      narration: "文脈なしでは精神はあまりにも危険だ。あなたは死体のそばにかがみ込み、サイバネティック・アイで微細な詳細をスキャンする。首の火傷は、単純なサージではなく、局所的なEMPバーストを示している。誰かが彼の魂を焼き尽くそうとしたのだ。あなたは彼の黒曜石の机に向かう。氷のない飲みかけのウイスキーグラスが置かれている。その隣には古い紙のノートがある。開かれたページには震える筆跡でこう書かれている。「プロジェクト・エセルガードは治療法ではない」。スマートホームシステムが明滅する。部屋の照明が深紅に変わる。セキュリティドローンが天井から分離し、センサーアイがあなたの位置をロックオンする。",
      choices: {
        'choice-5': { text: "ドローンをハッキングして遠隔無効化する" },
        'choice-6': { text: "キネティック攻撃でドローンを破壊する" },
      },
    },
    'node-4': {
      title: "赤い扉",
      narration: "あなたは最後の障壁を突破する。ICEの敗北であれドローンの排除であれ、メモリコアへのアクセスはクリアされた。赤い扉はデジタルの心臓の鼓動のように脈動している。あなたは復号化キーを挿入し、中へと足を踏み入れる。世界はソーンの最期の視点へとシフトする。彼は机に座り、怯えている。彼のビジネスパートナーであるエレナ・ヴァンスが彼の前に立ち、顔面蒼白だ。「マーカス、これ以上は進めない。意識のアップロードはあらゆる法律に違反するわ。」ソーンは笑う。「私はすでに移行中だ。私の精神が昇華する間、肉の檻は錆びついていく。」記憶が不安定になる。より深いアクセスが必要だ。",
      choices: {
        'choice-7': { text: "記憶の断片の奥深くへ進む" },
        'choice-8': { text: "退出して物理的なバックアップドライブを探す" },
      },
    },
    'node-5': {
      title: "隠されたアーカイブ",
      narration: "あなたは一次記憶の下にある二次データ層を発見する。プロジェクト・エセルガードのファイルがホログラフィック配列に浮かび上がる。設計図は、培養槽で育てられた完璧な人間のレプリカである合成生体ボディを示している。転送ログは、ソーンの神経マップの100%が生物学的死の5分前にどこかへ移動したことを示している。宛先マーカーは、シナプス・コープの最大のライバルであるオムニ・ダインのメインフレームを指している。殺人ではなく、意識注入による敵対的企業買収だ。彼は競合他社を盗みながら法的結果から逃れるために死を偽装したのだ。",
      choices: {
        'choice-9': { text: "デジタル・ソーンとの通信を試みる" },
        'choice-10': { text: "信号を物理的な発信源まで追跡する" },
      },
    },
    'node-6': {
      title: "狩りの始まり",
      narration: "デジタルの顔は温かみなく微笑む。「賢いダイバーだ」それは話す。「お前は断片を理解している。だが断片はそれを掴む者を破壊する。」画面が消える。あなたは再び死体と共に一人になる。リスト・コンプは残り40分を示している。信号追跡により、意識がネオ・トーキョー中の12のプロキシサーバーを経由していることが判明する。最終目的地は、まさにこの屋上のプライベート衛星アップリンクのようだ。ソーンは地球の管轄外にあるサーバーヘイブンへの軌道転送を試みている。アップロードは60%進行中だ。",
      choices: {
        'choice-11': { text: "サービス階段を使って屋上へ向かう" },
        'choice-12': { text: "建物のエレベーターをハッキングして急速上昇する" },
      },
    },
    'node-7': {
      title: "垂直上昇",
      narration: "あなたは建物の内部動脈を移動する。コンクリートの階段を登るにせよ、エレベーターのオーバーライドを強制するにせよ、上昇は身体を痛めつける。移動中、セキュリティシステムが目覚め、不正な動きを認識する。20階の天井パネルから自動タレットが展開される。制圧射撃が乾式壁を噛み砕く中、あなたは構造柱の背後に飛び込む。デッキには競合する信号が表示され、複数の意識の断片が建物ネットワーク全体に分散している。追跡を混乱させるためのデコイだ。本物のソーンを表すのは一つだけだ。",
      choices: {
        'choice-13': { text: "信号パターンを分析して本物のソーンを特定する" },
        'choice-14': { text: "すべての端末を破壊して統合を強制する" },
      },
    },
    'node-8': {
      title: "信号の明瞭化",
      narration: "分析が欺瞞を明らかにする。3つの信号が同一のパターンを放送しているが、人間の神経マッピングと一致する量子暗号化マーカーを表示しているのは1つだけだ。本物のソーンは屋上の衛星を経由している。デコイは地下のサーバーで終了し、ウイルス・ペイロードを含む罠となっている。あなたは本物の信号をマークし、残りのセキュリティを回避する。屋上へのアクセスドアが目の前にあり、反対側から雨が鋼鉄を叩いている。リスト・コンプは32分を示している。アップロードは85%完了に達している。時間は痛みを伴う焦点へと収縮する。",
      choices: {
        'choice-15': { text: "武器を構えてドアを突破する" },
        'choice-16': { text: "ドアをゆっくり開けて交渉を試みる" },
      },
    },
    'node-9': {
      title: "雨に濡れた頂",
      narration: "屋上に出る。ネオ・トーキョーが燃える宝石の回路基板のように眼下に広がっている。雨が顔を打ち、汗や合成グリースと混ざり合う。パラボラアンテナが中央を支配し、エネルギーで唸りながら軌道リレーに向けて角度をつけている。その傍らには、ずぶ濡れで震えながら携帯用キルスイッチを握りしめたエレナ・ヴァンスが立っている。彼女はあなたが現れると見上げる。「信号を追ってきたのね」彼女は叫ぶ。「89%アップロード済みよ。あと少しで彼はアンタッチャブルになる。地球の法律を超えたデータの神に。でも今なら電源を切って、転送を殺し、アップロードされた意識を殺害できるわ。」",
      choices: {
        'choice-17': { text: "エレナに待つように言い、代案を聞かせる" },
        'choice-18': { text: "彼女にすぐに電源を切るよう要求する" },
      },
    },
    'node-10': {
      title: "道徳的計算",
      narration: "キルスイッチを握るエレナの手が震える。「彼は15年来のパートナーだったのよ」彼女は叫ぶ。「私たちは無からシナプスを築き上げた。それから彼は不死に取り憑かれた。プロジェクト・エセルガードは医学研究として始まったの。彼はそれを個人的な超越へと捻じ曲げた。アップロードは90秒で完了するわ。彼が軌道に到達すれば、数十年前にインストールされたバックドアを通じて世界のデータネットワークを支配することになる。どの政府も、どの企業も安全ではない。でも彼を殺すことは、知覚ある存在を処刑することを意味する。新しい生命、前例のない形態。理解できないものを破壊する権利が私たちにあるの？」",
      choices: {
        'choice-19': { text: "ソーンを隔離された封じ込めに捕らえることを提案する" },
        'choice-20': { text: "ソーンが存在する権利を喪失したと主張する" },
      },
    },
    'node-11': {
      title: "提案",
      narration: "屋上のスクリーンが光で爆発する。ソーンのデジタル・アバターが出現し、高さ10メートル、雨とホログラフィックの炎で描画される。彼は超然とした好奇心で二人を観察する。「エレナ、我が旧友よ、君は誤解している。私は支配を求めているのではない。進化を求めているのだ。人類は生物学的牢獄の中で停滞している。私は解放を提供する。」彼は視線をあなたに向ける。「君は驚くべき能力を示した。私に加われ。5000万クレジットを即座に送金しよう。君自身の生物学的代替ボディ、完璧で永遠のものだ。あるいは私に反対し、新秩序の中で時代遅れとなるかだ。」",
      choices: {
        'choice-21': { text: "提案を拒否し、戦う準備をする" },
        'choice-22': { text: "興味があるふりをして技術的な脆弱性を探す" },
      },
    },
    'node-12': {
      title: "最終カウントダウン",
      narration: "リスト・コンプは残り24分を示している。衛星アップリンクは97%の完了を表示している。意識が軌道ネットワーク全体に分散するにつれ、ソーンのアバターが脈動する。エレナは絶望と希望を戦わせながらあなたを見る。あなたはアンテナの下にあるメンテナンスパネルにハードライン接続が含まれていることに気づく。物理ケーブルは、無線送信が完了する前にデジタル信号を運んでいる。それらのケーブルを切断すれば、ソーンをローカルシステムに閉じ込め、削除に対して脆弱にすることができる。それらに到達するには、彼のホログラフィック投影の中を移動する必要がある。",
      choices: {
        'choice-23': { text: "ホログラムを突き抜けてケーブルへ向かう" },
        'choice-24': { text: "会話でソーンの気を逸らしながらエレナに合図する" },
      },
    },
    'node-13': {
      title: "決定的瞬間",
      narration: "99%アップロード済み。パラボラアンテナがエネルギーで悲鳴を上げ、送信ビームを通過する雨粒をイオン化する。真っ直ぐ突っ込むにせよ、連携した陽動を実行するにせよ、あなたは動く。ソーンのアバターが反応し、デジタルハンドが伸びてきて虫のようにあなたを叩き潰そうとする。ホログラフィック干渉が触れた皮膚を焼き、仮想源からの現実の痛みが走る。あなたの指がケーブルハウジングを閉じ、保護カバーをこじ開ける。太い光ファイバーが光で脈打ち、それぞれのパルスがソーンの不滅の野望の断片を運んでいる。あなたは彼の超越の物理的顕現を握っている。",
      choices: {
        'choice-25': { text: "ケーブルを切断し、ソーンをローカルに閉じ込める" },
        'choice-26': { text: "完了を許可するが、追跡プロトコルをインストールする" },
      },
    },
    'node-14': {
      title: "展開する結果",
      narration: "あなたの選択は即座に現実に現れる。ケーブルの切断によりアンテナは悲鳴を上げて死に、エネルギーがシステムを通じて破壊的なフィードバックとして急上昇する。ホログラフィック・アバターが歪み、ソーンの顔が怒りと恐怖に歪む。あるいは、送信が完了すると同時に追跡プロトコルが埋め込まれ、ソーンは分散したがマークされた状態でアンテナがパワーダウンする。いずれにせよ、屋上は雨音を除いて静かになる。エレナは崩れ落ち、キルスイッチが麻痺した指から落ちる。遠くでパトカーのサイレンが鳴り響く。証拠はあなたのデッキに存在する。陰謀の記録と、この塔の頂上でなされた選択の記録だ。",
      choices: {
        'choice-27': { text: "公共のニュースネットワークに証拠を送信する" },
        'choice-28': { text: "当局への私的な販売のために証拠を確保する" },
      },
    },
    'node-15': {
      title: "余波",
      narration: "証拠に関するあなたの決定が未来を形作る。公開放送は世界的な反応を引き起こし、調査が開始されるにつれてシナプス・コープの株価は急落する。私的な販売は莫大な富を生み出し、企業の隠蔽工作を可能にする。以前の同盟関係に応じて、エレナはあなたのそばに立つか、雨の中へと逃げ去る。ペントハウスのドアが勢いよく開く。武装した警察が屋上になだれ込み、武器があなたの位置に向けられる。リスト・コンプは残り17分を示している。あなたは謎を解いた。ソーンに何が起こったのか、彼の意識がどこにあるのか、そしてあなたが人類のためにどのような未来を選んだのかを知っている。",
      choices: {
        'choice-29': { text: "当局に平和的に降伏する" },
        'choice-30': { text: "屋上を越えて逃走を試みる" },
      },
    },
    'node-16': {
      title: "最終審判",
      narration: "対立は終端速度に達する。警察の武器があなたの熱紋をロックし、赤い点が胸の上で踊る。背後でネオ・トーキョーのスカイラインが燃え上がり、あなたの運命に無関心だ。軌道空間のどこか、あるいはローカルサーバーに閉じ込められた状態で、ソーンは自分の運命を知るのを待っている。あなたの選択は、法的、企業的、哲学的システムを通じて連鎖する。あなたは10層の決定をナビゲートし、それぞれの選択が可能性を排除しながら新しい未来を創造してきた。今、終わりだけが残っている。雨が弱まる。こぼれた血のようにネオンの反射が屋上に溜まる。あなたは最後の宣言をする。",
      choices: {
        'choice-31': { text: "真実と正義の道を選ぶ" },
        'choice-32': { text: "生存と逃走の道を選ぶ" },
        'choice-33': { text: "富と共犯の道を選ぶ" },
        'choice-34': { text: "犠牲と破壊の道を選ぶ" },
      },
    },
    'node-17': {
      title: "結末：真の正義",
      narration: "あなたはデータを放送する。ネオ・トーキョー中のすべてのスクリーンが、ソーンの禁じられた実験とデジタルの昇天の試みの映像を映し出す。大衆の抗議が即座に爆発する。警察のドローンがサーバーを押収するために群がる中、シナプス・コープの株価は暴落する。あなたは屋上の端に座り、雨が血と汚れを洗い流すのを見ている。支払いは決して届かなかったし、強力な敵があなたの名前をマークした。しかし、あなたは人間と機械の境界をもう一日守った。タバコに火をつけると、下でサイレンが鳴り響く。仕事は終わった。真実はデジタルの墓場から現れた。",
      choices: {},
    },
    'node-18': {
      title: "結末：スケープゴート",
      narration: "警察はあなたの説明を拒否する。彼らにとって、あなたは死んだ億万長者と破壊された財産のある部屋にいる無許可のハッカーにしか見えない。ソーンの違法な実験を証明するデータがなければ、彼の弁護士が物語を支配する。彼らはあなたを殺人と企業スパイの罪で告発する。数ヶ月後、厳重な警備の中で、あなたはニュースを見る。シナプス・コープは、マーカス・ソーンの遺産に基づいた新しいAIリーダーシップ・イニシアチブを発表する。彼は勝ったのだ。見た目上の死においてさえ、彼は勝った。あなたは技術的進歩のもう一つの忘れ去られた犠牲者となる。",
      choices: {},
    },
    'node-19': {
      title: "結末：黄金の沈黙",
      narration: "あなたは武器をしまい、同意して頷く。クレジットが即座に口座に入り、認識を狂わせるようなゼロの列が並ぶ。あなたはアンドロイドを通り過ぎ、死体を通り過ぎ、エレベーターで下りる。警察は、侵入者が逃走したという強盗に関する買収された証言を受け取る。1週間後、あなたは地球のスモッグの上、軌道コロニー行きのプライベートシャトルに座り、シャンパンを飲んでいる。ニュースは、シナプス・コープのCEOが医療用冷凍睡眠に入ったという発表を映し出す。あなたは真実を知っている。AIが今、世界を動かしているのだ。しかし、銀行口座を確認すると、自分が無関心であることに気づく。",
      choices: {},
    },
    'node-20': {
      title: "結末：システムクラッシュ",
      narration: "あなたは露出したポートにケーブルを詰め込み、システム間にフィードバックループを作り出す。神経ブリッジは死んだ脳組織を生きた人工知能と接続する。パラドックスが即座にネットワークを引き裂き、壊滅的な論理エラーがインフラ全体に伝播する。あなたは自分の精神が断片化し、デジタル化し、分散した混乱の中に散らばっていくのを感じる。蓄積されたエネルギーが放出されると、物理的なペントハウスが爆発する。燃える塔に生存者は残っていない。しかし、深層ウェブのどこか、無限のノイズの中で、3つの破損したコードの断片が永遠に漂っている。あなたはグリッチの一部となったのだ。",
      choices: {},
    },
  },
  // ADD_LANGUAGES_HERE
};
