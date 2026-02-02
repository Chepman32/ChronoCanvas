
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/localizations/story1_enchantedforest_i18n.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Identify the ES content erroneously placed in EN
// It starts at the first occurrence of 'path-1'
const firstPath1Index = content.indexOf("'path-1': {");
if (firstPath1Index === -1) {
    console.error("Could not find first path-1");
    process.exit(1);
}

// Check if it is indeed ES content (contains [ES])
const snippet = content.substring(firstPath1Index, firstPath1Index + 200);
if (!snippet.includes('[ES]')) {
    console.error("First path-1 is not ES content! Aborting.");
    console.log("Snippet:", snippet);
    process.exit(1);
}

// Find the end of this block.
const stream16Marker = "'stream-16': {";
const firstStream16Index = content.indexOf(stream16Marker, firstPath1Index);
if (firstStream16Index === -1) {
    console.error("Could not find first stream-16");
    process.exit(1);
}

const blockEndRegex = /choices:\s*\{[\s\S]*?\},[\s\n]*\},/;
const match = content.substring(firstStream16Index).match(blockEndRegex);
if (!match) {
    console.error("Could not find end of stream-16 block");
    process.exit(1);
}

const blockEndIndex = firstStream16Index + match.index + match[0].length;
let esBlock = content.substring(firstPath1Index, blockEndIndex);
console.log("Extracted ES block length:", esBlock.length);

// 2. Remove the ES block from EN
// We assume it was inserted cleanly with newlines, but let's be safe.
// If we just remove it, we might leave double commas or newlines.
// But valid JS tolerates extra newlines.
// Commas might be an issue.
// The previous block (ending-6) ends with `},`.
// The ES block started with `'path-1'`.
// If we remove ES block, the NEXT block is English `'path-1'`.
// So `},` followed by `'path-1'` is valid.
let newContent = content.substring(0, firstPath1Index) + content.substring(blockEndIndex);

// Remove potential leftover comma if the removed block was followed by one?
// No, the block ends with `},` (from regex).
// If the original file had `},` (ES block) `},` (Node block end), that would be wrong.
// But we know English block follows.
// English block starts with `'path-1'`.
// So `ending-6` `},` -> `English path-1`.
// We need to ensure there's a comma after `ending-6`.
// `ending-6` ends at `firstPath1Index - something`.
// Let's assume `ending-6` has a comma. It usually does.

// 3. Insert the ES block into ES section
// Find REAL `es: {`.
// It should be `  es: {` preceded by newline, and after `tr: {`.
const trStart = newContent.indexOf("  tr: {");
if (trStart === -1) {
    console.error("Could not find tr: {");
    // Fallback: search for `  es: {` with stricter checks?
}

const esStartMarker = "  es: {";
const esStartIndex = newContent.indexOf(esStartMarker, trStart > -1 ? trStart : 0);

if (esStartIndex === -1) {
    console.error("Could not find es: {");
    console.log("trStart:", trStart);
    process.exit(1);
}

console.log("Found es: { at index:", esStartIndex);
console.log("Context:", newContent.substring(esStartIndex, esStartIndex + 20));

// Find ending-6 in ES
const ending6Marker = "'ending-6': {";
const ending6Index = newContent.indexOf(ending6Marker, esStartIndex);
if (ending6Index === -1) {
    console.error("Could not find ending-6 in ES");
    process.exit(1);
}

const ending6Match = newContent.substring(ending6Index).match(/choices:\s*\{[\s\S]*?\},[\s\n]*\},/);
if (!ending6Match) {
    console.error("Could not find ending-6 closure in ES");
    process.exit(1);
}
const ending6EndIndex = ending6Index + ending6Match.index + ending6Match[0].length;

// Insert
const insertPos = ending6EndIndex;
// We need comma after ending-6.
// ending-6 ends with `},`.
// We append `,\n` + esBlock.
// And esBlock ends with `},`.
// Does esBlock need a trailing comma?
// It's inside `nodes` object. If it's the last item, no.
// But `nodes` closes after.
// So `},` is fine.

newContent = newContent.substring(0, insertPos) + ",\n" + esBlock + newContent.substring(insertPos);

fs.writeFileSync(filePath, newContent);
console.log("Fixed story1_enchantedforest_i18n.ts");
