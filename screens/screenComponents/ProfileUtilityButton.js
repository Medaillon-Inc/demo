import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';


const ProfileUtilityButton = ({ navigation, name, accountName, profileImage }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.profileUtilityButton}
                onPress={() =>
                    navigation.push('EditProfile', {
                        name,
                        accountName,
                        profileImage
                    })}>
                <Text style={styles.profileUtilityButtonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileUtilityButton}>
                <Text style={styles.profileUtilityButtonText}>Share profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.profileUtilityButton, width: 40, height: 30, justifyContent: "center" }}>
                <FontAwesome5 name="user-friends" size={16} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 15,
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    profileUtilityButton: {
        // flex: 1,
        borderRadius: 8,
        backgroundColor: 'rgba(150, 150, 150, 0.2)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 150,
        // height: '40%'
        alignItems: "center"
    },
    profileUtilityButtonText: {
        fontWeight: "600",
        fontSize: 14,
        color: "black"
    }
});

export default ProfileUtilityButton