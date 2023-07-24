import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./Screens/Welcome";

import Tabs from "./Screens/Tabs";
import Details from "./Screens/Details";
import Cart from "./Screens/Cart";
import { Context } from "./Components/Context";
import OrderPlaced from "./Screens/OrderPlaced";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Order"
            component={OrderPlaced}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
};

export default App;
