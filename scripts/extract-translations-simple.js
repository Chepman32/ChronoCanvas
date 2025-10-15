const fs = require('fs');
const path = require('path');

/**
 * Simple extraction - reads story files and extracts text using AST-like parsing
 */

const storyDataDir = path.join(__dirname, '../src/data');

// Import the actual story modules
const stories = [];

// Manually import each story
try {
  const { timeLoopStory } = require('../src/data/story3_timeloop');
  const { deepSeaStory } = require('../src/data/story4_deepsea');
  const {
    midnightMissingStory,
  } = require('../src/data/story7481296_midnightMissing');
  const {
    shadowsVanishedStarStory,
  } = require('../src/data/story8273910265_shadowsVanishedStar');
  const {
    midnightCallerStory,
  } = require('../src/data/story847362910_midnightCaller');

  stories.push(
    timeLoopStory,
    deepSeaStory,
    midnightMissingStory,
    shadowsVanishedStarStory,
    midnightCallerStory,
  );
} catch (error) {
  console.error('Error importing stories:', error.message);
}

const translationData = {
  metadata: {
    totalStories: 0,
    totalNodes: 0,
    totalChoices: 0,
    generatedAt: new Date().toISOString(),
    instructions:
      'Translate all text fields to target languages. Keep the same JSON structure. Only translate: title, description, author, genres (as array), node titles, narrations, choice text and descriptions.',
    targetLanguages: ['ru', 'es', 'de', 'fr', 'pt', 'ja', 'zh', 'ko', 'uk'],
    format:
      'For each language, create a copy of this structure with translated text',
  },
  stories: [],
};

stories.forEach(story => {
  const storyData = {
    storyId: story.id,
    title: story.title,
    description: story.description,
    author: story.author,
    genres: story.genre,
    nodes: [],
  };

  story.nodes.forEach(node => {
    const nodeData = {
      nodeId: node.id,
      title: node.title,
      narration: node.narration,
      choices: [],
    };

    node.choices.forEach(choice => {
      nodeData.choices.push({
        choiceId: choice.id,
        text: choice.text,
        description: choice.description || '',
      });
      translationData.metadata.totalChoices++;
    });

    storyData.nodes.push(nodeData);
    translationData.metadata.totalNodes++;
  });

  translationData.stories.push(storyData);
  translationData.metadata.totalStories++;
});

// Write to file
const outputPath = path.join(__dirname, '../TRANSLATION_SOURCE.json');
fs.writeFileSync(outputPath, JSON.stringify(translationData, null, 2), 'utf8');

console.log(`✅ Extraction complete!`);
console.log(`📊 Statistics:`);
console.log(`   - Stories: ${translationData.metadata.totalStories}`);
console.log(`   - Nodes: ${translationData.metadata.totalNodes}`);
console.log(`   - Choices: ${translationData.metadata.totalChoices}`);
console.log(`\n📄 Output: TRANSLATION_SOURCE.json`);
console.log(
  `   File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`,
);
console.log(`\n📝 Next steps:`);
console.log(`   1. Open TRANSLATION_SOURCE.json`);
console.log(
  `   2. Send to translation service (DeepL, Google Translate API, etc.)`,
);
console.log(`   3. Request translations for each target language`);
console.log(`   4. Save translated versions as TRANSLATIONS_[LANG].json`);
console.log(`   5. Run: node scripts/import-translations.js`);
