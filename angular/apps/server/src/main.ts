import { setup } from './connections/';
import { RouteHeroDetail } from './routes';
import { graphQLRouteRegister } from './routes/apollo/apollo-route';
import * as express from 'express';
import { setupAppServerConnection } from './connections/express';

const app = express();
setup().then(() => {
  RouteHeroDetail(app);
  graphQLRouteRegister(app);
  setupAppServerConnection(app);
});

// import { connectMongoose } from './connections/mongoDB';
// import { heroModel } from './models/mongooseSchema';
// import * as express from 'express';
// const app = express();
// app.get('/', async (req, res) => {
//   const hero = heroModel;
//   await connectMongoose();
//   const data = await hero.find({});
//   console.log(data);
//   res.json({ message: 'Ahoy!' });
// });
// app.listen(9000, () => {
//   console.log('Application is running on port 9000');
// });

// import * as express from 'express';
// import * as cors from 'cors'
// // import { graphqlExpress } from 'apollo-server-express';

// import { ApolloServer, gql } from 'apollo-server-express';
// const app = express();
// app.use(cors());

// async function startApolloServer() {
//   const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];
//   const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//   }
//   type Query {
//     books: [Book]
//   }
// `;
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });
//   await server.start();

//   const app = express();
//   server.applyMiddleware({ app });
//   app.listen({ port: 4000 },()=>{
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   })
//   return { server, app };

// }

// startApolloServer();
