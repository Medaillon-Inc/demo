import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StoryHighlight = ({ imageUri, title, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('StoryScreen')}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 80,
    marginRight: 10,
    start: 5
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#000',
  },
  title: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default StoryHighlight;
