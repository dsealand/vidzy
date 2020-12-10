import React from "react";

import { FlatList } from "react-native";

import VideoCard from "./videoCard";

const VideoStack = ({ videos }) => {
    const renderProduct = ({ item }) => (
        <VideoCard key={item.id} product={item} />
    );

    return (
        <FlatList
            renderItem={renderProduct}
            data={videos}
            keyExtractor={(videos) => videos.id}
        />
    );
};

export default VideoStack;
