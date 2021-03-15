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

const Confirm = ({ navigation }) => {
    const [username, onChangeUsername] = React.useState("");
    const [code, onChangeCode] = React.useState("");

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    async function createUser() {
        try {
            const cart = await API.graphql(graphqlOperation(mutations.createCart, { input: {} }));
            await API.graphql(graphqlOperation(mutations.createUser, { input: { username: username, cartID: cart.data.createCart.id } }));
        } catch (err) {
            console.log('addToCart new error: ', err);
        }
    }

    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(username, code);
            createUser();
            navigation.navigate("ForYou");
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    async function resendConfirmationCode() {
        try {
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    return (
        <Container behavior="padding" style={{ width: width, height: height }}>
            <BackButton onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={20} color={Colors.main} />
            </BackButton>
            <Header>
                <HeaderText>Confirm Account</HeaderText>
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
                            clearTextOnFocus={true}
                            autoCapitalize={'none'}
                        />
                    </BasicButton>
                    <BasicButton>
                        <LoginInfo
                            onChangeText={(text) => onChangeCode(text)}
                            value={code}
                            placeholder={"code"}
                            keyboardType={"default"}
                            returnKeyType={"done"}
                            placeholderTextColor={Colors.lightGrey}
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            autoCapitalize={'none'}
                        />
                    </BasicButton>
                    <BasicButton onPress={() => {
                        console.log("confirm"),
                            confirmSignUp()
                    }}>
                        <BigText style={{ color: Colors.main }}>Confirm</BigText>
                    </BasicButton>
                    <BasicButton onPress={() => {
                        console.log("confirm"),
                            resendConfirmationCode()
                    }}>
                        <BigText style={{ color: Colors.main }}>Refresh Code</BigText>
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

export default Confirm;
