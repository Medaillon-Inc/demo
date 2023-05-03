import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from '../screens/inbox';
import Chat from '../screens/chat';

const Stack = createStackNavigator();

export default function InboxStack({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Inbox">
                <Stack.Screen
                    name="Inbox"
                    component={Inbox}
                    navigation={navigation}
                    options={{ title: 'Inbox', headerShown: false }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
