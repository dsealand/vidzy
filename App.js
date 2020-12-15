import React from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ForYou from "./src/screens/forYou";
import VideoStack from "./src/components/videoStack";
import VideoCard from "./src/components/videoCard";
import VideoPlayer from "./src/components/videoPlayer";
import { Video } from "expo-av";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

Amplify.configure(awsconfig);

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App