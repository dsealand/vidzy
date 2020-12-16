import React from "react";

import VideoStackPage from "../components/videoStackPage";

import api from "../data/forYouStack_api";

const ForYou = ({ navigation }) => {
    return (
        <VideoStackPage
            navigation={navigation}
            headerText={"For You"}
            videoStack={api}
        />
    );
};

export default ForYou;
