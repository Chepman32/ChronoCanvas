// Core Data Types
export type StoryGenre =
  | 'fantasy'
  | 'scifi'
  | 'mystery'
  | 'romance'
  | 'horror'
  | 'adventure'
  | 'detective';

export interface Story {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string | number; // string for URLs, number for require()
  thumbnailUrl: string | number; // string for URLs, number for require()
  author: string;
  genre: StoryGenre[];
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedDuration: number;
  isPremium: boolean;
  productId?: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  totalNodes: number;
  totalEndings: number;
  startNodeId: string;
  nodes: StoryNode[];
}

export interface StoryNode {
  id: string;
  storyId: string;
  type: 'start' | 'decision' | 'ending' | 'checkpoint';
  title: string;
  imageUrl: string | number; // string for URLs, number for require()
  narration: string;
  choices: Choice[];
}

export interface Choice {
  id: string;
  text: string;
  description?: string;
  targetNodeId: string;
  order: number;
}

export interface UserProfile {
  id: string;
  createdAt: string;
  lastActiveAt: string;
  storyProgress: Record<string, StoryProgress>;
}

export interface StoryProgress {
  storyId: string;
  currentNodeId: string;
  visitedNodes: string[];
  choiceHistory: ChoiceRecord[];
  startedAt: string;
  lastPlayedAt: string;
  completionPercentage: number;
}

export interface ChoiceRecord {
  nodeId: string;
  choiceId: string;
  timestamp: string;
}
