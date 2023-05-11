import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Avatar, IconButton } from "react-native-paper";

import { COLORS, icons } from "../../constants";

const Title = ({ title, icon, func=null}) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.contentTitle}>{title}</Text>
            {func? (
                <IconButton icon={icon} size={24} iconColor={COLORS.primary} onPress={func}/>
            ):null}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
    },
    contentTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: 20,
        color: COLORS.primary
    },
})

export default Title;