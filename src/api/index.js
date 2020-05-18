import { gql } from 'apollo-boost';

const SIGNUP = gql`
mutation Signup($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    user {
      id,
      username        
    }
  }
}
`;

const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}
`;

export { SIGNUP, LOGIN };
