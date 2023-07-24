import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Searches from "./Searches";
import Cart from "./Cart";
import Profile from "./Profile";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colorful.primary,
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="home" size={24} color="white" />
              </View>
            ) : (
              <AntDesign name="home" size={24} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Searches"
        component={Searches}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colorful.primary,
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="search1" size={24} color="white" />
              </View>
            ) : (
              <AntDesign name="search1" size={24} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colorful.primary,
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="shopping-cart" size={24} color="white" />
              </View>
            ) : (
              <Feather name="shopping-cart" size={24} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colorful.primary,
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="person" size={24} color="white" />
              </View>
            ) : (
              <Ionicons name="person-outline" size={24} color="grey" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
