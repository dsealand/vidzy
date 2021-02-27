import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { withAuthenticator, AmplifyTheme, Authenticator, Auth } from 'aws-amplify-react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Login from "./login";
import SignIn from "./signin";
import SignUp from "./signup";
import ForYou from "./forYou";
import Creator from "./creator";
import Product from "./product";
import Cart from "./cart";

Amplify.configure(awsmobile);

const Stack = createStackNavigator();

// const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'orange' });
// const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

// <Authenticator theme={MyTheme} />

function Main({ updateAuth }) {
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


export default Main;