import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SplashScreen } from './src/screens/SplashScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { StoryDetailScreen } from './src/screens/StoryDetailScreen';
import { StoryPlayScreen } from './src/screens/StoryPlayScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { useStoryStore } from './src/store/storyStore';
import { useUserStore } from './src/store/userStore';
import { sampleStories } from './src/data/sampleStories';

type RootStackParamList = {
  Home: undefined;
  StoryDetail: { storyId: string };
  StoryPlay: { storyId: string };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const setStories = useStoryStore(state => state.setStories);
  const initializeUser = useUserStore(state => state.initializeUser);

  useEffect(() => {
    // Initialize app data
    setStories(sampleStories);
    initializeUser();
  }, []);

  if (showSplash) {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </SafeAreaProvider>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          >
            <Stack.Screen name="Home">
              {({ navigation }) => (
                <HomeScreen
                  onStoryPress={storyId =>
                    navigation.navigate('StoryDetail', { storyId })
                  }
                  onSettingsPress={() => navigation.navigate('Settings')}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="StoryDetail">
              {({ route, navigation }) => (
                <StoryDetailScreen
                  storyId={route.params.storyId}
                  onBack={() => navigation.goBack()}
                  onStartStory={() =>
                    navigation.navigate('StoryPlay', {
                      storyId: route.params.storyId,
                    })
                  }
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="StoryPlay">
              {({ route, navigation }) => (
                <StoryPlayScreen
                  storyId={route.params.storyId}
                  onExit={() => navigation.navigate('Home')}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Settings">
              {({ navigation }) => (
                <SettingsScreen onBack={() => navigation.goBack()} />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
