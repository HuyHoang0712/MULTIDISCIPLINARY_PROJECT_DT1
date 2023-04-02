import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { HomePage } from "../screens";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}
            initialRouteName={"HomePage"}
        >
            <Tab.Screen 
                name="HomePage"
                component={HomePage}
            />
        </Tab.Navigator>
    )
}

export default Tabs;