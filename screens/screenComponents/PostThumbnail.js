import React from 'react';
import { Image, StyleSheet } from 'react-native';

const PostThumbnail = ({ imageUri }) => {
  return <Image style={styles.image} source={{ uri: imageUri }} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default PostThumbnail;
