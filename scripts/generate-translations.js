#!/usr/bin/env node
/**
 * Script to generate TypeScript translation files from JSON translations
 * Run: npm run generate-translations
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '../src/data/translations');
const LOCALIZATIONS_DIR = path.join(__dirname, '../src/data/localizations');

const LANGUAGES = ['en', 'ru', 'es', 'de', 'fr', 'pt', 'ja', 'zh', 'ko', 'uk'];

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function convertJSONToTS(storyId, translations) {
  const storyName = storyId.replace(/-/g, '_');

  let tsContent = `import { Language } from '../../localization/translations';

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

export const ${storyName}StoryTranslations: Record<Language, StoryTranslations> = {\n`;

  // Add translations for each language
  for (const lang of LANGUAGES) {
    const translation = translations.get(lang);

    if (translation) {
      tsContent += `  // ${getLanguageName(lang)}\n`;
      tsContent += `  ${lang}: {\n`;
      tsContent += `    title: '${escapeString(translation.story.title)}',\n`;
      tsContent += `    description: '${escapeString(
        translation.story.description,
      )}',\n`;
      tsContent += `    author: '${escapeString(translation.story.author)}',\n`;
      tsContent += `    nodes: {\n`;

      for (const node of translation.nodes) {
        tsContent += `      '${node.id}': {\n`;
        tsContent += `        title: '${escapeString(node.title)}',\n`;
        tsContent += `        narration: '${escapeString(node.narration)}',\n`;
        tsContent += `        choices: {\n`;

        for (const choice of node.choices) {
          tsContent += `          '${choice.id}': {\n`;
          tsContent += `            text: '${escapeString(choice.text)}',\n`;
          if (choice.description) {
            tsContent += `            description: '${escapeString(
              choice.description,
            )}',\n`;
          }
          tsContent += `          },\n`;
        }

        tsContent += `        },\n`;
        tsContent += `      },\n`;
      }

      tsContent += `    },\n`;
      tsContent += `  },\n\n`;
    } else {
      // Placeholder for missing translations
      tsContent += `  // ${getLanguageName(lang)} - Not yet translated\n`;
      tsContent += `  ${lang}: { title: '', description: '', author: '', nodes: {} },\n\n`;
    }
  }

  tsContent += `};\n`;

  return tsContent;
}

function getLanguageName(lang) {
  const names = {
    en: 'English',
    ru: 'Русский',
    es: 'Español',
    de: 'Deutsch',
    fr: 'Français',
    pt: 'Português',
    ja: '日本語',
    zh: '中文',
    ko: '한국어',
    uk: 'Українська',
  };
  return names[lang] || lang;
}

function generateTranslations() {
  console.log('🔄 Generating translation files...\n');

  // Get all story directories
  const storyDirs = fs
    .readdirSync(TRANSLATIONS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const generatedFiles = [];
  const storyIds = [];

  for (const storyDir of storyDirs) {
    const storyPath = path.join(TRANSLATIONS_DIR, storyDir);
    const translations = new Map();

    // Read all JSON files for this story
    const files = fs
      .readdirSync(storyPath)
      .filter(file => file.endsWith('.json'));

    if (files.length === 0) continue;

    for (const file of files) {
      const lang = path.basename(file, '.json');
      const filePath = path.join(storyPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const json = JSON.parse(content);
      translations.set(lang, json);
    }

    // Generate TypeScript file
    const storyId = storyDir;
    const tsContent = convertJSONToTS(storyId, translations);
    const outputFileName = `${storyDir}_i18n.ts`;
    const outputPath = path.join(LOCALIZATIONS_DIR, outputFileName);

    fs.writeFileSync(outputPath, tsContent, 'utf-8');
    generatedFiles.push(outputFileName);
    storyIds.push(storyId);

    console.log(
      `✅ Generated: ${outputFileName} (${translations.size} languages)`,
    );
  }

  // Update index.ts
  updateIndexFile(storyIds, generatedFiles);

  console.log(
    `\n✨ Done! Generated ${generatedFiles.length} translation files.`,
  );
}

function updateIndexFile(storyIds, fileNames) {
  const imports = fileNames
    .map((fileName, index) => {
      const storyName = storyIds[index].replace(/-/g, '_');
      const importName = `${storyName}StoryTranslations`;
      return `import { ${importName} } from './${fileName.replace(
        '.ts',
        '',
      )}';`;
    })
    .join('\n');

  const registryEntries = storyIds
    .map((storyId, index) => {
      const storyName = storyId.replace(/-/g, '_');
      return `  '${storyId}': ${storyName}StoryTranslations,`;
    })
    .join('\n');

  const indexContent = `import { Language } from '../../localization/translations';

${imports}

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
 * Auto-generated by scripts/generate-translations.js
 */
export const storyTranslationsRegistry: Record<
  string,
  Record<Language, StoryTranslations>
> = {
${registryEntries}
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
`;

  const indexPath = path.join(LOCALIZATIONS_DIR, 'index.ts');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  console.log('\n✅ Updated: index.ts');
}

// Run the script
generateTranslations();
