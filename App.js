import React from "react";

import { SafeAreaView, Text } from "react-native";
import { Video } from "react-native-video";

import VideoPlayer from "./src/components/videoPlayer";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Video
        source={require("../assets/IMG_0240.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        useNativeControls={false}
        posterSource={poster}
        source={video}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}
