import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfileStats = () => {
    return (
        <View style={styles.container}>
            <View style={styles.stat}>
                <Text style={styles.statNumber}>210</Text>
                <Text style={styles.statLabel}>Gönderiler</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.statNumber}>2.5K</Text>
                <Text style={styles.statLabel}>Takipçiler</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.statNumber}>300</Text>
                <Text style={styles.statLabel}>Takip</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        marginTop: 5,
    },
});

export default ProfileStats;
