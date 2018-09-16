// @flow strict
/* eslint-disable no-console */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from '../index';

function BuggedChild({ throwError }: { throwError: boolean }) {
  if (throwError) {
    // eslint-disable-next-line fp/no-throw
    throw new Error('Test throw Error');
  }
  return <div>Error</div>;
}

describe('#ErrorBoundary', () => {
  test('error is thrown', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <BuggedChild throwError />
      </ErrorBoundary>,
    );

    expect(() => {
      wrapper.dive().html();
    }).toThrowError('Test throw Error');
  });

  test('catch errors with componentDidCatch', () => {
    // mute react throwing everything in console
    // $FlowFixMe
    console.error = jest.fn();
    // eslint-disable-next-line no-underscore-dangle
    jest.spyOn(window._virtualConsole, 'emit').mockImplementation(() => false);

    jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    mount(
      <Router>
        <ErrorBoundary>
          <BuggedChild throwError />
        </ErrorBoundary>
      </Router>,
    );
    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled();
  });
});
