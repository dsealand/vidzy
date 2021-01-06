import React from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ForYou from "./src/screens/forYou";
import Creator from "./src/screens/creator";
import Product from "./src/screens/product";
import Cart from "./src/screens/cart";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ForYou">
                <Stack.Screen
                    name="ForYou"
                    component={ForYou}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Creator"
                    component={Creator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
