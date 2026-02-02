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
        };
      };
    };
  };
}

export const glassKeyProtocolStoryTranslations: Partial<Record<Language, StoryTranslations>> = {
  en: {
    title: "The Glass Key Protocol",
    description: "A noir mystery set in 1940s San Francisco. Private investigator Jack Malone must uncover the truth behind a murdered senator's son, a mysterious glass key, and a conspiracy that reaches the highest levels of power.",
    author: "Sam Vickers",
    nodes: {
      'node-1': {
        title: "The Glass Key",
        narration: "The rain falls hard on the cobblestones outside your office. You're Jack Malone, private detective, and tonight a dying man stumbled through your door with a glass key in his hand and a bullet in his chest. 'They're coming,' he gasped. 'The Protocol... it's real.' Before he died, he pressed the key into your palm. It's cold, translucent, and etched with symbols you don't recognize. Now you hear footsteps on the stairs -- heavy boots, more than one pair. The glass key burns in your pocket like a frozen ember.",
        choices: {
          'choice-1-1': { text: "Escape through the fire escape" },
          'choice-1-2': { text: "Confront whoever is coming" },
        },
      },
      'node-2': {
        title: "Fire Escape",
        narration: "You slip out the window and down the rusted fire escape just as your office door crashes open. Two men in dark overcoats enter, guns drawn. From your perch in the shadows, you see them examine the body. 'He talked,' one says. 'Find who he told. The Protocol can't be compromised.' They take the dead man's wallet and leave a matchbook on your desk -- The Blue Orchid Club. A warning or a clue? You wait until they're gone, then drop to the alley below. Rain soaks through your trench coat.",
        choices: {
          'choice-2-1': { text: "Follow the men discreetly" },
          'choice-2-2': { text: "Go to The Blue Orchid Club" },
        },
      },
      'node-3': {
        title: "Confrontation",
        narration: "You stand your ground, revolver in hand, as the door bursts open. Two men freeze in the doorway, surprised to find you armed. 'The key,' one demands. 'Hand it over and you walk away.' You recognize the type -- hired muscle. But behind them, a black sedan idles at the curb, and you glimpse a silhouetted figure watching from the back seat. Whoever they work for has money and power. You could fight, but the odds are bad. Or you could buy time with words.",
        choices: {
          'choice-3-1': { text: "Shoot and dive for cover" },
          'choice-3-2': { text: "Negotiate for information" },
        },
      },
      'node-4': {
        title: "Shadowing",
        narration: "You tail the men's sedan through rain-slicked streets to Pacific Heights, where the city's elite live behind wrought-iron gates. They enter a mansion that belongs to Senator Blackwell, a powerful figure rumored to have mob connections. From the bushes, you watch through binoculars as they report to a man in a white suit -- Vinnie 'The Ghost' Morano, the crime boss everyone fears. He's holding something glass that catches the light.",
        choices: {
          'choice-4-1': { text: "Break into the mansion" },
          'choice-4-2': { text: "Investigate the dead man's identity" },
        },
      },
      'node-5': {
        title: "The Blue Orchid Club",
        narration: "The Blue Orchid is a jazz club in the Tenderloin, all smoke and saxophones and secrets. The bartender -- Ruby who you've known for years -- goes pale when you show her the glass key. 'This is Senator Blackwell's mark. His son had one just like it before he died.' She pours you whiskey with a shaking hand. 'The Senator's daughter Clara is here now, in the back booth. She's been asking questions about her brother.'",
        choices: {
          'choice-5-1': { text: "Talk to Clara Blackwell" },
          'choice-5-2': { text: "Search the Senator's office" },
        },
      },
      'node-6': {
        title: "Gunfight",
        narration: "Your shot takes the first man in the shoulder; he drops his gun with a scream. You dive behind your desk as return fire splinters the wood. The second gunman is cautious -- professional. You kick open the secret panel and slip into the crawlspace between walls. Above, you hear them searching. 'He's got the key,' one mutters. 'Boss wants it tonight.' You emerge two buildings down, breathless, but now you're unarmed and hunted.",
        choices: {
          'choice-6-1': { text: "Go to your contact at the Chronicle" },
          'choice-6-2': { text: "Find a safe house" },
        },
      },
      'node-7': {
        title: "Negotiation",
        narration: "'Who's paying you?' you ask, keeping your gun steady. 'The Senator? Morano?' The lead gunman smirks. 'You think you're smart, detective. But you're holding something that belongs to powerful people. The Protocol isn't just a word -- it's an organization older than this city. Give us the key and you get fifty thousand dollars. Refuse...' He nods toward the dead man. '...you end up like your visitor.'",
        choices: {
          'choice-7-1': { text: "Feign agreement, then escape" },
          'choice-7-2': { text: "Refuse and bluff your way out" },
        },
      },
      'node-8': {
        title: "Mansion Infiltration",
        narration: "You scale the garden wall and slip through a servant's entrance. The mansion breathes with old money and older secrets. From the hallway, you hear Morano arguing with a woman -- educated, angry. 'My brother died because of your Protocol,' she says. 'I want out.' 'No one leaves, Clara,' Morano replies. You peek around the corner to see Morano holding a gun on Clara Blackwell -- the Senator's daughter.",
        choices: {
          'choice-8-1': { text: "Rescue Clara Blackwell" },
          'choice-8-2': { text: "Search the study for evidence" },
        },
      },
      'node-9': {
        title: "Clara Blackwell",
        narration: "Clara Blackwell is young, rich, and terrified. When you show her the glass key, she gasps. 'That's one of the seven. My brother had the seventh.' The Protocol is a secret agreement between the city's elite and organized crime. Seven keys exist; holders control voting blocks, police captains, judges. Her brother discovered the Protocol and tried to expose it. 'They killed him. Made it look like an accident.' Her hand shakes.",
        choices: {
          'choice-9-1': { text: "Agree to help Clara" },
          'choice-9-2': { text: "Investigate her brother's death first" },
        },
      },
      'node-10': {
        title: "The Chronicle",
        narration: "Your contact Eddie runs the crime beat at the Chronicle. He's skeptical until you show him the glass key. 'I've heard rumors,' he admits. 'Three deaths in six months -- all connected to Senator Blackwell. All ruled accidents.' He shows you photos: each victim held power, each died with a strange glass object nearby. 'The cops buried these cases fast.' Eddie's eyes gleam. 'Give me exclusive rights and I'll give you everything.'",
        choices: {
          'choice-10-1': { text: "Agree to Eddie's terms" },
          'choice-10-2': { text: "Decline and investigate alone" },
        },
      },
      'node-11': {
        title: "Safe House",
        narration: "You hole up in a flophouse on the waterfront, where nobody asks names. The glass key catches the dim light from a cracked window. You examine it closely -- there's a number etched on the shaft: 4. The fourth key of seven. A knock freezes your blood, but it's Detective Sam Chen from the SFPD. 'You're in deep, Jack,' he says. 'Morano's put a price on your head. But I owe you.' He hands you a file.",
        choices: {
          'choice-11-1': { text: "Ask Sam for police protection" },
          'choice-11-2': { text: "Use Sam's information" },
        },
      },
      'node-12': {
        title: "The Rescue",
        narration: "You burst in, gun drawn. Morano turns, surprise flickering -- then rage. Clara screams as shots ring out. You tackle her behind a sofa as bullets shred the upholstery. 'The back stairs,' she gasps. 'Car in the garage.' You lay down cover fire and run. Bullets follow you, but you make it to the garage -- a Packard convertible. Clara slides in, clutching a leather folio. 'Protocol members,' she pants. 'Names, accounts, everything.'",
        choices: {
          'choice-12-1': { text: "Drive to the newspaper office" },
          'choice-12-2': { text: "Hide the evidence first" },
        },
      },
      'node-13': {
        title: "The Study",
        narration: "While Morano threatens Clara, you slip into the Senator's study. A shrine to power -- photos with presidents, awards, a locked safe behind a portrait. The glass key fits perfectly into a hidden slot in the desk. A drawer slides open, revealing documents that chill your blood. The Protocol isn't just corruption -- it's a shadow government. Seven keys, seven holders, controlling everything from docks to City Hall.",
        choices: {
          'choice-13-1': { text: "Hide and continue photographing" },
          'choice-13-2': { text: "Escape with what you have" },
        },
      },
      'node-14': {
        title: "Partnership",
        narration: "Eddie's research fills in the gaps. The Protocol started during the Gold Rush -- seven businessmen controlling docks, banks, politicians. Now it's something more sinister: criminal enterprise with legal immunity. 'Here's the kicker,' Eddie says. 'Every key holder has a government position. The Mayor. The Chief of Police. Even a federal judge.' You realize the scope: exposing the Protocol means accusing the city's most powerful figures.",
        choices: {
          'choice-14-1': { text: "Run the story immediately" },
          'choice-14-2': { text: "Gather more evidence first" },
        },
      },
      'node-15': {
        title: "Solo Investigation",
        narration: "You work better alone. Thomas Reed had a sister -- Margaret, a librarian in Oakland. You find her in a small house surrounded by books. 'Thomas said someone would come,' she says, handing you a letter. The letter details how Reed discovered the Protocol while auditing the Senator's finances. Seven keys, seven million in bribes, seven murders covered up. 'The keys aren't just symbols,' Reed wrote.",
        choices: {
          'choice-15-1': { text: "Start with the largest bank" },
          'choice-15-2': { text: "Investigate the Senator directly" },
        },
      },
      'node-16': {
        title: "The Chronicle Office",
        narration: "The newspaper office buzzes with deadline energy. Eddie lays out the story -- the Protocol, the keys, the murders. Clara's folio provides names and bank accounts. Enough to indict half the city government. 'We print tonight,' Eddie says. But as the presses roll, Morano's men surround the building. They're not here to negotiate. Gunfire shatters windows. 'The basement,' Eddie shouts. 'Tunnel to the print shop.'",
        choices: {
          'choice-16-1': { text: "Escape through the tunnel" },
          'choice-16-2': { text: "Stay and protect the evidence" },
        },
      },
      'node-17': {
        title: "The Hiding Place",
        narration: "You drive to a storage locker in the Mission District -- paid for under a false name. Clara's folio goes inside, along with your photographs. 'This is our insurance,' you tell her. But as you lock the door, headlights illuminate the alley. Morano steps out of a Cadillac, flanked by gunmen. 'Smart move, Malone,' he calls. He holds up his own glass key -- number 6. 'Give me the girl and the folio, you walk away rich.'",
        choices: {
          'choice-17-1': { text: "Surrender the locker key" },
          'choice-17-2': { text: "Fight your way out" },
        },
      },
      'node-18': {
        title: "The Safe Deposit",
        narration: "The First National Bank opens at nine. You're waiting at the door with Reed's list and your glass key. The manager -- Halloway -- goes pale when you see the key. 'That box requires two keys.' He shows you the lock -- two slots, numbered 4 and 7. You have number 4. Reed had number 7, but it wasn't on his body. 'Who has the other key?' you demand. Halloway checks his register. 'Senator Blackwell collected it yesterday.'",
        choices: {
          'choice-18-1': { text: "Break into the vault at night" },
          'choice-18-2': { text: "Confront Senator Blackwell directly" },
        },
      },
      'node-19': {
        title: "The Senator",
        narration: "You find Senator Blackwell at his country club. When you approach, he doesn't seem surprised. 'Malone. I wondered when you'd find me.' He dismisses his guards. 'Walk with me, detective. The seventeenth hole is private.' On the green, he stops. 'You think I'm the villain. I'm not -- I'm a prisoner. The Protocol started with my father. I tried to leave once; they killed my wife in a 'car accident' just like my son.' He holds up key number 7.",
        choices: {
          'choice-19-1': { text: "Trust the Senator" },
          'choice-19-2': { text: "Take the key by force" },
        },
      },
      'node-20': {
        title: "The Tunnel",
        narration: "The tunnel is dark and smells of ink. You lead Clara through, clutching the folio. Behind you, gunfire echoes -- Eddie's holding them off. The tunnel opens into the print shop. 'We made it,' Clara breathes. But the door opens -- federal agents. 'Department of Justice. You're under arrest.' He takes the folio. 'This evidence is classified. The Protocol is national security.' He leans close. 'Cooperate, and you disappear to a nice prison.'",
        choices: {
          'choice-20-1': { text: "Demand to see a lawyer" },
          'choice-20-2': { text: "Agree to cooperate" },
        },
      },
      'node-21': {
        title: "Last Stand",
        narration: "You barricade the door and draw your gun. Clara helps Eddie move printing presses to create cover. 'We'll never get out alive,' she says, loading a shotgun. Morano's men break through, and the office becomes a warzone. You're pinned down, outnumbered, but presses keep running -- each copy is a bullet against the Protocol. 'One minute until distribution,' Eddie calls. Then sirens -- real police. Morano's men hesitate.",
        choices: {
          'choice-21-1': { text: "Surrender to the police" },
          'choice-21-2': { text: "Escape in the chaos" },
        },
      },
      'node-22': {
        title: "The Deal",
        narration: "You hand over the locker key. Morano smiles -- the smile of a predator who's won. 'Smart choice, Malone. You'll get your money tomorrow.' His men take Clara. 'She's not part of the deal,' you protest. Morano shrugs. 'She never was.' They drive away, leaving you alone with blood money in your future and betrayal in your heart. But you're not beaten yet. You had a duplicate key made. You can still reach the evidence.",
        choices: {
          'choice-22-1': { text: "Use the duplicate key to rescue Clara" },
          'choice-22-2': { text: "Take the money and disappear" },
        },
      },
      'node-23': {
        title: "Shootout",
        narration: "You draw and fire in one motion. Morano's shoulder erupts in blood. His men scatter as you grab Clara and run. Bullets chase you down the alley. You turn a corner and find a dead end -- a chain-link fence topped with barbed wire. Behind you, Morano's men advance. 'Climb,' you tell Clara, boosting her up. You fire to keep them back, running out of bullets. She's over the top. Your turn -- but a bullet takes you in the leg.",
        choices: {
          'choice-23-1': { text: "Tell Clara to run while you hold them off" },
          'choice-23-2': { text: "Try to climb despite the wound" },
        },
      },
      'node-24': {
        title: "The Feds",
        narration: "The federal holding cell is cold and featureless. You've been here three days. No lawyer, no phone call, no charges. Finally, a man in a gray suit enters. 'The Protocol exists because we allow it,' he says. 'It keeps order.' He sits on the bunk. 'The Senator's dead -- suicide. Morano's disappeared. Clara'll testify that you kidnapped her. Unless...' He produces a document. 'Sign this confession, take ten years, and she goes free.'",
        choices: {
          'choice-24-1': { text: "Sign the confession to save Clara" },
          'choice-24-2': { text: "Refuse and demand a real trial" },
        },
      },
      'node-25': {
        title: "The Easy Way",
        narration: "You catch a steamer to Manila under a false name. The fifty thousand dollars buys you a new life -- a house by the beach, a fishing boat. But some nights you wake up sweating, hearing Clara's screams. You read about the Senator's death -- suicide, they said. The Protocol continues, stronger than ever. Eddie's newspaper was shut down. You're alive, rich, and broken. The glass key sits on your desk. You tell yourself survival is its own victory.",
        choices: {
          'choice-25-1': { text: "Live with your choice" },
          'choice-25-2': { text: "Return to San Francisco for redemption" },
        },
      },
      'node-26': {
        title: "The Arrest",
        narration: "You surrender to the police, hands raised. They find you with smoking guns and dead men -- but they also find the evidence. For a week, it's the scandal of the century. The Protocol exposed, officials resigning, Morano arrested. You're hailed as a hero. But then the narrative shifts. Witnesses recant. Evidence disappears. You're charged with murder, conspiracy. The trial is swift. The jury is bought. The judge wears a glass key pin.",
        choices: {
          'choice-26-1': { text: "Accept the guilty verdict" },
          'choice-26-2': { text: "Attempt a prison break" },
        },
      },
      'node-27': {
        title: "The Escape",
        narration: "You run through the print shop's back corridors, Clara leading the way. She knows these streets. You emerge in Chinatown, losing yourselves in night market crowds. At a safe house, you catch your breath. 'We need to disappear,' Clara says. 'My brother had accounts in Switzerland. We can start over.' She's offering a life with her. But Eddie's story never ran. The evidence is scattered. The Protocol wins. Can you live with that?",
        choices: {
          'choice-27-1': { text: "Leave with Clara and start over" },
          'choice-27-2': { text: "Stay and fight from the shadows" },
        },
      },
      'node-28': {
        title: "Prison",
        narration: "San Quentin is cold and eternal. You've been here five years, maybe ten. Clara was released after testifying; you heard she married a diplomat. The guards know who you are -- the detective who almost brought down the city. Some respect you. Others make you pay. But you've learned to survive. You've made friends -- the kind who remember debts. One day, a new prisoner arrives. 'The Protocol is still operating. My father found evidence. They killed him.'",
        choices: {
          'choice-28-1': { text: "Train the young man to fight back" },
          'choice-28-2': { text: "Tell him to protect himself" },
        },
      },
      'node-29': {
        title: "The Return",
        narration: "You return to San Francisco under a false name. The city looks the same -- same fog, same corruption. But you've changed. Manila taught you patience. Now you operate in shadows, gathering information, building cases that can't be bought. You find Eddie -- broken, alcoholic, but still a journalist. You find Sam Chen -- demoted, bitter, but still a cop who cares. Together, you form the Glass Key Resistance. Small victories at first. But word spreads.",
        choices: {
          'choice-29-1': { text: "Escalate the campaign against the Protocol" },
          'choice-29-2': { text: "Focus on protecting the innocent" },
        },
      },
      'node-30': {
        title: "Exile",
        narration: "Switzerland is beautiful and meaningless. You and Clara live in a chalet overlooking a lake that's too blue to be real. The money lasts -- blood money, purified by distance. You learn French, ski in winter, pretend to be happy. Clara writes a memoir she'll never publish. Eddie sends letters about San Francisco. The Protocol still runs everything. Your name is forgotten. But you're alive. Together. Safe. On dark nights, you hold the glass key and wonder if cowards deserve peace.",
        choices: {
          'choice-30-1': { text: "Publish Clara's memoir" },
          'choice-30-2': { text: "Accept this life" },
        },
      },
      'node-31': {
        title: "Shadow War",
        narration: "You become a ghost. No name, no address, no face the same twice. From the shadows, you strike at the Protocol -- leaking documents, warning targets, sabotaging operations. You can't win, but you can hurt them. Each victory costs something -- a safe house burned, a contact arrested. Clara works with you for a year before the danger becomes too much. Now you work alone. They've put a million-dollar price on your head.",
        choices: {
          'choice-31-1': { text: "Launch a final assault" },
          'choice-31-2': { text: "Recruit others to continue the fight" },
        },
      },
      'node-32': {
        title: "The Mentor",
        narration: "You train the boy -- James, son of a councilman murdered by the Protocol. He's smart, angry, determined. You teach him everything. Years pass. He's released and joins the Resistance. You watch as reports come in: James exposed a corrupt judge, saved a witness. You're proud and afraid. The Protocol knows he's yours. A letter arrives -- James's handwriting: 'I'm going after the head. The man above Morano. I know who he is.'",
        choices: {
          'choice-32-1': { text: "Encourage him to finish what you started" },
          'choice-32-2': { text: "Warn him to protect himself" },
        },
      },
      'node-33': {
        title: "The Guardian",
        narration: "You focus on protection rather than attack. The Resistance becomes a shield for the innocent -- escorting witnesses, warning officials, destroying evidence. You're not heroes; you're guardians. Clara joins you -- she couldn't stay away. Together, you build something lasting: a network of good people in bad places. The Protocol can't eliminate you; you're too diffuse. Years pass. You grow old in shadows. Then a new generation arrives -- young, fierce, ready.",
        choices: {
          'choice-33-1': { text: "Pass the torch to the next generation" },
          'choice-33-2': { text: "Stay and guide them" },
        },
      },
      'node-34': {
        title: "The Memoir",
        narration: "Clara's memoir becomes an international sensation. Translated into twenty languages, discussed in parliaments. She names names, dates, crimes. The Protocol scrambles to contain the damage, but the truth has escaped. Senators resign, judges are impeached. You watch from Switzerland as the empire crumbles. But retaliation comes swiftly -- assassins, legal challenges. You're forced to move again. But as you read the headlines -- 'Corruption Ring Exposed' -- you know it was worth it.",
        choices: {
          'choice-34-1': { text: "Live out your days in peace" },
          'choice-34-2': { text: "Return to help rebuild" },
        },
      },
      'node-35': {
        title: "The Legacy",
        narration: "You recruit carefully, training others to be shadows, to resist without becoming monsters. The Resistance grows into something the Protocol can't fight -- not because it's strong, but because it\'s everywhere. When you're too old to run, you become a teacher, a legend. 'Be good, or the Glass Key will find you.' Clara returns, older, wiser. On your deathbed, you pass the glass key to the youngest recruit. 'Remember,' you whisper, 'we don't fight to win. We fight because it's right.'",
        choices: {
          'choice-35-1': { text: "Accept the end" },
          'choice-35-2': { text: "Pass leadership to the next generation" },
        },
      },
      'node-36': {
        title: "ENDING: The Revolution",
        narration: "James succeeds where you failed. He finds the man above Morano -- the federal judge who created the Protocol seventy years ago. The evidence James gathers brings down not just the organization, but the corrupt system. From your prison cell, you watch the trials on television. One by one, the powerful fall. New laws are passed. Visitors come: James, now a reformer; Clara, who never forgot you. You die an old man, still in prison, but free.",
        choices: {},
      },
      'node-37': {
        title: "ENDING: The Survivor",
        narration: "You chose survival over glory, and survival is what you got. Years in prison, decades in hiding. But you're alive when so many others aren't. The Protocol still exists -- weakened, changed. Sometimes you see the new generation fighting. But you're old now. Instead, you write -- memoirs, advice. Clara visits you in your small apartment. On your last day, she holds your hand. 'You did good, Jack,' she whispers. Not a hero's ending, but a human one. That's enough.",
        choices: {},
      },
      'node-38': {
        title: "ENDING: The New Dawn",
        narration: "You return to a changed city. The Protocol is gone -- truly gone. San Francisco reinvents itself, cleaner and more honest. You and Clara open a detective agency -- legitimate this time. The glass key hangs in your window. Young people come to you for advice. Years later, you're elected to the city council. From your office, you see the bay glittering. The fog still rolls in, but it doesn't hide monsters anymore. You did that.",
        choices: {},
      },
      'node-39': {
        title: "ENDING: The Martyr",
        narration: "The bullet was meant for Clara, but you stepped in front. You die in her arms on a dirty street, the glass key falling from your pocket. It's fitting -- you were always going to break for something. The funeral is small; the monument is large. Posthumously pardoned, celebrated, mourned. Clara writes your story, Eddie publishes it. The Protocol falls not to force but to shame. You become a symbol. You'd hate it, honestly. But symbols outlive men. One person can stand against darkness.",
        choices: {},
      },
      'node-40': {
        title: "ENDING: The Unseen Guardian",
        narration: "You never stopped fighting. No headlines, no glory, just endless nights of watching. The Resistance becomes your family. Clara stays with you until the end. You saved hundreds of lives -- each one a victory history won't record. When you finally fall, there's no funeral. Just a glass key buried with your ashes, and whispers about the phantom who protected the innocent. You were never the hero the city wanted. You were the guardian it needed. And guardians must remain unseen.",
        choices: {},
      },
    },
  },
  fr: {
    title: "Le Protocole de la Clé de Verre",
    description: "Un mystère noir dans le San Francisco des années 1940. Le détective privé Jack Malone doit découvrir la vérité derrière le meurtre du fils d'un sénateur, une mystérieuse clé de verre et une conspiration qui atteint les plus hauts niveaux du pouvoir.",
    author: "Sam Vickers",
    nodes: {
      'node-1': {
        title: "La Clé de Verre",
        narration: "La pluie tombe fort sur les pavés devant votre bureau. Vous êtes Jack Malone, détective privé, et ce soir un homme mourant a trébuché à votre porte avec une clé en verre à la main et une balle dans la poitrine. 'Ils arrivent', a-t-il haleté. 'Le Protocole... c'est réel.' Avant de mourir, il a pressé la clé dans votre paume. Elle est froide, translucide et gravée de symboles que vous ne reconnaissez pas. Maintenant, vous entendez des pas dans l'escalier -- des bottes lourdes, plus d'une paire. La clé de verre brûle dans votre poche comme une braise gelée.",
        choices: {
          'choice-1-1': { text: "S'échapper par l'escalier de secours" },
          'choice-1-2': { text: "Affronter les intrus" },
        },
      },
      'node-2': {
        title: "Escalier de Secours",
        narration: "Vous vous glissez par la fenêtre et descendez l'escalier de secours rouillé juste au moment où la porte de votre bureau s'ouvre avec fracas. Deux hommes en manteaux sombres entrent, armes au poing. De votre perchoir dans l'ombre, vous les voyez examiner le corps. 'Il a parlé', dit l'un. 'Trouvez à qui il a parlé. Le Protocole ne peut pas être compromis.' Ils prennent le portefeuille du mort et laissent une pochette d'allumettes sur votre bureau -- Le Blue Orchid Club. Un avertissement ou un indice ? Vous attendez qu'ils soient partis, puis vous vous laissez tomber dans la ruelle en contrebas. La pluie traverse votre trench-coat.",
        choices: {
          'choice-2-1': { text: "Suivre les hommes discrètement" },
          'choice-2-2': { text: "Aller au Blue Orchid Club" },
        },
      },
      'node-3': {
        title: "Confrontation",
        narration: "Vous tenez bon, revolver à la main, alors que la porte s'ouvre brutalement. Deux hommes se figent dans l'embrasure, surpris de vous trouver armé. 'La clé', exige l'un. 'Donne-la et tu repars libre.' Vous reconnaissez le genre -- des gros bras. Mais derrière eux, une berline noire tourne au ralenti sur le trottoir, et vous apercevez une silhouette qui observe depuis le siège arrière. Quiconque les emploie a de l'argent et du pouvoir. Vous pourriez vous battre, mais les chances sont mauvaises. Ou vous pourriez gagner du temps avec des mots.",
        choices: {
          'choice-3-1': { text: "Tirer et plonger à couvert" },
          'choice-3-2': { text: "Négocier pour des informations" },
        },
      },
      'node-4': {
        title: "Filature",
        narration: "Vous filez la berline des hommes à travers les rues glissantes de pluie jusqu'à Pacific Heights, où l'élite de la ville vit derrière des portails en fer forgé. Ils entrent dans un manoir appartenant au sénateur Blackwell, une figure puissante dont on dit qu'il a des liens avec la mafia. Depuis les buissons, vous observez aux jumelles alors qu'ils font leur rapport à un homme en costume blanc -- Vinnie 'The Ghost' Morano, le chef du crime que tout le monde craint. Il tient quelque chose en verre qui accroche la lumière.",
        choices: {
          'choice-4-1': { text: "S'introduire dans le manoir" },
          'choice-4-2': { text: "Enquêter sur l'identité du mort" },
        },
      },
      'node-5': {
        title: "Le Blue Orchid Club",
        narration: "Le Blue Orchid est un club de jazz dans le Tenderloin, tout en fumée, saxophones et secrets. La barmaid -- Ruby, que vous connaissez depuis des années -- pâlit quand vous lui montrez la clé en verre. 'C'est la marque du sénateur Blackwell. Son fils en avait une tout comme ça avant de mourir.' Elle vous verse un whisky d'une main tremblante. 'La fille du sénateur, Clara, est ici maintenant, dans la cabine du fond. Elle pose des questions sur son frère.'",
        choices: {
          'choice-5-1': { text: "Parler à Clara Blackwell" },
          'choice-5-2': { text: "Fouiller le bureau du sénateur" },
        },
      },
      'node-6': {
        title: "Fusillade",
        narration: "Votre tir touche le premier homme à l'épaule ; il lâche son arme avec un cri. Vous plongez derrière votre bureau alors que les tirs de riposte font éclater le bois. Le second tireur est prudent -- un professionnel. Vous ouvrez le panneau secret d'un coup de pied et vous glissez dans le vide sanitaire entre les murs. Au-dessus, vous les entendez chercher. 'Il a la clé', marmonne l'un. 'Le patron la veut ce soir.' Vous émergez deux immeubles plus loin, à bout de souffle, mais maintenant vous êtes désarmé et traqué.",
        choices: {
          'choice-6-1': { text: "Aller voir votre contact au Chronicle" },
          'choice-6-2': { text: "Trouver une planque" },
        },
      },
      'node-7': {
        title: "Négociation",
        narration: "'Qui vous paie ?' demandez-vous, gardant votre arme stable. 'Le sénateur ? Morano ?' Le chef des hommes de main sourit. 'Tu te crois malin, détective. Mais tu détiens quelque chose qui appartient à des gens puissants. Le Protocole n'est pas juste un mot -- c'est une organisation plus vieille que cette ville. Donne-nous la clé et tu as cinquante mille dollars. Refuse...' Il fait un signe de tête vers le mort. '...et tu finis comme ton visiteur.'",
        choices: {
          'choice-7-1': { text: "Feindre l'accord, puis s'échapper" },
          'choice-7-2': { text: "Refuser et bluffer pour sortir" },
        },
      },
      'node-8': {
        title: "Infiltration du Manoir",
        narration: "Vous escaladez le mur du jardin et vous glissez par une entrée de service. Le manoir respire le vieil argent et les secrets plus anciens. Du couloir, vous entendez Morano se disputer avec une femme -- éduquée, en colère. 'Mon frère est mort à cause de votre Protocole', dit-elle. 'Je veux en sortir.' 'Personne ne part, Clara', répond Morano. Vous jetez un coup d'œil au coin pour voir Morano braquer une arme sur Clara Blackwell -- la fille du sénateur.",
        choices: {
          'choice-8-1': { text: "Sauver Clara Blackwell" },
          'choice-8-2': { text: "Fouiller le bureau pour des preuves" },
        },
      },
      'node-9': {
        title: "Clara Blackwell",
        narration: "Clara Blackwell est jeune, riche et terrifiée. Quand vous lui montrez la clé en verre, elle halète. 'C'est l'une des sept. Mon frère avait la septième.' Le Protocole est un accord secret entre l'élite de la ville et le crime organisé. Sept clés existent ; les détenteurs contrôlent des blocs de votes, des capitaines de police, des juges. Son frère a découvert le Protocole et a essayé de l'exposer. 'Ils l'ont tué. Ont fait passer ça pour un accident.' Sa main tremble.",
        choices: {
          'choice-9-1': { text: "Accepter d'aider Clara" },
          'choice-9-2': { text: "Enquêter d'abord sur la mort de son frère" },
        },
      },
      'node-10': {
        title: "Le Chronicle",
        narration: "Votre contact Eddie dirige la rubrique criminelle au Chronicle. Il est sceptique jusqu'à ce que vous lui montriez la clé en verre. 'J'ai entendu des rumeurs', admet-il. 'Trois morts en six mois -- toutes liées au sénateur Blackwell. Toutes classées comme accidents.' Il vous montre des photos : chaque victime détenait du pouvoir, chacune est morte avec un étrange objet en verre à proximité. 'Les flics ont enterré ces affaires rapidement.' Les yeux d'Eddie brillent. 'Donne-moi l'exclusivité et je te donne tout.'",
        choices: {
          'choice-10-1': { text: "Accepter les conditions d'Eddie" },
          'choice-10-2': { text: "Refuser et enquêter seul" },
        },
      },
      'node-11': {
        title: "Planque",
        narration: "Vous vous terrez dans un bouge sur le front de mer, où personne ne demande de noms. La clé en verre attrape la lumière tamisée d'une fenêtre fissurée. Vous l'examinez de près -- il y a un numéro gravé sur la tige : 4. La quatrième clé sur sept. Un coup à la porte vous glace le sang, mais c'est le détective Sam Chen du SFPD. 'Tu es dans le pétrin, Jack', dit-il. 'Morano a mis ta tête à prix. Mais je te dois une fière chandelle.' Il vous tend un dossier.",
        choices: {
          'choice-11-1': { text: "Demander une protection policière à Sam" },
          'choice-11-2': { text: "Utiliser les informations de Sam" },
        },
      },
      'node-12': {
        title: "Le Sauvetage",
        narration: "Vous faites irruption, arme au poing. Morano se retourne, la surprise vacillant -- puis la rage. Clara crie alors que les coups de feu retentissent. Vous la plaquez derrière un canapé pendant que les balles déchiquettent le rembourrage. 'L'escalier de service', halète-t-elle. 'Voiture dans le garage.' Vous effectuez un tir de couverture et courez. Les balles vous suivent, mais vous atteignez le garage -- une décapotable Packard. Clara se glisse à l'intérieur, serrant un dossier en cuir. 'Membres du Protocole', halète-t-elle. 'Noms, comptes, tout.'",
        choices: {
          'choice-12-1': { text: "Conduire au bureau du journal" },
          'choice-12-2': { text: "Cacher les preuves d'abord" },
        },
      },
      'node-13': {
        title: "Le Bureau",
        narration: "Pendant que Morano menace Clara, vous vous glissez dans le bureau du sénateur. Un sanctuaire du pouvoir -- photos avec des présidents, récompenses, un coffre-fort verrouillé derrière un portrait. La clé en verre s'insère parfaitement dans une fente cachée du bureau. Un tiroir s'ouvre, révélant des documents qui vous glacent le sang. Le Protocole n'est pas juste de la corruption -- c'est un gouvernement de l'ombre. Sept clés, sept détenteurs, contrôlant tout, des quais à l'hôtel de ville.",
        choices: {
          'choice-13-1': { text: "Se cacher et continuer à photographier" },
          'choice-13-2': { text: "S'échapper avec ce que vous avez" },
        },
      },
      'node-14': {
        title: "Partenariat",
        narration: "Les recherches d'Eddie comblent les lacunes. Le Protocole a commencé pendant la Ruée vers l'Or -- sept hommes d'affaires contrôlant les quais, les banques, les politiciens. Maintenant, c'est quelque chose de plus sinistre : une entreprise criminelle avec immunité légale. 'Voici le hic', dit Eddie. 'Chaque détenteur de clé a un poste au gouvernement. Le maire. Le chef de la police. Même un juge fédéral.' Vous réalisez l'ampleur : exposer le Protocole signifie accuser les figures les plus puissantes de la ville.",
        choices: {
          'choice-14-1': { text: "Publier l'histoire immédiatement" },
          'choice-14-2': { text: "Rassembler plus de preuves d'abord" },
        },
      },
      'node-15': {
        title: "Enquête en Solo",
        narration: "Vous travaillez mieux seul. Thomas Reed avait une sœur -- Margaret, une bibliothécaire à Oakland. Vous la trouvez dans une petite maison entourée de livres. 'Thomas a dit que quelqu'un viendrait', dit-elle en vous tendant une lettre. La lettre détaille comment Reed a découvert le Protocole en auditant les finances du sénateur. Sept clés, sept millions en pots-de-vin, sept meurtres étouffés. 'Les clés ne sont pas juste des symboles', a écrit Reed.",
        choices: {
          'choice-15-1': { text: "Commencer par la plus grande banque" },
          'choice-15-2': { text: "Enquêter directement sur le sénateur" },
        },
      },
      'node-16': {
        title: "Le Bureau du Chronicle",
        narration: "Le bureau du journal bourdonne de l'énergie de l'échéance. Eddie expose l'histoire -- le Protocole, les clés, les meurtres. Le dossier de Clara fournit des noms et des comptes bancaires. Assez pour inculper la moitié du gouvernement municipal. 'On imprime ce soir', dit Eddie. Mais alors que les presses se mettent en marche, les hommes de Morano encerclent le bâtiment. Ils ne sont pas là pour négocier. Les coups de feu brisent les fenêtres. 'Le sous-sol', crie Eddie. 'Tunnel vers l'imprimerie.'",
        choices: {
          'choice-16-1': { text: "S'échapper par le tunnel" },
          'choice-16-2': { text: "Rester et protéger les preuves" },
        },
      },
      'node-17': {
        title: "La Cachette",
        narration: "Vous conduisez jusqu'à un garde-meuble dans le Mission District -- payé sous un faux nom. Le dossier de Clara va à l'intérieur, avec vos photos. 'C'est notre assurance', lui dites-vous. Mais alors que vous verrouillez la porte, des phares illuminent la ruelle. Morano sort d'une Cadillac, flanqué de gardes armés. 'Joli coup, Malone', lance-t-il. Il tient sa propre clé en verre -- numéro 6. 'Donne-moi la fille et le dossier, tu repars riche.'",
        choices: {
          'choice-17-1': { text: "Remettre la clé du garde-meuble" },
          'choice-17-2': { text: "Se frayer un chemin par la force" },
        },
      },
      'node-18': {
        title: "Le Coffre",
        narration: "La First National Bank ouvre à neuf heures. Vous attendez à la porte avec la liste de Reed et votre clé en verre. Le directeur -- Halloway -- pâlit quand vous lui montrez la clé. 'Ce coffre nécessite deux clés.' Il vous montre la serrure -- deux fentes, numérotées 4 et 7. Vous avez la numéro 4. Reed avait la numéro 7, mais elle n'était pas sur son corps. 'Qui a l'autre clé ?' exigez-vous. Halloway vérifie son registre. 'Le sénateur Blackwell l'a récupérée hier.'",
        choices: {
          'choice-18-1': { text: "S'introduire dans le coffre la nuit" },
          'choice-18-2': { text: "Affronter le sénateur Blackwell directement" },
        },
      },
      'node-19': {
        title: "Le Sénateur",
        narration: "Vous trouvez le sénateur Blackwell à son country club. Quand vous approchez, il ne semble pas surpris. 'Malone. Je me demandais quand vous me trouveriez.' Il congédie ses gardes. 'Marchez avec moi, détective. Le dix-septième trou est privé.' Sur le green, il s'arrête. 'Vous pensez que je suis le méchant. Je ne le suis pas -- je suis un prisonnier. Le Protocole a commencé avec mon père. J'ai essayé de partir une fois ; ils ont tué ma femme dans un 'accident de voiture' tout comme mon fils.' Il tient la clé numéro 7.",
        choices: {
          'choice-19-1': { text: "Faire confiance au sénateur" },
          'choice-19-2': { text: "Prendre la clé par la force" },
        },
      },
      'node-20': {
        title: "Le Tunnel",
        narration: "Le tunnel est sombre et sent l'encre. Vous guidez Clara à travers, serrant le dossier. Derrière vous, les coups de feu résonnent -- Eddie les retient. Le tunnel s'ouvre dans l'imprimerie. 'Nous avons réussi', souffle Clara. Mais la porte s'ouvre -- des agents fédéraux. 'Département de la Justice. Vous êtes en état d'arrestation.' Il prend le dossier. 'Ces preuves sont classifiées. Le Protocole est une question de sécurité nationale.' Il se penche. 'Coopérez, et vous disparaissez dans une prison agréable.'",
        choices: {
          'choice-20-1': { text: "Exiger de voir un avocat" },
          'choice-20-2': { text: "Accepter de coopérer" },
        },
      },
      'node-21': {
        title: "Dernier Carré",
        narration: "Vous barricadez la porte et sortez votre arme. Clara aide Eddie à déplacer des presses d'imprimerie pour créer un abri. 'Nous ne sortirons jamais vivants', dit-elle en chargeant un fusil de chasse. Les hommes de Morano pénètrent, et le bureau devient une zone de guerre. Vous êtes cloués au sol, en infériorité numérique, mais les presses continuent de tourner -- chaque copie est une balle contre le Protocole. 'Une minute avant la distribution', crie Eddie. Puis des sirènes -- la vraie police. Les hommes de Morano hésitent.",
        choices: {
          'choice-21-1': { text: "Se rendre à la police" },
          'choice-21-2': { text: "S'échapper dans le chaos" },
        },
      },
      'node-22': {
        title: "Le Marché",
        narration: "Vous remettez la clé du garde-meuble. Morano sourit -- le sourire d'un prédateur qui a gagné. 'Choix intelligent, Malone. Tu auras ton argent demain.' Ses hommes prennent Clara. 'Elle ne fait pas partie du marché', protestez-vous. Morano hausse les épaules. 'Elle ne l'a jamais été.' Ils s'éloignent, vous laissant seul avec l'argent du sang dans votre avenir et la trahison dans votre cœur. Mais vous n'êtes pas encore vaincu. Vous avez fait faire un double de la clé. Vous pouvez encore atteindre les preuves.",
        choices: {
          'choice-22-1': { text: "Utiliser le double pour sauver Clara" },
          'choice-22-2': { text: "Prendre l'argent et disparaître" },
        },
      },
      'node-23': {
        title: "Fusillade",
        narration: "Vous dégainez et tirez en un seul mouvement. L'épaule de Morano explose en sang. Ses hommes s'éparpillent alors que vous attrapez Clara et courez. Les balles vous pourchassent dans la ruelle. Vous tournez un coin et trouvez une impasse -- une clôture grillagée surmontée de barbelés. Derrière vous, les hommes de Morano avancent. 'Grimpe', dites-vous à Clara, la soulevant. Vous tirez pour les maintenir à distance, à court de munitions. Elle est passée. À votre tour -- mais une balle vous touche à la jambe.",
        choices: {
          'choice-23-1': { text: "Dire à Clara de courir pendant que vous les retenez" },
          'choice-23-2': { text: "Essayer de grimper malgré la blessure" },
        },
      },
      'node-24': {
        title: "Les Fédéraux",
        narration: "La cellule de détention fédérale est froide et sans ornements. Vous êtes ici depuis trois jours. Pas d'avocat, pas d'appel téléphonique, pas d'accusations. Finalement, un homme en costume gris entre. 'Le Protocole existe parce que nous le permettons', dit-il. 'Il maintient l'ordre.' Il s'assoit sur la couchette. 'Le sénateur est mort -- suicide. Morano a disparu. Clara témoignera que vous l'avez kidnappée. À moins que...' Il produit un document. 'Signez ces aveux, prenez dix ans, et elle est libre.'",
        choices: {
          'choice-24-1': { text: "Signer les aveux pour sauver Clara" },
          'choice-24-2': { text: "Refuser et exiger un vrai procès" },
        },
      },
      'node-25': {
        title: "La Facilité",
        narration: "Vous prenez un vapeur pour Manille sous un faux nom. Les cinquante mille dollars vous achètent une nouvelle vie -- une maison sur la plage, un bateau de pêche. Mais certaines nuits, vous vous réveillez en sueur, entendant les cris de Clara. Vous lisez sur la mort du sénateur -- suicide, ont-ils dit. Le Protocole continue, plus fort que jamais. Le journal d'Eddie a été fermé. Vous êtes vivant, riche et brisé. La clé en verre repose sur votre bureau. Vous vous dites que la survie est sa propre victoire.",
        choices: {
          'choice-25-1': { text: "Vivre avec votre choix" },
          'choice-25-2': { text: "Retourner à San Francisco pour la rédemption" },
        },
      },
      'node-26': {
        title: "L'Arrestation",
        narration: "Vous vous rendez à la police, mains en l'air. Ils vous trouvent avec des armes fumantes et des hommes morts -- mais ils trouvent aussi les preuves. Pendant une semaine, c'est le scandale du siècle. Le Protocole exposé, des fonctionnaires démissionnent, Morano arrêté. Vous êtes salué comme un héros. Mais ensuite, le récit change. Les témoins se rétractent. Les preuves disparaissent. Vous êtes accusé de meurtre, de complot. Le procès est rapide. Le jury est acheté. Le juge porte une épingle en forme de clé en verre.",
        choices: {
          'choice-26-1': { text: "Accepter le verdict de culpabilité" },
          'choice-26-2': { text: "Tenter une évasion de prison" },
        },
      },
      'node-27': {
        title: "L'Évasion",
        narration: "Vous courez à travers les couloirs arrière de l'imprimerie, Clara ouvrant la voie. Elle connaît ces rues. Vous émergez à Chinatown, vous perdant dans la foule du marché de nuit. Dans une planque, vous reprenez votre souffle. 'Nous devons disparaître', dit Clara. 'Mon frère avait des comptes en Suisse. Nous pouvons recommencer.' Elle offre une vie avec elle. Mais l'histoire d'Eddie n'a jamais été publiée. Les preuves sont éparpillées. Le Protocole gagne. Pouvez-vous vivre avec ça ?",
        choices: {
          'choice-27-1': { text: "Partir avec Clara et recommencer" },
          'choice-27-2': { text: "Rester et se battre depuis les ombres" },
        },
      },
      'node-28': {
        title: "Prison",
        narration: "San Quentin est froid et éternel. Vous êtes ici depuis cinq ans, peut-être dix. Clara a été libérée après avoir témoigné ; vous avez entendu dire qu'elle a épousé un diplomate. Les gardes savent qui vous êtes -- le détective qui a failli faire tomber la ville. Certains vous respectent. D'autres vous le font payer. Mais vous avez appris à survivre. Vous vous êtes fait des amis -- le genre qui se souvient des dettes. Un jour, un nouveau prisonnier arrive. 'Le Protocole opère toujours. Mon père a trouvé des preuves. Ils l'ont tué.'",
        choices: {
          'choice-28-1': { text: "Former le jeune homme à riposter" },
          'choice-28-2': { text: "Lui dire de se protéger" },
        },
      },
      'node-29': {
        title: "Le Retour",
        narration: "Vous retournez à San Francisco sous un faux nom. La ville semble la même -- même brouillard, même corruption. Mais vous avez changé. Manille vous a appris la patience. Maintenant vous opérez dans l'ombre, rassemblant des informations, montant des dossiers qui ne peuvent pas être achetés. Vous trouvez Eddie -- brisé, alcoolique, mais toujours journaliste. Vous trouvez Sam Chen -- rétrogradé, amer, mais toujours un flic qui se soucie des choses. Ensemble, vous formez la Résistance de la Clé de Verre. De petites victoires au début. Mais le mot se répand.",
        choices: {
          'choice-29-1': { text: "Intensifier la campagne contre le Protocole" },
          'choice-29-2': { text: "Se concentrer sur la protection des innocents" },
        },
      },
      'node-30': {
        title: "Exil",
        narration: "La Suisse est belle et vide de sens. Vous et Clara vivez dans un chalet surplombant un lac trop bleu pour être réel. L'argent suffit -- l'argent du sang, nettoyé par la distance. Vous apprenez le français, skiez en hiver, faites semblant d'être heureux. Clara écrit des mémoires qu'elle ne publiera jamais. Eddie envoie des lettres sur San Francisco. Le Protocole dirige toujours tout. Votre nom est oublié. Mais vous êtes vivant. Ensemble. En sécurité. Les nuits sombres, vous tenez la clé en verre et vous demandez si les lâches méritent la paix.",
        choices: {
          'choice-30-1': { text: "Publier les mémoires de Clara" },
          'choice-30-2': { text: "Accepter cette vie" },
        },
      },
      'node-31': {
        title: "Guerre de l'Ombre",
        narration: "Vous devenez un fantôme. Pas de nom, pas d'adresse, jamais le même visage deux fois. Depuis les ombres, vous frappez le Protocole -- fuites de documents, avertissements aux cibles, sabotage d'opérations. Vous ne pouvez pas gagner, mais vous pouvez leur faire mal. Chaque victoire coûte quelque chose -- une planque brûlée, un contact arrêté. Clara travaille avec vous pendant un an avant que le danger ne devienne trop grand. Maintenant vous travaillez seul. Vous avez un prix d'un million de dollars sur votre tête.",
        choices: {
          'choice-31-1': { text: "Lancer un assaut final" },
          'choice-31-2': { text: "Recruter d'autres pour continuer le combat" },
        },
      },
      'node-32': {
        title: "Le Mentor",
        narration: "Vous formez le garçon -- James, fils d'un conseiller municipal assassiné par le Protocole. Il est intelligent, en colère, déterminé. Vous lui apprenez tout. Les années passent. Il est libéré et rejoint la résistance. Vous regardez les rapports arriver : James a exposé un juge corrompu, sauvé un témoin. Vous êtes fier et effrayé. Le Protocole sait qu'il est à vous. Une lettre arrive -- l'écriture de James : 'Je m'attaque à la tête. L'homme au-dessus de Morano. Je sais qui c'est.'",
        choices: {
          'choice-32-1': { text: "L'encourager à finir ce que vous avez commencé" },
          'choice-32-2': { text: "Le prévenir de se protéger" },
        },
      },
      'node-33': {
        title: "Le Gardien",
        narration: "Vous vous concentrez sur la protection plutôt que l'attaque. La résistance devient un bouclier pour les innocents -- escorter les témoins, avertir les fonctionnaires, détruire les preuves. Vous n'êtes pas des héros ; vous êtes des gardiens. Clara vous rejoint -- elle ne pouvait pas rester à l'écart. Ensemble, vous construisez quelque chose de durable : un réseau de bonnes personnes dans de mauvais endroits. Le Protocole ne peut pas vous éliminer ; vous êtes trop dispersés. Les années passent. Vous vieillissez dans l'ombre. Puis une nouvelle génération arrive -- jeune, féroce, prête.",
        choices: {
          'choice-33-1': { text: "Passer le flambeau à la prochaine génération" },
          'choice-33-2': { text: "Rester et les guider" },
        },
      },
      'node-34': {
        title: "Les Mémoires",
        narration: "Les mémoires de Clara deviennent une sensation internationale. Traduits en vingt langues, discutés dans les parlements. Elle donne des noms, des dates, des crimes. Le Protocole s'efforce de limiter les dégâts, mais la vérité s'est échappée. Des sénateurs démissionnent, des juges sont destitués. Vous regardez depuis la Suisse l'empire s'effondrer. Mais la vengeance arrive vite -- assassins, défis juridiques. Vous êtes forcé de déménager à nouveau. Mais en lisant les gros titres -- 'Réseau de corruption exposé' -- vous savez que cela en valait la peine.",
        choices: {
          'choice-34-1': { text: "Vivre vos jours en paix" },
          'choice-34-2': { text: "Retourner pour aider à la reconstruction" },
        },
      },
      'node-35': {
        title: "L'Héritage",
        narration: "Vous recrutez prudemment, formez les autres à être des ombres, à résister sans devenir des monstres. La résistance devient quelque chose que le Protocole ne peut pas combattre -- non pas parce qu'elle est forte, mais parce qu'elle est partout. Quand vous êtes trop vieux pour courir, vous devenez un enseignant, une légende. 'Sois bon, ou la Clé de Verre te trouvera.' Clara revient, plus âgée, plus sage. Sur votre lit de mort, vous passez la clé en verre à la plus jeune recrue. 'Souviens-toi', murmurez-vous, 'nous ne nous battons pas pour gagner. Nous nous battons parce que c'est juste.'",
        choices: {
          'choice-35-1': { text: "Accepter la fin" },
          'choice-35-2': { text: "Passer le commandement à la prochaine génération" },
        },
      },
      'node-36': {
        title: "FIN : La Révolution",
        narration: "James réussit là où vous avez échoué. Il trouve l'homme au-dessus de Morano -- le juge fédéral qui a créé le Protocole il y a soixante-dix ans. Les preuves que James rassemble font tomber non seulement l'organisation, mais le système corrompu. De votre cellule de prison, vous regardez les procès à la télévision. Un par un, les puissants tombent. De nouvelles lois sont adoptées. Des visiteurs viennent : James, maintenant un réformateur ; Clara, qui ne vous a jamais oublié. Vous mourez en vieil homme, toujours en prison, mais libre.",
        choices: {},
      },
      'node-37': {
        title: "FIN : Le Survivant",
        narration: "Vous avez choisi la survie plutôt que la gloire, et la survie est ce que vous avez obtenu. Des années en prison, des décennies à se cacher. Mais vous êtes vivant, alors que tant d'autres ne le sont pas. Le Protocole existe toujours -- affaibli, changé. Parfois, vous voyez la nouvelle génération se battre. Mais vous êtes vieux maintenant. À la place, vous écrivez -- des mémoires, des conseils. Clara vous rend visite dans votre petit appartement. Lors de votre dernier jour, elle vous tient la main. 'Tu as bien fait, Jack', murmure-t-elle. Pas une fin de héros, mais une fin humaine. C'est suffisant.",
        choices: {},
      },
      'node-38': {
        title: "FIN : La Nouvelle Aube",
        narration: "Vous retournez dans une ville changée. Le Protocole a disparu -- vraiment disparu. San Francisco se réinvente, plus propre et plus honnête. Vous et Clara ouvrez une agence de détectives -- légale cette fois. La clé en verre est accrochée à votre fenêtre. Des jeunes viennent vous demander conseil. Des années plus tard, vous êtes élu au conseil municipal. De votre bureau, vous voyez la baie scintiller. Le brouillard arrive toujours, mais il ne cache plus de monstres. Vous avez fait ça.",
        choices: {},
      },
      'node-39': {
        title: "FIN : Le Martyr",
        narration: "La balle était destinée à Clara, mais vous vous êtes interposé. Vous mourez dans ses bras dans une rue sale, la clé en verre tombant de votre poche. C'est approprié -- vous étiez toujours destiné à vous briser pour quelque chose. Les funérailles sont petites ; le monument est grand. Gracié à titre posthume, célébré, pleuré. Clara écrit votre histoire, Eddie la publie. Le Protocole ne tombe pas par la violence, mais par la honte. Vous devenez un symbole. Vous détesteriez ça, honnêtement. Mais les symboles survivent aux hommes. Une personne peut se dresser contre les ténèbres.",
        choices: {},
      },
      'node-40': {
        title: "FIN : Le Gardien Invisible",
        narration: "Vous n'avez jamais cessé de vous battre. Pas de gros titres, pas de gloire, juste des nuits interminables de vigilance. La résistance devient votre famille. Clara reste avec vous jusqu'à la fin. Vous avez sauvé des centaines de vies -- chacune une victoire que l'histoire n'enregistrera pas. Quand vous tombez enfin, il n'y a pas de funérailles. Juste une clé en verre, enterrée avec vos cendres, et des chuchotements sur le fantôme qui protégeait les innocents. Vous n'avez jamais été le héros que la ville voulait. Vous étiez le gardien dont elle avait besoin. Et les gardiens doivent rester invisibles.",
        choices: {},
      },
    },
  },
  ru: {
    title: "Протокол Стеклянного Ключа",
    description: "Нуарный детектив в Сан-Франциско 1940-х годов. Частный детектив Джек Мэлоун должен раскрыть правду об убийстве сына сенатора, таинственном стеклянном ключе и заговоре, достигающем высших эшелонов власти.",
    author: "Сэм Викерс",
    nodes: {
      'node-1': {
        title: "Стеклянный Ключ",
        narration: "Дождь стучит по брусчатке за окном вашего офиса. Вы — Джек Мэлоун, частный детектив, и сегодня вечером умирающий человек ввалился в вашу дверь со стеклянным ключом в руке и пулей в груди. «Они идут», — прохрипел он. «Протокол... он реален». Перед смертью он вложил ключ в вашу ладонь. Он холодный, полупрозрачный, с выгравированными символами, которых вы не узнаете. Теперь вы слышите шаги на лестнице — тяжелые ботинки, не одна пара. Стеклянный ключ жжет карман, как ледяной уголь.",
        choices: {
          'choice-1-1': { text: "Сбежать через пожарную лестницу" },
          'choice-1-2': { text: "Встретить незваных гостей" },
        },
      },
      'node-2': {
        title: "Пожарная Лестница",
        narration: "Вы выскальзываете в окно и спускаетесь по ржавой пожарной лестнице как раз в тот момент, когда дверь вашего офиса с грохотом распахивается. Входят двое мужчин в темных пальто с оружием наготове. С вашего насеста в тени вы видите, как они осматривают тело. «Он говорил», — говорит один. «Найди, кому он рассказал. Протокол не может быть скомпрометирован». Они забирают бумажник мертвеца и оставляют на вашем столе коробок спичек — клуб «Синяя Орхидея». Предупреждение или улика? Вы ждете, пока они уйдут, затем спрыгиваете в переулок. Дождь пропитывает ваш плащ.",
        choices: {
          'choice-2-1': { text: "Следить за мужчинами незаметно" },
          'choice-2-2': { text: "Отправиться в клуб «Синяя Орхидея»" },
        },
      },
      'node-3': {
        title: "Противостояние",
        narration: "Вы стоите на своем, револьвер в руке, когда дверь распахивается. Двое мужчин замирают в дверях, удивленные тем, что вы вооружены. «Ключ», — требует один. «Отдай его, и ты уйдешь». Вы узнаете этот тип — наемные громилы. Но за ними у бордюра стоит черный седан, и вы замечаете силуэт, наблюдающий с заднего сиденья. У того, на кого они работают, есть деньги и власть. Вы могли бы драться, но шансы плохи. Или вы могли бы выиграть время словами.",
        choices: {
          'choice-3-1': { text: "Стрелять и нырнуть в укрытие" },
          'choice-3-2': { text: "Вести переговоры ради информации" },
        },
      },
      'node-4': {
        title: "Слежка",
        narration: "Вы преследуете седан мужчин по мокрым от дождя улицам до Пасифик-Хейтс, где за коваными воротами живет городская элита. Они входят в особняк, принадлежащий сенатору Блэквеллу, влиятельной фигуре, по слухам, связанной с мафией. Из кустов вы наблюдаете в бинокль, как они докладывают человеку в белом костюме — Винни «Призраку» Морано, криминальному боссу, которого все боятся. Он держит что-то стеклянное, что ловит свет.",
        choices: {
          'choice-4-1': { text: "Проникнуть в особняк" },
          'choice-4-2': { text: "Расследовать личность убитого" },
        },
      },
      'node-5': {
        title: "Клуб «Синяя Орхидея»",
        narration: "«Синяя Орхидея» — это джаз-клуб в Тендерлойне, весь в дыму, саксофонах и тайнах. Барменша — Руби, которую вы знаете много лет — бледнеет, когда вы показываете ей стеклянный ключ. «Это метка сенатора Блэквелла. У его сына был такой же перед смертью». Она наливает вам виски дрожащей рукой. «Дочь сенатора Клара сейчас здесь, в задней кабинке. Она задавала вопросы о своем брате».",
        choices: {
          'choice-5-1': { text: "Поговорить с Кларой Блэквелл" },
          'choice-5-2': { text: "Обыскать офис сенатора" },
        },
      },
      'node-6': {
        title: "Перестрелка",
        narration: "Ваш выстрел попадает первому мужчине в плечо; он роняет пистолет с криком. Вы ныряете за свой стол, когда ответный огонь щепит дерево. Второй стрелок осторожен — профессионал. Вы выбиваете секретную панель и проскальзываете в лаз между стенами. Наверху вы слышите, как они ищут. «У него ключ», — бормочет один. «Босс хочет его сегодня вечером». Вы появляетесь через два здания, запыхавшись, но теперь вы безоружны, и на вас ведется охота.",
        choices: {
          'choice-6-1': { text: "Идти к контакту в «Хрониках»" },
          'choice-6-2': { text: "Найти безопасное место" },
        },
      },
      'node-7': {
        title: "Переговоры",
        narration: "«Кто вам платит?» — спрашиваете вы, держа пистолет ровно. «Сенатор? Морано?» Главный стрелок ухмыляется. «Ты думаешь, ты умный, детектив. Но ты держишь то, что принадлежит могущественным людям. Протокол — это не просто слово, это организация старше этого города. Отдай нам ключ, и получишь пятьдесят тысяч долларов. Откажешься...» Он кивает на мертвеца. «...закончишь как твой посетитель».",
        choices: {
          'choice-7-1': { text: "Притвориться согласным, затем сбежать" },
          'choice-7-2': { text: "Отказаться и блефовать" },
        },
      },
      'node-8': {
        title: "Проникновение в Особняк",
        narration: "Вы перелезаете через садовую стену и проскальзываете через вход для слуг. Особняк дышит старыми деньгами и еще более старыми тайнами. Из коридора вы слышите, как Морано спорит с женщиной — образованной, сердитой. «Мой брат умер из-за вашего Протокола», — говорит она. «Я хочу выйти». «Никто не уходит, Клара», — отвечает Морано. Вы выглядываете из-за угла и видите, как Морано держит на мушке Клару Блэквелл — дочь сенатора.",
        choices: {
          'choice-8-1': { text: "Спасти Клару Блэквелл" },
          'choice-8-2': { text: "Обыскать кабинет ради улик" },
        },
      },
      'node-9': {
        title: "Клара Блэквелл",
        narration: "Клара Блэквелл молода, богата и напугана. Когда вы показываете ей стеклянный ключ, она ахает. «Это один из семи. У моего брата был седьмой». Протокол — это тайное соглашение между элитой города и организованной преступностью. Существует семь ключей; держатели контролируют блоки голосов, капитанов полиции, судей. Ее брат раскрыл Протокол и попытался разоблачить его. «Они убили его. Сделали так, чтобы это выглядело как несчастный случай». Ее рука дрожит.",
        choices: {
          'choice-9-1': { text: "Согласиться помочь Кларе" },
          'choice-9-2': { text: "Сначала расследовать смерть брата" },
        },
      },
      'node-10': {
        title: "Хроники",
        narration: "Ваш контакт Эдди ведет криминальную хронику. Он скептичен, пока вы не показываете ему стеклянный ключ. «Я слышал слухи», — признает он. «Три смерти за шесть месяцев — все связаны с сенатором Блэквеллом. Все признаны несчастными случаями». Он показывает вам фото: каждая жертва обладала властью, каждая умерла рядом со странным стеклянным предметом. «Копы быстро закрыли эти дела». Глаза Эдди блестят. «Дай мне эксклюзивные права, и я дам тебе все».",
        choices: {
          'choice-10-1': { text: "Согласиться на условия Эдди" },
          'choice-10-2': { text: "Отказаться и расследовать в одиночку" },
        },
      },
      'node-11': {
        title: "Безопасное Место",
        narration: "Вы отсиживаетесь в ночлежке на набережной, где никто не спрашивает имен. Стеклянный ключ ловит тусклый свет из треснувшего окна. Вы внимательно осматриваете его — на стержне выгравирован номер: 4. Четвертый ключ из семи. Стук в дверь леденит кровь, но это детектив Сэм Чен из полиции Сан-Франциско. «Ты по уши влип, Джек», — говорит он. «Морано назначил цену за твою голову. Но я тебе должен». Он протягивает вам папку.",
        choices: {
          'choice-11-1': { text: "Попросить Сэма о полицейской защите" },
          'choice-11-2': { text: "Использовать информацию Сэма" },
        },
      },
      'node-12': {
        title: "Спасение",
        narration: "Вы врываетесь с пистолетом наготове. Морано оборачивается, мелькает удивление — затем ярость. Клара кричит, когда раздаются выстрелы. Вы валите ее за диван, пока пули рвут обивку. «Задняя лестница», — выдыхает она. «Машина в гараже». Вы ведете прикрывающий огонь и бежите. Пули преследуют вас, но вы добираетесь до гаража — кабриолет Паккард. Клара скользит внутрь, сжимая кожаную папку. «Члены Протокола», — тяжело дышит она. «Имена, счета, все».",
        choices: {
          'choice-12-1': { text: "Ехать в редакцию газеты" },
          'choice-12-2': { text: "Сначала спрятать улики" },
        },
      },
      'node-13': {
        title: "Кабинет",
        narration: "Пока Морано угрожает Кларе, вы проскальзываете в кабинет сенатора. Святилище власти — фото с президентами, награды, сейф за портретом. Стеклянный ключ идеально подходит к скрытому слоту в столе. Ящик выдвигается, открывая документы, от которых стынет кровь. Протокол — это не просто коррупция, это теневое правительство. Семь ключей, семь держателей, контролирующих все от доков до мэрии.",
        choices: {
          'choice-13-1': { text: "Спрятаться и продолжить фотографировать" },
          'choice-13-2': { text: "Сбежать с тем, что есть" },
        },
      },
      'node-14': {
        title: "Партнерство",
        narration: "Исследование Эдди заполняет пробелы. Протокол начался во времена Золотой лихорадки — семь бизнесменов контролировали доки, банки, политиков. Теперь это нечто более зловещее: преступное предприятие с юридическим иммунитетом. «Вот в чем соль», — говорит Эдди. «У каждого держателя ключа есть государственная должность. Мэр. Шеф полиции. Даже федеральный судья». Вы понимаете масштаб: разоблачение Протокола означает обвинение самых влиятельных фигур города.",
        choices: {
          'choice-14-1': { text: "Запустить историю немедленно" },
          'choice-14-2': { text: "Собрать больше улик" },
        },
      },
      'node-15': {
        title: "Одиночное Расследование",
        narration: "Вы лучше работаете в одиночку. У Томаса Рида была сестра — Маргарет, библиотекарь в Окленде. Вы находите ее в маленьком домике, окруженном книгами. «Томас сказал, что кто-то придет», — говорит она, протягивая вам письмо. Письмо подробно описывает, как Рид раскрыл Протокол, проводя аудит финансов сенатора. Семь ключей, семь миллионов взяток, семь скрытых убийств. «Ключи — это не просто символы», — писал Рид.",
        choices: {
          'choice-15-1': { text: "Начать с крупнейшего банка" },
          'choice-15-2': { text: "Расследовать сенатора напрямую" },
        },
      },
      'node-16': {
        title: "Офис Хроник",
        narration: "Офис газеты гудит от энергии дедлайна. Эдди выкладывает историю — Протокол, ключи, убийства. Папка Клары предоставляет имена и банковские счета. Достаточно, чтобы обвинить половину городского правительства. «Печатаем сегодня вечером», — говорит Эдди. Но когда прессы запускаются, люди Морано окружают здание. Они здесь не для переговоров. Выстрелы разбивают окна. «Подвал», — кричит Эдди. «Тоннель в типографию».",
        choices: {
          'choice-16-1': { text: "Сбежать через тоннель" },
          'choice-16-2': { text: "Остаться и защитить улики" },
        },
      },
      'node-17': {
        title: "Укрытие",
        narration: "Вы едете к камере хранения в Мишн-Дистрикт — оплаченной под вымышленным именем. Папка Клары отправляется внутрь вместе с вашими фотографиями. «Это наша страховка», — говорите вы ей. Но когда вы запираете дверь, фары освещают переулок. Морано выходит из Кадиллака в сопровождении стрелков. «Умный ход, Мэлоун», — кричит он. Он поднимает свой собственный стеклянный ключ — номер 6. «Отдай мне девчонку и папку, и уйдешь богатым».",
        choices: {
          'choice-17-1': { text: "Отдать ключ от ячейки" },
          'choice-17-2': { text: "Пробиваться с боем" },
        },
      },
      'node-18': {
        title: "Банковская Ячейка",
        narration: "Первый Национальный Банк открывается в девять. Вы ждете у двери со списком Рида и своим стеклянным ключом. Управляющий — Хэллоуэй — бледнеет, увидев ключ. «Для этой ячейки нужны два ключа». Он показывает вам замок — два слота, пронумерованные 4 и 7. У вас номер 4. У Рида был номер 7, но его не было на его теле. «У кого второй ключ?» — требуете вы. Хэллоуэй проверяет свой реестр. «Сенатор Блэквелл забрал его вчера».",
        choices: {
          'choice-18-1': { text: "Вломиться в хранилище ночью" },
          'choice-18-2': { text: "Противостоять сенатору Блэквеллу напрямую" },
        },
      },
      'node-19': {
        title: "Сенатор",
        narration: "Вы находите сенатора Блэквелла в его загородном клубе. Когда вы подходите, он не кажется удивленным. «Мэлоун. Я гадал, когда вы меня найдете». Он отсылает охрану. «Пройдитесь со мной, детектив. Семнадцатая лунка — частная». На грине он останавливается. «Вы думаете, я злодей. Я нет — я заключенный. Протокол начался с моего отца. Я пытался уйти однажды; они убили мою жену в 'автокатастрофе', как и моего сына». Он поднимает ключ номер 7.",
        choices: {
          'choice-19-1': { text: "Поверить сенатору" },
          'choice-19-2': { text: "Забрать ключ силой" },
        },
      },
      'node-20': {
        title: "Тоннель",
        narration: "Тоннель темный и пахнет чернилами. Вы ведете Клару, сжимая папку. Позади эхом отдаются выстрелы — Эдди сдерживает их. Тоннель открывается в типографию. «Мы сделали это», — выдыхает Клара. Но дверь открывается — федеральные агенты. «Министерство юстиции. Вы арестованы». Он забирает папку. «Эти улики засекречены. Протокол — это национальная безопасность». Он наклоняется близко. «Сотрудничай, и исчезнешь в хорошую тюрьму».",
        choices: {
          'choice-20-1': { text: "Требовать адвоката" },
          'choice-20-2': { text: "Согласиться сотрудничать" },
        },
      },
      'node-21': {
        title: "Последний Рубеж",
        narration: "Вы баррикадируете дверь и достаете пистолет. Клара помогает Эдди двигать печатные станки, чтобы создать укрытие. «Мы никогда не выберемся живыми», — говорит она, заряжая дробовик. Люди Морано прорываются, и офис превращается в зону боевых действий. Вы прижаты, в меньшинстве, но прессы продолжают работать — каждая копия — пуля против Протокола. «Одна минута до распространения», — кричит Эдди. Затем сирены — настоящая полиция. Люди Морано колеблются.",
        choices: {
          'choice-21-1': { text: "Сдаться полиции" },
          'choice-21-2': { text: "Сбежать в хаосе" },
        },
      },
      'node-22': {
        title: "Сделка",
        narration: "Вы отдаете ключ от ячейки. Морано улыбается — улыбкой хищника, который победил. «Умный выбор, Мэлоун. Получишь свои деньги завтра». Его люди забирают Клару. «Она не часть сделки», — протестуете вы. Морано пожимает плечами. «Она никогда и не была». Они уезжают, оставляя вас одного с кровавыми деньгами в будущем и предательством в сердце. Но вы еще не побеждены. Вы сделали дубликат ключа. Вы все еще можете добраться до улик.",
        choices: {
          'choice-22-1': { text: "Использовать дубликат, чтобы спасти Клару" },
          'choice-22-2': { text: "Взять деньги и исчезнуть" },
        },
      },
      'node-23': {
        title: "Перестрелка",
        narration: "Вы выхватываете оружие и стреляете одним движением. Плечо Морано взрывается кровью. Его люди разбегаются, когда вы хватаете Клару и бежите. Пули преследуют вас по переулку. Вы поворачиваете за угол и находите тупик — забор из рабицы с колючей проволокой. Позади наступают люди Морано. «Лезь», — говорите вы Кларе, подсаживая ее. Вы стреляете, чтобы сдержать их, патроны заканчиваются. Она перелезла. Ваша очередь — но пуля попадает вам в ногу.",
        choices: {
          'choice-23-1': { text: "Велеть Кларе бежать, пока вы их задерживаете" },
          'choice-23-2': { text: "Попытаться перелезть, несмотря на рану" },
        },
      },
      'node-24': {
        title: "Федералы",
        narration: "Федеральная камера холодная и безликая. Вы здесь три дня. Ни адвоката, ни звонка, ни обвинений. Наконец, входит человек в сером костюме. «Протокол существует, потому что мы это позволяем», — говорит он. «Он поддерживает порядок». Он садится на койку. «Сенатор мертв — самоубийство. Морано исчез. Клара даст показания, что вы ее похитили. Если только...» Он достает документ. «Подпиши это признание, получи десять лет, и она выйдет на свободу».",
        choices: {
          'choice-24-1': { text: "Подписать признание, чтобы спасти Клару" },
          'choice-24-2': { text: "Отказаться и требовать настоящего суда" },
        },
      },
      'node-25': {
        title: "Легкий Путь",
        narration: "Вы садитесь на пароход до Манилы под вымышленным именем. Пятьдесят тысяч долларов покупают вам новую жизнь — дом у пляжа, рыбацкую лодку. Но иногда по ночам вы просыпаетесь в поту, слыша крики Клары. Вы читаете о смерти сенатора — самоубийство, сказали они. Протокол продолжается, сильнее чем когда-либо. Газету Эдди закрыли. Вы живы, богаты и сломлены. Стеклянный ключ лежит на вашем столе. Вы говорите себе, что выживание — это сама по себе победа.",
        choices: {
          'choice-25-1': { text: "Жить со своим выбором" },
          'choice-25-2': { text: "Вернуться в Сан-Франциско за искуплением" },
        },
      },
      'node-26': {
        title: "Арест",
        narration: "Вы сдаетесь полиции, подняв руки. Они находят вас с дымящимися пистолетами и мертвецами — но они также находят улики. Неделю это скандал века. Протокол разоблачен, чиновники уходят в отставку, Морано арестован. Вас называют героем. Но затем повествование меняется. Свидетели отказываются от показаний. Улики исчезают. Вас обвиняют в убийстве, заговоре. Суд скорый. Присяжные куплены. Судья носит значок со стеклянным ключом.",
        choices: {
          'choice-26-1': { text: "Принять обвинительный приговор" },
          'choice-26-2': { text: "Попытаться сбежать из тюрьмы" },
        },
      },
      'node-27': {
        title: "Побег",
        narration: "Вы бежите через задние коридоры типографии, Клара ведет. Она знает эти улицы. Вы появляетесь в Чайнатауне, теряясь в толпе ночного рынка. В безопасном месте вы переводите дух. «Нам нужно исчезнуть», — говорит Клара. «У моего брата были счета в Швейцарии. Мы можем начать сначала». Она предлагает жизнь с ней. Но история Эдди так и не вышла. Улики разбросаны. Протокол побеждает. Сможете ли вы с этим жить?",
        choices: {
          'choice-27-1': { text: "Уехать с Кларой и начать сначала" },
          'choice-27-2': { text: "Остаться и бороться из тени" },
        },
      },
      'node-28': {
        title: "Тюрьма",
        narration: "Сан-Квентин холоден и вечен. Вы здесь пять лет, может быть десять. Клару освободили после дачи показаний; вы слышали, она вышла замуж за дипломата. Охранники знают, кто вы — детектив, который почти обрушил город. Некоторые уважают вас. Другие заставляют платить. Но вы научились выживать. Вы завели друзей — тех, кто помнит долги. Однажды прибывает новый заключенный. «Протокол все еще действует. Мой отец нашел улики. Они убили его».",
        choices: {
          'choice-28-1': { text: "Обучить молодого человека давать отпор" },
          'choice-28-2': { text: "Сказать ему защищать себя" },
        },
      },
      'node-29': {
        title: "Возвращение",
        narration: "Вы возвращаетесь в Сан-Франциско под вымышленным именем. Город выглядит так же — тот же туман, та же коррупция. Но вы изменились. Манила научила вас терпению. Теперь вы действуете в тени, собирая информацию, строя дела, которые нельзя купить. Вы находите Эдди — сломленного, спившегося, но все еще журналиста. Вы находите Сэма Чена — разжалованного, ожесточенного, но все еще копа, которому не все равно. Вместе вы формируете Сопротивление Стеклянного Ключа. Сначала маленькие победы. Но слухи распространяются.",
        choices: {
          'choice-29-1': { text: "Усилить кампанию против Протокола" },
          'choice-29-2': { text: "Сосредоточиться на защите невиновных" },
        },
      },
      'node-30': {
        title: "Изгнание",
        narration: "Швейцария прекрасна и бессмысленна. Вы и Клара живете в шале с видом на озеро, которое слишком синее, чтобы быть настоящим. Денег хватает — кровавые деньги, очищенные расстоянием. Вы учите французский, катаетесь на лыжах зимой, притворяетесь счастливыми. Клара пишет мемуары, которые никогда не опубликует. Эдди присылает письма о Сан-Франциско. Протокол по-прежнему управляет всем. Ваше имя забыто. Но вы живы. Вместе. В безопасности. Темными ночами вы держите стеклянный ключ и гадаете, заслуживают ли трусы покоя.",
        choices: {
          'choice-30-1': { text: "Опубликовать мемуары Клары" },
          'choice-30-2': { text: "Принять эту жизнь" },
        },
      },
      'node-31': {
        title: "Теневая Война",
        narration: "Вы становитесь призраком. Ни имени, ни адреса, ни одного и того же лица дважды. Из тени вы наносите удары по Протоколу — сливая документы, предупреждая цели, саботируя операции. Вы не можете победить, но можете причинить им боль. Каждая победа чего-то стоит — сожженное убежище, арестованный контакт. Клара работает с вами год, прежде чем опасность становится слишком великой. Теперь вы работаете в одиночку. Они назначили за вашу голову миллион долларов.",
        choices: {
          'choice-31-1': { text: "Начать финальный штурм" },
          'choice-31-2': { text: "Нанять других, чтобы продолжить борьбу" },
        },
      },
      'node-32': {
        title: "Наставник",
        narration: "Вы тренируете парня — Джеймса, сына члена совета, убитого Протоколом. Он умен, зол, решителен. Вы учите его всему. Проходят годы. Он выходит на свободу и присоединяется к Сопротивлению. Вы смотрите, как приходят отчеты: Джеймс разоблачил коррумпированного судью, спас свидетеля. Вы горды и напуганы. Протокол знает, что он ваш. Приходит письмо — почерк Джеймса: «Я иду за головой. Человеком над Морано. Я знаю, кто он».",
        choices: {
          'choice-32-1': { text: "Поощрить его закончить начатое вами" },
          'choice-32-2': { text: "Предупредить его защищать себя" },
        },
      },
      'node-33': {
        title: "Хранитель",
        narration: "Вы сосредотачиваетесь на защите, а не на нападении. Сопротивление становится щитом для невиновных — сопровождение свидетелей, предупреждение чиновников, уничтожение улик. Вы не герои; вы хранители. Клара присоединяется к вам — она не смогла остаться в стороне. Вместе вы строите что-то долговечное: сеть хороших людей в плохих местах. Протокол не может устранить вас; вы слишком рассеяны. Проходят годы. Вы стареете в тени. Затем приходит новое поколение — молодые, яростные, готовые.",
        choices: {
          'choice-33-1': { text: "Передать факел следующему поколению" },
          'choice-33-2': { text: "Остаться и направлять их" },
        },
      },
      'node-34': {
        title: "Мемуары",
        narration: "Мемуары Клары становятся международной сенсацией. Переведены на двадцать языков, обсуждаются в парламентах. Она называет имена, даты, преступления. Протокол пытается сдержать ущерб, но правда вырвалась наружу. Сенаторы уходят в отставку, судей подвергают импичменту. Вы наблюдаете из Швейцарии, как империя рушится. Но возмездие приходит быстро — убийцы, судебные иски. Вы вынуждены снова переезжать. Но когда вы читаете заголовки — «Коррупционное кольцо разоблачено» — вы знаете, что оно того стоило.",
        choices: {
          'choice-34-1': { text: "Дожить свои дни в покое" },
          'choice-34-2': { text: "Вернуться, чтобы помочь восстановить" },
        },
      },
      'node-35': {
        title: "Наследие",
        narration: "Вы тщательно вербуете, обучая других быть тенями, сопротивляться, не становясь монстрами. Сопротивление вырастает во что-то, с чем Протокол не может бороться — не потому, что оно сильное, а потому что оно повсюду. Когда вы слишком стары, чтобы бегать, вы становитесь учителем, легендой. «Будь хорошим, или Стеклянный Ключ найдет тебя». Клара возвращается, постаревшая, помудревшая. На смертном одре вы передаете стеклянный ключ самому молодому рекруту. «Помни», — шепчете вы, — «мы сражаемся не ради победы. Мы сражаемся, потому что это правильно».",
        choices: {
          'choice-35-1': { text: "Принять конец" },
          'choice-35-2': { text: "Передать лидерство следующему поколению" },
        },
      },
      'node-36': {
        title: "КОНЦОВКА: Революция",
        narration: "Джеймс преуспевает там, где вы потерпели неудачу. Он находит человека над Морано — федерального судью, создавшего Протокол семьдесят лет назад. Улики, собранные Джеймсом, обрушивают не только организацию, но и коррумпированную систему. Из своей тюремной камеры вы смотрите суды по телевизору. Один за другим падают сильные мира сего. Принимаются новые законы. Приходят посетители: Джеймс, теперь реформатор; Клара, которая никогда вас не забывала. Вы умираете стариком, все еще в тюрьме, но свободным.",
        choices: {},
      },
      'node-37': {
        title: "КОНЦОВКА: Выживший",
        narration: "Вы выбрали выживание вместо славы, и выживание — это то, что вы получили. Годы в тюрьме, десятилетия в бегах. Но вы живы, когда так много других нет. Протокол все еще существует — ослабленный, изменившийся. Иногда вы видите, как сражается новое поколение. Но вы теперь стары. Вместо этого вы пишете — мемуары, советы. Клара навещает вас в вашей маленькой квартире. В ваш последний день она держит вас за руку. «Ты хорошо справился, Джек», — шепчет она. Не концовка героя, но человеческая. Этого достаточно.",
        choices: {},
      },
      'node-38': {
        title: "КОНЦОВКА: Новый Рассвет",
        narration: "Вы возвращаетесь в изменившийся город. Протокол исчез — действительно исчез. Сан-Франциско изобретает себя заново, чище и честнее. Вы и Клара открываете детективное агентство — легальное на этот раз. Стеклянный ключ висит в вашем окне. Молодые люди приходят к вам за советом. Годы спустя вас избирают в городской совет. Из своего офиса вы видите, как сверкает залив. Туман все еще накатывает, но он больше не прячет монстров. Вы сделали это.",
        choices: {},
      },
      'node-39': {
        title: "КОНЦОВКА: Мученик",
        narration: "Пуля предназначалась Кларе, но вы шагнули вперед. Вы умираете у нее на руках на грязной улице, стеклянный ключ выпадает из кармана. Это уместно — вы всегда собирались сломаться ради чего-то. Похороны скромные; памятник большой. Посмертно помилован, прославлен, оплакан. Клара пишет вашу историю, Эдди публикует ее. Протокол падает не от силы, а от стыда. Вы становитесь символом. Вы бы это возненавидели, честно говоря. Но символы живут дольше людей. Один человек может противостоять тьме.",
        choices: {},
      },
      'node-40': {
        title: "КОНЦОВКА: Незримый Хранитель",
        narration: "Вы никогда не прекращали сражаться. Никаких заголовков, никакой славы, только бесконечные ночи наблюдения. Сопротивление становится вашей семьей. Клара остается с вами до конца. Вы спасли сотни жизней — каждая из них победа, которую история не запишет. Когда вы наконец падаете, нет похорон. Только стеклянный ключ, похороненный с вашим прахом, и шепот о призраке, который защищал невиновных. Вы никогда не были героем, которого хотел город. Вы были хранителем, который ему был нужен. А хранители должны оставаться незримыми.",
        choices: {},
      },
    },
  },
  es: {
    title: "El Protocolo de la Llave de Cristal",
    description: "Un misterio noir ambientado en el San Francisco de los años 40. El detective privado Jack Malone debe descubrir la verdad detrás del hijo de un senador asesinado, una misteriosa llave de cristal y una conspiración que llega a los niveles más altos del poder.",
    author: "Sam Vickers",
    nodes: {
      'node-1': {
        title: "La Llave de Cristal",
        narration: "La lluvia cae con fuerza sobre los adoquines fuera de tu oficina. Eres Jack Malone, detective privado, y esta noche un hombre moribundo tropezó en tu puerta con una llave de cristal en la mano y una bala en el pecho. 'Vienen', jadeó. 'El Protocolo... es real.' Antes de morir, presionó la llave en tu palma. Es fría, translúcida y grabada con símbolos que no reconoces. Ahora oyes pasos en las escaleras: botas pesadas, más de un par. La llave de cristal arde en tu bolsillo como una brasa congelada.",
        choices: {
          'choice-1-1': { text: "Escapar por la escalera de incendios" },
          'choice-1-2': { text: "Enfrentar a quien viene" },
        },
      },
      'node-2': {
        title: "Escalera de Incendios",
        narration: "Te deslizas por la ventana y bajas por la oxidada escalera de incendios justo cuando la puerta de tu oficina se abre de golpe. Dos hombres con abrigos oscuros entran, armas en mano. Desde tu posición en las sombras, los ves examinar el cuerpo. 'Habló', dice uno. 'Encuentra a quién se lo dijo. El Protocolo no puede verse comprometido.' Toman la billetera del hombre muerto y dejan una caja de cerillas en tu escritorio: The Blue Orchid Club. ¿Una advertencia o una pista? Esperas hasta que se van, luego saltas al callejón de abajo. La lluvia empapa tu gabardina.",
        choices: {
          'choice-2-1': { text: "Seguir a los hombres discretamente" },
          'choice-2-2': { text: "Ir al Club Orquídea Azul" },
        },
      },
      'node-3': {
        title: "Confrontación",
        narration: "Te mantienes firme, revólver en mano, mientras la puerta se abre de golpe. Dos hombres se congelan en la entrada, sorprendidos de encontrarte armado. 'La llave', exige uno. 'Entrégala y te vas caminando.' Reconoces el tipo: músculo contratado. Pero detrás de ellos, un sedán negro espera en la acera, y vislumbras una silueta observando desde el asiento trasero. Quienquiera que trabaje para ellos tiene dinero y poder. Podrías pelear, pero las probabilidades son malas. O podrías ganar tiempo con palabras.",
        choices: {
          'choice-3-1': { text: "Disparar y buscar cobertura" },
          'choice-3-2': { text: "Negociar por información" },
        },
      },
      'node-4': {
        title: "Seguimiento",
        narration: "Sigues el sedán de los hombres por calles resbaladizas por la lluvia hasta Pacific Heights, donde la élite de la ciudad vive detrás de puertas de hierro forjado. Entran en una mansión que pertenece al senador Blackwell, una figura poderosa que se rumorea tiene conexiones con la mafia. Desde los arbustos, observas con binoculares mientras informan a un hombre con traje blanco: Vinnie 'El Fantasma' Morano, el jefe del crimen que todos temen. Sostiene algo de cristal que atrapa la luz.",
        choices: {
          'choice-4-1': { text: "Irrumpir en la mansión" },
          'choice-4-2': { text: "Investigar la identidad del hombre muerto" },
        },
      },
      'node-5': {
        title: "El Club Orquídea Azul",
        narration: "El Orquídea Azul es un club de jazz en el Tenderloin, todo humo, saxofones y secretos. La camarera, Ruby, a quien conoces desde hace años, palidece cuando le muestras la llave de cristal. 'Esta es la marca del senador Blackwell. Su hijo tenía una igual antes de morir.' Te sirve whisky con mano temblorosa. 'La hija del senador, Clara, está aquí ahora, en la cabina trasera. Ha estado haciendo preguntas sobre su hermano.'",
        choices: {
          'choice-5-1': { text: "Hablar con Clara Blackwell" },
          'choice-5-2': { text: "Buscar en la oficina del Senador" },
        },
      },
      'node-6': {
        title: "Tiroteo",
        narration: "Tu disparo alcanza al primer hombre en el hombro; deja caer su arma con un grito. Te lanzas detrás de tu escritorio mientras el fuego de respuesta astilla la madera. El segundo pistolero es cauteloso, profesional. Abres de una patada el panel secreto y te deslizas hacia el espacio entre las paredes. Arriba, los oyes buscando. 'Tiene la llave', murmura uno. 'El jefe la quiere esta noche.' Emerges dos edificios más abajo, sin aliento, pero ahora estás desarmado y cazado.",
        choices: {
          'choice-6-1': { text: "Ir a tu contacto en el Chronicle" },
          'choice-6-2': { text: "Encontrar una casa segura" },
        },
      },
      'node-7': {
        title: "Negociación",
        narration: "'¿Quién te paga?', preguntas, manteniendo tu arma firme. '¿El Senador? ¿Morano?' El pistolero líder sonríe. 'Crees que eres listo, detective. Pero tienes algo que pertenece a gente poderosa. El Protocolo no es solo una palabra, es una organización más antigua que esta ciudad. Danos la llave y obtendrás cincuenta mil dólares. Rehúsate...' Asiente hacia el hombre muerto. '...terminas como tu visitante.'",
        choices: {
          'choice-7-1': { text: "Fingir acuerdo, luego escapar" },
          'choice-7-2': { text: "Rehusar y fanfarronear para salir" },
        },
      },
      'node-8': {
        title: "Infiltración en la Mansión",
        narration: "Escalas el muro del jardín y te deslizas por una entrada de servicio. La mansión respira dinero viejo y secretos aún más viejos. Desde el pasillo, oyes a Morano discutiendo con una mujer: educada, enojada. 'Mi hermano murió por culpa de vuestro Protocolo', dice ella. 'Quiero salir.' 'Nadie sale, Clara', responde Morano. Te asomas por la esquina para ver a Morano apuntando con un arma a Clara Blackwell, la hija del senador.",
        choices: {
          'choice-8-1': { text: "Rescatar a Clara Blackwell" },
          'choice-8-2': { text: "Buscar evidencia en el estudio" },
        },
      },
      'node-9': {
        title: "Clara Blackwell",
        narration: "Clara Blackwell es joven, rica y está aterrorizada. Cuando le muestras la llave de cristal, jadea. 'Esa es una de las siete. Mi hermano tenía la séptima.' El Protocolo es un acuerdo secreto entre la élite de la ciudad y el crimen organizado. Existen siete llaves; los portadores controlan bloques de votos, capitanes de policía, jueces. Su hermano descubrió el Protocolo y trató de exponerlo. 'Lo mataron. Hicieron que pareciera un accidente.' Su mano tiembla.",
        choices: {
          'choice-9-1': { text: "Aceptar ayudar a Clara" },
          'choice-9-2': { text: "Investigar la muerte de su hermano primero" },
        },
      },
      'node-10': {
        title: "El Chronicle",
        narration: "Tu contacto Eddie dirige la sección de crimen en el Chronicle. Es escéptico hasta que le muestras la llave de cristal. 'He oído rumores', admite. 'Tres muertes en seis meses, todas conectadas con el senador Blackwell. Todas declaradas accidentes.' Te muestra fotos: cada víctima tenía poder, cada una murió con un extraño objeto de cristal cerca. 'La policía enterró estos casos rápido.' Los ojos de Eddie brillan. 'Dame los derechos exclusivos y te daré todo.'",
        choices: {
          'choice-10-1': { text: "Aceptar los términos de Eddie" },
          'choice-10-2': { text: "Rechazar e investigar solo" },
        },
      },
      'node-11': {
        title: "Casa Segura",
        narration: "Te escondes en una pensión en el muelle, donde nadie pregunta nombres. La llave de cristal atrapa la tenue luz de una ventana rota. La examinas de cerca: hay un número grabado en el eje: 4. La cuarta llave de siete. Un golpe congela tu sangre, pero es el detective Sam Chen del SFPD. 'Estás metido hasta el fondo, Jack', dice. 'Morano ha puesto precio a tu cabeza. Pero te debo una.' Te entrega un archivo.",
        choices: {
          'choice-11-1': { text: "Pedir protección policial a Sam" },
          'choice-11-2': { text: "Usar la información de Sam" },
        },
      },
      'node-12': {
        title: "El Rescate",
        narration: "Irrumpes con el arma desenfundada. Morano se gira, la sorpresa parpadea, luego la rabia. Clara grita mientras suenan los disparos. La derribas detrás de un sofá mientras las balas destrozan la tapicería. 'La escalera trasera', jadea ella. 'Coche en el garaje.' Cubres la retirada y corres. Las balas te siguen, pero llegas al garaje: un descapotable Packard. Clara se desliza dentro, agarrando un folio de cuero. 'Miembros del Protocolo', jadea. 'Nombres, cuentas, todo.'",
        choices: {
          'choice-12-1': { text: "Conducir a la oficina del periódico" },
          'choice-12-2': { text: "Esconder la evidencia primero" },
        },
      },
      'node-13': {
        title: "El Estudio",
        narration: "Mientras Morano amenaza a Clara, te deslizas en el estudio del Senador. Un santuario al poder: fotos con presidentes, premios, una caja fuerte cerrada detrás de un retrato. La llave de cristal encaja perfectamente en una ranura oculta en el escritorio. Un cajón se abre, revelando documentos que te hielan la sangre. El Protocolo no es solo corrupción: es un gobierno en la sombra. Siete llaves, siete portadores, controlando todo desde los muelles hasta el Ayuntamiento.",
        choices: {
          'choice-13-1': { text: "Esconderse y seguir fotografiando" },
          'choice-13-2': { text: "Escapar con lo que tienes" },
        },
      },
      'node-14': {
        title: "Asociación",
        narration: "La investigación de Eddie llena los vacíos. El Protocolo comenzó durante la Fiebre del Oro: siete empresarios controlando muelles, bancos, políticos. Ahora es algo más siniestro: empresa criminal con inmunidad legal. 'Aquí está el truco', dice Eddie. 'Cada portador de llave tiene un puesto en el gobierno. El Alcalde. El Jefe de Policía. Incluso un juez federal.' Te das cuenta del alcance: exponer el Protocolo significa acusar a las figuras más poderosas de la ciudad.",
        choices: {
          'choice-14-1': { text: "Publicar la historia inmediatamente" },
          'choice-14-2': { text: "Reunir más evidencia primero" },
        },
      },
      'node-15': {
        title: "Investigación en Solitario",
        narration: "Trabajas mejor solo. Thomas Reed tenía una hermana: Margaret, bibliotecaria en Oakland. La encuentras en una pequeña casa rodeada de libros. 'Thomas dijo que alguien vendría', dice, entregándote una carta. La carta detalla cómo Reed descubrió el Protocolo mientras auditaba las finanzas del Senador. Siete llaves, siete millones en sobornos, siete asesinatos encubiertos. 'Las llaves no son solo símbolos', escribió Reed.",
        choices: {
          'choice-15-1': { text: "Empezar con el banco más grande" },
          'choice-15-2': { text: "Investigar al Senador directamente" },
        },
      },
      'node-16': {
        title: "La Oficina del Chronicle",
        narration: "La oficina del periódico zumba con la energía de la fecha límite. Eddie expone la historia: el Protocolo, las llaves, los asesinatos. El folio de Clara proporciona nombres y cuentas bancarias. Suficiente para acusar a la mitad del gobierno de la ciudad. 'Imprimimos esta noche', dice Eddie. Pero mientras las prensas ruedan, los hombres de Morano rodean el edificio. No están aquí para negociar. Los disparos rompen las ventanas. 'El sótano', grita Eddie. 'Túnel a la imprenta.'",
        choices: {
          'choice-16-1': { text: "Escapar por el túnel" },
          'choice-16-2': { text: "Quedarse y proteger la evidencia" },
        },
      },
      'node-17': {
        title: "El Escondite",
        narration: "Conduces a un casillero de almacenamiento en el Distrito de la Misión, pagado con un nombre falso. El folio de Clara va dentro, junto con tus fotografías. 'Este es nuestro seguro', le dices. Pero mientras cierras la puerta, unos faros iluminan el callejón. Morano sale de un Cadillac, flanqueado por pistoleros. 'Movimiento inteligente, Malone', llama. Levanta su propia llave de cristal: número 6. 'Dame a la chica y el folio, y te vas rico.'",
        choices: {
          'choice-17-1': { text: "Entregar la llave del casillero" },
          'choice-17-2': { text: "Pelear para salir" },
        },
      },
      'node-18': {
        title: "El Depósito de Seguridad",
        narration: "El Primer Banco Nacional abre a las nueve. Estás esperando en la puerta con la lista de Reed y tu llave de cristal. El gerente, Halloway, palidece cuando ve la llave. 'Esa caja requiere dos llaves.' Te muestra la cerradura: dos ranuras, numeradas 4 y 7. Tienes la número 4. Reed tenía la número 7, pero no estaba en su cuerpo. '¿Quién tiene la otra llave?', exiges. Halloway revisa su registro. 'El senador Blackwell la recogió ayer.'",
        choices: {
          'choice-18-1': { text: "Irrumpir en la bóveda por la noche" },
          'choice-18-2': { text: "Confrontar al Senador Blackwell directamente" },
        },
      },
      'node-19': {
        title: "El Senador",
        narration: "Encuentras al senador Blackwell en su club de campo. Cuando te acercas, no parece sorprendido. 'Malone. Me preguntaba cuándo me encontrarías.' Despide a sus guardias. 'Camine conmigo, detective. El hoyo diecisiete es privado.' En el green, se detiene. 'Crees que soy el villano. No lo soy, soy un prisionero. El Protocolo comenzó con mi padre. Traté de irme una vez; mataron a mi esposa en un 'accidente de coche' igual que a mi hijo.' Levanta la llave número 7.",
        choices: {
          'choice-19-1': { text: "Confiar en el Senador" },
          'choice-19-2': { text: "Tomar la llave por la fuerza" },
        },
      },
      'node-20': {
        title: "El Túnel",
        narration: "El túnel es oscuro y huele a tinta. Guías a Clara a través de él, aferrando el folio. Detrás de ti, los disparos resuenan: Eddie los está conteniendo. El túnel se abre a la imprenta. 'Lo logramos', respira Clara. Pero la puerta se abre: agentes federales. 'Departamento de Justicia. Están bajo arresto.' Él toma el folio. 'Esta evidencia es clasificada. El Protocolo es seguridad nacional.' Se inclina cerca. 'Coopera, y desapareces a una bonita prisión.'",
        choices: {
          'choice-20-1': { text: "Exigir ver a un abogado" },
          'choice-20-2': { text: "Aceptar cooperar" },
        },
      },
      'node-21': {
        title: "Última Resistencia",
        narration: "Atrincheras la puerta y sacas tu arma. Clara ayuda a Eddie a mover las prensas de impresión para crear cobertura. 'Nunca saldremos vivos', dice ella, cargando una escopeta. Los hombres de Morano irrumpen, y la oficina se convierte en una zona de guerra. Estás inmovilizado, superado en número, pero las prensas siguen funcionando: cada copia es una bala contra el Protocolo. 'Un minuto hasta la distribución', llama Eddie. Luego sirenas: policía real. Los hombres de Morano vacilan.",
        choices: {
          'choice-21-1': { text: "Rendirse a la policía" },
          'choice-21-2': { text: "Escapar en el caos" },
        },
      },
      'node-22': {
        title: "El Trato",
        narration: "Entregas la llave del casillero. Morano sonríe, la sonrisa de un depredador que ha ganado. 'Elección inteligente, Malone. Tendrás tu dinero mañana.' Sus hombres se llevan a Clara. 'Ella no es parte del trato', protestas. Morano se encoge de hombros. 'Nunca lo fue.' Se alejan, dejándote solo con dinero manchado de sangre en tu futuro y traición en tu corazón. Pero aún no estás vencido. Hiciste un duplicado de la llave. Todavía puedes llegar a la evidencia.",
        choices: {
          'choice-22-1': { text: "Usar la llave duplicada para rescatar a Clara" },
          'choice-22-2': { text: "Tomar el dinero y desaparecer" },
        },
      },
      'node-23': {
        title: "Tiroteo",
        narration: "Sacas el arma y disparas en un solo movimiento. El hombro de Morano estalla en sangre. Sus hombres se dispersan mientras agarras a Clara y corres. Las balas te persiguen por el callejón. Doblas una esquina y encuentras un callejón sin salida: una cerca de alambre con púas. Detrás de ti, los hombres de Morano avanzan. 'Sube', le dices a Clara, impulsándola. Disparas para mantenerlos a raya, quedándote sin balas. Ella está al otro lado. Tu turno, pero una bala te da en la pierna.",
        choices: {
          'choice-23-1': { text: "Decirle a Clara que corra mientras los contienes" },
          'choice-23-2': { text: "Intentar escalar a pesar de la herida" },
        },
      },
      'node-24': {
        title: "Los Federales",
        narration: "La celda federal es fría y sin rasgos distintivos. Has estado aquí tres días. Sin abogado, sin llamada telefónica, sin cargos. Finalmente, entra un hombre con traje gris. 'El Protocolo existe porque lo permitimos', dice. 'Mantiene el orden.' Se sienta en la litera. 'El Senador está muerto: suicidio. Morano ha desaparecido. Clara testificará que la secuestraste. A menos que...' Saca un documento. 'Firma esta confesión, toma diez años, y ella sale libre.'",
        choices: {
          'choice-24-1': { text: "Firmar la confesión para salvar a Clara" },
          'choice-24-2': { text: "Rechazar y exigir un juicio real" },
        },
      },
      'node-25': {
        title: "El Camino Fácil",
        narration: "Tomas un vapor a Manila bajo un nombre falso. Los cincuenta mil dólares te compran una nueva vida: una casa junto a la playa, un barco de pesca. Pero algunas noches te despiertas sudando, oyendo los gritos de Clara. Lees sobre la muerte del Senador: suicidio, dijeron. El Protocolo continúa, más fuerte que nunca. El periódico de Eddie fue cerrado. Estás vivo, rico y roto. La llave de cristal está en tu escritorio. Te dices a ti mismo que la supervivencia es su propia victoria.",
        choices: {
          'choice-25-1': { text: "Vivir con tu elección" },
          'choice-25-2': { text: "Regresar a San Francisco por redención" },
        },
      },
      'node-26': {
        title: "El Arresto",
        narration: "Te rindes a la policía, con las manos en alto. Te encuentran con armas humeantes y hombres muertos, pero también encuentran la evidencia. Durante una semana, es el escándalo del siglo. El Protocolo expuesto, funcionarios renunciando, Morano arrestado. Eres aclamado como un héroe. Pero luego la narrativa cambia. Los testigos se retractan. La evidencia desaparece. Eres acusado de asesinato, conspiración. El juicio es rápido. El jurado está comprado. El juez lleva un pin de llave de cristal.",
        choices: {
          'choice-26-1': { text: "Aceptar el veredicto de culpabilidad" },
          'choice-26-2': { text: "Intentar una fuga de prisión" },
        },
      },
      'node-27': {
        title: "La Fuga",
        narration: "Corres por los pasillos traseros de la imprenta, Clara guiando el camino. Ella conoce estas calles. Emerges en Chinatown, perdiéndote en la multitud del mercado nocturno. En una casa segura, recuperas el aliento. 'Necesitamos desaparecer', dice Clara. 'Mi hermano tenía cuentas en Suiza. Podemos empezar de nuevo.' Ella ofrece una vida con ella. Pero la historia de Eddie nunca se publicó. La evidencia está dispersa. El Protocolo gana. ¿Puedes vivir con eso?",
        choices: {
          'choice-27-1': { text: "Irse con Clara y empezar de nuevo" },
          'choice-27-2': { text: "Quedarse y luchar desde las sombras" },
        },
      },
      'node-28': {
        title: "Prisión",
        narration: "San Quintín es frío y eterno. Has estado aquí cinco años, tal vez diez. Clara fue liberada después de testificar; oíste que se casó con un diplomático. Los guardias saben quién eres: el detective que casi derribó la ciudad. Algunos te respetan. Otros te hacen pagar. Pero has aprendido a sobrevivir. Has hecho amigos, del tipo que recuerda las deudas. Un día, llega un nuevo prisionero. 'El Protocolo todavía opera. Mi padre encontró evidencia. Lo mataron.'",
        choices: {
          'choice-28-1': { text: "Entrenar al joven para defenderse" },
          'choice-28-2': { text: "Decirle que se proteja a sí mismo" },
        },
      },
      'node-29': {
        title: "El Regreso",
        narration: "Regresas a San Francisco bajo un nombre falso. La ciudad parece la misma: la misma niebla, la misma corrupción. Pero tú has cambiado. Manila te enseñó paciencia. Ahora operas en las sombras, reuniendo información, construyendo casos que no se pueden comprar. Encuentras a Eddie: roto, alcohólico, pero todavía un periodista. Encuentras a Sam Chen: degradado, amargado, pero todavía un policía a quien le importa. Juntos, formáis la Resistencia de la Llave de Cristal. Pequeñas victorias al principio. Pero se corre la voz.",
        choices: {
          'choice-29-1': { text: "Intensificar la campaña contra el Protocolo" },
          'choice-29-2': { text: "Centrarse en proteger a los inocentes" },
        },
      },
      'node-30': {
        title: "Exilio",
        narration: "Suiza es hermosa y sin sentido. Tú y Clara vivís en un chalet con vistas a un lago que es demasiado azul para ser real. El dinero dura: dinero de sangre, purificado por la distancia. Aprendes francés, esquías en invierno, finges ser feliz. Clara escribe unas memorias que nunca publicará. Eddie envía cartas sobre San Francisco. El Protocolo todavía dirige todo. Tu nombre está olvidado. Pero estás vivo. Juntos. A salvo. En las noches oscuras, sostienes la llave de cristal y te preguntas si los cobardes merecen paz.",
        choices: {
          'choice-30-1': { text: "Publicar las memorias de Clara" },
          'choice-30-2': { text: "Aceptar esta vida" },
        },
      },
      'node-31': {
        title: "Guerra en las Sombras",
        narration: "Te conviertes en un fantasma. Sin nombre, sin dirección, sin la misma cara dos veces. Desde las sombras, atacas al Protocolo: filtrando documentos, advirtiendo a objetivos, saboteando operaciones. No puedes ganar, pero puedes herirlos. Cada victoria cuesta algo: una casa segura quemada, un contacto arrestado. Clara trabaja contigo durante un año antes de que el peligro se vuelva demasiado grande. Ahora trabajas solo. Han puesto un precio de un millón de dólares a tu cabeza.",
        choices: {
          'choice-31-1': { text: "Lanzar un asalto final" },
          'choice-31-2': { text: "Reclutar a otros para continuar la lucha" },
        },
      },
      'node-32': {
        title: "El Mentor",
        narration: "Entrenas al chico: James, hijo de un concejal asesinado por el Protocolo. Es inteligente, está enojado, decidido. Le enseñas todo. Pasan los años. Es liberado y se une a la Resistencia. Observas cómo llegan los informes: James expuso a un juez corrupto, salvó a un testigo. Estás orgulloso y asustado. El Protocolo sabe que es tuyo. Llega una carta, con la letra de James: 'Voy tras la cabeza. El hombre por encima de Morano. Sé quién es.'",
        choices: {
          'choice-32-1': { text: "Animarlo a terminar lo que empezaste" },
          'choice-32-2': { text: "Advertirle que se proteja" },
        },
      },
      'node-33': {
        title: "El Guardián",
        narration: "Te concentras en la protección en lugar del ataque. La Resistencia se convierte en un escudo para los inocentes: escoltando testigos, advirtiendo a funcionarios, destruyendo evidencia. No sois héroes; sois guardianes. Clara se une a ti; no pudo mantenerse alejada. Juntos, construís algo duradero: una red de buena gente en malos lugares. El Protocolo no puede eliminaros; estáis demasiado dispersos. Pasan los años. Envejeces en las sombras. Entonces llega una nueva generación: joven, feroz, lista.",
        choices: {
          'choice-33-1': { text: "Pasar la antorcha a la siguiente generación" },
          'choice-33-2': { text: "Quedarse y guiarlos" },
        },
      },
      'node-34': {
        title: "Las Memorias",
        narration: "Las memorias de Clara se convierten en una sensación internacional. Traducidas a veinte idiomas, discutidas en parlamentos. Ella nombra nombres, fechas, crímenes. El Protocolo se apresura a contener el daño, pero la verdad ha escapado. Senadores renuncian, jueces son acusados. Observas desde Suiza cómo el imperio se desmorona. Pero la represalia llega rápidamente: asesinos, desafíos legales. Te ves obligado a mudarte de nuevo. Pero mientras lees los titulares — 'Anillo de Corrupción Expuesto' — sabes que valió la pena.",
        choices: {
          'choice-34-1': { text: "Vivir tus días en paz" },
          'choice-34-2': { text: "Regresar para ayudar a reconstruir" },
        },
      },
      'node-35': {
        title: "El Legado",
        narration: "Reclutas cuidadosamente, entrenando a otros para ser sombras, para resistir sin convertirse en monstruos. La Resistencia crece hasta convertirse en algo contra lo que el Protocolo no puede luchar, no porque sea fuerte, sino porque está en todas partes. Cuando eres demasiado viejo para correr, te conviertes en un maestro, una leyenda. 'Sé bueno, o la Llave de Cristal te encontrará.' Clara regresa, mayor, más sabia. En tu lecho de muerte, pasas la llave de cristal al recluta más joven. 'Recuerda', susurras, 'no luchamos para ganar. Luchamos porque es lo correcto.'",
        choices: {
          'choice-35-1': { text: "Aceptar el final" },
          'choice-35-2': { text: "Pasar el liderazgo a la siguiente generación" },
        },
      },
      'node-36': {
        title: "FINAL: La Revolución",
        narration: "James tiene éxito donde tú fallaste. Encuentra al hombre por encima de Morano: el juez federal que creó el Protocolo hace setenta años. La evidencia que James reúne derriba no solo a la organización, sino al sistema corrupto. Desde tu celda de prisión, ves los juicios por televisión. Uno por uno, los poderosos caen. Se aprueban nuevas leyes. Vienen visitantes: James, ahora un reformador; Clara, que nunca te olvidó. Mueres siendo un anciano, todavía en prisión, pero libre.",
        choices: {},
      },
      'node-37': {
        title: "FINAL: El Superviviente",
        narration: "Elegiste la supervivencia sobre la gloria, y supervivencia es lo que obtuviste. Años en prisión, décadas escondiéndote. Pero estás vivo cuando tantos otros no lo están. El Protocolo todavía existe: debilitado, cambiado. A veces ves a la nueva generación luchando. Pero ahora eres viejo. En su lugar, escribes: memorias, consejos. Clara te visita en tu pequeño apartamento. En tu último día, ella sostiene tu mano. 'Lo hiciste bien, Jack', susurra. No es un final de héroe, sino uno humano. Eso es suficiente.",
        choices: {},
      },
      'node-38': {
        title: "FINAL: El Nuevo Amanecer",
        narration: "Regresas a una ciudad cambiada. El Protocolo se ha ido, realmente se ha ido. San Francisco se reinventa a sí misma, más limpia y más honesta. Tú y Clara abrís una agencia de detectives, legítima esta vez. La llave de cristal cuelga en vuestra ventana. Los jóvenes vienen a pedirte consejo. Años más tarde, eres elegido para el consejo de la ciudad. Desde tu oficina, ves la bahía brillando. La niebla todavía entra, pero ya no esconde monstruos. Tú hiciste eso.",
        choices: {},
      },
      'node-39': {
        title: "FINAL: El Mártir",
        narration: "La bala era para Clara, pero tú te interpusiste. Mueres en sus brazos en una calle sucia, la llave de cristal cayendo de tu bolsillo. Es apropiado: siempre ibas a romperte por algo. El funeral es pequeño; el monumento es grande. Indultado póstumamente, celebrado, llorado. Clara escribe tu historia, Eddie la publica. El Protocolo cae no por la fuerza sino por la vergüenza. Te conviertes en un símbolo. Lo odiarías, honestamente. Pero los símbolos sobreviven a los hombres. Una persona puede enfrentarse a la oscuridad.",
        choices: {},
      },
      'node-40': {
        title: "FINAL: El Guardián Invisible",
        narration: "Nunca dejaste de luchar. Sin titulares, sin gloria, solo noches interminables de vigilancia. La Resistencia se convierte en tu familia. Clara se queda contigo hasta el final. Salvaste cientos de vidas; cada una es una victoria que la historia no registrará. Cuando finalmente caes, no hay funeral. Solo una llave de cristal enterrada con tus cenizas, y susurros sobre el fantasma que protegía a los inocentes. Nunca fuiste el héroe que la ciudad quería. Fuiste el guardián que necesitaba. Y los guardianes deben permanecer invisibles.",
        choices: {},
      },
    },
  },
  de: {
    title: "Das Protokoll des Gläsernen Schlüssels",
    description: "Ein Noir-Krimi im San Francisco der 1940er Jahre. Privatdetektiv Jack Malone muss die Wahrheit hinter dem Mord am Sohn eines Senators, einem mysteriösen gläsernen Schlüssel und einer Verschwörung aufdecken, die bis in die höchsten Machtebenen reicht.",
    author: "Sam Vickers",
    nodes: {
      'node-1': {
        title: "Der Gläserne Schlüssel",
        narration: "Der Regen prasselt gegen das Kopfsteinpflaster vor Ihrem Büro. Sie sind Jack Malone, Privatdetektiv, und heute Abend ist ein sterbender Mann durch Ihre Tür gestolpert, einen gläsernen Schlüssel in der Hand und eine Kugel in der Brust. »Sie kommen«, keuchte er. »Das Protokoll... es ist real.« Bevor er starb, drückte er den Schlüssel in Ihre Handfläche. Er ist kalt, durchscheinend und mit Symbolen graviert, die Sie nicht erkennen. Jetzt hören Sie Schritte auf der Treppe – schwere Stiefel, mehr als ein Paar. Der gläserne Schlüssel brennt in Ihrer Tasche wie gefrorene Kohle.",
        choices: {
          'choice-1-1': { text: "Über die Feuertreppe fliehen" },
          'choice-1-2': { text: "Sich den Eindringlingen stellen" },
        },
      },
      'node-2': {
        title: "Feuertreppe",
        narration: "Sie schlüpfen aus dem Fenster und die verrostete Feuertreppe hinunter, gerade als Ihre Bürotür auffliegt. Zwei Männer in dunklen Mänteln treten ein, Waffen gezogen. Von Ihrem Platz im Schatten aus sehen Sie, wie sie die Leiche untersuchen. »Er hat geredet«, sagt einer. »Finde heraus, wem er es erzählt hat. Das Protokoll darf nicht kompromittiert werden.« Sie nehmen die Brieftasche des Toten und lassen ein Streichholzheftchen auf Ihrem Schreibtisch liegen – The Blue Orchid Club. Eine Warnung oder ein Hinweis? Sie warten, bis sie weg sind, und lassen sich dann in die Gasse hinunterfallen. Regen durchnässt Ihren Trenchcoat.",
        choices: {
          'choice-2-1': { text: "Den Männern unauffällig folgen" },
          'choice-2-2': { text: "Zum Blue Orchid Club gehen" },
        },
      },
      'node-3': {
        title: "Konfrontation",
        narration: "Sie bleiben stehen, Revolver in der Hand, als die Tür auffliegt. Zwei Männer erstarren im Türrahmen, überrascht, Sie bewaffnet zu finden. »Der Schlüssel«, fordert einer. »Gib ihn her und du gehst frei.« Sie erkennen den Typ – gemietete Muskeln. Aber hinter ihnen wartet eine schwarze Limousine am Bordstein, und Sie erhaschen einen Blick auf eine silhouettierte Gestalt auf dem Rücksitz. Wer auch immer sie bezahlt, hat Geld und Macht. Sie könnten kämpfen, aber die Chancen stehen schlecht. Oder Sie könnten mit Worten Zeit gewinnen.",
        choices: {
          'choice-3-1': { text: "Schießen und in Deckung gehen" },
          'choice-3-2': { text: "Um Informationen verhandeln" },
        },
      },
      'node-4': {
        title: "Beschattung",
        narration: "Sie verfolgen die Limousine der Männer durch regennasse Straßen nach Pacific Heights, wo die Elite der Stadt hinter schmiedeeisernen Toren lebt. Sie betreten ein Herrenhaus, das Senator Blackwell gehört, einer mächtigen Figur, der Verbindungen zur Mafia nachgesagt werden. Aus dem Gebüsch beobachten Sie durch ein Fernglas, wie sie einem Mann in einem weißen Anzug Bericht erstatten – Vinnie »The Ghost« Morano, dem Verbrecherboss, den alle fürchten. Er hält etwas Gläsernes, das das Licht einfängt.",
        choices: {
          'choice-4-1': { text: "In das Herrenhaus einbrechen" },
          'choice-4-2': { text: "Die Identität des Toten untersuchen" },
        },
      },
      'node-5': {
        title: "Der Blue Orchid Club",
        narration: "Das Blue Orchid ist ein Jazzclub im Tenderloin, alles Rauch und Saxophone und Geheimnisse. Die Barkeeperin – Ruby, die Sie seit Jahren kennen – wird blass, als Sie ihr den gläsernen Schlüssel zeigen. »Das ist das Zeichen von Senator Blackwell. Sein Sohn hatte genau so einen, bevor er starb.« Sie schenkt Ihnen mit zitternder Hand Whiskey ein. »Die Tochter des Senators, Clara, ist jetzt hier, in der hinteren Nische. Sie hat Fragen über ihren Bruder gestellt.«",
        choices: {
          'choice-5-1': { text: "Mit Clara Blackwell sprechen" },
          'choice-5-2': { text: "Das Büro des Senators durchsuchen" },
        },
      },
      'node-6': {
        title: "Schießerei",
        narration: "Ihr Schuss trifft den ersten Mann in die Schulter; er lässt seine Waffe mit einem Schrei fallen. Sie hechten hinter Ihren Schreibtisch, als Erwiderungsfeuer das Holz splittern lässt. Der zweite Schütze ist vorsichtig – ein Profi. Sie treten das Geheimfach auf und schlüpfen in den Hohlraum zwischen den Wänden. Oben hören Sie sie suchen. »Er hat den Schlüssel«, murmelt einer. »Der Boss will ihn heute Abend.« Sie tauchen zwei Gebäude weiter auf, atemlos, aber jetzt sind Sie unbewaffnet und gejagt.",
        choices: {
          'choice-6-1': { text: "Zu Ihrem Kontakt beim Chronicle gehen" },
          'choice-6-2': { text: "Ein Versteck finden" },
        },
      },
      'node-7': {
        title: "Verhandlung",
        narration: "»Wer bezahlt euch?« fragen Sie und halten Ihre Waffe ruhig. »Der Senator? Morano?« Der Anführer grinst. »Du denkst, du bist schlau, Detektiv. Aber du hältst etwas, das mächtigen Leuten gehört. Das Protokoll ist nicht nur ein Wort – es ist eine Organisation, älter als diese Stadt. Gib uns den Schlüssel und du kriegst fünfzigtausend Dollar. Weigere dich...« Er nickt zum Toten. »...und du endest wie dein Besucher.«",
        choices: {
          'choice-7-1': { text: "Zustimmung vortäuschen, dann fliehen" },
          'choice-7-2': { text: "Ablehnen und sich herausbluffen" },
        },
      },
      'node-8': {
        title: "Eindringen ins Herrenhaus",
        narration: "Sie klettern über die Gartenmauer und schlüpfen durch einen Dienstboteneingang. Das Herrenhaus atmet altes Geld und ältere Geheimnisse. Vom Flur aus hören Sie Morano mit einer Frau streiten – gebildet, wütend. »Mein Bruder ist wegen eurem Protokoll gestorben«, sagt sie. »Ich will raus.« »Niemand geht, Clara«, antwortet Morano. Sie spähen um die Ecke und sehen Morano, der eine Waffe auf Clara Blackwell richtet – die Tochter des Senators.",
        choices: {
          'choice-8-1': { text: "Clara Blackwell retten" },
          'choice-8-2': { text: "Das Arbeitszimmer nach Beweisen durchsuchen" },
        },
      },
      'node-9': {
        title: "Clara Blackwell",
        narration: "Clara Blackwell ist jung, reich und verängstigt. Als Sie ihr den gläsernen Schlüssel zeigen, keucht sie. »Das ist einer der sieben. Mein Bruder hatte den siebten.« Das Protokoll ist eine geheime Vereinbarung zwischen der Elite der Stadt und dem organisierten Verbrechen. Sieben Schlüssel existieren; Inhaber kontrollieren Wählerblöcke, Polizeikapitäne, Richter. Ihr Bruder entdeckte das Protokoll und versuchte, es aufzudecken. »Sie haben ihn getötet. Ließen es wie einen Unfall aussehen.« Ihre Hand zittert.",
        choices: {
          'choice-9-1': { text: "Zustimmen, Clara zu helfen" },
          'choice-9-2': { text: "Zuerst den Tod ihres Bruders untersuchen" },
        },
      },
      'node-10': {
        title: "Der Chronicle",
        narration: "Ihr Kontakt Eddie leitet das Kriminalressort beim Chronicle. Er ist skeptisch, bis Sie ihm den gläsernen Schlüssel zeigen. »Ich habe Gerüchte gehört«, gibt er zu. »Drei Tote in sechs Monaten – alle mit Senator Blackwell verbunden. Alle als Unfälle abgetan.« Er zeigt Ihnen Fotos: Jedes Opfer hatte Macht, jedes starb mit einem seltsamen Glasobjekt in der Nähe. »Die Bullen haben diese Fälle schnell begraben.« Eddies Augen leuchten. »Gib mir Exklusivrechte und ich gebe dir alles.«",
        choices: {
          'choice-10-1': { text: "Eddies Bedingungen zustimmen" },
          'choice-10-2': { text: "Ablehnen und alleine ermitteln" },
        },
      },
      'node-11': {
        title: "Versteck",
        narration: "Sie verkriechen sich in einer Absteige am Hafen, wo niemand nach Namen fragt. Der gläserne Schlüssel fängt das trübe Licht von einem gesprungenen Fenster ein. Sie untersuchen ihn genau – es ist eine Nummer in den Schaft geätzt: 4. Der vierte Schlüssel von sieben. Ein Klopfen lässt Ihr Blut gefrieren, aber es ist Detective Sam Chen vom SFPD. »Du steckst tief drin, Jack«, sagt er. »Morano hat ein Kopfgeld auf dich ausgesetzt. Aber ich schulde dir was.« Er reicht Ihnen eine Akte.",
        choices: {
          'choice-11-1': { text: "Sam um Polizeischutz bitten" },
          'choice-11-2': { text: "Sams Informationen nutzen" },
        },
      },
      'node-12': {
        title: "Die Rettung",
        narration: "Sie stürmen herein, Waffe gezogen. Morano dreht sich um, Überraschung flackert auf – dann Wut. Clara schreit, als Schüsse fallen. Sie reißen sie hinter ein Sofa, während Kugeln die Polsterung zerfetzen. »Die Hintertreppe«, keucht sie. »Auto in der Garage.« Sie geben Deckungsfeuer und rennen. Kugeln folgen Ihnen, aber Sie schaffen es zur Garage – ein Packard Cabriolet. Clara rutscht hinein, eine Ledermappe umklammernd. »Protokoll-Mitglieder«, keucht sie. »Namen, Konten, alles.«",
        choices: {
          'choice-12-1': { text: "Zum Zeitungsbüro fahren" },
          'choice-12-2': { text: "Die Beweise zuerst verstecken" },
        },
      },
      'node-13': {
        title: "Das Arbeitszimmer",
        narration: "Während Morano Clara bedroht, schlüpfen Sie in das Arbeitszimmer des Senators. Ein Schrein der Macht – Fotos mit Präsidenten, Auszeichnungen, ein verschlossener Safe hinter einem Porträt. Der gläserne Schlüssel passt perfekt in einen versteckten Schlitz im Schreibtisch. Eine Schublade gleitet auf und enthüllt Dokumente, die Ihr Blut gefrieren lassen. Das Protokoll ist nicht nur Korruption – es ist eine Schattenregierung. Sieben Schlüssel, sieben Inhaber, die alles kontrollieren, von den Docks bis zum Rathaus.",
        choices: {
          'choice-13-1': { text: "Verstecken und weiter fotografieren" },
          'choice-13-2': { text: "Mit dem fliehen, was Sie haben" },
        },
      },
      'node-14': {
        title: "Partnerschaft",
        narration: "Eddies Recherche füllt die Lücken. Das Protokoll begann während des Goldrausches – sieben Geschäftsleute kontrollierten Docks, Banken, Politiker. Jetzt ist es etwas Finstereres: kriminelles Unternehmen mit rechtlicher Immunität. »Hier ist der Haken«, sagt Eddie. »Jeder Schlüsselinhaber hat eine Regierungsposition. Der Bürgermeister. Der Polizeichef. Sogar ein Bundesrichter.« Sie erkennen das Ausmaß: Das Protokoll aufzudecken bedeutet, die mächtigsten Figuren der Stadt zu beschuldigen.",
        choices: {
          'choice-14-1': { text: "Die Geschichte sofort drucken" },
          'choice-14-2': { text: "Zuerst mehr Beweise sammeln" },
        },
      },
      'node-15': {
        title: "Alleingang",
        narration: "Sie arbeiten besser allein. Thomas Reed hatte eine Schwester – Margaret, eine Bibliothekarin in Oakland. Sie finden sie in einem kleinen Haus umgeben von Büchern. »Thomas sagte, jemand würde kommen«, sagt sie und reicht Ihnen einen Brief. Der Brief beschreibt, wie Reed das Protokoll entdeckte, während er die Finanzen des Senators prüfte. Sieben Schlüssel, sieben Millionen an Bestechungsgeldern, sieben vertuschte Morde. »Die Schlüssel sind nicht nur Symbole«, schrieb Reed.",
        choices: {
          'choice-15-1': { text: "Mit der größten Bank beginnen" },
          'choice-15-2': { text: "Den Senator direkt untersuchen" },
        },
      },
      'node-16': {
        title: "Das Chronicle-Büro",
        narration: "Das Zeitungsbüro summt vor Deadline-Energie. Eddie legt die Geschichte dar – das Protokoll, die Schlüssel, die Morde. Claras Mappe liefert Namen und Bankkonten. Genug, um die halbe Stadtregierung anzuklagen. »Wir drucken heute Abend«, sagt Eddie. Aber als die Pressen anlaufen, umstellen Moranos Männer das Gebäude. Sie sind nicht hier, um zu verhandeln. Gewehrfeuer zersplittert Fenster. »Der Keller«, ruft Eddie. »Tunnel zur Druckerei.«",
        choices: {
          'choice-16-1': { text: "Durch den Tunnel fliehen" },
          'choice-16-2': { text: "Bleiben und die Beweise schützen" },
        },
      },
      'node-17': {
        title: "Das Versteck",
        narration: "Sie fahren zu einem Lagerraum im Mission District – bezahlt unter falschem Namen. Claras Mappe kommt hinein, zusammen mit Ihren Fotos. »Das ist unsere Versicherung«, sagen Sie ihr. Aber als Sie die Tür abschließen, beleuchten Scheinwerfer die Gasse. Morano steigt aus einem Cadillac, flankiert von Bewaffneten. »Kluger Schachzug, Malone«, ruft er. Er hält seinen eigenen gläsernen Schlüssel hoch – Nummer 6. »Gib mir das Mädchen und die Mappe, du gehst reich weg.«",
        choices: {
          'choice-17-1': { text: "Den Schlüssel zum Lagerraum übergeben" },
          'choice-17-2': { text: "Sich den Weg freikämpfen" },
        },
      },
      'node-18': {
        title: "Das Schließfach",
        narration: "Die First National Bank öffnet um neun. Sie warten an der Tür mit Reeds Liste und Ihrem gläsernen Schlüssel. Der Manager – Halloway – wird blass, als Sie den Schlüssel sehen. »Dieses Fach benötigt zwei Schlüssel.« Er zeigt Ihnen das Schloss – zwei Schlitze, nummeriert 4 und 7. Sie haben Nummer 4. Reed hatte Nummer 7, aber er war nicht bei seiner Leiche. »Wer hat den anderen Schlüssel?« fordern Sie. Halloway prüft sein Register. »Senator Blackwell hat ihn gestern abgeholt.«",
        choices: {
          'choice-18-1': { text: "Nachts in den Tresorraum einbrechen" },
          'choice-18-2': { text: "Senator Blackwell direkt konfrontieren" },
        },
      },
      'node-19': {
        title: "Der Senator",
        narration: "Sie finden Senator Blackwell in seinem Country Club. Als Sie sich nähern, scheint er nicht überrascht. »Malone. Ich habe mich gefragt, wann Sie mich finden würden.« Er schickt seine Wachen weg. »Gehen Sie mit mir, Detektiv. Das siebzehnte Loch ist privat.« Auf dem Grün bleibt er stehen. »Sie denken, ich bin der Bösewicht. Ich bin es nicht – ich bin ein Gefangener. Das Protokoll begann mit meinem Vater. Ich habe einmal versucht zu gehen; sie töteten meine Frau bei einem 'Autounfall', genau wie meinen Sohn.« Er hält Schlüssel Nummer 7 hoch.",
        choices: {
          'choice-19-1': { text: "Dem Senator vertrauen" },
          'choice-19-2': { text: "Den Schlüssel mit Gewalt nehmen" },
        },
      },
      'node-20': {
        title: "Der Tunnel",
        narration: "Der Tunnel ist dunkel und riecht nach Tinte. Sie führen Clara hindurch, die Mappe umklammernd. Hinter Ihnen hallt Gewehrfeuer – Eddie hält sie auf. Der Tunnel öffnet sich in die Druckerei. »Wir haben es geschafft«, haucht Clara. Aber die Tür öffnet sich – Bundesagenten. »Justizministerium. Sie sind verhaftet.« Er nimmt die Mappe. »Diese Beweise sind geheim. Das Protokoll ist nationale Sicherheit.« Er lehnt sich vor. »Kooperieren Sie, und Sie verschwinden in ein nettes Gefängnis.«",
        choices: {
          'choice-20-1': { text: "Einen Anwalt verlangen" },
          'choice-20-2': { text: "Zustimmen zu kooperieren" },
        },
      },
      'node-21': {
        title: "Letztes Gefecht",
        narration: "Sie verbarrikadieren die Tür und ziehen Ihre Waffe. Clara hilft Eddie, Druckmaschinen zu bewegen, um Deckung zu schaffen. »Wir kommen hier nie lebend raus«, sagt sie und lädt eine Schrotflinte. Moranos Männer brechen durch, und das Büro wird zum Kriegsgebiet. Sie sind festgenagelt, in der Unterzahl, aber die Pressen laufen weiter – jedes Exemplar ist eine Kugel gegen das Protokoll. »Eine Minute bis zur Verteilung«, ruft Eddie. Dann Sirenen – echte Polizei. Moranos Männer zögern.",
        choices: {
          'choice-21-1': { text: "Der Polizei ergeben" },
          'choice-21-2': { text: "Im Chaos fliehen" },
        },
      },
      'node-22': {
        title: "Der Deal",
        narration: "Sie übergeben den Schlüssel zum Lagerraum. Morano lächelt – das Lächeln eines Raubtiers, das gewonnen hat. »Kluge Wahl, Malone. Du bekommst dein Geld morgen.« Seine Männer nehmen Clara. »Sie ist nicht Teil des Deals«, protestieren Sie. Morano zuckt mit den Schultern. »War sie nie.« Sie fahren weg und lassen Sie allein mit Blutgeld in Ihrer Zukunft und Verrat in Ihrem Herzen. Aber Sie sind noch nicht geschlagen. Sie haben einen Zweitschlüssel anfertigen lassen. Sie können die Beweise immer noch erreichen.",
        choices: {
          'choice-22-1': { text: "Den Zweitschlüssel nutzen, um Clara zu retten" },
          'choice-22-2': { text: "Das Geld nehmen und verschwinden" },
        },
      },
      'node-23': {
        title: "Schusswechsel",
        narration: "Sie ziehen und feuern in einer Bewegung. Moranos Schulter bricht in Blut aus. Seine Männer stieben auseinander, als Sie Clara packen und rennen. Kugeln jagen Sie die Gasse hinunter. Sie biegen um eine Ecke und finden eine Sackgasse – einen Maschendrahtzaun mit Stacheldraht oben. Hinter Ihnen rücken Moranos Männer vor. »Klettere«, sagen Sie Clara und heben sie hoch. Sie feuern, um sie zurückzuhalten, die Munition geht aus. Sie ist drüber. Sie sind dran – aber eine Kugel trifft Sie ins Bein.",
        choices: {
          'choice-23-1': { text: "Clara sagen, sie soll rennen, während Sie sie aufhalten" },
          'choice-23-2': { text: "Versuchen zu klettern trotz der Wunde" },
        },
      },
      'node-24': {
        title: "Die Feds",
        narration: "Die Bundesarrestzelle ist kalt und schmucklos. Sie sind seit drei Tagen hier. Kein Anwalt, kein Anruf, keine Anklage. Schließlich tritt ein Mann im grauen Anzug ein. »Das Protokoll existiert, weil wir es erlauben«, sagt er. »Es wahrt die Ordnung.« Er setzt sich auf die Pritsche. »Der Senator ist tot – Selbstmord. Morano ist verschwunden. Clara wird aussagen, dass Sie sie entführt haben. Es sei denn...« Er holt ein Dokument hervor. »Unterschreiben Sie dieses Geständnis, nehmen Sie zehn Jahre, und sie geht frei.«",
        choices: {
          'choice-24-1': { text: "Das Geständnis unterschreiben, um Clara zu retten" },
          'choice-24-2': { text: "Ablehnen und einen echten Prozess fordern" },
        },
      },
      'node-25': {
        title: "Der leichte Weg",
        narration: "Sie nehmen einen Dampfer nach Manila unter falschem Namen. Die fünfzigtausend Dollar kaufen Ihnen ein neues Leben – ein Haus am Strand, ein Fischerboot. Aber manche Nächte wachen Sie schweißgebadet auf und hören Claras Schreie. Sie lesen über den Tod des Senators – Selbstmord, sagten sie. Das Protokoll macht weiter, stärker als je zuvor. Eddies Zeitung wurde geschlossen. Sie sind am Leben, reich und gebrochen. Der gläserne Schlüssel liegt auf Ihrem Schreibtisch. Sie sagen sich, Überleben ist sein eigener Sieg.",
        choices: {
          'choice-25-1': { text: "Mit Ihrer Wahl leben" },
          'choice-25-2': { text: "Nach San Francisco zurückkehren für Erlösung" },
        },
      },
      'node-26': {
        title: "Die Verhaftung",
        narration: "Sie ergeben sich der Polizei, Hände hoch. Sie finden Sie mit rauchenden Waffen und toten Männern – aber sie finden auch die Beweise. Eine Woche lang ist es der Skandal des Jahrhunderts. Das Protokoll enthüllt, Beamte treten zurück, Morano verhaftet. Sie werden als Held gefeiert. Aber dann verschiebt sich das Narrativ. Zeugen widerrufen. Beweise verschwinden. Sie werden wegen Mordes, Verschwörung angeklagt. Der Prozess ist schnell. Die Jury ist gekauft. Der Richter trägt eine Anstecknadel mit einem gläsernen Schlüssel.",
        choices: {
          'choice-26-1': { text: "Das Schuldurteil akzeptieren" },
          'choice-26-2': { text: "Einen Gefängnisausbruch versuchen" },
        },
      },
      'node-27': {
        title: "Die Flucht",
        narration: "Sie rennen durch die hinteren Korridore der Druckerei, Clara führt den Weg. Sie kennt diese Straßen. Sie tauchen in Chinatown auf und verlieren sich in den Menschenmengen des Nachtmarkts. In einem sicheren Haus holen Sie Atem. »Wir müssen verschwinden«, sagt Clara. »Mein Bruder hatte Konten in der Schweiz. Wir können neu anfangen.« Sie bietet ein Leben mit ihr an. Aber Eddies Geschichte lief nie. Die Beweise sind verstreut. Das Protokoll gewinnt. Können Sie damit leben?",
        choices: {
          'choice-27-1': { text: "Mit Clara gehen und neu anfangen" },
          'choice-27-2': { text: "Bleiben und aus den Schatten kämpfen" },
        },
      },
      'node-28': {
        title: "Gefängnis",
        narration: "San Quentin ist kalt und ewig. Sie sind seit fünf Jahren hier, vielleicht zehn. Clara wurde nach ihrer Aussage freigelassen; Sie hörten, sie hat einen Diplomaten geheiratet. Die Wärter wissen, wer Sie sind – der Detektiv, der fast die Stadt zu Fall brachte. Manche respektieren Sie. Andere lassen Sie bezahlen. Aber Sie haben gelernt zu überleben. Sie haben Freunde gefunden – die Art, die sich an Schulden erinnert. Eines Tages kommt ein neuer Gefangener an. »Das Protokoll operiert immer noch. Mein Vater fand Beweise. Sie töteten ihn.«",
        choices: {
          'choice-28-1': { text: "Den jungen Mann trainieren, zurückzuschlagen" },
          'choice-28-2': { text: "Ihm sagen, er soll sich schützen" },
        },
      },
      'node-29': {
        title: "Die Rückkehr",
        narration: "Sie kehren unter falschem Namen nach San Francisco zurück. Die Stadt sieht gleich aus – derselbe Nebel, dieselbe Korruption. Aber Sie haben sich verändert. Manila lehrte Sie Geduld. Jetzt operieren Sie in den Schatten, sammeln Informationen, bauen Fälle, die nicht gekauft werden können. Sie finden Eddie – gebrochen, Alkoholiker, aber immer noch Journalist. Sie finden Sam Chen – degradiert, verbittert, aber immer noch ein Cop, der sich kümmert. Zusammen bilden Sie den Widerstand des Gläsernen Schlüssels. Kleine Siege zuerst. Aber es spricht sich herum.",
        choices: {
          'choice-29-1': { text: "Die Kampagne gegen das Protokoll eskalieren" },
          'choice-29-2': { text: "Sich auf den Schutz der Unschuldigen konzentrieren" },
        },
      },
      'node-30': {
        title: "Exil",
        narration: "Die Schweiz ist schön und bedeutungslos. Sie und Clara leben in einem Chalet mit Blick auf einen See, der zu blau ist, um echt zu sein. Das Geld reicht – Blutgeld, gereinigt durch Distanz. Sie lernen Französisch, fahren im Winter Ski, tun so, als wären Sie glücklich. Clara schreibt Memoiren, die sie nie veröffentlichen wird. Eddie schickt Briefe über San Francisco. Das Protokoll leitet immer noch alles. Ihr Name ist vergessen. Aber Sie sind am Leben. Zusammen. Sicher. In dunklen Nächten halten Sie den gläsernen Schlüssel und fragen sich, ob Feiglinge Frieden verdienen.",
        choices: {
          'choice-30-1': { text: "Claras Memoiren veröffentlichen" },
          'choice-30-2': { text: "Dieses Leben akzeptieren" },
        },
      },
      'node-31': {
        title: "Schattenkrieg",
        narration: "Sie werden ein Geist. Kein Name, keine Adresse, kein Gesicht zweimal dasselbe. Aus den Schatten schlagen Sie gegen das Protokoll – Dokumente leaken, Ziele warnen, Operationen sabotieren. Sie können nicht gewinnen, aber Sie können ihnen wehtun. Jeder Sieg kostet etwas – ein verbranntes Versteck, ein verhafteter Kontakt. Clara arbeitet ein Jahr lang mit Ihnen, bevor die Gefahr zu groß wird. Jetzt arbeiten Sie allein. Sie haben ein Preisgeld von einer Million Dollar auf Ihren Kopf ausgesetzt.",
        choices: {
          'choice-31-1': { text: "Einen finalen Angriff starten" },
          'choice-31-2': { text: "Andere rekrutieren, um den Kampf fortzusetzen" },
        },
      },
      'node-32': {
        title: "Der Mentor",
        narration: "Sie bilden den Jungen aus – James, Sohn eines vom Protokoll ermordeten Ratsherrn. Er ist schlau, wütend, entschlossen. Sie bringen ihm alles bei. Jahre vergehen. Er wird entlassen und schließt sich dem Widerstand an. Sie beobachten, wie Berichte hereinkommen: James entlarvte einen korrupten Richter, rettete einen Zeugen. Sie sind stolz und haben Angst. Das Protokoll weiß, dass er zu Ihnen gehört. Ein Brief kommt an – James' Handschrift: »Ich gehe auf den Kopf los. Den Mann über Morano. Ich weiß, wer er ist.«",
        choices: {
          'choice-32-1': { text: "Ihn ermutigen, zu beenden, was Sie begonnen haben" },
          'choice-32-2': { text: "Ihn warnen, sich zu schützen" },
        },
      },
      'node-33': {
        title: "Der Wächter",
        narration: "Sie konzentrieren sich auf Schutz statt Angriff. Der Widerstand wird ein Schild für die Unschuldigen – Zeugen eskortieren, Beamte warnen, Beweise vernichten. Sie sind keine Helden; Sie sind Wächter. Clara schließt sich Ihnen an – sie konnte nicht fernbleiben. Zusammen bauen Sie etwas Dauerhaftes: ein Netzwerk guter Menschen an schlechten Orten. Das Protokoll kann Sie nicht eliminieren; Sie sind zu verstreut. Jahre vergehen. Sie werden alt in den Schatten. Dann kommt eine neue Generation an – jung, wild, bereit.",
        choices: {
          'choice-33-1': { text: "Die Fackel an die nächste Generation weitergeben" },
          'choice-33-2': { text: "Bleiben und sie führen" },
        },
      },
      'node-34': {
        title: "Die Memoiren",
        narration: "Claras Memoiren werden eine internationale Sensation. In zwanzig Sprachen übersetzt, in Parlamenten diskutiert. Sie nennt Namen, Daten, Verbrechen. Das Protokoll bemüht sich, den Schaden zu begrenzen, aber die Wahrheit ist entkommen. Senatoren treten zurück, Richter werden des Amtes enthoben. Sie beobachten von der Schweiz aus, wie das Imperium zerfällt. Aber Rache kommt schnell – Attentäter, juristische Herausforderungen. Sie sind gezwungen, wieder umzuziehen. Aber als Sie die Schlagzeilen lesen – »Korruptionsring aufgedeckt« – wissen Sie, dass es das wert war.",
        choices: {
          'choice-34-1': { text: "Ihre Tage in Frieden leben" },
          'choice-34-2': { text: "Zurückkehren, um beim Wiederaufbau zu helfen" },
        },
      },
      'node-35': {
        title: "Das Vermächtnis",
        narration: "Sie rekrutieren vorsichtig, bilden andere aus, Schatten zu sein, Widerstand zu leisten, ohne Monster zu werden. Der Widerstand wächst zu etwas, gegen das das Protokoll nicht kämpfen kann – nicht weil es stark ist, sondern weil es überall ist. Wenn Sie zu alt zum Rennen sind, werden Sie Lehrer, eine Legende. »Sei gut, oder der Gläserne Schlüssel findet dich.« Clara kehrt zurück, älter, weiser. Auf dem Sterbebett geben Sie den gläsernen Schlüssel an den jüngsten Rekruten weiter. »Denk dran«, flüstern Sie, »wir kämpfen nicht, um zu gewinnen. Wir kämpfen, weil es richtig ist.«",
        choices: {
          'choice-35-1': { text: "Das Ende akzeptieren" },
          'choice-35-2': { text: "Führung an die nächste Generation weitergeben" },
        },
      },
      'node-36': {
        title: "ENDE: Die Revolution",
        narration: "James hat Erfolg, wo Sie scheiterten. Er findet den Mann über Morano – den Bundesrichter, der das Protokoll vor siebzig Jahren schuf. Die Beweise, die James sammelt, bringen nicht nur die Organisation zu Fall, sondern das korrupte System. Von Ihrer Gefängniszelle aus sehen Sie die Prozesse im Fernsehen. Einer nach dem anderen fallen die Mächtigen. Neue Gesetze werden verabschiedet. Besucher kommen: James, jetzt ein Reformer; Clara, die Sie nie vergessen hat. Sie sterben als alter Mann, immer noch im Gefängnis, aber frei.",
        choices: {},
      },
      'node-37': {
        title: "ENDE: Der Überlebende",
        narration: "Sie wählten Überleben über Ruhm, und Überleben ist, was Sie bekamen. Jahre im Gefängnis, Jahrzehnte im Versteck. Aber Sie sind am Leben, wenn so viele andere es nicht sind. Das Protokoll existiert noch – geschwächt, verändert. Manchmal sehen Sie die neue Generation kämpfen. Aber Sie sind jetzt alt. Stattdessen schreiben Sie – Memoiren, Ratschläge. Clara besucht Sie in Ihrer kleinen Wohnung. An Ihrem letzten Tag hält sie Ihre Hand. »Du hast es gut gemacht, Jack«, flüstert sie. Kein Heldenende, aber ein menschliches. Das ist genug.",
        choices: {},
      },
      'node-38': {
        title: "ENDE: Die Neue Dämmerung",
        narration: "Sie kehren in eine veränderte Stadt zurück. Das Protokoll ist weg – wirklich weg. San Francisco erfindet sich neu, sauberer und ehrlicher. Sie und Clara eröffnen eine Detektei – diesmal legal. Der gläserne Schlüssel hängt in Ihrem Fenster. Junge Leute kommen zu Ihnen um Rat. Jahre später werden Sie in den Stadtrat gewählt. Von Ihrem Büro aus sehen Sie die Bucht glitzern. Der Nebel zieht immer noch herein, aber er versteckt keine Monster mehr. Sie haben das getan.",
        choices: {},
      },
      'node-39': {
        title: "ENDE: Der Märtyrer",
        narration: "Die Kugel war für Clara bestimmt, aber Sie traten davor. Sie sterben in ihren Armen auf einer schmutzigen Straße, der gläserne Schlüssel fällt aus Ihrer Tasche. Es ist passend – Sie sollten immer für etwas zerbrechen. Die Beerdigung ist klein; das Denkmal ist groß. Posthum begnadigt, gefeiert, betrauert. Clara schreibt Ihre Geschichte, Eddie veröffentlicht sie. Das Protokoll fällt nicht durch Gewalt, sondern durch Scham. Sie werden ein Symbol. Sie würden es hassen, ehrlich gesagt. Aber Symbole überleben Männer. Eine Person kann gegen die Dunkelheit stehen.",
        choices: {},
      },
      'node-40': {
        title: "ENDE: Der Unsichtbare Wächter",
        narration: "Sie hörten nie auf zu kämpfen. Keine Schlagzeilen, kein Ruhm, nur endlose Nächte der Wachsamkeit. Der Widerstand wird Ihre Familie. Clara bleibt bei Ihnen bis zum Ende. Sie retteten Hunderte von Leben – jedes ein Sieg, den die Geschichte nicht aufzeichnen wird. Als Sie schließlich fallen, gibt es keine Beerdigung. Nur ein gläserner Schlüssel, begraben mit Ihrer Asche, und Flüstern über das Phantom, das die Unschuldigen beschützte. Sie waren nie der Held, den die Stadt wollte. Sie waren der Wächter, den sie brauchte. Und Wächter müssen unsichtbar bleiben.",
        choices: {},
      },
    },
  },
  pt: {
    title: "O Protocolo da Chave de Vidro",
    description: "Um mistério noir ambientado na São Francisco dos anos 40. O detetive particular Jack Malone deve descobrir a verdade por trás do assassinato do filho de um senador, uma misteriosa chave de vidro e uma conspiração que atinge os mais altos níveis de poder.",
    author: "Sam Vickers",
    nodes: {
      'node-1': {
        title: "A Chave de Vidro",
        narration: "A chuva cai forte nas pedras da rua fora do seu escritório. Você é Jack Malone, detetive particular, e esta noite um homem moribundo tropeçou na sua porta com uma chave de vidro na mão e uma bala no peito. 'Eles estão vindo', ele ofegou. 'O Protocolo... é real.' Antes de morrer, ele pressionou a chave na sua palma. É fria, translúcida e gravada com símbolos que você não reconhece. Agora você ouve passos na escada - botas pesadas, mais de um par. A chave de vidro queima no seu bolso como uma brasa congelada.",
        choices: {
          'choice-1-1': { text: "Escapar pela saída de incêndio" },
          'choice-1-2': { text: "Confrontar quem está vindo" },
        },
      },
      'node-2': {
        title: "Saída de Incêndio",
        narration: "Você desliza pela janela e desce a enferrujada saída de incêndio assim que a porta do seu escritório se abre com estrondo. Dois homens em sobretudos escuros entram, armas em punho. Do seu poleiro nas sombras, você os vê examinar o corpo. 'Ele falou', diz um. 'Descubra para quem ele contou. O Protocolo não pode ser comprometido.' Eles pegam a carteira do homem morto e deixam uma caixa de fósforos na sua mesa - The Blue Orchid Club. Um aviso ou uma pista? Você espera até que eles se vão, depois desce para o beco abaixo. A chuva encharca seu sobretudo.",
        choices: {
          'choice-2-1': { text: "Seguir os homens discretamente" },
          'choice-2-2': { text: "Ir ao Blue Orchid Club" },
        },
      },
      'node-3': {
        title: "Confronto",
        narration: "Você se mantém firme, revólver na mão, enquanto a porta se abre. Dois homens congelam na porta, surpresos ao te encontrar armado. 'A chave', exige um. 'Entregue-a e você sai andando.' Você reconhece o tipo - músculos contratados. Mas atrás deles, um sedã preto espera no meio-fio, e você vislumbra uma silhueta observando do banco de trás. Quem quer que trabalhe para eles tem dinheiro e poder. Você poderia lutar, mas as chances são ruins. Ou você poderia ganhar tempo com palavras.",
        choices: {
          'choice-3-1': { text: "Atirar e buscar cobertura" },
          'choice-3-2': { text: "Negociar por informações" },
        },
      },
      'node-4': {
        title: "Seguindo",
        narration: "Você segue o sedã dos homens pelas ruas molhadas pela chuva até Pacific Heights, onde a elite da cidade vive atrás de portões de ferro forjado. Eles entram em uma mansão que pertence ao Senador Blackwell, uma figura poderosa com rumores de conexões com a máfia. Dos arbustos, você observa com binóculos enquanto eles relatam a um homem de terno branco - Vinnie 'The Ghost' Morano, o chefe do crime que todos temem. Ele segura algo de vidro que captura a luz.",
        choices: {
          'choice-4-1': { text: "Invadir a mansão" },
          'choice-4-2': { text: "Investigar a identidade do homem morto" },
        },
      },
      'node-5': {
        title: "O Clube Blue Orchid",
        narration: "O Blue Orchid é um clube de jazz no Tenderloin, tudo fumaça, saxofones e segredos. A barman - Ruby, que você conhece há anos - empalidece quando você mostra a chave de vidro. 'Esta é a marca do Senador Blackwell. O filho dele tinha uma igual antes de morrer.' Ela serve uísque com a mão trêmula. 'A filha do senador, Clara, está aqui agora, na cabine dos fundos. Ela tem feito perguntas sobre o irmão.'",
        choices: {
          'choice-5-1': { text: "Falar com Clara Blackwell" },
          'choice-5-2': { text: "Vasculhar o escritório do Senador" },
        },
      },
      'node-6': {
        title: "Tiroteio",
        narration: "Seu tiro atinge o primeiro homem no ombro; ele solta a arma com um grito. Você mergulha atrás da sua mesa enquanto o fogo de retorno estilhaça a madeira. O segundo atirador é cauteloso - profissional. Você chuta o painel secreto e desliza para o espaço entre as paredes. Acima, você os ouve vasculhando. 'Ele está com a chave', um murmura. 'O chefe a quer esta noite.' Você emerge dois prédios abaixo, sem fôlego, mas agora está desarmado e caçado.",
        choices: {
          'choice-6-1': { text: "Ir ao seu contato no Chronicle" },
          'choice-6-2': { text: "Encontrar um esconderijo" },
        },
      },
      'node-7': {
        title: "Negociação",
        narration: "'Quem está pagando vocês?' você pergunta, mantendo a arma firme. 'O Senador? Morano?' O atirador principal sorri. 'Você acha que é esperto, detetive. Mas você está segurando algo que pertence a pessoas poderosas. O Protocolo não é apenas uma palavra - é uma organização mais antiga que esta cidade. Nos dê a chave e você ganha cinquenta mil dólares. Recuse...' Ele acena para o homem morto. '...você acaba como sua visita.'",
        choices: {
          'choice-7-1': { text: "Fingir concordar, depois escapar" },
          'choice-7-2': { text: "Recusar e blefar para sair" },
        },
      },
      'node-8': {
        title: "Infiltração na Mansão",
        narration: "Você escala o muro do jardim e entra por uma entrada de serviço. A mansão respira dinheiro antigo e segredos mais antigos. Do corredor, você ouve Morano discutindo com uma mulher - educada, zangada. 'Meu irmão morreu por causa do seu Protocolo', diz ela. 'Eu quero sair.' 'Ninguém sai, Clara', responde Morano. Você espia pela esquina para ver Morano apontando uma arma para Clara Blackwell - a filha do Senador.",
        choices: {
          'choice-8-1': { text: "Resgatar Clara Blackwell" },
          'choice-8-2': { text: "Vasculhar o escritório por evidências" },
        },
      },
      'node-9': {
        title: "Clara Blackwell",
        narration: "Clara Blackwell é jovem, rica e está aterrorizada. Quando você mostra a chave de vidro, ela engasga. 'Essa é uma das sete. Meu irmão tinha a sétima.' O Protocolo é um acordo secreto entre a elite da cidade e o crime organizado. Existem sete chaves; os portadores controlam blocos de votação, capitães de polícia, juízes. O irmão dela descobriu o Protocolo e tentou expô-lo. 'Eles o mataram. Fizeram parecer um acidente.' A mão dela treme.",
        choices: {
          'choice-9-1': { text: "Concordar em ajudar Clara" },
          'choice-9-2': { text: "Investigar a morte do irmão dela primeiro" },
        },
      },
      'node-10': {
        title: "O Chronicle",
        narration: "Seu contato Eddie dirige a seção de crimes no Chronicle. Ele é cético até você mostrar a chave de vidro. 'Ouvi rumores', ele admite. 'Três mortes em seis meses - todas ligadas ao Senador Blackwell. Todas consideradas acidentes.' Ele mostra fotos: cada vítima tinha poder, cada uma morreu com um estranho objeto de vidro por perto. 'A polícia enterrou esses casos rápido.' Os olhos de Eddie brilham. 'Me dê direitos exclusivos e eu te dou tudo.'",
        choices: {
          'choice-10-1': { text: "Concordar com os termos de Eddie" },
          'choice-10-2': { text: "Recusar e investigar sozinho" },
        },
      },
      'node-11': {
        title: "Esconderijo",
        narration: "Você se esconde em um albergue na orla, onde ninguém pergunta nomes. A chave de vidro captura a luz fraca de uma janela rachada. Você a examina de perto - há um número gravado na haste: 4. A quarta chave de sete. Uma batida gela seu sangue, mas é o Detetive Sam Chen da SFPD. 'Você está fundo nisso, Jack', ele diz. 'Morano colocou um preço na sua cabeça. Mas eu te devo uma.' Ele te entrega um arquivo.",
        choices: {
          'choice-11-1': { text: "Pedir proteção policial a Sam" },
          'choice-11-2': { text: "Usar a informação de Sam" },
        },
      },
      'node-12': {
        title: "O Resgate",
        narration: "Você entra, arma em punho. Morano se vira, surpresa piscando - depois raiva. Clara grita enquanto tiros ecoam. Você a derruba atrás de um sofá enquanto balas estraçalham o estofamento. 'A escada dos fundos', ela ofega. 'Carro na garagem.' Você dá cobertura e corre. Balas te seguem, mas você chega à garagem - um conversível Packard. Clara desliza para dentro, segurando uma pasta de couro. 'Membros do Protocolo', ela ofega. 'Nomes, contas, tudo.'",
        choices: {
          'choice-12-1': { text: "Dirigir para o escritório do jornal" },
          'choice-12-2': { text: "Esconder as evidências primeiro" },
        },
      },
      'node-13': {
        title: "O Escritório",
        narration: "Enquanto Morano ameaça Clara, você desliza para o escritório do Senador. Um santuário ao poder - fotos com presidentes, prêmios, um cofre trancado atrás de um retrato. A chave de vidro se encaixa perfeitamente em uma fenda escondida na mesa. Uma gaveta se abre, revelando documentos que gelam seu sangue. O Protocolo não é apenas corrupção - é um governo paralelo. Sete chaves, sete portadores, controlando tudo, das docas à Prefeitura.",
        choices: {
          'choice-13-1': { text: "Esconder-se e continuar fotografando" },
          'choice-13-2': { text: "Escapar com o que você tem" },
        },
      },
      'node-14': {
        title: "Parceria",
        narration: "A pesquisa de Eddie preenche as lacunas. O Protocolo começou durante a Corrida do Ouro - sete empresários controlando docas, bancos, políticos. Agora é algo mais sinistro: empreendimento criminoso com imunidade legal. 'Aqui está o problema', diz Eddie. 'Cada portador da chave tem um cargo no governo. O Prefeito. O Chefe de Polícia. Até um juiz federal.' Você percebe o alcance: expor o Protocolo significa acusar as figuras mais poderosas da cidade.",
        choices: {
          'choice-14-1': { text: "Publicar a história imediatamente" },
          'choice-14-2': { text: "Reunir mais evidências primeiro" },
        },
      },
      'node-15': {
        title: "Investigação Solo",
        narration: "Você trabalha melhor sozinho. Thomas Reed tinha uma irmã - Margaret, uma bibliotecária em Oakland. Você a encontra em uma pequena casa cercada por livros. 'Thomas disse que alguém viria', diz ela, entregando uma carta. A carta detalha como Reed descobriu o Protocolo enquanto auditava as finanças do Senador. Sete chaves, sete milhões em subornos, sete assassinatos encobertos. 'As chaves não são apenas símbolos', escreveu Reed.",
        choices: {
          'choice-15-1': { text: "Começar pelo maior banco" },
          'choice-15-2': { text: "Investigar o Senador diretamente" },
        },
      },
      'node-16': {
        title: "O Escritório do Chronicle",
        narration: "O escritório do jornal vibra com a energia do prazo final. Eddie expõe a história - o Protocolo, as chaves, os assassinatos. A pasta de Clara fornece nomes e contas bancárias. O suficiente para indiciar metade do governo da cidade. 'Imprimimos esta noite', diz Eddie. Mas enquanto as prensas rolam, os homens de Morano cercam o prédio. Eles não estão aqui para negociar. Tiros estilhaçam janelas. 'O porão', grita Eddie. 'Túnel para a gráfica.'",
        choices: {
          'choice-16-1': { text: "Escapar pelo túnel" },
          'choice-16-2': { text: "Ficar e proteger as evidências" },
        },
      },
      'node-17': {
        title: "O Esconderijo",
        narration: "Você dirige para um depósito no Mission District - pago com um nome falso. A pasta de Clara vai para dentro, junto com suas fotos. 'Este é nosso seguro', você diz a ela. Mas enquanto tranca a porta, faróis iluminam o beco. Morano sai de um Cadillac, ladeado por atiradores. 'Jogada inteligente, Malone', ele chama. Ele segura sua própria chave de vidro - número 6. 'Me dê a garota e a pasta, você sai rico.'",
        choices: {
          'choice-17-1': { text: "Entregar a chave do depósito" },
          'choice-17-2': { text: "Lutar para sair" },
        },
      },
      'node-18': {
        title: "O Cofre",
        narration: "O First National Bank abre às nove. Você está esperando na porta com a lista de Reed e sua chave de vidro. O gerente - Halloway - empalidece quando vê a chave. 'Essa caixa requer duas chaves.' Ele mostra a fechadura - duas fendas, numeradas 4 e 7. Você tem a número 4. Reed tinha a número 7, mas não estava no corpo dele. 'Quem tem a outra chave?' você exige. Halloway verifica seu registro. 'O Senador Blackwell a recolheu ontem.'",
        choices: {
          'choice-18-1': { text: "Invadir o cofre à noite" },
          'choice-18-2': { text: "Confrontar o Senador Blackwell diretamente" },
        },
      },
      'node-19': {
        title: "O Senador",
        narration: "Você encontra o Senador Blackwell em seu clube de campo. Quando você se aproxima, ele não parece surpreso. 'Malone. Imaginei quando você me encontraria.' Ele dispensa seus guardas. 'Caminhe comigo, detetive. O décimo sétimo buraco é privado.' No green, ele para. 'Você acha que sou o vilão. Não sou - sou um prisioneiro. O Protocolo começou com meu pai. Tentei sair uma vez; mataram minha esposa em um 'acidente de carro' igual ao do meu filho.' Ele segura a chave número 7.",
        choices: {
          'choice-19-1': { text: "Confiar no Senador" },
          'choice-19-2': { text: "Tomar a chave à força" },
        },
      },
      'node-20': {
        title: "O Túnel",
        narration: "O túnel é escuro e cheira a tinta. Você guia Clara, segurando a pasta. Atrás de você, tiros ecoam - Eddie está segurando-os. O túnel se abre na gráfica. 'Conseguimos', respira Clara. Mas a porta se abre - agentes federais. 'Departamento de Justiça. Vocês estão presos.' Ele pega a pasta. 'Esta evidência é confidencial. O Protocolo é segurança nacional.' Ele se inclina. 'Coopere, e você desaparece para uma prisão agradável.'",
        choices: {
          'choice-20-1': { text: "Exigir ver um advogado" },
          'choice-20-2': { text: "Concordar em cooperar" },
        },
      },
      'node-21': {
        title: "Última Resistência",
        narration: "Você bloqueia a porta e saca sua arma. Clara ajuda Eddie a mover as prensas para criar cobertura. 'Nunca sairemos vivos', diz ela, carregando uma espingarda. Os homens de Morano invadem, e o escritório se torna uma zona de guerra. Você está encurralado, em menor número, mas as prensas continuam rodando - cada cópia é uma bala contra o Protocolo. 'Um minuto até a distribuição', chama Eddie. Então sirenes - polícia de verdade. Os homens de Morano hesitam.",
        choices: {
          'choice-21-1': { text: "Render-se à polícia" },
          'choice-21-2': { text: "Escapar no caos" },
        },
      },
      'node-22': {
        title: "O Acordo",
        narration: "Você entrega a chave do depósito. Morano sorri - o sorriso de um predador que venceu. 'Escolha inteligente, Malone. Você receberá seu dinheiro amanhã.' Seus homens levam Clara. 'Ela não faz parte do acordo', você protesta. Morano dá de ombros. 'Ela nunca fez.' Eles vão embora, deixando você sozinho com dinheiro de sangue no futuro e traição no coração. Mas você não está derrotado ainda. Você mandou fazer uma chave duplicada. Você ainda pode alcançar as evidências.",
        choices: {
          'choice-22-1': { text: "Usar a chave duplicada para resgatar Clara" },
          'choice-22-2': { text: "Pegar o dinheiro e desaparecer" },
        },
      },
      'node-23': {
        title: "Tiroteio",
        narration: "Você saca e atira em um movimento. O ombro de Morano explode em sangue. Seus homens se dispersam enquanto você agarra Clara e corre. Balas te perseguem pelo beco. Você vira uma esquina e encontra um beco sem saída - uma cerca de arame farpado. Atrás de você, os homens de Morano avançam. 'Suba', você diz a Clara, impulsionando-a. Você atira para mantê-los afastados, ficando sem balas. Ela passou. Sua vez - mas uma bala te atinge na perna.",
        choices: {
          'choice-23-1': { text: "Dizer a Clara para correr enquanto você os segura" },
          'choice-23-2': { text: "Tentar escalar apesar do ferimento" },
        },
      },
      'node-24': {
        title: "Os Federais",
        narration: "A cela federal é fria e sem características. Você está aqui há três dias. Sem advogado, sem telefonema, sem acusações. Finalmente, um homem de terno cinza entra. 'O Protocolo existe porque nós permitimos', diz ele. 'Ele mantém a ordem.' Ele senta no beliche. 'O Senador está morto - suicídio. Morano desapareceu. Clara testemunhará que você a sequestrou. A menos que...' Ele produz um documento. 'Assine esta confissão, pegue dez anos, e ela sai livre.'",
        choices: {
          'choice-24-1': { text: "Assinar a confissão para salvar Clara" },
          'choice-24-2': { text: "Recusar e exigir um julgamento real" },
        },
      },
      'node-25': {
        title: "O Caminho Fácil",
        narration: "Você pega um navio para Manila com um nome falso. Os cinquenta mil dólares compram uma nova vida - uma casa na praia, um barco de pesca. Mas algumas noites você acorda suando, ouvindo os gritos de Clara. Você lê sobre a morte do Senador - suicídio, disseram. O Protocolo continua, mais forte do que nunca. O jornal de Eddie foi fechado. Você está vivo, rico e quebrado. A chave de vidro está na sua mesa. Você diz a si mesmo que a sobrevivência é sua própria vitória.",
        choices: {
          'choice-25-1': { text: "Viver com sua escolha" },
          'choice-25-2': { text: "Voltar a São Francisco por redenção" },
        },
      },
      'node-26': {
        title: "A Prisão",
        narration: "Você se rende à polícia, mãos para o alto. Eles te encontram com armas fumegantes e homens mortos - mas também encontram as evidências. Por uma semana, é o escândalo do século. O Protocolo exposto, funcionários renunciando, Morano preso. Você é aclamado como herói. Mas então a narrativa muda. Testemunhas se retratam. Evidências desaparecem. Você é acusado de assassinato, conspiração. O julgamento é rápido. O júri é comprado. O juiz usa um broche de chave de vidro.",
        choices: {
          'choice-26-1': { text: "Aceitar o veredicto de culpado" },
          'choice-26-2': { text: "Tentar uma fuga da prisão" },
        },
      },
      'node-27': {
        title: "A Fuga",
        narration: "Você corre pelos corredores dos fundos da gráfica, Clara liderando o caminho. Ela conhece essas ruas. Você emerge em Chinatown, perdendo-se nas multidões do mercado noturno. Em um esconderijo, você recupera o fôlego. 'Precisamos desaparecer', diz Clara. 'Meu irmão tinha contas na Suíça. Podemos recomeçar.' Ela está oferecendo uma vida com ela. Mas a história de Eddie nunca foi publicada. As evidências estão espalhadas. O Protocolo vence. Você pode viver com isso?",
        choices: {
          'choice-27-1': { text: "Partir com Clara e recomeçar" },
          'choice-27-2': { text: "Ficar e lutar das sombras" },
        },
      },
      'node-28': {
        title: "Prisão",
        narration: "San Quentin é fria e eterna. Você está aqui há cinco anos, talvez dez. Clara foi libertada após testemunhar; você ouviu que ela se casou com um diplomata. Os guardas sabem quem você é - o detetive que quase derrubou a cidade. Alguns te respeitam. Outros te fazem pagar. Mas você aprendeu a sobreviver. Você fez amigos - o tipo que lembra de dívidas. Um dia, um novo prisioneiro chega. 'O Protocolo ainda está operando. Meu pai encontrou evidências. Eles o mataram.'",
        choices: {
          'choice-28-1': { text: "Treinar o jovem para revidar" },
          'choice-28-2': { text: "Dizer a ele para se proteger" },
        },
      },
      'node-29': {
        title: "O Retorno",
        narration: "Você volta a São Francisco com um nome falso. A cidade parece a mesma - mesma neblina, mesma corrupção. Mas você mudou. Manila te ensinou paciência. Agora você opera nas sombras, reunindo informações, construindo casos que não podem ser comprados. Você encontra Eddie - quebrado, alcoólatra, mas ainda um jornalista. Você encontra Sam Chen - rebaixado, amargo, mas ainda um policial que se importa. Juntos, vocês formam a Resistência da Chave de Vidro. Pequenas vitórias no início. Mas a palavra se espalha.",
        choices: {
          'choice-29-1': { text: "Escalar a campanha contra o Protocolo" },
          'choice-29-2': { text: "Focar em proteger os inocentes" },
        },
      },
      'node-30': {
        title: "Exílio",
        narration: "A Suíça é bonita e sem sentido. Você e Clara vivem em um chalé com vista para um lago que é azul demais para ser real. O dinheiro dura - dinheiro de sangue, purificado pela distância. Você aprende francês, esquia no inverno, finge ser feliz. Clara escreve um livro de memórias que nunca publicará. Eddie envia cartas sobre São Francisco. O Protocolo ainda controla tudo. Seu nome foi esquecido. Mas você está vivo. Juntos. Seguro. Em noites escuras, você segura a chave de vidro e se pergunta se covardes merecem paz.",
        choices: {
          'choice-30-1': { text: "Publicar as memórias de Clara" },
          'choice-30-2': { text: "Aceitar esta vida" },
        },
      },
      'node-31': {
        title: "Guerra nas Sombras",
        narration: "Você se torna um fantasma. Sem nome, sem endereço, sem rosto igual duas vezes. Das sombras, você ataca o Protocolo - vazando documentos, avisando alvos, sabotando operações. Você não pode vencer, mas pode machucá-los. Cada vitória custa algo - um esconderijo queimado, um contato preso. Clara trabalha com você por um ano antes que o perigo se torne demais. Agora você trabalha sozinho. Eles colocaram um preço de um milhão de dólares na sua cabeça.",
        choices: {
          'choice-31-1': { text: "Lançar um ataque final" },
          'choice-31-2': { text: "Recrutar outros para continuar a luta" },
        },
      },
      'node-32': {
        title: "O Mentor",
        narration: "Você treina o garoto - James, filho de um vereador assassinado pelo Protocolo. Ele é esperto, zangado, determinado. Você ensina tudo a ele. Anos se passam. Ele é libertado e se junta à Resistência. Você observa enquanto relatórios chegam: James expôs um juiz corrupto, salvou uma testemunha. Você está orgulhoso e com medo. O Protocolo sabe que ele é seu. Uma carta chega - letra de James: 'Estou indo atrás da cabeça. O homem acima de Morano. Eu sei quem ele é.'",
        choices: {
          'choice-32-1': { text: "Encorajá-lo a terminar o que você começou" },
          'choice-32-2': { text: "Avisá-lo para se proteger" },
        },
      },
      'node-33': {
        title: "O Guardião",
        narration: "Você foca na proteção em vez do ataque. A Resistência se torna um escudo para os inocentes - escoltando testemunhas, avisando funcionários, destruindo evidências. Vocês não são heróis; são guardiões. Clara se junta a você - ela não conseguiu ficar longe. Juntos, vocês constroem algo duradouro: uma rede de boas pessoas em lugares ruins. O Protocolo não pode te eliminar; você é muito difuso. Anos se passam. Você envelhece nas sombras. Então uma nova geração chega - jovem, feroz, pronta.",
        choices: {
          'choice-33-1': { text: "Passar a tocha para a próxima geração" },
          'choice-33-2': { text: "Ficar e guiá-los" },
        },
      },
      'node-34': {
        title: "As Memórias",
        narration: "As memórias de Clara se tornam uma sensação internacional. Traduzidas para vinte línguas, discutidas em parlamentos. Ela cita nomes, datas, crimes. O Protocolo corre para conter os danos, mas a verdade escapou. Senadores renunciam, juízes sofrem impeachment. Você assiste da Suíça enquanto o império desmorona. Mas a retaliação vem rápido - assassinos, desafios legais. Você é forçado a se mudar novamente. Mas ao ler as manchetes - 'Rede de Corrupção Exposta' - você sabe que valeu a pena.",
        choices: {
          'choice-34-1': { text: "Viver seus dias em paz" },
          'choice-34-2': { text: "Voltar para ajudar a reconstruir" },
        },
      },
      'node-35': {
        title: "O Legado",
        narration: "Você recruta cuidadosamente, treinando outros para serem sombras, para resistir sem se tornarem monstros. A Resistência cresce para algo que o Protocolo não pode combater - não porque é forte, mas porque está em toda parte. Quando você está muito velho para correr, você se torna um professor, uma lenda. 'Seja bom, ou a Chave de Vidro te encontrará.' Clara retorna, mais velha, mais sábia. Em seu leito de morte, você passa a chave de vidro para o recruta mais jovem. 'Lembre-se', você sussurra, 'não lutamos para vencer. Lutamos porque é o certo.'",
        choices: {
          'choice-35-1': { text: "Aceitar o fim" },
          'choice-35-2': { text: "Passar a liderança para a próxima geração" },
        },
      },
      'node-36': {
        title: "FIM: A Revolução",
        narration: "James consegue onde você falhou. Ele encontra o homem acima de Morano - o juiz federal que criou o Protocolo setenta anos atrás. As evidências que James reúne derrubam não apenas a organização, mas o sistema corrupto. Da sua cela de prisão, você assiste aos julgamentos na televisão. Um por um, os poderosos caem. Novas leis são aprovadas. Visitantes vêm: James, agora um reformador; Clara, que nunca te esqueceu. Você morre um homem velho, ainda na prisão, mas livre.",
        choices: {},
      },
      'node-37': {
        title: "FIM: O Sobrevivente",
        narration: "Você escolheu a sobrevivência em vez da glória, e sobrevivência é o que você conseguiu. Anos na prisão, décadas se escondendo. Mas você está vivo, quando tantos outros não estão. O Protocolo ainda existe - enfraquecido, mudado. Às vezes você vê a nova geração lutando. Mas você está velho agora. Em vez disso, você escreve - memórias, conselhos. Clara te visita em seu pequeno apartamento. No seu último dia, ela segura sua mão. 'Você fez bem, Jack', ela sussurra. Não um fim de herói, mas um humano. Isso é o suficiente.",
        choices: {},
      },
      'node-38': {
        title: "FIM: O Novo Amanhecer",
        narration: "Você retorna a uma cidade mudada. O Protocolo se foi - realmente se foi. São Francisco se reinventa, mais limpa e mais honesta. Você e Clara abrem uma agência de detetives - legítima desta vez. A chave de vidro está pendurada na sua janela. Jovens vêm te pedir conselhos. Anos depois, você é eleito para o conselho municipal. Do seu escritório, você vê a baía brilhando. A neblina ainda entra, mas não esconde mais monstros. Você fez isso.",
        choices: {},
      },
      'node-39': {
        title: "FIM: O Mártir",
        narration: "A bala era para Clara, mas você se interpôs. Você morre nos braços dela em uma rua suja, a chave de vidro caindo do seu bolso. É apropriado - você sempre ia se quebrar por algo. O funeral é pequeno; o monumento é grande. Postumamente perdoado, celebrado, lamentado. Clara escreve sua história, Eddie a publica. O Protocolo cai não pela força, mas pela vergonha. Você se torna um símbolo. Você odiaria, honestamente. Mas símbolos sobrevivem aos homens. Uma pessoa pode se levantar contra a escuridão.",
        choices: {},
      },
      'node-40': {
        title: "FIM: O Guardião Invisível",
        narration: "Você nunca parou de lutar. Sem manchetes, sem glória, apenas noites intermináveis de vigilância. A Resistência se torna sua família. Clara fica com você até o fim. Você salvou centenas de vidas - cada uma uma vitória que a história não registrará. Quando você finalmente cai, não há funeral. Apenas uma chave de vidro, enterrada com suas cinzas, e sussurros sobre o fantasma que protegia os inocentes. Você nunca foi o herói que a cidade queria. Você foi o guardião que ela precisava. E guardiões devem permanecer invisíveis.",
        choices: {},
      },
    },
  },
};
