const fs = require('fs');
const path = require('path');

/**
 * Applies the image migration by replacing Unsplash URLs with local require() statements
 * Run this AFTER you've generated and saved all images
 */

const mappingPath = path.join(__dirname, '../IMAGE_MAPPING.json');
const storyDataDir = path.join(__dirname, '../src/data');

if (!fs.existsSync(mappingPath)) {
  console.error(
    '❌ IMAGE_MAPPING.json not found. Run extract-image-urls.js first.',
  );
  process.exit(1);
}

const imageMap = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

console.log('Applying image migration...\n');

// Group by file
const fileUpdates = {};

imageMap.covers.forEach(item => {
  if (!fileUpdates[item.file]) fileUpdates[item.file] = [];
  fileUpdates[item.file].push({
    type: 'cover',
    oldUrl: item.url,
    newPath: `../assets/images/covers/${item.suggestedFilename}`,
  });
});

imageMap.thumbnails.forEach(item => {
  if (!fileUpdates[item.file]) fileUpdates[item.file] = [];
  fileUpdates[item.file].push({
    type: 'thumbnail',
    oldUrl: item.url,
    newPath: `../assets/images/thumbnails/${item.suggestedFilename}`,
  });
});

imageMap.nodes.forEach(item => {
  if (!fileUpdates[item.file]) fileUpdates[item.file] = [];
  fileUpdates[item.file].push({
    type: 'node',
    oldUrl: item.url,
    newPath: `../assets/images/nodes/${item.suggestedFilename}`,
  });
});

// Apply updates
Object.keys(fileUpdates).forEach(file => {
  const filePath = path.join(storyDataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let changeCount = 0;
  fileUpdates[file].forEach(update => {
    const oldPattern = `'${update.oldUrl}'`;
    const newValue = `require('${update.newPath}')`;

    if (content.includes(oldPattern)) {
      content = content.replace(oldPattern, newValue);
      changeCount++;
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${file} - Updated ${changeCount} image references`);
});

console.log('\n✅ Migration complete!');
console.log('\nNext steps:');
console.log('1. Test the app to ensure images load correctly');
console.log('2. Delete IMAGE_MAPPING.json if everything works');
console.log('3. Update .gitignore if needed to exclude large image files');
