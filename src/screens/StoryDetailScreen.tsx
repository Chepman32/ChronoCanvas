import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { colors, spacing, borderRadius } from '../theme/colors';
import { useStoryStore } from '../store/storyStore';
import { useUserStore } from '../store/userStore';

const { width, height } = Dimensions.get('window');

interface StoryDetailScreenProps {
  storyId: string;
  onBack: () => void;
  onStartStory: () => void;
}

export const StoryDetailScreen: React.FC<StoryDetailScreenProps> = ({
  storyId,
  onBack,
  onStartStory,
}) => {
  const stories = useStoryStore(state => state.stories);
  const story = stories.find(s => s.id === storyId);
  const progress = useUserStore(state => state.getStoryProgress(storyId));

  if (!story) return null;

  const buttonText = progress ? 'Continue Story' : 'Start Adventure';

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: story.coverImageUrl }} style={styles.heroImage} />
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.author}>by {story.author}</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{story.estimatedDuration}</Text>
              <Text style={styles.statLabel}>minutes</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{story.totalEndings}</Text>
              <Text style={styles.statLabel}>endings</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{story.difficulty}</Text>
              <Text style={styles.statLabel}>difficulty</Text>
            </View>
          </View>

          {progress && (
            <View style={styles.progressSection}>
              <Text style={styles.progressLabel}>Your Progress</Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${
                        (progress.visitedNodes.length / story.totalNodes) * 100
                      }%`,
                    },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>
                {progress.visitedNodes.length} of {story.totalNodes} scenes
                visited
              </Text>
            </View>
          )}

          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Story</Text>
            <Text style={styles.description}>{story.description}</Text>
          </View>

          <View style={styles.genreSection}>
            {story.genre.map(genre => (
              <View key={genre} style={styles.genreTag}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton} onPress={onStartStory}>
          <Text style={styles.startButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroImage: {
    width,
    height: height * 0.4,
    backgroundColor: colors.surface,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.medium,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    padding: spacing.md,
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  author: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.medium,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  progressSection: {
    marginBottom: spacing.lg,
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.small,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  progressText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  descriptionSection: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  genreSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.xl,
  },
  genreTag: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.pill,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  genreText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    padding: spacing.md,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  startButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
