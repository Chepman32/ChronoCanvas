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

export const story_9123457712345StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Heartline Rewind',
    description: 'A city is trapped in a 59-minute loop, and your sketches can splice the hours back together. But every repair ripples the past--especially the night you lost Maya. Will you restore the timeline or redraw your fate?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9123457712345-1': {
        title: 'Looped Midnight',
        narration: 'Rain stitches silver dashes across the street as a clock tower stutters: 11:01--again. Your ChronoCanvas hums in your palm like a caged metronome, the line you draw echoing through puddles and neon signs. Somewhere nearby, Maya waits at the observatory, unaware that this hour has already happened a dozen times.',
        choices: {
          'story-9123457712345-c1': {
            text: 'Hurry to the museum clock hall.',
            description: 'Stabilize the city\\',
          },
          'story-9123457712345-c2': {
            text: 'Go straight to the rooftop observatory.',
            description: 'Find Maya before the loop resets.',
          },
        },
      },
      'story-9123457712345-2': {
        title: 'Rooftop Signal',
        narration: 'Wind chimes the guy wires around the telescope dome. Maya stands beneath a sky cleaved by clouds, studying a faint anomaly like a thumbprint in the stars. She glances toward the stairwell as if expecting someone--then your phone buzzes with a warning: loop integrity failing.',
        choices: {
          'story-9123457712345-c3': {
            text: 'Tell Maya the truth about the loop.',
            description: 'Honesty may bind you to this timeline.',
          },
          'story-9123457712345-c4': {
            text: 'Keep it light; invite her for coffee.',
            description: 'Anchor normalcy; buy time.',
          },
        },
      },
      'story-9123457712345-3': {
        title: 'Rain Cafe',
        narration: 'Steam ghosts the cafe windows as raindrops march backwards along the glass--time snagging, then resuming. Maya laughs at a memory you should not know yet, and the laugh thins when the lights flutter twice. The ChronoCanvas warms, impatient.',
        choices: {
          'story-9123457712345-c5': {
            text: 'Confess the loop now.',
            description: 'Risk disbelief to build trust.',
          },
          'story-9123457712345-c6': {
            text: 'Excuse yourself and sprint to the clock hall.',
            description: 'Patch time, then return.',
          },
        },
      },
      'story-9123457712345-5': {
        title: 'Hall of Clocks',
        narration: 'A cathedral of pendulums debates the present in overlapping ticks. One massive regulator argues loudly--its seconds hand double-steps, then sulks. You can feel the loop snag on its teeth.',
        choices: {
          'story-9123457712345-c9': {
            text: 'Repair the regulator with a fine stroke.',
            description: 'Precision first.',
          },
          'story-9123457712345-c10': {
            text: 'Draw a doorway on the clock face.',
            description: 'Shortcut to the source.',
          },
          'story-9123457712345-c11': {
            text: 'Trail the suspicious curator.',
            description: 'Someone is meddling too.',
          },
        },
      },
      'story-9123457712345-6': {
        title: 'Rift Alley',
        narration: 'A seam in the rain hangs like a cut in film; beyond it, stars glitter like screws. The air tastes of static and wet stone, tugging at your sleeves both forward and back. One bold line could anchor the tear--or widen it.',
        choices: {
          'story-9123457712345-c12': {
            text: 'Stabilize with a lattice of lines.',
            description: 'Engineer the breach.',
          },
          'story-9123457712345-c13': {
            text: 'Step away and regroup at the hall.',
            description: 'Do not tempt collapse.',
          },
        },
      },
      'story-9123457712345-9': {
        title: 'Clockwork Calm',
        narration: 'Your stroke bridges a missing tooth, and the seconds hand exhales to true pace. A hidden panel unlocks with a polite click. Inside: the torn vellum fragment and a key shaped like a question mark.',
        choices: {
          'story-9123457712345-c18': {
            text: 'Take fragment to the vault.',
            description: 'Original beats imitation.',
          },
          'story-9123457712345-c19': {
            text: 'Use the door trick to the temple.',
            description: 'Skip the stairs.',
          },
        },
      },
      'story-9123457712345-10': {
        title: 'Sketched Threshold',
        narration: 'Ink takes to brass like dew to dawn. The clock face softens, accepting a drawn door that opens on dry, singing sand. Cold air with a scent of sun on stone brushes your cheeks.',
        choices: {
          'story-9123457712345-c20': {
            text: 'Step through to the temple chamber.',
            description: 'Meet the source.',
          },
          'story-9123457712345-c21': {
            text: 'Return to gather the missing fragment.',
            description: 'Do not risk a guess.',
          },
        },
      },
      'story-9123457712345-12': {
        title: 'Archive Room',
        narration: 'Dust motes drift like lost seconds in lamplight. In a conservation folder, the torn vellum fragment waits with an inked looped-nine--an eye and a spiral in one. It warms the air when your fingers brush it.',
        choices: {
          'story-9123457712345-c24': {
            text: 'Slot the fragment into the vault lock.',
            description: 'Complete the circuit.',
          },
          'story-9123457712345-c25': {
            text: 'Sketch a backup surrogate just in case.',
            description: 'Belt and suspenders.',
          },
        },
      },
      'story-9123457712345-14': {
        title: 'Hidden Vault',
        narration: 'Behind stacked crates, a circular seam exhales a desert draft. The vellum fragment seats into a lock that unfurls like a blooming spiral. Stairs sink toward a chamber where sand waits like a patient page.',
        choices: {
          'story-9123457712345-c28': {
            text: 'Seal the paradox equation here.',
            description: 'Stability over desire.',
          },
          'story-9123457712345-c29': {
            text: 'Step through to the temple\\',
          },
          'story-9123457712345-c30': {
            text: 'Call Maya to join you.',
            description: 'Choose together.',
          },
        },
      },
      'story-9123457712345-16': {
        title: 'Temple Dais',
        narration: 'Moonlight gathers in a roofless chamber; sand whispers in little avalanches. Murals show artists painting with comet tails, looping days into gentler shapes. Two sets of footprints circle the dais--yours, and the version of you that keeps trying.',
        choices: {
          'story-9123457712345-c33': {
            text: 'Study the murals for instruction.',
            description: 'Learn the cost before paying.',
          },
          'story-9123457712345-c34': {
            text: 'Begin the sealing stroke.',
            description: 'Close the loop now.',
          },
        },
      },
      'story-9123457712345-20': {
        title: 'Paper Sacrifice',
        narration: 'The Canvas drinks its own ink until only the scent of rain remains. Time smooths like fresh paint drying, and clocks across the city breathe easier. You and Maya walk out under honest weather, empty-handed and free.',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: 'Faithless Edit',
        narration: 'A perfect rewrite erases the hurt--and the truth that shaped it. The timeline refuses the lie and frays into bright threads that sing like wire. You spend long nights re-braiding possibilities, and sometimes, in a new dawn, Maya finds you.',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: 'Scar Together',
        narration: 'You paint a careful scar across your days, a looped nine resting under the skin of memory. The city moves on, loopless; you and Maya learn the rhythm of imperfect time. Some mornings you wake already finishing a laugh you have not started.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Перемотка Линии Сердца',
    description: 'Город в ловушке 59-минутной петли, и твои наброски могут сшить часы обратно. Но каждый ремонт создаёт рябь в прошлом--особенно в ту ночь, когда ты потерял Майю. Восстановишь ли ты временную линию или перерисуешь свою судьбу?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9123457712345-1': {
        title: 'Зациклённая Полночь',
        narration: 'Дождь сшивает серебряные штрихи через улицу, пока часовая башня заикается: 11:01--снова. Твой ХроноХолст гудит в ладони, как пойманный в клетку метроном, линия, которую ты рисуешь, эхом отдаётся в лужах и неоновых вывесках. Где-то поблизости Майя ждёт в обсерватории, не зная, что этот час уже происходил дюжину раз.',
        choices: {
          'story-9123457712345-c1': {
            text: 'Спеши в музейный зал часов.',
            description: 'Стабилизируй город.',
          },
          'story-9123457712345-c2': {
            text: 'Иди прямо в обсерваторию на крыше.',
            description: 'Найди Майю до сброса петли.',
          },
        },
      },
      'story-9123457712345-2': {
        title: 'Сигнал на Крыше',
        narration: 'Ветер звенит оттяжными тросами вокруг купола телескопа. Майя стоит под небом, расколотым облаками, изучая слабую аномалию, как отпечаток пальца в звёздах. Она бросает взгляд на лестничную клетку, словно кого-то ждёт--затем твой телефон вибрирует с предупреждением: целостность петли нарушена.',
        choices: {
          'story-9123457712345-c3': {
            text: 'Скажи Майе правду о петле.',
            description: 'Честность может привязать тебя к этой временной линии.',
          },
          'story-9123457712345-c4': {
            text: 'Веди себя непринуждённо; пригласи её на кофе.',
            description: 'Заякори нормальность; выиграй время.',
          },
        },
      },
      'story-9123457712345-3': {
        title: 'Дождевое Кафе',
        narration: 'Пар затуманивает окна кафе, пока капли дождя маршируют задом наперёд по стеклу--время цепляется, затем возобновляется. Майя смеётся над воспоминанием, которое ты ещё не должен знать, и смех истончается, когда огни мерцают дважды. ХроноХолст нагревается, нетерпеливый.',
        choices: {
          'story-9123457712345-c5': {
            text: 'Признайся в петле сейчас.',
            description: 'Рискни недоверием, чтобы построить доверие.',
          },
          'story-9123457712345-c6': {
            text: 'Извинись и беги к залу часов.',
            description: 'Почини время, затем вернись.',
          },
        },
      },
      'story-9123457712345-5': {
        title: 'Зал Часов',
        narration: 'Собор маятников обсуждает настоящее в перекрывающихся тиканьях. Массивный регулятор громко спорит--его секундная стрелка делает двойные шаги, затем дуется. Ты чувствуешь, как петля цепляется за его зубья.',
        choices: {
          'story-9123457712345-c9': {
            text: 'Почини регулятор тонким штрихом.',
            description: 'Сначала точность.',
          },
          'story-9123457712345-c10': {
            text: 'Нарисуй дверь на циферблате.',
            description: 'Короткий путь к источнику.',
          },
          'story-9123457712345-c11': {
            text: 'Выследи подозрительного куратора.',
            description: 'Кто-то тоже вмешивается.',
          },
        },
      },
      'story-9123457712345-6': {
        title: 'Переулок Разлома',
        narration: 'Шов в дожде висит, как разрез на плёнке; за ним звёзды блестят, как винты. Воздух на вкус как статика и мокрый камень, тянущий твои рукава и вперёд, и назад. Одна смелая линия может заякорить разрыв--или расширить его.',
        choices: {
          'story-9123457712345-c12': {
            text: 'Стабилизируй решёткой линий.',
            description: 'Спроектируй прореху.',
          },
          'story-9123457712345-c13': {
            text: 'Отступи и перегруппируйся в зале.',
            description: 'Не искушай коллапс.',
          },
        },
      },
      'story-9123457712345-9': {
        title: 'Часовое Спокойствие',
        narration: 'Твой штрих перекидывает мост через недостающий зуб, и секундная стрелка выдыхает к истинному темпу. Скрытая панель отпирается с вежливым щелчком. Внутри: рваный пергаментный фрагмент и ключ в форме вопросительного знака.',
        choices: {
          'story-9123457712345-c18': {
            text: 'Отнеси фрагмент в хранилище.',
            description: 'Оригинал побеждает имитацию.',
          },
          'story-9123457712345-c19': {
            text: 'Используй трюк с дверью к храму.',
            description: 'Пропусти лестницу.',
          },
        },
      },
      'story-9123457712345-10': {
        title: 'Набросанный Порог',
        narration: 'Чернила пристают к латуни, как роса к рассвету. Циферблат смягчается, принимая нарисованную дверь, которая открывается на сухой, поющий песок. Холодный воздух с ароматом солнца на камне гладит твои щёки.',
        choices: {
          'story-9123457712345-c20': {
            text: 'Шагни в храмовую камеру.',
            description: 'Встреться с источником.',
          },
          'story-9123457712345-c21': {
            text: 'Вернись, чтобы собрать недостающий фрагмент.',
            description: 'Не рискуй догадкой.',
          },
        },
      },
      'story-9123457712345-12': {
        title: 'Архивная Комната',
        narration: 'Пылинки плывут, как потерянные секунды, в свете лампы. В папке консервации рваный пергаментный фрагмент ждёт с чернильной закольцованной девяткой--глаз и спираль в одном. Он согревает воздух, когда твои пальцы касаются его.',
        choices: {
          'story-9123457712345-c24': {
            text: 'Вставь фрагмент в замок хранилища.',
            description: 'Завершить контур.',
          },
          'story-9123457712345-c25': {
            text: 'Набросай запасной суррогат на всякий случай.',
            description: 'Перестраховка.',
          },
        },
      },
      'story-9123457712345-14': {
        title: 'Скрытое Хранилище',
        narration: 'За сложенными ящиками круглой шов выдыхает пустынный сквозняк. Пергаментный фрагмент садится в замок, который разворачивается, как цветущая спираль. Лестницы спускаются к камере, где песок ждёт, как терпеливая страница.',
        choices: {
          'story-9123457712345-c28': {
            text: 'Запечатай парадоксальное уравнение здесь.',
            description: 'Стабильность важнее желания.',
          },
          'story-9123457712345-c29': {
            text: 'Шагни к храму.',
            description: 'Столкнись с корнем.',
          },
          'story-9123457712345-c30': {
            text: 'Позови Майю присоединиться к тебе.',
            description: 'Выбирайте вместе.',
          },
        },
      },
      'story-9123457712345-16': {
        title: 'Храмовый Помост',
        narration: 'Лунный свет собирается в камере без крыши; песок шепчет маленькими лавинами. Фрески показывают художников, рисующих кометными хвостами, сплетающих дни в более мягкие формы. Два набора следов окружают помост--твои и версии тебя, что продолжает пытаться.',
        choices: {
          'story-9123457712345-c33': {
            text: 'Изучи фрески для инструкций.',
            description: 'Узнай цену, прежде чем платить.',
          },
          'story-9123457712345-c34': {
            text: 'Начни запечатывающий штрих.',
            description: 'Закрой петлю сейчас.',
          },
        },
      },
      'story-9123457712345-20': {
        title: 'Бумажная Жертва',
        narration: 'Холст пьёт собственные чернила, пока не остаётся только запах дождя. Время разглаживается, как свежая сохнущая краска, и часы по всему городу дышат легче. Ты и Майя выходите под честной погодой, с пустыми руками и свободные.',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: 'Неверная Правка',
        narration: 'Идеальная переписывание стирает боль--и правду, которая её сформировала. Временная линия отвергает ложь и распадается на яркие нити, что поют, как проволока. Ты проводишь долгие ночи, переплетая возможности, и иногда, в новом рассвете, Майя находит тебя.',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: 'Шрам Вместе',
        narration: 'Ты рисуешь аккуратный шрам через свои дни, закольцованную девятку, покоящуюся под кожей памяти. Город движется дальше, без петли; ты и Майя учитесь ритму несовершенного времени. Некоторыми утрами ты просыпаешься, уже заканчивая смех, который ещё не начал.',
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
    title: 'Rembobinage de la Ligne de Cœur',
    description: 'Une ville est piégée dans une boucle de 59 minutes, et vos esquisses peuvent recoller les heures ensemble. Mais chaque réparation fait onduler le passé--surtout la nuit où vous avez perdu Maya. Allez-vous restaurer la chronologie ou redessiner votre destin?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9123457712345-1': {
        title: 'Minuit en Boucle',
        narration: 'La pluie coud des tirets argentés à travers la rue tandis qu\'une tour d\'horloge bégaie: 11:01--encore. Votre ChronoCanvas bourdonne dans votre paume comme un métronome en cage, la ligne que vous tracez résonnant à travers les flaques et les enseignes au néon. Quelque part à proximité, Maya attend à l\'observatoire, ignorant que cette heure s\'est déjà produite une douzaine de fois.',
        choices: {
          'story-9123457712345-c1': {
            text: 'Hâtez-vous vers la salle des horloges du musée.',
            description: 'Stabilisez la ville.',
          },
          'story-9123457712345-c2': {
            text: 'Allez directement à l\'observatoire sur le toit.',
            description: 'Trouvez Maya avant que la boucle ne se réinitialise.',
          },
        },
      },
      'story-9123457712345-2': {
        title: 'Signal sur le Toit',
        narration: 'Le vent fait tinter les câbles autour du dôme du télescope. Maya se tient sous un ciel fendu par les nuages, étudiant une faible anomalie comme une empreinte digitale dans les étoiles. Elle jette un coup d\'œil vers la cage d\'escalier comme si elle attendait quelqu\'un--puis votre téléphone vibre avec un avertissement: l\'intégrité de la boucle échoue.',
        choices: {
          'story-9123457712345-c3': {
            text: 'Dites à Maya la vérité sur la boucle.',
            description: 'L\'honnêteté peut vous lier à cette chronologie.',
          },
          'story-9123457712345-c4': {
            text: 'Restez léger; invitez-la à prendre un café.',
            description: 'Ancrez la normalité; gagnez du temps.',
          },
        },
      },
      'story-9123457712345-3': {
        title: 'Café Pluvieux',
        narration: 'La vapeur embrume les fenêtres du café tandis que des gouttes de pluie marchent à reculons le long du verre--le temps accroche, puis reprend. Maya rit d\'un souvenir que vous ne devriez pas encore connaître, et le rire s\'amincit quand les lumières vacillent deux fois. Le ChronoCanvas se réchauffe, impatient.',
        choices: {
          'story-9123457712345-c5': {
            text: 'Avouez la boucle maintenant.',
            description: 'Risquez l\'incrédulité pour construire la confiance.',
          },
          'story-9123457712345-c6': {
            text: 'Excusez-vous et courez vers la salle des horloges.',
            description: 'Réparez le temps, puis revenez.',
          },
        },
      },
      'story-9123457712345-5': {
        title: 'Salle des Horloges',
        narration: 'Une cathédrale de pendules débat du présent en tic-tac superposés. Un régulateur massif argumente bruyamment--son aiguille des secondes fait des doubles pas, puis boude. Vous pouvez sentir la boucle s\'accrocher à ses dents.',
        choices: {
          'story-9123457712345-c9': {
            text: 'Réparez le régulateur avec un trait fin.',
            description: 'Précision d\'abord.',
          },
          'story-9123457712345-c10': {
            text: 'Dessinez une porte sur le cadran de l\'horloge.',
            description: 'Raccourci vers la source.',
          },
          'story-9123457712345-c11': {
            text: 'Suivez le conservateur suspect.',
            description: 'Quelqu\'un se mêle aussi.',
          },
        },
      },
      'story-9123457712345-6': {
        title: 'Allée de la Faille',
        narration: 'Une couture dans la pluie pend comme une coupure dans un film; au-delà, les étoiles scintillent comme des vis. L\'air a un goût de statique et de pierre mouillée, tirant sur vos manches à la fois en avant et en arrière. Une ligne audacieuse pourrait ancrer la déchirure--ou l\'élargir.',
        choices: {
          'story-9123457712345-c12': {
            text: 'Stabilisez avec un treillis de lignes.',
            description: 'Concevez la brèche.',
          },
          'story-9123457712345-c13': {
            text: 'Éloignez-vous et regroupez-vous dans la salle.',
            description: 'Ne tentez pas l\'effondrement.',
          },
        },
      },
      'story-9123457712345-9': {
        title: 'Calme Mécanique',
        narration: 'Votre trait comble une dent manquante, et l\'aiguille des secondes exhale vers le rythme véritable. Un panneau caché se déverrouille avec un clic poli. À l\'intérieur: le fragment de vélin déchiré et une clé en forme de point d\'interrogation.',
        choices: {
          'story-9123457712345-c18': {
            text: 'Apportez le fragment à la chambre forte.',
            description: 'L\'original bat l\'imitation.',
          },
          'story-9123457712345-c19': {
            text: 'Utilisez l\'astuce de la porte vers le temple.',
            description: 'Sautez les escaliers.',
          },
        },
      },
      'story-9123457712345-10': {
        title: 'Seuil Esquissé',
        narration: 'L\'encre adhère au laiton comme la rosée à l\'aube. Le cadran de l\'horloge s\'adoucit, acceptant une porte dessinée qui s\'ouvre sur du sable sec et chantant. L\'air froid avec un parfum de soleil sur la pierre effleure vos joues.',
        choices: {
          'story-9123457712345-c20': {
            text: 'Franchissez le seuil vers la chambre du temple.',
            description: 'Rencontrez la source.',
          },
          'story-9123457712345-c21': {
            text: 'Revenez chercher le fragment manquant.',
            description: 'Ne risquez pas une supposition.',
          },
        },
      },
      'story-9123457712345-12': {
        title: 'Salle d\'Archives',
        narration: 'Des grains de poussière dérivent comme des secondes perdues dans la lumière de la lampe. Dans un dossier de conservation, le fragment de vélin déchiré attend avec un neuf bouclé à l\'encre--un œil et une spirale en un. Il réchauffe l\'air quand vos doigts le frôlent.',
        choices: {
          'story-9123457712345-c24': {
            text: 'Insérez le fragment dans la serrure de la chambre forte.',
            description: 'Complétez le circuit.',
          },
          'story-9123457712345-c25': {
            text: 'Esquissez un substitut de secours au cas où.',
            description: 'Ceinture et bretelles.',
          },
        },
      },
      'story-9123457712345-14': {
        title: 'Chambre Forte Cachée',
        narration: 'Derrière des caisses empilées, une couture circulaire exhale un courant d\'air désertique. Le fragment de vélin s\'insère dans une serrure qui se déploie comme une spirale en fleur. Des escaliers descendent vers une chambre où le sable attend comme une page patiente.',
        choices: {
          'story-9123457712345-c28': {
            text: 'Scellez l\'équation paradoxale ici.',
            description: 'Stabilité plutôt que désir.',
          },
          'story-9123457712345-c29': {
            text: 'Franchissez le seuil vers le temple.',
            description: 'Rencontrez la racine.',
          },
          'story-9123457712345-c30': {
            text: 'Appelez Maya à vous rejoindre.',
            description: 'Choisissez ensemble.',
          },
        },
      },
      'story-9123457712345-16': {
        title: 'Dais du Temple',
        narration: 'Le clair de lune se rassemble dans une chambre sans toit; le sable murmure en petites avalanches. Des fresques montrent des artistes peignant avec des queues de comètes, bouclant les jours en formes plus douces. Deux ensembles d\'empreintes entourent le dais--les vôtres, et la version de vous qui continue d\'essayer.',
        choices: {
          'story-9123457712345-c33': {
            text: 'Étudiez les fresques pour instruction.',
            description: 'Apprenez le coût avant de payer.',
          },
          'story-9123457712345-c34': {
            text: 'Commencez le trait de scellement.',
            description: 'Fermez la boucle maintenant.',
          },
        },
      },
      'story-9123457712345-20': {
        title: 'Sacrifice de Papier',
        narration: 'Le Canvas boit sa propre encre jusqu\'à ce qu\'il ne reste que le parfum de la pluie. Le temps se lisse comme de la peinture fraîche qui sèche, et les horloges à travers la ville respirent plus facilement. Vous et Maya sortez sous un temps honnête, les mains vides et libres.',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: 'Édition Sans Foi',
        narration: 'Une réécriture parfaite efface la douleur--et la vérité qui l\'a façonnée. La chronologie refuse le mensonge et s\'effiloche en fils lumineux qui chantent comme du fil de fer. Vous passez de longues nuits à retresser les possibilités, et parfois, dans une nouvelle aube, Maya vous trouve.',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: 'Cicatrice Ensemble',
        narration: 'Vous peignez une cicatrice soigneuse à travers vos jours, un neuf bouclé reposant sous la peau du souvenir. La ville avance, sans boucle; vous et Maya apprenez le rythme du temps imparfait. Certains matins, vous vous réveillez en finissant déjà un rire que vous n\'avez pas commencé.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'Rebobinagem da Linha do Coração',
    description: 'Uma cidade está presa em um loop de 59 minutos, e seus esboços podem emendar as horas de volta. Mas cada reparo ondula o passado--especialmente a noite em que você perdeu Maya. Você vai restaurar a linha temporal ou redesenhar seu destino?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9123457712345-1': {
        title: 'Meia-Noite em Loop',
        narration: 'A chuva costura traços prateados pela rua enquanto uma torre de relógio gagueja: 11:01--de novo. Seu ChronoCanvas zumbe em sua palma como um metrônomo enjaulado, a linha que você desenha ecoando através de poças e letreiros de néon. Em algum lugar próximo, Maya espera no observatório, sem saber que esta hora já aconteceu uma dúzia de vezes.',
        choices: {
          'story-9123457712345-c1': {
            text: 'Apresse-se para o salão de relógios do museu.',
            description: 'Estabilize a cidade.',
          },
          'story-9123457712345-c2': {
            text: 'Vá direto para o observatório do telhado.',
            description: 'Encontre Maya antes que o loop reinicie.',
          },
        },
      },
      'story-9123457712345-2': {
        title: 'Sinal no Telhado',
        narration: 'O vento soa os cabos ao redor da cúpula do telescópio. Maya está sob um céu fendido por nuvens, estudando uma fraca anomalia como uma impressão digital nas estrelas. Ela olha para a escada como se esperasse alguém--então seu telefone vibra com um aviso: integridade do loop falhando.',
        choices: {
          'story-9123457712345-c3': {
            text: 'Conte a Maya a verdade sobre o loop.',
            description: 'A honestidade pode amarrá-lo a esta linha temporal.',
          },
          'story-9123457712345-c4': {
            text: 'Mantenha leve; convide-a para um café.',
            description: 'Ancore a normalidade; ganhe tempo.',
          },
        },
      },
      'story-9123457712345-3': {
        title: 'Café da Chuva',
        narration: 'Vapor embaça as janelas do café enquanto gotas de chuva marcham de trás para frente no vidro--o tempo enrosca, depois retoma. Maya ri de uma memória que você ainda não deveria conhecer, e o riso afina quando as luzes piscam duas vezes. O ChronoCanvas aquece, impaciente.',
        choices: {
          'story-9123457712345-c5': {
            text: 'Confesse o loop agora.',
            description: 'Arrisque descrença para construir confiança.',
          },
          'story-9123457712345-c6': {
            text: 'Desculpe-se e corra para o salão de relógios.',
            description: 'Conserte o tempo, depois retorne.',
          },
        },
      },
      'story-9123457712345-5': {
        title: 'Salão dos Relógios',
        narration: 'Uma catedral de pêndulos debate o presente em tique-taques sobrepostos. Um regulador massivo argumenta alto--seu ponteiro de segundos dá passos duplos, depois faz bico. Você pode sentir o loop prender em seus dentes.',
        choices: {
          'story-9123457712345-c9': {
            text: 'Repare o regulador com um traço fino.',
            description: 'Precisão primeiro.',
          },
          'story-9123457712345-c10': {
            text: 'Desenhe uma porta no mostrador do relógio.',
            description: 'Atalho para a fonte.',
          },
          'story-9123457712345-c11': {
            text: 'Siga o curador suspeito.',
            description: 'Alguém também está se intrometendo.',
          },
        },
      },
      'story-9123457712345-6': {
        title: 'Beco da Fenda',
        narration: 'Uma costura na chuva pende como um corte em filme; além dele, estrelas brilham como parafusos. O ar tem gosto de estática e pedra molhada, puxando suas mangas tanto para frente quanto para trás. Uma linha ousada poderia ancorar o rasgo--ou alargá-lo.',
        choices: {
          'story-9123457712345-c12': {
            text: 'Estabilize com uma treliça de linhas.',
            description: 'Engenharia da brecha.',
          },
          'story-9123457712345-c13': {
            text: 'Afaste-se e reagrupe-se no salão.',
            description: 'Não tente o colapso.',
          },
        },
      },
      'story-9123457712345-9': {
        title: 'Calma Mecânica',
        narration: 'Seu traço faz a ponte de um dente faltante, e o ponteiro de segundos exala para o ritmo verdadeiro. Um painel oculto desbloqueia com um clique educado. Dentro: o fragmento de velino rasgado e uma chave em forma de ponto de interrogação.',
        choices: {
          'story-9123457712345-c18': {
            text: 'Leve o fragmento para o cofre.',
            description: 'Original supera imitação.',
          },
          'story-9123457712345-c19': {
            text: 'Use o truque da porta para o templo.',
            description: 'Pule as escadas.',
          },
        },
      },
      'story-9123457712345-10': {
        title: 'Limiar Esboçado',
        narration: 'Tinta adere ao latão como orvalho à aurora. O mostrador do relógio amolece, aceitando uma porta desenhada que se abre para areia seca e cantante. Ar frio com aroma de sol em pedra roça suas bochechas.',
        choices: {
          'story-9123457712345-c20': {
            text: 'Atravesse para a câmara do templo.',
            description: 'Encontre a fonte.',
          },
          'story-9123457712345-c21': {
            text: 'Retorne para buscar o fragmento perdido.',
            description: 'Não arrisque um palpite.',
          },
        },
      },
      'story-9123457712345-12': {
        title: 'Sala de Arquivo',
        narration: 'Partículas de poeira flutuam como segundos perdidos na luz do lampião. Em uma pasta de conservação, o fragmento de velino rasgado espera com um nove enlaçado em tinta--um olho e uma espiral em um. Ele aquece o ar quando seus dedos o roçam.',
        choices: {
          'story-9123457712345-c24': {
            text: 'Encaixe o fragmento na fechadura do cofre.',
            description: 'Complete o circuito.',
          },
          'story-9123457712345-c25': {
            text: 'Esboce um substituto de reserva por precaução.',
            description: 'Cinto e suspensórios.',
          },
        },
      },
      'story-9123457712345-14': {
        title: 'Cofre Oculto',
        narration: 'Atrás de caixas empilhadas, uma costura circular exala uma corrente desértica. O fragmento de velino assenta em uma fechadura que se desenrola como uma espiral florescente. Escadas afundam em direção a uma câmara onde areia espera como uma página paciente.',
        choices: {
          'story-9123457712345-c28': {
            text: 'Sele a equação paradoxal aqui.',
            description: 'Estabilidade sobre desejo.',
          },
          'story-9123457712345-c29': {
            text: 'Atravesse para o templo.',
            description: 'Enfrente a raiz.',
          },
          'story-9123457712345-c30': {
            text: 'Chame Maya para se juntar a você.',
            description: 'Escolham juntos.',
          },
        },
      },
      'story-9123457712345-16': {
        title: 'Estrado do Templo',
        narration: 'Luz lunar reúne-se em uma câmara sem teto; areia sussurra em pequenas avalanches. Murais mostram artistas pintando com caudas de cometas, laçando dias em formas mais suaves. Dois conjuntos de pegadas circundam o estrado--as suas, e a versão de você que continua tentando.',
        choices: {
          'story-9123457712345-c33': {
            text: 'Estude os murais para instrução.',
            description: 'Aprenda o custo antes de pagar.',
          },
          'story-9123457712345-c34': {
            text: 'Comece o traço de selagem.',
            description: 'Feche o loop agora.',
          },
        },
      },
      'story-9123457712345-20': {
        title: 'Sacrifício de Papel',
        narration: 'O Canvas bebe sua própria tinta até que apenas o cheiro de chuva permaneça. O tempo suaviza como tinta fresca secando, e relógios por toda a cidade respiram mais facilmente. Você e Maya saem sob um clima honesto, de mãos vazias e livres.',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: 'Edição Sem Fé',
        narration: 'Uma reescrita perfeita apaga a dor--e a verdade que a moldou. A linha temporal recusa a mentira e se desfaz em fios brilhantes que cantam como arame. Você passa longas noites retrançando possibilidades, e às vezes, em uma nova aurora, Maya encontra você.',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: 'Cicatriz Juntos',
        narration: 'Você pinta uma cicatriz cuidadosa através de seus dias, um nove enlaçado descansando sob a pele da memória. A cidade segue em frente, sem loop; você e Maya aprendem o ritmo do tempo imperfeito. Algumas manhãs você acorda já terminando uma risada que ainda não começou.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '心臓線の巻き戻し',
    description: '都市が59分のループに閉じ込められ、あなたのスケッチが時間をつなぎ直すことができる。しかし、すべての修復は過去に波紋を起こす--特にマヤを失った夜。タイムラインを復元するか、運命を描き直すか？',
    author: 'クロノキャンバス・スタジオ',
    nodes: {
      'story-9123457712345-1': {
        title: 'ループする真夜中',
        narration: '雨が通りに銀色の線を縫い、時計塔がどもる。11時1分--また。あなたのクロノキャンバスが檻に入れられたメトロノームのように手のひらで唸り、描いた線が水たまりとネオンサインを通して響く。近くのどこかで、マヤが天文台で待っている。この時間が既に十数回起こったことを知らずに。',
        choices: {
          'story-9123457712345-c1': {
            text: '博物館の時計ホールへ急ぐ。',
            description: '都市を安定させる。',
          },
          'story-9123457712345-c2': {
            text: '屋上の天文台へまっすぐ行く。',
            description: 'ループがリセットされる前にマヤを見つける。',
          },
        },
      },
      'story-9123457712345-2': {
        title: '屋上の信号',
        narration: '風が望遠鏡ドームの周りの支線を鳴らす。マヤは雲に裂かれた空の下に立ち、星の指紋のような微かな異常を研究している。彼女が誰かを待っているかのように階段室に視線を向けると、あなたの電話が警告と共に振動する。ループの整合性が失敗。',
        choices: {
          'story-9123457712345-c3': {
            text: 'マヤにループについての真実を話す。',
            description: '誠実さがあなたをこのタイムラインに縛るかもしれない。',
          },
          'story-9123457712345-c4': {
            text: '軽く保つ。コーヒーに誘う。',
            description: '日常を固定する。時間を稼ぐ。',
          },
        },
      },
      'story-9123457712345-3': {
        title: '雨のカフェ',
        narration: '蒸気がカフェの窓を霞ませ、雨粒がガラスを逆に行進する--時間が引っかかり、そして再開する。マヤがあなたがまだ知らないはずの記憶に笑い、明かりが二度点滅すると笑いが薄くなる。クロノキャンバスが温まり、焦れている。',
        choices: {
          'story-9123457712345-c5': {
            text: '今ループを告白する。',
            description: '不信を冒して信頼を築く。',
          },
          'story-9123457712345-c6': {
            text: '言い訳して時計ホールへ走る。',
            description: '時間を修復して、戻る。',
          },
        },
      },
      'story-9123457712345-5': {
        title: '時計のホール',
        narration: '振り子の大聖堂が重なり合うチクタク音で現在を議論する。巨大な調整器が声高に主張する--秒針が二重に歩み、そしてふくれる。ループがその歯に引っかかるのを感じることができる。',
        choices: {
          'story-9123457712345-c9': {
            text: '調整器を繊細な線で修理する。',
            description: '精密さを優先。',
          },
          'story-9123457712345-c10': {
            text: '時計の文字盤に出入口を描く。',
            description: '源へのショートカット。',
          },
          'story-9123457712345-c11': {
            text: '怪しいキュレーターを追跡する。',
            description: '誰かも干渉している。',
          },
        },
      },
      'story-9123457712345-6': {
        title: '亀裂の路地',
        narration: '雨の継ぎ目がフィルムの切れ目のように垂れ下がる。その向こうで星がネジのように輝く。空気は静電気と濡れた石の味がし、あなたの袖を前後に引っ張る。大胆な一線が裂け目を固定できる--または広げるかもしれない。',
        choices: {
          'story-9123457712345-c12': {
            text: '線の格子で安定させる。',
            description: '破損を設計する。',
          },
          'story-9123457712345-c13': {
            text: '離れてホールで再編成する。',
            description: '崩壊を誘惑しない。',
          },
        },
      },
      'story-9123457712345-9': {
        title: '時計仕掛けの静けさ',
        narration: 'あなたの線が欠けた歯を架け、秒針が真のペースに息を吐く。隠されたパネルが丁寧なクリックで開錠される。中には破れた羊皮紙の断片と疑問符の形をした鍵。',
        choices: {
          'story-9123457712345-c18': {
            text: '断片を金庫へ持っていく。',
            description: '本物が模造品に勝る。',
          },
          'story-9123457712345-c19': {
            text: 'ドアのトリックを使って寺院へ。',
            description: '階段を飛ばす。',
          },
        },
      },
      'story-9123457712345-10': {
        title: 'スケッチされた敷居',
        narration: 'インクが夜明けの露のように真鍮に付着する。時計の文字盤が柔らかくなり、乾いた歌う砂に開く描かれた扉を受け入れる。石の上の太陽の香りを帯びた冷たい空気があなたの頬を撫でる。',
        choices: {
          'story-9123457712345-c20': {
            text: '寺院の部屋へ踏み入る。',
            description: '源に会う。',
          },
          'story-9123457712345-c21': {
            text: '戻って失われた断片を集める。',
            description: '推測を冒さない。',
          },
        },
      },
      'story-9123457712345-12': {
        title: 'アーカイブ室',
        narration: '埃の粒子がランプの光の中で失われた秒のように漂う。保存フォルダーの中で、破れた羊皮紙の断片がインクで書かれたループ状の9--一つの目と渦巻きと共に待っている。あなたの指が触れると空気が温まる。',
        choices: {
          'story-9123457712345-c24': {
            text: '断片を金庫の錠に差し込む。',
            description: '回路を完成させる。',
          },
          'story-9123457712345-c25': {
            text: '念のため予備の代用品をスケッチする。',
            description: 'ベルトとサスペンダー。',
          },
        },
      },
      'story-9123457712345-14': {
        title: '隠された金庫',
        narration: '積み重ねられた箱の後ろで、円形の継ぎ目が砂漠の風を吐き出す。羊皮紙の断片が花のように咲く螺旋のように展開する錠に収まる。階段が忍耐強いページのように砂が待つ部屋へ沈む。',
        choices: {
          'story-9123457712345-c28': {
            text: 'ここでパラドックス方程式を封印する。',
            description: '欲望より安定性。',
          },
          'story-9123457712345-c29': {
            text: '寺院へ踏み入る。',
            description: '根源に向き合う。',
          },
          'story-9123457712345-c30': {
            text: 'マヤを呼んで合流する。',
            description: '一緒に選ぶ。',
          },
        },
      },
      'story-9123457712345-16': {
        title: '寺院の台座',
        narration: '月光が屋根のない部屋に集まり、砂が小さな雪崩で囁く。壁画は彗星の尾で描く芸術家を示し、日々をより優しい形にループさせる。二組の足跡が台座を囲む--あなたのものと、試み続けるあなたのバージョン。',
        choices: {
          'story-9123457712345-c33': {
            text: '壁画を研究して指示を得る。',
            description: '支払う前に費用を学ぶ。',
          },
          'story-9123457712345-c34': {
            text: '封印の線を始める。',
            description: '今ループを閉じる。',
          },
        },
      },
      'story-9123457712345-20': {
        title: '紙の犠牲',
        narration: 'キャンバスが雨の香りだけが残るまで自分のインクを飲む。時間が乾く新鮮な絵の具のように滑らかになり、都市中の時計がより楽に呼吸する。あなたとマヤは正直な天気の下、手ぶらで自由に歩き出す。',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: '不実な編集',
        narration: '完璧な書き直しが痛みを消す--そしてそれを形作った真実も。タイムラインが嘘を拒否し、ワイヤーのように歌う明るい糸にほつれる。あなたは可能性を編み直す長い夜を過ごし、時々新しい夜明けにマヤがあなたを見つける。',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: '一緒に傷跡',
        narration: 'あなたは日々に慎重な傷跡を描く。記憶の皮膚の下に休むループ状の9。都市はループなしで進み、あなたとマヤは不完全な時間のリズムを学ぶ。いくつかの朝、あなたはまだ始めていない笑いを既に終えながら目覚める。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '心线倒带',
    description: '一座城市困在59分钟的循环中，你的素描可以将时光重新拼接。但每次修复都会在过去激起涟漪——尤其是你失去玛雅的那个晚上。你会恢复时间线还是重绘命运？',
    author: '时间画布工作室',
    nodes: {
      'story-9123457712345-1': {
        title: '循环的午夜',
        narration: '雨在街道上缝制银色的虚线，钟楼结巴：11点01分——又来了。你的时间画布在手掌中嗡嗡作响，像一个被困的节拍器，你画的线在水坑和霓虹灯中回响。就在附近某处，玛雅在天文台等待，不知道这个小时已经发生了十几次。',
        choices: {
          'story-9123457712345-c1': {
            text: '赶到博物馆钟表大厅。',
            description: '稳定城市。',
          },
          'story-9123457712345-c2': {
            text: '直接去屋顶天文台。',
            description: '在循环重置前找到玛雅。',
          },
        },
      },
      'story-9123457712345-2': {
        title: '屋顶信号',
        narration: '风吹响望远镜圆顶周围的拉线。玛雅站在被云层劈开的天空下，研究着像星星上的指纹一样微弱的异常。她朝楼梯间瞥了一眼，好像在等什么人——然后你的手机震动发出警告：循环完整性失败。',
        choices: {
          'story-9123457712345-c3': {
            text: '告诉玛雅关于循环的真相。',
            description: '诚实可能将你绑定到这条时间线。',
          },
          'story-9123457712345-c4': {
            text: '保持轻松；邀请她喝咖啡。',
            description: '固定常态；争取时间。',
          },
        },
      },
      'story-9123457712345-3': {
        title: '雨中咖啡馆',
        narration: '蒸汽使咖啡馆的窗户蒙上雾气，雨滴沿着玻璃倒退行进——时间卡顿，然后恢复。玛雅笑着回忆起你本不应该知道的记忆，当灯光闪烁两次时，笑声变得单薄。时间画布变暖，不耐烦。',
        choices: {
          'story-9123457712345-c5': {
            text: '现在坦白循环。',
            description: '冒着不信的风险建立信任。',
          },
          'story-9123457712345-c6': {
            text: '道歉并冲向钟表大厅。',
            description: '修补时间，然后回来。',
          },
        },
      },
      'story-9123457712345-5': {
        title: '钟表大厅',
        narration: '钟摆的大教堂在重叠的滴答声中辩论着现在。一个巨大的调节器大声争论——它的秒针走双步，然后闹别扭。你能感觉到循环卡在它的齿上。',
        choices: {
          'story-9123457712345-c9': {
            text: '用精细的笔触修理调节器。',
            description: '精确优先。',
          },
          'story-9123457712345-c10': {
            text: '在钟面上画一扇门。',
            description: '通往源头的捷径。',
          },
          'story-9123457712345-c11': {
            text: '跟踪可疑的馆长。',
            description: '也有人在干涉。',
          },
        },
      },
      'story-9123457712345-6': {
        title: '裂缝巷',
        narration: '雨中的一道接缝像胶片上的切口一样悬挂；在它之外，星星像螺丝一样闪烁。空气尝起来像静电和湿石头，同时向前和向后拉扯你的袖子。一条大胆的线可以固定撕裂——或者扩大它。',
        choices: {
          'story-9123457712345-c12': {
            text: '用线格稳定。',
            description: '设计裂口。',
          },
          'story-9123457712345-c13': {
            text: '离开并在大厅重新集结。',
            description: '不要诱惑崩溃。',
          },
        },
      },
      'story-9123457712345-9': {
        title: '钟表的平静',
        narration: '你的笔触架起了一颗缺失的齿，秒针呼出真正的节奏。一个隐藏的面板礼貌地咔嗒一声解锁。里面：撕裂的羊皮纸碎片和一把问号形状的钥匙。',
        choices: {
          'story-9123457712345-c18': {
            text: '把碎片带到金库。',
            description: '原件胜过仿制品。',
          },
          'story-9123457712345-c19': {
            text: '使用门的技巧到寺庙。',
            description: '跳过楼梯。',
          },
        },
      },
      'story-9123457712345-10': {
        title: '绘制的门槛',
        narration: '墨水像黎明的露水一样附着在黄铜上。钟面软化，接受一扇画出的门，门开向干燥、歌唱的沙子。带着石头上阳光香气的冷空气拂过你的脸颊。',
        choices: {
          'story-9123457712345-c20': {
            text: '穿过到寺庙房间。',
            description: '遇见源头。',
          },
          'story-9123457712345-c21': {
            text: '回去收集缺失的碎片。',
            description: '不要冒猜测的风险。',
          },
        },
      },
      'story-9123457712345-12': {
        title: '档案室',
        narration: '尘埃粒子在灯光中像失落的秒一样飘浮。在保存文件夹中，撕裂的羊皮纸碎片等待着，上面有一个墨水画的环形九——一个眼睛和一个螺旋合为一体。当你的手指擦过它时，它温暖了空气。',
        choices: {
          'story-9123457712345-c24': {
            text: '将碎片插入金库锁。',
            description: '完成回路。',
          },
          'story-9123457712345-c25': {
            text: '以防万一绘制一个备用替代品。',
            description: '未雨绸缪。',
          },
        },
      },
      'story-9123457712345-14': {
        title: '隐藏的金库',
        narration: '在堆叠的箱子后面，一道圆形接缝呼出沙漠的气流。羊皮纸碎片嵌入一个像绽放螺旋一样展开的锁中。楼梯下沉到一个房间，沙子像耐心的页面一样等待。',
        choices: {
          'story-9123457712345-c28': {
            text: '在这里封印悖论方程。',
            description: '稳定性高于欲望。',
          },
          'story-9123457712345-c29': {
            text: '穿过到寺庙。',
            description: '面对根源。',
          },
          'story-9123457712345-c30': {
            text: '叫玛雅加入你。',
            description: '一起选择。',
          },
        },
      },
      'story-9123457712345-16': {
        title: '寺庙台座',
        narration: '月光聚集在一个没有屋顶的房间里；沙子在小雪崩中低语。壁画展示艺术家用彗星尾巴作画，将日子编成更温柔的形状。两组脚印环绕着台座——你的，和不断尝试的你的版本。',
        choices: {
          'story-9123457712345-c33': {
            text: '研究壁画以获取指示。',
            description: '在付款前了解代价。',
          },
          'story-9123457712345-c34': {
            text: '开始封印笔触。',
            description: '现在关闭循环。',
          },
        },
      },
      'story-9123457712345-20': {
        title: '纸的牺牲',
        narration: '画布喝下自己的墨水，直到只剩下雨的气味。时间像新鲜干燥的颜料一样平滑，整个城市的时钟呼吸得更轻松。你和玛雅在诚实的天气下走出去，空手而自由。',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: '不忠的编辑',
        narration: '完美的重写抹去了痛苦——以及塑造它的真相。时间线拒绝谎言，碎裂成像电线一样歌唱的明亮线条。你度过漫长的夜晚重新编织可能性，有时，在新的黎明中，玛雅找到了你。',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: '共同的疤痕',
        narration: '你在你的日子里画了一道谨慎的疤痕，一个环形的九躺在记忆的皮肤下。城市继续前进，没有循环；你和玛雅学习不完美时间的节奏。有些早晨你醒来时已经在完成一个尚未开始的笑声。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '심장선 되감기',
    description: '도시가 59분 루프에 갇혔고, 당신의 스케치가 시간을 다시 이어붙일 수 있다. 하지만 모든 수리는 과거에 파문을 일으킨다--특히 당신이 마야를 잃은 그날 밤. 타임라인을 복원할 것인가, 아니면 운명을 다시 그릴 것인가?',
    author: '크로노캔버스 스튜디오',
    nodes: {
      'story-9123457712345-1': {
        title: '루프된 자정',
        narration: '비가 거리를 가로질러 은빛 줄을 꿰매고 시계탑이 더듬거린다. 11시 1분--다시. 당신의 크로노캔버스가 손바닥에서 갇힌 메트로놈처럼 윙윙거리고, 당신이 그린 선이 웅덩이와 네온사인을 통해 메아리친다. 근처 어딘가에서 마야가 천문대에서 기다리고 있다. 이 시간이 이미 수십 번 일어났다는 것을 모른 채.',
        choices: {
          'story-9123457712345-c1': {
            text: '박물관 시계 홀로 서둘러 간다.',
            description: '도시를 안정시킨다.',
          },
          'story-9123457712345-c2': {
            text: '옥상 천문대로 바로 간다.',
            description: '루프가 재설정되기 전에 마야를 찾는다.',
          },
        },
      },
      'story-9123457712345-2': {
        title: '옥상 신호',
        narration: '바람이 망원경 돔 주변의 가이 와이어를 울린다. 마야는 구름에 갈라진 하늘 아래 서서 별의 지문처럼 희미한 이상 현상을 연구한다. 그녀가 누군가를 기대하는 듯 계단실을 향해 시선을 돌리자 당신의 전화가 경고와 함께 진동한다. 루프 무결성 실패.',
        choices: {
          'story-9123457712345-c3': {
            text: '마야에게 루프에 대한 진실을 말한다.',
            description: '정직함이 당신을 이 타임라인에 묶을 수 있다.',
          },
          'story-9123457712345-c4': {
            text: '가볍게 유지한다. 커피를 마시자고 초대한다.',
            description: '평범함을 고정한다. 시간을 번다.',
          },
        },
      },
      'story-9123457712345-3': {
        title: '빗속 카페',
        narration: '증기가 카페 창문을 흐리게 하고 빗방울이 유리를 따라 거꾸로 행진한다--시간이 걸리다가 다시 재개된다. 마야가 당신이 아직 알지 말아야 할 기억에 웃고, 불빛이 두 번 깜박일 때 웃음이 얇아진다. 크로노캔버스가 따뜻해지며, 조바심을 낸다.',
        choices: {
          'story-9123457712345-c5': {
            text: '지금 루프를 고백한다.',
            description: '불신을 감수하고 신뢰를 쌓는다.',
          },
          'story-9123457712345-c6': {
            text: '변명하고 시계 홀로 달려간다.',
            description: '시간을 수리하고 돌아온다.',
          },
        },
      },
      'story-9123457712345-5': {
        title: '시계의 홀',
        narration: '진자들의 대성당이 겹치는 똑딱 소리로 현재를 논쟁한다. 거대한 조정기가 크게 주장한다--초침이 두 걸음을 걷다가 삐진다. 루프가 그 이빨에 걸리는 것을 느낄 수 있다.',
        choices: {
          'story-9123457712345-c9': {
            text: '조정기를 섬세한 선으로 수리한다.',
            description: '정밀함을 우선으로.',
          },
          'story-9123457712345-c10': {
            text: '시계 문자판에 출입구를 그린다.',
            description: '근원으로 가는 지름길.',
          },
          'story-9123457712345-c11': {
            text: '의심스러운 큐레이터를 미행한다.',
            description: '누군가도 간섭하고 있다.',
          },
        },
      },
      'story-9123457712345-6': {
        title: '균열 골목',
        narration: '비의 이음새가 필름의 절단처럼 매달려 있다. 그 너머로 별들이 나사처럼 반짝인다. 공기는 정전기와 젖은 돌 맛이 나며 당신의 소매를 앞뒤로 잡아당긴다. 대담한 한 선이 찢어진 곳을 고정할 수 있다--또는 넓힐 수도.',
        choices: {
          'story-9123457712345-c12': {
            text: '선의 격자로 안정시킨다.',
            description: '균열을 설계한다.',
          },
          'story-9123457712345-c13': {
            text: '물러나서 홀에서 재정비한다.',
            description: '붕괴를 유혹하지 마라.',
          },
        },
      },
      'story-9123457712345-9': {
        title: '시계태엽의 평온',
        narration: '당신의 선이 빠진 톱니를 연결하고 초침이 진정한 속도로 숨을 내쉰다. 숨겨진 패널이 정중한 클릭과 함께 잠금 해제된다. 안에는 찢어진 양피지 조각과 물음표 모양의 열쇠가 있다.',
        choices: {
          'story-9123457712345-c18': {
            text: '조각을 금고로 가져간다.',
            description: '원본이 모조를 이긴다.',
          },
          'story-9123457712345-c19': {
            text: '문 트릭을 사용해 사원으로 간다.',
            description: '계단을 건너뛴다.',
          },
        },
      },
      'story-9123457712345-10': {
        title: '스케치된 문턱',
        narration: '잉크가 새벽의 이슬처럼 황동에 스며든다. 시계 문자판이 부드러워지며 마른 노래하는 모래로 열리는 그려진 문을 받아들인다. 돌 위의 태양 향기가 담긴 차가운 공기가 당신의 뺨을 스친다.',
        choices: {
          'story-9123457712345-c20': {
            text: '사원 방으로 들어간다.',
            description: '근원을 만난다.',
          },
          'story-9123457712345-c21': {
            text: '돌아가서 잃어버린 조각을 모은다.',
            description: '추측을 감수하지 마라.',
          },
        },
      },
      'story-9123457712345-12': {
        title: '보관실',
        narration: '먼지 입자가 램프 빛에서 잃어버린 초처럼 떠다닌다. 보존 폴더 안에 찢어진 양피지 조각이 잉크로 된 루프 9--하나의 눈과 소용돌이와 함께 기다리고 있다. 당신의 손가락이 닿자 공기가 따뜻해진다.',
        choices: {
          'story-9123457712345-c24': {
            text: '조각을 금고 자물쇠에 끼운다.',
            description: '회로를 완성한다.',
          },
          'story-9123457712345-c25': {
            text: '만약을 대비해 백업 대체품을 스케치한다.',
            description: '벨트와 멜빵.',
          },
        },
      },
      'story-9123457712345-14': {
        title: '숨겨진 금고',
        narration: '쌓인 상자 뒤에서 원형 이음새가 사막 바람을 내쉰다. 양피지 조각이 꽃처럼 피어나는 나선형으로 펼쳐지는 자물쇠에 자리 잡는다. 계단이 인내심 있는 페이지처럼 모래가 기다리는 방으로 내려간다.',
        choices: {
          'story-9123457712345-c28': {
            text: '여기서 역설 방정식을 봉인한다.',
            description: '욕망보다 안정성.',
          },
          'story-9123457712345-c29': {
            text: '사원으로 들어간다.',
            description: '뿌리를 마주한다.',
          },
          'story-9123457712345-c30': {
            text: '마야를 불러 함께한다.',
            description: '함께 선택한다.',
          },
        },
      },
      'story-9123457712345-16': {
        title: '사원 단상',
        narration: '달빛이 지붕 없는 방에 모이고 모래가 작은 눈사태로 속삭인다. 벽화는 혜성 꼬리로 그림을 그리며 날들을 더 부드러운 형태로 고리 짓는 예술가들을 보여준다. 두 세트의 발자국이 단상을 둘러싼다--당신의 것과 계속 시도하는 당신의 버전.',
        choices: {
          'story-9123457712345-c33': {
            text: '벽화를 연구해 지침을 얻는다.',
            description: '지불하기 전에 비용을 배운다.',
          },
          'story-9123457712345-c34': {
            text: '봉인 선을 시작한다.',
            description: '지금 루프를 닫는다.',
          },
        },
      },
      'story-9123457712345-20': {
        title: '종이 희생',
        narration: '캔버스가 비 냄새만 남을 때까지 자신의 잉크를 마신다. 시간이 신선한 페인트가 마르듯 매끄러워지고 도시의 모든 시계가 더 쉽게 숨 쉰다. 당신과 마야는 정직한 날씨 아래 빈손으로 자유롭게 걸어 나온다.',
        choices: {
        },
      },
      'story-9123457712345-21': {
        title: '불성실한 편집',
        narration: '완벽한 재작성이 고통을 지운다--그리고 그것을 형성한 진실도. 타임라인이 거짓을 거부하고 전선처럼 노래하는 밝은 실로 헤어진다. 당신은 가능성을 다시 엮는 긴 밤을 보내고, 때때로 새로운 새벽에 마야가 당신을 찾는다.',
        choices: {
        },
      },
      'story-9123457712345-22': {
        title: '함께 흉터',
        narration: '당신은 날들을 가로질러 조심스러운 흉터를 그린다. 기억의 피부 아래 놓인 루프된 아홉. 도시는 루프 없이 계속 움직이고 당신과 마야는 불완전한 시간의 리듬을 배운다. 어떤 아침에는 시작하지 않은 웃음을 이미 끝내며 깨어난다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
