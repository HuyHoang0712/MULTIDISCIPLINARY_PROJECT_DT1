import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';

import { icons, COLORS } from "../../constants";
const SharedAccessTag = ({ props, navigation, type=false, remove = null }) => {
    const {image, name, id} = props;

    return (
        <View style={Styles.container}>
            <Avatar.Image size={type? 35:50} source={image} />
            {type? (
                <View style={Styles.subContainer}> 
                    <Text style={Styles.text}>{name}</Text>
                    <IconButton icon={icons.remove_person} size={20} iconColor={COLORS.primary} style={{backgroundColor: 'transparent'}} onPress={() => remove(id)}/>
                </View>
            ):null}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
    },
    subContainer:{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        alignSelf: 'center',
        marginLeft: 5,
        fontFamily: 'Inter-Regular',
        fontSize: 16
    }
})

export default SharedAccessTag;