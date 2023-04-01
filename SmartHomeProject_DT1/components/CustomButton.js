import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { 
    COLORS, 
} from '../constants'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[Styles.container, Styles[`container_${type}`]]}>
            <Text style={[Styles.text, Styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: COLORS.primary,
    },

    container_FOTGOTPASS: {
        
    },


    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    text_FOTGOTPASS: {
        alignSelf: 'flex-end',
        color: COLORS.primary,
        fontSize: 15
    },
})

export default CustomButton;