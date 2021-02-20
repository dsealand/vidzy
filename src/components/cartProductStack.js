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

const cartProductStack = ({ cart, handlerFunction }) => {
    const itemSeperator = () => {
        return (
            <Seperator>
                <Line />
            </Seperator>
        );
    };
    
    const renderItem = ({ item }) => <CartProduct cartProduct={item} likedProduct={item} handler={handlerFunction} />;

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
