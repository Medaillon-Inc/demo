import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { ProfileBody, ProfileButtons } from './screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from './screenComponents/BottomTabView';
import { db, firebase } from '../firebase'


const statusBarStyle = "white"

const Profile = () => {
    let circuls = [];
    let numberofcircels = 10;
    const usernameFound = false

    for (let index = 0; index < numberofcircels; index++) {
        circuls.push(
            <View key={index}>
                {index === 0 ? (
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            borderWidth: 1,
                            opacity: 0.7,
                            marginHorizontal: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
                    </View>
                ) : (
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            backgroundColor: 'black',
                            opacity: 0.1,
                            marginHorizontal: 5,
                        }}></View>
                )}
            </View>,
        );
    }

    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = db
            .collection('users')
            .where('owner_uid', '==', user.uid)
            .limit(1)
            .onSnapshot(
                snapshot => snapshot.docs.map(doc => {
                    setCurrentLoggedInUser({
                        username: doc.data().username,
                        profilePicture: doc.data().profile_picture,
                    });
                })
            );
        return unsubscribe
    }

    useEffect(() => {
        getUsername()
    }, [])



    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={statusBarStyle} barStyle="dark-content" />
            <View style={{ width: '100%', padding: 8 }}>
                <ProfileBody
                    name="Haute Le Mode"
                    accountName="Haute Le Mode"
                    // profileImage={require('../storage/images/userProfile.png')}
                    // profileImage="https://randomuser.me/api/portraits/men/54.jpg"
                    profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2M-HByW1r0fiqOMYAfsgFy0WkEJodTBQMrPmWOe_di58YHr5Ami8cYWteDN1sUf3M9o&usqp=CAU"
                    followers="3.6M"
                    following="35"
                    post="458"
                />
                <ProfileButtons
                    id={0}
                    name="Haute Le Mode"
                    accountName="Haute Le Mode"
                    // profileImage={require('../storage/images/userProfile.png')}
                    profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2M-HByW1r0fiqOMYAfsgFy0WkEJodTBQMrPmWOe_di58YHr5Ami8cYWteDN1sUf3M9o&usqp=CAU"

                />
            </View>
            <View>
                {/* <Text style={{ color: 'black', fontSize: 22, fontWeight: "600" }}>asdads "https://randomuser.me/api/portraits/men/54.jpg"</Text> */}
                <Text
                    style={{
                        padding: 10,
                        letterSpacing: 1,
                        fontSize: 14,
                    }}>
                    Story Highlights
                </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                    }}>
                    {circuls}
                </ScrollView>
            </View>
            <BottomTabView />
        </View>
    );
}

export default Profile;
