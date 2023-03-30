import React from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const BackgroundWidth = width;
// const BackgroundHeight = height;
function Box() {
  return (
    <View style={{position: 'absolute', height: '100%', width: '100%' }}>
        <View style={styles.box}>
            
        </View>
        <View style={styles.smallbox}></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    box: {
      position: 'absolute',
      width: BackgroundWidth,
      height: 618,
      left: 0,
      top: 350,
      backgroundColor: '#674F3F',
      opacity: 0.95,
      borderRadius: 20,
      zIndex: 1,
    },
    smallbox:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 24,
        gap: 16,
        position: 'absolute',
        width: BackgroundWidth-23*2,
        height: 244,
        left: 23,
        top: 380,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 8,
        zIndex: 2
    }
  });

export default Box;
