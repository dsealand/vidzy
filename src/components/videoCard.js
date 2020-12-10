import React, { useState } from "react";

import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "styled-components/native";
import { Video } from "expo-av";

import VideoPlayer from "./videoPlayer";
import Buttons from "./buttons2";
import Colors from "./colors";

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
    border-radius: 50;
    backgroundColor: ${Colors.darkGrey};
`;

const CardBorder = style.View`
    alignItems: center;
    justifyContent: center;
    backgroundColor: transparent;
`;

const VideoCard = ({ product }) => {
    var height = 0;
    var width = 0;

    var window = useWindowDimensions();
    if (window.height * (16.0 / 9.0) > window.width) {
        width = window.width;
        height = window.width * (9.0 / 16.0);
    } else {
        width = window.height * (16.0 / 9.0);
        height = window.height;
    }

    return (
        <CardBorder
            style={{
                height: height,
                width: width,
            }}
        >
            <VideoContainer
                style={{
                    height: height * 0.85,
                    width: width * 0.85,

                    shadowColor: Colors.black,
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                }}
            >
                <VideoPlayer
                    video={product.video.video}
                    orientation={product.video.orientation}
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
        </CardBorder>
    );
};

export default VideoCard;
