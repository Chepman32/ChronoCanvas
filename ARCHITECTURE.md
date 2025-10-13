# Architecture Documentation

## System Overview

ChronoCanvas follows a layered architecture pattern optimized for React Native, emphasizing separation of concerns, testability, and maintainability.

## Layer Structure

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (React Native Components & Screens)    │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        Application Layer                │
│    (Business Logic & State Mgmt)        │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│           Data Layer                    │
│  (Storage, Caching, Persistence)        │
└─────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── SplashScreen
│   └── Animated Logo
│
└── NavigationContainer
    ├── HomeScreen
    │   ├── Header
    │   ├── Story Grid
    │   │   └── Story Cards
    │   │       ├── Image
    │   │       ├── Premium Badge
    │   │       └── Metadata
    │   └── Bottom Navigation
    │
    ├── StoryDetailScreen
    │   ├── Hero Image
    │   ├── Back Button
    │   ├── Content Card
    │   │   ├── Title Section
    │   │   ├── Stats Row
    │   │   ├── Progress Section
    │   │   ├── Description
    │   │   └── Genre Tags
    │   └── CTA Button
    │
    └── StoryPlayScreen
        ├── Background Image
        ├── Top Bar
        │   └── Exit Button
        └── Narration Panel
            ├── Node Title
            ├── Narration Text
            ├── Choice Cards
            └── Finish Button
```

## State Management Flow

```
User Action
    ↓
Component Event Handler
    ↓
Store Action (Zustand)
    ↓
State Update
    ↓
Component Re-render
    ↓
UI Update
```

### Story Store Flow

```
loadStory(storyId)
    ↓
Find story in stories array
    ↓
Find start node
    ↓
Set currentStory & currentNode
    ↓
Component renders with new state
```

### User Store Flow

```
trackProgress(storyId, nodeId, choiceId)
    ↓
Get or create progress object
    ↓
Update visitedNodes array
    ↓
Add to choiceHistory
    ↓
Update currentNodeId
    ↓
Save to profile.storyProgress
```

## Navigation Flow

```
App Launch
    ↓
Splash Screen (2.5s)
    ↓
Home Screen
    ↓
[User taps story]
    ↓
Story Detail Screen
    ↓
[User taps Start/Continue]
    ↓
Story Play Screen
    ↓
[User makes choices]
    ↓
Navigate between nodes
    ↓
[User reaches ending]
    ↓
[User taps Finish]
    ↓
Back to Home Screen
```

## Data Flow

### Story Loading

```
App Initialization
    ↓
Import sampleStories
    ↓
setStories(sampleStories)
    ↓
Stories available in store
    ↓
Components can access via useStoryStore
```

### Choice Selection

```
User taps choice
    ↓
handleChoice(choice)
    ↓
trackProgress(storyId, nodeId, choiceId)
    ↓
Fade out animation
    ↓
navigateToNode(choice.targetNodeId)
    ↓
Find new node in story
    ↓
Update currentNode
    ↓
Fade in animation
    ↓
Render new node
```

## File Organization

```
src/
├── screens/              # UI Screens
│   ├── SplashScreen.tsx
│   ├── HomeScreen.tsx
│   ├── StoryDetailScreen.tsx
│   └── StoryPlayScreen.tsx
│
├── store/               # State Management
│   ├── storyStore.ts    # Story state
│   └── userStore.ts     # User state
│
├── data/                # Static Data
│   └── sampleStories.ts # Story content
│
├── types/               # TypeScript Types
│   └── index.ts         # Interfaces
│
└── theme/               # Design System
    └── colors.ts        # Colors & spacing
```

## Key Design Patterns

### 1. Container/Presenter Pattern

- Screens are containers that manage state
- Components are presenters that render UI
- Clear separation of concerns

### 2. Store Pattern (Zustand)

- Centralized state management
- Immutable state updates
- Selector-based subscriptions

### 3. Composition Pattern

- Small, reusable components
- Props for customization
- Children for flexibility

### 4. Navigation Pattern

- Stack-based navigation
- Screen-level routing
- Props for data passing

## State Structure

### Story Store State

```typescript
{
  stories: Story[],           // All available stories
  currentStory: Story | null, // Currently playing story
  currentNode: StoryNode | null, // Current scene
}
```

### User Store State

```typescript
{
  profile: {
    id: string,
    createdAt: string,
    lastActiveAt: string,
    storyProgress: {
      [storyId]: {
        currentNodeId: string,
        visitedNodes: string[],
        choiceHistory: ChoiceRecord[],
        completionPercentage: number,
      }
    }
  }
}
```

## Animation Architecture

### Splash Screen Animation

```
Component Mount
    ↓
Initialize Animated.Value(0)
    ↓
Start parallel animations:
    - Fade: 0 → 1 (800ms)
    - Scale: 0.8 → 1 (spring)
    ↓
Wait 2.5s
    ↓
Fade out: 1 → 0 (500ms)
    ↓
Call onFinish()
```

### Node Transition Animation

```
User selects choice
    ↓
Fade out current node: 1 → 0 (400ms)
    ↓
Update currentNode in store
    ↓
Reset fade value to 0
    ↓
Fade in new node: 0 → 1 (800ms)
```

## Performance Considerations

### Rendering Optimization

- Zustand prevents unnecessary re-renders
- Selector-based subscriptions
- Memoized components where needed

### Memory Management

- Images loaded on-demand
- Cleanup on component unmount
- Efficient state updates

### Bundle Size

- Tree shaking enabled
- No unused dependencies
- Minimal third-party libraries

## Security Considerations

### Data Storage

- Local storage only (MMKV/AsyncStorage)
- No sensitive data stored
- User progress is local

### Content Delivery

- Images from trusted CDNs (Unsplash)
- No user-generated content
- Static story data

## Scalability

### Adding New Stories

1. Add story object to `sampleStories.ts`
2. Include all nodes and choices
3. Ensure valid node references
4. Test all paths

### Adding New Screens

1. Create screen component in `src/screens/`
2. Add to navigation stack in `App.tsx`
3. Define navigation params
4. Implement navigation handlers

### Adding New Features

1. Define types in `src/types/`
2. Add store if needed in `src/store/`
3. Create components in `src/screens/`
4. Update navigation if needed

## Testing Strategy

### Unit Tests

- Store logic (Zustand)
- Utility functions
- Data transformations

### Component Tests

- Screen rendering
- User interactions
- Navigation flows

### Integration Tests

- Complete user journeys
- State management
- Navigation

## Deployment Pipeline

```
Development
    ↓
Local Testing
    ↓
Build Release
    ↓
TestFlight (Beta)
    ↓
App Store Review
    ↓
Production Release
```

## Monitoring & Analytics

### Key Metrics

- Story completion rates
- Choice distribution
- Session duration
- Crash reports

### Tools (Future)

- Sentry for error tracking
- Firebase Analytics
- Custom event tracking

## Future Architecture Enhancements

### Phase 2: Advanced Features

- Add Reanimated for 60 FPS animations
- Implement Skia for custom graphics
- Add haptic feedback
- Implement gesture navigation

### Phase 3: Backend Integration

- Cloud sync for progress
- Dynamic story loading
- User authentication
- Analytics integration

### Phase 4: Content Management

- Story editor
- Admin dashboard
- Content moderation
- Version control

---

This architecture provides a solid foundation for a production-ready interactive storytelling app while remaining simple enough to understand and maintain.
