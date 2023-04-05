import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { HeaderDevice, SliderInput, ModeDevide } from "../components/DeviceComponent";
import { images, icons, COLORS } from "../constants";

const Light = ({navigation, route}) => {

    const deviceMode = [
        {
            name: 'Auto Mode'
        },
        {
            name: 'Saving Energy Mode'
        },
        {
            name: 'Slepp Mode'
        }
    ]

    let { roomInfor } = route.params;
    return (
        <View style={Styles.container}>
            <HeaderDevice navigation={navigation} roomInfor={roomInfor} type="LIGHT"/>
            <SliderInput />
            {deviceMode.map((mode, index) => 
                <ModeDevide key={index} modeInfor={mode}/>
            )}
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 55,

        backgroundColor: COLORS.light_gray
    },
})

export default Light;
