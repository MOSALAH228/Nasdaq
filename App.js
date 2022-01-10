import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { NativeBaseProvider } from "native-base";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplachScreen from "./Components/SplachScreen";
import Home from "./Components/Home";
import Details from "./Components/Details";

// const Navigator = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SplachScreen></SplachScreen>

      {/* <NativeBaseProvider>
        <NavigationContainer>
          <Navigator.Navigator>
            <Navigator.Screen component={SplachScreen} name="SplachScreen" />
            <Navigator.Screen component={Home} name="Home" />
            <Navigator.Screen component={Details} name="Details" />
          </Navigator.Navigator>
        </NavigationContainer>
      </NativeBaseProvider> */}
    </SafeAreaProvider>
  );
}
