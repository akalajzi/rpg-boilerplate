// @flow strict
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import { HomePage, BadUrlPage } from './index';

const Routes = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* no match */}
        <Route component={BadUrlPage} />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>
);

export default Routes;
