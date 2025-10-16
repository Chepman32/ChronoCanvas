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

export const story_8273910265StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Shadows of the Vanished Star',
    description: 'When a tech heiress vanishes and only a cryptic ornament remains, private detective Sam Mercer is drawn into a labyrinth of rain-soaked alleys, secret libraries and shadowed docks. Every clue raises new questions and every decision pulls him deeper into a conspiracy that reaches the city\\',
    author: 'Daphne Sawyer',
    nodes: {
      'story-8273910265-1': {
        title: 'Midnight Client',
        narration: 'The rain beats against your office window as you stare at the blinking neon outside. A shadow crosses the threshold and a woman in a soaked trench coat steps in, her eyes pleading as she produces a star‑shaped ornament and whispers about a missing heiress. The scent of damp pavement and old paper fills the room as you weigh the danger in her words. The city hums with secrets and you sense this is only the beginning.',
        choices: {
          'story-8273910265-c1': {
            text: 'Take the case and head to the crime scene',
            description: 'Duty calls, even in the rain.',
          },
          'story-8273910265-c2': {
            text: 'Decline and watch from your window',
            description: 'Stay detached, observe what unfolds.',
          },
        },
      },
      'story-8273910265-3': {
        title: 'Reluctant Watch',
        narration: 'You send the woman away but curiosity gnaws at you. Through the rain‑streaked glass you spot a figure lurking across the street, camera in hand, snapping shots of your office. The alley glistens under streetlights, the city breathing like a beast. You can either plunge into the rain after him or keep your distance.',
        choices: {
          'story-8273910265-c5': {
            text: 'Follow the shadow down the street',
            description: 'Get closer, risk exposure.',
          },
          'story-8273910265-c6': {
            text: 'Stay in the shadows and watch',
            description: 'Patience may pay off.',
          },
        },
      },
      'story-8273910265-5': {
        title: 'Nervous Witness',
        narration: 'A jittery bystander leans against a rain‑speckled window, phone pressed to their ear. Eyes darting, they clutch their coat tighter as you approach. The hum of the city seems to fade as you decide whether to coax the truth out gently or grease the wheels with cash.',
        choices: {
          'story-8273910265-c9': {
            text: 'Calmly ask what they saw',
            description: 'Gain trust through empathy.',
          },
          'story-8273910265-c10': {
            text: 'Slip them some money for answers',
            description: 'Money talks when fear won\\',
          },
        },
      },
      'story-8273910265-6': {
        title: 'Watching in the Rain',
        narration: 'You blend into the downpour, letting the suspect lead you through alleys washed in neon. Each puddle reflects a fractured world. From beneath your coat you feel the weight of your own tech; a laptop hums faintly, begging to breach encrypted messages. Do you tap into their communications or continue to tail them in person?',
        choices: {
          'story-8273910265-c11': {
            text: 'Hack their communications feed',
            description: 'Digital secrets are often the juiciest.',
          },
          'story-8273910265-c12': {
            text: 'Keep tailing from the shadows',
            description: 'Stay on the ground.',
          },
        },
      },
      'story-8273910265-7': {
        title: 'Message in Red',
        narration: 'Inside the envelope you find a photograph of a star‑shaped pendant and a coded message written in red ink. The paper feels slick under your wet fingers. The symbols hint at library catalogues and old secrets. You must decide where to unravel it.',
        choices: {
          'story-8273910265-c13': {
            text: 'Head to the city library',
            description: 'Research in dusty stacks.',
          },
          'story-8273910265-c14': {
            text: 'Call your hacker friend',
            description: 'Decode with digital help.',
          },
        },
      },
      'story-8273910265-8': {
        title: 'Forensic Report',
        narration: 'Back in your own lab, flickering monitors illuminate your face. You scan the envelope for prints and analyze the ink under glaring light. A fingerprint matches an underworld fixer, and a GPS tag points toward the docks. You can pursue the data trail or act on the intel.',
        choices: {
          'story-8273910265-c15': {
            text: 'Run fingerprints through the database',
            description: 'Information is power.',
          },
          'story-8273910265-c16': {
            text: 'Head to the docks to track them',
            description: 'Confront the suspect in person.',
          },
        },
      },
      'story-8273910265-9': {
        title: 'Warehouse Intel',
        narration: 'Your efforts pay off: a whispered confession or hacked message reveals a rendezvous at an abandoned warehouse tagged with graffiti. The building looms like a dark monument against the skyline. You can burst in and risk everything or take time to plan.',
        choices: {
          'story-8273910265-c17': {
            text: 'Infiltrate the warehouse now',
            description: 'Time is of the essence.',
          },
          'story-8273910265-c18': {
            text: 'Gather more intel first',
            description: 'A cautious approach may pay off.',
          },
        },
      },
      'story-8273910265-10': {
        title: 'Last Train Out',
        narration: 'The suspect slips onto a midnight train and you hurry to the yard, steam hissing from dormant engines. Darkness cloaks the tracks as the last call echoes through loudspeakers. You can board the train now or try to outsmart them at the next stop.',
        choices: {
          'story-8273910265-c19': {
            text: 'Jump aboard the train',
            description: 'Stay close to your target.',
          },
          'story-8273910265-c20': {
            text: 'Intercept at the next station',
            description: 'Plan an ambush ahead.',
          },
        },
      },
      'story-8273910265-11': {
        title: 'Stacks of Secrets',
        narration: 'Dust motes dance in shafts of light as you wander endless stacks of books. The smell of old paper surrounds you. You trace obscure catalog numbers until your fingers land on a tome describing a star ornament that unlocks secrets in bank vaults. Do you test the key or dig deeper into the archives?',
        choices: {
          'story-8273910265-c21': {
            text: 'Go to the bank with the ornament',
            description: 'The vault may hold the truth.',
          },
          'story-8273910265-c22': {
            text: 'Search further in the archives',
            description: 'There might be more to uncover.',
          },
        },
      },
      'story-8273910265-13': {
        title: 'Dockside Shadows',
        narration: 'The smell of salt and diesel hangs heavy as you creep between crates at the docks. A lone boat rocks gently against weathered pilings, voices murmuring above the splash of waves. Do you remain hidden to gather evidence or step into the light to confront the gang leader?',
        choices: {
          'story-8273910265-c25': {
            text: 'Gather evidence quietly',
            description: 'Patience could bring proof.',
          },
          'story-8273910265-c26': {
            text: 'Confront the gang leader',
            description: 'Force the issue now.',
          },
        },
      },
      'story-8273910265-14': {
        title: 'Rooftop Showdown',
        narration: 'Wind whips across the rooftop as you corner the suspect against a backdrop of towering skyscrapers, their windows glittering like stars. Sweat beads under your collar despite the cold. With nowhere left to run, your quarry eyes the gap between buildings. Your next move will decide both your fates.',
        choices: {
          'story-8273910265-c27': {
            text: 'Talk them down and bargain',
            description: 'Words can be weapons.',
          },
          'story-8273910265-c28': {
            text: 'Tackle them to the ground',
            description: 'Use force to end the chase.',
          },
        },
      },
      'story-8273910265-15': {
        title: 'Station Ambush',
        narration: 'The train pulls away and you find yourself in a deserted station corridor, fluorescent lights flickering overhead. Footsteps echo in the distance, then vanish. Your target has slipped into the darkness. Do you wait for them to double back or call in a contact who owes you a favor?',
        choices: {
          'story-8273910265-c29': {
            text: 'Wait in the shadows',
            description: 'Patience might catch them.',
          },
          'story-8273910265-c30': {
            text: 'Call in a favor',
            description: 'Leverage your network.',
          },
        },
      },
      'story-8273910265-17': {
        title: 'Midnight Pier',
        narration: 'Moonlight paints the pier silver as waves lap against its weathered boards. A lone figure waits beneath a lamp, face hidden beneath a hood. They offer you a choice – join them and share in the profits of the conspiracy, or refuse and expose the whole operation. Trust and betrayal hang in the salty air.',
        choices: {
          'story-8273910265-c33': {
            text: 'Accept their deal',
            description: 'Join the shadow network.',
          },
          'story-8273910265-c34': {
            text: 'Refuse and expose everything',
            description: 'Blow the whistle.',
          },
        },
      },
      'story-8273910265-18': {
        title: 'Breaking In',
        narration: 'With allies at your side, you push open a door into a long, dim hallway. Footsteps echo as you approach a meeting in progress, voices low and conspiratorial. Do you storm in and make arrests or stay back to record the exchange for the world to see?',
        choices: {
          'story-8273910265-c35': {
            text: 'Intervene and arrest them',
            description: 'Bring them to justice.',
          },
          'story-8273910265-c36': {
            text: 'Record everything for a leak',
            description: 'Expose the conspiracy publicly.',
          },
        },
      },
      'story-8273910265-19': {
        title: 'Case Slips Away',
        narration: 'You charge into the fray and the gang scatters like shadows in rain. A shot rings out, a boat engine roars, and the mastermind vanishes into the night. Weeks later you stare at your cork board, threads of yarn connecting photos that lead nowhere. The case goes cold and the city forgets, but you cannot.',
        choices: {
        },
      },
      'story-8273910265-21': {
        title: 'Deal with the Devil',
        narration: 'Temptation wins. You pocket the files and step into the inner circle. The ladder you climb may be gilded, but every rung is slick with guilt. Wealth and connections flow your way, yet in quiet moments you wonder what became of the young woman whose ornament unlocked your fortune.',
        choices: {
        },
      },
      'story-8273910265-22': {
        title: 'Whistleblower',
        narration: 'You choose exposure over safety. Hidden behind glowing monitors, you compile recordings and documents and leak them to the press. Headlines explode, powerful figures fall, and the city convulses. You become both hero and target, vanishing into digital shadows while knowing you did the right thing.',
        choices: {
        },
      },
    },
  },

  // Русский - Not yet translated
  ru: { title: '', description: '', author: '', nodes: {} },

  // Español - Not yet translated
  es: { title: '', description: '', author: '', nodes: {} },

  // Deutsch - Not yet translated
  de: { title: '', description: '', author: '', nodes: {} },

  // Français - Not yet translated
  fr: { title: '', description: '', author: '', nodes: {} },

  // Português - Not yet translated
  pt: { title: '', description: '', author: '', nodes: {} },

  // 日本語 - Not yet translated
  ja: { title: '', description: '', author: '', nodes: {} },

  // 中文 - Not yet translated
  zh: { title: '', description: '', author: '', nodes: {} },

  // 한국어 - Not yet translated
  ko: { title: '', description: '', author: '', nodes: {} },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
