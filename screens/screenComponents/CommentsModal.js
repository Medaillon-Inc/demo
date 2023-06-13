import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image, PanResponder, Animated, Modal, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import EmojiSelector, { Categories } from "react-native-emoji-selector";


const windowHeight = Dimensions.get('window').height;

const CommentsModal = ({ visible, closeModal }) => {
    // const modalHeight = useRef(new Animated.Value(0)).current;
    const modalHeight = useRef(new Animated.Value(windowHeight * 0.9)).current;
    const position = useRef(new Animated.Value(windowHeight)).current;

    const [commentInput, setCommentInput] = useState('');

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [inputText, setInputText] = useState('');

    const [shownReplies, setShownReplies] = useState({});

    const onEmojiSelected = (emoji) => {
        setInputText((prevText) => prevText + emoji);
    };

    const onSendButtonPress = (comment) => {
        console.log(comment)
    };

    const sendComment = () => {
        if (commentInput.trim()) {
            // Add the comment to the comments array
            setComments((prevComments) => [
                ...prevComments,
                {
                    id: Date.now().toString(),
                    user: {
                        username: 'your_username',
                        profile_picture: 'your_profile_picture',
                    },
                    text: commentInput,
                    likes: 0,
                    liked: false,
                    disLiked: false,
                    replyCount: 0,
                    showReplies: false,
                    timePassed: "Now",
                    replies: [],
                },
            ]);

            // Clear the input
            setCommentInput('');
        }
    };


    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    position.setValue(Math.min(windowHeight - windowHeight * 0.9 + gestureState.dy, windowHeight));
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 100) {
                    Animated.timing(position, {
                        toValue: windowHeight,
                        duration: 300,
                        useNativeDriver: false,
                    }).start(() => closeModal());
                } else {
                    Animated.timing(position, {
                        toValue: windowHeight - windowHeight * 0.9,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(modalHeight, {
                toValue: windowHeight * 0.9,
                duration: 300,
                useNativeDriver: false,
            }).start();
            Animated.timing(position, {
                toValue: windowHeight - windowHeight * 0.9,
                duration: 300,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(modalHeight, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
            Animated.timing(position, {
                toValue: windowHeight,
                duration: 300,
                useNativeDriver: false,
            }).start(() => closeModal());
        }
    }, [visible]);

    const [comments, setComments] = useState([
        {
            id: '1',
            user: {
                username: 'john_doe',
                profile_picture: 'https://i.pravatar.cc/150?img=1',
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac diam tortor. Integer sollicitudin, risus eget tristique hendrerit, arcu tellus vehicula lorem, eu elementum sapien sem et risus.',
            likes: 12,
            liked: false,
            disLikes: 1,
            disLiked: true,
            replyCount: 2,
            showReplies: false,
            replyClicks: 0,
            openedReplies: [],
            timePassed: "1d",
            replies: [
                {
                    id: '1-1',
                    // replyTo: "john_doe",
                    user: {
                        username: 'jane_doe',
                        profile_picture: 'https://i.pravatar.cc/150?img=2',
                    },
                    text: 'Nullam a orci sit amet nisl venenatis finibus a ut eros. Sed interdum, urna eget ullamcorper varius, metus mauris mattis velit, vel pellentesque leo odio eu metus.',
                    timePassed: "2h",
                    likes: 5,
                    liked: true,
                    disLikes: 2,
                    disLiked: false,
                },
                {
                    id: '1-1-1',
                    // replyTo: "jane_doe",
                    user: {
                        username: 'bob_smith',
                        profile_picture: 'https://i.pravatar.cc/150?img=3',
                    },
                    text: 'Cras vel sapien ac justo pharetra pretium. Sed vehicula, enim non fringilla fringilla, enim mauris commodo arcu, vitae pulvinar mauris sapien a purus.',
                    timePassed: "26m",
                    likes: 3,
                    liked: false,
                    disLikes: 9,
                    disLiked: false,
                },
            ],
        },
        {
            id: '2',
            user: {
                username: 'jane_doe',
                profile_picture: 'https://i.pravatar.cc/150?img=2',
            },
            text: 'Vivamus in mi euismod, sollicitudin lectus vitae, laoreet turpis. Sed eget nunc vel nisi pulvinar suscipit. Donec nec dolor augue. Etiam condimentum sapien arcu, in facilisis augue posuere sit amet. ',
            likes: 3,
            liked: false,
            disLikes: 10,
            disLiked: false,
            replyCount: 0,
            showReplies: false,
            replyClicks: 0,
            openedReplies: [],
            timePassed: "2s",
            replies: [],
        },
        {
            id: '3',
            user: {
                username: 'bob_smith',
                profile_picture: 'https://i.pravatar.cc/150?img=3',
            },
            text: 'Praesent euismod ipsum id laoreet finibus. Maecenas tristique risus ac dui pharetra, nec fermentum dolor molestie. Etiam varius dictum mauris, ac vehicula nisi varius non. ',
            likes: 5,
            liked: true,
            disLikes: 2,
            disLiked: false,
            replyCount: 1,
            showReplies: false,
            replyClicks: 0,
            openedReplies: [],
            timePassed: "2mo",
            replies: [
                {
                    id: '3-1',
                    // replyTo: "bob_smith",
                    user: {
                        username: 'john_doe',
                        profile_picture: 'https://i.pravatar.cc/150?img=1',
                    },
                    text: 'Aliquam eu nunc quis quam consectetur blandit eu a ante. Donec non malesuada purus. Aenean vehicula lacinia velit, quis venenatis metus maximus id.',
                    timePassed: "1w",
                    likes: 2,
                    liked: false,
                    disLikes: 2,
                    disLiked: false,
                },
            ],
        },
    ]);

    const toggleReplies = (id) => {
        setComments((prevComments) => {
            return prevComments.map((comment) => {
                if (comment.id === id) {
                    // Toggle 'showReplies' for the matching comment
                    return { ...comment, showReplies: !comment.showReplies };
                } else {
                    // Leave all other comments unchanged
                    return comment;
                }
            });
        });
    };

    const onLikePress = (commentId) => {
        setComments((prevComments) => {
            return prevComments.map((comment) => {
                if (comment.id === commentId) {
                    if (comment.liked) {
                        return { ...comment, likes: comment.likes - 1, liked: false };
                    } else if (!comment.liked) {
                        if (comment.disLiked) {
                            return { ...comment, likes: comment.likes + 1, liked: true, disLikes: comment.disLikes - 1, disLiked: false };
                        } else if (!comment.disLiked) {
                            return { ...comment, likes: comment.likes + 1, liked: true };
                        }
                    }
                } else {
                    // Here we also check the replies of the comment
                    if (comment.replies) {
                        comment.replies = comment.replies.map((reply) => {
                            if (reply.id === commentId) {
                                if (reply.liked) {
                                    return { ...reply, likes: reply.likes - 1, liked: false };
                                } else if (!reply.liked) {
                                    if (reply.disLiked) {
                                        return { ...reply, likes: reply.likes + 1, liked: true, disLikes: reply.disLikes - 1, disLiked: false };
                                    } else if (!reply.disLiked) {
                                        return { ...reply, likes: reply.likes + 1, liked: true };
                                    }
                                }
                            }
                            return reply;
                        });
                    }
                    return comment;
                }
            });
        });
    };

    const dislikeComment = (id) => {
        setComments((prevComments) => {
            return prevComments.map((comment) => {
                if (comment.id === id) {
                    if (comment.disLiked) {
                        return { ...comment, disLikes: comment.disLikes - 1, disLiked: false, };
                    } else {
                        if (comment.liked) {
                            return { ...comment, disLikes: comment.disLikes + 1, disLiked: true, likes: comment.likes - 1, liked: false, };
                        } else {
                            return { ...comment, disLikes: comment.disLikes + 1, disLiked: true };
                        }
                    }
                } else {
                    // Here we also check the replies of the comment
                    if (comment.replies) {
                        comment.replies = comment.replies.map((reply) => {
                            if (reply.id === id) {
                                if (reply.disLiked) {
                                    return { ...reply, disLikes: reply.disLikes - 1, disLiked: false, };
                                } else {
                                    if (reply.liked) {
                                        return { ...reply, disLikes: reply.disLikes + 1, disLiked: true, likes: reply.likes - 1, liked: false };
                                    } else {
                                        return { ...reply, disLikes: reply.disLikes + 1, disLiked: true };
                                    }
                                }
                            }
                            return reply;
                        });
                    }
                    return comment;
                }
            });
        });
    };

    const renderReplies = (replies, showReplies) => {
        if (!showReplies || !replies) return null;

        return replies.map((reply, index) => {
            const displayCount = Math.min(10, replies.length);
            if (index < displayCount) {
                return (
                    <View style={styles.replyComment}>
                        <View style={styles.profilePhoto}>
                            <Image source={{ uri: reply.user.profile_picture }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                        </View>
                        <View style={styles.replyCommentInfo}>
                            <Text style={styles.commentUsername}>{reply.user.username}</Text>
                            <Text style={styles.commentText}>{reply.text}</Text>
                            <View style={styles.commentUtilityButtons}>
                                <View style={{ flexDirection: "row", flex: 1, }}>
                                    <Text style={{ flexDirection: "column", color: "gray", fontSize: 12, paddingEnd: 10 }}>{reply.timePassed}</Text>
                                    <TouchableOpacity style={{ flexDirection: "column", flex: 1 }}>
                                        <View style={{ flexDirection: "column", flex: 1 }}>
                                            <Text style={styles.repliesText}>Answer</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginEnd: 20 }}>
                                        <TouchableOpacity
                                            style={{ marginEnd: 5 }}
                                            onPress={() => onLikePress(reply.id)}
                                        >
                                            <AntDesign
                                                name={reply.liked ? "heart" : "hearto"}
                                                size={18}
                                                color={reply.liked ? "black" : "black"}
                                            />
                                        </TouchableOpacity>
                                        <Text>{reply.likes}</Text>
                                    </View>
                                    <TouchableOpacity style={{ flexDirection: "column", justifyContent: "flex-end" }}
                                        onPress={() => dislikeComment(reply.id)}>
                                        <AntDesign name={reply.disLiked ? "dislike1" : "dislike2"} size={18} color={reply.disLiked ? "black" : "black"} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 12 }}>
                                    <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end" }}>
                                        <TouchableOpacity style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end", }}
                                            onPress={() => toggleReplies(reply.id.split("-")[0])}>
                                            <Text style={styles.repliesText}>Hide replies</Text>
                                            <MaterialIcons name="arrow-drop-up" size={24} color="black"
                                                style={{ flexDirection: "column", justifyContent: "center" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
                // return <Text key={reply.id} style={styles.reply}>{reply.text}</Text>;
            } else if (index === displayCount) {
                return (
                    <TouchableOpacity style={{}} key={reply.id} onPress={() => loadMoreReplies(reply.id)}>
                        <Text style={styles.moreReplies}>Load more replies...</Text>
                    </TouchableOpacity>
                )
            } else {
                return null;
            }
        });
    };

    const renderComment = ({ item }) => {
        return (
            <View style={styles.comment}>
                <View style={styles.profilePhoto}>
                    <Image source={{ uri: item.user.profile_picture }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                </View>
                <View style={styles.commentInfo}>
                    <Text style={styles.commentUsername}>{item.user.username}</Text>
                    <Text style={styles.commentText}>{item.text}</Text>
                    <View style={styles.commentUtilityButtons}>
                        <View style={{ flexDirection: "row", flex: 1, marginBottom: 10, marginTop: 5 }}>
                            <Text style={{ flexDirection: "column", color: "gray", fontSize: 12, paddingEnd: 10 }}>{item.timePassed}</Text>
                            <TouchableOpacity style={{ flexDirection: "column", flex: 1 }}>
                                <View style={{ flexDirection: "column", flex: 1 }}>
                                    <Text style={styles.repliesText}>Answer</Text>
                                    {/* <MaterialIcons name="arrow-drop-down" size={24} color="black" /> */}
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginEnd: 20 }}>
                                <TouchableOpacity
                                    style={{ marginEnd: 5 }}
                                    onPress={() => onLikePress(item.id)}
                                >
                                    <AntDesign
                                        name={item.liked ? "heart" : "hearto"}
                                        size={18}
                                        color={item.liked ? "black" : "black"}
                                    />
                                </TouchableOpacity>
                                <Text>{item.likes}</Text>
                            </View>
                            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "flex-end" }} onPress={() => dislikeComment(item.id)}>
                                <AntDesign name={item.disLiked ? "dislike1" : "dislike2"} size={18} color={item.disLiked ? "black" : "black"} />
                            </TouchableOpacity>

                        </View>
                        {item.replies.length > 0 && !item.showReplies && (
                            <View style={{ flexDirection: "column", flex: 1 }}>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => toggleReplies(item.id)}>
                                        <Text style={styles.repliesText}>Show {item.replies.length} replies</Text>
                                        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        {renderReplies(item.replies, item.showReplies)}
                    </View>
                </View>
            </View >
        );
    };

    return (
        <>
            {visible && (
                <View style={styles.modalWrapper}>
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={{ ...StyleSheet.absoluteFillObject }} />
                    </TouchableWithoutFeedback>
                    <Animated.View style={[styles.modal, { top: position, height: modalHeight }]}>
                        <View {...panResponder.panHandlers} style={styles.draggableArea}>
                            <Text></Text>
                            <Text style={{ fontWeight: "600", fontSize: 14 }}>{comments.length} comments</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <MaterialIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalContent}>
                            <FlatList
                                data={comments.slice().reverse()}
                                renderItem={renderComment}
                                keyExtractor={(item) => item.id}
                                style={{}}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputs}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Write a comment..."
                                    value={commentInput}
                                    onChangeText={setCommentInput}
                                    multiline={true}
                                />
                                <TouchableOpacity onPress={() => setShowEmojiPicker(!showEmojiPicker)} style={styles.iconButton}>
                                    <MaterialIcons name="insert-emoticon" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={sendComment} style={styles.iconButton}>
                                    <MaterialIcons name="send" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            {showEmojiPicker && (
                                <EmojiSelector
                                    category={Categories.symbols}
                                    style={styles.emojiPicker}
                                    onEmojiSelected={onEmojiSelected}
                                    showSearchBar={false}
                                    showSectionTitles={false}
                                    showTabs={true}
                                    showHistory={true}
                                />
                            )}
                        </View>
                    </Animated.View>
                </View>
            )}
        </>
    );

};

