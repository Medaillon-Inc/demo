import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Message = ({ text, username, avatar, createdAt, isCurrentUser }) => {
    const containerStyle = isCurrentUser ? styles.containerRight : styles.containerLeft;
    const messageContainerStyle = isCurrentUser
        ? styles.messageContainerRight
        : styles.messageContainerLeft;
    const messageTextStyle = isCurrentUser ? styles.messageTextRight : styles.messageTextLeft;

    return (
        <View style={[styles.container, containerStyle]}>
            {!isCurrentUser && <Image source={{ uri: avatar }} style={styles.avatar} />}
            <View style={[styles.messageContainer, messageContainerStyle]}>
                {!isCurrentUser && <Text style={styles.username}>{username}</Text>}
                <Text style={[styles.messageText, messageTextStyle]}>{text}</Text>
                <Text style={styles.timestamp}>{createdAt}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    messageContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#EFEFEF',
        borderRadius: 20,
    },
    messageText: {
        fontSize: 16,
    },
});

export default Message;
