import { Story } from '../types';

export const midnightCallerStory: Story = {
  id: 'story-847362910',
  title: 'The Midnight Caller',
  description:
    'Someone knows what you did last summer. The phone rings at 3 AM with a voice from your past, and now you have 48 hours to find them before they find you. Every choice could be your last.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400',
  author: 'Elena Blackwood',
  genre: ['detective', 'mystery'],
  difficulty: 'medium',
  estimatedDuration: 18,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-12',
  updatedAt: '2025-01-12',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-847362910-1',
  nodes: [
    {
      id: 'story-847362910-1',
      storyId: 'story-847362910',
      type: 'start',
      title: 'The Call',
      imageUrl:
        'https://images.unsplash.com/photo-1532635270-c6c5e3e9a068?w=800',
      narration:
        'Your phone screams at 3:17 AM, shattering the silence of your apartment. The number is blocked, but you answer anyway—nobody calls this late with good news. A distorted voice whispers through static: "Detective Cross, I know what happened at Riverside Park. You have 48 hours." The line goes dead before you can respond, leaving only the pounding of your heart and the ghost of their words.',
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
          text: 'Trace the call immediately',
          description: 'Use your police contacts to find the source',
          targetNodeId: 'story-847362910-3',
          order: 2,
        },
        {
          id: 'story-847362910-c3',
          text: 'Go to Riverside Park right now',
          description: 'Face whatever is waiting in the dark',
          targetNodeId: 'story-847362910-4',
          order: 3,
        },
      ],
    },
    {
      id: 'story-847362910-2',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Buried Evidence',
      imageUrl:
        'https://images.unsplash.com/photo-1568667256549-094345857637?w=800',
      narration:
        'The file box sits in your closet where you left it three years ago, covered in dust and regret. Inside, crime scene photos show the park at dawn, yellow tape cordoning off the gazebo. The victim, Marcus Dalton, stares up from glossy paper with lifeless eyes. Your notes mention a witness who never came forward—someone saw everything but disappeared. Then you notice it: a photo is missing from the sequence. Someone has been in your apartment.',
      choices: [
        {
          id: 'story-847362910-c4',
          text: 'Check your apartment for signs of a break-in',
          description: 'They were here. They might still be close.',
          targetNodeId: 'story-847362910-5',
          order: 1,
        },
        {
          id: 'story-847362910-c5',
          text: 'Focus on finding the missing witness',
          description: 'The caller might be the witness from three years ago',
          targetNodeId: 'story-847362910-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-3',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Digital Footprints',
      imageUrl:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
      narration:
        "You call in a favor at the precinct. Officer Martinez sounds annoyed until you mention the threat, then his tone shifts. Twenty minutes later, he sends you coordinates—the call bounced through three towers, but originated from somewhere in the industrial district near the old cannery. That building has been abandoned for a decade, ever since the Dalton family shut it down. Marcus Dalton owned that cannery. This can't be a coincidence.",
      choices: [
        {
          id: 'story-847362910-c6',
          text: 'Head to the cannery alone',
          description: 'Going in quiet might give you the advantage',
          targetNodeId: 'story-847362910-7',
          order: 1,
        },
        {
          id: 'story-847362910-c7',
          text: 'Request backup and wait',
          description: 'Safety in numbers, but they might run',
          targetNodeId: 'story-847362910-8',
          order: 2,
        },
        {
          id: 'story-847362910-c8',
          text: 'Research the Dalton family first',
          description: 'Knowledge is power in this game',
          targetNodeId: 'story-847362910-9',
          order: 3,
        },
      ],
    },
    {
      id: 'story-847362910-4',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Shadows in the Park',
      imageUrl:
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800',
      narration:
        'Riverside Park looks different at 4 AM—the playground equipment casts twisted shadows across the grass, and fog rolls off the water like something alive. You make your way to the gazebo where Marcus Dalton took his last breath. Fresh flowers sit on the steps, still wet with dew. A note is pinned beneath them, written in shaky handwriting: "He didn\'t deserve to die, but someone had to pay. You let the wrong person walk free." Movement in the trees makes you spin around, hand on your weapon.',
      choices: [
        {
          id: 'story-847362910-c9',
          text: 'Pursue whoever is in the trees',
          description: 'Chase them down before they escape',
          targetNodeId: 'story-847362910-10',
          order: 1,
        },
        {
          id: 'story-847362910-c10',
          text: 'Examine the flowers and note carefully',
          description: 'Evidence first, suspects second',
          targetNodeId: 'story-847362910-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-5',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Uninvited Guest',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      narration:
        "Your door lock shows fresh scratches—someone picked it recently, and they knew what they were doing. Inside, everything looks normal at first glance, but your detective instincts scream otherwise. The coffee mug you left in the sink is in the drying rack. Your bedroom window is open just a crack, and you always keep it locked. Then you see it: a single photograph placed face-down on your kitchen table. When you flip it over, your blood runs cold—it's you, asleep in your bed, taken last night.",
      choices: [
        {
          id: 'story-847362910-c11',
          text: 'Call for police protection immediately',
          description: 'This stalker is too dangerous to face alone',
          targetNodeId: 'story-847362910-12',
          order: 1,
        },
        {
          id: 'story-847362910-c12',
          text: 'Set a trap and wait for them to return',
          description: 'Turn the tables on your hunter',
          targetNodeId: 'story-847362910-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-6',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'The Ghost Witness',
      imageUrl:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      narration:
        "Your notes mention a name that was never in the official report: Sarah Chen, a jogger who supposedly saw someone leaving the gazebo at 6:15 AM. You tracked her down once, but she refused to talk, claimed she saw nothing, and moved away two weeks later. A quick search shows she's back in town, working at a bookstore on Morrison Street. When you arrive, the owner says Sarah called in sick today—the first time in eight months. She gives you an address, but warns you: \"Sarah's been jumpy lately, looking over her shoulder like someone's following her.\"",
      choices: [
        {
          id: 'story-847362910-c13',
          text: "Go to Sarah's apartment",
          description: 'She might be the next target',
          targetNodeId: 'story-847362910-14',
          order: 1,
        },
        {
          id: 'story-847362910-c14',
          text: 'Stake out the bookstore',
          description: 'Wait to see if the caller shows up',
          targetNodeId: 'story-847362910-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-7',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'The Empty Cannery',
      imageUrl:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      narration:
        'The cannery looms against the pre-dawn sky like a rusted cathedral. You slip through a broken fence and enter through a side door hanging off its hinges. Inside, machinery sits frozen in time, covered in layers of dust and pigeon droppings. Your flashlight cuts through the darkness, revealing footprints in the dust—fresh ones, leading deeper into the building. Then you hear it: music playing somewhere above you, a scratchy recording of an old jazz standard. The same song that was playing when Marcus Dalton died.',
      choices: [
        {
          id: 'story-847362910-c15',
          text: 'Follow the music upstairs',
          description: 'Someone wants you to find them',
          targetNodeId: 'story-847362910-16',
          order: 1,
        },
        {
          id: 'story-847362910-c16',
          text: 'Search the ground floor first',
          description: 'Clear each room methodically and safely',
          targetNodeId: 'story-847362910-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-8',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Backup Delayed',
      imageUrl:
        'https://images.unsplash.com/photo-1583311713258-0b784e9f8e3c?w=800',
      narration:
        "Martinez says backup is at least forty minutes out—there was a multi-car accident on the highway and everyone's tied up. You watch the cannery from across the street, and that's when you see them: a figure moving past a third-floor window, backlit by flashlight. They're inside right now, and forty minutes is an eternity. Your phone buzzes with a text from an unknown number: \"Tick tock, Detective. The truth is waiting, but so is someone else. Come alone or Sarah Chen dies in twenty minutes.\"",
      choices: [
        {
          id: 'story-847362910-c17',
          text: 'Rush in to save Sarah',
          description: "You can't let another person die",
          targetNodeId: 'story-847362910-16',
          order: 1,
        },
        {
          id: 'story-847362910-c18',
          text: 'Wait for backup despite the threat',
          description: 'This could be a trap to isolate you',
          targetNodeId: 'story-847362910-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-9',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Family Secrets',
      imageUrl:
        'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800',
      narration:
        "You dig into the Dalton family history and find something the original investigation missed. Marcus had a younger sister, Rebecca, who was institutionalized after his death. The official story said she had a breakdown from grief, but her medical records tell a different story—she tried to confess to killing her brother, but doctors dismissed it as delusion. She was released six months ago. According to her file, Rebecca claimed Marcus was laundering money through the cannery and she confronted him. They fought. He fell. But here's the kicker: the medical director who declared her delusional retired early and moved to Costa Rica with a million dollars.",
      choices: [
        {
          id: 'story-847362910-c19',
          text: 'Find Rebecca Dalton',
          description: 'She might be your midnight caller',
          targetNodeId: 'story-847362910-19',
          order: 1,
        },
        {
          id: 'story-847362910-c20',
          text: 'Investigate the medical director',
          description: 'Someone paid him to cover up the truth',
          targetNodeId: 'story-847362910-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-10',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'The Chase',
      imageUrl:
        'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=800',
      narration:
        'You sprint into the trees, branches whipping past your face as you pursue the fleeing shadow. They\'re fast, but you\'re faster, and you tackle them behind a cluster of oak trees. When you flip them over, you freeze—it\'s a kid, maybe sixteen, terrified and sobbing. "Please don\'t hurt me," he gasps. "She paid me fifty bucks to leave the flowers and watch for you. I don\'t know her name, I swear! She was wearing a hoodie and sunglasses. She said to text her when you showed up." His phone buzzes in his hand with a new message: "Good work, Detective. Now look behind you."',
      choices: [
        {
          id: 'story-847362910-c21',
          text: 'Turn around and face whoever is there',
          description: 'Confront the person behind this',
          targetNodeId: 'story-847362910-21',
          order: 1,
        },
        {
          id: 'story-847362910-c22',
          text: 'Use the kid as a shield',
          description: 'Desperate times call for desperate measures',
          targetNodeId: 'story-847362910-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-11',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Hidden Message',
      imageUrl:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800',
      narration:
        "The flowers are white lilies—funeral flowers. The note is written on expensive paper, watermarked with the logo of the Morrison Hotel. You photograph everything with your phone, but when you lift the flowers, there's something underneath: a key card for room 412 at the Morrison Hotel and a time written in red ink—6:00 AM. That's in ninety minutes. The figure in the trees is gone now, but you hear footsteps on the path behind you, running away. You have to choose: chase them or follow the invitation.",
      choices: [
        {
          id: 'story-847362910-c23',
          text: 'Chase the person fleeing on the path',
          description: 'Catch them before they disappear',
          targetNodeId: 'story-847362910-10',
          order: 1,
        },
        {
          id: 'story-847362910-c24',
          text: 'Go to the Morrison Hotel',
          description: 'Find out who invited you and why',
          targetNodeId: 'story-847362910-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-12',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Protected Target',
      imageUrl:
        'https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=800',
      narration:
        'Two officers arrive within fifteen minutes and sweep your apartment. They find the entry point—your fire escape window—and set up surveillance. You try to sleep, but your mind races with questions. At 7 AM, one of the officers knocks on your bedroom door. "Detective Cross, you need to see this." They found something behind your bathroom mirror: a small camera, still recording. They traced its signal to an IP address registered to Marcus Dalton\'s estate. Someone in that family has been watching you, waiting for the right moment to strike.',
      choices: [
        {
          id: 'story-847362910-c25',
          text: 'Confront the Dalton family immediately',
          description: 'Take the fight to them',
          targetNodeId: 'story-847362910-19',
          order: 1,
        },
        {
          id: 'story-847362910-c26',
          text: 'Use the camera to feed false information',
          description: 'Turn their surveillance against them',
          targetNodeId: 'story-847362910-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-13',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'The Trap',
      imageUrl:
        'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800',
      narration:
        "You spend the day loudly telling your empty apartment that you're going to the police station at midnight to turn over new evidence in the Dalton case. Then you hide in your closet with your weapon drawn and wait. At 11:47 PM, you hear it—the subtle scrape of metal on metal as someone picks your lock again. Footsteps move through your apartment, searching. They enter your bedroom, and through the crack in the closet door, you see a woman in dark clothes rifling through your desk. When she turns, you recognize her from the case file photos: Rebecca Dalton, Marcus's sister. She's holding a gun.",
      choices: [
        {
          id: 'story-847362910-c27',
          text: 'Burst out and disarm her',
          description: 'Use the element of surprise',
          targetNodeId: 'story-847362910-21',
          order: 1,
        },
        {
          id: 'story-847362910-c28',
          text: 'Call out and try to talk her down',
          description: 'She might be the victim here, not the villain',
          targetNodeId: 'story-847362910-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-14',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Room 412',
      imageUrl:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      narration:
        'The Morrison Hotel smells like old carpet and regret. You take the stairs to the fourth floor, weapon ready, and approach room 412. The key card works. Inside, the room is dark except for a laptop glowing on the desk, playing security footage on a loop—footage of you investigating the Dalton crime scene three years ago. There\'s also a folder full of documents: bank transfers, emails, photos of police evidence logged and "lost." Someone high up in the department buried evidence that would have proven Rebecca Dalton\'s confession was real. Then you hear the shower turn off in the bathroom. Someone else is here.',
      choices: [
        {
          id: 'story-847362910-c29',
          text: 'Confront whoever is in the bathroom',
          description: 'Demand answers face to face',
          targetNodeId: 'story-847362910-21',
          order: 1,
        },
        {
          id: 'story-847362910-c30',
          text: 'Take the evidence and leave quickly',
          description: 'Get out before things turn violent',
          targetNodeId: 'story-847362910-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-15',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Watching and Waiting',
      imageUrl:
        'https://images.unsplash.com/photo-1541538097127-45f20aedb3c2?w=800',
      narration:
        'You park across from the bookstore with a clear view of the entrance. Hours pass. At 2 PM, a woman in a dark coat and sunglasses approaches the store, looks around nervously, and slips inside. She emerges ten minutes later with the store owner, who points in your direction. The woman in the coat freezes when she sees your car, then runs. You chase her three blocks before she ducks into an alley. When you corner her, she pulls off the sunglasses—it\'s Rebecca Dalton, and she\'s crying. "I didn\'t want to scare you," she says. "I just needed someone to finally listen. My brother was murdered, and the police covered it up. You\'re the only one who might believe me."',
      choices: [
        {
          id: 'story-847362910-c31',
          text: "Listen to Rebecca's story",
          description: "Maybe she's telling the truth",
          targetNodeId: 'story-847362910-19',
          order: 1,
        },
        {
          id: 'story-847362910-c32',
          text: 'Arrest her for harassment and stalking',
          description: 'She broke into your home and threatened you',
          targetNodeId: 'story-847362910-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-16',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Following the Music',
      imageUrl:
        'https://images.unsplash.com/photo-1614963326505-842a8f3c12ca?w=800',
      narration:
        'The metal stairs groan under your weight as you climb toward the music. Third floor, fourth floor—the building seems to stretch on forever. Finally, you reach a door hanging open, and the music is louder now. Inside, the room is set up like a shrine: photos of Marcus Dalton cover the walls, newspaper clippings about his death, and in the center, Sarah Chen tied to a chair, conscious but gagged. She\'s shaking her head frantically, trying to warn you. Too late—you feel the barrel of a gun press against the back of your skull. "Hello, Detective," a woman\'s voice says. "Thank you for coming. Now we can finally set the record straight."',
      choices: [
        {
          id: 'story-847362910-c33',
          text: 'Try to disarm the attacker',
          description: 'Risk everything to save Sarah',
          targetNodeId: 'story-847362910-21',
          order: 1,
        },
        {
          id: 'story-847362910-c34',
          text: 'Comply and hear her out',
          description: 'Buy time until you see an opening',
          targetNodeId: 'story-847362910-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-17',
      storyId: 'story-847362910',
      type: 'decision',
      title: 'Ground Floor Secrets',
      imageUrl:
        'https://images.unsplash.com/photo-1565410258280-600ce5efc868?w=800',
      narration:
        'You methodically search each room on the ground floor—old offices, a break room with moldy coffee cups, storage closets full of rusted equipment. In the last office, you find something that makes your heart race: recent activity. Someone has been living here. Sleeping bag, food wrappers, and a wall covered in newspaper clippings about police corruption. Photos of you are mixed in with images of your former partner, Captain Morrison, the one who closed the Dalton case. Then you see it: a whiteboard with a timeline connecting Morrison to the Dalton family business, with arrows pointing to offshore accounts. The music stops upstairs. Footsteps descend toward you.',
      choices: [
        {
          id: 'story-847362910-c35',
          text: 'Hide and ambush whoever is coming',
          description: 'Attack from the shadows',
          targetNodeId: 'story-847362910-21',
          order: 1,
        },
        {
          id: 'story-847362910-c36',
          text: 'Announce yourself and ask to talk',
          description: "Maybe violence isn't necessary",
          targetNodeId: 'story-847362910-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-847362910-18',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'Bureaucratic Justice',
      imageUrl:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      narration:
        'You wait for backup, and when they arrive, the cannery is empty. Sarah Chen is found safe at home—the text was a bluff. Rebecca Dalton is arrested trying to board a plane to Mexico. In custody, she confesses everything: Marcus was laundering drug money, Captain Morrison was on the payroll, and when Rebecca confronted her brother, Morrison killed him to silence them both. But without the evidence Rebecca gathered—now destroyed in her panic—nothing sticks. Morrison retires with full pension. Rebecca goes to prison for stalking and breaking and entering. The case officially closes, but you know the truth. Sometimes the system protects the guilty, and sometimes justice is nothing more than paperwork and compromises. You hand in your badge three months later.',
      choices: [],
    },
    {
      id: 'story-847362910-19',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'The Truth Revealed',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      narration:
        "Rebecca Dalton lowers her weapon and tells you everything. Her brother Marcus discovered that Captain Morrison was using the Dalton cannery to store and distribute drugs seized from evidence. When Marcus threatened to expose him, Morrison killed him and framed it as a random attack. Rebecca saw everything from her car that morning—she was bringing Marcus coffee, their weekly ritual. Morrison paid the medical director to declare her mentally unfit, ensuring no one would believe her confession. But Rebecca spent three years in an institution gathering evidence through smuggled letters and phone calls. She recorded everything. The midnight call was her final desperate attempt to find one honest cop. You listen to the recordings, look at the documents, and make your choice. Together, you bring Morrison down. He gets life without parole. Rebecca is cleared. You're promoted. Some nights, you still wonder if you did enough, but then Rebecca texts you photos of her opening a bakery with her settlement money, and you remember: this time, the good guys won.",
      choices: [],
    },
    {
      id: 'story-847362910-20',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'Lone Wolf',
      imageUrl:
        'https://images.unsplash.com/photo-1454023989775-79520f04322c?w=800',
      narration:
        "You grab the evidence folder and slip out of the hotel room before whoever is in the bathroom emerges. Back in your apartment, you spend the night going through the documents. The web of corruption goes deeper than you imagined—not just Morrison, but judges, prosecutors, even the mayor. Taking this public could bring down half the city's government. You make copies and send them to three different newspapers, then you pack a bag. By morning, your story breaks on every news channel. You're already in another state when the FBI arrives to take over the investigation. Morrison is arrested at the airport trying to flee. Rebecca is exonerated posthumously—she died two days ago, finally free of her burden. You never return to the city. You change your name, open a small detective agency in Montana, and help people with smaller mysteries. Sometimes you wonder if running away was cowardice or wisdom. Then you remember: you lived, and you stopped them. That has to be enough.",
      choices: [],
    },
    {
      id: 'story-847362910-21',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'Dead End',
      imageUrl:
        'https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=800',
      narration:
        'You make your move, fast and decisive, but she\'s faster. The gun goes off twice. Pain explodes in your chest and everything goes sideways. You hit the ground hard, your vision swimming with red and black spots. Rebecca stands over you, still holding the smoking weapon, tears streaming down her face. "I\'m sorry," she whispers. "I just wanted someone to care that he died. I just wanted the truth to matter." She drops the gun and runs. You try to reach for your radio, but your fingers won\'t work right. Your phone is buzzing in your pocket—probably Martinez, wondering where you are. The ceiling tiles blur together. You think about Marcus Dalton, dead in a gazebo at dawn. You think about how he probably felt this same cold creeping through his veins, this same fading light. At least you know the truth now. At least someone will find the evidence and finish what you started. The world goes dark, and your last thought is that maybe Rebecca was right about one thing: the truth does matter, even when it costs everything.',
      choices: [],
    },
    {
      id: 'story-847362910-22',
      storyId: 'story-847362910',
      type: 'ending',
      title: 'Moral Compromise',
      imageUrl:
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
      narration:
        "You grab the teenager and pull him in front of you like a shield, your weapon drawn. \"Show yourself!\" you shout into the darkness. Nothing. No one. You check the kid's phone—the message was automated, sent on a timer to mess with your head. There was never anyone behind you. But the damage is done. The kid is traumatized, crying about how you hurt him, how scared he was. Park security cameras caught everything. By morning, you're suspended pending investigation. The kid's parents hire a lawyer. The story goes viral: Detective Uses Child as Human Shield. Morrison quietly closes the Dalton case again while everyone is focused on your scandal. Rebecca Dalton disappears, probably dead or in hiding. You fight the suspension for six months before taking a settlement and resigning in disgrace. The truth about Morrison and Marcus Dalton stays buried. You spend your days wondering if you could have done things differently, if you could have been braver, smarter, better. The midnight caller never contacts you again. Maybe because she realized you weren't the hero she thought you were. Maybe because some battles are lost before they even begin.",
      choices: [],
    },
  ],
};
