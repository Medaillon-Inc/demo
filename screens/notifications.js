import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { notificationData } from '../styles/global';
import PostCard from '../shared/postCard';

export default function Notifications({ navigation, route }) {
    const [notifications, setNitfication] = useState([
        { name: 'Ali Türker', address: 'altrkr06', info: ' mesajını beğendi.', date: 'Bu Hafta', time: '5g', number: 1, body: 'lorem ipsum', key: '1' },
        { name: 'Louis Vitton', address: 'louisvitton', info: ' gönderini beğendi.', date: 'Bu Hafta', time: '2g', number: 2, body: 'lorem ipsum', key: '2' },
        // { name: 'Gizem Yılmaz', address: 'gzemyilmaz', info: ' gönderini beğendi.', date: 'Bu Hafta', time: '2g', number: 2, body: 'lorem ipsum', key: '2' },
        { name: 'Mete', address: 'motun', info: ' sana mesaj attı.', date: 'Bugün', time: 'az önce', number: 3, body: 'lorem ipsum', key: '3' },
        { name: 'Gucci', address: 'gucci', info: ' 4 yeni fotoğraf paylaştı.', date: 'Bugün', time: '21s', number: 4, body: 'lorem ipsum', key: '4' },
        { name: 'Gizem Yılmaz', address: 'gzmyilmaz', number: 5, info: ' yeni fotoğraf paylaştı.', date: 'Bugün', time: '15g', body: 'lorem ipsum', key: '5' },
    ]);

    return (
        <View style={styles.notifications}>
            <Text style={styles.notificationGroupHeader}>Bugün</Text>
            <FlatList data={notifications} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                    <PostCard>
                        <View style={styles.cardHeader}>
                            <Image source={notificationData.profilePhotos[item.number]} style={styles.profilephoto} />
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', paddingHorizontal: 1 }}>
                                <View style={{ borderRadius: 10, backgroundColor: ' rgba(230, 88, 41, 1)', }}>
                                    <Text style={styles.notificationTime}> {item.time} </Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.username}>{item.name}</Text>
                                <Text>{item.info}</Text>
                            </View>
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
        fontStyle: "rgba(f,f,f,.9)",
        color: 'white',
        // paddingHorizontal: 3,
        paddingBottom: 2,
        alignItems: 'center'
        // fontSize: 11,
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
        // justifyContent: 'center',
    },
});