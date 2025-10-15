const fs = require('fs');
const path = require('path');

/**
 * Test migration on a single story file
 * Usage: node scripts/test-single-story.js story4_deepsea.ts
 */

const storyFile = process.argv[2] || 'story4_deepsea.ts';
const storyDataDir = path.join(__dirname, '../src/data');
const filePath = path.join(storyDataDir, storyFile);

if (!fs.existsSync(filePath)) {
  console.error(`❌ File not found: ${storyFile}`);
  process.exit(1);
}

console.log(`Testing migration on: ${storyFile}\n`);

let content = fs.readFileSync(filePath, 'utf8');

// Count current Unsplash URLs
const unsplashMatches = content.match(
  /https:\/\/images\.unsplash\.com[^\s'"]+/g,
);
console.log(
  `Found ${unsplashMatches ? unsplashMatches.length : 0} Unsplash URLs\n`,
);

if (!unsplashMatches) {
  console.log('✓ No Unsplash URLs found. Already migrated?');
  process.exit(0);
}

// Show what would be replaced
console.log('Preview of changes:\n');
unsplashMatches.forEach((url, i) => {
  console.log(`${i + 1}. ${url}`);
  console.log(`   → require('../assets/images/...')\n`);
});

console.log('\nTo apply migration:');
console.log('1. Generate images for this story');
console.log('2. Place them in src/assets/images/');
console.log('3. Run: node scripts/apply-image-migration.js');
