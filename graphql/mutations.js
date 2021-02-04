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
export const createCreator = /* GraphQL */ `
  mutation CreateCreator(
    $input: CreateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    createCreator(input: $input, condition: $condition) {
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
export const updateCreator = /* GraphQL */ `
  mutation UpdateCreator(
    $input: UpdateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    updateCreator(input: $input, condition: $condition) {
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
export const deleteCreator = /* GraphQL */ `
  mutation DeleteCreator(
    $input: DeleteCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    deleteCreator(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVideoUserHistory = /* GraphQL */ `
  mutation CreateVideoUserHistory(
    $input: CreateVideoUserHistoryInput!
    $condition: ModelVideoUserHistoryConditionInput
  ) {
    createVideoUserHistory(input: $input, condition: $condition) {
      id
      videoID
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateVideoUserHistory = /* GraphQL */ `
  mutation UpdateVideoUserHistory(
    $input: UpdateVideoUserHistoryInput!
    $condition: ModelVideoUserHistoryConditionInput
  ) {
    updateVideoUserHistory(input: $input, condition: $condition) {
      id
      videoID
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideoUserHistory = /* GraphQL */ `
  mutation DeleteVideoUserHistory(
    $input: DeleteVideoUserHistoryInput!
    $condition: ModelVideoUserHistoryConditionInput
  ) {
    deleteVideoUserHistory(input: $input, condition: $condition) {
      id
      videoID
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
