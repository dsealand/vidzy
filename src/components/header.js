import React from "react";

import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import style from "styled-components/native";

import Colors from "./colors";

const Header = ({ text }) => {
    return <Text style={styles.logo}>Explore</Text>;
};

const styles = StyleSheet.create({
    logo: {
        fontSize: 80,
        fontFamily: "Circular-Std",
        fontWeight: "bold",
        color: Colors.darkGrey,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: "blue",
        letterSpacing: 7,
    },
});

export default Header;
