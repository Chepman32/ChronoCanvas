import { create } from 'zustand';
import { Story, StoryNode } from '../types';
import { localizeStory } from '../utils/storyLocalization';
import { getStoryTranslations } from '../data/localizations';
import { useSettingsStore } from './settingsStore';
import { getCachedStoryTranslations } from '../services/storyCacheService';

interface StoryStore {
  stories: Story[];
  currentStory: Story | null;
  currentNode: StoryNode | null;
  baseStories: Story[]; // Original stories without localization
  remoteStories: Story[]; // Remote stories from cache
  setStories: (stories: Story[]) => void;
  setRemoteStories: (stories: Story[]) => void;
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
  remoteStories: [],

  setStories: stories => {
    set({ baseStories: stories });
    get().refreshLocalizedStories();
  },

  setRemoteStories: stories => {
    set({ remoteStories: stories });
    get().refreshLocalizedStories();
  },

  refreshLocalizedStories: () => {
    const { baseStories, remoteStories } = get();
    const language = useSettingsStore.getState().language;

    // Localize bundled stories
    const localizedBundled = baseStories.map(story => {
      const translations = getStoryTranslations(story.id);
      if (translations) {
        return localizeStory(story, translations, language);
      }
      return story;
    });

    // Localize remote stories using cached translations
    const localizedRemote = remoteStories.map(story => {
      const translations = getCachedStoryTranslations(story.id, language);
      if (translations) {
        // Convert remote translation format to the expected format
        const translationRecord = { [language]: translations };
        return localizeStory(story, translationRecord, language);
      }
      return story;
    });

    // Combine bundled and remote stories (remote stories come after bundled)
    set({ stories: [...localizedBundled, ...localizedRemote] });
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
