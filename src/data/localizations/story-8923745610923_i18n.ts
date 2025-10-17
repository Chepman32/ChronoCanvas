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

export const story_8923745610923StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Paradox Palette',
    description: 'At midnight, a museum restorer discovers a sketchbook that can repaint time. Each line drawn mends one fracture and splits another, as a grieving curator moves to excise a tragic hour forever. Can you compose a timeline that holds--before the canvas tears itself apart?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-8923745610923-3': {
        title: 'Alley Experiment',
        narration: 'Rain needles the neon-slick pavement behind the museum. Nova sketches a thin arc; the puddle ripples backwards, raindrops leaping up like rewinding glass. A greenish seam opens above the gutter for a heartbeat--a rift that smells like ozone and old paper.',
        choices: {
          'story-8923745610923-c5': {
            text: 'Return inside to the clock hall.',
            description: 'Test the effect near a stable cadence.',
          },
          'story-8923745610923-c6': {
            text: 'Coax the rift wider with a bolder stroke.',
            description: 'High risk, high insight.',
          },
        },
      },
      'story-8923745610923-9': {
        title: 'Clockwork Heart',
        narration: 'The central mechanism opens like a ribcage, gears glistening with oil and memory. With a careful stroke, Nova bridges a missing tooth; the second hand exhales into smooth motion. In that calm, a hidden compartment clicks--an invitation.',
        choices: {
          'story-8923745610923-c18': {
            text: 'Open the revealed compartment.',
            description: 'Secrets cache where cadence holds.',
          },
          'story-8923745610923-c19': {
            text: 'Close up and backtrack to avoid traps.',
            description: 'Caution preserves options.',
          },
        },
      },
      'story-8923745610923-10': {
        title: 'Drawn Doorway',
        narration: 'The clock face accepts a doorway like paint taking to primer. Cold air spills through, flavored with dust and a scent like sun on old stone. Beyond, sand sings softly in a chamber that should not be.',
        choices: {
          'story-8923745610923-c20': {
            text: 'Search for the missing fragment first.',
            description: 'Maps matter.',
          },
          'story-8923745610923-c21': {
            text: 'Step through into the desert chamber.',
            description: 'Seize the initiative.',
          },
        },
      },
      'story-8923745610923-12': {
        title: 'Lost Fragment',
        narration: 'In a back room smelling of binders and cedar, a torn vellum shard hides inside an old conservation file. The piece shows a glyph that looks like a brushstroke shaped into a number nine lying on its side. When held to light, the mark resembles an eye--and a loop.',
        choices: {
          'story-8923745610923-c24': {
            text: 'Sketch a replacement glyph to test the circuit.',
            description: 'Improvise the missing key.',
          },
          'story-8923745610923-c25': {
            text: 'Use the fragment to open the hidden vault.',
            description: 'Original beats imitation.',
          },
        },
      },
      'story-8923745610923-13': {
        title: 'Quiet Interrogation',
        narration: 'You corner the curator in a gallery of antique clocks; time around you hushes in respect. Their eyes are salted with grief, voice brittle as they admit the plan: cut the hour of loss and refuse its echo. The blueprint trembles like a living thing.',
        choices: {
          'story-8923745610923-c26': {
            text: 'Ease them back--offer to help safely.',
            description: 'Turn an adversary into an ally.',
          },
          'story-8923745610923-c27': {
            text: 'Take the blueprint and sprint for the vault.',
            description: 'Action over argument.',
          },
        },
      },
      'story-8923745610923-14': {
        title: 'Hidden Vault',
        narration: 'A sand-scented draft whispers from an armored seam behind stacked crates. The fragment fits like a missing tooth into a circular lock, and the wall unstitches into a spiral stair. Something ancient and mathematical waits below.',
        choices: {
          'story-8923745610923-c28': {
            text: 'Seal the paradox circuit with careful strokes.',
            description: 'Stability first.',
          },
          'story-8923745610923-c29': {
            text: 'Step through to the chamber beyond.',
            description: 'Face the root cause.',
          },
          'story-8923745610923-c30': {
            text: 'Call the curator to join you.',
            description: 'Risk trust.',
          },
        },
      },
      'story-8923745610923-15': {
        title: 'Security Sweep',
        narration: 'Radios crackle--guards turn their route toward the clock hall. Nova sketches a detour, lines sliding a doorway three feet to the left, just enough to slip through. The building sighs, aggravated but compliant.',
        choices: {
          'story-8923745610923-c31': {
            text: 'Loop behind and resume tailing the curator.',
            description: 'Stay with the human variable.',
          },
          'story-8923745610923-c32': {
            text: 'Return to the drawn doorway.',
            description: 'The desert chamber calls.',
          },
        },
      },
      'story-8923745610923-16': {
        title: 'Ancient City',
        narration: 'Moonlight pools in a roofless chamber where sand drifts like snow. Reliefs show artists painting with comet tails, their murals looping days into new shapes. Footprints--fresh--circle a dais carved into a nine-turned-eye.',
        choices: {
          'story-8923745610923-c33': {
            text: 'Study the temple',
          },
          'story-8923745610923-c34': {
            text: 'Begin sealing the paradox from here.',
            description: 'Close the loop at its source.',
          },
        },
      },
      'story-8923745610923-18': {
        title: 'Paradox Equation',
        narration: 'Stars blink like nodes in a network, lines of potential connecting past to now. The blueprint overlays reality, showing the cut hour as a bright wound. The ChronoCanvas pulses, demanding a choice: heal by surrender, or heal by cost.',
        choices: {
          'story-8923745610923-c37': {
            text: 'Restore the hour and absorb the backlash yourself.',
            description: 'You keep the canvas--but it keeps you.',
          },
          'story-8923745610923-c38': {
            text: 'Let the canvas consume itself to close the wound.',
            description: 'Lose the tool, save the world.',
          },
        },
      },
      'story-8923745610923-19': {
        title: 'Allied Curator',
        narration: 'The curator arrives, eyes wet but steadied by your invitation. Together you place the fragment on the dais; your hands shake in mirror. In this shared frame, grief could become a brush instead of a blade.',
        choices: {
          'story-8923745610923-c39': {
            text: 'Seal the paradox together.',
            description: 'Two hands, one intention.',
          },
          'story-8923745610923-c40': {
            text: 'Trust them with the canvas for one stroke.',
            description: 'Offer agency--risk betrayal.',
          },
        },
      },
      'story-8923745610923-20': {
        title: 'Temple Trial',
        narration: 'Wind combs the sand into patient spirals. The murals whisper an answer: to fix a wound, paint over oneself where the wound would be. The dais thrums, counting down in a language of dust and heartbeat.',
        choices: {
          'story-8923745610923-c41': {
            text: 'Sacrifice the canvas to seal the breach.',
            description: 'A brush that paints itself away.',
          },
          'story-8923745610923-c42': {
            text: 'Rewrite your own thread to carry the scar.',
            description: 'Become the patch.',
          },
        },
      },
      'story-8923745610923-21': {
        title: 'Timeline Healed',
        narration: 'You restore the hour, accepting the backlash as a personal undertow. Days later, you wake with a new tremor, a ghost-tick in your wrist that syncs with distant storms. The world continues--whole--while you learn to hold its weather alone.',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: 'Canvas Consumed',
        narration: 'The ChronoCanvas drinks its own ink, page by page, until only a smell of rain remains. The wound closes without a seam, history smoothing over like wet paint drying. You will never sketch time again, but clocks everywhere breathe easier.',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: 'Betrayal Unraveling',
        narration: 'Given the canvas, the curator redraws the hour entirely--perfect, painless, impossible. The timeline refuses the lie, shredding into bright threads that sing like wire. You spend the rest of your days collecting the humming filaments, a weaver of fractures.',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: 'Self Rewrite',
        narration: 'You paint a careful scar into your own days, a looped nine-and-eye embedded in your memory. The paradox swallows the wound and leaves you different--a little out of phase, bright at the edges. Sometimes you catch yourself mid-stroke, already finishing a line you have not yet begun.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Парадоксальная Палитра',
    description: 'В полночь реставратор музея обнаруживает скетчбук, способный перерисовать время. Каждая проведённая линия исправляет один разлом и создаёт другой, пока скорбящий куратор пытается навсегда стереть трагический час. Сможешь ли ты создать временную линию, которая устоит--прежде чем холст разорвёт сам себя?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-8923745610923-3': {
        title: 'Эксперимент в Переулке',
        narration: 'Дождь иглами бьёт по неоново-скользкому тротуару за музеем. Нова набрасывает тонкую дугу; лужа рябит задом наперёд, капли дождя подскакивают вверх, как перематываемое стекло. Зеленоватый шов открывается над сточной канавой на мгновение--трещина, пахнущая озоном и старой бумагой.',
        choices: {
          'story-8923745610923-c5': {
            text: 'Вернись внутрь в зал часов.',
            description: 'Испытай эффект рядом со стабильным ритмом.',
          },
          'story-8923745610923-c6': {
            text: 'Расшири трещину более смелым штрихом.',
            description: 'Высокий риск, высокое озарение.',
          },
        },
      },
      'story-8923745610923-9': {
        title: 'Часовое Сердце',
        narration: 'Центральный механизм открывается, как грудная клетка, шестерни блестят от масла и памяти. Осторожным штрихом Нова восстанавливает недостающий зуб; секундная стрелка выдыхает в плавное движение. В этом спокойствии скрытый отсек щёлкает--приглашение.',
        choices: {
          'story-8923745610923-c18': {
            text: 'Открой обнаруженный отсек.',
            description: 'Секреты прячутся там, где держится ритм.',
          },
          'story-8923745610923-c19': {
            text: 'Закрой и отступи, чтобы избежать ловушек.',
            description: 'Осторожность сохраняет варианты.',
          },
        },
      },
      'story-8923745610923-10': {
        title: 'Нарисованный Проход',
        narration: 'Циферблат принимает дверной проём, как краска принимает грунтовку. Холодный воздух проливается сквозь, приправленный пылью и ароматом, как солнце на старом камне. За ним песок тихо поёт в камере, которой не должно быть.',
        choices: {
          'story-8923745610923-c20': {
            text: 'Сначала найди потерянный фрагмент.',
            description: 'Карты важны.',
          },
          'story-8923745610923-c21': {
            text: 'Шагни в пустынную камеру.',
            description: 'Захвати инициативу.',
          },
        },
      },
      'story-8923745610923-12': {
        title: 'Утерянный Фрагмент',
        narration: 'В задней комнате, пахнущей папками и кедром, рваный пергаментный осколок прячется в старом архиве консервации. Кусок показывает глиф, похожий на мазок кисти, сформированный в лежащую на боку девятку. На свету метка напоминает глаз--и петлю.',
        choices: {
          'story-8923745610923-c24': {
            text: 'Набросай замену глифа, чтобы проверить контур.',
            description: 'Импровизируй недостающий ключ.',
          },
          'story-8923745610923-c25': {
            text: 'Используй фрагмент, чтобы открыть скрытый сейф.',
            description: 'Оригинал побеждает имитацию.',
          },
        },
      },
      'story-8923745610923-13': {
        title: 'Тихий Допрос',
        narration: 'Ты загоняешь куратора в угол в галерее антикварных часов; время вокруг тебя замирает в уважении. Их глаза просолены горем, голос хрупкий, пока они признают план: вырезать час потери и отказаться от его эха. Чертёж дрожит, как живое существо.',
        choices: {
          'story-8923745610923-c26': {
            text: 'Успокой их--предложи безопасно помочь.',
            description: 'Преврати противника в союзника.',
          },
          'story-8923745610923-c27': {
            text: 'Возьми чертёж и беги к сейфу.',
            description: 'Действие важнее аргументов.',
          },
        },
      },
      'story-8923745610923-14': {
        title: 'Скрытый Сейф',
        narration: 'Песчано-ароматный сквозняк шепчет из бронированного шва за сложенными ящиками. Фрагмент вставляется, как недостающий зуб, в круглый замок, и стена расплетается в винтовую лестницу. Что-то древнее и математическое ждёт внизу.',
        choices: {
          'story-8923745610923-c28': {
            text: 'Запечатай парадоксальный контур осторожными штрихами.',
            description: 'Сначала стабильность.',
          },
          'story-8923745610923-c29': {
            text: 'Шагни в камеру за пределами.',
            description: 'Столкнись с первопричиной.',
          },
          'story-8923745610923-c30': {
            text: 'Позови куратора присоединиться к тебе.',
            description: 'Рискни доверием.',
          },
        },
      },
      'story-8923745610923-15': {
        title: 'Проверка Охраны',
        narration: 'Рации трещат--охранники поворачивают маршрут к залу часов. Нова набрасывает обход, линии сдвигают дверь на метр влево, как раз достаточно, чтобы проскользнуть. Здание вздыхает, раздражённое, но податливое.',
        choices: {
          'story-8923745610923-c31': {
            text: 'Обойди сзади и продолжи слежку за куратором.',
            description: 'Оставайся с человеческой переменной.',
          },
          'story-8923745610923-c32': {
            text: 'Вернись к нарисованному проходу.',
            description: 'Пустынная камера зовёт.',
          },
        },
      },
      'story-8923745610923-16': {
        title: 'Древний Город',
        narration: 'Лунный свет собирается в камере без крыши, где песок дрейфует, как снег. Рельефы показывают художников, рисующих кометными хвостами, их фрески сплетают дни в новые формы. Следы--свежие--окружают помост, высеченный в девятку-ставшую-глазом.',
        choices: {
          'story-8923745610923-c33': {
            text: 'Изучи храм',
          },
          'story-8923745610923-c34': {
            text: 'Начни запечатывать парадокс отсюда.',
            description: 'Закрой петлю у её источника.',
          },
        },
      },
      'story-8923745610923-18': {
        title: 'Парадоксальное Уравнение',
        narration: 'Звёзды мигают, как узлы в сети, линии потенциала соединяют прошлое с настоящим. Чертёж накладывается на реальность, показывая вырезанный час как яркую рану. ХроноХолст пульсирует, требуя выбора: исцелить через капитуляцию или исцелить через цену.',
        choices: {
          'story-8923745610923-c37': {
            text: 'Восстанови час и прими откат на себя.',
            description: 'Ты сохраняешь холст--но он сохраняет тебя.',
          },
          'story-8923745610923-c38': {
            text: 'Позволь холсту поглотить себя, чтобы закрыть рану.',
            description: 'Потеряй инструмент, спаси мир.',
          },
        },
      },
      'story-8923745610923-19': {
        title: 'Союзный Куратор',
        narration: 'Куратор приходит, глаза влажные, но устойчивые благодаря твоему приглашению. Вместе вы кладёте фрагмент на помост; ваши руки дрожат зеркально. В этой общей рамке горе может стать кистью, а не клинком.',
        choices: {
          'story-8923745610923-c39': {
            text: 'Запечатайте парадокс вместе.',
            description: 'Две руки, одно намерение.',
          },
          'story-8923745610923-c40': {
            text: 'Доверь им холст на один штрих.',
            description: 'Предложи свободу действий--рискуй предательством.',
          },
        },
      },
      'story-8923745610923-20': {
        title: 'Храмовое Испытание',
        narration: 'Ветер расчёсывает песок в терпеливые спирали. Фрески шепчут ответ: чтобы залечить рану, нарисуй поверх себя там, где рана должна быть. Помост гудит, отсчитывая на языке пыли и сердцебиения.',
        choices: {
          'story-8923745610923-c41': {
            text: 'Пожертвуй холстом, чтобы запечатать брешь.',
            description: 'Кисть, рисующая сама себя прочь.',
          },
          'story-8923745610923-c42': {
            text: 'Перепиши собственную нить, чтобы нести шрам.',
            description: 'Стань заплаткой.',
          },
        },
      },
      'story-8923745610923-21': {
        title: 'Временная Линия Исцелена',
        narration: 'Ты восстанавливаешь час, принимая откат как личное течение. Дни спустя ты просыпаешься с новым тремором, призрачным тиком в запястье, который синхронизируется с далёкими штормами. Мир продолжается--целый--пока ты учишься держать его погоду в одиночку.',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: 'Холст Поглощён',
        narration: 'ХроноХолст пьёт собственные чернила, страница за страницей, пока не остаётся только запах дождя. Рана закрывается без шва, история разглаживается, как сохнущая мокрая краска. Ты больше никогда не нарисуешь время, но часы везде дышат легче.',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: 'Распутывание Предательства',
        narration: 'Получив холст, куратор перерисовывает час полностью--идеально, безболезненно, невозможно. Временная линия отвергает ложь, разрываясь на яркие нити, которые поют, как проволока. Ты проводишь остаток дней, собирая гудящие филаменты, ткач трещин.',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: 'Самоперезапись',
        narration: 'Ты рисуешь аккуратный шрам в своих собственных днях, закольцованную девятку-и-глаз, встроенную в твою память. Парадокс проглатывает рану и оставляет тебя другим--немного не в фазе, ярким по краям. Иногда ты ловишь себя в середине штриха, уже заканчивая линию, которую ещё не начал.',
        choices: {
        },
      },
    },
  },

  // Español
  es: {
    title: 'Paleta Paradójica',
    description: 'A medianoche, una restauradora de museo descubre un cuaderno de bocetos que puede repintar el tiempo. Cada línea dibujada repara una fractura y divide otra, mientras un curador en duelo intenta borrar una hora trágica para siempre. ¿Puedes componer una línea temporal que se sostenga--antes de que el lienzo se desgarre?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-8923745610923-3': {
        title: 'Experimento en el Callejón',
        narration: 'La lluvia aguijonea el pavimento brillante de neón detrás del museo. Nova esboza un arco delgado; el charco ondula hacia atrás, gotas de lluvia saltando hacia arriba como vidrio rebobinándose. Una costura verdosa se abre sobre la alcantarilla por un latido--una grieta que huele a ozono y papel viejo.',
        choices: {
          'story-8923745610923-c5': {
            text: 'Regresa adentro a la sala de relojes.',
            description: 'Prueba el efecto cerca de una cadencia estable.',
          },
          'story-8923745610923-c6': {
            text: 'Amplía la grieta con un trazo más audaz.',
            description: 'Alto riesgo, alta perspicacia.',
          },
        },
      },
      'story-8923745610923-9': {
        title: 'Corazón de Relojería',
        narration: 'El mecanismo central se abre como una caja torácica, engranajes brillando con aceite y memoria. Con un trazo cuidadoso, Nova une un diente faltante; el segundero exhala en movimiento suave. En esa calma, un compartimento oculto hace clic--una invitación.',
        choices: {
          'story-8923745610923-c18': {
            text: 'Abre el compartimento revelado.',
            description: 'Los secretos se esconden donde la cadencia se mantiene.',
          },
          'story-8923745610923-c19': {
            text: 'Cierra y retrocede para evitar trampas.',
            description: 'La cautela preserva opciones.',
          },
        },
      },
      'story-8923745610923-10': {
        title: 'Entrada Dibujada',
        narration: 'La esfera del reloj acepta una puerta como la pintura acepta imprimación. Aire frío se derrama a través, saborizado con polvo y un aroma como sol sobre piedra antigua. Más allá, la arena canta suavemente en una cámara que no debería existir.',
        choices: {
          'story-8923745610923-c20': {
            text: 'Busca primero el fragmento perdido.',
            description: 'Los mapas importan.',
          },
          'story-8923745610923-c21': {
            text: 'Atraviesa hacia la cámara desértica.',
            description: 'Toma la iniciativa.',
          },
        },
      },
      'story-8923745610923-12': {
        title: 'Fragmento Perdido',
        narration: 'En una sala trasera que huele a carpetas y cedro, un fragmento de vitela rasgado se esconde dentro de un archivo antiguo de conservación. La pieza muestra un glifo que parece un trazo de pincel formado en un nueve acostado. Sostenido a la luz, la marca se asemeja a un ojo--y un bucle.',
        choices: {
          'story-8923745610923-c24': {
            text: 'Esboza un glifo de reemplazo para probar el circuito.',
            description: 'Improvisa la clave perdida.',
          },
          'story-8923745610923-c25': {
            text: 'Usa el fragmento para abrir la bóveda oculta.',
            description: 'El original supera a la imitación.',
          },
        },
      },
      'story-8923745610923-13': {
        title: 'Interrogatorio Silencioso',
        narration: 'Acorralas al curador en una galería de relojes antiguos; el tiempo a tu alrededor se silencia respetuosamente. Sus ojos están salados de dolor, la voz quebradiza mientras admiten el plan: cortar la hora de la pérdida y rechazar su eco. El plano tiembla como algo vivo.',
        choices: {
          'story-8923745610923-c26': {
            text: 'Cálmalo--ofrece ayudar de manera segura.',
            description: 'Convierte a un adversario en un aliado.',
          },
          'story-8923745610923-c27': {
            text: 'Toma el plano y corre hacia la bóveda.',
            description: 'Acción sobre argumento.',
          },
        },
      },
      'story-8923745610923-14': {
        title: 'Bóveda Oculta',
        narration: 'Una corriente perfumada con arena susurra desde una costura blindada detrás de cajas apiladas. El fragmento encaja como un diente perdido en una cerradura circular, y la pared se descose en una escalera espiral. Algo antiguo y matemático espera abajo.',
        choices: {
          'story-8923745610923-c28': {
            text: 'Sella el circuito paradójico con trazos cuidadosos.',
            description: 'Estabilidad primero.',
          },
          'story-8923745610923-c29': {
            text: 'Atraviesa hacia la cámara más allá.',
            description: 'Enfrenta la causa raíz.',
          },
          'story-8923745610923-c30': {
            text: 'Llama al curador para que se una a ti.',
            description: 'Arriesga la confianza.',
          },
        },
      },
      'story-8923745610923-15': {
        title: 'Ronda de Seguridad',
        narration: 'Las radios crepitan--los guardias giran su ruta hacia la sala de relojes. Nova esboza un desvío, líneas deslizando una puerta un metro a la izquierda, justo lo suficiente para deslizarse. El edificio suspira, molesto pero complaciente.',
        choices: {
          'story-8923745610923-c31': {
            text: 'Rodea por detrás y continúa siguiendo al curador.',
            description: 'Quédate con la variable humana.',
          },
          'story-8923745610923-c32': {
            text: 'Regresa a la entrada dibujada.',
            description: 'La cámara desértica llama.',
          },
        },
      },
      'story-8923745610923-16': {
        title: 'Ciudad Antigua',
        narration: 'La luz de luna se acumula en una cámara sin techo donde la arena flota como nieve. Los relieves muestran artistas pintando con colas de cometas, sus murales doblando días en nuevas formas. Huellas--frescas--rodean un estrado tallado en un nueve-girado-ojo.',
        choices: {
          'story-8923745610923-c33': {
            text: 'Estudia el templo',
          },
          'story-8923745610923-c34': {
            text: 'Comienza a sellar la paradoja desde aquí.',
            description: 'Cierra el bucle en su origen.',
          },
        },
      },
      'story-8923745610923-18': {
        title: 'Ecuación Paradójica',
        narration: 'Las estrellas parpadean como nodos en una red, líneas de potencial conectando el pasado con el ahora. El plano se superpone a la realidad, mostrando la hora cortada como una herida brillante. El ChronoCanvas pulsa, exigiendo una elección: sanar por rendición, o sanar por costo.',
        choices: {
          'story-8923745610923-c37': {
            text: 'Restaura la hora y absorbe tú mismo el retroceso.',
            description: 'Conservas el lienzo--pero él te conserva a ti.',
          },
          'story-8923745610923-c38': {
            text: 'Deja que el lienzo se consuma para cerrar la herida.',
            description: 'Pierde la herramienta, salva el mundo.',
          },
        },
      },
      'story-8923745610923-19': {
        title: 'Curador Aliado',
        narration: 'El curador llega, ojos húmedos pero estabilizados por tu invitación. Juntos colocan el fragmento sobre el estrado; sus manos tiemblan en espejo. En este marco compartido, el dolor podría convertirse en un pincel en lugar de una espada.',
        choices: {
          'story-8923745610923-c39': {
            text: 'Sellen la paradoja juntos.',
            description: 'Dos manos, una intención.',
          },
          'story-8923745610923-c40': {
            text: 'Confíale el lienzo por un trazo.',
            description: 'Ofrece agencia--arriesga traición.',
          },
        },
      },
      'story-8923745610923-20': {
        title: 'Prueba del Templo',
        narration: 'El viento peina la arena en espirales pacientes. Los murales susurran una respuesta: para arreglar una herida, pinta sobre ti mismo donde estaría la herida. El estrado vibra, contando hacia atrás en un lenguaje de polvo y latido.',
        choices: {
          'story-8923745610923-c41': {
            text: 'Sacrifica el lienzo para sellar la brecha.',
            description: 'Un pincel que se pinta a sí mismo.',
          },
          'story-8923745610923-c42': {
            text: 'Reescribe tu propio hilo para llevar la cicatriz.',
            description: 'Conviértete en el parche.',
          },
        },
      },
      'story-8923745610923-21': {
        title: 'Línea Temporal Sanada',
        narration: 'Restauras la hora, aceptando el retroceso como una corriente personal. Días después, despiertas con un nuevo temblor, un tic fantasma en tu muñeca que se sincroniza con tormentas distantes. El mundo continúa--completo--mientras aprendes a sostener su clima solo.',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: 'Lienzo Consumido',
        narration: 'El ChronoCanvas bebe su propia tinta, página tras página, hasta que solo queda un olor a lluvia. La herida se cierra sin costura, la historia suavizándose como pintura húmeda secándose. Nunca volverás a esbozar el tiempo, pero los relojes en todas partes respiran más fácil.',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: 'Desenredo de Traición',
        narration: 'Con el lienzo, el curador redibuja la hora completamente--perfecta, indolora, imposible. La línea temporal rechaza la mentira, destrozándose en hilos brillantes que cantan como alambre. Pasas el resto de tus días recolectando los filamentos zumbantes, un tejedor de fracturas.',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: 'Auto-Reescritura',
        narration: 'Pintas una cicatriz cuidadosa en tus propios días, un nueve-y-ojo enrollado incrustado en tu memoria. La paradoja traga la herida y te deja diferente--un poco fuera de fase, brillante en los bordes. A veces te sorprendes a mitad de trazo, ya terminando una línea que aún no has comenzado.',
        choices: {
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Herzlinie Zurückspulen',
    description: 'Eine Stadt ist in einer 59-Minuten-Schleife gefangen, und deine Skizzen können die Stunden wieder zusammenfügen. Aber jede Reparatur bringt die Vergangenheit ins Wanken--besonders die Nacht, in der du Maya verloren hast. Wirst du die Zeitlinie wiederherstellen oder dein Schicksal neu zeichnen?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9123457712345-1': {
        title: 'Geschleifte Mitternacht',
        narration: 'Regen näht silberne Striche über die Straße, während ein Glockenturm stottert: 11:01--wieder. Dein ChronoCanvas summt in deiner Handfläche wie ein eingesperrtes Metronom, die Linie, die du zeichnest, hallt durch Pfützen und Neonschilder. Irgendwo in der Nähe wartet Maya am Observatorium, ohne zu wissen, dass diese Stunde bereits ein Dutzend Mal geschehen ist.',
        choices: {
          'story-9123457712345-c1': {
            text: 'Eile zur Museums-Uhrhalle.',
            description: 'Stabilisiere die Stadt.',
          },
          'story-9123457712345-c2': {
            text: 'Geh direkt zum Dach-Observatorium.',
            description: 'Finde Maya, bevor die Schleife sich zurücksetzt.',
          },
        },
      },
      'story-9123457712345-2': {
        title: 'Dachsignal',
        narration: 'Wind lässt die Spanndrähte um die Teleskopkuppel klingen. Maya steht unter einem von Wolken gespaltenen Himmel und studiert eine schwache Anomalie wie einen Fingerabdruck in den Sternen. Sie blickt zum Treppenhaus, als erwarte sie jemanden--dann summt dein Telefon mit einer Warnung: Schleifenintegrität versagt.',
        choices: {
          'story-9123457712345-c3': {
            text: 'Sage Maya die Wahrheit über die Schleife.',
            description: 'Ehrlichkeit könnte dich an diese Zeitlinie binden.',
          },
          'story-9123457712345-c4': {
            text: 'Halte es leicht; lade sie zum Kaffee ein.',
            description: 'Verankere Normalität; gewinne Zeit.',
          },
        },
      },
      'story-9123457712345-3': {
        title: 'Regen-Café',
        narration: 'Dampf vernebelt die Café-Fenster, während Regentropfen rückwärts am Glas entlangmarschieren--die Zeit hängt, dann läuft sie weiter. Maya lacht über eine Erinnerung, die du noch nicht kennen solltest, und das Lachen wird dünner, als die Lichter zweimal flackern. Das ChronoCanvas erwärmt sich, ungeduldig.',
        choices: {
          'story-9123457712345-c5': {
            text: 'Gestehe die Schleife jetzt.',
            description: 'Riskiere Unglauben, um Vertrauen aufzubauen.',
          },
          'story-9123457712345-c6': {
            text: 'Entschuldige dich und sprinte zur Uhrhalle.',
            description: 'Flicke die Zeit, dann kehre zurück.',
          },
        },
      },
      'story-9123457712345-5': {
        title: 'Halle der Uhren',
        narration: 'Eine Kathedrale aus Pendeln debattiert die Gegenwart in überlappenden Ticks. Ein massiver Regulator argumentiert laut--sein Sekundenzeiger macht Doppelschritte, dann schmollt er. Du kannst spüren, wie die Schleife an seinen Zähnen hängen bleibt.',
        choices: {
          'story-9123457712345-c9': {
            text: 'Repariere den Regulator mit einem feinen Strich.',
            description: 'Präzision zuerst.',
          },
          'story-9123457712345-c10': {
            text: 'Zeichne einen Durchgang auf das Zifferblatt.',
            description: 'Abkürzung zur Quelle.',
          },
          'story-9123457712345-c11': {
            text: 'Verfolge den verdächtigen Kurator.',
            description: 'Jemand mischt sich auch ein.',
          },
        },
      },
      'story-9123457712345-6': {
        title: 'Riss-Gasse',
        narration: 'Eine Naht im Regen hängt wie ein Schnitt im Film; dahinter glitzern Sterne wie Schrauben. Die Luft schmeckt nach Statik und nassem Stein, zieht an deinen Ärmeln sowohl vorwärts als auch zurück. Eine kühne Linie könnte den Riss verankern--oder ihn erweitern.',
        choices: {
          'story-9123457712345-c12': {
            text: 'Stabilisiere mit einem Gitter aus Linien.',
            description: 'Konstruiere den Bruch.',
          },
          'story-9123457712345-c13': {
            text: 'Trete zurück und gruppiere dich in der Halle neu.',
            description: 'Fordere den Zusammenbruch nicht heraus.',
          },
        },
      },
      'story-9123457712345-9': {
        title: 'Uhrwerk-Ruhe',
        narration: 'Dein Strich überbrückt einen fehlenden Zahn, und der Sekundenzeiger atmet zum wahren Tempo aus. Ein verstecktes Panel entriegelt sich mit einem höflichen Klick. Drinnen: das zerrissene Pergamentfragment und ein Schlüssel in Form eines Fragezeichens.',
        choices: {
          'story-9123457712345-c18': {
            text: 'Bringe das Fragment zum Gewölbe.',
            description: 'Original schlägt Imitation.',
          },
          'story-9123457712345-c19': {
            text: 'Nutze den Türtrick zum Tempel.',
            description: 'Überspringe die Treppe.',
          },
        },
      },
      'story-9123457712345-10': {
        title: 'Skizzierte Schwelle',
        narration: 'Tinte haftet an Messing wie Tau an der Morgendämmerung. Das Zifferblatt erweicht und akzeptiert eine gezeichnete Tür, die sich zu trockenem, singendem Sand öffnet. Kalte Luft mit einem Duft von Sonne auf Stein streicht deine Wangen.',
        choices: {
          'story-9123457712345-c20': {
            text: 'Tritt durch zur Tempelkammer.',
            description: 'Triff die Quelle.',
          },
          'story-9123457712345-c21': {
            text: 'Kehre zurück, um das fehlende Fragment zu holen.',
            description: 'Riskiere keine Vermutung.',
          },
        },
      },
      'story-9123457712345-12': {
        title: 'Archivraum',
        narration: 'Staubmoten treiben wie verlorene Sekunden im Lampenlicht. In einer Konservierungsmappe wartet das zerrissene Pergamentfragment mit einer getinteten geschlungenen Neun--ein Auge und eine Spirale in einem. Es erwärmt die Luft, wenn deine Finger es streifen.',
        choices: {
          'story-9123457712345-c24': {
            text: 'Stecke das Fragment in das Gewölbeschloss.',
            description: 'Vervollständige den Kreislauf.',
          },
          'story-9123457712345-c25': {
            text: 'Skizziere einen Ersatz-Surrogate für alle Fälle.',
            description: 'Doppelt hält besser.',
          },
        },
      },
      'story-9123457712345-14': {
        title: 'Verstecktes Gewölbe',
        narration: 'Hinter gestapelten Kisten atmet eine kreisförmige Naht einen Wüstenzug aus. Das Pergamentfragment setzt sich in ein Schloss, das sich wie eine blühende Spirale entfaltet. Stufen sinken zu einer Kammer, wo Sand wie eine geduldige Seite wartet.',
        choices: {
          'story-9123457712345-c28': {
            text: 'Versiegle die Paradoxon-Gleichung hier.',
            description: 'Stabilität über Begehren.',
          },
          'story-9123457712345-c29': {
            text: 'Tritt durch zum Tempel.',
            description: 'Begegne der Wurzel.',
          },
          'story-9123457712345-c30': {
            text: 'Rufe Maya, sich dir anzuschließen.',
            description: 'Wählt zusammen.',
          },
        },
      },
      'story-9123457712345-16': {
        title: 'Tempel-Podest',
        narration: 'Mondlicht sammelt sich in einer dachlosen Kammer; Sand flüstert in kleinen Lawinen. Wandmalereien zeigen Künstler, die mit Kometenschweifen malen und Tage in sanftere Formen schleifen. Zwei Fußspuren umkreisen das Podest--deine und die Version von dir, die es weiter versucht.',
        choices: {
          'story-9123457712345-c33': {
            text: 'Studiere die Wandmalereien für Anweisungen.',
            description: 'Lerne die Kosten, bevor du zahlst.',
          },
          'story-9123457712345-c34': {
            text: 'Beginne den Versiegelungsstrich.',
            description: 'Schließe die Schleife jetzt.',
          },
        },
      },
      'story-9123457712345-20': {
        title: 'Papier-Opfer',
        narration: 'Das Canvas trinkt seine eigene Tinte, bis nur der Duft von Regen bleibt. Zeit glättet sich wie frische trocknende Farbe, und Uhren in der ganzen Stadt atmen leichter. Du und Maya geht unter ehrlichem Wetter hinaus, mit leeren Händen und frei.',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: 'Treulose Bearbeitung',
        narration: 'Eine perfekte Neuschreibung löscht den Schmerz--und die Wahrheit, die ihn formte. Die Zeitlinie lehnt die Lüge ab und franst sich in helle Fäden auf, die wie Draht singen. Du verbringst lange Nächte damit, Möglichkeiten neu zu flechten, und manchmal, in einer neuen Morgendämmerung, findet Maya dich.',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: 'Narbe Zusammen',
        narration: 'Du malst eine sorgfältige Narbe über deine Tage, eine geschlungene Neun, die unter der Haut der Erinnerung ruht. Die Stadt bewegt sich weiter, schleifenfrei; du und Maya lernt den Rhythmus der unvollkommenen Zeit. Manche Morgen wachst du auf und beendest bereits ein Lachen, das du noch nicht begonnen hast.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Palette Paradoxale',
    description: 'À minuit, une restauratrice de musée découvre un carnet de croquis qui peut repeindre le temps. Chaque ligne tracée répare une fracture et en divise une autre, tandis qu\'un conservateur endeuillé s\'efforce d\'effacer à jamais une heure tragique. Pouvez-vous composer une chronologie qui tienne--avant que la toile ne se déchire?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-8923745610923-3': {
        title: 'Expérience dans l\'Allée',
        narration: 'La pluie aiguillonne le pavé luisant de néon derrière le musée. Nova esquisse un arc mince; la flaque ondule à rebours, les gouttes de pluie bondissant vers le haut comme du verre en rembobinage. Une couture verdâtre s\'ouvre au-dessus du caniveau pendant un battement de cœur--une fissure qui sent l\'ozone et le vieux papier.',
        choices: {
          'story-8923745610923-c5': {
            text: 'Retourne à l\'intérieur vers la salle des horloges.',
            description: 'Teste l\'effet près d\'une cadence stable.',
          },
          'story-8923745610923-c6': {
            text: 'Élargis la fissure avec un trait plus audacieux.',
            description: 'Risque élevé, perspicacité élevée.',
          },
        },
      },
      'story-8923745610923-9': {
        title: 'Cœur d\'Horlogerie',
        narration: 'Le mécanisme central s\'ouvre comme une cage thoracique, les engrenages luisant d\'huile et de mémoire. D\'un trait prudent, Nova comble une dent manquante; la trotteuse exhale en un mouvement fluide. Dans ce calme, un compartiment caché s\'ouvre--une invitation.',
        choices: {
          'story-8923745610923-c18': {
            text: 'Ouvre le compartiment révélé.',
            description: 'Les secrets se cachent où la cadence tient.',
          },
          'story-8923745610923-c19': {
            text: 'Referme et recule pour éviter les pièges.',
            description: 'La prudence préserve les options.',
          },
        },
      },
      'story-8923745610923-10': {
        title: 'Passage Dessiné',
        narration: 'Le cadran de l\'horloge accepte une porte comme la peinture accepte l\'apprêt. L\'air froid se déverse, parfumé de poussière et d\'un parfum comme le soleil sur la vieille pierre. Au-delà, le sable chante doucement dans une chambre qui ne devrait pas être.',
        choices: {
          'story-8923745610923-c20': {
            text: 'Cherche d\'abord le fragment manquant.',
            description: 'Les cartes comptent.',
          },
          'story-8923745610923-c21': {
            text: 'Franchis le seuil vers la chambre désertique.',
            description: 'Saisis l\'initiative.',
          },
        },
      },
      'story-8923745610923-12': {
        title: 'Fragment Perdu',
        narration: 'Dans une arrière-salle sentant les classeurs et le cèdre, un éclat de vélin déchiré se cache dans un vieux dossier de conservation. La pièce montre un glyphe qui ressemble à un coup de pinceau façonné en un neuf couché sur le côté. À contre-jour, la marque ressemble à un œil--et à une boucle.',
        choices: {
          'story-8923745610923-c24': {
            text: 'Esquisse un glyphe de remplacement pour tester le circuit.',
            description: 'Improvise la clé manquante.',
          },
          'story-8923745610923-c25': {
            text: 'Utilise le fragment pour ouvrir la chambre forte cachée.',
            description: 'L\'original bat l\'imitation.',
          },
        },
      },
      'story-8923745610923-13': {
        title: 'Interrogatoire Silencieux',
        narration: 'Tu accules le conservateur dans une galerie d\'horloges antiques; le temps autour de toi se tait respectueusement. Ses yeux sont salés de chagrin, la voix cassante alors qu\'il admet le plan: couper l\'heure de la perte et refuser son écho. Le plan tremble comme une chose vivante.',
        choices: {
          'story-8923745610923-c26': {
            text: 'Apaise-le--offre d\'aider en toute sécurité.',
            description: 'Transforme un adversaire en allié.',
          },
          'story-8923745610923-c27': {
            text: 'Prends le plan et cours vers la chambre forte.',
            description: 'L\'action plutôt que l\'argument.',
          },
        },
      },
      'story-8923745610923-14': {
        title: 'Chambre Forte Cachée',
        narration: 'Un courant d\'air parfumé de sable murmure depuis une couture blindée derrière des caisses empilées. Le fragment s\'insère comme une dent manquante dans une serrure circulaire, et le mur se découd en un escalier en spirale. Quelque chose d\'ancien et de mathématique attend en bas.',
        choices: {
          'story-8923745610923-c28': {
            text: 'Scelle le circuit paradoxal avec des traits prudents.',
            description: 'La stabilité d\'abord.',
          },
          'story-8923745610923-c29': {
            text: 'Franchis le seuil vers la chambre au-delà.',
            description: 'Affronte la cause profonde.',
          },
          'story-8923745610923-c30': {
            text: 'Appelle le conservateur à te rejoindre.',
            description: 'Risque la confiance.',
          },
        },
      },
      'story-8923745610923-15': {
        title: 'Ronde de Sécurité',
        narration: 'Les radios grésillent--les gardes tournent leur ronde vers la salle des horloges. Nova esquisse un détour, des lignes glissant une porte d\'un mètre sur la gauche, juste assez pour se faufiler. Le bâtiment soupire, agacé mais docile.',
        choices: {
          'story-8923745610923-c31': {
            text: 'Contourne et reprends la filature du conservateur.',
            description: 'Reste avec la variable humaine.',
          },
          'story-8923745610923-c32': {
            text: 'Retourne au passage dessiné.',
            description: 'La chambre désertique appelle.',
          },
        },
      },
      'story-8923745610923-16': {
        title: 'Cité Antique',
        narration: 'Le clair de lune s\'accumule dans une chambre sans toit où le sable dérive comme de la neige. Les reliefs montrent des artistes peignant avec des queues de comètes, leurs fresques bouclant les jours en nouvelles formes. Des empreintes--fraîches--entourent un dais sculpté en un neuf-tourné-œil.',
        choices: {
          'story-8923745610923-c33': {
            text: 'Étudie le temple',
          },
          'story-8923745610923-c34': {
            text: 'Commence à sceller le paradoxe depuis ici.',
            description: 'Ferme la boucle à sa source.',
          },
        },
      },
      'story-8923745610923-18': {
        title: 'Équation Paradoxale',
        narration: 'Les étoiles clignotent comme des nœuds dans un réseau, des lignes de potentiel reliant le passé au présent. Le plan se superpose à la réalité, montrant l\'heure coupée comme une blessure lumineuse. Le ChronoCanvas pulse, exigeant un choix: guérir par l\'abandon, ou guérir par le coût.',
        choices: {
          'story-8923745610923-c37': {
            text: 'Restaure l\'heure et absorbe toi-même le contrecoup.',
            description: 'Tu gardes la toile--mais elle te garde.',
          },
          'story-8923745610923-c38': {
            text: 'Laisse la toile se consumer pour fermer la blessure.',
            description: 'Perds l\'outil, sauve le monde.',
          },
        },
      },
      'story-8923745610923-19': {
        title: 'Conservateur Allié',
        narration: 'Le conservateur arrive, les yeux humides mais raffermis par ton invitation. Ensemble, vous placez le fragment sur le dais; vos mains tremblent en miroir. Dans ce cadre partagé, le chagrin pourrait devenir un pinceau plutôt qu\'une lame.',
        choices: {
          'story-8923745610923-c39': {
            text: 'Scellez le paradoxe ensemble.',
            description: 'Deux mains, une intention.',
          },
          'story-8923745610923-c40': {
            text: 'Confie-lui la toile pour un trait.',
            description: 'Offre l\'agence--risque la trahison.',
          },
        },
      },
      'story-8923745610923-20': {
        title: 'Épreuve du Temple',
        narration: 'Le vent peigne le sable en spirales patientes. Les fresques murmurent une réponse: pour réparer une blessure, peins sur toi-même là où serait la blessure. Le dais vibre, comptant à rebours dans un langage de poussière et de battement de cœur.',
        choices: {
          'story-8923745610923-c41': {
            text: 'Sacrifie la toile pour sceller la brèche.',
            description: 'Un pinceau qui se peint lui-même.',
          },
          'story-8923745610923-c42': {
            text: 'Réécris ton propre fil pour porter la cicatrice.',
            description: 'Deviens le correctif.',
          },
        },
      },
      'story-8923745610923-21': {
        title: 'Chronologie Guérie',
        narration: 'Tu restaures l\'heure, acceptant le contrecoup comme un courant personnel. Des jours plus tard, tu te réveilles avec un nouveau tremblement, un tic fantôme dans ton poignet qui se synchronise avec les tempêtes lointaines. Le monde continue--entier--tandis que tu apprends à tenir seul sa météo.',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: 'Toile Consumée',
        narration: 'Le ChronoCanvas boit sa propre encre, page après page, jusqu\'à ce qu\'il ne reste qu\'une odeur de pluie. La blessure se ferme sans couture, l\'histoire se lissant comme de la peinture humide qui sèche. Tu ne dessineras plus jamais le temps, mais les horloges partout respirent plus facilement.',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: 'Trahison Défaite',
        narration: 'Ayant reçu la toile, le conservateur redessine entièrement l\'heure--parfaite, indolore, impossible. La chronologie refuse le mensonge, se déchirant en fils lumineux qui chantent comme du fil de fer. Tu passes le reste de tes jours à collecter les filaments bourdonnants, un tisseur de fractures.',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: 'Réécriture de Soi',
        narration: 'Tu peins une cicatrice soigneuse dans tes propres jours, un neuf-et-œil bouclé ancré dans ta mémoire. Le paradoxe engloutit la blessure et te laisse différent--un peu déphasé, lumineux sur les bords. Parfois tu te surprends à mi-trait, finissant déjà une ligne que tu n\'as pas encore commencée.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'Paleta Paradoxal',
    description: 'À meia-noite, uma restauradora de museu descobre um caderno de esboços que pode repintar o tempo. Cada linha desenhada conserta uma fratura e divide outra, enquanto um curador enlutado tenta apagar uma hora trágica para sempre. Você consegue compor uma linha temporal que se sustente--antes que a tela se rasgue?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-8923745610923-3': {
        title: 'Experimento no Beco',
        narration: 'A chuva agulha o pavimento brilhante de néon atrás do museu. Nova esboça um arco fino; a poça ondula para trás, gotas de chuva saltando para cima como vidro rebobinando. Uma costura esverdeada abre-se acima da sarjeta por um batimento cardíaco--uma fenda que cheira a ozônio e papel velho.',
        choices: {
          'story-8923745610923-c5': {
            text: 'Retorne para dentro, ao salão dos relógios.',
            description: 'Teste o efeito perto de uma cadência estável.',
          },
          'story-8923745610923-c6': {
            text: 'Atraia a fenda para mais largo com um traço mais ousado.',
            description: 'Alto risco, alta percepção.',
          },
        },
      },
      'story-8923745610923-9': {
        title: 'Coração de Relógio',
        narration: 'O mecanismo central abre-se como uma caixa torácica, engrenagens reluzindo com óleo e memória. Com um traço cuidadoso, Nova conecta um dente faltante; o ponteiro dos segundos exala em movimento suave. Nessa calma, um compartimento oculto clica--um convite.',
        choices: {
          'story-8923745610923-c18': {
            text: 'Abra o compartimento revelado.',
            description: 'Segredos se escondem onde a cadência se mantém.',
          },
          'story-8923745610923-c19': {
            text: 'Feche e recue para evitar armadilhas.',
            description: 'A cautela preserva opções.',
          },
        },
      },
      'story-8923745610923-10': {
        title: 'Entrada Desenhada',
        narration: 'O mostrador do relógio aceita uma porta como tinta aceitando primer. Ar frio derrama-se através, temperado com poeira e um aroma como sol sobre pedra antiga. Além, areia canta suavemente em uma câmara que não deveria estar.',
        choices: {
          'story-8923745610923-c20': {
            text: 'Procure primeiro o fragmento perdido.',
            description: 'Mapas importam.',
          },
          'story-8923745610923-c21': {
            text: 'Atravesse para a câmara desértica.',
            description: 'Tome a iniciativa.',
          },
        },
      },
      'story-8923745610923-12': {
        title: 'Fragmento Perdido',
        narration: 'Em uma sala dos fundos cheirando a fichários e cedro, um fragmento de velino rasgado esconde-se dentro de um arquivo antigo de conservação. A peça mostra um glifo que parece uma pincelada moldada em um nove deitado de lado. Quando segurado contra a luz, a marca assemelha-se a um olho--e um laço.',
        choices: {
          'story-8923745610923-c24': {
            text: 'Esboce um glifo substituto para testar o circuito.',
            description: 'Improvise a chave perdida.',
          },
          'story-8923745610923-c25': {
            text: 'Use o fragmento para abrir o cofre oculto.',
            description: 'Original supera imitação.',
          },
        },
      },
      'story-8923745610923-13': {
        title: 'Interrogatório Silencioso',
        narration: 'Você encurrala o curador em uma galeria de relógios antigos; o tempo ao seu redor silencia em respeito. Seus olhos estão salgados de dor, voz quebradiça enquanto admitem o plano: cortar a hora da perda e recusar seu eco. O projeto treme como algo vivo.',
        choices: {
          'story-8923745610923-c26': {
            text: 'Acalme-os--ofereça ajudar com segurança.',
            description: 'Transforme um adversário em aliado.',
          },
          'story-8923745610923-c27': {
            text: 'Pegue o projeto e corra para o cofre.',
            description: 'Ação sobre argumento.',
          },
        },
      },
      'story-8923745610923-14': {
        title: 'Cofre Oculto',
        narration: 'Uma corrente perfumada de areia sussurra de uma costura blindada atrás de caixas empilhadas. O fragmento encaixa-se como um dente faltante em uma fechadura circular, e a parede desdobra-se em uma escada espiral. Algo antigo e matemático espera embaixo.',
        choices: {
          'story-8923745610923-c28': {
            text: 'Sele o circuito paradoxal com traços cuidadosos.',
            description: 'Estabilidade primeiro.',
          },
          'story-8923745610923-c29': {
            text: 'Atravesse para a câmara além.',
            description: 'Enfrente a causa raiz.',
          },
          'story-8923745610923-c30': {
            text: 'Chame o curador para se juntar a você.',
            description: 'Arrisque confiança.',
          },
        },
      },
      'story-8923745610923-15': {
        title: 'Varredura de Segurança',
        narration: 'Rádios crepitam--guardas viram sua rota em direção ao salão dos relógios. Nova esboça um desvio, linhas deslizando uma porta um metro para a esquerda, o suficiente para escapar. O prédio suspira, irritado mas complacente.',
        choices: {
          'story-8923745610923-c31': {
            text: 'Dê a volta por trás e retome a perseguição ao curador.',
            description: 'Fique com a variável humana.',
          },
          'story-8923745610923-c32': {
            text: 'Retorne à entrada desenhada.',
            description: 'A câmara desértica chama.',
          },
        },
      },
      'story-8923745610923-16': {
        title: 'Cidade Antiga',
        narration: 'Luz lunar acumula-se em uma câmara sem teto onde areia flutua como neve. Relevos mostram artistas pintando com caudas de cometas, seus murais laçando dias em novas formas. Pegadas--frescas--circulam um estrado esculpido em um nove-virado-olho.',
        choices: {
          'story-8923745610923-c33': {
            text: 'Estude o templo',
          },
          'story-8923745610923-c34': {
            text: 'Comece a selar o paradoxo daqui.',
            description: 'Feche o laço na sua fonte.',
          },
        },
      },
      'story-8923745610923-18': {
        title: 'Equação Paradoxal',
        narration: 'Estrelas piscam como nós em uma rede, linhas de potencial conectando passado ao agora. O projeto sobrepõe-se à realidade, mostrando a hora cortada como uma ferida brilhante. O ChronoCanvas pulsa, exigindo uma escolha: curar por rendição, ou curar por custo.',
        choices: {
          'story-8923745610923-c37': {
            text: 'Restaure a hora e absorva o contragolpe você mesmo.',
            description: 'Você mantém a tela--mas ela mantém você.',
          },
          'story-8923745610923-c38': {
            text: 'Deixe a tela consumir a si mesma para fechar a ferida.',
            description: 'Perca a ferramenta, salve o mundo.',
          },
        },
      },
      'story-8923745610923-19': {
        title: 'Curador Aliado',
        narration: 'O curador chega, olhos úmidos mas firmes pelo seu convite. Juntos vocês colocam o fragmento sobre o estrado; suas mãos tremem em espelho. Neste quadro compartilhado, a dor poderia tornar-se um pincel em vez de uma lâmina.',
        choices: {
          'story-8923745610923-c39': {
            text: 'Selem o paradoxo juntos.',
            description: 'Duas mãos, uma intenção.',
          },
          'story-8923745610923-c40': {
            text: 'Confie-lhes a tela por um traço.',
            description: 'Ofereça agência--arrisque traição.',
          },
        },
      },
      'story-8923745610923-20': {
        title: 'Provação do Templo',
        narration: 'O vento penteia a areia em espirais pacientes. Os murais sussurram uma resposta: para consertar uma ferida, pinte sobre si mesmo onde a ferida estaria. O estrado vibra, contando regressivamente em uma linguagem de poeira e batimento cardíaco.',
        choices: {
          'story-8923745610923-c41': {
            text: 'Sacrifique a tela para selar a brecha.',
            description: 'Um pincel que se pinta para longe.',
          },
          'story-8923745610923-c42': {
            text: 'Reescreva seu próprio fio para carregar a cicatriz.',
            description: 'Torne-se o remendo.',
          },
        },
      },
      'story-8923745610923-21': {
        title: 'Linha Temporal Curada',
        narration: 'Você restaura a hora, aceitando o contragolpe como uma ressaca pessoal. Dias depois, você acorda com um novo tremor, um tique fantasma em seu pulso que sincroniza com tempestades distantes. O mundo continua--inteiro--enquanto você aprende a segurar seu clima sozinho.',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: 'Tela Consumida',
        narration: 'O ChronoCanvas bebe sua própria tinta, página por página, até que apenas um cheiro de chuva permaneça. A ferida fecha-se sem costura, a história suavizando-se como tinta molhada secando. Você nunca mais esboçará o tempo, mas relógios em toda parte respiram mais facilmente.',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: 'Desdobramento da Traição',
        narration: 'Dado a tela, o curador redesenha a hora inteiramente--perfeita, indolor, impossível. A linha temporal recusa a mentira, rasgando-se em fios brilhantes que cantam como arame. Você passa o resto de seus dias coletando os filamentos zumbintes, um tecelão de fraturas.',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: 'Auto-Reescrita',
        narration: 'Você pinta uma cicatriz cuidadosa em seus próprios dias, um nove-e-olho enlaçado embutido em sua memória. O paradoxo engole a ferida e deixa você diferente--um pouco fora de fase, brilhante nas bordas. Às vezes você se pega no meio do traço, já terminando uma linha que ainda não começou.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '逆説のパレット',
    description: '真夜中、博物館の修復家が時間を塗り直すことができるスケッチブックを発見する。描かれた線は一つの亀裂を修復し、別の亀裂を作り出す。悲しみに暮れる学芸員は悲劇的な一時間を永遠に消し去ろうとする。キャンバスが自らを引き裂く前に、維持できるタイムラインを作れるだろうか？',
    author: 'クロノキャンバス・スタジオ',
    nodes: {
      'story-8923745610923-3': {
        title: '路地の実験',
        narration: '雨が博物館の裏のネオン光る舗装に針のように降り注ぐ。ノヴァが細い弧を描く。水たまりが逆に波紋を描き、雨粒が巻き戻るガラスのように跳ね上がる。どぶの上に心臓の鼓動ほどの間、緑がかった継ぎ目が開く――オゾンと古い紙の匂いがする亀裂。',
        choices: {
          'story-8923745610923-c5': {
            text: '時計のホールに戻る。',
            description: '安定したリズムの近くで効果を試す。',
          },
          'story-8923745610923-c6': {
            text: 'より大胆な線で亀裂を広げる。',
            description: '高いリスク、高い洞察。',
          },
        },
      },
      'story-8923745610923-9': {
        title: '時計仕掛けの心臓',
        narration: '中央のメカニズムが胸郭のように開き、歯車が油と記憶で輝く。慎重な線でノヴァは欠けた歯を繋ぐ。秒針が滑らかな動きに息を吹き返す。その静けさの中で、隠された区画がカチッと開く――招待状。',
        choices: {
          'story-8923745610923-c18': {
            text: '現れた区画を開ける。',
            description: '秘密はリズムが保たれる場所に隠れる。',
          },
          'story-8923745610923-c19': {
            text: '閉じて後退し、罠を避ける。',
            description: '慎重さが選択肢を保つ。',
          },
        },
      },
      'story-8923745610923-10': {
        title: '描かれた出入口',
        narration: '時計の文字盤が下塗りに絵の具が染み込むように出入口を受け入れる。埃と古い石の上の太陽のような香りを帯びた冷たい空気が流れ込む。その先、あってはならない部屋で砂が静かに歌う。',
        choices: {
          'story-8923745610923-c20': {
            text: 'まず失われた断片を探す。',
            description: '地図が重要。',
          },
          'story-8923745610923-c21': {
            text: '砂漠の部屋に踏み入る。',
            description: '主導権を握る。',
          },
        },
      },
      'story-8923745610923-12': {
        title: '失われた断片',
        narration: 'バインダーと杉の香りがする奥の部屋で、破れた羊皮紙の欠片が古い保存ファイルの中に隠れている。その断片は横たわった数字の9のような筆致で形作られたグリフを示す。光にかざすと、その印は目――そして輪に似ている。',
        choices: {
          'story-8923745610923-c24': {
            text: '回路をテストするため代替グリフをスケッチする。',
            description: '失われた鍵を即興で作る。',
          },
          'story-8923745610923-c25': {
            text: '断片を使って隠された金庫を開ける。',
            description: '本物が模造品を打ち負かす。',
          },
        },
      },
      'story-8923745610923-13': {
        title: '静かな尋問',
        narration: 'アンティーク時計のギャラリーで学芸員を追い詰める。周囲の時間が敬意を払って静まる。彼らの目は悲しみに塩漬けされ、計画を認める声は壊れやすい。喪失の時間を切り取り、その反響を拒否する。設計図が生きているように震える。',
        choices: {
          'story-8923745610923-c26': {
            text: '彼らを落ち着かせる――安全に助けることを申し出る。',
            description: '敵を味方に変える。',
          },
          'story-8923745610923-c27': {
            text: '設計図を取って金庫へ走る。',
            description: '議論より行動。',
          },
        },
      },
      'story-8923745610923-14': {
        title: '隠された金庫',
        narration: '砂の香りの気流が積み重なった箱の後ろの装甲された継ぎ目からささやく。断片が円形の錠に欠けた歯のようにぴったり嵌まり、壁が螺旋階段に解ける。古代の数学的な何かが下で待っている。',
        choices: {
          'story-8923745610923-c28': {
            text: '慎重な線で逆説回路を封印する。',
            description: '安定性を優先。',
          },
          'story-8923745610923-c29': {
            text: 'その先の部屋に踏み入る。',
            description: '根本原因に直面する。',
          },
          'story-8923745610923-c30': {
            text: '学芸員を呼んで合流させる。',
            description: '信頼を賭ける。',
          },
        },
      },
      'story-8923745610923-15': {
        title: '警備巡回',
        narration: '無線がパチパチと鳴る――警備員が時計のホールへと経路を変える。ノヴァが迂回路をスケッチし、線が扉を左に1メートルずらす。すり抜けるのに十分。建物がため息をつく。苛立っているが従順だ。',
        choices: {
          'story-8923745610923-c31': {
            text: '後ろに回って学芸員の追跡を再開する。',
            description: '人間の変数と共に留まる。',
          },
          'story-8923745610923-c32': {
            text: '描かれた出入口に戻る。',
            description: '砂漠の部屋が呼んでいる。',
          },
        },
      },
      'story-8923745610923-16': {
        title: '古代都市',
        narration: '月光が屋根のない部屋に溜まり、砂が雪のように漂う。レリーフは彗星の尾で絵を描く芸術家を示し、彼らの壁画は日々を新しい形に輪にする。足跡――新鮮な――が9字に変わった目に刻まれた台座を囲む。',
        choices: {
          'story-8923745610923-c33': {
            text: '寺院を研究する',
          },
          'story-8923745610923-c34': {
            text: 'ここから逆説の封印を始める。',
            description: '源でループを閉じる。',
          },
        },
      },
      'story-8923745610923-18': {
        title: '逆説の方程式',
        narration: '星々がネットワークのノードのように瞬き、可能性の線が過去を今に繋ぐ。設計図が現実に重なり、切り取られた時間を明るい傷として示す。クロノキャンバスが脈動し、選択を要求する。降伏によって癒すか、代償によって癒すか。',
        choices: {
          'story-8923745610923-c37': {
            text: '時間を復元し、反動を自分で吸収する。',
            description: 'キャンバスを保つが――それもあなたを保つ。',
          },
          'story-8923745610923-c38': {
            text: 'キャンバスが自らを消費して傷を閉じさせる。',
            description: '道具を失い、世界を救う。',
          },
        },
      },
      'story-8923745610923-19': {
        title: '同盟した学芸員',
        narration: '学芸員が到着し、目は濡れているがあなたの招待で安定している。一緒に断片を台座に置く。手が鏡のように震える。この共有されたフレームの中で、悲しみは刃ではなく筆になれるかもしれない。',
        choices: {
          'story-8923745610923-c39': {
            text: '一緒に逆説を封印する。',
            description: '二つの手、一つの意図。',
          },
          'story-8923745610923-c40': {
            text: '一筆のためにキャンバスを託す。',
            description: '主体性を与える――裏切りを賭ける。',
          },
        },
      },
      'story-8923745610923-20': {
        title: '寺院の試練',
        narration: '風が砂を辛抱強い螺旋に梳く。壁画が答えを囁く。傷を直すには、傷があるだろう場所の自分に上塗りする。台座が鳴動し、埃と心拍の言語でカウントダウンする。',
        choices: {
          'story-8923745610923-c41': {
            text: 'キャンバスを犠牲にして亀裂を封印する。',
            description: '自らを塗り消す筆。',
          },
          'story-8923745610923-c42': {
            text: '傷跡を負うために自分の糸を書き換える。',
            description: 'パッチになる。',
          },
        },
      },
      'story-8923745610923-21': {
        title: '癒されたタイムライン',
        narration: 'あなたは時間を復元し、反動を個人的な引き潮として受け入れる。数日後、新しい震えと共に目覚める。手首の幽霊のような痙攣が遠くの嵐と同期する。世界は続く――完全に――あなたが一人でその天気を抱える方法を学ぶ間。',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: '消費されたキャンバス',
        narration: 'クロノキャンバスが自分のインクを飲む。ページごとに、雨の匂いだけが残るまで。傷が継ぎ目なく閉じ、歴史が乾く濡れた絵の具のように滑らかになる。あなたは二度と時間をスケッチしないが、至る所の時計がより楽に呼吸する。',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: '裏切りの解体',
        narration: 'キャンバスを与えられた学芸員は時間を完全に描き直す――完璧で、痛みがなく、不可能。タイムラインが嘘を拒否し、針金のように歌う明るい糸に裂ける。あなたは残りの日々を嗡嗡と鳴るフィラメントを集めて過ごす。亀裂の織り手。',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: '自己の書き換え',
        narration: 'あなたは自分の日々に慎重な傷跡を描く。記憶に埋め込まれた輪状の9と目。逆説が傷を飲み込み、あなたを違えて残す――少し位相がずれ、縁が明るい。時々あなたは線の途中で自分を捕らえ、まだ始めていない線を既に終えている。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '悖论调色板',
    description: '午夜时分，一位博物馆修复师发现了一本可以重绘时间的速写本。每画一条线就能修复一个裂缝，同时撕裂另一个，而一位悲伤的馆长试图永远抹去一个悲剧性的时刻。你能在画布自我撕裂之前创作出一条稳固的时间线吗？',
    author: '时间画布工作室',
    nodes: {
      'story-8923745610923-3': {
        title: '巷子实验',
        narration: '雨针般击打着博物馆后面霓虹闪烁的人行道。诺娃勾勒出一道细弧；水坑向后荡起涟漪，雨滴像倒带的玻璃一样向上跳跃。排水沟上方出现一道绿色的缝隙，持续了一个心跳的时间——一道散发着臭氧和旧纸张气味的裂缝。',
        choices: {
          'story-8923745610923-c5': {
            text: '回到室内的钟表大厅。',
            description: '在稳定的节奏附近测试效果。',
          },
          'story-8923745610923-c6': {
            text: '用更大胆的笔触扩大裂缝。',
            description: '高风险，高洞察。',
          },
        },
      },
      'story-8923745610923-9': {
        title: '钟表之心',
        narration: '中央机构像胸腔一样打开，齿轮闪烁着油脂和记忆的光泽。诺娃用谨慎的笔触连接缺失的齿牙；秒针呼出流畅的运动。在这份平静中，一个隐藏的隔间咔嗒打开——一个邀请。',
        choices: {
          'story-8923745610923-c18': {
            text: '打开显露的隔间。',
            description: '秘密藏在节奏稳固的地方。',
          },
          'story-8923745610923-c19': {
            text: '关闭并后退以避免陷阱。',
            description: '谨慎保留选择。',
          },
        },
      },
      'story-8923745610923-10': {
        title: '绘制的门道',
        narration: '钟面像底漆接受颜料一样接受了一扇门。冷空气涌入，带着尘埃和古石上阳光的气息。在那之后，沙子在一个不应存在的房间里轻轻歌唱。',
        choices: {
          'story-8923745610923-c20': {
            text: '首先寻找丢失的碎片。',
            description: '地图很重要。',
          },
          'story-8923745610923-c21': {
            text: '踏入沙漠房间。',
            description: '抓住主动权。',
          },
        },
      },
      'story-8923745610923-12': {
        title: '失落的碎片',
        narration: '在一间弥漫着活页夹和雪松气味的后室里，一块撕裂的羊皮纸碎片藏在旧保护档案里。这块碎片显示了一个象形文字，看起来像是被塑造成侧卧数字九的笔触。对着光看，这个标记像一只眼睛——和一个环。',
        choices: {
          'story-8923745610923-c24': {
            text: '绘制替代符文来测试回路。',
            description: '即兴创作缺失的钥匙。',
          },
          'story-8923745610923-c25': {
            text: '使用碎片打开隐藏的金库。',
            description: '原件胜过仿制品。',
          },
        },
      },
      'story-8923745610923-13': {
        title: '安静的审问',
        narration: '你在古董钟表画廊里将馆长逼入角落；你周围的时间恭敬地沉默。他们的眼睛被悲伤浸透，声音脆弱地承认计划：切掉失落的那个小时，拒绝它的回声。蓝图像活物一样颤抖。',
        choices: {
          'story-8923745610923-c26': {
            text: '安抚他们——提出安全帮助。',
            description: '将敌人变成盟友。',
          },
          'story-8923745610923-c27': {
            text: '拿走蓝图并冲向金库。',
            description: '行动胜于争论。',
          },
        },
      },
      'story-8923745610923-14': {
        title: '隐藏的金库',
        narration: '一股带着沙子香气的气流从堆叠的箱子后面的装甲接缝中低语。碎片像缺失的牙齿一样嵌入圆形锁中，墙壁解开成螺旋楼梯。古老而数学的东西在下面等待。',
        choices: {
          'story-8923745610923-c28': {
            text: '用谨慎的笔触封印悖论回路。',
            description: '稳定优先。',
          },
          'story-8923745610923-c29': {
            text: '踏入更远的房间。',
            description: '面对根本原因。',
          },
          'story-8923745610923-c30': {
            text: '召唤馆长加入你。',
            description: '冒信任的风险。',
          },
        },
      },
      'story-8923745610923-15': {
        title: '安保巡查',
        narration: '对讲机嘎嘎作响——警卫将路线转向钟表大厅。诺娃绘制了一条绕行路线，线条将门向左移动了一米，刚好够溜过去。建筑叹息，恼火但顺从。',
        choices: {
          'story-8923745610923-c31': {
            text: '绕到后面继续跟踪馆长。',
            description: '留在人类变量旁。',
          },
          'story-8923745610923-c32': {
            text: '返回绘制的门道。',
            description: '沙漠房间在召唤。',
          },
        },
      },
      'story-8923745610923-16': {
        title: '古代城市',
        narration: '月光汇聚在一个无顶的房间里，沙子像雪一样飘浮。浮雕显示艺术家用彗星尾巴作画，他们的壁画将日子编成新的形状。脚印——新鲜的——环绕着一个雕刻成九字变眼的基座。',
        choices: {
          'story-8923745610923-c33': {
            text: '研究神殿',
          },
          'story-8923745610923-c34': {
            text: '从这里开始封印悖论。',
            description: '在源头关闭循环。',
          },
        },
      },
      'story-8923745610923-18': {
        title: '悖论方程',
        narration: '星星像网络中的节点一样闪烁，潜力线连接过去与现在。蓝图叠加在现实上，显示被切除的时刻像一道明亮的伤口。时间画布脉动，要求做出选择：通过投降治愈，还是通过代价治愈。',
        choices: {
          'story-8923745610923-c37': {
            text: '恢复那个小时并自己承受反噬。',
            description: '你保留了画布——但它也保留了你。',
          },
          'story-8923745610923-c38': {
            text: '让画布自我消耗以封闭伤口。',
            description: '失去工具，拯救世界。',
          },
        },
      },
      'story-8923745610923-19': {
        title: '盟友馆长',
        narration: '馆长到达，眼睛湿润但因你的邀请而坚定。你们一起将碎片放在基座上；你们的手镜像般颤抖。在这个共享的框架中，悲伤可以成为画笔而不是刀刃。',
        choices: {
          'story-8923745610923-c39': {
            text: '一起封印悖论。',
            description: '两只手，一个意图。',
          },
          'story-8923745610923-c40': {
            text: '将画布托付给他们画一笔。',
            description: '提供能动性——冒背叛的风险。',
          },
        },
      },
      'story-8923745610923-20': {
        title: '神殿试炼',
        narration: '风将沙子梳成耐心的螺旋。壁画低语答案：要修复伤口，在伤口应该在的地方画在自己身上。基座嗡鸣，用尘埃和心跳的语言倒数。',
        choices: {
          'story-8923745610923-c41': {
            text: '牺牲画布以封印裂口。',
            description: '一支将自己画掉的笔刷。',
          },
          'story-8923745610923-c42': {
            text: '重写自己的线索以承载疤痕。',
            description: '成为补丁。',
          },
        },
      },
      'story-8923745610923-21': {
        title: '时间线愈合',
        narration: '你恢复了那个小时，接受反噬作为个人暗流。几天后，你醒来时有了新的颤抖，手腕上的幽灵抽搐与远方的风暴同步。世界继续——完整——而你独自学会承受它的天气。',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: '画布被消耗',
        narration: '时间画布喝下自己的墨水，一页接一页，直到只剩下雨的气味。伤口无缝闭合，历史像湿颜料干燥一样平滑。你再也无法绘制时间，但各处的钟表都呼吸得更轻松。',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: '背叛解开',
        narration: '得到画布后，馆长完全重绘了那个小时——完美、无痛、不可能。时间线拒绝谎言，撕裂成像电线一样歌唱的明亮线条。你余生都在收集嗡嗡作响的细丝，一个裂缝的编织者。',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: '自我重写',
        narration: '你在自己的日子里画上一道谨慎的疤痕，一个嵌入记忆中的环形九字和眼睛。悖论吞下伤口，让你变得不同——有点相位不同，边缘明亮。有时你在笔画中途发现自己，已经完成了尚未开始的线条。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '역설의 팔레트',
    description: '자정에 박물관 복원가가 시간을 다시 칠할 수 있는 스케치북을 발견한다. 그려진 각 선은 하나의 균열을 수리하고 다른 하나를 분할하며, 슬픔에 잠긴 큐레이터는 비극적인 한 시간을 영원히 지우려 한다. 캔버스가 스스로 찢어지기 전에 유지되는 타임라인을 만들 수 있을까?',
    author: '크로노캔버스 스튜디오',
    nodes: {
      'story-8923745610923-3': {
        title: '골목 실험',
        narration: '비가 박물관 뒤 네온빛 반짝이는 포장도로에 바늘처럼 내린다. 노바가 얇은 호를 스케치한다. 웅덩이가 거꾸로 물결치고, 빗방울들이 되감기는 유리처럼 위로 뛴다. 하수구 위로 심장박동만큼 짧게 녹색 이음매가 열린다--오존과 오래된 종이 냄새가 나는 균열.',
        choices: {
          'story-8923745610923-c5': {
            text: '안으로 돌아가 시계 홀로 간다.',
            description: '안정적인 리듬 근처에서 효과를 시험한다.',
          },
          'story-8923745610923-c6': {
            text: '더 대담한 획으로 균열을 넓힌다.',
            description: '높은 위험, 높은 통찰.',
          },
        },
      },
      'story-8923745610923-9': {
        title: '시계태엽의 심장',
        narration: '중앙 메커니즘이 흉곽처럼 열리고, 톱니바퀴들이 기름과 기억으로 반짝인다. 조심스러운 획으로 노바가 빠진 톱니를 연결한다. 초침이 부드러운 움직임으로 숨을 내쉰다. 그 고요함 속에서 숨겨진 칸이 딸깍 열린다--초대장.',
        choices: {
          'story-8923745610923-c18': {
            text: '드러난 칸을 연다.',
            description: '비밀은 리듬이 유지되는 곳에 숨는다.',
          },
          'story-8923745610923-c19': {
            text: '닫고 후퇴하여 함정을 피한다.',
            description: '신중함이 선택지를 보존한다.',
          },
        },
      },
      'story-8923745610923-10': {
        title: '그려진 출입구',
        narration: '시계 문자판이 프라이머에 물감이 스며들듯 출입구를 받아들인다. 먼지와 오래된 돌 위의 태양 같은 향기로 맛을 낸 차가운 공기가 쏟아진다. 그 너머, 있어서는 안 될 방에서 모래가 부드럽게 노래한다.',
        choices: {
          'story-8923745610923-c20': {
            text: '먼저 잃어버린 조각을 찾는다.',
            description: '지도가 중요하다.',
          },
          'story-8923745610923-c21': {
            text: '사막 방으로 들어간다.',
            description: '주도권을 잡는다.',
          },
        },
      },
      'story-8923745610923-12': {
        title: '잃어버린 조각',
        narration: '바인더와 삼나무 냄새가 나는 뒷방에서 찢어진 양피지 조각이 오래된 보존 파일 안에 숨어 있다. 조각은 옆으로 누운 숫자 9 모양의 붓질처럼 보이는 글리프를 보여준다. 빛에 비추면 그 표시는 눈--그리고 고리를 닮았다.',
        choices: {
          'story-8923745610923-c24': {
            text: '회로를 시험하기 위해 대체 글리프를 스케치한다.',
            description: '잃어버린 열쇠를 즉흥으로 만든다.',
          },
          'story-8923745610923-c25': {
            text: '조각을 사용하여 숨겨진 금고를 연다.',
            description: '원본이 모조품을 이긴다.',
          },
        },
      },
      'story-8923745610923-13': {
        title: '조용한 심문',
        narration: '당신은 골동품 시계 갤러리에서 큐레이터를 몰아넣는다. 주변의 시간이 존경하며 조용해진다. 그들의 눈은 슬픔으로 절여져 있고, 계획을 인정하면서 목소리가 부서진다. 상실의 시간을 잘라내고 그 메아리를 거부하겠다고. 청사진이 살아있는 것처럼 떨린다.',
        choices: {
          'story-8923745610923-c26': {
            text: '그들을 진정시킨다--안전하게 돕겠다고 제안한다.',
            description: '적을 동맹으로 만든다.',
          },
          'story-8923745610923-c27': {
            text: '청사진을 가져다가 금고로 달린다.',
            description: '논쟁보다 행동.',
          },
        },
      },
      'story-8923745610923-14': {
        title: '숨겨진 금고',
        narration: '모래 향기의 바람이 쌓인 상자 뒤 장갑된 이음매에서 속삭인다. 조각이 원형 자물쇠에 빠진 이처럼 딱 맞아 들어가고, 벽이 나선 계단으로 풀린다. 고대의 수학적인 무언가가 아래에서 기다린다.',
        choices: {
          'story-8923745610923-c28': {
            text: '조심스러운 획으로 역설 회로를 봉인한다.',
            description: '안정성을 우선으로.',
          },
          'story-8923745610923-c29': {
            text: '그 너머의 방으로 들어간다.',
            description: '근본 원인을 직면한다.',
          },
          'story-8923745610923-c30': {
            text: '큐레이터를 불러 합류시킨다.',
            description: '신뢰를 감수한다.',
          },
        },
      },
      'story-8923745610923-15': {
        title: '경비 순찰',
        narration: '무전기가 딱딱거린다--경비들이 시계 홀 쪽으로 경로를 바꾼다. 노바가 우회로를 스케치하고, 선들이 문을 왼쪽으로 1미터 미끄러뜨린다. 빠져나가기에 충분하다. 건물이 한숨을 쉬며, 짜증나지만 순응한다.',
        choices: {
          'story-8923745610923-c31': {
            text: '뒤로 돌아가서 큐레이터 추적을 재개한다.',
            description: '인간 변수와 함께 머문다.',
          },
          'story-8923745610923-c32': {
            text: '그려진 출입구로 돌아간다.',
            description: '사막 방이 부른다.',
          },
        },
      },
      'story-8923745610923-16': {
        title: '고대 도시',
        narration: '달빛이 지붕 없는 방에 고이고, 모래가 눈처럼 떠다닌다. 부조는 혜성 꼬리로 그림을 그리는 예술가들을 보여주며, 그들의 벽화는 날들을 새로운 형태로 고리 짓는다. 발자국--신선한--이 9자로 변한 눈 모양으로 조각된 단상 주위를 돈다.',
        choices: {
          'story-8923745610923-c33': {
            text: '사원을 연구한다',
          },
          'story-8923745610923-c34': {
            text: '여기서부터 역설 봉인을 시작한다.',
            description: '근원지에서 고리를 닫는다.',
          },
        },
      },
      'story-8923745610923-18': {
        title: '역설 방정식',
        narration: '별들이 네트워크의 노드처럼 깜박이고, 잠재력의 선들이 과거를 현재에 연결한다. 청사진이 현실에 겹쳐져 잘려진 시간을 밝은 상처로 보여준다. 크로노캔버스가 맥동하며 선택을 요구한다. 항복으로 치유할 것인가, 대가로 치유할 것인가.',
        choices: {
          'story-8923745610923-c37': {
            text: '시간을 복원하고 반발을 스스로 흡수한다.',
            description: '당신은 캔버스를 보존하지만--캔버스도 당신을 보존한다.',
          },
          'story-8923745610923-c38': {
            text: '캔버스가 스스로를 소모하여 상처를 닫게 한다.',
            description: '도구를 잃고, 세계를 구한다.',
          },
        },
      },
      'story-8923745610923-19': {
        title: '동맹 큐레이터',
        narration: '큐레이터가 도착하고, 눈은 젖었지만 당신의 초대로 안정되었다. 함께 조각을 단상 위에 놓는다. 손이 거울처럼 떨린다. 이 공유된 프레임 안에서 슬픔은 칼날 대신 붓이 될 수 있다.',
        choices: {
          'story-8923745610923-c39': {
            text: '함께 역설을 봉인한다.',
            description: '두 손, 하나의 의도.',
          },
          'story-8923745610923-c40': {
            text: '한 획을 위해 캔버스를 맡긴다.',
            description: '행위성을 제공--배신을 감수한다.',
          },
        },
      },
      'story-8923745610923-20': {
        title: '사원의 시련',
        narration: '바람이 모래를 인내심 있는 소용돌이로 빗는다. 벽화들이 답을 속삭인다. 상처를 고치려면 상처가 있을 곳에 자신을 덧칠하라. 단상이 진동하며 먼지와 심장박동의 언어로 카운트다운한다.',
        choices: {
          'story-8923745610923-c41': {
            text: '캔버스를 희생하여 균열을 봉인한다.',
            description: '스스로를 칠하는 붓.',
          },
          'story-8923745610923-c42': {
            text: '흉터를 짊어지기 위해 자신의 실을 다시 쓴다.',
            description: '패치가 된다.',
          },
        },
      },
      'story-8923745610923-21': {
        title: '치유된 타임라인',
        narration: '당신은 시간을 복원하며 반발을 개인적인 저류로 받아들인다. 며칠 후 새로운 떨림과 함께 깨어난다. 손목의 유령 같은 틱이 먼 폭풍과 동기화된다. 세계는 계속된다--온전하게--당신이 혼자 그 날씨를 감당하는 법을 배우는 동안.',
        choices: {
        },
      },
      'story-8923745610923-22': {
        title: '소모된 캔버스',
        narration: '크로노캔버스가 자신의 잉크를 마신다. 페이지마다, 비 냄새만 남을 때까지. 상처가 이음매 없이 닫히고, 역사가 마르는 젖은 물감처럼 매끄러워진다. 당신은 다시는 시간을 스케치하지 못하지만, 모든 곳의 시계들이 더 쉽게 숨쉰다.',
        choices: {
        },
      },
      'story-8923745610923-23': {
        title: '배신의 풀림',
        narration: '캔버스를 받은 큐레이터가 시간을 완전히 다시 그린다--완벽하고, 고통 없고, 불가능하다. 타임라인이 거짓을 거부하고, 철사처럼 노래하는 밝은 실로 찢어진다. 당신은 나머지 날들을 윙윙거리는 필라멘트를 모으며 보낸다. 균열의 직조자.',
        choices: {
        },
      },
      'story-8923745610923-24': {
        title: '자아 재작성',
        narration: '당신은 자신의 날들에 조심스러운 흉터를 그린다. 기억에 내장된 고리 모양의 9와 눈. 역설이 상처를 삼키고 당신을 다르게 남긴다--약간 위상이 어긋나고, 가장자리가 밝다. 때때로 당신은 획의 중간에 자신을 포착하며, 아직 시작하지 않은 선을 이미 끝내고 있다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
