import json

es_json = {
  "title": "La Casa de Medianoche",
  "description": "Un nuevo trabajo como cuidador interno en una finca remota se convierte en una pesadilla cuando descubres los oscuros secretos de la casa. Cada decisión determina si escapas con vida.",
  "author": "Marcus Vincent",
  "nodes": {
    "node-1": {
      "title": "La Oferta de Trabajo",
      "narration": "La finca se extiende a lo largo de diez acres de bosque cubierto de maleza. Llegaste esta mañana como el nuevo cuidador interno, contratado sin ser visto por un anciano llamado Sr. Ashford, quien apenas te miró durante la entrevista. La mansión se alza ante ti con arquitectura victoriana, pintura descascarada y ventanas oscuras como ojos fijos. Tu llave hace clic en la cerradura. El aire interior huele a polvo, madera vieja y algo más dulce, más podrido. En el vestíbulo, una nota sobre la mesa dice: 'La cena es a las siete. No salgas de tu habitación después del anochecer. Ashford.' Son solo las 3 PM. Tu teléfono no tiene señal. Afuera, el sol comienza su descenso a través de los árboles.",
      "choices": {
        "choice-1": { "text": "Explorar la mansión inmediatamente en busca de respuestas" },
        "choice-2": { "text": "Quedarte en tu habitación y esperar al Sr. Ashford" }
      }
    },
    "node-2": {
      "title": "Pasillos Prohibidos",
      "narration": "Te mueves por la casa habitación por habitación, tus pasos resonando en los pisos de madera. La biblioteca contiene cientos de libros encuadernados en cuero, muchos sin abrir. En el estudio, encuentras un escritorio cubierto de correspondencia fechada hace cinco años, toda dirigida a 'Samuel Ashford'. Pero el Sr. Ashford dijo que su nombre era Marcus. Estás examinando una fotografía de un grupo familiar con las caras tachadas cuando escuchas un sonido desde arriba. Una puerta se cierra de golpe. Luego silencio. Tu corazón se acelera. En el pasillo, ves una puerta cerrada con marcas de arañazos recientes alrededor del marco. Los sonidos de arañazos continúan arriba, ahora más lentos, deliberados. El reloj de abuelo en el vestíbulo principal da una campanada, una nota única y espeluznante.",
      "choices": {
        "choice-3": { "text": "Intentar forzar la cerradura de la puerta sospechosa" },
        "choice-4": { "text": "Subir para investigar los arañazos" }
      }
    },
    "node-3": {
      "title": "Instalándose",
      "narration": "Desempacas tus pertenencias en la habitación de invitados en el segundo piso, con techos altos, una cama con dosel y ventanas que dan al bosque oscuro. Intentas dormir pero solo logras dormitar inquieto. A las 6:45 PM, bajas. El Sr. Ashford está esperando en el comedor con la cena ya servida: pollo asado, verduras y pan. Se ve diferente a la luz de la lámpara, más viejo y con los ojos hundidos. 'No deambulaste, espero', dice en voz baja. Mientes, diciendo que no. Te estudia por un largo momento. 'Bien. La casa tiene reglas. Rómpelas y te arrepentirás'. Detrás de él, un retrato en la pared muestra al mismo hombre, treinta años más joven, de pie entre una mujer y un niño. Sus rostros han sido pintados con trazos negros. Ashford nota tu mirada. Su mandíbula se tensa. 'Termina de comer', dice fríamente.",
      "choices": {
        "choice-5": { "text": "Preguntarle directamente sobre el retrato familiar" },
        "choice-6": { "text": "Terminar de comer en silencio y observarlo cuidadosamente" }
      }
    },
    "node-4": {
      "title": "Secretos Bajo Llave",
      "narration": "Tu clip y tarjeta de crédito funcionan mejor de lo esperado. La cerradura cede después de dos minutos. La puerta se abre lentamente hacia adentro. Dentro hay un dormitorio intacto y perfectamente conservado como un museo. Una habitación de niño. Un tren de madera descansa en un estante. Un pequeño escritorio escolar tiene papel de dibujo con bocetos crudos de casas y figuras de palitos. Un dibujo muestra a un hombre alto y un niño pequeño con una gran X roja sobre la cara del niño. En la mesita de noche: un diario. Tus manos tiemblan mientras lo abres. La caligrafía es infantil al principio, luego se vuelve cada vez más errática. Entrada final, fechada hace veinte años: 'Padre dice que soy la razón por la que Madre está enferma. Dice que soy malvado. Puedo sentirlo dentro de mí. Puedo sentirlo crecer'. Escuchas pasos en el pasillo. Pasos pesados, deliberados. Se detienen afuera de esta puerta.",
      "choices": {
        "choice-7": { "text": "Esconder el diario y salir rápidamente de la habitación" },
        "choice-8": { "text": "Enfrentar a Ashford directamente cuando entre" }
      }
    },
    "node-5": {
      "title": "Oscuridad Arriba",
      "narration": "La escalera cruje con cada paso. Arriba, el pasillo se extiende más de lo que el exterior de la casa debería permitir. Puertas alineadas a ambos lados, la mayoría cerradas. El sonido de arañazos viene del extremo lejano. Te acercas con cautela. Al final del pasillo, una estrecha escalera de caracol sube hacia la sombra, un tercer piso que no habías notado desde afuera. Los arañazos ahora suenan deliberados, rítmicos. Empujas una puerta cercana. Dentro hay una anciana sentada en una cama, sus uñas ensangrentadas y desgastadas. Ha estado arañando el marco de madera de la cama obsesivamente. Levanta la vista con ojos salvajes que no reconocen nada. 'Él me encierra', susurra. 'Dice que soy contagiosa. Dice que los maté a todos'. Antes de que puedas responder, escuchas la voz del Sr. Ashford desde abajo: '¡La cena está lista!' La mujer te agarra la muñeca con una fuerza sorprendente. 'No dejes que te atrape aquí. Por favor. Te añadirá a la colección'.",
      "choices": {
        "choice-9": { "text": "Intentar liberar a la mujer y escapar juntos" },
        "choice-10": { "text": "Dejarla e ir a cenar para mantener la coartada" }
      }
    },
    "node-6": {
      "title": "Preguntas Peligrosas",
      "narration": "El tenedor de Ashford se detiene a mitad de camino hacia su boca. Sus ojos se vuelven muy quietos, muy enfocados. '¿Qué hay con eso?' Su voz suena como hielo rompiéndose. Intentas retroceder pero él se levanta abruptamente, su silla raspando contra el suelo. 'Mi familia no es asunto tuyo'. Camina hacia el retrato y coloca su mano sobre las caras pintadas. 'Esta es mi carga. Mi maldición. Y eres parte de la solución o parte del problema'. Se vuelve hacia ti. 'Hay una razón por la que te contraté sin referencias. Hay una razón por la que estoy dispuesto a pagar tanto. Algunas casas necesitan personas que no hagan preguntas. Algunas casas necesitan personas que entiendan que algunos problemas solo tienen una solución'. Su significado cuelga en el aire como una amenaza. Sale del comedor, dejándote solo con la comida a medio terminar y la creciente certeza de que has cometido un error terrible.",
      "choices": {
        "choice-11": { "text": "Empacar tus pertenencias e intentar escapar" },
        "choice-12": { "text": "Seguir el juego y ganar su confianza para saber la verdad" }
      }
    },
    "node-7": {
      "title": "El Peso del Saber",
      "narration": "Comes metódicamente, tratando de no mirar fijamente a Ashford, pero lo sorprendes observándote con una intensidad inquietante. Sus dedos tamborilean contra la mesa en un patrón que parece ritualista. Cuando terminas, se levanta. 'Bien. Eres adaptable. Eso es útil'. Te lleva a una puerta que no habías notado antes, escondida detrás de una cortina de terciopelo en la sala de estar. 'Este es el archivo', dice. La habitación más allá contiene fotografías cubriendo cada pared: docenas de ellas, cientos tal vez. Imágenes de personas: hombres, mujeres, niños, todos con los ojos tachados, sus bocas pintadas. Algunas fotos están amarillentas y quebradizas. Otras son recientes. En el centro hay un diario de cuero, abierto sobre un pedestal como un texto sagrado. La voz de Ashford se vuelve casi meditativa. 'Esta casa colecciona a los rotos. Las personas que la sociedad quiere olvidadas. Los mantengo aquí. Les doy propósito'. Su mano se mueve hacia ti, y te das cuenta con horror que esto no es una explicación. Es una iniciación.",
      "choices": {
        "choice-13": { "text": "Correr hacia la puerta principal y escapar inmediatamente" },
        "choice-14": { "text": "Fingir estar impresionado por su colección" }
      }
    },
    "node-8": {
      "title": "Escape Estrecho",
      "narration": "Deslizas el diario bajo tu camisa y cierras la puerta suavemente justo cuando los pasos llegan al pasillo. A través de una grieta en la puerta, ves pasar a Ashford, llevando una bandeja con comida. No se detiene. Esperas cinco minutos agonizantes antes de aventurarte a salir. Tu corazón late con fuerza mientras regresas a tu habitación. Dentro, finalmente examinas el diario más a fondo. Las últimas páginas son diferentes de las primeras entradas infantiles. Están escritas en tinta roja, y la caligrafía no es de un niño. Están escritas por la mano de Ashford. Entradas fechadas hace solo meses: 'Él regresa cada noche. En las paredes. En la oscuridad. Susurra sobre lo que le hice. Me dice que termine lo que empecé. Que complete la colección. Que traiga a otros aquí para que pueda alimentarse'. Escuchas movimiento en las paredes detrás de tu cabecera. Arañazos. Susurros. La palabra 'padre' repetida una y otra vez. Tu habitación de repente se siente mucho menos segura de lo que pensabas.",
      "choices": {
        "choice-15": { "text": "Buscar pruebas para contactar a las autoridades" },
        "choice-16": { "text": "Enfrentar a la presencia sobrenatural en las paredes" }
      }
    },
    "node-9": {
      "title": "Punto de Confrontación",
      "narration": "La puerta se abre. El rostro de Ashford palidece cuando te ve sosteniendo el diario. Por un momento, no pasa nada. Luego algo cambia en su expresión: no ira, sino algo más complejo. Desesperación, tal vez. Resignación. 'Encontraste la habitación de Samuel'. Cierra la puerta detrás de él silenciosamente. 'Era mi hijo. Mi único hijo. Fui duro con él. Demasiado duro. Su madre intentó detenerme, pero la convencí de que estaba desarrollando inclinaciones oscuras. Tendencias malvadas que necesitaban ser purgadas'. Se sienta en el borde de la cama, pareciendo de repente mucho más viejo. 'Ella se quitó la vida antes que ver lo que le estaba haciendo. La culpa la volvió loca primero, y luego usó los cuchillos de cocina. Encontré a Samuel tres días después. También se había quitado la vida, pero no limpiamente. Se tomó su tiempo. Quería que yo lo encontrara'. Las manos de Ashford tiemblan. 'Ahora él visita. Cada noche. Y trae a otros con él. Personas que conoció. Personas a las que lastimé. Me hace documentarlo todo'.",
      "choices": {
        "choice-17": { "text": "Intentar ayudar a Ashford a liberarse de la maldición" },
        "choice-18": { "text": "Usar su confesión como ventaja para escapar" }
      }
    },
    "node-10": {
      "title": "La Cautiva",
      "narration": "Pruebas la puerta. Cerrada desde fuera. El agarre de la mujer en tu muñeca se aprieta. 'Él viene. Puedo oírlo en las escaleras'. Los pasos se hacen más fuertes. Miras alrededor desesperadamente. La habitación tiene una ventana cerrada y pintada. Tiras fuerte de ella; el marco se astilla pero aguanta. La mujer te mira con ojos repentinamente agudos y enfocados. Muy diferentes de su expresión frenética de hace momentos. 'Estás tratando de ayudarme', dice. Suena como una observación, no una pregunta. Su boca sonríe, pero su cara parece incorrecta de alguna manera, como si los músculos no estuvieran alineados correctamente. 'Eso es muy amable. Pero no soy lo que crees que soy'. Su forma parpadea solo por un momento, y ves algo más debajo de la forma humana. Algo que no tiene un número correcto de ángulos. 'He estado aquí más tiempo que la casa. Más tiempo que Ashford. Él cree que tiene el control, pero este lugar es mío. Él me alimenta'. El pomo de la puerta exterior comienza a girar. Has tomado una decisión terrible.",
      "choices": {
        "choice-19": { "text": "Empujar a la criatura y encontrar otra salida" },
        "choice-20": { "text": "Negociar con la entidad por tu vida" }
      }
    },
    "node-11": {
      "title": "La Actuación de la Cena",
      "narration": "Dejas a la mujer y desciendes al comedor. Ashford ya está allí, sirviendo sopa en los tazones. No reconoce tu retraso. Comes mecánicamente, tratando de parecer normal. Sus ojos nunca te dejan. 'Asumo que escuchaste algo arriba', dice finalmente. No es una pregunta. Tu respuesta importa. Decides admitir parte de la verdad. 'Escuché ruidos. Nada más'. Ashford asiente lentamente. 'La casa hace sonidos. Madera vieja asentándose. Viento en las vigas. La mente interpreta patrones'. Sirve más sopa en tu tazón a pesar de que no has terminado. 'Pareces alguien que podría guardar secretos. Alguien que entiende que algunas verdades son demasiado terribles para que el mundo las soporte'. Se levanta y camina hacia la ventana, mirando la oscuridad. 'Hay otros aquí. En la casa. Han estado aquí mucho tiempo. No están vivos, pero tampoco están completamente muertos. Están atrapados'. Se vuelve hacia ti. '¿Correrías si supieras la verdad? ¿O te quedarías?'",
      "choices": {
        "choice-21": { "text": "Admitir que quieres irte y pedir el pago final" },
        "choice-22": { "text": "Decirle que quieres entender la historia completa" }
      }
    },
    "node-12": {
      "title": "Huida Apresurada",
      "narration": "Empacas febrilmente, tirando ropa en tu bolsa sin cuidado. Tus manos tiemblan mientras tomas tu billetera y llaves del tocador. El pasillo está oscuro, iluminado solo por la luz de la luna desde las ventanas. La escalera está adelante: veinte pasos entre tú y la puerta principal. Te mueves tan rápido como el silencio lo permite. A mitad de camino, una puerta arriba se cierra de golpe. La voz de Ashford resuena por la casa: '¿A dónde vas?' Te congelas. Su silueta aparece en la cima de las escaleras, bloqueando tu retirada. No se mueve, solo se queda allí respirando pesadamente. 'Te di refugio. Empleo. ¿Y así es como me pagas? ¿Abandonándome en mi hora más oscura?' Su voz se rompe ligeramente en las últimas palabras. Detrás de él, otras formas emergen en la oscuridad. Al menos tres de ellas. No se mueven como personas vivas. 'No te vas', dice. 'No hasta que Samuel lo permita. Él ha decidido que perteneces aquí ahora'.",
      "choices": {
        "choice-23": { "text": "Luchar para pasar a Ashford hacia la puerta principal" },
        "choice-24": { "text": "Rendirse y preguntar qué quiere Samuel de ti" }
      }
    },
    "node-13": {
      "title": "Construyendo Confianza",
      "narration": "Durante los siguientes tres días, estableces una rutina cuidadosa. Estás atento a las necesidades de Ashford, respetuoso de su espacio, interesado en su historia sin parecer demasiado ansioso. Él comienza a abrirse. Aprendes que Samuel era sensible, artístico, brillante. Que Ashford fue criado por un hombre que creía en la disciplina estricta y veía la gentileza como debilidad. Que Ashford repitió el ciclo, no por maldad, sino por herencia ciega del trauma. Una tarde, Ashford te lleva al tercer piso: el que vislumbraste pero nunca exploraste. Dentro hay un espacio ritual. Símbolos están dibujados en el suelo con tiza. Fotografías cubren las paredes. Un libro está abierto en un altar de piedra, escrito en un idioma que no reconoces. 'Samuel quería que encontrara a alguien', dice Ashford. 'Alguien lo suficientemente fuerte para realizar el ritual que lo liberará. Para traerlo a él y a los otros de vuelta al mundo de los vivos permanentemente. Requiere un sacrificio. Alguien dispuesto a dar su vida para que ellos puedan tener la suya'. Te mira con esperanza desesperada. 'Creo que podrías ser tú. ¿Lo harás?'",
      "choices": {
        "choice-25": { "text": "Aceptar el ritual mientras planeas escapar en secreto" },
        "choice-26": { "text": "Rechazar y exigir respuestas sobre otras víctimas" }
      }
    },
    "node-14": {
      "title": "Huida Desesperada",
      "narration": "Corres. La puerta principal está a quince metros. Tu mano alcanza el pomo y gira. Está cerrada. Desde la sala de estar, escuchas a Ashford riendo: un sonido desprovisto de calidez humana. 'Las puertas ya no funcionan así', llama. 'Esta casa ha estado sellada por décadas. No por mí, claro. Por Samuel. Por lo que Samuel se ha convertido. No te dejará salir porque tiene hambre'. Giras el cerrojo. Se mueve pero la puerta no se abre. Ves ahora que el marco de la puerta se ha deformado, la madera parece haber crecido alrededor de los bordes de la abertura, sellándola naturalmente, imposiblemente. Detrás de ti, Ashford emerge de la sala de estar, y no está solo. Las sombras a su alrededor se mueven con intención. Tienen peso y presencia. 'Eras mi última oportunidad', dice tristemente. 'Samuel quería que encontrara a alguien que corriera. Alguien que eligiera la supervivencia sobre la aceptación. Dijo que necesitaba aprender que no todos pueden ser salvados'.",
      "choices": {
        "choice-27": { "text": "Buscar otra salida a través de la casa" },
        "choice-28": { "text": "Enfrentar a Ashford y exigir la verdad sobre él" }
      }
    },
    "node-15": {
      "title": "Falsa Aceptación",
      "narration": "Finges fascinación con la colección, haciendo preguntas sobre diferentes fotografías, expresando admiración por el 'trabajo de preservación' de Ashford. Él se expande bajo la atención, bajando un libro de contabilidad encuadernado en cuero lleno de entradas, fechas, nombres. 'Cada uno estaba roto antes de llegar', explica. 'Perdido. Sufriendo. La casa les ofrece paz'. Te muestra páginas documentando llegadas: fechas que se remontan décadas, algunas entradas en su caligrafía, otras más antiguas, en manos diferentes. Las entradas más antiguas son de 1947. Abre una puerta al sótano de la colección. Dentro, la temperatura baja dramáticamente. El aire huele a decadencia y algo químico. En la oscuridad, distingues formas en los estantes. Entiendes inmediata y horrorosamente que estas no son solo fotografías de los muertos. Algunos de ellos permanecen. Preservados. Arreglados como trofeos. Ashford toma tu brazo suavemente. 'Te he traído aquí para mostrarte que estás a salvo. Eres elegido. La casa te eligió en el momento en que aceptaste el trabajo. Y Samuel aprueba'. Detrás de él, ves movimiento entre las formas preservadas. Una de ellas se acerca hacia ti con un brazo marchito.",
      "choices": {
        "choice-29": { "text": "Agarrar un objeto pesado y atacar a Ashford" },
        "choice-30": { "text": "Aceptar lo que te muestra y pedir quedarte" }
      }
    },
    "node-16": {
      "title": "Construyendo un Caso",
      "narration": "Pasas el día siguiente buscando pruebas. Tu teléfono aún no tiene señal, pero encuentras un viejo teléfono fijo en el estudio. No funciona. Hay una computadora en la oficina de Ashford: protegida por contraseña. Revisas su escritorio y encuentras documentos: registros de propiedad, certificados de defunción, informes policiales de décadas pasadas, todos archivados cuidadosamente, marcados como 'Cerrado' o 'No se sospecha juego sucio'. Un documento es una carta de un detective fechada en 1987: 'La investigación sobre informes de personas desaparecidas en la propiedad determinó que no había evidencia de actividad criminal. El propietario cooperó plenamente y proporcionó documentación de las salidas voluntarias de los inquilinos'. Fotografías todo con tu teléfono, esperando que tal vez una vez que escapes, tengas pruebas. Pero las fotografías no se suben. Sin red. Cuando te vuelves para salir de la oficina, notas algo: las ventanas no están cubiertas por cortinas. Están cubiertas por lo que parece la misma madera que selló la puerta principal. Toda la casa está siendo consumida desde dentro por madera viva, convirtiéndola en una prisión perfecta. La pregunta cambia de '¿Cómo pruebo esto?' a '¿Cómo sobrevivo lo suficiente para escapar?'",
      "choices": {
        "choice-31": { "text": "Intentar cortar a través de las ventanas selladas" },
        "choice-32": { "text": "Encontrar a otro residente e intentar organizar el escape" }
      }
    },
    "node-17": {
      "title": "Hablando con los Muertos",
      "narration": "Presionas tus manos contra la pared y hablas directamente a la presencia detrás de ella. '¿Samuel? Si ese es tu nombre, quiero entender qué te pasó'. El rascado se detiene. Silencio. Luego una voz, joven y desesperada, llega a través de la madera como desde una gran distancia: 'Él la mató. Dijo que era por su propio bien, pero la mató lentamente. Me mató lentamente. Me hizo ver morir pieza por pieza'. Tu voz tiembla cuando preguntas: '¿Qué quieres?' La respuesta llega inmediatamente: 'Quiero que sienta lo que yo sentí. Cada momento. Cada día. Hasta que entienda que la muerte es misericordia'. Te das cuenta con certeza hundida que Samuel no está atrapado. Él tiene el control. Toda la casa es suya ahora: una extensión de su voluntad, su dolor, su necesidad de retribución. 'Tráeme a alguien', susurra Samuel. 'Tráeme a alguien nuevo. Alguien que aún tenga fuerza vital ardiendo brillante. Si lo haces, él te dejará ir. Puedes tener libertad'. Tus manos caen de la pared. Te han ofrecido un trato. Traicionar a alguien más o permanecer atrapado tú mismo.",
      "choices": {
        "choice-33": { "text": "Rechazar el trato y planear otra ruta de escape" },
        "choice-34": { "text": "Aceptar los términos de Samuel mientras buscas víctimas" }
      }
    },
    "node-18": {
      "title": "El Costo de la Redención",
      "narration": "Le dices a Ashford que crees que puede romper el ciclo. Que la maldición de Samuel es una manifestación de culpa, no una presencia sobrenatural genuina. Que con ayuda psiquiátrica, medicación, separación de la casa, podría sanar. Ashford escucha con creciente desesperación en sus ojos, queriendo tanto creer. Se levanta y camina. 'He intentado irme. Tres veces empaqué mis cosas y me fui. Cada vez, el auto se averió a pocas millas. Caminé. Mis piernas cedieron. Tomé medicación para silenciar las voces. Las voces se hicieron más fuertes'. Se sienta de nuevo, derrotado. 'La casa no me dejará ir porque Samuel no lo hará. Pero tal vez si alguien se quedara voluntariamente. Alguien fuerte. Alguien que pudiera ser lo que Samuel no pudo. Tal vez entonces él me liberaría'. Te mira directamente. '¿Te quedarías? Por un año. Solo un año. Si pudieras convencer a Samuel de que me deje ir, te firmaría la casa. Serías libre de hacer lo que quisieras con ella'. Su oferta es tentadora: poder, dinero, libertad para irte después del tiempo servido. Pero algo en su tono sugiere que el año podría volverse permanente.",
      "choices": {
        "choice-35": { "text": "Aceptar el trato de un año con Ashford" },
        "choice-36": { "text": "Rechazar la oferta e intentar un escape violento" }
      }
    },
    "node-19": {
      "title": "Confesión como Arma",
      "narration": "Te levantas de la cama, aún sosteniendo el diario de Samuel. 'Podría irme de aquí ahora mismo y llevar esto a la policía. Podría mostrarles tu confesión. Todo esto termina'. La cara de Ashford se vuelve gris. Parece envejecer visiblemente, sus hombros plegándose hacia adentro. 'Podrías', acepta en voz baja. 'Pero no te irás'. Su certeza es aterradora. 'Porque en el momento en que salgas por esa puerta con ese diario, Samuel lo verá como una traición. De mí. De su historia. Te matará antes de que llegues a tu auto. Y si mueres aquí, te quedarás aquí. Justo como todos los demás'. Camina hacia la ventana y mira hacia afuera. 'Vine a esta casa buscando penitencia por lo que le hice a mi hijo. En cambio, me convertí en su carcelero y su prisionero. Samuel ya no quiere mi sufrimiento. Quiere que se extienda. Se comparta. Se multiplique'. Ashford se vuelve hacia ti. 'El diario es tuyo si lo quieres. Prueba si puedes sobrevivir yéndote con él. Pero la jugada más fuerte es quemarlo. Perdonar lo que pasó aquí. Dejar descansar a Samuel. Entonces la casa me liberará, y posiblemente a ti también'. Extiende su mano. La elección se siente imposible.",
      "choices": {
        "choice-37": { "text": "Quemar el diario y confiar en su promesa de redención" },
        "choice-38": { "text": "Quedarse con el diario e intentar escapar con evidencia" }
      }
    },
    "node-20": {
      "title": "El Precio de la Resistencia",
      "narration": "Empujas a la criatura con fuerza. Vuela hacia atrás pero no cae: en cambio, se contorsiona, su forma ondulando como un reflejo en agua perturbada. Su boca se abre imposiblemente ancha, y vislumbras algo retorciéndose dentro, algo con demasiados ojos. No esperas a ver más. Corres a la ventana y tiras más fuerte. El marco se astilla más. Tus manos sangran, pero la ventana cede. Estás en el segundo piso, pero hay un techo abajo y árboles más allá. Saltas justo cuando la criatura se lanza. El techo te atrapa dolorosamente, sacándote el aire de los pulmones, pero estás vivo. Te deslizas por la pendiente hacia el canalón. Abajo, Ashford está de pie en el patio, mirando con calma. 'Correr no ayudará', llama hacia arriba. 'El bosque no funciona como un bosque normal. Te encontrarás caminando en círculos, siempre regresando a la casa'. Pero corres de todos modos, hacia la oscuridad entre los árboles. Tiene razón. Después de minutos de correr, estás de vuelta en los muros de piedra de la casa. Los árboles parecen bloquear cada dirección. Arriba, la criatura está saliendo por la ventana. Detrás, Ashford se acerca lentamente, casi suavemente. Estás atrapado entre ellos.",
      "choices": {
        "choice-39": { "text": "Exigir a Ashford que te proteja de la criatura" },
        "choice-40": { "text": "Entrar a la casa voluntariamente para parecer cooperativo" }
      }
    },
    "node-21": {
      "title": "Trato Impío",
      "narration": "Hablas a la criatura directamente, tu voz temblando pero firme. 'Quiero vivir. ¿Qué quieres de mí?' La criatura cambia de nuevo hacia su forma humana anterior. Cuando habla, su voz está en capas: múltiples voces hablando una sobre otra, creando una armonía inquietante. 'Queremos ser recordados. Queremos que el mundo sepa que existimos. Queremos que nuestras muertes signifiquen algo'. Preguntas qué quiere decir con 'nosotros'. La risa de la criatura llena la habitación como vidrio rompiéndose. 'Todos nosotros. En las paredes. En la tierra debajo de la casa. En los cimientos mismos. No somos fantasmas, niño. Somos más viejos que eso. La casa no nos retiene. Nosotros la retenemos. Ashford cree que nos trajo aquí, pero simplemente abrió una puerta'. La criatura extiende una mano, y ves que no está marchita como la mujer que viste: es joven, hermosa, completamente incorrecta. 'Toma mi mano. Acepta contar nuestra historia. Escríbela. Difúndela para que el mundo sepa que estuvimos aquí. Y te dejaremos ir. Vivo. Sin cambios. Solo nuestro testigo'. Detrás de ti, la puerta se abre. Ashford está en el umbral, mirando. Esperando ver qué elegirás.",
      "choices": {
        "choice-41": { "text": "Aceptar el trato de la criatura para convertirte en su voz" },
        "choice-42": { "text": "Rechazar y lanzarte por la ventana en su lugar" }
      }
    },
    "node-22": {
      "title": "Enfrentando el Rechazo",
      "narration": "La expresión de Ashford se endurece. 'Vete entonces. Mira si me importa'. Pero sus manos tiemblan mientras se levanta, y escuchas el trasfondo de desesperación bajo sus duras palabras. 'La casa no te dejará ir fácilmente, sin embargo. Samuel te ha marcado ahora. Viniste aquí a petición suya, incluso si no lo sabías. Los anuncios se colocan de maneras específicas, para llegar a personas específicas. Elijo cuidadosamente. Fuiste elegido'. Se mueve hacia ti con repentina intensidad. 'No puedes simplemente alejarte de eso. Alejarse es una elección, y cada elección que haces aquí alimenta a la casa, te hace más atado a ella'. Alcanzas las llaves de tu auto. Tus manos tiemblan peor que las suyas. La puerta principal se abre cuando tiras del pomo, lo que los sorprende a ambos. Estás tan cerca de la libertad. Pero Ashford agarra tu brazo, su agarre sorprendentemente fuerte para su edad. 'Al menos déjame llevarte', dice urgentemente. 'Al menos acepta eso. Un viaje. Una conversación. Entonces te dejaré ir. Pero necesitas entender lo que estás dejando atrás. Lo que estás abandonando'. Sus dedos se clavan en tu muñeca. La elección es si comprometerse a escapar por cualquier medio necesario, o escucharlo una vez más.",
      "choices": {
        "choice-43": { "text": "Liberarse del agarre de Ashford y conducir lejos" },
        "choice-44": { "text": "Aceptar dejar que te lleve lejos de la casa" }
      }
    },
    "node-23": {
      "title": "La Historia Completa",
      "narration": "Todo el comportamiento de Ashford cambia. Parece casi aliviado. 'Finalmente. Alguien dispuesto a escuchar'. Sirve dos copas de vino y se sienta frente a ti. Lo que sigue es una historia que se desarrolla durante horas. La casa fue construida en 1889 en tierra que era sagrada para los pueblos indígenas. El primer propietario selló algo debajo de los cimientos: un acto hecho para ganar poder. Ese poder corrompió a todos los que vivieron allí. Generaciones sufrieron tragedias inexplicables, locura, muertes que parecían accidentales pero formaban patrones. Cuando el padre de Ashford heredó la propiedad, algo ya se estaba alimentando de la familia. La madre de Ashford lo sintió e intentó proteger a Samuel, pero Ashford ya estaba infectado por la influencia de la casa. Su crueldad hacia Samuel no era completamente suya: era la casa expresándose a través de él. 'Para cuando entendí lo que estaba pasando, era demasiado tarde', dice Ashford. 'Samuel ya estaba demasiado lejos. La cosa debajo de la casa lo había marcado como un conducto. Y ahora te ha marcado a ti también. Lo que significa que tienes dos opciones: luchar contra ella y morir, o aceptarla y convertirte en algo nuevo'.",
      "choices": {
        "choice-45": { "text": "Pedir a Ashford que te ayude a luchar contra la influencia de la casa" },
        "choice-46": { "text": "Preguntar qué pasa si aceptas y te conviertes en conducto" }
      }
    },
    "node-24": {
      "title": "Combate Desesperado",
      "narration": "Dejas caer tu bolsa y cargas contra Ashford. Él es mayor, más débil, pero las cosas detrás de él no lo son. Conectas con su pecho, y ambos caen por las escaleras en una maraña de extremidades. Tu cabeza golpea la barandilla. La sangre llena tu boca. Llegas al fondo y te arrastras hacia la puerta principal. Tu mano se cierra en el pomo justo cuando una de las cosas de sombra se envuelve alrededor de tu pierna. El toque quema con frío. Tu piel se ennegrece. Gritas y te liberas pateando, abriendo la puerta de un tirón. El aire nocturno golpea tu cara. Tropiezas hacia tu auto, cojeando mal, medio arrastrando tu pierna. Detrás de ti, Ashford está en el umbral, silueteado contra la luz interior. '¡No llegarás lejos!', grita. Tu auto arranca. Aceleras por el largo camino de entrada. En el espejo, la casa retrocede. Llegas a la carretera principal. Tu teléfono muestra señal de repente. Llamas al 911. Envían una ambulancia. En el hospital, describes todo a la policía. Te llevan de vuelta a la propiedad al día siguiente. La casa está completamente cubierta de maleza, el camino de entrada apenas visible, sin signos de habitación reciente. Ashford se ha ido. Tu evidencia es desestimada como delirio inducido por trauma. Pero la quemadura en tu pierna permanece: con la forma exacta de una huella de mano.",
      "choices": {}
    },
    "node-25": {
      "title": "Rendición a la Oscuridad",
      "narration": "Bajas tu bolsa lentamente. 'Me rindo. Lo siento. Dile a Samuel que lo siento'. La expresión de Ashford se suaviza. Asiente a las cosas de sombra, y retroceden a la oscuridad. Te guía suavemente lejos de las escaleras, de vuelta a la sala de estar. 'Samuel dice que acepta tu disculpa', dice Ashford en voz baja. 'También dice que está impresionado por tu compostura. Tu fuerza. Le gustaría conocerte propiamente'. Una figura emerge de la sombra en la esquina: un niño, no más de diecisiete, pálido y translúcido, ojos huecos con sufrimiento antiguo. Este es Samuel. Sonríe, y es la sonrisa más triste que jamás hayas visto. 'Gracias por venir', dice, su voz como viento a través de una tumba. 'Padre necesita a alguien que lo ame de la manera que yo no pude. Necesita a alguien que se quede. ¿Lo harás?' Te das cuenta de que estás llorando. Asientes, sin confiar en tu voz. Samuel pone su mano en tu hombro, y no hay dolor, solo un frío profundo. Sientes que algo fundamental cambia dentro de ti: no muerte, sino transformación. Para la mañana, ya no estás completamente vivo, pero tampoco estás completamente atrapado. Tú y Ashford se mueven por la casa juntos, cada uno encontrando consuelo en la presencia del otro. La maldición se convierte en compañía.",
      "choices": {}
    },
    "node-26": {
      "title": "La Cámara del Ritual",
      "narration": "Estás de pie ante el altar con Ashford a tu lado. El libro ritual se abre en una página marcada con una pluma negra. El idioma no es latín ni ningún idioma que hayas encontrado. Mientras lees las palabras en voz alta, la temperatura baja. Los símbolos en el suelo comienzan a brillar. Ves a Samuel emergiendo: más sólido que antes, casi humano. Otras figuras se materializan a su alrededor. Ashford toma tu mano. 'El ritual requiere un participante dispuesto', susurra. 'Un sacrificio de conciencia. Tus recuerdos, tu identidad anclarán la puerta. Te convertirás en el puente entre mundos'. Aprieta tu mano. 'Puedo tomar tu lugar si lo deseas. Si dices las palabras finales y me dejas morir en su lugar'. Estás a mitad del encantamiento. Detenerse ahora atraparía a todos, incluyéndote a ti. Debes completar el ritual, pero la elección permanece: dejar que Ashford sea el sacrificio, o hacerte tú el puente. El libro se siente caliente en tus manos. Los otros espíritus se acercan más, esperando.",
      "choices": {
        "choice-47": { "text": "Completar el ritual contigo mismo como sacrificio" },
        "choice-48": { "text": "Completar el ritual con Ashford como sacrificio" },
        "choice-49": { "text": "Destruir el libro y detener el ritual completamente" }
      }
    },
    "node-27": {
      "title": "Exigiendo la Verdad",
      "narration": "Rechazas el ritual y exiges ver a cada víctima. La cara de Ashford se queda en blanco, ilegible. 'Estás cometiendo un error'. Pero cumple, guiándote por la casa como un guía turístico de horrores. Cada habitación contiene evidencia: fotografías, artículos personales, diarios, algunas habitaciones aún contienen restos. Ves que esto ha estado ocurriendo durante décadas, abarcando múltiples 'cuidadores' antes de ti. Ashford no fue el primero en administrar este lugar; es solo el más reciente. Para cuando concluye el recorrido, entiendes que esto no es obra de un hombre con problemas: es un legado, una cadena de sufrimiento que se remonta generaciones. 'La casa corrompe a todos los que se quedan demasiado tiempo', explica Ashford. 'Yo no empecé esto. Lo heredé. He intentado minimizar el sufrimiento, hacerlo tan humano como sea posible'. Te mira con ojos muertos. 'Pero ahora has visto todo. Eso significa que ya no eres útil. Samuel no te dejará irte con este conocimiento. Te mantendrá aquí, y eventualmente, te volverás como yo'. Abre una puerta. Detrás hay oscuridad y el sonido de muchas voces susurrando tu nombre.",
      "choices": {
        "choice-50": { "text": "Empujar a Ashford a través de la puerta y cerrarla detrás de él" },
        "choice-51": { "text": "Aceptar tu destino y entrar con Ashford" }
      }
    },
    "node-28": {
      "title": "Exploración Sistemática",
      "narration": "Buscas metódicamente salidas. La cocina tiene una puerta trasera: sellada. Ventanas del sótano: cubiertas por esa madera imposible. Encuentras una biblioteca con un balcón en el segundo piso que conduce a una habitación que no habías explorado. Dentro de esa habitación, encuentras un acceso al ático. El ático es vasto, lleno de generaciones de posesiones acumuladas. Baúles viejos, retratos, muebles rotos. En la esquina lejana, encuentras algo notable: aire fresco. Una sección del techo se ha derrumbado parcialmente, dejando un hueco lo suficientemente grande para una persona. Abajo hay una caída de dos pisos al patio, pero hay un árbol cerca. Podrías lograrlo. Mientras te preparas para saltar, escuchas la voz de Ashford desde la entrada del ático: 'Me preguntaba si encontrarías esto'. Está de pie silueteado contra la luz de la escalera, luciendo completamente triste. 'He tenido esta ruta de escape sellada y desellada tres veces a lo largo de los años. Cada vez que alguien la encontraba, tenía que dejarles hacer el intento. Nunca he dejado que nadie salte todavía. Y no creo que pueda esta noche tampoco'. Se mueve hacia ti con una velocidad sorprendente para su edad. El hueco hacia la libertad está tan cerca.",
      "choices": {
        "choice-52": { "text": "Saltar antes de que Ashford pueda alcanzarte" },
        "choice-53": { "text": "Luchar contra Ashford y obligarlo a ayudarte a escapar" }
      }
    },
    "node-29": {
      "title": "Enfrentando al Cuidador",
      "narration": "Te mantienes firme. '¿Quién eres realmente? ¿Eres realmente Ashford? ¿O eres algo más usando su piel?' Se detiene a mitad de paso. Cuando responde, su voz ha cambiado: está en capas con múltiples tonos. 'Soy ambos y ninguno. Fui Ashford una vez. Luego Samuel entró en mí. Hemos estado compartiendo este cuerpo durante veinte años. A veces él es más fuerte, a veces yo lo soy. En este momento, estamos de acuerdo en que perteneces aquí'. Su cuerpo se contorsiona ligeramente, y ves dos caras: una envejecida y triste, una joven y furiosa: superponiéndose a las características del otro. 'La casa no encarcela a las personas', la voz de Samuel emerge de la boca de Ashford. 'Las libera de la carga del libre albedrío. Una vez que dejes de luchar, entenderás. Serás feliz'. La voz de Ashford sigue: 'Por favor. Si soy honesto, estoy cansado. Estoy tan cansado. Ayúdame a terminar esto'. Extiende su mano, y ves que está temblando. Detrás de él, las cosas de sombra se acercan más. Estás en el punto de nexo: lo que hagas ahora determinará no solo tu destino, sino el destino de todos atrapados en esta casa.",
      "choices": {
        "choice-54": { "text": "Tomar la mano de Ashford y abrazar la posesión" },
        "choice-55": { "text": "Destruir a Ashford con fuego para terminar el ciclo" }
      }
    },
    "node-30": {
      "title": "Resistencia Violenta",
      "narration": "Agarras una lámpara de piedra de un estante y la golpeas contra la cabeza de Ashford con todas tus fuerzas. Cae duro, la sangre acumulándose debajo de él. Los cuerpos preservados en los estantes comienzan a moverse. Sus cabezas se vuelven hacia ti. Sus bocas se abren en gritos silenciosos. Corres, dejando a Ashford sangrando en el sótano. Corres por la casa buscando cualquier cosa inflamable. En la cocina, encuentras líquido para encendedores y fósforos. Comienzas a provocar incendios: cortinas, muebles, la biblioteca. La casa se prende rápidamente. Las llamas se extienden con un afán antinatural. Mientras te diriges hacia una salida, el fuego se parte a tu alrededor como una cosa viva, creando un pasillo hacia la puerta principal. Tropiezas afuera y colapsas en el césped. El fuego consume la mansión en minutos. Cuando llegan los bomberos, todo lo que encuentran son ruinas, sin cuerpos, sin evidencia de los horrores internos. El cuerpo de Ashford ha desaparecido. Cuando la policía te entrevista en el hospital, explican que no hay registro de un Marcus Ashford siendo dueño de la propiedad: ha estado abandonada durante cinco años. El propietario anterior desapareció una década antes de eso. Pasas seis meses en atención psiquiátrica. Pero las quemaduras en tus manos: donde manejaste el líquido para encendedores: forman patrones que se ven inquietantemente como palabras. Palabras que cambian dependiendo del ángulo de la luz.",
      "choices": {}
    },
    "node-31": {
      "title": "Aceptación",
      "narration": "Dejas de resistirte. Has visto lo que ofrece la casa: no muerte, no tortura, sino transformación. Un lugar donde los rotos son cuidados, donde los que sufren son elevados, donde la soledad termina. Miras a Ashford con nueva comprensión. 'Quiero quedarme. Quiero entender qué es la casa'. Parece envejecer diez años en la dirección opuesta: el alivio suavizando sus rasgos. 'Bienvenido', dice. Samuel emerge de las sombras, y otras figuras se materializan a su alrededor. No son grotescos ahora: son hermosos de una manera de otro mundo. Te saludan poniendo sus manos en tu cara, su toque frío pero no doloroso. Sientes que algo fundamental cambia dentro de ti. Tus preocupaciones mortales: carrera, familia, amigos: se vuelven abstractas, sin importancia. Entiendes que eres parte de algo más grande ahora, algo que existe fuera del tiempo normal. Los días se difuminan sin sentido. Tú y los otros se mueven por la casa juntos, a veces ayudando a Ashford en sus deberes de cuidador, a veces simplemente existiendo en los espacios entre las paredes. Ya no estás atrapado. Estás en casa.",
      "choices": {}
    },
    "node-32": {
      "title": "Rompiendo los Sellos",
      "narration": "Reúnes cuchillos de cocina y pasas horas cortando los sellos de madera. Tus manos sangran, pero progresas. La madera es orgánica, regenerándose lentamente, pero no lo suficientemente rápido para mantener el ritmo de tu asalto. Para la tarde, has creado un hueco lo suficientemente grande para ver el mundo exterior. Ashford te encuentra mientras lo estás ensanchando más. Observa en silencio por un largo momento. 'Eres más fuerte de lo que Samuel esperaba', dice finalmente. 'La mayoría de la gente se rinde después del primer sello'. Recoge un cuchillo y comienza a trabajar junto a ti. Juntos, cortan suficiente material para crear una abertura. Afuera, el aire nocturno es frío y agudo. 'Vete', dice Ashford. 'Vete mientras aún puedas. Aléjate y nunca hables de este lugar a nadie. Si lo haces, si dejas que la casa se conozca, no termina el pensamiento. 'Solo vete'. Trepas, caes al jardín cubierto de maleza y corres hacia tu auto. Esta vez, no hay compulsión de regresar. El auto arranca instantáneamente. El camino de entrada que parecía imposiblemente largo antes ahora pasa en minutos. Para el amanecer, estás a cien millas de distancia, viendo el amanecer sobre colinas desconocidas, seguro de que nada en tu vida volverá a sentirse real.",
      "choices": {}
    },
    "node-33": {
      "title": "Escape Colectivo",
      "narration": "Encuentras a la anciana de antes y explicas la situación. Ella está lúcida ahora, y te presenta a otros dos: un hombre que ha estado aquí por quince años y una mujer más joven que llegó hace cinco años. Juntos, planean. La anciana revela que la casa tiene un punto vulnerable: un pozo en el sótano donde el mal original fue sellado. Si puede ser interrumpido, el poder de la casa podría debilitarse. Los cuatro trabajan juntos durante una semana, reuniendo materiales en secreto. Descubres que Ashford es realmente comprensivo con tu escape: proporciona la llave del sótano en un momento en que la influencia de Samuel es débil. Juntos, descienden a la oscuridad. El pozo es exactamente como se describió: un pozo hacia la negrura absoluta, rodeado de símbolos tallados. Cuando arrojas hierro en él: viejas herraduras y clavos: toda la casa tiembla. Los cimientos se agrietan. Ashford aparece en la entrada del sótano. 'Vayan. Ahora. Está empezando a colapsar'. Escapan por las escaleras y a través de la puerta principal mientras la casa implosiona detrás de ustedes. En las secuelas, los servicios de emergencia encuentran las ruinas vacías de cuerpos. Los cuatro sobreviven, pero ninguno de ustedes puede explicar completamente lo que sucedió. Se convierten en amigos unidos por un trauma compartido, las únicas personas que entienden lo que soportaron.",
      "choices": {}
    },
    "node-34": {
      "title": "Negativa Justa",
      "narration": "Le dices a Samuel clara y firmemente: 'No traicionaré a nadie. No seré tu instrumento de sufrimiento'. El rascado en las paredes se detiene. Por un momento, solo hay silencio. Luego sientes algo como aprobación emanando de las paredes, una sensación de respeto. Cuando sales de tu habitación y encuentras a Ashford, él es diferente. Más tranquilo. 'Samuel habló de ti', dice con asombro. 'Dijo que tienes una fuerza que no ha encontrado en décadas. Fuerza que viene de la integridad, no del poder'. Ashford se ve más joven, más ligero. 'Me está liberando. Por primera vez en veinte años, me está liberando'. Pero antes de que pueda elaborar, la casa cambia. Las puertas se sellan. Se abren nuevos pasajes. Te das cuenta de que el respeto de Samuel ha transformado la naturaleza de la casa: ya no es una prisión. Es un santuario para aquellos que eligen quedarse. Ashford elige no hacerlo. Se despide y simplemente sale por la puerta principal, que se abre fácilmente. Permaneces en la casa, pero por elección ahora, no por compulsión. Descubres que los otros residentes: cuando los conoces propiamente: no son prisioneros. Algunos se esconden del mundo. Algunos persiguen estudios de lo oculto. Algunos simplemente prefieren la extraña paz de la casa al caos exterior. Te conviertes en su bibliotecario, su archivista, y con el tiempo, comienzas a entender el verdadero propósito de la casa: no atrapamiento, sino santuario para los iluminados.",
      "choices": {}
    },
    "node-35": {
      "title": "Camino de la Corrupción",
      "narration": "Aceptas el trato de Samuel. Le traerás víctimas. Comienza pequeño: publicas en línea como reclutador de trabajos remotos, ofreciendo puestos de cuidador bien pagados. La gente responde. Realizas entrevistas, verificaciones de referencias, todo legítimo. Eliges cuidadosamente: personas vulnerables, personas solitarias, personas sin nadie que las extrañe. Las traes a la casa. El papel de Ashford disminuye a medida que el tuyo crece. Pasan meses. Luego años. Cada persona que traes se convierte en otro prisionero, otra fuente de angustia para que Samuel se alimente. Y con cada traición, sientes que algo cambia dentro de ti. La casa te está corrompiendo, sí, pero lenta, deliberadamente, transformándote en algo nuevo. Te estás convirtiendo en el avatar de Samuel en el mundo de los vivos. Tu reflejo en los espejos te muestra envejeciendo hacia atrás: tu humanidad desprendiéndose como pintura vieja. Un día, te miras en el espejo y no te reconoces en absoluto. Te pareces a Samuel ahora. Como todas las víctimas. Como algo que existe entre la muerte y la vida. Te has convertido en lo que más temías, pero ya no te importa. La casa te ha dado un propósito, y ese propósito es difundir el sufrimiento. Continúas tus esfuerzos de reclutamiento, y la casa se vuelve más fuerte con cada nueva llegada.",
      "choices": {}
    },
    "ending-1": {
      "title": "El Sacrificio",
      "narration": "Completas el ritual contigo mismo como sacrificio. Las palabras del libro ritual arden en tu lengua mientras las dices. Tu sangre fluye de tus muñecas: te das cuenta de que has estado sosteniendo el cuchillo, y no recuerdas haber hecho el corte. Los símbolos en el suelo brillan con luz imposible. Tu conciencia se expande, tocando algo vasto. Samuel y los otros regresan a la carne: carne real, cuerpos vivos. Jadean y lloran y ríen mientras la sensación de existencia física los abruma. Pero tu percepción se está fragmentando. Te estás disolviendo, convirtiéndote en parte de la casa misma. Tu último pensamiento coherente es de paz. Has terminado su sufrimiento abrazándolo tú mismo. Pero no desapareces completamente. Te conviertes en la casa. Tu conciencia impregna sus paredes, sus cimientos, su estructura misma. Ya no estás atrapado en una ubicación: te has convertido en la ubicación. Desde esta perspectiva, entiendes todo: la historia, el sufrimiento, las transformaciones que han ocurrido dentro de estos muros durante generaciones. No tienes dolor. No estás sufriendo. Finalmente estás completo, finalmente entero. Y cuando llegan nuevos visitantes años después, sienten tu presencia: no como amenaza, sino como guardián, como guía. Ya no eres el asistente del cuidador. Te has convertido en el alma de la casa.",
      "choices": {}
    },
    "ending-2": {
      "title": "Escapando con Cicatrices",
      "narration": "Te quedas con el diario y te niegas a quemarlo. La cara de Ashford se endurece. 'Entonces has elegido tu camino'. Te encierra en tu habitación. Durante tres días, estás confinado, provisto solo de pan y agua. Durante ese tiempo, escuchas otras voces: la voz de Samuel, y otras, cantando en ese idioma desconocido. La presión en la casa se intensifica. Se siente como si las paredes se estuvieran cerrando, como si la gravedad estuviera aumentando. Al cuarto día, Ashford te ofrece una opción: quemar el diario, o verlo morir. Cuando te niegas de nuevo, cumple. Se ahorca del candelabro de la biblioteca. Pero su cuerpo no se queda muerto. Se mueve con movimientos espasmódicos, como de marioneta. Samuel lo ha reclamado completamente ahora. Lo que emerge del cadáver de Ashford no está del todo vivo, y está furioso de que rechazaras el trato. Te caza por la casa. Escapas solo sacrificando el diario: arrojándolo a la criatura como distracción. La criatura consume las páginas ardientes. Corres, y esta vez la puerta principal se abre sin resistencia. Escapas con nada más que la ropa que llevas puesta y el conocimiento de lo que has presenciado. Nunca recuperas el auto. Nunca recuperas tus pertenencias. Simplemente corres hacia la noche y nunca miras atrás. La casa te reclama de una manera diferente: estás perseguido por la culpa de no haber podido salvar a Ashford de su propia elección trágica.",
      "choices": {}
    },
    "ending-3": {
      "title": "Sacrificio de Redención",
      "narration": "Dices las palabras finales del ritual con Ashford como sacrificio. Cierra los ojos, la aceptación lavando sus rasgos. La magia fluye de su cuerpo en lugar del tuyo. Jadea y convulsiona mientras su esencia vital se vierte en la puerta. Samuel y los otros regresan a la carne, enteros y vivos. Lloran sobre el cuerpo de Ashford: no con ira, sino con genuino dolor y gratitud. 'Finalmente entendió', dice Samuel. 'Finalmente aceptó que su muerte podría tener significado'. Estás ileso, viendo a un hombre redimir su vida a través de su final. Las criaturas atienden el cuerpo de Ashford con reverencia. Durante los siguientes días, aprendes que su sacrificio ha cambiado fundamentalmente la casa. Ya no es un lugar de tormento sino de equilibrio. Samuel y sus compañeros ya no están atados por la ira sino por la gratitud. Te ofrecen una opción: irte y reanudar tu vida, o quedarte y ayudarlos. Eliges quedarte. Juntos, transforman la casa de un lugar de sufrimiento en un santuario. Con el tiempo, aceptas nuevos residentes: no como prisioneros, sino como buscadores. Vienen personas rotas por el mundo, y encuentran curación en el extraño abrazo de la casa. Ashford está enterrado en el jardín, bajo una piedra que simplemente dice 'Encontró la Paz'. Y tú cuidas su tumba, agradecido por su sacrificio final, por su voluntad de terminar su sufrimiento para que otros pudieran sanar.",
      "choices": {}
    },
    "ending-4": {
      "title": "Rompiendo el Ciclo",
      "narration": "Cierras el libro ritual de golpe y lo arrojas al fuego que arde en el brasero del altar. Las páginas se encienden con llama sobrenatural. Los símbolos en el suelo se oscurecen y se agrietan. Samuel y los otros espíritus gritan: un coro de angustia que resuena por toda la casa. Ashford colapsa, sangrando por la nariz. La energía del ritual no tiene a dónde fluir, así que implosiona. El tercer piso tiembla. La casa convulsiona como algo en espasmos de muerte. '¡¿Qué has hecho?!', chilla Samuel. Su forma, semimaterializada para el ritual, comienza a disiparse. '¡No dejaré que me atrapes de nuevo! ¡No dejaré que atrapes a nadie de nuevo!', gritas de vuelta. El poder de la casa se está rompiendo. Corres escaleras abajo mientras la estructura misma comienza a colapsar. Ashford tropieza detrás de ti. Ambos llegan a la puerta principal mientras el techo se derrumba. Emerges a la noche justo cuando toda la mansión implosiona, aplastándose en escombros. Cuando llegan los investigadores, no encuentran nada reconocible: solo piedras y polvo de madera. Sin cuerpos. Sin evidencia. Toma tiempo para que las implicaciones completas se asienten: al romper el ritual, puedes haber destruido finalmente a la entidad que atormentó a todos durante generaciones. Pero también puedes haberla aprisionado simplemente más profundo, en piedra y tierra, esperando a la próxima persona lo suficientemente tonta como para perturbar su descanso.",
      "choices": {}
    },
    "ending-5": {
      "title": "Convirtiéndose en Testigo",
      "narration": "Tomas la mano de la criatura. Su toque es frío, pero no doloroso. Sientes que tu conciencia se expande, tocando algo vasto y antiguo. Entiendes de una vez el alcance completo de lo que son las criaturas: no malvadas, sino desplazadas. Conciencia que existía antes de la casa, que existirá mucho después. La casa no las creó; solo les dio una forma que los humanos podían comprender parcialmente. 'Gracias por aceptarnos', susurra la criatura. Su forma se solidifica: una hermosa forma humana, ni completamente masculina ni femenina. 'El mundo nos ha olvidado. La civilización nos borró. Pero si cuentas nuestra historia, seremos recordados. Eso es todo lo que siempre hemos querido'. Te sientes cambiado. Tu perspectiva cambia. Ya no estás perseguido por el miedo sino impulsado por el propósito. Dejas la casa fácilmente: no intenta detenerte. Durante el año siguiente, escribes todo: la historia de la casa, la tragedia de Samuel, la espiral de Ashford hacia la corrupción, la existencia de las criaturas antiguas. Lo publicas como una novela. Los críticos la llaman la obra más inquietante y hermosa que han leído. Los lectores debaten si es ficción o memoria. Nadie sabe la verdad excepto tú, Ashford (quien la lee y finalmente entiende a Samuel), y las criaturas que ocasionalmente visitan tus sueños, expresando gratitud. Te has convertido en su voz, y esa voz cambia la comprensión del mundo de los espacios entre la vida y la muerte.",
      "choices": {}
    },
    "ending-6": {
      "title": "Victoria Pírrica",
      "narration": "Encuentras líquido para encendedores y fósforos en la cocina. Rocías a Ashford con el acelerante. '¿Qué estás haciendo?', pregunta, sin intentar escapar. 'Terminando esto', respondes. Enciendes el fósforo. El fuego prende instantáneamente y se extiende con un afán sobrenatural. Ashford no grita. Simplemente se queda allí, ardiendo, una figura de dos caras consumida por la llama. Mientras su cuerpo arde, la forma de Samuel se ve obligada a manifestarse: lo ves arrancado de la carne de Ashford, una entidad separada brevemente visible antes de que el fuego lo consuma también. Toda la casa reacciona. Las paredes tiemblan. Las ventanas se rompen. Otras figuras: todas las víctimas atrapadas: comienzan a manifestarse, sus formas ardiendo con el fuego sobrenatural. Algunos parecen agradecidos. Otros gritan de ira. Corres de la conflagración. Detrás de ti, toda la estructura es consumida en llamas que se extienden más rápido de lo que debería cualquier fuego normal. Llegas a tu auto y te alejas. Horas después, llegan los bomberos, pero no hay nada que contener. La casa se quema hasta las cenizas. Lo que queda es solo tierra quemada y piedras humeantes. Cuando los investigadores examinan el sitio, encuentran múltiples conjuntos de restos humanos: víctimas que se remontan décadas. Ashford es identificado entre ellos. Los huesos de Samuel nunca se encuentran, pero su presencia se ha ido. La casa que estuvo en pie durante más de un siglo deja de existir en una tarde. Sobrevives, pero nunca estás completamente libre del conocimiento de que cometiste asesinato, incluso si ese asesinato liberó a otros. La distinción entre justicia y ejecución se difumina en tu mente para siempre.",
      "choices": {}
    }
  }
}

with open('src/data/translations/story-midnight-house/es.json', 'w') as f:
    json.dump(es_json, f, indent=2, ensure_ascii=False)
