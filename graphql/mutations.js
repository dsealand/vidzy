/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createCreator = /* GraphQL */ `
  mutation CreateCreator(
    $input: CreateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    createCreator(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateCreator = /* GraphQL */ `
  mutation UpdateCreator(
    $input: UpdateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    updateCreator(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteCreator = /* GraphQL */ `
  mutation DeleteCreator(
    $input: DeleteCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    deleteCreator(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      price
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      price
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      price
      description
      createdAt
      updatedAt
    }
  }
`;
