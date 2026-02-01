import { Language } from '../localization/translations';
import { StoryGenre } from './index';

/**
 * Remote story manifest - index of all available remote stories
 */
export interface RemoteManifest {
  version: string;
  lastUpdated: string;
  baseUrl: string;
  stories: RemoteStoryMeta[];
}

/**
 * Metadata for a remote story (used in manifest)
 */
export interface RemoteStoryMeta {
  id: string;
  version: string;
  title: string;
  genre: StoryGenre;
  isPremium: boolean;
  productId?: string;
  thumbnailUrl: string;
  availableLanguages: Language[];
  lastUpdated: string;
  size: number; // approximate size in bytes
}

/**
 * Story translations for a specific language (remote format)
 */
export interface RemoteStoryTranslations {
  title: string;
  description: string;
  author: string;
  nodes: {
    [nodeId: string]: {
      title: string;
      narration: string;
      choices: {
        [choiceId: string]: {
          text: string;
          description?: string;
        };
      };
    };
  };
}

/**
 * Sync result after checking for updates
 */
export interface SyncResult {
  updated: number;
  failed: string[];
  newStories: string[];
}

/**
 * Cache keys used by the story cache service
 */
export const CACHE_KEYS = {
  MANIFEST: 'remote_manifest',
  MANIFEST_ETAG: 'remote_manifest_etag',
  LAST_SYNC: 'last_sync_timestamp',
  CACHED_STORIES: 'cached_story_ids',
} as const;
