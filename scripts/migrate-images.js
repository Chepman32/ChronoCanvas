const fs = require('fs');
const path = require('path');

/**
 * This script migrates story files from Unsplash URLs to local static assets
 * Run after placing all generated images in src/assets/images/
 */

const storyDataDir = path.join(__dirname, '../src/data');
const storyFiles = fs
  .readdirSync(storyDataDir)
  .filter(file => file.endsWith('.ts') && file.startsWith('story'));

console.log(`Found ${storyFiles.length} story files to migrate\n`);

storyFiles.forEach(file => {
  const filePath = path.join(storyDataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Count replacements
  const unsplashMatches = content.match(
    /https:\/\/images\.unsplash\.com[^\s'"]+/g,
  );
  if (!unsplashMatches) {
    console.log(`✓ ${file} - No Unsplash URLs found`);
    return;
  }

  console.log(
    `Processing ${file} - Found ${unsplashMatches.length} Unsplash URLs`,
  );

  // Replace Unsplash URLs with require statements
  // This is a placeholder - you'll need to map each URL to the correct local image
  content = content.replace(
    /coverImageUrl:\s*'https:\/\/images\.unsplash\.com[^']+'/g,
    "coverImageUrl: require('../assets/images/covers/REPLACE_ME.jpg')",
  );

  content = content.replace(
    /thumbnailUrl:\s*'https:\/\/images\.unsplash\.com[^']+'/g,
    "thumbnailUrl: require('../assets/images/thumbnails/REPLACE_ME.jpg')",
  );

  content = content.replace(
    /imageUrl:\s*'https:\/\/images\.unsplash\.com[^']+'/g,
    "imageUrl: require('../assets/images/nodes/REPLACE_ME.jpg')",
  );

  // Write back
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ Updated ${file}\n`);
});

console.log(
  '\n⚠️  IMPORTANT: Replace all REPLACE_ME.jpg with actual image filenames!',
);
console.log('You can do this manually or create a mapping file.\n');
