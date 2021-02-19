import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { withAuthenticator, AmplifyTheme, Authenticator, Auth } from 'aws-amplify-react-native'

import Login from "./src/screens/login";
import SignIn from "./src/screens/signin";
import SignUp from "./src/screens/signup";
import ForYou from "./src/screens/forYou";
import Creator from "./src/screens/creator";
import Product from "./src/screens/product";
import Cart from "./src/screens/cart";

Amplify.configure(awsmobile);

const Stack = createStackNavigator();

// const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'orange' });
// const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

// <Authenticator theme={MyTheme} />

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ForYou">
                {/* <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                /> */}
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

export default withAuthenticator(App);