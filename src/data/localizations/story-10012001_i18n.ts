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

export const story_10012001StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Cosmic Castaway',
    description: 'Awakened in a dying spacecraft, you must decide whether to gamble on emergency repairs or risk an uncharted planet below. Every choice pulls you deeper into a fight for survival far from home.',
    author: 'Commander Lyra Hayes',
    nodes: {
      'story-10012001-1': {
        title: 'Catastrophic Wake-Up',
        narration: 'You jolt awake to alarms blaring and lights flickering. Your spacecraft has been struck by debris, leaving you adrift in the void. The hull is breached and oxygen is low. Through the cockpit window, you see a desolate planet below and the endless expanse of stars. With communications down and systems failing, you must act quickly if you hope to survive.',
        choices: {
          'story-10012001-c1': {
            text: 'Try to repair the ship\'s systems and signal for help',
          },
          'story-10012001-c2': {
            text: 'Abandon ship in an escape pod toward the planet',
          },
        },
      },
      'story-10012001-2': {
        title: 'Critical Repairs',
        narration: 'You stay aboard, heart pounding as you float through the crippled cabin. The oxygen meter is dropping. Sparks fly from a damaged console. You have limited time and tools. You stabilize your breathing and consider your options. The communication array is offline and the life support is failing. If you can fix one, it might make the difference between life and death.',
        choices: {
          'story-10012001-c3': {
            text: 'Repair the communications array to call for rescue',
          },
          'story-10012001-c4': {
            text: 'Focus on the life support system to buy more time',
          },
        },
      },
      'story-10012001-3': {
        title: 'Escape Pod Descent',
        narration: 'Deciding the ship is beyond saving, you seal your helmet and climb into the one-person escape pod. With a whoosh, it ejects. Through a small porthole, you watch your ruined ship recede. The pod hurtles toward the planet\'s surface, rattling violently. You brace yourself and moments later, crash-land on a barren, rocky plain under an alien sky. Staggering out, you survey endless red deserts and jagged mountains. The pod\'s systems are intact but resources are scant. As night approaches rapidly, you must determine your next move on this hostile world.',
        choices: {
          'story-10012001-c5': {
            text: 'Climb a ridge and activate the pod\'s beacon, hoping someone hears it',
          },
          'story-10012001-c6': {
            text: 'Gather supplies and search for water and shelter in the valley',
          },
        },
      },
      'story-10012001-4': {
        title: 'Signal Received',
        narration: 'Ignoring the thinning air, you reroute power to the communications array and send out a mayday. For agonizing minutes, there is no response. Just as darkness edges your vision, a crackling voice answers--a patrol ship picked up your distress signal! You collapse with relief as they home in on your beacon. Sometime later, you open your eyes aboard a rescue craft, an oxygen mask on your face. Through the window, you see your shattered ship being left behind. You are safe, saved by the signal you managed to send in time.',
        choices: {
        },
      },
      'story-10012001-5': {
        title: 'Silent Drift',
        narration: 'You devote precious energy to repairing life support--patching leaks and swapping in emergency oxygen canisters. The air stabilizes, buying you hours... but without communication, no one knows you are stranded. You drift alone in the silent darkness of space as time stretches on. Eventually, the oxygen runs out and the cold creeps in. Gazing at distant stars, you make peace with your fate. Your ship becomes your tomb, endlessly orbiting--a lone voyager gone silent in the void.',
        choices: {
        },
      },
      'story-10012001-6': {
        title: 'Beacon Tragedy',
        narration: 'Determined to call for help, you climb the tallest nearby rise and activate the escape pod\'s distress beacon. A weak signal flickers out. Hours pass with no reply. As you descend, the rocky ground gives way--you slip and tumble down a ravine, badly injuring yourself. Night falls, and with it, sub-zero cold. In the morning light, the beacon still blinks dutifully beside you, but you never stir again. Your last gamble ends in tragedy, your story lost on a lonely world.',
        choices: {
        },
      },
      'story-10012001-7': {
        title: 'Red World Survivor',
        narration: 'Accepting that rescue may never come, you salvage what you can from the pod--a water filter, a knife, a thermal blanket--and set off into the unknown. After days of hardship, you discover a sheltered canyon with a trickle of fresh water and edible fungi. It is not paradise, but it is life. As months pass, you learn to hunt the small rock-creatures and endure the crimson planet\'s brutal conditions. Each night, you stare at the stars, wondering if anyone out there wonders what became of you--the cosmic castaway who now calls this alien world home.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Космический Изгнанник',
    description: 'Проснувшись в умирающем космическом корабле, вы должны решить, рискнуть ли на экстренный ремонт или попытать удачу на неизведанной планете внизу. Каждый выбор втягивает вас глубже в борьбу за выживание вдали от дома.',
    author: 'Коммандер Лайра Хейс',
    nodes: {
      'story-10012001-1': {
        title: 'Катастрофическое Пробуждение',
        narration: 'Вы вскакиваете под рев сирен и мерцание огней. Ваш космический корабль столкнулся с обломками и теперь дрейфует в пустоте. Корпус пробит, кислород на исходе. Через окно кабины вы видите пустынную планету внизу и бесконечное пространство звёзд. При отказавшей связи и выходящих из строя системах вы должны действовать быстро, если надеетесь выжить.',
        choices: {
          'story-10012001-c1': {
            text: 'Попытаться отремонтировать системы корабля и подать сигнал о помощи',
          },
          'story-10012001-c2': {
            text: 'Покинуть корабль в спасательной капсуле в направлении планеты',
          },
        },
      },
      'story-10012001-2': {
        title: 'Критический Ремонт',
        narration: 'Вы остаётесь на борту, сердце колотится, пока вы парите по искалеченной кабине. Указатель кислорода падает. Искры летят из повреждённой консоли. У вас ограниченное время и инструменты. Вы стабилизируете дыхание и обдумываете варианты. Коммуникационная система не работает, система жизнеобеспечения отказывает. Если вы сможете починить одну из них, это может решить разницу между жизнью и смертью.',
        choices: {
          'story-10012001-c3': {
            text: 'Отремонтировать коммуникационную систему, чтобы вызвать спасателей',
          },
          'story-10012001-c4': {
            text: 'Сосредоточиться на системе жизнеобеспечения, чтобы выиграть время',
          },
        },
      },
      'story-10012001-3': {
        title: 'Спуск Спасательной Капсулы',
        narration: 'Решив, что корабль не спасти, вы герметизируете шлем и забираетесь в одноместную спасательную капсулу. С шипением она катапультируется. Через маленький иллюминатор вы наблюдаете, как ваш разрушенный корабль отдаляется. Капсула мчится к поверхности планеты, яростно трясясь. Вы готовитесь, и мгновения спустя терпите крушение на пустынной каменистой равнине под чужим небом. Шатаясь, вы выходите и обозреваете бесконечные красные пустыни и зазубренные горы. Системы капсулы целы, но ресурсов мало. Когда быстро наступает ночь, вы должны определить свой следующий шаг на этом враждебном мире.',
        choices: {
          'story-10012001-c5': {
            text: 'Взобраться на хребет и активировать маяк капсулы, надеясь, что кто-то его услышит',
          },
          'story-10012001-c6': {
            text: 'Собрать припасы и искать воду и укрытие в долине',
          },
        },
      },
      'story-10012001-4': {
        title: 'Сигнал Принят',
        narration: 'Игнорируя истончающийся воздух, вы перенаправляете энергию на коммуникационную систему и посылаете сигнал бедствия. Мучительные минуты проходят без ответа. Когда тьма уже затуманивает ваше зрение, раздаётся потрескивающий голос — патрульный корабль засёк ваш сигнал! Вы падаете с облегчением, пока они пеленгуют ваш маяк. Спустя какое-то время вы открываете глаза на борту спасательного судна, кислородная маска на вашем лице. Через окно вы видите, как ваш разбитый корабль остаётся позади. Вы спасены благодаря сигналу, который успели отправить вовремя.',
        choices: {
        },
      },
      'story-10012001-5': {
        title: 'Безмолвный Дрейф',
        narration: 'Вы посвящаете драгоценную энергию ремонту жизнеобеспечения — латаете пробоины и меняете аварийные баллоны с кислородом. Воздух стабилизируется, давая вам часы... но без связи никто не знает, что вы застряли. Вы дрейфуете в одиночестве в безмолвной тьме космоса, пока время тянется. В конце концов кислород заканчивается и холод подкрадывается. Глядя на далёкие звёзды, вы примиряетесь со своей судьбой. Ваш корабль становится вашей могилой, бесконечно вращающейся по орбите — одинокий странник, умолкший в пустоте.',
        choices: {
        },
      },
      'story-10012001-6': {
        title: 'Трагедия Маяка',
        narration: 'Решив призвать на помощь, вы взбираетесь на ближайшую возвышенность и активируете сигнал бедствия спасательной капсулы. Слабый сигнал мерцает в пространство. Часы проходят без ответа. Спускаясь вниз, каменистая почва поддаётся — вы скользите и летите вниз по ущелью, серьёзно травмируясь. Наступает ночь, а с ней приходит мороз ниже нуля. В утреннем свете маяк всё ещё преданно мигает рядом с вами, но вы больше не шевелитесь. Ваша последняя ставка заканчивается трагедией, ваша история потеряна на одинокой планете.',
        choices: {
        },
      },
      'story-10012001-7': {
        title: 'Выживший Красного Мира',
        narration: 'Смирившись с тем, что спасение может так и не прийти, вы забираете из капсулы всё возможное — водный фильтр, нож, термоодеяло — и отправляетесь в неизвестность. После дней лишений вы обнаруживаете защищённый каньон с ручейком свежей воды и съедобными грибами. Это не рай, но это жизнь. С течением месяцев вы учитесь охотиться на мелких каменных существ и выдерживать жестокие условия багрового мира. Каждую ночь вы смотрите на звёзды, задаваясь вопросом, интересуется ли там кто-нибудь, что с вами стало — с космическим изгнанником, который теперь называет этот чужой мир домом.',
        choices: {
        },
      },
    },
  },

  // Español - Not yet translated
  es: { title: '', description: '', author: '', nodes: {} },

  // Deutsch
  de: {
    title: 'Kosmischer Schiffbrüchiger',
    description: 'In einem sterbenden Raumschiff erwacht, musst du entscheiden, ob du auf Notreparaturen setzt oder einen unerforschten Planeten unter dir riskierst. Jede Entscheidung zieht dich tiefer in einen Kampf ums Überleben, weit weg von zu Hause.',
    author: 'Kommandantin Lyra Hayes',
    nodes: {
      'story-10012001-1': {
        title: 'Katastrophales Erwachen',
        narration: 'Du schreckt auf, Alarme heulen und Lichter flackern. Dein Raumschiff wurde von Trümmern getroffen und treibt nun im Nichts. Der Rumpf ist durchbrochen und der Sauerstoff wird knapp. Durch das Cockpitfenster siehst du einen trostlosen Planeten unter dir und die endlose Weite der Sterne. Mit ausgefallener Kommunikation und versagenden Systemen musst du schnell handeln, wenn du überleben willst.',
        choices: {
          'story-10012001-c1': {
            text: 'Versuche, die Systeme des Schiffes zu reparieren und Hilfe zu rufen',
          },
          'story-10012001-c2': {
            text: 'Verlasse das Schiff in einer Rettungskapsel Richtung Planet',
          },
        },
      },
      'story-10012001-2': {
        title: 'Kritische Reparaturen',
        narration: 'Du bleibst an Bord, dein Herz hämmert, während du durch die verkrüppelte Kabine schwebst. Die Sauerstoffanzeige sinkt. Funken sprühen aus einer beschädigten Konsole. Du hast begrenzte Zeit und Werkzeuge. Du stabilisierst deine Atmung und erwägst deine Optionen. Die Kommunikationsanlage ist offline und die Lebenserhaltung versagt. Wenn du eines davon reparieren kannst, könnte es den Unterschied zwischen Leben und Tod bedeuten.',
        choices: {
          'story-10012001-c3': {
            text: 'Repariere die Kommunikationsanlage, um Rettung zu rufen',
          },
          'story-10012001-c4': {
            text: 'Konzentriere dich auf das Lebenserhaltungssystem, um mehr Zeit zu gewinnen',
          },
        },
      },
      'story-10012001-3': {
        title: 'Abstieg der Rettungskapsel',
        narration: 'Du entscheidest, dass das Schiff nicht mehr zu retten ist, versiegelst deinen Helm und kletterst in die Einpersonen-Rettungskapsel. Mit einem Zischen wird sie ausgestoßen. Durch ein kleines Bullauge beobachtest du, wie dein zerstörtes Schiff zurückweicht. Die Kapsel rast auf die Planetenoberfläche zu und rüttelt heftig. Du machst dich bereit und Augenblicke später stürzt du auf einer kargen, felsigen Ebene unter einem fremden Himmel ab. Taumelnd steigst du aus und überblickst endlose rote Wüsten und zerklüftete Berge. Die Systeme der Kapsel sind intakt, aber die Ressourcen sind knapp. Während die Nacht schnell hereinbricht, musst du deinen nächsten Schritt auf dieser feindseligen Welt bestimmen.',
        choices: {
          'story-10012001-c5': {
            text: 'Erklimme einen Kamm und aktiviere das Notsignal der Kapsel in der Hoffnung, dass jemand es hört',
          },
          'story-10012001-c6': {
            text: 'Sammle Vorräte und suche im Tal nach Wasser und Unterschlupf',
          },
        },
      },
      'story-10012001-4': {
        title: 'Signal Empfangen',
        narration: 'Die dünner werdende Luft ignorierend, leitest du Energie zur Kommunikationsanlage um und sendest einen Notruf. Quälende Minuten lang gibt es keine Antwort. Gerade als Dunkelheit dein Sichtfeld einengt, antwortet eine knisternde Stimme – ein Patrouillenschiff hat dein Notsignal aufgefangen! Du brichst erleichtert zusammen, während sie dein Signal anpeilen. Einige Zeit später öffnest du die Augen an Bord eines Rettungsschiffs, eine Sauerstoffmaske auf deinem Gesicht. Durch das Fenster siehst du, wie dein zerschmettertes Schiff zurückgelassen wird. Du bist in Sicherheit, gerettet durch das Signal, das du rechtzeitig senden konntest.',
        choices: {
        },
      },
      'story-10012001-5': {
        title: 'Stilles Treiben',
        narration: 'Du widmest kostbare Energie der Reparatur der Lebenserhaltung – flickst Lecks und tauschst Notfall-Sauerstoffkanister aus. Die Luft stabilisiert sich und verschafft dir Stunden... aber ohne Kommunikation weiß niemand, dass du gestrandet bist. Du treibst allein in der stillen Dunkelheit des Weltraums, während die Zeit sich dehnt. Schließlich geht der Sauerstoff aus und die Kälte kriecht herein. Mit dem Blick auf ferne Sterne machst du Frieden mit deinem Schicksal. Dein Schiff wird dein Grab, das endlos kreist – ein einsamer Reisender, verstummt in der Leere.',
        choices: {
        },
      },
      'story-10012001-6': {
        title: 'Notsignal-Tragödie',
        narration: 'Entschlossen, um Hilfe zu rufen, erkletterst du die höchste nahe gelegene Erhebung und aktivierst das Notsignal der Rettungskapsel. Ein schwaches Signal flackert hinaus. Stunden vergehen ohne Antwort. Beim Abstieg gibt der felsige Boden nach – du rutschst aus und stürzt eine Schlucht hinunter, wobei du dich schwer verletzt. Die Nacht bricht herein und mit ihr eisige Kälte. Im Morgenlicht blinkt das Notsignal noch immer pflichtbewusst neben dir, aber du regst dich nie wieder. Dein letztes Wagnis endet in einer Tragödie, deine Geschichte verloren auf einer einsamen Welt.',
        choices: {
        },
      },
      'story-10012001-7': {
        title: 'Überlebender der Roten Welt',
        narration: 'Akzeptierend, dass Rettung vielleicht nie kommt, bergst du, was du von der Kapsel kannst – einen Wasserfilter, ein Messer, eine Thermodecke – und machst dich ins Unbekannte auf. Nach Tagen der Entbehrung entdeckst du eine geschützte Schlucht mit einem Rinnsal frischen Wassers und essbaren Pilzen. Es ist kein Paradies, aber es ist Leben. Im Laufe der Monate lernst du, die kleinen Felskreaturen zu jagen und die brutalen Bedingungen des karmesinroten Planeten zu ertragen. Jede Nacht starrst du auf die Sterne und fragst dich, ob dort draußen jemand sich fragt, was aus dir geworden ist – dem kosmischen Schiffbrüchigen, der nun diese fremde Welt sein Zuhause nennt.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Le Naufragé Cosmique',
    description: 'Réveillé dans un vaisseau spatial agonisant, tu dois décider de parier sur des réparations d\'urgence ou de risquer une planète inexplorée en dessous. Chaque choix t\'entraîne plus profondément dans un combat pour la survie loin de chez toi.',
    author: 'Commandant Lyra Hayes',
    nodes: {
      'story-10012001-1': {
        title: 'Réveil Catastrophique',
        narration: 'Tu te réveilles en sursaut avec des alarmes hurlantes et des lumières clignotantes. Ton vaisseau spatial a été frappé par des débris, te laissant à la dérive dans le vide. La coque est percée et l\'oxygène est faible. À travers la fenêtre du cockpit, tu vois une planète désolée en dessous et l\'étendue infinie des étoiles. Avec les communications coupées et les systèmes défaillants, tu dois agir rapidement si tu espères survivre.',
        choices: {
          'story-10012001-c1': {
            text: 'Essaie de réparer les systèmes du vaisseau et signaler pour de l\'aide',
          },
          'story-10012001-c2': {
            text: 'Abandonne le vaisseau dans une capsule de sauvetage vers la planète',
          },
        },
      },
      'story-10012001-2': {
        title: 'Réparations Critiques',
        narration: 'Tu restes à bord, le cœur battant alors que tu flottes dans la cabine paralysée. Le compteur d\'oxygène baisse. Des étincelles jaillissent d\'une console endommagée. Tu as un temps et des outils limités. Tu stabilises ta respiration et considères tes options. Le réseau de communication est hors ligne et le système de support de vie défaille. Si tu peux en réparer un, cela pourrait faire la différence entre la vie et la mort.',
        choices: {
          'story-10012001-c3': {
            text: 'Répare le réseau de communications pour appeler les secours',
          },
          'story-10012001-c4': {
            text: 'Concentre-toi sur le système de support de vie pour gagner plus de temps',
          },
        },
      },
      'story-10012001-3': {
        title: 'Descente de la Capsule de Sauvetage',
        narration: 'Décidant que le vaisseau est au-delà du sauvetage, tu scelles ton casque et grimpes dans la capsule de sauvetage individuelle. Avec un sifflement, elle est éjectée. À travers un petit hublot, tu regardes ton vaisseau en ruine s\'éloigner. La capsule fonce vers la surface de la planète, tremblant violemment. Tu te prépares et quelques instants plus tard, tu t\'écrases sur une plaine rocailleuse et aride sous un ciel alien. Chancelant en sortant, tu contemples des déserts rouges sans fin et des montagnes déchiquetées. Les systèmes de la capsule sont intacts mais les ressources sont rares. Alors que la nuit approche rapidement, tu dois déterminer ton prochain mouvement sur ce monde hostile.',
        choices: {
          'story-10012001-c5': {
            text: 'Grimpe une crête et active la balise de la capsule, espérant que quelqu\'un l\'entende',
          },
          'story-10012001-c6': {
            text: 'Rassemble des provisions et cherche de l\'eau et un abri dans la vallée',
          },
        },
      },
      'story-10012001-4': {
        title: 'Signal Reçu',
        narration: 'Ignorant l\'air qui s\'amenuise, tu rediriges l\'énergie vers le réseau de communications et envoies un mayday. Pendant des minutes angoissantes, il n\'y a pas de réponse. Juste alors que l\'obscurité envahit ta vision, une voix crépitante répond : un vaisseau de patrouille a capté ton signal de détresse ! Tu t\'effondres de soulagement alors qu\'ils se dirigent vers ta balise. Quelque temps plus tard, tu ouvres les yeux à bord d\'un vaisseau de secours, un masque à oxygène sur ton visage. À travers la fenêtre, tu vois ton vaisseau fracassé être laissé derrière. Tu es en sécurité, sauvé par le signal que tu as réussi à envoyer à temps.',
        choices: {
        },
      },
      'story-10012001-5': {
        title: 'Dérive Silencieuse',
        narration: 'Tu consacres une énergie précieuse à réparer le support de vie : colmatant les fuites et échangeant des bonbonnes d\'oxygène d\'urgence. L\'air se stabilise, te donnant des heures... mais sans communication, personne ne sait que tu es échoué. Tu dérives seul dans l\'obscurité silencieuse de l\'espace alors que le temps s\'étire. Finalement, l\'oxygène s\'épuise et le froid s\'installe. Contemplant des étoiles lointaines, tu fais la paix avec ton destin. Ton vaisseau devient ta tombe, orbitant sans fin : un voyageur solitaire devenu silencieux dans le vide.',
        choices: {
        },
      },
      'story-10012001-6': {
        title: 'Tragédie de la Balise',
        narration: 'Déterminé à appeler à l\'aide, tu escalades l\'élévation la plus proche et actives la balise de détresse de la capsule de sauvetage. Un signal faible clignote vers l\'extérieur. Les heures passent sans réponse. Alors que tu descends, le sol rocheux cède : tu glisses et dégringoles dans un ravin, te blessant gravement. La nuit tombe, et avec elle, un froid glacial. À la lumière du matin, la balise clignote toujours fidèlement à tes côtés, mais tu ne bouges plus jamais. Ton dernier pari se termine en tragédie, ton histoire perdue sur un monde solitaire.',
        choices: {
        },
      },
      'story-10012001-7': {
        title: 'Survivant du Monde Rouge',
        narration: 'Acceptant que le sauvetage ne vienne peut-être jamais, tu récupères ce que tu peux de la capsule : un filtre à eau, un couteau, une couverture thermique, et tu pars vers l\'inconnu. Après des jours d\'épreuves, tu découvres un canyon abrité avec un filet d\'eau fraîche et des champignons comestibles. Ce n\'est pas le paradis, mais c\'est la vie. Au fil des mois, tu apprends à chasser les petites créatures de roche et à endurer les conditions brutales de la planète cramoisie. Chaque nuit, tu fixes les étoiles, te demandant si quelqu\'un là-haut se demande ce qu\'il est advenu de toi : le naufragé cosmique qui appelle maintenant ce monde alien son foyer.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'Náufrago Cósmico',
    description: 'Acordado em uma espaçonave moribunda, você deve decidir se arrisca em reparos de emergência ou arrisca um planeta desconhecido abaixo. Cada escolha te puxa mais fundo em uma luta pela sobrevivência longe de casa.',
    author: 'Comandante Lyra Hayes',
    nodes: {
      'story-10012001-1': {
        title: 'Despertar Catastrófico',
        narration: 'Você acorda sobressaltado com alarmes estridentes e luzes piscando. Sua espaçonave foi atingida por destroços, deixando você à deriva no vazio. O casco está violado e o oxigênio está baixo. Através da janela da cabine, você vê um planeta desolado abaixo e a extensão infinita de estrelas. Com as comunicações desligadas e os sistemas falhando, você deve agir rapidamente se espera sobreviver.',
        choices: {
          'story-10012001-c1': {
            text: 'Tente reparar os sistemas da nave e sinalizar por ajuda',
          },
          'story-10012001-c2': {
            text: 'Abandone a nave em uma cápsula de escape em direção ao planeta',
          },
        },
      },
      'story-10012001-2': {
        title: 'Reparos Críticos',
        narration: 'Você permanece a bordo, o coração acelerado enquanto flutua pela cabine danificada. O medidor de oxigênio está caindo. Faíscas voam de um console danificado. Você tem tempo e ferramentas limitados. Você estabiliza sua respiração e considera suas opções. A matriz de comunicações está offline e o suporte de vida está falindo. Se você conseguir consertar um, pode fazer a diferença entre vida e morte.',
        choices: {
          'story-10012001-c3': {
            text: 'Repare a matriz de comunicações para pedir resgate',
          },
          'story-10012001-c4': {
            text: 'Concentre-se no sistema de suporte de vida para ganhar mais tempo',
          },
        },
      },
      'story-10012001-3': {
        title: 'Descida da Cápsula de Escape',
        narration: 'Decidindo que a nave está além de ser salva, você sela seu capacete e sobe na cápsula de escape individual. Com um silvo, ela é ejetada. Através de uma pequena vigia, você observa sua nave arruinada recuar. A cápsula despenca em direção à superfície do planeta, chacoalhando violentamente. Você se prepara e momentos depois, cai em uma planície rochosa e árida sob um céu alienígena. Cambaleando para fora, você contempla desertos vermelhos infinitos e montanhas irregulares. Os sistemas da cápsula estão intactos, mas os recursos são escassos. Enquanto a noite se aproxima rapidamente, você deve determinar seu próximo movimento neste mundo hostil.',
        choices: {
          'story-10012001-c5': {
            text: 'Suba uma crista e ative o sinalizador da cápsula, esperando que alguém o ouça',
          },
          'story-10012001-c6': {
            text: 'Reúna suprimentos e procure água e abrigo no vale',
          },
        },
      },
      'story-10012001-4': {
        title: 'Sinal Recebido',
        narration: 'Ignorando o ar que se esvai, você redireciona energia para a matriz de comunicações e envia um mayday. Por minutos agonizantes, não há resposta. Justo quando a escuridão invade sua visão, uma voz crepitante responde - uma nave de patrulha captou seu sinal de socorro! Você desaba com alívio enquanto eles localizam seu sinalizador. Algum tempo depois, você abre os olhos a bordo de uma nave de resgate, com uma máscara de oxigênio no rosto. Através da janela, você vê sua nave despedaçada sendo deixada para trás. Você está salvo, resgatado pelo sinal que conseguiu enviar a tempo.',
        choices: {
        },
      },
      'story-10012001-5': {
        title: 'Deriva Silenciosa',
        narration: 'Você dedica energia preciosa para reparar o suporte de vida - remendando vazamentos e trocando cilindros de oxigênio de emergência. O ar se estabiliza, comprando horas... mas sem comunicação, ninguém sabe que você está perdido. Você deriva sozinho na escuridão silenciosa do espaço enquanto o tempo se arrasta. Eventualmente, o oxigênio acaba e o frio se infiltra. Contemplando estrelas distantes, você faz as pazes com seu destino. Sua nave se torna seu túmulo, orbitando infinitamente - um viajante solitário que silenciou no vazio.',
        choices: {
        },
      },
      'story-10012001-6': {
        title: 'Tragédia do Sinalizador',
        narration: 'Determinado a pedir ajuda, você escala a elevação mais alta próxima e ativa o sinalizador de socorro da cápsula de escape. Um sinal fraco pisca. Horas passam sem resposta. Ao descer, o chão rochoso cede - você escorrega e cai por um desfiladeiro, ferindo-se gravemente. A noite cai, e com ela, um frio abaixo de zero. À luz da manhã, o sinalizador ainda pisca diligentemente ao seu lado, mas você nunca mais se move. Sua última aposta termina em tragédia, sua história perdida em um mundo solitário.',
        choices: {
        },
      },
      'story-10012001-7': {
        title: 'Sobrevivente do Mundo Vermelho',
        narration: 'Aceitando que o resgate talvez nunca venha, você recupera o que pode da cápsula - um filtro de água, uma faca, uma manta térmica - e parte para o desconhecido. Após dias de adversidade, você descobre um canyon protegido com um fio de água fresca e fungos comestíveis. Não é o paraíso, mas é vida. Conforme os meses passam, você aprende a caçar as pequenas criaturas rochosas e suportar as condições brutais do planeta carmesim. Toda noite, você olha para as estrelas, perguntando-se se alguém lá fora se pergunta o que aconteceu com você - o náufrago cósmico que agora chama este mundo alienígena de lar.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '宇宙の漂流者',
    description: '死にゆく宇宙船で目覚めたあなたは、緊急修理に賭けるか、下方の未知の惑星に危険を冒すかを決断しなければならない。すべての選択が、故郷から遠く離れた生存への戦いへとあなたを深く引き込む。',
    author: 'ライラ・ヘイズ司令官',
    nodes: {
      'story-10012001-1': {
        title: '破滅的な目覚め',
        narration: '警報が鳴り響き、ライトが点滅する中、あなたは飛び起きる。宇宙船は破片に衝突し、虚空を漂流している。船体は破れ、酸素は少ない。コックピットの窓から、荒涼とした惑星と果てしない星々の広がりが見える。通信が途絶え、システムが故障する中、生き延びたいなら素早く行動しなければならない。',
        choices: {
          'story-10012001-c1': {
            text: '船のシステムを修理して助けを求める',
          },
          'story-10012001-c2': {
            text: '脱出ポッドで惑星へ向かい船を放棄する',
          },
        },
      },
      'story-10012001-2': {
        title: '重要な修理',
        narration: '船に留まり、損傷したキャビンを漂いながら心臓が激しく鼓動する。酸素計が下がっている。損傷したコンソールから火花が散る。時間と工具は限られている。呼吸を整え、選択肢を考える。通信アレイはオフラインで、生命維持装置は故障している。どちらか一つを修理できれば、生死を分けるかもしれない。',
        choices: {
          'story-10012001-c3': {
            text: '通信アレイを修理して救助を呼ぶ',
          },
          'story-10012001-c4': {
            text: '生命維持システムに集中して時間を稼ぐ',
          },
        },
      },
      'story-10012001-3': {
        title: '脱出ポッドの降下',
        narration: '船は救えないと判断し、ヘルメットを密閉して一人用脱出ポッドに乗り込む。シューという音とともに射出される。小さな舷窓から、破壊された船が遠ざかるのを見守る。ポッドは惑星の表面に向かって突進し、激しく揺れる。身構えて、瞬間後、異星の空の下の荒涼とした岩だらけの平原に墜落する。よろめきながら外に出て、果てしない赤い砂漠とギザギザの山々を見渡す。ポッドのシステムは無傷だが、資源は乏しい。急速に夜が近づく中、この敵対的な世界での次の行動を決めなければならない。',
        choices: {
          'story-10012001-c5': {
            text: '尾根を登りポッドのビーコンを起動し、誰かが聞いてくれることを願う',
          },
          'story-10012001-c6': {
            text: '物資を集めて谷で水と避難所を探す',
          },
        },
      },
      'story-10012001-4': {
        title: '信号受信',
        narration: '薄くなる空気を無視して、通信アレイに電力を回し、遭難信号を送る。苦痛に満ちた数分間、応答はない。視界に暗闇が迫ってきたちょうどその時、ザラザラした声が応答する—パトロール船があなたの遭難信号を受信した！彼らがビーコンに向かう中、安堵して倒れ込む。しばらく後、救助船の中で目を覚まし、顔には酸素マスク。窓から、破壊された船が置き去りにされるのが見える。あなたは安全で、間に合って送った信号によって救われた。',
        choices: {
        },
      },
      'story-10012001-5': {
        title: '静かな漂流',
        narration: '貴重なエネルギーを生命維持の修理に費やす—漏れを塞ぎ、緊急酸素ボンベを交換する。空気は安定し、数時間を稼ぐ...しかし通信がなければ、誰もあなたが遭難していることを知らない。時間が伸びる中、宇宙の静かな闇の中を一人漂う。やがて酸素が尽き、寒さが忍び寄る。遠い星々を見つめながら、運命と和解する。船はあなたの墓となり、永遠に周回する—虚空の中で沈黙した孤独な旅人。',
        choices: {
        },
      },
      'story-10012001-6': {
        title: 'ビーコンの悲劇',
        narration: '助けを求めることを決意し、近くで最も高い場所を登り、脱出ポッドの遭難ビーコンを起動する。弱い信号が点滅する。返答なしに時間が過ぎる。下る途中、岩場の地面が崩れる—滑って谷に転がり落ち、重傷を負う。夜が訪れ、それとともに氷点下の寒さ。朝の光の中、ビーコンはまだ忠実にあなたのそばで点滅しているが、あなたは二度と動くことはない。最後の賭けは悲劇に終わり、あなたの物語は孤独な世界で失われる。',
        choices: {
        },
      },
      'story-10012001-7': {
        title: '赤い世界の生存者',
        narration: '救助は決して来ないかもしれないと受け入れ、ポッドから回収できるもの—浄水フィルター、ナイフ、保温シート—を持って未知へと出発する。数日間の苦難の後、新鮮な水の細流と食用キノコのある保護された峡谷を発見する。楽園ではないが、命だ。数ヶ月が過ぎる中、小さな岩の生き物を狩り、深紅の惑星の過酷な条件に耐えることを学ぶ。毎晩、星々を見つめ、あそこの誰かがあなたに何が起こったのか疑問に思っているか考える—今やこの異星の世界を故郷と呼ぶ宇宙の漂流者を。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '宇宙漂流者',
    description: '在一艘濒临死亡的飞船中醒来，你必须决定是赌一把进行紧急修理，还是冒险前往下方未知的星球。每一个选择都将你更深地拖入远离家园的生存战斗。',
    author: '莱拉·海耶斯指挥官',
    nodes: {
      'story-10012001-1': {
        title: '灾难性苏醒',
        narration: '你惊醒过来，警报声大作，灯光闪烁。你的飞船被碎片击中，在虚空中漂流。船体被破坏，氧气稀薄。透过驾驶舱窗户，你看到下方荒凉的星球和无尽的星空。通讯中断，系统失灵，如果你希望活下来，就必须迅速行动。',
        choices: {
          'story-10012001-c1': {
            text: '尝试修理飞船系统并发出求救信号',
          },
          'story-10012001-c2': {
            text: '乘坐逃生舱朝星球方向弃船',
          },
        },
      },
      'story-10012001-2': {
        title: '紧急维修',
        narration: '你留在船上，心脏狂跳，漂浮在损毁的舱室中。氧气表在下降。火花从损坏的控制台飞溅而出。你时间和工具有限。你稳定呼吸，考虑你的选择。通讯阵列离线，生命维持系统正在失效。如果你能修好其中一个，可能就能决定生死。',
        choices: {
          'story-10012001-c3': {
            text: '修理通讯阵列呼叫救援',
          },
          'story-10012001-c4': {
            text: '专注于生命维持系统以争取更多时间',
          },
        },
      },
      'story-10012001-3': {
        title: '逃生舱降落',
        narration: '决定飞船已无法挽救，你密封头盔，爬进单人逃生舱。随着一声呼啸，它被弹射出去。透过一个小舷窗，你看着损毁的飞船后退。逃生舱猛冲向星球表面，剧烈摇晃。你做好准备，片刻后在异星天空下的荒芜岩石平原上坠毁。你摇摇晃晃地走出来，眺望无尽的红色沙漠和锯齿状的山脉。逃生舱的系统完好，但资源匮乏。当夜幕迅速降临，你必须在这个敌对的世界上决定下一步行动。',
        choices: {
          'story-10012001-c5': {
            text: '爬上山脊激活逃生舱的信标，希望有人听到',
          },
          'story-10012001-c6': {
            text: '收集补给，在山谷中寻找水和庇护所',
          },
        },
      },
      'story-10012001-4': {
        title: '信号接收',
        narration: '无视稀薄的空气，你将能量重新导向通讯阵列并发出求救信号。煎熬的几分钟过去，没有回应。就在黑暗侵蚀你的视野时，一个嘶哑的声音响起——一艘巡逻船收到了你的求救信号！当他们锁定你的信标时，你如释重负地倒下。一段时间后，你在救援船上睁开眼睛，脸上戴着氧气面罩。透过窗户，你看到你破碎的飞船被抛在身后。你安全了，被你及时发出的信号拯救。',
        choices: {
        },
      },
      'story-10012001-5': {
        title: '沉默漂流',
        narration: '你投入宝贵的能量修理生命维持系统——修补漏洞，更换紧急氧气罐。空气稳定下来，为你争取了几个小时……但没有通讯，没人知道你被困。你独自在太空的寂静黑暗中漂流，时间延续。最终，氧气耗尽，寒冷侵袭。凝视着遥远的星辰，你接受了自己的命运。你的飞船成为你的坟墓，无尽地环绕——一个在虚空中沉默的孤独旅人。',
        choices: {
        },
      },
      'story-10012001-6': {
        title: '信标悲剧',
        narration: '决心呼救，你爬上附近最高的地方，激活逃生舱的求救信标。一个微弱的信号闪烁而出。几小时过去没有回应。当你下来时，岩石地面塌陷——你滑倒，滚下峡谷，严重受伤。夜幕降临，随之而来的是零下的寒冷。在晨光中，信标仍在你身边忠实地闪烁，但你再也没有动过。你最后的赌注以悲剧收场，你的故事在孤独的世界上失落。',
        choices: {
        },
      },
      'story-10012001-7': {
        title: '红色世界幸存者',
        narration: '接受救援可能永远不会到来，你从逃生舱中打捞出你能拿的东西——一个净水器、一把刀、一条保温毯——然后出发进入未知。经历数日艰辛后，你发现了一个有庇护的峡谷，有一股细细的淡水和可食用的真菌。这不是天堂，但这是生命。随着月份流逝，你学会了猎捕小型岩石生物，忍受深红色星球的残酷条件。每个夜晚，你凝视星空，想知道那里是否有人想知道你发生了什么——这个现在称这个异星世界为家的宇宙漂流者。',
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
