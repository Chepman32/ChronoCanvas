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
import { spacing, borderRadius } from '../theme/colors';
import { useStoryStore } from '../store/storyStore';
import { useUserStore } from '../store/userStore';
import { useSettingsStore } from '../store/settingsStore';

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
  const theme = useSettingsStore(state => state.theme);

  if (!story) return null;

  const buttonText = progress ? 'Continue Story' : 'Start Adventure';

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: story.coverImageUrl }} style={styles.heroImage} />
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.textPrimary }]}>{story.title}</Text>
            <Text style={[styles.author, { color: theme.textSecondary }]}>by {story.author}</Text>
          </View>

          <View style={[styles.statsRow, { backgroundColor: theme.surface }]}>
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: theme.primary }]}>{story.estimatedDuration}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>minutes</Text>
            </View>
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: theme.primary }]}>{story.totalEndings}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>endings</Text>
            </View>
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: theme.primary }]}>{story.difficulty}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>difficulty</Text>
            </View>
          </View>

          {progress && (
            <View style={styles.progressSection}>
              <Text style={[styles.progressLabel, { color: theme.textPrimary }]}>Your Progress</Text>
              <View style={[styles.progressBar, { backgroundColor: theme.surface }]}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      backgroundColor: theme.primary,
                      width: `${
                        (progress.visitedNodes.length / story.totalNodes) * 100
                      }%`,
                    },
                  ]}
                />
              </View>
              <Text style={[styles.progressText, { color: theme.textSecondary }]}>
                {progress.visitedNodes.length} of {story.totalNodes} scenes
                visited
              </Text>
            </View>
          )}

          <View style={styles.descriptionSection}>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Story</Text>
            <Text style={[styles.description, { color: theme.textSecondary }]}>{story.description}</Text>
          </View>

          <View style={styles.genreSection}>
            {story.genre.map(genre => (
              <View key={genre} style={[styles.genreTag, { backgroundColor: theme.primaryLight }]}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
        <TouchableOpacity style={[styles.startButton, { backgroundColor: theme.primary }]} onPress={onStartStory}>
          <Text style={styles.startButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroImage: {
    width,
    height: height * 0.4,
    backgroundColor: '#F5F5F5',
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
    marginBottom: spacing.xs,
  },
  author: {
    fontSize: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.lg,
    padding: spacing.md,
    borderRadius: borderRadius.medium,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  progressSection: {
    marginBottom: spacing.lg,
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  progressBar: {
    height: 8,
    borderRadius: borderRadius.small,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  progressFill: {
    height: '100%',
  },
  progressText: {
    fontSize: 12,
  },
  descriptionSection: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  genreSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.xl,
  },
  genreTag: {
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
    borderTopWidth: 1,
  },
  startButton: {
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
