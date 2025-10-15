# ✅ New Story Added: "Midnight Missing"

## Story Details

- **ID**: story-7481296
- **Title**: Midnight Missing
- **Author**: Morgan Steele
- **Genre**: Detective, Mystery
- **Difficulty**: Medium
- **Duration**: 20 minutes
- **Nodes**: 21 (including 5 different endings)
- **Type**: Detective thriller with branching investigation paths

## What Was Done

### 1. Created Story File ✓

- `src/data/story7481296_midnightMissing.ts`
- Full 21-node detective story with multiple investigation paths
- 5 different endings based on player choices

### 2. Added to Story Collection ✓

- Imported in `src/data/sampleStories.ts`
- Now appears in the app's story list

### 3. Updated Image Mapping ✓

- Re-ran image extraction script
- New totals:
  - **13 covers** (was 12)
  - **13 thumbnails** (was 12)
  - **274 node images** (was 253)
  - **Total: 300 images** (was 277)

### 4. Generated AI Prompts ✓

- Updated `AI_IMAGE_PROMPTS.txt`
- Added 23 new prompts for Midnight Missing story
- **Total: 287 prompts** (was 265)

## Story Structure

The detective story features:

- **Multiple investigation paths**: apartment search, friend interview, coworker confrontation
- **Time pressure**: decisions affect whether you save Emily in time
- **5 unique endings**:
  1. **Rescue and Justice** - Perfect save, kidnapper caught
  2. **Narrow Escape** - Emily saved, kidnapper escapes
  3. **Pyrrhic Victory** - Violent resolution, Emily hurt but alive
  4. **Tragic Standoff** - Emily taken again, case unsolved
  5. **Case Cold** - Wrong choices lead to failure

## Images Needed for This Story

When you're ready to generate images, you'll need:

- 1 cover image: `cover-story-7481296.jpg`
- 1 thumbnail: `thumb-story-7481296.jpg` (can reuse cover)
- 21 node images for each scene

All prompts are in `AI_IMAGE_PROMPTS.txt` starting at prompt #76.

## Current Status

✅ Story code complete and integrated
✅ TypeScript types validated (no errors)
✅ Image prompts generated
⏳ Waiting for AI-generated images (using Unsplash URLs temporarily)

## Next Steps

The story is **fully functional** with Unsplash placeholder images. When you're ready to improve performance:

1. Generate images using prompts from `AI_IMAGE_PROMPTS.txt`
2. Place images in `src/assets/images/` folders
3. Run `node scripts/apply-image-migration.js`

The story works perfectly now - the image migration is just for performance optimization!
