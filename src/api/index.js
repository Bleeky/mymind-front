import { gql } from 'apollo-boost';

const CREATE_MOOD = gql`
mutation CreateMood($description: String!, $mood: Int!) {
  createMood(description: $description, mood: $mood) {
      id,
      description,
      mood        
  }
}
`;

const GET_MOODS = gql`
query {
  moods {
      id,
      description,
      mood
  }
}
`;

const GET_MOOD = gql`
mutation GetMood($id: Int!) {
  createMood(description: $description, mood: $mood) {
      id,
      description,
      mood        
  }
}
`;

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

const ME = gql`
query {
  me {
    id
    username
  }
}
`;

export {
  SIGNUP, LOGIN, ME, CREATE_MOOD, GET_MOODS,
};
