import { Story } from '../types';

export const theLastLetterStory: Story = {
  id: 'story-892746531',
  title: 'The Last Letter',
  description:
    "When you discover a mysterious love letter in your late grandmother's attic, it leads you to Paris and a decades-old romance that was never resolved. Can you find the author and finish what your grandmother started, while navigating your own unexpected connection with her grandson?",
  coverImageUrl:
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400',
  author: 'Elena Rousseau',
  genre: ['romance', 'mystery'],
  difficulty: 'medium',
  estimatedDuration: 35,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-15',
  updatedAt: '2025-01-15',
  totalNodes: 24,
  totalEndings: 4,
  startNodeId: 'story-892746531-1',
  nodes: [
    {
      id: 'story-892746531-1',
      storyId: 'story-892746531',
      type: 'start',
      title: 'The Attic Discovery',
      imageUrl:
        'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800',
      narration:
        "Dust particles dance in the afternoon light streaming through the attic window. You're sorting through your grandmother's belongings when a faded envelope slips from an old book. The letter inside is written in French, dated 1962, and signed only with \"J.\" Your grandmother never mentioned a romance in Paris, never spoke of anyone named J. But the words are unmistakably passionate, promising to wait forever at Café de Flore.",
      choices: [
        {
          id: 'story-892746531-c1',
          text: 'Research the café and plan a trip to Paris',
          description: 'Follow the mystery to its source',
          targetNodeId: 'story-892746531-2',
          order: 1,
        },
        {
          id: 'story-892746531-c2',
          text: "Ask your family about grandmother's past first",
          description: 'Gather information before acting',
          targetNodeId: 'story-892746531-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-2',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Café de Flore',
      imageUrl:
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
      narration:
        "Three weeks later, you're standing outside the iconic café in Saint-Germain-des-Prés. The same red awning from old photographs still hangs above the entrance. Your heart pounds as you enter, clutching the letter. An elderly waiter notices your hesitation and approaches with a knowing smile, as if he's seen this scene play out before.",
      choices: [
        {
          id: 'story-892746531-c3',
          text: 'Show him the letter and ask about J.',
          description: 'Direct approach',
          targetNodeId: 'story-892746531-5',
          order: 1,
        },
        {
          id: 'story-892746531-c4',
          text: 'Order coffee and observe the café first',
          description: 'Take your time',
          targetNodeId: 'story-892746531-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-3',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Family Secrets',
      imageUrl:
        'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=800',
      narration:
        "Your aunt goes pale when you mention the letter. She pours tea with shaking hands and admits that your grandmother spent a year in Paris before meeting your grandfather. She came home suddenly, never explained why, and forbade anyone from mentioning it. Your aunt produces a small photograph: your grandmother at 23, radiant in a sundress, standing next to a young man whose face is turned away.",
      choices: [
        {
          id: 'story-892746531-c5',
          text: 'Take the photo and go to Paris immediately',
          description: 'The mystery deepens',
          targetNodeId: 'story-892746531-2',
          order: 1,
        },
        {
          id: 'story-892746531-c6',
          text: 'Press your aunt for more details about the man',
          description: 'Learn everything first',
          targetNodeId: 'story-892746531-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-4',
      storyId: 'story-892746531',
      type: 'decision',
      title: "A Stranger's Gaze",
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
      narration:
        "You settle into a corner table, letting the café's atmosphere wash over you. That's when you notice him—a man about your age sketching in a notebook, stealing glances at you. He has striking green eyes and an artist's hands. When your eyes meet, he doesn't look away. Instead, he closes his sketchbook and walks over, speaking in accented English: \"Forgive me, but you look exactly like someone from an old photograph my grandfather kept.\"",
      choices: [
        {
          id: 'story-892746531-c7',
          text: 'Show him the letter immediately',
          description: 'This could be connected',
          targetNodeId: 'story-892746531-7',
          order: 1,
        },
        {
          id: 'story-892746531-c8',
          text: 'Ask about his grandfather first',
          description: 'Proceed cautiously',
          targetNodeId: 'story-892746531-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-5',
      storyId: 'story-892746531',
      type: 'decision',
      title: "The Waiter's Tale",
      imageUrl:
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800',
      narration:
        "The waiter's eyes mist over as he reads the letter. \"Julien,\" he whispers. \"Monsieur Moreau. He came here every day for five years after she left, waiting. Always the same table by the window.\" He points to a corner table where a young man now sits, sketching. \"That's his grandson, Luc. He inherited the café after Julien passed last year. You should speak with him.\"",
      choices: [
        {
          id: 'story-892746531-c9',
          text: 'Approach Luc directly with the letter',
          description: 'Be honest about your mission',
          targetNodeId: 'story-892746531-7',
          order: 1,
        },
        {
          id: 'story-892746531-c10',
          text: 'Introduce yourself casually without mentioning the letter yet',
          description: 'Build rapport first',
          targetNodeId: 'story-892746531-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-6',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Heartbreak',
      imageUrl:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
      narration:
        "Your aunt reveals the truth: your grandmother was pregnant when she left Paris. Her family forced her to return, and she was forbidden from contacting Julien. She married your grandfather in a quiet ceremony, and he raised your mother as his own, loving her fiercely. \"She kept that letter hidden her entire life,\" your aunt says. \"Maybe she wanted someone to finish her story.\"",
      choices: [
        {
          id: 'story-892746531-c11',
          text: 'Go to Paris to find Julien or his family',
          description: 'Complete her unfinished story',
          targetNodeId: 'story-892746531-2',
          order: 1,
        },
        {
          id: 'story-892746531-c12',
          text: 'Research what happened to Julien online first',
          description: 'Prepare yourself for what you might find',
          targetNodeId: 'story-892746531-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-7',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Recognition',
      imageUrl:
        'https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?w=800',
      narration:
        "Luc reads the letter, and tears stream down his face. \"My grandfather,\" he chokes out, \"he spoke of her until his last breath. Éloise. He never married, never loved anyone else. He left me letters of his own—sixty years of letters he wrote to her but never sent.\" He looks at you with wonder. \"You have her eyes. Her smile. Are you...?\"",
      choices: [
        {
          id: 'story-892746531-c13',
          text: 'Reveal the family connection',
          description: 'Share the truth',
          targetNodeId: 'story-892746531-11',
          order: 1,
        },
        {
          id: 'story-892746531-c14',
          text: "Ask to read Julien's unsent letters first",
          description: 'Understand their story',
          targetNodeId: 'story-892746531-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-8',
      storyId: 'story-892746531',
      type: 'decision',
      title: "Julien's Legacy",
      imageUrl:
        'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=800',
      narration:
        "Luc tells you about Julien Moreau—an artist who spent his life painting the same woman from memory. \"He owned this café but rarely left it, as if waiting for someone. He died believing she'd simply forgotten him. But I found boxes of paintings in his studio, all of her. And letters. Hundreds of unsent letters.\" Luc pauses. \"Why are you asking about my grandfather?\"",
      choices: [
        {
          id: 'story-892746531-c15',
          text: "Show him your grandmother's letter",
          description: 'Reveal everything',
          targetNodeId: 'story-892746531-7',
          order: 1,
        },
        {
          id: 'story-892746531-c16',
          text: "Explain you're researching a family mystery",
          description: 'Stay somewhat vague',
          targetNodeId: 'story-892746531-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-9',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Artistic Connection',
      imageUrl:
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
      narration:
        "You spend the afternoon talking with Luc. He's an architect who returned to Paris to manage his grandfather's café after his death. He shows you his sketches—beautiful architectural designs infused with romantic details. \"My grandfather always said the café held a great love story,\" Luc admits. \"I never believed in such things until...\" He trails off, looking at you with an intensity that makes your heart race.",
      choices: [
        {
          id: 'story-892746531-c17',
          text: "Tell him why you're really here",
          description: 'Be vulnerable',
          targetNodeId: 'story-892746531-7',
          order: 1,
        },
        {
          id: 'story-892746531-c18',
          text: 'Suggest meeting again tomorrow',
          description: 'Take things slowly',
          targetNodeId: 'story-892746531-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-10',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Digital Footprints',
      imageUrl:
        'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
      narration:
        "Your research reveals that Julien Moreau was a renowned painter whose works now sell for millions. His signature series, \"The Woman in Summer,\" depicts the same mysterious woman across sixty years—aging only in his imagination. Art critics called it an obsession. An obituary from last year mentions he never married and left his estate, including Café de Flore, to his grandson Luc.",
      choices: [
        {
          id: 'story-892746531-c19',
          text: 'Book a flight to Paris tonight',
          description: 'Time is precious',
          targetNodeId: 'story-892746531-2',
          order: 1,
        },
        {
          id: 'story-892746531-c20',
          text: 'Try to contact Luc Moreau online first',
          description: 'Reach out digitally',
          targetNodeId: 'story-892746531-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-11',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Shared History',
      imageUrl:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      narration:
        "You tell Luc everything—about your grandmother, the hidden pregnancy, the forced separation. His face transforms from shock to understanding to something deeper. \"Then we're connected,\" he says softly. \"Your grandmother was the love of my grandfather's life, and somewhere in your family tree...\" He takes your hand. \"This feels like fate. Like they're giving us a second chance at their story.\"",
      choices: [
        {
          id: 'story-892746531-c21',
          text: 'Kiss him, embracing the connection',
          description: 'Follow your heart',
          targetNodeId: 'story-892746531-16',
          order: 1,
        },
        {
          id: 'story-892746531-c22',
          text: "Suggest reading Julien's letters together",
          description: 'Honor the past first',
          targetNodeId: 'story-892746531-12',
          order: 2,
        },
        {
          id: 'story-892746531-c23',
          text: 'Say this is too complicated',
          description: 'Maintain distance',
          targetNodeId: 'story-892746531-17',
          order: 3,
        },
      ],
    },
    {
      id: 'story-892746531-12',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Letters Across Time',
      imageUrl:
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
      narration:
        "In Julien's studio above the café, Luc shows you boxes of letters spanning decades. Each one begins \"My dearest Éloise\" and ends with \"Waiting always.\" They chronicle a life lived in the shadow of one perfect summer. The last letter, written days before he died, says: \"I understand now that you couldn't come back. I only hope you were happy. I only hope you were loved as you deserved.\"",
      choices: [
        {
          id: 'story-892746531-c24',
          text: 'Share what really happened to your grandmother',
          description: "Give Julien's memory closure",
          targetNodeId: 'story-892746531-18',
          order: 1,
        },
        {
          id: 'story-892746531-c25',
          text: "Break down crying in Luc's arms",
          description: 'Release the emotion',
          targetNodeId: 'story-892746531-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-13',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Trust Building',
      imageUrl:
        'https://images.unsplash.com/photo-1511407397258-7d26c94af667?w=800',
      narration:
        "Luc accepts your vague explanation, but there's curiosity in his eyes. He offers to help, showing you Julien's paintings in the café's back room. When you see them, you gasp—every face is your grandmother's. Young, frozen in time, captured with heartbreaking devotion. \"He painted her from memory,\" Luc explains. \"For sixty years. Tell me—what's your family mystery?\"",
      choices: [
        {
          id: 'story-892746531-c26',
          text: 'Finally reveal the truth',
          description: 'He deserves to know',
          targetNodeId: 'story-892746531-7',
          order: 1,
        },
        {
          id: 'story-892746531-c27',
          text: 'Ask to buy one of the paintings',
          description: 'Keep some distance',
          targetNodeId: 'story-892746531-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-14',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Seine at Sunset',
      imageUrl:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      narration:
        "The next evening, Luc takes you for a walk along the Seine. The Eiffel Tower sparkles in the distance as he tells you about his dreams for the café—preserving his grandfather's legacy while making it relevant for new generations. \"I keep thinking about you,\" he admits. \"About how you appeared in my life like something out of one of Grand-père's romantic stories. There's something you're not telling me, isn't there?\"",
      choices: [
        {
          id: 'story-892746531-c28',
          text: 'Reveal everything under the stars',
          description: 'Perfect moment for truth',
          targetNodeId: 'story-892746531-11',
          order: 1,
        },
        {
          id: 'story-892746531-c29',
          text: "Kiss him instead of answering",
          description: "Some things don't need words",
          targetNodeId: 'story-892746531-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-15',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Virtual Connection',
      imageUrl:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
      narration:
        "You find Luc on social media and send a carefully worded message explaining you're researching your grandmother's time in Paris and believe his grandfather knew her. His response comes within minutes: \"This is extraordinary. Can we video call? There are things you need to see.\" When the call connects, you're struck by his green eyes and the emotion on his face. \"My grandfather never stopped talking about Éloise,\" he says.",
      choices: [
        {
          id: 'story-892746531-c30',
          text: 'Video call him and share the letter',
          description: 'Build connection remotely',
          targetNodeId: 'story-892746531-21',
          order: 1,
        },
        {
          id: 'story-892746531-c31',
          text: "Tell him you're coming to Paris",
          description: 'Some things need to be in person',
          targetNodeId: 'story-892746531-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-16',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'A New Beginning',
      imageUrl:
        'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
      narration:
        "The kiss tastes of coffee and possibility. When you finally pull apart, Luc is smiling through tears. \"I've been waiting for you,\" he whispers, \"without even knowing it.\" Over the following weeks, you divide your time between exploring Paris and unraveling your grandparents' story. You discover Julien painted your grandmother pregnant in several pieces—he knew about the baby. He was waiting for them both.",
      choices: [
        {
          id: 'story-892746531-c32',
          text: 'Stay in Paris permanently',
          description: 'Build a new life here',
          targetNodeId: 'story-892746531-22',
          order: 1,
        },
        {
          id: 'story-892746531-c33',
          text: 'Propose a long-distance relationship',
          description: 'Navigate between two worlds',
          targetNodeId: 'story-892746531-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-17',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Boundaries',
      imageUrl:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      narration:
        "Luc's face falls, but he nods with understanding. \"You're right. This is heavy—our grandparents' story, the weight of their loss. Maybe we're trying to fix something that wasn't ours to fix.\" He steps back, professional once more. \"But I'm glad you came. Glad my grandfather's story has some closure, even if...\" He doesn't finish. The air between you feels thick with missed possibilities.",
      choices: [
        {
          id: 'story-892746531-c34',
          text: 'Change your mind and reach for him',
          description: "Don't let this moment pass",
          targetNodeId: 'story-892746531-16',
          order: 1,
        },
        {
          id: 'story-892746531-c35',
          text: 'Thank him and leave Paris',
          description: 'Some stories end',
          targetNodeId: 'story-892746531-24',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-18',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Full Truth',
      imageUrl:
        'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800',
      narration:
        "You tell Luc everything—about the pregnancy, the forced return, your grandmother's marriage to another man. About how she kept Julien's letter hidden for sixty years, how she probably thought of him every day. \"He would have wanted to know,\" Luc says quietly. \"Not for himself, but to know she didn't just forget him. That their love mattered.\" He looks at you with new intensity. \"Our grandparents' story ended. But ours...\"",
      choices: [
        {
          id: 'story-892746531-c36',
          text: 'Finish his sentence with a kiss',
          description: 'Write a better ending',
          targetNodeId: 'story-892746531-22',
          order: 1,
        },
        {
          id: 'story-892746531-c37',
          text: 'Say you need time to process everything',
          description: "Don't rush",
          targetNodeId: 'story-892746531-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-19',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Painting',
      imageUrl:
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
      narration:
        "Luc shakes his head firmly. \"These aren't for sale. They're Grand-père's heart, his soul.\" But seeing your disappointment, he softens. \"However, if Éloise was your grandmother... perhaps one painting should return to her family. Choose whichever speaks to you.\" You select a small canvas: your grandmother laughing in summer sunshine, so alive, so loved. As Luc wraps it, his fingers brush yours.",
      choices: [
        {
          id: 'story-892746531-c38',
          text: 'Finally tell him the whole truth',
          description: "He's earned it",
          targetNodeId: 'story-892746531-18',
          order: 1,
        },
        {
          id: 'story-892746531-c39',
          text: 'Take the painting and leave',
          description: 'Let mystery remain',
          targetNodeId: 'story-892746531-24',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-20',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Unspoken Truth',
      imageUrl:
        'https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?w=800',
      narration:
        "The kiss answers all his questions and raises new ones. When you finally break apart, both breathless, Luc cups your face. \"I don't even know your full name,\" he laughs. \"But I feel like I've known you forever. Is that crazy?\" The night unfolds in a blur of confessions and discoveries. By dawn, walking back to his apartment, you still haven't told him about the letter.",
      choices: [
        {
          id: 'story-892746531-c40',
          text: 'Reveal everything now',
          description: 'No more secrets',
          targetNodeId: 'story-892746531-11',
          order: 1,
        },
        {
          id: 'story-892746531-c41',
          text: 'Keep the secret a while longer',
          description: 'Protect this new feeling',
          targetNodeId: 'story-892746531-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-21',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Screen to Screen',
      imageUrl:
        'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800',
      narration:
        "Through the screen, you watch Luc's face transform as he reads the letter you hold up to your camera. He disappears for a moment and returns with a wooden box. \"These are Julien's unsent letters. Hundreds of them. All to Éloise.\" His voice cracks. \"I think... I think you and I need to meet in person. This is too important, too... fate-like. Can you come to Paris? Or should I come to you?\"",
      choices: [
        {
          id: 'story-892746531-c42',
          text: 'Invite him to visit you first',
          description: "Show him your grandmother's world",
          targetNodeId: 'story-892746531-23',
          order: 1,
        },
        {
          id: 'story-892746531-c43',
          text: "Tell him you'll be there this weekend",
          description: 'Paris is calling',
          targetNodeId: 'story-892746531-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-22',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'Paris Forever',
      imageUrl:
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800',
      narration:
        "One year later, you stand in the renovated Café de Flore as co-owner with Luc. The walls now feature a curated exhibition: \"Julien and Éloise—A Love Story Across Time.\" Julien's paintings hang beside photos you found of your grandmother, telling their story for new generations. Your grandmother's original letter is framed by the window table where Julien waited. Luc wraps his arms around you from behind as customers admire the exhibit. \"They brought us together,\" he whispers. \"And we gave them the ending they deserved.\" That evening, as the Eiffel Tower lights sparkle, Luc proposes at the same spot where Julien first kissed your grandmother in 1962. This time, the story gets its happy ending.",
      choices: [],
    },
    {
      id: 'story-892746531-23',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'Between Two Worlds',
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
      narration:
        "You divide your life between two cities now—your home and Paris. The long-distance relationship is challenging but somehow fitting. You and Luc write letters, just like your grandparents, though yours have happier endings. Every few months, you meet in a different European city, collecting memories and stories. In your grandmother's attic, now your studio, you're writing a book about Julien and Éloise. Luc sends you photos from the café, where he's creating a permanent exhibition of his grandfather's work. Your relationship exists in airports and video calls and stolen weekends, always with the bittersweet understanding that some love stories are meant to span distances. But unlike your grandparents, you chose this. And every reunion feels like coming home.",
      choices: [],
    },
    {
      id: 'story-892746531-24',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'The Letter Home',
      imageUrl:
        'https://images.unsplash.com/photo-1517842536404-c91d7f658e5d?w=800',
      narration:
        "You return home with Julien's painting wrapped carefully in your luggage and memories of Luc tucked in your heart. Some connections are too complicated, too weighted with the past. But you fulfilled your mission—you found Julien, understood your grandmother's story, and gave both of them closure. You place the painting in your living room where your grandmother's portrait used to hang. She's young again, eternally summer, captured by someone who loved her completely. Sometimes you wonder about Luc, about the life you might have had. But you have the painting, the letters (now donated to a museum), and the knowledge that love, even unfulfilled, can echo across generations. Your grandmother's story is complete. And yours? It's still being written, just not in Paris.",
      choices: [],
    },
  ],
};


