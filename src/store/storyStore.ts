import { create } from 'zustand';
import { Story, StoryNode } from '../types';

interface StoryStore {
  stories: Story[];
  currentStory: Story | null;
  currentNode: StoryNode | null;
  setStories: (stories: Story[]) => void;
  loadStory: (storyId: string) => void;
  navigateToNode: (nodeId: string) => void;
  resetStory: () => void;
}

export const useStoryStore = create<StoryStore>((set, get) => ({
  stories: [],
  currentStory: null,
  currentNode: null,

  setStories: stories => set({ stories }),

  loadStory: storyId => {
    const story = get().stories.find(s => s.id === storyId);
    if (story) {
      const startNode = story.nodes.find(n => n.id === story.startNodeId);
      set({ currentStory: story, currentNode: startNode || story.nodes[0] });
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
