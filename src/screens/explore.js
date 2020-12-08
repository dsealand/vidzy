import React from "react";

import { View, FlatList } from "react-native";
import style from "styled-components/native";

import VideoStack from "../components/videoStack";

const Explore = ({ videos }) => {
    return <VideoStack videos={videos} />;
};

export default Explore;
