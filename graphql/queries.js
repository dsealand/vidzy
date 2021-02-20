/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      name
      product {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brand {
          id
          name
          description
          createdAt
          updatedAt
        }
        brandID
        userID
        images {
          nextToken
        }
        colors {
          nextToken
        }
        createdAt
        updatedAt
      }
      productID
      creator {
        id
        username
        photo
        description
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorID
      URL
      orientation
      viewCount
      createdAt
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        product {
          id
          name
          price
          description
          brandID
          userID
          createdAt
          updatedAt
        }
        productID
        creator {
          id
          username
          photo
          description
          createdAt
          updatedAt
        }
        creatorID
        URL
        orientation
        viewCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCreator = /* GraphQL */ `
  query GetCreator($id: ID!) {
    getCreator(id: $id) {
      id
      username
      photo
      description
      videos {
        items {
          id
          name
          productID
          creatorID
          URL
          orientation
          viewCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCreators = /* GraphQL */ `
  query ListCreators(
    $filter: ModelCreatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        photo
        description
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      description
      videos {
        items {
          id
          name
          productID
          creatorID
          URL
          orientation
          viewCount
          createdAt
          updatedAt
        }
        nextToken
      }
      brand {
        id
        name
        description
        products {
          id
          name
          price
          description
          brandID
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      brandID
      userID
      images {
        items {
          id
          URL
          productID
          createdAt
          updatedAt
        }
        nextToken
      }
      colors {
        items {
          id
          asset
          productID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brand {
          id
          name
          description
          createdAt
          updatedAt
        }
        brandID
        userID
        images {
          nextToken
        }
        colors {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImageData = /* GraphQL */ `
  query GetImageData($id: ID!) {
    getImageData(id: $id) {
      id
      URL
      productID
      createdAt
      updatedAt
    }
  }
`;
export const listImageDatas = /* GraphQL */ `
  query ListImageDatas(
    $filter: ModelImageDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        URL
        productID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getColorData = /* GraphQL */ `
  query GetColorData($id: ID!) {
    getColorData(id: $id) {
      id
      asset
      productID
      createdAt
      updatedAt
    }
  }
`;
export const listColorDatas = /* GraphQL */ `
  query ListColorDatas(
    $filter: ModelColorDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColorDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        asset
        productID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      description
      products {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brand {
          id
          name
          description
          createdAt
          updatedAt
        }
        brandID
        userID
        images {
          nextToken
        }
        colors {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        products {
          id
          name
          price
          description
          brandID
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
      id
      quantity
      price
      color
      product {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brand {
          id
          name
          description
          createdAt
          updatedAt
        }
        brandID
        userID
        images {
          nextToken
        }
        colors {
          nextToken
        }
        createdAt
        updatedAt
      }
      productID
      cartID
      createdAt
      updatedAt
    }
  }
`;
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        price
        color
        product {
          id
          name
          price
          description
          brandID
          userID
          createdAt
          updatedAt
        }
        productID
        cartID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLikedProduct = /* GraphQL */ `
  query GetLikedProduct($id: ID!) {
    getLikedProduct(id: $id) {
      id
      quantity
      color
      product {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brand {
          id
          name
          description
          createdAt
          updatedAt
        }
        brandID
        userID
        images {
          nextToken
        }
        colors {
          nextToken
        }
        createdAt
        updatedAt
      }
      productID
      cartID
      createdAt
      updatedAt
    }
  }
`;
export const listLikedProducts = /* GraphQL */ `
  query ListLikedProducts(
    $filter: ModelLikedProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikedProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        color
        product {
          id
          name
          price
          description
          brandID
          userID
          createdAt
          updatedAt
        }
        productID
        cartID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLikedVideo = /* GraphQL */ `
  query GetLikedVideo($id: ID!) {
    getLikedVideo(id: $id) {
      id
      userID
      video {
        id
        name
        product {
          id
          name
          price
          description
          brandID
          userID
          createdAt
          updatedAt
        }
        productID
        creator {
          id
          username
          photo
          description
          createdAt
          updatedAt
        }
        creatorID
        URL
        orientation
        viewCount
        createdAt
        updatedAt
      }
      videoID
      createdAt
      updatedAt
    }
  }
`;
export const listLikedVideos = /* GraphQL */ `
  query ListLikedVideos(
    $filter: ModelLikedVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikedVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        video {
          id
          name
          productID
          creatorID
          URL
          orientation
          viewCount
          createdAt
          updatedAt
        }
        videoID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      price
      cartProducts {
        items {
          id
          quantity
          price
          color
          productID
          cartID
          createdAt
          updatedAt
        }
        nextToken
      }
      likedProducts {
        items {
          id
          quantity
          color
          productID
          cartID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        cartProducts {
          nextToken
        }
        likedProducts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      cart {
        id
        price
        cartProducts {
          nextToken
        }
        likedProducts {
          nextToken
        }
        createdAt
        updatedAt
      }
      cartID
      likedVideos {
        items {
          id
          userID
          videoID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        cart {
          id
          price
          createdAt
          updatedAt
        }
        cartID
        likedVideos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
