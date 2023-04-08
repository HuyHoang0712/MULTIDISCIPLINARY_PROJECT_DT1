import {React, useState, useEffect} from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import { COLORS, images } from "../../constants";




const WeatherTag = ({type}) => {

    const [cambienValue, setCambienValue] = useState({
        Temp: 60,
        Humid: 60
    });

    useEffect(() => {
        getHumidTemp('cambien1');
        getHumidTemp('cambien2');
    }, []);

    const getHumidTemp = async (feedKey) => {
        try {
            const baseUrl = 'https://io.adafruit.com/api/v2/Huy_Hieu/feeds/';
            const dataUrl = '/data?include=value&limit=1';
            const url = `${baseUrl}/${feedKey}/${dataUrl}`; // Construct the URL
      
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                accept: 'application/json',
                'X-AIO-Key': 'aio_clIm99g3FXRiRA0kxkLbaooZsidi' 
              }
            });
      
            if (response.status === 200) {

              const result = await response.json();

              if (feedKey === 'cambien1') {
                setCambienValue(prevValue => ({...prevValue, Temp: result.last_value}));
              } else {
                setCambienValue(prevValue => ({...prevValue, Humid: result.last_value}));
              }
            } else {
              console.error('Error:', response.status);
            }
          } catch (error) {
            console.error('Error:', error);
          }
    };

    return (
        <View style={[Styles[`container${type}`], Styles.shawdowProp]}>
            <View style={Styles.temperature}>
                <Image source={images.sunny} style={Styles.image}/>
                <Text style={Styles.text}>{cambienValue.Temp}</Text>
            </View>
            <Divider orientation="vertical" color={COLORS.black} />
            <View style={Styles.humidity}>
                <Text style={Styles.text}>{cambienValue.Humid}</Text>
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
