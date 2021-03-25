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

import { Auth } from "aws-amplify";

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

const SmallText = style.Text`
    font-size: 15px
    fontFamily: Circular-Std;
    color: ${Colors.black};
    fontWeight: bold;
`;

const SignUp = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState("");
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    async function signUp() {
        console.log("signup");
        try {
            const data = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,          // optional
                }
            });
            if (data.userConfirmed == false) {
                navigation.navigate("Confirm");
            } else {
                navigation.navigate("ForYou");
            }
            // console.log(data);
        } catch (error) {
            if (error.code == 'UsernameExistsException') {
                signIn();
            }
            console.log('error signing up:', error);
        }
    }

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);
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
            {/* <Header>
                <HeaderText>Sign up</HeaderText>
            </Header> */}
            <CenterContainer>
                <ButtonsContainer>
                    <SmallText style={{ color: Colors.lightGrey }}>
                        Register your vidzy account
                    </SmallText>
                    <SmallText style={{ color: Colors.lightGrey }}>
                        {"\n"}
                    </SmallText>
                    <BasicButton>
                        <LoginInfo
                            onChangeText={(text) => onChangeUsername(text)}
                            value={username}
                            placeholder={"username"}
                            keyboardType={"default"}
                            returnKeyType={"send"}
                            placeholderTextColor={Colors.lightGrey}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                            autoCapitalize={'none'}
                        />
                    </BasicButton>
                    <BasicButton>
                        <LoginInfo
                            onChangeText={(text) => onChangeEmail(text)}
                            value={email}
                            placeholder={"email-address"}
                            keyboardType={"email-address"}
                            returnKeyType={"send"}
                            placeholderTextColor={Colors.lightGrey}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                            autoCapitalize={'none'}
                        />
                    </BasicButton>
                    <BasicButton>
                        <LoginInfo
                            onChangeText={(text) => onChangePassword(text)}
                            secureTextEntry={true}
                            value={password}
                            placeholder={"password"}
                            keyboardType={"default"}
                            returnKeyType={"send"}
                            placeholderTextColor={Colors.lightGrey}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                            autoCapitalize={'none'}
                        />
                    </BasicButton>
                    <BasicButton onPress={() => {
                        console.log("sign up"),
                        signUp()}}>
                        <BigText style={{ color: Colors.main }}>Register</BigText>
                    </BasicButton>
                </ButtonsContainer>
            </CenterContainer>
            <Terms>
                <SmallText>You are completely safe.</SmallText>
                <TouchableOpacity>
                    <SmallText style={{ color: Colors.main }}>
                        Read our Terms & Conditions.
                    </SmallText>
                </TouchableOpacity>
            </Terms>
        </Container>
    );
};

export default SignUp;
