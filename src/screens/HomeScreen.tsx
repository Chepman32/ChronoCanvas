import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { spacing, borderRadius } from '../theme/colors';
import { useStoryStore } from '../store/storyStore';
import { useSettingsStore } from '../store/settingsStore';
import { Story, StoryGenre } from '../types';
import { useTranslation } from '../localization/useTranslation';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.65;
const FEATURED_CARD_WIDTH = width - spacing.md * 2;
const FEATURED_CARD_HEIGHT = 210;

interface HomeScreenProps {
  onStoryPress: (storyId: string) => void;
  onSettingsPress: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStoryPress,
  onSettingsPress,
}) => {
  const stories = useStoryStore(state => state.stories);
  const theme = useSettingsStore(state => state.theme);
  const t = useTranslation();

  const genreLabels: Record<StoryGenre, string> = {
    fantasy: t.genreFantasy,
    scifi: t.genreSciFi,
    mystery: t.genreMystery,
    romance: t.genreRomance,
    horror: t.genreHorror,
    adventure: t.genreAdventure,
    detective: t.genreDetective,
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return t.difficultyEasy;
      case 'medium':
        return t.difficultyMedium;
      case 'hard':
        return t.difficultyHard;
      default:
        return difficulty;
    }
  };

  const featuredStories = useMemo(() => stories.slice(0, 5), [stories]);

  const storiesByGenre = useMemo(() => {
    const genreMap: Partial<Record<StoryGenre, Story[]>> = {};
    const featuredIds = new Set(featuredStories.map(s => s.id));

    stories.forEach(story => {
      if (featuredIds.has(story.id)) return;

      story.genre.forEach(genre => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }
        if (!genreMap[genre]!.some(s => s.id === story.id)) {
          genreMap[genre]!.unshift(story);
        }
      });
    });

    return genreMap;
  }, [stories, featuredStories]);

  const renderStoryCard = (story: Story) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onStoryPress(story.id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: story.thumbnailUrl }} style={styles.cardImage} />
      {story.isPremium && (
        <View style={styles.premiumBadge}>
          <Text style={styles.premiumText}>{t.premium}</Text>
        </View>
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {story.title}
        </Text>
        <Text style={styles.cardAuthor}>{story.author}</Text>
        <View style={styles.cardMeta}>
          <Text style={styles.metaText}>
            {story.estimatedDuration} {t.minutes}
          </Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>
            {getDifficultyLabel(story.difficulty)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFeaturedCard = (story: Story) => (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => onStoryPress(story.id)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: story.coverImageUrl }}
        style={styles.featuredCardImage}
      />
      {story.isPremium && (
        <View style={styles.featuredPremiumBadge}>
          <Text style={styles.premiumText}>{t.premium}</Text>
        </View>
      )}
      <View style={styles.featuredCardContent}>
        <Text style={styles.featuredCardTitle} numberOfLines={2}>
          {story.title}
        </Text>
        <Text style={styles.featuredCardAuthor}>{story.author}</Text>
        <View style={styles.cardMeta}>
          <Text style={styles.metaText}>
            {story.estimatedDuration} {t.minutes}
          </Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>
            {getDifficultyLabel(story.difficulty)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderGenreSection = (genre: StoryGenre, stories: Story[]) => (
    <View key={genre} style={styles.genreSection}>
      <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
        {genreLabels[genre]}
      </Text>
      <FlatList
        data={stories}
        renderItem={({ item }) => renderStoryCard(item)}
        keyExtractor={item => `${genre}-${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContent}
        ItemSeparatorComponent={() => <View style={{ width: spacing.md }} />}
      />
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>{t.appName}</Text>
            <Text style={styles.headerSubtitle}>{t.appTagline}</Text>
          </View>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={onSettingsPress}
            activeOpacity={0.7}
          >
            <Text style={styles.settingsIcon}>⚙</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.featuredSection}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            {t.featuredStories}
          </Text>
          <FlatList
            data={featuredStories}
            renderItem={({ item }) => renderFeaturedCard(item)}
            keyExtractor={item => `featured-${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
            snapToInterval={FEATURED_CARD_WIDTH + spacing.md}
            decelerationRate="fast"
            ItemSeparatorComponent={() => (
              <View style={{ width: spacing.md }} />
            )}
          />
        </View>

        {Object.entries(storiesByGenre).map(([genre, genreStories]) =>
          renderGenreSection(genre as StoryGenre, genreStories),
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: spacing.md,
  },
  featuredSection: {
    marginBottom: spacing.xl,
  },
  genreSection: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  carouselContent: {
    paddingHorizontal: spacing.md,
  },
  featuredCard: {
    width: FEATURED_CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  featuredCardImage: {
    width: '100%',
    height: FEATURED_CARD_HEIGHT,
    borderTopLeftRadius: borderRadius.large,
    borderTopRightRadius: borderRadius.large,
    backgroundColor: '#F5F5F5',
  },
  featuredPremiumBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: borderRadius.small,
  },
  featuredCardContent: {
    padding: spacing.md,
  },
  featuredCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 6,
  },
  featuredCardAuthor: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: borderRadius.medium,
    borderTopRightRadius: borderRadius.medium,
    backgroundColor: '#F5F5F5',
  },
  premiumBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: borderRadius.small,
  },
  premiumText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardContent: {
    padding: spacing.sm,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
  },
  cardAuthor: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 8,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 11,
    color: '#757575',
    marginRight: 4,
  },
});
