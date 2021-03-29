/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      id
      name
      product {
        id
        name
        price
        link
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      id
      name
      product {
        id
        name
        price
        link
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      id
      name
      product {
        id
        name
        price
        link
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
export const onCreateCreator = /* GraphQL */ `
  subscription OnCreateCreator {
    onCreateCreator {
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
export const onUpdateCreator = /* GraphQL */ `
  subscription OnUpdateCreator {
    onUpdateCreator {
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
export const onDeleteCreator = /* GraphQL */ `
  subscription OnDeleteCreator {
    onDeleteCreator {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      price
      link
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
          link
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      price
      link
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
          link
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      price
      link
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
          link
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
export const onCreateImageData = /* GraphQL */ `
  subscription OnCreateImageData {
    onCreateImageData {
      id
      URL
      productID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImageData = /* GraphQL */ `
  subscription OnUpdateImageData {
    onUpdateImageData {
      id
      URL
      productID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImageData = /* GraphQL */ `
  subscription OnDeleteImageData {
    onDeleteImageData {
      id
      URL
      productID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateColorData = /* GraphQL */ `
  subscription OnCreateColorData {
    onCreateColorData {
      id
      asset
      productID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateColorData = /* GraphQL */ `
  subscription OnUpdateColorData {
    onUpdateColorData {
      id
      asset
      productID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteColorData = /* GraphQL */ `
  subscription OnDeleteColorData {
    onDeleteColorData {
      id
      asset
      productID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
      id
      name
      description
      products {
        id
        name
        price
        link
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
      id
      name
      description
      products {
        id
        name
        price
        link
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
      id
      name
      description
      products {
        id
        name
        price
        link
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      quantity
      price
      color
      product {
        id
        name
        price
        link
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      quantity
      price
      color
      product {
        id
        name
        price
        link
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      quantity
      price
      color
      product {
        id
        name
        price
        link
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
export const onCreateLikedProduct = /* GraphQL */ `
  subscription OnCreateLikedProduct {
    onCreateLikedProduct {
      id
      quantity
      color
      product {
        id
        name
        price
        link
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
export const onUpdateLikedProduct = /* GraphQL */ `
  subscription OnUpdateLikedProduct {
    onUpdateLikedProduct {
      id
      quantity
      color
      product {
        id
        name
        price
        link
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
export const onDeleteLikedProduct = /* GraphQL */ `
  subscription OnDeleteLikedProduct {
    onDeleteLikedProduct {
      id
      quantity
      color
      product {
        id
        name
        price
        link
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
export const onCreateLikedVideo = /* GraphQL */ `
  subscription OnCreateLikedVideo {
    onCreateLikedVideo {
      id
      userID
      video {
        id
        name
        product {
          id
          name
          price
          link
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
export const onUpdateLikedVideo = /* GraphQL */ `
  subscription OnUpdateLikedVideo {
    onUpdateLikedVideo {
      id
      userID
      video {
        id
        name
        product {
          id
          name
          price
          link
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
export const onDeleteLikedVideo = /* GraphQL */ `
  subscription OnDeleteLikedVideo {
    onDeleteLikedVideo {
      id
      userID
      video {
        id
        name
        product {
          id
          name
          price
          link
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
