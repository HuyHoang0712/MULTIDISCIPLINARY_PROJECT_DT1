import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
// import fetch from "react-native-fetch";
import { COLORS } from "../../constants";


const DeviceTag = ({device, navigation, roomInfor}) => {

    let { name, icon, feedName, value } = device;
    const [active, setActive] = useState(value == 0? false:true)

    console.log(device)
    const sendDataToServer = async () => {

        const baseUrl = 'https://io.adafruit.com/api/v2/Huy_Hieu/feeds/';
        const urlServerAPI = `${baseUrl}${feedName}/data`;

        try {
            const response = await fetch(urlServerAPI, {
                method: 'POST',
                headers: {
                    accept:'application/json',
                    'X-AIO-Key':'aio_eGsJ29OtlNTVZwh5RpCNlKFiq1AC',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({value: active? 1: 0}),
            });
    
            if (response.status === 200) {
                const result = await response.json();
                console.log(result);
            } else {
                // Request failed
                console.error('Error:', response.status);
            }
        } catch (error) {
            // Catch any other errors
            console.error('Error:', error);
        }
    };
    

    useEffect(() => {
        sendDataToServer()
    }, [active])

    const onPressHandler = () => {
        setActive(!active);
    };

    return (
        <Pressable
            onPress={onPressHandler}
            onLongPress={() => {
                navigation.navigate(name, {roomInfor: roomInfor})
            }}
        >
            <View style={Styles.container}> 
                <Image 
                    source={icon}
                    style={Styles.image}
                    tintColor={active? COLORS.secondary:COLORS.white}
                />
                <Text style={{
                    fontFamily: 'Inter-Bold',
                    fontSize: 15,
                    color: active? COLORS.secondary:COLORS.white
                }}>{name}</Text>
            </View>
        </Pressable>
        
    )
}

const Styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        borderRadius: 10,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: COLORS.primary
    },
    image: {
        width: 65,
        height: 65
    },
})

export default DeviceTag;