import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MessagesStack = createNativeStackNavigator();

export default function MessagesStackScreen() {
    return (
        <MessagesStack.Navigator>
            <MessagesStack.Screen name="Messages" component={Messages} options={{
                title: 'alitrkr06', headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <MessagesStack.Screen name="Home" component={Home} options={{ headerTitle: () => <Header title='Medaillon' /> }} />
            <MessagesStack.Screen name="Notifications" component={Notifications} options={{
                title: 'Bildirimler', headerShadowVisible: false, headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
        </MessagesStack.Navigator>
    );
}