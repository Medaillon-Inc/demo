import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Button, Text, TouchableOpacity, FlatList, Image, Dimensions, Modal } from 'react-native';
import { globalStyles, images, challenges } from '../styles/global';
import Messages from './messages';
import PostCard from '../shared/postCard';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import SearchBox from './screenComponents/SearchBox';
import Tag from './screenComponents/tag';
import SearchContent from './screenComponents/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SinglePost from './singlePost';
// import { LinearGradient } from 'react-native-svg';
// import LinearGradient from 'react-native-linear-gradient'

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'barabarapalvin', number: 1, body: 'lorem ipsum', key: '1' },
        { title: 'bellathorne', number: 2, body: 'lorem ipsum', key: '2' },
        { title: 'gigihadid', number: 3, body: 'lorem ipsum', key: '4' },
        { title: 'adrianalima', number: 4, body: 'lorem ipsum', key: '3' },
        { title: 'mervetaskin', number: 5, body: 'lorem ipsum', key: '5' },
    ]);

    const [challengeDatas, setChallenges] = useState([
        { title: 'Lüks Moda', number: 1, body: 'lorem ipsum', key: '1' },
        { title: 'Kırmızı Giysi', number: 2, body: 'lorem ipsum', key: '2' },
        { title: 'Cosplay', number: 3, body: 'lorem ipsum', key: '3' },
        { title: 'Sarışın', number: 4, body: 'lorem ipsum', key: '4' },
        { title: 'Bikini', number: 5, body: 'lorem ipsum', key: '5' },
        { title: 'Fit', number: 6, body: 'lorem ipsum', key: '6' },
        { title: 'Doğada Poz', number: 7, body: 'lorem ipsum', key: '7' },
        { title: 'Asansör', number: 8, body: 'lorem ipsum', key: '8' },
        { title: 'Saç Boyama', number: 9, body: 'lorem ipsum', key: '9' },
        { title: 'Tipleme', number: 10, body: 'lorem ipsum', key: '10' },
        { title: 'Dövme', number: 11, body: 'lorem ipsum', key: '11' },
    ]);
    // const categoryNumber = reviews.length;

    const [image, setImage] = useState(null);

    const getData = data => {
        setImage(data);
        setPostOpen(true);
    };

    const [postOpen, setPostOpen] = useState(false);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const statusBarStyle = "rgba(100,100,100,0.09)";

    return (
        // <View style={styles.container}>
        //     <StatusBar backgroundColor="white" barStyle="dark-content" />
        //     {/* <FlatList numColumns={categoryNumber} data={reviews} style={{ paddingBottom: 10 }} renderItem={({ item }) => (
        //             <View style={{ marginLeft: 10, flexDirection: "row" }}>
        //                 <Image source={images.profilePhotos[item.number]} style={styles.categoryPhoto} />
        //             </View>
        //         )} /> */}
        //     <ScrollView horizontal={true}>
        //         {reviews.map(item => (
        //             <View key={item.key} style={{ alignItems: "center", marginRight: 15, marginLeft: 5, paddingBottom: 25 }}>
        //                 <Image source={images.profilePhotos[item.number]} style={styles.categoryPhoto} />
        //                 <Text style={{ fontSize: 11, fontWeight: "400" }}>{item.title}</Text>
        //             </View>
        //         ))}
        //     </ScrollView>
        //     <FlatList data={reviews} renderItem={({ item }) => (
        //         <View>
        //             <PostCard>
        //                 <View style={styles.cardHeader}>
        //                     <Image source={images.profilePhotos[item.number]} style={styles.profilephoto} />
        //                     <Text style={styles.username}>{item.title}</Text>
        //                     <Image source={{
        //                         uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWUExURR6T5wyP8FSk3Hix4yyW7CSW4yKT7yyW6kye5yqX6i+V5xSS62ix5g6P+Die7yqW74m35Eyo9Wuq5GGp7IG7732y6my09E2o7Sqc4jug3Xu76v//+sXf7f//9/r//9bp7un7/f///////er49dPs79fp+KfN6cDm767Y66TH64zC6f/9/5rR7+z4/rve8GWv3aDI8QAAAL4eKewAAAAydFJOU/////////////////////////////////////////////////////////////////8ADVCY7wAAAAlwSFlzAAAOwwAADsMBx2+oZAAAB81JREFUeF7tnQ1b2zgMgA3ISWz36o4C7cgSaGC7XRnc5f//uZNbs7XQtCoFOYDeZ3sGHU2Td7Iif8RTrUBEVJERVWREFRlRRUZUkRFVZEQVGVFFRlSREVVkRBUZUUVGVJERVWREFRlRRUZUkRFVZEQVGVFFRlSREVVkRBUZUUVGVJERVWREFRlRRUZUkRFVZEQVGVFFRlSREVVkRBUZUUVGVJHppyp1dBy/6hF9VHVyBDrL4zf9oYeqCpWDsaZ3Z9Y/VZDlS9xJfKUn9E3V4C+rURMgxg3ji/2gZ6q007mPqvCPXp1dv1Qpg37C7wioUfybHpBS1ZfT8ZLTs7Oz0eg85PPo6DdZf6qGlKqcsdZqxIfMZMDozEZDv7Gg408nJ6GqC7XISt57a00O1uagwysrWMBfzimHGKMC7iy+nZ2EqiawkpXIwDi+nZ2EqvRqAifjkzXIhKpcHiqofYFkZ5xS1UuC6nOqWhRRe+OzVP2ddKrGLzKVW5Uqr6dTNXxWQ5EwNlVeT6fKxWvfEwOpRrLenap0fej3p8q4eABukqkaxyvfF+wrJsrriVQVRy9L6gGYxoMwk0DV6KvKrH5ZqbAA4oGY4VZ1OlQuA+z9PRuZopPpIh6NFVZVY+MADKYbNHVAVGHBoBIMuzOqcgpigjogoh7xjv1GyKjqyPtXcBSxNnead+CdUZXS9pBWtw5YgNyp83hsDhhVDZ8OB78CyvAVWYyqLsKN75XByIpHf3sYVbXOvl6uilj4qKriBe6Bscbn3e8Da+PB3x5OVcMXFFOQa8zg8ZvngP0SD/72cKo63bv9Yd84N9k2wYpvWpBT1WjviQes6tVAbQtGxkKUU1VIVnsE1uJH3WX5zQC2wQ35KkzdM54/qyqN7YkO/qxRF1VdXWkwm/IVqjKMA+2sqop9TAVVMK7qEl1N/aZCP6iaxEMzwKrqfK9BYgA1uS7LWdOUN+PN8WgMY8+GVdV+4+na69umQVPB1XDDpD3a4zx9XlV7dQKN/V5GVdWPTQ3wI6s6U/EiSahvmKiWqv4+Cg3waRvE7008Mgesqp4vyuvCGuN+NhhUzWzWVFf4vs0NkHPkmFPVhN4H9Mb9UwdPaGp203HnBMg557k4Ve1RrFs3x5Cq74Kqm3FHu0WBHzRXqTBwScQNyiAqhFVz2dUJxP4hY2+ZUdV08+0PvMnNosJ89Ahg1PimWmialc0vt0Ww/oh9wK7yM6wsLo6zlQFSa7LiuirrkKjK5ofL7ZYaw/IldjZVrmN8wNhMXZVz9adw8mp639T1Mqd/c9hT7g4rsB9vFHQCm8YGELxYrApmD1ph6QQmrPXH0rMOaQprqqtpWFC1BePZwopJ1Uhhfy1e3To2uwz1U3k7wZaGiRq0e6gWIdXU5f2x37G4AfhugkwfFJ4M2RxVblKFerwuq7nLrMY+8o+yXKjCe+C/DpP+NjAQPdecPI+qAu9im9sRFPeLSrOs6/JhionJ/apinqqrS7drlhXLD88VVkyf0zmkAJdNVc7uFl296n6QqfkiyDB7NdWvI9TbEYyR4N8wTdpw/ZNYzNjLq1vHqPl1WS3rcuwbz09q1LbI6M1Pp7dm9EdMFj/jjeFS1bWgH2uFk/vmblFE3ZU1ZqlFQdVUzXesr0iurOcZX2BT1apNPTkT7njFLbY3pMKwwlwevm6am6H1tKjyluci+FSF3N6Rd9xDiQXDMpkjGFLVTUEa28JWrQ3TgkdGVe2F6ogS6+bY9B5VYeUwqwdux71vidEm+1jFQuS8wxX2jwfXy05f4K4sL1VOWbdmPHi29casqrBo8BvboM9hchVq9FBjlXX1Hxb3u00ZnWGqi0d+e5hVtVlHvjJKPVTlXSivmuqhq6WuY8Car/G4DHCratXjPibr+DxX8xK7NGXZ3NKKhNybjHHGlF9Vx03QAlh3jgmrnF0Xmra6yGSMMZVAVVfBgK8bd3zVVNfHtNbnjeKMqQSqtkwwG+31Qz3ocPkEDdyPm/ZJVW4xUU8WG1XsxOSWN6b6pcqGmdIwrkLAZuxn3quo2gOsWuMB2eD/wHitB8K5YD3yXqOKdRXokvcaVfYTqBrGaz0Qy7/hCfsHFvFaD+SzqCKVA9v5FKrMqzy/9TlUhUeXD+YzqBqrw1Xh+z+FKlg8EY8Ji74w7SmQw6dQZbRySoEPU/O2ayVDN2DCW3Pt2TemYFcVOTktigK82Tu0IIOwU0N2pE7jobhIpSoyohXvMbmFO4LGjrKywwH/jr2JVbUnzsPujRxDfrPehp1UmYc+V0itqi007B7LC6NYbvol7d7PyVW1njLp4IHxydsO0qtqCZN+AJY7iT+nB6pal8OfSWcbC661Fdga+PYI6KQPqsYrK7FtuMlNh0qvba6QbuPiFfqgqtXePoox2fJ/hCjc6n2xF2fZi5NoLd4FseWZ3P3JSYVaPhUQ+jCpNphdox+qWh0qJ+XWl+uPnTIaGx8k2S/uGT1RdeZWA+o35yazmm219Q56chrt2HbUl4p/brSDvpxHN6P0FdWS/qvqDaKKjKgiI6rIiCoyooqMqCIjqsiIKjKiioyoIiOqyIgqMqKKjKgiI6rIiCoyooqMqCIjqsiIKjKiioyoIiOqyIgqMqKKjKgiI6rIiCoyooqMqCIjqsiIKjKiioyoIiOqyIgqIm37P8xZ6EGpErM8AAAAAElFTkSuQmCC'
        //                     }} style={{ width: 20, height: 20, marginLeft: 5 }} />
        //                     <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={{ position: "absolute", right: 10 }} />
        //                 </View>
        //                 <TouchableOpacity onPress={() => route.params.navigation.navigate('Messages')}>
        //                     <View>
        //                         <Image source={images.photos[item.number]} style={styles.photo} />
        //                     </View>
        //                 </TouchableOpacity>
        //             </PostCard>
        //             <View style={{ flexDirection: "row", marginTop: 10, }}>
        //                 <View style={{ flexDirection: "row", justifyContent: 'flex-start', width: "50%" }}>
        //                     <View style={{ flexDirection: "row", left: 10, justifyContent: "flex-start" }}>
        //                         <FontAwesome name="heart-o" size={27} color="black" />
        //                         <Ionicons style={{ paddingLeft: 15 }} name="ios-chatbubbles-outline" size={27} color="black" />
        //                         <Feather style={{ paddingLeft: 15 }} name="send" size={27} color="black" />
        //                     </View>
        //                 </View>
        //                 <View style={{ width: "50%", paddingRight: 13 }}>
        //                     <Feather style={{ textAlign: 'right' }} name="bookmark" size={26} color="black" />
        //                 </View>
        //             </View>
        //             <View style={{ paddingBottom: 10 }}>
        //                 <Text style={{ fontWeight: "bold", fontSize: 14, paddingLeft: 10, paddingTop: 10, }}>2 beğenme</Text>
        //                 <View style={{ flexDirection: "row", paddingTop: 3, paddingTop: 3, }}>
        //                     <Text style={{ fontWeight: "bold", fontSize: 13, paddingLeft: 10, }}>barbarapalvin</Text>
        //                     <Text style={{ fontSize: 13, paddingLeft: 5, whiteSpace: "nowrap" }}>Like my outfit?
        //                         #hot #beautiful
        //                     </Text>
        //                 </View>
        //                 <View style={{ paddingLeft: 10, }}>
        //                     <Text style={{ fontWeight: "400", fontSize: 13, color: "#a1a1a1" }}>20 yorumun tümünü gör</Text>
        //                     <Text style={{ fontSize: 10, color: "#848484", paddingTop: 3, }}>19 Kasım</Text>
        //                 </View>
        //             </View>
        //         </View>
        //     )} />
        //     {/* <Text style={styles.titleText}>Welcome to Medaillon</Text>
        //     <Button
        //         title="Go to Messages"
        //         onPress={() => navigation.navigate('Messages')}
        //     /> */}
        // </View>
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                // position: 'relative',
            }}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={{}}>
                <ScrollView horizontal={true} style={{ paddingVertical: 15, paddingHorizontal: 10, backgroundColor: "#141414", }}>
                    {challengeDatas.map(item => (
                        <View key={item.key} style={{ alignItems: "center", marginRight: 12, marginLeft: 5, paddingBottom: 0 }}>
                            {/* <LinearGradient
                                colors={['red', 'yellow']}
                                style={styles.linearGradient}
                            >
                                <Text>Vertical Gradient</Text> */}
                            <Image source={challenges.challengePhotos[item.number]} style={styles.categoryPhoto} />
                            {/* </LinearGradient> */}
                            <Text style={{ fontSize: 13, fontWeight: "600", paddingTop: 5, color: 'rgba(255,255,255,0.7)' }}>{item.title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View >
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'black', }}>
                {/* <SearchBox /> */}
                <SearchContent data={getData} />
                <TouchableOpacity
                    style={{
                        margin: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <AntDesign name="pluscircleo" style={{ fontSize: 40, opacity: 0.5 }} />
                </TouchableOpacity>
            </ScrollView>
            {/* {image ?
                navigation.navigate('Medaillon',
                    {
                        navigation: navigation,
                    }) : null} */}
        </View >
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
    gradient: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: 3,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
    categoryPhoto: {
        borderRadius: 50,
        width: 65,

        height: 65,
        // marginLeft: 11,
        borderWidth: 2.25,
        borderColor: '#ff8501',
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