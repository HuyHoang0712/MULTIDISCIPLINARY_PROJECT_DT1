import {React, useState, useEffect} from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import { COLORS, images } from "../../constants";




const WeatherTag = ({type}) => {

    const [temp, setTemp] = useState(60);
    const [humidity, setHumidity] = useState(60);

    useEffect(() => {
          const timerId = setInterval(() => {
            getHumidTemp('cambien1');
            getHumidTemp('cambien3');
          },1000);
          return () => {
            clearInterval(timerId);
          };
    },[]);


    const getHumidTemp = async (feedKey) => {
        try {
            const baseUrl = 'https://io.adafruit.com/api/v2/Huy_Hieu/feeds/';
            const dataUrl = '/data?include=value&limit=1';
            const url = `${baseUrl}/${feedKey}/${dataUrl}`; // Construct the URL
      
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                accept: 'application/json',
                'X-AIO-Key': 'aio_eGsJ29OtlNTVZwh5RpCNlKFiq1AC' 
              }
            });
      
            if (response.status === 200) {
              const result = await response.json();

              if (result && result.length > 0) {
                const value = parseFloat(result[0].value);
                if (!isNaN(value)) {
                  if (feedKey === 'cambien1') {
                    setTemp(value);
                  } else {
                    setHumidity(value);
                  }
                }
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
                <Text style={Styles.text}>{temp}</Text>
            </View>
            <Divider orientation="vertical" color={COLORS.black} />
            <View style={Styles.humidity}>
                <Text style={Styles.text}>{humidity}</Text>
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
