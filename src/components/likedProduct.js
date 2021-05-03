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
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

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

const likedProduct = ({ likedProduct }) => {
    const [product, setProduct] = useState([]);
    // const [exists, setExists] = useState(true);

    useEffect(() => {
        async function getProduct() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.getProduct, { id: likedProduct.productID }));
                const productData = apiData.data.getProduct;
                setProduct(productData);
            } catch (err) {
                console.log('error getting product: ', err);
            }
        }
        getProduct();
    }, []);

    // console.log("product");
    // console.log(product);

    return (
        <ProductContainer>
            <TopContainer>
                <View style={styles.shadow}>
                    {/* <ImageBorder onPress={() => setProductModalVisible(true)} /> */}
                </View>
            </TopContainer>
            <BottomContainer>
                <SmallText>{product.name}</SmallText>
            </BottomContainer>
        </ProductContainer>
    )
};

export default likedProduct;
