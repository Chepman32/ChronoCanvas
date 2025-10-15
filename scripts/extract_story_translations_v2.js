#!/usr/bin/env node
/**
 * Extract translations per story by importing the actual story objects
 * This ensures we get ALL content accurately
 */

const fs = require('fs');
const path = require('path');

// Import all story files dynamically
async function importStory(filePath) {
  try {
    // For TypeScript files, we need to use the compiled version or parse differently
    // Let's read and evaluate the export
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract the exported story object name
    const exportMatch = content.match(
      /export\s+(?:const|let|var)\s+(\w+):\s*Story\s*=/,
    );
    if (!exportMatch) return null;

    const storyVarName = exportMatch[1];

    // Find the story object definition
    const storyObjMatch = content.match(
      new RegExp(`${storyVarName}:\\s*Story\\s*=\\s*({[\\s\\S]+?});\\s*$`, 'm'),
    );
    if (!storyObjMatch) {
      // Try alternative pattern
      const altMatch = content.match(
        new RegExp(
          `export\\s+const\\s+${storyVarName}:\\s*Story\\s*=\\s*({[\\s\\S]+)`,
          'm',
        ),
      );
      if (altMatch) {
        // Parse the object
        return parseStoryObject(altMatch[1]);
      }
      return null;
    }

    return parseStoryObject(storyObjMatch[1]);
  } catch (error) {
    console.error(`Error importing ${filePath}:`, error.message);
    return null;
  }
}

// Simple story object parser
function parseStoryObject(objStr) {
  const story = {
    id: '',
    title: '',
    author: '',
    description: '',
    genre: [],
    difficulty: '',
    estimatedDuration: 0,
    nodes: [],
  };

  // Extract basic fields
  const extractField = field => {
    const regex = new RegExp(`${field}:\\s*['"\`]([^'"\`]+)['"\`]`, 's');
    const match = objStr.match(regex);
    return match ? match[1] : '';
  };

  story.id = extractField('id');
  story.title = extractField('title');
  story.author = extractField('author');
  story.description = extractField('description');
  story.difficulty = extractField('difficulty');

  const durationMatch = objStr.match(/estimatedDuration:\s*(\d+)/);
  if (durationMatch) story.estimatedDuration = parseInt(durationMatch[1]);

  // Extract genre
  const genreMatch = objStr.match(/genre:\s*\[([^\]]+)\]/);
  if (genreMatch) {
    story.genre = genreMatch[1]
      .split(',')
      .map(g => g.trim().replace(/['"]/g, ''))
      .filter(g => g);
  }

  // Extract nodes array
  const nodesMatch = objStr.match(
    /nodes:\s*\[([^\]]+(?:\][^\]]*\[)*[^\]]*)\]/s,
  );
  if (nodesMatch) {
    const nodesStr = nodesMatch[0];

    // Find all node objects
    let depth = 0;
    let currentNode = '';
    let inString = false;
    let stringChar = '';

    for (let i = 0; i < nodesStr.length; i++) {
      const char = nodesStr[i];
      const prevChar = i > 0 ? nodesStr[i - 1] : '';

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
        if (char === '}') {
          depth--;
          currentNode += char;
          if (depth === 1) {
            // Complete node object
            const node = parseNode(currentNode);
            if (node) story.nodes.push(node);
            currentNode = '';
            continue;
          }
        }
      }

      if (depth > 0) {
        currentNode += char;
      }
    }
  }

  return story.nodes.length > 0 ? story : null;
}

function parseNode(nodeStr) {
  const node = {
    id: '',
    type: '',
    title: '',
    narration: '',
    choices: [],
  };

  // Extract fields
  const extractField = field => {
    const regex = new RegExp(`${field}:\\s*['"\`]([^'"\`]*?)['"\`]`, 's');
    const match = nodeStr.match(regex);
    if (match) {
      return match[1]
        .replace(/\\n/g, '\n')
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');
    }
    return '';
  };

  node.id = extractField('id');
  node.type = extractField('type');
  node.title = extractField('title');
  node.narration = extractField('narration');

  // Extract choices
  const choicesMatch = nodeStr.match(
    /choices:\s*\[([^\]]*(?:\][^\]]*\[)*[^\]]*)\]/s,
  );
  if (choicesMatch) {
    const choicesStr = choicesMatch[1];
    const choiceRegex =
      /\{\s*id:\s*['"]([^'"]+)['"],\s*text:\s*['"]([^'"]+)['"](?:,\s*description:\s*['"]([^'"]*)['"'])?/g;

    let match;
    while ((match = choiceRegex.exec(choicesStr)) !== null) {
      node.choices.push({
        id: match[1],
        text: match[2],
        description: match[3] || null,
      });
    }
  }

  return node.id ? node : null;
}

// Create translation file
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
    nodes: story.nodes,
  };

  fs.writeFileSync(filePath, JSON.stringify(translation, null, 2), 'utf8');
  return fileName;
}

// Main function
async function main() {
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  const outputDir = path.join(__dirname, '..', 'src', 'data', 'translations');

  // Create translations directory
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

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    console.log(`Processing: ${file}`);

    try {
      const story = await importStory(filePath);
      if (story && story.nodes.length > 0) {
        const fileName = createTranslationFile(story, 'en', outputDir);
        const totalChoices = story.nodes.reduce(
          (sum, n) => sum + n.choices.length,
          0,
        );
        console.log(`  ✓ Created: ${fileName}`);
        console.log(
          `    - ${story.nodes.length} nodes, ${totalChoices} choices`,
        );

        processedStories.push({
          id: story.id,
          title: story.title,
          fileName: fileName,
          nodes: story.nodes.length,
          choices: totalChoices,
        });
      } else {
        console.log(`  ⚠ Skipped: No nodes found`);
      }
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }
  }

  // Create index
  const indexPath = path.join(outputDir, 'index.json');
  const index = {
    meta: {
      version: '1.0',
      generatedAt: new Date().toISOString(),
      totalStories: processedStories.length,
      totalNodes: processedStories.reduce((sum, s) => sum + s.nodes, 0),
      totalChoices: processedStories.reduce((sum, s) => sum + s.choices, 0),
    },
    stories: processedStories,
    availableLanguages: ['en'],
    instructions: {
      addLanguage:
        'Copy story_[id]_en.json to story_[id]_[lang].json and translate',
      example: 'cp story-1_en.json story-1_es.json',
    },
  };

  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');

  console.log(
    `\n✓ Successfully created ${processedStories.length} translation files`,
  );
  console.log(`✓ Total nodes: ${index.meta.totalNodes}`);
  console.log(`✓ Total choices: ${index.meta.totalChoices}`);
  console.log(`✓ Output directory: ${outputDir}`);
  console.log(`\nTo translate to Spanish:`);
  console.log(
    `  cp src/data/translations/story-1_en.json src/data/translations/story-1_es.json`,
  );
}

main().catch(console.error);
