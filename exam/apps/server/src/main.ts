/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors'
// import { graphqlExpress } from 'apollo-server-express';

import { ApolloServer, gql } from 'apollo-server-express';
const app = express();
app.use(cors());

async function startApolloServer() {
  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 },()=>{
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  })
  return { server, app };

}


startApolloServer();


