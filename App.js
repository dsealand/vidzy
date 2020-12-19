import React, { useEffect } from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

import ForYou from "./src/screens/forYou";
import Creator from "./src/screens/creator";

Amplify.configure(awsmobile);

const Stack = createStackNavigator();

// // video object mutation
// const testVideo1 = { id: 1, name: "vid1", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_1.mpd" };
// (async () => {
//     console.log("begin mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createVideo, { input: testVideo1 }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end video mutation test");
// })();

// // video object mutation
// const testVideo2 = { id: 2, name: "vid2", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_2.mpd" };
// (async () => {
//     console.log("begin mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createVideo, { input: testVideo2 }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end video mutation test");
// })();

// // video object mutation
// const testVideo3 = { id: 3, name: "vid3", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_3.mpd" };
// (async () => {
//     console.log("begin mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createVideo, { input: testVideo3 }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end video mutation test");
// })();

// // video object mutation
// const testVideo4 = { id: 4, name: "vid4", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_4.mpd" };
// (async () => {
//     console.log("begin mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.createVideo, { input: testVideo4 }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end video mutation test");
// })();

// // test getting video
// (async () => {
//     console.log("begin query test")
//     try {
//         videoList = await API.graphql({ query: queries.listVideos});
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end query test")
// }) ();

const testVideo1 = { id: 1, name: "vid1", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_1.mpd" };
const testVideo2 = { id: 2, name: "vid2", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_2.mpd" };
const testVideo3 = { id: 3, name: "vid3", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_3.mpd" };
const testVideo4 = { id: 4, name: "vid4", productID: 30, creatorID: 30, URL: "https://d2h74skj6dqe4u.cloudfront.net/test_vid_4.mpd" };

export default function App() {
    // useEffect(() => {
    //     async function mutate1() {
    //         try {
    //             const result = await API.graphql(graphqlOperation(mutations.updateVideo, { input: testVideo1 }));
    //             // console.log(result);
    //         } catch (err) {
    //             console.log('error1: ', err);
    //         }
    //     }
    //     async function mutate2() {
    //         try {
    //             const result = await API.graphql(graphqlOperation(mutations.updateVideo, { input: testVideo2 }));
    //             // console.log(result);
    //         } catch (err) {
    //             console.log('error1: ', err);
    //         }
    //     }
    //     async function mutate3() {
    //         try {
    //             const result = await API.graphql(graphqlOperation(mutations.updateVideo, { input: testVideo3 }));
    //             // console.log(result);
    //         } catch (err) {
    //             console.log('error3: ', err);
    //         }
    //     }
    //     async function mutate4() {
    //         try {
    //             const result = await API.graphql(graphqlOperation(mutations.updateVideo, { input: testVideo4 }));
    //             // console.log(result);
    //         } catch (err) {
    //             console.log('error2: ', err);
    //         }
    //     }
    //     mutate1();
    //     mutate2();
    //     mutate3();
    //     mutate4();
    // });


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ForYou">
                <Stack.Screen
                    name="ForYou"
                    component={ForYou}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Creator"
                    component={Creator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}