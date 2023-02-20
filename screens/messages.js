import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Messages({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Messages Screen</Text>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}




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
