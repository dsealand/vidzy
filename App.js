import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from './aws-exports';
import { createVideo, updateVideo, deleteVideo} from './graphql/mutations';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsconfig.aws_appsync_apiKey,
  },
});

// test video input object
const testVideo = { id: 1, name: "vid1", productID: 1, creatorID: 1, URL: "https://google.com" };
(async () => {
  await API.graphql(graphqlOperation(createVideo, {input: testVideo}));
})();

(async () => {
  const result = await client.mutate({
    mutation: gql(createVideo),
    variables: {
      input: testVideo
    }
  });
  console.log(result.data.createTodo);
})();

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