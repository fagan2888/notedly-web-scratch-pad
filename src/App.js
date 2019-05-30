import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import Pages from './pages';
import { Global } from '@emotion/core';

import GlobalStyle from './components/GlobalStyle';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/api',
  headers: {
    authorization: localStorage.getItem('token') || ''
  }
});

const client = new ApolloClient({
  cache,
  link
});

const App = () => (
  <ApolloProvider client={client}>
    <Global styles={GlobalStyle} />
    <Pages />
  </ApolloProvider>
);

export default App;
