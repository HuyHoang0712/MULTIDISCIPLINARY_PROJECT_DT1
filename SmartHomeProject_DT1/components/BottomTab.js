import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;