import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import StoryHighlight from './StoryHighlight';

const ProfileHighlights = ({navigation}) => {
  const highlights = [
    { imageUri: 'https://instagram.fesb3-2.fna.fbcdn.net/v/t51.2885-15/342367717_3331442930501053_6674924536866841428_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fesb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=I56-yMwGL8IAX9C3sDG&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4Njc4NjU3OTQxODY0ODY5NA%3D%3D.2-ccb7-5&oh=00_AfBJ2G7FUkxvY93W23kn25HydEx1XSEOBVv9HpwE8w84EA&oe=644B3E63&_nc_sid=1527a3', title: 'Venice FF \‘22' },
    { imageUri: 'https://instagram.fesb3-2.fna.fbcdn.net/v/t51.2885-15/296879881_132213442622598_6399791841678177510_n.jpg?stp=c0.455.1170.1170a_dst-jpg_e35_s150x150&_nc_ht=instagram.fesb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=yVXGCDEyRKQAX_1VGPn&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfAozwNDsQqnbvW-yW79v-K-YDIH-LajQNt1gK3Jdlq_hA&oe=6446CF44&_nc_sid=276363', title: 'Aug ‘22 Celebs' },
    { imageUri: 'https://instagram.fesb3-2.fna.fbcdn.net/v/t51.2885-15/302173255_765320624776278_6214603192358678322_n.jpg?stp=c335.363.586.586a_dst-jpg_e35_s150x150&_nc_ht=instagram.fesb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=GaJ1zDKjZR0AX8aWH76&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfB2UAG2PyM2ZvfwZcmKLQ3BfjHTDfPFP8Ye2GdR3caZ-g&oe=6447270F&_nc_sid=276363', title: '2022 VMAS' },
    { imageUri: 'https://instagram.fesb3-2.fna.fbcdn.net/v/t51.2885-15/291443206_761630438197963_193777177959528551_n.jpg?stp=c0.437.1125.1125a_dst-jpg_e35_s150x150&_nc_ht=instagram.fesb3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=p7CETH8xvR8AX-Ar9aH&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfCvQhT4zpiXjp1yTDbyzME7-T9W5xbRraDeKQph5m7kPA&oe=644752BF&_nc_sid=276363', title: 'July ‘22 Celebs' },
    { imageUri: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/242072444_811120572889847_8793325124586214390_n.jpg?stp=c90.480.1035.1035a_dst-jpg_e35_s150x150&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=FAhBFUS73MUAX-OGIJt&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfCbvQpw7G4WwpCTQo5UxbuUTBhCGJ-4owhMtdMzSH8wyg&oe=6447133E&_nc_sid=276363', title: 'Youtube Videos 5' },
    // More highlights...
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {highlights.map((highlight, index) => (
          <StoryHighlight
            key={index}
            imageUri={highlight.imageUri}
            title={highlight.title}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default ProfileHighlights;
