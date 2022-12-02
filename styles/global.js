
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    container: {
        flex: 1,
        // padding: 20,
    },
});

export const images = {
    photos: {
        '1': require('../assets/modelPhotos/mervetaskin.png'),
        '2': require('../assets/modelPhotos/bellathorne.png'),
        '3': require('../assets/modelPhotos/gigihadid.png'),
        '4': require('../assets/modelPhotos/adrianalima.png'),
        '5': require('../assets/modelPhotos/barbarapalvin.png'),
    },
    profilePhotos: {
        '1': require('../assets/modelPhotos/profilephotos/mervetaskin.jpg'),
        '2': require('../assets/modelPhotos/profilephotos/bellathorne.jpg'),
        '3': require('../assets/modelPhotos/profilephotos/gigihadid.jpg'),
        '4': require('../assets/modelPhotos/profilephotos/adrianalima.jpg'),
        '5': require('../assets/modelPhotos/profilephotos/barbarapalvin.jpg'),
    },
};

export const notificationData = {
    profilePhotos: {
        '1': require('../assets/modelPhotos/profilephotos/victoriassecret.jpg'),
        '2': require('../assets/modelPhotos/profilephotos/asliates.jpg'),
        '3': require('../assets/modelPhotos/profilephotos/jenselter.jpg'),
        '4': require('../assets/modelPhotos/profilephotos/olyaabramovich.jpg'),
        '5': require('../assets/modelPhotos/profilephotos/ozgebitmez.jpg'),
        '6': require('../assets/modelPhotos/profilephotos/tammyhembrow.jpg'),
    },
};