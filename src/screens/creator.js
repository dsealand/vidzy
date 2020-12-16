import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import VideoStackPage from "../components/videoStackPage";

import api from "../data/creatorStack_api";

const Creator = ({ creator }) => {
    return <VideoStackPage headerText={creator} videoStack={api} />;
};

export default Creator;
