import { Story } from '../types';

export const alchemistWatchStory: Story = {
  id: 'story-alchemist-watch',
  title: "The Alchemist's Watch",
  description:
    "A high-stakes noir mystery in a steam-powered city. You must traverse a deep web of conspiracy, solving the murder of a man who claimed to have invented immortality.",
  coverImageUrl:
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400',
  author: 'Elena Vance',
  genre: 'mystery',
  involvement: 'high',
  estimatedDuration: 45,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  totalNodes: 25,
  totalEndings: 4,
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      storyId: 'story-alchemist-watch',
      type: 'start',
      title: 'The Silent Laboratory',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "The rain batters the skylight of Doctor Aris Thorne's laboratory, keeping time with the headache pulsing behind your eyes. Thorne is dead. The city's most controversial alchemist lies slumped over his mahogany desk, a brass syringe embedded in his neck. The room smells of ozone and bitter almonds. Inspector Graves is outside holding back the press, giving you exactly ten minutes to find something the police won't understand. The lab is cluttered: bubbling vats to your left, and a wall covered in frantic chalk equations to your right. You must choose your starting point carefully; the killer might still be in the building, or worse, they might have left a trap.",
      choices: [
        {
          id: 'choice-1',
          text: 'Examine the chalk equations for a hidden message',
          targetNodeId: 'node-2',
          order: 1,
        },
        {
          id: 'choice-2',
          text: 'Inspect the body and the strange syringe closer',
          targetNodeId: 'node-3',
          order: 2,
        },
      ],
    },
    {
      id: 'node-2',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Writing on the Wall',
      imageUrl: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        "You step closer to the chalkboard. It looks like nonsense to the untrained eye—chemical compounds mixed with astrological symbols. But you notice a smudge pattern. Someone tried to erase a specific section near the bottom right. Using your UV lamp, you reveal a faint residue: a map coordinate pointing to the Docks District, specifically Warehouse 42, and a name: 'Project Aion'. Just then, you hear a creak from the ventilation shaft above you. Someone is watching. You can try to flush out the spy immediately, potentially catching a witness, or pocket the coordinates and sneak out the back to follow the lead before the police confiscate the board.",
      choices: [
        {
          id: 'choice-3',
          text: 'Fire your warning shot into the ventilation shaft',
          targetNodeId: 'node-4',
          order: 1,
        },
        {
          id: 'choice-4',
          text: 'Quietly copy the coordinates and slip out the back',
          targetNodeId: 'node-5',
          order: 2,
        },
      ],
    },
    {
      id: 'node-3',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Body Evidence',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        "You approach Thorne's corpse. The syringe is intricate, etched with a serpent eating its own tail. Strange—there's no blood. The skin around the wound is turned to gold. It's not murder; it's transmutation. You check his pockets and find a heavy iron key with a ticket stub for the 'Midnight Express' train leaving in one hour. Suddenly, the body twitches. It's a galvanic reflex, or perhaps something worse. You hear heavy boots approaching the lab door—the Inspector is coming in early. You can take the key and jump out the window to the fire escape, or hide in the closet to overhear what the Inspector says when he thinks he's alone.",
      choices: [
        {
          id: 'choice-5',
          text: 'Grab the iron key and flee via the fire escape',
          targetNodeId: 'node-5',
          order: 1,
        },
        {
          id: 'choice-6',
          text: 'Hide in the closet to eavesdrop on the Inspector',
          targetNodeId: 'node-4',
          order: 2,
        },
      ],
    },
    {
      id: 'node-4',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Aggressive Approach',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        "Your aggressive tactic yields results. Whether you shot at the vent or eavesdropped on the corrupt Inspector, you've learned that a mercenary group called 'The Gearheads' is involved. They are waiting at the train station. You rush to the station. The rain is torrential now. You spot a group of men in leather trench coats loading a heavy crate onto the cargo car. This must be the 'Project Aion' prototype. You are outnumbered. You can try to cause a distraction by sabotaging the steam engine's pressure valve to clear the platform, or you can disguise yourself as a porter to get close to the crate unnoticed.",
      choices: [
        {
          id: 'choice-7',
          text: 'Sabotage the steam valve to create a chaotic distraction',
          targetNodeId: 'node-6',
          order: 1,
        },
        {
          id: 'choice-8',
          text: 'Steal a uniform and infiltrate as a luggage porter',
          targetNodeId: 'node-7',
          order: 2,
        },
      ],
    },
    {
      id: 'node-5',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Stealth Approach',
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        "You escape into the alleyways, clutching your clue—either the coordinates or the key. They both lead you to the industrial district. You arrive at the location: an abandoned clock factory. The door is locked, but the iron key fits, or the coordinates point to a cellar entrance. Inside, it's a maze of ticking automatons standing dormant in rows. In the center of the room is a safe. You hear the distinct click of a revolver hammer behind you. It's a woman, Thorne's estranged daughter, Elara. She demands to know why you are here. You can show her the evidence you found to gain her trust, or disarm her before she shoots.",
      choices: [
        {
          id: 'choice-9',
          text: 'Show Elara the evidence to prove you are investigating',
          targetNodeId: 'node-7',
          order: 1,
        },
        {
          id: 'choice-10',
          text: 'Physically disarm Elara to neutralize the threat immediately',
          targetNodeId: 'node-6',
          order: 2,
        },
      ],
    },
    {
      id: 'node-6',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Chase',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "Chaos erupts. Whether from the steam explosion or the fight with Elara, you are now on the run. You've grabbed a document from the scene—a ledger proving that the City Mayor is funding Thorne's unethical experiments. You are being pursued by a mechanical hound, a terrifying blend of brass and wolf. It's gaining on you in the sewers. You reach a junction. To the left, a maintenance ladder leading up to the busy market district. To the right, a deeper tunnel leading toward the Mayor's mansion. The market offers a crowd to blend into, but the mansion puts you on the offensive.",
      choices: [
        {
          id: 'choice-11',
          text: 'Climb up to the crowded market to lose the hound',
          targetNodeId: 'node-8',
          order: 1,
        },
        {
          id: 'choice-12',
          text: 'Descend deeper toward the Mayor\'s mansion tunnels',
          targetNodeId: 'node-9',
          order: 2,
        },
      ],
    },
    {
      id: 'node-7',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Alliance',
      imageUrl: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        "You managed to secure an ally (or at least a truce) with Elara, or you successfully infiltrated the cargo car. You now have time to examine the 'Project Aion' device. It's a pocket watch, but the face has 13 hours. Elara explains it doesn't tell time; it steals it. Thorne was harvesting lifespan from the poor to sell to the rich. You need to decode the encryption on the watch to find the buyer list. You can take it to an underground hacker named 'Sparky' in the slums, or try to decode it yourself using the reference books in the City Library, risking exposure.",
      choices: [
        {
          id: 'choice-13',
          text: 'Visit Sparky in the slums for a quick decrypt',
          targetNodeId: 'node-8',
          order: 1,
        },
        {
          id: 'choice-14',
          text: 'Break into the City Library to research the cipher',
          targetNodeId: 'node-9',
          order: 2,
        },
      ],
    },
    {
      id: 'node-8',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Ambush',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "You arrive at your destination—the bustling market or the slum workshop. You think you're safe, but a sniper shot shatters the glass next to your head. The Mayor's elite guard has found you. You dive behind cover. You are pinned down. You spot a steam pipe running along the wall near the sniper's perch, and a crate of fireworks (it is a festival week) nearby. You need to create a path to escape. Shooting the steam pipe might scald the sniper but is a hard shot. Lighting the fireworks will create smoke and chaos but might injure civilians.",
      choices: [
        {
          id: 'choice-15',
          text: 'Shoot the distant steam pipe to burn the sniper',
          targetNodeId: 'node-10',
          order: 1,
        },
        {
          id: 'choice-16',
          text: 'Ignite the crate of fireworks to create a smokescreen',
          targetNodeId: 'node-11',
          order: 2,
        },
      ],
    },
    {
      id: 'node-9',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Dark Secret',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        "In the quiet of the library or the deep tunnels, you uncover the final piece of the puzzle. The buyer isn't just the Mayor; it's a secret society called 'The Golden Ouroboros.' And the next shipment of 'stolen time' is happening tonight at the Grand Gala. You also find a schematic for the device. It has a fatal flaw: if exposed to a specific resonant frequency, it shatters. You can spend the next hour building a sonic resonator weapon, or you can rush to the Gala immediately to gather physical evidence of the transaction before they close the deal.",
      choices: [
        {
          id: 'choice-17',
          text: 'Construct a sonic resonator to destroy the device',
          targetNodeId: 'node-10',
          order: 1,
        },
        {
          id: 'choice-18',
          text: 'Rush to the Gala to photograph the illegal transaction',
          targetNodeId: 'node-11',
          order: 2,
        },
      ],
    },
    {
      id: 'node-10',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'Infiltration Prep',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        "You have your weapon (the resonator or your trusty revolver) and you've escaped the ambush. You stand outside the Opera House where the Gala is being held. Security is tight. Metal detectors and guards everywhere. You see a delivery truck unloading catering supplies at the side entrance. Alternatively, you notice the sewer grate you traversed earlier connects to the orchestra pit. The catering truck requires a disguise and charisma. The sewer route is filthy but bypasses all electronic security. Your choice determines your entry point.",
      choices: [
        {
          id: 'choice-19',
          text: 'Knock out a driver and steal a catering uniform',
          targetNodeId: 'node-12',
          order: 1,
        },
        {
          id: 'choice-20',
          text: 'Pry open the grate and enter through the sewers',
          targetNodeId: 'node-13',
          order: 2,
        },
      ],
    },
    {
      id: 'node-11',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Social Engineer',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration:
        "You decide to enter the Gala as a guest. You mug a wealthy patron in an alley (or perhaps you had a spare tuxedo). You walk through the front door. The opulence is sickening; golden chandeliers hang above people drinking champagne paid for by the lives of the poor. You spot the Mayor talking to a masked figure—the head of the Ouroboros. You need to get close enough to hear them or plant a bug. A waiter is passing with a tray of drinks. You can cause a scene by colliding with the waiter to create a distraction, or try to blend in and dance your way closer to their circle.",
      choices: [
        {
          id: 'choice-21',
          text: 'Collide with the waiter to spill drinks on the Mayor',
          targetNodeId: 'node-12',
          order: 1,
        },
        {
          id: 'choice-22',
          text: 'Ask a stranger to dance and spiral toward the target',
          targetNodeId: 'node-13',
          order: 2,
        },
      ],
    },
    {
      id: 'node-12',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Inner Sanctum',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        "You are inside the private VIP lounge. The distraction worked or the disguise held. You see the device on the table. It's glowing with a sickly green light. The Mayor is laughing. But wait—Doctor Thorne walks in. He isn't dead! The body in the lab was a clone, a flesh-puppet. Thorne faked his death to move the merchandise without police scrutiny. He spots you. 'Ah, the detective,' he sneers. He signals his two bodyguards—massive steam-powered cyborgs. You are in a confined space. You can flip the heavy oak table for cover and shoot, or throw your flash-bang grenade (if you have one) / improvised explosive to stun them.",
      choices: [
        {
          id: 'choice-23',
          text: 'Flip the heavy table to create immediate cover',
          targetNodeId: 'node-14',
          order: 1,
        },
        {
          id: 'choice-24',
          text: 'Throw a flash-bomb to blind the cyborg bodyguards',
          targetNodeId: 'node-15',
          order: 2,
        },
      ],
    },
    {
      id: 'node-13',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Rooftop Chase',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "Your stealth failed, or you chose to strike early. Thorne (who is alive!) grabs the device and runs toward the roof, where an airship is docking. You pursue him up the spiral stairs. The wind is howling. The airship 'The Icarus' drops a rope ladder. Thorne begins to climb. You are on the parapet. You can aim for Thorne himself, risking hitting the device and releasing the raw time energy which could age you 50 years in a second, or aim for the rope ladder to sever his escape route, forcing a confrontation on the roof.",
      choices: [
        {
          id: 'choice-25',
          text: 'Take the risky shot at Thorne\'s hand holding the device',
          targetNodeId: 'node-14',
          order: 1,
        },
        {
          id: 'choice-26',
          text: 'Shoot the rope ladder to strand him on the roof',
          targetNodeId: 'node-15',
          order: 2,
        },
      ],
    },
    {
      id: 'node-14',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Hostage',
      imageUrl: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        "Thorne is cornered, but he plays his ace. He grabs Elara (who followed you) or a civilian waiter and holds a pistol to their head. 'Let me leave with the device,' he screams, 'or I paint the walls with them!' The airship is hovering above, engines roaring. The device in his pocket is ticking faster. If it overloads, it kills everyone in the building. You have a clear shot at his head, but if his finger twitches on the trigger, the hostage dies. Alternatively, you can drop your gun and try to negotiate, buying time for the device to potentially malfunction.",
      choices: [
        {
          id: 'choice-27',
          text: 'Take the impossible headshot to end it instantly',
          targetNodeId: 'node-16',
          order: 1,
        },
        {
          id: 'choice-28',
          text: 'Drop your weapon and attempt to talk him down',
          targetNodeId: 'node-17',
          order: 2,
        },
      ],
    },
    {
      id: 'node-15',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: "The Machine's Core",
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration:
        "Thorne drops the device during the struggle. It slides across the wet rooftop/floor and activates. A bubble of distorted time expands. Within the bubble, rain stops in mid-air. Thorne dives for it. You dive too. You are both inside the time field now. Movements are sluggish. You see Thorne reaching for a hidden knife. You are reaching for the device. If you grab the device, you can control the field. If you tackle Thorne, you can knock him out of the field, where time will catch up to him violently. The choice must be made in a split second of frozen time.",
      choices: [
        {
          id: 'choice-29',
          text: 'Grab the device to gain control of the time field',
          targetNodeId: 'node-16',
          order: 1,
        },
        {
          id: 'choice-30',
          text: 'Tackle Thorne to push him out of the time bubble',
          targetNodeId: 'node-17',
          order: 2,
        },
      ],
    },
    {
      id: 'node-16',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Temptation',
      imageUrl: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        "Thorne is defeated—either dead or incapacitated. You hold the device. It pulses with a warm, golden light. You feel your aches and pains fading. It works. It really works. You could live forever. You could go back and save your partner who died on that case five years ago. You could fix everything. The police are breaking down the doors downstairs. You have a moment of absolute power. Do you smash the device to end the curse, or do you slip it into your pocket and tell the police it was lost in the fight?",
      choices: [
        {
          id: 'choice-31',
          text: 'Raise the device high and smash it onto the concrete',
          targetNodeId: 'node-18',
          order: 1,
        },
        {
          id: 'choice-32',
          text: 'Secretly pocket the device and prepare a lie',
          targetNodeId: 'node-19',
          order: 2,
        },
      ],
    },
    {
      id: 'node-17',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Crash',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      narration:
        "The struggle causes the airship above to clip the building. Debris rains down. The device is damaged and leaking energy. It's going to explode. Thorne is laughing maniacally, broken and bleeding. 'If I can't have it, no one can!' he yells. You need to contain the blast. There is a lead-lined safe nearby (from the catering money transport) or you can throw it off the roof into the bay. The safe might contain the blast but you have to drag it there. The bay is safer for you, but the chemicals might poison the water supply for years.",
      choices: [
        {
          id: 'choice-33',
          text: 'Drag the unstable device into the lead-lined safe',
          targetNodeId: 'node-20',
          order: 1,
        },
        {
          id: 'choice-34',
          text: 'Throw the device off the roof into the harbor',
          targetNodeId: 'node-18',
          order: 2,
        },
      ],
    },
    {
      id: 'node-18',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Aftermath',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "The immediate danger is over. The device is destroyed or gone. But the conspiracy remains. The Mayor is still in the ballroom, unaware that you've taken down his supplier. You have the ledger/evidence. You walk back into the Gala, bruised and bloody. The music stops. All eyes are on you. You can walk straight up to the Mayor and arrest him in front of the city's elite, or you can slip away and give the evidence to the press anonymously, fearing that the corrupt judges would just acquit him.",
      choices: [
        {
          id: 'choice-35',
          text: 'Publicly confront and arrest the Mayor on stage',
          targetNodeId: 'node-22',
          order: 1,
        },
        {
          id: 'choice-36',
          text: 'Leak the evidence to the newspapers and vanish',
          targetNodeId: 'node-23',
          order: 2,
        },
      ],
    },
    {
      id: 'node-19',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Dark path',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      narration:
        "You have the device. You feel its hum against your ribs. You leave the scene before the police secure the roof. You are now a fugitive, but an immortal one. However, the device requires fuel. It feeds on life. You realize the hunger of the machine is now connected to your own heartbeat. You meet Elara in the alleyway. She looks at you with suspicion. 'Where is it?' she asks. 'Did you destroy it?' You can kill her to keep your secret and feed the machine its first meal, or you can confess your weakness and ask for her help to destroy it before it corrupts you completely.",
      choices: [
        {
          id: 'choice-37',
          text: 'Eliminate Elara to protect the device and your secret',
          targetNodeId: 'node-25',
          order: 1,
        },
        {
          id: 'choice-38',
          text: 'Hand the device to Elara and beg her to destroy it',
          targetNodeId: 'node-22',
          order: 2,
        },
      ],
    },
    {
      id: 'node-20',
      storyId: 'story-alchemist-watch',
      type: 'decision',
      title: 'The Sacrifice',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        "You put the device in the safe, but the door won't latch. The locking mechanism is broken. The energy is building up. Someone has to hold the door shut manually while the explosion happens inside. The lead will protect the city, but the radiation will flood the person holding the handle. You look at Inspector Graves, who has just arrived. He is corrupt, but he has a family. You are the hero. You can order Graves to hold it at gunpoint, redeeming him through death, or you can hold it yourself, making the ultimate sacrifice for a city that barely knows your name.",
      choices: [
        {
          id: 'choice-39',
          text: 'Force Inspector Graves to hold the door and redeem himself',
          targetNodeId: 'node-23',
          order: 1,
        },
        {
          id: 'choice-40',
          text: 'Hold the door yourself and accept your fate',
          targetNodeId: 'node-24',
          order: 2,
        },
      ],
    },
    {
      id: 'node-22',
      storyId: 'story-alchemist-watch',
      type: 'ending',
      title: 'Ending: The Just City',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "The headlines the next day scream of the Mayor's arrest. 'Detective Exposes Time Theft Ring!' You sit in your office, nursing a cheap whiskey. The device is gone, destroyed by your hand (or Elara's). The city is still dirty, still rainy, but the gears grind a little fairer today. You didn't get rich, and you didn't live forever. But when you look in the mirror, you don't see a monster. You see a human being. And in this city of machines, that is the rarest thing of all. Case closed.",
      choices: [],
    },
    {
      id: 'node-23',
      storyId: 'story-alchemist-watch',
      type: 'ending',
      title: 'Ending: The Shadow Walker',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration:
        "You vanish into the fog. The evidence was mailed to every paper in the country. The government collapsed within a week. You watch from the shadows as the city burns and rebuilds itself. You are a legend now, a ghost story that criminals tell each other. You survived, but you are alone. You realized that the law couldn't handle the truth, so you became something outside the law. You tip your hat to the new dawn and walk away. There will always be another mystery.",
      choices: [],
    },
    {
      id: 'node-24',
      storyId: 'story-alchemist-watch',
      type: 'ending',
      title: 'Ending: The Martyr',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "The explosion was contained. The city was saved. They found your body slumped against the safe, glowing with a faint, fading light. They built a statue of you in the central plaza. It's made of bronze, and it stands tall against the rain. You gave everything so that time would flow naturally for everyone else. People leave flowers at your feet. You are gone, but in the memory of the city, you are immortal in a way Thorne never could have achieved.",
      choices: [],
    },
    {
      id: 'node-25',
      storyId: 'story-alchemist-watch',
      type: 'ending',
      title: 'Ending: The Time Lord',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration:
        "You step over Elara's body. The device is yours. You turn the dial back. You watch the rain rise from the puddles to the sky. You watch the bullet fly back into the gun. You are the master of this city now. You can rewrite every mistake, win every bet, silence every critic. You live for a hundred years, then a thousand. But slowly, you forget why you wanted it. You forget your name. You become the clockwork god, perfect and cold, sitting on a throne of stolen seconds, ruling a kingdom of dust.",
      choices: [],
    },
  ],
};
