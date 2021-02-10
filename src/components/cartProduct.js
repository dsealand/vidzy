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
import { Picker } from "@react-native-picker/picker";

import Colors from "./colors";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

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
    fontFamily: Helvetica;
    color: ${Colors.black};
`;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.darkGrey,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
});

const cartProduct = ({ cartProduct }) => {
    const [product, setProduct] = useState([]);
    const renderColorListItem = ({ item }) => {
        return (
            <ColorImageSpacer>
                <View style={styles.shadow}>
                    <ColorImageCircle>
                        <View
                            style={{ flex: 1, backgroundColor: item.color }}
                        />
                    </ColorImageCircle>
                </View>
            </ColorImageSpacer>
        );
    };

    useEffect(() => {
        async function getProduct() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.getProduct, {id: product.productID}));
                const apiProduct = apiData.data.getProduct;
                setProduct(apiProduct);
            } catch (err) {
                console.log('cart error: ', err);
            }
        }
        getProduct();
    }, []);

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
                            data={product.product.colors}
                            renderItem={renderColorListItem}
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </RightContainer>
            </TopContainer>
            <BottomContainer>
                <Element>
                    <Feather name="trash-2" size={20} color={Colors.main} />
                    <SmallText> Delete</SmallText>
                </Element>
                <QuantityContainer>
                    <Element>
                        <Feather
                            name="minus"
                            size={20}
                            color={Colors.main}
                            /*onPress={ quantity -= 1 || delete } */
                        />
                    </Element>
                    <SmallText style={{ fontWeight: "bold" }}>
                        {product.quantity}
                    </SmallText>
                    <Element>
                        <Feather name="plus" size={20} color={Colors.main} />
                    </Element>
                </QuantityContainer>
                <Element>
                    <Feather name="heart" size={20} color={Colors.main} />
                    <SmallText> Like</SmallText>
                </Element>
            </BottomContainer>
        </ProductContainer>
    );
};

export default cartProduct;
