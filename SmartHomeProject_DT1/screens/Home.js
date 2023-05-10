import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, images, COLORS } from "../constants";
import { WeatherTag, HomeTag, SharedAccessTag, RoomTag } from "../components/HomeComponent"
import { darkColors } from "@rneui/base";

const Home = ({navigation}) => {

    const accessPeople = [
        {
            name: 'Huy Hieu',
            image: images.person1
        },
        {
            name: 'Viet Thang',
            image: images.person2
        },
        {
            name: 'Thanh Phuc',
            image: images.person3
        },
        {
            name: 'Huy Hieu',
            image: images.person3
        },
    ]

    const rooms = [
        {
            name: 'Living Room',
            image: images.livingroom
        },
        {
            name: 'Kitchen',
            image: images.kitchenroom
        },
        {
            name: 'Dining Room',
            image: images.diningroom
        },
        {
            name: 'Bedroom',
            image: images.bedroom
        },
    ];

    return (
        <View style={Styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={Styles.tilte}>
                <Text
                    style={{
                        fontFamily: 'Inter-SemiBold',
                        fontSize: 25,
                        color: COLORS.black
                    }}
                >Hello Hoang Huy!</Text>
                <Text
                    style={{
                        fontFamily: 'Inter-Regular',
                        fontSize: 16,
                    }}
                >Welcome to your Smart Home</Text>
            </View>
            <WeatherTag type=""/>
            <HomeTag 
                titleTag="Shared Access"
                SubTag={SharedAccessTag}
                data={accessPeople}
                styleContainer={Styles.shareAccessContainer}
                type="SHARED_ACCESS"
            />
            <HomeTag 
                titleTag="Rooms"
                SubTag={RoomTag}
                data={rooms}
                styleContainer={Styles.room}
                type="ROOM_TAG"
                navigation={navigation}
            />
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: COLORS.light_gray,

        paddingTop: 100,
        paddingBottom:10
    },
    tilte: {
        width: '90%',
    },
    shareAccessContainer: {
        width: '95%',
        alignSelf: 'flex-end',
    },
    room: {
        width: '95%',
        height: '50%',
        alignSelf: 'flex-end',
    }
});

export default Home;