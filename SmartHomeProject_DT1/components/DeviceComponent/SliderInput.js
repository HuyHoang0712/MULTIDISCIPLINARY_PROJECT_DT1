import React, { useState } from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

import { icons, COLORS, } from "../../constants";
import CustomSlider from "./CustomSlider";
const SliderInput = () => {
    const [slideValue, setSlideValue] = useState(0.5);


    return (
        <View style={Styles.container}>
            <View style={Styles.title}>
                <Text style={Styles.text1}>Lightness</Text>
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
