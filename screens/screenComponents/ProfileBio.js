import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfileBio = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>hautelemode</Text>
            <Text style={styles.bio}>fashion news, criticism,and updates</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
    },
});

export default ProfileBio;
