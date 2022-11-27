import { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Header({ route, title }) {

    const [fontsLoaded] = useFonts({
        'Billabong': require('../assets/fonts/Billabong.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return (
            <Text>Bi bok yuklenmedi</Text>
        )
    }

    return (
        <View style={styles.header} onLayout={onLayoutRootView}>
            <Text styles={styles.headerText}>Medaillon</Text>
            <AntDesign name='message1' size={28} style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'Billabong',
        fontSize: 35,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        right: 30,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
});