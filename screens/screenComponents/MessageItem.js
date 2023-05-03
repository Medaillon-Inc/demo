import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MessageItem = ({ item }) => {
    const containerStyle = item.isCurrentUser ? styles.containerRight : styles.containerLeft;

    return (
        <View style={[styles.container, containerStyle]}>
            {!item.isCurrentUser && <Image source={{ uri: item.avatar }} style={styles.avatar} />}
            <View style={styles.messageBubble}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    containerLeft: {
        justifyContent: 'flex-start',
    },
    containerRight: {
        justifyContent: 'flex-end',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
    },
    messageBubble: {
        flexDirection:"row",
        maxWidth: '70%',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 3,
        paddingBottom: 5,
        backgroundColor: '#EFEFEF',
    },
    messageText: {
        fontSize: 16,
    },
    timestamp: {
        fontSize: 12,
        color: 'gray',
        alignSelf: 'flex-end',
        paddingTop: 0,
        paddingLeft: 8
    },
});

export default MessageItem;
