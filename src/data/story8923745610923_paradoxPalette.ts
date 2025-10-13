import { Story } from '../types';

// ChronoCanvas Interactive Story for React Native
// STORY THEME: Time can be sketched, erased, and repainted like art; every stroke has a cost.
// SETTING: A modern city's midnight museum, rain-slick alleys, and a sunken desert temple glimpsed through temporal doors.
// PROTAGONIST: Nova Reyes, a restoration artist-hacker who wields the ChronoCanvas--an obsidian sketchbook that edits time.
// CONFLICT: A grieving curator intends to excise a catastrophic hour from history, tearing a widening paradox in the timeline.
// TONE: Suspenseful, wonder-filled, and emotionally charged with moments of quiet melancholy and daring resolve.

export const paradoxPaletteStory: Story = {
  id: 'story-8923745610923',
  title: 'Paradox Palette',
  description:
    'At midnight, a museum restorer discovers a sketchbook that can repaint time. Each line drawn mends one fracture and splits another, as a grieving curator moves to excise a tragic hour forever. Can you compose a timeline that holds--before the canvas tears itself apart?',
  coverImageUrl:
    'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400',
  author: 'ChronoCanvas Studio',
  genre: ['scifi', 'mystery'],
  difficulty: 'medium',
  estimatedDuration: 35,
  isPremium: true,
  productId: 'com.app.story.paradox-palette',
  version: '1.0',
  createdAt: '2025-01-12',
  updatedAt: '2025-01-12',
  totalNodes: 24,
  totalEndings: 4,
  startNodeId: 'story-8923745610923-1',
  nodes: [
    {
      id: 'story-8923745610923-1',
      storyId: 'story-8923745610923',
      type: 'start',
      title: 'Ink of Time',
      imageUrl:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      narration:
        'On a workbench beneath a single lamp, gears glint like stars embedded in brass. Nova flips open a jet-black sketchbook--the ChronoCanvas--and a faint hum prickles the air. A line drawn across the page ripples the room, nudging a pendulum\'s swing into a different beat. Beyond the locked restoration lab, the museum groans at midnight, as if remembering.',
      choices: [
        {
          id: 'story-8923745610923-c1',
          text: 'Slip into the museum galleries.',
          description: 'Follow the hum toward the source.',
          targetNodeId: 'story-8923745610923-2',
          order: 1,
        },
        {
          id: 'story-8923745610923-c2',
          text: 'Test a small stroke in the alley outside.',
          description: 'Safer distance--if anything cracks.',
          targetNodeId: 'story-8923745610923-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-2',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Midnight Museum',
      imageUrl:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800',
      narration:
        "Marble floors mirror lanky shadows of sculptures and clocks under glass. Security lights pulse in a heartbeat rhythm, as if syncing to some deeper metronome. A curator's silhouette crosses a distant doorway, carrying a rolled blueprint that crackles with static time.",
      choices: [
        {
          id: 'story-8923745610923-c3',
          text: 'Follow the curator at a distance.',
          description: 'Answers hide in that blueprint.',
          targetNodeId: 'story-8923745610923-4',
          order: 1,
        },
        {
          id: 'story-8923745610923-c4',
          text: 'Head to the grand clock hall.',
          description: 'The museum\'s heart might reveal the pulse.',
          targetNodeId: 'story-8923745610923-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-3',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Alley Experiment',
      imageUrl:
        'https://images.unsplash.com/photo-1508057198894-247b23fea5ef?w=800',
      narration:
        'Rain needles the neon-slick pavement behind the museum. Nova sketches a thin arc; the puddle ripples backwards, raindrops leaping up like rewinding glass. A greenish seam opens above the gutter for a heartbeat--a rift that smells like ozone and old paper.',
      choices: [
        {
          id: 'story-8923745610923-c5',
          text: 'Return inside to the clock hall.',
          description: 'Test the effect near a stable cadence.',
          targetNodeId: 'story-8923745610923-5',
          order: 1,
        },
        {
          id: 'story-8923745610923-c6',
          text: 'Coax the rift wider with a bolder stroke.',
          description: 'High risk, high insight.',
          targetNodeId: 'story-8923745610923-6',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-4',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Whispering Curator',
      imageUrl:
        'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=800',
      narration:
        'The curator pauses beneath vaulted ceilings, murmuring to the blueprint as if it might answer. The paper glows faintly where ink maps a spiral of hours cut from a single day. A name--"The Hour We Refuse"--is circled in red.',
      choices: [
        {
          id: 'story-8923745610923-c7',
          text: 'Photograph and decode the blueprint markings.',
          description: 'Knowledge before confrontation.',
          targetNodeId: 'story-8923745610923-7',
          order: 1,
        },
        {
          id: 'story-8923745610923-c8',
          text: 'Tail the curator deeper into staff-only halls.',
          description: 'Discovery in motion.',
          targetNodeId: 'story-8923745610923-8',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-5',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Hall of Clocks',
      imageUrl:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800',
      narration:
        "An orchestra of ticking surrounds a cathedral of glass domes and pendulums. One central clock stutters, then double-ticks, as if arguing with itself about the present. The ChronoCanvas warms in Nova's hand, hungry for a stabilizing line.",
      choices: [
        {
          id: 'story-8923745610923-c9',
          text: 'Repair the central mechanism with a precise sketch.',
          description: 'Stability may reveal a pattern.',
          targetNodeId: 'story-8923745610923-9',
          order: 1,
        },
        {
          id: 'story-8923745610923-c10',
          text: 'Draw a door on the clock face.',
          description: 'Make time a threshold.',
          targetNodeId: 'story-8923745610923-10',
          order: 2,
        },
        {
          id: 'story-8923745610923-c11',
          text: 'Shadow the curator via side corridors.',
          description: 'Stay on their trail.',
          targetNodeId: 'story-8923745610923-8',
          order: 3,
        },
      ],
    },
    {
      id: 'story-8923745610923-6',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Rift Edge',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        "The seam yawns, showing stars like polished screws in an endless night. Wind pulls forward and backward at once, tugging at Nova's sleeves. In the thin light, a sketch of a doorway feels almost mandatory.",
      choices: [
        {
          id: 'story-8923745610923-c12',
          text: 'Sketch a stable door and step back inside.',
          description: 'Re-enter from a safer angle.',
          targetNodeId: 'story-8923745610923-10',
          order: 1,
        },
        {
          id: 'story-8923745610923-c13',
          text: 'Anchor the rift with a lattice of lines.',
          description: 'Engineer the tear before it grows.',
          targetNodeId: 'story-8923745610923-11',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-7',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Ciphered Blueprint',
      imageUrl:
        'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800',
      narration:
        "The photo reveals coordinates folded into ornamental filigree--a cartographer's joke. Overlaid, the lines translate to a map of the museum basement and something older beneath it. A missing fragment, torn from the page, is the key to the sequence.",
      choices: [
        {
          id: 'story-8923745610923-c14',
          text: 'Search for the fragment in restoration records.',
          description: 'Recover what was removed.',
          targetNodeId: 'story-8923745610923-12',
          order: 1,
        },
        {
          id: 'story-8923745610923-c15',
          text: "Use the clock hall's rhythm to brute-force the code.",
          description: 'Align ticks with cipher shifts.',
          targetNodeId: 'story-8923745610923-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-8',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'After-Hours Chase',
      imageUrl:
        'https://images.unsplash.com/photo-1500534310683-0a8d07abb6aa?w=800',
      narration:
        "Footsteps echo between staff doors, the curator fast but burdened by the glowing plans. Nova's shadow overlays theirs, two silhouettes braided by the emergency lights. A pressure builds--time objects to the pursuit.",
      choices: [
        {
          id: 'story-8923745610923-c16',
          text: 'Cut them off with a sketched detour.',
          description: "Redraw the hallway's geometry.",
          targetNodeId: 'story-8923745610923-12',
          order: 1,
        },
        {
          id: 'story-8923745610923-c17',
          text: 'Confront and question, softly.',
          description: 'Turn a chase into a confession.',
          targetNodeId: 'story-8923745610923-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-9',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Clockwork Heart',
      imageUrl:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800',
      narration:
        'The central mechanism opens like a ribcage, gears glistening with oil and memory. With a careful stroke, Nova bridges a missing tooth; the second hand exhales into smooth motion. In that calm, a hidden compartment clicks--an invitation.',
      choices: [
        {
          id: 'story-8923745610923-c18',
          text: 'Open the revealed compartment.',
          description: 'Secrets cache where cadence holds.',
          targetNodeId: 'story-8923745610923-14',
          order: 1,
        },
        {
          id: 'story-8923745610923-c19',
          text: 'Close up and backtrack to avoid traps.',
          description: 'Caution preserves options.',
          targetNodeId: 'story-8923745610923-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-10',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Drawn Doorway',
      imageUrl:
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800',
      narration:
        'The clock face accepts a doorway like paint taking to primer. Cold air spills through, flavored with dust and a scent like sun on old stone. Beyond, sand sings softly in a chamber that should not be.',
      choices: [
        {
          id: 'story-8923745610923-c20',
          text: 'Search for the missing fragment first.',
          description: 'Maps matter.',
          targetNodeId: 'story-8923745610923-12',
          order: 1,
        },
        {
          id: 'story-8923745610923-c21',
          text: 'Step through into the desert chamber.',
          description: 'Seize the initiative.',
          targetNodeId: 'story-8923745610923-16',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-11',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Temporal Stabilizer',
      imageUrl:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800',
      narration:
        "Lines become scaffolding around the tear, a sketched truss that hums and holds. The rift's tug eases, and with it the headache that had been a siren at the skull's edge. Somewhere, a clock resumes a sane tempo.",
      choices: [
        {
          id: 'story-8923745610923-c22',
          text: 'Enter the doorway to the other side.',
          description: 'While the structure holds.',
          targetNodeId: 'story-8923745610923-16',
          order: 1,
        },
        {
          id: 'story-8923745610923-c23',
          text: 'Return to refine the museum mechanism.',
          description: 'Shore up the present.',
          targetNodeId: 'story-8923745610923-9',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-12',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Lost Fragment',
      imageUrl:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'In a back room smelling of binders and cedar, a torn vellum shard hides inside an old conservation file. The piece shows a glyph that looks like a brushstroke shaped into a number nine lying on its side. When held to light, the mark resembles an eye--and a loop.',
      choices: [
        {
          id: 'story-8923745610923-c24',
          text: 'Sketch a replacement glyph to test the circuit.',
          description: 'Improvise the missing key.',
          targetNodeId: 'story-8923745610923-17',
          order: 1,
        },
        {
          id: 'story-8923745610923-c25',
          text: 'Use the fragment to open the hidden vault.',
          description: 'Original beats imitation.',
          targetNodeId: 'story-8923745610923-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-13',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Quiet Interrogation',
      imageUrl:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      narration:
        'You corner the curator in a gallery of antique clocks; time around you hushes in respect. Their eyes are salted with grief, voice brittle as they admit the plan: cut the hour of loss and refuse its echo. The blueprint trembles like a living thing.',
      choices: [
        {
          id: 'story-8923745610923-c26',
          text: 'Ease them back--offer to help safely.',
          description: 'Turn an adversary into an ally.',
          targetNodeId: 'story-8923745610923-15',
          order: 1,
        },
        {
          id: 'story-8923745610923-c27',
          text: 'Take the blueprint and sprint for the vault.',
          description: 'Action over argument.',
          targetNodeId: 'story-8923745610923-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-14',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Hidden Vault',
      imageUrl:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800',
      narration:
        'A sand-scented draft whispers from an armored seam behind stacked crates. The fragment fits like a missing tooth into a circular lock, and the wall unstitches into a spiral stair. Something ancient and mathematical waits below.',
      choices: [
        {
          id: 'story-8923745610923-c28',
          text: 'Seal the paradox circuit with careful strokes.',
          description: 'Stability first.',
          targetNodeId: 'story-8923745610923-18',
          order: 1,
        },
        {
          id: 'story-8923745610923-c29',
          text: 'Step through to the chamber beyond.',
          description: 'Face the root cause.',
          targetNodeId: 'story-8923745610923-16',
          order: 2,
        },
        {
          id: 'story-8923745610923-c30',
          text: 'Call the curator to join you.',
          description: 'Risk trust.',
          targetNodeId: 'story-8923745610923-19',
          order: 3,
        },
      ],
    },
    {
      id: 'story-8923745610923-15',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Security Sweep',
      imageUrl:
        'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=800',
      narration:
        'Radios crackle--guards turn their route toward the clock hall. Nova sketches a detour, lines sliding a doorway three feet to the left, just enough to slip through. The building sighs, aggravated but compliant.',
      choices: [
        {
          id: 'story-8923745610923-c31',
          text: 'Loop behind and resume tailing the curator.',
          description: 'Stay with the human variable.',
          targetNodeId: 'story-8923745610923-8',
          order: 1,
        },
        {
          id: 'story-8923745610923-c32',
          text: 'Return to the drawn doorway.',
          description: 'The desert chamber calls.',
          targetNodeId: 'story-8923745610923-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-16',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Ancient City',
      imageUrl:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
      narration:
        'Moonlight pools in a roofless chamber where sand drifts like snow. Reliefs show artists painting with comet tails, their murals looping days into new shapes. Footprints--fresh--circle a dais carved into a nine-turned-eye.',
      choices: [
        {
          id: 'story-8923745610923-c33',
          text: "Study the temple's murals for instruction.",
          description: 'Learn before acting.',
          targetNodeId: 'story-8923745610923-20',
          order: 1,
        },
        {
          id: 'story-8923745610923-c34',
          text: 'Begin sealing the paradox from here.',
          description: 'Close the loop at its source.',
          targetNodeId: 'story-8923745610923-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-17',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Replacement Glyphs',
      imageUrl:
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
      narration:
        'Nova sketches a surrogate fragment: a patient curve, a breath, a return. The room brightens as the ink settles, reality acknowledging a plausible stand-in. In the margin, the ChronoCanvas writes back--one translucent word: "Almost."',
      choices: [
        {
          id: 'story-8923745610923-c35',
          text: 'Proceed to seal the paradox with the surrogate.',
          description: 'Good enough might hold.',
          targetNodeId: 'story-8923745610923-18',
          order: 1,
        },
        {
          id: 'story-8923745610923-c36',
          text: 'Take the glyph to the temple for calibration.',
          description: 'Refine at the source.',
          targetNodeId: 'story-8923745610923-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-18',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Paradox Equation',
      imageUrl:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800',
      narration:
        'Stars blink like nodes in a network, lines of potential connecting past to now. The blueprint overlays reality, showing the cut hour as a bright wound. The ChronoCanvas pulses, demanding a choice: heal by surrender, or heal by cost.',
      choices: [
        {
          id: 'story-8923745610923-c37',
          text: 'Restore the hour and absorb the backlash yourself.',
          description: 'You keep the canvas--but it keeps you.',
          targetNodeId: 'story-8923745610923-21',
          order: 1,
        },
        {
          id: 'story-8923745610923-c38',
          text: 'Let the canvas consume itself to close the wound.',
          description: 'Lose the tool, save the world.',
          targetNodeId: 'story-8923745610923-22',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-19',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Allied Curator',
      imageUrl:
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      narration:
        'The curator arrives, eyes wet but steadied by your invitation. Together you place the fragment on the dais; your hands shake in mirror. In this shared frame, grief could become a brush instead of a blade.',
      choices: [
        {
          id: 'story-8923745610923-c39',
          text: 'Seal the paradox together.',
          description: 'Two hands, one intention.',
          targetNodeId: 'story-8923745610923-18',
          order: 1,
        },
        {
          id: 'story-8923745610923-c40',
          text: 'Trust them with the canvas for one stroke.',
          description: 'Offer agency--risk betrayal.',
          targetNodeId: 'story-8923745610923-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-8923745610923-20',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Temple Trial',
      imageUrl:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      narration:
        'Wind combs the sand into patient spirals. The murals whisper an answer: to fix a wound, paint over oneself where the wound would be. The dais thrums, counting down in a language of dust and heartbeat.',
      choices: [
        {
          id: 'story-8923745610923-c41',
          text: 'Sacrifice the canvas to seal the breach.',
          description: 'A brush that paints itself away.',
          targetNodeId: 'story-8923745610923-22',
          order: 1,
        },
        {
          id: 'story-8923745610923-c42',
          text: 'Rewrite your own thread to carry the scar.',
          description: 'Become the patch.',
          targetNodeId: 'story-8923745610923-24',
          order: 2,
        },
      ],
    },
    // ENDINGS
    {
      id: 'story-8923745610923-21',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Timeline Healed',
      imageUrl:
        'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800',
      narration:
        'You restore the hour, accepting the backlash as a personal undertow. Days later, you wake with a new tremor, a ghost-tick in your wrist that syncs with distant storms. The world continues--whole--while you learn to hold its weather alone.',
      choices: [],
    },
    {
      id: 'story-8923745610923-22',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Canvas Consumed',
      imageUrl:
        'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?w=800',
      narration:
        'The ChronoCanvas drinks its own ink, page by page, until only a smell of rain remains. The wound closes without a seam, history smoothing over like wet paint drying. You will never sketch time again, but clocks everywhere breathe easier.',
      choices: [],
    },
    {
      id: 'story-8923745610923-23',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Betrayal Unraveling',
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
      narration:
        'Given the canvas, the curator redraws the hour entirely--perfect, painless, impossible. The timeline refuses the lie, shredding into bright threads that sing like wire. You spend the rest of your days collecting the humming filaments, a weaver of fractures.',
      choices: [],
    },
    {
      id: 'story-8923745610923-24',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Self Rewrite',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      narration:
        'You paint a careful scar into your own days, a looped nine-and-eye embedded in your memory. The paradox swallows the wound and leaves you different--a little out of phase, bright at the edges. Sometimes you catch yourself mid-stroke, already finishing a line you have not yet begun.',
      choices: [],
    },
  ],
};

export default paradoxPaletteStory;
