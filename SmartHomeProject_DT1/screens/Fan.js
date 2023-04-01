import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import DashboardSwitch from '../components/DashboardSwitch';

function Fan() {
    const controlMode = [
        {
            name: 'Air Conditioner',
            isEnabled: false,
        }, 
        {
            name: 'Automatical Mode',
            isEnabled: false,
        },
        {
            name: 'Power Saving Mode',
            isEnabled: false,
        },
        {
            name: 'Sleep',
            isEnabled: false,
        },
        {
            name: 'Advanced Mode',
            isEnabled: false,
        }, 
        {
            name: 'Fan Spinning Mode',
            isEnabled: false,
        },
        {
            name: 'Morning Alarm',
            isEnabled: false,
        },
        {
            name: 'Sleep',
            isEnabled: false,
        },
    ]
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/bg_mobile.png')}
                style={styles.backgroundImage}
            >
            </ImageBackground>

            <DashboardSwitch controlMode={controlMode} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(111,100,92)'
    },
    backgroundImage: {
        flex: 0.4,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default Fan;