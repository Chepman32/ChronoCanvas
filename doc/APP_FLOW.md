# FableFlow - App Flow Diagram

## Complete User Journey

```
┌─────────────────────────────────────────────────────────────┐
│                      APP LAUNCH                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   SPLASH SCREEN                             │
│  ┌───────────────────────────────────────────────────┐     │
│  │                                                     │     │
│  │              FableFlow                          │     │
│  │         Your Story, Your Choice                    │     │
│  │                                                     │     │
│  │         [Animated Logo - 2.5s]                     │     │
│  │                                                     │     │
│  └───────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    HOME SCREEN                              │
│  ┌───────────────────────────────────────────────────┐     │
│  │  FableFlow                                      │     │
│  │  Choose Your Adventure                             │     │
│  └───────────────────────────────────────────────────┘     │
│                                                             │
│  Featured Stories                                           │
│  ┌──────────────────┐  ┌──────────────────┐               │
│  │ [Story Image]    │  │ [Story Image]    │               │
│  │ The Enchanted    │  │ Neon Nights      │               │
│  │ Forest           │  │ [Premium 👑]     │               │
│  │ Elena Rivers     │  │ Marcus Chen      │               │
│  │ 15 min • easy    │  │ 20 min • medium  │               │
│  └──────────────────┘  └──────────────────┘               │
│                                                             │
│  [Tap any story card to view details]                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                 STORY DETAIL SCREEN                         │
│  ┌───────────────────────────────────────────────────┐     │
│  │                                                     │     │
│  │         [Full-Width Hero Image]                    │     │
│  │                                                     │     │
│  │  [← Back]                                          │     │
│  └───────────────────────────────────────────────────┘     │
│                                                             │
│  The Enchanted Forest                                       │
│  by Elena Rivers                                            │
│                                                             │
│  ┌─────────┬─────────┬─────────┐                          │
│  │   15    │    2    │  easy   │                          │
│  │ minutes │ endings │difficulty│                          │
│  └─────────┴─────────┴─────────┘                          │
│                                                             │
│  Your Progress (if started)                                │
│  ████████░░░░░░░░░░ 40%                                    │
│  2 of 5 scenes visited                                     │
│                                                             │
│  Story                                                      │
│  A mystical journey through an ancient forest              │
│  where every choice shapes your destiny...                 │
│                                                             │
│  [fantasy] [adventure]                                     │
│                                                             │
│  ┌───────────────────────────────────────────────────┐    │
│  │         [Start Adventure / Continue]              │    │
│  └───────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                STORY PLAYTHROUGH SCREEN                     │
│  ┌───────────────────────────────────────────────────┐     │
│  │                                                     │     │
│  │                                                     │     │
│  │         [Full-Screen Story Image]                  │     │
│  │                                                     │     │
│  │                                                     │     │
│  │                                          [✕ Exit]  │     │
│  └───────────────────────────────────────────────────┘     │
│  ┌───────────────────────────────────────────────────┐     │
│  │ The Forest Entrance                                │     │
│  │                                                     │     │
│  │ You stand at the edge of an ancient forest.       │     │
│  │ The trees tower above you, their branches         │     │
│  │ forming a canopy...                                │     │
│  │                                                     │     │
│  │ ┌─────────────────────────────────────────────┐   │     │
│  │ │ Follow the worn path                        │   │     │
│  │ │ The path looks well-traveled                │   │     │
│  │ └─────────────────────────────────────────────┘   │     │
│  │                                                     │     │
│  │ ┌─────────────────────────────────────────────┐   │     │
│  │ │ Follow the stream                           │   │     │
│  │ │ The water sparkles invitingly               │   │     │
│  │ └─────────────────────────────────────────────┘   │     │
│  └───────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    [User Makes Choice]
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    NEXT STORY NODE                          │
│  [Fade Out Animation → Fade In Animation]                  │
│                                                             │
│  New scene with new image, narration, and choices          │
│  Progress automatically saved                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    [Continue Making Choices]
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    ENDING SCREEN                            │
│  ┌───────────────────────────────────────────────────┐     │
│  │                                                     │     │
│  │         [Final Story Image]                        │     │
│  │                                                     │     │
│  └───────────────────────────────────────────────────┘     │
│  ┌───────────────────────────────────────────────────┐     │
│  │ The Forest Guardian                                │     │
│  │                                                     │     │
│  │ Your choice awakens the forest guardian, a        │     │
│  │ majestic spirit of light and nature...            │     │
│  │                                                     │     │
│  │              [THE END]                             │     │
│  │                                                     │     │
│  │ ┌─────────────────────────────────────────────┐   │     │
│  │ │         Finish Story                        │   │     │
│  │ └─────────────────────────────────────────────┘   │     │
│  └───────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    [Return to Home Screen]
```

## Story Branch Example: The Enchanted Forest

