import { Story } from '../types';
import { Language } from '../localization/translations';

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
 * Apply translations to a story for a specific language
 * Returns a new story object with translated content
 */
export function localizeStory(
  story: Story,
  translations: Record<Language, StoryTranslations>,
  language: Language,
): Story {
  const translation = translations[language] || translations.en;

  return {
    ...story,
    title: translation.title,
    description: translation.description,
    author: translation.author,
    nodes: story.nodes.map(node => {
      const nodeTranslation = translation.nodes[node.id];

      if (!nodeTranslation) {
        // If no translation exists for this node, return original
        return node;
      }

      return {
        ...node,
        title: nodeTranslation.title,
        narration: nodeTranslation.narration,
        choices: node.choices.map(choice => {
          const choiceTranslation = nodeTranslation.choices[choice.id];

          if (!choiceTranslation) {
            // If no translation exists for this choice, return original
            return choice;
          }

          return {
            ...choice,
            text: choiceTranslation.text,
            description: choiceTranslation.description || choice.description,
          };
        }),
      };
    }),
  };
}

/**
 * Check if a story has translations available
 */
export function hasTranslations(
  storyId: string,
  availableTranslations: Record<string, Record<Language, StoryTranslations>>,
): boolean {
  return storyId in availableTranslations;
}

/**
 * Get available languages for a story
 */
export function getAvailableLanguages(
  storyId: string,
  availableTranslations: Record<string, Record<Language, StoryTranslations>>,
): Language[] {
  if (!availableTranslations[storyId]) {
    return ['en'];
  }

  return Object.keys(availableTranslations[storyId]) as Language[];
}
