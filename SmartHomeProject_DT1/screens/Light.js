import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import { HeaderDevice, SliderInput, ModeDevide, AdvancedMode } from "../components/DeviceComponent";
import { images, icons, COLORS } from "../constants";

const Light = ({navigation, route}) => {
    
    const [lightInfor, setLightInfor] = useState()
    const [deviceInfor, setDeviceInfor] = useState({name:'Light', curPower:0.6})

    const getLightInfor = async() =>{
        try {
            const baseUrl = 'https://io.adafruit.com/api/v2/Huy_Hieu/feeds/';
            const dataUrl = '/data?include=value&limit=1';
            const url = `${baseUrl}/cambien2/${dataUrl}`; // Construct the URL
      
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
                    setLightInfor(value)
                    console.log(value)
                }
              }
            } else {
              console.error('Error:', response.status);
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
    useEffect(() => {
        getLightInfor()
    }, [])

    useEffect(() => {
        setDeviceInfor({name:'Light', curPower:lightInfor/500})
    }, [lightInfor])
    

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
            name: "Home Theater",
            start_time: "20:00",
            end_time: "21:00"
        },
        {
            name: "Home Theater",
            start_time: "20:00",
            end_time: "21:00"
        },
    ]

    let { roomInfor } = route.params;
    return (
        <View style={Styles.container}>
            <HeaderDevice navigation={navigation} roomInfor={roomInfor} type="Light"/>
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

export default Light;
