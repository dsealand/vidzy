import React, { useState, useEffect } from "react";

import {
    View,
    Modal,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

import Colors from "./colors";
import ProductModal from "./productModal";
import LikedProduct from "./likedProduct";

// import productAPI from "../data/productInfo_api";

const ProductContainer = style.View`
    height: 200px;
    width: 50%;
    justifyContent: center;
    alignItems: center;
`;

const TopContainer = style.View`
    height: 80%;
    width: 100%;
    justifyContent: center;
    alignItems: center;
`;

const ImageBorder = style(TouchableOpacity)`
    backgroundColor: ${Colors.white}
    width: 85%;
    borderRadius: 20px;
    aspectRatio: 1;
    overflow: hidden;
`;

const BottomContainer = style.View`
    height: 20%;
    width: 90%;
    flexDirection: row;
    alignSelf: flex-end;
    alignItems: center;
`;

const SmallText = style.Text`
    font-size: 14px
    fontFamily: Circular-Std;
    color: ${Colors.black};
    fontWeight: bold;
`;

const separator = style.View`
    height: 30px;
    width: 100%;
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

const LikedProductStack = ({ navigation, liked }) => {
    const [productModalVisible, setProductModalVisible] = useState(false);

    const renderItem = ({ item }) => <LikedProduct likedProduct={item} />;

    return (
        <View>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={productModalVisible}
                transparent={true}
            >
                <ProductModal
                    navigation={navigation}
                    product={product}
                    onPressClose={() => setProductModalVisible(false)}
                />
            </Modal> */}
            <FlatList
                style={{ width: "100%" }}
                data={liked.likedProducts.items}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={separator}
            />
        </View>
    );
};

export default LikedProductStack;
