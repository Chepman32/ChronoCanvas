import { Story } from '../types';
import { Language } from '../localization/translations';
import {
  RemoteManifest,
  RemoteStoryMeta,
  RemoteStoryTranslations,
  SyncResult,
} from '../types/remoteStory';
import * as cacheService from './storyCacheService';

// Base URL for the remote stories repository (raw GitHub content)
export const REMOTE_STORIES_BASE_URL = 'https://raw.githubusercontent.com/Chepman32/FF_Stories/main';

/**
 * Fetch the story manifest from remote
 */
export async function fetchManifest(): Promise<RemoteManifest> {
  const response = await fetch(`${REMOTE_STORIES_BASE_URL}/manifest.json`, {
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch manifest: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetch a specific story from remote
 */
export async function fetchStory(storyId: string): Promise<Story> {
  const response = await fetch(
    `${REMOTE_STORIES_BASE_URL}/stories/${storyId}/story.json`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch story ${storyId}: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetch translations for a story in a specific language
 */
export async function fetchStoryTranslations(
  storyId: string,
  language: Language,
): Promise<RemoteStoryTranslations | null> {
  try {
    const response = await fetch(
      `${REMOTE_STORIES_BASE_URL}/stories/${storyId}/i18n/${language}.json`,
    );

    if (!response.ok) {
      return null; // Translation not available
    }

    return response.json();
  } catch {
    return null;
  }
}

/**
 * Determine which stories need to be updated
 */
export function getStoriesToUpdate(
  manifest: RemoteManifest,
  cachedManifest: RemoteManifest | null,
): string[] {
  if (!cachedManifest) {
    // No cache, download all stories
    return manifest.stories.map(s => s.id);
  }

  const storiesToUpdate: string[] = [];

  for (const remoteStory of manifest.stories) {
    const cachedStory = cachedManifest.stories.find(s => s.id === remoteStory.id);

    // Update if story is new or version changed
    if (!cachedStory || cachedStory.version !== remoteStory.version) {
      storiesToUpdate.push(remoteStory.id);
    }
  }

  return storiesToUpdate;
}

/**
 * Get stories that were removed from remote
 */
export function getRemovedStories(
  manifest: RemoteManifest,
  cachedManifest: RemoteManifest | null,
): string[] {
  if (!cachedManifest) {
    return [];
  }

  const removedStories: string[] = [];
  const remoteIds = new Set(manifest.stories.map(s => s.id));

  for (const cachedStory of cachedManifest.stories) {
    if (!remoteIds.has(cachedStory.id)) {
      removedStories.push(cachedStory.id);
    }
  }

  return removedStories;
}

/**
 * Sync stories from remote repository
 */
export async function syncStories(
  onProgress?: (current: number, total: number, storyId: string) => void,
): Promise<SyncResult> {
  const manifest = await fetchManifest();
  const cachedManifest = cacheService.getCachedManifest();

  const storiesToUpdate = getStoriesToUpdate(manifest, cachedManifest);
  const failed: string[] = [];
  const newStories: string[] = [];

  // Track which stories are new vs updated
  const existingCachedIds = new Set(cacheService.getCachedStoryIds());

  for (let i = 0; i < storiesToUpdate.length; i++) {
    const storyId = storiesToUpdate[i];

    try {
      onProgress?.(i + 1, storiesToUpdate.length, storyId);

      // Fetch the story
      const story = await fetchStory(storyId);
      cacheService.setCachedStory(storyId, story);

      // Track if this is a new story
      if (!existingCachedIds.has(storyId)) {
        newStories.push(storyId);
      }

      // Fetch available translations
      const storyMeta = manifest.stories.find(s => s.id === storyId);
      if (storyMeta) {
        for (const lang of storyMeta.availableLanguages) {
          const translations = await fetchStoryTranslations(storyId, lang);
          if (translations) {
            cacheService.setCachedStoryTranslations(storyId, lang, translations);
          }
        }
      }
    } catch (error) {
      console.warn(`Failed to sync story ${storyId}:`, error);
      failed.push(storyId);
    }
  }

  // Update cached manifest
  cacheService.setCachedManifest(manifest);

  return {
    updated: storiesToUpdate.length - failed.length,
    failed,
    newStories,
  };
}

/**
 * Check if there are updates available without downloading
 */
export async function checkForUpdates(): Promise<{
  hasUpdates: boolean;
  updateCount: number;
  newStoryCount: number;
}> {
  try {
    const manifest = await fetchManifest();
    const cachedManifest = cacheService.getCachedManifest();
    const storiesToUpdate = getStoriesToUpdate(manifest, cachedManifest);

    // Count new stories
    const existingCachedIds = new Set(cacheService.getCachedStoryIds());
    const newStoryCount = storiesToUpdate.filter(id => !existingCachedIds.has(id)).length;

    return {
      hasUpdates: storiesToUpdate.length > 0,
      updateCount: storiesToUpdate.length,
      newStoryCount,
    };
  } catch {
    return {
      hasUpdates: false,
      updateCount: 0,
      newStoryCount: 0,
    };
  }
}
