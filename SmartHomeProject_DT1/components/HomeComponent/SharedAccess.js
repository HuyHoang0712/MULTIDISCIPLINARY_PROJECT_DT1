import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

const SharedAccessTag = ({props, navigation, type=false}) => {
    const {image, name} = props;

    return (
        <View style={Styles.container}>
            <Avatar.Image size={type? 35:50} source={image} />
            {type? (
                <Text style={Styles.text}>{name}</Text>
            ):null}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        alignContent: 'center',
        flexDirection: 'row',
        marginVertical: 5
    },
    text: {
        alignSelf: 'center',
        marginLeft: 5,
        fontFamily: 'Inter-Regular',
        fontSize: 16
    }
})

export default SharedAccessTag;