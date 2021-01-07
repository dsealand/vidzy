import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SectionList,
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
    backgroundColor: ${Colors.lightestGrey}
    width: 100%;
    height: 60%;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    justifyContent: flex-start;
    alignItems: flex-start;
`;

const TopContainer = style.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    width: 94%;
    height: 10%
    left: 3%;
`;

const TopRightContainer = style.View`
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    width: 20%;
    height: 100%;
`;

const BottomContainer = style.View`
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    width: 100%;
    paddingTop: 3%;
`;

const ProductScroll = style.View`
    width: 94%;
    height: 70%;
    left: 3%;
`;

const BigText = style.Text`
    font-size: 17px
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const PriceText = style.Text`
    font-size: 15px;
    fontFamily: Helvetica;
    color: ${Colors.main};
    fontWeight: bold;
`;

const AddToCart = style(TouchableOpacity)`
    backgroundColor: ${Colors.main};
    borderRadius: 25px;
    width: 150px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
`;

const AddToCartText = style(BigText)`
    color: ${Colors.white};
`;

const MoreVideos = style(TouchableOpacity)`
    width: 150px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
`;

const MoreVideosText = style(BigText)`
    color: ${Colors.main};
`;

const SectionHeaderText = style.Text`
    font-size: 13px;
    fontFamily: Helvetica;
    color: ${Colors.black};
    fontWeight: bold;
`;

const ImageSpacer = style.View`
    aspectRatio: 1;
    justifyContent: center;
    alignItems: center
`;

const ProductImageBorder = style.View`
    backgroundColor: ${Colors.white};
    borderRadius: 10px;
    width: 85%;
    aspectRatio: 1;
    overflow: hidden;
`;

const ColorImageBorder = style.View`
    backgroundColor: ${Colors.white}
    width: 50px;
    borderRadius: 25px;
    aspectRatio: 1;
    overflow: hidden;
`;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.darkGrey,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
});

const renderSection = ({ item }) => {
    if (item.title === "Images") {
        return (
            <FlatList
                data={item.list}
                numColumns={3}
                renderItem={renderImageListItem}
                keyExtractor={(item) => item.id}
            />
        );
    } else {
        return (
            <FlatList
                data={item.list}
                numColumns={5}
                renderItem={renderColorListItem}
                keyExtractor={(item) => item.id}
            />
        );
    }
};

const renderImageListItem = ({ item }) => {
    return (
        <ImageSpacer style={{ width: "33%" }}>
            <View style={styles.shadow}>
                <ProductImageBorder />
            </View>
        </ImageSpacer>
    );
};

const renderColorListItem = ({ item }) => {
    return (
        <ImageSpacer style={{ width: "20%" }}>
            <View style={styles.shadow}>
                <ColorImageBorder>
                    <View style={{ flex: 1, backgroundColor: item.color }} />
                </ColorImageBorder>
            </View>
        </ImageSpacer>
    );
};

const renderSectionHeader = ({ section }) => {
    return <SectionHeaderText>{section.title}</SectionHeaderText>;
};

const productModal = ({ navigation, product, onPressClose }) => {
    return (
        <Container>
            <ModalContainer>
                <TopContainer>
                    <BigText>{product.product.name}</BigText>
                    <TopRightContainer>
                        <PriceText>$ {product.product.price}</PriceText>
                        <TouchableOpacity onPress={onPressClose}>
                            <Feather
                                name="arrow-down"
                                size={20}
                                color={Colors.main}
                            />
                        </TouchableOpacity>
                    </TopRightContainer>
                </TopContainer>

                <ProductScroll>
                    <SectionList
                        sections={product.product.data}
                        renderSectionHeader={renderSectionHeader}
                        renderItem={renderSection}
                        stickySectionHeadersEnabled={false}
                    />
                </ProductScroll>
                <BottomContainer>
                    <AddToCart>
                        <AddToCartText>Add To Cart</AddToCartText>
                    </AddToCart>
                    <MoreVideos
                        onPress={onPressClose}
                        onPressOut={() => {
                            navigation.navigate("Product", {
                                product: product,
                                back: true,
                            });
                        }}
                    >
                        <MoreVideosText>More Videos</MoreVideosText>
                    </MoreVideos>
                </BottomContainer>
            </ModalContainer>
        </Container>
    );
};

export default productModal;
