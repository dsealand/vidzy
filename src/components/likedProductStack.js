import React, { useState } from "react";

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

import productAPI from "../data/productInfo_api";

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
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const Seperator = style.View`
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

    const renderItem = ({ item }) => (
        <ProductContainer>
            <TopContainer>
                <View style={styles.shadow}>
                    <ImageBorder onPress={() => setProductModalVisible(true)} />
                </View>
            </TopContainer>
            <BottomContainer>
                <SmallText>{item.product.name}</SmallText>
            </BottomContainer>
        </ProductContainer>
    );

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={productModalVisible}
                transparent={true}
                /* onShow={ trigger API call to get product info to pass as prop to CreatorModal } */
            >
                <ProductModal
                    navigation={navigation}
                    product={productAPI[0]}
                    onPressClose={() => setProductModalVisible(false)}
                />
            </Modal>
            <FlatList
                style={{ width: "100%" }}
                data={liked.products}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Seperator}
            />
        </View>
    );
};

export default LikedProductStack;
