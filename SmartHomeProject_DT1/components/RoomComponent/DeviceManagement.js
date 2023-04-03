import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import { COLORS, icons } from "../../constants";
const DeviceManage = () => {
    return (
        <View style={Styles.container}>
            <Text
                style={Styles.text}
            >Devices</Text>
            <IconButton 
                icon={icons.addCircle_icon}
                size={30}
                iconColor={COLORS.white}
                backgroundColor={COLORS.primary}
                onPress={() => console.log("Pressed")}
            />
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: COLORS.black,
        fontFamily: 'Inter-SemiBold',
        fontSize: 20,
        padding: 5,
        borderRadius: 10
    },
})

export default DeviceManage;