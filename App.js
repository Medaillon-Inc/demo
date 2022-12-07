import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Messages from './screens/messages';
import Search from './screens/search';
import Medaillon from './screens/medaillon';
import Notifications from './screens/notifications';
import HomeTabs from './tabs/HomeTabs';
import Header from './shared/header';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{
          // title: 'Ara', headerShadowVisible: false, headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerTitle: () => <Header title='Ara' />
        }} />
        <Stack.Screen name="Medaillon" component={Medaillon} options={{
          title: 'Yarışmalar', headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Messages" component={MessagesStackScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}