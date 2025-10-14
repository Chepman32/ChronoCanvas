import { Language } from '../../localization/translations';

interface StoryTranslations {
  title: string;
  description: string;
  author: string;
  nodes: {
    [nodeId: string]: {
      title: string;
      narration: string;
      choices: { [choiceId: string]: { text: string; description?: string } };
    };
  };
}

export const enchantedForestStoryTranslations: Record<
  Language,
  StoryTranslations
> = {
  en: {
    title: 'The Enchanted Forest',
    description:
      'A mystical journey through an ancient forest where every choice shapes your destiny.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'The Forest Entrance',
        narration:
          'You stand at the edge of an ancient forest. The trees tower above you, their branches forming a canopy that filters the sunlight into dancing patterns on the forest floor. A worn path leads deeper into the woods, while a stream glistens to your right.',
        choices: {
          'choice-1': {
            text: 'Follow the worn path',
            description: 'The path looks well-traveled',
          },
          'choice-2': {
            text: 'Follow the stream',
            description: 'The water sparkles invitingly',
          },
        },
      },
      'node-2': {
        title: 'The Ancient Oak',
        narration:
          'The path leads you to a massive oak tree, its trunk wider than a house. Strange symbols are carved into its bark, glowing faintly with an ethereal light. You hear whispers in the wind.',
        choices: {
          'choice-3': { text: 'Touch the glowing symbols' },
          'choice-4': { text: 'Continue past the tree' },
        },
      },
      'node-3': {
        title: 'The Crystal Pool',
        narration:
          'Following the stream, you discover a crystal-clear pool. The water is so transparent you can see colorful fish swimming below. In the center of the pool, a small island holds a single white flower.',
        choices: {
          'choice-5': { text: 'Wade to the island' },
          'choice-6': { text: 'Rest by the pool' },
        },
      },
      'node-4': {
        title: 'The Forest Guardian',
        narration:
          'Your choice awakens the forest guardian, a majestic spirit of light and nature. She thanks you for your courage and grants you the gift of understanding all living things. You leave the forest forever changed, able to hear the whispers of nature.',
        choices: {},
      },
      'node-5': {
        title: 'Peaceful Journey',
        narration:
          'You continue your journey through the forest, enjoying its beauty and tranquility. As you emerge on the other side, you feel refreshed and at peace. The forest has given you a gift of serenity that will stay with you always.',
        choices: {},
      },
    },
  },

  ru: {
    title: 'Зачарованный лес',
    description:
      'Мистическое путешествие по древнему лесу, где каждый выбор определяет вашу судьбу.',
    author: 'Елена Риверс',
    nodes: {
      'node-1': {
        title: 'Вход в лес',
        narration:
          'Вы стоите на краю древнего леса. Деревья возвышаются над вами, их ветви образуют навес, который фильтрует солнечный свет в танцующие узоры на лесной подстилке. Протоптанная тропа ведёт глубже в лес, а справа блестит ручей.',
        choices: {
          'choice-1': {
            text: 'Следовать по протоптанной тропе',
            description: 'Тропа выглядит хорошо утоптанной',
          },
          'choice-2': {
            text: 'Следовать вдоль ручья',
            description: 'Вода искрится заманчиво',
          },
        },
      },
      'node-2': {
        title: 'Древний дуб',
        narration:
          'Тропа приводит вас к массивному дубу, ствол которого шире дома. Странные символы вырезаны на его коре, слабо светясь эфирным светом. Вы слышите шёпот на ветру.',
        choices: {
          'choice-3': { text: 'Прикоснуться к светящимся символам' },
          'choice-4': { text: 'Пройти мимо дерева' },
        },
      },
      'node-3': {
        title: 'Кристальный пруд',
        narration:
          'Следуя вдоль ручья, вы обнаруживаете кристально чистый пруд. Вода настолько прозрачна, что вы можете видеть разноцветных рыб, плавающих внизу. В центре пруда небольшой остров с единственным белым цветком.',
        choices: {
          'choice-5': { text: 'Пройти вброд к острову' },
          'choice-6': { text: 'Отдохнуть у пруда' },
        },
      },
      'node-4': {
        title: 'Хранитель леса',
        narration:
          'Ваш выбор пробуждает хранителя леса, величественного духа света и природы. Она благодарит вас за смелость и дарует вам дар понимания всех живых существ. Вы покидаете лес навсегда изменившимся, способным слышать шёпот природы.',
        choices: {},
      },
      'node-5': {
        title: 'Мирное путешествие',
        narration:
          'Вы продолжаете своё путешествие по лесу, наслаждаясь его красотой и спокойствием. Когда вы выходите с другой стороны, вы чувствуете себя обновлённым и умиротворённым. Лес подарил вам дар безмятежности, который останется с вами навсегда.',
        choices: {},
      },
    },
  },

  es: {
    title: 'El bosque encantado',
    description:
      'Un viaje místico a través de un bosque antiguo donde cada elección moldea tu destino.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'La entrada del bosque',
        narration:
          'Te encuentras al borde de un bosque antiguo. Los árboles se elevan sobre ti, sus ramas forman un dosel que filtra la luz del sol en patrones danzantes sobre el suelo del bosque. Un sendero desgastado conduce más profundo en el bosque, mientras un arroyo brilla a tu derecha.',
        choices: {
          'choice-1': {
            text: 'Seguir el sendero desgastado',
            description: 'El sendero parece muy transitado',
          },
          'choice-2': {
            text: 'Seguir el arroyo',
            description: 'El agua brilla invitadoramente',
          },
        },
      },
      'node-2': {
        title: 'El roble antiguo',
        narration:
          'El sendero te lleva a un roble masivo, su tronco más ancho que una casa. Símbolos extraños están tallados en su corteza, brillando débilmente con una luz etérea. Escuchas susurros en el viento.',
        choices: {
          'choice-3': { text: 'Tocar los símbolos brillantes' },
          'choice-4': { text: 'Continuar más allá del árbol' },
        },
      },
      'node-3': {
        title: 'La piscina de cristal',
        narration:
          'Siguiendo el arroyo, descubres una piscina cristalina. El agua es tan transparente que puedes ver peces coloridos nadando abajo. En el centro de la piscina, una pequeña isla sostiene una sola flor blanca.',
        choices: {
          'choice-5': { text: 'Vadear hasta la isla' },
          'choice-6': { text: 'Descansar junto a la piscina' },
        },
      },
      'node-4': {
        title: 'El guardián del bosque',
        narration:
          'Tu elección despierta al guardián del bosque, un espíritu majestuoso de luz y naturaleza. Ella te agradece por tu valentía y te otorga el don de comprender a todos los seres vivos. Dejas el bosque cambiado para siempre, capaz de escuchar los susurros de la naturaleza.',
        choices: {},
      },
      'node-5': {
        title: 'Viaje pacífico',
        narration:
          'Continúas tu viaje por el bosque, disfrutando de su belleza y tranquilidad. Al emerger del otro lado, te sientes renovado y en paz. El bosque te ha dado un regalo de serenidad que permanecerá contigo siempre.',
        choices: {},
      },
    },
  },

  de: {
    title: 'Der verzauberte Wald',
    description:
      'Eine mystische Reise durch einen uralten Wald, wo jede Entscheidung dein Schicksal formt.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'Der Waldeingang',
        narration:
          'Du stehst am Rand eines uralten Waldes. Die Bäume ragen über dir auf, ihre Äste bilden ein Blätterdach, das das Sonnenlicht in tanzende Muster auf dem Waldboden filtert. Ein ausgetretener Pfad führt tiefer in den Wald, während rechts von dir ein Bach glitzert.',
        choices: {
          'choice-1': {
            text: 'Dem ausgetretenen Pfad folgen',
            description: 'Der Pfad sieht viel begangen aus',
          },
          'choice-2': {
            text: 'Dem Bach folgen',
            description: 'Das Wasser funkelt einladend',
          },
        },
      },
      'node-2': {
        title: 'Die uralte Eiche',
        narration:
          'Der Pfad führt dich zu einer massiven Eiche, deren Stamm breiter als ein Haus ist. Seltsame Symbole sind in ihre Rinde geschnitzt und leuchten schwach mit einem ätherischen Licht. Du hörst Flüstern im Wind.',
        choices: {
          'choice-3': { text: 'Die leuchtenden Symbole berühren' },
          'choice-4': { text: 'Am Baum vorbeigehen' },
        },
      },
      'node-3': {
        title: 'Der Kristallteich',
        narration:
          'Dem Bach folgend entdeckst du einen kristallklaren Teich. Das Wasser ist so durchsichtig, dass du bunte Fische darunter schwimmen sehen kannst. In der Mitte des Teiches hält eine kleine Insel eine einzelne weiße Blume.',
        choices: {
          'choice-5': { text: 'Zur Insel waten' },
          'choice-6': { text: 'Am Teich ausruhen' },
        },
      },
      'node-4': {
        title: 'Der Waldhüter',
        narration:
          'Deine Wahl erweckt den Waldhüter, einen majestätischen Geist aus Licht und Natur. Sie dankt dir für deinen Mut und gewährt dir die Gabe, alle Lebewesen zu verstehen. Du verlässt den Wald für immer verändert, fähig, das Flüstern der Natur zu hören.',
        choices: {},
      },
      'node-5': {
        title: 'Friedliche Reise',
        narration:
          'Du setzt deine Reise durch den Wald fort und genießt seine Schönheit und Ruhe. Als du auf der anderen Seite herauskommst, fühlst du dich erfrischt und friedlich. Der Wald hat dir ein Geschenk der Gelassenheit gegeben, das für immer bei dir bleiben wird.',
        choices: {},
      },
    },
  },

  fr: {
    title: 'La forêt enchantée',
    description:
      'Un voyage mystique à travers une forêt ancienne où chaque choix façonne votre destin.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: "L'entrée de la forêt",
        narration:
          "Vous vous tenez au bord d'une forêt ancienne. Les arbres s'élèvent au-dessus de vous, leurs branches formant une canopée qui filtre la lumière du soleil en motifs dansants sur le sol de la forêt. Un sentier usé mène plus profondément dans les bois, tandis qu'un ruisseau scintille à votre droite.",
        choices: {
          'choice-1': {
            text: 'Suivre le sentier usé',
            description: 'Le sentier semble bien fréquenté',
          },
          'choice-2': {
            text: 'Suivre le ruisseau',
            description: "L'eau scintille de manière invitante",
          },
        },
      },
      'node-2': {
        title: 'Le chêne ancien',
        narration:
          "Le sentier vous mène à un chêne massif, son tronc plus large qu'une maison. D'étranges symboles sont gravés dans son écorce, brillant faiblement d'une lumière éthérée. Vous entendez des chuchotements dans le vent.",
        choices: {
          'choice-3': { text: 'Toucher les symboles lumineux' },
          'choice-4': { text: "Continuer au-delà de l'arbre" },
        },
      },
      'node-3': {
        title: 'La piscine de cristal',
        narration:
          "En suivant le ruisseau, vous découvrez une piscine cristalline. L'eau est si transparente que vous pouvez voir des poissons colorés nager en dessous. Au centre de la piscine, une petite île porte une seule fleur blanche.",
        choices: {
          'choice-5': { text: "Patauger jusqu'à l'île" },
          'choice-6': { text: 'Se reposer près de la piscine' },
        },
      },
      'node-4': {
        title: 'Le gardien de la forêt',
        narration:
          "Votre choix réveille le gardien de la forêt, un esprit majestueux de lumière et de nature. Elle vous remercie pour votre courage et vous accorde le don de comprendre tous les êtres vivants. Vous quittez la forêt changé à jamais, capable d'entendre les murmures de la nature.",
        choices: {},
      },
      'node-5': {
        title: 'Voyage paisible',
        narration:
          "Vous continuez votre voyage à travers la forêt, profitant de sa beauté et de sa tranquillité. En émergeant de l'autre côté, vous vous sentez rafraîchi et en paix. La forêt vous a offert un cadeau de sérénité qui restera avec vous pour toujours.",
        choices: {},
      },
    },
  },

  pt: {
    title: 'A floresta encantada',
    description:
      'Uma jornada mística através de uma floresta antiga onde cada escolha molda seu destino.',
    author: 'Elena Rivers',
    nodes: {
      'node-1': {
        title: 'A entrada da floresta',
        narration:
          'Você está na beira de uma floresta antiga. As árvores se elevam acima de você, seus galhos formando um dossel que filtra a luz do sol em padrões dançantes no chão da floresta. Um caminho desgastado leva mais fundo na mata, enquanto um riacho brilha à sua direita.',
        choices: {
          'choice-1': {
            text: 'Seguir o caminho desgastado',
            description: 'O caminho parece bem percorrido',
          },
          'choice-2': {
            text: 'Seguir o riacho',
            description: 'A água brilha convidativamente',
          },
        },
      },
      'node-2': {
        title: 'O carvalho antigo',
        narration:
          'O caminho leva você a um carvalho massivo, seu tronco mais largo que uma casa. Símbolos estranhos estão esculpidos em sua casca, brilhando fracamente com uma luz etérea. Você ouve sussurros no vento.',
        choices: {
          'choice-3': { text: 'Tocar os símbolos brilhantes' },
          'choice-4': { text: 'Continuar além da árvore' },
        },
      },
      'node-3': {
        title: 'A piscina de cristal',
        narration:
          'Seguindo o riacho, você descobre uma piscina cristalina. A água é tão transparente que você pode ver peixes coloridos nadando abaixo. No centro da piscina, uma pequena ilha segura uma única flor branca.',
        choices: {
          'choice-5': { text: 'Vadear até a ilha' },
          'choice-6': { text: 'Descansar perto da piscina' },
        },
      },
      'node-4': {
        title: 'O guardião da floresta',
        narration:
          'Sua escolha desperta o guardião da floresta, um espírito majestoso de luz e natureza. Ela agradece por sua coragem e concede a você o dom de compreender todos os seres vivos. Você deixa a floresta para sempre mudado, capaz de ouvir os sussurros da natureza.',
        choices: {},
      },
      'node-5': {
        title: 'Jornada pacífica',
        narration:
          'Você continua sua jornada pela floresta, apreciando sua beleza e tranquilidade. Ao emergir do outro lado, você se sente renovado e em paz. A floresta lhe deu um presente de serenidade que ficará com você para sempre.',
        choices: {},
      },
    },
  },

  ja: {
    title: '魔法の森',
    description:
      '古代の森を巡る神秘的な旅。すべての選択があなたの運命を形作ります。',
    author: 'エレナ・リバーズ',
    nodes: {
      'node-1': {
        title: '森の入口',
        narration:
          'あなたは古代の森の端に立っています。木々があなたの上にそびえ立ち、その枝が天蓋を形成し、太陽光を森の床に踊るパターンにフィルタリングしています。使い古された道が森の奥深くへと続き、右側には小川がきらめいています。',
        choices: {
          'choice-1': {
            text: '使い古された道を進む',
            description: '道はよく使われているようです',
          },
          'choice-2': {
            text: '小川に沿って進む',
            description: '水が魅力的に輝いています',
          },
        },
      },
      'node-2': {
        title: '古代の樫の木',
        narration:
          '道はあなたを巨大な樫の木へと導きます。その幹は家よりも広いです。奇妙な記号が樹皮に刻まれ、かすかに幽玄な光で輝いています。風の中で囁き声が聞こえます。',
        choices: {
          'choice-3': { text: '輝く記号に触れる' },
          'choice-4': { text: '木を通り過ぎて進む' },
        },
      },
      'node-3': {
        title: '水晶の池',
        narration:
          '小川に沿って進むと、水晶のように透明な池を発見します。水はとても透明で、下で泳ぐカラフルな魚が見えます。池の中央には、一輪の白い花を持つ小さな島があります。',
        choices: {
          'choice-5': { text: '島まで歩いて渡る' },
          'choice-6': { text: '池のそばで休む' },
        },
      },
      'node-4': {
        title: '森の守護者',
        narration:
          'あなたの選択は森の守護者を目覚めさせます。光と自然の荘厳な精霊です。彼女はあなたの勇気に感謝し、すべての生き物を理解する贈り物を授けます。あなたは永遠に変わった状態で森を去り、自然の囁きを聞くことができるようになります。',
        choices: {},
      },
      'node-5': {
        title: '平和な旅',
        narration:
          'あなたは森を通る旅を続け、その美しさと静けさを楽しみます。反対側に出ると、リフレッシュして平和を感じます。森はあなたに永遠に残る静寂の贈り物を与えてくれました。',
        choices: {},
      },
    },
  },

  zh: {
    title: '魔法森林',
    description: '穿越古老森林的神秘之旅，每个选择都塑造你的命运。',
    author: '艾琳娜·里弗斯',
    nodes: {
      'node-1': {
        title: '森林入口',
        narration:
          '你站在一片古老森林的边缘。树木高耸在你上方，它们的树枝形成一个树冠，将阳光过滤成森林地面上舞动的图案。一条磨损的小径通向森林深处，而一条小溪在你右侧闪闪发光。',
        choices: {
          'choice-1': {
            text: '沿着磨损的小径走',
            description: '这条路看起来经常有人走',
          },
          'choice-2': {
            text: '沿着小溪走',
            description: '水面闪烁着诱人的光芒',
          },
        },
      },
      'node-2': {
        title: '古老的橡树',
        narration:
          '小径将你带到一棵巨大的橡树前，它的树干比房子还宽。奇怪的符号刻在它的树皮上，微弱地发出空灵的光芒。你听到风中的低语。',
        choices: {
          'choice-3': { text: '触摸发光的符号' },
          'choice-4': { text: '继续走过这棵树' },
        },
      },
      'node-3': {
        title: '水晶池',
        narration:
          '沿着小溪走，你发现了一个水晶般清澈的池塘。水是如此透明，你可以看到下面游动的彩色鱼。在池塘中央，一个小岛上有一朵白色的花。',
        choices: {
          'choice-5': { text: '涉水到岛上' },
          'choice-6': { text: '在池边休息' },
        },
      },
      'node-4': {
        title: '森林守护者',
        narration:
          '你的选择唤醒了森林守护者，一个光明与自然的威严精灵。她感谢你的勇气，并赋予你理解所有生物的天赋。你永远改变了，离开森林时能够听到大自然的低语。',
        choices: {},
      },
      'node-5': {
        title: '平静的旅程',
        narration:
          '你继续穿越森林的旅程，享受它的美丽和宁静。当你从另一边出来时，你感到焕然一新，内心平静。森林给了你一份宁静的礼物，将永远伴随着你。',
        choices: {},
      },
    },
  },

  ko: {
    title: '마법의 숲',
    description:
      '모든 선택이 당신의 운명을 만드는 고대 숲을 통한 신비로운 여정.',
    author: '엘레나 리버스',
    nodes: {
      'node-1': {
        title: '숲의 입구',
        narration:
          '당신은 고대 숲의 가장자리에 서 있습니다. 나무들이 당신 위로 우뚝 솟아 있고, 그들의 가지가 캐노피를 형성하여 햇빛을 숲 바닥의 춤추는 패턴으로 걸러냅니다. 닳은 길이 숲 깊숙이 이어지고, 오른쪽에는 개울이 반짝입니다.',
        choices: {
          'choice-1': {
            text: '닳은 길을 따라가기',
            description: '길이 자주 다녀진 것 같습니다',
          },
          'choice-2': {
            text: '개울을 따라가기',
            description: '물이 매력적으로 반짝입니다',
          },
        },
      },
      'node-2': {
        title: '고대 참나무',
        narration:
          '길은 당신을 거대한 참나무로 인도합니다. 그 줄기는 집보다 넓습니다. 이상한 기호들이 나무껍질에 새겨져 있고, 희미하게 영묘한 빛으로 빛나고 있습니다. 바람 속에서 속삭임이 들립니다.',
        choices: {
          'choice-3': { text: '빛나는 기호를 만지기' },
          'choice-4': { text: '나무를 지나 계속 가기' },
        },
      },
      'node-3': {
        title: '수정 연못',
        narration:
          '개울을 따라가다 보면 수정처럼 맑은 연못을 발견합니다. 물이 너무 투명해서 아래에서 헤엄치는 형형색색의 물고기를 볼 수 있습니다. 연못 중앙에는 하얀 꽃 한 송이가 있는 작은 섬이 있습니다.',
        choices: {
          'choice-5': { text: '섬까지 걸어가기' },
          'choice-6': { text: '연못 옆에서 쉬기' },
        },
      },
      'node-4': {
        title: '숲의 수호자',
        narration:
          '당신의 선택은 숲의 수호자를 깨웁니다. 빛과 자연의 장엄한 정령입니다. 그녀는 당신의 용기에 감사하며 모든 생명체를 이해하는 선물을 부여합니다. 당신은 영원히 변화된 채 숲을 떠나며, 자연의 속삭임을 들을 수 있게 됩니다.',
        choices: {},
      },
      'node-5': {
        title: '평화로운 여정',
        narration:
          '당신은 숲을 통한 여정을 계속하며 그 아름다움과 평온함을 즐깁니다. 반대편으로 나올 때 당신은 상쾌하고 평화로움을 느낍니다. 숲은 당신에게 영원히 함께할 평온의 선물을 주었습니다.',
        choices: {},
      },
    },
  },

  uk: {
    title: 'Зачарований ліс',
    description:
      'Містична подорож стародавнім лісом, де кожен вибір формує вашу долю.',
    author: 'Олена Ріверс',
    nodes: {
      'node-1': {
        title: 'Вхід до лісу',
        narration:
          'Ви стоїте на краю стародавнього лісу. Дерева височать над вами, їхні гілки утворюють навіс, який фільтрує сонячне світло в танцюючі візерунки на лісовій підстилці. Протоптана стежка веде глибше в ліс, а праворуч блищить струмок.',
        choices: {
          'choice-1': {
            text: 'Йти протоптаною стежкою',
            description: 'Стежка виглядає добре витоптаною',
          },
          'choice-2': {
            text: 'Йти вздовж струмка',
            description: 'Вода блищить привабливо',
          },
        },
      },
      'node-2': {
        title: 'Стародавній дуб',
        narration:
          'Стежка приводить вас до масивного дуба, стовбур якого ширший за будинок. Дивні символи вирізані на його корі, слабко світячись ефірним світлом. Ви чуєте шепіт на вітрі.',
        choices: {
          'choice-3': { text: 'Доторкнутися до світних символів' },
          'choice-4': { text: 'Пройти повз дерево' },
        },
      },
      'node-3': {
        title: 'Кришталевий ставок',
        narration:
          'Йдучи вздовж струмка, ви виявляєте кришталево чистий ставок. Вода настільки прозора, що ви можете бачити барвистих риб, що пливуть внизу. У центрі ставка невеликий острів з єдиною білою квіткою.',
        choices: {
          'choice-5': { text: 'Перейти вбрід до острова' },
          'choice-6': { text: 'Відпочити біля ставка' },
        },
      },
      'node-4': {
        title: 'Хранитель лісу',
        narration:
          'Ваш вибір пробуджує хранителя лісу, величного духа світла і природи. Вона дякує вам за сміливість і дарує вам дар розуміння всіх живих істот. Ви залишаєте ліс назавжди зміненим, здатним чути шепіт природи.',
        choices: {},
      },
      'node-5': {
        title: 'Мирна подорож',
        narration:
          'Ви продовжуєте свою подорож лісом, насолоджуючись його красою та спокоєм. Коли ви виходите з іншого боку, ви відчуваєте себе оновленим і умиротвореним. Ліс подарував вам дар безтурботності, який залишиться з вами назавжди.',
        choices: {},
      },
    },
  },
};
