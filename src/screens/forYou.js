import React, { useEffect, useState } from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

import VideoStackPage from "../components/videoStackPage";
import { Auth } from 'aws-amplify';

// Auth.currentSession()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const ForYou = ({ navigation }) => {
    const [videoStack, setVideoStack] = useState([]);

    // video query with useEffect hook and async function
    useEffect(() => {
        async function getVideos() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.listVideos));
                const videos = apiData.data.listVideos.items;
                setVideoStack(videos);
            } catch (err) {
                console.log('error getting forYou video stack: ', err);
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
