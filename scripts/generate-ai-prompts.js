const fs = require('fs');
const path = require('path');

/**
 * Generates AI image prompts based on story content
 * Use these prompts with Midjourney, DALL-E, or other AI image generators
 */

const storyDataDir = path.join(__dirname, '../src/data');
const mappingPath = path.join(__dirname, '../IMAGE_MAPPING.json');

if (!fs.existsSync(mappingPath)) {
  console.error(
    '❌ IMAGE_MAPPING.json not found. Run extract-image-urls.js first.',
  );
  process.exit(1);
}

const imageMap = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

const prompts = [];

// Process each story file
const storyFiles = [
  ...new Set([
    ...imageMap.covers.map(i => i.file),
    ...imageMap.thumbnails.map(i => i.file),
    ...imageMap.nodes.map(i => i.file),
  ]),
];

storyFiles.forEach(file => {
  const filePath = path.join(storyDataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract story metadata
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  const descMatch = content.match(/description:\s*'([^']+)'/);
  const genreMatch = content.match(/genre:\s*\[([^\]]+)\]/);

  const storyTitle = titleMatch ? titleMatch[1] : 'Unknown';
  const storyDesc = descMatch ? descMatch[1] : '';
  const genres = genreMatch
    ? genreMatch[1]
        .replace(/'/g, '')
        .split(',')
        .map(g => g.trim())
    : [];

  // Get cover image info
  const coverInfo = imageMap.covers.find(c => c.file === file);
  if (coverInfo) {
    prompts.push({
      type: 'cover',
      filename: coverInfo.suggestedFilename,
      storyTitle,
      prompt: `${storyDesc} Cinematic cover art, ${genres.join(
        ', ',
      )} style, dramatic lighting, high quality, 800x600px`,
    });
  }

  // Get node images with narration
  const nodeImages = imageMap.nodes.filter(n => n.file === file);
  nodeImages.forEach(nodeInfo => {
    // Extract narration for this node
    const nodePattern = new RegExp(
      `id:\\s*'${nodeInfo.nodeId}'[\\s\\S]*?narration:\\s*'([^']+)'`,
      'g',
    );
    const nodeMatch = nodePattern.exec(content);
    const narration = nodeMatch ? nodeMatch[1].substring(0, 200) : storyDesc;

    prompts.push({
      type: 'node',
      filename: nodeInfo.suggestedFilename,
      storyTitle,
      nodeId: nodeInfo.nodeId,
      prompt: `${narration} ${genres.join(
        ', ',
      )} style, cinematic, detailed, high quality, 800x600px`,
    });
  });
});

// Write prompts to file
const outputPath = path.join(__dirname, '../AI_IMAGE_PROMPTS.txt');
let output = '# AI Image Generation Prompts\n\n';
output += `Total images to generate: ${prompts.length}\n\n`;
output += '## Instructions\n';
output +=
  '1. Copy each prompt to your AI image generator (Midjourney, DALL-E, etc.)\n';
output += '2. Save the generated image with the exact filename shown\n';
output +=
  '3. Place images in the correct folder (covers/, thumbnails/, or nodes/)\n\n';
output += '---\n\n';

prompts.forEach((p, i) => {
  output += `## ${i + 1}. ${p.filename}\n`;
  output += `Story: ${p.storyTitle}\n`;
  if (p.nodeId) output += `Node: ${p.nodeId}\n`;
  output += `Folder: src/assets/images/${
    p.type === 'cover'
      ? 'covers'
      : p.type === 'thumbnail'
      ? 'thumbnails'
      : 'nodes'
  }/\n`;
  output += `\nPrompt:\n${p.prompt}\n\n`;
  output += '---\n\n';
});

fs.writeFileSync(outputPath, output, 'utf8');

console.log(`✓ Generated ${prompts.length} AI image prompts`);
console.log(`✓ Saved to: AI_IMAGE_PROMPTS.txt\n`);
console.log('Next steps:');
console.log('1. Open AI_IMAGE_PROMPTS.txt');
console.log('2. Use prompts with your preferred AI image generator');
console.log('3. Save images with exact filenames shown');
console.log('4. Run: node scripts/apply-image-migration.js');
