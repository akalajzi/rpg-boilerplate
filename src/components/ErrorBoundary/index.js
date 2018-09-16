// @flow strict
import React from 'react';

import { UnknownErrorPage } from 'scenes';
import { type RenderErrorInfo } from './types';

/**
 * Takes care of unhandled exceptions.
 */

type State = {
  error: ?Error,
};

type Props = {
  children: React$Node,
};

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: null,
  };

  // eventually log somewhere permanently
  logError = (error: Error, errorInfo: RenderErrorInfo) => {
    // eslint-disable-next-line
    console.error(error);
    // eslint-disable-next-line
    console.error(errorInfo.componentStack);
  };

  componentDidCatch(error: Error, errorInfo: RenderErrorInfo) {
    this.setState({ error });
    this.logError(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <UnknownErrorPage description={error.toString()} />;
    }

    return children;
  }
}

export default ErrorBoundary;
