import React, { useState } from "react";

import { TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Colors from "./colors";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

import UUIDGenerator from 'react-native-uuid-generator';

Amplify.configure(awsmobile);

const Container = style.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: flex-end;
    width: 100%;
    height: 100%
`;

const LeftContainer = style.View`
    flexDirection: column;
    justifyContent: flex-end;
    width: 50%;
    left: 1%;
    bottom: 12%;
`;

const RightContainer = style.View`
	flexDirection: column;
    justifyContent: flex-end;
    alignItems: center;
    width: 20%;
    right: 1%;
    bottom: 12%;
`;

const ProductInfo = style.TouchableOpacity`
    flexDirection: column;
    alignItems: flex-start;
    shadowColor: ${Colors.darkGrey};
    shadowOpacity: 1;
    shadowRadius: 10px;
`;

const Element = style.TouchableOpacity`
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    height: 40px;
    shadowColor: ${Colors.darkGrey};
    shadowOpacity: 0.5;
    shadowRadius: 7px;
`;

const BasicText = style.Text`
    font-size: 14px
    fontFamily: Helvetica;
    color: ${Colors.white};
    textShadowRadius: 1px;
    textShadowColor: ${Colors.darkGrey};
`;

const ProductNameText = style(BasicText)`
    font-size: 17px;
    fontWeight: bold;
`;

const ElementText = style(BasicText)`
    font-size: 11px;
    fontWeight: bold;
`;

const VideoElements = ({
    creator,
    product,
    brand,
    videoLiked,
    likedVideoID,
    videoID,
    onPressCreator,
    onPressProduct,
}) => {
    const [liked, setLiked] = useState(videoLiked);
    const [likedID, setLikedID] = useState(likedVideoID);

    /* add code here to update users liked videos */

    async function likePress() {
        if (liked) {
            setLiked(false);
            try {
                await API.graphql(graphqlOperation(mutations.deleteLikedVideo, {input: {id: likedVideoID}}));
            } catch (err) {
                console.log('error1: ', err);
            }
            // console.log("deleted likedVideo object with id: ", likedID);
        } else {
            setLiked(true);
            try {
                const apiData = await API.graphql(graphqlOperation(mutations.createLikedVideo, {input: {videoID: videoID, userID: 0}}));
                setLikedID(apiData.data.createLikedVideo.id);
                // console.log("set likedID: ", apiData.data);
            } catch (err) {
                console.log('error1: ', err);
            }
            // console.log("created new likedVideo object with id: ", likedID);
        }
    };

    let iconColor = Colors.white;

    if (liked) {
        iconColor = Colors.main;
    }

    return (
        <Container>
            <LeftContainer>
                <ProductInfo onPress={onPressProduct}>
                    <BasicText>{brand.name}</BasicText>
                    <ProductNameText>{product.name}</ProductNameText>
                    <BasicText>$ {product.price}</BasicText>
                </ProductInfo>
            </LeftContainer>
            <RightContainer>
                <Element onPress={likePress}>
                    <Feather name="heart" size={20} color={iconColor} />
                </Element>
                {/* Logic used to hide creator icon when on creator video stack */}
                {creator !== undefined && (
                    <Element onPress={onPressCreator}>
                        <Feather
                            name="at-sign"
                            size={20}
                            color={Colors.white}
                        />
                        <ElementText>{creator.username}</ElementText>
                    </Element>
                )}
            </RightContainer>
        </Container>
    );
};

export default VideoElements;
