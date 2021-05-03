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

  // if (isPlay) {
    return (
      <VideoContainer>
        <ProductVideo
          // source={{
          //   uri:
          //     "https://d2h74skj6dqe4u.cloudfront.net/001-WatchCharger_moony1.m3u8",
          // }}
          source={{ uri: video }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          isLooping
          shouldPlay={isPlay}
          resizeMode={resizeMode}
        />
      </VideoContainer>
    );
  // }
};

export default VideoPlayer;
