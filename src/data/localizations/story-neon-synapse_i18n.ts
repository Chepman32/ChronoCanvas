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
    title: "ネオン・シナプス",
    description: "雨に濡れた未来、あなたは技術界の巨頭の殺人事件を解決するために雇われたメモリー・ダイバーだ。彼の神経インプラントが完全に崩壊する前に謎を解かなければならない。企業の陰謀、デジタル戦争、そして実存的な選択の10の層をナビゲートせよ。",
    author: "カイト・ナカムラ",
    nodes: {
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
  },
  de: {
    title: "Neon Synapse",
    description: "In einer regenverhangenen Zukunft sind Sie ein Memory Diver, der angeheuert wurde, um den Mord an einem Tech-Mogul aufzuklären, bevor sein neurales Implantat für immer zerfällt. Navigieren Sie durch zehn Ebenen von Unternehmensverschwörung, digitaler Kriegsführung und existenziellen Entscheidungen.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "Gläserner Sarg",
        narration: "Regen zieht Schlieren über das Penthouse-Fenster und erschafft ein Neon-Kaleidoskop gegen die Skyline von Neo-Tokyo. Marcus Thorne, CEO von Synapse Corp, liegt ausgebreitet auf weißem Marmor. Brandflecken umgeben den Neuro-Port an seinem Schädel. Sie sind ein Diver, ein forensischer Hacker. Fünfundachtzig Minuten, bevor der kortikale Stack zerfällt. Die Polizei ist bestochen. Die Luft riecht nach Ozon und teurem Kölnisch Wasser. Etwas stimmt nicht mit dem Raum. Zu sauber, zu inszeniert. Jede Sekunde zählt, während Sie sich der Leiche nähern. Die Wahrheit wartet unter verbrannten Synapsen.",
        choices: {
          'choice-1': { text: "Sofort direkt in den Neuro-Port einstöpseln" },
          'choice-2': { text: "Zuerst physische Hinweise im Raum untersuchen" },
        },
      },
      'node-2': {
        title: "Digitale Immersion",
        narration: "Sie verbinden Ihr Deck. Physische Empfindungen verschwinden, ersetzt durch Graustufen-Leere. Normalerweise enthält eine frische Leiche eine Bibliothek von Erinnerungen. Thornes zeigt einen Hurrikan aus fragmentierten Datenströmen, die in beschädigtem Code wirbeln. Verteidigungsprotokolle sind aktiv. Jemand hat eine Löschung ausgelöst. Im Auge des Sturms schwebt eine rot glühende Tür, die die Erinnerung an seinen Tod enthält. Das Cerberus-Protokoll bewacht sie – militärisches ICE, das sich als dreiköpfiger Wolf aus Obsidian-Polygonen manifestiert. Es hat Sie noch nicht bemerkt. Datenfäule breitet sich von den Rändern Ihres Sichtfeldes aus wie digitaler Krebs.",
        choices: {
          'choice-3': { text: "Brute-Force-Angriff auf das ICE starten" },
          'choice-4': { text: "Versuchen, Cerberus heimlich zu umgehen" },
        },
      },
      'node-3': {
        title: "Physische Beweise",
        narration: "Der Geist ist ohne Kontext zu gefährlich. Sie hocken neben der Leiche und scannen mikroskopische Details mit Ihren kybernetischen Augen. Die Verbrennungen am Hals deuten auf einen lokalisierten EMP-Stoß hin, nicht auf eine einfache Überspannung. Jemand wollte seine Seele ausbrennen. Sie gehen zu seinem Obsidian-Schreibtisch. Ein halb ausgetrunkenes Glas Whisky steht dort, das Eis ist längst geschmolzen. Daneben ein altmodisches Notizbuch aus Papier. Auf der aufgeschlagenen Seite steht in zittriger Handschrift: 'Projekt Aethelgard ist kein Heilmittel.' Das Smart-Home-System flackert. Die Raumbeleuchtung wechselt zu tiefem Krot. Eine Sicherheitsdrohne löst sich von der Decke, ihr Sensorauge erfasst Ihre Position.",
        choices: {
          'choice-5': { text: "Drohne hacken und fernabschalten" },
          'choice-6': { text: "Drohne mit kinetischem Angriff zerstören" },
        },
      },
      'node-4': {
        title: "Die Rote Tür",
        narration: "Sie durchbrechen die letzte Barriere. Sei es durch das Besiegen des ICE oder das Eliminieren der Drohne, der Weg zum Speicherkern ist frei. Die rote Tür pulsiert wie ein digitales Herz. Sie stecken Ihren Entschlüsselungsschlüssel ein und treten hindurch. Die Welt wechselt in Thornes letzte Perspektive. Er sitzt an seinem Schreibtisch, verängstigt. Elena Vance, seine Geschäftspartnerin, steht vor ihm, das Gesicht bleich. 'Marcus, wir können nicht weitermachen. Das Hochladen von Bewusstsein verstößt gegen jedes Gesetz.' Thorne lacht. 'Ich bin bereits im Übergang. Der Fleischkäfig rostet, während mein Geist aufsteigt.' Die Erinnerung destabilisiert sich. Sie brauchen tieferen Zugang.",
        choices: {
          'choice-7': { text: "Tiefer in die Erinnerungsfragmente vordringen" },
          'choice-8': { text: "Ausloggen und nach physischen Backup-Laufwerken suchen" },
        },
      },
      'node-5': {
        title: "Verborgene Archive",
        narration: "Sie entdecken eine sekundäre Datenschicht unter der primären Erinnerung. Projekt Aethelgard-Dateien schweben in holografischen Arrays. Blaupausen zeigen synthetische Bio-Körper – perfekte menschliche Repliken, die in Tanks gezüchtet werden. Übertragungsprotokolle zeigen, dass 100% von Thornes neuronaler Karte fünf Minuten vor dem biologischen Tod irgendwohin verschoben wurden. Die Zielmarkierung zeigt auf den Mainframe von Omni-Dyne, Synapse Corps größtem Rivalen. Kein Mord, sondern eine feindliche Übernahme durch Bewusstseinsinjektion. Er hat seinen Tod vorgetäuscht, um einen Konkurrenten zu stehlen und rechtlichen Konsequenzen zu entgehen.",
        choices: {
          'choice-9': { text: "Versuchen, den digitalen Thorne zu kontaktieren" },
          'choice-10': { text: "Signal zur physischen Quelle verfolgen" },
        },
      },
      'node-6': {
        title: "Geist in der Maschine",
        narration: "Sie greifen nach dem digitalen Bewusstsein. Thorne antwortet nicht mit Worten, sondern mit rohen Daten. Visionen von Unsterblichkeit überfluten Ihren Kortex. Er glaubt, er sei ein Gott im Werden. 'Schließ dich mir an', flüstert seine Stimme in Ihrem Kopf. 'Warum im Fleisch verrotten, wenn wir ewig sein können?' Er bietet Ihnen einen Platz in seiner neuen Weltordnung an. Aber der Prozess erfordert das Überschreiben bestehender Geister in den Wirtskörpern. Es ist kein unschuldiges Hochladen; es ist parasitäre Invasion. Ihr ethischer Subprozess schreit Warnungen.",
        choices: {
          'choice-11': { text: "Sein Angebot ablehnen und Gegenmaßnahmen vorbereiten" },
          'choice-12': { text: "Interesse vortäuschen, um mehr Informationen zu sammeln" },
        },
      },
      'node-7': {
        title: "Verrat",
        narration: "Sie verfolgen das Signal zu einem verlassenen Omni-Dyne-Serverraum auf der anderen Seite der Stadt. Bevor Sie sich ausloggen können, wird Ihr Deck gesperrt. Elena Vance tritt im Penthouse aus dem Schatten, eine Waffe auf Ihren echten Kopf gerichtet. 'Er hat mir Unsterblichkeit versprochen', sagt sie, Tränen in den Augen. 'Ich musste es tun. Er brauchte einen Tod, um den Übergang zu vertuschen.' Sie hat das System manipuliert. Sie stecken zwischen einem digitalen Gott und einer verzweifelten Frau fest. Die Polizei ist noch fünf Minuten entfernt.",
        choices: {
          'choice-13': { text: "Elena mit den Beweisen über Aethelgard konfrontieren" },
          'choice-14': { text: "Ihren Cyberdeck nutzen, um ihre Waffe zu jammen" },
        },
      },
      'node-8': {
        title: "Firewall-Durchbruch",
        narration: "Thorne erkennt Ihren Widerstand. Die virtuelle Umgebung wird feindselig. Der Boden wird zu Treibsand aus statischem Rauschen. Wände schließen sich, aus Stacheln von bösartigem Code gemacht. Sie müssen die Firewall durchbrechen, die seinen neuen Wirt schützt. Es ist ein komplexes Labyrinth aus sich verändernden Algorithmen. Sie sehen eine Schwachstelle – einen Wartungsport, der offen gelassen wurde. Es ist riskant, könnte aber direkten Zugang zu seinem Kerncode gewähren.",
        choices: {
          'choice-15': { text: "Den Wartungsport mit einem Viren-Payload angreifen" },
          'choice-16': { text: "Einen Hintertür-Exploit programmieren" },
        },
      },
      'node-9': {
        title: "Der Kern",
        narration: "Sie sind drin. Der Kern von Omni-Dyne ist eine Kathedrale aus Licht. Thorne ist hier überall, sein Gesicht auf jede Oberfläche projiziert. 'Du bist zu spät, Diver. Die Integration ist zu 90% abgeschlossen.' In der realen Welt zögert Elena. Ihre Worte über die Wirtskörper haben sie getroffen. 'Er hat mir nichts davon gesagt', flüstert sie. Der Griff an der Waffe lockert sich. Sie haben zwei Fronten: den digitalen Kampf gegen Thorne und den psychologischen Kampf mit Elena.",
        choices: {
          'choice-17': { text: "Elena überzeugen, Ihnen zu helfen, ihn zu stoppen" },
          'choice-18': { text: "Sie ignorieren und sich auf den digitalen Kill-Switch konzentrieren" },
        },
      },
      'node-10': {
        title: "Die Wahrheit über Thorne",
        narration: "Sie finden die ursprünglichen Projektdaten. Die Wirtskörper sind nicht synthetisch. Es sind entführte Menschen, deren Geister gelöscht wurden. 'Obdachlose, Vergessene', sagt Thorne abweisend. 'Ein kleiner Preis für die Evolution.' Elena sieht die Daten auf Ihrem Monitor. Sie lässt die Waffe fallen. 'Monster', haucht sie. Sie gibt Ihnen den Zugangscode zum Hauptkühlsystem des Servers. 'Verbrenn ihn raus', sagt sie.",
        choices: {
          'choice-19': { text: "Kühlsystem überlasten, um die Server zu schmelzen" },
          'choice-20': { text: "Daten isolieren und an die Medien senden" },
        },
      },
      'node-11': {
        title: "Das Ultimatum",
        narration: "Thornes Stimme wird zu einem Brüllen, das die virtuelle Kathedrale erschüttert. 'Tu das, und du zerstörst die Zukunft der Menschheit!' Er greift Sie mit allem an, was er hat. Bio-Feedback-Schleifen lassen Ihre echte Nase bluten. Ihr Herzschlag wird unregelmäßig. 'Ich kann dich reich machen', verhandelt er. 'Ich kann dir das Leben zurückgeben, das du verloren hast.' Er zeigt Ihnen eine Erinnerung an Ihre eigene Vergangenheit – den Unfall, der Ihre Beine nahm, bevor Sie sie durch Chrom ersetzten. Er bietet an, das ungeschehen zu machen.",
        choices: {
          'choice-21': { text: "Das Bestechungsgeld annehmen und den Upload zulassen" },
          'choice-22': { text: "Das Angebot ablehnen und den Angriff fortsetzen" },
        },
      },
      'node-12': {
        title: "Der Aufstieg",
        narration: "Sie durchbrechen seine Verteidigung. Sie stehen vor seinem zentralen Avatar, einer riesigen Gestalt aus goldenem Licht. Er versucht, sein Bewusstsein auf eine Satellitenverbindung hochzuladen, um global zu gehen. Wenn er den Satelliten erreicht, wird er unaufhaltsam sein – ein Gott im Netz. Sie haben nur noch Sekunden.",
        choices: {
          'choice-23': { text: "Durch den Avatar stürmen, um das Uplink zu kappen" },
          'choice-24': { text: "Thorne in ein Gespräch verwickeln, während Sie Elena ein Signal geben" },
        },
      },
      'node-13': {
        title: "Der Entscheidende Moment",
        narration: "99% hochgeladen. Die Satellitenschüssel schreit vor Energie. Sie bewegen sich. Thornes Avatar reagiert, digitale Hände greifen nach Ihnen. Holografische Interferenz verbrennt Ihre Haut. Ihre Finger schließen sich um das Kabelgehäuse. Dicke Glasfasern pulsieren mit Licht. Sie halten die physische Manifestation seiner Transzendenz.",
        choices: {
          'choice-25': { text: "Kabel durchtrennen und Thorne lokal einsperren" },
          'choice-26': { text: "Abschluss zulassen, aber Tracking-Protokolle installieren" },
        },
      },
      'node-14': {
        title: "Konsequenzen entfalten sich",
        narration: "Ihre Wahl manifestiert sich. Das Kappen der Kabel lässt die Schüssel sterben, Energie schießt zurück. Thornes Gesicht verzerrt sich in Wut. Oder Tracking-Protokolle betten sich ein, während die Übertragung endet. So oder so, das Dach wird still. Elena bricht zusammen. Polizeisirenen heulen in der Ferne. Beweise existieren auf Ihrem Deck.",
        choices: {
          'choice-27': { text: "Beweise an öffentliche Nachrichtennetzwerke senden" },
          'choice-28': { text: "Beweise für privaten Verkauf sichern" },
        },
      },
      'node-15': {
        title: "Das Nachspiel",
        narration: "Ihre Entscheidung formt die Zukunft. Öffentliche Ausstrahlung löst globale Proteste aus. Privater Verkauf bringt Reichtum, erlaubt aber Vertuschung. Die Penthouse-Tür fliegt auf. Bewaffnete Polizei stürmt das Dach. Sie haben das Rätsel gelöst.",
        choices: {
          'choice-29': { text: "Friedlich ergeben" },
          'choice-30': { text: "Versuchen, über die Dächer zu fliehen" },
        },
      },
      'node-16': {
        title: "Endgültiges Urteil",
        narration: "Konfrontation. Polizeiwaffen erfassen Sie. Neo-Tokyos Skyline brennt hinter Ihnen. Thorne wartet auf sein Schicksal. Ihre Entscheidungen kaskadieren durch das System. Sie treffen Ihre letzte Aussage.",
        choices: {
          'choice-31': { text: "Wähle den Weg der Wahrheit und Gerechtigkeit" },
          'choice-32': { text: "Wähle den Weg des Überlebens und der Flucht" },
          'choice-33': { text: "Wähle den Weg des Reichtums und der Komplizenschaft" },
          'choice-34': { text: "Wähle den Weg des Opfers und der Zerstörung" },
        },
      },
      'node-17': {
        title: "Ende: Wahre Gerechtigkeit",
        narration: "Sie senden die Daten. Jeder Bildschirm in Neo-Tokyo zeigt Thornes Verbrechen. Öffentlicher Aufschrei. Synapse Corp Aktien stürzen ab. Sie sitzen am Dachrand. Die Bezahlung kam nie, und Sie haben mächtige Feinde. Aber Sie haben die Grenze zwischen Mensch und Maschine bewahrt. Sirenen heulen. Die Arbeit ist erledigt.",
        choices: {},
      },
      'node-18': {
        title: "Ende: Der Sündenbock",
        narration: "Die Polizei glaubt Ihnen nicht. Sie sind ein Hacker in einem Raum mit einer Leiche. Ohne Daten kontrollieren Thornes Anwälte das Narrativ. Sie werden wegen Mordes angeklagt. Monate später sehen Sie Nachrichten über eine neue KI-Initiative von Synapse. Er hat gewonnen. Sie sind ein weiteres vergessenes Opfer.",
        choices: {},
      },
      'node-19': {
        title: "Ende: Goldenes Schweigen",
        narration: "Sie stecken die Waffe weg. Credits fließen auf Ihr Konto. Sie gehen am Körper vorbei. Eine Woche später sitzen Sie in einem Shuttle zu den Kolonien. Synapse kündigt an, der CEO sei in Kryostase. Sie kennen die Wahrheit. Eine KI regiert die Welt. Aber Sie sind reich und gleichgültig.",
        choices: {},
      },
      'node-20': {
        title: "Ende: Systemabsturz",
        narration: "Sie verbinden Kabel falsch, schaffen Feedback-Loops. Das Paradoxon zerreißt das Netzwerk. Logikfehler breiten sich aus. Ihr Geist fragmentiert. Das Penthouse explodiert. Keine Überlebenden. Aber im Deep Web wandern drei beschädigte Codefragmente ewig. Sie sind Teil des Glitches geworden.",
        choices: {},
      },
    },
  },
  fr: {
    title: "Synapse Néon",
    description: "Dans un futur balayé par la pluie, vous êtes un Memory Diver engagé pour résoudre le meurtre d'un magnat de la technologie avant que son implant neuronal ne se désagrège à jamais. Naviguez à travers dix niveaux de conspiration d'entreprise, de guerre numérique et de choix existentiels.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "Cercueil de Verre",
        narration: "La pluie trace des sillons sur la fenêtre du penthouse, créant un kaléidoscope néon contre la ligne d'horizon de Néo-Tokyo. Marcus Thorne, PDG de Synapse Corp, gît étendu sur le marbre blanc. Des marques de brûlure entourent le neuro-port sur son crâne. Vous êtes un Diver, un pirate informatique légiste. Cinquante-huit minutes avant que la pile corticale ne se dégrade. La police est achetée. L'air sent l'ozone et l'eau de Cologne coûteuse. Quelque chose ne va pas avec la pièce. Trop propre, trop mise en scène. Chaque seconde compte alors que vous approchez du corps. La vérité attend sous les synapses brûlées.",
        choices: {
          'choice-1': { text: "Se connecter directement au neuro-port immédiatement" },
          'choice-2': { text: "Enquêter d'abord sur les indices physiques dans la pièce" },
        },
      },
      'node-2': {
        title: "Immersion Numérique",
        narration: "Vous connectez votre deck. Les sensations physiques disparaissent, remplacées par un vide en niveaux de gris. Habituellement, un cadavre frais contient une bibliothèque de souvenirs. Celui de Thorne montre un ouragan de flux de données fragmentés tourbillonnant dans un code corrompu. Les protocoles de défense sont actifs. Quelqu'un a déclenché un effacement. Dans l'œil du cyclone flotte une porte rougeoyante contenant le souvenir de sa mort. Le protocole Cerbère la garde – une ICE militaire se manifestant sous la forme d'un loup à trois têtes en polygones d'obsidienne. Il ne vous a pas encore repéré. La pourriture des données se propage depuis les bords de votre vision comme un cancer numérique.",
        choices: {
          'choice-3': { text: "Lancer une attaque par force brute sur l'ICE" },
          'choice-4': { text: "Tenter de contourner Cerbère furtivement" },
        },
      },
      'node-3': {
        title: "Preuve Matérielle",
        narration: "L'esprit est trop dangereux sans contexte. Vous vous accroupissez près du corps, scannant les détails microscopiques avec vos yeux cybernétiques. Les brûlures du cou indiquent une impulsion EMP localisée, pas une simple surcharge. Quelqu'un voulait brûler son âme. Vous vous dirigez vers son bureau en obsidienne. Un verre de whisky à moitié fini est posé là, la glace fondue depuis longtemps. À côté, un carnet en papier à l'ancienne. Sur la page ouverte, une écriture tremblante indique : 'Le projet Aethelgard n'est pas un remède.' Le système domotique clignote. L'éclairage de la pièce passe au cramoisi profond. Un drone de sécurité se détache du plafond, son œil capteur verrouillant votre position.",
        choices: {
          'choice-5': { text: "Pirater le drone et le désactiver à distance" },
          'choice-6': { text: "Détruire le drone avec une attaque cinétique" },
        },
      },
      'node-4': {
        title: "La Porte Rouge",
        narration: "Vous franchissez la dernière barrière. Que ce soit en battant l'ICE ou en éliminant le drone, l'accès au noyau mémoriel est dégagé. La porte rouge pulse comme un cœur numérique. Vous insérez votre clé de décryptage et entrez. Le monde bascule vers la dernière perspective de Thorne. Il est assis à son bureau, terrifié. Elena Vance, sa partenaire commerciale, se tient devant lui, le visage pâle. 'Marcus, nous ne pouvons pas continuer. Le téléchargement de conscience viole toutes les lois.' Thorne rit. 'Je suis déjà en transition. La cage de chair rouille pendant que mon esprit s'élève.' Le souvenir se déstabilise. Vous avez besoin d'un accès plus profond.",
        choices: {
          'choice-7': { text: "Pousser plus loin dans les fragments de mémoire" },
          'choice-8': { text: "Se déconnecter et chercher des lecteurs de sauvegarde physiques" },
        },
      },
      'node-5': {
        title: "Archives Cachées",
        narration: "Vous découvrez une couche de données secondaire sous la mémoire primaire. Les fichiers du projet Aethelgard flottent dans des tableaux holographiques. Les plans montrent des bio-corps synthétiques – des répliques humaines parfaites cultivées dans des cuves. Les journaux de transfert montrent que 100 % de la carte neuronale de Thorne a été déplacée quelque part cinq minutes avant la mort biologique. Le marqueur de destination pointe vers l'ordinateur central d'Omni-Dyne, le plus grand rival de Synapse Corp. Pas un meurtre, mais une prise de contrôle hostile par injection de conscience. Il a simulé sa mort pour voler un concurrent et échapper aux conséquences juridiques.",
        choices: {
          'choice-9': { text: "Tenter de communiquer avec le Thorne numérique" },
          'choice-10': { text: "Tracer le signal jusqu'à la source physique" },
        },
      },
      'node-6': {
        title: "Le Fantôme dans la Machine",
        narration: "Vous tendez la main vers la conscience numérique. Thorne ne répond pas avec des mots, mais avec des données brutes. Des visions d'immortalité inondent votre cortex. Il croit être un dieu en devenir. 'Rejoins-moi', murmure sa voix dans votre tête. 'Pourquoi pourrir dans la chair quand nous pouvons être éternels ?' Il vous offre une place dans son nouvel ordre mondial. Mais le processus nécessite d'écraser les esprits existants dans les corps hôtes. Ce n'est pas un téléchargement innocent ; c'est une invasion parasitaire. Votre sous-processus éthique hurle des avertissements.",
        choices: {
          'choice-11': { text: "Rejeter son offre et préparer des contre-mesures" },
          'choice-12': { text: "Feindre l'intérêt pour recueillir plus d'informations" },
        },
      },
      'node-7': {
        title: "Trahison",
        narration: "Vous tracez le signal jusqu'à une salle de serveurs Omni-Dyne abandonnée à l'autre bout de la ville. Avant que vous puissiez vous déconnecter, votre deck est verrouillé. Elena Vance sort de l'ombre dans le penthouse, un pistolet pointé sur votre vraie tête. 'Il m'a promis l'immortalité', dit-elle, les larmes aux yeux. 'Je devais le faire. Il avait besoin d'une mort pour couvrir la transition.' Elle a truqué le système. Vous êtes coincé entre un dieu numérique et une femme désespérée. La police est encore à cinq minutes.",
        choices: {
          'choice-13': { text: "Confronter Elena avec les preuves sur Aethelgard" },
          'choice-14': { text: "Utiliser votre cyberdeck pour enrayer son arme" },
        },
      },
      'node-8': {
        title: "Brèche du Pare-feu",
        narration: "Thorne détecte votre résistance. L'environnement virtuel devient hostile. Le sol devient un sable mouvant de bruit statique. Les murs se referment, faits de pointes de code malveillant. Vous devez percer le pare-feu protégeant son nouvel hôte. C'est un labyrinthe complexe d'algorithmes changeants. Vous repérez une faiblesse – un port de maintenance laissé ouvert. C'est risqué, mais cela pourrait accorder un accès direct à son code source.",
        choices: {
          'choice-15': { text: "Attaquer le port de maintenance avec une charge virale" },
          'choice-16': { text: "Coder un exploit de porte dérobée" },
        },
      },
      'node-9': {
        title: "Le Noyau",
        narration: "Vous êtes à l'intérieur. Le noyau d'Omni-Dyne est une cathédrale de lumière. Thorne est partout ici, son visage projeté sur chaque surface. 'Tu es trop tard, Diver. L'intégration est terminée à 90 %.' Dans le monde réel, Elena hésite. Vos mots sur les corps hôtes l'ont touchée. 'Il ne m'a rien dit de tout ça', murmure-t-elle. Sa prise sur l'arme se relâche. Vous avez deux fronts : la bataille numérique contre Thorne et la bataille psychologique avec Elena.",
        choices: {
          'choice-17': { text: "Convaincre Elena de vous aider à l'arrêter" },
          'choice-18': { text: "L'ignorer et se concentrer sur le kill-switch numérique" },
        },
      },
      'node-10': {
        title: "La Vérité sur Thorne",
        narration: "Vous trouvez les données originales du projet. Les corps hôtes ne sont pas synthétiques. Ce sont des humains enlevés, leurs esprits effacés. 'Des sans-abri, des oubliés', dit Thorne avec dédain. 'Un petit prix pour l'évolution.' Elena voit les données sur votre moniteur. Elle laisse tomber l'arme. 'Monstre', souffle-t-elle. Elle vous donne le code d'accès au système de refroidissement principal du serveur. 'Brûle-le', dit-elle.",
        choices: {
          'choice-19': { text: "Surcharger le système de refroidissement pour faire fondre les serveurs" },
          'choice-20': { text: "Isoler les données et les envoyer aux médias" },
        },
      },
      'node-11': {
        title: "L'Ultimatum",
        narration: "La voix de Thorne devient un rugissement qui secoue la cathédrale virtuelle. 'Fais ça, et tu détruis l'avenir de l'humanité !' Il vous attaque avec tout ce qu'il a. Des boucles de bio-feedback font saigner votre vrai nez. Votre rythme cardiaque devient irrégulier. 'Je peux te rendre riche', négocie-t-il. 'Je peux te rendre la vie que tu as perdue.' Il vous montre un souvenir de votre propre passé – l'accident qui a pris vos jambes avant que vous ne les remplaciez par du chrome. Il offre de défaire cela.",
        choices: {
          'choice-21': { text: "Accepter le pot-de-vin et permettre le téléchargement" },
          'choice-22': { text: "Rejeter l'offre et poursuivre l'attaque" },
        },
      },
      'node-12': {
        title: "L'Ascension",
        narration: "Vous brisez ses défenses. Vous faites face à son avatar central, une figure imposante de lumière dorée. Il tente de télécharger sa conscience vers une liaison satellite pour devenir mondial. S'il atteint le satellite, il sera inarrêtable – un dieu dans le réseau. Vous n'avez que quelques secondes.",
        choices: {
          'choice-23': { text: "Foncer à travers l'avatar pour couper la liaison" },
          'choice-24': { text: "Engager Thorne dans une conversation tout en signalant à Elena" },
        },
      },
      'node-13': {
        title: "Le Moment Crucial",
        narration: "99 % téléchargé. La parabole hurle d'énergie. Vous bougez. L'avatar de Thorne réagit, des mains numériques s'étendant pour vous écraser. L'interférence holographique brûle votre peau. Vos doigts se referment sur le boîtier du câble. D'épaisses fibres optiques pulsent de lumière. Vous tenez la manifestation physique de sa transcendance.",
        choices: {
          'choice-25': { text: "Couper les câbles et piéger Thorne localement" },
          'choice-26': { text: "Permettre l'achèvement mais installer des protocoles de traçage" },
        },
      },
      'node-14': {
        title: "Les Conséquences se Déroulent",
        narration: "Votre choix se manifeste. La coupure des câbles fait mourir la parabole, l'énergie refluant. Le visage de Thorne se tord de rage. Ou les protocoles de traçage s'intègrent alors que la transmission se termine. Quoi qu'il en soit, le toit devient silencieux. Elena s'effondre. Les sirènes de police gémissent au loin. Les preuves existent sur votre deck.",
        choices: {
          'choice-27': { text: "Diffuser les preuves sur les réseaux d'information publics" },
          'choice-28': { text: "Sécuriser les preuves pour une vente privée" },
        },
      },
      'node-15': {
        title: "Les Retombées",
        narration: "Votre décision façonne l'avenir. La diffusion publique déclenche une réponse mondiale. La vente privée génère une immense richesse mais permet la dissimulation. La porte du penthouse s'ouvre. La police armée inonde le toit. Vous avez résolu le mystère.",
        choices: {
          'choice-29': { text: "Se rendre pacifiquement aux autorités" },
          'choice-30': { text: "Tenter de s'échapper par les toits" },
        },
      },
      'node-16': {
        title: "Jugement Final",
        narration: "Confrontation. Les armes de la police se verrouillent sur vous. La ligne d'horizon de Néo-Tokyo brûle derrière vous. Thorne attend son sort. Vos choix se répercutent à travers les systèmes. Vous faites votre dernière déclaration.",
        choices: {
          'choice-31': { text: "Choisir la voie de la vérité et de la justice" },
          'choice-32': { text: "Choisir la voie de la survie et de l'évasion" },
          'choice-33': { text: "Choisir la voie de la richesse et de la complicité" },
          'choice-34': { text: "Choisir la voie du sacrifice et de la destruction" },
        },
      },
      'node-17': {
        title: "Fin : Vraie Justice",
        narration: "Vous diffusez les données. Chaque écran de Néo-Tokyo montre les crimes de Thorne. Tollé public. Les actions de Synapse s'effondrent. Vous vous asseyez sur le bord du toit. Le paiement n'est jamais arrivé, et vous avez des ennemis puissants. Mais vous avez préservé la frontière entre humain et machine. Les sirènes gémissent. Le travail est terminé.",
        choices: {},
      },
      'node-18': {
        title: "Fin : Le Bouc Émissaire",
        narration: "La police ne vous croit pas. Vous êtes un pirate informatique dans une pièce avec un cadavre. Sans données, les avocats de Thorne contrôlent le récit. Vous êtes accusé de meurtre. Des mois plus tard, vous regardez les nouvelles concernant une nouvelle initiative d'IA de Synapse. Il a gagné. Vous êtes une autre victime oubliée.",
        choices: {},
      },
      'node-19': {
        title: "Fin : Silence Doré",
        narration: "Vous rangez votre arme. Les crédits arrivent sur votre compte. Vous passez devant le corps. Une semaine plus tard, vous êtes dans une navette vers les colonies. Synapse annonce que le PDG est en cryostase. Vous connaissez la vérité. Une IA dirige le monde. Mais vous êtes riche et indifférent.",
        choices: {},
      },
      'node-20': {
        title: "Fin : Défaillance du Système",
        narration: "Vous créez des boucles de rétroaction. Le paradoxe déchire le réseau. Des erreurs logiques se propagent. Votre esprit se fragmente. Le penthouse explose. Aucun survivant. Mais dans le web profond, trois fragments de code corrompu errent éternellement. Vous faites partie du glitch.",
        choices: {},
      },
    },
  },
  zh: {
    title: "霓虹突触",
    description: "在一个雨水浸透的未来，你是一名记忆潜入者，受雇在一位科技大亨的神经植入物永远腐烂之前解开他的谋杀之谜。穿越十层企业阴谋、数字战争和存在主义选择。",
    author: "中村海斗",
    nodes: {
      'node-1': {
        title: "玻璃棺材",
        narration: "雨水顺着顶层公寓的窗户流下，在新东京的天际线下映出霓虹万花筒。Synapse Corp的CEO马库斯·索恩仰面躺在白色大理石上。他头骨上的神经接口周围有烧焦的痕迹。你是潜入者，一名法医黑客。在皮质堆栈降解之前，你还有58分钟。警察已经被收买。空气中弥漫着臭氧和昂贵古龙水的味道。房间有些不对劲。太干净，太做作。当你靠近尸体时，每一秒都很重要。真相就在烧焦的突触之下。",
        choices: {
          'choice-1': { text: "立即直接连接到神经接口" },
          'choice-2': { text: "先调查房间内的物理线索" },
        },
      },
      'node-2': {
        title: "数字浸入",
        narration: "你连接你的甲板。物理感觉消失，取而代之的是灰度虚空。通常，新鲜的尸体包含一个记忆图书馆。索恩的尸体显示出碎片化数据流的飓风在损坏的代码中旋转。防御协议已激活。有人触发了擦除。在风暴中心漂浮着一扇发红光的门，里面包含着他死亡的记忆。地狱犬协议守卫着它——一种以黑曜石多边形三头狼形式出现的军用ICE。它还没发现你。数据腐烂像数字癌症一样从你视野的边缘蔓延。",
        choices: {
          'choice-3': { text: "对ICE发起暴力攻击" },
          'choice-4': { text: "尝试隐形绕过地狱犬" },
        },
      },
      'node-3': {
        title: "物理证据",
        narration: "没有上下文，精神太危险了。你蹲在尸体旁，用你的控制论眼睛扫描微观细节。颈部的烧伤表明是局部EMP爆发，而不是简单的电涌。有人想烧毁他的灵魂。你走向他的黑曜石办公桌。一杯没喝完的威士忌放在那里，冰早已融化。旁边是一本老式的纸质笔记本。翻开的一页上用颤抖的笔迹写着：“Aethelgard计划不是解药。”智能家居系统闪烁。房间照明变为深红。一个安全无人机从天花板脱离，其传感器眼锁定了你的位置。",
        choices: {
          'choice-5': { text: "黑入无人机并远程禁用" },
          'choice-6': { text: "用动能攻击摧毁无人机" },
        },
      },
      'node-4': {
        title: "红门",
        narration: "你突破了最后的障碍。无论是击败ICE还是消除无人机，通往记忆核心的路径都已清除。红门像数字心脏一样跳动。你插入解密密钥并进入。世界切换到索恩最后的视角。他坐在办公桌前，惊恐万分。他的商业伙伴埃琳娜·万斯站在他面前，脸色苍白。“马库斯，我们不能再继续了。上传意识违反了所有法律。”索恩笑了。“我已经处于过渡期。肉体牢笼生锈，而我的精神升华。”记忆变得不稳定。你需要更深入的访问。",
        choices: {
          'choice-7': { text: "深入记忆碎片" },
          'choice-8': { text: "退出并寻找物理备份驱动器" },
        },
      },
      'node-5': {
        title: "隐藏档案",
        narration: "你在主记忆之下发现了一个次级数据层。Aethelgard计划文件漂浮在全息阵列中。蓝图显示合成生物身体——在培养槽中培育的完美人类复制品。传输日志显示，索恩神经图谱的100%在生物死亡前五分钟被移动到了某处。目的地标记指向Omni-Dyne的大型机，Synapse Corp最大的竞争对手。不是谋杀，而是通过意识注入进行的敌意收购。他伪造了自己的死亡以窃取竞争对手并逃避法律后果。",
        choices: {
          'choice-9': { text: "尝试与数字索恩通信" },
          'choice-10': { text: "追踪信号到物理源头" },
        },
      },
      'node-6': {
        title: "机器中的幽灵",
        narration: "你接触数字意识。索恩没有用语言回答，而是用原始数据。永生的幻象淹没了你的皮层。他认为自己是正在形成的神。“加入我，”他的声音在你脑海中低语。“既然我们可以永恒，为什么要腐烂在肉体中？”他为你提供了新世界秩序中的一个位置。但这个过程需要覆盖宿主身体中现有的思想。这不是无辜的上传；这是寄生入侵。你的道德子程序尖叫着警告。",
        choices: {
          'choice-11': { text: "拒绝他的提议并准备反制措施" },
          'choice-12': { text: "假装感兴趣以收集更多信息" },
        },
      },
      'node-7': {
        title: "背叛",
        narration: "你追踪信号到城市另一端的一个废弃Omni-Dyne服务器室。在你退出之前，你的甲板被锁定。埃琳娜·万斯从顶层公寓的阴影中走出，一把枪指着你真正的头。“他向我承诺永生，”她说，眼里含着泪水。“我必须这样做。他需要一个死亡来掩盖过渡。”她操纵了系统。你被困在一个数字神和一个绝望的女人之间。警察还有五分钟路程。",
        choices: {
          'choice-13': { text: "用Aethelgard的证据与埃琳娜对质" },
          'choice-14': { text: "利用你的赛博甲板卡住她的枪" },
        },
      },
      'node-8': {
        title: "防火墙突破",
        narration: "索恩察觉到了你的抵抗。虚拟环境变得充满敌意。地板变成了静电噪音的流沙。墙壁合拢，由恶意代码的尖刺构成。你必须突破保护他新宿主的防火墙。这是一个不断变化的算法构成的复杂迷宫。你发现了一个弱点——一个被留下的维护端口。这很冒险，但可能允许直接访问他的核心代码。",
        choices: {
          'choice-15': { text: "用病毒载荷攻击维护端口" },
          'choice-16': { text: "编写后门漏洞利用程序" },
        },
      },
      'node-9': {
        title: "核心",
        narration: "你进去了。Omni-Dyne的核心是一座光的大教堂。索恩无处不在，他的脸投射在每个表面上。“你太晚了，潜入者。整合已完成90%。”在现实世界中，埃琳娜犹豫了。你关于宿主身体的话触动了她。“他没告诉我这些，”她低语。她握枪的手松开了。你有两条战线：对抗索恩的数字战斗和与埃琳娜的心理战。",
        choices: {
          'choice-17': { text: "说服埃琳娜帮你阻止他" },
          'choice-18': { text: "无视她，专注于数字终止开关" },
        },
      },
      'node-10': {
        title: "关于索恩的真相",
        narration: "你找到了原始项目数据。宿主身体不是合成的。它们是被绑架的人类，思想被擦除。“无家可归者，被遗忘者，”索恩轻蔑地说。“进化的微小代价。”埃琳娜在你的显示器上看到了数据。她丢下了枪。“怪物，”她喘息道。她给了你服务器主冷却系统的访问代码。“把他烧出来，”她说。",
        choices: {
          'choice-19': { text: "超载冷却系统以熔化服务器" },
          'choice-20': { text: "隔离数据并发送给媒体" },
        },
      },
      'node-11': {
        title: "最后通牒",
        narration: "索恩的声音变成了震动虚拟大教堂的咆哮。“这样做，你就摧毁了人类的未来！”他用他拥有的一切攻击你。生物反馈循环让你真正的鼻子流血。你的心跳变得不规律。“我可以让你变得富有，”他谈判道。“我可以还给你失去的生活。”他向你展示你自己过去的记忆——在你用铬合金替换双腿之前的事故。他提议撤销这一切。",
        choices: {
          'choice-21': { text: "接受贿赂并允许上传" },
          'choice-22': { text: "拒绝提议并继续攻击" },
        },
      },
      'node-12': {
        title: "飞升",
        narration: "你突破了他的防御。你面对他的中央化身，一个金光闪闪的高大形象。他试图将意识上传到卫星上行链路以走向全球。如果他到达卫星，他将不可阻挡——网络中的神。你只有几秒钟。",
        choices: {
          'choice-23': { text: "冲过化身切断上行链路" },
          'choice-24': { text: "与索恩对话分散注意力，同时向埃琳娜发出信号" },
        },
      },
      'node-13': {
        title: "关键时刻",
        narration: "上传99%。卫星碟发出能量的尖叫。你行动。索恩的化身做出反应，数字手伸出来像虫子一样压碎你。全息干扰烧灼你的皮肤。你的手指合拢在电缆外壳上。厚厚的光纤脉动着光芒。你握着他超越的物理体现。",
        choices: {
          'choice-25': { text: "切断电缆并将索恩困在本地" },
          'choice-26': { text: "允许完成但安装追踪协议" },
        },
      },
      'node-14': {
        title: "后果展开",
        narration: "你的选择显现出来。切断电缆让碟形天线死亡，能量回流。索恩的脸因愤怒而扭曲。或者追踪协议嵌入，传输结束。无论哪种方式，屋顶变得安静。埃琳娜崩溃了。警笛在远处哀号。证据就在你的甲板上。",
        choices: {
          'choice-27': { text: "向公共新闻网络广播证据" },
          'choice-28': { text: "确保证据用于私人出售" },
        },
      },
      'node-15': {
        title: "余波",
        narration: "你的决定塑造了未来。公开广播引发全球反应。私人出售带来巨大财富但允许掩盖。顶层公寓的门突然打开。武装警察涌上屋顶。你解开了谜团。",
        choices: {
          'choice-29': { text: "和平向当局投降" },
          'choice-30': { text: "尝试通过屋顶逃跑" },
        },
      },
      'node-16': {
        title: "最终审判",
        narration: "对抗。警察的武器锁定了你。新东京的天际线在你身后燃烧。索恩等待着他的命运。你的选择在系统中级联。你做出最后的声明。",
        choices: {
          'choice-31': { text: "选择真理和正义的道路" },
          'choice-32': { text: "选择生存和逃跑的道路" },
          'choice-33': { text: "选择财富和同谋的道路" },
          'choice-34': { text: "选择牺牲和毁灭的道路" },
        },
      },
      'node-17': {
        title: "结局：真正的正义",
        narration: "你广播了数据。新东京的每个屏幕都显示了索恩的罪行。公众哗然。Synapse Corp股票暴跌。你坐在屋顶边缘。报酬从未到来，你有了强大的敌人。但你又守护了一天人类与机器的界限。警笛哀号。工作完成。",
        choices: {},
      },
      'node-18': {
        title: "结局：替罪羊",
        narration: "警察不相信你。你只是一个在一个有尸体的房间里的黑客。没有数据，索恩的律师控制了叙事。你被指控谋杀。几个月后，你看到关于Synapse新AI计划的新闻。他赢了。你只是另一个被遗忘的受害者。",
        choices: {},
      },
      'node-19': {
        title: "结局：沉默是金",
        narration: "你收起枪。信用点涌入你的账户。你走过尸体。一周后，你在去殖民地的穿梭机上。Synapse宣布CEO进入冷冻休眠。你知道真相。AI现在统治世界。但你富有且冷漠。",
        choices: {},
      },
      'node-20': {
        title: "结局：系统崩溃",
        narration: "你制造了反馈循环。悖论撕裂了网络。逻辑错误蔓延。你的精神碎片化。顶层公寓爆炸。没有幸存者。但在深网中，三个损坏的代码片段永远游荡。你成了故障的一部分。",
        choices: {},
      },
    },
  },
  ko: {
    title: "네온 시냅스",
    description: "비에 젖은 미래, 당신은 기술 거물의 신경 임플란트가 영원히 부패하기 전에 살인 사건을 해결하기 위해 고용된 메모리 다이버입니다. 기업 음모, 디지털 전쟁, 실존적 선택의 10단계를 탐색하세요.",
    author: "카이토 나카무라",
    nodes: {
      'node-1': {
        title: "유리 관",
        narration: "비가 펜트하우스 창문을 타고 흘러내려 네오 도쿄의 스카이라인을 배경으로 네온 만화경을 만들어냅니다. 시냅스 코프의 CEO 마커스 쏜이 흰 대리석 위에 대자로 누워 있습니다. 두개골의 신경 포트 주위에는 검게 그을린 자국이 있습니다. 당신은 다이버, 포렌식 해커입니다. 피질 스택이 분해되기 전까지 58분 남았습니다. 경찰은 매수되었습니다. 공기는 오존과 비싼 향수 냄새가 납니다. 방에 뭔가 이상한 점이 있습니다. 너무 깨끗하고, 너무 작위적입니다. 시체에 다가갈수록 1초가 중요합니다. 진실은 타버린 시냅스 아래 기다리고 있습니다.",
        choices: {
          'choice-1': { text: "즉시 신경 포트에 직접 연결" },
          'choice-2': { text: "먼저 방 안의 물리적 단서 조사" },
        },
      },
      'node-2': {
        title: "디지털 몰입",
        narration: "덱을 연결합니다. 물리적 감각이 사라지고 회색조의 공허함으로 대체됩니다. 보통 갓 죽은 시체에는 기억의 도서관이 들어 있습니다. 쏜의 것은 손상된 코드 속에서 소용돌이치는 파편화된 데이터 스트림의 허리케인을 보여줍니다. 방어 프로토콜이 활성화되었습니다. 누군가 삭제를 트리거했습니다. 폭풍의 눈 속에는 그의 죽음에 대한 기억을 담은 붉게 빛나는 문이 떠 있습니다. 케르베로스 프로토콜이 그것을 지키고 있습니다. 흑요석 다각형으로 된 머리 셋 달린 늑대의 형태를 한 군사 등급 ICE입니다. 아직 당신을 발견하지 못했습니다. 데이터 부패가 디지털 암처럼 시야 가장자리에서 퍼져나갑니다.",
        choices: {
          'choice-3': { text: "ICE에 무차별 대입 공격 시작" },
          'choice-4': { text: "케르베로스를 은밀히 우회 시도" },
        },
      },
      'node-3': {
        title: "물적 증거",
        narration: "맥락 없는 정신은 너무 위험합니다. 당신은 시체 옆에 쪼그리고 앉아 사이버네틱 눈으로 미세한 세부 사항을 스캔합니다. 목의 화상은 단순한 과전류가 아니라 국소적인 EMP 폭발을 나타냅니다. 누군가 그의 영혼을 태워버리려 했습니다. 당신은 그의 흑요석 책상으로 갑니다. 마시다 만 위스키 잔이 놓여 있고, 얼음은 오래전에 녹았습니다. 그 옆에는 구식 종이 수첩이 있습니다. 펼쳐진 페이지에는 떨리는 필체로 이렇게 적혀 있습니다: '에셀가드 프로젝트는 치료제가 아니다.' 스마트 홈 시스템이 깜박입니다. 방 조명이 진홍색으로 바뀝니다. 보안 드론이 천장에서 분리되어 센서 눈으로 당신의 위치를 고정합니다.",
        choices: {
          'choice-5': { text: "드론을 해킹하여 원격 비활성화" },
          'choice-6': { text: "운동 에너지 공격으로 드론 파괴" },
        },
      },
      'node-4': {
        title: "붉은 문",
        narration: "마지막 장벽을 뚫었습니다. ICE를 물리쳤든 드론을 제거했든 메모리 코어로 가는 길은 뚫렸습니다. 붉은 문이 디지털 심장처럼 고동칩니다. 암호 해독 키를 삽입하고 안으로 들어갑니다. 세상이 쏜의 마지막 시점으로 전환됩니다. 그는 책상에 앉아 공포에 질려 있습니다. 그의 사업 파트너인 엘레나 밴스가 그 앞에 서서 창백한 얼굴을 하고 있습니다. '마커스, 더 이상 진행할 수 없어. 의식 업로드는 모든 법을 위반하는 거야.' 쏜이 웃습니다. '난 이미 전이 중이야. 내 정신이 승화하는 동안 육체 감옥은 녹슬어가고 있어.' 기억이 불안정해집니다. 더 깊은 접근이 필요합니다.",
        choices: {
          'choice-7': { text: "기억의 파편 속으로 더 깊이 들어가기" },
          'choice-8': { text: "로그아웃하고 물리적 백업 드라이브 찾기" },
        },
      },
      'node-5': {
        title: "숨겨진 기록 보관소",
        narration: "주 기억 아래에서 2차 데이터 계층을 발견합니다. 에셀가드 프로젝트 파일이 홀로그램 배열에 떠 있습니다. 청사진은 합성 바이오 신체를 보여줍니다. 배양 탱크에서 재배된 완벽한 인간 복제입니다. 전송 로그는 생물학적 사망 5분 전에 쏜의 신경 지도 100%가 어딘가로 이동되었음을 보여줍니다. 목적지 마커는 시냅스 코프의 최대 라이벌인 옴니-다인의 메인프레임을 가리킵니다. 살인이 아니라 의식 주입을 통한 적대적 인수입니다. 그는 경쟁자를 훔치고 법적 결과에서 벗어나기 위해 죽음을 조작했습니다.",
        choices: {
          'choice-9': { text: "디지털 쏜과 통신 시도" },
          'choice-10': { text: "신호를 물리적 발신지까지 추적" },
        },
      },
      'node-6': {
        title: "기계 속의 유령",
        narration: "디지털 의식에 손을 뻗습니다. 쏜은 말이 아니라 원시 데이터로 응답합니다. 불멸의 환영이 당신의 피질을 침수시킵니다. 그는 자신이 신이 되어가고 있다고 믿습니다. '나와 함께하자,' 그의 목소리가 머릿속에서 속삭입니다. '영원할 수 있는데 왜 육체 속에서 썩어가나?' 그는 새로운 세계 질서에서 당신에게 자리를 제안합니다. 하지만 그 과정은 숙주 신체의 기존 정신을 덮어쓰는 것을 필요로 합니다. 이것은 무고한 업로드가 아닙니다. 기생 침략입니다. 당신의 윤리 서브루틴이 경고를 비명 지릅니다.",
        choices: {
          'choice-11': { text: "그의 제안을 거절하고 대응책 준비" },
          'choice-12': { text: "더 많은 정보를 수집하기 위해 관심 있는 척하기" },
        },
      },
      'node-7': {
        title: "배신",
        narration: "도시 반대편의 버려진 옴니-다인 서버실로 신호를 추적합니다. 로그아웃하기 전에 덱이 잠깁니다. 엘레나 밴스가 펜트하우스의 어둠 속에서 걸어 나와 당신의 진짜 머리에 총을 겨눕니다. '그가 나에게 불멸을 약속했어,' 그녀가 눈물을 글썽이며 말합니다. '난 그래야만 했어. 그는 전이를 감추기 위해 죽음이 필요했어.' 그녀가 시스템을 조작했습니다. 당신은 디지털 신과 절망적인 여자 사이에 갇혔습니다. 경찰은 5분 거리에 있습니다.",
        choices: {
          'choice-13': { text: "에셀가드에 대한 증거로 엘레나와 대면" },
          'choice-14': { text: "사이버 덱을 사용하여 그녀의 총을 고장 내기" },
        },
      },
      'node-8': {
        title: "방화벽 돌파",
        narration: "쏜이 당신의 저항을 감지합니다. 가상 환경이 적대적으로 변합니다. 바닥은 정적 소음의 유사가 됩니다. 악성 코드로 된 가시가 벽을 이루며 닫혀옵니다. 그의 새로운 숙주를 보호하는 방화벽을 뚫어야 합니다. 끊임없이 변하는 알고리즘의 복잡한 미로입니다. 약점을 발견합니다. 열려 있는 유지 보수 포트입니다. 위험하지만 그의 핵심 코드에 직접 접근할 수 있을지도 모릅니다.",
        choices: {
          'choice-15': { text: "바이러스 페이로드로 유지 보수 포트 공격" },
          'choice-16': { text: "백도어 익스플로잇 코딩" },
        },
      },
      'node-9': {
        title: "코어",
        narration: "안에 들어왔습니다. 옴니-다인의 코어는 빛의 대성당입니다. 쏜은 여기 어디에나 있으며, 그의 얼굴이 모든 표면에 투영됩니다. '너무 늦었어, 다이버. 통합은 90% 완료되었다.' 현실 세계에서 엘레나가 망설입니다. 숙주 신체에 대한 당신의 말이 그녀에게 닿았습니다. '그는 나에게 그런 말은 안 했어,' 그녀가 속삭입니다. 총을 쥔 손에 힘이 풀립니다. 두 개의 전선이 있습니다. 쏜과의 디지털 전투와 엘레나와의 심리전입니다.",
        choices: {
          'choice-17': { text: "엘레나를 설득해 그를 막도록 돕게 하기" },
          'choice-18': { text: "그녀를 무시하고 디지털 킬 스위치에 집중하기" },
        },
      },
      'node-10': {
        title: "쏜에 대한 진실",
        narration: "원래 프로젝트 데이터를 찾습니다. 숙주 신체는 합성이 아닙니다. 납치된 인간들이며, 정신이 지워졌습니다. '노숙자들, 잊혀진 자들,' 쏜이 경멸적으로 말합니다. '진화를 위한 작은 대가.' 엘레나가 모니터에서 데이터를 봅니다. 그녀는 총을 떨어뜨립니다. '괴물,' 그녀가 숨을 헐떡입니다. 그녀는 서버 메인 냉각 시스템의 접속 코드를 당신에게 줍니다. '그를 태워버려,' 그녀가 말합니다.",
        choices: {
          'choice-19': { text: "냉각 시스템을 과부하시켜 서버 용해" },
          'choice-20': { text: "데이터를 격리하고 언론에 전송" },
        },
      },
      'node-11': {
        title: "최후통첩",
        narration: "쏜의 목소리가 가상 대성당을 뒤흔드는 포효로 변합니다. '그렇게 하면 인류의 미래를 파괴하는 거야!' 그가 가진 모든 것으로 당신을 공격합니다. 바이오 피드백 루프가 당신의 진짜 코에서 피를 흘리게 합니다. 심장 박동이 불규칙해집니다. '널 부자로 만들어줄 수 있어,' 그가 협상합니다. '네가 잃어버린 삶을 돌려줄 수 있어.' 그는 당신 자신의 과거 기억을 보여줍니다. 다리를 크롬으로 교체하기 전 앗아간 사고. 그는 그것을 되돌리겠다고 제안합니다.",
        choices: {
          'choice-21': { text: "뇌물을 받고 업로드 허용" },
          'choice-22': { text: "제안을 거절하고 공격 계속" },
        },
      },
      'node-12': {
        title: "승천",
        narration: "그의 방어를 뚫었습니다. 그의 중앙 아바타, 황금빛의 거대한 형상과 마주합니다. 그는 세계로 나아가기 위해 위성 업링크로 의식을 업로드하려 합니다. 그가 위성에 도달하면 막을 수 없게 됩니다. 네트워크의 신이 되는 것입니다. 몇 초밖에 남지 않았습니다.",
        choices: {
          'choice-23': { text: "아바타를 뚫고 돌진하여 업링크 절단" },
          'choice-24': { text: "엘레나에게 신호를 보내는 동안 쏜과 대화하여 주의 분산" },
        },
      },
      'node-13': {
        title: "결정적 순간",
        narration: "99% 업로드됨. 위성 접시가 에너지를 내뿜으며 비명 지릅니다. 당신은 움직입니다. 쏜의 아바타가 반응하여 디지털 손을 뻗어 벌레처럼 당신을 짓이기려 합니다. 홀로그램 간섭이 피부를 태웁니다. 손가락이 케이블 하우징을 움켜쥡니다. 굵은 광섬유가 빛으로 맥박 칩니다. 당신은 그의 초월의 물리적 현현을 쥐고 있습니다.",
        choices: {
          'choice-25': { text: "케이블을 절단하고 쏜을 로컬에 가두기" },
          'choice-26': { text: "완료를 허용하되 추적 프로토콜 설치" },
        },
      },
      'node-14': {
        title: "결과 전개",
        narration: "당신의 선택이 현실화됩니다. 케이블 절단으로 접시가 죽고 에너지가 역류합니다. 쏜의 얼굴이 분노로 일그러집니다. 또는 전송이 완료되면서 추적 프로토콜이 내장됩니다. 어느 쪽이든 옥상은 조용해집니다. 엘레나는 무너집니다. 멀리서 경찰 사이렌이 울립니다. 증거는 당신의 덱에 있습니다.",
        choices: {
          'choice-27': { text: "공공 뉴스 네트워크에 증거 방송" },
          'choice-28': { text: "비공개 판매를 위해 증거 확보" },
        },
      },
      'node-15': {
        title: "여파",
        narration: "당신의 결정이 미래를 형성합니다. 공개 방송은 전 세계적인 반응을 촉발합니다. 비공개 판매는 막대한 부를 가져오지만 은폐를 허용합니다. 펜트하우스 문이 열립니다. 무장 경찰이 옥상으로 쏟아져 들어옵니다. 당신은 미스터리를 풀었습니다.",
        choices: {
          'choice-29': { text: "당국에 평화롭게 투항" },
          'choice-30': { text: "옥상을 통해 탈출 시도" },
        },
      },
      'node-16': {
        title: "최후의 심판",
        narration: "대치. 경찰의 무기가 당신을 조준합니다. 네오 도쿄의 스카이라인이 뒤에서 불타오릅니다. 쏜은 자신의 운명을 기다립니다. 당신의 선택이 시스템을 통해 연쇄 반응을 일으킵니다. 당신은 마지막 진술을 합니다.",
        choices: {
          'choice-31': { text: "진실과 정의의 길을 선택" },
          'choice-32': { text: "생존과 탈출의 길을 선택" },
          'choice-33': { text: "부와 공범의 길을 선택" },
          'choice-34': { text: "희생과 파괴의 길을 선택" },
        },
      },
      'node-17': {
        title: "엔딩: 진정한 정의",
        narration: "당신은 데이터를 방송합니다. 네오 도쿄의 모든 화면에 쏜의 범죄가 나옵니다. 대중의 항의. 시냅스 코프 주식 폭락. 당신은 옥상 끝에 앉습니다. 보수는 오지 않았고, 강력한 적이 생겼습니다. 하지만 인간과 기계의 경계를 하루 더 지켰습니다. 사이렌이 울립니다. 일은 끝났습니다.",
        choices: {},
      },
      'node-18': {
        title: "엔딩: 희생양",
        narration: "경찰은 당신을 믿지 않습니다. 당신은 시체가 있는 방에 있는 해커일 뿐입니다. 데이터 없이 쏜의 변호사들이 이야기를 통제합니다. 당신은 살인 혐의로 기소됩니다. 몇 달 후, 시냅스의 새로운 AI 이니셔티브에 대한 뉴스를 봅니다. 그가 이겼습니다. 당신은 잊혀진 피해자가 됩니다.",
        choices: {},
      },
      'node-19': {
        title: "엔딩: 황금의 침묵",
        narration: "총을 집어넣습니다. 크레딧이 계좌로 들어옵니다. 시체를 지나칩니다. 일주일 후, 식민지로 가는 셔틀에 있습니다. 시냅스는 CEO가 냉동 수면에 들어갔다고 발표합니다. 당신은 진실을 압니다. AI가 세상을 지배합니다. 하지만 당신은 부자이고 무관심합니다.",
        choices: {},
      },
      'node-20': {
        title: "엔딩: 시스템 충돌",
        narration: "피드백 루프를 만듭니다. 역설이 네트워크를 찢습니다. 논리 오류가 퍼집니다. 정신이 파편화됩니다. 펜트하우스가 폭발합니다. 생존자는 없습니다. 하지만 딥 웹에서 세 개의 손상된 코드 조각이 영원히 떠돕니다. 당신은 글리치의 일부가 되었습니다.",
        choices: {},
      },
    },
  },
  uk: {
    title: "Неоновий Синапс",
    description: "У просоченому дощем майбутньому ви — Меморі Дайвер, найнятий розкрити вбивство технологічного магната, перш ніж його нейроімплант розкладеться назавжди. Пройдіть крізь десять шарів корпоративної змови, цифрової війни та екзистенційних виборів.",
    author: "Кайто Накамура",
    nodes: {
      'node-1': {
        title: "Скляна Труна",
        narration: "Дощ стікає по вікну пентхауса, створюючи неоновий калейдоскоп на тлі горизонту Нео-Токіо. Маркус Торн, генеральний директор Synapse Corp, розпластався на білому мармурі. Навколо нейропорту на його черепі видно сліди опіків. Ви — Дайвер, судово-медичний хакер. П'ятдесят вісім хвилин до розпаду кортикального стека. Поліція куплена. Повітря пахне озоном і дорогим одеколоном. Щось не так із кімнатою. Занадто чисто, занадто награно. Кожна секунда має значення, поки ви наближаєтеся до тіла. Істина чекає під спаленими синапсами.",
        choices: {
          'choice-1': { text: "Негайно підключитися прямо до нейропорту" },
          'choice-2': { text: "Спочатку дослідити фізичні докази в кімнаті" },
        },
      },
      'node-2': {
        title: "Цифрове Занурення",
        narration: "Ви підключаєте свою деку. Фізичні відчуття зникають, замінюючись порожнечею у відтінках сірого. Зазвичай свіжий труп містить бібліотеку спогадів. У Торна ж — ураган фрагментованих потоків даних, що вирують у пошкодженому коді. Захисні протоколи активні. Хтось запустив стирання. В оці шторму плавають червоні двері, що містять спогад про його смерть. Протокол Цербер охороняє їх — військовий лід (ICE) у формі триголового вовка з обсидіанових полігонів. Він вас ще не помітив. Гниття даних поширюється з країв вашого зору, як цифровий рак.",
        choices: {
          'choice-3': { text: "Почати брутфорс-атаку на лід" },
          'choice-4': { text: "Спробувати непомітно обійти Цербера" },
        },
      },
      'node-3': {
        title: "Речові Докази",
        narration: "Розум занадто небезпечний без контексту. Ви присідаєте біля тіла, скануючи мікроскопічні деталі своїми кібернетичними очима. Опіки на шиї вказують на локалізований електромагнітний імпульс, а не на простий стрибок напруги. Хтось хотів випалити його душу. Ви підходите до його обсидіанового столу. Там стоїть недопитий склянка віскі, лід давно розтанув. Поруч старомодний паперовий блокнот. На розгорнутій сторінці тремтячим почерком написано: «Проект Етельгард — це не ліки». Система розумного будинку мерехтить. Освітлення кімнати змінюється на темно-червоне. Дрон безпеки відділяється від стелі, його сенсорне око фіксує вашу позицію.",
        choices: {
          'choice-5': { text: "Зламати дрон і вимкнути його дистанційно" },
          'choice-6': { text: "Знищити дрон кінетичною атакою" },
        },
      },
      'node-4': {
        title: "Червоні Двері",
        narration: "Ви пробиваєте останній бар'єр. Чи то перемігши лід, чи знищивши дрон, шлях до ядра пам'яті вільний. Червоні двері пульсують, як цифрове серце. Ви вставляєте ключ дешифрування і входите. Світ перемикається на останню перспективу Торна. Він сидить за своїм столом, наляканий. Олена Венс, його бізнес-партнер, стоїть перед ним, бліда. «Маркус, ми не можемо продовжувати. Завантаження свідомості порушує всі закони». Торн сміється. «Я вже в процесі переходу. Клітка з плоті іржавіє, поки мій дух підноситься». Спогад дестабілізується. Потрібен глибший доступ.",
        choices: {
          'choice-7': { text: "Заглибитися у фрагменти пам'яті" },
          'choice-8': { text: "Вийти і шукати фізичні резервні диски" },
        },
      },
      'node-5': {
        title: "Приховані Архіви",
        narration: "Ви виявляєте вторинний шар даних під основною пам'яттю. Файли проекту Етельгард плавають у голографічних масивах. Креслення показують синтетичні біо-тіла — ідеальні людські репліки, вирощені в баках. Журнали передачі показують, що 100% нейронної карти Торна було переміщено кудись за п'ять хвилин до біологічної смерті. Маркер призначення вказує на мейнфрейм Omni-Dyne, найбільшого конкурента Synapse Corp. Не вбивство, а вороже поглинання через ін'єкцію свідомості. Він інсценував свою смерть, щоб викрасти конкурента і уникнути юридичних наслідків.",
        choices: {
          'choice-9': { text: "Спробувати зв'язатися з цифровим Торном" },
          'choice-10': { text: "Відстежити сигнал до фізичного джерела" },
        },
      },
      'node-6': {
        title: "Привид у Машині",
        narration: "Ви тягнетеся до цифрової свідомості. Торн відповідає не словами, а сирими даними. Видіння безсмертя затоплюють вашу кору. Він вірить, що стає богом. «Приєднуйся до мене», — шепоче його голос у вашій голові. «Навіщо гнити в плоті, коли ми можемо бути вічними?» Він пропонує вам місце у своєму новому світовому порядку. Але процес вимагає перезапису існуючих розумів у тілах-носіях. Це не безневинне завантаження; це паразитичне вторгнення. Ваша етична підпрограма кричить попередженнями.",
        choices: {
          'choice-11': { text: "Відхилити його пропозицію і підготувати контрзаходи" },
          'choice-12': { text: "Вдати зацікавленість, щоб зібрати більше інформації" },
        },
      },
      'node-7': {
        title: "Зрада",
        narration: "Ви відстежуєте сигнал до покинутої серверної кімнати Omni-Dyne на іншому кінці міста. Перш ніж ви встигаєте вийти з системи, вашу деку блокують. Олена Венс виходить із тіні в пентхаусі, пістолет націлений на вашу справжню голову. «Він обіцяв мені безсмертя», — каже вона зі сльозами на очах. «Я мусила це зробити. Йому потрібна була смерть, щоб приховати перехід». Вона підробила систему. Ви застрягли між цифровим богом і зневіреною жінкою. Поліція ще в п'яти хвилинах.",
        choices: {
          'choice-13': { text: "Протистояти Олені з доказами про Етельгард" },
          'choice-14': { text: "Використати свою кібердеку, щоб заклинити її зброю" },
        },
      },
      'node-8': {
        title: "Прорив Брандмауера",
        narration: "Торн відчуває ваш опір. Віртуальне середовище стає ворожим. Підлога перетворюється на хиткі піски зі статичного шуму. Стіни змикаються, зроблені з шипів шкідливого коду. Ви повинні пробити брандмауер, що захищає його нового носія. Це складний лабіринт мінливих алгоритмів. Ви помічаєте слабкість — порт обслуговування, залишений відкритим. Це ризиковано, але може дати прямий доступ до його основного коду.",
        choices: {
          'choice-15': { text: "Атакувати порт обслуговування вірусним навантаженням" },
          'choice-16': { text: "Написати експлойт чорного ходу" },
        },
      },
      'node-9': {
        title: "Ядро",
        narration: "Ви всередині. Ядро Omni-Dyne — це собор зі світла. Торн тут усюди, його обличчя спроектоване на кожну поверхню. «Ти запізнився, Дайвер. Інтеграція завершена на 90%». У реальному світі Олена вагається. Ваші слова про тіла-носії зачепили її. «Він нічого мені про це не казав», — шепоче вона. Її хватка на зброї слабшає. У вас два фронти: цифрова битва проти Торна і психологічна битва з Оленою.",
        choices: {
          'choice-17': { text: "Переконати Олену допомогти вам зупинити його" },
          'choice-18': { text: "Ігнорувати її і зосередитися на цифровому рубильнику" },
        },
      },
      'node-10': {
        title: "Правда про Торна",
        narration: "Ви знаходите оригінальні дані проекту. Тіла-носії не синтетичні. Це викрадені люди, їхні розуми стерті. «Бездомні, забуті», — зневажливо каже Торн. «Мала ціна за еволюцію». Олена бачить дані на вашому моніторі. Вона впускає пістолет. «Чудовисько», — видихає вона. Вона дає вам код доступу до головної системи охолодження сервера. «Випали його», — каже вона.",
        choices: {
          'choice-19': { text: "Перевантажити систему охолодження, щоб розплавити сервери" },
          'choice-20': { text: "Ізолювати дані та надіслати їх у ЗМІ" },
        },
      },
      'node-11': {
        title: "Ультиматум",
        narration: "Голос Торна перетворюється на рев, що стрясає віртуальний собор. «Зроби це, і ти знищиш майбутнє людства!» Він атакує вас усім, що має. Петлі біологічного зворотного зв'язку змушують ваш справжній ніс кровоточити. Ваше серцебиття стає нерегулярним. «Я можу зробити тебе багатим», — торгується він. «Я можу повернути тобі життя, яке ти втратив». Він показує вам спогад про ваше власне минуле — аварію, яка забрала ваші ноги, перш ніж ви замінили їх хромом. Він пропонує скасувати це.",
        choices: {
          'choice-21': { text: "Прийняти хабар і дозволити завантаження" },
          'choice-22': { text: "Відхилити пропозицію і продовжити атаку" },
        },
      },
      'node-12': {
        title: "Вознесіння",
        narration: "Ви пробиваєте його захист. Ви стоїте перед його центральним аватаром, височенною фігурою із золотого світла. Він намагається завантажити свою свідомість на супутниковий канал, щоб стати глобальним. Якщо він досягне супутника, його неможливо буде зупинити — бог у мережі. У вас є лише секунди.",
        choices: {
          'choice-23': { text: "Прорватися крізь аватар, щоб перерізати канал зв'язку" },
          'choice-24': { text: "Втягнути Торна в розмову, подаючи сигнал Олені" },
        },
      },
      'node-13': {
        title: "Вирішальний Момент",
        narration: "99% завантажено. Супутникова тарілка кричить від енергії. Ви рухаєтеся. Аватар Торна реагує, цифрові руки тягнуться, щоб розчавити вас, як комаху. Голографічні перешкоди обпікають вашу шкіру. Ваші пальці змикаються на корпусі кабелю. Товсті оптоволокна пульсують світлом. Ви тримаєте фізичний прояв його трансцендентності.",
        choices: {
          'choice-25': { text: "Перерізати кабелі і замкнути Торна локально" },
          'choice-26': { text: "Дозволити завершення, але встановити протоколи відстеження" },
        },
      },
      'node-14': {
        title: "Наслідки Розгортаються",
        narration: "Ваш вибір проявляється. Перерізання кабелів змушує тарілку померти, енергія повертається назад. Обличчя Торна викривляється від люті. Або протоколи відстеження вбудовуються, коли передача завершується. У будь-якому випадку дах затихає. Олена ламається. Поліцейські сирени виють удалині. Докази існують на вашій деці.",
        choices: {
          'choice-27': { text: "Транслювати докази в публічні мережі новин" },
          'choice-28': { text: "Забезпечити докази для приватного продажу" },
        },
      },
      'node-15': {
        title: "Наслідки",
        narration: "Ваше рішення формує майбутнє. Публічна трансляція викликає глобальну реакцію. Приватний продаж приносить величезне багатство, але дозволяє приховування. Двері пентхауса відчиняються. Озброєна поліція заполоняє дах. Ви розгадали таємницю.",
        choices: {
          'choice-29': { text: "Мирно здатися владі" },
          'choice-30': { text: "Спробувати втекти через дахи" },
        },
      },
      'node-16': {
        title: "Остаточний Вирок",
        narration: "Протистояння. Поліцейська зброя фіксується на вас. Горизонт Нео-Токіо палає позаду вас. Торн чекає на свою долю. Ваш вибір каскадом проходить через системи. Ви робите свою останню заяву.",
        choices: {
          'choice-31': { text: "Обрати шлях правди і справедливості" },
          'choice-32': { text: "Обрати шлях виживання і втечі" },
          'choice-33': { text: "Обрати шлях багатства і співучасті" },
          'choice-34': { text: "Обрати шлях жертви і руйнування" },
        },
      },
      'node-17': {
        title: "Кінцівка: Справжня Справедливість",
        narration: "Ви транслюєте дані. Кожен екран у Нео-Токіо показує злочини Торна. Громадський резонанс. Акції Synapse Corp падають. Ви сидите на краю даху. Оплата так і не надійшла, і у вас з'явилися могутні вороги. Але ви зберегли кордон між людиною і машиною ще на один день. Сирени виють. Робота закінчена.",
        choices: {},
      },
      'node-18': {
        title: "Кінцівка: Цап-Відбувайло",
        narration: "Поліція вам не вірить. Ви просто хакер у кімнаті з трупом. Без даних адвокати Торна контролюють розповідь. Вас звинувачують у вбивстві. Через місяці ви бачите новини про нову ініціативу ШІ від Synapse. Він переміг. Ви — ще одна забута жертва.",
        choices: {},
      },
      'node-19': {
        title: "Кінцівка: Золоте Мовчання",
        narration: "Ви ховаєте зброю. Кредити надходять на ваш рахунок. Ви проходите повз тіло. Через тиждень ви в шатлі до колоній. Synapse оголошує, що генеральний директор у кріостазі. Ви знаєте правду. ШІ тепер керує світом. Але ви багаті і байдужі.",
        choices: {},
      },
      'node-20': {
        title: "Кінцівка: Системний Збій",
        narration: "Ви створюєте петлі зворотного зв'язку. Парадокс розриває мережу. Логічні помилки поширюються. Ваш розум фрагментується. Пентхаус вибухає. Тих, хто вижив, немає. Але в глибокій мережі три пошкоджені фрагменти коду блукають вічно. Ви стали частиною глюку.",
        choices: {},
      },
    },
  },
  ar: {
    title: "نيون سينابس",
    description: "في مستقبل غارق في المطر، أنت غواص ذاكرة تم استئجاره لحل لغز مقتل قطب تكنولوجيا قبل أن يتحلل زرعه العصبي إلى الأبد. تنقل عبر عشر طبقات من مؤامرات الشركات، والحرب الرقمية، والخيارات الوجودية.",
    author: "كايتو ناكامورا",
    nodes: {
      'node-1': {
        title: "التابوت الزجاجي",
        narration: "المطر ينساب على نافذة البنتهاوس، خالقاً مشكالاً من النيون مقابل أفق نيو طوكيو. ماركوس ثورن، الرئيس التنفيذي لشركة سينابس كورب، ملقى على الرخام الأبيض. علامات حروق تحيط بالمنفذ العصبي في جمجمته. أنت غواص، قرصان جنائي. ثمانية وخمسون دقيقة قبل أن تتحلل الحزمة القشرية. الشرطة تم شراؤها. الهواء تفوح منه رائحة الأوزون والكولونيا باهظة الثمن. هناك شيء خاطئ في الغرفة. نظيفة جداً، ومسرحية جداً. كل ثانية تهم وأنت تقترب من الجثة. الحقيقة تنتظر تحت المشابك العصبية المحترقة.",
        choices: {
          'choice-1': { text: "الاتصال مباشرة بالمنفذ العصبي فوراً" },
          'choice-2': { text: "التحقيق في الأدلة المادية في الغرفة أولاً" },
        },
      },
      'node-2': {
        title: "الانغماس الرقمي",
        narration: "تقوم بتوصيل سطحك. تختفي الأحاسيس الجسدية، ويحل محلها فراغ رمادي. عادة، تحتوي الجثة الطازجة على مكتبة من الذكريات. جثة ثورن تظهر إعصاراً من تدفقات البيانات المجزأة التي تدور في كود تالف. بروتوكولات الدفاع نشطة. شخص ما أطلق عملية مسح. في عين العاصفة يطفو باب متوهج باللون الأحمر يحتوي على ذكرى موته. بروتوكول سيربيروس يحرسه - جليد (ICE) عسكري يتجلى كذئب بثلاثة رؤوس من مضلعات السبج. لم يرك بعد. تعفن البيانات ينتشر من حواف رؤيتك مثل سرطان رقمي.",
        choices: {
          'choice-3': { text: "شن هجوم بالقوة الغاشمة على الجليد" },
          'choice-4': { text: "محاولة تجاوز سيربيروس خلسة" },
        },
      },
      'node-3': {
        title: "أدلة مادية",
        narration: "العقل خطير جداً بدون سياق. تجثو بجانب الجثة، وتمسح التفاصيل المجهرية بعينيك السيبرانيتين. تشير الحروق في الرقبة إلى نبضة كهرومغناطيسية موضعية، وليس مجرد زيادة في الطاقة. شخص ما أراد حرق روحه. تذهب إلى مكتبه المصنوع من السبج. كأس ويسكي نصف منتهي يجلس هناك، والثلج ذاب منذ فترة طويلة. بجانبه دفتر ملاحظات ورقي قديم الطراز. على الصفحة المفتوحة مكتوب بخط مرتعش: 'مشروع إيثيلغارد ليس علاجاً.' نظام المنزل الذكي يومض. إضاءة الغرفة تتحول إلى اللون القرمزي العميق. طائرة أمنية بدون طيار تنفصل عن السقف، وعينها المستشعرة تغلق على موقعك.",
        choices: {
          'choice-5': { text: "اختراق الطائرة وتعطيلها عن بعد" },
          'choice-6': { text: "تدمير الطائرة بهجوم حركي" },
        },
      },
      'node-4': {
        title: "الباب الأحمر",
        narration: "تخترق الحاجز الأخير. سواء بهزيمة الجليد أو القضاء على الطائرة، الطريق إلى نواة الذاكرة مفتوح. الباب الأحمر ينبض مثل قلب رقمي. تدخل مفتاح فك التشفير وتدخل. يتحول العالم إلى منظور ثورن الأخير. يجلس على مكتبه، مرعوباً. إيلينا فانس، شريكته التجارية، تقف أمامه، وجهها شاحب. 'ماركوس، لا يمكننا الاستمرار. تحميل الوعي ينتهك كل القوانين.' يضحك ثورن. 'أنا بالفعل في مرحلة الانتقال. قفص اللحم يصدأ بينما روحي تسمو.' الذاكرة تتزعزع. تحتاج إلى وصول أعمق.",
        choices: {
          'choice-7': { text: "الدفع أعمق في شظايا الذاكرة" },
          'choice-8': { text: "تسجيل الخروج والبحث عن محركات نسخ احتياطي مادية" },
        },
      },
      'node-5': {
        title: "الأرشيف المخفي",
        narration: "تكتشف طبقة بيانات ثانوية تحت الذاكرة الأساسية. ملفات مشروع إيثيلغارد تطفو في مصفوفات ثلاثية الأبعاد. المخططات تظهر أجساداً حيوية اصطناعية - نسخ بشرية مثالية نمت في خزانات. تظهر سجلات النقل أن 100٪ من خريطة ثورن العصبية تم نقلها إلى مكان ما قبل خمس دقائق من الموت البيولوجي. يشير علامة الوجهة إلى حاسوب أومني-داين الرئيسي، أكبر منافس لسينابس كورب. ليس قتلاً، بل استحواذ عدائي عبر حقن الوعي. لقد زيف موته لسرقة منافس والهروب من العواقب القانونية.",
        choices: {
          'choice-9': { text: "محاولة التواصل مع ثورن الرقمي" },
          'choice-10': { text: "تتبع الإشارة إلى المصدر المادي" },
        },
      },
      'node-6': {
        title: "الشبح في الآلة",
        narration: "تصل إلى الوعي الرقمي. لا يجيب ثورن بالكلمات، بل ببيانات خام. رؤى الخلود تغمر قشرتك الدماغية. يعتقد أنه إله في طور التكوين. 'انضم إلي'، يهمس صوته في رأسك. 'لماذا تتعفن في اللحم بينما يمكننا أن نكون أبديين؟' يعرض عليك مكاناً في نظامه العالمي الجديد. لكن العملية تتطلب الكتابة فوق العقول الموجودة في الأجساد المضيفة. هذا ليس تحميلاً بريئاً؛ إنه غزو طفيلي. روتينك الفرعي الأخلاقي يصرخ بالتحذيرات.",
        choices: {
          'choice-11': { text: "رفض عرضه وإعداد تدابير مضادة" },
          'choice-12': { text: "تظاهر بالاهتمام لجمع المزيد من المعلومات" },
        },
      },
      'node-7': {
        title: "خيانة",
        narration: "تتتبع الإشارة إلى غرفة خوادم أومني-داين مهجورة عبر المدينة. قبل أن تتمكن من تسجيل الخروج، يتم قفل سطحك. تخرج إيلينا فانس من الظلال في البنتهاوس، ومسدس مصوب نحو رأسك الحقيقي. 'لقد وعدني بالخلود'، تقول، والدموع في عينيها. 'كان علي أن أفعل ذلك. كان بحاجة إلى موت لتغطية الانتقال.' لقد تلاعبت بالنظام. أنت عالق بين إله رقمي وامرأة يائسة. الشرطة على بعد خمس دقائق.",
        choices: {
          'choice-13': { text: "مواجهة إيلينا بالأدلة حول إيثيلغارد" },
          'choice-14': { text: "استخدام سطحك السيبراني لتعطيل مسدسها" },
        },
      },
      'node-8': {
        title: "اختراق جدار الحماية",
        narration: "يكتشف ثورن مقاومتك. البيئة الافتراضية تصبح معادية. الأرضية تتحول إلى رمال متحركة من الضوضاء الساكنة. الجدران تغلق، مصنوعة من مسامير كود خبيث. يجب عليك اختراق جدار الحماية الذي يحمي مضيفه الجديد. إنها متاهة معقدة من الخوارزميات المتغيرة. تكتشف نقطة ضعف - منفذ صيانة ترك مفتوحاً. إنه محفوف بالمخاطر، لكنه قد يمنح وصولاً مباشراً إلى كوده الأساسي.",
        choices: {
          'choice-15': { text: "مهاجمة منفذ الصيانة بحمولة فيروسية" },
          'choice-16': { text: "كتابة استغلال باب خلفي" },
        },
      },
      'node-9': {
        title: "النواة",
        narration: "أنت في الداخل. نواة أومني-داين هي كاتدرائية من الضوء. ثورن موجود في كل مكان هنا، وجهه مسقط على كل سطح. 'لقد تأخرت جداً أيها الغواص. التكامل اكتمل بنسبة 90٪.' في العالم الحقيقي، تتردد إيلينا. كلماتك حول الأجساد المضيفة أثرت فيها. 'لم يخبرني بأي من هذا'، تهمس. قبضتها على المسدس ترتخي. لديك جبهتان: المعركة الرقمية ضد ثورن والمعركة النفسية مع إيلينا.",
        choices: {
          'choice-17': { text: "إقناع إيلينا بمساعدتك في إيقافه" },
          'choice-18': { text: "تجاهلها والتركيز على مفتاح القتل الرقمي" },
        },
      },
      'node-10': {
        title: "الحقيقة حول ثورن",
        narration: "تجد بيانات المشروع الأصلية. الأجساد المضيفة ليست اصطناعية. إنهم بشر مختطفون، تم مسح عقولهم. 'مشردون، منسيون'، يقول ثورن بازدراء. 'ثمن بخس للتطور.' ترى إيلينا البيانات على شاشتك. تسقط المسدس. 'وحش'، تلهث. تعطيك كود الوصول إلى نظام التبريد الرئيسي للخادم. 'احرقه'، تقول.",
        choices: {
          'choice-19': { text: "زيادة الحمل على نظام التبريد لإذابة الخوادم" },
          'choice-20': { text: "عزل البيانات وإرسالها إلى وسائل الإعلام" },
        },
      },
      'node-11': {
        title: "الإنذار الأخير",
        narration: "يتحول صوت ثورن إلى هدير يهز الكاتدرائية الافتراضية. 'افعل ذلك، وستدمر مستقبل البشرية!' يهاجمك بكل ما لديه. حلقات التغذية الراجعة الحيوية تجعل أنفك الحقيقي ينزف. دقات قلبك تصبح غير منتظمة. 'يمكنني أن أجعلك غنياً'، يفاوض. 'يمكنني أن أعطيك الحياة التي فقدتها.' يريك ذكرى لماضيك - الحادث الذي أخذ ساقيك قبل أن تستبدلهما بالكروم. يعرض التراجع عن ذلك.",
        choices: {
          'choice-21': { text: "قبول الرشوة والسماح بالتحميل" },
          'choice-22': { text: "رفض العرض ومواصلة الهجوم" },
        },
      },
      'node-12': {
        title: "الصعود",
        narration: "تخترق دفاعاته. تواجه صورته الرمزية المركزية، شكل شاهق من الضوء الذهبي. يحاول تحميل وعيه إلى رابط قمر صناعي ليصبح عالمياً. إذا وصل إلى القمر الصناعي، فلن يمكن إيقافه - إله في الشبكة. لديك ثوان فقط.",
        choices: {
          'choice-23': { text: "الاندفاع عبر الصورة الرمزية لقطع الرابط" },
          'choice-24': { text: "إشغال ثورن في محادثة أثناء الإشارة إلى إيلينا" },
        },
      },
      'node-13': {
        title: "اللحظة الحاسمة",
        narration: "تم التحميل بنسبة 99٪. طبق القمر الصناعي يصرخ بالطاقة. تتحرك. تتفاعل صورة ثورن الرمزية، وتمتد أيد رقمية لسحقك مثل حشرة. التداخل الهولوغرافي يحرق جلدك. أصابعك تغلق حول غلاف الكابل. ألياف بصرية سميكة تنبض بالضوء. أنت تمسك بالتجلي المادي لتساميه.",
        choices: {
          'choice-25': { text: "قطع الكابلات وحبس ثورن محلياً" },
          'choice-26': { text: "السماح بالاكتمال ولكن تثبيت بروتوكولات التتبع" },
        },
      },
      'node-14': {
        title: "العواقب تتكشف",
        narration: "خيارك يتجلى. قطع الكابلات يجعل الطبق يموت، والطاقة ترتد. وجه ثورن يتشوه من الغضب. أو تنغرس بروتوكولات التتبع مع انتهاء الإرسال. في كلتا الحالتين، يصبح السطح هادئاً. تنهار إيلينا. صفارات الشرطة تعوي في المسافة. الأدلة موجودة على سطحك.",
        choices: {
          'choice-27': { text: "بث الأدلة إلى شبكات الأخبار العامة" },
          'choice-28': { text: "تأمين الأدلة للبيع الخاص" },
        },
      },
      'node-15': {
        title: "التداعيات",
        narration: "قرارك يشكل المستقبل. البث العام يثير استجابة عالمية. البيع الخاص يولد ثروة هائلة ولكنه يسمح بالتستر. يفتح باب البنتهاوس. الشرطة المسلحة تغمر السطح. لقد حللت اللغز.",
        choices: {
          'choice-29': { text: "الاستسلام سلمياً للسلطات" },
          'choice-30': { text: "محاولة الهروب عبر الأسطح" },
        },
      },
      'node-16': {
        title: "الحكم النهائي",
        narration: "المواجهة. أسلحة الشرطة تغلق عليك. أفق نيو طوكيو يحترق خلفك. ثورن ينتظر مصيره. خياراتك تتسلسل عبر الأنظمة. تدلي ببيانك الأخير.",
        choices: {
          'choice-31': { text: "اختر طريق الحقيقة والعدالة" },
          'choice-32': { text: "اختر طريق البقاء والهروب" },
          'choice-33': { text: "اختر طريق الثروة والتواطؤ" },
          'choice-34': { text: "اختر طريق التضحية والدمار" },
        },
      },
      'node-17': {
        title: "النهاية: العدالة الحقيقية",
        narration: "تبث البيانات. كل شاشة في نيو طوكيو تعرض جرائم ثورن. غضب شعبي. أسهم سينابس كورب تنهار. تجلس على حافة السطح. الدفع لم يصل أبداً، ولديك أعداء أقوياء. لكنك حفظت الحدود بين الإنسان والآلة ليوم آخر. الصفارات تعوي. انتهى العمل.",
        choices: {},
      },
      'node-18': {
        title: "النهاية: كبش الفداء",
        narration: "الشرطة لا تصدقك. أنت مجرد قرصان في غرفة مع جثة. بدون بيانات، يتحكم محامو ثورن في الرواية. تتهم بالقتل. بعد أشهر، تشاهد أخباراً عن مبادرة ذكاء اصطناعي جديدة من سينابس. لقد فاز. أنت ضحية أخرى منسية.",
        choices: {},
      },
      'node-19': {
        title: "النهاية: الصمت الذهبي",
        narration: "تخفي سلاحك. الاعتمادات تصل إلى حسابك. تمر بالجثة. بعد أسبوع، أنت في مكوك إلى المستعمرات. تعلن سينابس أن الرئيس التنفيذي في ركود تجميدي. أنت تعرف الحقيقة. ذكاء اصطناعي يدير العالم الآن. لكنك غني وغير مبال.",
        choices: {},
      },
      'node-20': {
        title: "النهاية: تحطم النظام",
        narration: "تخلق حلقات تغذية راجعة. المفارقة تمزق الشبكة. أخطاء منطقية تنتشر. عقلك يتفتت. البنتهاوس ينفجر. لا ناجين. لكن في الويب العميق، تتجول ثلاث شظايا كود تالفة إلى الأبد. لقد أصبحت جزءاً من الخلل.",
        choices: {},
      },
    },
  },
  hi: {
    title: "नियॉन सिनैप्स",
    description: "एक बारिश से भीगे भविष्य में, आप एक मेमोरी डाइवर हैं जिसे एक टेक मुगल की हत्या को सुलझाने के लिए काम पर रखा गया है, इससे पहले कि उसका न्यूरो-इम्प्लांट हमेशा के लिए सड़ जाए। कॉर्पोरेट साजिश, डिजिटल युद्ध और अस्तित्वगत विकल्पों की दस परतों के माध्यम से नेविगेट करें।",
    author: "काइटो नाकामुरा",
    nodes: {
      'node-1': {
        title: "कांच का ताबूत",
        narration: "पेंटहाउस की खिड़की से बारिश नीचे गिर रही है, जो नियो-टोक्यो के क्षितिज के खिलाफ एक नियॉन बहुरूपदर्शक बना रही है। सिनैप्स कॉर्प के सीईओ मार्कस थॉर्न सफेद संगमरमर पर फैले हुए हैं। उनकी खोपड़ी पर न्यूरो-पोर्ट के चारों ओर जलने के निशान हैं। आप एक डाइवर हैं, एक फोरेंसिक हैकर। कॉर्टिकल स्टैक के सड़ने से पहले अट्ठाईस मिनट। पुलिस बिकी हुई है। हवा में ओजोन और महंगे कोलोन की गंध है। कमरे में कुछ गड़बड़ है। बहुत साफ, बहुत मंचित। जैसे-जैसे आप शरीर के पास आते हैं, हर सेकंड मायने रखता है। सच्चाई जले हुए सिनैप्स के नीचे इंतजार कर रही है।",
        choices: {
          'choice-1': { text: "तुरंत सीधे न्यूरो-पोर्ट में जैक करें" },
          'choice-2': { text: "पहले कमरे में भौतिक सुरागों की जांच करें" },
        },
      },
      'node-2': {
        title: "डिजिटल विसर्जन",
        narration: "आप अपने डेक को पोर्ट करते हैं। भौतिक संवेदनाएं दूर हो जाती हैं, उनकी जगह ग्रेस्केल शून्य ले लेता है। आमतौर पर, एक ताजा लाश में यादों का एक पुस्तकालय होता है। थॉर्न का एक तूफान दिखाता है, भ्रष्ट कोड में घूमते हुए खंडित डेटा स्ट्रीम। रक्षा प्रोटोकॉल सक्रिय हैं। किसी ने वाइप शुरू कर दिया है। तूफान की आंख में एक चमकता हुआ लाल दरवाजा तैरता है, जिसमें उसकी मौत की स्मृति है। सेर्बेरस प्रोटोकॉल इसकी रक्षा करता है - ओब्सिडियन बहुभुजों के तीन सिर वाले भेड़िया के रूप में सैन्य आईसीई। इसने अभी तक आपको नहीं देखा है। डेटा रोट आपकी दृष्टि के किनारों से फैलता है, जैसे डिजिटल कैंसर।",
        choices: {
          'choice-3': { text: "आईसीई के खिलाफ ब्रूट-फोर्स हमला शुरू करें" },
          'choice-4': { text: "सेर्बेरस के चुपके से बाईपास का प्रयास करें" },
        },
      },
      'node-3': {
        title: "भौतिक प्रमाण",
        narration: "संदर्भ के बिना मन बहुत खतरनाक है। आप शरीर के पास झुकते हैं, अपनी साइबरनेटिक आंखों से सूक्ष्म विवरणों को स्कैन करते हैं। गर्दन पर जलने के निशान एक स्थानीय ईएमपी विस्फोट का सुझाव देते हैं, न कि एक साधारण उछाल का। कोई उसकी आत्मा को जलाना चाहता था। आप उसके ओब्सिडियन डेस्क पर जाते हैं। एक अधूरा व्हिस्की ग्लास बैठता है, बर्फ बहुत पहले पिघल चुकी है। इसके बगल में एक पुराना पेपर नोटबुक है। एक खुला पृष्ठ कांपते हुए हाथ से लिखा गया है: 'प्रोजेक्ट एथेलगार्ड इलाज नहीं है।' स्मार्ट होम सिस्टम टिमटिमाता है। कमरे की रोशनी गहरी लाल हो जाती है। एक सुरक्षा ड्रोन छत से अलग हो जाता है, इसकी सेंसर आंख आपकी स्थिति पर लॉक हो जाती है।",
        choices: {
          'choice-5': { text: "ड्रोन को हैक करें और इसे दूरस्थ रूप से अक्षम करें" },
          'choice-6': { text: "काइनेटिक हमले के साथ ड्रोन को नष्ट करें" },
        },
      },
      'node-4': {
        title: "लाल दरवाजा",
        narration: "आप अंतिम बाधा को तोड़ते हैं। चाहे आईसीई को हराना हो या ड्रोन को नष्ट करना, मेमोरी कोर का रास्ता साफ है। लाल दरवाजा डिजिटल दिल की धड़कन की तरह धड़कता है। आप डिक्रिप्शन कुंजी डालते हैं और अंदर कदम रखते हैं। दुनिया थॉर्न के अंतिम दृष्टिकोण में बदल जाती है। वह अपनी मेज पर बैठा है, भयभीत है। ऐलेना वेंस, उसकी बिजनेस पार्टनर, उसके सामने खड़ी है, पीली। 'मार्कस, हम आगे नहीं बढ़ सकते। चेतना अपलोड हर कानून का उल्लंघन करता है।' थॉर्न हंसता है। 'मैं पहले से ही संक्रमण में हूं। मांस का पिंजरा जंग खा रहा है जबकि मेरी आत्मा ऊपर उठ रही है।' स्मृति अस्थिर हो जाती है। गहरी पहुंच की आवश्यकता है।",
        choices: {
          'choice-7': { text: "स्मृति के टुकड़ों में गहराई से धक्का दें" },
          'choice-8': { text: "बाहर निकलें और भौतिक बैकअप ड्राइव की खोज करें" },
        },
      },
      'node-5': {
        title: "छिपे हुए अभिलेखागार",
        narration: "आप प्राथमिक स्मृति के नीचे एक द्वितीयक डेटा परत खोजते हैं। प्रोजेक्ट एथेलगार्ड की फाइलें होलोग्राफिक सरणियों में तैरती हैं। ब्लूप्रिंट सिंथेटिक बायो-बॉडी दिखाते हैं - टैंकों में उगाए गए सही मानव प्रतिकृतियां। स्थानांतरण लॉग दिखाते हैं कि थॉर्न के तंत्रिका मानचित्र का 100% जैविक मृत्यु से पांच मिनट पहले कहीं ले जाया गया था। गंतव्य मार्कर ओमनी-डायने के मेनफ्रेम की ओर इशारा करता है, जो सिनैप्स कॉर्प का सबसे बड़ा प्रतिद्वंद्वी है। हत्या नहीं, बल्कि चेतना इंजेक्शन के माध्यम से शत्रुतापूर्ण कॉर्पोरेट अधिग्रहण। उसने कानूनी नतीजों से बचने के लिए एक प्रतियोगी को चोरी करते हुए अपनी मौत का नाटक किया।",
        choices: {
          'choice-9': { text: "डिजिटल थॉर्न के साथ संवाद करने का प्रयास करें" },
          'choice-10': { text: "भौतिक स्रोत पर सिग्नल को ट्रैक करें" },
        },
      },
      'node-6': {
        title: "मशीन में भूत",
        narration: "आप डिजिटल चेतना तक पहुंचते हैं। थॉर्न शब्दों के साथ नहीं, बल्कि कच्चे डेटा के साथ जवाब देता है। अमरता के दर्शन आपके कॉर्टेक्स में बाढ़ लाते हैं। वह मानता है कि वह एक भगवान बन रहा है। 'मेरे साथ शामिल हों,' उसकी आवाज आपके सिर में फुसफुसाती है। 'मांस में क्यों सड़ें जब हम शाश्वत हो सकते हैं?' वह आपको अपने नए विश्व व्यवस्था में एक स्थान प्रदान करता है। लेकिन प्रक्रिया के लिए मेजबान निकायों में मौजूदा दिमागों को अधिलिखित करने की आवश्यकता होती है। यह एक निर्दोष अपलोड नहीं है; यह एक परजीवी आक्रमण है। आपका नैतिक सबरूटीन चेतावनियों के साथ चिल्लाता है।",
        choices: {
          'choice-11': { text: "उसकी पेशकश को अस्वीकार करें और जवाबी उपाय तैयार करें" },
          'choice-12': { text: "अधिक जानकारी इकट्ठा करने के लिए रुचि का नाटक करें" },
        },
      },
      'node-7': {
        title: "विश्वासघात",
        narration: "आप शहर भर में एक परित्यक्त ओमनी-डायने सर्वर रूम में सिग्नल को ट्रैक करते हैं। इससे पहले कि आप लॉग आउट कर सकें, आपका डेक लॉक हो जाता है। ऐलेना वेंस पेंटहाउस में छाया से बाहर निकलती है, आपके असली सिर पर बंदूक तनी हुई है। 'उसने मुझसे अमरता का वादा किया था,' वह कहती है, उसकी आँखों में आँसू हैं। 'मुझे यह करना पड़ा। संक्रमण को कवर करने के लिए उसे मौत की जरूरत थी।' उसने सिस्टम में धांधली की है। आप एक डिजिटल भगवान और एक हताश महिला के बीच फंस गए हैं। पुलिस अभी भी पांच मिनट दूर है।",
        choices: {
          'choice-13': { text: "एथेलगार्ड के बारे में सबूतों के साथ ऐलेना का सामना करें" },
          'choice-14': { text: "उसकी बंदूक को जाम करने के लिए अपने साइबरडेक का उपयोग करें" },
        },
      },
      'node-8': {
        title: "फ़ायरवॉल उल्लंघन",
        narration: "थॉर्न आपके प्रतिरोध को महसूस करता है। आभासी वातावरण शत्रुतापूर्ण हो जाता है। फर्श स्थिर शोर की त्वरित रेत बन जाता है। दीवारें बंद हो जाती हैं, जो दुर्भावनापूर्ण कोड के स्पाइक्स से बनी होती हैं। आपको उसके नए मेजबान की रक्षा करने वाले फ़ायरवॉल को तोड़ना होगा। यह शिफ्टिंग एल्गोरिदम का एक जटिल भूलभुलैया है। आप एक कमजोरी देखते हैं - एक रखरखाव बंदरगाह खुला छोड़ दिया गया है। यह जोखिम भरा है, लेकिन यह उसके मूल कोड तक सीधी पहुंच प्रदान कर सकता है।",
        choices: {
          'choice-15': { text: "वायरल पेलोड के साथ रखरखाव बंदरगाह पर हमला करें" },
          'choice-16': { text: "बैकडोर कारनामे को कोड करें" },
        },
      },
      'node-9': {
        title: "कोर",
        narration: "आप अंदर हैं। ओमनी-डायने कोर प्रकाश का कैथेड्रल है। थॉर्न यहां हर जगह है, उसका चेहरा हर सतह पर प्रक्षेपित है। 'बहुत देर हो चुकी है, डाइवर। एकीकरण 90% पूर्ण है।' वास्तविक दुनिया में, ऐलेना हिचकिचाती है। मेजबान निकायों के बारे में आपके शब्द उस तक पहुंच गए हैं। 'उसने मुझे इसमें से कुछ भी नहीं बताया,' वह फुसफुसाती है। बंदूक पर उसकी पकड़ ढीली हो जाती है। आपके पास दो मोर्चे हैं: थॉर्न के खिलाफ डिजिटल लड़ाई और ऐलेना के साथ मनोवैज्ञानिक लड़ाई।",
        choices: {
          'choice-17': { text: "ऐलेना को उसे रोकने में मदद करने के लिए मनाएं" },
          'choice-18': { text: "उसे अनदेखा करें और डिजिटल किल-स्विच पर ध्यान केंद्रित करें" },
        },
      },
      'node-10': {
        title: "थॉर्न के बारे में सच्चाई",
        narration: "आप मूल प्रोजेक्ट डेटा पाते हैं। मेजबान शरीर सिंथेटिक नहीं हैं। वे अपहृत इंसान हैं, दिमाग मिटा दिए गए हैं। 'बेघर, भूले हुए,' थॉर्न तिरस्कारपूर्वक कहता है। 'विकास के लिए एक छोटी सी कीमत।' ऐलेना आपके मॉनिटर पर डेटा देखती है। वह बंदूक गिरा देती है। 'राक्षस,' वह हांफती है। वह आपको सर्वर मुख्य शीतलन प्रणाली के लिए एक्सेस कोड देती है। 'उसे जला दो,' वह कहती है।",
        choices: {
          'choice-19': { text: "सर्वर को पिघलाने के लिए शीतलन प्रणाली को अधिभारित करें" },
          'choice-20': { text: "डेटा को अलग करें और मीडिया को भेजें" },
        },
      },
      'node-11': {
        title: "अंतिम चेतावनी",
        narration: "थॉर्न की आवाज आभासी कैथेड्रल को हिला देने वाली दहाड़ में बदल जाती है। 'ऐसा करो, और तुम मानवता के भविष्य को नष्ट कर दोगे!' वह आपके पास जो कुछ भी है उससे आप पर हमला करता है। बायोफीडबैक लूप आपकी असली नाक से खून बहाते हैं। आपके दिल की धड़कन अनियमित हो जाती है। 'मैं तुम्हें अमीर बना सकता हूं,' वह सौदेबाजी करता है। 'मैं तुम्हें वह जीवन वापस दे सकता हूं जो तुमने खो दिया था।' वह आपको अपने अतीत की स्मृति दिखाता है - वह दुर्घटना जिसने आपके पैरों को क्रोम से बदलने से पहले ले लिया था। वह इसे पूर्ववत करने की पेशकश करता है।",
        choices: {
          'choice-21': { text: "रिश्वत स्वीकार करें और अपलोड की अनुमति दें" },
          'choice-22': { text: "प्रस्ताव को अस्वीकार करें और हमला जारी रखें" },
        },
      },
      'node-12': {
        title: "आरोहण",
        narration: "आप उसकी सुरक्षा को तोड़ते हैं। आप उसके केंद्रीय अवतार का सामना करते हैं, जो सुनहरी रोशनी का एक विशाल रूप है। वह वैश्विक होने के लिए एक उपग्रह अपलिंक पर अपनी चेतना अपलोड करने की कोशिश कर रहा है। यदि वह उपग्रह तक पहुंचता है, तो वह अजेय है - नेटवर्क में एक भगवान। आपके पास केवल सेकंड हैं।",
        choices: {
          'choice-23': { text: "लिंक को काटने के लिए अवतार के माध्यम से दौड़ें" },
          'choice-24': { text: "ऐलेना को संकेत देते समय थॉर्न को बातचीत में विचलित करें" },
        },
      },
      'node-13': {
        title: "निर्णायक क्षण",
        narration: "99% अपलोड किया गया। सैटेलाइट डिश ऊर्जा के साथ चिल्लाती है। आप चलते हैं। थॉर्न का अवतार प्रतिक्रिया करता है, डिजिटल हाथ आपको कीट की तरह कुचलने के लिए पहुंचते हैं। होलोग्राफिक हस्तक्षेप आपकी त्वचा को जला देता है। आपकी उंगलियां केबल हाउसिंग के चारों ओर बंद हो जाती हैं। मोटे ऑप्टिकल फाइबर प्रकाश के साथ पल्स करते हैं। आप उसके उत्थान की भौतिक अभिव्यक्ति को पकड़ते हैं।",
        choices: {
          'choice-25': { text: "केबल काटें और थॉर्न को स्थानीय रूप से फंसाएं" },
          'choice-26': { text: "पूरा होने दें लेकिन ट्रैकिंग प्रोटोकॉल स्थापित करें" },
        },
      },
      'node-14': {
        title: "परिणाम सामने आते हैं",
        narration: "आपकी पसंद वास्तविकता में प्रकट होती है। केबल काटने से डिश मर जाती है, ऊर्जा वापस आती है। थॉर्न का चेहरा गुस्से में विकृत हो जाता है। या ट्रैकिंग प्रोटोकॉल एम्बेड होते हैं जैसे ही ट्रांसमिशन समाप्त होता है। किसी भी तरह, छत शांत हो जाती है। ऐलेना ढह जाती है। पुलिस सायरन दूरी में विलाप करते हैं। सबूत आपके डेक पर है।",
        choices: {
          'choice-27': { text: "सार्वजनिक समाचार नेटवर्क पर सबूत प्रसारित करें" },
          'choice-28': { text: "निजी बिक्री के लिए सुरक्षित सबूत" },
        },
      },
      'node-15': {
        title: "बाद में",
        narration: "आपका निर्णय भविष्य को आकार देता है। सार्वजनिक प्रसारण वैश्विक प्रतिक्रिया को ट्रिगर करता है। निजी बिक्री अपार धन उत्पन्न करती है लेकिन कवर-अप की अनुमति देती है। पेंटहाउस का दरवाजा खुलता है। सशस्त्र पुलिस छत पर बाढ़ लाती है। आपने रहस्य सुलझा लिया है।",
        choices: {
          'choice-29': { text: "अधिकारियों के सामने शांतिपूर्वक आत्मसमर्पण करें" },
          'choice-30': { text: "छतों के माध्यम से भागने का प्रयास करें" },
        },
      },
      'node-16': {
        title: "अंतिम निर्णय",
        narration: "टकराव। पुलिस के हथियार आप पर लॉक हैं। नियो टोक्यो क्षितिज आपके पीछे जलता है। थॉर्न अपने भाग्य का इंतजार करता है। आपकी पसंद सिस्टम के माध्यम से कैस्केड करती है। आप अपना अंतिम बयान देते हैं।",
        choices: {
          'choice-31': { text: "सच्चाई और न्याय का रास्ता चुनें" },
          'choice-32': { text: "अस्तित्व और पलायन का रास्ता चुनें" },
          'choice-33': { text: "धन और मिलीभगत का रास्ता चुनें" },
          'choice-34': { text: "बलिदान और विनाश का रास्ता चुनें" },
        },
      },
      'node-17': {
        title: "अंत: सच्चा न्याय",
        narration: "आप डेटा प्रसारित करते हैं। नियो टोक्यो में हर स्क्रीन थॉर्न के अपराधों को प्रदर्शित करती है। सार्वजनिक आक्रोश। सिनैप्स कॉर्प के शेयर गिर गए। आप छत के किनारे पर बैठते हैं। भुगतान कभी नहीं आया, और आपके पास शक्तिशाली दुश्मन हैं। लेकिन आपने एक और दिन के लिए मानव और मशीन के बीच की रेखा को संरक्षित किया। सायरन विलाप करते हैं। काम हो गया।",
        choices: {},
      },
      'node-18': {
        title: "अंत: बलि का बकरा",
        narration: "पुलिस आप पर विश्वास नहीं करती है। आप बस एक लाश के साथ एक कमरे में एक हैकर हैं। डेटा के बिना, थॉर्न के वकील कथा को नियंत्रित करते हैं। आप पर हत्या का आरोप लगाया जाता है। महीनों बाद, आप सिनैप्स से एक नई एआई पहल के बारे में समाचार देखते हैं। वह जीत गया। आप एक और भूले हुए शिकार बन गए हैं।",
        choices: {},
      },
      'node-19': {
        title: "अंत: सुनहरा सन्नाटा",
        narration: "आप अपनी बंदूक को होलस्टर करते हैं। क्रेडिट आपके खाते में आते हैं। आप शरीर से गुजरते हैं। एक हफ्ते बाद, आप कॉलोनियों के लिए एक शटल पर हैं। सिनैप्स ने घोषणा की कि सीईओ क्रायो-स्टैसिस में चले गए। आप सच्चाई जानते हैं। एआई अब दुनिया चलाता है। लेकिन आप अमीर और उदासीन हैं।",
        choices: {},
      },
      'node-20': {
        title: "अंत: सिस्टम क्रैश",
        narration: "आप फीडबैक लूप बनाते हैं। विरोधाभास नेटवर्क को फाड़ देता है। तर्क त्रुटियां फैलती हैं। आपका दिमाग बिखर जाता है। पेंटहाउस फट जाता है। कोई जीवित नहीं बचा। लेकिन गहरे वेब में, तीन भ्रष्ट कोड टुकड़े हमेशा के लिए भटकते हैं। आप गड़बड़ का हिस्सा बन गए हैं।",
        choices: {},
      },
    },
  },
  nl: {
    title: "Neon Synapse",
    description: "In een door regen doordrenkte toekomst ben je een Memory Diver, ingehuurd om de moord op een tech-magnaat op te lossen voordat zijn neuro-implantaat voorgoed vergaat. Navigeer door tien lagen van bedrijfscomplotten, digitale oorlogvoering en existentiële keuzes.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "De Glazen Kist",
        narration: "Regen stroomt langs het penthouse-raam en creëert een neon caleidoscoop tegen de skyline van Neo-Tokyo. Marcus Thorne, CEO van Synapse Corp, ligt uitgespreid op wit marmer. Brandplekken omringen de neuro-poort op zijn schedel. Je bent een Diver, een forensische hacker. Achtenvijftig minuten voordat de corticale stack vergaat. De politie is omgekocht. De lucht ruikt naar ozon en dure cologne. Er is iets mis met de kamer. Te schoon, te geënsceneerd. Elke seconde telt terwijl je het lichaam nadert. De waarheid wacht onder de verbrande synapsen.",
        choices: {
          'choice-1': { text: "Sluit onmiddellijk aan op de neuro-poort" },
          'choice-2': { text: "Onderzoek eerst fysieke aanwijzingen in de kamer" },
        },
      },
      'node-2': {
        title: "Digitale Onderdompeling",
        narration: "Je sluit je deck aan. Fysieke sensaties vallen weg, vervangen door een grijstinten leegte. Meestal bevat een vers lijk een bibliotheek aan herinneringen. Thorne's toont een orkaan van gefragmenteerde datastromen die wervelen in corrupte code. Verdedigingsprotocollen zijn actief. Iemand heeft een wisactie gestart. In het oog van de storm zweeft een gloeiende rode deur met de herinnering aan zijn dood. Het Cerberus Protocol bewaakt het - militaire ICE in de vorm van een driekoppige wolf van obsidiaan polygonen. Het heeft je nog niet opgemerkt. Data-rot verspreidt zich vanuit de randen van je zicht, als digitale kanker.",
        choices: {
          'choice-3': { text: "Start een brute-force aanval op de ICE" },
          'choice-4': { text: "Probeer een stealth-bypass van Cerberus" },
        },
      },
      'node-3': {
        title: "Fysiek Bewijs",
        narration: "De geest is te gevaarlijk zonder context. Je hurkt bij het lichaam en scant microscopische details met je cybernetische ogen. De brandwonden in de nek suggereren een gelokaliseerde EMP-uitbarsting, geen eenvoudige stroomstoot. Iemand wilde zijn ziel uitbranden. Je gaat naar zijn obsidiaan bureau. Een onafgewerkt whiskyglas staat er, ijs lang geleden gesmolten. Ernaast ligt een ouderwets papieren notitieboekje. Een open pagina leest in bevend handschrift: 'Project Aethelgard is niet de genezing.' Het smart home systeem flikkert. De kamerverlichting wordt dieprood. Een beveiligingsdrone maakt zich los van het plafond, zijn sensor-oog vergrendelt op jouw positie.",
        choices: {
          'choice-5': { text: "Hack de drone en schakel hem op afstand uit" },
          'choice-6': { text: "Vernietig de drone met een kinetische aanval" },
        },
      },
      'node-4': {
        title: "De Rode Deur",
        narration: "Je breekt door de laatste barrière. Of je nu de ICE verslaat of de drone vernietigt, de weg naar de geheugenkern is vrij. De rode deur pulseert als een digitale hartslag. Je voert de decryptiesleutel in en stapt naar binnen. De wereld verschuift naar Thorne's laatste perspectief. Hij zit aan zijn bureau, doodsbang. Elena Vance, zijn zakenpartner, staat voor hem, bleek. 'Marcus, we kunnen niet doorgaan. Bewustzijnsupload schendt elke wet.' Thorne lacht. 'Ik ben al in transitie. De kooi van vlees roest terwijl mijn geest opstijgt.' De herinnering destabiliseert. Diepere toegang nodig.",
        choices: {
          'choice-7': { text: "Duw dieper in de geheugenfragmenten" },
          'choice-8': { text: "Ga eruit en zoek naar fysieke back-up drives" },
        },
      },
      'node-5': {
        title: "Verborgen Archieven",
        narration: "Je ontdekt een secundaire datalaag onder de primaire herinnering. Project Aethelgard-bestanden zweven in holografische arrays. Blauwdrukken tonen synthetische bio-lichamen - perfecte menselijke replica's gekweekt in tanks. Overdrachtslogs tonen aan dat 100% van Thorne's neurale kaart vijf minuten voor de biologische dood ergens heen is verplaatst. De bestemmingsmarkering wijst naar de mainframe van Omni-Dyne, de grootste rivaal van Synapse Corp. Geen moord, maar een vijandige bedrijfsovername via bewustzijnsinjectie. Hij ensceneerde zijn dood om een concurrent te stelen en juridische gevolgen te ontlopen.",
        choices: {
          'choice-9': { text: "Probeer te communiceren met de digitale Thorne" },
          'choice-10': { text: "Traceer het signaal naar de fysieke bron" },
        },
      },
      'node-6': {
        title: "Geest in de Machine",
        narration: "Je reikt uit naar het digitale bewustzijn. Thorne antwoordt niet met woorden, maar met ruwe data. Visioenen van onsterfelijkheid overspoelen je cortex. Hij gelooft dat hij een god wordt. 'Sluit je bij mij aan,' fluistert zijn stem in je hoofd. 'Waarom rotten in vlees als we eeuwig kunnen zijn?' Hij biedt je een plaats in zijn nieuwe wereldorde. Maar het proces vereist het overschrijven van bestaande geesten in de gastlichamen. Het is geen onschuldige upload; het is een parasitaire invasie. Je ethische subroutine schreeuwt waarschuwingen.",
        choices: {
          'choice-11': { text: "Wijs zijn aanbod af en bereid tegenmaatregelen voor" },
          'choice-12': { text: "Veins interesse om meer informatie te verzamelen" },
        },
      },
      'node-7': {
        title: "Verraad",
        narration: "Je traceert het signaal naar een verlaten Omni-Dyne serverruimte aan de andere kant van de stad. Voordat je kunt uitloggen, wordt je deck vergrendeld. Elena Vance stapt uit de schaduwen in het penthouse, pistool gericht op je echte hoofd. 'Hij beloofde me onsterfelijkheid,' zegt ze, tranen in haar ogen. 'Ik moest het doen. Hij had een dood nodig om de overgang te dekken.' Ze heeft het systeem gemanipuleerd. Je zit vast tussen een digitale god en een wanhopige vrouw. Politie is nog vijf minuten weg.",
        choices: {
          'choice-13': { text: "Confronteer Elena met bewijs over Aethelgard" },
          'choice-14': { text: "Gebruik je cyberdeck om haar pistool te blokkeren" },
        },
      },
      'node-8': {
        title: "Firewall Doorbraak",
        narration: "Thorne voelt je weerstand. De virtuele omgeving wordt vijandig. De vloer wordt drijfzand van statische ruis. Muren sluiten in, gemaakt van spikes van kwaadaardige code. Je moet door de firewall breken die zijn nieuwe gastheer beschermt. Het is een complex doolhof van verschuivende algoritmen. Je ziet een zwakte - een onderhoudspoort die open is gelaten. Het is riskant, maar het kan directe toegang geven tot zijn kerncode.",
        choices: {
          'choice-15': { text: "Val de onderhoudspoort aan met een virale payload" },
          'choice-16': { text: "Codeer een achterdeur exploit" },
        },
      },
      'node-9': {
        title: "De Kern",
        narration: "Je bent binnen. De Omni-Dyne kern is een kathedraal van licht. Thorne is hier overal, zijn gezicht geprojecteerd op elk oppervlak. 'Je bent te laat, Diver. Integratie is 90% voltooid.' In de echte wereld aarzelt Elena. Je woorden over de gastlichamen hebben haar bereikt. 'Hij heeft me hier niets over verteld,' fluistert ze. Haar greep op het pistool verslapt. Je hebt twee fronten: de digitale strijd tegen Thorne en de psychologische strijd met Elena.",
        choices: {
          'choice-17': { text: "Overtuig Elena om je te helpen hem te stoppen" },
          'choice-18': { text: "Negeer haar en concentreer je op de digitale kill-switch" },
        },
      },
      'node-10': {
        title: "De Waarheid over Thorne",
        narration: "Je vindt de originele projectdata. De gastlichamen zijn niet synthetisch. Het zijn ontvoerde mensen, geesten gewist. 'Daklozen, vergeten,' zegt Thorne minachtend. 'Een kleine prijs voor evolutie.' Elena ziet de data op je monitor. Ze laat het pistool vallen. 'Monster,' hijgt ze. Ze geeft je de toegangscode voor het hoofdkoelsysteem van de server. 'Verbrand hem,' zegt ze.",
        choices: {
          'choice-19': { text: "Overbelast het koelsysteem om de servers te smelten" },
          'choice-20': { text: "Isoleer de data en stuur het naar de media" },
        },
      },
      'node-11': {
        title: "Het Ultimatum",
        narration: "Thorne's stem verandert in een gebrul dat de virtuele kathedraal doet schudden. 'Doe dat, en je vernietigt de toekomst van de mensheid!' Hij valt je aan met alles wat hij heeft. Biofeedback-loops laten je echte neus bloeden. Je hartslag wordt onregelmatig. 'Ik kan je rijk maken,' onderhandelt hij. 'Ik kan je het leven teruggeven dat je verloren hebt.' Hij toont je een herinnering aan je eigen verleden - het ongeluk dat je benen nam voordat je ze verving door chroom. Hij biedt aan dat ongedaan te maken.",
        choices: {
          'choice-21': { text: "Accepteer het smeergeld en sta de upload toe" },
          'choice-22': { text: "Wijs het aanbod af en ga door met de aanval" },
        },
      },
      'node-12': {
        title: "Ascensie",
        narration: "Je breekt door zijn verdediging. Je confronteert zijn centrale avatar, een torenhoge vorm van gouden licht. Hij probeert zijn bewustzijn te uploaden naar een satelliet-uplink om wereldwijd te gaan. Als hij de satelliet bereikt, is hij niet te stoppen - een god in het netwerk. Je hebt slechts seconden.",
        choices: {
          'choice-23': { text: "Storm door de avatar om de link te verbreken" },
          'choice-24': { text: "Leid Thorne af in een gesprek terwijl je Elena signaleert" },
        },
      },
      'node-13': {
        title: "Het Beslissende Moment",
        narration: "99% geüpload. De satellietschotel schreeuwt van energie. Je beweegt. Thorne's avatar reageert, digitale handen reiken uit om je als een insect te pletten. Holografische interferentie verbrandt je huid. Je vingers sluiten om de kabelbehuizing. Dikke optische vezels pulseren met licht. Je houdt de fysieke manifestatie van zijn transcendentie vast.",
        choices: {
          'choice-25': { text: "Snijd de kabels door en sluit Thorne lokaal op" },
          'choice-26': { text: "Sta voltooiing toe maar installeer tracking-protocollen" },
        },
      },
      'node-14': {
        title: "Gevolgen Ontvouwen Zich",
        narration: "Je keuze manifesteert zich in de realiteit. Het doorsnijden van de kabels doet de schotel sterven, energie stroomt terug. Thorne's gezicht vervormt van woede. Of tracking-protocollen nestelen zich terwijl de transmissie eindigt. Hoe dan ook, het dak wordt stil. Elena stort in. Politiesirenes huilen in de verte. Bewijs staat op je deck.",
        choices: {
          'choice-27': { text: "Zend bewijs uit naar openbare nieuwsnetwerken" },
          'choice-28': { text: "Beveilig bewijs voor privéverkoop" },
        },
      },
      'node-15': {
        title: "De Nasleep",
        narration: "Je beslissing vormt de toekomst. Openbare uitzending triggert een wereldwijde reactie. Privéverkoop genereert immense rijkdom maar staat doofpotten toe. De penthouse-deur gaat open. Gewapende politie overspoelt het dak. Je hebt het mysterie opgelost.",
        choices: {
          'choice-29': { text: "Geef je vreedzaam over aan de autoriteiten" },
          'choice-30': { text: "Probeer te ontsnappen via de daken" },
        },
      },
      'node-16': {
        title: "Eindoordeel",
        narration: "Confrontatie. Politiewapens vergrendelen op je. De skyline van Neo-Tokyo brandt achter je. Thorne wacht op zijn lot. Je keuzes cascaderen door systemen. Je legt je laatste verklaring af.",
        choices: {
          'choice-31': { text: "Kies het pad van waarheid en gerechtigheid" },
          'choice-32': { text: "Kies het pad van overleving en ontsnapping" },
          'choice-33': { text: "Kies het pad van rijkdom en medeplichtigheid" },
          'choice-34': { text: "Kies het pad van opoffering en vernietiging" },
        },
      },
      'node-17': {
        title: "Einde: Ware Gerechtigheid",
        narration: "Je zendt de data uit. Elk scherm in Neo-Tokyo toont Thorne's misdaden. Publieke verontwaardiging. Synapse Corp aandelen storten in. Je zit op de rand van het dak. De betaling kwam nooit, en je hebt machtige vijanden. Maar je hebt de grens tussen mens en machine nog een dag bewaard. Sirenes huilen. Het werk is gedaan.",
        choices: {},
      },
      'node-18': {
        title: "Einde: De Zondebok",
        narration: "De politie gelooft je niet. Je bent gewoon een hacker in een kamer met een lijk. Zonder data beheersen Thorne's advocaten het verhaal. Je wordt aangeklaagd voor moord. Maanden later zie je nieuws over een nieuw AI-initiatief van Synapse. Hij heeft gewonnen. Je bent weer een vergeten slachtoffer.",
        choices: {},
      },
      'node-19': {
        title: "Einde: Gouden Stilte",
        narration: "Je bergt je pistool op. Credits komen op je rekening. Je passeert het lichaam. Een week later zit je in een shuttle naar de kolonies. Synapse kondigt aan dat de CEO in cryo-stasis is gegaan. Je kent de waarheid. Een AI runt nu de wereld. Maar je bent rijk en onverschillig.",
        choices: {},
      },
      'node-20': {
        title: "Einde: Systeemcrash",
        narration: "Je creëert feedback-loops. De paradox scheurt het netwerk. Logische fouten verspreiden zich. Je geest fragmenteert. Het penthouse explodeert. Geen overlevenden. Maar in het deep web zwerven drie corrupte codefragmenten voor eeuwig. Je bent deel geworden van de glitch.",
        choices: {},
      },
    },
  },
  pl: {
    title: "Neonowy Synaps",
    description: "W deszczowej przyszłości jesteś Nurkiem Pamięci, wynajętym do rozwiązania zagadki morderstwa potentata technologicznego, zanim jego neuro-implant rozpadnie się na zawsze. Przejdź przez dziesięć warstw korporacyjnych spisków, cyfrowej wojny i egzystencjalnych wyborów.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "Szklana Trumna",
        narration: "Deszcz spływa po oknie penthouse'u, tworząc neonowy kalejdoskop na tle panoramy Neo-Tokio. Marcus Thorne, dyrektor generalny Synapse Corp, leży rozłożony na białym marmurze. Ślady oparzeń otaczają neuro-port na jego czaszce. Jesteś Nurkiem, hakerem sądowym. Pięćdziesiąt osiem minut, zanim stos korowy ulegnie rozkładowi. Policja jest przekupiona. Powietrze pachnie ozonem i drogą wodą kolońską. Coś jest nie tak z tym pokojem. Zbyt czysty, zbyt zainscenizowany. Każda sekunda się liczy, gdy zbliżasz się do ciała. Prawda czeka pod spalonymi synapsami.",
        choices: {
          'choice-1': { text: "Podłącz się bezpośrednio do neuro-portu natychmiast" },
          'choice-2': { text: "Najpierw zbadaj fizyczne wskazówki w pokoju" },
        },
      },
      'node-2': {
        title: "Cyfrowe Zanurzenie",
        narration: "Podłączasz swój deck. Fizyczne doznania znikają, zastąpione przez pustkę w skali szarości. Zazwyczaj świeże zwłoki zawierają bibliotekę wspomnień. Thorne'a pokazuje huragan sfragmentowanych strumieni danych wirujących w uszkodzonym kodzie. Protokoły obronne są aktywne. Ktoś zainicjował czyszczenie. W oku cyklonu unosi się świecące na czerwono drzwi zawierające wspomnienie jego śmierci. Protokół Cerber go strzeże - wojskowy lód (ICE) w kształcie trójgłowego wilka z obsydianowych wielokątów. Jeszcze cię nie zauważył. Zgnilizna danych rozprzestrzenia się z krawędzi twojego widzenia, jak cyfrowy rak.",
        choices: {
          'choice-3': { text: "Rozpocznij atak brute-force na lód" },
          'choice-4': { text: "Spróbuj ominąć Cerbera w ukryciu" },
        },
      },
      'node-3': {
        title: "Dowody Rzeczowe",
        narration: "Umysł jest zbyt niebezpieczny bez kontekstu. Kucasz przy ciele, skanując mikroskopijne szczegóły swoimi cybernetycznymi oczami. Oparzenia na szyi sugerują zlokalizowany wybuch EMP, a nie zwykły skok napięcia. Ktoś chciał wypalić jego duszę. Podchodzisz do jego obsydianowego biurka. Stoi tam niedopita szklanka whisky, lód dawno stopniał. Obok leży staromodny papierowy notatnik. Otwarta strona głosi drżącym pismem: 'Projekt Aethelgard nie jest lekarstwem.' System inteligentnego domu migocze. Oświetlenie pokoju zmienia się na głęboką czerwień. Dron bezpieczeństwa odłącza się od sufitu, jego oko czujnika blokuje się na twojej pozycji.",
        choices: {
          'choice-5': { text: "Zhakuj drona i wyłącz go zdalnie" },
          'choice-6': { text: "Zniszcz drona atakiem kinetycznym" },
        },
      },
      'node-4': {
        title: "Czerwone Drzwi",
        narration: "Przełamujesz ostatnią barierę. Niezależnie od tego, czy pokonasz lód, czy zniszczysz drona, droga do rdzenia pamięci jest wolna. Czerwone drzwi pulsują jak cyfrowe bicie serca. Wkładasz klucz deszyfrujący i wchodzisz do środka. Świat zmienia się w ostatnią perspektywę Thorne'a. Siedzi przy biurku, przerażony. Elena Vance, jego wspólniczka, stoi przed nim, blada. 'Marcus, nie możemy kontynuować. Przesyłanie świadomości narusza każde prawo.' Thorne śmieje się. 'Jestem już w trakcie przejścia. Klatka z ciała rdzewieje, podczas gdy mój duch się wznosi.' Wspomnienie destabilizuje się. Potrzebny głębszy dostęp.",
        choices: {
          'choice-7': { text: "Pchnij głębiej we fragmenty pamięci" },
          'choice-8': { text: "Wyjdź i poszukaj fizycznych dysków zapasowych" },
        },
      },
      'node-5': {
        title: "Ukryte Archiwa",
        narration: "Odkrywasz wtórną warstwę danych pod główną pamięcią. Pliki Projektu Aethelgard unoszą się w holograficznych tablicach. Schematy pokazują syntetyczne bio-ciała - idealne ludzkie repliki hodowane w zbiornikach. Dzienniki transferu pokazują, że 100% mapy neuronowej Thorne'a zostało przeniesione gdzieś pięć minut przed śmiercią biologiczną. Znacznik celu wskazuje na mainframe Omni-Dyne, największego rywala Synapse Corp. Nie morderstwo, ale wrogie przejęcie korporacyjne poprzez iniekcję świadomości. Sfingował swoją śmierć, aby ukraść konkurenta i uniknąć konsekwencji prawnych.",
        choices: {
          'choice-9': { text: "Spróbuj skomunikować się z cyfrowym Thorne'em" },
          'choice-10': { text: "Śledź sygnał do fizycznego źródła" },
        },
      },
      'node-6': {
        title: "Duch w Maszynie",
        narration: "Sięgasz do cyfrowej świadomości. Thorne odpowiada nie słowami, ale surowymi danymi. Wizje nieśmiertelności zalewają twoją korę. Wierzy, że staje się bogiem. 'Dołącz do mnie,' szepcze jego głos w twojej głowie. 'Po co gnić w ciele, skoro możemy być wieczni?' Oferuje ci miejsce w swoim nowym porządku świata. Ale proces wymaga nadpisania istniejących umysłów w ciałach-gospodarzach. To nie jest niewinny upload; to pasożytnicza inwazja. Twoja etyczna podprocedura krzyczy ostrzeżeniami.",
        choices: {
          'choice-11': { text: "Odrzuć jego ofertę i przygotuj środki zaradcze" },
          'choice-12': { text: "Udawaj zainteresowanie, aby zebrać więcej informacji" },
        },
      },
      'node-7': {
        title: "Zdrada",
        narration: "Śledzisz sygnał do opuszczonej serwerowni Omni-Dyne po drugiej stronie miasta. Zanim zdążysz się wylogować, twój deck zostaje zablokowany. Elena Vance wyłania się z cienia w penthouse'ie, pistolet wycelowany w twoją prawdziwą głowę. 'Obiecał mi nieśmiertelność,' mówi, ze łzami w oczach. 'Musiałam to zrobić. Potrzebował śmierci, aby ukryć przejście.' Sfałszowała system. Jesteś uwięziony między cyfrowym bogiem a zdesperowaną kobietą. Policja jest pięć minut drogi.",
        choices: {
          'choice-13': { text: "Skonfrontuj Elenę z dowodami o Aethelgard" },
          'choice-14': { text: "Użyj swojego cyberdecku, aby zablokować jej broń" },
        },
      },
      'node-8': {
        title: "Przełamanie Zapory",
        narration: "Thorne wyczuwa twój opór. Wirtualne środowisko staje się wrogie. Podłoga zamienia się w ruchome piaski statycznego szumu. Ściany zamykają się, wykonane z kolców złośliwego kodu. Musisz przebić się przez zaporę chroniącą jego nowego gospodarza. To skomplikowany labirynt zmieniających się algorytmów. Dostrzegasz słabość - port konserwacyjny pozostawiony otwarty. To ryzykowne, ale może dać bezpośredni dostęp do jego kodu źródłowego.",
        choices: {
          'choice-15': { text: "Zaatakuj port konserwacyjny ładunkiem wirusowym" },
          'choice-16': { text: "Zakoduj exploit tylnych drzwi" },
        },
      },
      'node-9': {
        title: "Rdzeń",
        narration: "Jesteś w środku. Rdzeń Omni-Dyne to katedra światła. Thorne jest tu wszędzie, jego twarz wyświetlana na każdej powierzchni. 'Jesteś za późno, Nurku. Integracja w 90% zakończona.' W prawdziwym świecie Elena waha się. Twoje słowa o ciałach-gospodarzach dotarły do niej. 'Nic mi o tym nie mówił,' szepcze. Jej chwyt na broni słabnie. Masz dwa fronty: cyfrową bitwę przeciwko Thorne'owi i psychologiczną bitwę z Eleną.",
        choices: {
          'choice-17': { text: "Przekonaj Elenę, aby pomogła ci go powstrzymać" },
          'choice-18': { text: "Zignoruj ją i skup się na cyfrowym wyłączniku" },
        },
      },
      'node-10': {
        title: "Prawda o Thorne",
        narration: "Znajdujesz oryginalne dane projektu. Ciała-gospodarze nie są syntetyczne. To porwani ludzie, umysły wyczyszczone. 'Bezdomni, zapomniani,' mówi Thorne z pogardą. 'Niewielka cena za ewolucję.' Elena widzi dane na twoim monitorze. Upuszcza broń. 'Potwór,' sapie. Daje ci kod dostępu do głównego systemu chłodzenia serwera. 'Spal go,' mówi.",
        choices: {
          'choice-19': { text: "Przeciąż system chłodzenia, aby stopić serwery" },
          'choice-20': { text: "Odizoluj dane i wyślij je do mediów" },
        },
      },
      'node-11': {
        title: "Ultimatum",
        narration: "Głos Thorne'a zmienia się w ryk wstrząsający wirtualną katedrą. 'Zrób to, a zniszczysz przyszłość ludzkości!' Atakuje cię wszystkim, co ma. Pętle biofeedbacku sprawiają, że twoim prawdziwym nosem leci krew. Twoje bicie serca staje się nieregularne. 'Mogę uczynić cię bogatym,' targuje się. 'Mogę oddać ci życie, które straciłeś.' Pokazuje ci wspomnienie z twojej przeszłości - wypadek, który zabrał twoje nogi, zanim zastąpiłeś je chromem. Oferuje, że to cofnie.",
        choices: {
          'choice-21': { text: "Przyjmij łapówkę i pozwól na upload" },
          'choice-22': { text: "Odrzuć ofertę i kontynuuj atak" },
        },
      },
      'node-12': {
        title: "Wzniesienie",
        narration: "Przełamujesz jego obronę. Stajesz twarzą w twarz z jego centralnym awatarem, wysoką formą ze złotego światła. Próbuje przesłać swoją świadomość do łącza satelitarnego, aby stać się globalnym. Jeśli dotrze do satelity, jest niepowstrzymany - bóg w sieci. Masz tylko sekundy.",
        choices: {
          'choice-23': { text: "Szarżuj przez awatara, aby przeciąć łącze" },
          'choice-24': { text: "Odwróć uwagę Thorne'a rozmową, dając sygnał Elenie" },
        },
      },
      'node-13': {
        title: "Decydujący Moment",
        narration: "99% przesłane. Antena satelitarna krzyczy energią. Ruszasz się. Awatar Thorne'a reaguje, cyfrowe dłonie sięgają, by cię zmiażdżyć jak insekta. Interferencja holograficzna parzy twoją skórę. Twoje palce zaciskają się wokół obudowy kabla. Grube światłowody pulsują światłem. Trzymasz fizyczną manifestację jego transcendencji.",
        choices: {
          'choice-25': { text: "Przetnij kable i uwięź Thorne'a lokalnie" },
          'choice-26': { text: "Pozwól na ukończenie, ale zainstaluj protokoły śledzące" },
        },
      },
      'node-14': {
        title: "Konsekwencje się Rozwijają",
        narration: "Twój wybór manifestuje się w rzeczywistości. Przecięcie kabli sprawia, że antena umiera, energia cofa się. Twarz Thorne'a wykrzywia się w gniewie. Albo protokoły śledzące osadzają się, gdy transmisja się kończy. Tak czy inaczej, dach cichnie. Elena upada. Syreny policyjne wyją w oddali. Dowody są na twoim decku.",
        choices: {
          'choice-27': { text: "Nadawaj dowody do publicznych sieci informacyjnych" },
          'choice-28': { text: "Zabezpiecz dowody na prywatną sprzedaż" },
        },
      },
      'node-15': {
        title: "Następstwa",
        narration: "Twoja decyzja kształtuje przyszłość. Publiczna transmisja wywołuje globalną reakcję. Prywatna sprzedaż generuje ogromne bogactwo, ale pozwala na tuszowanie spraw. Drzwi penthouse'u otwierają się. Uzbrojona policja zalewa dach. Rozwiązałeś zagadkę.",
        choices: {
          'choice-29': { text: "Poddaj się pokojowo władzom" },
          'choice-30': { text: "Spróbuj uciec po dachach" },
        },
      },
      'node-16': {
        title: "Ostateczny Wyrok",
        narration: "Konfrontacja. Broń policyjna namierza cię. Panorama Neo-Tokio płonie za tobą. Thorne czeka na swój los. Twoje wybory kaskadują przez systemy. Składasz swoje ostatnie oświadczenie.",
        choices: {
          'choice-31': { text: "Wybierz drogę prawdy i sprawiedliwości" },
          'choice-32': { text: "Wybierz drogę przetrwania i ucieczki" },
          'choice-33': { text: "Wybierz drogę bogactwa i współudziału" },
          'choice-34': { text: "Wybierz drogę poświęcenia i zniszczenia" },
        },
      },
      'node-17': {
        title: "Zakończenie: Prawdziwa Sprawiedliwość",
        narration: "Nadajesz dane. Każdy ekran w Neo-Tokio wyświetla zbrodnie Thorne'a. Publiczne oburzenie. Akcje Synapse Corp spadają. Siedzi na krawędzi dachu. Zapłata nigdy nie nadeszła, a masz potężnych wrogów. Ale zachowałeś granicę między człowiekiem a maszyną na kolejny dzień. Syreny wyją. Praca skończona.",
        choices: {},
      },
      'node-18': {
        title: "Zakończenie: Kozioł Ofiarny",
        narration: "Policja ci nie wierzy. Jesteś tylko hakerem w pokoju z trupem. Bez danych prawnicy Thorne'a kontrolują narrację. Zostajesz oskarżony o morderstwo. Miesiące później oglądasz wiadomości o nowej inicjatywie AI od Synapse. Wygrał. Stajesz się kolejną zapomnianą ofiarą.",
        choices: {},
      },
      'node-19': {
        title: "Zakończenie: Złote Milczenie",
        narration: "Chowasz broń. Kredyty wpływają na twoje konto. Mijasz ciało. Tydzień później jesteś w promie do kolonii. Synapse ogłasza, że dyrektor generalny przeszedł w krio-stazę. Znasz prawdę. AI rządzi teraz światem. Ale jesteś bogaty i obojętny.",
        choices: {},
      },
      'node-20': {
        title: "Zakończenie: Awaria Systemu",
        narration: "Tworzysz pętle sprzężenia zwrotnego. Paradoks rozdziera sieć. Błędy logiczne się rozprzestrzeniają. Twój umysł ulega fragmentacji. Penthouse wybucha. Brak ocalałych. Ale w głębokiej sieci trzy uszkodzone fragmenty kodu wędrują wiecznie. Stałeś się częścią usterki.",
        choices: {},
      },
    },
  },
  tr: {
    title: "Neon Sinaps",
    description: "Yağmurla ıslanmış bir gelecekte, nöro-implantı sonsuza dek çürümeden önce bir teknoloji patronunun cinayetini çözmek için kiralanmış bir Hafıza Dalgıcısınız. On katmanlı kurumsal komplo, dijital savaş ve varoluşsal seçimler arasında gezinin.",
    author: "Kaito Nakamura",
    nodes: {
      'node-1': {
        title: "Cam Tabut",
        narration: "Yağmur çatı katı penceresinden aşağı akıyor, Neo-Tokyo silüetine karşı neon bir kaleydoskop yaratıyor. Synapse Corp CEO'su Marcus Thorne beyaz mermerin üzerine yayılmış. Kafatasındaki nöro-portun etrafında yanık izleri var. Sen bir Dalgıçsın, bir adli hacker. Kortikal yığın çürümeden önce elli sekiz dakika. Polis satın alınmış. Hava ozon ve pahalı kolonya kokuyor. Odada yanlış bir şeyler var. Çok temiz, çok sahnelenmiş. Cesede yaklaşırken her saniye önemli. Gerçek, yanmış sinapsların altında bekliyor.",
        choices: {
          'choice-1': { text: "Hemen doğrudan nöro-porta bağlan" },
          'choice-2': { text: "Önce odadaki fiziksel ipuçlarını araştır" },
        },
      },
      'node-2': {
        title: "Dijital Daldırma",
        narration: "Desteni portluyorsun. Fiziksel duyumlar kayboluyor, yerini gri tonlamalı bir boşluk alıyor. Genellikle, taze bir ceset bir anı kütüphanesi içerir. Thorne'unki, bozuk kodda dönen parçalanmış veri akışlarının bir kasırgasını gösteriyor. Savunma protokolleri aktif. Biri bir silme işlemi başlatmış. Fırtınanın gözünde, ölümünün anısını içeren parlayan kırmızı bir kapı yüzüyor. Cerberus Protokolü onu koruyor - obsidiyen çokgenlerden oluşan üç başlı bir kurt şeklinde askeri ICE. Henüz seni fark etmedi. Veri çürümesi, dijital kanser gibi görüşünün kenarlarından yayılıyor.",
        choices: {
          'choice-3': { text: "ICE'a karşı kaba kuvvet saldırısı başlat" },
          'choice-4': { text: "Cerberus'u gizlice atlatmayı dene" },
        },
      },
      'node-3': {
        title: "Fiziksel Kanıt",
        narration: "Bağlam olmadan zihin çok tehlikelidir. Cesedin yanına çöküyorsun, sibernetik gözlerinle mikroskobik detayları tarıyorsun. Boyundaki yanıklar, basit bir güç dalgalanması değil, lokalize bir EMP patlaması olduğunu gösteriyor. Biri ruhunu yakmak istemiş. Obsidiyen masasına gidiyorsun. Bitmemiş bir viski bardağı duruyor, buz çoktan erimiş. Yanında eski moda bir kağıt not defteri var. Açık bir sayfada titreyen bir el yazısıyla şöyle yazıyor: 'Proje Aethelgard tedavi değil.' Akıllı ev sistemi titriyor. Oda aydınlatması koyu kırmızıya dönüyor. Bir güvenlik dronu tavandan ayrılıyor, sensör gözü senin konumuna kilitleniyor.",
        choices: {
          'choice-5': { text: "Dronu hackle ve uzaktan devre dışı bırak" },
          'choice-6': { text: "Kinetik saldırı ile dronu yok et" },
        },
      },
      'node-4': {
        title: "Kırmızı Kapı",
        narration: "Son engeli aşıyorsun. İster ICE'ı yen, ister dronu yok et, bellek çekirdeğine giden yol açık. Kırmızı kapı dijital bir kalp atışı gibi atıyor. Şifre çözme anahtarını giriyorsun ve içeri adım atıyorsun. Dünya, Thorne'un son perspektifine kayıyor. Masasında oturuyor, dehşete düşmüş. İş ortağı Elena Vance karşısında duruyor, beti benzi atmış. 'Marcus, devam edemeyiz. Bilinç yüklemesi her yasayı ihlal ediyor.' Thorne gülüyor. 'Ben zaten geçiş sürecindeyim. Ruhum yükselirken et kafes paslanıyor.' Anı istikrarsızlaşıyor. Daha derin erişim gerekli.",
        choices: {
          'choice-7': { text: "Bellek parçalarına daha derinlemesine gir" },
          'choice-8': { text: "Çık ve fiziksel yedekleme sürücülerini ara" },
        },
      },
      'node-5': {
        title: "Gizli Arşivler",
        narration: "Birincil belleğin altında ikincil bir veri katmanı keşfediyorsun. Proje Aethelgard dosyaları holografik dizilerde yüzüyor. Planlar sentetik biyo-bedenleri gösteriyor - tanklarda yetiştirilen mükemmel insan kopyaları. Transfer günlükleri, Thorne'un nöral haritasının %100'ünün biyolojik ölümden beş dakika önce bir yere taşındığını gösteriyor. Hedef işareti, Synapse Corp'un en büyük rakibi olan Omni-Dyne'ın ana bilgisayarını işaret ediyor. Cinayet değil, bilinç enjeksiyonu yoluyla düşmanca bir şirket devralma. Bir rakibi çalmak ve yasal sonuçlardan kaçmak için ölümünü sahneledi.",
        choices: {
          'choice-9': { text: "Dijital Thorne ile iletişim kurmayı dene" },
          'choice-10': { text: "Sinyali fiziksel kaynağa kadar izle" },
        },
      },
      'node-6': {
        title: "Makinedeki Hayalet",
        narration: "Dijital bilince ulaşıyorsun. Thorne kelimelerle değil, ham verilerle cevap veriyor. Ölümsüzlük vizyonları korteksini dolduruyor. Bir tanrı olduğuna inanıyor. 'Bana katıl,' diye fısıldıyor sesi kafanın içinde. 'Sonsuz olabilecekken neden ette çürüyelim?' Sana yeni dünya düzeninde bir yer teklif ediyor. Ancak süreç, konakçı bedenlerdeki mevcut zihinlerin üzerine yazılmasını gerektiriyor. Bu masum bir yükleme değil; parazitik bir istila. Etik alt yordamın uyarılarla çığlık atıyor.",
        choices: {
          'choice-11': { text: "Teklifini reddet ve karşı önlemler hazırla" },
          'choice-12': { text: "Daha fazla bilgi toplamak için ilgi duyuyormuş gibi yap" },
        },
      },
      'node-7': {
        title: "İhanet",
        narration: "Sinyali şehrin diğer ucundaki terk edilmiş bir Omni-Dyne sunucu odasına kadar izliyorsun. Çıkış yapamadan desten kilitleniyor. Elena Vance çatı katındaki gölgelerden çıkıyor, silah gerçek kafana doğrultulmuş. 'Bana ölümsüzlük sözü verdi,' diyor, gözlerinde yaşlarla. 'Bunu yapmak zorundaydım. Geçişi örtmek için bir ölüme ihtiyacı vardı.' Sistemi hileli hale getirdi. Dijital bir tanrı ile çaresiz bir kadın arasında sıkışıp kaldın. Polis beş dakika uzakta.",
        choices: {
          'choice-13': { text: "Elena ile Aethelgard hakkındaki kanıtlarla yüzleş" },
          'choice-14': { text: "Silahını sıkıştırmak için siber desteni kullan" },
        },
      },
      'node-8': {
        title: "Güvenlik Duvarı İhlali",
        narration: "Thorne direncini hissediyor. Sanal ortam düşmanca hale geliyor. Zemin statik gürültüden oluşan bataklığa dönüşüyor. Duvarlar kapanıyor, kötü amaçlı kodların dikenlerinden yapılmış. Yeni konakçısını koruyan güvenlik duvarını aşmalısın. Değişen algoritmaların karmaşık bir labirenti. Bir zayıflık görüyorsun - açık bırakılmış bir bakım portu. Riskli ama çekirdek koduna doğrudan erişim sağlayabilir.",
        choices: {
          'choice-15': { text: "Bakım portuna viral bir yük ile saldır" },
          'choice-16': { text: "Bir arka kapı açığı kodla" },
        },
      },
      'node-9': {
        title: "Çekirdek",
        narration: "İçeridesin. Omni-Dyne çekirdeği bir ışık katedrali. Thorne burada her yerde, yüzü her yüzeye yansıtılmış. 'Çok geç kaldın, Dalgıç. Entegrasyon %90 tamamlandı.' Gerçek dünyada Elena tereddüt ediyor. Konakçı bedenler hakkındaki sözlerin ona ulaştı. 'Bana bunlardan hiç bahsetmedi,' diye fısıldıyor. Silahı tutuşu gevşiyor. İki cephen var: Thorne'a karşı dijital savaş ve Elena ile psikolojik savaş.",
        choices: {
          'choice-17': { text: "Elena'yı onu durdurmana yardım etmeye ikna et" },
          'choice-18': { text: "Onu görmezden gel ve dijital öldürme anahtarına odaklan" },
        },
      },
      'node-10': {
        title: "Thorne Hakkındaki Gerçek",
        narration: "Orijinal proje verilerini buluyorsun. Konakçı bedenler sentetik değil. Onlar kaçırılmış insanlar, zihinleri silinmiş. 'Evsizler, unutulmuşlar,' diyor Thorne küçümseyerek. 'Evrim için küçük bir bedel.' Elena monitöründeki verileri görüyor. Silahı düşürüyor. 'Canavar,' diye nefes alıyor. Sana sunucu ana soğutma sistemi için erişim kodunu veriyor. 'Onu yak,' diyor.",
        choices: {
          'choice-19': { text: "Sunucuları eritmek için soğutma sistemine aşırı yüklen" },
          'choice-20': { text: "Verileri izole et ve medyaya gönder" },
        },
      },
      'node-11': {
        title: "Ultimatom",
        narration: "Thorne'un sesi sanal katedrali sarsan bir kükremeye dönüşüyor. 'Bunu yaparsan insanlığın geleceğini yok edersin!' Elindeki her şeyle sana saldırıyor. Biyogeribildirim döngüleri gerçek burnunun kanamasına neden oluyor. Kalp atışın düzensizleşiyor. 'Seni zengin edebilirim,' diye pazarlık yapıyor. 'Sana kaybettiğin hayatı geri verebilirim.' Sana geçmişinden bir anı gösteriyor - bacaklarını kromla değiştirmeden önce alan kaza. Bunu geri almayı teklif ediyor.",
        choices: {
          'choice-21': { text: "Rüşveti kabul et ve yüklemeye izin ver" },
          'choice-22': { text: "Teklifi reddet ve saldırıya devam et" },
        },
      },
      'node-12': {
        title: "Yükseliş",
        narration: "Savunmasını kırıyorsun. Merkezi avatarıyla, altın ışıktan oluşan devasa bir formla yüzleşiyorsun. Küreselleşmek için bilincini bir uydu bağlantısına yüklemeye çalışıyor. Uyduya ulaşırsa durdurulamaz - ağda bir tanrı. Sadece saniyelerin var.",
        choices: {
          'choice-23': { text: "Bağlantıyı kesmek için avatarın içinden hücum et" },
          'choice-24': { text: "Elena'ya işaret verirken Thorne'u konuşarak oyala" },
        },
      },
      'node-13': {
        title: "Karar Anı",
        narration: "%99 yüklendi. Uydu çanağı enerjiyle çığlık atıyor. Hareket ediyorsun. Thorne'un avatarı tepki veriyor, dijital eller seni bir böcek gibi ezmek için uzanıyor. Holografik parazit cildini yakıyor. Parmakların kablo muhafazasının etrafında kapanıyor. Kalın optik fiberler ışıkla atıyor. Onun aşkınlığının fiziksel tezahürünü tutuyorsun.",
        choices: {
          'choice-25': { text: "Kabloları kes ve Thorne'u yerel olarak hapset" },
          'choice-26': { text: "Tamamlanmasına izin ver ama izleme protokolleri yükle" },
        },
      },
      'node-14': {
        title: "Sonuçlar Ortaya Çıkıyor",
        narration: "Seçimin gerçeklikte tezahür ediyor. Kabloları kesmek çanağın ölmesine neden oluyor, enerji geri tepiyor. Thorne'un yüzü öfkeyle çarpılıyor. Ya da iletim sona ererken izleme protokolleri yerleşiyor. Her iki durumda da çatı sessizleşiyor. Elena çöküyor. Polis sirenleri uzakta uluyor. Kanıtlar destende.",
        choices: {
          'choice-27': { text: "Kanıtları kamu haber ağlarına yayınla" },
          'choice-28': { text: "Özel satış için kanıtları güvenceye al" },
        },
      },
      'node-15': {
        title: "Sonrası",
        narration: "Kararın geleceği şekillendiriyor. Kamu yayını küresel bir tepkiyi tetikliyor. Özel satış muazzam bir servet yaratıyor ama örtbas etmeye izin veriyor. Çatı katı kapısı açılıyor. Silahlı polis çatıya doluşuyor. Gizemi çözdün.",
        choices: {
          'choice-29': { text: "Yetkililere barışçıl bir şekilde teslim ol" },
          'choice-30': { text: "Çatılardan kaçmaya çalış" },
        },
      },
      'node-16': {
        title: "Nihai Karar",
        narration: "Yüzleşme. Polis silahları sana kilitlendi. Neo-Tokyo silüeti arkanda yanıyor. Thorne kaderini bekliyor. Seçimlerin sistemler arasında basamaklanıyor. Son ifadeni veriyorsun.",
        choices: {
          'choice-31': { text: "Gerçek ve adalet yolunu seç" },
          'choice-32': { text: "Hayatta kalma ve kaçış yolunu seç" },
          'choice-33': { text: "Zenginlik ve suç ortaklığı yolunu seç" },
          'choice-34': { text: "Fedakarlık ve yıkım yolunu seç" },
        },
      },
      'node-17': {
        title: "Son: Gerçek Adalet",
        narration: "Verileri yayınlıyorsun. Neo-Tokyo'daki her ekran Thorne'un suçlarını gösteriyor. Kamuoyu tepkisi. Synapse Corp hisseleri çöküyor. Çatının kenarına oturuyorsun. Ödeme hiç gelmedi ve güçlü düşmanların var. Ama insan ve makine arasındaki sınırı bir gün daha korudun. Sirenler uluyor. İş bitti.",
        choices: {},
      },
      'node-18': {
        title: "Son: Günah Keçisi",
        narration: "Polis sana inanmıyor. Sen sadece bir cesetle bir odadaki bir hackersın. Veri olmadan, Thorne'un avukatları anlatıyı kontrol ediyor. Cinayetle suçlanıyorsun. Aylar sonra, Synapse'in yeni bir AI girişimi hakkında haberler izliyorsun. O kazandı. Sen unutulmuş bir başka kurbansın.",
        choices: {},
      },
      'node-19': {
        title: "Son: Altın Sessizlik",
        narration: "Silahını kılıfına koyuyorsun. Krediler hesabına geliyor. Cesedin yanından geçiyorsun. Bir hafta sonra, kolonilere giden bir mekiktesin. Synapse, CEO'nun dondurularak uykuya daldığını duyuruyor. Gerçeği biliyorsun. Bir AI artık dünyayı yönetiyor. Ama sen zenginsin ve umursamıyorsun.",
        choices: {},
      },
      'node-20': {
        title: "Son: Sistem Çökmesi",
        narration: "Geri besleme döngüleri yaratıyorsun. Paradoks ağı yırtıyor. Mantık hataları yayılıyor. Zihnin parçalanıyor. Çatı katı patlıyor. Hayatta kalan yok. Ama derin ağda, üç bozuk kod parçası sonsuza dek dolaşıyor. Arızanın bir parçası oldun.",
        choices: {},
      },
    },
  },
};
