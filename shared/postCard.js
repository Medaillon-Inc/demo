import React from 'react';
import { StyleSheet, View } from 'react-native';
import { shouldUseActivityState } from 'react-native-screens';

export default function PostCard(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'rgba(158, 150, 150, .5)',
        paddingTop: 10,
        // borderTopWidth: 1,
        // borderColor: 'rgba(158, 150, 150, .5)',
        // marginTop: 90,
        // paddingTop: 10,
        // borderRadius: 6,
        // elevation: 3,
        // backgroundColor: '#fff',
        // shadowOffset: { width: 1, height: 1 },
        // shadowColor: '#333',
        // shadowOpacity: 0.3,
        // shadowRadius: 2,
        // marginHorizontal: 4,
        // marginVertical: 6,
    },
    cardContent: {
        // marginHorizontal: 18,
        // marginVertical: 20,
    }
});