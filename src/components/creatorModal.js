import React, { useState } from "react";

import { Image, Text, View, TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Colors from "./colors";

const Container = style.View`
    flexDirection: column;
    justifyContent: flex-end;
    alignItems: center;
    width: 100%;
    height: 100%;
`;

const ModalContainer = style.View`
    backgroundColor: ${Colors.main}
    width: 100%;
    height: 35%;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    justifyContent: flex-end;
    alignItems: center;
`;

const DownArrow = style(TouchableOpacity)`
    position: absolute;
    top: 15px;
    right: 15px;
`;

const CreatorInfo = style.View`
    backgroundColor: ${Colors.white};
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 83%;
`;

const CreatorPhoto = style.Image`
    width: 110px;
    height: 110px;
    borderRadius: 55px;
`;

const CreatorName = style.Text`
    font-size: 17px
    fontFamily: Helvetica;
    color: ${Colors.white};
    fontWeight: bold;
    paddingBottom: 12px;
`;

const CreatorHandel = style.Text`
    font-size: 12px
    fontFamily: Helvetica;
    color: ${Colors.lightGrey};
    padding: 10px;
`;

const MoreVideos = style(TouchableOpacity)`
    backgroundColor: ${Colors.main};
    borderRadius: 10px;
    width: 25%;
    height: 20px;
    justifyContent: center;
    alignItems: center;
`;

const MoreVideosText = style.Text`
    font-size: 12px
    fontFamily: Helvetica;
    color: ${Colors.white};
    fontWeight: bold;
`;

const creatorModal = ({ navigation, creator, onPressClose }) => {
    return (
        <Container>
            <ModalContainer>
                <CreatorName>{creator.creator.name}</CreatorName>
                <DownArrow onPress={onPressClose}>
                    <Feather name="arrow-down" size={20} color={Colors.white} />
                </DownArrow>
                <CreatorInfo>
                    <CreatorPhoto source={creator.creator.photo} />
                    <CreatorHandel>@{creator.creator.username}</CreatorHandel>
                    <MoreVideos
                        onPress={onPressClose}
                        onPressOut={() => {
                            navigation.navigate("Creator", {
                                id: "creator.creator.name",
                            });
                        }}
                    >
                        <MoreVideosText>More Videos</MoreVideosText>
                    </MoreVideos>
                </CreatorInfo>
            </ModalContainer>
        </Container>
    );
};

export default creatorModal;
