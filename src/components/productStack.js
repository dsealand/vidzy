import React, { useState } from "react";

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
import ProductStripe from "./productStripe";

const ProductContainer = style.View`
    height: 110px;
    width: 100%;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`;

const CenterContainer = style.View`
    height: 100%;
    width: 50%;
    justifyContent: center;
`;

const SideContainer = style.View`
    height: 100%;
    width: 25%;
    justifyContent: center;
    alignItems: center;
`;

const ImageBorder = style.View`
    backgroundColor: ${Colors.white}
    width: 80px;
    borderRadius: 40px;
    aspectRatio: 1;
    overflow: hidden;
`;

const BigText = style.Text`
    font-size: 17px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const SmallText = style.Text`
    font-size: 14px
    fontFamily: Helvetica;
    color: ${Colors.main};
    fontWeight: bold;
`;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.darkGrey,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
});

const ProductStack = ({ selection, cart, liked }) => {
    const renderItem = ({ item }) => (
        <ProductContainer>
            <SideContainer>
                <View style={styles.shadow}>
                    <ImageBorder>
                        <View
                            style={{ flex: 1, backgroundColor: item.color }}
                        />
                    </ImageBorder>
                </View>
            </SideContainer>
            <CenterContainer>
                <BigText>{item.product.name}</BigText>
                <BigText style={{ color: Colors.lightGrey }}>
                    {item.product.brand.name}
                </BigText>
                {selection === "Cart" && (
                    <SmallText>Qty: {item.quantity}</SmallText>
                )}
            </CenterContainer>

            <SideContainer />
        </ProductContainer>
    );

    return (
        <View>
            {selection === "Cart" && (
                <FlatList
                    style={{ width: "100%" }}
                    data={cart.products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            )}
            {selection === "Liked" && (
                <FlatList
                    style={{ width: "100%" }}
                    data={liked.products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    );
};

export default ProductStack;
