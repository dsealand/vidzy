import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Colors from "./colors";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

import { WebView } from 'react-native-webview';

Amplify.configure(awsmobile);

const ProductContainer = style.View`
    height: 200px;
    width: 100%;
    justifyContent: center;
    alignItems: center;
`;

const TopContainer = style.View`
    height: 80%;
    width: 100%;
    flexDirection: row;
    justifyContent: flex-start;
    alignItems: center;
`;

const RightContainer = style.View`
    height: 100%;
    width: 50%;
    justifyContent: center;
`;

const LeftContainer = style.View`
    height: 100%;
    width: 50%;
    justifyContent: center;
    alignItems: center;
`;

const ImageBorder = style.View`
    backgroundColor: ${Colors.white}
    width: 85%;
    borderRadius: 20px;
    aspectRatio: 1;
    overflow: hidden;
`;

const BottomContainer = style.View`
    height: 20%;
    width: 100%;
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
`;

const QuantityContainer = style.View`
    width: 20%;
    height: 100%;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
`;

const Element = style(TouchableOpacity)`
    width: 25%;
    alignItems: center;
    justifyContent: center;
    flexDirection: row;
`;

const ColorImageSpacer = style.View`
    aspectRatio: 1;
    width: 75px;
    justifyContent: center;
    alignItems: center
`;

const ColorImageCircle = style(TouchableOpacity)`
    backgroundColor: ${Colors.white}
    width: 50px;
    borderRadius: 25px;
    aspectRatio: 1;
    overflow: hidden;
`;

const SmallText = style.Text`
    font-size: 14px
    fontFamily: Circular-Std;
    color: ${Colors.black};
`;

const BigText = style.Text`
    font-size: 14px;
    fontFamily: Circular-Std;
    color: ${Colors.white};
    fontWeight: bold;
`;

const TouchText = style(TouchableOpacity)`
    backgroundColor: ${Colors.white}
`;

const Checkout = style(TouchableOpacity)`
    backgroundColor: ${Colors.main};
    borderRadius: 25px;
    width: 30%;
    height: 100%;
    justifyContent: center;
    alignItems: center;
`;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.darkGrey,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
});

const cartProduct = ({ cartProduct, likedProduct, handler, refresh }) => {
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState();
    const [exists, setExists] = useState(true);
    // const [liked, setLiked] = useState(false);

    useEffect(() => {
        async function getProduct() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.getProduct, { id: cartProduct.productID }));
                const productData = apiData.data.getProduct;
                setProduct(productData);
                setQuantity(cartProduct.quantity);
            } catch (err) {
                console.log('error1: ', err);
            }
        }
        getProduct();
    }, []);

    async function deleteItem() {
        setQuantity(0);
        setExists(false);
        try {
            await API.graphql(graphqlOperation(mutations.deleteCartProduct, { input: { id: cartProduct.id } }))
        } catch (err) {
            console.log("minus quantity error: ", err);
        }
    }

    async function checkout() {
        console.log("webview");
        return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
    }

    // console.log("product");
    // console.log(product);

    const renderColorListItem = ({ item }) => {
        return (
            <ColorImageSpacer>
                <View style={styles.shadow}>
                    <ColorImageCircle>
                        <View
                            style={{ flex: 1, backgroundColor: item.asset }}
                        />
                    </ColorImageCircle>
                </View>
            </ColorImageSpacer>
        );
    };
    if (exists) {
        return (
            <ProductContainer>
                <TopContainer>
                    <LeftContainer>
                        <View style={styles.shadow}>
                            <ImageBorder />
                        </View>
                    </LeftContainer>
                    <RightContainer>
                        <SmallText style={{ fontWeight: "bold" }}>
                            {product.name}
                        </SmallText>
                        <SmallText style={{ color: Colors.lightGrey }}>
                            {product.name}
                        </SmallText>
                        <SmallText style={{ color: Colors.main }}>
                            $ {product.price}
                        </SmallText>
                        <View style={{ justifyContent: "center", height: "50%" }}>
                            <FlatList
                                data={product.colors}
                                renderItem={renderColorListItem}
                                horizontal={true}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </RightContainer>
                </TopContainer>
                <BottomContainer>
                    <Element onPress={() => {deleteItem()}}>
                        <Feather
                            name="trash-2"
                            size={20}
                            color={Colors.main}
                        />
                        <SmallText> Delete</SmallText>
                    </Element>
                    <Checkout onPress={() => {checkout()}}>
                        <BigText>Checkout</BigText>
                    </Checkout>
                    {/* <Element onPress={() => checkout()}>
                        <SmallText>
                            Checkout
                        </SmallText>
                    </Element> */}
                    {/* <QuantityContainer>
                        <Element>
                            <Feather
                                name="minus"
                                size={20}
                                color={Colors.main}
                                onPress={
                                    async () => {
                                        if (quantity > 1) {
                                            setQuantity(quantity - 1);
                                            try {
                                                await API.graphql(graphqlOperation(mutations.updateCartProduct, {
                                                    input: {
                                                        id: cartProduct.id,
                                                        quantity: quantity,
                                                    }
                                                }))
                                            } catch (err) {
                                                console.log("minus quantity error: ", err);
                                            }
                                        } else {
                                            setQuantity(0);
                                            setExists(false);
                                            try {
                                                await API.graphql(graphqlOperation(mutations.deleteCartProduct, { input: { id: cartProduct.id } }))
                                            } catch (err) {
                                                console.log("minus quantity error: ", err);
                                            }
                                        }
                                    }
                                }
                            />
                        </Element>
                        <SmallText style={{ fontWeight: "bold" }}>
                            {quantity}
                        </SmallText>
                        <Element>
                            <Feather
                                name="plus"
                                size={20}
                                color={Colors.main}
                                onPress={
                                    handler(),
                                    async () => {
                                        setQuantity(quantity + 1);
                                        try {
                                            await API.graphql(graphqlOperation(mutations.updateCartProduct, {
                                                input: {
                                                    id: cartProduct.id,
                                                    quantity: quantity
                                                }
                                            }))
                                        } catch (err) {
                                            console.log("error: ", err);
                                        }
                                    }
                                } />
                        </Element>
                    </QuantityContainer> */}
                    {/* <Element>
                    <Feather
                        name="heart"
                        size={20}
                        color={Colors.main}
                        onPress={
                            async () => {

                            }
                        }/>
                    <SmallText> Like</SmallText>
                </Element> */}
                </BottomContainer>
            </ProductContainer>
        )
    }
    else {
        // this should eventually be an error page if a cart loads incorrectly
        return (<View />)
    }
};

export default cartProduct;
