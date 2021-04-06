import React, { useState } from "react";

import { WebView } from 'react-native-webview';

import { Image, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "./colors";

const Container = style.SafeAreaView`
    flexDirection: column;
    justifyContent: flex-start;
    alignItems: stretch;
    width: 100%;
    height: 100%;
    flex: 1;
`;

const CheckoutWebView = style(WebView)`
    flex: 1;
`;

const TopContainer = style.SafeAreaView`
    backgroundColor: ${Colors.main}
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    width: 100%;
    height: 100%
`;

const Element = style(TouchableOpacity)`
    width: 20%;
    justifyContent: center;
    alignItems: center;
`;

const Checkout = style.Text`
    font-size: 14px;
    fontFamily: Circular-Std;
    color: ${Colors.white};
    fontWeight: bold;
    // flexDirection: row-reverse;
    // alignSelf: center;
`;

const ModalContainer = style.View`
    width: 100%;
    height: 5%;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    justifyContent: flex-end;
    alignItems: center;
    overflow: hidden;
`;

const BigText = style.Text`
    font-size: 14px;
    fontFamily: Circular-Std;
    color: ${Colors.white};
    fontWeight: bold;
`;

const checkoutModal = ({ product, onPressClose }) => {
    return (
        <Container>
            <ModalContainer>
                <TopContainer>
                    <Element />
                    <Element>
                        <BigText style={{ color: Colors.white }}>Checkout</BigText>
                    </Element>
                    <Element onPress={onPressClose}>
                        <Feather
                            name="arrow-down"
                            size={24}
                            color={Colors.white}
                        />
                    </Element>
                </TopContainer>
            </ModalContainer>
            <CheckoutWebView
                source={{ uri: product.link }}
            />
        </Container>

    );
};

export default checkoutModal;
