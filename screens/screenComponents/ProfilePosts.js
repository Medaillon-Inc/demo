import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PostThumbnail from './PostThumbnail';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const postImages = [
  { imageUri: 'https://picsum.photos/200/300' },
  { imageUri: 'https://picsum.photos/id/237/200/300' },
  { imageUri: 'https://picsum.photos/seed/picsum/200/300' },
  { imageUri: 'https://picsum.photos/id/217/200/300' },
  { imageUri: 'https://picsum.photos/id/238/200/300' },
  { imageUri: 'https://picsum.photos/id/239/200/300' },
  { imageUri: 'https://picsum.photos/id/227/200/300' },
  { imageUri: 'https://picsum.photos/id/247/200/300' },
  { imageUri: 'https://picsum.photos/id/277/200/300' },
  { imageUri: 'https://picsum.photos/id/177/200/300' },
  { imageUri: 'https://picsum.photos/id/77/200/300' },
];

const Posts = () => (
  <ScrollView contentContainerStyle={styles.container}>
    {postImages.map((post, index) => (
      <View key={index} style={styles.postContainer}>
        <PostThumbnail imageUri={post.imageUri} />
      </View>
    ))}
  </ScrollView>
);

const Tagged = () => (
  <ScrollView contentContainerStyle={styles.container}>
    {/* Tagged content here */}
  </ScrollView>
);

const Reels = () => (
  <ScrollView contentContainerStyle={styles.container}>
    {/* Reels content here */}
  </ScrollView>
);


const ProfilePosts = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'posts', icon: 'table' },
    { key: 'reels', icon: 'play-video' },
    { key: 'tagged', icon: 'hashtag' },
  ]);

  const renderScene = SceneMap({
    posts: Posts,
    reels: Reels,
    tagged: Tagged,
  });

  const renderIcon = ({ route, focused }) => {
    const color = focused ? 'black' : 'gray';

    if (route.key === 'reels') {
      return <FoundationIcon name={route.icon} size={20} color={color} />;
    } else {
      return <FontAwesomeIcon name={route.icon} size={20} color={color} />;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      renderIcon={renderIcon}
      tabBarPressOpacity={1} // Add this line
      tabBarPressColor="transparent" // Add this line
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: '100%' }}
      renderTabBar={renderTabBar}
    />
  );

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: 50
  },
  postContainer: {
    width: '33.33%',
    padding: 1,
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: 'black',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ProfilePosts;
