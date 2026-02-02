
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/localizations/story1_enchantedforest_i18n.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Helper to find index of a string
function findIndex(str, query, start = 0) {
    return str.indexOf(query, start);
}

// 1. Fix EN Block
console.log("Fixing EN block...");
const enTitle = "title: 'The Seeker of Truth'";
const enIdx = findIndex(content, enTitle);
if (enIdx !== -1) {
    // Find the closing brace of this node
    // It is followed by `choices: {},` then `},`
    const choicesIdx = findIndex(content, "choices: {},", enIdx);
    const closingBraceIdx = findIndex(content, "},", choicesIdx);
    if (closingBraceIdx !== -1) {
        // The node ends at closingBraceIdx + 2 (length of "},")
        const nodeEnd = closingBraceIdx + 2;
        
        // Find start of 'path-1'
        const path1Idx = findIndex(content, "'path-1': {", nodeEnd);
        
        if (path1Idx !== -1) {
            // Remove everything between nodeEnd and path1Idx
            // And replace with `,\n`
            console.log("Removing debris between ending-6 and path-1 in EN...");
            const debris = content.substring(nodeEnd, path1Idx);
            console.log("Debris length:", debris.length);
            // content = content.substring(0, nodeEnd) + ",\n" + content.substring(path1Idx);
            // Update content carefully
            content = content.slice(0, nodeEnd) + ",\n" + content.slice(path1Idx);
        }
    }
}

// 2. Fix TR Block
console.log("Fixing TR block...");
const trTitle = "title: 'Gerçek Arayan'";
const trIdx = findIndex(content, trTitle);
if (trIdx !== -1) {
    const choicesIdx = findIndex(content, "choices: {},", trIdx);
    const closingBraceIdx = findIndex(content, "},", choicesIdx);
    if (closingBraceIdx !== -1) {
        const nodeEnd = closingBraceIdx + 2;
        // Check next char
        if (content[nodeEnd] !== ',') {
            console.log("Adding comma to TR ending-6");
            content = content.slice(0, nodeEnd) + "," + content.slice(nodeEnd);
        }
    }
}

// 3. Fix ES Block
console.log("Fixing ES block...");
const esTitle = "title: 'El Buscador de la Verdad'";
const esIdx = findIndex(content, esTitle);
if (esIdx !== -1) {
    const choicesIdx = findIndex(content, "choices: {},", esIdx);
    const closingBraceIdx = findIndex(content, "},,", choicesIdx); // Look for double comma
    if (closingBraceIdx !== -1) {
        console.log("Fixing double comma in ES ending-6");
        // Replace `},,` with `},`
        content = content.slice(0, closingBraceIdx) + "}," + content.slice(closingBraceIdx + 3);
    }
}

// 4. Fix FR Block
console.log("Fixing FR block...");
const frTitle = 'title: "Le Chercheur de Vérité"';
const frIdx = findIndex(content, frTitle);
if (frIdx !== -1) {
    const choicesIdx = findIndex(content, "choices: {},", frIdx);
    const closingBraceIdx = findIndex(content, "},", choicesIdx);
    if (closingBraceIdx !== -1) {
         const nodeEnd = closingBraceIdx + 2;
        // Check next char. content[nodeEnd] might be newline or '
        // We want to verify if it is NOT a comma.
        if (content[nodeEnd] !== ',') {
            console.log("Adding comma to FR ending-6");
            content = content.slice(0, nodeEnd) + "," + content.slice(nodeEnd);
        }
    }
}

// 5. Indentation Fix
console.log("Fixing indentation...");
// Replace start of line 'path- with 6 spaces 'path-
// Replace start of line 'stream- with 6 spaces 'stream-
// We use Regex with Multiline flag
content = content.replace(/^'path-/gm, "      'path-");
content = content.replace(/^'stream-/gm, "      'stream-");

fs.writeFileSync(filePath, content);
console.log("Done.");
