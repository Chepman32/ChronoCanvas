#!/usr/bin/env node
/**
 * Extract translations per story - creates separate files for each story
 * Format: story_[id]_[lang].json (e.g., story_1_en.json, story_1_es.json)
 */

const fs = require('fs');
const path = require('path');

// Parse a story file and extract all translatable content
function parseStoryFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.ts');

  // Extract story ID
  const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
  if (!idMatch) return null;

  const storyId = idMatch[1];

  const story = {
    id: storyId,
    title: '',
    author: '',
    description: '',
    genre: [],
    difficulty: '',
    estimatedDuration: 0,
    nodes: [],
  };

  // Extract metadata
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch) story.title = titleMatch[1];

  const authorMatch = content.match(/author:\s*['"]([^'"]+)['"]/);
  if (authorMatch) story.author = authorMatch[1];

  const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/s);
  if (descMatch) story.description = descMatch[1];

  const difficultyMatch = content.match(/difficulty:\s*['"]([^'"]+)['"]/);
  if (difficultyMatch) story.difficulty = difficultyMatch[1];

  const durationMatch = content.match(/estimatedDuration:\s*(\d+)/);
  if (durationMatch) story.estimatedDuration = parseInt(durationMatch[1]);

  // Extract genre array
  const genreMatch = content.match(/genre:\s*\[([^\]]+)\]/);
  if (genreMatch) {
    story.genre = genreMatch[1]
      .split(',')
      .map(g => g.trim().replace(/['"]/g, ''))
      .filter(g => g);
  }

  // Extract all nodes with full content
  const nodeRegex =
    /\{\s*id:\s*['"]([^'"]+)['"],\s*storyId:\s*['"]([^'"]+)['"],\s*type:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*imageUrl:\s*['"]([^'"]+)['"],\s*narration:\s*['"]([^'"]+?)['"],\s*choices:\s*\[([^\]]*?)\]/gs;

  let nodeMatch;
  while ((nodeMatch = nodeRegex.exec(content)) !== null) {
    const [
      ,
      nodeId,
      ,
      nodeType,
      nodeTitle,
      imageUrl,
      nodeNarration,
      choicesStr,
    ] = nodeMatch;

    const node = {
      id: nodeId,
      type: nodeType,
      title: nodeTitle,
      imageUrl: imageUrl,
      narration: nodeNarration
        .replace(/\\n/g, '\n')
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\'),
      choices: [],
    };

    // Parse choices
    const choiceRegex =
      /\{\s*id:\s*['"]([^'"]+)['"],\s*text:\s*['"]([^'"]+)['"](?:,\s*description:\s*['"]([^'"]*)['"'])?(?:,\s*targetNodeId:\s*['"]([^'"]+)['"'])?/g;

    let choiceMatch;
    while ((choiceMatch = choiceRegex.exec(choicesStr)) !== null) {
      const [, choiceId, choiceText, choiceDesc, targetNodeId] = choiceMatch;
      node.choices.push({
        id: choiceId,
        text: choiceText,
        description: choiceDesc || null,
        targetNodeId: targetNodeId || null,
      });
    }

    story.nodes.push(node);
  }

  return story.nodes.length > 0 ? story : null;
}

// Create translation file for a story
function createTranslationFile(story, language, outputDir) {
  const fileName = `${story.id}_${language}.json`;
  const filePath = path.join(outputDir, fileName);

  const translation = {
    meta: {
      storyId: story.id,
      language: language,
      version: '1.0',
      lastUpdated: new Date().toISOString(),
    },
    story: {
      title: story.title,
      author: story.author,
      description: story.description,
      genre: story.genre,
      difficulty: story.difficulty,
      estimatedDuration: story.estimatedDuration,
    },
    nodes: story.nodes.map(node => ({
      id: node.id,
      type: node.type,
      title: node.title,
      narration: node.narration,
      choices: node.choices.map(choice => ({
        id: choice.id,
        text: choice.text,
        description: choice.description,
      })),
    })),
  };

  fs.writeFileSync(filePath, JSON.stringify(translation, null, 2), 'utf8');
  return fileName;
}

// Main function
function main() {
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  const outputDir = path.join(__dirname, '..', 'src', 'data', 'translations');

  // Create translations directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get all story files
  const files = fs
    .readdirSync(dataDir)
    .filter(f => f.endsWith('.ts') && f.startsWith('story'))
    .sort();

  console.log(`Found ${files.length} story files to process\n`);

  const processedStories = [];

  files.forEach(file => {
    const filePath = path.join(dataDir, file);
    console.log(`Processing: ${file}`);

    try {
      const story = parseStoryFile(filePath);
      if (story && story.nodes.length > 0) {
        // Create English translation file
        const fileName = createTranslationFile(story, 'en', outputDir);
        console.log(`  ✓ Created: ${fileName}`);
        console.log(`    - ${story.nodes.length} nodes`);
        console.log(
          `    - ${story.nodes.reduce(
            (sum, n) => sum + n.choices.length,
            0,
          )} choices`,
        );

        processedStories.push({
          id: story.id,
          title: story.title,
          fileName: fileName,
          nodes: story.nodes.length,
        });
      }
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }
  });

  // Create index file
  const indexPath = path.join(outputDir, 'index.json');
  const index = {
    meta: {
      version: '1.0',
      generatedAt: new Date().toISOString(),
      totalStories: processedStories.length,
    },
    stories: processedStories,
    availableLanguages: ['en'],
    instructions:
      'To add a new language, copy story_[id]_en.json to story_[id]_[lang].json and translate the content',
  };

  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');

  console.log(`\n✓ Successfully created translation files in: ${outputDir}`);
  console.log(`✓ Total stories: ${processedStories.length}`);
  console.log(
    `✓ Total nodes: ${processedStories.reduce((sum, s) => sum + s.nodes, 0)}`,
  );
  console.log(`✓ Created index file: index.json`);
  console.log(`\nTo translate to another language:`);
  console.log(
    `  cp src/data/translations/story-1_en.json src/data/translations/story-1_es.json`,
  );
  console.log(`  # Then translate the content in story-1_es.json`);
}

main();
