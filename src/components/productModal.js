import React, { useState } from "react";

import {
    Image,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Colors from "./colors";

const Container = style.View`
    flexDirection: column;
    justifyContent: flex-end;
    alignItems: flex-start;
    width: 100%;
    height: 100%;
`;

const ModalContainer = style.View`
    backgroundColor: ${Colors.white}
    width: 100%;
    height: 45%;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    justifyContent: flex-start;
    alignItems: flex-start;
`;

const DownArrow = style(TouchableOpacity)`
    position: absolute;
    top: 17px;
    right: 17px;
`;

const TopContainer = style.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    width: 83%;
    height: 15%
    left: 3%;
`;

const BottomContainer = style.View`
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    width: 100%;
    height: 20%
`;

const ProductScroll = style.View`
    width: 94%;
    height: 60%;
    left: 3%;
    backgroundColor: ${Colors.white};
`;

const BigText = style.Text`
    font-size: 17px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const PriceText = style.Text`
    font-size: 12px;
    fontFamily: Helvetica;
    color: ${Colors.main};
    fontWeight: bold;
`;

const AddToCart = style(TouchableOpacity)`
    backgroundColor: ${Colors.main2};
    borderRadius: 25px;
    width: 150px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
`;

const AddToCartText = style(BigText)`
    color: ${Colors.white};
`;

const MoreVideosText = style(BigText)`
    color: ${Colors.main};
`;

const ProductImageBorder = style.View`
    width: 33%;
    aspectRatio: 1;
    justifyContent: center;
    alignItems: center
`;

const ProductImage = style.View`
    backgroundColor: ${Colors.white};
    borderRadius: 10px;
    width: 85%;
    aspectRatio: 1;
`;

const ColorImageBorder = style.View`
    width: 20%;
    aspectRatio: 1;
    justifyContent: center;
    alignItems: center
`;

const ColorImage = style.View`
    backgroundColor: ${Colors.white};
    width: 50px;
    borderRadius: 25px;
    aspectRatio: 1;
`;

const productModal = ({ navigation, product, onPressClose }) => {
    return (
        <Container>
            <ModalContainer>
                <TopContainer>
                    <BigText>{product.product.name}</BigText>
                    <PriceText>$ {product.product.price}</PriceText>
                </TopContainer>
                <DownArrow onPress={onPressClose}>
                    <Feather name="arrow-down" size={20} color={Colors.main} />
                </DownArrow>
                <ProductScroll></ProductScroll>
                <BottomContainer>
                    <AddToCart>
                        <AddToCartText>Add To Cart</AddToCartText>
                    </AddToCart>
                    <MoreVideosText>More Videos</MoreVideosText>
                </BottomContainer>
            </ModalContainer>
        </Container>
    );
};

export default productModal;
