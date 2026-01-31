import { Story } from '../types';

export const glassKeyProtocolStory: Story = {
  id: 'story-glass-key-protocol',
  title: 'The Glass Key Protocol',
  description:
    'A noir mystery set in 1940s San Francisco. Private investigator Jack Malone must uncover the truth behind a murdered senator\'s son, a mysterious glass key, and a conspiracy that reaches the highest levels of power.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400',
  author: 'Sam Vickers',
  genre: 'mystery',
  involvement: 'high',
  estimatedDuration: 35,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  totalNodes: 40,
  totalEndings: 5,
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      storyId: 'story-glass-key-protocol',
      type: 'start',
      title: 'The Glass Key',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'The rain falls hard on the cobblestones outside your office. You\'re Jack Malone, private detective, and tonight a dying man stumbled through your door with a glass key in his hand and a bullet in his chest. \'They\'re coming,\' he gasped. \'The Protocol... it\'s real.\' Before he died, he pressed the key into your palm. It\'s cold, translucent, and etched with symbols you don\'t recognize. Now you hear footsteps on the stairs -- heavy boots, more than one pair. The glass key burns in your pocket like a frozen ember.',
      choices: [
        {
          id: 'choice-1-1',
          text: 'Escape through the fire escape',
          targetNodeId: 'node-2',
          order: 1,
        },
        {
          id: 'choice-1-2',
          text: 'Confront whoever is coming',
          targetNodeId: 'node-3',
          order: 2,
        },
      ],
    },
    {
      id: 'node-2',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Fire Escape',
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        'You slip out the window and down the rusted fire escape just as your office door crashes open. Two men in dark overcoats enter, guns drawn. From your perch in the shadows, you see them examine the body. \'He talked,\' one says. \'Find who he told. The Protocol can\'t be compromised.\' They take the dead man\'s wallet and leave a matchbook on your desk -- The Blue Orchid Club. A warning or a clue? You wait until they\'re gone, then drop to the alley below. Rain soaks through your trench coat.',
      choices: [
        {
          id: 'choice-2-1',
          text: 'Follow the men discreetly',
          targetNodeId: 'node-4',
          order: 1,
        },
        {
          id: 'choice-2-2',
          text: 'Go to The Blue Orchid Club',
          targetNodeId: 'node-5',
          order: 2,
        },
      ],
    },
    {
      id: 'node-3',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Confrontation',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        'You stand your ground, revolver in hand, as the door bursts open. Two men freeze in the doorway, surprised to find you armed. \'The key,\' one demands. \'Hand it over and you walk away.\' You recognize the type -- hired muscle. But behind them, a black sedan idles at the curb, and you glimpse a silhouetted figure watching from the back seat. Whoever they work for has money and power. You could fight, but the odds are bad. Or you could buy time with words.',
      choices: [
        {
          id: 'choice-3-1',
          text: 'Shoot and dive for cover',
          targetNodeId: 'node-6',
          order: 1,
        },
        {
          id: 'choice-3-2',
          text: 'Negotiate for information',
          targetNodeId: 'node-7',
          order: 2,
        },
      ],
    },
    {
      id: 'node-4',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Shadowing',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        'You tail the men\'s sedan through rain-slicked streets to Pacific Heights, where the city\'s elite live behind wrought-iron gates. They enter a mansion that belongs to Senator Blackwell, a powerful figure rumored to have mob connections. From the bushes, you watch through binoculars as they report to a man in a white suit -- Vinnie \'The Ghost\' Morano, the crime boss everyone fears. He\'s holding something glass that catches the light.',
      choices: [
        {
          id: 'choice-4-1',
          text: 'Break into the mansion',
          targetNodeId: 'node-8',
          order: 1,
        },
        {
          id: 'choice-4-2',
          text: 'Investigate the dead man\'s identity',
          targetNodeId: 'node-9',
          order: 2,
        },
      ],
    },
    {
      id: 'node-5',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Blue Orchid Club',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        'The Blue Orchid is a jazz club in the Tenderloin, all smoke and saxophones and secrets. The bartender -- Ruby who you\'ve known for years -- goes pale when you show her the glass key. \'This is Senator Blackwell\'s mark. His son had one just like it before he died.\' She pours you whiskey with a shaking hand. \'The Senator\'s daughter Clara is here now, in the back booth. She\'s been asking questions about her brother.\'',
      choices: [
        {
          id: 'choice-5-1',
          text: 'Talk to Clara Blackwell',
          targetNodeId: 'node-9',
          order: 1,
        },
        {
          id: 'choice-5-2',
          text: 'Search the Senator\'s office',
          targetNodeId: 'node-10',
          order: 2,
        },
      ],
    },
    {
      id: 'node-6',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Gunfight',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'Your shot takes the first man in the shoulder; he drops his gun with a scream. You dive behind your desk as return fire splinters the wood. The second gunman is cautious -- professional. You kick open the secret panel and slip into the crawlspace between walls. Above, you hear them searching. \'He\'s got the key,\' one mutters. \'Boss wants it tonight.\' You emerge two buildings down, breathless, but now you\'re unarmed and hunted.',
      choices: [
        {
          id: 'choice-6-1',
          text: 'Go to your contact at the Chronicle',
          targetNodeId: 'node-10',
          order: 1,
        },
        {
          id: 'choice-6-2',
          text: 'Find a safe house',
          targetNodeId: 'node-11',
          order: 2,
        },
      ],
    },
    {
      id: 'node-7',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Negotiation',
      imageUrl: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        '\'Who\'s paying you?\' you ask, keeping your gun steady. \'The Senator? Morano?\' The lead gunman smirks. \'You think you\'re smart, detective. But you\'re holding something that belongs to powerful people. The Protocol isn\'t just a word -- it\'s an organization older than this city. Give us the key and you get fifty thousand dollars. Refuse...\' He nods toward the dead man. \'...you end up like your visitor.\'',
      choices: [
        {
          id: 'choice-7-1',
          text: 'Feign agreement, then escape',
          targetNodeId: 'node-8',
          order: 1,
        },
        {
          id: 'choice-7-2',
          text: 'Refuse and bluff your way out',
          targetNodeId: 'node-11',
          order: 2,
        },
      ],
    },
    {
      id: 'node-8',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Mansion Infiltration',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        'You scale the garden wall and slip through a servant\'s entrance. The mansion breathes with old money and older secrets. From the hallway, you hear Morano arguing with a woman -- educated, angry. \'My brother died because of your Protocol,\' she says. \'I want out.\' \'No one leaves, Clara,\' Morano replies. You peek around the corner to see Morano holding a gun on Clara Blackwell -- the Senator\'s daughter.',
      choices: [
        {
          id: 'choice-8-1',
          text: 'Rescue Clara Blackwell',
          targetNodeId: 'node-12',
          order: 1,
        },
        {
          id: 'choice-8-2',
          text: 'Search the study for evidence',
          targetNodeId: 'node-13',
          order: 2,
        },
      ],
    },
    {
      id: 'node-9',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Clara Blackwell',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'Clara Blackwell is young, rich, and terrified. When you show her the glass key, she gasps. \'That\'s one of the seven. My brother had the seventh.\' The Protocol is a secret agreement between the city\'s elite and organized crime. Seven keys exist; holders control voting blocks, police captains, judges. Her brother discovered the Protocol and tried to expose it. \'They killed him. Made it look like an accident.\' Her hand shakes.',
      choices: [
        {
          id: 'choice-9-1',
          text: 'Agree to help Clara',
          targetNodeId: 'node-14',
          order: 1,
        },
        {
          id: 'choice-9-2',
          text: 'Investigate her brother\'s death first',
          targetNodeId: 'node-15',
          order: 2,
        },
      ],
    },
    {
      id: 'node-10',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Chronicle',
      imageUrl: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        'Your contact Eddie runs the crime beat at the Chronicle. He\'s skeptical until you show him the glass key. \'I\'ve heard rumors,\' he admits. \'Three deaths in six months -- all connected to Senator Blackwell. All ruled accidents.\' He shows you photos: each victim held power, each died with a strange glass object nearby. \'The cops buried these cases fast.\' Eddie\'s eyes gleam. \'Give me exclusive rights and I\'ll give you everything.\'',
      choices: [
        {
          id: 'choice-10-1',
          text: 'Agree to Eddie\'s terms',
          targetNodeId: 'node-14',
          order: 1,
        },
        {
          id: 'choice-10-2',
          text: 'Decline and investigate alone',
          targetNodeId: 'node-15',
          order: 2,
        },
      ],
    },
    {
      id: 'node-11',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Safe House',
      imageUrl: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        'You hole up in a flophouse on the waterfront, where nobody asks names. The glass key catches the dim light from a cracked window. You examine it closely -- there\'s a number etched on the shaft: 4. The fourth key of seven. A knock freezes your blood, but it\'s Detective Sam Chen from the SFPD. \'You\'re in deep, Jack,\' he says. \'Morano\'s put a price on your head. But I owe you.\' He hands you a file.',
      choices: [
        {
          id: 'choice-11-1',
          text: 'Ask Sam for police protection',
          targetNodeId: 'node-12',
          order: 1,
        },
        {
          id: 'choice-11-2',
          text: 'Use Sam\'s information',
          targetNodeId: 'node-13',
          order: 2,
        },
      ],
    },
    {
      id: 'node-12',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Rescue',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You burst in, gun drawn. Morano turns, surprise flickering -- then rage. Clara screams as shots ring out. You tackle her behind a sofa as bullets shred the upholstery. \'The back stairs,\' she gasps. \'Car in the garage.\' You lay down cover fire and run. Bullets follow you, but you make it to the garage -- a Packard convertible. Clara slides in, clutching a leather folio. \'Protocol members,\' she pants. \'Names, accounts, everything.\'',
      choices: [
        {
          id: 'choice-12-1',
          text: 'Drive to the newspaper office',
          targetNodeId: 'node-16',
          order: 1,
        },
        {
          id: 'choice-12-2',
          text: 'Hide the evidence first',
          targetNodeId: 'node-17',
          order: 2,
        },
      ],
    },
    {
      id: 'node-13',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Study',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        'While Morano threatens Clara, you slip into the Senator\'s study. A shrine to power -- photos with presidents, awards, a locked safe behind a portrait. The glass key fits perfectly into a hidden slot in the desk. A drawer slides open, revealing documents that chill your blood. The Protocol isn\'t just corruption -- it\'s a shadow government. Seven keys, seven holders, controlling everything from docks to City Hall.',
      choices: [
        {
          id: 'choice-13-1',
          text: 'Hide and continue photographing',
          targetNodeId: 'node-18',
          order: 1,
        },
        {
          id: 'choice-13-2',
          text: 'Escape with what you have',
          targetNodeId: 'node-19',
          order: 2,
        },
      ],
    },
    {
      id: 'node-14',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Partnership',
      imageUrl: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        'Eddie\'s research fills in the gaps. The Protocol started during the Gold Rush -- seven businessmen controlling docks, banks, politicians. Now it\'s something more sinister: criminal enterprise with legal immunity. \'Here\'s the kicker,\' Eddie says. \'Every key holder has a government position. The Mayor. The Chief of Police. Even a federal judge.\' You realize the scope: exposing the Protocol means accusing the city\'s most powerful figures.',
      choices: [
        {
          id: 'choice-14-1',
          text: 'Run the story immediately',
          targetNodeId: 'node-16',
          order: 1,
        },
        {
          id: 'choice-14-2',
          text: 'Gather more evidence first',
          targetNodeId: 'node-17',
          order: 2,
        },
      ],
    },
    {
      id: 'node-15',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Solo Investigation',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You work better alone. Thomas Reed had a sister -- Margaret, a librarian in Oakland. You find her in a small house surrounded by books. \'Thomas said someone would come,\' she says, handing you a letter. The letter details how Reed discovered the Protocol while auditing the Senator\'s finances. Seven keys, seven million in bribes, seven murders covered up. \'The keys aren\'t just symbols,\' Reed wrote.',
      choices: [
        {
          id: 'choice-15-1',
          text: 'Start with the largest bank',
          targetNodeId: 'node-18',
          order: 1,
        },
        {
          id: 'choice-15-2',
          text: 'Investigate the Senator directly',
          targetNodeId: 'node-19',
          order: 2,
        },
      ],
    },
    {
      id: 'node-16',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Chronicle Office',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'The newspaper office buzzes with deadline energy. Eddie lays out the story -- the Protocol, the keys, the murders. Clara\'s folio provides names and bank accounts. Enough to indict half the city government. \'We print tonight,\' Eddie says. But as the presses roll, Morano\'s men surround the building. They\'re not here to negotiate. Gunfire shatters windows. \'The basement,\' Eddie shouts. \'Tunnel to the print shop.\'',
      choices: [
        {
          id: 'choice-16-1',
          text: 'Escape through the tunnel',
          targetNodeId: 'node-20',
          order: 1,
        },
        {
          id: 'choice-16-2',
          text: 'Stay and protect the evidence',
          targetNodeId: 'node-21',
          order: 2,
        },
      ],
    },
    {
      id: 'node-17',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Hiding Place',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        'You drive to a storage locker in the Mission District -- paid for under a false name. Clara\'s folio goes inside, along with your photographs. \'This is our insurance,\' you tell her. But as you lock the door, headlights illuminate the alley. Morano steps out of a Cadillac, flanked by gunmen. \'Smart move, Malone,\' he calls. He holds up his own glass key -- number 6. \'Give me the girl and the folio, you walk away rich.\'',
      choices: [
        {
          id: 'choice-17-1',
          text: 'Surrender the locker key',
          targetNodeId: 'node-22',
          order: 1,
        },
        {
          id: 'choice-17-2',
          text: 'Fight your way out',
          targetNodeId: 'node-23',
          order: 2,
        },
      ],
    },
    {
      id: 'node-18',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Safe Deposit',
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        'The First National Bank opens at nine. You\'re waiting at the door with Reed\'s list and your glass key. The manager -- Halloway -- goes pale when he sees the key. \'That box requires two keys.\' He shows you the lock -- two slots, numbered 4 and 7. You have number 4. Reed had number 7, but it wasn\'t on his body. \'Who has the other key?\' you demand. Halloway checks his register. \'Senator Blackwell collected it yesterday.\'',
      choices: [
        {
          id: 'choice-18-1',
          text: 'Break into the vault at night',
          targetNodeId: 'node-20',
          order: 1,
        },
        {
          id: 'choice-18-2',
          text: 'Confront Senator Blackwell directly',
          targetNodeId: 'node-21',
          order: 2,
        },
      ],
    },
    {
      id: 'node-19',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Senator',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        'You find Senator Blackwell at his country club. When you approach, he doesn\'t seem surprised. \'Malone. I wondered when you\'d find me.\' He dismisses his guards. \'Walk with me, detective. The seventeenth hole is private.\' On the green, he stops. \'You think I\'m the villain. I\'m not -- I\'m a prisoner. The Protocol started with my father. I tried to leave once; they killed my wife in a \'car accident\' just like my son.\' He holds up key number 7.',
      choices: [
        {
          id: 'choice-19-1',
          text: 'Trust the Senator',
          targetNodeId: 'node-22',
          order: 1,
        },
        {
          id: 'choice-19-2',
          text: 'Take the key by force',
          targetNodeId: 'node-23',
          order: 2,
        },
      ],
    },
    {
      id: 'node-20',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Tunnel',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        'The tunnel is dark and smells of ink. You lead Clara through, clutching the folio. Behind you, gunfire echoes -- Eddie\'s holding them off. The tunnel opens into the print shop. \'We made it,\' Clara breathes. But the door opens -- federal agents. \'Department of Justice. You\'re under arrest.\' He takes the folio. \'This evidence is classified. The Protocol is national security.\' He leans close. \'Cooperate, and you disappear to a nice prison.\'',
      choices: [
        {
          id: 'choice-20-1',
          text: 'Demand to see a lawyer',
          targetNodeId: 'node-24',
          order: 1,
        },
        {
          id: 'choice-20-2',
          text: 'Agree to cooperate',
          targetNodeId: 'node-25',
          order: 2,
        },
      ],
    },
    {
      id: 'node-21',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Last Stand',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You barricade the door and draw your gun. Clara helps Eddie move printing presses to create cover. \'We\'ll never get out alive,\' she says, loading a shotgun. Morano\'s men break through, and the office becomes a warzone. You\'re pinned down, outnumbered, but presses keep running -- each copy is a bullet against the Protocol. \'One minute until distribution,\' Eddie calls. Then sirens -- real police. Morano\'s men hesitate.',
      choices: [
        {
          id: 'choice-21-1',
          text: 'Surrender to the police',
          targetNodeId: 'node-26',
          order: 1,
        },
        {
          id: 'choice-21-2',
          text: 'Escape in the chaos',
          targetNodeId: 'node-27',
          order: 2,
        },
      ],
    },
    {
      id: 'node-22',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Deal',
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        'You hand over the locker key. Morano smiles -- the smile of a predator who\'s won. \'Smart choice, Malone. You\'ll get your money tomorrow.\' His men take Clara. \'She\'s not part of the deal,\' you protest. Morano shrugs. \'She never was.\' They drive away, leaving you alone with blood money in your future and betrayal in your heart. But you\'re not beaten yet. You had a duplicate key made. You can still reach the evidence.',
      choices: [
        {
          id: 'choice-22-1',
          text: 'Use the duplicate key to rescue Clara',
          targetNodeId: 'node-24',
          order: 1,
        },
        {
          id: 'choice-22-2',
          text: 'Take the money and disappear',
          targetNodeId: 'node-25',
          order: 2,
        },
      ],
    },
    {
      id: 'node-23',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Shootout',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You draw and fire in one motion. Morano\'s shoulder erupts in blood. His men scatter as you grab Clara and run. Bullets chase you down the alley. You turn a corner and find a dead end -- a chain-link fence topped with barbed wire. Behind you, Morano\'s men advance. \'Climb,\' you tell Clara, boosting her up. You fire to keep them back, running out of bullets. She\'s over the top. Your turn -- but a bullet takes you in the leg.',
      choices: [
        {
          id: 'choice-23-1',
          text: 'Tell Clara to run while you hold them off',
          targetNodeId: 'node-26',
          order: 1,
        },
        {
          id: 'choice-23-2',
          text: 'Try to climb despite the wound',
          targetNodeId: 'node-27',
          order: 2,
        },
      ],
    },
    {
      id: 'node-24',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Feds',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'The federal holding cell is cold and featureless. You\'ve been here three days. No lawyer, no phone call, no charges. Finally, a man in a gray suit enters. \'The Protocol exists because we allow it,\' he says. \'It keeps order.\' He sits on the bunk. \'The Senator\'s dead -- suicide. Morano\'s disappeared. Clara\'ll testify that you kidnapped her. Unless...\' He produces a document. \'Sign this confession, take ten years, and she goes free.\'',
      choices: [
        {
          id: 'choice-24-1',
          text: 'Sign the confession to save Clara',
          targetNodeId: 'node-28',
          order: 1,
        },
        {
          id: 'choice-24-2',
          text: 'Refuse and demand a real trial',
          targetNodeId: 'node-29',
          order: 2,
        },
      ],
    },
    {
      id: 'node-25',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Easy Way',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You catch a steamer to Manila under a false name. The fifty thousand dollars buys you a new life -- a house by the beach, a fishing boat. But some nights you wake up sweating, hearing Clara\'s screams. You read about the Senator\'s death -- suicide, they said. The Protocol continues, stronger than ever. Eddie\'s newspaper was shut down. You\'re alive, rich, and broken. The glass key sits on your desk. You tell yourself survival is its own victory.',
      choices: [
        {
          id: 'choice-25-1',
          text: 'Live with your choice',
          targetNodeId: 'node-30',
          order: 1,
        },
        {
          id: 'choice-25-2',
          text: 'Return to San Francisco for redemption',
          targetNodeId: 'node-31',
          order: 2,
        },
      ],
    },
    {
      id: 'node-26',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Arrest',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        'You surrender to the police, hands raised. They find you with smoking guns and dead men -- but they also find the evidence. For a week, it\'s the scandal of the century. The Protocol exposed, officials resigning, Morano arrested. You\'re hailed as a hero. But then the narrative shifts. Witnesses recant. Evidence disappears. You\'re charged with murder, conspiracy. The trial is swift. The jury is bought. The judge wears a glass key pin.',
      choices: [
        {
          id: 'choice-26-1',
          text: 'Accept the guilty verdict',
          targetNodeId: 'node-30',
          order: 1,
        },
        {
          id: 'choice-26-2',
          text: 'Attempt a prison break',
          targetNodeId: 'node-31',
          order: 2,
        },
      ],
    },
    {
      id: 'node-27',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Escape',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You run through the print shop\'s back corridors, Clara leading the way. She knows these streets. You emerge in Chinatown, losing yourselves in night market crowds. At a safe house, you catch your breath. \'We need to disappear,\' Clara says. \'My brother had accounts in Switzerland. We can start over.\' She\'s offering a life with her. But Eddie\'s story never ran. The evidence is scattered. The Protocol wins. Can you live with that?',
      choices: [
        {
          id: 'choice-27-1',
          text: 'Leave with Clara and start over',
          targetNodeId: 'node-28',
          order: 1,
        },
        {
          id: 'choice-27-2',
          text: 'Stay and fight from the shadows',
          targetNodeId: 'node-29',
          order: 2,
        },
      ],
    },
    {
      id: 'node-28',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Prison',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        'San Quentin is cold and eternal. You\'ve been here five years, maybe ten. Clara was released after testifying; you heard she married a diplomat. The guards know who you are -- the detective who almost brought down the city. Some respect you. Others make you pay. But you\'ve learned to survive. You\'ve made friends -- the kind who remember debts. One day, a new prisoner arrives. \'The Protocol is still operating. My father found evidence. They killed him.\'',
      choices: [
        {
          id: 'choice-28-1',
          text: 'Train the young man to fight back',
          targetNodeId: 'node-32',
          order: 1,
        },
        {
          id: 'choice-28-2',
          text: 'Tell him to protect himself',
          targetNodeId: 'node-33',
          order: 2,
        },
      ],
    },
    {
      id: 'node-29',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Return',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You return to San Francisco under a false name. The city looks the same -- same fog, same corruption. But you\'ve changed. Manila taught you patience. Now you operate in shadows, gathering information, building cases that can\'t be bought. You find Eddie -- broken, alcoholic, but still a journalist. You find Sam Chen -- demoted, bitter, but still a cop who cares. Together, you form the Glass Key Resistance. Small victories at first. But word spreads.',
      choices: [
        {
          id: 'choice-29-1',
          text: 'Escalate the campaign against the Protocol',
          targetNodeId: 'node-34',
          order: 1,
        },
        {
          id: 'choice-29-2',
          text: 'Focus on protecting the innocent',
          targetNodeId: 'node-35',
          order: 2,
        },
      ],
    },
    {
      id: 'node-30',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Exile',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        'Switzerland is beautiful and meaningless. You and Clara live in a chalet overlooking a lake that\'s too blue to be real. The money lasts -- blood money, purified by distance. You learn French, ski in winter, pretend to be happy. Clara writes a memoir she\'ll never publish. Eddie sends letters about San Francisco. The Protocol still runs everything. Your name is forgotten. But you\'re alive. Together. Safe. On dark nights, you hold the glass key and wonder if cowards deserve peace.',
      choices: [
        {
          id: 'choice-30-1',
          text: 'Publish Clara\'s memoir',
          targetNodeId: 'node-32',
          order: 1,
        },
        {
          id: 'choice-30-2',
          text: 'Accept this life',
          targetNodeId: 'node-33',
          order: 2,
        },
      ],
    },
    {
      id: 'node-31',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'Shadow War',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You become a ghost. No name, no address, no face the same twice. From the shadows, you strike at the Protocol -- leaking documents, warning targets, sabotaging operations. You can\'t win, but you can hurt them. Each victory costs something -- a safe house burned, a contact arrested. Clara works with you for a year before the danger becomes too much. Now you work alone. They\'ve put a million-dollar price on your head.',
      choices: [
        {
          id: 'choice-31-1',
          text: 'Launch a final assault',
          targetNodeId: 'node-34',
          order: 1,
        },
        {
          id: 'choice-31-2',
          text: 'Recruit others to continue the fight',
          targetNodeId: 'node-35',
          order: 2,
        },
      ],
    },
    {
      id: 'node-32',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Mentor',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You train the boy -- James, son of a councilman murdered by the Protocol. He\'s smart, angry, determined. You teach him everything. Years pass. He\'s released and joins the Resistance. You watch as reports come in: James exposed a corrupt judge, saved a witness. You\'re proud and afraid. The Protocol knows he\'s yours. A letter arrives -- James\'s handwriting: \'I\'m going after the head. The man above Morano. I know who he is.\'',
      choices: [
        {
          id: 'choice-32-1',
          text: 'Encourage him to finish what you started',
          targetNodeId: 'node-36',
          order: 1,
        },
        {
          id: 'choice-32-2',
          text: 'Warn him to protect himself',
          targetNodeId: 'node-37',
          order: 2,
        },
      ],
    },
    {
      id: 'node-33',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Guardian',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You focus on protection rather than attack. The Resistance becomes a shield for the innocent -- escorting witnesses, warning officials, destroying evidence. You\'re not heroes; you\'re guardians. Clara joins you -- she couldn\'t stay away. Together, you build something lasting: a network of good people in bad places. The Protocol can\'t eliminate you; you\'re too diffuse. Years pass. You grow old in shadows. Then a new generation arrives -- young, fierce, ready.',
      choices: [
        {
          id: 'choice-33-1',
          text: 'Pass the torch to the next generation',
          targetNodeId: 'node-38',
          order: 1,
        },
        {
          id: 'choice-33-2',
          text: 'Stay and guide them',
          targetNodeId: 'node-39',
          order: 2,
        },
      ],
    },
    {
      id: 'node-34',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Memoir',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'Clara\'s memoir becomes an international sensation. Translated into twenty languages, discussed in parliaments. She names names, dates, crimes. The Protocol scrambles to contain the damage, but the truth has escaped. Senators resign, judges are impeached. You watch from Switzerland as the empire crumbles. But retaliation comes swiftly -- assassins, legal challenges. You\'re forced to move again. But as you read the headlines -- \'Corruption Ring Exposed\' -- you know it was worth it.',
      choices: [
        {
          id: 'choice-34-1',
          text: 'Live out your days in peace',
          targetNodeId: 'node-36',
          order: 1,
        },
        {
          id: 'choice-34-2',
          text: 'Return to help rebuild',
          targetNodeId: 'node-38',
          order: 2,
        },
      ],
    },
    {
      id: 'node-35',
      storyId: 'story-glass-key-protocol',
      type: 'decision',
      title: 'The Legacy',
      imageUrl: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        'You recruit carefully, training others to be shadows, to resist without becoming monsters. The Resistance grows into something the Protocol can\'t fight -- not because it\'s strong, but because it\'s everywhere. When you\'re too old to run, you become a teacher, a legend. \'Be good, or the Glass Key will find you.\' Clara returns, older, wiser. On your deathbed, you pass the glass key to the youngest recruit. \'Remember,\' you whisper, \'we don\'t fight to win. We fight because it\'s right.\'',
      choices: [
        {
          id: 'choice-35-1',
          text: 'Accept the end',
          targetNodeId: 'node-37',
          order: 1,
        },
        {
          id: 'choice-35-2',
          text: 'Pass leadership to the next generation',
          targetNodeId: 'node-40',
          order: 2,
        },
      ],
    },
    {
      id: 'node-36',
      storyId: 'story-glass-key-protocol',
      type: 'ending',
      title: 'ENDING: The Revolution',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        'James succeeds where you failed. He finds the man above Morano -- the federal judge who created the Protocol seventy years ago. The evidence James gathers brings down not just the organization, but the corrupt system. From your prison cell, you watch the trials on television. One by one, the powerful fall. New laws are passed. Visitors come: James, now a reformer; Clara, who never forgot you. You die an old man, still in prison, but free.',
      choices: [
      ],
    },
    {
      id: 'node-37',
      storyId: 'story-glass-key-protocol',
      type: 'ending',
      title: 'ENDING: The Survivor',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You chose survival over glory, and survival is what you got. Years in prison, decades in hiding. But you\'re alive when so many others aren\'t. The Protocol still exists -- weakened, changed. Sometimes you see the new generation fighting. But you\'re old now. Instead, you write -- memoirs, advice. Clara visits you in your small apartment. On your last day, she holds your hand. \'You did good, Jack,\' she whispers. Not a hero\'s ending, but a human one. That\'s enough.',
      choices: [
      ],
    },
    {
      id: 'node-38',
      storyId: 'story-glass-key-protocol',
      type: 'ending',
      title: 'ENDING: The New Dawn',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You return to a changed city. The Protocol is gone -- truly gone. San Francisco reinvents itself, cleaner and more honest. You and Clara open a detective agency -- legitimate this time. The glass key hangs in your window. Young people come to you for advice. Years later, you\'re elected to the city council. From your office, you see the bay glittering. The fog still rolls in, but it doesn\'t hide monsters anymore. You did that.',
      choices: [
      ],
    },
    {
      id: 'node-39',
      storyId: 'story-glass-key-protocol',
      type: 'ending',
      title: 'ENDING: The Martyr',
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        'The bullet was meant for Clara, but you stepped in front. You die in her arms on a dirty street, the glass key falling from your pocket. It\'s fitting -- you were always going to break for something. The funeral is small; the monument is large. Posthumously pardoned, celebrated, mourned. Clara writes your story, Eddie publishes it. The Protocol falls not to force but to shame. You become a symbol. You\'d hate it, honestly. But symbols outlive men. One person can stand against darkness.',
      choices: [
      ],
    },
    {
      id: 'node-40',
      storyId: 'story-glass-key-protocol',
      type: 'ending',
      title: 'ENDING: The Unseen Guardian',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You never stopped fighting. No headlines, no glory, just endless nights of watching. The Resistance becomes your family. Clara stays with you until the end. You saved hundreds of lives -- each one a victory history won\'t record. When you finally fall, there\'s no funeral. Just a glass key buried with your ashes, and whispers about the phantom who protected the innocent. You were never the hero the city wanted. You were the guardian it needed. And guardians must remain unseen.',
      choices: [
      ],
    },
  ],
};
