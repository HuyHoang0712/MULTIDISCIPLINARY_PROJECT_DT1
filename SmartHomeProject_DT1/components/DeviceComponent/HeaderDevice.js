import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { IconButton,  } from "react-native-paper";

import { images, icons, COLORS } from "../../constants";

const HeaderDevice = ({navigation, roomInfor, type}) => {
    return (
        <View style={Styles.subcontainer}>
            <View>
                <IconButton
                    icon={icons.arrow_back}
                    iconColor={COLORS.black}
                    size={35}
                    onPress={() => navigation.goBack()}
                />
                <Text style={[Styles.text, Styles.smart]}>Smart</Text>
                <Text style={[Styles.text, Styles.light]}>{type}</Text>
                <Text 
                    style={{
                        fontFamily:'Inter-Medium',
                        fontSize: 15,
                        alignSelf:'center'
                    }}
                >{roomInfor.name}</Text>
            </View>
            <Image
                source={type == "LIGHT"? images.light:images.light}
                style={Styles.image}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    subcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        height: 300,
        width: 190,
        resizeMode: 'cover'
    },
    text: {
        fontFamily: 'Inter-Bold',
        fontSize: 40
    },
    light: {
        marginLeft: 70
    },
    smart: {
        marginTop: 40,
        marginLeft: 30
    }
})

export default HeaderDevice;
