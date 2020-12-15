import React, { Component } from "react";

import { View, FlatList, Text } from "react-native";
import style from "styled-components/native";

import Colors from "../components/colors";
import Header from "../components/header";
import VideoStack from "../components/videoStack";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

Amplify.configure(awsmobile);

import api from "./info";

const ForYou = () => {
    state = { videos: [] }

    async(() => {
        async function getVideos() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.listVideos))
                const videos = apiData.data.listVideos.items
                this.setState({ videos })
                console.log(videos)
            } catch (err) {
                console.log('error: ', err)
            }
        }
        getVideos();
    });

    return <VideoStack stack={api} />;
};

export default ForYou;
