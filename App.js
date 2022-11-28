import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Messages from './screens/messages';
import Header from './shared/header';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Billabong': require('./assets/fonts/Billabong.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <Text>Bi bok yuklenmedi</Text>
    )
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontFamily: 'Billabong',
            fontSize: 35,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Header title='Medaillon' /> }} />
        <Stack.Screen name="Messages" component={Messages} options={{
          title: 'Messages', headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Header" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}