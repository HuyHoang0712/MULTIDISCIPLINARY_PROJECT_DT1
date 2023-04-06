import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { COLORS } from "../../constants";


const DeviceTag = ({device, navigation, roomInfor}) => {
    const [active, setActive] = useState(false)

    let { name, icon } = device;

    useEffect(() => {
        fetch("http://127.0.0.1:5000/turnOnFan", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: 1
            }),
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error);
        });
    }, [active])

    return (
        <Pressable
            onPress={() => {
                setActive(!active);
            }}
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