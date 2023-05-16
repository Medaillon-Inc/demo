import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, ActivityIndicator, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Video } from 'expo-av';
import * as NavigationBar from 'expo-navigation-bar';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import CommentsModal from './screenComponents/CommentsModal';

const { width, height } = Dimensions.get('window');
const tabBarHeight = 49;
const adjustedHeight = height - tabBarHeight;

export default function Home({ navigation }) {

    NavigationBar.setBackgroundColorAsync("black");
    const [isVisible, setIsVisible] = useState(false);
    const [activeVideo, setActiveVideo] = useState(0);
    const [isLoading, setIsLoading] = useState([]); // Initialize with empty array
    const videoRefs = useRef([]);

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const [videoData, setVideoData] = useState([
        {
            id: '1',
            uri: require('../storage/videos/palvin1.mp4'),
            liked: false,
            likes: 123,
            width: null,
            height: null,
        },
        {
            id: '2',
            uri: require('../storage/videos/video2.mp4'),
            liked: false,
            likes: 231,
            width: null,
            height: null,
        },
        {
            id: '3',
            uri: require('../storage/videos/video3.mp4'),
            liked: false,
            likes: 150,
            width: null,
            height: null,
        },
    ]);

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videoData.length);
        if (videoRefs.current[activeVideo]) {
            videoRefs.current[activeVideo].playAsync();
        }
    }, [activeVideo]);

    useEffect(() => {
        (async () => {
            for (const video of videoData) {
                const asset = Asset.fromModule(video.uri);
                await asset.downloadAsync();
                video.uri = asset.uri;
            }
            setIsLoading(new Array(videoData.length).fill(false)); // Update isLoading here
        })();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            if (videoRefs.current[activeVideo]) {
                videoRefs.current[activeVideo].playAsync();
            }

            return () => {
                if (videoRefs.current[activeVideo]) {
                    videoRefs.current[activeVideo].pauseAsync();
                }
            };
        }, [activeVideo])
    );

    const toggleLike = (index) => {
        setVideoData((prevData) => {
            const newData = [...prevData];
            newData[index].liked = !newData[index].liked;
            newData[index].likes += newData[index].liked ? 1 : -1;
            return newData;
        });
    };


    const onPlaybackStatusUpdate = (playbackStatus, index) => {
        if (playbackStatus.didJustFinish) {
            videoRefs.current[index].replayAsync();
        }

        if (playbackStatus.isLoaded) {
            setIsLoading((prev) => {
                const updated = [...prev];
                updated[index] = false;
                return updated;
            });
        }

        // Eğer video şu anki aktif video değilse, duraklatın
        if (index !== activeVideo && playbackStatus.isPlaying) {
            videoRefs.current[index].pauseAsync();
        }
    };


    const toggleVideoPlayback = async (index) => {
        const videoRef = videoRefs.current[index];
        const status = await videoRef.getStatusAsync();

        if (status.isPlaying) {
            videoRef.pauseAsync();
        } else {
            videoRef.playAsync();
        }
    };

    const calculateVideoDimensions = (video) => {
        const videoAspectRatio = video.width / video.height;
        const screenAspectRatio = width / height;

        if (videoAspectRatio > screenAspectRatio) {
            // Video is wider than the screen
            return {
                width: width,
                height: width / videoAspectRatio,
            };
        } else {
            // Video is taller than the screen
            return {
                width: height * videoAspectRatio,
                height: height,
            };
        }
    };

    const onVideoLayout = (event, index) => {
        const { width: videoWidth, height: videoHeight } = event.nativeEvent.layout;
        setVideoData((prevData) => {
            const newData = [...prevData];
            newData[index].width = videoWidth;
            newData[index].height = videoHeight;
            return newData;
        });
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <ScrollView
                pagingEnabled
                vertical
                showsVerticalScrollIndicator={false}
                onScroll={(event) => {
                    const offsetY = event.nativeEvent.contentOffset.y;
                    const pageIndex = Math.round(offsetY / height);
                    setActiveVideo(pageIndex);
                }}
                scrollEventThrottle={16}
            >
                {videoData.map((video, index) => (
                    <View key={video.id} style={[styles.videoContainer, { height: adjustedHeight }]}>
                        <Video
                            ref={(ref) => (videoRefs.current[index] = ref)}
                            source={{ uri: video.uri }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            shouldPlay={index === 0}
                            isLooping={false}
                            style={styles.video}
                            onPlaybackStatusUpdate={(status) => onPlaybackStatusUpdate(status, index)}
                        />
                        {isLoading[index] && (
                            <View style={styles.indicatorContainer}>
                                <ActivityIndicator size="large" color="#ffffff" />
                            </View>
                        )}
                        <TouchableOpacity
                            style={styles.touchableOverlay}
                            onPress={() => toggleVideoPlayback(index)}
                            activeOpacity={1}
                        />
                        <View style={styles.videoInfo}>
                            <View style={styles.infoColumn}>
                                <View style={styles.infoRow}>
                                    <Ionicons name="person" size={24} color="white" />
                                    <Text style={styles.infoText}>@hautelemode</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <MaterialIcons name="music-note" size={24} color="white" />
                                    <Text style={styles.infoText}>Artist - Song</Text>
                                </View>
                            </View>
                            <View style={styles.iconColumn}>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity onPress={() => toggleLike(index)}>
                                        <Ionicons name={'heart'} size={32} color={video.liked ? "red" : "white"} />
                                    </TouchableOpacity>
                                    <Text style={styles.iconText}>{video.likes}</Text>
                                </View>
                                <View style={styles.iconContainer}>
                                    {/* <TouchableOpacity onPress={() => navigation.navigate('CommentsModal')}>
                                        <FontAwesome name="commenting" size={32} color="white" />
                                    </TouchableOpacity> */}
                                    <TouchableOpacity onPress={toggleModal}>
                                        <FontAwesome name="commenting" size={32} color="white" />
                                    </TouchableOpacity>
                                    <Text style={styles.iconText}>23</Text>
                                </View>
                                <View style={styles.iconContainer}>
                                    <Ionicons name="share-social" size={32} color="white" />
                                    <Text style={styles.iconText}>12</Text>
                                </View>
                                <View style={styles.profileImageContainer}>
                                    <Ionicons name="person-circle" size={48} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <CommentsModal
                visible={modalVisible}
                closeModal={() => setModalVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    videoContainer: {
        width,
        height,
    },
    video: {
        width,
        height,
        marginBottom: 90,
        position: 'absolute',
    },
    indicatorContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    touchableOverlay: {
        width,
        height: adjustedHeight,
        position: 'absolute',
    },
    username: {
        color: '#ffffff',
        fontSize: 16,
        marginRight: 8,
    },
    videoInfo: {
        position: 'absolute',
        bottom: 30,
        left: 16,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoText: {
        color: '#ffffff',
        fontSize: 16,
        marginLeft: 4,
        alignItems: 'baseline',
    },
    iconColumn: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    iconText: {
        color: '#ffffff',
        fontSize: 14,
    },
    profileImageContainer: {
        alignItems: 'center',
    },
});
