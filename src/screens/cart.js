import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

import Colors from "../components/colors";
import CartProductStack from "../components/cartProductStack";
import LikedProductStack from "../components/likedProductStack";
import api from "../data/cart_api";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

Amplify.configure(awsmobile);

// const cart = api[0];
const liked = api[1];
// var cart2 = [];

const Container = style.View`
    justifyContent: flex-end;
    alignItems: center;
    backgroundColor: ${Colors.lightestGrey}
`;

const Header = style.View`
    position: absolute;
    width: 100%
    top: 60px;
    z-index: 1;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
`;

const ProductContainer = style.View`
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 70%;
`;

const BigText = style.Text`
    font-size: 17px;
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const Element = style(TouchableOpacity)`
    width: 20%;
    alignItems: center;
    justifyContent: center;
`;

const BottomContainer = style.View`
    width: 100%;
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
`;

const Checkout = style(TouchableOpacity)`
    backgroundColor: ${Colors.main};
    borderRadius: 25px;
    width: 40%;
    height: 50px;
    justifyContent: center;
    alignItems: center;
`;

const CheckoutText = style(BigText)`
    color: ${Colors.white};
`;

const Price = style.View`
    width: 40%;
    justifyContent: center;
    alignItems: center;
`;

const PriceText = style(BigText)`
    color: ${Colors.main};
`;

const Cart = ({ navigation }) => {
    const [selection, setSelection] = useState("Cart");
    const [cart, setCart] = useState(false);

    useEffect(() => {
        async function getCart() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.getCart, {id: 0}));
                const cart = apiData.data.getCart;
                setCart(cart);
            } catch (err) {
                console.log('cart error: ', err);
            }
        }
        getCart();
    }, []);

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    let cartColor = Colors.main;
    let likedColor = Colors.lightGrey;

    if (selection === "Liked") {
        cartColor = Colors.lightGrey;
        likedColor = Colors.main;
    }

    if (cart) { return (
        <View>
            <Header>
                <Element onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={20} color={Colors.main} />
                </Element>
                <TouchableOpacity
                    onPress={() => {
                        setSelection("Cart");
                    }}
                >
                    <BigText style={{ color: cartColor }}>Cart</BigText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setSelection("Liked");
                    }}
                >
                    <BigText style={{ color: likedColor }}>Liked</BigText>
                </TouchableOpacity>
                <Element />
            </Header>
            <Container style={{ width: width, height: height }}>
                <ProductContainer>
                    {selection === "Cart" && <CartProductStack cart={cart} />}
                    {selection === "Liked" && (
                        <LikedProductStack
                            navigation={navigation}
                            liked={liked}
                        />
                    )}
                </ProductContainer>
                <BottomContainer style={{ height: "15%" }}>
                    {selection === "Cart" && (
                        <BottomContainer>
                            <Checkout>
                                <CheckoutText>Checkout</CheckoutText>
                            </Checkout>
                            <Price>
                                <PriceText>Total ${cart.price}</PriceText>
                            </Price>
                        </BottomContainer>
                    )}
                </BottomContainer>
            </Container>
        </View>
    )}

    else {
        // this should eventually be an error page if a cart loads incorrectly
        return (<View/>)
    }

};

export default Cart;
