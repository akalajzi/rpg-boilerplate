// @flow strict
import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'themes/default';
import Routes from 'scenes/Routes';

import './global.styles.scss';

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
