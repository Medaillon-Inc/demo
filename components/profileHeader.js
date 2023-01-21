import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { useFonts } from 'expo-font';
// import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { withOrientation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ProfileHeader({ navigation, title, name, accountName, profileImage }) {
    // const navigator = useNavigation();
    const [modalOpen, setModalOpen] = useState(false);

    const goToEdit = () => {
        setModalOpen(false);
        navigation.push('EditProfile', {
            name,
            accountName,
            profileImage
        })
    }

    return (
        <View style={styles.header}>
            {/* <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Hello from the modal :)</Text>
                </View>
            </Modal> */}

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalOpen}>
                <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setModalOpen(false)} />
            </Modal>

            {/* <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setModalOpen(false)} /> */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpen}
                onRequestClose={() => {
                    setModalOpen(false);
                }}
            >
                <TouchableOpacity style={styles.secondOverlay} activeOpacity={1} onPress={() => setModalOpen(false)} />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* <Ionicons name="remove-outline" size={30} style={{}} color="black" /> */}
                        <View
                            style={{
                                borderBottomColor: '#666',
                                borderBottomWidth: 4,
                                borderRadius: 2,
                                // height: 1,
                                width: 35,
                                marginBottom: 20,
                                marginTop: 12,
                                marginRight: 10,
                                // justifyContent: "center",
                                // alignContent: "center",
                                // alignSelf: "center",
                                // flex: 1,
                            }}
                        />
                        <TouchableOpacity style={styles.menuItem} onPress={() => goToEdit()}>
                            <FontAwesome style={styles.modalItemIcon} name="gear" size={28} color="black" />
                            <Text style={styles.modalText}>Ayarlar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => goToEdit()}>
                            <MaterialCommunityIcons style={styles.modalItemIcon} name="progress-clock" size={28} color="black" />
                            <Text style={styles.modalText}>Hareketlerim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => goToEdit()}>
                            <Entypo style={styles.modalItemIcon} name="back-in-time" size={28} color="black" />
                            <Text style={styles.modalText}>Arşiv</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => goToEdit()}>
                            <MaterialCommunityIcons style={styles.modalItemIcon} name="qrcode-scan" size={28} color="black" />
                            <Text style={styles.modalText}>QR Kodu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => goToEdit()}>
                            {/* <Feather style={styles.modalItemIcon} name="bookmark" size={28} color="black" /> */}
                            <FontAwesome style={styles.modalItemIcon} name="bookmark-o" size={28} color="black" />
                            <Text style={styles.modalText}>Kaydedilenler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => goToEdit()}>
                            <FontAwesome style={styles.modalItemIcon} name="list-ol" size={28} color="black" />
                            <Text style={styles.modalText}>Yakın Arkadaşlar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.menuItem, paddingBottom: 15, }} onPress={() => goToEdit()}>
                            <Feather style={styles.modalItemIcon} name="star" size={28} color="black" />
                            <Text style={styles.modalText}>Favoriler</Text>
                        </TouchableOpacity>
                        {/* <View>
                            <TouchableOpacity
                                // style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalOpen(false)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </Modal >


            <View style={styles.leftSide}>
                <Text style={styles.headerTitleStyle}>{title}</Text>
                <SimpleLineIcons style={{ paddingLeft: 10, paddingTop: 10, }} name="arrow-down" size={10} color="black" />
            </View>
            <View style={styles.rightSide}>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Feather style={styles.icon} name="plus-square" size={29} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalOpen(true)}>
                    <SimpleLineIcons style={styles.icon} name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    secondOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        position: "relative",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.60)',
        position: "relative",
    },
    menuItem: {
        flexDirection: "row",
        width: "100%",
        paddingBottom: 20,
        alignItems: "center",
    },
    modalItemIcon: {
        width: "10%",
        justifyContent: "center",
        alignItems: "center",
    },
    modalText: {
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: "300",
    },
    modal: {

    },
    centeredView: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 22,
        // height: "60%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    modalView: {
        flex: 1,
        // height: 20,
        backgroundColor: "white",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        // paddingVertical: 15,
        paddingLeft: 20,
        alignItems: "center",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        width: "100%",
        // height: "60%",
    },
    header: {
        width: "100%",
        height: 45,
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'baseline',
        backgroundColor: "white",
        justifyContent: "space-around",
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 5,
    },
    rightSide: {
        // position: "absolute",
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        // right: 0,
    },
    headerTitleStyle: {
        fontSize: 23,
        fontWeight: "bold",
        marginStart: 0,
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