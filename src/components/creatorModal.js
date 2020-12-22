import React, { useState } from "react";

import { Image, Text, View, TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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
    height: 45%;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    justifyContent: flex-end;
    alignItems: center;
    overflow: hidden;
`;

const DownArrow = style(TouchableOpacity)`
    position: absolute;
    top: 17px;
    right: 17px;
`;

const TopContainer = style.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    width: 100%;
    height: 15%
`;

const BottomContainer = style.View`
    backgroundColor: ${Colors.lighterGrey};
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 85%;
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
`;

const CreatorHandel = style.Text`
    font-size: 12px
    fontFamily: Helvetica;
    color: ${Colors.lightGrey};
    padding: 10px;
`;

const MoreVideos = style(TouchableOpacity)`
    backgroundColor: ${Colors.main2};
    borderRadius: 10px;
    width: 100px;
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
                <TopContainer>
                    <CreatorName>{creator.creator.name}</CreatorName>
                </TopContainer>
                <DownArrow onPress={onPressClose}>
                    <Feather name="arrow-down" size={20} color={Colors.white} />
                </DownArrow>
                <BottomContainer>
                    <CreatorPhoto source={creator.creator.photo} />
                    <CreatorHandel>@{creator.creator.username}</CreatorHandel>
                    <MoreVideos
                        onPress={onPressClose}
                        onPressOut={() => {
                            navigation.navigate("Creator", {
                                creator: creator,
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

export default creatorModal;
