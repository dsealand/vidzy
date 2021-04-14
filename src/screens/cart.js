import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

import Colors from "../components/colors";
import CartProductStack from "../components/cartProductStack";
import LikedProductStack from "../components/likedProductStack";

import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";
import awsmobile from "../../aws-exports";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import * as subscriptions from "../../graphql/subscriptions";
import { graphql } from "@apollo/react-hoc";

Amplify.configure(awsmobile);

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
    height: 90%;
    marginTop: 20px;
`;

const BigText = style.Text`
    font-size: 17px;
    fontFamily: Circular-Std;
    color: ${Colors.black};
    fontWeight: bold;
`;

const Element = style(TouchableOpacity)`
    width: 20%;
    alignItems: center;
    justifyContent: center;
`;

const MiddleElement = style(TouchableOpacity)`
    width: 30%
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
    const [price, setPrice] = useState();
    const [flag, setFlag] = useState(false);
    // const [cartData, setCartData] = useState();

    function handler() {
        setFlag(!flag);
        getCart();
    }

    async function signOut() {
        try {
            const credentials = await Auth.currentCredentials();
            if (credentials.authenticated == false) {
                const user = await API.graphql(
                    graphqlOperation(queries.listUsers, {
                        filter: {
                            username: {
                                eq: credentials.accessKeyId,
                            },
                        },
                    })
                );
                await API.graphql(
                    graphqlOperation(mutations.deleteCart, {
                        input: { id: user.data.listUsers.items[0].cartID },
                    })
                );
                await API.graphql(
                    graphqlOperation(mutations.deleteUser, {
                        input: { id: user.data.listUsers.items[0].id },
                    })
                );
                console.log("deleted unauthenticated user and cart objects");
            }
            await Auth.signOut();
            console.log("logout successful");
            navigation.navigate("Login");
        } catch (error) {
            console.log("error signing out: ", error);
        }
    }

    async function getUser() {
        try {
            const credentials = await Auth.currentCredentials();
            if (credentials.authenticated == true) {
                const user = await Auth.currentAuthenticatedUser();
                return user.username;
            } else {
                return credentials.accessKeyId;
            }
        } catch (err) {
            console.log("error getting current guest/authenticated user: ", err);
        }
    }

    async function getCart() {
        console.log("querying cart");
        // const user = await getUser();
        // console.log("username: ", username);
        try {
            const username = await getUser();
            console.log("username: ", username);
            const user = await API.graphql(
                graphqlOperation(queries.listUsers, {
                    filter: {
                        username: {
                            eq: username,
                        },
                    },
                })
            );
            // console.log("list users query: ", user);
            const cart = await API.graphql(
                graphqlOperation(queries.getCart, {
                    id: user.data.listUsers.items[0].cartID,
                })
            );
            // console.log("cart query from list users: ", cart);
            setCart(cart.data.getCart);
        } catch (err) {
            console.log("error getting cart: ", err);
            setCart([]);
        }
    }
    
    useEffect(() => {
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

    if (cart) {
        return (
            <View>
                <Header>
                    <Element onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={20} color={Colors.main} />
                    </Element>
                    <MiddleElement>
                        <BigText style={{ color: Colors.main }}>Liked Videos</BigText>
                    </MiddleElement>
                    <Element onPress={() => signOut()}>
                        <BigText style={{ color: Colors.main }}>Log Out</BigText>
                    </Element>
                </Header>
                <Container style={{ width: width, height: height }}>
                    <ProductContainer>
                        {selection === "Cart" && <CartProductStack cart={cart} handlerFunction={() => handler()} />}
                        {/* {selection === "Liked" && (
                        <LikedProductStack
                            navigation={navigation}
                            liked={cart}
                        />
                    )} */}
                    </ProductContainer>
                    <BottomContainer style={{ height: "0%" }}>
                        {/* {selection === "Cart" && (
                            <BottomContainer>
                                <Checkout>
                                    <CheckoutText>Checkout</CheckoutText>
                                </Checkout>
                                <Price>
                                    <PriceText>Total ${price}</PriceText>
                                </Price>
                            </BottomContainer>
                        )} */}
                    </BottomContainer>
                </Container>
            </View>
        );
    } else {
        // this should eventually be an error page if a cart loads incorrectly
        return <View />;
    }
};


export default Cart;
