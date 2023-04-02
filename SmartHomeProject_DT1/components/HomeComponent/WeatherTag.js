import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import { COLORS, images } from "../../constants";

const WeatherTag = () => {
    return (
        <View style={[Styles.container, Styles.shawdowProp]}>
            <View style={Styles.temperature}>
                <Image source={images.sunny} style={Styles.image}/>
                <Text style={Styles.text}>28ºC</Text>
            </View>
            <Divider orientation="vertical" color={COLORS.black} />
            <View style={Styles.humidity}>
                <Text style={Styles.text}>69%</Text>
                <Text style={Styles.text1}>Humidity</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create ({
    container: {
        width: '80%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: COLORS.light_gray,
    },
    temperature: {
        width: '45%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    humidity: {
        width: '45%',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 20,
        fontFamily: 'Inter-SemiBold',
        color: COLORS.black
    },
    text1: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: COLORS.black
    },
    image: {
        width: 44,
        height: 33,
    },
    shawdowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default WeatherTag;
