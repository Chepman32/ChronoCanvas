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
  genre: 'romance',
  involvement: 'medium',
  estimatedDuration: 45,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-15',
  updatedAt: '2025-01-15',
  totalNodes: 22,
  totalEndings: 5,
  startNodeId: 'story-892746531-1',
  nodes: [
    {
      id: 'story-892746531-1',
      storyId: 'story-892746531',
      type: 'start',
      title: 'The Attic Discovery',
      imageUrl:
        'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
      narration:
        'Dust particles dance in the afternoon light streaming through the attic window. You are sorting through your grandmother\'s belongings when a faded envelope slips from an old book. The letter inside is written in French, dated 1962, and signed only with "J." Your grandmother never mentioned a romance in Paris, never spoke of anyone named J. But the words are unmistakably passionate, promising to wait forever at Café de Flore. The handwriting is elegant, the paper thin with age, and you feel a connection to a secret carried for over sixty years.',
      choices: [
        {
          id: 'story-892746531-c1',
          text: 'Research the café and book a flight to Paris',
          description: 'Follow the mystery to its source',
          targetNodeId: 'story-892746531-2',
          order: 1,
        },
        {
          id: 'story-892746531-c2',
          text: 'Ask your family about grandmother\'s past first',
          description: 'Gather information before acting',
          targetNodeId: 'story-892746531-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-2',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Crossing the Atlantic',
      imageUrl:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      narration:
        'The plane touches down at Charles de Gaulle Airport as dawn breaks over Paris. You have spent the flight rehearsing what you will say, how you will explain your mission to strangers. Your aunt revealed that your grandmother spent a transformative year in Paris before meeting your grandfather, returning suddenly without explanation. She produced a photograph: your grandmother at twenty-three, radiant beside a young man whose face was turned away. Now, as you collect your luggage and step into the Paris morning, the reality of your quest settles upon you.',
      choices: [
        {
          id: 'story-892746531-c3',
          text: 'Take the train directly to Saint-Germain-des-Prés',
          description: 'Head straight to the café',
          targetNodeId: 'story-892746531-3',
          order: 1,
        },
        {
          id: 'story-892746531-c4',
          text: 'Check into your hotel and plan your approach',
          description: 'Rest before beginning',
          targetNodeId: 'story-892746531-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-3',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Arrival in Saint-Germain',
      imageUrl:
        'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
      narration:
        'The streets of Saint-Germain-des-Prés exude an old-world charm that makes you feel as though you have stepped back in time. Boulangeries emit the scent of fresh croissants, and bookshops display weathered volumes in their windows. You pass the famous Deux Magots café, imagining your grandmother walking these same cobblestones in 1962. The address from the letter leads you down a narrow street lined with chestnut trees. Your heart pounds with each step. This neighborhood has remained largely unchanged for decades, preserved like a time capsule.',
      choices: [
        {
          id: 'story-892746531-c5',
          text: 'Ask a local shopkeeper about the café\'s history',
          description: 'Gather local knowledge',
          targetNodeId: 'story-892746531-4',
          order: 1,
        },
        {
          id: 'story-892746531-c6',
          text: 'Continue directly to Café de Flore',
          description: 'See it for yourself first',
          targetNodeId: 'story-892746531-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-4',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Iconic Red Awning',
      imageUrl:
        'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
      narration:
        'There it stands: Café de Flore, with its distinctive red awning and Art Deco interior visible through large windows. The same awning from your grandmother\'s old photographs still hangs above the entrance, faded slightly by decades of Parisian sun. Writers and artists have gathered here for generations, and the terrace is already filling with patrons sipping espresso. You clutch the letter in your pocket, feeling its presence like a talisman. An elderly waiter with silver hair notices your hesitation. He approaches with a knowing smile, as if he has seen this scene play out before.',
      choices: [
        {
          id: 'story-892746531-c7',
          text: 'Show him the letter immediately',
          description: 'Be direct about your mission',
          targetNodeId: 'story-892746531-5',
          order: 1,
        },
        {
          id: 'story-892746531-c8',
          text: 'Order coffee and observe the café first',
          description: 'Take time to absorb the atmosphere',
          targetNodeId: 'story-892746531-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-5',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Waiter\'s Recognition',
      imageUrl:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      narration:
        'The waiter\'s eyes mist over as he examines the faded letter. "Julien," he whispers reverently. "Monsieur Moreau. He came here every single day for five years after she left, always waiting. Always the same table by the window." He points to a corner table where a young man now sits, sketching. "That is his grandson, Luc. He inherited the café after Julien passed away last year. You should speak with him. He has been searching for information about the woman who broke his grandfather\'s heart." The waiter pats your hand gently. "You have her eyes, you know."',
      choices: [
        {
          id: 'story-892746531-c9',
          text: 'Approach Luc\'s table with the letter',
          description: 'Be honest about your purpose',
          targetNodeId: 'story-892746531-6',
          order: 1,
        },
        {
          id: 'story-892746531-c10',
          text: 'Introduce yourself casually first',
          description: 'Build rapport before revealing',
          targetNodeId: 'story-892746531-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-6',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'First Encounter',
      imageUrl:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800',
      narration:
        'Luc looks up from his sketchbook as you approach, and his green eyes widen with recognition. He has an artist\'s hands, ink-stained and expressive. When your eyes meet, he does not look away. Instead, he closes his sketchbook slowly and stands, speaking in accented English that carries wonder: "Forgive me, but you look exactly like someone from an old photograph my grandfather kept his entire life. I have stared at that image since childhood. And now here you are, walking into his café. This cannot be coincidence." His voice trembles slightly with emotion.',
      choices: [
        {
          id: 'story-892746531-c11',
          text: 'Show him your grandmother\'s letter',
          description: 'Reveal the connection immediately',
          targetNodeId: 'story-892746531-7',
          order: 1,
        },
        {
          id: 'story-892746531-c12',
          text: 'Ask about his grandfather first',
          description: 'Learn Julien\'s story before revealing yours',
          targetNodeId: 'story-892746531-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-7',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Julien\'s Legacy',
      imageUrl:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800',
      narration:
        'Luc invites you to sit, his hands trembling as he calls for coffee. He tells you about Julien Moreau—an artist who spent his life painting the same woman from memory, capturing her across six decades. "He owned this café but rarely left it, as if waiting for someone who would never return. He died believing she had simply forgotten him. But I found boxes of paintings in his studio, hundreds of canvases, all of her. And letters. Hundreds of unsent letters." Luc studies your face with growing comprehension. "Your grandmother. Éloise was your grandmother."',
      choices: [
        {
          id: 'story-892746531-c13',
          text: 'Confirm the connection and share her story',
          description: 'Tell him everything',
          targetNodeId: 'story-892746531-8',
          order: 1,
        },
        {
          id: 'story-892746531-c14',
          text: 'Ask to see Julien\'s paintings first',
          description: 'See the evidence before revealing more',
          targetNodeId: 'story-892746531-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-8',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Studio Above',
      imageUrl:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800',
      narration:
        'Luc leads you up a narrow staircase to Julien\'s studio, a sunlit room that smells of turpentine and memories. The walls are covered with paintings—your grandmother\'s face rendered at every age, from the young woman in your photograph to an imagined elder with silver hair. Each canvas pulses with love and longing. "He painted her until his final days," Luc explains. "These are not the works of someone forgotten. These are the works of someone who loved completely, across a lifetime of absence." An unfinished painting stands in the corner: your grandmother as she might look today.',
      choices: [
        {
          id: 'story-892746531-c15',
          text: 'Tell Luc why your grandmother really left',
          description: 'Share the family secret',
          targetNodeId: 'story-892746531-9',
          order: 1,
        },
        {
          id: 'story-892746531-c16',
          text: 'Ask to read Julien\'s unsent letters',
          description: 'Hear Julien\'s voice first',
          targetNodeId: 'story-892746531-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-9',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Letters Across Time',
      imageUrl:
        'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
      narration:
        'Luc opens a wooden chest filled with aged envelopes, each addressed to "My dearest Éloise." You read them together as Julien\'s devotion unfolds across sixty years. The last letter, penned days before his death, contains words that shatter you: "I understand now that you could not come back. I only hope you were happy. I only hope you were loved as you deserved. I forgive you for not returning, and I will wait for you still, in whatever comes after." Luc closes the chest, tears streaming down his face. The weight of decades hangs in the air.',
      choices: [
        {
          id: 'story-892746531-c17',
          text: 'Reveal the truth about the pregnancy',
          description: 'Give Julien\'s memory closure',
          targetNodeId: 'story-892746531-10',
          order: 1,
        },
        {
          id: 'story-892746531-c18',
          text: 'Comfort Luc in shared grief',
          description: 'Find solace together',
          targetNodeId: 'story-892746531-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-10',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Full Truth',
      imageUrl:
        'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
      narration:
        'You tell Luc everything—how your grandmother discovered she was pregnant in 1962, how her family forced her to return immediately, how she was forbidden from contacting Julien. She married your grandfather in a quiet ceremony, and he raised your mother as his own. "She kept his letter hidden her entire life," you explain. "Under her pillow, then in a locked box, finally in the attic. She never spoke of Paris, but my mother remembers her crying sometimes when she thought no one was watching. She never stopped loving him. She simply could not come back."',
      choices: [
        {
          id: 'story-892746531-c19',
          text: 'Suggest honoring their love with a memorial',
          description: 'Create something lasting',
          targetNodeId: 'story-892746531-11',
          order: 1,
        },
        {
          id: 'story-892746531-c20',
          text: 'Ask Luc about his dreams for the café',
          description: 'Shift to the present',
          targetNodeId: 'story-892746531-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-11',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Connection Across Generations',
      imageUrl:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      narration:
        'Luc looks at you with something deeper than understanding—a recognition that spans decades. "Then we are connected," he says softly, taking your hand. "Your grandmother was the love of my grandfather\'s life, and somewhere in your history flows part of his legacy. They brought us together across sixty years and an ocean." The afternoon light streams through the studio windows. "This feels like fate," Luc continues. "Like they are giving us a second chance at their story. Like they want us to write a better ending than the one they had." His thumb traces circles on your palm.',
      choices: [
        {
          id: 'story-892746531-c21',
          text: 'Acknowledge the connection and lean closer',
          description: 'Embrace the possibility',
          targetNodeId: 'story-892746531-12',
          order: 1,
        },
        {
          id: 'story-892746531-c22',
          text: 'Suggest dinner to continue talking',
          description: 'Take things slowly',
          targetNodeId: 'story-892746531-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-12',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Evening Along the Seine',
      imageUrl:
        'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
      narration:
        'That evening, Luc takes you for a walk along the Seine as the sun sets behind Notre-Dame. The Eiffel Tower begins its hourly sparkle, reflected in the river\'s current. He tells you about his childhood, growing up in Julien\'s stories of a lost love. "I thought they were just stories," Luc admits, stopping to face you. "Beautiful, tragic fiction. But you are real. Your grandmother was real. Their love was real." He brushes a strand of hair from your face. "And this feeling, right now, this connection I feel to you—this is real too, is it not?" His eyes search yours.',
      choices: [
        {
          id: 'story-892746531-c23',
          text: 'Kiss him beneath the sparkling tower',
          description: 'Follow your heart',
          targetNodeId: 'story-892746531-13',
          order: 1,
        },
        {
          id: 'story-892746531-c24',
          text: 'Tell him you need time to process everything',
          description: 'Be cautious',
          targetNodeId: 'story-892746531-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-13',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'A New Beginning',
      imageUrl:
        'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
      narration:
        'The kiss tastes of red wine and possibility, of two stories intertwining across generations. When you pull apart, Luc is smiling through tears. "I have been waiting for you," he whispers, "without even knowing who you were. But now I understand. Our grandparents started something beautiful that circumstances tore apart. We can complete their circle." Over the following weeks, you explore Paris while uncovering more of your grandparents\' story. You discover Julien painted your grandmother pregnant—he knew about the baby, knew she carried his child, and waited anyway.',
      choices: [
        {
          id: 'story-892746531-c25',
          text: 'Decide to stay in Paris permanently',
          description: 'Build a new life together',
          targetNodeId: 'story-892746531-15',
          order: 1,
        },
        {
          id: 'story-892746531-c26',
          text: 'Suggest a long-distance relationship',
          description: 'Navigate between two worlds',
          targetNodeId: 'story-892746531-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-14',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Boundaries',
      imageUrl:
        'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
      narration:
        'Luc\'s face falls, but he nods with understanding, stepping back. "You are right. This is heavy—our grandparents\' story, the weight of their loss. Maybe we are trying to fix something that was not ours to fix." He looks away toward the darkening river. "But I am glad you came. Glad my grandfather\'s story has some closure." The air between you feels thick with missed possibilities. You sense a decision point, a moment where your choice will echo across the years just as your grandmother\'s did. The city of light seems to hold its breath around you.',
      choices: [
        {
          id: 'story-892746531-c27',
          text: 'Change your mind and reach for his hand',
          description: 'Do not let this moment pass',
          targetNodeId: 'story-892746531-13',
          order: 1,
        },
        {
          id: 'story-892746531-c28',
          text: 'Thank him and prepare to return home',
          description: 'Some stories end differently',
          targetNodeId: 'story-892746531-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-15',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Building a Future',
      imageUrl:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800',
      narration:
        'One year later, you stand in the renovated Café de Flore as co-owner with Luc. The walls now feature an exhibition: "Julien and Éloise—A Love Story Across Time." Julien\'s paintings hang beside photographs of your grandmother, telling their story for new generations. Your grandmother\'s original letter is framed by the window table where Julien waited. Luc wraps his arms around you as customers admire the exhibit. "They brought us together," he whispers. "And we gave them the ending they deserved." You feel the rightness of this, the completion of a circle begun six decades ago.',
      choices: [
        {
          id: 'story-892746531-c29',
          text: 'Accept when Luc proposes at their special spot',
          description: 'A new chapter begins',
          targetNodeId: 'story-892746531-18',
          order: 1,
        },
        {
          id: 'story-892746531-c30',
          text: 'Suggest waiting until you know each other better',
          description: 'Build slowly but surely',
          targetNodeId: 'story-892746531-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-16',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'Between Two Worlds',
      imageUrl:
        'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
      narration:
        'You divide your life between two cities now—your home and Paris. The long-distance relationship is challenging but somehow fitting, echoing the separation your grandparents endured, though yours has happier interludes. You write letters like Julien and Éloise, though yours reach their destinations. You meet in different European cities, collecting memories in airports and train stations. In your grandmother\'s attic, now your writing studio, you are composing a book about their romance. Luc sends photographs from the café, where he is creating a permanent exhibition of his grandfather\'s work.',
      choices: [
        {
          id: 'story-892746531-c31',
          text: 'Plan your eventual move to Paris',
          description: 'Work toward unity',
          targetNodeId: 'story-892746531-20',
          order: 1,
        },
        {
          id: 'story-892746531-c32',
          text: 'Accept this as your permanent arrangement',
          description: 'Love transcends distance',
          targetNodeId: 'story-892746531-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-17',
      storyId: 'story-892746531',
      type: 'decision',
      title: 'The Painting',
      imageUrl:
        'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
      narration:
        'Luc shakes his head when you mention buying a painting, but seeing your connection to the work, he softens. "These are Grand-père\'s heart, his soul. They were never meant for sale." He pauses, studying you. "However, if Éloise was your grandmother, then perhaps one should return to her family. Choose whichever speaks to you." You select a small canvas: your grandmother laughing in summer sunshine, so alive, so loved. As Luc wraps it carefully, his fingers brush yours, and you wonder if this is truly goodbye.',
      choices: [
        {
          id: 'story-892746531-c33',
          text: 'Leave with the painting and your memories',
          description: 'Complete your mission',
          targetNodeId: 'story-892746531-22',
          order: 1,
        },
        {
          id: 'story-892746531-c34',
          text: 'Write to Luc after returning home',
          description: 'Keep the connection alive',
          targetNodeId: 'story-892746531-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-892746531-18',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'Paris Forever',
      imageUrl:
        'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
      narration:
        'That evening, Luc proposes at the spot where Julien first kissed your grandmother in 1962. The ring is his grandmother\'s antique. Your wedding takes place a year later in the café, surrounded by Julien\'s paintings and photographs of your grandmother watching over you. You write a book about their love story that becomes a bestseller, and the café becomes a pilgrimage site for romantics. Years later, when you hold your first child—a daughter named Éloise—you understand why your grandmother kept that letter. This time, the story gets its happy ending.',
      choices: [],
    },
    {
      id: 'story-892746531-19',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'Love Grows Slowly',
      imageUrl:
        'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800',
      narration:
        'You build your relationship carefully, honoring the intensity of your connection while respecting the need for time. Luc understands, and together you create a partnership that blends his Parisian world with yours. Within two years, you have established a rhythm—months of discovery before making permanent decisions. The café thrives with your input, and you curate exhibitions of forgotten love stories. When you finally marry, it is with certainty that comes from truly knowing another person. The love story that began in 1962 continues through you, eternal as the City of Light.',
      choices: [],
    },
    {
      id: 'story-892746531-20',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'Journey to Unity',
      imageUrl:
        'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800',
      narration:
        'The distance is temporary, a bridge you are both committed to crossing. Within eighteen months, you arrange your affairs to make Paris your permanent home. The process is complicated—selling your house, learning French bureaucracy—but every obstacle feels worthwhile when you wake up in the apartment above the café with Luc beside you. You become a French citizen and dedicate your life to preserving stories of love that transcended borders. Together, you establish a foundation that helps reunite families separated by circumstance, turning tragedy into hope for others.',
      choices: [],
    },
    {
      id: 'story-892746531-21',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'Love Across Distance',
      imageUrl:
        'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800',
      narration:
        'You accept that your love does not require physical proximity. For years, you maintain your transatlantic relationship, meeting in new cities, writing letters that span the ocean. The arrangement suits you both—Luc preserves his grandfather\'s café, you maintain your career, and together you create something unique. Eventually, you publish your book about Julien and Éloise, dedicating it to those who loved across impossible distances. It becomes required reading. When you are old, sitting with Luc on the café terrace, you realize your grandparents taught you to cherish every moment.',
      choices: [],
    },
    {
      id: 'story-892746531-22',
      storyId: 'story-892746531',
      type: 'ending',
      title: 'The Letter Home',
      imageUrl:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800',
      narration:
        'You return home with Julien\'s painting wrapped carefully in your luggage. Some connections are too complicated, too weighted with the past. But you fulfilled your mission—you found Julien, understood your grandmother\'s story, and gave them closure. You place the painting in your living room where your grandmother\'s portrait used to hang. She is young again, eternally summer, captured by someone who loved her completely. Sometimes you wonder about Luc, about the life you might have had. But your grandmother\'s story is complete. And yours continues, enriched by history, written on fresh pages.',
      choices: [],
    },
  ],
};
