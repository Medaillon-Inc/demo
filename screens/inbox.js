import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text, View, Image, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';

const DATA = [
    {
        id: '1',
        username: 'user1',
        message: 'Merhaba! 🎉',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: '2',
        username: 'user2',
        message: 'Bugün nasılsın? 😊',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
        id: '3',
        username: 'user3',
        message: 'Fotoğrafçılıkla ilgili bir sorum olacak.',
        avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
];

const renderItem = ({ item, navigation }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Chat', { username: item.username })}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.messageContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.message}>{item.message}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
    </TouchableOpacity>
);

export default function Inbox({ navigation }) {
    NavigationBar.setBackgroundColorAsync("white");
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Inbox</Text>
                <Icon name="search" type="font-awesome" color="#000" containerStyle={styles.headerIcon} />
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => renderItem({ item, navigation })}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerIcon: {
        marginLeft: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    messageContainer: {
        flex: 1,
        marginLeft: 15,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
    },
});





// import React, { useState } from 'react';
// import { View } from 'react-native';
// import GiftedChat from 'react-native-gifted-chat';
// import { ChatManager, TokenProvider } from '@pusher/chatkit-client-react-native';

// const CHATKIT_INSTANCE_LOCATOR_ID = 'YOUR_INSTANCE_LOCATOR_ID';
// const CHATKIT_SECRET_KEY = 'YOUR_SECRET_KEY';
// const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'YOUR_TOKEN_PROVIDER_ENDPOINT';

// const ChatPage = () => {
//     const [messages, setMessages] = useState([]);
//     const [currentUser, setCurrentUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const chatManager = new ChatManager({
//             instanceLocator: CHATKIT_INSTANCE_LOCATOR_ID,
//             userId: 'YOUR_USER_ID',
//             tokenProvider: new TokenProvider({
//                 url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
//             }),
//         });

//         chatManager
//             .connect()
//             .then(currentUser => {
//                 setCurrentUser(currentUser);
//                 setIsLoading(false);
//                 return currentUser.subscribeToRoom({
//                     roomId: 'YOUR_ROOM_ID',
//                     messageLimit: 100,
//                     hooks: {
//                         onMessage: message => {
//                             setMessages(previousMessages => GiftedChat.append(previousMessages, message));
//                         },
//                     },
//                 });
//             })
//             .catch(err => {
//                 console.log('Error on connecting: ', err);
//             });

//         return function cleanup() {
//             currentUser.disconnect();
//         };
//     }, []);

//     const handleSend = messages => {
//         messages.forEach(message => {
//             currentUser.sendMessage({
//                 text: message.text,
//                 roomId: 'YOUR_ROOM_ID',
//             });
//         });
//     };

//     if (isLoading) {
//         return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large" color="#0000ff" /></View>;
//     }

//     return (
//         <GiftedChat
//             messages={messages}
//             onSend={handleSend}
//             user={{
//                 _id: currentUser.id,
//             }}
//         />
//     );
// };

// export default ChatPage;
