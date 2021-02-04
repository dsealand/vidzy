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
      userHistory {
        id
        videoID
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
        user {
          id
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
        userHistory {
          id
          videoID
          userID
          createdAt
          updatedAt
        }
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      history {
        id
        videoID
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
        user {
          id
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        history {
          id
          videoID
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
