// import React from 'react';
// import { ScrollView, StyleSheet, View } from 'react-native';
// import ProfileHeader from './screenComponents/ProfileHeader';
// import ProfileStats from './screenComponents/ProfileStats';
// import ProfileBio from './screenComponents/ProfileBio';
// import ProfileHighlights from './screenComponents/ProfileHighlights';
// import ProfilePosts from './screenComponents/ProfilePosts';

// const ProfileScreen = () => {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <ProfileHeader />
//         <ProfileStats />
//         <ProfileBio />
//         <ProfileHighlights />
//         <ProfilePosts />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default ProfileScreen;


// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import ProfileHeader from './screenComponents/ProfileHeader';
// import ProfileStats from './screenComponents/ProfileStats';
// import ProfileBio from './screenComponents/ProfileBio';
// import ProfileHighlights from './screenComponents/ProfileHighlights';
// import ProfilePosts from './screenComponents/ProfilePosts';

// const ProfileScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <ProfileHeader />
//       <ProfileStats />
//       <ProfileBio />
//       <ProfileHighlights />
//       <ProfilePosts />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//   },
// });

// export default ProfileScreen;


import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProfileInfo from './screenComponents/ProfileInfo';
import ProfileBio from './screenComponents/ProfileBio';
import ProfileHighlights from './screenComponents/ProfileHighlights';
import ProfilePosts from './screenComponents/ProfilePosts';
import ProfileUtilityButton from './screenComponents/ProfileUtilityButton';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.upperSideContainer}>
        <ProfileInfo isVerified={true} />
        {/* <ProfileBio /> */}
      </View>
      <ProfileUtilityButton navigation={navigation} name={"Andreas Sparre"} accountName={"andreas_sparre"}
        profileImage={require('../storage/images/userProfile.png')} />
      <ProfileHighlights navigation={navigation} />
      <ProfilePosts />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  upperSideContainer: {
    paddingHorizontal: 10,
  }
});

export default ProfileScreen;
