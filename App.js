import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { withAuthenticator, AmplifyTheme, Authenticator } from 'aws-amplify-react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Login from "./src/screens/login";
import SignIn from "./src/screens/signin";
import SignUp from "./src/screens/signup";
import ForYou from "./src/screens/forYou";
import Creator from "./src/screens/creator";
import Product from "./src/screens/product";
import Cart from "./src/screens/cart";
import Initializing from "./src/screens/initializing";

Amplify.configure(awsmobile);

const Stack = createStackNavigator();

// const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'orange' });
// const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

// <Authenticator theme={MyTheme} />

function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [currentView, setCurrentView] = useState('initializing');

    function updateView(view) {
        setCurrentView(view);
    }

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Circular-Std': require('./src/assets/fonts/CircularStd-Medium.ttf'),
            }).then(() => setFontsLoaded(true));
        }
        loadFonts();

        async function checkAuth() {
            try {
                await Auth.currentAuthenticatedUser()
                console.log('user is signed in')
                setCurrentView('main');
            } catch (err) {
                console.log('user is not signed in')
                setCurrentView('auth');
            }
        }
        checkAuth();
    })

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
                { currentView === 'initializing' && <Initializing />}
                { currentView === 'auth' && <Login updateAuth={updateView} />}
                { currentView === 'main' && <Main updateAuth={updateView} />}
            </>
        )
        //     return (
        //         <NavigationContainer>
        //             <Stack.Navigator initialRouteName="Login">
        //                 <Stack.Screen
        //                     name="Login"
        //                     component={Login}
        //                     options={{ headerShown: false }}
        //                 />
        //                 <Stack.Screen
        //                     name="SignIn"
        //                     component={SignIn}
        //                     options={{ headerShown: false }}
        //                 />
        //                 <Stack.Screen
        //                     name="SignUp"
        //                     component={SignUp}
        //                     options={{ headerShown: false }}
        //                 />
        //                 <Stack.Screen
        //                     name="ForYou"
        //                     component={ForYou}
        //                     options={{ headerShown: false }}
        //                 />
        //                 <Stack.Screen
        //                     name="Creator"
        //                     component={Creator}
        //                     options={{ headerShown: false }}
        //                 />
        //                 <Stack.Screen
        //                     name="Product"
        //                     component={Product}
        //                     options={{ headerShown: false }}
        //                 />
        //                 <Stack.Screen
        //                     name="Cart"
        //                     component={Cart}
        //                     options={{ headerShown: false }}
        //                 />
        //             </Stack.Navigator>
        //         </NavigationContainer>
        //     );
        // }
    }
}

export default App;