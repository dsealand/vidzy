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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateVideoUserHistory = /* GraphQL */ `
  subscription OnCreateVideoUserHistory {
    onCreateVideoUserHistory {
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
export const onUpdateVideoUserHistory = /* GraphQL */ `
  subscription OnUpdateVideoUserHistory {
    onUpdateVideoUserHistory {
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
export const onDeleteVideoUserHistory = /* GraphQL */ `
  subscription OnDeleteVideoUserHistory {
    onDeleteVideoUserHistory {
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
