import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import Room from "./Room";


const RoomStack = createStackNavigator();

const RoomPage = () => {
    return (
        <RoomStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={"Room"}
        >
            <RoomStack.Screen name="Room" component={Room}/>
        </RoomStack.Navigator>
    )
};


export default RoomPage;