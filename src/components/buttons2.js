import React from "react";

import { Image, Text } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Colors from "./colors";

const Container = style.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: flex-end;
    width: 100%;
    height: 100%
`;

const LeftContainer = style.View`
    flexDirection: column;
    justifyContent: center;
    width: 50%;
    height: 50%;
    left: 2%;
`;

const RightContainer = style.View`
	flexDirection: column;
    justifyContent: center;
    width: 15%;
    height: 50%;
`;

const Element = style.TouchableOpacity`
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
	width: 100%;
	height: 25%;
`;

const RegularText = style.Text`
    fontSize: 17;
    fontFamily: Helvetica;
    color: ${Colors.white};
`;

const BigBoldText = style.Text`
    fontSize: 20;
    fontFamily: Helvetica;
    fontWeight: bold;
    color: ${Colors.white};
`;

const ElementText = style.Text`
    fontSize: 15;
    fontFamily: Helvetica;
    fontWeight: bold;
    color: ${Colors.white};
`;

const Buttons = (/*{ user, brand, product }*/) => {
    return (
        <Container>
            <LeftContainer>
                <RegularText>Brand</RegularText>
                <BigBoldText>Product Name</BigBoldText>
                <RegularText>$ Price </RegularText>
            </LeftContainer>
            <RightContainer>
                <Element>
                    <Feather name="shopping-cart" size={30} color="white" />
                    <ElementText>Add to Cart</ElementText>
                </Element>
                <Element>
                    <Feather name="user" size={30} color="white" />
                    <ElementText>@Creator</ElementText>
                </Element>
                <Element>
                    <Feather name="pocket" size={30} color="white" />
                    <ElementText>Explore Product</ElementText>
                </Element>
            </RightContainer>
        </Container>
    );
};

export default Buttons;
