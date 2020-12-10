import React from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "./src/screens/explore";
import VideoStack from "./src/components/videoStack";
import VideoCard from "./src/components/videoCard";
import VideoPlayer from "./src/components/videoPlayer";
import Header from "./src/components/header";
import { Video } from "expo-av";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Explore">
                <Stack.Screen
                    name="Explore"
                    component={Explore}
                    options={{
                        headerTitle: (props) => <Header {...props} />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
