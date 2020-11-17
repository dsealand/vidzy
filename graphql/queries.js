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
        createdAt
        updatedAt
      }
      creator {
        id
        username
        createdAt
        updatedAt
      }
      URL
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
          createdAt
          updatedAt
        }
        creator {
          id
          username
          createdAt
          updatedAt
        }
        URL
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
