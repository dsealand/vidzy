import React from "react";

import { Video } from "expo-av";
import style from "styled-components/native";

const ProductVideo = style(Video)`
    background: transparent;
    width: 100%;
    height: 100%;
    flex: 1;
`;

const VideoPlayer = ({ video, orientation }) => {
    var resizeMode = orientation === "portrait" ? "contain" : "cover";
    return (
        <ProductVideo
            source={video}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            isLooping
            shouldPlay={true}
            style={{ flex: 1 }}
            resizeMode={resizeMode}
        />
    );
};

export default VideoPlayer;
