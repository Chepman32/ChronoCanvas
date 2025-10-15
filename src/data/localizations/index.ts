import { Language } from '../../localization/translations';
import { deepSeaStoryTranslations } from './story4_deepsea_i18n';
import { enchantedForestStoryTranslations } from './story1_enchantedforest_i18n';
import { midnightCuratorStoryTranslations } from './story_midnight_curator_i18n';
import { neonNightsStoryTranslations } from './story2_neonnights_i18n';
import { midnightMissingStoryTranslations } from './story7481296_midnightMissing_i18n';

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
  'story-2': neonNightsStoryTranslations,
  'story-4': deepSeaStoryTranslations,
  'story-847362951': midnightCuratorStoryTranslations,
  'story-7481296': midnightMissingStoryTranslations,
  // Add more story translations here as they become available
  // 'story-3': timeloopStoryTranslations,
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
