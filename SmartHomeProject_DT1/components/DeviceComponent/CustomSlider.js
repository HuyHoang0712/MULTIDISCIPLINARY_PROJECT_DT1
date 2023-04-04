import React from "react";

import { View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

import { icons, COLORS, } from "../../constants";

const CustomSlider = ({slideValue, setSlideValue}) => {
    return (
        <View style={Styles.slider}>
            <View style={{flexDirection: 'row',}}>
                <View style={Styles.sliderDummy}></View>
                <View style={{
                    backgroundColor: COLORS.primary,
                    width: (slideValue) * 300,
                    height: 20,
                    position: 'absolute',
                    borderRadius: 10
                }}></View>
            </View>
            <Slider
                style={{width: '85%', position: 'absolute'}}
                minimumValue={0}
                maximumValue={1}
                value={.5}
                onValueChange={(value) => setSlideValue(value)}
                maximumTrackTintColor='transparent'  
                minimumTrackTintColor='transparent'
                thumbTintColor={COLORS.primary}
            />
        </View>
    )
};

const Styles = StyleSheet.create({
    slider:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    sliderDummy: {
        backgroundColor: '#d3d3d3',
        width: 300,
        height:20,
        borderRadius: 10,               
    },
});

export default CustomSlider;

