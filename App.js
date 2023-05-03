import React, { useCallback } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Messages from './screens/inbox';
import EditProfile from './screens/screenComponents/EditProfile';
import Profile from './screens/profile';
// import Search from './screens/search';
import Trends from './screens/trends';
import Medaillon from './screens/medaillon';
import Notifications from './screens/notifications';
import HomeTabs from './tabs/HomeTabs';
import Header from './shared/header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SinglePost from './screens/singlePost';
import Comments from './screens/comments';
import LoginScreen from './screens/LoginScreen';
import AuthNavigation from './AuthNavigation';
// import { Pusher, PusherMember, PusherChannel, PusherEvent, } from '@pusher/pusher-websocket-react-native';

// const pusher = Pusher.getInstance();

// await pusher.init({
//   apiKey: "ddc4800fa51045fdfa81",
//   cluster: "eu"
// });

// await pusher.connect();
// await pusher.subscribe({
//   channelName: "medaillonDemoV0.0.1",
//   onEvent: (event) => {
//     console.log('Event received:' + event);
//   }
//   // onEvent: (event: PusherEvent) => {
//   //     console.log(`Event received: ${event}`);
//   // }
// });

// SplashScreen.preventAutoHideAsync();

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'Billabong': require('./assets/fonts/Billabong.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return (
  //     <Text>Fontlar yüklenemedi</Text>
  //   )
  // }

  // const screenOptions = {
  //   // headerStyle: 
  //   //   backgroundColor: '#f4511e',
  //   // },
  //   headerTintColor: '#333',
  //   headerTitleStyle: {
  //     fontSize: 35,
  //   },
  //   headerShadowVisible: false,
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthNavigation />
    </SafeAreaView>
  );
}