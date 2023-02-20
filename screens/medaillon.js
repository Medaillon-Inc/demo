import React, { Fragment } from 'react';
import { createContext, useContext } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from './screenComponents/ReelsComponent';
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
} from 'react-native-navigation-bar-color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SystemNavigationBar from 'react-native-system-navigation-bar';

// changeNavigationBarColor('red');


const Medaillon = ({ navigation }) => {
    // hideNavigationBar();
    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;

    // const safeInsets = useContext(SafeAreaInsetsContext);
    // const insets = useSafeAreaInsets();
    // changeNavigationBarColor('rgba(0,0,0,0)', true)

    // const hide = async () => {
    //     const result = await SystemNavigationBar.navigationHide();
    // }

    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <View
                    style={{
                        // width: windowWidth,
                        // height: windowHeight,
                        position: 'relative',
                        backgroundColor: 'black',
                    }}>
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // zIndex: 1,
                            padding: 10,
                            paddingTop: 40,
                            // flex: 1,
                        }}>
                        {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                    Médaillon
                </Text>
                <Feather name="camera" style={{ fontSize: 25, color: 'white' }} /> */}
                    </View>
                    <ReelsComponent navigation={navigation} />
                </View>
            </SafeAreaView>
        </Fragment>
    );
};

export default Medaillon;


// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Dimensions } from 'react-native';
// import Post from '../../components/Post';
// import { API, graphqlOperation } from 'aws-amplify';

// import { listPosts } from '../../graphql/queries';

// const Medaillon = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchPost = async () => {
//             // fetch all the posts
//             try {
//                 const response = await API.graphql(graphqlOperation(listPosts));
//                 setPosts(response.data.listPosts.items);
//             } catch (e) {
//                 console.error(e);
//             }
//         };

//         fetchPost();
//     }, []);

//     return (
//         <View>
//             <FlatList
//                 data={posts}
//                 renderItem={({ item }) => <Post post={item} />}
//                 showsVerticalScrollIndicator={false}
//                 snapToInterval={Dimensions.get('window').height - 130}
//                 snapToAlignment={'start'}
//                 decelerationRate={'fast'}
//             />
//         </View>
//     );
// };

// export default Medaillon;
