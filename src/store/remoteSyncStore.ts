import { create } from 'zustand';

interface SyncProgress {
  current: number;
  total: number;
  currentStoryId?: string;
}

interface SyncState {
  isSyncing: boolean;
  lastSyncTime: number | null;
  syncProgress: SyncProgress | null;
  error: string | null;

  // Actions
  startSync: () => void;
  updateProgress: (current: number, total: number, storyId?: string) => void;
  finishSync: (success: boolean, error?: string) => void;
  setLastSyncTime: (time: number | null) => void;
  clearError: () => void;
}

export const useSyncStore = create<SyncState>(set => ({
  isSyncing: false,
  lastSyncTime: null,
  syncProgress: null,
  error: null,

  startSync: () =>
    set({
      isSyncing: true,
      syncProgress: { current: 0, total: 0 },
      error: null,
    }),

  updateProgress: (current, total, storyId) =>
    set({
      syncProgress: { current, total, currentStoryId: storyId },
    }),

  finishSync: (success, error) =>
    set({
      isSyncing: false,
      syncProgress: null,
      lastSyncTime: success ? Date.now() : null,
      error: error || null,
    }),

  setLastSyncTime: time => set({ lastSyncTime: time }),

  clearError: () => set({ error: null }),
}));
