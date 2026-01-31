import { Story } from '../types';

export const midnightCuratorStory: Story = {
  id: 'story-847362951',
  title: 'The Midnight Curator',
  description:
    'A renowned art curator is found dead in a locked gallery on the eve of the biggest exhibition of her career. As the lead detective, you have until dawn to solve the murder.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400',
  author: 'Detective Marcus Reed',
  genre: 'detective',
  involvement: 'medium',
  estimatedDuration: 65,
  isPremium: false,
  productId: undefined,
  version: '1.0',
  createdAt: '2025-01-15',
  updatedAt: '2025-01-15',
  totalNodes: 24,
  totalEndings: 1,
  startNodeId: 'story-847362951-1',
  nodes: [
    {
      id: 'story-847362951-1',
      storyId: 'story-847362951',
      type: 'start',
      title: 'Crime Scene Discovery',
      imageUrl: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800',
      narration:
        "The call came at 11:47 PM. Victoria Ashford, the city's most celebrated art curator, lies sprawled beneath a Renaissance masterpiece, her champagne flute shattered on the marble floor. The gallery doors were locked from the inside, and her assistant discovered her body just minutes ago. Rain hammers against the skylights as you step into the dimly lit space, noting the exhibition opens in eight hours. Your captain's words echo: solve this fast, or the publicity will destroy any chance of finding the truth. The pressure mounts as you realize this is no ordinary murder.",
      choices: [
        { id: 'story-847362951-c1', text: 'Examine the body', description: 'Look for physical evidence', targetNodeId: 'story-847362951-2', order: 1 },
        { id: 'story-847362951-c2', text: 'Interview the assistant', description: 'Get the witness account', targetNodeId: 'story-847362951-3', order: 2 },
      ],
    },
    {
      id: 'story-847362951-2', storyId: 'story-847362951', type: 'decision', title: 'Physical Evidence',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration: "Victoria's neck bears faint bruising, and the medical examiner notes unusual pupils suggesting poisoning. Her phone shows a deleted message from 11:30 PM. The champagne glass has two distinct lipstick shades, indicating she shared her final drink with someone who may have been her killer.",
      choices: [
        { id: 'story-847362951-c3', text: 'Recover the message', description: 'Find who she contacted', targetNodeId: 'story-847362951-4', order: 1 },
        { id: 'story-847362951-c4', text: 'Analyze lipstick', description: 'Identify the second person', targetNodeId: 'story-847362951-5', order: 2 },
      ],
    },
    {
      id: 'story-847362951-3', storyId: 'story-847362951', type: 'decision', title: 'Witness Testimony',
      imageUrl: 'https://images.unsplash.com/photo-1505664194779-8ab2f700bfe0?w=800',
      narration: "James Chen, Victoria's assistant, trembles as he recounts finding the body. His shoes are dry despite the downpour, and there's cigarette smoke on his jacket though the gallery prohibits smoking. His timeline seems inconsistent and he appears to be hiding something.",
      choices: [
        { id: 'story-847362951-c5', text: 'Press on inconsistencies', description: 'His story does not add up', targetNodeId: 'story-847362951-6', order: 1 },
        { id: 'story-847362951-c6', text: 'Ask about recent behavior', description: 'Look for motive in her life', targetNodeId: 'story-847362951-7', order: 2 },
      ],
    },
    {
      id: 'story-847362951-4', storyId: 'story-847362951', type: 'decision', title: 'The Blackmail Message',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration: "The deleted message reads: 'I know what you did with the Caravaggio. Meet me tonight or I go to the press.' GPS shows the sender was at the gallery until 11:43 PM, four minutes before Victoria died. The blackmailer was definitely here at the crime scene.",
      choices: [
        { id: 'story-847362951-c7', text: 'Trace the number', description: 'Find the blackmailer', targetNodeId: 'story-847362951-8', order: 1 },
        { id: 'story-847362951-c8', text: 'Check security logs', description: 'Verify access records', targetNodeId: 'story-847362951-8', order: 2 },
      ],
    },
    {
      id: 'story-847362951-5', storyId: 'story-847362951', type: 'decision', title: 'Forensic Analysis',
      imageUrl: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800',
      narration: "The lipstick matches Crimson Noir, worn by Elena Volkov, a rival curator who publicly feuded with Victoria. Security logs show Elena's card scanned at 10:45 PM. Video shows a figure in black leaving at 11:42 PM who does not match Elena or Thomas Ashford, suggesting a third party.",
      choices: [
        { id: 'story-847362951-c9', text: 'Investigate Elena', description: 'She was at the gallery', targetNodeId: 'story-847362951-9', order: 1 },
        { id: 'story-847362951-c10', text: 'Enhance the video', description: 'Identify the figure', targetNodeId: 'story-847362951-9', order: 2 },
      ],
    },
    {
      id: 'story-847362951-6', storyId: 'story-847362951', type: 'decision', title: 'Hidden Evidence',
      imageUrl: 'https://images.unsplash.com/photo-1516975080664-2151bcd01707?w=800',
      narration: "James's laptop video from the storage room shows a figure in black at 11:42 PM. James admits he was hiding until 11:15 PM after overhearing Victoria arguing about forged documents. He heard a woman's voice shouting angrily at Victoria.",
      choices: [
        { id: 'story-847362951-c11', text: 'Analyze the voice', description: 'Identify who was arguing', targetNodeId: 'story-847362951-9', order: 1 },
        { id: 'story-847362951-c12', text: 'Trace the documents', description: 'Find the forgery evidence', targetNodeId: 'story-847362951-9', order: 2 },
      ],
    },
    {
      id: 'story-847362951-7', storyId: 'story-847362951', type: 'decision', title: 'Victoria Past',
      imageUrl: 'https://images.unsplash.com/photo-1505664194779-8ab2f700bfe0?w=800',
      narration: 'James reveals Victoria had been paranoid lately, making suspicious phone calls at odd hours. Two weeks ago, she received a mysterious package that made her go pale with fear. A private investigator named David Morse left a business card with a handwritten note reading: I found what you are looking for. Payment due. Something dark in her past was haunting her, a secret she could not escape no matter how hard she tried to bury it.', 
      choices: [
        { id: 'story-847362951-c13', text: 'Find the investigator', description: 'Learn what he discovered', targetNodeId: 'story-847362951-9', order: 1 },
        { id: 'story-847362951-c14', text: 'Search her office', description: 'Find the mysterious package', targetNodeId: 'story-847362951-9', order: 2 },
      ],
    },
    {
      id: 'story-847362951-8', storyId: 'story-847362951', type: 'decision', title: 'Thomas Ashford',
      imageUrl: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?w=800',
      narration: "The phone trace leads to Thomas, Victoria's ex-husband and a disgraced art dealer packing to flee the country. Documents reveal Victoria sold forged paintings. Cross-referencing shows James, Thomas, and Elena all received payments from an offshore account traced to Richard Ashford, Victoria's uncle.",
      choices: [
        { id: 'story-847362951-c15', text: 'Investigate Richard', description: 'He had financial motive', targetNodeId: 'story-847362951-10', order: 1 },
        { id: 'story-847362951-c16', text: 'Press Thomas harder', description: 'He knows more than he says', targetNodeId: 'story-847362951-10', order: 2 },
      ],
    },
    {
      id: 'story-847362951-9', storyId: 'story-847362951', type: 'decision', title: 'Elena Volkov',
      imageUrl: 'https://images.unsplash.com/photo-1516975080664-2151bcd01707?w=800',
      narration: "Elena admits she negotiated with Victoria about authenticating a forged Caravaggio but claims Victoria was alive when she left. She received twenty thousand dollars from Richard's account. Her lawyer arrives suspiciously fast, clearly prepared for this confrontation.",
      choices: [
        { id: 'story-847362951-c17', text: 'Challenge her alibi', description: 'She is lying about the timeline', targetNodeId: 'story-847362951-10', order: 1 },
        { id: 'story-847362951-c18', text: 'Ask about Richard', description: 'Why did he pay her twenty thousand', targetNodeId: 'story-847362951-10', order: 2 },
      ],
    },
    {
      id: 'story-847362951-10', storyId: 'story-847362951', type: 'decision', title: 'Richard Ashford',
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration: "Richard's financial records paint a picture of desperation. The gallery is hemorrhaging money, and Victoria's ten-million-dollar life insurance names him as the sole beneficiary, a policy she updated just three months ago. A forensic accountant discovers Richard made a large payment to a private security contractor, Sarah Mitchell, two weeks ago.",
      choices: [
        { id: 'story-847362951-c19', text: 'Hunt for Sarah', description: 'The mercenary cannot have gone far', targetNodeId: 'story-847362951-11', order: 1 },
        { id: 'story-847362951-c20', text: 'Confront Richard', description: 'Force him to explain the conspiracy', targetNodeId: 'story-847362951-11', order: 2 },
      ],
    },
    {
      id: 'story-847362951-11', storyId: 'story-847362951', type: 'decision', title: 'Sarah Mitchell',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration: "Richard receives you in his penthouse with practiced hospitality, but his hands tremble as he pours scotch. When you mention Sarah's name, the color drains from his face. His alibi for tonight was a charity gala, but his credit card shows he left at 11:15 PM and returned at midnight. Enhanced video analysis identifies the figure leaving the gallery as Sarah Mitchell.",
      choices: [
        { id: 'story-847362951-c21', text: 'Coordinate arrests', description: 'Apprehend both conspirators', targetNodeId: 'story-847362951-12', order: 1 },
        { id: 'story-847362951-c22', text: 'Set up a sting', description: 'Catch them communicating', targetNodeId: 'story-847362951-12', order: 2 },
      ],
    },
    {
      id: 'story-847362951-12', storyId: 'story-847362951', type: 'decision', title: 'The Capture',
      imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800',
      narration: "Your team storms Sarah Mitchell's hotel room. She is a former military tech specialist who knows when the game is over. In interrogation, she remains silent until you present the burner phone with Richard's texts ordering Victoria's murder. Then she laughs bitterly and asks about a deal.",
      choices: [
        { id: 'story-847362951-c23', text: 'Offer immunity', description: 'Get testimony against Richard', targetNodeId: 'story-847362951-13', order: 1 },
        { id: 'story-847362951-c24', text: 'Build the case', description: 'Evidence speaks for itself', targetNodeId: 'story-847362951-13', order: 2 },
      ],
    },
    {
      id: 'story-847362951-13', storyId: 'story-847362951', type: 'decision', title: 'The Confession',
      imageUrl: 'https://images.unsplash.com/photo-1550895030-823330dfb759?w=800',
      narration: "Simultaneous raids sweep across the city. Richard Ashford is arrested at his penthouse attempting to destroy documents. Sarah is apprehended at the airport with a one-way ticket to Buenos Aires. Elena provides formal testimony, securing immunity in exchange for cooperation. The conspiracy is fully exposed.",
      choices: [
        { id: 'story-847362951-c25', text: 'Prepare prosecution', description: 'Build the ironclad case', targetNodeId: 'story-847362951-14', order: 1 },
        { id: 'story-847362951-c26', text: 'Return to gallery', description: 'Pay respects to Victoria', targetNodeId: 'story-847362951-14', order: 2 },
      ],
    },
    {
      id: 'story-847362951-14', storyId: 'story-847362951', type: 'decision', title: 'Justice Approaches',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration: "Dawn breaks over the city. Richard sits in an interrogation room, his empire crumbling. Sarah has provided full testimony about the murder-for-hire. Elena ensures no loose ends. The forged Caravaggio is seized as evidence. The case is ironclad: conspiracy, murder-for-hire, insurance fraud, and embezzlement.",
      choices: [
        { id: 'story-847362951-c27', text: 'Final case file', description: 'Document for prosecution', targetNodeId: 'story-847362951-15', order: 1 },
        { id: 'story-847362951-c28', text: 'Reflect on the case', description: 'It tested your limits', targetNodeId: 'story-847362951-15', order: 2 },
      ],
    },
    {
      id: 'story-847362951-15', storyId: 'story-847362951', type: 'decision', title: 'The Perfect Frame',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      narration: "Richard Ashford's arrest brings down the entire conspiracy. Sarah Mitchell provides testimony for a reduced sentence. Elena Volkov's cooperation ensures justice. The forged Caravaggio is removed from the exhibition, destroying the gallery's reputation forever. At dawn, as patrol cars lead Richard away in handcuffs, you stand where Victoria died.",
      choices: [
        { id: 'story-847362951-c29', text: 'Close investigation', description: 'Justice for Victoria Ashford', targetNodeId: 'story-847362951-16', order: 1 },
        { id: 'story-847362951-c30', text: 'Look to horizon', description: 'Another case awaits', targetNodeId: 'story-847362951-16', order: 2 },
      ],
    },
    {
      id: 'story-847362951-16', storyId: 'story-847362951', type: 'decision', title: 'Victory',
      imageUrl: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=800',
      narration: "You return to your desk as the city wakes, knowing that while you could not save Victoria, you delivered justice in her name. The gallery will close, the Caravaggio will be destroyed, but the truth prevailed. Richard will spend his life in prison. Sarah's testimony ensures conviction. The art world will remember this scandal.",
      choices: [
        { id: 'story-847362951-c31', text: 'File final report', description: 'Complete the investigation', targetNodeId: 'story-847362951-17', order: 1 },
        { id: 'story-847362951-c32', text: 'Moment of silence', description: 'Honor Victoria Ashford', targetNodeId: 'story-847362951-17', order: 2 },
      ],
    },
    {
      id: 'story-847362951-17', storyId: 'story-847362951', type: 'decision', title: 'Honor the Fallen',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration: 'Standing in the empty gallery where Victoria took her last breath, you reflect on the complexity of human nature. A brilliant curator undone by family betrayal. An uncle who chose greed over blood. A detective who refused to give up. The morning sun illuminates the space where a masterpiece once hung. Justice has been served.', 
      choices: [
        { id: 'story-847362951-c33', text: 'Return to precinct', description: 'Your work continues', targetNodeId: 'story-847362951-18', order: 1 },
        { id: 'story-847362951-c34', text: 'One last look', description: 'Remember this case', targetNodeId: 'story-847362951-18', order: 2 },
      ],
    },
    {
      id: 'story-847362951-18', storyId: 'story-847362951', type: 'decision', title: 'The Next Chapter',
      imageUrl: 'https://images.unsplash.com/photo-1550895030-823330dfb759?w=800',
      narration: 'The Midnight Curator case will be remembered as one of your finest investigations. Through tenacious detective work, you unraveled a conspiracy that reached into the highest echelons of the art world. Victoria Ashford can rest in peace knowing her murderer faces justice. You close the file with satisfaction, ready for whatever challenge comes next.', 
      choices: [
        { id: 'story-847362951-c35', text: 'Archive the case', description: 'Add to your solved files', targetNodeId: 'story-847362951-19', order: 1 },
        { id: 'story-847362951-c36', text: 'Celebrate quietly', description: 'A moment of personal victory', targetNodeId: 'story-847362951-19', order: 2 },
      ],
    },
    {
      id: 'story-847362951-19', storyId: 'story-847362951', type: 'decision', title: 'Reflection',
      imageUrl: 'https://images.unsplash.com/photo-1505664194779-8ab2f700bfe0?w=800',
      narration: 'Justice delayed is justice denied, but in this case, justice arrived with the dawn. Richard Ashford will never again see freedom. Sarah Mitchell will serve her time. Elena Volkov has a chance to rebuild. And Victoria Ashford, the Midnight Curator, will be remembered not for her tragic death, but for the truth that her murder revealed. Your duty is complete.', 
      choices: [
        { id: 'story-847362951-c37', text: 'Final close', description: 'Case officially closed', targetNodeId: 'story-847362951-20', order: 1 },
        { id: 'story-847362951-c38', text: 'New beginnings', description: 'Tomorrow brings new cases', targetNodeId: 'story-847362951-20', order: 2 },
      ],
    },
    {
      id: 'story-847362951-20', storyId: 'story-847362951', type: 'ending', title: 'Case Closed',
      imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
      narration: "The Midnight Curator case is officially closed. Victoria Ashford's murderer faces justice, her legacy preserved through your dedication. The conspiracy that threatened to destroy the art world has been dismantled. As dawn breaks over the city, you know that evil may plot in darkness, but truth always finds its way into light. Your work here is done. Until the next case calls.",
      choices: [],
    },
  ],
};
