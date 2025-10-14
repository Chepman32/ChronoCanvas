import { create } from 'zustand';
import { Story, StoryNode } from '../types';

interface StoryStore {
  stories: Story[];
  currentStory: Story | null;
  currentNode: StoryNode | null;
  setStories: (stories: Story[]) => void;
  loadStory: (storyId: string, savedNodeId?: string) => void;
  navigateToNode: (nodeId: string) => void;
  resetStory: () => void;
}

export const useStoryStore = create<StoryStore>((set, get) => ({
  stories: [],
  currentStory: null,
  currentNode: null,

  setStories: stories => set({ stories }),

  loadStory: (storyId, savedNodeId) => {
    const story = get().stories.find(s => s.id === storyId);
    if (story) {
      let nodeToLoad: StoryNode | undefined;

      if (savedNodeId) {
        nodeToLoad = story.nodes.find(n => n.id === savedNodeId);
      }

      if (!nodeToLoad) {
        nodeToLoad = story.nodes.find(n => n.id === story.startNodeId);
      }

      set({ currentStory: story, currentNode: nodeToLoad || story.nodes[0] });
    }
  },

  navigateToNode: nodeId => {
    const { currentStory } = get();
    if (currentStory) {
      const node = currentStory.nodes.find(n => n.id === nodeId);
      if (node) {
        set({ currentNode: node });
      }
    }
  },

  resetStory: () => set({ currentStory: null, currentNode: null }),
}));
