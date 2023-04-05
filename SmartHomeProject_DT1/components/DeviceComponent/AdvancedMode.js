import React, { useState } from "react";

import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Switch } from "react-native-paper";

import { COLORS, icons } from "../../constants";

const AdvancedMode = ({ modeInfor }) => {
    let { name, start_time, end_time } = modeInfor
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const Styles = StyleSheet.create({
        container: {
            width: '90%',
            marginBottom: 20,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: isSwitchOn ? COLORS.primary : COLORS.white,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        text: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 20,
            color: isSwitchOn ? COLORS.white : COLORS.black
        },
        setting: {
            flexDirection: 'row',
            alignItems: 'center',
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
    });

    return (
        <Pressable
            style={{ width: '100%', alignItems: 'center', }}
        >
            <View
                style={[Styles.container, Styles.shadow]}
            >

                <View>
                    <Text style={Styles.text}>{name}</Text>
                    <View style={Styles.setting}>
                        <Image
                            source={icons.timer}
                            tintColor={isSwitchOn ? COLORS.white : COLORS.black}
                        ></Image>
                        <Text
                            style={{
                                fontFamily: 'Inter-Regular',
                                color: isSwitchOn ? COLORS.white : COLORS.black
                            }}
                        >{start_time} - {end_time}</Text>
                    </View>
                </View>

                <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    color={COLORS.primary}
                    style={{
                        borderRadius: 15,
                        borderWidth: 2,
                        borderColor: COLORS.white
                    }}
                >
                </Switch>
            </View>

        </Pressable>

    )

};



export default AdvancedMode;