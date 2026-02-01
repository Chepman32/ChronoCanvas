import { Story } from '../types';

/**
 * Calculate estimated story duration based on number of nodes
 * 1 step/node = 1 minute
 */
export function calculateEstimatedDuration(story: Story): number {
  return story.nodes.length;
}

/**
 * Get formatted duration string with minutes label
 */
export function getDurationLabel(story: Story, minutesLabel: string): string {
  return `${calculateEstimatedDuration(story)} ${minutesLabel}`;
}
