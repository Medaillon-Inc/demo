import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { globalStyles, images, fanImages } from '../styles/global';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import { FriendsProfileData } from './screenComponents/Database';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Comments({ navigation, route }) {

    const [comments, setComments] = useState([
        { title: 'bailey_peace', commentId: 0, body: '🔥🔥🔥', timePassed: '9s', likes: 11, liked: false, key: 0 },
        { title: 'kingsman', commentId: 1, body: 'Pretty cool 👌👌👌', timePassed: '2g', likes: 2, liked: false, key: 1 },
        { title: 'yozgatLi', commentId: 2, body: 'Fukkin 🥵..uhh killing it>>🔥❤️', timePassed: '3g', likes: 5, liked: false, key: 2 },
        { title: 'çılğındayı', commentId: 3, body: 'All are great my friend 🔥🔥keep it up', timePassed: '3', likes: 4, liked: false, key: 3 },
        { title: 'weirdo', commentId: 4, body: 'Wow... wow... wow 👏', timePassed: '3g', likes: 18, liked: false, key: 4 },
        { title: 'gigatom', commentId: 5, body: 'Amazing ❤️', timePassed: '3g', likes: 22, liked: false, key: 5 },
        { title: 'mahmut1461', commentId: 6, body: '3. karım olur musun?', timePassed: '4g', likes: 1, liked: false, key: 6 },
        // { title: 'olyaabramovich', commentId: 7, body: 'Amazing ❤️', timePassed: '4g', likes: 1, liked: false, key: 7 },
        // { title: 'olyaabramovich', commentId: 8, body: 'Amazing ❤️', timePassed: '4g', likes: 1, liked: false, key: 8 },
    ]);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={styles.postInfo}>
                <View style={{ paddingRight: 10, paddingLeft: 2, paddingTop: 5, }}>
                    <Image source={images.profilePhotos[1]} style={styles.profilePhoto} />
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignSelf: 'flex-start', width: '100%', }}>
                        <Text style={{ fontSize: 12, fontWeight: "600" }}>barb</Text>
                        <Text style={styles.notificationTime}>4g</Text>
                    </View>
                    <View style={{ whiteSpace: 'pre' }}>
                        <Text style={{ whiteSpace: 'pre' }}>
                            3 🔥 poses 📸

                            Rate this Look😎
                            •
                            Save it and share with your friends❤️
                            •
                            •
                            •
                            <Text style={{ color: '#054ab0' }}>#poses #fashion #reelsinstagram #fashionblogger #reelsviral #viralreels #pose #attitude #reelsvideo</Text>
                        </Text>
                    </View>
                </View>
            </View>


            <View style={styles.commentSection}>

                <FlatList data={comments} renderItem={({ item }) => (
                    <View style={styles.comment}>
                        <View style={{ paddingRight: 10, paddingTop: 10, paddingLeft: 2, alignSelf: 'flex-start' }}>
                            <Image source={fanImages.profilePhotos[item.commentId]} style={styles.profilePhoto} />
                        </View>
                        <View style={styles.commentRightPart}>
                            <View style={{ flexDirection: "row", alignSelf: 'flex-start', width: '100%', }}>
                                <Text style={{ fontSize: 12, fontWeight: "600" }}>{item.title}</Text>
                                <Text style={styles.notificationTime}>{item.timePassed}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', }}>
                                <Text style={styles.commentText}>{item.body}</Text>
                                <View style={styles.like}>
                                    {
                                        comments[item.commentId].liked ? <AntDesign style={{}} name="heart" size={17} color="red" onPress={() => likeEvent(comments[item.commentId])} /> :
                                            <AntDesign style={{}} name="hearto" size={17} color="grey" onPress={() => likeEvent(comments[item.commentId])} />
                                    }

                                    <Text style={styles.likeCount}>{item.likes}</Text>
                                </View>
                            </View>
                            <Text style={styles.answer}>Yanıtla</Text>
                        </View>
                    </View>
                )} />

            </View>

            <View style={styles.writeComment}>
                {/* <Image source={FriendsProfileData[0].profileImage} /> */}
                <Image source={require('../storage/images/userProfile.png')} style={{ ...styles.profilePhoto, alignSelf: "center", justifyContent: "center" }} />
                {/* <Text styles={{ ...styles.commentInput, width: "50%", }}>Yorum ekle...</Text>
                <Text style={{ color: "blue", width: "100%", }}>Paylaş</Text> */}
                <View
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                        paddingVertical: 5,
                        paddingLeft: 10,
                        position: 'relative',
                        flexDirection: "row"
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
                    <TextInput
                        placeholder="Yorum ekleyin..."
                        placeholderTextColor="#909090"
                        style={{
                            width: '89%',
                            height: "53%",
                            backgroundColor: '#EBEBEB',
                            borderRadius: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 14,
                            padding: 4,
                            paddingLeft: 15,
                        }}
                    >

                        <Feather name="at-sign" size={24} color="black" style={{ alignSelf: "center", justifyContent: "center", paddingLeft: 100 }} />
                        <MaterialIcons name="emoji-emotions" size={24} color="black" style={{ alignSelf: "center", justifyContent: "center", paddingLeft: 100 }} />

                    </TextInput>
                </View>
            </View>
        </View>
    );
}

const likeEvent = (comment, rerender) => {
    const currentLikes = comment.likes;
    let newLikes = 0;
    comment.liked ? newLikes = currentLikes - 1 : newLikes = currentLikes + 1;
    comment.likes = newLikes;
    comment.liked = !comment.liked;
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    postInfo: {
        width: '100%',
        paddingTop: 5,
        paddingLeft: 15,
        flexDirection: "row",
        borderColor: 'rgba(158, 150, 150, .4)',
        paddingBottom: 7,
        borderBottomWidth: .3,
    },
    notificationTime: {
        color: "rgba(15, 15, 15, .6)",
        fontSize: 12,
        fontWeight: '600',
        paddingLeft: 7,
    },
    commentSection: {
        paddingTop: 10,
        paddingLeft: 15,
        height: '100%',
        flex: 1,
    },
    commentInput: {
        // flex: 1,
        // width: "50%",
        paddingLeft: 10,
    },
    comment: {
        flexDirection: 'row',
        paddingBottom: 25,
    },
    commentRightPart: {

    },
    commentText: {
        paddingTop: 5,
        fontSize: 13,
        justifyContent: 'flex-start',
        width: "50%"
    },
    like: {
        paddingTop: 3,
        fontSize: 11,
        justifyContent: 'center',

        width: "100%"
    },
    likeCount: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    answer: {
        color: "rgba(70, 70, 70, .8)",
        fontSize: 13,
        fontWeight: '600',
        paddingTop: 0,
    },
    writeComment: {
        // flex: 1,
        flexDirection: "row",
        height: 100,
        width: "100%",
        backgroundColor: "white",
        paddingHorizontal: 15,
        borderColor: 'rgba(158, 150, 150, 0.5)',
        paddingTop: 7,
        borderTopWidth: .3,

    },
    categories: {
        flexDirection: "row",
    },
    profilePhoto: {
        paddingLeft: 15,
        borderRadius: 50,
        width: 40,
        height: 40,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 10,
    },
    profilephoto: {
        borderRadius: 50,
        width: 40,
        height: 40,
    },
    photo: {
        width: '100%',
        height: 500,
    },
    username: {
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 10,
        // justifyContent: 'center',
    },
    titleText: {
        fontFamily: "Billabong",
        fontSize: 35,
        color: '#333',
    },
});