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
  genre: 'fantasy',
  involvement: 'medium',
  estimatedDuration: 50,
  isPremium: true,
  productId: 'com.app.story.echoes-of-the-moonlit-grove',
  version: '1.0',
  createdAt: '2025-01-12',
  updatedAt: '2025-01-18',
  totalNodes: 25,
  totalEndings: 6,
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
        'A blue-white moon climbs above Blackbriar\'s tangled crowns, and the shard in your pocket warms as if it remembers a promise. Owls fall silent. Between the pines, a narrow path gleams like wet ink, pulling at your boots with a force that feels almost like longing. The shard thrums again, answering something old that stirs in the roots, something that has waited centuries for this particular night and this particular bearer to arrive.',
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
          targetNodeId: 'story-8743921042-2',
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
        'Mist coils at your knees, whispering your name in voices you almost know from dreams half-remembered. Pale moths drift ahead, forming arrows that point deeper into the gloom. A smell of wet iron rides the air like the memory of old battles. Somewhere distant, a bell rings once, then falls silent. The trees lean inward, their branches knitting a canopy that swallows starlight whole, creating a world separate from the one you left behind.',
      choices: [
        {
          id: 'story-8743921042-c3',
          text: 'Answer the whispers with your own name',
          description: 'Risk letting them know you.',
          targetNodeId: 'story-8743921042-3',
          order: 1,
        },
        {
          id: 'story-8743921042-c4',
          text: 'Ignore them and push toward the sound of the bell',
          description: 'Trust your feet, not your ears.',
          targetNodeId: 'story-8743921042-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-3',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Elder Yew',
      imageUrl:
        'https://images.unsplash.com/photo-1465408522361-a6f502298219?w=800',
      narration:
        'A yew older than any temple arches over a slow, clear rill that sings secrets in a language of water and stone. Red berries gleam like droplets of warning against the dark foliage. When you touch the bark, rough as centuries, the tree remembers you—your grandmother\'s voice, a cradle-song about a debt to the grove that your family never fully explained. The water brightens, showing your face crowned in thorns, and you understand that nothing here is merely what it seems.',
      choices: [
        {
          id: 'story-8743921042-c5',
          text: 'Drink from the rill and accept the vision',
          description: 'Accept a memory not your own.',
          targetNodeId: 'story-8743921042-4',
          order: 1,
        },
        {
          id: 'story-8743921042-c6',
          text: 'Take yew bark for a protective charm',
          description: 'Ward first, then walk.',
          targetNodeId: 'story-8743921042-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-4',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Spirit Lanterns',
      imageUrl:
        'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800',
      narration:
        'Light beads rise from the stream and spiral around you, curious as fox kits discovering something new in their territory. They nudge at your chest, your hands, the shard in your pocket with a gentle insistence. When one passes through your palm, your skin sings with a thin, silver ache—the grove judges you and finds a debt unpaid but not unworthy of consideration. The lanterns form patterns that might be words if you knew how to read them.',
      choices: [
        {
          id: 'story-8743921042-c7',
          text: 'Ask the spirits to share what they know',
          description: 'Humble questions earn answers.',
          targetNodeId: 'story-8743921042-5',
          order: 1,
        },
        {
          id: 'story-8743921042-c8',
          text: 'Command the spirits with the yew\'s memory',
          description: 'Authority can bruise or bind.',
          targetNodeId: 'story-8743921042-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-5',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Warden\'s Warning',
      imageUrl:
        'https://images.unsplash.com/photo-1484406566174-9da000c8fee0?w=800',
      narration:
        'A stag with tines like antlered constellations steps from the fog, each hooffall silent on the moss. Moss clings to his shoulders in a mantle older than kingdoms; his eyes milk-white and old as the hills themselves. He breathes frost, and the frost shapes words in the air: "The crown must choose, not be taken. Those who grasp find thorns in their palms." His gaze holds yours, patient, waiting to see what kind of creature you are.',
      choices: [
        {
          id: 'story-8743921042-c9',
          text: 'Pledge to return the crown to the grove after using it',
          description: 'Honor the old balance.',
          targetNodeId: 'story-8743921042-6',
          order: 1,
        },
        {
          id: 'story-8743921042-c10',
          text: 'Swear to end the crown\'s rule forever',
          description: 'Break the cycle completely.',
          targetNodeId: 'story-8743921042-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-6',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Fogbound Bridge',
      imageUrl:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      narration:
        'A rope-and-plank bridge sags over a gorge you cannot see, disappearing into mist that smells of cold stone and deep water. Down below, something breathes like surf against bone, rhythmically, anciently. A bell hangs from the first post, wrapped in spider-silk, as if the forest itself muzzled it for reasons of its own. The planks creak beneath your weight, protesting your passage, and you feel the whole structure sway with the weight of your decision.',
      choices: [
        {
          id: 'story-8743921042-c11',
          text: 'Ring the bell to announce your presence',
          description: 'Wake what sleeps to parley.',
          targetNodeId: 'story-8743921042-7',
          order: 1,
        },
        {
          id: 'story-8743921042-c12',
          text: 'Cross in silence, step by careful step',
          description: 'Trust your balance over noise.',
          targetNodeId: 'story-8743921042-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-7',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Hidden Stair',
      imageUrl:
        'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=800',
      narration:
        'Beyond the bridge, a stair cut into living stone descends into depths where moonlight pools like water in a well. Each step is worn by centuries of forgotten feet, their stories pressed into the rock. The air grows thick with the scent of crushed lavender and old magic that prickles your skin. The shard in your pocket grows warmer with each step downward, humming a tune that matches your heartbeat, calling and answering in turn.',
      choices: [
        {
          id: 'story-8743921042-c13',
          text: 'Descend quickly while the moonlight holds',
          description: 'Haste honors opportunity.',
          targetNodeId: 'story-8743921042-8',
          order: 1,
        },
        {
          id: 'story-8743921042-c14',
          text: 'Mark your path with thread from your cloak',
          description: 'Wisdom prepares for retreat.',
          targetNodeId: 'story-8743921042-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-8',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Thorn Pact',
      imageUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
      narration:
        'A hollow tree opens like a chapel, candles guttering in sap-lit niches that cast shadows dancing with meaning. Whispered names drift through—lineage, debts, vows made and broken across generations. The shard warms until it hurts, and you understand: taking the crown means wearing the grove\'s hunger, becoming part of its endless cycle. The walls weep amber that smells of sacrifice, and you feel the weight of all who came before.',
      choices: [
        {
          id: 'story-8743921042-c15',
          text: 'Accept the pact openly, naming your terms',
          description: 'Power with a price, paid in daylight.',
          targetNodeId: 'story-8743921042-9',
          order: 1,
        },
        {
          id: 'story-8743921042-c16',
          text: 'Refuse and seek a loophole in the wording',
          description: 'There is always another way.',
          targetNodeId: 'story-8743921042-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-9',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Crownless King',
      imageUrl:
        'https://images.unsplash.com/photo-1465935343323-d742334bcbda?w=800',
      narration:
        'A figure of roots and wind sits upon a stone chair, his brow raw where a diadem once rested, his expression neither kind nor cruel. When he turns, you see your own cheekbones, your family\'s eyes—your line once held the crown and failed it. The grove hums, waiting to see what you will make of truth and legacy, whether you will repeat the patterns of your ancestors or forge something new from the broken pieces of the past.',
      choices: [
        {
          id: 'story-8743921042-c17',
          text: 'Kneel and vow to mend what your line broke',
          description: 'Atonement binds strongly.',
          targetNodeId: 'story-8743921042-10',
          order: 1,
        },
        {
          id: 'story-8743921042-c18',
          text: 'Challenge the King to pass the burden willingly',
          description: 'Win freedom or worse weight.',
          targetNodeId: 'story-8743921042-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-10',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'River of Glass',
      imageUrl:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800',
      narration:
        'The river looks still, but its surface is a skin of knives reflecting a second moon that hangs in no earthly sky. A ferry with no ferryman waits, tied by a rope of woven hair that might have been silver once. You can cross by trust—or test the edge and bleed a toll. The spirits whisper that the crown lies beyond the far shore, but they do not promise what state you will be in when you reach it, or what you will have sacrificed.',
      choices: [
        {
          id: 'story-8743921042-c19',
          text: 'Board the waiting ferry in trust',
          description: 'Faith moves what muscle cannot.',
          targetNodeId: 'story-8743921042-11',
          order: 1,
        },
        {
          id: 'story-8743921042-c20',
          text: 'Cut your palm and paint the shard with blood',
          description: 'Purchase passage with sacrifice.',
          targetNodeId: 'story-8743921042-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-11',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Hall of Echoes',
      imageUrl:
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
      narration:
        'Your pledge opens a doorway in the stag\'s shadow, a tear in reality that smells of leaf-mold and starlight. Beyond lies a hall where every voice ever raised in the grove still resonates, layered like sediment. You hear your ancestors making the same promises, breaking the same oaths, weeping the same tears. The pattern repeats until someone chooses differently than those before, until someone breaks the cycle that has spun for centuries.',
      choices: [
        {
          id: 'story-8743921042-c21',
          text: 'Swear a new oath to bind yourself and free your line',
          description: 'One sacrifice for many freedoms.',
          targetNodeId: 'story-8743921042-12',
          order: 1,
        },
        {
          id: 'story-8743921042-c22',
          text: 'Listen to the echoes and learn their mistakes',
          description: 'History instructs the wise.',
          targetNodeId: 'story-8743921042-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-12',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Breaking Point',
      imageUrl:
        'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      narration:
        'Your vow to end the crown\'s rule draws shadows from every corner of the hall, darkness with weight and intention. The grove does not give up its treasures easily, has never done so, will not start now. Ancient forces gather, testing your resolve with visions of power—what you could be, what you could have, the kingdoms you could rule if only you accept rather than destroy. The temptation tastes like honey and ash.',
      choices: [
        {
          id: 'story-8743921042-c23',
          text: 'Resist the visions and hold to your vow',
          description: 'Will over temptation.',
          targetNodeId: 'story-8743921042-13',
          order: 1,
        },
        {
          id: 'story-8743921042-c24',
          text: 'Consider a middle path of transformation',
          description: 'Neither keep nor destroy, but change.',
          targetNodeId: 'story-8743921042-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-13',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Hall of Seeds',
      imageUrl:
        'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=800',
      narration:
        'A cavern opens beneath a painted sky where thousands of seeds hang in cobweb silk, each one a potential world. Each seed beats like a tiny heart, each a future forest waiting for a promise to wake it. The crown sits upon a pedestal of woven roots, pulsing in time with your own pulse, calling out to the shard with a voice that bypasses your ears and speaks directly to your bones. This is the moment you have been walking toward.',
      choices: [
        {
          id: 'story-8743921042-c25',
          text: 'Place the shard into the crown',
          description: 'Complete the instrument of rule.',
          targetNodeId: 'story-8743921042-14',
          order: 1,
        },
        {
          id: 'story-8743921042-c26',
          text: 'Scatter the seeds and smother the crown',
          description: 'Break the cycle forever.',
          targetNodeId: 'story-8743921042-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-14',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Mirror Duel',
      imageUrl:
        'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800',
      narration:
        'On a frozen ridge, the wind hardens into a shape that mirrors you blow for blow, every gesture and stance perfectly reflected. Each strike rings, shaking snow from black pines, and you realize you are fighting yourself—or what you might become. The grove watches without breath, judging which self will serve it best—the one who takes or the one who yields, the one who rules or the one who serves.',
      choices: [
        {
          id: 'story-8743921042-c27',
          text: 'Yield and accept your reflection\'s crown',
          description: 'Let the other you rule.',
          targetNodeId: 'story-8743921042-15',
          order: 1,
        },
        {
          id: 'story-8743921042-c28',
          text: 'Shatter the mirror with the shard',
          description: 'Break the test to set your terms.',
          targetNodeId: 'story-8743921042-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-15',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Price of Magic',
      imageUrl:
        'https://images.unsplash.com/photo-1496851002542-2fe43ae0ef15?w=800',
      narration:
        'Fog folds into a circle of standing stones, every surface carved with offerings—hair, teeth, rings, lullabies written in ash, promises kept and broken. The grove does not bargain without coin, has never been generous without cause. You can buy a path, but you must name your loss. The moon reaches its zenith, demanding decision, and you feel time pressing against your skin like a physical weight.',
      choices: [
        {
          id: 'story-8743921042-c29',
          text: 'Offer your voice for a season',
          description: 'Silence buys guidance.',
          targetNodeId: 'story-8743921042-16',
          order: 1,
        },
        {
          id: 'story-8743921042-c30',
          text: 'Offer a year from your shadow',
          description: 'You will walk thinner.',
          targetNodeId: 'story-8743921042-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-16',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Roots of Memory',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'The earth drinks your warmth and gives back visions—fields burning, a crown descending, a vow made in blood before your birth by someone whose name you bear. You see your ancestor kneel to the grove, accepting stewardship in exchange for protection that lasted generations. The debt has collected interest for three centuries, grown heavy and hungry, and now it recognizes you as kin and heir.',
      choices: [
        {
          id: 'story-8743921042-c31',
          text: 'Accept the ancestral debt as your own',
          description: 'Honor binds tighter than chains.',
          targetNodeId: 'story-8743921042-18',
          order: 1,
        },
        {
          id: 'story-8743921042-c32',
          text: 'Reject the legacy and seek to break it',
          description: 'Some debts should not inherit.',
          targetNodeId: 'story-8743921042-19',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-17',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Dryad\'s Counsel',
      imageUrl:
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
      narration:
        'The dryad leads you through passages where roots form archways and bioluminescent fungi light the way with soft blue-green glow. She speaks of the three trials you have faced and the one that remains: the Trial of Surrender. Each required something different from those who would rule with wisdom—courage, cunning, compassion, and finally the strength to let go. Her voice is like leaves rustling secrets.',
      choices: [
        {
          id: 'story-8743921042-c33',
          text: 'Surrender the shard to the grove\'s keeping',
          description: 'Release to receive.',
          targetNodeId: 'story-8743921042-20',
          order: 1,
        },
        {
          id: 'story-8743921042-c34',
          text: 'Keep the shard and claim the crown',
          description: 'Hold what is yours.',
          targetNodeId: 'story-8743921042-21',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-18',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'The Final Door',
      imageUrl:
        'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800',
      narration:
        'Two doors stand before you in the deepest part of the grove—one of oak banded in silver that gleams with promise, one of yew wrapped in shadow that offers release. The first leads to the grove\'s heart where the crown awaits its bearer. The second leads away, toward a life unburdened by ancient debts but also devoid of ancient power. Both demand a final choice, and neither offers a return.',
      choices: [
        {
          id: 'story-8743921042-c35',
          text: 'Open the silver-banded door',
          description: 'Face what you have sought.',
          targetNodeId: 'story-8743921042-22',
          order: 1,
        },
        {
          id: 'story-8743921042-c36',
          text: 'Turn toward the shadow-wrapped door',
          description: 'Choose freedom over power.',
          targetNodeId: 'story-8743921042-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-19',
      storyId: 'story-8743921042',
      type: 'decision',
      title: 'Breaking the Chain',
      imageUrl:
        'https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=800',
      narration:
        'The grove resists your rejection with a sound like tearing silk. Vines tighten, roots groan, and the air grows heavy with the weight of broken tradition pressing against your chest. You feel the pull of generations urging you to accept, to continue the cycle, to be what they were. But somewhere deep, a crack forms in the ancient pattern, and through it you see the possibility of something new being born.',
      choices: [
        {
          id: 'story-8743921042-c37',
          text: 'Force your way through with the shard\'s power',
          description: 'Break what binds by strength.',
          targetNodeId: 'story-8743921042-24',
          order: 1,
        },
        {
          id: 'story-8743921042-c38',
          text: 'Speak the words of release you learned in the hall',
          description: 'Knowledge dissolves chains.',
          targetNodeId: 'story-8743921042-25',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8743921042-20',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'The Silver Oath',
      imageUrl:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      narration:
        'On a shore where roots drink the tide and the moon hangs heavy as a promise, you swear to carry the grove\'s law beyond its trees. The crown dissolves to light that threads your veins, cold and clean as mountain water. You leave footprints that sprout grass behind you, an oath walking on two legs. The debt becomes a promise kept, and you wander the world as guardian of forgotten places, speaker for the voiceless trees.',
      choices: [],
    },
    {
      id: 'story-8743921042-21',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Dawn Restored',
      imageUrl:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
      narration:
        'The crown accepts the shard, and the grove exhales a spring-scented breath that has been held for centuries. Birds wake as the first gold spills through the trees, singing songs that had been forgotten. You walk out wearing no metal, only a garland of fresh shoots—steward, not sovereign, partner rather than master. The forest hums a quiet yes, and the dawn breaks clear and clean over Blackbriar for the first time in an age.',
      choices: [],
    },
    {
      id: 'story-8743921042-22',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Lost Between Worlds',
      imageUrl:
        'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800',
      narration:
        'The mirror shatters, but so does the path home. You learn the side-trails of the grove, guiding wanderers to safe clearings with a lantern of your own making, becoming part of the landscape itself. Some nights you almost remember a different name, a different life, a sun that did not filter through leaves. The moon is your only clock, and the whispers are your only company, and you find that you do not mind as much as you once would have.',
      choices: [],
    },
    {
      id: 'story-8743921042-23',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Queen of Thorns',
      imageUrl:
        'https://images.unsplash.com/photo-1535966518522-64f8bddc09bc?w=800',
      narration:
        'You bow to your reflection, and it steps forward, wearing your face and a crown of living vine that blooms and withers in cycles too quick to follow. The aurora ripples in the antlers of the watching stag as roots rise to form a throne that is both prison and privilege. You will rule by listening, no blade needed—yet the crown drinks from your sleep each night, and your dreams belong to the grove forever.',
      choices: [],
    },
    {
      id: 'story-8743921042-24',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'Forest Devours',
      imageUrl:
        'https://images.unsplash.com/photo-1473951298521-f0f27c6bda7b?w=800',
      narration:
        'Seeds burst in a rush of roots that crack stone and swallow halls, a green tide that does not care for kings or kindness. The crown smothers under a growth that knows only hunger and reach. Years later, travelers whisper of a new wood that grows too quickly, hungry as a storm, consuming villages and roads. Your name is lost beneath leaves, but the forest remembers, and in its way, it thanks you for the freedom you granted it.',
      choices: [],
    },
    {
      id: 'story-8743921042-25',
      storyId: 'story-8743921042',
      type: 'ending',
      title: 'The Unbound Path',
      imageUrl:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      narration:
        'The words of release dissolve the ancient bonds like morning mist before the sun. The grove sighs—a sound of both loss and relief—and opens a path that leads beyond the forest\'s reach, a way out that was never there before. You walk free, the shard crumbling to dust in your palm, the first of your line to choose their own fate. Behind you, the trees murmur in wonder at the novelty of a story that ended differently.',
      choices: [],
    },
  ],
};
