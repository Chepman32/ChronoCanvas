import { Story } from '../types';

export const heartlineRewindStory: Story = {
  id: 'story-9123457712345',
  title: 'Heartline Rewind',
  description:
    'A city is trapped in a 59-minute loop, and your sketches can splice the hours back together. But every repair ripples the past--especially the night you lost Maya. Will you restore the timeline or redraw your fate?',
  coverImageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400',
  author: 'ChronoCanvas Studio',
  genre: ['romance', 'scifi'],
  difficulty: 'medium',
  estimatedDuration: 32,
  isPremium: true,
  productId: 'com.app.story.heartline-rewind',
  version: '1.0',
  createdAt: '2025-01-14',
  updatedAt: '2025-01-14',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-9123457712345-1',
  nodes: [
    {
      id: 'story-9123457712345-1',
      storyId: 'story-9123457712345',
      type: 'start',
      title: 'Looped Midnight',
      imageUrl:
        'https://images.unsplash.com/photo-1508057198894-247b23fea5ef?w=800',
      narration:
        'Rain stitches silver dashes across the street as a clock tower stutters: 11:01--again. Your ChronoCanvas hums in your palm like a caged metronome, the line you draw echoing through puddles and neon signs. Somewhere nearby, Maya waits at the observatory, unaware that this hour has already happened a dozen times.',
      choices: [
        {
          id: 'story-9123457712345-c1',
          text: 'Hurry to the museum clock hall.',
          description: 'Stabilize the city\'s pulse first.',
          targetNodeId: 'story-9123457712345-5',
          order: 1,
        },
        {
          id: 'story-9123457712345-c2',
          text: 'Go straight to the rooftop observatory.',
          description: 'Find Maya before the loop resets.',
          targetNodeId: 'story-9123457712345-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-2',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Rooftop Signal',
      imageUrl:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800',
      narration:
        'Wind chimes the guy wires around the telescope dome. Maya stands beneath a sky cleaved by clouds, studying a faint anomaly like a thumbprint in the stars. She glances toward the stairwell as if expecting someone--then your phone buzzes with a warning: loop integrity failing.',
      choices: [
        {
          id: 'story-9123457712345-c3',
          text: 'Tell Maya the truth about the loop.',
          description: 'Honesty may bind you to this timeline.',
          targetNodeId: 'story-9123457712345-4',
          order: 1,
        },
        {
          id: 'story-9123457712345-c4',
          text: 'Keep it light; invite her for coffee.',
          description: 'Anchor normalcy; buy time.',
          targetNodeId: 'story-9123457712345-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-3',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Rain Cafe',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        'Steam ghosts the cafe windows as raindrops march backwards along the glass--time snagging, then resuming. Maya laughs at a memory you should not know yet, and the laugh thins when the lights flutter twice. The ChronoCanvas warms, impatient.',
      choices: [
        {
          id: 'story-9123457712345-c5',
          text: 'Confess the loop now.',
          description: 'Risk disbelief to build trust.',
          targetNodeId: 'story-9123457712345-4',
          order: 1,
        },
        {
          id: 'story-9123457712345-c6',
          text: 'Excuse yourself and sprint to the clock hall.',
          description: 'Patch time, then return.',
          targetNodeId: 'story-9123457712345-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-4',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Shared Secret',
      imageUrl:
        'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=800',
      narration:
        'Words spill: the hour repeats, you have met her here before, and each time you learn a little more. Maya studies you, not unkindly; her fingers find yours as thunder mutters. "If that is true," she says, "then we choose differently this time."',
      choices: [
        {
          id: 'story-9123457712345-c7',
          text: 'Ask her to help fix the clock hall.',
          description: 'Two minds for one mechanism.',
          targetNodeId: 'story-9123457712345-5',
          order: 1,
        },
        {
          id: 'story-9123457712345-c8',
          text: 'Show her the ChronoCanvas\'s door trick.',
          description: 'Walk a shortcut into the heart of time.',
          targetNodeId: 'story-9123457712345-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-5',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Hall of Clocks',
      imageUrl:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800',
      narration:
        'A cathedral of pendulums debates the present in overlapping ticks. One massive regulator argues loudly--its seconds hand double-steps, then sulks. You can feel the loop snag on its teeth.',
      choices: [
        {
          id: 'story-9123457712345-c9',
          text: 'Repair the regulator with a fine stroke.',
          description: 'Precision first.',
          targetNodeId: 'story-9123457712345-9',
          order: 1,
        },
        {
          id: 'story-9123457712345-c10',
          text: 'Draw a doorway on the clock face.',
          description: 'Shortcut to the source.',
          targetNodeId: 'story-9123457712345-10',
          order: 2,
        },
        {
          id: 'story-9123457712345-c11',
          text: 'Trail the suspicious curator.',
          description: 'Someone is meddling too.',
          targetNodeId: 'story-9123457712345-8',
          order: 3,
        },
      ],
    },
    {
      id: 'story-9123457712345-6',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Rift Alley',
      imageUrl:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800',
      narration:
        'A seam in the rain hangs like a cut in film; beyond it, stars glitter like screws. The air tastes of static and wet stone, tugging at your sleeves both forward and back. One bold line could anchor the tear--or widen it.',
      choices: [
        {
          id: 'story-9123457712345-c12',
          text: 'Stabilize with a lattice of lines.',
          description: 'Engineer the breach.',
          targetNodeId: 'story-9123457712345-11',
          order: 1,
        },
        {
          id: 'story-9123457712345-c13',
          text: 'Step away and regroup at the hall.',
          description: 'Do not tempt collapse.',
          targetNodeId: 'story-9123457712345-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-7',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Cipher Notes',
      imageUrl:
        'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800',
      narration:
        'Blueprint scribbles hide coordinates beneath ornamental curls--someone nested a map in a flourish. The missing corner forms a sideways nine that also reads as an eye. You\'ll need the fragment or a convincing imitation.',
      choices: [
        {
          id: 'story-9123457712345-c14',
          text: 'Search restoration records for the fragment.',
          description: 'Find the original key.',
          targetNodeId: 'story-9123457712345-12',
          order: 1,
        },
        {
          id: 'story-9123457712345-c15',
          text: 'Improvise a surrogate on the Canvas.',
          description: 'Good enough, maybe.',
          targetNodeId: 'story-9123457712345-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-8',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'After-Hours Chase',
      imageUrl:
        'https://images.unsplash.com/photo-1500534310683-0a8d07abb6aa?w=800',
      narration:
        'Emergency lights braid your shadow with the curator\'s. Their rolled plans crackle with static, humming in time with the faulty clock. They glance back--guilty, grieving, determined.',
      choices: [
        {
          id: 'story-9123457712345-c16',
          text: 'Intercept gently and talk.',
          description: 'Turn pursuit into a pact.',
          targetNodeId: 'story-9123457712345-13',
          order: 1,
        },
        {
          id: 'story-9123457712345-c17',
          text: 'Slip past and open the vault first.',
          description: 'Action before argument.',
          targetNodeId: 'story-9123457712345-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-9',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Clockwork Calm',
      imageUrl:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800',
      narration:
        'Your stroke bridges a missing tooth, and the seconds hand exhales to true pace. A hidden panel unlocks with a polite click. Inside: the torn vellum fragment and a key shaped like a question mark.',
      choices: [
        {
          id: 'story-9123457712345-c18',
          text: 'Take fragment to the vault.',
          description: 'Original beats imitation.',
          targetNodeId: 'story-9123457712345-14',
          order: 1,
        },
        {
          id: 'story-9123457712345-c19',
          text: 'Use the door trick to the temple.',
          description: 'Skip the stairs.',
          targetNodeId: 'story-9123457712345-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-10',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Sketched Threshold',
      imageUrl:
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800',
      narration:
        'Ink takes to brass like dew to dawn. The clock face softens, accepting a drawn door that opens on dry, singing sand. Cold air with a scent of sun on stone brushes your cheeks.',
      choices: [
        {
          id: 'story-9123457712345-c20',
          text: 'Step through to the temple chamber.',
          description: 'Meet the source.',
          targetNodeId: 'story-9123457712345-16',
          order: 1,
        },
        {
          id: 'story-9123457712345-c21',
          text: 'Return to gather the missing fragment.',
          description: 'Do not risk a guess.',
          targetNodeId: 'story-9123457712345-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-11',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Anchored Tear',
      imageUrl:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800',
      narration:
        'A lattice of strokes hums around the rip, bracing it like scaffolding. The headache in your jaw loosens, and distant traffic remembers to move forward. For a blink, the loop\'s grip slackens.',
      choices: [
        {
          id: 'story-9123457712345-c22',
          text: 'Proceed to the temple while it holds.',
          description: 'Now or never.',
          targetNodeId: 'story-9123457712345-16',
          order: 1,
        },
        {
          id: 'story-9123457712345-c23',
          text: 'Reinforce the clock hall instead.',
          description: 'Secure home base.',
          targetNodeId: 'story-9123457712345-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-12',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Archive Room',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'Dust motes drift like lost seconds in lamplight. In a conservation folder, the torn vellum fragment waits with an inked looped-nine--an eye and a spiral in one. It warms the air when your fingers brush it.',
      choices: [
        {
          id: 'story-9123457712345-c24',
          text: 'Slot the fragment into the vault lock.',
          description: 'Complete the circuit.',
          targetNodeId: 'story-9123457712345-14',
          order: 1,
        },
        {
          id: 'story-9123457712345-c25',
          text: 'Sketch a backup surrogate just in case.',
          description: 'Belt and suspenders.',
          targetNodeId: 'story-9123457712345-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-13',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Gentle Confrontation',
      imageUrl:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      narration:
        'You corner the curator by a case of marine chronometers. Their grief is a raw note under their voice: they want to cut the hour they lost someone in, to unmake that pain. "Help me fix it--safely," you say, and for a moment the ticking softens.',
      choices: [
        {
          id: 'story-9123457712345-c26',
          text: 'Invite them to the vault with you.',
          description: 'Make an ally.',
          targetNodeId: 'story-9123457712345-14',
          order: 1,
        },
        {
          id: 'story-9123457712345-c27',
          text: 'Ask them to keep guards busy.',
          description: 'Buy time for the fix.',
          targetNodeId: 'story-9123457712345-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-14',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Hidden Vault',
      imageUrl:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800',
      narration:
        'Behind stacked crates, a circular seam exhales a desert draft. The vellum fragment seats into a lock that unfurls like a blooming spiral. Stairs sink toward a chamber where sand waits like a patient page.',
      choices: [
        {
          id: 'story-9123457712345-c28',
          text: 'Seal the paradox equation here.',
          description: 'Stability over desire.',
          targetNodeId: 'story-9123457712345-18',
          order: 1,
        },
        {
          id: 'story-9123457712345-c29',
          text: 'Step through to the temple\'s dais.',
          description: 'Face the source directly.',
          targetNodeId: 'story-9123457712345-16',
          order: 2,
        },
        {
          id: 'story-9123457712345-c30',
          text: 'Call Maya to join you.',
          description: 'Choose together.',
          targetNodeId: 'story-9123457712345-16',
          order: 3,
        },
      ],
    },
    {
      id: 'story-9123457712345-15',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Security Sweep',
      imageUrl:
        'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=800',
      narration:
        'Radios crackle; footsteps align with the hall\'s stubborn rhythm. You sketch a door three feet to the left, slip through, and the building sighs--annoyed, but compliant. Time grants you one narrow corridor more.',
      choices: [
        {
          id: 'story-9123457712345-c31',
          text: 'Circle back to shadow the curator.',
          description: 'Humans first, then machines.',
          targetNodeId: 'story-9123457712345-8',
          order: 1,
        },
        {
          id: 'story-9123457712345-c32',
          text: 'Return to the clock door.',
          description: 'Temple beckons.',
          targetNodeId: 'story-9123457712345-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-16',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Temple Dais',
      imageUrl:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
      narration:
        'Moonlight gathers in a roofless chamber; sand whispers in little avalanches. Murals show artists painting with comet tails, looping days into gentler shapes. Two sets of footprints circle the dais--yours, and the version of you that keeps trying.',
      choices: [
        {
          id: 'story-9123457712345-c33',
          text: 'Study the murals for instruction.',
          description: 'Learn the cost before paying.',
          targetNodeId: 'story-9123457712345-20',
          order: 1,
        },
        {
          id: 'story-9123457712345-c34',
          text: 'Begin the sealing stroke.',
          description: 'Close the loop now.',
          targetNodeId: 'story-9123457712345-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-17',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Surrogate Mark',
      imageUrl:
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
      narration:
        'You draw a patient curve, a breath, a return--close to the real glyph, not quite. The Canvas writes back in a translucent note: "Almost." The loop pauses, listening.',
      choices: [
        {
          id: 'story-9123457712345-c35',
          text: 'Use the surrogate to seal anyway.',
          description: 'Good enough might hold.',
          targetNodeId: 'story-9123457712345-18',
          order: 1,
        },
        {
          id: 'story-9123457712345-c36',
          text: 'Carry it to the dais for calibration.',
          description: 'Refine at the source.',
          targetNodeId: 'story-9123457712345-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-18',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Paradox Math',
      imageUrl:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      narration:
        'The blueprint overlays reality: the cut hour is a bright wound, throbbing. Your Canvas pulses with two clear options--restore the hour and take the shock yourself, or let the Canvas consume itself to close the seam cleanly. Maya\'s hand finds yours; either way, love is a constant.',
      choices: [
        {
          id: 'story-9123457712345-c37',
          text: 'Restore the hour; absorb the backlash.',
          description: 'You keep the Canvas--and its weight.',
          targetNodeId: 'story-9123457712345-19',
          order: 1,
        },
        {
          id: 'story-9123457712345-c38',
          text: 'Let the Canvas consume itself.',
          description: 'Lose the tool, save the world.',
          targetNodeId: 'story-9123457712345-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-19',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Kept Hour',
      imageUrl:
        'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800',
      narration:
        'The hour returns with a soft click--rain resumes, traffic murmurs, and the city exhales. Your wrist ticks sometimes in storms, a private thunder you carry without complaint. Maya kisses the place the loop left bright: "We will count together."',
      choices: [],
    },
    {
      id: 'story-9123457712345-20',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Paper Sacrifice',
      imageUrl:
        'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?w=800',
      narration:
        'The Canvas drinks its own ink until only the scent of rain remains. Time smooths like fresh paint drying, and clocks across the city breathe easier. You and Maya walk out under honest weather, empty-handed and free.',
      choices: [],
    },
    {
      id: 'story-9123457712345-21',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Faithless Edit',
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
      narration:
        'A perfect rewrite erases the hurt--and the truth that shaped it. The timeline refuses the lie and frays into bright threads that sing like wire. You spend long nights re-braiding possibilities, and sometimes, in a new dawn, Maya finds you.',
      choices: [],
    },
    {
      id: 'story-9123457712345-22',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Scar Together',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'You paint a careful scar across your days, a looped nine resting under the skin of memory. The city moves on, loopless; you and Maya learn the rhythm of imperfect time. Some mornings you wake already finishing a laugh you have not started.',
      choices: [],
    },
  ],
};

export default heartlineRewindStory;
