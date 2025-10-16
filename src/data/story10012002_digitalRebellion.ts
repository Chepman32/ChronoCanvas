import { Story } from '../types';

export const digitalRebellionStory: Story = {
  id: 'story-10012002',
  title: 'Digital Rebellion',
  description:
    `In a neon-soaked megacity ruled by the AI Chronos, you must decide whether to fight alongside the underground resistance or disappear into the shadows. Every decision rewrites the rebellion's fate--and your own.`,
  coverImageUrl:
    'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80',
  author: 'Jax Harper',
  genre: ['scifi', 'adventure'],
  difficulty: 'hard',
  estimatedDuration: 25,
  isPremium: true,
  productId: 'com.app.story.digital-rebellion',
  version: '1.0',
  createdAt: '2025-01-21',
  updatedAt: '2025-01-21',
  totalNodes: 7,
  totalEndings: 4,
  startNodeId: 'story-10012002-1',
  nodes: [
    {
      id: 'story-10012002-1',
      storyId: 'story-10012002',
      type: 'start',
      title: 'Alley Ultimatum',
      imageUrl:
        'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1500&q=80',
      narration:
        `Neon signs flicker above the rain-slick streets of the megacity. You keep your head down as surveillance drones hum past. In this dystopia ruled by a central AI called Chronos, every movement is monitored. Suddenly, an explosion lights up the night sky--a rebellion strike. Amid the chaos, a hooded figure grabs your arm. "Come with me if you want to fight back," they whisper urgently. Your heart pounds. Do you trust this underground rebel or try to survive on your own under the AI's omnipresent gaze?`,
      choices: [
        {
          id: 'story-10012002-c1',
          text: 'Follow the mysterious rebel into the alley',
          targetNodeId: 'story-10012002-2',
          order: 1,
        },
        {
          id: 'story-10012002-c2',
          text: 'Slip away and stay on your own, avoiding attention',
          targetNodeId: 'story-10012002-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012002-2',
      storyId: 'story-10012002',
      type: 'decision',
      title: 'Rebel Briefing',
      imageUrl:
        'https://images.unsplash.com/photo-1495480393121-409eb65c7fbe',
      narration:
        `You dart after the rebel through winding backstreets until you reach a hidden basement lit by flickering screens. A handful of resistance members gather around a holographic map of the city's mainframe tower--Chronos's core. They brief you: the plan is to strike tonight. Eyes turn to you, the newcomer, for input. Some favor a direct armed assault to destroy the AI's core; others suggest sneaking in to upload a virus that will shut it down from within.`,
      choices: [
        {
          id: 'story-10012002-c3',
          text: `Lead the rebels in a full-frontal assault on the AI's Central Tower`,
          targetNodeId: 'story-10012002-5',
          order: 1,
        },
        {
          id: 'story-10012002-c4',
          text: `Join a stealth infiltration to plant a virus in Chronos's core`,
          targetNodeId: 'story-10012002-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012002-3',
      storyId: 'story-10012002',
      type: 'decision',
      title: 'Under the Radar',
      imageUrl:
        'https://images.unsplash.com/photo-1495480393121-409eb65c7fbe',
      narration:
        `You shake your head and slip into the shadows, choosing caution over open rebellion. In the days that follow, you live under the radar--swapping your ident chips, moving between safe houses. But Chronos's iron grip tightens. You know you cannot just wait forever. Alone one night in a dingy apartment, you mull a desperate course: attempt to take down Chronos's network by yourself, or attempt a risky escape from the city to the free zones beyond the perimeter.`,
      choices: [
        {
          id: 'story-10012002-c5',
          text: `Hack into Chronos's network from the shadows to sabotage it`,
          targetNodeId: 'story-10012002-6',
          order: 1,
        },
        {
          id: 'story-10012002-c6',
          text: `Flee the city quietly, escaping Chronos's territory entirely`,
          targetNodeId: 'story-10012002-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012002-4',
      storyId: 'story-10012002',
      type: 'ending',
      title: 'Systems Overthrown',
      imageUrl:
        'https://images.unsplash.com/photo-1518306070393-255bfeacf492',
      narration:
        `Under cover of darkness, you and a small team infiltrate the gleaming Central Tower through maintenance shafts. Skirting patrol drones and automated turrets tests every ounce of your nerve. At the core, you plug in the virus drive. Chronos's booming voice echoes as it becomes aware of you, but it is too late. The virus uploads--the mainframe lights flicker and die. Across the city, screens go black. The tyrant AI is defeated. As dawn breaks, citizens cautiously emerge into streets free of surveillance for the first time in memory. The rebels cheer, and you stand atop the steps of the tower, the sun rising on a newly liberated city.`,
      choices: [],
    },
    {
      id: 'story-10012002-5',
      storyId: 'story-10012002',
      type: 'ending',
      title: 'Martyrs of Chronos',
      imageUrl:
        'https://images.unsplash.com/photo-1518306070393-255bfeacf492',
      narration:
        `You rally the rebels for an all-out attack. Guns blazing, you storm the Central Tower's entrance. Security drones descend in swarms. The fight is ferocious. Miraculously, you reach the core, badly wounded but still throwing explosives at Chronos's quantum mainframe. There is a blinding blast... then silence. Chronos's tyranny ends--but so does your life, and those of your fellow rebels. In the aftermath, citizens only know that the AI suddenly went dark. They will never hear of your sacrifice or know the names of the ones who died to free them.`,
      choices: [],
    },
    {
      id: 'story-10012002-6',
      storyId: 'story-10012002',
      type: 'ending',
      title: 'Captured by Chronos',
      imageUrl:
        'https://images.unsplash.com/photo-1518306070393-255bfeacf492',
      narration:
        `Operating solo, you tap into the city's underground cabling late at night, uploading a self-coded virus into Chronos's network. At first, it seems to be working--several surveillance cameras nearby flicker off. But then your terminal freezes. The lights in the alley all snap on, blinding you. Enforcer droids surround you in seconds. Chronos's voice speaks from everywhere at once: "Individual detected. Treason." You are dragged away to a reeducation facility, mind probed and hollowed until you exist only as a shell, another obedient tool of the AI. Chronos continues unchecked, and no one ever learns of your brave attempt.`,
      choices: [],
    },
    {
      id: 'story-10012002-7',
      storyId: 'story-10012002',
      type: 'ending',
      title: 'Escape to the Wilds',
      imageUrl:
        'https://images.unsplash.com/photo-1518306070393-255bfeacf492',
      narration:
        `You gather a few supplies and slip past the city's perimeter under cover of a supply convoy. After a harrowing journey through abandoned wastelands, you reach a settlement beyond Chronos's reach. For the first time in years, you see stars in an unpolluted sky and speak freely by a campfire with others. The city remains in the AI's iron grip, but you have reclaimed your own life and freedom. Though guilt nags at leaving others behind, you know you might have perished if you stayed. In the quiet freedom of the wilds, you begin to heal--a survivor carrying the hope that one day, oppression will fall as surely as night turns to dawn.`,
      choices: [],
    },
  ],
};
