import React from "react";

import { View, useWindowDimensions } from "react-native";
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
    background: #282828;
    border-radius: 50;
`;

const VideoCard = ({ product }) => {
    const window = useWindowDimensions();
    var height = window.height * 0.9;
    var width = height * (16.0 / 9.0);

    if (width > window.width * 0.9) {
        width = window.width * 0.9;
        height = window.width * (9.0 / 16.0);
    }

    return (
        <VideoContainer
            style={{
                height: height,
                width: width,
            }}
        >
            <VideoPlayer video={product.video} height={height} />
            <Gradient
                locations={[0, 0.25, 0.75, 1]}
                colors={[
                    "rgba(26,26,26,0.6)",
                    "rgba(26,26,26,0)",
                    "rgba(26,26,26,0)",
                    "rgba(26,26,26,0.6)",
                ]}
            >
                <Buttons
                /*  user={data.user}
                    brand={data.brand}
                    product={data.product}*/
                />
            </Gradient>
        </VideoContainer>
    );
};

export default VideoCard;
