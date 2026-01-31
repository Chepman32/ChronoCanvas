import { Story } from '../types';

export const cosmicCastawayStory: Story = {
  id: 'story-10012001',
  title: 'Cosmic Castaway',
  description:
    'Awakened in a dying spacecraft, you must navigate through ten critical decisions to survive. Every choice pulls you deeper into a fight for survival far from home, where each decision could be your last.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
  author: 'Commander Lyra Hayes',
  genre: 'scifi',
  involvement: 'medium',
  estimatedDuration: 50,
  isPremium: false,
  version: '2.0',
  createdAt: '2025-01-21',
  updatedAt: '2025-01-30',
  totalNodes: 25,
  totalEndings: 5,
  startNodeId: 'story-10012001-1',
  nodes: [
    {
      id: 'story-10012001-1',
      storyId: 'story-10012001',
      type: 'start',
      title: 'Catastrophic Wake-Up',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'You jolt awake to alarms blaring and red emergency lights flickering across the cabin. Your spacecraft, the Orion-7, has been struck by debris, leaving you adrift in the endless void. The hull is breached and oxygen levels are dropping dangerously low. Through the cracked cockpit window, you see a desolate crimson planet below and the endless expanse of distant stars. With communications completely down and critical systems failing, you must act quickly if you hope to survive this cosmic nightmare.',
      choices: [
        {
          id: 'story-10012001-c1',
          text: 'Seal the breach in the main corridor first',
          targetNodeId: 'story-10012001-2',
          order: 1,
        },
        {
          id: 'story-10012001-c2',
          text: 'Head to the cockpit to assess navigation systems',
          targetNodeId: 'story-10012001-2',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-2',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Critical Assessment',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      narration:
        'You move through the crippled ship, your heart pounding as you assess the damage. The oxygen meter shows forty minutes remaining. Sparks fly from damaged consoles, and the emergency lighting casts eerie shadows across floating debris. The communication array is offline, life support is failing, and orbit is decaying. You stabilize your breathing and force yourself to think clearly. Every second counts now. You must prioritize your actions carefully, knowing that each choice could mean the difference between survival and becoming another lost vessel in the void.',
      choices: [
        {
          id: 'story-10012001-c3',
          text: 'Patch the hull breach with emergency sealant',
          targetNodeId: 'story-10012001-3',
          order: 1,
        },
        {
          id: 'story-10012001-c4',
          text: 'Check the escape pod bay status first',
          targetNodeId: 'story-10012001-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-3',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Damage Control',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      narration:
        'Working quickly, you stabilize the most critical systems. The hull breach is temporarily sealed, and you have confirmed that two escape pods remain operational. However, the ship is still falling toward the planet below, and your oxygen reserves continue to deplete. The cockpit displays show you have less than two hours before the ship enters the atmosphere. You need to make a fundamental decision about your strategy. Do you commit to repairing the ship and trying to signal for rescue, or do you accept that the vessel is doomed and focus entirely on preparing for planetfall?',
      choices: [
        {
          id: 'story-10012001-c5',
          text: 'Attempt to repair communications for rescue',
          targetNodeId: 'story-10012001-4',
          order: 1,
        },
        {
          id: 'story-10012001-c6',
          text: 'Focus on preparing the escape pod',
          targetNodeId: 'story-10012001-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-4',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Oxygen Critical',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
      narration:
        'Your suit display flashes a warning. Oxygen levels are now critical. You have perhaps thirty minutes of breathable air remaining. You need to secure more oxygen immediately or you will not survive long enough to implement any rescue plan. The engineering bay holds reserve canisters, but reaching it requires navigating through the damaged section of the ship where debris floats freely. Alternatively, you could attempt to reach the escape pods now, where emergency oxygen supplies are already stocked and ready for immediate use.',
      choices: [
        {
          id: 'story-10012001-c7',
          text: 'Risk the journey to engineering for reserves',
          targetNodeId: 'story-10012001-5',
          order: 1,
        },
        {
          id: 'story-10012001-c8',
          text: 'Head directly to the escape pod bay',
          targetNodeId: 'story-10012001-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-5',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Critical Junction',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      narration:
        'You arrive at a critical junction in the ship\'s corridor. To your left, the path leads to engineering where oxygen reserves await. To your right, the escape pod bay offers immediate evacuation. Time is running out, and the ship groans around you as it continues its descent toward the planet. Your choice here will determine your entire strategy. Do you gamble on rescue by securing more resources, or do you cut your losses and flee while you still can?',
      choices: [
        {
          id: 'story-10012001-c9',
          text: 'Go to engineering for oxygen reserves',
          targetNodeId: 'story-10012001-6',
          order: 1,
        },
        {
          id: 'story-10012001-c10',
          text: 'Proceed to the escape pod bay',
          targetNodeId: 'story-10012001-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-6',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Engineering Bay',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
      narration:
        'You float through the narrow maintenance shaft into the engineering bay. Emergency lighting casts eerie shadows across damaged machinery. You locate three reserve oxygen canisters, enough for six hours if you ration carefully. As you swap them in, you notice the escape pod status board. Two pods show green indicators, fully operational. The third pod was destroyed in the impact. You now have breathable air, but the ship is still dying around you. The pods offer a way down to the planet, or you could keep fighting to repair the ship.',
      choices: [
        {
          id: 'story-10012001-c11',
          text: 'Return to try repairing the communications array',
          targetNodeId: 'story-10012001-8',
          order: 1,
        },
        {
          id: 'story-10012001-c12',
          text: 'Take the working escape pod to the planet',
          targetNodeId: 'story-10012001-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-7',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Escape Pod Bay',
      imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
      narration:
        'You arrive at the escape pod bay, where two operational pods await. Each is designed for a single occupant with enough supplies for seventy-two hours. You conduct a thorough inspection of the nearest pod, checking its heat shield, parachute systems, and navigation computer. The pod is cramped but functional. However, you realize that launching now might be premature. You could still try to buy more time by attempting emergency orbital maneuvers, or you could launch immediately while the ship is still in a stable enough position for a controlled descent.',
      choices: [
        {
          id: 'story-10012001-c13',
          text: 'Attempt emergency orbital maneuvers first',
          targetNodeId: 'story-10012001-9',
          order: 1,
        },
        {
          id: 'story-10012001-c14',
          text: 'Launch the escape pod immediately',
          targetNodeId: 'story-10012001-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-8',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Communications Array',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      narration:
        'You decide to gamble on rescue. Climbing toward the exterior communications array, you navigate through the ship\'s maintenance shafts. The array is mounted on the spine of the vessel, exposed to the harsh radiation of space. Through your helmet visor, you can see the infinite expanse of stars and the ominous red planet growing larger below. The array is damaged but repairable, a power coupling sheared off by the impact. Your suit warns of elevated radiation levels from a nearby stellar event. You must decide whether to risk exposure and repair it now or wait for the radiation to subside.',
      choices: [
        {
          id: 'story-10012001-c15',
          text: 'Repair immediately despite radiation risk',
          targetNodeId: 'story-10012001-11',
          order: 1,
        },
        {
          id: 'story-10012001-c16',
          text: 'Wait in shielding for radiation to pass',
          targetNodeId: 'story-10012001-12',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-9',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Emergency Thrusters',
      imageUrl: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800',
      narration:
        'You work at the engineering console, rerouting power from non-essential systems to the emergency thrusters. With careful adjustments, you fire short bursts to push the ship into a more stable orbit. The maneuvering jets strain against the planet\'s gravitational pull, and for a moment, the descent slows. But the ancient thrusters were not designed for sustained use. Two pods overheat and shut down permanently, warning lights flooding the console. You have bought some time, perhaps forty minutes, but the ship is still falling. The escape pod remains your only real option now.',
      choices: [
        {
          id: 'story-10012001-c17',
          text: 'Launch in the escape pod immediately',
          targetNodeId: 'story-10012001-10',
          order: 1,
        },
        {
          id: 'story-10012001-c18',
          text: 'Make one last desperate engine repair attempt',
          targetNodeId: 'story-10012001-13',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-10',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Pod Launch',
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
      narration:
        'You seal your helmet and climb into the compact escape pod, your heart pounding in your ears. The hatch pressurizes with a reassuring hiss as you initiate the launch sequence. The pod ejects with a violent jolt, and through the small porthole, you watch your dying ship recede into the void. The vessel that was your home for six months shrinks to a speck against the stars. The pod hurtles toward the planet\'s surface, rattling violently as it enters the atmosphere. The heat shield glows orange through the viewport as friction builds against the alien air.',
      choices: [
        {
          id: 'story-10012001-c19',
          text: 'Monitor the descent and prepare for impact',
          targetNodeId: 'story-10012001-14',
          order: 1,
        },
        {
          id: 'story-10012001-c20',
          text: 'Try to send one last transmission',
          targetNodeId: 'story-10012001-14',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-11',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Radiation Exposure',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      narration:
        'Your suit\'s radiation alarm screams as the stellar flare intensifies, but your hands keep working with practiced precision. The power coupling snaps into place with a satisfying click. The communications array hums to life, its status light turning from amber to bright green. You immediately transmit a mayday on all emergency frequencies as you scramble back toward the airlock. Every second of exposure is dangerous, but the signal is broadcasting. Inside the ship, you run a medical scan. Radiation levels are elevated but within survivable limits. Now you must wait and hope someone hears your call.',
      choices: [
        {
          id: 'story-10012001-c21',
          text: 'Send detailed coordinates and wait for response',
          targetNodeId: 'story-10012001-15',
          order: 1,
        },
        {
          id: 'story-10012001-c22',
          text: 'Keep transmitting on multiple frequencies',
          targetNodeId: 'story-10012001-15',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-12',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Radiation Shelter',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        'You retreat to the heavily shielded sleeping quarters to wait out the radiation storm. Hours pass slowly as you monitor the radiation levels on your tablet, watching the numbers gradually decrease. When it is finally safe to emerge, you check the communications array remotely. The window for repair has cost you precious time, and the ship\'s orbit has decayed significantly. You now have a critical decision. You could still attempt the repair, but you have much less time. Alternatively, you could abandon the communications attempt entirely and focus on immediate survival.',
      choices: [
        {
          id: 'story-10012001-c23',
          text: 'Make a rushed attempt to fix communications',
          targetNodeId: 'story-10012001-16',
          order: 1,
        },
        {
          id: 'story-10012001-c24',
          text: 'Abandon ship and take the escape pod',
          targetNodeId: 'story-10012001-7',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-13',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Engine Room Gamble',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        'You descend into the engine room where the main reactor glows dangerously through its containment field. Bypassing safety protocols, you manually override the cooling systems and reroute all remaining power to the main engines. The deck plates vibrate beneath your feet as the ancient drives attempt to fire. For one glorious moment, thrust builds, pushing against the planet\'s gravity. Then a catastrophic failure ripples through the system. Coolant lines burst, flooding the compartment with freezing vapor. You retreat, coughing, as the engines die permanently. The ship is now falling uncontrollably.',
      choices: [
        {
          id: 'story-10012001-c25',
          text: 'Race to the escape pod as the ship breaks up',
          targetNodeId: 'story-10012001-17',
          order: 1,
        },
        {
          id: 'story-10012001-c26',
          text: 'Accept your fate and record a final message',
          targetNodeId: 'story-10012001-18',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-14',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Controlled Descent',
      imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      narration:
        'The pod\'s navigation system attempts to stabilize your descent as you plummet through the alien atmosphere. The retro-thrusters fire in carefully calculated bursts, slowing your fall. Through the viewport, you see the red landscape rushing up to meet you, jagged mountains and vast deserts stretching to the horizon. The heat shield glows brilliantly, and the pod shakes violently. You brace for impact as the altimeter counts down rapidly. Moments later, the pod crashes into the planet\'s surface with a bone-jarring impact, tumbling across the rocky terrain before finally coming to rest against a large boulder.',
      choices: [
        {
          id: 'story-10012001-c27',
          text: 'Check your suit and assess pod damage',
          targetNodeId: 'story-10012001-19',
          order: 1,
        },
        {
          id: 'story-10012001-c28',
          text: 'Immediately activate the emergency beacon',
          targetNodeId: 'story-10012001-20',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-15',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Signal Sent',
      imageUrl: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800',
      narration:
        'The distress signal broadcasts continuously into the void, carrying your coordinates and desperate plea for help. You settle in to wait, conserving power and supplies while monitoring the communications console. Hours pass with agonizing slowness. The ship\'s orbit continues to decay, and you can feel the vessel beginning to shake as it skims the upper atmosphere. Time is running out. You face an impossible choice. Do you remain aboard, hoping for rescue that might come too late, or do you take your chances in the escape pod while you still have time for a controlled descent?',
      choices: [
        {
          id: 'story-10012001-c29',
          text: 'Wait one more hour for a response',
          targetNodeId: 'story-10012001-21',
          order: 1,
        },
        {
          id: 'story-10012001-c30',
          text: 'Launch the escape pod now while you can',
          targetNodeId: 'story-10012001-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-16',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Rushed Repair',
      imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
      narration:
        'You work frantically on the communications array, knowing that every minute brings you closer to atmospheric entry. Your hands move quickly but carefully, connecting the power coupling and adjusting the transmitter. The array flickers to life just as the ship begins to shudder from atmospheric drag. You send out a rapid series of transmissions including your coordinates and status. Through your helmet visor, you see the red planet\'s atmosphere beginning to glow around the ship. You have moments to decide. Stay and keep the signal strong, or run for the escape pod.',
      choices: [
        {
          id: 'story-10012001-c31',
          text: 'Stay and maintain the signal as long as possible',
          targetNodeId: 'story-10012001-22',
          order: 1,
        },
        {
          id: 'story-10012001-c32',
          text: 'Sprint to the escape pod immediately',
          targetNodeId: 'story-10012001-17',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-17',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Emergency Ejection',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      narration:
        'You sprint through the shaking corridors as the ship groans under atmospheric stress. Metal screams as hull plates buckle and tear. You reach the escape pod bay and launch yourself into the nearest vessel, slamming your palm on the ejection button. The pod rockets away just as the ship begins to break apart spectacularly. Through the viewport, you watch fragments of your former home scatter across the sky like burning meteors. The descent is rougher without proper trajectory calculations. The pod tumbles and spins before stabilizing for the final approach to the red planet\'s surface.',
      choices: [
        {
          id: 'story-10012001-c33',
          text: 'Brace for impact and secure equipment',
          targetNodeId: 'story-10012001-23',
          order: 1,
        },
        {
          id: 'story-10012001-c34',
          text: 'Try to steer toward the distant canyon',
          targetNodeId: 'story-10012001-23',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-18',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Final Recording',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        'With the ship breaking apart around you, you retreat to the cockpit one final time. Your fingers move across the console, recording a message for whoever might find it. You speak of the mission, the accident, and your acceptance of fate. As the hull tears open and atmosphere rushes out, you gaze at the stars one last time, thinking of home and those you left behind. The ship groans and shudders as it enters the atmosphere.',
      choices: [
        {
          id: 'story-10012001-c35',
          text: 'Continue recording your final thoughts',
          targetNodeId: 'story-10012001-42',
          order: 1,
        },
        {
          id: 'story-10012001-c36',
          text: 'Accept your fate with dignity and courage',
          targetNodeId: 'story-10012001-42',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-42',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Atmospheric Entry',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        'The ship becomes a brilliant fireball in the atmosphere, streaking across the alien sky like a dying star. The hull glows red-hot as friction tears at the metal. In your final moments, you feel a strange peace. You have done everything possible to survive, made every choice with courage and determination. Your story ends here, above this red world, but your final transmission carries onward through the void.',
      choices: [
        {
          id: 'story-10012001-c102',
          text: 'Transmit your final message',
          targetNodeId: 'story-10012001-35',
          order: 1,
        },
        {
          id: 'story-10012001-c103',
          text: 'Accept the end with peace',
          targetNodeId: 'story-10012001-35',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-19',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Post-Crash Assessment',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      narration:
        'You run a quick self-diagnostic. Bruised ribs, possible concussion, but your suit is intact and functional. The pod\'s systems show mixed results. Life support is operational, communications are dead, and the beacon has limited power. You have perhaps three days of supplies if you ration carefully. Through the viewport, you see an alien landscape of red sand and jagged rock formations. The sun is setting, and the temperature is already dropping. You need shelter soon, but you also need to decide whether to stay with the pod or venture out in search of better conditions.',
      choices: [
        {
          id: 'story-10012001-c37',
          text: 'Stay with the pod and conserve energy',
          targetNodeId: 'story-10012001-24',
          order: 1,
        },
        {
          id: 'story-10012001-c38',
          text: 'Gather supplies and explore for shelter',
          targetNodeId: 'story-10012001-25',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-20',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Beacon of Hope',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      narration:
        'You immediately activate the pod\'s emergency beacon, a rhythmic pulse of radio waves broadcasting your distress into the alien sky. The signal is strong but will only last as long as the power cells hold out. You settle in to wait, rationing your supplies and monitoring the signal. Days pass slowly as you watch the alien sun rise and set over the red desert. You begin to lose hope, wondering if anyone will ever hear your call across the vastness of space.',
      choices: [
        {
          id: 'story-10012001-c39',
          text: 'Conserve power and wait another day',
          targetNodeId: 'story-10012001-41',
          order: 1,
        },
        {
          id: 'story-10012001-c40',
          text: 'Boost the signal with remaining power',
          targetNodeId: 'story-10012001-41',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-41',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Rescue Approaches',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'On the seventh morning, a sound breaks the silence. Through the viewport, you spot a spacecraft descending on pillars of flame. Your beacon was heard. You can hardly believe your eyes as the rescue craft settles onto the alien soil, kicking up clouds of red dust. Your heart pounds with a mixture of relief and lingering fear. After so many hours of isolation and desperate choices, salvation is literally within reach. The craft lands with a soft thump.',
      choices: [
        {
          id: 'story-10012001-c100',
          text: 'Open the pod hatch and signal for help',
          targetNodeId: 'story-10012001-26',
          order: 1,
        },
        {
          id: 'story-10012001-c101',
          text: 'Verify the rescue team before revealing yourself',
          targetNodeId: 'story-10012001-26',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-21',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Rescue or Survival',
      imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
      narration:
        'Another hour passes in agonizing silence. You watch the communications console desperately, willing it to crackle with a response. The ship shakes more violently now as atmospheric drag increases. You are running out of time. The escape pod beckons, offering a chance at planetfall, but abandoning ship means giving up on the communications array. If you leave now, no one will ever know where you went. Yet staying means risking being trapped aboard a burning ship. The decision weighs heavily on you as the hull begins to groan under the stress.',
      choices: [
        {
          id: 'story-10012001-c41',
          text: 'Wait just a little longer for rescue',
          targetNodeId: 'story-10012001-27',
          order: 1,
        },
        {
          id: 'story-10012001-c42',
          text: 'Launch the escape pod immediately',
          targetNodeId: 'story-10012001-10',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-22',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Signal in the Void',
      imageUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800',
      narration:
        'You remain at the communications array, adjusting frequencies and boosting signal strength even as the ship enters the atmosphere. The hull begins to glow with heat, and warning klaxons scream throughout the vessel. You know you have stayed too long, but the signal must get through. As the ship breaks apart around you, your final transmission carries into the void, your coordinates and final words broadcast to the stars. Your story may end in fire, but your signal will carry on.',
      choices: [
        {
          id: 'story-10012001-c43',
          text: 'Accept your sacrifice with peace',
          targetNodeId: 'story-10012001-36',
          order: 1,
        },
        {
          id: 'story-10012001-c44',
          text: 'Hope your signal reaches someone',
          targetNodeId: 'story-10012001-36',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-23',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Hard Landing',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
      narration:
        'The pod crashes into the surface with devastating force, tumbling end over end across the rocky terrain before slamming against a massive boulder. Your head rings from the impact, and warning lights flash across the damaged console. You emerge battered but alive, your suit somehow still intact. The pod is damaged beyond repair, its systems dead. You are stranded on an alien world with limited supplies and no way to call for help. As you gather your scattered equipment and survey the harsh landscape in the fading light, you make a silent promise to yourself. You will survive.',
      choices: [
        {
          id: 'story-10012001-c45',
          text: 'Search the immediate area for shelter',
          targetNodeId: 'story-10012001-28',
          order: 1,
        },
        {
          id: 'story-10012001-c46',
          text: 'Use the wreckage to build a signal fire',
          targetNodeId: 'story-10012001-29',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-24',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Pod Shelter',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        'You decide the pod is your best chance for survival. Using emergency supplies, you create a makeshift shelter, reinforcing the damaged hatch and setting up a thermal blanket to conserve heat. The temperature continues to drop as night falls over the alien desert. You huddle in your sanctuary, rationing water and food, trying to make your supplies last. Outside, strange sounds echo across the rocky plain. The beacon pulses weakly, a faint hope in the darkness. You know you cannot stay here forever. The supplies will run out. You must decide your next move come morning.',
      choices: [
        {
          id: 'story-10012001-c47',
          text: 'Repair the beacon to boost signal strength',
          targetNodeId: 'story-10012001-30',
          order: 1,
        },
        {
          id: 'story-10012001-c48',
          text: 'Venture out to explore at dawn',
          targetNodeId: 'story-10012001-31',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-25',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Alien World',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration:
        'You force the damaged hatch open and step onto the alien surface. The ground is reddish sand mixed with sharp volcanic rock that crunches beneath your boots. In every direction, jagged mountains rise against a purple sky that fades to black at the zenith. The silence is absolute and eerie, broken only by your own breathing inside the helmet. Your suit sensors confirm the atmosphere is marginally breathable but thin. In the distance, you spot what looks like a canyon system that might offer shelter from the coming night. The sun touches the horizon, and the temperature plummets rapidly.',
      choices: [
        {
          id: 'story-10012001-c49',
          text: 'Return to the pod for warmth and planning',
          targetNodeId: 'story-10012001-32',
          order: 1,
        },
        {
          id: 'story-10012001-c50',
          text: 'Press on to investigate the canyon',
          targetNodeId: 'story-10012001-33',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-26',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Rescued',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'The rescue craft settles onto the alien soil, its powerful engines kicking up clouds of red dust. A hatch opens and figures in familiar uniforms emerge, waving frantically. You stumble toward them, weak with relief and gratitude. Strong arms help you aboard, offering water and medical attention. As the ship lifts off and carries you away from the red world, you gaze at it one last time through the viewport. You were a cosmic castaway, alone and facing death on an alien shore. But you survived. You fought for every breath, every choice, every moment. And now, you are going home.',
      choices: [],
    },
    {
      id: 'story-10012001-27',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Saved at the Last Hour',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
      narration:
        'Just as you are about to give up hope, the communications console crackles to life. A patrol vessel picked up your coordinates and is en route. Tears of relief stream down your face as you confirm your position and status. Within the hour, you see the rescue ship through the viewport, its sleek form maneuvering alongside your crippled vessel. You are safe. Your gamble of waiting paid off. As you are transferred to the rescue ship, you look back at the Orion-7 one last time, the broken ship that was almost your coffin, grateful for the second chance among the stars.',
      choices: [],
    },
    {
      id: 'story-10012001-28',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Survival Mode',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
      narration:
        'You search the immediate area around the crashed pod, looking for anything that might provide shelter. The landscape is harsh, all sharp rocks and red dust stretching to the horizon. As the sun sets, the temperature drops rapidly, and you realize you need to find cover quickly. Behind a nearby rock formation, you discover a small overhang that might offer some protection from the wind. It is not much, but it could mean the difference between surviving the night and freezing to death. You gather your supplies and prepare to endure the long cold hours ahead.',
      choices: [
        {
          id: 'story-10012001-c51',
          text: 'Set up camp under the overhang',
          targetNodeId: 'story-10012001-37',
          order: 1,
        },
        {
          id: 'story-10012001-c52',
          text: 'Keep searching for better shelter',
          targetNodeId: 'story-10012001-37',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-29',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Fire in the Night',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      narration:
        'Using components from the wrecked pod, you construct a massive signal fire, dousing it with emergency fuel. As night falls, you ignite it. Flames leap high into the alien sky, visible for kilometers in every direction. You feed the fire through the long cold night, hoping against hope that someone, somewhere, might see. By morning, your fuel is nearly gone, but the fire served its purpose. A patrol craft spotted the unusual heat signature and diverted to investigate. As the rescue ship descends, you realize your gamble paid off. You are going home.',
      choices: [],
    },
    {
      id: 'story-10012001-30',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Technical Triumph',
      imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
      narration:
        'Working with the damaged beacon, you manage to boost its signal strength by jury-rigging the pod\'s power cells. The rhythmic pulse now carries twice as far, reaching into space with your desperate plea. Days pass as you survive on rations and hope. Then, on the tenth morning, a response comes. A mining vessel passing through the sector picked up your enhanced signal. As you watch their shuttle descend toward your position, you feel overwhelming gratitude. Your technical skills saved your life. You are no longer a castaway. You are a survivor.',
      choices: [],
    },
    {
      id: 'story-10012001-31',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'First Exploration',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration:
        'At dawn, you venture out from the relative safety of your pod, determined to explore the alien landscape. The morning sun casts long shadows across the red desert as you trek toward the distant mountains. Your suit sensors detect trace amounts of water vapor in the air, suggesting there might be moisture somewhere nearby. After hours of walking, you discover a dry riverbed that cuts through the terrain like a scar. Following it might lead to water, or it might lead deeper into the desolate wilderness.',
      choices: [
        {
          id: 'story-10012001-c53',
          text: 'Follow the riverbed in search of water',
          targetNodeId: 'story-10012001-38',
          order: 1,
        },
        {
          id: 'story-10012001-c54',
          text: 'Return to the pod with your findings',
          targetNodeId: 'story-10012001-38',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-32',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Night in the Pod',
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
      narration:
        'You retreat to the crashed pod as darkness falls, sealing yourself inside the cramped capsule. The temperature drops precipitously, and you huddle in your thermal blanket, listening to the wind howl across the alien desert. Your beacon continues its weak pulse, a rhythmic reminder that you are still alive and still hoping. You fall into a fitful sleep, dreaming of green fields and blue skies. When morning comes, you wake to a strange sound outside. Something is moving out there in the red dawn.',
      choices: [
        {
          id: 'story-10012001-c55',
          text: 'Investigate the sound cautiously',
          targetNodeId: 'story-10012001-39',
          order: 1,
        },
        {
          id: 'story-10012001-c56',
          text: 'Stay hidden and silent inside the pod',
          targetNodeId: 'story-10012001-39',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-33',
      storyId: 'story-10012001',
      type: 'decision',
      title: 'Canyon Approach',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      narration:
        'You press on toward the canyon system, driven by the desperate hope of finding shelter. The journey is grueling, each step sinking into the loose red sand. As you near the canyon walls, you notice something remarkable. Vegetation grows in the shadows, hardy plants that have adapted to this harsh world. Where there are plants, there might be water. Your exhaustion momentarily forgotten, you quicken your pace, praying that this canyon holds the key to your survival on this alien world.',
      choices: [
        {
          id: 'story-10012001-c57',
          text: 'Search for water near the vegetation',
          targetNodeId: 'story-10012001-40',
          order: 1,
        },
        {
          id: 'story-10012001-c58',
          text: 'Set up camp while there is still light',
          targetNodeId: 'story-10012001-40',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012001-35',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Final Transmission',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      narration:
        'Your ship becomes a brilliant fireball in the atmosphere, streaking across the alien sky like a dying star. In your final moments, you feel a strange peace. You have done everything possible to survive, made every choice with courage and determination. Your story ends here, above this red world, but your final transmission carries onward through the void. Someday, someone will hear your words and know what became of the Orion-7. You are at peace, among the stars you once explored.',
      choices: [],
    },
    {
      id: 'story-10012001-36',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Signal in the Void',
      imageUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800',
      narration:
        'Your final transmission carries into the void, your coordinates and last words broadcast to the stars. Your story ends in fire and sacrifice, but somewhere, light-years away, your signal is received. Your sacrifice ensures that someday, someone will know what happened to the Orion-7 and its brave commander. You have not died in vain. Your name will be remembered among those who gave their lives in the pursuit of exploration and discovery.',
      choices: [],
    },
    {
      id: 'story-10012001-37',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Survivor of the Red World',
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
      narration:
        'You have survived your first night on the alien world. As days turn into weeks, you learn to adapt to this harsh environment. You discover edible lichens growing in the shadows of rocks and learn to extract moisture from the morning frost. The beacon continues its patient pulse, but even if rescue never comes, you have found a way to live. You are no longer just a castaway. You are a pioneer, the first human to call this red world home. Your story continues with each sunrise.',
      choices: [],
    },
    {
      id: 'story-10012001-38',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'The Journey Continues',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration:
        'Following the dry riverbed, you discover an underground spring that bubbles to the surface in a secluded grotto. Water, precious life-giving water, exists on this world. You have found the key to long-term survival. As you drink from the clear pool, you look up at the alien sky and smile. You are stranded, yes, but you are resourceful. You will build a life here, adapt and thrive. The red world has tested you, and you have proven yourself worthy. Your adventure is only beginning.',
      choices: [],
    },
    {
      id: 'story-10012001-39',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Rescue at Dawn',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        'The sound outside grows louder, and you dare to hope. Peering through the viewport, you see a rescue shuttle descending on pillars of flame. Your beacon was heard. Help has arrived. You stumble out of the pod, waving frantically, tears of joy streaming down your face. The rescue team rushes toward you, and you collapse into their arms, safe at last. As the shuttle lifts off, carrying you away from this red world, you take one last look at the landscape that nearly became your tomb. You survived. You are going home.',
      choices: [],
    },
    {
      id: 'story-10012001-40',
      storyId: 'story-10012001',
      type: 'ending',
      title: 'Canyon Sanctuary',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      narration:
        'In the shadow of the canyon walls, you discover a miracle. A trickle of water runs down the rock face, pooling in a sheltered basin. Hardy fungi grow in the moisture, providing sustenance. You have found everything you need to survive. As you make camp in this natural sanctuary, you feel a profound sense of gratitude. This alien world, so hostile at first, has provided for you. You are still a castaway, but you are no longer desperate. You have found your place in the universe, and you will endure.',
      choices: [],
    },
  ],
};
