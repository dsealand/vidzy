import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

import Colors from "./colors";

const ProductContainer = style.View`
    height: 20%;
    width: 100%;
    backgroundColor: ${Colors.white}
    justifyContent: center;
    alignItems: center;
`;

const ProductStripe = ({ product }) => {
    return (
        <ProductContainer>
            <Text>{product.product.name}</Text>
        </ProductContainer>
    );
};

export default ProductStripe;
