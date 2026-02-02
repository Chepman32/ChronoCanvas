import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { useSettingsStore } from '../store/settingsStore';
import { useStoryStore } from '../store/storyStore';
import { useSyncStore } from '../store/remoteSyncStore';
import { ThemeName } from '../theme/colors';
import { spacing, borderRadius } from '../theme/colors';
import { useTranslation } from '../localization/useTranslation';
import { Language, languageNames } from '../localization/translations';
import { useResponsive } from '../hooks';
import {
  clearCache,
  getCacheSize,
  formatBytes,
  getAllCachedStories,
  getLastSyncTimestamp,
} from '../services/storyCacheService';
import { syncStories } from '../services/remoteStoryService';

interface SettingsScreenProps {
  onBack: () => void;
}

const languageOptions: Language[] = [
  'en',
  'ru',
  'es',
  'de',
  'fr',
  'pt',
  'ja',
  'zh',
  'ko',
  'uk',
];

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const {
    themeName,
    theme,
    language,
    fontSize,
    hapticsEnabled,
    setTheme,
    setLanguage,
    setFontSize,
    toggleHaptics,
  } = useSettingsStore();

  const setRemoteStories = useStoryStore(state => state.setRemoteStories);
  const { isSyncing, lastSyncTime, syncProgress, startSync, updateProgress, finishSync, setLastSyncTime } =
    useSyncStore();

  const t = useTranslation();
  const { isTablet, isLandscape, insets } = useResponsive();

  const gridColumns = isTablet ? (isLandscape ? 4 : 3) : 2;
  const cardWidthPercent = `${Math.floor(100 / gridColumns) - 2}%` as const;

  const [cacheSize, setCacheSize] = useState(0);

  // Update cache size on mount and after operations
  const refreshCacheSize = useCallback(() => {
    setCacheSize(getCacheSize());
  }, []);

  useEffect(() => {
    refreshCacheSize();
    // Restore last sync time from cache
    const lastSync = getLastSyncTimestamp();
    if (lastSync) {
      setLastSyncTime(lastSync);
    }
  }, [refreshCacheSize, setLastSyncTime]);

  const handleClearCache = () => {
    Alert.alert(
      t.clearCacheTitle || 'Clear Cache',
      t.clearCacheMessage || 'This will remove all downloaded stories. They will be re-downloaded when you check for new stories.',
      [
        { text: t.cancel || 'Cancel', style: 'cancel' },
        {
          text: t.clear || 'Clear',
          style: 'destructive',
          onPress: () => {
            clearCache();
            setCacheSize(0);
            setRemoteStories([]);
            setLastSyncTime(null);
          },
        },
      ],
    );
  };

  const handleCheckForStories = async () => {
    startSync();

    try {
      const result = await syncStories((current, total, storyId) => {
        updateProgress(current, total, storyId);
      });

      finishSync(true);

      // Reload stories
      const cachedStories = getAllCachedStories();
      setRemoteStories(cachedStories);
      refreshCacheSize();

      Alert.alert(
        t.syncComplete || 'Sync Complete',
        (t.storiesUpdated || '{count} stories updated').replace('{count}', result.updated.toString()),
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Sync failed';
      finishSync(false, message);
      Alert.alert(t.syncError || 'Sync Error', message);
    }
  };

  const formatLastSync = (timestamp: number | null): string => {
    if (!timestamp) return t.never || 'Never';
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const themeOptions: { value: ThemeName; label: string }[] = [
    { value: 'light', label: t.themeLight },
    { value: 'dark', label: t.themeDark },
    { value: 'solar', label: t.themeSolar },
    { value: 'mono', label: t.themeMono },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary, paddingTop: insets.top + spacing.md }]}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← {t.back}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t.settings}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Theme Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            {t.theme}
          </Text>
          <View style={styles.themeGrid}>
            {themeOptions.map(option => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.themeCard,
                  {
                    width: cardWidthPercent,
                    backgroundColor: theme.surface,
                    borderColor:
                      themeName === option.value ? theme.primary : theme.border,
                    borderWidth: themeName === option.value ? 2 : 1,
                  },
                ]}
                onPress={() => setTheme(option.value)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.themeLabel,
                    {
                      color: theme.textPrimary,
                      fontWeight:
                        themeName === option.value ? 'bold' : 'normal',
                    },
                  ]}
                >
                  {option.label}
                </Text>
                {themeName === option.value && (
                  <View
                    style={[
                      styles.checkmark,
                      { backgroundColor: theme.primary },
                    ]}
                  >
                    <Text style={styles.checkmarkText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Language Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            {t.language}
          </Text>
          <View style={styles.themeGrid}>
            {languageOptions.map(lang => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.themeCard,
                  {
                    width: cardWidthPercent,
                    backgroundColor: theme.surface,
                    borderColor:
                      language === lang ? theme.primary : theme.border,
                    borderWidth: language === lang ? 2 : 1,
                  },
                ]}
                onPress={() => setLanguage(lang)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.themeLabel,
                    {
                      color: theme.textPrimary,
                      fontWeight: language === lang ? 'bold' : 'normal',
                    },
                  ]}
                >
                  {languageNames[lang]}
                </Text>
                {language === lang && (
                  <View
                    style={[
                      styles.checkmark,
                      { backgroundColor: theme.primary },
                    ]}
                  >
                    <Text style={styles.checkmarkText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Haptics Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            {t.feedback}
          </Text>
          <View
            style={[
              styles.settingRow,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <View>
              <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>
                {t.hapticFeedback}
              </Text>
              <Text
                style={[
                  styles.settingDescription,
                  { color: theme.textSecondary },
                ]}
              >
                {t.hapticFeedbackDescription}
              </Text>
            </View>
            <Switch
              value={hapticsEnabled}
              onValueChange={toggleHaptics}
              trackColor={{ false: theme.border, true: theme.primaryLight }}
              thumbColor={hapticsEnabled ? theme.primary : theme.surface}
            />
          </View>
        </View>

        {/* Font Size Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            {t.textSize}
          </Text>

          {/* Preview Text */}
          <View
            style={[
              styles.settingRow,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>
                {t.textSizeDescription}
              </Text>
              <Text
                style={[
                  styles.textSizePreview,
                  {
                    color: theme.textSecondary,
                    fontSize: 14 * fontSize,
                    lineHeight: 20 * fontSize,
                  },
                ]}
              >
                {t.textSizePreview}
              </Text>
            </View>
          </View>

          {/* Slider Controls */}
          <View style={styles.fontSizeSliderContainer}>
            <View style={styles.fontSizeIndicator}>
              <Text style={[styles.fontSizeValue, { color: theme.textPrimary }]}>
                {Math.round(fontSize * 100)}%
              </Text>
            </View>

            <View style={styles.sliderWrapper}>
              <Text style={[styles.sliderLabel, { color: theme.textSecondary }]}>
                {t.textSizeSmaller}
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0.8}
                maximumValue={2.0}
                step={0.1}
                value={fontSize}
                onValueChange={setFontSize}
                minimumTrackTintColor={theme.primary}
                maximumTrackTintColor={theme.border}
                thumbTintColor={theme.primary}
              />
              <Text style={[styles.sliderLabel, { color: theme.textSecondary }]}>
                {t.textSizeLarger}
              </Text>
            </View>
          </View>
        </View>

        {/* Story Cache Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            {t.storyCache || 'Story Cache'}
          </Text>

          {/* Cache Info */}
          <View
            style={[
              styles.settingRow,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>
                {t.cacheSize || 'Cache Size'}
              </Text>
              <Text
                style={[styles.settingDescription, { color: theme.textSecondary }]}
              >
                {formatBytes(cacheSize)}
              </Text>
            </View>
          </View>

          {/* Last Sync */}
          <View
            style={[
              styles.settingRow,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
                marginTop: spacing.sm,
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>
                {t.lastSync || 'Last Sync'}
              </Text>
              <Text
                style={[styles.settingDescription, { color: theme.textSecondary }]}
              >
                {formatLastSync(lastSyncTime)}
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.cacheButtonsContainer}>
            {/* Check for New Stories Button */}
            <TouchableOpacity
              style={[
                styles.cacheButton,
                { backgroundColor: theme.primary },
                isSyncing && styles.cacheButtonDisabled,
              ]}
              onPress={handleCheckForStories}
              disabled={isSyncing}
              activeOpacity={0.7}
            >
              {isSyncing ? (
                <View style={styles.syncingContainer}>
                  <ActivityIndicator color="#FFFFFF" size="small" />
                  <Text style={styles.cacheButtonText}>
                    {syncProgress
                      ? `${syncProgress.current}/${syncProgress.total}`
                      : t.syncing || 'Syncing...'}
                  </Text>
                </View>
              ) : (
                <Text style={styles.cacheButtonText}>
                  {t.checkForNewStories || 'Check for New Stories'}
                </Text>
              )}
            </TouchableOpacity>

            {/* Clear Cache Button */}
            <TouchableOpacity
              style={[
                styles.cacheButton,
                styles.clearCacheButton,
                { borderColor: theme.error },
                isSyncing && styles.cacheButtonDisabled,
              ]}
              onPress={handleClearCache}
              disabled={isSyncing}
              activeOpacity={0.7}
            >
              <Text style={[styles.cacheButtonText, { color: theme.error }]}>
                {t.clearCache || 'Clear Cache'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* App Info */}
        <View style={[styles.section, styles.infoSection]}>
          <Text style={[styles.infoText, { color: theme.textSecondary }]}>
            {t.appVersion}
          </Text>
          <Text style={[styles.infoText, { color: theme.textSecondary }]}>
            {t.appDescription}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
  },
  backButton: {
    marginBottom: spacing.sm,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: spacing.md,
  },
  themeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  themeCard: {
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    marginBottom: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  themeLabel: {
    fontSize: 16,
  },
  checkmark: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    borderWidth: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    maxWidth: 250,
  },
  infoSection: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  infoText: {
    fontSize: 12,
    marginBottom: 4,
  },
  textSizePreview: {
    fontSize: 14,
    marginTop: spacing.sm,
    lineHeight: 20,
    minHeight: 84,
  },
  fontSizeSliderContainer: {
    marginTop: spacing.md,
  },
  fontSizeIndicator: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  fontSizeValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sliderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  sliderLabel: {
    fontSize: 12,
    fontWeight: '600',
    minWidth: 45,
    textAlign: 'center',
  },
  slider: {
    flex: 1,
    height: 40,
  },
  cacheButtonsContainer: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  cacheButton: {
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  clearCacheButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  cacheButtonDisabled: {
    opacity: 0.6,
  },
  cacheButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  syncingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
});
