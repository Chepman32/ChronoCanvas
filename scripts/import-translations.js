const fs = require('fs');
const path = require('path');

/**
 * Import translated JSON files and generate TypeScript localization files
 */

const languageCodes = {
  ru: 'Russian',
  es: 'Spanish',
  de: 'German',
  fr: 'French',
  pt: 'Portuguese',
  ja: 'Japanese',
  zh: 'Chinese',
  ko: 'Korean',
  uk: 'Ukrainian',
};

console.log('Importing translations...\n');

// Check for translation files
const translationFiles = Object.keys(languageCodes).map(lang => ({
  lang,
  file: `TRANSLATIONS_${lang}.json`,
  path: path.join(__dirname, `../TRANSLATIONS_${lang}.json`),
}));

const availableTranslations = translationFiles.filter(t =>
  fs.existsSync(t.path),
);

if (availableTranslations.length === 0) {
  console.log('❌ No translation files found!');
  console.log('\nExpected files:');
  translationFiles.forEach(t => console.log(`   - ${t.file}`));
  console.log('\nPlease add translated JSON files and try again.');
  process.exit(1);
}

console.log(`Found ${availableTranslations.length} translation files:\n`);
availableTranslations.forEach(t =>
  console.log(`   ✓ ${t.file} (${languageCodes[t.lang]})`),
);

// Load English source for structure
const sourcePath = path.join(__dirname, '../TRANSLATION_SOURCE.json');
if (!fs.existsSync(sourcePath)) {
  console.log('\n❌ TRANSLATION_SOURCE.json not found!');
  process.exit(1);
}

const source = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

// Process each story
source.stories.forEach(story => {
  const storyId = story.storyId;
  const filename = `story${storyId.replace('story-', '')}_i18n.ts`;
  const outputPath = path.join(
    __dirname,
    '../src/data/localizations',
    filename,
  );

  console.log(`\n📝 Generating ${filename}...`);

  // Build the TypeScript file
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

export const story${storyId.replace(/[^a-zA-Z0-9]/g, '')}Translations: Record<
  Language,
  StoryTranslations
> = {
  // English (Original)
  en: ${JSON.stringify(buildStoryTranslation(story), null, 4).replace(
    /"([^"]+)":/g,
    '$1:',
  )},
`;

  // Add each language
  availableTranslations.forEach(t => {
    const translations = JSON.parse(fs.readFileSync(t.path, 'utf8'));
    const translatedStory = translations.stories.find(
      s => s.storyId === storyId,
    );

    if (translatedStory) {
      tsContent += `\n  // ${
        languageCodes[t.lang]
      } (${t.lang.toUpperCase()})\n`;
      tsContent += `  ${t.lang}: ${JSON.stringify(
        buildStoryTranslation(translatedStory),
        null,
        4,
      ).replace(/"([^"]+)":/g, '$1:')},\n`;
    }
  });

  tsContent += `};\n`;

  // Write file
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`   ✓ Created ${filename}`);
});

console.log(`\n✅ Import complete!`);
console.log(
  `\n📝 Next step: Update src/data/localizations/index.ts to register new translations`,
);

function buildStoryTranslation(story) {
  const translation = {
    title: story.title,
    description: story.description,
    author: story.author,
    nodes: {},
  };

  story.nodes.forEach(node => {
    const nodeData = {
      title: node.title,
      narration: node.narration,
      choices: {},
    };

    node.choices.forEach(choice => {
      nodeData.choices[choice.choiceId] = {
        text: choice.text,
      };
      if (choice.description) {
        nodeData.choices[choice.choiceId].description = choice.description;
      }
    });

    translation.nodes[node.nodeId] = nodeData;
  });

  return translation;
}
