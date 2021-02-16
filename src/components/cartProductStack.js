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

import Colors from "./colors";
import CartProduct from "./cartProduct";

const Line = style.View`
    width: 90%;
    height: 3px;
    borderRadius: 1px;
    backgroundColor: ${Colors.lighterGrey};
`;

const Seperator = style.View`
    height: 30px;
    width: 100%;
    justifyContent: center;
    alignItems: center;
`;

const cartProductStack = ({ cart }) => {
    // const [productData, setProductData] = useState([]);

    // useEffect(() => {
    //     console.log("useEffect cartproduct");
    //     setProductData(cart);
    // }, []);

    console.log("cart");
    console.log(cart);
    console.log(cart.cartProducts);
    console.log(cart.cartProducts["items"]);

    // useEffect(() => {
    //     async function getProduct() {
    //         try {
    //             const apiData = await API.graphql(graphqlOperation(queries.listVideos, {id: cartProduct.productID}));
    //             const productData = apiData.data;
    //             setProduct(productData);
    //         } catch (err) {
    //             console.log('error1: ', err);
    //         }
    //     }
    //     getProduct();
    // }, []);

    const itemSeperator = () => {
        return (
            <Seperator>
                <Line />
            </Seperator>
        );
    };
    const renderItem = ({ item }) => <CartProduct cartProduct={item} />;

    return (
        <FlatList
            style={{ width: "100%" }}
            data={cart.cartProducts.items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={itemSeperator}
        />
    );
};

export default cartProductStack;