```
                    ┌─────────────────┐
                    │ Forest Entrance │
                    │   (Start Node)  │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
        ┌───────▼────────┐       ┌───────▼────────┐
        │ Follow Path    │       │ Follow Stream  │
        │ Ancient Oak    │       │ Crystal Pool   │
        └───────┬────────┘       └───────┬────────┘
                │                         │
        ┌───────┴────────┐       ┌───────┴────────┐
        │                │       │                │
┌───────▼────────┐ ┌────▼─────┐ ┌▼──────────┐ ┌──▼────────┐
│ Touch Symbols  │ │ Continue │ │ Wade to   │ │ Rest by   │
│                │ │ Past     │ │ Island    │ │ Pool      │
└───────┬────────┘ └────┬─────┘ └┬──────────┘ └──┬────────┘
        │               │         │               │
        │               │         │               │
┌───────▼────────┐ ┌────▼─────────▼───────────────▼────────┐
│ Forest Guardian│ │      Peaceful Journey                  │
│   (Ending 1)   │ │         (Ending 2)                     │
└────────────────┘ └────────────────────────────────────────┘
```

## State Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    GLOBAL STATE                             │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐       │
│  │   Story Store        │  │   User Store         │       │
│  │                      │  │                      │       │
│  │ • stories[]          │  │ • profile            │       │
│  │ • currentStory       │  │ • storyProgress{}    │       │
│  │ • currentNode        │  │                      │       │
│  │                      │  │                      │       │
│  │ Actions:             │  │ Actions:             │       │
│  │ • loadStory()        │  │ • trackProgress()    │       │
│  │ • navigateToNode()   │  │ • getStoryProgress() │       │
│  │ • resetStory()       │  │ • initializeUser()   │       │
│  └──────────────────────┘  └──────────────────────┘       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    COMPONENTS                               │
│                                                             │
│  Components subscribe to stores via hooks:                 │
│  • useStoryStore()                                          │
│  • useUserStore()                                           │
│                                                             │
│  Components trigger actions:                                │
│  • User clicks → Component handler → Store action          │
│  • Store updates → Components re-render                    │
└─────────────────────────────────────────────────────────────┘
```

## Navigation Stack

```
┌─────────────────────────────────────────────────────────────┐
│                  Navigation Stack                           │
│                                                             │
│  ┌─────────────────────────────────────────────────┐       │
│  │ StoryPlay Screen                                │ ← Top  │
│  ├─────────────────────────────────────────────────┤       │
│  │ StoryDetail Screen                              │       │
│  ├─────────────────────────────────────────────────┤       │
│  │ Home Screen                                     │ ← Root │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
│  Navigation Actions:                                        │
│  • navigate('StoryDetail', { storyId })                    │
│  • navigate('StoryPlay', { storyId })                      │
│  • goBack()                                                 │
│  • navigate('Home')                                         │
└─────────────────────────────────────────────────────────────┘
```

## Data Persistence Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  User Makes Choice                          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              trackProgress(storyId, nodeId, choiceId)       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  Update User Store                          │
│  • Add to visitedNodes[]                                    │
│  • Add to choiceHistory[]                                   │
│  • Update currentNodeId                                     │
│  • Update lastPlayedAt                                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Persist to MMKV/AsyncStorage                   │
│  (Automatic via Zustand middleware - Future)                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Progress Saved & Available                     │
│  • Can continue from last position                          │
│  • Progress shown on detail screen                          │
│  • History available for analytics                          │
└─────────────────────────────────────────────────────────────┘
```

## Animation Timeline

```
Splash Screen Animation:
0ms    ─────────────────────────────────────────────────
       │ Component Mount
       │ fadeAnim = 0, scaleAnim = 0.8
       │
0-800ms│ ████████████████ Fade In (0 → 1)
       │ ████████████████ Scale (0.8 → 1, spring)
       │
800ms  │ Logo fully visible
       │
800-2500ms │ ████████████████████ Hold
       │
2500-3000ms│ ████████ Fade Out (1 → 0)
       │
3000ms │ Navigate to Home
       └─────────────────────────────────────────────────

Node Transition Animation:
0ms    ─────────────────────────────────────────────────
       │ User selects choice
       │
0-400ms│ ████████ Fade Out Current (1 → 0)
       │
400ms  │ Update currentNode in store
       │ Reset fadeAnim to 0
       │
400-1200ms │ ████████████████ Fade In New (0 → 1)
       │
1200ms │ New node fully visible
       └─────────────────────────────────────────────────
```

## Error Handling Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    User Action                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  Try Operation                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    ┌───────┴───────┐
                    │               │
            ┌───────▼────┐   ┌──────▼──────┐
            │  Success   │   │   Error     │
            └───────┬────┘   └──────┬──────┘
                    │               │
                    │               ↓
                    │      ┌────────────────┐
                    │      │ Log Error      │
                    │      │ Show Message   │
                    │      │ Graceful Fail  │
                    │      └────────────────┘
                    │
                    ↓
            ┌───────────────┐
            │ Continue Flow │
            └───────────────┘
```

---

This visual flow diagram helps understand how users navigate through the app and how data flows through the system.
