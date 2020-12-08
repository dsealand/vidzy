import React, { useState, useEffect } from "react";
import style from "styled-components/native";

import VideoCard from "./src/components/videoCard";
import Explore from "./src/screens/explore";
import api from "./src/screens/info";

import { StyleSheet, Text, View } from 'react-native';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

Amplify.configure(awsconfig);
console.reportErrorsAsExceptions = false;

// set up AWS AppSync client with auth from awsconfig
const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: awsconfig.aws_appsync_apiKey,
    },
});

// // test video input object
// const testVideo = { id: 1, name: "vid1", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/videos/PXL_20201021_215704455.cmfv" };
// (async () => {
//     console.log("begin mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createVideo, { input: testVideo }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end video mutation test");
// })();

// // test brand input object
// const testBrand = { id: 30, description: "test brand2" };
// (async () => {
//     console.log("begin brand mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createBrand, { input: testBrand }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end brand mutation test");
// })();

// // test product input object
// const testProduct = { id: 30, name: "product30", price: 10, description: "test product 1", brandID: 30 };
// (async () => {
//     console.log("begin mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createProduct, { input: testProduct }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end product mutation test");
// })();

// // test creator input object
// const testCreator = { id: 30, username: "user30", description: "test user 30" };
// (async () => {
//     console.log("begin mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createCreator, { input: testCreator }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end creator mutation test");
// })();

// // test getting video
// async function videoQuery() {
//     console.log("begin query test")
//     try {
//         videoList = await API.graphql({ query: queries.listVideos });
//     } catch (e) {
//         console.log(e);
//     }
//     return videoList
//     // console.log("end query test", videoList.data.listVideos.items)
// };

const Window = style.SafeAreaView`
	justifyContent: flex-start;
	alignItems: center;
`;

export default async function App() {
    const [videos, setVideos] = useState([]);
    // var videos;

    useEffect(() => {
        // test getting video
        async function videoQuery() {
            var videoList;
            console.log("begin query test")
            try {
                videoList = await API.graphql({ query: queries.listVideos });
            } catch (e) {
                console.log(e);
            }
            console.log(videoList)
            console.log("end test")
            return videoList
            // console.log("end query test", videoList.data.listVideos.items)
        };
    }, []);

    // videos = videoQuery();
    // console.log("created videos array")
    // console.log(await videos)

    return (
        <Window>
            <Explore videos={videoQuery} />
            {/* <Explore videos={videoList.data.listVideos.items} /> */}
        </Window>
    );
}
