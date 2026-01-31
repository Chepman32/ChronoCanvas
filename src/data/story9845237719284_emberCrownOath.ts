import { Story } from '../types';

export const emberCrownOathStory: Story = {
  id: 'story-9845237719284',
  title: 'Ember Crown Oath',
  description:
    'When a mapmaker\'s sketch warms to living ember, forgotten waylines flare across the coast. A warlord moves to rekindle the mountain and seize the Crown that now answers your hand. Will you share its fire, break it, or wear it?',
  coverImageUrl:
    'https://images.unsplash.com/photo-1507400492013-d776c8c05e?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1536152470836-b943b246224c?w=400',
  author: 'ChronoCanvas Studio',
  genre: 'fantasy',
  involvement: 'medium',
  estimatedDuration: 65,
  isPremium: true,
  productId: 'com.app.story.ember-crown-oath',
  version: '1.1',
  createdAt: '2025-01-18',
  updatedAt: '2025-01-30',
  totalNodes: 20,
  totalEndings: 4,
  startNodeId: 'story-9845237719284-1',
  nodes: [
    {
      id: 'story-9845237719284-1',
      storyId: 'story-9845237719284',
      type: 'start',
      title: 'Cinder Omen',
      imageUrl:
        'https://images.unsplash.com/photo-1536152470836-b943b246224c?w=800',
      narration:
        'Dawn breathes mist through pines as your charcoal map glows from within, lines pulsing like sleeping embers. A circlet of blackened gold, warm to the touch, lies where no crown should be—inside your satchel, between pressed leaves. Whispered rumors speak of an Ash Warlord marching inland, gathering fuel and fear. The crown\'s heat rises, urging a path before the first village wakes. You feel its weight settling into your bones, a silent companion demanding purpose.',
      choices: [
        {
          id: 'story-9845237719284-c1',
          text: 'Head for the relic market to seek lore.',
          description: 'Knowledge may reveal the crown\'s secrets.',
          targetNodeId: 'story-9845237719284-2',
          order: 1,
        },
        {
          id: 'story-9845237719284-c2',
          text: 'Scout the ridge lookout for danger.',
          description: 'See the lay of the land first.',
          targetNodeId: 'story-9845237719284-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-2',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'First Crossing',
      imageUrl:
        'https://images.unsplash.com/photo-1536152470836-b943b246224c?w=800',
      narration:
        'Your chosen path converges at an old waystone where three roads meet. The crown thrums against your chest, responding to something ancient in the carved stone. Wind carries the scent of smoke—not hearth fires, but something larger and hungrier. A weathered signpost points toward the river crossing, its paint peeling like dead skin. You sense watchers in the trees, though none reveal themselves. The weight of decision settles upon you as you study the paths.',
      choices: [
        {
          id: 'story-9845237719284-c3',
          text: 'Follow the river road eastward.',
          description: 'The flowing water may hide your passage.',
          targetNodeId: 'story-9845237719284-3',
          order: 1,
        },
        {
          id: 'story-9845237719284-c4',
          text: 'Cut through the pine forest.',
          description: 'Risk the wild paths for greater speed.',
          targetNodeId: 'story-9845237719284-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-3',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'River\'s Edge',
      imageUrl:
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
      narration:
        'The river speaks in tongues of foam and stone, its voice older than the mountains that birthed it. A ferryman\'s boat rocks against mossy pilings, but no ferryman waits. The crown grows warm, then hot, as if recognizing kin in the water\'s restless movement. Across the current, you glimpse movement—scouts in grey cloaks marking trees with ash symbols. They haven\'t seen you yet, but the crossing offers no cover. Time presses like a hand against your back.',
      choices: [
        {
          id: 'story-9845237719284-c5',
          text: 'Wait for nightfall to cross.',
          description: 'Patience may spare you detection.',
          targetNodeId: 'story-9845237719284-4',
          order: 1,
        },
        {
          id: 'story-9845237719284-c6',
          text: 'Wade through the shallows upstream.',
          description: 'Cold water over stealth.',
          targetNodeId: 'story-9845237719284-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-4',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Night\'s Shelter',
      imageUrl:
        'https://images.unsplash.com/photo-1507400492013-d776c8c05e?w=800',
      narration:
        'Darkness finds you in a hollow between ancient roots, the crown your only warmth against the biting wind. Dreams come fragmented—flames consuming maps, a voice like grinding stone speaking words you almost understand. You wake to frost on your eyelashes and the certainty that you\'re being followed. Footprints circle your camp, too large for any human, pressed deep into frozen earth. The trail ahead forks toward a village or upward into the crags.',
      choices: [
        {
          id: 'story-9845237719284-c7',
          text: 'Descend to the village below.',
          description: 'Seek shelter among other souls.',
          targetNodeId: 'story-9845237719284-5',
          order: 1,
        },
        {
          id: 'story-9845237719284-c8',
          text: 'Climb into the mountain crags.',
          description: 'Height offers safety and vision.',
          targetNodeId: 'story-9845237719284-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-5',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Meeting',
      imageUrl:
        'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
      narration:
        'Whether among huts or stones, you encounter her—the broker with eyes like polished obsidian who seems to have waited centuries for this moment. She speaks of waylines and oathfire, of crowns that choose rather than obey. Her fingers trace patterns in the air that leave trails of copper light. "The Warlord knows you carry it," she says. "His kiln grows hungry. You have three days, perhaps four, before the mountain answers his terrible call."',
      choices: [
        {
          id: 'story-9845237719284-c9',
          text: 'Ask about the oathfire ritual.',
          description: 'Learn what binds this ancient power.',
          targetNodeId: 'story-9845237719284-6',
          order: 1,
        },
        {
          id: 'story-9845237719284-c10',
          text: 'Question her about the Warlord\'s weakness.',
          description: 'Every tyrant has a fatal flaw.',
          targetNodeId: 'story-9845237719284-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-6',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Hidden Paths',
      imageUrl:
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
      narration:
        'The broker presses a vellum map into your hands, translucent as a dragonfly\'s wing. When the crown nears it, hidden lines bloom—ancient routes carved by those who bore crowns before. One path leads through caverns beneath the mountain\'s roots. Another winds through the sky shrine where the first crown was forged. Both promise danger. Both offer hope. The crown pulses in rhythm with your heartbeat, as if eager for what comes next.',
      choices: [
        {
          id: 'story-9845237719284-c11',
          text: 'Choose the cavern route below.',
          description: 'Strike at the root of the mountain.',
          targetNodeId: 'story-9845237719284-7',
          order: 1,
        },
        {
          id: 'story-9845237719284-c12',
          text: 'Choose the sky shrine path above.',
          description: 'Seek wisdom at the ancient source.',
          targetNodeId: 'story-9845237719284-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-7',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Threshold',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'Your chosen path leads to a threshold where the air itself seems alive—whipping winds or pressing darkness depending on your approach. Ancient symbols etch the stone around you, responding to the crown\'s glow with faint luminescence of their own. The broker\'s words echo: every bearer must face the test. You sense the weight of history here, of those who passed and those who failed. The crown grows heavier, as if absorbing the gravity of the moment.',
      choices: [
        {
          id: 'story-9845237719284-c13',
          text: 'Press forward into the unknown.',
          description: 'Courage over caution.',
          targetNodeId: 'story-9845237719284-8',
          order: 1,
        },
        {
          id: 'story-9845237719284-c14',
          text: 'Study the symbols before proceeding.',
          description: 'Knowledge may protect you.',
          targetNodeId: 'story-9845237719284-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-8',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Test of Breath',
      imageUrl:
        'https://images.unsplash.com/photo-1507400492013-d776c8c05e?w=800',
      narration:
        'In the center of the chamber stands a brazier long cold, its rim etched with sigils that match the crown\'s pattern. As you approach, the embers stir without fuel, recognizing kin in the gold you carry. This is the test the broker spoke of: the crown will reveal your true nature here, stripping away pretense and doubt. The air shimmers with heat that does not burn but transforms. You feel ancient eyes upon you.',
      choices: [
        {
          id: 'story-9845237719284-c15',
          text: 'Offer the crown to the flames humbly.',
          description: 'Test its response to surrender.',
          targetNodeId: 'story-9845237719284-9',
          order: 1,
        },
        {
          id: 'story-9845237719284-c16',
          text: 'Command the flames with the crown.',
          description: 'Assert dominance over the fire.',
          targetNodeId: 'story-9845237719284-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-9',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'First Binding',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'The flames answer—not with words, but with presence. You feel the weight of every crown-bearer who came before, their triumphs and failures etched into the metal warming your brow. Some ruled with iron fists and left pyres in their wake. Others shared their fire and were forgotten by history but remembered by hearths. The choice you make here will echo through generations. The brazier\'s light casts your shadow long against ancient stone.',
      choices: [
        {
          id: 'story-9845237719284-c17',
          text: 'Swear to protect those without power.',
          description: 'Let mercy guide your reign.',
          targetNodeId: 'story-9845237719284-10',
          order: 1,
        },
        {
          id: 'story-9845237719284-c18',
          text: 'Swear to defeat the Warlord at any cost.',
          description: 'Let victory be your only goal.',
          targetNodeId: 'story-9845237719284-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-10',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Revelation',
      imageUrl:
        'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
      narration:
        'Your oath takes root in the crown, changing its nature. Where it was warm, it now burns with purpose. Visions flood your mind—the Warlord\'s kiln, a throat of stone and flame that feeds on forests and villages alike. You see his face, scarred by ambition, and understand that he too once stood where you stand now. He chose differently. The crown shows you what might be: ash or warmth, tyranny or community. The path narrows toward confrontation.',
      choices: [
        {
          id: 'story-9845237719284-c19',
          text: 'Seek allies among the villages first.',
          description: 'Strength in numbers and unity.',
          targetNodeId: 'story-9845237719284-11',
          order: 1,
        },
        {
          id: 'story-9845237719284-c20',
          text: 'Press on alone to the mountain.',
          description: 'Speed and stealth over force.',
          targetNodeId: 'story-9845237719284-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-11',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Gathering',
      imageUrl:
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
      narration:
        'Whether alone or accompanied, you arrive where the mountain\'s blood meets the sky. Workers in chains tend fires that could swallow cities. The Warlord\'s banners hang limp in the sulfurous air, emblems of a crown broken and reforged into something cruel. You sense the moment approaching—choices narrowing to a point sharp enough to pierce fate itself. The crown grows heavy with possibility, burning with all the futures it might birth.',
      choices: [
        {
          id: 'story-9845237719284-c21',
          text: 'Challenge the Warlord openly.',
          description: 'Let crown face crown in duel.',
          targetNodeId: 'story-9845237719284-12',
          order: 1,
        },
        {
          id: 'story-9845237719284-c22',
          text: 'Infiltrate the kiln from within.',
          description: 'Destroy his power at its source.',
          targetNodeId: 'story-9845237719284-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-12',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Confrontation',
      imageUrl:
        'https://images.unsplash.com/photo-1507400492013-d776c8c05e?w=800',
      narration:
        'You stand at the fulcrum of history. The Warlord awaits in his obsidian hall, or the kiln groans beneath your hands, or the people gather at your back—whatever path brought you here, all paths now converge on decision. The crown\'s fire has taught you its nature: it amplifies the soul that wears it. You understand now what you must become, and what you must refuse. The mountain holds its breath. The world watches your next move.',
      choices: [
        {
          id: 'story-9845237719284-c23',
          text: 'Claim the crown\'s full power for yourself.',
          description: 'Become sovereign over all flame.',
          targetNodeId: 'story-9845237719284-13',
          order: 1,
        },
        {
          id: 'story-9845237719284-c24',
          text: 'Divide the crown\'s power among the people.',
          description: 'Let many share the burden.',
          targetNodeId: 'story-9845237719284-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-13',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Resolution',
      imageUrl:
        'https://images.unsplash.com/photo-1536152470836-b943b246224c?w=800',
      narration:
        'Power flows through you like a river of light, and you understand at last the true nature of the choice before you. The Warlord\'s crown was broken because he sought to command the fire rather than serve it. You stand at the threshold of transformation, twelve decisions behind you, each one a step that shaped your understanding. The mountain\'s fires pulse in rhythm with your heart. The crown answers to your will alone now.',
      choices: [
        {
          id: 'story-9845237719284-c25',
          text: 'Accept the burden of sovereignty.',
          description: 'Rule alone with absolute power.',
          targetNodeId: 'story-9845237719284-14',
          order: 1,
        },
        {
          id: 'story-9845237719284-c26',
          text: 'Share the flame with all who would bear it.',
          description: 'Create a council of equals.',
          targetNodeId: 'story-9845237719284-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-14',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Sanction',
      imageUrl:
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
      narration:
        'The shrine itself seems to lean closer, ancient stones humming with approval or warning. You feel the weight of thirteen choices behind you, each one a thread in the tapestry of your becoming. The crown no longer feels foreign on your brow—it has become part of you, or you part of it. Two paths stretch before you, each one a different answer to the question of power. The Warlord\'s shadow falls across the stone, but his fate is no longer your primary concern.',
      choices: [
        {
          id: 'story-9845237719284-c27',
          text: 'Accept absolute sovereignty.',
          description: 'Rule alone with the full crown.',
          targetNodeId: 'story-9845237719284-15',
          order: 1,
        },
        {
          id: 'story-9845237719284-c28',
          text: 'Distribute power to the villages.',
          description: 'Many hands, lighter burden.',
          targetNodeId: 'story-9845237719284-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-15',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'The Judgment',
      imageUrl:
        'https://images.unsplash.com/photo-1507400492013-d776c8c05e?w=800',
      narration:
        'The mountain itself seems to hold its breath as you make your final deliberation. Fourteen choices have led you to this precipice, each one a step closer to understanding the true nature of the crown and the responsibility it represents. The flames of the brazier dance in patterns that seem almost like writing, telling stories of those who came before. You see now that the crown was never meant to be wielded alone, yet the temptation of absolute power still burns bright in your chest.',
      choices: [
        {
          id: 'story-9845237719284-c29',
          text: 'Accept the final burden of command.',
          description: 'Let none share your authority.',
          targetNodeId: 'story-9845237719284-16',
          order: 1,
        },
        {
          id: 'story-9845237719284-c30',
          text: 'Open your heart to the people\'s will.',
          description: 'Let their voices guide the flame.',
          targetNodeId: 'story-9845237719284-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-16',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Final Approach',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You stand at the threshold of destiny. Behind you lie fourteen choices, each one a step that shaped your understanding of power and responsibility. Before you lies the culmination—four paths born from a single truth: the crown answers to the soul that commands it. The mountain\'s fires pulse in rhythm with your heart. The Warlord\'s shadow falls across the stone, or perhaps it is your own shadow grown vast with possibility. Now comes the ending you have earned.',
      choices: [
        {
          id: 'story-9845237719284-c29',
          text: 'Claim the crown as sovereign.',
          description: 'Bend the fire to your will alone.',
          targetNodeId: 'story-9845237719284-17',
          order: 1,
        },
        {
          id: 'story-9845237719284-c31',
          text: 'Share the flame with the villages.',
          description: 'Many bearers, no tyrant.',
          targetNodeId: 'story-9845237719284-18',
          order: 2,
        },
        {
          id: 'story-9845237719284-c31',
          text: 'Walk away into quiet exile.',
          description: 'Refuse both throne and war.',
          targetNodeId: 'story-9845237719284-19',
          order: 3,
        },
        {
          id: 'story-9845237719284-c33',
          text: 'Break the crown at the shrine\'s word.',
          description: 'End the question forever.',
          targetNodeId: 'story-9845237719284-20',
          order: 4,
        },
      ],
    },
    {
      id: 'story-9845237719284-17',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Ash Sovereign',
      imageUrl:
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
      narration:
        'The crown roots through your voice and the mountain kneels. Villages bow—and flinch. Peace arrives quickly, like a storm\'s eye: calm and watched. Your maps go out of date; your name does not. In the silent halls of your fortress, you sometimes remember the mapmaker you were, the person who chose power over people. The crown keeps you warm, but nothing else touches you now. You rule eternal over an empire of ash and memory.',
      choices: [],
    },
    {
      id: 'story-9845237719284-18',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Shared Flame',
      imageUrl:
        'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
      narration:
        'You lift the crown and it divides like bread, embers taking root in many hands. The kiln cools; the Warlord\'s plans die choked on community. Festivals bloom where garrisons would have stood, and maps are drawn by chorus. Years later, children gather around hearths that never go cold, tended by elders who bear a fraction of what you once carried. You wander among them, nameless and content, watching the fire you shared warm generations.',
      choices: [],
    },
    {
      id: 'story-9845237719284-19',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Quiet Exile',
      imageUrl:
        'https://images.unsplash.com/photo-1536152470836-b943b246224c?w=800',
      narration:
        'You leave the crown where bells remember you fondly, on the altar where it first found you. The mountain dozes uneasily, but never wakes angry. Years later, children follow a traveling mapmaker who draws safe paths through ash fields by listening to wind. You never tell them what you carried, what you refused. In your satchel, pressed between leaves, a single ember still glows—enough to warm your hands on the coldest nights, never more.',
      choices: [],
    },
    {
      id: 'story-9845237719284-20',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Broken Crown',
      imageUrl:
        'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=800',
      narration:
        'Gold screams like glass when you strike it on stone; embers leap, then settle as soft, ordinary warmth. The shrine sighs with relief, and history loses a tyrant it might have met. Your hands keep a faint glow on winter nights—enough to boil tea, to warm a traveler\'s hands, to light a candle when darkness falls. No crown ever chooses another bearer from these mountains. The Warlord\'s kiln goes cold. The people make their own fires now.',
      choices: [],
    },
  ],
};
