import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { SimpleLineIcons } from '@expo/vector-icons';
import { photoStrings } from '../assets/strings/photos/photo64BaseStrings';

export default function Profile({ navigation, route }) {
    return (
        <View style={styles.body}>
            <View style={styles.infoSection}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                    <View styles={styles.photoAndName}>
                        <Image
                            style={styles.profilePhoto}
                            source={{
                                uri: photoStrings.pp.photo
                            }}
                        />
                    </View>
                    <View style={styles.postStatistics}>
                        <Text style={styles.statisticsNumber}>4</Text>
                        <Text>Gönderi</Text>
                    </View>
                    <View style={styles.followerStatistics}>
                        <Text style={styles.statisticsNumber}>1</Text>
                        <Text>Takipçi</Text>
                    </View>
                    <View style={styles.followStatistics}>
                        <Text style={styles.statisticsNumber}>25</Text>
                        <Text>Takip</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.username}>Andreas Sparre</Text>
                <Text style={styles.designDummy}>Gönderi</Text>
                <Text style={styles.designDummy}>Takipçi</Text>
                <Text style={styles.designDummy}>Takip</Text>
            </View>
            <View style={{ paddingLeft: 18 }}>
                <Text>Cibiliyetsel krizler yaşayıcı.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white",
    },
    infoSection: {
        paddingTop: 20,
    },
    profile: {
        flexDirection: "column",
    },
    photoAndName: {
        flexDirection: "column",
        alignItems: "center",
    },
    profilePhoto: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignSelf: "center",
    },
    username: {
        fontWeight: "bold",
        fontSize: 14,
        paddingTop: 10,
    },
    statistics: {
        flexDirection: "column",
    },
    postStatistics: {
        alignItems: "center",
    },
    statisticsNumber: {
        fontWeight: "bold",
        fontSize: 19,
    },
    followerStatistics: {
        alignItems: "center",
    },
    followStatistics: {
        alignItems: "center",
    },
    designDummy: {
        color: "white",
    },
});