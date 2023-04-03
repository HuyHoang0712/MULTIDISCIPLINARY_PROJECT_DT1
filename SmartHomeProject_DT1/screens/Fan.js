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
            id: 1,
            name: 'Air Conditioner',
            isEnabled: false,
        }, 
        {
            id: 2,
            name: 'Automatical Mode',
            isEnabled: false,
        },
        {
            id: 3,
            name: 'Power Saving Mode',
            isEnabled: false,
        },
        {
            id: 4,
            name: 'Sleep',
            isEnabled: false,
        },
        {
            id: 5,
            name: 'Advanced Mode',
            isEnabled: false,
        }, 
        {
            id: 6,
            name: 'Fan Spinning Mode',
            isEnabled: false,
        },
        {
            id: 7,
            name: 'Morning Alarm',
            isEnabled: false,
        },
        {
            id: 8,
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