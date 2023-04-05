import React, { useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import { HeaderDevice, SliderInput, ModeDevide, AdvancedMode } from "../components/DeviceComponent";
import { images, icons, COLORS } from "../constants";

const Fan = ({navigation, route}) => {

    const deviceInfor = {
        name: 'Fan',
        curPower: 0.8
    }

    const deviceMode = [
        {
            name: 'Auto Mode'
        },
        {
            name: 'Saving Energy Mode'
        },
    ]

    const advancedMode = [
        {
            name: "Sleep",
            start_time: "22:00",
            end_time: "6:00"
        },
        {
            name: "Fan Spinning Mode",
            start_time: "20:00",
            end_time: "21:00"
        },
    ]

    let { roomInfor } = route.params;
    return (
        <View style={Styles.container}>
            <HeaderDevice navigation={navigation} roomInfor={roomInfor} type="Fan"/>
            <SliderInput deviceInfor={deviceInfor}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center'}}
                style={Styles.scrollview}
            >
                {deviceMode.map((mode, index) => 
                    <ModeDevide key={index} modeInfor={mode}/>
                )}
                {advancedMode.map((mode, index) => 
                    <AdvancedMode key={index} modeInfor={mode}/>
                )}
            </ScrollView>
            
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 55,
        paddingBottom: 20,
        backgroundColor: COLORS.light_gray
    },
    scrollview: {
        width: '100%',
        paddingBottom: 10,
        marginTop: 20
    }
})

export default Fan;
