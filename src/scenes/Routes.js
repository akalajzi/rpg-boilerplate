// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import { HomePage, GraphqlPage, BadUrlPage } from './index';

const Routes = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Helmet>
        <title>RPG</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/graphql" component={GraphqlPage} />
        {/* no match */}
        <Route component={BadUrlPage} />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>
);

export default Routes;
