import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Messages from './screens/messages';
import EditProfile from './screens/screenComponents/EditProfile';
import Profile from './screens/profile';
import Search from './screens/search';
import Medaillon from './screens/medaillon';
import Notifications from './screens/notifications';
import HomeTabs from './tabs/HomeTabs';
import Header from './shared/header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      <Text>Fontlar yüklenemedi</Text>
    )
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            headerTintColor: '#333',
            headerTitleStyle: {
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
              width: 0, height: 0,
              fontFamily: 'Billabong',
            },
          }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{
            title: 'Bildirimler',
            headerTitleStyle: { fontWeight: "600", }
          }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
        {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Messages" component={MessagesStackScreen} />
      </Tab.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}