// @flow strict
import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'themes/default';
import Routes from 'scenes/Routes';

import './global.styles.scss';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
