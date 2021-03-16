import React, { useState, useEffect } from "react";

import { View, useWindowDimensions, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "styled-components/native";

import Colors from "./colors";
import VideoPlayer from "./videoPlayer";
import VideoElements from "./videoElements";
import CreatorModal from "./creatorModal";
import ProductModal from "./productModal";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

Amplify.configure(awsmobile);
import creatorAPI from "../data/creatorInfo_api";
import productAPI from "../data/productInfo_api";

const Gradient = style((props) => <LinearGradient {...props} />)`
    height: 100%;
    width: 100%;
	justifyContent: center;
	alignItems: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    zIndex: 1;
`;

const VideoContainer = style.View`
    backgroundColor: ${Colors.darkGrey};
    justifyContent: center;
	alignItems: flex-end;
`;

const VideoCard = ({ navigation, card, isPlay }) => {
    const [creatorModalVisible, setCreatorModalVisible] = useState(false);
    const [productModalVisible, setProductModalVisible] = useState(false);
    const [creator, setCreator] = useState([]);
    const [product, setProduct] = useState([]);
    const [brand, setBrand] = useState([]);
    const [liked, setLiked] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [likedVideoID, setlikedVideoID] = useState();

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    // video query with useEffect hook and async function
    useEffect(() => {
        async function getCreator() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.getCreator, {id: card.creatorID}));
                const creator = apiData.data.getCreator;
                setCreator(creator);
            } catch (err) {
                console.log('error getting video creator: ', err);
            }
        }
        async function getProduct() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.getProduct, {id: card.productID}));
                const product = apiData.data.getProduct;
                const brandData = await API.graphql(graphqlOperation(queries.getBrand, {id: product.brandID}))
                setProduct(product);
                const brand = brandData.data.getBrand;
                setBrand(brand)
            } catch (err) {
                console.log('error getting product and brand: ', err);
            }
        }
        async function isLiked() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.listLikedVideos, {
                    filter: {
                        videoID: {
                            eq: card.id
                        },
                        userID: {
                            eq: 0
                        }
                    }
                }));
                if (apiData.data.listLikedVideos.items != 0) {
                    setlikedVideoID(apiData.data.listLikedVideos.items[0].id)
                    setLiked(true);
                } else {
                    setLiked(false);
                }
            } catch (err) {
                console.log('likedVideos query error: ', err);
            }
            setLoaded(true);
        }
        getCreator();
        getProduct();
        isLiked();
    }, []);

    if (loaded) { return (        
        <VideoContainer style={{ height: height, width: width }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={creatorModalVisible}
            >
                <CreatorModal
                    navigation={navigation}
                    creator={creator}
                    onPressClose={() => setCreatorModalVisible(false)}
                />
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={productModalVisible}
            >
                <ProductModal
                    navigation={navigation}
                    product={product}
                    onPressClose={() => setProductModalVisible(false)}
                />
            </Modal>
            <VideoPlayer
                video={card.URL}
                isPlay={isPlay}
                // orientation={card.video.orientation}
            />
            <Gradient
                locations={[0, 0.25, 0.75, 1]}
                /* rgba(35, 35, 35) = #232323 = "Colors.darkgrey" */
                colors={[
                    "rgba(35,35,35,1)",
                    "rgba(35,35,35,0)",
                    "rgba(35,35,35,0)",
                    "rgba(35,35,35,1)",
                ]}
            >
                <VideoElements
                    creator={creator}
                    product={product}
                    brand={brand}
                    videoLiked={liked}
                    likedVideoID={likedVideoID}
                    videoID={card.id}
                    onPressCreator={() => setCreatorModalVisible(true)}
                    onPressProduct={() => setProductModalVisible(true)}
                />
            </Gradient>
        </VideoContainer>
    );
} else {
    return(
        <View/>
    )
}}

export default VideoCard;
