import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { IconButton } from "react-native-paper";

import { icons, COLORS, SIZES } from "../constants";
import { WeatherTag } from "../components/HomeComponent";
import { DeviceManage, DeviceTag } from "../components/RoomComponent";

const Room = ({ navigation, route }) => {
    let { roomInfor } = route.params;

    const devices = [
        {
            name: 'Light',
            icon: icons.light,
            feedName: 'nutnhan2',
            value: 0
        },
        {
            name: 'Sound',
            icon: icons.sound,
            feedName: 'nutnhan2',
            value: 0
        },
        {
            name: 'Fan',
            icon: icons.fan,
            feedName: 'nutnhan1',
            value: 0
        },
        {
            name: 'Heater',
            icon: icons.heater,
            feedName: 'nutnhan2',
            value: 0
        }
    ]

    return (
        <View style={Styles.container}>
            <ImageBackground
                source={roomInfor.image}
                resizeMode="cover"
                style={Styles.background}
                imageStyle={Styles.image}
            >
                <View style={Styles.subcontainer}>
                    <IconButton
                        icon={icons.arrow_back}
                        iconColor={COLORS.white}
                        size={35}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View style={Styles.title}>
                    <Text
                        style={{
                            fontFamily: 'Inter-Bold',
                            fontSize: 30,
                            color: COLORS.black
                        }}
                    >{roomInfor.name}</Text>
                    <Text
                        style={{
                            fontFamily: 'Inter-Regular',
                            fontSize: 15,
                            color: COLORS.white
                        }}
                    >
                        Your living room is connected with 4 devices and 2 users have access to the living room.
                    </Text>
                </View>
                <WeatherTag type="ROOM" />
                <DeviceManage />
                <View style={Styles.deviceContainer}>
                    <View style={Styles.box1}>
                        <DeviceTag device={devices[0]} navigation={navigation} roomInfor={roomInfor}/>
                        <DeviceTag device={devices[1]} navigation={navigation} roomInfor={roomInfor}/>
                    </View>
                    <View style={Styles.box1}>
                        <DeviceTag device={devices[2]} navigation={navigation} roomInfor={roomInfor}/>
                        <DeviceTag device={devices[3]} navigation={navigation} roomInfor={roomInfor}/>
                    </View>
                </View>
                <View style={Styles.energyBox}>
                        <Text
                            style={{
                                fontFamily: 'Inter-Medium',
                                fontSize: 20,
                                color: COLORS.white
                            }}
                        >Power Consumtion</Text>
                        <View style={Styles.box2}>
                            <Text style={Styles.text}>Usage Today:</Text>
                            <Text style={Styles.text}>64 kW</Text>
                        </View>
                        <View style={Styles.box2}>
                            <Text style={Styles.text}>Total:</Text>
                            <Text style={Styles.text}>100 kW</Text>
                        </View>
                </View>
            </ImageBackground>
        </View>

    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 55
    },
    image: {
        opacity: 0.7
    },
    subcontainer: {
        width: '100%',
    },
    title: {
        width: '100%',
        paddingHorizontal: 20
    },
    deviceContainer: {
        width: '90%',
        height: SIZES.width * 0.9,
    },
    energyBox: {
        width: '100%',
        height: 110,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    box1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    box2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        color: COLORS.light_gray
    }
});

export default Room;