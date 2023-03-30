import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import TextField from "@mui/material/TextField";

import { icons, COLORS } from "../constants";

const Login = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);
    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.title}>
                <Image style={Styles.logo} source={icons.smarthome_icon} />
                <Text
                    style={{
                        fontFamily: "Inter-Black",
                    }}
                >
                    Smart Home
                </Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    logo: {
        height: 50,
        width: 50,
    },
});

export default Login;
