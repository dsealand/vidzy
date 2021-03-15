import React, { useEffect } from "react";

import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { useWindowDimensions } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

import awsmobile from '../../aws-exports';

import Colors from "../components/colors";

Amplify.configure(awsmobile)

const Container = style.View`
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.lightestGrey}
`;

const Logo = style.View`
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 30%;
`;

const LogoText = style.Text`
    font-size: 80px
    fontFamily: Circular-Std;
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
    fontFamily: Circular-Std;
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
    flexDirection: row;
    height: 50px;
    justifyContent: center;
    alignItems: center;
`;

const SignUpText = style.Text`
    font-size: 15px
    fontFamily: Circular-Std;
    color: ${Colors.black};
    fontWeight: bold;
`;

const Login = ({ navigation }) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    useEffect(() => {
        
    }, []);

    async function getCredentials() {
        try {
            const credentials = await Auth.currentCredentials();
            return credentials;
        } catch (err) {
            console.log("error getting credentials: ", err);
        }
    }

    // create user with given ID
    async function createUser(userID) {
        try {
            const cart = await API.graphql(graphqlOperation(mutations.createCart, { input: {} }));
            const user = await API.graphql(graphqlOperation(mutations.createUser, { input: { username: userID, cartID: cart.data.createCart.id} }));            
        } catch (err) {
            console.log('error creating user: ', err);
        }
    }

    // create guest user after checking that credentials are not authenticated
    async function createGuest() {
        const credentials = await getCredentials();
        try {
            if (credentials.authenticated == false) {
                createUser(credentials.accessKeyId);
                console.log("created guest user");
            } else {
                console.log("user already authenticated");
            }
        } catch (err) {
            console.log("error creating guest user: ", err);
        }
    }

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
                        createGuest();
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
        </Container >
    );
};

export default Login;
