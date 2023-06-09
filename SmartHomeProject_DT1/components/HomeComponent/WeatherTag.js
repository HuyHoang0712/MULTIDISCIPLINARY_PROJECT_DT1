import { React, useState, useEffect } from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import { COLORS, images, HOST } from "../../constants";

const WeatherTag = ({ type }) => {

    const [temp, setTemp] = useState(60);
    const [humidity, setHumidity] = useState(60);

    useEffect(() => {
        const timerId = setInterval(() => {
            getHumidTemp();
        }, 10000);
        return () => {
            clearInterval(timerId);
        };
    }, []);


    const getHumidTemp = async (feedKey) => {
        try {
            const response1 = await fetch(HOST + '/temp/', {
                method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
            });

            const response2 = await fetch(HOST + '/humid/', {
                method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
            })

            const temp = await response1.json();
            const humid = await response2.json();

            setTemp(temp);
            setHumidity(humid);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={[Styles[`container${type}`], Styles.shawdowProp]}>
            <View style={Styles.temperature}>
                <Image source={images.sunny} style={Styles.image} />
                <Text style={Styles.text}>{temp}ºC</Text>
            </View>
            <Divider orientation="vertical" color={COLORS.black} />
            <View style={Styles.humidity}>
                <Text style={Styles.text}>{humidity}%</Text>
                <Text style={Styles.text1}>Humidity</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
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
        backgroundColor: COLORS.secondary,
    },
    containerROOM: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 20,
        borderRadius: 10,
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
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    }
})

export default WeatherTag;
