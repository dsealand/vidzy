import React, { Component } from "react";
import style from "styled-components/native";

import VideoCard from "./src/components/videoCard";
import Explore from "./src/screens/explore";
import api from "./src/screens/info";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

Amplify.configure(awsconfig);

const Window = style.SafeAreaView`
	justifyContent: flex-start;
	alignItems: center;
`;

class App extends Component {
    state = { videos: [] }
    async componentDidMount() {
        try {
            const apiData = await API.graphql(graphqlOperation(queries.listVideos))
            const videos = apiData.data.listVideos.items
            this.setState({ videos })
            console.log(videos)
        } catch (err) {
            console.log('error: ', err)
        }
    }

    render() {
        return (
            <Window>
                {/* <Explore videos={api} /> */}
                <Explore videos={this.state.videos} />
            </Window>
        );
    }
}

export default App