import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const notifications = [
    {
        id: '1',
        username: 'john_doe',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        action: ' senin gönderini beğendi.',
        timestamp: '5m',
    },
    {
        id: '2',
        username: 'jane_doe',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        action: ' seni takip etmeye başladı.',
        timestamp: '15m',
    },
    {
        id: '3',
        username: 'michael_smith',
        avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
        action: ' gönderine yorum yaptı: "Harika fotoğraf!"',
        timestamp: '1h',
    },
    {
        id: '4',
        username: 'emily_jones',
        avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
        action: ' gönderini beğendi.',
        timestamp: '2h',
    },
    {
        id: '5',
        username: 'william_johnson',
        avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
        action: ' seni takip etmeye başladı.',
        timestamp: '3h',
    },
];


const NotificationItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.text}>
                    <Text style={styles.username}>{item.username}</Text>
                    {item.action}
                </Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
        </TouchableOpacity>
    );
};

const NotificationsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={({ item }) => <NotificationItem item={item} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
    username: {
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 12,
        color: 'gray',
        alignSelf: 'flex-end',
        marginTop: 5,
    },
});

export default NotificationsScreen;
