import React, { useState } from "react";

import ViewPager from "@react-native-community/viewpager";

import Colors from "./colors";
import VideoCard from "./videoCard";

const VideoStack = ({ navigation, stack }) => {
    const [selected, setSelected] = useState(0);
    const [focus, setFocus] = useState(true);

    /*
     * Listeners to see whether videoStack is focues/visible screen.
     * Will stop and then start video when exiting to see product or
     * creator page and then returning to For You.
     */
    React.useEffect(() => {
        const didBlur = navigation.addListener("blur", () => {
            setFocus(false);
        });
        const didFocus = navigation.addListener("focus", () => {
            setFocus(true);
        });
        return didBlur, didFocus;
    }, [navigation]);

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
                        isPlay={selected === index && focus}
                    />
                );
            })}
        </ViewPager>
    );
};
export default VideoStack;
