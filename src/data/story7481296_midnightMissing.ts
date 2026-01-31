import { Story } from '../types';

export const midnightMissingStory: Story = {
  id: 'story-7481296',
  title: 'Midnight Missing',
  description:
    'When a young woman vanishes without a trace, a determined detective must navigate city shadows and unravel a web of clues before time runs out. Every decision could mean a life saved or a trail gone cold.',
  coverImageUrl: require('../assets/images/covers/cover-story-7481296.jpg'),
  thumbnailUrl: require('../assets/images/covers/cover-story-7481296.jpg'),
  author: 'Morgan Steele',
  genre: 'detective',
  involvement: 'medium',
  estimatedDuration: 20,
  isPremium: false,
  productId: '',
  version: '1.0',
  createdAt: '2025-01-14',
  updatedAt: '2025-01-14',
  totalNodes: 22,
  totalEndings: 5,
  startNodeId: 'story-7481296-1',
  nodes: [
    {
      id: 'story-7481296-1',
      storyId: 'story-7481296',
      type: 'start',
      title: 'Missing at Midnight',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "A neon-lit clock strikes midnight as you sit in your cramped office, rain drumming on the window. The phone's ring shatters the silence – a panicked voice reports that **Emily Parker** is missing. Emily vanished from her apartment just hours ago, leaving behind a half-eaten dinner and an unlocked door. Her neighbor saw nothing unusual. You grab your coat, heart pounding, knowing every minute counts in an abduction case. With the city asleep and clues already fading, you vow to uncover the truth before dawn breaks.",
      choices: [
        {
          id: 'story-7481296-c1',
          text: "Search Emily's apartment for clues",
          description: 'Her home may hide evidence of her disappearance',
          targetNodeId: 'story-7481296-2',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-2',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Ransacked Home',
      imageUrl:
        'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        "Emily's apartment is eerily quiet as you step inside. The door was unlocked and slightly ajar, a single lamp spilling dim light on a chaotic scene. Drawers hang open and belongings are strewn across the floor, as if someone left in a tremendous hurry. You step carefully over a toppled chair and notice two things: a crumpled business card from her **office coworker** on the coffee table, and a matchbook from **Serpent's Den Bar**, a notorious underworld hangout, lying near the door. The air is tense with the smell of spilled coffee.",
      choices: [
        {
          id: 'story-7481296-c2',
          text: "Examine the coworker's business card",
          description: 'Could a colleague have a motive for her disappearance?',
          targetNodeId: 'story-7481296-3',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-3',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Office Suspicions',
      imageUrl:
        'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        "The city's financial tower looms overhead as you arrive at Emily's workplace. Inside, you confront **Alan Ridge**, her coworker whose name is on the card. Alan's smile is thin and nervous under the fluorescent office lights. He insists he barely knew Emily outside work, but sweat beads on his brow and his hands tremble slightly. On his desk, you glimpse a document with Emily's name partly visible – quickly, Alan shuffles it away. A gut feeling tells you he's hiding something significant about their professional relationship.",
      choices: [
        {
          id: 'story-7481296-c3',
          text: 'Press Alan aggressively for answers',
          description: 'Confront him head-on about his connection to Emily',
          targetNodeId: 'story-7481296-4',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-4',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Flight and Fury',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "Alan's composure shatters under your barrage of questions about Emily. Suddenly, he bolts from his chair and dashes for the exit, pure panic in his eyes. 'Stop!' you shout, racing after him through the empty office corridors. He shoves open the stairwell door, footsteps echoing as he descends frantically. Your heart pounds – he could be running straight to where Emily is held, or trying to destroy crucial evidence. The night air hits as he bursts out a side door into the dark parking garage.",
      choices: [
        {
          id: 'story-7481296-c4',
          text: 'Chase Alan through the parking garage',
          description: "Don't let him escape with the truth",
          targetNodeId: 'story-7481296-5',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-5',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'High-Speed Pursuit',
      imageUrl:
        'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        "Tires screech as you chase Alan's car through the deserted city streets. Neon signs and traffic lights blur past your windshield. Alan drives like a madman, desperate to shake your pursuit. Ahead, you see him veering towards an industrial area – likely the warehouse district by the docks. Your car's engine howls as you close the distance. In the beam of your headlights, Alan's face is a mask of terror glancing from his rearview mirror. This chase could lead you straight to Emily.",
      choices: [
        {
          id: 'story-7481296-c5',
          text: 'Follow him toward the docks',
          description: 'Stay on his tail to find the hideout',
          targetNodeId: 'story-7481296-6',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-6',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Abandoned Warehouse',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        "You arrive at the old warehouse just as purple-gray dawn light touches the horizon. The building stands silent and decrepit, its corrugated metal walls streaked with rust. Alan's car is parked outside, but he has vanished inside. Through a high window, you catch a glimpse of movement – a shadow pacing nervously. Your heart leaps, thinking it could be Emily or her captor. The front entrance is a heavy sliding door, slightly ajar. You stand alone in the chill morning air.",
      choices: [
        {
          id: 'story-7481296-c6',
          text: 'Sneak inside through the side entrance',
          description: 'Use stealth to gather intel first',
          targetNodeId: 'story-7481296-7',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-7',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Hidden Observer',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "You slip into the warehouse's shadowy interior as quietly as a ghost. Moving between stacks of dusty crates, you survey the scene. In the dim light filtering through broken windows, you finally spot **Emily**: tied to a chair at the center of the floor, eyes wide above a cloth gag. **Alan Ridge** stands nearby, nervously checking his phone and glancing at the door. He seems to be waiting for someone. You have the element of surprise, but you need to understand the situation before acting.",
      choices: [
        {
          id: 'story-7481296-c7',
          text: 'Hide and watch who Alan is waiting for',
          description: 'Discover if there is a mastermind behind this',
          targetNodeId: 'story-7481296-8',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-8',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Unexpected Visitor',
      imageUrl:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        "From your hiding spot behind rusted machinery, you watch as the warehouse door creaks open. A figure steps inside – **Victor Kross**, a known crime boss with ties to human trafficking rings. Your blood runs cold. This is bigger than a simple kidnapping. Victor approaches Alan, demanding to know why Emily is still alive. Alan stammers something about complications. Victor's voice is ice-cold as he orders Alan to 'finish the job' before sunrise. The situation just turned deadly serious.",
      choices: [
        {
          id: 'story-7481296-c8',
          text: 'Record evidence of their conversation',
          description: 'Gather proof before intervening',
          targetNodeId: 'story-7481296-9',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-9',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Critical Evidence',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "You carefully pull out your phone and begin recording the exchange between Victor and Alan. Their conversation reveals a sinister plot – Emily discovered Victor's money laundering operation at the company and was about to report it. Victor paid Alan to silence her permanently. The recording captures everything: the conspiracy, the payment, and Victor's direct order to eliminate Emily. This evidence could bring down an entire criminal network. But as Victor hands Alan a silenced pistol, you realize you have only seconds before Emily's fate is sealed.",
      choices: [
        {
          id: 'story-7481296-c9',
          text: 'Send the recording to backup immediately',
          description: 'Ensure the evidence survives no matter what',
          targetNodeId: 'story-7481296-10',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-10',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Race Against Time',
      imageUrl:
        'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        "Your thumb hits send just as Alan raises the weapon toward Emily. Victor turns to leave through the back door. You have a split-second decision: Alan is the immediate threat to Emily, but Victor is the mastermind who will escape and continue his crimes. Emily's eyes are wide with terror above her gag. The pistol gleams in Alan's trembling hand. Victor's footsteps echo as he walks toward freedom. You cannot save Emily and catch Victor alone.",
      choices: [
        {
          id: 'story-7481296-c10',
          text: 'Ambush Alan to save Emily',
          description: 'Neutralize the immediate threat first',
          targetNodeId: 'story-7481296-11',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-11',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Split-Second Heroics',
      imageUrl:
        'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        "You burst from cover, tackling Alan with all your weight before he can fire. The pistol clatters across the concrete floor as you both crash into a stack of crates. Alan thrashes wildly beneath you, desperation giving him unexpected strength. 'Victor!' he screams. 'Help me!' But Victor is already gone through the back exit. You manage to pin Alan's arms and cuff him with a zip-tie from your pocket. Emily sobs with relief behind her gag. But the warehouse door hangs open – Victor has escaped.",
      choices: [
        {
          id: 'story-7481296-c11',
          text: "Pursue Victor while Alan is restrained",
          description: 'Catch the mastermind before he vanishes',
          targetNodeId: 'story-7481296-12',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-12',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Dark Alley Chase',
      imageUrl:
        'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "You sprint through the back door into a maze of dark alleys between warehouses. Victor is fifty yards ahead, running toward a black sedan idling near the dock. Rain begins to fall again, slicking the cobblestones under your feet. Your legs burn with exhaustion, but you close the gap. Victor reaches the car and yanks the door open. If he gets inside, he disappears forever. You have one chance – tackle him now or he'll be untouchable behind tinted windows and corrupt lawyers.",
      choices: [
        {
          id: 'story-7481296-c12',
          text: 'Dive to tackle Victor before he enters the car',
          description: 'Risk everything for the arrest',
          targetNodeId: 'story-7481296-13',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-13',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Final Confrontation',
      imageUrl:
        'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        "You launch through the air, grabbing Victor's shoulder just as he tries to slide into the vehicle. Your momentum carries you both crashing onto the wet pavement. Victor snarls like a cornered animal, reaching for a concealed weapon. You block his arm and deliver a stunning blow that leaves him dazed. Sirens wail in the distance – backup has arrived at last. You cuff Victor as officers swarm the scene, securing both him and the getaway driver. Dawn breaks over the harbor as you stand victorious.",
      choices: [
        {
          id: 'story-7481296-c13',
          text: 'Return to the warehouse to check on Emily',
          description: 'Ensure the victim is safe and unharmed',
          targetNodeId: 'story-7481296-14',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-14',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Reunion at Dawn',
      imageUrl:
        'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        "You jog back to the warehouse as the sun crests the horizon, painting the sky in gold and rose. Paramedics are already tending to Emily, who sits wrapped in a thermal blanket, sipping hot coffee. When she sees you, tears stream down her face. 'You saved my life,' she whispers. 'I was so scared.' You assure her that both Victor and Alan are in custody, and the evidence you recorded will put them away for decades. Her family is already en route to take her home. The case is solved.",
      choices: [
        {
          id: 'story-7481296-c14',
          text: 'Review the case outcomes one final time',
          description: 'Reflect on how your decisions shaped the ending',
          targetNodeId: 'story-7481296-15',
          order: 1,
        },
      ],
    },
    {
      id: 'story-7481296-15',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Justice Served',
      imageUrl:
        'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        "Sitting in your car as the city wakes up, you review what you've accomplished. Victor Kross, the crime boss, faces life in prison for conspiracy, kidnapping, and attempted murder. Alan Ridge will testify against him in exchange for a reduced sentence. Emily Parker is safe with her family, her bravery in discovering the corruption noted in your report. The company will be investigated, potentially uncovering more of Victor's network. Your recording made headlines, exposing corruption that reached city hall. Dawn has never felt so bright.",
      choices: [
        {
          id: 'story-7481296-c15',
          text: 'Accept congratulations from the chief',
          description: 'Your successful resolution earns recognition',
          targetNodeId: 'story-7481296-16',
          order: 1,
        },
        {
          id: 'story-7481296-c16',
          text: 'Visit Emily in the hospital to ensure her recovery',
          description: 'Personal closure with the victim you saved',
          targetNodeId: 'story-7481296-17',
          order: 2,
        },
        {
          id: 'story-7481296-c17',
          text: 'Begin paperwork on the criminal network expansion',
          description: 'Your work continues beyond this case',
          targetNodeId: 'story-7481296-18',
          order: 3,
        },
        {
          id: 'story-7481296-c18',
          text: 'Take a well-deserved rest after the long night',
          description: 'Recovery after an exhausting investigation',
          targetNodeId: 'story-7481296-19',
          order: 4,
        },
        {
          id: 'story-7481296-c19',
          text: 'Reflect on the choices that led to this success',
          description: 'Consider how different decisions might have failed',
          targetNodeId: 'story-7481296-20',
          order: 5,
        },
      ],
    },
    {
      id: 'story-7481296-16',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Career Triumph',
      imageUrl:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        "The police chief shakes your hand firmly in front of the press. 'Outstanding work,' he announces. 'This detective's persistence and courage brought down a criminal empire and saved an innocent life.' Cameras flash as you're awarded a commendation for bravery. Your career reaches new heights, and young officers look to you as a role model. Emily sends you a thank-you card every year on this date. **You solved the case, saved Emily, dismantled a criminal network, and earned the respect of the entire department.** Justice prevails because of your relentless pursuit of truth.",
      choices: [],
    },
    {
      id: 'story-7481296-17',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Personal Closure',
      imageUrl:
        'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "At the hospital, Emily's eyes light up when you enter her room. 'I wanted to thank you personally,' she says, her voice still shaky. She tells you about the corruption she discovered, the threats she received, and how she never lost hope because she believed someone would come. You sit with her for an hour, ensuring she has resources for counseling and protection. When you leave, she grasps your hand. 'You're my hero.' **You solved the case and saved Emily, but more importantly, you helped her heal.** Some victories transcend medals and headlines.",
      choices: [],
    },
    {
      id: 'story-7481296-18',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Endless Pursuit',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        "Instead of resting, you dive into the paperwork connecting Victor to other crimes. Your discoveries lead to three more arrests within the week, uncovering a trafficking ring that spanned three states. The FBI requests your consultation on organized crime cases. You become known as the detective who never stops digging. Emily recovers fully and becomes an advocate for corporate whistleblowers, inspired by your dedication. **You solved the case, saved Emily, and used that success to dismantle even greater evil.** A detective's work is never truly done, but you wouldn't have it any other way.",
      choices: [],
    },
    {
      id: 'story-7481296-19',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Quiet Satisfaction',
      imageUrl:
        'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        "You return to your apartment as the morning sun streams through the windows. Exhausted but content, you pour a glass of whiskey and sit by the window, watching the city wake. Your phone buzzes with congratulations, but you silence it. Right now, you simply savor the quiet knowledge that Emily is safe, Victor is behind bars, and you did your job well. **You solved the case and saved Emily through methodical detective work and brave action.** Not every hero needs applause. Sometimes, the greatest reward is knowing you made a difference when it mattered most.",
      choices: [],
    },
    {
      id: 'story-7481296-20',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Lessons Learned',
      imageUrl:
        'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        "In the quiet of your office, you replay the night's events. Each decision mattered: searching the apartment led to Alan, chasing him revealed the warehouse, waiting to record exposed Victor's involvement. If you had rushed in blindly, Victor might have escaped. If you had called for backup too early, Emily might not have survived. **You solved the case through patience, courage, and strategic thinking.** Emily lives because you balanced emotion with intellect. You jot notes in your case journal – lessons for the next midnight mystery that will inevitably call upon your skills.",
      choices: [],
    },
  ],
};
