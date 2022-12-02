import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Profile({ navigation, route }) {
    return (
        <View style={styles.body}>
            <Text>Profil Sayfası Yapım Aşamasında</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
});