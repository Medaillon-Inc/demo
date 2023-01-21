import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Shop({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Shopping Screen</Text>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}