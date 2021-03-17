import React, { useEffect, useState } from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

import VideoStackPage from "../components/videoStackPage";

Amplify.configure(awsmobile);

const Product = ({ route, navigation }) => {
    const { product, back } = route.params;
    const [videoStack, setVideoStack] = useState([]);

    // video query with useEffect hook and async function
    useEffect(() => {
        async function getVideos() {
            try {
                const apiData = await API.graphql(graphqlOperation(queries.listVideos, {
                    filter: {
                        productID: {
                            eq: product.id
                        }
                    }
                }));
                const videos = apiData.data.listVideos.items;
                setVideoStack(videos);
            } catch (err) {
                console.log('error getting product video stack: ', err);
            }
        }
        getVideos();
    }, []);

    return (
        <VideoStackPage
            navigation={navigation}
            headerText={product.name}
            videoStack={videoStack}
            back={back}
        />
    );
};

export default Product;
