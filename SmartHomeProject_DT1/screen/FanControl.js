import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';// import Example from './example.js';
const { width, height } = Dimensions.get('window');
import Background from '../components/background';
import Box from '../components/box';
const BackgroundWidth = width;
const BackgroundHeight = height;
function FanControl() {
  return (
    <View >
      <Background></Background>
      <Box></Box>
    <Text style={styles.t}>
        hello
    </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    position: 'relative',
    left: 0,
    top: 15,
    zIndex: -10,
  },
  t:{
    zIndex: 1,
    position: 'absolute',
    top: 10,
    color: 'red'
  }
});
export default FanControl;