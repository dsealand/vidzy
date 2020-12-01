import React from "react";

import { Video } from "expo-av";
import style from "styled-components/native";

const ProductVideo = style(Video)`
    background: transparent;
`;

const VideoPlayer = ({ video }) => {
    return (
        <ProductVideo
            source={video}
            /*source={{
          uri:
            "https://d2h74skj6dqe4u.cloudfront.net/PXL_20201021_215704455.mpd",
        }}*/
            resizeMode="contain"
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay
            isLooping
        />
    );
};

export default VideoPlayer;
