import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, StyleSheet, ViewComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { withAuthenticator } from 'aws-amplify-react-native'

import Login from "./src/screens/login";
import SignIn from "./src/screens/signin";
import SignUp from "./src/screens/signup";
import ForYou from "./src/screens/forYou";
import Creator from "./src/screens/creator";
import Product from "./src/screens/product";
import Cart from "./src/screens/cart";

Amplify.configure(awsmobile);

const Stack = createStackNavigator();

// const creator30 = { id: 30, username: "user30", description: "test user 30", photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC5603AQFXVK-jzSdujA%2Fprofile-displayphoto-shrink_200_200%2F0%3Fe%3D1611792000%26v%3Dbeta%26t%3Djx5pnyV9t_o_JRgDepnodt5MQYZHeFHNmPHEXnvrayM&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fevan-hassman&tbnid=lrEu6MjGS2k69M&vet=12ahUKEwij_JLR9NDuAhV9ATQIHavPDMUQMygDegQIARAx..i&docid=TUUz23F_1FLasM&w=200&h=200&q=evan%20hassman&client=ubuntu&ved=2ahUKEwij_JLR9NDuAhV9ATQIHavPDMUQMygDegQIARAx"};
// (async () => {
//     console.log("begin creator mutation test")
//     try {
//         const result = await API.graphql(graphqlOperation(mutations.updateCreator, { input: creator30 }));
//         console.log(result)
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("end video mutation test");
// })();


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

export default function withAuthenicator(App) {
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
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
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
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}