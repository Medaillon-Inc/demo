import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import { videoData } from './Database';

import SingleReel from './SingleReel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { db } from '../../firebase'

const ReelsComponent = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeIndexValue = ({ index }) => {
        setCurrentIndex(index);
    };

    const insets = useSafeAreaInsets();

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collectionGroup('posts')
            // .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(post => (
                    { id: post.id, ...post.data() })))
            })
    }, [])

    return (
        <SwiperFlatList
            vertical={true}
            onChangeIndex={handleChangeIndexValue}
            data={posts}
            renderItem={({ item, index }) => (
                // {
                //     posts.map((post, index) => (
                <SingleReel item={item} index={index} navigation={navigation} currentIndex={currentIndex} post={posts[index]} />
                //     ))
                // }
            )}
            keyExtractor={(item, index) => index}
        />
    );
};

export default ReelsComponent;