#!/usr/bin/env node
/**
 * Extract all English translations from TypeScript story files
 * This creates a comprehensive JSON file for translation purposes
 */

const fs = require('fs');
const path = require('path');

// Helper to extract string from quotes
function extractQuotedString(str) {
  if (!str) return null;
  // Handle both single and double quotes, and template literals
  const match = str.match(/['"`]([^'"`]*?)['"`]/);
  return match
    ? match[1].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"')
    : null;
}

// Parse a story file and extract all translatable content
function parseStoryFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.ts');

  const story = {
    fileName,
    metadata: {},
    nodes: [],
  };

  // Extract story ID
  const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) story.metadata.id = idMatch[1];

  // Extract title
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch) story.metadata.title = titleMatch[1];

  // Extract author
  const authorMatch = content.match(/author:\s*['"]([^'"]+)['"]/);
  if (authorMatch) story.metadata.author = authorMatch[1];

  // Extract description (handle multiline)
  const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/s);
  if (descMatch) story.metadata.description = descMatch[1];

  // Extract all nodes
  const nodeRegex =
    /\{\s*id:\s*['"]([^'"]+)['"],\s*storyId:[^,]+,\s*type:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*imageUrl:[^,]+,\s*narration:\s*['"]([^'"]+?)['"]/gs;

  let nodeMatch;
  while ((nodeMatch = nodeRegex.exec(content)) !== null) {
    const [, nodeId, nodeType, nodeTitle, nodeNarration] = nodeMatch;

    const node = {
      id: nodeId,
      type: nodeType,
      title: nodeTitle,
      narration: nodeNarration
        .replace(/\\n/g, '\n')
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"'),
      choices: [],
    };

    // Find choices for this node (look ahead in content)
    const choicesStart = nodeMatch.index + nodeMatch[0].length;
    const choicesSection = content.substring(choicesStart, choicesStart + 2000);
    const choiceRegex =
      /\{\s*id:\s*['"]([^'"]+)['"],\s*text:\s*['"]([^'"]+)['"](?:,\s*description:\s*['"]([^'"]*)['"'])?/g;

    let choiceMatch;
    while ((choiceMatch = choiceRegex.exec(choicesSection)) !== null) {
      const [, choiceId, choiceText, choiceDesc] = choiceMatch;
      node.choices.push({
        id: choiceId,
        text: choiceText,
        description: choiceDesc || null,
      });

      // Stop after finding reasonable number of choices
      if (node.choices.length >= 4) break;
    }

    story.nodes.push(node);
  }

  return story;
}

// Main function
function main() {
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  const outputFile = path.join(__dirname, '..', 'STORY_TRANSLATIONS_EN.json');

  const allStories = {};

  // Get all story files
  const files = fs
    .readdirSync(dataDir)
    .filter(
      f =>
        f.endsWith('.ts') && (f.startsWith('story') || f.includes('Stories')),
    )
    .sort();

  console.log(`Found ${files.length} story files to process\n`);

  files.forEach(file => {
    const filePath = path.join(dataDir, file);
    console.log(`Processing: ${file}`);

    try {
      const story = parseStoryFile(filePath);
      if (story.metadata.id) {
        allStories[story.metadata.id] = story;
      } else {
        allStories[story.fileName] = story;
      }
    } catch (error) {
      console.error(`  Error: ${error.message}`);
    }
  });

  // Create final output
  const output = {
    meta: {
      version: '1.0',
      language: 'en',
      description: 'English source translations for all interactive stories',
      generatedAt: new Date().toISOString(),
      totalStories: Object.keys(allStories).length,
    },
    stories: allStories,
  };

  // Write to file
  fs.writeFileSync(outputFile, JSON.stringify(output, null, 2), 'utf8');

  console.log(`\n✓ Successfully created ${outputFile}`);
  console.log(`✓ Total stories: ${Object.keys(allStories).length}`);
  console.log(
    `✓ Total nodes: ${Object.values(allStories).reduce(
      (sum, s) => sum + s.nodes.length,
      0,
    )}`,
  );
}

main();
