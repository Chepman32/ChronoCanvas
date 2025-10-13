import { Story } from '../types';

export const lettersOnTheWindStory: Story = {
  id: 'story-9328745634021',
  title: 'Letters on the Wind',
  description:
    'Bottled notes wash ashore at dawn, each penned in the same graceful hand. When you finally meet the writer, a storm bears down and a developer eyes your boathouse. Love, like tide, asks: will you anchor--or sail?',
  coverImageUrl:
    'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
  author: 'ChronoCanvas Studio',
  genre: ['romance', 'adventure'],
  difficulty: 'easy',
  estimatedDuration: 30,
  isPremium: true,
  productId: 'com.app.story.letters-on-the-wind',
  version: '1.0',
  createdAt: '2025-01-17',
  updatedAt: '2025-01-17',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-9328745634021-1',
  nodes: [
    {
      id: 'story-9328745634021-1',
      storyId: 'story-9328745634021',
      type: 'start',
      title: 'Bottled Dawn',
      imageUrl:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      narration:
        'A glass bottle nudges your boot at first light, sealed with blue wax and a braided thread of sea grass. Inside: a letter written in sweeping ink, addressed "To the one who listens." The air smells like citrus and salt; the lighthouse lamp blinks its last amber before day.',
      choices: [
        {
          id: 'story-9328745634021-c1',
          text: 'Open the letter at the lighthouse.',
          description: 'Read where the wind is loudest.',
          targetNodeId: 'story-9328745634021-2',
          order: 1,
        },
        {
          id: 'story-9328745634021-c2',
          text: 'Carry it to your boathouse to savor.',
          description: 'A quiet place for tender words.',
          targetNodeId: 'story-9328745634021-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-2',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Lamp and Letter',
      imageUrl:
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800',
      narration:
        'Wind leans against the lighthouse rail as gulls draft on the upcurrent. The letter speaks of leaving cities for names written in water, of boats that know their owners by heartbeat. A postscript: "If you come at dusk, bring a story."',
      choices: [
        {
          id: 'story-9328745634021-c3',
          text: 'Write a reply immediately.',
          description: 'Ink answers ink.',
          targetNodeId: 'story-9328745634021-6',
          order: 1,
        },
        {
          id: 'story-9328745634021-c4',
          text: 'Search the harbor for the writer.',
          description: 'Follow rumor and rope.',
          targetNodeId: 'story-9328745634021-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-3',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Regatta Talk',
      imageUrl:
        'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      narration:
        'Sails freckle the bay as crews practice tacks for tomorrow\'s regatta. A notice board flaps: storm front possible, races tentative. You recognize a looping Q from the letter on a flyer corner--Amaya\'s hand?',
      choices: [
        {
          id: 'story-9328745634021-c5',
          text: 'Ask the harbormaster about Amaya.',
          description: 'Names travel faster than wind.',
          targetNodeId: 'story-9328745634021-8',
          order: 1,
        },
        {
          id: 'story-9328745634021-c6',
          text: 'Leave a note at the pier for dusk.',
          description: 'Let serendipity work.',
          targetNodeId: 'story-9328745634021-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-4',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'String of Notes',
      imageUrl:
        'https://images.unsplash.com/photo-1478117337888-6f6f7eae7cf1?w=800',
      narration:
        'Wind bells chime along a string of clipped letters outside a market stall. The vendor smiles: "She trades ink like others trade salt. Says every town speaks its own handwriting." One card reads: "Lighthouse. Dusk."',
      choices: [
        {
          id: 'story-9328745634021-c7',
          text: 'Wait at the lighthouse with tea.',
          description: 'Hospitality in a thermos.',
          targetNodeId: 'story-9328745634021-9',
          order: 1,
        },
        {
          id: 'story-9328745634021-c8',
          text: 'Search the craft market for her booth.',
          description: 'Ink leaves trails.',
          targetNodeId: 'story-9328745634021-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-5',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Boathouse Quiet',
      imageUrl:
        'https://images.unsplash.com/photo-1476231790875-016a80c274f0?w=800',
      narration:
        'The boathouse smells of cedar and rope; hulls rest like sleeping whales. You unfold the letter on your workbench, and the words settle into your ribs. Outside, the tide climbs a rung on the ladder.',
      choices: [
        {
          id: 'story-9328745634021-c9',
          text: 'Craft a wooden reply token.',
          description: 'Carve feelings into cedar.',
          targetNodeId: 'story-9328745634021-6',
          order: 1,
        },
        {
          id: 'story-9328745634021-c10',
          text: 'Head to the lighthouse early.',
          description: 'Eager hearts arrive first.',
          targetNodeId: 'story-9328745634021-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-6',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Ink Reply',
      imageUrl:
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
      narration:
        'Your pen hesitates, then the words spill: a story about a boat that learned its owner\'s heartbeat. You sand the cedar token smooth and tie it with blue thread. The wind steals a corner of the page and laughs.',
      choices: [
        {
          id: 'story-9328745634021-c11',
          text: 'Leave the reply on the lighthouse steps.',
          description: 'The wind will deliver.',
          targetNodeId: 'story-9328745634021-9',
          order: 1,
        },
        {
          id: 'story-9328745634021-c12',
          text: 'Ask the harbor courier to find Amaya.',
          description: 'Runners beat tides.',
          targetNodeId: 'story-9328745634021-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-7',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Cliff Road',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      narration:
        'The high road curls above surf that chews the cliffs in patient bites. A van marked "Seafront Redevelopments" idles at a turnout, surveying the old boathouse. In your pocket, the letter warms like a held hand.',
      choices: [
        {
          id: 'story-9328745634021-c13',
          text: 'Photograph the van and license.',
          description: 'Evidence for a fight.',
          targetNodeId: 'story-9328745634021-13',
          order: 1,
        },
        {
          id: 'story-9328745634021-c14',
          text: 'Head to town council office.',
          description: 'Get ahead of the plan.',
          targetNodeId: 'story-9328745634021-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-8',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Harbor Market',
      imageUrl:
        'https://images.unsplash.com/photo-1470164695408-1d47e6a90d48?w=800',
      narration:
        'Fishmongers sing prices; children chase each other with kites shaped like gulls. At a stall of handmade paper, a woman with ink-blotted fingers looks up. "I was hoping you\'d answer," Amaya says, voice bright as sea glass.',
      choices: [
        {
          id: 'story-9328745634021-c15',
          text: 'Invite her to the boathouse.',
          description: 'Show her your world.',
          targetNodeId: 'story-9328745634021-16',
          order: 1,
        },
        {
          id: 'story-9328745634021-c16',
          text: 'Walk the pier together at dusk.',
          description: 'Learn her tide and tempo.',
          targetNodeId: 'story-9328745634021-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-9',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Dusk on the Pier',
      imageUrl:
        'https://images.unsplash.com/photo-1473220464491-7820d5f2b0fb?w=800',
      narration:
        'Lanterns bead the pier in a patient line; beneath them, water knits and unknits. You and Amaya trade stories like shells, light catching on their edges. Clouds bruise the horizon--tomorrow\'s regatta may race the weather.',
      choices: [
        {
          id: 'story-9328745634021-c17',
          text: 'Offer to crew together in the regatta.',
          description: 'Trust is a shared tack.',
          targetNodeId: 'story-9328745634021-3',
          order: 1,
        },
        {
          id: 'story-9328745634021-c18',
          text: 'Plan a storm watch at the lighthouse.',
          description: 'If not racing, then listening.',
          targetNodeId: 'story-9328745634021-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-10',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Bookshop Corner',
      imageUrl:
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
      narration:
        'A bell tinkles as you duck into the harbor bookshop; the owner knows every love story by salt-smell. You find a sea journal with blank charts, a perfect place to chart a life together. The first page waits for a compass rose.',
      choices: [
        {
          id: 'story-9328745634021-c19',
          text: 'Buy the journal as a gift.',
          description: 'A promise in paper.',
          targetNodeId: 'story-9328745634021-9',
          order: 1,
        },
        {
          id: 'story-9328745634021-c20',
          text: 'Leave a pressed wildflower inside for Amaya to find.',
          description: 'Hide a small joy.',
          targetNodeId: 'story-9328745634021-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-11',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Storm Watch',
      imageUrl:
        'https://images.unsplash.com/photo-1491555104028-153e962123f2?w=800',
      narration:
        'Thunder rolls like barrels along the horizon. Rain teases, then commits. Beside you, Amaya wraps her scarf twice and grins: "We can\'t outshout weather--but we can listen better."',
      choices: [
        {
          id: 'story-9328745634021-c21',
          text: 'Share a difficult truth from your past.',
          description: 'Lay keel before sail.',
          targetNodeId: 'story-9328745634021-15',
          order: 1,
        },
        {
          id: 'story-9328745634021-c22',
          text: 'Tell a hopeful plan for the boathouse.',
          description: 'Invite her into tomorrow.',
          targetNodeId: 'story-9328745634021-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-12',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Council Files',
      imageUrl:
        'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=800',
      narration:
        'Town records smell of dust and lemon oil. A folded plan shows the boathouse labeled "derelict," slated for demolition after the storm "for safety." A clerk shrugs: "If someone proposed a community workshop instead..."',
      choices: [
        {
          id: 'story-9328745634021-c23',
          text: 'Draft a community workshop proposal tonight.',
          description: 'Beat the storm and the bulldozers.',
          targetNodeId: 'story-9328745634021-13',
          order: 1,
        },
        {
          id: 'story-9328745634021-c24',
          text: 'Abandon the fight; ask Amaya to leave with you.',
          description: 'Choose love over place.',
          targetNodeId: 'story-9328745634021-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-13',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Harbor Aerial',
      imageUrl:
        'https://images.unsplash.com/photo-1526404429830-91128a373d6c?w=800',
      narration:
        'From the bluff, the harbor looks like a hand full of coins. You gather photos, names, and signatures; the storm clock counts down. Amaya scribbles flourishes on the petition\'s header that make the paper feel brave.',
      choices: [
        {
          id: 'story-9328745634021-c25',
          text: 'Submit petition to the council chair.',
          description: 'Make it official.',
          targetNodeId: 'story-9328745634021-17',
          order: 1,
        },
        {
          id: 'story-9328745634021-c26',
          text: 'Rally the regatta crews at the pier.',
          description: 'Many voices carry.',
          targetNodeId: 'story-9328745634021-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-14',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Cliffside Path',
      imageUrl:
        'https://images.unsplash.com/photo-1474073705359-5da2a8270c64?w=800',
      narration:
        'Wind yanks at pennants as crews secure lines against the front. The developer\'s rep frowns at the swelling crowd, then at your petition. Waves smack pilings like polite applause turning insistent.',
      choices: [
        {
          id: 'story-9328745634021-c27',
          text: 'Stage a calm sit-in at the boathouse.',
          description: 'Bodies are anchors.',
          targetNodeId: 'story-9328745634021-17',
          order: 1,
        },
        {
          id: 'story-9328745634021-c28',
          text: 'Offer a compromise: phased renovation.',
          description: 'Make safety an ally.',
          targetNodeId: 'story-9328745634021-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-15',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Kitchen Table',
      imageUrl:
        'https://images.unsplash.com/photo-1496284778298-90fcb5a91a4a?w=800',
      narration:
        'You speak of a love that sank and a year spent patching leaks you couldn\'t name. Amaya listens without fixing, then folds your story like a sail, neat and ready. The kettle clicks; outside, rain rehearses.',
      choices: [
        {
          id: 'story-9328745634021-c29',
          text: 'Ask Amaya to stay the season.',
          description: 'A long letter, written together.',
          targetNodeId: 'story-9328745634021-16',
          order: 1,
        },
        {
          id: 'story-9328745634021-c30',
          text: 'Promise to follow her next town.',
          description: 'Love as pilgrimage.',
          targetNodeId: 'story-9328745634021-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-16',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Workshop Dream',
      imageUrl:
        'https://images.unsplash.com/photo-1496386460464-083dd9f1f2e8?w=800',
      narration:
        'You walk her through the boathouse plans: benches, loaner tools, Friday potluck varnish nights. She sketches signage as if it already hangs, brush letters dancing. Hope smells like cedar and warm bread.',
      choices: [
        {
          id: 'story-9328745634021-c31',
          text: 'Push to secure permits before the storm.',
          description: 'Paper shields timber.',
          targetNodeId: 'story-9328745634021-17',
          order: 1,
        },
        {
          id: 'story-9328745634021-c32',
          text: 'Race the regatta together to win donations.',
          description: 'A win turns tides.',
          targetNodeId: 'story-9328745634021-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-17',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Lighthouse Stairs',
      imageUrl:
        'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800',
      narration:
        'You climb until your thighs burn, petition clamped in your teeth as wind jostles the pages. The council chair meets you halfway up, amused and moved. "All right," she says, "convince me."',
      choices: [
        {
          id: 'story-9328745634021-c33',
          text: 'Make a heartfelt plea about community.',
          description: 'Love as infrastructure.',
          targetNodeId: 'story-9328745634021-19',
          order: 1,
        },
        {
          id: 'story-9328745634021-c34',
          text: 'Present the safety-first renovation plan.',
          description: 'Practical beats poetic.',
          targetNodeId: 'story-9328745634021-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9328745634021-18',
      storyId: 'story-9328745634021',
      type: 'decision',
      title: 'Edge of Weather',
      imageUrl:
        'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800',
      narration:
        'The storm\'s first hard line crosses the bay, erasing the far shore. Amaya threads her fingers with yours: "We can leave tonight. Or we can stay and build something that needs both of us." Lightning writes its fast, bright letters.',
      choices: [
        {
          id: 'story-9328745634021-c35',
          text: 'Leave together for new coasts.',
          description: 'Love as horizon.',
          targetNodeId: 'story-9328745634021-21',
          order: 1,
        },
        {
          id: 'story-9328745634021-c36',
          text: 'Stay and fight for the boathouse.',
          description: 'Love as anchor.',
          targetNodeId: 'story-9328745634021-20',
          order: 2,
        },
      ],
    },

    // ENDINGS
    {
      id: 'story-9328745634021-19',
      storyId: 'story-9328745634021',
      type: 'ending',
      title: 'Granted Harbor',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      narration:
        'The council approves your workshop with a rubber stamp and a grin. On opening night, lanterns sway like constellations hung low; hands that once waved goodbye learn to plane and splice. Amaya paints the sign: "Together, Afloat."',
      choices: [],
    },
    {
      id: 'story-9328745634021-20',
      storyId: 'story-9328745634021',
      type: 'ending',
      title: 'Storm, Then Sun',
      imageUrl:
        'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?w=800',
      narration:
        'You brace windows, sandbag doors, and share soup with neighbors by candlelight. Morning sifts gold through the clouds; the boathouse stands--scarred, sturdy, claimed. You and Amaya dance paint across the repaired beams, laughter louder than gulls.',
      choices: [],
    },
    {
      id: 'story-9328745634021-21',
      storyId: 'story-9328745634021',
      type: 'ending',
      title: 'Elsewhere, Together',
      imageUrl:
        'https://images.unsplash.com/photo-1473953132640-1f77aa0b0b80?w=800',
      narration:
        'You chase warmer winds along a chain of ports, letters no longer bottled but read aloud between tides. The old town becomes a sweet ache that doesn\'t pull you under. On maps, you draw hearts where strangers taught you to listen.',
      choices: [],
    },
    {
      id: 'story-9328745634021-22',
      storyId: 'story-9328745634021',
      type: 'ending',
      title: 'The Unsent Letter',
      imageUrl:
        'https://images.unsplash.com/photo-1520974735194-6e2690b2aa27?w=800',
      narration:
        'You hesitate one letter too long. The developer\'s crew moves fast; the workshop never breathes. Years later, you find one of Amaya\'s notes in a library book and finally write back--on the inside cover, where people look when they\'re ready to begin.',
      choices: [],
    },
  ],
};

export default lettersOnTheWindStory;
