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
        };
      };
    };
  };
}

export const alchemistWatchStoryTranslations: Partial<Record<Language, StoryTranslations>> = {
  en: {
    title: "The Alchemist's Watch",
    description: "A high-stakes noir mystery in a steam-powered city. You must traverse a deep web of conspiracy, solving the murder of a man who claimed to have invented immortality.",
    author: "Elena Vance",
    nodes: {
      'node-1': {
        title: "The Silent Laboratory",
        narration: "The rain batters the skylight of Doctor Aris Thorne's laboratory, keeping time with the headache pulsing behind your eyes. Thorne is dead. The city's most controversial alchemist lies slumped over his mahogany desk, a brass syringe embedded in his neck. The room smells of ozone and bitter almonds. Inspector Graves is outside holding back the press, giving you exactly ten minutes to find something the police won't understand. The lab is cluttered: bubbling vats to your left, and a wall covered in frantic chalk equations to your right. You must choose your starting point carefully; the killer might still be in the building, or worse, they might have left a trap.",
        choices: {
          'choice-1': { text: "Examine the chalk equations for a hidden message" },
          'choice-2': { text: "Inspect the body and the strange syringe closer" },
        },
      },
      'node-2': {
        title: "The Writing on the Wall",
        narration: "You step closer to the chalkboard. It looks like nonsense to the untrained eye—chemical compounds mixed with astrological symbols. But you notice a smudge pattern. Someone tried to erase a specific section near the bottom right. Using your UV lamp, you reveal a faint residue: a map coordinate pointing to the Docks District, specifically Warehouse 42, and a name: 'Project Aion'. Just then, you hear a creak from the ventilation shaft above you. Someone is watching. You can try to flush out the spy immediately, potentially catching a witness, or pocket the coordinates and sneak out the back to follow the lead before the police confiscate the board.",
        choices: {
          'choice-3': { text: "Fire your warning shot into the ventilation shaft" },
          'choice-4': { text: "Quietly copy the coordinates and slip out the back" },
        },
      },
      'node-3': {
        title: "The Body Evidence",
        narration: "You approach Thorne's corpse. The syringe is intricate, etched with a serpent eating its own tail. Strange—there's no blood. The skin around the wound is turned to gold. It's not murder; it's transmutation. You check his pockets and find a heavy iron key with a ticket stub for the 'Midnight Express' train leaving in one hour. Suddenly, the body twitches. It's a galvanic reflex, or perhaps something worse. You hear heavy boots approaching the lab door—the Inspector is coming in early. You can take the key and jump out the window to the fire escape, or hide in the closet to overhear what the Inspector says when he thinks he's alone.",
        choices: {
          'choice-5': { text: "Grab the iron key and flee via the fire escape" },
          'choice-6': { text: "Hide in the closet to eavesdrop on the Inspector" },
        },
      },
      'node-4': {
        title: "The Aggressive Approach",
        narration: "Your aggressive tactic yields results. Whether you shot at the vent or eavesdropped on the corrupt Inspector, you've learned that a mercenary group called 'The Gearheads' is involved. They are waiting at the train station. You rush to the station. The rain is torrential now. You spot a group of men in leather trench coats loading a heavy crate onto the cargo car. This must be the 'Project Aion' prototype. You are outnumbered. You can try to cause a distraction by sabotaging the steam engine's pressure valve to clear the platform, or you can disguise yourself as a porter to get close to the crate unnoticed.",
        choices: {
          'choice-7': { text: "Sabotage the steam valve to create a chaotic distraction" },
          'choice-8': { text: "Steal a uniform and infiltrate as a luggage porter" },
        },
      },
      'node-5': {
        title: "The Stealth Approach",
        narration: "You escape into the alleyways, clutching your clue—either the coordinates or the key. They both lead you to the industrial district. You arrive at the location: an abandoned clock factory. The door is locked, but the iron key fits, or the coordinates point to a cellar entrance. Inside, it's a maze of ticking automatons standing dormant in rows. In the center of the room is a safe. You hear the distinct click of a revolver hammer behind you. It's a woman, Thorne's estranged daughter, Elara. She demands to know why you are here. You can show her the evidence you found to gain her trust, or disarm her before she shoots.",
        choices: {
          'choice-9': { text: "Show Elara the evidence to prove you are investigating" },
          'choice-10': { text: "Physically disarm Elara to neutralize the threat immediately" },
        },
      },
      'node-6': {
        title: "The Chase",
        narration: "Chaos erupts. Whether from the steam explosion or the fight with Elara, you are now on the run. You've grabbed a document from the scene—a ledger proving that the City Mayor is funding Thorne's unethical experiments. You are being pursued by a mechanical hound, a terrifying blend of brass and wolf. It's gaining on you in the sewers. You reach a junction. To the left, a maintenance ladder leading up to the busy market district. To the right, a deeper tunnel leading toward the Mayor's mansion. The market offers a crowd to blend into, but the mansion puts you on the offensive.",
        choices: {
          'choice-11': { text: "Climb up to the crowded market to lose the hound" },
          'choice-12': { text: "Descend deeper toward the Mayor's mansion tunnels" },
        },
      },
      'node-7': {
        title: "The Alliance",
        narration: "You managed to secure an ally (or at least a truce) with Elara, or you successfully infiltrated the cargo car. You now have time to examine the 'Project Aion' device. It's a pocket watch, but the face has 13 hours. Elara explains it doesn't tell time; it steals it. Thorne was harvesting lifespan from the poor to sell to the rich. You need to decode the encryption on the watch to find the buyer list. You can take it to an underground hacker named 'Sparky' in the slums, or try to decode it yourself using the reference books in the City Library, risking exposure.",
        choices: {
          'choice-13': { text: "Visit Sparky in the slums for a quick decrypt" },
          'choice-14': { text: "Break into the City Library to research the cipher" },
        },
      },
      'node-8': {
        title: "The Ambush",
        narration: "You arrive at your destination—the bustling market or the slum workshop. You think you're safe, but a sniper shot shatters the glass next to your head. The Mayor's elite guard has found you. You dive behind cover. You are pinned down. You spot a steam pipe running along the wall near the sniper's perch, and a crate of fireworks (it is a festival week) nearby. You need to create a path to escape. Shooting the steam pipe might scald the sniper but is a hard shot. Lighting the fireworks will create smoke and chaos but might injure civilians.",
        choices: {
          'choice-15': { text: "Shoot the distant steam pipe to burn the sniper" },
          'choice-16': { text: "Ignite the crate of fireworks to create a smokescreen" },
        },
      },
      'node-9': {
        title: "The Dark Secret",
        narration: "In the quiet of the library or the deep tunnels, you uncover the final piece of the puzzle. The buyer isn't just the Mayor; it's a secret society called 'The Golden Ouroboros.' And the next shipment of 'stolen time' is happening tonight at the Grand Gala. You also find a schematic for the device. It has a fatal flaw: if exposed to a specific resonant frequency, it shatters. You can spend the next hour building a sonic resonator weapon, or you can rush to the Gala immediately to gather physical evidence of the transaction before they close the deal.",
        choices: {
          'choice-17': { text: "Construct a sonic resonator to destroy the device" },
          'choice-18': { text: "Rush to the Gala to photograph the illegal transaction" },
        },
      },
      'node-10': {
        title: "Infiltration Prep",
        narration: "You have your weapon (the resonator or your trusty revolver) and you've escaped the ambush. You stand outside the Opera House where the Gala is being held. Security is tight. Metal detectors and guards everywhere. You see a delivery truck unloading catering supplies at the side entrance. Alternatively, you notice the sewer grate you traversed earlier connects to the orchestra pit. The catering truck requires a disguise and charisma. The sewer route is filthy but bypasses all electronic security. Your choice determines your entry point.",
        choices: {
          'choice-19': { text: "Knock out a driver and steal a catering uniform" },
          'choice-20': { text: "Pry open the grate and enter through the sewers" },
        },
      },
      'node-11': {
        title: "The Social Engineer",
        narration: "You decide to enter the Gala as a guest. You mug a wealthy patron in an alley (or perhaps you had a spare tuxedo). You walk through the front door. The opulence is sickening; golden chandeliers hang above people drinking champagne paid for by the lives of the poor. You spot the Mayor talking to a masked figure—the head of the Ouroboros. You need to get close enough to hear them or plant a bug. A waiter is passing with a tray of drinks. You can cause a scene by colliding with the waiter to create a distraction, or try to blend in and dance your way closer to their circle.",
        choices: {
          'choice-21': { text: "Collide with the waiter to spill drinks on the Mayor" },
          'choice-22': { text: "Ask a stranger to dance and spiral toward the target" },
        },
      },
      'node-12': {
        title: "The Inner Sanctum",
        narration: "You are inside the private VIP lounge. The distraction worked or the disguise held. You see the device on the table. It's glowing with a sickly green light. The Mayor is laughing. But wait—Doctor Thorne walks in. He isn't dead! The body in the lab was a clone, a flesh-puppet. Thorne faked his death to move the merchandise without police scrutiny. He spots you. 'Ah, the detective,' he sneers. He signals his two bodyguards—massive steam-powered cyborgs. You are in a confined space. You can flip the heavy oak table for cover and shoot, or throw your flash-bang grenade (if you have one) / improvised explosive to stun them.",
        choices: {
          'choice-23': { text: "Flip the heavy table to create immediate cover" },
          'choice-24': { text: "Throw a flash-bomb to blind the cyborg bodyguards" },
        },
      },
      'node-13': {
        title: "The Rooftop Chase",
        narration: "Your stealth failed, or you chose to strike early. Thorne (who is alive!) grabs the device and runs toward the roof, where an airship is docking. You pursue him up the spiral stairs. The wind is howling. The airship 'The Icarus' drops a rope ladder. Thorne begins to climb. You are on the parapet. You can aim for Thorne himself, risking hitting the device and releasing the raw time energy which could age you 50 years in a second, or aim for the rope ladder to sever his escape route, forcing a confrontation on the roof.",
        choices: {
          'choice-25': { text: "Take the risky shot at Thorne's hand holding the device" },
          'choice-26': { text: "Shoot the rope ladder to strand him on the roof" },
        },
      },
      'node-14': {
        title: "The Hostage",
        narration: "Thorne is cornered, but he plays his ace. He grabs Elara (who followed you) or a civilian waiter and holds a pistol to their head. 'Let me leave with the device,' he screams, 'or I paint the walls with them!' The airship is hovering above, engines roaring. The device in his pocket is ticking faster. If it overloads, it kills everyone in the building. You have a clear shot at his head, but if his finger twitches on the trigger, the hostage dies. Alternatively, you can drop your gun and try to negotiate, buying time for the device to potentially malfunction.",
        choices: {
          'choice-27': { text: "Take the impossible headshot to end it instantly" },
          'choice-28': { text: "Drop your weapon and attempt to talk him down" },
        },
      },
      'node-15': {
        title: "The Machine's Core",
        narration: "Thorne drops the device during the struggle. It slides across the wet rooftop/floor and activates. A bubble of distorted time expands. Within the bubble, rain stops in mid-air. Thorne dives for it. You dive too. You are both inside the time field now. Movements are sluggish. You see Thorne reaching for a hidden knife. You are reaching for the device. If you grab the device, you can control the field. If you tackle Thorne, you can knock him out of the field, where time will catch up to him violently. The choice must be made in a split second of frozen time.",
        choices: {
          'choice-29': { text: "Grab the device to gain control of the time field" },
          'choice-30': { text: "Tackle Thorne to push him out of the time bubble" },
        },
      },
      'node-16': {
        title: "The Temptation",
        narration: "Thorne is defeated—either dead or incapacitated. You hold the device. It pulses with a warm, golden light. You feel your aches and pains fading. It works. It really works. You could live forever. You could go back and save your partner who died on that case five years ago. You could fix everything. The police are breaking down the doors downstairs. You have a moment of absolute power. Do you smash the device to end the curse, or do you slip it into your pocket and tell the police it was lost in the fight?",
        choices: {
          'choice-31': { text: "Raise the device high and smash it onto the concrete" },
          'choice-32': { text: "Secretly pocket the device and prepare a lie" },
        },
      },
      'node-17': {
        title: "The Crash",
        narration: "The struggle causes the airship above to clip the building. Debris rains down. The device is damaged and leaking energy. It's going to explode. Thorne is laughing maniacally, broken and bleeding. 'If I can't have it, no one can!' he yells. You need to contain the blast. There is a lead-lined safe nearby (from the catering money transport) or you can throw it off the roof into the bay. The safe might contain the blast but you have to drag it there. The bay is safer for you, but the chemicals might poison the water supply for years.",
        choices: {
          'choice-33': { text: "Drag the unstable device into the lead-lined safe" },
          'choice-34': { text: "Throw the device off the roof into the harbor" },
        },
      },
      'node-18': {
        title: "The Aftermath",
        narration: "The immediate danger is over. The device is destroyed or gone. But the conspiracy remains. The Mayor is still in the ballroom, unaware that you've taken down his supplier. You have the ledger/evidence. You walk back into the Gala, bruised and bloody. The music stops. All eyes are on you. You can walk straight up to the Mayor and arrest him in front of the city's elite, or you can slip away and give the evidence to the press anonymously, fearing that the corrupt judges would just acquit him.",
        choices: {
          'choice-35': { text: "Publicly confront and arrest the Mayor on stage" },
          'choice-36': { text: "Leak the evidence to the newspapers and vanish" },
        },
      },
      'node-19': {
        title: "The Dark path",
        narration: "You have the device. You feel its hum against your ribs. You leave the scene before the police secure the roof. You are now a fugitive, but an immortal one. However, the device requires fuel. It feeds on life. You realize the hunger of the machine is now connected to your own heartbeat. You meet Elara in the alleyway. She looks at you with suspicion. 'Where is it?' she asks. 'Did you destroy it?' You can kill her to keep your secret and feed the machine its first meal, or you can confess your weakness and ask for her help to destroy it before it corrupts you completely.",
        choices: {
          'choice-37': { text: "Eliminate Elara to protect the device and your secret" },
          'choice-38': { text: "Hand the device to Elara and beg her to destroy it" },
        },
      },
      'node-20': {
        title: "The Sacrifice",
        narration: "You put the device in the safe, but the door won't latch. The locking mechanism is broken. The energy is building up. Someone has to hold the door shut manually while the explosion happens inside. The lead will protect the city, but the radiation will flood the person holding the handle. You look at Inspector Graves, who has just arrived. He is corrupt, but he has a family. You are the hero. You can order Graves to hold it at gunpoint, redeeming him through death, or you can hold it yourself, making the ultimate sacrifice for a city that barely knows your name.",
        choices: {
          'choice-39': { text: "Force Inspector Graves to hold the door and redeem himself" },
          'choice-40': { text: "Hold the door yourself and accept your fate" },
        },
      },
      'node-22': {
        title: "Ending: The Just City",
        narration: "The headlines the next day scream of the Mayor's arrest. 'Detective Exposes Time Theft Ring!' You sit in your office, nursing a cheap whiskey. The device is gone, destroyed by your hand (or Elara's). The city is still dirty, still rainy, but the gears grind a little fairer today. You didn't get rich, and you didn't live forever. But when you look in the mirror, you don't see a monster. You see a human being. And in this city of machines, that is the rarest thing of all. Case closed.",
        choices: {},
      },
      'node-23': {
        title: "Ending: The Shadow Walker",
        narration: "You vanish into the fog. The evidence was mailed to every paper in the country. The government collapsed within a week. You watch from the shadows as the city burns and rebuilds itself. You are a legend now, a ghost story that criminals tell each other. You survived, but you are alone. You realized that the law couldn't handle the truth, so you became something outside the law. You tip your hat to the new dawn and walk away. There will always be another mystery.",
        choices: {},
      },
      'node-24': {
        title: "Ending: The Martyr",
        narration: "The explosion was contained. The city was saved. They found your body slumped against the safe, glowing with a faint, fading light. They built a statue of you in the central plaza. It's made of bronze, and it stands tall against the rain. You gave everything so that time would flow naturally for everyone else. People leave flowers at your feet. You are gone, but in the memory of the city, you are immortal in a way Thorne never could have achieved.",
        choices: {},
      },
      'node-25': {
        title: "Ending: The Time Lord",
        narration: "You step over Elara's body. The device is yours. You turn the dial back. You watch the rain rise from the puddles to the sky. You watch the bullet fly back into the gun. You are the master of this city now. You can rewrite every mistake, win every bet, silence every critic. You live for a hundred years, then a thousand. But slowly, you forget why you wanted it. You forget your name. You become the clockwork god, perfect and cold, sitting on a throne of stolen seconds, ruling a kingdom of dust.",
        choices: {},
      },
    },
  },
  ru: {
    title: "Часы Алхимика",
    description: "Ставки высоки в этом нуарном детективе в городе, работающем на пару. Вам предстоит распутать паутину заговора и раскрыть убийство человека, который утверждал, что изобрёл бессмертие.",
    author: "Елена Вэнс",
    nodes: {
      'node-1': {
        title: "Тихая лаборатория",
        narration: "Дождь барабанит по стеклянной крыше лаборатории доктора Ариса Торна, отбивая ритм пульсирующей головной боли. Торн мёртв. Самый скандальный алхимик города лежит, уткнувшись в свой стол красного дерева; в его шею воткнут латунный шприц. В комнате пахнет озоном и горьким миндалем. Инспектор Грейвс сдерживает прессу снаружи, дав вам ровно десять минут, чтобы найти то, что полиция не поймёт. Лаборатория загромождена: слева бурлят чаны, справа стена исписана лихорадочными меловыми уравнениями. Выбирайте, с чего начать, осторожно: убийца может быть ещё в здании, или, что хуже, мог оставить ловушку.",
        choices: {
          'choice-1': { text: "Изучить меловые уравнения в поисках скрытого послания" },
          'choice-2': { text: "Осмотреть тело и странный шприц поближе" },
        },
      },
      'node-2': {
        title: "Надпись на стене",
        narration: "Вы подходите к доске. Для непосвящённого взгляда это бессмыслица — химические соединения вперемешку с астрологическими символами. Но вы замечаете смазанный узор. Кто-то пытался стереть определённый участок в правом нижнем углу. Используя УФ-лампу, вы обнаруживаете слабый след: координаты карты, указывающие на район Доков, конкретно на Склад 42, и название: «Проект Эон». В этот момент вы слышите скрип из вентиляционной шахты над вами. Кто-то наблюдает. Вы можете попытаться выкурить шпиона немедленно, возможно, поймав свидетеля, или переписать координаты и ускользнуть через черный ход, чтобы проверить зацепку до того, как полиция конфискует доску.",
        choices: {
          'choice-3': { text: "Сделать предупредительный выстрел в вентиляционную шахту" },
          'choice-4': { text: "Тихо скопировать координаты и выскользнуть через черный ход" },
        },
      },
      'node-3': {
        title: "Улики на теле",
        narration: "Вы подходите к трупу Торна. Шприц сложной работы, с гравировкой змеи, кусающей свой хвост. Странно — крови нет. Кожа вокруг раны превратилась в золото. Это не убийство; это трансмутация. Вы проверяете его карманы и находите тяжелый железный ключ с корешком билета на «Полуночный экспресс», отправляющийся через час. Внезапно тело дергается. Это гальванический рефлекс или, возможно, что-то худшее. Вы слышите тяжелые шаги, приближающиеся к двери лаборатории — инспектор идет раньше времени. Вы можете взять ключ и выпрыгнуть в окно на пожарную лестницу или спрятаться в шкафу, чтобы подслушать, что скажет инспектор, когда подумает, что он один.",
        choices: {
          'choice-5': { text: "Схватить железный ключ и бежать через пожарную лестницу" },
          'choice-6': { text: "Спрятаться в шкафу, чтобы подслушать инспектора" },
        },
      },
      'node-4': {
        title: "Агрессивный подход",
        narration: "Ваша агрессивная тактика приносит плоды. Выстрелили ли вы в вентиляцию или подслушали коррумпированного инспектора, вы узнали, что замешана группа наемников под названием «Шестеренки». Они ждут на вокзале. Вы мчитесь на станцию. Дождь льет как из ведра. Вы замечаете группу людей в кожаных плащах, грузящих тяжелый ящик в грузовой вагон. Это должен быть прототип «Проекта Эон». Их больше. Вы можете попытаться отвлечь их, саботировав паровой клапан локомотива, чтобы очистить платформу, или переодеться носильщиком, чтобы подобраться к ящику незамеченным.",
        choices: {
          'choice-7': { text: "Саботировать паровой клапан для создания отвлекающего хаоса" },
          'choice-8': { text: "Украсть униформу и проникнуть под видом носильщика" },
        },
      },
      'node-5': {
        title: "Скрытный подход",
        narration: "Вы скрываетесь в переулках, сжимая свою улику — координаты или ключ. И то, и другое ведет вас в промышленный район. Вы прибываете на место: заброшенная часовая фабрика. Дверь заперта, но железный ключ подходит, или координаты указывают на вход в подвал. Внутри — лабиринт тикающих автоматонов, стоящих рядами. В центре комнаты сейф. Вы слышите отчетливый щелчок взвода револьвера за спиной. Это женщина, отчужденная дочь Торна, Элара. Она требует объяснить, зачем вы здесь. Вы можете показать ей найденные доказательства, чтобы завоевать её доверие, или обезоружить её, пока она не выстрелила.",
        choices: {
          'choice-9': { text: "Показать Эларе доказательства, что вы ведете расследование" },
          'choice-10': { text: "Физически обезоружить Элару, чтобы немедленно нейтрализовать угрозу" },
        },
      },
      'node-6': {
        title: "Погоня",
        narration: "Начинается хаос. Будь то от взрыва пара или драки с Эларой, теперь вы в бегах. Вы схватили документ с места событий — гроссбух, доказывающий, что мэр города финансирует неэтичные эксперименты Торна. Вас преследует механическая гончая, ужасающая смесь латуни и волка. Она нагоняет вас в канализации. Вы достигаете развилки. Слева — лестница техобслуживания, ведущая на оживленный рынок. Справа — более глубокий туннель, ведущий к особняку мэра. Рынок предлагает толпу, в которой можно затеряться, но особняк позволяет перейти в наступление.",
        choices: {
          'choice-11': { text: "Подняться на людный рынок, чтобы сбить гончую со следа" },
          'choice-12': { text: "Спуститься глубже к туннелям особняка мэра" },
        },
      },
      'node-7': {
        title: "Союз",
        narration: "Вам удалось найти союзника (или хотя бы перемирие) с Эларой, или вы успешно проникли в грузовой вагон. Теперь у вас есть время осмотреть устройство «Проекта Эон». Это карманные часы, но на циферблате 13 часов. Элара объясняет, что они не показывают время; они крадут его. Торн собирал жизненный срок у бедных, чтобы продавать богатым. Вам нужно расшифровать шифр на часах, чтобы найти список покупателей. Вы можете отнести их подпольному хакеру по имени «Спарки» в трущобах или попытаться расшифровать самостоятельно, используя справочники в Городской библиотеке, рискуя быть обнаруженным.",
        choices: {
          'choice-13': { text: "Посетить Спарки в трущобах для быстрой расшифровки" },
          'choice-14': { text: "Вломиться в Городскую библиотеку для изучения шифра" },
        },
      },
      'node-8': {
        title: "Засада",
        narration: "Вы прибываете на место назначения — оживленный рынок или мастерская в трущобах. Вы думаете, что в безопасности, но выстрел снайпера разбивает стекло рядом с вашей головой. Элитная гвардия мэра нашла вас. Вы ныряете в укрытие. Вы прижаты огнем. Вы замечаете паровую трубу, идущую вдоль стены рядом с позицией снайпера, и ящик фейерверков (сейчас фестивальная неделя) неподалеку. Вам нужно создать путь для отхода. Выстрел в паровую трубу может ошпарить снайпера, но это сложный выстрел. Поджог фейерверков создаст дым и хаос, но может ранить гражданских.",
        choices: {
          'choice-15': { text: "Выстрелить в дальнюю паровую трубу, чтобы обжечь снайпера" },
          'choice-16': { text: "Поджечь ящик с фейерверками для создания дымовой завесы" },
        },
      },
      'node-9': {
        title: "Тёмная тайна",
        narration: "В тишине библиотеки или глубоких туннелях вы находите последний кусочек пазла. Покупатель — не просто мэр; это тайное общество под названием «Золотой Уроборос». И следующая поставка «украденного времени» происходит сегодня вечером на Гранд-Гала. Вы также находите схему устройства. У него есть фатальный изъян: если подвергнуть его определенной резонансной частоте, оно разрушится. Вы можете потратить следующий час на создание звукового резонансного оружия или немедленно помчаться на Гала, чтобы собрать вещественные доказательства сделки, пока они не закрыли её.",
        choices: {
          'choice-17': { text: "Собрать звуковой резонатор для уничтожения устройства" },
          'choice-18': { text: "Помчаться на Гала, чтобы сфотографировать незаконную сделку" },
        },
      },
      'node-10': {
        title: "Подготовка к проникновению",
        narration: "У вас есть оружие (резонатор или ваш верный револьвер), и вы избежали засады. Вы стоите у Оперного театра, где проходит Гала. Охрана жесткая. Металлодетекторы и охранники повсюду. Вы видите грузовик доставки, разгружающий кейтеринг у бокового входа. Альтернативно, вы замечаете, что решетка канализации, по которой вы прошли ранее, соединяется с оркестровой ямой. Грузовик кейтеринга требует маскировки и харизмы. Путь через канализацию грязный, но обходит всю электронную охрану. Ваш выбор определяет точку входа.",
        choices: {
          'choice-19': { text: "Вырубить водителя и украсть форму кейтеринга" },
          'choice-20': { text: "Вскрыть решетку и войти через канализацию" },
        },
      },
      'node-11': {
        title: "Социальная инженерия",
        narration: "Вы решаете войти на Гала как гость. Вы ограбили богатого покровителя в переулке (или, возможно, у вас был запасной смокинг). Вы входите через парадную дверь. Роскошь тошнотворна; золотые люстры висят над людьми, пьющими шампанское, оплаченное жизнями бедняков. Вы замечаете мэра, разговаривающего с фигурой в маске — главой Уробороса. Вам нужно подобраться достаточно близко, чтобы услышать их или установить жучок. Мимо проходит официант с подносом напитков. Вы можете устроить сцену, столкнувшись с официантом для отвлечения внимания, или попытаться смешаться с толпой и танцуя приблизиться к их кругу.",
        choices: {
          'choice-21': { text: "Столкнуться с официантом, чтобы пролить напитки на мэра" },
          'choice-22': { text: "Пригласить незнакомца на танец и приблизиться к цели" },
        },
      },
      'node-12': {
        title: "Внутреннее святилище",
        narration: "Вы внутри приватной VIP-ложи. Отвлечение сработало или маскировка выдержала. Вы видите устройство на столе. Оно светится болезненно-зеленым светом. Мэр смеется. Но погодите — входит доктор Торн. Он не мертв! Тело в лаборатории было клоном, марионеткой из плоти. Торн инсценировал свою смерть, чтобы переместить товар без внимания полиции. Он замечает вас. «А, детектив», — ухмыляется он. Он подает знак двум телохранителям — массивным паровым киборгам. Вы в замкнутом пространстве. Вы можете перевернуть тяжелый дубовый стол для укрытия и стрелять, или бросить световую гранату (если она у вас есть) / самодельную взрывчатку, чтобы оглушить их.",
        choices: {
          'choice-23': { text: "Перевернуть тяжелый стол для немедленного укрытия" },
          'choice-24': { text: "Бросить световую бомбу, чтобы ослепить киборгов-телохранителей" },
        },
      },
      'node-13': {
        title: "Погоня на крыше",
        narration: "Ваша скрытность не удалась, или вы решили ударить раньше. Торн (который жив!) хватает устройство и бежит к крыше, где швартуется дирижабль. Вы преследуете его по винтовой лестнице. Ветер воет. Дирижабль «Икар» сбрасывает веревочную лестницу. Торн начинает подниматься. Вы на парапете. Вы можете целиться в самого Торна, рискуя попасть в устройство и высвободить сырую энергию времени, которая может состарить вас на 50 лет за секунду, или целиться в веревочную лестницу, чтобы отрезать ему путь к отступлению, вынуждая к конфронтации на крыше.",
        choices: {
          'choice-25': { text: "Сделать рискованный выстрел в руку Торна, держащую устройство" },
          'choice-26': { text: "Выстрелить в веревочную лестницу, чтобы оставить его на крыше" },
        },
      },
      'node-14': {
        title: "Заложник",
        narration: "Торн загнан в угол, но он разыгрывает свой козырь. Он хватает Элару (которая последовала за вами) или гражданского официанта и приставляет пистолет к их голове. «Дай мне уйти с устройством, — кричит он, — или я украшу ими стены!» Дирижабль парит над головой, двигатели ревут. Устройство в его кармане тикает быстрее. Если оно перегрузится, погибнут все в здании. У вас есть чистый выстрел в его голову, но если его палец дернется на спусковом крючке, заложник умрет. Альтернативно, вы можете бросить оружие и попытаться уговорить его, выигрывая время для возможной поломки устройства.",
        choices: {
          'choice-27': { text: "Сделать невозможный выстрел в голову, чтобы закончить всё мгновенно" },
          'choice-28': { text: "Бросить оружие и попытаться уговорить его сдаться" },
        },
      },
      'node-15': {
        title: "Ядро машины",
        narration: "Торн роняет устройство во время борьбы. Оно скользит по мокрой крыше/полу и активируется. Пузырь искаженного времени расширяется. Внутри пузыря дождь замирает в воздухе. Торн ныряет за ним. Вы тоже ныряете. Вы оба теперь внутри временного поля. Движения замедленны. Вы видите, как Торн тянется за скрытым ножом. Вы тянетесь за устройством. Если вы схватите устройство, вы сможете контролировать поле. Если вы собьете Торна, вы можете вытолкнуть его из поля, где время настигнет его жестоко. Выбор должен быть сделан за долю секунды застывшего времени.",
        choices: {
          'choice-29': { text: "Схватить устройство, чтобы получить контроль над временным полем" },
          'choice-30': { text: "Сбить Торна, чтобы вытолкнуть его из временного пузыря" },
        },
      },
      'node-16': {
        title: "Искушение",
        narration: "Торн побежден — либо мертв, либо недееспособен. Вы держите устройство. Оно пульсирует теплым, золотым светом. Вы чувствуете, как ваши боли и раны исчезают. Оно работает. Оно действительно работает. Вы могли бы жить вечно. Вы могли бы вернуться и спасти своего напарника, погибшего в том деле пять лет назад. Вы могли бы исправить всё. Полиция выламывает двери внизу. У вас есть момент абсолютной власти. Разобьете ли вы устройство, чтобы покончить с проклятием, или сунете его в карман и скажете полиции, что оно потерялось в драке?",
        choices: {
          'choice-31': { text: "Поднять устройство высоко и разбить его о бетон" },
          'choice-32': { text: "Тайно спрятать устройство в карман и подготовить ложь" },
        },
      },
      'node-17': {
        title: "Крушение",
        narration: "Борьба заставляет дирижабль наверху задеть здание. Сыплются обломки. Устройство повреждено и источает энергию. Оно взорвется. Торн маниакально смеется, сломленный и истекающий кровью. «Если оно не достанется мне, то никому!» — кричит он. Вам нужно сдержать взрыв. Рядом есть освинцованный сейф (из инкассации кейтеринга) или вы можете сбросить его с крыши в залив. Сейф может сдержать взрыв, но вам нужно дотащить его туда. Залив безопаснее для вас, но химикаты могут отравить водоснабжение на годы.",
        choices: {
          'choice-33': { text: "Затащить нестабильное устройство в освинцованный сейф" },
          'choice-34': { text: "Сбросить устройство с крыши в гавань" },
        },
      },
      'node-18': {
        title: "Последствия",
        narration: "Непосредственная опасность миновала. Устройство уничтожено или исчезло. Но заговор остается. Мэр все еще в бальном зале, не подозревая, что вы устранили его поставщика. У вас есть гроссбух/улики. Вы возвращаетесь на Гала, в синяках и крови. Музыка останавливается. Все взгляды устремлены на вас. Вы можете подойти прямо к мэру и арестовать его на глазах у элиты города, или вы можете ускользнуть и передать доказательства прессе анонимно, опасаясь, что коррумпированные судьи просто оправдают его.",
        choices: {
          'choice-35': { text: "Публично противостоять и арестовать мэра на сцене" },
          'choice-36': { text: "Слить доказательства в газеты и исчезнуть" },
        },
      },
      'node-19': {
        title: "Тёмный путь",
        narration: "У вас есть устройство. Вы чувствуете его гул у своих ребер. Вы покидаете место происшествия до того, как полиция оцепит крышу. Теперь вы беглец, но бессмертный. Однако устройство требует топлива. Оно питается жизнью. Вы понимаете, что голод машины теперь связан с вашим собственным сердцебиением. Вы встречаете Элару в переулке. Она смотрит на вас с подозрением. «Где оно?» — спрашивает она. «Ты уничтожил его?» Вы можете убить её, чтобы сохранить свой секрет и накормить машину её первой трапезой, или вы можете признаться в своей слабости и попросить её помощи, чтобы уничтожить его, пока оно не развратило вас полностью.",
        choices: {
          'choice-37': { text: "Устранить Элару, чтобы защитить устройство и свой секрет" },
          'choice-38': { text: "Отдать устройство Эларе и умолять её уничтожить его" },
        },
      },
      'node-20': {
        title: "Жертва",
        narration: "Вы кладете устройство в сейф, но дверь не защелкивается. Запорный механизм сломан. Энергия нарастает. Кто-то должен держать дверь закрытой вручную, пока внутри происходит взрыв. Свинец защитит город, но радиация накроет человека, держащего ручку. Вы смотрите на инспектора Грейвса, который только что прибыл. Он коррумпирован, но у него есть семья. Вы герой. Вы можете приказать Грейвсу держать дверь под дулом пистолета, искупив его вину смертью, или вы можете держать её сами, принеся высшую жертву ради города, который едва знает ваше имя.",
        choices: {
          'choice-39': { text: "Заставить инспектора Грейвса держать дверь и искупить вину" },
          'choice-40': { text: "Держать дверь самому и принять свою судьбу" },
        },
      },
      'node-22': {
        title: "Концовка: Справедливый город",
        narration: "Заголовки на следующий день кричат об аресте мэра. «Детектив разоблачил кольцо похитителей времени!» Вы сидите в своем офисе, потягивая дешевый виски. Устройства нет, уничтожено вашей рукой (или Элары). Город все еще грязный, все еще дождливый, но шестеренки крутятся немного честнее сегодня. Вы не разбогатели и не стали жить вечно. Но когда вы смотрите в зеркало, вы не видите монстра. Вы видите человека. И в этом городе машин это самая редкая вещь из всех. Дело закрыто.",
        choices: {},
      },
      'node-23': {
        title: "Концовка: Идущий в тени",
        narration: "Вы исчезаете в тумане. Доказательства были разосланы во все газеты страны. Правительство рухнуло в течение недели. Вы наблюдаете из тени, как город горит и перестраивается. Вы теперь легенда, история о призраке, которую преступники рассказывают друг другу. Вы выжили, но вы одни. Вы поняли, что закон не может справиться с правдой, поэтому стали чем-то вне закона. Вы приподнимаете шляпу навстречу новому рассвету и уходите. Всегда найдется другая тайна.",
        choices: {},
      },
      'node-24': {
        title: "Концовка: Мученик",
        narration: "Взрыв был сдержан. Город был спасен. Они нашли ваше тело, привалившееся к сейфу, светящееся слабым, угасающим светом. Они поставили вам памятник на центральной площади. Он из бронзы и стоит высоко под дождем. Вы отдали всё, чтобы время текло естественно для всех остальных. Люди оставляют цветы у ваших ног. Вас нет, но в памяти города вы бессмертны так, как Торн никогда не смог бы достичь.",
        choices: {},
      },
      'node-25': {
        title: "Концовка: Повелитель Времени",
        narration: "Вы переступаете через тело Элары. Устройство ваше. Вы поворачиваете циферблат назад. Вы видите, как дождь поднимается из луж в небо. Вы видите, как пуля летит обратно в пистолет. Вы теперь хозяин этого города. Вы можете переписать каждую ошибку, выиграть каждое пари, заставить замолчать каждого критика. Вы живете сто лет, потом тысячу. Но медленно вы забываете, зачем вам это было нужно. Вы забываете свое имя. Вы становитесь часовым богом, совершенным и холодным, сидящим на троне из украденных секунд, правящим королевством пыли.",
        choices: {},
      },
    },
  },
  es: {
    title: "El Reloj del Alquimista",
    description: "Una historia de misterio noir de alto riesgo en una ciudad a vapor. Debes atravesar una profunda red de conspiraciones, resolviendo el asesinato de un hombre que afirmaba haber inventado la inmortalidad.",
    author: "Elena Vance",
    nodes: {
      'node-1': {
        title: "El Laboratorio Silencioso",
        narration: "La lluvia golpea el tragaluz del laboratorio del Doctor Aris Thorne, marcando el ritmo del dolor de cabeza que pulsa detrás de tus ojos. Thorne está muerto. El alquimista más controvertido de la ciudad yace desplomado sobre su escritorio de caoba, con una jeringa de latón incrustada en su cuello. La habitación huele a ozono y almendras amargas. El inspector Graves está afuera conteniendo a la prensa, dándote exactamente diez minutos para encontrar algo que la policía no entienda. El laboratorio está abarrotado: cubas burbujeantes a tu izquierda y una pared cubierta de frenéticas ecuaciones de tiza a tu derecha. Debes elegir tu punto de partida con cuidado; el asesino podría estar todavía en el edificio, o peor aún, podría haber dejado una trampa.",
        choices: {
          'choice-1': { text: "Examinar las ecuaciones de tiza en busca de un mensaje oculto" },
          'choice-2': { text: "Inspeccionar el cuerpo y la extraña jeringa más de cerca" },
        },
      },
      'node-2': {
        title: "La Escritura en la Pared",
        narration: "Te acercas a la pizarra. Parece un sinsentido para el ojo inexperto: compuestos químicos mezclados con símbolos astrológicos. Pero notas un patrón borroso. Alguien intentó borrar una sección específica cerca de la esquina inferior derecha. Usando tu lámpara UV, revelas un residuo débil: una coordenada de mapa que apunta al Distrito de los Muelles, específicamente al Almacén 42, y un nombre: 'Proyecto Aion'. Justo entonces, escuchas un crujido en el conducto de ventilación sobre ti. Alguien está mirando. Puedes intentar expulsar al espía inmediatamente, potencialmente atrapando a un testigo, o guardar las coordenadas y escabullirte por la parte trasera para seguir la pista antes de que la policía confisque la pizarra.",
        choices: {
          'choice-3': { text: "Disparar tu tiro de advertencia al conducto de ventilación" },
          'choice-4': { text: "Copiar silenciosamente las coordenadas y salir por atrás" },
        },
      },
      'node-3': {
        title: "La Evidencia del Cuerpo",
        narration: "Te acercas al cadáver de Thorne. La jeringa es intrincada, grabada con una serpiente comiéndose su propia cola. Extraño: no hay sangre. La piel alrededor de la herida se ha convertido en oro. No es asesinato; es transmutación. Revisas sus bolsillos y encuentras una pesada llave de hierro con un talón de boleto para el tren 'Expreso de Medianoche' que sale en una hora. De repente, el cuerpo se contrae. Es un reflejo galvánico, o tal vez algo peor. Escuchas botas pesadas acercándose a la puerta del laboratorio: el Inspector llega temprano. Puedes tomar la llave y saltar por la ventana a la escalera de incendios, o esconderte en el armario para escuchar lo que dice el Inspector cuando cree que está solo.",
        choices: {
          'choice-5': { text: "Tomar la llave de hierro y huir por la escalera de incendios" },
          'choice-6': { text: "Esconderse en el armario para espiar al Inspector" },
        },
      },
      'node-4': {
        title: "El Enfoque Agresivo",
        narration: "Tu táctica agresiva da resultados. Ya sea que disparaste al conducto o espiaste al corrupto Inspector, has aprendido que un grupo mercenario llamado 'Los Engranajes' está involucrado. Están esperando en la estación de tren. Corres a la estación. La lluvia es torrencial ahora. Ves a un grupo de hombres con gabardinas de cuero cargando una caja pesada en el vagón de carga. Este debe ser el prototipo 'Proyecto Aion'. Te superan en número. Puedes intentar causar una distracción saboteando la válvula de presión de la máquina de vapor para despejar la plataforma, o puedes disfrazarte de portero para acercarte a la caja sin ser notado.",
        choices: {
          'choice-7': { text: "Sabotear la válvula de vapor para crear una distracción caótica" },
          'choice-8': { text: "Robar un uniforme e infiltrarse como portero de equipaje" },
        },
      },
      'node-5': {
        title: "El Enfoque Sigiloso",
        narration: "Escapas hacia los callejones, aferrándote a tu pista: las coordenadas o la llave. Ambas te llevan al distrito industrial. Llegas al lugar: una fábrica de relojes abandonada. La puerta está cerrada, pero la llave de hierro encaja, o las coordenadas apuntan a una entrada del sótano. Dentro, es un laberinto de autómatas haciendo tictac parados en filas. En el centro de la habitación hay una caja fuerte. Escuchas el clic distintivo del martillo de un revólver detrás de ti. Es una mujer, la hija separada de Thorne, Elara. Ella exige saber por qué estás aquí. Puedes mostrarle la evidencia que encontraste para ganar su confianza, o desarmarla antes de que dispare.",
        choices: {
          'choice-9': { text: "Mostrar a Elara la evidencia para probar que estás investigando" },
          'choice-10': { text: "Desarmar físicamente a Elara para neutralizar la amenaza inmediatamente" },
        },
      },
      'node-6': {
        title: "La Persecución",
        narration: "El caos estalla. Ya sea por la explosión de vapor o la pelea con Elara, ahora estás huyendo. Has tomado un documento de la escena: un libro de contabilidad que prueba que el Alcalde de la Ciudad está financiando los experimentos poco éticos de Thorne. Te persigue un sabueso mecánico, una mezcla aterradora de latón y lobo. Te está ganando terreno en las alcantarillas. Llegas a un cruce. A la izquierda, una escalera de mantenimiento que lleva al concurrido distrito del mercado. A la derecha, un túnel más profundo que lleva hacia la mansión del Alcalde. El mercado ofrece una multitud para mezclarse, pero la mansión te pone a la ofensiva.",
        choices: {
          'choice-11': { text: "Subir al mercado abarrotado para perder al sabueso" },
          'choice-12': { text: "Descender más profundo hacia los túneles de la mansión del Alcalde" },
        },
      },
      'node-7': {
        title: "La Alianza",
        narration: "Lograste asegurar un aliado (o al menos una tregua) con Elara, o te infiltraste con éxito en el vagón de carga. Ahora tienes tiempo para examinar el dispositivo 'Proyecto Aion'. Es un reloj de bolsillo, pero la cara tiene 13 horas. Elara explica que no dice la hora; la roba. Thorne estaba cosechando vida de los pobres para venderla a los ricos. Necesitas decodificar el cifrado en el reloj para encontrar la lista de compradores. Puedes llevarlo a un hacker clandestino llamado 'Sparky' en los barrios bajos, o intentar decodificarlo tú mismo usando los libros de referencia en la Biblioteca de la Ciudad, arriesgándote a ser descubierto.",
        choices: {
          'choice-13': { text: "Visitar a Sparky en los barrios bajos para un descifrado rápido" },
          'choice-14': { text: "Irrumpir en la Biblioteca de la Ciudad para investigar el cifrado" },
        },
      },
      'node-8': {
        title: "La Emboscada",
        narration: "Llegas a tu destino: el bullicioso mercado o el taller de los barrios bajos. Crees que estás a salvo, pero un disparo de francotirador rompe el vidrio junto a tu cabeza. La guardia de élite del Alcalde te ha encontrado. Te lanzas a cubrirte. Estás inmovilizado. Ves una tubería de vapor corriendo a lo largo de la pared cerca de la percha del francotirador, y una caja de fuegos artificiales (es una semana de festival) cerca. Necesitas crear un camino para escapar. Disparar a la tubería de vapor podría escaldar al francotirador pero es un tiro difícil. Encender los fuegos artificiales creará humo y caos pero podría herir a civiles.",
        choices: {
          'choice-15': { text: "Disparar a la tubería de vapor distante para quemar al francotirador" },
          'choice-16': { text: "Encender la caja de fuegos artificiales para crear una cortina de humo" },
        },
      },
      'node-9': {
        title: "El Secreto Oscuro",
        narration: "En la tranquilidad de la biblioteca o los túneles profundos, descubres la pieza final del rompecabezas. El comprador no es solo el Alcalde; es una sociedad secreta llamada 'El Ouroboros Dorado'. Y el próximo envío de 'tiempo robado' ocurrirá esta noche en la Gran Gala. También encuentras un esquema del dispositivo. Tiene un defecto fatal: si se expone a una frecuencia resonante específica, se rompe. Puedes pasar la próxima hora construyendo un arma resonadora sónica, o puedes correr a la Gala inmediatamente para reunir evidencia física de la transacción antes de que cierren el trato.",
        choices: {
          'choice-17': { text: "Construir un resonador sónico para destruir el dispositivo" },
          'choice-18': { text: "Correr a la Gala para fotografiar la transacción ilegal" },
        },
      },
      'node-10': {
        title: "Preparación de Infiltración",
        narration: "Tienes tu arma (el resonador o tu fiel revólver) y has escapado de la emboscada. Estás fuera de la Ópera donde se celebra la Gala. La seguridad es estricta. Detectores de metales y guardias por todas partes. Ves un camión de reparto descargando suministros de catering en la entrada lateral. Alternativamente, notas que la rejilla de alcantarilla que atravesaste antes se conecta con el foso de la orquesta. El camión de catering requiere un disfraz y carisma. La ruta de la alcantarilla es asquerosa pero evita toda la seguridad electrónica. Tu elección determina tu punto de entrada.",
        choices: {
          'choice-19': { text: "Noquear a un conductor y robar un uniforme de catering" },
          'choice-20': { text: "Abrir la rejilla y entrar por las alcantarillas" },
        },
      },
      'node-11': {
        title: "El Ingeniero Social",
        narration: "Decides entrar a la Gala como invitado. Asaltas a un patrón rico en un callejón (o tal vez tenías un esmoquin de repuesto). Entras por la puerta principal. La opulencia es repugnante; candelabros dorados cuelgan sobre personas bebiendo champán pagado por las vidas de los pobres. Ves al Alcalde hablando con una figura enmascarada: el jefe del Ouroboros. Necesitas acercarte lo suficiente para escucharlos o plantar un micrófono. Un camarero pasa con una bandeja de bebidas. Puedes causar una escena chocando con el camarero para crear una distracción, o intentar mezclarte y bailar para acercarte a su círculo.",
        choices: {
          'choice-21': { text: "Chocar con el camarero para derramar bebidas sobre el Alcalde" },
          'choice-22': { text: "Pedirle a un extraño que baile y girar hacia el objetivo" },
        },
      },
      'node-12': {
        title: "El Santuario Interior",
        narration: "Estás dentro del salón VIP privado. La distracción funcionó o el disfraz aguantó. Ves el dispositivo en la mesa. Brilla con una luz verde enfermiza. El Alcalde se está riendo. Pero espera, entra el Doctor Thorne. ¡No está muerto! El cuerpo en el laboratorio era un clon, una marioneta de carne. Thorne fingió su muerte para mover la mercancía sin el escrutinio de la policía. Te ve. 'Ah, el detective', se burla. Hace una señal a sus dos guardaespaldas: enormes cyborgs a vapor. Estás en un espacio confinado. Puedes volcar la pesada mesa de roble para cubrirte y disparar, o lanzar tu granada cegadora (si tienes una) / explosivo improvisado para aturdirlos.",
        choices: {
          'choice-23': { text: "Volcar la pesada mesa para crear cobertura inmediata" },
          'choice-24': { text: "Lanzar una bomba de destello para cegar a los guardaespaldas cyborg" },
        },
      },
      'node-13': {
        title: "La Persecución en la Azotea",
        narration: "Tu sigilo falló, o elegiste atacar temprano. Thorne (¡que está vivo!) agarra el dispositivo y corre hacia la azotea, donde está atracando una aeronave. Lo persigues por la escalera de caracol. El viento aúlla. La aeronave 'El Ícaro' deja caer una escalera de cuerda. Thorne comienza a subir. Estás en el parapeto. Puedes apuntar al propio Thorne, arriesgándote a golpear el dispositivo y liberar la energía bruta del tiempo que podría envejecerte 50 años en un segundo, o apuntar a la escalera de cuerda para cortar su ruta de escape, forzando una confrontación en la azotea.",
        choices: {
          'choice-25': { text: "Tomar el tiro arriesgado a la mano de Thorne sosteniendo el dispositivo" },
          'choice-26': { text: "Disparar a la escalera de cuerda para dejarlo varado en la azotea" },
        },
      },
      'node-14': {
        title: "El Rehén",
        narration: "Thorne está acorralado, pero juega su as. Agarra a Elara (que te siguió) o a un camarero civil y le apunta con una pistola a la cabeza. '¡Déjame irme con el dispositivo', grita, 'o pinto las paredes con ellos!' La aeronave flota arriba, los motores rugen. El dispositivo en su bolsillo hace tictac más rápido. Si se sobrecarga, mata a todos en el edificio. Tienes un tiro limpio a su cabeza, pero si su dedo se contrae en el gatillo, el rehén muere. Alternativamente, puedes soltar tu arma e intentar convencerlo, comprando tiempo para que el dispositivo falle potencialmente.",
        choices: {
          'choice-27': { text: "Tomar el tiro a la cabeza imposible para terminarlo instantáneamente" },
          'choice-28': { text: "Soltar tu arma e intentar convencerlo de bajarla" },
        },
      },
      'node-15': {
        title: "El Núcleo de la Máquina",
        narration: "Thorne deja caer el dispositivo durante la lucha. Se desliza por la azotea/piso mojado y se activa. Una burbuja de tiempo distorsionado se expande. Dentro de la burbuja, la lluvia se detiene en el aire. Thorne se lanza por él. Tú también te lanzas. Ambos están dentro del campo de tiempo ahora. Los movimientos son lentos. Ves a Thorne alcanzando un cuchillo oculto. Tú estás alcanzando el dispositivo. Si agarras el dispositivo, puedes controlar el campo. Si abordas a Thorne, puedes empujarlo fuera del campo, donde el tiempo lo alcanzará violentamente. La elección debe hacerse en una fracción de segundo de tiempo congelado.",
        choices: {
          'choice-29': { text: "Agarrar el dispositivo para ganar control del campo de tiempo" },
          'choice-30': { text: "Abordar a Thorne para empujarlo fuera de la burbuja de tiempo" },
        },
      },
      'node-16': {
        title: "La Tentación",
        narration: "Thorne está derrotado, ya sea muerto o incapacitado. Sostienes el dispositivo. Pulsa con una luz cálida y dorada. Sientes que tus dolores y heridas se desvanecen. Funciona. Realmente funciona. Podrías vivir para siempre. Podrías volver y salvar a tu compañero que murió en ese caso hace cinco años. Podrías arreglar todo. La policía está derribando las puertas abajo. Tienes un momento de poder absoluto. ¿Rompes el dispositivo para terminar la maldición, o lo deslizas en tu bolsillo y le dices a la policía que se perdió en la pelea?",
        choices: {
          'choice-31': { text: "Levantar el dispositivo alto y romperlo contra el concreto" },
          'choice-32': { text: "Guardar secretamente el dispositivo y preparar una mentira" },
        },
      },
      'node-17': {
        title: "El Choque",
        narration: "La lucha hace que la aeronave de arriba golpee el edificio. Llueven escombros. El dispositivo está dañado y perdiendo energía. Va a explotar. Thorne se ríe maníacamente, roto y sangrando. '¡Si no puedo tenerlo, nadie puede!', grita. Necesitas contener la explosión. Hay una caja fuerte revestida de plomo cerca (del transporte de dinero del catering) o puedes tirarlo desde la azotea a la bahía. La caja fuerte podría contener la explosión pero tienes que arrastrarla allí. La bahía es más segura para ti, pero los químicos podrían envenenar el suministro de agua por años.",
        choices: {
          'choice-33': { text: "Arrastrar el dispositivo inestable a la caja fuerte revestida de plomo" },
          'choice-34': { text: "Tirar el dispositivo desde la azotea al puerto" },
        },
      },
      'node-18': {
        title: "Las Consecuencias",
        narration: "El peligro inmediato ha pasado. El dispositivo está destruido o desaparecido. Pero la conspiración permanece. El Alcalde todavía está en el salón de baile, sin saber que has derribado a su proveedor. Tienes el libro de contabilidad/evidencia. Regresas a la Gala, magullado y sangriento. La música se detiene. Todos los ojos están puestos en ti. Puedes caminar directamente hacia el Alcalde y arrestarlo frente a la élite de la ciudad, o puedes escabullirte y dar la evidencia a la prensa anónimamente, temiendo que los jueces corruptos simplemente lo absuelvan.",
        choices: {
          'choice-35': { text: "Confrontar públicamente y arrestar al Alcalde en el escenario" },
          'choice-36': { text: "Filtrar la evidencia a los periódicos y desaparecer" },
        },
      },
      'node-19': {
        title: "El Camino Oscuro",
        narration: "Tienes el dispositivo. Sientes su zumbido contra tus costillas. Dejas la escena antes de que la policía asegure la azotea. Ahora eres un fugitivo, pero uno inmortal. Sin embargo, el dispositivo requiere combustible. Se alimenta de vida. Te das cuenta de que el hambre de la máquina ahora está conectada a tu propio latido del corazón. Te encuentras con Elara en el callejón. Ella te mira con sospecha. '¿Dónde está?', pregunta. '¿Lo destruiste?' Puedes matarla para guardar tu secreto y alimentar a la máquina con su primera comida, o puedes confesar tu debilidad y pedir su ayuda para destruirlo antes de que te corrompa completamente.",
        choices: {
          'choice-37': { text: "Eliminar a Elara para proteger el dispositivo y tu secreto" },
          'choice-38': { text: "Entregar el dispositivo a Elara y rogarle que lo destruya" },
        },
      },
      'node-20': {
        title: "El Sacrificio",
        narration: "Pones el dispositivo en la caja fuerte, pero la puerta no cierra. El mecanismo de cierre está roto. La energía se está acumulando. Alguien tiene que mantener la puerta cerrada manualmente mientras ocurre la explosión dentro. El plomo protegerá la ciudad, pero la radiación inundará a la persona que sostiene la manija. Miras al Inspector Graves, que acaba de llegar. Es corrupto, pero tiene familia. Tú eres el héroe. Puedes ordenar a Graves que la sostenga a punta de pistola, redimiéndolo a través de la muerte, o puedes sostenerla tú mismo, haciendo el sacrificio final por una ciudad que apenas conoce tu nombre.",
        choices: {
          'choice-39': { text: "Obligar al Inspector Graves a sostener la puerta y redimirse" },
          'choice-40': { text: "Sostener la puerta tú mismo y aceptar tu destino" },
        },
      },
      'node-22': {
        title: "Final: La Ciudad Justa",
        narration: "Los titulares al día siguiente gritan sobre el arresto del Alcalde. '¡Detective Expone Anillo de Robo de Tiempo!' Te sientas en tu oficina, bebiendo un whisky barato. El dispositivo se ha ido, destruido por tu mano (o la de Elara). La ciudad sigue sucia, sigue lluviosa, pero los engranajes giran un poco más justos hoy. No te hiciste rico, y no viviste para siempre. Pero cuando te miras en el espejo, no ves un monstruo. Ves un ser humano. Y en esta ciudad de máquinas, esa es la cosa más rara de todas. Caso cerrado.",
        choices: {},
      },
      'node-23': {
        title: "Final: El Caminante de las Sombras",
        narration: "Te desvaneces en la niebla. La evidencia fue enviada por correo a todos los periódicos del país. El gobierno colapsó en una semana. Observas desde las sombras cómo la ciudad arde y se reconstruye a sí misma. Eres una leyenda ahora, una historia de fantasmas que los criminales se cuentan entre sí. Sobreviviste, pero estás solo. Te diste cuenta de que la ley no podía manejar la verdad, así que te convertiste en algo fuera de la ley. Te inclinas el sombrero ante el nuevo amanecer y te alejas. Siempre habrá otro misterio.",
        choices: {},
      },
      'node-24': {
        title: "Final: El Mártir",
        narration: "La explosión fue contenida. La ciudad fue salvada. Encontraron tu cuerpo desplomado contra la caja fuerte, brillando con una luz tenue y desvanecida. Te construyeron una estatua en la plaza central. Es de bronce, y se yergue alta contra la lluvia. Diste todo para que el tiempo fluyera naturalmente para todos los demás. La gente deja flores a tus pies. Te has ido, pero en la memoria de la ciudad, eres inmortal de una manera que Thorne nunca podría haber logrado.",
        choices: {},
      },
      'node-25': {
        title: "Final: El Señor del Tiempo",
        narration: "Pasas por encima del cuerpo de Elara. El dispositivo es tuyo. Giras el dial hacia atrás. Ves la lluvia subir de los charcos al cielo. Ves la bala volar de regreso a la pistola. Eres el amo de esta ciudad ahora. Puedes reescribir cada error, ganar cada apuesta, silenciar a cada crítico. Vives cien años, luego mil. Pero lentamente, olvidas por qué lo querías. Olvidas tu nombre. Te conviertes en el dios del reloj, perfecto y frío, sentado en un trono de segundos robados, gobernando un reino de polvo.",
        choices: {},
      },
    },
  },
  de: {
    title: "Die Uhr des Alchemisten",
    description: "Ein hochriskantes Noir-Mysterium in einer dampfbetriebenen Stadt. Sie müssen ein tiefes Netz aus Verschwörungen durchqueren und den Mord an einem Mann aufklären, der behauptete, die Unsterblichkeit erfunden zu haben.",
    author: "Elena Vance",
    nodes: {
      'node-1': {
        title: "Das Stille Labor",
        narration: "Der Regen prasselt auf das Oberlicht von Doktor Aris Thornes Labor und hält Takt mit den Kopfschmerzen, die hinter Ihren Augen pochen. Thorne ist tot. Der umstrittenste Alchemist der Stadt liegt über seinem Mahagonischreibtisch zusammengesunken, eine Messingspritze steckt in seinem Hals. Der Raum riecht nach Ozon und Bittermandeln. Inspektor Graves hält draußen die Presse zurück und gibt Ihnen genau zehn Minuten, um etwas zu finden, das die Polizei nicht verstehen wird. Das Labor ist vollgestopft: blubbernde Bottiche zu Ihrer Linken und eine Wand voller hektischer Kreidegleichungen zu Ihrer Rechten. Sie müssen Ihren Ausgangspunkt sorgfältig wählen; der Mörder könnte noch im Gebäude sein, oder schlimmer noch, er könnte eine Falle hinterlassen haben.",
        choices: {
          'choice-1': { text: "Die Kreidegleichungen auf eine versteckte Nachricht untersuchen" },
          'choice-2': { text: "Den Körper und die seltsame Spritze genauer untersuchen" },
        },
      },
      'node-2': {
        title: "Die Schrift an der Wand",
        narration: "Sie treten näher an die Tafel. Für das ungeübte Auge sieht es wie Unsinn aus – chemische Verbindungen gemischt mit astrologischen Symbolen. Aber Sie bemerken ein Wischmuster. Jemand hat versucht, einen bestimmten Abschnitt unten rechts zu löschen. Mit Ihrer UV-Lampe enthüllen Sie einen schwachen Rückstand: eine Kartenkoordinate, die auf das Hafenviertel zeigt, speziell auf Lagerhaus 42, und einen Namen: 'Projekt Aion'. Genau in diesem Moment hören Sie ein Knarren aus dem Lüftungsschacht über Ihnen. Jemand beobachtet Sie. Sie können versuchen, den Spion sofort auszuräuchern und möglicherweise einen Zeugen zu fangen, oder die Koordinaten kopieren und durch den Hinterausgang schleichen, um der Spur zu folgen, bevor die Polizei die Tafel beschlagnahmt.",
        choices: {
          'choice-3': { text: "Ihren Warnschuss in den Lüftungsschacht abfeuern" },
          'choice-4': { text: "Leise die Koordinaten kopieren und hinten rausschleichen" },
        },
      },
      'node-3': {
        title: "Der Beweis am Körper",
        narration: "Sie nähern sich Thornes Leiche. Die Spritze ist kompliziert, graviert mit einer Schlange, die ihren eigenen Schwanz frisst. Seltsam – es gibt kein Blut. Die Haut um die Wunde hat sich in Gold verwandelt. Es ist kein Mord; es ist Transmutation. Sie überprüfen seine Taschen und finden einen schweren Eisenschlüssel mit einem Ticketabriss für den 'Mitternachtsexpress', der in einer Stunde abfährt. Plötzlich zuckt der Körper. Es ist ein galvanischer Reflex, oder vielleicht etwas Schlimmeres. Sie hören schwere Stiefel, die sich der Labortür nähern – der Inspektor kommt früher. Sie können den Schlüssel nehmen und aus dem Fenster auf die Feuertreppe springen oder sich im Schrank verstecken, um zu belauschen, was der Inspektor sagt, wenn er glaubt, allein zu sein.",
        choices: {
          'choice-5': { text: "Den Eisenschlüssel schnappen und über die Feuertreppe fliehen" },
          'choice-6': { text: "Im Schrank verstecken, um den Inspektor zu belauschen" },
        },
      },
      'node-4': {
        title: "Der aggressive Ansatz",
        narration: "Ihre aggressive Taktik bringt Ergebnisse. Ob Sie in den Schacht geschossen oder den korrupten Inspektor belauscht haben, Sie haben erfahren, dass eine Söldnergruppe namens 'Die Zahnräder' involviert ist. Sie warten am Bahnhof. Sie eilen zum Bahnhof. Der Regen ist jetzt sintflutartig. Sie entdecken eine Gruppe von Männern in Ledermänteln, die eine schwere Kiste in den Güterwagen laden. Das muss der 'Projekt Aion'-Prototyp sein. Sie sind in der Unterzahl. Sie können versuchen, eine Ablenkung zu verursachen, indem Sie das Druckventil der Dampfmaschine sabotieren, um den Bahnsteig zu räumen, oder Sie können sich als Gepäckträger verkleiden, um unbemerkt an die Kiste heranzukommen.",
        choices: {
          'choice-7': { text: "Das Dampfventil sabotieren, um eine chaotische Ablenkung zu schaffen" },
          'choice-8': { text: "Eine Uniform stehlen und als Gepäckträger infiltrieren" },
        },
      },
      'node-5': {
        title: "Der heimliche Ansatz",
        narration: "Sie entkommen in die Gassen und klammern sich an Ihren Hinweis – entweder die Koordinaten oder den Schlüssel. Beide führen Sie in das Industriegebiet. Sie kommen am Ort an: eine verlassene Uhrenfabrik. Die Tür ist verschlossen, aber der Eisenschlüssel passt, oder die Koordinaten weisen auf einen Kellereingang hin. Drinnen ist es ein Labyrinth aus tickenden Automaten, die in Reihen stehen. In der Mitte des Raumes steht ein Safe. Sie hören das deutliche Klicken eines Revolverhahns hinter sich. Es ist eine Frau, Thornes entfremdete Tochter Elara. Sie verlangt zu wissen, warum Sie hier sind. Sie können ihr die Beweise zeigen, die Sie gefunden haben, um ihr Vertrauen zu gewinnen, oder sie entwaffnen, bevor sie schießt.",
        choices: {
          'choice-9': { text: "Elara die Beweise zeigen, um zu beweisen, dass Sie ermitteln" },
          'choice-10': { text: "Elara physisch entwaffnen, um die Bedrohung sofort zu neutralisieren" },
        },
      },
      'node-6': {
        title: "Die Verfolgung",
        narration: "Chaos bricht aus. Ob durch die Dampfexplosion oder den Kampf mit Elara, Sie sind jetzt auf der Flucht. Sie haben ein Dokument vom Tatort mitgenommen – ein Hauptbuch, das beweist, dass der Bürgermeister der Stadt Thornes unethische Experimente finanziert. Sie werden von einem mechanischen Hund verfolgt, einer schrecklichen Mischung aus Messing und Wolf. Er holt in der Kanalisation auf. Sie erreichen eine Kreuzung. Links eine Wartungsleiter, die zum belebten Marktviertel führt. Rechts ein tieferer Tunnel, der zum Anwesen des Bürgermeisters führt. Der Markt bietet eine Menschenmenge zum Untertauchen, aber das Anwesen bringt Sie in die Offensive.",
        choices: {
          'choice-11': { text: "Zum überfüllten Markt klettern, um den Hund abzuschütteln" },
          'choice-12': { text: "Tiefer zu den Tunneln des Bürgermeisteranwesens hinabsteigen" },
        },
      },
      'node-7': {
        title: "Die Allianz",
        narration: "Sie haben es geschafft, einen Verbündeten (oder zumindest einen Waffenstillstand) mit Elara zu sichern, oder Sie haben den Güterwagen erfolgreich infiltriert. Sie haben jetzt Zeit, das 'Projekt Aion'-Gerät zu untersuchen. Es ist eine Taschenuhr, aber das Zifferblatt hat 13 Stunden. Elara erklärt, dass es die Zeit nicht anzeigt; es stiehlt sie. Thorne erntete Lebenszeit von den Armen, um sie an die Reichen zu verkaufen. Sie müssen die Verschlüsselung auf der Uhr entschlüsseln, um die Käuferliste zu finden. Sie können sie zu einem Untergrund-Hacker namens 'Sparky' in den Slums bringen oder versuchen, sie selbst mit den Nachschlagewerken in der Stadtbibliothek zu entschlüsseln, wobei Sie riskieren, entdeckt zu werden.",
        choices: {
          'choice-13': { text: "Sparky in den Slums für eine schnelle Entschlüsselung besuchen" },
          'choice-14': { text: "In die Stadtbibliothek einbrechen, um den Code zu untersuchen" },
        },
      },
      'node-8': {
        title: "Der Hinterhalt",
        narration: "Sie kommen an Ihrem Ziel an – dem belebten Markt oder der Slumwerkstatt. Sie glauben, Sie sind sicher, aber ein Scharfschützenschuss zersplittert das Glas neben Ihrem Kopf. Die Elitegarde des Bürgermeisters hat Sie gefunden. Sie hechten in Deckung. Sie sitzen fest. Sie entdecken ein Dampfrohr, das entlang der Wand in der Nähe des Scharfschützenplatzes verläuft, und eine Kiste mit Feuerwerkskörpern (es ist eine Festwoche) in der Nähe. Sie müssen einen Fluchtweg schaffen. Das Schießen auf das Dampfrohr könnte den Scharfschützen verbrühen, ist aber ein schwieriger Schuss. Das Zünden der Feuerwerkskörper erzeugt Rauch und Chaos, könnte aber Zivilisten verletzen.",
        choices: {
          'choice-15': { text: "Auf das entfernte Dampfrohr schießen, um den Scharfschützen zu verbrennen" },
          'choice-16': { text: "Die Kiste mit Feuerwerkskörpern entzünden, um eine Rauchwand zu erzeugen" },
        },
      },
      'node-9': {
        title: "Das Dunkle Geheimnis",
        narration: "In der Stille der Bibliothek oder den tiefen Tunneln decken Sie das letzte Puzzleteil auf. Der Käufer ist nicht nur der Bürgermeister; es ist eine Geheimgesellschaft namens 'Der Goldene Ouroboros'. Und die nächste Lieferung von 'gestohlener Zeit' findet heute Abend auf der Großen Gala statt. Sie finden auch einen Bauplan für das Gerät. Es hat einen fatalen Fehler: Wenn es einer bestimmten Resonanzfrequenz ausgesetzt wird, zerbricht es. Sie können die nächste Stunde damit verbringen, eine Schallresonatorwaffe zu bauen, oder Sie können sofort zur Gala eilen, um physische Beweise für die Transaktion zu sammeln, bevor sie den Deal abschließen.",
        choices: {
          'choice-17': { text: "Einen Schallresonator bauen, um das Gerät zu zerstören" },
          'choice-18': { text: "Zur Gala eilen, um die illegale Transaktion zu fotografieren" },
        },
      },
      'node-10': {
        title: "Infiltrationsvorbereitung",
        narration: "Sie haben Ihre Waffe (den Resonator oder Ihren treuen Revolver) und sind dem Hinterhalt entkommen. Sie stehen vor dem Opernhaus, wo die Gala stattfindet. Die Sicherheit ist streng. Metalldetektoren und Wachen überall. Sie sehen einen Lieferwagen, der Catering-Vorräte am Seiteneingang ablädt. Alternativ bemerken Sie, dass das Kanalgitter, das Sie zuvor durchquert haben, mit dem Orchestergraben verbunden ist. Der Catering-Wagen erfordert eine Verkleidung und Charisma. Die Kanalroute ist schmutzig, umgeht aber alle elektronischen Sicherheitsvorkehrungen. Ihre Wahl bestimmt Ihren Einstiegspunkt.",
        choices: {
          'choice-19': { text: "Einen Fahrer bewusstlos schlagen und eine Catering-Uniform stehlen" },
          'choice-20': { text: "Das Gitter aufbrechen und durch die Kanalisation eindringen" },
        },
      },
      'node-11': {
        title: "Der Social Engineer",
        narration: "Sie beschließen, die Gala als Gast zu betreten. Sie überfallen einen reichen Gönner in einer Gasse (oder vielleicht hatten Sie einen Ersatz-Smoking). Sie gehen durch die Vordertür. Der Überfluss ist ekelerregend; goldene Kronleuchter hängen über Menschen, die Champagner trinken, der mit dem Leben der Armen bezahlt wurde. Sie entdecken den Bürgermeister, der mit einer maskierten Gestalt spricht – dem Kopf des Ouroboros. Sie müssen nah genug herankommen, um sie zu hören oder eine Wanze zu platzieren. Ein Kellner kommt mit einem Tablett mit Getränken vorbei. Sie können eine Szene verursachen, indem Sie mit dem Kellner zusammenstoßen, um eine Ablenkung zu schaffen, oder versuchen, sich einzumischen und tanzend näher an ihren Kreis heranzukommen.",
        choices: {
          'choice-21': { text: "Mit dem Kellner zusammenstoßen, um Getränke auf den Bürgermeister zu verschütten" },
          'choice-22': { text: "Einen Fremden zum Tanzen auffordern und sich dem Ziel nähern" },
        },
      },
      'node-12': {
        title: "Das Innere Heiligtum",
        narration: "Sie sind in der privaten VIP-Lounge. Die Ablenkung hat funktioniert oder die Verkleidung hat gehalten. Sie sehen das Gerät auf dem Tisch. Es leuchtet in einem kränklichen grünen Licht. Der Bürgermeister lacht. Aber warten Sie – Doktor Thorne kommt herein. Er ist nicht tot! Die Leiche im Labor war ein Klon, eine Fleischpuppe. Thorne hat seinen Tod vorgetäuscht, um die Ware ohne polizeiliche Kontrolle zu bewegen. Er entdeckt Sie. 'Ah, der Detektiv', höhnt er. Er gibt seinen zwei Leibwächtern ein Zeichen – massiven dampfbetriebenen Cyborgs. Sie sind in einem engen Raum. Sie können den schweren Eichentisch umwerfen, um Deckung zu suchen und zu schießen, oder Ihre Blendgranate (falls Sie eine haben) / improvisierten Sprengstoff werfen, um sie zu betäuben.",
        choices: {
          'choice-23': { text: "Den schweren Tisch umwerfen, um sofortige Deckung zu schaffen" },
          'choice-24': { text: "Eine Blendbombe werfen, um die Cyborg-Leibwächter zu blenden" },
        },
      },
      'node-13': {
        title: "Die Verfolgung auf dem Dach",
        narration: "Ihre Heimlichkeit ist gescheitert, oder Sie haben sich entschieden, früh zuzuschlagen. Thorne (der lebt!) schnappt sich das Gerät und rennt zum Dach, wo ein Luftschiff andockt. Sie verfolgen ihn die Wendeltreppe hinauf. Der Wind heult. Das Luftschiff 'Der Ikarus' lässt eine Strickleiter herunter. Thorne beginnt zu klettern. Sie sind auf der Brüstung. Sie können auf Thorne selbst zielen und riskieren, das Gerät zu treffen und die rohe Zeitenergie freizusetzen, die Sie in einer Sekunde um 50 Jahre altern lassen könnte, oder auf die Strickleiter zielen, um seinen Fluchtweg zu kappen und eine Konfrontation auf dem Dach zu erzwingen.",
        choices: {
          'choice-25': { text: "Den riskanten Schuss auf Thornes Hand wagen, die das Gerät hält" },
          'choice-26': { text: "Auf die Strickleiter schießen, um ihn auf dem Dach stranden zu lassen" },
        },
      },
      'node-14': {
        title: "Die Geisel",
        narration: "Thorne ist in die Enge getrieben, aber er spielt sein Ass. Er packt Elara (die Ihnen gefolgt ist) oder einen zivilen Kellner und hält ihnen eine Pistole an den Kopf. 'Lass mich mit dem Gerät gehen', schreit er, 'oder ich streiche die Wände mit ihnen!' Das Luftschiff schwebt darüber, die Motoren dröhnen. Das Gerät in seiner Tasche tickt schneller. Wenn es überlastet, tötet es jeden im Gebäude. Sie haben einen freien Schuss auf seinen Kopf, aber wenn sein Finger am Abzug zuckt, stirbt die Geisel. Alternativ können Sie Ihre Waffe fallen lassen und versuchen, ihn zu überreden, Zeit zu kaufen, damit das Gerät möglicherweise eine Fehlfunktion hat.",
        choices: {
          'choice-27': { text: "Den unmöglichen Kopfschuss wagen, um es sofort zu beenden" },
          'choice-28': { text: "Die Waffe fallen lassen und versuchen, ihn zum Aufgeben zu überreden" },
        },
      },
      'node-15': {
        title: "Der Kern der Maschine",
        narration: "Thorne lässt das Gerät während des Kampfes fallen. Es rutscht über das nasse Dach/den Boden und aktiviert sich. Eine Blase verzerrter Zeit dehnt sich aus. Innerhalb der Blase stoppt der Regen in der Luft. Thorne hechtet danach. Sie hechten auch. Sie sind beide jetzt im Zeitfeld. Bewegungen sind träge. Sie sehen, wie Thorne nach einem versteckten Messer greift. Sie greifen nach dem Gerät. Wenn Sie das Gerät greifen, können Sie das Feld kontrollieren. Wenn Sie Thorne tackeln, können Sie ihn aus dem Feld stoßen, wo die Zeit ihn gewaltsam einholen wird. Die Wahl muss in einem Bruchteil einer Sekunde gefrorener Zeit getroffen werden.",
        choices: {
          'choice-29': { text: "Das Gerät greifen, um die Kontrolle über das Zeitfeld zu erlangen" },
          'choice-30': { text: "Thorne tackeln, um ihn aus der Zeitblase zu stoßen" },
        },
      },
      'node-16': {
        title: "Die Versuchung",
        narration: "Thorne ist besiegt – entweder tot oder handlungsunfähig. Sie halten das Gerät. Es pulsiert mit einem warmen, goldenen Licht. Sie spüren, wie Ihre Schmerzen und Wunden verblassen. Es funktioniert. Es funktioniert wirklich. Sie könnten ewig leben. Sie könnten zurückgehen und Ihren Partner retten, der vor fünf Jahren bei diesem Fall starb. Sie könnten alles in Ordnung bringen. Die Polizei bricht unten die Türen auf. Sie haben einen Moment absoluter Macht. Zerschlagen Sie das Gerät, um den Fluch zu beenden, oder lassen Sie es in Ihre Tasche gleiten und sagen der Polizei, es sei im Kampf verloren gegangen?",
        choices: {
          'choice-31': { text: "Das Gerät hochheben und auf den Beton schmettern" },
          'choice-32': { text: "Das Gerät heimlich einstecken und eine Lüge vorbereiten" },
        },
      },
      'node-17': {
        title: "Der Absturz",
        narration: "Der Kampf führt dazu, dass das Luftschiff oben das Gebäude streift. Trümmer regnen herab. Das Gerät ist beschädigt und verliert Energie. Es wird explodieren. Thorne lacht manisch, gebrochen und blutend. 'Wenn ich es nicht haben kann, kann es niemand!', schreit er. Sie müssen die Explosion eindämmen. Es gibt einen bleigefütterten Safe in der Nähe (vom Catering-Geldtransport) oder Sie können es vom Dach in die Bucht werfen. Der Safe könnte die Explosion eindämmen, aber Sie müssen ihn dorthin schleppen. Die Bucht ist sicherer für Sie, aber die Chemikalien könnten die Wasserversorgung jahrelang vergiften.",
        choices: {
          'choice-33': { text: "Das instabile Gerät in den bleigefütterten Safe schleppen" },
          'choice-34': { text: "Das Gerät vom Dach in den Hafen werfen" },
        },
      },
      'node-18': {
        title: "Die Nachwirkungen",
        narration: "Die unmittelbare Gefahr ist vorbei. Das Gerät ist zerstört oder weg. Aber die Verschwörung bleibt. Der Bürgermeister ist immer noch im Ballsaal, nicht ahnend, dass Sie seinen Lieferanten ausgeschaltet haben. Sie haben das Hauptbuch/Beweise. Sie gehen zurück zur Gala, geprellt und blutig. Die Musik stoppt. Alle Augen sind auf Sie gerichtet. Sie können direkt zum Bürgermeister gehen und ihn vor der Elite der Stadt verhaften, oder Sie können sich davonschleichen und die Beweise anonym der Presse geben, aus Angst, dass die korrupten Richter ihn einfach freisprechen würden.",
        choices: {
          'choice-35': { text: "Den Bürgermeister öffentlich konfrontieren und auf der Bühne verhaften" },
          'choice-36': { text: "Die Beweise an die Zeitungen durchsickern lassen und verschwinden" },
        },
      },
      'node-19': {
        title: "Der Dunkle Pfad",
        narration: "Sie haben das Gerät. Sie spüren sein Summen an Ihren Rippen. Sie verlassen den Tatort, bevor die Polizei das Dach sichert. Sie sind jetzt ein Flüchtling, aber ein unsterblicher. Das Gerät benötigt jedoch Treibstoff. Es ernährt sich von Leben. Sie erkennen, dass der Hunger der Maschine jetzt mit Ihrem eigenen Herzschlag verbunden ist. Sie treffen Elara in der Gasse. Sie sieht Sie misstrauisch an. 'Wo ist es?', fragt sie. 'Hast du es zerstört?' Sie können sie töten, um Ihr Geheimnis zu wahren und der Maschine ihre erste Mahlzeit zu geben, oder Sie können Ihre Schwäche gestehen und sie um Hilfe bitten, es zu zerstören, bevor es Sie vollständig korrumpiert.",
        choices: {
          'choice-37': { text: "Elara eliminieren, um das Gerät und Ihr Geheimnis zu schützen" },
          'choice-38': { text: "Das Gerät Elara geben und sie anflehen, es zu zerstören" },
        },
      },
      'node-20': {
        title: "Das Opfer",
        narration: "Sie legen das Gerät in den Safe, aber die Tür rastet nicht ein. Der Verriegelungsmechanismus ist kaputt. Die Energie baut sich auf. Jemand muss die Tür manuell zuhalten, während die Explosion im Inneren stattfindet. Das Blei schützt die Stadt, aber die Strahlung wird die Person überfluten, die den Griff hält. Sie schauen Inspektor Graves an, der gerade angekommen ist. Er ist korrupt, aber er hat eine Familie. Sie sind der Held. Sie können Graves befehlen, es mit vorgehaltener Waffe zu halten und ihn durch den Tod zu erlösen, oder Sie können es selbst halten und das ultimative Opfer für eine Stadt bringen, die Ihren Namen kaum kennt.",
        choices: {
          'choice-39': { text: "Inspektor Graves zwingen, die Tür zu halten und sich zu erlösen" },
          'choice-40': { text: "Die Tür selbst halten und Ihr Schicksal akzeptieren" },
        },
      },
      'node-22': {
        title: "Ende: Die Gerechte Stadt",
        narration: "Die Schlagzeilen am nächsten Tag schreien von der Verhaftung des Bürgermeisters. 'Detektiv entlarvt Zeitdiebstahl-Ring!' Sie sitzen in Ihrem Büro und trinken einen billigen Whiskey. Das Gerät ist weg, zerstört durch Ihre Hand (oder Elaras). Die Stadt ist immer noch schmutzig, immer noch regnerisch, aber die Zahnräder mahlen heute etwas gerechter. Sie sind nicht reich geworden und leben nicht ewig. Aber wenn Sie in den Spiegel schauen, sehen Sie kein Monster. Sie sehen einen Menschen. Und in dieser Stadt der Maschinen ist das die seltenste Sache von allen. Fall geschlossen.",
        choices: {},
      },
      'node-23': {
        title: "Ende: Der Schattenläufer",
        narration: "Sie verschwinden im Nebel. Die Beweise wurden an jede Zeitung im Land geschickt. Die Regierung brach innerhalb einer Woche zusammen. Sie beobachten aus den Schatten, wie die Stadt brennt und sich neu aufbaut. Sie sind jetzt eine Legende, eine Geistergeschichte, die sich Kriminelle gegenseitig erzählen. Sie haben überlebt, aber Sie sind allein. Sie haben erkannt, dass das Gesetz mit der Wahrheit nicht umgehen konnte, also wurden Sie etwas außerhalb des Gesetzes. Sie tippen Ihren Hut zum neuen Morgen und gehen weg. Es wird immer ein anderes Mysterium geben.",
        choices: {},
      },
      'node-24': {
        title: "Ende: Der Märtyrer",
        narration: "Die Explosion wurde eingedämmt. Die Stadt wurde gerettet. Sie fanden Ihren Körper gegen den Safe gelehnt, leuchtend mit einem schwachen, verblassenden Licht. Sie bauten eine Statue von Ihnen auf dem zentralen Platz. Sie ist aus Bronze und steht hoch gegen den Regen. Sie gaben alles, damit die Zeit für alle anderen natürlich fließen würde. Die Leute legen Blumen zu Ihren Füßen. Sie sind gegangen, aber in der Erinnerung der Stadt sind Sie unsterblich auf eine Weise, die Thorne nie hätte erreichen können.",
        choices: {},
      },
      'node-25': {
        title: "Ende: Der Zeitlord",
        narration: "Sie steigen über Elaras Körper. Das Gerät gehört Ihnen. Sie drehen das Zifferblatt zurück. Sie sehen, wie der Regen aus den Pfützen in den Himmel steigt. Sie sehen, wie die Kugel zurück in die Waffe fliegt. Sie sind jetzt der Herr dieser Stadt. Sie können jeden Fehler umschreiben, jede Wette gewinnen, jeden Kritiker zum Schweigen bringen. Sie leben hundert Jahre, dann tausend. Aber langsam vergessen Sie, warum Sie es wollten. Sie vergessen Ihren Namen. Sie werden der Uhrwerkgott, perfekt und kalt, sitzend auf einem Thron aus gestohlenen Sekunden, ein Königreich aus Staub regierend.",
        choices: {},
      },
    },
  },
  fr: {
    title: "La Montre de l'Alchimiste",
    description: "Un mystère noir à haut risque dans une ville à vapeur. Vous devez traverser un profond réseau de conspirations, en résolvant le meurtre d'un homme qui prétendait avoir inventé l'immortalité.",
    author: "Elena Vance",
    nodes: {
      'node-1': {
        title: "Le Laboratoire Silencieux",
        narration: "La pluie tambourine sur la verrière du laboratoire du Docteur Aris Thorne, au rythme du mal de tête qui bat derrière vos yeux. Thorne est mort. L'alchimiste le plus controversé de la ville est affalé sur son bureau en acajou, une seringue en laiton plantée dans le cou. La pièce sent l'ozone et les amandes amères. L'Inspecteur Graves retient la presse à l'extérieur, vous donnant exactement dix minutes pour trouver quelque chose que la police ne comprendra pas. Le laboratoire est encombré : des cuves bouillonnantes sur votre gauche et un mur couvert d'équations crayonnées frénétiques sur votre droite. Vous devez choisir votre point de départ avec soin ; le tueur pourrait être encore dans le bâtiment, ou pire, avoir laissé un piège.",
        choices: {
          'choice-1': { text: "Examiner les équations à la craie pour un message caché" },
          'choice-2': { text: "Inspecter le corps et l'étrange seringue de plus près" },
        },
      },
      'node-2': {
        title: "Le Chiffre à la Craie",
        narration: "Vous plissez les yeux devant le tableau noir. Au milieu du chaos de formules alchimiques, vous remarquez une série de coordonnées soulignées à la hâte. Elles pointent vers les Docks, spécifiquement l'entrepôt 42. Mais en vous penchant, vous déclenchez un fil de détente. Un flacon de gaz vert se brise. Vous toussez, vos poumons brûlent. Vous titubez en arrière, attrapant un morceau de papier sur le bureau alors que vous fuyez la pièce pour prendre l'air. C'est une page d'un grand livre, listant des paiements massifs d'un syndicat connu sous le nom de 'Les Engrenages'.",
        choices: {
          'choice-3': { text: "Se précipiter aux Docks pour enquêter sur l'entrepôt 42" },
          'choice-4': { text: "Retracer les paiements du syndicat 'Les Engrenages' dans les bas-fonds" },
        },
      },
      'node-3': {
        title: "La Seringue en Laiton",
        narration: "Vous retirez la seringue. Elle n'est pas remplie de poison, mais de quelque chose qui brille comme de l'or liquide. En l'examinant, vous remarquez une minuscule inscription sur l'aiguille : 'Propriété de l'Institut Royal'. Thorne volait ses propres collègues. Dans sa poche, vous trouvez une montre à gousset qui ne tique pas ; ses aiguilles tournent à l'envers. Soudain, vous entendez des pas lourds derrière vous. C'est l'automate de sécurité de Thorne, et ses yeux brillent d'un rouge hostile.",
        choices: {
          'choice-5': { text: "Utiliser la seringue comme une arme improvisée contre l'automate" },
          'choice-6': { text: "Esquiver et tenter de désactiver l'automate en utilisant ses commandes manuelles" },
        },
      },
      'node-4': {
        title: "L'Entrepôt 42",
        narration: "Les Docks puent le sel et le poisson pourri. L'entrepôt 42 est sombre, mais vous voyez de la lumière filtrer par les fissures. À l'intérieur, des membres du gang des Engrenages chargent des caisses marquées d'un symbole de sablier. Ils font de la contrebande de technologie temporelle. Vous voyez leur chef, un homme avec un bras mécanique, discuter avec une femme en soie rouge. C'est Lady Elara, la principale bienfaitrice de la ville. Ils se disputent au sujet d'une livraison manquée.",
        choices: {
          'choice-7': { text: "Écouter leur conversation depuis l'ombre" },
          'choice-8': { text: "Créer une distraction pour voler une des caisses" },
        },
      },
      'node-5': {
        title: "Le Repaire des Engrenages",
        narration: "Le bar souterrain est enfumé et bruyant. Vous montrez la page du grand livre au barman. Il pâlit et pointe vers une cabine à l'arrière. Là, un informateur nerveux vous dit que Thorne payait pour la protection, mais qu'il a cessé la semaine dernière. 'Il a dit qu'il n'avait plus besoin de nous', murmure l'informateur. 'Il a dit qu'il avait trouvé un moyen d'annuler ses erreurs.' L'informateur vous glisse une clé marquée 'Gare Centrale, Casier 9' avant de s'enfuir.",
        choices: {
          'choice-9': { text: "Aller à la Gare Centrale et ouvrir le casier" },
          'choice-10': { text: "Mettre la pression sur l'informateur pour plus de détails" },
        },
      },
      'node-6': {
        title: "Démantèlement",
        narration: "Vous plantez la seringue dans les câbles exposés de l'automate. Le liquide doré grésille et la machine se fige, puis s'effondre. L'impact brise la seringue, mais vous récupérez le noyau de données de l'automate. C'est une bobine de mémoire. Vous avez besoin d'un terminal pour la lire. Le seul assez proche et assez puissant est à la Mairie, mais s'y introduire est risqué.",
        choices: {
          'choice-11': { text: "S'introduire dans la salle des serveurs de la Mairie" },
          'choice-12': { text: "Apporter le noyau à un contact pirate dans le Secteur Industriel" },
        },
      },
      'node-7': {
        title: "Contournement Manuel",
        narration: "Vous roulez sous le bras oscillant de l'automate et ouvrez son panneau d'accès. Vos doigts volent sur les engrenages, mais vous êtes trop lent. Il vous jette à travers la pièce. Vous vous écrasez contre une étagère, meurtri. Dans le désordre, vous trouvez un plan caché. Il montre un appareil appelé 'L'Ancre de Chronos', situé dans la tour de l'horloge de la ville. L'automate se prépare à charger à nouveau.",
        choices: {
          'choice-13': { text: "Fuir par la fenêtre et se diriger vers la Tour de l'Horloge" },
          'choice-14': { text: "Tirer sur les pistons de jambe de l'automate pour le ralentir et s'échapper" },
        },
      },
      'node-8': {
        title: "Le Secret de Lady Elara",
        narration: "Vous entendez Elara dire : 'Thorne devenait avide. Il voulait garder l'appareil pour lui-même.' L'homme au bras mécanique grogne : 'Et maintenant l'Inspecteur Graves renifle partout.' Elara rit. 'Graves est dans ma poche. Inquiétez-vous pour le détective privé.' Elle sort un pistolet doré. 'Brûlez cet endroit. Ne laissez aucune trace.' Ils commencent à verser de l'essence.",
        choices: {
          'choice-15': { text: "Confronter Elara avant qu'elle ne puisse allumer le feu" },
          'choice-16': { text: "S'échapper silencieusement et rapporter cela à Graves (s'il est digne de confiance)" },
        },
      },
      'node-9': {
        title: "Le Casier",
        narration: "À la gare, le casier 9 contient un seul objet : une lettre scellée adressée à vous. Elle est de Thorne. 'Si vous lisez ceci, je suis mort. J'ai construit une machine pour voir le futur, mais elle ne m'a montré que ma propre mort. Je ne peux pas l'arrêter. Mais je peux sauver la ville. L'appareil est caché dans les égouts sous le vieux marché. Détruisez-le.'",
        choices: {
          'choice-17': { text: "Obéir à Thorne et aller aux égouts pour détruire l'appareil" },
          'choice-18': { text: "Garder l'appareil pour vous-même ; imaginez le pouvoir" },
        },
      },
      'node-10': {
        title: "La Salle des Serveurs",
        narration: "Vous piratez le terminal de la Mairie. La bobine de mémoire révèle une vidéo de Thorne rencontrant le Maire. Le Maire exigeait l'immortalité. Thorne a refusé, disant que le coût était trop élevé : 'Pour qu'un vive éternellement, un millier doit perdre du temps.' Le Maire a menacé la famille de Thorne. L'enregistrement se termine avec Thorne cachant un composant vital dans le Musée.",
        choices: {
          'choice-19': { text: "Aller au Musée pour récupérer le composant" },
          'choice-20': { text: "Faire chanter le Maire avec les images" },
        },
      },
      'node-11': {
        title: "La Tour de l'Horloge",
        narration: "Vous grimpez dans la tour. Les engrenages sont assourdissants. Au sommet, attaché au mécanisme principal, se trouve un appareil bourdonnant. Il ralentit le temps pour toute la ville, siphonnant des secondes de la vie de chacun pour les stocker dans une batterie. C'est ce qu'est 'l'immortalité' de Thorne. C'est du vampirisme temporel. Vous voyez une silhouette sombre s'approcher de vous sur la passerelle. C'est l'homme de main du Maire.",
        choices: {
          'choice-21': { text: "Combattre l'homme de main sur la passerelle précaire" },
          'choice-22': { text: "Saboter le mécanisme de l'horloge pour provoquer le chaos" },
        },
      },
      'node-12': {
        title: "Feu et Glace",
        narration: "Vous sortez de l'ombre, pistolet levé. Elara sourit froidement. 'Quel héroïsme.' Elle tire sur un baril de pétrole, provoquant une explosion. Le gang des Engrenages attaque. Vous êtes en infériorité numérique. Le feu se propage rapidement, menaçant de consumer les preuves et vous avec.",
        choices: {
          'choice-23': { text: "Tirer sur le système de gicleurs pour éteindre le feu et créer le chaos" },
          'choice-24': { text: "Poursuivre Elara à travers les flammes" },
        },
      },
      'node-13': {
        title: "Les Égouts",
        narration: "Les égouts sont un labyrinthe. Vous trouvez la chambre secrète de Thorne. La machine est là, un énorme orbe de cuivre et de verre, pulsant d'une lumière bleue. Elle est belle et terrifiante. Vous levez votre marteau pour la briser, mais une voix vous arrête. 'Ne fais pas ça.' C'est Thorne. Ou un fantôme de lui, projeté par la machine. 'Je l'ai résolu', dit-il. 'Je peux ramener les morts.'",
        choices: {
          'choice-25': { text: "Croire le fantôme et essayer d'utiliser la machine" },
          'choice-26': { text: "Ignorer la projection et briser le noyau de verre" },
        },
      },
      'node-14': {
        title: "Le Musée",
        narration: "Le musée est sombre. Vous trouvez l'exposition sur l'Égypte ancienne où Thorne a caché le composant. C'est une lentille de focalisation. Au moment où vous la prenez, les lumières s'allument. Le Maire est là avec une escouade de gardes d'élite. 'Donnez-moi la lentille', dit-il doucement. 'Et vous pourrez vivre comme un roi.'",
        choices: {
          'choice-27': { text: "Refuser et se battre contre les gardes" },
          'choice-28': { text: "Faire semblant d'accepter, puis utiliser la lentille pour aveugler les gardes" },
        },
      },
      'node-15': {
        title: "Le Combat sur la Passerelle",
        narration: "Vous vous battez avec l'homme de main. Il est fort, mais lent. Vous parvenez à le faire basculer par-dessus la rambarde. Il tombe dans les engrenages en contrebas avec un cri écœurant. La machine bourdonne plus fort. Elle est instable. Si vous ne l'arrêtez pas, elle pourrait déchirer un trou dans le temps lui-même, effaçant la ville de l'existence.",
        choices: {
          'choice-29': { text: "Essayer de désactiver la machine en toute sécurité" },
          'choice-30': { text: "Détruire les engrenages de l'horloge pour forcer un arrêt d'urgence" },
        },
      },
      'node-16': {
        title: "Le Gala",
        narration: "Vous avez échappé à l'incendie, mais Elara s'est enfuie au Gala annuel du Maire. Vous arrivez, couvert de suie, votre trench-coat cachant vos armes. La salle de bal est remplie de l'élite de la ville. Elara murmure à l'oreille du Maire. Ils trinquent au 'progrès'. Vous voyez un lustre massif directement au-dessus d'eux.",
        choices: {
          'choice-31': { text: "Tirer sur la chaîne du lustre pour le faire tomber sur eux" },
          'choice-32': { text: "Monter sur scène et exposer leurs crimes devant tout le monde" },
        },
      },
      'node-17': {
        title: "La Tentation",
        narration: "Vous hésitez. Ramener les morts ? Vous pensez à tous ceux que vous avez perdus. Votre partenaire, votre femme, votre ancienne vie. Vous touchez la machine. La lumière bleue rampe le long de votre bras. Elle est froide. Vous entendez des murmures dans votre tête. Ce n'est pas Thorne. C'est la machine elle-même, sensible et affamée. Elle veut un hôte.",
        choices: {
          'choice-33': { text: "S'arracher à son emprise et tirer sur la machine" },
          'choice-34': { text: "Laisser la machine fusionner avec vous pour obtenir un pouvoir ultime" },
        },
      },
      'node-21': {
        title: "Le Toit",
        narration: "Vous êtes acculé sur le toit du musée. Le Maire a votre pistolet. Il rit. 'Tu es un fossile, détective. Le futur m'appartient.' Soudain, l'Inspecteur Graves défonce la porte. Il a vu les preuves que vous avez laissées. Une fusillade éclate. Dans la confusion, le Maire trébuche près du bord. Il tient la lentille. Si elle tombe, elle se brise, et ses plans sont ruinés.",
        choices: {
          'choice-33': { text: "Le laisser tomber" },
          'choice-34': { text: "Essayer de le sauver pour qu'il soit jugé" },
        },
      },
      'node-18': {
        title: "Les Retombées",
        narration: "Le danger immédiat est passé. L'appareil est détruit ou parti. Mais la conspiration demeure. Le Maire est toujours dans la salle de bal, ignorant que vous avez éliminé son fournisseur. Vous avez le grand livre/les preuves. Vous retournez au Gala, meurtri et ensanglanté. La musique s'arrête. Tous les yeux sont tournés vers vous. Vous pouvez marcher directement vers le Maire et l'arrêter devant l'élite de la ville, ou vous pouvez vous éclipser et donner les preuves anonymement à la presse, craignant que les juges corrompus ne le laissent simplement partir.",
        choices: {
          'choice-35': { text: "Confronter le Maire publiquement et l'arrêter sur scène" },
          'choice-36': { text: "Faire fuiter les preuves aux journaux et disparaître" },
        },
      },
      'node-19': {
        title: "Le Chemin Sombre",
        narration: "Vous avez l'appareil. Vous sentez son bourdonnement contre vos côtes. Vous quittez la scène avant que la police ne sécurise le toit. Vous êtes un fugitif maintenant, mais immortel. L'appareil a besoin de carburant, cependant. Il se nourrit de vie. Vous réalisez que la faim de la machine est maintenant liée à votre propre rythme cardiaque. Vous rencontrez Elara dans la ruelle. Elle vous regarde avec méfiance. 'Où est-il ?' demande-t-elle. 'L'as-tu détruit ?' Vous pouvez la tuer pour garder votre secret et donner à la machine son premier repas, ou vous pouvez confesser votre faiblesse et lui demander de l'aide pour le détruire avant qu'il ne vous corrompe complètement.",
        choices: {
          'choice-37': { text: "Éliminer Elara pour protéger l'appareil et votre secret" },
          'choice-38': { text: "Donner l'appareil à Elara et la supplier de le détruire" },
        },
      },
      'node-20': {
        title: "Le Sacrifice",
        narration: "Vous placez l'appareil dans le coffre-fort, mais la porte ne se verrouille pas. Le mécanisme de verrouillage est cassé. L'énergie monte. Quelqu'un doit maintenir la porte fermée manuellement pendant que l'explosion se produit à l'intérieur. Le plomb protégera la ville, mais les radiations inonderont la personne tenant la poignée. Vous regardez l'Inspecteur Graves, qui vient d'arriver. Il est corrompu, mais il a une famille. Vous êtes le héros. Vous pouvez ordonner à Graves de la tenir sous la menace d'une arme, le rachetant par la mort, ou vous pouvez la tenir vous-même, faisant le sacrifice ultime pour une ville qui connaît à peine votre nom.",
        choices: {
          'choice-39': { text: "Forcer l'Inspecteur Graves à tenir la porte et se racheter" },
          'choice-40': { text: "Tenir la porte vous-même et accepter votre sort" },
        },
      },
      'node-22': {
        title: "Fin : La Ville Juste",
        narration: "Les gros titres du lendemain hurlent l'arrestation du Maire. 'Un détective expose un réseau de vol de temps !' Vous êtes assis dans votre bureau, buvant un whisky bon marché. L'appareil est parti, détruit de votre main (ou celle d'Elara). La ville est toujours sale, toujours pluvieuse, mais les engrenages tournent un peu plus juste aujourd'hui. Vous n'êtes pas devenu riche, et vous ne vivrez pas éternellement. Mais quand vous regardez dans le miroir, vous ne voyez pas un monstre. Vous voyez un homme. Et dans cette ville de machines, c'est la chose la plus rare de toutes. Affaire classée.",
        choices: {},
      },
      'node-23': {
        title: "Fin : Le Marcheur de l'Ombre",
        narration: "Vous disparaissez dans le brouillard. Les preuves ont été envoyées à tous les journaux du pays. Le gouvernement s'est effondré en une semaine. Vous regardez depuis les ombres alors que la ville brûle et se reconstruit. Vous êtes une légende maintenant, une histoire de fantôme que les criminels se racontent. Vous avez survécu, mais vous êtes seul. Vous avez réalisé que la loi ne pouvait pas gérer la vérité, alors vous êtes devenu quelque chose en dehors de la loi. Vous inclinez votre chapeau vers la nouvelle aube et vous éloignez. Il y aura toujours un autre mystère.",
        choices: {},
      },
      'node-24': {
        title: "Fin : Le Martyr",
        narration: "L'explosion a été contenue. La ville a été sauvée. Ils ont trouvé votre corps appuyé contre le coffre-fort, brillant d'une faible lumière déclinante. Ils ont construit une statue de vous sur la place centrale. Elle est en bronze et se dresse haute contre la pluie. Vous avez tout donné pour que le temps s'écoule naturellement pour tous les autres. Les gens déposent des fleurs à vos pieds. Vous êtes parti, mais dans la mémoire de la ville, vous êtes immortel d'une manière que Thorne n'aurait jamais pu atteindre.",
        choices: {},
      },
      'node-25': {
        title: "Fin : Le Seigneur du Temps",
        narration: "Vous enjambez le corps d'Elara. L'appareil est à vous. Vous tournez le cadran en arrière. Vous regardez la pluie remonter des flaques vers le ciel. Vous regardez la balle retourner dans le pistolet. Vous êtes le maître de cette ville maintenant. Vous pouvez réécrire chaque erreur, gagner chaque pari, faire taire chaque critique. Vous vivez cent ans, puis mille. Mais lentement, vous oubliez pourquoi vous le vouliez. Vous oubliez votre nom. Vous devenez le Dieu Horloger, parfait et froid, assis sur un trône de secondes volées, régnant sur un royaume de poussière.",
        choices: {},
      },
    },
  },
  pt: {
    title: "O Relógio do Alquimista",
    description: "Um mistério noir de alto risco numa cidade movida a vapor. Você deve atravessar uma profunda teia de conspiração, resolvendo o assassinato de um homem que alegava ter inventado a imortalidade.",
    author: "Elena Vance",
    nodes: {
      'node-1': {
        title: "O Laboratório Silencioso",
        narration: "A chuva tamborila na claraboia do laboratório do Doutor Aris Thorne, mantendo o ritmo com a dor de cabeça que lateja atrás dos seus olhos. Thorne está morto. O alquimista mais controverso da cidade está debruçado sobre a sua secretária de mogno, com uma seringa de latão espetada no pescoço. A sala cheira a ozono e amêndoas amargas. O Inspetor Graves está lá fora a segurar a imprensa, dando-lhe exatamente dez minutos para encontrar algo que a polícia não entenda. O laboratório está atafulhado: cubas borbulhantes à sua esquerda e uma parede coberta de equações frenéticas a giz à sua direita. Você deve escolher o seu ponto de partida com cuidado; o assassino ainda pode estar no edifício, ou pior, pode ter deixado uma armadilha.",
        choices: {
          'choice-1': { text: "Examinar as equações a giz em busca de uma mensagem oculta" },
          'choice-2': { text: "Inspecionar o corpo e a estranha seringa mais de perto" },
        },
      },
      'node-2': {
        title: "A Cifra de Giz",
        narration: "Você semicerra os olhos para o quadro negro. No meio do caos de fórmulas alquímicas, nota um conjunto de coordenadas sublinhado à pressa. Apontam para as Docas, especificamente para o Armazém 42. Mas, ao inclinar-se, aciona um fio de tropeço. Um frasco de gás verde parte-se. Você tosse, os seus pulmões ardem. Recua a cambalear, agarrando um pedaço de papel da secretária enquanto foge da sala para apanhar ar. É uma página de um livro-razão, listando pagamentos massivos de um sindicato conhecido como 'As Engrenagens'.",
        choices: {
          'choice-3': { text: "Correr para as Docas para investigar o Armazém 42" },
          'choice-4': { text: "Rastrear os pagamentos do sindicato 'As Engrenagens' no submundo" },
        },
      },
      'node-3': {
        title: "A Seringa de Latão",
        narration: "Você puxa a seringa. Não está cheia de veneno, mas de algo que brilha como ouro líquido. Ao examiná-la, nota uma inscrição minúscula na agulha: 'Propriedade do Instituto Real'. Thorne estava a roubar os seus próprios colegas. No bolso dele, encontra um relógio de bolso que não faz tique-taque; os ponteiros giram para trás. De repente, ouve passos pesados atrás de si. É o autómato de segurança de Thorne, e os seus olhos brilham com um vermelho hostil.",
        choices: {
          'choice-5': { text: "Usar a seringa como arma improvisada contra o autómato" },
          'choice-6': { text: "Desviar-se e tentar desativar o autómato usando os seus controlos manuais" },
        },
      },
      'node-4': {
        title: "Armazém 42",
        narration: "As Docas cheiram a sal e peixe podre. O Armazém 42 está escuro, mas você vê luz a filtrar-se pelas fendas. Lá dentro, membros do gangue das Engrenagens estão a carregar caixotes marcados com um símbolo de ampulheta. Estão a contrabandear tecnologia temporal. Você vê o líder deles, um homem com um braço mecânico, a discutir com uma mulher vestida de seda vermelha. É Lady Elara, a principal benfeitora da cidade. Estão a discutir sobre uma entrega falhada.",
        choices: {
          'choice-7': { text: "Ouvir a conversa deles das sombras" },
          'choice-8': { text: "Criar uma distração para roubar um dos caixotes" },
        },
      },
      'node-5': {
        title: "O Covil das Engrenagens",
        narration: "O bar subterrâneo é fumarento e barulhento. Você mostra a página do livro-razão ao barman. Ele empalidece e aponta para uma cabine nas traseiras. Lá, um informador nervoso diz-lhe que Thorne estava a pagar por proteção, mas parou na semana passada. 'Ele disse que já não precisava de nós', sussurra o informador. 'Disse que tinha encontrado uma forma de desfazer os seus erros.' O informador desliza-lhe uma chave marcada 'Estação Central, Cacifo 9' antes de fugir.",
        choices: {
          'choice-9': { text: "Ir à Estação Central e abrir o cacifo" },
          'choice-10': { text: "Pressionar o informador para obter mais detalhes" },
        },
      },
      'node-6': {
        title: "Desmantelamento",
        narration: "Você espeta a seringa nos fios expostos do autómato. O líquido dourado chia e a máquina congela, depois desmorona-se. O impacto parte a seringa, mas você recupera o núcleo de dados do autómato. É uma bobina de memória. Precisa de um terminal para a ler. O único suficientemente próximo e potente está na Câmara Municipal, mas invadi-la é arriscado.",
        choices: {
          'choice-11': { text: "Invadir a sala de servidores da Câmara Municipal" },
          'choice-12': { text: "Levar o núcleo a um contacto hacker no Setor Industrial" },
        },
      },
      'node-7': {
        title: "Substituição Manual",
        narration: "Você rola para baixo do braço oscilante do autómato e abre o seu painel de acesso. Os seus dedos voam sobre as engrenagens, mas você é demasiado lento. Ele atira-o através da sala. Você embate numa prateleira, ferido. Na confusão, encontra uma planta escondida. Mostra um dispositivo chamado 'A Âncora de Cronos', localizado na torre do relógio da cidade. O autómato prepara-se para carregar novamente.",
        choices: {
          'choice-13': { text: "Fugir pela janela e dirigir-se à Torre do Relógio" },
          'choice-14': { text: "Disparar contra os pistões das pernas do autómato para o atrasar e escapar" },
        },
      },
      'node-8': {
        title: "O Segredo de Lady Elara",
        narration: "Você ouve Elara dizer: 'Thorne estava a ficar ganancioso. Queria manter o dispositivo para si.' O homem do braço mecânico rosna: 'E agora o Inspetor Graves está a farejar por todo o lado.' Elara ri-se. 'Graves está no meu bolso. Preocupa-te com o detetive privado.' Ela saca de uma pistola dourada. 'Queimem este lugar. Não deixem rasto.' Eles começam a despejar gasolina.",
        choices: {
          'choice-15': { text: "Confrontar Elara antes que ela possa acender o fogo" },
          'choice-16': { text: "Escapar silenciosamente e reportar a Graves (se ele for de confiança)" },
        },
      },
      'node-9': {
        title: "O Cacifo",
        narration: "Na estação, o cacifo 9 contém um único objeto: uma carta selada endereçada a si. É de Thorne. 'Se estás a ler isto, estou morto. Construí uma máquina para ver o futuro, mas só me mostrou a minha própria morte. Não posso impedi-la. Mas posso salvar a cidade. O dispositivo está escondido nos esgotos sob o velho mercado. Destrói-o.'",
        choices: {
          'choice-17': { text: "Obedecer a Thorne e ir aos esgotos destruir o dispositivo" },
          'choice-18': { text: "Guardar o dispositivo para si; imagine o poder" },
        },
      },
      'node-10': {
        title: "A Sala de Servidores",
        narration: "Você invade o terminal da Câmara Municipal. A bobina de memória revela um vídeo de Thorne a encontrar-se com o Presidente da Câmara. O Presidente exigia a imortalidade. Thorne recusou, dizendo que o custo era demasiado alto: 'Para um viver para sempre, mil têm de perder tempo.' O Presidente ameaçou a família de Thorne. A gravação termina com Thorne a esconder um componente vital no Museu.",
        choices: {
          'choice-19': { text: "Ir ao Museu recuperar o componente" },
          'choice-20': { text: "Chantagear o Presidente com as imagens" },
        },
      },
      'node-11': {
        title: "A Torre do Relógio",
        narration: "Você sobe a torre. As engrenagens são ensurdecedoras. No topo, ligado ao mecanismo principal, está um dispositivo a zumbir. Está a abrandar o tempo para toda a cidade, sifonando segundos da vida de todos para armazenar numa bateria. É isto a 'imortalidade' de Thorne. É vampirismo temporal. Você vê uma figura sombria a aproximar-se no passadiço. É o capanga do Presidente.",
        choices: {
          'choice-21': { text: "Lutar contra o capanga no passadiço precário" },
          'choice-22': { text: "Sabotar o mecanismo do relógio para causar o caos" },
        },
      },
      'node-12': {
        title: "Fogo e Gelo",
        narration: "Você sai das sombras, arma em punho. Elara sorri friamente. 'Que heroico.' Ela dispara contra um barril de petróleo, causando uma explosão. O gangue das Engrenagens ataca. Você está em desvantagem numérica. O fogo espalha-se rapidamente, ameaçando consumir as provas e você também.",
        choices: {
          'choice-23': { text: "Disparar contra o sistema de aspersores para apagar o fogo e criar o caos" },
          'choice-24': { text: "Perseguir Elara através das chamas" },
        },
      },
      'node-13': {
        title: "Os Esgotos",
        narration: "Os esgotos são um labirinto. Você encontra a câmara secreta de Thorne. A máquina está lá, um enorme orbe de cobre e vidro, pulsando com uma luz azul. É bela e aterrorizante. Você levanta o seu martelo para a partir, mas uma voz impede-o. 'Não faças isso.' É Thorne. Ou um fantasma dele, projetado pela máquina. 'Eu resolvi', diz ele. 'Posso trazer os mortos de volta.'",
        choices: {
          'choice-25': { text: "Acreditar no fantasma e tentar usar a máquina" },
          'choice-26': { text: "Ignorar a projeção e partir o núcleo de vidro" },
        },
      },
      'node-14': {
        title: "O Museu",
        narration: "O museu está escuro. Você encontra a exposição do Egito Antigo onde Thorne escondeu o componente. É uma lente de focagem. No momento em que a pega, as luzes acendem-se. O Presidente está lá com um esquadrão de guardas de elite. 'Dá-me a lente', diz ele suavemente. 'E poderás viver como um rei.'",
        choices: {
          'choice-27': { text: "Recusar e lutar contra os guardas" },
          'choice-28': { text: "Fingir concordar, depois usar a lente para cegar os guardas" },
        },
      },
      'node-15': {
        title: "O Combate no Passadiço",
        narration: "Você luta com o capanga. Ele é forte, mas lento. Você consegue fazê-lo cair por cima do corrimão. Ele cai nas engrenagens em baixo com um grito repugnante. A máquina zumbe mais alto. Está instável. Se não a parar, ela pode rasgar um buraco no próprio tempo, apagando a cidade da existência.",
        choices: {
          'choice-29': { text: "Tentar desativar a máquina em segurança" },
          'choice-30': { text: "Destruir as engrenagens do relógio para forçar uma paragem de emergência" },
        },
      },
      'node-16': {
        title: "O Baile de Gala",
        narration: "Você escapou do incêndio, mas Elara fugiu para o Baile de Gala anual do Presidente. Você chega, coberto de fuligem, com o seu sobretudo a esconder as armas. O salão de baile está cheio da elite da cidade. Elara sussurra ao ouvido do Presidente. Eles brindam ao 'progresso'. Você vê um lustre maciço diretamente acima deles.",
        choices: {
          'choice-31': { text: "Disparar contra a corrente do lustre para o deixar cair sobre eles" },
          'choice-32': { text: "Subir ao palco e expor os crimes deles perante todos" },
        },
      },
      'node-17': {
        title: "A Tentação",
        narration: "Você hesita. Trazer os mortos de volta? Pensa em todos os que perdeu. O seu parceiro, a sua esposa, a sua vida antiga. Toca na máquina. A luz azul rasteja pelo seu braço. É fria. Ouve sussurros na sua cabeça. Não é Thorne. É a própria máquina, senciente e faminta. Ela quer um hospedeiro.",
        choices: {
          'choice-33': { text: "Libertar-se do seu aperto e disparar contra a máquina" },
          'choice-34': { text: "Deixar a máquina fundir-se consigo para obter o poder supremo" },
        },
      },
      'node-21': {
        title: "O Telhado",
        narration: "Você está encurralado no telhado do museu. O Presidente tem a sua arma. Ele ri-se. 'És um fóssil, detetive. O futuro pertence-me.' De repente, o Inspetor Graves arromba a porta. Ele viu as provas que você deixou. Um tiroteio irrompe. Na confusão, o Presidente tropeça perto da borda. Ele segura a lente. Se ela cair, parte-se, e os planos dele ficam arruinados.",
        choices: {
          'choice-33': { text: "Deixá-lo cair" },
          'choice-34': { text: "Tentar salvá-lo para que seja julgado" },
        },
      },
      'node-18': {
        title: "As Consequências",
        narration: "O perigo imediato passou. O dispositivo foi destruído ou desapareceu. Mas a conspiração permanece. O Presidente ainda está no salão de baile, sem saber que você eliminou o fornecedor dele. Você tem o livro-razão/as provas. Regressa ao Gala, ferido e ensanguentado. A música para. Todos os olhos estão postos em si. Você pode caminhar diretamente até ao Presidente e prendê-lo perante a elite da cidade, ou pode esgueirar-se e dar as provas anonimamente à imprensa, com medo que os juízes corruptos o deixem simplesmente ir.",
        choices: {
          'choice-35': { text: "Confrontar o Presidente publicamente e prendê-lo no palco" },
          'choice-36': { text: "Vazar as provas para os jornais e desaparecer" },
        },
      },
      'node-19': {
        title: "O Caminho Sombrio",
        narration: "Você tem o dispositivo. Sente o seu zumbido contra as costelas. Deixa a cena antes que a polícia assegure o telhado. Agora é um fugitivo, mas imortal. O dispositivo precisa de combustível, no entanto. Alimenta-se de vida. Você percebe que a fome da máquina está agora ligada ao seu próprio batimento cardíaco. Encontra Elara na ruela. Ela olha para si com desconfiança. 'Onde está?', pergunta ela. 'Destruíste-o?' Você pode matá-la para manter o seu segredo e dar à máquina a sua primeira refeição, ou pode confessar a sua fraqueza e pedir-lhe ajuda para o destruir antes que ele o corrompa completamente.",
        choices: {
          'choice-37': { text: "Eliminar Elara para proteger o dispositivo e o seu segredo" },
          'choice-38': { text: "Dar o dispositivo a Elara e implorar-lhe que o destrua" },
        },
      },
      'node-20': {
        title: "O Sacrifício",
        narration: "Você coloca o dispositivo no cofre, mas a porta não tranca. O mecanismo de fecho está partido. A energia aumenta. Alguém tem de segurar a porta manualmente enquanto a explosão ocorre lá dentro. O chumbo protegerá a cidade, mas a radiação inundará a pessoa que segura a pega. Você olha para o Inspetor Graves, que acabou de chegar. Ele é corrupto, mas tem família. Você é o herói. Pode ordenar a Graves que a segure sob a mira de uma arma, redimindo-o através da morte, ou pode segurá-la você mesmo, fazendo o sacrifício final por uma cidade que mal sabe o seu nome.",
        choices: {
          'choice-39': { text: "Forçar o Inspetor Graves a segurar a porta e redimir-se" },
          'choice-40': { text: "Segurar a porta você mesmo e aceitar o seu destino" },
        },
      },
      'node-22': {
        title: "Fim: A Cidade Justa",
        narration: "As manchetes do dia seguinte gritam a prisão do Presidente. 'Detetive expõe anel de roubo de tempo!' Você está sentado no seu escritório, a beber um whisky barato. O dispositivo desapareceu, destruído pela sua mão (ou pela de Elara). A cidade continua suja, continua chuvosa, mas as engrenagens rodam um pouco mais justas hoje. Não ficou rico, e não viverá para sempre. Mas quando se olha ao espelho, não vê um monstro. Vê um homem. E nesta cidade de máquinas, essa é a coisa mais rara de todas. Caso encerrado.",
        choices: {},
      },
      'node-23': {
        title: "Fim: O Caminhante das Sombras",
        narration: "Você desaparece no nevoeiro. As provas foram enviadas para todos os jornais do país. O governo colapsou numa semana. Você observa das sombras enquanto a cidade arde e se reconstrói. Agora é uma lenda, uma história de fantasmas que os criminosos contam uns aos outros. Sobreviveu, mas está sozinho. Percebeu que a lei não conseguia lidar com a verdade, por isso tornou-se algo fora da lei. Inclina o chapéu para o novo amanhecer e afasta-se. Haverá sempre outro mistério.",
        choices: {},
      },
      'node-24': {
        title: "Fim: O Mártir",
        narration: "A explosão foi contida. A cidade foi salva. Encontraram o seu corpo encostado ao cofre, brilhando com uma luz fraca e desvanecida. Construíram uma estátua sua na praça central. É de bronze e ergue-se alta contra a chuva. Você deu tudo para que o tempo fluísse naturalmente para todos os outros. As pessoas depositam flores aos seus pés. Partiu, mas na memória da cidade, é imortal de uma forma que Thorne nunca poderia ter alcançado.",
        choices: {},
      },
      'node-25': {
        title: "Fim: O Senhor do Tempo",
        narration: "Você passa por cima do corpo de Elara. O dispositivo é seu. Roda o mostrador para trás. Vê a chuva subir das poças para o céu. Vê a bala voar de volta para a arma. Agora é o mestre desta cidade. Pode reescrever cada erro, ganhar cada aposta, silenciar cada crítico. Vive cem anos, depois mil. Mas lentamente, esquece-se de porque o queria. Esquece-se do seu nome. Torna-se o Deus Relojoeiro, perfeito e frio, sentado num trono de segundos roubados, governando um reino de pó.",
        choices: {},
      },
    },
  },
  ja: {
    title: "錬金術師の懐中時計",
    description: "蒸気機関で動く都市を舞台にした、危険なノワール・ミステリー。あなたは不老不死を発明したと主張した男の殺害事件を解決し、深い陰謀の網をくぐり抜けなければなりません。",
    author: "エレナ・ヴァンス",
    nodes: {
      'node-1': {
        title: "静かな研究室",
        narration: "雨がアリス・ソーン博士の研究室の天窓を叩き、目の奥で脈打つ頭痛とリズムを刻んでいる。ソーンは死んだ。都市で最も物議を醸した錬金術師は、マホガニーの机に突っ伏し、首には真鍮の注射器が突き刺さっている。部屋はオゾンと苦いアーモンドの匂いがする。グレイブス警部は外で報道陣を抑えており、警察が理解できない何かを見つけるために正確に10分間をあなたに与えた。研究室は散らかっている。左側には泡立つ大桶、右側の壁には狂気じみたチョークの方程式がびっしりと書かれている。出発点を慎重に選ばなければならない。犯人はまだ建物の中にいるかもしれないし、さらに悪いことに、罠を残しているかもしれない。",
        choices: {
          'choice-1': { text: "隠されたメッセージがないか、チョークの方程式を調べる" },
          'choice-2': { text: "死体と奇妙な注射器を詳しく調べる" },
        },
      },
      'node-2': {
        title: "チョークの暗号",
        narration: "あなたは黒板に目を凝らす。錬金術の公式の混沌の中に、急いで下線が引かれた一連の座標に気づく。それらはドック、具体的には倉庫42を指している。しかし、身を乗り出した瞬間、トリップワイヤーを作動させてしまう。緑色のガスの小瓶が割れる。あなたは咳き込み、肺が焼けるようだ。よろめきながら後退し、空気を求めて部屋から逃げ出す際に机の上の紙切れを掴む。それは台帳の1ページで、「歯車団」として知られるシンジケートからの多額の支払いが記載されている。",
        choices: {
          'choice-3': { text: "倉庫42を調査するためにドックへ急ぐ" },
          'choice-4': { text: "裏社会で「歯車団」シンジケートの支払いを追跡する" },
        },
      },
      'node-3': {
        title: "真鍮の注射器",
        narration: "あなたは注射器を引き抜く。中には毒ではなく、液体の金のように輝く何かが入っている。調べてみると、針に微細な刻印があることに気づく。「王立研究所の所有物」。ソーンは自分の同僚から盗んでいたのだ。彼のポケットから、時を刻まない懐中時計を見つける。針は逆回転している。突然、背後で重い足音が聞こえる。ソーンの警備オートマトンだ。その目は敵意に満ちた赤色に光っている。",
        choices: {
          'choice-5': { text: "オートマトンに対して即席の武器として注射器を使う" },
          'choice-6': { text: "身をかわし、手動制御を使ってオートマトンを無効化しようとする" },
        },
      },
      'node-4': {
        title: "倉庫42",
        narration: "ドックは塩と腐った魚の臭いがする。倉庫42は暗いが、隙間から光が漏れているのが見える。中では、歯車団のメンバーが砂時計のシンボルが付いた木箱を積み込んでいる。彼らは時間技術を密輸しているのだ。機械の腕を持つリーダーの男が、赤いシルクを着た女性と議論しているのが見える。レディ・エララ、都市の主要な慈善家だ。彼らは失敗した配達について言い争っている。",
        choices: {
          'choice-7': { text: "物陰から彼らの会話を聞く" },
          'choice-8': { text: "木箱の1つを盗むために陽動を行う" },
        },
      },
      'node-5': {
        title: "歯車団の隠れ家",
        narration: "地下のバーは煙たく、騒々しい。あなたはバーテンダーに台帳のページを見せる。彼は青ざめ、奥のブースを指差す。そこで、神経質な情報屋が、ソーンは保護料を払っていたが先週やめたと話す。「彼はもう我々は必要ないと言ったんだ」と情報屋はささやく。「彼は間違いを帳消しにする方法を見つけたと言っていた」。情報屋は逃げる前に「中央駅、ロッカー9」と書かれた鍵を滑らせる。",
        choices: {
          'choice-9': { text: "中央駅に行き、ロッカーを開ける" },
          'choice-10': { text: "詳細を聞き出すために情報屋に圧力をかける" },
        },
      },
      'node-6': {
        title: "解体",
        narration: "あなたは注射器をオートマトンの露出した配線に突き刺す。金色の液体が音を立て、機械は凍りつき、そして崩れ落ちる。衝撃で注射器は砕けるが、オートマトンのデータコアを回収する。メモリコイルだ。読み取るにはターミナルが必要だ。十分近くにあり強力な唯一のものは市庁舎にあるが、侵入するのは危険だ。",
        choices: {
          'choice-11': { text: "市庁舎のサーバールームに侵入する" },
          'choice-12': { text: "工業地区のハッカーの連絡先にコアを持っていく" },
        },
      },
      'node-7': {
        title: "手動オーバーライド",
        narration: "あなたはオートマトンのスイングアームの下を転がり、アクセスパネルを開ける。指が歯車の上を飛ぶように動くが、遅すぎる。オートマトンはあなたを部屋の向こうに投げ飛ばす。あなたは棚に激突し、打撲を負う。混乱の中、隠された設計図を見つける。そこには都市の時計塔にある「クロノスの錨」と呼ばれる装置が示されている。オートマトンは再び突撃の準備をしている。",
        choices: {
          'choice-13': { text: "窓から逃げて時計塔へ向かう" },
          'choice-14': { text: "オートマトンの脚のピストンを撃って遅らせ、脱出する" },
        },
      },
      'node-8': {
        title: "レディ・エララの秘密",
        narration: "エララが言うのが聞こえる。「ソーンは欲張りになったわ。装置を独り占めしようとしたのよ」。機械の腕の男がうなる。「そして今、グレイブス警部が嗅ぎ回っている」。エララは笑う。「グレイブスは私の手の中よ。心配なのは私立探偵の方だわ」。彼女は金色の拳銃を取り出す。「ここを焼き払え。痕跡を残すな」。彼らはガソリンを撒き始める。",
        choices: {
          'choice-15': { text: "火をつける前にエララと対峙する" },
          'choice-16': { text: "静かに脱出し、グレイブスに報告する（彼が信頼できるなら）" },
        },
      },
      'node-9': {
        title: "ロッカー",
        narration: "駅のロッカー9には、あなた宛ての封印された手紙が1つだけ入っている。ソーンからだ。「これを読んでいるなら、私は死んでいる。未来を見る機械を作ったが、それは私自身の死しか見せてくれなかった。止めることはできない。だが、都市を救うことはできる。装置は旧市場の地下の下水道に隠されている。それを破壊してくれ」。",
        choices: {
          'choice-17': { text: "ソーンに従い、下水道へ行って装置を破壊する" },
          'choice-18': { text: "装置を自分のものにする。その力を想像してみろ" },
        },
      },
      'node-10': {
        title: "サーバールーム",
        narration: "あなたは市庁舎のターミナルをハッキングする。メモリコイルは、ソーンが市長と会っている映像を明らかにする。市長は不老不死を要求していた。ソーンは、代償が高すぎると言って拒否した。「一人が永遠に生きるためには、千人が時間を失わなければならない」。市長はソーンの家族を脅した。録画は、ソーンが重要な部品を博物館に隠すところで終わっている。",
        choices: {
          'choice-19': { text: "部品を回収するために博物館へ行く" },
          'choice-20': { text: "映像を使って市長を脅迫する" },
        },
      },
      'node-11': {
        title: "時計塔",
        narration: "あなたは塔を登る。歯車の音が耳をつんざくようだ。頂上には、主機構に取り付けられた唸る装置がある。それは都市全体の時間を遅らせ、バッテリーに蓄えるために全員の人生から秒を吸い取っている。これがソーンの「不老不死」だ。時間的吸血行為だ。キャットウォークで暗い人影が近づいてくるのが見える。市長の用心棒だ。",
        choices: {
          'choice-21': { text: "不安定なキャットウォークで用心棒と戦う" },
          'choice-22': { text: "時計の機構を妨害して混乱を引き起こす" },
        },
      },
      'node-12': {
        title: "炎と氷",
        narration: "あなたは影から踏み出し、銃を構える。エララは冷ややかに微笑む。「なんて英雄的ね」。彼女は石油の樽を撃ち、爆発を引き起こす。歯車団が攻撃してくる。多勢に無勢だ。火は急速に広がり、証拠とあなたを飲み込もうとしている。",
        choices: {
          'choice-23': { text: "スプリンクラーシステムを撃って消火し、混乱を作り出す" },
          'choice-24': { text: "炎の中を追いかけてエララを追う" },
        },
      },
      'node-13': {
        title: "下水道",
        narration: "下水道は迷路だ。あなたはソーンの秘密の部屋を見つける。機械はそこにあり、銅とガラスの巨大な球体で、青い光を脈打たせている。美しく、そして恐ろしい。あなたはそれを壊すためにハンマーを振り上げるが、声があなたを止める。「やめろ」。ソーンだ。あるいは機械が投影した彼の幽霊か。「解決したんだ」と彼は言う。「死者を生き返らせることができる」。",
        choices: {
          'choice-25': { text: "幽霊を信じて機械を使ってみる" },
          'choice-26': { text: "投影を無視してガラスのコアを砕く" },
        },
      },
      'node-14': {
        title: "博物館",
        narration: "博物館は暗い。あなたはソーンが部品を隠した古代エジプトの展示を見つける。それは集光レンズだ。それを手に取った瞬間、明かりがつく。市長が精鋭の警備隊と共にそこにいる。「レンズを渡せ」と彼は静かに言う。「そうすれば王のように暮らせるぞ」。",
        choices: {
          'choice-27': { text: "拒否して警備員と戦う" },
          'choice-28': { text: "同意するふりをして、レンズを使って警備員の目をくらませる" },
        },
      },
      'node-15': {
        title: "キャットウォークの戦い",
        narration: "あなたは用心棒と格闘する。彼は強いが、遅い。あなたは彼を手すりの向こうに突き落とすことに成功する。彼は胸が悪くなるような叫び声を上げて下の歯車に落ちていく。機械の唸りが大きくなる。不安定だ。止めなければ、時間そのものに穴を開け、都市を存在から消し去ってしまうかもしれない。",
        choices: {
          'choice-29': { text: "安全に機械を無効化しようとする" },
          'choice-30': { text: "緊急停止を強制するために時計の歯車を破壊する" },
        },
      },
      'node-16': {
        title: "ガラ",
        narration: "あなたは火事から逃れたが、エララは市長の年次ガラへ逃げた。あなたは煤まみれで到着し、トレンチコートで武器を隠している。舞踏室は都市のエリートでいっぱいだ。エララが市長の耳にささやく。彼らは「進歩」に乾杯する。あなたは彼らの真上に巨大なシャンデリアがあるのを見る。",
        choices: {
          'choice-31': { text: "シャンデリアの鎖を撃って彼らの上に落とす" },
          'choice-32': { text: "ステージに上がり、全員の前で彼らの犯罪を暴露する" },
        },
      },
      'node-17': {
        title: "誘惑",
        narration: "あなたは躊躇する。死者を連れ戻す？あなたは失ったすべての人々のことを考える。相棒、妻、かつての生活。あなたは機械に触れる。青い光が腕を這い上がってくる。冷たい。頭の中でささやき声が聞こえる。ソーンではない。機械そのものだ。知覚を持ち、飢えている。それは宿主を求めている。",
        choices: {
          'choice-33': { text: "支配を振りほどき、機械を撃つ" },
          'choice-34': { text: "究極の力を得るために機械と融合する" },
        },
      },
      'node-21': {
        title: "屋上",
        narration: "あなたは博物館の屋上で追い詰められる。市長はあなたの銃を持っている。彼は笑う。「君は化石だ、探偵さん。未来は私のものだ」。突然、グレイブス警部がドアを蹴破る。彼はあなたが残した証拠を見たのだ。銃撃戦が始まる。混乱の中、市長は端の近くでつまずく。彼はレンズを持っている。落ちれば砕け、彼の計画は台無しになる。",
        choices: {
          'choice-33': { text: "彼を落とさせる" },
          'choice-34': { text: "裁判を受けさせるために彼を救おうとする" },
        },
      },
      'node-18': {
        title: "余波",
        narration: "差し迫った危険は去った。装置は破壊されたか、なくなった。しかし陰謀は残っている。市長はまだ舞踏室におり、あなたが彼の供給者を排除したことを知らない。あなたは台帳/証拠を持っている。あなたは傷つき、血まみれでガラに戻る。音楽が止まる。全員の目があなたに向けられる。市長に真っ直ぐ歩み寄って都市のエリートの前で逮捕することもできるし、腐敗した裁判官が彼をただ釈放することを恐れて、こっそりと立ち去り、匿名で証拠を報道機関に渡すこともできる。",
        choices: {
          'choice-35': { text: "公然と市長と対峙し、ステージ上で逮捕する" },
          'choice-36': { text: "証拠を新聞にリークして姿を消す" },
        },
      },
      'node-19': {
        title: "暗い道",
        narration: "あなたは装置を持っている。肋骨にその振動を感じる。警察が屋上を確保する前に現場を去る。あなたは今や逃亡者だが、不老不死だ。しかし、装置には燃料が必要だ。それは生命を糧にする。あなたは機械の飢えが今や自分の心拍と結びついていることに気づく。路地でエララに会う。彼女は疑わしげにあなたを見る。「どこにあるの？」と彼女は尋ねる。「破壊したの？」秘密を守り、機械に最初の食事を与えるために彼女を殺すこともできるし、弱さを告白して、完全に堕落させられる前に破壊するのを手伝ってくれと頼むこともできる。",
        choices: {
          'choice-37': { text: "装置と秘密を守るためにエララを排除する" },
          'choice-38': { text: "装置をエララに渡し、破壊するように懇願する" },
        },
      },
      'node-20': {
        title: "犠牲",
        narration: "あなたは装置を金庫に入れるが、ドアがロックされない。ロック機構が壊れている。エネルギーが高まる。内部で爆発が起こる間、誰かが手動でドアを押さえていなければならない。鉛が都市を守るが、放射線はハンドルを握っている人間に浴びせられる。あなたは到着したばかりのグレイブス警部を見る。彼は腐敗しているが、家族がいる。あなたは英雄だ。銃を突きつけてグレイブスに持たせ、死によって償わせることもできるし、自分で持って、あなたの名前をほとんど知らない都市のために究極の犠牲を払うこともできる。",
        choices: {
          'choice-39': { text: "グレイブス警部にドアを持たせ、償わせる" },
          'choice-40': { text: "自分でドアを持ち、運命を受け入れる" },
        },
      },
      'node-22': {
        title: "結末：正義の都市",
        narration: "翌日の見出しは市長の逮捕を叫んでいる。「探偵が時間泥棒リングを摘発！」あなたはオフィスに座り、安物のウイスキーを飲んでいる。装置はなくなり、あなたの手（またはエララの手）によって破壊された。都市は相変わらず汚く、雨が多いが、今日の歯車は少しだけ公正に回っている。金持ちにはならなかったし、永遠に生きることもない。しかし鏡を見ると、怪物は見えない。人間が見える。そしてこの機械の都市では、それは最も稀なことだ。事件解決。",
        choices: {},
      },
      'node-23': {
        title: "結末：影を歩む者",
        narration: "あなたは霧の中に消える。証拠は国のすべての新聞に送られた。政府は一週間で崩壊した。あなたは影から都市が燃え、再建されるのを見守る。あなたは今や伝説であり、犯罪者たちが互いに語る怪談だ。生き残ったが、孤独だ。法は真実を扱えないと悟り、法の外側の存在になったのだ。あなたは新しい夜明けに帽子を傾け、歩き去る。常に別のミステリーがあるだろう。",
        choices: {},
      },
      'node-24': {
        title: "結末：殉教者",
        narration: "爆発は封じ込められた。都市は救われた。彼らは金庫に寄りかかったあなたの遺体を見つけた。かすかな、消えゆく光を放っていた。彼らは中央広場にあなたの像を建てた。ブロンズ製で、雨の中に高く立っている。あなたは他のみんなのために時間が自然に流れるよう、すべてを捧げた。人々はあなたの足元に花を供える。あなたは去ったが、都市の記憶の中で、ソーンが決して到達できなかった方法で不滅となった。",
        choices: {},
      },
      'node-25': {
        title: "結末：タイムロード",
        narration: "あなたはエララの死体をまたぐ。装置はあなたのものだ。ダイヤルを巻き戻す。雨が水たまりから空へと昇っていくのを見る。弾丸が銃に戻るのを見る。あなたは今やこの都市の支配者だ。あらゆる間違いを書き換え、あらゆる賭けに勝ち、あらゆる批評家を黙らせることができる。百年生き、そして千年生きる。しかし徐々に、なぜそれを望んだのか忘れていく。自分の名前を忘れる。あなたは時計仕掛けの神となり、完璧で冷酷で、盗まれた秒の玉座に座り、塵の王国を支配する。",
        choices: {},
      },
    },
  },
  zh: {
    title: "炼金术师的怀表",
    description: "发生在蒸汽动力城市的惊险黑色悬疑故事。你必须穿越层层阴谋，解开一个声称发明了永生之术的人的谋杀案。",
    author: "埃琳娜·万斯",
    nodes: {
      'node-1': {
        title: "寂静的实验室",
        narration: "雨点敲打着阿里斯·索恩博士实验室的天窗，与你眼后跳动的头痛节奏一致。索恩死了。这位城里最具争议的炼金术师趴在他的红木书桌上，脖子上插着一支黄铜注射器。房间里弥漫着臭氧和苦杏仁的味道。格雷夫斯探长在外面挡住媒体，给了你整整十分钟去找一些警察无法理解的东西。实验室里杂乱无章：左边是冒泡的大桶，右边的墙上写满了疯狂的粉笔公式。你必须仔细选择起点；凶手可能还在楼里，或者更糟，可能留下了陷阱。",
        choices: {
          'choice-1': { text: "检查粉笔公式中是否有隐藏信息" },
          'choice-2': { text: "仔细检查尸体和奇怪的注射器" },
        },
      },
      'node-2': {
        title: "粉笔密码",
        narration: "你眯着眼看黑板。在混乱的炼金术公式中，你注意到一组匆忙画下划线的坐标。它们指向码头，具体是42号仓库。但当你凑近时，触发了一根绊线。一瓶绿色气体摔碎了。你咳嗽着，肺部火辣辣地疼。你踉跄后退，在逃出房间呼吸新鲜空气时抓起了桌上的一张纸。那是账本的一页，列出了来自一个名为“齿轮帮”的集团的巨额付款。",
        choices: {
          'choice-3': { text: "赶往码头调查42号仓库" },
          'choice-4': { text: "在地下世界追踪“齿轮帮”集团的付款" },
        },
      },
      'node-3': {
        title: "黄铜注射器",
        narration: "你拔出注射器。里面装的不是毒药，而是某种像液态黄金一样闪闪发光的东西。检查时，你注意到针头上有一个微小的铭文：“皇家研究所财产”。索恩在偷他同事的东西。在他的口袋里，你发现了一块不走的怀表；指针在倒转。突然，你听到身后有沉重的脚步声。是索恩的安保自动机，它的眼睛闪烁着充满敌意的红光。",
        choices: {
          'choice-5': { text: "用注射器作为临时武器对抗自动机" },
          'choice-6': { text: "躲闪并尝试使用手动控制来禁用自动机" },
        },
      },
      'node-4': {
        title: "42号仓库",
        narration: "码头散发着盐和腐鱼的臭味。42号仓库很黑，但你看到光线从裂缝中透出。里面，齿轮帮的成员正在装载印有沙漏符号的板条箱。他们在走私时间技术。你看到他们的头目，一个装有机械臂的男人，正在与一个穿着红丝绸的女人争论。那是艾拉拉夫人，城市的主要赞助人。他们在为一次失败的交付争吵。",
        choices: {
          'choice-7': { text: "在阴影中偷听他们的谈话" },
          'choice-8': { text: "制造干扰以偷走其中一个板条箱" },
        },
      },
      'node-5': {
        title: "齿轮帮的巢穴",
        narration: "地下酒吧烟雾缭绕，嘈杂不堪。你向酒保出示账本页。他脸色苍白，指了指后面的隔间。在那里，一个紧张的线人告诉你，索恩一直在支付保护费，但上周停止了。“他说他不再需要我们了，”线人低声说。“他说他找到了挽回错误的方法。”线人在逃跑前塞给你一把标有“中央车站，9号储物柜”的钥匙。",
        choices: {
          'choice-9': { text: "去中央车站打开储物柜" },
          'choice-10': { text: "向线人施压以获取更多细节" },
        },
      },
      'node-6': {
        title: "拆解",
        narration: "你将注射器刺入自动机暴露的线路中。金色液体发出嘶嘶声，机器僵住了，然后散架了。冲击震碎了注射器，但你回收了自动机的数据核心。那是一个记忆线圈。你需要一个终端来读取它。唯一足够近且功能强大的终端在市政厅，但闯入那里很危险。",
        choices: {
          'choice-11': { text: "潜入市政厅服务器室" },
          'choice-12': { text: "把核心带给工业区的黑客联系人" },
        },
      },
      'node-7': {
        title: "手动覆盖",
        narration: "你滚到自动机的摆臂下，打开它的检修面板。你的手指在齿轮上飞舞，但太慢了。它把你扔到了房间另一头。你撞上了架子，受了伤。在混乱中，你发现了一张隐藏的蓝图。它显示了一个名为“克罗诺斯之锚”的装置，位于城市的钟楼里。自动机正准备再次冲锋。",
        choices: {
          'choice-13': { text: "跳窗逃跑，前往钟楼" },
          'choice-14': { text: "射击自动机的腿部活塞以减缓它的速度并逃脱" },
        },
      },
      'node-8': {
        title: "艾拉拉夫人的秘密",
        narration: "你听到艾拉拉说：“索恩变得贪婪了。他想把装置据为己有。”机械臂男人咆哮道：“现在格雷夫斯探长到处嗅来嗅去。”艾拉拉笑了。“格雷夫斯在我的掌控之中。要担心的是那个私家侦探。”她掏出一把金色手枪。“烧了这里。别留下任何痕迹。”他们开始倒汽油。",
        choices: {
          'choice-15': { text: "在她点火前与艾拉拉对峙" },
          'choice-16': { text: "悄悄逃跑并向格雷夫斯报告（如果他可信的话）" },
        },
      },
      'node-9': {
        title: "储物柜",
        narration: "在车站，9号储物柜里只有一样东西：一封写给你的密封信。是索恩写的。“如果你在读这封信，我已经死了。我造了一台机器来预见未来，但它只让我看到了我自己的死亡。我无法阻止它。但我可以拯救这座城市。装置藏在旧市场下面的下水道里。毁了它。”",
        choices: {
          'choice-17': { text: "听从索恩的话，去下水道摧毁装置" },
          'choice-18': { text: "将装置据为己有；想象一下那种力量" },
        },
      },
      'node-10': {
        title: "服务器室",
        narration: "你黑进了市政厅的终端。记忆线圈显示了索恩与市长会面的视频。市长要求获得永生。索恩拒绝了，说代价太高：“要让一个人永生，必须有一千人失去时间。”市长威胁了索恩的家人。录像在索恩将一个关键组件藏在博物馆时结束。",
        choices: {
          'choice-19': { text: "去博物馆取回组件" },
          'choice-20': { text: "用录像勒索市长" },
        },
      },
      'node-11': {
        title: "钟楼",
        narration: "你爬上塔楼。齿轮声震耳欲聋。在顶部，连接在主机械装置上的是一个嗡嗡作响的装置。它正在减慢整个城市的时间，从每个人的生命中抽取秒数储存到电池中。这就是索恩的“永生”。这是时间吸血鬼。你看到一个黑影在走道上向你走来。是市长的打手。",
        choices: {
          'choice-21': { text: "在摇摇欲坠的走道上与打手搏斗" },
          'choice-22': { text: "破坏时钟机械装置以制造混乱" },
        },
      },
      'node-12': {
        title: "冰与火",
        narration: "你从阴影中走出，举起枪。艾拉拉冷冷地笑了。“真英勇。”她开枪射击一个油桶，引起爆炸。齿轮帮发起攻击。你寡不敌众。火势迅速蔓延，威胁要吞噬证据和你。",
        choices: {
          'choice-23': { text: "射击喷淋系统灭火并制造混乱" },
          'choice-24': { text: "穿过火焰追捕艾拉拉" },
        },
      },
      'node-13': {
        title: "下水道",
        narration: "下水道像个迷宫。你找到了索恩的密室。机器就在那里，一个巨大的铜和玻璃球体，脉动着蓝光。它美丽而可怕。你举起锤子要砸碎它，但一个声音阻止了你。“别那样做。”是索恩。或者是机器投射出的他的幽灵。“我解决了，”他说。“我可以让死者复生。”",
        choices: {
          'choice-25': { text: "相信幽灵并尝试使用机器" },
          'choice-26': { text: "无视投影，砸碎玻璃核心" },
        },
      },
      'node-14': {
        title: "博物馆",
        narration: "博物馆里很暗。你找到了索恩藏组件的古埃及展览区。那是一个聚焦透镜。当你拿起它的那一刻，灯亮了。市长带着一队精锐卫兵在那里。“把透镜给我，”他轻声说。“你就能像国王一样生活。”",
        choices: {
          'choice-27': { text: "拒绝并与卫兵战斗" },
          'choice-28': { text: "假装同意，然后用透镜致盲卫兵" },
        },
      },
      'node-15': {
        title: "走道之战",
        narration: "你与打手搏斗。他很强壮，但很慢。你设法把他翻过栏杆。他惨叫着掉进下面的齿轮里。机器的嗡嗡声更大了。它不稳定。如果你不阻止它，它可能会在时间本身撕开一个洞，将城市从存在中抹去。",
        choices: {
          'choice-29': { text: "尝试安全地禁用机器" },
          'choice-30': { text: "破坏时钟齿轮以强制紧急停止" },
        },
      },
      'node-16': {
        title: "晚宴",
        narration: "你逃出了火灾，但艾拉拉逃到了市长的年度晚宴。你满身烟灰地赶到，风衣下藏着武器。舞厅里挤满了城市的精英。艾拉拉在市长耳边低语。他们为“进步”干杯。你看到他们正上方有一个巨大的吊灯。",
        choices: {
          'choice-31': { text: "射击吊灯的链条让它砸在他们身上" },
          'choice-32': { text: "走上舞台，在所有人面前揭露他们的罪行" },
        },
      },
      'node-17': {
        title: "诱惑",
        narration: "你犹豫了。让死者复生？你想起了所有失去的人。你的搭档，你的妻子，你的旧生活。你触摸机器。蓝光爬上你的手臂。很冷。你听到脑海中有低语。那不是索恩。是机器本身，有知觉且饥饿。它想要一个宿主。",
        choices: {
          'choice-33': { text: "挣脱它的控制并射击机器" },
          'choice-34': { text: "让机器与你融合以获得终极力量" },
        },
      },
      'node-21': {
        title: "屋顶",
        narration: "你在博物馆屋顶被逼入绝境。市长拿着你的枪。他大笑。“你是个老古董，侦探。未来属于我。”突然，格雷夫斯探长踢开了门。他看到了你留下的证据。枪战爆发。在混乱中，市长在边缘绊倒了。他拿着透镜。如果它掉下去，就会摔碎，他的计划就毁了。",
        choices: {
          'choice-33': { text: "让他掉下去" },
          'choice-34': { text: "尝试救他以便让他接受审判" },
        },
      },
      'node-18': {
        title: "余波",
        narration: "迫在眉睫的危险过去了。装置被毁或消失了。但阴谋依然存在。市长还在舞厅里，不知道你已经消灭了他的供应商。你有账本/证据。你伤痕累累、满身是血地回到晚宴。音乐停止。所有人的目光都集中在你身上。你可以径直走向市长，在城市精英面前逮捕他，或者你可以溜走，匿名将证据交给媒体，担心腐败的法官会直接放他走。",
        choices: {
          'choice-35': { text: "公开与市长对峙并在舞台上逮捕他" },
          'choice-36': { text: "将证据泄露给报纸然后消失" },
        },
      },
      'node-19': {
        title: "黑暗之路",
        narration: "你拿到了装置。你感觉到它在肋骨旁嗡嗡作响。在警察封锁屋顶之前你离开了现场。你现在是逃犯，但你永生了。然而，装置需要燃料。它以生命为食。你意识到机器的饥饿现在与你自己的心跳相连。你在巷子里遇到了艾拉拉。她怀疑地看着你。“它在哪？”她问。“你毁了它吗？”你可以杀了她来保守秘密并给机器第一顿饭，或者你可以承认你的软弱并请求她帮助摧毁它，在它完全腐蚀你之前。",
        choices: {
          'choice-37': { text: "除掉艾拉拉以保护装置和你的秘密" },
          'choice-38': { text: "把装置给艾拉拉并恳求她毁了它" },
        },
      },
      'node-20': {
        title: "牺牲",
        narration: "你把装置放进保险箱，但门锁不上。锁紧机构坏了。能量在积聚。必须有人手动按住门，同时内部发生爆炸。铅会保护城市，但辐射会淹没握住把手的人。你看着刚赶到的格雷夫斯探长。他很腐败，但他有家人。你是英雄。你可以用枪指着格雷夫斯命令他按住门，通过死亡来救赎他，或者你可以自己按住，为一个几乎不知道你名字的城市做出终极牺牲。",
        choices: {
          'choice-39': { text: "强迫格雷夫斯探长按住门并救赎自己" },
          'choice-40': { text: "自己按住门并接受你的命运" },
        },
      },
      'node-22': {
        title: "结局：正义之城",
        narration: "第二天的头条新闻大肆报道市长被捕。“侦探揭露时间盗窃团伙！”你坐在办公室里，喝着廉价威士忌。装置没了，被你亲手（或艾拉拉）毁了。城市依然肮脏，依然多雨，但今天的齿轮转得稍微公平了一些。你没有发财，也不会永生。但当你照镜子时，你看不到怪物。你看到一个人。在这个机器城市里，那是最稀有的东西。结案。",
        choices: {},
      },
      'node-23': {
        title: "结局：暗影行者",
        narration: "你消失在雾中。证据已寄给全国所有的报纸。政府在一周内垮台。你在阴影中看着城市燃烧并重建。你现在是一个传说，是罪犯们互相讲述的鬼故事。你活了下来，但你很孤独。你意识到法律无法处理真相，所以你成为了法律之外的存在。你向新的黎明压低帽檐，转身离开。总会有另一个谜团。",
        choices: {},
      },
      'node-24': {
        title: "结局：殉道者",
        narration: "爆炸被控制住了。城市得救了。他们发现你的尸体靠在保险箱上，发着微弱、渐逝的光。他们在中央广场为你建了一座雕像。它是青铜做的，在雨中高高耸立。你付出了一切，只为让时间对其他人自然流逝。人们在你脚下献花。你走了，但在城市的记忆中，你以索恩永远无法企及的方式获得了永生。",
        choices: {},
      },
      'node-25': {
        title: "结局：时间领主",
        narration: "你跨过艾拉拉的尸体。装置是你的了。你拨回表盘。你看着雨水从水坑升回天空。你看着子弹飞回枪膛。你现在是这座城市的主人。你可以改写每一个错误，赢得每一次赌注，让每一个批评者闭嘴。你活了一百年，然后一千年。但慢慢地，你忘记了为什么想要它。你忘记了自己的名字。你成为了钟表之神，完美而冷酷，坐在偷来的秒数构成的王座上，统治着尘埃的王国。",
        choices: {},
      },
    },
  },
  ko: {
    title: "연금술사의 시계",
    description: "증기 동력 도시에서 펼쳐지는 위험한 느와르 미스터리. 당신은 불멸을 발명했다고 주장한 남자의 살인 사건을 해결하며 깊은 음모의 그물을 통과해야 합니다.",
    author: "엘레나 반스",
    nodes: {
      'node-1': {
        title: "고요한 실험실",
        narration: "빗소리가 아리스 손 박사의 실험실 천창을 두드리며, 당신의 눈 뒤에서 지끈거리는 두통과 리듬을 맞춥니다. 손은 죽었습니다. 도시에서 가장 논란이 많은 연금술사가 마호가니 책상 위에 쓰러져 있고, 그의 목에는 황동 주사기가 꽂혀 있습니다. 방에서는 오존과 쓴 아몬드 냄새가 납니다. 그레이브스 경감은 밖에서 기자들을 막고 있으며, 경찰이 이해할 수 없는 무언가를 찾을 수 있도록 당신에게 정확히 10분을 주었습니다. 실험실은 어수선합니다. 왼쪽에는 거품이 이는 통들이 있고, 오른쪽 벽에는 광란의 분필 방정식이 가득합니다. 당신은 시작점을 신중하게 선택해야 합니다. 살인자가 아직 건물 안에 있을 수도 있고, 더 나쁘게는 함정을 남겼을 수도 있습니다.",
        choices: {
          'choice-1': { text: "숨겨진 메시지가 있는지 분필 방정식을 조사한다" },
          'choice-2': { text: "시체와 이상한 주사기를 자세히 검사한다" },
        },
      },
      'node-2': {
        title: "분필 암호",
        narration: "당신은 칠판을 가늘게 뜨고 봅니다. 연금술 공식의 혼돈 속에서, 급하게 밑줄 친 일련의 좌표를 발견합니다. 그것들은 부두, 구체적으로는 42번 창고를 가리킵니다. 하지만 몸을 숙이는 순간, 인계철선을 건드리고 맙니다. 녹색 가스 병이 깨집니다. 당신은 기침을 하고, 폐가 타는 듯합니다. 비틀거리며 뒤로 물러나, 공기를 찾아 방을 뛰쳐나오면서 책상 위의 종이 한 장을 움켜쥡니다. 그것은 '톱니바퀴단'으로 알려진 신디케이트로부터의 거액의 지불 내역이 적힌 장부 페이지입니다.",
        choices: {
          'choice-3': { text: "42번 창고를 조사하기 위해 부두로 서두른다" },
          'choice-4': { text: "지하 세계에서 '톱니바퀴단' 신디케이트의 지불 내역을 추적한다" },
        },
      },
      'node-3': {
        title: "황동 주사기",
        narration: "당신은 주사기를 뽑습니다. 독이 아니라 액체 금처럼 빛나는 무언가로 가득 차 있습니다. 조사해보니 바늘에 아주 작은 글씨가 새겨져 있습니다. '왕립 연구소 소유'. 손은 동료들의 물건을 훔치고 있었습니다. 그의 주머니에서 똑딱거리지 않는 회중시계를 발견합니다. 바늘이 거꾸로 돌아갑니다. 갑자기 뒤에서 무거운 발소리가 들립니다. 손의 보안 자동인형입니다. 그 눈은 적대적인 붉은색으로 빛나고 있습니다.",
        choices: {
          'choice-5': { text: "자동인형에 대항하여 주사기를 임시 무기로 사용한다" },
          'choice-6': { text: "피하면서 수동 제어를 사용하여 자동인형을 비활성화한다" },
        },
      },
      'node-4': {
        title: "42번 창고",
        narration: "부두에서는 소금과 썩은 생선 냄새가 납니다. 42번 창고는 어둡지만, 틈새로 빛이 새어 나오는 것이 보입니다. 안에서는 톱니바퀴단 조직원들이 모래시계 기호가 표시된 상자를 싣고 있습니다. 그들은 시간 기술을 밀수하고 있습니다. 기계 팔을 가진 그들의 리더가 붉은 비단 옷을 입은 여성과 논쟁하는 것이 보입니다. 도시의 주요 후원자인 레이디 엘라라입니다. 그들은 실패한 배달에 대해 다투고 있습니다.",
        choices: {
          'choice-7': { text: "그림자 속에서 그들의 대화를 엿듣는다" },
          'choice-8': { text: "상자 중 하나를 훔치기 위해 주의를 끈다" },
        },
      },
      'node-5': {
        title: "톱니바퀴단의 소굴",
        narration: "지하 술집은 연기가 자욱하고 시끄럽습니다. 당신은 바텐더에게 장부 페이지를 보여줍니다. 그는 창백해지며 뒤쪽 부스를 가리킵니다. 그곳에서 초조해하는 정보원이 손이 보호비를 내고 있었지만 지난주에 중단했다고 말합니다. \"그는 더 이상 우리가 필요 없다고 했어,\" 정보원이 속삭입니다. \"그는 자신의 실수를 되돌릴 방법을 찾았다고 했어.\" 정보원은 도망치기 전에 '중앙역, 9번 보관함'이라고 적힌 열쇠를 당신에게 밀어줍니다.",
        choices: {
          'choice-9': { text: "중앙역으로 가서 보관함을 연다" },
          'choice-10': { text: "더 자세한 내용을 알아내기 위해 정보원을 압박한다" },
        },
      },
      'node-6': {
        title: "해체",
        narration: "당신은 주사기를 자동인형의 노출된 배선에 꽂습니다. 금색 액체가 지글거리며 기계가 멈추더니 무너져 내립니다. 충격으로 주사기는 깨졌지만, 당신은 자동인형의 데이터 코어를 회수합니다. 메모리 코일입니다. 이것을 읽으려면 터미널이 필요합니다. 충분히 가깝고 강력한 유일한 곳은 시청에 있지만, 침입하는 것은 위험합니다.",
        choices: {
          'choice-11': { text: "시청 서버실에 침입한다" },
          'choice-12': { text: "산업 구역의 해커 연락책에게 코어를 가져간다" },
        },
      },
      'node-7': {
        title: "수동 무시",
        narration: "당신은 자동인형의 휘두르는 팔 아래로 굴러 들어가 접속 패널을 엽니다. 당신의 손가락이 기어 위를 날아다니지만, 너무 느립니다. 그것은 당신을 방 저편으로 던져버립니다. 당신은 선반에 부딪혀 멍이 듭니다. 혼란 속에서 숨겨진 청사진을 발견합니다. 그것은 도시의 시계탑에 위치한 '크로노스의 닻'이라는 장치를 보여줍니다. 자동인형이 다시 돌격할 준비를 합니다.",
        choices: {
          'choice-13': { text: "창문을 통해 도망쳐 시계탑으로 향한다" },
          'choice-14': { text: "자동인형의 다리 피스톤을 쏘아 속도를 늦추고 탈출한다" },
        },
      },
      'node-8': {
        title: "레이디 엘라라의 비밀",
        narration: "엘라라가 말하는 것이 들립니다. \"손은 탐욕스러워졌어. 장치를 독차지하고 싶어 했지.\" 기계 팔을 가진 남자가 으르렁거립니다. \"그리고 이제 그레이브스 경감이 여기저기 냄새를 맡고 다니잖아.\" 엘라라가 웃습니다. \"그레이브스는 내 손안에 있어. 걱정해야 할 건 그 사립 탐정이야.\" 그녀는 금색 권총을 꺼냅니다. \"여길 태워버려. 흔적을 남기지 마.\" 그들은 휘발유를 붓기 시작합니다.",
        choices: {
          'choice-15': { text: "그녀가 불을 붙이기 전에 엘라라와 대면한다" },
          'choice-16': { text: "조용히 탈출하여 그레이브스에게 보고한다 (그가 믿을 만하다면)" },
        },
      },
      'node-9': {
        title: "보관함",
        narration: "역의 9번 보관함에는 당신에게 온 밀봉된 편지 한 통만 들어 있습니다. 손이 보낸 것입니다. \"이 글을 읽고 있다면, 나는 죽은 것이네. 나는 미래를 보는 기계를 만들었지만, 그것은 내 죽음만을 보여주었지. 나는 그것을 막을 수 없어. 하지만 도시는 구할 수 있네. 장치는 옛 시장 아래 하수구에 숨겨져 있어. 그것을 파괴해 주게.\"",
        choices: {
          'choice-17': { text: "손의 말에 따라 하수구로 가서 장치를 파괴한다" },
          'choice-18': { text: "장치를 당신이 갖는다; 그 힘을 상상해보라" },
        },
      },
      'node-10': {
        title: "서버실",
        narration: "당신은 시청 터미널을 해킹합니다. 메모리 코일은 손이 시장을 만나는 영상을 보여줍니다. 시장은 불멸을 요구했습니다. 손은 대가가 너무 크다며 거절했습니다. \"한 사람이 영원히 살기 위해서는, 천 명이 시간을 잃어야 합니다.\" 시장은 손의 가족을 위협했습니다. 녹화는 손이 중요한 부품을 박물관에 숨기는 것으로 끝납니다.",
        choices: {
          'choice-19': { text: "부품을 회수하기 위해 박물관으로 간다" },
          'choice-20': { text: "영상을 가지고 시장을 협박한다" },
        },
      },
      'node-11': {
        title: "시계탑",
        narration: "당신은 탑을 오릅니다. 톱니바퀴 소리가 귀를 멍멍하게 합니다. 꼭대기에는 주 메커니즘에 연결된 웅웅거리는 장치가 있습니다. 그것은 도시 전체의 시간을 늦추고, 모든 사람의 생명에서 초를 빨아들여 배터리에 저장하고 있습니다. 이것이 손의 '불멸'입니다. 시간 흡혈입니다. 캣워크에서 어두운 그림자가 다가오는 것이 보입니다. 시장의 하수인입니다.",
        choices: {
          'choice-21': { text: "위태로운 캣워크에서 하수인과 싸운다" },
          'choice-22': { text: "시계 메커니즘을 사보타주하여 혼란을 일으킨다" },
        },
      },
      'node-12': {
        title: "불과 얼음",
        narration: "당신은 그림자 속에서 걸어 나와 총을 듭니다. 엘라라가 차갑게 미소 짓습니다. \"정말 영웅적이군.\" 그녀는 기름통을 쏘아 폭발을 일으킵니다. 톱니바퀴단이 공격합니다. 당신은 수적으로 열세입니다. 불길이 빠르게 번지며 증거와 당신을 삼키려 합니다.",
        choices: {
          'choice-23': { text: "스프링클러 시스템을 쏘아 불을 끄고 혼란을 만든다" },
          'choice-24': { text: "불길을 뚫고 엘라라를 쫓는다" },
        },
      },
      'node-13': {
        title: "하수구",
        narration: "하수구는 미로입니다. 당신은 손의 비밀 방을 찾습니다. 기계는 그곳에 있습니다. 구리와 유리로 된 거대한 구체가 푸른 빛을 내뿜고 있습니다. 아름답고도 무섭습니다. 당신은 그것을 부수기 위해 망치를 들어 올리지만, 목소리가 당신을 멈춰 세웁니다. \"그러지 마.\" 손입니다. 아니면 기계가 투사한 그의 유령일까요. \"내가 해결했어,\" 그가 말합니다. \"나는 죽은 자를 되살릴 수 있어.\"",
        choices: {
          'choice-25': { text: "유령을 믿고 기계를 사용해 본다" },
          'choice-26': { text: "투영을 무시하고 유리 코어를 부순다" },
        },
      },
      'node-14': {
        title: "박물관",
        narration: "박물관은 어둡습니다. 당신은 손이 부품을 숨긴 고대 이집트 전시관을 찾습니다. 그것은 초점 렌즈입니다. 당신이 그것을 집어 드는 순간, 불이 켜집니다. 시장이 정예 경비대와 함께 그곳에 있습니다. \"렌즈를 내놔,\" 그가 부드럽게 말합니다. \"그러면 왕처럼 살 수 있게 해주지.\"",
        choices: {
          'choice-27': { text: "거절하고 경비대와 싸운다" },
          'choice-28': { text: "동의하는 척하다가 렌즈를 사용해 경비대의 눈을 멀게 한다" },
        },
      },
      'node-15': {
        title: "캣워크의 결투",
        narration: "당신은 하수인과 몸싸움을 벌입니다. 그는 강하지만 느립니다. 당신은 그를 난간 너머로 밀어버리는 데 성공합니다. 그는 끔찍한 비명을 지르며 아래의 톱니바퀴 속으로 떨어집니다. 기계가 더 크게 웅웅거립니다. 불안정합니다. 멈추지 않으면 시간 자체에 구멍을 뚫어 도시를 존재에서 지워버릴지도 모릅니다.",
        choices: {
          'choice-29': { text: "안전하게 기계를 비활성화하려고 시도한다" },
          'choice-30': { text: "시계 톱니바퀴를 파괴하여 비상 정지를 강제한다" },
        },
      },
      'node-16': {
        title: "갈라",
        narration: "당신은 화재에서 탈출했지만, 엘라라는 시장의 연례 갈라로 도망쳤습니다. 당신은 그을음을 뒤집어쓰고 도착했고, 트렌치코트로 무기를 숨겼습니다. 무도회장은 도시의 엘리트들로 가득합니다. 엘라라가 시장의 귀에 속삭입니다. 그들은 '진보'를 위해 건배합니다. 당신은 그들 바로 위에 거대한 샹들리에가 있는 것을 봅니다.",
        choices: {
          'choice-31': { text: "샹들리에 사슬을 쏘아 그들 위로 떨어뜨린다" },
          'choice-32': { text: "무대 위로 올라가 모두 앞에서 그들의 범죄를 폭로한다" },
        },
      },
      'node-17': {
        title: "유혹",
        narration: "당신은 망설입니다. 죽은 자를 되살린다? 당신은 잃어버린 모든 사람들을 생각합니다. 파트너, 아내, 당신의 옛 삶. 당신은 기계를 만집니다. 푸른 빛이 당신의 팔을 타고 올라옵니다. 차갑습니다. 머릿속에서 속삭임이 들립니다. 손이 아닙니다. 기계 그 자체입니다. 지각이 있고 굶주려 있습니다. 그것은 숙주를 원합니다.",
        choices: {
          'choice-33': { text: "그것의 지배를 뿌리치고 기계를 쏜다" },
          'choice-34': { text: "기계가 당신과 융합하도록 하여 궁극의 힘을 얻는다" },
        },
      },
      'node-21': {
        title: "옥상",
        narration: "당신은 박물관 옥상에서 구석에 몰립니다. 시장이 당신의 총을 가지고 있습니다. 그가 웃습니다. \"자네는 화석이야, 탐정. 미래는 내 것이네.\" 갑자기 그레이브스 경감이 문을 박차고 들어옵니다. 그는 당신이 남긴 증거를 보았습니다. 총격전이 벌어집니다. 혼란 속에서 시장이 난간 근처에서 비틀거립니다. 그는 렌즈를 들고 있습니다. 만약 그것이 떨어지면 깨질 것이고, 그의 계획은 망가집니다.",
        choices: {
          'choice-33': { text: "그를 떨어지게 둔다" },
          'choice-34': { text: "그가 재판을 받게 하기 위해 구하려고 시도한다" },
        },
      },
      'node-18': {
        title: "여파",
        narration: "당장의 위험은 지나갔습니다. 장치는 파괴되었거나 사라졌습니다. 하지만 음모는 남아 있습니다. 시장은 여전히 무도회장에 있으며, 당신이 그의 공급자를 제거했다는 사실을 모릅니다. 당신은 장부/증거를 가지고 있습니다. 당신은 멍들고 피를 흘리며 갈라로 돌아갑니다. 음악이 멈춥니다. 모든 시선이 당신에게 쏠립니다. 당신은 시장에게 곧장 걸어가 도시의 엘리트들 앞에서 그를 체포할 수도 있고, 부패한 판사들이 그를 그냥 풀어줄 것을 두려워하여 몰래 빠져나가 증거를 언론에 익명으로 넘길 수도 있습니다.",
        choices: {
          'choice-35': { text: "공개적으로 시장과 대면하여 무대 위에서 체포한다" },
          'choice-36': { text: "증거를 신문에 유출하고 사라진다" },
        },
      },
      'node-19': {
        title: "어두운 길",
        narration: "당신은 장치를 가지고 있습니다. 갈비뼈에서 그 진동이 느껴집니다. 경찰이 옥상을 확보하기 전에 현장을 떠납니다. 당신은 이제 도망자이지만, 불멸의 존재입니다. 하지만 장치에는 연료가 필요합니다. 그것은 생명을 먹습니다. 당신은 기계의 굶주림이 이제 당신의 심장 박동과 연결되어 있음을 깨닫습니다. 골목에서 엘라라를 만납니다. 그녀는 의심스럽게 당신을 쳐다봅니다. \"그거 어디 있어?\" 그녀가 묻습니다. \"파괴했어?\" 당신은 비밀을 지키고 기계에게 첫 식사를 제공하기 위해 그녀를 죽일 수도 있고, 당신의 나약함을 고백하고 그것이 당신을 완전히 타락시키기 전에 파괴하는 것을 도와달라고 그녀에게 간청할 수도 있습니다.",
        choices: {
          'choice-37': { text: "장치와 비밀을 지키기 위해 엘라라를 제거한다" },
          'choice-38': { text: "장치를 엘라라에게 주고 파괴해 달라고 애원한다" },
        },
      },
      'node-20': {
        title: "희생",
        narration: "당신은 장치를 금고에 넣었지만, 문이 잠기지 않습니다. 잠금 장치가 고장 났습니다. 에너지가 고조됩니다. 내부에서 폭발이 일어나는 동안 누군가 수동으로 문을 잡고 있어야 합니다. 납이 도시를 보호하겠지만, 방사능은 손잡이를 잡고 있는 사람을 덮칠 것입니다. 당신은 막 도착한 그레이브스 경감을 봅니다. 그는 부패했지만 가족이 있습니다. 당신은 영웅입니다. 당신은 그레이브스에게 총을 겨누고 문을 잡게 하여 죽음으로 속죄하게 할 수도 있고, 당신의 이름을 거의 모르는 도시를 위해 궁극적인 희생을 치르며 직접 문을 잡을 수도 있습니다.",
        choices: {
          'choice-39': { text: "그레이브스 경감에게 문을 잡게 하여 속죄시킨다" },
          'choice-40': { text: "직접 문을 잡고 운명을 받아들인다" },
        },
      },
      'node-22': {
        title: "결말: 정의로운 도시",
        narration: "다음 날 헤드라인은 시장의 체포를 대서특필합니다. \"탐정이 시간 도둑 조직을 적발하다!\" 당신은 사무실에 앉아 싸구려 위스키를 마십니다. 장치는 사라졌고, 당신의 손(또는 엘라라의 손)에 의해 파괴되었습니다. 도시는 여전히 더럽고 비가 오지만, 오늘의 톱니바퀴는 조금 더 공정하게 돌아갑니다. 당신은 부자가 되지 못했고, 영원히 살지도 못할 것입니다. 하지만 거울을 보면 괴물이 보이지 않습니다. 인간이 보입니다. 그리고 이 기계의 도시에서, 그것은 가장 희귀한 것입니다. 사건 종결.",
        choices: {},
      },
      'node-23': {
        title: "결말: 그림자 여행자",
        narration: "당신은 안개 속으로 사라집니다. 증거는 전국의 모든 신문사로 보내졌습니다. 정부는 일주일 만에 무너졌습니다. 당신은 도시가 불타고 재건되는 것을 그림자 속에서 지켜봅니다. 당신은 이제 전설이자, 범죄자들이 서로에게 들려주는 유령 이야기입니다. 당신은 살아남았지만, 혼자입니다. 당신은 법이 진실을 감당할 수 없다는 것을 깨달았고, 그래서 법 밖의 존재가 되었습니다. 당신은 새로운 새벽을 향해 모자를 기울이고 걸어갑니다. 미스터리는 언제나 또 있을 테니까요.",
        choices: {},
      },
      'node-24': {
        title: "결말: 순교자",
        narration: "폭발은 억제되었습니다. 도시는 구해졌습니다. 그들은 금고에 기대어 있는 당신의 시신을 발견했습니다. 희미하게 꺼져가는 빛을 내고 있었죠. 그들은 중앙 광장에 당신의 동상을 세웠습니다. 청동으로 만들어졌으며, 빗속에 높이 서 있습니다. 당신은 다른 모든 사람들을 위해 시간이 자연스럽게 흐르도록 모든 것을 바쳤습니다. 사람들은 당신의 발치에 꽃을 놓습니다. 당신은 떠났지만, 도시의 기억 속에서 당신은 손이 결코 도달할 수 없었던 방식으로 불멸이 되었습니다.",
        choices: {},
      },
      'node-25': {
        title: "결말: 타임로드",
        narration: "당신은 엘라라의 시체를 넘어갑니다. 장치는 당신 것입니다. 다이얼을 되돌립니다. 비가 웅덩이에서 하늘로 솟아오르는 것을 봅니다. 총알이 총으로 다시 날아가는 것을 봅니다. 당신은 이제 이 도시의 주인입니다. 모든 실수를 다시 쓰고, 모든 내기에서 이기고, 모든 비평가를 침묵시킬 수 있습니다. 백 년을 살고, 천 년을 삽니다. 하지만 서서히, 당신은 왜 그것을 원했는지 잊어버립니다. 자신의 이름을 잊어버립니다. 당신은 시계 태엽 신이 되어, 완벽하고 차가우며, 훔친 초로 만든 왕좌에 앉아 먼지의 왕국을 통치하게 됩니다.",
        choices: {},
      },
    },
  },
  uk: {
    title: "Годинник Алхіміка",
    description: "Ризикований нуар-детектив у місті, що працює на парі. Ви повинні розплутати глибоку змову та розкрити вбивство людини, яка стверджувала, що винайшла безсмертя.",
    author: "Олена Венс",
    nodes: {
      'node-1': {
        title: "Тиха Лабораторія",
        narration: "Дощ барабанить по скляному даху лабораторії доктора Аріса Торна, відбиваючи ритм головного болю, що пульсує у вас за очима. Торн мертвий. Найсуперечливіший алхімік міста лежить на своєму столі з червоного дерева, з латунним шприцом, що стирчить із шиї. У кімнаті пахне озоном і гірким мигдалем. Інспектор Грейвс стримує пресу зовні, даючи вам рівно десять хвилин, щоб знайти щось, чого не зрозуміє поліція. Лабораторія захаращена: ліворуч булькають чани, а стіна праворуч списана божевільними крейдяними рівняннями. Ви повинні ретельно вибрати, з чого почати; вбивця може бути ще в будівлі, або, що гірше, міг залишити пастку.",
        choices: {
          'choice-1': { text: "Оглянути крейдяні рівняння на наявність прихованого повідомлення" },
          'choice-2': { text: "Оглянути тіло та дивний шприц ближче" },
        },
      },
      'node-2': {
        title: "Крейдяний Шифр",
        narration: "Ви примружившись дивитесь на дошку. Серед хаосу алхімічних формул ви помічаєте набір координат, поспішно підкреслених. Вони вказують на Доки, конкретно на Склад 42. Але, нахилившись, ви зачіпаєте розтяжку. Розбивається флакон із зеленим газом. Ви кашляєте, легені пече. Ви відступаєте назад, хапаючи зі столу клаптик паперу, і вибігаєте з кімнати, щоб ковтнути повітря. Це сторінка з гросбуха, де перераховані величезні виплати від синдикату, відомого як «Шестерні».",
        choices: {
          'choice-3': { text: "Поспішити в Доки, щоб дослідити Склад 42" },
          'choice-4': { text: "Відстежити платежі синдикату «Шестерні» у підпіллі" },
        },
      },
      'node-3': {
        title: "Латунний Шприц",
        narration: "Ви витягуєте шприц. Він наповнений не отрутою, а чимось, що сяє, як рідке золото. Оглядаючи його, ви помічаєте крихітний напис на голці: «Власність Королівського Інституту». Торн крав у своїх колег. У його кишені ви знаходите кишеньковий годинник, який не цокає; його стрілки крутяться назад. Раптом ви чуєте важкі кроки позаду. Це охоронний автоматон Торна, і його очі світяться ворожим червоним світлом.",
        choices: {
          'choice-5': { text: "Використати шприц як імпровізовану зброю проти автоматона" },
          'choice-6': { text: "Ухилитися і спробувати вимкнути автоматона, використовуючи його ручне керування" },
        },
      },
      'node-4': {
        title: "Склад 42",
        narration: "У Доках смердить сіллю та гнилою рибою. Склад 42 темний, але ви бачите світло, що пробивається крізь щілини. Всередині члени банди «Шестерні» вантажать ящики з символом пісочного годинника. Вони займаються контрабандою технологій часу. Ви бачите їхнього ватажка, чоловіка з механічною рукою, який сперечається з жінкою в червоному шовку. Це Леді Елара, головна благодійниця міста. Вони сваряться через невдалу доставку.",
        choices: {
          'choice-7': { text: "Підслухати їхню розмову з тіні" },
          'choice-8': { text: "Створити відволікання, щоб вкрасти один із ящиків" },
        },
      },
      'node-5': {
        title: "Лігво Шестерень",
        narration: "У підпільному барі накурено і галасливо. Ви показуєте сторінку з гросбуха бармену. Він блідне і вказує на кабінку в глибині. Там нервовий інформатор розповідає вам, що Торн платив за захист, але минулого тижня припинив. «Він сказав, що ми йому більше не потрібні», — шепоче інформатор. «Він сказав, що знайшов спосіб скасувати свої помилки». Інформатор передає вам ключ із написом «Центральний вокзал, шафка 9», перш ніж втекти.",
        choices: {
          'choice-9': { text: "Піти на Центральний вокзал і відкрити шафку" },
          'choice-10': { text: "Натиснути на інформатора, щоб дізнатися більше деталей" },
        },
      },
      'node-6': {
        title: "Демонтаж",
        narration: "Ви встромляєте шприц у відкриту проводку автоматона. Золота рідина шипить, і машина завмирає, а потім розвалюється. Від удару шприц розбивається, але ви забираєте ядро даних автоматона. Це котушка пам'яті. Вам потрібен термінал, щоб прочитати її. Єдиний достатньо близький і потужний знаходиться в Мерії, але проникати туди ризиковано.",
        choices: {
          'choice-11': { text: "Пробратися в серверну кімнату Мерії" },
          'choice-12': { text: "Віднести ядро знайомому хакеру в Промисловий Сектор" },
        },
      },
      'node-7': {
        title: "Ручне Перемикання",
        narration: "Ви перекочуєтесь під розмашистою рукою автоматона і відкриваєте його панель доступу. Ваші пальці літають по шестернях, але ви занадто повільні. Він відкидає вас через кімнату. Ви врізаєтесь у стелаж, отримавши забої. У безладі ви знаходите приховане креслення. На ньому зображено пристрій під назвою «Якір Хроноса», розташований у міській годинниковій вежі. Автоматон готується до нової атаки.",
        choices: {
          'choice-13': { text: "Втекти через вікно і попрямувати до Годинникової Вежі" },
          'choice-14': { text: "Вистрілити в поршні ніг автоматона, щоб сповільнити його і втекти" },
        },
      },
      'node-8': {
        title: "Таємниця Леді Елари",
        narration: "Ви чуєте, як Елара каже: «Торн став жадібним. Він хотів залишити пристрій собі». Чоловік з механічною рукою гарчить: «А тепер Інспектор Грейвс усюди винюхує». Елара сміється. «Грейвс у моїй кишені. Хвилюйся про приватного детектива». Вона дістає золотий пістолет. «Спаліть це місце. Не залишайте слідів». Вони починають розливати бензин.",
        choices: {
          'choice-15': { text: "Протистояти Еларі, поки вона не запалила вогонь" },
          'choice-16': { text: "Тихо втекти і доповісти Грейвсу (якщо йому можна довіряти)" },
        },
      },
      'node-9': {
        title: "Шафка",
        narration: "На вокзалі в шафці 9 лежить лише один предмет: запечатаний лист, адресований вам. Він від Торна. «Якщо ви це читаєте, я мертвий. Я створив машину, щоб бачити майбутнє, але вона показала мені лише мою власну смерть. Я не можу це зупинити. Але я можу врятувати місто. Пристрій захований у каналізації під старим ринком. Знищіть його».",
        choices: {
          'choice-17': { text: "Послухатися Торна і піти в каналізацію, щоб знищити пристрій" },
          'choice-18': { text: "Залишити пристрій собі; уявіть цю владу" },
        },
      },
      'node-10': {
        title: "Серверна Кімната",
        narration: "Ви зламуєте термінал Мерії. Котушка пам'яті показує відео зустрічі Торна з Мером. Мер вимагав безсмертя. Торн відмовився, сказавши, що ціна занадто висока: «Щоб один жив вічно, тисяча повинна втратити час». Мер погрожував сім'ї Торна. Запис закінчується тим, що Торн ховає життєво важливий компонент у Музеї.",
        choices: {
          'choice-19': { text: "Піти в Музей, щоб забрати компонент" },
          'choice-20': { text: "Шантажувати Мера записом" },
        },
      },
      'node-11': {
        title: "Годинникова Вежа",
        narration: "Ви піднімаєтесь на вежу. Гуркіт шестерень оглушливий. Нагорі, прикріплений до головного механізму, гуде пристрій. Він сповільнює час для всього міста, висмоктуючи секунди з життя кожного, щоб зберегти їх у батареї. Ось що таке «безсмертя» Торна. Це часовий вампіризм. Ви бачите темну фігуру, що наближається до вас по містку. Це підручний Мера.",
        choices: {
          'choice-21': { text: "Битися з підручним на хиткому містку" },
          'choice-22': { text: "Саботувати механізм годинника, щоб викликати хаос" },
        },
      },
      'node-12': {
        title: "Вогонь і Лід",
        narration: "Ви виходите з тіні, піднявши пістолет. Елара холодно посміхається. «Як героїчно». Вона стріляє в бочку з нафтою, викликаючи вибух. Банда «Шестерні» атакує. Їх більше. Вогонь швидко поширюється, загрожуючи поглинути докази і вас.",
        choices: {
          'choice-23': { text: "Вистрілити в систему пожежогасіння, щоб загасити вогонь і створити хаос" },
          'choice-24': { text: "Переслідувати Елару крізь полум'я" },
        },
      },
      'node-13': {
        title: "Каналізація",
        narration: "Каналізація — це лабіринт. Ви знаходите таємну кімнату Торна. Машина там: величезна куля з міді та скла, що пульсує синім світлом. Вона прекрасна і жахлива. Ви піднімаєте молот, щоб розбити її, але голос зупиняє вас. «Не роби цього». Це Торн. Або його привид, спроектований машиною. «Я вирішив це», — каже він. «Я можу повертати мертвих».",
        choices: {
          'choice-25': { text: "Повірити привиду і спробувати використати машину" },
          'choice-26': { text: "Ігнорувати проекцію і розбити скляне ядро" },
        },
      },
      'node-14': {
        title: "Музей",
        narration: "У музеї темно. Ви знаходите виставку Стародавнього Єгипту, де Торн сховав компонент. Це фокусуюча лінза. У той момент, коли ви берете її, вмикається світло. Мер стоїть там із загоном елітної охорони. «Віддай мені лінзу», — каже він м'яко. «І ти зможеш жити як король».",
        choices: {
          'choice-27': { text: "Відмовитися і битися з охороною" },
          'choice-28': { text: "Вдати, що погоджуєтесь, а потім використати лінзу, щоб засліпити охорону" },
        },
      },
      'node-15': {
        title: "Бій на Містку",
        narration: "Ви боретеся з підручним. Він сильний, але повільний. Вам вдається перекинути його через перила. Він падає в шестерні внизу з нудотним криком. Машина гуде голосніше. Вона нестабільна. Якщо ви її не зупините, вона може розірвати діру в самому часі, стерши місто з лиця землі.",
        choices: {
          'choice-29': { text: "Спробувати безпечно вимкнути машину" },
          'choice-30': { text: "Знищити шестерні годинника, щоб змусити його аварійно зупинитися" },
        },
      },
      'node-16': {
        title: "Гала-вечір",
        narration: "Ви втекли від пожежі, але Елара втекла на щорічний Гала-вечір Мера. Ви прибуваєте в сажі, ваш плащ приховує зброю. Бальна зала заповнена елітою міста. Елара шепоче на вухо Меру. Вони піднімають тост за «прогрес». Ви бачите масивну люстру прямо над ними.",
        choices: {
          'choice-31': { text: "Вистрілити в ланцюг люстри, щоб скинути її на них" },
          'choice-32': { text: "Вийти на сцену і викрити їхні злочини перед усіма" },
        },
      },
      'node-17': {
        title: "Спокуса",
        narration: "Ви вагаєтесь. Повернути мертвих? Ви думаєте про всіх, кого втратили. Вашого партнера, вашу дружину, ваше старе життя. Ви торкаєтесь машини. Синє світло повзе по вашій руці. Воно холодне. Ви чуєте шепіт у голові. Це не Торн. Це сама машина, розумна і голодна. Вона хоче господаря.",
        choices: {
          'choice-33': { text: "Вирватися з її хватки і вистрілити в машину" },
          'choice-34': { text: "Дозволити машині злитися з вами, щоб отримати абсолютну владу" },
        },
      },
      'node-21': {
        title: "Дах",
        narration: "Ви загнані в кут на даху музею. У Мера ваш пістолет. Він сміється. «Ти викопне, детективе. Майбутнє належить мені». Раптом Інспектор Грейвс вибиває двері. Він бачив докази, які ви залишили. Починається перестрілка. У хаосі Мер спотикається біля краю. Він тримає лінзу. Якщо вона впаде, то розіб'ється, і його плани будуть зруйновані.",
        choices: {
          'choice-33': { text: "Дозволити йому впасти" },
          'choice-34': { text: "Спробувати врятувати його, щоб він постав перед судом" },
        },
      },
      'node-18': {
        title: "Наслідки",
        narration: "Безпосередня небезпека минула. Пристрій знищено або він зник. Але змова залишається. Мер все ще в бальній залі, не знаючи, що ви усунули його постачальника. У вас є гросбух/докази. Ви повертаєтесь на Гала-вечір, у синцях і крові. Музика зупиняється. Усі очі спрямовані на вас. Ви можете підійти прямо до Мера і заарештувати його перед елітою міста, або ви можете вислизнути і передати докази анонімно пресі, побоюючись, що корумповані судді просто відпустять його.",
        choices: {
          'choice-35': { text: "Публічно протистояти Меру і заарештувати його на сцені" },
          'choice-36': { text: "Злити докази в газети і зникнути" },
        },
      },
      'node-19': {
        title: "Темний Шлях",
        narration: "Пристрій у вас. Ви відчуваєте його гудіння біля ребер. Ви залишаєте місце події до того, як поліція оточить дах. Ви тепер утікач, але безсмертний. Однак пристрою потрібне паливо. Він живиться життям. Ви розумієте, що голод машини тепер пов'язаний з вашим власним серцебиттям. Ви зустрічаєте Елару в провулку. Вона підозріло дивиться на вас. «Де він?» — запитує вона. «Ти знищив його?» Ви можете вбити її, щоб зберегти свій секрет і дати машині першу їжу, або ви можете зізнатися у своїй слабкості і благати її допомогти знищити його, перш ніж він повністю вас розбестить.",
        choices: {
          'choice-37': { text: "Усунути Елару, щоб захистити пристрій і свій секрет" },
          'choice-38': { text: "Віддати пристрій Еларі і благати її знищити його" },
        },
      },
      'node-20': {
        title: "Жертва",
        narration: "Ви кладете пристрій у сейф, але двері не замикаються. Замковий механізм зламаний. Енергія наростає. Хтось повинен тримати двері вручну, поки всередині станеться вибух. Свинець захистить місто, але радіація накриє людину, яка тримає ручку. Ви дивитесь на Інспектора Грейвса, який щойно прибув. Він корумпований, але у нього є сім'я. Ви герой. Ви можете наказати Грейвсу тримати її під дулом пістолета, спокутуючи його провину смертю, або ви можете тримати її самі, приносячи найвищу жертву заради міста, яке майже не знає вашого імені.",
        choices: {
          'choice-39': { text: "Змусити Інспектора Грейвса тримати двері і спокутувати провину" },
          'choice-40': { text: "Тримати двері самому і прийняти свою долю" },
        },
      },
      'node-22': {
        title: "Кінець: Справедливе Місто",
        narration: "Заголовки наступного дня кричать про арешт Мера. «Детектив викрив банду викрадачів часу!» Ви сидите у своєму офісі, п'ючи дешевий віскі. Пристрою немає, він знищений вашою рукою (або рукою Елари). Місто все ще брудне, все ще дощове, але шестерні сьогодні крутяться трохи справедливіше. Ви не розбагатіли і не будете жити вічно. Але коли ви дивитесь у дзеркало, ви не бачите монстра. Ви бачите людину. І в цьому місті машин це найрідкісніша річ. Справу закрито.",
        choices: {},
      },
      'node-23': {
        title: "Кінець: Той, Хто Ходить у Тіні",
        narration: "Ви зникаєте в тумані. Докази були надіслані в усі газети країни. Уряд впав за тиждень. Ви спостерігаєте з тіні, як місто горить і відбудовується. Ви тепер легенда, історія про привидів, яку розповідають один одному злочинці. Ви вижили, але ви самі. Ви зрозуміли, що закон не може впоратися з правдою, тому ви стали чимось поза законом. Ви нахиляєте капелюх назустріч новому світанку і йдете. Завжди буде інша таємниця.",
        choices: {},
      },
      'node-24': {
        title: "Кінець: Мученик",
        narration: "Вибух було стримано. Місто врятовано. Вони знайшли ваше тіло, притулене до сейфа, яке світилося слабким, згасаючим світлом. Вони поставили вам статую на центральній площі. Вона з бронзи і височіє під дощем. Ви віддали все, щоб час плив природно для всіх інших. Люди кладуть квіти до ваших ніг. Ви пішли, але в пам'яті міста ви безсмертні так, як Торн ніколи не зміг би досягти.",
        choices: {},
      },
      'node-25': {
        title: "Кінець: Володар Часу",
        narration: "Ви переступаєте через тіло Елари. Пристрій ваш. Ви повертаєте циферблат назад. Ви бачите, як дощ піднімається з калюж у небо. Ви бачите, як куля летить назад у пістолет. Ви тепер господар цього міста. Ви можете переписати кожну помилку, виграти кожне парі, змусити замовкнути кожного критика. Ви живете сто років, потім тисячу. Але поступово ви забуваєте, навіщо вам це було потрібно. Ви забуваєте своє ім'я. Ви стаєте Годинниковим Богом, досконалим і холодним, що сидить на троні з вкрадених секунд, правлячи королівством пилу.",
        choices: {},
      },
    },
  },
};



