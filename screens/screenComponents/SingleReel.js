import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
// import Video from 'react-native-video';
import { Video, AVPlaybackStatus } from 'expo-av';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { db, firebase } from '../../firebase'

const SingleReel = ({ item, index, currentIndex, post, navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const videoRef = useRef(null);

    const onBuffer = buffer => {
        console.log('buffring', buffer);
    };
    const onError = error => {
        console.log('error', error);
    };

    const [mute, setMute] = useState(false);

    const [like, setLike] = useState(item.isLike);

    const handleLike = post => {
        setLike(!like)
        const currentLikeStatus = !post.likes_by_users.includes(
            firebase.auth().currentUser.email
        )

        db.collection('users')
            .doc(post.owner_email)
            .collection('posts')
            .doc(post.id)
            .update({
                likes_by_users: currentLikeStatus
                    ? firebase.firestore.FieldValue.arrayUnion(
                        firebase.auth().currentUser.email
                    )
                    : firebase.firestore.FieldValue.arrayRemove(
                        firebase.auth().currentUser.email
                    ),
            })
            .then(() => {
                console.log('Document successfully updated!')
            })
            .catch(error => {
                console.error('Error updating document: ', error)
            })
    }

    return (
        <View
            style={{
                width: windowWidth,
                // height: windowHeight,
                height: windowHeight - 55,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <TouchableOpacity
                activeOpacity={0.9}
                // onPress={() => setMute(!mute)}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}>
                {/* <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode="cover"
                    paused={currentIndex == index ? false : true}
                    source={item.video}
                    muted={mute}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                /> */}
                <Image
                    source={{ uri: post.imageUrl }}
                    style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
            </TouchableOpacity>
            <Ionic
                name="volume-mute"
                style={{
                    fontSize: mute ? 20 : 0,
                    color: 'white',
                    position: 'absolute',
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    borderRadius: 100,
                    padding: mute ? 20 : 0,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    width: windowWidth,
                    zIndex: 1,
                    bottom: 0, //edited
                    paddingLeft: 10,
                    paddingBottom: 10,
                    marginBottom: 55,
                }}>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View
                            style={{ width: 250, flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 100,
                                    backgroundColor: 'white',
                                    margin: 10,
                                }}>
                                <Image
                                    // source={item.postProfile}
                                    source={{ uri: post.profile_picture }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 100,
                                    }}
                                />
                            </View>
                            {/* <Text style={{ color: 'white', fontSize: 16 }}>{item.title}</Text> */}
                            <Text style={{ fontWeight: '600', color: 'white' }}>@{post.user}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>
                        {/* {item.description} */}
                        <Text> {post.caption}</Text>
                    </Text>
                    {/* <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Ionic
                            name="ios-musical-note"
                            style={{ color: 'white', fontSize: 16 }}
                        />
                        <Text style={{ color: 'white' }}>Original Audio</Text>
                    </View> */}
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 10, //edited
                    right: 0,
                }}>
                <TouchableOpacity onPress={() => handleLike(post)} style={{ padding: 10 }}>
                    {post.likes_by_users.includes(firebase.auth().currentUser.email)
                        ? <AntDesign
                            name="heart"
                            style={{ color: 'red', fontSize: 25 }}
                        />
                        : <AntDesign
                            name='hearto'
                            style={{ color: 'white', fontSize: 25 }}
                        />
                    }
                    {/* <AntDesign
                        name={like ? 'heart' : 'hearto'}
                        style={{ color: like ? 'red' : 'white', fontSize: 25 }}
                    /> */}
                    {/* <Text style={{ color: 'white' }}>{item.likes}</Text> */}
                    {post.likes_by_users.length > 0
                        ? <Text style={{ color: 'white', alignSelf: 'center' }}>{post.likes_by_users.length.toLocaleString('en')} </Text>
                        : null
                    }
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('Comments')} >
                    <Ionic
                        name="ios-chatbubble-outline"
                        style={{ color: 'white', fontSize: 25 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionic
                        name="paper-plane-outline"
                        style={{ color: 'white', fontSize: 25 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Feather
                        name="more-vertical"
                        style={{ color: 'white', fontSize: 25 }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: 'white',
                        margin: 10,
                    }}>
                    <Image
                        source={item.postProfile}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            resizeMode: 'cover',
                        }}
                    />
                </View>
            </View>
        </View >
    );
};

export default SingleReel;