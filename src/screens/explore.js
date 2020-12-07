import React, { useState } from "react";

import { View, FlatList } from "react-native";
// import ViewPager from "@react-native-community/viewpager";
import style from "styled-components/native";

import VideoCard from "../components/videoCard";

/*
const Container = style(ViewPager)`
    flex: 1;
`;
*/

const Explore = ({ videos }) => {
    // const [selected, setSelected] = useState(0);
    console.log(videos)

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

export default Explore;
