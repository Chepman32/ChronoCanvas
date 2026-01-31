import { Story } from '../types';

export const velvetGuillotineStory: Story = {
  id: 'story-velvet-guillotine',
  title: 'The Velvet Guillotine',
  description:
    'A noir mystery set in 1920s Paris. Detective Thorne investigates a murder at Chateau de Valois that unravels a conspiracy of assassins, secret societies, and political intrigue in the City of Light.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?w=400',
  author: 'Celeste Moreau',
  genre: 'detective',
  involvement: 'high',
  estimatedDuration: 55,
  isPremium: false,
  version: '1.0',
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  totalNodes: 39,
  totalEndings: 4,
  startNodeId: 'node-1',
  nodes: [
    {
      id: 'node-1',
      storyId: 'story-velvet-guillotine',
      type: 'start',
      title: 'Midnight Masquerade',
      imageUrl: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800',
      narration:
        "The Parisian fog curls around the iron gates of Chateau de Valois like ghostly fingers. You are Detective Thorne, and the invitation to tonight\'s masquerade ball arrived with a peacock feather and no return address. Jazz drifts from the grand windows above, but something feels wrong. The champagne is too cold, the laughter too practiced. Then, a scream cuts through the night -- high, raw, and immediately silenced. The music stutters and stops. Somewhere in this gilded labyrinth, a killer has just claimed their victim. You push through the panicked crowd, your hand resting on the revolver beneath your coat.",
      choices: [
        {
          id: 'choice-1-1',
          text: 'Push through to the Grand Ballroom',
          targetNodeId: 'node-2',
          order: 1,
        },
        {
          id: 'choice-1-2',
          text: 'Slip out to the Garden Terrace',
          targetNodeId: 'node-3',
          order: 2,
        },
      ],
    },
    {
      id: 'node-2',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'The Grand Ballroom',
      imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      narration:
        "The ballroom is frozen in tableau. Duke Valois lies sprawled at the foot of the grand staircase, his Venetian mask cracked in two. Blood pools beneath him, dark against the marble. His fiancee, Lady Genevieve, weeps over the body, her ivory dress stained crimson. But your trained eye catches details: the Duke\'s right hand clutches a torn piece of black fabric, and his expression is not one of surprise, but recognition. Near the champagne fountain, a man in a raven mask watches with unsettling stillness. He meets your gaze, then turns and walks calmly toward the east wing. A maid whispers that the Duke argued with someone just before the scream.",
      choices: [
        {
          id: 'choice-2-1',
          text: 'Question the weeping fiancee',
          targetNodeId: 'node-4',
          order: 1,
        },
        {
          id: 'choice-2-2',
          text: 'Pursue the man in the raven mask',
          targetNodeId: 'node-5',
          order: 2,
        },
      ],
    },
    {
      id: 'node-3',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Garden Terrace',
      imageUrl: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration:
        "The terrace is deserted, save for the wind rustling through manicured hedges. Your flashlight catches fresh boot prints in the flowerbed -- large, military-style treads leading away from the ballroom toward the old Valois mausoleum. Something glitters in the moonlight near the fountain: a spent bullet casing, still warm to the touch. As you examine it, movement catches your eye. A figure in dark clothing drops something into the fountain\'s basin, then melts into the shadows of the rose garden. The object sinks slowly -- it looks like a metal case or perhaps a weapon.",
      choices: [
        {
          id: 'choice-3-1',
          text: 'Follow the boot prints to the mausoleum',
          targetNodeId: 'node-6',
          order: 1,
        },
        {
          id: 'choice-3-2',
          text: 'Retrieve the object from the fountain',
          targetNodeId: 'node-7',
          order: 2,
        },
      ],
    },
    {
      id: 'node-4',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'The Grieving Widow',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
      narration:
        "Lady Elara -- for that is the fiancee\'s name -- looks up at you with eyes too calculating for fresh grief. Her tears seem genuine, but her words are carefully measured. \'We were to be married in spring,\' she whispers. \'Now I am nothing.\' But when you mention the torn fabric in the Duke\'s hand, her composure cracks. \'The Debt Collectors,\" she breathes, barely audible. \'He said they would come tonight. He said they had finally found him.\' She claims innocence but her hands tremble as she twists a silver locket. Through her sobs, she mentions a secret meeting in the Duke\'s study just before midnight.",
      choices: [
        {
          id: 'choice-4-1',
          text: 'Investigate the secret passage to the study',
          targetNodeId: 'node-8',
          order: 1,
        },
        {
          id: 'choice-4-2',
          text: 'Examine the upper gallery for evidence',
          targetNodeId: 'node-9',
          order: 2,
        },
      ],
    },
    {
      id: 'node-5',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'The Raven Mask',
      imageUrl: 'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?w=800',
      narration:
        "You catch the raven-masked man in the portrait gallery. He stands before a painting of the Duke\'s grandfather, seemingly unconcerned by your approach. When you demand he remove his mask, he complies with theatrical slowness. Count Orlok -- a Hungarian noble with a reputation for espionage -- offers a thin smile. \'I am not your killer, Detective. I am merely an observer.\' His alibi is suspiciously perfect: he was in the smoking room with three witnesses. But his eyes keep darting to the balcony above. \'If you seek truth,\" he murmurs, \'look to the shadows that move. I saw something on the eastern balcony at eleven fifty-five.\'",
      choices: [
        {
          id: 'choice-5-1',
          text: 'Investigate the secret passage',
          targetNodeId: 'node-8',
          order: 1,
        },
        {
          id: 'choice-5-2',
          text: 'Check the upper gallery for the balcony',
          targetNodeId: 'node-9',
          order: 2,
        },
      ],
    },
    {
      id: 'node-6',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'The Mausoleum',
      imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      narration:
        "The Valois family mausoleum looms in the fog, a stone temple to mortality. The door hangs ajar, its lock recently forced. Inside, marble sarcophagi line the walls like sleeping giants. The Duke\'s grandfather\'s coffin has been disturbed -- the lid shifted just enough to reveal a hidden compartment. Inside: documents stamped with a black hand, a Luger pistol, and a list of names including several recently deceased Parisian politicians. You are examining the papers when footsteps echo outside. A gunman in a black coat enters, weapon drawn. \'You should not have come here,\' he says in accented French. \'The Debt Collectors do not forgive curiosity.\'",
      choices: [
        {
          id: 'choice-6-1',
          text: 'Dive into the underground tunnels',
          targetNodeId: 'node-10',
          order: 1,
        },
        {
          id: 'choice-6-2',
          text: 'Escape to the conservatory',
          targetNodeId: 'node-11',
          order: 2,
        },
      ],
    },
    {
      id: 'node-7',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'The Fountain',
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      narration:
        "You plunge your hand into the icy fountain water and retrieve the object: a gold signet ring bearing the crest of the Valois family, but with an inverted cross -- the symbol of the exiled branch. This is no ordinary heirloom; it is a key, its bezel designed to turn like a mechanism. As you examine it, a shot rings out from the conservatory windows. The bullet sparks off the fountain\'s stone rim inches from your head. You dive behind a topiary as a second shot shatters a nearby window. Through the glass, you see a rifle barrel withdraw into darkness. Someone wants this ring badly enough to kill for it.",
      choices: [
        {
          id: 'choice-7-1',
          text: 'Enter the underground tunnels',
          targetNodeId: 'node-10',
          order: 1,
        },
        {
          id: 'choice-7-2',
          text: 'Investigate the conservatory',
          targetNodeId: 'node-11',
          order: 2,
        },
      ],
    },
    {
      id: 'node-8',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Secret Passage',
      imageUrl: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?w=800',
      narration:
        "Behind the grandfather portrait, a narrow passage descends into the chateau\'s bones. Your flashlight illuminates walls lined with cobwebbed ledgers and conspiracy. At the passage\'s end, you find the Duke\'s true study -- not the showpiece upstairs, but a war room. Maps of Paris mark government buildings with red X\'s. A calendar shows tonight\'s date circled with a single word: \'Judgment.\' Most disturbing is a half-written letter addressed to you, Detective Thorne. \'By the time you read this, I will be dead or imprisoned. The Velvet Guillotine is not a weapon but an order. They have infiltrated the police, the courts, even the churches. Trust no one wearing...\' The letter ends abruptly.",
      choices: [
        {
          id: 'choice-8-1',
          text: 'Confront the Duke in the cellar',
          targetNodeId: 'node-12',
          order: 1,
        },
        {
          id: 'choice-8-2',
          text: 'Investigate the Bishop on the rooftop',
          targetNodeId: 'node-13',
          order: 2,
        },
      ],
    },
    {
      id: 'node-9',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Upper Gallery',
      imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800',
      narration:
        "The gallery study has been ransacked -- drawers pulled, papers strewn, but with methodical purpose. Someone sought specific documents. The safe stands open and empty, its combination lock melted by acid. On the desk, a leather ledger lists payments to various city officials, all marked with the same initials: B.H. -- Black Hand. A photograph shows the Duke shaking hands with Police Chief Dubois at a charity event. The Chief\'s cufflink bears the same inverted cross you found on the ring. Through the window, you see two figures on the roof: the Bishop of Paris and a man in a police uniform burning documents in a brazier. They have not noticed you yet.",
      choices: [
        {
          id: 'choice-9-1',
          text: 'Confront the Duke in the cellar',
          targetNodeId: 'node-12',
          order: 1,
        },
        {
          id: 'choice-9-2',
          text: 'Climb to the rooftop',
          targetNodeId: 'node-13',
          order: 2,
        },
      ],
    },
    {
      id: 'node-10',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Underground Tunnels',
      imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800',
      narration:
        "The tunnels beneath Paris are a labyrinth of old quarries and forgotten sewers. You follow the boot prints by lantern light until you reach a junction. To the left, you hear the rumble of the Metro -- a route back to civilization and safety. To the right, chanting echoes from a hidden chamber, accompanied by the copper scent of blood and burning herbs. The voices speak in Latin, reciting what sounds like a ritual. You are not alone down here. The footsteps that followed you from the mausoleum have stopped, but you can feel eyes watching from the shadows. Whatever the Velvet Guillotine is, its heart beats in these depths.",
      choices: [
        {
          id: 'choice-10-1',
          text: 'Follow the tracks to the Metro',
          targetNodeId: 'node-14',
          order: 1,
        },
        {
          id: 'choice-10-2',
          text: 'Investigate the chanting chamber',
          targetNodeId: 'node-15',
          order: 2,
        },
      ],
    },
    {
      id: 'node-11',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Conservatory Trap',
      imageUrl: 'https://images.unsplash.com/photo-1526399232581-2ab5608b6336?w=800',
      narration:
        "The conservatory is a jungle of tropical plants and shattered glass. The sniper\'s nest is empty -- they fled when you approached. But they left gifts: a vial of tetrodotoxin, the poison of pufferfish, capable of simulating death. A medical bag contains surgical tools and a pamphlet on \'The Art of Simulated Mortality.\' Someone planned to fake a death tonight -- or many deaths. A rifle with a scope lies discarded, its stock engraved with the words \'For the Greater Good.\' A trapdoor in the floor leads to servants\' quarters below. You hear movement -- someone is still in the building, and they know you are here.",
      choices: [
        {
          id: 'choice-11-1',
          text: 'Pursue through the servants\' quarters',
          targetNodeId: 'node-14',
          order: 1,
        },
        {
          id: 'choice-11-2',
          text: 'Investigate the surgical tools further',
          targetNodeId: 'node-15',
          order: 2,
        },
      ],
    },
    {
      id: 'node-12',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Double Body',
      imageUrl: 'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=800',
      narration:
        "In the wine cellar, you find the impossible: Duke Valois alive, bound and gagged, his eyes wide with terror. The body in the ballroom was an impostor -- a lookalike planted by the Velvet Guillotine. \'They wanted to destroy me,\' the real Duke gasps when you free him. \'To take everything -- my name, my fortune, my life. The man you found upstairs was my cousin, Henri, surgically altered to replace me.\' But as he speaks, you notice inconsistencies: his hands lack the calluses of a swordsman, his accent slips occasionally. Is this the real Duke, or another layer of deception? Then voices approach -- someone is coming to check on the prisoner.",
      choices: [
        {
          id: 'choice-12-1',
          text: 'Hide with the Duke in the coal chute',
          targetNodeId: 'node-16',
          order: 1,
        },
        {
          id: 'choice-12-2',
          text: 'Escape through the dumbwaiter',
          targetNodeId: 'node-17',
          order: 2,
        },
      ],
    },
    {
      id: 'node-13',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Rooftop Revelation',
      imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=800',
      narration:
        "You emerge onto the slate rooftop to find the Bishop and Police Chief Dubois feeding documents to a brazier\'s flames. The Bishop\'s cassock bears the inverted cross of the exiled Valois line. They turn as one, their expressions calm despite being caught. \'You are persistent, Detective,\" the Chief says, almost admiringly. \'But persistence is not wisdom.\' The Bishop adds another file to the fire -- birth records, adoption papers, evidence of a conspiracy decades in the making. \'The Velvet Guillotine serves justice the courts cannot. We are the blade that falls on the corrupt.\' They outnumber you, and the roof\'s edge is slick with rain.",
      choices: [
        {
          id: 'choice-13-1',
          text: 'Leap to the adjacent balcony',
          targetNodeId: 'node-18',
          order: 1,
        },
        {
          id: 'choice-13-2',
          text: 'Use the chimney as cover',
          targetNodeId: 'node-19',
          order: 2,
        },
      ],
    },
    {
      id: 'node-14',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Faceless Corpse',
      imageUrl: 'https://images.unsplash.com/photo-1512521743077-a42eeaaa963c?w=800',
      narration:
        "The Metro tunnel leads to a makeshift surgery -- an abandoned station converted into an operating theater. On a steel table lies a body, but it has no face. Literally: the skin has been removed with surgical precision, the underlying musculature exposed like a medical diagram. On a tray nearby sits a silicone mask, still warm, bearing the exact features of Duke Valois. A surgeon in bloodied scrubs works at a desk, cataloging tools. \'The transformation is nearly complete,\" he murmurs without turning. \'Henri will make a better Duke than the original ever was. More... compliant.\' He reaches for a scalpel, finally noticing your presence. \'You should not see this. Patients must not witness the artistry.\'",
      choices: [
        {
          id: 'choice-14-1',
          text: 'Threaten the surgeon for answers',
          targetNodeId: 'node-16',
          order: 1,
        },
        {
          id: 'choice-14-2',
          text: 'Search for the real Duke\'s location',
          targetNodeId: 'node-17',
          order: 2,
        },
      ],
    },
    {
      id: 'node-15',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Occult Altar',
      imageUrl: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?w=800',
      narration:
        "The chanting leads to a cavernous chamber where robed figures circle a stone altar. On it lies a young woman -- not the Duke\'s fiancee, but a maid you glimpsed earlier. She is unconscious but alive. The robed figures wear masks of historical French executioners. At the chamber\'s center stands a guillotine, its blade wrapped in purple velvet -- the namesake of this conspiracy. A figure in papal robes addresses the assembly: \'The old order must fall so the pure may rise. The Duke\'s death is but the first cut. The Velvet Guillotine will cleanse Paris of its corrupt elite.\' They have not noticed you yet, hidden in the tunnel\'s shadow.",
      choices: [
        {
          id: 'choice-15-1',
          text: 'Create a distraction to save the maid',
          targetNodeId: 'node-18',
          order: 1,
        },
        {
          id: 'choice-15-2',
          text: 'Record evidence and retreat',
          targetNodeId: 'node-19',
          order: 2,
        },
      ],
    },
    {
      id: 'node-16',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Cellar Siege',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "Armed men burst into the cellar, their footsteps echoing on stone. You and the man claiming to be the Duke dive into a coal chute, sliding down into darkness. You emerge in the chateau\'s heating tunnels, blackened and breathless. The Duke -- or whoever he is -- clutches his side, wincing. \'They will not stop until I am dead or their puppet,\" he pants. \'The Velvet Guillotine has agents in every level of government. The Chief of Police, two judges, even a cabinet minister.\' Footsteps approach from both directions. Ahead, a coal chute leads up to the gardens. Behind, a dumbwaiter shaft ascends to the kitchens. Both offer escape, but only one leads to safety.",
      choices: [
        {
          id: 'choice-16-1',
          text: 'Take the coal chute to the gardens',
          targetNodeId: 'node-20',
          order: 1,
        },
        {
          id: 'choice-16-2',
          text: 'Climb the dumbwaiter to the kitchens',
          targetNodeId: 'node-21',
          order: 2,
        },
      ],
    },
    {
      id: 'node-17',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Shadowy Archive',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      narration:
        "You find the Duke in a hidden archive, surrounded by generations of Valois family secrets. He looks up as you enter, relief washing over his features. \'You believe me,\" he says. \'Thank God.\' The archive contains proof of everything: birth certificates showing the Duke was adopted, documents linking the Velvet Guillotine to a dozen political assassinations, and most damning -- a will leaving the entire Valois fortune to the \'Black Hand Foundation.\' But as you gather evidence, alarms blare. The archive\'s hidden door opens to reveal armed mercenaries. \'The Duke\'s will has changed,\" their leader says. \'You are no longer beneficiaries.\' They raise their weapons.",
      choices: [
        {
          id: 'choice-17-1',
          text: 'Fight your way to the garden exit',
          targetNodeId: 'node-22',
          order: 1,
        },
        {
          id: 'choice-17-2',
          text: 'Barricade and find another escape',
          targetNodeId: 'node-23',
          order: 2,
        },
      ],
    },
    {
      id: 'node-18',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Ballroom Brawl',
      imageUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800',
      narration:
        "You crash back into the ballroom through a service entrance, the Bishop\'s men moments behind. The guests have been herded into a corner by masked gunmen. Lady Elara stands at gunpoint, her earlier composure replaced by genuine fear. The Bishop himself addresses the crowd: \'The old aristocracy dies tonight. A new order rises from its ashes.\' He gestures to the guillotine now erected on the grand staircase -- the velvet-wrapped blade gleaming. You have seconds to act. A chandelier hangs above the Bishop, its chain within pistol range. Or you could try to negotiate, though his eyes suggest madness, not reason.",
      choices: [
        {
          id: 'choice-18-1',
          text: 'Shoot the chandelier chain',
          targetNodeId: 'node-20',
          order: 1,
        },
        {
          id: 'choice-18-2',
          text: 'Attempt to negotiate with the Bishop',
          targetNodeId: 'node-21',
          order: 2,
        },
      ],
    },
    {
      id: 'node-19',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Silent Evidence',
      imageUrl: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800',
      narration:
        "From your hiding place behind the chimney, you observe the Bishop and Chief finishing their work. But then Lady Elara emerges from a stairwell, her demeanor transformed -- commanding, cold, utterly in control. \'Is it done?\' she asks the Bishop. \'The impostor is dead, the real Duke captured. The fortune transfers at midnight.\' She is the mastermind. The grieving fiancee act was precisely that -- an act. She spots you in the shadows, and her smile is genuine this time. \'Detective Thorne. I hoped you would be clever enough to reach this point. Clever enough to understand that some causes require terrible sacrifices. Join us, and share in the new world we are building.\'",
      choices: [
        {
          id: 'choice-19-1',
          text: 'Refuse and attempt arrest',
          targetNodeId: 'node-22',
          order: 1,
        },
        {
          id: 'choice-19-2',
          text: 'Pretend to consider her offer',
          targetNodeId: 'node-23',
          order: 2,
        },
      ],
    },
    {
      id: 'node-20',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Garden Chase',
      imageUrl: 'https://images.unsplash.com/photo-1505567745926-ba89000d255a?w=800',
      narration:
        "The gardens become a battleground. You and the Duke sprint through hedge mazes while gunfire erupts behind you. Ahead, a stone bridge arches over a reflecting pool that feeds into the Seine beyond. The Duke stumbles, clutching his side -- the earlier injury is worse than he admitted. \'Go,\" he gasps. \'Take the evidence. I am dead either way.\' But leaving him means condemning an innocent man -- if he is innocent. At the bridge\'s center stands a figure in black: the same gunman from the mausoleum. He raises his weapon, but then pauses, looking past you. Reinforcements approach from the chateau. You are trapped between two armed groups with nowhere to run but the dark water below.",
      choices: [
        {
          id: 'choice-20-1',
          text: 'Jump into the Seine with the Duke',
          targetNodeId: 'node-24',
          order: 1,
        },
        {
          id: 'choice-20-2',
          text: 'Make a stand on the bridge',
          targetNodeId: 'node-25',
          order: 2,
        },
      ],
    },
    {
      id: 'node-21',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Burning Mansion',
      imageUrl: 'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=800',
      narration:
        "Fire spreads through the chateau with supernatural speed -- arson, calculated to destroy evidence. Smoke billows through the kitchen as you emerge from the dumbwaiter. Lady Elara stands by the garden exit, remarkably composed amid the chaos. She holds a key -- the only exit not yet consumed by flames. \'Last chance, Detective,\" she calls over the crackling flames. \'The evidence burns with this house. Without proof, you are just a disgraced detective who broke into a noble\'s home. Take my hand, and live to fight another day. Or stay, and burn with your precious truth.\' Behind her, the surgeon from the Metro station waits with a medical bag -- presumably to alter your face if you agree.",
      choices: [
        {
          id: 'choice-21-1',
          text: 'Accept her offer and escape',
          targetNodeId: 'node-26',
          order: 1,
        },
        {
          id: 'choice-21-2',
          text: 'Refuse and search for another exit',
          targetNodeId: 'node-27',
          order: 2,
        },
      ],
    },
    {
      id: 'node-22',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Standoff at Gunpoint',
      imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800',
      narration:
        "The man claiming to be the Duke reveals his true face -- literally. He tears away a latex mask to reveal the features of Henri Valois, the Duke\'s twin brother, believed dead in a childhood accident. \'Surprise, brother,\" he sneers at the real Duke, who stands frozen in horror. \'I did not drown that day. The Velvet Guillotine saved me, raised me, trained me. And now I take your place.\' Three guns are drawn: yours, Henri\'s, and the mercenary leader\'s. The real Duke is unarmed. \'The legends are true,\" the Duke whispers. \'I had a twin. He was the evil one.\' Henri laughs. \'Evil is just perspective, sibling.\'",
      choices: [
        {
          id: 'choice-22-1',
          text: 'Shoot Henri before he fires',
          targetNodeId: 'node-24',
          order: 1,
        },
        {
          id: 'choice-22-2',
          text: 'Use the Duke as a human shield',
          targetNodeId: 'node-25',
          order: 2,
        },
      ],
    },
    {
      id: 'node-23',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Poisoned Chalice',
      imageUrl: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800',
      narration:
        "Lady Elara offers you a crystal glass of wine. \'Drink with me, Detective. Seal our bargain.\' The liquid smells of almonds -- cyanide. But refusing means death by the guns trained on you. You play for time, asking about the Velvet Guillotine\'s true purpose. \'Justice,\" she says simply. \'The guillotine was not invented for cruelty but for equality -- the noble\'s neck severs as easily as the peasant\'s. We bring that equality back. Corrupt officials, predatory aristocrats, criminal elites -- all will face our blade.\' Her idealism seems genuine, which makes her more terrifying. \'The wine grows warm,\" she notes. \'Decide, or I decide for you.\' A wall safe behind her contains the antidote, but you will need a distraction to reach it.",
      choices: [
        {
          id: 'choice-23-1',
          text: 'Drink the poison and feign death',
          targetNodeId: 'node-26',
          order: 1,
        },
        {
          id: 'choice-23-2',
          text: 'Create a diversion to reach the safe',
          targetNodeId: 'node-27',
          order: 2,
        },
      ],
    },
    {
      id: 'node-24',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Edge of Reason',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "The Seine\'s waters are black and cold. You surface downstream, clinging to a wooden piling with the real Duke beside you. But waiting on the bank is Police Chief Dubois, flanked by officers. \'Detective Thorne,\" he calls, almost sympathetically. \'Step out of the water. You are under arrest for the Duke\'s murder.\' The Duke protests, but Dubois produces documents -- birth records proving this man is an impostor, fingerprints that do not match, psychiatric evaluations declaring him delusional. \'I told you we own the judges,\" Dubois murmurs as he leans close. \'The courts, the press, the police -- all ours. You cannot win. But you can survive. Drop this case, retire quietly, and live. Or pursue truth, and die in a cell labeled insane.\'",
      choices: [
        {
          id: 'choice-24-1',
          text: 'Surrender and trust the system',
          targetNodeId: 'node-28',
          order: 1,
        },
        {
          id: 'choice-24-2',
          text: 'Dive back into the Seine and escape',
          targetNodeId: 'node-29',
          order: 2,
        },
      ],
    },
    {
      id: 'node-25',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Collapsing Structure',
      imageUrl: 'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=800',
      narration:
        "The bridge crumbles under sustained gunfire. You and Henri are trapped on a collapsing span, the real Duke already fallen into the rapids below. Henri clings to a twisted girder, his mask of confidence shattered. \'Help me up!\' he screams. \'I know where the evidence is! I can give you everything -- names, accounts, the entire conspiracy!\' His hand reaches for yours, but his eyes calculate. If you pull him up, he will try to kill you -- you can see it in his posture. If you let him fall, the evidence dies with him. But then, you notice something: a waterproof satchel is strapped to his back. The documents he offers are literally on his person. The bridge groans, about to give way completely.",
      choices: [
        {
          id: 'choice-25-1',
          text: 'Save yourself and let him fall',
          targetNodeId: 'node-28',
          order: 1,
        },
        {
          id: 'choice-25-2',
          text: 'Grab the satchel and let him fall',
          targetNodeId: 'node-29',
          order: 2,
        },
      ],
    },
    {
      id: 'node-26',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Moral Compromise',
      imageUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800',
      narration:
        "You wake in a luxurious bedroom, your head pounding. Lady Elara sits by the window, reading a newspaper. \'The case is closed,\" she says without looking up. \'Duke Valois died tragically in a fire. A madman named Henri was found in the ruins, shot by unknown assailants. You, Detective Thorne, are recovering from injuries sustained heroically trying to save them.\' She turns to face you, her expression unreadable. \'We made a deal. You live, we disappear, and the Velvet Guillotine continues its work elsewhere. In exchange, you receive this.\' She tosses you a bank book -- more money than twenty years of police salary. \'You did not sell your soul, Detective. You just rented it for a while. The question is: what will you do when the lease comes due?\'",
      choices: [
        {
          id: 'choice-26-1',
          text: 'Accept the money and stay silent',
          targetNodeId: 'node-30',
          order: 1,
        },
        {
          id: 'choice-26-2',
          text: 'Secretly plan to expose them later',
          targetNodeId: 'node-31',
          order: 2,
        },
      ],
    },
    {
      id: 'node-27',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Final Puzzle',
      imageUrl: 'https://images.unsplash.com/photo-1555532538-dcdbd01d373d?w=800',
      narration:
        "You feign drinking the poison, then throw the glass in Lady Elara\'s face. In the confusion, you reach the wall safe -- a combination lock requiring six digits. Behind you, Elara recovers, her gun aimed at your back. \'One try, Detective. Guess wrong, and I shoot. Guess right, and you have a chance.\' You scan the room for clues: a painting dated 1789, the year of the Revolution. A clock stopped at 12:12. A book opened to page 514. The numbers swirl in your mind. The Velvet Guillotine was founded in 1793, the year of the Terror. Robespierre died in July 1794. Your fingers hover over the dial. Elara\'s finger tightens on the trigger. This is your last chance.",
      choices: [
        {
          id: 'choice-27-1',
          text: 'Try combination 179394',
          targetNodeId: 'node-30',
          order: 1,
        },
        {
          id: 'choice-27-2',
          text: 'Try combination 178912',
          targetNodeId: 'node-31',
          order: 2,
        },
      ],
    },
    {
      id: 'node-28',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Gathering',
      imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800',
      narration:
        "Morning light finds you at police headquarters, surrounded by officers and officials. The case files are spread before you -- but they tell a story different from what you witnessed. According to official records, you are the prime suspect in Duke Valois\'s murder. Chief Dubois smiles from across the table. \'Evidence is a funny thing, Thorne. It can point in so many directions depending on who presents it.\' You realize the depth of the trap: they have witnesses placing you at the scene, fingerprints on the murder weapon, motive provided by gambling debts you do not actually have. The room\'s occupants are all Dubois\'s men. But in the corner stands a young officer -- new, uncertain, watching you with troubled eyes. He might be an ally, or another trap.",
      choices: [
        {
          id: 'choice-28-1',
          text: 'Accuse Chief Dubois publicly',
          targetNodeId: 'node-32',
          order: 1,
        },
        {
          id: 'choice-28-2',
          text: 'Try to recruit the young officer',
          targetNodeId: 'node-33',
          order: 2,
        },
      ],
    },
    {
      id: 'node-29',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Vigilante\'s Path',
      imageUrl: 'https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=800',
      narration:
        "You surface in a boatyard, the satchel of evidence intact. But you are now a fugitive -- every police station, every newspaper, every telephone is potentially compromised. In the satchel, you find more than you bargained for: not just proof of the Velvet Guillotine\'s crimes, but evidence that implicates half the government. If you go public, the Republic itself might fall. A forger\'s shop nearby offers new identity papers. A newspaper office begs for a story that would make history. A church sanctuary promises absolution and silence. You have the power to expose everything, but exposure might mean anarchy. Or you could use the evidence selectively, becoming judge and jury yourself.",
      choices: [
        {
          id: 'choice-29-1',
          text: 'Go to the newspapers with everything',
          targetNodeId: 'node-32',
          order: 1,
        },
        {
          id: 'choice-29-2',
          text: 'Become a vigilante using the evidence',
          targetNodeId: 'node-33',
          order: 2,
        },
      ],
    },
    {
      id: 'node-30',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Survivor\'s Guilt',
      imageUrl: 'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=800',
      narration:
        "Three months later. The case is officially closed: tragic fire, tragic deaths, no surviving suspects. You sit in a cafe, watching Paris go about its business, your bank account fat with blood money. The newspaper reports Chief Dubois\'s promotion, Lady Elara\'s engagement to a cabinet minister, the Bishop\'s new cathedral. The Velvet Guillotine continues unseen, but you know they are there -- watching, waiting, ensuring your silence. A reporter approaches your table. \'Detective Thorne? I am investigating the Valois fire. I found evidence of accelerant. Will you comment?\' Her eyes are sharp, ambitious, uncorrupted. She could be your redemption or your downfall. If you speak, they will kill you both. If you stay silent, the truth dies forever.",
      choices: [
        {
          id: 'choice-30-1',
          text: 'Tell her everything and accept consequences',
          targetNodeId: 'node-34',
          order: 1,
        },
        {
          id: 'choice-30-2',
          text: 'Warn her off and protect yourself',
          targetNodeId: 'node-35',
          order: 2,
        },
      ],
    },
    {
      id: 'node-31',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Empty Victory',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "The safe opens, but it contains not an antidote -- Lady Elara was bluffing -- but a single photograph. It shows you, twenty years ago, as a child standing with your father outside a courthouse. The inscription reads: \'The innocent must sometimes suffer for justice. Your father understood this.\' You remember now: your father was a judge who committed suicide after a scandal. Or so you were told. Lady Elara\'s voice comes from behind: \'He was one of us, Detective. One of the original Velvet Guillotine. He died protecting our secrets. You have his eyes. His dedication. His willingness to sacrifice.\' The poison is real, and it is beginning to work. Your vision blurs. Elara offers a real antidote, but the price is your soul.",
      choices: [
        {
          id: 'choice-31-1',
          text: 'Take the antidote and join them',
          targetNodeId: 'node-34',
          order: 1,
        },
        {
          id: 'choice-31-2',
          text: 'Refuse and accept death',
          targetNodeId: 'node-35',
          order: 2,
        },
      ],
    },
    {
      id: 'node-32',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Final Verdict: Corruption',
      imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800',
      narration:
        "Chief Dubois slides a badge across the table -- not a police badge, but a silver medallion bearing the inverted cross. \'You are resourceful, Thorne. Too resourceful to waste. We are offering you a place among us. Not as a puppet, but as a partner. Help us reshape this corrupt city from within. Use our resources, our network, our power. In five years, you could be Chief. In ten, Minister of Justice. Or...\' He gestures to the door, where two officers wait with handcuffs. \'Or you can join the Duke in an unmarked grave. Your reputation destroyed. Your name forgotten. Choose now. The door to power opens rarely, and never twice for the same man.\'",
      choices: [
        {
          id: 'choice-32-1',
          text: 'Accept the badge and the power',
          targetNodeId: 'node-36',
          order: 1,
        },
        {
          id: 'choice-32-2',
          text: 'Reject the offer and face the consequences',
          targetNodeId: 'node-37',
          order: 2,
        },
      ],
    },
    {
      id: 'node-33',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Final Verdict: Truth',
      imageUrl: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?w=800',
      narration:
        "The evidence hits the newspapers like a thunderclap. Within hours, the government reels -- resignations, arrests, suicides. Chief Dubois is found dead, apparently by his own hand. The Bishop flees to Rome. Lady Elara disappears, leaving only a peacock feather on her pillow. You are hailed as a hero by the people, a pariah by the powerful. But the story is not over. A summons arrives from the President himself: either accept a position in the new government he is forming, or leave France forever. \'Heroes are useful,\" the letter reads, \'but only while they serve. Will you serve, Detective? Or will you run?\'",
      choices: [
        {
          id: 'choice-33-1',
          text: 'Join the new government',
          targetNodeId: 'node-36',
          order: 1,
        },
        {
          id: 'choice-33-2',
          text: 'Leave France and start anew',
          targetNodeId: 'node-38',
          order: 2,
        },
      ],
    },
    {
      id: 'node-34',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Final Verdict: Shadow',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "The reporter publishes her story, but it is buried on page twelve -- edited, neutered, useless. She is transferred to a provincial paper. You are demoted to desk duty, then transferred to missing persons, then cold cases. The system protects its own. But you learn to work in shadows. You build a network of the disaffected -- honest cops, idealistic reporters, victims seeking justice. Two years later, a case comes across your desk: a noblewoman found dead, a peacock feather on her body, a velvet-wrapped blade nearby. The Velvet Guillotine has returned, and this time, you are ready. Not as a detective, but as something new. Something they created through their cruelty.",
      choices: [
        {
          id: 'choice-34-1',
          text: 'Pursue the new case as a vigilante',
          targetNodeId: 'node-38',
          order: 1,
        },
        {
          id: 'choice-34-2',
          text: 'Build a new case from the shadows',
          targetNodeId: 'node-39',
          order: 2,
        },
      ],
    },
    {
      id: 'node-35',
      storyId: 'story-velvet-guillotine',
      type: 'decision',
      title: 'Final Verdict: Martyr',
      imageUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800',
      narration:
        "The cell is small and cold. The trial was swift and fixed -- evidence disappeared, witnesses recanted, your own lawyer worked against you. Guilty of murder, corruption, and conspiracy. The sentence: life imprisonment. Lady Elara visits you once, her expression unreadable. \'Your father would be proud,\" she says. \'He too chose principle over survival. He died in prison, you know. Not suicide -- we killed him when he threatened to talk. I wonder if you will be as principled when the despair truly sets in.\' She leaves a peacock feather on the bars. In your hand, you clutch a single piece of real evidence, smuggled in by a sympathetic guard. One chance. One gamble. One way out.",
      choices: [
        {
          id: 'choice-35-1',
          text: 'Use the evidence to bargain for freedom',
          targetNodeId: 'node-37',
          order: 1,
        },
        {
          id: 'choice-35-2',
          text: 'Use the evidence to expose them from prison',
          targetNodeId: 'node-39',
          order: 2,
        },
      ],
    },
    {
      id: 'node-36',
      storyId: 'story-velvet-guillotine',
      type: 'ending',
      title: 'ENDING: The Gray Cardinal',
      imageUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800',
      narration:
        "Five years later, you sit in an office larger than your old apartment, with windows overlooking Paris. The velvet-wrapped blade hangs on your wall -- a trophy, a reminder, a warning. You have done terrible things to achieve this position: silenced witnesses, destroyed evidence, arranged accidents for those who opposed progress. But Paris is cleaner now. Corruption is less blatant. The poor suffer slightly less. You tell yourself it is worth it -- that power used carefully can accomplish what justice cannot. Tonight, Lady Elara dines with you, discussing which judge to promote, which minister to remove. You are not the hero you imagined. But you are not the monster you feared either. You are the Gray Cardinal: the power behind the throne, the velvet hand that guides the guillotine. And Paris, for better or worse, is yours to shape.",
      choices: [],
    },
    {
      id: 'node-37',
      storyId: 'story-velvet-guillotine',
      type: 'ending',
      title: 'ENDING: The Broken Badge',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration:
        "The prison door clangs shut behind you, or perhaps it is the door of a steamer trunk bound for Algiers -- exile instead of incarceration, negotiated by a lawyer who never meets your eyes. Either way, your life as Detective Thorne is over. The evidence you gathered is destroyed, dismissed, or absorbed into the very corruption you fought. You sit in darkness -- literal or metaphorical -- and wonder where it went wrong. Perhaps the moment you accepted the case. Perhaps the moment you were born into a world that rewards cruelty over justice. A letter arrives, no return address. Inside: a peacock feather and a single word -- \'Regards.\' The Velvet Guillotine has won. But as you crush the feather in your fist, you vow: while you breathe, while you remember, the fight continues. Broken, yes. Defeated, perhaps. But never finished.",
      choices: [],
    },
    {
      id: 'node-38',
      storyId: 'story-velvet-guillotine',
      type: 'ending',
      title: 'ENDING: The Orient Express',
      imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800',
      narration:
        "The train rattles eastward through snow-covered mountains, carrying you away from everything you knew. Paris fades behind, its corruption, its compromises, its velvet-wrapped blades. You share a compartment with a mysterious countess, a nervous diplomat, and a Belgian detective who studies you with knowing eyes. In your pocket rests a new identity, forged papers, and enough money to start again -- earned through evidence sold to the highest bidder, or stolen from Lady Elara\'s safe, or given by grateful victims you saved along the way. The past is past. The future stretches toward Istanbul, Baghdad, places where your reputation has not preceded you. A murder occurs in the next carriage -- a locked room, a disappeared weapon, a web of secrets. The Belgian detective rises to investigate, then pauses, looking back at you. \'Care to assist, mon ami?\' he asks. You smile. The game, it seems, continues. New city. New mystery. Same detective.",
      choices: [],
    },
    {
      id: 'node-39',
      storyId: 'story-velvet-guillotine',
      type: 'ending',
      title: 'ENDING: The Last Stand',
      imageUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800',
      narration:
        "The cafe erupts in gunfire. You knew it would -- knew that exposing the evidence, publishing the names, shining light into their shadows would bring retaliation. Lady Elara dies first, her eyes wide with genuine surprise that you would choose destruction over survival. Chief Dubois falls next, his corrupt heart stopping beneath your bullets. The Bishop\'s bodyguards get you in the end -- three shots to the chest, cold pavement against your back. But as you bleed, you see the morning papers scattered around the cafe, your story on every front page. The people are reading. They are learning. They are awakening. Someone kneels beside you -- the young officer from headquarters, now holding your hand, tears in his eyes. \'It worked,\" he whispers. \'They are already falling. The ministers resigning. The arrests beginning.\' You smile, tasting copper. The Velvet Guillotine will survive -- it is too deep, too ancient to kill entirely. But tonight, you have cut deep into its flesh. Tonight, justice has its due. Your vision fades, but the truth you unleashed burns brighter than any darkness. The last thing you see: morning light over Paris, a city slightly cleaner than yesterday. Worth it. All of it. Worth it.",
      choices: [],
    },
  ],
};
