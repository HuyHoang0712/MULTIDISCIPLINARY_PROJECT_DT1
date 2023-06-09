import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import { HeaderDevice, SliderInput, ModeDevide, AdvancedMode, FanPower } from "../components/DeviceComponent";
import { images, icons, COLORS, HOST } from "../constants";

const Fan = ({ navigation, route }) => {

    let { roomInfor, setActive } = route.params;
    const deviceInfor = {
        name: 'Fan',
        curPower: 0.8
    }


    const [autoMode, setAutoMode] = useState(0);
    const [savePower, setSavePower] = useState(0);

    useEffect(() => {
        const getStatus = async (mode) => {
            try {
                const response = await fetch(HOST + `/fan/${mode}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                let result = await response.json();
                setAutoMode(parseInt(result));

            } catch (error) {
                console.error(error);
                return 0;
            }
        };
        getStatus('auto_mode');
    }, []);

    const controlAutoMode = async () => {
        setAutoMode(autoMode == 0 ? 1 : 0)
        try {
            const response = await fetch(HOST + '/fan/handle_autoMode', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: autoMode === 0 ? '1' : '0'
                })
            })
        } catch (error) {
            console.error(error);
        }
    };

    const deviceMode = [
        {
            name: 'Auto Mode',
            active: autoMode,
            setActive: controlAutoMode,
        },
        {
            name: 'Saving Energy Mode',
            active: savePower,
            setActive: null,
        },
    ]

    const advancedMode = [
        {
            name: "Sleep",
            start_time: "22:00",
            end_time: "6:00"
        },
        {
            name: "Fan Spinning Mode",
            start_time: "20:00",
            end_time: "21:00"
        },
    ]


    return (
        <View style={Styles.container}>
            <HeaderDevice navigation={navigation} roomInfor={roomInfor} type="Fan" />
            <FanPower setActive={setActive} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
                style={Styles.scrollview}
            >
                {deviceMode.map((mode, index) =>
                    <ModeDevide key={index} modeInfor={mode} />
                )}
                {advancedMode.map((mode, index) =>
                    <AdvancedMode key={index} modeInfor={mode} />
                )}
            </ScrollView>

        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 55,
        paddingBottom: 20,
        backgroundColor: COLORS.light_gray
    },
    scrollview: {
        width: '100%',
        paddingBottom: 10,
        marginTop: 20
    }
})

export default Fan;
