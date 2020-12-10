import React from "react";

import { Image, Text } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const ButtonContainer = style.View`
    flexDirection: column;
    justifyContent: space-between;
    alignItems: center;
    width: 30%;
    height: 90%
`;

const TopBarContainer = style.View`
    flexDirection: row;
    justifyContent: flex-end;
    width: 100%;
    right: 10%
`;

const BottomBarContainer = style.View`
	flexDirection: row;
    justifyContent: space-around;
    width: 100%;
`;

const Circle = style.TouchableOpacity`
	width: 75;
	height: 50;
	borderWidth: 3;
	borderRadius: 25;
	borderColor: white;
	justifyContent: center;
	alignItems: center;
`;

const Buttons = (/*{ user, brand, product }*/) => {
    return (
        <ButtonContainer>
            <TopBarContainer>
                <Circle>
                    <Feather name="shopping-cart" size={30} color="white" />
                </Circle>
            </TopBarContainer>
            <BottomBarContainer>
                <Circle>
                    <Feather name="user" size={30} color="white" />
                </Circle>
                <Circle>
                    <Image
                        style={{ width: 75, height: 50, borderRadius: 25 }}
                        source={require("../assets/loreal.png")}
                    />
                </Circle>
                <Circle>
                    <Text style={{ fontSize: 30 }}>💄</Text>
                </Circle>
            </BottomBarContainer>
        </ButtonContainer>
    );
};

export default Buttons;
