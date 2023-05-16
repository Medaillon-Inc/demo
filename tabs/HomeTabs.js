import React, { useEffect, useState } from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../stacks/HomeStackScreen';
import { darkMode } from '../styles/global';
import Home from '../screens/home';
// import Inbox from '../screens/inbox';
import InboxStack from '../stacks/InboxStack';
import Notifications from '../screens/notifications';
import Trends from '../screens/trends';
import Shop from '../screens/shop';
// import Reels from '../screens/reels';
import Medaillon from '../screens/medaillon';
import Profile from '../screens/profile';
import StoryScreen from '../screens/StoryScreen';
import EditProfile from '../screens/screenComponents/EditProfile';
import Header from '../shared/header';
import ReelsTopHeader from '../components/reelsTopHeader';
import ProfileHeader from '../components/profileHeader';
import { Octicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
} from 'react-native-navigation-bar-color';
import SinglePost from '../screens/singlePost';
import { NativeBaseConfigProvider } from 'native-base';

{/* <MaterialCommunityIcons name="shopping" size={24} color="black" /> */ }
{/* <MaterialCommunityIcons name="shopping-outline" size={24} color="black" /> */ }

// const bgColor = darkMode ? "black" : "white";
const HomeTab = createBottomTabNavigator();

function getActiveRouteName(navigationState) {
    if (!navigationState) return null;

    const route = navigationState.routes[navigationState.index];
    if (route.state) {
        return getActiveRouteName(route.state);
    }

    return route.name;
}


