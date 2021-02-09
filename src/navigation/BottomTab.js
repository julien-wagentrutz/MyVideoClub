import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../screens/HomeScreen";
import {SearchScreen} from "../screens/SearchScreen";
import {DetailNavigator} from "../navigation/DetailNavigator";
import React from "react";
import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();
const customTabBarStyle = {
    inactiveTintColor: '#fff',
    activeTintColor: Colors.secondaryColor,
    style: {
        backgroundColor: Colors.primaryColor,
        paddingBottom:0,
    },
    indicatorStyle:{

    }
}

export const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={customTabBarStyle}
        >
            <Tab.Screen
                name="Home"
                component={DetailNavigator}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={32} color={color} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={32} color={color} />
                    ,
                }}
            />
        </Tab.Navigator>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'red'
    }
});