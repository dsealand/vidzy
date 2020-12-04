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
        brandID
        createdAt
        updatedAt
      }
      productID
      creator {
        id
        username
        description
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorID
      URL
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
        brandID
        createdAt
        updatedAt
      }
      productID
      creator {
        id
        username
        description
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorID
      URL
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
        brandID
        createdAt
        updatedAt
      }
      productID
      creator {
        id
        username
        description
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorID
      URL
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
      description
      videos {
        items {
          id
          name
          productID
          creatorID
          URL
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
      description
      videos {
        items {
          id
          name
          productID
          creatorID
          URL
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
      description
      videos {
        items {
          id
          name
          productID
          creatorID
          URL
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
          createdAt
          updatedAt
        }
        nextToken
      }
      brandID
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
          createdAt
          updatedAt
        }
        nextToken
      }
      brandID
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
          createdAt
          updatedAt
        }
        nextToken
      }
      brandID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
      id
      description
      products {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brandID
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
      description
      products {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brandID
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
      description
      products {
        id
        name
        price
        description
        videos {
          nextToken
        }
        brandID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
