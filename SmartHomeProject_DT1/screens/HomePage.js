import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";


const HomeStack = createStackNavigator();

const HomePage = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={"Home"}
        >
            <HomeStack.Screen name="Home" component={Home}/>
        </HomeStack.Navigator>
    )
};


export default HomePage;