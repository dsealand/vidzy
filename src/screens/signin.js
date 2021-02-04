import React from "react";

import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import { useWindowDimensions } from "react-native";
import style from "styled-components/native";
import { Feather, Ionicons } from "@expo/vector-icons";

import Colors from "../components/colors";

const Container = style(KeyboardAvoidingView)`
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.lightestGrey}
`;

const BackButton = style(TouchableOpacity)`
    position: absolute;
    top: 60px;
    left: 5%;
`;

const Header = style.View`
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 15%;
`;

const HeaderText = style.Text`
    font-size: 50px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const CenterContainer = style.View`
    justifyContent: space-between;
    alignItems: center;
    height: 35%;
`;

const ButtonsContainer = style.View`
    justifyContent: space-between;
    alignItems: center;
    width: 100%;
    height: 40%;
`;

const LoginInfo = style(TextInput)`
    height: 100%;
    width: 90%
    font-size: 20px
    fontFamily: Helvetica;
    color: ${Colors.main};
    fontWeight: bold;
`;

const BigText = style.Text`
    font-size: 20px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const BasicButton = style(TouchableOpacity)`
    width: 275px;
    height: 50px;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.white}
    borderRadius: 20px;
    shadowColor: ${Colors.lightGrey};
    shadowOpacity: 0.2;
    shadowRadius: 5px;
`;

const Terms = style.View`
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    top: 10%;
`;

const TermsText = style.Text`
    font-size: 15px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const SignIn = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    return (
        <Container behavior="padding" style={{ width: width, height: height }}>
            <BackButton onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={20} color={Colors.main} />
            </BackButton>
            <Header>
                <HeaderText>Sign in</HeaderText>
            </Header>
            <CenterContainer>
                <ButtonsContainer>
                    <BasicButton>
                        <BigText>Sign in with </BigText>
                        <Ionicons
                            name="logo-apple"
                            size={20}
                            color={Colors.black}
                        />
                    </BasicButton>
                    <BasicButton>
                        <BigText style={{ color: "#4285F4" }}>
                            Sign in with{" "}
                        </BigText>
                        <Ionicons
                            name="logo-google"
                            size={20}
                            color="#4285F4"
                        />
                    </BasicButton>
                </ButtonsContainer>
                <ButtonsContainer>
                    <BasicButton>
                        <LoginInfo
                            onChangeText={(text) => onChangeEmail(text)}
                            value={email}
                            placeholder={"email address"}
                            keyboardType={"email-address"}
                            returnKeyType={"done"}
                            placeholderTextColor={Colors.lightGrey}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                        />
                    </BasicButton>
                    <BasicButton>
                        <LoginInfo
                            onChangeText={(text) => onChangePassword(text)}
                            value={password}
                            placeholder={"password"}
                            keyboardType={"default"}
                            returnKeyType={"done"}
                            placeholderTextColor={Colors.lightGrey}
                            secureTextEntry={true}
                            autoCorrect={false}
                            clearTextOnFocus={true}
                        />
                    </BasicButton>
                </ButtonsContainer>
            </CenterContainer>
            <Terms>
                <TermsText>You are completely safe.</TermsText>
                <TouchableOpacity>
                    <TermsText style={{ color: Colors.main }}>
                        Read our Terms & Conditions.
                    </TermsText>
                </TouchableOpacity>
            </Terms>
        </Container>
    );
};

export default SignIn;
