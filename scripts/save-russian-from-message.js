const fs = require('fs');

// The Russian translation data you provided
// I'll save this properly formatted

const russianTranslation = `YOUR_RUSSIAN_JSON_HERE`;

// Parse and save
try {
  const data = JSON.parse(russianTranslation);
  fs.writeFileSync('TRANSLATIONS_ru.json', JSON.stringify(data, null, 2), 'utf8');
  console.log('✓ Saved TRANSLATIONS_ru.json');
  console.log(`  Stories: ${data.stories.length}`);
  console.log(`  File size: ${(fs.statSync('TRANSLATIONS_ru.json').size / 1024).toFixed(2)} KB`);
} catch (error) {
  console.error('Error:', error.message);
}
