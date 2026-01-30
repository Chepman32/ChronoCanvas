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
  genre: 'romance',
  involvement: 'medium',
  estimatedDuration: 32,
  isPremium: true,
  productId: 'com.app.story.heartline-rewind',
  version: '1.0',
  createdAt: '2025-01-14',
  updatedAt: '2025-01-14',
  totalNodes: 20,
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
        'Rain stitches silver dashes across the street as a clock tower stutters: 11:01--again. Your ChronoCanvas hums in your palm like a caged metronome, the line you draw echoing through puddles and neon signs. Somewhere nearby, Maya waits at the observatory, unaware that this hour has already happened a dozen times. You feel the familiar tug of the loop pulling you back, yet something feels different tonight. The air tastes of ozone and possibility.',
      choices: [
        {
          id: 'story-9123457712345-c1',
          text: 'Hurry to the museum clock hall.',
          description: 'Stabilize the city\'s pulse first.',
          targetNodeId: 'story-9123457712345-2',
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
      title: 'First Junction',
      imageUrl:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800',
      narration:
        'Wind chimes the guy wires around the telescope dome. Maya stands beneath a sky cleaved by clouds, studying a faint anomaly like a thumbprint in the stars. She glances toward the stairwell as if expecting someone--then your phone buzzes with a warning: loop integrity failing. The ChronoCanvas grows warm in your pocket, sensing the temporal fracture widening. You must decide whether to trust her with the truth or protect her from the burden of knowing.',
      choices: [
        {
          id: 'story-9123457712345-c3',
          text: 'Tell Maya the truth about the loop.',
          description: 'Honesty may bind you to this timeline.',
          targetNodeId: 'story-9123457712345-3',
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
        'Steam ghosts the cafe windows as raindrops march backwards along the glass--time snagging, then resuming. Maya laughs at a memory you should not know yet, and the laugh thins when the lights flutter twice. The ChronoCanvas warms, impatient. Outside, the streetlights flicker in an impossible pattern, spelling out coordinates only you can read. The barista watches you with eyes that seem to know too much, as if she too has lived this hour before.',
      choices: [
        {
          id: 'story-9123457712345-c5',
          text: 'Show her the Canvas warning.',
          description: 'Risk disbelief to build trust.',
          targetNodeId: 'story-9123457712345-4',
          order: 1,
        },
        {
          id: 'story-9123457712345-c6',
          text: 'Excuse yourself and check the streetlights.',
          description: 'The pattern holds a message.',
          targetNodeId: 'story-9123457712345-4',
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
        'Words spill: the hour repeats, you have met her here before, and each time you learn a little more. Maya studies you, not unkindly; her fingers find yours as thunder mutters. \'If that is true,\' she says, \'then we choose differently this time.\' Her eyes hold galaxies of questions, but also a fierce determination that makes your heart ache. You realize she has been waiting for someone to share this burden with, someone who understands the weight of temporal recursion.',
      choices: [
        {
          id: 'story-9123457712345-c7',
          text: 'Ask her to help find the clock hall.',
          description: 'Two minds for one mystery.',
          targetNodeId: 'story-9123457712345-5',
          order: 1,
        },
        {
          id: 'story-9123457712345-c8',
          text: 'Sketch a protective circle around her.',
          description: 'Shield her from the loop\'s pull.',
          targetNodeId: 'story-9123457712345-5',
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
        'A cathedral of pendulums debates the present in overlapping ticks. One massive regulator argues loudly--its seconds hand double-steps, then sulks. You can feel the loop snag on its teeth. Maya gasps as she sees the anomaly, her scientific mind struggling to comprehend what her eyes report. The ancient timepieces seem to lean toward you, as if recognizing the ChronoCanvas as one of their own. The air hums with temporal resonance, heavy with possibility.',
      choices: [
        {
          id: 'story-9123457712345-c9',
          text: 'Repair the regulator with a fine stroke.',
          description: 'Precision first.',
          targetNodeId: 'story-9123457712345-6',
          order: 1,
        },
        {
          id: 'story-9123457712345-c10',
          text: 'Examine the mural behind the main clock.',
          description: 'History holds answers.',
          targetNodeId: 'story-9123457712345-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-6',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Ancient Mural',
      imageUrl:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800',
      narration:
        'The painted figures move when you do not look directly, depicting artists who wielded time like clay. A hidden panel glows faintly where the regulator\'s shadow falls. Maya traces the symbols with trembling fingers, whispering translations from forgotten languages. The mural shows a doorway opening beneath a spiral moon, and you realize this is not the first loop this city has endured. Others have stood where you stand now, and some have succeeded.',
      choices: [
        {
          id: 'story-9123457712345-c11',
          text: 'Open the glowing panel.',
          description: 'Secrets wait within.',
          targetNodeId: 'story-9123457712345-7',
          order: 1,
        },
        {
          id: 'story-9123457712345-c12',
          text: 'Copy the mural\'s symbols first.',
          description: 'Knowledge is power.',
          targetNodeId: 'story-9123457712345-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-7',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Hidden Archive',
      imageUrl:
        'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800',
      narration:
        'Blueprint scribbles hide coordinates beneath ornamental curls--someone nested a map in a flourish. The missing corner forms a sideways nine that also reads as an eye. You will need the fragment or a convincing imitation. Dust motes swirl in patterns that match the temporal distortions outside, creating a miniature map of the fractured timeline. Maya finds a journal entry dated three centuries ago, written in your handwriting.',
      choices: [
        {
          id: 'story-9123457712345-c13',
          text: 'Search restoration records for the fragment.',
          description: 'Find the original key.',
          targetNodeId: 'story-9123457712345-8',
          order: 1,
        },
        {
          id: 'story-9123457712345-c14',
          text: 'Read the journal entry aloud.',
          description: 'Past you left instructions.',
          targetNodeId: 'story-9123457712345-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-8',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Temporal Journal',
      imageUrl:
        'https://images.unsplash.com/photo-1500534310683-0a8d07abb6aa?w=800',
      narration:
        'The pages describe your current moment with impossible accuracy, ending with a warning: \'Do not trust the curator.\' Footsteps echo from the main hall--heavy, purposeful, too soon. Maya presses against you in the shadows, her heartbeat synchronizing with the ChronoCanvas pulse. The journal falls open to a diagram showing two paths forward, each leading to different destinies, each demanding a different sacrifice.',
      choices: [
        {
          id: 'story-9123457712345-c15',
          text: 'Hide and observe the newcomer.',
          description: 'Knowledge before action.',
          targetNodeId: 'story-9123457712345-9',
          order: 1,
        },
        {
          id: 'story-9123457712345-c16',
          text: 'Confront them with the Canvas ready.',
          description: 'Take the initiative.',
          targetNodeId: 'story-9123457712345-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-9',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'After-Hours Encounter',
      imageUrl:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800',
      narration:
        'Emergency lights braid your shadow with the curator\'s. Their rolled plans crackle with static, humming in time with the faulty clock. They glance back--guilty, grieving, determined. \'You have it wrong,\' they whisper, tears cutting tracks through dust on their cheeks. \'I am not the one who trapped us here. I am trying to free us.\' Their voice carries the weight of countless failed loops, countless attempts to break the cycle.',
      choices: [
        {
          id: 'story-9123457712345-c17',
          text: 'Listen to their story.',
          description: 'Turn suspicion into understanding.',
          targetNodeId: 'story-9123457712345-10',
          order: 1,
        },
        {
          id: 'story-9123457712345-c18',
          text: 'Demand proof of their claims.',
          description: 'Trust but verify.',
          targetNodeId: 'story-9123457712345-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-10',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Curator\'s Confession',
      imageUrl:
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800',
      narration:
        'They reveal a daughter lost in the first loop, a grief so sharp it cut time itself. \'The loop is a scar,\' they say, \'and scars protect what is wounded beneath.\' Maya\'s hand tightens in yours as you understand: breaking the loop means facing the original pain. The curator unfolds their plans, showing a mechanism that could heal the fracture, but the price is remembering everything--every loop, every loss, every version of goodbye.',
      choices: [
        {
          id: 'story-9123457712345-c19',
          text: 'Offer to share the burden.',
          description: 'Grief divided is grief diminished.',
          targetNodeId: 'story-9123457712345-11',
          order: 1,
        },
        {
          id: 'story-9123457712345-c20',
          text: 'Ask about the healing mechanism.',
          description: 'Focus on the solution.',
          targetNodeId: 'story-9123457712345-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-11',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Clockwork Calm',
      imageUrl:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800',
      narration:
        'Your stroke bridges a missing tooth, and the seconds hand exhales to true pace. A hidden panel unlocks with a polite click. Inside: the torn vellum fragment and a key shaped like a question mark. The curator weeps openly now, not from sorrow but from hope. Maya discovers an inscription on the key\'s shaft--coordinates to the temporal nexus where the loop first formed. Time shudders, granting you one clear path forward.',
      choices: [
        {
          id: 'story-9123457712345-c21',
          text: 'Take the fragment to the vault.',
          description: 'Original beats imitation.',
          targetNodeId: 'story-9123457712345-12',
          order: 1,
        },
        {
          id: 'story-9123457712345-c22',
          text: 'Sketch the doorway to the nexus.',
          description: 'Skip the stairs.',
          targetNodeId: 'story-9123457712345-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-12',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Sketched Threshold',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'Ink takes to brass like dew to dawn. The clock face softens, accepting a drawn door that opens on dry, singing sand. Cold air with a scent of sun on stone brushes your cheeks. Beyond lies the nexus--a place outside time where all loops converge. Maya steps forward without hesitation, her trust absolute. The curator hangs back, warning that once you cross, you cannot return unchanged. The Canvas pulses with anticipation.',
      choices: [
        {
          id: 'story-9123457712345-c23',
          text: 'Step through with Maya.',
          description: 'Face the nexus together.',
          targetNodeId: 'story-9123457712345-13',
          order: 1,
        },
        {
          id: 'story-9123457712345-c24',
          text: 'Go first to ensure safety.',
          description: 'Protect her from unknown dangers.',
          targetNodeId: 'story-9123457712345-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-13',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Temple Dais',
      imageUrl:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      narration:
        'Moonlight gathers in a roofless chamber; sand whispers in little avalanches. Murals show artists painting with comet tails, looping days into gentler shapes. Two sets of footprints circle the dais--yours, and the version of you that keeps trying. At the center stands an altar where the ChronoCanvas was born, where time first bent to human will. The air shimmers with potential, waiting for your choice to crystalize into reality.',
      choices: [
        {
          id: 'story-9123457712345-c25',
          text: 'Study the murals for instruction.',
          description: 'Learn the cost before paying.',
          targetNodeId: 'story-9123457712345-14',
          order: 1,
        },
        {
          id: 'story-9123457712345-c26',
          text: 'Approach the central altar.',
          description: 'The answer lies within.',
          targetNodeId: 'story-9123457712345-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-14',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Nexus Revelation',
      imageUrl:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800',
      narration:
        'The altar displays the blueprint of your life, every choice branching like frost across glass. The loop is a knot you tied yourself--trying to prevent Maya\'s accident, refusing to accept loss. Understanding crashes over you: you created this prison from love, and only you can unlock it. Maya sees it too, her eyes wide with recognition. \'You did this for me,\' she breathes, and her voice holds wonder and sorrow intertwined.',
      choices: [
        {
          id: 'story-9123457712345-c27',
          text: 'Acknowledge the truth.',
          description: 'Accept responsibility.',
          targetNodeId: 'story-9123457712345-15',
          order: 1,
        },
        {
          id: 'story-9123457712345-c28',
          text: 'Ask Maya what she wants.',
          description: 'Her choice matters most.',
          targetNodeId: 'story-9123457712345-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-15',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Paradox Math',
      imageUrl:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      narration:
        'The blueprint overlays reality: the cut hour is a bright wound, throbbing. Your Canvas pulses with two clear options--restore the hour and take the shock yourself, or let the Canvas consume itself to close the seam cleanly. Maya\'s hand finds yours; either way, love is a constant. The temple begins to shake, sands shifting as the loop fights to maintain itself. Time demands an answer, and the ChronoCanvas glows with ultimate power.',
      choices: [
        {
          id: 'story-9123457712345-c29',
          text: 'Restore the hour; absorb the backlash.',
          description: 'You keep the Canvas--and its weight.',
          targetNodeId: 'story-9123457712345-16',
          order: 1,
        },
        {
          id: 'story-9123457712345-c30',
          text: 'Let the Canvas consume itself.',
          description: 'Lose the tool, save the world.',
          targetNodeId: 'story-9123457712345-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-9123457712345-16',
      storyId: 'story-9123457712345',
      type: 'decision',
      title: 'Final Choice',
      imageUrl:
        'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800',
      narration:
        'The mechanism demands a final decision. You feel the weight of all loops pressing down--every version of you who tried and failed, every version who loved and lost. Maya stands beside you, her presence anchoring you to this moment, this choice. The ChronoCanvas shows four paths crystallizing from possibility, each leading to a different tomorrow. One path keeps the power but bears the burden. Another releases everything for freedom.',
      choices: [
        {
          id: 'story-9123457712345-c31',
          text: 'Accept the burden of memory.',
          description: 'Keep every loop, every lesson.',
          targetNodeId: 'story-9123457712345-19',
          order: 1,
        },
        {
          id: 'story-9123457712345-c32',
          text: 'Sacrifice the Canvas completely.',
          description: 'Clean slate for everyone.',
          targetNodeId: 'story-9123457712345-20',
          order: 2,
        },
        {
          id: 'story-9123457712345-c33',
          text: 'Attempt to rewrite the accident.',
          description: 'Erase the source of pain.',
          targetNodeId: 'story-9123457712345-21',
          order: 3,
        },
        {
          id: 'story-9123457712345-c34',
          text: 'Share the burden with Maya.',
          description: 'Face the future together.',
          targetNodeId: 'story-9123457712345-22',
          order: 4,
        },
      ],
    },
    {
      id: 'story-9123457712345-19',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Kept Hour',
      imageUrl:
        'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?w=800',
      narration:
        'The hour returns with a soft click--rain resumes, traffic murmurs, and the city exhales. Your wrist ticks sometimes in storms, a private thunder you carry without complaint. Maya kisses the place the loop left bright: \'We will count together.\' You remember every version of her, every smile across infinite iterations, and know that love transcends even time\'s relentless march. The ChronoCanvas remains, quiet now, waiting.',
      choices: [],
    },
    {
      id: 'story-9123457712345-20',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Paper Sacrifice',
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
      narration:
        'The Canvas drinks its own ink until only the scent of rain remains. Time smooths like fresh paint drying, and clocks across the city breathe easier. You and Maya walk out under honest weather, empty-handed and free. You cannot remember what you sacrificed, only that it was worth this peace. The curator\'s daughter appears at the museum door, restored to a timeline that never broke.',
      choices: [],
    },
    {
      id: 'story-9123457712345-21',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Faithless Edit',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'A perfect rewrite erases the hurt--and the truth that shaped it. The timeline refuses the lie and frays into bright threads that sing like wire. You spend long nights re-braiding possibilities, and sometimes, in a new dawn, Maya finds you. But she is different now, a stranger wearing familiar eyes. You realize too late that changing the past changes the person, and some truths cannot be edited without losing what made them matter.',
      choices: [],
    },
    {
      id: 'story-9123457712345-22',
      storyId: 'story-9123457712345',
      type: 'ending',
      title: 'Scar Together',
      imageUrl:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
      narration:
        'You paint a careful scar across your days, a looped nine resting under the skin of memory. The city moves on, loopless; you and Maya learn the rhythm of imperfect time. Some mornings you wake already finishing a laugh you have not started. She remembers fragments too, and together you build a language of déjà vu. The ChronoCanvas becomes a shared dream, a bridge between two souls who chose to carry time\'s weight as one.',
      choices: [],
    },
  ],
};

export default heartlineRewindStory;
