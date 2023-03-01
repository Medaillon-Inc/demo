import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native';
import React, { useCallback } from 'react';
// import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Messages from './screens/messages';
import EditProfile from './screens/screenComponents/EditProfile';
import Profile from './screens/profile';
import Search from './screens/search';
import Medaillon from './screens/medaillon';
import Notifications from './screens/notifications';
import HomeTabs from './tabs/HomeTabs';
import Header from './shared/header';
import SinglePost from './screens/singlePost';
import Comments from './screens/comments';
import { NativeBaseConfigProvider } from 'native-base';


// SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator()

// const screenOptions = {
//     headerShown: false,
//     gestureEnabled: true,
// }

const screenOptions = {
    // headerStyle: 
    //   backgroundColor: '#f4511e',
    // },
    headerTintColor: '#333',
    headerTitleStyle: {
        fontSize: 35,
    },
    headerShadowVisible: false,
    gestureEnabled: true,
}

export const SignedInStack = () => {

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
                    initialRouteName='LoginScreen'
                    screenOptions={screenOptions}
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
                    <Stack.Screen name="SinglePost" component={SinglePost} options={{
                        headerShown: false,
                        // headerTitleStyle: { fontWeight: "600", fontSize: 22, }
                    }} />
                    <Stack.Screen name="Comments" component={Comments} options={{
                        title: 'Yorumlar',
                        headerTitleStyle: { fontWeight: "600", fontSize: 20, }
                        // headerTitleStyle: { fontWeight: "600", fontSize: 22, }
                    }} />
                    <Stack.Screen name='NewPostScreen' component={NewPostScreen} options={{ headerShown: false }} />
                </Stack.Navigator >
                {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Messages" component={MessagesStackScreen} />
      </Tab.Navigator> */}
            </NavigationContainer >
        </SafeAreaProvider >
    )
}

export const SignedOutStack = () => {
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
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={screenOptions}
            >
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignupScreen' component={SignupScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
