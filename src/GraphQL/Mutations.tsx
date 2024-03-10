import { gql } from "@apollo/client";

export const User= gql`
mutation CreateUser($email: String!, $password: String!) {
    createUser(input: { email: $email, password: $password }) {
      
      email
    }
  }
   
`;
