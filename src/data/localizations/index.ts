import { Language } from '../../localization/translations';
import { deepSeaStoryTranslations } from './story4_deepsea_i18n';
import { enchantedForestStoryTranslations } from './story1_enchantedforest_i18n';

interface StoryTranslations {
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
 * Central registry of all story translations
 * Key: story ID
 * Value: translations for all languages
 */
export const storyTranslationsRegistry: Record<
  string,
  Record<Language, StoryTranslations>
> = {
  'story-1': enchantedForestStoryTranslations,
  'story-4': deepSeaStoryTranslations,
  // Add more story translations here as they become available
  // 'story-3': timeloopStoryTranslations,
  // 'story-2': midnightCuratorTranslations,
  // etc.
};

/**
 * Get translations for a specific story
 */
export function getStoryTranslations(
  storyId: string,
): Record<Language, StoryTranslations> | undefined {
  return storyTranslationsRegistry[storyId];
}

/**
 * Check if a story has translations
 */
export function hasStoryTranslations(storyId: string): boolean {
  return storyId in storyTranslationsRegistry;
}
