import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Switch, Platform, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { IconButton, ProgressBar } from "react-native-paper";

import { HeaderDevice, SliderInput } from "../components/DeviceComponent";
import { images, icons, COLORS } from "../constants";

const Light = ({navigation, route}) => {
    let { roomInfor } = route.params;
    return (
        <View style={Styles.container}>
            <HeaderDevice navigation={navigation} roomInfor={roomInfor} type="LIGHT"/>
            <SliderInput />
            <Text>Hello</Text>
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
