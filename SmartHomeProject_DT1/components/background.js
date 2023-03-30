import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';// import Example from './example.js';
const { width, height } = Dimensions.get('window');
const BackgroundWidth = width;
const BackgroundHeight = height;

function Background() {
  return (
      <Image 
        source={require('../assets/Background.png')}
        style={styles.image}
      />
  );
}
const styles = StyleSheet.create({
  image: {
    position: 'relative',
    left: 0,
    top: 15,
    zIndex: -10,
    width: BackgroundWidth,
    height: BackgroundHeight,
  },
});
export default Background;