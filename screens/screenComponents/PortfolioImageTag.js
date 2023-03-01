import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const PortfolioImageTag = ({ tag, icon }) => {
    // console.log({ icon })
    return (
        <View
            style={{
                justifyContent: 'flex-end',
                // alignItems: 'flex-end',
                width: '100%',
                height: '100%',
                paddingLeft: 5,
                paddingBottom: 7,
                // paddingVertical: 10,
                position: 'absolute',
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
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                {icon ? <Image source={require('../../assets/medaillon_logo-big-transparent.png')} style={{ width: 20, height: 20 }} /> : null}
                {
                    tag ?
                        <Text
                            // placeholder={tag}
                            // placeholderTextColor="#909090"
                            style={{
                                // flex: 1,
                                // flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                color: "#909090",
                                backgroundColor: ' rgba(235, 235, 235, 0.8)',
                                borderRadius: 50,
                                paddingHorizontal: 3,
                                paddingBottom: 1,
                                fontSize: 11,
                                // height: 20,
                                // width: '64%',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                                // padding: 4,
                                // paddingLeft: 40,
                            }}
                        >
                            {tag.length > 14
                                ? tag.slice(0, 11).toLowerCase() + '...'
                                : tag.toLowerCase()
                            }</Text>
                        : null
                }
            </View>
        </View>
    );
};

export default PortfolioImageTag;