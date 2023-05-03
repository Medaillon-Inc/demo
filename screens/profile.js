// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Header, Icon } from 'react-native-elements';
// import ProfileScreen from './ProfileScreen';

// export default function Profile() {
//   return (
//     <View style={styles.container}>
//       <Header
//         leftComponent={
//           <Icon name='camera' type='font-awesome' color='#517fa4' />
//         }
//         centerComponent={{ text: 'Instagram', style: { color: '#517fa4' } }}
//         rightComponent={
//           <Icon name='ios-send' type='ionicon' color='#517fa4' />
//         }
//         backgroundColor='white'
//       />
//       <ProfileScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });


import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileScreen from './ProfileScreen';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ProfileScreen navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%"
  },
});
