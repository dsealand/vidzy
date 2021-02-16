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
export const createImageData = /* GraphQL */ `
  mutation CreateImageData(
    $input: CreateImageDataInput!
    $condition: ModelImageDataConditionInput
  ) {
    createImageData(input: $input, condition: $condition) {
      id
      URL
      productID
      createdAt
      updatedAt
    }
  }
`;
export const updateImageData = /* GraphQL */ `
  mutation UpdateImageData(
    $input: UpdateImageDataInput!
    $condition: ModelImageDataConditionInput
  ) {
    updateImageData(input: $input, condition: $condition) {
      id
      URL
      productID
      createdAt
      updatedAt
    }
  }
`;
export const deleteImageData = /* GraphQL */ `
  mutation DeleteImageData(
    $input: DeleteImageDataInput!
    $condition: ModelImageDataConditionInput
  ) {
    deleteImageData(input: $input, condition: $condition) {
      id
      URL
      productID
      createdAt
      updatedAt
    }
  }
`;
export const createColorData = /* GraphQL */ `
  mutation CreateColorData(
    $input: CreateColorDataInput!
    $condition: ModelColorDataConditionInput
  ) {
    createColorData(input: $input, condition: $condition) {
      id
      asset
      productID
      createdAt
      updatedAt
    }
  }
`;
export const updateColorData = /* GraphQL */ `
  mutation UpdateColorData(
    $input: UpdateColorDataInput!
    $condition: ModelColorDataConditionInput
  ) {
    updateColorData(input: $input, condition: $condition) {
      id
      asset
      productID
      createdAt
      updatedAt
    }
  }
`;
export const deleteColorData = /* GraphQL */ `
  mutation DeleteColorData(
    $input: DeleteColorDataInput!
    $condition: ModelColorDataConditionInput
  ) {
    deleteColorData(input: $input, condition: $condition) {
      id
      asset
      productID
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
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
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
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
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
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
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
export const createLikedProduct = /* GraphQL */ `
  mutation CreateLikedProduct(
    $input: CreateLikedProductInput!
    $condition: ModelLikedProductConditionInput
  ) {
    createLikedProduct(input: $input, condition: $condition) {
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
export const updateLikedProduct = /* GraphQL */ `
  mutation UpdateLikedProduct(
    $input: UpdateLikedProductInput!
    $condition: ModelLikedProductConditionInput
  ) {
    updateLikedProduct(input: $input, condition: $condition) {
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
export const deleteLikedProduct = /* GraphQL */ `
  mutation DeleteLikedProduct(
    $input: DeleteLikedProductInput!
    $condition: ModelLikedProductConditionInput
  ) {
    deleteLikedProduct(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      price
      cartProducts {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      price
      cartProducts {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      price
      cartProducts {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
