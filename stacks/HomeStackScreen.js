import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Messages from '../screens/messages';
import Notifications from '../screens/notifications';
import MedaillonContests from '../screens/medaillon';
import Search from '../screens/search';
import Header from '../shared/header';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator
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
                <HomeStack.Screen name="Home" component={Home} options={{
                    headerTitle: () => <Header title='Medaillon' navigation={navigation} />
                }} />
                <HomeStack.Screen name="Search" component={Search} options={{
                    title: 'Ara', headerShadowVisible: false, headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // headerTitle: () => <Header title='Ara' />
                }} />
                <HomeStack.Screen name="MedaillonContests" component={MedaillonContests} options={{
                    title: 'Yarışmalar', headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            </HomeStack.Navigator>
            {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Messages" component={MessagesStackScreen} />
      </Tab.Navigator> */}
        </NavigationContainer>
    );
}