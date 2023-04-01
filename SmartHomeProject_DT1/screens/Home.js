import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, images, COLORS } from "../constants";


const Home = () => {
    return (
        <View style={Styles.container}>
            <Text>Home</Text>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: COLORS.light_gray,
    },
});

export default Home;