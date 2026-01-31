# Quick Start Guide

## Get Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Install iOS Pods

```bash
pod install --project-directory=ios
```

### 3. Run the App

```bash
npm run ios
```

That's it! The app should launch in the iOS simulator.

## What You'll See

1. **Splash Screen** (2.5s) - Animated FableFlow logo
2. **Home Screen** - 13 amazing stories:
   - 8 free stories across multiple genres
   - 5 premium stories (locked with gold badges)
3. **Tap a story** to view details
4. **Start Adventure** to begin playing
5. **Make choices** to navigate through the story
6. **Discover multiple endings** based on your decisions

## Sample Story Flow

### The Enchanted Forest

```
Forest Entrance
├─ Follow the worn path → Ancient Oak
│  ├─ Touch symbols → Forest Guardian (Ending)
│  └─ Continue past → Peaceful Journey (Ending)
└─ Follow the stream → Crystal Pool
   ├─ Wade to island → Forest Guardian (Ending)
   └─ Rest by pool → Peaceful Journey (Ending)
```

## Key Features to Try

- ✅ Browse stories on home screen
- ✅ View story details and progress
- ✅ Play through interactive story
- ✅ Make choices that affect the outcome
- ✅ See different endings
- ✅ Progress automatically saved
- ✅ Continue from where you left off

## Adding Your Own Stories

Edit `src/data/sampleStories.ts`:

```typescript
export const sampleStories: Story[] = [
  {
    id: 'my-story',
    title: 'My Amazing Story',
    description: 'An incredible adventure...',
    coverImageUrl: 'https://images.unsplash.com/...',
    // ... more fields
    nodes: [
      {
        id: 'node-1',
        type: 'start',
        title: 'The Beginning',
        narration: 'Your story starts here...',
        choices: [
          {
            id: 'choice-1',
            text: 'Go left',
            targetNodeId: 'node-2',
          },
          // ... more choices
        ],
      },
      // ... more nodes
    ],
  },
];
```

## Troubleshooting

### Metro bundler won't start

```bash
npm start -- --reset-cache
```

### iOS build fails

```bash
pod install --project-directory=ios --repo-update
```

### TypeScript errors

```bash
npm run lint
```

### Clear everything and start fresh

```bash
rm -rf node_modules ios/Pods ios/build
npm install --legacy-peer-deps
pod install --project-directory=ios
npm run ios
```

## Next Steps

- Read `IMPLEMENTATION.md` for architecture details
- Explore the code in `src/` directory
- Customize the theme in `src/theme/colors.ts`
- Add more stories in `src/data/sampleStories.ts`
- Implement advanced features from the design doc

## Need Help?

- Check the full documentation in `IMPLEMENTATION.md`
- Review the Software Design Document
- Open an issue on GitHub

Happy storytelling! 📖✨
