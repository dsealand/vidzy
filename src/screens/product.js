import React from "react";

import VideoStackPage from "../components/videoStackPage";

import api from "../data/productStack_api";

const Product = ({ route, navigation }) => {
    const { product, back } = route.params;
    return (
        <VideoStackPage
            navigation={navigation}
            headerText={product.product.name}
            videoStack={api}
            back={back}
        />
    );
};

export default Product;
