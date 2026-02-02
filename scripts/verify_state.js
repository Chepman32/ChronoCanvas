
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/localizations/story1_enchantedforest_i18n.ts');
const content = fs.readFileSync(filePath, 'utf8');

console.log("Total length:", content.length);

const path1Count = (content.match(/'path-1': \{/g) || []).length;
console.log("path-1 count:", path1Count);

const firstPath1 = content.indexOf("'path-1': {");
console.log("First path-1 index:", firstPath1);
console.log("Snippet at first path-1:", content.substring(firstPath1, firstPath1 + 50));

const esStart = content.indexOf("es: {");
console.log("es: { index:", esStart);

const secondPath1 = content.indexOf("'path-1': {", firstPath1 + 1);
console.log("Second path-1 index:", secondPath1);
console.log("Snippet at second path-1:", content.substring(secondPath1, secondPath1 + 50));

