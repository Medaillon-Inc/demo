
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Messages from './messages';

export default function Home({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.titleText}>Welcome to Medaillon</Text>
            <Button
                title="Go to Messages"
                onPress={() => navigation.navigate('Messages')}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    titleText: {
        fontFamily: "Billabong",
        fontSize: 35,
        color: '#333',
    },
});