import React from "react";

import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "styled-components/native";

import VideoPlayer from "./videoPlayer";
import Buttons from "./buttons";

const Gradient = style((props) => <LinearGradient {...props} />)`
    height: 100%;
    width: 100%;
	justifyContent: center;
	alignItems: flex-end
    position: absolute;
    top: 0;
    left: 0;
    zIndex: 1;
`;

const VideoContainer = style.View`
    overflow: hidden;
    background: black;
    border-radius: 2%;
    height: 60%;
    width: 90%;
`;

const VideoCard = (/*{ video, poster }*/) => {
    return (
        <VideoContainer>
            <VideoPlayer />
            <Gradient
                locations={[0, 0.25, 0.75, 1]}
                colors={[
                    "rgba(26,26,26,0.6)",
                    "rgba(26,26,26,0)",
                    "rgba(26,26,26,0)",
                    "rgba(26,26,26,0.6)",
                ]}
            >
                <Buttons />
            </Gradient>
        </VideoContainer>
    );
};

export default VideoCard;
