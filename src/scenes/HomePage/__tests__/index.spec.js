// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from '../index';

describe('#HomePage', () => {
  test('render', () => {
    const component = renderer.create(<HomePage />);

    expect(component).toMatchSnapshot();
  });
});
