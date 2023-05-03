import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import EmojiSelector from 'react-native-emoji-selector';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


// const ChatInput = ({ onSend }) => {
//     const [message, setMessage] = useState('');

//     const handleSend = () => {
//         if (message.trim().length > 0) {
//             onSend([{ _id: Math.random().toString(), text: message, createdAt: new Date() }]);
//             setMessage('');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 value={message}
//                 onChangeText={setMessage}
//                 placeholder="Mesajınızı yazın..."
//             />
//             <TouchableOpacity onPress={handleSend}>
//                 <Ionicons name="send" size={24} color="#006AFF" />
//             </TouchableOpacity>
//         </View>
//     );
// };

const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    // const handleSend = () => {
    //     if (message.trim().length > 0) {
    //         onSend(message.trim());
    //         setMessage('');
    //     }
    // };

    const handleSend = () => {
        if (message.trim().length > 0) {
            onSend([{ _id: Math.random().toString(), text: message, createdAt: new Date() }]);
            setMessage('');
        }
    };

    const onEmojiSelected = (emoji) => {
        setMessage((prevMessage) => prevMessage + emoji);
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    // return (
    //     <View style={styles.container}>
    //         <TouchableOpacity onPress={toggleEmojiPicker} style={styles.emojiButton}>
    //             {/* Render the emoji button icon here */}
    //         </TouchableOpacity>
    //         <TextInput
    //             style={styles.input}
    //             value={message}
    //             onChangeText={setMessage}
    //             placeholder="Type a message"
    //             multiline
    //         />
    //         <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
    //             {/* Render the send button icon here */}
    //         </TouchableOpacity>
    //         {showEmojiPicker && (
    //             <EmojiSelector onEmojiSelected={onEmojiSelected} showSearchBar={false} showTabs={false} />
    //         )}
    //     </View>
    // );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleEmojiPicker} style={styles.emojiButton}>
                <Icon name="smile-o" size={24} color="#3897F0" />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message"
                multiline
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                <Icon name="send" size={16} color="#fff" />
            </TouchableOpacity>
            {showEmojiPicker && (
                <EmojiSelector onEmojiSelected={onEmojiSelected} showSearchBar={false} showTabs={false} />
            )}
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         borderTopWidth: 1,
//         borderTopColor: '#E0E0E0',
//     },
//     input: {
//         flex: 1,
//         fontSize: 16,
//         marginRight: 10,
//     },
// });

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    emojiButton: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 10,
    },
    sendButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#3897F0',
    },
});



export default ChatInput;
