import { gql } from 'apollo-server-express';
// import resolvers from '../resolvers/index';

export const heroTypeDefs = gql`
  type Query {
    heroes: [Hero!]!
  }
  type Hero {
    id: String!
    name: String!
  }
`;