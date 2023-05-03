import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ChatInput from './screenComponents/ChatInput';
import Message from './screenComponents/Message';
import MessageItem from './screenComponents/MessageItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    username: 'john_doe',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Merhaba! 🎉',
    timestamp: '5m',
  },
  {
    id: '2',
    username: 'jane_doe',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    text: 'Bugün nasılsın? 😊',
    timestamp: '15m',
  },
  {
    id: '3',
    username: 'michael_smith',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    text: 'Fotoğrafçılıkla ilgili bir sorum olacak.',
    timestamp: '1h',
  }
];


const Chat = ({ navigation, route }) => {
  const { username } = route.params;
  const [messages, setMessages] = useState(notifications);

  function handleSend(newMessages = []) {
    setMessages((previousMessages) => [...previousMessages, ...newMessages]);
  }

  return (
    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={messages}
    //     renderItem={({ item }) => (
    //       <Message
    //         text={item.text}
    //         username={item.username}
    //         avatar={item.avatar}
    //         createdAt={item.createdAt}
    //         isCurrentUser={item.isCurrentUser}
    //       />
    //     )}
    //     keyExtractor={(item) => item._id}
    //     inverted={true}
    //     contentContainerStyle={styles.listContent}
    //   />
    //   <ChatInput onSend={handleSend} />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageItem item={item} />}
        keyExtractor={(item) => item.id}
        inverted={true}
        contentContainerStyle={styles.listContent}
      />
      <ChatInput onSend={handleSend} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 10,
  },
  containerRight: {
    flexDirection: 'row-reverse',
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
    maxWidth: '70%',
    borderRadius: 20,
    marginBottom: 10,
  },
  messageContainerLeft: {
    backgroundColor: '#EFEFEF',
  },
  messageContainerRight: {
    backgroundColor: '#006AFF',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  messageText: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  messageTextLeft: {
    color: '#000',
  },
  messageTextRight: {
    color: '#fff',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
});
export default Chat;
