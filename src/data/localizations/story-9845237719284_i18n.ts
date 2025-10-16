import { Language } from '../../localization/translations';

interface StoryTranslations {
  title: string;
  description: string;
  author: string;
  nodes: {
    [nodeId: string]: {
      title: string;
      narration: string;
      choices: {
        [choiceId: string]: {
          text: string;
          description?: string;
        };
      };
    };
  };
}

export const story_9845237719284StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Ember Crown Oath',
    description: 'When a mapmaker’s sketch warms to living ember, forgotten waylines flare across the coast. A warlord moves to rekindle the mountain and seize the Crown that now answers your hand. Will you share its fire, break it, or wear it?',
    author: 'ChronoCanvas Studio',
    nodes: {
      'story-9845237719284-1': {
        title: 'Cinder Omen',
        narration: 'Dawn breathes mist through pines as your charcoal map glows from within, lines pulsing like sleeping embers. A circlet of blackened gold, warm to the touch, lies where no crown should—inside your satchel, between pressed leaves. Whispered rumors speak of an Ash Warlord marching inland, gathering fuel and fear. The crown’s heat rises, urging a path before the first village wakes.',
        choices: {
          'story-9845237719284-c1': {
            text: 'Head for the relic market.',
            description: 'Seek lore and allies.',
          },
          'story-9845237719284-c2': {
            text: 'Scout the ridge lookout.',
            description: 'Read the land’s intent.',
          },
        },
      },
      'story-9845237719284-2': {
        title: 'Relic Market',
        narration: 'Tents ripple like scales; charms clink on strings against the sea breeze. A toothless broker eyes the ember crown’s glow bleeding through your satchel and gestures you closer. “Maps burn truer near the river crossing,” she rasps, “but the Firebrand scouts watch it now.”',
        choices: {
          'story-9845237719284-c3': {
            text: 'Buy an arcane map overlay.',
            description: 'Let lines reveal lines.',
          },
          'story-9845237719284-c4': {
            text: 'Shadow a Firebrand scout.',
            description: 'Information at a cost.',
          },
        },
      },
      'story-9845237719284-3': {
        title: 'Ridge Lookout',
        narration: 'Black sand ribbons the coast; smoke fingers rise from a far caldera. On the wind: marching drums and the iron-salt smell of quenched blades. A glint moves below—Firebrand scouts skirting the road toward the river.',
        choices: {
          'story-9845237719284-c5': {
            text: 'Trail the scouts unseen.',
            description: 'Use height and hush.',
          },
          'story-9845237719284-c6': {
            text: 'Drop into the cavern mouth shortcut.',
            description: 'Old maps show a hollow under the ridge.',
          },
        },
      },
      'story-9845237719284-4': {
        title: 'Arcane Overlay',
        narration: 'Transparent vellum drinks a drop of crown-heat and blooms with hidden paths. A faint sigil points not only to the river but to a “secret passage” etched beneath the cliffs. The broker smiles, gums shining: “Every shortcut is a kind of promise.”',
        choices: {
          'story-9845237719284-c7': {
            text: 'Take the river crossing',
            description: 'Open, watched, but swift.',
          },
          'story-9845237719284-c8': {
            text: 'Seek the secret passage.',
            description: 'Risk for stealth.',
          },
        },
      },
      'story-9845237719284-5': {
        title: 'Firebrand Scout',
        narration: 'A lone scout pauses beneath a wind-bent pine, checking a charcoal schedule. Ash-marks stripe their jaw—loyalty lines to the Warlord. When the crown warms, the scout’s eyes lift, sensing a lord’s presence where none stands.',
        choices: {
          'story-9845237719284-c9': {
            text: 'Ambush and question them.',
            description: 'Quick, quiet, decisive.',
          },
          'story-9845237719284-c10': {
            text: 'Slip past toward the river.',
            description: 'Trade answers for time.',
          },
        },
      },
      'story-9845237719284-6': {
        title: 'Cavern Mouth',
        narration: 'Basalt arches drink the surf in hollow gulps; lichen glitters like small constellations. Old chisels lie rusting near a narrow stair spiraling down. The crown hums at the threshold, half warning, half welcome.',
        choices: {
          'story-9845237719284-c11': {
            text: 'Take the secret passage.',
            description: 'Trust the old cut.',
          },
          'story-9845237719284-c12': {
            text: 'Cross the echo bridge inside.',
            description: 'Speed over stealth.',
          },
        },
      },
      'story-9845237719284-7': {
        title: 'River Crossing',
        narration: 'Boats rock against tarred ropes; ferrymen mutter about “oathfire” and “sky shrines.” A chalk-boarded post lists tithe rates from the Warlord’s quartermaster. Villagers watch you as one might watch approaching weather.',
        choices: {
          'story-9845237719284-c13': {
            text: 'Parley with the village head.',
            description: 'Win trust, win time.',
          },
          'story-9845237719284-c14': {
            text: 'Test the crown at the ford.',
            description: 'Power invites risk.',
          },
        },
      },
      'story-9845237719284-8': {
        title: 'Secret Passage',
        narration: 'You trace a sigil on stone; the seam accepts you with a sigh. Candles that no one lit gutter to life, revealing chalk tallies—many passes, few returns. The corridor slopes toward a crystalline hum.',
        choices: {
          'story-9845237719284-c15': {
            text: 'Head to the ember test chamber.',
            description: 'Prove worth, or pay.',
          },
          'story-9845237719284-c16': {
            text: 'Cross the echo bridge.',
            description: 'Shorten the path.',
          },
        },
      },
      'story-9845237719284-9': {
        title: 'Scout’s Confession',
        narration: 'Pinned against basalt, the scout yields quickly when the crown’s heat prickles the air. “The Warlord feeds a kiln under the mountain,” they whisper, eyes wet with smoke. “When it roars, your villages will kneel.”',
        choices: {
          'story-9845237719284-c17': {
            text: 'Spare them and seek village allies.',
            description: 'Mercy buys messengers.',
          },
          'story-9845237719284-c18': {
            text: 'Hurry to study the Warlord’s plan.',
            description: 'Knowledge is leverage.',
          },
        },
      },
      'story-9845237719284-10': {
        title: 'Echo Bridge',
        narration: 'A narrow span sings with every step; your breath returns to you in other voices. In the drop below, crystals chime like rain on glass. The crown’s glow threads thin paths over the void, as if offering footholds only you can see.',
        choices: {
          'story-9845237719284-c19': {
            text: 'Follow the crystal path to the span.',
            description: 'Toward the sky shrine.',
          },
          'story-9845237719284-c20': {
            text: 'Detour to the ember test.',
            description: 'Prove your claim first.',
          },
        },
      },
      'story-9845237719284-11': {
        title: 'Village Parley',
        narration: 'Elders sit with hands like driftwood and eyes like tidepools. They speak of oathfire—flame that binds without burning—and a shrine that chooses bearers by breath, not birth. Children circle at a distance, daring each other to whisper “queen.”',
        choices: {
          'story-9845237719284-c21': {
            text: 'Swear the oathfire publicly.',
            description: 'Win hearts, gain weight.',
          },
          'story-9845237719284-c22': {
            text: 'Slip out via the smuggler path.',
            description: 'Allies later; time now.',
          },
        },
      },
      'story-9845237719284-12': {
        title: 'Ember Test',
        narration: 'A brazier sleeps, rimmed with ash sigils. When you lower the crown, the brazier flares white-gold without consuming. Every heartbeat writes a line of light in the air, a ledger of intent that cannot lie.',
        choices: {
          'story-9845237719284-c23': {
            text: 'Bind yourself to protect the villages.',
            description: 'Duty over power.',
          },
          'story-9845237719284-c24': {
            text: 'Claim right to confront the sky shrine.',
            description: 'Authority before action.',
          },
        },
      },
      'story-9845237719284-13': {
        title: 'Warlord’s Plan',
        narration: 'Maps pinned to a stolen ledger show fuel depots feeding a subterranean kiln. A marked date looms: “Ignition.” A note in a different hand reads: “The Crown bows to breath—steal the bearer’s voice.”',
        choices: {
          'story-9845237719284-c25': {
            text: 'Sabotage the kiln tunnels.',
            description: 'Cut the throat of the plan.',
          },
          'story-9845237719284-c26': {
            text: 'Slip to the smuggler path.',
            description: 'Flank and warn the shrine.',
          },
        },
      },
      'story-9845237719284-14': {
        title: 'Crystal Span',
        narration: 'Stars comb the sky; the span hums a scale you feel in your teeth. Wind threads the crown with thin, cold fingers, asking questions without language. Footprints lead upward—others came, or will.',
        choices: {
          'story-9845237719284-c27': {
            text: 'Climb to the sky shrine.',
            description: 'Seek sanction.',
          },
          'story-9845237719284-c28': {
            text: 'Cut away to the kiln route.',
            description: 'Stop ignition first.',
          },
        },
      },
      'story-9845237719284-15': {
        title: 'Oathfire',
        narration: 'Flame climbs your wrist like a tame vine and leaves a warm cuff of light. Villagers exhale—a sound like surf relieving itself against shore. The crown softens, less heavy, as if pleased by shared weight.',
        choices: {
          'story-9845237719284-c29': {
            text: 'Petition the sky shrine.',
            description: 'Carry communal breath upward.',
          },
          'story-9845237719284-c30': {
            text: 'Seek counsel on the crown’s whispers.',
            description: 'Understand before acting.',
          },
        },
      },
      'story-9845237719284-16': {
        title: 'Smuggler Path',
        narration: 'A door appears where a door shouldn’t and opens into salt-stale dark. Crates whisper of quiet defiance: rope, oil, old charts with honest corrections. Footfalls echo—friends or foes learning to be both.',
        choices: {
          'story-9845237719284-c31': {
            text: 'From here, strike the kiln.',
            description: 'Straight to the throat.',
          },
          'story-9845237719284-c32': {
            text: 'Listen to the crown’s counsel.',
            description: 'Risk the whisper.',
          },
        },
      },
      'story-9845237719284-17': {
        title: 'Volcanic Kiln',
        narration: 'Stone lungs heave heat; chains rattle like winter bones. Workers feed timber and fear into a throat of red. A single valve groans—one twist from scream or silence.',
        choices: {
          'story-9845237719284-c33': {
            text: 'Jam the valve and flee.',
            description: 'Sabotage beats speeches.',
          },
          'story-9845237719284-c34': {
            text: 'Divert the pressure toward the sky vents.',
            description: 'Buy time for the shrine.',
          },
        },
      },
      'story-9845237719284-18': {
        title: 'Sky Shrine',
        narration: 'High above stormbanks, bells made of clouded glass ring without hands. A voice like weather asks nothing and knows everything. The crown cools as if in the presence of a parent, waiting to see what you have become.',
        choices: {
          'story-9845237719284-c35': {
            text: 'Ask to share the crown’s fire.',
            description: 'Many hands, lighter load.',
          },
          'story-9845237719284-c36': {
            text: 'Ask for strength to break it.',
            description: 'No tyrant, no tool.',
          },
        },
      },
      'story-9845237719284-19': {
        title: 'Crown Whispers',
        narration: 'When you listen, a chorus answers—past bearers singing through tooth and tongue. They warn of a simpler path: wear the crown deeply, let others orbit your certainty. The warmth tastes like honey; the aftertaste like ash.',
        choices: {
          'story-9845237719284-c37': {
            text: 'Reject the lure; seek the shrine.',
            description: 'You are not a furnace.',
          },
          'story-9845237719284-c38': {
            text: 'Lean into sovereignty.',
            description: 'Rule ends arguments.',
          },
        },
      },
      'story-9845237719284-20': {
        title: 'Final Approach',
        narration: 'The mountain holds its breath; the villages hold theirs with it. Your next stroke will decide the shape of heat tomorrow. In your palm, the crown weighs like promise and warning.',
        choices: {
          'story-9845237719284-c39': {
            text: 'Claim the crown as sovereign.',
            description: 'Bend the fire to your will.',
          },
          'story-9845237719284-c40': {
            text: 'Share the flame with the villages.',
            description: 'Many bearers, no tyrant.',
          },
          'story-9845237719284-c41': {
            text: 'Walk away into quiet exile.',
            description: 'Refuse both throne and war.',
          },
          'story-9845237719284-c42': {
            text: 'Break the crown at the shrine’s word.',
            description: 'End the question forever.',
          },
        },
      },
      'story-9845237719284-21': {
        title: 'Ash Sovereign',
        narration: 'The crown roots through your voice and the mountain kneels. Villages bow—and flinch. Peace arrives quickly, like a storm’s eye: calm and watched. Your maps go out of date; your name does not.',
        choices: {
        },
      },
      'story-9845237719284-22': {
        title: 'Shared Flame',
        narration: 'You lift the crown and it divides like bread, embers taking root in many hands. The kiln cools; the Warlord’s plans die choked on community. Festivals bloom where garrisons would have stood, and maps are drawn by chorus.',
        choices: {
        },
      },
      'story-9845237719284-23': {
        title: 'Quiet Exile',
        narration: 'You leave the crown where bells remember you fondly. The mountain dozes uneasily, but never wakes angry. Years later, children follow a traveling mapmaker who draws safe paths through ash fields by listening to wind.',
        choices: {
        },
      },
      'story-9845237719284-24': {
        title: 'Broken Crown',
        narration: 'Gold screams like glass when you strike it on stone; embers leap, then settle as soft, ordinary warmth. The shrine sighs with relief, and history loses a tyrant it might have met. Your hands keep a faint glow on winter nights—enough to boil tea.',
        choices: {
        },
      },
    },
  },

  // Русский - Not yet translated
  ru: { title: '', description: '', author: '', nodes: {} },

  // Español - Not yet translated
  es: { title: '', description: '', author: '', nodes: {} },

  // Deutsch - Not yet translated
  de: { title: '', description: '', author: '', nodes: {} },

  // Français - Not yet translated
  fr: { title: '', description: '', author: '', nodes: {} },

  // Português - Not yet translated
  pt: { title: '', description: '', author: '', nodes: {} },

  // 日本語 - Not yet translated
  ja: { title: '', description: '', author: '', nodes: {} },

  // 中文 - Not yet translated
  zh: { title: '', description: '', author: '', nodes: {} },

  // 한국어 - Not yet translated
  ko: { title: '', description: '', author: '', nodes: {} },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
