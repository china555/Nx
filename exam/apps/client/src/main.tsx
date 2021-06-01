import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:3333/api',
//   cache: new InMemoryCache(),
// });
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
const books = gql`
  query books {
    books {
      title
      author
    }
  }
`;

function AuthorBooks() {
  const { loading, error, data } = useQuery(books);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }: any) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));
}

render(
  <ApolloProvider client={client}>
    <App />
    <AuthorBooks />
  </ApolloProvider>,
  document.getElementById('root')
);

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <div>
//         <h2>My first Apollo app 🚀</h2>
//         <ExchangeRates />
//       </div>
//     </ApolloProvider>
//   );
// }

// render(<App />, document.getElementById('root'));
