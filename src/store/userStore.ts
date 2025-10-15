import { create } from 'zustand';
import { UserProfile, StoryProgress } from '../types';

interface UserStore {
  profile: UserProfile | null;
  initializeUser: () => void;
  trackProgress: (storyId: string, nodeId: string, choiceId?: string) => void;
  getStoryProgress: (storyId: string) => StoryProgress | undefined;
  clearStoryProgress: (storyId: string) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  profile: null,

  initializeUser: () => {
    const profile: UserProfile = {
      id: 'user-1',
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      storyProgress: {},
    };
    set({ profile });
  },

  trackProgress: (storyId, nodeId, choiceId) => {
    const { profile } = get();
    if (!profile) return;

    const progress = profile.storyProgress[storyId] || {
      storyId,
      currentNodeId: nodeId,
      visitedNodes: [],
      choiceHistory: [],
      startedAt: new Date().toISOString(),
      lastPlayedAt: new Date().toISOString(),
      completionPercentage: 0,
    };

    if (!progress.visitedNodes.includes(nodeId)) {
      progress.visitedNodes.push(nodeId);
    }

    if (choiceId) {
      progress.choiceHistory.push({
        nodeId,
        choiceId,
        timestamp: new Date().toISOString(),
      });
    }

    progress.currentNodeId = nodeId;
    progress.lastPlayedAt = new Date().toISOString();

    set({
      profile: {
        ...profile,
        storyProgress: {
          ...profile.storyProgress,
          [storyId]: progress,
        },
      },
    });
  },

  getStoryProgress: storyId => {
    const { profile } = get();
    return profile?.storyProgress[storyId];
  },

  clearStoryProgress: storyId => {
    const { profile } = get();
    if (!profile) return;

    const updatedProgress = { ...profile.storyProgress };
    delete updatedProgress[storyId];

    set({
      profile: {
        ...profile,
        storyProgress: updatedProgress,
      },
    });
  },
}));
