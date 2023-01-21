import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ReelsTopHeader() {
    return (
        <View style={styles.header}>
            <View style={styles.liveTV}>

            </View>
            <View style={styles.reelsOptionsContainer}>
                <Text style={styles.reelsOptions}>Yakınlarda</Text>
                <Text style={styles.reelsOptions}>Challenge</Text>
            </View>
            <View style={styles.searchIcon}>
                <Feather name="search" size={24} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        paddingTop: 0,
        paddingHorizontal: 10,
        flexDirection: 'row',

        alignItems: 'center',
        // backgroundColor: "black",
    },
    liveTV: {
        width: "15%",
    },
    reelsOptionsContainer: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "center",
    },
    reelsOptions: {
        fontWeight: "600",
        fontSize: 16,
        paddingHorizontal: 10,
        color: "white",
    },
    searchIcon: {
        width: "15%",
        // justifyContent: "center",
    },
    // leftSide: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     paddingTop: 10,
    //     paddingLeft: 5,
    // },
    // rightSide: {
    //     position: "absolute",
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     paddingTop: 35,
    //     right: 30,
    // },
    // headerTitleStyle: {
    //     fontSize: 23,
    //     fontWeight: "bold",
    //     marginStart: 10,
    //     marginTop: 10,
    // },
    // headerText: {
    //     fontSize: 35,
    //     color: '#333',
    //     letterSpacing: 1,
    // },
    // icons: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: 10,
    //     position: 'absolute',
    //     right: 30,
    //     fontWeight: "bold",
    // },
    // icon: {
    //     marginLeft: 30,
    // },
    // headerImage: {
    //     width: 26,
    //     height: 26,
    //     marginHorizontal: 10
    // },
});