import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Switch, Platform, TouchableOpacity, Button, StyleSheet } from "react-native";
import { ImageHeaderScrollView, TriggeringView } from "react-native-image-header-scroll-view";

import { images } from "../constants";

const Light = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [enabled, setEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(!isEnabled);
    const stoggleSwitch = () => setEnabled(!enabled);
    const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 55;

    return (
        <View style={styles.container}>
            <View style={{ marginRight: 300 }}>
                <Button
                    title="ios-menu"
                    backgroundColor={"#767577"}
                    onPress={() => ""}
                />
            </View>
            <StatusBar style="dark" />
            <ImageHeaderScrollView
                maxHeight={396}
                minHeight={MIN_HEIGHT}
                headerImage={images.background_light}
                renderForeground={() => (
                    <View
                        style={{
                            height: 150,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity onPress={() => ""}></TouchableOpacity>
                    </View>
                )}
            >
                <View style={{ height: 1000 }}>
                    <TriggeringView onHide={() => console.log("text hidden")}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={stoggleSwitch}
                            value={enabled}
                        />
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </TriggeringView>
                </View>
            </ImageHeaderScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Light;
