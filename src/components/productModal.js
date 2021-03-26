import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SectionList,
    Modal,
} from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

import Colors from "./colors";

import CheckoutModal from './checkoutModal';

Amplify.configure(awsmobile);

const Container = style.View`
    flexDirection: column;
    justifyContent: flex-end;
    alignItems: flex-start;
    width: 100%;
    height: 100%;
`;

const ModalContainer = style.View`
    backgroundColor: ${Colors.lighterGrey}
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
    fontFamily: Circular-Std;
    color: ${Colors.black};
    fontWeight: bold;
`;

const PriceText = style.Text`
    font-size: 15px;
    fontFamily: Circular-Std;
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

const CheckoutText = style(BigText)`
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
    fontFamily: Circular-Std;
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

const Checkout = style(TouchableOpacity)`
    backgroundColor: ${Colors.main};
    borderRadius: 25px;
    width: 30%;
    height: 40%;
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
                    <View style={{ flex: 1, backgroundColor: item.asset }} />
                </ColorImageBorder>
            </View>
        </ImageSpacer>
    );
};

const renderSectionHeader = ({ section }) => {
    return <SectionHeaderText>{section.title}</SectionHeaderText>;
};

// TODO: get cartID from user, update createCartProduct mutation with cartID

const productModal = ({ navigation, product, onPressClose }) => {
    const [cartID, setCartID] = useState();
    const [checkoutModalVisible, setCheckoutModalVisible] = useState(false);

    // get cart data for add to cart button behavior
    useEffect(() => {
        // getCart();
    }, []);

    // async function getUser() {
    //     try {
    //         const credentials = await Auth.currentCredentials();
    //         console.log("credentials: ", credentials);
    //         if (credentials.authenticated == true) {
    //             const user = await Auth.currentAuthenticatedUser();
    //             return user.username;
    //         } else {
    //             return credentials.accessKeyId;
    //         }
    //     } catch (err) {
    //         console.log("error getting current guest/authenticated user: ", err);
    //     }
    // }

    // async function getCart() {
    //     try {
    //         const username = await getUser();
    //         console.log("username: ", username);
    //         const user = await API.graphql(graphqlOperation(queries.listUsers, {
    //             filter: {
    //                 username: {
    //                     eq: username
    //                 }
    //             }
    //         }));
    //         console.log("list users query in product modal: ", user);
    //         setCartID(user.data.listUsers.items[0].cartID);
    //         const cartProducts = await API.graphql(graphqlOperation(queries.listCartProducts, {
    //             filter: {
    //                 cartID: {
    //                     eq: user.data.listUsers.items[0].cartID
    //                 }
    //             }
    //         }))
    //         if (cartProducts.data.listCartProducts.items.length != 0) {
    //             setExists(true);
    //         }
    //     } catch (err) {
    //         console.log("error getting cart: ", err);
    //     }
    // }

    // construct array for image and color data
    const data = [{
        id: 0, title: "Images", data: [{
            id: 0, title: "Images", list: product.images.items
        }]
    },
    {
        id: 1, title: "Colors", data: [{
            id: 1, title: "Colors", list: product.colors.items
        }]
    }];

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={checkoutModalVisible}
            >
                <CheckoutModal
                    product={product}
                    onPressClose={() => setCheckoutModalVisible(false)}
                />
            </Modal>
            <ModalContainer>
                <TopContainer>
                    <BigText>{product.name}</BigText>
                    <TopRightContainer>
                        <PriceText>$ {product.price}</PriceText>
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
                        sections={data}
                        renderSectionHeader={renderSectionHeader}
                        renderItem={renderSection}
                        stickySectionHeadersEnabled={false}
                    />
                </ProductScroll>
                <BottomContainer>
                    <Checkout onPress={() => setCheckoutModalVisible(true)}>
                        <CheckoutText>Checkout</CheckoutText>
                    </Checkout>
                    {/* <AddToCart
                        onPress={
                            async () => {
                                if (!exists) {
                                    setExists(!exists);
                                    try {
                                        console.log("added item to cart");
                                        await API.graphql(graphqlOperation(mutations.createCartProduct, { input: { cartID: cartID, quantity: 1, productID: product.id, price: product.price } }));
                                    } catch (err) {
                                        console.log('addToCart new error: ', err);
                                    }
                                } else {
                                    console.log("item exists in cart already");
                                    // try {
                                    //     await API.graphql(graphqlOperation(mutations.updateCartProduct, { input: { cartID: 0, quantity: cartQuantity}}));
                                    // } catch (err) {
                                    //     console.log('addToCart existing error: ', err);
                                    // }
                                }
                            }
                        }>
                        <AddToCartText>Add To Cart</AddToCartText>
                    </AddToCart> */}
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
