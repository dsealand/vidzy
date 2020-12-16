import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import VideoStackPage from "../components/videoStackPage";

import api from "../data/creatorStack_api";

const Creator = ({ route, navigation }) => {
    const { creator, back } = route.params;
    return (
        <VideoStackPage
            navigation={navigation}
            headerText={creator.creator.name}
            videoStack={api}
            back={back}
        />
    );
};

export default Creator;
