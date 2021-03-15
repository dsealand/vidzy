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

import { Auth } from 'aws-amplify';

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
    fontFamily: Circular-Std;
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
    fontFamily: Circular-Std;
    color: ${Colors.main};
    fontWeight: bold;
`;

const BigText = style.Text`
    font-size: 20px
    fontFamily: Circular-Std;
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
    fontFamily: Circular-Std;
    color: ${Colors.black};
    fontWeight: bold;
`;

const SignIn = ({ navigation }) => {
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);
            // console.log(user);
            navigation.navigate("ForYou");
        } catch (error) {
            if (error.code == 'UserNotConfirmedException') {
                navigation.navigate("Confirm");
            }
            console.log('error signing in', error);
        }
    }

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
                        <LoginInfo
                            onChangeText={(text) => onChangeUsername(text)}
                            value={username}
                            placeholder={"username"}
                            keyboardType={"default"}
                            returnKeyType={"done"}
                            placeholderTextColor={Colors.lightGrey}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                            autoCapitalize={'none'}
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
                            autoCapitalize={'none'}
                        />
                    </BasicButton>
                    <BasicButton onPress={() => {
                        signIn(),
                        console.log("sign in")}}>
                        <BigText style={{ color: Colors.main }}>Login</BigText>
                    </BasicButton>
                </ButtonsContainer>
            </CenterContainer>
            <Terms>
                <TouchableOpacity>
                    <TermsText style={{ color: Colors.main }}>
                        Forgot password.
                    </TermsText>
                </TouchableOpacity>
            </Terms>
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
