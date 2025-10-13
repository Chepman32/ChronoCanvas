import { Story } from '../types';

export const timeLoopStory: Story = {
  id: 'story-3',
  title: 'The Time Loop Paradox',
  description:
    'Trapped in a repeating day, you must uncover the mystery and break free from the temporal prison.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400',
  author: 'Dr. Sarah Chen',
  genre: ['scifi', 'mystery'],
  difficulty: 'hard',
  estimatedDuration: 35,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-10',
  updatedAt: '2025-01-10',
  totalNodes: 22,
  totalEndings: 3,
  startNodeId: 'tl-1',
  nodes: [
    {
      id: 'tl-1',
      storyId: 'story-3',
      type: 'start',
      title: 'Morning Again',
      imageUrl:
        'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800',
      narration:
        "Your alarm rings at 7:00 AM. Again. This is the 47th time you've woken up to this exact moment. The same sunlight, the same bird chirping outside, the same coffee stain on your ceiling.",
      choices: [
        {
          id: 'tl-c1',
          text: 'Check your journal',
          targetNodeId: 'tl-2',
          order: 1,
        },
        {
          id: 'tl-c2',
          text: 'Rush to the lab immediately',
          targetNodeId: 'tl-3',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-2',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Journal',
      imageUrl:
        'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
      narration:
        'Your journal is filled with notes from previous loops. "Day 47: The quantum stabilizer malfunctions at 3:47 PM. Dr. Martinez always spills coffee at 10:23 AM. The security code changes daily but follows a pattern."',
      choices: [
        {
          id: 'tl-c3',
          text: 'Study the pattern',
          targetNodeId: 'tl-4',
          order: 1,
        },
        {
          id: 'tl-c4',
          text: 'Go find Dr. Martinez',
          targetNodeId: 'tl-5',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-3',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Laboratory',
      imageUrl:
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
      narration:
        'The quantum physics lab is empty this early. The particle accelerator hums ominously. You know from previous loops that something goes wrong here today.',
      choices: [
        {
          id: 'tl-c5',
          text: 'Examine the accelerator',
          targetNodeId: 'tl-6',
          order: 1,
        },
        {
          id: 'tl-c6',
          text: 'Check the security logs',
          targetNodeId: 'tl-7',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-4',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Pattern',
      imageUrl:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
      narration:
        "The security codes follow a Fibonacci sequence! Today's code should be 2584. But there's more - the pattern suggests someone is deliberately resetting time.",
      choices: [
        {
          id: 'tl-c7',
          text: 'Use the code to access restricted area',
          targetNodeId: 'tl-8',
          order: 1,
        },
        {
          id: 'tl-c8',
          text: 'Confront the director',
          targetNodeId: 'tl-9',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-5',
      storyId: 'story-3',
      type: 'decision',
      title: 'Dr. Martinez',
      imageUrl:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      narration:
        'You find Dr. Martinez in the cafeteria. Before she can spill her coffee, you catch it. Her eyes widen. "You remember too, don\'t you?" she whispers.',
      choices: [
        {
          id: 'tl-c9',
          text: 'Tell her everything',
          targetNodeId: 'tl-10',
          order: 1,
        },
        {
          id: 'tl-c10',
          text: 'Ask what she knows',
          targetNodeId: 'tl-11',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-6',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Accelerator',
      imageUrl:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
      narration:
        'The particle accelerator has an unauthorized modification. Someone installed a temporal feedback loop. The readings show it will activate at 3:47 PM.',
      choices: [
        {
          id: 'tl-c11',
          text: 'Try to disable it now',
          targetNodeId: 'tl-12',
          order: 1,
        },
        {
          id: 'tl-c12',
          text: 'Wait and observe',
          targetNodeId: 'tl-13',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-7',
      storyId: 'story-3',
      type: 'decision',
      title: 'Security Logs',
      imageUrl:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      narration:
        'The logs show someone accessed the lab at 3:45 PM yesterday - two minutes before the loop started. The ID badge belongs to... you.',
      choices: [
        {
          id: 'tl-c13',
          text: 'This must be a mistake',
          targetNodeId: 'tl-14',
          order: 1,
        },
        {
          id: 'tl-c14',
          text: 'Accept the truth',
          targetNodeId: 'tl-15',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-8',
      storyId: 'story-3',
      type: 'decision',
      title: 'Restricted Area',
      imageUrl:
        'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800',
      narration:
        'The restricted area contains a second accelerator - a prototype temporal stabilizer. Notes indicate it was designed to prevent paradoxes, but something went wrong.',
      choices: [
        {
          id: 'tl-c15',
          text: 'Activate the stabilizer',
          targetNodeId: 'tl-16',
          order: 1,
        },
        {
          id: 'tl-c16',
          text: 'Study the notes further',
          targetNodeId: 'tl-17',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-9',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Director',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      narration:
        "Director Chen looks unsurprised. \"I wondered when you'd figure it out. I've been stuck in this loop for 200 iterations. You're the first person to remember besides me.\"",
      choices: [
        {
          id: 'tl-c17',
          text: 'Work together to escape',
          targetNodeId: 'tl-18',
          order: 1,
        },
        {
          id: 'tl-c18',
          text: 'Demand answers first',
          targetNodeId: 'tl-19',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-10',
      storyId: 'story-3',
      type: 'decision',
      title: 'Alliance',
      imageUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      narration:
        'Dr. Martinez reveals she\'s been tracking the anomaly. "There are three of us who remember. We need to find the third person and work together."',
      choices: [
        {
          id: 'tl-c19',
          text: 'Search for the third person',
          targetNodeId: 'tl-20',
          order: 1,
        },
        {
          id: 'tl-c20',
          text: 'Focus on the accelerator',
          targetNodeId: 'tl-12',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-11',
      storyId: 'story-3',
      type: 'decision',
      title: 'Her Knowledge',
      imageUrl:
        'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800',
      narration:
        'She explains: "The loop isn\'t an accident. Someone is using it to steal research data. Every reset, they get another chance to crack our security."',
      choices: [
        { id: 'tl-c21', text: 'Set a trap', targetNodeId: 'tl-21', order: 1 },
        {
          id: 'tl-c22',
          text: 'Protect the data',
          targetNodeId: 'tl-22',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-12',
      storyId: 'story-3',
      type: 'decision',
      title: 'Disabling Attempt',
      imageUrl:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      narration:
        'As you reach for the controls, you realize this is exactly what caused the loop in the first place. Your past self tried to stop it and created the paradox.',
      choices: [
        {
          id: 'tl-c23',
          text: 'Stop yourself',
          targetNodeId: 'tl-end1',
          order: 1,
        },
        {
          id: 'tl-c24',
          text: 'Continue anyway',
          targetNodeId: 'tl-23',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-13',
      storyId: 'story-3',
      type: 'decision',
      title: 'Observation',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        "You hide and watch. At 3:47 PM, a figure in a hazmat suit enters. They're tampering with the accelerator. You recognize the walk - it's you from a future loop.",
      choices: [
        {
          id: 'tl-c25',
          text: 'Confront your future self',
          targetNodeId: 'tl-24',
          order: 1,
        },
        {
          id: 'tl-c26',
          text: 'Let it play out',
          targetNodeId: 'tl-25',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-14',
      storyId: 'story-3',
      type: 'decision',
      title: 'Denial',
      imageUrl:
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
      narration:
        "But deep down, you know it's true. You caused this. The question is: why would you trap yourself in a time loop?",
      choices: [
        {
          id: 'tl-c27',
          text: 'Search your memories',
          targetNodeId: 'tl-26',
          order: 1,
        },
        {
          id: 'tl-c28',
          text: 'Find evidence',
          targetNodeId: 'tl-17',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-15',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Truth',
      imageUrl:
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800',
      narration:
        'You created the loop deliberately. But why? There must be a reason you trapped yourself here. Something you needed to prevent or discover.',
      choices: [
        {
          id: 'tl-c29',
          text: 'Check your hidden notes',
          targetNodeId: 'tl-27',
          order: 1,
        },
        {
          id: 'tl-c30',
          text: 'Retrace your steps',
          targetNodeId: 'tl-28',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-16',
      storyId: 'story-3',
      type: 'decision',
      title: 'Stabilizer Active',
      imageUrl:
        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        'The stabilizer hums to life. Reality begins to shimmer. You see multiple timelines converging. In one, the lab explodes. In another, humanity achieves time travel. Your choice will determine which becomes real.',
      choices: [
        {
          id: 'tl-c31',
          text: 'Choose the safe timeline',
          targetNodeId: 'tl-end2',
          order: 1,
        },
        {
          id: 'tl-c32',
          text: 'Choose the advancement timeline',
          targetNodeId: 'tl-29',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-17',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Notes',
      imageUrl:
        'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800',
      narration:
        'The notes reveal a catastrophic event: "Original timeline: Lab explosion at 4:00 PM kills 47 people. Loop created to prevent disaster. Must find the saboteur."',
      choices: [
        {
          id: 'tl-c33',
          text: 'Find the saboteur',
          targetNodeId: 'tl-30',
          order: 1,
        },
        {
          id: 'tl-c34',
          text: 'Evacuate the building',
          targetNodeId: 'tl-31',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-18',
      storyId: 'story-3',
      type: 'decision',
      title: 'Cooperation',
      imageUrl:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
      narration:
        'Director Chen shares his research. "The loop can only be broken from the inside. We need to create a controlled paradox - something that exists in all iterations simultaneously."',
      choices: [
        {
          id: 'tl-c35',
          text: 'Create the paradox',
          targetNodeId: 'tl-end3',
          order: 1,
        },
        {
          id: 'tl-c36',
          text: 'Find another way',
          targetNodeId: 'tl-32',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-19',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Explanation',
      imageUrl:
        'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800',
      narration:
        '"I created the loop," Chen admits. "Not intentionally. I was trying to prevent a disaster, but I made it worse. Now we\'re all trapped in my mistake."',
      choices: [
        {
          id: 'tl-c37',
          text: 'Forgive and work together',
          targetNodeId: 'tl-18',
          order: 1,
        },
        {
          id: 'tl-c38',
          text: 'Take control yourself',
          targetNodeId: 'tl-16',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-20',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Third',
      imageUrl:
        'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800',
      narration:
        'You find the third person - the janitor, Mr. Kim. "I\'ve been here for 500 loops," he says calmly. "I know how to break it. But you won\'t like the cost."',
      choices: [
        {
          id: 'tl-c39',
          text: 'Ask about the cost',
          targetNodeId: 'tl-33',
          order: 1,
        },
        {
          id: 'tl-c40',
          text: 'Refuse and find another way',
          targetNodeId: 'tl-32',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-21',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Trap',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      narration:
        "You set up surveillance and wait. At 2:30 PM, you catch them - a corporate spy from a rival company. But stopping them doesn't break the loop.",
      choices: [
        {
          id: 'tl-c41',
          text: 'There must be more to this',
          targetNodeId: 'tl-17',
          order: 1,
        },
        {
          id: 'tl-c42',
          text: 'Interrogate the spy',
          targetNodeId: 'tl-34',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-22',
      storyId: 'story-3',
      type: 'decision',
      title: 'Data Protection',
      imageUrl:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      narration:
        "You encrypt the research data with a quantum key. But as you finish, you realize - the data isn't what they're after. They want the time loop technology itself.",
      choices: [
        {
          id: 'tl-c43',
          text: 'Destroy the technology',
          targetNodeId: 'tl-end2',
          order: 1,
        },
        {
          id: 'tl-c44',
          text: 'Use it against them',
          targetNodeId: 'tl-29',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-23',
      storyId: 'story-3',
      type: 'ending',
      title: 'Paradox Cascade',
      imageUrl:
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800',
      narration:
        'You disable the device, but it creates a cascade paradox. Reality fractures. You exist in all timelines simultaneously - free from the loop but scattered across infinite possibilities. You are everywhere and nowhere, forever.',
      choices: [],
    },
    {
      id: 'tl-24',
      storyId: 'story-3',
      type: 'ending',
      title: 'Meeting Yourself',
      imageUrl:
        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        "Your future self removes the helmet. \"Don't stop me. I've lived through 1,000 loops. This is the only way to save everyone.\" You step aside. The loop continues, but now you understand - you're not trapped. You're the guardian, choosing to repeat this day to prevent catastrophe.",
      choices: [],
    },
    {
      id: 'tl-25',
      storyId: 'story-3',
      type: 'ending',
      title: 'Observer',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        "You watch as your future self completes the work and vanishes. The loop resets. But this time, you remember everything. You've become an observer outside time, witnessing the same day forever, unable to change it but fully aware. An eternal consciousness in a frozen moment.",
      choices: [],
    },
    {
      id: 'tl-26',
      storyId: 'story-3',
      type: 'decision',
      title: 'Memory Fragment',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      narration:
        "A memory surfaces: You discovered someone was going to weaponize your research. You created the loop to buy time to find a solution. But you've been searching for 47 days.",
      choices: [
        {
          id: 'tl-c45',
          text: 'Continue the search',
          targetNodeId: 'tl-30',
          order: 1,
        },
        {
          id: 'tl-c46',
          text: 'End the loop now',
          targetNodeId: 'tl-end1',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-27',
      storyId: 'story-3',
      type: 'decision',
      title: 'Hidden Message',
      imageUrl:
        'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800',
      narration:
        'You find a note in your own handwriting: "The answer is in the quantum foam. Look between the moments. The loop is a message, not a prison."',
      choices: [
        {
          id: 'tl-c47',
          text: 'Examine quantum data',
          targetNodeId: 'tl-35',
          order: 1,
        },
        {
          id: 'tl-c48',
          text: 'Meditate on the message',
          targetNodeId: 'tl-36',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-28',
      storyId: 'story-3',
      type: 'decision',
      title: 'Retracing Steps',
      imageUrl:
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
      narration:
        'You follow your own path from the original day. At 3:45 PM, you entered the lab. At 3:47 PM, you activated the accelerator. At 3:48 PM... nothing. The loop started at 3:47 PM exactly.',
      choices: [
        {
          id: 'tl-c49',
          text: 'Prevent the activation',
          targetNodeId: 'tl-end2',
          order: 1,
        },
        {
          id: 'tl-c50',
          text: 'Understand why you did it',
          targetNodeId: 'tl-35',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-29',
      storyId: 'story-3',
      type: 'ending',
      title: 'Temporal Mastery',
      imageUrl:
        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        "You choose advancement. The timeline shifts. Humanity gains time travel, but at a cost - reality becomes fluid. Past, present, and future merge. You become the first Temporal Navigator, guiding humanity through the chaos you've unleashed. History is now yours to write.",
      choices: [],
    },
    {
      id: 'tl-30',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Saboteur',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      narration:
        "You identify the saboteur - Dr. Reeves from the engineering department. He's planting a device that will overload the reactor. You have minutes to stop him.",
      choices: [
        {
          id: 'tl-c51',
          text: 'Confront him directly',
          targetNodeId: 'tl-37',
          order: 1,
        },
        {
          id: 'tl-c52',
          text: 'Disable the device',
          targetNodeId: 'tl-38',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-31',
      storyId: 'story-3',
      type: 'ending',
      title: 'Evacuation',
      imageUrl:
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
      narration:
        "You pull the fire alarm. Everyone evacuates. At 4:00 PM, the lab explodes, but no one dies. The loop breaks. You're free, but the research is destroyed. You saved lives but lost the breakthrough that could have changed everything. Sometimes, that's enough.",
      choices: [],
    },
    {
      id: 'tl-32',
      storyId: 'story-3',
      type: 'decision',
      title: 'Alternative Solution',
      imageUrl:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
      narration:
        'You theorize that if you can create a stable closed timelike curve, you can exit the loop without breaking causality. It requires perfect timing and quantum precision.',
      choices: [
        {
          id: 'tl-c53',
          text: 'Attempt the procedure',
          targetNodeId: 'tl-39',
          order: 1,
        },
        {
          id: 'tl-c54',
          text: 'Seek more help',
          targetNodeId: 'tl-20',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-33',
      storyId: 'story-3',
      type: 'decision',
      title: 'The Cost',
      imageUrl:
        'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800',
      narration:
        '"Someone must stay behind," Mr. Kim explains. "The loop needs an anchor. One consciousness must remain to hold the timeline stable while others escape. I\'ve been that anchor. But I\'m tired."',
      choices: [
        {
          id: 'tl-c55',
          text: 'Volunteer to stay',
          targetNodeId: 'tl-40',
          order: 1,
        },
        {
          id: 'tl-c56',
          text: 'Find another way',
          targetNodeId: 'tl-32',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-34',
      storyId: 'story-3',
      type: 'decision',
      title: 'Interrogation',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      narration:
        "The spy breaks: \"I'm not after your research. I'm from the future. I came back to stop you from creating the loop. But I arrived too late. Now I'm trapped too.\"",
      choices: [
        { id: 'tl-c57', text: 'Believe them', targetNodeId: 'tl-41', order: 1 },
        { id: 'tl-c58', text: "It's a trick", targetNodeId: 'tl-21', order: 2 },
      ],
    },
    {
      id: 'tl-35',
      storyId: 'story-3',
      type: 'decision',
      title: 'Quantum Revelation',
      imageUrl:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
      narration:
        "The quantum data reveals something impossible: the loop exists in superposition. It's both happening and not happening. You're experiencing one probability while infinite others play out simultaneously.",
      choices: [
        {
          id: 'tl-c59',
          text: 'Collapse the waveform',
          targetNodeId: 'tl-end3',
          order: 1,
        },
        {
          id: 'tl-c60',
          text: 'Embrace the superposition',
          targetNodeId: 'tl-42',
          order: 2,
        },
      ],
    },
    {
      id: 'tl-36',
      storyId: 'story-3',
      type: 'ending',
      title: 'Enlightenment',
      imageUrl:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      narration:
        "As you meditate, understanding floods through you. The loop isn't a prison - it's a gift. Each iteration is a chance to perfect this day, to make it the best possible version. You stop trying to escape and start trying to perfect. The loop continues, but you're at peace.",
      choices: [],
    },
    {
      id: 'tl-37',
      storyId: 'story-3',
      type: 'ending',
      title: 'Confrontation',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      narration:
        'You confront Dr. Reeves. He breaks down: "They have my family. I had no choice." You help him. Together, you expose the conspiracy and save everyone. The loop breaks. You\'re free, and justice is served. Sometimes, compassion is the answer.',
      choices: [],
    },
    {
      id: 'tl-38',
      storyId: 'story-3',
      type: 'ending',
      title: 'Technical Solution',
      imageUrl:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      narration:
        "You disable the device with seconds to spare. The explosion is prevented. The loop breaks. But Dr. Reeves escapes, and the conspiracy remains. You're free, but the threat lingers. Victory, but incomplete.",
      choices: [],
    },
    {
      id: 'tl-39',
      storyId: 'story-3',
      type: 'ending',
      title: 'Quantum Escape',
      imageUrl:
        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        "You execute the procedure perfectly. Reality bends. You slip through a crack in causality and emerge in the original timeline, moments before the loop began. You prevent it from ever starting. But now you carry memories of events that never happened. You are a ghost of a timeline that doesn't exist.",
      choices: [],
    },
    {
      id: 'tl-40',
      storyId: 'story-3',
      type: 'ending',
      title: 'The Anchor',
      imageUrl:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      narration:
        "You take Mr. Kim's place. Everyone else escapes the loop. You remain, experiencing this day forever, holding the timeline stable. It's lonely, but you saved them all. You are the eternal guardian, the anchor in time, the hero no one will remember.",
      choices: [],
    },
    {
      id: 'tl-41',
      storyId: 'story-3',
      type: 'ending',
      title: "Time Traveler's Truth",
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        'You work with the time traveler. Together, you create a temporal beacon that prevents the loop from ever forming. Reality shifts. You wake up in a world where none of this happened. But you remember. You and the traveler are the only ones who know what you prevented. Partners across time.',
      choices: [],
    },
    {
      id: 'tl-42',
      storyId: 'story-3',
      type: 'ending',
      title: 'Quantum Consciousness',
      imageUrl:
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800',
      narration:
        'You embrace the superposition. Your consciousness expands across all possible timelines. You exist in every version of this day simultaneously. You are no longer trapped in time - you ARE time. Infinite awareness, infinite existence, infinite you.',
      choices: [],
    },
    {
      id: 'tl-end1',
      storyId: 'story-3',
      type: 'ending',
      title: 'Breaking Point',
      imageUrl:
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
      narration:
        "You stop yourself from interfering. The paradox resolves. The loop breaks. You wake up the next day - day 48, but it's actually tomorrow. You're free. The cost? You'll never know what you were trying to prevent. Sometimes, freedom means accepting uncertainty.",
      choices: [],
    },
    {
      id: 'tl-end2',
      storyId: 'story-3',
      type: 'ending',
      title: 'Safe Timeline',
      imageUrl:
        'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800',
      narration:
        'You choose safety. The timeline stabilizes. The loop breaks. You wake up in a world where the research never succeeded, but everyone is safe. No time travel, no paradoxes, no danger. Just normal life. Sometimes, the best choice is the simple one.',
      choices: [],
    },
    {
      id: 'tl-end3',
      storyId: 'story-3',
      type: 'ending',
      title: 'Controlled Paradox',
      imageUrl:
        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        "You create the controlled paradox - an object that exists in all iterations simultaneously. It acts as a bridge. Everyone who remembers the loop can now move freely through time. You've transformed a prison into a gateway. The loop becomes a tool, not a trap.",
      choices: [],
    },
  ],
};
