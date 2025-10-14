import { Story } from '../types';

export const midnightCuratorStory: Story = {
  id: 'story-847362951',
  title: 'The Midnight Curator',
  description:
    'A renowned art curator is found dead in a locked gallery on the eve of the biggest exhibition of her career. As the lead detective, you have until dawn to solve the murder before the press descends and the killer disappears forever.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=400',
  author: 'Detective Marcus Reed',
  genre: ['detective', 'mystery'],
  difficulty: 'medium',
  estimatedDuration: 18,
  isPremium: false,
  productId: null,
  version: '1.0',
  createdAt: '2025-01-15',
  updatedAt: '2025-01-15',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-847362951-1',
  nodes: [
    {
      id: 'story-847362951-1',
      storyId: 'story-847362951',
      type: 'start',
      title: 'Crime Scene Discovery',
      imageUrl:
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
      narration:
        "The call came at 11:47 PM. Victoria Ashford, the city's most celebrated art curator, lies sprawled beneath a Renaissance masterpiece, her champagne flute shattered on the marble floor. The gallery doors were locked from the inside, and her assistant discovered her body just minutes ago. Rain hammers against the skylights as you step into the dimly lit space, noting the exhibition opens in eight hours. Your captain's words echo in your mind: solve this fast, or the publicity will destroy any chance of finding the truth.",
      choices: [
        {
          id: 'story-847362951-c1',
          text: 'Examine the body first',
          description: 'Look for immediate clues on the victim',
          targetNodeId: 'story-847362951-2',
          order: 1,
        },
        {
          id: 'story-847362951-c2',
          text: 'Interview the assistant who found her',
          description: "Get the witness account while it's fresh",
          targetNodeId: 'story-847362951-3',
          order: 2,
        },
        {
          id: 'story-847362951-c3',
          text: 'Inspect the locked doors and windows',
          description: 'Determine how the killer escaped',
          targetNodeId: 'story-847362951-4',
          order: 3,
        },
      ],
    },
    {
      id: 'story-847362951-2',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'The Body Speaks',
      imageUrl:
        'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800',
      narration:
        "Victoria's neck bears faint bruising, but the medical examiner murmurs about something unusual in her pupils. Her designer dress is immaculate except for a small tear near the hem. In her left hand, you find a crumpled gallery receipt dated today, and her phone shows a deleted message notification from 11:30 PM. The champagne glass fragments reveal two different lipstick shades on the rim.",
      choices: [
        {
          id: 'story-847362951-c4',
          text: 'Focus on the deleted phone message',
          description: 'Technology might reveal who she contacted last',
          targetNodeId: 'story-847362951-5',
          order: 1,
        },
        {
          id: 'story-847362951-c5',
          text: 'Investigate the dual lipstick marks',
          description: 'Someone else drank from that glass',
          targetNodeId: 'story-847362951-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-3',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Trembling Testimony',
      imageUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      narration:
        "James Chen, Victoria's assistant for three years, can barely hold his coffee cup steady. He claims he left at 9 PM after helping set up the final pieces for tomorrow's exhibition. When he returned to retrieve his forgotten laptop, he found the door ajar and Victoria dead. His story seems rehearsed, but his genuine shock appears real. You notice his shoes are dry despite the downpour, and there's a faint smell of cigarette smoke on his jacket, though the gallery strictly prohibits smoking.",
      choices: [
        {
          id: 'story-847362951-c6',
          text: 'Question the inconsistencies in his timeline',
          description: "Press him on the details that don't add up",
          targetNodeId: 'story-847362951-7',
          order: 1,
        },
        {
          id: 'story-847362951-c7',
          text: "Ask about Victoria's recent behavior",
          description: 'Look for motive in her personal life',
          targetNodeId: 'story-847362951-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-4',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Sealed Chamber',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      narration:
        'The main entrance deadbolt is engaged from inside, the security chain still latched. Every window remains locked, their sensors undisturbed according to the security system. The only other exit leads to a fire escape, but its alarm is armed and shows no sign of being triggered. This should be impossible. Then you notice something odd: fresh scratches around the ventilation grate near the ceiling, and a single black thread caught on its edge.',
      choices: [
        {
          id: 'story-847362951-c8',
          text: 'Climb up to examine the ventilation system',
          description: 'Could someone have used the vents?',
          targetNodeId: 'story-847362951-9',
          order: 1,
        },
        {
          id: 'story-847362951-c9',
          text: 'Review the security camera footage',
          description: "Technology doesn't lie",
          targetNodeId: 'story-847362951-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-5',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Digital Footprints',
      imageUrl:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      narration:
        'Your tech specialist recovers the deleted message. It\'s from an unknown number: "I know what you did with the Caravaggio. Meet me tonight or I go to the press." Victoria replied: "Gallery at 11. Come alone." The message thread reveals three weeks of escalating threats. GPS data shows the sender\'s phone was at the gallery tonight, then went dark at 11:43 PM, four minutes before Victoria died.',
      choices: [
        {
          id: 'story-847362951-c10',
          text: "Trace the phone number's owner",
          description: 'Find out who was blackmailing her',
          targetNodeId: 'story-847362951-11',
          order: 1,
        },
        {
          id: 'story-847362951-c11',
          text: 'Investigate the Caravaggio painting mentioned',
          description: 'What secret was she hiding?',
          targetNodeId: 'story-847362951-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-6',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'A Second Guest',
      imageUrl:
        'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800',
      narration:
        'Lab analysis confirms two people drank from the glass: Victoria and someone wearing "Crimson Noir," an expensive limited-edition lipstick. Only 200 bottles were sold worldwide. Your database check reveals three potential matches in the city, but one name stands out: Elena Volkov, a rival curator who publicly feuded with Victoria last month over a stolen attribution. Security logs show Elena\'s membership card was scanned at the gallery entrance at 10:45 PM.',
      choices: [
        {
          id: 'story-847362951-c12',
          text: 'Bring Elena in for immediate questioning',
          description: 'Confront her before she can fabricate an alibi',
          targetNodeId: 'story-847362951-13',
          order: 1,
        },
        {
          id: 'story-847362951-c13',
          text: 'Search for other evidence first',
          description: 'Build a stronger case before showing your hand',
          targetNodeId: 'story-847362951-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-7',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Cracking Under Pressure',
      imageUrl:
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
      narration:
        'James breaks down under questioning. He admits he lied about leaving at 9 PM. He was here until 11:15 PM, hiding in the storage room after overhearing Victoria arguing with someone on the phone. The argument was about forged documentation for a painting. He was terrified, slipped out through the service entrance, then returned to "discover" the body to avoid suspicion. He swears Victoria was alive when he left, and describes hearing a woman\'s voice shouting at her.',
      choices: [
        {
          id: 'story-847362951-c14',
          text: "Have him describe the woman's voice",
          description: 'Vocal recognition might identify the killer',
          targetNodeId: 'story-847362951-15',
          order: 1,
        },
        {
          id: 'story-847362951-c15',
          text: 'Search the storage room he hid in',
          description: 'He might have seen or heard more than he admits',
          targetNodeId: 'story-847362951-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-8',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Personal Demons',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      narration:
        'James hesitates, then reveals Victoria had been different lately: paranoid, secretive, making suspicious phone calls. Two weeks ago, she received a package that made her go pale. She mentioned owing someone from her past a debt she couldn\'t repay. James found a business card in her trash from a private investigator named David Morse. The card had a handwritten note: "I found what you\'re looking for. Payment due."',
      choices: [
        {
          id: 'story-847362951-c16',
          text: 'Track down the private investigator',
          description: 'Find out what he discovered about Victoria',
          targetNodeId: 'story-847362951-17',
          order: 1,
        },
        {
          id: 'story-847362951-c17',
          text: "Search Victoria's office for the package",
          description: "The contents might reveal the killer's motive",
          targetNodeId: 'story-847362951-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-9',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'The Impossible Route',
      imageUrl:
        'https://images.unsplash.com/photo-1581093458791-9d42e1428f1f?w=800',
      narration:
        "The ventilation shaft is barely wide enough for a child, and it leads only to the rooftop HVAC system. Impossible for an adult to navigate. But wedged inside you find something chilling: a small remote device connected to the gallery's security system. Someone with technical expertise planted this to disable specific sensors. The device's memory shows it was activated at 11:35 PM and deactivated at 11:50 PM, creating a window for someone to enter and exit without triggering alarms.",
      choices: [
        {
          id: 'story-847362951-c18',
          text: 'Analyze the device for fingerprints or DNA',
          description: 'Forensics might identify the tech expert',
          targetNodeId: 'story-847362951-18',
          order: 1,
        },
        {
          id: 'story-847362951-c19',
          text: 'Check who had access to security system specs',
          description: 'The killer needed inside information',
          targetNodeId: 'story-847362951-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-10',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Eyes in the Dark',
      imageUrl:
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
      narration:
        "The security footage reveals something disturbing: a fifteen-minute gap from 11:30 to 11:45 PM where the feed goes completely black. It wasn't a technical glitch; someone manually disabled the cameras using Victoria's administrative password. The last clear image shows Victoria pouring two glasses of champagne at 11:28 PM. The timestamp also reveals someone accessed the security office at 6 PM today, downloading the system specifications.",
      choices: [
        {
          id: 'story-847362951-c20',
          text: 'Find out who accessed the security office at 6 PM',
          description: 'The killer planned this carefully',
          targetNodeId: 'story-847362951-11',
          order: 1,
        },
        {
          id: 'story-847362951-c21',
          text: "Check who else knew Victoria's admin password",
          description: 'This was someone she trusted',
          targetNodeId: 'story-847362951-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-11',
      storyId: 'story-847362951',
      type: 'decision',
      title: "The Blackmailer's Identity",
      imageUrl:
        'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=800',
      narration:
        "The phone trace leads you to Thomas Ashford, Victoria's ex-husband and a disgraced art dealer. He lost everything in their divorce five years ago and blamed her for ruining his reputation. His phone records confirm he was at the gallery tonight. When officers pick him up, he's already packing to flee the country. In his apartment, you find documents proving Victoria had been selling forged paintings, authenticating them herself to unsuspecting collectors.",
      choices: [
        {
          id: 'story-847362951-c22',
          text: 'Arrest Thomas as the primary suspect',
          description: 'He had motive, opportunity, and damning evidence',
          targetNodeId: 'story-847362951-20',
          order: 1,
        },
        {
          id: 'story-847362951-c23',
          text: 'Keep investigating - something feels off',
          description: 'Blackmailers usually want money, not murder',
          targetNodeId: 'story-847362951-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-12',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Secrets in Oil and Canvas',
      imageUrl:
        'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800',
      narration:
        "Victoria's private office reveals the truth: the Caravaggio set to be unveiled tomorrow is a masterful forgery. Documents show she commissioned it from a talented forger named Marcus Webb after the original was damaged beyond repair during transport. Rather than admit the loss, she planned to pass off the fake as authentic. The insurance payout alone would be fifteen million dollars. You find Webb's contact information and a receipt for final payment: five hundred thousand dollars, paid yesterday.",
      choices: [
        {
          id: 'story-847362951-c24',
          text: 'Locate and question Marcus Webb',
          description: 'The forger might have killed to protect his secret',
          targetNodeId: 'story-847362951-13',
          order: 1,
        },
        {
          id: 'story-847362951-c25',
          text: 'Find out who else knew about the forgery',
          description: 'Multiple people could have wanted her silenced',
          targetNodeId: 'story-847362951-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-13',
      storyId: 'story-847362951',
      type: 'decision',
      title: "The Rival's Tale",
      imageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800',
      narration:
        'Elena Volkov sits across from you with unsettling composure. She admits to being at the gallery and drinking champagne with Victoria. They were negotiating: Victoria offered Elena fifty thousand dollars to authenticate the forged Caravaggio publicly, lending it credibility. Elena refused and threatened to expose Victoria unless she withdrew the painting. She left at 11:35 PM, she claims, with Victoria alive. Her lawyer arrives within minutes, clearly prepared for this confrontation.',
      choices: [
        {
          id: 'story-847362951-c26',
          text: 'Charge Elena with murder',
          description: "She was there, she had motive, and she's too prepared",
          targetNodeId: 'story-847362951-21',
          order: 1,
        },
        {
          id: 'story-847362951-c27',
          text: 'Release Elena but maintain surveillance',
          description: 'Let her lead you to more evidence',
          targetNodeId: 'story-847362951-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-14',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Hidden Connections',
      imageUrl:
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
      narration:
        "Cross-referencing all your evidence reveals a pattern. Victoria's assistant James, her ex-husband Thomas, and rival curator Elena all received payments from the same offshore account in the past month. Someone paid them each twenty thousand dollars. Bank records trace the account to a shell corporation owned by Richard Ashford, Victoria's uncle and the gallery's primary benefactor. His name is on the insurance policy for the Caravaggio as well.",
      choices: [
        {
          id: 'story-847362951-c28',
          text: 'Confront Richard about the payments',
          description: 'Force him to explain his involvement',
          targetNodeId: 'story-847362951-18',
          order: 1,
        },
        {
          id: 'story-847362951-c29',
          text: "Dig deeper into Richard's finances",
          description: 'Follow the money to find the truth',
          targetNodeId: 'story-847362951-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-15',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Voice of Accusation',
      imageUrl:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      narration:
        'James describes the voice as sophisticated, controlled despite the anger. Eastern European accent, possibly Russian. He heard phrases like "you promised me" and "I\'ll destroy everything you built." Running this through your database of known associates produces one strong match: Elena Volkov, the rival curator. Her voice pattern matches recordings from a public lecture she gave last month. The timeline fits perfectly with her gallery access card scan.',
      choices: [
        {
          id: 'story-847362951-c30',
          text: "Issue a warrant for Elena's arrest",
          description: 'You have enough to charge her',
          targetNodeId: 'story-847362951-13',
          order: 1,
        },
        {
          id: 'story-847362951-c31',
          text: 'Continue building the case',
          description: "Voice recognition alone won't convict",
          targetNodeId: 'story-847362951-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-16',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Storage Room Secrets',
      imageUrl:
        'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800',
      narration:
        "The storage room reveals James was closer than he admitted. From his hiding spot, he would have had a clear view through a gap in the shelving. You find his forgotten laptop, and on it, timestamped at 11:42 PM, is a video file he recorded on his phone. The footage is shaky but shows a figure in black leaving the gallery. Just before the video cuts out, the figure turns, and you catch a partial profile. The build and gait don't match Elena Volkov or Thomas Ashford.",
      choices: [
        {
          id: 'story-847362951-c32',
          text: 'Enhance and analyze the video footage',
          description: 'Technology can identify the mysterious figure',
          targetNodeId: 'story-847362951-18',
          order: 1,
        },
        {
          id: 'story-847362951-c33',
          text: 'Confront James about withholding this evidence',
          description: "He knows more than he's saying",
          targetNodeId: 'story-847362951-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-17',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'The Money Trail',
      imageUrl:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
      narration:
        "Richard Ashford's financial records paint a picture of desperation. The gallery is hemorrhaging money, and he's mortgaged everything to keep it afloat. The insurance payout from the Caravaggio would save him from bankruptcy. But there's more: Victoria's life insurance policy, worth ten million dollars, names Richard as the sole beneficiary. A policy she updated just three months ago. Your forensic accountant discovers Richard made a large payment to a private security contractor two weeks ago.",
      choices: [
        {
          id: 'story-847362951-c34',
          text: 'Bring Richard in immediately',
          description: 'He orchestrated everything for the insurance money',
          targetNodeId: 'story-847362951-22',
          order: 1,
        },
        {
          id: 'story-847362951-c35',
          text: 'Investigate the security contractor',
          description: 'He might have hired someone to do the killing',
          targetNodeId: 'story-847362951-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-18',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Technical Truth',
      imageUrl:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      narration:
        "The enhanced analysis breaks the case wide open. The remote device bears partial DNA from the security contractor Richard hired: Sarah Mitchell, a former military tech specialist with a history of corporate espionage. The video James recorded shows her leaving the gallery. Your team tracks her to a hotel downtown, where she's preparing to leave the country. In her room, you find the rest of her payment: two hundred thousand dollars in cash, and a burner phone with texts from Richard Ashford detailing the entire plan.",
      choices: [
        {
          id: 'story-847362951-c36',
          text: 'Arrest both Sarah and Richard',
          description: 'You have evidence against both conspirators',
          targetNodeId: 'story-847362951-22',
          order: 1,
        },
        {
          id: 'story-847362951-c37',
          text: 'Offer Sarah a deal to testify against Richard',
          description: 'Get the full story and guarantee conviction',
          targetNodeId: 'story-847362951-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-19',
      storyId: 'story-847362951',
      type: 'decision',
      title: 'Circle of Trust',
      imageUrl:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
      narration:
        "Only three people had Victoria's administrative password: James her assistant, Elena Volkov from their previous collaboration on an exhibition, and Richard Ashford as gallery owner. Cross-referencing this with all your other evidence, you realize the killer wasn't working alone. The technical expertise, the inside knowledge, the careful timing - this was a conspiracy. Someone orchestrated multiple people to create chaos, confusion, and misdirection while they executed the perfect murder.",
      choices: [
        {
          id: 'story-847362951-c38',
          text: 'Gather all suspects for a final confrontation',
          description: 'Force the truth out in the open',
          targetNodeId: 'story-847362951-22',
          order: 1,
        },
        {
          id: 'story-847362951-c39',
          text: 'Focus on Richard as the mastermind',
          description: "He had the most to gain from Victoria's death",
          targetNodeId: 'story-847362951-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362951-20',
      storyId: 'story-847362951',
      type: 'ending',
      title: 'False Justice',
      imageUrl:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800',
      narration:
        "Thomas Ashford is convicted of Victoria's murder based on his blackmail scheme and presence at the scene. The case closes, the media celebrates your quick resolution, and the gallery exhibition proceeds with a different painting. But six months later, you receive an anonymous package containing security footage that was \"lost\" during the investigation. It shows someone else entering through a service door at 11:40 PM - someone whose face you recognize from the gallery's board of directors. The real killer is still free, protected by money and influence, and you'll never be able to reopen the case without destroying your career. You arrested an extortionist, but not a murderer. Justice was convenient, but it wasn't real.",
      choices: [],
    },
    {
      id: 'story-847362951-21',
      storyId: 'story-847362951',
      type: 'ending',
      title: 'Reasonable Doubt',
      imageUrl:
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800',
      narration:
        "Elena Volkov stands trial for Victoria Ashford's murder, but her expensive legal team shreds your case. The lipstick evidence is circumstantial. Her admission to being at the gallery becomes a voluntary cooperation. The lack of physical violence on Elena's body contradicts the struggle Victoria must have put up. After three weeks, the jury returns a not guilty verdict. Elena walks free, her reputation tarnished but her freedom intact. The real killer might be her, or it might be someone you never even considered. The case goes cold. Years later, you still drive past the gallery on rainy nights, wondering if you charged the wrong person, or if a murderer smiled at you from the defense table and won.",
      choices: [],
    },
    {
      id: 'story-847362951-22',
      storyId: 'story-847362951',
      type: 'ending',
      title: 'The Perfect Frame',
      imageUrl:
        'https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?w=800',
      narration:
        "Richard Ashford's arrest brings down the entire conspiracy. Sarah Mitchell confesses to everything in exchange for a reduced sentence. Richard had planned Victoria's murder for months, motivated by debt and greed. He paid off Thomas, Elena, and James to create a web of alternative suspects, then hired Sarah to execute the actual killing while he established an alibi at a charity gala. Victoria trusted her uncle completely, never suspecting he'd poisoned her champagne before Sarah even arrived. The locked room was theater - Sarah disabled the alarms, planted false evidence, and left through the service door. Richard would have inherited everything and collected the insurance money on the forged Caravaggio. The morning sun breaks through the rain as patrol cars lead Richard away. The gallery will close permanently, its reputation destroyed. But you solved the case, and justice, finally, is served.",
      choices: [],
    },
  ],
};
