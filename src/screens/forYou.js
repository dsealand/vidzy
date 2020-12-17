import React, { useEffect, useState } from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/mutations.js';

import VideoStackPage from "../components/videoStackPage";
import api from "../data/forYouStack_api";

Amplify.configure(awsmobile);

const ForYou = ({ navigation }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function getVideos() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.listVideos))
                const videos = apiData.data.listVideos.items

                setVideos(videos);
                // this.setState({ videos })
                console.log(videos)
            } catch (err) {
                console.log('error: ', err)
            }
        }
        getVideos();
    });

    return (
        <VideoStackPage
            navigation={navigation}
            headerText={"For You"}
            videoStack={api}
        />
    );
};

export default ForYou;
