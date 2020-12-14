import React from "react";

import { Video } from "expo-av";
import HoverVideoPlayer from "react-hover-video-player";
import ReactPlayer from "react-player";
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
        <ReactPlayer url="./IMG_0240.mp4" />
        /*
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
        */
    );
};

export default VideoPlayer;