export default function HomeTabs({ navigation }) {
    const [tabBarIconInfos, settabBarIconInfos] = useState({
        homeIconName: "ios-home",
        homeColor: "white",
        trendsIconColor: "white",
        trendsIconName: "trophy-outline",
        plusIconColor: "white",
        inboxColor: "white",
        inboxIconName: "chatbox-ellipses-outline",
        profileColor: "white",
        profileIconName: "user",
        glassSize: 24,
        medaillonSize: 35
    })

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', (e) => {
            const currentRouteName = getActiveRouteName(e.data.state);

            // Update the state based on the current route name
            if (currentRouteName === 'Home') {
                settabBarIconInfos({
                    homeIconName: "ios-home",
                    homeColor: "white",
                    trendsIconColor: "white",
                    trendsIconName: "trophy-outline",
                    plusIconColor: "white",
                    inboxColor: "white",
                    inboxIconName: "chatbox-ellipses-outline",
                    profileColor: "white",
                    profileIconName: "user",
                    glassSize: 24,
                    medaillonSize: 35
                });
            } else if (currentRouteName === 'Trends') {
                settabBarIconInfos({
                    homeIconName: "ios-home-outline",
                    homeColor: "white",
                    trendsIconColor: "white",
                    trendsIconName: "trophy-sharp",
                    plusIconColor: "white",
                    inboxColor: "white",
                    inboxIconName: "chatbox-ellipses-outline",
                    profileColor: "white",
                    profileIconName: "user",
                    glassSize: 28,
                    medaillonSize: 35
                })
            } else if (currentRouteName === 'Medaillon') {
                settabBarIconInfos({
                    homeIconName: "ios-home-outline",
                    homeColor: "white",
                    trendsIconColor: "white",
                    trendsIconName: "trophy-outline",
                    plusIconColor: "white",
                    inboxColor: "white",
                    inboxIconName: "chatbox-ellipses-outline",
                    profileColor: "white",
                    profileIconName: "user",
                    glassSize: 24,
                    medaillonSize: 35
                })
            } else if (currentRouteName === 'Inbox') {
                settabBarIconInfos({
                    homeIconName: "ios-home-outline",
                    homeColor: "gray",
                    trendsIconColor: "gray",
                    trendsIconName: "trophy-outline",
                    plusIconColor: "black",
                    inboxColor: "black",
                    inboxIconName: "chatbox-ellipses",
                    profileColor: "gray",
                    profileIconName: "user",
                    glassSize: 24,
                    medaillonSize: 35
                })
            } else if (currentRouteName === 'Profile') {
                settabBarIconInfos({
                    homeIconName: "ios-home-outline",
                    homeColor: "gray",
                    trendsIconColor: "gray",
                    trendsIconName: "trophy-outline",
                    plusIconColor: "black",
                    inboxColor: "gray",
                    inboxIconName: "chatbox-ellipses-outline",
                    profileColor: "black",
                    profileIconName: "user-alt",
                    glassSize: 24,
                    medaillonSize: 35
                })
            }
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <HomeTab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    // paddingVertical: 5,
                    height: 70,
                    borderTopWidth: 0,
                    elevation: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gestureEnabled: true,
                    position: "absolute",
                    bottom: 0
                },
                activeColor: "white",
                inactiveColor: "gray",
                tabBarInactiveTintColor: "gray",
                tabBarActiveTintColor: "white",
                tabBarIcon: ({ focused, color, size }) => {
                },
            })} >
            <HomeTab.Screen name="Home" component={Home} navigation={navigation} options={{
                tabBarShowLabel: false,
                headerTransparent: true,
                headerShown: false,
                // headerRight: () => <Header title='Medaillon' navigation={navigation} />,
                tabBarStyle: {
                    backgroundColor: "black",
                    paddingBottom: 3,
                    paddingTop: 3,
                    position: "absolute",
                    bottom: 0,
                    zIndex: 0
                },
                tabBarIcon: ({ color }) => (
                    <Ionicons name={tabBarIconInfos.homeIconName} size={24} color={tabBarIconInfos.homeColor} />

                ),


                // header: () => <ReelsTopHeader title='andreas_sparre' />,
                gestureEnabled: true,
            }} />
            <HomeTab.Screen name="Trends" component={Trends} options={{
                headerShown: false,
                tabBarShowLabel: false,
                // header: () => <Header title='Medaillon' navigation={navigation} />,
                title: 'Trends',
                tabBarStyle: {
                    backgroundColor: "black",
                    paddingBottom: 3,
                    paddingTop: 3,
                    position: "absolute",
                    bottom: 0,
                    zIndex: 0
                },
                tabBarIcon: ({ color }) => (
                    <Ionicons name={tabBarIconInfos.trendsIconName} size={24} color={tabBarIconInfos.trendsIconColor} />
                )
            }} />

            <HomeTab.Screen name="Medaillon" component={Medaillon} navigation={navigation} options={({ route }) => ({
                tabBarShowLabel: false,
                tabBarLabel: '',
                headerTransparent: true,
                tabBarStyle: {
                    height: 0,
                    width: 0,
                    position: "absolute",
                    bottom: 0,
                    zIndex: 0
                },
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="plus-square-o" size={24} color={tabBarIconInfos.plusIconColor} />
                )

            })} />

            <HomeTab.Screen name="Inbox" component={InboxStack} navigation={navigation} options={{
                tabBarShowLabel: false,
                headerShown: false,
                headerTransparent: true,
                tabBarStyle: {
                    // height: 0,
                    // width: 0,
                    backgroundColor: "white",
                    paddingBottom: 3,
                    paddingTop: 3,
                    position: "absolute",
                    bottom: 0,
                    zIndex: 0
                },
                title: 'Inbox',
                tabBarBadge: 3,
                tabBarIcon: ({ color }) => (
                    // <AntDesign name='message1' color={tabBarIconInfos.inboxColor} size={24} />
                    <Ionicons name={tabBarIconInfos.inboxIconName} size={24} color={tabBarIconInfos.inboxColor} />
                ),
            }} />
            {/* <HomeTab.Screen name="Reels" component={Reels} options={{
                // tabBarStyle: { backgroundColor: "black" },
            }} /> */}
            <HomeTab.Screen name="Profile" component={Profile} navigation={navigation} options={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    paddingBottom: 3,
                    paddingTop: 3,
                    position: "absolute",
                    bottom: 0,
                    zIndex: 0
                },
                // headerRight: () => <Header title='Medaillon' navigation={navigation} />,
                header: () => <ProfileHeader
                    title='andreas_sparre'
                    navigation={navigation}
                    name="Andreas Sparre"
                    accountName="andreas_sparre"
                    profileImage={require('../storage/images/userProfile.png')}
                />,
                tabBarIcon: ({ color }) => (
                    // <AntDesign name="user" size={24} color={tabBarIconInfos.profileColor} />
                    // <FontAwesome5 name="user-alt" size={24} color={tabBarIconInfos.profileColor} />
                    <FontAwesome5 name={tabBarIconInfos.profileIconName} size={24} color={tabBarIconInfos.profileColor} />

                ),
                // activeColor: "white",
                gestureEnabled: true,
            }} />
        </HomeTab.Navigator >
    );
}