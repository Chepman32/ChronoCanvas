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

export const story_847362910StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'The Midnight Caller',
    description: 'Someone knows what you did last summer. The phone rings at 3 AM with a voice from your past, and now you have 48 hours to find them before they find you. Every choice could be your last.',
    author: 'Elena Blackwood',
    nodes: {
      'story-847362910-2': {
        title: 'Buried Evidence',
        narration: 'The file box sits in your closet where you left it three years ago, covered in dust and regret. Inside, crime scene photos show the park at dawn, yellow tape cordoning off the gazebo. The victim, Marcus Dalton, stares up from glossy paper with lifeless eyes. Your notes mention a witness who never came forward—someone saw everything but disappeared. Then you notice it: a photo is missing from the sequence. Someone has been in your apartment.',
        choices: {
          'story-847362910-c4': {
            text: 'Check your apartment for signs of a break-in',
            description: 'They were here. They might still be close.',
          },
          'story-847362910-c5': {
            text: 'Focus on finding the missing witness',
            description: 'The caller might be the witness from three years ago',
          },
        },
      },
      'story-847362910-7': {
        title: 'The Empty Cannery',
        narration: 'The cannery looms against the pre-dawn sky like a rusted cathedral. You slip through a broken fence and enter through a side door hanging off its hinges. Inside, machinery sits frozen in time, covered in layers of dust and pigeon droppings. Your flashlight cuts through the darkness, revealing footprints in the dust—fresh ones, leading deeper into the building. Then you hear it: music playing somewhere above you, a scratchy recording of an old jazz standard. The same song that was playing when Marcus Dalton died.',
        choices: {
          'story-847362910-c15': {
            text: 'Follow the music upstairs',
            description: 'Someone wants you to find them',
          },
          'story-847362910-c16': {
            text: 'Search the ground floor first',
            description: 'Clear each room methodically and safely',
          },
        },
      },
      'story-847362910-17': {
        title: 'Ground Floor Secrets',
        narration: 'You methodically search each room on the ground floor—old offices, a break room with moldy coffee cups, storage closets full of rusted equipment. In the last office, you find something that makes your heart race: recent activity. Someone has been living here. Sleeping bag, food wrappers, and a wall covered in newspaper clippings about police corruption. Photos of you are mixed in with images of your former partner, Captain Morrison, the one who closed the Dalton case. Then you see it: a whiteboard with a timeline connecting Morrison to the Dalton family business, with arrows pointing to offshore accounts. The music stops upstairs. Footsteps descend toward you.',
        choices: {
          'story-847362910-c35': {
            text: 'Hide and ambush whoever is coming',
            description: 'Attack from the shadows',
          },
          'story-847362910-c36': {
            text: 'Announce yourself and ask to talk',
            description: 'Maybe violence isn',
          },
        },
      },
      'story-847362910-18': {
        title: 'Bureaucratic Justice',
        narration: 'You wait for backup, and when they arrive, the cannery is empty. Sarah Chen is found safe at home—the text was a bluff. Rebecca Dalton is arrested trying to board a plane to Mexico. In custody, she confesses everything: Marcus was laundering drug money, Captain Morrison was on the payroll, and when Rebecca confronted her brother, Morrison killed him to silence them both. But without the evidence Rebecca gathered—now destroyed in her panic—nothing sticks. Morrison retires with full pension. Rebecca goes to prison for stalking and breaking and entering. The case officially closes, but you know the truth. Sometimes the system protects the guilty, and sometimes justice is nothing more than paperwork and compromises. You hand in your badge three months later.',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Полуночный звонок',
    description: 'Кто-то знает, что вы сделали прошлым летом. В 3 часа ночи звонит телефон с голосом из вашего прошлого, и теперь у вас есть 48 часов, чтобы найти их, прежде чем они найдут вас. Каждый выбор может стать последним.',
    author: 'Елена Блэквуд',
    nodes: {
      'story-847362910-2': {
        title: 'Погребённые улики',
        narration: 'Коробка с файлами стоит в вашем шкафу, где вы оставили её три года назад, покрытая пылью и сожалением. Внутри фотографии с места преступления показывают парк на рассвете, жёлтая лента оцепляет беседку. Жертва, Маркус Долтон, смотрит вверх с глянцевой бумаги безжизненными глазами. Ваши записи упоминают свидетеля, который так и не объявился — кто-то видел всё, но исчез. Затем вы замечаете: одной фотографии не хватает в последовательности. Кто-то был в вашей квартире.',
        choices: {
          'story-847362910-c4': {
            text: 'Проверить квартиру на признаки взлома',
            description: 'Они были здесь. Они могут быть всё ещё рядом.',
          },
          'story-847362910-c5': {
            text: 'Сосредоточиться на поиске пропавшего свидетеля',
            description: 'Звонивший может быть свидетелем трёхлетней давности',
          },
        },
      },
      'story-847362910-7': {
        title: 'Пустой консервный завод',
        narration: 'Консервный завод возвышается на фоне предрассветного неба, как ржавый собор. Вы проскальзываете через сломанный забор и входите через боковую дверь, висящую на петлях. Внутри оборудование застыло во времени, покрытое слоями пыли и голубиного помёта. Ваш фонарик прорезает тьму, открывая следы на пыли — свежие, ведущие вглубь здания. Затем вы слышите: музыка играет где-то наверху, царапающая запись старого джазового стандарта. Та же песня, которая играла, когда умер Маркус Долтон.',
        choices: {
          'story-847362910-c15': {
            text: 'Следовать за музыкой наверх',
            description: 'Кто-то хочет, чтобы вы их нашли',
          },
          'story-847362910-c16': {
            text: 'Сначала обыскать первый этаж',
            description: 'Проверить каждую комнату методично и безопасно',
          },
        },
      },
      'story-847362910-17': {
        title: 'Секреты первого этажа',
        narration: 'Вы методично обыскиваете каждую комнату на первом этаже — старые офисы, комнату отдыха с заплесневелыми кофейными чашками, кладовые, полные ржавого оборудования. В последнем офисе вы находите то, что заставляет ваше сердце биться чаще: недавнюю активность. Кто-то здесь жил. Спальный мешок, обёртки от еды и стена, покрытая газетными вырезками о полицейской коррупции. Ваши фотографии смешаны с изображениями вашего бывшего партнёра, капитана Моррисона, того, кто закрыл дело Долтона. Затем вы видите это: белая доска с хронологией, связывающей Моррисона с бизнесом семьи Долтонов, со стрелками, указывающими на оффшорные счета. Музыка наверху останавливается. Шаги спускаются к вам.',
        choices: {
          'story-847362910-c35': {
            text: 'Спрятаться и устроить засаду тому, кто идёт',
            description: 'Атаковать из тени',
          },
          'story-847362910-c36': {
            text: 'Объявить о себе и попросить поговорить',
            description: 'Возможно, насилие не',
          },
        },
      },
      'story-847362910-18': {
        title: 'Бюрократическая справедливость',
        narration: 'Вы ждёте подкрепления, и когда они прибывают, консервный завод пуст. Сара Чен найдена в безопасности дома — сообщение было блефом. Ребекка Долтон арестована при попытке сесть на самолёт в Мексику. Под стражей она признаётся во всём: Маркус отмывал наркоденьги, капитан Моррисон был на зарплате, и когда Ребекка столкнулась с братом, Моррисон убил его, чтобы заставить их обоих молчать. Но без улик, собранных Ребеккой — теперь уничтоженных в её панике — ничего не доказать. Моррисон уходит на пенсию с полным пособием. Ребекка попадает в тюрьму за преследование и незаконное проникновение. Дело официально закрыто, но вы знаете правду. Иногда система защищает виновных, и иногда справедливость — это не более чем бумажная волокита и компромиссы. Вы сдаёте значок три месяца спустя.',
        choices: {
        },
      },
    },
  },

  // Español
  es: {
    title: 'La Llamada de Medianoche',
    description: 'Alguien sabe lo que hiciste el verano pasado. El teléfono suena a las 3 AM con una voz de tu pasado, y ahora tienes 48 horas para encontrarlos antes de que ellos te encuentren a ti. Cada decisión podría ser la última.',
    author: 'Elena Blackwood',
    nodes: {
      'story-847362910-2': {
        title: 'Evidencia Enterrada',
        narration: 'La caja de archivos está en tu armario donde la dejaste hace tres años, cubierta de polvo y arrepentimiento. Dentro, las fotos de la escena del crimen muestran el parque al amanecer, cinta amarilla acordonando el mirador. La víctima, Marcus Dalton, mira hacia arriba desde el papel brillante con ojos sin vida. Tus notas mencionan a un testigo que nunca se presentó: alguien lo vio todo pero desapareció. Entonces lo notas: falta una foto de la secuencia. Alguien ha estado en tu apartamento.',
        choices: {
          'story-847362910-c4': {
            text: 'Revisa tu apartamento en busca de señales de allanamiento',
            description: 'Estuvieron aquí. Podrían estar todavía cerca.',
          },
          'story-847362910-c5': {
            text: 'Concéntrate en encontrar al testigo desaparecido',
            description: 'El que llama podría ser el testigo de hace tres años',
          },
        },
      },
      'story-847362910-7': {
        title: 'La Conservera Vacía',
        narration: 'La conservera se alza contra el cielo previo al amanecer como una catedral oxidada. Te deslizas a través de una valla rota y entras por una puerta lateral que cuelga de sus bisagras. Dentro, la maquinaria permanece congelada en el tiempo, cubierta de capas de polvo y excrementos de palomas. Tu linterna corta la oscuridad, revelando huellas en el polvo, frescas, que conducen más adentro del edificio. Entonces lo oyes: música sonando en algún lugar arriba, una grabación rayada de un viejo estándar de jazz. La misma canción que sonaba cuando Marcus Dalton murió.',
        choices: {
          'story-847362910-c15': {
            text: 'Sigue la música hacia arriba',
            description: 'Alguien quiere que los encuentres',
          },
          'story-847362910-c16': {
            text: 'Busca primero en la planta baja',
            description: 'Despeja cada habitación metódica y seguramente',
          },
        },
      },
      'story-847362910-17': {
        title: 'Secretos en la Planta Baja',
        narration: 'Buscas metódicamente en cada habitación de la planta baja: oficinas viejas, una sala de descanso con tazas de café mohosas, armarios de almacenamiento llenos de equipo oxidado. En la última oficina, encuentras algo que hace que tu corazón se acelere: actividad reciente. Alguien ha estado viviendo aquí. Saco de dormir, envoltorios de comida y una pared cubierta de recortes de periódico sobre corrupción policial. Fotos tuyas están mezcladas con imágenes de tu antiguo compañero, el Capitán Morrison, quien cerró el caso Dalton. Entonces lo ves: una pizarra blanca con una línea de tiempo conectando a Morrison con el negocio de la familia Dalton, con flechas apuntando a cuentas offshore. La música se detiene arriba. Pasos descienden hacia ti.',
        choices: {
          'story-847362910-c35': {
            text: 'Escóndete y embosca a quien venga',
            description: 'Ataca desde las sombras',
          },
          'story-847362910-c36': {
            text: 'Anúnciate y pide hablar',
            description: 'Quizás la violencia no',
          },
        },
      },
      'story-847362910-18': {
        title: 'Justicia Burocrática',
        narration: 'Esperas refuerzos, y cuando llegan, la conservera está vacía. Sarah Chen es encontrada sana y salva en casa: el mensaje era un engaño. Rebecca Dalton es arrestada intentando abordar un avión a México. Bajo custodia, confiesa todo: Marcus lavaba dinero de drogas, el Capitán Morrison estaba en la nómina, y cuando Rebecca confrontó a su hermano, Morrison lo mató para silenciarlos a ambos. Pero sin las pruebas que Rebecca reunió, ahora destruidas en su pánico, nada se sostiene. Morrison se retira con pensión completa. Rebecca va a prisión por acoso y allanamiento. El caso se cierra oficialmente, pero tú conoces la verdad. A veces el sistema protege a los culpables, y a veces la justicia no es más que papeleo y compromisos. Entregas tu placa tres meses después.',
        choices: {
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Der Mitternachtsanrufer',
    description: 'Jemand weiß, was du letzten Sommer getan hast. Das Telefon klingelt um 3 Uhr morgens mit einer Stimme aus deiner Vergangenheit, und jetzt hast du 48 Stunden Zeit, sie zu finden, bevor sie dich finden. Jede Entscheidung könnte deine letzte sein.',
    author: 'Elena Blackwood',
    nodes: {
      'story-847362910-2': {
        title: 'Vergrabene Beweise',
        narration: 'Die Aktenkiste steht in deinem Schrank, wo du sie vor drei Jahren hinterlassen hast, bedeckt mit Staub und Reue. Darin zeigen Tatortfotos den Park im Morgengrauen, gelbes Absperrband umgibt den Pavillon. Das Opfer, Marcus Dalton, starrt von glänzendem Papier mit leblosen Augen herauf. Deine Notizen erwähnen einen Zeugen, der sich nie gemeldet hat – jemand hat alles gesehen, ist aber verschwunden. Dann bemerkst du es: Ein Foto fehlt in der Sequenz. Jemand war in deiner Wohnung.',
        choices: {
          'story-847362910-c4': {
            text: 'Überprüfe deine Wohnung auf Einbruchsspuren',
            description: 'Sie waren hier. Sie könnten noch in der Nähe sein.',
          },
          'story-847362910-c5': {
            text: 'Konzentriere dich darauf, den vermissten Zeugen zu finden',
            description: 'Der Anrufer könnte der Zeuge von vor drei Jahren sein',
          },
        },
      },
      'story-847362910-7': {
        title: 'Die Leere Konservenfabrik',
        narration: 'Die Konservenfabrik ragt wie eine verrostete Kathedrale gegen den Himmel vor der Morgendämmerung. Du schlüpfst durch einen kaputten Zaun und betrittst das Gebäude durch eine Seitentür, die aus den Angeln hängt. Drinnen steht die Maschinerie wie eingefroren in der Zeit, bedeckt mit Schichten aus Staub und Taubenkot. Deine Taschenlampe schneidet durch die Dunkelheit und enthüllt Fußspuren im Staub – frische, die tiefer ins Gebäude führen. Dann hörst du es: Musik spielt irgendwo über dir, eine kratzige Aufnahme eines alten Jazz-Standards. Dasselbe Lied, das spielte, als Marcus Dalton starb.',
        choices: {
          'story-847362910-c15': {
            text: 'Folge der Musik nach oben',
            description: 'Jemand will, dass du ihn findest',
          },
          'story-847362910-c16': {
            text: 'Durchsuche zuerst das Erdgeschoss',
            description: 'Räume jeden Raum methodisch und sicher ab',
          },
        },
      },
      'story-847362910-17': {
        title: 'Geheimnisse im Erdgeschoss',
        narration: 'Du durchsuchst methodisch jeden Raum im Erdgeschoss – alte Büros, einen Pausenraum mit verschimmelten Kaffeetassen, Abstellkammern voller verrosteter Ausrüstung. Im letzten Büro findest du etwas, das dein Herz rasen lässt: kürzliche Aktivität. Jemand hat hier gelebt. Schlafsack, Essensverpackungen und eine Wand bedeckt mit Zeitungsausschnitten über Polizeikorruption. Fotos von dir sind vermischt mit Bildern deines ehemaligen Partners, Captain Morrison, demjenigen, der den Dalton-Fall geschlossen hat. Dann siehst du es: ein Whiteboard mit einer Zeitleiste, die Morrison mit dem Geschäft der Dalton-Familie verbindet, mit Pfeilen, die auf Offshore-Konten zeigen. Die Musik hört oben auf. Schritte kommen auf dich zu.',
        choices: {
          'story-847362910-c35': {
            text: 'Verstecke dich und überfalle denjenigen, der kommt',
            description: 'Greife aus dem Schatten an',
          },
          'story-847362910-c36': {
            text: 'Kündige dich an und bitte um ein Gespräch',
            description: 'Vielleicht ist Gewalt nicht',
          },
        },
      },
      'story-847362910-18': {
        title: 'Bürokratische Gerechtigkeit',
        narration: 'Du wartest auf Verstärkung, und als sie eintrifft, ist die Konservenfabrik leer. Sarah Chen wird sicher zu Hause aufgefunden – die Nachricht war ein Bluff. Rebecca Dalton wird beim Versuch, in ein Flugzeug nach Mexiko zu steigen, verhaftet. In Gewahrsam gesteht sie alles: Marcus hat Drogengeld gewaschen, Captain Morrison stand auf der Gehaltsliste, und als Rebecca ihren Bruder konfrontierte, tötete Morrison ihn, um sie beide zum Schweigen zu bringen. Aber ohne die Beweise, die Rebecca gesammelt hatte – jetzt in ihrer Panik zerstört – bleibt nichts hängen. Morrison geht mit voller Pension in Rente. Rebecca kommt wegen Stalkings und Einbruchs ins Gefängnis. Der Fall wird offiziell geschlossen, aber du kennst die Wahrheit. Manchmal schützt das System die Schuldigen, und manchmal ist Gerechtigkeit nichts weiter als Papierkram und Kompromisse. Du gibst drei Monate später deine Marke ab.',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'L\'Appel de Minuit',
    description: 'Quelqu\'un sait ce que tu as fait l\'été dernier. Le téléphone sonne à 3 heures du matin avec une voix de ton passé, et maintenant tu as 48 heures pour les trouver avant qu\'ils ne te trouvent. Chaque choix pourrait être le dernier.',
    author: 'Elena Blackwood',
    nodes: {
      'story-847362910-2': {
        title: 'Preuves Enterrées',
        narration: 'La boîte de dossiers est dans ton placard où tu l\'as laissée il y a trois ans, couverte de poussière et de regrets. À l\'intérieur, les photos de scène de crime montrent le parc à l\'aube, du ruban jaune délimitant le kiosque. La victime, Marcus Dalton, fixe le vide depuis le papier glacé avec des yeux sans vie. Tes notes mentionnent un témoin qui ne s\'est jamais manifesté : quelqu\'un a tout vu mais a disparu. Puis tu le remarques : une photo manque dans la séquence. Quelqu\'un est entré dans ton appartement.',
        choices: {
          'story-847362910-c4': {
            text: 'Vérifie ton appartement pour des signes d\'effraction',
            description: 'Ils étaient ici. Ils pourraient être encore proches.',
          },
          'story-847362910-c5': {
            text: 'Concentre-toi sur la recherche du témoin disparu',
            description: 'L\'appelant pourrait être le témoin d\'il y a trois ans',
          },
        },
      },
      'story-847362910-7': {
        title: 'La Conserverie Vide',
        narration: 'La conserverie se dresse contre le ciel d\'avant l\'aube comme une cathédrale rouillée. Tu te glisses à travers une clôture brisée et entres par une porte latérale qui pend de ses gonds. À l\'intérieur, les machines sont figées dans le temps, couvertes de couches de poussière et de fientes de pigeons. Ta lampe torche transperce l\'obscurité, révélant des empreintes dans la poussière, fraîches, menant plus profondément dans le bâtiment. Puis tu l\'entends : de la musique jouant quelque part au-dessus de toi, un enregistrement grinçant d\'un vieux standard de jazz. La même chanson qui jouait quand Marcus Dalton est mort.',
        choices: {
          'story-847362910-c15': {
            text: 'Suis la musique à l\'étage',
            description: 'Quelqu\'un veut que tu le trouves',
          },
          'story-847362910-c16': {
            text: 'Fouille d\'abord le rez-de-chaussée',
            description: 'Inspecte chaque pièce méthodiquement et en toute sécurité',
          },
        },
      },
      'story-847362910-17': {
        title: 'Secrets du Rez-de-Chaussée',
        narration: 'Tu fouilles méthodiquement chaque pièce du rez-de-chaussée : vieux bureaux, une salle de pause avec des tasses de café moisies, des placards de rangement remplis d\'équipement rouillé. Dans le dernier bureau, tu trouves quelque chose qui fait battre ton cœur : une activité récente. Quelqu\'un a vécu ici. Sac de couchage, emballages de nourriture et un mur couvert de coupures de presse sur la corruption policière. Des photos de toi sont mélangées avec des images de ton ancien partenaire, le Capitaine Morrison, celui qui a clos l\'affaire Dalton. Puis tu le vois : un tableau blanc avec une chronologie reliant Morrison aux affaires de la famille Dalton, avec des flèches pointant vers des comptes offshore. La musique s\'arrête à l\'étage. Des pas descendent vers toi.',
        choices: {
          'story-847362910-c35': {
            text: 'Cache-toi et attaque celui qui vient',
            description: 'Attaque depuis l\'ombre',
          },
          'story-847362910-c36': {
            text: 'Annonce-toi et demande à parler',
            description: 'Peut-être que la violence n\'est',
          },
        },
      },
      'story-847362910-18': {
        title: 'Justice Bureaucratique',
        narration: 'Tu attends les renforts, et quand ils arrivent, la conserverie est vide. Sarah Chen est retrouvée saine et sauve chez elle : le message était un bluff. Rebecca Dalton est arrêtée en tentant de monter dans un avion pour le Mexique. En garde à vue, elle avoue tout : Marcus blanchissait de l\'argent de la drogue, le Capitaine Morrison était sur la liste de paie, et quand Rebecca a confronté son frère, Morrison l\'a tué pour les faire taire tous les deux. Mais sans les preuves que Rebecca avait rassemblées, maintenant détruites dans sa panique, rien ne tient. Morrison prend sa retraite avec une pension complète. Rebecca va en prison pour harcèlement et effraction. L\'affaire est officiellement close, mais tu connais la vérité. Parfois le système protège les coupables, et parfois la justice n\'est rien de plus que de la paperasse et des compromis. Tu rends ton badge trois mois plus tard.',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'A Chamada da Meia-Noite',
    description: 'Alguém sabe o que você fez no verão passado. O telefone toca às 3 da manhã com uma voz do seu passado, e agora você tem 48 horas para encontrá-los antes que eles encontrem você. Cada escolha pode ser a última.',
    author: 'Elena Blackwood',
    nodes: {
      'story-847362910-2': {
        title: 'Evidências Enterradas',
        narration: 'A caixa de arquivos está no seu armário onde você a deixou há três anos, coberta de poeira e arrependimento. Dentro, fotos da cena do crime mostram o parque ao amanhecer, fita amarela isolando o coreto. A vítima, Marcus Dalton, olha para cima do papel brilhante com olhos sem vida. Suas anotações mencionam uma testemunha que nunca apareceu - alguém viu tudo mas desapareceu. Então você percebe: uma foto está faltando na sequência. Alguém esteve no seu apartamento.',
        choices: {
          'story-847362910-c4': {
            text: 'Verificar seu apartamento em busca de sinais de arrombamento',
            description: 'Eles estiveram aqui. Podem ainda estar por perto.',
          },
          'story-847362910-c5': {
            text: 'Focar em encontrar a testemunha desaparecida',
            description: 'O autor da chamada pode ser a testemunha de três anos atrás',
          },
        },
      },
      'story-847362910-7': {
        title: 'A Conserveira Vazia',
        narration: 'A conserveira se ergue contra o céu pré-amanhecer como uma catedral enferrujada. Você desliza por uma cerca quebrada e entra por uma porta lateral pendurada nas dobradiças. Dentro, a maquinaria permanece congelada no tempo, coberta em camadas de poeira e fezes de pombo. Sua lanterna corta a escuridão, revelando pegadas na poeira - frescas, levando para mais fundo no edifício. Então você ouve: música tocando em algum lugar acima de você, uma gravação arranhada de um velho standard de jazz. A mesma música que estava tocando quando Marcus Dalton morreu.',
        choices: {
          'story-847362910-c15': {
            text: 'Seguir a música para o andar de cima',
            description: 'Alguém quer que você os encontre',
          },
          'story-847362910-c16': {
            text: 'Procurar primeiro no térreo',
            description: 'Verificar cada sala metodicamente e com segurança',
          },
        },
      },
      'story-847362910-17': {
        title: 'Segredos do Térreo',
        narration: 'Você procura metodicamente em cada sala no térreo - escritórios velhos, uma sala de descanso com xícaras de café mofadas, armários de armazenamento cheios de equipamento enferrujado. No último escritório, você encontra algo que faz seu coração disparar: atividade recente. Alguém esteve morando aqui. Saco de dormir, embalagens de comida e uma parede coberta de recortes de jornal sobre corrupção policial. Fotos suas estão misturadas com imagens do seu ex-parceiro, Capitão Morrison, aquele que fechou o caso Dalton. Então você vê: um quadro branco com uma linha do tempo conectando Morrison aos negócios da família Dalton, com setas apontando para contas offshore. A música para lá em cima. Passos descem em sua direção.',
        choices: {
          'story-847362910-c35': {
            text: 'Esconder e emboscar quem estiver vindo',
            description: 'Atacar das sombras',
          },
          'story-847362910-c36': {
            text: 'Anunciar-se e pedir para conversar',
            description: 'Talvez a violência não',
          },
        },
      },
      'story-847362910-18': {
        title: 'Justiça Burocrática',
        narration: 'Você espera por reforços, e quando eles chegam, a conserveira está vazia. Sarah Chen é encontrada em segurança em casa - a mensagem era um blefe. Rebecca Dalton é presa tentando embarcar em um avião para o México. Sob custódia, ela confessa tudo: Marcus estava lavando dinheiro de drogas, Capitão Morrison estava na folha de pagamento, e quando Rebecca confrontou seu irmão, Morrison o matou para silenciar ambos. Mas sem as evidências que Rebecca reuniu - agora destruídas em seu pânico - nada se sustenta. Morrison se aposenta com pensão completa. Rebecca vai para a prisão por perseguição e invasão. O caso se fecha oficialmente, mas você conhece a verdade. Às vezes o sistema protege os culpados, e às vezes justiça não é mais que papelada e compromissos. Você entrega seu distintivo três meses depois.',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '真夜中の電話',
    description: '誰かがあなたが去年の夏にしたことを知っている。午前3時に電話が鳴り、過去からの声が聞こえる。そして今、相手があなたを見つける前に、48時間以内に相手を見つけなければならない。すべての選択が最後になるかもしれない。',
    author: 'エレナ・ブラックウッド',
    nodes: {
      'story-847362910-2': {
        title: '埋もれた証拠',
        narration: 'ファイルボックスは3年前にあなたが置いたままのクローゼットにあり、埃と後悔に覆われている。中には、夜明けの公園を写した犯罪現場の写真があり、黄色いテープが東屋を囲んでいる。被害者のマーカス・ダルトンが光沢のある紙から生気のない目で見上げている。あなたのメモには、名乗り出なかった目撃者のことが書かれている。すべてを見ていたが消えてしまった人物だ。そして気づく。写真が1枚欠けている。誰かがあなたのアパートに入った。',
        choices: {
          'story-847362910-c4': {
            text: 'アパートに侵入の痕跡がないか確認する',
            description: '彼らはここにいた。まだ近くにいるかもしれない。',
          },
          'story-847362910-c5': {
            text: '行方不明の目撃者を探すことに集中する',
            description: '電話の主は3年前の目撃者かもしれない',
          },
        },
      },
      'story-847362910-7': {
        title: '空っぽの缶詰工場',
        narration: '缶詰工場が夜明け前の空を背に、錆びた大聖堂のようにそびえ立っている。壊れたフェンスをくぐり抜け、蝶番から外れた脇のドアから中に入る。中では、機械が時間の中で凍りついたように止まっており、何層もの埃と鳩の糞で覆われている。懐中電灯が闇を切り裂き、埃の中の足跡を明らかにする。新しい足跡で、建物の奥へと続いている。そして聞こえる。上の方のどこかで音楽が流れている。古いジャズスタンダードの擦り切れた録音だ。マーカス・ダルトンが死んだときに流れていたのと同じ曲だ。',
        choices: {
          'story-847362910-c15': {
            text: '音楽を追って上の階へ行く',
            description: '誰かがあなたに見つけてほしいと思っている',
          },
          'story-847362910-c16': {
            text: 'まず1階を捜索する',
            description: '各部屋を慎重かつ安全に確認する',
          },
        },
      },
      'story-847362910-17': {
        title: '1階の秘密',
        narration: '1階の各部屋を体系的に捜索する。古いオフィス、カビの生えたコーヒーカップのある休憩室、錆びた設備でいっぱいの物置。最後のオフィスで、心臓が高鳴るものを見つける。最近の活動の痕跡だ。誰かがここで暮らしていた。寝袋、食品の包装紙、そして警察の汚職について書かれた新聞の切り抜きで覆われた壁。あなたの写真が、ダルトン事件を終結させたあなたの元相棒、モリソン警部の画像と混ざっている。そして目に入る。モリソンをダルトン家のビジネスと結びつけるタイムラインが描かれたホワイトボードで、矢印がオフショア口座を指している。上の階で音楽が止まる。足音があなたに向かって降りてくる。',
        choices: {
          'story-847362910-c35': {
            text: '隠れて、来る者を待ち伏せする',
            description: '影から襲撃する',
          },
          'story-847362910-c36': {
            text: '自分の存在を知らせて話を求める',
            description: 'もしかしたら暴力は',
          },
        },
      },
      'story-847362910-18': {
        title: '官僚的正義',
        narration: 'あなたは応援を待ち、彼らが到着したとき、缶詰工場は空っぽだった。サラ・チェンは自宅で無事に発見された。メッセージはブラフだった。レベッカ・ダルトンはメキシコ行きの飛行機に搭乗しようとして逮捕された。拘留中、彼女はすべてを告白した。マーカスは麻薬の金をマネーロンダリングしていた。モリソン警部は給料をもらっていた。そしてレベッカが兄と対峙したとき、モリソンは二人を黙らせるために彼を殺した。しかし、レベッカが集めた証拠がなければ、パニックで破壊されてしまった今、何も残らない。モリソンは満額の年金で退職する。レベッカはストーキングと侵入罪で刑務所に入る。事件は正式に終結するが、あなたは真実を知っている。時にシステムは罪人を守り、時に正義は書類仕事と妥協に過ぎない。あなたは3ヶ月後にバッジを返上する。',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '午夜来电',
    description: '有人知道你去年夏天做了什么。凌晨3点，电话响起，传来你过去的声音，现在你有48小时的时间在他们找到你之前找到他们。每一个选择都可能是最后一个。',
    author: '埃琳娜·布莱克伍德',
    nodes: {
      'story-847362910-2': {
        title: '埋藏的证据',
        narration: '文件箱放在你三年前留下的壁橱里，上面覆盖着灰尘和悔恨。里面的犯罪现场照片显示黎明时分的公园，黄色警戒带围住了凉亭。受害者马库斯·道尔顿从光面纸上抬头望着，眼神毫无生气。你的笔记提到了一个从未现身的目击者——有人看到了一切但消失了。然后你注意到：照片序列中少了一张。有人进过你的公寓。',
        choices: {
          'story-847362910-c4': {
            text: '检查公寓是否有闯入痕迹',
            description: '他们来过这里。他们可能还在附近。',
          },
          'story-847362910-c5': {
            text: '专注于寻找失踪的目击者',
            description: '打电话的人可能就是三年前的目击者',
          },
        },
      },
      'story-847362910-7': {
        title: '空荡荡的罐头厂',
        narration: '罐头厂在黎明前的天空下耸立，像一座生锈的大教堂。你从破损的栅栏溜进去，从一扇摇摇欲坠的侧门进入。里面的机器仿佛在时间中冻结，覆盖着层层灰尘和鸽子粪便。你的手电筒划破黑暗，露出灰尘中的脚印——新鲜的，通向建筑深处。然后你听到了：音乐在你上方某处播放，一段划痕累累的老爵士标准曲录音。正是马库斯·道尔顿死时播放的那首歌。',
        choices: {
          'story-847362910-c15': {
            text: '跟随音乐上楼',
            description: '有人想让你找到他们',
          },
          'story-847362910-c16': {
            text: '先搜查一楼',
            description: '有条不紊且安全地检查每个房间',
          },
        },
      },
      'story-847362910-17': {
        title: '一楼的秘密',
        narration: '你有条不紊地搜查一楼的每个房间——旧办公室、放着发霉咖啡杯的休息室、装满生锈设备的储藏室。在最后一间办公室里，你发现了让你心跳加速的东西：最近的活动痕迹。有人一直住在这里。睡袋、食品包装纸，还有一面贴满关于警察腐败报道的墙。你的照片和你前搭档莫里森警监的照片混在一起，就是那个结案道尔顿案的人。然后你看到了：一块白板，上面有一条时间线，将莫里森与道尔顿家族生意联系起来，箭头指向离岸账户。楼上的音乐停了。脚步声朝你走来。',
        choices: {
          'story-847362910-c35': {
            text: '躲起来伏击来者',
            description: '从阴影中发起攻击',
          },
          'story-847362910-c36': {
            text: '表明身份并请求谈话',
            description: '也许暴力不是',
          },
        },
      },
      'story-847362910-18': {
        title: '官僚正义',
        narration: '你等待支援，当他们到达时，罐头厂已经空了。莎拉·陈在家中被发现安然无恙——那条短信是虚张声势。丽贝卡·道尔顿在试图登上飞往墨西哥的飞机时被捕。在拘留中，她供认了一切：马库斯在洗黑钱，莫里森警监在拿薪水，当丽贝卡质问她哥哥时，莫里森杀了他以让他们两人都闭嘴。但没有丽贝卡收集的证据——现在在她的恐慌中被毁了——什么都无法证明。莫里森带着全额退休金退休。丽贝卡因跟踪和非法闯入入狱。案件正式结案，但你知道真相。有时系统保护有罪的人，有时正义只不过是文书工作和妥协。三个月后你交出了警徽。',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '한밤중의 전화',
    description: '누군가가 당신이 지난 여름에 한 일을 알고 있습니다. 새벽 3시에 과거로부터의 목소리와 함께 전화가 울립니다. 이제 그들이 당신을 찾기 전에 48시간 안에 그들을 찾아야 합니다. 모든 선택이 마지막이 될 수 있습니다.',
    author: '엘레나 블랙우드',
    nodes: {
      'story-847362910-2': {
        title: '묻힌 증거',
        narration: '파일 상자는 3년 전 당신이 놓아둔 옷장 안에 있으며, 먼지와 후회로 덮여 있습니다. 안에는 새벽의 공원을 보여주는 범죄 현장 사진들이 있고, 노란 테이프가 정자를 둘러싸고 있습니다. 피해자 마커스 달튼이 광택 나는 종이에서 생기 없는 눈으로 올려다보고 있습니다. 당신의 메모에는 나타나지 않은 목격자에 대한 언급이 있습니다. 모든 것을 봤지만 사라진 누군가입니다. 그때 당신은 알아챕니다. 사진 한 장이 순서에서 빠져 있습니다. 누군가가 당신의 아파트에 들어왔습니다.',
        choices: {
          'story-847362910-c4': {
            text: '아파트에 침입 흔적이 있는지 확인한다',
            description: '그들이 여기 있었다. 아직 가까이 있을 수도 있다.',
          },
          'story-847362910-c5': {
            text: '실종된 목격자를 찾는 데 집중한다',
            description: '전화를 건 사람이 3년 전 목격자일 수도 있다',
          },
        },
      },
      'story-847362910-7': {
        title: '텅 빈 통조림 공장',
        narration: '통조림 공장이 새벽 전 하늘을 배경으로 녹슨 대성당처럼 우뚝 솟아 있습니다. 당신은 부서진 울타리를 통과해 미끄러지듯 들어가 경첩에서 벗어난 측면 문으로 들어갑니다. 안에서는 기계들이 시간 속에 얼어붙은 것처럼 서 있고, 먼지와 비둘기 배설물 층으로 덮여 있습니다. 당신의 손전등이 어둠을 가르며 먼지 속의 발자국을 드러냅니다. 신선한 발자국으로, 건물 깊숙이 이어집니다. 그때 당신은 듣습니다. 위 어딘가에서 음악이 흘러나옵니다. 오래된 재즈 스탠더드의 긁힌 녹음입니다. 마커스 달튼이 죽었을 때 연주되던 바로 그 노래입니다.',
        choices: {
          'story-847362910-c15': {
            text: '음악을 따라 위층으로 올라간다',
            description: '누군가가 당신이 그들을 찾기를 원한다',
          },
          'story-847362910-c16': {
            text: '먼저 1층을 수색한다',
            description: '각 방을 체계적이고 안전하게 확인한다',
          },
        },
      },
      'story-847362910-17': {
        title: '1층의 비밀',
        narration: '당신은 1층의 각 방을 체계적으로 수색합니다. 오래된 사무실들, 곰팡이 핀 커피잔이 있는 휴게실, 녹슨 장비로 가득 찬 창고들. 마지막 사무실에서 당신의 심장을 뛰게 하는 것을 발견합니다. 최근 활동의 흔적입니다. 누군가가 여기서 살았습니다. 침낭, 음식 포장지, 그리고 경찰 부패에 관한 신문 스크랩으로 덮인 벽. 당신의 사진들이 달튼 사건을 종결시킨 당신의 전 파트너인 모리슨 경감의 이미지와 섞여 있습니다. 그때 당신은 봅니다. 모리슨을 달튼 가족 사업과 연결하는 타임라인이 있는 화이트보드를, 화살표가 역외 계좌를 가리키고 있습니다. 위층에서 음악이 멈춥니다. 발소리가 당신을 향해 내려옵니다.',
        choices: {
          'story-847362910-c35': {
            text: '숨어서 오는 사람을 매복 공격한다',
            description: '그림자에서 공격한다',
          },
          'story-847362910-c36': {
            text: '자신을 알리고 대화를 요청한다',
            description: '어쩌면 폭력은',
          },
        },
      },
      'story-847362910-18': {
        title: '관료적 정의',
        narration: '당신은 지원군을 기다리고, 그들이 도착했을 때 통조림 공장은 비어 있습니다. 사라 첸은 집에서 안전하게 발견됩니다. 문자는 허세였습니다. 레베카 달튼은 멕시코행 비행기에 탑승하려다 체포됩니다. 구금 상태에서 그녀는 모든 것을 자백합니다. 마커스는 마약 자금을 세탁하고 있었고, 모리슨 경감은 급여를 받고 있었으며, 레베카가 오빠와 대면했을 때 모리슨은 둘 다 침묵시키기 위해 그를 죽였습니다. 하지만 레베카가 수집한 증거 없이는, 이제 그녀의 공황 상태에서 파괴되어, 아무것도 남지 않습니다. 모리슨은 전액 연금을 받고 퇴직합니다. 레베카는 스토킹과 침입죄로 감옥에 갑니다. 사건은 공식적으로 종결되지만, 당신은 진실을 압니다. 때로는 시스템이 유죄인 자들을 보호하고, 때로는 정의란 서류 작업과 타협에 불과합니다. 당신은 3개월 후 배지를 반납합니다.',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
