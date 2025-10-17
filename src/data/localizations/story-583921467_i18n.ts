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

export const story_583921467StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Timekeeper\'s Heart',
    description: 'When a temporal engineer and her partner discover the clockwork core that binds their futures together, every choice risks rewriting their love across centuries.',
    author: 'Nova Strickland',
    nodes: {
      'story-583921467-1': {
        title: 'Temporal Proposal',
        narration: 'The city ticks in harmony with the Chronosphere beneath it. You and your partner, Elias, stand before the Heart Engine--a glittering mechanism capable of weaving futures. Tonight you intended to propose, but the engine pulses erratically, projecting fractured visions of the two of you apart. Do you confront the anomaly head-on or research the prophecy encoded in the heart?',
        choices: {
          'story-583921467-c1': {
            text: 'Dive into the data archives to decode the warning',
          },
          'story-583921467-c2': {
            text: 'Head to the observatory and trace the temporal fault',
          },
        },
      },
      'story-583921467-2': {
        title: 'Chronolocked Library',
        narration: 'Shelves of shimmering glyph-stacks rotate around you. A pulse from the Heart Engine burns through the catalogue, highlighting an encoded declaration from your future selves. It speaks of a choice that preserves love but fractures time. You can attempt to reconstruct the lost line of the declaration or analyze the engine\'s signal waveform.',
        choices: {
          'story-583921467-c3': {
            text: 'Recreate the missing line of the declaration',
          },
          'story-583921467-c4': {
            text: 'Model the waveform to predict the paradox peak',
          },
        },
      },
      'story-583921467-3': {
        title: 'Clockwork Observatory',
        narration: 'The observatory dome hums as starlight refracts through chrono-lenses. You align the Heart Engine\'s signal with shimmering constellations, revealing a timeline where Elias disappears. The only anchor is a temporal tether bound to your pulse. Do you answer the call of that tether or re-engineer the device to share the burden?',
        choices: {
          'story-583921467-c5': {
            text: 'Follow the tether to meet the future version of yourself',
          },
          'story-583921467-c6': {
            text: 'Modify the device so Elias shares the temporal load',
          },
        },
      },
      'story-583921467-4': {
        title: 'Heart of the Engine',
        narration: 'Your reconstruction stabilizes the Heart Engine briefly. A projection of you and Elias exchanging vows across centuries flickers into the air. The engine offers a choice: synchronize your heartbeats to permanently link timelines, or reroute the surplus energy into a backup lattice.',
        choices: {
          'story-583921467-c7': {
            text: 'Sync heartbeats and harmonize the core',
          },
          'story-583921467-c8': {
            text: 'Channel the energy into a failsafe lattice',
          },
        },
      },
      'story-583921467-5': {
        title: 'Future Echoes',
        narration: 'The tether draws you into a luminous corridor of overlapping moments. A future version of Elias appears, holding the completed Heart Engine core. He warns that your love endures only if you accept a shared destiny--one where both of you surrender certain freedoms. Do you embrace that shared fate or break the tether to forge a different path?',
        choices: {
          'story-583921467-c9': {
            text: 'Embrace the shared destiny and merge timelines',
          },
          'story-583921467-c10': {
            text: 'Break the tether and search for an alternate route',
          },
        },
      },
      'story-583921467-6': {
        title: 'Risky Experiment',
        narration: 'You and Elias connect wrist-mounted chronocasters, sharing the surge. The Heart Engine stabilizes, but a timer appears--five minutes before a paradox collapse. One option is to launch immediately into the harmonized timeline; the other is to abort, accepting that the engine may fail permanently.',
        choices: {
          'story-583921467-c11': {
            text: 'Initiate the harmonized launch together',
          },
          'story-583921467-c12': {
            text: 'Abort and shut down the Heart Engine',
          },
        },
      },
      'story-583921467-7': {
        title: 'Infinite Vows',
        narration: 'Heartbeats synchronized, you and Elias phase into a shared continuum. You watch your wedding unfold beneath a sky of arresting auroras, every moment echoed across timelines. The Heart Engine purrs steadily; the future is yours to write together. The Timekeeper\'s Heart beats on, intertwined with your own.',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'Paradox Negotiation',
        narration: 'The failsafe lattice blossoms into a shimmering bridge. Three future versions of you and Elias reach across it, each representing a different life you might share. One urges trust, another insists on independence, and the last offers a compromise with safeguards. Which path will you lock into the Heart Engine?',
        choices: {
          'story-583921467-c13': {
            text: 'Trust the future completely and step through together',
          },
          'story-583921467-c14': {
            text: 'Keep a failsafe and partition the engine just in case',
          },
        },
      },
      'story-583921467-9': {
        title: 'Lonely Timeline',
        narration: 'You sever the tether and the Heart Engine steadies into silence. The city continues, unaware of what was almost lost. Years later, you catch fleeting glimpses of a life where you and Elias stood together. The knowledge of what might have been lingers like a phantom heartbeat.',
        choices: {
        },
      },
      'story-583921467-10': {
        title: 'Shattered Timeline',
        narration: 'You power down the Heart Engine. The paradox bubble collapses unevenly, splintering fragments of your shared memories. You and Elias remain together but feel the distance of things forgotten--inside jokes, late-night ambitions, a proposal never made. Love survives, but the engine\'s promise of unending connection is gone.',
        choices: {
        },
      },
      'story-583921467-11': {
        title: 'Merged Horizon',
        narration: 'You clasp Elias\'s hand and step through the luminous arch. Multiple futures merge into a tapestry of shared milestones--scientific breakthroughs, quiet anniversaries, and long-awaited vows. You feel every version of your love coalesce, anchored by trust.',
        choices: {
        },
      },
      'story-583921467-12': {
        title: 'Reset Alone',
        narration: 'You partition the Heart Engine, programming a failsafe that keeps each future at arm\'s length. The paradox collapses safely, but in every resulting timeline you and Elias choose duty over devotion. The city is saved, yet you walk separate paths, knowing safety came at the cost of shared destiny.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Сердце Хранителя Времени',
    description: 'Когда инженер времени и её партнёр обнаруживают часовой механизм, связывающий их будущее, каждый выбор рискует переписать их любовь сквозь столетия.',
    author: 'Нова Стрикленд',
    nodes: {
      'story-583921467-1': {
        title: 'Темпоральное Предложение',
        narration: 'Город тикает в гармонии с Хроносферой под ним. Вы и ваш партнёр Элиас стоите перед Сердечным Двигателем — сверкающим механизмом, способным ткать будущее. Этим вечером вы намеревались сделать предложение, но двигатель пульсирует беспорядочно, проецируя разорванные видения вас двоих порознь. Противостоите ли вы аномалии напрямую или исследуете пророчество, закодированное в сердце?',
        choices: {
          'story-583921467-c1': {
            text: 'Погрузитесь в архивы данных, чтобы расшифровать предупреждение',
          },
          'story-583921467-c2': {
            text: 'Отправьтесь в обсерваторию и проследите темпоральный разлом',
          },
        },
      },
      'story-583921467-2': {
        title: 'Хронозапертая Библиотека',
        narration: 'Полки с мерцающими стопками глифов вращаются вокруг вас. Импульс Сердечного Двигателя прожигает каталог, выделяя закодированное объявление от ваших будущих воплощений. Оно говорит о выборе, который сохраняет любовь, но разрушает время. Вы можете попытаться восстановить потерянную строку объявления или проанализировать форму волны сигнала двигателя.',
        choices: {
          'story-583921467-c3': {
            text: 'Воссоздайте недостающую строку объявления',
          },
          'story-583921467-c4': {
            text: 'Смоделируйте форму волны, чтобы предсказать пик парадокса',
          },
        },
      },
      'story-583921467-3': {
        title: 'Часовая Обсерватория',
        narration: 'Купол обсерватории гудит, пока звёздный свет преломляется сквозь хронолинзы. Вы выравниваете сигнал Сердечного Двигателя с мерцающими созвездиями, раскрывая временную линию, где Элиас исчезает. Единственный якорь — это темпоральный трос, привязанный к вашему пульсу. Ответите ли вы на зов этого троса или переконструируете устройство, чтобы разделить бремя?',
        choices: {
          'story-583921467-c5': {
            text: 'Следуйте за тросом, чтобы встретить будущую версию себя',
          },
          'story-583921467-c6': {
            text: 'Модифицируйте устройство, чтобы Элиас разделил темпоральную нагрузку',
          },
        },
      },
      'story-583921467-4': {
        title: 'Сердце Двигателя',
        narration: 'Ваша реконструкция ненадолго стабилизирует Сердечный Двигатель. Проекция вас и Элиаса, обменивающихся клятвами сквозь столетия, мерцает в воздухе. Двигатель предлагает выбор: синхронизировать ваши сердцебиения, чтобы навсегда связать временные линии, или перенаправить избыточную энергию в резервную решётку.',
        choices: {
          'story-583921467-c7': {
            text: 'Синхронизируйте сердцебиения и гармонизируйте ядро',
          },
          'story-583921467-c8': {
            text: 'Направьте энергию в отказоустойчивую решётку',
          },
        },
      },
      'story-583921467-5': {
        title: 'Отголоски Будущего',
        narration: 'Трос втягивает вас в светящийся коридор перекрывающихся мгновений. Появляется будущая версия Элиаса, держащая завершённое ядро Сердечного Двигателя. Он предупреждает, что ваша любовь сохранится, только если вы примете общую судьбу — ту, где вы оба откажетесь от определённых свобод. Примете ли вы эту общую судьбу или разорвёте трос, чтобы проложить другой путь?',
        choices: {
          'story-583921467-c9': {
            text: 'Примите общую судьбу и слейте временные линии',
          },
          'story-583921467-c10': {
            text: 'Разорвите трос и найдите альтернативный маршрут',
          },
        },
      },
      'story-583921467-6': {
        title: 'Рискованный Эксперимент',
        narration: 'Вы и Элиас подключаете наручные хронокастеры, разделяя всплеск. Сердечный Двигатель стабилизируется, но появляется таймер — пять минут до коллапса парадокса. Один вариант — немедленно запуститься в гармонизированную временную линию; другой — прервать процесс, приняв, что двигатель может выйти из строя навсегда.',
        choices: {
          'story-583921467-c11': {
            text: 'Инициируйте гармонизированный запуск вместе',
          },
          'story-583921467-c12': {
            text: 'Прервите и отключите Сердечный Двигатель',
          },
        },
      },
      'story-583921467-7': {
        title: 'Бесконечные Клятвы',
        narration: 'С синхронизированными сердцебиениями вы и Элиас переходите в общий континуум. Вы наблюдаете, как ваша свадьба разворачивается под небом поразительных сияний, каждый момент отражается сквозь временные линии. Сердечный Двигатель равномерно урчит; будущее принадлежит вам, чтобы писать его вместе. Сердце Хранителя Времени продолжает биться, переплетённое с вашим собственным.',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'Переговоры о Парадоксе',
        narration: 'Отказоустойчивая решётка расцветает в мерцающий мост. Три будущих версии вас и Элиаса тянутся через него, каждая представляет разную жизнь, которую вы могли бы разделить. Одна призывает к доверию, другая настаивает на независимости, а последняя предлагает компромисс с гарантиями. Какой путь вы зафиксируете в Сердечном Двигателе?',
        choices: {
          'story-583921467-c13': {
            text: 'Полностью доверьтесь будущему и шагните вместе',
          },
          'story-583921467-c14': {
            text: 'Сохраните защиту и разделите двигатель на всякий случай',
          },
        },
      },
      'story-583921467-9': {
        title: 'Одинокая Временная Линия',
        narration: 'Вы разрываете трос, и Сердечный Двигатель стабилизируется в тишине. Город продолжает существовать, не зная о том, что чуть не было потеряно. Годы спустя вы ловите мимолётные проблески жизни, где вы и Элиас стояли вместе. Знание о том, что могло бы быть, остаётся, как призрачное сердцебиение.',
        choices: {
        },
      },
      'story-583921467-10': {
        title: 'Разрушенная Временная Линия',
        narration: 'Вы выключаете Сердечный Двигатель. Пузырь парадокса коллапсирует неравномерно, раскалывая фрагменты ваших общих воспоминаний. Вы и Элиас остаётесь вместе, но чувствуете расстояние забытых вещей — внутренних шуток, ночных амбиций, предложения, которое так и не было сделано. Любовь выживает, но обещание двигателя о бесконечной связи исчезло.',
        choices: {
        },
      },
      'story-583921467-11': {
        title: 'Слитый Горизонт',
        narration: 'Вы берёте Элиаса за руку и проходите сквозь светящуюся арку. Множественные будущие сливаются в гобелен общих вех — научные прорывы, тихие юбилеи и долгожданные клятвы. Вы чувствуете, как каждая версия вашей любви объединяется, закреплённая доверием.',
        choices: {
        },
      },
      'story-583921467-12': {
        title: 'Одинокая Перезагрузка',
        narration: 'Вы разделяете Сердечный Двигатель, программируя защиту, которая держит каждое будущее на расстоянии. Парадокс безопасно коллапсирует, но в каждой результирующей временной линии вы и Элиас выбираете долг вместо преданности. Город спасён, но вы идёте раздельными путями, зная, что безопасность пришла ценой общей судьбы.',
        choices: {
        },
      },
    },
  },

  // Español
  es: {
    title: 'El Corazón del Guardián del Tiempo',
    description: 'Cuando una ingeniera temporal y su pareja descubren el núcleo de relojería que une sus futuros, cada elección arriesga reescribir su amor a través de los siglos.',
    author: 'Nova Strickland',
    nodes: {
      'story-583921467-1': {
        title: 'Propuesta Temporal',
        narration: 'La ciudad late en armonía con la Cronosfera bajo ella. Tú y tu pareja, Elías, están frente al Motor del Corazón, un mecanismo resplandeciente capaz de tejer futuros. Esta noche querías proponer matrimonio, pero el motor pulsa erráticamente, proyectando visiones fragmentadas de ustedes dos separados. ¿Enfrentas la anomalía directamente o investigas la profecía codificada en el corazón?',
        choices: {
          'story-583921467-c1': {
            text: 'Sumérgete en los archivos de datos para descifrar la advertencia',
          },
          'story-583921467-c2': {
            text: 'Ve al observatorio y rastrea la falla temporal',
          },
        },
      },
      'story-583921467-2': {
        title: 'Biblioteca Cronobloqueada',
        narration: 'Estantes de pilas de glifos brillantes rotan a tu alrededor. Un pulso del Motor del Corazón atraviesa el catálogo, resaltando una declaración codificada de tus yoes futuros. Habla de una elección que preserva el amor pero fractura el tiempo. Puedes intentar reconstruir la línea perdida de la declaración o analizar la forma de onda de la señal del motor.',
        choices: {
          'story-583921467-c3': {
            text: 'Recrea la línea faltante de la declaración',
          },
          'story-583921467-c4': {
            text: 'Modela la forma de onda para predecir el pico de la paradoja',
          },
        },
      },
      'story-583921467-3': {
        title: 'Observatorio de Relojería',
        narration: 'La cúpula del observatorio zumba mientras la luz estelar se refracta a través de lentes crono. Alineas la señal del Motor del Corazón con constelaciones relucientes, revelando una línea temporal donde Elías desaparece. El único ancla es una cuerda temporal atada a tu pulso. ¿Respondes al llamado de esa cuerda o rediseñas el dispositivo para compartir la carga?',
        choices: {
          'story-583921467-c5': {
            text: 'Sigue la cuerda para encontrar la versión futura de ti mismo',
          },
          'story-583921467-c6': {
            text: 'Modifica el dispositivo para que Elías comparta la carga temporal',
          },
        },
      },
      'story-583921467-4': {
        title: 'Corazón del Motor',
        narration: 'Tu reconstrucción estabiliza brevemente el Motor del Corazón. Una proyección de ti y Elías intercambiando votos a través de los siglos parpadea en el aire. El motor ofrece una elección: sincronizar sus latidos para vincular permanentemente las líneas temporales, o redirigir la energía excedente a una red de respaldo.',
        choices: {
          'story-583921467-c7': {
            text: 'Sincroniza los latidos y armoniza el núcleo',
          },
          'story-583921467-c8': {
            text: 'Canaliza la energía hacia una red de seguridad',
          },
        },
      },
      'story-583921467-5': {
        title: 'Ecos del Futuro',
        narration: 'La cuerda te atrae hacia un corredor luminoso de momentos superpuestos. Aparece una versión futura de Elías, sosteniendo el núcleo completo del Motor del Corazón. Advierte que tu amor perdura solo si aceptas un destino compartido, uno donde ambos renuncian a ciertas libertades. ¿Abrazas ese destino compartido o rompes la cuerda para forjar un camino diferente?',
        choices: {
          'story-583921467-c9': {
            text: 'Abraza el destino compartido y fusiona las líneas temporales',
          },
          'story-583921467-c10': {
            text: 'Rompe la cuerda y busca una ruta alternativa',
          },
        },
      },
      'story-583921467-6': {
        title: 'Experimento Arriesgado',
        narration: 'Tú y Elías conectan cronocasters montados en la muñeca, compartiendo la oleada. El Motor del Corazón se estabiliza, pero aparece un temporizador: cinco minutos antes del colapso de la paradoja. Una opción es lanzarse inmediatamente a la línea temporal armonizada; la otra es abortar, aceptando que el motor puede fallar permanentemente.',
        choices: {
          'story-583921467-c11': {
            text: 'Inicia el lanzamiento armonizado juntos',
          },
          'story-583921467-c12': {
            text: 'Aborta y apaga el Motor del Corazón',
          },
        },
      },
      'story-583921467-7': {
        title: 'Votos Infinitos',
        narration: 'Con los latidos sincronizados, tú y Elías se desvanecen en un continuo compartido. Observas cómo tu boda se despliega bajo un cielo de auroras cautivadoras, cada momento reflejado a través de las líneas temporales. El Motor del Corazón ronronea constantemente; el futuro es tuyo para escribirlo juntos. El Corazón del Guardián del Tiempo late, entrelazado con el tuyo propio.',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'Negociación de Paradoja',
        narration: 'La red de seguridad florece en un puente reluciente. Tres versiones futuras de ti y Elías se extienden a través de él, cada una representa una vida diferente que podrían compartir. Una insta a la confianza, otra insiste en la independencia, y la última ofrece un compromiso con salvaguardas. ¿Qué camino fijarás en el Motor del Corazón?',
        choices: {
          'story-583921467-c13': {
            text: 'Confía completamente en el futuro y atraviesen juntos',
          },
          'story-583921467-c14': {
            text: 'Mantén una red de seguridad y particiona el motor por si acaso',
          },
        },
      },
      'story-583921467-9': {
        title: 'Línea Temporal Solitaria',
        narration: 'Cortas la cuerda y el Motor del Corazón se estabiliza en silencio. La ciudad continúa, ajena a lo que casi se perdió. Años después, captas destellos fugaces de una vida donde tú y Elías estuvieron juntos. El conocimiento de lo que pudo haber sido persiste como un latido fantasma.',
        choices: {
        },
      },
      'story-583921467-10': {
        title: 'Línea Temporal Fragmentada',
        narration: 'Apagas el Motor del Corazón. La burbuja de paradoja colapsa irregularmente, astillando fragmentos de sus recuerdos compartidos. Tú y Elías permanecen juntos pero sienten la distancia de cosas olvidadas: bromas privadas, ambiciones nocturnas, una propuesta que nunca se hizo. El amor sobrevive, pero la promesa del motor de conexión eterna se ha ido.',
        choices: {
        },
      },
      'story-583921467-11': {
        title: 'Horizonte Fusionado',
        narration: 'Tomas la mano de Elías y atraviesas el arco luminoso. Múltiples futuros se fusionan en un tapiz de hitos compartidos: descubrimientos científicos, aniversarios tranquilos y votos largamente esperados. Sientes cómo cada versión de tu amor se une, anclada por la confianza.',
        choices: {
        },
      },
      'story-583921467-12': {
        title: 'Reinicio Solitario',
        narration: 'Particionas el Motor del Corazón, programando una red de seguridad que mantiene cada futuro a distancia. La paradoja colapsa de forma segura, pero en cada línea temporal resultante tú y Elías eligen el deber sobre la devoción. La ciudad está salvada, pero caminan por caminos separados, sabiendo que la seguridad llegó a costa del destino compartido.',
        choices: {
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Das Herz des Zeitwächters',
    description: 'Als eine Zeitingenieurin und ihr Partner den Uhrwerkkern entdecken, der ihre Zukunft miteinander verbindet, riskiert jede Entscheidung, ihre Liebe über Jahrhunderte hinweg neu zu schreiben.',
    author: 'Nova Strickland',
    nodes: {
      'story-583921467-1': {
        title: 'Zeitlicher Heiratsantrag',
        narration: 'Die Stadt tickt im Einklang mit der Chronosphäre unter ihr. Du und dein Partner Elias stehen vor der Herzmaschine – einem glitzernden Mechanismus, der Zukünfte weben kann. Heute Abend wolltest du einen Heiratsantrag machen, doch die Maschine pulsiert unregelmäßig und projiziert gebrochene Visionen von euch beiden, getrennt. Stellst du dich der Anomalie direkt oder erforschst du die im Herzen kodierte Prophezeiung?',
        choices: {
          'story-583921467-c1': {
            text: 'Tauche in die Datenarchive ein, um die Warnung zu entschlüsseln',
          },
          'story-583921467-c2': {
            text: 'Gehe zum Observatorium und verfolge den zeitlichen Bruch',
          },
        },
      },
      'story-583921467-2': {
        title: 'Chronoverriegelte Bibliothek',
        narration: 'Regale mit schimmernden Glyphenstapeln rotieren um dich herum. Ein Puls der Herzmaschine brennt durch den Katalog und hebt eine kodierte Erklärung von euren zukünftigen Ichs hervor. Sie spricht von einer Entscheidung, die die Liebe bewahrt, aber die Zeit zerbricht. Du kannst versuchen, die verlorene Zeile der Erklärung zu rekonstruieren oder die Signalwellenform der Maschine zu analysieren.',
        choices: {
          'story-583921467-c3': {
            text: 'Rekonstruiere die fehlende Zeile der Erklärung',
          },
          'story-583921467-c4': {
            text: 'Modelliere die Wellenform, um den Paradoxon-Höhepunkt vorherzusagen',
          },
        },
      },
      'story-583921467-3': {
        title: 'Uhrwerk-Observatorium',
        narration: 'Die Observatoriumskuppel summt, während Sternenlicht durch Chrono-Linsen bricht. Du richtest das Signal der Herzmaschine an schimmernden Sternbildern aus und enthüllst eine Zeitlinie, in der Elias verschwindet. Der einzige Anker ist ein zeitliches Band, das an deinen Puls gebunden ist. Folgst du dem Ruf dieses Bandes oder konstruierst du das Gerät um, damit die Last geteilt wird?',
        choices: {
          'story-583921467-c5': {
            text: 'Folge dem Band, um die zukünftige Version deiner selbst zu treffen',
          },
          'story-583921467-c6': {
            text: 'Modifiziere das Gerät, damit Elias die zeitliche Last teilt',
          },
        },
      },
      'story-583921467-4': {
        title: 'Herz der Maschine',
        narration: 'Deine Rekonstruktion stabilisiert die Herzmaschine kurzzeitig. Eine Projektion von dir und Elias, die über Jahrhunderte hinweg Gelübde austauschen, flackert in die Luft. Die Maschine bietet eine Wahl: Synchronisiere eure Herzschläge, um Zeitlinien dauerhaft zu verbinden, oder leite die überschüssige Energie in ein Backup-Gitter um.',
        choices: {
          'story-583921467-c7': {
            text: 'Synchronisiere die Herzschläge und harmonisiere den Kern',
          },
          'story-583921467-c8': {
            text: 'Leite die Energie in ein Ausfallsicherheitsgitter',
          },
        },
      },
      'story-583921467-5': {
        title: 'Zukünftige Echos',
        narration: 'Das Band zieht dich in einen leuchtenden Korridor überlappender Momente. Eine zukünftige Version von Elias erscheint und hält den vollendeten Kern der Herzmaschine. Er warnt, dass eure Liebe nur dann fortbesteht, wenn ihr ein gemeinsames Schicksal akzeptiert – eines, in dem ihr beide bestimmte Freiheiten aufgebt. Nimmst du dieses gemeinsame Schicksal an oder brichst du das Band, um einen anderen Weg zu finden?',
        choices: {
          'story-583921467-c9': {
            text: 'Nimm das gemeinsame Schicksal an und verschmelze die Zeitlinien',
          },
          'story-583921467-c10': {
            text: 'Zerbrich das Band und suche nach einem alternativen Weg',
          },
        },
      },
      'story-583921467-6': {
        title: 'Riskantes Experiment',
        narration: 'Du und Elias verbindet Chronocast-Armbänder und teilt die Energiewelle. Die Herzmaschine stabilisiert sich, aber ein Timer erscheint – fünf Minuten bis zu einem Paradoxon-Kollaps. Eine Option ist, sofort in die harmonisierte Zeitlinie zu starten; die andere ist abzubrechen und zu akzeptieren, dass die Maschine dauerhaft versagen könnte.',
        choices: {
          'story-583921467-c11': {
            text: 'Initiiere den harmonisierten Start gemeinsam',
          },
          'story-583921467-c12': {
            text: 'Brich ab und fahre die Herzmaschine herunter',
          },
        },
      },
      'story-583921467-7': {
        title: 'Unendliche Gelübde',
        narration: 'Mit synchronisierten Herzschlägen phasiert ihr, du und Elias, in ein gemeinsames Kontinuum. Du beobachtest, wie eure Hochzeit sich unter einem Himmel atemberaubender Polarlichter entfaltet, jeder Moment über Zeitlinien hinweg widergespiegelt. Die Herzmaschine schnurrt stetig; die Zukunft gehört euch, um sie gemeinsam zu schreiben. Das Herz des Zeitwächters schlägt weiter, mit eurem eigenen verwoben.',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'Paradoxon-Verhandlung',
        narration: 'Das Ausfallsicherheitsgitter erblüht zu einer schimmernden Brücke. Drei zukünftige Versionen von dir und Elias greifen darüber hinweg, jede repräsentiert ein anderes Leben, das ihr teilen könntet. Eine drängt auf Vertrauen, eine andere besteht auf Unabhängigkeit, und die letzte bietet einen Kompromiss mit Schutzmaßnahmen. Welchen Pfad wirst du in die Herzmaschine einschließen?',
        choices: {
          'story-583921467-c13': {
            text: 'Vertraue der Zukunft vollständig und schreitet gemeinsam hindurch',
          },
          'story-583921467-c14': {
            text: 'Behalte eine Absicherung und unterteile die Maschine vorsichtshalber',
          },
        },
      },
      'story-583921467-9': {
        title: 'Einsame Zeitlinie',
        narration: 'Du durchtrennst das Band und die Herzmaschine beruhigt sich in Stille. Die Stadt läuft weiter, unwissend über das, was fast verloren ging. Jahre später erhaschst du flüchtige Blicke auf ein Leben, in dem du und Elias zusammenstanden. Das Wissen um das, was hätte sein können, verweilt wie ein Phantom-Herzschlag.',
        choices: {
        },
      },
      'story-583921467-10': {
        title: 'Zersplitterte Zeitlinie',
        narration: 'Du schaltest die Herzmaschine aus. Die Paradoxon-Blase kollabiert ungleichmäßig und zersplittert Fragmente eurer gemeinsamen Erinnerungen. Du und Elias bleibt zusammen, aber fühlt die Distanz vergessener Dinge – Insider-Witze, nächtliche Ambitionen, ein Antrag, der nie gemacht wurde. Die Liebe überlebt, aber das Versprechen der Maschine von unendlicher Verbindung ist fort.',
        choices: {
        },
      },
      'story-583921467-11': {
        title: 'Verschmolzener Horizont',
        narration: 'Du ergreifst Elias\' Hand und schreitest durch den leuchtenden Bogen. Mehrere Zukünfte verschmelzen zu einem Wandteppich gemeinsamer Meilensteine – wissenschaftliche Durchbrüche, stille Jahrestage und lang erwartete Gelübde. Du fühlst, wie jede Version eurer Liebe zusammenfließt, verankert durch Vertrauen.',
        choices: {
        },
      },
      'story-583921467-12': {
        title: 'Alleiniger Neustart',
        narration: 'Du unterteilst die Herzmaschine und programmierst eine Absicherung, die jede Zukunft auf Distanz hält. Das Paradoxon kollabiert sicher, aber in jeder resultierenden Zeitlinie wählt ihr, du und Elias, Pflicht über Hingabe. Die Stadt ist gerettet, doch ihr geht getrennte Wege, wissend, dass Sicherheit auf Kosten des gemeinsamen Schicksals kam.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Le Cœur du Gardien du Temps',
    description: 'Quand une ingénieure temporelle et son partenaire découvrent le noyau d\'horlogerie qui lie leurs avenirs ensemble, chaque choix risque de réécrire leur amour à travers les siècles.',
    author: 'Nova Strickland',
    nodes: {
      'story-583921467-1': {
        title: 'Proposition Temporelle',
        narration: 'La ville bat en harmonie avec la Chronosphère sous elle. Toi et ton partenaire, Élias, vous tenez devant le Moteur du Cœur, un mécanisme scintillant capable de tisser des avenirs. Ce soir, tu avais l\'intention de faire ta demande, mais le moteur pulse de façon erratique, projetant des visions fracturées de vous deux séparés. Affrontes-tu l\'anomalie de front ou recherches-tu la prophétie encodée dans le cœur ?',
        choices: {
          'story-583921467-c1': {
            text: 'Plonge dans les archives de données pour déchiffrer l\'avertissement',
          },
          'story-583921467-c2': {
            text: 'Va à l\'observatoire et trace la faille temporelle',
          },
        },
      },
      'story-583921467-2': {
        title: 'Bibliothèque Chronoverrouillée',
        narration: 'Des étagères de piles de glyphes chatoyants tournent autour de toi. Une impulsion du Moteur du Cœur brûle à travers le catalogue, mettant en évidence une déclaration codée de vos futurs vous-mêmes. Elle parle d\'un choix qui préserve l\'amour mais fracture le temps. Tu peux tenter de reconstruire la ligne perdue de la déclaration ou analyser la forme d\'onde du signal du moteur.',
        choices: {
          'story-583921467-c3': {
            text: 'Recrée la ligne manquante de la déclaration',
          },
          'story-583921467-c4': {
            text: 'Modélise la forme d\'onde pour prédire le pic du paradoxe',
          },
        },
      },
      'story-583921467-3': {
        title: 'Observatoire d\'Horlogerie',
        narration: 'Le dôme de l\'observatoire bourdonne tandis que la lumière des étoiles se réfracte à travers les lentilles chrono. Tu alignes le signal du Moteur du Cœur avec des constellations scintillantes, révélant une ligne temporelle où Élias disparaît. Le seul ancrage est un lien temporel attaché à ton pouls. Réponds-tu à l\'appel de ce lien ou reconçois-tu l\'appareil pour partager le fardeau ?',
        choices: {
          'story-583921467-c5': {
            text: 'Suis le lien pour rencontrer la version future de toi-même',
          },
          'story-583921467-c6': {
            text: 'Modifie l\'appareil pour qu\'Élias partage la charge temporelle',
          },
        },
      },
      'story-583921467-4': {
        title: 'Cœur du Moteur',
        narration: 'Ta reconstruction stabilise brièvement le Moteur du Cœur. Une projection de toi et d\'Élias échangeant des vœux à travers les siècles vacille dans l\'air. Le moteur offre un choix : synchroniser vos battements de cœur pour lier définitivement les lignes temporelles, ou réacheminer l\'énergie excédentaire vers un réseau de secours.',
        choices: {
          'story-583921467-c7': {
            text: 'Synchronise les battements de cœur et harmonise le noyau',
          },
          'story-583921467-c8': {
            text: 'Canalise l\'énergie vers un réseau de sécurité',
          },
        },
      },
      'story-583921467-5': {
        title: 'Échos du Futur',
        narration: 'Le lien t\'attire dans un corridor lumineux de moments qui se chevauchent. Une version future d\'Élias apparaît, tenant le noyau complet du Moteur du Cœur. Il avertit que votre amour ne perdure que si vous acceptez un destin partagé, un où vous renoncez tous deux à certaines libertés. Embrasses-tu ce destin partagé ou brises-tu le lien pour forger un chemin différent ?',
        choices: {
          'story-583921467-c9': {
            text: 'Embrasse le destin partagé et fusionne les lignes temporelles',
          },
          'story-583921467-c10': {
            text: 'Brise le lien et cherche une route alternative',
          },
        },
      },
      'story-583921467-6': {
        title: 'Expérience Risquée',
        narration: 'Toi et Élias connectez des chronodiffuseurs montés au poignet, partageant la déferlante. Le Moteur du Cœur se stabilise, mais un minuteur apparaît : cinq minutes avant l\'effondrement du paradoxe. Une option est de lancer immédiatement dans la ligne temporelle harmonisée ; l\'autre est d\'abandonner, acceptant que le moteur puisse échouer définitivement.',
        choices: {
          'story-583921467-c11': {
            text: 'Lance le départ harmonisé ensemble',
          },
          'story-583921467-c12': {
            text: 'Abandonne et éteins le Moteur du Cœur',
          },
        },
      },
      'story-583921467-7': {
        title: 'Vœux Infinis',
        narration: 'Avec les battements de cœur synchronisés, toi et Élias vous déphasez dans un continuum partagé. Tu regardes votre mariage se dérouler sous un ciel d\'aurores saisissantes, chaque moment répercuté à travers les lignes temporelles. Le Moteur du Cœur ronronne régulièrement ; l\'avenir est le vôtre pour l\'écrire ensemble. Le Cœur du Gardien du Temps bat, entrelacé avec le vôtre.',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'Négociation de Paradoxe',
        narration: 'Le réseau de sécurité s\'épanouit en un pont scintillant. Trois versions futures de toi et d\'Élias s\'y tendent, chacune représentant une vie différente que vous pourriez partager. L\'une exhorte à la confiance, une autre insiste sur l\'indépendance, et la dernière offre un compromis avec des garanties. Quel chemin vas-tu verrouiller dans le Moteur du Cœur ?',
        choices: {
          'story-583921467-c13': {
            text: 'Fais entièrement confiance à l\'avenir et traversez ensemble',
          },
          'story-583921467-c14': {
            text: 'Garde une sécurité et partitionne le moteur au cas où',
          },
        },
      },
      'story-583921467-9': {
        title: 'Ligne Temporelle Solitaire',
        narration: 'Tu coupes le lien et le Moteur du Cœur se stabilise dans le silence. La ville continue, inconsciente de ce qui a failli être perdu. Des années plus tard, tu aperçois des visions fugaces d\'une vie où toi et Élias étiez ensemble. La connaissance de ce qui aurait pu être persiste comme un battement de cœur fantôme.',
        choices: {
        },
      },
      'story-583921467-10': {
        title: 'Ligne Temporelle Brisée',
        narration: 'Tu éteins le Moteur du Cœur. La bulle de paradoxe s\'effondre de manière inégale, fracassant des fragments de vos souvenirs partagés. Toi et Élias restez ensemble mais ressentez la distance des choses oubliées : blagues intimes, ambitions nocturnes, une demande jamais faite. L\'amour survit, mais la promesse du moteur d\'une connexion éternelle est partie.',
        choices: {
        },
      },
      'story-583921467-11': {
        title: 'Horizon Fusionné',
        narration: 'Tu prends la main d\'Élias et traverses l\'arche lumineuse. De multiples avenirs fusionnent en une tapisserie de jalons partagés : percées scientifiques, anniversaires tranquilles et vœux longtemps attendus. Tu ressens chaque version de votre amour se fondre, ancrée par la confiance.',
        choices: {
        },
      },
      'story-583921467-12': {
        title: 'Réinitialisation Solitaire',
        narration: 'Tu partitionnes le Moteur du Cœur, programmant une sécurité qui garde chaque avenir à distance. Le paradoxe s\'effondre en toute sécurité, mais dans chaque ligne temporelle résultante, toi et Élias choisissez le devoir plutôt que la dévotion. La ville est sauvée, mais vous marchez sur des chemins séparés, sachant que la sécurité est venue au prix du destin partagé.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'O Coração do Guardião do Tempo',
    description: 'Quando uma engenheira temporal e seu parceiro descobrem o núcleo de relojoaria que une seus futuros, cada escolha arrisca reescrever seu amor através dos séculos.',
    author: 'Nova Strickland',
    nodes: {
      'story-583921467-1': {
        title: 'Proposta Temporal',
        narration: 'A cidade pulsa em harmonia com a Cronosfera abaixo dela. Você e seu parceiro, Elias, estão diante do Motor do Coração - um mecanismo reluzente capaz de tecer futuros. Esta noite você pretendia fazer o pedido, mas o motor pulsa erraticamente, projetando visões fragmentadas de vocês dois separados. Você enfrenta a anomalia de frente ou pesquisa a profecia codificada no coração?',
        choices: {
          'story-583921467-c1': {
            text: 'Mergulhe nos arquivos de dados para decifrar o aviso',
          },
          'story-583921467-c2': {
            text: 'Vá ao observatório e rastreie a falha temporal',
          },
        },
      },
      'story-583921467-2': {
        title: 'Biblioteca Cronobloqueada',
        narration: 'Prateleiras de pilhas de glifos cintilantes giram ao seu redor. Um pulso do Motor do Coração queima através do catálogo, destacando uma declaração codificada de seus eus futuros. Ela fala de uma escolha que preserva o amor mas fratura o tempo. Você pode tentar reconstruir a linha perdida da declaração ou analisar a forma de onda do sinal do motor.',
        choices: {
          'story-583921467-c3': {
            text: 'Recrie a linha faltante da declaração',
          },
          'story-583921467-c4': {
            text: 'Modele a forma de onda para prever o pico do paradoxo',
          },
        },
      },
      'story-583921467-3': {
        title: 'Observatório de Relojoaria',
        narration: 'A cúpula do observatório zumbe enquanto a luz estelar se refrata através de lentes crono. Você alinha o sinal do Motor do Coração com constelações reluzentes, revelando uma linha temporal onde Elias desaparece. A única âncora é uma amarra temporal ligada ao seu pulso. Você atende ao chamado dessa amarra ou reconstrói o dispositivo para compartilhar o fardo?',
        choices: {
          'story-583921467-c5': {
            text: 'Siga a amarra para encontrar a versão futura de si mesmo',
          },
          'story-583921467-c6': {
            text: 'Modifique o dispositivo para que Elias compartilhe a carga temporal',
          },
        },
      },
      'story-583921467-4': {
        title: 'Coração do Motor',
        narration: 'Sua reconstrução estabiliza brevemente o Motor do Coração. Uma projeção de você e Elias trocando votos através dos séculos tremula no ar. O motor oferece uma escolha: sincronizar seus batimentos cardíacos para vincular permanentemente as linhas temporais, ou redirecionar a energia excedente para uma rede de reserva.',
        choices: {
          'story-583921467-c7': {
            text: 'Sincronize os batimentos cardíacos e harmonize o núcleo',
          },
          'story-583921467-c8': {
            text: 'Canalize a energia para uma rede de segurança',
          },
        },
      },
      'story-583921467-5': {
        title: 'Ecos do Futuro',
        narration: 'A amarra te atrai para um corredor luminoso de momentos sobrepostos. Uma versão futura de Elias aparece, segurando o núcleo completo do Motor do Coração. Ele avisa que seu amor perdura apenas se você aceitar um destino compartilhado - um onde ambos renunciam a certas liberdades. Você abraça esse destino compartilhado ou rompe a amarra para forjar um caminho diferente?',
        choices: {
          'story-583921467-c9': {
            text: 'Abrace o destino compartilhado e funda as linhas temporais',
          },
          'story-583921467-c10': {
            text: 'Rompa a amarra e procure uma rota alternativa',
          },
        },
      },
      'story-583921467-6': {
        title: 'Experimento Arriscado',
        narration: 'Você e Elias conectam cronotransmissores montados no pulso, compartilhando a onda. O Motor do Coração se estabiliza, mas um cronômetro aparece - cinco minutos antes de um colapso de paradoxo. Uma opção é lançar imediatamente na linha temporal harmonizada; a outra é abortar, aceitando que o motor pode falhar permanentemente.',
        choices: {
          'story-583921467-c11': {
            text: 'Inicie o lançamento harmonizado juntos',
          },
          'story-583921467-c12': {
            text: 'Aborte e desligue o Motor do Coração',
          },
        },
      },
      'story-583921467-7': {
        title: 'Votos Infinitos',
        narration: 'Com batimentos cardíacos sincronizados, você e Elias passam para um continuum compartilhado. Você assiste seu casamento se desenrolar sob um céu de auroras deslumbrantes, cada momento ecoado através das linhas temporais. O Motor do Coração ronrona firmemente; o futuro é de vocês para escreverem juntos. O Coração do Guardião do Tempo continua batendo, entrelaçado com o seu próprio.',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'Negociação de Paradoxo',
        narration: 'A rede de segurança floresce em uma ponte cintilante. Três versões futuras de você e Elias se estendem através dela, cada uma representando uma vida diferente que vocês poderiam compartilhar. Uma insiste em confiança, outra insiste em independência, e a última oferece um compromisso com salvaguardas. Qual caminho você vai fixar no Motor do Coração?',
        choices: {
          'story-583921467-c13': {
            text: 'Confie completamente no futuro e atravessem juntos',
          },
          'story-583921467-c14': {
            text: 'Mantenha uma proteção e particione o motor por precaução',
          },
        },
      },
      'story-583921467-9': {
        title: 'Linha Temporal Solitária',
        narration: 'Você rompe a amarra e o Motor do Coração se estabiliza em silêncio. A cidade continua, inconsciente do que quase foi perdido. Anos depois, você captura vislumbres fugidios de uma vida onde você e Elias estiveram juntos. O conhecimento do que poderia ter sido permanece como um batimento cardíaco fantasma.',
        choices: {
        },
      },
      'story-583921467-10': {
        title: 'Linha Temporal Estilhaçada',
        narration: 'Você desliga o Motor do Coração. A bolha de paradoxo entra em colapso irregularmente, estilhaçando fragmentos de suas memórias compartilhadas. Você e Elias permanecem juntos mas sentem a distância de coisas esquecidas - piadas internas, ambições noturnas, um pedido que nunca foi feito. O amor sobrevive, mas a promessa do motor de conexão eterna se foi.',
        choices: {
        },
      },
      'story-583921467-11': {
        title: 'Horizonte Fundido',
        narration: 'Você segura a mão de Elias e atravessa o arco luminoso. Múltiplos futuros se fundem em uma tapeçaria de marcos compartilhados - descobertas científicas, aniversários tranquilos e votos há muito esperados. Você sente cada versão de seu amor se unir, ancorada pela confiança.',
        choices: {
        },
      },
      'story-583921467-12': {
        title: 'Reinício Solitário',
        narration: 'Você particiona o Motor do Coração, programando uma proteção que mantém cada futuro à distância. O paradoxo entra em colapso com segurança, mas em cada linha temporal resultante você e Elias escolhem dever em vez de devoção. A cidade está salva, mas vocês caminham por caminhos separados, sabendo que a segurança veio ao custo do destino compartilhado.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '時守の心臓',
    description: '時間工学者と彼女のパートナーが二人の未来を繋ぐ時計仕掛けの核を発見したとき、全ての選択が何世紀にもわたる愛を書き換える危険を伴う。',
    author: 'ノヴァ・ストリックランド',
    nodes: {
      'story-583921467-1': {
        title: '時間的プロポーズ',
        narration: '街はその下にあるクロノスフィアと調和して刻を刻む。あなたとパートナーのエリアスは、未来を織りなすことができる輝く機構、ハートエンジンの前に立っている。今夜はプロポーズするつもりだったが、エンジンは不規則に脈打ち、二人が離れ離れになる断片的なビジョンを映し出す。異常に正面から立ち向かうか、心臓に刻まれた予言を研究するか。',
        choices: {
          'story-583921467-c1': {
            text: 'データアーカイブに潜り込み警告を解読する',
          },
          'story-583921467-c2': {
            text: '天文台に向かい時間的断層を追跡する',
          },
        },
      },
      'story-583921467-2': {
        title: '時間封鎖図書館',
        narration: 'きらめく文字の山の棚があなたの周りを回転する。ハートエンジンからのパルスがカタログを焼き尽くし、未来の自分たちからの暗号化された宣言を浮かび上がらせる。それは愛を守るが時間を砕く選択について語っている。宣言の失われた一行を再構築するか、エンジンの信号波形を分析することができる。',
        choices: {
          'story-583921467-c3': {
            text: '宣言の失われた一行を再現する',
          },
          'story-583921467-c4': {
            text: '波形をモデル化してパラドックスのピークを予測する',
          },
        },
      },
      'story-583921467-3': {
        title: '時計仕掛けの天文台',
        narration: '天文台のドームが唸りを上げ、星の光がクロノレンズを通って屈折する。ハートエンジンの信号をきらめく星座と整列させると、エリアスが消える時間軸が明らかになる。唯一の錨は、あなたの脈拍に結びついた時間的繋留索だ。その繋留索の呼びかけに答えるか、装置を再設計して負荷を共有するか。',
        choices: {
          'story-583921467-c5': {
            text: '繋留索に従い未来の自分に会いに行く',
          },
          'story-583921467-c6': {
            text: 'エリアスが時間的負荷を共有できるよう装置を改造する',
          },
        },
      },
      'story-583921467-4': {
        title: 'エンジンの心臓',
        narration: 'あなたの再構築はハートエンジンを一時的に安定させる。何世紀にもわたって誓いを交わすあなたとエリアスの投影が空中に揺らめく。エンジンは選択を提示する:心拍を同期させて時間軸を永久に繋ぐか、余剰エネルギーをバックアップ格子に経路変更するか。',
        choices: {
          'story-583921467-c7': {
            text: '心拍を同期させ核を調和させる',
          },
          'story-583921467-c8': {
            text: 'エネルギーをフェイルセーフ格子に流す',
          },
        },
      },
      'story-583921467-5': {
        title: '未来のこだま',
        narration: '繋留索があなたを重なり合う瞬間の発光する回廊へと引き寄せる。完成したハートエンジンの核を持つ未来のエリアスが現れる。彼は、あなたたちの愛が耐え続けるのは共有された運命を受け入れた場合のみであり、二人とも特定の自由を放棄することになると警告する。その共有された運命を受け入れるか、繋留索を断ち切って別の道を切り開くか。',
        choices: {
          'story-583921467-c9': {
            text: '共有された運命を受け入れ時間軸を融合する',
          },
          'story-583921467-c10': {
            text: '繋留索を断ち切り別のルートを探す',
          },
        },
      },
      'story-583921467-6': {
        title: '危険な実験',
        narration: 'あなたとエリアスは手首装着型クロノキャスターを接続し、高まりを共有する。ハートエンジンは安定するが、タイマーが現れる—パラドックス崩壊まであと5分。一つの選択肢は調和した時間軸に即座に突入すること。もう一つは中止し、エンジンが永久に故障する可能性を受け入れることだ。',
        choices: {
          'story-583921467-c11': {
            text: '一緒に調和した発進を開始する',
          },
          'story-583921467-c12': {
            text: '中止してハートエンジンをシャットダウンする',
          },
        },
      },
      'story-583921467-7': {
        title: '無限の誓い',
        narration: '心拍が同期し、あなたとエリアスは共有された連続体へと位相する。息を呑むようなオーロラの空の下で結婚式が展開するのを見る。全ての瞬間が時間軸を越えて反響する。ハートエンジンは着実に鼓動を続ける。未来は二人で書くものだ。時守の心臓は、あなた自身の心臓と絡み合って鼓動し続ける。',
        choices: {
        },
      },
      'story-583921467-8': {
        title: 'パラドックス交渉',
        narration: 'フェイルセーフ格子がきらめく橋へと花開く。あなたとエリアスの三つの未来バージョンがその橋を越えて手を伸ばし、それぞれが共有できる異なる人生を表している。一つは信頼を促し、もう一つは独立を主張し、最後の一つは保護措置付きの妥協を提案する。どの道をハートエンジンに固定するか。',
        choices: {
          'story-583921467-c13': {
            text: '未来を完全に信頼し一緒に踏み出す',
          },
          'story-583921467-c14': {
            text: '念のためフェイルセーフを保持しエンジンを分割する',
          },
        },
      },
      'story-583921467-9': {
        title: '孤独な時間軸',
        narration: 'あなたは繋留索を断ち切り、ハートエンジンは静寂の中で安定する。街は失われかけたものに気づかずに続いていく。何年も後、あなたとエリアスが一緒に立っていた人生の儚い一瞥を捉える。あり得たかもしれないものの知識が、幻の心拍のように残り続ける。',
        choices: {
        },
      },
      'story-583921467-10': {
        title: '砕かれた時間軸',
        narration: 'ハートエンジンの電源を切る。パラドックスの泡が不均等に崩壊し、共有された記憶の断片を砕く。あなたとエリアスは一緒にいるが、忘れられたもの—内輪のジョーク、夜更かしの野望、されることのなかったプロポーズ—の距離を感じる。愛は生き残るが、エンジンが約束した永遠の繋がりは失われた。',
        choices: {
        },
      },
      'story-583921467-11': {
        title: '融合した地平線',
        narration: 'エリアスの手を握り、発光するアーチを通り抜ける。複数の未来が共有されたマイルストーンのタペストリーへと融合する—科学的突破、静かな記念日、そして待ち望まれた誓い。あなたの愛のすべてのバージョンが、信頼によって固定されて結集するのを感じる。',
        choices: {
        },
      },
      'story-583921467-12': {
        title: '孤独なリセット',
        narration: 'ハートエンジンを分割し、各未来を距離を置いて保つフェイルセーフをプログラムする。パラドックスは安全に崩壊するが、結果として生じる全ての時間軸で、あなたとエリアスは献身より義務を選ぶ。街は救われたが、二人は別々の道を歩む。安全は共有された運命を犠牲にしてもたらされたことを知りながら。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '时间守护者之心',
    description: '当一位时间工程师和她的伴侣发现连接他们未来的钟表核心时，每一个选择都可能改写他们跨越世纪的爱情。',
    author: '诺娃·斯特里克兰',
    nodes: {
      'story-583921467-1': {
        title: '时间求婚',
        narration: '城市与下方的时空球和谐地滴答作响。你和你的伴侣伊莱亚斯站在心脏引擎前——一个能够编织未来的闪光机械装置。今晚你本打算求婚，但引擎不规律地跳动，投射出你们俩分离的破碎幻象。你是直面这个异常，还是研究编码在心脏中的预言？',
        choices: {
          'story-583921467-c1': {
            text: '深入数据档案解读警告',
          },
          'story-583921467-c2': {
            text: '前往天文台追踪时间断层',
          },
        },
      },
      'story-583921467-2': {
        title: '时间锁定图书馆',
        narration: '闪烁的符文堆积的书架在你周围旋转。心脏引擎的脉冲穿透目录，突出显示来自未来的你们的加密声明。它讲述了一个保存爱情但打碎时间的选择。你可以尝试重建声明中丢失的那一行，或者分析引擎的信号波形。',
        choices: {
          'story-583921467-c3': {
            text: '重现声明中缺失的那一行',
          },
          'story-583921467-c4': {
            text: '模拟波形以预测悖论峰值',
          },
        },
      },
      'story-583921467-3': {
        title: '钟表天文台',
        narration: '天文台的圆顶嗡嗡作响，星光通过时间透镜折射。你将心脏引擎的信号与闪烁的星座对齐，揭示了伊莱亚斯消失的时间线。唯一的锚点是与你脉搏相连的时间系绳。你是回应这条系绳的召唤，还是重新设计设备以分担负担？',
        choices: {
          'story-583921467-c5': {
            text: '跟随系绳去见未来的自己',
          },
          'story-583921467-c6': {
            text: '修改设备让伊莱亚斯分担时间负载',
          },
        },
      },
      'story-583921467-4': {
        title: '引擎之心',
        narration: '你的重建短暂地稳定了心脏引擎。你和伊莱亚斯跨越世纪交换誓言的投影在空中闪烁。引擎提供了一个选择：同步你们的心跳以永久连接时间线，或将多余的能量重新导向备用网格。',
        choices: {
          'story-583921467-c7': {
            text: '同步心跳并协调核心',
          },
          'story-583921467-c8': {
            text: '将能量导入故障安全网格',
          },
        },
      },
      'story-583921467-5': {
        title: '未来的回声',
        narration: '系绳将你拉入一条由重叠瞬间组成的发光走廊。未来版本的伊莱亚斯出现了，手持完整的心脏引擎核心。他警告说，只有当你接受共同命运时，你们的爱才能持续——一个你们都需要放弃某些自由的命运。你是拥抱这个共同的命运，还是切断系绳开辟不同的道路？',
        choices: {
          'story-583921467-c9': {
            text: '拥抱共同命运并融合时间线',
          },
          'story-583921467-c10': {
            text: '切断系绳寻找替代路线',
          },
        },
      },
      'story-583921467-6': {
        title: '冒险实验',
        narration: '你和伊莱亚斯连接手腕上的时间投射器，共享能量涌动。心脏引擎稳定下来，但出现了一个计时器——距离悖论崩溃还有五分钟。一个选择是立即启动进入协调的时间线；另一个是中止，接受引擎可能永久失效的结果。',
        choices: {
          'story-583921467-c11': {
            text: '一起启动协调发射',
          },
          'story-583921467-c12': {
            text: '中止并关闭心脏引擎',
          },
        },
      },
      'story-583921467-7': {
        title: '无尽誓言',
        narration: '心跳同步后，你和伊莱亚斯进入了共享的连续体。你看着你们的婚礼在令人惊叹的极光下展开，每一刻都跨越时间线回响。心脏引擎稳定地轰鸣；未来属于你们共同书写。时间守护者之心继续跳动，与你自己的心交织在一起。',
        choices: {
        },
      },
      'story-583921467-8': {
        title: '悖论谈判',
        narration: '故障安全网格绽放成一座闪烁的桥梁。你和伊莱亚斯的三个未来版本在桥上伸出手，每个都代表你们可能共享的不同生活。一个敦促信任，另一个坚持独立，最后一个提供带有保障的妥协。你会在心脏引擎中锁定哪条道路？',
        choices: {
          'story-583921467-c13': {
            text: '完全信任未来并一起跨过',
          },
          'story-583921467-c14': {
            text: '保留故障保护并分割引擎以防万一',
          },
        },
      },
      'story-583921467-9': {
        title: '孤独时间线',
        narration: '你切断了系绳，心脏引擎在寂静中稳定下来。城市继续运转，对几乎失去的东西浑然不觉。多年后，你瞥见了你和伊莱亚斯在一起的生活片段。本可能发生的事情的知识像幽灵般的心跳一样挥之不去。',
        choices: {
        },
      },
      'story-583921467-10': {
        title: '破碎时间线',
        narration: '你关闭了心脏引擎。悖论气泡不均匀地崩溃，粉碎了你们共同记忆的碎片。你和伊莱亚斯仍然在一起，但感受到被遗忘事物的距离——内部笑话、深夜的雄心、从未做出的求婚。爱幸存下来，但引擎承诺的永恒连接已经消失。',
        choices: {
        },
      },
      'story-583921467-11': {
        title: '融合地平线',
        narration: '你握住伊莱亚斯的手，穿过发光的拱门。多个未来融合成共同里程碑的挂毯——科学突破、安静的周年纪念和期待已久的誓言。你感受到你们爱的每一个版本都凝聚在一起，由信任锚定。',
        choices: {
        },
      },
      'story-583921467-12': {
        title: '孤独重启',
        narration: '你分割心脏引擎，编程一个故障保护程序，使每个未来保持距离。悖论安全崩溃，但在每条结果时间线中，你和伊莱亚斯选择责任而非奉献。城市得救了，但你们走着分离的道路，知道安全是以共同命运为代价的。',
        choices: {
        },
      },
    },
  },

  // 한국어 - Not yet translated
  ko: { title: '', description: '', author: '', nodes: {} },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
