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
    width: 100%;
    height: 45%;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    justifyContent: flex-end;
    alignItems: center;
    overflow: hidden;
`;

const Element = style(TouchableOpacity)`
    width: 15%;
    justifyContent: center;
    alignItems: center;
`;

const TopContainer = style.View`
    backgroundColor: ${Colors.main}
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    width: 100%;
    height: 15%
`;

const BottomContainer = style.View`
    backgroundColor: ${Colors.lighterGrey}
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
    font-size: 13px
    fontFamily: Helvetica;
    color: ${Colors.lightGrey};
    padding: 10px;
`;

const MoreVideos = style(TouchableOpacity)`
    backgroundColor: ${Colors.main};
    borderRadius: 10px;
    width: 100px;
    height: 20px;
    justifyContent: center;
    alignItems: center;
`;

const MoreVideosText = style.Text`
    font-size: 13px
    fontFamily: Helvetica;
    color: ${Colors.white};
    fontWeight: bold;
`;

const creatorModal = ({ navigation, creator, onPressClose }) => {
    console.log(creator);
    console.log("creator");
    return (
        <Container>
            <ModalContainer>
                <TopContainer>
                    <Element />
                    <CreatorName>{creator.username}</CreatorName>
                    <Element onPress={onPressClose}>
                        <Feather
                            name="arrow-down"
                            size={20}
                            color={Colors.white}
                        />
                    </Element>
                </TopContainer>

                <BottomContainer>
                    <CreatorPhoto source={{uri:creator.photo}} />
                    <CreatorHandel>@{creator.username}</CreatorHandel>
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
