import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { Avatar } from "react-native-paper";

import { Home, UserProfile } from "../screens";
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
                    tabBarIcon: ({ focused }) => (
                        <Avatar.Icon 
                            size={40}
                            icon={focused? icons.home:icons.home_fill}
                            color={focused? COLORS.white:COLORS.primary}
                            style={{
                                backgroundColor: focused? COLORS.primary:COLORS.white
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="UserProfile"
                component={UserProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Avatar.Icon 
                            size={40}
                            icon={focused? icons.user_profile:icons.user_profile_fill}
                            color={focused? COLORS.white:COLORS.primary}
                            style={{
                                backgroundColor: focused? COLORS.primary:COLORS.white
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;