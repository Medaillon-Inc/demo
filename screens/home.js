import React, { useState } from 'react';
import { FlatList, Image, View, Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, SafeAreaView, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeBaseConfigProvider } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { challenges, logos } from '../styles/global';
import PortfolioImageTag from './screenComponents/PortfolioImageTag';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Home() {

    let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const [challengeDatas, setChallenges] = useState([
        { title: 'High Fashion', number: 1, body: 'lorem ipsum', key: '1' },
        { title: 'Cosplay', number: 2, body: 'lorem ipsum', key: '2' },
        { title: 'Casual', number: 3, body: 'lorem ipsum', key: '3' },
        { title: 'Sport', number: 4, body: 'lorem ipsum', key: '4' },
        { title: 'Country', number: 5, body: 'lorem ipsum', key: '5' },
        { title: 'Fit', number: 6, body: 'lorem ipsum', key: '6' },
        { title: 'Natural', number: 7, body: 'lorem ipsum', key: '7' },
        { title: 'Date', number: 8, body: 'lorem ipsum', key: '8' },
        { title: 'Dye Hair', number: 9, body: 'lorem ipsum', key: '9' },
        { title: 'Tattoo', number: 10, body: 'lorem ipsum', key: '10' },
    ]);
    const exploreImages = [
        {
            "id": 0,
            "tag": "#cosplay",
            "image": require('../storage/images/kratos.png'),
        },
        {
            "id": 1,
            "icon": logos['medaillon_logo - big - app'],
            "tag": "HighFashion",
            "image": require('../storage/images/hadid1.jpg'),
        },
        {
            "id": 2,
            "tag": "#date",
            "image": require('../storage/images/palvin3.png'),
        },
        {
            "id": 3,
            "tag": "#casual",
            "image": require('../storage/images/hadid2.jpg'),
        },
        {
            "id": 4,
            "image": require('../storage/images/bananarepublic7.jpg'),
        },
        {
            "id": 5,
            "tag": "#cosplay",
            "image": require('../storage/images/scarletwitch.jpg'),
        },
        {
            "id": 6,
            "tag": "#natural",
            "image": require('../storage/images/jenner1.jpg'),
        },
        {
            "id": 7,
            "image": require('../storage/images/bananarepublic1.jpg'),
        },
        {
            "id": 8,
            "image": require('../storage/images/barbarapalvin.png'),
        },
        {
            "id": 9,
            "image": require('../storage/images/hadid3.jpg'),
        },
        {
            "id": 10,
            "image": require('../storage/images/bananarepublic8.jpg'),
        },
        {
            "id": 11,
            "tag": "#formal",
            "image": require('../storage/images/bananarepublic2.jpg'),
        },
        {
            "id": 12,
            "tag": "Sponsored",
            "image": require('../storage/images/palvin1.jpg'),
        },
        {
            "id": 13,
            "icon": logos['medaillon_logo - big - app'],
            "tag": "HighFashion",
            "image": require('../storage/images/lima3.jpg'),
        },
        {
            "id": 14,
            "tag": "#country",
            "image": require('../storage/images/bananarepublic5.jpg'),
        },
        // {
        //     "image": require('../storage/images/bananarepublic9.jpg'),
        // },
    ];

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='white' barStyle="dark-content" />
            <ScrollView horizontal={false}>
                <View style={{ flexDirection: 'row', position: "relative", }}>
                    {/* <ScrollView horizontal={true} style={{ paddingVertical: 15, paddingHorizontal: 10, backgroundColor: "#141414", }}> */}
                    <ScrollView horizontal={true} style={{ paddingVertical: 15, paddingHorizontal: 10, }}>
                        {/* {mRight = item.key == 10 ? 5 : 12} */}
                        {challengeDatas.map(item => (
                            <View key={item.key} style={{ alignItems: "center", marginRight: item.key == 10 ? 0 : 12, marginLeft: 5, paddingBottom: 0, }}>
                                <LinearGradient
                                    // colors={['#c71c41', '#c7308f', '#']}
                                    // colors={['#fc03ec', '#a103fc', '#2883fa']}
                                    colors={['#fc03ec', '#ff8501', '#2883fa']}
                                    locations={[0.1, 0.4, 1]}
                                    start={{ x: 1, y: 0.5 }}
                                    end={{ x: 0.2, y: 1 }}
                                    style={styles.storyCircle}>
                                    <Image source={challenges.challengePhotos[item.number]} style={styles.categoryPhoto} />

                                </LinearGradient>
                                {/* <Text style={{ fontSize: 13, fontWeight: "600", paddingTop: 5, color: 'rgba(255,255,255,0.7)' }}>{item.title}</Text> */}
                                <Text style={{ fontSize: 13, fontWeight: "500", paddingTop: 5, }}>{item.title}</Text>
                            </View>
                        ))}
                        <TouchableOpacity
                            style={{
                                marginBottom: 25,
                                marginTop: 5,
                                marginLeft: 20,
                                marginRight: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <AntDesign name="pluscircleo" style={{ fontSize: 40, opacity: 0.5, }} />
                        </TouchableOpacity>
                    </ScrollView>
                </View >
                <FlatList
                    // style={{ position: "absolute", top: 200, zIndex: 11 }}
                    horizontal={false}
                    numColumns={3}
                    data={exploreImages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Animatable.View
                            style={{ flex: 1, alignItems: 'center' }}
                            animation="zoomIn"
                            delay={item.id * 200}
                            useNativeDriver={true}
                        >
                            <Image
                                source={item.image}
                                style={{
                                    height: screenWidth / 2,
                                    width: screenWidth / 3,
                                }}
                            />
                            <PortfolioImageTag tag={item.tag} icon={item.icon} />
                        </Animatable.View>
                    }
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    categories: {
        flexDirection: "row",
    },
    storyCircle: {
        borderRadius: 50,
    },
    categoryPhoto: {
        borderRadius: 50,
        width: 65,

        height: 65,
        // marginLeft: 11,
        // borderWidth: 2.25,
        borderWidth: 3,
        // borderColor: '#ff8501',
        borderColor: 'white',
        margin: 3
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
    },
    photo: {
        width: '100%',
        height: 500,
    },
    username: {
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 10,
        // justifyContent: 'center',
    },
    titleText: {
        fontFamily: "Billabong",
        fontSize: 35,
        color: '#333',
    },
});