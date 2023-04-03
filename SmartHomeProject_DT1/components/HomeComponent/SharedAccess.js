import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

const SharedAccessTag = ({props, navigation}) => {
    const {image} = props;

    return (
        <View style={Styles.container}>
            <Avatar.Image size={50} source={image} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    }
})

export default SharedAccessTag;