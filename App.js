import React from "react";

import { SafeAreaView, Text, StyleSheet } from "react-native";
import style from "styled-components/native";

import Explore from "./src/screens/explore";
import Header from "./src/components/header";

const Window = style.SafeAreaView`
	justifyContent: flex-start;
	alignItems: center;
`;

export default function App() {
    return (
        <Window>
            <Explore />
        </Window>
    );
}
