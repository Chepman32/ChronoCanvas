import json

# Italian Translation
it_json = {
  "title": "La Casa di Mezzanotte",
  "description": "Un nuovo lavoro come custode in una tenuta remota diventa un incubo quando scopri gli oscuri segreti della casa. Ogni decisione determina se ne uscirai vivo.",
  "author": "Marcus Vincent",
  "nodes": {
    "node-1": {
      "title": "L'Offerta di Lavoro",
      "narration": "La tenuta si estende su dieci acri di bosco incolto. Sei arrivato questa mattina come nuovo custode, assunto senza colloquio da un uomo anziano di nome signor Ashford che ti ha guardato a malapena durante l'intervista. La villa incombe davanti a te con la sua architettura vittoriana, la vernice scrostata e le finestre scure come occhi fissi. La tua chiave scatta nella serratura. L'aria all'interno odora di polvere, vecchio legno e qualcosa di più dolce, più marcio. Nell'atrio, un biglietto sul tavolo dice: 'La cena è alle sette. Non lasciare la tua stanza dopo il tramonto. Ashford.' Sono solo le 15:00. Il tuo telefono non ha segnale. Fuori, il sole inizia la sua discesa attraverso gli alberi.",
      "choices": {
        "choice-1": { "text": "Esplorare immediatamente la villa in cerca di risposte" },
        "choice-2": { "text": "Rimanere nella tua stanza e aspettare il signor Ashford" }
      }
    },
    "node-2": {
      "title": "Corridoi Proibiti",
      "narration": "Ti muovi attraverso la casa stanza per stanza, i tuoi passi riecheggiano sui pavimenti in legno. La biblioteca contiene centinaia di libri rilegati in pelle, molti mai aperti. Nello studio, trovi una scrivania coperta di corrispondenza datata cinque anni fa, tutta indirizzata a 'Samuel Ashford'. Ma il signor Ashford ha detto che il suo nome era Marcus. Stai esaminando una fotografia di un gruppo familiare con i volti graffiati quando senti un suono dal piano di sopra. Una porta sbatte. Poi silenzio. Il tuo cuore accelera. Nel corridoio, noti una porta chiusa a chiave con graffi freschi intorno al telaio. I suoni di graffi continuano sopra, ora più lenti, deliberati. L'orologio a pendolo nell'atrio principale suona una volta, una singola nota inquietante.",
      "choices": {
        "choice-3": { "text": "Provare a scassinare la serratura della porta sospetta" },
        "choice-4": { "text": "Salire al piano di sopra per indagare sui graffi" }
      }
    },
    "node-3": {
      "title": "Sistemazione",
      "narration": "Disfi i bagagli nella stanza degli ospiti al secondo piano, con soffitti alti, un letto a baldacchino e finestre che si affacciano sulla foresta oscura. Cerchi di dormire ma riesci solo a sonnecchiare inquieto. Alle 18:45, scendi. Il signor Ashford sta aspettando nella sala da pranzo con la cena già servita: pollo arrosto, verdure e pane. Sembra diverso alla luce della lampada, più vecchio e con gli occhi infossati. 'Non hai vagato, spero', dice a bassa voce. Menti, dicendo di no. Ti studia per un lungo momento. 'Bene. La casa ha delle regole. Infrangile e te ne pentirai'. Dietro di lui, un ritratto sul muro mostra lo stesso uomo, trent'anni più giovane, in piedi tra una donna e un ragazzo. I loro volti sono stati dipinti con tratti neri. Ashford nota il tuo sguardo. La sua mascella si irrigidisce. 'Finisci di mangiare', dice freddamente.",
      "choices": {
        "choice-5": { "text": "Chiedergli direttamente del ritratto di famiglia" },
        "choice-6": { "text": "Finire di mangiare in silenzio e osservarlo attentamente" }
      }
    },
    "node-4": {
      "title": "Segreti Chiusi a Chiave",
      "narration": "La tua graffetta e la carta di credito funzionano meglio del previsto. La serratura cede dopo due minuti. La porta si apre lentamente verso l'interno. All'interno c'è una camera da letto intatta e perfettamente conservata come un museo. Una stanza da bambino. Un trenino di legno si trova su uno scaffale. Un piccolo banco di scuola contiene carta da disegno con schizzi grezzi di case e figure stilizzate. Un disegno mostra un uomo alto e un bambino piccolo con una grande X rossa sul viso del bambino. Sul comodino: un diario. Le tue mani tremano mentre lo apri. La calligrafia è infantile all'inizio, poi diventa sempre più irregolare. Ultima voce, datata vent'anni fa: 'Padre dice che sono la ragione per cui la Mamma è malata. Dice che sono malvagio. Posso sentirlo dentro di me. Posso sentirlo crescere'. Senti dei passi nel corridoio. Passi pesanti, deliberati. Si fermano fuori da questa porta.",
      "choices": {
        "choice-7": { "text": "Nascondere il diario e lasciare rapidamente la stanza" },
        "choice-8": { "text": "Affrontare Ashford direttamente quando entra" }
      }
    },
    "node-5": {
      "title": "Oscurità al Piano di Sopra",
      "narration": "La scala scricchiola ad ogni passo. Al piano di sopra, il corridoio si estende più a lungo di quanto l'esterno della casa dovrebbe permettere. Porte fiancheggiano entrambi i lati, per lo più chiuse. Il suono di graffi proviene dall'estremità lontana. Ti avvicini con cautela. Alla fine del corridoio, una stretta scala a chiocciola sale nell'ombra, un terzo piano che non avevi notato dall'esterno. Il graffio ora suona deliberato, ritmico. Spingi una porta vicina. All'interno c'è una vecchia donna seduta su un letto, le unghie insanguinate e consumate. Ha graffiato ossessivamente la struttura in legno del letto. Alza lo sguardo con occhi selvaggi e non riconoscenti. 'Mi chiude dentro', sussurra. 'Dice che sono contagiosa. Dice che li ho uccisi tutti'. Prima che tu possa rispondere, senti la voce del signor Ashford dal piano di sotto: 'La cena è pronta!' La donna ti afferra il polso con forza sorprendente. 'Non lasciare che ti prenda qui. Per favore. Ti aggiungerà alla collezione'.",
      "choices": {
        "choice-9": { "text": "Provare a liberare la donna e scappare insieme" },
        "choice-10": { "text": "Lasciarla e andare a cena per mantenere la copertura" }
      }
    },
    "node-6": {
      "title": "Domande Pericolose",
      "narration": "La forchetta di Ashford si ferma a metà strada verso la bocca. I suoi occhi diventano molto immobili, molto concentrati. 'Cosa c'è che non va?' La sua voce suona come ghiaccio che si rompe. Cerchi di ritrattare ma lui si alza bruscamente, la sua sedia raschia contro il pavimento. 'La mia famiglia non ti riguarda'. Cammina verso il ritratto e mette la mano sui volti dipinti. 'Questo è il mio fardello. La mia maledizione. E tu sei parte della soluzione o parte del problema'. Si gira verso di te. 'C'è una ragione per cui ti ho assunto senza referenze. C'è una ragione per cui sono disposto a pagare così tanto. Alcune case hanno bisogno di persone che non fanno domande. Alcune case hanno bisogno di persone che capiscano che alcuni problemi hanno una sola soluzione'. Il suo significato pende nell'aria come una minaccia. Esce dalla sala da pranzo, lasciandoti solo con il cibo mangiato a metà e la crescente certezza di aver commesso un terribile errore.",
      "choices": {
        "choice-11": { "text": "Fare le valigie e tentare di scappare" },
        "choice-12": { "text": "Stare al gioco e guadagnare la sua fiducia per scoprire la verità" }
      }
    },
    "node-7": {
      "title": "Il Peso della Conoscenza",
      "narration": "Mangi metodicamente, cercando di non fissare Ashford, ma lo sorprendi a osservarti con inquietante intensità. Le sue dita tamburellano contro il tavolo in uno schema che sembra ritualistico. Quando finisci, si alza. 'Bene. Sei adattabile. È utile'. Ti conduce a una porta che non avevi notato prima, nascosta dietro una tenda di velluto nel salotto. 'Questo è l'archivio', dice. La stanza oltre contiene fotografie che coprono ogni parete: dozzine, forse centinaia. Immagini di persone: uomini, donne, bambini, tutti con gli occhi graffiati, le bocche dipinte. Alcune foto sono ingiallite e fragili. Altre sono recenti. Al centro c'è un diario in pelle, aperto su un piedistallo come un testo sacro. La voce di Ashford diventa quasi meditativa. 'Questa casa colleziona i distrutti. Le persone che la società vuole dimenticare. Li tengo qui. Do loro uno scopo'. La sua mano si muove verso di te, e realizzi con orrore che questa non è una spiegazione. È un'iniziazione.",
      "choices": {
        "choice-13": { "text": "Correre alla porta d'ingresso e scappare immediatamente" },
        "choice-14": { "text": "Fingere di essere impressionato dalla sua collezione" }
      }
    },
    "node-8": {
      "title": "Fuga per un Pelo",
      "narration": "Infilate il diario sotto la camicia e chiudi piano la porta proprio mentre i passi raggiungono il corridoio. Attraverso una fessura nella porta, vedi passare Ashford, che porta un vassoio con del cibo. Non si ferma. Aspetti cinque minuti agonizzanti prima di avventurarti fuori. Il tuo cuore batte forte mentre torni nella tua stanza. All'interno, esamini finalmente il diario più a fondo. Le ultime pagine sono diverse dalle prime voci infantili. Sono scritte con inchiostro rosso, e la calligrafia non è di un bambino. Sono scritte dalla mano di Ashford. Voci datate solo mesi fa: 'Lui torna ogni notte. Nelle pareti. Nel buio. Sussurra di quello che gli ho fatto. Mi dice di finire ciò che ho iniziato. Di completare la collezione. Di portare altri qui in modo che possa nutrirsi'. Senti movimenti nelle pareti dietro la testata del letto. Graffi. Sussurri. La parola 'padre' ripetuta ancora e ancora. La tua stanza sembra improvvisamente molto meno sicura di quanto pensassi.",
      "choices": {
        "choice-15": { "text": "Cercare prove per contattare le autorità" },
        "choice-16": { "text": "Affrontare la presenza soprannaturale nelle pareti" }
      }
    },
    "node-9": {
      "title": "Punto di Confronto",
      "narration": "La porta si apre. Il volto di Ashford impallidisce quando ti vede con il diario. Per un momento, non succede nulla. Poi qualcosa cambia nella sua espressione: non rabbia, ma qualcosa di più complesso. Disperazione, forse. Rassegnazione. 'Hai trovato la stanza di Samuel'. Chiude la porta dietro di sé silenziosamente. 'Era mio figlio. Il mio unico figlio. Sono stato duro con lui. Troppo duro. Sua madre ha cercato di fermarmi, ma l'ho convinta che stava sviluppando inclinazioni oscure. Tendenze malvagie che dovevano essere epurate'. Si siede sul bordo del letto, sembrando improvvisamente molto più vecchio. 'Si è tolta la vita piuttosto che guardare cosa gli stavo facendo. Il senso di colpa l'ha fatta impazzire prima, e poi ha usato i coltelli da cucina. Ho trovato Samuel tre giorni dopo. Si era tolto la vita anche lui, ma non in modo pulito. Si è preso il suo tempo. Voleva che lo trovassi'. Le mani di Ashford tremano. 'Ora lui visita. Ogni notte. E porta altri con sé. Persone che conosceva. Persone che ho ferito. Mi fa documentare tutto'.",
      "choices": {
        "choice-17": { "text": "Provare ad aiutare Ashford a liberarsi dalla maledizione" },
        "choice-18": { "text": "Usare la sua confessione come leva per scappare" }
      }
    },
    "node-10": {
      "title": "La Prigioniera",
      "narration": "Provi la porta. Chiusa dall'esterno. La presa della donna sul tuo polso si stringe. 'Lui sta arrivando. Posso sentirlo sulle scale'. I passi diventano più forti. Ti guardi intorno disperatamente. La stanza ha una finestra chiusa e dipinta. Tiri forte; il telaio si scheggia ma tiene. La donna ti guarda con occhi improvvisamente acuti e concentrati. Molto diversi dalla sua espressione frenetica di poco fa. 'Stai cercando di aiutarmi', dice. Sembra un'osservazione, non una domanda. La sua bocca sorride, ma il suo viso sembra sbagliato in qualche modo, come se i muscoli non fossero del tutto allineati correttamente. 'È molto gentile. Ma io non sono quello che pensi che io sia'. La sua forma sfarfalla solo per un momento, e vedi qualcos'altro sotto la forma umana. Qualcosa che non ha il giusto numero di angoli. 'Sono qui da più tempo della casa. Più a lungo di Ashford. Lui pensa di avere il controllo, ma questo posto è mio. Lui mi nutre'. La maniglia della porta esterna inizia a girare. Hai fatto una scelta terribile.",
      "choices": {
        "choice-19": { "text": "Spingere via la creatura e trovare un'altra uscita" },
        "choice-20": { "text": "Negoziare con l'entità per la tua vita" }
      }
    },
    "node-11": {
      "title": "La Recita della Cena",
      "narration": "Lasci la donna e scendi in sala da pranzo. Ashford è già lì, servendo zuppa nelle ciotole. Non riconosce il tuo ritardo. Mangi meccanicamente, cercando di sembrare normale. I suoi occhi non ti lasciano mai. 'Immagino che tu abbia sentito qualcosa di sopra', dice infine. Non è una domanda. La tua risposta conta. Decidi di ammettere parte della verità. 'Ho sentito dei rumori. Nient'altro'. Ashford annuisce lentamente. 'La casa fa rumori. Legno vecchio che si assesta. Vento nelle travi. La mente interpreta schemi'. Versa altra zuppa nella tua ciotola nonostante tu non abbia finito. 'Sembri qualcuno che potrebbe mantenere segreti. Qualcuno che capisce che alcune verità sono troppo terribili perché il mondo le sopporti'. Si alza e cammina verso la finestra, guardando l'oscurità. 'Ce ne sono altri qui. Nella casa. Sono qui da molto tempo. Non sono vivi, ma non sono nemmeno del tutto morti. Sono intrappolati'. Si gira verso di te. 'Scapperesti se sapessi la verità? O resteresti?'",
      "choices": {
        "choice-21": { "text": "Ammettere che vuoi andartene e chiedere la paga finale" },
        "choice-22": { "text": "Dirgli che vuoi capire l'intera storia" }
      }
    },
    "node-12": {
      "title": "Partenza Affrettata",
      "narration": "Fai le valigie febbrilmente, gettando vestiti nella borsa senza cura. Le tue mani tremano mentre prendi portafoglio e chiavi dal comò. Il corridoio è buio, illuminato solo dal chiaro di luna dalle finestre. La scala è davanti: venti gradini tra te e la porta d'ingresso. Ti muovi il più velocemente possibile in silenzio. A metà strada, una porta al piano di sopra sbatte. La voce di Ashford riecheggia nella casa: 'Dove stai andando?' Ti congeli. La sua sagoma appare in cima alle scale, bloccando la tua ritirata. Non si muove, sta solo lì a respirare pesantemente. 'Ti ho dato riparo. Impiego. E questo è come mi ripaghi? Abbandonandomi nella mia ora più buia?' La sua voce si rompe leggermente sulle ultime parole. Dietro di lui, altre forme emergono nell'oscurità. Almeno tre di loro. Non si muovono come persone vive. 'Non te ne vai', dice. 'Non finché Samuel non lo permette. Ha deciso che appartieni qui ora'.",
      "choices": {
        "choice-23": { "text": "Combattere per superare Ashford verso la porta d'ingresso" },
        "choice-24": { "text": "Arrendersi e chiedere cosa vuole Samuel da te" }
      }
    },
    "node-13": {
      "title": "Costruire Fiducia",
      "narration": "Nei tre giorni successivi, stabilisci una routine attenta. Sei attento ai bisogni di Ashford, rispettoso del suo spazio, interessato alla sua storia senza sembrare troppo ansioso. Inizia ad aprirsi. Impari che Samuel era sensibile, artistico, brillante. Che Ashford è stato cresciuto da un uomo che credeva nella disciplina rigorosa e vedeva la gentilezza come debolezza. Che Ashford ha ripetuto il ciclo, non per cattiveria, ma per cieca eredità del trauma. Una sera, Ashford ti porta al terzo piano: quello che avevi intravisto ma mai esplorato. All'interno c'è uno spazio rituale. Simboli sono disegnati sul pavimento con il gesso. Fotografie rivestono le pareti. Un libro è aperto su un altare di pietra, scritto in una lingua che non riconosci. 'Samuel voleva che trovassi qualcuno', dice Ashford. 'Qualcuno abbastanza forte da eseguire il rituale che lo libererà. Per riportare lui e gli altri nel mondo dei vivi permanentemente. Richiede un sacrificio. Qualcuno disposto a dare la propria vita affinché loro possano avere la loro'. Ti guarda con speranza disperata. 'Penso che potresti essere tu. Lo farai?'",
      "choices": {
        "choice-25": { "text": "Accettare il rituale pianificando segretamente la fuga" },
        "choice-26": { "text": "Rifiutare e chiedere risposte sulle altre vittime" }
      }
    },
    "node-14": {
      "title": "Fuga Disperata",
      "narration": "Corri. La porta d'ingresso è a quindici metri. La tua mano raggiunge la maniglia e gira. È chiusa a chiave. Dal salotto, senti Ashford ridere: un suono privo di calore umano. 'Le porte non funzionano più così', chiama. 'Questa casa è stata sigillata per decenni. Non da me, intendiamoci. Da Samuel. Da ciò che Samuel è diventato. Non ti lascerà uscire perché ha fame'. Giri il catenaccio. Si muove ma la porta non si apre. Vedi ora che il telaio della porta si è deformato, il legno sembra essere cresciuto attorno ai bordi dell'apertura, sigillandola naturalmente, in modo impossibile. Dietro di te, Ashford emerge dal salotto, e non è solo. Le ombre intorno a lui si muovono con intenzione. Hanno peso e presenza. 'Eri la mia ultima possibilità', dice tristemente. 'Samuel voleva che trovassi qualcuno che corresse. Qualcuno che scegliesse la sopravvivenza rispetto all'accettazione. Ha detto che dovevo imparare che non tutti possono essere salvati'.",
      "choices": {
        "choice-27": { "text": "Cercare un'altra via d'uscita attraverso la casa" },
        "choice-28": { "text": "Affrontare Ashford e chiedere la verità su se stesso" }
      }
    },
    "node-15": {
      "title": "Falsa Accettazione",
      "narration": "Fingi fascino per la collezione, facendo domande su diverse fotografie, esprimendo ammirazione per il 'lavoro di conservazione' di Ashford. Lui si espande sotto l'attenzione, tirando giù un registro rilegato in pelle pieno di voci, date, nomi. 'Ognuno era rotto prima di arrivare', spiega. 'Perso. Sofferente. La casa offre loro pace'. Ti mostra pagine che documentano gli arrivi: date che risalgono a decenni fa, alcune voci nella sua calligrafia, altre più vecchie, in mani diverse. Le voci più antiche sono del 1947. Apre una porta verso il seminterrato della collezione. All'interno, la temperatura scende drasticamente. L'aria odora di decadimento e qualcosa di chimico. Nell'oscurità, distingui forme sugli scaffali. Capisci immediatamente e con orrore che queste non sono solo fotografie dei morti. Alcuni di loro rimangono. Conservati. Disposti come trofei. Ashford ti prende il braccio delicatamente. 'Ti ho portato qui per mostrarti che sei al sicuro. Sei scelto. La casa ti ha scelto nel momento in cui hai accettato il lavoro. E Samuel approva'. Dietro di lui, vedi movimento tra le forme conservate. Una di loro tende un braccio avvizzito verso di te.",
      "choices": {
        "choice-29": { "text": "Afferrare un oggetto pesante e attaccare Ashford" },
        "choice-30": { "text": "Accettare ciò che ti sta mostrando e chiedere di restare" }
      }
    },
    "node-16": {
      "title": "Costruire un Caso",
      "narration": "Passi il giorno successivo a cercare prove. Il tuo telefono non ha ancora segnale, ma trovi un vecchio telefono fisso nello studio. Non funziona. C'è un computer nell'ufficio di Ashford: protetto da password. Controlli la sua scrivania e trovi documenti: registri di proprietà, certificati di morte, rapporti della polizia dei decenni passati, tutti archiviati con cura, contrassegnati come 'Chiuso' o 'Nessun sospetto di atto criminale'. Un documento è una lettera di un detective datata 1987: 'L'indagine sulle denunce di persone scomparse nella proprietà non ha determinato alcuna prova di attività criminale. Il proprietario ha collaborato pienamente e fornito documentazione delle partenze volontarie degli inquilini'. Fotografi tutto con il tuo telefono, sperando che forse una volta scappato, avrai le prove. Ma le fotografie non si caricano. Nessuna rete. Mentre ti giri per lasciare l'ufficio, noti qualcosa: le finestre non sono coperte da tende. Sono coperte da quello che sembra lo stesso legno che ha sigillato la porta d'ingresso. L'intera casa viene consumata dall'interno da legno vivo, convertendola in una prigione perfetta. La domanda passa da 'Come faccio a provarlo?' a 'Come faccio a sopravvivere abbastanza a lungo da scappare?'",
      "choices": {
        "choice-31": { "text": "Tentare di tagliare attraverso le finestre sigillate" },
        "choice-32": { "text": "Trovare un altro residente e provare a organizzare la fuga" }
      }
    },
    "node-17": {
      "title": "Parlare ai Morti",
      "narration": "Premi le mani contro il muro e parli direttamente alla presenza dietro di esso. 'Samuel? Se è questo il tuo nome, voglio capire cosa ti è successo'. Il graffio si ferma. Silenzio. Poi una voce, giovane e disperata, arriva attraverso il legno come da una grande distanza: 'Lui l'ha uccisa. Ha detto che era per il suo bene, ma l'ha uccisa lentamente. Mi ha ucciso lentamente. Mi ha fatto guardare me stesso morire pezzo per pezzo'. La tua voce trema mentre chiedi: 'Cosa vuoi?' La risposta arriva immediatamente: 'Voglio che senta quello che ho sentito io. Ogni momento. Ogni giorno. Finché non capisce che la morte è misericordia'. Realizzi con certezza affondante che Samuel non è intrappolato. Lui ha il controllo. L'intera casa è sua ora: un'estensione della sua volontà, del suo dolore, del suo bisogno di punizione. 'Portami qualcuno', sussurra Samuel. 'Portami qualcuno di nuovo. Qualcuno che abbia ancora forza vitale che brucia luminosa. Se lo fai, ti lascerà andare. Puoi avere la libertà'. Le tue mani cadono dal muro. Ti è stato offerto un patto. Tradire qualcun altro o rimanere intrappolato tu stesso.",
      "choices": {
        "choice-33": { "text": "Rifiutare il patto e pianificare un'altra via di fuga" },
        "choice-34": { "text": "Accettare i termini di Samuel mentre cerchi vittime" }
      }
    },
    "node-18": {
      "title": "Il Costo della Redenzione",
      "narration": "Dici ad Ashford che credi che possa rompere il ciclo. Che l'infestazione di Samuel è una manifestazione di colpa, non una genuina presenza soprannaturale. Che con aiuto psichiatrico, farmaci, separazione dalla casa, potrebbe guarire. Ashford ascolta con crescente disperazione negli occhi, volendo così tanto credere. Si alza e cammina avanti e indietro. 'Ho provato ad andarmene. Tre volte ho fatto le valigie e sono andato via. Ogni volta, l'auto si è rotta nel giro di poche miglia. Ho camminato. Le mie gambe hanno ceduto. Ho preso medicine per far tacere le voci. Le voci sono diventate più forti'. Si risiede, sconfitto. 'La casa non mi lascerà andare perché Samuel non lo farà. Ma forse se qualcuno rimanesse volontariamente. Qualcuno forte. Qualcuno che potesse essere ciò che Samuel non poteva. Forse allora mi libererebbe'. Ti guarda direttamente. 'Resteresti? Per un anno. Solo un anno. Se potessi convincere Samuel a lasciarmi andare, ti intesterei la casa. Saresti libero di farne ciò che vuoi'. La sua offerta è allettante: potere, soldi, libertà di andarsene dopo il tempo servito. Ma qualcosa nel suo tono suggerisce che l'anno potrebbe diventare permanente.",
      "choices": {
        "choice-35": { "text": "Accettare il patto di un anno con Ashford" },
        "choice-36": { "text": "Rifiutare l'offerta e tentare una fuga violenta" }
      }
    },
    "node-19": {
      "title": "Confessione come Arma",
      "narration": "Ti alzi dal letto, tenendo ancora il diario di Samuel. 'Potrei andarmene da qui proprio ora e portarlo alla polizia. Potrei mostrare loro la tua confessione. Tutto questo finisce'. Il viso di Ashford diventa grigio. Sembra invecchiare visibilmente, le sue spalle si piegano verso l'interno. 'Potresti', concorda quietamente. 'Ma non te ne andrai'. La sua certezza è terrificante. 'Perché nel momento in cui esci da quella porta con quel diario, Samuel lo vedrà come un tradimento. Di me. Della sua storia. Ti ucciderà prima che tu raggiunga la tua auto. E se muori qui, rimarrai qui. Proprio come tutti gli altri'. Cammina verso la finestra e guarda fuori. 'Sono venuto in questa casa cercando penitenza per quello che ho fatto a mio figlio. Invece, sono diventato il suo carceriere e il suo prigioniero. Samuel non vuole più la mia sofferenza. La vuole diffusa. Condivisa. Moltiplicata'. Ashford si gira verso di te. 'Il diario è tuo se lo vuoi. Prova se puoi sopravvivere andandotene con esso. Ma la mossa più forte è bruciarlo. Perdonare ciò che è successo qui. Lasciare riposare Samuel. Allora la casa mi libererà, e forse anche te'. Tende la mano. La scelta sembra impossibile.",
      "choices": {
        "choice-37": { "text": "Bruciare il diario e fidarsi della sua promessa di redenzione" },
        "choice-38": { "text": "Tenere il diario e tentare di scappare con le prove" }
      }
    },
    "node-20": {
      "title": "Il Prezzo della Resistenza",
      "narration": "Spingi la creatura con forza. Vola all'indietro ma non cade: invece, si contorce, la sua forma si increspa come un riflesso su acqua disturbata. La sua bocca si apre in modo impossibile, e intravedi qualcosa che si contorce all'interno, qualcosa con troppi occhi. Non aspetti di vedere altro. Corri alla finestra e tiri più forte. Il telaio si scheggia ulteriormente. Le tue mani sanguinano, ma la finestra cede. Sei al secondo piano, ma c'è un tetto sotto e alberi oltre. Salti proprio mentre la creatura si lancia. Il tetto ti prende dolorosamente, togliendoti il fiato dai polmoni, ma sei vivo. Scivoli lungo la pendenza verso la grondaia. Sotto, Ashford sta nel cortile, guardando con calma. 'Correre non aiuterà', chiama verso l'alto. 'I boschi non funzionano come boschi normali. Ti ritroverai a camminare in tondo, tornando sempre alla casa'. Ma corri comunque, nell'oscurità tra gli alberi. Ha ragione. Dopo minuti di corsa, sei tornato alle mura di pietra della casa. Gli alberi sembrano bloccare ogni direzione. Sopra, la creatura sta uscendo dalla finestra. Dietro, Ashford si avvicina lentamente, quasi gentilmente. Sei intrappolato tra loro.",
      "choices": {
        "choice-39": { "text": "Esigere che Ashford ti protegga dalla creatura" },
        "choice-40": { "text": "Entrare in casa volontariamente per sembrare collaborativo" }
      }
    },
    "node-21": {
      "title": "Patto Empio",
      "narration": "Parli direttamente alla creatura, la tua voce tremante ma ferma. 'Voglio vivere. Cosa vuoi da me?' La creatura torna alla sua precedente forma umana. Quando parla, la sua voce è stratificata: più voci parlano l'una sull'altra, creando un'armonia inquietante. 'Vogliamo essere ricordati. Vogliamo che il mondo sappia che siamo esistiti. Vogliamo che le nostre morti significhino qualcosa'. Chiedi cosa intende per 'noi'. La risata della creatura riempie la stanza come vetro che si rompe. 'Tutti noi. Nelle pareti. Nella terra sotto la casa. Nelle fondamenta stesse. Non siamo fantasmi, bambino. Siamo più antichi di così. La casa non ci trattiene. Noi la tratteniamo. Ashford pensa di averci portato qui, ma ha semplicemente aperto una porta'. La creatura tende una mano, e vedi che non è avvizzita come la donna che hai visto: è giovane, bella, completamente sbagliata. 'Prendi la mia mano. Accetta di raccontare la nostra storia. Scrivila. Diffondila in modo che il mondo sappia che eravamo qui. E ti lasceremo andare. Vivo. Immutato. Solo il nostro testimone'. Dietro di te, la porta si apre. Ashford sta sulla soglia, guardando. Aspettando di vedere cosa sceglierai.",
      "choices": {
        "choice-41": { "text": "Accettare il patto della creatura per diventare la sua voce" },
        "choice-42": { "text": "Rifiutare e gettarsi dalla finestra invece" }
      }
    },
    "node-22": {
      "title": "Affrontare il Rifiuto",
      "narration": "L'espressione di Ashford si indurisce. 'Vattene allora. Vedi se mi importa'. Ma le sue mani tremano mentre si alza, e senti il sottotono di disperazione sotto le sue dure parole. 'La casa non ti lascerà andare facilmente, però. Samuel ti ha segnato ora. Sei venuto qui su sua richiesta, anche se non lo sapevi. Gli annunci sono posizionati in modi specifici, per raggiungere persone specifiche. Scelgo con cura. Sei stato scelto'. Si muove verso di te con improvvisa intensità. 'Non puoi semplicemente andartene da questo. Andarsene è una scelta, e ogni scelta che fai qui nutre la casa, ti rende più legato ad essa'. Raggiungi le chiavi della tua auto. Le tue mani tremano peggio delle sue. La porta d'ingresso si apre quando tiri la maniglia, il che vi sorprende entrambi. Sei così vicino alla libertà. Ma Ashford ti afferra il braccio, la sua presa sorprendentemente forte per la sua età. 'Almeno lasciami guidare', dice con urgenza. 'Almeno accetta questo. Un viaggio. Una conversazione. Allora ti lascerò andare. Ma devi capire cosa stai lasciando indietro. Cosa stai abbandonando'. Le sue dita affondano nel tuo polso. La scelta è se impegnarsi a scappare con ogni mezzo necessario, o ascoltarlo un'altra volta.",
      "choices": {
        "choice-43": { "text": "Liberarsi dalla presa di Ashford e guidare via" },
        "choice-44": { "text": "Accettare di lasciarsi guidare lontano dalla casa" }
      }
    },
    "node-23": {
      "title": "La Storia Completa",
      "narration": "L'intero comportamento di Ashford cambia. Sembra quasi sollevato. 'Finalmente. Qualcuno disposto ad ascoltare'. Versa due bicchieri di vino e si siede di fronte a te. Quella che segue è una storia che si svolge nel corso di ore. La casa fu costruita nel 1889 su terra che era sacra per i popoli indigeni. Il primo proprietario sigillò qualcosa sotto le fondamenta: un atto fatto per ottenere potere. Quel potere corruppe chiunque vivesse lì. Generazioni soffrirono tragedie inspiegabili, follia, morti che sembravano accidentali ma formavano schemi. Quando il padre di Ashford ereditò la proprietà, qualcosa si stava già nutrendo della famiglia. La madre di Ashford lo sentì e cercò di proteggere Samuel, ma Ashford era già infettato dall'influenza della casa. La sua crudeltà verso Samuel non era interamente sua: era la casa che si esprimeva attraverso di lui. 'Quando ho capito cosa stava succedendo, era troppo tardi', dice Ashford. 'Samuel era già troppo lontano. La cosa sotto la casa lo aveva segnato come un condotto. E ora ha segnato anche te. Il che significa che hai due scelte: combatterla e morire, o accettarla e diventare qualcosa di nuovo'.",
      "choices": {
        "choice-45": { "text": "Chiedere ad Ashford di aiutarti a combattere l'influenza della casa" },
        "choice-46": { "text": "Chiedere cosa succede se accetti e diventi un condotto" }
      }
    },
    "node-24": {
      "title": "Combattimento Disperato",
      "narration": "Lasci cadere la borsa e carichi Ashford. È più vecchio, più debole, ma le cose dietro di lui non lo sono. Ti connetti con il suo petto, ed entrambi ruzzolate giù per le scale in un groviglio di arti. La tua testa colpisce la ringhiera. Il sangue ti riempie la bocca. Raggiungi il fondo e strisci verso la porta d'ingresso. La tua mano si chiude sulla maniglia proprio mentre una delle cose d'ombra si avvolge attorno alla tua gamba. Il tocco brucia di freddo. La tua pelle diventa nera. Urli e ti liberi calciando, spalancando la porta. L'aria notturna ti colpisce il viso. Inciampi verso la tua auto, zoppicando male, trascinando a metà la gamba. Dietro di te, Ashford sta sulla soglia, stagliato contro la luce interna. 'Non andrai lontano!' grida. La tua auto parte. Acceleri lungo il lungo vialetto. Nello specchietto, la casa recede. Raggiungi la strada principale. Il tuo telefono mostra improvvisamente segnale. Chiami il 911. Mandano un'ambulanza. All'ospedale, descrivi tutto alla polizia. Ti riportano alla proprietà il giorno dopo. La casa è completamente ricoperta di vegetazione, il vialetto appena visibile, nessun segno di abitazione recente. Ashford è sparito. Le tue prove vengono liquidate come delirio indotto dal trauma. Ma l'ustione sulla tua gamba rimane: a forma esattamente di un'impronta di mano.",
      "choices": {}
    },
    "node-25": {
      "title": "Resa all'Oscurità",
      "narration": "Abbassi la borsa lentamente. 'Mi arrendo. Mi dispiace. Di' a Samuel che mi dispiace'. L'espressione di Ashford si addolcisce. Fa un cenno alle cose d'ombra, e loro si ritirano nell'oscurità. Ti guida delicatamente lontano dalle scale, di nuovo nel salotto. 'Samuel dice che accetta le tue scuse', dice Ashford quietamente. 'Dice anche che è impressionato dalla tua compostezza. Dalla tua forza. Gli piacerebbe incontrarti propriamente'. Una figura emerge dall'ombra nell'angolo: un ragazzo, non più di diciassette anni, pallido e traslucido, occhi vuoti di antica sofferenza. Questo è Samuel. Sorride, ed è il sorriso più triste che tu abbia mai visto. 'Grazie per essere venuto', dice, la sua voce come vento attraverso una tomba. 'Padre ha bisogno di qualcuno che lo ami nel modo in cui io non potevo. Ha bisogno di qualcuno che resti. Lo farai?' Realizzi che stai piangendo. Annuisci, non fidandoti della tua voce. Samuel mette la mano sulla tua spalla, e non c'è dolore, solo un freddo profondo. Senti qualcosa di fondamentale spostarsi dentro di te: non morte, ma trasformazione. Al mattino, non sei più interamente vivo, ma non sei nemmeno più interamente intrappolato. Tu e Ashford vi muovete attraverso la casa insieme, ognuno trovando conforto nella presenza dell'altro. L'infestazione diventa compagnia.",
      "choices": {}
    },
    "node-26": {
      "title": "La Camera Rituale",
      "narration": "Stai davanti all'altare con Ashford accanto a te. Il libro rituale si apre a una pagina segnata con una piuma nera. La lingua non è latino né alcuna lingua che hai incontrato. Mentre leggi le parole ad alta voce, la temperatura scende. Simboli sul pavimento iniziano a brillare. Vedi Samuel emergere: più solido di prima, quasi umano. Altre figure si materializzano intorno a lui. Ashford ti prende la mano. 'Il rituale richiede un partecipante volontario', sussurra. 'Un sacrificio di coscienza. I tuoi ricordi, la tua identità ancoreranno il cancello. Diventerai il ponte tra i mondi'. Ti stringe la mano. 'Posso prendere il tuo posto se lo desideri. Se dici le parole finali e lasci che io muoia al tuo posto'. Sei a metà dell'incantesimo. Fermarsi ora intrappolerebbe tutti, incluso te stesso. Devi completare il rituale, ma la scelta rimane: lasciare che Ashford sia il sacrificio, o farti ponte tu stesso. Il libro sembra caldo nelle tue mani. Gli altri spiriti si stringono più vicino, aspettando.",
      "choices": {
        "choice-47": { "text": "Completare il rituale con te stesso come sacrificio" },
        "choice-48": { "text": "Completare il rituale con Ashford come sacrificio" },
        "choice-49": { "text": "Distruggere il libro e fermare completamente il rituale" }
      }
    },
    "node-27": {
      "title": "Esigere la Verità",
      "narration": "Rifiuti il rituale ed esigi di vedere ogni vittima. Il viso di Ashford diventa vuoto, illeggibile. 'Stai commettendo un errore'. Ma obbedisce, guidandoti attraverso la casa come una guida turistica degli orrori. Ogni stanza contiene prove: fotografie, oggetti personali, diari, alcune stanze contengono ancora resti. Vedi che questo va avanti da decenni, coprendo molteplici 'custodi' prima di te. Ashford non è stato il primo a gestire questo posto; è solo il più recente. Quando il tour si conclude, capisci che questo non è opera di un uomo disturbato: è un'eredità, una catena di sofferenza che risale a generazioni. 'La casa corrompe chiunque rimanga troppo a lungo', spiega Ashford. 'Non ho iniziato io questo. L'ho ereditato. Ho cercato di minimizzare la sofferenza, di renderla il più umana possibile'. Ti guarda con occhi morti. 'Ma ora hai visto tutto. Ciò significa che non sei più utile. Samuel non ti lascerà andare con questa conoscenza. Ti terrà qui, e alla fine, diventerai come me'. Apre una porta. Dietro c'è oscurità e il suono di molte voci che sussurrano il tuo nome.",
      "choices": {
        "choice-50": { "text": "Spingere Ashford attraverso la porta e chiuderla a chiave dietro di lui" },
        "choice-51": { "text": "Accettare il tuo destino ed entrare con Ashford" }
      }
    },
    "node-28": {
      "title": "Esplorazione Sistematica",
      "narration": "Cerchi metodicamente le uscite. La cucina ha una porta sul retro: sigillata. Finestre del seminterrato: coperte da quel legno impossibile. Trovi una biblioteca con un balcone al secondo piano che porta a una stanza che non avevi esplorato. All'interno di quella stanza, trovi un accesso alla soffitta. La soffitta è vasta, piena di generazioni di possedimenti accumulati. Vecchi bauli, ritratti, mobili rotti. Nell'angolo lontano, trovi qualcosa di notevole: aria fresca. Una sezione del tetto è parzialmente crollata, lasciando uno spazio abbastanza grande per una persona. Sotto c'è una caduta di due piani nel cortile, ma c'è un albero vicino. Potresti farcela. Mentre ti prepari a saltare, senti la voce di Ashford dall'ingresso della soffitta: 'Mi chiedevo se l'avresti trovato'. Sta in piedi stagliato contro la luce della tromba delle scale, sembrando completamente triste. 'Ho fatto sigillare e dissigillare questa via di fuga tre volte nel corso degli anni. Ogni volta che qualcuno la trovava, dovevo lasciarli fare il tentativo. Non ho ancora mai lasciato saltare nessuno. E non credo di poterlo fare nemmeno stasera'. Si muove verso di te con velocità sorprendente per la sua età. Il divario verso la libertà è così vicino.",
      "choices": {
        "choice-52": { "text": "Saltare prima che Ashford possa raggiungerti" },
        "choice-53": { "text": "Combattere Ashford e costringerlo ad aiutarti a scappare" }
      }
    },
    "node-29": {
      "title": "Affrontare il Custode",
      "narration": "Mantieni la tua posizione. 'Chi sei veramente? Sei davvero Ashford? O sei qualcos'altro che indossa la sua pelle?' Si ferma a metà passo. Quando risponde, la sua voce è cambiata: è stratificata con toni multipli. 'Sono entrambi e nessuno. Ero Ashford una volta. Poi Samuel è entrato in me. Condividiamo questo corpo da vent'anni. A volte lui è più forte, a volte lo sono io. In questo momento, siamo d'accordo che tu appartieni qui'. Il suo corpo si contorce leggermente, e vedi due facce: una invecchiata e addolorata, una giovane e furiosa: sovrapponendo le caratteristiche l'una dell'altra. 'La casa non imprigiona le persone', la voce di Samuel emerge dalla bocca di Ashford. 'Le libera dal peso del libero arbitrio. Una volta che smetti di combattere, capirai. Sarai felice'. La voce di Ashford segue: 'Per favore. Se devo essere onesto, sono stanco. Sono così tanto stanco. Aiutami a finire questo'. Tende la mano, e vedi che sta tremando. Dietro di lui, le cose d'ombra si stringono più vicino. Sei al punto di nesso: qualunque cosa tu faccia ora determinerà non solo il tuo destino, ma il destino di tutti intrappolati in questa casa.",
      "choices": {
        "choice-54": { "text": "Prendere la mano di Ashford e abbracciare la possessione" },
        "choice-55": { "text": "Distruggere Ashford con il fuoco per finire il ciclo" }
      }
    },
    "node-30": {
      "title": "Resistenza Violenta",
      "narration": "Afferri una lampada di pietra da uno scaffale e la scagli contro la testa di Ashford con tutta la tua forza. Cade pesantemente, il sangue si accumula sotto di lui. I corpi conservati sugli scaffali iniziano a muoversi. Le loro teste si girano verso di te. Le loro bocche si aprono in urla silenziose. Corri, lasciando Ashford sanguinante nel seminterrato. Corri attraverso la casa cercando qualsiasi cosa infiammabile. In cucina, trovi liquido per accendini e fiammiferi. Inizi ad appiccare incendi: tende, mobili, la biblioteca. La casa prende fuoco rapidamente. Le fiamme si diffondono con un'avidità soprannaturale. Mentre ti dirigi verso un'uscita, il fuoco si apre intorno a te come una cosa viva, creando un corridoio verso la porta d'ingresso. Inciampi fuori e crolli sul prato. Il fuoco consuma la villa in pochi minuti. Quando arrivano i vigili del fuoco, trovano solo rovine, nessun corpo, nessuna prova degli orrori all'interno. Il corpo di Ashford è svanito. Quando la polizia ti intervista all'ospedale, spiegano che non c'è traccia di un Marcus Ashford che possieda la proprietà: è abbandonata da cinque anni. Il precedente proprietario è scomparso un decennio prima. Passi sei mesi in cura psichiatrica. Ma le ustioni sulle tue mani: dove hai maneggiato il liquido per accendini: formano schemi che sembrano inquietantemente parole. Parole che cambiano a seconda dell'angolo della luce.",
      "choices": {}
    },
    "node-31": {
      "title": "Accettazione",
      "narration": "Smetti di resistere. Hai visto cosa offre la casa: non morte, non tortura, ma trasformazione. Un luogo dove i distrutti sono curati, dove i sofferenti sono elevati, dove la solitudine finisce. Guardi Ashford con nuova comprensione. 'Voglio restare. Voglio capire cos'è la casa'. Sembra ringiovanire di dieci anni nella direzione opposta: il sollievo ammorbidisce i suoi tratti. 'Benvenuto', dice. Samuel emerge dalle ombre, e altre figure si materializzano intorno a lui. Non sono grotteschi ora: sono belli in un modo ultraterreno. Ti salutano mettendo le mani sul tuo viso, il loro tocco freddo ma non doloroso. Senti qualcosa di fondamentale spostarsi dentro di te. Le tue preoccupazioni mortali: carriera, famiglia, amici: diventano astratte, non importanti. Capisci che ora fai parte di qualcosa di più grande, qualcosa che esiste fuori dal tempo normale. I giorni si confondono senza significato. Tu e gli altri vi muovete attraverso la casa insieme, a volte assistendo Ashford nei suoi doveri di custode, a volte semplicemente esistendo negli spazi tra le pareti. Non sei più intrappolato. Sei a casa.",
      "choices": {}
    },
    "node-32": {
      "title": "Rompere i Sigilli",
      "narration": "Raccogli coltelli da cucina e passi ore a tagliare i sigilli di legno. Le tue mani sanguinano, ma fai progressi. Il legno è organico, si rigenera lentamente, ma non abbastanza velocemente da tenere il passo con il tuo assalto. A sera, hai creato un varco abbastanza grande da vedere il mondo esterno. Ashford ti trova mentre lo stai allargando ulteriormente. Osserva in silenzio per un lungo momento. 'Sei più forte di quanto Samuel si aspettasse', dice infine. 'La maggior parte delle persone si arrende dopo il primo sigillo'. Raccoglie un coltello e inizia a lavorare al tuo fianco. Insieme, tagliate abbastanza materiale da creare un'apertura. Fuori, l'aria notturna è fredda e tagliente. 'Vai', dice Ashford. 'Vattene finché puoi ancora. Vai lontano e non parlare mai di questo posto a nessuno. Se lo fai, se lasci che la casa diventi nota, non finisce il pensiero. 'Vai e basta'. Ti arrampichi attraverso, cadi nel giardino incolto sottostante e corri verso la tua auto. Questa volta, non c'è compulsione a tornare. L'auto parte all'istante. Il vialetto che sembrava impossibilmente lungo prima ora passa in pochi minuti. All'alba, sei a cento miglia di distanza, guardando l'alba su colline sconosciute, certo che nulla nella tua vita sembrerà mai più reale.",
      "choices": {}
    },
    "node-33": {
      "title": "Fuga Collettiva",
      "narration": "Trovi la vecchia donna di prima e spieghi la situazione. È lucida ora, e ti presenta altri due: un uomo che è qui da quindici anni e una donna più giovane arrivata cinque anni fa. Insieme, pianificate. La vecchia donna rivela che la casa ha un punto vulnerabile: un pozzo nel seminterrato dove il male originale fu sigillato. Se può essere disturbato, il potere della casa potrebbe indebolirsi. Voi quattro lavorate insieme per una settimana, raccogliendo segretamente materiali. Scoprite che Ashford è in realtà solidale con la vostra fuga: fornisce la chiave del seminterrato in un momento in cui l'influenza di Samuel è debole. Insieme, scendete nell'oscurità. Il pozzo è esattamente come descritto: una fossa nel nero assoluto, circondata da simboli scolpiti. Quando ci gettate dentro del ferro: vecchi ferri di cavallo e chiodi: l'intera casa trema. Le fondamenta si crepano. Ashford appare all'ingresso del seminterrato. 'Andate. Ora. Sta iniziando a crollare'. Scappate su per le scale e attraverso la porta d'ingresso mentre la casa implode dietro di voi. In seguito, i servizi di emergenza trovano le rovine vuote di corpi. Voi quattro sopravvivete, ma nessuno di voi riesce a spiegare del tutto cosa è successo. Diventate amici legati da un trauma condiviso, le uniche persone che capiscono cosa avete sopportato.",
      "choices": {}
    },
    "node-34": {
      "title": "Rifiuto Giusto",
      "narration": "Dici a Samuel chiaramente e fermamente: 'Non tradirò nessuno. Non sarò il tuo strumento di sofferenza'. Il graffio nelle pareti si ferma. Per un momento, c'è solo silenzio. Poi senti qualcosa come approvazione emanare dalle pareti, una sensazione di rispetto. Quando lasci la tua stanza e trovi Ashford, è diverso. Più calmo. 'Samuel ha parlato di te', dice con meraviglia. 'Ha detto che hai una forza che non incontrava da decenni. Forza che viene dall'integrità, non dal potere'. Ashford sembra più giovane, più leggero. 'Mi sta liberando. Per la prima volta in vent'anni, mi sta liberando'. Ma prima che possa elaborare, la casa cambia. Le porte si sigillano. Nuovi passaggi si aprono. Realizzi che il rispetto di Samuel ha trasformato la natura della casa: non è più una prigione. È un santuario per coloro che scelgono di restare. Ashford sceglie di non farlo. Ti saluta ed esce semplicemente dalla porta d'ingresso, che si apre facilmente. Tu rimani nella casa, ma per scelta ora, non per costrizione. Scopri che gli altri residenti: quando li incontri propriamente: non sono prigionieri. Alcuni si nascondono dal mondo. Alcuni perseguono studi dell'occulto. Alcuni preferiscono semplicemente la strana pace della casa al caos esterno. Diventi il loro bibliotecario, il loro archivista, e col tempo, inizi a capire il vero scopo della casa: non intrappolamento, ma santuario per gli illuminati.",
      "choices": {}
    },
    "node-35": {
      "title": "Sentiero della Corruzione",
      "narration": "Accetti il patto di Samuel. Gli porterai vittime. Inizia in piccolo: pubblichi online come reclutatore di lavoro a distanza, offrendo posizioni di custode ben pagate. La gente risponde. Conduci colloqui, controlli le referenze, tutto legittimo. Scegli con cura: persone vulnerabili, persone sole, persone senza nessuno a cui mancheranno. Le porti alla casa. Il ruolo di Ashford diminuisce mentre il tuo cresce. Passano mesi. Poi anni. Ogni persona che porti diventa un altro prigioniero, un'altra fonte di angoscia di cui Samuel può nutrirsi. E con ogni tradimento, senti qualcosa cambiare dentro di te. La casa ti sta corrompendo, sì, ma lentamente, deliberatamente, trasformandoti in qualcosa di nuovo. Stai diventando l'avatar di Samuel nel mondo dei vivi. Il tuo riflesso negli specchi ti mostra invecchiare all'indietro: la tua umanità si stacca come vecchia vernice. Un giorno, ti guardi allo specchio e non ti riconosci affatto. Assomigli a Samuel ora. Come tutte le vittime. Come qualcosa che esiste tra la morte e la vita. Sei diventato ciò che temevi di più, ma non ti importa più. La casa ti ha dato uno scopo, e quello scopo è diffondere sofferenza. Continui i tuoi sforzi di reclutamento, e la casa diventa più forte con ogni nuovo arrivo.",
      "choices": {}
    },
    "ending-1": {
      "title": "Il Sacrificio",
      "narration": "Completi il rituale con te stesso come sacrificio. Le parole del libro rituale bruciano sulla tua lingua mentre le pronunci. Il tuo sangue scorre dai polsi: realizzi che stavi tenendo il coltello, e non ricordi di aver fatto il taglio. I simboli sul pavimento brillano di luce impossibile. La tua coscienza si espande, toccando qualcosa di vasto. Samuel e gli altri tornano alla carne: vera carne, corpi vivi. Ansimano e piangono e ridono mentre la sensazione dell'esistenza fisica li travolge. Ma la tua percezione si sta frammentando. Ti stai dissolvendo, diventando parte della casa stessa. Il tuo ultimo pensiero coerente è di pace. Hai posto fine alla loro sofferenza abbracciandola tu stesso. Ma non scompari interamente. Diventi la casa. La tua coscienza permea le sue pareti, le sue fondamenta, la sua stessa struttura. Non sei più intrappolato in un luogo: sei diventato il luogo. Da questa prospettiva, capisci tutto: la storia, la sofferenza, le trasformazioni che sono avvenute tra queste mura per generazioni. Non provi dolore. Non soffri. Sei finalmente completo, finalmente intero. E quando arrivano nuovi visitatori anni dopo, sentono la tua presenza: non come minaccia, ma come custode, come guida. Non sei più l'assistente del custode. Sei diventato l'anima della casa.",
      "choices": {}
    },
    "ending-2": {
      "title": "Fuga con Cicatrici",
      "narration": "Tieni il diario e rifiuti di bruciarlo. Il viso di Ashford si indurisce. 'Allora hai scelto la tua strada'. Ti chiude nella tua stanza. Per tre giorni, sei confinato, fornito solo di pane e acqua. Durante quel tempo, senti altre voci: la voce di Samuel, e altri, che cantano in quella lingua sconosciuta. La pressione nella casa si intensifica. Sembra che le pareti si stiano chiudendo, come se la gravità stesse aumentando. Il quarto giorno, Ashford ti offre una scelta: bruciare il diario o guardarlo morire. Quando rifiuti di nuovo, lui esegue. Si impicca al lampadario della biblioteca. Ma il suo corpo non rimane morto. Si muove con movimenti a scatti, come una marionetta. Samuel lo ha reclamato completamente ora. Ciò che emerge dal cadavere di Ashford non è del tutto vivo, ed è furioso che tu abbia rifiutato il patto. Ti caccia attraverso la casa. Scappi solo sacrificando il diario: gettandolo alla creatura come distrazione. La creatura consuma le pagine in fiamme. Corri, e questa volta la porta d'ingresso si apre senza resistenza. Scappi con nient'altro che i vestiti addosso e la conoscenza di ciò a cui hai assistito. Non recuperi mai l'auto. Non recuperi mai le tue cose. Corri semplicemente nella notte e non ti guardi mai indietro. La casa ti reclama in un modo diverso: sei perseguitato dalla colpa di non aver potuto salvare Ashford dalla sua tragica scelta.",
      "choices": {}
    },
    "ending-3": {
      "title": "Sacrificio di Redenzione",
      "narration": "Pronunci le parole finali del rituale con Ashford come sacrificio. Chiude gli occhi, l'accettazione lava i suoi tratti. La magia scorre dal suo corpo invece che dal tuo. Ansima e ha le convulsioni mentre la sua essenza vitale si riversa nel cancello. Samuel e gli altri tornano alla carne, interi e vivi. Piangono sul corpo di Ashford: non con rabbia, ma con genuino dolore e gratitudine. 'Ha finalmente capito', dice Samuel. 'Finalmente accettato che la sua morte potesse avere un significato'. Stai in piedi illeso, guardando un uomo redimere la sua vita attraverso la sua fine. Le creature si prendono cura del corpo di Ashford con riverenza. Nei giorni seguenti, impari che il suo sacrificio ha cambiato radicalmente la casa. Non è più un luogo di tormento ma di equilibrio. Samuel e i suoi compagni non sono più legati dalla rabbia ma dalla gratitudine. Ti offrono una scelta: andartene e riprendere la tua vita, o restare e aiutarli. Scegli di restare. Insieme, trasformate la casa da un luogo di sofferenza in un santuario. Col tempo, accettate nuovi residenti: non come prigionieri, ma come cercatori. Arrivano persone spezzate dal mondo, e trovano guarigione nello strano abbraccio della casa. Ashford è sepolto nel giardino, sotto una pietra che dice semplicemente 'Ha Trovato Pace'. E tu curi la sua tomba, grato per il suo sacrificio finale, per la sua volontà di porre fine alla sua sofferenza affinché altri potessero guarire.",
      "choices": {}
    },
    "ending-4": {
      "title": "Rompere il Ciclo",
      "narration": "Sbatti il libro rituale chiuso e lo getti nel fuoco che arde nel braciere dell'altare. Le pagine si accendono con fiamma soprannaturale. I simboli sul pavimento si scuriscono e si crepano. Samuel e gli altri spiriti urlano: un coro di angoscia che riecheggia attraverso l'intera casa. Ashford crolla, il naso sanguinante. L'energia del rituale non ha dove fluire, quindi implode. Il terzo piano trema. La casa ha le convulsioni come qualcosa in spasmi di morte. 'Cosa hai fatto?!' strilla Samuel. La sua forma, semi-materializzata per il rituale, inizia a dissiparsi. 'Non ti lascerò intrappolarmi di nuovo! Non ti lascerò intrappolare nessun altro di nuovo!' gridi di rimando. Il potere della casa si sta rompendo. Corri al piano di sotto mentre la struttura stessa inizia a crollare. Ashford inciampa dietro di te. Raggiungete entrambi la porta d'ingresso mentre il tetto cede. Emergete nella notte proprio mentre l'intera villa implode, schiacciandosi in macerie. Quando arrivano gli investigatori, non trovano nulla di riconoscibile: solo pietre e polvere di legno. Nessun corpo. Nessuna prova. Ci vuole tempo perché le implicazioni complete affondino: rompendo il rituale, potresti aver finalmente distrutto l'entità che tormentava tutti da generazioni. Ma potresti anche averla semplicemente imprigionata più in profondità, nella pietra e nel suolo, in attesa della prossima persona abbastanza sciocca da disturbare il suo riposo.",
      "choices": {}
    },
    "ending-5": {
      "title": "Diventare il Testimone",
      "narration": "Prendi la mano della creatura. Il suo tocco è freddo, ma non doloroso. Senti la tua coscienza espandersi, toccando qualcosa di vasto e antico. Capisci tutto in una volta l'intera portata di ciò che sono le creature: non malvagie, ma spostate. Coscienza che esisteva prima della casa, che esisterà molto dopo. La casa non le ha create; ha solo dato loro una forma che gli umani potevano parzialmente comprendere. 'Grazie per averci accettato', sussurra la creatura. La sua forma si solidifica: una bella forma umana, né del tutto maschio né femmina. 'Il mondo ci ha dimenticati. La civiltà ci ha cancellati. Ma se racconti la nostra storia, saremo ricordati. È tutto ciò che abbiamo sempre voluto'. Ti senti cambiato. La tua prospettiva cambia. Non sei più perseguitato dalla paura ma guidato da uno scopo. Lasci la casa facilmente: non cerca di fermarti. Nel corso dell'anno successivo, scrivi tutto: la storia della casa, la tragedia di Samuel, la spirale di Ashford nella corruzione, l'esistenza delle antiche creature. Lo pubblichi come un romanzo. I critici lo definiscono l'opera più inquietante e bella che abbiano letto. I lettori dibattono se sia finzione o memoria. Nessuno conosce la verità tranne te, Ashford (che lo legge e finalmente capisce Samuel), e le creature che occasionalmente visitano i tuoi sogni, esprimendo gratitudine. Sei diventato la loro voce, e quella voce cambia la comprensione del mondo degli spazi tra la vita e la morte.",
      "choices": {}
    },
    "ending-6": {
      "title": "Vittoria di Pirro",
      "narration": "Trovi liquido per accendini e fiammiferi in cucina. Inondi Ashford con l'accelerante. 'Cosa stai facendo?' chiede, non cercando di scappare. 'Finisco questo', rispondi. Accendi il fiammifero. Il fuoco prende istantaneamente e si diffonde con un'avidità soprannaturale. Ashford non urla. Sta semplicemente lì, bruciando, una figura a due facce consumata dalla fiamma. Mentre il suo corpo brucia, la forma di Samuel è costretta a manifestarsi: lo vedi strappato dalla carne di Ashford, un'entità separata brevemente visibile prima che il fuoco consumi anche lui. L'intera casa reagisce. Le pareti tremano. Le finestre si frantumano. Altre figure: tutte le vittime intrappolate: iniziano a manifestarsi, le loro forme bruciano con il fuoco soprannaturale. Alcune sembrano grate. Altre urlano di rabbia. Corri dalla conflagrazione. Dietro di te, l'intera struttura viene consumata da fiamme che si diffondono più velocemente di quanto dovrebbe fare qualsiasi fuoco normale. Raggiungi la tua auto e guidi via. Ore dopo, arrivano i vigili del fuoco, ma non c'è nulla da contenere. La casa brucia fino alla cenere. Ciò che rimane è solo terra bruciata e pietre fumanti. Quando gli investigatori esaminano il sito, trovano più set di resti umani: vittime che risalgono a decenni. Ashford viene identificato tra loro. Le ossa di Samuel non vengono mai trovate, ma la sua presenza è andata. La casa che è rimasta in piedi per oltre un secolo cessa di esistere in un pomeriggio. Sopravvivi, ma non sei mai interamente libero dalla consapevolezza di aver commesso un omicidio, anche se quell'omicidio ha liberato altri. La distinzione tra giustizia ed esecuzione si confonde nella tua mente per sempre.",
      "choices": {}
    }
  }
}

with open('src/data/translations/story-midnight-house/it.json', 'w') as f:
    json.dump(it_json, f, indent=2, ensure_ascii=False)
