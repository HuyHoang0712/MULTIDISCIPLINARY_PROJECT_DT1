import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-paper";

import { COLORS } from "../../constants";

const ModeDevide = ({ modeInfor }) => {
    let { name } = modeInfor
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
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
            fontSize: 20
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
        <View
            style={[Styles.container, Styles.shadow]}
        >
            <Text style={Styles.text}>{name}</Text>
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
    )

};



export default ModeDevide;