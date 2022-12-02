import { useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { withOrientation } from 'react-navigation';

export default function ProfileHeader({ navigation, title, navigating }) {
    const navigator = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.leftSide}>
                <Text style={styles.headerTitleStyle}>{title}</Text>
                <SimpleLineIcons style={{ paddingLeft: 10, }} name="arrow-down" size={10} color="black" />
            </View>
            <View style={styles.rightSide}>
                <MaterialIcons style={styles.icon} name="add-box" size={24} color="black" />
                <SimpleLineIcons style={styles.icon} name="menu" size={24} color="black" />
            </View>
        </View>
        // <View style={styles.header}>
        //     <View>
        //         <Text style={{ ...styles.headerTitleStyle, fontFamily: 'Billabong', fontSize: 27 }}>{title}</Text>
        //         <View style={styles.icons}>
        //             <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
        //                 <MaterialIcons style={styles.icon} name="add-box" size={28} color="black" />
        //             </TouchableOpacity>
        //             <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        //                 <FontAwesome style={styles.icon} name="heart-o" size={24} color="black" />
        //             </TouchableOpacity>
        //             <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
        //                 <AntDesign style={styles.icon} name='message1' size={24} />
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </View>
        // <View style={styles.header} onLayout={onLayoutRootView}>
        //     <Text styles={globalStyles.titleText}>Medaillon</Text>
        //     <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Messages')}>
        //         <AntDesign name='message1' size={28} />
        //     </TouchableOpacity>
        // </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 100,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: "white",
        // justifyContent: 'center',
    },
    leftSide: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightSide: {
        position: 'relative',
        left: 100,
    },
    headerTitleStyle: {
        fontSize: 23,
        fontWeight: "bold",
        marginStart: 10,
        marginTop: 10,
    },
    headerText: {
        fontSize: 35,
        color: '#333',
        letterSpacing: 1,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        right: 30,
        fontWeight: "bold",
    },
    icon: {
        marginLeft: 20,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
});