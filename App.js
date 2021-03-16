import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { withAuthenticator, AmplifyTheme, Authenticator, Auth } from 'aws-amplify-react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Login from "./src/screens/login";
import SignIn from "./src/screens/signin";
import SignUp from "./src/screens/signup";
import ForYou from "./src/screens/forYou";
import Creator from "./src/screens/creator";
import Product from "./src/screens/product";
import Cart from "./src/screens/cart";
import Confirm from "./src/screens/confirm";
import ForgotPassword from "./src/screens/forgotPassword";
import ForgotPasswordSubmit from "./src/screens/forgotPasswordSubmit";

Amplify.configure(awsmobile);

const Stack = createStackNavigator();

function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Circular-Std': require('./src/assets/fonts/CircularStd-Medium.ttf'),
            }).then(() => setFontsLoaded(true));
        }
        loadFonts();
    })

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
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
                        name="ForgotPassword"
                        component={ForgotPassword}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ForgotPasswordSubmit"
                        component={ForgotPasswordSubmit}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Confirm"
                        component={Confirm}
                        options={{ headerShown: false }}
                    />
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
}

export default App;