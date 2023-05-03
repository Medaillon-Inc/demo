import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 15,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default ProfileHeader;
