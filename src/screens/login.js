import React from "react";

import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { useWindowDimensions } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Colors from "../components/colors";

const Container = style.View`
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.lighterGrey}
`;

const Logo = style.View`
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 30%;
`;

const LogoText = style.Text`
    font-size: 80px
    fontFamily: Helvetica;
    color: ${Colors.main};
    fontWeight: bold;
`;

const Slogan = style.View`
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 30%;
`;

const BigText = style.Text`
    font-size: 20px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const Buttons = style.View`
    justifyContent: space-around;
    alignItems: center;
    width: 100%;
    height: 25%;
`;

const BasicButton = style(TouchableOpacity)`
    width: 275px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.white}
    borderRadius: 20px;
    shadowColor: ${Colors.lightGrey};
    shadowOpacity: 0.2;
    shadowRadius: 5px;
`;

const SignUp = style.View`
    flex-direction: row;
    height: 50px;
    justifyContent: center;
    alignItems: center;
`;

const SignUpText = style.Text`
    font-size: 15px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const Login = ({ navigation }) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    return (
        <Container style={{ width: width, height: height }}>
            <Logo>
                <LogoText>vidzy.</LogoText>
            </Logo>
            <Slogan>
                <BigText>Video first Shopping</BigText>
            </Slogan>
            <Buttons>
                <BasicButton
                    style={{ backgroundColor: Colors.main }}
                    onPress={() => {
                        navigation.navigate("ForYou");
                    }}
                >
                    <BigText style={{ color: Colors.white }}>
                        Get Started
                    </BigText>
                </BasicButton>
                <BasicButton
                    onPress={() => {
                        navigation.navigate("SignIn");
                    }}
                >
                    <BigText style={{ color: Colors.main }}>Login</BigText>
                </BasicButton>
                <SignUp>
                    <SignUpText>New around here? </SignUpText>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("SignUp");
                        }}
                    >
                        <SignUpText style={{ color: Colors.main }}>
                            Sign up
                        </SignUpText>
                    </TouchableOpacity>
                </SignUp>
            </Buttons>
        </Container>
    );
};

export default Login;
