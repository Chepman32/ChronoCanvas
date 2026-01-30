# Image Migration Guide

## Problem

Unsplash URLs are loading slowly (1-2 seconds), causing poor UX.

## Solution

Convert all external image URLs to local static assets.

## Steps

### 1. Generate Images

Use AI image generators to create images for each story node:

- **Recommended tools**: Midjourney, DALL-E 3, Stable Diffusion, or Leonardo.ai
- **Image specs**:
  - Cover images: 800x600px (landscape)
  - Thumbnails: 400x300px (landscape)
  - Node images: 800x600px (landscape)
- **Format**: JPG or PNG (JPG preferred for smaller file size)
- **Naming convention**: `story-{storyId}-{nodeId}.jpg`

### 2. Folder Structure

```
src/assets/images/
├── covers/          # Story cover images
├── thumbnails/      # Story thumbnail images
└── nodes/           # Individual story node images
```

### 3. Image Naming Convention

- Cover: `cover-{storyId}.jpg` (e.g., `cover-story-4.jpg`)
- Thumbnail: `thumb-{storyId}.jpg` (e.g., `thumb-story-4.jpg`)
- Node: `{storyId}-{nodeId}.jpg` (e.g., `story-4-ds-1.jpg`)

### 4. Total Images Needed

Based on your stories, you'll need approximately:

- 14 stories × 2 (cover + thumbnail) = 28 images
- Plus ~200-300 node images (varies by story)

### 5. Batch Generation Prompts

For each story, use the existing narration text as inspiration for image prompts.

Example for Deep Sea story:

- Cover: "Underwater scene in the Mariana Trench, dark blue depths, mysterious geometric structures, submarine lights, cinematic, photorealistic"
- Node ds-1: "Submarine descending into deep ocean trench, sonar display showing geometric structures, dark blue water, dramatic lighting"
- Node ds-2: "Ancient underwater temple ruins, massive stone pillars covered in bioluminescent algae, circular formation, deep sea environment"

## Implementation

Once images are generated and saved in the folders, run:

```bash
node scripts/migrate-images.js
```

This will automatically update all story files to use local assets.
