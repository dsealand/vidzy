import React from "react";

import { SafeAreaView, View, useWindowDimensions } from "react-native";
import { Video } from "expo-av";
import style from "styled-components/native";

const VideoContainer = style.View`
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 100%;
`;

const ProductVideo = style(Video)`
    background: transparent;
    width: 100%;
    flex: 1
`;

const VideoPlayer = ({ video, isPlay, orientation }) => {
    var resizeMode = orientation === "portrait" ? "cover" : "contain";

    // console.log("videoplayer component");
    // console.log(video);
    // console.log("\n");

    return (
        <VideoContainer>
            <ProductVideo
<<<<<<< HEAD
                // source={{ uri: "http://d2h74skj6dqe4u.cloudfront.net/test_vid_1.mpd" }}
                source={{ uri: video }}
=======
                /* make sure to change source to uri: for URL */
                source={video}
>>>>>>> uxui
                rate={1.0}
                volume={1.0}
                isMuted={false}
                isLooping
                shouldPlay={isPlay}
                resizeMode={resizeMode}
            />
        </VideoContainer>
    );
};

export default VideoPlayer;
