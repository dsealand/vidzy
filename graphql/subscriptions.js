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
export const onCreateCreator = /* GraphQL */ `
  subscription OnCreateCreator {
    onCreateCreator {
      id
      username
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
      createdAt
      updatedAt
    }
  }
`;
