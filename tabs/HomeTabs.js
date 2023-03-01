import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../stacks/HomeStackScreen';
import Home from '../screens/home';
import Messages from '../screens/messages';
import Notifications from '../screens/notifications';
import Search from '../screens/search';
import Shop from '../screens/shop';
// import Reels from '../screens/reels';
import Medaillon from '../screens/medaillon';
import Profile from '../screens/profile';
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
import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
} from 'react-native-navigation-bar-color';
import SinglePost from '../screens/singlePost';
import { NativeBaseConfigProvider } from 'native-base';

{/* <MaterialCommunityIcons name="shopping" size={24} color="black" /> */ }
{/* <MaterialCommunityIcons name="shopping-outline" size={24} color="black" /> */ }

const HomeTab = createBottomTabNavigator();

export default function HomeTabs({ navigation }) {
    return (
        <HomeTab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    // paddingVertical: 5,
                    height: 50,
                    borderTopWidth: 0,
                    elevation: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gestureEnabled: true,
                },
                tabBarIcon: ({ focused, color, size }) => {

                    // if (route.name === 'Home') {
                    //     iconName = focused
                    //         ? "home"
                    //         : "home";
                    // } else if (route.name === 'Search') {
                    //     iconName = focused ? "search" : "search";
                    // }
                    // else if (route.name === 'MedaillonContests') {
                    //     iconName = focused ? "home" : "home";
                    // }

                    if (route.name === 'Home') {
                        if (focused) {
                            return <Foundation name="home" size={30} color="black" />
                        } else {
                            return <Octicons name="home" size={24} color="black" />
                        }
                    } else if (route.name === 'Search') {
                        if (focused) {
                            return <FontAwesome name="search" size={size} color="white" />
                        } else {
                            return <Feather name="search" size={size} color="black" />
                        }
                    } else if (route.name === 'Shop') {
                        if (focused) {
                            return <MaterialCommunityIcons name="shopping" size={24} color="black" />
                        } else {
                            return <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
                        }
                    } else if (route.name === 'Medaillon') {
                        if (focused) {
                            return <Image
                                style={{ width: 47, height: 47 }}
                                source={require('../assets/medaillon_logo-big-transparent.png')}
                            />
                        } else {
                            return <Image
                                style={{ width: 35, height: 35 }}
                                source={require('../assets/medaillon_logo-big-transparent.png')}
                            />
                        }
                    } else if (route.name === 'Profile') {
                        if (focused) {
                            // size = size + 6;
                            return (
                                // <FontAwesome name="user" size={24} color="black" />
                                <FontAwesome5 name="user-alt" size={24} color="black" />
                            );
                        } else {
                            return (
                                // <FontAwesome name="user-o" size={24} color="black" />
                                <FontAwesome5 name="user" size={24} color="black" />
                            );
                        }
                    } else if (route.name === 'Messages') {
                        if (focused) {
                            return (
                                <AntDesign name='message1' color={'black'} size={26} />
                            );
                        } else {
                            return (
                                <AntDesign name='message1' color={'black'} size={24} />
                            );

                        }
                    }

                    // else if (route.name === 'MedaillonContests') {
                    //     if (iconName = focused) {
                    //         return <Octicons name="home" size={size} color={color} />
                    //     } else {
                    //         return <Foundation name={iconName} size={size} color={color} />
                    //     }
                    // }
                },
                // tabBarActiveBackgroundColor: "black",
                // tabBarStyle: { backgroundColor: "black" },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                // tabBarActiveBackgroundColor: "white",
            })} >
            <HomeTab.Screen name="Home" component={Home} options={{
                // headerRight: () => <Header title='Medaillon' navigation={navigation} />,
                header: () => <Header title='Medaillon' navigation={navigation} />,
                tabBarStyle: { backgroundColor: "white", paddingVertical: 5, },
                gestureEnabled: true,
            }} />
            {/* <HomeTab.Screen name="Search" component={Search} options={{
                title: 'Ara',
            }} /> */}
            <HomeTab.Screen name="Shop" component={Shop} options={{
                title: 'Shop',
                gestureEnabled: true,
            }} />
            <HomeTab.Screen name="Medaillon" component={Medaillon} navgation={navigation} options={({ route }) => ({
                tabBarShowLabel: false,
                headerTransparent: true,
                // headerShown: false,
                // tabBarBadgeStyle: {
                //     backgroundColor: "white",
                //     borderTopWidth: 0,
                //     borderTopColor: "white",
                //     elevation: 0
                // },
                // backgroundColor: 'rgba(52, 52, 52, 0.8)',
                tabBarStyle: { backgroundColor: "white", paddingVertical: 5, },
                header: () => <ReelsTopHeader title='andreas_sparre' />,
                gestureEnabled: true,
                // tabBarBadge: 3
            })} />
            <HomeTab.Screen name="Messages" component={Messages} options={{
                title: 'Messages',
                tabBarBadge: 3,
            }} />
            {/* <HomeTab.Screen name="Reels" component={Reels} options={{
                // tabBarStyle: { backgroundColor: "black" },
            }} /> */}
            <HomeTab.Screen name="Profile" component={Profile} options={{
                // headerRight: () => <Header title='Medaillon' navigation={navigation} />,
                header: () => <ProfileHeader
                    title='andreas_sparre'
                    navigation={navigation}
                    name="Andreas Sparre"
                    accountName="andreas_sparre"
                    profileImage={require('../storage/images/userProfile.png')}
                />,
                gestureEnabled: true,
            }} />
            {/* <HomeTab.Screen name="SinglePost" component={SinglePost} options={{
                headerTitleStyle: { fontWeight: "600", fontSize: 22, }
            }} /> */}
            {/* <HomeTab.Screen name="EditProfile" component={EditProfile} initialParams={{ navigation }} options={{
                // headerRight: () => <Header title='Medaillon' navigation={navigation} />,
                header: () => <ProfileHeader title='andreas_sparre' navigation={navigation} />,
            }} /> */}
        </HomeTab.Navigator >
    );
}