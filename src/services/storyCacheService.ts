import { MMKV } from 'react-native-mmkv';
import { Story } from '../types';
import { Language } from '../localization/translations';
import {
  RemoteManifest,
  RemoteStoryTranslations,
  CACHE_KEYS,
} from '../types/remoteStory';

// Create a dedicated MMKV instance for story cache
const storage = new MMKV({ id: 'story-cache' });

/**
 * Get the cached manifest
 */
export function getCachedManifest(): RemoteManifest | null {
  try {
    const data = storage.getString(CACHE_KEYS.MANIFEST);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

/**
 * Save the manifest to cache
 */
export function setCachedManifest(manifest: RemoteManifest): void {
  storage.set(CACHE_KEYS.MANIFEST, JSON.stringify(manifest));
  storage.set(CACHE_KEYS.LAST_SYNC, Date.now().toString());
}

/**
 * Get a cached story by ID
 */
export function getCachedStory(storyId: string): Story | null {
  try {
    const data = storage.getString(`story_${storyId}`);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

/**
 * Save a story to cache
 */
export function setCachedStory(storyId: string, story: Story): void {
  storage.set(`story_${storyId}`, JSON.stringify(story));

  // Track cached story IDs
  const cachedIds = getCachedStoryIds();
  if (!cachedIds.includes(storyId)) {
    cachedIds.push(storyId);
    storage.set(CACHE_KEYS.CACHED_STORIES, JSON.stringify(cachedIds));
  }
}

/**
 * Get cached translations for a story in a specific language
 */
export function getCachedStoryTranslations(
  storyId: string,
  language: Language,
): RemoteStoryTranslations | null {
  try {
    const data = storage.getString(`story_${storyId}_i18n_${language}`);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

/**
 * Save story translations to cache
 */
export function setCachedStoryTranslations(
  storyId: string,
  language: Language,
  translations: RemoteStoryTranslations,
): void {
  storage.set(`story_${storyId}_i18n_${language}`, JSON.stringify(translations));
}

/**
 * Get all cached story IDs
 */
export function getCachedStoryIds(): string[] {
  try {
    const data = storage.getString(CACHE_KEYS.CACHED_STORIES);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Get the timestamp of the last sync
 */
export function getLastSyncTimestamp(): number | null {
  const data = storage.getString(CACHE_KEYS.LAST_SYNC);
  return data ? parseInt(data, 10) : null;
}

/**
 * Get all cached stories
 */
export function getAllCachedStories(): Story[] {
  const cachedIds = getCachedStoryIds();
  const stories: Story[] = [];

  for (const id of cachedIds) {
    const story = getCachedStory(id);
    if (story) {
      stories.push(story);
    }
  }

  return stories;
}

/**
 * Clear all cached stories and metadata
 */
export function clearCache(): void {
  const cachedIds = getCachedStoryIds();

  // All supported languages for clearing translations
  const allLanguages: Language[] = [
    'en', 'ru', 'es', 'de', 'fr', 'pt', 'ja', 'zh', 'ko', 'uk',
    'it', 'ar', 'hi', 'nl', 'pl', 'tr',
  ];

  // Clear all story data
  for (const id of cachedIds) {
    storage.delete(`story_${id}`);
    // Clear all potential language files
    for (const lang of allLanguages) {
      storage.delete(`story_${id}_i18n_${lang}`);
    }
  }

  // Clear metadata
  storage.delete(CACHE_KEYS.MANIFEST);
  storage.delete(CACHE_KEYS.MANIFEST_ETAG);
  storage.delete(CACHE_KEYS.LAST_SYNC);
  storage.delete(CACHE_KEYS.CACHED_STORIES);
}

/**
 * Get approximate cache size in bytes
 */
export function getCacheSize(): number {
  let size = 0;
  const cachedIds = getCachedStoryIds();

  const manifestData = storage.getString(CACHE_KEYS.MANIFEST);
  if (manifestData) {
    size += manifestData.length * 2; // UTF-16 encoding
  }

  for (const id of cachedIds) {
    const storyData = storage.getString(`story_${id}`);
    if (storyData) {
      size += storyData.length * 2;
    }
  }

  return size;
}

/**
 * Format bytes to human readable string
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';

  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
