import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DetailScreen from "../screens/DetailScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {MovieScreen} from "../screens/MovieScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

export const SearchNavigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name={'Search'}
                    component={SearchScreen}
                    options={{headerShown: false}}
                />
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

