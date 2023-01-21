import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Ionic from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/Fontawesome';

const Tag = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: '100%',
                paddingVertical: 10,
                position: 'relative',
            }}>
            {/* <Ionic
                name="search"
                style={{
                    fontSize: 18,
                    opacity: 0.7,
                    position: 'absolute',
                    zIndex: 1,
                    left: 25,
                }}
            /> */}
            {/* <FontAwesome5 name="hand-sparkles" color="black" style={{
                fontSize: 10,
                opacity: 0.7,
                position: 'absolute',
                zIndex: 2,
                left: 25,
            }} /> */}
            <TextInput
                placeholder="#HighFashion"
                // placeholderTextColor="#909090"
                placeholderTextColor="#fff"
                style={{
                    width: '100%',
                    // backgroundColor: '#EBEBEB',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    padding: 4,
                    paddingLeft: 40,
                }}
            />
        </View>
    );
};

export default Tag;