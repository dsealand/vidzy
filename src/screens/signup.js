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

import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';

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

const SmallText = style.Text`
    font-size: 15px
    fontFamily: Circular-Std;
    color: ${Colors.black};
    fontWeight: bold;
`;

Amplify.configure(awsmobile);

const SignUp = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState("");
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return (
        <Container behavior="padding" style={{ width: width, height: height }}>
            <BackButton onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={20} color={Colors.main} />
            </BackButton>
            <Header>
                <HeaderText>Sign up</HeaderText>
            </Header>
            <CenterContainer>
                {/* <ButtonsContainer>
                    <BasicButton>
                        <BigText>Sign up with </BigText>
                        <Ionicons
                            name="logo-apple"
                            size={20}
                            color={Colors.black}
                        />
                    </BasicButton>
                    <BasicButton>
                        <BigText style={{ color: "#4285F4" }}>
                            Sign up with{" "}
                        </BigText>
                        <Ionicons
                            name="logo-google"
                            size={20}
                            color="#4285F4"
                        />
                    </BasicButton>
                </ButtonsContainer> */}
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
                        />
                    </BasicButton>
                    <BasicButton>
                        <LoginInfo
                            onChangeText={(text) => onChangeEmail(text)}
                            value={email}
                            placeholder={"email"}
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
                    <BasicButton
                        style={{ backgroundColor: Colors.main }}
                        onPress={() => {
                            signUp();
                            // async () => {
                            //     try {
                            //         const data = await Auth.signUp({
                            //             username,
                            //             password,
                            //             attributes: {
                            //                 email,
                            //             }
                            //         });
                            //         console.log(data);
                            //     } catch (error) {
                            //         console.log('error signing up:', error);
                            //     }
                            // }
                        }}
                    >
                        <BigText style={{ color: Colors.white }}>
                            Register
                        </BigText>
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
