import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DetailScreen from "../screens/DetailScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {MovieScreen} from "../screens/MovieScreen";

const Stack = createStackNavigator();

export const DetailNavigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name={'Home'}
                    component={HomeScreen}
                    options={{headerShown: false}}
                    />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Movie"
                    component={MovieScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
    );
};

