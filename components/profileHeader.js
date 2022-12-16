import { useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { useFonts } from 'expo-font';
// import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { withOrientation } from 'react-navigation';

export default function ProfileHeader({ navigation, title, navigating }) {
    // const navigator = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.leftSide}>
                <Text style={styles.headerTitleStyle}>{title}</Text>
                <SimpleLineIcons style={{ paddingLeft: 10, paddingTop: 10, }} name="arrow-down" size={10} color="black" />
            </View>
            <View style={styles.rightSide}>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Feather style={styles.icon} name="plus-square" size={29} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <SimpleLineIcons style={styles.icon} name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 10,
        flexDirection: 'row',

        alignItems: 'center',
        backgroundColor: "white",
        // justifyContent: 'center',
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 5,
    },
    rightSide: {
        position: "absolute",
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 35,
        right: 30,
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
        marginLeft: 30,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
});