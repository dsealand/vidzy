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

Amplify.configure(awsmobile);

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
    const [quantity, setQuantity] = useState();
    const [exists, setExists] = useState(true);

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

    console.log("product");
    console.log(product);

    if (exists) { return (
        <ProductContainer>
            <TopContainer>
                <View style={styles.shadow}>
                    <ImageBorder onPress={() => setProductModalVisible(true)} />
                </View>
            </TopContainer>
            <BottomContainer>
                <SmallText>{item.name}</SmallText>
            </BottomContainer>
        </ProductContainer>
    )}
    else {
        // this should eventually be an error page if a cart loads incorrectly
        return (<View />)
    }
};

export default likedProduct;
