const fs = require('fs');
const path = require('path');

/**
 * Extract all text content from story files for translation
 */

const storyDataDir = path.join(__dirname, '../src/data');
const storyFiles = fs
  .readdirSync(storyDataDir)
  .filter(
    file =>
      file.endsWith('.ts') &&
      file.startsWith('story') &&
      !file.includes('_i18n'),
  );

const translationData = {
  metadata: {
    totalStories: 0,
    totalNodes: 0,
    totalChoices: 0,
    generatedAt: new Date().toISOString(),
    instructions:
      'Translate all text fields to target languages. Maintain the structure and IDs. Do not translate IDs, only the text content.',
    targetLanguages: ['ru', 'es', 'de', 'fr', 'pt', 'ja', 'zh', 'ko', 'uk'],
  },
  stories: {},
};

console.log('Extracting translation content from story files...\n');

storyFiles.forEach(file => {
  const filePath = path.join(storyDataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract story ID
  const storyIdMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
  if (!storyIdMatch) {
    console.log(`⚠️  Skipping ${file} - no story ID found`);
    return;
  }

  const storyId = storyIdMatch[1];

  // Extract title
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : '';

  // Extract description (multiline)
  const descMatch =
    content.match(/description:\s*['"]([^'"]+)['"]/s) ||
    content.match(/description:\s*`([^`]+)`/s);
  const description = descMatch ? descMatch[1].replace(/\\n/g, ' ').trim() : '';

  // Extract author
  const authorMatch = content.match(/author:\s*['"]([^'"]+)['"]/);
  const author = authorMatch ? authorMatch[1] : '';

  // Extract genres
  const genreMatch = content.match(/genre:\s*\[([^\]]+)\]/);
  const genres = genreMatch
    ? genreMatch[1]
        .replace(/['"]/g, '')
        .split(',')
        .map(g => g.trim())
    : [];

  const storyData = {
    storyId,
    sourceFile: file,
    title,
    description,
    author,
    genres,
    nodes: [],
  };

  // Extract all nodes with a more flexible regex
  const nodesSection = content.match(/nodes:\s*\[([\s\S]*)\]\s*,?\s*};?\s*$/m);
  if (nodesSection) {
    const nodesContent = nodesSection[1];

    // Split by node boundaries
    const nodeBlocks = nodesContent.split(/},\s*{/).map((block, index, arr) => {
      if (index === 0) return block + '}';
      if (index === arr.length - 1) return '{' + block;
      return '{' + block + '}';
    });

    nodeBlocks.forEach(block => {
      const nodeIdMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
      const nodeTitleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
      const narrationMatch =
        block.match(/narration:\s*['"]([^'"]*)['"]/s) ||
        block.match(/narration:\s*`([^`]*)`/s);

      if (!nodeIdMatch || !nodeTitleMatch) return;

      const nodeId = nodeIdMatch[1];
      const nodeTitle = nodeTitleMatch[1];
      const narration = narrationMatch
        ? narrationMatch[1].replace(/\\'/g, "'").replace(/\\n/g, '\n').trim()
        : '';

      const choices = [];

      // Extract choices
      const choicesMatch = block.match(/choices:\s*\[([\s\S]*?)\]/);
      if (choicesMatch) {
        const choicesContent = choicesMatch[1];
        const choiceBlocks = choicesContent.split(/},\s*{/).map((cb, i, a) => {
          if (i === 0 && cb.trim().startsWith('{')) return cb;
          if (i === 0) return '{' + cb + '}';
          if (i === a.length - 1 && cb.trim().endsWith('}')) return cb;
          if (i === a.length - 1) return '{' + cb;
          return '{' + cb + '}';
        });

        choiceBlocks.forEach(cb => {
          const choiceIdMatch = cb.match(/id:\s*['"]([^'"]+)['"]/);
          const choiceTextMatch = cb.match(/text:\s*['"]([^'"]+)['"]/);
          const choiceDescMatch = cb.match(/description:\s*['"]([^'"]+)['"]/);

          if (choiceIdMatch && choiceTextMatch) {
            choices.push({
              choiceId: choiceIdMatch[1],
              text: choiceTextMatch[1].replace(/\\'/g, "'"),
              description: choiceDescMatch
                ? choiceDescMatch[1].replace(/\\'/g, "'")
                : '',
            });
            translationData.metadata.totalChoices++;
          }
        });
      }

      storyData.nodes.push({
        nodeId,
        title: nodeTitle,
        narration,
        choices,
      });

      translationData.metadata.totalNodes++;
    });
  }

  translationData.stories[storyId] = storyData;
  translationData.metadata.totalStories++;

  console.log(`✓ ${file}: ${storyData.nodes.length} nodes`);
});

// Write to file
const outputPath = path.join(__dirname, '../TRANSLATION_SOURCE.json');
fs.writeFileSync(outputPath, JSON.stringify(translationData, null, 2), 'utf8');

console.log(`\n✅ Extraction complete!`);
console.log(`📊 Statistics:`);
console.log(`   - Stories: ${translationData.metadata.totalStories}`);
console.log(`   - Nodes: ${translationData.metadata.totalNodes}`);
console.log(`   - Choices: ${translationData.metadata.totalChoices}`);
console.log(`\n📄 Output: TRANSLATION_SOURCE.json`);
console.log(`\n📝 Next steps:`);
console.log(`   1. Send TRANSLATION_SOURCE.json to translation service`);
console.log(
  `   2. Request translations for languages: ${translationData.metadata.targetLanguages.join(
    ', ',
  )}`,
);
console.log(`   3. Save translated file as TRANSLATION_TARGET.json`);
console.log(`   4. Run: node scripts/import-translations.js`);
