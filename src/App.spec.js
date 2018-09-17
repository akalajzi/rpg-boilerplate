// @flow strict
import React from 'react';
import { shallow } from 'enzyme';

import defaultTheme from 'themes/default';
import App from './App';

describe('#App', () => {
  it('loads theme provider with default theme', () => {
    const comp = shallow(<App />);

    expect(comp.prop('theme')).toEqual(defaultTheme);
  });
});
