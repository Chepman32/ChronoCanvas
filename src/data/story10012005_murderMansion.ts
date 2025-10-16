import { Story } from '../types';

export const murderMansionStory: Story = {
  id: 'story-10012005',
  title: 'Murder at the Mansion',
  description:
    `A storm-trapped manor, a dead aristocrat, and a house full of secrets. As Detective Inspector Grey, you must unravel betrayal before the killer walks free.`,
  coverImageUrl:
    'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=800&q=80',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=400&q=80',
  author: 'Inspector Greyson Ward',
  genre: ['detective', 'mystery'],
  difficulty: 'medium',
  estimatedDuration: 20,
  isPremium: true,
  productId: 'com.app.story.murder-mansion',
  version: '1.0',
  createdAt: '2025-01-21',
  updatedAt: '2025-01-21',
  totalNodes: 6,
  totalEndings: 3,
  startNodeId: 'story-10012005-1',
  nodes: [
    {
      id: 'story-10012005-1',
      storyId: 'story-10012005',
      type: 'start',
      title: 'Stormbound Arrival',
      imageUrl: 'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=800&q=80',
      narration:
        `The storm rages outside as you step into the opulent entry hall of Blackwood Manor. Lord Blackwood lies dead in his study, and the household is in an uproar. You are Detective Inspector Grey, called to investigate. Lightning flashes, illuminating stern family portraits on the walls. You have two leads to begin with: examine the crime scene for physical clues, or gather the family and staff for initial questioning.`,
      choices: [
        {
          id: 'story-10012005-c1',
          text: `Inspect Lord Blackwood's study for clues`,
          targetNodeId: 'story-10012005-2',
          order: 1,
        },
        {
          id: 'story-10012005-c2',
          text: 'Interview the widow and servants first',
          targetNodeId: 'story-10012005-3',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012005-2',
      storyId: 'story-10012005',
      type: 'decision',
      title: 'Clues in the Study',
      imageUrl: 'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=800&q=80',
      narration:
        `You enter the dimly lit study, the smell of spilt brandy in the air. Lord Blackwood's body slumps over his desk. Scanning the scene, you note a shattered glass and a faint scent of bitter almonds--cyanide, perhaps. On the floor by his hand, a monogrammed handkerchief with an ornate "C". Lady Blackwood's initial. The wall safe behind a painting is ajar, some contents missing. Each clue paints a suspect: Lady Catherine Blackwood or John the groundskeeper (who has access to gardening poisons). It is time to act on your deductions.`,
      choices: [
        {
          id: 'story-10012005-c3',
          text: 'Accuse Lady Blackwood, confronting her with the evidence',
          targetNodeId: 'story-10012005-4',
          order: 1,
        },
        {
          id: 'story-10012005-c4',
          text: 'Arrest Groundskeeper John, suspecting he used poison from the greenhouse',
          targetNodeId: 'story-10012005-5',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012005-3',
      storyId: 'story-10012005',
      type: 'decision',
      title: 'Parlor Questioning',
      imageUrl: 'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=800&q=80',
      narration:
        `You gather everyone in the parlor--Lady Blackwood pale and composed in black lace, and the anxious staff. Lady Blackwood claims she retired early and heard nothing, though her hands tremble. The butler interjects that he overheard Lord Blackwood quarreling with Groundskeeper John that afternoon about unpaid wages. John protests his innocence, saying he was tending the greenhouse all evening. Two narratives emerge: one implicating John's anger, another hinting at Lady Blackwood's nervous demeanor.`,
      choices: [
        {
          id: 'story-10012005-c5',
          text: `Trust the butler's testimony and accuse Groundskeeper John`,
          targetNodeId: 'story-10012005-6',
          order: 1,
        },
        {
          id: 'story-10012005-c6',
          text: 'Press Lady Blackwood, suspecting her despite her alibi',
          targetNodeId: 'story-10012005-4',
          order: 2,
        },
      ],
    },
    {
      id: 'story-10012005-4',
      storyId: 'story-10012005',
      type: 'ending',
      title: 'Justice Served',
      imageUrl: 'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=800&q=80',
      narration:
        `After gathering everyone in the grand hall, you announce your conclusion: Lady Blackwood is the murderer. She scoffs at first, but you methodically lay out the evidence--her handkerchief in the study, her access to cyanide (from treating Lord Blackwood's "illness"), the fact that only she could have opened the wall safe without signs of forced entry. Under the weight of proof, Lady Blackwood's composure cracks. She tearfully confesses: years of cruelty from her husband drove her to it. You escort her into custody. Justice is served, and as the storm passes, you depart the manor knowing you solved the case correctly.`,
      choices: [],
    },
    {
      id: 'story-10012005-5',
      storyId: 'story-10012005',
      type: 'ending',
      title: 'Wrongful Arrest',
      imageUrl: 'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=800&q=80',
      narration:
        `Convinced the groundskeeper's dispute and access to poisons mark him as the killer, you have John arrested. The relieved Lady Blackwood thanks you with a trembling smile. The case seems neatly closed. But weeks later, back in London, you receive a letter--the new detective assigned to Blackwood's estate found evidence of cyanide purchase traced to Lady Blackwood. By the time authorities went to question her, she had vanished overseas with her late husband's jewels. You realize with dread that you jailed an innocent man while the true murderer walked free. The mistake haunts your reputation and conscience.`,
      choices: [],
    },
    {
      id: 'story-10012005-6',
      storyId: 'story-10012005',
      type: 'ending',
      title: 'Murderer Escapes',
      imageUrl: 'https://images.unsplash.com/photo-1519072815683-bf2ee1bb5bc0?auto=format&fit=crop&w=800&q=80',
      narration:
        `You place Groundskeeper John in handcuffs, persuaded by the butler's account of his anger. John protests vehemently as he is led away. Lady Blackwood lets out a long sigh of relief. The case seems closed. However, in the following days, doubts niggle at you--there was scant hard evidence. Some time later, you hear Lady Blackwood sold the manor and left the country abruptly. It dawns on you that the real culprit may have escaped justice. You realize too late that the widow's act fooled everyone, and an innocent man paid the price. It is a failure that will haunt you for years.`,
      choices: [],
    },
  ],
};
