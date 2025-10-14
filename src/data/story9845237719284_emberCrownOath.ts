import { Story } from '../types';

export const emberCrownOathStory: Story = {
  id: 'story-9845237719284',
  title: 'Ember Crown Oath',
  description:
    'When a mapmaker’s sketch warms to living ember, forgotten waylines flare across the coast. A warlord moves to rekindle the mountain and seize the Crown that now answers your hand. Will you share its fire, break it, or wear it?',
  coverImageUrl:
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400',
  author: 'ChronoCanvas Studio',
  genre: ['fantasy', 'adventure'],
  difficulty: 'medium',
  estimatedDuration: 38,
  isPremium: true,
  productId: 'com.app.story.ember-crown-oath',
  version: '1.0',
  createdAt: '2025-01-18',
  updatedAt: '2025-01-18',
  totalNodes: 24,
  totalEndings: 4,
  startNodeId: 'story-9845237719284-1',
  nodes: [
    {
      id: 'story-9845237719284-1',
      storyId: 'story-9845237719284',
      type: 'start',
      title: 'Cinder Omen',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'Dawn breathes mist through pines as your charcoal map glows from within, lines pulsing like sleeping embers. A circlet of blackened gold, warm to the touch, lies where no crown should—inside your satchel, between pressed leaves. Whispered rumors speak of an Ash Warlord marching inland, gathering fuel and fear. The crown’s heat rises, urging a path before the first village wakes.',
      choices: [
        {
          id: 'story-9845237719284-c1',
          text: 'Head for the relic market.',
          description: 'Seek lore and allies.',
          targetNodeId: 'story-9845237719284-2',
          order: 1,
        },
        {
          id: 'story-9845237719284-c2',
          text: 'Scout the ridge lookout.',
          description: 'Read the land’s intent.',
          targetNodeId: 'story-9845237719284-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-2',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Relic Market',
      imageUrl:
        'https://images.unsplash.com/photo-1470164695408-1d47e6a90d48?w=800',
      narration:
        'Tents ripple like scales; charms clink on strings against the sea breeze. A toothless broker eyes the ember crown’s glow bleeding through your satchel and gestures you closer. “Maps burn truer near the river crossing,” she rasps, “but the Firebrand scouts watch it now.”',
      choices: [
        {
          id: 'story-9845237719284-c3',
          text: 'Buy an arcane map overlay.',
          description: 'Let lines reveal lines.',
          targetNodeId: 'story-9845237719284-4',
          order: 1,
        },
        {
          id: 'story-9845237719284-c4',
          text: 'Shadow a Firebrand scout.',
          description: 'Information at a cost.',
          targetNodeId: 'story-9845237719284-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-3',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Ridge Lookout',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      narration:
        'Black sand ribbons the coast; smoke fingers rise from a far caldera. On the wind: marching drums and the iron-salt smell of quenched blades. A glint moves below—Firebrand scouts skirting the road toward the river.',
      choices: [
        {
          id: 'story-9845237719284-c5',
          text: 'Trail the scouts unseen.',
          description: 'Use height and hush.',
          targetNodeId: 'story-9845237719284-5',
          order: 1,
        },
        {
          id: 'story-9845237719284-c6',
          text: 'Drop into the cavern mouth shortcut.',
          description: 'Old maps show a hollow under the ridge.',
          targetNodeId: 'story-9845237719284-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-4',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Arcane Overlay',
      imageUrl:
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
      narration:
        'Transparent vellum drinks a drop of crown-heat and blooms with hidden paths. A faint sigil points not only to the river but to a “secret passage” etched beneath the cliffs. The broker smiles, gums shining: “Every shortcut is a kind of promise.”',
      choices: [
        {
          id: 'story-9845237719284-c7',
          text: 'Take the river crossing',
          description: 'Open, watched, but swift.',
          targetNodeId: 'story-9845237719284-7',
          order: 1,
        },
        {
          id: 'story-9845237719284-c8',
          text: 'Seek the secret passage.',
          description: 'Risk for stealth.',
          targetNodeId: 'story-9845237719284-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-5',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Firebrand Scout',
      imageUrl:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      narration:
        'A lone scout pauses beneath a wind-bent pine, checking a charcoal schedule. Ash-marks stripe their jaw—loyalty lines to the Warlord. When the crown warms, the scout’s eyes lift, sensing a lord’s presence where none stands.',
      choices: [
        {
          id: 'story-9845237719284-c9',
          text: 'Ambush and question them.',
          description: 'Quick, quiet, decisive.',
          targetNodeId: 'story-9845237719284-9',
          order: 1,
        },
        {
          id: 'story-9845237719284-c10',
          text: 'Slip past toward the river.',
          description: 'Trade answers for time.',
          targetNodeId: 'story-9845237719284-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-6',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Cavern Mouth',
      imageUrl:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
      narration:
        'Basalt arches drink the surf in hollow gulps; lichen glitters like small constellations. Old chisels lie rusting near a narrow stair spiraling down. The crown hums at the threshold, half warning, half welcome.',
      choices: [
        {
          id: 'story-9845237719284-c11',
          text: 'Take the secret passage.',
          description: 'Trust the old cut.',
          targetNodeId: 'story-9845237719284-8',
          order: 1,
        },
        {
          id: 'story-9845237719284-c12',
          text: 'Cross the echo bridge inside.',
          description: 'Speed over stealth.',
          targetNodeId: 'story-9845237719284-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-7',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'River Crossing',
      imageUrl:
        'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      narration:
        'Boats rock against tarred ropes; ferrymen mutter about “oathfire” and “sky shrines.” A chalk-boarded post lists tithe rates from the Warlord’s quartermaster. Villagers watch you as one might watch approaching weather.',
      choices: [
        {
          id: 'story-9845237719284-c13',
          text: 'Parley with the village head.',
          description: 'Win trust, win time.',
          targetNodeId: 'story-9845237719284-11',
          order: 1,
        },
        {
          id: 'story-9845237719284-c14',
          text: 'Test the crown at the ford.',
          description: 'Power invites risk.',
          targetNodeId: 'story-9845237719284-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-8',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Secret Passage',
      imageUrl:
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800',
      narration:
        'You trace a sigil on stone; the seam accepts you with a sigh. Candles that no one lit gutter to life, revealing chalk tallies—many passes, few returns. The corridor slopes toward a crystalline hum.',
      choices: [
        {
          id: 'story-9845237719284-c15',
          text: 'Head to the ember test chamber.',
          description: 'Prove worth, or pay.',
          targetNodeId: 'story-9845237719284-12',
          order: 1,
        },
        {
          id: 'story-9845237719284-c16',
          text: 'Cross the echo bridge.',
          description: 'Shorten the path.',
          targetNodeId: 'story-9845237719284-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-9',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Scout’s Confession',
      imageUrl:
        'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800',
      narration:
        'Pinned against basalt, the scout yields quickly when the crown’s heat prickles the air. “The Warlord feeds a kiln under the mountain,” they whisper, eyes wet with smoke. “When it roars, your villages will kneel.”',
      choices: [
        {
          id: 'story-9845237719284-c17',
          text: 'Spare them and seek village allies.',
          description: 'Mercy buys messengers.',
          targetNodeId: 'story-9845237719284-11',
          order: 1,
        },
        {
          id: 'story-9845237719284-c18',
          text: 'Hurry to study the Warlord’s plan.',
          description: 'Knowledge is leverage.',
          targetNodeId: 'story-9845237719284-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-10',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Echo Bridge',
      imageUrl:
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800',
      narration:
        'A narrow span sings with every step; your breath returns to you in other voices. In the drop below, crystals chime like rain on glass. The crown’s glow threads thin paths over the void, as if offering footholds only you can see.',
      choices: [
        {
          id: 'story-9845237719284-c19',
          text: 'Follow the crystal path to the span.',
          description: 'Toward the sky shrine.',
          targetNodeId: 'story-9845237719284-14',
          order: 1,
        },
        {
          id: 'story-9845237719284-c20',
          text: 'Detour to the ember test.',
          description: 'Prove your claim first.',
          targetNodeId: 'story-9845237719284-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-11',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Village Parley',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'Elders sit with hands like driftwood and eyes like tidepools. They speak of oathfire—flame that binds without burning—and a shrine that chooses bearers by breath, not birth. Children circle at a distance, daring each other to whisper “queen.”',
      choices: [
        {
          id: 'story-9845237719284-c21',
          text: 'Swear the oathfire publicly.',
          description: 'Win hearts, gain weight.',
          targetNodeId: 'story-9845237719284-15',
          order: 1,
        },
        {
          id: 'story-9845237719284-c22',
          text: 'Slip out via the smuggler path.',
          description: 'Allies later; time now.',
          targetNodeId: 'story-9845237719284-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-12',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Ember Test',
      imageUrl:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      narration:
        'A brazier sleeps, rimmed with ash sigils. When you lower the crown, the brazier flares white-gold without consuming. Every heartbeat writes a line of light in the air, a ledger of intent that cannot lie.',
      choices: [
        {
          id: 'story-9845237719284-c23',
          text: 'Bind yourself to protect the villages.',
          description: 'Duty over power.',
          targetNodeId: 'story-9845237719284-15',
          order: 1,
        },
        {
          id: 'story-9845237719284-c24',
          text: 'Claim right to confront the sky shrine.',
          description: 'Authority before action.',
          targetNodeId: 'story-9845237719284-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-13',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Warlord’s Plan',
      imageUrl:
        'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=800',
      narration:
        'Maps pinned to a stolen ledger show fuel depots feeding a subterranean kiln. A marked date looms: “Ignition.” A note in a different hand reads: “The Crown bows to breath—steal the bearer’s voice.”',
      choices: [
        {
          id: 'story-9845237719284-c25',
          text: 'Sabotage the kiln tunnels.',
          description: 'Cut the throat of the plan.',
          targetNodeId: 'story-9845237719284-17',
          order: 1,
        },
        {
          id: 'story-9845237719284-c26',
          text: 'Slip to the smuggler path.',
          description: 'Flank and warn the shrine.',
          targetNodeId: 'story-9845237719284-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-14',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Crystal Span',
      imageUrl:
        'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800',
      narration:
        'Stars comb the sky; the span hums a scale you feel in your teeth. Wind threads the crown with thin, cold fingers, asking questions without language. Footprints lead upward—others came, or will.',
      choices: [
        {
          id: 'story-9845237719284-c27',
          text: 'Climb to the sky shrine.',
          description: 'Seek sanction.',
          targetNodeId: 'story-9845237719284-18',
          order: 1,
        },
        {
          id: 'story-9845237719284-c28',
          text: 'Cut away to the kiln route.',
          description: 'Stop ignition first.',
          targetNodeId: 'story-9845237719284-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-15',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Oathfire',
      imageUrl:
        'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800',
      narration:
        'Flame climbs your wrist like a tame vine and leaves a warm cuff of light. Villagers exhale—a sound like surf relieving itself against shore. The crown softens, less heavy, as if pleased by shared weight.',
      choices: [
        {
          id: 'story-9845237719284-c29',
          text: 'Petition the sky shrine.',
          description: 'Carry communal breath upward.',
          targetNodeId: 'story-9845237719284-18',
          order: 1,
        },
        {
          id: 'story-9845237719284-c30',
          text: 'Seek counsel on the crown’s whispers.',
          description: 'Understand before acting.',
          targetNodeId: 'story-9845237719284-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-16',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Smuggler Path',
      imageUrl:
        'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=800',
      narration:
        'A door appears where a door shouldn’t and opens into salt-stale dark. Crates whisper of quiet defiance: rope, oil, old charts with honest corrections. Footfalls echo—friends or foes learning to be both.',
      choices: [
        {
          id: 'story-9845237719284-c31',
          text: 'From here, strike the kiln.',
          description: 'Straight to the throat.',
          targetNodeId: 'story-9845237719284-17',
          order: 1,
        },
        {
          id: 'story-9845237719284-c32',
          text: 'Listen to the crown’s counsel.',
          description: 'Risk the whisper.',
          targetNodeId: 'story-9845237719284-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-17',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Volcanic Kiln',
      imageUrl:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800',
      narration:
        'Stone lungs heave heat; chains rattle like winter bones. Workers feed timber and fear into a throat of red. A single valve groans—one twist from scream or silence.',
      choices: [
        {
          id: 'story-9845237719284-c33',
          text: 'Jam the valve and flee.',
          description: 'Sabotage beats speeches.',
          targetNodeId: 'story-9845237719284-20',
          order: 1,
        },
        {
          id: 'story-9845237719284-c34',
          text: 'Divert the pressure toward the sky vents.',
          description: 'Buy time for the shrine.',
          targetNodeId: 'story-9845237719284-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-18',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Sky Shrine',
      imageUrl:
        'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?w=800',
      narration:
        'High above stormbanks, bells made of clouded glass ring without hands. A voice like weather asks nothing and knows everything. The crown cools as if in the presence of a parent, waiting to see what you have become.',
      choices: [
        {
          id: 'story-9845237719284-c35',
          text: 'Ask to share the crown’s fire.',
          description: 'Many hands, lighter load.',
          targetNodeId: 'story-9845237719284-20',
          order: 1,
        },
        {
          id: 'story-9845237719284-c36',
          text: 'Ask for strength to break it.',
          description: 'No tyrant, no tool.',
          targetNodeId: 'story-9845237719284-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-19',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Crown Whispers',
      imageUrl:
        'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?w=800',
      narration:
        'When you listen, a chorus answers—past bearers singing through tooth and tongue. They warn of a simpler path: wear the crown deeply, let others orbit your certainty. The warmth tastes like honey; the aftertaste like ash.',
      choices: [
        {
          id: 'story-9845237719284-c37',
          text: 'Reject the lure; seek the shrine.',
          description: 'You are not a furnace.',
          targetNodeId: 'story-9845237719284-18',
          order: 1,
        },
        {
          id: 'story-9845237719284-c38',
          text: 'Lean into sovereignty.',
          description: 'Rule ends arguments.',
          targetNodeId: 'story-9845237719284-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9845237719284-20',
      storyId: 'story-9845237719284',
      type: 'decision',
      title: 'Final Approach',
      imageUrl:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800',
      narration:
        'The mountain holds its breath; the villages hold theirs with it. Your next stroke will decide the shape of heat tomorrow. In your palm, the crown weighs like promise and warning.',
      choices: [
        {
          id: 'story-9845237719284-c39',
          text: 'Claim the crown as sovereign.',
          description: 'Bend the fire to your will.',
          targetNodeId: 'story-9845237719284-21',
          order: 1,
        },
        {
          id: 'story-9845237719284-c40',
          text: 'Share the flame with the villages.',
          description: 'Many bearers, no tyrant.',
          targetNodeId: 'story-9845237719284-22',
          order: 2,
        },
        {
          id: 'story-9845237719284-c41',
          text: 'Walk away into quiet exile.',
          description: 'Refuse both throne and war.',
          targetNodeId: 'story-9845237719284-23',
          order: 3,
        },
        {
          id: 'story-9845237719284-c42',
          text: 'Break the crown at the shrine’s word.',
          description: 'End the question forever.',
          targetNodeId: 'story-9845237719284-24',
          order: 4,
        },
      ],
    },
    {
      id: 'story-9845237719284-21',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Ash Sovereign',
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
      narration:
        'The crown roots through your voice and the mountain kneels. Villages bow—and flinch. Peace arrives quickly, like a storm’s eye: calm and watched. Your maps go out of date; your name does not.',
      choices: [],
    },
    {
      id: 'story-9845237719284-22',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Shared Flame',
      imageUrl:
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      narration:
        'You lift the crown and it divides like bread, embers taking root in many hands. The kiln cools; the Warlord’s plans die choked on community. Festivals bloom where garrisons would have stood, and maps are drawn by chorus.',
      choices: [],
    },
    {
      id: 'story-9845237719284-23',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Quiet Exile',
      imageUrl:
        'https://images.unsplash.com/photo-1520974735194-6e2690b2aa27?w=800',
      narration:
        'You leave the crown where bells remember you fondly. The mountain dozes uneasily, but never wakes angry. Years later, children follow a traveling mapmaker who draws safe paths through ash fields by listening to wind.',
      choices: [],
    },
    {
      id: 'story-9845237719284-24',
      storyId: 'story-9845237719284',
      type: 'ending',
      title: 'Broken Crown',
      imageUrl:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800',
      narration:
        'Gold screams like glass when you strike it on stone; embers leap, then settle as soft, ordinary warmth. The shrine sighs with relief, and history loses a tyrant it might have met. Your hands keep a faint glow on winter nights—enough to boil tea.',
      choices: [],
    },
  ],
};


