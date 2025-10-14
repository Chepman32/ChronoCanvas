import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useSettingsStore } from '../store/settingsStore';
import { ThemeName } from '../theme/colors';
import { spacing, borderRadius } from '../theme/colors';
import { useTranslation } from '../localization/useTranslation';
import { Language, languageNames } from '../localization/translations';

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
    soundEnabled,
    hapticsEnabled,
    setTheme,
    setLanguage,
    toggleSound,
    toggleHaptics,
  } = useSettingsStore();

  const t = useTranslation();

  const themeOptions: { value: ThemeName; label: string }[] = [
    { value: 'light', label: t.themeLight },
    { value: 'dark', label: t.themeDark },
    { value: 'solar', label: t.themeSolar },
    { value: 'mono', label: t.themeMono },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
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

        {/* Sound Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            {t.audio}
          </Text>
          <View
            style={[
              styles.settingRow,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <View>
              <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>
                {t.soundEffects}
              </Text>
              <Text
                style={[
                  styles.settingDescription,
                  { color: theme.textSecondary },
                ]}
              >
                {t.soundEffectsDescription}
              </Text>
            </View>
            <Switch
              value={soundEnabled}
              onValueChange={toggleSound}
              trackColor={{ false: theme.border, true: theme.primaryLight }}
              thumbColor={soundEnabled ? theme.primary : theme.surface}
            />
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
    paddingTop: 60,
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
    width: '48%',
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
});
