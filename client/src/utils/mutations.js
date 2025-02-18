import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;
export const GET_USER = gql`
  query getUser {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      email
      firstName
      lastName
      _id
    }
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser($firstName: String, $lastName: String, $email: String,) {
  updateUser(firstName: $firstName, lastName: $lastName, email: $email,) {
    firstName
    lastName
    email
    _id
  }
}
  `;
