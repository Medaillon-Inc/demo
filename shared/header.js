import { useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Header({ navigation, title, navigating }) {
    const navigator = useNavigation();

    const [fontsLoaded] = useFonts({
        'Billabong': require('../assets/fonts/Billabong.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (!fontsLoaded) {
            return (
                <Text>Bi bok dönmedi</Text>
            )
        }
    }, [fontsLoaded]);

    return (
        <View style={styles.header}>
            <View>
                <Text style={{ ...styles.headerTitleStyle, fontFamily: 'Billabong', fontSize: 27 }}>{title}</Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <MaterialIcons style={styles.icon} name="add-box" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <FontAwesome style={styles.icon} name="heart-o" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <AntDesign style={styles.icon} name='message1' size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        // justifyContent: 'center',
    },
    headerTitleStyle: {
        fontFamily: 'Billabong',
        fontSize: 28,
        marginStart: 10,
        marginTop: 10,
    },
    headerText: {
        fontFamily: 'Billabong',
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