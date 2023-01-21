import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from './Database';
import SingleReel from './SingleReel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ReelsComponent = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeIndexValue = ({ index }) => {
        setCurrentIndex(index);
    };

    const insets = useSafeAreaInsets();

    return (
        <SwiperFlatList
            vertical={true}
            onChangeIndex={handleChangeIndexValue}
            data={videoData}
            renderItem={({ item, index }) => (
                <SingleReel item={item} index={index} navigation={navigation} currentIndex={currentIndex} />
            )}
            keyExtractor={(item, index) => index}
        />
    );
};

export default ReelsComponent;