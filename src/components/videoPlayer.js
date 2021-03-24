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
  console.log("testing cloudfront ios");

  return (
    <VideoContainer>
      <ProductVideo
        source={{
          uri:
            "http://d2h74skj6dqe4u.cloudfront.net/test_vid_1test_vid_1_hls_output.m3u8",
        }}
        // source={{ uri: video }}
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
