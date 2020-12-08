import React from "react";

import { View, FlatList } from "react-native";
import style from "styled-components/native";

import VideoCard from "../components/videoCard";

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
