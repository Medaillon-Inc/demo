
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Messages from './messages';
import PostCard from '../shared/postCard';

export default function MedaillonContests({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Medaillon Yarışmaları Yapım Aşamasında</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});