import React from "react";

import { SafeAreaView, Text, StyleSheet } from "react-native";
import style from "styled-components/native";

import VideoCard from "./src/components/videoCard";
import Explore from "./src/screens/explore";
import api from "./src/screens/info";

const Window = style.SafeAreaView`
	justifyContent: flex-start;
	alignItems: center;
`;

export default function App() {
    return (
        <Window>
            <Explore videos={api} />
        </Window>
    );
}
