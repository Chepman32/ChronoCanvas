import { create } from 'zustand';
import { Story, StoryNode } from '../types';
import { localizeStory } from '../utils/storyLocalization';
import { getStoryTranslations } from '../data/localizations';
import { useSettingsStore } from './settingsStore';

interface StoryStore {
  stories: Story[];
  currentStory: Story | null;
  currentNode: StoryNode | null;
  baseStories: Story[]; // Original stories without localization
  setStories: (stories: Story[]) => void;
  loadStory: (storyId: string, savedNodeId?: string) => void;
  navigateToNode: (nodeId: string) => void;
  resetStory: () => void;
  refreshLocalizedStories: () => void;
}

export const useStoryStore = create<StoryStore>((set, get) => ({
  stories: [],
  currentStory: null,
  currentNode: null,
  baseStories: [],

  setStories: stories => {
    set({ baseStories: stories });
    get().refreshLocalizedStories();
  },

  refreshLocalizedStories: () => {
    const { baseStories } = get();
    const language = useSettingsStore.getState().language;

    const localizedStories = baseStories.map(story => {
      const translations = getStoryTranslations(story.id);
      if (translations) {
        return localizeStory(story, translations, language);
      }
      return story;
    });

    set({ stories: localizedStories });
  },

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
