import React, { useState } from 'react';
import { View, Image, Text, Switch, StyleSheet } from 'react-native';

function SwitchDevice(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    let switchStyle = null;
    let fontType = null;

    
    if (props.image) {
        switchStyle = null;
        fontType = styles.fontSizeOption;
    } else {
        switchStyle = { transform: [{ rotate: '-90deg' }, { scaleX: -1 }] };
        fontType = styles.fontSizeMaster;
    }

    return (
        <View style={props.image ? styles.OptionAirCond : styles.AirConditioner}>
            {props.image && <Image style={{ justifyContent: 'flex-start' }} source={require('../assets/smallLight.png')} />}
            <Text style={fontType}>{props.title}</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={props.isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={switchStyle}
            />
        </View>
    )
}

export default SwitchDevice;

const styles = StyleSheet.create({
    AirConditioner: {
        flexDirection: 'row',
        flex: 0.3,
        marginHorizontal: 20,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    OptionAirCond: {
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: 10
    },
    fontSizeOption:{
        fontWeight: 'bold', flex: 1 
    },
    fontSizeMaster: {
        fontWeight: 'bold', fontSize: 24
    }
})