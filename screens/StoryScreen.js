import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

const StoryScreen = () => {
    const [progress, setProgress] = useState(0);
    const progressBar = useRef(null);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 1) {
                    clearInterval(interval);
                    return 1;
                }
                return prevProgress + 0.01;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.storyImage}
                source={{ uri: 'https://picsum.photos/300/300' }}
            />
            <View style={styles.progressBarContainer}>
                <Progress.Bar
                    progress={progress}
                    width={width - 40}
                    height={3}
                    color={'white'}
                    unfilledColor={'rgba(255, 255, 255, 0.5)'}
                    borderWidth={0}
                    borderRadius={0}
                    ref={progressBar}
                />
            </View>
            <View style={styles.infoRow}>
                <View style={styles.profileInfo}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://picsum.photos/200/300' }}
                    />
                    <Text style={styles.profileName}>hautelemode</Text>
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TextInput
                    style={styles.messageInput}
                    placeholder="Mesaj Gönder..."
                    placeholderTextColor="#ffffff"
                />
                <TouchableOpacity onPress={toggleLike}>
                    <FontAwesome name="heart" size={24} color={liked ? 'red' : 'white'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    storyImage: {
        width,
        height,
        resizeMode: 'cover',
    },
    infoRow: {
        position: 'absolute',
        top: 43,
        left: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginRight: 10,
    },
    profileName: {
        color: 'white',
        fontWeight: 'bold',
    },
    progressBarContainer: {
        position: 'absolute',
        top: 30,
        paddingHorizontal: 20,
        width: '100%',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
    },
    messageInput: {
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: '70%',
        marginRight: 10,
    },
});

export default StoryScreen;
