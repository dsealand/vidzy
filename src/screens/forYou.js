import React from "react";

import { View, FlatList, Text } from "react-native";
import style from "styled-components/native";

import Colors from "../components/colors";
import Header from "../components/header";
import VideoStack from "../components/videoStack";

import api from "./info";

const Explore = () => {
    return <VideoStack stack={api} />;
};

export default Explore;
