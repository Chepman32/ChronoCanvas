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

export const midnightMissingStoryTranslations: Record<
  Language,
  StoryTranslations
> = {
  en: {
    title: 'Midnight Missing',
    description:
      'When a young woman vanishes without a trace, a determined detective must navigate city shadows and unravel a web of clues before time runs out. Every decision could mean a life saved or a trail gone cold.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-1': {
        title: 'Missing at Midnight',
        narration:
          "A neon-lit clock strikes midnight as you sit in your cramped office, rain drumming on the window. The phone's ring shatters the silence – a panicked voice reports that **Emily Parker** is missing. Emily vanished from her apartment just hours ago. You grab your coat, heart pounding, knowing every minute counts. With the city asleep and clues already fading, you vow to uncover the truth before dawn.",
        choices: {
          'story-7481296-c1': {
            text: "Search Emily's apartment for clues",
            description: 'Her home may hide evidence of her disappearance',
          },
          'story-7481296-c2': {
            text: "Interview Emily's best friend, Ava",
            description: 'Maybe her friend knows something crucial',
          },
        },
      },
      'story-7481296-2': {
        title: 'Ransacked Home',
        narration:
          "Emily's apartment is eerily quiet. The door is unlocked and slightly ajar, a single lamp spilling light on a chaotic scene. Drawers hang open and belongings are strewn across the floor, as if someone left in a hurry. You step carefully over a toppled chair and notice two things: a crumpled business card from her **office coworker** on the coffee table, and a matchbook from **Serpent's Den Bar**, Emily's favorite late-night spot, lying near the door. The air is tense with the smell of spilled coffee and fear.",
        choices: {
          'story-7481296-c3': {
            text: "Examine the coworker's business card",
            description: 'Could a colleague have a motive?',
          },
          'story-7481296-c4': {
            text: "Head to the Serpent's Den Bar next",
            description: 'Follow the clue to the bar',
          },
        },
      },
      'story-7481296-3': {
        title: 'Desperate Confidant',
        narration:
          "At a quiet all-night diner, **Ava Mitchell** wrings her hands around a mug of cold coffee. Her eyes are red from crying and exhaustion. She explains that Emily had been anxious lately – she'd confided about a conflict with a **coworker** who had been acting strangely towards her. Ava also recalls Emily mentioning a **bar** she'd been visiting to meet someone, and hints at Emily's **ex-boyfriend** who had a bitter breakup with her last month. The possibilities swirl, and Ava pleads, \"Please, find her.\"",
        choices: {
          'story-7481296-c5': {
            text: 'Investigate the hostile coworker',
            description: 'Confront the colleague Emily feared',
          },
          'story-7481296-c6': {
            text: 'Check out the bar Emily frequented',
            description: 'She might have met someone dangerous there',
          },
          'story-7481296-c7': {
            text: "Speak with Emily's ex-boyfriend",
            description: 'A bad breakup could hide dark motives',
          },
        },
      },
      'story-7481296-4': {
        title: 'Office Suspicions',
        narration:
          "The city's financial tower looms overhead as you arrive at Emily's workplace. Inside, you confront **Alan Ridge**, her coworker. Alan's smile is thin and nervous under the fluorescent office lights. He insists he barely knew Emily outside work, but sweat beads on his brow. On his desk, you glimpse a document with Emily's name partly visible – quickly, Alan shuffles it away. A gut feeling tells you he's hiding something. As you probe about his after-hours activities, Alan's leg bounces anxiously under the table. You must decide how to handle this tense encounter.",
        choices: {
          'story-7481296-c8': {
            text: 'Press Alan aggressively for answers',
            description: 'Confront him head-on about Emily',
          },
          'story-7481296-c9': {
            text: 'Back off and snoop around discreetly',
            description: "Look for clues in his office when he's distracted",
          },
        },
      },
      'story-7481296-5': {
        title: 'Neon Trail',
        narration:
          "The **Serpent's Den Bar** throbs with low music and neon haze. As you push through the dimly lit crowd, you scan for any sign of Emily. The bartender eyes you warily while polishing a glass. In the corner, a hooded man watches the room intently, his posture stiffening when he notices your badge. The air smells of spilled beer and something acrid – fear, perhaps. You suspect either the bartender or that patron might know something. Every second here matters; Emily could have met her fate within these walls.",
        choices: {
          'story-7481296-c10': {
            text: 'Follow the hooded man quietly',
            description: 'He might lead you to a clue or suspect',
          },
          'story-7481296-c11': {
            text: 'Question the bartender for info',
            description: 'Maybe Emily mentioned something or was seen here',
          },
        },
      },
      'story-7481296-6': {
        title: 'Old Grudges',
        narration:
          "You find **Mark Wheeler**, Emily's ex, at his apartment, which is cluttered with moving boxes. Mark's jaw tightens at the mention of Emily. He claims he hasn't seen her in weeks, bitterness lingering in his voice. He points out that he was out of town tonight – an alibi you'll need to verify. As you look around, you notice a picture of them smiling together, now cracked and lying face-down on a shelf. Mark insists he'd never harm Emily, but there's anger in his eyes. It's unclear whether he's truly in the dark or hiding pain behind denial.",
        choices: {
          'story-7481296-c12': {
            text: 'Believe Mark and shift focus elsewhere',
            description: 'His emotions seem genuine; pursue other leads',
          },
          'story-7481296-c13': {
            text: "Press Mark, convinced he's lying",
            description: "Push harder, suspecting he's involved",
          },
        },
      },
      'story-7481296-7': {
        title: 'Flight and Fury',
        narration:
          'Alan\'s composure shatters under your barrage of questions. Suddenly, he bolts from his chair and dashes for the exit, panic in his eyes. "Stop!" you shout, racing after him through the empty office corridors. He shoves open the stairwell door, footsteps echoing as he descends frantically. Your heart pounds – he could be running straight to Emily, or trying to destroy evidence. The night air hits as he bursts out a side door into the parking garage. You skid to a halt, torn between tackling this now or taking a different approach as his car engine roars to life.',
        choices: {
          'story-7481296-c14': {
            text: 'Chase Alan down immediately',
            description: "Don't let him get away – pursue at all costs",
          },
          'story-7481296-c15': {
            text: 'Let him go and search his office',
            description: 'He left in a hurry – maybe he left clues behind',
          },
        },
      },
      'story-7481296-8': {
        title: 'Paper Trail',
        narration:
          "With Alan gone, his office is yours to scour. You slip on gloves and rifle through the scattered paperwork in the dim light. On his desk, you uncover Emily's personnel file and notes about a **\"Project Catalyst\"** – something Emily and Alan worked on together. There's also an address scrawled on a sticky note: an old **warehouse on the outskirts of town**. Your pulse quickens; this could be where he's headed with Emily. Outside, the city is dark and silent. You know you have a location – the only question is how you'll approach it.",
        choices: {
          'story-7481296-c16': {
            text: 'Rush to the warehouse alone',
            description: 'No time for backup; every second counts',
          },
          'story-7481296-c17': {
            text: 'Call the police for backup',
            description: 'Secure support before confronting a kidnapper',
          },
        },
      },
      'story-7481296-9': {
        title: 'Shadowing a Stranger',
        narration:
          "You decide to tail the hooded man. He slips out of the bar into a back alley and you follow at a cautious distance, heart thudding in your chest. He glances over his shoulder, then picks up pace when a distant siren wail pierces the night. You trail him through winding streets and derelict blocks until he reaches an old **warehouse** with broken windows on the city's edge. He disappears inside, leaving the metal door slightly ajar. The building stands silent, a hulking silhouette under the streetlights. You steel yourself — Emily could be in there.",
        choices: {
          'story-7481296-c18': {
            text: 'Remain hidden and observe',
            description: 'Gather intel quietly before acting',
          },
          'story-7481296-c19': {
            text: 'Confront him immediately',
            description: 'Burst in and catch him off guard',
          },
        },
      },
      'story-7481296-10': {
        title: 'Barroom Intel',
        narration:
          'You flash your badge at the bartender. He sighs, setting down a glass. "Emily? Yeah, I\'ve seen her around," he mutters, glancing nervously toward the door. He reveals that Emily was here earlier in the evening meeting a man in a dark hoodie. They left together and the man mentioned heading to "the **old warehouse by the docks**" while settling his tab. Your stomach drops – a location at last. As you turn to leave, the bartender grips your arm, voice low: "Be careful. Those people... they\'re dangerous." You step out into the night, rain on your face, armed with a crucial lead.',
        choices: {
          'story-7481296-c20': {
            text: 'Drive straight to the docks warehouse',
            description: 'Speed to the location alone',
          },
          'story-7481296-c21': {
            text: 'Alert the police and wait for backup',
            description: 'Go with reinforcement to the warehouse',
          },
        },
      },
      'story-7481296-11': {
        title: 'Dead-End Dedication',
        narration:
          "Convinced that Mark is hiding the truth, you spend precious hours digging into his alibi and past. You shadow him, search his social media, even call in a favor to pull his phone records. But as dawn approaches, it becomes painfully clear that Mark truly had nothing to do with Emily's disappearance – the time wasted is a heavy weight on your shoulders. An early morning call from headquarters informs you that the coworker, Alan, is now missing as well, and new evidence points back to that warehouse lead. You realize your focus on Mark might have cost you dearly in this race against time.",
        choices: {
          'story-7481296-c22': {
            text: 'Refocus and race to the warehouse now',
            description: "It's almost too late but you head there immediately",
          },
          'story-7481296-c23': {
            text: "It's over – you've lost too much time",
            description: 'Admit defeat as the trail goes cold',
          },
        },
      },
      'story-7481296-12': {
        title: 'High-Speed Pursuit',
        narration:
          "Tires screech as you chase Alan's car through the deserted city streets. Neon signs and traffic lights blur past. Alan drives like a madman, desperate to shake you. Ahead, you see him veering towards an industrial area – likely the warehouse district by the docks. Your car's engine howls as you close the distance. In the beam of your headlights, Alan's face is a mask of terror glancing from his rearview mirror. Adrenaline surges; this is your chance to end this chase, but one wrong move could be fatal for Emily if she's with him.",
        choices: {
          'story-7481296-c24': {
            text: 'Force him off the road',
            description: 'Stop the car at any cost, even if it crashes',
          },
          'story-7481296-c25': {
            text: 'Follow him from a distance',
            description: 'Stay on his tail to see where he goes',
          },
        },
      },
      'story-7481296-13': {
        title: 'At the Hideout',
        narration:
          "You arrive at the old warehouse just as purple-gray dawn light touches the horizon. The building stands silent and decrepit, its corrugated metal walls streaked with rust. Through a high window, you catch a glimpse of movement inside – a shadow pacing. Your heart leaps, thinking it could be Emily or her captor. The front entrance is a heavy sliding door, slightly ajar. You stand alone in the chill morning air; your backup is still minutes away or nonexistent. Steeling yourself, you draw your weapon, knowing Emily's fate lies just beyond that door.",
        choices: {
          'story-7481296-c26': {
            text: 'Enter silently through the side door',
            description: 'Use stealth to catch them off guard',
          },
          'story-7481296-c27': {
            text: 'Rush in through the main entrance',
            description: 'Surprise them with a direct approach',
          },
        },
      },
      'story-7481296-14': {
        title: 'SWAT at Dawn',
        narration:
          "Red and blue lights flash across the deserted docks as two patrol cars and a SWAT van roll in to back you up. Armed officers silently surround the warehouse, their boots crunching on gravel. The commanding officer whispers the plan: a coordinated breach on your signal. Inside, a muffled cry – it must be Emily. You stand at the warehouse's side entrance, adrenaline coursing, with a team at the front. The sun edges over the horizon, illuminating the tense faces around you. This is it – one decisive move will end this nightmare, one way or another.",
        choices: {
          'story-7481296-c28': {
            text: 'Breach quietly and take them by surprise',
            description: 'Coordinate a silent entry with the team',
          },
          'story-7481296-c29': {
            text: 'Go loud with a full-force raid',
            description: 'Storm in guns drawn, overwhelming any resistance',
          },
        },
      },
      'story-7481296-15': {
        title: 'Silent Entry',
        narration:
          "You slip into the warehouse's shadowy interior as quietly as a ghost. Whether alone or with a couple of officers at your back, you move between stacks of dusty crates. In the dim light, you finally spot **Emily**: tied to a chair at the center of the floor, eyes wide above a gag. **Alan Ridge** stands nearby, nervously checking his phone – likely awaiting orders or a ransom response. He hasn't noticed you yet. Emily locks eyes with you for a split second, hope and fear mingled. You have the element of surprise, but a single misstep could put Emily in jeopardy.",
        choices: {
          'story-7481296-c30': {
            text: 'Overpower Alan first',
            description: 'Neutralize the threat before tending to Emily',
          },
          'story-7481296-c31': {
            text: 'Free Emily immediately',
            description: 'Prioritize getting Emily out of danger',
          },
        },
      },
      'story-7481296-16': {
        title: 'Guns Blazing',
        narration:
          'With a shout of "Police!" you and the team charge through the warehouse entrance. The rusted door clangs as it slams against the wall. Alan whips around in alarm. He grabs Emily, yanking her up as a human shield, his hand trembling as it presses a knife to her throat. "Stay back!" he shrieks, panic in his voice. Your heart pounds. Guns are trained on Alan, your finger on your trigger. Emily\'s eyes glisten with tears as the standoff freezes in a deadly tableau. One wrong move now could spell disaster for everyone.',
        choices: {
          'story-7481296-c32': {
            text: 'Take the shot at Alan',
            description: 'Use force to end this quickly',
          },
          'story-7481296-c33': {
            text: 'Try to talk him down',
            description: 'Negotiate and stall, seeking a safer resolution',
          },
        },
      },
      'story-7481296-17': {
        title: 'Rescue and Justice',
        narration:
          "Seizing the moment of distraction, you lunge from the shadows and tackle **Alan** to the ground. He yelps in surprise – the knife skitters away across the concrete. Within seconds you have him restrained, adrenaline fueling your strength. Backup officers rush in (or your sheer determination suffices) to secure him in handcuffs. **Emily** sobs with relief as you free her from the ropes. She's shaken but alive, clinging to you as the morning light spills in. Alan, the orchestrator of the kidnapping, is led away in cuffs, and Emily is safe at last. **You solved the case and saved Emily, delivering justice as dawn breaks.**",
        choices: {},
      },
      'story-7481296-18': {
        title: 'Narrow Escape',
        narration:
          "You rush directly to **Emily**, sawing through the ropes with anything you can grab. \"It's okay, I'm here,\" you whisper as her bonds loosen. But in that split second of focus on Emily, **Alan** seizes the opportunity – he bolts for a back exit, disappearing into the maze of crates. By the time you ensure Emily is safe and pursue, he's gone. Outside, only the pale morning greets you. Emily is saved, trembling in your arms, but her kidnapper vanished into the city's shadows. Paramedics arrive to tend to Emily's minor injuries. She will recover, thanks to you, but **Alan remains at large, leaving an unfinished chapter in the case.**",
        choices: {},
      },
      'story-7481296-19': {
        title: 'Pyrrhic Victory',
        narration:
          'Time slows as you squeeze the trigger. The gunshot echoes through the cavernous warehouse. **Alan** staggers backward, the knife dropping from his hand. Your shot strikes true, incapacitating him before he could harm **Emily**. Officers swarm in and Emily runs toward you, but not before a stray piece of shrapnel from the concrete grazes her side. She winces in pain, bleeding lightly – hurt but alive. Alan lies on the floor, wounded and moaning. As medics are called, you wrap Emily in a blanket. **The kidnapper is stopped permanently, and Emily is saved, but the violent end leaves you with a hollow feeling as dawn breaks.**',
        choices: {},
      },
      'story-7481296-20': {
        title: 'Tragic Standoff',
        narration:
          "\"Alan, it doesn't have to end like this,\" you plead, lowering your weapon slightly. Your words hang in the air as dawn's first rays slip through the cracks of the warehouse walls. But Alan's desperation has reached its peak. In a blur, he drags **Emily** toward a side door. Your team moves in too late – Alan shoves Emily into a waiting van and it screeches away before you can fire a shot. You give chase, but the vehicle vanishes down labyrinthine streets. By the time an alert is issued, they're gone without a trace. The warehouse stands empty, and you're left alone in the feeble morning light with only guilt as company. **Emily remains missing, the trail gone cold due to one hesitant moment.**",
        choices: {},
      },
      'story-7481296-21': {
        title: 'Case Cold',
        narration:
          "Exhausted and defeated, you sit in your car as the first light of day creeps over the skyline. Leads have dried up and precious hours were lost chasing the wrong trail. **Emily Parker's** face stares at you from a missing person flyer on the seat beside you. In the days that follow, the case grows colder; Alan vanishes from his apartment, and no new evidence emerges. Every night, you replay your choices, wondering what vital clue you overlooked while pursuing Mark. The police continue the search, but hope dwindles. **You'll carry the weight of this unfinished investigation, a harsh reminder that in the world of detective work, not every mystery finds its answer.**",
        choices: {},
      },
    },
  },

  ru: {
    title: 'Пропавшая в полночь',
    description:
      'Когда молодая женщина бесследно исчезает, решительный детектив должен пройти через тени города и распутать паутину улик, пока не стало слишком поздно. Каждое решение может означать спасенную жизнь или потерянный след.',
    author: 'Морган Стил',
    nodes: {
      'story-7481296-1': {
        title: 'Пропавшая в полночь',
        narration:
          'Неоновые часы показывают полночь, когда вы сидите в своем тесном офисе, а дождь барабанит по окну. Звонок телефона разрывает тишину — паникующий голос сообщает, что **Эмили Паркер** пропала. Эмили исчезла из своей квартиры всего несколько часов назад. Вы хватаете пальто, сердце бешено колотится, зная, что каждая минута на счету. Город спит, а улики уже исчезают, но вы клянетесь раскрыть правду до рассвета.',
        choices: {},
      },
      'story-7481296-2': {
        title: 'Разгромленный дом',
        narration:
          'Квартира Эмили зловеще тиха. Дверь не заперта и слегка приоткрыта, одинокая лампа проливает свет на хаотичную сцену. Ящики выдвинуты, вещи разбросаны по полу, словно кто-то уходил в спешке. Вы осторожно переступаете через опрокинутый стул и замечаете две вещи: смятую визитку её **коллеги по работе** на журнальном столике и коробок спичек из **бара «Змеиное логово»**, любимого ночного места Эмили, лежащий у двери. Воздух напряжен запахом пролитого кофе и страха.',
        choices: {},
      },
      'story-7481296-3': {
        title: 'Отчаявшаяся подруга',
        narration:
          'В тихой круглосуточной закусочной **Ава Митчелл** нервно сжимает кружку с холодным кофе. Её глаза красные от слез и усталости. Она объясняет, что Эмили в последнее время была встревожена — она доверилась Аве о кон��ликте с **коллегой**, который странно себя вел по отношению к ней. Ава также вспоминает, что Эмили упоминала **бар**, который она посещала, чтобы встретиться с кем-то, и намекает на **бывшего парня** Эмили, который тяжело пережил расставание с ней в прошлом месяце. Версии кружатся в голове, и Ава умоляет: «Пожалуйста, найдите её».',
        choices: {
          'story-7481296-c5': {
            text: 'Проверить враждебно настроенного коллегу',
            description: 'Противостоять коллеге, которого боялась Эмили',
          },
          'story-7481296-c6': {
            text: 'Проверить бар, который посещала Эмили',
            description: 'Она могла встретить там кого-то опасного',
          },
        },
      },
      'story-7481296-4': {
        title: 'Подозрения в офисе',
        narration:
          'Городской финансовый небоскреб возвышается над головой, когда вы прибываете на рабочее место Эмили. Внутри вы сталкиваетесь с **Аланом Риджем**, её коллегой. Улыбка Алана натянутая и нервная под флуоресцентным светом офиса. Он настаивает, что едва знал Эмили вне работы, но пот выступает на его лбу. На его столе вы замечаете документ с частично видимым именем Эмили — быстро Алан убирает его. Интуиция подсказывает, что он что-то скрывает. Когда вы расспрашиваете о его действиях после работы, нога Алана нервно подпрыгивает под столом. Вы должны решить, как справиться с этой напряженной встречей.',
        choices: {
          'story-7481296-c8': {
            text: 'Агрессивно надавить на Алана',
            description: 'Противостоять ему напрямую насчет Эмили',
          },
          'story-7481296-c9': {
            text: 'Отступить и незаметно осмотреться',
            description: '',
          },
        },
      },
      'story-7481296-5': {
        title: 'Неоновый след',
        narration:
          '**Бар «Змеиное логово»** пульсирует тихой музыкой и неоновой дымкой. Пробираясь сквозь слабо освещенную толпу, вы ищете любой признак Эмили. Бармен настороженно смотрит на вас, полируя стакан. В углу мужчина в капюшоне внимательно наблюдает за залом, его поза напрягается, когда он замечает ваш жетон. Воздух пахнет пролитым пивом и чем-то едким — страхом, возможно. Вы подозреваете, что либо бармен, либо этот посетитель могут что-то знать. Здесь важна каждая секунда; Эмили могла встретить свою судьбу в этих стенах.',
        choices: {
          'story-7481296-c10': {
            text: 'Тихо последовать за мужчиной в капюшоне',
            description: 'Он может привести к улике или подозреваемому',
          },
          'story-7481296-c11': {
            text: 'Расспросить бармена',
            description: 'Может быть, Эмили что-то упомянула или её видели здесь',
          },
        },
      },
      'story-7481296-6': {
        title: 'Старая обида',
        narration:
          'Вы находите **Марка Уилера**, бывшего парня Эмили, в его квартире, заваленной коробками для переезда. Челюсть Марка напрягается при упоминании Эмили. Он утверждает, что не видел её несколько недель, в его голосе сохраняется горечь. Он указывает, что был за городом этой ночью — алиби, которое вам нужно проверить. Оглядываясь, вы замечаете фотографию, где они вместе улыбаются, теперь треснувшую и лежащую лицом вниз на полке. Марк настаивает, что никогда не причинил бы вреда Эмили, но в его глазах гнев. Неясно, действительно ли он не в курсе или скрывает боль за отрицанием.',
        choices: {
          'story-7481296-c12': {
            text: 'Поверить Марку и переключить внимание',
            description: 'Его эмоции кажутся искренними; следуйте другим зацепкам',
          },
        },
      },
      'story-7481296-7': {
        title: 'Бегство и ярость',
        narration:
          'Самообладание Алана разрушается под вашим натиском вопросов. Внезапно он срывается со стула и бросается к выходу, паника в глазах. «Стой!» — кричите вы, преследуя его по пустым офисным коридорам. Он распахивает дверь в лестничную клетку, шаги эхом отдаются, пока он лихорадочно спускается вниз. Сердце колотится — он может бежать прямо к Эмили или пытаться уничтожить улики. Ночной воздух бьет в лицо, когда он выбегает через боковую дверь на парковку. Вы останавливаетесь, разрываясь между тем, чтобы поймать его сейчас или выбрать другой подход, пока ревет двигатель его машины.',
        choices: {
          'story-7481296-c14': {
            text: 'Немедленно преследовать Алана',
            description: '',
          },
          'story-7481296-c15': {
            text: 'Отпустить его и обыскать офис',
            description: 'Он уходил в спешке — может оставил улики',
          },
        },
      },
      'story-7481296-8': {
        title: 'Бумажный след',
        narration:
          'Когда Алан ушел, его офис в вашем распоряжении. Вы надеваете перчатки и роетесь в разбросанных бумагах в тусклом свете. На его столе вы обнаруживаете личное дело Эмили и заметки о каком-то **«Проекте Катализатор»** — над чем Эмили и Алан работали вместе. Также есть адрес, нацарапанный на стикере: старый **склад на окраине города**. Пульс учащается; возможно, име��но туда он направляется с Эмили. Снаружи город темный и тихий. Вы знаете местоположение — единственный вопрос, как к нему подойти.',
        choices: {
          'story-7481296-c16': {
            text: 'Мчаться на склад в одиночку',
            description: 'Нет времени на подкрепление; на счету каждая секунда',
          },
          'story-7481296-c17': {
            text: 'Вызвать полицию для подкрепления',
            description: 'Обеспечить поддержку перед противостоянием с похитителем',
          },
        },
      },
      'story-7481296-9': {
        title: 'Слежка за незнакомцем',
        narration:
          'Вы решаете последовать за мужчиной в капюшоне. Он выскальзывает из бара в задний переулок, и вы следуете на осторожном расстоянии, сердце стучит в груди. Он оглядывается через плечо, затем ускоряет шаг, когда вой далекой сирены пронзает ночь. Вы следуете за ним по извилистым улицам и заброшенным кварталам, пока он не достигает старого **склада** с разбитыми окнами на окраине города. Он исчезает внутри, оставляя металлическую дверь слегка приоткрытой. Здание стоит молча, громоздкий силуэт под уличными фонарями. Вы готовитесь — Эмили может быть там.',
        choices: {
          'story-7481296-c18': {
            text: 'Остаться в укрытии и наблюдать',
            description: 'Тихо собрать информацию перед действием',
          },
          'story-7481296-c19': {
            text: 'Немедленно противостоять ему',
            description: 'Ворваться и застать врасплох',
          },
        },
      },
      'story-7481296-10': {
        title: 'Информация из бара',
        narration:
          'Вы показываете жетон бармену. Он вздыхает, ставя стакан. «Эмили? Да, я видел её здесь», — бормочет он, нервно поглядывая на дверь. Он сообщает, что Эмили была здесь раньше вечером, встречаясь с мужчиной в темной толстовке. Они ушли вместе, и мужчина упомянул о направлении к «**старому складу у доков**», расплачиваясь. У вас замирает сердце — наконец местоположение. Когда вы поворачиваетесь, чтобы уйти, бармен хватает вас за руку, голос низкий: «Будьте осторожны. Эти люди... они опасны». Вы выходите в ночь, дождь на лице, вооруженный важной зацепкой.',
        choices: {
          'story-7481296-c20': {
            text: 'Ехать прямо на склад у доков',
            description: 'Мчаться к местоположению в одиночку',
          },
          'story-7481296-c21': {
            text: 'Предупредить полицию и ждать подкрепления',
            description: 'Идти с подкреплением на склад',
          },
        },
      },
      'story-7481296-11': {
        title: 'Тупиковая преданность',
        narration:
          'Убежденный, что Марк скрывает правду, вы тратите драгоценные часы, копаясь в его алиби и прошлом. Вы следите за ним, изучаете его социальные сети, даже вызываете услугу, чтобы получить его телефонные записи. Но когда приближается рассвет, становится болезненно ясно, что Марк действительно не имел никакого отношения к исчезновению Эмили — потраченное время тяжелым грузом ложится на плечи. Ранним утром звонок из штаба сообщает, что коллега Алан теперь тоже пропал, и новые улики снова указывают на тот склад. Вы понимаете, что ваше внимание к Марку могло дорого вам обойтись в этой гонке со временем.',
        choices: {
          'story-7481296-c22': {
            text: 'Перефокусироваться и мчаться на склад',
            description: '',
          },
        },
      },
      'story-7481296-12': {
        title: 'Высокоскоростная погоня',
        narration:
          'Шины визжат, когда вы преследуете машину Алана по пустынным городским улицам. Неоновые вывески и светофоры мелькают мимо. Алан едет как безумец, отчаянно пытаясь оторваться от вас. Впереди вы видите, как он сворачивает в промышленную зону — вероятно, складской район у доков. Двигатель вашей машины воет, когда вы сокращаете дистанцию. В луче фар лицо Алана — маска ужаса, поглядывающее из зеркала заднего вида. Адреналин зашкаливает; это ваш шанс закончить эту погоню, но одно неверное движение может оказаться фатальным для Эмили, если она с ним.',
        choices: {
          'story-7481296-c24': {
            text: 'Вытолкнуть его с дороги',
            description: 'Остановить машину любой ценой, даже если она разобьется',
          },
          'story-7481296-c25': {
            text: 'Следовать за ним на расстоянии',
            description: 'Держаться на хвосте, чтобы увидеть, куда он направляется',
          },
        },
      },
      'story-7481296-13': {
        title: 'У убежища',
        narration:
          'Вы прибываете на старый склад как раз когда пурпурно-серый рассветный свет касается горизонта. Здание стоит молчаливое и ветхое, его гофрированные металлические стены покрыты ржавчиной. Через высокое окно вы замечаете движение внутри — тень шагает. Сердце подскакивает, думая, что это может быть Эмили или её похититель. Главный вход — тяжелая раздвижная дверь, слегка приоткрытая. Вы стоите один в холодном утреннем воздухе; ваше подкрепление все еще в нескольких минутах или вообще отсутствует. Собираясь с духом, вы достаете оружие, зная, что судьба Эмили лежит прямо за той дверью.',
        choices: {
          'story-7481296-c26': {
            text: 'Войти тихо через боковую дверь',
            description: 'Использовать скрытность, чтобы застать их врасплох',
          },
          'story-7481296-c27': {
            text: 'Ворваться через главный вход',
            description: 'Удивить их прямым подходом',
          },
        },
      },
      'story-7481296-14': {
        title: 'SWAT на рассвете',
        narration:
          'Красные и синие огни мерцают над пустынными доками, когда два патрульных автомобиля и фургон спецназа прибывают для поддержки. Вооруженные офицеры молча окружают склад, их ботинки хрустят по гравию. Командир шепчет план: скоординированный штурм по вашему сигналу. Внутри приглушенный крик — это должна быть Эмили. Вы стоите у бокового входа склада, адреналин пульсирует, команда у переднего входа. Солнце выглядывает над горизонтом, освещая напряженные лица вокруг вас. Вот оно — одно решающее движение закончит этот кошмар, так или иначе.',
        choices: {
          'story-7481296-c28': {
            text: 'Войти тихо и застать врасплох',
            description: 'Скоординировать тихий вход с командой',
          },
          'story-7481296-c29': {
            text: 'Идти громко с полномасштабным рейдом',
            description: 'Ворваться с оружием наготове, подавляя любое сопротивление',
          },
        },
      },
      'story-7481296-15': {
        title: 'Тихий вход',
        narration:
          'Вы проскальзываете в темный интерьер склада тихо, как призрак. Один или с парой офицеров за спиной, вы двигаетесь между стопками пыльных ящиков. В тусклом свете вы наконец замечаете **Эмили**: привязанную к стулу в центре пола, глаза широко раскрыты над кляпом. **Алан Ридж** стоит рядом, нервно проверяя телефон — вероятно, ожидая приказов или ответа о выкупе. Он вас еще не заметил. Эмили на секунду встречается с вами взглядом, надежда и страх смешиваются. У вас есть элемент внезапности, но один неверный шаг может подвергнуть Эмили опасности.',
        choices: {
          'story-7481296-c30': {
            text: 'Сначала обезвредить Алана',
            description: 'Нейтрализовать угрозу перед тем, как помочь Эмили',
          },
          'story-7481296-c31': {
            text: 'Немедленно освободить Эмили',
            description: 'Приоритет — вывести Эмили из опасности',
          },
        },
      },
      'story-7481296-16': {
        title: 'С пушками наперевес',
        narration:
          'С криком «Полиция!» вы и команда врываетесь через вход в склад. Ржавая дверь грохочет, ударяясь о стену. Алан резко оборачивается в тревоге. Он хватает Эмили, поднимая её как живой щит, его рука дрожит, прижимая нож к её горлу. «Назад!» — визжит он в панике. Сердце колотится. Оружие направлено на Алана, ваш палец на спусковом крючке. Глаза Эмили блестят от слез, пока противостояние застывает в смертельной картине. Одно неверное движение теперь может означать катастрофу для всех.',
        choices: {
          'story-7481296-c32': {
            text: 'Выстрелить в Алана',
            description: 'Использовать силу, чтобы быстро закончить это',
          },
          'story-7481296-c33': {
            text: 'Попытаться уговорить его',
            description: 'Вести переговоры и тянуть время, ища более безопасное решение',
          },
        },
      },
      'story-7481296-17': {
        title: 'Спасение и правосудие',
        narration:
          'Воспользовавшись моментом отвлечения, вы выпрыгиваете из тени и валите **Алана** на землю. Он вскрикивает от удивления — нож скользит по бетону. Через несколько секунд вы его удерживаете, адреналин питает вашу силу. Офицеры подкрепления врываются (или вашей решимости достаточно), чтобы надеть на него наручники. **Эмили** рыдает от облегчения, когда вы освобождаете её от веревок. Она потрясена, но жива, цепляясь за вас, пока утренний свет проникает внутрь. Алан, организатор похищения, уводят в наручниках, и Эмили наконец в безопасности. **Вы раскрыли дело и спасли Эмили, восстановив справедливость с наступлением рассвета.**',
        choices: {},
      },
      'story-7481296-18': {
        title: 'Чудесное спасение',
        narration:
          'Вы бросаетесь прямо к **Эмили**, разрезая веревки всем, что можете схватить. «Всё хорошо, я здесь», — шепчете вы, когда её путы ослабевают. Но в ту долю секунды сосредоточенности на Эмили **Алан** использует возможность — он бросается к заднему выходу, исчезая в лабиринте ящиков. К тому времени, как вы убеждаетесь, что Эмили в безопасности, и начинаете преследование, его уже нет. Снаружи вас встречает только бледное утро. Эмили спасена, дрожащая в ваших руках, но её похититель растворился в тенях города. Приезжают парамедики, чтобы помочь Эмили с легкими травмами. Она выздоровеет благодаря вам, но **Алан остается на свободе, оставляя незавершенную главу в деле.**',
        choices: {},
      },
      'story-7481296-19': {
        title: 'Пиррова победа',
        narration:
          'Время замедляется, когда вы на��имаете на спусковой крючок. Выстрел эхом отдается по пещеристому складу. **Алан** отступает назад, нож выпадает из его руки. Ваш выстрел попадает точно, обезвреживая его до того, как он смог причинить вред **Эмили**. Офицеры врываются, и Эмили бежит к вам, но не раньше, чем осколок от бетона царапает её бок. Она морщится от боли, слегка кровоточит — ранена, но жива. Алан лежит на полу, раненый и стонущий. Когда вызывают медиков, вы укутываете Эмили в одеяло. **Похититель остановлен навсегда, и Эмили спасена, но жестокий конец оставляет вас с пустым чувством, когда наступает рассвет.**',
        choices: {},
      },
      'story-7481296-20': {
        title: 'Трагическое противостояние',
        narration:
          '«Алан, это не должно так закончиться», — умоляете вы, слегка опуская оружие. Ваши слова повисают в воздухе, когда первые лучи рассвета проскальзывают через трещины в стенах склада. Но отчаяние Алана достигло пика. В мгновение ока он тащит **Эмили** к боковой двери. Ваша команда действует слишком поздно — Алан толкает Эмили в ожидающий фургон, и он уносится прочь, прежде чем вы успеваете выстрелить. Вы преследуете, но машина исчезает по лабиринтным улицам. К тому времени, как объявляется тревога, они исчезли без следа. Склад стоит пустым, и вы остаетесь один в слабом утреннем свете только с виной в качестве компании. **Эмили остается пропавшей, след остыл из-за одного нерешительного момента.**',
        choices: {},
      },
      'story-7481296-21': {
        title: 'Дело остыло',
        narration:
          'Измученный и побежденный, вы сидите в машине, когда первый свет дня ползет над горизонтом. Зацепки иссякли, и драгоценные часы были потеряны, преследуя неправильный след. Лицо **Эмили Паркер** смотрит на вас с листовки о пропавшем человеке на сиденье рядом. В последующие дни дело становится всё холоднее; Алан исчезает из своей квартиры, и не появляется новых улик. Каждую ночь вы прокручиваете свои решения, задаваясь вопросом, какую жизненно важную улику вы упустили, преследуя Марка. Полиция продолжает поиски, но надежда тает. **Вы будете нести груз этого незавершенного расследования, суровое напоминание о том, что в мире детективной работы не каждая тайна находит свой ответ.**',
        choices: {},
      },
    },
  },
};
