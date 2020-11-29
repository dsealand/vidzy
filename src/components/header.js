import React from "react";

import { View, Text, StyleSheet } from "react-native";
import style from "styled-components/native";

const Logo = style.View`
    alignSelf: flex-start;
`;

const Header = (/*{ video, poster }*/) => {
    return (
        <Logo>
            <Text style={styles.logo}>Vidzy</Text>
        </Logo>
    );
};

const styles = StyleSheet.create({
    logo: {
        fontSize: 50,
        fontFamily: "Helvetica",
        fontWeight: "bold",
        color: "white",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: "grey",
        letterSpacing: 7,
    },
});

export default Header;
