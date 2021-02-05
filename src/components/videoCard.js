import React, { useState, useEffect } from "react";

import { useWindowDimensions, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "styled-components/native";

import Colors from "./colors";
import VideoPlayer from "./videoPlayer";
import VideoElements from "./videoElements";
import CreatorModal from "./creatorModal";
import ProductModal from "./productModal";

<<<<<<< HEAD
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

Amplify.configure(awsmobile);
=======
import creatorAPI from "../data/creatorInfo_api";
import productAPI from "../data/productInfo_api";
>>>>>>> uxui

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

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    // video query with useEffect hook and async function
    useEffect(() => {
        async function getCreator() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.getCreator, {id: 30}));
                const creator = apiData.data.getCreator;
                setCreator(creator);
            } catch (err) {
                console.log('error1: ', err);
            }
        }
        getCreator();
    }, []);

    return (        
        <VideoContainer style={{ height: height, width: width }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={creatorModalVisible}
                /* onShow={ trigger API call to get creator info to pass as prop to CreatorModal } */
            >
                <CreatorModal
                    navigation={navigation}
<<<<<<< HEAD
                    creator={creator}
=======
                    creator={creatorAPI[0]}
>>>>>>> uxui
                    onPressClose={() => setCreatorModalVisible(false)}
                />
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={productModalVisible}
                /* onShow={ trigger API call to get product info to pass as prop to CreatorModal } */
            >
                <ProductModal
                    navigation={navigation}
                    product={productAPI[0]}
                    onPressClose={() => setProductModalVisible(false)}
                />
            </Modal>
            <VideoPlayer
                video={card.URL}
                isPlay={isPlay}
<<<<<<< HEAD
                // orientation={card.video.orientation}
=======
                orientation={card.orientation}
>>>>>>> uxui
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
                    creator={card.creator}
                    product={card.product}
<<<<<<< HEAD
                    brand={card.product.brand}
=======
                    brand={card.brand}
                    videoLiked={card.liked}
>>>>>>> uxui
                    onPressCreator={() => setCreatorModalVisible(true)}
                    onPressProduct={() => setProductModalVisible(true)}
                />
            </Gradient>
        </VideoContainer>
    );
};

export default VideoCard;
