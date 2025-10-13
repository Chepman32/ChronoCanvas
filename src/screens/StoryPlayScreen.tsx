import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import { colors, spacing, borderRadius } from '../theme/colors';
import { useStoryStore } from '../store/storyStore';
import { useUserStore } from '../store/userStore';
import { Choice } from '../types';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800';

const { width, height } = Dimensions.get('window');

interface StoryPlayScreenProps {
  storyId: string;
  onExit: () => void;
}

export const StoryPlayScreen: React.FC<StoryPlayScreenProps> = ({
  storyId,
  onExit,
}) => {
  const { loadStory, navigateToNode, currentNode, currentStory } =
    useStoryStore();
  const { trackProgress } = useUserStore();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    loadStory(storyId);
  }, [storyId]);

  useEffect(() => {
    if (currentNode) {
      setImageError(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [currentNode]);

  const handleChoice = (choice: Choice) => {
    if (!currentNode || !currentStory) return;

    trackProgress(storyId, currentNode.id, choice.id);

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      navigateToNode(choice.targetNodeId);
      fadeAnim.setValue(0);
    });
  };

  const handleExit = () => {
    if (currentNode) {
      trackProgress(storyId, currentNode.id);
    }
    onExit();
  };

  if (!currentNode || !currentStory) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading story...</Text>
      </View>
    );
  }

  const isEnding = currentNode.type === 'ending';

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Image
          source={{ uri: imageError ? FALLBACK_IMAGE : currentNode.imageUrl }}
          style={styles.backgroundImage}
          resizeMode="cover"
          onError={() => {
            console.log('Image failed to load:', currentNode.imageUrl);
            setImageError(true);
          }}
        />
        <View style={styles.overlay} />

        <View style={styles.topBar}>
          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <Text style={styles.exitButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.narrationPanel}>
          <ScrollView
            style={styles.narrationScroll}
            contentContainerStyle={styles.narrationContent}
          >
            <Text style={styles.nodeTitle}>{currentNode.title}</Text>
            <Text style={styles.narrationText}>{currentNode.narration}</Text>

            {isEnding && (
              <View style={styles.endingBadge}>
                <Text style={styles.endingText}>THE END</Text>
              </View>
            )}
          </ScrollView>

          {!isEnding && currentNode.choices.length > 0 && (
            <View style={styles.choicesContainer}>
              {currentNode.choices.map((choice, index) => (
                <TouchableOpacity
                  key={choice.id}
                  style={[
                    styles.choiceCard,
                    { marginTop: index === 0 ? 0 : spacing.sm },
                  ]}
                  onPress={() => handleChoice(choice)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.choiceText}>{choice.text}</Text>
                  {choice.description && (
                    <Text style={styles.choiceDescription}>
                      {choice.description}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}

          {isEnding && (
            <TouchableOpacity style={styles.finishButton} onPress={handleExit}>
              <Text style={styles.finishButtonText}>Finish Story</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width,
    height,
    resizeMode: 'cover',
    backgroundColor: '#1a1a2e',
  },
  overlay: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  topBar: {
    paddingTop: 50,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  exitButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  narrationPanel: {
    position: 'absolute',
    bottom: 0,
    width,
    maxHeight: height * 0.6,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    borderTopLeftRadius: borderRadius.xlarge,
    borderTopRightRadius: borderRadius.xlarge,
    padding: spacing.lg,
  },
  narrationScroll: {
    maxHeight: height * 0.25,
  },
  narrationContent: {
    paddingBottom: spacing.md,
  },
  nodeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: spacing.sm,
  },
  narrationText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 24,
  },
  endingBadge: {
    marginTop: spacing.lg,
    alignSelf: 'center',
    backgroundColor: colors.gold,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.medium,
  },
  endingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  choicesContainer: {
    marginTop: spacing.lg,
  },
  choiceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: borderRadius.medium,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  choiceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  choiceDescription: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  finishButton: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: height / 2,
  },
});
