import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

Amplify.configure(awsconfig);
console.reportErrorsAsExceptions = false;

const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: awsconfig.aws_appsync_apiKey,
    },
});

// test video input object
const testVideo = { id: 30, name: "vid30", productID: 30, creatorID: 30, URL: "https://yahoo.com" };
(async () => {
    console.log("begin mutation test")
    try {
        const result = await API.graphql(graphqlOperation(mutations.createVideo, { input: testVideo }));
        console.log(result)
    } catch (e) {
        console.log(e);
    }
    console.log("end video mutation test");
})();

// test brand input object
const testBrand = { id: 30, description: "test brand2"};
(async () => {
    console.log("begin brand mutation test")
    try {
        const result = await API.graphql(graphqlOperation(mutations.createBrand, { input: testBrand }));
        console.log(result)
    } catch (e) {
        console.log(e);
    }
    console.log("end brand mutation test");
})();

// test product input object
const testProduct = { id: 30, name: "product30", price: 10, description: "test product 1", brandID: 30 };
(async () => {
    console.log("begin mutation test")
    try {
        const result = await API.graphql(graphqlOperation(mutations.createProduct, { input: testProduct }));
        console.log(result)
    } catch (e) {
        console.log(e);
    }
    console.log("end product mutation test");
})();

// test video input object
const testCreator = { id: 30, username: "user30", description: "test user 30" };
(async () => {
    console.log("begin mutation test")
    try {
        const result = await API.graphql(graphqlOperation(mutations.createCreator, { input: testCreator }));
        console.log(result)
    } catch (e) {
        console.log(e);
    }
    console.log("end creator mutation test");
})();

// test getting video
(async () => {
    console.log("begin query test")
    var result;
    try {
        // result = await API.graphql(graphqlOperation(queries.getVideo, { id: 2 }));
        result = await API.graphql({ query: queries.getVideo, variables: { id: 30}});
        console.log(result)
    } catch (e) {
        console.log(e);
    }
    console.log("end query test", result)
}) ();

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});