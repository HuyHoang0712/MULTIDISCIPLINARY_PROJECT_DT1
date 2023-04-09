import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

import { icons, COLORS, } from "../../constants";
import CustomSlider from "./CustomSlider";
const SliderInput = ({deviceInfor}) => {
    console.log(deviceInfor)
    let { name} = deviceInfor;

    const [curPower, setCurPower] = useState(deviceInfor.curPower);

    const [slideValue, setSlideValue] = useState(curPower);

    useEffect (() => {
        setCurPower(deviceInfor.curPower)
    },[deviceInfor.curPower])

    return (
        <View style={Styles.container}>
            <View style={Styles.title}>
                <Text style={Styles.text1}>{name == "Light"? "Lightness":"Power"}</Text>
                <Text style={Styles.text2}>{parseInt(slideValue*100)}%</Text>
            </View>
            <CustomSlider slideValue={slideValue} setSlideValue={setSlideValue} />
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,

    },
    text1: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 20
    },
    text2: {
        fontFamily: 'Inter-Medium',
        fontSize: 15
    }
});

export default SliderInput;

