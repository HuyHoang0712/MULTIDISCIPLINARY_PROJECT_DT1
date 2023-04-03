import React from "react";
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';
import { COLORS } from "../../constants";

const RoomTag = ({props, navigation}) => {
    const { name, image } = props;
    

    return (
        <Pressable
            onPress={()=> navigation.navigate("Room", {
                roomInfor: props
            })}
        >
            <ImageBackground
                source={image}
                resizeMode="cover"
                imageStyle={{
                    borderRadius: 10,
                    opacity: 0.95,
                }}
                style={{
                    marginRight: 10,
                }}
                >
                <View style={Styles.container}>
                    <Text style={Styles.text}>{name}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        fontFamily: 'Inter-ExtraBold',
        fontSize: 20,
        color: COLORS.white,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default RoomTag;