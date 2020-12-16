import React, { useState } from "react";

import { FlatList } from "react-native";
import ViewPager from "@react-native-community/viewpager";

import Colors from "./colors";
import VideoCard from "./videoCard";

const VideoStack = ({ navigation, stack }) => {
    const [selected, setSelected] = useState(0);

    return (
        <ViewPager
            orientation="vertical"
            onPageSelected={(e) => setSelected(e.nativeEvent.position)}
            initialPage={0}
            style={{ backgroundColor: Colors.darkGrey }}
        >
            {stack.map((card, index) => {
                return (
                    <VideoCard
                        key={index}
                        navigation={navigation}
                        card={card}
                        isPlay={selected === index}
                    />
                );
            })}
        </ViewPager>
    );
};
export default VideoStack;
