import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { notificationData } from '../styles/global';
import PostCard from '../shared/postCard';

export default function Notifications({ navigation, route }) {
    const [notifications, setNitfication] = useState([
        { name: 'Victoria\'s secret', address: 'victoriassecret', info: ' 23 yeni fotoğraf paylaştı.', date: 'Bugün', time: '21s', number: 1, body: 'lorem ipsum', key: '1' },
        { name: 'Aslı Ateş', address: 'asliates', info: ' mesajını beğendi.', date: 'Bu Hafta', time: '5g', number: 2, body: 'lorem ipsum', key: '2' },
        { name: 'Jen Selter', address: 'jenselter', info: ' sana mesaj attı.', date: 'Bugün', time: 'az önce', number: 3, body: 'lorem ipsum', key: '3' },
        { name: 'Olya Abramovich', address: 'olyaabramovich', info: ' gönderini beğendi.', date: 'Bu Hafta', time: '2g önce', number: 4, body: 'lorem ipsum', key: '4' },
        { name: 'Özge Bitmez', address: 'ozgebitmez', number: 5, info: ' senden bahsetti.', date: 'Bugün', time: '21s', body: 'lorem ipsum', key: '5' },
        { name: 'Tammy Hembrow', address: 'tammyhembrow', number: 6, info: ' yeni fotoğraf paylaştı.', date: 'Bugün', time: '15g', body: 'lorem ipsum', key: '6' },
    ]);

    return (
        <View style={styles.notifications}>
            <Text style={styles.notificationGroupHeader}>Bugün</Text>
            <FlatList data={notifications} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                    <PostCard>
                        <View style={styles.cardHeader}>
                            <Image source={notificationData.profilePhotos[item.number]} style={styles.profilephoto} />
                            {item.name == 'Victoria\'s secret' ? <Text><Text style={styles.username}>{item.name}</Text> 23 yeni fotoğraf paylaştı. <Text style={styles.notificationTime}>{item.time}</Text></Text> :
                                <Text><Text style={styles.username}>{item.name}</Text>{item.info}<Text style={styles.notificationTime}>{item.time}</Text></Text>}
                        </View>
                    </PostCard>
                </TouchableOpacity>
            )} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    notifications: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    notificationGroup: {

    },
    notificationTime: {
        fontWeight: 'normal',
        fontStyle: "rgba(f,f,f,.9)"
    },
    notificationGroupHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 15,
        paddingVertical: 5,
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
        marginRight: 10,
    },
    username: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
        // justifyContent: 'center',
    },
});