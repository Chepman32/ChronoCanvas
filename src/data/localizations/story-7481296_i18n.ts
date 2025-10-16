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

export const story_7481296StoryTranslations: Record<Language, StoryTranslations> = {
  // English
  en: {
    title: 'Midnight Missing',
    description: 'When a young woman vanishes without a trace, a determined detective must navigate city shadows and unravel a web of clues before time runs out. Every decision could mean a life saved or a trail gone cold.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-19': {
        title: 'Pyrrhic Victory',
        narration: 'Time slows as you squeeze the trigger. The gunshot echoes through the cavernous warehouse. **Alan** staggers backward, the knife dropping from his hand. Your shot strikes true, incapacitating him before he could harm **Emily**. Officers swarm in and Emily runs toward you, but not before a stray piece of shrapnel from the concrete grazes her side. She winces in pain, bleeding lightly – hurt but alive. Alan lies on the floor, wounded and moaning. As medics are called, you wrap Emily in a blanket. **The kidnapper is stopped permanently, and Emily is saved, but the violent end leaves you with a hollow feeling as dawn breaks.**',
        choices: {
        },
      },
    },
  },

  // Русский
  ru: {
    title: 'Полночное исчезновение',
    description: 'Когда молодая женщина исчезает без следа, решительный детектив должен пробираться сквозь городские тени и распутать клубок улик, пока не стало слишком поздно. Каждое решение может означать спасенную жизнь или потерянный след.',
    author: 'Морган Стил',
    nodes: {
      'story-7481296-19': {
        title: 'Пиррова победа',
        narration: 'Время замедляется, когда вы нажимаете на курок. Выстрел эхом разносится по пещеристому складу. **Алан** шатается назад, нож выпадает из его руки. Ваш выстрел точен, вы обезвреживаете его прежде, чем он мог навредить **Эмили**. Офицеры врываются внутрь, и Эмили бежит к вам, но не раньше, чем случайный осколок бетона царапает ей бок. Она морщится от боли, слегка кровоточит – ранена, но жива. Алан лежит на полу, раненный и стонущий. Когда вызывают медиков, вы укутываете Эмили в одеяло. **Похититель остановлен навсегда, и Эмили спасена, но насильственный финал оставляет в вас чувство пустоты, когда наступает рассвет.**',
        choices: {
        },
      },
    },
  },

  // Español
  es: {
    title: 'La Paradoja del Bucle Temporal',
    description: 'Atrapado en un día que se repite, debes descubrir el misterio y liberarte de la prisión temporal.',
    author: 'Dr. Sarah Chen',
    nodes: {
      'tl-1': {
        title: 'Mañana Otra Vez',
        narration: 'Tu alarma suena a las 7:00 AM. Otra vez. Esta es la vez número 47 que despiertas en este momento exacto. La misma luz del sol, el mismo pájaro cantando afuera, la misma mancha de café en tu techo.',
        choices: {
          'tl-c1': {
            text: 'Revisar tu diario',
          },
          'tl-c2': {
            text: 'Correr al laboratorio inmediatamente',
          },
        },
      },
      'tl-2': {
        title: 'El Diario',
        narration: 'Tu diario está lleno de notas de bucles anteriores. "Día 47: El estabilizador cuántico falla a las 3:47 PM. La Dra. Martínez siempre derrama café a las 10:23 AM. El código de seguridad cambia diariamente pero sigue un patrón."',
        choices: {
          'tl-c3': {
            text: 'Estudiar el patrón',
          },
          'tl-c4': {
            text: 'Ir a buscar a la Dra. Martínez',
          },
        },
      },
    },
  },

  // Deutsch
  de: {
    title: 'Mitternachts-Vermisst',
    description: 'Als eine junge Frau spurlos verschwindet, muss ein entschlossener Detektiv sich durch die Schatten der Stadt navigieren und ein Netz aus Hinweisen entwirren, bevor die Zeit abläuft. Jede Entscheidung könnte ein gerettetes Leben oder eine verlorene Spur bedeuten.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-19': {
        title: 'Pyrrhussieg',
        narration: 'Die Zeit verlangsamt sich, als Sie den Abzug drücken. Der Schuss hallt durch das höhlenartige Lagerhaus. **Alan** taumelt rückwärts, das Messer fällt aus seiner Hand. Ihr Schuss trifft genau, Sie machen ihn kampfunfähig, bevor er **Emily** verletzen konnte. Beamte stürmen herein und Emily läuft auf Sie zu, aber nicht bevor ein verirrtes Betonstück ihre Seite streift. Sie verzieht das Gesicht vor Schmerz und blutet leicht – verletzt, aber am Leben. Alan liegt am Boden, verwundet und stöhnend. Während Sanitäter gerufen werden, wickeln Sie Emily in eine Decke. **Der Entführer ist endgültig gestoppt und Emily ist gerettet, aber das gewaltsame Ende hinterlässt ein hohles Gefühl in Ihnen, als die Morgendämmerung anbricht.**',
        choices: {
        },
      },
    },
  },

  // Français
  fr: {
    title: 'Disparition à minuit',
    description: 'Lorsqu\'une jeune femme disparaît sans laisser de trace, un détective déterminé doit naviguer dans les ombres de la ville et démêler un réseau d\'indices avant qu\'il ne soit trop tard. Chaque décision pourrait signifier une vie sauvée ou une piste perdue.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-19': {
        title: 'Victoire à la Pyrrhus',
        narration: 'Le temps ralentit alors que vous appuyez sur la gâchette. Le coup de feu résonne dans l\'entrepôt caverneux. **Alan** titube en arrière, le couteau tombant de sa main. Votre tir est précis, le neutralisant avant qu\'il ne puisse faire du mal à **Emily**. Les officiers se précipitent et Emily court vers vous, mais pas avant qu\'un éclat de béton ne lui érafle le flanc. Elle grimace de douleur, saignant légèrement – blessée mais vivante. Alan gît au sol, blessé et gémissant. Pendant que les secouristes sont appelés, vous enveloppez Emily dans une couverture. **Le kidnappeur est arrêté définitivement et Emily est sauvée, mais cette fin violente vous laisse un sentiment de vide alors que l\'aube se lève.**',
        choices: {
        },
      },
    },
  },

  // Português
  pt: {
    title: 'Desaparecimento à Meia-Noite',
    description: 'Quando uma jovem mulher desaparece sem deixar rastros, um detetive determinado deve navegar pelas sombras da cidade e desvendar uma teia de pistas antes que o tempo acabe. Cada decisão pode significar uma vida salva ou um rastro perdido.',
    author: 'Morgan Steele',
    nodes: {
      'story-7481296-19': {
        title: 'Vitória de Pirro',
        narration: 'O tempo desacelera quando você aperta o gatilho. O tiro ecoa pelo armazém cavernoso. **Alan** cambaleou para trás, a faca caindo de sua mão. Seu tiro acerta em cheio, incapacitando-o antes que ele pudesse machucar **Emily**. Os oficiais invadem e Emily corre em sua direção, mas não antes que um pedaço perdido de concreto arranhe seu lado. Ela se contorce de dor, sangrando levemente – ferida, mas viva. Alan está no chão, ferido e gemendo. Enquanto os médicos são chamados, você envolve Emily em um cobertor. **O sequestrador é detido permanentemente e Emily está salva, mas o fim violento deixa você com um sentimento vazio quando o amanhecer chega.**',
        choices: {
        },
      },
    },
  },

  // 日本語
  ja: {
    title: '真夜中の失踪',
    description: '若い女性が痕跡もなく姿を消したとき、決意した刑事は街の影を進み、時間切れになる前に手がかりの網を解き明かさなければならない。すべての決断が救われる命か、失われた手がかりを意味する可能性がある。',
    author: 'モーガン・スティール',
    nodes: {
      'story-7481296-19': {
        title: 'ピュロスの勝利',
        narration: '引き金を引くとき、時間がゆっくりと流れる。銃声が洞窟のような倉庫に響き渡る。**アラン**はよろめきながら後ろに下がり、ナイフが手から落ちる。あなたの弾は正確に命中し、彼が**エミリー**を傷つける前に無力化する。警官たちが突入し、エミリーがあなたに向かって走るが、その前にコンクリートの破片が彼女の脇腹をかすめる。彼女は痛みで顔をしかめ、軽く出血している──怪我をしているが生きている。アランは床に倒れ、負傷してうめいている。救急隊員が呼ばれる中、あなたはエミリーを毛布で包む。**誘拐犯は永久に阻止され、エミリーは救われたが、暴力的な結末は夜明けが訪れるとき、あなたに空虚な感覚を残す。**',
        choices: {
        },
      },
    },
  },

  // 中文
  zh: {
    title: '午夜失踪',
    description: '当一名年轻女子消失得无影无踪时,一位坚定的侦探必须穿过城市的阴影,在时间耗尽之前解开线索之网。每个决定都可能意味着拯救生命或失去线索。',
    author: '摩根·斯蒂尔',
    nodes: {
      'story-7481296-19': {
        title: '惨胜',
        narration: '当你扣动扳机时,时间变慢了。枪声在洞穴般的仓库中回荡。**艾伦**向后踉跄,刀从他手中掉落。你的枪击准确命中,在他伤害**艾米丽**之前制服了他。警察蜂拥而入,艾米丽向你跑来,但在此之前,一块混凝土碎片擦伤了她的侧面。她痛苦地皱眉,轻微流血——受伤但活着。艾伦躺在地板上,受伤呻吟。当医护人员被召来时,你用毯子裹住艾米丽。**绑架者被永久制止,艾米丽获救,但暴力的结局在黎明破晓时让你感到空虚。**',
        choices: {
        },
      },
    },
  },

  // 한국어
  ko: {
    title: '한밤의 실종',
    description: '젊은 여성이 흔적도 없이 사라지자, 단호한 형사는 시간이 다 가기 전에 도시의 그림자를 헤쳐 나가며 단서의 그물을 풀어야 합니다. 모든 결정이 구원받은 생명이나 차가워진 흔적을 의미할 수 있습니다.',
    author: '모건 스틸',
    nodes: {
      'story-7481296-19': {
        title: '피로스의 승리',
        narration: '방아쇠를 당길 때 시간이 느려집니다. 총성이 동굴 같은 창고에 울려 퍼집니다. **앨런**은 비틀거리며 뒤로 물러나고, 칼이 그의 손에서 떨어집니다. 당신의 총알은 정확히 명중하여, 그가 **에밀리**를 해치기 전에 무력화시킵니다. 경관들이 몰려들어오고 에밀리가 당신을 향해 달려오지만, 그 전에 콘크리트 파편이 그녀의 옆구리를 스칩니다. 그녀는 고통으로 얼굴을 찌푸리며 가볍게 피를 흘립니다 – 다쳤지만 살아있습니다. 앨런은 바닥에 누워 부상을 입고 신음합니다. 의료진이 호출되는 동안, 당신은 에밀리를 담요로 감쌉니다. **납치범은 영구히 저지되고 에밀리는 구출되었지만, 폭력적인 결말은 새벽이 밝아올 때 당신에게 공허한 감정을 남깁니다.**',
        choices: {
        },
      },
    },
  },

  // Українська - Not yet translated
  uk: { title: '', description: '', author: '', nodes: {} },

};
