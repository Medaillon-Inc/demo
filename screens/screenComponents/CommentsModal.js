import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, PanResponder, Animated, Modal, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const modalHeight = '70%';

const CommentsModal = ({ comments, isVisible, toggleModal }) => {
    const [pan] = useState(new Animated.ValueXY());
    const commentsCount = comments.length;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dy: pan.y }], { useNativeDriver: false }),
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dy > 100) {
                closeModal();
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    const closeModal = () => {
        Animated.timing(pan, {
            toValue: { x: 0, y: modalHeight },
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const renderComment = ({ item }) => (
        <View style={styles.comment}>
            <View style={styles.commentHeader}>
                <Image source={{ uri: item.user.profile_picture }} style={styles.profilePicture} />
                <Text style={styles.commentUsername}>{item.user.username}</Text>
                <Text style={styles.commentText}>{item.text}</Text>
            </View>
            <View style={styles.commentInfo}>
                <TouchableOpacity onPress={() => item.likeComment(item.id)}>
                    <AntDesign
                        name={item.liked ? 'heart' : 'hearto'}
                        size={18}
                        color={item.liked ? 'red' : 'black'}
                    />
                </TouchableOpacity>
                <Text style={styles.commentLikes}>{item.likes}</Text>
                <TouchableOpacity onPress={() => item.toggleReplies(item.id)}>
                    <Text style={styles.showReplies}>{item.replyCount} yanıt görüntüleyin</Text>
                </TouchableOpacity>
            </View>
            {item.showReplies &&
                item.replies.map((reply) => (
                    <View key={reply.id} style={styles.reply}>
                        <View style={styles.commentHeader}>
                            <Image source={{ uri: reply.user.profile_picture }} style={styles.profilePicture} />
                            <Text style={styles.replyUsername}>{reply.user.username}</Text>
                            <Text style={styles.replyText}>{reply.text}</Text>
                        </View>
                        <View style={styles.replyInfo}>
                            <TouchableOpacity onPress={() => reply.likeReply(reply.id)}>
                                <AntDesign
                                    name={reply.liked ? 'heart' : 'hearto'}
                                    size={18}
                                    color={reply.liked ? 'red' : 'black'}
                                />
                            </TouchableOpacity>
                            <Text style={styles.replyLikes}>{reply.likes}</Text>
                        </View>
                    </View>
                ))}
        </View>
    );

    return (
        <Modal isVisible={isVisible} style={styles.modalContainer}>
            <ScrollView
                style={styles.modal}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>{commentsCount} yorum</Text>
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Text style={styles.closeText}>×</Text>
                    </TouchableOpacity>
                </View>
                {comments.map((comment, index) => renderComment({ item: comment, index }))}
            </ScrollView>
        </Modal>
    );

};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: modalHeight,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    totalComments: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        padding: 5,
    },
    commentsList: {
        paddingBottom: 10,
    },
    comment: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    commentUsername: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    commentText: {
        flex: 1,
        flexWrap: 'wrap',
    },
    commentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    commentLikes: {
        marginLeft: 5,
        marginRight: 10,
    },
    showReplies: {
        color: 'gray',
    },
    reply: {
        flexDirection: 'column',
        marginLeft: 30,
        marginTop: 10,
    },
    replyUsername: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    replyText: {
        flex: 1,
        flexWrap: 'wrap',
    },
    replyInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    replyLikes: {
        marginLeft: 5,
    },
});

export default CommentsModal;
