import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

Amplify.configure(awsmobile);

export async function getVideos() {
    let videos = [];
    console.log("ran mdoular query");
    try {
        const apiData = await API.graphql(graphqlOperation(queries.listVideos));
        videos = apiData.data.listVideos.items;
        console.log("ran query");
        return videos;
    } catch (err) {
        console.log('error1: ', err);
    }
    console.log("test getvideos modular");
    console.log(videos);
    // return videos;
}