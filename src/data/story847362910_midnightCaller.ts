import { Story } from '../types';

export const midnightCallerStory: Story = {
  id: 'story-847362910',
  title: 'The Midnight Caller',
  description:
    'Someone knows what you did last summer. The phone rings at 3 AM with a voice from your past, and now you have 48 hours to find them before they find you. Every choice could be your last.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=400',
  author: 'Elena Blackwood',
  genre: 'detective',
  involvement: 'medium',
  estimatedDuration: 35,
  isPremium: false,
  version: '2.0',
  createdAt: '2025-01-12',
  updatedAt: '2025-01-30',
  totalNodes: 15,
  totalEndings: 4,
  startNodeId: 'story-847362910-1',
  nodes: [
    // NODE 1: The Initial Call (START)
    {
      id: 'story-847362910-1',
      storyId: 'story-847362910',
      type: 'start',
      title: 'The Call',
      imageUrl:
        'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        'Your phone screams at 3:17 AM, shattering the silence of your apartment. The number is blocked, but you answer anyway—nobody calls this late with good news. A distorted voice whispers through static: "Detective Cross, I know what happened at Riverside Park. You have 48 hours to find me, or I will find you." The line goes dead before you can respond, leaving only the pounding of your heart and the ghost of their words echoing in the dark room.',
      choices: [
        {
          id: 'story-847362910-c1',
          text: 'Check your old case files from Riverside Park',
          description: 'Dig into the past you tried to forget',
          targetNodeId: 'story-847362910-2',
          order: 1,
        },
        {
          id: 'story-847362910-c2',
          text: 'Trace the call immediately through police channels',
          description: 'Use your contacts to find the source',
          targetNodeId: 'story-847362910-2',
          order: 2,
        },
      ],
    },
    // NODE 2: Digging into the Past
    {
      id: 'story-847362910-2',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Buried Evidence',
      imageUrl:
        'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        'The file box sits in your closet where you left it three years ago, covered in dust and regret. Inside, crime scene photos show the park at dawn, yellow tape cordoning off the gazebo. The victim, Marcus Dalton, stares up from glossy paper with lifeless eyes. Your notes mention a witness who never came forward—someone saw everything but disappeared. Then you notice it: a photo is missing from the sequence, and the dust on the box has been recently disturbed. Someone has been here.',
      choices: [
        {
          id: 'story-847362910-c3',
          text: 'Examine the file box for signs of tampering',
          description: 'Someone else has been looking at these files',
          targetNodeId: 'story-847362910-3',
          order: 1,
        },
        {
          id: 'story-847362910-c4',
          text: 'Focus on finding the missing witness first',
          description: 'The caller might be the witness from three years ago',
          targetNodeId: 'story-847362910-3',
          order: 2,
        },
      ],
    },
    // NODE 3: Evidence Tampering
    {
      id: 'story-847362910-3',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Fresh Fingerprints',
      imageUrl:
        'https://images.unsplash.com/photo-1505664194779-8ab2f700bfe0?w=800',
      narration:
        'With your desk lamp angled just right, you spot smudges on the file folder—fresh fingerprints in the dust, not yours. Someone has been in your apartment recently. Your door lock shows tiny scratches near the keyhole, almost invisible unless you know what to look for. They picked your lock, searched your case files, and took evidence. The realization hits you hard: the caller is not just watching you, they have been inside your home while you slept. You need to secure your apartment.',
      choices: [
        {
          id: 'story-847362910-c5',
          text: 'Search your apartment for other signs of intrusion',
          description: 'Find out what else they touched or left behind',
          targetNodeId: 'story-847362910-4',
          order: 1,
        },
        {
          id: 'story-847362910-c6',
          text: 'Call for police protection and secure the scene',
          description: 'This is beyond a solo investigation now',
          targetNodeId: 'story-847362910-4',
          order: 2,
        },
      ],
    },
    // NODE 4: Home Invasion
    {
      id: 'story-847362910-4',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Uninvited Guest',
      imageUrl:
        'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        'Your systematic search reveals disturbing evidence of intrusion. The coffee mug you left in the sink is now in the drying rack. Your bedroom window is open just a crack, and you always keep it locked. The books on your shelf have been rearranged—subtle, but you notice. Then you see it: a single photograph placed face-down on your kitchen table. When you flip it over, your blood runs cold—it is you, asleep in your bed, taken from the foot of your mattress last night. They were that close.',
      choices: [
        {
          id: 'story-847362910-c7',
          text: 'Set a trap and wait for them to return',
          description: 'Turn the tables on your stalker',
          targetNodeId: 'story-847362910-5',
          order: 1,
        },
        {
          id: 'story-847362910-c8',
          text: 'Leave immediately and find a safe location',
          description: 'Your apartment is compromised',
          targetNodeId: 'story-847362910-5',
          order: 2,
        },
      ],
    },
    // NODE 5: The Witness Identity
    {
      id: 'story-847362910-5',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Sarah Chen',
      imageUrl:
        'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        'Your notes mention a name that never appeared in the official report: Sarah Chen, a jogger who supposedly saw someone leaving the gazebo at 6:15 AM that morning. You tracked her down once, but she refused to talk, claimed she saw nothing, and moved away two weeks later. A quick search shows she is back in town, working at a bookstore on Morrison Street. The timing is suspicious—she returns just as the midnight caller emerges from the shadows of your past. She must be connected.',
      choices: [
        {
          id: 'story-847362910-c9',
          text: 'Go to the bookstore to find Sarah',
          description: 'Confront the witness who disappeared',
          targetNodeId: 'story-847362910-6',
          order: 1,
        },
        {
          id: 'story-847362910-c10',
          text: 'Research Sarah Chen first—where has she been',
          description: 'Three years is a long time to stay hidden',
          targetNodeId: 'story-847362910-6',
          order: 2,
        },
      ],
    },
    // NODE 6: The Bookstore
    {
      id: 'story-847362910-6',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Morrison Books',
      imageUrl:
        'https://images.unsplash.com/photo-1516975080664-2151bcd01707?w=800',
      narration:
        'The bookstore is a cozy labyrinth of wooden shelves and the smell of old paper. The owner, an elderly woman with reading glasses on a chain, recognizes Sarah from your description. She called in sick today—first time in eight months, the woman says, concern creasing her face. Sarah has been jumpy lately, looking over her shoulder like someone is following her. She gives you an address, a small apartment building on the edge of town, but warns you: Sarah seemed scared of something. Or someone.',
      choices: [
        {
          id: 'story-847362910-c11',
          text: 'Go to Sarah apartment immediately',
          description: 'If she is in danger, time matters',
          targetNodeId: 'story-847362910-7',
          order: 1,
        },
        {
          id: 'story-847362910-c12',
          text: 'Stake out the bookstore in case she returns',
          description: 'She might be avoiding you specifically',
          targetNodeId: 'story-847362910-7',
          order: 2,
        },
      ],
    },
    // NODE 7: Sarah Apartment
    {
      id: 'story-847362910-7',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Door 412',
      imageUrl:
        'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        'Sarah apartment building is a converted Victorian house, now split into four units. Her door is on the ground floor, and as you approach, you notice something wrong: the door is slightly ajar, and a light flickers inside. You draw your weapon and push the door open with your foot. The living room has been ransacked—furniture overturned, books scattered, drawers pulled out. But there is no sign of Sarah. On the coffee table, a laptop sits open, the screen still warm.',
      choices: [
        {
          id: 'story-847362910-c13',
          text: 'Check the laptop for more information',
          description: 'What else was she researching',
          targetNodeId: 'story-847362910-8',
          order: 1,
        },
        {
          id: 'story-847362910-c14',
          text: 'Search the rest of the apartment',
          description: 'Find out what happened to Sarah',
          targetNodeId: 'story-847362910-8',
          order: 2,
        },
      ],
    },
    // NODE 8: The Laptop
    {
      id: 'story-847362910-8',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Digital Trail',
      imageUrl:
        'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        'Sarah laptop reveals a detailed plan—dates, times, locations, names. She and someone named Rebecca Dalton have been building a case against Captain Morrison for months, gathering evidence, recording conversations, tracking his movements. The browser history shows searches for Dalton family, Marcus Dalton murder, and Rebecca Dalton release. They planned to expose everything next week. But two days ago, Sarah discovered that Morrison knew about their investigation. That is why she ran.',
      choices: [
        {
          id: 'story-847362910-c15',
          text: 'Research the Dalton family connection',
          description: 'Marcus Dalton was the murder victim',
          targetNodeId: 'story-847362910-9',
          order: 1,
        },
        {
          id: 'story-847362910-c16',
          text: 'Find where Rebecca Dalton is now',
          description: 'She might know where Sarah went',
          targetNodeId: 'story-847362910-9',
          order: 2,
        },
      ],
    },
    // NODE 9: Family Secrets
    {
      id: 'story-847362910-9',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'The Dalton Legacy',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You dig into the Dalton family history and find something the original investigation missed entirely. Marcus had a younger sister, Rebecca, who was institutionalized after his death. The official story said she had a breakdown from grief, but her medical records tell a different story—she tried to confess to killing her brother, but doctors dismissed it as delusion. She was released six months ago, and her last known address is an apartment near the old cannery. The pieces are falling into place.',
      choices: [
        {
          id: 'story-847362910-c17',
          text: 'Search for Rebecca Dalton online',
          description: 'Find her current location and activities',
          targetNodeId: 'story-847362910-10',
          order: 1,
        },
        {
          id: 'story-847362910-c18',
          text: 'Head to her apartment immediately',
          description: 'She might be the key to everything',
          targetNodeId: 'story-847362910-10',
          order: 2,
        },
      ],
    },
    // NODE 10: Finding Rebecca
    {
      id: 'story-847362910-10',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Digital Shadow',
      imageUrl:
        'https://images.unsplash.com/photo-1550895030-823330dfb759?w=800',
      narration:
        'Rebecca Dalton has tried to stay invisible, but everyone leaves traces. You find a library card in her name, checked out yesterday. A coffee shop loyalty app with recent purchases near the industrial district. Then you find the critical link: she volunteers at a women shelter three nights a week, and tonight is one of those nights. Sarah and Rebecca were college roommates—they have known each other for years. This is not just about witnessing a murder. This is personal.',
      choices: [
        {
          id: 'story-847362910-c19',
          text: 'Go to the shelter tonight',
          description: 'Confront her in a public place',
          targetNodeId: 'story-847362910-11',
          order: 1,
        },
        {
          id: 'story-847362910-c20',
          text: 'Go to Rebecca apartment now',
          description: 'She might have Sarah with her',
          targetNodeId: 'story-847362910-11',
          order: 2,
        },
      ],
    },
    // NODE 11: The Connection
    {
      id: 'story-847362910-11',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Linked Lives',
      imageUrl:
        'https://images.unsplash.com/photo-1505664194779-8ab2f700bfe0?w=800',
      narration:
        'You dig deeper into both women histories and find the connection: they were roommates in college, years before Marcus Dalton death. Sarah Chen and Rebecca Dalton lived together for two years, then drifted apart. But when Marcus was killed, Sarah suddenly moved away without telling anyone where she was going. And when Rebecca was released from the institution six months ago, Sarah returned to the city within weeks. These two women have been connected for years, bound by something that started long before that morning in Riverside Park.',
      choices: [
        {
          id: 'story-847362910-c21',
          text: 'Find both women together',
          description: 'They might be working together',
          targetNodeId: 'story-847362910-ending-branch',
          order: 1,
        },
        {
          id: 'story-847362910-c22',
          text: 'Confront Rebecca about the connection',
          description: 'Ask why she never mentioned Sarah',
          targetNodeId: 'story-847362910-ending-branch',
          order: 2,
        },
      ],
    },
    // NODE 12: Branching to Endings
    {
      id: 'story-847362910-ending-branch',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'The Truth Emerges',
      imageUrl:
        'https://images.unsplash.com/photo-1505664194779-8ab2f700bfe0?w=800',
      narration:
        'The pieces finally click into place. You track Rebecca to a safe house on the outskirts of town. Through the window, you see both women—Sarah and Rebecca—poring over documents spread across a kitchen table. They look exhausted but determined. You have a choice now: approach them as an ally, or treat them as suspects. Your decision will determine how this story ends. Three years of secrets, lies, and pain have led to this moment. What kind of detective are you?',
      choices: [
        {
          id: 'story-847362910-c-end1',
          text: 'Approach peacefully and hear their story',
          description: 'They have been trying to expose the truth',
          targetNodeId: 'story-847362910-41',
          order: 1,
        },
        {
          id: 'story-847362910-c-end2',
          text: 'Arrest them both for obstruction',
          description: 'They withheld evidence for three years',
          targetNodeId: 'story-847362910-42',
          order: 2,
        },
        {
          id: 'story-847362910-c-end3',
          text: 'Offer to help them off the books',
          description: 'Work together to bring down Morrison',
          targetNodeId: 'story-847362910-43',
          order: 3,
        },
        {
          id: 'story-847362910-c-end4',
          text: 'Press them hard for answers',
          description: 'Force a confession immediately',
          targetNodeId: 'story-847362910-44',
          order: 4,
        },
      ],
    },
    // ENDING 1: Justice Served (Good Ending)
    {
      id: 'story-847362910-41',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'Justice Served',
      imageUrl:
        'https://images.unsplash.com/photo-1550895030-823330dfb759?w=800',
      narration:
        'Rebecca lowers her weapon and tells you everything. Her brother Marcus discovered that Captain Morrison was using the Dalton cannery to store and distribute drugs seized from evidence. When Marcus threatened to expose him, Morrison killed him and framed it as a random attack. Rebecca saw everything from her car that morning—she was bringing Marcus coffee, their weekly ritual. Morrison paid the medical director to declare her mentally unfit, ensuring no one would believe her confession. But Rebecca spent three years in an institution gathering evidence. She recorded everything. You listen to the recordings, look at the documents, and make your choice. Together, you bring Morrison down. He gets life without parole. Rebecca is cleared. You are promoted. Some nights, you still wonder if you did enough, but then Rebecca texts you photos of her opening a bakery with her settlement money, and you remember: this time, the good guys won.',
      choices: [],
    },
    // ENDING 2: System Failure (Bad Ending)
    {
      id: 'story-847362910-42',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'System Failure',
      imageUrl:
        'https://images.unsplash.com/photo-1516975080664-2151bcd01707?w=800',
      narration:
        'You arrest Rebecca for stalking and harassment. In custody, she refuses to talk, gives you nothing. Without her evidence—the location of which she will not reveal—there is no case against Morrison. He retires three months later with full pension and a ceremony honoring his thirty years of service. Rebecca serves eight months for misdemeanor stalking, then disappears. Sarah Chen moves away again, and you never hear from her. The case file stays open on your desk for another year before you finally archive it. Sometimes the system protects the guilty, and sometimes justice is nothing more than paperwork and compromises. You hand in your badge six months later, tired of fighting battles you cannot win. The midnight caller never contacts you again.',
      choices: [],
    },
    // ENDING 3: Ghost Detective (Alternative Good Ending)
    {
      id: 'story-847362910-43',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'Ghost Detective',
      imageUrl:
        'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        'You find Sarah and Rebecca together in a safe house outside the city. They have the evidence they need to expose Morrison, but they need someone on the inside to verify its authenticity. You agree to help them off the books. For three weeks, you work during the day as a detective and at night as a vigilante, helping them build an airtight case. When it is ready, you leak the evidence to three newspapers simultaneously and disappear. By morning, Morrison is arrested at the airport trying to flee to Argentina. The scandal brings down half the department, but the city is better for it. You change your name, move to Montana, and open a small detective agency. Rebecca sends you a postcard every Christmas. Sarah sends you cookies. You are not a hero, but you did the right thing. Sometimes that has to be enough.',
      choices: [],
    },
    // ENDING 4: Final Silence (Bad Ending)
    {
      id: 'story-847362910-44',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'Final Silence',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        'You press Rebecca about her connection to Sarah, pushing too hard, moving too fast. She panics. The gun in her hand trembles, and you realize your mistake too late. She is not a criminal mastermind—she is a traumatized woman who has been living in fear for three years. And now you have cornered her. She backs away, toward the open window, tears streaming down her face. I just wanted someone to care that he died, she whispers. Then she is gone, out the window and into the night. You never find her. Sarah disappears too. Morrison retires with honors. And you spend the rest of your career wondering what would have happened if you had just listened instead of interrogated. The midnight caller never contacts you again. You were not the detective she hoped you were.',
      choices: [],
    },
  ],
};
