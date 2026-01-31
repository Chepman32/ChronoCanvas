import { Story } from '../types';

export const shadowsVanishedStarStory: Story = {
  id: 'story-8273910265',
  title: 'Shadows of the Vanished Star',
  description:
    'When a tech heiress vanishes and only a cryptic ornament remains, private detective Sam Mercer is drawn into a labyrinth of rain-soaked alleys, secret libraries and shadowed docks. Every clue raises new questions and every decision pulls him deeper into a conspiracy that reaches the city\'s highest towers. Your choices will determine whether justice shines through or the truth disappears into darkness.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=400',
  author: 'Daphne Sawyer',
  genre: 'detective',
  involvement: 'high',
  estimatedDuration: 45,
  isPremium: false,
  version: '2.0',
  createdAt: '2025-01-14',
  updatedAt: '2025-01-30',
  totalNodes: 15,
  totalEndings: 4,
  startNodeId: 'story-8273910265-1',
  nodes: [
    // LAYER 1: Start
    {
      id: 'story-8273910265-1',
      storyId: 'story-8273910265',
      type: 'start',
      title: 'Midnight Client',
      imageUrl:
        'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        'The rain beats against your office window as you stare at the blinking neon outside. A shadow crosses the threshold and a woman in a soaked trench coat steps in, her eyes pleading as she produces a star-shaped ornament and whispers about a missing heiress. The scent of damp pavement and old paper fills the room as you weigh the danger in her words. The city hums with secrets and you sense this is only the beginning.',
      choices: [
        {
          id: 'story-8273910265-c1',
          text: 'Take the case and examine the ornament',
          description: 'Duty calls, even in the rain.',
          targetNodeId: 'story-8273910265-2',
          order: 1,
        },
      ],
    },
    // LAYER 2: Decision
    {
      id: 'story-8273910265-2',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Crime Scene Chaos',
      imageUrl:
        'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        'Police tape flutters in the wet wind as blue lights wash over the alley where the heiress was last seen. Officers hustle to and fro, questions echoing off brick walls while onlookers murmur behind umbrellas. The victim\'s belongings are scattered, glinting with rain. Somewhere in this chaos lies your first clue, hidden among the debris and confusion.',
      choices: [
        {
          id: 'story-8273910265-c2',
          text: 'Inspect the body and surroundings',
          description: 'Search for evidence yourself.',
          targetNodeId: 'story-8273910265-3',
          order: 1,
        },
      ],
    },
    // LAYER 3: Decision
    {
      id: 'story-8273910265-3',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Hidden Note',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'Kneeling beside the scattered belongings, you catch the metallic smell of rain mingled with something else. Tucked beneath a discarded jacket you find a sealed envelope, edges tinged with moisture. Voices blur around you as the world narrows to this paper – it could be a trap or the key to unlocking the entire mystery that brought you here tonight.',
      choices: [
        {
          id: 'story-8273910265-c3',
          text: 'Open the envelope carefully',
          description: 'What secrets does it hold?',
          targetNodeId: 'story-8273910265-4',
          order: 1,
        },
      ],
    },
    // LAYER 4: Decision
    {
      id: 'story-8273910265-4',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Message in Red',
      imageUrl:
        'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        'Inside the envelope you find a photograph of a star-shaped pendant and a coded message written in red ink. The paper feels slick under your wet fingers. The symbols hint at library catalogues and old secrets buried in dusty archives. You must decide where to unravel this mystery before the trail goes cold.',
      choices: [
        {
          id: 'story-8273910265-c4',
          text: 'Head to the city library',
          description: 'Research in dusty old stacks.',
          targetNodeId: 'story-8273910265-5',
          order: 1,
        },
      ],
    },
    // LAYER 5: Decision
    {
      id: 'story-8273910265-5',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Stacks of Secrets',
      imageUrl:
        'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        'Dust motes dance in shafts of light as you wander endless stacks of books. The smell of old paper surrounds you. You trace obscure catalog numbers until your fingers land on a tome describing a star ornament that unlocks secrets in bank vaults. The knowledge you gain points to a specific institution across town.',
      choices: [
        {
          id: 'story-8273910265-c5',
          text: 'Go to the bank with the information',
          description: 'The vault may hold truth.',
          targetNodeId: 'story-8273910265-6',
          order: 1,
        },
      ],
    },
    // LAYER 6: Decision
    {
      id: 'story-8273910265-6',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Vaulted Truth',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'Deep beneath marble floors, a chilled vault door swings open with a hiss. Using connections with a sympathetic bank manager, you gain access to a safety deposit box. Inside are folders of damning documents linking the city\'s elite to the disappearance. The weight of this evidence sits heavy in your hands.',
      choices: [
        {
          id: 'story-8273910265-c6',
          text: 'Photograph the documents',
          description: 'Evidence must be preserved.',
          targetNodeId: 'story-8273910265-7',
          order: 1,
        },
      ],
    },
    // LAYER 7: Decision
    {
      id: 'story-8273910265-7',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Forensic Analysis',
      imageUrl:
        'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        'Back in your own lab, flickering monitors illuminate your face. You scan the documents for fingerprints and analyze the paper under glaring light. A fingerprint matches an underworld fixer, and a GPS tag points toward the docks. The digital trail is as important as the paper one.',
      choices: [
        {
          id: 'story-8273910265-c7',
          text: 'Head to the docks to track them',
          description: 'Follow the digital breadcrumbs.',
          targetNodeId: 'story-8273910265-8',
          order: 1,
        },
      ],
    },
    // LAYER 8: Decision
    {
      id: 'story-8273910265-8',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Dockside Shadows',
      imageUrl:
        'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        'The smell of salt and diesel hangs heavy as you creep between crates at the docks. A lone boat rocks gently against weathered pilings, voices murmuring above the splash of waves. You spot the underworld fixer from the fingerprints meeting with a shadowy figure. Your presence has not been detected yet.',
      choices: [
        {
          id: 'story-8273910265-c8',
          text: 'Gather evidence quietly',
          description: 'Patience could bring proof.',
          targetNodeId: 'story-8273910265-9',
          order: 1,
        },
      ],
    },
    // LAYER 9: Decision
    {
      id: 'story-8273910265-9',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Warehouse Intel',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'Your surveillance pays off: a whispered conversation reveals a larger meeting at an abandoned warehouse tagged with graffiti. The building looms like a dark monument against the skyline. You now know where the conspiracy\'s heart beats. You follow the fixer from a safe distance.',
      choices: [
        {
          id: 'story-8273910265-c9',
          text: 'Infiltrate the warehouse',
          description: 'Time is of the essence.',
          targetNodeId: 'story-8273910265-10',
          order: 1,
        },
      ],
    },
    // LAYER 10: Decision
    {
      id: 'story-8273910265-10',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Breaking In',
      imageUrl:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        'You push open a side door into a long, dim hallway. Footsteps echo as you approach a meeting in progress, voices low and conspiratorial. Through a crack in the door you see figures gathered around a table, the star pendant displayed like a trophy. You have found the conspiracy\'s leaders.',
      choices: [
        {
          id: 'story-8273910265-c10',
          text: 'Record everything for evidence',
          description: 'Document the conspiracy.',
          targetNodeId: 'story-8273910265-11',
          order: 1,
        },
      ],
    },
    // LAYER 11: Final Decision before endings
    {
      id: 'story-8273910265-11',
      storyId: 'story-8273910265',
      type: 'decision',
      title: 'Point of No Return',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You stand at the edge of everything. The conspiracy\'s heart beats before you, exposed and vulnerable. One word from you could save or damn a dozen souls. The star ornament grows warm in your pocket, a reminder of where this began. Choose carefully, for there is no turning back.',
      choices: [
        {
          id: 'story-8273910265-c11a',
          text: 'Join the conspiracy',
          description: 'Power corrupts absolutely.',
          targetNodeId: 'story-8273910265-28',
          order: 1,
        },
        {
          id: 'story-8273910265-c11b',
          text: 'Destroy them completely',
          description: 'Burn it all down.',
          targetNodeId: 'story-8273910265-29',
          order: 2,
        },
        {
          id: 'story-8273910265-c11c',
          text: 'Expose everything publicly',
          description: 'Let the world know truth.',
          targetNodeId: 'story-8273910265-30',
          order: 3,
        },
        {
          id: 'story-8273910265-c11d',
          text: 'Charge in and confront them',
          description: 'Justice at any cost.',
          targetNodeId: 'story-8273910265-31',
          order: 4,
        },
      ],
    },
    // ENDINGS - Layer 12
    {
      id: 'story-8273910265-28',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Deal with the Devil',
      imageUrl:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        'Temptation wins. You pocket the files and step into the inner circle. The ladder you climb may be gilded, but every rung is slick with guilt. Wealth and connections flow your way, yet in quiet moments you wonder what became of the young woman whose ornament unlocked your fortune. You are rich but hollow, powerful but forever looking over your shoulder.',
      choices: [],
    },
    {
      id: 'story-8273910265-29',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Justice Served',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You choose the lawful path. With solid evidence in hand and back-up at your side, you watch as the conspirators are hauled before a judge. The courtroom\'s wooden benches creak as verdicts are read and justice reverberates through marble halls. The heiress is found alive, and you feel a rare sense of closure wash over you like cleansing rain.',
      choices: [],
    },
    {
      id: 'story-8273910265-30',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Whistleblower',
      imageUrl:
        'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        'You choose exposure over safety. Hidden behind glowing monitors, you compile recordings and documents and leak them to the press. Headlines explode, powerful figures fall, and the city convulses. You become both hero and target, vanishing into digital shadows while knowing you did the right thing. The truth is out, and you are free.',
      choices: [],
    },
    {
      id: 'story-8273910265-31',
      storyId: 'story-8273910265',
      type: 'ending',
      title: 'Shadows Remain',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You charge into the fray and the gang scatters like shadows in rain. A shot rings out, a boat engine roars, and the mastermind vanishes into the night. Weeks later you stare at your cork board, threads of yarn connecting photos that lead nowhere. The case goes cold and the city forgets, but you cannot. Some mysteries are never meant to be solved.',
      choices: [],
    },
  ],
};
