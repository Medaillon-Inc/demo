import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from './screenComponents/LoginForm'


const MEDAILLON_LOGO = require('../assets/medaillon_logo-big-transparent.png')

const LoginScreen = ({ navigation }) => (
    <View style={styles.container} >
        <View style={styles.logoContainer}>
            <Image source={MEDAILLON_LOGO} style={styles.logo} />
        </View>
        <LoginForm navigation={navigation} />
    </View>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 50,
        marginBottom: 30,
    },
    logo: {
        height: 120,
        width: 120,
    }
})

export default LoginScreen