const styles = StyleSheet.create({
    modalWrapper: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
    },
    modal: {
        flexDirection: "column",
        flex: 1,
        height: windowHeight * 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    draggableArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },
    modalContent: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 210
    },
    replyComment: {
        marginTop: 0,
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        // justifyContent: "flex-start"
    },
    comment: {
        marginTop: 15,
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        // justifyContent: "flex-start"
    },
    profilePhoto: {
        flexDirection: "column",
        paddingTop: 5,
    },
    commentInfo: {
        flexDirection: "column",
        flex: 1,
        paddingHorizontal: 10
    },
    replyCommentInfo: {
        flexDirection: "column",
        flex: 1,
        paddingHorizontal: 10
    },
    commentUsername: {
        fontWeight: '500',
        fontSize: 13
    },
    commentText: {
        paddingTop: 4,
        fontSize: 12,
        fontFamily: 'sans-serif'
    },
    repliesText: {
        fontSize: 12,
        color: "rgb(50,50,50)",
    },
    inputContainer: {
        // flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: "absolute",
        bottom: 127,
        paddingHorizontal: 10,
        // paddingBottom: 10,
        zIndex: 2,
        width: '100%',
        height: '10%',
        backgroundColor: "white",
    },
    inputs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flex: 1,
        backgroundColor: "white",
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        minHeight: 40,
        backgroundColor: "white"
    },
    iconButton: {
        marginLeft: 5,
    },
    emojiPicker: {
        flexDirection: "row",
        flex: 1,
        width: '100%',
        height: '30%',
        backgroundColor: '#ffffff',
    },
    sendButton: {
        backgroundColor: '#00a4db',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
});


export default CommentsModal;