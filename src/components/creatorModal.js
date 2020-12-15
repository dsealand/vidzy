import React, { useState } from "react";

import { Image, Text, View, Modal } from "react-native";
import style from "styled-components/native";

import Colors from "./colors";

const Container = style.View`
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 100%;
`;

const ModalContainer = style.View`
    backgroundColor: ${Colors.white};
    width: 100%;
    height: 40%;
`;

const creatorModal = (isVisible) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <Container>
                <ModalContainer>
                    <Text>Creator</Text>
                </ModalContainer>
            </Container>
        </Modal>
    );
};

export default creatorModal;
