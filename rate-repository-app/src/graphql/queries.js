import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          stargazersCount
          reviewCount
          ratingAverage
          forksCount
          fullName
          language
          ownerAvatarUrl
          description
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    me {
      id
      username
    }
  }
`;

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
