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
  // English (Original)
  en: {
    title: 'Midnight Missing',
    description:
      'When a young woman vanishes without a trace, a determined detective must navigate city shadows and unravel a web of clues before time runs out. Every decision could mean a life saved or a trail gone cold.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-1': {
        title: 'Missing at Midnight',
        narration:
          "A neon-lit clock strikes midnight as you sit in your cramped office, rain drumming on the window. The phone's ring shatters the silence – a panicked voice reports that Emily Parker is missing. Emily vanished from her apartment just hours ago. You grab your coat, heart pounding, knowing every minute counts. With the city asleep and clues already fading, you vow to uncover the truth before dawn.",
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
          "Emily's apartment is eerily quiet. The door is unlocked and slightly ajar, a single lamp spilling light on a chaotic scene. Drawers hang open and belongings are strewn across the floor, as if someone left in a hurry. You step carefully over a toppled chair and notice two things: a crumpled business card from her office coworker on the coffee table, and a matchbook from Serpent's Den Bar, Emily's favorite late-night spot, lying near the door. The air is tense with the smell of spilled coffee and fear.",
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
          "At a quiet all-night diner, Ava Mitchell wrings her hands around a mug of cold coffee. Her eyes are red from crying and exhaustion. She explains that Emily had been anxious lately – she'd confided about a conflict with a coworker who had been acting strangely towards her. Ava also recalls Emily mentioning a bar she'd been visiting to meet someone, and hints at Emily's ex-boyfriend who had a bitter breakup with her last month. The possibilities swirl, and Ava pleads, \"Please, find her.\"",
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
      'story-7481296-17': {
        title: 'Rescue and Justice',
        narration:
          "Seizing the moment of distraction, you lunge from the shadows and tackle Alan to the ground. He yelps in surprise – the knife skitters away across the concrete. Within seconds you have him restrained, adrenaline fueling your strength. Backup officers rush in to secure him in handcuffs. Emily sobs with relief as you free her from the ropes. She's shaken but alive, clinging to you as the morning light spills in. Alan, the orchestrator of the kidnapping, is led away in cuffs, and Emily is safe at last. You solved the case and saved Emily, delivering justice as dawn breaks.",
        choices: {},
      },
    },
  },

  // Russian (Русский)
  ru: {
    title: 'Пропавшая в полночь',
    description:
      'Когда молодая женщина бесследно исчезает, решительный детектив должен пройти сквозь городские тени и распутать паутину улик, пока не истекло время. Каждое решение может означать спасённую жизнь или потерянный след.',
    author: 'Морган Стил',
    nodes: {
      'story-7481296-1': {
        title: 'Пропажа в полночь',
        narration:
          'Неоновые часы бьют полночь, пока вы сидите в своём тесном офисе под барабанную дробь дождя по окну. Звонок телефона разрывает тишину – паникующий голос сообщает, что Эмили Паркер пропала. Эмили исчезла из своей квартиры всего несколько часов назад. Вы хватаете пальто, сердце колотится – каждая минута на счету. Пока город спит, а улики уже исчезают, вы клянётесь раскрыть правду до рассвета.',
        choices: {
          'story-7481296-c1': {
            text: 'Обыскать квартиру Эмили в поисках улик',
            description: 'Её дом может скрывать доказательства исчезновения',
          },
          'story-7481296-c2': {
            text: 'Допросить лучшую подругу Эмили, Аву',
            description: 'Возможно, её подруга знает что-то важное',
          },
        },
      },
      'story-7481296-2': {
        title: 'Разгромленный дом',
        narration:
          'В квартире Эмили жутко тихо. Дверь не заперта и приоткрыта, единственная лампа освещает хаотичную сцену. Ящики открыты, вещи разбросаны по полу, словно кто-то уходил в спешке. Вы осторожно переступаете через опрокинутый стул и замечаете две вещи: мятую визитку её коллеги по работе на журнальном столике и спичечный коробок из бара "Логово Змея", любимого ночного заведения Эмили, лежащий у двери. Воздух напряжён запахом пролитого кофе и страха.',
        choices: {
          'story-7481296-c3': {
            text: 'Изучить визитку коллеги',
            description: 'Может ли у коллеги быть мотив?',
          },
          'story-7481296-c4': {
            text: 'Отправиться в бар "Логово Змея"',
            description: 'Следовать за уликой в бар',
          },
        },
      },
      'story-7481296-3': {
        title: 'Отчаявшаяся подруга',
        narration:
          'В тихой круглосуточной закусочной Ава Митчелл нервно сжимает кружку с холодным кофе. Её глаза красные от слёз и усталости. Она объясняет, что Эмили в последнее время была встревожена – она рассказывала о конфликте с коллегой, который странно себя вёл по отношению к ней. Ава также вспоминает, что Эмили упоминала бар, который она посещала, чтобы встретиться с кем-то, и намекает на бывшего парня Эмили, с которым у неё был тяжёлый разрыв в прошлом месяце. Возможности кружатся в голове, и Ава умоляет: "Пожалуйста, найдите её".',
        choices: {
          'story-7481296-c5': {
            text: 'Расследовать враждебного коллегу',
            description: 'Противостоять коллеге, которого боялась Эмили',
          },
          'story-7481296-c6': {
            text: 'Проверить бар, который посещала Эмили',
            description: 'Она могла встретить там кого-то опасного',
          },
          'story-7481296-c7': {
            text: 'Поговорить с бывшим парнем Эмили',
            description: 'Тяжёлый разрыв может скрывать тёмные мотивы',
          },
        },
      },
      'story-7481296-17': {
        title: 'Спасение и справедливость',
        narration:
          'Воспользовавшись моментом отвлечения, вы выпрыгиваете из тени и сбиваете Алана на землю. Он вскрикивает от неожиданности – нож отлетает по бетону. За считанные секунды вы обездвиживаете его, адреналин придаёт вам силы. Офицеры подкрепления врываются и надевают на него наручники. Эмили рыдает от облегчения, когда вы освобождаете её от верёвок. Она потрясена, но жива, цепляясь за вас, пока утренний свет проникает внутрь. Алана, организатора похищения, уводят в наручниках, и Эмили наконец в безопасности. Вы раскрыли дело и спасли Эмили, восстановив справедливость на рассвете.',
        choices: {},
      },
    },
  },

  // Spanish (Español)
  es: {
    title: 'Desaparecida a medianoche',
    description:
      'Cuando una joven desaparece sin dejar rastro, un detective decidido debe navegar por las sombras de la ciudad y desentrañar una red de pistas antes de que se acabe el tiempo. Cada decisión podría significar una vida salvada o un rastro que se enfría.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-1': {
        title: 'Desaparecida a medianoche',
        narration:
          'Un reloj de neón marca la medianoche mientras te sientas en tu oficina estrecha, con la lluvia tamboreando en la ventana. El timbre del teléfono rompe el silencio: una voz presa del pánico informa que Emily Parker ha desaparecido. Emily se desvaneció de su apartamento hace apenas unas horas. Agarras tu abrigo, con el corazón acelerado, sabiendo que cada minuto cuenta. Con la ciudad dormida y las pistas ya desvaneciéndose, juras descubrir la verdad antes del amanecer.',
        choices: {
          'story-7481296-c1': {
            text: 'Buscar pistas en el apartamento de Emily',
            description: 'Su hogar puede ocultar evidencia de su desaparición',
          },
          'story-7481296-c2': {
            text: 'Entrevistar a la mejor amiga de Emily, Ava',
            description: 'Quizás su amiga sepa algo crucial',
          },
        },
      },
      'story-7481296-2': {
        title: 'Hogar saqueado',
        narration:
          'El apartamento de Emily está inquietantemente silencioso. La puerta está sin cerrar y entreabierta, una sola lámpara derramando luz sobre una escena caótica. Los cajones cuelgan abiertos y las pertenencias están esparcidas por el suelo, como si alguien se hubiera ido con prisa. Pisas cuidadosamente sobre una silla volcada y notas dos cosas: una tarjeta de presentación arrugada de su compañero de trabajo en la mesa de café, y una caja de cerillas del Bar Guarida de la Serpiente, el lugar nocturno favorito de Emily, cerca de la puerta. El aire está tenso con el olor a café derramado y miedo.',
        choices: {
          'story-7481296-c3': {
            text: 'Examinar la tarjeta del compañero de trabajo',
            description: '¿Podría un colega tener un motivo?',
          },
          'story-7481296-c4': {
            text: 'Dirigirse al Bar Guarida de la Serpiente',
            description: 'Seguir la pista hasta el bar',
          },
        },
      },
      'story-7481296-3': {
        title: 'Confidente desesperada',
        narration:
          'En un tranquilo restaurante abierto toda la noche, Ava Mitchell retuerce sus manos alrededor de una taza de café frío. Sus ojos están rojos de llorar y agotamiento. Explica que Emily había estado ansiosa últimamente: había confiado sobre un conflicto con un compañero de trabajo que había estado actuando extrañamente hacia ella. Ava también recuerda que Emily mencionó un bar que había estado visitando para encontrarse con alguien, e insinúa sobre el ex novio de Emily, quien tuvo una ruptura amarga con ella el mes pasado. Las posibilidades se arremolinan, y Ava suplica: "Por favor, encuéntrala".',
        choices: {
          'story-7481296-c5': {
            text: 'Investigar al compañero hostil',
            description: 'Confrontar al colega que Emily temía',
          },
          'story-7481296-c6': {
            text: 'Revisar el bar que Emily frecuentaba',
            description: 'Podría haber conocido a alguien peligroso allí',
          },
          'story-7481296-c7': {
            text: 'Hablar con el ex novio de Emily',
            description: 'Una mala ruptura podría ocultar motivos oscuros',
          },
        },
      },
      'story-7481296-17': {
        title: 'Rescate y justicia',
        narration:
          'Aprovechando el momento de distracción, te lanzas desde las sombras y derribas a Alan al suelo. Él grita sorprendido: el cuchillo se desliza por el concreto. En segundos lo tienes inmovilizado, la adrenalina alimentando tu fuerza. Los oficiales de respaldo entran corriendo para asegurarlo con esposas. Emily solloza de alivio mientras la liberas de las cuerdas. Está conmocionada pero viva, aferrándose a ti mientras la luz de la mañana se derrama. Alan, el orquestador del secuestro, es llevado esposado, y Emily está finalmente a salvo. Resolviste el caso y salvaste a Emily, entregando justicia al amanecer.',
        choices: {},
      },
    },
  },

  // German (Deutsch)
  de: {
    title: 'Vermisst um Mitternacht',
    description:
      'Als eine junge Frau spurlos verschwindet, muss ein entschlossener Detektiv durch die Schatten der Stadt navigieren und ein Netz von Hinweisen entwirren, bevor die Zeit abläuft. Jede Entscheidung könnte ein gerettetes Leben oder eine kalte Spur bedeuten.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-1': {
        title: 'Vermisst um Mitternacht',
        narration:
          'Eine neonbeleuchtete Uhr schlägt Mitternacht, während du in deinem engen Büro sitzt und der Regen gegen das Fenster trommelt. Das Klingeln des Telefons zerreißt die Stille – eine panische Stimme meldet, dass Emily Parker vermisst wird. Emily verschwand vor wenigen Stunden aus ihrer Wohnung. Du greifst nach deinem Mantel, das Herz hämmert, wissend, dass jede Minute zählt. Während die Stadt schläft und Hinweise bereits verblassen, schwörst du, die Wahrheit vor der Morgendämmerung aufzudecken.',
        choices: {
          'story-7481296-c1': {
            text: 'Emilys Wohnung nach Hinweisen durchsuchen',
            description:
              'Ihr Zuhause könnte Beweise für ihr Verschwinden verbergen',
          },
          'story-7481296-c2': {
            text: 'Emilys beste Freundin Ava befragen',
            description: 'Vielleicht weiß ihre Freundin etwas Entscheidendes',
          },
        },
      },
      'story-7481296-2': {
        title: 'Verwüstetes Zuhause',
        narration:
          "Emilys Wohnung ist unheimlich still. Die Tür ist unverschlossen und einen Spalt offen, eine einzelne Lampe wirft Licht auf eine chaotische Szene. Schubladen hängen offen und Habseligkeiten sind über den Boden verstreut, als ob jemand in Eile gegangen wäre. Du steigst vorsichtig über einen umgekippten Stuhl und bemerkst zwei Dinge: eine zerknitterte Visitenkarte ihres Arbeitskollegen auf dem Couchtisch und ein Streichholzbriefchen von der Serpent's Den Bar, Emilys Lieblings-Nachtlokal, das nahe der Tür liegt. Die Luft ist angespannt mit dem Geruch von verschüttetem Kaffee und Angst.",
        choices: {
          'story-7481296-c3': {
            text: 'Die Visitenkarte des Kollegen untersuchen',
            description: 'Könnte ein Kollege ein Motiv haben?',
          },
          'story-7481296-c4': {
            text: "Als Nächstes zur Serpent's Den Bar gehen",
            description: 'Dem Hinweis zur Bar folgen',
          },
        },
      },
      'story-7481296-3': {
        title: 'Verzweifelte Vertraute',
        narration:
          'In einem ruhigen Nachtcafé ringt Ava Mitchell ihre Hände um eine Tasse kalten Kaffees. Ihre Augen sind rot vom Weinen und der Erschöpfung. Sie erklärt, dass Emily in letzter Zeit ängstlich war – sie hatte sich über einen Konflikt mit einem Arbeitskollegen anvertraut, der sich ihr gegenüber seltsam verhalten hatte. Ava erinnert sich auch daran, dass Emily eine Bar erwähnte, die sie besuchte, um jemanden zu treffen, und deutet auf Emilys Ex-Freund hin, der letzten Monat eine bittere Trennung mit ihr hatte. Die Möglichkeiten wirbeln herum, und Ava fleht: "Bitte, finden Sie sie".',
        choices: {
          'story-7481296-c5': {
            text: 'Den feindseligen Kollegen untersuchen',
            description: 'Den Kollegen konfrontieren, den Emily fürchtete',
          },
          'story-7481296-c6': {
            text: 'Die Bar überprüfen, die Emily besuchte',
            description: 'Sie könnte dort jemand Gefährliches getroffen haben',
          },
          'story-7481296-c7': {
            text: 'Mit Emilys Ex-Freund sprechen',
            description:
              'Eine schlimme Trennung könnte dunkle Motive verbergen',
          },
        },
      },
      'story-7481296-17': {
        title: 'Rettung und Gerechtigkeit',
        narration:
          'Den Moment der Ablenkung nutzend, springst du aus den Schatten und wirfst Alan zu Boden. Er schreit überrascht auf – das Messer rutscht über den Beton. Innerhalb von Sekunden hast du ihn festgehalten, Adrenalin treibt deine Kraft an. Verstärkungsbeamte stürmen herein, um ihn in Handschellen zu legen. Emily schluchzt vor Erleichterung, als du sie von den Seilen befreist. Sie ist erschüttert, aber am Leben, klammert sich an dich, während das Morgenlicht hereinströmt. Alan, der Drahtzieher der Entführung, wird in Handschellen abgeführt, und Emily ist endlich in Sicherheit. Du hast den Fall gelöst und Emily gerettet, Gerechtigkeit im Morgengrauen gebracht.',
        choices: {},
      },
    },
  },

  // French (Français)
  fr: {
    title: 'Disparue à minuit',
    description:
      "Quand une jeune femme disparaît sans laisser de trace, un détective déterminé doit naviguer dans les ombres de la ville et démêler un réseau d'indices avant que le temps ne s'écoule. Chaque décision pourrait signifier une vie sauvée ou une piste refroidie.",
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-1': {
        title: 'Disparue à minuit',
        narration:
          "Une horloge au néon sonne minuit alors que vous êtes assis dans votre bureau exigu, la pluie tambourinant sur la fenêtre. La sonnerie du téléphone brise le silence – une voix paniquée signale qu'Emily Parker a disparu. Emily s'est volatilisée de son appartement il y a quelques heures à peine. Vous attrapez votre manteau, le cœur battant, sachant que chaque minute compte. Avec la ville endormie et les indices déjà en train de s'effacer, vous jurez de découvrir la vérité avant l'aube.",
        choices: {
          'story-7481296-c1': {
            text: "Fouiller l'appartement d'Emily pour des indices",
            description: 'Sa maison peut cacher des preuves de sa disparition',
          },
          'story-7481296-c2': {
            text: "Interroger la meilleure amie d'Emily, Ava",
            description: 'Peut-être que son amie sait quelque chose de crucial',
          },
        },
      },
      'story-7481296-2': {
        title: 'Maison saccagée',
        narration:
          "L'appartement d'Emily est étrangement silencieux. La porte est déverrouillée et légèrement entrouverte, une seule lampe déversant de la lumière sur une scène chaotique. Les tiroirs pendent ouverts et les affaires sont éparpillées sur le sol, comme si quelqu'un était parti précipitamment. Vous enjambez prudemment une chaise renversée et remarquez deux choses : une carte de visite froissée de son collègue de bureau sur la table basse, et une pochette d'allumettes du Bar Serpent's Den, le lieu nocturne préféré d'Emily, près de la porte. L'air est tendu avec l'odeur de café renversé et de peur.",
        choices: {
          'story-7481296-c3': {
            text: 'Examiner la carte de visite du collègue',
            description: 'Un collègue pourrait-il avoir un mobile?',
          },
          'story-7481296-c4': {
            text: "Se rendre ensuite au Bar Serpent's Den",
            description: "Suivre l'indice jusqu'au bar",
          },
        },
      },
      'story-7481296-3': {
        title: 'Confidente désespérée',
        narration:
          "Dans un restaurant tranquille ouvert toute la nuit, Ava Mitchell se tord les mains autour d'une tasse de café froid. Ses yeux sont rouges de larmes et d'épuisement. Elle explique qu'Emily avait été anxieuse dernièrement – elle s'était confiée sur un conflit avec un collègue qui agissait étrangement envers elle. Ava se souvient aussi qu'Emily avait mentionné un bar qu'elle visitait pour rencontrer quelqu'un, et fait allusion à l'ex-petit ami d'Emily qui avait eu une rupture amère avec elle le mois dernier. Les possibilités tourbillonnent, et Ava supplie : \"S'il vous plaît, trouvez-la\".",
        choices: {
          'story-7481296-c5': {
            text: 'Enquêter sur le collègue hostile',
            description: "Confronter le collègue qu'Emily craignait",
          },
          'story-7481296-c6': {
            text: "Vérifier le bar qu'Emily fréquentait",
            description: "Elle aurait pu y rencontrer quelqu'un de dangereux",
          },
          'story-7481296-c7': {
            text: "Parler avec l'ex-petit ami d'Emily",
            description:
              'Une mauvaise rupture pourrait cacher des motifs sombres',
          },
        },
      },
      'story-7481296-17': {
        title: 'Sauvetage et justice',
        narration:
          "Saisissant le moment de distraction, vous bondissez des ombres et plaquezAlan au sol. Il pousse un cri de surprise – le couteau glisse sur le béton. En quelques secondes, vous l'avez maîtrisé, l'adrénaline alimentant votre force. Les agents de renfort se précipitent pour le menotter. Emily sanglote de soulagement alors que vous la libérez des cordes. Elle est secouée mais vivante, s'accrochant à vous tandis que la lumière du matin se déverse. Alan, l'orchestrateur de l'enlèvement, est emmené menotté, et Emily est enfin en sécurité. Vous avez résolu l'affaire et sauvé Emily, rendant justice à l'aube.",
        choices: {},
      },
    },
  },

  // Portuguese (Português)
  pt: {
    title: 'Desaparecida à meia-noite',
    description:
      'Quando uma jovem desaparece sem deixar rastro, um detetive determinado deve navegar pelas sombras da cidade e desvendar uma teia de pistas antes que o tempo acabe. Cada decisão pode significar uma vida salva ou um rastro que esfria.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-1': {
        title: 'Desaparecida à meia-noite',
        narration:
          'Um relógio de néon marca meia-noite enquanto você está sentado em seu escritório apertado, a chuva tamborilando na janela. O toque do telefone quebra o silêncio – uma voz em pânico relata que Emily Parker está desaparecida. Emily desapareceu de seu apartamento há apenas algumas horas. Você pega seu casaco, coração acelerado, sabendo que cada minuto conta. Com a cidade adormecida e pistas já desaparecendo, você jura descobrir a verdade antes do amanhecer.',
        choices: {
          'story-7481296-c1': {
            text: 'Procurar pistas no apartamento de Emily',
            description:
              'Sua casa pode esconder evidências de seu desaparecimento',
          },
          'story-7481296-c2': {
            text: 'Entrevistar a melhor amiga de Emily, Ava',
            description: 'Talvez sua amiga saiba algo crucial',
          },
        },
      },
      'story-7481296-2': {
        title: 'Casa saqueada',
        narration:
          'O apartamento de Emily está estranhamente silencioso. A porta está destrancada e entreaberta, uma única lâmpada derramando luz sobre uma cena caótica. Gavetas pendem abertas e pertences estão espalhados pelo chão, como se alguém tivesse saído com pressa. Você pisa cuidadosamente sobre uma cadeira tombada e nota duas coisas: um cartão de visita amassado de seu colega de trabalho na mesa de centro, e uma caixa de fósforos do Bar Covil da Serpente, o lugar noturno favorito de Emily, perto da porta. O ar está tenso com o cheiro de café derramado e medo.',
        choices: {
          'story-7481296-c3': {
            text: 'Examinar o cartão de visita do colega',
            description: 'Um colega poderia ter um motivo?',
          },
          'story-7481296-c4': {
            text: 'Ir ao Bar Covil da Serpente em seguida',
            description: 'Seguir a pista até o bar',
          },
        },
      },
      'story-7481296-3': {
        title: 'Confidente desesperada',
        narration:
          'Em um restaurante tranquilo aberto a noite toda, Ava Mitchell torce as mãos em volta de uma caneca de café frio. Seus olhos estão vermelhos de chorar e exaustão. Ela explica que Emily estava ansiosa ultimamente – ela havia confidenciado sobre um conflito com um colega que estava agindo estranhamente com ela. Ava também se lembra de Emily mencionar um bar que estava visitando para encontrar alguém, e insinua sobre o ex-namorado de Emily que teve um rompimento amargo com ela no mês passado. As possibilidades giram, e Ava implora: "Por favor, encontre-a".',
        choices: {
          'story-7481296-c5': {
            text: 'Investigar o colega hostil',
            description: 'Confrontar o colega que Emily temia',
          },
          'story-7481296-c6': {
            text: 'Verificar o bar que Emily frequentava',
            description: 'Ela pode ter conhecido alguém perigoso lá',
          },
          'story-7481296-c7': {
            text: 'Falar com o ex-namorado de Emily',
            description: 'Um rompimento ruim pode esconder motivos sombrios',
          },
        },
      },
      'story-7481296-17': {
        title: 'Resgate e justiça',
        narration:
          'Aproveitando o momento de distração, você salta das sombras e derruba Alan no chão. Ele grita surpreso – a faca desliza pelo concreto. Em segundos você o tem contido, a adrenalina alimentando sua força. Oficiais de reforço entram correndo para prendê-lo com algemas. Emily soluça de alívio enquanto você a liberta das cordas. Ela está abalada mas viva, agarrando-se a você enquanto a luz da manhã se derrama. Alan, o orquestrador do sequestro, é levado algemado, e Emily está finalmente segura. Você resolveu o caso e salvou Emily, entregando justiça ao amanhecer.',
        choices: {},
      },
    },
  },

  // Japanese (日本語)
  ja: {
    title: '真夜中の失踪',
    description:
      '若い女性が跡形もなく姿を消したとき、決意した刑事は時間切れになる前に街の影を進み、手がかりの網を解きほぐさなければならない。すべての決断が救われた命か冷たくなった痕跡を意味する可能性がある。',
    author: 'モーガン・スティール',
    nodes: {
      'story-7481296-1': {
        title: '真夜中の失踪',
        narration:
          'ネオンに照らされた時計が真夜中を告げる中、あなたは狭いオフィスに座り、雨が窓を叩いている。電話のベルが静寂を破る——パニックに陥った声がエミリー・パーカーが行方不明だと報告する。エミリーはわずか数時間前にアパートから姿を消した。あなたはコートをつかみ、心臓が高鳴り、一分一秒が重要だと知っている。街が眠り、手がかりがすでに消えていく中、あなたは夜明け前に真実を明らかにすることを誓う。',
        choices: {
          'story-7481296-c1': {
            text: 'エミリーのアパートで手がかりを探す',
            description: '彼女の家には失踪の証拠が隠されているかもしれない',
          },
          'story-7481296-c2': {
            text: 'エミリーの親友アヴァに聞き込みをする',
            description: '彼女の友人が何か重要なことを知っているかもしれない',
          },
        },
      },
      'story-7481296-2': {
        title: '荒らされた家',
        narration:
          'エミリーのアパートは不気味なほど静かだ。ドアは鍵がかかっておらず、わずかに開いており、一つのランプが混沌とした光景を照らしている。引き出しは開いたままで、持ち物が床に散乱しており、誰かが急いで出て行ったかのようだ。あなたは倒れた椅子を慎重にまたぎ、二つのことに気づく：コーヒーテーブルの上にある彼女の同僚のしわくちゃの名刺と、ドアの近くに置かれたサーペンツ・デン・バー（エミリーのお気に入りの深夜スポット）のマッチ箱。空気はこぼれたコーヒーと恐怖の匂いで張り詰めている。',
        choices: {
          'story-7481296-c3': {
            text: '同僚の名刺を調べる',
            description: '同僚に動機があるかもしれない？',
          },
          'story-7481296-c4': {
            text: '次にサーペンツ・デン・バーに向かう',
            description: 'バーへの手がかりを追う',
          },
        },
      },
      'story-7481296-3': {
        title: '必死の親友',
        narration:
          '静かな24時間営業の食堂で、アヴァ・ミッチェルは冷たいコーヒーのマグカップの周りで手を握りしめている。彼女の目は泣きと疲労で赤い。彼女はエミリーが最近不安だったと説明する——彼女は奇妙な行動をとっていた同僚との対立について打ち明けていた。アヴァはまた、エミリーが誰かに会うために訪れていたバーについて言及していたことを思い出し、先月彼女と激しい別れをしたエミリーの元ボーイフレンドについてほのめかす。可能性が渦巻き、アヴァは懇願する：「お願い、彼女を見つけて」。',
        choices: {
          'story-7481296-c5': {
            text: '敵対的な同僚を調査する',
            description: 'エミリーが恐れていた同僚と対峙する',
          },
          'story-7481296-c6': {
            text: 'エミリーが通っていたバーをチェックする',
            description: '彼女はそこで危険な人物に会ったかもしれない',
          },
          'story-7481296-c7': {
            text: 'エミリーの元ボーイフレンドと話す',
            description: '悪い別れが暗い動機を隠しているかもしれない',
          },
        },
      },
      'story-7481296-17': {
        title: '救出と正義',
        narration:
          '気が散った瞬間を捉えて、あなたは影から飛び出し、アランを地面に組み伏せる。彼は驚いて叫ぶ——ナイフがコンクリートの上を滑っていく。数秒であなたは彼を拘束し、アドレナリンがあなたの力を高める。応援の警官が駆け込んで彼に手錠をかける。エミリーはあなたが彼女をロープから解放すると、安堵のあまり泣き崩れる。彼女は動揺しているが生きており、朝の光が差し込む中、あなたにしがみついている。誘拐の首謀者アランは手錠をかけられて連行され、エミリーはついに安全だ。あなたは事件を解決し、エミリーを救い、夜明けに正義をもたらした。',
        choices: {},
      },
    },
  },

  // Chinese (中文)
  zh: {
    title: '午夜失踪',
    description:
      '当一名年轻女子不留痕迹地消失时，一位坚定的侦探必须在时间耗尽之前穿越城市的阴影，解开线索之网。每个决定都可能意味着拯救一条生命或线索变冷。',
    author: '摩根·斯蒂尔',
    nodes: {
      'story-7481296-1': {
        title: '午夜失踪',
        narration:
          '当你坐在狭小的办公室里，雨水敲打着窗户时，霓虹灯照亮的时钟敲响了午夜。电话铃声打破了寂静——一个惊慌失措的声音报告说艾米丽·帕克失踪了。艾米丽几小时前从她的公寓消失了。你抓起外套，心跳加速，知道每一分钟都很重要。在城市沉睡、线索已经消失的情况下，你发誓要在黎明前揭开真相。',
        choices: {
          'story-7481296-c1': {
            text: '搜查艾米丽的公寓寻找线索',
            description: '她的家可能隐藏着她失踪的证据',
          },
          'story-7481296-c2': {
            text: '采访艾米丽的好友艾娃',
            description: '也许她的朋友知道一些关键信息',
          },
        },
      },
      'story-7481296-2': {
        title: '被洗劫的家',
        narration:
          '艾米丽的公寓异常安静。门没有锁，微微开着，一盏灯照亮了混乱的场景。抽屉敞开着，物品散落在地板上，好像有人匆忙离开了。你小心地跨过一把倒下的椅子，注意到两件事：咖啡桌上有一张她同事的皱巴巴的名片，门边放着一盒来自蛇窝酒吧（艾米丽最喜欢的深夜场所）的火柴。空气中弥漫着洒出的咖啡和恐惧的气味。',
        choices: {
          'story-7481296-c3': {
            text: '检查同事的名片',
            description: '同事可能有动机吗？',
          },
          'story-7481296-c4': {
            text: '接下来前往蛇窝酒吧',
            description: '跟随线索去酒吧',
          },
        },
      },
      'story-7481296-3': {
        title: '绝望的密友',
        narration:
          '在一家安静的通宵餐厅里，艾娃·米切尔紧握着一杯冷咖啡。她的眼睛因哭泣和疲惫而发红。她解释说艾米丽最近一直很焦虑——她倾诉了与一位对她行为怪异的同事的冲突。艾娃还回忆起艾米丽提到过她一直去的一家酒吧见某人，并暗示艾米丽的前男友上个月与她有过痛苦的分手。各种可能性在脑海中盘旋，艾娃恳求道："拜托，找到她。"',
        choices: {
          'story-7481296-c5': {
            text: '调查敌对的同事',
            description: '对质艾米丽害怕的同事',
          },
          'story-7481296-c6': {
            text: '查看艾米丽常去的酒吧',
            description: '她可能在那里遇到了危险的人',
          },
          'story-7481296-c7': {
            text: '与艾米丽的前男友交谈',
            description: '糟糕的分手可能隐藏着黑暗的动机',
          },
        },
      },
      'story-7481296-17': {
        title: '营救与正义',
        narration:
          '抓住分心的时刻，你从阴影中扑出，将艾伦摔倒在地。他惊讶地叫了一声——刀子在混凝土上滑开。几秒钟内你就制服了他，肾上腺素为你提供力量。增援警官冲进来给他戴上手铐。当你把艾米丽从绳索中解救出来时，她如释重负地抽泣着。她受到了惊吓但还活着，在晨光洒进来时紧紧抓住你。绑架的策划者艾伦被戴着手铐带走，艾米丽终于安全了。你破了案，救了艾米丽，在黎明时分伸张了正义。',
        choices: {},
      },
    },
  },

  // Korean (한국어)
  ko: {
    title: '한밤의 실종',
    description:
      '젊은 여성이 흔적도 없이 사라지면, 결연한 형사는 시간이 다 가기 전에 도시의 그림자를 헤쳐나가고 단서의 그물을 풀어야 한다. 모든 결정이 구원받은 생명이나 식어버린 흔적을 의미할 수 있다.',
    author: '모건 스틸',
    nodes: {
      'story-7481296-1': {
        title: '한밤의 실종',
        narration:
          '네온 불빛의 시계가 자정을 알리는 동안 당신은 좁은 사무실에 앉아 있고, 비가 창문을 두드리고 있다. 전화벨이 침묵을 깨뜨린다 – 공황 상태의 목소리가 에밀리 파커가 실종되었다고 보고한다. 에밀리는 불과 몇 시간 전에 아파트에서 사라졌다. 당신은 코트를 잡고, 심장이 두근거리며, 매 순간이 중요하다는 것을 안다. 도시가 잠들고 단서가 이미 사라지고 있는 가운데, 당신은 새벽 전에 진실을 밝히겠다고 맹세한다.',
        choices: {
          'story-7481296-c1': {
            text: '에밀리의 아파트에서 단서 찾기',
            description: '그녀의 집에 실종의 증거가 숨겨져 있을 수 있다',
          },
          'story-7481296-c2': {
            text: '에밀리의 절친 아바 인터뷰하기',
            description: '아마도 그녀의 친구가 중요한 것을 알고 있을지도',
          },
        },
      },
      'story-7481296-2': {
        title: '약탈당한 집',
        narration:
          '에밀리의 아파트는 섬뜩하게 조용하다. 문은 잠기지 않고 약간 열려 있으며, 하나의 램프가 혼란스러운 장면에 빛을 비추고 있다. 서랍이 열려 있고 소지품이 바닥에 흩어져 있어, 마치 누군가 서둘러 떠난 것 같다. 당신은 넘어진 의자를 조심스럽게 넘어가며 두 가지를 알아차린다: 커피 테이블 위에 있는 그녀의 직장 동료의 구겨진 명함과, 문 근처에 놓인 뱀의 소굴 바(에밀리가 가장 좋아하는 심야 장소)의 성냥갑. 공기는 쏟아진 커피와 두려움의 냄새로 긴장되어 있다.',
        choices: {
          'story-7481296-c3': {
            text: '동료의 명함 조사하기',
            description: '동료에게 동기가 있을 수 있을까?',
          },
          'story-7481296-c4': {
            text: '다음으로 뱀의 소굴 바로 가기',
            description: '바로 가는 단서를 따라가기',
          },
        },
      },
      'story-7481296-3': {
        title: '절박한 친구',
        narration:
          '조용한 24시간 식당에서 아바 미첼은 차가운 커피 잔 주위로 손을 비틀고 있다. 그녀의 눈은 울음과 피로로 빨갛다. 그녀는 에밀리가 최근 불안해했다고 설명한다 – 그녀는 이상하게 행동하던 동료와의 갈등에 대해 털어놓았다. 아바는 또한 에밀리가 누군가를 만나기 위해 방문하던 바를 언급했던 것을 기억하고, 지난달 그녀와 쓰라린 이별을 한 에밀리의 전 남자친구에 대해 암시한다. 가능성들이 소용돌이치고, 아바는 애원한다: "제발, 그녀를 찾아주세요."',
        choices: {
          'story-7481296-c5': {
            text: '적대적인 동료 조사하기',
            description: '에밀리가 두려워했던 동료와 대면하기',
          },
          'story-7481296-c6': {
            text: '에밀리가 자주 가던 바 확인하기',
            description: '그녀가 거기서 위험한 사람을 만났을 수도',
          },
          'story-7481296-c7': {
            text: '에밀리의 전 남자친구와 대화하기',
            description: '나쁜 이별이 어두운 동기를 숨기고 있을 수 있다',
          },
        },
      },
      'story-7481296-17': {
        title: '구조와 정의',
        narration:
          '주의가 산만한 순간을 포착하여, 당신은 그림자에서 뛰어나와 앨런을 땅에 쓰러뜨린다. 그는 놀라서 비명을 지른다 – 칼이 콘크리트 위로 미끄러진다. 몇 초 만에 당신은 그를 제압하고, 아드레날린이 당신의 힘을 북돋운다. 지원 경찰관들이 달려와 그에게 수갑을 채운다. 에밀리는 당신이 그녀를 밧줄에서 풀어주자 안도의 눈물을 흘린다. 그녀는 충격을 받았지만 살아있으며, 아침 빛이 쏟아지는 동안 당신에게 매달린다. 납치의 주모자 앨런은 수갑을 찬 채 끌려가고, 에밀리는 마침내 안전하다. 당신은 사건을 해결하고 에밀리를 구했으며, 새벽에 정의를 실현했다.',
        choices: {},
      },
    },
  },

  // Ukrainian (Українська)
  uk: {
    title: 'Зникла опівночі',
    description:
      'Коли молода жінка зникає безслідно, рішучий детектив повинен пройти крізь міські тіні та розплутати павутину підказок, поки не минув час. Кожне рішення може означати врятоване життя або холодний слід.',
    author: 'Морган Стіл',
    nodes: {
      'story-7481296-1': {
        title: 'Зникла опівночі',
        narration:
          "Неоновий годинник б'є опівночі, поки ви сидите у своєму тісному офісі під барабанну дробу дощу по вікну. Дзвінок телефону розриває тишу – панікуючий голос повідомляє, що Емілі Паркер зникла. Емілі зникла зі своєї квартири лише кілька годин тому. Ви хапаєте пальто, серце калатає – кожна хвилина на рахунку. Поки місто спить, а підказки вже зникають, ви клянетеся розкрити правду до світанку.",
        choices: {
          'story-7481296-c1': {
            text: 'Обшукати квартиру Емілі в пошуках підказок',
            description: 'Її дім може приховувати докази зникнення',
          },
          'story-7481296-c2': {
            text: 'Допитати найкращу подругу Емілі, Аву',
            description: 'Можливо, її подруга знає щось важливе',
          },
        },
      },
      'story-7481296-2': {
        title: 'Розгромлений дім',
        narration:
          'У квартирі Емілі моторошно тихо. Двері не замкнені і трохи відчинені, єдина лампа освітлює хаотичну сцену. Шухляди відкриті, речі розкидані по підлозі, ніби хтось поспішав. Ви обережно переступаєте через перекинутий стілець і помічаєте дві речі: зім\'яту візитку її колеги по роботі на журнальному столику та сірникову коробку з бару "Лігво Змія", улюбленого нічного закладу Емілі, що лежить біля дверей. Повітря напружене запахом пролитої кави та страху.',
        choices: {
          'story-7481296-c3': {
            text: 'Вивчити візитку колеги',
            description: 'Чи може у колеги бути мотив?',
          },
          'story-7481296-c4': {
            text: 'Відправитися до бару "Лігво Змія"',
            description: 'Слідувати за підказкою до бару',
          },
        },
      },
      'story-7481296-3': {
        title: 'Відчайдушна подруга',
        narration:
          'У тихій цілодобовій закусочній Ава Мітчелл нервово стискає чашку з холодною кавою. Її очі червоні від сліз та втоми. Вона пояснює, що Емілі останнім часом була стривожена – вона розповідала про конфлікт з колегою, який дивно поводився з нею. Ава також згадує, що Емілі говорила про бар, який вона відвідувала, щоб зустрітися з кимось, і натякає на колишнього хлопця Емілі, з яким у неї був важкий розрив минулого місяця. Можливості крутяться в голові, і Ава благає: "Будь ласка, знайдіть її".',
        choices: {
          'story-7481296-c5': {
            text: 'Розслідувати ворожого колегу',
            description: 'Протистояти колезі, якого боялася Емілі',
          },
          'story-7481296-c6': {
            text: 'Перевірити бар, який відвідувала Емілі',
            description: 'Вона могла зустріти там когось небезпечного',
          },
          'story-7481296-c7': {
            text: 'Поговорити з колишнім хлопцем Емілі',
            description: 'Важкий розрив може приховувати темні мотиви',
          },
        },
      },
      'story-7481296-17': {
        title: 'Порятунок і справедливість',
        narration:
          'Скориставшись моментом відволікання, ви вистрибуєте з тіні та збиваєте Алана на землю. Він скрикує від несподіванки – ніж відлітає по бетону. За лічені секунди ви знерухомлюєте його, адреналін надає вам сили. Офіцери підкріплення вривають��я та надягають на нього наручники. Емілі ридає від полегшення, коли ви звільняєте її від мотузок. Вона потрясена, але жива, чіпляючись за вас, поки ранкове світло проникає всередину. Алана, організатора викрадення, відводять у наручниках, і Емілі нарешті в безпеці. Ви розкрили справу та врятували Емілі, відновивши справедливість на світанку.',
        choices: {},
      },
    },
  },
};
