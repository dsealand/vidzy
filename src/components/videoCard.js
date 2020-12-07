import React from "react";

import { View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "styled-components/native";

import VideoPlayer from "./videoPlayer";
import Buttons from "./buttons";

/*
const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;
*/

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
`;

const VideoCard = ({ product }) => {
    const window = useWindowDimensions();

    return (
        <VideoContainer>
            <VideoPlayer
                video={product.URL}
                style={{ height: window.height, width: window.width }}
            />
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
