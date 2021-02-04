import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

import VideoStackPage from "../components/videoStackPage";

Amplify.configure(awsmobile);

const Creator = ({ route, navigation }) => {
    const { creator, back } = route.params;
    const [videoStack, setVideoStack] = useState([]);

    console.log("creator: ");
    console.log(creator.id);

    // video query with useEffect hook and async function, filtered by creator
    useEffect(() => {
        async function getVideos() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.listVideos, {
                    filter: {
                        creatorID: {
                            eq: creator.id
                        }
                    }
                }));
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
            headerText={creator.username}
            videoStack={videoStack}
            back={back}
        />
    );
};

export default Creator;
