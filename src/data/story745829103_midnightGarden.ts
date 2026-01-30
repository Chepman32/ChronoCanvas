import { Story } from '../types';

export const midnightGardenStory: Story = {
  id: 'story-745829103',
  title: 'The Midnight Garden',
  description:
    "You inherit a Victorian mansion with a garden that only blooms at midnight. When you meet the enigmatic gardener who tends it, you discover he's been waiting a century for someone who can see the flowers. As magic intertwines with romance, you must choose between your world and his.",
  coverImageUrl:
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400',
  author: 'Isabella Crane',
  genre: 'romance',
  involvement: 'medium',
  estimatedDuration: 55,
  isPremium: true,
  productId: 'com.app.story.midnight-garden',
  version: '1.1',
  createdAt: '2025-01-18',
  updatedAt: '2025-01-30',
  totalNodes: 25,
  totalEndings: 4,
  startNodeId: 'story-745829103-1',
  nodes: [
    // LAYER 1: The Arrival (Start)
    {
      id: 'story-745829103-1',
      storyId: 'story-745829103',
      type: 'start',
      title: 'The Inheritance',
      imageUrl:
        'https://images.unsplash.com/photo-1605283176568-9b41fde0f4d7?w=800',
      narration:
        'The letter from the estate lawyer arrived on your thirtieth birthday. A great-aunt you never knew existed has left you Thornewood Manor—a crumbling Victorian mansion on the edge of a forgotten town. The condition is strange: you must live there for one full moon cycle before deciding whether to keep it. As you arrive at midnight, the iron gates creak open on their own, and you smell flowers blooming impossibly in the winter air. Something ancient stirs in the shadows, watching your arrival with centuries of patience. The manor looms before you, its dark windows like unblinking eyes.',
      choices: [
        {
          id: 'story-745829103-c1',
          text: 'Follow the scent of flowers into the garden',
          description: 'Let wonder guide your first steps',
          targetNodeId: 'story-745829103-2',
          order: 1,
        },
        {
          id: 'story-745829103-c2',
          text: 'Enter the mansion to find answers first',
          description: 'Seek logic before embracing mystery',
          targetNodeId: 'story-745829103-3',
          order: 2,
        },
      ],
    },
    // LAYER 2: First Contact
    {
      id: 'story-745829103-2',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Luminescent Blooms',
      imageUrl:
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      narration:
        'The garden glows with otherworldly light. Flowers you have never seen—petals like stained glass, stems that pulse with silver luminescence—bloom in impossible arrangements. At the garden\'s heart stands a man in a worn coat, tending the flowers with careful devotion. He looks up, and his eyes widen in shock. "You can see them," he breathes. "You can actually see the flowers." His face is beautiful and ageless, touched by moonlight and something more. He has been waiting, you realize, for someone exactly like you. The moment stretches between you, charged with possibility and ancient magic.',
      choices: [
        {
          id: 'story-745829103-c3',
          text: 'Approach him and ask who he is',
          description: 'Seek the stranger\'s identity',
          targetNodeId: 'story-745829103-4',
          order: 1,
        },
        {
          id: 'story-745829103-c4',
          text: 'Reach out to touch a glowing flower first',
          description: 'Let curiosity lead the way',
          targetNodeId: 'story-745829103-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-3',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Echoing Halls',
      imageUrl:
        'https://images.unsplash.com/photo-1529429617124-aee711fa2be8?w=800',
      narration:
        'The mansion swallows you in velvet darkness. Oil portraits watch from the walls, their painted eyes seeming to follow your movement. The air hums with a note you feel more than hear, vibrating in your bones like a half-remembered lullaby. Moonlight leaks through fractured stained glass, painting the floor in sapphire patterns that shift as you walk. A corridor stretches before you, and somewhere beyond, you sense the garden\'s presence calling through the walls. The manor itself seems alive, breathing, waiting for you to discover its secrets.',
      choices: [
        {
          id: 'story-745829103-c5',
          text: 'Follow the humming through the corridor',
          description: 'Let the sound guide your path',
          targetNodeId: 'story-745829103-6',
          order: 1,
        },
        {
          id: 'story-745829103-c6',
          text: 'Force open the sealed study door',
          description: 'Seek answers in the forbidden room',
          targetNodeId: 'story-745829103-7',
          order: 2,
        },
      ],
    },
    // LAYER 3: Introduction
    {
      id: 'story-745829103-4',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Moonlit Confession',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'The gardener straightens, eyes glinting like silvered leaves in the moonlight. His voice trembles between relief and dread as he speaks. "My name is Elias Thorne, bound to this garden until the right heir arrives." The petals around you pulse, echoing his heartbeat in a rhythm that feels ancient and intimate. He studies your face with an intensity that makes your breath catch, searching for something in your features. "You have her eyes," he whispers, "the eyes of Eleanor Thornewood, who planted the first seed a century ago." His words hang in the fragrant air between you.',
      choices: [
        {
          id: 'story-745829103-c7',
          text: 'Ask what he means by "bound"',
          description: 'Press for the truth of his curse',
          targetNodeId: 'story-745829103-8',
          order: 1,
        },
        {
          id: 'story-745829103-c8',
          text: 'Promise to listen with an open heart',
          description: 'Offer trust before judgment',
          targetNodeId: 'story-745829103-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-5',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Glimmering Vision',
      imageUrl:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      narration:
        'As your fingers brush the bloom, liquid light pours through you like warm honey. Your pulse syncs with the garden\'s rhythm and you glimpse memories that are not yours—moonlit dances in this very spot, whispered vows exchanged beneath flowering arches, a lonely gardener tending petals that outlive every season. The vision shows you Elias, unchanged through decades, waiting with patient sorrow. When you open your eyes, he is beside you, wonder and fear warring in his expression. "The flowers have chosen to show you," he says softly, reaching toward you with trembling fingers.',
      choices: [
        {
          id: 'story-745829103-c9',
          text: 'Let the vision pull you deeper',
          description: 'Surrender to the memories',
          targetNodeId: 'story-745829103-9',
          order: 1,
        },
        {
          id: 'story-745829103-c10',
          text: 'Break contact and steady yourself',
          description: 'Reclaim your sense of self',
          targetNodeId: 'story-745829103-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-6',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Moonbound Conservatory',
      imageUrl:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800',
      narration:
        'A domed conservatory waits beyond a curtain of ivy, its glass panes glowing with inner light. Inside, instruments of brass and crystal hang like constellations from the ceiling, each tremor of the humming note setting them aglow with sympathetic resonance. A hidden door is edged with frost, exhaling midnight air that smells of snow and jasmine. On a marble pedestal, a single flower blooms in defiance of winter—its petals move like liquid silver, and you realize with a shock that it is the source of the humming that has guided you through the darkened halls of your inheritance.',
      choices: [
        {
          id: 'story-745829103-c11',
          text: 'Approach the humming flower',
          description: 'Seek the source of the magic',
          targetNodeId: 'story-745829103-11',
          order: 1,
        },
        {
          id: 'story-745829103-c12',
          text: 'Open the frost-edged door',
          description: 'Discover what lies beyond',
          targetNodeId: 'story-745829103-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-7',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Ancestral Study',
      imageUrl:
        'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800',
      narration:
        'Dust billows as the sealed study yields to your push. Ledgers, maps, and a portrait of a woman who shares your eyes crowd the shelves—her expression is knowing, as if she expected you. A silver key shaped like a crescent rests atop a velvet journal, waiting for someone to claim it. The pages of the journal are yellowed with age, filled with handwriting that mirrors your own. Entries speak of a garden that blooms only at midnight, of a guardian bound by love and oath, of a choice that will determine the fate of both garden and keeper.',
      choices: [
        {
          id: 'story-745829103-c13',
          text: 'Open the velvet-bound journal',
          description: 'Learn your ancestor\'s secrets',
          targetNodeId: 'story-745829103-13',
          order: 1,
        },
        {
          id: 'story-745829103-c14',
          text: 'Take the silver crescent key',
          description: 'Claim the mysterious talisman',
          targetNodeId: 'story-745829103-14',
          order: 2,
        },
      ],
    },
    // LAYER 4: Deepening Mystery
    {
      id: 'story-745829103-8',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Cursed Wakefulness',
      imageUrl:
        'https://images.unsplash.com/photo-1529088672371-4e9923770c70?w=800',
      narration:
        'Elias exhales, revealing that the garden blooms only for the Thorne bloodline. He explains how he pledged himself to guard the liminal gate between worlds until an heir could see the midnight blossoms and decide the manor\'s fate. "A century ago, Eleanor and I made a pact," he says, his voice heavy with memory. "I would keep the garden alive, and she would send someone who could set me free—or bind me forever." The weight of generations hangs between you, and you feel the burden of his waiting pressing on your heart like a heavy stone.',
      choices: [
        {
          id: 'story-745829103-c15',
          text: 'Ask what freedom would mean',
          description: 'Understand the cost of release',
          targetNodeId: 'story-745829103-15',
          order: 1,
        },
        {
          id: 'story-745829103-c16',
          text: 'Ask how you can help him',
          description: 'Offer to shoulder the burden',
          targetNodeId: 'story-745829103-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-9',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Shared Memory',
      imageUrl:
        'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800',
      narration:
        'Your vision synchronizes with Elias\'s past—decades of solitude, tending blooms for heirs who never saw them, who walked past the garden without noticing its glow. He has been invisible to the world, a ghost bound to flowers. He watches you gently, offering his hand as the garden\'s glow wraps around you both like a slow tide. "You are the first to see me," he says, and there is something vulnerable in his voice, something that makes your heart ache. "The first to share the garden\'s light." His fingers are warm, real, waiting for you.',
      choices: [
        {
          id: 'story-745829103-c17',
          text: 'Take his hand and join the resonance',
          description: 'Let the garden link your hearts',
          targetNodeId: 'story-745829103-16',
          order: 1,
        },
        {
          id: 'story-745829103-c18',
          text: 'Release his hand and study the magic',
          description: 'Keep your mind clear for strategy',
          targetNodeId: 'story-745829103-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-10',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Pulse of Starlight',
      imageUrl:
        'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=800',
      narration:
        'The energy you pulled back coils inside your chest like a captured comet. Every heartbeat sends sparks down your arms, and the flowers nearest you bloom brighter, bending toward your warmth as if seeking the sun. Elias watches with something like awe. "You carry the resonance," he whispers. "The garden recognizes you as Thorne blood." The power hums beneath your skin, demanding to be used, to be directed. You feel connected to every root and petal, aware of the garden as a living entity with desires and needs of its own calling to you.',
      choices: [
        {
          id: 'story-745829103-c19',
          text: 'Ask Elias to teach you control',
          description: 'Learn to wield this power wisely',
          targetNodeId: 'story-745829103-17',
          order: 1,
        },
        {
          id: 'story-745829103-c20',
          text: 'Channel the power into the earth',
          description: 'Strengthen the garden itself',
          targetNodeId: 'story-745829103-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-11',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'The Living Bloom',
      imageUrl:
        'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
      narration:
        'As you draw near, the humming flower opens further, revealing a heart of crystalline light. A voice—not heard but felt—whispers in your mind: "Child of Thorne, you have come at last." The presence is ancient, maternal, achingly familiar. It speaks of Elias, of his devotion, of the loneliness he has endured. "He needs more than a keeper," the voice murmurs. "He needs a partner, someone to share the burden and the beauty. Will you be that person, or will you take what he has preserved and leave him to fade away?"',
      choices: [
        {
          id: 'story-745829103-c21',
          text: 'Vow to stand by the guardian',
          description: 'Promise your companionship',
          targetNodeId: 'story-745829103-16',
          order: 1,
        },
        {
          id: 'story-745829103-c22',
          text: 'Ask what other choices exist',
          description: 'Seek alternatives to the pact',
          targetNodeId: 'story-745829103-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-12',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'The Frozen Gateway',
      imageUrl:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration:
        'Beyond the frost-edged door lies a chamber untouched by time. Ice sculptures of flowers—perfect replicas of the midnight blooms—surround a mirror of black glass. In its surface, you see not your reflection but Elias, decades ago, young and hopeful, making his pledge. The vision shows you the moment of binding: his love for Eleanor, her fear of mortality, their desperate attempt to preserve something beautiful against the ravages of time. The mirror shows you the cost of his devotion, and the choice that now falls to you as Eleanor\'s heir.',
      choices: [
        {
          id: 'story-745829103-c23',
          text: 'Touch the mirror to reach him',
          description: 'Bridge the gap between times',
          targetNodeId: 'story-745829103-15',
          order: 1,
        },
        {
          id: 'story-745829103-c24',
          text: 'Study the ice flowers for clues',
          description: 'Seek another path forward',
          targetNodeId: 'story-745829103-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-13',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Eleanor\'s Testament',
      imageUrl:
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
      narration:
        'The journal reveals Eleanor\'s deepest secrets. She loved Elias but chose mortality and family over his eternal garden. "I have left this for the one who inherits my eyes and my debt," she writes. "Three paths exist: join him and become bound to the midnight blooms, free him and risk the garden\'s death, or find a way to bridge both worlds—though I never discovered how." Her final entry is a confession of regret, of nights spent wondering, of hope that her descendant would succeed where she had failed.',
      choices: [
        {
          id: 'story-745829103-c25',
          text: 'Commit to finding the third path',
          description: 'Seek what Eleanor could not',
          targetNodeId: 'story-745829103-15',
          order: 1,
        },
        {
          id: 'story-745829103-c26',
          text: 'Accept that some choices are final',
          description: 'Face the reality of sacrifice',
          targetNodeId: 'story-745829103-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-14',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Lunar Talisman',
      imageUrl:
        'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800',
      narration:
        'The crescent key warms in your palm, unfolding into a talisman etched with constellations that shift and realign. You sense it can disrupt the enchantment—or redirect it—depending on whose name you speak and what intention you hold. Power thrums through the silver metal, connecting you to the garden\'s essence. This is the key Eleanor left behind, the tool she could not bring herself to use. It represents possibility, a way to rewrite the rules that have bound Elias for so long in loneliness.',
      choices: [
        {
          id: 'story-745829103-c27',
          text: 'Seek Elias to use it together',
          description: 'Share this power with him',
          targetNodeId: 'story-745829103-18',
          order: 1,
        },
        {
          id: 'story-745829103-c28',
          text: 'Use it alone to test its power',
          description: 'Understand before involving him',
          targetNodeId: 'story-745829103-17',
          order: 2,
        },
      ],
    },
    // LAYER 5: Understanding Deepens
    {
      id: 'story-745829103-15',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'The Shape of Freedom',
      imageUrl:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration:
        '"Freedom means mortality," Elias admits, his voice steady despite the tremor in his hands. "It means aging, dying, losing the garden I have tended for a century. But it also means dawn sunlight, changing seasons, a life lived in forward motion rather than endless midnight." His eyes search yours with desperate hope. "I have forgotten what morning feels like. But I have also forgotten what it means to truly live, to risk, to love without the safety of eternity." The honesty in his words strips away pretense.',
      choices: [
        {
          id: 'story-745829103-c29',
          text: 'Offer to show him the dawn',
          description: 'Promise him a new beginning',
          targetNodeId: 'story-745829103-19',
          order: 1,
        },
        {
          id: 'story-745829103-c30',
          text: 'Ask what he would sacrifice to keep',
          description: 'Understand his deepest values',
          targetNodeId: 'story-745829103-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-16',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Resonant Promise',
      imageUrl:
        'https://images.unsplash.com/photo-1529338296731-c4280a44fcbe?w=800',
      narration:
        'Standing within the circle of moonlight, you feel the garden attune to both your breaths. Elias speaks of dawns he has never witnessed and futures he no longer dares imagine. "I have been alone so long," he confesses, "that I had forgotten what it feels like to be seen." His hand in yours is warm, solid, alive. The garden\'s magic weaves around you, offering connection, offering permanence, offering a shared existence beyond the boundaries of ordinary life. But it also demands choice, commitment, a path that cannot be easily reversed.',
      choices: [
        {
          id: 'story-745829103-c31',
          text: 'Step fully into the circle beside him',
          description: 'Bind your rhythm to the garden',
          targetNodeId: 'story-745829103-19',
          order: 1,
        },
        {
          id: 'story-745829103-c32',
          text: 'Keep one foot in the mortal world',
          description: 'Hold space for a shared dawn',
          targetNodeId: 'story-745829103-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-17',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Garden\'s Whisper',
      imageUrl:
        'https://images.unsplash.com/photo-1521133573890-067a75c0e731?w=800',
      narration:
        'Elias teaches you to listen to the garden\'s voice, to feel its needs and desires. "It is not merely plants and magic," he explains. "It is a living entity, born from love and longing, that feeds on connection." As you learn, you sense the garden\'s hunger—not malicious, but desperate. It wants a keeper, yes, but more than that, it wants to be shared, to bridge the gap between the midnight world and the day. The flowers lean toward you, offering their beauty, asking only that you choose with your whole heart.',
      choices: [
        {
          id: 'story-745829103-c33',
          text: 'Commit to being its voice and guardian',
          description: 'Accept the role completely',
          targetNodeId: 'story-745829103-20',
          order: 1,
        },
        {
          id: 'story-745829103-c34',
          text: 'Seek a way to free both garden and gardener',
          description: 'Reject the binary of keeper or destroyer',
          targetNodeId: 'story-745829103-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-18',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Shared Strength',
      imageUrl:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      narration:
        'Together, you and Elias channel the power you have gathered. The garden responds to your combined intention, blooming brighter than ever before. "With two hearts instead of one," Elias says, wonder in his voice, "the magic is stronger but also more flexible." He looks at you with an expression that transcends gratitude—it is recognition, as if he has found the companion he has been seeking for a century. The path forward is still unclear, but you face it together, your hands joined, your resolve matched in strength.',
      choices: [
        {
          id: 'story-745829103-c35',
          text: 'Strengthen the garden\'s bounds',
          description: 'Ensure its survival forever',
          targetNodeId: 'story-745829103-20',
          order: 1,
        },
        {
          id: 'story-745829103-c36',
          text: 'Begin loosening the binding spell',
          description: 'Prepare for eventual freedom',
          targetNodeId: 'story-745829103-19',
          order: 2,
        },
      ],
    },
    // LAYER 6: Paths Diverge
    {
      id: 'story-745829103-19',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Paths Untrodden',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'The garden reveals hidden possibilities—paths Eleanor never walked, choices that were always available but never taken. You see that the pact was not fixed, that love and magic together can reshape even ancient bindings. "There is always another way," the garden whispers, "for those brave enough to seek it." But seeking requires risk, requires stepping into the unknown without guarantee. Elias watches you, trusting your judgment, ready to follow wherever your courage leads into uncharted territory.',
      choices: [
        {
          id: 'story-745829103-c37',
          text: 'Take the risk on the unknown path',
          description: 'Forge a new future together',
          targetNodeId: 'story-745829103-21',
          order: 1,
        },
        {
          id: 'story-745829103-c38',
          text: 'Choose the safer known route',
          description: 'Honor the original structure',
          targetNodeId: 'story-745829103-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-20',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Eleanor\'s Echo',
      imageUrl:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800',
      narration:
        'Your ancestor\'s presence lingers in the manor, not as a ghost but as hope. Through the journal\'s final pages, she speaks across time: "I failed because I feared loss more than I loved. Do not make my mistake." Her words resonate with your own heart\'s knowing. The choice before you is not simply about Elias or the garden—it is about how you want to live, what you are willing to risk for connection, for meaning, for a love that transcends the ordinary boundaries of existence and time itself.',
      choices: [
        {
          id: 'story-745829103-c39',
          text: 'Choose love without fear',
          description: 'Embrace the risk completely',
          targetNodeId: 'story-745829103-22',
          order: 1,
        },
        {
          id: 'story-745829103-c40',
          text: 'Choose wisdom and measured hope',
          description: 'Balance heart and mind',
          targetNodeId: 'story-745829103-21',
          order: 2,
        },
      ],
    },
    // LAYER 7: Commitment Deepens
    {
      id: 'story-745829103-21',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Bridges Between Worlds',
      imageUrl:
        'https://images.unsplash.com/photo-1518173946687-a4c036bc3c95?w=800',
      narration:
        'Together, you have found what Eleanor could not—a path that honors both the garden and its keeper without demanding sacrifice of either. The magic responds to your combined intention, shifting, transforming, becoming something entirely new and unexpected. "We are rewriting the story," Elias whispers, wonder evident in his voice. The flowers bloom in gold as well as silver, accepting the possibility of sunlight. This path is untested, uncertain, but alive with hope and possibility for a shared future.',
      choices: [
        {
          id: 'story-745829103-c41',
          text: 'Commit to the transformed garden',
          description: 'Embrace the new magic fully',
          targetNodeId: 'story-745829103-23',
          order: 1,
        },
        {
          id: 'story-745829103-c42',
          text: 'Preserve the option to leave freely',
          description: 'Keep your paths open',
          targetNodeId: 'story-745829103-24',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-22',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'The Pact Examined',
      imageUrl:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
      narration:
        'You study the ancient binding with clear eyes now, understanding its intricate mechanisms. The garden needs either two keepers eternally bound, or one who carries the magic alone, or complete release that ends the enchantment forever. There is no perfect solution, only choices with different costs and consequences. Elias stands ready to accept whatever you decide, his love evident in his willingness to let you choose even his fate. The weight is immense, but the time for decision approaches with the fading stars and lightening sky.',
      choices: [
        {
          id: 'story-745829103-c43',
          text: 'Take the burden so Elias can be free',
          description: 'Sacrifice yourself for him',
          targetNodeId: 'story-745829103-24',
          order: 1,
        },
        {
          id: 'story-745829103-c44',
          text: 'End the magic entirely',
          description: 'Let the garden return to earth',
          targetNodeId: 'story-745829103-23',
          order: 2,
        },
      ],
    },
    // LAYER 8: The Transformation
    {
      id: 'story-745829103-23',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Final Transformation',
      imageUrl:
        'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800',
      narration:
        'Your combined power has transformed the garden into something unprecedented—neither fully bound by midnight nor limited by daylight, but existing in both realms simultaneously. The flowers now bloom with colors that shift between silver moonlight and golden sun, creating a spectacle of ethereal beauty never before witnessed. "We have created something new," Elias marvels, his eyes reflecting the dual radiance. But this transformation requires final commitment and sacrifice. You must decide whether to anchor this new magic permanently or allow it to fade.',
      choices: [
        {
          id: 'story-745829103-c45',
          text: 'Anchor the transformation forever',
          description: 'Commit to the new existence',
          targetNodeId: 'story-745829103-25',
          order: 1,
        },
        {
          id: 'story-745829103-c46',
          text: 'Let it fade and choose a clearer path',
          description: 'Simplify your commitment',
          targetNodeId: 'story-745829103-26',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-24',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Guardian\'s Pledge',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      narration:
        'The garden recognizes your commitment, blooming in a cascade of silver light that wraps around you like silken threads. You feel the ancient magic weaving around you, offering permanence, offering purpose, offering a shared existence with Elias that transcends mortal bounds. But permanence has its price—you will be bound as he was, tied to midnight and moonlight, absent from the daylit world. Elias looks at you with anguish and joy mingled in his beautiful eyes. "Are you certain?" he asks softly. "I would not wish my solitude on anyone."',
      choices: [
        {
          id: 'story-745829103-c47',
          text: 'Accept the binding willingly',
          description: 'Become the eternal keeper',
          targetNodeId: 'story-745829103-25',
          order: 1,
        },
        {
          id: 'story-745829103-c48',
          text: 'Refuse and seek to protect from outside',
          description: 'Find another way to help',
          targetNodeId: 'story-745829103-26',
          order: 2,
        },
      ],
    },
    // LAYER 9: The Resolution Gates
    {
      id: 'story-745829103-25',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Eternal Circle',
      imageUrl:
        'https://images.unsplash.com/photo-1530023367847-a683933f4177?w=800',
      narration:
        'The garden\'s magic fully embraces you both, weaving your life forces together with silvery threads of enchantment. You feel Elias\'s heartbeat synchronizing with yours, his essence intertwining with your own. "We will be bound as one," he says, and there is joy in his voice despite the permanence of the choice. "Together, we will tend this place until the stars themselves grow dim." The flowers celebrate your joining, their light intensifying into a cascade of silver and gold.',
      choices: [
        {
          id: 'story-745829103-c49',
          text: 'Accept the eternal binding joyfully',
          description: 'Embrace forever with him',
          targetNodeId: 'story-745829103-27',
          order: 1,
        },
        {
          id: 'story-745829103-c50',
          text: 'Hesitate, seeking one last alternative',
          description: 'Test if love can exist without binding',
          targetNodeId: 'story-745829103-28',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-26',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Tethered Freedom',
      imageUrl:
        'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800',
      narration:
        'You have found a middle path—neither fully bound nor completely free, but connected to the garden while maintaining your place in the ordinary world. Elias can join you in this half-existence, sharing your daylight life while returning to tend the midnight blooms. "It will be complicated," he warns, but there is excitement in his voice at the possibilities. "Two lives, two worlds, both incomplete without the other." The arrangement demands constant balance, constant choice, but offers the richest possible existence.',
      choices: [
        {
          id: 'story-745829103-c51',
          text: 'Embrace the dual existence fully',
          description: 'Live in both worlds at once',
          targetNodeId: 'story-745829103-27',
          order: 1,
        },
        {
          id: 'story-745829103-c52',
          text: 'Commit to one world eventually',
          description: 'Keep options open for now',
          targetNodeId: 'story-745829103-28',
          order: 2,
        },
      ],
    },
    // LAYER 10: Final Choice
    {
      id: 'story-745829103-27',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'The Promise of Dawn',
      imageUrl:
        'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800',
      narration:
        'You stand at the threshold between midnight and morning, between binding and freedom. Elias faces you, hope and fear equally present in his expression. "Whatever you choose," he says, "know that you have already given me something precious—the memory of being seen, being chosen, being loved." The garden seems to hold its breath, waiting. The stars above begin to fade as the eastern sky lightens. Time presses upon you; the choice cannot be delayed much longer.',
      choices: [
        {
          id: 'story-745829103-c53',
          text: 'Choose the eternal midnight together',
          description: 'Stay as the garden\'s heart',
          targetNodeId: 'story-745829103-ending-1',
          order: 1,
        },
        {
          id: 'story-745829103-c54',
          text: 'Choose the uncertain dawn',
          description: 'Step into the unknown together',
          targetNodeId: 'story-745829103-ending-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-745829103-28',
      storyId: 'story-745829103',
      type: 'decision',
      title: 'Final Release',
      imageUrl:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      narration:
        'The moment of final decision arrives with the first gray light of dawn touching the horizon. You and Elias stand together at the threshold, your hands joined, your futures intertwined whether you choose to stay or go. The garden seems to hold its breath, every flower, every leaf, every root aware that everything is about to change forever. "Whatever comes next," Elias says, his voice steady and full of love, "I am grateful you came. You have given me something I thought lost forever—hope and connection."',
      choices: [
        {
          id: 'story-745829103-c55',
          text: 'Release the magic to the earth',
          description: 'End the enchantment gently',
          targetNodeId: 'story-745829103-ending-4',
          order: 1,
        },
        {
          id: 'story-745829103-c56',
          text: 'Take the burden to free him',
          description: 'Sacrifice for his happiness',
          targetNodeId: 'story-745829103-ending-3',
          order: 2,
        },
      ],
    },
    // ENDINGS (After 10+ choices)
    {
      id: 'story-745829103-ending-1',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Midnight Keepers',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'You choose the moonlit path, remaining with Elias as the garden\'s new heart. Together you tend the blooms that bridge worlds, greeting each night with shared laughter and whispered promises. The outside world fades like a half-remembered dream, but the midnight garden thrives under your combined care. Elias teaches you the names of flowers that exist nowhere else, and you teach him that solitude can become companionship. Centuries may pass, but you will face them together, two souls woven into the eternal tapestry of Thornewood Manor.',
      choices: [],
    },
    {
      id: 'story-745829103-ending-2',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Shared Sunrise',
      imageUrl:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      narration:
        'You guide Elias beyond the gates as dawn breaks, carrying a single luminous bloom as proof the magic can survive the sun. The manor awakens to laughter, music, and a garden that finally welcomes daylight. Together you transform the ancient estate into a place where both worlds meet—where midnight flowers bloom in protected glades and morning roses climb the walls. Love and legacy take root in the open air, and Elias weeps with joy at his first sunrise in a hundred years, your hand warm in his.',
      choices: [],
    },
    {
      id: 'story-745829103-ending-3',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Keeper\'s Sacrifice',
      imageUrl:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
      narration:
        'You take Elias\'s place as the garden\'s guardian, setting him free to walk into the dawn. He protests, tries to refuse, but you insist with a love that demands his happiness over your own. As he steps through the gate, turning back one last time with tears in his eyes, you feel the binding settle around you like a heavy cloak of responsibility. The garden becomes your world, midnight your eternal companion. But in the flowers\' glow, you see his face, imagine his life in the sun, and find solace in knowing he is finally free to truly live.',
      choices: [],
    },
    {
      id: 'story-745829103-ending-4',
      storyId: 'story-745829103',
      type: 'ending',
      title: 'Fading Petals',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'You choose to release the magic entirely, letting the garden return to what it once was—beautiful, but ordinary. The midnight blooms fade to silver dust, carried away on the morning wind like memories dissolving into the air. Elias becomes mortal beside you, aging rapidly as the enchantment leaves him, but smiling through the transformation. "Thank you," he whispers, "for giving me an ending I never dared to hope for." You leave Thornewood together, hand in hand, to explore a world of ordinary days. The manor stands empty but peaceful.',
      choices: [],
    },
  ],
};
