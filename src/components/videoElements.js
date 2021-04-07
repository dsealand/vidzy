import React, { useState, useEffect } from "react";

import { TouchableOpacity } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import style from "styled-components/native";
import { Feather, Ionicons, Foundation } from "@expo/vector-icons";

import Colors from "./colors";

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

Amplify.configure(awsmobile);

const Container = style.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: flex-end;
    width: 100%;
    height: 100%
`;

const LeftContainer = style.View`
    flexDirection: column;
    justifyContent: flex-end;
    width: 50%;
    left: 1%;
    bottom: 12%;
`;

const RightContainer = style.View`
	flexDirection: column;
    justifyContent: flex-end;
    alignItems: center;
    width: 20%;
    right: 1%;
    bottom: 12%;
`;

const ProductInfo = style.TouchableOpacity`
    flexDirection: column;
    alignItems: flex-start;
    shadowColor: ${Colors.darkGrey};
    shadowOpacity: 1;
    shadowRadius: 10px;
`;

const Element = style.TouchableOpacity`
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    height: 40px;
    shadowColor: ${Colors.darkGrey};
    shadowOpacity: 0.5;
    shadowRadius: 7px;
`;

const BasicText = style.Text`
    font-size: 14px
    fontFamily: Circular-Std;
    color: ${Colors.white};
    textShadowRadius: 1px;
    textShadowColor: ${Colors.darkGrey};
`;

const ProductNameText = style(BasicText)`
    font-size: 17px;
    fontWeight: bold;
`;

const ElementText = style(BasicText)`
    font-size: 11px;
    fontWeight: bold;
`;

const VideoElements = ({
    creator,
    product,
    brand,
    videoLiked,
    likedVideoID,
    videoID,
    onPressCreator,
    onPressProduct,
}) => {
    const [liked, setLiked] = useState(videoLiked);
    const [likedID, setLikedID] = useState(likedVideoID);
    const [exists, setExists] = useState(false);
    const [cartID, setCartID] = useState();
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        console.log("videoElements rendered");
        getCart();
    }, []);

    // setFocused(useIsFocused());

    async function getUser() {
        try {
            const credentials = await Auth.currentCredentials();
            console.log("credentials: ", credentials);
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
        try {
            const username = await getUser();
            console.log("username: ", username);
            const user = await API.graphql(graphqlOperation(queries.listUsers, {
                filter: {
                    username: {
                        eq: username
                    }
                }
            }));
            // console.log("list users query in product modal: ", user);
            setCartID(user.data.listUsers.items[0].cartID);
            const cartProducts = await API.graphql(graphqlOperation(queries.listCartProducts, {
                filter: {
                    cartID: {
                        eq: user.data.listUsers.items[0].cartID
                    }
                }
            }))
            if (cartProducts.data.listCartProducts.items.length != 0) {
                setExists(true);
            }
        } catch (err) {
            console.log("error getting cart: ", err);
        }
    }

    // async function addToCart() {
    //     if (!exists) {
    //         setExists(!exists);
    //         try {
    //             console.log("added item to cart");
    //             await API.graphql(graphqlOperation(mutations.createCartProduct, { input: { cartID: cartID, quantity: 1, productID: product.id, price: product.price } }));
    //         } catch (err) {
    //             console.log('addToCart new error: ', err);
    //         }
    //     } else {
    //         console.log("item exists in cart already");
    //         // try {
    //         //     await API.graphql(graphqlOperation(mutations.updateCartProduct, { input: { cartID: 0, quantity: cartQuantity}}));
    //         // } catch (err) {
    //         //     console.log('addToCart existing error: ', err);
    //         // }
    //     }
    // }    

    async function likePress() {
        if (liked) {
            setLiked(false);
            try {
                await API.graphql(graphqlOperation(mutations.deleteLikedVideo, { input: { id: likedVideoID } }));
            } catch (err) {
                console.log('error deleting liked video: ', err);
            }
            console.log("deleted likedVideo object with id: ", likedID);
        } else {
            setLiked(true);
            try {
                const apiData = await API.graphql(graphqlOperation(mutations.createLikedVideo, { input: { videoID: videoID, userID: 0 } }));
                setLikedID(apiData.data.createLikedVideo.id);
                await API.graphql(graphqlOperation(mutations.createCartProduct, { input: { cartID: cartID, productID: product.id } }));
                console.log("set likedID: ", apiData.data);
            } catch (err) {
                console.log('error liking video and adding to cart: ', err);
            }
            // console.log("created new likedVideo object with id: ", likedID);
        }
    };

    let iconColor = Colors.white;

    if (liked) {
        iconColor = Colors.main;
    }

    return (
        <Container>
            <LeftContainer>
                <ProductInfo onPress={onPressProduct}>
                    <BasicText>{brand.name}</BasicText>
                    <ProductNameText>{product.name}</ProductNameText>
                    <BasicText>$ {product.price}</BasicText>
                </ProductInfo>
            </LeftContainer>
            <RightContainer>
                <Element
                    onPress={
                        likePress
                        // async () => {
                        //     const id = cartID;
                        //     console.log("id: ", id);
                        //     const cartProducts = await API.graphql(graphqlOperation(queries.listCartProducts, {
                        //         filter: {
                        //             cartID: {
                        //                 eq: id
                        //             }
                        //         }
                        //     }))
                        //     console.log("cartProducts: ", cartProducts);
                        //     if (cartProducts.data.listCartProducts.items.length != 0) {
                        //         setExists(true);
                        //     } else {
                        //         setExists(false);
                        //     }
                        //     if (!exists) {
                        //         setExists(!exists);
                        //         try {
                        //             console.log("added item to cart");
                        //             await API.graphql(graphqlOperation(mutations.createCartProduct, { input: { cartID: cartID, productID: product.id } }));
                        //         } catch (err) {
                        //             console.log('addToCart new error: ', err);
                        //         }
                        //     } else {
                        //         console.log("item exists in cart already");
                        //         // try {
                        //         //     await API.graphql(graphqlOperation(mutations.updateCartProduct, { input: { cartID: 0, quantity: cartQuantity}}));
                        //         // } catch (err) {
                        //         //     console.log('addToCart existing error: ', err);
                        //         // }
                        //     }
                        // }
                    }>
                    <Feather name="heart" size={20} color={iconColor} />
                </Element>
                {/* Logic used to hide creator icon when on creator video stack */}
                {creator !== undefined && (
                    <Element onPress={onPressCreator}>
                        <Foundation
                            name="at-sign"
                            size={20}
                            color={Colors.white}
                        />
                        <ElementText>{creator.username}</ElementText>
                    </Element>
                )}
            </RightContainer>
        </Container>
    );
};

export default VideoElements;
