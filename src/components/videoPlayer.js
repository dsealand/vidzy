import React from "react";

import { Video } from "expo-av";
import style from "styled-components/native";

const ProductVideo = style(Video)`
    background: transparent;
`;

const VideoPlayer = ({ video, height }) => {
    return (
        <ProductVideo
            source={video}
            resizeMode="contain"
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay
            isLooping
            style={{ height: height }}
        />
    );
};

export default VideoPlayer;
