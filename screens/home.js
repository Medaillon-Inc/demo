
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Messages from './messages';
import PostCard from '../shared/postCard';

export default function Home({ route }) {
    const [reviews, setReviews] = useState([
        { title: 'Merve Taşkın', number: 1, body: 'lorem ipsum', key: '1' },
        { title: 'Bella Thorne', number: 2, body: 'lorem ipsum', key: '2' },
        { title: 'gigihadid', number: 3, body: 'lorem ipsum', key: '4' },
        { title: 'adrianalima', number: 4, body: 'lorem ipsum', key: '3' },
        { title: 'barabarapalvin', number: 5, body: 'lorem ipsum', key: '5' },
    ]);

    return (
        <View style={styles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => route.params.navigation.navigate('Messages')}>
                    <PostCard>
                        <View style={styles.cardHeader}>
                            <Image source={images.profilePhotos[item.number]} style={styles.profilephoto} />
                            <Text style={styles.username}>{item.title}</Text>
                        </View>
                        <View>
                            <Image source={images.photos[item.number]} style={styles.photo} />
                        </View>
                    </PostCard>
                </TouchableOpacity>
            )} />
            {/* <Text style={styles.titleText}>Welcome to Medaillon</Text>
            <Button
                title="Go to Messages"
                onPress={() => navigation.navigate('Messages')}
            /> */}
        </View>
    );
}

export const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
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
    },
    photo: {
        width: '100%',
        height: 500,
    },
    username: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        // justifyContent: 'center',
    },
    titleText: {
        fontFamily: "Billabong",
        fontSize: 35,
        color: '#333',
    },
});