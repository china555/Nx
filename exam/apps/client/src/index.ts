import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3333/api',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));