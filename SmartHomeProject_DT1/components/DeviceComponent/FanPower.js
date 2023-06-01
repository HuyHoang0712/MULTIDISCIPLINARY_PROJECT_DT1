import React, { useState, useEffect } from "react";

import { StyleSheet, View, Text, Pressable } from "react-native";

import { HOST, COLORS } from "../../constants";
import { color } from "@rneui/base";
const FanPower = ({setActive}) => {

    const [power, setPower] = useState(0);

    const handlePower = async (power) => {
        setPower(parseInt(power))
        if (parseInt(power) == 0) {
            setActive(0);
        }
        else {
            setActive(1);
        }
        try {
            const response = await fetch(HOST + '/fan/adjust_speed', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: power
                })
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getStatus = async () => {
            try {
                const response = await fetch(HOST + `/fan/get_status`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                let result = await response.json();
                if (parseInt(result) == "0") {
                    setPower(0);
                }
                else if (parseInt(result) == "25") {
                    setPower(1);
                }
                else if (parseInt(result) == "50") {
                    setPower(2);
                }
                else {
                    setPower(3);
                }

            } catch (error) {
                console.error(error);
            }
        };
        getStatus();
    }, []);

    const SubSyles = StyleSheet.create({
        textColor0: {
            color: power == 0 ? COLORS.white : COLORS.black
        },
        textColor1: {
            color: power == 1 ? COLORS.white : COLORS.black
        },
        textColor2: {
            color: power == 2 ? COLORS.white : COLORS.black
        },
        textColor3: {
            color: power == 3 ? COLORS.white : COLORS.black
        },
        bgColor0: {
            backgroundColor: power == 0 ? COLORS.primary : COLORS.white
        },
        bgColor1: {
            backgroundColor: power == 1 ? COLORS.primary : COLORS.white
        },
        bgColor2: {
            backgroundColor: power == 2 ? COLORS.primary : COLORS.white
        },
        bgColor3: {
            backgroundColor: power == 3 ? COLORS.primary : COLORS.white
        }
    })

    return (
        <View style={Styles.container}>
            <Pressable style={[Styles.button, Styles.shadow, SubSyles.bgColor0]} onPress={() => handlePower("0")}>
                <Text style={[Styles.text, SubSyles.textColor0]}>0</Text>
            </Pressable>
            <Pressable style={[Styles.button, Styles.shadow, SubSyles.bgColor1]} onPress={() => handlePower("1")}>
                <Text style={[Styles.text, SubSyles.textColor1]}>1</Text>
            </Pressable>
            <Pressable style={[Styles.button, Styles.shadow, SubSyles.bgColor2]} onPress={() => handlePower("2")}>
                <Text style={[Styles.text, SubSyles.textColor2]}>2</Text>
            </Pressable>
            <Pressable style={[Styles.button, Styles.shadow, SubSyles.bgColor3]} onPress={() => handlePower("3")}>
                <Text style={[Styles.text, SubSyles.textColor3]}>3</Text>
            </Pressable>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'white',

        borderRadius: 10,
    },
    text: {
        fontFamily: 'Inter-Bold',
        fontSize: 18
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})

export default FanPower;