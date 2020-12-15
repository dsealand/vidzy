import React, { useState } from "react";

import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "styled-components/native";

import Colors from "./colors";
import VideoPlayer from "./videoPlayer";
import VideoElements from "./videoElements";
import CreatorModal from "./creatorModal";

const Gradient = style((props) => <LinearGradient {...props} />)`
    height: 100%;
    width: 100%;
	justifyContent: center;
	alignItems: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    zIndex: 1;
`;

const VideoContainer = style.View`
    backgroundColor: ${Colors.darkGrey};
    justifyContent: center;
	alignItems: flex-end;
`;

const VideoCard = ({ card, isPlay }) => {
    const [creatorModalVisible, setCreatorModalVisible] = useState(false);

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    return (
        <VideoContainer style={{ height: height, width: width }}>
            <CreatorModal isVisible={creatorModalVisible} />
            <VideoPlayer
                video={card.video.video}
                isPlay={isPlay}
                orientation={card.video.orientation}
            />
            <Gradient
                locations={[0, 0.25, 0.75, 1]}
                colors={[
                    "rgba(35,35,35,1)",
                    "rgba(35,35,35,0)",
                    "rgba(35,35,35,0)",
                    "rgba(35,35,35,1)",
                ]}
            >
                <VideoElements
                    creator={card.creator}
                    product={card.product}
                    brand={card.brand}
                    onPressCreator={setCreatorModalVisible}
                />
            </Gradient>
        </VideoContainer>
    );
};

export default VideoCard;
