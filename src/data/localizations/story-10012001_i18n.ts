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

export const story_10012001StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Cosmic Castaway',
    description: 'Awakened in a dying spacecraft, you must decide whether to gamble on emergency repairs or risk an uncharted planet below. Every choice pulls you deeper into a fight for survival far from home.',
    author: 'Commander Lyra Hayes',
    nodes: {
      'story-10012001-1': {
        title: 'Catastrophic Wake-Up',
        narration: 'You jolt awake to alarms blaring and lights flickering. Your spacecraft has been struck by debris, leaving you adrift in the void. The hull is breached and oxygen is low. Through the cockpit window, you see a desolate planet below and the endless expanse of stars. With communications down and systems failing, you must act quickly if you hope to survive.',
        choices: {
          'story-10012001-c1': {
            text: 'Try to repair the ship\'s systems and signal for help',
          },
          'story-10012001-c2': {
            text: 'Abandon ship in an escape pod toward the planet',
          },
        },
      },
      'story-10012001-2': {
        title: 'Critical Repairs',
        narration: 'You stay aboard, heart pounding as you float through the crippled cabin. The oxygen meter is dropping. Sparks fly from a damaged console. You have limited time and tools. You stabilize your breathing and consider your options. The communication array is offline and the life support is failing. If you can fix one, it might make the difference between life and death.',
        choices: {
          'story-10012001-c3': {
            text: 'Repair the communications array to call for rescue',
          },
          'story-10012001-c4': {
            text: 'Focus on the life support system to buy more time',
          },
        },
      },
      'story-10012001-3': {
        title: 'Escape Pod Descent',
        narration: 'Deciding the ship is beyond saving, you seal your helmet and climb into the one-person escape pod. With a whoosh, it ejects. Through a small porthole, you watch your ruined ship recede. The pod hurtles toward the planet\'s surface, rattling violently. You brace yourself and moments later, crash-land on a barren, rocky plain under an alien sky. Staggering out, you survey endless red deserts and jagged mountains. The pod\'s systems are intact but resources are scant. As night approaches rapidly, you must determine your next move on this hostile world.',
        choices: {
          'story-10012001-c5': {
            text: 'Climb a ridge and activate the pod\'s beacon, hoping someone hears it',
          },
          'story-10012001-c6': {
            text: 'Gather supplies and search for water and shelter in the valley',
          },
        },
      },
      'story-10012001-4': {
        title: 'Signal Received',
        narration: 'Ignoring the thinning air, you reroute power to the communications array and send out a mayday. For agonizing minutes, there is no response. Just as darkness edges your vision, a crackling voice answers--a patrol ship picked up your distress signal! You collapse with relief as they home in on your beacon. Sometime later, you open your eyes aboard a rescue craft, an oxygen mask on your face. Through the window, you see your shattered ship being left behind. You are safe, saved by the signal you managed to send in time.',
        choices: {
        },
      },
      'story-10012001-5': {
        title: 'Silent Drift',
        narration: 'You devote precious energy to repairing life support--patching leaks and swapping in emergency oxygen canisters. The air stabilizes, buying you hours... but without communication, no one knows you are stranded. You drift alone in the silent darkness of space as time stretches on. Eventually, the oxygen runs out and the cold creeps in. Gazing at distant stars, you make peace with your fate. Your ship becomes your tomb, endlessly orbiting--a lone voyager gone silent in the void.',
        choices: {
        },
      },
      'story-10012001-6': {
        title: 'Beacon Tragedy',
        narration: 'Determined to call for help, you climb the tallest nearby rise and activate the escape pod\'s distress beacon. A weak signal flickers out. Hours pass with no reply. As you descend, the rocky ground gives way--you slip and tumble down a ravine, badly injuring yourself. Night falls, and with it, sub-zero cold. In the morning light, the beacon still blinks dutifully beside you, but you never stir again. Your last gamble ends in tragedy, your story lost on a lonely world.',
        choices: {
        },
      },
      'story-10012001-7': {
        title: 'Red World Survivor',
        narration: 'Accepting that rescue may never come, you salvage what you can from the pod--a water filter, a knife, a thermal blanket--and set off into the unknown. After days of hardship, you discover a sheltered canyon with a trickle of fresh water and edible fungi. It is not paradise, but it is life. As months pass, you learn to hunt the small rock-creatures and endure the crimson planet\'s brutal conditions. Each night, you stare at the stars, wondering if anyone out there wonders what became of you--the cosmic castaway who now calls this alien world home.',
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
