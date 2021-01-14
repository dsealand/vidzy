import React, { useEffect, useState } from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';
import getVideos from '../functions/queryWrappers.js';

import VideoStackPage from "../components/videoStackPage";
import api from "../data/forYouStack_api";

Amplify.configure(awsmobile);

const ForYou = ({ navigation }) => {
    const [videoStack, setVideoStack] = useState([]);

    getVideos();

    // video query with useEffect hook and async function
    useEffect(() => {
        
        // setVideoStack(getVideos);
        getVideos();
        console.log("test in forYou page", getVideos());
        // console.log(videos);

        async function getVideos() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.listVideos));
                const videos = apiData.data.listVideos.items;
                setVideoStack(videos);
            } catch (err) {
                console.log('error1: ', err);
            }
        }
        getVideos();
    }, []);

    return (
        <VideoStackPage
            navigation={navigation}
            headerText={"For You"}
            videoStack={videoStack}
        />
    );
};

export default ForYou;
