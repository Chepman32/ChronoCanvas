import { Story } from '../types';

export const chanceEncounterStory: Story = {
  id: 'story-10012003',
  title: 'Chance Encounter',
  description:
    `A fleeting connection in a cozy cafe could change your life forever. Will you seize the moment with Alex, or let the opportunity slip away into memory?`,
  coverImageUrl:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80',
  author: 'Sasha Nguyen',
  genre: ['romance'],
  difficulty: 'easy',
  estimatedDuration: 15,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-21',
  updatedAt: '2025-01-21',
  totalNodes: 7,
  totalEndings: 4,
  startNodeId: 'story-10012003-1',
  nodes: [
    {
      id: 'story-10012003-1',
      storyId: 'story-10012003',
      type: 'start',
      title: 'Cafe Spark',
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      narration:
        `The cozy buzz of the downtown cafe wraps around you as you cradle your coffee. Late-afternoon sun slants through the window. Across the room, a stranger named Alex laughs as they nearly spill their latte. Your eyes meet fleetingly and your heart skips. You feel an instant, warm curiosity. As Alex rises to leave, fiddling nervously with their jacket, you sense this could be a once-in-a-lifetime moment. Will you speak up or let them slip away?`,
      choices: [
        {
          id: 'story-10012003-c1',
          text: 'Gather your courage and introduce yourself to them',
          targetNodeId: 'story-10012003-2',
          order: 1,
        },
        {
          id: 'story-10012003-c2',
          text: 'Stay seated, too shy to make a move',
          targetNodeId: 'story-10012003-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012003-2',
      storyId: 'story-10012003',
      type: 'decision',
      title: 'Shared Conversation',
      imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
      narration:
        `You take a deep breath and walk over to Alex's table. They look up in surprise, but then smile. Before long, you are chatting easily about the book they are reading and the best coffee in town. The minutes fly by and Alex's eyes light up at each shared interest. Eventually, they glance at the time and mention an appointment. Standing together outside the cafe, you know you do not want this to be the last time you see them.`,
      choices: [
        {
          id: 'story-10012003-c3',
          text: 'Ask Alex out on a date for tomorrow',
          targetNodeId: 'story-10012003-4',
          order: 1,
        },
        {
          id: 'story-10012003-c4',
          text: `Keep it casual--say "See you around" and leave it to fate`,
          targetNodeId: 'story-10012003-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012003-3',
      storyId: 'story-10012003',
      type: 'decision',
      title: 'Hesitation',
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      narration:
        `Your throat tightens; you cannot bring yourself to approach. Alex picks up their bag and heads for the door. As they step outside, a pang of regret hits you. Through the window, you see them pause on the sidewalk as if hesitant, glancing back inside. This might be your last chance to act before they disappear into the city evening.`,
      choices: [
        {
          id: 'story-10012003-c5',
          text: 'Run after them and call out before they walk away',
          targetNodeId: 'story-10012003-6',
          order: 1,
        },
        {
          id: 'story-10012003-c6',
          text: 'Let them go--perhaps it just was not meant to be',
          targetNodeId: 'story-10012003-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012003-4',
      storyId: 'story-10012003',
      type: 'ending',
      title: 'Second Date',
      imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
      narration:
        `Mustering all your confidence, you ask Alex if they would like to meet up again--maybe dinner tomorrow? Alex's face breaks into a relieved grin. "I'd love that," they say, handing you their number. The next evening, you share a delightful meal, talking for hours. When you part, it is with a gentle kiss under the streetlights and plans to see each other again. What started as a chance encounter at a cafe becomes the first chapter of a beautiful new romance.`,
      choices: [],
    },
    {
      id: 'story-10012003-5',
      storyId: 'story-10012003',
      type: 'ending',
      title: 'Maybe Someday',
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      narration:
        `You give a warm smile and say, "It was great meeting you, Alex. See you around." They smile back, perhaps a bit uncertain, and wave as they depart. In the weeks that follow, you think of them often, hoping you will run into them again by chance. But life moves on, and although you shared a lovely chat, the spark never gets a chance to grow. Sometimes you catch yourself scanning crowds for that familiar face, wondering what if, before time and memory gently carry the moment away.`,
      choices: [],
    },
    {
      id: 'story-10012003-6',
      storyId: 'story-10012003',
      type: 'ending',
      title: 'Sidewalk Reunion',
      imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
      narration:
        `Heart pounding, you leap from your seat and jog outside. "Excuse me--Alex!" you call. They turn, surprised but pleased as you catch up. You admit you did not want to miss the chance to get to know them. Alex blushes and confesses they were hoping you would say something. The two of you exchange numbers right there on the sidewalk, grinning ear to ear. As Alex walks away (for now), you already receive a text: "Coffee again soon? :)" It seems fate is giving you both a second chance after all.`,
      choices: [],
    },
    {
      id: 'story-10012003-7',
      storyId: 'story-10012003',
      type: 'ending',
      title: 'Missed Connection',
      imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
      narration:
        `You remain frozen in your chair as Alex disappears into the dusk. The cafe suddenly feels emptier. Immediately, you regret not speaking up. Days turn into weeks, and you never see them again. Sometimes, you replay that moment in your mind--the golden light, their warm smile--and imagine what you might have said. It becomes a bittersweet memory, a lesson about chances not taken. You promise yourself that next time, you will not let fear hold you back.`,
      choices: [],
    },
  ],
};
