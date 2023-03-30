//import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

import { Login } from './screens';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
                "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
                "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);
    if (!fontLoaded) {
        return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}
      >
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserProfile" component={UserProfile} /> */}

      </Stack.Navigator>

    </NavigationContainer>
  );
}