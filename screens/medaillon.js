import React, { Fragment } from 'react';
import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import ReelsComponent from './screenComponents/ReelsComponent';
// import { SafeAreaView } from 'react-native-safe-area-context';


const Medaillon = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View
                style={{
                    // width: windowWidth,
                    // height: windowHeight,
                    position: 'relative',
                    backgroundColor: 'black',
                }}>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // zIndex: 1,
                        padding: 10,
                        paddingTop: 40,
                        // flex: 1,
                    }}>
                </View>
                <ReelsComponent navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};

export default Medaillon;
