// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';

import BadUrlPage from '../BadUrlPage';

describe('#BadUrlPage', () => {
  test('render', () => {
    const component = renderer.create(<BadUrlPage />);

    expect(component).toMatchSnapshot();
  });
});
