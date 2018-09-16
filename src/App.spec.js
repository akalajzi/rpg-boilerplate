// @flow strict
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

// TODO: dont snapshot this, write meaningful test

describe('#App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
