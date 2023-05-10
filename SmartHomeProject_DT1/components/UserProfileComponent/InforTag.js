import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Avatar } from "react-native-paper";

import { COLORS } from "../../constants";

const InforTag = ({icon , title, text, editInfor, }) => {
    return (
        <View style={Styles.container}>
            <Avatar.Icon  icon={icon} size={25} color={COLORS.primary} style={{backgroundColor: 'transparent'}}/>
            <Text style={Styles.title}>{title}: </Text>
            <TextInput 
                value={text} 
                style={Styles.text} 
                editable={false} 
                secureTextEntry={title == "Password"? true:false}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        alignContent: 'center',
        flexDirection: 'row',
    },
    title: {
        width: '30%',
        fontFamily: 'Inter-SemiBold',
        fontSize: 17,
    },
    text: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        color: COLORS.secondary
    }
})

export default InforTag;