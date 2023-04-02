import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, images, COLORS } from "../constants";


const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <View style={Styles.tilte}>
                <Text
                    style={{
                        fontFamily: 'Inter-SemiBold',
                        fontSize: 25
                    }}
                >Hello Danile!</Text>
                <Text>Welcome to your Smart Home</Text>
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: COLORS.light_gray,

        paddingTop: 150,
    },
    tilte: {
        width: '80%',
        backgroundColor: 'red'
    }
});

export default Home;