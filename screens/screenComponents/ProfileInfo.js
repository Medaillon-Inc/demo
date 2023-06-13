import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileInfo = ({ isVerified }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                    <View style={styles.imageContainer}>

                        <LinearGradient
                            // colors={['#c71c41', '#c7308f', '#']}
                            // colors={['#fc03ec', '#a103fc', '#2883fa']}
                            colors={['#a103fc', '#c71c41', '#ff8501']}
                            locations={[0.1, 0.6, 1]}
                            start={{ x: 1.1, y: 0.8 }}
                            end={{ x: 0.6, y: 1 }}
                            style={styles.storyCircle}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                            />
                        </LinearGradient>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.statsContainer}>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>123</Text>
                            <Text style={styles.statLabel}>Posts</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>456</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>789</Text>
                            <Text style={styles.statLabel}>Following</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.profileName}>hautelemode</Text>
                {isVerified && <Text style={styles.verified}>Celebrity</Text>}
                <Text style={styles.bio}>fashion news, criticism, and updates</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 15,
        marginTop: 15
    },
    imageContainer: {
        marginRight: 15,
    },
    storyCircle: {
        borderRadius: 50,
    },
    profileImage: {
        width: 95,
        height: 95,
        borderRadius: 50,

        borderWidth: 2,
        // borderColor: '#ff8501',
        borderColor: 'white',
        margin: 3
    },
    bioContainer: {
        flexDirection: 'column',
        width: "70%"
    },
    infoContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
    },
    profileName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 2
    },
    verified: {
        color: 'gray',
        fontSize: 12,
        marginTop: 2
    },
    bio: {
        marginTop: 1,
        fontSize: 14,
    },
});

export default ProfileInfo;
