import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm'


const MEDAILLON_LOGO = require('../assets/medaillon_logo-big-transparent.png')

const SignupScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={MEDAILLON_LOGO} style={styles.logo} />
        </View>
        <SignupForm navigation={navigation} />
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
        marginTop: 60,
    },
    logo: {
        height: 120,
        width: 120,
    }
})

export default SignupScreen