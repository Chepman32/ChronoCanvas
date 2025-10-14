import { Story } from '../types';

export const echoesMoonlitGroveStory: Story = {
  id: 'story-8743921042',
  title: 'Echoes of the Moonlit Grove',
  description:
    'When the moon rises full over Blackbriar Forest, an old bargain wakes. You carry a shard of a broken sigil that hums near the trees, calling you toward a forgotten crown and a debt the grove intends to collect. Choose allies, honor, or power—but the grove always takes its due.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1538964173425-93884d739596?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400',
  author: 'Daria Voronova',
  genre: ['fantasy', 'adventure'],
  difficulty: 'medium',
  estimatedDuration: 35,
  isPremium: true,
  productId: 'com.app.story.echoes-of-the-moonlit-grove',
  version: '1.0',
  createdAt: '2025-01-12',
  updatedAt: '2025-01-18',
  totalNodes: 22,
  totalEndings: 5,
  startNodeId: 'story-8743921042-1',
  nodes: [
    {
      id: 'story-8743921042-1',
      storyId: 'story-8743921042',
      type: 'start',
      title: 'Moonlit Omen',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'A blue-white moon climbs above Blackbriar’s tangled crowns, and the shard in your pocket warms as if it remembers a promise. Owls fall silent. Between the pines, a narrow path gleams like wet ink, pulling at your boots. The shard thrums again, answering something old that stirs in the roots.',
      choices: [
        {
          id: 'story-8743921042-c1',
          text: 'Follow the moonlit path into the grove',
          description: 'The shard wants you deeper.',
          targetNodeId: 'story-8743921042-2',
          order: 1,
        },
        {
          id: 'story-8743921042-c2',
          text: 'Study the sigil shard and search for markings nearby',
          description: 'Knowledge before risk.',
          targetNodeId: 'story-8743921042-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-2',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Whispering Path',
      imageUrl:
        'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800',
      narration:
        'Mist coils at your knees, whispering your name in voices you almost know. Pale moths drift ahead, forming arrows that point deeper. A smell of wet iron rides the air. Somewhere distant, a bell rings once.',
      choices: [
        {
          id: 'story-8743921042-c3',
          text: 'Answer the whispers',
          description: 'Risk letting them in.',
          targetNodeId: 'story-8743921042-4',
          order: 1,
        },
        {
          id: 'story-8743921042-c4',
          text: 'Ignore them and push toward the sound of the bell',
          description: 'Trust your feet, not your ears.',
          targetNodeId: 'story-8743921042-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-3',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Shattered Sigil',
      imageUrl:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      narration:
        'The shard is a crescent of dark glass etched with thorny runes. When you breathe across it, frost halos the markings and a second pattern blooms—a crown without a wearer. The wood answers with a low groan, as if turning in sleep.',
      choices: [
        {
          id: 'story-8743921042-c5',
          text: 'Press the shard to the earth and listen',
          description: 'Speak in the old way.',
          targetNodeId: 'story-8743921042-5',
          order: 1,
        },
        {
          id: 'story-8743921042-c6',
          text: 'Break a splinter from the shard to draw blood-runes',
          description: 'Power courts a price.',
          targetNodeId: 'story-8743921042-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-4',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Elder Yew',
      imageUrl:
        'https://images.unsplash.com/photo-1465408522361-a6f502298219?w=800',
      narration:
        'A yew older than any temple arches over a slow, clear rill. Red berries gleam like droplets of warning. When you touch the bark, the tree remembers you—your grandmother’s voice, a cradle-song about a debt to the grove. The water brightens, showing your face crowned in thorns.',
      choices: [
        {
          id: 'story-8743921042-c7',
          text: 'Drink from the rill',
          description: 'Accept a memory not your own.',
          targetNodeId: 'story-8743921042-7',
          order: 1,
        },
        {
          id: 'story-8743921042-c8',
          text: 'Take yew bark for a protective charm',
          description: 'Ward first, then walk.',
          targetNodeId: 'story-8743921042-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-5',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Fogbound Bridge',
      imageUrl:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      narration:
        'A rope-and-plank bridge sags over a gorge you cannot see. Down below, something breathes like surf against bone. A bell hangs from the first post, wrapped in spider-silk, as if the forest itself muzzled it.',
      choices: [
        {
          id: 'story-8743921042-c9',
          text: 'Ring the bell',
          description: 'Wake what sleeps to parley.',
          targetNodeId: 'story-8743921042-8',
          order: 1,
        },
        {
          id: 'story-8743921042-c10',
          text: 'Cross in silence',
          description: 'Trust your balance.',
          targetNodeId: 'story-8743921042-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-6',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Market of Shadows',
      imageUrl:
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
      narration:
        'Lanterns bloom along a crooked lane where no city should be. Stalls sell bottled rain, thimble-moons, and names sewn into ribbon. A mask-maker gestures you closer, offering a face woven from briar and bright thread.',
      choices: [
        {
          id: 'story-8743921042-c11',
          text: 'Buy the briar mask with a drop of blood',
          description: 'Masks deceive, but protect.',
          targetNodeId: 'story-8743921042-9',
          order: 1,
        },
        {
          id: 'story-8743921042-c12',
          text: 'Trade the shard for a guide',
          description: 'Information over artifacts.',
          targetNodeId: 'story-8743921042-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-7',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Spirit Lanterns',
      imageUrl:
        'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800',
      narration:
        'Light beads rise from the stream and spiral around you, curious as fox kits. They nudge at your chest, your hands, the shard. When one passes through your palm, your skin sings with a thin, silver ache—the grove judges you and finds a debt unpaid.',
      choices: [
        {
          id: 'story-8743921042-c13',
          text: 'Ask the spirits to share what they know',
          description: 'Humble questions earn answers.',
          targetNodeId: 'story-8743921042-11',
          order: 1,
        },
        {
          id: 'story-8743921042-c14',
          text: 'Command the spirits with the yew’s memory',
          description: 'Authority can bruise.',
          targetNodeId: 'story-8743921042-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-8',
      storyId: 'story-8743921042',
      type: 'decision',
      title: "Warden's Warning",
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'A stag with tines like antlered constellations steps from the fog. Moss clings to his shoulders in a mantle; his eyes milk-white and old. He breathes frost, and the frost shapes words: “The crown must choose, not be taken.”',
      choices: [
        {
          id: 'story-8743921042-c15',
          text: 'Pledge to return the crown to the grove',
          description: 'Honor the old balance.',
          targetNodeId: 'story-8743921042-12',
          order: 1,
        },
        {
          id: 'story-8743921042-c16',
          text: 'Swear to end the crown’s rule',
          description: 'Break the cycle.',
          targetNodeId: 'story-8743921042-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-9',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Undercroft Gate',
      imageUrl:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      narration:
        'Carved steps descend into red stone where cold air spills like water. At the bottom yawns a door of ribbed rock and moon-metal studs. The shard in your pocket trembles, eager to be whole.',
      choices: [
        {
          id: 'story-8743921042-c17',
          text: 'Fit the shard to the moon-metal seam',
          description: 'Complete what was broken.',
          targetNodeId: 'story-8743921042-13',
          order: 1,
        },
        {
          id: 'story-8743921042-c18',
          text: 'Refuse the pull and take the higher stair',
          description: 'Seek another path upward.',
          targetNodeId: 'story-8743921042-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-10',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Scribe of Echoes',
      imageUrl:
        'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=800',
      narration:
        'Your guide leads you to a stone terrace where wind writes on slate. The Scribe is a hooded woman whose hair moves like ink in water. She listens to your shard, then draws three sigils that smell of rain and iron.',
      choices: [
        {
          id: 'story-8743921042-c19',
          text: 'Ask for a path to the crown',
          description: 'Direct is dangerous.',
          targetNodeId: 'story-8743921042-11',
          order: 1,
        },
        {
          id: 'story-8743921042-c20',
          text: 'Ask how to break the grove’s claim',
          description: 'Undo the bargain.',
          targetNodeId: 'story-8743921042-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-11',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'River of Glass',
      imageUrl:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800',
      narration:
        'The river looks still, but its surface is a skin of knives reflecting a second moon. A ferry with no ferryman waits, tied by a rope of woven hair. You can cross by trust—or test the edge and bleed a toll.',
      choices: [
        {
          id: 'story-8743921042-c21',
          text: 'Board the waiting ferry',
          description: 'Trust the grove’s ritual.',
          targetNodeId: 'story-8743921042-15',
          order: 1,
        },
        {
          id: 'story-8743921042-c22',
          text: 'Cut your palm and paint the shard',
          description: 'Purchase safe passage.',
          targetNodeId: 'story-8743921042-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-12',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Thorn Pact',
      imageUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
      narration:
        'A hollow tree opens like a chapel, candles guttering in sap-lit niches. Whispered names drift through—lineage, debts, vows. The shard warms until it hurts, and you understand: taking the crown means wearing the grove’s hunger.',
      choices: [
        {
          id: 'story-8743921042-c23',
          text: 'Accept the pact openly',
          description: 'Power with a price, paid in daylight.',
          targetNodeId: 'story-8743921042-15',
          order: 1,
        },
        {
          id: 'story-8743921042-c24',
          text: 'Refuse and seek a loophole',
          description: 'There is always wording.',
          targetNodeId: 'story-8743921042-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-13',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Crownless King',
      imageUrl:
        'https://images.unsplash.com/photo-1465935343323-d742334bcbda?w=800',
      narration:
        'A figure of roots and wind sits upon a stone chair, his brow raw where a diadem once rested. When he turns, you see your own cheekbones, your family’s eyes—your line once held the crown. The grove hums, waiting to see what you will make of truth.',
      choices: [
        {
          id: 'story-8743921042-c25',
          text: 'Kneel and vow to mend what your line broke',
          description: 'Atonement binds strongly.',
          targetNodeId: 'story-8743921042-16',
          order: 1,
        },
        {
          id: 'story-8743921042-c26',
          text: 'Challenge the King to pass the burden',
          description: 'Win freedom or worse weight.',
          targetNodeId: 'story-8743921042-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-14',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Moonspire Stairs',
      imageUrl:
        'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=800',
      narration:
        'Stairs chipped from bone-white stone zigzag into fog. Each turn shows the moon larger until it fills the sky with a cold face. Your breath feathers; your resolve hardens to match the climb.',
      choices: [
        {
          id: 'story-8743921042-c27',
          text: 'Climb faster to reach the spire first',
          description: 'Seize initiative.',
          targetNodeId: 'story-8743921042-16',
          order: 1,
        },
        {
          id: 'story-8743921042-c28',
          text: 'Pause to etch a ward into the step',
          description: 'Protection over haste.',
          targetNodeId: 'story-8743921042-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-15',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Hall of Seeds',
      imageUrl:
        'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=800',
      narration:
        'A cavern opens beneath a painted sky where thousands of seeds hang in cobweb silk. Each seed beats like a tiny heart, each a future forest waiting for a promise. The crown sits upon a pedestal of woven roots, pulsing in time with your own pulse.',
      choices: [
        {
          id: 'story-8743921042-c29',
          text: 'Place the shard into the crown',
          description: 'Complete the instrument of rule.',
          targetNodeId: 'story-8743921042-18',
          order: 1,
        },
        {
          id: 'story-8743921042-c30',
          text: 'Scatter the seeds and smother the crown',
          description: 'Break the cycle forever.',
          targetNodeId: 'story-8743921042-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-16',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Mirror Duel',
      imageUrl:
        'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      narration:
        'On a frozen ridge, the wind hardens into a shape that mirrors you blow for blow. Each strike rings, shaking snow from black pines. The grove watches without breath, judging which self will serve it best.',
      choices: [
        {
          id: 'story-8743921042-c31',
          text: 'Yield and accept your reflection’s crown',
          description: 'Let the other you rule.',
          targetNodeId: 'story-8743921042-20',
          order: 1,
        },
        {
          id: 'story-8743921042-c32',
          text: 'Shatter the mirror with the shard',
          description: 'Break the test to set your terms.',
          targetNodeId: 'story-8743921042-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-17',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Price of Magic',
      imageUrl:
        'https://images.unsplash.com/photo-1496851002542-2fe43ae0ef15?w=800',
      narration:
        'Fog folds into a circle of standing stones, every surface carved with offerings—hair, teeth, rings, lullabies written in ash. The grove does not bargain without coin. You can buy a path, but you must name your loss.',
      choices: [
        {
          id: 'story-8743921042-c33',
          text: 'Offer your voice for a season',
          description: 'Silence buys guidance.',
          targetNodeId: 'story-8743921042-21',
          order: 1,
        },
        {
          id: 'story-8743921042-c34',
          text: 'Offer a year from your shadow',
          description: 'You will walk thinner.',
          targetNodeId: 'story-8743921042-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-18',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Dawn Restored',
      imageUrl:
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
      narration:
        'The crown accepts the shard, and the grove exhales a spring-scented breath. Birds wake as the first gold spills through the trees. You walk out wearing no metal, only a garland of fresh shoots—steward, not sovereign. The forest hums a quiet yes.',
      choices: [],
    },
    {
      id: 'story-8743921042-19',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Forest Devours',
      imageUrl:
        'https://images.unsplash.com/photo-1473951298521-f0f27c6bda7b?w=800',
      narration:
        'Seeds burst in a rush of roots that crack stone and swallow halls. The crown smothers under a green tide that does not care for kings. Years later, travelers whisper of a new wood that grows too quickly, hungry as a storm. Your name is lost beneath leaves.',
      choices: [],
    },
    {
      id: 'story-8743921042-20',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Queen of Thorns',
      imageUrl:
        'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
      narration:
        'You bow to your reflection, and it steps forward, wearing your face and a crown of living vine. The aurora ripples in the antlers of the watching stag as roots rise to form a throne. You will rule by listening, no blade needed—yet the crown drinks a little from your sleep each night.',
      choices: [],
    },
    {
      id: 'story-8743921042-21',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Lost Between Worlds',
      imageUrl:
        'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800',
      narration:
        'The mirror shatters, but so does the path home. You learn the side-trails of the grove, guiding wanderers to safe clearings with a lantern of your own making. Some nights you almost remember a different name. The moon is your only clock.',
      choices: [],
    },
    {
      id: 'story-8743921042-22',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'The Silver Oath',
      imageUrl:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      narration:
        'On a shore where roots drink the tide, you swear to carry the grove’s law beyond its trees. The crown dissolves to light that threads your veins, cold and clean. You leave footprints that sprout grass behind you, an oath walking on two legs. The debt becomes a promise kept.',
      choices: [],
    },
  ],
};


