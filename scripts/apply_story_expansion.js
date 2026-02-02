
const fs = require('fs');
const path = require('path');

const tempNodesPath = path.join(__dirname, '../temp_nodes.txt');
const sampleStoriesPath = path.join(__dirname, '../src/data/sampleStories.ts');
const i18nPath = path.join(__dirname, '../src/data/localizations/story1_enchantedforest_i18n.ts');

const tempContent = fs.readFileSync(tempNodesPath, 'utf8');

// Extract blocks
const getBlock = (startMarker, endMarker) => {
  const startIndex = tempContent.indexOf(startMarker);
  const endIndex = tempContent.indexOf(endMarker);
  if (startIndex === -1 || endIndex === -1) return null;
  return tempContent.substring(startIndex + startMarker.length, endIndex).trim();
};

const logicBlock = getBlock('LOGIC_START', 'LOGIC_END');
const i18nEn = getBlock('I18N_EN_START', 'I18N_EN_END');
const i18nEs = getBlock('I18N_ES_START', 'I18N_ES_END');
const i18nFr = getBlock('I18N_FR_START', 'I18N_FR_END');
const i18nTr = getBlock('I18N_TR_START', 'I18N_TR_END');

// Update sampleStories.ts
let storiesContent = fs.readFileSync(sampleStoriesPath, 'utf8');

// 1. Update node-1 targets
// Note: This relies on the specific formatting of node-1 in the file
storiesContent = storiesContent.replace(
  /targetNodeId: 'node-2'/,
  "targetNodeId: 'path-1'"
);
storiesContent = storiesContent.replace(
  /targetNodeId: 'node-3'/,
  "targetNodeId: 'stream-1'"
);

// 2. Insert new nodes before node-2
// We look for "id: 'node-2'" and insert before its parent object opening if possible, 
// or just find the string "id: 'node-2'," and look backwards for the closing of previous object "},"
const node2Index = storiesContent.indexOf("id: 'node-2'");
if (node2Index !== -1) {
  // Find the start of the object containing node-2. 
  // It usually starts with { a few lines up.
  // Safer strategy: Insert AFTER node-1's closing brace.
  // Find node-1, find its closing brace.
  const node1Marker = "id: 'node-1'";
  const node1Index = storiesContent.indexOf(node1Marker);
  // We need to find where node-1 ends. It ends with "}," before node-2 starts.
  // We can just insert BEFORE "id: 'node-2'" object.
  // The structure is `..., { id: 'node-2', ...`
  // So we replace `{ id: 'node-2'` with `NEW_NODES, { id: 'node-2'`
  // But we need to capture the opening brace `{` before `id: 'node-2'`.
  
  // Let's find the brace before node-2
  const preNode2 = storiesContent.substring(0, node2Index);
  const lastOpenBrace = preNode2.lastIndexOf('{');
  
  if (lastOpenBrace !== -1) {
      const insertionPoint = lastOpenBrace;
      storiesContent = 
        storiesContent.substring(0, insertionPoint) + 
        logicBlock + ",\n" + 
        storiesContent.substring(insertionPoint);
  } else {
      console.error("Could not find insertion point for logic nodes");
  }
} else {
    console.error("Could not find node-2");
}

fs.writeFileSync(sampleStoriesPath, storiesContent);
console.log("Updated sampleStories.ts");


// Update i18n file
let i18nContent = fs.readFileSync(i18nPath, 'utf8');

const insertI18n = (langCode, content) => {
  // Find the language block
  const langStart = i18nContent.indexOf(`${langCode}: {`);
  if (langStart === -1) {
      console.error(`Could not find language block for ${langCode}`);
      return;
  }
  
  // Find "nodes: {" inside this block
  const nodesStart = i18nContent.indexOf('nodes: {', langStart);
  if (nodesStart === -1) {
      console.error(`Could not find nodes block for ${langCode}`);
      return;
  }
  
  // We want to append at the end of the nodes block.
  // A safe anchor is "ending-6': {" ... "}," 
  // Let's find "ending-6': {" after nodesStart
  const ending6Marker = "'ending-6': {";
  const ending6Index = i18nContent.indexOf(ending6Marker, nodesStart);
  
  if (ending6Index !== -1) {
    // Find the closing brace for ending-6.
    // It should be followed by },
    // We can just search for the next "}," after ending6Index
    // But we need to be careful about nested braces (choices).
    // ending-6 structure:
    // 'ending-6': {
    //   ...
    //   choices: {},
    // },
    // So we are looking for "}," that closes ending-6.
    
    // Simple heuristic: search for "choices: {}," then the next "},"
    // Or assume indentation.
    // Let's regex search starting from ending6Index
    const remaining = i18nContent.substring(ending6Index);
    const match = remaining.match(/choices:\s*\{\},[\s\n]*\},/);
    
    if (match) {
        const insertionIndex = ending6Index + match.index + match[0].length;
        // Insert after the comma
        i18nContent = 
            i18nContent.substring(0, insertionIndex) + 
            "\n" + content + 
            i18nContent.substring(insertionIndex);
    } else {
         console.error(`Could not find ending-6 closure for ${langCode}`);
         // Fallback: look for just "},"
    }
  } else {
      console.error(`Could not find ending-6 for ${langCode}`);
  }
};

// We need to apply updates sequentially because i18nContent changes.
// Order matters if we rely on offsets, but we re-search every time.
// However, if we insert for 'en', the offsets for 'es' shift.
// So we must re-read or use the updated string.
// My insertI18n function uses `i18nContent` global variable, so it should accumulate changes.

insertI18n('en', i18nEn);
insertI18n('es', i18nEs);
insertI18n('fr', i18nFr);
// tr might be defined as 'tr: {' or just part of the object.
// The file has 'tr' somewhere? I remember seeing it in previous `read`?
// Wait, I saw `es`, `fr`. Did I see `tr`?
// Let's check the file content again or just try.
// If not found, it will log error.
insertI18n('tr', i18nTr);

fs.writeFileSync(i18nPath, i18nContent);
console.log("Updated story1_enchantedforest_i18n.ts");

