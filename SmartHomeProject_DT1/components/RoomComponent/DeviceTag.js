import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { COLORS } from "../../constants";


const DeviceTag = ({device, navigation, roomInfor}) => {
    const [active, setActive] = useState(false)

    let { name, icon } = device;

    const sendDataToServer = async () => {
        const data = {
            data: 1
            // Add other data as needed
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/turnOnFan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add other headers as needed
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Request was successful
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