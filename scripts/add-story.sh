#!/bin/bash

# ChronoCanvas - Add New Story Script
# Usage: ./scripts/add-story.sh story-name

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if story name is provided
if [ -z "$1" ]; then
    echo -e "${YELLOW}Usage: ./scripts/add-story.sh story-name${NC}"
    echo "Example: ./scripts/add-story.sh pirates"
    exit 1
fi

STORY_NAME=$1
STORY_NUMBER=$(ls src/data/story*.ts 2>/dev/null | wc -l | tr -d ' ')
STORY_NUMBER=$((STORY_NUMBER + 1))
FILE_NAME="story${STORY_NUMBER}_${STORY_NAME}.ts"
CAMEL_NAME=$(echo "$STORY_NAME" | sed -r 's/(^|_)([a-z])/\U\2/g')Story

echo -e "${BLUE}Creating new story: ${STORY_NAME}${NC}"
echo -e "${BLUE}Story number: ${STORY_NUMBER}${NC}"
echo -e "${BLUE}File: src/data/${FILE_NAME}${NC}"

# Create the story file
cat > "src/data/${FILE_NAME}" << EOF
import { Story } from '../types';

export const ${CAMEL_NAME}: Story = {
  id: 'story-${STORY_NUMBER}',
  title: 'Your Story Title',
  description: 'Your story description here.',
  coverImageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
  thumbnailUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400',
  author: 'Your Name',
  genre: ['adventure'],
  difficulty: 'medium',
  estimatedDuration: 30,
  isPremium: false,
  version: '1.0',
  createdAt: '$(date +%Y-%m-%d)',
  updatedAt: '$(date +%Y-%m-%d)',
  totalNodes: 20,
  totalEndings: 3,
  startNodeId: 'story-${STORY_NUMBER}-1',
  nodes: [
    {
      id: 'story-${STORY_NUMBER}-1',
      storyId: 'story-${STORY_NUMBER}',
      type: 'start',
      title: 'The Beginning',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration: 'Your story starts here. Replace this with your actual story content.',
      choices: [
        {
          id: 'story-${STORY_NUMBER}-c1',
          text: 'Choice 1',
          targetNodeId: 'story-${STORY_NUMBER}-2',
          order: 1,
        },
        {
          id: 'story-${STORY_NUMBER}-c2',
          text: 'Choice 2',
          targetNodeId: 'story-${STORY_NUMBER}-3',
          order: 2,
        },
      ],
    },
    // Add more nodes here
    {
      id: 'story-${STORY_NUMBER}-20',
      storyId: 'story-${STORY_NUMBER}',
      type: 'ending',
      title: 'The End',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
      narration: 'Your story concludes here.',
      choices: [],
    },
  ],
};
EOF

echo -e "${GREEN}✓ Created story file${NC}"

# Add import to sampleStories.ts
IMPORT_LINE="import { ${CAMEL_NAME} } from './${FILE_NAME%.ts}';"

# Check if import already exists
if grep -q "${CAMEL_NAME}" src/data/sampleStories.ts; then
    echo -e "${YELLOW}⚠ Import already exists in sampleStories.ts${NC}"
else
    # Add import after the last import line
    sed -i.bak "/^import.*from/a\\
$IMPORT_LINE
" src/data/sampleStories.ts
    echo -e "${GREEN}✓ Added import to sampleStories.ts${NC}"
fi

# Add to story array
if grep -q "${CAMEL_NAME}," src/data/sampleStories.ts; then
    echo -e "${YELLOW}⚠ Story already in array${NC}"
else
    # Add before the closing bracket
    sed -i.bak "/^];/i\\
  ${CAMEL_NAME},
" src/data/sampleStories.ts
    echo -e "${GREEN}✓ Added story to array${NC}"
fi

# Clean up backup files
rm -f src/data/sampleStories.ts.bak

echo ""
echo -e "${GREEN}✓ Story setup complete!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Edit src/data/${FILE_NAME}"
echo "2. Replace the template with your story content"
echo "3. Run: npm run ios"
echo ""
echo -e "${BLUE}File location:${NC} src/data/${FILE_NAME}"
