import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomInput, CustomButton } from "../components";
import { icons, FONTS, COLORS } from "../constants";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = (email, password) => {
    //     if (email === '' || password === '') {
    //         Alert.alert(
    //             "Error!",
    //             "Please enter username and password!",
    //             [
    //                 { text: "OK" }
    //             ]
    //         );
    //     }
    //     else {
    //         // console.log(email, password)
    //         fetch(HOST + "/api/customer/login", {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 email: email,
    //                 password: password,
    //             }),
    //         })
    //             .then(response => response.json())
    //             .then(accountInfo => {
    //                 console.log(accountInfo);
    //                 if (accountInfo.length === 0) {
    //                     Alert.alert(
    //                         "Error!",
    //                         "Invalid email or password!",
    //                         [
    //                             { text: "OK" }
    //                         ]
    //                     );
    //                 }
    //                 else {
    //                     navigation.navigate("Home", { accountInfo: accountInfo[0] })
    //                 };
    //                 return accountInfo;
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             });
    //     }
        navigation.navigate("Main")
    };
    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    };
    return (
        <View style={Styles.container}>
            <View style={Styles.title}>
                 <Image style={Styles.logo} source={icons.smarthome_icon} />
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
                <CustomInput placeholder="Your Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Your Password" value={password} setValue={setPassword} secure={true} />
                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="FOTGOTPASS" />
                <CustomButton text="Sign In" onPress={() => onSignInPressed(email, password)} />
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
