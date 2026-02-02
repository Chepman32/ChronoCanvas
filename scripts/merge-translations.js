#!/usr/bin/env node
/**
 * Merge generated translations back into newStories_i18n.ts
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = '.';
const TARGET_FILE = path.join(__dirname, '../src/data/localizations/newStories_i18n.ts');

function main() {
  console.log('Merging translations into newStories_i18n.ts...\n');
  
  // Read the current file
  let content = fs.readFileSync(TARGET_FILE, 'utf-8');
  
  // Find all translation files for stories 5-13
  const translationFiles = [];
  for (let i = 5; i <= 13; i++) {
    const file = path.join(TRANSLATIONS_DIR, `translations_story-${i}.ts`);
    if (fs.existsSync(file)) {
      translationFiles.push({ storyNum: i, file });
    }
  }
  
  console.log(`Found ${translationFiles.length} translation files`);
  
  // For each translation file, merge it into the main file
  for (const { storyNum, file } of translationFiles) {
    const storyId = `story-${storyNum}`;
    console.log(`\nProcessing ${storyId}...`);
    
    const translations = fs.readFileSync(file, 'utf-8');
    
    // Find the story in the main file
    const storyPattern = new RegExp(`('${storyId}':\\s*\\{[\\s\\S]*?\\n  \\},)`);
    const match = content.match(storyPattern);
    
    if (!match) {
      console.log(`  Warning: Could not find ${storyId} in target file`);
      continue;
    }
    
    const oldStory = match[0];
    
    // Keep the English section, replace the rest
    const enMatch = oldStory.match(/(    en: \{[\s\S]*?\n    \},)/);
    if (!enMatch) {
      console.log(`  Warning: Could not find English section for ${storyId}`);
      continue;
    }
    
    const enSection = enMatch[0];
    const newStory = `  '${storyId}': {\n${enSection}\n${translations}\n  },`;
    
    content = content.replace(oldStory, newStory);
    console.log(`  Merged translations for ${storyId}`);
  }
  
  // Write the updated file
  fs.writeFileSync(TARGET_FILE, content, 'utf-8');
  console.log('\n✓ Successfully updated newStories_i18n.ts');
  console.log('\nNext steps:');
  console.log('1. Run: npx tsc --noEmit src/data/localizations/newStories_i18n.ts');
  console.log('2. Check for any TypeScript errors');
  console.log('3. Test in the app');
}

main();
