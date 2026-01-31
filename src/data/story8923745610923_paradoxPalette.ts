import { Story } from '../types';

// ChronoCanvas Interactive Story for React Native
// STORY THEME: Time can be sketched, erased, and repainted like art; every stroke has a cost.
// SETTING: A modern city's midnight museum, rain-slick alleys, and a sunken desert temple glimpsed through temporal doors.
// PROTAGONIST: Nova Reyes, a restoration artist-hacker who wields the ChronoCanvas--an obsidian sketchbook that edits time.
// CONFLICT: A grieving curator intends to excise a catastrophic hour from history, tearing a widening paradox in the timeline.
// TONE: Suspenseful, wonder-filled, and emotionally charged with moments of quiet melancholy and daring resolve.
// STRUCTURE: 17 decision layers before any ending, 22 total nodes, strictly linear progression

export const paradoxPaletteStory: Story = {
  id: 'story-8923745610923',
  title: 'Paradox Palette',
  description:
    'At midnight, a museum restorer discovers a sketchbook that can repaint time. Each line drawn mends one fracture and splits another, as a grieving curator moves to excise a tragic hour forever. Can you compose a timeline that holds--before the canvas tears itself apart?',
  coverImageUrl:
    'https://images.unsplash.com/photo-1555685812-4b943f3e0b90?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1504384308090-c54be3855833?w=400',
  author: 'ChronoCanvas Studio',
  genre: 'scifi',
  involvement: 'medium',
  estimatedDuration: 55,
  isPremium: true,
  productId: 'com.app.story.paradox-palette',
  version: '1.0',
  createdAt: '2025-01-12',
  updatedAt: '2025-01-30',
  totalNodes: 22,
  totalEndings: 4,
  startNodeId: 'story-8923745610923-1',
  nodes: [
    // LAYER 1: Start
    {
      id: 'story-8923745610923-1',
      storyId: 'story-8923745610923',
      type: 'start',
      title: 'Ink of Time',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        'On a workbench beneath a single lamp, gears glint like stars embedded in brass. Nova flips open a jet-black sketchbook--the ChronoCanvas--and a faint hum prickles the air. A line drawn across the page ripples the room, nudging a pendulum\'s swing into a different beat. Beyond the locked restoration lab, the museum groans at midnight, as if remembering something it had tried to forget. The canvas feels warm, alive, hungry for purpose.',
      choices: [
        {
          id: 'story-8923745610923-c1',
          text: 'Slip into the museum galleries to investigate.',
          description: 'Follow the hum toward its source.',
          targetNodeId: 'story-8923745610923-2',
          order: 1,
        },
        {
          id: 'story-8923745610923-c2',
          text: 'Test a small stroke in the alley outside first.',
          description: 'Safer distance--if anything cracks.',
          targetNodeId: 'story-8923745610923-2',
          order: 2,
        },
      ],
    },
    // LAYER 2
    {
      id: 'story-8923745610923-2',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Midnight Threshold',
      imageUrl:
        'https://images.unsplash.com/photo-1531297461136-82lw9z2910a5?w=800',
      narration:
        'Marble floors mirror lanky shadows of sculptures frozen mid-gesture. Security lights pulse in a heartbeat rhythm, syncing to some deeper metronome Nova can feel in her teeth. The ChronoCanvas vibrates against her hip, resonating with something vast and buried deep beneath the foundations. A curator\'s silhouette crosses a distant doorway, carrying rolled blueprints that crackle with static time.',
      choices: [
        {
          id: 'story-8923745610923-c3',
          text: 'Follow the curator at a careful distance.',
          description: 'Answers hide in those blueprints.',
          targetNodeId: 'story-8923745610923-3',
          order: 1,
        },
        {
          id: 'story-8923745610923-c4',
          text: 'Head to the grand clock hall instead.',
          description: 'The museum\'s heart might reveal the pulse.',
          targetNodeId: 'story-8923745610923-3',
          order: 2,
        },
      ],
    },
    // LAYER 3
    {
      id: 'story-8923745610923-3',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Echoing Corridors',
      imageUrl:
        'https://images.unsplash.com/photo-1515630278258-407f66498911?w=800',
      narration:
        'Footsteps echo between staff doors, the rhythm irregular--as if walking through pockets of thicker time. Nova\'s shadow overlays another on the wall, two silhouettes braided by emergency lights. A pressure builds at her temples; time itself objects to her presence here. The ChronoCanvas grows warm, offering comfort and warning in equal measure.',
      choices: [
        {
          id: 'story-8923745610923-c5',
          text: 'Cut them off with a sketched detour.',
          description: "Redraw the hallway's geometry to gain ground.",
          targetNodeId: 'story-8923745610923-4',
          order: 1,
        },
        {
          id: 'story-8923745610923-c6',
          text: 'Continue shadowing through side passages.',
          description: 'Patience preserves surprise.',
          targetNodeId: 'story-8923745610923-4',
          order: 2,
        },
      ],
    },
    // LAYER 4
    {
      id: 'story-8923745610923-4',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Whispering Curator',
      imageUrl:
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
      narration:
        'The curator pauses beneath vaulted ceilings, murmuring to the blueprint as if it might answer. The paper glows faintly where ink maps a spiral of hours cut from a single day. A name--"The Hour We Refuse"--is circled in red. Their shoulders tremble with grief held too long, too tight. Nova recognizes that posture; she has worn it herself in darker moments.',
      choices: [
        {
          id: 'story-8923745610923-c7',
          text: 'Photograph and decode the blueprint markings.',
          description: 'Knowledge before confrontation.',
          targetNodeId: 'story-8923745610923-5',
          order: 1,
        },
        {
          id: 'story-8923745610923-c8',
          text: 'Tail them deeper into staff-only halls.',
          description: 'Discovery in motion.',
          targetNodeId: 'story-8923745610923-5',
          order: 2,
        },
      ],
    },
    // LAYER 5
    {
      id: 'story-8923745610923-5',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Ciphered Blueprint',
      imageUrl:
        'https://images.unsplash.com/photo-1504384308090-c54be3855833?w=800',
      narration:
        'The captured image reveals coordinates folded into ornamental filigree--a cartographer\'s joke. Overlaid, the lines translate to a map of the museum basement and something older beneath it. A missing fragment, torn from the page, is the key to the sequence. Without it, the plan remains incomplete, a dangerous puzzle with a gaping hole at its center.',
      choices: [
        {
          id: 'story-8923745610923-c9',
          text: 'Search restoration records for the fragment.',
          description: 'Recover what was deliberately removed.',
          targetNodeId: 'story-8923745610923-6',
          order: 1,
        },
        {
          id: 'story-8923745610923-c10',
          text: 'Use the clock hall\'s rhythm to decode further.',
          description: 'Align ticks with cipher shifts.',
          targetNodeId: 'story-8923745610923-6',
          order: 2,
        },
      ],
    },
    // LAYER 6
    {
      id: 'story-8923745610923-6',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Hall of Clocks',
      imageUrl:
        'https://images.unsplash.com/photo-1515630278258-407f66498911?w=800',
      narration:
        'An orchestra of ticking surrounds a cathedral of glass domes and pendulums. One central clock stutters, then double-ticks, as if arguing with itself about the present. The ChronoCanvas warms in Nova\'s hand, hungry for a stabilizing line. The air tastes of copper and possibility; here, time is malleable, waiting for an artist\'s touch to reshape its flow.',
      choices: [
        {
          id: 'story-8923745610923-c11',
          text: 'Repair the central mechanism with a sketch.',
          description: 'Stability may reveal a hidden pattern.',
          targetNodeId: 'story-8923745610923-7',
          order: 1,
        },
        {
          id: 'story-8923745610923-c12',
          text: 'Draw a door on the clock face itself.',
          description: 'Make time a threshold to elsewhere.',
          targetNodeId: 'story-8923745610923-7',
          order: 2,
        },
      ],
    },
    // LAYER 7
    {
      id: 'story-8923745610923-7',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Security Sweep',
      imageUrl:
        'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800',
      narration:
        'Radios crackle--guards turn their route toward the clock hall. Nova sketches a detour, lines sliding a doorway three feet to the left, just enough to slip through. The building sighs, aggravated but compliant. In the brief respite, she spots something glinting beneath a display case--an object that should not be there, humming with familiar resonance.',
      choices: [
        {
          id: 'story-8923745610923-c13',
          text: 'Retrieve the glinting object quickly.',
          description: 'Fortune favors the prepared.',
          targetNodeId: 'story-8923745610923-8',
          order: 1,
        },
        {
          id: 'story-8923745610923-c14',
          text: 'Avoid distraction and stay focused.',
          description: 'The curator is the priority.',
          targetNodeId: 'story-8923745610923-8',
          order: 2,
        },
      ],
    },
    // LAYER 8
    {
      id: 'story-8923745610923-8',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Clockwork Heart',
      imageUrl:
        'https://images.unsplash.com/photo-1555685812-4b943f3e0b90?w=800',
      narration:
        'The central mechanism opens like a ribcage, gears glistening with oil and memory. With a careful stroke, Nova bridges a missing tooth; the second hand exhales into smooth motion. In that calm, a hidden compartment clicks--an invitation. Within lies a fragment of vellum, ancient and smelling of cedar, bearing a glyph that seems to move when unobserved, watching back.',
      choices: [
        {
          id: 'story-8923745610923-c15',
          text: 'Study the fragment\'s glyph carefully.',
          description: 'Understanding before action.',
          targetNodeId: 'story-8923745610923-9',
          order: 1,
        },
        {
          id: 'story-8923745610923-c16',
          text: 'Take it and seek the hidden vault.',
          description: 'The key must have a lock.',
          targetNodeId: 'story-8923745610923-9',
          order: 2,
        },
      ],
    },
    // LAYER 9
    {
      id: 'story-8923745610923-9',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Lost Fragment',
      imageUrl:
        'https://images.unsplash.com/photo-1504384308090-c54be3855833?w=800',
      narration:
        'The torn vellum shows a glyph shaped like a brushstroke formed into a number nine lying on its side. When held to light, the mark resembles an eye--and a loop. It matches the gap in the blueprint perfectly, completing a circuit of understanding. Nova\'s hands tremble; she holds the missing piece of a plan to unmake an hour of history, and the weight of that knowledge tastes like copper.',
      choices: [
        {
          id: 'story-8923745610923-c17',
          text: 'Sketch a replacement glyph to test the circuit.',
          description: 'Improvise the missing key.',
          targetNodeId: 'story-8923745610923-10',
          order: 1,
        },
        {
          id: 'story-8923745610923-c18',
          text: 'Use the original fragment to find the vault.',
          description: 'Authenticity over imitation.',
          targetNodeId: 'story-8923745610923-10',
          order: 2,
        },
      ],
    },
    // LAYER 10
    {
      id: 'story-8923745610923-10',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Hidden Vault',
      imageUrl:
        'https://images.unsplash.com/photo-1515630278258-407f66498911?w=800',
      narration:
        'A sand-scented draft whispers from an armored seam behind stacked crates. The fragment fits like a missing tooth into a circular lock, and the wall unstitches into a spiral stair descending into darkness. Something ancient and mathematical waits below, humming with the resonance of forgotten hours and painted possibilities, singing a song older than the museum above.',
      choices: [
        {
          id: 'story-8923745610923-c19',
          text: 'Descend the spiral staircase alone.',
          description: 'Face what lies beneath.',
          targetNodeId: 'story-8923745610923-11',
          order: 1,
        },
        {
          id: 'story-8923745610923-c20',
          text: 'Leave a marker and gather more supplies.',
          description: 'Caution before commitment.',
          targetNodeId: 'story-8923745610923-11',
          order: 2,
        },
      ],
    },
    // LAYER 11
    {
      id: 'story-8923745610923-11',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Descending Passage',
      imageUrl:
        'https://images.unsplash.com/photo-1555685812-4b943f3e0b90?w=800',
      narration:
        'The spiral stair descends into depths that feel impossible beneath a city museum. Stone walls give way to crystalline formations that pulse with soft blue light, each crystal containing what looks like a frozen moment--a raindrop suspended, a bird mid-wingbeat, a tear on a cheek. The air grows thick with temporal potential.',
      choices: [
        {
          id: 'story-8923745610923-c21',
          text: 'Touch one of the crystals to understand them.',
          description: 'Learn from the frozen moments.',
          targetNodeId: 'story-8923745610923-12',
          order: 1,
        },
        {
          id: 'story-8923745610923-c22',
          text: 'Hurry past to find the chamber\'s heart.',
          description: 'Do not linger in strange places.',
          targetNodeId: 'story-8923745610923-12',
          order: 2,
        },
      ],
    },
    // LAYER 12
    {
      id: 'story-8923745610923-12',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Crystalline Memory',
      imageUrl:
        'https://images.unsplash.com/photo-1531297461136-82lw9z2910a5?w=800',
      narration:
        'Touching the crystal floods Nova with visions--not her own memories, but echoes of those who wielded the ChronoCanvas before. Each keeper faced the same choice she now confronts: to preserve, destroy, or transform. Their wisdom and their failures intermingle, offering guidance and warning in equal measure. The canvas hums, recognizing its lineage.',
      choices: [
        {
          id: 'story-8923745610923-c23',
          text: 'Accept the ancestral knowledge fully.',
          description: 'Let their experience guide your hand.',
          targetNodeId: 'story-8923745610923-13',
          order: 1,
        },
        {
          id: 'story-8923745610923-c24',
          text: 'Filter their wisdom through your own judgment.',
          description: 'History informs, but does not command.',
          targetNodeId: 'story-8923745610923-13',
          order: 2,
        },
      ],
    },
    // LAYER 13
    {
      id: 'story-8923745610923-13',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Ancient City',
      imageUrl:
        'https://images.unsplash.com/photo-1504384308090-c54be3855833?w=800',
      narration:
        'Moonlight pools in a roofless chamber where sand drifts like snow. Reliefs show artists painting with comet tails, their murals looping days into new shapes. Footprints--fresh--circle a dais carved into a nine-turned-eye. The air shimmers with potential, every grain of sand a moment waiting to be arranged by willing hands.',
      choices: [
        {
          id: 'story-8923745610923-c25',
          text: "Study the temple's murals for instruction.",
          description: 'Learn before acting.',
          targetNodeId: 'story-8923745610923-14',
          order: 1,
        },
        {
          id: 'story-8923745610923-c26',
          text: 'Approach the dais immediately.',
          description: 'The heart of the paradox awaits.',
          targetNodeId: 'story-8923745610923-14',
          order: 2,
        },
      ],
    },
    // LAYER 14
    {
      id: 'story-8923745610923-14',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Drawn Doorway',
      imageUrl:
        'https://images.unsplash.com/photo-1555685812-4b943f3e0b90?w=800',
      narration:
        'At the chamber\'s end, cold air spills through a sketch Nova does not remember making, flavored with dust and a scent like sun on old stone. Beyond, sand sings softly in a space that should not exist beneath a city museum. The ChronoCanvas grows heavy, recognizing its counterpart--a place where time was first painted into being by hands that understood sacrifice.',
      choices: [
        {
          id: 'story-8923745610923-c27',
          text: 'Step through into the deeper chamber.',
          description: 'Seize the initiative.',
          targetNodeId: 'story-8923745610923-15',
          order: 1,
        },
        {
          id: 'story-8923745610923-c28',
          text: 'Sketch a tether before entering.',
          description: 'Ensure a path back.',
          targetNodeId: 'story-8923745610923-15',
          order: 2,
        },
      ],
    },
    // LAYER 15
    {
      id: 'story-8923745610923-15',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Temple Trial',
      imageUrl:
        'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800',
      narration:
        'Wind combs the sand into patient spirals. The murals whisper an answer: to fix a wound, paint over oneself where the wound would be. The dais thrums, counting down in a language of dust and heartbeat. Nova understands now--the curator sought to erase pain, but time demands a different kind of healing, one that acknowledges rather than denies.',
      choices: [
        {
          id: 'story-8923745610923-c29',
          text: 'Sacrifice the canvas to seal the breach.',
          description: 'A brush that paints itself away.',
          targetNodeId: 'story-8923745610923-16',
          order: 1,
        },
        {
          id: 'story-8923745610923-c30',
          text: 'Rewrite your own thread to carry the scar.',
          description: 'Become the patch that holds.',
          targetNodeId: 'story-8923745610923-16',
          order: 2,
        },
      ],
    },
    // LAYER 16
    {
      id: 'story-8923745610923-16',
      storyId: 'story-8923745610923',
      type: 'decision',
      title: 'Paradox Equation',
      imageUrl:
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
      narration:
        'Stars blink like nodes in a network, lines of potential connecting past to now. The blueprint overlays reality, showing the cut hour as a bright wound. The ChronoCanvas pulses, demanding a choice: heal by surrender, or heal by cost. Either way, Nova will not emerge unchanged. The timeline holds its breath, waiting for her brush to fall.',
      choices: [
        {
          id: 'story-8923745610923-c31',
          text: 'Restore the hour and absorb the backlash.',
          description: 'Keep the canvas--but it keeps you.',
          targetNodeId: 'story-8923745610923-17',
          order: 1,
        },
        {
          id: 'story-8923745610923-c32',
          text: 'Let the canvas consume itself to close the wound.',
          description: 'Lose the tool, save the world.',
          targetNodeId: 'story-8923745610923-18',
          order: 2,
        },
        {
          id: 'story-8923745610923-c33',
          text: 'Merge with the paradox to rewrite the rules.',
          description: 'Become something new.',
          targetNodeId: 'story-8923745610923-19',
          order: 3,
        },
        {
          id: 'story-8923745610923-c34',
          text: 'Paint a bridge for others to choose.',
          description: 'Share the burden of time.',
          targetNodeId: 'story-8923745610923-20',
          order: 4,
        },
      ],
    },
    // LAYER 17 - ENDINGS (16 decisions before any ending, well above 10 minimum)
    {
      id: 'story-8923745610923-17',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Timeline Healed',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      narration:
        'You restore the hour, accepting the backlash as a personal undertow. Days later, you wake with a new tremor, a ghost-tick in your wrist that syncs with distant storms. The world continues--whole--while you learn to hold its weather alone. The ChronoCanvas remains, but you are bound to it now, a living anchor for the timeline you saved.',
      choices: [],
    },
    {
      id: 'story-8923745610923-18',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Canvas Consumed',
      imageUrl:
        'https://images.unsplash.com/photo-1531297461136-82lw9z2910a5?w=800',
      narration:
        'The ChronoCanvas drinks its own ink, page by page, until only a smell of rain remains. The wound closes without a seam, history smoothing over like wet paint drying. You will never sketch time again, but clocks everywhere breathe easier. In the silence, you find a different kind of peace--the ordinary rhythm of seconds passing unaltered.',
      choices: [],
    },
    {
      id: 'story-8923745610923-19',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Paradox Merged',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      narration:
        'You step into the paradox itself, becoming a living bridge between what was and what could be. Your form flickers at the edges, neither fully present nor absent. The curator\'s grief finds voice through you, transformed into art that heals rather than destroys. You are no longer merely Nova; you are the palette upon which time repaints itself.',
      choices: [],
    },
    {
      id: 'story-8923745610923-20',
      storyId: 'story-8923745610923',
      type: 'ending',
      title: 'Shared Canvas',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      narration:
        'You paint a door that opens for all who bear loss, inviting them to add their strokes to the healing. The curator joins first, then others, each contributing a line to the greater composition. No single hand holds the burden; the timeline mends through collective care. The ChronoCanvas becomes a shared legacy, passed from artist to artist across generations.',
      choices: [],
    },
  ],
};

export default paradoxPaletteStory;
