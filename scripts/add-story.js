#!/usr/bin/env node

/**
 * ChronoCanvas - Add New Story Script
 * Usage: node scripts/add-story.js story-name
 * Example: node scripts/add-story.js pirates
 */

const fs = require('fs');
const path = require('path');

// Get story name from command line
const storyName = process.argv[2];

if (!storyName) {
  console.log(
    '\x1b[33m%s\x1b[0m',
    'Usage: node scripts/add-story.js story-name',
  );
  console.log('Example: node scripts/add-story.js pirates');
  process.exit(1);
}

// Calculate story number
const dataDir = path.join(__dirname, '../src/data');
const files = fs
  .readdirSync(dataDir)
  .filter(f => f.startsWith('story') && f.endsWith('.ts'));
const storyNumber = files.length + 1;

// Generate names
const fileName = `story${storyNumber}_${storyName}.ts`;
const camelName =
  storyName.replace(/(^|_)([a-z])/g, (_, __, c) => c.toUpperCase()) + 'Story';
const storyId = `story-${storyNumber}`;

console.log('\x1b[34m%s\x1b[0m', `Creating new story: ${storyName}`);
console.log('\x1b[34m%s\x1b[0m', `Story number: ${storyNumber}`);
console.log('\x1b[34m%s\x1b[0m', `File: src/data/${fileName}`);

// Create story template
const today = new Date().toISOString().split('T')[0];
const storyTemplate = `import { Story } from '../types';

export const ${camelName}: Story = {
  id: '${storyId}',
  title: 'Your Story Title',
  description: 'Your story description here.',
  coverImageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
  thumbnailUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400',
  author: 'Your Name',
  genre: ['adventure'],
  difficulty: 'medium',
  estimatedDuration: 30,
  isPremium: false,
  version: '1.0',
  createdAt: '${today}',
  updatedAt: '${today}',
  totalNodes: 20,
  totalEndings: 3,
  startNodeId: '${storyId}-1',
  nodes: [
    {
      id: '${storyId}-1',
      storyId: '${storyId}',
      type: 'start',
      title: 'The Beginning',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration: 'Your story starts here. Replace this with your actual story content.',
      choices: [
        {
          id: '${storyId}-c1',
          text: 'Choice 1',
          targetNodeId: '${storyId}-2',
          order: 1,
        },
        {
          id: '${storyId}-c2',
          text: 'Choice 2',
          targetNodeId: '${storyId}-3',
          order: 2,
        },
      ],
    },
    // Add more nodes here
    {
      id: '${storyId}-20',
      storyId: '${storyId}',
      type: 'ending',
      title: 'The End',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration: 'Your story concludes here.',
      choices: [],
    },
  ],
};
`;

// Write story file
const storyPath = path.join(dataDir, fileName);
fs.writeFileSync(storyPath, storyTemplate);
console.log('\x1b[32m%s\x1b[0m', '✓ Created story file');

// Update sampleStories.ts
const sampleStoriesPath = path.join(dataDir, 'sampleStories.ts');
let sampleStoriesContent = fs.readFileSync(sampleStoriesPath, 'utf8');

// Add import
const importLine = `import { ${camelName} } from './${fileName.replace(
  '.ts',
  '',
)}';`;
if (!sampleStoriesContent.includes(camelName)) {
  // Find the last import line
  const lines = sampleStoriesContent.split('\n');
  let lastImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import')) {
      lastImportIndex = i;
    }
  }
  if (lastImportIndex !== -1) {
    lines.splice(lastImportIndex + 1, 0, importLine);
    sampleStoriesContent = lines.join('\n');
    console.log('\x1b[32m%s\x1b[0m', '✓ Added import to sampleStories.ts');
  }
} else {
  console.log('\x1b[33m%s\x1b[0m', '⚠ Import already exists');
}

// Add to array
if (!sampleStoriesContent.includes(`${camelName},`)) {
  // Find the closing bracket of the array
  const arrayEndIndex = sampleStoriesContent.lastIndexOf('];');
  if (arrayEndIndex !== -1) {
    const before = sampleStoriesContent.substring(0, arrayEndIndex);
    const after = sampleStoriesContent.substring(arrayEndIndex);
    sampleStoriesContent = `${before}  ${camelName},\n${after}`;
    console.log('\x1b[32m%s\x1b[0m', '✓ Added story to array');
  }
} else {
  console.log('\x1b[33m%s\x1b[0m', '⚠ Story already in array');
}

// Write updated sampleStories.ts
fs.writeFileSync(sampleStoriesPath, sampleStoriesContent);

console.log('');
console.log('\x1b[32m%s\x1b[0m', '✓ Story setup complete!');
console.log('');
console.log('\x1b[34m%s\x1b[0m', 'Next steps:');
console.log(`1. Edit src/data/${fileName}`);
console.log('2. Replace the template with your story content');
console.log('3. Run: npm run ios');
console.log('');
console.log('\x1b[34m%s\x1b[0m', `File location: src/data/${fileName}`);
