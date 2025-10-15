import { Story } from '../types';

export const shadowsVanishedStarStory: Story = {
  id: 'story-8273910265',
  title: 'Shadows of the Vanished Star',
  description:
    'When a tech heiress vanishes and only a cryptic ornament remains, private detective Sam Mercer is drawn into a labyrinth of rain-soaked alleys, secret libraries and shadowed docks. Every clue raises new questions and every decision pulls him deeper into a conspiracy that reaches the city\'s highest towers. Your choices will determine whether justice shines through or the truth disappears into darkness.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1632958978877-69406b688b11?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1632958978877-69406b688b11?w=400',
  author: 'Daphne Sawyer',
  genre: ['detective', 'mystery'],
  difficulty: 'hard',
  estimatedDuration: 30,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-14',
  updatedAt: '2025-01-14',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-8273910265-1',
  nodes: [
    {
      id: 'story-8273910265-1',
      storyId: 'story-8273910265',
      type: 'start',
      title: 'Midnight Client',
      imageUrl:
        'https://images.unsplash.com/photo-1651909760542-c929a098d9f8?w=800',
      narration:
        'The rain beats against your office window as you stare at the blinking neon outside. A shadow crosses the threshold and a woman in a soaked trench coat steps in, her eyes pleading as she produces a star‑shaped ornament and whispers about a missing heiress. The scent of damp pavement and old paper fills the room as you weigh the danger in her words. The city hums with secrets and you sense this is only the beginning.',
      choices: [
        {
          id: 'story-8273910265-c1',
          text: 'Take the case and head to the crime scene',
          description: 'Duty calls, even in the rain.',
          targetNodeId: 'story-8273910265-2',
          order: 1,
        },
        {
          id: 'story-8273910265-c2',
          text: 'Decline and watch from your window',
          description: 'Stay detached, observe what unfolds.',
          targetNodeId: 'story-8273910265-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-2',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Crime Scene Chaos',
      imageUrl:
        'https://images.unsplash.com/photo-1557075831-9227ec7d0097?w=800',
      narration:
        'Police tape flutters in the wet wind as blue lights wash over the alley where the heiress was last seen. Officers hustle to and fro, questions echoing off brick walls while onlookers murmur behind umbrellas. The victim\'s belongings are scattered, glinting with rain. Somewhere in this chaos lies your first clue.',
      choices: [
        {
          id: 'story-8273910265-c3',
          text: 'Inspect the body and surroundings',
          description: 'Search for evidence yourself.',
          targetNodeId: 'story-8273910265-4',
          order: 1,
        },
        {
          id: 'story-8273910265-c4',
          text: 'Interview the nervous witness',
          description: 'Someone saw something.',
          targetNodeId: 'story-8273910265-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-3',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Reluctant Watch',
      imageUrl:
        'https://images.unsplash.com/photo-1758525589410-d0a824b7d59c?w=800',
      narration:
        'You send the woman away but curiosity gnaws at you. Through the rain‑streaked glass you spot a figure lurking across the street, camera in hand, snapping shots of your office. The alley glistens under streetlights, the city breathing like a beast. You can either plunge into the rain after him or keep your distance.',
      choices: [
        {
          id: 'story-8273910265-c5',
          text: 'Follow the shadow down the street',
          description: 'Get closer, risk exposure.',
          targetNodeId: 'story-8273910265-5',
          order: 1,
        },
        {
          id: 'story-8273910265-c6',
          text: 'Stay in the shadows and watch',
          description: 'Patience may pay off.',
          targetNodeId: 'story-8273910265-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-4',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Hidden Note',
      imageUrl:
        'https://images.unsplash.com/photo-1690400524283-4e410dce7318?w=800',
      narration:
        'Kneeling beside the lifeless form, you catch the metallic smell of blood mingled with rain. Tucked beneath the victim\'s jacket you find a sealed envelope, edges tinged crimson. Voices blur around you as the world narrows to this paper – it could be a trap or the key to the mystery.',
      choices: [
        {
          id: 'story-8273910265-c7',
          text: 'Open the envelope here',
          description: 'What secrets does it hold?',
          targetNodeId: 'story-8273910265-7',
          order: 1,
        },
        {
          id: 'story-8273910265-c8',
          text: 'Secure it for analysis',
          description: 'Better safe than sorry.',
          targetNodeId: 'story-8273910265-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-5',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Nervous Witness',
      imageUrl:
        'https://images.unsplash.com/photo-1702724626836-485b563faa44?w=800',
      narration:
        'A jittery bystander leans against a rain‑speckled window, phone pressed to their ear. Eyes darting, they clutch their coat tighter as you approach. The hum of the city seems to fade as you decide whether to coax the truth out gently or grease the wheels with cash.',
      choices: [
        {
          id: 'story-8273910265-c9',
          text: 'Calmly ask what they saw',
          description: 'Gain trust through empathy.',
          targetNodeId: 'story-8273910265-8',
          order: 1,
        },
        {
          id: 'story-8273910265-c10',
          text: 'Slip them some money for answers',
          description: 'Money talks when fear won\'t.',
          targetNodeId: 'story-8273910265-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-6',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Watching in the Rain',
      imageUrl:
        'https://images.unsplash.com/photo-1559941654-a976c5777f7c?w=800',
      narration:
        'You blend into the downpour, letting the suspect lead you through alleys washed in neon. Each puddle reflects a fractured world. From beneath your coat you feel the weight of your own tech; a laptop hums faintly, begging to breach encrypted messages. Do you tap into their communications or continue to tail them in person?',
      choices: [
        {
          id: 'story-8273910265-c11',
          text: 'Hack their communications feed',
          description: 'Digital secrets are often the juiciest.',
          targetNodeId: 'story-8273910265-9',
          order: 1,
        },
        {
          id: 'story-8273910265-c12',
          text: 'Keep tailing from the shadows',
          description: 'Stay on the ground.',
          targetNodeId: 'story-8273910265-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-7',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Message in Red',
      imageUrl:
        'https://images.unsplash.com/photo-1694285453486-ead6e637e524?w=800',
      narration:
        'Inside the envelope you find a photograph of a star‑shaped pendant and a coded message written in red ink. The paper feels slick under your wet fingers. The symbols hint at library catalogues and old secrets. You must decide where to unravel it.',
      choices: [
        {
          id: 'story-8273910265-c13',
          text: 'Head to the city library',
          description: 'Research in dusty stacks.',
          targetNodeId: 'story-8273910265-11',
          order: 1,
        },
        {
          id: 'story-8273910265-c14',
          text: 'Call your hacker friend',
          description: 'Decode with digital help.',
          targetNodeId: 'story-8273910265-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-8',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Forensic Report',
      imageUrl:
        'https://images.unsplash.com/photo-1610547169194-c385fdf25e76?w=800',
      narration:
        'Back in your own lab, flickering monitors illuminate your face. You scan the envelope for prints and analyze the ink under glaring light. A fingerprint matches an underworld fixer, and a GPS tag points toward the docks. You can pursue the data trail or act on the intel.',
      choices: [
        {
          id: 'story-8273910265-c15',
          text: 'Run fingerprints through the database',
          description: 'Information is power.',
          targetNodeId: 'story-8273910265-12',
          order: 1,
        },
        {
          id: 'story-8273910265-c16',
          text: 'Head to the docks to track them',
          description: 'Confront the suspect in person.',
          targetNodeId: 'story-8273910265-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-9',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Warehouse Intel',
      imageUrl:
        'https://images.unsplash.com/photo-1642801647949-f4ed1f87b19d?w=800',
      narration:
        'Your efforts pay off: a whispered confession or hacked message reveals a rendezvous at an abandoned warehouse tagged with graffiti. The building looms like a dark monument against the skyline. You can burst in and risk everything or take time to plan.',
      choices: [
        {
          id: 'story-8273910265-c17',
          text: 'Infiltrate the warehouse now',
          description: 'Time is of the essence.',
          targetNodeId: 'story-8273910265-13',
          order: 1,
        },
        {
          id: 'story-8273910265-c18',
          text: 'Gather more intel first',
          description: 'A cautious approach may pay off.',
          targetNodeId: 'story-8273910265-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-10',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Last Train Out',
      imageUrl:
        'https://images.unsplash.com/photo-1736512348878-5ac843dcdc06?w=800',
      narration:
        'The suspect slips onto a midnight train and you hurry to the yard, steam hissing from dormant engines. Darkness cloaks the tracks as the last call echoes through loudspeakers. You can board the train now or try to outsmart them at the next stop.',
      choices: [
        {
          id: 'story-8273910265-c19',
          text: 'Jump aboard the train',
          description: 'Stay close to your target.',
          targetNodeId: 'story-8273910265-14',
          order: 1,
        },
        {
          id: 'story-8273910265-c20',
          text: 'Intercept at the next station',
          description: 'Plan an ambush ahead.',
          targetNodeId: 'story-8273910265-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-11',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Stacks of Secrets',
      imageUrl:
        'https://images.unsplash.com/photo-1650513259622-081281181c32?w=800',
      narration:
        'Dust motes dance in shafts of light as you wander endless stacks of books. The smell of old paper surrounds you. You trace obscure catalog numbers until your fingers land on a tome describing a star ornament that unlocks secrets in bank vaults. Do you test the key or dig deeper into the archives?',
      choices: [
        {
          id: 'story-8273910265-c21',
          text: 'Go to the bank with the ornament',
          description: 'The vault may hold the truth.',
          targetNodeId: 'story-8273910265-16',
          order: 1,
        },
        {
          id: 'story-8273910265-c22',
          text: 'Search further in the archives',
          description: 'There might be more to uncover.',
          targetNodeId: 'story-8273910265-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-12',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Codes and Colleagues',
      imageUrl:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
      narration:
        'Rows of green code cascade down your friend\'s monitors as you talk over static‑filled headsets. Within moments, coordinates emerge pointing to a desolate pier under the full moon. The hacker warns you: go alone and stay invisible, or bring backup and risk scaring them off.',
      choices: [
        {
          id: 'story-8273910265-c23',
          text: 'Go to the pier alone',
          description: 'Trust your instincts.',
          targetNodeId: 'story-8273910265-17',
          order: 1,
        },
        {
          id: 'story-8273910265-c24',
          text: 'Assemble backup before going',
          description: 'Safety in numbers.',
          targetNodeId: 'story-8273910265-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-13',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Dockside Shadows',
      imageUrl:
        'https://images.unsplash.com/photo-1691239717421-5abd275c05f6?w=800',
      narration:
        'The smell of salt and diesel hangs heavy as you creep between crates at the docks. A lone boat rocks gently against weathered pilings, voices murmuring above the splash of waves. Do you remain hidden to gather evidence or step into the light to confront the gang leader?',
      choices: [
        {
          id: 'story-8273910265-c25',
          text: 'Gather evidence quietly',
          description: 'Patience could bring proof.',
          targetNodeId: 'story-8273910265-18',
          order: 1,
        },
        {
          id: 'story-8273910265-c26',
          text: 'Confront the gang leader',
          description: 'Force the issue now.',
          targetNodeId: 'story-8273910265-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-14',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Rooftop Showdown',
      imageUrl:
        'https://images.unsplash.com/photo-1640731852482-8dfd8ab257de?w=800',
      narration:
        'Wind whips across the rooftop as you corner the suspect against a backdrop of towering skyscrapers, their windows glittering like stars. Sweat beads under your collar despite the cold. With nowhere left to run, your quarry eyes the gap between buildings. Your next move will decide both your fates.',
      choices: [
        {
          id: 'story-8273910265-c27',
          text: 'Talk them down and bargain',
          description: 'Words can be weapons.',
          targetNodeId: 'story-8273910265-20',
          order: 1,
        },
        {
          id: 'story-8273910265-c28',
          text: 'Tackle them to the ground',
          description: 'Use force to end the chase.',
          targetNodeId: 'story-8273910265-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-15',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Station Ambush',
      imageUrl:
        'https://images.unsplash.com/photo-1736795858700-98909532c2b9?w=800',
      narration:
        'The train pulls away and you find yourself in a deserted station corridor, fluorescent lights flickering overhead. Footsteps echo in the distance, then vanish. Your target has slipped into the darkness. Do you wait for them to double back or call in a contact who owes you a favor?',
      choices: [
        {
          id: 'story-8273910265-c29',
          text: 'Wait in the shadows',
          description: 'Patience might catch them.',
          targetNodeId: 'story-8273910265-21',
          order: 1,
        },
        {
          id: 'story-8273910265-c30',
          text: 'Call in a favor',
          description: 'Leverage your network.',
          targetNodeId: 'story-8273910265-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-16',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Vaulted Truth',
      imageUrl:
        'https://images.unsplash.com/photo-1611526114392-8d8e229f511d?w=800',
      narration:
        'Deep beneath marble floors, a chilled vault door swings open with a hiss. Using the star ornament as a key, you reveal folders of damning documents linking the city\'s elite to the disappearance. The weight of this evidence sits heavy in your hands. Do you hand it over or keep it for yourself?',
      choices: [
        {
          id: 'story-8273910265-c31',
          text: 'Turn the evidence over to the police',
          description: 'Let justice take its course.',
          targetNodeId: 'story-8273910265-20',
          order: 1,
        },
        {
          id: 'story-8273910265-c32',
          text: 'Keep it for leverage',
          description: 'Power comes at a price.',
          targetNodeId: 'story-8273910265-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-17',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Midnight Pier',
      imageUrl:
        'https://images.unsplash.com/photo-1722657846014-0c7970731da4?w=800',
      narration:
        'Moonlight paints the pier silver as waves lap against its weathered boards. A lone figure waits beneath a lamp, face hidden beneath a hood. They offer you a choice – join them and share in the profits of the conspiracy, or refuse and expose the whole operation. Trust and betrayal hang in the salty air.',
      choices: [
        {
          id: 'story-8273910265-c33',
          text: 'Accept their deal',
          description: 'Join the shadow network.',
          targetNodeId: 'story-8273910265-21',
          order: 1,
        },
        {
          id: 'story-8273910265-c34',
          text: 'Refuse and expose everything',
          description: 'Blow the whistle.',
          targetNodeId: 'story-8273910265-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-18',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Breaking In',
      imageUrl:
        'https://images.unsplash.com/photo-1648827953801-2ed7cd942957?w=800',
      narration:
        'With allies at your side, you push open a door into a long, dim hallway. Footsteps echo as you approach a meeting in progress, voices low and conspiratorial. Do you storm in and make arrests or stay back to record the exchange for the world to see?',
      choices: [
        {
          id: 'story-8273910265-c35',
          text: 'Intervene and arrest them',
          description: 'Bring them to justice.',
          targetNodeId: 'story-8273910265-20',
          order: 1,
        },
        {
          id: 'story-8273910265-c36',
          text: 'Record everything for a leak',
          description: 'Expose the conspiracy publicly.',
          targetNodeId: 'story-8273910265-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8273910265-19',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Case Slips Away',
      imageUrl:
        'https://images.unsplash.com/photo-1558051815-0f18e64e6280?w=800',
      narration:
        'You charge into the fray and the gang scatters like shadows in rain. A shot rings out, a boat engine roars, and the mastermind vanishes into the night. Weeks later you stare at your cork board, threads of yarn connecting photos that lead nowhere. The case goes cold and the city forgets, but you cannot.',
      choices: [],
    },
    {
      id: 'story-8273910265-20',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Justice Served',
      imageUrl:
        'https://images.unsplash.com/photo-1711003596872-aa68f08a4b8e?w=800',
      narration:
        'You choose the lawful path. With solid evidence in hand and back‑up at your side, you watch as the conspirators are hauled before a judge. The courtroom\'s wooden benches creak as verdicts are read and justice reverberates through marble halls. The heiress is found alive, and you feel a rare sense of closure.',
      choices: [],
    },
    {
      id: 'story-8273910265-21',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Deal with the Devil',
      imageUrl:
        'https://images.unsplash.com/photo-1697791173189-d56b15df4f33?w=800',
      narration:
        'Temptation wins. You pocket the files and step into the inner circle. The ladder you climb may be gilded, but every rung is slick with guilt. Wealth and connections flow your way, yet in quiet moments you wonder what became of the young woman whose ornament unlocked your fortune.',
      choices: [],
    },
    {
      id: 'story-8273910265-22',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Whistleblower',
      imageUrl:
        'https://images.unsplash.com/photo-1662638600476-d563fffbb072?w=800',
      narration:
        'You choose exposure over safety. Hidden behind glowing monitors, you compile recordings and documents and leak them to the press. Headlines explode, powerful figures fall, and the city convulses. You become both hero and target, vanishing into digital shadows while knowing you did the right thing.',
      choices: [],
    },
  ],
};
