import { Language } from '../localization/translations';
import { Story, StoryNode, Choice } from './index';

export interface LocalizedStoryContent {
  title: string;
  description: string;
  author: string;
  nodes: LocalizedStoryNode[];
}

export interface LocalizedStoryNode {
  id: string;
  title: string;
  narration: string;
  choices: LocalizedChoice[];
}

export interface LocalizedChoice {
  id: string;
  text: string;
  description?: string;
}

export interface LocalizedStory {
  // Base story data (language-independent)
  id: string;
  coverImageUrl: string;
  thumbnailUrl: string;
  genre: Story['genre'];
  difficulty: Story['difficulty'];
  estimatedDuration: number;
  isPremium: boolean;
  productId?: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  totalNodes: number;
  totalEndings: number;
  startNodeId: string;

  // Localized content for each language
  localizations: Record<Language, LocalizedStoryContent>;
}

// Helper function to convert LocalizedStory to Story for a specific language
export function getStoryForLanguage(
  localizedStory: LocalizedStory,
  language: Language,
): Story {
  const localization =
    localizedStory.localizations[language] || localizedStory.localizations.en;

  const nodes: StoryNode[] = localization.nodes.map(localizedNode => {
    const choices: Choice[] = localizedNode.choices.map(localizedChoice => ({
      id: localizedChoice.id,
      text: localizedChoice.text,
      description: localizedChoice.description,
      targetNodeId: '', // Will be filled from original structure
      order: 0, // Will be filled from original structure
    }));

    return {
      id: localizedNode.id,
      storyId: localizedStory.id,
      type: 'decision' as const, // Will be filled from original structure
      title: localizedNode.title,
      imageUrl: '', // Will be filled from original structure
      narration: localizedNode.narration,
      choices,
    };
  });

  return {
    id: localizedStory.id,
    title: localization.title,
    description: localization.description,
    coverImageUrl: localizedStory.coverImageUrl,
    thumbnailUrl: localizedStory.thumbnailUrl,
    author: localization.author,
    genre: localizedStory.genre,
    difficulty: localizedStory.difficulty,
    estimatedDuration: localizedStory.estimatedDuration,
    isPremium: localizedStory.isPremium,
    productId: localizedStory.productId,
    version: localizedStory.version,
    createdAt: localizedStory.createdAt,
    updatedAt: localizedStory.updatedAt,
    totalNodes: localizedStory.totalNodes,
    totalEndings: localizedStory.totalEndings,
    startNodeId: localizedStory.startNodeId,
    nodes,
  };
}
