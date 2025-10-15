const fs = require('fs');
const path = require('path');

/**
 * Extracts all Unsplash URLs from story files and creates a mapping template
 * This helps you know which images to generate
 */

const storyDataDir = path.join(__dirname, '../src/data');
const storyFiles = fs
  .readdirSync(storyDataDir)
  .filter(file => file.endsWith('.ts') && file.startsWith('story'));

const imageMap = {
  covers: [],
  thumbnails: [],
  nodes: [],
};

console.log('Extracting image URLs from story files...\n');

storyFiles.forEach(file => {
  const filePath = path.join(storyDataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract story ID
  const storyIdMatch = content.match(/id:\s*'([^']+)'/);
  const storyId = storyIdMatch ? storyIdMatch[1] : file.replace('.ts', '');

  // Extract cover image
  const coverMatch = content.match(
    /coverImageUrl:\s*'(https:\/\/images\.unsplash\.com[^']+)'/,
  );
  if (coverMatch) {
    imageMap.covers.push({
      storyId,
      file,
      url: coverMatch[1],
      suggestedFilename: `cover-${storyId}.jpg`,
    });
  }

  // Extract thumbnail
  const thumbMatch = content.match(
    /thumbnailUrl:\s*'(https:\/\/images\.unsplash\.com[^']+)'/,
  );
  if (thumbMatch) {
    imageMap.thumbnails.push({
      storyId,
      file,
      url: thumbMatch[1],
      suggestedFilename: `thumb-${storyId}.jpg`,
    });
  }

  // Extract node images
  const nodeMatches = content.matchAll(
    /id:\s*'([^']+)'[\s\S]*?imageUrl:\s*'(https:\/\/images\.unsplash\.com[^']+)'/g,
  );
  for (const match of nodeMatches) {
    const nodeId = match[1];
    const url = match[2];
    imageMap.nodes.push({
      storyId,
      nodeId,
      file,
      url,
      suggestedFilename: `${storyId}-${nodeId}.jpg`,
    });
  }
});

// Write mapping file
const outputPath = path.join(__dirname, '../IMAGE_MAPPING.json');
fs.writeFileSync(outputPath, JSON.stringify(imageMap, null, 2), 'utf8');

console.log(`✓ Extracted ${imageMap.covers.length} cover images`);
console.log(`✓ Extracted ${imageMap.thumbnails.length} thumbnail images`);
console.log(`✓ Extracted ${imageMap.nodes.length} node images`);
console.log(
  `\nTotal: ${
    imageMap.covers.length + imageMap.thumbnails.length + imageMap.nodes.length
  } images\n`,
);
console.log(`Mapping saved to: IMAGE_MAPPING.json\n`);
console.log('Next steps:');
console.log('1. Review IMAGE_MAPPING.json');
console.log('2. Generate images using AI tools');
console.log('3. Save images with suggested filenames');
console.log('4. Run: node scripts/apply-image-migration.js');
