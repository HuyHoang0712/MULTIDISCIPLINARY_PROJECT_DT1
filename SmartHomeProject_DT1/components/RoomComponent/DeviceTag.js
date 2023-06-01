import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
// import fetch from "react-native-fetch";
import { COLORS, HOST } from "../../constants";


const DeviceTag = ({ device, navigation, roomInfor, active=0, setActive=null}) => {

    let { name, icon } = device;

    // console.log(active)

    const controlDevice = async () => {
        setActive(active == 0 ? 1 : 0);
        try {
            const response = await fetch(HOST + `/${name.toLowerCase()}/turn_on_off`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: active === 0 ? '1' : '0'
                })
            })
        } catch (error) {
            console.error(error);
        }
    };



    const Styles = StyleSheet.create({
        container: {
            width: 150,
            height: 150,
            borderRadius: 10,
            padding: 30,
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: active === 0 ? COLORS.white : COLORS.primary
        },
        image: {
            width: 65,
            height: 65
        },
    })

    return (
        <Pressable
            onPress={controlDevice}
            onLongPress={() => {
                navigation.navigate(name, { roomInfor: roomInfor })
            }}
        >
            <View style={Styles.container}>
                <Image
                    source={icon}
                    style={Styles.image}
                    tintColor={active === 0 ? COLORS.primary : COLORS.white}
                />
                <Text style={{
                    fontFamily: 'Inter-Bold',
                    fontSize: 15,
                    color: active === 0 ? COLORS.primary : COLORS.white
                }}>{name}</Text>
            </View>
        </Pressable>

    )
}



export default DeviceTag;