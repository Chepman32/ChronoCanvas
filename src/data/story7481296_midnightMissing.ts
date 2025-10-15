import { Story } from '../types';

export const midnightMissingStory: Story = {
  id: 'story-7481296',
  title: 'Midnight Missing',
  description:
    'When a young woman vanishes without a trace, a determined detective must navigate city shadows and unravel a web of clues before time runs out. Every decision could mean a life saved or a trail gone cold.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1653942794731-03de74506a5b?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1653942794731-03de74506a5b?w=400',
  author: 'Morgan Steele',
  genre: ['detective', 'mystery'],
  difficulty: 'medium',
  estimatedDuration: 20,
  isPremium: false,
  productId: '',
  version: '1.0',
  createdAt: '2025-01-14',
  updatedAt: '2025-01-14',
  totalNodes: 21,
  totalEndings: 5,
  startNodeId: 'story-7481296-1',
  nodes: [
    {
      id: 'story-7481296-1',
      storyId: 'story-7481296',
      type: 'start',
      title: 'Missing at Midnight',
      imageUrl:
        'https://images.unsplash.com/photo-1565018968331-61145555526b?w=800',
      narration:
        "A neon-lit clock strikes midnight as you sit in your cramped office, rain drumming on the window. The phone's ring shatters the silence – a panicked voice reports that **Emily Parker** is missing. Emily vanished from her apartment just hours ago. You grab your coat, heart pounding, knowing every minute counts. With the city asleep and clues already fading, you vow to uncover the truth before dawn.",
      choices: [
        {
          id: 'story-7481296-c1',
          text: "Search Emily's apartment for clues",
          description: 'Her home may hide evidence of her disappearance',
          targetNodeId: 'story-7481296-2',
          order: 1,
        },
        {
          id: 'story-7481296-c2',
          text: "Interview Emily's best friend, Ava",
          description: 'Maybe her friend knows something crucial',
          targetNodeId: 'story-7481296-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-2',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Ransacked Home',
      imageUrl:
        'https://images.unsplash.com/photo-1643634919788-93aa4efb870f?w=800',
      narration:
        "Emily's apartment is eerily quiet. The door is unlocked and slightly ajar, a single lamp spilling light on a chaotic scene. Drawers hang open and belongings are strewn across the floor, as if someone left in a hurry. You step carefully over a toppled chair and notice two things: a crumpled business card from her **office coworker** on the coffee table, and a matchbook from **Serpent's Den Bar**, Emily's favorite late-night spot, lying near the door. The air is tense with the smell of spilled coffee and fear.",
      choices: [
        {
          id: 'story-7481296-c3',
          text: "Examine the coworker's business card",
          description: 'Could a colleague have a motive?',
          targetNodeId: 'story-7481296-4',
          order: 1,
        },
        {
          id: 'story-7481296-c4',
          text: "Head to the Serpent's Den Bar next",
          description: 'Follow the clue to the bar',
          targetNodeId: 'story-7481296-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-3',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Desperate Confidant',
      imageUrl:
        'https://images.unsplash.com/photo-1626335283650-e0c392e7fb42?w=800',
      narration:
        "At a quiet all-night diner, **Ava Mitchell** wrings her hands around a mug of cold coffee. Her eyes are red from crying and exhaustion. She explains that Emily had been anxious lately – she'd confided about a conflict with a **coworker** who had been acting strangely towards her. Ava also recalls Emily mentioning a **bar** she'd been visiting to meet someone, and hints at Emily's **ex-boyfriend** who had a bitter breakup with her last month. The possibilities swirl, and Ava pleads, \"Please, find her.\"",
      choices: [
        {
          id: 'story-7481296-c5',
          text: 'Investigate the hostile coworker',
          description: 'Confront the colleague Emily feared',
          targetNodeId: 'story-7481296-4',
          order: 1,
        },
        {
          id: 'story-7481296-c6',
          text: 'Check out the bar Emily frequented',
          description: 'She might have met someone dangerous there',
          targetNodeId: 'story-7481296-5',
          order: 2,
        },
        {
          id: 'story-7481296-c7',
          text: "Speak with Emily's ex-boyfriend",
          description: 'A bad breakup could hide dark motives',
          targetNodeId: 'story-7481296-6',
          order: 3,
        },
      ],
    },
    {
      id: 'story-7481296-4',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Office Suspicions',
      imageUrl:
        'https://images.unsplash.com/photo-1588854337117-7e07fa40080c?w=800',
      narration:
        "The city's financial tower looms overhead as you arrive at Emily's workplace. Inside, you confront **Alan Ridge**, her coworker. Alan's smile is thin and nervous under the fluorescent office lights. He insists he barely knew Emily outside work, but sweat beads on his brow. On his desk, you glimpse a document with Emily's name partly visible – quickly, Alan shuffles it away. A gut feeling tells you he's hiding something. As you probe about his after-hours activities, Alan's leg bounces anxiously under the table. You must decide how to handle this tense encounter.",
      choices: [
        {
          id: 'story-7481296-c8',
          text: 'Press Alan aggressively for answers',
          description: 'Confront him head-on about Emily',
          targetNodeId: 'story-7481296-7',
          order: 1,
        },
        {
          id: 'story-7481296-c9',
          text: 'Back off and snoop around discreetly',
          description: "Look for clues in his office when he's distracted",
          targetNodeId: 'story-7481296-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-5',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Neon Trail',
      imageUrl:
        'https://images.unsplash.com/photo-1636897798980-b44eb98cac9e?w=800',
      narration:
        "The **Serpent's Den Bar** throbs with low music and neon haze. As you push through the dimly lit crowd, you scan for any sign of Emily. The bartender eyes you warily while polishing a glass. In the corner, a hooded man watches the room intently, his posture stiffening when he notices your badge. The air smells of spilled beer and something acrid – fear, perhaps. You suspect either the bartender or that patron might know something. Every second here matters; Emily could have met her fate within these walls.",
      choices: [
        {
          id: 'story-7481296-c10',
          text: 'Follow the hooded man quietly',
          description: 'He might lead you to a clue or suspect',
          targetNodeId: 'story-7481296-9',
          order: 1,
        },
        {
          id: 'story-7481296-c11',
          text: 'Question the bartender for info',
          description: 'Maybe Emily mentioned something or was seen here',
          targetNodeId: 'story-7481296-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-6',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Old Grudges',
      imageUrl:
        'https://images.unsplash.com/photo-1606582171084-1e05c1f8e5d2?w=800',
      narration:
        "You find **Mark Wheeler**, Emily's ex, at his apartment, which is cluttered with moving boxes. Mark's jaw tightens at the mention of Emily. He claims he hasn't seen her in weeks, bitterness lingering in his voice. He points out that he was out of town tonight – an alibi you'll need to verify. As you look around, you notice a picture of them smiling together, now cracked and lying face-down on a shelf. Mark insists he'd never harm Emily, but there's anger in his eyes. It's unclear whether he's truly in the dark or hiding pain behind denial.",
      choices: [
        {
          id: 'story-7481296-c12',
          text: 'Believe Mark and shift focus elsewhere',
          description: 'His emotions seem genuine; pursue other leads',
          targetNodeId: 'story-7481296-4',
          order: 1,
        },
        {
          id: 'story-7481296-c13',
          text: "Press Mark, convinced he's lying",
          description: "Push harder, suspecting he's involved",
          targetNodeId: 'story-7481296-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-7',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Flight and Fury',
      imageUrl:
        'https://images.unsplash.com/photo-1531293891878-c6844adec0e1?w=800',
      narration:
        'Alan\'s composure shatters under your barrage of questions. Suddenly, he bolts from his chair and dashes for the exit, panic in his eyes. "Stop!" you shout, racing after him through the empty office corridors. He shoves open the stairwell door, footsteps echoing as he descends frantically. Your heart pounds – he could be running straight to Emily, or trying to destroy evidence. The night air hits as he bursts out a side door into the parking garage. You skid to a halt, torn between tackling this now or taking a different approach as his car engine roars to life.',
      choices: [
        {
          id: 'story-7481296-c14',
          text: 'Chase Alan down immediately',
          description: "Don't let him get away – pursue at all costs",
          targetNodeId: 'story-7481296-12',
          order: 1,
        },
        {
          id: 'story-7481296-c15',
          text: 'Let him go and search his office',
          description: 'He left in a hurry – maybe he left clues behind',
          targetNodeId: 'story-7481296-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-8',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Paper Trail',
      imageUrl:
        'https://images.unsplash.com/photo-1581091215367-92fa5c1594c8?w=800',
      narration:
        "With Alan gone, his office is yours to scour. You slip on gloves and rifle through the scattered paperwork in the dim light. On his desk, you uncover Emily's personnel file and notes about a **\"Project Catalyst\"** – something Emily and Alan worked on together. There's also an address scrawled on a sticky note: an old **warehouse on the outskirts of town**. Your pulse quickens; this could be where he's headed with Emily. Outside, the city is dark and silent. You know you have a location – the only question is how you'll approach it.",
      choices: [
        {
          id: 'story-7481296-c16',
          text: 'Rush to the warehouse alone',
          description: 'No time for backup; every second counts',
          targetNodeId: 'story-7481296-13',
          order: 1,
        },
        {
          id: 'story-7481296-c17',
          text: 'Call the police for backup',
          description: 'Secure support before confronting a kidnapper',
          targetNodeId: 'story-7481296-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-9',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Shadowing a Stranger',
      imageUrl:
        'https://images.unsplash.com/photo-1553512403-29a1c599d3c2?w=800',
      narration:
        "You decide to tail the hooded man. He slips out of the bar into a back alley and you follow at a cautious distance, heart thudding in your chest. He glances over his shoulder, then picks up pace when a distant siren wail pierces the night. You trail him through winding streets and derelict blocks until he reaches an old **warehouse** with broken windows on the city's edge. He disappears inside, leaving the metal door slightly ajar. The building stands silent, a hulking silhouette under the streetlights. You steel yourself — Emily could be in there.",
      choices: [
        {
          id: 'story-7481296-c18',
          text: 'Remain hidden and observe',
          description: 'Gather intel quietly before acting',
          targetNodeId: 'story-7481296-15',
          order: 1,
        },
        {
          id: 'story-7481296-c19',
          text: 'Confront him immediately',
          description: 'Burst in and catch him off guard',
          targetNodeId: 'story-7481296-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-10',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Barroom Intel',
      imageUrl:
        'https://images.unsplash.com/photo-1514516871783-6fbf2a7ae913?w=800',
      narration:
        'You flash your badge at the bartender. He sighs, setting down a glass. "Emily? Yeah, I\'ve seen her around," he mutters, glancing nervously toward the door. He reveals that Emily was here earlier in the evening meeting a man in a dark hoodie. They left together and the man mentioned heading to "the **old warehouse by the docks**" while settling his tab. Your stomach drops – a location at last. As you turn to leave, the bartender grips your arm, voice low: "Be careful. Those people... they\'re dangerous." You step out into the night, rain on your face, armed with a crucial lead.',
      choices: [
        {
          id: 'story-7481296-c20',
          text: 'Drive straight to the docks warehouse',
          description: 'Speed to the location alone',
          targetNodeId: 'story-7481296-13',
          order: 1,
        },
        {
          id: 'story-7481296-c21',
          text: 'Alert the police and wait for backup',
          description: 'Go with reinforcement to the warehouse',
          targetNodeId: 'story-7481296-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-11',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Dead-End Dedication',
      imageUrl:
        'https://images.unsplash.com/photo-1507924538820-ede58ee00526?w=800',
      narration:
        "Convinced that Mark is hiding the truth, you spend precious hours digging into his alibi and past. You shadow him, search his social media, even call in a favor to pull his phone records. But as dawn approaches, it becomes painfully clear that Mark truly had nothing to do with Emily's disappearance – the time wasted is a heavy weight on your shoulders. An early morning call from headquarters informs you that the coworker, Alan, is now missing as well, and new evidence points back to that warehouse lead. You realize your focus on Mark might have cost you dearly in this race against time.",
      choices: [
        {
          id: 'story-7481296-c22',
          text: 'Refocus and race to the warehouse now',
          description: "It's almost too late but you head there immediately",
          targetNodeId: 'story-7481296-13',
          order: 1,
        },
        {
          id: 'story-7481296-c23',
          text: "It's over – you've lost too much time",
          description: 'Admit defeat as the trail goes cold',
          targetNodeId: 'story-7481296-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-12',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'High-Speed Pursuit',
      imageUrl:
        'https://images.unsplash.com/photo-1522684462852-ddcd0d101c9f?w=800',
      narration:
        "Tires screech as you chase Alan's car through the deserted city streets. Neon signs and traffic lights blur past. Alan drives like a madman, desperate to shake you. Ahead, you see him veering towards an industrial area – likely the warehouse district by the docks. Your car's engine howls as you close the distance. In the beam of your headlights, Alan's face is a mask of terror glancing from his rearview mirror. Adrenaline surges; this is your chance to end this chase, but one wrong move could be fatal for Emily if she's with him.",
      choices: [
        {
          id: 'story-7481296-c24',
          text: 'Force him off the road',
          description: 'Stop the car at any cost, even if it crashes',
          targetNodeId: 'story-7481296-13',
          order: 1,
        },
        {
          id: 'story-7481296-c25',
          text: 'Follow him from a distance',
          description: 'Stay on his tail to see where he goes',
          targetNodeId: 'story-7481296-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-13',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'At the Hideout',
      imageUrl:
        'https://images.unsplash.com/photo-1603031164071-51c3e7ae1f4b?w=800',
      narration:
        "You arrive at the old warehouse just as purple-gray dawn light touches the horizon. The building stands silent and decrepit, its corrugated metal walls streaked with rust. Through a high window, you catch a glimpse of movement inside – a shadow pacing. Your heart leaps, thinking it could be Emily or her captor. The front entrance is a heavy sliding door, slightly ajar. You stand alone in the chill morning air; your backup is still minutes away or nonexistent. Steeling yourself, you draw your weapon, knowing Emily's fate lies just beyond that door.",
      choices: [
        {
          id: 'story-7481296-c26',
          text: 'Enter silently through the side door',
          description: 'Use stealth to catch them off guard',
          targetNodeId: 'story-7481296-15',
          order: 1,
        },
        {
          id: 'story-7481296-c27',
          text: 'Rush in through the main entrance',
          description: 'Surprise them with a direct approach',
          targetNodeId: 'story-7481296-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-14',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'SWAT at Dawn',
      imageUrl:
        'https://images.unsplash.com/photo-1609876902015-5a2da8c07cf1?w=800',
      narration:
        "Red and blue lights flash across the deserted docks as two patrol cars and a SWAT van roll in to back you up. Armed officers silently surround the warehouse, their boots crunching on gravel. The commanding officer whispers the plan: a coordinated breach on your signal. Inside, a muffled cry – it must be Emily. You stand at the warehouse's side entrance, adrenaline coursing, with a team at the front. The sun edges over the horizon, illuminating the tense faces around you. This is it – one decisive move will end this nightmare, one way or another.",
      choices: [
        {
          id: 'story-7481296-c28',
          text: 'Breach quietly and take them by surprise',
          description: 'Coordinate a silent entry with the team',
          targetNodeId: 'story-7481296-15',
          order: 1,
        },
        {
          id: 'story-7481296-c29',
          text: 'Go loud with a full-force raid',
          description: 'Storm in guns drawn, overwhelming any resistance',
          targetNodeId: 'story-7481296-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-15',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Silent Entry',
      imageUrl:
        'https://images.unsplash.com/photo-1612810801847-fd6a0ab3edce?w=800',
      narration:
        "You slip into the warehouse's shadowy interior as quietly as a ghost. Whether alone or with a couple of officers at your back, you move between stacks of dusty crates. In the dim light, you finally spot **Emily**: tied to a chair at the center of the floor, eyes wide above a gag. **Alan Ridge** stands nearby, nervously checking his phone – likely awaiting orders or a ransom response. He hasn't noticed you yet. Emily locks eyes with you for a split second, hope and fear mingled. You have the element of surprise, but a single misstep could put Emily in jeopardy.",
      choices: [
        {
          id: 'story-7481296-c30',
          text: 'Overpower Alan first',
          description: 'Neutralize the threat before tending to Emily',
          targetNodeId: 'story-7481296-17',
          order: 1,
        },
        {
          id: 'story-7481296-c31',
          text: 'Free Emily immediately',
          description: 'Prioritize getting Emily out of danger',
          targetNodeId: 'story-7481296-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-16',
      storyId: 'story-7481296',
      type: 'decision',
      title: 'Guns Blazing',
      imageUrl:
        'https://images.unsplash.com/photo-1612033448551-92a45e2541ec?w=800',
      narration:
        'With a shout of "Police!" you and the team charge through the warehouse entrance. The rusted door clangs as it slams against the wall. Alan whips around in alarm. He grabs Emily, yanking her up as a human shield, his hand trembling as it presses a knife to her throat. "Stay back!" he shrieks, panic in his voice. Your heart pounds. Guns are trained on Alan, your finger on your trigger. Emily\'s eyes glisten with tears as the standoff freezes in a deadly tableau. One wrong move now could spell disaster for everyone.',
      choices: [
        {
          id: 'story-7481296-c32',
          text: 'Take the shot at Alan',
          description: 'Use force to end this quickly',
          targetNodeId: 'story-7481296-19',
          order: 1,
        },
        {
          id: 'story-7481296-c33',
          text: 'Try to talk him down',
          description: 'Negotiate and stall, seeking a safer resolution',
          targetNodeId: 'story-7481296-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-7481296-17',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Rescue and Justice',
      imageUrl:
        'https://images.unsplash.com/photo-1554123167-2d0a90c2015c?w=800',
      narration:
        "Seizing the moment of distraction, you lunge from the shadows and tackle **Alan** to the ground. He yelps in surprise – the knife skitters away across the concrete. Within seconds you have him restrained, adrenaline fueling your strength. Backup officers rush in (or your sheer determination suffices) to secure him in handcuffs. **Emily** sobs with relief as you free her from the ropes. She's shaken but alive, clinging to you as the morning light spills in. Alan, the orchestrator of the kidnapping, is led away in cuffs, and Emily is safe at last. **You solved the case and saved Emily, delivering justice as dawn breaks.**",
      choices: [],
    },
    {
      id: 'story-7481296-18',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Narrow Escape',
      imageUrl:
        'https://images.unsplash.com/photo-1522202224971-99c76593f95b?w=800',
      narration:
        "You rush directly to **Emily**, sawing through the ropes with anything you can grab. \"It's okay, I'm here,\" you whisper as her bonds loosen. But in that split second of focus on Emily, **Alan** seizes the opportunity – he bolts for a back exit, disappearing into the maze of crates. By the time you ensure Emily is safe and pursue, he's gone. Outside, only the pale morning greets you. Emily is saved, trembling in your arms, but her kidnapper vanished into the city's shadows. Paramedics arrive to tend to Emily's minor injuries. She will recover, thanks to you, but **Alan remains at large, leaving an unfinished chapter in the case.**",
      choices: [],
    },
    {
      id: 'story-7481296-19',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Pyrrhic Victory',
      imageUrl:
        'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?w=800',
      narration:
        'Time slows as you squeeze the trigger. The gunshot echoes through the cavernous warehouse. **Alan** staggers backward, the knife dropping from his hand. Your shot strikes true, incapacitating him before he could harm **Emily**. Officers swarm in and Emily runs toward you, but not before a stray piece of shrapnel from the concrete grazes her side. She winces in pain, bleeding lightly – hurt but alive. Alan lies on the floor, wounded and moaning. As medics are called, you wrap Emily in a blanket. **The kidnapper is stopped permanently, and Emily is saved, but the violent end leaves you with a hollow feeling as dawn breaks.**',
      choices: [],
    },
    {
      id: 'story-7481296-20',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Tragic Standoff',
      imageUrl:
        'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800',
      narration:
        "\"Alan, it doesn't have to end like this,\" you plead, lowering your weapon slightly. Your words hang in the air as dawn's first rays slip through the cracks of the warehouse walls. But Alan's desperation has reached its peak. In a blur, he drags **Emily** toward a side door. Your team moves in too late – Alan shoves Emily into a waiting van and it screeches away before you can fire a shot. You give chase, but the vehicle vanishes down labyrinthine streets. By the time an alert is issued, they're gone without a trace. The warehouse stands empty, and you're left alone in the feeble morning light with only guilt as company. **Emily remains missing, the trail gone cold due to one hesitant moment.**",
      choices: [],
    },
    {
      id: 'story-7481296-21',
      storyId: 'story-7481296',
      type: 'ending',
      title: 'Case Cold',
      imageUrl:
        'https://images.unsplash.com/photo-1523642595781-2f9a21287b0e?w=800',
      narration:
        "Exhausted and defeated, you sit in your car as the first light of day creeps over the skyline. Leads have dried up and precious hours were lost chasing the wrong trail. **Emily Parker's** face stares at you from a missing person flyer on the seat beside you. In the days that follow, the case grows colder; Alan vanishes from his apartment, and no new evidence emerges. Every night, you replay your choices, wondering what vital clue you overlooked while pursuing Mark. The police continue the search, but hope dwindles. **You'll carry the weight of this unfinished investigation, a harsh reminder that in the world of detective work, not every mystery finds its answer.**",
      choices: [],
    },
  ],
};
