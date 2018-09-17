// @flow strict
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'themes/default';
import Routes from 'scenes/Routes';

import './global.styles.scss';

//  This boilerplate uses free graph.cool service to demonstrate a simple query example
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjm6301ha6gxz010083zajowr',
  // headers: {
  //   Authorization:
  //     'Bearer API_KEY',
  // },
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
