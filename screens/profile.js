// import React from 'react';
// import { StyleSheet, View, Button, Text, Image } from 'react-native';
// import { globalStyles } from '../styles/global';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import { photoStrings } from '../assets/strings/photos/photo64BaseStrings';

// export default function Profile({ navigation, route }) {
//     return (
//         <View style={styles.body}>
//             <View style={styles.infoSection}>
//                 <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
//                     <View styles={styles.photoAndName}>
//                         <Image
//                             style={styles.profilePhoto}
//                             source={{
//                                 uri: photoStrings.pp.photo
//                             }}
//                         />
//                     </View>
//                     <View style={styles.postStatistics}>
//                         <Text style={styles.statisticsNumber}>4</Text>
//                         <Text>Gönderi</Text>
//                     </View>
//                     <View style={styles.followerStatistics}>
//                         <Text style={styles.statisticsNumber}>1</Text>
//                         <Text>Takipçi</Text>
//                     </View>
//                     <View style={styles.followStatistics}>
//                         <Text style={styles.statisticsNumber}>25</Text>
//                         <Text>Takip</Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                 <Text style={styles.username}>Andreas Sparre</Text>
//                 <Text style={styles.designDummy}>Gönderi</Text>
//                 <Text style={styles.designDummy}>Takipçi</Text>
//                 <Text style={styles.designDummy}>Takip</Text>
//             </View>
//             <View style={{ paddingLeft: 18 }}>
//                 <Text>Cibiliyetsel krizler yaşayıcı.</Text>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         backgroundColor: "white",
//     },
//     infoSection: {
//         paddingTop: 20,
//     },
//     profile: {
//         flexDirection: "column",
//     },
//     photoAndName: {
//         flexDirection: "column",
//         alignItems: "center",
//     },
//     profilePhoto: {
//         width: 70,
//         height: 70,
//         borderRadius: 50,
//         alignSelf: "center",
//     },
//     username: {
//         fontWeight: "bold",
//         fontSize: 14,
//         paddingTop: 10,
//     },
//     statistics: {
//         flexDirection: "column",
//     },
//     postStatistics: {
//         alignItems: "center",
//     },
//     statisticsNumber: {
//         fontWeight: "bold",
//         fontSize: 19,
//     },
//     followerStatistics: {
//         alignItems: "center",
//     },
//     followStatistics: {
//         alignItems: "center",
//     },
//     designDummy: {
//         color: "white",
//     },
// });






import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ProfileBody, ProfileButtons } from './screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from './screenComponents/BottomTabView';

const Profile = () => {
    let circuls = [];
    let numberofcircels = 10;

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

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '100%', padding: 10 }}>
                <ProfileBody
                    name="Mr Peobody"
                    accountName="mr_peobody"
                    profileImage={require('../storage/images/userProfile.png')}
                    followers="3.6M"
                    following="35"
                    post="458"
                />
                <ProfileButtons
                    id={0}
                    name="Mr Peobody"
                    accountName="mr_peobody"
                    profileImage={require('../storage/images/userProfile.png')}
                    
                />
            </View>
            <View>
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
};

export default Profile;
