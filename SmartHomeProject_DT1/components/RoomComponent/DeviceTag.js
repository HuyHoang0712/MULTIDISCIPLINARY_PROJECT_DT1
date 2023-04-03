import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { COLORS } from "../../constants";


const DeviceTag = ({device}) => {
    const [active, setActive] = useState(false)

    let { name, icon } = device;
    return (
        <Pressable
            onPress={() => {
                setActive(!active);
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