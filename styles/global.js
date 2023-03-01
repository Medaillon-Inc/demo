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
    // photos: {
    //     '1': require('../assets/photos/modelPhotos/barbarapalvin.png'),
    //     '2': require('../assets/photos/modelPhotos/bellathorne.png'),
    //     '3': require('../assets/photos/modelPhotos/gigihadid.png'),
    //     '4': require('../assets/photos/modelPhotos/adrianalima.png'),
    //     '5': require('../assets/photos/modelPhotos/mervetaskin.png'),
    // },
    profilePhotos: {
        '1': require('../assets/photos/modelPhotos/profilePhotos/barbarapalvin.jpg'),
        '4': require('../assets/photos/modelPhotos/profilePhotos/adrianalima.jpg'),
        '3': require('../assets/photos/modelPhotos/profilePhotos/gigihadid.jpg'),
        '5': require('../assets/photos/modelPhotos/profilePhotos/mervetaskin.jpg'),
    },
};

export const fanImages = {
    photos: {
        '0': require('../assets/photos/modelPhotos/barbarapalvin.png'),
    },
    profilePhotos: {
        '0': require('../assets/photos/fans/profilePhotos/randomegirl.jpg'),
        '1': require('../assets/photos/fans/profilePhotos/chad2.jpg'),
        '2': require('../assets/photos/fans/profilePhotos/kurdishdayi.jpg'),
        '3': require('../assets/photos/fans/profilePhotos/cilgindayi.jpg'),
        '4': require('../assets/photos/fans/profilePhotos/incel.jpg'),
        '5': require('../assets/photos/fans/profilePhotos/chad3.jpg'),
        '6': require('../assets/photos/fans/profilePhotos/chad1.webp'),
    },
};

export const notificationData = {
    profilePhotos: {
        '4': require('../assets/photos/company/companyPhotos/gucci.png'),
        '2': require('../assets/photos/company/companyPhotos/louisvuitton.png'),
        '3': require('../assets/photos/fans/profilePhotos/motun.jpg'),
        '1': require('../assets/photos/fans/profilePhotos/altrkr06.jpg'),
        '5': require('../assets/photos/modelPhotos/profilePhotos/tammyhembrow.jpg'),
    },
};

export const challenges = {
    challengePhotos: {
        '1': require('../assets/photos/challengePhotos/highfashion1.jpg'),
        '2': require('../assets/photos/challengePhotos/kratos.png'),
        '3': require('../assets/photos/challengePhotos/casual.jpg'),
        '4': require('../assets/photos/challengePhotos/sport.jpg'),
        '5': require('../assets/photos/challengePhotos/country.jpg'),
        '6': require('../assets/photos/challengePhotos/fit1.webp'),
        '7': require('../assets/photos/challengePhotos/natural.jpg'),
        '8': require('../assets/photos/challengePhotos/date.jpg'),
        '9': require('../assets/photos/challengePhotos/dyehair.jpg'),
        '10': require('../assets/photos/challengePhotos/tattooedwoman.webp'),
    },
};

export const logos = {
    "medaillon_logo - big - app": require('../assets/medaillon_logo - big - app.png'),
}