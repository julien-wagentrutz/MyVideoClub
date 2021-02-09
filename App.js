import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {MyTabs} from "./src/navigation/BottomTab";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StatusBar} from "expo-status-bar";
import {createStackNavigator} from "@react-navigation/stack";




const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
            <StatusBar />
        </SafeAreaProvider>
    );
}

export default App;

