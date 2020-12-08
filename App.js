import React from "react";

import { SafeAreaView, Text, StyleSheet } from "react-native";
import style from "styled-components/native";

import Explore from "./src/screens/explore";
import VideoStack from "./src/components/videoStack";
import VideoCard from "./src/components/videoCard";
import api from "./src/screens/info";

const Window = style.SafeAreaView`
	justifyContent: flex-start;
    alignItems: center;
    backgroundColor: #f2f2f2;
`;

export default function App() {
    return (
        <Window>
            <Explore videos={api} />
        </Window>
    );
}
