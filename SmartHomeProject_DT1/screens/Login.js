import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomInput, CustomButton } from "../components";
import { icons, FONTS, COLORS, HOST } from "../constants";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = async (username, password) => {
        if (username === '' || password === '') {
            Alert.alert(
                "Error!",
                "Please enter username and password!",
                [
                    { text: "OK" }
                ]
            );
        } else {
            try {
                const response = await fetch(HOST + "/user/login", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                });
                let result = await response.json();
                console.log(result);
                if (response.status === 200) {
                    navigation.navigate('Main', { accountInfor: result });
                } 
                else {{
                    Alert.alert(
                        "Error!",
                        result + '\nPlease try again!',
                        [
                            { text: "OK" }
                        ]
                    );
                }}
            } catch (error) {
                console.error(error);
            };
        }


    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    };
    return (
        <View style={Styles.container}>
            <View style={Styles.title}>
                <Image style={Styles.logo} source={icons.smarthome_icon} tintColor={COLORS.primary} />
                <View style={Styles.title1}>
                    <Text
                        style={{
                            flex: 2,
                            fontFamily: 'Inter-Black',
                            fontSize: 35,
                            color: COLORS.primary,
                            opacity: 0.85,
                        }}
                    >Smart Home
                    </Text>
                    <Text
                        style={{
                            flex: 1,
                            fontFamily: 'Inter-Regular',
                            fontSize: 15,
                            color: COLORS.black,
                            opacity: 0.85,
                        }}
                    >Multidiscliplinary Project DT1</Text>
                </View>

            </View>
            <View style={Styles.loginpart}>
                <Text
                    style={{
                        fontFamily: 'Inter-Medium',
                        fontSize: 40,
                        color: COLORS.black,
                        opacity: 0.85,
                    }}
                >Sign In
                </Text>
                <CustomInput placeholder="Your Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Your Password" value={password} setValue={setPassword} secure={true} />
                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="FOTGOTPASS" />
                <CustomButton text="Sign In" onPress={() => onSignInPressed(username, password)} />
            </View>

        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 170,
        maxHeight: '80%',
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        height: 70,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title1: {
        flexDirection: "column",
        marginLeft: 10,
    },
    logo: {
        height: 70,
        width: 70,
    },
    loginpart: {
        height: '80%',
        width: "90%",
        marginTop: 50,
        alignItems: "center",
        justifyContent: "flex-start",
    }
});

export default Login;
