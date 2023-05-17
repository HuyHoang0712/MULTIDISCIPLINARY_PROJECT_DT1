import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Avatar, IconButton, Provider } from "react-native-paper";

import { COLORS, icons } from "../../constants";

const InforTag = ({ icon, funcIcon, title, text, openDialog=null }) => {
    return (
        <View style={Styles.container}>
            <Avatar.Icon icon={icon} size={25} color={COLORS.primary} style={{ backgroundColor: 'transparent' }} />
            <Text style={Styles.title}>{title}: </Text>

            <View style={Styles.subContainer}>
                <TextInput
                    value={text}
                    style={Styles.text}
                    editable={false}
                    secureTextEntry={title == "Password" ? true : false} />
                {openDialog ? (
                    <IconButton icon={funcIcon} size={20} iconColor={COLORS.primary} onPress={() => openDialog(true)} />
                ) : null}
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    subContainer: {
        width: '65%',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        width: '30%',
        fontFamily: 'Inter-SemiBold',
        fontSize: 17,
    },
    text: {
        width: '80%',
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        color: COLORS.secondary,
    }
})

export default InforTag;