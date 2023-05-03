import ReelsComponent from './screenComponents/ReelsComponent';
// import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, StatusBar, Image, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import * as NavigationBar from 'expo-navigation-bar';

// import React, { useState, useEffect } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Camera } from 'expo-camera';

const Medaillon = ({ navigation }) => {

    NavigationBar.setBackgroundColorAsync("black");

    const [type, setType] = useState(CameraType.back);
    const [permission, requestCameraPermission] = Camera.useCameraPermissions();
    const [ImagePickerStatus, requestImagePickerPermission] = ImagePicker.useCameraPermissions();
    const [mediaLibraryPermissions, requestMediaLibraryPermission] = ImagePicker.useMediaLibraryPermissions();

    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
    const [isRecording, setIsRecording] = useState(false);
    const [cameraRef, setCameraRef] = useState(null);

    const [image, setImage] = useState(null);

    const [videoQuality, setVideoQuality] = useState(Camera.Constants.VideoQuality['4:3']);

    const [playbackRate, setPlaybackRate] = useState(1);

    const changeSpeed = () => {
        // Örnek olarak 0.5, 1 ve 2 arasında geçiş yapabilirsiniz
        if (playbackRate === 1) {
            setPlaybackRate(2);
        } else if (playbackRate === 2) {
            setPlaybackRate(0.5);
        } else {
            setPlaybackRate(1);
        }
    };

    const [timer, setTimer] = useState(0);

    const startTimer = (seconds) => {
        setTimer(seconds);
        setTimeout(() => {
            toggleRecording();
            setTimer(0);
        }, seconds * 1000);
    };

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    if (permission === null) {
        return <View />;
    }
    if (permission === false) {
        return <Text>Camera usage permission is denied!</Text>;
    }

    const toggleFlash = () => {
        setFlashMode(
            flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
        );
    };

    const toggleRecording = async () => {
        if (cameraRef) {
            if (!isRecording) {
                setIsRecording(true);
                await cameraRef.recordAsync().then((video) => {
                    console.log(video.uri);
                });
            } else {
                setIsRecording(false);
                cameraRef.stopRecording();
            }
        }
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const openVideoLibrary = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        });

        if (!result.canceled) {
            console.log(result.uri);
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, height: "100%" }}>
            <View style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <Camera
                    style={styles.camera}
                    type={type}
                    autoFocus={Camera.Constants.AutoFocus.on}
                    autoFocusPointOfInterest={{ x: 0.5, y: 0.5 }}
                    whiteBalance={Camera.Constants.WhiteBalance.auto}
                    autoExposure={true}
                    videoStabilizationMode={Camera.Constants.VideoStabilization.auto}
                    videoQuality={videoQuality}>
                    <View style={styles.topButtonsContainer}>
                        <View style={styles.topLeftContainer}>
                            <TouchableOpacity onPress={toggleFlash}>
                                <MaterialIcons
                                    name={flashMode === Camera.Constants.FlashMode.off ? 'flash-off' : 'flash-on'}
                                    size={30}
                                    color="white"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleCameraType}>
                                <MaterialIcons name="flip-camera-ios" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topRightContainer}>
                            <Text style={styles.timerText}>00:15</Text>
                        </View>
                    </View>
                    <View style={styles.bottomButtonsContainer}>
                        <TouchableOpacity onPress={openVideoLibrary}>
                            <MaterialIcons name="video-library" size={40} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleRecording} style={styles.captureButton}>
                            <View
                                style={[
                                    styles.innerCaptureButton,
                                    { backgroundColor: isRecording ? 'white' : 'red' },
                                ]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <MaterialIcons name="check" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sideButtonsContainer}>
                        <TouchableOpacity onPress={changeSpeed} style={styles.sideButton}>
                            <MaterialIcons name="speed" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={styles.sideButton}>
                            <MaterialIcons name="tune" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => startTimer(3)} style={styles.sideButton}>
                            <MaterialIcons name="timer" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={styles.sideButton}>
                            <MaterialIcons name="filter-center-focus" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </SafeAreaView>
    );
};

export default Medaillon;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     camera: {
//         flex: 1,
//         aspectRatio: 0.6
//     },
//     buttonContainer: {
//         flex: 1,
//         backgroundColor: 'transparent',
//         flexDirection: 'row',
//         margin: 20,
//     },
//     button: {
//         flex: 0.1,
//         alignSelf: 'flex-end',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 18,
//         color: 'white',
//     },
// }); 

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     camera: {
//         flex: 1,
//     },
//     topButtonsContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//         margin: 20,
//     },
//     bottomButtonsContainer: {
//         position: 'absolute',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         bottom: 20,
//         left: 0,
//         right: 0,
//     },
//     captureButton: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     innerCaptureButton: {
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         backgroundColor: 'red',
//     },
// });

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     camera: {
//         flex: 1,
//     },
//     topButtonsContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//         margin: 20,
//     },
//     bottomButtonsContainer: {
//         position: 'absolute',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         bottom: 20,
//         left: 0,
//         right: 0,
//     },
//     captureButton: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     innerCaptureButton: {
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         backgroundColor: 'red',
//     },
//     sideButtonsContainer: {
//         position: 'absolute',
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         right: 10,
//         top: '30%',
//         bottom: '30%',
//     },
//     sideButton: {
//         marginBottom: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         borderRadius: 50,
//         width: 50,
//         height: 50,
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        // aspectRatio: 1,
        ratio: '1:1'
    },
    topButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 20,
    },
    topLeftContainer: {
        flexDirection: 'row',
    },
    topRightContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    timerText: {
        fontSize: 18,
        color: 'white',
    },
    bottomButtonsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 20,
        left: 0,
        right: 0,
    },
    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCaptureButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
    },
    sideButtonsContainer: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        right: 10,
        top: '30%',
        bottom: '30%',
    },
    sideButton: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        width: 50,
        height: 50,
    },
});