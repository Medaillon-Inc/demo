import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { videoData } from './Database';
import PortfolioImageTag from './PortfolioImageTag';


const SearchContent = props => {
    const searchData = [
        {
            id: 0,
            images: [
                require('../../storage/images/kratos.png'),
                require('../../storage/images/hadid1.jpg'),
                require('../../storage/images/palvin2.jpg'),
                require('../../storage/images/barbarapalvin.png'),
                require('../../storage/images/hadid2.jpg'),
                require('../../storage/images/scarletwitch.jpg'),
            ],
        },
        {
            id: 1,
            images: [
                require('../../assets/photos/challengePhotos/highfashion1.jpg'),
                require('../../storage/images/jenner1.jpg'),
                require('../../storage/images/bananarepublic1.jpg'),
                require('../../storage/images/bananarepublic2.jpg'),
                require('../../storage/images/hadid3.jpg'),
                require('../../storage/images/palvin1.jpg'),
            ],
        },
        {
            id: 2,
            images: [
                // require('../../storage/images/bananarepublic6.jpg'),
                require('../../storage/images/lima3.jpg'),
                require('../../storage/images/bananarepublic5.jpg'),
                require('../../storage/images/bananarepublic7.jpg'),
            ],
        },
    ];

    return (
        <View>
            {searchData.map((data, index) => {
                return (
                    <View key={index}>
                        {data.id === 0 ? (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}>
                                {data.images.map((imageData, imgIndex) => {
                                    return (
                                        <TouchableOpacity
                                            key={imgIndex}
                                            onPressIn={() => props.data(imageData)}
                                            onPressOut={() => props.data(null)}
                                            style={{ paddingBottom: 2, width: '33%' }}>
                                            <Image
                                                source={imageData}
                                                style={{ width: '100%', height: 150 }}
                                            />
                                            {/* <PortfolioImageTag /> */}
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        ) : null}
                        {data.id === 1 ? (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        width: '66.5%',
                                        justifyContent: 'space-between',
                                    }}>
                                    {data.images.slice(0, 4).map((imageData, imgIndex) => {
                                        return (
                                            <TouchableOpacity
                                                key={imgIndex}
                                                onPressIn={() => props.data(imageData)}
                                                onPressOut={() => props.data(null)}
                                                style={{ paddingBottom: 2, width: '49.5%' }}>
                                                <Image
                                                    source={imageData}
                                                    style={{ width: '100%', height: 150 }}
                                                />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                                <TouchableOpacity
                                    onPressIn={() => props.data(data.images[5])}
                                    onPressOut={() => props.data(null)}
                                    style={{ marginLeft: 2, width: '33%' }}>
                                    <Image
                                        source={data.images[5]}
                                        style={{ width: '100%', height: 300 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : null}
                        {data.id === 2 ? (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                <TouchableOpacity
                                    onPressIn={() => props.data(data.images[2])}
                                    onPressOut={() => props.data(null)}
                                    style={{ paddingRight: 2, width: '66.5%' }}>
                                    <Image
                                        source={data.images[2]}
                                        style={{ width: '100%', height: 300 }}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        width: '33%',
                                        justifyContent: 'space-between',
                                    }}>
                                    {data.images.slice(0, 2).map((imageData, imgIndex) => {
                                        return (
                                            <TouchableOpacity
                                                key={imgIndex}
                                                onPressIn={() => props.data(imageData)}
                                                onPressOut={() => props.data(null)}
                                                style={{ paddingBottom: 2, width: '100%' }}>
                                                <Image
                                                    source={imageData}
                                                    style={{ width: '100%', height: 150 }}
                                                />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </View>
                        ) : null}
                    </View>
                );
            })}
        </View>
    );
};

export default SearchContent;