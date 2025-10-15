const fs = require('fs');
const path = require('path');

/**
 * Creates a translation template by parsing story TypeScript files
 * Outputs a clean JSON structure ready for translation services
 */

const storyFiles = [
  'story7481296_midnightMissing.ts',
  'story8273910265_shadowsVanishedStar.ts',
  'story847362910_midnightCaller.ts',
];

const output = {
  _instructions: {
    purpose:
      'This file contains all English text from stories that needs translation',
    targetLanguages: [
      'Russian (ru)',
      'Spanish (es)',
      'German (de)',
      'French (fr)',
      'Portuguese (pt)',
      'Japanese (ja)',
      'Chinese (zh)',
      'Korean (ko)',
      'Ukrainian (uk)',
    ],
    howToUse: [
      '1. Copy this entire JSON structure',
      '2. For each target language, translate ONLY the text values (not the keys)',
      '3. Keep all IDs, structure, and formatting exactly the same',
      '4. Save each language as TRANSLATIONS_[LANG_CODE].json (e.g., TRANSLATIONS_ru.json)',
      '5. Return the translated files',
    ],
    doNotTranslate: [
      'storyId',
      'nodeId',
      'choiceId',
      "any keys ending with 'Id'",
    ],
    translateThese: [
      'title',
      'description',
      'author',
      'genres (array values)',
      'narration',
      'text',
      'choice descriptions',
    ],
  },
  stories: [],
};

console.log('Creating translation template...\n');

storyFiles.forEach(filename => {
  const filepath = path.join(__dirname, '../src/data', filename);

  if (!fs.existsSync(filepath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return;
  }

  const content = fs.readFileSync(filepath, 'utf8');

  // Extract basic info
  const storyId = (content.match(/id:\s*['"]([^'"]+)['"]/) || [])[1];
  const title = (content.match(/title:\s*['"]([^'"]+)['"]/) || [])[1];
  const description = (content.match(/description:\s*\n?\s*['"]([^'"]+)['"]/) ||
    [])[1];
  const author = (content.match(/author:\s*['"]([^'"]+)['"]/) || [])[1];
  const genreMatch = content.match(/genre:\s*\[([^\]]+)\]/);
  const genres = genreMatch
    ? genreMatch[1]
        .replace(/['"]/g, '')
        .split(',')
        .map(g => g.trim())
    : [];

  const story = {
    storyId,
    title,
    description,
    author,
    genres,
    nodes: [],
  };

  // Extract nodes - find the nodes array
  const nodesMatch = content.match(/nodes:\s*\[([\s\S]*)\]\s*,?\s*};?\s*$/m);
  if (nodesMatch) {
    const nodesContent = nodesMatch[1];

    // Find each node block
    let depth = 0;
    let currentNode = '';
    let inString = false;
    let stringChar = '';

    for (let i = 0; i < nodesContent.length; i++) {
      const char = nodesContent[i];
      const prevChar = i > 0 ? nodesContent[i - 1] : '';

      if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
        }
      }

      if (!inString) {
        if (char === '{') depth++;
        if (char === '}') depth--;
      }

      currentNode += char;

      if (depth === 0 && currentNode.trim() && char === '}') {
        // Process this node
        const nodeId = (currentNode.match(/id:\s*['"]([^'"]+)['"]/) || [])[1];
        const nodeTitle = (currentNode.match(/title:\s*['"]([^'"]+)['"]/) ||
          [])[1];

        // Extract narration (handle multiline)
        let narration = '';
        const narMatch = currentNode.match(
          /narration:\s*['"`]([\s\S]*?)['"`]\s*,/,
        );
        if (narMatch) {
          narration = narMatch[1]
            .replace(/\\'/g, "'")
            .replace(/\\"/g, '"')
            .replace(/\\n/g, '\n')
            .trim();
        }

        // Extract choices
        const choices = [];
        const choicesMatch = currentNode.match(/choices:\s*\[([\s\S]*?)\]/);
        if (choicesMatch) {
          const choicesContent = choicesMatch[1];
          const choiceMatches = choicesContent.matchAll(
            /{\s*id:\s*['"]([^'"]+)['"],\s*text:\s*['"]([^'"]+)['"],(?:\s*description:\s*['"]([^'"]*?)['"],)?/g,
          );

          for (const match of choiceMatches) {
            choices.push({
              choiceId: match[1],
              text: match[2].replace(/\\'/g, "'"),
              description: match[3] ? match[3].replace(/\\'/g, "'") : '',
            });
          }
        }

        if (nodeId && nodeTitle) {
          story.nodes.push({
            nodeId,
            title: nodeTitle,
            narration,
            choices,
          });
        }

        currentNode = '';
      }
    }
  }

  output.stories.push(story);
  console.log(`✓ ${filename}: ${story.nodes.length} nodes extracted`);
});

// Write output
const outputPath = path.join(__dirname, '../TRANSLATION_SOURCE.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');

const stats = {
  stories: output.stories.length,
  nodes: output.stories.reduce((sum, s) => sum + s.nodes.length, 0),
  choices: output.stories.reduce(
    (sum, s) => sum + s.nodes.reduce((nsum, n) => nsum + n.choices.length, 0),
    0,
  ),
};

console.log(`\n✅ Translation template created!`);
console.log(`📊 Statistics:`);
console.log(`   - Stories: ${stats.stories}`);
console.log(`   - Nodes: ${stats.nodes}`);
console.log(`   - Choices: ${stats.choices}`);
console.log(`\n📄 File: TRANSLATION_SOURCE.json`);
console.log(`   Size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
console.log(`\n📝 Ready for translation!`);
