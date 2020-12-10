import React from "react";

import { View, FlatList, Text } from "react-native";
import style from "styled-components/native";

import Colors from "../components/colors";
import Header from "../components/header";
import VideoStack from "../components/videoStack";

import api from "./info";

const Window = style.View`
	justifyContent: flex-start;
    alignItems: center;
    backgroundColor: ${Colors.lightGrey};
`;

const Explore = () => {
    return (
        <Window>
            <VideoStack videos={api} />
        </Window>
    );
};

export default Explore;
